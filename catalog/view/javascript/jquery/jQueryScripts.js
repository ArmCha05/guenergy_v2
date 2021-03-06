window.Modernizr = function(t, e, n) {
        function i(t) {
            b.cssText = t
        }

        function o(t, e) {
            return i(k.join(t + ";") + (e || ""))
        }

        function r(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var i in t) {
                var o = t[i];
                if (!s(o, "-") && b[o] !== n) return "pfx" == e ? o : !0
            }
            return !1
        }

        function l(t, e, i) {
            for (var o in t) {
                var s = e[t[o]];
                if (s !== n) return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s
            }
            return !1
        }

        function c(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + C.join(i + " ") + i).split(" ");
            return r(e, "string") || r(e, "undefined") ? a(o, e) : (o = (t + " " + j.join(i + " ") + i).split(" "), l(o, e, n))
        }

        function u() {
            f.input = function(n) {
                for (var i = 0, o = n.length; o > i; i++) P[n[i]] = !!(n[i] in w);
                return P.list && (P.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), P
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
                for (var i, o, r, s = 0, a = t.length; a > s; s++) w.setAttribute("type", o = t[s]), i = "text" !== w.type, i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (m.appendChild(w), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, m.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), N[t[s]] = !!i;
                return N
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d, p, h = "2.8.3",
            f = {},
            v = !0,
            m = e.documentElement,
            g = "modernizr",
            y = e.createElement(g),
            b = y.style,
            w = e.createElement("input"),
            x = ":)",
            T = {}.toString,
            k = " -webkit- -moz- -o- -ms- ".split(" "),
            S = "Webkit Moz O ms",
            C = S.split(" "),
            j = S.toLowerCase().split(" "),
            E = {
                svg: "http://www.w3.org/2000/svg"
            },
            A = {},
            N = {},
            P = {},
            $ = [],
            M = $.slice,
            O = function(t, n, i, o) {
                var r, s, a, l, c = e.createElement("div"),
                    u = e.body,
                    d = u || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) a = e.createElement("div"), a.id = o ? o[i] : g + (i + 1), c.appendChild(a);
                return r = ["&#173;", '<style id="s', g, '">', t, "</style>"].join(""), c.id = g, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), s = n(c, t), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !!s
            },
            I = function(e) {
                var n = t.matchMedia || t.msMatchMedia;
                if (n) return n(e) && n(e).matches || !1;
                var i;
                return O("@media " + e + " { #" + g + " { position: absolute; } }", function(e) {
                    i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), i
            },
            L = function() {
                function t(t, o) {
                    o = o || e.createElement(i[t] || "div"), t = "on" + t;
                    var s = t in o;
                    return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            D = {}.hasOwnProperty;
        p = r(D, "undefined") || r(D.call, "undefined") ? function(t, e) {
            return e in t && r(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return D.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = M.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var o = function() {};
                        o.prototype = e.prototype;
                        var r = new o,
                            s = e.apply(r, n.concat(M.call(arguments)));
                        return Object(s) === s ? s : r
                    }
                    return e.apply(t, n.concat(M.call(arguments)))
                };
            return i
        }), A.flexbox = function() {
            return c("flexWrap")
        }, A.flexboxlegacy = function() {
            return c("boxDirection")
        }, A.canvas = function() {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, A.canvastext = function() {
            return !(!f.canvas || !r(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, A.webgl = function() {
            return !!t.WebGLRenderingContext
        }, A.touch = function() {
            var n;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : O(["@media (", k.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                n = 9 === t.offsetTop
            }), n
        }, A.geolocation = function() {
            return "geolocation" in navigator
        }, A.postmessage = function() {
            return !!t.postMessage
        }, A.websqldatabase = function() {
            return !!t.openDatabase
        }, A.indexedDB = function() {
            return !!c("indexedDB", t)
        }, A.hashchange = function() {
            return L("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
        }, A.history = function() {
            return !(!t.history || !history.pushState)
        }, A.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, A.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, A.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
        }, A.hsla = function() {
            return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
        }, A.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, A.backgroundsize = function() {
            return c("backgroundSize")
        }, A.borderimage = function() {
            return c("borderImage")
        }, A.borderradius = function() {
            return c("borderRadius")
        }, A.boxshadow = function() {
            return c("boxShadow")
        }, A.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, A.opacity = function() {
            return o("opacity:.55"), /^0.55$/.test(b.opacity)
        }, A.cssanimations = function() {
            return c("animationName")
        }, A.csscolumns = function() {
            return c("columnCount")
        }, A.cssgradients = function() {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((t + "-webkit- ".split(" ").join(e + t) + k.join(n + t)).slice(0, -t.length)), s(b.backgroundImage, "gradient")
        }, A.cssreflections = function() {
            return c("boxReflect")
        }, A.csstransforms = function() {
            return !!c("transform")
        }, A.csstransforms3d = function() {
            var t = !!c("perspective");
            return t && "webkitPerspective" in m.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, A.csstransitions = function() {
            return c("transition")
        }, A.fontface = function() {
            var t;
            return O('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                var o = e.getElementById("smodernizr"),
                    r = o.sheet || o.styleSheet,
                    s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
            }), t
        }, A.generatedcontent = function() {
            var t;
            return O(["#", g, "{font:0/0 a}#", g, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, A.video = function() {
            var t = e.createElement("video"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, A.audio = function() {
            var t = e.createElement("audio"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, A.localstorage = function() {
            try {
                return localStorage.setItem(g, g), localStorage.removeItem(g), !0
            } catch (t) {
                return !1
            }
        }, A.sessionstorage = function() {
            try {
                return sessionStorage.setItem(g, g), sessionStorage.removeItem(g), !0
            } catch (t) {
                return !1
            }
        }, A.webworkers = function() {
            return !!t.Worker
        }, A.applicationcache = function() {
            return !!t.applicationCache
        }, A.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(E.svg, "svg").createSVGRect
        }, A.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == E.svg
        }, A.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(T.call(e.createElementNS(E.svg, "animate")))
        }, A.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(T.call(e.createElementNS(E.svg, "clipPath")))
        };
        for (var H in A) p(A, H) && (d = H.toLowerCase(), f[d] = A[H](), $.push((f[d] ? "" : "no-") + d));
        return f.input || u(), f.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var i in t) p(t, i) && f.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), f[t] !== n) return f;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof v && v && (m.className += " " + (e ? "" : "no-") + t), f[t] = e
                }
                return f
            }, i(""), y = w = null,
            function(t, e) {
                function n(t, e) {
                    var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = g[t[v]];
                    return e || (e = {}, m++, t[v] = m, g[m] = e), e
                }

                function r(t, n, i) {
                    if (n || (n = e), u) return n.createElement(t);
                    i || (i = o(n));
                    var r;
                    return r = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || h.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
                }

                function s(t, n) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    n = n || o(t);
                    for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) r.createElement(a[s]);
                    return r
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                        return y.shivMethods ? r(n, t, e) : e.createElem(n)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var i = o(t);
                    return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, i), t
                }
                var c, u, d = "3.7.0",
                    p = t.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    v = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: r,
                    createDocumentFragment: s
                };
                t.html5 = y, l(e)
            }(this, e), f._version = h, f._prefixes = k, f._domPrefixes = j, f._cssomPrefixes = C, f.mq = I, f.hasEvent = L, f.testProp = function(t) {
                return a([t])
            }, f.testAllProps = c, f.testStyles = O, f.prefixed = function(t, e, n) {
                return e ? c(t, e, n) : c(t, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (v ? " js " + $.join(" ") : ""), f
    }(this, this.document),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = "length" in t && t.length,
                n = Z.type(t);
            return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (Z.isFunction(e)) return Z.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return Z.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (at.test(e)) return Z.filter(e, t, n);
                e = Z.filter(e, t)
            }
            return Z.grep(t, function(t) {
                return U.call(e, t) >= 0 !== n
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = ft[t] = {};
            return Z.each(t.match(ht) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            J.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + a.uid++
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(wt, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
                    } catch (o) {}
                    yt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function d() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function p(t, e) {
            return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function h(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = Dt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n = 0, i = t.length; i > n; n++) gt.set(t[n], "globalEval", !e || gt.get(e[n], "globalEval"))
        }

        function m(t, e) {
            var n, i, o, r, s, a, l, c;
            if (1 === e.nodeType) {
                if (gt.hasData(t) && (r = gt.access(t), s = gt.set(e, r), c = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; i > n; n++) Z.event.add(e, o, c[o][n])
                }
                yt.hasData(t) && (a = yt.access(t), l = Z.extend({}, a), yt.set(e, l))
            }
        }

        function g(t, e) {
            var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
        }

        function y(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && St.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function b(e, n) {
            var i, o = Z(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : Z.css(o[0], "display");
            return o.detach(), r
        }

        function w(t) {
            var e = J,
                n = zt[t];
            return n || (n = b(t, e), "none" !== n && n || (qt = (qt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qt[0].contentDocument, e.write(), e.close(), n = b(t, e), qt.detach()), zt[t] = n), n
        }

        function x(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || Wt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Bt.test(s) && Rt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function T(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function k(t, e) {
            if (e in t) return e;
            for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Qt.length; o--;)
                if (e = Qt[o] + n, e in t) return e;
            return i
        }

        function S(t, e, n) {
            var i = Vt.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function C(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += Z.css(t, n + Tt[r], !0, o)), i ? ("content" === n && (s -= Z.css(t, "padding" + Tt[r], !0, o)), "margin" !== n && (s -= Z.css(t, "border" + Tt[r] + "Width", !0, o))) : (s += Z.css(t, "padding" + Tt[r], !0, o), "padding" !== n && (s += Z.css(t, "border" + Tt[r] + "Width", !0, o)));
            return s
        }

        function j(t, e, n) {
            var i = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = Wt(t),
                s = "border-box" === Z.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = x(t, e, r), (0 > o || null == o) && (o = t.style[e]), Bt.test(o)) return o;
                i = s && (G.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + C(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }

        function E(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = gt.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && kt(i) && (r[s] = gt.access(i, "olddisplay", w(i.nodeName)))) : (o = kt(i), "none" === n && o || gt.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function A(t, e, n, i, o) {
            return new A.prototype.init(t, e, n, i, o)
        }

        function N() {
            return setTimeout(function() {
                Gt = void 0
            }), Gt = Z.now()
        }

        function P(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Tt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function $(t, e, n) {
            for (var i, o = (ne[e] || []).concat(ne["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function M(t, e, n) {
            var i, o, r, s, a, l, c, u, d = this,
                p = {},
                h = t.style,
                f = t.nodeType && kt(t),
                v = gt.get(t, "fxshow");
            n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Z.css(t, "display"), u = "none" === c ? gt.get(t, "olddisplay") || w(t.nodeName) : c, "inline" === u && "none" === Z.css(t, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i], Kt.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !v || void 0 === v[i]) continue;
                        f = !0
                    }
                    p[i] = v && v[i] || Z.style(t, i)
                } else c = void 0;
            if (Z.isEmptyObject(p)) "inline" === ("none" === c ? w(t.nodeName) : c) && (h.display = c);
            else {
                v ? "hidden" in v && (f = v.hidden) : v = gt.access(t, "fxshow", {}), r && (v.hidden = !f), f ? Z(t).show() : d.done(function() {
                    Z(t).hide()
                }), d.done(function() {
                    var e;
                    gt.remove(t, "fxshow");
                    for (e in p) Z.style(t, e, p[e])
                });
                for (i in p) s = $(f ? v[i] : 0, i, d), i in v || (v[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function O(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = Z.camelCase(n), o = e[i], r = t[n], Z.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = Z.cssHooks[i], s && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function I(t, e, n) {
            var i, o, r = 0,
                s = ee.length,
                a = Z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Gt || N(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                    return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Gt || N(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = Z.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (O(u, c.opts.specialEasing); s > r; r++)
                if (i = ee[r].call(c, t, u, c.opts)) return i;
            return Z.map(u, $, c), Z.isFunction(c.opts.start) && c.opts.start.call(t, c), Z.fx.timer(Z.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function L(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(ht) || [];
                if (Z.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function D(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, Z.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === be;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function H(t, e) {
            var n, i, o = Z.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && Z.extend(!0, t, i), t
        }

        function F(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function q(t, e, n, i) {
            var o, r, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = c[l + " " + r] || c["* " + r], !s)
                    for (o in c)
                        if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function z(t, e, n, i) {
            var o;
            if (Z.isArray(e)) Z.each(e, function(e, o) {
                n || Se.test(t) ? i(t, o) : z(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== Z.type(e)) i(t, e);
            else
                for (o in e) z(t + "[" + o + "]", e[o], n, i)
        }

        function R(t) {
            return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var B = [],
            W = B.slice,
            _ = B.concat,
            V = B.push,
            U = B.indexOf,
            X = {},
            Y = X.toString,
            Q = X.hasOwnProperty,
            G = {},
            J = t.document,
            K = "2.1.4",
            Z = function(t, e) {
                return new Z.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            nt = /-([\da-z])/gi,
            it = function(t, e) {
                return e.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: K,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return W.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
            },
            pushStack: function(t) {
                var e = Z.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return Z.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(Z.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(W.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: V,
            sort: B.sort,
            splice: B.splice
        }, Z.extend = Z.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(c, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, Z.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === Z.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Y.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(nt, it)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? Z.merge(i, "string" == typeof t ? [t] : t) : V.call(i, t)), i
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : U.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++) i = !e(t[r], r), i !== a && o.push(t[r]);
                return o
            },
            map: function(t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && l.push(o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return _.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (i = W.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(W.call(arguments)))
                }, o.guid = t.guid = t.guid || Z.guid++, o) : void 0
            },
            now: Date.now,
            support: G
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        });
        var ot = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, h, f, v;
                if ((e ? e.ownerDocument || e : z) !== M && $(e), e = e || M, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && I) {
                    if (11 !== a && (o = yt.exec(t)))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && x.getElementsByClassName) return K.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (x.qsa && (!L || !L.test(t))) {
                        if (h = d = q, f = e, v = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = C(t), (d = e.getAttribute("id")) ? h = d.replace(wt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, v = c.join(",")
                        }
                        if (v) try {
                            return K.apply(n, f.querySelectorAll(v)), n
                        } catch (m) {} finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[q] = !0, t
            }

            function o(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {}

            function p(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = B++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, s) {
                    var a, l, c = [R, r];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o) {
                                if (l = e[q] || (e[q] = {}), (a = l[i]) && a[0] === R && a[1] === r) return c[2] = a[2];
                                if (l[i] = c, c[2] = t(e, n, s)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function v(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
                return i
            }

            function m(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function g(t, e, n, o, r, s) {
                return o && !o[q] && (o = g(o)), r && !r[q] && (r = g(r, s)), i(function(i, s, a, l) {
                    var c, u, d, p = [],
                        h = [],
                        f = s.length,
                        g = i || v(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? g : m(g, p, t, a, l),
                        b = n ? r || (i ? t : f || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (c = m(b, h), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? tt(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = m(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                        return t === e
                    }, s, !0), c = h(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), u = [function(t, n, i) {
                        var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                        return e = null, o
                    }]; o > a; a++)
                    if (n = T.relative[t[a].type]) u = [h(f(u), n)];
                    else {
                        if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                            for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                            return g(a > 1 && f(u), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, c) {
                        var u, d, p, h = 0,
                            f = "0",
                            v = i && [],
                            g = [],
                            y = A,
                            b = i || r && T.find.TAG("*", c),
                            w = R += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (A = s !== M && s); f !== x && null != (u = b[f]); f++) {
                            if (r && u) {
                                for (d = 0; p = t[d++];)
                                    if (p(u, s, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (R = w)
                            }
                            o && ((u = !p && u) && h--, i && v.push(u))
                        }
                        if (h += f, o && f !== h) {
                            for (d = 0; p = n[d++];) p(v, g, s, a);
                            if (i) {
                                if (h > 0)
                                    for (; f--;) v[f] || g[f] || (g[f] = G.call(l));
                                g = m(g)
                            }
                            K.apply(l, g), c && !i && g.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (R = w, A = y), v
                    };
                return o ? i(s) : s
            }
            var w, x, T, k, S, C, j, E, A, N, P, $, M, O, I, L, D, H, F, q = "sizzle" + 1 * new Date,
                z = t.document,
                R = 0,
                B = 0,
                W = n(),
                _ = n(),
                V = n(),
                U = function(t, e) {
                    return t === e && (P = !0), 0
                },
                X = 1 << 31,
                Y = {}.hasOwnProperty,
                Q = [],
                G = Q.pop,
                J = Q.push,
                K = Q.push,
                Z = Q.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                pt = new RegExp(st),
                ht = new RegExp("^" + ot + "$"),
                ft = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                vt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                Tt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                kt = function() {
                    $()
                };
            try {
                K.apply(Q = Z.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
            } catch (St) {
                K = {
                    apply: Q.length ? function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, S = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, $ = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : z;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), I = !S(i), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(i.getElementsByClassName), x.getById = o(function(t) {
                    return O.appendChild(t).id = q, !i.getElementsByName || !i.getElementsByName(q).length
                }), x.getById ? (T.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete T.find.ID, T.filter.ID = function(t) {
                    var e = t.replace(xt, Tt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;

                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return I ? e.getElementsByClassName(t) : void 0
                }, D = [], L = [], (x.qsa = gt.test(i.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || L.push(".#.+[+~]")
                }), o(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = gt.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), D.push("!=", st)
                }), L = L.length && new RegExp(L.join("|")), D = D.length && new RegExp(D.join("|")), e = gt.test(O.compareDocumentPosition), F = e || gt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return P = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === z && F(z, t) ? -1 : e === i || e.ownerDocument === z && F(z, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return P = !0, 0;
                    var n, o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                    if (r === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? s(l[o], c[o]) : l[o] === z ? -1 : c[o] === z ? 1 : 0
                }, i) : M
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== M && $(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !I || D && D.test(n) || L && L.test(n))) try {
                    var i = H.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return e(n, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && $(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && $(t);
                var n = T.attrHandle[e.toLowerCase()],
                    i = n && Y.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : x.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (P = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(U), P) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return N = null, t
            }, k = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += k(e);
                return n
            }, T = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, Tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, p, h, f, v = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                g = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (r) {
                                    for (; v;) {
                                        for (d = e; d = d[v];)
                                            if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                        f = v = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (u = m[q] || (m[q] = {}), c = u[t] || [], h = c[0] === R && c[1], p = c[0] === R && c[2], d = h && m.childNodes[h]; d = ++h && d && d[v] || (p = h = 0) || f.pop();)
                                        if (1 === d.nodeType && ++p && d === e) {
                                            u[t] = [R, h, p];
                                            break
                                        }
                                } else if (y && (c = (e[q] || (e[q] = {}))[t]) && c[0] === R) p = c[1];
                                else
                                    for (;
                                        (d = ++h && d && d[v] || (p = h = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[q] || (d[q] = {}))[t] = [R, p]), d !== e)););
                                return p -= o, p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[q] ? r(n) : r.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = tt(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = j(t.replace(lt, "$1"));
                        return o[q] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(xt, Tt),
                            function(e) {
                                return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Tt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !T.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return vt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = l(w);
            return d.prototype = T.filters = T.pseudos, T.setFilters = new d, C = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, c, u = _[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = t, l = [], c = T.preFilter; a;) {
                    (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), a = a.slice(i.length));
                    for (s in T.filter) !(o = ft[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : _(t, l).slice(0)
            }, j = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = C(t)), n = e.length; n--;) r = y(e[n]), r[q] ? i.push(r) : o.push(r);
                    r = V(t, b(o, i)), r.selector = t
                }
                return r
            }, E = e.select = function(t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    d = !i && C(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && I && T.relative[r[1].type]) {
                        if (e = (T.find.ID(s.matches[0].replace(xt, Tt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(xt, Tt), bt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), t = i.length && p(r), !t) return K.apply(n, i), n;
                            break
                        }
                }
                return (c || j(t, d))(i, e, !I, n, bt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!P, $(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        Z.find = ot, Z.expr = ot.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ot.uniqueSort, Z.text = ot.getText, Z.isXMLDoc = ot.isXML, Z.contains = ot.contains;
        var rt = Z.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        Z.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Z.find.matchesSelector(i, t) ? [i] : [] : Z.find.matches(t, Z.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, Z.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (Z.contains(o[e], this)) return !0
                }));
                for (e = 0; n > e; e++) Z.find(t, o[e], i);
                return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && rt.test(t) ? Z(t) : t || [], !1).length
            }
        });
        var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ut = Z.fn.init = function(t, e) {
                var n, i;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), st.test(n[1]) && Z.isPlainObject(e))
                            for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
            };
        ut.prototype = Z.fn, lt = Z(J);
        var dt = /^(?:parents|prev(?:Until|All))/,
            pt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && Z(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), Z.fn.extend({
            has: function(t) {
                var e = Z(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (Z.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = rt.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? Z.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? U.call(Z(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Z.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Z.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return Z.dir(t, "parentNode", n)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return Z.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return Z.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return Z.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return Z.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Z.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || Z.merge([], t.childNodes)
            }
        }, function(t, e) {
            Z.fn[t] = function(n, i) {
                var o = Z.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = Z.filter(i, o)), this.length > 1 && (pt[t] || Z.unique(o), dt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var ht = /\S+/g,
            ft = {};
        Z.Callbacks = function(t) {
            t = "string" == typeof t ? ft[t] || r(t) : Z.extend({}, t);
            var e, n, i, o, s, a, l = [],
                c = !t.once && [],
                u = function(r) {
                    for (e = t.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)
                        if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    i = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function r(e) {
                                Z.each(e, function(e, n) {
                                    var i = Z.type(n);
                                    "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), i ? s = l.length : e && (o = n, u(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && Z.each(arguments, function(t, e) {
                            for (var n;
                                (n = Z.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = c = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, e || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !l || n && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, Z.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(e, function(e, r) {
                                    var s = Z.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? Z.extend(t, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, Z.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    i[r[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), i.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, n, i, o = 0,
                    r = W.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : Z.Deferred(),
                    c = function(t, n, i) {
                        return function(o) {
                            n[t] = this, i[t] = arguments.length > 1 ? W.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, r), l.promise()
            }
        });
        var vt;
        Z.fn.ready = function(t) {
            return Z.ready.promise().done(t), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (vt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
            }
        }), Z.ready.promise = function(e) {
            return vt || (vt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), vt.promise(e)
        }, Z.ready.promise();
        var mt = Z.access = function(t, e, n, i, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === Z.type(n)) {
                o = !0;
                for (a in n) Z.access(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(Z(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        };
        Z.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
            key: function(t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    n = t[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        e[this.expando] = {
                            value: n
                        }, Object.defineProperties(t, e)
                    } catch (i) {
                        e[this.expando] = n, Z.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(t, e, n) {
                var i, o = this.key(t),
                    r = this.cache[o];
                if ("string" == typeof e) r[e] = n;
                else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], e);
                else
                    for (i in e) r[i] = e[i];
                return r
            },
            get: function(t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, o, r = this.key(t),
                    s = this.cache[r];
                if (void 0 === e) this.cache[r] = {};
                else {
                    Z.isArray(e) ? i = e.concat(e.map(Z.camelCase)) : (o = Z.camelCase(e), e in s ? i = [e, o] : (i = o, i = i in s ? [i] : i.match(ht) || [])), n = i.length;
                    for (; n--;) delete s[i[n]]
                }
            },
            hasData: function(t) {
                return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var gt = new a,
            yt = new a,
            bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            wt = /([A-Z])/g;
        Z.extend({
            hasData: function(t) {
                return yt.hasData(t) || gt.hasData(t)
            },
            data: function(t, e, n) {
                return yt.access(t, e, n)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, n) {
                return gt.access(t, e, n)
            },
            _removeData: function(t, e) {
                gt.remove(t, e)
            }
        }), Z.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = yt.get(r), 1 === r.nodeType && !gt.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
                        gt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : mt(this, function(e) {
                    var n, i = Z.camelCase(t);
                    if (r && void 0 === e) {
                        if (n = yt.get(r, t), void 0 !== n) return n;
                        if (n = yt.get(r, i), void 0 !== n) return n;
                        if (n = l(r, i, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = yt.get(this, i);
                        yt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), Z.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = gt.get(t, e), n && (!i || Z.isArray(n) ? i = gt.access(t, e, Z.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = Z.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = Z._queueHooks(t, e),
                    s = function() {
                        Z.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return gt.get(t, n) || gt.access(t, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        gt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = Z.queue(this, t, e);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Z.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = Z.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = gt.get(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Tt = ["Top", "Right", "Bottom", "Left"],
            kt = function(t, e) {
                return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
            },
            St = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = J.createDocumentFragment(),
                e = t.appendChild(J.createElement("div")),
                n = J.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ct = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var jt = /^key/,
            Et = /^(?:mouse|pointer|contextmenu)|click/,
            At = /^(?:focusinfocus|focusoutblur)$/,
            Nt = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, v, m = gt.get(t);
                if (m)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                            return typeof Z !== Ct && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(ht) || [""], c = e.length; c--;) a = Nt.exec(e[c]) || [], h = v = a[1], f = (a[2] || "").split(".").sort(), h && (d = Z.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = Z.event.special[h] || {}, u = Z.extend({
                        type: h,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Z.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && d.setup.call(t, i, f, s) !== !1 || t.addEventListener && t.addEventListener(h, s, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), Z.event.global[h] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, v, m = gt.hasData(t) && gt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(ht) || [""], c = e.length; c--;)
                        if (a = Nt.exec(e[c]) || [], h = v = a[1], f = (a[2] || "").split(".").sort(), h) {
                            for (d = Z.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                            s && !p.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || Z.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) Z.event.remove(t, h + e[c], n, i, !0);
                    Z.isEmptyObject(l) && (delete m.handle, gt.remove(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, c, u, d, p = [i || J],
                    h = Q.call(e, "type") ? e.type : e,
                    f = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !At.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[Z.expando] ? e : new Z.Event(h, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Z.makeArray(n, [e]), d = Z.event.special[h] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!o && !d.noBubble && !Z.isWindow(i)) {
                        for (l = d.delegateType || h, At.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = p[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : d.bindType || h, u = (gt.get(s, "events") || {})[e.type] && gt.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Z.acceptData(s) && (e.result = u.apply(s, n), e.result === !1 && e.preventDefault());
                    return e.type = h, o || e.isDefaultPrevented() || d._default && d._default.apply(p.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[h]) && !Z.isWindow(i) && (a = i[c], a && (i[c] = null), Z.event.triggered = h, i[h](), Z.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = Z.event.fix(t);
                var e, n, i, o, r, s = [],
                    a = W.call(arguments),
                    l = (gt.get(this, "events") || {})[t.type] || [],
                    c = Z.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = Z.event.handlers.call(this, t, l), e = 0;
                        (o = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (i = [], n = 0; a > n; n++) r = e[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[Z.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Et.test(o) ? this.mouseHooks : jt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return Z.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = Z.extend(new Z.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }, Z.Event = function(t, e) {
            return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
        }, Z.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            Z.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || o !== i && !Z.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), G.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            };
            Z.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = gt.access(i, e);
                    o || i.addEventListener(t, n, !0), gt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = gt.access(i, e) - 1;
                    o ? gt.access(i, e, o) : (i.removeEventListener(t, n, !0), gt.remove(i, e))
                }
            }
        }), Z.fn.extend({
            on: function(t, e, n, i, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (s in t) this.on(s, e, n, t[s], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = u;
                else if (!i) return this;
                return 1 === o && (r = i, i = function(t) {
                    return Z().off(t), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Z(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = u), this.each(function() {
                    Z.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    Z.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? Z.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            $t = /<([\w:]+)/,
            Mt = /<|&#?\w+;/,
            Ot = /<(?:script|style|link)/i,
            It = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^$|\/(?:java|ecma)script/i,
            Dt = /^true\/(.*)/,
            Ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ft = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, Z.extend({
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = Z.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                    for (s = g(a), r = g(t), i = 0, o = r.length; o > i; i++) y(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || g(t), s = s || g(a), i = 0, o = r.length; o > i; i++) m(r[i], s[i]);
                    else m(t, a);
                return s = g(a, "script"), s.length > 0 && v(s, !l && g(t, "script")), a
            },
            buildFragment: function(t, e, n, i) {
                for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], p = 0, h = t.length; h > p; p++)
                    if (o = t[p], o || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(d, o.nodeType ? [o] : o);
                        else if (Mt.test(o)) {
                    for (r = r || u.appendChild(e.createElement("div")), s = ($t.exec(o) || ["", ""])[1].toLowerCase(),
                        a = Ft[s] || Ft._default, r.innerHTML = a[1] + o.replace(Pt, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                    Z.merge(d, r.childNodes), r = u.firstChild, r.textContent = ""
                } else d.push(e.createTextNode(o));
                for (u.textContent = "", p = 0; o = d[p++];)
                    if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = g(u.appendChild(o), "script"), l && v(r), n))
                        for (c = 0; o = r[c++];) Lt.test(o.type || "") && n.push(o);
                return u
            },
            cleanData: function(t) {
                for (var e, n, i, o, r = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                    if (Z.acceptData(n) && (o = n[gt.expando], o && (e = gt.cache[o]))) {
                        if (e.events)
                            for (i in e.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, e.handle);
                        gt.cache[o] && delete gt.cache[o]
                    }
                    delete yt.cache[n[yt.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(t) {
                return mt(this, function(t) {
                    return void 0 === t ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = p(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = p(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? Z.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || Z.cleanData(g(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && v(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(g(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return Z.clone(this, t, e)
                })
            },
            html: function(t) {
                return mt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Ot.test(t) && !Ft[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Pt, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, Z.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = _.apply([], t);
                var n, i, o, r, s, a, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    p = t[0],
                    v = Z.isFunction(p);
                if (v || c > 1 && "string" == typeof p && !G.checkClone && It.test(p)) return this.each(function(n) {
                    var i = u.eq(n);
                    v && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (o = Z.map(g(n, "script"), h), r = o.length; c > l; l++) s = n, l !== d && (s = Z.clone(s, !0, !0), r && Z.merge(o, g(s, "script"))), e.call(this[l], s, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, Z.map(o, f), l = 0; r > l; l++) s = o[l], Lt.test(s.type || "") && !gt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Ht, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Z.fn[t] = function(t) {
                for (var n, i = [], o = Z(t), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), Z(o[s])[e](n), V.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var qt, zt = {},
            Rt = /^margin/,
            Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
            Wt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
                var e = t.getComputedStyle(s, null);
                n = "1%" !== e.top, i = "4px" === e.width, o.removeChild(r)
            }
            var n, i, o = J.documentElement,
                r = J.createElement("div"),
                s = J.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), t.getComputedStyle && Z.extend(G, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == i && e(), i
                },
                reliableMarginRight: function() {
                    var e, n = s.appendChild(J.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), e = !parseFloat(t.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), e
                }
            }))
        }(), Z.swap = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = s[r];
            return o
        };
        var _t = /^(none|table(?!-c[ea]).+)/,
            Vt = new RegExp("^(" + xt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + xt + ")", "i"),
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qt = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = x(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = Z.camelCase(e),
                        l = t.style;
                    return e = Z.cssProps[a] || (Z.cssProps[a] = k(l, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n, "string" === r && (o = Ut.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || Z.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n)), void 0)
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = Z.camelCase(e);
                return e = Z.cssProps[a] || (Z.cssProps[a] = k(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = x(t, e, i)), "normal" === o && e in Yt && (o = Yt[e]), "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
            }
        }), Z.each(["height", "width"], function(t, e) {
            Z.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? _t.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Xt, function() {
                        return j(t, e, i)
                    }) : j(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var o = i && Wt(t);
                    return S(t, n, i ? C(t, e, i, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), Z.cssHooks.marginRight = T(G.reliableMarginRight, function(t, e) {
            return e ? Z.swap(t, {
                display: "inline-block"
            }, x, [t, "marginRight"]) : void 0
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Z.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Tt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, Rt.test(t) || (Z.cssHooks[t + e].set = S)
        }), Z.fn.extend({
            css: function(t, e) {
                return mt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Z.isArray(e)) {
                        for (i = Wt(t), o = e.length; o > s; s++) r[e[s]] = Z.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    kt(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = A, A.prototype = {
            constructor: A,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = A.propHooks[this.prop];
                return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Z.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, Z.fx = A.prototype.init, Z.fx.step = {};
        var Gt, Jt, Kt = /^(?:toggle|show|hide)$/,
            Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [M],
            ne = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = Zt.exec(e),
                        r = o && o[3] || (Z.cssNumber[t] ? "" : "px"),
                        s = (Z.cssNumber[t] || "px" !== r && +i) && Zt.exec(Z.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, Z.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        Z.Animation = Z.extend(I, {
                tweener: function(t, e) {
                    Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ne[n] = ne[n] || [], ne[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ee.unshift(t) : ee.push(t)
                }
            }), Z.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? Z.extend({}, t) : {
                    complete: n || !n && e || Z.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !Z.isFunction(e) && e
                };
                return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
                }, i
            }, Z.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(kt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = Z.isEmptyObject(t),
                        r = Z.speed(e, n, i),
                        s = function() {
                            var e = I(this, Z.extend({}, t), r);
                            (o || gt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = Z.timers,
                            s = gt.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && te.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        (e || !n) && Z.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = gt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = Z.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, Z.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(t, e) {
                var n = Z.fn[e];
                Z.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, i, o)
                }
            }), Z.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                Z.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var t, e = 0,
                    n = Z.timers;
                for (Gt = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || Z.fx.stop(), Gt = void 0
            }, Z.fx.timer = function(t) {
                Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function() {
                Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function() {
                clearInterval(Jt), Jt = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function(t, e) {
                return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t = J.createElement("input"),
                    e = J.createElement("select"),
                    n = e.appendChild(J.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
            }();
        var ie, oe, re = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(t, e) {
                return mt(this, Z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Z.removeAttr(this, t)
                })
            }
        }), Z.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Ct ? Z.prop(t, e, n) : (1 === r && Z.isXMLDoc(t) || (e = e.toLowerCase(), i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? oe : ie)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = Z.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, o = 0,
                    r = e && e.match(ht);
                if (r && 1 === t.nodeType)
                    for (; n = r[o++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!G.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), oe = {
            set: function(t, e, n) {
                return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = re[e] || Z.find.attr;
            re[e] = function(t, e, i) {
                var o, r;
                return i || (r = re[e], re[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, re[e] = r), o
            }
        });
        var se = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(t, e) {
                return mt(this, Z.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[Z.propFix[t] || t]
                })
            }
        }), Z.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !Z.isXMLDoc(t), r && (e = Z.propFix[e] || e, o = Z.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (Z.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a = "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ht) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = Z.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ht) || []; c > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            s = t ? Z.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(n) {
                    Z(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, o = Z(this), r = t.match(ht) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else(n === Ct || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : gt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var le = /\r/g;
        Z.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = Z.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, Z(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)
                }
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = Z.find.attr(t, "value");
                        return null != e ? e : Z.trim(Z.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                if (e = Z(n).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = Z.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(t, e) {
                    return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (Z.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            Z.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), Z.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var ce = Z.now(),
            ue = /\?/;
        Z.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, Z.parseXML = function(t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
        };
        var de = /#.*$/,
            pe = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ve = /^(?:GET|HEAD)$/,
            me = /^\/\//,
            ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            be = {},
            we = "*/".concat("*"),
            xe = t.location.href,
            Te = ge.exec(xe.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe,
                type: "GET",
                isLocal: fe.test(Te[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": we,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, Z.ajaxSettings), e) : H(Z.ajaxSettings, t)
            },
            ajaxPrefilter: L(ye),
            ajaxTransport: L(be),
            ajax: function(t, e) {
                function n(t, e, n, s) {
                    var l, u, g, y, w, T = e;
                    2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = F(d, x, n)), y = q(d, y, x, l), l ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Z.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (Z.etag[o] = w)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, u = y.data, g = y.error, l = !g)) : (g = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", l ? f.resolveWith(p, [u, T, x]) : f.rejectWith(p, [x, T, g]), x.statusCode(m), m = void 0, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u : g]), v.fireWith(p, [x, T]), c && (h.trigger("ajaxComplete", [x, d]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, s, a, l, c, u, d = Z.ajaxSetup({}, e),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                    f = Z.Deferred(),
                    v = Z.Callbacks("once memory"),
                    m = d.statusCode || {},
                    g = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!s)
                                    for (s = {}; e = he.exec(r);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, g[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return i && i.abort(e), n(0, e), this
                        }
                    };
                if (f.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || xe) + "").replace(de, "").replace(me, Te[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(ht) || [""], null == d.crossDomain && (l = ge.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === Te[1] && l[2] === Te[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Te[3] || ("http:" === Te[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), D(ye, d, e, x), 2 === b) return x;
                c = Z.event && d.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ve.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ue.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = pe.test(o) ? o.replace(pe, "$1_=" + ce++) : o + (ue.test(o) ? "&" : "?") + "_=" + ce++)), d.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + we + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[u](d[u]);
                if (i = D(be, d, e, x)) {
                    x.readyState = 1, c && h.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, i.send(g, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return Z.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return Z.get(t, void 0, e, "script")
            }
        }), Z.each(["get", "post"], function(t, e) {
            Z[e] = function(t, n, i, o) {
                return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), Z._evalUrl = function(t) {
            return Z.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, Z.fn.extend({
            wrapAll: function(t) {
                var e;
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return this.each(Z.isFunction(t) ? function(e) {
                    Z(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = Z(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = Z.isFunction(t);
                return this.each(function(n) {
                    Z(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, Z.expr.filters.visible = function(t) {
            return !Z.expr.filters.hidden(t)
        };
        var ke = /%20/g,
            Se = /\[\]$/,
            Ce = /\r?\n/g,
            je = /^(?:submit|button|image|reset|file)$/i,
            Ee = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    e = Z.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) z(n, t[n], e, o);
            return i.join("&").replace(ke, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && Ee.test(this.nodeName) && !je.test(t) && (this.checked || !St.test(t))
                }).map(function(t, e) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ce, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ce, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Ae = 0,
            Ne = {},
            Pe = {
                0: 200,
                1223: 204
            },
            $e = Z.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ne) Ne[t]()
        }), G.cors = !!$e && "withCredentials" in $e, G.ajax = $e = !!$e, Z.ajaxTransport(function(t) {
            var e;
            return G.cors || $e && !t.crossDomain ? {
                send: function(n, i) {
                    var o, r = t.xhr(),
                        s = ++Ae;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) r.setRequestHeader(o, n[o]);
                    e = function(t) {
                        return function() {
                            e && (delete Ne[s], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? i(r.status, r.statusText) : i(Pe[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            } : void 0, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), r.onerror = e("error"), e = Ne[s] = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (a) {
                        if (e) throw a
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return Z.globalEval(t), t
                }
            }
        }), Z.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), Z.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = Z("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), J.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Me = [],
            Oe = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Me.pop() || Z.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = e.jsonp !== !1 && (Oe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oe, "$1" + o) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || Z.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Me.push(o)), s && Z.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
        }), Z.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || J;
            var i = st.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = Z.buildFragment([t], e, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
        };
        var Ie = Z.fn.load;
        Z.fn.load = function(t, e, n) {
            if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && Z.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, r || [t.responseText, e, t])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Z.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), Z.expr.filters.animated = function(t) {
            return Z.grep(Z.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Le = t.document.documentElement;
        Z.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, c, u = Z.css(t, "position"),
                    d = Z(t),
                    p = {};
                "static" === u && (t.style.position = "relative"), a = d.offset(), r = Z.css(t, "top"), l = Z.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : d.css(p)
            }
        }, Z.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                if (r) return e = r.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== Ct && (o = i.getBoundingClientRect()), n = R(r), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - Z.css(n, "marginTop", !0),
                        left: e.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Le; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                    return t || Le
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = "pageYOffset" === n;
            Z.fn[e] = function(o) {
                return mt(this, function(e, o, r) {
                    var s = R(e);
                    return void 0 === r ? s ? s[n] : e[o] : void(s ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset) : e[o] = r)
                }, e, o, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(t, e) {
            Z.cssHooks[e] = T(G.pixelPosition, function(t, n) {
                return n ? (n = x(t, e), Bt.test(n) ? Z(t).position()[e] + "px" : n) : void 0
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            Z.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                Z.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return mt(this, function(e, n, i) {
                        var o;
                        return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? Z.css(e, n, s) : Z.style(e, n, i, s)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var De = t.jQuery,
            He = t.$;
        return Z.noConflict = function(e) {
            return t.$ === Z && (t.$ = He), e && t.jQuery === Z && (t.jQuery = De), Z
        }, typeof e === Ct && (t.jQuery = t.$ = Z), Z
    }), + function(t) {
        "use strict";
        var e = function(n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, e.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e = t.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var i = n.data("bs.collapse");
                        if (i && i.transitioning) return;
                        n.collapse("hide"), i || n.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;

                    var r = function(e) {
                        return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(r, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, void this.$element.trigger("shown.bs.collapse"))
                    };
                    if (!t.support.transition) return r.call(this);
                    var s = t.camelCase(["scroll", o].join("-"));
                    this.$element.one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
                }
            }
        }, e.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function(e) {
                        return e && e.target != this.$element[0] ? void this.$element.one(t.support.transition.end, t.proxy(i, this)) : (this.transitioning = 0, void this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                    };
                    return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                }
            }
        }, e.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = t.fn.collapse;
        t.fn.collapse = function(n) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                !o && r.toggle && "show" == n && (n = !n), o || i.data("bs.collapse", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = n, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
            var n, i = t(this),
                o = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                r = t(o),
                s = r.data("bs.collapse"),
                a = s ? "toggle" : i.data(),
                l = i.attr("data-parent"),
                c = l && t(l);
            s && s.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(a)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            e && 3 === e.which || (t(i).remove(), t(o).each(function() {
                var i = n(t(this)),
                    o = {
                        relatedTarget: this
                    };
                i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
            }))
        }

        function n(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }
        var i = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            r = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.prototype.toggle = function(i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var r = n(o),
                    s = r.hasClass("open");
                if (e(), !s) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {
                        relatedTarget: this
                    };
                    if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                    o.trigger("focus"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, r.prototype.keydown = function(e) {
            if (/(38|40|27)/.test(e.keyCode)) {
                var i = t(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = n(i),
                        s = r.hasClass("open");
                    if (!s || s && 27 == e.keyCode) return 27 == e.which && r.find(o).trigger("focus"), i.trigger("click");
                    var a = " li:not(.divider):visible a",
                        l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (l.length) {
                        var c = l.index(l.filter(":focus"));
                        38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', r.prototype.keydown)
    }(jQuery),
    function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var n = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    r = document.createElement("div");
                r.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", i.appendChild(r.childNodes[1])
            }
            return e && t.extend(n, e), this.each(function() {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                n.customSelector && e.push(n.customSelector);
                var i = t(this).find(e.join(","));
                i = i.not("object object"), i.each(function() {
                    var e = t(this);
                    if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        var n = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            i = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            o = n / i;
                        if (!e.attr("id")) {
                            var r = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", r)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, n) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(e), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(e).data("slick") || {}, r.options = t.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : i === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, n) {
            var i = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(t) {
                    t = Math.ceil(t), o.options.vertical === !1 ? (i[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), i[o.animType] = o.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
                o.disableTransition(), n.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                n = e.options.asNavFor;
            return n && null !== n && (n = t(n).not(e.$slider)), n
        }, e.prototype.asNavFor = function(e) {
            var n = this,
                i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                n = {};
            n[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; o > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = t * s + (e * a.options.slidesPerRow + n);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, n) {
            var i, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                o = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, n) {
            var i, o, r, s = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, n, i = this;
            if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = n;
                        break
                    }
                    n = e[o]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function(t, e) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function() {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) i = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function(t) {
            var e, n, i, o = this,
                r = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + r, o.options.variableWidth === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? t : t + o.options.slidesToShow), e = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, o.options.centerMode === !0 && (i = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? t : t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                n = 0,
                i = 0,
                o = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > n;) o.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, n, i, o = this;
            return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
                return r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r, !1) : void 0
            }), e = Math.abs(t(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + n
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, n])
                        })
                    }, i.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, n])
                    }, i.src = n
                })
            }
            var n, i, o, r, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), e(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var n, i, o, r = this,
                s = t("img[data-lazy]", r.$slider);
            s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function() {
                n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), r.options.adaptiveHeight === !0 && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, n, i]), r.progressiveLazyLoad()
            }, o.onerror = function() {
                3 > e ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad())
            }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
        }, e.prototype.refresh = function(e) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: n
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, n, i, o = this,
                r = o.options.responsive || null;
            if ("array" === t.type(r) && r.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in r)
                    if (i = o.breakpoints.length - 1, n = r[e].breakpoint, r.hasOwnProperty(e)) {
                        for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[e].settings
                    }
                o.breakpoints.sort(function(t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, i.slideCount < 1 || 0 > t || t > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, n, i = this,
                o = {};
            i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, n = this;
            n.$slides.each(function(i, o) {
                e = n.slideWidth * i * -1, t(o).css(n.options.rtl === !0 ? {
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                } : {
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, n, i, o, r, s = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
            else if ("multiple" === r) t.each(i, function(t, e) {
                s.options[t] = e
            });
            else if ("responsive" === r)
                for (n in o)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [o[n]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0;) s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(o[n])
                    }
            a && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, n, i, o, r = this;
            n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, n, i, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) n = e - 1, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; i > e; e += 1) n = e, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var n = this,
                i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
        }, e.prototype.slideHandler = function(t, e, n) {
            var i, o, r, s, a, l = null,
                c = this;
            return e = e || !1, c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (e === !1 && c.asNavFor(t), i = t, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function() {
                c.postSlide(i)
            }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (n !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(n !== !0 ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o))))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, n, i, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, n, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, n, i, o, r, s = this;
            return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !s.dragging || r && 1 !== r.length ? !1 : (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.swipeLeft = s.options.vertical === !1 ? e + i * o : e + i * (s.$list.height() / s.listWidth) * o, s.options.verticalSwiping === !0 && (s.swipeLeft = e + i * o), s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, n = this;
            return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (t.interrupted = document[t.hidden] ? !0 : !1)
        }, t.fn.slick = function() {
            var t, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (t = 0; s > t; t++)
                if ("object" == typeof o || "undefined" == typeof o ? i[t].slick = new e(i[t], o) : n = i[t].slick[o].apply(i[t].slick, r), "undefined" != typeof n) return n;
            return i
        }
    }),
    function(t) {
        t.flexslider = function(e, n) {
            var i = t(e);
            i.vars = t.extend({}, t.flexslider.defaults, n);
            var o, r = i.vars.namespace,
                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                a = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                l = "click touchend MSPointerUp keyup",
                c = "",
                u = "vertical" === i.vars.direction,
                d = i.vars.reverse,
                p = i.vars.itemWidth > 0,
                h = "fade" === i.vars.animation,
                f = "" !== i.vars.asNavFor,
                v = {},
                m = !0;
            t.data(e, "flexslider", i), v = {
                init: function() {
                    i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = t(i.vars.selector, i), i.container = t(i.containerSelector, i), i.count = i.slides.length, i.syncExists = t(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = u ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !h && i.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in e)
                            if (void 0 !== t.style[e[n]]) return i.pfx = e[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                        return !1
                    }(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = t(i.vars.controlsContainer).length > 0 && t(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = t(i.vars.manualControls).length > 0 && t(i.vars.manualControls)), "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === t(i.vars.customDirectionNav).length && t(i.vars.customDirectionNav)), i.vars.randomize && (i.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && v.controlNav.setup(), i.vars.directionNav && v.directionNav.setup(), i.vars.keyboard && (1 === t(i.containerSelector).length || i.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!i.animating && (39 === e || 37 === e)) {
                            var n = 39 === e ? i.getTarget("next") : 37 === e ? i.getTarget("prev") : !1;
                            i.flexAnimate(n, i.vars.pauseOnAction)
                        }
                    }), i.vars.mousewheel && i.bind("mousewheel", function(t, e, n, o) {
                        t.preventDefault();
                        var r = i.getTarget(0 > e ? "next" : "prev");
                        i.flexAnimate(r, i.vars.pauseOnAction)
                    }), i.vars.pausePlay && v.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && v.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                        i.manualPlay || i.manualPause || i.pause()
                    }, function() {
                        i.manualPause || i.manualPlay || i.stopped || i.play()
                    }), i.vars.pauseInvisible && v.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && v.asNav.setup(), a && i.vars.touch && v.touch(), (!h || h && i.vars.smoothHeight) && t(window).bind("resize orientationchange focus", v.resize), i.find("img").attr("draggable", "false"), setTimeout(function() {
                        i.vars.start(i)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(r + "active-slide").eq(i.currentItem).addClass(r + "active-slide"), s ? (e._slider = i, i.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var n = t(this),
                                    o = n.index();
                                t(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : i.slides.on(l, function(e) {
                            e.preventDefault();
                            var n = t(this),
                                o = n.index(),
                                s = n.offset().left - t(i).scrollLeft();
                            0 >= s && n.hasClass(r + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : t(i.vars.asNavFor).data("flexslider").animating || n.hasClass(r + "active-slide") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        i.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, n, o = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
                            s = 1;
                        if (i.controlNavScaffold = t('<ol class="' + r + "control-nav " + r + o + '"></ol>'), i.pagingCount > 1)
                            for (var a = 0; a < i.pagingCount; a++) {
                                if (n = i.slides.eq(a), e = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + s + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                    var u = n.attr("data-thumbcaption");
                                    "" !== u && void 0 !== u && (e += '<span class="' + r + 'caption">' + u + "</span>")
                                }
                                i.controlNavScaffold.append("<li>" + e + "</li>"), s++
                            }
                        i.controlsContainer ? t(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), i.controlNavScaffold.delegate("a, img", l, function(e) {
                            if (e.preventDefault(), "" === c || c === e.type) {
                                var n = t(this),
                                    o = i.controlNav.index(n);
                                n.hasClass(r + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                            }
                            "" === c && (c = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        i.controlNav = i.manualControls, v.controlNav.active(), i.controlNav.bind(l, function(e) {
                            if (e.preventDefault(), "" === c || c === e.type) {
                                var n = t(this),
                                    o = i.controlNav.index(n);
                                n.hasClass(r + "active") || (i.direction = o > i.currentSlide ? "next" : "prev", i.flexAnimate(o, i.vars.pauseOnAction))
                            }
                            "" === c && (c = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === i.vars.controlNav ? "img" : "a";
                        i.controlNav = t("." + r + "control-nav li " + e, i.controlsContainer ? i.controlsContainer : i)
                    },
                    active: function() {
                        i.controlNav.removeClass(r + "active").eq(i.animatingTo).addClass(r + "active")
                    },
                    update: function(e, n) {
                        i.pagingCount > 1 && "add" === e ? i.controlNavScaffold.append(t("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), v.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, e) : v.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                        i.customDirectionNav ? i.directionNav = i.customDirectionNav : i.controlsContainer ? (t(i.controlsContainer).append(e), i.directionNav = t("." + r + "direction-nav li a", i.controlsContainer)) : (i.append(e), i.directionNav = t("." + r + "direction-nav li a", i)), v.directionNav.update(), i.directionNav.bind(l, function(e) {
                            e.preventDefault();
                            var n;
                            ("" === c || c === e.type) && (n = i.getTarget(t(this).hasClass(r + "next") ? "next" : "prev"), i.flexAnimate(n, i.vars.pauseOnAction)), "" === c && (c = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = r + "disabled";
                        1 === i.pagingCount ? i.directionNav.addClass(t).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(t).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : i.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + r + 'pauseplay"><a></a></div>');
                        i.controlsContainer ? (i.controlsContainer.append(e), i.pausePlay = t("." + r + "pauseplay a", i.controlsContainer)) : (i.append(e), i.pausePlay = t("." + r + "pauseplay a", i)), v.pausePlay.update(i.vars.slideshow ? r + "pause" : r + "play"), i.pausePlay.bind(l, function(e) {
                            e.preventDefault(), ("" === c || c === e.type) && (t(this).hasClass(r + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === c && (c = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? i.pausePlay.removeClass(r + "pause").addClass(r + "play").html(i.vars.playText) : i.pausePlay.removeClass(r + "play").addClass(r + "pause").html(i.vars.pauseText)
                    }
                },
                touch: function() {
                    function t(t) {
                        t.stopPropagation(), i.animating ? t.preventDefault() : (i.pause(), e._gesture.addPointer(t.pointerId), T = 0, c = u ? i.h : i.w, v = Number(new Date), l = p && d && i.animatingTo === i.last ? 0 : p && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : d ? (i.last - i.currentSlide + i.cloneOffset) * c : (i.currentSlide + i.cloneOffset) * c)
                    }

                    function n(t) {
                        t.stopPropagation();
                        var n = t.target._slider;
                        if (n) {
                            var i = -t.translationX,
                                o = -t.translationY;
                            return T += u ? o : i, f = T, b = u ? Math.abs(T) < Math.abs(-i) : Math.abs(T) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                e._gesture.stop()
                            }) : void((!b || Number(new Date) - v > 500) && (t.preventDefault(), !h && n.transitions && (n.vars.animationLoop || (f = T / (0 === n.currentSlide && 0 > T || n.currentSlide === n.last && T > 0 ? Math.abs(T) / c + 2 : 1)), n.setProps(l + f, "setTouch"))))
                        }
                    }

                    function o(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !b && null !== f) {
                                var n = d ? -f : f,
                                    i = e.getTarget(n > 0 ? "next" : "prev");
                                e.canAdvance(i) && (Number(new Date) - v < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? e.flexAnimate(i, e.vars.pauseOnAction) : h || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            r = null, a = null, f = null, l = null, T = 0
                        }
                    }
                    var r, a, l, c, f, v, m, g, y, b = !1,
                        w = 0,
                        x = 0,
                        T = 0;
                    s ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", t, !1), e._slider = i, e.addEventListener("MSGestureChange", n, !1), e.addEventListener("MSGestureEnd", o, !1)) : (m = function(t) {
                        i.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (i.pause(), c = u ? i.h : i.w, v = Number(new Date), w = t.touches[0].pageX, x = t.touches[0].pageY, l = p && d && i.animatingTo === i.last ? 0 : p && d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : d ? (i.last - i.currentSlide + i.cloneOffset) * c : (i.currentSlide + i.cloneOffset) * c, r = u ? x : w, a = u ? w : x, e.addEventListener("touchmove", g, !1), e.addEventListener("touchend", y, !1))
                    }, g = function(t) {
                        w = t.touches[0].pageX, x = t.touches[0].pageY, f = u ? r - x : r - w, b = u ? Math.abs(f) < Math.abs(w - a) : Math.abs(f) < Math.abs(x - a);
                        var e = 500;
                        (!b || Number(new Date) - v > e) && (t.preventDefault(), !h && i.transitions && (i.vars.animationLoop || (f /= 0 === i.currentSlide && 0 > f || i.currentSlide === i.last && f > 0 ? Math.abs(f) / c + 2 : 1), i.setProps(l + f, "setTouch")))
                    }, y = function(t) {
                        if (e.removeEventListener("touchmove", g, !1), i.animatingTo === i.currentSlide && !b && null !== f) {
                            var n = d ? -f : f,
                                o = i.getTarget(n > 0 ? "next" : "prev");
                            i.canAdvance(o) && (Number(new Date) - v < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? i.flexAnimate(o, i.vars.pauseOnAction) : h || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                        }
                        e.removeEventListener("touchend", y, !1), r = null, a = null, f = null, l = null
                    }, e.addEventListener("touchstart", m, !1))
                },
                resize: function() {
                    !i.animating && i.is(":visible") && (p || i.doMath(), h ? v.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && v.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!u || h) {
                        var e = h ? i : i.viewport;
                        t ? e.animate({
                            height: i.slides.eq(i.animatingTo).height()
                        }, t) : e.height(i.slides.eq(i.animatingTo).height())
                    }
                },
                sync: function(e) {
                    var n = t(i.vars.sync).data("flexslider"),
                        o = i.animatingTo;
                    switch (e) {
                        case "animate":
                            n.flexAnimate(o, i.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                v.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        return t ? document[t] : !1
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(o), o = setTimeout(function() {
                        c = ""
                    }, 3e3)
                }
            }, i.flexAnimate = function(e, n, o, s, l) {
                if (i.vars.animationLoop || e === i.currentSlide || (i.direction = e > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < e ? "next" : "prev"), !i.animating && (i.canAdvance(e, l) || o) && i.is(":visible")) {
                    if (f && s) {
                        var c = t(i.vars.asNavFor).data("flexslider");
                        if (i.atEnd = 0 === e || e === i.count - 1, c.flexAnimate(e, !0, !1, !0, l), i.direction = i.currentItem < e ? "next" : "prev", c.direction = i.direction, Math.ceil((e + 1) / i.visible) - 1 === i.currentSlide || 0 === e) return i.currentItem = e, i.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), !1;
                        i.currentItem = e, i.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), e = Math.floor(e / i.visible)
                    }
                    if (i.animating = !0, i.animatingTo = e, n && i.pause(), i.vars.before(i), i.syncExists && !l && v.sync("animate"), i.vars.controlNav && v.controlNav.active(), p || i.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), i.atEnd = 0 === e || e === i.last, i.vars.directionNav && v.directionNav.update(), e === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), h) a ? (i.slides.eq(i.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), i.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), i.wrapup(b)) : (i.slides.eq(i.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, i.vars.animationSpeed, i.vars.easing), i.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
                    else {
                        var m, g, y, b = u ? i.slides.filter(":first").height() : i.computedW;
                        p ? (m = i.vars.itemMargin, y = (i.itemW + m) * i.move * i.animatingTo, g = y > i.limit && 1 !== i.visible ? i.limit : y) : g = 0 === i.currentSlide && e === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? d ? (i.count + i.cloneOffset) * b : 0 : i.currentSlide === i.last && 0 === e && i.vars.animationLoop && "prev" !== i.direction ? d ? 0 : (i.count + 1) * b : d ? (i.count - 1 - e + i.cloneOffset) * b : (e + i.cloneOffset) * b, i.setProps(g, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(i.ensureAnimationEnd), i.wrapup(b)
                        }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                            i.wrapup(b)
                        }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
                            i.wrapup(b)
                        })
                    }
                    i.vars.smoothHeight && v.smoothHeight(i.vars.animationSpeed)
                }
            }, i.wrapup = function(t) {
                h || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(t, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(t, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
            }, i.animateSlides = function() {
                !i.animating && m && i.flexAnimate(i.getTarget("next"))
            }, i.pause = function() {
                clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && v.pausePlay.update("play"), i.syncExists && v.sync("pause")
            }, i.play = function() {
                i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && v.pausePlay.update("pause"), i.syncExists && v.sync("play")
            }, i.stop = function() {
                i.pause(), i.stopped = !0
            }, i.canAdvance = function(t, e) {
                var n = f ? i.pagingCount - 1 : i.last;
                return e ? !0 : f && i.currentItem === i.count - 1 && 0 === t && "prev" === i.direction ? !0 : f && 0 === i.currentItem && t === i.pagingCount - 1 && "next" !== i.direction ? !1 : t !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && t === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === t && "next" === i.direction ? !1 : !0 : !1
            }, i.getTarget = function(t) {
                return i.direction = t, "next" === t ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
            }, i.setProps = function(t, e, n) {
                var o = function() {
                    var n = t ? t : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                        o = function() {
                            if (p) return "setTouch" === e ? t : d && i.animatingTo === i.last ? 0 : d ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                            switch (e) {
                                case "setTotal":
                                    return d ? (i.count - 1 - i.currentSlide + i.cloneOffset) * t : (i.currentSlide + i.cloneOffset) * t;
                                case "setTouch":
                                    return d ? t : t;
                                case "jumpEnd":
                                    return d ? t : i.count * t;
                                case "jumpStart":
                                    return d ? i.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return -1 * o + "px"
                }();
                i.transitions && (o = u ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)), i.args[i.prop] = o, (i.transitions || void 0 === n) && i.container.css(i.args), i.container.css("transform", o)
            }, i.setup = function(e) {
                if (h) i.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (a ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && v.smoothHeight();
                else {
                    var n, o;
                    "init" === e && (i.viewport = t('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, d && (o = t.makeArray(i.slides).reverse(), i.slides = t(o), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== e && i.container.find(".clone").remove(), i.container.append(v.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = t(i.vars.selector, i), n = d ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, u && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        i.newSlides.css({
                            display: "block"
                        }), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                    }, "init" === e ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function() {
                        i.doMath(), i.newSlides.css({
                            width: i.computedW,
                            "float": "left",
                            display: "block"
                        }), i.vars.smoothHeight && v.smoothHeight()
                    }, "init" === e ? 100 : 0))
                }
                p || i.slides.removeClass(r + "active-slide").eq(i.currentSlide).addClass(r + "active-slide"), i.vars.init(i)
            }, i.doMath = function() {
                var t = i.slides.first(),
                    e = i.vars.itemMargin,
                    n = i.vars.minItems,
                    o = i.vars.maxItems;
                i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = t.height(), i.boxPadding = t.outerWidth() - t.width(), p ? (i.itemT = i.vars.itemWidth + e, i.minW = n ? n * i.itemT : i.w, i.maxW = o ? o * i.itemT - e : i.w, i.itemW = i.minW > i.w ? (i.w - e * (n - 1)) / n : i.maxW < i.w ? (i.w - e * (o - 1)) / o : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + e * (i.count - 1) : (i.itemW + e) * i.count - i.w - e) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
            }, i.update = function(t, e) {
                i.doMath(), p || (t < i.currentSlide ? i.currentSlide += 1 : t <= i.currentSlide && 0 !== t && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === e && !p || i.pagingCount > i.controlNav.length ? v.controlNav.update("add") : ("remove" === e && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), v.controlNav.update("remove", i.last))), i.vars.directionNav && v.directionNav.update()
            }, i.addSlide = function(e, n) {
                var o = t(e);
                i.count += 1, i.last = i.count - 1, u && d ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o), i.update(n, "add"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
            }, i.removeSlide = function(e) {
                var n = isNaN(e) ? i.slides.index(t(e)) : e;
                i.count -= 1, i.last = i.count - 1, isNaN(e) ? t(e, i.slides).remove() : u && d ? i.slides.eq(i.last).remove() : i.slides.eq(e).remove(), i.doMath(), i.update(n, "remove"), i.slides = t(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
            }, v.init()
        }, t(window).blur(function(t) {
            focused = !1
        }).focus(function(t) {
            focused = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var n = t(this),
                    i = e.selector ? e.selector : ".slides > li",
                    o = n.find(i);
                1 === o.length && e.allowOneSlide === !0 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(n)) : void 0 === n.data("flexslider") && new t.flexslider(this, e)
            });
            var n = t(this).data("flexslider");
            switch (e) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && n.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    function(t) {
        var e = !1;
        if ("function" == typeof define && define.amd && (define(t), e = !0), "object" == typeof exports && (module.exports = t(), e = !0), !e) {
            var n = window.Cookies,
                i = window.Cookies = t();
            i.noConflict = function() {
                return window.Cookies = n, i
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function e(n) {
            function i(e, o, r) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (r = t({
                                path: "/"
                            }, i.defaults, r), "number" == typeof r.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
                        }
                        try {
                            s = JSON.stringify(o), /^[\{\[]/.test(s) && (o = s)
                        } catch (l) {}
                        return o = n.write ? n.write(o, e) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", o, r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                    }
                    e || (s = {});
                    for (var c = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < c.length; d++) {
                        var p = c[d].split("="),
                            h = p.slice(1).join("=");
                        '"' === h.charAt(0) && (h = h.slice(1, -1));
                        try {
                            var f = p[0].replace(u, decodeURIComponent);
                            if (h = n.read ? n.read(h, f) : n(h, f) || h.replace(u, decodeURIComponent), this.json) try {
                                h = JSON.parse(h)
                            } catch (l) {}
                            if (e === f) {
                                s = h;
                                break
                            }
                            e || (s[f] = h)
                        } catch (l) {}
                    }
                    return s
                }
            }
            return i.set = i, i.get = function(t) {
                return i.call(i, t)
            }, i.getJSON = function() {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function(e, n) {
                i(e, "", t(n, {
                    expires: -1
                }))
            }, i.withConverter = e, i
        }
        return e(function() {})
    }),
    function() {
        function m() {
            return function() {}
        }

        function n(t) {
            return function() {
                return this[t]
            }
        }

        function p(t) {
            return function() {
                return t
            }
        }

        function t(e, n, i) {
            if ("string" == typeof e) {
                if (0 === e.indexOf("#") && (e = e.slice(1)), t.Ca[e]) return n && t.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), i && t.Ca[e].I(i), t.Ca[e];
                e = t.m(e)
            }
            if (!e || !e.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            return e.player || new t.Player(e, n, i)
        }

        function v(e, n, i, o) {
            t.tc.forEach(i, function(t) {
                e(n, t, o)
            })
        }

        function F(e, n) {
            var i, o;
            i = Array.prototype.slice.call(n), o = m(), o = window.console || {
                log: o,
                warn: o,
                error: o
            }, e ? i.unshift(e.toUpperCase() + ":") : e = "log", t.log.history.push(i), i.unshift("VIDEOJS:"), o[e].apply ? o[e].apply(o, i) : o[e](i.join(" "))
        }

        function G(t) {
            t.r("vjs-lock-showing")
        }

        function ca(e, n, i, o) {
            return i !== b ? ((i === j || t.ge(i)) && (i = 0), e.c.style[n] = -1 !== ("" + i).indexOf("%") || -1 !== ("" + i).indexOf("px") ? i : "auto" === i ? "" : i + "px", o || e.o("resize"), e) : e.c ? (i = e.c.style[n], o = i.indexOf("px"), -1 !== o ? parseInt(i.slice(0, o), 10) : parseInt(e.c["offset" + t.va(n)], 10)) : 0
        }

        function da(e) {
            var n, i, o, r, s, a, c, u;
            n = 0, i = j, e.b("touchstart", function(e) {
                1 === e.touches.length && (i = t.i.copy(e.touches[0]), n = (new Date).getTime(), r = f)
            }), e.b("touchmove", function(t) {
                1 < t.touches.length ? r = l : i && (a = t.touches[0].pageX - i.pageX, c = t.touches[0].pageY - i.pageY, u = Math.sqrt(a * a + c * c), u > 10 && (r = l))
            }), s = function() {
                r = l
            }, e.b("touchleave", s), e.b("touchcancel", s), e.b("touchend", function(t) {
                i = j, r === f && (o = (new Date).getTime() - n, 200 > o && (t.preventDefault(), this.o("tap")))
            })
        }

        function ea(e, n) {
            var i, o, r, s;
            return i = e.c, o = t.Vd(i), s = r = i.offsetWidth, i = e.handle, e.options().vertical ? (s = o.top, o = n.changedTouches ? n.changedTouches[0].pageY : n.pageY, i && (i = i.m().offsetHeight, s += i / 2, r -= i), Math.max(0, Math.min(1, (s - o + r) / r))) : (r = o.left, o = n.changedTouches ? n.changedTouches[0].pageX : n.pageX, i && (i = i.m().offsetWidth, r += i / 2, s -= i), Math.max(0, Math.min(1, (o - r) / s)))
        }

        function fa(e, n) {
            e.aa(n), n.b("click", t.bind(e, function() {
                G(this)
            }))
        }

        function ga(t) {
            t.Ja = f, t.za.p("vjs-lock-showing"), t.c.setAttribute("aria-pressed", f), t.H && 0 < t.H.length && t.H[0].m().focus()
        }

        function H(t) {
            t.Ja = l, G(t.za), t.c.setAttribute("aria-pressed", l)
        }

        function ia(e) {
            var n, i, o = {
                sources: [],
                tracks: []
            };
            if (n = t.Oa(e), i = n["data-setup"], i !== j && t.i.D(n, t.JSON.parse(i || "{}")), t.i.D(o, n), e.hasChildNodes()) {
                var r, s;
                for (e = e.childNodes, r = 0, s = e.length; s > r; r++) n = e[r], i = n.nodeName.toLowerCase(), "source" === i ? o.sources.push(t.Oa(n)) : "track" === i && o.tracks.push(t.Oa(n))
            }
            return o
        }

        function ka(e, n, i) {
            e.h && (e.ya = l, e.h.dispose(), e.h = l), "Html5" !== n && e.L && (t.f.Kb(e.L), e.L = j), e.Ta = n, e.ya = l;
            var o = t.i.D({
                source: i,
                parentEl: e.c
            }, e.q[n.toLowerCase()]);
            i && (e.Cc = i.type, i.src == e.K.src && 0 < e.K.currentTime && (o.startTime = e.K.currentTime), e.K.src = i.src), e.h = new window.videojs[n](e, o), e.h.I(function() {
                this.d.Va()
            })
        }

        function la(t, e) {
            e !== b && t.Jc !== e && ((t.Jc = e) ? (t.p("vjs-has-started"), t.o("firstplay")) : t.r("vjs-has-started"))
        }

        function N(e, n, i) {
            if (e.h && !e.h.ya) e.h.I(function() {
                this[n](i)
            });
            else try {
                e.h[n](i)
            } catch (o) {
                throw t.log(o), o
            }
        }

        function M(e, n) {
            if (e.h && e.h.ya) try {
                return e.h[n]()
            } catch (i) {
                throw e.h[n] === b ? t.log("Video.js: " + n + " method not defined for " + e.Ta + " playback technology.", i) : "TypeError" == i.name ? (t.log("Video.js: " + n + " unavailable on " + e.Ta + " playback technology element.", i), e.h.ya = l) : t.log(i), i
            }
        }

        function ma(t, e) {
            var n = t.selectSource(e);
            n ? n.h === t.Ta ? t.src(n.source) : ka(t, n.h, n.source) : (t.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.v(this.options().notSupportedMessage)
                })
            }, 0), t.Va())
        }

        function ja(t, e) {
            return e !== b ? (t.Lc = !!e, t) : t.Lc
        }

        function na(t) {
            return t.k().h && t.k().h.featuresPlaybackRate && t.k().options().playbackRates && 0 < t.k().options().playbackRates.length
        }

        function oa(t, e) {
            var n = /^blob\:/i;
            return e && t && n.test(t) ? e : t
        }

        function ta() {
            var t = T[U],
                e = t.charAt(0).toUpperCase() + t.slice(1);
            ua["set" + e] = function(e) {
                return this.c.vjs_setProperty(t, e)
            }
        }

        function va(t) {
            ua[t] = function() {
                return this.c.vjs_getProperty(t)
            }
        }

        function P(e, n) {
            var i = e.Ua.length;
            "" + i in e || Object.defineProperty(e, i, {
                get: function() {
                    return this.Ua[i]
                }
            }), n.addEventListener("modechange", t.bind(e, function() {
                this.o("change")
            })), e.Ua.push(n), e.o({
                type: "addtrack",
                Y: n
            })
        }

        function Q(t, e) {
            for (var n, i = 0, o = t.length; o > i; i++)
                if (n = t[i], n === e) {
                    t.Ua.splice(i, 1);
                    break
                }
            t.o({
                type: "removetrack",
                Y: e
            })
        }

        function W(t, e) {
            return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
        }

        function X(t) {
            var e;
            return t.Ge ? e = t.Ge[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
        }

        function Y(t, e) {
            var n, i;
            if (e) {
                for (n = 0; n < t.options.length && (i = t.options[n], !(i.value === e)); n++);
                t.selectedIndex = n
            }
        }

        function $(t, e) {
            var n = t.split("."),
                i = Ba;
            !(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
            for (var o; n.length && (o = n.shift());) n.length || e === b ? i = i[o] ? i[o] : i[o] = {} : i[o] = e
        }
        var b = void 0,
            f = !0,
            j = null,
            l = !1,
            s;
        document.createElement("video"), document.createElement("audio"), document.createElement("track");
        var videojs = window.videojs = t;
        t.fc = "4.12", t.sd = "https:" == document.location.protocol ? "https://" : "http://", t.VERSION = "4.12.15", t.options = {
            techOrder: ["html5", "flash"],
            html5: {},
            flash: {},
            width: 300,
            height: 150,
            defaultVolume: 0,
            playbackRates: [],
            inactivityTimeout: 2e3,
            children: {
                mediaLoader: {},
                posterImage: {},
                loadingSpinner: {},
                textTrackDisplay: {},
                bigPlayButton: {},
                controlBar: {},
                errorDisplay: {},
                textTrackSettings: {}
            },
            language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Ef || navigator.language || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this video."
        }, "GENERATED_CDN_VSN" !== t.fc && (videojs.options.flash.swf = t.sd + "vjs.zencdn.net/" + t.fc + "/video-js.swf"), t.Gd = function(e, n) {
            return t.options.languages[e] = t.options.languages[e] !== b ? t.Z.Aa(t.options.languages[e], n) : n, t.options.languages
        }, t.Ca = {}, "function" == typeof define && define.amd ? define("videojs", [], function() {
            return videojs
        }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), t.Ga = t.CoreObject = m(), t.Ga.extend = function(e) {
            var n, i;
            e = e || {}, n = e.init || e.l || this.prototype.init || this.prototype.l || m(), i = function() {
                n.apply(this, arguments)
            }, i.prototype = t.i.create(this.prototype), i.prototype.constructor = i, i.extend = t.Ga.extend, i.create = t.Ga.create;
            for (var o in e) e.hasOwnProperty(o) && (i.prototype[o] = e[o]);
            return i
        }, t.Ga.create = function() {
            var e = t.i.create(this.prototype);
            return this.apply(e, arguments), e
        }, t.b = function(e, n, i) {
            if (t.i.isArray(n)) return v(t.b, e, n, i);
            var o = t.getData(e);
            o.G || (o.G = {}), o.G[n] || (o.G[n] = []), i.s || (i.s = t.s++), o.G[n].push(i), o.ba || (o.disabled = l, o.ba = function(n) {
                if (!o.disabled) {
                    n = t.Nb(n);
                    var i = o.G[n.type];
                    if (i)
                        for (var i = i.slice(0), r = 0, s = i.length; s > r && !n.Nc(); r++) i[r].call(e, n)
                }
            }), 1 == o.G[n].length && (e.addEventListener ? e.addEventListener(n, o.ba, l) : e.attachEvent && e.attachEvent("on" + n, o.ba))
        }, t.n = function(e, n, i) {
            if (t.Ic(e)) {
                var o = t.getData(e);
                if (o.G) {
                    if (t.i.isArray(n)) return v(t.n, e, n, i);
                    if (n) {
                        var r = o.G[n];
                        if (r) {
                            if (i) {
                                if (i.s)
                                    for (o = 0; o < r.length; o++) r[o].s === i.s && r.splice(o--, 1)
                            } else o.G[n] = [];
                            t.xc(e, n)
                        }
                    } else
                        for (r in o.G) n = r, o.G[n] = [], t.xc(e, n)
                }
            }
        }, t.xc = function(e, n) {
            var i = t.getData(e);
            0 === i.G[n].length && (delete i.G[n], e.removeEventListener ? e.removeEventListener(n, i.ba, l) : e.detachEvent && e.detachEvent("on" + n, i.ba)), t.hb(i.G) && (delete i.G, delete i.ba, delete i.disabled), t.hb(i) && t.Zc(e)
        }, t.Nb = function(t) {
            function e() {
                return f
            }

            function n() {
                return l
            }
            if (!t || !t.Sb) {
                var i = t || window.event;
                t = {};
                for (var o in i) "layerX" !== o && "layerY" !== o && "keyLocation" !== o && ("returnValue" == o && i.preventDefault || (t[o] = i[o]));
                if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
                        i.preventDefault && i.preventDefault(), t.returnValue = l, t.ee = e, t.defaultPrevented = f
                    }, t.ee = n, t.defaultPrevented = l, t.stopPropagation = function() {
                        i.stopPropagation && i.stopPropagation(), t.cancelBubble = f, t.Sb = e
                    }, t.Sb = n, t.stopImmediatePropagation = function() {
                        i.stopImmediatePropagation && i.stopImmediatePropagation(), t.Nc = e, t.stopPropagation()
                    }, t.Nc = n, t.clientX != j) {
                    o = document.documentElement;
                    var r = document.body;
                    t.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
                }
                t.which = t.charCode || t.keyCode, t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
            }
            return t
        }, t.o = function(e, n) {
            var i = t.Ic(e) ? t.getData(e) : {},
                o = e.parentNode || e.ownerDocument;
            return "string" == typeof n && (n = {
                type: n,
                target: e
            }), n = t.Nb(n), i.ba && i.ba.call(e, n), o && !n.Sb() && n.bubbles !== l ? t.o(o, n) : o || n.defaultPrevented || (i = t.getData(n.target), !n.target[n.type]) || (i.disabled = f, "function" == typeof n.target[n.type] && n.target[n.type](), i.disabled = l), !n.defaultPrevented
        }, t.N = function(e, n, i) {
            function o() {
                t.n(e, n, o), i.apply(this, arguments)
            }
            return t.i.isArray(n) ? v(t.N, e, n, i) : (o.s = i.s = i.s || t.s++, void t.b(e, n, o))
        };
        var w = Object.prototype.hasOwnProperty;
        t.e = function(e, n) {
            var i;
            return n = n || {}, i = document.createElement(e || "div"), t.i.ca(n, function(t, e) {
                -1 !== t.indexOf("aria-") || "role" == t ? i.setAttribute(t, e) : i[t] = e
            }), i
        }, t.va = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, t.i = {}, t.i.create = Object.create || function(t) {
            function e() {}
            return e.prototype = t, new e
        }, t.i.ca = function(t, e, n) {
            for (var i in t) w.call(t, i) && e.call(n || this, i, t[i])
        }, t.i.D = function(t, e) {
            if (!e) return t;
            for (var n in e) w.call(e, n) && (t[n] = e[n]);
            return t
        }, t.i.Od = function(e, n) {
            var i, o, r;
            e = t.i.copy(e);
            for (i in n) w.call(n, i) && (o = e[i], r = n[i], e[i] = t.i.ib(o) && t.i.ib(r) ? t.i.Od(o, r) : n[i]);
            return e
        }, t.i.copy = function(e) {
            return t.i.D({}, e)
        }, t.i.ib = function(t) {
            return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
        }, t.i.isArray = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, t.ge = function(t) {
            return t !== t
        }, t.bind = function(e, n, i) {
            function o() {
                return n.apply(e, arguments)
            }
            return n.s || (n.s = t.s++), o.s = i ? i + "_" + n.s : n.s, o
        }, t.ua = {}, t.s = 1, t.expando = "vdata" + (new Date).getTime(), t.getData = function(e) {
            var n = e[t.expando];
            return n || (n = e[t.expando] = t.s++), t.ua[n] || (t.ua[n] = {}), t.ua[n]
        }, t.Ic = function(e) {
            return e = e[t.expando], !(!e || t.hb(t.ua[e]))
        }, t.Zc = function(e) {
            var n = e[t.expando];
            if (n) {
                delete t.ua[n];
                try {
                    delete e[t.expando]
                } catch (i) {
                    e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = j
                }
            }
        }, t.hb = function(t) {
            for (var e in t)
                if (t[e] !== j) return l;
            return f
        }, t.Pa = function(t, e) {
            return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
        }, t.p = function(e, n) {
            t.Pa(e, n) || (e.className = "" === e.className ? n : e.className + " " + n)
        }, t.r = function(e, n) {
            var i, o;
            if (t.Pa(e, n)) {
                for (i = e.className.split(" "), o = i.length - 1; o >= 0; o--) i[o] === n && i.splice(o, 1);
                e.className = i.join(" ")
            }
        }, t.A = t.e("video");
        var x = document.createElement("track");
        x.Tb = "captions", x.ed = "en", x.label = "English", t.A.appendChild(x), t.P = navigator.userAgent, t.zd = /iPhone/i.test(t.P), t.yd = /iPad/i.test(t.P), t.Ad = /iPod/i.test(t.P), t.xd = t.zd || t.yd || t.Ad;
        var aa = t,
            y, z = t.P.match(/OS (\d+)_/i);
        y = z && z[1] ? z[1] : b, aa.ff = y, t.wd = /Android/i.test(t.P);
        var ba = t,
            B, C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
            D, E;
        C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j, ba.ec = B, t.Bd = t.wd && /webkit/i.test(t.P) && 2.3 > t.ec, t.gc = /Firefox/i.test(t.P), t.gf = /Chrome/i.test(t.P), t.pa = /MSIE\s8\.0/.test(t.P), t.Db = !!("ontouchstart" in window || window.ud && document instanceof window.ud), t.td = "backgroundSize" in t.A.style, t.ad = function(e, n) {
            t.i.ca(n, function(t, n) {
                n === j || "undefined" == typeof n || n === l ? e.removeAttribute(t) : e.setAttribute(t, n === f ? "" : n)
            })
        }, t.Oa = function(t) {
            var e, n, i, o;
            if (e = {}, t && t.attributes && 0 < t.attributes.length) {
                n = t.attributes;
                for (var r = n.length - 1; r >= 0; r--) i = n[r].name, o = n[r].value, ("boolean" == typeof t[i] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",")) && (o = o !== j ? f : l), e[i] = o
            }
            return e
        }, t.rf = function(t, e) {
            var n = "";
            return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), n
        }, t.Rb = function(t, e) {
            e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
        }, t.bb = {}, t.m = function(t) {
            return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
        }, t.Na = function(t, e) {
            e = e || t;
            var n = Math.floor(t % 60),
                i = Math.floor(t / 60 % 60),
                o = Math.floor(t / 3600),
                r = Math.floor(e / 60 % 60),
                s = Math.floor(e / 3600);
            return (isNaN(t) || 1 / 0 === t) && (o = i = n = "-"), o = o > 0 || s > 0 ? o + ":" : "", o + (((o || r >= 10) && 10 > i ? "0" + i : i) + ":") + (10 > n ? "0" + n : n)
        }, t.Id = function() {
            document.body.focus(), document.onselectstart = p(l)
        }, t.Xe = function() {
            document.onselectstart = p(f)
        }, t.trim = function(t) {
            return (t + "").replace(/^\s+|\s+$/g, "")
        }, t.round = function(t, e) {
            return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        }, t.xa = function(t, e) {
            return t === b && e === b ? {
                length: 0,
                start: function() {
                    throw Error("This TimeRanges object is empty")
                },
                end: function() {
                    throw Error("This TimeRanges object is empty")
                }
            } : {
                length: 1,
                start: function() {
                    return t
                },
                end: function() {
                    return e
                }
            }
        }, t.Ie = function(e) {
            try {
                var n = window.localStorage || l;
                n && (n.volume = e)
            } catch (i) {
                22 == i.code || 1014 == i.code ? t.log("LocalStorage Full (VideoJS)", i) : 18 == i.code ? t.log("LocalStorage not allowed (VideoJS)", i) : t.log("LocalStorage Error (VideoJS)", i)
            }
        }, t.Xd = function(e) {
            return e.match(/^https?:\/\//) || (e = t.e("div", {
                innerHTML: '<a href="' + e + '">x</a>'
            }).firstChild.href), e
        }, t.Ae = function(e) {
            var n, i, o, r;
            r = "protocol hostname port pathname search hash host".split(" "), i = t.e("a", {
                href: e
            }), (o = "" === i.host && "file:" !== i.protocol) && (n = t.e("div"), n.innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(n)), e = {};
            for (var s = 0; s < r.length; s++) e[r[s]] = i[r[s]];
            return "http:" === e.protocol && (e.host = e.host.replace(/:80$/, "")), "https:" === e.protocol && (e.host = e.host.replace(/:443$/, "")), o && document.body.removeChild(n), e
        }, t.log = function() {
            F(j, arguments)
        }, t.log.history = [], t.log.error = function() {
            F("error", arguments)
        }, t.log.warn = function() {
            F("warn", arguments)
        }, t.Vd = function(e) {
            var n, i;
            return e.getBoundingClientRect && e.parentNode && (n = e.getBoundingClientRect()), n ? (e = document.documentElement, i = document.body, {
                left: t.round(n.left + (window.pageXOffset || i.scrollLeft) - (e.clientLeft || i.clientLeft || 0)),
                top: t.round(n.top + (window.pageYOffset || i.scrollTop) - (e.clientTop || i.clientTop || 0))
            }) : {
                left: 0,
                top: 0
            }
        }, t.tc = {}, t.tc.forEach = function(e, n, i) {
            if (t.i.isArray(e) && n instanceof Function)
                for (var o = 0, r = e.length; r > o; ++o) n.call(i || t, e[o], o, e);
            return e
        }, t.bf = function(e, n) {
            var i, o, r, s, a, l, c;
            "string" == typeof e && (e = {
                uri: e
            }), videojs.Z.Aa({
                method: "GET",
                timeout: 45e3
            }, e), n = n || m(), l = function() {
                window.clearTimeout(a), n(j, o, o.response || o.responseText)
            }, c = function(t) {
                window.clearTimeout(a), t && "string" != typeof t || (t = Error(t)), n(t, o)
            }, i = window.XMLHttpRequest, "undefined" == typeof i && (i = function() {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (t) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (e) {}
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch (n) {}
                throw Error("This browser does not support XMLHttpRequest.")
            }), o = new i, o.uri = e.uri, i = t.Ae(e.uri), r = window.location, i.protocol + i.host === r.protocol + r.host || !window.XDomainRequest || "withCredentials" in o ? (s = "file:" == i.protocol || "file:" == r.protocol, o.onreadystatechange = function() {
                if (4 === o.readyState) {
                    if (o.Ue) return c("timeout");
                    200 === o.status || s && 0 === o.status ? l() : c()
                }
            }, e.timeout && (a = window.setTimeout(function() {
                4 !== o.readyState && (o.Ue = f, o.abort())
            }, e.timeout))) : (o = new window.XDomainRequest, o.onload = l, o.onerror = c, o.onprogress = m(), o.ontimeout = m());
            try {
                o.open(e.method || "GET", e.uri, f)
            } catch (u) {
                return void c(u)
            }
            e.withCredentials && (o.withCredentials = f), e.responseType && (o.responseType = e.responseType);
            try {
                o.send()
            } catch (d) {
                c(d)
            }
        }, t.Z = {}, t.Z.Aa = function(e, n) {
            var i, o, r;
            e = t.i.copy(e);
            for (i in n) n.hasOwnProperty(i) && (o = e[i], r = n[i], e[i] = t.i.ib(o) && t.i.ib(r) ? t.Z.Aa(o, r) : n[i]);
            return e
        }, t.z = m(), s = t.z.prototype, s.ab = {}, s.b = function(e, n) {
            var i = this.addEventListener;
            this.addEventListener = Function.prototype, t.b(this, e, n), this.addEventListener = i
        }, s.addEventListener = t.z.prototype.b, s.n = function(e, n) {
            t.n(this, e, n)
        }, s.removeEventListener = t.z.prototype.n, s.N = function(e, n) {
            t.N(this, e, n)
        }, s.o = function(e) {
            var n = e.type || e;
            "string" == typeof e && (e = {
                type: n
            }), e = t.Nb(e), this.ab[n] && this["on" + n] && this["on" + n](e), t.o(this, e)
        }, s.dispatchEvent = t.z.prototype.o, t.a = t.Ga.extend({
            l: function(e, n, i) {
                if (this.d = e, this.q = t.i.copy(this.q), n = this.options(n), this.Qa = n.id || n.el && n.el.id, this.Qa || (this.Qa = (e.id && e.id() || "no_player") + "_component_" + t.s++), this.pe = n.name || j, this.c = n.el || this.e(), this.R = [], this.cb = {}, this.eb = {}, this.Kc(), this.I(i), n.$c !== l) {
                    var o, r;
                    this.k().reportUserActivity && (o = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function() {
                        o(), this.clearInterval(r), r = this.setInterval(o, 250)
                    }), e = function() {
                        o(), this.clearInterval(r)
                    }, this.b("touchmove", o), this.b("touchend", e), this.b("touchcancel", e))
                }
            }
        }), s = t.a.prototype, s.dispose = function() {
            if (this.o({
                    type: "dispose",
                    bubbles: l
                }), this.R)
                for (var e = this.R.length - 1; e >= 0; e--) this.R[e].dispose && this.R[e].dispose();
            this.eb = this.cb = this.R = j, this.n(), this.c.parentNode && this.c.parentNode.removeChild(this.c), t.Zc(this.c), this.c = j
        }, s.d = f, s.k = n("d"), s.options = function(e) {
            return e === b ? this.q : this.q = t.Z.Aa(this.q, e)
        }, s.e = function(e, n) {
            return t.e(e, n)
        }, s.v = function(t) {
            var e = this.d.language(),
                n = this.d.languages();
            return n && n[e] && n[e][t] ? n[e][t] : t
        }, s.m = n("c"), s.wa = function() {
            return this.B || this.c
        }, s.id = n("Qa"), s.name = n("pe"), s.children = n("R"), s.Yd = function(t) {
            return this.cb[t]
        }, s.da = function(t) {
            return this.eb[t]
        }, s.aa = function(e, n) {
            var i, o;
            return "string" == typeof e ? (o = e, n = n || {}, i = n.componentClass || t.va(o), n.name = o, i = new window.videojs[i](this.d || this, n)) : i = e, this.R.push(i), "function" == typeof i.id && (this.cb[i.id()] = i), (o = o || i.name && i.name()) && (this.eb[o] = i), "function" == typeof i.el && i.el() && this.wa().appendChild(i.el()), i
        }, s.removeChild = function(t) {
            if ("string" == typeof t && (t = this.da(t)), t && this.R) {
                for (var e = l, n = this.R.length - 1; n >= 0; n--)
                    if (this.R[n] === t) {
                        e = f, this.R.splice(n, 1);
                        break
                    }
                e && (this.cb[t.id()] = j, this.eb[t.name()] = j, (e = t.m()) && e.parentNode === this.wa() && this.wa().removeChild(t.m()))
            }
        }, s.Kc = function() {
            var e, n, i, o, r, s;
            if (e = this, n = e.options(), i = n.children)
                if (s = function(t, i) {
                        n[t] !== b && (i = n[t]), i !== l && (e[t] = e.aa(t, i))
                    }, t.i.isArray(i))
                    for (var a = 0; a < i.length; a++) o = i[a], "string" == typeof o ? (r = o, o = {}) : r = o.name, s(r, o);
                else t.i.ca(i, s)
        }, s.T = p(""), s.b = function(e, n, i) {
            var o, r, s;
            return "string" == typeof e || t.i.isArray(e) ? t.b(this.c, e, t.bind(this, n)) : (o = t.bind(this, i), s = this, r = function() {
                s.n(e, n, o)
            }, r.s = o.s, this.b("dispose", r), i = function() {
                s.n("dispose", r)
            }, i.s = o.s, e.nodeName ? (t.b(e, n, o), t.b(e, "dispose", i)) : "function" == typeof e.b && (e.b(n, o), e.b("dispose", i))), this
        }, s.n = function(e, n, i) {
            return !e || "string" == typeof e || t.i.isArray(e) ? t.n(this.c, e, n) : (i = t.bind(this, i), this.n("dispose", i), e.nodeName ? (t.n(e, n, i), t.n(e, "dispose", i)) : (e.n(n, i), e.n("dispose", i))), this
        }, s.N = function(e, n, i) {
            var o, r, s;
            return "string" == typeof e || t.i.isArray(e) ? t.N(this.c, e, t.bind(this, n)) : (o = t.bind(this, i), r = this, s = function() {
                r.n(e, n, s), o.apply(this, arguments)
            }, s.s = o.s, this.b(e, n, s)), this
        }, s.o = function(e) {
            return t.o(this.c, e), this
        }, s.I = function(t) {
            return t && (this.ya ? t.call(this) : (this.mb === b && (this.mb = []), this.mb.push(t))), this
        }, s.Va = function() {
            this.ya = f;
            var t = this.mb;
            if (this.mb = [], t && 0 < t.length) {
                for (var e = 0, n = t.length; n > e; e++) t[e].call(this);
                this.o("ready")
            }
        }, s.Pa = function(e) {
            return t.Pa(this.c, e)
        }, s.p = function(e) {
            return t.p(this.c, e), this
        }, s.r = function(e) {
            return t.r(this.c, e), this
        }, s.show = function() {
            return this.r("vjs-hidden"), this
        }, s.W = function() {
            return this.p("vjs-hidden"), this
        }, s.width = function(t, e) {
            return ca(this, "width", t, e)
        }, s.height = function(t, e) {
            return ca(this, "height", t, e)
        }, s.Qd = function(t, e) {
            return this.width(t, f).height(e)
        }, s.setTimeout = function(e, n) {
            function i() {
                this.clearTimeout(o)
            }
            e = t.bind(this, e);
            var o = setTimeout(e, n);
            return i.s = "vjs-timeout-" + o, this.b("dispose", i), o
        }, s.clearTimeout = function(t) {
            function e() {}
            return clearTimeout(t), e.s = "vjs-timeout-" + t, this.n("dispose", e), t
        }, s.setInterval = function(e, n) {
            function i() {
                this.clearInterval(o)
            }
            e = t.bind(this, e);
            var o = setInterval(e, n);
            return i.s = "vjs-interval-" + o, this.b("dispose", i), o
        }, s.clearInterval = function(t) {
            function e() {}
            return clearInterval(t), e.s = "vjs-interval-" + t, this.n("dispose", e), t
        }, t.w = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), da(this), this.b("tap", this.u), this.b("click", this.u), this.b("focus", this.kb), this.b("blur", this.jb)
            }
        }), s = t.w.prototype, s.e = function(e, n) {
            var i;
            return n = t.i.D({
                className: this.T(),
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            }, n), i = t.a.prototype.e.call(this, e, n), n.innerHTML || (this.B = t.e("div", {
                className: "vjs-control-content"
            }), this.Ib = t.e("span", {
                className: "vjs-control-text",
                innerHTML: this.v(this.ta) || "Need Text"
            }), this.B.appendChild(this.Ib), i.appendChild(this.B)), i
        }, s.T = function() {
            return "vjs-control " + t.a.prototype.T.call(this)
        }, s.u = m(), s.kb = function() {
            t.b(document, "keydown", t.bind(this, this.ka))
        }, s.ka = function(t) {
            (32 == t.which || 13 == t.which) && (t.preventDefault(), this.u())
        }, s.jb = function() {
            t.n(document, "keydown", t.bind(this, this.ka))
        }, t.S = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.Hd = this.da(this.q.barName), this.handle = this.da(this.q.handleName), this.b("mousedown", this.lb), this.b("touchstart", this.lb), this.b("focus", this.kb), this.b("blur", this.jb), this.b("click", this.u), this.b(e, "controlsvisible", this.update), this.b(e, this.Uc, this.update)
            }
        }), s = t.S.prototype, s.e = function(e, n) {
            return n = n || {}, n.className += " vjs-slider", n = t.i.D({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, n), t.a.prototype.e.call(this, e, n)
        }, s.lb = function(e) {
            e.preventDefault(), t.Id(), this.p("vjs-sliding"), this.b(document, "mousemove", this.la), this.b(document, "mouseup", this.Ba), this.b(document, "touchmove", this.la), this.b(document, "touchend", this.Ba), this.la(e)
        }, s.la = m(), s.Ba = function() {
            t.Xe(), this.r("vjs-sliding"), this.n(document, "mousemove", this.la), this.n(document, "mouseup", this.Ba), this.n(document, "touchmove", this.la), this.n(document, "touchend", this.Ba), this.update()
        }, s.update = function() {
            if (this.c) {
                var e, n = this.Qb(),
                    i = this.handle,
                    o = this.Hd;
                if (("number" != typeof n || n !== n || 0 > n || 1 / 0 === n) && (n = 0), e = n, i) {
                    e = this.c.offsetWidth;
                    var r = i.m().offsetWidth;
                    e = r ? r / e : 0, n *= 1 - e, e = n + e / 2, i.m().style.left = t.round(100 * n, 2) + "%"
                }
                o && (o.m().style.width = t.round(100 * e, 2) + "%")
            }
        }, s.kb = function() {
            this.b(document, "keydown", this.ka)
        }, s.ka = function(t) {
            37 == t.which || 40 == t.which ? (t.preventDefault(), this.fd()) : (38 == t.which || 39 == t.which) && (t.preventDefault(), this.gd())
        }, s.jb = function() {
            this.n(document, "keydown", this.ka)
        }, s.u = function(t) {
            t.stopImmediatePropagation(), t.preventDefault()
        }, t.ga = t.a.extend(), t.ga.prototype.defaultValue = 0, t.ga.prototype.e = function(e, n) {
            return n = n || {}, n.className += " vjs-slider-handle", n = t.i.D({
                innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
            }, n), t.a.prototype.e.call(this, "div", n)
        }, t.qa = t.a.extend(), t.qa.prototype.e = function() {
            var e = this.options().zc || "ul";
            return this.B = t.e(e, {
                className: "vjs-menu-content"
            }), e = t.a.prototype.e.call(this, "div", {
                append: this.B,
                className: "vjs-menu"
            }), e.appendChild(this.B), t.b(e, "click", function(t) {
                t.preventDefault(), t.stopImmediatePropagation()
            }), e
        }, t.M = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n), this.selected(n.selected)
            }
        }), t.M.prototype.e = function(e, n) {
            return t.w.prototype.e.call(this, "li", t.i.D({
                className: "vjs-menu-item",
                innerHTML: this.v(this.q.label)
            }, n))
        }, t.M.prototype.u = function() {
            this.selected(f)
        }, t.M.prototype.selected = function(t) {
            t ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
        }, t.O = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n), this.update(), this.b("keydown", this.ka), this.c.setAttribute("aria-haspopup", f), this.c.setAttribute("role", "button")
            }
        }), s = t.O.prototype, s.update = function() {
            var t = this.La();
            this.za && this.removeChild(this.za), this.za = t, this.aa(t), this.H && 0 === this.H.length ? this.W() : this.H && 1 < this.H.length && this.show()
        }, s.Ja = l, s.La = function() {
            var e = new t.qa(this.d);
            if (this.options().title && e.wa().appendChild(t.e("li", {
                    className: "vjs-menu-title",
                    innerHTML: t.va(this.options().title),
                    Se: -1
                })), this.H = this.createItems())
                for (var n = 0; n < this.H.length; n++) fa(e, this.H[n]);
            return e
        }, s.Ka = m(), s.T = function() {
            return this.className + " vjs-menu-button " + t.w.prototype.T.call(this)
        }, s.kb = m(), s.jb = m(), s.u = function() {
            this.N("mouseout", t.bind(this, function() {
                G(this.za), this.c.blur()
            })), this.Ja ? H(this) : ga(this)
        }, s.ka = function(t) {
            32 == t.which || 13 == t.which ? (this.Ja ? H(this) : ga(this), t.preventDefault()) : 27 == t.which && (this.Ja && H(this), t.preventDefault())
        }, t.J = function(e) {
            "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.i.D(this, e), this.message || (this.message = t.J.Pd[this.code] || "")
        }, t.J.prototype.code = 0, t.J.prototype.message = "", t.J.prototype.status = j, t.J.gb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "), t.J.Pd = {
            1: "You aborted the video playback",
            2: "A network error caused the video download to fail part-way.",
            3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
            4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
            5: "The video is encrypted and we do not have the keys to decrypt it."
        };
        for (var I = 0; I < t.J.gb.length; I++) t.J[t.J.gb[I]] = I,
            t.J.prototype[t.J.gb[I]] = I;
        var J, ha, K, L;
        for (J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], ha = J[0], L = 0; L < J.length; L++)
            if (J[L][1] in document) {
                K = J[L];
                break
            }
        if (K)
            for (t.bb.Pb = {}, L = 0; L < K.length; L++) t.bb.Pb[ha[L]] = K[L];
        t.Player = t.a.extend({
            l: function(e, n, i) {
                this.L = e, e.id = e.id || "vjs_video_" + t.s++, this.Te = e && t.Oa(e), n = t.i.D(ia(e), n), this.Pc = n.language || t.options.language, this.je = n.languages || t.options.languages, this.K = {}, this.Vc = n.poster || "", this.Jb = !!n.controls, e.controls = l, n.$c = l, ja(this, "audio" === this.L.nodeName.toLowerCase()), t.a.call(this, this, n, i), this.p(this.controls() ? "vjs-controls-enabled" : "vjs-controls-disabled"), ja(this) && this.p("vjs-audio"), t.Ca[this.Qa] = this, n.plugins && t.i.ca(n.plugins, function(t, e) {
                    this[t](e)
                }, this);
                var o, r, s, a, c;
                o = t.bind(this, this.reportUserActivity), this.b("mousedown", function() {
                    o(), this.clearInterval(r), r = this.setInterval(o, 250)
                }), this.b("mousemove", function(t) {
                    (t.screenX != a || t.screenY != c) && (a = t.screenX, c = t.screenY, o())
                }), this.b("mouseup", function() {
                    o(), this.clearInterval(r)
                }), this.b("keydown", o), this.b("keyup", o), this.setInterval(function() {
                    if (this.Fa) {
                        this.Fa = l, this.userActive(f), this.clearTimeout(s);
                        var t = this.options().inactivityTimeout;
                        t > 0 && (s = this.setTimeout(function() {
                            this.Fa || this.userActive(l)
                        }, t))
                    }
                }, 250)
            }
        }), s = t.Player.prototype, s.language = function(t) {
            return t === b ? this.Pc : (this.Pc = t, this)
        }, s.languages = n("je"), s.q = t.options, s.dispose = function() {
            this.o("dispose"), this.n("dispose"), t.Ca[this.Qa] = j, this.L && this.L.player && (this.L.player = j), this.c && this.c.player && (this.c.player = j), this.h && this.h.dispose(), t.a.prototype.dispose.call(this)
        }, s.e = function() {
            var e, n = this.c = t.a.prototype.e.call(this, "div"),
                i = this.L;
            return i.removeAttribute("width"), i.removeAttribute("height"), e = t.Oa(i), t.i.ca(e, function(t) {
                "class" == t ? n.className = e[t] : n.setAttribute(t, e[t])
            }), i.id += "_html5_api", i.className = "vjs-tech", i.player = n.player = this, this.p("vjs-paused"), this.width(this.q.width, f), this.height(this.q.height, f), i.ce = i.networkState, i.parentNode && i.parentNode.insertBefore(n, i), t.Rb(i, n), this.c = n, this.b("loadstart", this.te), this.b("waiting", this.ze), this.b(["canplay", "canplaythrough", "playing", "ended"], this.ye), this.b("seeking", this.we), this.b("seeked", this.ve), this.b("ended", this.qe), this.b("play", this.Xb), this.b("firstplay", this.re), this.b("pause", this.Wb), this.b("progress", this.ue), this.b("durationchange", this.Sc), this.b("fullscreenchange", this.se), n
        }, s.te = function() {
            this.r("vjs-ended"), this.error(j), this.paused() ? la(this, l) : this.o("firstplay")
        }, s.Jc = l, s.Xb = function() {
            this.r("vjs-ended"), this.r("vjs-paused"), this.p("vjs-playing"), la(this, f)
        }, s.ze = function() {
            this.p("vjs-waiting")
        }, s.ye = function() {
            this.r("vjs-waiting")
        }, s.we = function() {
            this.p("vjs-seeking")
        }, s.ve = function() {
            this.r("vjs-seeking")
        }, s.re = function() {
            this.q.starttime && this.currentTime(this.q.starttime), this.p("vjs-has-started")
        }, s.Wb = function() {
            this.r("vjs-playing"), this.p("vjs-paused")
        }, s.ue = function() {
            1 == this.bufferedPercent() && this.o("loadedalldata")
        }, s.qe = function() {
            this.p("vjs-ended"), this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
        }, s.Sc = function() {
            var t = M(this, "duration");
            t && (0 > t && (t = 1 / 0), this.duration(t), 1 / 0 === t ? this.p("vjs-live") : this.r("vjs-live"))
        }, s.se = function() {
            this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
        }, s.play = function() {
            return N(this, "play"), this
        }, s.pause = function() {
            return N(this, "pause"), this
        }, s.paused = function() {
            return M(this, "paused") === l ? l : f
        }, s.currentTime = function(t) {
            return t !== b ? (N(this, "setCurrentTime", t), this) : this.K.currentTime = M(this, "currentTime") || 0
        }, s.duration = function(t) {
            return t !== b ? (this.K.duration = parseFloat(t), this) : (this.K.duration === b && this.Sc(), this.K.duration || 0)
        }, s.remainingTime = function() {
            return this.duration() - this.currentTime()
        }, s.buffered = function() {
            var e = M(this, "buffered");
            return e && e.length || (e = t.xa(0, 0)), e
        }, s.bufferedPercent = function() {
            var t, e, n = this.duration(),
                i = this.buffered(),
                o = 0;
            if (!n) return 0;
            for (var r = 0; r < i.length; r++) t = i.start(r), e = i.end(r), e > n && (e = n), o += e - t;
            return o / n
        }, s.volume = function(e) {
            return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))), this.K.volume = e, N(this, "setVolume", e), t.Ie(e), this) : (e = parseFloat(M(this, "volume")), isNaN(e) ? 1 : e)
        }, s.muted = function(t) {
            return t !== b ? (N(this, "setMuted", t), this) : M(this, "muted") || l
        }, s.Sa = function() {
            return M(this, "supportsFullScreen") || l
        }, s.Mc = l, s.isFullscreen = function(t) {
            return t !== b ? (this.Mc = !!t, this) : this.Mc
        }, s.isFullScreen = function(e) {
            return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
        }, s.requestFullscreen = function() {
            var e = t.bb.Pb;
            return this.isFullscreen(f), e ? (t.b(document, e.fullscreenchange, t.bind(this, function(n) {
                this.isFullscreen(document[e.fullscreenElement]), this.isFullscreen() === l && t.n(document, e.fullscreenchange, arguments.callee), this.o("fullscreenchange")
            })), this.c[e.requestFullscreen]()) : this.h.Sa() ? N(this, "enterFullScreen") : (this.Fc(), this.o("fullscreenchange")), this
        }, s.requestFullScreen = function() {
            return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
        }, s.exitFullscreen = function() {
            var e = t.bb.Pb;
            return this.isFullscreen(l), e ? document[e.exitFullscreen]() : this.h.Sa() ? N(this, "exitFullScreen") : (this.Lb(), this.o("fullscreenchange")), this
        }, s.cancelFullScreen = function() {
            return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
        }, s.Fc = function() {
            this.fe = f, this.Rd = document.documentElement.style.overflow, t.b(document, "keydown", t.bind(this, this.Gc)), document.documentElement.style.overflow = "hidden", t.p(document.body, "vjs-full-window"), this.o("enterFullWindow")
        }, s.Gc = function(t) {
            27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Lb())
        }, s.Lb = function() {
            this.fe = l, t.n(document, "keydown", this.Gc), document.documentElement.style.overflow = this.Rd, t.r(document.body, "vjs-full-window"), this.o("exitFullWindow")
        }, s.selectSource = function(e) {
            for (var n = 0, i = this.q.techOrder; n < i.length; n++) {
                var o = t.va(i[n]),
                    r = window.videojs[o];
                if (r) {
                    if (r.isSupported())
                        for (var s = 0, a = e; s < a.length; s++) {
                            var c = a[s];
                            if (r.canPlaySource(c)) return {
                                source: c,
                                h: o
                            }
                        }
                } else t.log.error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return l
        }, s.src = function(e) {
            return e === b ? M(this, "src") : (t.i.isArray(e) ? ma(this, e) : "string" == typeof e ? this.src({
                src: e
            }) : e instanceof Object && (e.type && !window.videojs[this.Ta].canPlaySource(e) ? ma(this, [e]) : (this.K.src = e.src, this.Cc = e.type || "", this.I(function() {
                window.videojs[this.Ta].prototype.hasOwnProperty("setSource") ? N(this, "setSource", e) : N(this, "src", e.src), "auto" == this.q.preload && this.load(), this.q.autoplay && this.play()
            }))), this)
        }, s.load = function() {
            return N(this, "load"), this
        }, s.currentSrc = function() {
            return M(this, "currentSrc") || this.K.src || ""
        }, s.Nd = function() {
            return this.Cc || ""
        }, s.Ra = function(t) {
            return t !== b ? (N(this, "setPreload", t), this.q.preload = t, this) : M(this, "preload")
        }, s.autoplay = function(t) {
            return t !== b ? (N(this, "setAutoplay", t), this.q.autoplay = t, this) : M(this, "autoplay")
        }, s.loop = function(t) {
            return t !== b ? (N(this, "setLoop", t), this.q.loop = t, this) : M(this, "loop")
        }, s.poster = function(t) {
            return t === b ? this.Vc : (t || (t = ""), this.Vc = t, N(this, "setPoster", t), this.o("posterchange"), this)
        }, s.controls = function(t) {
            return t !== b ? (t = !!t, this.Jb !== t && ((this.Jb = t) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Jb
        }, t.Player.prototype.bc, s = t.Player.prototype, s.usingNativeControls = function(t) {
            return t !== b ? (t = !!t, this.bc !== t && ((this.bc = t) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.bc
        }, s.ja = j, s.error = function(e) {
            return e === b ? this.ja : e === j ? (this.ja = e, this.r("vjs-error"), this) : (this.ja = e instanceof t.J ? e : new t.J(e), this.o("error"), this.p("vjs-error"), t.log.error("(CODE:" + this.ja.code + " " + t.J.gb[this.ja.code] + ")", this.ja.message, this.ja), this)
        }, s.ended = function() {
            return M(this, "ended")
        }, s.seeking = function() {
            return M(this, "seeking")
        }, s.seekable = function() {
            return M(this, "seekable")
        }, s.Fa = f, s.reportUserActivity = function() {
            this.Fa = f
        }, s.ac = f, s.userActive = function(t) {
            return t !== b ? (t = !!t, t !== this.ac && ((this.ac = t) ? (this.Fa = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Fa = l, this.h && this.h.N("mousemove", function(t) {
                t.stopPropagation(), t.preventDefault()
            }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.ac
        }, s.playbackRate = function(t) {
            return t !== b ? (N(this, "setPlaybackRate", t), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
        }, s.Lc = l, s.networkState = function() {
            return M(this, "networkState")
        }, s.readyState = function() {
            return M(this, "readyState")
        }, s.textTracks = function() {
            return this.h && this.h.textTracks()
        }, s.X = function() {
            return this.h && this.h.remoteTextTracks()
        }, s.addTextTrack = function(t, e, n) {
            return this.h && this.h.addTextTrack(t, e, n)
        }, s.ha = function(t) {
            return this.h && this.h.addRemoteTextTrack(t)
        }, s.Da = function(t) {
            this.h && this.h.removeRemoteTextTrack(t)
        }, t.tb = t.a.extend(), t.tb.prototype.q = {
            sf: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                liveDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {},
                playbackRateMenuButton: {},
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            }
        }, t.tb.prototype.e = function() {
            return t.e("div", {
                className: "vjs-control-bar"
            })
        }, t.hc = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.hc.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-live-controls vjs-control"
            });
            return this.B = t.e("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
                "aria-live": "off"
            }), e.appendChild(this.B), e
        }, t.kc = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n), this.b(e, "play", this.Xb), this.b(e, "pause", this.Wb)
            }
        }), s = t.kc.prototype, s.ta = "Play", s.T = function() {
            return "vjs-play-control " + t.w.prototype.T.call(this)
        }, s.u = function() {
            this.d.paused() ? this.d.play() : this.d.pause()
        }, s.Xb = function() {
            this.r("vjs-paused"), this.p("vjs-playing"), this.c.children[0].children[0].innerHTML = this.v("Pause")
        }, s.Wb = function() {
            this.r("vjs-playing"), this.p("vjs-paused"), this.c.children[0].children[0].innerHTML = this.v("Play")
        }, t.ub = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.b(e, "timeupdate", this.fa)
            }
        }), t.ub.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            return this.B = t.e("div", {
                className: "vjs-current-time-display",
                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                "aria-live": "off"
            }), e.appendChild(this.B), e
        }, t.ub.prototype.fa = function() {
            var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Na(e, this.d.duration())
        }, t.vb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.b(e, "timeupdate", this.fa), this.b(e, "loadedmetadata", this.fa)
            }
        }), t.vb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            return this.B = t.e("div", {
                className: "vjs-duration-display",
                innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
                "aria-live": "off"
            }), e.appendChild(this.B), e
        }, t.vb.prototype.fa = function() {
            var e = this.d.duration();
            e && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Na(e))
        }, t.qc = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.qc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, t.Cb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.b(e, "timeupdate", this.fa)
            }
        }), t.Cb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            return this.B = t.e("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
                "aria-live": "off"
            }), e.appendChild(this.B), e
        }, t.Cb.prototype.fa = function() {
            this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Na(this.d.remainingTime()))
        }, t.Ya = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n)
            }
        }), t.Ya.prototype.ta = "Fullscreen", t.Ya.prototype.T = function() {
            return "vjs-fullscreen-control " + t.w.prototype.T.call(this)
        }, t.Ya.prototype.u = function() {
            this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Ib.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Ib.innerHTML = this.v("Non-Fullscreen"))
        }, t.Bb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.Bb.prototype.q = {
            children: {
                seekBar: {}
            }
        }, t.Bb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, t.nc = t.S.extend({
            l: function(e, n) {
                t.S.call(this, e, n), this.b(e, "timeupdate", this.Ea), e.I(t.bind(this, this.Ea))
            }
        }), s = t.nc.prototype, s.q = {
            children: {
                loadProgressBar: {},
                playProgressBar: {},
                seekHandle: {}
            },
            barName: "playProgressBar",
            handleName: "seekHandle"
        }, s.Uc = "timeupdate", s.e = function() {
            return t.S.prototype.e.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        }, s.Ea = function() {
            var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.c.setAttribute("aria-valuenow", t.round(100 * this.Qb(), 2)), this.c.setAttribute("aria-valuetext", t.Na(e, this.d.duration()))
        }, s.Qb = function() {
            return this.d.currentTime() / this.d.duration()
        }, s.lb = function(e) {
            t.S.prototype.lb.call(this, e), this.d.nb = f, this.d.p("vjs-scrubbing"), this.$e = !this.d.paused(), this.d.pause()
        }, s.la = function(t) {
            t = ea(this, t) * this.d.duration(), t == this.d.duration() && (t -= .1), this.d.currentTime(t)
        }, s.Ba = function(e) {
            t.S.prototype.Ba.call(this, e), this.d.nb = l, this.d.r("vjs-scrubbing"), this.$e && this.d.play()
        }, s.gd = function() {
            this.d.currentTime(this.d.currentTime() + 5)
        }, s.fd = function() {
            this.d.currentTime(this.d.currentTime() - 5)
        }, t.yb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.b(e, "progress", this.update)
            }
        }), t.yb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
            })
        }, t.yb.prototype.update = function() {
            var e, n, i, o, r = this.d.buffered();
            e = this.d.duration();
            var s, a = this.d;
            for (s = a.buffered(), a = a.duration(), s = s.end(s.length - 1), s > a && (s = a), a = this.c.children, this.c.style.width = 100 * (s / e || 0) + "%", e = 0; e < r.length; e++) n = r.start(e), i = r.end(e), (o = a[e]) || (o = this.c.appendChild(t.e())), o.style.left = 100 * (n / s || 0) + "%", o.style.width = 100 * ((i - n) / s || 0) + "%";
            for (e = a.length; e > r.length; e--) this.c.removeChild(a[e - 1])
        }, t.jc = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.jc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
            })
        }, t.Za = t.ga.extend({
            l: function(e, n) {
                t.ga.call(this, e, n), this.b(e, "timeupdate", this.fa)
            }
        }), t.Za.prototype.defaultValue = "00:00", t.Za.prototype.e = function() {
            return t.ga.prototype.e.call(this, "div", {
                className: "vjs-seek-handle",
                "aria-live": "off"
            })
        }, t.Za.prototype.fa = function() {
            var e = this.d.nb ? this.d.K.currentTime : this.d.currentTime();
            this.c.innerHTML = '<span class="vjs-control-text">' + t.Na(e, this.d.duration()) + "</span>"
        }, t.Fb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                    e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        }), t.Fb.prototype.q = {
            children: {
                volumeBar: {}
            }
        }, t.Fb.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-volume-control vjs-control"
            })
        }, t.Eb = t.S.extend({
            l: function(e, n) {
                t.S.call(this, e, n), this.b(e, "volumechange", this.Ea), e.I(t.bind(this, this.Ea))
            }
        }), s = t.Eb.prototype, s.Ea = function() {
            this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)), this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
        }, s.q = {
            children: {
                volumeLevel: {},
                volumeHandle: {}
            },
            barName: "volumeLevel",
            handleName: "volumeHandle"
        }, s.Uc = "volumechange", s.e = function() {
            return t.S.prototype.e.call(this, "div", {
                className: "vjs-volume-bar",
                "aria-label": "volume level"
            })
        }, s.la = function(t) {
            this.d.muted() && this.d.muted(l), this.d.volume(ea(this, t))
        }, s.Qb = function() {
            return this.d.muted() ? 0 : this.d.volume()
        }, s.gd = function() {
            this.d.volume(this.d.volume() + .1)
        }, s.fd = function() {
            this.d.volume(this.d.volume() - .1)
        }, t.rc = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.rc.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, t.Gb = t.ga.extend(), t.Gb.prototype.defaultValue = "00:00", t.Gb.prototype.e = function() {
            return t.ga.prototype.e.call(this, "div", {
                className: "vjs-volume-handle"
            })
        }, t.ra = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n), this.b(e, "volumechange", this.update), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                    e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                })
            }
        }), t.ra.prototype.e = function() {
            return t.w.prototype.e.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
            })
        }, t.ra.prototype.u = function() {
            this.d.muted(this.d.muted() ? l : f)
        }, t.ra.prototype.update = function() {
            var e = this.d.volume(),
                n = 3;
            for (0 === e || this.d.muted() ? n = 0 : .33 > e ? n = 1 : .67 > e && (n = 2), this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute")), e = 0; 4 > e; e++) t.r(this.c, "vjs-vol-" + e);
            t.p(this.c, "vjs-vol-" + n)
        }, t.Ha = t.O.extend({
            l: function(e, n) {
                t.O.call(this, e, n), this.b(e, "volumechange", this.af), e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"), this.b(e, "loadstart", function() {
                    e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
                }), this.p("vjs-menu-button")
            }
        }), t.Ha.prototype.La = function() {
            var e = new t.qa(this.d, {
                    zc: "div"
                }),
                n = new t.Eb(this.d, this.q.volumeBar);
            return n.b("focus", function() {
                e.p("vjs-lock-showing")
            }), n.b("blur", function() {
                G(e)
            }), e.aa(n), e
        }, t.Ha.prototype.u = function() {
            t.ra.prototype.u.call(this), t.O.prototype.u.call(this)
        }, t.Ha.prototype.e = function() {
            return t.w.prototype.e.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
            })
        }, t.Ha.prototype.af = t.ra.prototype.update, t.lc = t.O.extend({
            l: function(e, n) {
                t.O.call(this, e, n), this.pd(), this.od(), this.b(e, "loadstart", this.pd), this.b(e, "ratechange", this.od)
            }
        }), s = t.lc.prototype, s.ta = "Playback Rate", s.className = "vjs-playback-rate", s.e = function() {
            var e = t.O.prototype.e.call(this);
            return this.Oc = t.e("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1
            }), e.appendChild(this.Oc), e
        }, s.La = function() {
            var e = new t.qa(this.k()),
                n = this.k().options().playbackRates;
            if (n)
                for (var i = n.length - 1; i >= 0; i--) e.aa(new t.Ab(this.k(), {
                    rate: n[i] + "x"
                }));
            return e
        }, s.Ea = function() {
            this.m().setAttribute("aria-valuenow", this.k().playbackRate())
        }, s.u = function() {
            for (var t = this.k().playbackRate(), e = this.k().options().playbackRates, n = e[0], i = 0; i < e.length; i++)
                if (e[i] > t) {
                    n = e[i];
                    break
                }
            this.k().playbackRate(n)
        }, s.pd = function() {
            na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
        }, s.od = function() {
            na(this) && (this.Oc.innerHTML = this.k().playbackRate() + "x")
        }, t.Ab = t.M.extend({
            zc: "button",
            l: function(e, n) {
                var i = this.label = n.rate,
                    o = this.Wc = parseFloat(i, 10);
                n.label = i, n.selected = 1 === o, t.M.call(this, e, n), this.b(e, "ratechange", this.update)
            }
        }), t.Ab.prototype.u = function() {
            t.M.prototype.u.call(this), this.k().playbackRate(this.Wc)
        }, t.Ab.prototype.update = function() {
            this.selected(this.k().playbackRate() == this.Wc)
        }, t.mc = t.w.extend({
            l: function(e, n) {
                t.w.call(this, e, n), this.update(), e.b("posterchange", t.bind(this, this.update))
            }
        }), s = t.mc.prototype, s.dispose = function() {
            this.k().n("posterchange", this.update), t.w.prototype.dispose.call(this)
        }, s.e = function() {
            var e = t.e("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return t.td || (this.Mb = t.e("img"), e.appendChild(this.Mb)), e
        }, s.update = function() {
            var t = this.k().poster();
            this.na(t), t ? this.show() : this.W()
        }, s.na = function(t) {
            var e;
            this.Mb ? this.Mb.src = t : (e = "", t && (e = 'url("' + t + '")'), this.c.style.backgroundImage = e)
        }, s.u = function() {
            this.d.play()
        }, t.ic = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n)
            }
        }), t.ic.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-loading-spinner"
            })
        }, t.rb = t.w.extend(), t.rb.prototype.e = function() {
            return t.w.prototype.e.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: '<span aria-hidden="true"></span>',
                "aria-label": "play video"
            })
        }, t.rb.prototype.u = function() {
            this.d.play()
        }, t.wb = t.a.extend({
            l: function(e, n) {
                t.a.call(this, e, n), this.update(), this.b(e, "error", this.update)
            }
        }), t.wb.prototype.e = function() {
            var e = t.a.prototype.e.call(this, "div", {
                className: "vjs-error-display"
            });
            return this.B = t.e("div"), e.appendChild(this.B), e
        }, t.wb.prototype.update = function() {
            this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
        };
        var O;
        t.j = t.a.extend({
            l: function(e, n, i) {
                n = n || {}, n.$c = l, t.a.call(this, e, n, i), this.featuresProgressEvents || this.ne(), this.featuresTimeupdateEvents || this.oe(), this.be(), this.featuresNativeTextTracks || this.Sd(), this.de()
            }
        }), s = t.j.prototype, s.be = function() {
            var t, e;
            t = this.k(), e = function() {
                t.controls() && !t.usingNativeControls() && this.Fd()
            }, this.I(e), this.b(t, "controlsenabled", e), this.b(t, "controlsdisabled", this.De), this.I(function() {
                this.networkState && 0 < this.networkState() && this.k().o("loadstart")
            })
        }, s.Fd = function() {
            var t;
            this.b("mousedown", this.u), this.b("touchstart", function() {
                t = this.d.userActive()
            }), this.b("touchmove", function() {
                t && this.k().reportUserActivity()
            }), this.b("touchend", function(t) {
                t.preventDefault()
            }), da(this), this.b("tap", this.xe)
        }, s.De = function() {
            this.n("tap"), this.n("touchstart"), this.n("touchmove"), this.n("touchleave"), this.n("touchcancel"), this.n("touchend"), this.n("click"), this.n("mousedown")
        }, s.u = function(t) {
            0 === t.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
        }, s.xe = function() {
            this.k().userActive(!this.k().userActive())
        }, s.ne = function() {
            this.Qc = f, this.We()
        }, s.me = function() {
            this.Qc = l, this.hd()
        }, s.We = function() {
            this.Ce = this.setInterval(function() {
                var t = this.k().bufferedPercent();
                this.Jd != t && this.k().o("progress"), this.Jd = t, 1 === t && this.hd()
            }, 500)
        }, s.hd = function() {
            this.clearInterval(this.Ce)
        }, s.oe = function() {
            var t = this.d;
            this.Vb = f, this.b(t, "play", this.md), this.b(t, "pause", this.qb), this.N("timeupdate", function() {
                this.featuresTimeupdateEvents = f, this.Rc()
            })
        }, s.Rc = function() {
            var t = this.d;
            this.Vb = l, this.qb(), this.n(t, "play", this.md), this.n(t, "pause", this.qb)
        }, s.md = function() {
            this.Bc && this.qb(), this.Bc = this.setInterval(function() {
                this.k().o("timeupdate")
            }, 250)
        }, s.qb = function() {
            this.clearInterval(this.Bc), this.k().o("timeupdate")
        }, s.dispose = function() {
            this.Qc && this.me(), this.Vb && this.Rc(), t.a.prototype.dispose.call(this)
        }, s.Zb = function() {
            this.Vb && this.k().o("timeupdate")
        }, s.de = function() {
            function e() {
                var t = i.da("textTrackDisplay");
                t && t.C()
            }
            var n, i = this.d;
            (n = this.textTracks()) && (n.addEventListener("removetrack", e), n.addEventListener("addtrack", e), this.b("dispose", t.bind(this, function() {
                n.removeEventListener("removetrack", e), n.removeEventListener("addtrack", e)
            })))
        }, s.Sd = function() {
            var e, n, i, o = this.d;
            window.WebVTT || (i = document.createElement("script"), i.src = o.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", o.m().appendChild(i), window.WebVTT = f), (n = this.textTracks()) && (e = function() {
                var e, n, i;
                for (i = o.da("textTrackDisplay"), i.C(), e = 0; e < this.length; e++) n = this[e], n.removeEventListener("cuechange", t.bind(i, i.C)), "showing" === n.mode && n.addEventListener("cuechange", t.bind(i, i.C))
            }, n.addEventListener("change", e), this.b("dispose", t.bind(this, function() {
                n.removeEventListener("change", e)
            })))
        }, s.textTracks = function() {
            return this.d.ld = this.d.ld || new t.F, this.d.ld
        }, s.X = function() {
            return this.d.Xc = this.d.Xc || new t.F, this.d.Xc
        }, O = function(e, n, i, o, r) {
            var s = e.textTracks();
            return r = r || {}, r.kind = n, i && (r.label = i), o && (r.language = o), r.player = e.d, e = new t.t(r), P(s, e), e
        }, t.j.prototype.addTextTrack = function(t, e, n) {
            if (!t) throw Error("TextTrack kind is required but was not provided");
            return O(this, t, e, n)
        }, t.j.prototype.ha = function(t) {
            return t = O(this, t.kind, t.label, t.language, t), P(this.X(), t), {
                Y: t
            }
        }, t.j.prototype.Da = function(t) {
            Q(this.textTracks(), t), Q(this.X(), t)
        }, t.j.prototype.bd = m(), t.j.prototype.featuresVolumeControl = f, t.j.prototype.featuresFullscreenResize = l, t.j.prototype.featuresPlaybackRate = l, t.j.prototype.featuresProgressEvents = l, t.j.prototype.featuresTimeupdateEvents = l, t.j.prototype.featuresNativeTextTracks = l, t.j.dc = function(e) {
            e.registerSourceHandler = function(t, n) {
                var i = e.cd;
                i || (i = e.cd = []), n === b && (n = i.length), i.splice(n, 0, t)
            }, e.ob = function(t) {
                for (var n, i = e.cd || [], o = 0; o < i.length; o++)
                    if (n = i[o].canHandleSource(t)) return i[o];
                return j
            }, e.wc = function(t) {
                var n = e.ob(t);
                return n ? n.canHandleSource(t) : ""
            }, e.prototype.ma = function(n) {
                var i = e.ob(n);
                return i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : t.log.error("No source hander found for the current source.")), this.ia(), this.n("dispose", this.ia), this.fb = n, this.$b = i.handleSource(n, this), this.b("dispose", this.ia), this
            }, e.prototype.ia = function() {
                this.$b && this.$b.dispose && this.$b.dispose()
            }
        }, t.media = {}, t.f = t.j.extend({
            l: function(e, n, i) {
                var o, r, s;
                for ((n.nativeCaptions === l || n.nativeTextTracks === l) && (this.featuresNativeTextTracks = l), t.j.call(this, e, n, i), i = t.f.xb.length - 1; i >= 0; i--) this.b(t.f.xb[i], this.Td);
                if ((n = n.source) && (this.c.currentSrc !== n.src || e.L && 3 === e.L.ce) && this.ma(n), this.c.hasChildNodes()) {
                    for (i = this.c.childNodes, o = i.length, n = []; o--;) r = i[o], s = r.nodeName.toLowerCase(), "track" === s && (this.featuresNativeTextTracks ? P(this.X(), r.track) : n.push(r));
                    for (i = 0; i < n.length; i++) this.c.removeChild(n[i])
                }
                if (t.Db && e.options().nativeControlsForTouch === f) {
                    var a, c, u, d;
                    a = this, c = this.k(), n = c.controls(), a.c.controls = !!n, u = function() {
                        a.c.controls = f
                    }, d = function() {
                        a.c.controls = l
                    }, c.b("controlsenabled", u), c.b("controlsdisabled", d), n = function() {
                        c.n("controlsenabled", u), c.n("controlsdisabled", d)
                    }, a.b("dispose", n), c.b("usingcustomcontrols", n), c.usingNativeControls(f)
                }
                e.I(function() {
                    this.src() && this.L && this.q.autoplay && this.paused() && (delete this.L.poster, this.play())
                }), this.Va()
            }
        }), s = t.f.prototype, s.dispose = function() {
            t.f.Kb(this.c), t.j.prototype.dispose.call(this)
        }, s.e = function() {
            var e, n, i, o = this.d,
                r = o.L;
            if (!r || this.movingMediaElementInDOM === l) {
                if (r ? (i = r.cloneNode(l), t.f.Kb(r), r = i, o.L = j) : (r = t.e("video"), i = videojs.Z.Aa({}, o.Te), (!t.Db || o.options().nativeControlsForTouch !== f) && delete i.controls, t.ad(r, t.i.D(i, {
                        id: o.id() + "_html5_api",
                        "class": "vjs-tech"
                    }))), r.player = o, o.q.nd)
                    for (i = 0; i < o.q.nd.length; i++) e = o.q.nd[i], n = document.createElement("track"), n.Tb = e.Tb, n.label = e.label, n.ed = e.ed, n.src = e.src, "default" in e && n.setAttribute("default", "default"), r.appendChild(n);
                t.Rb(r, o.m())
            }
            for (e = ["autoplay", "preload", "loop", "muted"], i = e.length - 1; i >= 0; i--) {
                n = e[i];
                var s = {};
                "undefined" != typeof o.q[n] && (s[n] = o.q[n]), t.ad(r, s)
            }
            return r
        }, s.Td = function(t) {
            "error" == t.type && this.error() ? this.k().error(this.error().code) : (t.bubbles = l, this.k().o(t))
        }, s.play = function() {
            this.c.play()
        }, s.pause = function() {
            this.c.pause()
        }, s.paused = function() {
            return this.c.paused
        }, s.currentTime = function() {
            return this.c.currentTime
        }, s.Zb = function(e) {
            try {
                this.c.currentTime = e
            } catch (n) {
                t.log(n, "Video is not ready. (Video.js)")
            }
        }, s.duration = function() {
            return this.c.duration || 0
        }, s.buffered = function() {
            return this.c.buffered
        }, s.volume = function() {
            return this.c.volume
        }, s.Oe = function(t) {
            this.c.volume = t
        }, s.muted = function() {
            return this.c.muted
        }, s.Ke = function(t) {
            this.c.muted = t
        }, s.width = function() {
            return this.c.offsetWidth
        }, s.height = function() {
            return this.c.offsetHeight
        }, s.Sa = function() {
            return "function" != typeof this.c.webkitEnterFullScreen || !/Android/.test(t.P) && /Chrome|Mac OS X 10.5/.test(t.P) ? l : f
        }, s.Ec = function() {
            var t = this.c;
            "webkitDisplayingFullscreen" in t && this.N("webkitbeginfullscreen", function() {
                this.d.isFullscreen(f), this.N("webkitendfullscreen", function() {
                    this.d.isFullscreen(l), this.d.o("fullscreenchange")
                }), this.d.o("fullscreenchange")
            }), t.paused && t.networkState <= t.ef ? (this.c.play(), this.setTimeout(function() {
                t.pause(), t.webkitEnterFullScreen()
            }, 0)) : t.webkitEnterFullScreen()
        }, s.Ud = function() {
            this.c.webkitExitFullScreen()
        }, s.src = function(t) {
            var e = this.c.src;
            return t === b ? oa(e, this.dd) : void this.na(t)
        }, s.na = function(t) {
            this.c.src = t
        }, s.load = function() {
            this.c.load()
        }, s.currentSrc = function() {
            var t = this.c.currentSrc;
            return this.fb ? oa(t, this.fb.src) : t
        }, s.poster = function() {
            return this.c.poster
        }, s.bd = function(t) {
            this.c.poster = t
        }, s.Ra = function() {
            return this.c.Ra
        }, s.Me = function(t) {
            this.c.Ra = t
        }, s.autoplay = function() {
            return this.c.autoplay
        }, s.He = function(t) {
            this.c.autoplay = t
        }, s.controls = function() {
            return this.c.controls
        }, s.loop = function() {
            return this.c.loop
        }, s.Je = function(t) {
            this.c.loop = t
        }, s.error = function() {
            return this.c.error
        }, s.seeking = function() {
            return this.c.seeking
        }, s.seekable = function() {
            return this.c.seekable
        }, s.ended = function() {
            return this.c.ended
        }, s.playbackRate = function() {
            return this.c.playbackRate
        }, s.Le = function(t) {
            this.c.playbackRate = t
        }, s.networkState = function() {
            return this.c.networkState
        }, s.readyState = function() {
            return this.c.readyState
        }, s.textTracks = function() {
            return this.featuresNativeTextTracks ? this.c.textTracks : t.j.prototype.textTracks.call(this)
        }, s.addTextTrack = function(e, n, i) {
            return this.featuresNativeTextTracks ? this.c.addTextTrack(e, n, i) : t.j.prototype.addTextTrack.call(this, e, n, i)
        }, s.ha = function(e) {
            if (!this.featuresNativeTextTracks) return t.j.prototype.ha.call(this, e);
            var n = document.createElement("track");
            return e = e || {}, e.kind && (n.kind = e.kind), e.label && (n.label = e.label), (e.language || e.srclang) && (n.srclang = e.language || e.srclang), e["default"] && (n["default"] = e["default"]), e.id && (n.id = e.id), e.src && (n.src = e.src), this.m().appendChild(n), P(this.X(), n.Y), n
        }, s.Da = function(e) {
            if (!this.featuresNativeTextTracks) return t.j.prototype.Da.call(this, e);
            var n, i;
            for (Q(this.X(), e), n = this.m().querySelectorAll("track"), i = 0; i < n.length; i++)
                if (n[i] === e || n[i].track === e) {
                    n[i].parentNode.removeChild(n[i]);
                    break
                }
        }, t.f.isSupported = function() {
            try {
                t.A.volume = .5
            } catch (e) {
                return l
            }
            return !!t.A.canPlayType
        }, t.j.dc(t.f);
        var pa = t.f.prototype.ma,
            qa = t.f.prototype.ia;
        t.f.prototype.ma = function(t) {
                var e = pa.call(this, t);
                return this.dd = t.src, e
            }, t.f.prototype.ia = function() {
                return this.dd = b, qa.call(this)
            }, t.f.nativeSourceHandler = {}, t.f.nativeSourceHandler.canHandleSource = function(e) {
                function n(e) {
                    try {
                        return t.A.canPlayType(e)
                    } catch (n) {
                        return ""
                    }
                }
                return e.type ? n(e.type) : e.src ? (e = (e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1], n("video/" + e)) : ""
            }, t.f.nativeSourceHandler.handleSource = function(t, e) {
                e.na(t.src)
            }, t.f.nativeSourceHandler.dispose = m(), t.f.registerSourceHandler(t.f.nativeSourceHandler), t.f.Ld = function() {
                var e = t.A.volume;
                return t.A.volume = e / 2 + .1, e !== t.A.volume
            }, t.f.Kd = function() {
                var e = t.A.playbackRate;
                return t.A.playbackRate = e / 2 + .1, e !== t.A.playbackRate
            }, t.f.Re = function() {
                var e;
                return (e = !!t.A.textTracks) && 0 < t.A.textTracks.length && (e = "number" != typeof t.A.textTracks[0].mode), e && t.gc && (e = l), e
            }, t.f.prototype.featuresVolumeControl = t.f.Ld(), t.f.prototype.featuresPlaybackRate = t.f.Kd(), t.f.prototype.movingMediaElementInDOM = !t.xd,
            t.f.prototype.featuresFullscreenResize = f, t.f.prototype.featuresProgressEvents = f, t.f.prototype.featuresNativeTextTracks = t.f.Re();
        var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
            sa = /^video\/mp4/i;
        t.f.Tc = function() {
            4 <= t.ec && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                return t && ra.test(t) ? "maybe" : S.call(this, t)
            }), t.Bd && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function(t) {
                return t && sa.test(t) ? "maybe" : S.call(this, t)
            })
        }, t.f.Ye = function() {
            var e = t.A.constructor.prototype.canPlayType;
            return t.A.constructor.prototype.canPlayType = S, S = j, e
        }, t.f.Tc(), t.f.xb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), t.f.Kb = function(t) {
            if (t) {
                for (t.player = j, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                if (t.removeAttribute("src"), "function" == typeof t.load) try {
                    t.load()
                } catch (e) {}
            }
        }, t.g = t.j.extend({
            l: function(e, n, i) {
                t.j.call(this, e, n, i);
                var o = n.source;
                i = e.id() + "_flash_api";
                var r = e.q,
                    r = t.i.D({
                        readyFunction: "videojs.Flash.onReady",
                        eventProxyFunction: "videojs.Flash.onEvent",
                        errorEventProxyFunction: "videojs.Flash.onError",
                        autoplay: r.autoplay,
                        preload: r.Ra,
                        loop: r.loop,
                        muted: r.muted
                    }, n.flashVars),
                    s = t.i.D({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, n.params);
                i = t.i.D({
                    id: i,
                    name: i,
                    "class": "vjs-tech"
                }, n.attributes), o && this.I(function() {
                    this.ma(o)
                }), t.Rb(this.c, n.parentEl), n.startTime && this.I(function() {
                    this.load(), this.play(), this.currentTime(n.startTime)
                }), t.gc && this.I(function() {
                    this.b("mousemove", function() {
                        this.k().o({
                            type: "mousemove",
                            bubbles: l
                        })
                    })
                }), e.b("stageclick", e.reportUserActivity), this.c = t.g.Dc(n.swf, this.c, r, s, i)
            }
        }), s = t.g.prototype, s.dispose = function() {
            t.j.prototype.dispose.call(this)
        }, s.play = function() {
            this.ended() && this.setCurrentTime(0), this.c.vjs_play()
        }, s.pause = function() {
            this.c.vjs_pause()
        }, s.src = function(t) {
            return t === b ? this.currentSrc() : this.na(t)
        }, s.na = function(e) {
            if (e = t.Xd(e), this.c.vjs_src(e), this.d.autoplay()) {
                var n = this;
                this.setTimeout(function() {
                    n.play()
                }, 0)
            }
        }, t.g.prototype.setCurrentTime = function(e) {
            this.ke = e, this.c.vjs_setProperty("currentTime", e), t.j.prototype.Zb.call(this)
        }, t.g.prototype.currentTime = function() {
            return this.seeking() ? this.ke || 0 : this.c.vjs_getProperty("currentTime")
        }, t.g.prototype.currentSrc = function() {
            return this.fb ? this.fb.src : this.c.vjs_getProperty("currentSrc")
        }, t.g.prototype.load = function() {
            this.c.vjs_load()
        }, t.g.prototype.poster = function() {
            this.c.vjs_getProperty("poster")
        }, t.g.prototype.setPoster = m(), s = t.g.prototype, s.seekable = function() {
            return 0 === this.duration() ? t.xa() : t.xa(0, this.duration())
        }, s.buffered = function() {
            return this.c.vjs_getProperty ? t.xa(0, this.c.vjs_getProperty("buffered")) : t.xa()
        }, s.duration = function() {
            return this.c.vjs_getProperty ? this.c.vjs_getProperty("duration") : 0
        }, s.Sa = p(l), s.Ec = p(l);
        var ua = t.g.prototype,
            T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
            wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "),
            U;
        for (U = 0; U < T.length; U++) va(T[U]), ta();
        for (U = 0; U < wa.length; U++) va(wa[U]);
        t.g.isSupported = function() {
            return 10 <= t.g.version()[0]
        }, t.j.dc(t.g), t.g.nativeSourceHandler = {}, t.g.nativeSourceHandler.canHandleSource = function(e) {
            return e.type && e.type.replace(/;.*/, "").toLowerCase() in t.g.Wd ? "maybe" : ""
        }, t.g.nativeSourceHandler.handleSource = function(t, e) {
            e.na(t.src)
        }, t.g.nativeSourceHandler.dispose = m(), t.g.registerSourceHandler(t.g.nativeSourceHandler), t.g.Wd = {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        }, t.g.onReady = function(e) {
            var n;
            (n = (e = t.m(e)) && e.parentNode && e.parentNode.player) && (e.player = n, t.g.checkReady(n.h))
        }, t.g.checkReady = function(e) {
            e.m() && (e.m().vjs_getProperty ? e.Va() : this.setTimeout(function() {
                t.g.checkReady(e)
            }, 50))
        }, t.g.onEvent = function(e, n) {
            t.m(e).player.o(n)
        }, t.g.onError = function(e, n) {
            var i = t.m(e).player,
                o = "FLASH: " + n;
            i.error("srcnotfound" == n ? {
                code: 4,
                message: o
            } : o)
        }, t.g.version = function() {
            var t = "0,0,0";
            try {
                t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (e) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (n) {}
            }
            return t.split(",")
        }, t.g.Dc = function(e, n, i, o, r) {
            e = t.g.$d(e, i, o, r), e = t.e("div", {
                innerHTML: e
            }).childNodes[0], i = n.parentNode, n.parentNode.replaceChild(e, n), e[t.expando] = n[t.expando];
            var s = i.childNodes[0];
            return setTimeout(function() {
                s.style.display = "block"
            }, 1e3), e
        }, t.g.$d = function(e, n, i, o) {
            var r = "",
                s = "",
                a = "";
            return n && t.i.ca(n, function(t, e) {
                r += t + "=" + e + "&amp;"
            }), i = t.i.D({
                movie: e,
                flashvars: r,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, i), t.i.ca(i, function(t, e) {
                s += '<param name="' + t + '" value="' + e + '" />'
            }), o = t.i.D({
                data: e,
                width: "100%",
                height: "100%"
            }, o), t.i.ca(o, function(t, e) {
                a += t + '="' + e + '" '
            }), '<object type="application/x-shockwave-flash" ' + a + ">" + s + "</object>"
        }, t.g.Qe = {
            "rtmp/mp4": "MP4",
            "rtmp/flv": "FLV"
        }, t.g.Df = function(t, e) {
            return t + "&" + e
        }, t.g.Pe = function(t) {
            var e = {
                yc: "",
                jd: ""
            };
            if (!t) return e;
            var n, i = t.indexOf("&");
            return -1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1, 0 === i && (i = n = t.length)), e.yc = t.substring(0, i), e.jd = t.substring(n, t.length), e
        }, t.g.ie = function(e) {
            return e in t.g.Qe
        }, t.g.Dd = /^rtmp[set]?:\/\//i, t.g.he = function(e) {
            return t.g.Dd.test(e)
        }, t.g.Yb = {}, t.g.Yb.canHandleSource = function(e) {
            return t.g.ie(e.type) || t.g.he(e.src) ? "maybe" : ""
        }, t.g.Yb.handleSource = function(e, n) {
            var i = t.g.Pe(e.src);
            n.setRtmpConnection(i.yc), n.setRtmpStream(i.jd)
        }, t.g.registerSourceHandler(t.g.Yb), t.Cd = t.a.extend({
            l: function(e, n, i) {
                if (t.a.call(this, e, n, i), e.q.sources && 0 !== e.q.sources.length) e.src(e.q.sources);
                else
                    for (n = 0, i = e.q.techOrder; n < i.length; n++) {
                        var o = t.va(i[n]),
                            r = window.videojs[o];
                        if (r && r.isSupported()) {
                            ka(e, o);
                            break
                        }
                    }
            }
        }), t.oc = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        }, t.Ed = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        }, t.t = function(e) {
            var n, i, o, r, s, a, c, u, d, p, h;
            if (e = e || {}, !e.player) throw Error("A player was not provided.");
            if (n = this, t.pa)
                for (h in n = document.createElement("custom"), t.t.prototype) n[h] = t.t.prototype[h];
            return n.d = e.player, o = t.oc[e.mode] || "disabled", r = t.Ed[e.kind] || "subtitles", s = e.label || "", a = e.language || e.srclang || "", i = e.id || "vjs_text_track_" + t.s++, ("metadata" === r || "chapters" === r) && (o = "hidden"), n.V = [], n.Ia = [], c = new t.U(n.V), u = new t.U(n.Ia), p = l, d = t.bind(n, function() {
                this.activeCues, p && (this.trigger("cuechange"), p = l)
            }), "disabled" !== o && n.d.b("timeupdate", d), Object.defineProperty(n, "kind", {
                get: function() {
                    return r
                },
                set: Function.prototype
            }), Object.defineProperty(n, "label", {
                get: function() {
                    return s
                },
                set: Function.prototype
            }), Object.defineProperty(n, "language", {
                get: function() {
                    return a
                },
                set: Function.prototype
            }), Object.defineProperty(n, "id", {
                get: function() {
                    return i
                },
                set: Function.prototype
            }), Object.defineProperty(n, "mode", {
                get: function() {
                    return o
                },
                set: function(e) {
                    t.oc[e] && (o = e, "showing" === o && this.d.b("timeupdate", d), this.o("modechange"))
                }
            }), Object.defineProperty(n, "cues", {
                get: function() {
                    return this.Ub ? c : j
                },
                set: Function.prototype
            }), Object.defineProperty(n, "activeCues", {
                get: function() {
                    var t, e, n, i, o;
                    if (!this.Ub) return j;
                    if (0 === this.cues.length) return u;
                    for (i = this.d.currentTime(), t = 0, e = this.cues.length, n = []; e > t; t++) o = this.cues[t], o.startTime <= i && o.endTime >= i ? n.push(o) : o.startTime === o.endTime && o.startTime <= i && o.startTime + .5 >= i && n.push(o);
                    if (p = l, n.length !== this.Ia.length) p = f;
                    else
                        for (t = 0; t < n.length; t++) - 1 === xa.call(this.Ia, n[t]) && (p = f);
                    return this.Ia = n, u.pb(this.Ia), u
                },
                set: Function.prototype
            }), e.src ? ya(e.src, n) : n.Ub = f, t.pa ? n : void 0
        }, t.t.prototype = t.i.create(t.z.prototype), t.t.prototype.constructor = t.t, t.t.prototype.ab = {
            cuechange: "cuechange"
        }, t.t.prototype.sc = function(t) {
            var e = this.d.textTracks(),
                n = 0;
            if (e)
                for (; n < e.length; n++) e[n] !== this && e[n].Yc(t);
            this.V.push(t), this.cues.pb(this.V)
        }, t.t.prototype.Yc = function(t) {
            for (var e, n = 0, i = this.V.length, o = l; i > n; n++) e = this.V[n], e === t && (this.V.splice(n, 1), o = f);
            o && this.Ac.pb(this.V)
        };
        var ya, V, xa;
        ya = function(e, n) {
            t.bf(e, t.bind(this, function(e, i, o) {
                return e ? t.log.error(e) : (n.Ub = f, void V(o, n))
            }))
        }, V = function(e, n) {
            if ("function" != typeof window.WebVTT) window.setTimeout(function() {
                V(e, n)
            }, 25);
            else {
                var i = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
                i.oncue = function(t) {
                    n.sc(t)
                }, i.onparsingerror = function(e) {
                    t.log.error(e)
                }, i.parse(e), i.flush()
            }
        }, xa = function(t, e) {
            var n;
            if (this == j) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                o = i.length >>> 0;
            if (0 === o) return -1;
            if (n = +e || 0, 1 / 0 === Math.abs(n) && (n = 0), n >= o) return -1;
            for (n = Math.max(n >= 0 ? n : o - Math.abs(n), 0); o > n;) {
                if (n in i && i[n] === t) return n;
                n++
            }
            return -1
        }, t.F = function(e) {
            var n, i = this,
                o = 0;
            if (t.pa)
                for (n in i = document.createElement("custom"), t.F.prototype) i[n] = t.F.prototype[n];
            for (e = e || [], i.Ua = [], Object.defineProperty(i, "length", {
                    get: function() {
                        return this.Ua.length
                    }
                }); o < e.length; o++) P(i, e[o]);
            return t.pa ? i : void 0
        }, t.F.prototype = t.i.create(t.z.prototype), t.F.prototype.constructor = t.F, t.F.prototype.ab = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        };
        for (var za in t.F.prototype.ab) t.F.prototype["on" + za] = j;
        t.F.prototype.ae = function(t) {
            for (var e, n = 0, i = this.length, o = j; i > n; n++)
                if (e = this[n], e.id === t) {
                    o = e;
                    break
                }
            return o
        }, t.U = function(e) {
            var i, o = this;
            if (t.pa)
                for (i in o = document.createElement("custom"), t.U.prototype) o[i] = t.U.prototype[i];
            return t.U.prototype.pb.call(o, e), Object.defineProperty(o, "length", {
                get: n("le")
            }), t.pa ? o : void 0
        }, t.U.prototype.pb = function(t) {
            var e = this.length || 0,
                n = 0,
                i = t.length;
            if (this.V = t, this.le = t.length, t = function(t) {
                    "" + t in this || Object.defineProperty(this, "" + t, {
                        get: function() {
                            return this.V[t]
                        }
                    })
                }, i > e)
                for (n = e; i > n; n++) t.call(this, n)
        }, t.U.prototype.Zd = function(t) {
            for (var e, n = 0, i = this.length, o = j; i > n; n++)
                if (e = this[n], e.id === t) {
                    o = e;
                    break
                }
            return o
        }, t.sa = t.a.extend({
            l: function(e, n, i) {
                t.a.call(this, e, n, i), e.b("loadstart", t.bind(this, this.Ve)), e.I(t.bind(this, function() {
                    if (e.h && e.h.featuresNativeTextTracks) this.W();
                    else {
                        var n, i, o;
                        for (e.b("fullscreenchange", t.bind(this, this.C)), i = e.q.tracks || [], n = 0; n < i.length; n++) o = i[n], this.d.ha(o)
                    }
                }))
            }
        }), t.sa.prototype.Ve = function() {
            this.d.h && this.d.h.featuresNativeTextTracks ? this.W() : this.show()
        }, t.sa.prototype.e = function() {
            return t.a.prototype.e.call(this, "div", {
                className: "vjs-text-track-display"
            })
        }, t.sa.prototype.Md = function() {
            "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
        };
        var Aa = {
            tf: "monospace",
            zf: "sans-serif",
            Bf: "serif",
            uf: '"Andale Mono", "Lucida Console", monospace',
            vf: '"Courier New", monospace',
            xf: "sans-serif",
            yf: "serif",
            kf: '"Comic Sans MS", Impact, fantasy',
            Af: '"Monotype Corsiva", cursive',
            Cf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
        };
        if (t.sa.prototype.C = function() {
                var t, e = this.d.textTracks(),
                    n = 0;
                if (this.Md(), e)
                    for (; n < e.length; n++) t = e[n], "showing" === t.mode && this.Ze(t)
            }, t.sa.prototype.Ze = function(t) {
                if ("function" == typeof window.WebVTT && t.activeCues) {
                    for (var e, n = 0, i = this.d.textTrackSettings.Hc(), o = []; n < t.activeCues.length; n++) o.push(t.activeCues[n]);
                    for (window.WebVTT.processCues(window, t.activeCues, this.c), n = o.length; n--;) {
                        if (t = o[n].lf, i.color && (t.firstChild.style.color = i.color), i.kd) try {
                            t.firstChild.style.color = W(i.color || "#fff", i.kd)
                        } catch (r) {}
                        if (i.backgroundColor && (t.firstChild.style.backgroundColor = i.backgroundColor), i.vc) try {
                            t.firstChild.style.backgroundColor = W(i.backgroundColor || "#000", i.vc)
                        } catch (s) {}
                        if (i.cc)
                            if (i.rd) try {
                                t.style.backgroundColor = W(i.cc, i.rd)
                            } catch (a) {} else t.style.backgroundColor = i.cc;
                        i.Ma && ("dropshadow" === i.Ma ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === i.Ma ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === i.Ma ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === i.Ma && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), i.Ob && 1 !== i.Ob && (e = window.wf(t.style.fontSize), t.style.fontSize = e * i.Ob + "px", t.style.height = "auto", t.style.top = "auto", t.style.bottom = "2px"), i.fontFamily && "default" !== i.fontFamily && ("small-caps" === i.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = Aa[i.fontFamily])
                    }
                }
            }, t.$ = t.M.extend({
                l: function(e, n) {
                    var i, o, r = this.Y = n.track,
                        s = e.textTracks();
                    s && (i = t.bind(this, function() {
                        var e, n, i, o = "showing" === this.Y.mode;
                        if (this instanceof t.zb)
                            for (o = f, n = 0, i = s.length; i > n; n++)
                                if (e = s[n], e.kind === this.Y.kind && "showing" === e.mode) {
                                    o = l;
                                    break
                                }
                        this.selected(o)
                    }), s.addEventListener("change", i), e.b("dispose", function() {
                        s.removeEventListener("change", i)
                    })), n.label = r.label || r.language || "Unknown", n.selected = r["default"] || "showing" === r.mode, t.M.call(this, e, n), s && s.onchange === b && this.b(["tap", "click"], function() {
                        if ("object" != typeof window.vd) try {
                            o = new window.vd("change")
                        } catch (t) {}
                        o || (o = document.createEvent("Event"), o.initEvent("change", f, f)), s.dispatchEvent(o)
                    })
                }
            }), t.$.prototype.u = function() {
                var e, n = this.Y.kind,
                    i = this.d.textTracks(),
                    o = 0;
                if (t.M.prototype.u.call(this), i)
                    for (; o < i.length; o++) e = i[o], e.kind === n && (e.mode = e === this.Y ? "showing" : "disabled")
            }, t.zb = t.$.extend({
                l: function(e, n) {
                    n.track = {
                        kind: n.kind,
                        player: e,
                        label: n.kind + " off",
                        "default": l,
                        mode: "disabled"
                    }, t.$.call(this, e, n), this.selected(f)
                }
            }), t.sb = t.$.extend({
                l: function(e, n) {
                    n.track = {
                        kind: n.kind,
                        player: e,
                        label: n.kind + " settings",
                        "default": l,
                        mode: "disabled"
                    }, t.$.call(this, e, n), this.p("vjs-texttrack-settings")
                }
            }), t.sb.prototype.u = function() {
                this.k().da("textTrackSettings").show()
            }, t.Q = t.O.extend({
                l: function(e, n) {
                    var i, o;
                    t.O.call(this, e, n), i = this.d.textTracks(), 1 >= this.H.length && this.W(), i && (o = t.bind(this, this.update), i.addEventListener("removetrack", o), i.addEventListener("addtrack", o), this.d.b("dispose", function() {
                        i.removeEventListener("removetrack", o), i.removeEventListener("addtrack", o)
                    }))
                }
            }), t.Q.prototype.Ka = function() {
                var e, n, i = [];
                if (this instanceof t.oa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && i.push(new t.sb(this.d, {
                        kind: this.ea
                    })), i.push(new t.zb(this.d, {
                        kind: this.ea
                    })), n = this.d.textTracks(), !n) return i;
                for (var o = 0; o < n.length; o++) e = n[o], e.kind === this.ea && i.push(new t.$(this.d, {
                    track: e
                }));
                return i
            }, t.oa = t.Q.extend({
                l: function(e, n, i) {
                    t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Captions Menu")
                }
            }), t.oa.prototype.ea = "captions", t.oa.prototype.ta = "Captions", t.oa.prototype.className = "vjs-captions-button", t.oa.prototype.update = function() {
                var e = 2;
                t.Q.prototype.update.call(this), this.k().h && this.k().h.featuresNativeTextTracks && (e = 1), this.H && this.H.length > e ? this.show() : this.W()
            }, t.$a = t.Q.extend({
                l: function(e, n, i) {
                    t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Subtitles Menu")
                }
            }), t.$a.prototype.ea = "subtitles", t.$a.prototype.ta = "Subtitles", t.$a.prototype.className = "vjs-subtitles-button", t.Wa = t.Q.extend({
                l: function(e, n, i) {
                    t.Q.call(this, e, n, i), this.c.setAttribute("aria-label", "Chapters Menu")
                }
            }), s = t.Wa.prototype, s.ea = "chapters", s.ta = "Chapters", s.className = "vjs-chapters-button", s.Ka = function() {
                var e, n, i = [];
                if (n = this.d.textTracks(), !n) return i;
                for (var o = 0; o < n.length; o++) e = n[o], e.kind === this.ea && i.push(new t.$(this.d, {
                    track: e
                }));
                return i
            }, s.La = function() {
                for (var e, n, i = this.d.textTracks() || [], o = 0, r = i.length, s = this.H = []; r > o; o++)
                    if (e = i[o], e.kind == this.ea) {
                        if (e.Ac) {
                            n = e;
                            break
                        }
                        e.mode = "hidden", window.setTimeout(t.bind(this, function() {
                            this.La()
                        }), 100)
                    }
                if (i = this.za, i === b && (i = new t.qa(this.d), i.wa().appendChild(t.e("li", {
                        className: "vjs-menu-title",
                        innerHTML: t.va(this.ea),
                        Se: -1
                    }))), n) {
                    e = n.cues;
                    for (var a, o = 0, r = e.length; r > o; o++) a = e[o], a = new t.Xa(this.d, {
                        track: n,
                        cue: a
                    }), s.push(a), i.aa(a);
                    this.aa(i)
                }
                return 0 < this.H.length && this.show(), i
            }, t.Xa = t.M.extend({
                l: function(e, n) {
                    var i = this.Y = n.track,
                        o = this.cue = n.cue,
                        r = e.currentTime();
                    n.label = o.text, n.selected = o.startTime <= r && r < o.endTime, t.M.call(this, e, n), i.addEventListener("cuechange", t.bind(this, this.update))
                }
            }), t.Xa.prototype.u = function() {
                t.M.prototype.u.call(this), this.d.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, t.Xa.prototype.update = function() {
                var t = this.cue,
                    e = this.d.currentTime();
                this.selected(t.startTime <= e && e < t.endTime)
            }, t.pc = t.a.extend({
                l: function(e, n) {
                    t.a.call(this, e, n), this.W(), t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function() {
                        this.Fe(), this.W()
                    })), t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function() {
                        this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.m().querySelector(".window-color > select").selectedIndex = 0, this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.m().querySelector(".vjs-edge-style select").selectedIndex = 0, this.m().querySelector(".vjs-font-family select").selectedIndex = 0, this.m().querySelector(".vjs-font-percent select").selectedIndex = 2, this.C()
                    })), t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C)), t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C)), e.options().persistTextTrackSettings && this.Ee()
                }
            }), s = t.pc.prototype, s.e = function() {
                return t.a.prototype.e.call(this, "div", {
                    className: "vjs-caption-settings vjs-modal-overlay",
                    innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
                })
            }, s.Hc = function() {
                var t, e, n, i, o, r, s, a, l, c;
                t = this.m(), o = X(t.querySelector(".vjs-edge-style select")), r = X(t.querySelector(".vjs-font-family select")), s = X(t.querySelector(".vjs-fg-color > select")), n = X(t.querySelector(".vjs-text-opacity > select")), a = X(t.querySelector(".vjs-bg-color > select")), e = X(t.querySelector(".vjs-bg-opacity > select")), l = X(t.querySelector(".window-color > select")), i = X(t.querySelector(".vjs-window-opacity > select")), t = window.parseFloat(X(t.querySelector(".vjs-font-percent > select"))), e = {
                    backgroundOpacity: e,
                    textOpacity: n,
                    windowOpacity: i,
                    edgeStyle: o,
                    fontFamily: r,
                    color: s,
                    backgroundColor: a,
                    windowColor: l,
                    fontPercent: t
                };
                for (c in e)("" === e[c] || "none" === e[c] || "fontPercent" === c && 1 === e[c]) && delete e[c];
                return e
            }, s.Ne = function(t) {
                var e = this.m();
                Y(e.querySelector(".vjs-edge-style select"), t.Ma), Y(e.querySelector(".vjs-font-family select"), t.fontFamily), Y(e.querySelector(".vjs-fg-color > select"), t.color), Y(e.querySelector(".vjs-text-opacity > select"), t.kd), Y(e.querySelector(".vjs-bg-color > select"), t.backgroundColor), Y(e.querySelector(".vjs-bg-opacity > select"), t.vc), Y(e.querySelector(".window-color > select"), t.cc), Y(e.querySelector(".vjs-window-opacity > select"), t.rd), (t = t.Ob) && (t = t.toFixed(2)), Y(e.querySelector(".vjs-font-percent > select"), t)
            }, s.Ee = function() {
                var t;
                try {
                    t = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
                } catch (e) {}
                t && this.Ne(t)
            }, s.Fe = function() {
                var e;
                if (this.d.options().persistTextTrackSettings) {
                    e = this.Hc();
                    try {
                        t.hb(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
                    } catch (n) {}
                }
            }, s.C = function() {
                var t = this.d.da("textTrackDisplay");
                t && t.C()
            }, "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse) t.JSON = window.JSON;
        else {
            t.JSON = {};
            var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            t.JSON.parse = function(a, c) {
                function d(t, e) {
                    var n, i, o = t[e];
                    if (o && "object" == typeof o)
                        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (i = d(o, n), i !== b ? o[n] = i : delete o[n]);
                    return c.call(t, e, o)
                }
                var e;
                if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z, function(t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" == typeof c ? d({
                    "": e
                }, "") : e;
                throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
            }
        }
        t.uc = function() {
            var e, n, i, o;
            e = document.getElementsByTagName("video"), n = document.getElementsByTagName("audio");
            var r = [];
            if (e && 0 < e.length)
                for (i = 0, o = e.length; o > i; i++) r.push(e[i]);
            if (n && 0 < n.length)
                for (i = 0, o = n.length; o > i; i++) r.push(n[i]);
            if (r && 0 < r.length)
                for (i = 0, o = r.length; o > i; i++) {
                    if (!(n = r[i]) || !n.getAttribute) {
                        t.Hb();
                        break
                    }
                    n.player === b && (e = n.getAttribute("data-setup"), e !== j && videojs(n))
                } else t.qd || t.Hb()
        }, t.Hb = function() {
            setTimeout(t.uc, 1)
        }, "complete" === document.readyState ? t.qd = f : t.N(window, "load", function() {
            t.qd = f
        }), t.Hb(), t.Be = function(e, n) {
            t.Player.prototype[e] = n
        };
        var Ba = this;
        $("videojs", t), $("_V_", t), $("videojs.options", t.options), $("videojs.players", t.Ca), $("videojs.TOUCH_ENABLED", t.Db), $("videojs.cache", t.ua), $("videojs.Component", t.a), t.a.prototype.player = t.a.prototype.k, t.a.prototype.options = t.a.prototype.options, t.a.prototype.init = t.a.prototype.l, t.a.prototype.dispose = t.a.prototype.dispose, t.a.prototype.createEl = t.a.prototype.e, t.a.prototype.contentEl = t.a.prototype.wa, t.a.prototype.el = t.a.prototype.m, t.a.prototype.addChild = t.a.prototype.aa, t.a.prototype.getChild = t.a.prototype.da, t.a.prototype.getChildById = t.a.prototype.Yd, t.a.prototype.children = t.a.prototype.children, t.a.prototype.initChildren = t.a.prototype.Kc, t.a.prototype.removeChild = t.a.prototype.removeChild, t.a.prototype.on = t.a.prototype.b, t.a.prototype.off = t.a.prototype.n, t.a.prototype.one = t.a.prototype.N, t.a.prototype.trigger = t.a.prototype.o, t.a.prototype.triggerReady = t.a.prototype.Va, t.a.prototype.show = t.a.prototype.show, t.a.prototype.hide = t.a.prototype.W, t.a.prototype.width = t.a.prototype.width, t.a.prototype.height = t.a.prototype.height, t.a.prototype.dimensions = t.a.prototype.Qd, t.a.prototype.ready = t.a.prototype.I, t.a.prototype.addClass = t.a.prototype.p, t.a.prototype.removeClass = t.a.prototype.r, t.a.prototype.hasClass = t.a.prototype.Pa, t.a.prototype.buildCSSClass = t.a.prototype.T, t.a.prototype.localize = t.a.prototype.v, t.a.prototype.setInterval = t.a.prototype.setInterval, t.a.prototype.setTimeout = t.a.prototype.setTimeout, $("videojs.EventEmitter", t.z), t.z.prototype.on = t.z.prototype.b, t.z.prototype.addEventListener = t.z.prototype.addEventListener, t.z.prototype.off = t.z.prototype.n, t.z.prototype.removeEventListener = t.z.prototype.removeEventListener, t.z.prototype.one = t.z.prototype.N, t.z.prototype.trigger = t.z.prototype.o, t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent, t.Player.prototype.ended = t.Player.prototype.ended, t.Player.prototype.enterFullWindow = t.Player.prototype.Fc, t.Player.prototype.exitFullWindow = t.Player.prototype.Lb, t.Player.prototype.preload = t.Player.prototype.Ra, t.Player.prototype.remainingTime = t.Player.prototype.remainingTime, t.Player.prototype.supportsFullScreen = t.Player.prototype.Sa, t.Player.prototype.currentType = t.Player.prototype.Nd, t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen, t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen, t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen, t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen, t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen, t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen, t.Player.prototype.textTracks = t.Player.prototype.textTracks, t.Player.prototype.remoteTextTracks = t.Player.prototype.X, t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack, t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ha, t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Da, t.Player.prototype.seekable = t.Player.prototype.seekable, $("videojs.MediaLoader", t.Cd), $("videojs.TextTrackDisplay", t.sa), $("videojs.ControlBar", t.tb), $("videojs.Button", t.w), $("videojs.PlayToggle", t.kc), $("videojs.FullscreenToggle", t.Ya), $("videojs.BigPlayButton", t.rb), $("videojs.LoadingSpinner", t.ic), $("videojs.CurrentTimeDisplay", t.ub), $("videojs.DurationDisplay", t.vb), $("videojs.TimeDivider", t.qc), $("videojs.RemainingTimeDisplay", t.Cb), $("videojs.LiveDisplay", t.hc), $("videojs.ErrorDisplay", t.wb), $("videojs.Slider", t.S), $("videojs.ProgressControl", t.Bb), $("videojs.SeekBar", t.nc), $("videojs.LoadProgressBar", t.yb), $("videojs.PlayProgressBar", t.jc), $("videojs.SeekHandle", t.Za), $("videojs.VolumeControl", t.Fb), $("videojs.VolumeBar", t.Eb), $("videojs.VolumeLevel", t.rc), $("videojs.VolumeMenuButton", t.Ha), $("videojs.VolumeHandle", t.Gb), $("videojs.MuteToggle", t.ra), $("videojs.PosterImage", t.mc), $("videojs.Menu", t.qa), $("videojs.MenuItem", t.M), $("videojs.MenuButton", t.O), $("videojs.PlaybackRateMenuButton", t.lc), $("videojs.ChaptersTrackMenuItem", t.Xa), $("videojs.TextTrackButton", t.Q), $("videojs.TextTrackMenuItem", t.$), $("videojs.OffTextTrackMenuItem", t.zb), $("videojs.CaptionSettingsMenuItem", t.sb), t.O.prototype.createItems = t.O.prototype.Ka, t.Q.prototype.createItems = t.Q.prototype.Ka, t.Wa.prototype.createItems = t.Wa.prototype.Ka, $("videojs.SubtitlesButton", t.$a), $("videojs.CaptionsButton", t.oa), $("videojs.ChaptersButton", t.Wa), $("videojs.MediaTechController", t.j), t.j.withSourceHandlers = t.j.dc, t.j.prototype.featuresVolumeControl = t.j.prototype.qf, t.j.prototype.featuresFullscreenResize = t.j.prototype.mf, t.j.prototype.featuresPlaybackRate = t.j.prototype.nf, t.j.prototype.featuresProgressEvents = t.j.prototype.of, t.j.prototype.featuresTimeupdateEvents = t.j.prototype.pf, t.j.prototype.setPoster = t.j.prototype.bd, t.j.prototype.textTracks = t.j.prototype.textTracks, t.j.prototype.remoteTextTracks = t.j.prototype.X, t.j.prototype.addTextTrack = t.j.prototype.addTextTrack, t.j.prototype.addRemoteTextTrack = t.j.prototype.ha, t.j.prototype.removeRemoteTextTrack = t.j.prototype.Da, $("videojs.Html5", t.f), t.f.Events = t.f.xb, t.f.isSupported = t.f.isSupported, t.f.canPlaySource = t.f.wc, t.f.patchCanPlayType = t.f.Tc, t.f.unpatchCanPlayType = t.f.Ye, t.f.prototype.setCurrentTime = t.f.prototype.Zb, t.f.prototype.setVolume = t.f.prototype.Oe, t.f.prototype.setMuted = t.f.prototype.Ke, t.f.prototype.setPreload = t.f.prototype.Me, t.f.prototype.setAutoplay = t.f.prototype.He, t.f.prototype.setLoop = t.f.prototype.Je, t.f.prototype.enterFullScreen = t.f.prototype.Ec, t.f.prototype.exitFullScreen = t.f.prototype.Ud, t.f.prototype.playbackRate = t.f.prototype.playbackRate, t.f.prototype.setPlaybackRate = t.f.prototype.Le, t.f.selectSourceHandler = t.f.ob, t.f.prototype.setSource = t.f.prototype.ma, t.f.prototype.disposeSourceHandler = t.f.prototype.ia, t.f.prototype.textTracks = t.f.prototype.textTracks, t.f.prototype.remoteTextTracks = t.f.prototype.X, t.f.prototype.addTextTrack = t.f.prototype.addTextTrack, t.f.prototype.addRemoteTextTrack = t.f.prototype.ha, t.f.prototype.removeRemoteTextTrack = t.f.prototype.Da, $("videojs.Flash", t.g), t.g.isSupported = t.g.isSupported, t.g.canPlaySource = t.g.wc, t.g.onReady = t.g.onReady, t.g.embed = t.g.Dc, t.g.version = t.g.version, t.g.prototype.setSource = t.g.prototype.ma, t.g.selectSourceHandler = t.g.ob, t.g.prototype.setSource = t.g.prototype.ma, t.g.prototype.disposeSourceHandler = t.g.prototype.ia, $("videojs.TextTrack", t.t), $("videojs.TextTrackList", t.F), $("videojs.TextTrackCueList", t.U), $("videojs.TextTrackSettings", t.pc), t.t.prototype.id = t.t.prototype.id, t.t.prototype.label = t.t.prototype.label, t.t.prototype.kind = t.t.prototype.Tb, t.t.prototype.mode = t.t.prototype.mode, t.t.prototype.cues = t.t.prototype.Ac, t.t.prototype.activeCues = t.t.prototype.jf, t.t.prototype.addCue = t.t.prototype.sc, t.t.prototype.removeCue = t.t.prototype.Yc, t.F.prototype.getTrackById = t.F.prototype.ae, t.U.prototype.getCueById = t.F.prototype.Zd, $("videojs.CaptionsTrack", t.cf), $("videojs.SubtitlesTrack", t.hf), $("videojs.ChaptersTrack", t.df), $("videojs.autoSetup", t.uc), $("videojs.plugin", t.Be), $("videojs.createTimeRange", t.xa), $("videojs.util", t.Z), t.Z.mergeOptions = t.Z.Aa, t.addLanguage = t.Gd
    }(), ! function(t) {
        var e = t.vttjs = {},
            n = e.VTTCue,
            i = e.VTTRegion,
            o = t.VTTCue,
            r = t.VTTRegion;
        e.shim = function() {
            e.VTTCue = n, e.VTTRegion = i
        }, e.restore = function() {
            e.VTTCue = o, e.VTTRegion = r
        }
    }(this),
    function(t, e) {
        function n(t) {
            if ("string" != typeof t) return !1;
            var e = a[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function i(t) {
            if ("string" != typeof t) return !1;
            var e = l[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) t[i] = n[i]
            }
            return t
        }

        function r(t, e, r) {
            var a = this,
                l = /MSIE\s8\.0/.test(navigator.userAgent),
                c = {};
            l ? a = document.createElement("custom") : c.enumerable = !0, a.hasBeenReset = !1;
            var u = "",
                d = !1,
                p = t,
                h = e,
                f = r,
                v = null,
                m = "",
                g = !0,
                y = "auto",
                b = "start",
                w = 50,
                x = "middle",
                T = 50,
                k = "middle";
            return Object.defineProperty(a, "id", o({}, c, {
                get: function() {
                    return u
                },
                set: function(t) {
                    u = "" + t
                }
            })), Object.defineProperty(a, "pauseOnExit", o({}, c, {
                get: function() {
                    return d
                },
                set: function(t) {
                    d = !!t
                }
            })), Object.defineProperty(a, "startTime", o({}, c, {
                get: function() {
                    return p
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    p = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "endTime", o({}, c, {
                get: function() {
                    return h
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    h = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "text", o({}, c, {
                get: function() {
                    return f
                },
                set: function(t) {
                    f = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "region", o({}, c, {
                get: function() {
                    return v
                },
                set: function(t) {
                    v = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "vertical", o({}, c, {
                get: function() {
                    return m
                },
                set: function(t) {
                    var e = n(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    m = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "snapToLines", o({}, c, {
                get: function() {
                    return g
                },
                set: function(t) {
                    g = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "line", o({}, c, {
                get: function() {
                    return y
                },
                set: function(t) {
                    if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                    y = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "lineAlign", o({}, c, {
                get: function() {
                    return b
                },
                set: function(t) {
                    var e = i(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    b = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "position", o({}, c, {
                get: function() {
                    return w
                },
                set: function(t) {
                    if (0 > t || t > 100) throw new Error("Position must be between 0 and 100.");
                    w = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "positionAlign", o({}, c, {
                get: function() {
                    return x
                },
                set: function(t) {
                    var e = i(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    x = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "size", o({}, c, {
                get: function() {
                    return T
                },
                set: function(t) {
                    if (0 > t || t > 100) throw new Error("Size must be between 0 and 100.");
                    T = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "align", o({}, c, {
                get: function() {
                    return k
                },
                set: function(t) {
                    var e = i(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    k = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0, l ? a : void 0
        }
        var s = "auto",
            a = {
                "": !0,
                lr: !0,
                rl: !0
            },
            l = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        r.prototype.getCueAsHTML = function() {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, t.VTTCue = t.VTTCue || r, e.VTTCue = r
    }(this, this.vttjs || {}),
    function(t, e) {
        function n(t) {
            if ("string" != typeof t) return !1;
            var e = r[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function i(t) {
            return "number" == typeof t && t >= 0 && 100 >= t
        }

        function o() {
            var t = 100,
                e = 3,
                o = 0,
                r = 100,
                s = 0,
                a = 100,
                l = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (!i(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                        e = t
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        if (!i(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        r = t
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        if (!i(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        o = t
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if (!i(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = t
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        if (!i(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        s = t
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        var e = n(t);
                        if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                        l = e
                    }
                }
            })
        }
        var r = {
            "": !0,
            up: !0
        };
        t.VTTRegion = t.VTTRegion || o, e.VTTRegion = o
    }(this, this.vttjs || {}),
    function(t) {
        function e(t, e) {
            this.name = "ParsingError", this.code = t.code, this.message = e || t.message
        }

        function n(t) {
            function e(t, e, n, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | i) / 1e3
            }
            var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
        }

        function i() {
            this.values = f(null)
        }

        function o(t, e, n, i) {
            var o = i ? t.split(i) : [t];
            for (var r in o)
                if ("string" == typeof o[r]) {
                    var s = o[r].split(n);
                    if (2 === s.length) {
                        var a = s[0],
                            l = s[1];
                        e(a, l)
                    }
                }
        }

        function r(t, r, s) {
            function a() {
                var i = n(t);
                if (null === i) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + u);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), i
            }

            function l(t, e) {
                var n = new i;
                o(t, function(t, e) {
                    switch (t) {
                        case "region":
                            for (var i = s.length - 1; i >= 0; i--)
                                if (s[i].id === e) {
                                    n.set(t, s[i].region);
                                    break
                                }
                            break;
                        case "vertical":
                            n.alt(t, e, ["rl", "lr"]);
                            break;
                        case "line":
                            var o = e.split(","),
                                r = o[0];
                            n.integer(t, r), n.percent(t, r) ? n.set("snapToLines", !1) : null, n.alt(t, r, ["auto"]), 2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                            break;
                        case "position":
                            o = e.split(","), n.percent(t, o[0]), 2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                            break;
                        case "size":
                            n.percent(t, e);
                            break;
                        case "align":
                            n.alt(t, e, ["start", "middle", "end", "left", "right"])
                    }
                }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), e.line = n.get("line", "auto"), e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", "middle"), e.position = n.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, e.align), e.positionAlign = n.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, e.align)
            }

            function c() {
                t = t.replace(/^\s+/, "")
            }
            var u = t;
            if (c(), r.startTime = a(), c(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + u);
            t = t.substr(3), c(), r.endTime = a(), c(), l(t, r)
        }

        function s(t, e) {
            function i() {
                function t(t) {
                    return e = e.substr(t.length), t
                }
                if (!e) return null;
                var n = e.match(/^([^<]*)(<[^>]+>?)?/);
                return t(n[1] ? n[1] : n[2])
            }

            function o(t) {
                return v[t]
            }

            function r(t) {
                for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(f[0], o);
                return t
            }

            function s(t, e) {
                return !y[e.localName] || y[e.localName] === t.localName
            }

            function a(e, n) {
                var i = m[e];
                if (!i) return null;
                var o = t.document.createElement(i);
                o.localName = i;
                var r = g[e];
                return r && n && (o[r] = n.trim()), o
            }
            for (var l, c = t.document.createElement("div"), u = c, d = []; null !== (l = i());)
                if ("<" !== l[0]) u.appendChild(t.document.createTextNode(r(l)));
                else {
                    if ("/" === l[1]) {
                        d.length && d[d.length - 1] === l.substr(2).replace(">", "") && (d.pop(), u = u.parentNode);
                        continue
                    }
                    var p, h = n(l.substr(1, l.length - 2));
                    if (h) {
                        p = t.document.createProcessingInstruction("timestamp", h), u.appendChild(p);
                        continue
                    }
                    var f = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                    if (!f) continue;
                    if (p = a(f[1], f[3]), !p) continue;
                    if (!s(u, p)) continue;
                    f[2] && (p.className = f[2].substr(1).replace(".", " ")), d.push(f[1]), u.appendChild(p), u = p
                }
            return c
        }

        function a(t) {
            function e(t, e) {
                for (var n = e.childNodes.length - 1; n >= 0; n--) t.push(e.childNodes[n])
            }

            function n(t) {
                if (!t || !t.length) return null;
                var i = t.pop(),
                    o = i.textContent || i.innerText;
                if (o) {
                    var r = o.match(/^.*(\n|\r)/);
                    return r ? (t.length = 0, r[0]) : o
                }
                return "ruby" === i.tagName ? n(t) : i.childNodes ? (e(t, i), n(t)) : void 0
            }
            var i, o = [],
                r = "";
            if (!t || !t.childNodes) return "ltr";
            for (e(o, t); r = n(o);)
                for (var s = 0; s < r.length; s++) {
                    i = r.charCodeAt(s);
                    for (var a = 0; a < b.length; a++)
                        if (b[a] === i) return "rtl"
                }
            return "ltr"
        }

        function l(t) {
            if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
            if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
            for (var e = t.track, n = e.textTrackList, i = 0, o = 0; o < n.length && n[o] !== e; o++) "showing" === n[o].mode && i++;
            return -1 * ++i
        }

        function c() {}

        function u(t, e, n) {
            var i = /MSIE\s8\.0/.test(navigator.userAgent),
                o = "rgba(255, 255, 255, 1)",
                r = "rgba(0, 0, 0, 0.8)";
            i && (o = "rgb(255, 255, 255)", r = "rgb(0, 0, 0)"), c.call(this), this.cue = e, this.cueDiv = s(t, e.text);
            var l = {
                color: o,
                backgroundColor: r,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            i || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
                textAlign: "middle" === e.align ? "center" : e.align,
                font: n.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, i || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
            var u = 0;
            switch (e.positionAlign) {
                case "start":
                    u = e.position;
                    break;
                case "middle":
                    u = e.position - e.size / 2;
                    break;
                case "end":
                    u = e.position - e.size
            }
            this.applyStyles("" === e.vertical ? {
                left: this.formatStyle(u, "%"),
                width: this.formatStyle(e.size, "%")
            } : {
                top: this.formatStyle(u, "%"),
                height: this.formatStyle(e.size, "%")
            }), this.move = function(t) {
                this.applyStyles({
                    top: this.formatStyle(t.top, "px"),
                    bottom: this.formatStyle(t.bottom, "px"),
                    left: this.formatStyle(t.left, "px"),
                    right: this.formatStyle(t.right, "px"),
                    height: this.formatStyle(t.height, "px"),
                    width: this.formatStyle(t.width, "px")
                })
            }
        }

        function d(t) {
            var e, n, i, o, r = /MSIE\s8\.0/.test(navigator.userAgent);
            if (t.div) {
                n = t.div.offsetHeight, i = t.div.offsetWidth, o = t.div.offsetTop;
                var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
            }
            this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || n, this.bottom = t.bottom || o + (t.height || n), this.width = t.width || i, this.lineHeight = void 0 !== e ? e : t.lineHeight, r && !this.lineHeight && (this.lineHeight = 13)
        }

        function p(t, e, n, i) {
            function o(t, e) {
                for (var o, r = new d(t), s = 1, a = 0; a < e.length; a++) {
                    for (; t.overlapsOppositeAxis(n, e[a]) || t.within(n) && t.overlapsAny(i);) t.move(e[a]);
                    if (t.within(n)) return t;
                    var l = t.intersectPercentage(n);
                    s > l && (o = new d(t), s = l), t = new d(r)
                }
                return o || r
            }
            var r = new d(e),
                s = e.cue,
                a = l(s),
                c = [];
            if (s.snapToLines) {
                var u;
                switch (s.vertical) {
                    case "":
                        c = ["+y", "-y"], u = "height";
                        break;
                    case "rl":
                        c = ["+x", "-x"], u = "width";
                        break;
                    case "lr":
                        c = ["-x", "+x"], u = "width"
                }
                var p = r.lineHeight,
                    h = p * Math.round(a),
                    f = n[u] + p,
                    v = c[0];
                Math.abs(h) > f && (h = 0 > h ? -1 : 1, h *= Math.ceil(f / p) * p), 0 > a && (h += "" === s.vertical ? n.height : n.width, c = c.reverse()), r.move(v, h)
            } else {
                var m = r.lineHeight / n.height * 100;
                switch (s.lineAlign) {
                    case "middle":
                        a -= m / 2;
                        break;
                    case "end":
                        a -= m
                }
                switch (s.vertical) {
                    case "":
                        e.applyStyles({
                            top: e.formatStyle(a, "%")
                        });
                        break;
                    case "rl":
                        e.applyStyles({
                            left: e.formatStyle(a, "%")
                        });
                        break;
                    case "lr":
                        e.applyStyles({
                            right: e.formatStyle(a, "%")
                        })
                }
                c = ["+y", "-x", "+x", "-y"], r = new d(e)
            }
            var g = o(r, c);
            e.move(g.toCSSCompatValues(n))
        }

        function h() {}
        var f = Object.create || function() {
            function t() {}
            return function(e) {
                if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                return t.prototype = e, new t
            }
        }();
        e.prototype = f(Error.prototype), e.prototype.constructor = e, e.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            },
            BadTimeStamp: {
                code: 1,
                message: "Malformed time stamp."
            }
        }, i.prototype = {
            set: function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            },
            get: function(t, e, n) {
                return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
            },
            has: function(t) {
                return t in this.values
            },
            alt: function(t, e, n) {
                for (var i = 0; i < n.length; ++i)
                    if (e === n[i]) {
                        this.set(t, e);
                        break
                    }
            },
            integer: function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            },
            percent: function(t, e) {
                var n;
                return (n = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && 100 >= e) ? (this.set(t, e), !0) : !1
            }
        };
        var v = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&lrm;": "â€Ž",
                "&rlm;": "â€",
                "&nbsp;": "Â "
            },
            m = {
                c: "span",
                i: "i",
                b: "b",
                u: "u",
                ruby: "ruby",
                rt: "rt",
                v: "span",
                lang: "span"
            },
            g = {
                v: "title",
                lang: "lang"
            },
            y = {
                rt: "ruby"
            },
            b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
        c.prototype.applyStyles = function(t, e) {
            e = e || this.div;
            for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
        }, c.prototype.formatStyle = function(t, e) {
            return 0 === t ? 0 : t + e
        }, u.prototype = f(c.prototype), u.prototype.constructor = u, d.prototype.move = function(t, e) {
            switch (e = void 0 !== e ? e : this.lineHeight, t) {
                case "+x":
                    this.left += e, this.right += e;
                    break;
                case "-x":
                    this.left -= e, this.right -= e;
                    break;
                case "+y":
                    this.top += e, this.bottom += e;
                    break;
                case "-y":
                    this.top -= e, this.bottom -= e
            }
        }, d.prototype.overlaps = function(t) {
            return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
        }, d.prototype.overlapsAny = function(t) {
            for (var e = 0; e < t.length; e++)
                if (this.overlaps(t[e])) return !0;
            return !1
        }, d.prototype.within = function(t) {
            return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
        }, d.prototype.overlapsOppositeAxis = function(t, e) {
            switch (e) {
                case "+x":
                    return this.left < t.left;
                case "-x":
                    return this.right > t.right;
                case "+y":
                    return this.top < t.top;
                case "-y":
                    return this.bottom > t.bottom
            }
        }, d.prototype.intersectPercentage = function(t) {
            var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
                n = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
                i = e * n;
            return i / (this.height * this.width)
        }, d.prototype.toCSSCompatValues = function(t) {
            return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width
            }
        }, d.getSimpleBoxPosition = function(t) {
            var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                i = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
            t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
            var o = {
                left: t.left,
                right: t.right,
                top: t.top || i,
                height: t.height || e,
                bottom: t.bottom || i + (t.height || e),
                width: t.width || n
            };
            return o
        }, h.StringDecoder = function() {
            return {
                decode: function(t) {
                    if (!t) return "";
                    if ("string" != typeof t) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }, h.convertCueToDOMTree = function(t, e) {
            return t && e ? s(t, e) : null
        };
        var w = .05,
            x = "sans-serif",
            T = "1.5%";
        h.processCues = function(t, e, n) {
            function i(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState) return !0;
                return !1
            }
            if (!t || !e || !n) return null;
            for (; n.firstChild;) n.removeChild(n.firstChild);
            var o = t.document.createElement("div");
            if (o.style.position = "absolute", o.style.left = "0", o.style.right = "0", o.style.top = "0", o.style.bottom = "0", o.style.margin = T, n.appendChild(o), i(e)) {
                var r = [],
                    s = d.getSimpleBoxPosition(o),
                    a = Math.round(s.height * w * 100) / 100,
                    l = {
                        font: a + "px " + x
                    };
                ! function() {
                    for (var n, i, a = 0; a < e.length; a++) i = e[a], n = new u(t, i, l), o.appendChild(n.div), p(t, n, s, r), i.displayState = n.div, r.push(d.getSimpleBoxPosition(n))
                }()
            } else
                for (var c = 0; c < e.length; c++) o.appendChild(e[c].displayState)
        }, h.Parser = function(t, e, n) {
            n || (n = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
        }, h.Parser.prototype = {
            reportOrThrowError: function(t) {
                if (!(t instanceof e)) throw t;
                this.onparsingerror && this.onparsingerror(t)
            },
            parse: function(t) {
                function n() {
                    for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                    var n = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), n
                }

                function s(t) {
                    var e = new i;
                    if (o(t, function(t, n) {
                            switch (t) {
                                case "id":
                                    e.set(t, n);
                                    break;
                                case "width":
                                    e.percent(t, n);
                                    break;
                                case "lines":
                                    e.integer(t, n);
                                    break;
                                case "regionanchor":
                                case "viewportanchor":
                                    var o = n.split(",");
                                    if (2 !== o.length) break;
                                    var r = new i;
                                    if (r.percent("x", o[0]), r.percent("y", o[1]), !r.has("x") || !r.has("y")) break;
                                    e.set(t + "X", r.get("x")), e.set(t + "Y", r.get("y"));
                                    break;
                                case "scroll":
                                    e.alt(t, n, ["up"])
                            }
                        }, /=/, /\s/), e.has("id")) {
                        var n = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                        n.width = e.get("width", 100), n.lines = e.get("lines", 3), n.regionAnchorX = e.get("regionanchorX", 0), n.regionAnchorY = e.get("regionanchorY", 100), n.viewportAnchorX = e.get("viewportanchorX", 0), n.viewportAnchorY = e.get("viewportanchorY", 100), n.scroll = e.get("scroll", ""), l.onregion && l.onregion(n), l.regionList.push({
                            id: e.get("id"),
                            region: n
                        })
                    }
                }

                function a(t) {
                    o(t, function(t, e) {
                        switch (t) {
                            case "Region":
                                s(e)
                        }
                    }, /:/)
                }
                var l = this;
                t && (l.buffer += l.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var c;
                    if ("INITIAL" === l.state) {
                        if (!/\r\n|\n/.test(l.buffer)) return this;
                        c = n();
                        var u = c.match(/^WEBVTT([ \t].*)?$/);
                        if (!u || !u[0]) throw new e(e.Errors.BadSignature);
                        l.state = "HEADER"
                    }
                    for (var d = !1; l.buffer;) {
                        if (!/\r\n|\n/.test(l.buffer)) return this;
                        switch (d ? d = !1 : c = n(), l.state) {
                            case "HEADER":
                                /:/.test(c) ? a(c) : c || (l.state = "ID");
                                continue;
                            case "NOTE":
                                c || (l.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(c)) {
                                    l.state = "NOTE";
                                    break
                                }
                                if (!c) continue;
                                if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === c.indexOf("-->")) {
                                    l.cue.id = c;
                                    continue
                                }
                            case "CUE":
                                try {
                                    r(c, l.cue, l.regionList)
                                } catch (p) {
                                    l.reportOrThrowError(p), l.cue = null, l.state = "BADCUE";
                                    continue
                                }
                                l.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var h = -1 !== c.indexOf("-->");
                                if (!c || h && (d = !0)) {
                                    l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                    continue
                                }
                                l.cue.text && (l.cue.text += "\n"), l.cue.text += c;
                                continue;
                            case "BADCUE":
                                c || (l.state = "ID");
                                continue
                        }
                    }
                } catch (p) {
                    l.reportOrThrowError(p), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
                } catch (n) {
                    t.reportOrThrowError(n)
                }
                return t.onflush && t.onflush(), this
            }
        }, t.WebVTT = h
    }(this, this.vttjs || {}),
    function(t, e) {
        "use strict";

        function n(t, e) {
            var n = s.getElementById(e.id()),
                i = document.createElement("div");
            i.setAttribute("class", "videojs-background-wrap"), i.appendChild(n), t.container.appendChild(i);
            var o = document.createElement("style"),
                r = " .videojs-background-wrap .video-js.vjs-controls-disabled .vjs-poster { position: absolute; top: 0; left:0; width: 100%; height: 100%; background-size: 100%!important; background-size: cover!important; display: block!important; }.videojs-background-wrap .video-js.vjs-has-started .vjs-poster, .videojs-background-wrap .vjs-youtube .vjs-loading-spinner { display: none!important; }";
            o.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(o), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r))
        }

        function i(t, e) {
            var n = e.id();
            if (t.container === l) {
                l.style.height = "auto";
                var i = r.innerHeight > l.clientHeight ? "100%" : "auto";
                l.style.height = a.style.height = i
            }
            var o = t.container.clientWidth < r.innerWidth ? t.container.clientWidth : r.innerWidth,
                c = t.container.clientHeight < r.innerHeight ? t.container.clientHeight : r.innerHeight,
                u = o / c,
                d = s.getElementById(n),
                p = s.getElementById(n + "_" + t.mediaType + "_api");
            u < t.mediaAspect ? (e.width(c * t.mediaAspect), e.height(c), d.style.top = "0px", d.style.left = -(c * t.mediaAspect - o) / 2 + "px", p.style.width = c * t.mediaAspect + "px", p.style.height = c + "px") : (e.width(o), e.height(o / t.mediaAspect), d.style.top = -(o / t.mediaAspect - c) / 2 + "px", d.style.left = "0px", d.style.height = o / t.mediaAspect + "px", "html5" === t.mediaType ? (p.style.width = p.parentNode.style.width, p.style.height = "auto") : (p.style.width = p.parentNode.style.width, p.style.height = o / t.mediaAspect + "px"))
        }
        var o, r = t,
            s = document,
            a = s.getElementsByTagName("html")[0],
            l = s.getElementsByTagName("body")[0],
            c = {
                container: l,
                autoPlay: !0,
                mediaAspect: 16 / 9,
                mediaType: "html5",
                volume: 0
            };
        o = function(o) {
            var r = e.util.mergeOptions(c, o),
                a = this,
                u = s.getElementById(a.id() + "_" + r.mediaType + "_api");
            r.container !== l && "string" == typeof r.container && (r.container = s.getElementById(r.container)), n(r, a), i(r, a), a.volume(r.volume), r.autoPlay && a.play(), a.on("loadedmetadata", function(t) {
                "html5" === r.mediaType ? r.mediaAspect = u.videoWidth / u.videoHeight : void 0 !== u.vjs_getProperty && (r.mediaAspect = u.vjs_getProperty("videoWidth") / u.vjs_getProperty("videoHeight")), i(r, a)
            }), t.onresize = function() {
                i(r, a)
            }
        }, e.plugin("Background", o)
    }(window, window.videojs),
    function() {
        "use strict";

        function t(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
        }
        var e = 0,
            n = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(),
                this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var i in n) e.push(n[i]);
            for (var o = 0, r = e.length; r > o; o++) e[o][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.invokeAll("enable")
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            i = {},
            o = window.Waypoint,
            r = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete i[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            o.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in e) {
                var i = e[n],
                    o = i.newScroll > i.oldScroll,
                    r = o ? i.forward : i.backward;
                for (var s in this.waypoints[n]) {
                    var a = this.waypoints[n][s],
                        l = i.oldScroll < a.triggerPoint,
                        c = i.newScroll >= a.triggerPoint,
                        u = l && c,
                        d = !l && !c;
                    (u || d) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
            for (var p in t) t[p].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
            for (var i = 0, o = t.length; o > i; i++) t[i].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                n = e ? void 0 : this.adapter.offset(),
                i = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : n.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : n.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, c, u, d, p, h = this.waypoints[r][a],
                        f = h.options.offset,
                        v = h.triggerPoint,
                        m = 0,
                        g = null == v;
                    h.element !== h.element.window && (m = h.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, h.triggerPoint = m + l - f, c = v < s.oldScroll, u = h.triggerPoint >= s.oldScroll, d = c && u, p = !c && !u, !g && d ? (h.queueTrigger(s.backward), i[h.group.id] = h.group) : !g && p ? (h.queueTrigger(s.forward), i[h.group.id] = h.group) : g && s.oldScroll >= h.triggerPoint && (h.queueTrigger(s.forward), i[h.group.id] = h.group)
                }
            }
            return o.requestAnimationFrame(function() {
                for (var t in i) i[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in i) i[t].refresh()
        }, e.findByElement = function(t) {
            return i[t.waypointContextKey]
        }, window.onload = function() {
            r && r(), e.refreshAll()
        }, o.requestAnimationFrame = function(e) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            n.call(window, e)
        }, o.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function n(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
                vertical: {},
                horizontal: {}
            },
            o = window.Waypoint;
        n.prototype.add = function(t) {
            this.waypoints.push(t)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    o = "up" === n || "left" === n;
                i.sort(o ? e : t);
                for (var r = 0, s = i.length; s > r; r += 1) {
                    var a = i[r];
                    (a.options.continuous || r === i.length - 1) && a.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(e) {
            this.waypoints.sort(t);
            var n = o.Adapter.inArray(e, this.waypoints),
                i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var n = o.Adapter.inArray(e, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, n.prototype.remove = function(t) {
            var e = o.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(t) {
            return i[t.axis][t.name] || new n(t)
        }, o.Group = n
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            n = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, n) {
            t.prototype[n] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
            t[i] = e[i]
        }), n.adapters.push({
            name: "jquery",
            Adapter: t
        }), n.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var n = [],
                    i = arguments[0];
                return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
                    var o = t.extend({}, i, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), n.push(new e(o))
                }), n
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(),
    function(t) {
        t.fn.unveil = function(e, n) {
            function i() {
                var e = c.filter(function() {
                    var e = t(this);
                    if (!e.is(":hidden")) {
                        var n = r.scrollTop(),
                            i = n + r.height(),
                            o = e.offset().top,
                            a = o + e.height();
                        return a >= n - s && i + s >= o
                    }
                });
                o = e.trigger("unveil"), c = c.not(o)
            }
            var o, r = t(window),
                s = e || 0,
                a = window.devicePixelRatio > 1,
                l = a ? "data-src-retina" : "data-src",
                c = this;
            return this.one("unveil", function() {
                var t = this.getAttribute(l);
                t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof n && n.call(this))
            }), r.scroll(i), r.resize(i), i(), this
        }
    }(window.jQuery || window.Zepto), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, o) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
        },
        easeInQuad: function(t, e, n, i, o) {
            return i * (e /= o) * e + n
        },
        easeOutQuad: function(t, e, n, i, o) {
            return -i * (e /= o) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, o) {
            return i * (e /= o) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, o) {
            return i * (e /= o) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, o) {
            return i * (e /= o) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, o) {
            return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, o) {
            return i * Math.sin(e / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
        },
        easeInExpo: function(t, e, n, i, o) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, o) {
            return e == o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, o) {
            return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, o) {
            return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, o) {
            return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s)) + n
        },
        easeOutElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - r) * Math.PI / s) + i + n
        },
        easeInOutElastic: function(t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= o / 2)) return n + i;
            if (s || (s = .3 * o * 1.5), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
        },
        easeOutBack: function(t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * e * e * (((r *= 1.525) + 1) * e - r) + n : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n
        },
        easeInBounce: function(t, e, n, i, o) {
            return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
        },
        easeOutBounce: function(t, e, n, i, o) {
            return (e /= o) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, n, i, o, r, s, a = "Close",
            l = "BeforeClose",
            c = "AfterClose",
            u = "BeforeAppend",
            d = "MarkupParse",
            p = "Open",
            h = "Change",
            f = "mfp",
            v = "." + f,
            m = "mfp-ready",
            g = "mfp-removing",
            y = "mfp-prevent-close",
            b = function() {},
            w = !!window.jQuery,
            x = t(window),
            T = function(t, n) {
                e.ev.on(f + t + v, n)
            },
            k = function(e, n, i, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r
            },
            S = function(n, i) {
                e.ev.triggerHandler(f + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
            },
            C = function(n) {
                return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
            },
            j = function() {
                t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
            },
            E = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var n = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
            },
            open: function(n) {
                var o;
                if (n.isObj === !1) {
                    e.items = n.items.toArray(), e.index = 0;
                    var s, a = n.items;
                    for (o = 0; o < a.length; o++)
                        if (s = a[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                            e.index = o;
                            break
                        }
                } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", e.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = k("bg").on("click" + v, function() {
                    e.close()
                }), e.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = k("container", e.wrap)), e.contentContainer = k("content"), e.st.preloader && (e.preloader = k("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var c = l[o];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                S("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (T(d, function(t, e, n, i) {
                    n.close_replaceWith = C(i.type)
                }), r += " mfp-close-btn-in") : e.wrap.append(C())), e.st.alignTop && (r += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? {
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                } : {
                    top: x.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && i.on("keyup" + v, function(t) {
                    27 === t.keyCode && e.close()
                }), x.on("resize" + v, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var u = e.wH = x.height(),
                    h = {};
                if (e.fixedContentPos && e._hasScrollBar(u)) {
                    var f = e._getScrollbarSize();
                    f && (h.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : h.overflow = "hidden");
                var g = e.st.mainClass;
                return e.isIE7 && (g += " mfp-ie7"), g && e._addClassToMFP(g), e.updateItemHTML(), S("BuildControls"), t("html").css(h), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), i.on("focusin" + v, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(u), S(p), n
            },
            close: function() {
                e.isOpen && (S(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(g), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                S(a);
                var n = g + " " + m + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
                }
                i.off("keyup" + v + " focusin" + v), e.ev.off(v), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, S(c)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * n;
                    e.wrap.css("height", i), e.wH = i
                } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), S("Resize")
            },
            updateItemHTML: function() {
                var n = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (S("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                    var r = e.st[i] ? e.st[i].markup : !1;
                    S("FirstMarkupParse", r), e.currTemplate[i] = r ? t(r) : !0
                }
                o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");
                var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
                e.appendContent(s, i), n.preloaded = !0, S(h, n), o = n.type, e.container.prepend(e.contentContainer), S("AfterChange")
            },
            appendContent: function(t, n) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(C()) : e.content = t : e.content = "", S(u), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(n) {
                var i, o = e.items[n];
                if (o.tagName ? o = {
                        el: t(o)
                    } : (i = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var r = e.types, s = 0; s < r.length; s++)
                        if (o.el.hasClass("mfp-" + r[s])) {
                            i = r[s];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, S("ElementParse", o), e.items[n]
            },
            addGroup: function(t, n) {
                var i = function(i) {
                    i.mfpEl = this, e._openClick(i, t, n)
                };
                n || (n = {});
                var o = "click.magnificPopup";
                n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)))
            },
            _openClick: function(n, i, o) {
                var r = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (r || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                    var s = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0
                        } else if (x.width() < s) return !0;
                    n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, i) {
                if (e.preloader) {
                    n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                    var o = {
                        status: t,
                        text: i
                    };
                    S("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), n = t
                }
            },
            _checkIfClose: function(n) {
                if (!t(n).hasClass(y)) {
                    var i = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (i && o) return !0;
                    if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                    if (n === e.content[0] || t.contains(e.content[0], n)) {
                        if (i) return !0
                    } else if (o && t.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || x.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, n, i) {
                var o;
                i.data && (n = t.extend(i.data, n)), S(d, [e, n, i]), t.each(n, function(n, i) {
                    if (void 0 === i || i === !1) return !0;
                    if (o = n.split("_"), o.length > 1) {
                        var r = e.find(v + "-" + o[0]);
                        if (r.length > 0) {
                            var s = o[1];
                            "replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(t("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i)
                        }
                    } else e.find(v + "-" + n).html(i)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(e, n) {
                return j(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = n || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, n) {
                n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(n) {
            j();
            var i = t(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var o, r = w ? i.data("magnificPopup") : i[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), e._openClick({
                        mfpEl: o
                    }, i, r)
                } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
            else n = t.extend(!0, {}, n), w ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
            return i
        };
        var A, N, P, $ = "inline",
            M = function() {
                P && (N.after(P.addClass(A)).detach(), P = null)
            };
        t.magnificPopup.registerModule($, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push($), T(a + "." + $, function() {
                        M()
                    })
                },
                getInline: function(n, i) {
                    if (M(), n.src) {
                        var o = e.st.inline,
                            r = t(n.src);
                        if (r.length) {
                            var s = r[0].parentNode;
                            s && s.tagName && (N || (A = o.hiddenClass, N = k(A), A = "mfp-" + A), P = r.after(N).detach().removeClass(A)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return n.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
                }
            }
        });
        var O, I = "ajax",
            L = function() {
                O && t(document.body).removeClass(O)
            },
            D = function() {
                L(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(I), O = e.st.ajax.cursor, T(a + "." + I, D), T("BeforeChange." + I, D)
                },
                getAjax: function(n) {
                    O && t(document.body).addClass(O), e.updateStatus("loading");
                    var i = t.extend({
                        url: n.src,
                        success: function(i, o, r) {
                            var s = {
                                data: i,
                                xhr: r
                            };
                            S("ParseAjax", s), e.appendContent(t(s.data), I), n.finished = !0, L(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(m)
                            }, 16), e.updateStatus("ready"), S("AjaxContentAdded")
                        },
                        error: function() {
                            L(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(i), ""
                }
            }
        });
        var H, F = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = e.st.image.titleSrc;
            if (i) {
                if (t.isFunction(i)) return i.call(e, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var n = e.st.image,
                        i = ".image";
                    e.types.push("image"), T(p + i, function() {
                        "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                    }), T(a + i, function() {
                        n.cursor && t(document.body).removeClass(n.cursor), x.off("resize" + v)
                    }), T("Resize" + i, e.resizeImage), e.isLowIE && T("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var n = 0;
                        e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, H && clearInterval(H), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var n = 0,
                        i = t.img[0],
                        o = function(r) {
                            H && clearInterval(H), H = setInterval(function() {
                                return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(H), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                            }, r)
                        };
                    o(1)
                },
                getImage: function(n, i) {
                    var o = 0,
                        r = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
                        },
                        s = function() {
                            n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        a = e.st.image,
                        l = i.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return e._parseMarkup(i, {
                        title: F(n),
                        img_replaceWith: n.img
                    }, n), e.resizeImage(), n.hasSize ? (H && clearInterval(H), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
                }
            }
        });
        var q, z = function() {
            return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform), q
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, n = e.st.zoom,
                        i = ".zoom";
                    if (n.enabled && e.supportsTransition) {
                        var o, r, s = n.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    i = "all " + n.duration / 1e3 + "s " + n.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    r = "transition";
                                return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e
                            },
                            u = function() {
                                e.content.css("visibility", "visible")
                            };
                        T("BuildControls" + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void u();
                                r = c(t), r.css(e._getOffset()), e.wrap.append(r), o = setTimeout(function() {
                                    r.css(e._getOffset(!0)), o = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            r.remove(), t = r = null, S("ZoomAnimationEnded")
                                        }, 16)
                                    }, s)
                                }, 16)
                            }
                        }), T(l + i, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = s, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    r = c(t)
                                }
                                r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    r.css(e._getOffset())
                                }, 16)
                            }
                        }), T(a + i, function() {
                            e._allowZoom() && (u(), r && r.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(n) {
                    var i;
                    i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = i.offset(),
                        r = parseInt(i.css("padding-top"), 10),
                        s = parseInt(i.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var a = {
                        width: i.width(),
                        height: (w ? i.innerHeight() : i[0].offsetHeight) - s - r
                    };
                    return z() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var R = "iframe",
            B = "//about:blank",
            W = function(t) {
                if (e.currTemplate[R]) {
                    var n = e.currTemplate[R].find("iframe");
                    n.length && (t || (n[0].src = B), e.isIE8 && n.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(R, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(R), T("BeforeChange", function(t, e, n) {
                        e !== n && (e === R ? W() : n === R && W(!0))
                    }), T(a + "." + R, function() {
                        W()
                    })
                },
                getIframe: function(n, i) {
                    var o = n.src,
                        r = e.st.iframe;
                    t.each(r.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var s = {};
                    return r.srcAction && (s[r.srcAction] = o), e._parseMarkup(i, s, n), e.updateStatus("ready"), i
                }
            }
        });
        var _ = function(t) {
                var n = e.items.length;
                return t > n - 1 ? t - n : 0 > t ? n + t : t
            },
            V = function(t, e, n) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = e.st.gallery,
                        o = ".mfp-gallery";
                    return e.direction = !0, n && n.enabled ? (r += " mfp-gallery", T(p + o, function() {
                        n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), i.on("keydown" + o, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), T("UpdateStatus" + o, function(t, n) {
                        n.text && (n.text = V(n.text, e.currItem.index, e.items.length))
                    }), T(d + o, function(t, i, o, r) {
                        var s = e.items.length;
                        o.counter = s > 1 ? V(n.tCounter, r.index, s) : ""
                    }), T("BuildControls" + o, function() {
                        if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                            var i = n.arrowMarkup,
                                o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                            o.click(function() {
                                e.prev()
                            }), r.click(function() {
                                e.next()
                            }), e.container.append(o.add(r))
                        }
                    }), T(h + o, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void T(a + o, function() {
                        i.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    e.direction = !0, e.index = _(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = _(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, n = e.st.gallery.preload,
                        i = Math.min(n[0], e.items.length),
                        o = Math.min(n[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : i); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? i : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(n) {
                    if (n = _(n), !e.items[n].preloaded) {
                        var i = e.items[n];
                        i.parsed || (i = e.parseEl(n)), S("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            i.hasSize = !0
                        }).on("error.mfploader", function() {
                            i.hasSize = !0, i.loadError = !0, S("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        t.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            n = t.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (T("ImageHasSize." + U, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), T("ElementParse." + U, function(e, i) {
                            i.src = t.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }), j()
    }),
    function(t) {
        "use strict";

        function e() {
            w(!0)
        }
        var n = {};
        t.respond = n, n.update = function() {};
        var i = [],
            o = function() {
                var e = !1;
                try {
                    e = new t.XMLHttpRequest
                } catch (n) {
                    e = new t.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return e
                }
            }(),
            r = function(t, e) {
                var n = o();
                n && (n.open("GET", t, !0), n.onreadystatechange = function() {
                    4 !== n.readyState || 200 !== n.status && 304 !== n.status || e(n.responseText)
                }, 4 !== n.readyState && n.send(null))
            };
        if (n.ajax = r, n.queue = i, n.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
            }, n.mediaQueriesSupported = t.matchMedia && null !== t.matchMedia("only all") && t.matchMedia("only all").matches, !n.mediaQueriesSupported) {
            var s, a, l, c = t.document,
                u = c.documentElement,
                d = [],
                p = [],
                h = [],
                f = {},
                v = 30,
                m = c.getElementsByTagName("head")[0] || u,
                g = c.getElementsByTagName("base")[0],
                y = m.getElementsByTagName("link"),
                b = function() {
                    var t, e = c.createElement("div"),
                        n = c.body,
                        i = u.style.fontSize,
                        o = n && n.style.fontSize,
                        r = !1;
                    return e.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = r = c.createElement("body"), n.style.background = "none"), u.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(e), r && u.insertBefore(n, u.firstChild), t = e.offsetWidth, r ? u.removeChild(n) : n.removeChild(e), u.style.fontSize = i, o && (n.style.fontSize = o), t = l = parseFloat(t)
                },
                w = function(e) {
                    var n = "clientWidth",
                        i = u[n],
                        o = "CSS1Compat" === c.compatMode && i || c.body[n] || i,
                        r = {},
                        f = y[y.length - 1],
                        g = (new Date).getTime();
                    if (e && s && v > g - s) return t.clearTimeout(a), void(a = t.setTimeout(w, v));
                    s = g;
                    for (var x in d)
                        if (d.hasOwnProperty(x)) {
                            var T = d[x],
                                k = T.minw,
                                S = T.maxw,
                                C = null === k,
                                j = null === S,
                                E = "em";
                            k && (k = parseFloat(k) * (k.indexOf(E) > -1 ? l || b() : 1)), S && (S = parseFloat(S) * (S.indexOf(E) > -1 ? l || b() : 1)), T.hasquery && (C && j || !(C || o >= k) || !(j || S >= o)) || (r[T.media] || (r[T.media] = []), r[T.media].push(p[T.rules]))
                        }
                    for (var A in h) h.hasOwnProperty(A) && h[A] && h[A].parentNode === m && m.removeChild(h[A]);
                    h.length = 0;
                    for (var N in r)
                        if (r.hasOwnProperty(N)) {
                            var P = c.createElement("style"),
                                $ = r[N].join("\n");
                            P.type = "text/css", P.media = N, m.insertBefore(P, f.nextSibling), P.styleSheet ? P.styleSheet.cssText = $ : P.appendChild(c.createTextNode($)), h.push(P)
                        }
                },
                x = function(t, e, i) {
                    var o = t.replace(n.regex.keyframes, "").match(n.regex.media),
                        r = o && o.length || 0;
                    e = e.substring(0, e.lastIndexOf("/"));
                    var s = function(t) {
                            return t.replace(n.regex.urls, "$1" + e + "$2$3")
                        },
                        a = !r && i;
                    e.length && (e += "/"), a && (r = 1);
                    for (var l = 0; r > l; l++) {
                        var c, u, h, f;
                        a ? (c = i, p.push(s(t))) : (c = o[l].match(n.regex.findStyles) && RegExp.$1, p.push(RegExp.$2 && s(RegExp.$2))), h = c.split(","), f = h.length;
                        for (var v = 0; f > v; v++) u = h[v], d.push({
                            media: u.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                            rules: p.length - 1,
                            hasquery: u.indexOf("(") > -1,
                            minw: u.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: u.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    w()
                },
                T = function() {
                    if (i.length) {
                        var e = i.shift();
                        r(e.href, function(n) {
                            x(n, e.href, e.media), f[e.href] = !0, t.setTimeout(function() {
                                T()
                            }, 0)
                        })
                    }
                },
                k = function() {
                    for (var e = 0; e < y.length; e++) {
                        var n = y[e],
                            o = n.href,
                            r = n.media,
                            s = n.rel && "stylesheet" === n.rel.toLowerCase();
                        o && s && !f[o] && (n.styleSheet && n.styleSheet.rawCssText ? (x(n.styleSheet.rawCssText, o, r), f[o] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(o) && !g || o.replace(RegExp.$1, "").split("/")[0] === t.location.host) && ("//" === o.substring(0, 2) && (o = t.location.protocol + o), i.push({
                            href: o,
                            media: r
                        })))
                    }
                    T()
                };
            k(), n.update = k, n.getEmValue = b, t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
        }
    }(this), ! function(t, e, n) {
        var i = t.jQuery || t.Zepto || t.ender || t.elo;
        "undefined" != typeof module && module.exports ? module.exports = n(i) : t[e] = n(i)
    }(this, "Response", function(t) {
        function e(t) {
            return t === +t
        }

        function n(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function i(t, e) {
            var n = this.call();
            return n >= (t || 0) && (!e || e >= n)
        }

        function o(t, e, n) {
            for (var i = [], o = t.length, r = 0; o > r;) i[r] = e.call(n, t[r], r++, t);
            return i
        }

        function r(t) {
            return t ? l("string" == typeof t ? t.split(" ") : t) : []
        }

        function s(t, e, n) {
            if (null == t) return t;
            for (var i = t.length, o = 0; i > o;) e.call(n || t[o], t[o], o++, t);
            return t
        }

        function a(t, e, n) {
            null == e && (e = ""), null == n && (n = "");
            for (var i = [], o = t.length, r = 0; o > r; r++) null == t[r] || i.push(e + t[r] + n);
            return i
        }

        function l(t, e, n) {
            var i, o, r, s = [],
                a = 0,
                l = 0,
                c = "function" == typeof e,
                u = !0 === n;
            for (o = t && t.length, n = u ? null : n; o > l; l++) r = t[l], i = c ? !e.call(n, r, l, t) : e ? typeof r !== e : !r, i === u && (s[a++] = r);
            return s
        }

        function c(t, n) {
            if (null == t || null == n) return t;
            if ("object" == typeof n && e(n.length)) Z.apply(t, l(n, "undefined", !0));
            else
                for (var i in n) nt.call(n, i) && void 0 !== n[i] && (t[i] = n[i]);
            return t
        }

        function u(t, n, i) {
            return null == t ? t : ("object" == typeof t && !t.nodeType && e(t.length) ? s(t, n, i) : n.call(i || t, t), t)
        }

        function d(t) {
            var e = V.devicePixelRatio;
            return null == t ? e || (d(2) ? 2 : d(1.5) ? 1.5 : d(1) ? 1 : 0) : isFinite(t) ? e && e > 0 ? e >= t : (t = "only all and (min--moz-device-pixel-ratio:" + t + ")", Ct(t) ? !0 : Ct(t.replace("-moz-", ""))) : !1
        }

        function p(t) {
            return t.replace(bt, "$1").replace(yt, function(t, e) {
                return e.toUpperCase()
            })
        }

        function h(t) {
            return "data-" + (t ? t.replace(bt, "$1").replace(gt, "$1-$2").toLowerCase() : t)
        }

        function f(t) {
            var e;
            return "string" == typeof t && t ? "false" === t ? !1 : "true" === t ? !0 : "null" === t ? null : "undefined" === t || (e = +t) || 0 === e || "NaN" === t ? e : t : t
        }

        function v(t) {
            return !t || t.nodeType ? t : t[0]
        }

        function m(t, e, n) {
            var i, o, r, s, a;
            if (t.attributes)
                for (i = "boolean" == typeof n ? /^data-/ : i, s = 0, a = t.attributes.length; a > s;)(r = t.attributes[s++]) && (o = "" + r.name, i && i.test(o) !== n || null == r.value || e.call(t, r.value, o, r))
        }

        function g(t) {
            var e;
            if (t && 1 === t.nodeType) return (e = G && t.dataset) ? e : (e = {}, m(t, function(t, n) {
                e[p(n)] = "" + t
            }, !0), e)
        }

        function y(t, e, n) {
            for (var i in e) nt.call(e, i) && n(t, i, e[i])
        }

        function b(t, e, n) {
            if (t = v(t), t && t.setAttribute) {
                if (void 0 === e && n === e) return g(t);
                var i = it(e) && h(e[0]);
                if ("object" != typeof e || i) {
                    if (e = i || h(e), !e) return;
                    return void 0 === n ? (e = t.getAttribute(e), null == e ? n : i ? f(e) : "" + e) : (t.setAttribute(e, n = "" + n), n)
                }
                e && y(t, e, b)
            }
        }

        function w(t, e) {
            e = r(e), u(t, function(t) {
                s(e, function(e) {
                    t.removeAttribute(h(e))
                })
            })
        }

        function x(t) {
            for (var e, n = [], i = 0, o = t.length; o > i;)(e = t[i++]) && n.push("[" + h(e.replace(mt, "").replace(".", "\\.")) + "]");
            return n.join()
        }

        function T(e) {
            return t(x(r(e)))
        }

        function k() {
            return window.pageXOffset || X.scrollLeft
        }

        function S() {
            return window.pageYOffset || X.scrollTop
        }

        function C(t, e) {
            var n = t.getBoundingClientRect ? t.getBoundingClientRect() : {};
            return e = "number" == typeof e ? e || 0 : 0, {
                top: (n.top || 0) - e,
                left: (n.left || 0) - e,
                bottom: (n.bottom || 0) + e,
                right: (n.right || 0) + e
            }
        }

        function j(t, e) {
            var n = C(v(t), e);
            return !!n && n.right >= 0 && n.left <= jt()
        }

        function E(t, e) {
            var n = C(v(t), e);
            return !!n && n.bottom >= 0 && n.top <= Et()
        }

        function A(t, e) {
            var n = C(v(t), e);
            return !!n && n.bottom >= 0 && n.top <= Et() && n.right >= 0 && n.left <= jt()
        }

        function N(t) {
            var e = {
                    img: 1,
                    input: 1,
                    source: 3,
                    embed: 3,
                    track: 3,
                    iframe: 5,
                    audio: 5,
                    video: 5,
                    script: 5
                },
                n = e[t.nodeName.toLowerCase()] || -1;
            return 4 > n ? n : null != t.getAttribute("src") ? 5 : -5
        }

        function P(t, e, n) {
            var i;
            if (!t || null == e) throw new TypeError("@store");
            return n = "string" == typeof n && n, u(t, function(t) {
                i = n ? t.getAttribute(n) : 0 < N(t) ? t.getAttribute("src") : t.innerHTML, null == i ? w(t, e) : b(t, e, i)
            }), q
        }

        function $(t, e) {
            var n = [];
            return t && e && s(r(e), function(e) {
                n.push(b(t, e))
            }, t), n
        }

        function M(t, e) {
            return "string" == typeof t && "function" == typeof e && (rt[t] = e, st[t] = 1), q
        }

        function O(t) {
            return Q.on("resize", t), q
        }

        function I(t, e) {
            var n, i, o = Tt.crossover;
            return "function" == typeof t && (n = e, e = t, t = n), i = t ? "" + t + o : o, Q.on(i, e), q
        }

        function L(t) {
            return u(t, function(t) {
                Y(t), O(t)
            }), q
        }

        function D(t) {
            return u(t, function(t) {
                if ("object" != typeof t) throw new TypeError("@create");
                var e, n = wt(z).configure(t),
                    i = n.verge,
                    o = n.breakpoints,
                    r = xt("scroll"),
                    a = xt("resize");
                o.length && (e = o[0] || o[1] || !1, Y(function() {
                    function t() {
                        n.reset(), s(n.$e, function(t, e) {
                            n[e].decideValue().updateDOM()
                        }).trigger(l)
                    }

                    function o() {
                        s(n.$e, function(t, e) {
                            A(n[e].$e, i) && n[e].updateDOM()
                        })
                    }
                    var l = Tt.allLoaded,
                        c = !!n.lazy;
                    s(n.target().$e, function(t, e) {
                        n[e] = wt(n).prepareData(t), (!c || A(n[e].$e, i)) && n[e].updateDOM()
                    }), n.dynamic && (n.custom || dt > e) && O(t, a), c && (Q.on(r, o), n.$e.one(l, function() {
                        Q.off(r, o)
                    }))
                }))
            }), q
        }

        function H(t) {
            return R[B] === q && (R[B] = W), "function" == typeof t && t.call(R, q), q
        }
        if ("function" != typeof t) try {
            return void console.warn("response.js aborted due to missing dependency")
        } catch (F) {}
        var q, z, R = this,
            B = "Response",
            W = R[B],
            _ = "init" + B,
            V = window,
            U = document,
            X = U.documentElement,
            Y = t.domReady || t,
            Q = t(V),
            G = "undefined" != typeof DOMStringMap,
            J = Array.prototype,
            K = Object.prototype,
            Z = J.push,
            tt = J.concat,
            et = K.toString,
            nt = K.hasOwnProperty,
            it = Array.isArray || function(t) {
                return "[object Array]" === et.call(t)
            },
            ot = {
                width: [0, 320, 481, 641, 961, 1025, 1281],
                height: [0, 481],
                ratio: [1, 1.5, 2]
            },
            rt = {},
            st = {},
            at = {
                all: []
            },
            lt = 1,
            ct = screen.width,
            ut = screen.height,
            dt = ct > ut ? ct : ut,
            pt = ct + ut - dt,
            ht = function() {
                return ct
            },
            ft = function() {
                return ut
            },
            vt = /[^a-z0-9_\-\.]/gi,
            mt = /^[\W\s]+|[\W\s]+$|/g,
            gt = /([a-z])([A-Z])/g,
            yt = /-(.)/g,
            bt = /^data-(.+)$/,
            wt = Object.create || function(t) {
                function e() {}
                return e.prototype = t, new e
            },
            xt = function(t, e) {
                return e = e || B, t.replace(mt, "") + "." + e.replace(mt, "")
            },
            Tt = {
                allLoaded: xt("allLoaded"),
                crossover: xt("crossover")
            },
            kt = V.matchMedia || V.msMatchMedia,
            St = kt ? n(kt, V) : function() {
                return {}
            },
            Ct = kt ? function(t) {
                return !!kt.call(V, t).matches
            } : function() {
                return !1
            },
            jt = function() {
                var t = X.clientWidth,
                    e = V.innerWidth;
                return e > t ? e : t
            },
            Et = function() {
                var t = X.clientHeight,
                    e = V.innerHeight;
                return e > t ? e : t
            },
            At = n(i, jt),
            Nt = n(i, Et),
            Pt = {
                band: n(i, ht),
                wave: n(i, ft)
            };
        return z = function() {
            function e(t) {
                return "string" == typeof t ? t.toLowerCase().replace(vt, "") : ""
            }

            function n(t, e) {
                return t - e
            }
            var i = Tt.crossover,
                u = Math.min;
            return {
                $e: 0,
                mode: 0,
                breakpoints: null,
                prefix: null,
                prop: "width",
                keys: [],
                dynamic: null,
                custom: 0,
                values: [],
                fn: 0,
                verge: null,
                newValue: 0,
                currValue: 1,
                aka: null,
                lazy: null,
                i: 0,
                uid: null,
                reset: function() {
                    for (var t = this.breakpoints, e = t.length, n = 0; !n && e--;) this.fn(t[e]) && (n = e);
                    return n !== this.i && (Q.trigger(i).trigger(this.prop + i), this.i = n || 0), this
                },
                configure: function(t) {
                    c(this, t);
                    var i, d, p, h, f, v = !0,
                        m = this.prop;
                    if (this.uid = lt++, null == this.verge && (this.verge = u(dt, 500)), !(this.fn = rt[m])) throw new TypeError("@create");
                    if (null == this.dynamic && (this.dynamic = "device" !== m.slice(0, 6)), this.custom = st[m], p = this.prefix ? l(o(r(this.prefix), e)) : ["min-" + m + "-"], h = 1 < p.length ? p.slice(1) : 0, this.prefix = p[0], d = this.breakpoints, it(d)) {
                        if (s(d, function(t) {
                                if (!t && 0 !== t) throw "invalid breakpoint";
                                v = v && isFinite(t)
                            }), v && d.sort(n), !d.length) throw new TypeError(".breakpoints")
                    } else if (d = ot[m] || ot[m.split("-").pop()], !d) throw new TypeError(".prop");
                    if (this.breakpoints = d, this.keys = a(this.breakpoints, this.prefix), this.aka = null, h) {
                        for (f = [], i = h.length; i--;) f.push(a(this.breakpoints, h[i]));
                        this.aka = f, this.keys = tt.apply(this.keys, f)
                    }
                    return at.all = at.all.concat(at[this.uid] = this.keys), this
                },
                target: function() {
                    return this.$e = t(x(at[this.uid])), P(this.$e, _), this.keys.push(_), this
                },
                decideValue: function() {
                    for (var t = null, e = this.breakpoints, n = e.length, i = n; null == t && i--;) this.fn(e[i]) && (t = this.values[i]);
                    return this.newValue = "string" == typeof t ? t : this.values[n], this
                },
                prepareData: function(e) {
                    if (this.$e = t(e), this.mode = N(e), this.values = $(this.$e, this.keys), this.aka)
                        for (var n = this.aka.length; n--;) this.values = c(this.values, $(this.$e, this.aka[n]));
                    return this.decideValue()
                },
                updateDOM: function() {
                    return this.currValue === this.newValue ? this : (this.currValue = this.newValue, 0 < this.mode ? this.$e[0].setAttribute("src", this.newValue) : null == this.newValue ? this.$e.empty && this.$e.empty() : this.$e.html ? this.$e.html(this.newValue) : (this.$e.empty && this.$e.empty(), this.$e[0].innerHTML = this.newValue), this)
                }
            }
        }(), rt.width = At, rt.height = Nt, rt["device-width"] = Pt.band, rt["device-height"] = Pt.wave, rt["device-pixel-ratio"] = d, q = {
            deviceMin: function() {
                return pt
            },
            deviceMax: function() {
                return dt
            },
            noConflict: H,
            create: D,
            addTest: M,
            datatize: h,
            camelize: p,
            render: f,
            store: P,
            access: $,
            target: T,
            object: wt,
            crossover: I,
            action: L,
            resize: O,
            ready: Y,
            affix: a,
            sift: l,
            dpr: d,
            deletes: w,
            scrollX: k,
            scrollY: S,
            deviceW: ht,
            deviceH: ft,
            device: Pt,
            inX: j,
            inY: E,
            route: u,
            merge: c,
            media: St,
            mq: Ct,
            wave: Nt,
            band: At,
            map: o,
            each: s,
            inViewport: A,
            dataset: b,
            viewportH: Et,
            viewportW: jt
        }, Y(function() {
            var e = b(U.body, "responsejs"),
                n = V.JSON && JSON.parse || t.parseJSON;
            e = e && n ? n(e) : e, e && e.create && D(e.create), X.className = X.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs "
        }), q
    }),
    function t(e, n, i) {
        function o(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var n = e[s][1][t];
                    return o(n ? n : t)
                }, u, u.exports, t, e, n, i)
            }
            return n[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) o(i[s]);
        return o
    }({
        1: [function(t, e, n) {
            ! function(n, i) {
                "use strict";
                var o = n.document,
                    r = t("string-natural-compare"),
                    s = t("./src/utils/get-by-class"),
                    a = t("./src/utils/extend"),
                    l = t("./src/utils/index-of"),
                    c = t("./src/utils/events"),
                    u = t("./src/utils/to-string"),
                    d = t("./src/utils/classes"),
                    p = t("./src/utils/get-attribute"),
                    h = t("./src/utils/to-array"),
                    f = function(e, n, v) {
                        var m, g = this,
                            y = t("./src/item")(g),
                            b = t("./src/add-async")(g);
                        m = {
                            start: function() {
                                g.listClass = "list", g.searchClass = "search", g.sortClass = "sort", g.page = 1e4, g.i = 1, g.items = [], g.visibleItems = [], g.matchingItems = [], g.searched = !1, g.filtered = !1, g.searchColumns = i, g.handlers = {
                                    updated: []
                                }, g.plugins = {}, g.valueNames = [], g.utils = {
                                    getByClass: s,
                                    extend: a,
                                    indexOf: l,
                                    events: c,
                                    toString: u,
                                    naturalSort: r,
                                    classes: d,
                                    getAttribute: p,
                                    toArray: h
                                }, g.utils.extend(g, n), g.listContainer = "string" == typeof e ? o.getElementById(e) : e, g.listContainer && (g.list = s(g.listContainer, g.listClass, !0), g.parse = t("./src/parse")(g), g.templater = t("./src/templater")(g), g.search = t("./src/search")(g), g.filter = t("./src/filter")(g), g.sort = t("./src/sort")(g), this.handlers(), this.items(), g.update(), this.plugins())
                            },
                            handlers: function() {
                                for (var t in g.handlers) g[t] && g.on(t, g[t])
                            },
                            items: function() {
                                g.parse(g.list), v !== i && g.add(v)
                            },
                            plugins: function() {
                                for (var t = 0; t < g.plugins.length; t++) {
                                    var e = g.plugins[t];
                                    g[e.name] = e, e.init(g, f)
                                }
                            }
                        }, this.reIndex = function() {
                            g.items = [], g.visibleItems = [], g.matchingItems = [], g.searched = !1, g.filtered = !1, g.parse(g.list)
                        }, this.toJSON = function() {
                            for (var t = [], e = 0, n = g.items.length; n > e; e++) t.push(g.items[e].values());
                            return t
                        }, this.add = function(t, e) {
                            if (0 !== t.length) {
                                if (e) return void b(t, e);
                                var n = [],
                                    o = !1;
                                t[0] === i && (t = [t]);
                                for (var r = 0, s = t.length; s > r; r++) {
                                    var a = null;
                                    o = g.items.length > g.page ? !0 : !1, a = new y(t[r], i, o), g.items.push(a), n.push(a)
                                }
                                return g.update(), n
                            }
                        }, this.show = function(t, e) {
                            return this.i = t, this.page = e, g.update(), g
                        }, this.remove = function(t, e, n) {
                            for (var i = 0, o = 0, r = g.items.length; r > o; o++) g.items[o].values()[t] == e && (g.templater.remove(g.items[o], n), g.items.splice(o, 1), r--, o--, i++);
                            return g.update(), i
                        }, this.get = function(t, e) {
                            for (var n = [], i = 0, o = g.items.length; o > i; i++) {
                                var r = g.items[i];
                                r.values()[t] == e && n.push(r)
                            }
                            return n
                        }, this.size = function() {
                            return g.items.length
                        }, this.clear = function() {
                            return g.templater.clear(), g.items = [], g
                        }, this.on = function(t, e) {
                            return g.handlers[t].push(e), g
                        }, this.off = function(t, e) {
                            var n = g.handlers[t],
                                i = l(n, e);
                            return i > -1 && n.splice(i, 1), g
                        }, this.trigger = function(t) {
                            for (var e = g.handlers[t].length; e--;) g.handlers[t][e](g);
                            return g
                        }, this.reset = {
                            filter: function() {
                                for (var t = g.items, e = t.length; e--;) t[e].filtered = !1;
                                return g
                            },
                            search: function() {
                                for (var t = g.items, e = t.length; e--;) t[e].found = !1;
                                return g
                            }
                        }, this.update = function() {
                            var t = g.items,
                                e = t.length;
                            g.visibleItems = [], g.matchingItems = [], g.templater.clear();
                            for (var n = 0; e > n; n++) t[n].matching() && g.matchingItems.length + 1 >= g.i && g.visibleItems.length < g.page ? (t[n].show(), g.visibleItems.push(t[n]), g.matchingItems.push(t[n])) : t[n].matching() ? (g.matchingItems.push(t[n]), t[n].hide()) : t[n].hide();
                            return g.trigger("updated"), g
                        }, m.start()
                    };
                "function" == typeof define && define.amd && define(function() {
                    return f
                }), e.exports = f, n.List = f
            }(window)
        }, {
            "./src/add-async": 3,
            "./src/filter": 4,
            "./src/item": 5,
            "./src/parse": 6,
            "./src/search": 7,
            "./src/sort": 8,
            "./src/templater": 9,
            "./src/utils/classes": 10,
            "./src/utils/events": 11,
            "./src/utils/extend": 12,
            "./src/utils/get-attribute": 13,
            "./src/utils/get-by-class": 14,
            "./src/utils/index-of": 15,
            "./src/utils/to-array": 16,
            "./src/utils/to-string": 17,
            "string-natural-compare": 2
        }],
        2: [function(t, e, n) {
            "use strict";

            function i(t) {
                return t >= 48 && 57 >= t
            }

            function o(t, e) {
                for (var n = (t += "").length, o = (e += "").length, r = 0, l = 0; n > r && o > l;) {
                    var c = t.charCodeAt(r),
                        u = e.charCodeAt(l);
                    if (i(c)) {
                        if (!i(u)) return c - u;
                        for (var d = r, p = l; 48 === c && ++d < n;) c = t.charCodeAt(d);
                        for (; 48 === u && ++p < o;) u = e.charCodeAt(p);
                        for (var h = d, f = p; n > h && i(t.charCodeAt(h));) ++h;
                        for (; o > f && i(e.charCodeAt(f));) ++f;
                        var v = h - d - f + p;
                        if (v) return v;
                        for (; h > d;)
                            if (v = t.charCodeAt(d++) - e.charCodeAt(p++)) return v;
                        r = h, l = f
                    } else {
                        if (c !== u) return a > c && a > u && -1 !== s[c] && -1 !== s[u] ? s[c] - s[u] : c - u;
                        ++r, ++l
                    }
                }
                return n - o
            }
            var r, s, a = 0;
            o.caseInsensitive = o.i = function(t, e) {
                return o(("" + t).toLowerCase(), ("" + e).toLowerCase())
            }, Object.defineProperties(o, {
                alphabet: {
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = t, s = [];
                        var e = 0;
                        if (r)
                            for (; e < r.length; e++) s[r.charCodeAt(e)] = e;
                        for (a = s.length, e = 0; a > e; e++) void 0 === s[e] && (s[e] = -1)
                    }
                }
            }), e.exports = o
        }, {}],
        3: [function(t, e, n) {
            e.exports = function(t) {
                var e = function(n, i, o) {
                    var r = n.splice(0, 50);
                    o = o || [], o = o.concat(t.add(r)), n.length > 0 ? setTimeout(function() {
                        e(n, i, o)
                    }, 1) : (t.update(), i(o))
                };
                return e
            }
        }, {}],
        4: [function(t, e, n) {
            e.exports = function(t) {
                return t.handlers.filterStart = t.handlers.filterStart || [], t.handlers.filterComplete = t.handlers.filterComplete || [],
                    function(e) {
                        if (t.trigger("filterStart"), t.i = 1, t.reset.filter(), void 0 === e) t.filtered = !1;
                        else {
                            t.filtered = !0;
                            for (var n = t.items, i = 0, o = n.length; o > i; i++) {
                                var r = n[i];
                                r.filtered = e(r) ? !0 : !1
                            }
                        }
                        return t.update(), t.trigger("filterComplete"), t.visibleItems
                    }
            }
        }, {}],
        5: [function(t, e, n) {
            e.exports = function(t) {
                return function(e, n, i) {
                    var o = this;
                    this._values = {}, this.found = !1, this.filtered = !1;
                    var r = function(e, n, i) {
                        if (void 0 === n) i ? o.values(e, i) : o.values(e);
                        else {
                            o.elm = n;
                            var r = t.templater.get(o, e);
                            o.values(r)
                        }
                    };
                    this.values = function(e, n) {
                        if (void 0 === e) return o._values;
                        for (var i in e) o._values[i] = e[i];
                        n !== !0 && t.templater.set(o, o.values())
                    }, this.show = function() {
                        t.templater.show(o)
                    }, this.hide = function() {
                        t.templater.hide(o)
                    }, this.matching = function() {
                        return t.filtered && t.searched && o.found && o.filtered || t.filtered && !t.searched && o.filtered || !t.filtered && t.searched && o.found || !t.filtered && !t.searched
                    }, this.visible = function() {
                        return o.elm && o.elm.parentNode == t.list ? !0 : !1
                    }, r(e, n, i)
                }
            }
        }, {}],
        6: [function(t, e, n) {
            e.exports = function(e) {
                var n = t("./item")(e),
                    i = function(t) {
                        for (var e = t.childNodes, n = [], i = 0, o = e.length; o > i; i++) void 0 === e[i].data && n.push(e[i]);
                        return n
                    },
                    o = function(t, i) {
                        for (var o = 0, r = t.length; r > o; o++) e.items.push(new n(i, t[o]))
                    },
                    r = function(t, n) {
                        var i = t.splice(0, 50);
                        o(i, n), t.length > 0 ? setTimeout(function() {
                            r(t, n)
                        }, 1) : (e.update(), e.trigger("parseComplete"))
                    };
                return e.handlers.parseComplete = e.handlers.parseComplete || [],
                    function() {
                        var t = i(e.list),
                            n = e.valueNames;
                        e.indexAsync ? r(t, n) : o(t, n)
                    }
            }
        }, {
            "./item": 5
        }],
        7: [function(t, e, n) {
            e.exports = function(t) {
                var e, n, i, o, r = {
                        resetList: function() {
                            t.i = 1, t.templater.clear(), o = void 0
                        },
                        setOptions: function(t) {
                            2 == t.length && t[1] instanceof Array ? n = t[1] : 2 == t.length && "function" == typeof t[1] ? (n = void 0, o = t[1]) : 3 == t.length ? (n = t[1], o = t[2]) : n = void 0
                        },
                        setColumns: function() {
                            0 !== t.items.length && void 0 === n && (n = void 0 === t.searchColumns ? r.toArray(t.items[0].values()) : t.searchColumns)
                        },
                        setSearchString: function(e) {
                            e = t.utils.toString(e).toLowerCase(), e = e.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), i = e
                        },
                        toArray: function(t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return e
                        }
                    },
                    s = {
                        list: function() {
                            for (var e = 0, n = t.items.length; n > e; e++) s.item(t.items[e])
                        },
                        item: function(t) {
                            t.found = !1;
                            for (var e = 0, i = n.length; i > e; e++)
                                if (s.values(t.values(), n[e])) return void(t.found = !0)
                        },
                        values: function(n, o) {
                            return n.hasOwnProperty(o) && (e = t.utils.toString(n[o]).toLowerCase(), "" !== i && e.search(i) > -1) ? !0 : !1
                        },
                        reset: function() {
                            t.reset.search(), t.searched = !1
                        }
                    },
                    a = function(e) {
                        return t.trigger("searchStart"), r.resetList(), r.setSearchString(e), r.setOptions(arguments), r.setColumns(), "" === i ? s.reset() : (t.searched = !0, o ? o(i, n) : s.list()), t.update(), t.trigger("searchComplete"), t.visibleItems
                    };
                return t.handlers.searchStart = t.handlers.searchStart || [], t.handlers.searchComplete = t.handlers.searchComplete || [], t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "keyup", function(e) {
                    var n = e.target || e.srcElement,
                        i = "" === n.value && !t.searched;
                    i || a(n.value)
                }), t.utils.events.bind(t.utils.getByClass(t.listContainer, t.searchClass), "input", function(t) {
                    var e = t.target || t.srcElement;
                    "" === e.value && a("")
                }), a
            }
        }, {}],
        8: [function(t, e, n) {
            e.exports = function(t) {
                var e = {
                        els: void 0,
                        clear: function() {
                            for (var n = 0, i = e.els.length; i > n; n++) t.utils.classes(e.els[n]).remove("asc"), t.utils.classes(e.els[n]).remove("desc")
                        },
                        getOrder: function(e) {
                            var n = t.utils.getAttribute(e, "data-order");
                            return "asc" == n || "desc" == n ? n : t.utils.classes(e).has("desc") ? "asc" : t.utils.classes(e).has("asc") ? "desc" : "asc"
                        },
                        getInSensitive: function(e, n) {
                            var i = t.utils.getAttribute(e, "data-insensitive");
                            n.insensitive = "false" === i ? !1 : !0
                        },
                        setOrder: function(n) {
                            for (var i = 0, o = e.els.length; o > i; i++) {
                                var r = e.els[i];
                                if (t.utils.getAttribute(r, "data-sort") === n.valueName) {
                                    var s = t.utils.getAttribute(r, "data-order");
                                    "asc" == s || "desc" == s ? s == n.order && t.utils.classes(r).add(n.order) : t.utils.classes(r).add(n.order)
                                }
                            }
                        }
                    },
                    n = function() {
                        t.trigger("sortStart");
                        var n = {},
                            i = arguments[0].currentTarget || arguments[0].srcElement || void 0;
                        i ? (n.valueName = t.utils.getAttribute(i, "data-sort"), e.getInSensitive(i, n), n.order = e.getOrder(i)) : (n = arguments[1] || n, n.valueName = arguments[0], n.order = n.order || "asc", n.insensitive = "undefined" == typeof n.insensitive ? !0 : n.insensitive), e.clear(), e.setOrder(n);
                        var o, r = n.sortFunction || t.sortFunction || null,
                            s = "desc" === n.order ? -1 : 1;
                        o = r ? function(t, e) {
                            return r(t, e, n) * s
                        } : function(e, i) {
                            var o = t.utils.naturalSort;
                            return o.alphabet = t.alphabet || n.alphabet || void 0, !o.alphabet && n.insensitive && (o = t.utils.naturalSort.caseInsensitive), o(e.values()[n.valueName], i.values()[n.valueName]) * s
                        }, t.items.sort(o), t.update(), t.trigger("sortComplete")
                    };
                return t.handlers.sortStart = t.handlers.sortStart || [], t.handlers.sortComplete = t.handlers.sortComplete || [], e.els = t.utils.getByClass(t.listContainer, t.sortClass), t.utils.events.bind(e.els, "click", n), t.on("searchStart", e.clear), t.on("filterStart", e.clear), n
            }
        }, {}],
        9: [function(t, e, n) {
            var i = function(t) {
                var e, n = this,
                    i = function() {
                        e = n.getItemSource(t.item), e && (e = n.clearSourceItem(e, t.valueNames))
                    };
                this.clearSourceItem = function(e, n) {
                    for (var i = 0, o = n.length; o > i; i++) {
                        var r;
                        if (n[i].data)
                            for (var s = 0, a = n[i].data.length; a > s; s++) e.setAttribute("data-" + n[i].data[s], "");
                        else n[i].attr && n[i].name ? (r = t.utils.getByClass(e, n[i].name, !0), r && r.setAttribute(n[i].attr, "")) : (r = t.utils.getByClass(e, n[i], !0), r && (r.innerHTML = ""));
                        r = void 0
                    }
                    return e
                }, this.getItemSource = function(e) {
                    if (void 0 === e) {
                        for (var n = t.list.childNodes, i = 0, o = n.length; o > i; i++)
                            if (void 0 === n[i].data) return n[i].cloneNode(!0)
                    } else {
                        if (/<tr[\s>]/g.exec(e)) {
                            var r = document.createElement("tbody");
                            return r.innerHTML = e, r.firstChild
                        }
                        if (-1 !== e.indexOf("<")) {
                            var s = document.createElement("div");
                            return s.innerHTML = e, s.firstChild
                        }
                        var a = document.getElementById(t.item);
                        if (a) return a
                    }
                    return void 0
                }, this.get = function(e, i) {
                    n.create(e);
                    for (var o = {}, r = 0, s = i.length; s > r; r++) {
                        var a;
                        if (i[r].data)
                            for (var l = 0, c = i[r].data.length; c > l; l++) o[i[r].data[l]] = t.utils.getAttribute(e.elm, "data-" + i[r].data[l]);
                        else i[r].attr && i[r].name ? (a = t.utils.getByClass(e.elm, i[r].name, !0), o[i[r].name] = a ? t.utils.getAttribute(a, i[r].attr) : "") : (a = t.utils.getByClass(e.elm, i[r], !0), o[i[r]] = a ? a.innerHTML : "");
                        a = void 0
                    }
                    return o
                }, this.set = function(e, i) {
                    var o = function(e) {
                            for (var n = 0, i = t.valueNames.length; i > n; n++)
                                if (t.valueNames[n].data) {
                                    for (var o = t.valueNames[n].data, r = 0, s = o.length; s > r; r++)
                                        if (o[r] === e) return {
                                            data: e
                                        }
                                } else {
                                    if (t.valueNames[n].attr && t.valueNames[n].name && t.valueNames[n].name == e) return t.valueNames[n];
                                    if (t.valueNames[n] === e) return e
                                }
                        },
                        r = function(n, i) {
                            var r, s = o(n);
                            s && (s.data ? e.elm.setAttribute("data-" + s.data, i) : s.attr && s.name ? (r = t.utils.getByClass(e.elm, s.name, !0), r && r.setAttribute(s.attr, i)) : (r = t.utils.getByClass(e.elm, s, !0), r && (r.innerHTML = i)), r = void 0)
                        };
                    if (!n.create(e))
                        for (var s in i) i.hasOwnProperty(s) && r(s, i[s])
                }, this.create = function(t) {
                    if (void 0 !== t.elm) return !1;
                    if (void 0 === e) throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
                    var i = e.cloneNode(!0);
                    return i.removeAttribute("id"), t.elm = i, n.set(t, t.values()), !0
                }, this.remove = function(e) {
                    e.elm.parentNode === t.list && t.list.removeChild(e.elm)
                }, this.show = function(e) {
                    n.create(e), t.list.appendChild(e.elm)
                }, this.hide = function(e) {
                    void 0 !== e.elm && e.elm.parentNode === t.list && t.list.removeChild(e.elm)
                }, this.clear = function() {
                    if (t.list.hasChildNodes())
                        for (; t.list.childNodes.length >= 1;) t.list.removeChild(t.list.firstChild)
                }, i()
            };
            e.exports = function(t) {
                return new i(t)
            }
        }, {}],
        10: [function(t, e, n) {
            function i(t) {
                if (!t || !t.nodeType) throw new Error("A DOM element reference is required");
                this.el = t, this.list = t.classList
            }
            var o = t("./index-of"),
                r = /\s+/,
                s = Object.prototype.toString;
            e.exports = function(t) {
                return new i(t)
            }, i.prototype.add = function(t) {
                if (this.list) return this.list.add(t), this;
                var e = this.array(),
                    n = o(e, t);
                return ~n || e.push(t), this.el.className = e.join(" "), this
            }, i.prototype.remove = function(t) {
                if ("[object RegExp]" == s.call(t)) return this.removeMatching(t);
                if (this.list) return this.list.remove(t), this;
                var e = this.array(),
                    n = o(e, t);
                return ~n && e.splice(n, 1), this.el.className = e.join(" "), this
            }, i.prototype.removeMatching = function(t) {
                for (var e = this.array(), n = 0; n < e.length; n++) t.test(e[n]) && this.remove(e[n]);
                return this
            }, i.prototype.toggle = function(t, e) {
                return this.list ? ("undefined" != typeof e ? e !== this.list.toggle(t, e) && this.list.toggle(t) : this.list.toggle(t), this) : ("undefined" != typeof e ? e ? this.add(t) : this.remove(t) : this.has(t) ? this.remove(t) : this.add(t), this)
            }, i.prototype.array = function() {
                var t = this.el.getAttribute("class") || "",
                    e = t.replace(/^\s+|\s+$/g, ""),
                    n = e.split(r);
                return "" === n[0] && n.shift(), n
            }, i.prototype.has = i.prototype.contains = function(t) {
                return this.list ? this.list.contains(t) : !!~o(this.array(), t)
            }
        }, {
            "./index-of": 15
        }],
        11: [function(t, e, n) {
            var i = window.addEventListener ? "addEventListener" : "attachEvent",
                o = window.removeEventListener ? "removeEventListener" : "detachEvent",
                r = "addEventListener" !== i ? "on" : "",
                s = t("./to-array");
            n.bind = function(t, e, n, o) {
                t = s(t);
                for (var a = 0; a < t.length; a++) t[a][i](r + e, n, o || !1)
            }, n.unbind = function(t, e, n, i) {
                t = s(t);
                for (var a = 0; a < t.length; a++) t[a][o](r + e, n, i || !1)
            }
        }, {
            "./to-array": 16
        }],
        12: [function(t, e, n) {
            e.exports = function(t) {
                for (var e, n = Array.prototype.slice.call(arguments, 1), i = 0; e = n[i]; i++)
                    if (e)
                        for (var o in e) t[o] = e[o];
                return t
            }
        }, {}],
        13: [function(t, e, n) {
            e.exports = function(t, e) {
                var n = t.getAttribute && t.getAttribute(e) || null;
                if (!n)
                    for (var i = t.attributes, o = i.length, r = 0; o > r; r++) void 0 !== e[r] && e[r].nodeName === e && (n = e[r].nodeValue);
                return n
            }
        }, {}],
        14: [function(t, e, n) {
            e.exports = function() {
                return document.getElementsByClassName ? function(t, e, n) {
                    return n ? t.getElementsByClassName(e)[0] : t.getElementsByClassName(e)
                } : document.querySelector ? function(t, e, n) {
                    return e = "." + e, n ? t.querySelector(e) : t.querySelectorAll(e)
                } : function(t, e, n) {
                    var i = [],
                        o = "*";
                    null === t && (t = document);
                    for (var r = t.getElementsByTagName(o), s = r.length, a = new RegExp("(^|\\s)" + e + "(\\s|$)"), l = 0, c = 0; s > l; l++)
                        if (a.test(r[l].className)) {
                            if (n) return r[l];
                            i[c] = r[l], c++
                        }
                    return i
                }
            }()
        }, {}],
        15: [function(t, e, n) {
            var i = [].indexOf;
            e.exports = function(t, e) {
                if (i) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return -1
            }
        }, {}],
        16: [function(t, e, n) {
            function i(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            e.exports = function(t) {
                if ("undefined" == typeof t) return [];
                if (null === t) return [null];
                if (t === window) return [window];
                if ("string" == typeof t) return [t];
                if (i(t)) return t;
                if ("number" != typeof t.length) return [t];
                if ("function" == typeof t && t instanceof Function) return [t];
                for (var e = [], n = 0; n < t.length; n++)(Object.prototype.hasOwnProperty.call(t, n) || n in t) && e.push(t[n]);
                return e.length ? e : []
            }
        }, {}],
        17: [function(t, e, n) {
            e.exports = function(t) {
                return t = void 0 === t ? "" : t, t = null === t ? "" : t, t = t.toString()
            }
        }, {}]
    }, {}, [1]);