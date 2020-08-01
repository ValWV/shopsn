! function(t, e) {
 "use strict";
 "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
  if (!t.document) throw new Error("jQuery requires a window with a document");
  return e(t)
 } : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
 "use strict";
 var n = [],
  i = t.document,
  r = Object.getPrototypeOf,
  a = n.slice,
  o = n.concat,
  s = n.push,
  l = n.indexOf,
  c = {},
  u = c.toString,
  h = c.hasOwnProperty,
  p = h.toString,
  d = p.call(Object),
  f = {},
  m = function(t) {
   return "function" == typeof t && "number" != typeof t.nodeType
  },
  g = function(t) {
   return null != t && t === t.window
  },
  v = {
   type: !0,
   src: !0,
   nonce: !0,
   noModule: !0
  };

 function y(t, e, n) {
  var r, a, o = (n = n || i).createElement("script");
  if (o.text = t, e)
   for (r in v)(a = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, a);
  n.head.appendChild(o).parentNode.removeChild(o)
 }

 function x(t) {
  return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
 }
 var _ = "3.4.1",
  b = function(t, e) {
   return new b.fn.init(t, e)
  },
  w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

 function M(t) {
  var e = !!t && "length" in t && t.length,
   n = x(t);
  return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
 }
 b.fn = b.prototype = {
  jquery: _,
  constructor: b,
  length: 0,
  toArray: function() {
   return a.call(this)
  },
  get: function(t) {
   return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
  },
  pushStack: function(t) {
   var e = b.merge(this.constructor(), t);
   return e.prevObject = this, e
  },
  each: function(t) {
   return b.each(this, t)
  },
  map: function(t) {
   return this.pushStack(b.map(this, (function(e, n) {
    return t.call(e, n, e)
   })))
  },
  slice: function() {
   return this.pushStack(a.apply(this, arguments))
  },
  first: function() {
   return this.eq(0)
  },
  last: function() {
   return this.eq(-1)
  },
  eq: function(t) {
   var e = this.length,
    n = +t + (t < 0 ? e : 0);
   return this.pushStack(0 <= n && n < e ? [this[n]] : [])
  },
  end: function() {
   return this.prevObject || this.constructor()
  },
  push: s,
  sort: n.sort,
  splice: n.splice
 }, b.extend = b.fn.extend = function() {
  var t, e, n, i, r, a, o = arguments[0] || {},
   s = 1,
   l = arguments.length,
   c = !1;
  for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || m(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
   if (null != (t = arguments[s]))
    for (e in t) i = t[e], "__proto__" !== e && o !== i && (c && i && (b.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[e], a = r && !Array.isArray(n) ? [] : r || b.isPlainObject(n) ? n : {}, r = !1, o[e] = b.extend(c, a, i)) : void 0 !== i && (o[e] = i));
  return o
 }, b.extend({
  expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
  isReady: !0,
  error: function(t) {
   throw new Error(t)
  },
  noop: function() {},
  isPlainObject: function(t) {
   var e, n;
   return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && ("function" != typeof(n = h.call(e, "constructor") && e.constructor) || p.call(n) !== d))
  },
  isEmptyObject: function(t) {
   var e;
   for (e in t) return !1;
   return !0
  },
  globalEval: function(t, e) {
   y(t, {
    nonce: e && e.nonce
   })
  },
  each: function(t, e) {
   var n, i = 0;
   if (M(t))
    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
   else
    for (i in t)
     if (!1 === e.call(t[i], i, t[i])) break;
   return t
  },
  trim: function(t) {
   return null == t ? "" : (t + "").replace(w, "")
  },
  makeArray: function(t, e) {
   var n = e || [];
   return null != t && (M(Object(t)) ? b.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
  },
  inArray: function(t, e, n) {
   return null == e ? -1 : l.call(e, t, n)
  },
  merge: function(t, e) {
   for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
   return t.length = r, t
  },
  grep: function(t, e, n) {
   for (var i = [], r = 0, a = t.length, o = !n; r < a; r++) !e(t[r], r) !== o && i.push(t[r]);
   return i
  },
  map: function(t, e, n) {
   var i, r, a = 0,
    s = [];
   if (M(t))
    for (i = t.length; a < i; a++) null != (r = e(t[a], a, n)) && s.push(r);
   else
    for (a in t) null != (r = e(t[a], a, n)) && s.push(r);
   return o.apply([], s)
  },
  guid: 1,
  support: f
 }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
  c["[object " + e + "]"] = e.toLowerCase()
 }));
 var T = function(t) {
  var e, n, i, r, a, o, s, l, c, u, h, p, d, f, m, g, v, y, x, _ = "sizzle" + 1 * new Date,
   b = t.document,
   w = 0,
   M = 0,
   T = lt(),
   S = lt(),
   E = lt(),
   A = lt(),
   C = function(t, e) {
    return t === e && (h = !0), 0
   },
   P = {}.hasOwnProperty,
   L = [],
   R = L.pop,
   O = L.push,
   I = L.push,
   D = L.slice,
   N = function(t, e) {
    for (var n = 0, i = t.length; n < i; n++)
     if (t[n] === e) return n;
    return -1
   },
   z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
   B = "[\\x20\\t\\r\\n\\f]",
   k = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
   F = "\\[" + B + "*(" + k + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + k + "))|)" + B + "*\\]",
   U = ":(" + k + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
   H = new RegExp(B + "+", "g"),
   G = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
   j = new RegExp("^" + B + "*," + B + "*"),
   V = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
   W = new RegExp(B + "|>"),
   q = new RegExp(U),
   X = new RegExp("^" + k + "$"),
   Y = {
    ID: new RegExp("^#(" + k + ")"),
    CLASS: new RegExp("^\\.(" + k + ")"),
    TAG: new RegExp("^(" + k + "|[*])"),
    ATTR: new RegExp("^" + F),
    PSEUDO: new RegExp("^" + U),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + z + ")$", "i"),
    needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
   },
   Z = /HTML$/i,
   J = /^(?:input|select|textarea|button)$/i,
   $ = /^h\d$/i,
   Q = /^[^{]+\{\s*\[native \w/,
   K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
   tt = /[+~]/,
   et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
   nt = function(t, e, n) {
    var i = "0x" + e - 65536;
    return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
   },
   it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
   rt = function(t, e) {
    return e ? "\0" === t ? "пїЅ" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
   },
   at = function() {
    p()
   },
   ot = _t((function(t) {
    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
   }), {
    dir: "parentNode",
    next: "legend"
   });
  try {
   I.apply(L = D.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType
  } catch (e) {
   I = {
    apply: L.length ? function(t, e) {
     O.apply(t, D.call(e))
    } : function(t, e) {
     for (var n = t.length, i = 0; t[n++] = e[i++];);
     t.length = n - 1
    }
   }
  }

  function st(t, e, i, r) {
   var a, s, c, u, h, f, v, y = e && e.ownerDocument,
    w = e ? e.nodeType : 9;
   if (i = i || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return i;
   if (!r && ((e ? e.ownerDocument || e : b) !== d && p(e), e = e || d, m)) {
    if (11 !== w && (h = K.exec(t)))
     if (a = h[1]) {
      if (9 === w) {
       if (!(c = e.getElementById(a))) return i;
       if (c.id === a) return i.push(c), i
      } else if (y && (c = y.getElementById(a)) && x(e, c) && c.id === a) return i.push(c), i
     } else {
      if (h[2]) return I.apply(i, e.getElementsByTagName(t)), i;
      if ((a = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(a)), i
     } if (n.qsa && !A[t + " "] && (!g || !g.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
     if (v = t, y = e, 1 === w && W.test(t)) {
      for ((u = e.getAttribute("id")) ? u = u.replace(it, rt) : e.setAttribute("id", u = _), s = (f = o(t)).length; s--;) f[s] = "#" + u + " " + xt(f[s]);
      v = f.join(","), y = tt.test(t) && vt(e.parentNode) || e
     }
     try {
      return I.apply(i, y.querySelectorAll(v)), i
     } catch (e) {
      A(t, !0)
     } finally {
      u === _ && e.removeAttribute("id")
     }
    }
   }
   return l(t.replace(G, "$1"), e, i, r)
  }

  function lt() {
   var t = [];
   return function e(n, r) {
    return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
   }
  }

  function ct(t) {
   return t[_] = !0, t
  }

  function ut(t) {
   var e = d.createElement("fieldset");
   try {
    return !!t(e)
   } catch (t) {
    return !1
   } finally {
    e.parentNode && e.parentNode.removeChild(e), e = null
   }
  }

  function ht(t, e) {
   for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
  }

  function pt(t, e) {
   var n = e && t,
    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
   if (i) return i;
   if (n)
    for (; n = n.nextSibling;)
     if (n === e) return -1;
   return t ? 1 : -1
  }

  function dt(t) {
   return function(e) {
    return "input" === e.nodeName.toLowerCase() && e.type === t
   }
  }

  function ft(t) {
   return function(e) {
    var n = e.nodeName.toLowerCase();
    return ("input" === n || "button" === n) && e.type === t
   }
  }

  function mt(t) {
   return function(e) {
    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
   }
  }

  function gt(t) {
   return ct((function(e) {
    return e = +e, ct((function(n, i) {
     for (var r, a = t([], n.length, e), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
    }))
   }))
  }

  function vt(t) {
   return t && void 0 !== t.getElementsByTagName && t
  }
  for (e in n = st.support = {}, a = st.isXML = function(t) {
    var e = t.namespaceURI,
     n = (t.ownerDocument || t).documentElement;
    return !Z.test(e || n && n.nodeName || "HTML")
   }, p = st.setDocument = function(t) {
    var e, r, o = t ? t.ownerDocument || t : b;
    return o !== d && 9 === o.nodeType && o.documentElement && (f = (d = o).documentElement, m = !a(d), b !== d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", at, !1) : r.attachEvent && r.attachEvent("onunload", at)), n.attributes = ut((function(t) {
     return t.className = "i", !t.getAttribute("className")
    })), n.getElementsByTagName = ut((function(t) {
     return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
    })), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ut((function(t) {
     return f.appendChild(t).id = _, !d.getElementsByName || !d.getElementsByName(_).length
    })), n.getById ? (i.filter.ID = function(t) {
     var e = t.replace(et, nt);
     return function(t) {
      return t.getAttribute("id") === e
     }
    }, i.find.ID = function(t, e) {
     if (void 0 !== e.getElementById && m) {
      var n = e.getElementById(t);
      return n ? [n] : []
     }
    }) : (i.filter.ID = function(t) {
     var e = t.replace(et, nt);
     return function(t) {
      var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
      return n && n.value === e
     }
    }, i.find.ID = function(t, e) {
     if (void 0 !== e.getElementById && m) {
      var n, i, r, a = e.getElementById(t);
      if (a) {
       if ((n = a.getAttributeNode("id")) && n.value === t) return [a];
       for (r = e.getElementsByName(t), i = 0; a = r[i++];)
        if ((n = a.getAttributeNode("id")) && n.value === t) return [a]
      }
      return []
     }
    }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
     return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
    } : function(t, e) {
     var n, i = [],
      r = 0,
      a = e.getElementsByTagName(t);
     if ("*" === t) {
      for (; n = a[r++];) 1 === n.nodeType && i.push(n);
      return i
     }
     return a
    }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
     if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
    }, v = [], g = [], (n.qsa = Q.test(d.querySelectorAll)) && (ut((function(t) {
     f.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
    })), ut((function(t) {
     t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
     var e = d.createElement("input");
     e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
    }))), (n.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut((function(t) {
     n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", U)
    })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), x = e || Q.test(f.contains) ? function(t, e) {
     var n = 9 === t.nodeType ? t.documentElement : t,
      i = e && e.parentNode;
     return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
    } : function(t, e) {
     if (e)
      for (; e = e.parentNode;)
       if (e === t) return !0;
     return !1
    }, C = e ? function(t, e) {
     if (t === e) return h = !0, 0;
     var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
     return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === b && x(b, t) ? -1 : e === d || e.ownerDocument === b && x(b, e) ? 1 : u ? N(u, t) - N(u, e) : 0 : 4 & i ? -1 : 1)
    } : function(t, e) {
     if (t === e) return h = !0, 0;
     var n, i = 0,
      r = t.parentNode,
      a = e.parentNode,
      o = [t],
      s = [e];
     if (!r || !a) return t === d ? -1 : e === d ? 1 : r ? -1 : a ? 1 : u ? N(u, t) - N(u, e) : 0;
     if (r === a) return pt(t, e);
     for (n = t; n = n.parentNode;) o.unshift(n);
     for (n = e; n = n.parentNode;) s.unshift(n);
     for (; o[i] === s[i];) i++;
     return i ? pt(o[i], s[i]) : o[i] === b ? -1 : s[i] === b ? 1 : 0
    }), d
   }, st.matches = function(t, e) {
    return st(t, null, null, e)
   }, st.matchesSelector = function(t, e) {
    if ((t.ownerDocument || t) !== d && p(t), n.matchesSelector && m && !A[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
     var i = y.call(t, e);
     if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
    } catch (t) {
     A(e, !0)
    }
    return 0 < st(e, d, null, [t]).length
   }, st.contains = function(t, e) {
    return (t.ownerDocument || t) !== d && p(t), x(t, e)
   }, st.attr = function(t, e) {
    (t.ownerDocument || t) !== d && p(t);
    var r = i.attrHandle[e.toLowerCase()],
     a = r && P.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
    return void 0 !== a ? a : n.attributes || !m ? t.getAttribute(e) : (a = t.getAttributeNode(e)) && a.specified ? a.value : null
   }, st.escape = function(t) {
    return (t + "").replace(it, rt)
   }, st.error = function(t) {
    throw new Error("Syntax error, unrecognized expression: " + t)
   }, st.uniqueSort = function(t) {
    var e, i = [],
     r = 0,
     a = 0;
    if (h = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(C), h) {
     for (; e = t[a++];) e === t[a] && (r = i.push(a));
     for (; r--;) t.splice(i[r], 1)
    }
    return u = null, t
   }, r = st.getText = function(t) {
    var e, n = "",
     i = 0,
     a = t.nodeType;
    if (a) {
     if (1 === a || 9 === a || 11 === a) {
      if ("string" == typeof t.textContent) return t.textContent;
      for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
     } else if (3 === a || 4 === a) return t.nodeValue
    } else
     for (; e = t[i++];) n += r(e);
    return n
   }, (i = st.selectors = {
    cacheLength: 50,
    createPseudo: ct,
    match: Y,
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
      return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
     },
     CHILD: function(t) {
      return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
     },
     PSEUDO: function(t) {
      var e, n = !t[6] && t[2];
      return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && q.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
     }
    },
    filter: {
     TAG: function(t) {
      var e = t.replace(et, nt).toLowerCase();
      return "*" === t ? function() {
       return !0
      } : function(t) {
       return t.nodeName && t.nodeName.toLowerCase() === e
      }
     },
     CLASS: function(t) {
      var e = T[t + " "];
      return e || (e = new RegExp("(^|" + B + ")" + t + "(" + B + "|$)")) && T(t, (function(t) {
       return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
      }))
     },
     ATTR: function(t, e, n) {
      return function(i) {
       var r = st.attr(i, t);
       return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(H, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
      }
     },
     CHILD: function(t, e, n, i, r) {
      var a = "nth" !== t.slice(0, 3),
       o = "last" !== t.slice(-4),
       s = "of-type" === e;
      return 1 === i && 0 === r ? function(t) {
       return !!t.parentNode
      } : function(e, n, l) {
       var c, u, h, p, d, f, m = a !== o ? "nextSibling" : "previousSibling",
        g = e.parentNode,
        v = s && e.nodeName.toLowerCase(),
        y = !l && !s,
        x = !1;
       if (g) {
        if (a) {
         for (; m;) {
          for (p = e; p = p[m];)
           if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
          f = m = "only" === t && !f && "nextSibling"
         }
         return !0
        }
        if (f = [o ? g.firstChild : g.lastChild], o && y) {
         for (x = (d = (c = (u = (h = (p = g)[_] || (p[_] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === w && c[1]) && c[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (x = d = 0) || f.pop();)
          if (1 === p.nodeType && ++x && p === e) {
           u[t] = [w, d, x];
           break
          }
        } else if (y && (x = d = (c = (u = (h = (p = e)[_] || (p[_] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === w && c[1]), !1 === x)
         for (;
          (p = ++d && p && p[m] || (x = d = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((u = (h = p[_] || (p[_] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] = [w, x]), p !== e)););
        return (x -= r) === i || x % i == 0 && 0 <= x / i
       }
      }
     },
     PSEUDO: function(t, e) {
      var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
      return r[_] ? r(e) : 1 < r.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) {
       for (var i, a = r(t, e), o = a.length; o--;) t[i = N(t, a[o])] = !(n[i] = a[o])
      })) : function(t) {
       return r(t, 0, n)
      }) : r
     }
    },
    pseudos: {
     not: ct((function(t) {
      var e = [],
       n = [],
       i = s(t.replace(G, "$1"));
      return i[_] ? ct((function(t, e, n, r) {
       for (var a, o = i(t, null, r, []), s = t.length; s--;)(a = o[s]) && (t[s] = !(e[s] = a))
      })) : function(t, r, a) {
       return e[0] = t, i(e, null, a, n), e[0] = null, !n.pop()
      }
     })),
     has: ct((function(t) {
      return function(e) {
       return 0 < st(t, e).length
      }
     })),
     contains: ct((function(t) {
      return t = t.replace(et, nt),
       function(e) {
        return -1 < (e.textContent || r(e)).indexOf(t)
       }
     })),
     lang: ct((function(t) {
      return X.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
       function(e) {
        var n;
        do {
         if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
        } while ((e = e.parentNode) && 1 === e.nodeType);
        return !1
       }
     })),
     target: function(e) {
      var n = t.location && t.location.hash;
      return n && n.slice(1) === e.id
     },
     root: function(t) {
      return t === f
     },
     focus: function(t) {
      return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
     },
     enabled: mt(!1),
     disabled: mt(!0),
     checked: function(t) {
      var e = t.nodeName.toLowerCase();
      return "input" === e && !!t.checked || "option" === e && !!t.selected
     },
     selected: function(t) {
      return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
     },
     empty: function(t) {
      for (t = t.firstChild; t; t = t.nextSibling)
       if (t.nodeType < 6) return !1;
      return !0
     },
     parent: function(t) {
      return !i.pseudos.empty(t)
     },
     header: function(t) {
      return $.test(t.nodeName)
     },
     input: function(t) {
      return J.test(t.nodeName)
     },
     button: function(t) {
      var e = t.nodeName.toLowerCase();
      return "input" === e && "button" === t.type || "button" === e
     },
     text: function(t) {
      var e;
      return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
     },
     first: gt((function() {
      return [0]
     })),
     last: gt((function(t, e) {
      return [e - 1]
     })),
     eq: gt((function(t, e, n) {
      return [n < 0 ? n + e : n]
     })),
     even: gt((function(t, e) {
      for (var n = 0; n < e; n += 2) t.push(n);
      return t
     })),
     odd: gt((function(t, e) {
      for (var n = 1; n < e; n += 2) t.push(n);
      return t
     })),
     lt: gt((function(t, e, n) {
      for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
      return t
     })),
     gt: gt((function(t, e, n) {
      for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
      return t
     }))
    }
   }).pseudos.nth = i.pseudos.eq, {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
   }) i.pseudos[e] = dt(e);
  for (e in {
    submit: !0,
    reset: !0
   }) i.pseudos[e] = ft(e);

  function yt() {}

  function xt(t) {
   for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
   return i
  }

  function _t(t, e, n) {
   var i = e.dir,
    r = e.next,
    a = r || i,
    o = n && "parentNode" === a,
    s = M++;
   return e.first ? function(e, n, r) {
    for (; e = e[i];)
     if (1 === e.nodeType || o) return t(e, n, r);
    return !1
   } : function(e, n, l) {
    var c, u, h, p = [w, s];
    if (l) {
     for (; e = e[i];)
      if ((1 === e.nodeType || o) && t(e, n, l)) return !0
    } else
     for (; e = e[i];)
      if (1 === e.nodeType || o)
       if (u = (h = e[_] || (e[_] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
       else {
        if ((c = u[a]) && c[0] === w && c[1] === s) return p[2] = c[2];
        if ((u[a] = p)[2] = t(e, n, l)) return !0
       } return !1
   }
  }

  function bt(t) {
   return 1 < t.length ? function(e, n, i) {
    for (var r = t.length; r--;)
     if (!t[r](e, n, i)) return !1;
    return !0
   } : t[0]
  }

  function wt(t, e, n, i, r) {
   for (var a, o = [], s = 0, l = t.length, c = null != e; s < l; s++)(a = t[s]) && (n && !n(a, i, r) || (o.push(a), c && e.push(s)));
   return o
  }

  function Mt(t, e, n, i, r, a) {
   return i && !i[_] && (i = Mt(i)), r && !r[_] && (r = Mt(r, a)), ct((function(a, o, s, l) {
    var c, u, h, p = [],
     d = [],
     f = o.length,
     m = a || function(t, e, n) {
      for (var i = 0, r = e.length; i < r; i++) st(t, e[i], n);
      return n
     }(e || "*", s.nodeType ? [s] : s, []),
     g = !t || !a && e ? m : wt(m, p, t, s, l),
     v = n ? r || (a ? t : f || i) ? [] : o : g;
    if (n && n(g, v, s, l), i)
     for (c = wt(v, d), i(c, [], s, l), u = c.length; u--;)(h = c[u]) && (v[d[u]] = !(g[d[u]] = h));
    if (a) {
     if (r || t) {
      if (r) {
       for (c = [], u = v.length; u--;)(h = v[u]) && c.push(g[u] = h);
       r(null, v = [], c, l)
      }
      for (u = v.length; u--;)(h = v[u]) && -1 < (c = r ? N(a, h) : p[u]) && (a[c] = !(o[c] = h))
     }
    } else v = wt(v === o ? v.splice(f, v.length) : v), r ? r(null, o, v, l) : I.apply(o, v)
   }))
  }

  function Tt(t) {
   for (var e, n, r, a = t.length, o = i.relative[t[0].type], s = o || i.relative[" "], l = o ? 1 : 0, u = _t((function(t) {
     return t === e
    }), s, !0), h = _t((function(t) {
     return -1 < N(e, t)
    }), s, !0), p = [function(t, n, i) {
     var r = !o && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
     return e = null, r
    }]; l < a; l++)
    if (n = i.relative[t[l].type]) p = [_t(bt(p), n)];
    else {
     if ((n = i.filter[t[l].type].apply(null, t[l].matches))[_]) {
      for (r = ++l; r < a && !i.relative[t[r].type]; r++);
      return Mt(1 < l && bt(p), 1 < l && xt(t.slice(0, l - 1).concat({
       value: " " === t[l - 2].type ? "*" : ""
      })).replace(G, "$1"), n, l < r && Tt(t.slice(l, r)), r < a && Tt(t = t.slice(r)), r < a && xt(t))
     }
     p.push(n)
    } return bt(p)
  }
  return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, o = st.tokenize = function(t, e) {
   var n, r, a, o, s, l, c, u = S[t + " "];
   if (u) return e ? 0 : u.slice(0);
   for (s = t, l = [], c = i.preFilter; s;) {
    for (o in n && !(r = j.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), a.push({
      value: n,
      type: r[0].replace(G, " ")
     }), s = s.slice(n.length)), i.filter) !(r = Y[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), a.push({
     value: n,
     type: o,
     matches: r
    }), s = s.slice(n.length));
    if (!n) break
   }
   return e ? s.length : s ? st.error(t) : S(t, l).slice(0)
  }, s = st.compile = function(t, e) {
   var n, r, a, s, l, u, h = [],
    f = [],
    g = E[t + " "];
   if (!g) {
    for (e || (e = o(t)), n = e.length; n--;)(g = Tt(e[n]))[_] ? h.push(g) : f.push(g);
    (g = E(t, (r = f, s = 0 < (a = h).length, l = 0 < r.length, u = function(t, e, n, o, u) {
     var h, f, g, v = 0,
      y = "0",
      x = t && [],
      _ = [],
      b = c,
      M = t || l && i.find.TAG("*", u),
      T = w += null == b ? 1 : Math.random() || .1,
      S = M.length;
     for (u && (c = e === d || e || u); y !== S && null != (h = M[y]); y++) {
      if (l && h) {
       for (f = 0, e || h.ownerDocument === d || (p(h), n = !m); g = r[f++];)
        if (g(h, e || d, n)) {
         o.push(h);
         break
        } u && (w = T)
      }
      s && ((h = !g && h) && v--, t && x.push(h))
     }
     if (v += y, s && y !== v) {
      for (f = 0; g = a[f++];) g(x, _, e, n);
      if (t) {
       if (0 < v)
        for (; y--;) x[y] || _[y] || (_[y] = R.call(o));
       _ = wt(_)
      }
      I.apply(o, _), u && !t && 0 < _.length && 1 < v + a.length && st.uniqueSort(o)
     }
     return u && (w = T, c = b), x
    }, s ? ct(u) : u))).selector = t
   }
   return g
  }, l = st.select = function(t, e, n, r) {
   var a, l, c, u, h, p = "function" == typeof t && t,
    d = !r && o(t = p.selector || t);
   if (n = n || [], 1 === d.length) {
    if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
     if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
     p && (e = e.parentNode), t = t.slice(l.shift().value.length)
    }
    for (a = Y.needsContext.test(t) ? 0 : l.length; a-- && (c = l[a], !i.relative[u = c.type]);)
     if ((h = i.find[u]) && (r = h(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
      if (l.splice(a, 1), !(t = r.length && xt(l))) return I.apply(n, r), n;
      break
     }
   }
   return (p || s(t, d))(r, e, !m, n, !e || tt.test(t) && vt(e.parentNode) || e), n
  }, n.sortStable = _.split("").sort(C).join("") === _, n.detectDuplicates = !!h, p(), n.sortDetached = ut((function(t) {
   return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
  })), ut((function(t) {
   return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
  })) || ht("type|href|height|width", (function(t, e, n) {
   if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
  })), n.attributes && ut((function(t) {
   return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
  })) || ht("value", (function(t, e, n) {
   if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
  })), ut((function(t) {
   return null == t.getAttribute("disabled")
  })) || ht(z, (function(t, e, n) {
   var i;
   if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
  })), st
 }(t);
 b.find = T, b.expr = T.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = T.uniqueSort, b.text = T.getText, b.isXMLDoc = T.isXML, b.contains = T.contains, b.escapeSelector = T.escape;
 var S = function(t, e, n) {
   for (var i = [], r = void 0 !== n;
    (t = t[e]) && 9 !== t.nodeType;)
    if (1 === t.nodeType) {
     if (r && b(t).is(n)) break;
     i.push(t)
    } return i
  },
  E = function(t, e) {
   for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
   return n
  },
  A = b.expr.match.needsContext;

 function C(t, e) {
  return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
 }
 var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

 function L(t, e, n) {
  return m(e) ? b.grep(t, (function(t, i) {
   return !!e.call(t, i, t) !== n
  })) : e.nodeType ? b.grep(t, (function(t) {
   return t === e !== n
  })) : "string" != typeof e ? b.grep(t, (function(t) {
   return -1 < l.call(e, t) !== n
  })) : b.filter(e, t, n)
 }
 b.filter = function(t, e, n) {
  var i = e[0];
  return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? b.find.matchesSelector(i, t) ? [i] : [] : b.find.matches(t, b.grep(e, (function(t) {
   return 1 === t.nodeType
  })))
 }, b.fn.extend({
  find: function(t) {
   var e, n, i = this.length,
    r = this;
   if ("string" != typeof t) return this.pushStack(b(t).filter((function() {
    for (e = 0; e < i; e++)
     if (b.contains(r[e], this)) return !0
   })));
   for (n = this.pushStack([]), e = 0; e < i; e++) b.find(t, r[e], n);
   return 1 < i ? b.uniqueSort(n) : n
  },
  filter: function(t) {
   return this.pushStack(L(this, t || [], !1))
  },
  not: function(t) {
   return this.pushStack(L(this, t || [], !0))
  },
  is: function(t) {
   return !!L(this, "string" == typeof t && A.test(t) ? b(t) : t || [], !1).length
  }
 });
 var R, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
 (b.fn.init = function(t, e, n) {
  var r, a;
  if (!t) return this;
  if (n = n || R, "string" == typeof t) {
   if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : O.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
   if (r[1]) {
    if (e = e instanceof b ? e[0] : e, b.merge(this, b.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), P.test(r[1]) && b.isPlainObject(e))
     for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
    return this
   }
   return (a = i.getElementById(r[2])) && (this[0] = a, this.length = 1), this
  }
  return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(b) : b.makeArray(t, this)
 }).prototype = b.fn, R = b(i);
 var I = /^(?:parents|prev(?:Until|All))/,
  D = {
   children: !0,
   contents: !0,
   next: !0,
   prev: !0
  };

 function N(t, e) {
  for (;
   (t = t[e]) && 1 !== t.nodeType;);
  return t
 }
 b.fn.extend({
  has: function(t) {
   var e = b(t, this),
    n = e.length;
   return this.filter((function() {
    for (var t = 0; t < n; t++)
     if (b.contains(this, e[t])) return !0
   }))
  },
  closest: function(t, e) {
   var n, i = 0,
    r = this.length,
    a = [],
    o = "string" != typeof t && b(t);
   if (!A.test(t))
    for (; i < r; i++)
     for (n = this[i]; n && n !== e; n = n.parentNode)
      if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && b.find.matchesSelector(n, t))) {
       a.push(n);
       break
      } return this.pushStack(1 < a.length ? b.uniqueSort(a) : a)
  },
  index: function(t) {
   return t ? "string" == typeof t ? l.call(b(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
  },
  add: function(t, e) {
   return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))))
  },
  addBack: function(t) {
   return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
  }
 }), b.each({
  parent: function(t) {
   var e = t.parentNode;
   return e && 11 !== e.nodeType ? e : null
  },
  parents: function(t) {
   return S(t, "parentNode")
  },
  parentsUntil: function(t, e, n) {
   return S(t, "parentNode", n)
  },
  next: function(t) {
   return N(t, "nextSibling")
  },
  prev: function(t) {
   return N(t, "previousSibling")
  },
  nextAll: function(t) {
   return S(t, "nextSibling")
  },
  prevAll: function(t) {
   return S(t, "previousSibling")
  },
  nextUntil: function(t, e, n) {
   return S(t, "nextSibling", n)
  },
  prevUntil: function(t, e, n) {
   return S(t, "previousSibling", n)
  },
  siblings: function(t) {
   return E((t.parentNode || {}).firstChild, t)
  },
  children: function(t) {
   return E(t.firstChild)
  },
  contents: function(t) {
   return void 0 !== t.contentDocument ? t.contentDocument : (C(t, "template") && (t = t.content || t), b.merge([], t.childNodes))
  }
 }, (function(t, e) {
  b.fn[t] = function(n, i) {
   var r = b.map(this, e, n);
   return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), 1 < this.length && (D[t] || b.uniqueSort(r), I.test(t) && r.reverse()), this.pushStack(r)
  }
 }));
 var z = /[^\x20\t\r\n\f]+/g;

 function B(t) {
  return t
 }

 function k(t) {
  throw t
 }

 function F(t, e, n, i) {
  var r;
  try {
   t && m(r = t.promise) ? r.call(t).done(e).fail(n) : t && m(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
  } catch (t) {
   n.apply(void 0, [t])
  }
 }
 b.Callbacks = function(t) {
  var e, n;
  t = "string" == typeof t ? (e = t, n = {}, b.each(e.match(z) || [], (function(t, e) {
   n[e] = !0
  })), n) : b.extend({}, t);
  var i, r, a, o, s = [],
   l = [],
   c = -1,
   u = function() {
    for (o = o || t.once, a = i = !0; l.length; c = -1)
     for (r = l.shift(); ++c < s.length;) !1 === s[c].apply(r[0], r[1]) && t.stopOnFalse && (c = s.length, r = !1);
    t.memory || (r = !1), i = !1, o && (s = r ? [] : "")
   },
   h = {
    add: function() {
     return s && (r && !i && (c = s.length - 1, l.push(r)), function e(n) {
      b.each(n, (function(n, i) {
       m(i) ? t.unique && h.has(i) || s.push(i) : i && i.length && "string" !== x(i) && e(i)
      }))
     }(arguments), r && !i && u()), this
    },
    remove: function() {
     return b.each(arguments, (function(t, e) {
      for (var n; - 1 < (n = b.inArray(e, s, n));) s.splice(n, 1), n <= c && c--
     })), this
    },
    has: function(t) {
     return t ? -1 < b.inArray(t, s) : 0 < s.length
    },
    empty: function() {
     return s && (s = []), this
    },
    disable: function() {
     return o = l = [], s = r = "", this
    },
    disabled: function() {
     return !s
    },
    lock: function() {
     return o = l = [], r || i || (s = r = ""), this
    },
    locked: function() {
     return !!o
    },
    fireWith: function(t, e) {
     return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || u()), this
    },
    fire: function() {
     return h.fireWith(this, arguments), this
    },
    fired: function() {
     return !!a
    }
   };
  return h
 }, b.extend({
  Deferred: function(e) {
   var n = [
     ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
     ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
     ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
    ],
    i = "pending",
    r = {
     state: function() {
      return i
     },
     always: function() {
      return a.done(arguments).fail(arguments), this
     },
     catch: function(t) {
      return r.then(null, t)
     },
     pipe: function() {
      var t = arguments;
      return b.Deferred((function(e) {
       b.each(n, (function(n, i) {
        var r = m(t[i[4]]) && t[i[4]];
        a[i[1]]((function() {
         var t = r && r.apply(this, arguments);
         t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
        }))
       })), t = null
      })).promise()
     },
     then: function(e, i, r) {
      var a = 0;

      function o(e, n, i, r) {
       return function() {
        var s = this,
         l = arguments,
         c = function() {
          var t, c;
          if (!(e < a)) {
           if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
           c = t && ("object" == typeof t || "function" == typeof t) && t.then, m(c) ? r ? c.call(t, o(a, n, B, r), o(a, n, k, r)) : (a++, c.call(t, o(a, n, B, r), o(a, n, k, r), o(a, n, B, n.notifyWith))) : (i !== B && (s = void 0, l = [t]), (r || n.resolveWith)(s, l))
          }
         },
         u = r ? c : function() {
          try {
           c()
          } catch (t) {
           b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, u.stackTrace), a <= e + 1 && (i !== k && (s = void 0, l = [t]), n.rejectWith(s, l))
          }
         };
        e ? u() : (b.Deferred.getStackHook && (u.stackTrace = b.Deferred.getStackHook()), t.setTimeout(u))
       }
      }
      return b.Deferred((function(t) {
       n[0][3].add(o(0, t, m(r) ? r : B, t.notifyWith)), n[1][3].add(o(0, t, m(e) ? e : B)), n[2][3].add(o(0, t, m(i) ? i : k))
      })).promise()
     },
     promise: function(t) {
      return null != t ? b.extend(t, r) : r
     }
    },
    a = {};
   return b.each(n, (function(t, e) {
    var o = e[2],
     s = e[5];
    r[e[1]] = o.add, s && o.add((function() {
     i = s
    }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), o.add(e[3].fire), a[e[0]] = function() {
     return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
    }, a[e[0] + "With"] = o.fireWith
   })), r.promise(a), e && e.call(a, a), a
  },
  when: function(t) {
   var e = arguments.length,
    n = e,
    i = Array(n),
    r = a.call(arguments),
    o = b.Deferred(),
    s = function(t) {
     return function(n) {
      i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : n, --e || o.resolveWith(i, r)
     }
    };
   if (e <= 1 && (F(t, o.done(s(n)).resolve, o.reject, !e), "pending" === o.state() || m(r[n] && r[n].then))) return o.then();
   for (; n--;) F(r[n], s(n), o.reject);
   return o.promise()
  }
 });
 var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
 b.Deferred.exceptionHook = function(e, n) {
  t.console && t.console.warn && e && U.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
 }, b.readyException = function(e) {
  t.setTimeout((function() {
   throw e
  }))
 };
 var H = b.Deferred();

 function G() {
  i.removeEventListener("DOMContentLoaded", G), t.removeEventListener("load", G), b.ready()
 }
 b.fn.ready = function(t) {
  return H.then(t).catch((function(t) {
   b.readyException(t)
  })), this
 }, b.extend({
  isReady: !1,
  readyWait: 1,
  ready: function(t) {
   (!0 === t ? --b.readyWait : b.isReady) || (b.isReady = !0) !== t && 0 < --b.readyWait || H.resolveWith(i, [b])
  }
 }), b.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(b.ready) : (i.addEventListener("DOMContentLoaded", G), t.addEventListener("load", G));
 var j = function(t, e, n, i, r, a, o) {
   var s = 0,
    l = t.length,
    c = null == n;
   if ("object" === x(n))
    for (s in r = !0, n) j(t, e, s, n[s], !0, a, o);
   else if (void 0 !== i && (r = !0, m(i) || (o = !0), c && (o ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
     return c.call(b(t), n)
    })), e))
    for (; s < l; s++) e(t[s], n, o ? i : i.call(t[s], s, e(t[s], n)));
   return r ? t : c ? e.call(t) : l ? e(t[0], n) : a
  },
  V = /^-ms-/,
  W = /-([a-z])/g;

 function q(t, e) {
  return e.toUpperCase()
 }

 function X(t) {
  return t.replace(V, "ms-").replace(W, q)
 }
 var Y = function(t) {
  return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
 };

 function Z() {
  this.expando = b.expando + Z.uid++
 }
 Z.uid = 1, Z.prototype = {
  cache: function(t) {
   var e = t[this.expando];
   return e || (e = {}, Y(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
    value: e,
    configurable: !0
   }))), e
  },
  set: function(t, e, n) {
   var i, r = this.cache(t);
   if ("string" == typeof e) r[X(e)] = n;
   else
    for (i in e) r[X(i)] = e[i];
   return r
  },
  get: function(t, e) {
   return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
  },
  access: function(t, e, n) {
   return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
  },
  remove: function(t, e) {
   var n, i = t[this.expando];
   if (void 0 !== i) {
    if (void 0 !== e) {
     n = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in i ? [e] : e.match(z) || []).length;
     for (; n--;) delete i[e[n]]
    }(void 0 === e || b.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
   }
  },
  hasData: function(t) {
   var e = t[this.expando];
   return void 0 !== e && !b.isEmptyObject(e)
  }
 };
 var J = new Z,
  $ = new Z,
  Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  K = /[A-Z]/g;

 function tt(t, e, n) {
  var i, r;
  if (void 0 === n && 1 === t.nodeType)
   if (i = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
    try {
     n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r)
    } catch (t) {}
    $.set(t, e, n)
   } else n = void 0;
  return n
 }
 b.extend({
  hasData: function(t) {
   return $.hasData(t) || J.hasData(t)
  },
  data: function(t, e, n) {
   return $.access(t, e, n)
  },
  removeData: function(t, e) {
   $.remove(t, e)
  },
  _data: function(t, e, n) {
   return J.access(t, e, n)
  },
  _removeData: function(t, e) {
   J.remove(t, e)
  }
 }), b.fn.extend({
  data: function(t, e) {
   var n, i, r, a = this[0],
    o = a && a.attributes;
   if (void 0 === t) {
    if (this.length && (r = $.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
     for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = X(i.slice(5)), tt(a, i, r[i]));
     J.set(a, "hasDataAttrs", !0)
    }
    return r
   }
   return "object" == typeof t ? this.each((function() {
    $.set(this, t)
   })) : j(this, (function(e) {
    var n;
    if (a && void 0 === e) return void 0 !== (n = $.get(a, t)) ? n : void 0 !== (n = tt(a, t)) ? n : void 0;
    this.each((function() {
     $.set(this, t, e)
    }))
   }), null, e, 1 < arguments.length, null, !0)
  },
  removeData: function(t) {
   return this.each((function() {
    $.remove(this, t)
   }))
  }
 }), b.extend({
  queue: function(t, e, n) {
   var i;
   if (t) return e = (e || "fx") + "queue", i = J.get(t, e), n && (!i || Array.isArray(n) ? i = J.access(t, e, b.makeArray(n)) : i.push(n)), i || []
  },
  dequeue: function(t, e) {
   e = e || "fx";
   var n = b.queue(t, e),
    i = n.length,
    r = n.shift(),
    a = b._queueHooks(t, e);
   "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete a.stop, r.call(t, (function() {
    b.dequeue(t, e)
   }), a)), !i && a && a.empty.fire()
  },
  _queueHooks: function(t, e) {
   var n = e + "queueHooks";
   return J.get(t, n) || J.access(t, n, {
    empty: b.Callbacks("once memory").add((function() {
     J.remove(t, [e + "queue", n])
    }))
   })
  }
 }), b.fn.extend({
  queue: function(t, e) {
   var n = 2;
   return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? b.queue(this[0], t) : void 0 === e ? this : this.each((function() {
    var n = b.queue(this, t, e);
    b._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && b.dequeue(this, t)
   }))
  },
  dequeue: function(t) {
   return this.each((function() {
    b.dequeue(this, t)
   }))
  },
  clearQueue: function(t) {
   return this.queue(t || "fx", [])
  },
  promise: function(t, e) {
   var n, i = 1,
    r = b.Deferred(),
    a = this,
    o = this.length,
    s = function() {
     --i || r.resolveWith(a, [a])
    };
   for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = J.get(a[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
   return s(), r.promise(e)
  }
 });
 var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
  it = ["Top", "Right", "Bottom", "Left"],
  rt = i.documentElement,
  at = function(t) {
   return b.contains(t.ownerDocument, t)
  },
  ot = {
   composed: !0
  };
 rt.getRootNode && (at = function(t) {
  return b.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
 });
 var st = function(t, e) {
   return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === b.css(t, "display")
  },
  lt = function(t, e, n, i) {
   var r, a, o = {};
   for (a in e) o[a] = t.style[a], t.style[a] = e[a];
   for (a in r = n.apply(t, i || []), e) t.style[a] = o[a];
   return r
  };

 function ct(t, e, n, i) {
  var r, a, o = 20,
   s = i ? function() {
    return i.cur()
   } : function() {
    return b.css(t, e, "")
   },
   l = s(),
   c = n && n[3] || (b.cssNumber[e] ? "" : "px"),
   u = t.nodeType && (b.cssNumber[e] || "px" !== c && +l) && nt.exec(b.css(t, e));
  if (u && u[3] !== c) {
   for (l /= 2, c = c || u[3], u = +l || 1; o--;) b.style(t, e, u + c), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), u /= a;
   u *= 2, b.style(t, e, u + c), n = n || []
  }
  return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
 }
 var ut = {};

 function ht(t, e) {
  for (var n, i, r, a, o, s, l, c = [], u = 0, h = t.length; u < h; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = J.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && st(i) && (c[u] = (l = o = a = void 0, o = (r = i).ownerDocument, s = r.nodeName, (l = ut[s]) || (a = o.body.appendChild(o.createElement(s)), l = b.css(a, "display"), a.parentNode.removeChild(a), "none" === l && (l = "block"), ut[s] = l)))) : "none" !== n && (c[u] = "none", J.set(i, "display", n)));
  for (u = 0; u < h; u++) null != c[u] && (t[u].style.display = c[u]);
  return t
 }
 b.fn.extend({
  show: function() {
   return ht(this, !0)
  },
  hide: function() {
   return ht(this)
  },
  toggle: function(t) {
   return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
    st(this) ? b(this).show() : b(this).hide()
   }))
  }
 });
 var pt = /^(?:checkbox|radio)$/i,
  dt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
  ft = /^$|^module$|\/(?:java|ecma)script/i,
  mt = {
   option: [1, "<select multiple='multiple'>", "</select>"],
   thead: [1, "<table>", "</table>"],
   col: [2, "<table><colgroup>", "</colgroup></table>"],
   tr: [2, "<table><tbody>", "</tbody></table>"],
   td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
   _default: [0, "", ""]
  };

 function gt(t, e) {
  var n;
  return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && C(t, e) ? b.merge([t], n) : n
 }

 function vt(t, e) {
  for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"))
 }
 mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
 var yt, xt, _t = /<|&#?\w+;/;

 function bt(t, e, n, i, r) {
  for (var a, o, s, l, c, u, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
   if ((a = t[d]) || 0 === a)
    if ("object" === x(a)) b.merge(p, a.nodeType ? [a] : a);
    else if (_t.test(a)) {
   for (o = o || h.appendChild(e.createElement("div")), s = (dt.exec(a) || ["", ""])[1].toLowerCase(), l = mt[s] || mt._default, o.innerHTML = l[1] + b.htmlPrefilter(a) + l[2], u = l[0]; u--;) o = o.lastChild;
   b.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
  } else p.push(e.createTextNode(a));
  for (h.textContent = "", d = 0; a = p[d++];)
   if (i && -1 < b.inArray(a, i)) r && r.push(a);
   else if (c = at(a), o = gt(h.appendChild(a), "script"), c && vt(o), n)
   for (u = 0; a = o[u++];) ft.test(a.type || "") && n.push(a);
  return h
 }
 yt = i.createDocumentFragment().appendChild(i.createElement("div")), (xt = i.createElement("input")).setAttribute("type", "radio"), xt.setAttribute("checked", "checked"), xt.setAttribute("name", "t"), yt.appendChild(xt), f.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
 var wt = /^key/,
  Mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Tt = /^([^.]*)(?:\.(.+)|)/;

 function St() {
  return !0
 }

 function Et() {
  return !1
 }

 function At(t, e) {
  return t === function() {
   try {
    return i.activeElement
   } catch (t) {}
  }() == ("focus" === e)
 }

 function Ct(t, e, n, i, r, a) {
  var o, s;
  if ("object" == typeof e) {
   for (s in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, s, n, i, e[s], a);
   return t
  }
  if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Et;
  else if (!r) return t;
  return 1 === a && (o = r, (r = function(t) {
   return b().off(t), o.apply(this, arguments)
  }).guid = o.guid || (o.guid = b.guid++)), t.each((function() {
   b.event.add(this, e, r, i, n)
  }))
 }

 function Pt(t, e, n) {
  n ? (J.set(t, e, !1), b.event.add(t, e, {
   namespace: !1,
   handler: function(t) {
    var i, r, o = J.get(this, e);
    if (1 & t.isTrigger && this[e]) {
     if (o.length)(b.event.special[e] || {}).delegateType && t.stopPropagation();
     else if (o = a.call(arguments), J.set(this, e, o), i = n(this, e), this[e](), o !== (r = J.get(this, e)) || i ? J.set(this, e, !1) : r = {}, o !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
    } else o.length && (J.set(this, e, {
     value: b.event.trigger(b.extend(o[0], b.Event.prototype), o.slice(1), this)
    }), t.stopImmediatePropagation())
   }
  })) : void 0 === J.get(t, e) && b.event.add(t, e, St)
 }
 b.event = {
  global: {},
  add: function(t, e, n, i, r) {
   var a, o, s, l, c, u, h, p, d, f, m, g = J.get(t);
   if (g)
    for (n.handler && (n = (a = n).handler, r = a.selector), r && b.find.matchesSelector(rt, r), n.guid || (n.guid = b.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
      return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0
     }), c = (e = (e || "").match(z) || [""]).length; c--;) d = m = (s = Tt.exec(e[c]) || [])[1], f = (s[2] || "").split(".").sort(), d && (h = b.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = b.event.special[d] || {}, u = b.extend({
     type: d,
     origType: m,
     data: i,
     handler: n,
     guid: n.guid,
     selector: r,
     needsContext: r && b.expr.match.needsContext.test(r),
     namespace: f.join(".")
    }, a), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), b.event.global[d] = !0)
  },
  remove: function(t, e, n, i, r) {
   var a, o, s, l, c, u, h, p, d, f, m, g = J.hasData(t) && J.get(t);
   if (g && (l = g.events)) {
    for (c = (e = (e || "").match(z) || [""]).length; c--;)
     if (d = m = (s = Tt.exec(e[c]) || [])[1], f = (s[2] || "").split(".").sort(), d) {
      for (h = b.event.special[d] || {}, p = l[d = (i ? h.delegateType : h.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--;) u = p[a], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(t, u));
      o && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || b.removeEvent(t, d, g.handle), delete l[d])
     } else
      for (d in l) b.event.remove(t, d + e[c], n, i, !0);
    b.isEmptyObject(l) && J.remove(t, "handle events")
   }
  },
  dispatch: function(t) {
   var e, n, i, r, a, o, s = b.event.fix(t),
    l = new Array(arguments.length),
    c = (J.get(this, "events") || {})[s.type] || [],
    u = b.event.special[s.type] || {};
   for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
   if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
    for (o = b.event.handlers.call(this, s, c), e = 0;
     (r = o[e++]) && !s.isPropagationStopped();)
     for (s.currentTarget = r.elem, n = 0;
      (a = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== a.namespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (i = ((b.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
    return u.postDispatch && u.postDispatch.call(this, s), s.result
   }
  },
  handlers: function(t, e) {
   var n, i, r, a, o, s = [],
    l = e.delegateCount,
    c = t.target;
   if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
    for (; c !== this; c = c.parentNode || this)
     if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
      for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? -1 < b(r, this).index(c) : b.find(r, this, null, [c]).length), o[r] && a.push(i);
      a.length && s.push({
       elem: c,
       handlers: a
      })
     } return c = this, l < e.length && s.push({
    elem: c,
    handlers: e.slice(l)
   }), s
  },
  addProp: function(t, e) {
   Object.defineProperty(b.Event.prototype, t, {
    enumerable: !0,
    configurable: !0,
    get: m(e) ? function() {
     if (this.originalEvent) return e(this.originalEvent)
    } : function() {
     if (this.originalEvent) return this.originalEvent[t]
    },
    set: function(e) {
     Object.defineProperty(this, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: e
     })
    }
   })
  },
  fix: function(t) {
   return t[b.expando] ? t : new b.Event(t)
  },
  special: {
   load: {
    noBubble: !0
   },
   click: {
    setup: function(t) {
     var e = this || t;
     return pt.test(e.type) && e.click && C(e, "input") && Pt(e, "click", St), !1
    },
    trigger: function(t) {
     var e = this || t;
     return pt.test(e.type) && e.click && C(e, "input") && Pt(e, "click"), !0
    },
    _default: function(t) {
     var e = t.target;
     return pt.test(e.type) && e.click && C(e, "input") && J.get(e, "click") || C(e, "a")
    }
   },
   beforeunload: {
    postDispatch: function(t) {
     void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
    }
   }
  }
 }, b.removeEvent = function(t, e, n) {
  t.removeEventListener && t.removeEventListener(e, n)
 }, b.Event = function(t, e) {
  if (!(this instanceof b.Event)) return new b.Event(t, e);
  t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : Et, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && b.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[b.expando] = !0
 }, b.Event.prototype = {
  constructor: b.Event,
  isDefaultPrevented: Et,
  isPropagationStopped: Et,
  isImmediatePropagationStopped: Et,
  isSimulated: !1,
  preventDefault: function() {
   var t = this.originalEvent;
   this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
  },
  stopPropagation: function() {
   var t = this.originalEvent;
   this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
  },
  stopImmediatePropagation: function() {
   var t = this.originalEvent;
   this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
  }
 }, b.each({
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
  which: function(t) {
   var e = t.button;
   return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
  }
 }, b.event.addProp), b.each({
  focus: "focusin",
  blur: "focusout"
 }, (function(t, e) {
  b.event.special[t] = {
   setup: function() {
    return Pt(this, t, At), !1
   },
   trigger: function() {
    return Pt(this, t), !0
   },
   delegateType: e
  }
 })), b.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
 }, (function(t, e) {
  b.event.special[t] = {
   delegateType: e,
   bindType: e,
   handle: function(t) {
    var n, i = t.relatedTarget,
     r = t.handleObj;
    return i && (i === this || b.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
   }
  }
 })), b.fn.extend({
  on: function(t, e, n, i) {
   return Ct(this, t, e, n, i)
  },
  one: function(t, e, n, i) {
   return Ct(this, t, e, n, i, 1)
  },
  off: function(t, e, n) {
   var i, r;
   if (t && t.preventDefault && t.handleObj) return i = t.handleObj, b(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
   if ("object" == typeof t) {
    for (r in t) this.off(r, e, t[r]);
    return this
   }
   return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Et), this.each((function() {
    b.event.remove(this, t, n, e)
   }))
  }
 });
 var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  Rt = /<script|<style|<link/i,
  Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
  It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

 function Dt(t, e) {
  return C(t, "table") && C(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0] || t
 }

 function Nt(t) {
  return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
 }

 function zt(t) {
  return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
 }

 function Bt(t, e) {
  var n, i, r, a, o, s, l, c;
  if (1 === e.nodeType) {
   if (J.hasData(t) && (a = J.access(t), o = J.set(e, a), c = a.events))
    for (r in delete o.handle, o.events = {}, c)
     for (n = 0, i = c[r].length; n < i; n++) b.event.add(e, r, c[r][n]);
   $.hasData(t) && (s = $.access(t), l = b.extend({}, s), $.set(e, l))
  }
 }

 function kt(t, e, n, i) {
  e = o.apply([], e);
  var r, a, s, l, c, u, h = 0,
   p = t.length,
   d = p - 1,
   g = e[0],
   v = m(g);
  if (v || 1 < p && "string" == typeof g && !f.checkClone && Ot.test(g)) return t.each((function(r) {
   var a = t.eq(r);
   v && (e[0] = g.call(this, r, a.html())), kt(a, e, n, i)
  }));
  if (p && (a = (r = bt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
   for (l = (s = b.map(gt(r, "script"), Nt)).length; h < p; h++) c = r, h !== d && (c = b.clone(c, !0, !0), l && b.merge(s, gt(c, "script"))), n.call(t[h], c, h);
   if (l)
    for (u = s[s.length - 1].ownerDocument, b.map(s, zt), h = 0; h < l; h++) c = s[h], ft.test(c.type || "") && !J.access(c, "globalEval") && b.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? b._evalUrl && !c.noModule && b._evalUrl(c.src, {
     nonce: c.nonce || c.getAttribute("nonce")
    }) : y(c.textContent.replace(It, ""), c, u))
  }
  return t
 }

 function Ft(t, e, n) {
  for (var i, r = e ? b.filter(e, t) : t, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || b.cleanData(gt(i)), i.parentNode && (n && at(i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
  return t
 }
 b.extend({
  htmlPrefilter: function(t) {
   return t.replace(Lt, "<$1></$2>")
  },
  clone: function(t, e, n) {
   var i, r, a, o, s, l, c, u = t.cloneNode(!0),
    h = at(t);
   if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || b.isXMLDoc(t)))
    for (o = gt(u), i = 0, r = (a = gt(t)).length; i < r; i++) s = a[i], "input" === (c = (l = o[i]).nodeName.toLowerCase()) && pt.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
   if (e)
    if (n)
     for (a = a || gt(t), o = o || gt(u), i = 0, r = a.length; i < r; i++) Bt(a[i], o[i]);
    else Bt(t, u);
   return 0 < (o = gt(u, "script")).length && vt(o, !h && gt(t, "script")), u
  },
  cleanData: function(t) {
   for (var e, n, i, r = b.event.special, a = 0; void 0 !== (n = t[a]); a++)
    if (Y(n)) {
     if (e = n[J.expando]) {
      if (e.events)
       for (i in e.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, e.handle);
      n[J.expando] = void 0
     }
     n[$.expando] && (n[$.expando] = void 0)
    }
  }
 }), b.fn.extend({
  detach: function(t) {
   return Ft(this, t, !0)
  },
  remove: function(t) {
   return Ft(this, t)
  },
  text: function(t) {
   return j(this, (function(t) {
    return void 0 === t ? b.text(this) : this.empty().each((function() {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
    }))
   }), null, t, arguments.length)
  },
  append: function() {
   return kt(this, arguments, (function(t) {
    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dt(this, t).appendChild(t)
   }))
  },
  prepend: function() {
   return kt(this, arguments, (function(t) {
    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
     var e = Dt(this, t);
     e.insertBefore(t, e.firstChild)
    }
   }))
  },
  before: function() {
   return kt(this, arguments, (function(t) {
    this.parentNode && this.parentNode.insertBefore(t, this)
   }))
  },
  after: function() {
   return kt(this, arguments, (function(t) {
    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
   }))
  },
  empty: function() {
   for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(gt(t, !1)), t.textContent = "");
   return this
  },
  clone: function(t, e) {
   return t = null != t && t, e = null == e ? t : e, this.map((function() {
    return b.clone(this, t, e)
   }))
  },
  html: function(t) {
   return j(this, (function(t) {
    var e = this[0] || {},
     n = 0,
     i = this.length;
    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
    if ("string" == typeof t && !Rt.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
     t = b.htmlPrefilter(t);
     try {
      for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (b.cleanData(gt(e, !1)), e.innerHTML = t);
      e = 0
     } catch (t) {}
    }
    e && this.empty().append(t)
   }), null, t, arguments.length)
  },
  replaceWith: function() {
   var t = [];
   return kt(this, arguments, (function(e) {
    var n = this.parentNode;
    b.inArray(this, t) < 0 && (b.cleanData(gt(this)), n && n.replaceChild(e, this))
   }), t)
  }
 }), b.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
 }, (function(t, e) {
  b.fn[t] = function(t) {
   for (var n, i = [], r = b(t), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), b(r[o])[e](n), s.apply(i, n.get());
   return this.pushStack(i)
  }
 }));
 var Ut = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
  Ht = function(e) {
   var n = e.ownerDocument.defaultView;
   return n && n.opener || (n = t), n.getComputedStyle(e)
  },
  Gt = new RegExp(it.join("|"), "i");

 function jt(t, e, n) {
  var i, r, a, o, s = t.style;
  return (n = n || Ht(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || at(t) || (o = b.style(t, e)), !f.pixelBoxStyles() && Ut.test(o) && Gt.test(e) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a)), void 0 !== o ? o + "" : o
 }

 function Vt(t, e) {
  return {
   get: function() {
    if (!t()) return (this.get = e).apply(this, arguments);
    delete this.get
   }
  }
 }! function() {
  function e() {
   if (u) {
    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(u);
    var e = t.getComputedStyle(u);
    r = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", s = 36 === n(e.right), a = 36 === n(e.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), rt.removeChild(c), u = null
   }
  }

  function n(t) {
   return Math.round(parseFloat(t))
  }
  var r, a, o, s, l, c = i.createElement("div"),
   u = i.createElement("div");
  u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, b.extend(f, {
   boxSizingReliable: function() {
    return e(), a
   },
   pixelBoxStyles: function() {
    return e(), s
   },
   pixelPosition: function() {
    return e(), r
   },
   reliableMarginLeft: function() {
    return e(), l
   },
   scrollboxSize: function() {
    return e(), o
   }
  }))
 }();
 var Wt = ["Webkit", "Moz", "ms"],
  qt = i.createElement("div").style,
  Xt = {};

 function Yt(t) {
  return b.cssProps[t] || Xt[t] || (t in qt ? t : Xt[t] = function(t) {
   for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--;)
    if ((t = Wt[n] + e) in qt) return t
  }(t) || t)
 }
 var Zt = /^(none|table(?!-c[ea]).+)/,
  Jt = /^--/,
  $t = {
   position: "absolute",
   visibility: "hidden",
   display: "block"
  },
  Qt = {
   letterSpacing: "0",
   fontWeight: "400"
  };

 function Kt(t, e, n) {
  var i = nt.exec(e);
  return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
 }

 function te(t, e, n, i, r, a) {
  var o = "width" === e ? 1 : 0,
   s = 0,
   l = 0;
  if (n === (i ? "border" : "content")) return 0;
  for (; o < 4; o += 2) "margin" === n && (l += b.css(t, n + it[o], !0, r)), i ? ("content" === n && (l -= b.css(t, "padding" + it[o], !0, r)), "margin" !== n && (l -= b.css(t, "border" + it[o] + "Width", !0, r))) : (l += b.css(t, "padding" + it[o], !0, r), "padding" !== n ? l += b.css(t, "border" + it[o] + "Width", !0, r) : s += b.css(t, "border" + it[o] + "Width", !0, r));
  return !i && 0 <= a && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - a - l - s - .5)) || 0), l
 }

 function ee(t, e, n) {
  var i = Ht(t),
   r = (!f.boxSizingReliable() || n) && "border-box" === b.css(t, "boxSizing", !1, i),
   a = r,
   o = jt(t, e, i),
   s = "offset" + e[0].toUpperCase() + e.slice(1);
  if (Ut.test(o)) {
   if (!n) return o;
   o = "auto"
  }
  return (!f.boxSizingReliable() && r || "auto" === o || !parseFloat(o) && "inline" === b.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === b.css(t, "boxSizing", !1, i), (a = s in t) && (o = t[s])), (o = parseFloat(o) || 0) + te(t, e, n || (r ? "border" : "content"), a, i, o) + "px"
 }

 function ne(t, e, n, i, r) {
  return new ne.prototype.init(t, e, n, i, r)
 }
 b.extend({
  cssHooks: {
   opacity: {
    get: function(t, e) {
     if (e) {
      var n = jt(t, "opacity");
      return "" === n ? "1" : n
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
  style: function(t, e, n, i) {
   if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
    var r, a, o, s = X(e),
     l = Jt.test(e),
     c = t.style;
    if (l || (e = Yt(s)), o = b.cssHooks[e] || b.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
    "string" == (a = typeof n) && (r = nt.exec(n)) && r[1] && (n = ct(t, e, r), a = "number"), null != n && n == n && ("number" !== a || l || (n += r && r[3] || (b.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
   }
  },
  css: function(t, e, n, i) {
   var r, a, o, s = X(e);
   return Jt.test(e) || (e = Yt(s)), (o = b.cssHooks[e] || b.cssHooks[s]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = jt(t, e, i)), "normal" === r && e in Qt && (r = Qt[e]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
  }
 }), b.each(["height", "width"], (function(t, e) {
  b.cssHooks[e] = {
   get: function(t, n, i) {
    if (n) return !Zt.test(b.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, i) : lt(t, $t, (function() {
     return ee(t, e, i)
    }))
   },
   set: function(t, n, i) {
    var r, a = Ht(t),
     o = !f.scrollboxSize() && "absolute" === a.position,
     s = (o || i) && "border-box" === b.css(t, "boxSizing", !1, a),
     l = i ? te(t, e, i, s, a) : 0;
    return s && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(a[e]) - te(t, e, "border", !1, a) - .5)), l && (r = nt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = b.css(t, e)), Kt(0, n, l)
   }
  }
 })), b.cssHooks.marginLeft = Vt(f.reliableMarginLeft, (function(t, e) {
  if (e) return (parseFloat(jt(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, {
   marginLeft: 0
  }, (function() {
   return t.getBoundingClientRect().left
  }))) + "px"
 })), b.each({
  margin: "",
  padding: "",
  border: "Width"
 }, (function(t, e) {
  b.cssHooks[t + e] = {
   expand: function(n) {
    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + it[i] + e] = a[i] || a[i - 2] || a[0];
    return r
   }
  }, "margin" !== t && (b.cssHooks[t + e].set = Kt)
 })), b.fn.extend({
  css: function(t, e) {
   return j(this, (function(t, e, n) {
    var i, r, a = {},
     o = 0;
    if (Array.isArray(e)) {
     for (i = Ht(t), r = e.length; o < r; o++) a[e[o]] = b.css(t, e[o], !1, i);
     return a
    }
    return void 0 !== n ? b.style(t, e, n) : b.css(t, e)
   }), t, e, 1 < arguments.length)
  }
 }), ((b.Tween = ne).prototype = {
  constructor: ne,
  init: function(t, e, n, i, r, a) {
   this.elem = t, this.prop = n, this.easing = r || b.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (b.cssNumber[n] ? "" : "px")
  },
  cur: function() {
   var t = ne.propHooks[this.prop];
   return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
  },
  run: function(t) {
   var e, n = ne.propHooks[this.prop];
   return this.options.duration ? this.pos = e = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this
  }
 }).init.prototype = ne.prototype, (ne.propHooks = {
  _default: {
   get: function(t) {
    var e;
    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
   },
   set: function(t) {
    b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !b.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : b.style(t.elem, t.prop, t.now + t.unit)
   }
  }
 }).scrollTop = ne.propHooks.scrollLeft = {
  set: function(t) {
   t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
  }
 }, b.easing = {
  linear: function(t) {
   return t
  },
  swing: function(t) {
   return .5 - Math.cos(t * Math.PI) / 2
  },
  _default: "swing"
 }, b.fx = ne.prototype.init, b.fx.step = {};
 var ie, re, ae, oe, se = /^(?:toggle|show|hide)$/,
  le = /queueHooks$/;

 function ce() {
  re && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ce) : t.setTimeout(ce, b.fx.interval), b.fx.tick())
 }

 function ue() {
  return t.setTimeout((function() {
   ie = void 0
  })), ie = Date.now()
 }

 function he(t, e) {
  var n, i = 0,
   r = {
    height: t
   };
  for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = it[i])] = r["padding" + n] = t;
  return e && (r.opacity = r.width = t), r
 }

 function pe(t, e, n) {
  for (var i, r = (de.tweeners[e] || []).concat(de.tweeners["*"]), a = 0, o = r.length; a < o; a++)
   if (i = r[a].call(n, e, t)) return i
 }

 function de(t, e, n) {
  var i, r, a = 0,
   o = de.prefilters.length,
   s = b.Deferred().always((function() {
    delete l.elem
   })),
   l = function() {
    if (r) return !1;
    for (var e = ie || ue(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(i);
    return s.notifyWith(t, [c, i, n]), i < 1 && o ? n : (o || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
   },
   c = s.promise({
    elem: t,
    props: b.extend({}, e),
    opts: b.extend(!0, {
     specialEasing: {},
     easing: b.easing._default
    }, n),
    originalProperties: e,
    originalOptions: n,
    startTime: ie || ue(),
    duration: n.duration,
    tweens: [],
    createTween: function(e, n) {
     var i = b.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
     return c.tweens.push(i), i
    },
    stop: function(e) {
     var n = 0,
      i = e ? c.tweens.length : 0;
     if (r) return this;
     for (r = !0; n < i; n++) c.tweens[n].run(1);
     return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
    }
   }),
   u = c.props;
  for (function(t, e) {
    var n, i, r, a, o;
    for (n in t)
     if (r = e[i = X(n)], a = t[n], Array.isArray(a) && (r = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), (o = b.cssHooks[i]) && "expand" in o)
      for (n in a = o.expand(a), delete t[i], a) n in t || (t[n] = a[n], e[n] = r);
     else e[i] = r
   }(u, c.opts.specialEasing); a < o; a++)
   if (i = de.prefilters[a].call(c, t, u, c.opts)) return m(i.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
  return b.map(u, pe, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), b.fx.timer(b.extend(l, {
   elem: t,
   anim: c,
   queue: c.opts.queue
  })), c
 }
 b.Animation = b.extend(de, {
  tweeners: {
   "*": [function(t, e) {
    var n = this.createTween(t, e);
    return ct(n.elem, t, nt.exec(e), n), n
   }]
  },
  tweener: function(t, e) {
   m(t) ? (e = t, t = ["*"]) : t = t.match(z);
   for (var n, i = 0, r = t.length; i < r; i++) n = t[i], de.tweeners[n] = de.tweeners[n] || [], de.tweeners[n].unshift(e)
  },
  prefilters: [function(t, e, n) {
   var i, r, a, o, s, l, c, u, h = "width" in e || "height" in e,
    p = this,
    d = {},
    f = t.style,
    m = t.nodeType && st(t),
    g = J.get(t, "fxshow");
   for (i in n.queue || (null == (o = b._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
     o.unqueued || s()
    }), o.unqueued++, p.always((function() {
     p.always((function() {
      o.unqueued--, b.queue(t, "fx").length || o.empty.fire()
     }))
    }))), e)
    if (r = e[i], se.test(r)) {
     if (delete e[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
      if ("show" !== r || !g || void 0 === g[i]) continue;
      m = !0
     }
     d[i] = g && g[i] || b.style(t, i)
    } if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(d))
    for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = J.get(t, "display")), "none" === (u = b.css(t, "display")) && (c ? u = c : (ht([t], !0), c = t.style.display || c, u = b.css(t, "display"), ht([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === b.css(t, "float") && (l || (p.done((function() {
      f.display = c
     })), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function() {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
     }))), l = !1, d) l || (g ? "hidden" in g && (m = g.hidden) : g = J.access(t, "fxshow", {
     display: c
    }), a && (g.hidden = !m), m && ht([t], !0), p.done((function() {
     for (i in m || ht([t]), J.remove(t, "fxshow"), d) b.style(t, i, d[i])
    }))), l = pe(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
  }],
  prefilter: function(t, e) {
   e ? de.prefilters.unshift(t) : de.prefilters.push(t)
  }
 }), b.speed = function(t, e, n) {
  var i = t && "object" == typeof t ? b.extend({}, t) : {
   complete: n || !n && e || m(t) && t,
   duration: t,
   easing: n && e || e && !m(e) && e
  };
  return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in b.fx.speeds ? i.duration = b.fx.speeds[i.duration] : i.duration = b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
   m(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
  }, i
 }, b.fn.extend({
  fadeTo: function(t, e, n, i) {
   return this.filter(st).css("opacity", 0).show().end().animate({
    opacity: e
   }, t, n, i)
  },
  animate: function(t, e, n, i) {
   var r = b.isEmptyObject(t),
    a = b.speed(e, n, i),
    o = function() {
     var e = de(this, b.extend({}, t), a);
     (r || J.get(this, "finish")) && e.stop(!0)
    };
   return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
  },
  stop: function(t, e, n) {
   var i = function(t) {
    var e = t.stop;
    delete t.stop, e(n)
   };
   return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() {
    var e = !0,
     r = null != t && t + "queueHooks",
     a = b.timers,
     o = J.get(this);
    if (r) o[r] && o[r].stop && i(o[r]);
    else
     for (r in o) o[r] && o[r].stop && le.test(r) && i(o[r]);
    for (r = a.length; r--;) a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(n), e = !1, a.splice(r, 1));
    !e && n || b.dequeue(this, t)
   }))
  },
  finish: function(t) {
   return !1 !== t && (t = t || "fx"), this.each((function() {
    var e, n = J.get(this),
     i = n[t + "queue"],
     r = n[t + "queueHooks"],
     a = b.timers,
     o = i ? i.length : 0;
    for (n.finish = !0, b.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
    for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
    delete n.finish
   }))
  }
 }), b.each(["toggle", "show", "hide"], (function(t, e) {
  var n = b.fn[e];
  b.fn[e] = function(t, i, r) {
   return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(he(e, !0), t, i, r)
  }
 })), b.each({
  slideDown: he("show"),
  slideUp: he("hide"),
  slideToggle: he("toggle"),
  fadeIn: {
   opacity: "show"
  },
  fadeOut: {
   opacity: "hide"
  },
  fadeToggle: {
   opacity: "toggle"
  }
 }, (function(t, e) {
  b.fn[t] = function(t, n, i) {
   return this.animate(e, t, n, i)
  }
 })), b.timers = [], b.fx.tick = function() {
  var t, e = 0,
   n = b.timers;
  for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
  n.length || b.fx.stop(), ie = void 0
 }, b.fx.timer = function(t) {
  b.timers.push(t), b.fx.start()
 }, b.fx.interval = 13, b.fx.start = function() {
  re || (re = !0, ce())
 }, b.fx.stop = function() {
  re = null
 }, b.fx.speeds = {
  slow: 600,
  fast: 200,
  _default: 400
 }, b.fn.delay = function(e, n) {
  return e = b.fx && b.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, i) {
   var r = t.setTimeout(n, e);
   i.stop = function() {
    t.clearTimeout(r)
   }
  }))
 }, ae = i.createElement("input"), oe = i.createElement("select").appendChild(i.createElement("option")), ae.type = "checkbox", f.checkOn = "" !== ae.value, f.optSelected = oe.selected, (ae = i.createElement("input")).value = "t", ae.type = "radio", f.radioValue = "t" === ae.value;
 var fe, me = b.expr.attrHandle;
 b.fn.extend({
  attr: function(t, e) {
   return j(this, b.attr, t, e, 1 < arguments.length)
  },
  removeAttr: function(t) {
   return this.each((function() {
    b.removeAttr(this, t)
   }))
  }
 }), b.extend({
  attr: function(t, e, n) {
   var i, r, a = t.nodeType;
   if (3 !== a && 8 !== a && 2 !== a) return void 0 === t.getAttribute ? b.prop(t, e, n) : (1 === a && b.isXMLDoc(t) || (r = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void b.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = b.find.attr(t, e)) ? void 0 : i)
  },
  attrHooks: {
   type: {
    set: function(t, e) {
     if (!f.radioValue && "radio" === e && C(t, "input")) {
      var n = t.value;
      return t.setAttribute("type", e), n && (t.value = n), e
     }
    }
   }
  },
  removeAttr: function(t, e) {
   var n, i = 0,
    r = e && e.match(z);
   if (r && 1 === t.nodeType)
    for (; n = r[i++];) t.removeAttribute(n)
  }
 }), fe = {
  set: function(t, e, n) {
   return !1 === e ? b.removeAttr(t, n) : t.setAttribute(n, n), n
  }
 }, b.each(b.expr.match.bool.source.match(/\w+/g), (function(t, e) {
  var n = me[e] || b.find.attr;
  me[e] = function(t, e, i) {
   var r, a, o = e.toLowerCase();
   return i || (a = me[o], me[o] = r, r = null != n(t, e, i) ? o : null, me[o] = a), r
  }
 }));
 var ge = /^(?:input|select|textarea|button)$/i,
  ve = /^(?:a|area)$/i;

 function ye(t) {
  return (t.match(z) || []).join(" ")
 }

 function xe(t) {
  return t.getAttribute && t.getAttribute("class") || ""
 }

 function _e(t) {
  return Array.isArray(t) ? t : "string" == typeof t && t.match(z) || []
 }
 b.fn.extend({
  prop: function(t, e) {
   return j(this, b.prop, t, e, 1 < arguments.length)
  },
  removeProp: function(t) {
   return this.each((function() {
    delete this[b.propFix[t] || t]
   }))
  }
 }), b.extend({
  prop: function(t, e, n) {
   var i, r, a = t.nodeType;
   if (3 !== a && 8 !== a && 2 !== a) return 1 === a && b.isXMLDoc(t) || (e = b.propFix[e] || e, r = b.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
  },
  propHooks: {
   tabIndex: {
    get: function(t) {
     var e = b.find.attr(t, "tabindex");
     return e ? parseInt(e, 10) : ge.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
    }
   }
  },
  propFix: {
   for: "htmlFor",
   class: "className"
  }
 }), f.optSelected || (b.propHooks.selected = {
  get: function(t) {
   var e = t.parentNode;
   return e && e.parentNode && e.parentNode.selectedIndex, null
  },
  set: function(t) {
   var e = t.parentNode;
   e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
  }
 }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
  b.propFix[this.toLowerCase()] = this
 })), b.fn.extend({
  addClass: function(t) {
   var e, n, i, r, a, o, s, l = 0;
   if (m(t)) return this.each((function(e) {
    b(this).addClass(t.call(this, e, xe(this)))
   }));
   if ((e = _e(t)).length)
    for (; n = this[l++];)
     if (r = xe(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
      for (o = 0; a = e[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
      r !== (s = ye(i)) && n.setAttribute("class", s)
     } return this
  },
  removeClass: function(t) {
   var e, n, i, r, a, o, s, l = 0;
   if (m(t)) return this.each((function(e) {
    b(this).removeClass(t.call(this, e, xe(this)))
   }));
   if (!arguments.length) return this.attr("class", "");
   if ((e = _e(t)).length)
    for (; n = this[l++];)
     if (r = xe(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
      for (o = 0; a = e[o++];)
       for (; - 1 < i.indexOf(" " + a + " ");) i = i.replace(" " + a + " ", " ");
      r !== (s = ye(i)) && n.setAttribute("class", s)
     } return this
  },
  toggleClass: function(t, e) {
   var n = typeof t,
    i = "string" === n || Array.isArray(t);
   return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each((function(n) {
    b(this).toggleClass(t.call(this, n, xe(this), e), e)
   })) : this.each((function() {
    var e, r, a, o;
    if (i)
     for (r = 0, a = b(this), o = _e(t); e = o[r++];) a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
    else void 0 !== t && "boolean" !== n || ((e = xe(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
   }))
  },
  hasClass: function(t) {
   var e, n, i = 0;
   for (e = " " + t + " "; n = this[i++];)
    if (1 === n.nodeType && -1 < (" " + ye(xe(n)) + " ").indexOf(e)) return !0;
   return !1
  }
 });
 var be = /\r/g;
 b.fn.extend({
  val: function(t) {
   var e, n, i, r = this[0];
   return arguments.length ? (i = m(t), this.each((function(n) {
    var r;
    1 === this.nodeType && (null == (r = i ? t.call(this, n, b(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = b.map(r, (function(t) {
     return null == t ? "" : t + ""
    }))), (e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
   }))) : r ? (e = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(be, "") : null == n ? "" : n : void 0
  }
 }), b.extend({
  valHooks: {
   option: {
    get: function(t) {
     var e = b.find.attr(t, "value");
     return null != e ? e : ye(b.text(t))
    }
   },
   select: {
    get: function(t) {
     var e, n, i, r = t.options,
      a = t.selectedIndex,
      o = "select-one" === t.type,
      s = o ? null : [],
      l = o ? a + 1 : r.length;
     for (i = a < 0 ? l : o ? a : 0; i < l; i++)
      if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
       if (e = b(n).val(), o) return e;
       s.push(e)
      } return s
    },
    set: function(t, e) {
     for (var n, i, r = t.options, a = b.makeArray(e), o = r.length; o--;)((i = r[o]).selected = -1 < b.inArray(b.valHooks.option.get(i), a)) && (n = !0);
     return n || (t.selectedIndex = -1), a
    }
   }
  }
 }), b.each(["radio", "checkbox"], (function() {
  b.valHooks[this] = {
   set: function(t, e) {
    if (Array.isArray(e)) return t.checked = -1 < b.inArray(b(t).val(), e)
   }
  }, f.checkOn || (b.valHooks[this].get = function(t) {
   return null === t.getAttribute("value") ? "on" : t.value
  })
 })), f.focusin = "onfocusin" in t;
 var we = /^(?:focusinfocus|focusoutblur)$/,
  Me = function(t) {
   t.stopPropagation()
  };
 b.extend(b.event, {
  trigger: function(e, n, r, a) {
   var o, s, l, c, u, p, d, f, v = [r || i],
    y = h.call(e, "type") ? e.type : e,
    x = h.call(e, "namespace") ? e.namespace.split(".") : [];
   if (s = f = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !we.test(y + b.event.triggered) && (-1 < y.indexOf(".") && (y = (x = y.split(".")).shift(), x.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[b.expando] ? e : new b.Event(y, "object" == typeof e && e)).isTrigger = a ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : b.makeArray(n, [e]), d = b.event.special[y] || {}, a || !d.trigger || !1 !== d.trigger.apply(r, n))) {
    if (!a && !d.noBubble && !g(r)) {
     for (c = d.delegateType || y, we.test(c + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), l = s;
     l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
    }
    for (o = 0;
     (s = v[o++]) && !e.isPropagationStopped();) f = s, e.type = 1 < o ? c : d.bindType || y, (p = (J.get(s, "events") || {})[e.type] && J.get(s, "handle")) && p.apply(s, n), (p = u && s[u]) && p.apply && Y(s) && (e.result = p.apply(s, n), !1 === e.result && e.preventDefault());
    return e.type = y, a || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), b.event.triggered = y, e.isPropagationStopped() && f.addEventListener(y, Me), r[y](), e.isPropagationStopped() && f.removeEventListener(y, Me), b.event.triggered = void 0, l && (r[u] = l)), e.result
   }
  },
  simulate: function(t, e, n) {
   var i = b.extend(new b.Event, n, {
    type: t,
    isSimulated: !0
   });
   b.event.trigger(i, null, e)
  }
 }), b.fn.extend({
  trigger: function(t, e) {
   return this.each((function() {
    b.event.trigger(t, e, this)
   }))
  },
  triggerHandler: function(t, e) {
   var n = this[0];
   if (n) return b.event.trigger(t, e, n, !0)
  }
 }), f.focusin || b.each({
  focus: "focusin",
  blur: "focusout"
 }, (function(t, e) {
  var n = function(t) {
   b.event.simulate(e, t.target, b.event.fix(t))
  };
  b.event.special[e] = {
   setup: function() {
    var i = this.ownerDocument || this,
     r = J.access(i, e);
    r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1)
   },
   teardown: function() {
    var i = this.ownerDocument || this,
     r = J.access(i, e) - 1;
    r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e))
   }
  }
 }));
 var Te = t.location,
  Se = Date.now(),
  Ee = /\?/;
 b.parseXML = function(e) {
  var n;
  if (!e || "string" != typeof e) return null;
  try {
   n = (new t.DOMParser).parseFromString(e, "text/xml")
  } catch (e) {
   n = void 0
  }
  return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), n
 };
 var Ae = /\[\]$/,
  Ce = /\r?\n/g,
  Pe = /^(?:submit|button|image|reset|file)$/i,
  Le = /^(?:input|select|textarea|keygen)/i;

 function Re(t, e, n, i) {
  var r;
  if (Array.isArray(e)) b.each(e, (function(e, r) {
   n || Ae.test(t) ? i(t, r) : Re(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
  }));
  else if (n || "object" !== x(e)) i(t, e);
  else
   for (r in e) Re(t + "[" + r + "]", e[r], n, i)
 }
 b.param = function(t, e) {
  var n, i = [],
   r = function(t, e) {
    var n = m(e) ? e() : e;
    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
   };
  if (null == t) return "";
  if (Array.isArray(t) || t.jquery && !b.isPlainObject(t)) b.each(t, (function() {
   r(this.name, this.value)
  }));
  else
   for (n in t) Re(n, t[n], e, r);
  return i.join("&")
 }, b.fn.extend({
  serialize: function() {
   return b.param(this.serializeArray())
  },
  serializeArray: function() {
   return this.map((function() {
    var t = b.prop(this, "elements");
    return t ? b.makeArray(t) : this
   })).filter((function() {
    var t = this.type;
    return this.name && !b(this).is(":disabled") && Le.test(this.nodeName) && !Pe.test(t) && (this.checked || !pt.test(t))
   })).map((function(t, e) {
    var n = b(this).val();
    return null == n ? null : Array.isArray(n) ? b.map(n, (function(t) {
     return {
      name: e.name,
      value: t.replace(Ce, "\r\n")
     }
    })) : {
     name: e.name,
     value: n.replace(Ce, "\r\n")
    }
   })).get()
  }
 });
 var Oe = /%20/g,
  Ie = /#.*$/,
  De = /([?&])_=[^&]*/,
  Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
  ze = /^(?:GET|HEAD)$/,
  Be = /^\/\//,
  ke = {},
  Fe = {},
  Ue = "*/".concat("*"),
  He = i.createElement("a");

 function Ge(t) {
  return function(e, n) {
   "string" != typeof e && (n = e, e = "*");
   var i, r = 0,
    a = e.toLowerCase().match(z) || [];
   if (m(n))
    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
  }
 }

 function je(t, e, n, i) {
  var r = {},
   a = t === Fe;

  function o(s) {
   var l;
   return r[s] = !0, b.each(t[s] || [], (function(t, s) {
    var c = s(e, n, i);
    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
   })), l
  }
  return o(e.dataTypes[0]) || !r["*"] && o("*")
 }

 function Ve(t, e) {
  var n, i, r = b.ajaxSettings.flatOptions || {};
  for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
  return i && b.extend(!0, t, i), t
 }
 He.href = Te.href, b.extend({
  active: 0,
  lastModified: {},
  etag: {},
  ajaxSettings: {
   url: Te.href,
   type: "GET",
   isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
   global: !0,
   processData: !0,
   async: !0,
   contentType: "application/x-www-form-urlencoded; charset=UTF-8",
   accepts: {
    "*": Ue,
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
    "text xml": b.parseXML
   },
   flatOptions: {
    url: !0,
    context: !0
   }
  },
  ajaxSetup: function(t, e) {
   return e ? Ve(Ve(t, b.ajaxSettings), e) : Ve(b.ajaxSettings, t)
  },
  ajaxPrefilter: Ge(ke),
  ajaxTransport: Ge(Fe),
  ajax: function(e, n) {
   "object" == typeof e && (n = e, e = void 0), n = n || {};
   var r, a, o, s, l, c, u, h, p, d, f = b.ajaxSetup({}, n),
    m = f.context || f,
    g = f.context && (m.nodeType || m.jquery) ? b(m) : b.event,
    v = b.Deferred(),
    y = b.Callbacks("once memory"),
    x = f.statusCode || {},
    _ = {},
    w = {},
    M = "canceled",
    T = {
     readyState: 0,
     getResponseHeader: function(t) {
      var e;
      if (u) {
       if (!s)
        for (s = {}; e = Ne.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
       e = s[t.toLowerCase() + " "]
      }
      return null == e ? null : e.join(", ")
     },
     getAllResponseHeaders: function() {
      return u ? o : null
     },
     setRequestHeader: function(t, e) {
      return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, _[t] = e), this
     },
     overrideMimeType: function(t) {
      return null == u && (f.mimeType = t), this
     },
     statusCode: function(t) {
      var e;
      if (t)
       if (u) T.always(t[T.status]);
       else
        for (e in t) x[e] = [x[e], t[e]];
      return this
     },
     abort: function(t) {
      var e = t || M;
      return r && r.abort(e), S(0, e), this
     }
    };
   if (v.promise(T), f.url = ((e || f.url || Te.href) + "").replace(Be, Te.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [""], null == f.crossDomain) {
    c = i.createElement("a");
    try {
     c.href = f.url, c.href = c.href, f.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host
    } catch (e) {
     f.crossDomain = !0
    }
   }
   if (f.data && f.processData && "string" != typeof f.data && (f.data = b.param(f.data, f.traditional)), je(ke, f, n, T), u) return T;
   for (p in (h = b.event && f.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ze.test(f.type), a = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Oe, "+")) : (d = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (Ee.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(De, "$1"), d = (Ee.test(a) ? "&" : "?") + "_=" + Se++ + d), f.url = a + d), f.ifModified && (b.lastModified[a] && T.setRequestHeader("If-Modified-Since", b.lastModified[a]), b.etag[a] && T.setRequestHeader("If-None-Match", b.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(p, f.headers[p]);
   if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || u)) return T.abort();
   if (M = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), r = je(Fe, f, n, T)) {
    if (T.readyState = 1, h && g.trigger("ajaxSend", [T, f]), u) return T;
    f.async && 0 < f.timeout && (l = t.setTimeout((function() {
     T.abort("timeout")
    }), f.timeout));
    try {
     u = !1, r.send(_, S)
    } catch (e) {
     if (u) throw e;
     S(-1, e)
    }
   } else S(-1, "No Transport");

   function S(e, n, i, s) {
    var c, p, d, _, w, M = n;
    u || (u = !0, l && t.clearTimeout(l), r = void 0, o = s || "", T.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, i && (_ = function(t, e, n) {
     for (var i, r, a, o, s = t.contents, l = t.dataTypes;
      "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
     if (i)
      for (r in s)
       if (s[r] && s[r].test(i)) {
        l.unshift(r);
        break
       } if (l[0] in n) a = l[0];
     else {
      for (r in n) {
       if (!l[0] || t.converters[r + " " + l[0]]) {
        a = r;
        break
       }
       o || (o = r)
      }
      a = a || o
     }
     if (a) return a !== l[0] && l.unshift(a), n[a]
    }(f, T, i)), _ = function(t, e, n, i) {
     var r, a, o, s, l, c = {},
      u = t.dataTypes.slice();
     if (u[1])
      for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
     for (a = u.shift(); a;)
      if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = u.shift())
       if ("*" === a) a = l;
       else if ("*" !== l && l !== a) {
      if (!(o = c[l + " " + a] || c["* " + a]))
       for (r in c)
        if ((s = r.split(" "))[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
         !0 === o ? o = c[r] : !0 !== c[r] && (a = s[0], u.unshift(s[1]));
         break
        } if (!0 !== o)
       if (o && t.throws) e = o(e);
       else try {
        e = o(e)
       } catch (t) {
        return {
         state: "parsererror",
         error: o ? t : "No conversion from " + l + " to " + a
        }
       }
     }
     return {
      state: "success",
      data: e
     }
    }(f, _, T, c), c ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (b.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (b.etag[a] = w)), 204 === e || "HEAD" === f.type ? M = "nocontent" : 304 === e ? M = "notmodified" : (M = _.state, p = _.data, c = !(d = _.error))) : (d = M, !e && M || (M = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || M) + "", c ? v.resolveWith(m, [p, M, T]) : v.rejectWith(m, [T, M, d]), T.statusCode(x), x = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? p : d]), y.fireWith(m, [T, M]), h && (g.trigger("ajaxComplete", [T, f]), --b.active || b.event.trigger("ajaxStop")))
   }
   return T
  },
  getJSON: function(t, e, n) {
   return b.get(t, e, n, "json")
  },
  getScript: function(t, e) {
   return b.get(t, void 0, e, "script")
  }
 }), b.each(["get", "post"], (function(t, e) {
  b[e] = function(t, n, i, r) {
   return m(n) && (r = r || i, i = n, n = void 0), b.ajax(b.extend({
    url: t,
    type: e,
    dataType: r,
    data: n,
    success: i
   }, b.isPlainObject(t) && t))
  }
 })), b._evalUrl = function(t, e) {
  return b.ajax({
   url: t,
   type: "GET",
   dataType: "script",
   cache: !0,
   async: !1,
   global: !1,
   converters: {
    "text script": function() {}
   },
   dataFilter: function(t) {
    b.globalEval(t, e)
   }
  })
 }, b.fn.extend({
  wrapAll: function(t) {
   var e;
   return this[0] && (m(t) && (t = t.call(this[0])), e = b(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
    return t
   })).append(this)), this
  },
  wrapInner: function(t) {
   return m(t) ? this.each((function(e) {
    b(this).wrapInner(t.call(this, e))
   })) : this.each((function() {
    var e = b(this),
     n = e.contents();
    n.length ? n.wrapAll(t) : e.append(t)
   }))
  },
  wrap: function(t) {
   var e = m(t);
   return this.each((function(n) {
    b(this).wrapAll(e ? t.call(this, n) : t)
   }))
  },
  unwrap: function(t) {
   return this.parent(t).not("body").each((function() {
    b(this).replaceWith(this.childNodes)
   })), this
  }
 }), b.expr.pseudos.hidden = function(t) {
  return !b.expr.pseudos.visible(t)
 }, b.expr.pseudos.visible = function(t) {
  return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
 }, b.ajaxSettings.xhr = function() {
  try {
   return new t.XMLHttpRequest
  } catch (t) {}
 };
 var We = {
   0: 200,
   1223: 204
  },
  qe = b.ajaxSettings.xhr();
 f.cors = !!qe && "withCredentials" in qe, f.ajax = qe = !!qe, b.ajaxTransport((function(e) {
  var n, i;
  if (f.cors || qe && !e.crossDomain) return {
   send: function(r, a) {
    var o, s = e.xhr();
    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
     for (o in e.xhrFields) s[o] = e.xhrFields[o];
    for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(o, r[o]);
    n = function(t) {
     return function() {
      n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(We[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
       binary: s.response
      } : {
       text: s.responseText
      }, s.getAllResponseHeaders()))
     }
    }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
     4 === s.readyState && t.setTimeout((function() {
      n && i()
     }))
    }, n = n("abort");
    try {
     s.send(e.hasContent && e.data || null)
    } catch (r) {
     if (n) throw r
    }
   },
   abort: function() {
    n && n()
   }
  }
 })), b.ajaxPrefilter((function(t) {
  t.crossDomain && (t.contents.script = !1)
 })), b.ajaxSetup({
  accepts: {
   script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
   script: /\b(?:java|ecma)script\b/
  },
  converters: {
   "text script": function(t) {
    return b.globalEval(t), t
   }
  }
 }), b.ajaxPrefilter("script", (function(t) {
  void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
 })), b.ajaxTransport("script", (function(t) {
  var e, n;
  if (t.crossDomain || t.scriptAttrs) return {
   send: function(r, a) {
    e = b("<script>").attr(t.scriptAttrs || {}).prop({
     charset: t.scriptCharset,
     src: t.url
    }).on("load error", n = function(t) {
     e.remove(), n = null, t && a("error" === t.type ? 404 : 200, t.type)
    }), i.head.appendChild(e[0])
   },
   abort: function() {
    n && n()
   }
  }
 }));
 var Xe, Ye = [],
  Ze = /(=)\?(?=&|$)|\?\?/;
 b.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
   var t = Ye.pop() || b.expando + "_" + Se++;
   return this[t] = !0, t
  }
 }), b.ajaxPrefilter("json jsonp", (function(e, n, i) {
  var r, a, o, s = !1 !== e.jsonp && (Ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(e.data) && "data");
  if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ze, "$1" + r) : !1 !== e.jsonp && (e.url += (Ee.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
   return o || b.error(r + " was not called"), o[0]
  }, e.dataTypes[0] = "json", a = t[r], t[r] = function() {
   o = arguments
  }, i.always((function() {
   void 0 === a ? b(t).removeProp(r) : t[r] = a, e[r] && (e.jsonpCallback = n.jsonpCallback, Ye.push(r)), o && m(a) && a(o[0]), o = a = void 0
  })), "script"
 })), f.createHTMLDocument = ((Xe = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), b.parseHTML = function(t, e, n) {
  return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(r)) : e = i), o = !n && [], (a = P.exec(t)) ? [e.createElement(a[1])] : (a = bt([t], e, o), o && o.length && b(o).remove(), b.merge([], a.childNodes)));
  var r, a, o
 }, b.fn.load = function(t, e, n) {
  var i, r, a, o = this,
   s = t.indexOf(" ");
  return -1 < s && (i = ye(t.slice(s)), t = t.slice(0, s)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && b.ajax({
   url: t,
   type: r || "GET",
   dataType: "html",
   data: e
  }).done((function(t) {
   a = arguments, o.html(i ? b("<div>").append(b.parseHTML(t)).find(i) : t)
  })).always(n && function(t, e) {
   o.each((function() {
    n.apply(this, a || [t.responseText, e, t])
   }))
  }), this
 }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
  b.fn[e] = function(t) {
   return this.on(e, t)
  }
 })), b.expr.pseudos.animated = function(t) {
  return b.grep(b.timers, (function(e) {
   return t === e.elem
  })).length
 }, b.offset = {
  setOffset: function(t, e, n) {
   var i, r, a, o, s, l, c = b.css(t, "position"),
    u = b(t),
    h = {};
   "static" === c && (t.style.position = "relative"), s = u.offset(), a = b.css(t, "top"), l = b.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (a + l).indexOf("auto") ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), m(e) && (e = e.call(t, n, b.extend({}, s))), null != e.top && (h.top = e.top - s.top + o), null != e.left && (h.left = e.left - s.left + r), "using" in e ? e.using.call(t, h) : u.css(h)
  }
 }, b.fn.extend({
  offset: function(t) {
   if (arguments.length) return void 0 === t ? this : this.each((function(e) {
    b.offset.setOffset(this, t, e)
   }));
   var e, n, i = this[0];
   return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
    top: e.top + n.pageYOffset,
    left: e.left + n.pageXOffset
   }) : {
    top: 0,
    left: 0
   } : void 0
  },
  position: function() {
   if (this[0]) {
    var t, e, n, i = this[0],
     r = {
      top: 0,
      left: 0
     };
    if ("fixed" === b.css(i, "position")) e = i.getBoundingClientRect();
    else {
     for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === b.css(t, "position");) t = t.parentNode;
     t && t !== i && 1 === t.nodeType && ((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0), r.left += b.css(t, "borderLeftWidth", !0))
    }
    return {
     top: e.top - r.top - b.css(i, "marginTop", !0),
     left: e.left - r.left - b.css(i, "marginLeft", !0)
    }
   }
  },
  offsetParent: function() {
   return this.map((function() {
    for (var t = this.offsetParent; t && "static" === b.css(t, "position");) t = t.offsetParent;
    return t || rt
   }))
  }
 }), b.each({
  scrollLeft: "pageXOffset",
  scrollTop: "pageYOffset"
 }, (function(t, e) {
  var n = "pageYOffset" === e;
  b.fn[t] = function(i) {
   return j(this, (function(t, i, r) {
    var a;
    if (g(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === r) return a ? a[e] : t[i];
    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : t[i] = r
   }), t, i, arguments.length)
  }
 })), b.each(["top", "left"], (function(t, e) {
  b.cssHooks[e] = Vt(f.pixelPosition, (function(t, n) {
   if (n) return n = jt(t, e), Ut.test(n) ? b(t).position()[e] + "px" : n
  }))
 })), b.each({
  Height: "height",
  Width: "width"
 }, (function(t, e) {
  b.each({
   padding: "inner" + t,
   content: e,
   "": "outer" + t
  }, (function(n, i) {
   b.fn[i] = function(r, a) {
    var o = arguments.length && (n || "boolean" != typeof r),
     s = n || (!0 === r || !0 === a ? "margin" : "border");
    return j(this, (function(e, n, r) {
     var a;
     return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === r ? b.css(e, n, s) : b.style(e, n, r, s)
    }), e, o ? r : void 0, o)
   }
  }))
 })), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
  b.fn[e] = function(t, n) {
   return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
  }
 })), b.fn.extend({
  hover: function(t, e) {
   return this.mouseenter(t).mouseleave(e || t)
  }
 }), b.fn.extend({
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
 }), b.proxy = function(t, e) {
  var n, i, r;
  if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = a.call(arguments, 2), (r = function() {
   return t.apply(e || this, i.concat(a.call(arguments)))
  }).guid = t.guid = t.guid || b.guid++, r
 }, b.holdReady = function(t) {
  t ? b.readyWait++ : b.ready(!0)
 }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = C, b.isFunction = m, b.isWindow = g, b.camelCase = X, b.type = x, b.now = Date.now, b.isNumeric = function(t) {
  var e = b.type(t);
  return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
 }, "function" == typeof define && define.amd && define("jquery", [], (function() {
  return b
 }));
 var Je = t.jQuery,
  $e = t.$;
 return b.noConflict = function(e) {
  return t.$ === b && (t.$ = $e), e && t.jQuery === b && (t.jQuery = Je), b
 }, e || (t.jQuery = t.$ = b), b
})),
function(t, e) {
 "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
 function t() {}
 var e = t.prototype;
 return e.on = function(t, e) {
  if (t && e) {
   var n = this._events = this._events || {},
    i = n[t] = n[t] || [];
   return -1 == i.indexOf(e) && i.push(e), this
  }
 }, e.once = function(t, e) {
  if (t && e) {
   this.on(t, e);
   var n = this._onceEvents = this._onceEvents || {};
   return (n[t] = n[t] || {})[e] = !0, this
  }
 }, e.off = function(t, e) {
  var n = this._events && this._events[t];
  if (n && n.length) {
   var i = n.indexOf(e);
   return -1 != i && n.splice(i, 1), this
  }
 }, e.emitEvent = function(t, e) {
  var n = this._events && this._events[t];
  if (n && n.length) {
   var i = 0,
    r = n[i];
   e = e || [];
   for (var a = this._onceEvents && this._onceEvents[t]; r;) {
    var o = a && a[r];
    o && (this.off(t, r), delete a[r]), r.apply(this, e), r = n[i += o ? 0 : 1]
   }
   return this
  }
 }, t
})),
function(t, e) {
 "use strict";
 "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(n) {
  return e(t, n)
 })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, (function(t, e) {
 function n(t, e) {
  for (var n in e) t[n] = e[n];
  return t
 }

 function i(t, e, r) {
  return this instanceof i ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
   var e = [];
   if (Array.isArray(t)) e = t;
   else if ("number" == typeof t.length)
    for (var n = 0; n < t.length; n++) e.push(t[n]);
   else e.push(t);
   return e
  }(t), this.options = n({}, this.options), "function" == typeof e ? r = e : n(this.options, e), r && this.on("always", r), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(function() {
   this.check()
  }.bind(this))) : new i(t, e, r)
 }

 function r(t) {
  this.img = t
 }

 function a(t, e) {
  this.url = t, this.element = e, this.img = new Image
 }
 var o = t.jQuery,
  s = t.console;
 i.prototype = Object.create(e.prototype), i.prototype.options = {}, i.prototype.getImages = function() {
  this.images = [], this.elements.forEach(this.addElementImages, this)
 }, i.prototype.addElementImages = function(t) {
  "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
  var e = t.nodeType;
  if (e && l[e]) {
   for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
    var r = n[i];
    this.addImage(r)
   }
   if ("string" == typeof this.options.background) {
    var a = t.querySelectorAll(this.options.background);
    for (i = 0; i < a.length; i++) {
     var o = a[i];
     this.addElementBackgroundImages(o)
    }
   }
  }
 };
 var l = {
  1: !0,
  9: !0,
  11: !0
 };
 return i.prototype.addElementBackgroundImages = function(t) {
  var e = getComputedStyle(t);
  if (e)
   for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
    var r = i && i[2];
    r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
   }
 }, i.prototype.addImage = function(t) {
  var e = new r(t);
  this.images.push(e)
 }, i.prototype.addBackground = function(t, e) {
  var n = new a(t, e);
  this.images.push(n)
 }, i.prototype.check = function() {
  function t(t, n, i) {
   setTimeout((function() {
    e.progress(t, n, i)
   }))
  }
  var e = this;
  return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach((function(e) {
   e.once("progress", t), e.check()
  })) : void this.complete()
 }, i.prototype.progress = function(t, e, n) {
  this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + n, t, e)
 }, i.prototype.complete = function() {
  var t = this.hasAnyBroken ? "fail" : "done";
  if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
   var e = this.hasAnyBroken ? "reject" : "resolve";
   this.jqDeferred[e](this)
  }
 }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
  return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
 }, r.prototype.getIsImageComplete = function() {
  return this.img.complete && void 0 !== this.img.naturalWidth
 }, r.prototype.confirm = function(t, e) {
  this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
 }, r.prototype.handleEvent = function(t) {
  var e = "on" + t.type;
  this[e] && this[e](t)
 }, r.prototype.onload = function() {
  this.confirm(!0, "onload"), this.unbindEvents()
 }, r.prototype.onerror = function() {
  this.confirm(!1, "onerror"), this.unbindEvents()
 }, r.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
 }, a.prototype = Object.create(r.prototype), a.prototype.check = function() {
  this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
 }, a.prototype.unbindEvents = function() {
  this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
 }, a.prototype.confirm = function(t, e) {
  this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
 }, i.makeJQueryPlugin = function(e) {
  (e = e || t.jQuery) && ((o = e).fn.imagesLoaded = function(t, e) {
   return new i(this, t, e).jqDeferred.promise(o(this))
  })
 }, i.makeJQueryPlugin(), i
}));
const math = {
  lerp: (t, e, n) => (1 - n) * t + n * e,
  norm: (t, e, n) => (t - e) / (n - e)
 },
 config = {
  height: window.innerHeight,
  width: window.innerWidth
 };
class Smooth {
 constructor() {
  this.bindMethods(), this.data = {
   ease: .1,
   current: 0,
   last: 0
  }, this.dom = {
   el: document.querySelector("[data-scroll]"),
   content: document.querySelector("[data-scroll-content]")
  }, this.rAF = null, this.init()
 }
 bindMethods() {
  ["scroll", "run", "resize"].forEach(t => this[t] = this[t].bind(this))
 }
 setStyles() {
  Object.assign(this.dom.el.style, {
   position: "fixed",
   top: 0,
   left: 0,
   height: "100%",
   width: "100%",
   overflow: "hidden"
  })
 }
 setHeight() {
  document.body.style.height = `${this.dom.content.offsetHeight}px`
 }
 resize() {
  this.setHeight(), this.scroll()
 }
 preload() {
  imagesLoaded(this.dom.content, t => {
   this.setHeight()
  })
 }
 scroll() {
  this.data.current = window.scrollY
 }
 run() {
  this.data.last = math.lerp(this.data.last, this.data.current, this.data.ease), this.data.last < .1 && (this.data.last = 0);
  const t = 7.5 * +((this.data.current - this.data.last) / config.width);
  this.dom.content.style.transform = `translate3d(0, -${this.data.last}px, 0) skewY(${t}deg)`, this.requestAnimationFrame()
 }
 on() {
  this.setStyles(), this.setHeight(), this.addEvents(), this.requestAnimationFrame()
 }
 off() {
  this.cancelAnimationFrame(), this.removeEvents()
 }
 requestAnimationFrame() {
  this.rAF = requestAnimationFrame(this.run)
 }
 cancelAnimationFrame() {
  cancelAnimationFrame(this.rAF)
 }
 destroy() {
  document.body.style.height = "", this.data = null, this.removeEvents(), this.cancelAnimationFrame()
 }
 resize() {
  this.setHeight()
 }
 addEvents() {
  window.addEventListener("resize", this.resize, {
   passive: !0
  }), window.addEventListener("scroll", this.scroll, {
   passive: !0
  })
 }
 removeEvents() {
  window.removeEventListener("resize", this.resize, {
   passive: !0
  }), window.removeEventListener("scroll", this.scroll, {
   passive: !0
  })
 }
 init() {
  this.preload(), this.on()
 }
}
new Smooth,
function(t, e) {
 "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.anime = e()
}(this, (function() {
 "use strict";
 var t = {
   update: null,
   begin: null,
   loopBegin: null,
   changeBegin: null,
   change: null,
   changeComplete: null,
   loopComplete: null,
   complete: null,
   loop: 1,
   direction: "normal",
   autoplay: !0,
   timelineOffset: 0
  },
  e = {
   duration: 1e3,
   delay: 0,
   endDelay: 0,
   easing: "easeOutElastic(1, .5)",
   round: 0
  },
  n = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
  i = {
   CSS: {},
   springs: {}
  };

 function r(t, e, n) {
  return Math.min(Math.max(t, e), n)
 }

 function a(t, e) {
  return t.indexOf(e) > -1
 }

 function o(t, e) {
  return t.apply(null, e)
 }
 var s = {
  arr: function(t) {
   return Array.isArray(t)
  },
  obj: function(t) {
   return a(Object.prototype.toString.call(t), "Object")
  },
  pth: function(t) {
   return s.obj(t) && t.hasOwnProperty("totalLength")
  },
  svg: function(t) {
   return t instanceof SVGElement
  },
  inp: function(t) {
   return t instanceof HTMLInputElement
  },
  dom: function(t) {
   return t.nodeType || s.svg(t)
  },
  str: function(t) {
   return "string" == typeof t
  },
  fnc: function(t) {
   return "function" == typeof t
  },
  und: function(t) {
   return void 0 === t
  },
  hex: function(t) {
   return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
  },
  rgb: function(t) {
   return /^rgb/.test(t)
  },
  hsl: function(t) {
   return /^hsl/.test(t)
  },
  col: function(t) {
   return s.hex(t) || s.rgb(t) || s.hsl(t)
  },
  key: function(n) {
   return !t.hasOwnProperty(n) && !e.hasOwnProperty(n) && "targets" !== n && "keyframes" !== n
  }
 };

 function l(t) {
  var e = /\(([^)]+)\)/.exec(t);
  return e ? e[1].split(",").map((function(t) {
   return parseFloat(t)
  })) : []
 }

 function c(t, e) {
  var n = l(t),
   a = r(s.und(n[0]) ? 1 : n[0], .1, 100),
   o = r(s.und(n[1]) ? 100 : n[1], .1, 100),
   c = r(s.und(n[2]) ? 10 : n[2], .1, 100),
   u = r(s.und(n[3]) ? 0 : n[3], .1, 100),
   h = Math.sqrt(o / a),
   p = c / (2 * Math.sqrt(o * a)),
   d = p < 1 ? h * Math.sqrt(1 - p * p) : 0,
   f = 1,
   m = p < 1 ? (p * h - u) / d : -u + h;

  function g(t) {
   var n = e ? e * t / 1e3 : t;
   return n = p < 1 ? Math.exp(-n * p * h) * (f * Math.cos(d * n) + m * Math.sin(d * n)) : (f + m * n) * Math.exp(-n * h), 0 === t || 1 === t ? t : 1 - n
  }
  return e ? g : function() {
   var e = i.springs[t];
   if (e) return e;
   for (var n = 0, r = 0;;)
    if (1 === g(n += 1 / 6)) {
     if (++r >= 16) break
    } else r = 0;
   var a = n * (1 / 6) * 1e3;
   return i.springs[t] = a, a
  }
 }

 function u(t, e) {
  void 0 === t && (t = 1), void 0 === e && (e = .5);
  var n = r(t, 1, 10),
   i = r(e, .1, 2);
  return function(t) {
   return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
  }
 }

 function h(t) {
  return void 0 === t && (t = 10),
   function(e) {
    return Math.round(e * t) * (1 / t)
   }
 }
 var p = function() {
   var t = 11,
    e = 1 / (t - 1);

   function n(t, e) {
    return 1 - 3 * e + 3 * t
   }

   function i(t, e) {
    return 3 * e - 6 * t
   }

   function r(t) {
    return 3 * t
   }

   function a(t, e, a) {
    return ((n(e, a) * t + i(e, a)) * t + r(e)) * t
   }

   function o(t, e, a) {
    return 3 * n(e, a) * t * t + 2 * i(e, a) * t + r(e)
   }
   return function(n, i, r, s) {
    if (0 <= n && n <= 1 && 0 <= r && r <= 1) {
     var l = new Float32Array(t);
     if (n !== i || r !== s)
      for (var c = 0; c < t; ++c) l[c] = a(c * e, n, r);
     return function(t) {
      return n === i && r === s ? t : 0 === t || 1 === t ? t : a(u(t), i, s)
     }
    }

    function u(i) {
     for (var s = 0, c = 1, u = t - 1; c !== u && l[c] <= i; ++c) s += e;
     var h = s + (i - l[--c]) / (l[c + 1] - l[c]) * e,
      p = o(h, n, r);
     return p >= .001 ? function(t, e, n, i) {
      for (var r = 0; r < 4; ++r) {
       var s = o(e, n, i);
       if (0 === s) return e;
       e -= (a(e, n, i) - t) / s
      }
      return e
     }(i, h, n, r) : 0 === p ? h : function(t, e, n, i, r) {
      for (var o, s, l = 0;
       (o = a(s = e + (n - e) / 2, i, r) - t) > 0 ? n = s : e = s, Math.abs(o) > 1e-7 && ++l < 10;);
      return s
     }(i, s, s + e, n, r)
    }
   }
  }(),
  d = function() {
   var t = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"],
    e = {
     In: [
      [.55, .085, .68, .53],
      [.55, .055, .675, .19],
      [.895, .03, .685, .22],
      [.755, .05, .855, .06],
      [.47, 0, .745, .715],
      [.95, .05, .795, .035],
      [.6, .04, .98, .335],
      [.6, -.28, .735, .045], u
     ],
     Out: [
      [.25, .46, .45, .94],
      [.215, .61, .355, 1],
      [.165, .84, .44, 1],
      [.23, 1, .32, 1],
      [.39, .575, .565, 1],
      [.19, 1, .22, 1],
      [.075, .82, .165, 1],
      [.175, .885, .32, 1.275],
      function(t, e) {
       return function(n) {
        return 1 - u(t, e)(1 - n)
       }
      }
     ],
     InOut: [
      [.455, .03, .515, .955],
      [.645, .045, .355, 1],
      [.77, 0, .175, 1],
      [.86, 0, .07, 1],
      [.445, .05, .55, .95],
      [1, 0, 0, 1],
      [.785, .135, .15, .86],
      [.68, -.55, .265, 1.55],
      function(t, e) {
       return function(n) {
        return n < .5 ? u(t, e)(2 * n) / 2 : 1 - u(t, e)(-2 * n + 2) / 2
       }
      }
     ]
    },
    n = {
     linear: [.25, .25, .75, .75]
    },
    i = function(i) {
     e[i].forEach((function(e, r) {
      n["ease" + i + t[r]] = e
     }))
    };
   for (var r in e) i(r);
   return n
  }();

 function f(t, e) {
  if (s.fnc(t)) return t;
  var n = t.split("(")[0],
   i = d[n],
   r = l(t);
  switch (n) {
   case "spring":
    return c(t, e);
   case "cubicBezier":
    return o(p, r);
   case "steps":
    return o(h, r);
   default:
    return s.fnc(i) ? o(i, r) : o(p, i)
  }
 }

 function m(t) {
  try {
   return document.querySelectorAll(t)
  } catch (t) {
   return
  }
 }

 function g(t, e) {
  for (var n = t.length, i = arguments.length >= 2 ? arguments[1] : void 0, r = [], a = 0; a < n; a++)
   if (a in t) {
    var o = t[a];
    e.call(i, o, a, t) && r.push(o)
   } return r
 }

 function v(t) {
  return t.reduce((function(t, e) {
   return t.concat(s.arr(e) ? v(e) : e)
  }), [])
 }

 function y(t) {
  return s.arr(t) ? t : (s.str(t) && (t = m(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
 }

 function x(t, e) {
  return t.some((function(t) {
   return t === e
  }))
 }

 function _(t) {
  var e = {};
  for (var n in t) e[n] = t[n];
  return e
 }

 function b(t, e) {
  var n = _(t);
  for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
  return n
 }

 function w(t, e) {
  var n = _(t);
  for (var i in e) n[i] = s.und(t[i]) ? e[i] : t[i];
  return n
 }

 function M(t) {
  var e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
  if (e) return e[2]
 }

 function T(t, e) {
  return s.fnc(t) ? t(e.target, e.id, e.total) : t
 }

 function S(t, e) {
  return t.getAttribute(e)
 }

 function E(t, e, n) {
  if (x([n, "deg", "rad", "turn"], M(e))) return e;
  var r = i.CSS[e + n];
  if (!s.und(r)) return r;
  var a = document.createElement(t.tagName),
   o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
  o.appendChild(a), a.style.position = "absolute", a.style.width = 100 + n;
  var l = 100 / a.offsetWidth;
  o.removeChild(a);
  var c = l * parseFloat(e);
  return i.CSS[e + n] = c, c
 }

 function A(t, e, n) {
  if (e in t.style) {
   var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    r = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
   return n ? E(t, r, n) : r
  }
 }

 function C(t, e) {
  return s.dom(t) && !s.inp(t) && (S(t, e) || s.svg(t) && t[e]) ? "attribute" : s.dom(t) && x(n, e) ? "transform" : s.dom(t) && "transform" !== e && A(t, e) ? "css" : null != t[e] ? "object" : void 0
 }

 function P(t) {
  if (s.dom(t)) {
   for (var e, n = t.style.transform || "", i = /(\w+)\(([^)]*)\)/g, r = new Map; e = i.exec(n);) r.set(e[1], e[2]);
   return r
  }
 }

 function L(t, e, n, i) {
  switch (C(t, e)) {
   case "transform":
    return function(t, e, n, i) {
     var r, o = a(e, "scale") ? 1 : 0 + (a(r = e, "translate") || "perspective" === r ? "px" : a(r, "rotate") || a(r, "skew") ? "deg" : void 0),
      s = P(t).get(e) || o;
     return n && (n.transforms.list.set(e, s), n.transforms.last = e), i ? E(t, s, i) : s
    }(t, e, i, n);
   case "css":
    return A(t, e, n);
   case "attribute":
    return S(t, e);
   default:
    return t[e] || 0
  }
 }

 function R(t, e) {
  var n = /^(\*=|\+=|-=)/.exec(t);
  if (!n) return t;
  var i = M(t) || 0,
   r = parseFloat(e),
   a = parseFloat(t.replace(n[0], ""));
  switch (n[0][0]) {
   case "+":
    return r + a + i;
   case "-":
    return r - a + i;
   case "*":
    return r * a + i
  }
 }

 function O(t, e) {
  if (s.col(t)) return function(t) {
   return s.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : s.hex(t) ? (i = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, n, i) {
    return e + e + n + n + i + i
   })), r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i), "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)") : s.hsl(t) ? function(t) {
    var e, n, i, r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
     a = parseInt(r[1], 10) / 360,
     o = parseInt(r[2], 10) / 100,
     s = parseInt(r[3], 10) / 100,
     l = r[4] || 1;

    function c(t, e, n) {
     return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    if (0 == o) e = n = i = s;
    else {
     var u = s < .5 ? s * (1 + o) : s + o - s * o,
      h = 2 * s - u;
     e = c(h, u, a + 1 / 3), n = c(h, u, a), i = c(h, u, a - 1 / 3)
    }
    return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * i + "," + l + ")"
   }(t) : void 0;
   var e, n, i, r
  }(t);
  var n = M(t),
   i = n ? t.substr(0, t.length - n.length) : t;
  return e && !/\s/g.test(t) ? i + e : i
 }

 function I(t, e) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
 }

 function D(t) {
  for (var e, n = t.points, i = 0, r = 0; r < n.numberOfItems; r++) {
   var a = n.getItem(r);
   r > 0 && (i += I(e, a)), e = a
  }
  return i
 }

 function N(t) {
  if (t.getTotalLength) return t.getTotalLength();
  switch (t.tagName.toLowerCase()) {
   case "circle":
    return a = t, 2 * Math.PI * S(a, "r");
   case "rect":
    return 2 * S(r = t, "width") + 2 * S(r, "height");
   case "line":
    return I({
     x: S(i = t, "x1"),
     y: S(i, "y1")
    }, {
     x: S(i, "x2"),
     y: S(i, "y2")
    });
   case "polyline":
    return D(t);
   case "polygon":
    return n = (e = t).points, D(e) + I(n.getItem(n.numberOfItems - 1), n.getItem(0))
  }
  var e, n, i, r, a
 }

 function z(t, e) {
  var n = e || {},
   i = n.el || function(t) {
    for (var e = t.parentNode; s.svg(e) && (e = e.parentNode, s.svg(e.parentNode)););
    return e
   }(t),
   r = i.getBoundingClientRect(),
   a = S(i, "viewBox"),
   o = r.width,
   l = r.height,
   c = n.viewBox || (a ? a.split(" ") : [0, 0, o, l]);
  return {
   el: i,
   viewBox: c,
   x: c[0] / 1,
   y: c[1] / 1,
   w: o / c[2],
   h: l / c[3]
  }
 }

 function B(t, e) {
  function n(n) {
   void 0 === n && (n = 0);
   var i = e + n >= 1 ? e + n : 0;
   return t.el.getPointAtLength(i)
  }
  var i = z(t.el, t.svg),
   r = n(),
   a = n(-1),
   o = n(1);
  switch (t.property) {
   case "x":
    return (r.x - i.x) * i.w;
   case "y":
    return (r.y - i.y) * i.h;
   case "angle":
    return 180 * Math.atan2(o.y - a.y, o.x - a.x) / Math.PI
  }
 }

 function k(t, e) {
  var n = /-?\d*\.?\d+/g,
   i = O(s.pth(t) ? t.totalLength : t, e) + "";
  return {
   original: i,
   numbers: i.match(n) ? i.match(n).map(Number) : [0],
   strings: s.str(t) || e ? i.split(n) : []
  }
 }

 function F(t) {
  return g(t ? v(s.arr(t) ? t.map(y) : y(t)) : [], (function(t, e, n) {
   return n.indexOf(t) === e
  }))
 }

 function U(t) {
  var e = F(t);
  return e.map((function(t, n) {
   return {
    target: t,
    id: n,
    total: e.length,
    transforms: {
     list: P(t)
    }
   }
  }))
 }

 function H(t, e) {
  var n = _(e);
  if (/^spring/.test(n.easing) && (n.duration = c(n.easing)), s.arr(t)) {
   var i = t.length;
   2 !== i || s.obj(t[0]) ? s.fnc(e.duration) || (n.duration = e.duration / i) : t = {
    value: t
   }
  }
  var r = s.arr(t) ? t : [t];
  return r.map((function(t, n) {
   var i = s.obj(t) && !s.pth(t) ? t : {
    value: t
   };
   return s.und(i.delay) && (i.delay = n ? 0 : e.delay), s.und(i.endDelay) && (i.endDelay = n === r.length - 1 ? e.endDelay : 0), i
  })).map((function(t) {
   return w(t, n)
  }))
 }

 function G(t, e) {
  var n = [],
   i = e.keyframes;
  for (var r in i && (e = w(function(t) {
    for (var e = g(v(t.map((function(t) {
      return Object.keys(t)
     }))), (function(t) {
      return s.key(t)
     })).reduce((function(t, e) {
      return t.indexOf(e) < 0 && t.push(e), t
     }), []), n = {}, i = function(i) {
      var r = e[i];
      n[r] = t.map((function(t) {
       var e = {};
       for (var n in t) s.key(n) ? n == r && (e.value = t[n]) : e[n] = t[n];
       return e
      }))
     }, r = 0; r < e.length; r++) i(r);
    return n
   }(i), e)), e) s.key(r) && n.push({
   name: r,
   tweens: H(e[r], t)
  });
  return n
 }
 var j = {
  css: function(t, e, n) {
   return t.style[e] = n
  },
  attribute: function(t, e, n) {
   return t.setAttribute(e, n)
  },
  object: function(t, e, n) {
   return t[e] = n
  },
  transform: function(t, e, n, i, r) {
   if (i.list.set(e, n), e === i.last || r) {
    var a = "";
    i.list.forEach((function(t, e) {
     a += e + "(" + t + ") "
    })), t.style.transform = a
   }
  }
 };

 function V(t, e) {
  U(t).forEach((function(t) {
   for (var n in e) {
    var i = T(e[n], t),
     r = t.target,
     a = M(i),
     o = L(r, n, a, t),
     s = R(O(i, a || M(o)), o),
     l = C(r, n);
    j[l](r, n, s, t.transforms, !0)
   }
  }))
 }

 function W(t, e) {
  return g(v(t.map((function(t) {
   return e.map((function(e) {
    return function(t, e) {
     var n = C(t.target, e.name);
     if (n) {
      var i = function(t, e) {
        var n;
        return t.tweens.map((function(i) {
         var r = function(t, e) {
           var n = {};
           for (var i in t) {
            var r = T(t[i], e);
            s.arr(r) && 1 === (r = r.map((function(t) {
             return T(t, e)
            }))).length && (r = r[0]), n[i] = r
           }
           return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
          }(i, e),
          a = r.value,
          o = s.arr(a) ? a[1] : a,
          l = M(o),
          c = L(e.target, t.name, l, e),
          u = n ? n.to.original : c,
          h = s.arr(a) ? a[0] : u,
          p = M(h) || M(c),
          d = l || p;
         return s.und(o) && (o = u), r.from = k(h, d), r.to = k(R(o, h), d), r.start = n ? n.end : 0, r.end = r.start + r.delay + r.duration + r.endDelay, r.easing = f(r.easing, r.duration), r.isPath = s.pth(a), r.isColor = s.col(r.from.original), r.isColor && (r.round = 1), n = r, r
        }))
       }(e, t),
       r = i[i.length - 1];
      return {
       type: n,
       property: e.name,
       animatable: t,
       tweens: i,
       duration: r.end,
       delay: i[0].delay,
       endDelay: r.endDelay
      }
     }
    }(t, e)
   }))
  }))), (function(t) {
   return !s.und(t)
  }))
 }

 function q(t, e) {
  var n = t.length,
   i = function(t) {
    return t.timelineOffset ? t.timelineOffset : 0
   },
   r = {};
  return r.duration = n ? Math.max.apply(Math, t.map((function(t) {
   return i(t) + t.duration
  }))) : e.duration, r.delay = n ? Math.min.apply(Math, t.map((function(t) {
   return i(t) + t.delay
  }))) : e.delay, r.endDelay = n ? r.duration - Math.max.apply(Math, t.map((function(t) {
   return i(t) + t.duration - t.endDelay
  }))) : e.endDelay, r
 }
 var X, Y = 0,
  Z = [],
  J = [],
  $ = function() {
   function t() {
    X = requestAnimationFrame(e)
   }

   function e(e) {
    var n = Z.length;
    if (n) {
     for (var i = 0; i < n;) {
      var r = Z[i];
      if (r.paused) {
       var a = Z.indexOf(r);
       a > -1 && (Z.splice(a, 1), n = Z.length)
      } else r.tick(e);
      i++
     }
     t()
    } else X = cancelAnimationFrame(X)
   }
   return t
  }();

 function Q(n) {
  void 0 === n && (n = {});
  var i, a = 0,
   o = 0,
   s = 0,
   l = 0,
   c = null;

  function u(t) {
   var e = window.Promise && new Promise((function(t) {
    return c = t
   }));
   return t.finished = e, e
  }
  var h, p, d, f, m, v, y, x, _ = (p = b(t, h = n), f = G(d = b(e, h), h), y = q(v = W(m = U(h.targets), f), d), x = Y, Y++, w(p, {
   id: x,
   children: [],
   animatables: m,
   animations: v,
   duration: y.duration,
   delay: y.delay,
   endDelay: y.endDelay
  }));

  function M() {
   var t = _.direction;
   "alternate" !== t && (_.direction = "normal" !== t ? "normal" : "reverse"), _.reversed = !_.reversed, i.forEach((function(t) {
    return t.reversed = _.reversed
   }))
  }

  function T(t) {
   return _.reversed ? _.duration - t : t
  }

  function S() {
   a = 0, o = T(_.currentTime) * (1 / Q.speed)
  }

  function E(t, e) {
   e && e.seek(t - e.timelineOffset)
  }

  function A(t) {
   for (var e = 0, n = _.animations, i = n.length; e < i;) {
    var a = n[e],
     o = a.animatable,
     s = a.tweens,
     l = s.length - 1,
     c = s[l];
    l && (c = g(s, (function(e) {
     return t < e.end
    }))[0] || c);
    for (var u = r(t - c.start - c.delay, 0, c.duration) / c.duration, h = isNaN(u) ? 1 : c.easing(u), p = c.to.strings, d = c.round, f = [], m = c.to.numbers.length, v = void 0, y = 0; y < m; y++) {
     var x = void 0,
      b = c.to.numbers[y],
      w = c.from.numbers[y] || 0;
     x = c.isPath ? B(c.value, h * b) : w + h * (b - w), d && (c.isColor && y > 2 || (x = Math.round(x * d) / d)), f.push(x)
    }
    var M = p.length;
    if (M) {
     v = p[0];
     for (var T = 0; T < M; T++) {
      p[T];
      var S = p[T + 1],
       E = f[T];
      isNaN(E) || (v += S ? E + S : E + " ")
     }
    } else v = f[0];
    j[a.type](o.target, a.property, v, o.transforms), a.currentValue = v, e++
   }
  }

  function C(t) {
   _[t] && !_.passThrough && _[t](_)
  }

  function P(t) {
   var e = _.duration,
    n = _.delay,
    h = e - _.endDelay,
    p = T(t);
   _.progress = r(p / e * 100, 0, 100), _.reversePlayback = p < _.currentTime, i && function(t) {
    if (_.reversePlayback)
     for (var e = l; e--;) E(t, i[e]);
    else
     for (var n = 0; n < l; n++) E(t, i[n])
   }(p), !_.began && _.currentTime > 0 && (_.began = !0, C("begin"), C("loopBegin")), p <= n && 0 !== _.currentTime && A(0), (p >= h && _.currentTime !== e || !e) && A(e), p > n && p < h ? (_.changeBegan || (_.changeBegan = !0, _.changeCompleted = !1, C("changeBegin")), C("change"), A(p)) : _.changeBegan && (_.changeCompleted = !0, _.changeBegan = !1, C("changeComplete")), _.currentTime = r(p, 0, e), _.began && C("update"), t >= e && (o = 0, _.remaining && !0 !== _.remaining && _.remaining--, _.remaining ? (a = s, C("loopComplete"), C("loopBegin"), "alternate" === _.direction && M()) : (_.paused = !0, _.completed || (_.completed = !0, C("loopComplete"), C("complete"), !_.passThrough && "Promise" in window && (c(), u(_)))))
  }
  return u(_), _.reset = function() {
   var t = _.direction;
   _.passThrough = !1, _.currentTime = 0, _.progress = 0, _.paused = !0, _.began = !1, _.changeBegan = !1, _.completed = !1, _.changeCompleted = !1, _.reversePlayback = !1, _.reversed = "reverse" === t, _.remaining = _.loop, i = _.children;
   for (var e = l = i.length; e--;) _.children[e].reset();
   (_.reversed && !0 !== _.loop || "alternate" === t && 1 === _.loop) && _.remaining++, A(0)
  }, _.set = function(t, e) {
   return V(t, e), _
  }, _.tick = function(t) {
   s = t, a || (a = s), P((s + (o - a)) * Q.speed)
  }, _.seek = function(t) {
   P(T(t))
  }, _.pause = function() {
   _.paused = !0, S()
  }, _.play = function() {
   _.paused && (_.completed && _.reset(), _.paused = !1, Z.push(_), S(), X || $())
  }, _.reverse = function() {
   M(), S()
  }, _.restart = function() {
   _.reset(), _.play()
  }, _.reset(), _.autoplay && _.play(), _
 }

 function K(t, e) {
  for (var n = e.length; n--;) x(t, e[n].animatable.target) && e.splice(n, 1)
 }
 return "undefined" != typeof document && document.addEventListener("visibilitychange", (function() {
  document.hidden ? (Z.forEach((function(t) {
   return t.pause()
  })), J = Z.slice(0), Z = []) : J.forEach((function(t) {
   return t.play()
  }))
 })), Q.version = "3.0.1", Q.speed = 1, Q.running = Z, Q.remove = function(t) {
  for (var e = F(t), n = Z.length; n--;) {
   var i = Z[n],
    r = i.animations,
    a = i.children;
   K(e, r);
   for (var o = a.length; o--;) {
    var s = a[o],
     l = s.animations;
    K(e, l), l.length || s.children.length || a.splice(o, 1)
   }
   r.length || a.length || i.pause()
  }
 }, Q.get = L, Q.set = V, Q.convertPx = E, Q.path = function(t, e) {
  var n = s.str(t) ? m(t)[0] : t,
   i = e || 100;
  return function(t) {
   return {
    property: t,
    el: n,
    svg: z(n),
    totalLength: N(n) * (i / 100)
   }
  }
 }, Q.setDashoffset = function(t) {
  var e = N(t);
  return t.setAttribute("stroke-dasharray", e), e
 }, Q.stagger = function(t, e) {
  void 0 === e && (e = {});
  var n = e.direction || "normal",
   i = e.easing ? f(e.easing) : null,
   r = e.grid,
   a = e.axis,
   o = e.from || 0,
   l = "first" === o,
   c = "center" === o,
   u = "last" === o,
   h = s.arr(t),
   p = h ? parseFloat(t[0]) : parseFloat(t),
   d = h ? parseFloat(t[1]) : 0,
   m = M(h ? t[1] : t) || 0,
   g = e.start || 0 + (h ? p : 0),
   v = [],
   y = 0;
  return function(t, e, s) {
   if (l && (o = 0), c && (o = (s - 1) / 2), u && (o = s - 1), !v.length) {
    for (var f = 0; f < s; f++) {
     if (r) {
      var x = c ? (r[0] - 1) / 2 : o % r[0],
       _ = c ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
       b = x - f % r[0],
       w = _ - Math.floor(f / r[0]),
       M = Math.sqrt(b * b + w * w);
      "x" === a && (M = -b), "y" === a && (M = -w), v.push(M)
     } else v.push(Math.abs(o - f));
     y = Math.max.apply(Math, v)
    }
    i && (v = v.map((function(t) {
     return i(t / y) * y
    }))), "reverse" === n && (v = v.map((function(t) {
     return a ? t < 0 ? -1 * t : -t : Math.abs(y - t)
    })))
   }
   return g + (h ? (d - p) / y : p) * (Math.round(100 * v[e]) / 100) + m
  }
 }, Q.timeline = function(t) {
  void 0 === t && (t = {});
  var n = Q(t);
  return n.duration = 0, n.add = function(i, r) {
   var a = Z.indexOf(n),
    o = n.children;

   function l(t) {
    t.passThrough = !0
   }
   a > -1 && Z.splice(a, 1);
   for (var c = 0; c < o.length; c++) l(o[c]);
   var u = w(i, b(e, t));
   u.targets = u.targets || t.targets;
   var h = n.duration;
   u.autoplay = !1, u.direction = n.direction, u.timelineOffset = s.und(r) ? h : R(r, h), l(n), n.seek(u.timelineOffset);
   var p = Q(u);
   l(p), o.push(p);
   var d = q(o, t);
   return n.delay = d.delay, n.endDelay = d.endDelay, n.duration = d.duration, n.seek(0), n.reset(), n.autoplay && n.play(), n
  }, n
 }, Q.easing = f, Q.penner = d, Q.random = function(t, e) {
  return Math.floor(Math.random() * (e - t + 1)) + t
 }, Q
}))