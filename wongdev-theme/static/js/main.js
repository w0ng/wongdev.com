/* Graphs for archlinux apps 
 * http://webdesign.tutsplus.com/tutorials/complete-websites/build-a-dynamic-dashboard-with-chartjs/
 */

(function(){
// set up the timeout variable
var t;
// setup the sizing function,
// with an argument that tells the chart to animate or not
function size(animate){
    // If we are resizing, we don't want the charts drawing on every resize event.
    // This clears the timeout so that we only run the sizing function
    // when we are done resizing the window
    clearTimeout(t);
    // This will reset the timeout right after clearing it.
    t = setTimeout(function(){
        $("canvas").each(function(i,el){
            // Set the canvas element's height and width to it's parent's height and width.
            // The parent element is the div.canvas-container
            $(el).attr({
                "width":$(el).parent().width(),
                // "height":$(el).parent().outerHeight()
                // keep height at 300px always
                "height":300
            });
        });
        // kickoff the redraw function, which builds all of the charts.
        redraw(animate);
        // loop through the widgets and find the tallest one, and set all of them to that height.
        var m = 0;
        // we have to remove any inline height setting first so that we get the automatic height.
        $(".widget").height("");
        $(".widget").each(function(i,el){ m = Math.max(m,$(el).height()); });
        $(".widget").height(m);
    }, 100); // the timeout should run after 100 milliseconds
}
$(window).on('resize', size);
function redraw(animation){
    var options = {
        scaleLabel: "<%=value%>%",
        scaleFontFamily: "'Open Sans', sans-serif",
        scaleFontColor: "#333",
        barValueSpacing: 15,
        animation:  false
    };
    /*
    if (!animation){
        options.animation = false;
    } else {
        options.animation = true;
    }
    */
    // ....
        // the rest of our chart drawing will happen here
    // ....
    //
    var data = {
        labels : ["awesome","bspwm","dwm","i3","xmonad"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [12,0,4,10,4]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [28,0,16,9,13]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [17,5,7,23,12]
            }
        ]
    }
    var canvas = document.getElementById("tilingWM")
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["fluxbox","kwin","mutter","openbox","xfwm"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [8,35,26,24,25]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [8,4,2,43,10]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [3,12,7,22,11]
            }
        ]
    }
    canvas = document.getElementById("floatingWM")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["cinnamon","gnome","kde","lxde","xfce"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [5,29,35,10,25]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,8,8,11,22]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [7,15,18,3,21]
            }
        ]
    }
    canvas = document.getElementById("desktopEnv")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["gdm","kdm","lightdm","lxdm","slim"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [25,35,6,12,24]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [5,4,4,6,37]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [15,12,9,4,24]
            }
        ]
    }
    canvas = document.getElementById("displayMgr")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["bash","dash","fish","zsh"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [100,37,6,40]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [71,2,1,34]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [62,1,4,42]
            }
        ]
    }
    canvas = document.getElementById("shell")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["gnome-terminal","konsole","rxvt-unicode","terminator","xfce4-terminal"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [29,32,28,10,25]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [5,4,53,8,13]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [12,12,34,11,17]
            }
        ]
    }
    canvas = document.getElementById("term")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["dolphin","nautilus","pcmanfm","ranger","thunar"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [33,30,16,12,36]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [5,6,20,20,32]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [15,14,9,14,32]
            }
        ]
    }
    canvas = document.getElementById("fileMgr")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["connman","netctl","networkmanager","wicd"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [2,43,52,14]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [1,46,23,38]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [1,37,37,19]
            }
        ]
    }
    canvas = document.getElementById("netMgr")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["lostfiles","pacmatic","pkgfile","pkgtools"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [0,7,30,21]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,1,0,0]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [1,8,12,7]
            }
        ]
    }
    canvas = document.getElementById("pacman")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["aura","cower","pacaur","packer","yaourt"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [2,16,8,14,54]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,6,3,18,44]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [4,10,11,14,51]
            }
        ]
    }
    canvas = document.getElementById("aur")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["ark","file-roller","p7zip","rar/unrar","zip/unzip"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [29,39,80,83,91]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [4,18,19,0,0]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [10,25,26,22,33]
            }
        ]
    }
    canvas = document.getElementById("archive")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["conky","htop","iotop","nmap","wireshark"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [24,69,40,56,35]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [40,60,0,0,0]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [24,58,13,13,10]
            }
        ]
    }
    canvas = document.getElementById("monitor")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["eog","feh","gwenview","mirage","ristretto"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [26,32,30,8,18]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [5,45,5,11,9]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [11,35,12,8,9]
            }
        ]
    }
    canvas = document.getElementById("image")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["clementine","mpc","ncmpcpp","spotify","vlc"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [12,19,14,8,71]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [6,44,44,0,13]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [13,12,24,10,23]
            }
        ]
    }
    canvas = document.getElementById("audio")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["mplayer","mpv","smplayer","totem","vlc"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [61,10,28,24,71]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [47,22,0,3,47]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [26,18,10,4,63]
            }
        ]
    }
    canvas = document.getElementById("video")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["emacs","gedit","nano","sublime-text","vim"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [20,33,91,9,37]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [8,9,25,28,65]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [11,15,25,19,63]
            }
        ]
    }
    canvas = document.getElementById("editor")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["auctex","gummi","kile","lyx","texmaker"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [3,4,11,13,10]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,0,0,0,3]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [3,4,3,3,6]
            }
        ]
    }
    canvas = document.getElementById("latex")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["abiword","libreoffice-writer","markdown","openoffice-writer","pandoc"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [9,75,6,1,2]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [12,60,0,0,0]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [5,67,5,4,3]
            }
        ]
    }
    canvas = document.getElementById("word")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["calligra-sheets","gnumeric","libreoffice-calc","openoffice-calc"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [7,13,73,1]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,13,58,0]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [2,5,65,2]
            }
        ]
    }
    canvas = document.getElementById("spreadsheet")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["epdfview","evince","mupdf","okular","zathura"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [13,47,14,36,14]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [15,37,9,9,24]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [4,40,8,17,18]
            }
        ]
    }
    canvas = document.getElementById("pdf")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["claws-mail","evolution","geary","mutt","thunderbird"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [8,20,2,21,42]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [7,2,0,24,23]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [3,4,4,14,31]
            }
        ]
    }
    canvas = document.getElementById("email")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["hexchat","irssi","konversation","weechat","xchat"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [3,24,6,12,15]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [0,35,0,17,16]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [5,26,2,15,13]
            }
        ]
    }
    canvas = document.getElementById("irc")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["bitlbee","empathy","kde-telepathy","pidgin","skype"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [4,20,3,38,47]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [13,3,0,40,16]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [7,5,2,28,17]
            }
        ]
    }
    canvas = document.getElementById("im")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["chromium","dwb","firefox","lynx","opera"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [60,3,80,40,25]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [41,7,59,2,8]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [51,6,66,4,4]
            }
        ]
    }
    canvas = document.getElementById("web")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["deluge","ktorrent","qbittorrent","rtorrent","transmission"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [14,14,5,15,22]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [17,2,7,32,38]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [16,6,6,19,46]
            }
        ]
    }
    canvas = document.getElementById("bt")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

    data = {
        labels : ["dropbox","git","hg","sparkleshare","svn"],
        datasets : [
            {
                fillColor : "rgba(204,102,102,0.5)",
                strokeColor : "rgba(204,102,102,1)",
                data : [32,90,45,1,77]
            },
            {
                fillColor : "rgba(181,189,104,0.5)",
                strokeColor : "rgba(181,189,104,5)",
                data : [45,59,9,1,7]
            },
            {
                fillColor : "rgba(129,162,190,0.5)",
                strokeColor : "rgba(129,162,190,1)",
                data : [22,77,7,0,8]
            }
        ]
    }
    canvas = document.getElementById("vcs")
    ctx = canvas.getContext("2d");
    new Chart(ctx).Bar(data, options);

}
size(true); // this kicks off the first drawing; note that the first call to size will animate the charts in.
}());
