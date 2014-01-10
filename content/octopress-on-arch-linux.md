Title: Octopress on Arch Linux
Date: 2013-01-16 10:20
Tags: arch linux, octopress
Category: arch linux
Slug: octopress-on-arch-linux
Author: w0ng
Summary: Why choose Octopress as a blogging platform and how to set it up Octopress on Arch Linux.

Over the past year, I've been infrequently blogging at
[archlinux.me](http://archlinux.me/w0ng/) to write up tips I found along the
way that weren't on [Arch Wiki](https://wiki.archlinux.org/index.php/Main_Page)
or tips posted in [Arch Forums](https://bbs.archlinux.org/index.php).


## Why Octopress?

I wanted a new blog to be able to post more than just just neckbeard-related
things.

I found [Octopress](http://octopress.org/) attractive because it suits my
current desktop environment. A lot of my time is spent in terminals. I use a
standalone tiling window manager, dwm. With the exception of Pentadactyl, most
of my common applications are CLI ones. Vim is my editor of choice.

The workflow of publishing a new blog post in Octopress is:

1.  Create a new blog post: `rbenv exec rake "new_post[title]"`.
2.  Fill in the content using
    [Markdown](http://daringfireball.net/projects/markdown/): `vim
    source/_posts/2013-01-16-title.markdown`.
3.  Preview the blog post: `rbenv exec rake preview`.
3.  Convert the source file to html: `rbenv exec rake generate`.
5.  Rsync the changes to your remote web server, or push it to GitHub Pages.

All steps are trivial and can be done without leaving the terminal (except for
previewing in your web browser).


## Installing Octopress

Install Git.

    :::text
    # pacman -S git

Setup rbenv and the ruby-build plugin to sandbox ruby installations.

    :::text
    $ git clone git://github.com/sstephenson/rbenv.git ~/.rbenv
    $ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshenv
    $ echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.zshenv
    $ echo 'source "$HOME/.rbenv/completions/rbenv.zsh' >> ~/.zshrc
    $ git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build

Logout and re-login.

Setup Octopress and the Ruby version it uses.

    :::text
    $ git clone git://github.com/imathis/octopress.git octopress
    $ cd octopress
    $ rbenv install $(cat .rbenv-version)
    $ rbenv rehash
    $ rbenv exec gem install bundler
    $ rbenv rehash
    $ rbenv exec bundle install

Install the default Octopress theme

    :::text
    $ rbenv exec rake install


## Fixing syntax highlighting errors

You may notice errors occurring when trying the preview or generate new posts
containing code snippets or embedded gists.

For example,

    :::text
    /home/w0ng/.rbenv/versions/1.9.3-p194/lib/ruby/gems/1.9.1/gems/pygments.rb-0.3.4/lib/pygments/popen.rb:354:in `rescue in get_header': Failed to get header. (MentosError)

or

    :::text
    Liquid Exception: Failed to get header. in 2013-01-16-octopress-on-archlinux.markdown

This is caused by Python 3 being unsupported by the
[pygments.rb](https://github.com/tmm1/pygments.rb) gem. The gem calls Python
via `#!/usr/bin/env python`. In Arch Linux, `python` defaults to Python 3.x and
`python2` to Python 2.x.

To workaround this, use
[python-virtualenvwrapper](https://wiki.archlinux.org/index.php/Python_VirtualEnv#Virtualenvwrapper)
to sandbox Python installations. It can redirect `python` to Python 2.7 inside
a virtualenv.

    :::text
    # pacman -S python-virtualenvwrapper
    $ export WORKON_HOME=$HOME/.virtualenvs >> ~/.zshenv
    $ mkdir -p $WORKON_HOME
    $ source /usr/bin/virtualenvwrapper.sh
    $ mkvirtualenv -p python2.7 --distribute blog_env

To enter the virtualenv, run `workon blog_env`. To exit a virtualenv, run
`deactivate`. 

Previewing and generating syntax highlighted Octopress posts should work within
a Python 2.7 virtualenv.

