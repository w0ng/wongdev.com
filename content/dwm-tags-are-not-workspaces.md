Title: dwm: Tags are not workspaces
Date: 2013-01-24
Tags: dwm
Category: arch linux
Slug: dwm-tags-are-not-workspaces
Author: w0ng
Summary: Why the concept of tags are more dynamic than conventional workspaces.

[dwm](http://dwm.suckless.org/) is a tiling window manager for Linux that I run
on my main PC. I prefer dwm over other tiling window managers because its
minimalism follows Arch Linux's
[KISS](https://wiki.archlinux.org/index.php/The_Arch_Way) philosophy.

Out of the box dwm is light, fast and simple. If you want extra functionality -
and most users do - you'll edit the source code, recompile and reinstall it.

## Defining tags and workspaces

Users often confuse dwm's tagging system with workspaces (or virtual desktops).
Once you understand that tags are not workspaces, you'll realise why dwm was
given its name - _dynamic_ window manager - and how powerful it is.

A _tag_ is simply a label placed on windows. A window may have one or more
tags.  Tags provide no other functionality.

A _workspace_ is the arrangement of windows from one or more tags. One of two
workspaces must be active at all times. dwm refers to a workspace as a
_view_.

Hereafter, view will be also used interchangeably with workspace.

## Better keyboard and mouse bindings

Ironically, dwm's default hotkeys are setup in such a way that it actually
promotes treating tag-as-views rather than tags-as-tags.

By default, `MODKEY + [1-9]` will switch the view to to that tag's windows and
`MODKEY + Ctrl + [1-9]` will toggle that tag's windows to/from the current
view. When treating tags-as-tags, the latter occurs far more often. It makes
sense to switch these keybindings around so that the more common operation
requires less keypresses.

Likewise, `Button1` clicking a tag number in dwm's bar switches the view to
that tag's windows and `Button3` clicking toggles that tag's windows from the
current view.  Again, it makes sense for us to switch these bindings around so
that the more common operation is executed with a left mouse click instead of a
right.

To do so, make these changes in `config.h`:

    :::diff
    --- a/config.h  2013-01-25 05:20:04.618352250 +1100
    +++ b/config.h  2013-01-25 05:22:40.357508538 +1100
    @@ -37,8 +37,8 @@ static const Layout layouts[] = {
     /* key definitions */
     #define MODKEY Mod1Mask
     #define TAGKEYS(KEY,TAG) \
    -   { MODKEY,                       KEY,      view,           {.ui = 1 << TAG} }, \
    -   { MODKEY|ControlMask,           KEY,      toggleview,     {.ui = 1 << TAG} }, \
    +   { MODKEY,                       KEY,      toggleview,     {.ui = 1 << TAG} }, \
    +   { MODKEY|ControlMask,           KEY,      view,           {.ui = 1 << TAG} }, \
        { MODKEY|ShiftMask,             KEY,      tag,            {.ui = 1 << TAG} }, \
        { MODKEY|ControlMask|ShiftMask, KEY,      toggletag,      {.ui = 1 << TAG} },
     
    @@ -97,8 +97,8 @@ static Button buttons[] = {
        { ClkClientWin,         MODKEY,         Button1,        movemouse,      {0} },
        { ClkClientWin,         MODKEY,         Button2,        togglefloating, {0} },
        { ClkClientWin,         MODKEY,         Button3,        resizemouse,    {0} },
    -   { ClkTagBar,            0,              Button1,        view,           {0} },
    -   { ClkTagBar,            0,              Button3,        toggleview,     {0} },
    +   { ClkTagBar,            0,              Button1,        toggleview,     {0} },
    +   { ClkTagBar,            0,              Button3,        view,           {0} },
        { ClkTagBar,            MODKEY,         Button1,        tag,            {0} },
        { ClkTagBar,            MODKEY,         Button3,        toggletag,      {0} },
     };

## My workflow: two workspaces

I use 9 tags with rules in `config.h` for the following:

1.  Web browser: `firefox`
2.  Communication: `tmux` instance (`irssi`, `mutt`, `transmission-remote-cli`)
3.  Coding: `gvim`
4.  Documents: `libreoffice-calc`, `libreoffice-impress`, `libreoffice-writer`,
    `zathura`
5.  Video: `mplayer2`
6.  GUI Editors: `gbdfed`, `gimp`, `fontforge`, `inkscape`
7.  File manager: `ranger`
8.  N/A
9.  N/A

I mostly have 2 to 4 windows visible at a time. When a view gets too crammed,
I'll re-tag some windows with `MODKEY + Shift + [1-9]` and toggle those tags'
windows into view with `MODKEY + [1-9]` when needed.

Aside from toggling tags to/from the current view and re-tagging windows , the
third most common tagging operation I use daily is `MODKEY + Tab` to switch
between the current and most recent views.

In fact, the only times I use `MODKEY + Ctrl + [1-9]` to change views is on
startup or if my previous view contains windows from all tags after executing
`MODKEY + 0`.

Here's an example.

On startup, the first tag is automatically selected. I hit `MODKEY + 2` and
`MODKEY + 5` to toggle windows from tags 2 and 5 into view:

[![dwmshot1](/img/dwmshot1-small.png)](/img/dwmshot1.png)

Then I created a new view with `MODKEY + Ctrl + 3` and toggled windows
from tag 4 into it with `MODKEY + 4`:

[![dwmshot2](/img/dwmshot2-small.png)](/img/dwmshot2.png)

`MODKEY + Tab` will now toggle between the first and second screenshots.

From the first screenshot, I toggled tag 3 windows into view with `MODKEY + 3`
and re-arranged the windows such that the `config.h` file became the master
client, appearing on the left, and the `.markdown` file became the last
client, appearing on the bottom-right.

[![dwmshot3](/img/dwmshot3-small.png)](/img/dwmshot3.png)

Toggling tag 3's windows out of the view again with `MODKEY + 3` brought me
back to the first screenshot. Then `MODKEY + Tab` got me back to the second
screenshot.

From the second screenshot, I toggled windows from tag 1 or 2 into view. Notice
that the positioning of the windows is remembered from the third screenshot.

[![dwmshot4](/img/dwmshot4-small.png)](/img/dwmshot4.png)

[![dwmshot5](/img/dwmshot5-small.png)](/img/dwmshot5.png)

As you'd expect, if I'd toggled windows from both tags 1 and 2 into view, it'd
be identical to the third screenshot.

This is what makes dwm's tagging system so powerful. Users are able to
dynamically arrange all windows in different ways and it'll always be
remembered, regardless of what windows or what tag numbers are visible in the
current view.

## Revision: dwm's bar

For those who are still a bit confused, here's some examples to describe the
information displayed in dwm's bar.

![dwmbar1](/img/dwmbar1.png)

*   A view displaying windows labelled tag 1.
*   A tag 1 window has focus.

![dwmbar2](/img/dwmbar2.png)

*   A view displaying windows labelled tags 1 and 5. 
*   A tag 1 window has focus.
*   One or more tag 5 windows are visible but not focussed.


![dwmbar3](/img/dwmbar3.png)

*   A view displaying windows labelled tags 1, 2 and 5.
*   A window that is assigned to both tags 1 and 2 has focus.
*   One or more tag 5 windows are visible but not focussed.

![dwmbar4](/img/dwmbar4.png)

*   A view displaying windows assigned to tag 3 and tag 4.
*   There are no visible windows.
*   One or more hidden windows are assigned to tags 1, 2 and 5.
