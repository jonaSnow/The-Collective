/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-customevent-mediaqueries-queryselector-printshiv-setclasses !*/
! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in u)
            if (u.hasOwnProperty(l)) {
                if (e = [], t = u[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), c.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = f.className,
            n = Modernizr._config.classPrefix || "";
        if (m && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), m ? f.className.baseVal = t : f.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : m ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s() {
        var e = t.body;
        return e || (e = i(m ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, o) {
        var a, l, c, u, d = "modernizr",
            m = i("div"),
            p = s();
        if (parseInt(r, 10))
            for (; r--;) c = i("div"), c.id = o ? o[r] : d + (r + 1), m.appendChild(c);
        return a = i("style"), a.type = "text/css", a.id = "s" + d, (p.fake ? p : m).appendChild(a), p.appendChild(m), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), m.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = f.style.overflow, f.style.overflow = "hidden", f.appendChild(p)), l = n(m, e), p.fake ? (p.parentNode.removeChild(p), f.style.overflow = u, f.offsetHeight) : m.parentNode.removeChild(m), !!l
    }
    var c = [],
        u = [],
        d = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                u.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                u.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = d, Modernizr = new Modernizr, Modernizr.addTest("customevent", "CustomEvent" in e && "function" == typeof e.CustomEvent), Modernizr.addTest("queryselector", "querySelector" in t && "querySelectorAll" in t);
    var f = t.documentElement,
        m = "svg" === f.nodeName.toLowerCase();
    m || ! function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = T.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = T.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), T.elements = n + " " + e, c(t)
        }

        function a(e) {
            var t = N[e[C]];
            return t || (t = {}, S++, e[C] = S, N[S] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), v) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : b.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || E.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), v) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return T.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(T, t.frag)
        }

        function c(e) {
            e || (e = t);
            var r = a(e);
            return !T.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || l(e, r), e
        }

        function u(e) {
            for (var t, n = e.getElementsByTagName("*"), o = n.length, a = RegExp("^(?:" + r().join("|") + ")$", "i"), i = []; o--;) t = n[o], a.test(t.nodeName) && i.push(t.applyElement(d(t)));
            return i
        }

        function d(e) {
            for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(x + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
            return o.style.cssText = e.style.cssText, o
        }

        function f(e) {
            for (var t, n = e.split("{"), o = n.length, a = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), i = "$1" + x + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(a, i), n[o] = t.join("}");
            return n.join("{")
        }

        function m(e) {
            for (var t = e.length; t--;) e[t].removeNode()
        }

        function p(e) {
            function t() {
                clearTimeout(i._removeSheetTimer), r && r.removeNode(!0), r = null
            }
            var r, o, i = a(e),
                s = e.namespaces,
                l = e.parentWindow;
            return !_ || e.printShived ? e : ("undefined" == typeof s[x] && s.add(x), l.attachEvent("onbeforeprint", function () {
                t();
                for (var a, i, s, l = e.styleSheets, c = [], d = l.length, m = Array(d); d--;) m[d] = l[d];
                for (; s = m.pop();)
                    if (!s.disabled && w.test(s.media)) {
                        try {
                            a = s.imports, i = a.length
                        } catch (p) {
                            i = 0
                        }
                        for (d = 0; i > d; d++) m.push(a[d]);
                        try {
                            c.push(s.cssText)
                        } catch (p) {}
                    }
                c = f(c.reverse().join("")), o = u(e), r = n(e, c)
            }), l.attachEvent("onafterprint", function () {
                m(o), clearTimeout(i._removeSheetTimer), i._removeSheetTimer = setTimeout(t, 500)
            }), e.printShived = !0, e)
        }
        var h, v, g = "3.7.3",
            y = e.html5 || {},
            E = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            C = "_html5shiv",
            S = 0,
            N = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, v = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                h = !0, v = !0
            }
        }();
        var T = {
            elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: g,
            shivCSS: y.shivCSS !== !1,
            supportsUnknownElements: v,
            shivMethods: y.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = T, c(t);
        var w = /^$|\b(?:all|print)\b/,
            x = "html5shiv",
            _ = !v && function () {
                var n = t.documentElement;
                return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
            }();
        T.type += " print", T.shivPrint = p, p(t), "object" == typeof module && module.exports && (module.exports = T)
    }("undefined" != typeof e ? e : this, t);
    var p = function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function (e) {
            var n = t(e);
            return n && n.matches || !1
        } : function (t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    d.mq = p, Modernizr.addTest("mediaqueries", p("only all")), o(), a(c), delete d.addTest, delete d.addAsyncTest;
    for (var h = 0; h < Modernizr._q.length; h++) Modernizr._q[h]();
    e.Modernizr = Modernizr
}(window, document);
