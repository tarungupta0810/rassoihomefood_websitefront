var Gn = Object.defineProperty,
    Jn = Object.defineProperties,
    ts = Object.getOwnPropertyDescriptors,
    zn = Object.getOwnPropertySymbols,
    es = Object.prototype.hasOwnProperty,
    is = Object.prototype.propertyIsEnumerable,
    qn = (h, u, t) => u in h ? Gn(h, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : h[u] = t,
    Ct = (h, u) => {
        for (var t in u || (u = {})) es.call(u, t) && qn(h, t, u[t]);
        if (zn)
            for (var t of zn(u)) is.call(u, t) && qn(h, t, u[t]);
        return h
    },
    yn = (h, u) => Jn(h, ts(u));
(function (h, u) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = h.document ? u(h, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return u(t)
    } : u(h)
})("undefined" != typeof window ? window : this, function (h, u) {
    "use strict";
    var t = [],
        o = Object.getPrototypeOf,
        a = t.slice,
        i = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        r = t.push,
        c = t.indexOf,
        y = {},
        C = y.toString,
        P = y.hasOwnProperty,
        D = P.toString,
        tt = D.call(Object),
        it = {},
        lt = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        gt = function (e) {
            return null != e && e === e.window
        },
        ct = h.document,
        ke = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function qt(e, n, l) {
        var d, g, v = (l = l || ct).createElement("script");
        if (v.text = e, n)
            for (d in ke)(g = n[d] || n.getAttribute && n.getAttribute(d)) && v.setAttribute(d, g);
        l.head.appendChild(v).parentNode.removeChild(v)
    }

    function Pt(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? y[C.call(e)] || "object" : typeof e
    }
    var p = function (e, n) {
        return new p.fn.init(e, n)
    };

    function Ot(e) {
        var n = !!e && "length" in e && e.length,
            l = Pt(e);
        return !lt(e) && !gt(e) && ("array" === l || 0 === n || "number" == typeof n && 0 < n && n - 1 in e)
    }
    p.fn = p.prototype = {
        jquery: "3.6.0",
        constructor: p,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var n = p.merge(this.constructor(), e);
            return n.prevObject = this, n
        },
        each: function (e) {
            return p.each(this, e)
        },
        map: function (e) {
            return this.pushStack(p.map(this, function (n, l) {
                return e.call(n, l, n)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(p.grep(this, function (e, n) {
                return (n + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(p.grep(this, function (e, n) {
                return n % 2
            }))
        },
        eq: function (e) {
            var n = this.length,
                l = +e + (e < 0 ? n : 0);
            return this.pushStack(0 <= l && l < n ? [this[l]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: t.sort,
        splice: t.splice
    }, p.extend = p.fn.extend = function () {
        var e, n, l, d, g, v, _ = arguments[0] || {},
            S = 1,
            $ = arguments.length,
            M = !1;
        for ("boolean" == typeof _ && (M = _, _ = arguments[S] || {}, S++), "object" == typeof _ || lt(_) || (_ = {}), S === $ && (_ = this, S--); S < $; S++)
            if (null != (e = arguments[S]))
                for (n in e) d = e[n], "__proto__" !== n && _ !== d && (M && d && (p.isPlainObject(d) || (g = Array.isArray(d))) ? (l = _[n], v = g && !Array.isArray(l) ? [] : g || p.isPlainObject(l) ? l : {}, g = !1, _[n] = p.extend(M, v, d)) : void 0 !== d && (_[n] = d));
        return _
    }, p.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var n, l;
            return !(!e || "[object Object]" !== C.call(e) || (n = o(e)) && ("function" != typeof (l = P.call(n, "constructor") && n.constructor) || D.call(l) !== tt))
        },
        isEmptyObject: function (e) {
            var n;
            for (n in e) return !1;
            return !0
        },
        globalEval: function (e, n, l) {
            qt(e, {
                nonce: n && n.nonce
            }, l)
        },
        each: function (e, n) {
            var l, d = 0;
            if (Ot(e))
                for (l = e.length; d < l && !1 !== n.call(e[d], d, e[d]); d++);
            else
                for (d in e)
                    if (!1 === n.call(e[d], d, e[d])) break;
            return e
        },
        makeArray: function (e, n) {
            var l = n || [];
            return null != e && (Ot(Object(e)) ? p.merge(l, "string" == typeof e ? [e] : e) : r.call(l, e)), l
        },
        inArray: function (e, n, l) {
            return null == n ? -1 : c.call(n, e, l)
        },
        merge: function (e, n) {
            for (var l = +n.length, d = 0, g = e.length; d < l; d++) e[g++] = n[d];
            return e.length = g, e
        },
        grep: function (e, n, l) {
            for (var d = [], g = 0, v = e.length, _ = !l; g < v; g++) !n(e[g], g) !== _ && d.push(e[g]);
            return d
        },
        map: function (e, n, l) {
            var d, g, v = 0,
                _ = [];
            if (Ot(e))
                for (d = e.length; v < d; v++) null != (g = n(e[v], v, l)) && _.push(g);
            else
                for (v in e) null != (g = n(e[v], v, l)) && _.push(g);
            return i(_)
        },
        guid: 1,
        support: it
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = t[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, n) {
        y["[object " + n + "]"] = n.toLowerCase()
    });
    var Bt = function (e) {
        var n, l, d, g, v, _, S, $, M, q, X, z, B, x, s, f, T, I, F, V = "sizzle" + 1 * new Date,
            J = e.document,
            vt = 0,
            ht = 0,
            wt = hn(),
            At = hn(),
            Yt = hn(),
            Lt = hn(),
            te = function (w, E) {
                return w === E && (X = !0), 0
            },
            ee = {}.hasOwnProperty,
            Ut = [],
            Pe = Ut.pop,
            fe = Ut.push,
            It = Ut.push,
            Ce = Ut.slice,
            Fe = function (w, E) {
                for (var j = 0, U = w.length; j < U; j++)
                    if (w[j] === E) return j;
                return -1
            },
            ni = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            bt = "[\\x20\\t\\r\\n\\f]",
            Mt = "(?:\\\\[\\da-fA-F]{1,6}" + bt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            ce = "\\[" + bt + "*(" + Mt + ")(?:" + bt + "*([*^$|!~]?=)" + bt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Mt + "))|)" + bt + "*\\]",
            We = ":(" + Mt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ce + ")*)|.*)\\)|)",
            ie = new RegExp(bt + "+", "g"),
            Re = new RegExp("^" + bt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + bt + "+$", "g"),
            Di = new RegExp("^" + bt + "*," + bt + "*"),
            un = new RegExp("^" + bt + "*([>+~]|" + bt + ")" + bt + "*"),
            Bn = new RegExp(bt + "|>"),
            Fn = new RegExp(We),
            Wn = new RegExp("^" + Mt + "$"),
            pn = {
                ID: new RegExp("^#(" + Mt + ")"),
                CLASS: new RegExp("^\\.(" + Mt + ")"),
                TAG: new RegExp("^(" + Mt + "|[*])"),
                ATTR: new RegExp("^" + ce),
                PSEUDO: new RegExp("^" + We),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + bt + "*(even|odd|(([+-]|)(\\d*)n|)" + bt + "*(?:([+-]|)" + bt + "*(\\d+)|))" + bt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ni + ")$", "i"),
                needsContext: new RegExp("^" + bt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + bt + "*((?:-\\d)?\\d*)" + bt + "*\\)|)(?=[^-]|$)", "i")
            },
            Rn = /HTML$/i,
            Un = /^(?:input|select|textarea|button)$/i,
            Qn = /^h\d$/i,
            Xi = /^[^{]+\{\s*\[native \w/,
            Xn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            kn = /[+~]/,
            li = new RegExp("\\\\[\\da-fA-F]{1,6}" + bt + "?|\\\\([^\\r\\n\\f])", "g"),
            ci = function (w, E) {
                var j = "0x" + w.slice(1) - 65536;
                return E || (j < 0 ? String.fromCharCode(j + 65536) : String.fromCharCode(j >> 10 | 55296, 1023 & j | 56320))
            },
            Dn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ln = function (w, E) {
                return E ? "\0" === w ? "\ufffd" : w.slice(0, -1) + "\\" + w.charCodeAt(w.length - 1).toString(16) + " " : "\\" + w
            },
            In = function () {
                z()
            },
            Yn = gn(function (w) {
                return !0 === w.disabled && "fieldset" === w.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            It.apply(Ut = Ce.call(J.childNodes), J.childNodes)
        } catch (w) {
            It = {
                apply: Ut.length ? function (E, j) {
                    fe.apply(E, Ce.call(j))
                } : function (E, j) {
                    for (var U = E.length, H = 0; E[U++] = j[H++];);
                    E.length = U - 1
                }
            }
        }

        function Ht(w, E, j, U) {
            var H, K, G, et, ot, yt, ft, mt = E && E.ownerDocument,
                $t = E ? E.nodeType : 9;
            if (j = j || [], "string" != typeof w || !w || 1 !== $t && 9 !== $t && 11 !== $t) return j;
            if (!U && (z(E), E = E || B, s)) {
                if (11 !== $t && (ot = Xn.exec(w)))
                    if (H = ot[1]) {
                        if (9 === $t) {
                            if (!(G = E.getElementById(H))) return j;
                            if (G.id === H) return j.push(G), j
                        } else if (mt && (G = mt.getElementById(H)) && F(E, G) && G.id === H) return j.push(G), j
                    } else {
                        if (ot[2]) return It.apply(j, E.getElementsByTagName(w)), j;
                        if ((H = ot[3]) && l.getElementsByClassName && E.getElementsByClassName) return It.apply(j, E.getElementsByClassName(H)), j
                    } if (l.qsa && !Lt[w + " "] && (!f || !f.test(w)) && (1 !== $t || "object" !== E.nodeName.toLowerCase())) {
                    if (ft = w, mt = E, 1 === $t && (Bn.test(w) || un.test(w))) {
                        for ((mt = kn.test(w) && En(E.parentNode) || E) === E && l.scope || ((et = E.getAttribute("id")) ? et = et.replace(Dn, Ln) : E.setAttribute("id", et = V)), K = (yt = _(w)).length; K--;) yt[K] = (et ? "#" + et : ":scope") + " " + fn(yt[K]);
                        ft = yt.join(",")
                    }
                    try {
                        return It.apply(j, mt.querySelectorAll(ft)), j
                    } catch (Vt) {
                        Lt(w, !0)
                    } finally {
                        et === V && E.removeAttribute("id")
                    }
                }
            }
            return $(w.replace(Re, "$1"), E, j, U)
        }

        function hn() {
            var w = [];
            return function E(j, U) {
                return w.push(j + " ") > d.cacheLength && delete E[w.shift()], E[j + " "] = U
            }
        }

        function Qe(w) {
            return w[V] = !0, w
        }

        function Xe(w) {
            var E = B.createElement("fieldset");
            try {
                return !!w(E)
            } catch (j) {
                return !1
            } finally {
                E.parentNode && E.parentNode.removeChild(E), E = null
            }
        }

        function Sn(w, E) {
            for (var j = w.split("|"), U = j.length; U--;) d.attrHandle[j[U]] = E
        }

        function Mn(w, E) {
            var j = E && w,
                U = j && 1 === w.nodeType && 1 === E.nodeType && w.sourceIndex - E.sourceIndex;
            if (U) return U;
            if (j)
                for (; j = j.nextSibling;)
                    if (j === E) return -1;
            return w ? 1 : -1
        }

        function Vn(w) {
            return function (E) {
                return "input" === E.nodeName.toLowerCase() && E.type === w
            }
        }

        function Kn(w) {
            return function (E) {
                var j = E.nodeName.toLowerCase();
                return ("input" === j || "button" === j) && E.type === w
            }
        }

        function Pn(w) {
            return function (E) {
                return "form" in E ? E.parentNode && !1 === E.disabled ? "label" in E ? "label" in E.parentNode ? E.parentNode.disabled === w : E.disabled === w : E.isDisabled === w || E.isDisabled !== !w && Yn(E) === w : E.disabled === w : "label" in E && E.disabled === w
            }
        }

        function wi(w) {
            return Qe(function (E) {
                return E = +E, Qe(function (j, U) {
                    for (var H, K = w([], j.length, E), G = K.length; G--;) j[H = K[G]] && (j[H] = !(U[H] = j[H]))
                })
            })
        }

        function En(w) {
            return w && void 0 !== w.getElementsByTagName && w
        }
        for (n in l = Ht.support = {}, v = Ht.isXML = function (w) {
                var j = w && (w.ownerDocument || w).documentElement;
                return !Rn.test(w && w.namespaceURI || j && j.nodeName || "HTML")
            }, z = Ht.setDocument = function (w) {
                var E, j, U = w ? w.ownerDocument || w : J;
                return U != B && 9 === U.nodeType && U.documentElement && (x = (B = U).documentElement, s = !v(B), J != B && (j = B.defaultView) && j.top !== j && (j.addEventListener ? j.addEventListener("unload", In, !1) : j.attachEvent && j.attachEvent("onunload", In)), l.scope = Xe(function (H) {
                    return x.appendChild(H).appendChild(B.createElement("div")), void 0 !== H.querySelectorAll && !H.querySelectorAll(":scope fieldset div").length
                }), l.attributes = Xe(function (H) {
                    return H.className = "i", !H.getAttribute("className")
                }), l.getElementsByTagName = Xe(function (H) {
                    return H.appendChild(B.createComment("")), !H.getElementsByTagName("*").length
                }), l.getElementsByClassName = Xi.test(B.getElementsByClassName), l.getById = Xe(function (H) {
                    return x.appendChild(H).id = V, !B.getElementsByName || !B.getElementsByName(V).length
                }), l.getById ? (d.filter.ID = function (H) {
                    var K = H.replace(li, ci);
                    return function (G) {
                        return G.getAttribute("id") === K
                    }
                }, d.find.ID = function (H, K) {
                    if (void 0 !== K.getElementById && s) {
                        var G = K.getElementById(H);
                        return G ? [G] : []
                    }
                }) : (d.filter.ID = function (H) {
                    var K = H.replace(li, ci);
                    return function (G) {
                        var et = void 0 !== G.getAttributeNode && G.getAttributeNode("id");
                        return et && et.value === K
                    }
                }, d.find.ID = function (H, K) {
                    if (void 0 !== K.getElementById && s) {
                        var G, et, ot, yt = K.getElementById(H);
                        if (yt) {
                            if ((G = yt.getAttributeNode("id")) && G.value === H) return [yt];
                            for (ot = K.getElementsByName(H), et = 0; yt = ot[et++];)
                                if ((G = yt.getAttributeNode("id")) && G.value === H) return [yt]
                        }
                        return []
                    }
                }), d.find.TAG = l.getElementsByTagName ? function (H, K) {
                    return void 0 !== K.getElementsByTagName ? K.getElementsByTagName(H) : l.qsa ? K.querySelectorAll(H) : void 0
                } : function (H, K) {
                    var G, et = [],
                        ot = 0,
                        yt = K.getElementsByTagName(H);
                    if ("*" === H) {
                        for (; G = yt[ot++];) 1 === G.nodeType && et.push(G);
                        return et
                    }
                    return yt
                }, d.find.CLASS = l.getElementsByClassName && function (H, K) {
                    if (void 0 !== K.getElementsByClassName && s) return K.getElementsByClassName(H)
                }, T = [], f = [], (l.qsa = Xi.test(B.querySelectorAll)) && (Xe(function (H) {
                    var K;
                    x.appendChild(H).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>", H.querySelectorAll("[msallowcapture^='']").length && f.push("[*^$]=" + bt + "*(?:''|\"\")"), H.querySelectorAll("[selected]").length || f.push("\\[" + bt + "*(?:value|" + ni + ")"), H.querySelectorAll("[id~=" + V + "-]").length || f.push("~="), (K = B.createElement("input")).setAttribute("name", ""), H.appendChild(K), H.querySelectorAll("[name='']").length || f.push("\\[" + bt + "*name" + bt + "*=" + bt + "*(?:''|\"\")"), H.querySelectorAll(":checked").length || f.push(":checked"), H.querySelectorAll("a#" + V + "+*").length || f.push(".#.+[+~]"), H.querySelectorAll("\\\f"), f.push("[\\r\\n\\f]")
                }), Xe(function (H) {
                    H.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var K = B.createElement("input");
                    K.setAttribute("type", "hidden"), H.appendChild(K).setAttribute("name", "D"), H.querySelectorAll("[name=d]").length && f.push("name" + bt + "*[*^$|!~]?="), 2 !== H.querySelectorAll(":enabled").length && f.push(":enabled", ":disabled"), x.appendChild(H).disabled = !0, 2 !== H.querySelectorAll(":disabled").length && f.push(":enabled", ":disabled"), H.querySelectorAll("*,:x"), f.push(",.*:")
                })), (l.matchesSelector = Xi.test(I = x.matches || x.webkitMatchesSelector || x.mozMatchesSelector || x.oMatchesSelector || x.msMatchesSelector)) && Xe(function (H) {
                    l.disconnectedMatch = I.call(H, "*"), I.call(H, "[s!='']:x"), T.push("!=", We)
                }), f = f.length && new RegExp(f.join("|")), T = T.length && new RegExp(T.join("|")), E = Xi.test(x.compareDocumentPosition), F = E || Xi.test(x.contains) ? function (H, K) {
                    var G = 9 === H.nodeType ? H.documentElement : H,
                        et = K && K.parentNode;
                    return H === et || !(!et || 1 !== et.nodeType || !(G.contains ? G.contains(et) : H.compareDocumentPosition && 16 & H.compareDocumentPosition(et)))
                } : function (H, K) {
                    if (K)
                        for (; K = K.parentNode;)
                            if (K === H) return !0;
                    return !1
                }, te = E ? function (H, K) {
                    if (H === K) return X = !0, 0;
                    var G = !H.compareDocumentPosition - !K.compareDocumentPosition;
                    return G || (1 & (G = (H.ownerDocument || H) == (K.ownerDocument || K) ? H.compareDocumentPosition(K) : 1) || !l.sortDetached && K.compareDocumentPosition(H) === G ? H == B || H.ownerDocument == J && F(J, H) ? -1 : K == B || K.ownerDocument == J && F(J, K) ? 1 : q ? Fe(q, H) - Fe(q, K) : 0 : 4 & G ? -1 : 1)
                } : function (H, K) {
                    if (H === K) return X = !0, 0;
                    var G, et = 0,
                        ot = H.parentNode,
                        yt = K.parentNode,
                        ft = [H],
                        mt = [K];
                    if (!ot || !yt) return H == B ? -1 : K == B ? 1 : ot ? -1 : yt ? 1 : q ? Fe(q, H) - Fe(q, K) : 0;
                    if (ot === yt) return Mn(H, K);
                    for (G = H; G = G.parentNode;) ft.unshift(G);
                    for (G = K; G = G.parentNode;) mt.unshift(G);
                    for (; ft[et] === mt[et];) et++;
                    return et ? Mn(ft[et], mt[et]) : ft[et] == J ? -1 : mt[et] == J ? 1 : 0
                }), B
            }, Ht.matches = function (w, E) {
                return Ht(w, null, null, E)
            }, Ht.matchesSelector = function (w, E) {
                if (z(w), l.matchesSelector && s && !Lt[E + " "] && (!T || !T.test(E)) && (!f || !f.test(E))) try {
                    var j = I.call(w, E);
                    if (j || l.disconnectedMatch || w.document && 11 !== w.document.nodeType) return j
                } catch (U) {
                    Lt(E, !0)
                }
                return 0 < Ht(E, B, null, [w]).length
            }, Ht.contains = function (w, E) {
                return (w.ownerDocument || w) != B && z(w), F(w, E)
            }, Ht.attr = function (w, E) {
                (w.ownerDocument || w) != B && z(w);
                var j = d.attrHandle[E.toLowerCase()],
                    U = j && ee.call(d.attrHandle, E.toLowerCase()) ? j(w, E, !s) : void 0;
                return void 0 !== U ? U : l.attributes || !s ? w.getAttribute(E) : (U = w.getAttributeNode(E)) && U.specified ? U.value : null
            }, Ht.escape = function (w) {
                return (w + "").replace(Dn, Ln)
            }, Ht.error = function (w) {
                throw new Error("Syntax error, unrecognized expression: " + w)
            }, Ht.uniqueSort = function (w) {
                var E, j = [],
                    U = 0,
                    H = 0;
                if (X = !l.detectDuplicates, q = !l.sortStable && w.slice(0), w.sort(te), X) {
                    for (; E = w[H++];) E === w[H] && (U = j.push(H));
                    for (; U--;) w.splice(j[U], 1)
                }
                return q = null, w
            }, g = Ht.getText = function (w) {
                var E, j = "",
                    U = 0,
                    H = w.nodeType;
                if (H) {
                    if (1 === H || 9 === H || 11 === H) {
                        if ("string" == typeof w.textContent) return w.textContent;
                        for (w = w.firstChild; w; w = w.nextSibling) j += g(w)
                    } else if (3 === H || 4 === H) return w.nodeValue
                } else
                    for (; E = w[U++];) j += g(E);
                return j
            }, (d = Ht.selectors = {
                cacheLength: 50,
                createPseudo: Qe,
                match: pn,
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
                    ATTR: function (w) {
                        return w[1] = w[1].replace(li, ci), w[3] = (w[3] || w[4] || w[5] || "").replace(li, ci), "~=" === w[2] && (w[3] = " " + w[3] + " "), w.slice(0, 4)
                    },
                    CHILD: function (w) {
                        return w[1] = w[1].toLowerCase(), "nth" === w[1].slice(0, 3) ? (w[3] || Ht.error(w[0]), w[4] = +(w[4] ? w[5] + (w[6] || 1) : 2 * ("even" === w[3] || "odd" === w[3])), w[5] = +(w[7] + w[8] || "odd" === w[3])) : w[3] && Ht.error(w[0]), w
                    },
                    PSEUDO: function (w) {
                        var E, j = !w[6] && w[2];
                        return pn.CHILD.test(w[0]) ? null : (w[3] ? w[2] = w[4] || w[5] || "" : j && Fn.test(j) && (E = _(j, !0)) && (E = j.indexOf(")", j.length - E) - j.length) && (w[0] = w[0].slice(0, E), w[2] = j.slice(0, E)), w.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (w) {
                        var E = w.replace(li, ci).toLowerCase();
                        return "*" === w ? function () {
                            return !0
                        } : function (j) {
                            return j.nodeName && j.nodeName.toLowerCase() === E
                        }
                    },
                    CLASS: function (w) {
                        var E = wt[w + " "];
                        return E || (E = new RegExp("(^|" + bt + ")" + w + "(" + bt + "|$)")) && wt(w, function (j) {
                            return E.test("string" == typeof j.className && j.className || void 0 !== j.getAttribute && j.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (w, E, j) {
                        return function (U) {
                            var H = Ht.attr(U, w);
                            return null == H ? "!=" === E : !E || (H += "", "=" === E ? H === j : "!=" === E ? H !== j : "^=" === E ? j && 0 === H.indexOf(j) : "*=" === E ? j && -1 < H.indexOf(j) : "$=" === E ? j && H.slice(-j.length) === j : "~=" === E ? -1 < (" " + H.replace(ie, " ") + " ").indexOf(j) : "|=" === E && (H === j || H.slice(0, j.length + 1) === j + "-"))
                        }
                    },
                    CHILD: function (w, E, j, U, H) {
                        var K = "nth" !== w.slice(0, 3),
                            G = "last" !== w.slice(-4),
                            et = "of-type" === E;
                        return 1 === U && 0 === H ? function (ot) {
                            return !!ot.parentNode
                        } : function (ot, yt, ft) {
                            var mt, $t, Vt, xt, de, ge, Oe = K !== G ? "nextSibling" : "previousSibling",
                                zt = ot.parentNode,
                                si = et && ot.nodeName.toLowerCase(),
                                Te = !ft && !et,
                                ne = !1;
                            if (zt) {
                                if (K) {
                                    for (; Oe;) {
                                        for (xt = ot; xt = xt[Oe];)
                                            if (et ? xt.nodeName.toLowerCase() === si : 1 === xt.nodeType) return !1;
                                        ge = Oe = "only" === w && !ge && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ge = [G ? zt.firstChild : zt.lastChild], G && Te) {
                                    for (ne = (de = (mt = ($t = (Vt = (xt = zt)[V] || (xt[V] = {}))[xt.uniqueID] || (Vt[xt.uniqueID] = {}))[w] || [])[0] === vt && mt[1]) && mt[2], xt = de && zt.childNodes[de]; xt = ++de && xt && xt[Oe] || (ne = de = 0) || ge.pop();)
                                        if (1 === xt.nodeType && ++ne && xt === ot) {
                                            $t[w] = [vt, de, ne];
                                            break
                                        }
                                } else if (Te && (ne = de = (mt = ($t = (Vt = (xt = ot)[V] || (xt[V] = {}))[xt.uniqueID] || (Vt[xt.uniqueID] = {}))[w] || [])[0] === vt && mt[1]), !1 === ne)
                                    for (;
                                        (xt = ++de && xt && xt[Oe] || (ne = de = 0) || ge.pop()) && ((et ? xt.nodeName.toLowerCase() !== si : 1 !== xt.nodeType) || !++ne || (Te && (($t = (Vt = xt[V] || (xt[V] = {}))[xt.uniqueID] || (Vt[xt.uniqueID] = {}))[w] = [vt, ne]), xt !== ot)););
                                return (ne -= H) === U || ne % U == 0 && 0 <= ne / U
                            }
                        }
                    },
                    PSEUDO: function (w, E) {
                        var j, U = d.pseudos[w] || d.setFilters[w.toLowerCase()] || Ht.error("unsupported pseudo: " + w);
                        return U[V] ? U(E) : 1 < U.length ? (j = [w, w, "", E], d.setFilters.hasOwnProperty(w.toLowerCase()) ? Qe(function (H, K) {
                            for (var G, et = U(H, E), ot = et.length; ot--;) H[G = Fe(H, et[ot])] = !(K[G] = et[ot])
                        }) : function (H) {
                            return U(H, 0, j)
                        }) : U
                    }
                },
                pseudos: {
                    not: Qe(function (w) {
                        var E = [],
                            j = [],
                            U = S(w.replace(Re, "$1"));
                        return U[V] ? Qe(function (H, K, G, et) {
                            for (var ot, yt = U(H, null, et, []), ft = H.length; ft--;)(ot = yt[ft]) && (H[ft] = !(K[ft] = ot))
                        }) : function (H, K, G) {
                            return E[0] = H, U(E, null, G, j), E[0] = null, !j.pop()
                        }
                    }),
                    has: Qe(function (w) {
                        return function (E) {
                            return 0 < Ht(w, E).length
                        }
                    }),
                    contains: Qe(function (w) {
                        return w = w.replace(li, ci),
                            function (E) {
                                return -1 < (E.textContent || g(E)).indexOf(w)
                            }
                    }),
                    lang: Qe(function (w) {
                        return Wn.test(w || "") || Ht.error("unsupported lang: " + w), w = w.replace(li, ci).toLowerCase(),
                            function (E) {
                                var j;
                                do {
                                    if (j = s ? E.lang : E.getAttribute("xml:lang") || E.getAttribute("lang")) return (j = j.toLowerCase()) === w || 0 === j.indexOf(w + "-")
                                } while ((E = E.parentNode) && 1 === E.nodeType);
                                return !1
                            }
                    }),
                    target: function (w) {
                        var E = e.location && e.location.hash;
                        return E && E.slice(1) === w.id
                    },
                    root: function (w) {
                        return w === x
                    },
                    focus: function (w) {
                        return w === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(w.type || w.href || ~w.tabIndex)
                    },
                    enabled: Pn(!1),
                    disabled: Pn(!0),
                    checked: function (w) {
                        var E = w.nodeName.toLowerCase();
                        return "input" === E && !!w.checked || "option" === E && !!w.selected
                    },
                    selected: function (w) {
                        return !0 === w.selected
                    },
                    empty: function (w) {
                        for (w = w.firstChild; w; w = w.nextSibling)
                            if (w.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (w) {
                        return !d.pseudos.empty(w)
                    },
                    header: function (w) {
                        return Qn.test(w.nodeName)
                    },
                    input: function (w) {
                        return Un.test(w.nodeName)
                    },
                    button: function (w) {
                        var E = w.nodeName.toLowerCase();
                        return "input" === E && "button" === w.type || "button" === E
                    },
                    text: function (w) {
                        var E;
                        return "input" === w.nodeName.toLowerCase() && "text" === w.type && (null == (E = w.getAttribute("type")) || "text" === E.toLowerCase())
                    },
                    first: wi(function () {
                        return [0]
                    }),
                    last: wi(function (w, E) {
                        return [E - 1]
                    }),
                    eq: wi(function (w, E, j) {
                        return [j < 0 ? j + E : j]
                    }),
                    even: wi(function (w, E) {
                        for (var j = 0; j < E; j += 2) w.push(j);
                        return w
                    }),
                    odd: wi(function (w, E) {
                        for (var j = 1; j < E; j += 2) w.push(j);
                        return w
                    }),
                    lt: wi(function (w, E, j) {
                        for (var U = j < 0 ? j + E : E < j ? E : j; 0 <= --U;) w.push(U);
                        return w
                    }),
                    gt: wi(function (w, E, j) {
                        for (var U = j < 0 ? j + E : j; ++U < E;) w.push(U);
                        return w
                    })
                }
            }).pseudos.nth = d.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[n] = Vn(n);
        for (n in {
                submit: !0,
                reset: !0
            }) d.pseudos[n] = Kn(n);

        function jn() {}

        function fn(w) {
            for (var E = 0, j = w.length, U = ""; E < j; E++) U += w[E].value;
            return U
        }

        function gn(w, E, j) {
            var U = E.dir,
                H = E.next,
                K = H || U,
                G = j && "parentNode" === K,
                et = ht++;
            return E.first ? function (ot, yt, ft) {
                for (; ot = ot[U];)
                    if (1 === ot.nodeType || G) return w(ot, yt, ft);
                return !1
            } : function (ot, yt, ft) {
                var mt, $t, Vt, xt = [vt, et];
                if (ft) {
                    for (; ot = ot[U];)
                        if ((1 === ot.nodeType || G) && w(ot, yt, ft)) return !0
                } else
                    for (; ot = ot[U];)
                        if (1 === ot.nodeType || G)
                            if ($t = (Vt = ot[V] || (ot[V] = {}))[ot.uniqueID] || (Vt[ot.uniqueID] = {}), H && H === ot.nodeName.toLowerCase()) ot = ot[U] || ot;
                            else {
                                if ((mt = $t[K]) && mt[0] === vt && mt[1] === et) return xt[2] = mt[2];
                                if (($t[K] = xt)[2] = w(ot, yt, ft)) return !0
                            } return !1
            }
        }

        function An(w) {
            return 1 < w.length ? function (E, j, U) {
                for (var H = w.length; H--;)
                    if (!w[H](E, j, U)) return !1;
                return !0
            } : w[0]
        }

        function mn(w, E, j, U, H) {
            for (var K, G = [], et = 0, ot = w.length, yt = null != E; et < ot; et++)(K = w[et]) && (j && !j(K, U, H) || (G.push(K), yt && E.push(et)));
            return G
        }

        function $n(w, E, j, U, H, K) {
            return U && !U[V] && (U = $n(U)), H && !H[V] && (H = $n(H, K)), Qe(function (G, et, ot, yt) {
                var ft, mt, $t, Vt = [],
                    xt = [],
                    de = et.length,
                    ge = G || function (si, Te, ne) {
                        for (var Ye = 0, vn = Te.length; Ye < vn; Ye++) Ht(si, Te[Ye], ne);
                        return ne
                    }(E || "*", ot.nodeType ? [ot] : ot, []),
                    Oe = !w || !G && E ? ge : mn(ge, Vt, w, ot, yt),
                    zt = j ? H || (G ? w : de || U) ? [] : et : Oe;
                if (j && j(Oe, zt, ot, yt), U)
                    for (ft = mn(zt, xt), U(ft, [], ot, yt), mt = ft.length; mt--;)($t = ft[mt]) && (zt[xt[mt]] = !(Oe[xt[mt]] = $t));
                if (G) {
                    if (H || w) {
                        if (H) {
                            for (ft = [], mt = zt.length; mt--;)($t = zt[mt]) && ft.push(Oe[mt] = $t);
                            H(null, zt = [], ft, yt)
                        }
                        for (mt = zt.length; mt--;)($t = zt[mt]) && -1 < (ft = H ? Fe(G, $t) : Vt[mt]) && (G[ft] = !(et[ft] = $t))
                    }
                } else zt = mn(zt === et ? zt.splice(de, zt.length) : zt), H ? H(null, et, zt, yt) : It.apply(et, zt)
            })
        }

        function On(w) {
            for (var E, j, U, H = w.length, K = d.relative[w[0].type], G = K || d.relative[" "], et = K ? 1 : 0, ot = gn(function (mt) {
                    return mt === E
                }, G, !0), yt = gn(function (mt) {
                    return -1 < Fe(E, mt)
                }, G, !0), ft = [function (mt, $t, Vt) {
                    var xt = !K && (Vt || $t !== M) || ((E = $t).nodeType ? ot(mt, $t, Vt) : yt(mt, $t, Vt));
                    return E = null, xt
                }]; et < H; et++)
                if (j = d.relative[w[et].type]) ft = [gn(An(ft), j)];
                else {
                    if ((j = d.filter[w[et].type].apply(null, w[et].matches))[V]) {
                        for (U = ++et; U < H && !d.relative[w[U].type]; U++);
                        return $n(1 < et && An(ft), 1 < et && fn(w.slice(0, et - 1).concat({
                            value: " " === w[et - 2].type ? "*" : ""
                        })).replace(Re, "$1"), j, et < U && On(w.slice(et, U)), U < H && On(w = w.slice(U)), U < H && fn(w))
                    }
                    ft.push(j)
                } return An(ft)
        }
        return jn.prototype = d.filters = d.pseudos, d.setFilters = new jn, _ = Ht.tokenize = function (w, E) {
            var j, U, H, K, G, et, ot, yt = At[w + " "];
            if (yt) return E ? 0 : yt.slice(0);
            for (G = w, et = [], ot = d.preFilter; G;) {
                for (K in j && !(U = Di.exec(G)) || (U && (G = G.slice(U[0].length) || G), et.push(H = [])), j = !1, (U = un.exec(G)) && (j = U.shift(), H.push({
                        value: j,
                        type: U[0].replace(Re, " ")
                    }), G = G.slice(j.length)), d.filter) !(U = pn[K].exec(G)) || ot[K] && !(U = ot[K](U)) || (j = U.shift(), H.push({
                    value: j,
                    type: K,
                    matches: U
                }), G = G.slice(j.length));
                if (!j) break
            }
            return E ? G.length : G ? Ht.error(w) : At(w, et).slice(0)
        }, S = Ht.compile = function (w, E) {
            var j, U, H, K, G, et, ot = [],
                yt = [],
                ft = Yt[w + " "];
            if (!ft) {
                for (E || (E = _(w)), j = E.length; j--;)(ft = On(E[j]))[V] ? ot.push(ft) : yt.push(ft);
                (ft = Yt(w, (U = yt, K = 0 < (H = ot).length, G = 0 < U.length, et = function (mt, $t, Vt, xt, de) {
                    var ge, Oe, zt, si = 0,
                        Te = "0",
                        ne = mt && [],
                        Ye = [],
                        vn = M,
                        Nn = mt || G && d.find.TAG("*", de),
                        Hn = vt += null == vn ? 1 : Math.random() || .1,
                        Zn = Nn.length;
                    for (de && (M = $t == B || $t || de); Te !== Zn && null != (ge = Nn[Te]); Te++) {
                        if (G && ge) {
                            for (Oe = 0, $t || ge.ownerDocument == B || (z(ge), Vt = !s); zt = U[Oe++];)
                                if (zt(ge, $t || B, Vt)) {
                                    xt.push(ge);
                                    break
                                } de && (vt = Hn)
                        }
                        K && ((ge = !zt && ge) && si--, mt && ne.push(ge))
                    }
                    if (si += Te, K && Te !== si) {
                        for (Oe = 0; zt = H[Oe++];) zt(ne, Ye, $t, Vt);
                        if (mt) {
                            if (0 < si)
                                for (; Te--;) ne[Te] || Ye[Te] || (Ye[Te] = Pe.call(xt));
                            Ye = mn(Ye)
                        }
                        It.apply(xt, Ye), de && !mt && 0 < Ye.length && 1 < si + H.length && Ht.uniqueSort(xt)
                    }
                    return de && (vt = Hn, M = vn), ne
                }, K ? Qe(et) : et))).selector = w
            }
            return ft
        }, $ = Ht.select = function (w, E, j, U) {
            var H, K, G, et, ot, yt = "function" == typeof w && w,
                ft = !U && _(w = yt.selector || w);
            if (j = j || [], 1 === ft.length) {
                if (2 < (K = ft[0] = ft[0].slice(0)).length && "ID" === (G = K[0]).type && 9 === E.nodeType && s && d.relative[K[1].type]) {
                    if (!(E = (d.find.ID(G.matches[0].replace(li, ci), E) || [])[0])) return j;
                    yt && (E = E.parentNode), w = w.slice(K.shift().value.length)
                }
                for (H = pn.needsContext.test(w) ? 0 : K.length; H-- && !d.relative[et = (G = K[H]).type];)
                    if ((ot = d.find[et]) && (U = ot(G.matches[0].replace(li, ci), kn.test(K[0].type) && En(E.parentNode) || E))) {
                        if (K.splice(H, 1), !(w = U.length && fn(K))) return It.apply(j, U), j;
                        break
                    }
            }
            return (yt || S(w, ft))(U, E, !s, j, !E || kn.test(w) && En(E.parentNode) || E), j
        }, l.sortStable = V.split("").sort(te).join("") === V, l.detectDuplicates = !!X, z(), l.sortDetached = Xe(function (w) {
            return 1 & w.compareDocumentPosition(B.createElement("fieldset"))
        }), Xe(function (w) {
            return w.innerHTML = "<a href='#'></a>", "#" === w.firstChild.getAttribute("href")
        }) || Sn("type|href|height|width", function (w, E, j) {
            if (!j) return w.getAttribute(E, "type" === E.toLowerCase() ? 1 : 2)
        }), l.attributes && Xe(function (w) {
            return w.innerHTML = "<input/>", w.firstChild.setAttribute("value", ""), "" === w.firstChild.getAttribute("value")
        }) || Sn("value", function (w, E, j) {
            if (!j && "input" === w.nodeName.toLowerCase()) return w.defaultValue
        }), Xe(function (w) {
            return null == w.getAttribute("disabled")
        }) || Sn(ni, function (w, E, j) {
            var U;
            if (!j) return !0 === w[E] ? E.toLowerCase() : (U = w.getAttributeNode(E)) && U.specified ? U.value : null
        }), Ht
    }(h);
    p.find = Bt, p.expr = Bt.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = Bt.uniqueSort, p.text = Bt.getText, p.isXMLDoc = Bt.isXML, p.contains = Bt.contains, p.escapeSelector = Bt.escape;
    var Tt = function (e, n, l) {
            for (var d = [], g = void 0 !== l;
                (e = e[n]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (g && p(e).is(l)) break;
                    d.push(e)
                } return d
        },
        _e = function (e, n) {
            for (var l = []; e; e = e.nextSibling) 1 === e.nodeType && e !== n && l.push(e);
            return l
        },
        Xt = p.expr.match.needsContext;

    function Ft(e, n) {
        return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase()
    }
    var jt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function De(e, n, l) {
        return lt(n) ? p.grep(e, function (d, g) {
            return !!n.call(d, g, d) !== l
        }) : n.nodeType ? p.grep(e, function (d) {
            return d === n !== l
        }) : "string" != typeof n ? p.grep(e, function (d) {
            return -1 < c.call(n, d) !== l
        }) : p.filter(n, e, l)
    }
    p.filter = function (e, n, l) {
        var d = n[0];
        return l && (e = ":not(" + e + ")"), 1 === n.length && 1 === d.nodeType ? p.find.matchesSelector(d, e) ? [d] : [] : p.find.matches(e, p.grep(n, function (g) {
            return 1 === g.nodeType
        }))
    }, p.fn.extend({
        find: function (e) {
            var n, l, d = this.length,
                g = this;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function () {
                for (n = 0; n < d; n++)
                    if (p.contains(g[n], this)) return !0
            }));
            for (l = this.pushStack([]), n = 0; n < d; n++) p.find(e, g[n], l);
            return 1 < d ? p.uniqueSort(l) : l
        },
        filter: function (e) {
            return this.pushStack(De(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(De(this, e || [], !0))
        },
        is: function (e) {
            return !!De(this, "string" == typeof e && Xt.test(e) ? p(e) : e || [], !1).length
        }
    });
    var oe, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (p.fn.init = function (e, n, l) {
        var d, g;
        if (!e) return this;
        if (l = l || oe, "string" == typeof e) {
            if (!(d = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Se.exec(e)) || !d[1] && n) return !n || n.jquery ? (n || l).find(e) : this.constructor(n).find(e);
            if (d[1]) {
                if (p.merge(this, p.parseHTML(d[1], (n = n instanceof p ? n[0] : n) && n.nodeType ? n.ownerDocument || n : ct, !0)), jt.test(d[1]) && p.isPlainObject(n))
                    for (d in n) lt(this[d]) ? this[d](n[d]) : this.attr(d, n[d]);
                return this
            }
            return (g = ct.getElementById(d[2])) && (this[0] = g, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : lt(e) ? void 0 !== l.ready ? l.ready(e) : e(p) : p.makeArray(e, this)
    }).prototype = p.fn, oe = p(ct);
    var Le = /^(?:parents|prev(?:Until|All))/,
        Kt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function me(e, n) {
        for (;
            (e = e[n]) && 1 !== e.nodeType;);
        return e
    }
    p.fn.extend({
        has: function (e) {
            var n = p(e, this),
                l = n.length;
            return this.filter(function () {
                for (var d = 0; d < l; d++)
                    if (p.contains(this, n[d])) return !0
            })
        },
        closest: function (e, n) {
            var l, d = 0,
                g = this.length,
                v = [],
                _ = "string" != typeof e && p(e);
            if (!Xt.test(e))
                for (; d < g; d++)
                    for (l = this[d]; l && l !== n; l = l.parentNode)
                        if (l.nodeType < 11 && (_ ? -1 < _.index(l) : 1 === l.nodeType && p.find.matchesSelector(l, e))) {
                            v.push(l);
                            break
                        } return this.pushStack(1 < v.length ? p.uniqueSort(v) : v)
        },
        index: function (e) {
            return e ? "string" == typeof e ? c.call(p(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, n) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, n))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function (e) {
            var n = e.parentNode;
            return n && 11 !== n.nodeType ? n : null
        },
        parents: function (e) {
            return Tt(e, "parentNode")
        },
        parentsUntil: function (e, n, l) {
            return Tt(e, "parentNode", l)
        },
        next: function (e) {
            return me(e, "nextSibling")
        },
        prev: function (e) {
            return me(e, "previousSibling")
        },
        nextAll: function (e) {
            return Tt(e, "nextSibling")
        },
        prevAll: function (e) {
            return Tt(e, "previousSibling")
        },
        nextUntil: function (e, n, l) {
            return Tt(e, "nextSibling", l)
        },
        prevUntil: function (e, n, l) {
            return Tt(e, "previousSibling", l)
        },
        siblings: function (e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return _e(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (Ft(e, "template") && (e = e.content || e), p.merge([], e.childNodes))
        }
    }, function (e, n) {
        p.fn[e] = function (l, d) {
            var g = p.map(this, n, l);
            return "Until" !== e.slice(-5) && (d = l), d && "string" == typeof d && (g = p.filter(d, g)), 1 < this.length && (Kt[e] || p.uniqueSort(g), Le.test(e) && g.reverse()), this.pushStack(g)
        }
    });
    var Zt = /[^\x20\t\r\n\f]+/g;

    function we(e) {
        return e
    }

    function ue(e) {
        throw e
    }

    function Y(e, n, l, d) {
        var g;
        try {
            e && lt(g = e.promise) ? g.call(e).done(n).fail(l) : e && lt(g = e.then) ? g.call(e, n, l) : n.apply(void 0, [e].slice(d))
        } catch (v) {
            l.apply(void 0, [v])
        }
    }
    p.Callbacks = function (e) {
        var l;
        e = "string" == typeof e ? (l = {}, p.each(e.match(Zt) || [], function (z, B) {
            l[B] = !0
        }), l) : p.extend({}, e);
        var d, g, v, _, S = [],
            $ = [],
            M = -1,
            q = function () {
                for (_ = _ || e.once, v = d = !0; $.length; M = -1)
                    for (g = $.shift(); ++M < S.length;) !1 === S[M].apply(g[0], g[1]) && e.stopOnFalse && (M = S.length, g = !1);
                e.memory || (g = !1), d = !1, _ && (S = g ? [] : "")
            },
            X = {
                add: function () {
                    return S && (g && !d && (M = S.length - 1, $.push(g)), function z(B) {
                        p.each(B, function (x, s) {
                            lt(s) ? e.unique && X.has(s) || S.push(s) : s && s.length && "string" !== Pt(s) && z(s)
                        })
                    }(arguments), g && !d && q()), this
                },
                remove: function () {
                    return p.each(arguments, function (z, B) {
                        for (var x; - 1 < (x = p.inArray(B, S, x));) S.splice(x, 1), x <= M && M--
                    }), this
                },
                has: function (z) {
                    return z ? -1 < p.inArray(z, S) : 0 < S.length
                },
                empty: function () {
                    return S && (S = []), this
                },
                disable: function () {
                    return _ = $ = [], S = g = "", this
                },
                disabled: function () {
                    return !S
                },
                lock: function () {
                    return _ = $ = [], g || d || (S = g = ""), this
                },
                locked: function () {
                    return !!_
                },
                fireWith: function (z, B) {
                    return _ || (B = [z, (B = B || []).slice ? B.slice() : B], $.push(B), d || q()), this
                },
                fire: function () {
                    return X.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!v
                }
            };
        return X
    }, p.extend({
        Deferred: function (e) {
            var n = [
                    ["notify", "progress", p.Callbacks("memory"), p.Callbacks("memory"), 2],
                    ["resolve", "done", p.Callbacks("once memory"), p.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), p.Callbacks("once memory"), 1, "rejected"]
                ],
                l = "pending",
                d = {
                    state: function () {
                        return l
                    },
                    always: function () {
                        return g.done(arguments).fail(arguments), this
                    },
                    catch: function (v) {
                        return d.then(null, v)
                    },
                    pipe: function () {
                        var v = arguments;
                        return p.Deferred(function (_) {
                            p.each(n, function (S, $) {
                                var M = lt(v[$[4]]) && v[$[4]];
                                g[$[1]](function () {
                                    var q = M && M.apply(this, arguments);
                                    q && lt(q.promise) ? q.promise().progress(_.notify).done(_.resolve).fail(_.reject) : _[$[0] + "With"](this, M ? [q] : arguments)
                                })
                            }), v = null
                        }).promise()
                    },
                    then: function (v, _, S) {
                        var $ = 0;

                        function M(q, X, z, B) {
                            return function () {
                                var x = this,
                                    s = arguments,
                                    f = function () {
                                        var I, F;
                                        if (!(q < $)) {
                                            if ((I = z.apply(x, s)) === X.promise()) throw new TypeError("Thenable self-resolution");
                                            lt(F = I && ("object" == typeof I || "function" == typeof I) && I.then) ? B ? F.call(I, M($, X, we, B), M($, X, ue, B)) : ($++, F.call(I, M($, X, we, B), M($, X, ue, B), M($, X, we, X.notifyWith))) : (z !== we && (x = void 0, s = [I]), (B || X.resolveWith)(x, s))
                                        }
                                    },
                                    T = B ? f : function () {
                                        try {
                                            f()
                                        } catch (I) {
                                            p.Deferred.exceptionHook && p.Deferred.exceptionHook(I, T.stackTrace), $ <= q + 1 && (z !== ue && (x = void 0, s = [I]), X.rejectWith(x, s))
                                        }
                                    };
                                q ? T() : (p.Deferred.getStackHook && (T.stackTrace = p.Deferred.getStackHook()), h.setTimeout(T))
                            }
                        }
                        return p.Deferred(function (q) {
                            n[0][3].add(M(0, q, lt(S) ? S : we, q.notifyWith)), n[1][3].add(M(0, q, lt(v) ? v : we)), n[2][3].add(M(0, q, lt(_) ? _ : ue))
                        }).promise()
                    },
                    promise: function (v) {
                        return null != v ? p.extend(v, d) : d
                    }
                },
                g = {};
            return p.each(n, function (v, _) {
                var S = _[2],
                    $ = _[5];
                d[_[1]] = S.add, $ && S.add(function () {
                    l = $
                }, n[3 - v][2].disable, n[3 - v][3].disable, n[0][2].lock, n[0][3].lock), S.add(_[3].fire), g[_[0]] = function () {
                    return g[_[0] + "With"](this === g ? void 0 : this, arguments), this
                }, g[_[0] + "With"] = S.fireWith
            }), d.promise(g), e && e.call(g, g), g
        },
        when: function (e) {
            var n = arguments.length,
                l = n,
                d = Array(l),
                g = a.call(arguments),
                v = p.Deferred(),
                _ = function (S) {
                    return function ($) {
                        d[S] = this, g[S] = 1 < arguments.length ? a.call(arguments) : $, --n || v.resolveWith(d, g)
                    }
                };
            if (n <= 1 && (Y(e, v.done(_(l)).resolve, v.reject, !n), "pending" === v.state() || lt(g[l] && g[l].then))) return v.then();
            for (; l--;) Y(g[l], _(l), v.reject);
            return v.promise()
        }
    });
    var be = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    p.Deferred.exceptionHook = function (e, n) {
        h.console && h.console.warn && e && be.test(e.name) && h.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, p.readyException = function (e) {
        h.setTimeout(function () {
            throw e
        })
    };
    var je = p.Deferred();

    function Nt() {
        ct.removeEventListener("DOMContentLoaded", Nt), h.removeEventListener("load", Nt), p.ready()
    }
    p.fn.ready = function (e) {
        return je.then(e).catch(function (n) {
            p.readyException(n)
        }), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0) !== e && 0 < --p.readyWait || je.resolveWith(ct, [p])
        }
    }), p.ready.then = je.then, "complete" === ct.readyState || "loading" !== ct.readyState && !ct.documentElement.doScroll ? h.setTimeout(p.ready) : (ct.addEventListener("DOMContentLoaded", Nt), h.addEventListener("load", Nt));
    var Gt = function (e, n, l, d, g, v, _) {
            var S = 0,
                $ = e.length,
                M = null == l;
            if ("object" === Pt(l))
                for (S in g = !0, l) Gt(e, n, S, l[S], !0, v, _);
            else if (void 0 !== d && (g = !0, lt(d) || (_ = !0), M && (_ ? (n.call(e, d), n = null) : (M = n, n = function (q, X, z) {
                    return M.call(p(q), z)
                })), n))
                for (; S < $; S++) n(e[S], l, _ ? d : d.call(e[S], S, n(e[S], l)));
            return g ? e : M ? n.call(e) : $ ? n(e[0], l) : v
        },
        Ne = /^-ms-/,
        Ve = /-([a-z])/g;

    function He(e, n) {
        return n.toUpperCase()
    }

    function re(e) {
        return e.replace(Ne, "ms-").replace(Ve, He)
    }
    var b = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function O() {
        this.expando = p.expando + O.uid++
    }
    O.uid = 1, O.prototype = {
        cache: function (e) {
            var n = e[this.expando];
            return n || (n = {}, b(e) && (e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                configurable: !0
            }))), n
        },
        set: function (e, n, l) {
            var d, g = this.cache(e);
            if ("string" == typeof n) g[re(n)] = l;
            else
                for (d in n) g[re(d)] = n[d];
            return g
        },
        get: function (e, n) {
            return void 0 === n ? this.cache(e) : e[this.expando] && e[this.expando][re(n)]
        },
        access: function (e, n, l) {
            return void 0 === n || n && "string" == typeof n && void 0 === l ? this.get(e, n) : (this.set(e, n, l), void 0 !== l ? l : n)
        },
        remove: function (e, n) {
            var l, d = e[this.expando];
            if (void 0 !== d) {
                if (void 0 !== n)
                    for ((l = (n = Array.isArray(n) ? n.map(re) : (n = re(n)) in d ? [n] : n.match(Zt) || []).length); l--;) delete d[n[l]];
                (void 0 === n || p.isEmptyObject(d)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var n = e[this.expando];
            return void 0 !== n && !p.isEmptyObject(n)
        }
    };
    var A = new O,
        Z = new O,
        rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /[A-Z]/g;

    function Dt(e, n, l) {
        var d, g;
        if (void 0 === l && 1 === e.nodeType)
            if (d = "data-" + n.replace(St, "-$&").toLowerCase(), "string" == typeof (l = e.getAttribute(d))) {
                try {
                    l = "true" === (g = l) || "false" !== g && ("null" === g ? null : g === +g + "" ? +g : rt.test(g) ? JSON.parse(g) : g)
                } catch (v) {}
                Z.set(e, n, l)
            } else l = void 0;
        return l
    }
    p.extend({
        hasData: function (e) {
            return Z.hasData(e) || A.hasData(e)
        },
        data: function (e, n, l) {
            return Z.access(e, n, l)
        },
        removeData: function (e, n) {
            Z.remove(e, n)
        },
        _data: function (e, n, l) {
            return A.access(e, n, l)
        },
        _removeData: function (e, n) {
            A.remove(e, n)
        }
    }), p.fn.extend({
        data: function (e, n) {
            var l, d, g, v = this[0],
                _ = v && v.attributes;
            if (void 0 === e) {
                if (this.length && (g = Z.get(v), 1 === v.nodeType && !A.get(v, "hasDataAttrs"))) {
                    for (l = _.length; l--;) _[l] && 0 === (d = _[l].name).indexOf("data-") && (d = re(d.slice(5)), Dt(v, d, g[d]));
                    A.set(v, "hasDataAttrs", !0)
                }
                return g
            }
            return "object" == typeof e ? this.each(function () {
                Z.set(this, e)
            }) : Gt(this, function (S) {
                var $;
                if (v && void 0 === S) return void 0 !== ($ = Z.get(v, e)) || void 0 !== ($ = Dt(v, e)) ? $ : void 0;
                this.each(function () {
                    Z.set(this, e, S)
                })
            }, null, n, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Z.remove(this, e)
            })
        }
    }), p.extend({
        queue: function (e, n, l) {
            var d;
            if (e) return d = A.get(e, n = (n || "fx") + "queue"), l && (!d || Array.isArray(l) ? d = A.access(e, n, p.makeArray(l)) : d.push(l)), d || []
        },
        dequeue: function (e, n) {
            var l = p.queue(e, n = n || "fx"),
                d = l.length,
                g = l.shift(),
                v = p._queueHooks(e, n);
            "inprogress" === g && (g = l.shift(), d--), g && ("fx" === n && l.unshift("inprogress"), delete v.stop, g.call(e, function () {
                p.dequeue(e, n)
            }, v)), !d && v && v.empty.fire()
        },
        _queueHooks: function (e, n) {
            var l = n + "queueHooks";
            return A.get(e, l) || A.access(e, l, {
                empty: p.Callbacks("once memory").add(function () {
                    A.remove(e, [n + "queue", l])
                })
            })
        }
    }), p.fn.extend({
        queue: function (e, n) {
            var l = 2;
            return "string" != typeof e && (n = e, e = "fx", l--), arguments.length < l ? p.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                var d = p.queue(this, e, n);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== d[0] && p.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                p.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var l, d = 1,
                g = p.Deferred(),
                v = this,
                _ = this.length,
                S = function () {
                    --d || g.resolveWith(v, [v])
                };
            for ("string" != typeof e && (n = e, e = void 0), e = e || "fx"; _--;)(l = A.get(v[_], e + "queueHooks")) && l.empty && (d++, l.empty.add(S));
            return S(), g.promise(n)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Wt = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        Rt = ["Top", "Right", "Bottom", "Left"],
        pe = ct.documentElement,
        he = function (e) {
            return p.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    pe.getRootNode && (he = function (e) {
        return p.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var Ie = function (e, n) {
        return "none" === (e = n || e).style.display || "" === e.style.display && he(e) && "none" === p.css(e, "display")
    };

    function Ee(e, n, l, d) {
        var g, v, _ = 20,
            S = d ? function () {
                return d.cur()
            } : function () {
                return p.css(e, n, "")
            },
            $ = S(),
            M = l && l[3] || (p.cssNumber[n] ? "" : "px"),
            q = e.nodeType && (p.cssNumber[n] || "px" !== M && +$) && Wt.exec(p.css(e, n));
        if (q && q[3] !== M) {
            for (M = M || q[3], q = +($ /= 2) || 1; _--;) p.style(e, n, q + M), (1 - v) * (1 - (v = S() / $ || .5)) <= 0 && (_ = 0), q /= v;
            p.style(e, n, (q *= 2) + M), l = l || []
        }
        return l && (q = +q || +$ || 0, g = l[1] ? q + (l[1] + 1) * l[2] : +l[2], d && (d.unit = M, d.start = q, d.end = g)), g
    }
    var fi = {};

    function xe(e, n) {
        for (var l, d, g, v, _, S, $, M = [], q = 0, X = e.length; q < X; q++)(d = e[q]).style && (l = d.style.display, n ? ("none" === l && (M[q] = A.get(d, "display") || null, M[q] || (d.style.display = "")), "" === d.style.display && Ie(d) && (M[q] = ($ = _ = v = void 0, _ = (g = d).ownerDocument, ($ = fi[S = g.nodeName]) || (v = _.body.appendChild(_.createElement(S)), $ = p.css(v, "display"), v.parentNode.removeChild(v), "none" === $ && ($ = "block"), fi[S] = $)))) : "none" !== l && (M[q] = "none", A.set(d, "display", l)));
        for (q = 0; q < X; q++) null != M[q] && (e[q].style.display = M[q]);
        return e
    }
    p.fn.extend({
        show: function () {
            return xe(this, !0)
        },
        hide: function () {
            return xe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ie(this) ? p(this).show() : p(this).hide()
            })
        }
    });
    var Qt, Ke, ze = /^(?:checkbox|radio)$/i,
        Ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        oi = /^$|^module$|\/(?:java|ecma)script/i;
    Qt = ct.createDocumentFragment().appendChild(ct.createElement("div")), (Ke = ct.createElement("input")).setAttribute("type", "radio"), Ke.setAttribute("checked", "checked"), Ke.setAttribute("name", "t"), Qt.appendChild(Ke), it.checkClone = Qt.cloneNode(!0).cloneNode(!0).lastChild.checked, Qt.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!Qt.cloneNode(!0).lastChild.defaultValue, Qt.innerHTML = "<option></option>", it.option = !!Qt.lastChild;
    var Jt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function m(e, n) {
        var l;
        return l = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(n || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(n || "*") : [], void 0 === n || n && Ft(e, n) ? p.merge([e], l) : l
    }

    function k(e, n) {
        for (var l = 0, d = e.length; l < d; l++) A.set(e[l], "globalEval", !n || A.get(n[l], "globalEval"))
    }
    Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, it.option || (Jt.optgroup = Jt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var L = /<|&#?\w+;/;

    function N(e, n, l, d, g) {
        for (var v, _, S, $, M, q, X = n.createDocumentFragment(), z = [], B = 0, x = e.length; B < x; B++)
            if ((v = e[B]) || 0 === v)
                if ("object" === Pt(v)) p.merge(z, v.nodeType ? [v] : v);
                else if (L.test(v)) {
            for (_ = _ || X.appendChild(n.createElement("div")), S = (Ue.exec(v) || ["", ""])[1].toLowerCase(), _.innerHTML = ($ = Jt[S] || Jt._default)[1] + p.htmlPrefilter(v) + $[2], q = $[0]; q--;) _ = _.lastChild;
            p.merge(z, _.childNodes), (_ = X.firstChild).textContent = ""
        } else z.push(n.createTextNode(v));
        for (X.textContent = "", B = 0; v = z[B++];)
            if (d && -1 < p.inArray(v, d)) g && g.push(v);
            else if (M = he(v), _ = m(X.appendChild(v), "script"), M && k(_), l)
            for (q = 0; v = _[q++];) oi.test(v.type || "") && l.push(v);
        return X
    }
    var Q = /^([^.]*)(?:\.(.+)|)/;

    function R() {
        return !0
    }

    function W() {
        return !1
    }

    function nt(e, n) {
        return e === function () {
            try {
                return ct.activeElement
            } catch (l) {}
        }() == ("focus" === n)
    }

    function st(e, n, l, d, g, v) {
        var _, S;
        if ("object" == typeof n) {
            for (S in "string" != typeof l && (d = d || l, l = void 0), n) st(e, S, l, d, n[S], v);
            return e
        }
        if (null == d && null == g ? (g = l, d = l = void 0) : null == g && ("string" == typeof l ? (g = d, d = void 0) : (g = d, d = l, l = void 0)), !1 === g) g = W;
        else if (!g) return e;
        return 1 === v && (_ = g, (g = function ($) {
            return p().off($), _.apply(this, arguments)
        }).guid = _.guid || (_.guid = p.guid++)), e.each(function () {
            p.event.add(this, n, g, d, l)
        })
    }

    function ut(e, n, l) {
        l ? (A.set(e, n, !1), p.event.add(e, n, {
            namespace: !1,
            handler: function (d) {
                var g, v, _ = A.get(this, n);
                if (1 & d.isTrigger && this[n]) {
                    if (_.length)(p.event.special[n] || {}).delegateType && d.stopPropagation();
                    else if (_ = a.call(arguments), A.set(this, n, _), g = l(this, n), this[n](), _ !== (v = A.get(this, n)) || g ? A.set(this, n, !1) : v = {}, _ !== v) return d.stopImmediatePropagation(), d.preventDefault(), v && v.value
                } else _.length && (A.set(this, n, {
                    value: p.event.trigger(p.extend(_[0], p.Event.prototype), _.slice(1), this)
                }), d.stopImmediatePropagation())
            }
        })) : void 0 === A.get(e, n) && p.event.add(e, n, R)
    }
    p.event = {
        global: {},
        add: function (e, n, l, d, g) {
            var v, _, S, $, M, q, X, z, B, x, s, f = A.get(e);
            if (b(e))
                for (l.handler && (l = (v = l).handler, g = v.selector), g && p.find.matchesSelector(pe, g), l.guid || (l.guid = p.guid++), ($ = f.events) || ($ = f.events = Object.create(null)), (_ = f.handle) || (_ = f.handle = function (T) {
                        return void 0 !== p && p.event.triggered !== T.type ? p.event.dispatch.apply(e, arguments) : void 0
                    }), M = (n = (n || "").match(Zt) || [""]).length; M--;) B = s = (S = Q.exec(n[M]) || [])[1], x = (S[2] || "").split(".").sort(), B && (X = p.event.special[B] || {}, X = p.event.special[B = (g ? X.delegateType : X.bindType) || B] || {}, q = p.extend({
                    type: B,
                    origType: s,
                    data: d,
                    handler: l,
                    guid: l.guid,
                    selector: g,
                    needsContext: g && p.expr.match.needsContext.test(g),
                    namespace: x.join(".")
                }, v), (z = $[B]) || ((z = $[B] = []).delegateCount = 0, X.setup && !1 !== X.setup.call(e, d, x, _) || e.addEventListener && e.addEventListener(B, _)), X.add && (X.add.call(e, q), q.handler.guid || (q.handler.guid = l.guid)), g ? z.splice(z.delegateCount++, 0, q) : z.push(q), p.event.global[B] = !0)
        },
        remove: function (e, n, l, d, g) {
            var v, _, S, $, M, q, X, z, B, x, s, f = A.hasData(e) && A.get(e);
            if (f && ($ = f.events)) {
                for (M = (n = (n || "").match(Zt) || [""]).length; M--;)
                    if (B = s = (S = Q.exec(n[M]) || [])[1], x = (S[2] || "").split(".").sort(), B) {
                        for (X = p.event.special[B] || {}, z = $[B = (d ? X.delegateType : X.bindType) || B] || [], S = S[2] && new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)"), _ = v = z.length; v--;) q = z[v], !g && s !== q.origType || l && l.guid !== q.guid || S && !S.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (z.splice(v, 1), q.selector && z.delegateCount--, X.remove && X.remove.call(e, q));
                        _ && !z.length && (X.teardown && !1 !== X.teardown.call(e, x, f.handle) || p.removeEvent(e, B, f.handle), delete $[B])
                    } else
                        for (B in $) p.event.remove(e, B + n[M], l, d, !0);
                p.isEmptyObject($) && A.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var n, l, d, g, v, _, S = new Array(arguments.length),
                $ = p.event.fix(e),
                M = (A.get(this, "events") || Object.create(null))[$.type] || [],
                q = p.event.special[$.type] || {};
            for (S[0] = $, n = 1; n < arguments.length; n++) S[n] = arguments[n];
            if ($.delegateTarget = this, !q.preDispatch || !1 !== q.preDispatch.call(this, $)) {
                for (_ = p.event.handlers.call(this, $, M), n = 0;
                    (g = _[n++]) && !$.isPropagationStopped();)
                    for ($.currentTarget = g.elem, l = 0;
                        (v = g.handlers[l++]) && !$.isImmediatePropagationStopped();) $.rnamespace && !1 !== v.namespace && !$.rnamespace.test(v.namespace) || ($.handleObj = v, $.data = v.data, void 0 !== (d = ((p.event.special[v.origType] || {}).handle || v.handler).apply(g.elem, S)) && !1 === ($.result = d) && ($.preventDefault(), $.stopPropagation()));
                return q.postDispatch && q.postDispatch.call(this, $), $.result
            }
        },
        handlers: function (e, n) {
            var l, d, g, v, _, S = [],
                $ = n.delegateCount,
                M = e.target;
            if ($ && M.nodeType && !("click" === e.type && 1 <= e.button))
                for (; M !== this; M = M.parentNode || this)
                    if (1 === M.nodeType && ("click" !== e.type || !0 !== M.disabled)) {
                        for (v = [], _ = {}, l = 0; l < $; l++) void 0 === _[g = (d = n[l]).selector + " "] && (_[g] = d.needsContext ? -1 < p(g, this).index(M) : p.find(g, this, null, [M]).length), _[g] && v.push(d);
                        v.length && S.push({
                            elem: M,
                            handlers: v
                        })
                    } return M = this, $ < n.length && S.push({
                elem: M,
                handlers: n.slice($)
            }), S
        },
        addProp: function (e, n) {
            Object.defineProperty(p.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: lt(n) ? function () {
                    if (this.originalEvent) return n(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (l) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: l
                    })
                }
            })
        },
        fix: function (e) {
            return e[p.expando] ? e : new p.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var n = this || e;
                    return ze.test(n.type) && n.click && Ft(n, "input") && ut(n, "click", R), !1
                },
                trigger: function (e) {
                    var n = this || e;
                    return ze.test(n.type) && n.click && Ft(n, "input") && ut(n, "click"), !0
                },
                _default: function (e) {
                    var n = e.target;
                    return ze.test(n.type) && n.click && Ft(n, "input") && A.get(n, "click") || Ft(n, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, p.removeEvent = function (e, n, l) {
        e.removeEventListener && e.removeEventListener(n, l)
    }, p.Event = function (e, n) {
        if (!(this instanceof p.Event)) return new p.Event(e, n);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? R : W, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, n && p.extend(this, n), this.timeStamp = e && e.timeStamp || Date.now(), this[p.expando] = !0
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: W,
        isPropagationStopped: W,
        isImmediatePropagationStopped: W,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = R, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = R, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = R, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, p.event.addProp), p.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, n) {
        p.event.special[e] = {
            setup: function () {
                return ut(this, e, nt), !1
            },
            trigger: function () {
                return ut(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: n
        }
    }), p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, n) {
        p.event.special[e] = {
            delegateType: n,
            bindType: n,
            handle: function (l) {
                var d, g = l.relatedTarget,
                    v = l.handleObj;
                return g && (g === this || p.contains(this, g)) || (l.type = v.origType, d = v.handler.apply(this, arguments), l.type = n), d
            }
        }
    }), p.fn.extend({
        on: function (e, n, l, d) {
            return st(this, e, n, l, d)
        },
        one: function (e, n, l, d) {
            return st(this, e, n, l, d, 1)
        },
        off: function (e, n, l) {
            var d, g;
            if (e && e.preventDefault && e.handleObj) return d = e.handleObj, p(e.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof e) {
                for (g in e) this.off(g, n, e[g]);
                return this
            }
            return !1 !== n && "function" != typeof n || (l = n, n = void 0), !1 === l && (l = W), this.each(function () {
                p.event.remove(this, e, l, n)
            })
        }
    });
    var pt = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _t(e, n) {
        return Ft(e, "table") && Ft(11 !== n.nodeType ? n : n.firstChild, "tr") && p(e).children("tbody")[0] || e
    }

    function Et(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ve(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function qe(e, n) {
        var l, d, g, v, _, S;
        if (1 === n.nodeType) {
            if (A.hasData(e) && (S = A.get(e).events))
                for (g in A.remove(n, "handle events"), S)
                    for (l = 0, d = S[g].length; l < d; l++) p.event.add(n, g, S[g][l]);
            Z.hasData(e) && (v = Z.access(e), _ = p.extend({}, v), Z.set(n, _))
        }
    }

    function Ae(e, n, l, d) {
        n = i(n);
        var g, v, _, S, $, M, q = 0,
            X = e.length,
            z = X - 1,
            B = n[0],
            x = lt(B);
        if (x || 1 < X && "string" == typeof B && !it.checkClone && at.test(B)) return e.each(function (s) {
            var f = e.eq(s);
            x && (n[0] = B.call(this, s, f.html())), Ae(f, n, l, d)
        });
        if (X && (v = (g = N(n, e[0].ownerDocument, !1, e, d)).firstChild, 1 === g.childNodes.length && (g = v), v || d)) {
            for (S = (_ = p.map(m(g, "script"), Et)).length; q < X; q++) $ = g, q !== z && ($ = p.clone($, !0, !0), S && p.merge(_, m($, "script"))), l.call(e[q], $, q);
            if (S)
                for (M = _[_.length - 1].ownerDocument, p.map(_, ve), q = 0; q < S; q++) oi.test(($ = _[q]).type || "") && !A.access($, "globalEval") && p.contains(M, $) && ($.src && "module" !== ($.type || "").toLowerCase() ? p._evalUrl && !$.noModule && p._evalUrl($.src, {
                    nonce: $.nonce || $.getAttribute("nonce")
                }, M) : qt($.textContent.replace(dt, ""), $, M))
        }
        return e
    }

    function ye(e, n, l) {
        for (var d, g = n ? p.filter(n, e) : e, v = 0; null != (d = g[v]); v++) l || 1 !== d.nodeType || p.cleanData(m(d)), d.parentNode && (l && he(d) && k(m(d, "script")), d.parentNode.removeChild(d));
        return e
    }
    p.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, n, l) {
            var d, g, v, _, S, $, M, q = e.cloneNode(!0),
                X = he(e);
            if (!(it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (_ = m(q), d = 0, g = (v = m(e)).length; d < g; d++) S = v[d], "input" === (M = ($ = _[d]).nodeName.toLowerCase()) && ze.test(S.type) ? $.checked = S.checked : "input" !== M && "textarea" !== M || ($.defaultValue = S.defaultValue);
            if (n)
                if (l)
                    for (v = v || m(e), _ = _ || m(q), d = 0, g = v.length; d < g; d++) qe(v[d], _[d]);
                else qe(e, q);
            return 0 < (_ = m(q, "script")).length && k(_, !X && m(e, "script")), q
        },
        cleanData: function (e) {
            for (var n, l, d, g = p.event.special, v = 0; void 0 !== (l = e[v]); v++)
                if (b(l)) {
                    if (n = l[A.expando]) {
                        if (n.events)
                            for (d in n.events) g[d] ? p.event.remove(l, d) : p.removeEvent(l, d, n.handle);
                        l[A.expando] = void 0
                    }
                    l[Z.expando] && (l[Z.expando] = void 0)
                }
        }
    }), p.fn.extend({
        detach: function (e) {
            return ye(this, e, !0)
        },
        remove: function (e) {
            return ye(this, e)
        },
        text: function (e) {
            return Gt(this, function (n) {
                return void 0 === n ? p.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Ae(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _t(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Ae(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var n = _t(this, e);
                    n.insertBefore(e, n.firstChild)
                }
            })
        },
        before: function () {
            return Ae(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Ae(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, n = 0; null != (e = this[n]); n++) 1 === e.nodeType && (p.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, n) {
            return e = null != e && e, n = null == n ? e : n, this.map(function () {
                return p.clone(this, e, n)
            })
        },
        html: function (e) {
            return Gt(this, function (n) {
                var l = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === n && 1 === l.nodeType) return l.innerHTML;
                if ("string" == typeof n && !pt.test(n) && !Jt[(Ue.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = p.htmlPrefilter(n);
                    try {
                        for (; d < g; d++) 1 === (l = this[d] || {}).nodeType && (p.cleanData(m(l, !1)), l.innerHTML = n);
                        l = 0
                    } catch (v) {}
                }
                l && this.empty().append(n)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ae(this, arguments, function (n) {
                var l = this.parentNode;
                p.inArray(this, e) < 0 && (p.cleanData(m(this)), l && l.replaceChild(n, this))
            }, e)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, n) {
        p.fn[e] = function (l) {
            for (var d, g = [], v = p(l), _ = v.length - 1, S = 0; S <= _; S++) d = S === _ ? this : this.clone(!0), p(v[S])[n](d), r.apply(g, d.get());
            return this.pushStack(g)
        }
    });
    var Be = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
        di = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = h), n.getComputedStyle(e)
        },
        le = function (e, n, l) {
            var d, g, v = {};
            for (g in n) v[g] = e.style[g], e.style[g] = n[g];
            for (g in d = l.call(e), n) e.style[g] = v[g];
            return d
        },
        Yi = new RegExp(Rt.join("|"), "i");

    function ui(e, n, l) {
        var d, g, v, _, S = e.style;
        return (l = l || di(e)) && ("" !== (_ = l.getPropertyValue(n) || l[n]) || he(e) || (_ = p.style(e, n)), !it.pixelBoxStyles() && Be.test(_) && Yi.test(n) && (d = S.width, g = S.minWidth, v = S.maxWidth, S.minWidth = S.maxWidth = S.width = _, _ = l.width, S.width = d, S.minWidth = g, S.maxWidth = v)), void 0 !== _ ? _ + "" : _
    }

    function bi(e, n) {
        return {
            get: function () {
                if (!e()) return (this.get = n).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (M) {
                $.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", M.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", pe.appendChild($).appendChild(M);
                var q = h.getComputedStyle(M);
                l = "1%" !== q.top, S = 12 === n(q.marginLeft), M.style.right = "60%", v = 36 === n(q.right), d = 36 === n(q.width), M.style.position = "absolute", g = 12 === n(M.offsetWidth / 3), pe.removeChild($), M = null
            }
        }

        function n(q) {
            return Math.round(parseFloat(q))
        }
        var l, d, g, v, _, S, $ = ct.createElement("div"),
            M = ct.createElement("div");
        M.style && (M.style.backgroundClip = "content-box", M.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === M.style.backgroundClip, p.extend(it, {
            boxSizingReliable: function () {
                return e(), d
            },
            pixelBoxStyles: function () {
                return e(), v
            },
            pixelPosition: function () {
                return e(), l
            },
            reliableMarginLeft: function () {
                return e(), S
            },
            scrollboxSize: function () {
                return e(), g
            },
            reliableTrDimensions: function () {
                var q, X, z, B;
                return null == _ && (q = ct.createElement("table"), X = ct.createElement("tr"), z = ct.createElement("div"), q.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", X.style.cssText = "border:1px solid", X.style.height = "1px", z.style.height = "9px", z.style.display = "block", pe.appendChild(q).appendChild(X).appendChild(z), B = h.getComputedStyle(X), _ = parseInt(B.height, 10) + parseInt(B.borderTopWidth, 10) + parseInt(B.borderBottomWidth, 10) === X.offsetHeight, pe.removeChild(q)), _
            }
        }))
    }();
    var Vi = ["Webkit", "Moz", "ms"],
        Ki = ct.createElement("div").style,
        Li = {};

    function xi(e) {
        return p.cssProps[e] || Li[e] || (e in Ki ? e : Li[e] = function (l) {
            for (var d = l[0].toUpperCase() + l.slice(1), g = Vi.length; g--;)
                if ((l = Vi[g] + d) in Ki) return l
        }(e) || e)
    }
    var Zi = /^(none|table(?!-c[ea]).+)/,
        Gi = /^--/,
        _n = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ii = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Mi(e, n, l) {
        var d = Wt.exec(n);
        return d ? Math.max(0, d[2] - (l || 0)) + (d[3] || "px") : n
    }

    function Ci(e, n, l, d, g, v) {
        var _ = "width" === n ? 1 : 0,
            S = 0,
            $ = 0;
        if (l === (d ? "border" : "content")) return 0;
        for (; _ < 4; _ += 2) "margin" === l && ($ += p.css(e, l + Rt[_], !0, g)), d ? ("content" === l && ($ -= p.css(e, "padding" + Rt[_], !0, g)), "margin" !== l && ($ -= p.css(e, "border" + Rt[_] + "Width", !0, g))) : ($ += p.css(e, "padding" + Rt[_], !0, g), "padding" !== l ? $ += p.css(e, "border" + Rt[_] + "Width", !0, g) : S += p.css(e, "border" + Rt[_] + "Width", !0, g));
        return !d && 0 <= v && ($ += Math.max(0, Math.ceil(e["offset" + n[0].toUpperCase() + n.slice(1)] - v - $ - S - .5)) || 0), $
    }

    function Pi(e, n, l) {
        var d = di(e),
            g = (!it.boxSizingReliable() || l) && "border-box" === p.css(e, "boxSizing", !1, d),
            v = g,
            _ = ui(e, n, d),
            S = "offset" + n[0].toUpperCase() + n.slice(1);
        if (Be.test(_)) {
            if (!l) return _;
            _ = "auto"
        }
        return (!it.boxSizingReliable() && g || !it.reliableTrDimensions() && Ft(e, "tr") || "auto" === _ || !parseFloat(_) && "inline" === p.css(e, "display", !1, d)) && e.getClientRects().length && (g = "border-box" === p.css(e, "boxSizing", !1, d), (v = S in e) && (_ = e[S])), (_ = parseFloat(_) || 0) + Ci(e, n, l || (g ? "border" : "content"), v, d, _) + "px"
    }

    function Me(e, n, l, d, g) {
        return new Me.prototype.init(e, n, l, d, g)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function (e, n) {
                    if (n) {
                        var l = ui(e, "opacity");
                        return "" === l ? "1" : l
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, n, l, d) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var g, v, _, S = re(n),
                    $ = Gi.test(n),
                    M = e.style;
                if ($ || (n = xi(S)), _ = p.cssHooks[n] || p.cssHooks[S], void 0 === l) return _ && "get" in _ && void 0 !== (g = _.get(e, !1, d)) ? g : M[n];
                "string" == (v = typeof l) && (g = Wt.exec(l)) && g[1] && (l = Ee(e, n, g), v = "number"), null != l && l == l && ("number" !== v || $ || (l += g && g[3] || (p.cssNumber[S] ? "" : "px")), it.clearCloneStyle || "" !== l || 0 !== n.indexOf("background") || (M[n] = "inherit"), _ && "set" in _ && void 0 === (l = _.set(e, l, d)) || ($ ? M.setProperty(n, l) : M[n] = l))
            }
        },
        css: function (e, n, l, d) {
            var g, v, _, S = re(n);
            return Gi.test(n) || (n = xi(S)), (_ = p.cssHooks[n] || p.cssHooks[S]) && "get" in _ && (g = _.get(e, !0, l)), void 0 === g && (g = ui(e, n, d)), "normal" === g && n in Ii && (g = Ii[n]), "" === l || l ? (v = parseFloat(g), !0 === l || isFinite(v) ? v || 0 : g) : g
        }
    }), p.each(["height", "width"], function (e, n) {
        p.cssHooks[n] = {
            get: function (l, d, g) {
                if (d) return !Zi.test(p.css(l, "display")) || l.getClientRects().length && l.getBoundingClientRect().width ? Pi(l, n, g) : le(l, _n, function () {
                    return Pi(l, n, g)
                })
            },
            set: function (l, d, g) {
                var v, _ = di(l),
                    S = !it.scrollboxSize() && "absolute" === _.position,
                    $ = (S || g) && "border-box" === p.css(l, "boxSizing", !1, _),
                    M = g ? Ci(l, n, g, $, _) : 0;
                return $ && S && (M -= Math.ceil(l["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(_[n]) - Ci(l, n, "border", !1, _) - .5)), M && (v = Wt.exec(d)) && "px" !== (v[3] || "px") && (l.style[n] = d, d = p.css(l, n)), Mi(0, d, M)
            }
        }
    }), p.cssHooks.marginLeft = bi(it.reliableMarginLeft, function (e, n) {
        if (n) return (parseFloat(ui(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, n) {
        p.cssHooks[e + n] = {
            expand: function (l) {
                for (var d = 0, g = {}, v = "string" == typeof l ? l.split(" ") : [l]; d < 4; d++) g[e + Rt[d] + n] = v[d] || v[d - 2] || v[0];
                return g
            }
        }, "margin" !== e && (p.cssHooks[e + n].set = Mi)
    }), p.fn.extend({
        css: function (e, n) {
            return Gt(this, function (l, d, g) {
                var v, _, S = {},
                    $ = 0;
                if (Array.isArray(d)) {
                    for (v = di(l), _ = d.length; $ < _; $++) S[d[$]] = p.css(l, d[$], !1, v);
                    return S
                }
                return void 0 !== g ? p.style(l, d, g) : p.css(l, d)
            }, e, n, 1 < arguments.length)
        }
    }), ((p.Tween = Me).prototype = {
        constructor: Me,
        init: function (e, n, l, d, g, v) {
            this.elem = e, this.prop = l, this.easing = g || p.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = d, this.unit = v || (p.cssNumber[l] ? "" : "px")
        },
        cur: function () {
            var e = Me.propHooks[this.prop];
            return e && e.get ? e.get(this) : Me.propHooks._default.get(this)
        },
        run: function (e) {
            var n, l = Me.propHooks[this.prop];
            return this.pos = n = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), l && l.set ? l.set(this) : Me.propHooks._default.set(this), this
        }
    }).init.prototype = Me.prototype, (Me.propHooks = {
        _default: {
            get: function (e) {
                var n;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (n = p.css(e.elem, e.prop, "")) && "auto" !== n ? n : 0
            },
            set: function (e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !p.cssHooks[e.prop] && null == e.elem.style[xi(e.prop)] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Me.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, p.fx = Me.prototype.init, p.fx.step = {};
    var ri, Ti, ai, ji, Ji = /^(?:toggle|show|hide)$/,
        tn = /queueHooks$/;

    function ki() {
        Ti && (!1 === ct.hidden && h.requestAnimationFrame ? h.requestAnimationFrame(ki) : h.setTimeout(ki, p.fx.interval), p.fx.tick())
    }

    function Ni() {
        return h.setTimeout(function () {
            ri = void 0
        }), ri = Date.now()
    }

    function gi(e, n) {
        var l, d = 0,
            g = {
                height: e
            };
        for (n = n ? 1 : 0; d < 4; d += 2 - n) g["margin" + (l = Rt[d])] = g["padding" + l] = e;
        return n && (g.opacity = g.width = e), g
    }

    function Hi(e, n, l) {
        for (var d, g = ($e.tweeners[n] || []).concat($e.tweeners["*"]), v = 0, _ = g.length; v < _; v++)
            if (d = g[v].call(l, n, e)) return d
    }

    function $e(e, n, l) {
        var d, g, v = 0,
            _ = $e.prefilters.length,
            S = p.Deferred().always(function () {
                delete $.elem
            }),
            $ = function () {
                if (g) return !1;
                for (var X = ri || Ni(), z = Math.max(0, M.startTime + M.duration - X), B = 1 - (z / M.duration || 0), x = 0, s = M.tweens.length; x < s; x++) M.tweens[x].run(B);
                return S.notifyWith(e, [M, B, z]), B < 1 && s ? z : (s || S.notifyWith(e, [M, 1, 0]), S.resolveWith(e, [M]), !1)
            },
            M = S.promise({
                elem: e,
                props: p.extend({}, n),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, l),
                originalProperties: n,
                originalOptions: l,
                startTime: ri || Ni(),
                duration: l.duration,
                tweens: [],
                createTween: function (X, z) {
                    var B = p.Tween(e, M.opts, X, z, M.opts.specialEasing[X] || M.opts.easing);
                    return M.tweens.push(B), B
                },
                stop: function (X) {
                    var z = 0,
                        B = X ? M.tweens.length : 0;
                    if (g) return this;
                    for (g = !0; z < B; z++) M.tweens[z].run(1);
                    return X ? (S.notifyWith(e, [M, 1, 0]), S.resolveWith(e, [M, X])) : S.rejectWith(e, [M, X]), this
                }
            }),
            q = M.props;
        for (function (X, z) {
                var B, x, s, f, T;
                for (B in X)
                    if (s = z[x = re(B)], f = X[B], Array.isArray(f) && (s = f[1], f = X[B] = f[0]), B !== x && (X[x] = f, delete X[B]), (T = p.cssHooks[x]) && "expand" in T)
                        for (B in f = T.expand(f), delete X[x], f) B in X || (X[B] = f[B], z[B] = s);
                    else z[x] = s
            }(q, M.opts.specialEasing); v < _; v++)
            if (d = $e.prefilters[v].call(M, e, q, M.opts)) return lt(d.stop) && (p._queueHooks(M.elem, M.opts.queue).stop = d.stop.bind(d)), d;
        return p.map(q, Hi, M), lt(M.opts.start) && M.opts.start.call(e, M), M.progress(M.opts.progress).done(M.opts.done, M.opts.complete).fail(M.opts.fail).always(M.opts.always), p.fx.timer(p.extend($, {
            elem: e,
            anim: M,
            queue: M.opts.queue
        })), M
    }
    p.Animation = p.extend($e, {
        tweeners: {
            "*": [function (e, n) {
                var l = this.createTween(e, n);
                return Ee(l.elem, e, Wt.exec(n), l), l
            }]
        },
        tweener: function (e, n) {
            lt(e) ? (n = e, e = ["*"]) : e = e.match(Zt);
            for (var l, d = 0, g = e.length; d < g; d++)($e.tweeners[l = e[d]] = $e.tweeners[l] || []).unshift(n)
        },
        prefilters: [function (e, n, l) {
            var d, g, v, _, S, $, M, q, X = "width" in n || "height" in n,
                z = this,
                B = {},
                x = e.style,
                s = e.nodeType && Ie(e),
                f = A.get(e, "fxshow");
            for (d in l.queue || (null == (_ = p._queueHooks(e, "fx")).unqueued && (_.unqueued = 0, S = _.empty.fire, _.empty.fire = function () {
                    _.unqueued || S()
                }), _.unqueued++, z.always(function () {
                    z.always(function () {
                        _.unqueued--, p.queue(e, "fx").length || _.empty.fire()
                    })
                })), n)
                if (Ji.test(g = n[d])) {
                    if (delete n[d], v = v || "toggle" === g, g === (s ? "hide" : "show")) {
                        if ("show" !== g || !f || void 0 === f[d]) continue;
                        s = !0
                    }
                    B[d] = f && f[d] || p.style(e, d)
                } if (($ = !p.isEmptyObject(n)) || !p.isEmptyObject(B))
                for (d in X && 1 === e.nodeType && (l.overflow = [x.overflow, x.overflowX, x.overflowY], null == (M = f && f.display) && (M = A.get(e, "display")), "none" === (q = p.css(e, "display")) && (M ? q = M : (xe([e], !0), M = e.style.display || M, q = p.css(e, "display"), xe([e]))), ("inline" === q || "inline-block" === q && null != M) && "none" === p.css(e, "float") && ($ || (z.done(function () {
                        x.display = M
                    }), null == M && (M = "none" === (q = x.display) ? "" : q)), x.display = "inline-block")), l.overflow && (x.overflow = "hidden", z.always(function () {
                        x.overflow = l.overflow[0], x.overflowX = l.overflow[1], x.overflowY = l.overflow[2]
                    })), $ = !1, B) $ || (f ? "hidden" in f && (s = f.hidden) : f = A.access(e, "fxshow", {
                    display: M
                }), v && (f.hidden = !s), s && xe([e], !0), z.done(function () {
                    for (d in s || xe([e]), A.remove(e, "fxshow"), B) p.style(e, d, B[d])
                })), $ = Hi(s ? f[d] : 0, d, z), d in f || (f[d] = $.start, s && ($.end = $.start, $.start = 0))
        }],
        prefilter: function (e, n) {
            n ? $e.prefilters.unshift(e) : $e.prefilters.push(e)
        }
    }), p.speed = function (e, n, l) {
        var d = e && "object" == typeof e ? p.extend({}, e) : {
            complete: l || !l && n || lt(e) && e,
            duration: e,
            easing: l && n || n && !lt(n) && n
        };
        return p.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration = d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            lt(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
        }, d
    }, p.fn.extend({
        fadeTo: function (e, n, l, d) {
            return this.filter(Ie).css("opacity", 0).show().end().animate({
                opacity: n
            }, e, l, d)
        },
        animate: function (e, n, l, d) {
            var g = p.isEmptyObject(e),
                v = p.speed(n, l, d),
                _ = function () {
                    var S = $e(this, p.extend({}, e), v);
                    (g || A.get(this, "finish")) && S.stop(!0)
                };
            return _.finish = _, g || !1 === v.queue ? this.each(_) : this.queue(v.queue, _)
        },
        stop: function (e, n, l) {
            var d = function (g) {
                var v = g.stop;
                delete g.stop, v(l)
            };
            return "string" != typeof e && (l = n, n = e, e = void 0), n && this.queue(e || "fx", []), this.each(function () {
                var g = !0,
                    v = null != e && e + "queueHooks",
                    _ = p.timers,
                    S = A.get(this);
                if (v) S[v] && S[v].stop && d(S[v]);
                else
                    for (v in S) S[v] && S[v].stop && tn.test(v) && d(S[v]);
                for (v = _.length; v--;) _[v].elem !== this || null != e && _[v].queue !== e || (_[v].anim.stop(l), g = !1, _.splice(v, 1));
                !g && l || p.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var n, l = A.get(this),
                    d = l[e + "queue"],
                    g = l[e + "queueHooks"],
                    v = p.timers,
                    _ = d ? d.length : 0;
                for (l.finish = !0, p.queue(this, e, []), g && g.stop && g.stop.call(this, !0), n = v.length; n--;) v[n].elem === this && v[n].queue === e && (v[n].anim.stop(!0), v.splice(n, 1));
                for (n = 0; n < _; n++) d[n] && d[n].finish && d[n].finish.call(this);
                delete l.finish
            })
        }
    }), p.each(["toggle", "show", "hide"], function (e, n) {
        var l = p.fn[n];
        p.fn[n] = function (d, g, v) {
            return null == d || "boolean" == typeof d ? l.apply(this, arguments) : this.animate(gi(n, !0), d, g, v)
        }
    }), p.each({
        slideDown: gi("show"),
        slideUp: gi("hide"),
        slideToggle: gi("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, n) {
        p.fn[e] = function (l, d, g) {
            return this.animate(n, l, d, g)
        }
    }), p.timers = [], p.fx.tick = function () {
        var e, n = 0,
            l = p.timers;
        for (ri = Date.now(); n < l.length; n++)(e = l[n])() || l[n] !== e || l.splice(n--, 1);
        l.length || p.fx.stop(), ri = void 0
    }, p.fx.timer = function (e) {
        p.timers.push(e), p.fx.start()
    }, p.fx.interval = 13, p.fx.start = function () {
        Ti || (Ti = !0, ki())
    }, p.fx.stop = function () {
        Ti = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fn.delay = function (e, n) {
        return e = p.fx && p.fx.speeds[e] || e, this.queue(n = n || "fx", function (l, d) {
            var g = h.setTimeout(l, e);
            d.stop = function () {
                h.clearTimeout(g)
            }
        })
    }, ai = ct.createElement("input"), ji = ct.createElement("select").appendChild(ct.createElement("option")), ai.type = "checkbox", it.checkOn = "" !== ai.value, it.optSelected = ji.selected, (ai = ct.createElement("input")).value = "t", ai.type = "radio", it.radioValue = "t" === ai.value;
    var Ze, pi = p.expr.attrHandle;
    p.fn.extend({
        attr: function (e, n) {
            return Gt(this, p.attr, e, n, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function (e, n, l) {
            var d, g, v = e.nodeType;
            if (3 !== v && 8 !== v && 2 !== v) return void 0 === e.getAttribute ? p.prop(e, n, l) : (1 === v && p.isXMLDoc(e) || (g = p.attrHooks[n.toLowerCase()] || (p.expr.match.bool.test(n) ? Ze : void 0)), void 0 !== l ? null === l ? void p.removeAttr(e, n) : g && "set" in g && void 0 !== (d = g.set(e, l, n)) ? d : (e.setAttribute(n, l + ""), l) : g && "get" in g && null !== (d = g.get(e, n)) ? d : null == (d = p.find.attr(e, n)) ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function (e, n) {
                    if (!it.radioValue && "radio" === n && Ft(e, "input")) {
                        var l = e.value;
                        return e.setAttribute("type", n), l && (e.value = l), n
                    }
                }
            }
        },
        removeAttr: function (e, n) {
            var l, d = 0,
                g = n && n.match(Zt);
            if (g && 1 === e.nodeType)
                for (; l = g[d++];) e.removeAttribute(l)
        }
    }), Ze = {
        set: function (e, n, l) {
            return !1 === n ? p.removeAttr(e, l) : e.setAttribute(l, l), l
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var l = pi[n] || p.find.attr;
        pi[n] = function (d, g, v) {
            var _, S, $ = g.toLowerCase();
            return v || (S = pi[$], pi[$] = _, _ = null != l(d, g, v) ? $ : null, pi[$] = S), _
        }
    });
    var en = /^(?:input|select|textarea|button)$/i,
        wn = /^(?:a|area)$/i;

    function Ge(e) {
        return (e.match(Zt) || []).join(" ")
    }

    function Je(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Si(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Zt) || []
    }
    p.fn.extend({
        prop: function (e, n) {
            return Gt(this, p.prop, e, n, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[p.propFix[e] || e]
            })
        }
    }), p.extend({
        prop: function (e, n, l) {
            var d, g, v = e.nodeType;
            if (3 !== v && 8 !== v && 2 !== v) return 1 === v && p.isXMLDoc(e) || (g = p.propHooks[n = p.propFix[n] || n]), void 0 !== l ? g && "set" in g && void 0 !== (d = g.set(e, l, n)) ? d : e[n] = l : g && "get" in g && null !== (d = g.get(e, n)) ? d : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = p.find.attr(e, "tabindex");
                    return n ? parseInt(n, 10) : en.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), it.optSelected || (p.propHooks.selected = {
        get: function (e) {
            return null
        },
        set: function (e) {}
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        p.propFix[this.toLowerCase()] = this
    }), p.fn.extend({
        addClass: function (e) {
            var n, l, d, g, v, _, S, $ = 0;
            if (lt(e)) return this.each(function (M) {
                p(this).addClass(e.call(this, M, Je(this)))
            });
            if ((n = Si(e)).length)
                for (; l = this[$++];)
                    if (g = Je(l), d = 1 === l.nodeType && " " + Ge(g) + " ") {
                        for (_ = 0; v = n[_++];) d.indexOf(" " + v + " ") < 0 && (d += v + " ");
                        g !== (S = Ge(d)) && l.setAttribute("class", S)
                    } return this
        },
        removeClass: function (e) {
            var n, l, d, g, v, _, S, $ = 0;
            if (lt(e)) return this.each(function (M) {
                p(this).removeClass(e.call(this, M, Je(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((n = Si(e)).length)
                for (; l = this[$++];)
                    if (g = Je(l), d = 1 === l.nodeType && " " + Ge(g) + " ") {
                        for (_ = 0; v = n[_++];)
                            for (; - 1 < d.indexOf(" " + v + " ");) d = d.replace(" " + v + " ", " ");
                        g !== (S = Ge(d)) && l.setAttribute("class", S)
                    } return this
        },
        toggleClass: function (e, n) {
            var l = typeof e,
                d = "string" === l || Array.isArray(e);
            return "boolean" == typeof n && d ? n ? this.addClass(e) : this.removeClass(e) : lt(e) ? this.each(function (g) {
                p(this).toggleClass(e.call(this, g, Je(this), n), n)
            }) : this.each(function () {
                var g, v, _, S;
                if (d)
                    for (v = 0, _ = p(this), S = Si(e); g = S[v++];) _.hasClass(g) ? _.removeClass(g) : _.addClass(g);
                else void 0 !== e && "boolean" !== l || ((g = Je(this)) && A.set(this, "__className__", g), this.setAttribute && this.setAttribute("class", g || !1 === e ? "" : A.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var n, l, d = 0;
            for (n = " " + e + " "; l = this[d++];)
                if (1 === l.nodeType && -1 < (" " + Ge(Je(l)) + " ").indexOf(n)) return !0;
            return !1
        }
    });
    var ti = /\r/g;
    p.fn.extend({
        val: function (e) {
            var n, l, d, g = this[0];
            return arguments.length ? (d = lt(e), this.each(function (v) {
                var _;
                1 === this.nodeType && (null == (_ = d ? e.call(this, v, p(this).val()) : e) ? _ = "" : "number" == typeof _ ? _ += "" : Array.isArray(_) && (_ = p.map(_, function (S) {
                    return null == S ? "" : S + ""
                })), (n = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, _, "value") || (this.value = _))
            })) : g ? (n = p.valHooks[g.type] || p.valHooks[g.nodeName.toLowerCase()]) && "get" in n && void 0 !== (l = n.get(g, "value")) ? l : "string" == typeof (l = g.value) ? l.replace(ti, "") : null == l ? "" : l : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var n = p.find.attr(e, "value");
                    return null != n ? n : Ge(p.text(e))
                }
            },
            select: {
                get: function (e) {
                    var n, l, d, g = e.options,
                        v = e.selectedIndex,
                        _ = "select-one" === e.type,
                        S = _ ? null : [],
                        $ = _ ? v + 1 : g.length;
                    for (d = v < 0 ? $ : _ ? v : 0; d < $; d++)
                        if (((l = g[d]).selected || d === v) && !l.disabled && (!l.parentNode.disabled || !Ft(l.parentNode, "optgroup"))) {
                            if (n = p(l).val(), _) return n;
                            S.push(n)
                        } return S
                },
                set: function (e, n) {
                    for (var l, d, g = e.options, v = p.makeArray(n), _ = g.length; _--;)((d = g[_]).selected = -1 < p.inArray(p.valHooks.option.get(d), v)) && (l = !0);
                    return l || (e.selectedIndex = -1), v
                }
            }
        }
    }), p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
            set: function (e, n) {
                if (Array.isArray(n)) return e.checked = -1 < p.inArray(p(e).val(), n)
            }
        }, it.checkOn || (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), it.focusin = "onfocusin" in h;
    var nn = /^(?:focusinfocus|focusoutblur)$/,
        sn = function (e) {
            e.stopPropagation()
        };
    p.extend(p.event, {
        trigger: function (e, n, l, d) {
            var g, v, _, S, $, M, q, X, z = [l || ct],
                B = P.call(e, "type") ? e.type : e,
                x = P.call(e, "namespace") ? e.namespace.split(".") : [];
            if (v = X = _ = l = l || ct, 3 !== l.nodeType && 8 !== l.nodeType && !nn.test(B + p.event.triggered) && (-1 < B.indexOf(".") && (B = (x = B.split(".")).shift(), x.sort()), $ = B.indexOf(":") < 0 && "on" + B, (e = e[p.expando] ? e : new p.Event(B, "object" == typeof e && e)).isTrigger = d ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = l), n = null == n ? [e] : p.makeArray(n, [e]), q = p.event.special[B] || {}, d || !q.trigger || !1 !== q.trigger.apply(l, n))) {
                if (!d && !q.noBubble && !gt(l)) {
                    for (nn.test((S = q.delegateType || B) + B) || (v = v.parentNode); v; v = v.parentNode) z.push(v), _ = v;
                    _ === (l.ownerDocument || ct) && z.push(_.defaultView || _.parentWindow || h)
                }
                for (g = 0;
                    (v = z[g++]) && !e.isPropagationStopped();) X = v, e.type = 1 < g ? S : q.bindType || B, (M = (A.get(v, "events") || Object.create(null))[e.type] && A.get(v, "handle")) && M.apply(v, n), (M = $ && v[$]) && M.apply && b(v) && (e.result = M.apply(v, n), !1 === e.result && e.preventDefault());
                return e.type = B, d || e.isDefaultPrevented() || q._default && !1 !== q._default.apply(z.pop(), n) || !b(l) || $ && lt(l[B]) && !gt(l) && ((_ = l[$]) && (l[$] = null), p.event.triggered = B, e.isPropagationStopped() && X.addEventListener(B, sn), l[B](), e.isPropagationStopped() && X.removeEventListener(B, sn), p.event.triggered = void 0, _ && (l[$] = _)), e.result
            }
        },
        simulate: function (e, n, l) {
            var d = p.extend(new p.Event, l, {
                type: e,
                isSimulated: !0
            });
            p.event.trigger(d, null, n)
        }
    }), p.fn.extend({
        trigger: function (e, n) {
            return this.each(function () {
                p.event.trigger(e, n, this)
            })
        },
        triggerHandler: function (e, n) {
            var l = this[0];
            if (l) return p.event.trigger(e, n, l, !0)
        }
    }), it.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, n) {
        var l = function (d) {
            p.event.simulate(n, d.target, p.event.fix(d))
        };
        p.event.special[n] = {
            setup: function () {
                var d = this.ownerDocument || this.document || this,
                    g = A.access(d, n);
                g || d.addEventListener(e, l, !0), A.access(d, n, (g || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this.document || this,
                    g = A.access(d, n) - 1;
                g ? A.access(d, n, g) : (d.removeEventListener(e, l, !0), A.remove(d, n))
            }
        }
    });
    var mi = h.location,
        on = {
            guid: Date.now()
        },
        Ei = /\?/;
    p.parseXML = function (e) {
        var n, l;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new h.DOMParser).parseFromString(e, "text/xml")
        } catch (d) {}
        return l = n && n.getElementsByTagName("parsererror")[0], n && !l || p.error("Invalid XML: " + (l ? p.map(l.childNodes, function (d) {
            return d.textContent
        }).join("\n") : e)), n
    };
    var rn = /\[\]$/,
        an = /\r?\n/g,
        bn = /^(?:submit|button|image|reset|file)$/i,
        xn = /^(?:input|select|textarea|keygen)/i;

    function zi(e, n, l, d) {
        var g;
        if (Array.isArray(n)) p.each(n, function (v, _) {
            l || rn.test(e) ? d(e, _) : zi(e + "[" + ("object" == typeof _ && null != _ ? v : "") + "]", _, l, d)
        });
        else if (l || "object" !== Pt(n)) d(e, n);
        else
            for (g in n) zi(e + "[" + g + "]", n[g], l, d)
    }
    p.param = function (e, n) {
        var l, d = [],
            g = function (v, _) {
                var S = lt(_) ? _() : _;
                d[d.length] = encodeURIComponent(v) + "=" + encodeURIComponent(null == S ? "" : S)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function () {
            g(this.name, this.value)
        });
        else
            for (l in e) zi(l, e[l], n, g);
        return d.join("&")
    }, p.fn.extend({
        serialize: function () {
            return p.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && xn.test(this.nodeName) && !bn.test(e) && (this.checked || !ze.test(e))
            }).map(function (e, n) {
                var l = p(this).val();
                return null == l ? null : Array.isArray(l) ? p.map(l, function (d) {
                    return {
                        name: n.name,
                        value: d.replace(an, "\r\n")
                    }
                }) : {
                    name: n.name,
                    value: l.replace(an, "\r\n")
                }
            }).get()
        }
    });
    var Cn = /%20/g,
        Ai = /#.*$/,
        vi = /([?&])_=[^&]*/,
        yi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qi = /^(?:GET|HEAD)$/,
        ln = /^\/\//,
        Bi = {},
        $i = {},
        _i = "*/".concat("*"),
        Oi = ct.createElement("a");

    function ei(e) {
        return function (n, l) {
            "string" != typeof n && (l = n, n = "*");
            var d, g = 0,
                v = n.toLowerCase().match(Zt) || [];
            if (lt(l))
                for (; d = v[g++];) "+" === d[0] ? (d = d.slice(1) || "*", (e[d] = e[d] || []).unshift(l)) : (e[d] = e[d] || []).push(l)
        }
    }

    function cn(e, n, l, d) {
        var g = {},
            v = e === $i;

        function _(S) {
            var $;
            return g[S] = !0, p.each(e[S] || [], function (M, q) {
                var X = q(n, l, d);
                return "string" != typeof X || v || g[X] ? v ? !($ = X) : void 0 : (n.dataTypes.unshift(X), _(X), !1)
            }), $
        }
        return _(n.dataTypes[0]) || !g["*"] && _("*")
    }

    function Fi(e, n) {
        var l, d, g = p.ajaxSettings.flatOptions || {};
        for (l in n) void 0 !== n[l] && ((g[l] ? e : d || (d = {}))[l] = n[l]);
        return d && p.extend(!0, e, d), e
    }
    Oi.href = mi.href, p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mi.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(mi.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _i,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, n) {
            return n ? Fi(Fi(e, p.ajaxSettings), n) : Fi(p.ajaxSettings, e)
        },
        ajaxPrefilter: ei(Bi),
        ajaxTransport: ei($i),
        ajax: function (e, n) {
            "object" == typeof e && (n = e, e = void 0);
            var l, d, g, v, _, S, $, M, q, X, z = p.ajaxSetup({}, n = n || {}),
                B = z.context || z,
                x = z.context && (B.nodeType || B.jquery) ? p(B) : p.event,
                s = p.Deferred(),
                f = p.Callbacks("once memory"),
                T = z.statusCode || {},
                I = {},
                F = {},
                V = "canceled",
                J = {
                    readyState: 0,
                    getResponseHeader: function (ht) {
                        var wt;
                        if ($) {
                            if (!v)
                                for (v = {}; wt = yi.exec(g);) v[wt[1].toLowerCase() + " "] = (v[wt[1].toLowerCase() + " "] || []).concat(wt[2]);
                            wt = v[ht.toLowerCase() + " "]
                        }
                        return null == wt ? null : wt.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return $ ? g : null
                    },
                    setRequestHeader: function (ht, wt) {
                        return null == $ && (ht = F[ht.toLowerCase()] = F[ht.toLowerCase()] || ht, I[ht] = wt), this
                    },
                    overrideMimeType: function (ht) {
                        return null == $ && (z.mimeType = ht), this
                    },
                    statusCode: function (ht) {
                        var wt;
                        if (ht)
                            if ($) J.always(ht[J.status]);
                            else
                                for (wt in ht) T[wt] = [T[wt], ht[wt]];
                        return this
                    },
                    abort: function (ht) {
                        var wt = ht || V;
                        return l && l.abort(wt), vt(0, wt), this
                    }
                };
            if (s.promise(J), z.url = ((e || z.url || mi.href) + "").replace(ln, mi.protocol + "//"), z.type = n.method || n.type || z.method || z.type, z.dataTypes = (z.dataType || "*").toLowerCase().match(Zt) || [""], null == z.crossDomain) {
                S = ct.createElement("a");
                try {
                    S.href = z.url, S.href = S.href, z.crossDomain = Oi.protocol + "//" + Oi.host != S.protocol + "//" + S.host
                } catch (ht) {
                    z.crossDomain = !0
                }
            }
            if (z.data && z.processData && "string" != typeof z.data && (z.data = p.param(z.data, z.traditional)), cn(Bi, z, n, J), $) return J;
            for (q in (M = p.event && z.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), z.type = z.type.toUpperCase(), z.hasContent = !qi.test(z.type), d = z.url.replace(Ai, ""), z.hasContent ? z.data && z.processData && 0 === (z.contentType || "").indexOf("application/x-www-form-urlencoded") && (z.data = z.data.replace(Cn, "+")) : (X = z.url.slice(d.length), z.data && (z.processData || "string" == typeof z.data) && (d += (Ei.test(d) ? "&" : "?") + z.data, delete z.data), !1 === z.cache && (d = d.replace(vi, "$1"), X = (Ei.test(d) ? "&" : "?") + "_=" + on.guid++ + X), z.url = d + X), z.ifModified && (p.lastModified[d] && J.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && J.setRequestHeader("If-None-Match", p.etag[d])), (z.data && z.hasContent && !1 !== z.contentType || n.contentType) && J.setRequestHeader("Content-Type", z.contentType), J.setRequestHeader("Accept", z.dataTypes[0] && z.accepts[z.dataTypes[0]] ? z.accepts[z.dataTypes[0]] + ("*" !== z.dataTypes[0] ? ", " + _i + "; q=0.01" : "") : z.accepts["*"]), z.headers) J.setRequestHeader(q, z.headers[q]);
            if (z.beforeSend && (!1 === z.beforeSend.call(B, J, z) || $)) return J.abort();
            if (V = "abort", f.add(z.complete), J.done(z.success), J.fail(z.error), l = cn($i, z, n, J)) {
                if (J.readyState = 1, M && x.trigger("ajaxSend", [J, z]), $) return J;
                z.async && 0 < z.timeout && (_ = h.setTimeout(function () {
                    J.abort("timeout")
                }, z.timeout));
                try {
                    $ = !1, l.send(I, vt)
                } catch (ht) {
                    if ($) throw ht;
                    vt(-1, ht)
                }
            } else vt(-1, "No Transport");

            function vt(ht, wt, At, Yt) {
                var Lt, te, ee, Ut, Pe, fe = wt;
                $ || ($ = !0, _ && h.clearTimeout(_), l = void 0, g = Yt || "", J.readyState = 0 < ht ? 4 : 0, Lt = 200 <= ht && ht < 300 || 304 === ht, At && (Ut = function (It, Ce, Fe) {
                    for (var ni, bt, Mt, ce, We = It.contents, ie = It.dataTypes;
                        "*" === ie[0];) ie.shift(), void 0 === ni && (ni = It.mimeType || Ce.getResponseHeader("Content-Type"));
                    if (ni)
                        for (bt in We)
                            if (We[bt] && We[bt].test(ni)) {
                                ie.unshift(bt);
                                break
                            } if (ie[0] in Fe) Mt = ie[0];
                    else {
                        for (bt in Fe) {
                            if (!ie[0] || It.converters[bt + " " + ie[0]]) {
                                Mt = bt;
                                break
                            }
                            ce || (ce = bt)
                        }
                        Mt = Mt || ce
                    }
                    if (Mt) return Mt !== ie[0] && ie.unshift(Mt), Fe[Mt]
                }(z, J, At)), !Lt && -1 < p.inArray("script", z.dataTypes) && p.inArray("json", z.dataTypes) < 0 && (z.converters["text script"] = function () {}), Ut = function (It, Ce, Fe, ni) {
                    var bt, Mt, ce, We, ie, Re = {},
                        Di = It.dataTypes.slice();
                    if (Di[1])
                        for (ce in It.converters) Re[ce.toLowerCase()] = It.converters[ce];
                    for (Mt = Di.shift(); Mt;)
                        if (It.responseFields[Mt] && (Fe[It.responseFields[Mt]] = Ce), !ie && ni && It.dataFilter && (Ce = It.dataFilter(Ce, It.dataType)), ie = Mt, Mt = Di.shift())
                            if ("*" === Mt) Mt = ie;
                            else if ("*" !== ie && ie !== Mt) {
                        if (!(ce = Re[ie + " " + Mt] || Re["* " + Mt]))
                            for (bt in Re)
                                if ((We = bt.split(" "))[1] === Mt && (ce = Re[ie + " " + We[0]] || Re["* " + We[0]])) {
                                    !0 === ce ? ce = Re[bt] : !0 !== Re[bt] && (Mt = We[0], Di.unshift(We[1]));
                                    break
                                } if (!0 !== ce)
                            if (ce && It.throws) Ce = ce(Ce);
                            else try {
                                Ce = ce(Ce)
                            } catch (un) {
                                return {
                                    state: "parsererror",
                                    error: ce ? un : "No conversion from " + ie + " to " + Mt
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: Ce
                    }
                }(z, Ut, J, Lt), Lt ? (z.ifModified && ((Pe = J.getResponseHeader("Last-Modified")) && (p.lastModified[d] = Pe), (Pe = J.getResponseHeader("etag")) && (p.etag[d] = Pe)), 204 === ht || "HEAD" === z.type ? fe = "nocontent" : 304 === ht ? fe = "notmodified" : (fe = Ut.state, te = Ut.data, Lt = !(ee = Ut.error))) : (ee = fe, !ht && fe || (fe = "error", ht < 0 && (ht = 0))), J.status = ht, J.statusText = (wt || fe) + "", Lt ? s.resolveWith(B, [te, fe, J]) : s.rejectWith(B, [J, fe, ee]), J.statusCode(T), T = void 0, M && x.trigger(Lt ? "ajaxSuccess" : "ajaxError", [J, z, Lt ? te : ee]), f.fireWith(B, [J, fe]), M && (x.trigger("ajaxComplete", [J, z]), --p.active || p.event.trigger("ajaxStop")))
            }
            return J
        },
        getJSON: function (e, n, l) {
            return p.get(e, n, l, "json")
        },
        getScript: function (e, n) {
            return p.get(e, void 0, n, "script")
        }
    }), p.each(["get", "post"], function (e, n) {
        p[n] = function (l, d, g, v) {
            return lt(d) && (v = v || g, g = d, d = void 0), p.ajax(p.extend({
                url: l,
                type: n,
                dataType: v,
                data: d,
                success: g
            }, p.isPlainObject(l) && l))
        }
    }), p.ajaxPrefilter(function (e) {
        var n;
        for (n in e.headers) "content-type" === n.toLowerCase() && (e.contentType = e.headers[n] || "")
    }), p._evalUrl = function (e, n, l) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (d) {
                p.globalEval(d, n, l)
            }
        })
    }, p.fn.extend({
        wrapAll: function (e) {
            var n;
            return this[0] && (lt(e) && (e = e.call(this[0])), n = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && n.insertBefore(this[0]), n.map(function () {
                for (var l = this; l.firstElementChild;) l = l.firstElementChild;
                return l
            }).append(this)), this
        },
        wrapInner: function (e) {
            return lt(e) ? this.each(function (n) {
                p(this).wrapInner(e.call(this, n))
            }) : this.each(function () {
                var n = p(this),
                    l = n.contents();
                l.length ? l.wrapAll(e) : n.append(e)
            })
        },
        wrap: function (e) {
            var n = lt(e);
            return this.each(function (l) {
                p(this).wrapAll(n ? e.call(this, l) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                p(this).replaceWith(this.childNodes)
            }), this
        }
    }), p.expr.pseudos.hidden = function (e) {
        return !p.expr.pseudos.visible(e)
    }, p.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, p.ajaxSettings.xhr = function () {
        try {
            return new h.XMLHttpRequest
        } catch (e) {}
    };
    var Tn = {
            0: 200,
            1223: 204
        },
        ii = p.ajaxSettings.xhr();
    it.cors = !!ii && "withCredentials" in ii, it.ajax = ii = !!ii, p.ajaxTransport(function (e) {
        var n, l;
        if (it.cors || ii && !e.crossDomain) return {
            send: function (d, g) {
                var v, _ = e.xhr();
                if (_.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (v in e.xhrFields) _[v] = e.xhrFields[v];
                for (v in e.mimeType && _.overrideMimeType && _.overrideMimeType(e.mimeType), e.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"), d) _.setRequestHeader(v, d[v]);
                n = function (S) {
                    return function () {
                        n && (n = l = _.onload = _.onerror = _.onabort = _.ontimeout = _.onreadystatechange = null, "abort" === S ? _.abort() : "error" === S ? "number" != typeof _.status ? g(0, "error") : g(_.status, _.statusText) : g(Tn[_.status] || _.status, _.statusText, "text" !== (_.responseType || "text") || "string" != typeof _.responseText ? {
                            binary: _.response
                        } : {
                            text: _.responseText
                        }, _.getAllResponseHeaders()))
                    }
                }, _.onload = n(), l = _.onerror = _.ontimeout = n("error"), void 0 !== _.onabort ? _.onabort = l : _.onreadystatechange = function () {
                    4 === _.readyState && h.setTimeout(function () {
                        n && l()
                    })
                }, n = n("abort");
                try {
                    _.send(e.hasContent && e.data || null)
                } catch (S) {
                    if (n) throw S
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), p.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), p.ajaxTransport("script", function (e) {
        var n, l;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function (d, g) {
                n = p("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", l = function (v) {
                    n.remove(), l = null, v && g("error" === v.type ? 404 : 200, v.type)
                }), ct.head.appendChild(n[0])
            },
            abort: function () {
                l && l()
            }
        }
    });
    var Wi, Ri = [],
        Ui = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ri.pop() || p.expando + "_" + on.guid++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function (e, n, l) {
        var d, g, v, _ = !1 !== e.jsonp && (Ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ui.test(e.data) && "data");
        if (_ || "jsonp" === e.dataTypes[0]) return d = e.jsonpCallback = lt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, _ ? e[_] = e[_].replace(Ui, "$1" + d) : !1 !== e.jsonp && (e.url += (Ei.test(e.url) ? "&" : "?") + e.jsonp + "=" + d), e.converters["script json"] = function () {
            return v || p.error(d + " was not called"), v[0]
        }, e.dataTypes[0] = "json", g = h[d], h[d] = function () {
            v = arguments
        }, l.always(function () {
            void 0 === g ? p(h).removeProp(d) : h[d] = g, e[d] && (e.jsonpCallback = n.jsonpCallback, Ri.push(d)), v && lt(g) && g(v[0]), v = g = void 0
        }), "script"
    }), it.createHTMLDocument = ((Wi = ct.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wi.childNodes.length), p.parseHTML = function (e, n, l) {
        return "string" != typeof e ? [] : ("boolean" == typeof n && (l = n, n = !1), n || (it.createHTMLDocument ? ((d = (n = ct.implementation.createHTMLDocument("")).createElement("base")).href = ct.location.href, n.head.appendChild(d)) : n = ct), v = !l && [], (g = jt.exec(e)) ? [n.createElement(g[1])] : (g = N([e], n, v), v && v.length && p(v).remove(), p.merge([], g.childNodes)));
        var d, g, v
    }, p.fn.load = function (e, n, l) {
        var d, g, v, _ = this,
            S = e.indexOf(" ");
        return -1 < S && (d = Ge(e.slice(S)), e = e.slice(0, S)), lt(n) ? (l = n, n = void 0) : n && "object" == typeof n && (g = "POST"), 0 < _.length && p.ajax({
            url: e,
            type: g || "GET",
            dataType: "html",
            data: n
        }).done(function ($) {
            v = arguments, _.html(d ? p("<div>").append(p.parseHTML($)).find(d) : $)
        }).always(l && function ($, M) {
            _.each(function () {
                l.apply(this, v || [$.responseText, M, $])
            })
        }), this
    }, p.expr.pseudos.animated = function (e) {
        return p.grep(p.timers, function (n) {
            return e === n.elem
        }).length
    }, p.offset = {
        setOffset: function (e, n, l) {
            var d, g, v, _, S, $, M = p.css(e, "position"),
                q = p(e),
                X = {};
            "static" === M && (e.style.position = "relative"), S = q.offset(), v = p.css(e, "top"), $ = p.css(e, "left"), ("absolute" === M || "fixed" === M) && -1 < (v + $).indexOf("auto") ? (_ = (d = q.position()).top, g = d.left) : (_ = parseFloat(v) || 0, g = parseFloat($) || 0), lt(n) && (n = n.call(e, l, p.extend({}, S))), null != n.top && (X.top = n.top - S.top + _), null != n.left && (X.left = n.left - S.left + g), "using" in n ? n.using.call(e, X) : q.css(X)
        }
    }, p.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (g) {
                p.offset.setOffset(this, e, g)
            });
            var n, l, d = this[0];
            return d ? d.getClientRects().length ? {
                top: (n = d.getBoundingClientRect()).top + (l = d.ownerDocument.defaultView).pageYOffset,
                left: n.left + l.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, n, l, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === p.css(d, "position")) n = d.getBoundingClientRect();
                else {
                    for (n = this.offset(), l = d.ownerDocument, e = d.offsetParent || l.documentElement; e && (e === l.body || e === l.documentElement) && "static" === p.css(e, "position");) e = e.parentNode;
                    e && e !== d && 1 === e.nodeType && ((g = p(e).offset()).top += p.css(e, "borderTopWidth", !0), g.left += p.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: n.top - g.top - p.css(d, "marginTop", !0),
                    left: n.left - g.left - p.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || pe
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var l = "pageYOffset" === n;
        p.fn[e] = function (d) {
            return Gt(this, function (g, v, _) {
                var S;
                if (gt(g) ? S = g : 9 === g.nodeType && (S = g.defaultView), void 0 === _) return S ? S[n] : g[v];
                S ? S.scrollTo(l ? S.pageXOffset : _, l ? _ : S.pageYOffset) : g[v] = _
            }, e, d, arguments.length)
        }
    }), p.each(["top", "left"], function (e, n) {
        p.cssHooks[n] = bi(it.pixelPosition, function (l, d) {
            if (d) return d = ui(l, n), Be.test(d) ? p(l).position()[n] + "px" : d
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        p.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (l, d) {
            p.fn[d] = function (g, v) {
                var _ = arguments.length && (l || "boolean" != typeof g),
                    S = l || (!0 === g || !0 === v ? "margin" : "border");
                return Gt(this, function ($, M, q) {
                    var X;
                    return gt($) ? 0 === d.indexOf("outer") ? $["inner" + e] : $.document.documentElement["client" + e] : 9 === $.nodeType ? (X = $.documentElement, Math.max($.body["scroll" + e], X["scroll" + e], $.body["offset" + e], X["offset" + e], X["client" + e])) : void 0 === q ? p.css($, M, S) : p.style($, M, q, S)
                }, n, _ ? g : void 0, _)
            }
        })
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, n) {
        p.fn[n] = function (l) {
            return this.on(n, l)
        }
    }), p.fn.extend({
        bind: function (e, n, l) {
            return this.on(e, null, n, l)
        },
        unbind: function (e, n) {
            return this.off(e, null, n)
        },
        delegate: function (e, n, l, d) {
            return this.on(n, e, l, d)
        },
        undelegate: function (e, n, l) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(n, e || "**", l)
        },
        hover: function (e, n) {
            return this.mouseenter(e).mouseleave(n || e)
        }
    }), p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        p.fn[n] = function (l, d) {
            return 0 < arguments.length ? this.on(n, null, l, d) : this.trigger(n)
        }
    });
    var hi = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    p.proxy = function (e, n) {
        var l, d, g;
        if ("string" == typeof n && (l = e[n], n = e, e = l), lt(e)) return d = a.call(arguments, 2), (g = function () {
            return e.apply(n || this, d.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || p.guid++, g
    }, p.holdReady = function (e) {
        e ? p.readyWait++ : p.ready(!0)
    }, p.isArray = Array.isArray, p.parseJSON = JSON.parse, p.nodeName = Ft, p.isFunction = lt, p.isWindow = gt, p.camelCase = re, p.type = Pt, p.now = Date.now, p.isNumeric = function (e) {
        var n = p.type(e);
        return ("number" === n || "string" === n) && !isNaN(e - parseFloat(e))
    }, p.trim = function (e) {
        return null == e ? "" : (e + "").replace(hi, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return p
    });
    var Qi = h.jQuery,
        dn = h.$;
    return p.noConflict = function (e) {
        return h.$ === p && (h.$ = dn), e && h.jQuery === p && (h.jQuery = Qi), p
    }, void 0 === u && (h.jQuery = h.$ = p), p
}),
function (h, u) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = u() : "function" == typeof define && define.amd ? define(u) : h.Popper = u()
}(this, function () {
    "use strict";

    function h(m) {
        return m && "[object Function]" === {}.toString.call(m)
    }

    function u(m, k) {
        if (1 !== m.nodeType) return [];
        var N = m.ownerDocument.defaultView.getComputedStyle(m, null);
        return k ? N[k] : N
    }

    function t(m) {
        return "HTML" === m.nodeName ? m : m.parentNode || m.host
    }

    function o(m) {
        if (!m) return document.body;
        switch (m.nodeName) {
            case "HTML":
            case "BODY":
                return m.ownerDocument.body;
            case "#document":
                return m.body
        }
        var k = u(m);
        return /(auto|scroll|overlay)/.test(k.overflow + k.overflowY + k.overflowX) ? m : o(t(m))
    }

    function a(m) {
        return m && m.referenceNode ? m.referenceNode : m
    }

    function i(m) {
        return 11 === m ? ae : 10 === m ? Ie : ae || Ie
    }

    function r(m) {
        if (!m) return document.documentElement;
        for (var k = i(10) ? document.body : null, L = m.offsetParent || null; L === k && m.nextElementSibling;) L = (m = m.nextElementSibling).offsetParent;
        var N = L && L.nodeName;
        return N && "BODY" !== N && "HTML" !== N ? -1 !== ["TH", "TD", "TABLE"].indexOf(L.nodeName) && "static" === u(L, "position") ? r(L) : L : m ? m.ownerDocument.documentElement : document.documentElement
    }

    function y(m) {
        return null === m.parentNode ? m : y(m.parentNode)
    }

    function C(m, k) {
        if (!(m && m.nodeType && k && k.nodeType)) return document.documentElement;
        var L = m.compareDocumentPosition(k) & Node.DOCUMENT_POSITION_FOLLOWING,
            N = L ? m : k,
            Q = L ? k : m,
            R = document.createRange();
        R.setStart(N, 0), R.setEnd(Q, 0);
        var W = R.commonAncestorContainer;
        if (m !== W && k !== W || N.contains(Q)) return function (m) {
            var k = m.nodeName;
            return "BODY" !== k && ("HTML" === k || r(m.firstElementChild) === m)
        }(W) ? W : r(W);
        var nt = y(m);
        return nt.host ? C(nt.host, k) : C(m, y(k).host)
    }

    function P(m) {
        var k = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            L = "top" === k ? "scrollTop" : "scrollLeft",
            N = m.nodeName;
        if ("BODY" === N || "HTML" === N) {
            var Q = m.ownerDocument.documentElement,
                R = m.ownerDocument.scrollingElement || Q;
            return R[L]
        }
        return m[L]
    }

    function D(m, k) {
        var L = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            N = P(k, "top"),
            Q = P(k, "left"),
            R = L ? -1 : 1;
        return m.top += N * R, m.bottom += N * R, m.left += Q * R, m.right += Q * R, m
    }

    function tt(m, k) {
        var L = "x" === k ? "Left" : "Top",
            N = "Left" == L ? "Right" : "Bottom";
        return parseFloat(m["border" + L + "Width"]) + parseFloat(m["border" + N + "Width"])
    }

    function it(m, k, L, N) {
        return kt(k["offset" + m], k["scroll" + m], L["client" + m], L["offset" + m], L["scroll" + m], i(10) ? parseInt(L["offset" + m]) + parseInt(N["margin" + ("Height" === m ? "Top" : "Left")]) + parseInt(N["margin" + ("Height" === m ? "Bottom" : "Right")]) : 0)
    }

    function lt(m) {
        var k = m.body,
            L = m.documentElement,
            N = i(10) && getComputedStyle(L);
        return {
            height: it("Height", k, L, N),
            width: it("Width", k, L, N)
        }
    }

    function gt(m) {
        return Qt({}, m, {
            right: m.left + m.width,
            bottom: m.top + m.height
        })
    }

    function ct(m) {
        var k = {};
        try {
            if (i(10)) {
                k = m.getBoundingClientRect();
                var L = P(m, "top"),
                    N = P(m, "left");
                k.top += L, k.left += N, k.bottom += L, k.right += N
            } else k = m.getBoundingClientRect()
        } catch (at) {}
        var Q = {
                left: k.left,
                top: k.top,
                width: k.right - k.left,
                height: k.bottom - k.top
            },
            R = "HTML" === m.nodeName ? lt(m.ownerDocument) : {},
            st = m.offsetWidth - (R.width || m.clientWidth || Q.width),
            ut = m.offsetHeight - (R.height || m.clientHeight || Q.height);
        if (st || ut) {
            var pt = u(m);
            st -= tt(pt, "x"), ut -= tt(pt, "y"), Q.width -= st, Q.height -= ut
        }
        return gt(Q)
    }

    function ke(m, k) {
        var L = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            N = i(10),
            Q = "HTML" === k.nodeName,
            R = ct(m),
            W = ct(k),
            nt = o(m),
            st = u(k),
            ut = parseFloat(st.borderTopWidth),
            pt = parseFloat(st.borderLeftWidth);
        L && Q && (W.top = kt(W.top, 0), W.left = kt(W.left, 0));
        var at = gt({
            top: R.top - W.top - ut,
            left: R.left - W.left - pt,
            width: R.width,
            height: R.height
        });
        if (at.marginTop = 0, at.marginLeft = 0, !N && Q) {
            var dt = parseFloat(st.marginTop),
                _t = parseFloat(st.marginLeft);
            at.top -= ut - dt, at.bottom -= ut - dt, at.left -= pt - _t, at.right -= pt - _t, at.marginTop = dt, at.marginLeft = _t
        }
        return (N && !L ? k.contains(nt) : k === nt && "BODY" !== nt.nodeName) && (at = D(at, k)), at
    }

    function qt(m) {
        var k = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            L = m.ownerDocument.documentElement,
            N = ke(m, L),
            Q = kt(L.clientWidth, window.innerWidth || 0),
            R = kt(L.clientHeight, window.innerHeight || 0),
            W = k ? 0 : P(L),
            nt = k ? 0 : P(L, "left"),
            st = {
                top: W - N.top + N.marginTop,
                left: nt - N.left + N.marginLeft,
                width: Q,
                height: R
            };
        return gt(st)
    }

    function Pt(m) {
        var k = m.nodeName;
        if ("BODY" === k || "HTML" === k) return !1;
        if ("fixed" === u(m, "position")) return !0;
        var L = t(m);
        return !!L && Pt(L)
    }

    function se(m) {
        if (!m || !m.parentElement || i()) return document.documentElement;
        for (var k = m.parentElement; k && "none" === u(k, "transform");) k = k.parentElement;
        return k || document.documentElement
    }

    function p(m, k, L, N) {
        var Q = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            R = {
                top: 0,
                left: 0
            },
            W = Q ? se(m) : C(m, a(k));
        if ("viewport" === N) R = qt(W, Q);
        else {
            var nt;
            "scrollParent" === N ? "BODY" === (nt = o(t(k))).nodeName && (nt = m.ownerDocument.documentElement) : nt = "window" === N ? m.ownerDocument.documentElement : N;
            var st = ke(nt, W, Q);
            if ("HTML" !== nt.nodeName || Pt(W)) R = st;
            else {
                var ut = lt(m.ownerDocument),
                    pt = ut.height,
                    at = ut.width;
                R.top += st.top - st.marginTop, R.bottom = pt + st.top, R.left += st.left - st.marginLeft, R.right = at + st.left
            }
        }
        var dt = "number" == typeof (L = L || 0);
        return R.left += dt ? L : L.left || 0, R.top += dt ? L : L.top || 0, R.right -= dt ? L : L.right || 0, R.bottom -= dt ? L : L.bottom || 0, R
    }

    function Ot(m) {
        return m.width * m.height
    }

    function Bt(m, k, L, N, Q) {
        var R = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === m.indexOf("auto")) return m;
        var W = p(L, N, R, Q),
            nt = {
                top: {
                    width: W.width,
                    height: k.top - W.top
                },
                right: {
                    width: W.right - k.right,
                    height: W.height
                },
                bottom: {
                    width: W.width,
                    height: W.bottom - k.bottom
                },
                left: {
                    width: k.left - W.left,
                    height: W.height
                }
            },
            st = Object.keys(nt).map(function (dt) {
                return Qt({
                    key: dt
                }, nt[dt], {
                    area: Ot(nt[dt])
                })
            }).sort(function (dt, _t) {
                return _t.area - dt.area
            }),
            ut = st.filter(function (dt) {
                return dt.width >= L.clientWidth && dt.height >= L.clientHeight
            }),
            pt = 0 < ut.length ? ut[0].key : st[0].key,
            at = m.split("-")[1];
        return pt + (at ? "-" + at : "")
    }

    function Tt(m, k, L) {
        var N = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            Q = N ? se(k) : C(k, a(L));
        return ke(L, Q, N)
    }

    function _e(m) {
        var L = m.ownerDocument.defaultView.getComputedStyle(m),
            N = parseFloat(L.marginTop || 0) + parseFloat(L.marginBottom || 0),
            Q = parseFloat(L.marginLeft || 0) + parseFloat(L.marginRight || 0);
        return {
            width: m.offsetWidth + Q,
            height: m.offsetHeight + N
        }
    }

    function Xt(m) {
        var k = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return m.replace(/left|right|bottom|top/g, function (L) {
            return k[L]
        })
    }

    function Ft(m, k, L) {
        L = L.split("-")[0];
        var N = _e(m),
            Q = {
                width: N.width,
                height: N.height
            },
            R = -1 !== ["right", "left"].indexOf(L),
            W = R ? "top" : "left",
            nt = R ? "left" : "top",
            st = R ? "height" : "width",
            ut = R ? "width" : "height";
        return Q[W] = k[W] + k[st] / 2 - N[st] / 2, Q[nt] = L === nt ? k[nt] - N[ut] : k[Xt(nt)], Q
    }

    function jt(m, k) {
        return Array.prototype.find ? m.find(k) : m.filter(k)[0]
    }

    function oe(m, k, L) {
        var N = void 0 === L ? m : m.slice(0, function (m, k, L) {
            if (Array.prototype.findIndex) return m.findIndex(function (Q) {
                return Q[k] === L
            });
            var N = jt(m, function (Q) {
                return Q[k] === L
            });
            return m.indexOf(N)
        }(m, "name", L));
        return N.forEach(function (Q) {
            Q.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var R = Q.function || Q.fn;
            Q.enabled && h(R) && (k.offsets.popper = gt(k.offsets.popper), k.offsets.reference = gt(k.offsets.reference), k = R(k, Q))
        }), k
    }

    function Se() {
        if (!this.state.isDestroyed) {
            var m = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            m.offsets.reference = Tt(this.state, this.popper, this.reference, this.options.positionFixed), m.placement = Bt(this.options.placement, m.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), m.originalPlacement = m.placement, m.positionFixed = this.options.positionFixed, m.offsets.popper = Ft(this.popper, m.offsets.reference, m.placement), m.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", m = oe(this.modifiers, m), this.state.isCreated ? this.options.onUpdate(m) : (this.state.isCreated = !0, this.options.onCreate(m))
        }
    }

    function Le(m, k) {
        return m.some(function (L) {
            return L.enabled && L.name === k
        })
    }

    function Kt(m) {
        for (var k = [!1, "ms", "Webkit", "Moz", "O"], L = m.charAt(0).toUpperCase() + m.slice(1), N = 0; N < k.length; N++) {
            var Q = k[N],
                R = Q ? "" + Q + L : m;
            if (void 0 !== document.body.style[R]) return R
        }
        return null
    }

    function me() {
        return this.state.isDestroyed = !0, Le(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Kt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function Zt(m) {
        var k = m.ownerDocument;
        return k ? k.defaultView : window
    }

    function we(m, k, L, N) {
        var Q = "BODY" === m.nodeName,
            R = Q ? m.ownerDocument.defaultView : m;
        R.addEventListener(k, L, {
            passive: !0
        }), Q || we(o(R.parentNode), k, L, N), N.push(R)
    }

    function ue(m, k, L, N) {
        L.updateBound = N, Zt(m).addEventListener("resize", L.updateBound, {
            passive: !0
        });
        var Q = o(m);
        return we(Q, "scroll", L.updateBound, L.scrollParents), L.scrollElement = Q, L.eventsEnabled = !0, L
    }

    function Y() {
        this.state.eventsEnabled || (this.state = ue(this.reference, 0, this.state, this.scheduleUpdate))
    }

    function je() {
        var k;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (k = this.state, Zt(this.reference).removeEventListener("resize", k.updateBound), k.scrollParents.forEach(function (L) {
            L.removeEventListener("scroll", k.updateBound)
        }), k.updateBound = null, k.scrollParents = [], k.scrollElement = null, k.eventsEnabled = !1, k))
    }

    function Nt(m) {
        return "" !== m && !isNaN(parseFloat(m)) && isFinite(m)
    }

    function Gt(m, k) {
        Object.keys(k).forEach(function (L) {
            var N = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(L) && Nt(k[L]) && (N = "px"), m.style[L] = k[L] + N
        })
    }

    function He(m, k, L) {
        var N = jt(m, function (W) {
                return W.name === k
            }),
            Q = !!N && m.some(function (W) {
                return W.name === L && W.enabled && W.order < N.order
            });
        if (!Q) {
            var R = "`" + k + "`";
            console.warn("`" + L + "` modifier is required by " + R + " modifier in order to work, be sure to include it before " + R + "!")
        }
        return Q
    }

    function b(m) {
        var k = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            L = Ue.indexOf(m),
            N = Ue.slice(L + 1).concat(Ue.slice(0, L));
        return k ? N.reverse() : N
    }
    var rt = Math.min,
        St = Math.floor,
        Dt = Math.round,
        kt = Math.max,
        Wt = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Rt = function () {
            for (var m = ["Edge", "Trident", "Firefox"], k = 0; k < m.length; k += 1)
                if (Wt && 0 <= navigator.userAgent.indexOf(m[k])) return 1;
            return 0
        }(),
        he = Wt && window.Promise ? function (m) {
            var k = !1;
            return function () {
                k || (k = !0, window.Promise.resolve().then(function () {
                    k = !1, m()
                }))
            }
        } : function (m) {
            var k = !1;
            return function () {
                k || (k = !0, setTimeout(function () {
                    k = !1, m()
                }, Rt))
            }
        },
        ae = Wt && !(!window.MSInputMethodContext || !document.documentMode),
        Ie = Wt && /MSIE 10/.test(navigator.userAgent),
        Ee = function (m, k) {
            if (!(m instanceof k)) throw new TypeError("Cannot call a class as a function")
        },
        fi = function () {
            function m(k, L) {
                for (var N, Q = 0; Q < L.length; Q++)(N = L[Q]).enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(k, N.key, N)
            }
            return function (k, L, N) {
                return L && m(k.prototype, L), N && m(k, N), k
            }
        }(),
        xe = function (m, k, L) {
            return k in m ? Object.defineProperty(m, k, {
                value: L,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : m[k] = L, m
        },
        Qt = Object.assign || function (m) {
            for (var k, L = 1; L < arguments.length; L++)
                for (var N in k = arguments[L]) Object.prototype.hasOwnProperty.call(k, N) && (m[N] = k[N]);
            return m
        },
        Ke = Wt && /Firefox/i.test(navigator.userAgent),
        ze = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Ue = ze.slice(3),
        Jt = function () {
            function m(k, L) {
                var N = this,
                    Q = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Ee(this, m), this.scheduleUpdate = function () {
                    return requestAnimationFrame(N.update)
                }, this.update = he(this.update.bind(this)), this.options = Qt({}, m.Defaults, Q), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = k && k.jquery ? k[0] : k, this.popper = L && L.jquery ? L[0] : L, this.options.modifiers = {}, Object.keys(Qt({}, m.Defaults.modifiers, Q.modifiers)).forEach(function (W) {
                    N.options.modifiers[W] = Qt({}, m.Defaults.modifiers[W] || {}, Q.modifiers ? Q.modifiers[W] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (W) {
                    return Qt({
                        name: W
                    }, N.options.modifiers[W])
                }).sort(function (W, nt) {
                    return W.order - nt.order
                }), this.modifiers.forEach(function (W) {
                    W.enabled && h(W.onLoad) && W.onLoad(N.reference, N.popper, N.options, W, N.state)
                }), this.update();
                var R = this.options.eventsEnabled;
                R && this.enableEventListeners(), this.state.eventsEnabled = R
            }
            return fi(m, [{
                key: "update",
                value: function () {
                    return Se.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return me.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return Y.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return je.call(this)
                }
            }]), m
        }();
    return Jt.Utils = ("undefined" == typeof window ? global : window).PopperUtils, Jt.placements = ze, Jt.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (m) {
                    var k = m.placement,
                        L = k.split("-")[0],
                        N = k.split("-")[1];
                    if (N) {
                        var Q = m.offsets,
                            R = Q.reference,
                            W = Q.popper,
                            nt = -1 !== ["bottom", "top"].indexOf(L),
                            st = nt ? "left" : "top",
                            ut = nt ? "width" : "height",
                            pt = {
                                start: xe({}, st, R[st]),
                                end: xe({}, st, R[st] + R[ut] - W[ut])
                            };
                        m.offsets.popper = Qt({}, W, pt[N])
                    }
                    return m
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function (m, k) {
                    var L, N = k.offset,
                        R = m.offsets,
                        W = R.popper,
                        nt = R.reference,
                        st = m.placement.split("-")[0];
                    return L = Nt(+N) ? [+N, 0] : function (m, k, L, N) {
                        var Q = [0, 0],
                            R = -1 !== ["right", "left"].indexOf(N),
                            W = m.split(/(\+|\-)/).map(function (pt) {
                                return pt.trim()
                            }),
                            nt = W.indexOf(jt(W, function (pt) {
                                return -1 !== pt.search(/,|\s/)
                            }));
                        W[nt] && -1 === W[nt].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var st = /\s*,\s*|\s+/,
                            ut = -1 === nt ? [W] : [W.slice(0, nt).concat([W[nt].split(st)[0]]), [W[nt].split(st)[1]].concat(W.slice(nt + 1))];
                        return ut = ut.map(function (pt, at) {
                            var dt = (1 === at ? !R : R) ? "height" : "width",
                                _t = !1;
                            return pt.reduce(function (Et, ve) {
                                return "" === Et[Et.length - 1] && -1 !== ["+", "-"].indexOf(ve) ? (Et[Et.length - 1] = ve, _t = !0, Et) : _t ? (Et[Et.length - 1] += ve, _t = !1, Et) : Et.concat(ve)
                            }, []).map(function (Et) {
                                return function (m, k, L, N) {
                                    var Q = m.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        R = +Q[1],
                                        W = Q[2];
                                    return R ? 0 === W.indexOf("%") ? gt("%p" === W ? L : N)[k] / 100 * R : "vh" === W || "vw" === W ? ("vh" === W ? kt(document.documentElement.clientHeight, window.innerHeight || 0) : kt(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * R : R : m
                                }(Et, dt, k, L)
                            })
                        }), ut.forEach(function (pt, at) {
                            pt.forEach(function (dt, _t) {
                                Nt(dt) && (Q[at] += dt * ("-" === pt[_t - 1] ? -1 : 1))
                            })
                        }), Q
                    }(N, W, nt, st), "left" === st ? (W.top += L[0], W.left -= L[1]) : "right" === st ? (W.top += L[0], W.left += L[1]) : "top" === st ? (W.left += L[0], W.top -= L[1]) : "bottom" === st && (W.left += L[0], W.top += L[1]), m.popper = W, m
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (m, k) {
                    var L = k.boundariesElement || r(m.instance.popper);
                    m.instance.reference === L && (L = r(L));
                    var N = Kt("transform"),
                        Q = m.instance.popper.style,
                        R = Q.top,
                        W = Q.left,
                        nt = Q[N];
                    Q.top = "", Q.left = "", Q[N] = "";
                    var st = p(m.instance.popper, m.instance.reference, k.padding, L, m.positionFixed);
                    Q.top = R, Q.left = W, Q[N] = nt, k.boundaries = st;
                    var pt = m.offsets.popper,
                        at = {
                            primary: function (dt) {
                                var _t = pt[dt];
                                return pt[dt] < st[dt] && !k.escapeWithReference && (_t = kt(pt[dt], st[dt])), xe({}, dt, _t)
                            },
                            secondary: function (dt) {
                                var _t = "right" === dt ? "left" : "top",
                                    Et = pt[_t];
                                return pt[dt] > st[dt] && !k.escapeWithReference && (Et = rt(pt[_t], st[dt] - ("right" === dt ? pt.width : pt.height))), xe({}, _t, Et)
                            }
                        };
                    return k.priority.forEach(function (dt) {
                        var _t = -1 === ["left", "top"].indexOf(dt) ? "secondary" : "primary";
                        pt = Qt({}, pt, at[_t](dt))
                    }), m.offsets.popper = pt, m
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (m) {
                    var k = m.offsets,
                        L = k.popper,
                        N = k.reference,
                        Q = m.placement.split("-")[0],
                        R = St,
                        W = -1 !== ["top", "bottom"].indexOf(Q),
                        nt = W ? "right" : "bottom",
                        st = W ? "left" : "top",
                        ut = W ? "width" : "height";
                    return L[nt] < R(N[st]) && (m.offsets.popper[st] = R(N[st]) - L[ut]), L[st] > R(N[nt]) && (m.offsets.popper[st] = R(N[nt])), m
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (m, k) {
                    var L;
                    if (!He(m.instance.modifiers, "arrow", "keepTogether")) return m;
                    var N = k.element;
                    if ("string" == typeof N) {
                        if (!(N = m.instance.popper.querySelector(N))) return m
                    } else if (!m.instance.popper.contains(N)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), m;
                    var Q = m.placement.split("-")[0],
                        R = m.offsets,
                        W = R.popper,
                        nt = R.reference,
                        st = -1 !== ["left", "right"].indexOf(Q),
                        ut = st ? "height" : "width",
                        pt = st ? "Top" : "Left",
                        at = pt.toLowerCase(),
                        dt = st ? "left" : "top",
                        _t = st ? "bottom" : "right",
                        Et = _e(N)[ut];
                    nt[_t] - Et < W[at] && (m.offsets.popper[at] -= W[at] - (nt[_t] - Et)), nt[at] + Et > W[_t] && (m.offsets.popper[at] += nt[at] + Et - W[_t]), m.offsets.popper = gt(m.offsets.popper);
                    var ve = nt[at] + nt[ut] / 2 - Et / 2,
                        qe = u(m.instance.popper),
                        Ae = parseFloat(qe["margin" + pt]),
                        ye = parseFloat(qe["border" + pt + "Width"]),
                        Be = ve - m.offsets.popper[at] - Ae - ye;
                    return Be = kt(rt(W[ut] - Et, Be), 0), m.arrowElement = N, m.offsets.arrow = (xe(L = {}, at, Dt(Be)), xe(L, dt, ""), L), m
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (m, k) {
                    if (Le(m.instance.modifiers, "inner") || m.flipped && m.placement === m.originalPlacement) return m;
                    var L = p(m.instance.popper, m.instance.reference, k.padding, k.boundariesElement, m.positionFixed),
                        N = m.placement.split("-")[0],
                        Q = Xt(N),
                        R = m.placement.split("-")[1] || "",
                        W = [];
                    switch (k.behavior) {
                        case "flip":
                            W = [N, Q];
                            break;
                        case "clockwise":
                            W = b(N);
                            break;
                        case "counterclockwise":
                            W = b(N, !0);
                            break;
                        default:
                            W = k.behavior
                    }
                    return W.forEach(function (nt, st) {
                        if (N !== nt || W.length === st + 1) return m;
                        N = m.placement.split("-")[0], Q = Xt(N);
                        var ut = m.offsets.popper,
                            pt = m.offsets.reference,
                            at = St,
                            dt = "left" === N && at(ut.right) > at(pt.left) || "right" === N && at(ut.left) < at(pt.right) || "top" === N && at(ut.bottom) > at(pt.top) || "bottom" === N && at(ut.top) < at(pt.bottom),
                            _t = at(ut.left) < at(L.left),
                            Et = at(ut.right) > at(L.right),
                            ve = at(ut.top) < at(L.top),
                            qe = at(ut.bottom) > at(L.bottom),
                            Ae = "left" === N && _t || "right" === N && Et || "top" === N && ve || "bottom" === N && qe,
                            ye = -1 !== ["top", "bottom"].indexOf(N),
                            le = !!k.flipVariations && (ye && "start" === R && _t || ye && "end" === R && Et || !ye && "start" === R && ve || !ye && "end" === R && qe) || !!k.flipVariationsByContent && (ye && "start" === R && Et || ye && "end" === R && _t || !ye && "start" === R && qe || !ye && "end" === R && ve);
                        (dt || Ae || le) && (m.flipped = !0, (dt || Ae) && (N = W[st + 1]), le && (R = function (m) {
                            return "end" === m ? "start" : "start" === m ? "end" : m
                        }(R)), m.placement = N + (R ? "-" + R : ""), m.offsets.popper = Qt({}, m.offsets.popper, Ft(m.instance.popper, m.offsets.reference, m.placement)), m = oe(m.instance.modifiers, m, "flip"))
                    }), m
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (m) {
                    var k = m.placement,
                        L = k.split("-")[0],
                        N = m.offsets,
                        Q = N.popper,
                        R = N.reference,
                        W = -1 !== ["left", "right"].indexOf(L),
                        nt = -1 === ["top", "left"].indexOf(L);
                    return Q[W ? "left" : "top"] = R[L] - (nt ? Q[W ? "width" : "height"] : 0), m.placement = Xt(k), m.offsets.popper = gt(Q), m
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (m) {
                    if (!He(m.instance.modifiers, "hide", "preventOverflow")) return m;
                    var k = m.offsets.reference,
                        L = jt(m.instance.modifiers, function (N) {
                            return "preventOverflow" === N.name
                        }).boundaries;
                    if (k.bottom < L.top || k.left > L.right || k.top > L.bottom || k.right < L.left) {
                        if (!0 === m.hide) return m;
                        m.hide = !0, m.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === m.hide) return m;
                        m.hide = !1, m.attributes["x-out-of-boundaries"] = !1
                    }
                    return m
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (m, k) {
                    var L = k.x,
                        N = k.y,
                        Q = m.offsets.popper,
                        R = jt(m.instance.modifiers, function (Be) {
                            return "applyStyle" === Be.name
                        }).gpuAcceleration;
                    void 0 !== R && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var W, nt, st = void 0 === R ? k.gpuAcceleration : R,
                        ut = r(m.instance.popper),
                        pt = ct(ut),
                        at = {
                            position: Q.position
                        },
                        dt = function (m, k) {
                            var L = m.offsets,
                                N = L.popper,
                                R = Dt,
                                W = function (_t) {
                                    return _t
                                },
                                nt = R(L.reference.width),
                                st = R(N.width),
                                ut = -1 !== ["left", "right"].indexOf(m.placement),
                                pt = -1 !== m.placement.indexOf("-"),
                                at = k ? ut || pt || nt % 2 == st % 2 ? R : St : W,
                                dt = k ? R : W;
                            return {
                                left: at(nt % 2 == 1 && st % 2 == 1 && !pt && k ? N.left - 1 : N.left),
                                top: dt(N.top),
                                bottom: dt(N.bottom),
                                right: at(N.right)
                            }
                        }(m, 2 > window.devicePixelRatio || !Ke),
                        _t = "bottom" === L ? "top" : "bottom",
                        Et = "right" === N ? "left" : "right",
                        ve = Kt("transform");
                    if (nt = "bottom" == _t ? "HTML" === ut.nodeName ? -ut.clientHeight + dt.bottom : -pt.height + dt.bottom : dt.top, W = "right" == Et ? "HTML" === ut.nodeName ? -ut.clientWidth + dt.right : -pt.width + dt.right : dt.left, st && ve) at[ve] = "translate3d(" + W + "px, " + nt + "px, 0)", at[_t] = 0, at[Et] = 0, at.willChange = "transform";
                    else {
                        var Ae = "right" == Et ? -1 : 1;
                        at[_t] = nt * ("bottom" == _t ? -1 : 1), at[Et] = W * Ae, at.willChange = _t + ", " + Et
                    }
                    return m.attributes = Qt({}, {
                        "x-placement": m.placement
                    }, m.attributes), m.styles = Qt({}, at, m.styles), m.arrowStyles = Qt({}, m.offsets.arrow, m.arrowStyles), m
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (m) {
                    return Gt(m.instance.popper, m.styles),
                        function (m, k) {
                            Object.keys(k).forEach(function (L) {
                                !1 === k[L] ? m.removeAttribute(L) : m.setAttribute(L, k[L])
                            })
                        }(m.instance.popper, m.attributes), m.arrowElement && Object.keys(m.arrowStyles).length && Gt(m.arrowElement, m.arrowStyles), m
                },
                onLoad: function (m, k, L, N, Q) {
                    var R = Tt(Q, k, m, L.positionFixed),
                        W = Bt(L.placement, R, k, m, L.modifiers.flip.boundariesElement, L.modifiers.flip.padding);
                    return k.setAttribute("x-placement", W), Gt(k, {
                        position: L.positionFixed ? "fixed" : "absolute"
                    }), L
                },
                gpuAcceleration: void 0
            }
        }
    }, Jt
}),
function (h, u) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = u(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], u) : (h = "undefined" != typeof globalThis ? globalThis : h || self).bootstrap = u(h.Popper)
}(this, function (h) {
    "use strict";
    const t = function (x) {
            if (x && x.__esModule) return x;
            const s = Object.create(null);
            if (x)
                for (const f in x)
                    if ("default" !== f) {
                        const T = Object.getOwnPropertyDescriptor(x, f);
                        Object.defineProperty(s, f, T.get ? T : {
                            enumerable: !0,
                            get: () => x[f]
                        })
                    } return s.default = x, Object.freeze(s)
        }(h),
        o = "transitionend",
        a = x => {
            let s = x.getAttribute("data-bs-target");
            if (!s || "#" === s) {
                let f = x.getAttribute("href");
                if (!f || !f.includes("#") && !f.startsWith(".")) return null;
                f.includes("#") && !f.startsWith("#") && (f = `#${f.split("#")[1]}`), s = f && "#" !== f ? f.trim() : null
            }
            return s
        },
        i = x => {
            const s = a(x);
            return s && document.querySelector(s) ? s : null
        },
        r = x => {
            const s = a(x);
            return s ? document.querySelector(s) : null
        },
        c = x => {
            x.dispatchEvent(new Event(o))
        },
        y = x => !(!x || "object" != typeof x) && (void 0 !== x.jquery && (x = x[0]), void 0 !== x.nodeType),
        C = x => y(x) ? x.jquery ? x[0] : x : "string" == typeof x && x.length > 0 ? document.querySelector(x) : null,
        P = (x, s, f) => {
            Object.keys(f).forEach(T => {
                const I = f[T],
                    F = s[T],
                    V = F && y(F) ? "element" : null == (J = F) ? `${J}` : {}.toString.call(J).match(/\s([a-z]+)/i)[1].toLowerCase();
                var J;
                if (!new RegExp(I).test(V)) throw new TypeError(`${x.toUpperCase()}: Option "${T}" provided type "${V}" but expected type "${I}".`)
            })
        },
        D = x => !(!y(x) || 0 === x.getClientRects().length) && "visible" === getComputedStyle(x).getPropertyValue("visibility"),
        tt = x => !x || x.nodeType !== Node.ELEMENT_NODE || !!x.classList.contains("disabled") || (void 0 !== x.disabled ? x.disabled : x.hasAttribute("disabled") && "false" !== x.getAttribute("disabled")),
        it = x => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof x.getRootNode) {
                const s = x.getRootNode();
                return s instanceof ShadowRoot ? s : null
            }
            return x instanceof ShadowRoot ? x : x.parentNode ? it(x.parentNode) : null
        },
        lt = () => {},
        ct = () => {
            const {
                jQuery: x
            } = window;
            return x && !document.body.hasAttribute("data-bs-no-jquery") ? x : null
        },
        ke = [],
        qt = () => "rtl" === document.documentElement.dir,
        Pt = x => {
            var s;
            s = () => {
                const f = ct();
                if (f) {
                    const T = x.NAME,
                        I = f.fn[T];
                    f.fn[T] = x.jQueryInterface, f.fn[T].Constructor = x, f.fn[T].noConflict = () => (f.fn[T] = I, x.jQueryInterface)
                }
            }, "loading" === document.readyState ? (ke.length || document.addEventListener("DOMContentLoaded", () => {
                ke.forEach(f => f())
            }), ke.push(s)) : s()
        },
        se = x => {
            "function" == typeof x && x()
        },
        p = (x, s, f = !0) => {
            if (!f) return void se(x);
            const T = (V => {
                if (!V) return 0;
                let {
                    transitionDuration: J,
                    transitionDelay: vt
                } = window.getComputedStyle(V);
                const ht = Number.parseFloat(J),
                    wt = Number.parseFloat(vt);
                return ht || wt ? (J = J.split(",")[0], vt = vt.split(",")[0], 1e3 * (Number.parseFloat(J) + Number.parseFloat(vt))) : 0
            })(s) + 5;
            let I = !1;
            const F = ({
                target: V
            }) => {
                V === s && (I = !0, s.removeEventListener(o, F), se(x))
            };
            s.addEventListener(o, F), setTimeout(() => {
                I || c(s)
            }, T)
        },
        Ot = (x, s, f, T) => {
            let I = x.indexOf(s);
            if (-1 === I) return x[!f && T ? x.length - 1 : 0];
            const F = x.length;
            return I += f ? 1 : -1, T && (I = (I + F) % F), x[Math.max(0, Math.min(I, F - 1))]
        },
        Bt = /[^.]*(?=\..*)\.|.*/,
        Tt = /\..*/,
        _e = /::\d+$/,
        Xt = {};
    let Ft = 1;
    const jt = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        De = /^(mouseenter|mouseleave)/i,
        oe = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function Se(x, s) {
        return s && `${s}::${Ft++}` || x.uidEvent || Ft++
    }

    function Le(x) {
        const s = Se(x);
        return x.uidEvent = s, Xt[s] = Xt[s] || {}, Xt[s]
    }

    function Kt(x, s, f = null) {
        const T = Object.keys(x);
        for (let I = 0, F = T.length; I < F; I++) {
            const V = x[T[I]];
            if (V.originalHandler === s && V.delegationSelector === f) return V
        }
        return null
    }

    function me(x, s, f) {
        const T = "string" == typeof s,
            I = T ? f : s;
        let F = ue(x);
        return oe.has(F) || (F = x), [T, I, F]
    }

    function Zt(x, s, f, T, I) {
        if ("string" != typeof s || !x) return;
        if (f || (f = T, T = null), De.test(s)) {
            const Lt = te => function (ee) {
                if (!ee.relatedTarget || ee.relatedTarget !== ee.delegateTarget && !ee.delegateTarget.contains(ee.relatedTarget)) return te.call(this, ee)
            };
            T ? T = Lt(T) : f = Lt(f)
        }
        const [F, V, J] = me(s, f, T), vt = Le(x), ht = vt[J] || (vt[J] = {}), wt = Kt(ht, V, F ? f : null);
        if (wt) return void(wt.oneOff = wt.oneOff && I);
        const At = Se(V, s.replace(Bt, "")),
            Yt = F ? (Lt = x, te = f, ee = T, function Ut(Pe) {
                const fe = Lt.querySelectorAll(te);
                for (let {
                        target: It
                    } = Pe; It && It !== this; It = It.parentNode)
                    for (let Ce = fe.length; Ce--;)
                        if (fe[Ce] === It) return Pe.delegateTarget = It, Ut.oneOff && Y.off(Lt, Pe.type, te, ee), ee.apply(It, [Pe]);
                return null
            }) : function (Lt, te) {
                return function ee(Ut) {
                    return Ut.delegateTarget = Lt, ee.oneOff && Y.off(Lt, Ut.type, te), te.apply(Lt, [Ut])
                }
            }(x, f);
        var Lt, te, ee;
        Yt.delegationSelector = F ? f : null, Yt.originalHandler = V, Yt.oneOff = I, Yt.uidEvent = At, ht[At] = Yt, x.addEventListener(J, Yt, F)
    }

    function we(x, s, f, T, I) {
        const F = Kt(s[f], T, I);
        F && (x.removeEventListener(f, F, Boolean(I)), delete s[f][F.uidEvent])
    }

    function ue(x) {
        return x = x.replace(Tt, ""), jt[x] || x
    }
    const Y = {
            on(x, s, f, T) {
                Zt(x, s, f, T, !1)
            },
            one(x, s, f, T) {
                Zt(x, s, f, T, !0)
            },
            off(x, s, f, T) {
                if ("string" != typeof s || !x) return;
                const [I, F, V] = me(s, f, T), J = V !== s, vt = Le(x), ht = s.startsWith(".");
                if (void 0 !== F) return vt && vt[V] ? void we(x, vt, V, F, I ? f : null) : void 0;
                ht && Object.keys(vt).forEach(At => {
                    ! function (Yt, Lt, te, ee) {
                        const Ut = Lt[te] || {};
                        Object.keys(Ut).forEach(Pe => {
                            if (Pe.includes(ee)) {
                                const fe = Ut[Pe];
                                we(Yt, Lt, te, fe.originalHandler, fe.delegationSelector)
                            }
                        })
                    }(x, vt, At, s.slice(1))
                });
                const wt = vt[V] || {};
                Object.keys(wt).forEach(At => {
                    const Yt = At.replace(_e, "");
                    if (!J || s.includes(Yt)) {
                        const Lt = wt[At];
                        we(x, vt, V, Lt.originalHandler, Lt.delegationSelector)
                    }
                })
            },
            trigger(x, s, f) {
                if ("string" != typeof s || !x) return null;
                const T = ct(),
                    I = ue(s),
                    F = s !== I,
                    V = oe.has(I);
                let J, vt = !0,
                    ht = !0,
                    wt = !1,
                    At = null;
                return F && T && (J = T.Event(s, f), T(x).trigger(J), vt = !J.isPropagationStopped(), ht = !J.isImmediatePropagationStopped(), wt = J.isDefaultPrevented()), V ? (At = document.createEvent("HTMLEvents"), At.initEvent(I, vt, !0)) : At = new CustomEvent(s, {
                    bubbles: vt,
                    cancelable: !0
                }), void 0 !== f && Object.keys(f).forEach(Yt => {
                    Object.defineProperty(At, Yt, {
                        get: () => f[Yt]
                    })
                }), wt && At.preventDefault(), ht && x.dispatchEvent(At), At.defaultPrevented && void 0 !== J && J.preventDefault(), At
            }
        },
        be = new Map,
        je = {
            set(x, s, f) {
                be.has(x) || be.set(x, new Map);
                const T = be.get(x);
                T.has(s) || 0 === T.size ? T.set(s, f) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(T.keys())[0]}.`)
            },
            get: (x, s) => be.has(x) && be.get(x).get(s) || null,
            remove(x, s) {
                if (!be.has(x)) return;
                const f = be.get(x);
                f.delete(s), 0 === f.size && be.delete(x)
            }
        };
    class Nt {
        constructor(s) {
            (s = C(s)) && (this._element = s, je.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            je.remove(this._element, this.constructor.DATA_KEY), Y.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(s => {
                this[s] = null
            })
        }
        _queueCallback(s, f, T = !0) {
            p(s, f, T)
        }
        static getInstance(s) {
            return je.get(C(s), this.DATA_KEY)
        }
        static getOrCreateInstance(s, f = {}) {
            return this.getInstance(s) || new this(s, "object" == typeof f ? f : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const Gt = (x, s = "hide") => {
        const T = x.NAME;
        Y.on(document, `click.dismiss${x.EVENT_KEY}`, `[data-bs-dismiss="${T}"]`, function (I) {
            if (["A", "AREA"].includes(this.tagName) && I.preventDefault(), tt(this)) return;
            const F = r(this) || this.closest(`.${T}`);
            x.getOrCreateInstance(F)[s]()
        })
    };
    class Ne extends Nt {
        static get NAME() {
            return "alert"
        }
        close() {
            if (Y.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const s = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, s)
        }
        _destroyElement() {
            this._element.remove(), Y.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = Ne.getOrCreateInstance(this);
                if ("string" == typeof s) {
                    if (void 0 === f[s] || s.startsWith("_") || "constructor" === s) throw new TypeError(`No method named "${s}"`);
                    f[s](this)
                }
            })
        }
    }
    Gt(Ne, "close"), Pt(Ne);
    const Ve = '[data-bs-toggle="button"]';
    class He extends Nt {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = He.getOrCreateInstance(this);
                "toggle" === s && f[s]()
            })
        }
    }

    function re(x) {
        return "true" === x || "false" !== x && (x === Number(x).toString() ? Number(x) : "" === x || "null" === x ? null : x)
    }

    function b(x) {
        return x.replace(/[A-Z]/g, s => `-${s.toLowerCase()}`)
    }
    Y.on(document, "click.bs.button.data-api", Ve, x => {
        x.preventDefault();
        const s = x.target.closest(Ve);
        He.getOrCreateInstance(s).toggle()
    }), Pt(He);
    const O = {
            setDataAttribute(x, s, f) {
                x.setAttribute(`data-bs-${b(s)}`, f)
            },
            removeDataAttribute(x, s) {
                x.removeAttribute(`data-bs-${b(s)}`)
            },
            getDataAttributes(x) {
                if (!x) return {};
                const s = {};
                return Object.keys(x.dataset).filter(f => f.startsWith("bs")).forEach(f => {
                    let T = f.replace(/^bs/, "");
                    T = T.charAt(0).toLowerCase() + T.slice(1, T.length), s[T] = re(x.dataset[f])
                }), s
            },
            getDataAttribute: (x, s) => re(x.getAttribute(`data-bs-${b(s)}`)),
            offset(x) {
                const s = x.getBoundingClientRect();
                return {
                    top: s.top + window.pageYOffset,
                    left: s.left + window.pageXOffset
                }
            },
            position: x => ({
                top: x.offsetTop,
                left: x.offsetLeft
            })
        },
        A = {
            find: (x, s = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(s, x)),
            findOne: (x, s = document.documentElement) => Element.prototype.querySelector.call(s, x),
            children: (x, s) => [].concat(...x.children).filter(f => f.matches(s)),
            parents(x, s) {
                const f = [];
                let T = x.parentNode;
                for (; T && T.nodeType === Node.ELEMENT_NODE && 3 !== T.nodeType;) T.matches(s) && f.push(T), T = T.parentNode;
                return f
            },
            prev(x, s) {
                let f = x.previousElementSibling;
                for (; f;) {
                    if (f.matches(s)) return [f];
                    f = f.previousElementSibling
                }
                return []
            },
            next(x, s) {
                let f = x.nextElementSibling;
                for (; f;) {
                    if (f.matches(s)) return [f];
                    f = f.nextElementSibling
                }
                return []
            },
            focusableChildren(x) {
                const s = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(f => `${f}:not([tabindex^="-"])`).join(", ");
                return this.find(s, x).filter(f => !tt(f) && D(f))
            }
        },
        Z = "carousel",
        rt = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        St = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        Dt = "next",
        kt = "prev",
        Wt = "left",
        Rt = "right",
        pe = {
            ArrowLeft: Rt,
            ArrowRight: Wt
        },
        he = "slid.bs.carousel",
        ae = "active",
        Ie = ".active.carousel-item";
    class Ee extends Nt {
        constructor(s, f) {
            super(s), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(f), this._indicatorsElement = A.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return rt
        }
        static get NAME() {
            return Z
        }
        next() {
            this._slide(Dt)
        }
        nextWhenVisible() {
            !document.hidden && D(this._element) && this.next()
        }
        prev() {
            this._slide(kt)
        }
        pause(s) {
            s || (this._isPaused = !0), A.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(s) {
            s || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(s) {
            this._activeElement = A.findOne(Ie, this._element);
            const f = this._getItemIndex(this._activeElement);
            if (!(s > this._items.length - 1 || s < 0)) {
                if (!this._isSliding) return f === s ? (this.pause(), void this.cycle()) : void this._slide(s > f ? Dt : kt, this._items[s]);
                Y.one(this._element, he, () => this.to(s))
            }
        }
        _getConfig(s) {
            return s = Ct(Ct(Ct({}, rt), O.getDataAttributes(this._element)), "object" == typeof s ? s : {}), P(Z, s, St), s
        }
        _handleSwipe() {
            const s = Math.abs(this.touchDeltaX);
            if (s <= 40) return;
            const f = s / this.touchDeltaX;
            this.touchDeltaX = 0, f && this._slide(f > 0 ? Rt : Wt)
        }
        _addEventListeners() {
            this._config.keyboard && Y.on(this._element, "keydown.bs.carousel", s => this._keydown(s)), "hover" === this._config.pause && (Y.on(this._element, "mouseenter.bs.carousel", s => this.pause(s)), Y.on(this._element, "mouseleave.bs.carousel", s => this.cycle(s))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const s = F => this._pointerEvent && ("pen" === F.pointerType || "touch" === F.pointerType),
                f = F => {
                    s(F) ? this.touchStartX = F.clientX : this._pointerEvent || (this.touchStartX = F.touches[0].clientX)
                },
                T = F => {
                    this.touchDeltaX = F.touches && F.touches.length > 1 ? 0 : F.touches[0].clientX - this.touchStartX
                },
                I = F => {
                    s(F) && (this.touchDeltaX = F.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(V => this.cycle(V), 500 + this._config.interval))
                };
            A.find(".carousel-item img", this._element).forEach(F => {
                Y.on(F, "dragstart.bs.carousel", V => V.preventDefault())
            }), this._pointerEvent ? (Y.on(this._element, "pointerdown.bs.carousel", F => f(F)), Y.on(this._element, "pointerup.bs.carousel", F => I(F)), this._element.classList.add("pointer-event")) : (Y.on(this._element, "touchstart.bs.carousel", F => f(F)), Y.on(this._element, "touchmove.bs.carousel", F => T(F)), Y.on(this._element, "touchend.bs.carousel", F => I(F)))
        }
        _keydown(s) {
            if (/input|textarea/i.test(s.target.tagName)) return;
            const f = pe[s.key];
            f && (s.preventDefault(), this._slide(f))
        }
        _getItemIndex(s) {
            return this._items = s && s.parentNode ? A.find(".carousel-item", s.parentNode) : [], this._items.indexOf(s)
        }
        _getItemByOrder(s, f) {
            return Ot(this._items, f, s === Dt, this._config.wrap)
        }
        _triggerSlideEvent(s, f) {
            const T = this._getItemIndex(s),
                I = this._getItemIndex(A.findOne(Ie, this._element));
            return Y.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: s,
                direction: f,
                from: I,
                to: T
            })
        }
        _setActiveIndicatorElement(s) {
            if (this._indicatorsElement) {
                const f = A.findOne(".active", this._indicatorsElement);
                f.classList.remove(ae), f.removeAttribute("aria-current");
                const T = A.find("[data-bs-target]", this._indicatorsElement);
                for (let I = 0; I < T.length; I++)
                    if (Number.parseInt(T[I].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(s)) {
                        T[I].classList.add(ae), T[I].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const s = this._activeElement || A.findOne(Ie, this._element);
            if (!s) return;
            const f = Number.parseInt(s.getAttribute("data-bs-interval"), 10);
            f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(s, f) {
            const T = this._directionToOrder(s),
                I = A.findOne(Ie, this._element),
                F = this._getItemIndex(I),
                V = f || this._getItemByOrder(T, I),
                J = this._getItemIndex(V),
                vt = Boolean(this._interval),
                ht = T === Dt,
                wt = ht ? "carousel-item-start" : "carousel-item-end",
                At = ht ? "carousel-item-next" : "carousel-item-prev",
                Yt = this._orderToDirection(T);
            if (V && V.classList.contains(ae)) return void(this._isSliding = !1);
            if (this._isSliding || this._triggerSlideEvent(V, Yt).defaultPrevented || !I || !V) return;
            this._isSliding = !0, vt && this.pause(), this._setActiveIndicatorElement(V), this._activeElement = V;
            const Lt = () => {
                Y.trigger(this._element, he, {
                    relatedTarget: V,
                    direction: Yt,
                    from: F,
                    to: J
                })
            };
            this._element.classList.contains("slide") ? (V.classList.add(At), I.classList.add(wt), V.classList.add(wt), this._queueCallback(() => {
                V.classList.remove(wt, At), V.classList.add(ae), I.classList.remove(ae, At, wt), this._isSliding = !1, setTimeout(Lt, 0)
            }, I, !0)) : (I.classList.remove(ae), V.classList.add(ae), this._isSliding = !1, Lt()), vt && this.cycle()
        }
        _directionToOrder(s) {
            return [Rt, Wt].includes(s) ? qt() ? s === Wt ? kt : Dt : s === Wt ? Dt : kt : s
        }
        _orderToDirection(s) {
            return [Dt, kt].includes(s) ? qt() ? s === kt ? Wt : Rt : s === kt ? Rt : Wt : s
        }
        static carouselInterface(s, f) {
            const T = Ee.getOrCreateInstance(s, f);
            let {
                _config: I
            } = T;
            "object" == typeof f && (I = Ct(Ct({}, I), f));
            const F = "string" == typeof f ? f : I.slide;
            if ("number" == typeof f) T.to(f);
            else if ("string" == typeof F) {
                if (void 0 === T[F]) throw new TypeError(`No method named "${F}"`);
                T[F]()
            } else I.interval && I.ride && (T.pause(), T.cycle())
        }
        static jQueryInterface(s) {
            return this.each(function () {
                Ee.carouselInterface(this, s)
            })
        }
        static dataApiClickHandler(s) {
            const f = r(this);
            if (!f || !f.classList.contains("carousel")) return;
            const T = Ct(Ct({}, O.getDataAttributes(f)), O.getDataAttributes(this)),
                I = this.getAttribute("data-bs-slide-to");
            I && (T.interval = !1), Ee.carouselInterface(f, T), I && Ee.getInstance(f).to(I), s.preventDefault()
        }
    }
    Y.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Ee.dataApiClickHandler), Y.on(window, "load.bs.carousel.data-api", () => {
        const x = A.find('[data-bs-ride="carousel"]');
        for (let s = 0, f = x.length; s < f; s++) Ee.carouselInterface(x[s], Ee.getInstance(x[s]))
    }), Pt(Ee);
    const fi = "collapse",
        xe = {
            toggle: !0,
            parent: null
        },
        Qt = {
            toggle: "boolean",
            parent: "(null|element)"
        },
        Ke = "show",
        ze = "collapse",
        Ue = "collapsing",
        oi = "collapsed",
        Jt = ":scope .collapse .collapse",
        m = '[data-bs-toggle="collapse"]';
    class k extends Nt {
        constructor(s, f) {
            super(s), this._isTransitioning = !1, this._config = this._getConfig(f), this._triggerArray = [];
            const T = A.find(m);
            for (let I = 0, F = T.length; I < F; I++) {
                const V = T[I],
                    J = i(V),
                    vt = A.find(J).filter(ht => ht === this._element);
                null !== J && vt.length && (this._selector = J, this._triggerArray.push(V))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return xe
        }
        static get NAME() {
            return fi
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let s, f = [];
            if (this._config.parent) {
                const V = A.find(Jt, this._config.parent);
                f = A.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(J => !V.includes(J))
            }
            const T = A.findOne(this._selector);
            if (f.length) {
                const V = f.find(J => T !== J);
                if (s = V ? k.getInstance(V) : null, s && s._isTransitioning) return
            }
            if (Y.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            f.forEach(V => {
                T !== V && k.getOrCreateInstance(V, {
                    toggle: !1
                }).hide(), s || je.set(V, "bs.collapse", null)
            });
            const I = this._getDimension();
            this._element.classList.remove(ze), this._element.classList.add(Ue), this._element.style[I] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const F = `scroll${I[0].toUpperCase()+I.slice(1)}`;
            this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(Ue), this._element.classList.add(ze, Ke), this._element.style[I] = "", Y.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[I] = `${this._element[F]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || Y.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const s = this._getDimension();
            this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`, this._element.classList.add(Ue), this._element.classList.remove(ze, Ke);
            const f = this._triggerArray.length;
            for (let T = 0; T < f; T++) {
                const I = this._triggerArray[T],
                    F = r(I);
                F && !this._isShown(F) && this._addAriaAndCollapsedClass([I], !1)
            }
            this._isTransitioning = !0, this._element.style[s] = "", this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(Ue), this._element.classList.add(ze), Y.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }
        _isShown(s = this._element) {
            return s.classList.contains(Ke)
        }
        _getConfig(s) {
            return (s = Ct(Ct(Ct({}, xe), O.getDataAttributes(this._element)), s)).toggle = Boolean(s.toggle), s.parent = C(s.parent), P(fi, s, Qt), s
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const s = A.find(Jt, this._config.parent);
            A.find(m, this._config.parent).filter(f => !s.includes(f)).forEach(f => {
                const T = r(f);
                T && this._addAriaAndCollapsedClass([f], this._isShown(T))
            })
        }
        _addAriaAndCollapsedClass(s, f) {
            s.length && s.forEach(T => {
                f ? T.classList.remove(oi) : T.classList.add(oi), T.setAttribute("aria-expanded", f)
            })
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = {};
                "string" == typeof s && /show|hide/.test(s) && (f.toggle = !1);
                const T = k.getOrCreateInstance(this, f);
                if ("string" == typeof s) {
                    if (void 0 === T[s]) throw new TypeError(`No method named "${s}"`);
                    T[s]()
                }
            })
        }
    }
    Y.on(document, "click.bs.collapse.data-api", m, function (x) {
        ("A" === x.target.tagName || x.delegateTarget && "A" === x.delegateTarget.tagName) && x.preventDefault();
        const s = i(this);
        A.find(s).forEach(f => {
            k.getOrCreateInstance(f, {
                toggle: !1
            }).toggle()
        })
    }), Pt(k);
    const L = "dropdown",
        N = "Escape",
        Q = "Space",
        R = "ArrowUp",
        W = "ArrowDown",
        nt = new RegExp("ArrowUp|ArrowDown|Escape"),
        st = "click.bs.dropdown.data-api",
        ut = "keydown.bs.dropdown.data-api",
        pt = "show",
        at = '[data-bs-toggle="dropdown"]',
        dt = ".dropdown-menu",
        _t = qt() ? "top-end" : "top-start",
        Et = qt() ? "top-start" : "top-end",
        ve = qt() ? "bottom-end" : "bottom-start",
        qe = qt() ? "bottom-start" : "bottom-end",
        Ae = qt() ? "left-start" : "right-start",
        ye = qt() ? "right-start" : "left-start",
        Be = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        di = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class le extends Nt {
        constructor(s, f) {
            super(s), this._popper = null, this._config = this._getConfig(f), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Be
        }
        static get DefaultType() {
            return di
        }
        static get NAME() {
            return L
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (tt(this._element) || this._isShown(this._menu)) return;
            const s = {
                relatedTarget: this._element
            };
            if (Y.trigger(this._element, "show.bs.dropdown", s).defaultPrevented) return;
            const f = le.getParentFromElement(this._element);
            this._inNavbar ? O.setDataAttribute(this._menu, "popper", "none") : this._createPopper(f), "ontouchstart" in document.documentElement && !f.closest(".navbar-nav") && [].concat(...document.body.children).forEach(T => Y.on(T, "mouseover", lt)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(pt), this._element.classList.add(pt), Y.trigger(this._element, "shown.bs.dropdown", s)
        }
        hide() {
            !tt(this._element) && this._isShown(this._menu) && this._completeHide({
                relatedTarget: this._element
            })
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(s) {
            Y.trigger(this._element, "hide.bs.dropdown", s).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(f => Y.off(f, "mouseover", lt)), this._popper && this._popper.destroy(), this._menu.classList.remove(pt), this._element.classList.remove(pt), this._element.setAttribute("aria-expanded", "false"), O.removeDataAttribute(this._menu, "popper"), Y.trigger(this._element, "hidden.bs.dropdown", s))
        }
        _getConfig(s) {
            if (s = Ct(Ct(Ct({}, this.constructor.Default), O.getDataAttributes(this._element)), s), P(L, s, this.constructor.DefaultType), "object" == typeof s.reference && !y(s.reference) && "function" != typeof s.reference.getBoundingClientRect) throw new TypeError(`${L.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return s
        }
        _createPopper(s) {
            if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let f = this._element;
            "parent" === this._config.reference ? f = s : y(this._config.reference) ? f = C(this._config.reference) : "object" == typeof this._config.reference && (f = this._config.reference);
            const T = this._getPopperConfig(),
                I = T.modifiers.find(F => "applyStyles" === F.name && !1 === F.enabled);
            this._popper = t.createPopper(f, this._menu, T), I && O.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(s = this._element) {
            return s.classList.contains(pt)
        }
        _getMenuElement() {
            return A.next(this._element, dt)[0]
        }
        _getPlacement() {
            const s = this._element.parentNode;
            if (s.classList.contains("dropend")) return Ae;
            if (s.classList.contains("dropstart")) return ye;
            const f = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return s.classList.contains("dropup") ? f ? Et : _t : f ? qe : ve
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: s
            } = this._config;
            return "string" == typeof s ? s.split(",").map(f => Number.parseInt(f, 10)) : "function" == typeof s ? f => s(f, this._element) : s
        }
        _getPopperConfig() {
            const s = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (s.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), Ct(Ct({}, s), "function" == typeof this._config.popperConfig ? this._config.popperConfig(s) : this._config.popperConfig)
        }
        _selectMenuItem({
            key: s,
            target: f
        }) {
            const T = A.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(D);
            T.length && Ot(T, f, s === W, !T.includes(f)).focus()
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = le.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s]()
                }
            })
        }
        static clearMenus(s) {
            if (s && (2 === s.button || "keyup" === s.type && "Tab" !== s.key)) return;
            const f = A.find(at);
            for (let T = 0, I = f.length; T < I; T++) {
                const F = le.getInstance(f[T]);
                if (!F || !1 === F._config.autoClose || !F._isShown()) continue;
                const V = {
                    relatedTarget: F._element
                };
                if (s) {
                    const J = s.composedPath(),
                        vt = J.includes(F._menu);
                    if (J.includes(F._element) || "inside" === F._config.autoClose && !vt || "outside" === F._config.autoClose && vt || F._menu.contains(s.target) && ("keyup" === s.type && "Tab" === s.key || /input|select|option|textarea|form/i.test(s.target.tagName))) continue;
                    "click" === s.type && (V.clickEvent = s)
                }
                F._completeHide(V)
            }
        }
        static getParentFromElement(s) {
            return r(s) || s.parentNode
        }
        static dataApiKeydownHandler(s) {
            if (/input|textarea/i.test(s.target.tagName) ? s.key === Q || s.key !== N && (s.key !== W && s.key !== R || s.target.closest(dt)) : !nt.test(s.key)) return;
            const f = this.classList.contains(pt);
            if (!f && s.key === N || (s.preventDefault(), s.stopPropagation(), tt(this))) return;
            const T = this.matches(at) ? this : A.prev(this, at)[0],
                I = le.getOrCreateInstance(T);
            if (s.key !== N) return s.key === R || s.key === W ? (f || I.show(), void I._selectMenuItem(s)) : void(f && s.key !== Q || le.clearMenus());
            I.hide()
        }
    }
    Y.on(document, ut, at, le.dataApiKeydownHandler), Y.on(document, ut, dt, le.dataApiKeydownHandler), Y.on(document, st, le.clearMenus), Y.on(document, "keyup.bs.dropdown.data-api", le.clearMenus), Y.on(document, st, at, function (x) {
        x.preventDefault(), le.getOrCreateInstance(this).toggle()
    }), Pt(le);
    const Yi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top";
    class bi {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const s = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - s)
        }
        hide() {
            const s = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", f => f + s), this._setElementAttributes(Yi, "paddingRight", f => f + s), this._setElementAttributes(ui, "marginRight", f => f - s)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(s, f, T) {
            const I = this.getWidth();
            this._applyManipulationCallback(s, F => {
                if (F !== this._element && window.innerWidth > F.clientWidth + I) return;
                this._saveInitialAttribute(F, f);
                const V = window.getComputedStyle(F)[f];
                F.style[f] = `${T(Number.parseFloat(V))}px`
            })
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Yi, "paddingRight"), this._resetElementAttributes(ui, "marginRight")
        }
        _saveInitialAttribute(s, f) {
            const T = s.style[f];
            T && O.setDataAttribute(s, f, T)
        }
        _resetElementAttributes(s, f) {
            this._applyManipulationCallback(s, T => {
                const I = O.getDataAttribute(T, f);
                void 0 === I ? T.style.removeProperty(f) : (O.removeDataAttribute(T, f), T.style[f] = I)
            })
        }
        _applyManipulationCallback(s, f) {
            y(s) ? f(s) : A.find(s, this._element).forEach(f)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const Vi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        Ki = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        },
        xi = "mousedown.bs.backdrop";
    class Zi {
        constructor(s) {
            this._config = this._getConfig(s), this._isAppended = !1, this._element = null
        }
        show(s) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && this._getElement(), this._getElement().classList.add("show"), this._emulateAnimation(() => {
                se(s)
            })) : se(s)
        }
        hide(s) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
                this.dispose(), se(s)
            })) : se(s)
        }
        _getElement() {
            if (!this._element) {
                const s = document.createElement("div");
                s.className = this._config.className, this._config.isAnimated && s.classList.add("fade"), this._element = s
            }
            return this._element
        }
        _getConfig(s) {
            return (s = Ct(Ct({}, Vi), "object" == typeof s ? s : {})).rootElement = C(s.rootElement), P("backdrop", s, Ki), s
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), Y.on(this._getElement(), xi, () => {
                se(this._config.clickCallback)
            }), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (Y.off(this._element, xi), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(s) {
            p(s, this._getElement(), this._config.isAnimated)
        }
    }
    const Gi = {
            trapElement: null,
            autofocus: !0
        },
        _n = {
            trapElement: "element",
            autofocus: "boolean"
        },
        Ii = ".bs.focustrap",
        Mi = "backward";
    class Ci {
        constructor(s) {
            this._config = this._getConfig(s), this._isActive = !1, this._lastTabNavDirection = null
        }
        activate() {
            const {
                trapElement: s,
                autofocus: f
            } = this._config;
            this._isActive || (f && s.focus(), Y.off(document, Ii), Y.on(document, "focusin.bs.focustrap", T => this._handleFocusin(T)), Y.on(document, "keydown.tab.bs.focustrap", T => this._handleKeydown(T)), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, Y.off(document, Ii))
        }
        _handleFocusin(s) {
            const {
                target: f
            } = s, {
                trapElement: T
            } = this._config;
            if (f === document || f === T || T.contains(f)) return;
            const I = A.focusableChildren(T);
            0 === I.length ? T.focus() : this._lastTabNavDirection === Mi ? I[I.length - 1].focus() : I[0].focus()
        }
        _handleKeydown(s) {
            "Tab" === s.key && (this._lastTabNavDirection = s.shiftKey ? Mi : "forward")
        }
        _getConfig(s) {
            return s = Ct(Ct({}, Gi), "object" == typeof s ? s : {}), P("focustrap", s, _n), s
        }
    }
    const ri = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        Ti = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        ai = "hidden.bs.modal",
        ji = "show.bs.modal",
        Ji = "resize.bs.modal",
        tn = "click.dismiss.bs.modal",
        ki = "keydown.dismiss.bs.modal",
        Ni = "mousedown.dismiss.bs.modal",
        gi = "modal-open",
        $e = "modal-static";
    class Ze extends Nt {
        constructor(s, f) {
            super(s), this._config = this._getConfig(f), this._dialog = A.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new bi
        }
        static get Default() {
            return ri
        }
        static get NAME() {
            return "modal"
        }
        toggle(s) {
            return this._isShown ? this.hide() : this.show(s)
        }
        show(s) {
            this._isShown || this._isTransitioning || Y.trigger(this._element, ji, {
                relatedTarget: s
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(gi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Y.on(this._dialog, Ni, () => {
                Y.one(this._element, "mouseup.dismiss.bs.modal", f => {
                    f.target === this._element && (this._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(() => this._showElement(s)))
        }
        hide() {
            if (!this._isShown || this._isTransitioning || Y.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const s = this._isAnimated();
            s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), Y.off(this._element, tn), Y.off(this._dialog, Ni), this._queueCallback(() => this._hideModal(), this._element, s)
        }
        dispose() {
            [window, this._dialog].forEach(s => Y.off(s, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Zi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            })
        }
        _getConfig(s) {
            return s = Ct(Ct(Ct({}, ri), O.getDataAttributes(this._element)), "object" == typeof s ? s : {}), P("modal", s, Ti), s
        }
        _showElement(s) {
            const f = this._isAnimated(),
                T = A.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, T && (T.scrollTop = 0), this._element.classList.add("show"), this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Y.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: s
                })
            }, this._dialog, f)
        }
        _setEscapeEvent() {
            this._isShown ? Y.on(this._element, ki, s => {
                this._config.keyboard && "Escape" === s.key ? (s.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== s.key || this._triggerBackdropTransition()
            }) : Y.off(this._element, ki)
        }
        _setResizeEvent() {
            this._isShown ? Y.on(window, Ji, () => this._adjustDialog()) : Y.off(window, Ji)
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(gi), this._resetAdjustments(), this._scrollBar.reset(), Y.trigger(this._element, ai)
            })
        }
        _showBackdrop(s) {
            Y.on(this._element, tn, f => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : f.target === f.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }), this._backdrop.show(s)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (Y.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: s,
                scrollHeight: f,
                style: T
            } = this._element, I = f > document.documentElement.clientHeight;
            !I && "hidden" === T.overflowY || s.contains($e) || (I || (T.overflowY = "hidden"), s.add($e), this._queueCallback(() => {
                s.remove($e), I || this._queueCallback(() => {
                    T.overflowY = ""
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const s = this._element.scrollHeight > document.documentElement.clientHeight,
                f = this._scrollBar.getWidth(),
                T = f > 0;
            (!T && s && !qt() || T && !s && qt()) && (this._element.style.paddingLeft = `${f}px`), (T && !s && !qt() || !T && s && qt()) && (this._element.style.paddingRight = `${f}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(s, f) {
            return this.each(function () {
                const T = Ze.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === T[s]) throw new TypeError(`No method named "${s}"`);
                    T[s](f)
                }
            })
        }
    }
    Y.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (x) {
        const s = r(this);
        ["A", "AREA"].includes(this.tagName) && x.preventDefault(), Y.one(s, ji, T => {
            T.defaultPrevented || Y.one(s, ai, () => {
                D(this) && this.focus()
            })
        });
        const f = A.findOne(".modal.show");
        f && Ze.getInstance(f).hide(), Ze.getOrCreateInstance(s).toggle(this)
    }), Gt(Ze), Pt(Ze);
    const pi = "offcanvas",
        en = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        wn = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        Je = ".offcanvas.show",
        Si = "hidden.bs.offcanvas";
    class ti extends Nt {
        constructor(s, f) {
            super(s), this._config = this._getConfig(f), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get NAME() {
            return pi
        }
        static get Default() {
            return en
        }
        toggle(s) {
            return this._isShown ? this.hide() : this.show(s)
        }
        show(s) {
            this._isShown || Y.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: s
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new bi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
                this._config.scroll || this._focustrap.activate(), Y.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: s
                })
            }, this._element, !0))
        }
        hide() {
            this._isShown && (Y.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new bi).reset(), Y.trigger(this._element, Si)
            }, this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _getConfig(s) {
            return s = Ct(Ct(Ct({}, en), O.getDataAttributes(this._element)), "object" == typeof s ? s : {}), P(pi, s, wn), s
        }
        _initializeBackDrop() {
            return new Zi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            Y.on(this._element, "keydown.dismiss.bs.offcanvas", s => {
                this._config.keyboard && "Escape" === s.key && this.hide()
            })
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = ti.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s] || s.startsWith("_") || "constructor" === s) throw new TypeError(`No method named "${s}"`);
                    f[s](this)
                }
            })
        }
    }
    Y.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (x) {
        const s = r(this);
        if (["A", "AREA"].includes(this.tagName) && x.preventDefault(), tt(this)) return;
        Y.one(s, Si, () => {
            D(this) && this.focus()
        });
        const f = A.findOne(Je);
        f && f !== s && ti.getInstance(f).hide(), ti.getOrCreateInstance(s).toggle(this)
    }), Y.on(window, "load.bs.offcanvas.data-api", () => A.find(Je).forEach(x => ti.getOrCreateInstance(x).show())), Gt(ti), Pt(ti);
    const nn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        sn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        mi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        on = (x, s) => {
            const f = x.nodeName.toLowerCase();
            if (s.includes(f)) return !nn.has(f) || Boolean(sn.test(x.nodeValue) || mi.test(x.nodeValue));
            const T = s.filter(I => I instanceof RegExp);
            for (let I = 0, F = T.length; I < F; I++)
                if (T[I].test(f)) return !0;
            return !1
        };

    function Ei(x, s, f) {
        if (!x.length) return x;
        if (f && "function" == typeof f) return f(x);
        const T = (new window.DOMParser).parseFromString(x, "text/html"),
            I = [].concat(...T.body.querySelectorAll("*"));
        for (let F = 0, V = I.length; F < V; F++) {
            const J = I[F],
                vt = J.nodeName.toLowerCase();
            if (!Object.keys(s).includes(vt)) {
                J.remove();
                continue
            }
            const ht = [].concat(...J.attributes),
                wt = [].concat(s["*"] || [], s[vt] || []);
            ht.forEach(At => {
                on(At, wt) || J.removeAttribute(At.nodeName)
            })
        }
        return T.body.innerHTML
    }
    const rn = "tooltip",
        an = new Set(["sanitize", "allowList", "sanitizeFn"]),
        bn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        xn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: qt() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: qt() ? "right" : "left"
        },
        zi = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Cn = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Ai = "fade",
        vi = "show",
        yi = "show",
        ln = ".tooltip-inner",
        $i = "hide.bs.modal",
        _i = "hover";
    class ei extends Nt {
        constructor(s, f) {
            if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(s), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(f), this.tip = null, this._setListeners()
        }
        static get Default() {
            return zi
        }
        static get NAME() {
            return rn
        }
        static get Event() {
            return Cn
        }
        static get DefaultType() {
            return bn
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(s) {
            if (this._isEnabled)
                if (s) {
                    const f = this._initializeOnDelegatedTarget(s);
                    f._activeTrigger.click = !f._activeTrigger.click, f._isWithActiveTrigger() ? f._enter(null, f) : f._leave(null, f)
                } else {
                    if (this.getTipElement().classList.contains(vi)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), Y.off(this._element.closest(".modal"), $i, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const s = Y.trigger(this._element, this.constructor.Event.SHOW),
                f = it(this._element),
                T = null === f ? this._element.ownerDocument.documentElement.contains(this._element) : f.contains(this._element);
            if (s.defaultPrevented || !T) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(ln).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const I = this.getTipElement(),
                F = (At => {
                    do {
                        At += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(At));
                    return At
                })(this.constructor.NAME);
            I.setAttribute("id", F), this._element.setAttribute("aria-describedby", F), this._config.animation && I.classList.add(Ai);
            const V = "function" == typeof this._config.placement ? this._config.placement.call(this, I, this._element) : this._config.placement,
                J = this._getAttachment(V);
            this._addAttachmentClass(J);
            const {
                container: vt
            } = this._config;
            je.set(I, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (vt.append(I), Y.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = t.createPopper(this._element, I, this._getPopperConfig(J)), I.classList.add(vi);
            const ht = this._resolvePossibleFunction(this._config.customClass);
            ht && I.classList.add(...ht.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(At => {
                Y.on(At, "mouseover", lt)
            });
            const wt = this.tip.classList.contains(Ai);
            this._queueCallback(() => {
                const At = this._hoverState;
                this._hoverState = null, Y.trigger(this._element, this.constructor.Event.SHOWN), "out" === At && this._leave(null, this)
            }, this.tip, wt)
        }
        hide() {
            if (!this._popper) return;
            const s = this.getTipElement();
            if (Y.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            s.classList.remove(vi), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(T => Y.off(T, "mouseover", lt)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const f = this.tip.classList.contains(Ai);
            this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._hoverState !== yi && s.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), Y.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
            }, this.tip, f), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const s = document.createElement("div");
            s.innerHTML = this._config.template;
            const f = s.children[0];
            return this.setContent(f), f.classList.remove(Ai, vi), this.tip = f, this.tip
        }
        setContent(s) {
            this._sanitizeAndSetContent(s, this.getTitle(), ln)
        }
        _sanitizeAndSetContent(s, f, T) {
            const I = A.findOne(T, s);
            f || !I ? this.setElementContent(I, f) : I.remove()
        }
        setElementContent(s, f) {
            if (null !== s) return y(f) ? (f = C(f), void(this._config.html ? f.parentNode !== s && (s.innerHTML = "", s.append(f)) : s.textContent = f.textContent)) : void(this._config.html ? (this._config.sanitize && (f = Ei(f, this._config.allowList, this._config.sanitizeFn)), s.innerHTML = f) : s.textContent = f)
        }
        getTitle() {
            const s = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(s)
        }
        updateAttachment(s) {
            return "right" === s ? "end" : "left" === s ? "start" : s
        }
        _initializeOnDelegatedTarget(s, f) {
            return f || this.constructor.getOrCreateInstance(s.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {
                offset: s
            } = this._config;
            return "string" == typeof s ? s.split(",").map(f => Number.parseInt(f, 10)) : "function" == typeof s ? f => s(f, this._element) : s
        }
        _resolvePossibleFunction(s) {
            return "function" == typeof s ? s.call(this._element) : s
        }
        _getPopperConfig(s) {
            const f = {
                placement: s,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: T => this._handlePopperPlacementChange(T)
                }],
                onFirstUpdate: T => {
                    T.options.placement !== T.placement && this._handlePopperPlacementChange(T)
                }
            };
            return Ct(Ct({}, f), "function" == typeof this._config.popperConfig ? this._config.popperConfig(f) : this._config.popperConfig)
        }
        _addAttachmentClass(s) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(s)}`)
        }
        _getAttachment(s) {
            return xn[s.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(s => {
                if ("click" === s) Y.on(this._element, this.constructor.Event.CLICK, this._config.selector, f => this.toggle(f));
                else if ("manual" !== s) {
                    const T = s === _i ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    Y.on(this._element, s === _i ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, this._config.selector, I => this._enter(I)), Y.on(this._element, T, this._config.selector, I => this._leave(I))
                }
            }), this._hideModalHandler = () => {
                this._element && this.hide()
            }, Y.on(this._element.closest(".modal"), $i, this._hideModalHandler), this._config.selector ? this._config = yn(Ct({}, this._config), {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        _fixTitle() {
            const s = this._element.getAttribute("title"),
                f = typeof this._element.getAttribute("data-bs-original-title");
            (s || "string" !== f) && (this._element.setAttribute("data-bs-original-title", s || ""), !s || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", s), this._element.setAttribute("title", ""))
        }
        _enter(s, f) {
            f = this._initializeOnDelegatedTarget(s, f), s && (f._activeTrigger["focusin" === s.type ? "focus" : _i] = !0), f.getTipElement().classList.contains(vi) || f._hoverState === yi ? f._hoverState = yi : (clearTimeout(f._timeout), f._hoverState = yi, f._config.delay && f._config.delay.show ? f._timeout = setTimeout(() => {
                f._hoverState === yi && f.show()
            }, f._config.delay.show) : f.show())
        }
        _leave(s, f) {
            f = this._initializeOnDelegatedTarget(s, f), s && (f._activeTrigger["focusout" === s.type ? "focus" : _i] = f._element.contains(s.relatedTarget)), f._isWithActiveTrigger() || (clearTimeout(f._timeout), f._hoverState = "out", f._config.delay && f._config.delay.hide ? f._timeout = setTimeout(() => {
                "out" === f._hoverState && f.hide()
            }, f._config.delay.hide) : f.hide())
        }
        _isWithActiveTrigger() {
            for (const s in this._activeTrigger)
                if (this._activeTrigger[s]) return !0;
            return !1
        }
        _getConfig(s) {
            const f = O.getDataAttributes(this._element);
            return Object.keys(f).forEach(T => {
                an.has(T) && delete f[T]
            }), (s = Ct(Ct(Ct({}, this.constructor.Default), f), "object" == typeof s && s ? s : {})).container = !1 === s.container ? document.body : C(s.container), "number" == typeof s.delay && (s.delay = {
                show: s.delay,
                hide: s.delay
            }), "number" == typeof s.title && (s.title = s.title.toString()), "number" == typeof s.content && (s.content = s.content.toString()), P(rn, s, this.constructor.DefaultType), s.sanitize && (s.template = Ei(s.template, s.allowList, s.sanitizeFn)), s
        }
        _getDelegateConfig() {
            const s = {};
            for (const f in this._config) this.constructor.Default[f] !== this._config[f] && (s[f] = this._config[f]);
            return s
        }
        _cleanTipClass() {
            const s = this.getTipElement(),
                f = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                T = s.getAttribute("class").match(f);
            null !== T && T.length > 0 && T.map(I => I.trim()).forEach(I => s.classList.remove(I))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(s) {
            const {
                state: f
            } = s;
            f && (this.tip = f.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(f.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = ei.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s]()
                }
            })
        }
    }
    Pt(ei);
    const cn = yn(Ct({}, ei.Default), {
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Fi = yn(Ct({}, ei.DefaultType), {
            content: "(string|element|function)"
        }),
        Tn = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class ii extends ei {
        static get Default() {
            return cn
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Tn
        }
        static get DefaultType() {
            return Fi
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(s) {
            this._sanitizeAndSetContent(s, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(s, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = ii.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s]()
                }
            })
        }
    }
    Pt(ii);
    const Wi = "scrollspy",
        Ri = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ui = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        hi = "active",
        Qi = ".nav-link, .list-group-item, .dropdown-item",
        dn = "position";
    class e extends Nt {
        constructor(s, f) {
            super(s), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(f), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Y.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
        }
        static get Default() {
            return Ri
        }
        static get NAME() {
            return Wi
        }
        refresh() {
            const f = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : dn : this._config.method,
                T = f === dn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), A.find(Qi, this._config.target).map(I => {
                const F = i(I),
                    V = F ? A.findOne(F) : null;
                if (V) {
                    const J = V.getBoundingClientRect();
                    if (J.width || J.height) return [O[f](V).top + T, F]
                }
                return null
            }).filter(I => I).sort((I, F) => I[0] - F[0]).forEach(I => {
                this._offsets.push(I[0]), this._targets.push(I[1])
            })
        }
        dispose() {
            Y.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(s) {
            return (s = Ct(Ct(Ct({}, Ri), O.getDataAttributes(this._element)), "object" == typeof s && s ? s : {})).target = C(s.target) || document.documentElement, P(Wi, s, Ui), s
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const s = this._getScrollTop() + this._config.offset,
                f = this._getScrollHeight(),
                T = this._config.offset + f - this._getOffsetHeight();
            if (this._scrollHeight !== f && this.refresh(), s >= T) {
                const I = this._targets[this._targets.length - 1];
                this._activeTarget !== I && this._activate(I)
            } else {
                if (this._activeTarget && s < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let I = this._offsets.length; I--;) this._activeTarget !== this._targets[I] && s >= this._offsets[I] && (void 0 === this._offsets[I + 1] || s < this._offsets[I + 1]) && this._activate(this._targets[I])
            }
        }
        _activate(s) {
            this._activeTarget = s, this._clear();
            const f = Qi.split(",").map(I => `${I}[data-bs-target="${s}"],${I}[href="${s}"]`),
                T = A.findOne(f.join(","), this._config.target);
            T.classList.add(hi), T.classList.contains("dropdown-item") ? A.findOne(".dropdown-toggle", T.closest(".dropdown")).classList.add(hi) : A.parents(T, ".nav, .list-group").forEach(I => {
                A.prev(I, ".nav-link, .list-group-item").forEach(F => F.classList.add(hi)), A.prev(I, ".nav-item").forEach(F => {
                    A.children(F, ".nav-link").forEach(V => V.classList.add(hi))
                })
            }), Y.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: s
            })
        }
        _clear() {
            A.find(Qi, this._config.target).filter(s => s.classList.contains(hi)).forEach(s => s.classList.remove(hi))
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = e.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s]()
                }
            })
        }
    }
    Y.on(window, "load.bs.scrollspy.data-api", () => {
        A.find('[data-bs-spy="scroll"]').forEach(x => new e(x))
    }), Pt(e);
    const n = "active",
        l = "fade",
        d = "show",
        g = ".active",
        v = ":scope > li > .active";
    class _ extends Nt {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(n)) return;
            let s;
            const f = r(this._element),
                T = this._element.closest(".nav, .list-group");
            T && (s = A.find("UL" === T.nodeName || "OL" === T.nodeName ? v : g, T), s = s[s.length - 1]);
            const I = s ? Y.trigger(s, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (Y.trigger(this._element, "show.bs.tab", {
                    relatedTarget: s
                }).defaultPrevented || null !== I && I.defaultPrevented) return;
            this._activate(this._element, T);
            const F = () => {
                Y.trigger(s, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), Y.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: s
                })
            };
            f ? this._activate(f, f.parentNode, F) : F()
        }
        _activate(s, f, T) {
            const I = (!f || "UL" !== f.nodeName && "OL" !== f.nodeName ? A.children(f, g) : A.find(v, f))[0],
                F = T && I && I.classList.contains(l),
                V = () => this._transitionComplete(s, I, T);
            I && F ? (I.classList.remove(d), this._queueCallback(V, s, !0)) : V()
        }
        _transitionComplete(s, f, T) {
            if (f) {
                f.classList.remove(n);
                const F = A.findOne(":scope > .dropdown-menu .active", f.parentNode);
                F && F.classList.remove(n), "tab" === f.getAttribute("role") && f.setAttribute("aria-selected", !1)
            }
            s.classList.add(n), "tab" === s.getAttribute("role") && s.setAttribute("aria-selected", !0), s.classList.contains(l) && s.classList.add(d);
            let I = s.parentNode;
            if (I && "LI" === I.nodeName && (I = I.parentNode), I && I.classList.contains("dropdown-menu")) {
                const F = s.closest(".dropdown");
                F && A.find(".dropdown-toggle", F).forEach(V => V.classList.add(n)), s.setAttribute("aria-expanded", !0)
            }
            T && T()
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = _.getOrCreateInstance(this);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s]()
                }
            })
        }
    }
    Y.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (x) {
        ["A", "AREA"].includes(this.tagName) && x.preventDefault(), tt(this) || _.getOrCreateInstance(this).show()
    }), Pt(_);
    const S = "toast",
        $ = "hide",
        M = "show",
        q = "showing",
        X = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        z = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class B extends Nt {
        constructor(s, f) {
            super(s), this._config = this._getConfig(f), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return X
        }
        static get Default() {
            return z
        }
        static get NAME() {
            return S
        }
        show() {
            Y.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove($), this._element.classList.add(M), this._element.classList.add(q), this._queueCallback(() => {
                this._element.classList.remove(q), Y.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(M) && (Y.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(q), this._queueCallback(() => {
                this._element.classList.add($), this._element.classList.remove(q), this._element.classList.remove(M), Y.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(M) && this._element.classList.remove(M), super.dispose()
        }
        _getConfig(s) {
            return s = Ct(Ct(Ct({}, z), O.getDataAttributes(this._element)), "object" == typeof s && s ? s : {}), P(S, s, this.constructor.DefaultType), s
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }
        _onInteraction(s, f) {
            switch (s.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = f;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = f
            }
            if (f) return void this._clearTimeout();
            const T = s.relatedTarget;
            this._element === T || this._element.contains(T) || this._maybeScheduleHide()
        }
        _setListeners() {
            Y.on(this._element, "mouseover.bs.toast", s => this._onInteraction(s, !0)), Y.on(this._element, "mouseout.bs.toast", s => this._onInteraction(s, !1)), Y.on(this._element, "focusin.bs.toast", s => this._onInteraction(s, !0)), Y.on(this._element, "focusout.bs.toast", s => this._onInteraction(s, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(s) {
            return this.each(function () {
                const f = B.getOrCreateInstance(this, s);
                if ("string" == typeof s) {
                    if (void 0 === f[s]) throw new TypeError(`No method named "${s}"`);
                    f[s](this)
                }
            })
        }
    }
    return Gt(B), Pt(B), {
        Alert: Ne,
        Button: He,
        Carousel: Ee,
        Collapse: k,
        Dropdown: le,
        Modal: Ze,
        Offcanvas: ti,
        Popover: ii,
        ScrollSpy: e,
        Tab: _,
        Toast: B,
        Tooltip: ei
    }
}),
function (h, u, t, o) {
    function a(i, r) {
        this.settings = null, this.options = h.extend({}, a.Defaults, r), this.$element = h(i), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, h.each(["onResize", "onThrottledResize"], h.proxy(function (c, y) {
            this._handlers[y] = h.proxy(this[y], this)
        }, this)), h.each(a.Plugins, h.proxy(function (c, y) {
            this._plugins[c.charAt(0).toLowerCase() + c.slice(1)] = new y(this)
        }, this)), h.each(a.Workers, h.proxy(function (c, y) {
            this._pipe.push({
                filter: y.filter,
                run: h.proxy(y.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    a.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: u,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, a.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, a.Type = {
        Event: "event",
        State: "state"
    }, a.Plugins = {}, a.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (i) {
            i.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (i) {
            var r = this.settings.margin || "",
                y = this.settings.rtl,
                C = {
                    width: "auto",
                    "margin-left": y ? r : "",
                    "margin-right": y ? "" : r
                };
            !!this.settings.autoWidth && this.$stage.children().css(C), i.css = C
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (i) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                y = this._items.length,
                C = !this.settings.autoWidth,
                P = [];
            for (i.items = {
                    merge: !1,
                    width: r
                }; y--;) c = this._mergers[y], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, i.items.merge = c > 1 || i.items.merge, P[y] = C ? r * c : this._items[y].width();
            this._widths = P
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var i = [],
                r = this._items,
                c = this.settings,
                y = Math.max(2 * c.items, 4),
                C = 2 * Math.ceil(r.length / 2),
                P = c.loop && r.length ? c.rewind ? y : Math.max(y, C) : 0,
                D = "",
                tt = "";
            for (P /= 2; P > 0;) i.push(this.normalize(i.length / 2, !0)), D += r[i[i.length - 1]][0].outerHTML, i.push(this.normalize(r.length - 1 - (i.length - 1) / 2, !0)), tt = r[i[i.length - 1]][0].outerHTML + tt, P -= 1;
            this._clones = i, h(D).addClass("cloned").appendTo(this.$stage), h(tt).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var i = this.settings.rtl ? 1 : -1, r = this._clones.length + this._items.length, c = -1, y = 0, C = 0, P = []; ++c < r;) y = P[c - 1] || 0, C = this._widths[this.relative(c)] + this.settings.margin, P.push(y + C * i);
            this._coordinates = P
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var i = this.settings.stagePadding,
                r = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(r[r.length - 1])) + 2 * i,
                    "padding-left": i || "",
                    "padding-right": i || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (i) {
            var r = this._coordinates.length,
                c = !this.settings.autoWidth,
                y = this.$stage.children();
            if (c && i.items.merge)
                for (; r--;) i.css.width = this._widths[this.relative(r)], y.eq(r).css(i.css);
            else c && (i.css.width = i.items.width, y.css(i.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (i) {
            i.current = i.current ? this.$stage.children().index(i.current) : 0, i.current = Math.max(this.minimum(), Math.min(this.maximum(), i.current)), this.reset(i.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var i, r, c, y, C = this.settings.rtl ? 1 : -1,
                P = 2 * this.settings.stagePadding,
                D = this.coordinates(this.current()) + P,
                tt = D + this.width() * C,
                it = [];
            for (c = 0, y = this._coordinates.length; c < y; c++) i = this._coordinates[c - 1] || 0, r = Math.abs(this._coordinates[c]) + P * C, (this.op(i, "<=", D) && this.op(i, ">", tt) || this.op(r, "<", D) && this.op(r, ">", tt)) && it.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + it.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], a.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = h("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(h("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, a.prototype.initializeItems = function () {
        var i = this.$element.find(".owl-item");
        if (i.length) return this._items = i.get().map(function (r) {
            return h(r)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, a.prototype.initialize = function () {
        var i, c;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (i = this.$element.find("img"), c = this.$element.children(this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o).width(), i.length && c <= 0 && this.preloadAutoWidthImages(i)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, a.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, a.prototype.setup = function () {
        var i = this.viewport(),
            r = this.options.responsive,
            c = -1,
            y = null;
        r ? (h.each(r, function (C) {
            C <= i && C > c && (c = Number(C))
        }), "function" == typeof (y = h.extend({}, this.options, r[c])).stagePadding && (y.stagePadding = y.stagePadding()), delete y.responsive, y.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + c))) : y = h.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: y
            }
        }), this._breakpoint = c, this.settings = y, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, a.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, a.prototype.prepare = function (i) {
        var r = this.trigger("prepare", {
            content: i
        });
        return r.data || (r.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(i)), this.trigger("prepared", {
            content: r.data
        }), r.data
    }, a.prototype.update = function () {
        for (var i = 0, r = this._pipe.length, c = h.proxy(function (C) {
                return this[C]
            }, this._invalidated), y = {}; i < r;)(this._invalidated.all || h.grep(this._pipe[i].filter, c).length > 0) && this._pipe[i].run(y), i++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, a.prototype.width = function (i) {
        switch (i = i || a.Width.Default) {
            case a.Width.Inner:
            case a.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, a.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, a.prototype.onThrottledResize = function () {
        u.clearTimeout(this.resizeTimer), this.resizeTimer = u.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, a.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, a.prototype.registerEventHandlers = function () {
        h.support.transition && this.$stage.on(h.support.transition.end + ".owl.core", h.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(u, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", h.proxy(this.onDragEnd, this)))
    }, a.prototype.onDragStart = function (i) {
        var r = null;
        3 !== i.which && (h.support.transform ? r = {
            x: (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        } : (r = this.$stage.position(), r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }), this.is("animating") && (h.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === i.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = h(i.target), this._drag.stage.start = r, this._drag.stage.current = r, this._drag.pointer = this.pointer(i), h(t).on("mouseup.owl.core touchend.owl.core", h.proxy(this.onDragEnd, this)), h(t).one("mousemove.owl.core touchmove.owl.core", h.proxy(function (c) {
            var y = this.difference(this._drag.pointer, this.pointer(c));
            h(t).on("mousemove.owl.core touchmove.owl.core", h.proxy(this.onDragMove, this)), Math.abs(y.x) < Math.abs(y.y) && this.is("valid") || (c.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, a.prototype.onDragMove = function (i) {
        var r = null,
            c = null,
            y = null,
            C = this.difference(this._drag.pointer, this.pointer(i)),
            P = this.difference(this._drag.stage.start, C);
        this.is("dragging") && (i.preventDefault(), this.settings.loop ? (r = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - r, P.x = ((P.x - r) % c + c) % c + r) : (r = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), c = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), y = this.settings.pullDrag ? -1 * C.x / 5 : 0, P.x = Math.max(Math.min(P.x, r + y), c + y)), this._drag.stage.current = P, this.animate(P.x))
    }, a.prototype.onDragEnd = function (i) {
        var r = this.difference(this._drag.pointer, this.pointer(i)),
            c = this._drag.stage.current,
            y = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        h(t).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(c.x, 0 !== r.x ? y : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = y, (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, a.prototype.closest = function (i, r) {
        var c = -1,
            C = this.width(),
            P = this.coordinates();
        return this.settings.freeDrag || h.each(P, h.proxy(function (D, tt) {
            return "left" === r && i > tt - 30 && i < tt + 30 ? c = D : "right" === r && i > tt - C - 30 && i < tt - C + 30 ? c = D + 1 : this.op(i, "<", tt) && this.op(i, ">", P[D + 1] !== o ? P[D + 1] : tt - C) && (c = "left" === r ? D + 1 : D), -1 === c
        }, this)), this.settings.loop || (this.op(i, ">", P[this.minimum()]) ? c = i = this.minimum() : this.op(i, "<", P[this.maximum()]) && (c = i = this.maximum())), c
    }, a.prototype.animate = function (i) {
        var r = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), r && (this.enter("animating"), this.trigger("translate")), h.support.transform3d && h.support.transition ? this.$stage.css({
            transform: "translate3d(" + i + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : r ? this.$stage.animate({
            left: i + "px"
        }, this.speed(), this.settings.fallbackEasing, h.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: i + "px"
        })
    }, a.prototype.is = function (i) {
        return this._states.current[i] && this._states.current[i] > 0
    }, a.prototype.current = function (i) {
        if (i === o) return this._current;
        if (0 === this._items.length) return o;
        if (i = this.normalize(i), this._current !== i) {
            var r = this.trigger("change", {
                property: {
                    name: "position",
                    value: i
                }
            });
            r.data !== o && (i = this.normalize(r.data)), this._current = i, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, a.prototype.invalidate = function (i) {
        return "string" === h.type(i) && (this._invalidated[i] = !0, this.is("valid") && this.leave("valid")), h.map(this._invalidated, function (r, c) {
            return c
        })
    }, a.prototype.reset = function (i) {
        (i = this.normalize(i)) !== o && (this._speed = 0, this._current = i, this.suppress(["translate", "translated"]), this.animate(this.coordinates(i)), this.release(["translate", "translated"]))
    }, a.prototype.normalize = function (i, r) {
        var c = this._items.length,
            y = r ? 0 : this._clones.length;
        return !this.isNumeric(i) || c < 1 ? i = o : (i < 0 || i >= c + y) && (i = ((i - y / 2) % c + c) % c + y / 2), i
    }, a.prototype.relative = function (i) {
        return this.normalize(i -= this._clones.length / 2, !0)
    }, a.prototype.maximum = function (i) {
        var r, c, y, C = this.settings,
            P = this._coordinates.length;
        if (C.loop) P = this._clones.length / 2 + this._items.length - 1;
        else if (C.autoWidth || C.merge) {
            if (r = this._items.length)
                for (c = this._items[--r].width(), y = this.$element.width(); r-- && !((c += this._items[r].width() + this.settings.margin) > y););
            P = r + 1
        } else P = C.center ? this._items.length - 1 : this._items.length - C.items;
        return i && (P -= this._clones.length / 2), Math.max(P, 0)
    }, a.prototype.minimum = function (i) {
        return i ? 0 : this._clones.length / 2
    }, a.prototype.items = function (i) {
        return i === o ? this._items.slice() : (i = this.normalize(i, !0), this._items[i])
    }, a.prototype.mergers = function (i) {
        return i === o ? this._mergers.slice() : (i = this.normalize(i, !0), this._mergers[i])
    }, a.prototype.clones = function (i) {
        var r = this._clones.length / 2,
            c = r + this._items.length,
            y = function (C) {
                return C % 2 == 0 ? c + C / 2 : r - (C + 1) / 2
            };
        return h.map(this._clones, i === o ? function (C, P) {
            return y(P)
        } : function (C, P) {
            return C === i ? y(P) : null
        })
    }, a.prototype.speed = function (i) {
        return i !== o && (this._speed = i), this._speed
    }, a.prototype.coordinates = function (i) {
        var r, c = 1,
            y = i - 1;
        return i === o ? h.map(this._coordinates, h.proxy(function (C, P) {
            return this.coordinates(P)
        }, this)) : (this.settings.center ? (this.settings.rtl && (c = -1, y = i + 1), r = this._coordinates[i], r += (this.width() - r + (this._coordinates[y] || 0)) / 2 * c) : r = this._coordinates[y] || 0, r = Math.ceil(r))
    }, a.prototype.duration = function (i, r, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(r - i), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, a.prototype.to = function (i, r) {
        var c = this.current(),
            y = null,
            C = i - this.relative(c),
            P = (C > 0) - (C < 0),
            D = this._items.length,
            tt = this.minimum(),
            it = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(C) > D / 2 && (C += -1 * P * D), (y = (((i = c + C) - tt) % D + D) % D + tt) !== i && y - C <= it && y - C > 0 && (i = y, this.reset(c = y - C))) : i = this.settings.rewind ? (i % (it += 1) + it) % it : Math.max(tt, Math.min(it, i)), this.speed(this.duration(c, i, r)), this.current(i), this.isVisible() && this.update()
    }, a.prototype.next = function (i) {
        i = i || !1, this.to(this.relative(this.current()) + 1, i)
    }, a.prototype.prev = function (i) {
        i = i || !1, this.to(this.relative(this.current()) - 1, i)
    }, a.prototype.onTransitionEnd = function (i) {
        if (i !== o && (i.stopPropagation(), (i.target || i.srcElement || i.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, a.prototype.viewport = function () {
        var i;
        return this.options.responsiveBaseElement !== u ? i = h(this.options.responsiveBaseElement).width() : u.innerWidth ? i = u.innerWidth : t.documentElement && t.documentElement.clientWidth ? i = t.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
    }, a.prototype.replace = function (i) {
        this.$stage.empty(), this._items = [], i && (i = i instanceof jQuery ? i : h(i)), this.settings.nestedItemSelector && (i = i.find("." + this.settings.nestedItemSelector)), i.filter(function () {
            return 1 === this.nodeType
        }).each(h.proxy(function (r, c) {
            c = this.prepare(c), this.$stage.append(c), this._items.push(c), this._mergers.push(1 * c.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, a.prototype.add = function (i, r) {
        var c = this.relative(this._current);
        r = r === o ? this._items.length : this.normalize(r, !0), i = i instanceof jQuery ? i : h(i), this.trigger("add", {
            content: i,
            position: r
        }), i = this.prepare(i), 0 === this._items.length || r === this._items.length ? (0 === this._items.length && this.$stage.append(i), 0 !== this._items.length && this._items[r - 1].after(i), this._items.push(i), this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[r].before(i), this._items.splice(r, 0, i), this._mergers.splice(r, 0, 1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[c] && this.reset(this._items[c].index()), this.invalidate("items"), this.trigger("added", {
            content: i,
            position: r
        })
    }, a.prototype.remove = function (i) {
        (i = this.normalize(i, !0)) !== o && (this.trigger("remove", {
            content: this._items[i],
            position: i
        }), this._items[i].remove(), this._items.splice(i, 1), this._mergers.splice(i, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: i
        }))
    }, a.prototype.preloadAutoWidthImages = function (i) {
        i.each(h.proxy(function (r, c) {
            this.enter("pre-loading"), c = h(c), h(new Image).one("load", h.proxy(function (y) {
                c.attr("src", y.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, a.prototype.destroy = function () {
        for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), h(t).off(".owl.core"), !1 !== this.settings.responsive && (u.clearTimeout(this.resizeTimer), this.off(u, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, a.prototype.op = function (i, r, c) {
        var y = this.settings.rtl;
        switch (r) {
            case "<":
                return y ? i > c : i < c;
            case ">":
                return y ? i < c : i > c;
            case ">=":
                return y ? i <= c : i >= c;
            case "<=":
                return y ? i >= c : i <= c
        }
    }, a.prototype.on = function (i, r, c, y) {
        i.addEventListener ? i.addEventListener(r, c, y) : i.attachEvent && i.attachEvent("on" + r, c)
    }, a.prototype.off = function (i, r, c, y) {
        i.removeEventListener ? i.removeEventListener(r, c, y) : i.detachEvent && i.detachEvent("on" + r, c)
    }, a.prototype.trigger = function (i, r, c, y, C) {
        var P = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            D = h.camelCase(h.grep(["on", i, c], function (it) {
                return it
            }).join("-").toLowerCase()),
            tt = h.Event([i, "owl", c || "carousel"].join(".").toLowerCase(), h.extend({
                relatedTarget: this
            }, P, r));
        return this._supress[i] || (h.each(this._plugins, function (it, lt) {
            lt.onTrigger && lt.onTrigger(tt)
        }), this.register({
            type: a.Type.Event,
            name: i
        }), this.$element.trigger(tt), this.settings && "function" == typeof this.settings[D] && this.settings[D].call(this, tt)), tt
    }, a.prototype.enter = function (i) {
        h.each([i].concat(this._states.tags[i] || []), h.proxy(function (r, c) {
            this._states.current[c] === o && (this._states.current[c] = 0), this._states.current[c]++
        }, this))
    }, a.prototype.leave = function (i) {
        h.each([i].concat(this._states.tags[i] || []), h.proxy(function (r, c) {
            this._states.current[c]--
        }, this))
    }, a.prototype.register = function (i) {
        if (i.type === a.Type.Event) {
            if (h.event.special[i.name] || (h.event.special[i.name] = {}), !h.event.special[i.name].owl) {
                var r = h.event.special[i.name]._default;
                h.event.special[i.name]._default = function (c) {
                    return !r || !r.apply || c.namespace && -1 !== c.namespace.indexOf("owl") ? c.namespace && c.namespace.indexOf("owl") > -1 : r.apply(this, arguments)
                }, h.event.special[i.name].owl = !0
            }
        } else i.type === a.Type.State && (this._states.tags[i.name] = this._states.tags[i.name] ? this._states.tags[i.name].concat(i.tags) : i.tags, this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function (c, y) {
            return h.inArray(c, this._states.tags[i.name]) === y
        }, this)))
    }, a.prototype.suppress = function (i) {
        h.each(i, h.proxy(function (r, c) {
            this._supress[c] = !0
        }, this))
    }, a.prototype.release = function (i) {
        h.each(i, h.proxy(function (r, c) {
            delete this._supress[c]
        }, this))
    }, a.prototype.pointer = function (i) {
        var r = {
            x: null,
            y: null
        };
        return (i = (i = i.originalEvent || i || u.event).touches && i.touches.length ? i.touches[0] : i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i).pageX ? (r.x = i.pageX, r.y = i.pageY) : (r.x = i.clientX, r.y = i.clientY), r
    }, a.prototype.isNumeric = function (i) {
        return !isNaN(parseFloat(i))
    }, a.prototype.difference = function (i, r) {
        return {
            x: i.x - r.x,
            y: i.y - r.y
        }
    }, h.fn.owlCarousel = function (i) {
        var r = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var c = h(this),
                y = c.data("owl.carousel");
            y || (y = new a(this, "object" == typeof i && i), c.data("owl.carousel", y), h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (C, P) {
                y.register({
                    type: a.Type.Event,
                    name: P
                }), y.$element.on(P + ".owl.carousel.core", h.proxy(function (D) {
                    D.namespace && D.relatedTarget !== this && (this.suppress([P]), y[P].apply(this, [].slice.call(arguments, 1)), this.release([P]))
                }, y))
            })), "string" == typeof i && "_" !== i.charAt(0) && y[i].apply(y, r)
        })
    }, h.fn.owlCarousel.Constructor = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this._core = i, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    a.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, a.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = u.setInterval(h.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, a.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in u.clearInterval(this._interval), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.AutoRefresh = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this._core = i, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": h.proxy(function (r) {
                if (r.namespace && this._core.settings && this._core.settings.lazyLoad && (r.property && "position" == r.property.name || "initialized" == r.type)) {
                    var c = this._core.settings,
                        y = c.center && Math.ceil(c.items / 2) || c.items,
                        C = c.center && -1 * y || 0,
                        P = (r.property && void 0 !== r.property.value ? r.property.value : this._core.current()) + C,
                        D = this._core.clones().length,
                        tt = h.proxy(function (it, lt) {
                            this.load(lt)
                        }, this);
                    for (c.lazyLoadEager > 0 && (y += c.lazyLoadEager, c.loop && (P -= c.lazyLoadEager, y++)); C++ < y;) this.load(D / 2 + this._core.relative(P)), D && h.each(this._core.clones(this._core.relative(P)), tt), P++
                }
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    a.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, a.prototype.load = function (i) {
        var r = this._core.$stage.children().eq(i),
            c = r && r.find(".owl-lazy");
        !c || h.inArray(r.get(0), this._loaded) > -1 || (c.each(h.proxy(function (y, C) {
            var P, D = h(C),
                tt = u.devicePixelRatio > 1 && D.attr("data-src-retina") || D.attr("data-src") || D.attr("data-srcset");
            this._core.trigger("load", {
                element: D,
                url: tt
            }, "lazy"), D.is("img") ? D.one("load.owl.lazy", h.proxy(function () {
                D.css("opacity", 1), this._core.trigger("loaded", {
                    element: D,
                    url: tt
                }, "lazy")
            }, this)).attr("src", tt) : D.is("source") ? D.one("load.owl.lazy", h.proxy(function () {
                this._core.trigger("loaded", {
                    element: D,
                    url: tt
                }, "lazy")
            }, this)).attr("srcset", tt) : ((P = new Image).onload = h.proxy(function () {
                D.css({
                    "background-image": 'url("' + tt + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: D,
                    url: tt
                }, "lazy")
            }, this), P.src = tt)
        }, this)), this._loaded.push(r.get(0)))
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in this.handlers) this._core.$element.off(i, this.handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.Lazy = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this._core = i, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": h.proxy(function (c) {
                c.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": h.proxy(function (c) {
                c.namespace && this._core.settings.autoHeight && "position" === c.property.name && this.update()
            }, this),
            "loaded.owl.lazy": h.proxy(function (c) {
                c.namespace && this._core.settings.autoHeight && c.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var r = this;
        h(u).on("load", function () {
            r._core.settings.autoHeight && r.update()
        }), h(u).resize(function () {
            r._core.settings.autoHeight && (null != r._intervalId && clearTimeout(r._intervalId), r._intervalId = setTimeout(function () {
                r.update()
            }, 250))
        })
    };
    a.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, a.prototype.update = function () {
        var i = this._core._current,
            r = i + this._core.settings.items,
            c = this._core.settings.lazyLoad,
            y = this._core.$stage.children().toArray().slice(i, r),
            C = [],
            P = 0;
        h.each(y, function (D, tt) {
            C.push(h(tt).height())
        }), (P = Math.max.apply(null, C)) <= 1 && c && this._previousHeight && (P = this._previousHeight), this._previousHeight = P, this._core.$stage.parent().height(P).addClass(this._core.settings.autoHeightClass)
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.AutoHeight = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this._core = i, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.video && this.isInFullScreen() && r.preventDefault()
            }, this),
            "refreshed.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": h.proxy(function (r) {
                r.namespace && "position" === r.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": h.proxy(function (r) {
                if (r.namespace) {
                    var c = h(r.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, h(r.content)))
                }
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", h.proxy(function (r) {
            this.play(r)
        }, this))
    };
    a.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, a.prototype.fetch = function (i, r) {
        var c = i.attr("data-vimeo-id") ? "vimeo" : i.attr("data-vzaar-id") ? "vzaar" : "youtube",
            y = i.attr("data-vimeo-id") || i.attr("data-youtube-id") || i.attr("data-vzaar-id"),
            C = i.attr("data-width") || this._core.settings.videoWidth,
            P = i.attr("data-height") || this._core.settings.videoHeight,
            D = i.attr("href");
        if (!D) throw new Error("Missing video URL.");
        if ((y = D.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) c = "youtube";
        else if (y[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(y[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        this._videos[D] = {
            type: c,
            id: y = y[6],
            width: C,
            height: P
        }, r.attr("data-video", D), this.thumbnail(i, this._videos[D])
    }, a.prototype.thumbnail = function (i, r) {
        var c, P = r.width && r.height ? "width:" + r.width + "px;height:" + r.height + "px;" : "",
            D = i.find("img"),
            tt = "src",
            it = "",
            lt = this._core.settings,
            gt = function (ct) {
                c = h("<div/>", lt.lazyLoad ? {
                    class: "owl-video-tn " + it,
                    srcType: ct
                } : {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + ct + ")"
                }), i.after(c), i.after('<div class="owl-video-play-icon"></div>')
            };
        if (i.wrap(h("<div/>", {
                class: "owl-video-wrapper",
                style: P
            })), this._core.settings.lazyLoad && (tt = "data-src", it = "owl-lazy"), D.length) return gt(D.attr(tt)), D.remove(), !1;
        "youtube" === r.type ? gt("//img.youtube.com/vi/" + r.id + "/hqdefault.jpg") : "vimeo" === r.type ? h.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + r.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (ct) {
                gt(ct[0].thumbnail_large)
            }
        }) : "vzaar" === r.type && h.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + r.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (ct) {
                gt(ct.framegrab_url)
            }
        })
    }, a.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, a.prototype.play = function (i) {
        var r, y = h(i.target).closest("." + this._core.settings.itemClass),
            C = this._videos[y.attr("data-video")],
            P = C.width || "100%",
            D = C.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), y = this._core.items(this._core.relative(y.index())), this._core.reset(y.index()), (r = h('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", D), r.attr("width", P), "youtube" === C.type ? r.attr("src", "//www.youtube.com/embed/" + C.id + "?autoplay=1&rel=0&v=" + C.id) : "vimeo" === C.type ? r.attr("src", "//player.vimeo.com/video/" + C.id + "?autoplay=1") : "vzaar" === C.type && r.attr("src", "//view.vzaar.com/" + C.id + "/player?autoplay=true"), h(r).wrap('<div class="owl-video-frame" />').insertAfter(y.find(".owl-video")), this._playing = y.addClass("owl-video-playing"))
    }, a.prototype.isInFullScreen = function () {
        var i = t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement;
        return i && h(i).parent().hasClass("owl-video-frame")
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.Video = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this.core = i, this.core.options = h.extend({}, a.Defaults, this.core.options), this.swapping = !0, this.previous = o, this.next = o, this.handlers = {
            "change.owl.carousel": h.proxy(function (r) {
                r.namespace && "position" == r.property.name && (this.previous = this.core.current(), this.next = r.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": h.proxy(function (r) {
                r.namespace && (this.swapping = "translated" == r.type)
            }, this),
            "translate.owl.carousel": h.proxy(function (r) {
                r.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    a.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, a.prototype.swap = function () {
        if (1 === this.core.settings.items && h.support.animation && h.support.transition) {
            this.core.speed(0);
            var i, r = h.proxy(this.clear, this),
                c = this.core.$stage.children().eq(this.previous),
                y = this.core.$stage.children().eq(this.next),
                C = this.core.settings.animateIn,
                P = this.core.settings.animateOut;
            this.core.current() !== this.previous && (P && (i = this.core.coordinates(this.previous) - this.core.coordinates(this.next), c.one(h.support.animation.end, r).css({
                left: i + "px"
            }).addClass("animated owl-animated-out").addClass(P)), C && y.one(h.support.animation.end, r).addClass("animated owl-animated-in").addClass(C))
        }
    }, a.prototype.clear = function (i) {
        h(i.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in this.handlers) this.core.$element.off(i, this.handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.Animate = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    var a = function (i) {
        this._core = i, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": h.proxy(function (r) {
                r.namespace && "settings" === r.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : r.namespace && "position" === r.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": h.proxy(function (r, c, y) {
                r.namespace && this.play(c, y)
            }, this),
            "stop.owl.autoplay": h.proxy(function (r) {
                r.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": h.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": h.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": h.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": h.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = h.extend({}, a.Defaults, this._core.options)
    };
    a.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, a.prototype._next = function (i) {
        this._call = u.setTimeout(h.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || t.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }, a.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, a.prototype.play = function (i, r) {
        var c;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, c = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : u.clearTimeout(this._call), this._time += this.read() % i - c, this._timeout = i, this._call = u.setTimeout(h.proxy(this._next, this, r), i - c)
    }, a.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, u.clearTimeout(this._call), this._core.leave("rotating"))
    }, a.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, u.clearTimeout(this._call))
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in this.stop(), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.autoplay = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    "use strict";
    var a = function (i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + h(r.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.dotsData && this._templates.splice(r.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": h.proxy(function (r) {
                r.namespace && this._core.settings.dotsData && this._templates.splice(r.position, 1)
            }, this),
            "changed.owl.carousel": h.proxy(function (r) {
                r.namespace && "position" == r.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": h.proxy(function (r) {
                r.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": h.proxy(function (r) {
                r.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    a.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, a.prototype.initialize = function () {
        var i, r = this._core.settings;
        for (i in this._controls.$relative = (r.navContainer ? h(r.navContainer) : h("<div>").addClass(r.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = h("<" + r.navElement + ">").addClass(r.navClass[0]).html(r.navText[0]).prependTo(this._controls.$relative).on("click", h.proxy(function (c) {
                this.prev(r.navSpeed)
            }, this)), this._controls.$next = h("<" + r.navElement + ">").addClass(r.navClass[1]).html(r.navText[1]).appendTo(this._controls.$relative).on("click", h.proxy(function (c) {
                this.next(r.navSpeed)
            }, this)), r.dotsData || (this._templates = [h('<button role="button">').addClass(r.dotClass).append(h("<span>")).prop("outerHTML")]), this._controls.$absolute = (r.dotsContainer ? h(r.dotsContainer) : h("<div>").addClass(r.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", h.proxy(function (c) {
                var y = h(c.target).parent().is(this._controls.$absolute) ? h(c.target).index() : h(c.target).parent().index();
                c.preventDefault(), this.to(y, r.dotsSpeed)
            }, this)), this._overrides) this._core[i] = h.proxy(this[i], this)
    }, a.prototype.destroy = function () {
        var i, r, c, y, C;
        for (i in C = this._core.settings, this._handlers) this.$element.off(i, this._handlers[i]);
        for (r in this._controls) "$relative" === r && C.navContainer ? this._controls[r].html("") : this._controls[r].remove();
        for (y in this.overides) this._core[y] = this._overrides[y];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.prototype.update = function () {
        var i, r, y = this._core.clones().length / 2,
            C = y + this._core.items().length,
            P = this._core.maximum(!0),
            D = this._core.settings,
            tt = D.center || D.autoWidth || D.dotsData ? 1 : D.dotsEach || D.items;
        if ("page" !== D.slideBy && (D.slideBy = Math.min(D.slideBy, D.items)), D.dots || "page" == D.slideBy)
            for (this._pages = [], i = y, r = 0; i < C; i++) {
                if (r >= tt || 0 === r) {
                    if (this._pages.push({
                            start: Math.min(P, i - y),
                            end: i - y + tt - 1
                        }), Math.min(P, i - y) === P) break;
                    r = 0
                }
                r += this._core.mergers(this._core.relative(i))
            }
    }, a.prototype.draw = function () {
        var i, r = this._core.settings,
            c = this._core.items().length <= r.items,
            y = this._core.relative(this._core.current()),
            C = r.loop || r.rewind;
        this._controls.$relative.toggleClass("disabled", !r.nav || c), r.nav && (this._controls.$previous.toggleClass("disabled", !C && y <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !C && y >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !r.dots || c), r.dots && (i = this._pages.length - this._controls.$absolute.children().length, r.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(h.inArray(this.current(), this._pages)).addClass("active"))
    }, a.prototype.onTrigger = function (i) {
        var r = this._core.settings;
        i.page = {
            index: h.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: r && (r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items)
        }
    }, a.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return h.grep(this._pages, h.proxy(function (r, c) {
            return r.start <= i && r.end >= i
        }, this)).pop()
    }, a.prototype.getPosition = function (i) {
        var r, c, y = this._core.settings;
        return "page" == y.slideBy ? (r = h.inArray(this.current(), this._pages), i ? ++r : --r, r = this._pages[(r % (c = this._pages.length) + c) % c].start) : (r = this._core.relative(this._core.current()), c = this._core.items().length, i ? r += y.slideBy : r -= y.slideBy), r
    }, a.prototype.next = function (i) {
        h.proxy(this._overrides.to, this._core)(this.getPosition(!0), i)
    }, a.prototype.prev = function (i) {
        h.proxy(this._overrides.to, this._core)(this.getPosition(!1), i)
    }, a.prototype.to = function (i, r, c) {
        var y;
        !c && this._pages.length ? (y = this._pages.length, h.proxy(this._overrides.to, this._core)(this._pages[(i % y + y) % y].start, r)) : h.proxy(this._overrides.to, this._core)(i, r)
    }, h.fn.owlCarousel.Constructor.Plugins.Navigation = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    "use strict";
    var a = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": h.proxy(function (r) {
                r.namespace && "URLHash" === this._core.settings.startPosition && h(u).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": h.proxy(function (r) {
                if (r.namespace) {
                    var c = h(r.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = r.content
                }
            }, this),
            "changed.owl.carousel": h.proxy(function (r) {
                if (r.namespace && "position" === r.property.name) {
                    var c = this._core.items(this._core.relative(this._core.current())),
                        y = h.map(this._hashes, function (C, P) {
                            return C === c ? P : null
                        }).join();
                    if (!y || u.location.hash.slice(1) === y) return;
                    u.location.hash = y
                }
            }, this)
        }, this._core.options = h.extend({}, a.Defaults, this._core.options), this.$element.on(this._handlers), h(u).on("hashchange.owl.navigation", h.proxy(function (r) {
            var c = u.location.hash.substring(1),
                y = this._core.$stage.children(),
                C = this._hashes[c] && y.index(this._hashes[c]);
            void 0 !== C && C !== this._core.current() && this._core.to(this._core.relative(C), !1, !0)
        }, this))
    };
    a.Defaults = {
        URLhashListener: !1
    }, a.prototype.destroy = function () {
        var i, r;
        for (i in h(u).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    }, h.fn.owlCarousel.Constructor.Plugins.Hash = a
}(window.Zepto || window.jQuery, window, document),
function (h, u, t, o) {
    function a(P, D) {
        var tt = !1,
            it = P.charAt(0).toUpperCase() + P.slice(1);
        return h.each((P + " " + c.join(it + " ") + it).split(" "), function (lt, gt) {
            if (void 0 !== r[gt]) return tt = !D || gt, !1
        }), tt
    }

    function i(P) {
        return a(P, !0)
    }
    var r = h("<support>").get(0).style,
        c = "Webkit Moz O ms".split(" "),
        y = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        };
    !!a("transition") && (h.support.transition = new String(i("transition")), h.support.transition.end = y.transition.end[h.support.transition]), !!a("animation") && (h.support.animation = new String(i("animation")), h.support.animation.end = y.animation.end[h.support.animation]), a("transform") && (h.support.transform = new String(i("transform")), h.support.transform3d = !!a("perspective"))
}(window.Zepto || window.jQuery, window, document),
function (h) {
    "function" == typeof define && define.amd ? define(["jquery"], h) : h("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (h) {
    var u, t, o, a, i, r, c = "Close",
        y = "BeforeClose",
        D = "MarkupParse",
        tt = "Open",
        gt = ".mfp",
        ct = "mfp-ready",
        ke = "mfp-removing",
        qt = "mfp-prevent-close",
        Pt = function () {},
        se = !!window.jQuery,
        p = h(window),
        Ot = function (b, O) {
            u.ev.on("mfp" + b + gt, O)
        },
        Bt = function (b, O, A, Z) {
            var rt = document.createElement("div");
            return rt.className = "mfp-" + b, A && (rt.innerHTML = A), Z ? O && O.appendChild(rt) : (rt = h(rt), O && rt.appendTo(O)), rt
        },
        Tt = function (b, O) {
            u.ev.triggerHandler("mfp" + b, O), u.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), u.st.callbacks[b] && u.st.callbacks[b].apply(u, h.isArray(O) ? O : [O]))
        },
        _e = function (b) {
            return b === r && u.currTemplate.closeBtn || (u.currTemplate.closeBtn = h(u.st.closeMarkup.replace("%title%", u.st.tClose)), r = b), u.currTemplate.closeBtn
        },
        Xt = function () {
            h.magnificPopup.instance || ((u = new Pt).init(), h.magnificPopup.instance = u)
        };
    Pt.prototype = {
        constructor: Pt,
        init: function () {
            var b = navigator.appVersion;
            u.isLowIE = u.isIE8 = document.all && !document.addEventListener, u.isAndroid = /android/gi.test(b), u.isIOS = /iphone|ipad|ipod/gi.test(b), u.supportsTransition = function () {
                var b = document.createElement("p").style,
                    O = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== b.transition) return !0;
                for (; O.length;)
                    if (O.pop() + "Transition" in b) return !0;
                return !1
            }(), u.probablyMobile = u.isAndroid || u.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = h(document), u.popupsCache = {}
        },
        open: function (b) {
            var O;
            if (!1 === b.isObj) {
                u.items = b.items.toArray(), u.index = 0;
                var A, Z = b.items;
                for (O = 0; O < Z.length; O++)
                    if ((A = Z[O]).parsed && (A = A.el[0]), A === b.el[0]) {
                        u.index = O;
                        break
                    }
            } else u.items = h.isArray(b.items) ? b.items : [b.items], u.index = b.index || 0;
            if (!u.isOpen) {
                u.types = [], i = "", u.ev = b.mainEl && b.mainEl.length ? b.mainEl.eq(0) : o, b.key ? (u.popupsCache[b.key] || (u.popupsCache[b.key] = {}), u.currTemplate = u.popupsCache[b.key]) : u.currTemplate = {}, u.st = h.extend(!0, {}, h.magnificPopup.defaults, b), u.fixedContentPos = "auto" === u.st.fixedContentPos ? !u.probablyMobile : u.st.fixedContentPos, u.st.modal && (u.st.closeOnContentClick = !1, u.st.closeOnBgClick = !1, u.st.showCloseBtn = !1, u.st.enableEscapeKey = !1), u.bgOverlay || (u.bgOverlay = Bt("bg").on("click" + gt, function () {
                    u.close()
                }), u.wrap = Bt("wrap").attr("tabindex", -1).on("click" + gt, function (pe) {
                    u._checkIfClose(pe.target) && u.close()
                }), u.container = Bt("container", u.wrap)), u.contentContainer = Bt("content"), u.st.preloader && (u.preloader = Bt("preloader", u.container, u.st.tLoading));
                var rt = h.magnificPopup.modules;
                for (O = 0; O < rt.length; O++) {
                    var St = rt[O];
                    St = St.charAt(0).toUpperCase() + St.slice(1), u["init" + St].call(u)
                }
                Tt("BeforeOpen"), u.st.showCloseBtn && (u.st.closeBtnInside ? (Ot(D, function (pe, he, ae, Ie) {
                    ae.close_replaceWith = _e(Ie.type)
                }), i += " mfp-close-btn-in") : u.wrap.append(_e())), u.st.alignTop && (i += " mfp-align-top"), u.wrap.css(u.fixedContentPos ? {
                    overflow: u.st.overflowY,
                    overflowX: "hidden",
                    overflowY: u.st.overflowY
                } : {
                    top: p.scrollTop(),
                    position: "absolute"
                }), (!1 === u.st.fixedBgPos || "auto" === u.st.fixedBgPos && !u.fixedContentPos) && u.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), u.st.enableEscapeKey && o.on("keyup" + gt, function (pe) {
                    27 === pe.keyCode && u.close()
                }), p.on("resize" + gt, function () {
                    u.updateSize()
                }), u.st.closeOnContentClick || (i += " mfp-auto-cursor"), i && u.wrap.addClass(i);
                var Dt = u.wH = p.height(),
                    kt = {};
                if (u.fixedContentPos && u._hasScrollBar(Dt)) {
                    var Wt = u._getScrollbarSize();
                    Wt && (kt.marginRight = Wt)
                }
                u.fixedContentPos && (u.isIE7 ? h("body, html").css("overflow", "hidden") : kt.overflow = "hidden");
                var Rt = u.st.mainClass;
                return u.isIE7 && (Rt += " mfp-ie7"), Rt && u._addClassToMFP(Rt), u.updateItemHTML(), Tt("BuildControls"), h("html").css(kt), u.bgOverlay.add(u.wrap).prependTo(u.st.prependTo || h(document.body)), u._lastFocusedEl = document.activeElement, setTimeout(function () {
                    u.content ? (u._addClassToMFP(ct), u._setFocus()) : u.bgOverlay.addClass(ct), o.on("focusin" + gt, u._onFocusIn)
                }, 16), u.isOpen = !0, u.updateSize(Dt), Tt(tt), b
            }
            u.updateItemHTML()
        },
        close: function () {
            u.isOpen && (Tt(y), u.isOpen = !1, u.st.removalDelay && !u.isLowIE && u.supportsTransition ? (u._addClassToMFP(ke), setTimeout(function () {
                u._close()
            }, u.st.removalDelay)) : u._close())
        },
        _close: function () {
            Tt(c);
            var b = ke + " " + ct + " ";
            if (u.bgOverlay.detach(), u.wrap.detach(), u.container.empty(), u.st.mainClass && (b += u.st.mainClass + " "), u._removeClassFromMFP(b), u.fixedContentPos) {
                var O = {
                    marginRight: ""
                };
                u.isIE7 ? h("body, html").css("overflow", "") : O.overflow = "", h("html").css(O)
            }
            o.off("keyup.mfp focusin" + gt), u.ev.off(gt), u.wrap.attr("class", "mfp-wrap").removeAttr("style"), u.bgOverlay.attr("class", "mfp-bg"), u.container.attr("class", "mfp-container"), !u.st.showCloseBtn || u.st.closeBtnInside && !0 !== u.currTemplate[u.currItem.type] || u.currTemplate.closeBtn && u.currTemplate.closeBtn.detach(), u.st.autoFocusLast && u._lastFocusedEl && h(u._lastFocusedEl).focus(), u.currItem = null, u.content = null, u.currTemplate = null, u.prevHeight = 0, Tt("AfterClose")
        },
        updateSize: function (b) {
            if (u.isIOS) {
                var O = document.documentElement.clientWidth / window.innerWidth,
                    A = window.innerHeight * O;
                u.wrap.css("height", A), u.wH = A
            } else u.wH = b || p.height();
            u.fixedContentPos || u.wrap.css("height", u.wH), Tt("Resize")
        },
        updateItemHTML: function () {
            var b = u.items[u.index];
            u.contentContainer.detach(), u.content && u.content.detach(), b.parsed || (b = u.parseEl(u.index));
            var O = b.type;
            if (Tt("BeforeChange", [u.currItem ? u.currItem.type : "", O]), u.currItem = b, !u.currTemplate[O]) {
                var A = !!u.st[O] && u.st[O].markup;
                Tt("FirstMarkupParse", A), u.currTemplate[O] = !A || h(A)
            }
            a && a !== b.type && u.container.removeClass("mfp-" + a + "-holder");
            var Z = u["get" + O.charAt(0).toUpperCase() + O.slice(1)](b, u.currTemplate[O]);
            u.appendContent(Z, O), b.preloaded = !0, Tt("Change", b), a = b.type, u.container.prepend(u.contentContainer), Tt("AfterChange")
        },
        appendContent: function (b, O) {
            u.content = b, b ? u.st.showCloseBtn && u.st.closeBtnInside && !0 === u.currTemplate[O] ? u.content.find(".mfp-close").length || u.content.append(_e()) : u.content = b : u.content = "", Tt("BeforeAppend"), u.container.addClass("mfp-" + O + "-holder"), u.contentContainer.append(u.content)
        },
        parseEl: function (b) {
            var O, A = u.items[b];
            if (A.tagName ? A = {
                    el: h(A)
                } : (O = A.type, A = {
                    data: A,
                    src: A.src
                }), A.el) {
                for (var Z = u.types, rt = 0; rt < Z.length; rt++)
                    if (A.el.hasClass("mfp-" + Z[rt])) {
                        O = Z[rt];
                        break
                    } A.src = A.el.attr("data-mfp-src"), A.src || (A.src = A.el.attr("href"))
            }
            return A.type = O || u.st.type || "inline", A.index = b, A.parsed = !0, u.items[b] = A, Tt("ElementParse", A), u.items[b]
        },
        addGroup: function (b, O) {
            var A = function (rt) {
                rt.mfpEl = this, u._openClick(rt, b, O)
            };
            O || (O = {});
            var Z = "click.magnificPopup";
            O.mainEl = b, O.items ? (O.isObj = !0, b.off(Z).on(Z, A)) : (O.isObj = !1, O.delegate ? b.off(Z).on(Z, O.delegate, A) : (O.items = b, b.off(Z).on(Z, A)))
        },
        _openClick: function (b, O, A) {
            if ((void 0 !== A.midClick ? A.midClick : h.magnificPopup.defaults.midClick) || !(2 === b.which || b.ctrlKey || b.metaKey || b.altKey || b.shiftKey)) {
                var rt = void 0 !== A.disableOn ? A.disableOn : h.magnificPopup.defaults.disableOn;
                if (rt)
                    if (h.isFunction(rt)) {
                        if (!rt.call(u)) return !0
                    } else if (p.width() < rt) return !0;
                b.type && (b.preventDefault(), u.isOpen && b.stopPropagation()), A.el = h(b.mfpEl), A.delegate && (A.items = O.find(A.delegate)), u.open(A)
            }
        },
        updateStatus: function (b, O) {
            if (u.preloader) {
                t !== b && u.container.removeClass("mfp-s-" + t), O || "loading" !== b || (O = u.st.tLoading);
                var A = {
                    status: b,
                    text: O
                };
                Tt("UpdateStatus", A), b = A.status, u.preloader.html(O = A.text), u.preloader.find("a").on("click", function (Z) {
                    Z.stopImmediatePropagation()
                }), u.container.addClass("mfp-s-" + b), t = b
            }
        },
        _checkIfClose: function (b) {
            if (!h(b).hasClass(qt)) {
                var O = u.st.closeOnContentClick,
                    A = u.st.closeOnBgClick;
                if (O && A || !u.content || h(b).hasClass("mfp-close") || u.preloader && b === u.preloader[0]) return !0;
                if (b === u.content[0] || h.contains(u.content[0], b)) {
                    if (O) return !0
                } else if (A && h.contains(document, b)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (b) {
            u.bgOverlay.addClass(b), u.wrap.addClass(b)
        },
        _removeClassFromMFP: function (b) {
            this.bgOverlay.removeClass(b), u.wrap.removeClass(b)
        },
        _hasScrollBar: function (b) {
            return (u.isIE7 ? o.height() : document.body.scrollHeight) > (b || p.height())
        },
        _setFocus: function () {
            (u.st.focus ? u.content.find(u.st.focus).eq(0) : u.wrap).focus()
        },
        _onFocusIn: function (b) {
            return b.target === u.wrap[0] || h.contains(u.wrap[0], b.target) ? void 0 : (u._setFocus(), !1)
        },
        _parseMarkup: function (b, O, A) {
            var Z;
            A.data && (O = h.extend(A.data, O)), Tt(D, [b, O, A]), h.each(O, function (rt, St) {
                if (void 0 === St || !1 === St) return !0;
                if ((Z = rt.split("_")).length > 1) {
                    var Dt = b.find(gt + "-" + Z[0]);
                    if (Dt.length > 0) {
                        var kt = Z[1];
                        "replaceWith" === kt ? Dt[0] !== St[0] && Dt.replaceWith(St) : "img" === kt ? Dt.is("img") ? Dt.attr("src", St) : Dt.replaceWith(h("<img>").attr("src", St).attr("class", Dt.attr("class"))) : Dt.attr(Z[1], St)
                    }
                } else b.find(gt + "-" + rt).html(St)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === u.scrollbarSize) {
                var b = document.createElement("div");
                b.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(b), u.scrollbarSize = b.offsetWidth - b.clientWidth, document.body.removeChild(b)
            }
            return u.scrollbarSize
        }
    }, h.magnificPopup = {
        instance: null,
        proto: Pt.prototype,
        modules: [],
        open: function (b, O) {
            return Xt(), (b = b ? h.extend(!0, {}, b) : {}).isObj = !0, b.index = O || 0, this.instance.open(b)
        },
        close: function () {
            return h.magnificPopup.instance && h.magnificPopup.instance.close()
        },
        registerModule: function (b, O) {
            O.options && (h.magnificPopup.defaults[b] = O.options), h.extend(this.proto, O.proto), this.modules.push(b)
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
    }, h.fn.magnificPopup = function (b) {
        Xt();
        var O = h(this);
        if ("string" == typeof b)
            if ("open" === b) {
                var A, Z = se ? O.data("magnificPopup") : O[0].magnificPopup,
                    rt = parseInt(arguments[1], 10) || 0;
                Z.items ? A = Z.items[rt] : (A = O, Z.delegate && (A = A.find(Z.delegate)), A = A.eq(rt)), u._openClick({
                    mfpEl: A
                }, O, Z)
            } else u.isOpen && u[b].apply(u, Array.prototype.slice.call(arguments, 1));
        else b = h.extend(!0, {}, b), se ? O.data("magnificPopup", b) : O[0].magnificPopup = b, u.addGroup(O, b);
        return O
    };
    var jt, De, oe, Se = "inline",
        Le = function () {
            oe && (De.after(oe.addClass(jt)).detach(), oe = null)
        };
    h.magnificPopup.registerModule(Se, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                u.types.push(Se), Ot(c + "." + Se, function () {
                    Le()
                })
            },
            getInline: function (b, O) {
                if (Le(), b.src) {
                    var A = u.st.inline,
                        Z = h(b.src);
                    if (Z.length) {
                        var rt = Z[0].parentNode;
                        rt && rt.tagName && (De || (De = Bt(jt = A.hiddenClass), jt = "mfp-" + jt), oe = Z.after(De).detach().removeClass(jt)), u.updateStatus("ready")
                    } else u.updateStatus("error", A.tNotFound), Z = h("<div>");
                    return b.inlineElement = Z, Z
                }
                return u.updateStatus("ready"), u._parseMarkup(O, {}, b), O
            }
        }
    });
    var Kt, me = "ajax",
        Zt = function () {
            Kt && h(document.body).removeClass(Kt)
        },
        we = function () {
            Zt(), u.req && u.req.abort()
        };
    h.magnificPopup.registerModule(me, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                u.types.push(me), Kt = u.st.ajax.cursor, Ot(c + "." + me, we), Ot("BeforeChange." + me, we)
            },
            getAjax: function (b) {
                Kt && h(document.body).addClass(Kt), u.updateStatus("loading");
                var O = h.extend({
                    url: b.src,
                    success: function (A, Z, rt) {
                        var St = {
                            data: A,
                            xhr: rt
                        };
                        Tt("ParseAjax", St), u.appendContent(h(St.data), me), b.finished = !0, Zt(), u._setFocus(), setTimeout(function () {
                            u.wrap.addClass(ct)
                        }, 16), u.updateStatus("ready"), Tt("AjaxContentAdded")
                    },
                    error: function () {
                        Zt(), b.finished = b.loadError = !0, u.updateStatus("error", u.st.ajax.tError.replace("%url%", b.src))
                    }
                }, u.st.ajax.settings);
                return u.req = h.ajax(O), ""
            }
        }
    });
    var ue, be, Y = function (b) {
        if (b.data && void 0 !== b.data.title) return b.data.title;
        var O = u.st.image.titleSrc;
        if (O) {
            if (h.isFunction(O)) return O.call(u, b);
            if (b.el) return b.el.attr(O) || ""
        }
        return ""
    };
    h.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var b = u.st.image,
                    O = ".image";
                u.types.push("image"), Ot(tt + O, function () {
                    "image" === u.currItem.type && b.cursor && h(document.body).addClass(b.cursor)
                }), Ot(c + O, function () {
                    b.cursor && h(document.body).removeClass(b.cursor), p.off("resize" + gt)
                }), Ot("Resize" + O, u.resizeImage), u.isLowIE && Ot("AfterChange", u.resizeImage)
            },
            resizeImage: function () {
                var b = u.currItem;
                if (b && b.img && u.st.image.verticalFit) {
                    var O = 0;
                    u.isLowIE && (O = parseInt(b.img.css("padding-top"), 10) + parseInt(b.img.css("padding-bottom"), 10)), b.img.css("max-height", u.wH - O)
                }
            },
            _onImageHasSize: function (b) {
                b.img && (b.hasSize = !0, ue && clearInterval(ue), b.isCheckingImgSize = !1, Tt("ImageHasSize", b), b.imgHidden && (u.content && u.content.removeClass("mfp-loading"), b.imgHidden = !1))
            },
            findImageSize: function (b) {
                var O = 0,
                    A = b.img[0],
                    Z = function (rt) {
                        ue && clearInterval(ue), ue = setInterval(function () {
                            return A.naturalWidth > 0 ? void u._onImageHasSize(b) : (O > 200 && clearInterval(ue), void(3 == ++O ? Z(10) : 40 === O ? Z(50) : 100 === O && Z(500)))
                        }, rt)
                    };
                Z(1)
            },
            getImage: function (b, O) {
                var A = 0,
                    Z = function () {
                        b && (b.img[0].complete ? (b.img.off(".mfploader"), b === u.currItem && (u._onImageHasSize(b), u.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, Tt("ImageLoadComplete")) : 200 > ++A ? setTimeout(Z, 100) : rt())
                    },
                    rt = function () {
                        b && (b.img.off(".mfploader"), b === u.currItem && (u._onImageHasSize(b), u.updateStatus("error", St.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
                    },
                    St = u.st.image,
                    Dt = O.find(".mfp-img");
                if (Dt.length) {
                    var kt = document.createElement("img");
                    kt.className = "mfp-img", b.el && b.el.find("img").length && (kt.alt = b.el.find("img").attr("alt")), b.img = h(kt).on("load.mfploader", Z).on("error.mfploader", rt), kt.src = b.src, Dt.is("img") && (b.img = b.img.clone()), (kt = b.img[0]).naturalWidth > 0 ? b.hasSize = !0 : kt.width || (b.hasSize = !1)
                }
                return u._parseMarkup(O, {
                    title: Y(b),
                    img_replaceWith: b.img
                }, b), u.resizeImage(), b.hasSize ? (ue && clearInterval(ue), b.loadError ? (O.addClass("mfp-loading"), u.updateStatus("error", St.tError.replace("%url%", b.src))) : (O.removeClass("mfp-loading"), u.updateStatus("ready")), O) : (u.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, O.addClass("mfp-loading"), u.findImageSize(b)), O)
            }
        }
    }), h.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (b) {
                return b.is("img") ? b : b.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var b, O = u.st.zoom,
                    A = ".zoom";
                if (O.enabled && u.supportsTransition) {
                    var Z, rt, St = O.duration,
                        Dt = function (Wt) {
                            var Rt = Wt.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                he = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                ae = "transition";
                            return he["-webkit-" + ae] = he["-moz-" + ae] = he["-o-" + ae] = he[ae] = "all " + O.duration / 1e3 + "s " + O.easing, Rt.css(he), Rt
                        },
                        kt = function () {
                            u.content.css("visibility", "visible")
                        };
                    Ot("BuildControls" + A, function () {
                        if (u._allowZoom()) {
                            if (clearTimeout(Z), u.content.css("visibility", "hidden"), !(b = u._getItemToZoom())) return void kt();
                            (rt = Dt(b)).css(u._getOffset()), u.wrap.append(rt), Z = setTimeout(function () {
                                rt.css(u._getOffset(!0)), Z = setTimeout(function () {
                                    kt(), setTimeout(function () {
                                        rt.remove(), b = rt = null, Tt("ZoomAnimationEnded")
                                    }, 16)
                                }, St)
                            }, 16)
                        }
                    }), Ot(y + A, function () {
                        if (u._allowZoom()) {
                            if (clearTimeout(Z), u.st.removalDelay = St, !b) {
                                if (!(b = u._getItemToZoom())) return;
                                rt = Dt(b)
                            }
                            rt.css(u._getOffset(!0)), u.wrap.append(rt), u.content.css("visibility", "hidden"), setTimeout(function () {
                                rt.css(u._getOffset())
                            }, 16)
                        }
                    }), Ot(c + A, function () {
                        u._allowZoom() && (kt(), rt && rt.remove(), b = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === u.currItem.type
            },
            _getItemToZoom: function () {
                return !!u.currItem.hasSize && u.currItem.img
            },
            _getOffset: function (b) {
                var O, A = (O = b ? u.currItem.img : u.st.zoom.opener(u.currItem.el || u.currItem)).offset(),
                    Z = parseInt(O.css("padding-top"), 10),
                    rt = parseInt(O.css("padding-bottom"), 10);
                A.top -= h(window).scrollTop() - Z;
                var St = {
                    width: O.width(),
                    height: (se ? O.innerHeight() : O[0].offsetHeight) - rt - Z
                };
                return void 0 === be && (be = void 0 !== document.createElement("p").style.MozTransform), be ? St["-moz-transform"] = St.transform = "translate(" + A.left + "px," + A.top + "px)" : (St.left = A.left, St.top = A.top), St
            }
        }
    });
    var Nt = "iframe",
        Ne = function (b) {
            if (u.currTemplate[Nt]) {
                var O = u.currTemplate[Nt].find("iframe");
                O.length && (b || (O[0].src = "//about:blank"), u.isIE8 && O.css("display", b ? "block" : "none"))
            }
        };
    h.magnificPopup.registerModule(Nt, {
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
            initIframe: function () {
                u.types.push(Nt), Ot("BeforeChange", function (b, O, A) {
                    O !== A && (O === Nt ? Ne() : A === Nt && Ne(!0))
                }), Ot(c + "." + Nt, function () {
                    Ne()
                })
            },
            getIframe: function (b, O) {
                var A = b.src,
                    Z = u.st.iframe;
                h.each(Z.patterns, function () {
                    return A.indexOf(this.index) > -1 ? (this.id && (A = "string" == typeof this.id ? A.substr(A.lastIndexOf(this.id) + this.id.length, A.length) : this.id.call(this, A)), A = this.src.replace("%id%", A), !1) : void 0
                });
                var rt = {};
                return Z.srcAction && (rt[Z.srcAction] = A), u._parseMarkup(O, rt, b), u.updateStatus("ready"), O
            }
        }
    });
    var Ve = function (b) {
            var O = u.items.length;
            return b > O - 1 ? b - O : 0 > b ? O + b : b
        },
        He = function (b, O, A) {
            return b.replace(/%curr%/gi, O + 1).replace(/%total%/gi, A)
        };
    h.magnificPopup.registerModule("gallery", {
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
            initGallery: function () {
                var b = u.st.gallery,
                    O = ".mfp-gallery";
                return u.direction = !0, !(!b || !b.enabled) && (i += " mfp-gallery", Ot(tt + O, function () {
                    b.navigateByImgClick && u.wrap.on("click" + O, ".mfp-img", function () {
                        return u.items.length > 1 ? (u.next(), !1) : void 0
                    }), o.on("keydown" + O, function (A) {
                        37 === A.keyCode ? u.prev() : 39 === A.keyCode && u.next()
                    })
                }), Ot("UpdateStatus" + O, function (A, Z) {
                    Z.text && (Z.text = He(Z.text, u.currItem.index, u.items.length))
                }), Ot(D + O, function (A, Z, rt, St) {
                    var Dt = u.items.length;
                    rt.counter = Dt > 1 ? He(b.tCounter, St.index, Dt) : ""
                }), Ot("BuildControls" + O, function () {
                    if (u.items.length > 1 && b.arrows && !u.arrowLeft) {
                        var A = b.arrowMarkup,
                            Z = u.arrowLeft = h(A.replace(/%title%/gi, b.tPrev).replace(/%dir%/gi, "left")).addClass(qt),
                            rt = u.arrowRight = h(A.replace(/%title%/gi, b.tNext).replace(/%dir%/gi, "right")).addClass(qt);
                        Z.click(function () {
                            u.prev()
                        }), rt.click(function () {
                            u.next()
                        }), u.container.append(Z.add(rt))
                    }
                }), Ot("Change" + O, function () {
                    u._preloadTimeout && clearTimeout(u._preloadTimeout), u._preloadTimeout = setTimeout(function () {
                        u.preloadNearbyImages(), u._preloadTimeout = null
                    }, 16)
                }), void Ot(c + O, function () {
                    o.off(O), u.wrap.off("click" + O), u.arrowRight = u.arrowLeft = null
                }))
            },
            next: function () {
                u.direction = !0, u.index = Ve(u.index + 1), u.updateItemHTML()
            },
            prev: function () {
                u.direction = !1, u.index = Ve(u.index - 1), u.updateItemHTML()
            },
            goTo: function (b) {
                u.direction = b >= u.index, u.index = b, u.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var b, O = u.st.gallery.preload,
                    A = Math.min(O[0], u.items.length),
                    Z = Math.min(O[1], u.items.length);
                for (b = 1; b <= (u.direction ? Z : A); b++) u._preloadItem(u.index + b);
                for (b = 1; b <= (u.direction ? A : Z); b++) u._preloadItem(u.index - b)
            },
            _preloadItem: function (b) {
                if (b = Ve(b), !u.items[b].preloaded) {
                    var O = u.items[b];
                    O.parsed || (O = u.parseEl(b)), Tt("LazyLoad", O), "image" === O.type && (O.img = h('<img class="mfp-img" />').on("load.mfploader", function () {
                        O.hasSize = !0
                    }).on("error.mfploader", function () {
                        O.hasSize = !0, O.loadError = !0, Tt("LazyLoadError", O)
                    }).attr("src", O.src)), O.preloaded = !0
                }
            }
        }
    });
    var re = "retina";
    h.magnificPopup.registerModule(re, {
        options: {
            replaceSrc: function (b) {
                return b.src.replace(/\.\w+$/, function (O) {
                    return "@2x" + O
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var b = u.st.retina,
                        O = b.ratio;
                    (O = isNaN(O) ? O() : O) > 1 && (Ot("ImageHasSize." + re, function (A, Z) {
                        Z.img.css({
                            "max-width": Z.img[0].naturalWidth / O,
                            width: "100%"
                        })
                    }), Ot("ElementParse." + re, function (A, Z) {
                        Z.src = b.replaceSrc(Z, O)
                    }))
                }
            }
        }
    }), Xt()
}),
function (h) {
    "use strict";
    h.fn.meanmenu = function (u) {
        var t = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-nav",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        u = h.extend(t, u);
        var o = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var a = u.meanMenuTarget,
                i = u.meanMenuContainer,
                r = u.meanMenuClose,
                c = u.meanMenuCloseSize,
                y = u.meanMenuOpen,
                C = u.meanRevealPosition,
                P = u.meanRevealPositionDistance,
                D = u.meanRevealColour,
                tt = u.meanScreenWidth,
                it = u.meanNavPush,
                lt = ".meanmenu-reveal",
                gt = u.meanShowChildren,
                ct = u.meanExpandableChildren,
                ke = u.meanExpand,
                qt = u.meanContract,
                Pt = u.meanRemoveAttrs,
                se = u.onePage,
                p = u.meanDisplay,
                Ot = u.removeElements,
                Bt = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (Bt = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var Tt = "",
                _e = function () {
                    if ("center" === C) {
                        var Kt = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        Tt = "left:" + Kt + ";right:auto;", Bt ? jQuery(".meanmenu-reveal").animate({
                            left: Kt
                        }) : jQuery(".meanmenu-reveal").css("left", Kt)
                    }
                },
                Xt = !1,
                Ft = !1;
            "right" === C && (Tt = "right:" + P + ";left:auto;"), "left" === C && (Tt = "left:" + P + ";right:auto;"), _e();
            var jt = "",
                oe = function () {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(a).css("display", p), Xt = !1, Ft = !1, jQuery(Ot).removeClass("mean-remove")
                },
                Se = function () {
                    var Le = "background:" + D + ";color:" + D + ";" + Tt;
                    if (tt >= o) {
                        jQuery(Ot).addClass("mean-remove"), Ft = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + Le + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var Kt = jQuery(a).html();
                        jQuery(".mean-nav").html(Kt), Pt && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(a).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", it), jQuery(a).hide(), jQuery(".meanmenu-reveal").show(), jQuery(lt).html(y), jt = jQuery(lt), jQuery(".mean-nav ul").hide(), gt ? ct ? (jQuery(".mean-nav ul ul").each(function () {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + c + '">' + ke + "</a>")
                        }), jQuery(".mean-expand").on("click", function (me) {
                            me.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(ke), jQuery(this).prev("ul").slideUp(300, function () {})) : (jQuery(this).text(qt), jQuery(this).prev("ul").slideDown(300, function () {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), jt.removeClass("meanclose"), jQuery(jt).click(function (me) {
                            me.preventDefault(), !1 === Xt ? (jt.css("text-align", "center"), jt.css("text-indent", "0"), jt.css("font-size", c), jQuery(".mean-nav ul:first").slideDown(), Xt = !0) : (jQuery(".mean-nav ul:first").slideUp(), Xt = !1), jt.toggleClass("meanclose"), jt.html(jQuery(jt).is(".meanmenu-reveal.meanclose") ? r : y), jQuery(Ot).addClass("mean-remove")
                        }), se && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                            jQuery(".mean-nav ul:first").slideUp(), Xt = !1, jQuery(jt).toggleClass("meanclose").html(y)
                        })
                    } else oe()
                };
            Bt || jQuery(window).resize(function () {
                o = window.innerWidth || document.documentElement.clientWidth, oe(), tt >= o ? (Se(), _e()) : oe()
            }), jQuery(window).resize(function () {
                o = window.innerWidth || document.documentElement.clientWidth, Bt ? (_e(), tt >= o ? !1 === Ft && Se() : oe()) : (oe(), tt >= o && (Se(), _e()))
            }), Se()
        })
    }
}(jQuery),
function (h, u) {
    "use strict";
    h.MixItUp = function () {
        var t = this;
        t._execAction("_constructor", 0), h.extend(t, {
            selectors: {
                target: ".mix",
                filter: ".filter",
                sort: ".sort"
            },
            animation: {
                enable: !0,
                effects: "fade scale",
                duration: 600,
                easing: "ease",
                perspectiveDistance: "3000",
                perspectiveOrigin: "50% 50%",
                queue: !0,
                queueLimit: 1,
                animateChangeLayout: !1,
                animateResizeContainer: !0,
                animateResizeTargets: !1,
                staggerSequence: !1,
                reverseOut: !1
            },
            callbacks: {
                onMixLoad: !1,
                onMixStart: !1,
                onMixBusy: !1,
                onMixEnd: !1,
                onMixFail: !1,
                _user: !1
            },
            controls: {
                enable: !0,
                live: !1,
                toggleFilterButtons: !1,
                toggleLogic: "or",
                activeClass: "active"
            },
            layout: {
                display: "inline-block",
                containerClass: "",
                containerClassFail: "fail"
            },
            load: {
                filter: "all",
                sort: !1
            },
            _$body: null,
            _$container: null,
            _$targets: null,
            _$parent: null,
            _$sortButtons: null,
            _$filterButtons: null,
            _suckMode: !1,
            _mixing: !1,
            _sorting: !1,
            _clicking: !1,
            _loading: !0,
            _changingLayout: !1,
            _changingClass: !1,
            _changingDisplay: !1,
            _origOrder: [],
            _startOrder: [],
            _newOrder: [],
            _activeFilter: null,
            _toggleArray: [],
            _toggleString: "",
            _activeSort: "default:asc",
            _newSort: null,
            _startHeight: null,
            _newHeight: null,
            _incPadding: !0,
            _newDisplay: null,
            _newClass: null,
            _targetsBound: 0,
            _targetsDone: 0,
            _queue: [],
            _$show: h(),
            _$hide: h()
        }), t._execAction("_constructor", 1)
    }, h.MixItUp.prototype = {
        constructor: h.MixItUp,
        _instances: {},
        _handled: {
            _filter: {},
            _sort: {}
        },
        _bound: {
            _filter: {},
            _sort: {}
        },
        _actions: {},
        _filters: {},
        extend: function (t) {
            for (var o in t) h.MixItUp.prototype[o] = t[o]
        },
        addAction: function (t, o, a, i) {
            h.MixItUp.prototype._addHook("_actions", t, o, a, i)
        },
        addFilter: function (t, o, a, i) {
            h.MixItUp.prototype._addHook("_filters", t, o, a, i)
        },
        _addHook: function (t, o, a, i, r) {
            var c = h.MixItUp.prototype[t],
                y = {};
            r = 1 === r || "post" === r ? "post" : "pre", y[o] = {}, y[o][r] = {}, y[o][r][a] = i, h.extend(!0, c, y)
        },
        _init: function (t, o) {
            var a = this;
            if (a._execAction("_init", 0, arguments), o && h.extend(!0, a, o), a._$body = h("body"), a._domNode = t, a._$container = h(t), a._$container.addClass(a.layout.containerClass), a._id = t.id, a._platformDetect(), a._brake = a._getPrefixedCSS("transition", "none"), a._refresh(!0), a._$parent = a._$targets.parent().length ? a._$targets.parent() : a._$container, a.load.sort && (a._newSort = a._parseSort(a.load.sort), a._newSortString = a.load.sort, a._activeSort = a.load.sort, a._sort(), a._printSort()), a._activeFilter = "all" === a.load.filter ? a.selectors.target : "none" === a.load.filter ? "" : a.load.filter, a.controls.enable && a._bindHandlers(), a.controls.toggleFilterButtons) {
                a._buildToggleArray();
                for (var i = 0; i < a._toggleArray.length; i++) a._updateControls({
                    filter: a._toggleArray[i],
                    sort: a._activeSort
                }, !0)
            } else a.controls.enable && a._updateControls({
                filter: a._activeFilter,
                sort: a._activeSort
            });
            a._filter(), a._init = !0, a._$container.data("mixItUp", a), a._execAction("_init", 1, arguments), a._buildState(), a._$targets.css(a._brake), a._goMix(a.animation.enable)
        },
        _platformDetect: function () {
            var t = this,
                o = ["Webkit", "Moz", "O", "ms"],
                a = ["webkit", "moz"],
                i = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || !1,
                r = "undefined" != typeof InstallTrigger,
                y = function (P) {
                    for (var D = 0; D < o.length; D++)
                        if (o[D] + "Transition" in P.style) return {
                            prefix: "-" + o[D].toLowerCase() + "-",
                            vendor: o[D]
                        };
                    return "transition" in P.style && ""
                }(t._domNode);
            t._execAction("_platformDetect", 0), t._chrome = !!i && parseInt(i[1], 10), t._ff = !!r && parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]), t._prefix = y.prefix, t._vendor = y.vendor, t._suckMode = !(window.atob && t._prefix), t._suckMode && (t.animation.enable = !1), t._ff && t._ff <= 4 && (t.animation.enable = !1);
            for (var C = 0; C < a.length && !window.requestAnimationFrame; C++) window.requestAnimationFrame = window[a[C] + "RequestAnimationFrame"];
            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (P) {
                return P.__proto__
            } : function (P) {
                return P.constructor.prototype
            }), t._domNode.nextElementSibling === u && Object.defineProperty(Element.prototype, "nextElementSibling", {
                get: function () {
                    for (var P = this.nextSibling; P;) {
                        if (1 === P.nodeType) return P;
                        P = P.nextSibling
                    }
                    return null
                }
            }), t._execAction("_platformDetect", 1)
        },
        _refresh: function (t, o) {
            var a = this;
            a._execAction("_refresh", 0, arguments), a._$targets = a._$container.find(a.selectors.target);
            for (var i = 0; i < a._$targets.length; i++) {
                if ((r = a._$targets[i]).dataset === u || o) {
                    r.dataset = {};
                    for (var c = 0; c < r.attributes.length; c++) {
                        var y = r.attributes[c],
                            C = y.name,
                            P = y.value;
                        if (C.indexOf("data-") > -1) {
                            var D = a._helpers._camelCase(C.substring(5, C.length));
                            r.dataset[D] = P
                        }
                    }
                }
                r.mixParent === u && (r.mixParent = a._id)
            }
            if (a._$targets.length && t || !a._origOrder.length && a._$targets.length)
                for (a._origOrder = [], i = 0; i < a._$targets.length; i++) {
                    var r;
                    a._origOrder.push(r = a._$targets[i])
                }
            a._execAction("_refresh", 1, arguments)
        },
        _bindHandlers: function () {
            var t = this,
                o = h.MixItUp.prototype._bound._filter,
                a = h.MixItUp.prototype._bound._sort;
            t._execAction("_bindHandlers", 0), t.controls.live ? t._$body.on("click.mixItUp." + t._id, t.selectors.sort, function () {
                t._processClick(h(this), "sort")
            }).on("click.mixItUp." + t._id, t.selectors.filter, function () {
                t._processClick(h(this), "filter")
            }) : (t._$sortButtons = h(t.selectors.sort), t._$filterButtons = h(t.selectors.filter), t._$sortButtons.on("click.mixItUp." + t._id, function () {
                t._processClick(h(this), "sort")
            }), t._$filterButtons.on("click.mixItUp." + t._id, function () {
                t._processClick(h(this), "filter")
            })), o[t.selectors.filter] = o[t.selectors.filter] === u ? 1 : o[t.selectors.filter] + 1, a[t.selectors.sort] = a[t.selectors.sort] === u ? 1 : a[t.selectors.sort] + 1, t._execAction("_bindHandlers", 1)
        },
        _processClick: function (t, o) {
            var a = this,
                i = function (P, D, tt) {
                    var it = h.MixItUp.prototype;
                    it._handled["_" + D][a.selectors[D]] = it._handled["_" + D][a.selectors[D]] === u ? 1 : it._handled["_" + D][a.selectors[D]] + 1, it._handled["_" + D][a.selectors[D]] === it._bound["_" + D][a.selectors[D]] && (P[(tt ? "remove" : "add") + "Class"](a.controls.activeClass), delete it._handled["_" + D][a.selectors[D]])
                };
            if (a._execAction("_processClick", 0, arguments), !a._mixing || a.animation.queue && a._queue.length < a.animation.queueLimit) {
                if (a._clicking = !0, "sort" === o) {
                    var r = t.attr("data-sort");
                    (!t.hasClass(a.controls.activeClass) || r.indexOf("random") > -1) && (h(a.selectors.sort).removeClass(a.controls.activeClass), i(t, o), a.sort(r))
                }
                if ("filter" === o) {
                    var c, y = t.attr("data-filter"),
                        C = "or" === a.controls.toggleLogic ? "," : "";
                    a.controls.toggleFilterButtons ? (a._buildToggleArray(), t.hasClass(a.controls.activeClass) ? (i(t, o, !0), c = a._toggleArray.indexOf(y), a._toggleArray.splice(c, 1)) : (i(t, o), a._toggleArray.push(y)), a._toggleArray = h.grep(a._toggleArray, function (P) {
                        return P
                    }), a._toggleString = a._toggleArray.join(C), a.filter(a._toggleString)) : t.hasClass(a.controls.activeClass) || (h(a.selectors.filter).removeClass(a.controls.activeClass), i(t, o), a.filter(y))
                }
                a._execAction("_processClick", 1, arguments)
            } else "function" == typeof a.callbacks.onMixBusy && a.callbacks.onMixBusy.call(a._domNode, a._state, a), a._execAction("_processClickBusy", 1, arguments)
        },
        _buildToggleArray: function () {
            var t = this,
                o = t._activeFilter.replace(/\s/g, "");
            if (t._execAction("_buildToggleArray", 0, arguments), "or" === t.controls.toggleLogic) t._toggleArray = o.split(",");
            else {
                t._toggleArray = o.split("."), !t._toggleArray[0] && t._toggleArray.shift();
                for (var a, i = 0; a = t._toggleArray[i]; i++) t._toggleArray[i] = "." + a
            }
            t._execAction("_buildToggleArray", 1, arguments)
        },
        _updateControls: function (t, o) {
            var a = this,
                i = {
                    filter: t.filter,
                    sort: t.sort
                },
                r = function (P, D) {
                    try {
                        o && "filter" === c && "none" !== i.filter && "" !== i.filter ? P.filter(D).addClass(a.controls.activeClass) : P.removeClass(a.controls.activeClass).filter(D).addClass(a.controls.activeClass)
                    } catch (tt) {}
                },
                c = "filter",
                y = null;
            a._execAction("_updateControls", 0, arguments), t.filter === u && (i.filter = a._activeFilter), t.sort === u && (i.sort = a._activeSort), i.filter === a.selectors.target && (i.filter = "all");
            for (var C = 0; 2 > C; C++)(y = a.controls.live ? h(a.selectors[c]) : a["_$" + c + "Buttons"]) && r(y, "[data-" + c + '="' + i[c] + '"]'), c = "sort";
            a._execAction("_updateControls", 1, arguments)
        },
        _filter: function () {
            var t = this;
            t._execAction("_filter", 0);
            for (var o = 0; o < t._$targets.length; o++) {
                var a = h(t._$targets[o]);
                a.is(t._activeFilter) ? t._$show = t._$show.add(a) : t._$hide = t._$hide.add(a)
            }
            t._execAction("_filter", 1)
        },
        _sort: function () {
            var t = this;
            t._execAction("_sort", 0), t._startOrder = [];
            for (var a = 0; a < t._$targets.length; a++) t._startOrder.push(t._$targets[a]);
            switch (t._newSort[0].sortBy) {
                case "default":
                    t._newOrder = t._origOrder;
                    break;
                case "random":
                    t._newOrder = function (r) {
                        for (var c = r.slice(), y = c.length, C = y; C--;) {
                            var P = parseInt(Math.random() * y),
                                D = c[C];
                            c[C] = c[P], c[P] = D
                        }
                        return c
                    }(t._startOrder);
                    break;
                case "custom":
                    t._newOrder = t._newSort[0].order;
                    break;
                default:
                    t._newOrder = t._startOrder.concat().sort(function (r, c) {
                        return t._compare(r, c)
                    })
            }
            t._execAction("_sort", 1)
        },
        _compare: function (t, o, a) {
            var i = this,
                r = i._newSort[a = a || 0].order,
                c = function (P) {
                    return P.dataset[i._newSort[a].sortBy] || 0
                },
                y = isNaN(1 * c(t)) ? c(t).toLowerCase() : 1 * c(t),
                C = isNaN(1 * c(o)) ? c(o).toLowerCase() : 1 * c(o);
            return C > y ? "asc" === r ? -1 : 1 : y > C ? "asc" === r ? 1 : -1 : y === C && i._newSort.length > a + 1 ? i._compare(t, o, a + 1) : 0
        },
        _printSort: function (t) {
            var o = this,
                a = t ? o._startOrder : o._newOrder,
                i = o._$parent[0].querySelectorAll(o.selectors.target),
                r = i.length ? i[i.length - 1].nextElementSibling : null,
                c = document.createDocumentFragment();
            o._execAction("_printSort", 0, arguments);
            for (var y = 0; y < i.length; y++) {
                var C = i[y],
                    P = C.nextSibling;
                "absolute" !== C.style.position && (P && "#text" === P.nodeName && o._$parent[0].removeChild(P), o._$parent[0].removeChild(C))
            }
            for (y = 0; y < a.length; y++) {
                var D = a[y];
                if ("default" !== o._newSort[0].sortBy || "desc" !== o._newSort[0].order || t) c.appendChild(D), c.appendChild(document.createTextNode(" "));
                else {
                    var tt = c.firstChild;
                    c.insertBefore(D, tt), c.insertBefore(document.createTextNode(" "), D)
                }
            }
            r ? o._$parent[0].insertBefore(c, r) : o._$parent[0].appendChild(c), o._execAction("_printSort", 1, arguments)
        },
        _parseSort: function (t) {
            for (var o = this, a = "string" == typeof t ? t.split(" ") : [t], i = [], r = 0; r < a.length; r++) {
                var c = "string" == typeof t ? a[r].split(":") : ["custom", a[r]],
                    y = {
                        sortBy: o._helpers._camelCase(c[0]),
                        order: c[1] || "asc"
                    };
                if (i.push(y), "default" === y.sortBy || "random" === y.sortBy) break
            }
            return o._execFilter("_parseSort", i, arguments)
        },
        _parseEffects: function () {
            var t = this,
                o = {
                    opacity: "",
                    transformIn: "",
                    transformOut: "",
                    filter: ""
                },
                a = function (c, y, C) {
                    if (t.animation.effects.indexOf(c) > -1) {
                        if (y) {
                            var P = t.animation.effects.indexOf(c + "(");
                            if (P > -1) {
                                var D = t.animation.effects.substring(P);
                                return {
                                    val: /\(([^)]+)\)/.exec(D)[1]
                                }
                            }
                        }
                        return !0
                    }
                    return !1
                },
                i = function (c, y) {
                    return y ? "-" === c.charAt(0) ? c.substr(1, c.length) : "-" + c : c
                },
                r = function (c, y) {
                    for (var C = [
                            ["scale", ".01"],
                            ["translateX", "20px"],
                            ["translateY", "20px"],
                            ["translateZ", "20px"],
                            ["rotateX", "90deg"],
                            ["rotateY", "90deg"],
                            ["rotateZ", "180deg"]
                        ], P = 0; P < C.length; P++) {
                        var D = C[P][0],
                            tt = C[P][1],
                            it = y && "scale" !== D;
                        o[c] += a(D) ? D + "(" + i(a(D, !0).val || tt, it) + ") " : ""
                    }
                };
            return o.opacity = a("fade") ? a("fade", !0).val || "0" : "1", r("transformIn"), t.animation.reverseOut ? r("transformOut", !0) : o.transformOut = o.transformIn, o.transition = {}, o.transition = t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + ", opacity " + t.animation.duration + "ms linear"), t.animation.stagger = !!a("stagger"), t.animation.staggerDuration = parseInt(a("stagger") && a("stagger", !0).val ? a("stagger", !0).val : 100), t._execFilter("_parseEffects", o)
        },
        _buildState: function (t) {
            var a, o = this;
            return o._execAction("_buildState", 0), a = {
                activeFilter: "" === o._activeFilter ? "none" : o._activeFilter,
                activeSort: t && o._newSortString ? o._newSortString : o._activeSort,
                fail: !o._$show.length && "" !== o._activeFilter,
                $targets: o._$targets,
                $show: o._$show,
                $hide: o._$hide,
                totalTargets: o._$targets.length,
                totalShow: o._$show.length,
                totalHide: o._$hide.length,
                display: t && o._newDisplay ? o._newDisplay : o.layout.display
            }, t ? o._execFilter("_buildState", a) : (o._state = a, void o._execAction("_buildState", 1))
        },
        _goMix: function (t) {
            var o = this,
                a = function () {
                    o._chrome && 31 === o._chrome && c(o._$parent[0]), o._setInter(), i()
                },
                i = function () {
                    var C = window.pageYOffset,
                        P = window.pageXOffset;
                    document, o._getInterMixData(), o._setFinal(), o._getFinalMixData(), window.pageYOffset !== C && window.scrollTo(P, C), o._prepTargets(), window.requestAnimationFrame ? requestAnimationFrame(r) : setTimeout(function () {
                        r()
                    }, 20)
                },
                r = function () {
                    o._animateTargets(), 0 === o._targetsBound && o._cleanUp()
                },
                c = function (C) {
                    var P = C.parentElement,
                        D = document.createElement("div"),
                        tt = document.createDocumentFragment();
                    P.insertBefore(D, C), tt.appendChild(C), P.replaceChild(C, D)
                },
                y = o._buildState(!0);
            o._execAction("_goMix", 0, arguments), !o.animation.duration && (t = !1), o._mixing = !0, o._$container.removeClass(o.layout.containerClassFail), "function" == typeof o.callbacks.onMixStart && o.callbacks.onMixStart.call(o._domNode, o._state, y, o), o._$container.trigger("mixStart", [o._state, y, o]), o._getOrigMixData(), t && !o._suckMode ? window.requestAnimationFrame ? requestAnimationFrame(a) : a() : o._cleanUp(), o._execAction("_goMix", 1, arguments)
        },
        _getTargetData: function (t, o) {
            var a;
            t.dataset[o + "PosX"] = t.offsetLeft, t.dataset[o + "PosY"] = t.offsetTop, this.animation.animateResizeTargets && (a = this._suckMode ? {
                marginBottom: "",
                marginRight: ""
            } : window.getComputedStyle(t), t.dataset[o + "MarginBottom"] = parseInt(a.marginBottom), t.dataset[o + "MarginRight"] = parseInt(a.marginRight), t.dataset[o + "Width"] = t.offsetWidth, t.dataset[o + "Height"] = t.offsetHeight)
        },
        _getOrigMixData: function () {
            var t = this,
                o = t._suckMode ? {
                    boxSizing: ""
                } : window.getComputedStyle(t._$parent[0]);
            t._incPadding = "border-box" === (o.boxSizing || o[t._vendor + "BoxSizing"]), t._execAction("_getOrigMixData", 0), !t._suckMode && (t.effects = t._parseEffects()), t._$toHide = t._$hide.filter(":visible"), t._$toShow = t._$show.filter(":hidden"), t._$pre = t._$targets.filter(":visible"), t._startHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height();
            for (var i = 0; i < t._$pre.length; i++) t._getTargetData(t._$pre[i], "orig");
            t._execAction("_getOrigMixData", 1)
        },
        _setInter: function () {
            var t = this;
            t._execAction("_setInter", 0), t._changingLayout && t.animation.animateChangeLayout ? (t._$toShow.css("display", t._newDisplay), t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass)) : t._$toShow.css("display", t.layout.display), t._execAction("_setInter", 1)
        },
        _getInterMixData: function () {
            var t = this;
            t._execAction("_getInterMixData", 0);
            for (var o = 0; o < t._$toShow.length; o++) t._getTargetData(t._$toShow[o], "inter");
            for (o = 0; o < t._$pre.length; o++) t._getTargetData(t._$pre[o], "inter");
            t._execAction("_getInterMixData", 1)
        },
        _setFinal: function () {
            var t = this;
            t._execAction("_setFinal", 0), t._sorting && t._printSort(), t._$toHide.removeStyle("display"), t._changingLayout && t.animation.animateChangeLayout && t._$pre.css("display", t._newDisplay), t._execAction("_setFinal", 1)
        },
        _getFinalMixData: function () {
            var t = this;
            t._execAction("_getFinalMixData", 0);
            for (var o = 0; o < t._$toShow.length; o++) t._getTargetData(t._$toShow[o], "final");
            for (o = 0; o < t._$pre.length; o++) t._getTargetData(t._$pre[o], "final");
            t._newHeight = t._incPadding ? t._$parent.outerHeight() : t._$parent.height(), t._sorting && t._printSort(!0), t._$toShow.removeStyle("display"), t._$pre.css("display", t.layout.display), t._changingClass && t.animation.animateChangeLayout && t._$container.removeClass(t._newClass).addClass(t.layout.containerClass), t._execAction("_getFinalMixData", 1)
        },
        _prepTargets: function () {
            var t = this,
                o = {
                    _in: t._getPrefixedCSS("transform", t.effects.transformIn),
                    _out: t._getPrefixedCSS("transform", t.effects.transformOut)
                };
            t._execAction("_prepTargets", 0), t.animation.animateResizeContainer && t._$parent.css("height", t._startHeight + "px");
            for (var a = 0; a < t._$toShow.length; a++) {
                var r = h(i = t._$toShow[a]);
                i.style.opacity = t.effects.opacity, i.style.display = t._changingLayout && t.animation.animateChangeLayout ? t._newDisplay : t.layout.display, r.css(o._in), t.animation.animateResizeTargets && (i.style.width = i.dataset.finalWidth + "px", i.style.height = i.dataset.finalHeight + "px", i.style.marginRight = 1 * i.dataset.finalMarginRight - (i.dataset.finalWidth - i.dataset.interWidth) + "px", i.style.marginBottom = 1 * i.dataset.finalMarginBottom - (i.dataset.finalHeight - i.dataset.interHeight) + "px")
            }
            for (a = 0; a < t._$pre.length; a++) {
                r = h(i = t._$pre[a]);
                var i, c = {
                    x: i.dataset.origPosX - i.dataset.interPosX,
                    y: i.dataset.origPosY - i.dataset.interPosY
                };
                o = t._getPrefixedCSS("transform", "translate(" + c.x + "px," + c.y + "px)"), r.css(o), t.animation.animateResizeTargets && (i.style.width = i.dataset.origWidth + "px", i.style.height = i.dataset.origHeight + "px", i.dataset.origWidth - i.dataset.finalWidth && (i.style.marginRight = 1 * i.dataset.origMarginRight - (i.dataset.origWidth - i.dataset.interWidth) + "px"), i.dataset.origHeight - i.dataset.finalHeight && (i.style.marginBottom = 1 * i.dataset.origMarginBottom - (i.dataset.origHeight - i.dataset.interHeight) + "px"))
            }
            t._execAction("_prepTargets", 1)
        },
        _animateTargets: function () {
            var t = this;
            t._execAction("_animateTargets", 0), t._targetsDone = 0, t._targetsBound = 0, t._$parent.css(t._getPrefixedCSS("perspective", t.animation.perspectiveDistance + "px")).css(t._getPrefixedCSS("perspective-origin", t.animation.perspectiveOrigin)), t.animation.animateResizeContainer && t._$parent.css(t._getPrefixedCSS("transition", "height " + t.animation.duration + "ms ease")).css("height", t._newHeight + "px");
            for (var o = 0; o < t._$toShow.length; o++) {
                var i = h(a = t._$toShow[o]),
                    r = {
                        x: a.dataset.finalPosX - a.dataset.interPosX,
                        y: a.dataset.finalPosY - a.dataset.interPosY
                    },
                    c = t._getDelay(o),
                    y = {};
                a.style.opacity = "";
                for (var C = 0; 2 > C; C++) {
                    var P = 0 === C ? P = t._prefix : "";
                    t._ff && t._ff <= 20 && (y[P + "transition-property"] = "all", y[P + "transition-timing-function"] = t.animation.easing + "ms", y[P + "transition-duration"] = t.animation.duration + "ms"), y[P + "transition-delay"] = c + "ms", y[P + "transform"] = "translate(" + r.x + "px," + r.y + "px)"
                }(t.effects.transform || t.effects.opacity) && t._bindTargetDone(i), t._ff && t._ff <= 20 ? i.css(y) : i.css(t.effects.transition).css(y)
            }
            for (o = 0; o < t._$pre.length; o++) i = h(a = t._$pre[o]), r = {
                x: a.dataset.finalPosX - a.dataset.interPosX,
                y: a.dataset.finalPosY - a.dataset.interPosY
            }, c = t._getDelay(o), (a.dataset.finalPosX !== a.dataset.origPosX || a.dataset.finalPosY !== a.dataset.origPosY) && t._bindTargetDone(i), i.css(t._getPrefixedCSS("transition", "all " + t.animation.duration + "ms " + t.animation.easing + " " + c + "ms")), i.css(t._getPrefixedCSS("transform", "translate(" + r.x + "px," + r.y + "px)")), t.animation.animateResizeTargets && (a.dataset.origWidth - a.dataset.finalWidth && 1 * a.dataset.finalWidth && (a.style.width = a.dataset.finalWidth + "px", a.style.marginRight = 1 * a.dataset.finalMarginRight - (a.dataset.finalWidth - a.dataset.interWidth) + "px"), a.dataset.origHeight - a.dataset.finalHeight && 1 * a.dataset.finalHeight && (a.style.height = a.dataset.finalHeight + "px", a.style.marginBottom = 1 * a.dataset.finalMarginBottom - (a.dataset.finalHeight - a.dataset.interHeight) + "px"));
            for (t._changingClass && t._$container.removeClass(t.layout.containerClass).addClass(t._newClass), o = 0; o < t._$toHide.length; o++) {
                i = h(a = t._$toHide[o]), c = t._getDelay(o);
                var a, D = {};
                for (C = 0; 2 > C; C++) D[(P = 0 === C ? P = t._prefix : "") + "transition-delay"] = c + "ms", D[P + "transform"] = t.effects.transformOut, D.opacity = t.effects.opacity;
                i.css(t.effects.transition).css(D), (t.effects.transform || t.effects.opacity) && t._bindTargetDone(i)
            }
            t._execAction("_animateTargets", 1)
        },
        _bindTargetDone: function (t) {
            var o = this,
                a = t[0];
            o._execAction("_bindTargetDone", 0, arguments), a.dataset.bound || (a.dataset.bound = !0, o._targetsBound++, t.on("webkitTransitionEnd.mixItUp transitionend.mixItUp", function (i) {
                (i.originalEvent.propertyName.indexOf("transform") > -1 || i.originalEvent.propertyName.indexOf("opacity") > -1) && h(i.originalEvent.target).is(o.selectors.target) && (t.off(".mixItUp"), a.dataset.bound = "", o._targetDone())
            })), o._execAction("_bindTargetDone", 1, arguments)
        },
        _targetDone: function () {
            var t = this;
            t._execAction("_targetDone", 0), t._targetsDone++, t._targetsDone === t._targetsBound && t._cleanUp(), t._execAction("_targetDone", 1)
        },
        _cleanUp: function () {
            var t = this,
                o = t.animation.animateResizeTargets ? "transform opacity width height margin-bottom margin-right" : "transform opacity";
            t._execAction("_cleanUp", 0), t._$show.css("display", t._changingLayout ? t._newDisplay : t.layout.display), t._$targets.css(t._brake), t._$targets.removeStyle(o, t._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"), t._$hide.removeStyle("display"), t._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin", t._prefix), t._sorting && (t._printSort(), t._activeSort = t._newSortString, t._sorting = !1), t._changingLayout && (t._changingDisplay && (t.layout.display = t._newDisplay, t._changingDisplay = !1), t._changingClass && (t._$parent.removeClass(t.layout.containerClass).addClass(t._newClass), t.layout.containerClass = t._newClass, t._changingClass = !1), t._changingLayout = !1), t._refresh(), t._buildState(), t._state.fail && t._$container.addClass(t.layout.containerClassFail), t._$show = h(), t._$hide = h(), window.requestAnimationFrame && requestAnimationFrame(function () {
                t._$targets.removeStyle("transition", t._prefix)
            }), t._mixing = !1, "function" == typeof t.callbacks._user && t.callbacks._user.call(t._domNode, t._state, t), "function" == typeof t.callbacks.onMixEnd && t.callbacks.onMixEnd.call(t._domNode, t._state, t), t._$container.trigger("mixEnd", [t._state, t]), t._state.fail && ("function" == typeof t.callbacks.onMixFail && t.callbacks.onMixFail.call(t._domNode, t._state, t), t._$container.trigger("mixFail", [t._state, t])), t._loading && ("function" == typeof t.callbacks.onMixLoad && t.callbacks.onMixLoad.call(t._domNode, t._state, t), t._$container.trigger("mixLoad", [t._state, t])), t._queue.length && (t._execAction("_queue", 0), t.multiMix(t._queue[0][0], t._queue[0][1], t._queue[0][2]), t._queue.splice(0, 1)), t._execAction("_cleanUp", 1), t._loading = !1
        },
        _getPrefixedCSS: function (t, o, a) {
            var i = this,
                r = {},
                c = "",
                y = -1;
            for (y = 0; 2 > y; y++) r[(c = 0 === y ? i._prefix : "") + t] = a ? c + o : o;
            return i._execFilter("_getPrefixedCSS", r, arguments)
        },
        _getDelay: function (t) {
            var o = this,
                a = "function" == typeof o.animation.staggerSequence ? o.animation.staggerSequence.call(o._domNode, t, o._state) : t,
                i = o.animation.stagger ? a * o.animation.staggerDuration : 0;
            return o._execFilter("_getDelay", i, arguments)
        },
        _parseMultiMixArgs: function (t) {
            for (var o = this, a = {
                    command: null,
                    animate: o.animation.enable,
                    callback: null
                }, i = 0; i < t.length; i++) {
                var r = t[i];
                null !== r && ("object" == typeof r || "string" == typeof r ? a.command = r : "boolean" == typeof r ? a.animate = r : "function" == typeof r && (a.callback = r))
            }
            return o._execFilter("_parseMultiMixArgs", a, arguments)
        },
        _parseInsertArgs: function (t) {
            for (var o = this, a = {
                    index: 0,
                    $object: h(),
                    multiMix: {
                        filter: o._state.activeFilter
                    },
                    callback: null
                }, i = 0; i < t.length; i++) {
                var r = t[i];
                "number" == typeof r ? a.index = r : "object" == typeof r && r instanceof h ? a.$object = r : "object" == typeof r && o._helpers._isElement(r) ? a.$object = h(r) : "object" == typeof r && null !== r ? a.multiMix = r : "boolean" != typeof r || r ? "function" == typeof r && (a.callback = r) : a.multiMix = !1
            }
            return o._execFilter("_parseInsertArgs", a, arguments)
        },
        _execAction: function (t, o, a) {
            var i = this,
                r = o ? "post" : "pre";
            if (!i._actions.isEmptyObject && i._actions.hasOwnProperty(t))
                for (var c in i._actions[t][r]) i._actions[t][r][c].call(i, a)
        },
        _execFilter: function (t, o, a) {
            var i = this;
            if (i._filters.isEmptyObject || !i._filters.hasOwnProperty(t)) return o;
            for (var r in i._filters[t]) return i._filters[t][r].call(i, a)
        },
        _helpers: {
            _camelCase: function (t) {
                return t.replace(/-([a-z])/g, function (o) {
                    return o[1].toUpperCase()
                })
            },
            _isElement: function (t) {
                return window.HTMLElement ? t instanceof HTMLElement : null !== t && 1 === t.nodeType && "string" === t.nodeName
            }
        },
        isMixing: function () {
            return this._execFilter("isMixing", this._mixing)
        },
        filter: function () {
            var t = this,
                o = t._parseMultiMixArgs(arguments);
            t._clicking && (t._toggleString = ""), t.multiMix({
                filter: o.command
            }, o.animate, o.callback)
        },
        sort: function () {
            var t = this,
                o = t._parseMultiMixArgs(arguments);
            t.multiMix({
                sort: o.command
            }, o.animate, o.callback)
        },
        changeLayout: function () {
            var t = this,
                o = t._parseMultiMixArgs(arguments);
            t.multiMix({
                changeLayout: o.command
            }, o.animate, o.callback)
        },
        multiMix: function () {
            var t = this,
                o = t._parseMultiMixArgs(arguments);
            if (t._execAction("multiMix", 0, arguments), t._mixing) t.animation.queue && t._queue.length < t.animation.queueLimit ? (t._queue.push(arguments), t.controls.enable && !t._clicking && t._updateControls(o.command), t._execAction("multiMixQueue", 1, arguments)) : ("function" == typeof t.callbacks.onMixBusy && t.callbacks.onMixBusy.call(t._domNode, t._state, t), t._$container.trigger("mixBusy", [t._state, t]), t._execAction("multiMixBusy", 1, arguments));
            else {
                t.controls.enable && !t._clicking && (t.controls.toggleFilterButtons && t._buildToggleArray(), t._updateControls(o.command, t.controls.toggleFilterButtons)), t._queue.length < 2 && (t._clicking = !1), delete t.callbacks._user, o.callback && (t.callbacks._user = o.callback);
                var a = o.command.sort,
                    i = o.command.filter,
                    r = o.command.changeLayout;
                t._refresh(), a && (t._newSort = t._parseSort(a), t._newSortString = a, t._sorting = !0, t._sort()), i !== u && (t._activeFilter = i = "all" === i ? t.selectors.target : i), t._filter(), r && (t._newDisplay = "string" == typeof r ? r : r.display || t.layout.display, t._newClass = r.containerClass || "", (t._newDisplay !== t.layout.display || t._newClass !== t.layout.containerClass) && (t._changingLayout = !0, t._changingClass = t._newClass !== t.layout.containerClass, t._changingDisplay = t._newDisplay !== t.layout.display)), t._$targets.css(t._brake), t._goMix(o.animate ^ t.animation.enable ? o.animate : t.animation.enable), t._execAction("multiMix", 1, arguments)
            }
        },
        insert: function () {
            var t = this,
                o = t._parseInsertArgs(arguments),
                a = "function" == typeof o.callback ? o.callback : null,
                i = document.createDocumentFragment(),
                r = (t._refresh(), t._$targets.length ? o.index < t._$targets.length || !t._$targets.length ? t._$targets[o.index] : t._$targets[t._$targets.length - 1].nextElementSibling : t._$parent[0].children[0]);
            if (t._execAction("insert", 0, arguments), o.$object) {
                for (var c = 0; c < o.$object.length; c++) {
                    var y = o.$object[c];
                    i.appendChild(y), i.appendChild(document.createTextNode(" "))
                }
                t._$parent[0].insertBefore(i, r)
            }
            t._execAction("insert", 1, arguments), "object" == typeof o.multiMix && t.multiMix(o.multiMix, a)
        },
        prepend: function () {
            var t = this,
                o = t._parseInsertArgs(arguments);
            t.insert(0, o.$object, o.multiMix, o.callback)
        },
        append: function () {
            var t = this,
                o = t._parseInsertArgs(arguments);
            t.insert(t._state.totalTargets, o.$object, o.multiMix, o.callback)
        },
        getOption: function (t) {
            var o = this,
                a = function (i, r) {
                    for (var c = r.split("."), y = c.pop(), C = c.length, P = 1, D = c[0] || r;
                        (i = i[D]) && C > P;) D = c[P], P++;
                    return i !== u ? i[y] !== u ? i[y] : i : void 0
                };
            return t ? o._execFilter("getOption", a(o, t), arguments) : o
        },
        setOptions: function (t) {
            var o = this;
            o._execAction("setOptions", 0, arguments), "object" == typeof t && h.extend(!0, o, t), o._execAction("setOptions", 1, arguments)
        },
        getState: function () {
            var t = this;
            return t._execFilter("getState", t._state, t)
        },
        forceRefresh: function () {
            this._refresh(!1, !0)
        },
        destroy: function (t) {
            var o = this,
                a = h.MixItUp.prototype._bound._filter,
                i = h.MixItUp.prototype._bound._sort;
            o._execAction("destroy", 0, arguments), o._$body.add(h(o.selectors.sort)).add(h(o.selectors.filter)).off(".mixItUp");
            for (var r = 0; r < o._$targets.length; r++) {
                var c = o._$targets[r];
                t && (c.style.display = ""), delete c.mixParent
            }
            o._execAction("destroy", 1, arguments), a[o.selectors.filter] && a[o.selectors.filter] > 1 ? a[o.selectors.filter]-- : 1 === a[o.selectors.filter] && delete a[o.selectors.filter], i[o.selectors.sort] && i[o.selectors.sort] > 1 ? i[o.selectors.sort]-- : 1 === i[o.selectors.sort] && delete i[o.selectors.sort], delete h.MixItUp.prototype._instances[o._id]
        }
    }, h.fn.mixItUp = function () {
        var t, o = arguments,
            a = [],
            i = function (r, c) {
                var y = new h.MixItUp,
                    C = function () {
                        return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
                    };
                y._execAction("_instantiate", 0, arguments), r.id = r.id ? r.id : "MixItUp" + C(), y._instances[r.id] || (y._instances[r.id] = y, y._init(r, c)), y._execAction("_instantiate", 1, arguments)
            };
        return t = this.each(function () {
            if (o && "string" == typeof o[0]) {
                var r = h.MixItUp.prototype._instances[this.id];
                if ("isLoaded" === o[0]) a.push(!!r);
                else {
                    var c = r[o[0]](o[1], o[2], o[3]);
                    c !== u && a.push(c)
                }
            } else i(this, o[0])
        }), a.length ? a.length > 1 ? a : a[0] : t
    }, h.fn.removeStyle = function (t, o) {
        return o = o || "", this.each(function () {
            for (var a = this, i = t.split(" "), r = 0; r < i.length; r++)
                for (var c = 0; 4 > c; c++) {
                    switch (c) {
                        case 0:
                            var y = i[r];
                            break;
                        case 1:
                            y = h.MixItUp.prototype._helpers._camelCase(y);
                            break;
                        case 2:
                            y = o + i[r];
                            break;
                        case 3:
                            y = h.MixItUp.prototype._helpers._camelCase(o + i[r])
                    }
                    if (a.style[y] !== u && "unknown" != typeof a.style[y] && a.style[y].length > 0 && (a.style[y] = ""), !o && 1 === c) break
                }
            a.attributes && a.attributes.style && a.attributes.style !== u && "" === a.attributes.style.value && a.attributes.removeNamedItem("style")
        })
    }
}(jQuery),
function (h) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], h) : "undefined" != typeof exports ? module.exports = h(require("jquery")) : h(jQuery)
}(function (h) {
    "use strict";
    var t, u = window;
    (t = 0, u = function (o, a) {
        var i, r = this;
        r.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: h(o),
            appendDots: h(o),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (c, y) {
                return h('<button type="button" />').text(y + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
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
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, h.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = h(o), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, i = h(o).data("slick") || {}, r.options = h.extend({}, r.defaults, a, i), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = h.proxy(r.autoPlay, r), r.autoPlayClear = h.proxy(r.autoPlayClear, r), r.autoPlayIterator = h.proxy(r.autoPlayIterator, r), r.changeSlide = h.proxy(r.changeSlide, r), r.clickHandler = h.proxy(r.clickHandler, r), r.selectHandler = h.proxy(r.selectHandler, r), r.setPosition = h.proxy(r.setPosition, r), r.swipeHandler = h.proxy(r.swipeHandler, r), r.dragHandler = h.proxy(r.dragHandler, r), r.keyHandler = h.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, u.prototype.addSlide = u.prototype.slickAdd = function (t, o, a) {
        var i = this;
        if ("boolean" == typeof o) a = o, o = null;
        else if (o < 0 || o >= i.slideCount) return !1;
        i.unload(), "number" == typeof o ? 0 === o && 0 === i.$slides.length ? h(t).appendTo(i.$slideTrack) : a ? h(t).insertBefore(i.$slides.eq(o)) : h(t).insertAfter(i.$slides.eq(o)) : !0 === a ? h(t).prependTo(i.$slideTrack) : h(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (r, c) {
            h(c).attr("data-slick-index", r)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, u.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var o = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: o
            }, t.options.speed)
        }
    }, u.prototype.animateSlide = function (t, o) {
        var a = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? i.$slideTrack.animate(!1 === i.options.vertical ? {
            left: t
        } : {
            top: t
        }, i.options.speed, i.options.easing, o) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), h({
            animStart: i.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function (r) {
                r = Math.ceil(r), !1 === i.options.vertical ? (a[i.animType] = "translate(" + r + "px, 0px)", i.$slideTrack.css(a)) : (a[i.animType] = "translate(0px," + r + "px)", i.$slideTrack.css(a))
            },
            complete: function () {
                o && o.call()
            }
        })) : (i.applyTransition(), t = Math.ceil(t), a[i.animType] = !1 === i.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(a), o && setTimeout(function () {
            i.disableTransition(), o.call()
        }, i.options.speed))
    }, u.prototype.getNavTarget = function () {
        var o = this.options.asNavFor;
        return o && null !== o && (o = h(o).not(this.$slider)), o
    }, u.prototype.asNavFor = function (t) {
        var o = this.getNavTarget();
        null !== o && "object" == typeof o && o.each(function () {
            var a = h(this).slick("getSlick");
            a.unslicked || a.slideHandler(t, !0)
        })
    }, u.prototype.applyTransition = function (t) {
        var o = this,
            a = {};
        a[o.transitionType] = !1 === o.options.fade ? o.transformType + " " + o.options.speed + "ms " + o.options.cssEase : "opacity " + o.options.speed + "ms " + o.options.cssEase, !1 === o.options.fade ? o.$slideTrack.css(a) : o.$slides.eq(t).css(a)
    }, u.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, u.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, u.prototype.autoPlayIterator = function () {
        var t = this,
            o = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (o = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(o))
    }, u.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = h(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = h(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, u.prototype.buildDots = function () {
        var t, o, a = this;
        if (!0 === a.options.dots) {
            for (a.$slider.addClass("slick-dotted"), o = h("<ul />").addClass(a.options.dotsClass), t = 0; t <= a.getDotCount(); t += 1) o.append(h("<li />").append(a.options.customPaging.call(this, a, t)));
            a.$dots = o.appendTo(a.options.appendDots), a.$dots.find("li").first().addClass("slick-active")
        }
    }, u.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (o, a) {
            h(a).attr("data-slick-index", o).data("originalStyling", h(a).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? h('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), h("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, u.prototype.buildRows = function () {
        var t, o, a, i, r, c, y, C = this;
        if (i = document.createDocumentFragment(), c = C.$slider.children(), C.options.rows > 1) {
            for (y = C.options.slidesPerRow * C.options.rows, r = Math.ceil(c.length / y), t = 0; t < r; t++) {
                var P = document.createElement("div");
                for (o = 0; o < C.options.rows; o++) {
                    var D = document.createElement("div");
                    for (a = 0; a < C.options.slidesPerRow; a++) {
                        var tt = t * y + (o * C.options.slidesPerRow + a);
                        c.get(tt) && D.appendChild(c.get(tt))
                    }
                    P.appendChild(D)
                }
                i.appendChild(P)
            }
            C.$slider.empty().append(i), C.$slider.children().children().children().css({
                width: 100 / C.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, u.prototype.checkResponsive = function (t, o) {
        var a, i, r, c = this,
            y = !1,
            C = c.$slider.width(),
            P = window.innerWidth || h(window).width();
        if ("window" === c.respondTo ? r = P : "slider" === c.respondTo ? r = C : "min" === c.respondTo && (r = Math.min(P, C)), c.options.responsive && c.options.responsive.length && null !== c.options.responsive) {
            for (a in i = null, c.breakpoints) c.breakpoints.hasOwnProperty(a) && (!1 === c.originalSettings.mobileFirst ? r < c.breakpoints[a] && (i = c.breakpoints[a]) : r > c.breakpoints[a] && (i = c.breakpoints[a]));
            null !== i ? null !== c.activeBreakpoint ? (i !== c.activeBreakpoint || o) && (c.activeBreakpoint = i, "unslick" === c.breakpointSettings[i] ? c.unslick(i) : (c.options = h.extend({}, c.originalSettings, c.breakpointSettings[i]), !0 === t && (c.currentSlide = c.options.initialSlide), c.refresh(t)), y = i) : (c.activeBreakpoint = i, "unslick" === c.breakpointSettings[i] ? c.unslick(i) : (c.options = h.extend({}, c.originalSettings, c.breakpointSettings[i]), !0 === t && (c.currentSlide = c.options.initialSlide), c.refresh(t)), y = i) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, c.options = c.originalSettings, !0 === t && (c.currentSlide = c.options.initialSlide), c.refresh(t), y = i), t || !1 === y || c.$slider.trigger("breakpoint", [c, y])
        }
    }, u.prototype.changeSlide = function (t, o) {
        var a, i, c = this,
            y = h(t.currentTarget);
        switch (y.is("a") && t.preventDefault(), y.is("li") || (y = y.closest("li")), a = c.slideCount % c.options.slidesToScroll != 0 ? 0 : (c.slideCount - c.currentSlide) % c.options.slidesToScroll, t.data.message) {
            case "previous":
                i = 0 === a ? c.options.slidesToScroll : c.options.slidesToShow - a, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide - i, !1, o);
                break;
            case "next":
                i = 0 === a ? c.options.slidesToScroll : a, c.slideCount > c.options.slidesToShow && c.slideHandler(c.currentSlide + i, !1, o);
                break;
            case "index":
                var C = 0 === t.data.index ? 0 : t.data.index || y.index() * c.options.slidesToScroll;
                c.slideHandler(c.checkNavigable(C), !1, o), y.children().trigger("focus");
                break;
            default:
                return
        }
    }, u.prototype.checkNavigable = function (t) {
        var o, a;
        if (a = 0, t > (o = this.getNavigableIndexes())[o.length - 1]) t = o[o.length - 1];
        else
            for (var i in o) {
                if (t < o[i]) {
                    t = a;
                    break
                }
                a = o[i]
            }
        return t
    }, u.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (h("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", h.proxy(t.interrupt, t, !0)).off("mouseleave.slick", h.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), h(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().off("click.slick", t.selectHandler), h(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), h(window).off("resize.slick.slick-" + t.instanceUid, t.resize), h("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), h(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, u.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", h.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", h.proxy(t.interrupt, t, !1))
    }, u.prototype.cleanUpRows = function () {
        var t, o = this;
        o.options.rows > 1 && ((t = o.$slides.children().children()).removeAttr("style"), o.$slider.empty().append(t))
    }, u.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, u.prototype.destroy = function (t) {
        var o = this;
        o.autoPlayClear(), o.touchObject = {}, o.cleanUpEvents(), h(".slick-cloned", o.$slider).detach(), o.$dots && o.$dots.remove(), o.$prevArrow && o.$prevArrow.length && (o.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.prevArrow) && o.$prevArrow.remove()), o.$nextArrow && o.$nextArrow.length && (o.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.nextArrow) && o.$nextArrow.remove()), o.$slides && (o.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            h(this).attr("style", h(this).data("originalStyling"))
        }), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.detach(), o.$list.detach(), o.$slider.append(o.$slides)), o.cleanUpRows(), o.$slider.removeClass("slick-slider"), o.$slider.removeClass("slick-initialized"), o.$slider.removeClass("slick-dotted"), o.unslicked = !0, t || o.$slider.trigger("destroy", [o])
    }, u.prototype.disableTransition = function (t) {
        var o = this,
            a = {};
        a[o.transitionType] = "", !1 === o.options.fade ? o.$slideTrack.css(a) : o.$slides.eq(t).css(a)
    }, u.prototype.fadeSlide = function (t, o) {
        var a = this;
        !1 === a.cssTransitions ? (a.$slides.eq(t).css({
            zIndex: a.options.zIndex
        }), a.$slides.eq(t).animate({
            opacity: 1
        }, a.options.speed, a.options.easing, o)) : (a.applyTransition(t), a.$slides.eq(t).css({
            opacity: 1,
            zIndex: a.options.zIndex
        }), o && setTimeout(function () {
            a.disableTransition(t), o.call()
        }, a.options.speed))
    }, u.prototype.fadeSlideOut = function (t) {
        var o = this;
        !1 === o.cssTransitions ? o.$slides.eq(t).animate({
            opacity: 0,
            zIndex: o.options.zIndex - 2
        }, o.options.speed, o.options.easing) : (o.applyTransition(t), o.$slides.eq(t).css({
            opacity: 0,
            zIndex: o.options.zIndex - 2
        }))
    }, u.prototype.filterSlides = u.prototype.slickFilter = function (t) {
        var o = this;
        null !== t && (o.$slidesCache = o.$slides, o.unload(), o.$slideTrack.children(this.options.slide).detach(), o.$slidesCache.filter(t).appendTo(o.$slideTrack), o.reinit())
    }, u.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (o) {
            o.stopImmediatePropagation();
            var a = h(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = a.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, u.prototype.getCurrent = u.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, u.prototype.getDotCount = function () {
        var t = this,
            o = 0,
            a = 0,
            i = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++i;
            else
                for (; o < t.slideCount;) ++i, o = a + t.options.slidesToScroll, a += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) i = t.slideCount;
        else if (t.options.asNavFor)
            for (; o < t.slideCount;) ++i, o = a + t.options.slidesToScroll, a += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1
    }, u.prototype.getLeft = function (t) {
        var o, a, i, r, c = this,
            y = 0;
        return c.slideOffset = 0, a = c.$slides.first().outerHeight(!0), !0 === c.options.infinite ? (c.slideCount > c.options.slidesToShow && (c.slideOffset = c.slideWidth * c.options.slidesToShow * -1, r = -1, !0 === c.options.vertical && !0 === c.options.centerMode && (2 === c.options.slidesToShow ? r = -1.5 : 1 === c.options.slidesToShow && (r = -2)), y = a * c.options.slidesToShow * r), c.slideCount % c.options.slidesToScroll != 0 && t + c.options.slidesToScroll > c.slideCount && c.slideCount > c.options.slidesToShow && (t > c.slideCount ? (c.slideOffset = (c.options.slidesToShow - (t - c.slideCount)) * c.slideWidth * -1, y = (c.options.slidesToShow - (t - c.slideCount)) * a * -1) : (c.slideOffset = c.slideCount % c.options.slidesToScroll * c.slideWidth * -1, y = c.slideCount % c.options.slidesToScroll * a * -1))) : t + c.options.slidesToShow > c.slideCount && (c.slideOffset = (t + c.options.slidesToShow - c.slideCount) * c.slideWidth, y = (t + c.options.slidesToShow - c.slideCount) * a), c.slideCount <= c.options.slidesToShow && (c.slideOffset = 0, y = 0), !0 === c.options.centerMode && c.slideCount <= c.options.slidesToShow ? c.slideOffset = c.slideWidth * Math.floor(c.options.slidesToShow) / 2 - c.slideWidth * c.slideCount / 2 : !0 === c.options.centerMode && !0 === c.options.infinite ? c.slideOffset += c.slideWidth * Math.floor(c.options.slidesToShow / 2) - c.slideWidth : !0 === c.options.centerMode && (c.slideOffset = 0, c.slideOffset += c.slideWidth * Math.floor(c.options.slidesToShow / 2)), o = !1 === c.options.vertical ? t * c.slideWidth * -1 + c.slideOffset : t * a * -1 + y, !0 === c.options.variableWidth && (i = c.slideCount <= c.options.slidesToShow || !1 === c.options.infinite ? c.$slideTrack.children(".slick-slide").eq(t) : c.$slideTrack.children(".slick-slide").eq(t + c.options.slidesToShow), o = !0 === c.options.rtl ? i[0] ? -1 * (c.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === c.options.centerMode && (i = c.slideCount <= c.options.slidesToShow || !1 === c.options.infinite ? c.$slideTrack.children(".slick-slide").eq(t) : c.$slideTrack.children(".slick-slide").eq(t + c.options.slidesToShow + 1), o = !0 === c.options.rtl ? i[0] ? -1 * (c.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, o += (c.$list.width() - i.outerWidth()) / 2)), o
    }, u.prototype.getOption = u.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, u.prototype.getNavigableIndexes = function () {
        var t, o = this,
            a = 0,
            i = 0,
            r = [];
        for (!1 === o.options.infinite ? t = o.slideCount : (a = -1 * o.options.slidesToScroll, i = -1 * o.options.slidesToScroll, t = 2 * o.slideCount); a < t;) r.push(a), a = i + o.options.slidesToScroll, i += o.options.slidesToScroll <= o.options.slidesToShow ? o.options.slidesToScroll : o.options.slidesToShow;
        return r
    }, u.prototype.getSlick = function () {
        return this
    }, u.prototype.getSlideCount = function () {
        var t, o, a = this;
        return o = !0 === a.options.centerMode ? a.slideWidth * Math.floor(a.options.slidesToShow / 2) : 0, !0 === a.options.swipeToSlide ? (a.$slideTrack.find(".slick-slide").each(function (i, r) {
            if (r.offsetLeft - o + h(r).outerWidth() / 2 > -1 * a.swipeLeft) return t = r, !1
        }), Math.abs(h(t).attr("data-slick-index") - a.currentSlide) || 1) : a.options.slidesToScroll
    }, u.prototype.goTo = u.prototype.slickGoTo = function (t, o) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, o)
    }, u.prototype.init = function (t) {
        var o = this;
        h(o.$slider).hasClass("slick-initialized") || (h(o.$slider).addClass("slick-initialized"), o.buildRows(), o.buildOut(), o.setProps(), o.startLoad(), o.loadSlider(), o.initializeEvents(), o.updateArrows(), o.updateDots(), o.checkResponsive(!0), o.focusHandler()), t && o.$slider.trigger("init", [o]), !0 === o.options.accessibility && o.initADA(), o.options.autoplay && (o.paused = !1, o.autoPlay())
    }, u.prototype.initADA = function () {
        var t = this,
            o = Math.ceil(t.slideCount / t.options.slidesToShow),
            a = t.getNavigableIndexes().filter(function (c) {
                return c >= 0 && c < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (c) {
            var y = a.indexOf(c);
            h(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + c,
                tabindex: -1
            }), -1 !== y && h(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + y
            })
        }), t.$dots.attr("role", "tablist").find("li").each(function (c) {
            var y = a[c];
            h(this).attr({
                role: "presentation"
            }), h(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + c,
                "aria-controls": "slick-slide" + t.instanceUid + y,
                "aria-label": c + 1 + " of " + o,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var i = t.currentSlide, r = i + t.options.slidesToShow; i < r; i++) t.$slides.eq(i).attr("tabindex", 0);
        t.activateADA()
    }, u.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, u.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (h("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && h("li", t.$dots).on("mouseenter.slick", h.proxy(t.interrupt, t, !0)).on("mouseleave.slick", h.proxy(t.interrupt, t, !1))
    }, u.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", h.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", h.proxy(t.interrupt, t, !1)))
    }, u.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), h(document).on(t.visibilityChange, h.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler), h(window).on("orientationchange.slick.slick-" + t.instanceUid, h.proxy(t.orientationChange, t)), h(window).on("resize.slick.slick-" + t.instanceUid, h.proxy(t.resize, t)), h("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), h(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), h(t.setPosition)
    }, u.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, u.prototype.keyHandler = function (t) {
        var o = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === o.options.accessibility ? o.changeSlide({
            data: {
                message: !0 === o.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === o.options.accessibility && o.changeSlide({
            data: {
                message: !0 === o.options.rtl ? "previous" : "next"
            }
        }))
    }, u.prototype.lazyLoad = function () {
        function t(D) {
            h("img[data-lazy]", D).each(function () {
                var tt = h(this),
                    it = h(this).attr("data-lazy"),
                    lt = h(this).attr("data-srcset"),
                    gt = h(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    ct = document.createElement("img");
                ct.onload = function () {
                    tt.animate({
                        opacity: 0
                    }, 100, function () {
                        lt && (tt.attr("srcset", lt), gt && tt.attr("sizes", gt)), tt.attr("src", it).animate({
                            opacity: 1
                        }, 200, function () {
                            tt.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, tt, it])
                    })
                }, ct.onerror = function () {
                    tt.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, tt, it])
                }, ct.src = it
            })
        }
        var o, a, i, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (a = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (a = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (a = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(a + r.options.slidesToShow), !0 === r.options.fade && (a > 0 && a--, i <= r.slideCount && i++)), o = r.$slider.find(".slick-slide").slice(a, i), "anticipated" === r.options.lazyLoad)
            for (var c = a - 1, y = i, C = r.$slider.find(".slick-slide"), P = 0; P < r.options.slidesToScroll; P++) c < 0 && (c = r.slideCount - 1), o = (o = o.add(C.eq(c))).add(C.eq(y)), c--, y++;
        t(o), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, u.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, u.prototype.next = u.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, u.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, u.prototype.pause = u.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, u.prototype.play = u.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, u.prototype.postSlide = function (t) {
        var o = this;
        o.unslicked || (o.$slider.trigger("afterChange", [o, t]), o.animating = !1, o.slideCount > o.options.slidesToShow && o.setPosition(), o.swipeLeft = null, o.options.autoplay && o.autoPlay(), !0 === o.options.accessibility && (o.initADA(), o.options.focusOnChange && h(o.$slides.get(o.currentSlide)).attr("tabindex", 0).focus()))
    }, u.prototype.prev = u.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, u.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, u.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var o, a, i, r, c, y = this,
            C = h("img[data-lazy]", y.$slider);
        C.length ? (o = C.first(), a = o.attr("data-lazy"), i = o.attr("data-srcset"), r = o.attr("data-sizes") || y.$slider.attr("data-sizes"), (c = document.createElement("img")).onload = function () {
            i && (o.attr("srcset", i), r && o.attr("sizes", r)), o.attr("src", a).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === y.options.adaptiveHeight && y.setPosition(), y.$slider.trigger("lazyLoaded", [y, o, a]), y.progressiveLazyLoad()
        }, c.onerror = function () {
            t < 3 ? setTimeout(function () {
                y.progressiveLazyLoad(t + 1)
            }, 500) : (o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), y.$slider.trigger("lazyLoadError", [y, o, a]), y.progressiveLazyLoad())
        }, c.src = a) : y.$slider.trigger("allImagesLoaded", [y])
    }, u.prototype.refresh = function (t) {
        var o, a, i = this;
        a = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > a && (i.currentSlide = a), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), o = i.currentSlide, i.destroy(!0), h.extend(i, i.initials, {
            currentSlide: o
        }), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: o
            }
        }, !1)
    }, u.prototype.registerBreakpoints = function () {
        var t, o, a, i = this,
            r = i.options.responsive || null;
        if ("array" === h.type(r) && r.length) {
            for (t in i.respondTo = i.options.respondTo || "window", r)
                if (a = i.breakpoints.length - 1, r.hasOwnProperty(t)) {
                    for (o = r[t].breakpoint; a >= 0;) i.breakpoints[a] && i.breakpoints[a] === o && i.breakpoints.splice(a, 1), a--;
                    i.breakpoints.push(o), i.breakpointSettings[o] = r[t].settings
                } i.breakpoints.sort(function (c, y) {
                return i.options.mobileFirst ? c - y : y - c
            })
        }
    }, u.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, u.prototype.resize = function () {
        var t = this;
        h(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = h(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, u.prototype.removeSlide = u.prototype.slickRemove = function (t, o, a) {
        var i = this;
        if (t = "boolean" == typeof t ? !0 === (o = t) ? 0 : i.slideCount - 1 : !0 === o ? --t : t, i.slideCount < 1 || t < 0 || t > i.slideCount - 1) return !1;
        i.unload(), !0 === a ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, u.prototype.setCSS = function (t) {
        var o, a, i = this,
            r = {};
        !0 === i.options.rtl && (t = -t), o = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", a = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + o + ", " + a + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + o + ", " + a + ", 0px)", i.$slideTrack.css(r)))
    }, u.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var o = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - o)
    }, u.prototype.setFade = function () {
        var t, o = this;
        o.$slides.each(function (a, i) {
            t = o.slideWidth * a * -1, !0 === o.options.rtl ? h(i).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : h(i).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }), o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }, u.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var o = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", o)
        }
    }, u.prototype.setOption = u.prototype.slickSetOption = function () {
        var t, o, a, i, r, c = this,
            y = !1;
        if ("object" === h.type(arguments[0]) ? (a = arguments[0], y = arguments[1], r = "multiple") : "string" === h.type(arguments[0]) && (a = arguments[0], i = arguments[1], y = arguments[2], "responsive" === arguments[0] && "array" === h.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) c.options[a] = i;
        else if ("multiple" === r) h.each(a, function (C, P) {
            c.options[C] = P
        });
        else if ("responsive" === r)
            for (o in i)
                if ("array" !== h.type(c.options.responsive)) c.options.responsive = [i[o]];
                else {
                    for (t = c.options.responsive.length - 1; t >= 0;) c.options.responsive[t].breakpoint === i[o].breakpoint && c.options.responsive.splice(t, 1), t--;
                    c.options.responsive.push(i[o])
                } y && (c.unload(), c.reinit())
    }, u.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, u.prototype.setProps = function () {
        var t = this,
            o = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === o.WebkitTransition && void 0 === o.MozTransition && void 0 === o.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== o.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === o.perspectiveProperty && void 0 === o.webkitPerspective && (t.animType = !1)), void 0 !== o.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === o.perspectiveProperty && void 0 === o.MozPerspective && (t.animType = !1)), void 0 !== o.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === o.perspectiveProperty && void 0 === o.webkitPerspective && (t.animType = !1)), void 0 !== o.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === o.msTransform && (t.animType = !1)), void 0 !== o.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, u.prototype.setSlideClasses = function (t) {
        var o, a, i, r, c = this;
        if (a = c.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), c.$slides.eq(t).addClass("slick-current"), !0 === c.options.centerMode) {
            var y = c.options.slidesToShow % 2 == 0 ? 1 : 0;
            o = Math.floor(c.options.slidesToShow / 2), !0 === c.options.infinite && (t >= o && t <= c.slideCount - 1 - o ? c.$slides.slice(t - o + y, t + o + 1).addClass("slick-active").attr("aria-hidden", "false") : a.slice((i = c.options.slidesToShow + t) - o + 1 + y, i + o + 2).addClass("slick-active").attr("aria-hidden", "false"), 0 === t ? a.eq(a.length - 1 - c.options.slidesToShow).addClass("slick-center") : t === c.slideCount - 1 && a.eq(c.options.slidesToShow).addClass("slick-center")), c.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= c.slideCount - c.options.slidesToShow ? c.$slides.slice(t, t + c.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : a.length <= c.options.slidesToShow ? a.addClass("slick-active").attr("aria-hidden", "false") : (r = c.slideCount % c.options.slidesToShow, i = !0 === c.options.infinite ? c.options.slidesToShow + t : t, c.options.slidesToShow == c.options.slidesToScroll && c.slideCount - t < c.options.slidesToShow ? a.slice(i - (c.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : a.slice(i, i + c.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== c.options.lazyLoad && "anticipated" !== c.options.lazyLoad || c.lazyLoad()
    }, u.prototype.setupInfinite = function () {
        var t, o, a, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (o = null, i.slideCount > i.options.slidesToShow)) {
            for (a = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - a; t -= 1) h(i.$slides[o = t - 1]).clone(!0).attr("id", "").attr("data-slick-index", o - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < a + i.slideCount; t += 1) h(i.$slides[o = t]).clone(!0).attr("id", "").attr("data-slick-index", o + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                h(this).attr("id", "")
            })
        }
    }, u.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, u.prototype.selectHandler = function (t) {
        var o = this,
            a = h(t.target).is(".slick-slide") ? h(t.target) : h(t.target).parents(".slick-slide"),
            i = parseInt(a.attr("data-slick-index"));
        i || (i = 0), o.slideCount <= o.options.slidesToShow ? o.slideHandler(i, !1, !0) : o.slideHandler(i)
    }, u.prototype.slideHandler = function (t, o, a) {
        var i, r, c, y, C, P = null,
            D = this;
        if (o = o || !1, !(!0 === D.animating && !0 === D.options.waitForAnimate || !0 === D.options.fade && D.currentSlide === t))
            if (!1 === o && D.asNavFor(t), P = D.getLeft(i = t), y = D.getLeft(D.currentSlide), D.currentLeft = null === D.swipeLeft ? y : D.swipeLeft, !1 === D.options.infinite && !1 === D.options.centerMode && (t < 0 || t > D.getDotCount() * D.options.slidesToScroll)) !1 === D.options.fade && (i = D.currentSlide, !0 !== a ? D.animateSlide(y, function () {
                D.postSlide(i)
            }) : D.postSlide(i));
            else if (!1 === D.options.infinite && !0 === D.options.centerMode && (t < 0 || t > D.slideCount - D.options.slidesToScroll)) !1 === D.options.fade && (i = D.currentSlide, !0 !== a ? D.animateSlide(y, function () {
            D.postSlide(i)
        }) : D.postSlide(i));
        else {
            if (D.options.autoplay && clearInterval(D.autoPlayTimer), r = i < 0 ? D.slideCount % D.options.slidesToScroll != 0 ? D.slideCount - D.slideCount % D.options.slidesToScroll : D.slideCount + i : i >= D.slideCount ? D.slideCount % D.options.slidesToScroll != 0 ? 0 : i - D.slideCount : i, D.animating = !0, D.$slider.trigger("beforeChange", [D, D.currentSlide, r]), c = D.currentSlide, D.currentSlide = r, D.setSlideClasses(D.currentSlide), D.options.asNavFor && (C = (C = D.getNavTarget()).slick("getSlick")).slideCount <= C.options.slidesToShow && C.setSlideClasses(D.currentSlide), D.updateDots(), D.updateArrows(), !0 === D.options.fade) return !0 !== a ? (D.fadeSlideOut(c), D.fadeSlide(r, function () {
                D.postSlide(r)
            })) : D.postSlide(r), void D.animateHeight();
            !0 !== a ? D.animateSlide(P, function () {
                D.postSlide(r)
            }) : D.postSlide(r)
        }
    }, u.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, u.prototype.swipeDirection = function () {
        var a, i, r = this;
        return a = Math.atan2(r.touchObject.startY - r.touchObject.curY, r.touchObject.startX - r.touchObject.curX), (i = Math.round(180 * a / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, u.prototype.swipeEnd = function (t) {
        var o, a, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (a = i.swipeDirection()) {
                case "left":
                case "down":
                    o = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    o = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != a && (i.slideHandler(o), i.touchObject = {}, i.$slider.trigger("swipe", [i, a]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, u.prototype.swipeHandler = function (t) {
        var o = this;
        if (!(!1 === o.options.swipe || "ontouchend" in document && !1 === o.options.swipe || !1 === o.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (o.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, o.touchObject.minSwipe = o.listWidth / o.options.touchThreshold, !0 === o.options.verticalSwiping && (o.touchObject.minSwipe = o.listHeight / o.options.touchThreshold), t.data.action) {
            case "start":
                o.swipeStart(t);
                break;
            case "move":
                o.swipeMove(t);
                break;
            case "end":
                o.swipeEnd(t)
        }
    }, u.prototype.swipeMove = function (t) {
        var o, a, i, r, c, y, C = this;
        return c = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!C.dragging || C.scrolling || c && 1 !== c.length) && (o = C.getLeft(C.currentSlide), C.touchObject.curX = void 0 !== c ? c[0].pageX : t.clientX, C.touchObject.curY = void 0 !== c ? c[0].pageY : t.clientY, C.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(C.touchObject.curX - C.touchObject.startX, 2))), y = Math.round(Math.sqrt(Math.pow(C.touchObject.curY - C.touchObject.startY, 2))), !C.options.verticalSwiping && !C.swiping && y > 4 ? (C.scrolling = !0, !1) : (!0 === C.options.verticalSwiping && (C.touchObject.swipeLength = y), a = C.swipeDirection(), void 0 !== t.originalEvent && C.touchObject.swipeLength > 4 && (C.swiping = !0, t.preventDefault()), r = (!1 === C.options.rtl ? 1 : -1) * (C.touchObject.curX > C.touchObject.startX ? 1 : -1), !0 === C.options.verticalSwiping && (r = C.touchObject.curY > C.touchObject.startY ? 1 : -1), i = C.touchObject.swipeLength, C.touchObject.edgeHit = !1, !1 === C.options.infinite && (0 === C.currentSlide && "right" === a || C.currentSlide >= C.getDotCount() && "left" === a) && (i = C.touchObject.swipeLength * C.options.edgeFriction, C.touchObject.edgeHit = !0), C.swipeLeft = !1 === C.options.vertical ? o + i * r : o + i * (C.$list.height() / C.listWidth) * r, !0 === C.options.verticalSwiping && (C.swipeLeft = o + i * r), !0 !== C.options.fade && !1 !== C.options.touchMove && (!0 === C.animating ? (C.swipeLeft = null, !1) : void C.setCSS(C.swipeLeft))))
    }, u.prototype.swipeStart = function (t) {
        var o, a = this;
        if (a.interrupted = !0, 1 !== a.touchObject.fingerCount || a.slideCount <= a.options.slidesToShow) return a.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (o = t.originalEvent.touches[0]), a.touchObject.startX = a.touchObject.curX = void 0 !== o ? o.pageX : t.clientX, a.touchObject.startY = a.touchObject.curY = void 0 !== o ? o.pageY : t.clientY, a.dragging = !0
    }, u.prototype.unfilterSlides = u.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, u.prototype.unload = function () {
        var t = this;
        h(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, u.prototype.unslick = function (t) {
        var o = this;
        o.$slider.trigger("unslick", [o, t]), o.destroy()
    }, u.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, u.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, u.prototype.visibility = function () {
        var t = this;
        t.options.autoplay && (t.interrupted = !!document[t.hidden])
    }, h.fn.slick = function () {
        var t, o, a = this,
            i = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            c = a.length;
        for (t = 0; t < c; t++)
            if ("object" == typeof i || void 0 === i ? a[t].slick = new u(a[t], i) : o = a[t].slick[i].apply(a[t].slick, r), void 0 !== o) return o;
        return a
    }
}), jQuery(function (h) {
    "use strict";
    if (h(window).on("scroll", function () {
            h(this).scrollTop() > 50 ? h(".main-nav").addClass("menu-shrink") : h(".main-nav").removeClass("menu-shrink")
        }), jQuery(".mean-menu").meanmenu({
            meanScreenWidth: "991"
        }), h(".banner-slider").owlCarousel({
            items: 1,
            loop: !0,
            margin: 0,
            nav: !0,
            dots: !1,
            smartSpeed: 1e3,
            autoplay: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !0,
            navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"]
        }), h(".services-slider").owlCarousel({
            center: !0,
            loop: !0,
            margin: 15,
            nav: !0,
            dots: !1,
            smartSpeed: 1e3,
            autoplay: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !0,
            navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1e3: {
                    items: 3
                }
            }
        }), h(document).ready(function () {
            h(".minus").on("click", function () {
                var t = h(this).parent().find("input"),
                    o = parseInt(t.val()) - 1;
                return t.val(o = o < 1 ? 1 : o), t.change(), !1
            }), h(".plus").on("click", function () {
                var t = h(this).parent().find("input");
                return t.val(parseInt(t.val()) + 1), t.change(), !1
            })
        }), h(".popup-youtube").magnificPopup({
            disableOn: 320,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), h("#Container").mixItUp(), h(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !0,
            asNavFor: ".slider-nav",
            autoplay: !0,
            centerPadding: "0px",
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bx bx-left-arrow-alt' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bx bx-right-arrow-alt' aria-hidden='true'></i></button>"
        }), h(".slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: !1,
            centerMode: !0,
            focusOnSelect: !0,
            arrows: !1,
            centerPadding: "0px"
        }), h(".modal a").not(".dropdown-toggle").on("click", function () {
            h(".modal").modal("hide")
        }), h(".accordion > li:eq(0) a").addClass("active").next().slideDown(), h(".accordion a").on("click", function (t) {
            var o = h(this).closest("li").find("p");
            h(this).closest(".accordion").find("p").not(o).slideUp(), h(this).hasClass("active") ? h(this).removeClass("active") : (h(this).closest(".accordion").find("a.active").removeClass("active"), h(this).addClass("active")), o.stop(!1, !0).slideToggle(), t.preventDefault()
        }), null !== document.getElementById("days")) {
        const t = 1e3,
            o = 60 * t,
            a = 60 * o,
            i = 24 * a;
        let r = new Date("July 30, 2021 00:00:00").getTime();
        setInterval(function () {
            let c = (new Date).getTime(),
                y = r - c;
            document.getElementById("days").innerText = Math.floor(y / i), document.getElementById("hours").innerText = Math.floor(y % i / a), document.getElementById("minutes").innerText = Math.floor(y % a / o), document.getElementById("seconds").innerText = Math.floor(y % o / t)
        }, t)
    }
    h("body").append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>'), h(window).scroll(function () {
        0 != h(this).scrollTop() ? h("#toTop").fadeIn() : h("#toTop").fadeOut()
    }), h("#toTop").on("click", function () {
        return h("html, body").animate({
            scrollTop: 0
        }, 900), !1
    })
}(jQuery));