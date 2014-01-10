Title: Pure btrfs installation
Date: 2013-12-27 05:45
Tags: arch linux, install, partitionless, btrfs, ssd, backup, snapshots
Category: arch linux
Slug: pure-btrfs-installation
Author: w0ng
Summary: Fresh install of Arch Linux on a partitionless btrfs SSD. How to create/delete/rename subvolumes. Create snapshots and rollback subvolumes.

btrfs is a copy-on-write (COW) filesystem for Linux that uses a B-tree
structure to store data types. From [Wikipedia][cow], the idea behind a COW
optimisation strategy is that separate processes share the same immutable data.
When one or more processes request to modify data, rather than being
overwritten in place, logical copies are made and (only) the modified blocks
get stored at a new location.

The nature of this makes it an attractive option for installing Linux on SSD
drives. The [btrfs Wiki][btrfs] lists all the available features, but the ones
that sold me over `ext4` are:

1.  Writable snapshots, read-only snapshots
2.  Subvolumes (separate internal filesystem roots)
3.  Compression (zlib and LZO)

A quick Google search revealed that it's stable enough for me to want to try it
out.

btrfs Wiki's [main page][stable]:

>   The filesystem disk format is no longer unstable, and it's not expected to
>   change unless there are strong reasons to do so. If there is a format
>   change, file systems with a unchanged format will continue to be mountable
>   and usable by newer kernels.

btrfs Wiki's [FAQ][faq]:

>   Many of the developers and testers run btrfs as their primary filesystem
>   for day-to-day usage, or with various forms of "real" data. With reliable
>   hardware and up-to-date kernels, we see very few unrecoverable problems
>   showing up.

[cow]: http://en.wikipedia.org/wiki/Copy-on-write
[btrfs]: https://btrfs.wiki.kernel.org/index.php/Main_Page#Features
[stable]: https://btrfs.wiki.kernel.org/index.php/Main_Page#Stability_status
[faq]: https://btrfs.wiki.kernel.org/index.php/FAQ#Is_btrfs_stable.3F

## Intro: btrfs Subvolumes

Before we continue, it's probably a good idea to quickly explain what btrfs
[subvolumes][subvolumes] are. The btrfs Wiki states that a subvolume can be
thought of as a POSIX file namespace. At the top of all subvolumes is a default
subvolume. If a subvolume is explicitly chosen to be mounted, it is accessed
directly from the mount point. Otherwise, it is accessed through the closest
mounted ancestor subvolume.

For example, let's assume that this is our btrfs filesystem layout on
`/dev/sda`:

    :::text
    subvolid=0
    ├── dir_a
    │   ├── dir_b
    │   └── dir_c
    └── subvol_d
        ├── dir_e
        │   └── subvol_f
        └── dir_g

If we `mount` without specifying a subvolume, then the default subvolume is
assumed:

    :::text
    mount /dev/sda /mnt && tree /mnt

    /mnt
    ├── dir_a
    │   ├── dir_b
    │   └── dir_c
    └── subvol_d
        ├── dir_e
        │   └── subvol_f
        └── dir_g

If we `mount -o subvol=subvol_d`, then that becomes the top-most subvolume:

    :::text
    mount -o subvol=subvol_d /dev/sda /mnt && tree /mnt

    /mnt
    ├── dir_e
    │   └── subvol_f
    └── dir_g

Mounting a subvolume recursively mounts all descendent subvolumes, so:

    :::text
    mount /dev/sda /mnt

Implies:

    :::text
    mount -o subvol=subvol_d /dev/sda /mnt/subvol_d
    mount -o subvol=subvol_d/dir_e/subvol_f /dev/sda /mnt/subvol_d/dir_e/subvol_f

The opposite is true with snapshots and incremental backups. Descendent
subvolumes are NOT included when performing snapshots. We'll come back to
snapshots later.

[subvolumes]:https://btrfs.wiki.kernel.org/index.php/SysadminGuide#Subvolumes

## Installation

I performed a fresh install on an older secondary Thinkpad running off a 60GB
SSD drive. Because it's a non-critical system, I chose to go with a pure
partition-less setup, whereby a btrfs filesystem was built directly onto
`/dev/sda`, replacing the need to setup an MBR or GPT. Instead of partitions, I
created subvolumes.

### Initial setup

After backing up data, install the latest [Arch Linux ISO][iso]:

    :::text
    dd bs=4M if=~/downloads/archlinux.iso of=/dev/sdb && sync

Boot into the installation medium and perform a [SSD memory cell clearing][cell].
As per ArchWiki, I had to unfreeze the drive security by sleeping and waking up
my Thinkpad in order to proceed.

    :::text
    hdparm --user-master u --security-set-pass foo /dev/sda
    hdparm --user-master u --security-erase foo /dev/sda

### Create a btrfs filesystem

Build a btrfs filesystem on the entire SSD and create subvolumes:

    :::text
    mkfs.btrfs -L arch_ssd /dev/sda
    mount /dev/sda /mnt
    cd /mnt
    btrfs subvolume create __active
    btrfs subvolume create __active/rootvol
    btrfs subvolume create __active/home
    btrfs subvolume create __active/var
    btrfs subvolume create __snapshots

The reason for having `rootvol` on a dedicated subvolume is that it makes
recovering from snapshots easier than if `home` and `var` were children of
`rootvol`.

Mount the subvolumes:

    :::text
    cd
    umount /mnt
    mount -o subvol=__active/rootvol /dev/sda /mnt
    mkdir /mnt/{home,var}
    mount -o subvol=__active/home /dev/sda /mnt/home
    mount -o subvol=__active/var /dev/sda /mnt/var

Proceed with [installing Arch Linux][install].

### Post-installation

Create a mount point for the default subvolume:

    :::text
    mkdir /mnt/defvol/

Modify `/etc/fstab` to mount the default subvolume on boot and update the mount
options based on [ArchWiki][archbtrfs] recommendations:

    :::linux-config
    #
    # /etc/fstab: static file system information
    #
    # <file system> <dir>             <type>    <options> <dump> <pass>
    LABEL=arch_ssd  /                 btrfs     rw,noatime,compress=lzo,ssd,discard,autodefrag,inode_cache,subvol=__active/rootvol 0 0
    LABEL=arch_ssd  /home             btrfs     rw,noatime,compress=lzo,ssd,discard,autodefrag,inode_cache,subvol=__active/home 0 0
    LABEL=arch_ssd  /var              btrfs     rw,noatime,compress=lzo,ssd,discard,autodefrag,inode_cache,subvol=__active/var 0 0
    LABEL=arch_ssd  /mnt/defvol       btrfs     rw,noatime,compress=lzo,ssd,discard,autodefrag,inode_cache 0 0

[iso]: https://www.archlinux.org/download/
[cell]: https://wiki.archlinux.org/index.php/SSD_Memory_Cell_Clearing
[blog]: http://blog.fabio.mancinelli.me/2012/12/28/Arch_Linux_on_BTRFS.html
[install]: https://wiki.archlinux.org/index.php/Installation_Guide
[archbtrfs]: https://wiki.archlinux.org/index.php/Btrfs#Mount_options

## Snapshots and rollbacks

Utilising its COW capabilities, users are able to manage snapshots in btrfs.
Snapshots are a cheap way of backing up and restoring data. A snapshot freezes
the state of the system at a point in time rather than duplicating content.

In order to access btrfs utilities, install `btrfs-progs`:

    pacman -S btrfs-progs

To perform a read-only snapshot on each subvolume:

    :::text
    cd /mnt/defvol
    btrfs subvolume snapshot -r __active/rootvol __snapshots/root-$(date "+%F")
    btrfs subvolume snapshot -r __active/home __snapshots/home-$(date "+%F")
    btrfs subvolume snapshot -r __active/var __snapshots/var-$(date "+%F")

You should see newly created read-only subvolumes on your btrfs filesystem.

To list available snapshots, list your subvolumes:

    :::text
    btrfs subvolume list /mnt/defvol

To delete a snapshot, delete the subvolume:

    :::text
    btrfs subvolume delete /mnt/defvol/__snapshots/home-2013-12-27

To rename a snapshot, move the directory:

    :::text
    cd /mnt/defvol/__snapshots/home-2013-12-27 /mnt/defvol/__snapshots/home-OLD

Recall that we created read-only snapshots. To rollback to a read-only
snapshot, rename the active subvolume, then create a writeable snapshot of the
old snapshot to the original location.

    :::text
    cd /mnt/defvol
    mv __active/rootvol __active/rootvol-bad
    btrfs subvolume snapshot __snapshots/root-2013-12-27 __active/rootvol

For writeable snapshots, we can simply move the old snapshot back to the
original location.

    :::text
    cd /mnt/defvol
    mv __active/rootvol __active/rootvol-bad
    mv __snapshots/root-2013-12-27 __active/rootvol

Changes take effect after rebooting.
