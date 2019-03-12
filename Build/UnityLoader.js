Online JavaScript Beautifier (v1.9.0)

Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.

All of the source code is completely free and open, available on GitHub under MIT licence,
and we have a command-line version, python library and a node package as well.




HTML <style>, <script> formatting:

Additional Settings (JSON):
{} 	End script and style with newline?
Support e4x/jsx syntax
Use comma-first list style?
Detect packers and obfuscators?
Preserve inline braces/code blocks?
Keep array indentation?
Break lines on chained methods?
Space before conditional: "if(x)" / "if (x)"
Unescape printable chars encoded as \xNN or \uNNNN?
Use JSLint-happy formatting tweaks?
Indent <head> and <body> sections?
Use a simple textarea for code input?

1

var UnityLoader = UnityLoader || {

2

    Compression: {

3

        identity: {

4

            require: function() {

5

                return {}

6

            },

7

            decompress: function(e) {

8

                return e

9

            }

10

        },

11

        gzip: {

12

            require: function(e) {

13

                var t = {

14

                    "inflate.js": function(e, t, r) {

15

                        "use strict";

16

​

17

                        function n(e) {

18

                            if (!(this instanceof n)) return new n(e);

19

                            this.options = s.assign({

20

                                chunkSize: 16384,

21

                                windowBits: 0,

22

                                to: ""

23

                            }, e || {});

24

                            var t = this.options;

25

                            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 === (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c, this.strm.avail_out = 0;

26

                            var r = i.inflateInit2(this.strm, t.windowBits);

27

                            if (r !== l.Z_OK) throw new Error(u[r]);

28

                            this.header = new f, i.inflateGetHeader(this.strm, this.header)

29

                        }

30

​

31

                        function o(e, t) {

32

                            var r = new n(t);

33

                            if (r.push(e, !0), r.err) throw r.msg || u[r.err];

34

                            return r.result

35

                        }

36

​

37

                        function a(e, t) {

38

                            return t = t || {}, t.raw = !0, o(e, t)

39

                        }

40

                        var i = e("./zlib/inflate"),

41

                            s = e("./utils/common"),

42

                            d = e("./utils/strings"),

43

                            l = e("./zlib/constants"),

44

                            u = e("./zlib/messages"),

45

                            c = e("./zlib/zstream"),

46

                            f = e("./zlib/gzheader"),

47

                            h = Object.prototype.toString;

48

                        n.prototype.push = function(e, t) {

Your Selected Options (JSON):

Not pretty enough for you?
Browser extensions and other uses

    A bookmarklet (drag it to your bookmarks) by Ichiro Hiroshi to see all scripts used on the page,
    Chrome, in case the built-in CSS and javascript formatting isn't enough for you:
    — Quick source viewer by Tomi Mickelsson (github, blog),
    — Javascript and CSS Code beautifier by c7sky,
    — jsbeautify-for-chrome by Tom Rix (github),
    — Pretty Beautiful JavaScript by Will McSweeney
    — Stackoverflow Code Beautify by Making Odd Edit Studios (github).
    Firefox: Javascript deminifier by Ben Murphy, to be used together with the firebug (github),
    Safari: Safari extension by Sandro Padin,
    Opera: Readable JavaScript (github) by Dither,
    Opera: Source extension by Deathamns,
    Sublime Text 2/3: CodeFormatter, a python plugin by Avtandil Kikabidze, supports HTML, CSS, JS and a bunch of other languages,
    Sublime Text 2/3: HTMLPrettify, a javascript plugin by Victor Porof,
    Sublime Text 2: JsFormat, a javascript formatting plugin for this nice editor by Davis Clark,
    vim: sourcebeautify.vim, a plugin by michalliu (requires node.js, V8, SpiderMonkey or cscript js engine),
    vim: vim-jsbeautify, a plugin by Maksim Ryzhikov (node.js or V8 required),
    Emacs: Web-beautify formatting package by Yasuyuki Oka,
    Komodo IDE: Beautify-js addon by Bob de Haas (github),
    C#: ghost6991 ported the javascript formatter to C#,
    Go: ditashi has ported the javascript formatter to golang,

    Beautify plugin (github) by HookyQR for the Visual Studio Code IDE,
    Fiddler proxy: JavaScript Formatter addon,
    gEdit tips by Fabio Nagao,
    Akelpad extension by Infocatcher,
    Beautifier in Emacs write-up by Seth Mason,
    Cloud9, a lovely IDE running in a browser, working in the node/cloud, uses jsbeautifier (github),
    Devenir Hacker App, a non-free JavaScript packer for Mac,
    REST Console, a request debugging tool for Chrome, beautifies JSON responses (github),
    mitmproxy, a nifty SSL-capable HTTP proxy, provides pretty javascript responses (github).
    wakanda, a neat IDE for web and mobile applications has a Beautifier extension (github).
    Burp Suite now has a beautfier extension, thanks to Soroush Dalili,
    Netbeans jsbeautify plugin by Drew Hamlett (github).
    brackets-beautify-extension for Adobe Brackets by Drew Hamlett (github),
    codecaddy.net, a collection of webdev-related tools, assembled by Darik Hall,
    editey.com, an interesting and free Google-Drive oriented editor uses this beautifier,
    a beautifier plugin for Grunt by Vishal Kadam,
    SynWrite editor has a JsFormat plugin (rar, readme),
    LIVEditor, a live-editing HTML/CSS/JS IDE (commercial, Windows-only) uses the library,

Doing anything interesting? Write us to team@beautifier.io so we can add your project to the list.

Written by Einar Lielmanis, maintained and evolved by Liam Newman.

We use the wonderful CodeMirror syntax highlighting editor, written by Marijn Haverbeke.

Made with a great help of Jason Diamond, Patrick Hof, Nochum Sossonko, Andreas Schneider,
Dave Vasilevsky, Vital Batmanov, Ron Baldwin, Gabriel Harrison, Chris J. Shull, Mathias Bynens,
Vittorio Gambaletta, Stefano Sanfilippo and Daniel Stockman.

Run the tests
