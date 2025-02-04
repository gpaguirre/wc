(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.id="<child-wc>",o.appendChild(document.createTextNode(".-_VRTG_button{color:#fff;cursor:pointer;background-color:#3498db;border:none;border-radius:4px;padding:10px 15px}.-_VRTG_button:hover{background-color:#2980b9}")),document.head.appendChild(o)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
function BE(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var ov = { exports: {} }, tt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $S;
function YE() {
  if ($S) return tt;
  $S = 1;
  var h = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), k = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), q = Symbol.iterator;
  function D(C) {
    return C === null || typeof C != "object" ? null : (C = q && C[q] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var G = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $ = Object.assign, me = {};
  function fe(C, W, pe) {
    this.props = C, this.context = W, this.refs = me, this.updater = pe || G;
  }
  fe.prototype.isReactComponent = {}, fe.prototype.setState = function(C, W) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, W, "setState");
  }, fe.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function le() {
  }
  le.prototype = fe.prototype;
  function ce(C, W, pe) {
    this.props = C, this.context = W, this.refs = me, this.updater = pe || G;
  }
  var Ee = ce.prototype = new le();
  Ee.constructor = ce, $(Ee, fe.prototype), Ee.isPureReactComponent = !0;
  var ge = Array.isArray, Be = { H: null, A: null, T: null, S: null }, yt = Object.prototype.hasOwnProperty;
  function Bt(C, W, pe, De, ye, Ve) {
    return pe = Ve.ref, {
      $$typeof: h,
      type: C,
      key: W,
      ref: pe !== void 0 ? pe : null,
      props: Ve
    };
  }
  function St(C, W) {
    return Bt(
      C.type,
      W,
      void 0,
      void 0,
      void 0,
      C.props
    );
  }
  function ve(C) {
    return typeof C == "object" && C !== null && C.$$typeof === h;
  }
  function Le(C) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(pe) {
      return W[pe];
    });
  }
  var xt = /\/+/g;
  function fn(C, W) {
    return typeof C == "object" && C !== null && C.key != null ? Le("" + C.key) : W.toString(36);
  }
  function Xt() {
  }
  function Ae(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(Xt, Xt) : (C.status = "pending", C.then(
          function(W) {
            C.status === "pending" && (C.status = "fulfilled", C.value = W);
          },
          function(W) {
            C.status === "pending" && (C.status = "rejected", C.reason = W);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function Mt(C, W, pe, De, ye) {
    var Ve = typeof C;
    (Ve === "undefined" || Ve === "boolean") && (C = null);
    var qe = !1;
    if (C === null) qe = !0;
    else
      switch (Ve) {
        case "bigint":
        case "string":
        case "number":
          qe = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case h:
            case S:
              qe = !0;
              break;
            case te:
              return qe = C._init, Mt(
                qe(C._payload),
                W,
                pe,
                De,
                ye
              );
          }
      }
    if (qe)
      return ye = ye(C), qe = De === "" ? "." + fn(C, 0) : De, ge(ye) ? (pe = "", qe != null && (pe = qe.replace(xt, "$&/") + "/"), Mt(ye, W, pe, "", function(Et) {
        return Et;
      })) : ye != null && (ve(ye) && (ye = St(
        ye,
        pe + (ye.key == null || C && C.key === ye.key ? "" : ("" + ye.key).replace(
          xt,
          "$&/"
        ) + "/") + qe
      )), W.push(ye)), 1;
    qe = 0;
    var Wt = De === "" ? "." : De + ":";
    if (ge(C))
      for (var $e = 0; $e < C.length; $e++)
        De = C[$e], Ve = Wt + fn(De, $e), qe += Mt(
          De,
          W,
          pe,
          Ve,
          ye
        );
    else if ($e = D(C), typeof $e == "function")
      for (C = $e.call(C), $e = 0; !(De = C.next()).done; )
        De = De.value, Ve = Wt + fn(De, $e++), qe += Mt(
          De,
          W,
          pe,
          Ve,
          ye
        );
    else if (Ve === "object") {
      if (typeof C.then == "function")
        return Mt(
          Ae(C),
          W,
          pe,
          De,
          ye
        );
      throw W = String(C), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return qe;
  }
  function Q(C, W, pe) {
    if (C == null) return C;
    var De = [], ye = 0;
    return Mt(C, De, "", "", function(Ve) {
      return W.call(pe, Ve, ye++);
    }), De;
  }
  function he(C) {
    if (C._status === -1) {
      var W = C._result;
      W = W(), W.then(
        function(pe) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = pe);
        },
        function(pe) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = pe);
        }
      ), C._status === -1 && (C._status = 0, C._result = W);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var de = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function Se() {
  }
  return tt.Children = {
    map: Q,
    forEach: function(C, W, pe) {
      Q(
        C,
        function() {
          W.apply(this, arguments);
        },
        pe
      );
    },
    count: function(C) {
      var W = 0;
      return Q(C, function() {
        W++;
      }), W;
    },
    toArray: function(C) {
      return Q(C, function(W) {
        return W;
      }) || [];
    },
    only: function(C) {
      if (!ve(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  }, tt.Component = fe, tt.Fragment = T, tt.Profiler = O, tt.PureComponent = ce, tt.StrictMode = v, tt.Suspense = R, tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Be, tt.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, tt.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, tt.cloneElement = function(C, W, pe) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var De = $({}, C.props), ye = C.key, Ve = void 0;
    if (W != null)
      for (qe in W.ref !== void 0 && (Ve = void 0), W.key !== void 0 && (ye = "" + W.key), W)
        !yt.call(W, qe) || qe === "key" || qe === "__self" || qe === "__source" || qe === "ref" && W.ref === void 0 || (De[qe] = W[qe]);
    var qe = arguments.length - 2;
    if (qe === 1) De.children = pe;
    else if (1 < qe) {
      for (var Wt = Array(qe), $e = 0; $e < qe; $e++)
        Wt[$e] = arguments[$e + 2];
      De.children = Wt;
    }
    return Bt(C.type, ye, void 0, void 0, Ve, De);
  }, tt.createContext = function(C) {
    return C = {
      $$typeof: k,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: B,
      _context: C
    }, C;
  }, tt.createElement = function(C, W, pe) {
    var De, ye = {}, Ve = null;
    if (W != null)
      for (De in W.key !== void 0 && (Ve = "" + W.key), W)
        yt.call(W, De) && De !== "key" && De !== "__self" && De !== "__source" && (ye[De] = W[De]);
    var qe = arguments.length - 2;
    if (qe === 1) ye.children = pe;
    else if (1 < qe) {
      for (var Wt = Array(qe), $e = 0; $e < qe; $e++)
        Wt[$e] = arguments[$e + 2];
      ye.children = Wt;
    }
    if (C && C.defaultProps)
      for (De in qe = C.defaultProps, qe)
        ye[De] === void 0 && (ye[De] = qe[De]);
    return Bt(C, Ve, void 0, void 0, null, ye);
  }, tt.createRef = function() {
    return { current: null };
  }, tt.forwardRef = function(C) {
    return { $$typeof: Z, render: C };
  }, tt.isValidElement = ve, tt.lazy = function(C) {
    return {
      $$typeof: te,
      _payload: { _status: -1, _result: C },
      _init: he
    };
  }, tt.memo = function(C, W) {
    return {
      $$typeof: z,
      type: C,
      compare: W === void 0 ? null : W
    };
  }, tt.startTransition = function(C) {
    var W = Be.T, pe = {};
    Be.T = pe;
    try {
      var De = C(), ye = Be.S;
      ye !== null && ye(pe, De), typeof De == "object" && De !== null && typeof De.then == "function" && De.then(Se, de);
    } catch (Ve) {
      de(Ve);
    } finally {
      Be.T = W;
    }
  }, tt.unstable_useCacheRefresh = function() {
    return Be.H.useCacheRefresh();
  }, tt.use = function(C) {
    return Be.H.use(C);
  }, tt.useActionState = function(C, W, pe) {
    return Be.H.useActionState(C, W, pe);
  }, tt.useCallback = function(C, W) {
    return Be.H.useCallback(C, W);
  }, tt.useContext = function(C) {
    return Be.H.useContext(C);
  }, tt.useDebugValue = function() {
  }, tt.useDeferredValue = function(C, W) {
    return Be.H.useDeferredValue(C, W);
  }, tt.useEffect = function(C, W) {
    return Be.H.useEffect(C, W);
  }, tt.useId = function() {
    return Be.H.useId();
  }, tt.useImperativeHandle = function(C, W, pe) {
    return Be.H.useImperativeHandle(C, W, pe);
  }, tt.useInsertionEffect = function(C, W) {
    return Be.H.useInsertionEffect(C, W);
  }, tt.useLayoutEffect = function(C, W) {
    return Be.H.useLayoutEffect(C, W);
  }, tt.useMemo = function(C, W) {
    return Be.H.useMemo(C, W);
  }, tt.useOptimistic = function(C, W) {
    return Be.H.useOptimistic(C, W);
  }, tt.useReducer = function(C, W, pe) {
    return Be.H.useReducer(C, W, pe);
  }, tt.useRef = function(C) {
    return Be.H.useRef(C);
  }, tt.useState = function(C) {
    return Be.H.useState(C);
  }, tt.useSyncExternalStore = function(C, W, pe) {
    return Be.H.useSyncExternalStore(
      C,
      W,
      pe
    );
  }, tt.useTransition = function() {
    return Be.H.useTransition();
  }, tt.version = "19.0.0", tt;
}
var Ep = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ep.exports;
var WS;
function qE() {
  return WS || (WS = 1, function(h, S) {
    process.env.NODE_ENV !== "production" && function() {
      function T(p, x) {
        Object.defineProperty(B.prototype, p, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              x[0],
              x[1]
            );
          }
        });
      }
      function v(p) {
        return p === null || typeof p != "object" ? null : (p = Ka && p[Ka] || p["@@iterator"], typeof p == "function" ? p : null);
      }
      function O(p, x) {
        p = (p = p.constructor) && (p.displayName || p.name) || "ReactClass";
        var I = p + "." + x;
        Yl[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          x,
          p
        ), Yl[I] = !0);
      }
      function B(p, x, I) {
        this.props = p, this.context = x, this.refs = Ce, this.updater = I || H;
      }
      function k() {
      }
      function Z(p, x, I) {
        this.props = p, this.context = x, this.refs = Ce, this.updater = I || H;
      }
      function R(p) {
        return "" + p;
      }
      function z(p) {
        try {
          R(p);
          var x = !1;
        } catch {
          x = !0;
        }
        if (x) {
          x = console;
          var I = x.error, re = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
          return I.call(
            x,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            re
          ), R(p);
        }
      }
      function te(p) {
        if (p == null) return null;
        if (typeof p == "function")
          return p.$$typeof === Ge ? null : p.displayName || p.name || null;
        if (typeof p == "string") return p;
        switch (p) {
          case $e:
            return "Fragment";
          case Wt:
            return "Portal";
          case rt:
            return "Profiler";
          case Et:
            return "StrictMode";
          case Pn:
            return "Suspense";
          case ra:
            return "SuspenseList";
        }
        if (typeof p == "object")
          switch (typeof p.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), p.$$typeof) {
            case nt:
              return (p.displayName || "Context") + ".Provider";
            case nn:
              return (p._context.displayName || "Context") + ".Consumer";
            case Mn:
              var x = p.render;
              return p = p.displayName, p || (p = x.displayName || x.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
            case Tl:
              return x = p.displayName || null, x !== null ? x : te(p.type) || "Memo";
            case ot:
              x = p._payload, p = p._init;
              try {
                return te(p(x));
              } catch {
              }
          }
        return null;
      }
      function q(p) {
        return typeof p == "string" || typeof p == "function" || p === $e || p === rt || p === Et || p === Pn || p === ra || p === Nu || typeof p == "object" && p !== null && (p.$$typeof === ot || p.$$typeof === Tl || p.$$typeof === nt || p.$$typeof === nn || p.$$typeof === Mn || p.$$typeof === mn || p.getModuleId !== void 0);
      }
      function D() {
      }
      function G() {
        if (In === 0) {
          Oa = console.log, bn = console.info, Yt = console.warn, Rl = console.error, sa = console.group, Ln = console.groupCollapsed, $f = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        In++;
      }
      function $() {
        if (In--, In === 0) {
          var p = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: Oe({}, p, { value: Oa }),
            info: Oe({}, p, { value: bn }),
            warn: Oe({}, p, { value: Yt }),
            error: Oe({}, p, { value: Rl }),
            group: Oe({}, p, { value: sa }),
            groupCollapsed: Oe({}, p, { value: Ln }),
            groupEnd: Oe({}, p, { value: $f })
          });
        }
        0 > In && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function me(p) {
        if (Mo === void 0)
          try {
            throw Error();
          } catch (I) {
            var x = I.stack.trim().match(/\n( *(at )?)/);
            Mo = x && x[1] || "", Wf = -1 < I.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < I.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Mo + p + Wf;
      }
      function fe(p, x) {
        if (!p || Bu) return "";
        var I = Ri.get(p);
        if (I !== void 0) return I;
        Bu = !0, I = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var re = null;
        re = Ne.H, Ne.H = null, G();
        try {
          var ze = {
            DetermineComponentFrameRoot: function() {
              try {
                if (x) {
                  var Vn = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Vn.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Vn, []);
                    } catch (Tt) {
                      var el = Tt;
                    }
                    Reflect.construct(p, [], Vn);
                  } else {
                    try {
                      Vn.call();
                    } catch (Tt) {
                      el = Tt;
                    }
                    p.call(Vn.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Tt) {
                    el = Tt;
                  }
                  (Vn = p()) && typeof Vn.catch == "function" && Vn.catch(function() {
                  });
                }
              } catch (Tt) {
                if (Tt && el && typeof Tt.stack == "string")
                  return [Tt.stack, el.stack];
              }
              return [null, null];
            }
          };
          ze.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var we = Object.getOwnPropertyDescriptor(
            ze.DetermineComponentFrameRoot,
            "name"
          );
          we && we.configurable && Object.defineProperty(
            ze.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var Te = ze.DetermineComponentFrameRoot(), dt = Te[0], Ie = Te[1];
          if (dt && Ie) {
            var Ut = dt.split(`
`), Qt = Ie.split(`
`);
            for (Te = we = 0; we < Ut.length && !Ut[we].includes(
              "DetermineComponentFrameRoot"
            ); )
              we++;
            for (; Te < Qt.length && !Qt[Te].includes(
              "DetermineComponentFrameRoot"
            ); )
              Te++;
            if (we === Ut.length || Te === Qt.length)
              for (we = Ut.length - 1, Te = Qt.length - 1; 1 <= we && 0 <= Te && Ut[we] !== Qt[Te]; )
                Te--;
            for (; 1 <= we && 0 <= Te; we--, Te--)
              if (Ut[we] !== Qt[Te]) {
                if (we !== 1 || Te !== 1)
                  do
                    if (we--, Te--, 0 > Te || Ut[we] !== Qt[Te]) {
                      var hl = `
` + Ut[we].replace(
                        " at new ",
                        " at "
                      );
                      return p.displayName && hl.includes("<anonymous>") && (hl = hl.replace("<anonymous>", p.displayName)), typeof p == "function" && Ri.set(p, hl), hl;
                    }
                  while (1 <= we && 0 <= Te);
                break;
              }
          }
        } finally {
          Bu = !1, Ne.H = re, $(), Error.prepareStackTrace = I;
        }
        return Ut = (Ut = p ? p.displayName || p.name : "") ? me(Ut) : "", typeof p == "function" && Ri.set(p, Ut), Ut;
      }
      function le(p) {
        if (p == null) return "";
        if (typeof p == "function") {
          var x = p.prototype;
          return fe(
            p,
            !(!x || !x.isReactComponent)
          );
        }
        if (typeof p == "string") return me(p);
        switch (p) {
          case Pn:
            return me("Suspense");
          case ra:
            return me("SuspenseList");
        }
        if (typeof p == "object")
          switch (p.$$typeof) {
            case Mn:
              return p = fe(p.render, !1), p;
            case Tl:
              return le(p.type);
            case ot:
              x = p._payload, p = p._init;
              try {
                return le(p(x));
              } catch {
              }
          }
        return "";
      }
      function ce() {
        var p = Ne.A;
        return p === null ? null : p.getOwner();
      }
      function Ee(p) {
        if (jn.call(p, "key")) {
          var x = Object.getOwnPropertyDescriptor(p, "key").get;
          if (x && x.isReactWarning) return !1;
        }
        return p.key !== void 0;
      }
      function ge(p, x) {
        function I() {
          ql || (ql = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            x
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: I,
          configurable: !0
        });
      }
      function Be() {
        var p = te(this.type);
        return Ai[p] || (Ai[p] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), p = this.props.ref, p !== void 0 ? p : null;
      }
      function yt(p, x, I, re, ze, we) {
        return I = we.ref, p = {
          $$typeof: qe,
          type: p,
          key: x,
          props: we,
          _owner: ze
        }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(p, "ref", {
          enumerable: !1,
          get: Be
        }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(p, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
      }
      function Bt(p, x) {
        return x = yt(
          p.type,
          x,
          void 0,
          void 0,
          p._owner,
          p.props
        ), x._store.validated = p._store.validated, x;
      }
      function St(p, x) {
        if (typeof p == "object" && p && p.$$typeof !== Da) {
          if (vt(p))
            for (var I = 0; I < p.length; I++) {
              var re = p[I];
              ve(re) && Le(re, x);
            }
          else if (ve(p))
            p._store && (p._store.validated = 1);
          else if (I = v(p), typeof I == "function" && I !== p.entries && (I = I.call(p), I !== p))
            for (; !(p = I.next()).done; )
              ve(p.value) && Le(p.value, x);
        }
      }
      function ve(p) {
        return typeof p == "object" && p !== null && p.$$typeof === qe;
      }
      function Le(p, x) {
        if (p._store && !p._store.validated && p.key == null && (p._store.validated = 1, x = xt(x), !Ja[x])) {
          Ja[x] = !0;
          var I = "";
          p && p._owner != null && p._owner !== ce() && (I = null, typeof p._owner.tag == "number" ? I = te(p._owner.type) : typeof p._owner.name == "string" && (I = p._owner.name), I = " It was passed a child from " + I + ".");
          var re = Ne.getCurrentStack;
          Ne.getCurrentStack = function() {
            var ze = le(p.type);
            return re && (ze += re() || ""), ze;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            x,
            I
          ), Ne.getCurrentStack = re;
        }
      }
      function xt(p) {
        var x = "", I = ce();
        return I && (I = te(I.type)) && (x = `

Check the render method of \`` + I + "`."), x || (p = te(p)) && (x = `

Check the top-level render call using <` + p + ">."), x;
      }
      function fn(p) {
        var x = { "=": "=0", ":": "=2" };
        return "$" + p.replace(/[=:]/g, function(I) {
          return x[I];
        });
      }
      function Xt(p, x) {
        return typeof p == "object" && p !== null && p.key != null ? (z(p.key), fn("" + p.key)) : x.toString(36);
      }
      function Ae() {
      }
      function Mt(p) {
        switch (p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
          default:
            switch (typeof p.status == "string" ? p.then(Ae, Ae) : (p.status = "pending", p.then(
              function(x) {
                p.status === "pending" && (p.status = "fulfilled", p.value = x);
              },
              function(x) {
                p.status === "pending" && (p.status = "rejected", p.reason = x);
              }
            )), p.status) {
              case "fulfilled":
                return p.value;
              case "rejected":
                throw p.reason;
            }
        }
        throw p;
      }
      function Q(p, x, I, re, ze) {
        var we = typeof p;
        (we === "undefined" || we === "boolean") && (p = null);
        var Te = !1;
        if (p === null) Te = !0;
        else
          switch (we) {
            case "bigint":
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (p.$$typeof) {
                case qe:
                case Wt:
                  Te = !0;
                  break;
                case ot:
                  return Te = p._init, Q(
                    Te(p._payload),
                    x,
                    I,
                    re,
                    ze
                  );
              }
          }
        if (Te) {
          Te = p, ze = ze(Te);
          var dt = re === "" ? "." + Xt(Te, 0) : re;
          return vt(ze) ? (I = "", dt != null && (I = dt.replace(da, "$&/") + "/"), Q(ze, x, I, "", function(Ut) {
            return Ut;
          })) : ze != null && (ve(ze) && (ze.key != null && (Te && Te.key === ze.key || z(ze.key)), I = Bt(
            ze,
            I + (ze.key == null || Te && Te.key === ze.key ? "" : ("" + ze.key).replace(
              da,
              "$&/"
            ) + "/") + dt
          ), re !== "" && Te != null && ve(Te) && Te.key == null && Te._store && !Te._store.validated && (I._store.validated = 2), ze = I), x.push(ze)), 1;
        }
        if (Te = 0, dt = re === "" ? "." : re + ":", vt(p))
          for (var Ie = 0; Ie < p.length; Ie++)
            re = p[Ie], we = dt + Xt(re, Ie), Te += Q(
              re,
              x,
              I,
              we,
              ze
            );
        else if (Ie = v(p), typeof Ie == "function")
          for (Ie === p.entries && (ln || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), ln = !0), p = Ie.call(p), Ie = 0; !(re = p.next()).done; )
            re = re.value, we = dt + Xt(re, Ie++), Te += Q(
              re,
              x,
              I,
              we,
              ze
            );
        else if (we === "object") {
          if (typeof p.then == "function")
            return Q(
              Mt(p),
              x,
              I,
              re,
              ze
            );
          throw x = String(p), Error(
            "Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Te;
      }
      function he(p, x, I) {
        if (p == null) return p;
        var re = [], ze = 0;
        return Q(p, re, "", "", function(we) {
          return x.call(I, we, ze++);
        }), re;
      }
      function de(p) {
        if (p._status === -1) {
          var x = p._result;
          x = x(), x.then(
            function(I) {
              (p._status === 0 || p._status === -1) && (p._status = 1, p._result = I);
            },
            function(I) {
              (p._status === 0 || p._status === -1) && (p._status = 2, p._result = I);
            }
          ), p._status === -1 && (p._status = 0, p._result = x);
        }
        if (p._status === 1)
          return x = p._result, x === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            x
          ), "default" in x || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            x
          ), x.default;
        throw p._result;
      }
      function Se() {
        var p = Ne.H;
        return p === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), p;
      }
      function C() {
      }
      function W(p) {
        if (qu === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7);
            qu = (h && h[x]).call(
              h,
              "timers"
            ).setImmediate;
          } catch {
            qu = function(re) {
              Yu === !1 && (Yu = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ze = new MessageChannel();
              ze.port1.onmessage = re, ze.port2.postMessage(void 0);
            };
          }
        return qu(p);
      }
      function pe(p) {
        return 1 < p.length && typeof AggregateError == "function" ? new AggregateError(p) : p[0];
      }
      function De(p, x) {
        x !== Oi - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Oi = x;
      }
      function ye(p, x, I) {
        var re = Ne.actQueue;
        if (re !== null)
          if (re.length !== 0)
            try {
              Ve(re), W(function() {
                return ye(p, x, I);
              });
              return;
            } catch (ze) {
              Ne.thrownErrors.push(ze);
            }
          else Ne.actQueue = null;
        0 < Ne.thrownErrors.length ? (re = pe(Ne.thrownErrors), Ne.thrownErrors.length = 0, I(re)) : x(p);
      }
      function Ve(p) {
        if (!ju) {
          ju = !0;
          var x = 0;
          try {
            for (; x < p.length; x++) {
              var I = p[x];
              do {
                Ne.didUsePromise = !1;
                var re = I(!1);
                if (re !== null) {
                  if (Ne.didUsePromise) {
                    p[x] = I, p.splice(0, x);
                    return;
                  }
                  I = re;
                } else break;
              } while (!0);
            }
            p.length = 0;
          } catch (ze) {
            p.splice(0, x + 1), Ne.thrownErrors.push(ze);
          } finally {
            ju = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var qe = Symbol.for("react.transitional.element"), Wt = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), Et = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), nn = Symbol.for("react.consumer"), nt = Symbol.for("react.context"), Mn = Symbol.for("react.forward_ref"), Pn = Symbol.for("react.suspense"), ra = Symbol.for("react.suspense_list"), Tl = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Nu = Symbol.for("react.offscreen"), Ka = Symbol.iterator, Yl = {}, H = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(p) {
          O(p, "forceUpdate");
        },
        enqueueReplaceState: function(p) {
          O(p, "replaceState");
        },
        enqueueSetState: function(p) {
          O(p, "setState");
        }
      }, Oe = Object.assign, Ce = {};
      Object.freeze(Ce), B.prototype.isReactComponent = {}, B.prototype.setState = function(p, x) {
        if (typeof p != "object" && typeof p != "function" && p != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, p, x, "setState");
      }, B.prototype.forceUpdate = function(p) {
        this.updater.enqueueForceUpdate(this, p, "forceUpdate");
      };
      var Ye = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ft;
      for (Ft in Ye)
        Ye.hasOwnProperty(Ft) && T(Ft, Ye[Ft]);
      k.prototype = B.prototype, Ye = Z.prototype = new k(), Ye.constructor = Z, Oe(Ye, B.prototype), Ye.isPureReactComponent = !0;
      var vt = Array.isArray, Ge = Symbol.for("react.client.reference"), Ne = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, jn = Object.prototype.hasOwnProperty, mn = Symbol.for("react.client.reference"), In = 0, Oa, bn, Yt, Rl, sa, Ln, $f;
      D.__reactDisabledLog = !0;
      var Mo, Wf, Bu = !1, Ri = new (typeof WeakMap == "function" ? WeakMap : Map)(), Da = Symbol.for("react.client.reference"), ql, Al, Ai = {}, Ja = {}, ln = !1, da = /\/+/g, jl = typeof reportError == "function" ? reportError : function(p) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var x = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
            error: p
          });
          if (!window.dispatchEvent(x)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", p);
          return;
        }
        console.error(p);
      }, Yu = !1, qu = null, Oi = 0, $a = !1, ju = !1, ha = typeof queueMicrotask == "function" ? function(p) {
        queueMicrotask(function() {
          return queueMicrotask(p);
        });
      } : W;
      S.Children = {
        map: he,
        forEach: function(p, x, I) {
          he(
            p,
            function() {
              x.apply(this, arguments);
            },
            I
          );
        },
        count: function(p) {
          var x = 0;
          return he(p, function() {
            x++;
          }), x;
        },
        toArray: function(p) {
          return he(p, function(x) {
            return x;
          }) || [];
        },
        only: function(p) {
          if (!ve(p))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return p;
        }
      }, S.Component = B, S.Fragment = $e, S.Profiler = rt, S.PureComponent = Z, S.StrictMode = Et, S.Suspense = Pn, S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ne, S.act = function(p) {
        var x = Ne.actQueue, I = Oi;
        Oi++;
        var re = Ne.actQueue = x !== null ? x : [], ze = !1;
        try {
          var we = p();
        } catch (Ie) {
          Ne.thrownErrors.push(Ie);
        }
        if (0 < Ne.thrownErrors.length)
          throw De(x, I), p = pe(Ne.thrownErrors), Ne.thrownErrors.length = 0, p;
        if (we !== null && typeof we == "object" && typeof we.then == "function") {
          var Te = we;
          return ha(function() {
            ze || $a || ($a = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ie, Ut) {
              ze = !0, Te.then(
                function(Qt) {
                  if (De(x, I), I === 0) {
                    try {
                      Ve(re), W(function() {
                        return ye(
                          Qt,
                          Ie,
                          Ut
                        );
                      });
                    } catch (Vn) {
                      Ne.thrownErrors.push(Vn);
                    }
                    if (0 < Ne.thrownErrors.length) {
                      var hl = pe(
                        Ne.thrownErrors
                      );
                      Ne.thrownErrors.length = 0, Ut(hl);
                    }
                  } else Ie(Qt);
                },
                function(Qt) {
                  De(x, I), 0 < Ne.thrownErrors.length && (Qt = pe(
                    Ne.thrownErrors
                  ), Ne.thrownErrors.length = 0), Ut(Qt);
                }
              );
            }
          };
        }
        var dt = we;
        if (De(x, I), I === 0 && (Ve(re), re.length !== 0 && ha(function() {
          ze || $a || ($a = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Ne.actQueue = null), 0 < Ne.thrownErrors.length)
          throw p = pe(Ne.thrownErrors), Ne.thrownErrors.length = 0, p;
        return {
          then: function(Ie, Ut) {
            ze = !0, I === 0 ? (Ne.actQueue = re, W(function() {
              return ye(
                dt,
                Ie,
                Ut
              );
            })) : Ie(dt);
          }
        };
      }, S.cache = function(p) {
        return function() {
          return p.apply(null, arguments);
        };
      }, S.cloneElement = function(p, x, I) {
        if (p == null)
          throw Error(
            "The argument must be a React element, but you passed " + p + "."
          );
        var re = Oe({}, p.props), ze = p.key, we = p._owner;
        if (x != null) {
          var Te;
          e: {
            if (jn.call(x, "ref") && (Te = Object.getOwnPropertyDescriptor(
              x,
              "ref"
            ).get) && Te.isReactWarning) {
              Te = !1;
              break e;
            }
            Te = x.ref !== void 0;
          }
          Te && (we = ce()), Ee(x) && (z(x.key), ze = "" + x.key);
          for (dt in x)
            !jn.call(x, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && x.ref === void 0 || (re[dt] = x[dt]);
        }
        var dt = arguments.length - 2;
        if (dt === 1) re.children = I;
        else if (1 < dt) {
          Te = Array(dt);
          for (var Ie = 0; Ie < dt; Ie++)
            Te[Ie] = arguments[Ie + 2];
          re.children = Te;
        }
        for (re = yt(p.type, ze, void 0, void 0, we, re), ze = 2; ze < arguments.length; ze++)
          St(arguments[ze], re.type);
        return re;
      }, S.createContext = function(p) {
        return p = {
          $$typeof: nt,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, p.Provider = p, p.Consumer = {
          $$typeof: nn,
          _context: p
        }, p._currentRenderer = null, p._currentRenderer2 = null, p;
      }, S.createElement = function(p, x, I) {
        if (q(p))
          for (var re = 2; re < arguments.length; re++)
            St(arguments[re], p);
        else {
          if (re = "", (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), p === null) var ze = "null";
          else
            vt(p) ? ze = "array" : p !== void 0 && p.$$typeof === qe ? (ze = "<" + (te(p.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof p;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            ze,
            re
          );
        }
        var we;
        if (re = {}, ze = null, x != null)
          for (we in Al || !("__self" in x) || "key" in x || (Al = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Ee(x) && (z(x.key), ze = "" + x.key), x)
            jn.call(x, we) && we !== "key" && we !== "__self" && we !== "__source" && (re[we] = x[we]);
        var Te = arguments.length - 2;
        if (Te === 1) re.children = I;
        else if (1 < Te) {
          for (var dt = Array(Te), Ie = 0; Ie < Te; Ie++)
            dt[Ie] = arguments[Ie + 2];
          Object.freeze && Object.freeze(dt), re.children = dt;
        }
        if (p && p.defaultProps)
          for (we in Te = p.defaultProps, Te)
            re[we] === void 0 && (re[we] = Te[we]);
        return ze && ge(
          re,
          typeof p == "function" ? p.displayName || p.name || "Unknown" : p
        ), yt(p, ze, void 0, void 0, ce(), re);
      }, S.createRef = function() {
        var p = { current: null };
        return Object.seal(p), p;
      }, S.forwardRef = function(p) {
        p != null && p.$$typeof === Tl ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof p != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          p === null ? "null" : typeof p
        ) : p.length !== 0 && p.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          p.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), p != null && p.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var x = { $$typeof: Mn, render: p }, I;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(re) {
            I = re, p.name || p.displayName || (Object.defineProperty(p, "name", { value: re }), p.displayName = re);
          }
        }), x;
      }, S.isValidElement = ve, S.lazy = function(p) {
        return {
          $$typeof: ot,
          _payload: { _status: -1, _result: p },
          _init: de
        };
      }, S.memo = function(p, x) {
        q(p) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          p === null ? "null" : typeof p
        ), x = {
          $$typeof: Tl,
          type: p,
          compare: x === void 0 ? null : x
        };
        var I;
        return Object.defineProperty(x, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(re) {
            I = re, p.name || p.displayName || (Object.defineProperty(p, "name", { value: re }), p.displayName = re);
          }
        }), x;
      }, S.startTransition = function(p) {
        var x = Ne.T, I = {};
        Ne.T = I, I._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var re = p(), ze = Ne.S;
          ze !== null && ze(I, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(C, jl);
        } catch (we) {
          jl(we);
        } finally {
          x === null && I._updatedFibers && (p = I._updatedFibers.size, I._updatedFibers.clear(), 10 < p && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Ne.T = x;
        }
      }, S.unstable_useCacheRefresh = function() {
        return Se().useCacheRefresh();
      }, S.use = function(p) {
        return Se().use(p);
      }, S.useActionState = function(p, x, I) {
        return Se().useActionState(
          p,
          x,
          I
        );
      }, S.useCallback = function(p, x) {
        return Se().useCallback(p, x);
      }, S.useContext = function(p) {
        var x = Se();
        return p.$$typeof === nn && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), x.useContext(p);
      }, S.useDebugValue = function(p, x) {
        return Se().useDebugValue(p, x);
      }, S.useDeferredValue = function(p, x) {
        return Se().useDeferredValue(p, x);
      }, S.useEffect = function(p, x) {
        return Se().useEffect(p, x);
      }, S.useId = function() {
        return Se().useId();
      }, S.useImperativeHandle = function(p, x, I) {
        return Se().useImperativeHandle(p, x, I);
      }, S.useInsertionEffect = function(p, x) {
        return Se().useInsertionEffect(p, x);
      }, S.useLayoutEffect = function(p, x) {
        return Se().useLayoutEffect(p, x);
      }, S.useMemo = function(p, x) {
        return Se().useMemo(p, x);
      }, S.useOptimistic = function(p, x) {
        return Se().useOptimistic(p, x);
      }, S.useReducer = function(p, x, I) {
        return Se().useReducer(p, x, I);
      }, S.useRef = function(p) {
        return Se().useRef(p);
      }, S.useState = function(p) {
        return Se().useState(p);
      }, S.useSyncExternalStore = function(p, x, I) {
        return Se().useSyncExternalStore(
          p,
          x,
          I
        );
      }, S.useTransition = function() {
        return Se().useTransition();
      }, S.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Ep, Ep.exports)), Ep.exports;
}
var FS;
function jh() {
  return FS || (FS = 1, process.env.NODE_ENV === "production" ? ov.exports = YE() : ov.exports = qE()), ov.exports;
}
var ie = jh();
const g1 = /* @__PURE__ */ BE(ie);
var fv = { exports: {} }, yp = {}, rv = { exports: {} }, Q0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PS;
function jE() {
  return PS || (PS = 1, function(h) {
    function S(Q, he) {
      var de = Q.length;
      Q.push(he);
      e: for (; 0 < de; ) {
        var Se = de - 1 >>> 1, C = Q[Se];
        if (0 < O(C, he))
          Q[Se] = he, Q[de] = C, de = Se;
        else break e;
      }
    }
    function T(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function v(Q) {
      if (Q.length === 0) return null;
      var he = Q[0], de = Q.pop();
      if (de !== he) {
        Q[0] = de;
        e: for (var Se = 0, C = Q.length, W = C >>> 1; Se < W; ) {
          var pe = 2 * (Se + 1) - 1, De = Q[pe], ye = pe + 1, Ve = Q[ye];
          if (0 > O(De, de))
            ye < C && 0 > O(Ve, De) ? (Q[Se] = Ve, Q[ye] = de, Se = ye) : (Q[Se] = De, Q[pe] = de, Se = pe);
          else if (ye < C && 0 > O(Ve, de))
            Q[Se] = Ve, Q[ye] = de, Se = ye;
          else break e;
        }
      }
      return he;
    }
    function O(Q, he) {
      var de = Q.sortIndex - he.sortIndex;
      return de !== 0 ? de : Q.id - he.id;
    }
    if (h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      h.unstable_now = function() {
        return B.now();
      };
    } else {
      var k = Date, Z = k.now();
      h.unstable_now = function() {
        return k.now() - Z;
      };
    }
    var R = [], z = [], te = 1, q = null, D = 3, G = !1, $ = !1, me = !1, fe = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function Ee(Q) {
      for (var he = T(z); he !== null; ) {
        if (he.callback === null) v(z);
        else if (he.startTime <= Q)
          v(z), he.sortIndex = he.expirationTime, S(R, he);
        else break;
        he = T(z);
      }
    }
    function ge(Q) {
      if (me = !1, Ee(Q), !$)
        if (T(R) !== null)
          $ = !0, Ae();
        else {
          var he = T(z);
          he !== null && Mt(ge, he.startTime - Q);
        }
    }
    var Be = !1, yt = -1, Bt = 5, St = -1;
    function ve() {
      return !(h.unstable_now() - St < Bt);
    }
    function Le() {
      if (Be) {
        var Q = h.unstable_now();
        St = Q;
        var he = !0;
        try {
          e: {
            $ = !1, me && (me = !1, le(yt), yt = -1), G = !0;
            var de = D;
            try {
              t: {
                for (Ee(Q), q = T(R); q !== null && !(q.expirationTime > Q && ve()); ) {
                  var Se = q.callback;
                  if (typeof Se == "function") {
                    q.callback = null, D = q.priorityLevel;
                    var C = Se(
                      q.expirationTime <= Q
                    );
                    if (Q = h.unstable_now(), typeof C == "function") {
                      q.callback = C, Ee(Q), he = !0;
                      break t;
                    }
                    q === T(R) && v(R), Ee(Q);
                  } else v(R);
                  q = T(R);
                }
                if (q !== null) he = !0;
                else {
                  var W = T(z);
                  W !== null && Mt(
                    ge,
                    W.startTime - Q
                  ), he = !1;
                }
              }
              break e;
            } finally {
              q = null, D = de, G = !1;
            }
            he = void 0;
          }
        } finally {
          he ? xt() : Be = !1;
        }
      }
    }
    var xt;
    if (typeof ce == "function")
      xt = function() {
        ce(Le);
      };
    else if (typeof MessageChannel < "u") {
      var fn = new MessageChannel(), Xt = fn.port2;
      fn.port1.onmessage = Le, xt = function() {
        Xt.postMessage(null);
      };
    } else
      xt = function() {
        fe(Le, 0);
      };
    function Ae() {
      Be || (Be = !0, xt());
    }
    function Mt(Q, he) {
      yt = fe(function() {
        Q(h.unstable_now());
      }, he);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, h.unstable_continueExecution = function() {
      $ || G || ($ = !0, Ae());
    }, h.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Bt = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, h.unstable_getFirstCallbackNode = function() {
      return T(R);
    }, h.unstable_next = function(Q) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = D;
      }
      var de = D;
      D = he;
      try {
        return Q();
      } finally {
        D = de;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(Q, he) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var de = D;
      D = Q;
      try {
        return he();
      } finally {
        D = de;
      }
    }, h.unstable_scheduleCallback = function(Q, he, de) {
      var Se = h.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Se + de : Se) : de = Se, Q) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = de + C, Q = {
        id: te++,
        callback: he,
        priorityLevel: Q,
        startTime: de,
        expirationTime: C,
        sortIndex: -1
      }, de > Se ? (Q.sortIndex = de, S(z, Q), T(R) === null && Q === T(z) && (me ? (le(yt), yt = -1) : me = !0, Mt(ge, de - Se))) : (Q.sortIndex = C, S(R, Q), $ || G || ($ = !0, Ae())), Q;
    }, h.unstable_shouldYield = ve, h.unstable_wrapCallback = function(Q) {
      var he = D;
      return function() {
        var de = D;
        D = he;
        try {
          return Q.apply(this, arguments);
        } finally {
          D = de;
        }
      };
    };
  }(Q0)), Q0;
}
var Z0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IS;
function LE() {
  return IS || (IS = 1, function(h) {
    process.env.NODE_ENV !== "production" && function() {
      function S() {
        if (ve) {
          var Q = h.unstable_now();
          fn = Q;
          var he = !0;
          try {
            e: {
              ge = !1, Be && (Be = !1, Bt(Le), Le = -1), Ee = !0;
              var de = ce;
              try {
                t: {
                  for (k(Q), le = v($); le !== null && !(le.expirationTime > Q && R()); ) {
                    var Se = le.callback;
                    if (typeof Se == "function") {
                      le.callback = null, ce = le.priorityLevel;
                      var C = Se(
                        le.expirationTime <= Q
                      );
                      if (Q = h.unstable_now(), typeof C == "function") {
                        le.callback = C, k(Q), he = !0;
                        break t;
                      }
                      le === v($) && O($), k(Q);
                    } else O($);
                    le = v($);
                  }
                  if (le !== null) he = !0;
                  else {
                    var W = v(me);
                    W !== null && te(
                      Z,
                      W.startTime - Q
                    ), he = !1;
                  }
                }
                break e;
              } finally {
                le = null, ce = de, Ee = !1;
              }
              he = void 0;
            }
          } finally {
            he ? Xt() : ve = !1;
          }
        }
      }
      function T(Q, he) {
        var de = Q.length;
        Q.push(he);
        e: for (; 0 < de; ) {
          var Se = de - 1 >>> 1, C = Q[Se];
          if (0 < B(C, he))
            Q[Se] = he, Q[de] = C, de = Se;
          else break e;
        }
      }
      function v(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function O(Q) {
        if (Q.length === 0) return null;
        var he = Q[0], de = Q.pop();
        if (de !== he) {
          Q[0] = de;
          e: for (var Se = 0, C = Q.length, W = C >>> 1; Se < W; ) {
            var pe = 2 * (Se + 1) - 1, De = Q[pe], ye = pe + 1, Ve = Q[ye];
            if (0 > B(De, de))
              ye < C && 0 > B(Ve, De) ? (Q[Se] = Ve, Q[ye] = de, Se = ye) : (Q[Se] = De, Q[pe] = de, Se = pe);
            else if (ye < C && 0 > B(Ve, de))
              Q[Se] = Ve, Q[ye] = de, Se = ye;
            else break e;
          }
        }
        return he;
      }
      function B(Q, he) {
        var de = Q.sortIndex - he.sortIndex;
        return de !== 0 ? de : Q.id - he.id;
      }
      function k(Q) {
        for (var he = v(me); he !== null; ) {
          if (he.callback === null) O(me);
          else if (he.startTime <= Q)
            O(me), he.sortIndex = he.expirationTime, T($, he);
          else break;
          he = v(me);
        }
      }
      function Z(Q) {
        if (Be = !1, k(Q), !ge)
          if (v($) !== null)
            ge = !0, z();
          else {
            var he = v(me);
            he !== null && te(
              Z,
              he.startTime - Q
            );
          }
      }
      function R() {
        return !(h.unstable_now() - fn < xt);
      }
      function z() {
        ve || (ve = !0, Xt());
      }
      function te(Q, he) {
        Le = yt(function() {
          Q(h.unstable_now());
        }, he);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var q = performance;
        h.unstable_now = function() {
          return q.now();
        };
      } else {
        var D = Date, G = D.now();
        h.unstable_now = function() {
          return D.now() - G;
        };
      }
      var $ = [], me = [], fe = 1, le = null, ce = 3, Ee = !1, ge = !1, Be = !1, yt = typeof setTimeout == "function" ? setTimeout : null, Bt = typeof clearTimeout == "function" ? clearTimeout : null, St = typeof setImmediate < "u" ? setImmediate : null, ve = !1, Le = -1, xt = 5, fn = -1;
      if (typeof St == "function")
        var Xt = function() {
          St(S);
        };
      else if (typeof MessageChannel < "u") {
        var Ae = new MessageChannel(), Mt = Ae.port2;
        Ae.port1.onmessage = S, Xt = function() {
          Mt.postMessage(null);
        };
      } else
        Xt = function() {
          yt(S, 0);
        };
      h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(Q) {
        Q.callback = null;
      }, h.unstable_continueExecution = function() {
        ge || Ee || (ge = !0, z());
      }, h.unstable_forceFrameRate = function(Q) {
        0 > Q || 125 < Q ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : xt = 0 < Q ? Math.floor(1e3 / Q) : 5;
      }, h.unstable_getCurrentPriorityLevel = function() {
        return ce;
      }, h.unstable_getFirstCallbackNode = function() {
        return v($);
      }, h.unstable_next = function(Q) {
        switch (ce) {
          case 1:
          case 2:
          case 3:
            var he = 3;
            break;
          default:
            he = ce;
        }
        var de = ce;
        ce = he;
        try {
          return Q();
        } finally {
          ce = de;
        }
      }, h.unstable_pauseExecution = function() {
      }, h.unstable_requestPaint = function() {
      }, h.unstable_runWithPriority = function(Q, he) {
        switch (Q) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            Q = 3;
        }
        var de = ce;
        ce = Q;
        try {
          return he();
        } finally {
          ce = de;
        }
      }, h.unstable_scheduleCallback = function(Q, he, de) {
        var Se = h.unstable_now();
        switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Se + de : Se) : de = Se, Q) {
          case 1:
            var C = -1;
            break;
          case 2:
            C = 250;
            break;
          case 5:
            C = 1073741823;
            break;
          case 4:
            C = 1e4;
            break;
          default:
            C = 5e3;
        }
        return C = de + C, Q = {
          id: fe++,
          callback: he,
          priorityLevel: Q,
          startTime: de,
          expirationTime: C,
          sortIndex: -1
        }, de > Se ? (Q.sortIndex = de, T(me, Q), v($) === null && Q === v(me) && (Be ? (Bt(Le), Le = -1) : Be = !0, te(Z, de - Se))) : (Q.sortIndex = C, T($, Q), ge || Ee || (ge = !0, z())), Q;
      }, h.unstable_shouldYield = R, h.unstable_wrapCallback = function(Q) {
        var he = ce;
        return function() {
          var de = ce;
          ce = he;
          try {
            return Q.apply(this, arguments);
          } finally {
            ce = de;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Z0)), Z0;
}
var e1;
function v1() {
  return e1 || (e1 = 1, process.env.NODE_ENV === "production" ? rv.exports = jE() : rv.exports = LE()), rv.exports;
}
var sv = { exports: {} }, Nl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function VE() {
  if (t1) return Nl;
  t1 = 1;
  var h = jh();
  function S(R) {
    var z = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var te = 2; te < arguments.length; te++)
        z += "&args[]=" + encodeURIComponent(arguments[te]);
    }
    return "Minified React error #" + R + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function T() {
  }
  var v = {
    d: {
      f: T,
      r: function() {
        throw Error(S(522));
      },
      D: T,
      C: T,
      L: T,
      m: T,
      X: T,
      S: T,
      M: T
    },
    p: 0,
    findDOMNode: null
  }, O = Symbol.for("react.portal");
  function B(R, z, te) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: q == null ? null : "" + q,
      children: R,
      containerInfo: z,
      implementation: te
    };
  }
  var k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Z(R, z) {
    if (R === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, Nl.createPortal = function(R, z) {
    var te = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(S(299));
    return B(R, z, null, te);
  }, Nl.flushSync = function(R) {
    var z = k.T, te = v.p;
    try {
      if (k.T = null, v.p = 2, R) return R();
    } finally {
      k.T = z, v.p = te, v.d.f();
    }
  }, Nl.preconnect = function(R, z) {
    typeof R == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, v.d.C(R, z));
  }, Nl.prefetchDNS = function(R) {
    typeof R == "string" && v.d.D(R);
  }, Nl.preinit = function(R, z) {
    if (typeof R == "string" && z && typeof z.as == "string") {
      var te = z.as, q = Z(te, z.crossOrigin), D = typeof z.integrity == "string" ? z.integrity : void 0, G = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      te === "style" ? v.d.S(
        R,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: q,
          integrity: D,
          fetchPriority: G
        }
      ) : te === "script" && v.d.X(R, {
        crossOrigin: q,
        integrity: D,
        fetchPriority: G,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, Nl.preinitModule = function(R, z) {
    if (typeof R == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var te = Z(
            z.as,
            z.crossOrigin
          );
          v.d.M(R, {
            crossOrigin: te,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && v.d.M(R);
  }, Nl.preload = function(R, z) {
    if (typeof R == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var te = z.as, q = Z(te, z.crossOrigin);
      v.d.L(R, te, {
        crossOrigin: q,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, Nl.preloadModule = function(R, z) {
    if (typeof R == "string")
      if (z) {
        var te = Z(z.as, z.crossOrigin);
        v.d.m(R, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: te,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else v.d.m(R);
  }, Nl.requestFormReset = function(R) {
    v.d.r(R);
  }, Nl.unstable_batchedUpdates = function(R, z) {
    return R(z);
  }, Nl.useFormState = function(R, z, te) {
    return k.H.useFormState(R, z, te);
  }, Nl.useFormStatus = function() {
    return k.H.useHostTransitionStatus();
  }, Nl.version = "19.0.0", Nl;
}
var Bl = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function GE() {
  return n1 || (n1 = 1, process.env.NODE_ENV !== "production" && function() {
    function h() {
    }
    function S(q) {
      return "" + q;
    }
    function T(q, D, G) {
      var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        S($);
        var me = !1;
      } catch {
        me = !0;
      }
      return me && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && $[Symbol.toStringTag] || $.constructor.name || "Object"
      ), S($)), {
        $$typeof: z,
        key: $ == null ? null : "" + $,
        children: q,
        containerInfo: D,
        implementation: G
      };
    }
    function v(q, D) {
      if (q === "font") return "";
      if (typeof D == "string")
        return D === "use-credentials" ? D : "";
    }
    function O(q) {
      return q === null ? "`null`" : q === void 0 ? "`undefined`" : q === "" ? "an empty string" : 'something with type "' + typeof q + '"';
    }
    function B(q) {
      return q === null ? "`null`" : q === void 0 ? "`undefined`" : q === "" ? "an empty string" : typeof q == "string" ? JSON.stringify(q) : typeof q == "number" ? "`" + q + "`" : 'something with type "' + typeof q + '"';
    }
    function k() {
      var q = te.H;
      return q === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), q;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Z = jh(), R = {
      d: {
        f: h,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: h,
        C: h,
        L: h,
        m: h,
        X: h,
        S: h,
        M: h
      },
      p: 0,
      findDOMNode: null
    }, z = Symbol.for("react.portal"), te = Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, Bl.createPortal = function(q, D) {
      var G = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!D || D.nodeType !== 1 && D.nodeType !== 9 && D.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return T(q, D, null, G);
    }, Bl.flushSync = function(q) {
      var D = te.T, G = R.p;
      try {
        if (te.T = null, R.p = 2, q)
          return q();
      } finally {
        te.T = D, R.p = G, R.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Bl.preconnect = function(q, D) {
      typeof q == "string" && q ? D != null && typeof D != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        B(D)
      ) : D != null && typeof D.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        O(D.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        O(q)
      ), typeof q == "string" && (D ? (D = D.crossOrigin, D = typeof D == "string" ? D === "use-credentials" ? D : "" : void 0) : D = null, R.d.C(q, D));
    }, Bl.prefetchDNS = function(q) {
      if (typeof q != "string" || !q)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          O(q)
        );
      else if (1 < arguments.length) {
        var D = arguments[1];
        typeof D == "object" && D.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          B(D)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          B(D)
        );
      }
      typeof q == "string" && R.d.D(q);
    }, Bl.preinit = function(q, D) {
      if (typeof q == "string" && q ? D == null || typeof D != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        B(D)
      ) : D.as !== "style" && D.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        B(D.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        O(q)
      ), typeof q == "string" && D && typeof D.as == "string") {
        var G = D.as, $ = v(G, D.crossOrigin), me = typeof D.integrity == "string" ? D.integrity : void 0, fe = typeof D.fetchPriority == "string" ? D.fetchPriority : void 0;
        G === "style" ? R.d.S(
          q,
          typeof D.precedence == "string" ? D.precedence : void 0,
          {
            crossOrigin: $,
            integrity: me,
            fetchPriority: fe
          }
        ) : G === "script" && R.d.X(q, {
          crossOrigin: $,
          integrity: me,
          fetchPriority: fe,
          nonce: typeof D.nonce == "string" ? D.nonce : void 0
        });
      }
    }, Bl.preinitModule = function(q, D) {
      var G = "";
      if (typeof q == "string" && q || (G += " The `href` argument encountered was " + O(q) + "."), D !== void 0 && typeof D != "object" ? G += " The `options` argument encountered was " + O(D) + "." : D && "as" in D && D.as !== "script" && (G += " The `as` option encountered was " + B(D.as) + "."), G)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          G
        );
      else
        switch (G = D && typeof D.as == "string" ? D.as : "script", G) {
          case "script":
            break;
          default:
            G = B(G), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              G,
              q
            );
        }
      typeof q == "string" && (typeof D == "object" && D !== null ? (D.as == null || D.as === "script") && (G = v(
        D.as,
        D.crossOrigin
      ), R.d.M(q, {
        crossOrigin: G,
        integrity: typeof D.integrity == "string" ? D.integrity : void 0,
        nonce: typeof D.nonce == "string" ? D.nonce : void 0
      })) : D == null && R.d.M(q));
    }, Bl.preload = function(q, D) {
      var G = "";
      if (typeof q == "string" && q || (G += " The `href` argument encountered was " + O(q) + "."), D == null || typeof D != "object" ? G += " The `options` argument encountered was " + O(D) + "." : typeof D.as == "string" && D.as || (G += " The `as` option encountered was " + O(D.as) + "."), G && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        G
      ), typeof q == "string" && typeof D == "object" && D !== null && typeof D.as == "string") {
        G = D.as;
        var $ = v(
          G,
          D.crossOrigin
        );
        R.d.L(q, G, {
          crossOrigin: $,
          integrity: typeof D.integrity == "string" ? D.integrity : void 0,
          nonce: typeof D.nonce == "string" ? D.nonce : void 0,
          type: typeof D.type == "string" ? D.type : void 0,
          fetchPriority: typeof D.fetchPriority == "string" ? D.fetchPriority : void 0,
          referrerPolicy: typeof D.referrerPolicy == "string" ? D.referrerPolicy : void 0,
          imageSrcSet: typeof D.imageSrcSet == "string" ? D.imageSrcSet : void 0,
          imageSizes: typeof D.imageSizes == "string" ? D.imageSizes : void 0,
          media: typeof D.media == "string" ? D.media : void 0
        });
      }
    }, Bl.preloadModule = function(q, D) {
      var G = "";
      typeof q == "string" && q || (G += " The `href` argument encountered was " + O(q) + "."), D !== void 0 && typeof D != "object" ? G += " The `options` argument encountered was " + O(D) + "." : D && "as" in D && typeof D.as != "string" && (G += " The `as` option encountered was " + O(D.as) + "."), G && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        G
      ), typeof q == "string" && (D ? (G = v(
        D.as,
        D.crossOrigin
      ), R.d.m(q, {
        as: typeof D.as == "string" && D.as !== "script" ? D.as : void 0,
        crossOrigin: G,
        integrity: typeof D.integrity == "string" ? D.integrity : void 0
      })) : R.d.m(q));
    }, Bl.requestFormReset = function(q) {
      R.d.r(q);
    }, Bl.unstable_batchedUpdates = function(q, D) {
      return q(D);
    }, Bl.useFormState = function(q, D, G) {
      return k().useFormState(q, D, G);
    }, Bl.useFormStatus = function() {
      return k().useHostTransitionStatus();
    }, Bl.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Bl;
}
var l1;
function b1() {
  if (l1) return sv.exports;
  l1 = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (S) {
        console.error(S);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (h(), sv.exports = VE()) : sv.exports = GE(), sv.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a1;
function XE() {
  if (a1) return yp;
  a1 = 1;
  var h = v1(), S = jh(), T = b1();
  function v(n) {
    var a = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        a += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function O(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  var B = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), D = Symbol.for("react.consumer"), G = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), ge = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function yt(n) {
    return n === null || typeof n != "object" ? null : (n = Be && n[Be] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Bt = Symbol.for("react.client.reference");
  function St(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === Bt ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case R:
        return "Fragment";
      case Z:
        return "Portal";
      case te:
        return "Profiler";
      case z:
        return "StrictMode";
      case me:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case G:
          return (n.displayName || "Context") + ".Provider";
        case D:
          return (n._context.displayName || "Context") + ".Consumer";
        case $:
          var a = n.render;
          return n = n.displayName, n || (n = a.displayName || a.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case le:
          return a = n.displayName || null, a !== null ? a : St(n.type) || "Memo";
        case ce:
          a = n._payload, n = n._init;
          try {
            return St(n(a));
          } catch {
          }
      }
    return null;
  }
  var ve = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Le = Object.assign, xt, fn;
  function Xt(n) {
    if (xt === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        xt = a && a[1] || "", fn = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xt + n + fn;
  }
  var Ae = !1;
  function Mt(n, a) {
    if (!n || Ae) return "";
    Ae = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var oe = function() {
                throw Error();
              };
              if (Object.defineProperty(oe.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(oe, []);
                } catch (F) {
                  var X = F;
                }
                Reflect.construct(n, [], oe);
              } else {
                try {
                  oe.call();
                } catch (F) {
                  X = F;
                }
                n.call(oe.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                X = F;
              }
              (oe = n()) && typeof oe.catch == "function" && oe.catch(function() {
              });
            }
          } catch (F) {
            if (F && X && typeof F.stack == "string")
              return [F.stack, X.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), y = s[0], b = s[1];
      if (y && b) {
        var A = y.split(`
`), N = b.split(`
`);
        for (r = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < N.length && !N[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === A.length || r === N.length)
          for (c = A.length - 1, r = N.length - 1; 1 <= c && 0 <= r && A[c] !== N[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (A[c] !== N[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || A[c] !== N[r]) {
                  var ee = `
` + A[c].replace(" at new ", " at ");
                  return n.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", n.displayName)), ee;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = u;
    }
    return (u = n ? n.displayName || n.name : "") ? Xt(u) : "";
  }
  function Q(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return Xt(n.type);
      case 16:
        return Xt("Lazy");
      case 13:
        return Xt("Suspense");
      case 19:
        return Xt("SuspenseList");
      case 0:
      case 15:
        return n = Mt(n.type, !1), n;
      case 11:
        return n = Mt(n.type.render, !1), n;
      case 1:
        return n = Mt(n.type, !0), n;
      default:
        return "";
    }
  }
  function he(n) {
    try {
      var a = "";
      do
        a += Q(n), n = n.return;
      while (n);
      return a;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function de(n) {
    var a = n, u = n;
    if (n.alternate) for (; a.return; ) a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 4098 && (u = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? u : null;
  }
  function Se(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function C(n) {
    if (de(n) !== n)
      throw Error(v(188));
  }
  function W(n) {
    var a = n.alternate;
    if (!a) {
      if (a = de(n), a === null) throw Error(v(188));
      return a !== n ? null : n;
    }
    for (var u = n, c = a; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return C(r), n;
          if (s === c) return C(r), a;
          s = s.sibling;
        }
        throw Error(v(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var y = !1, b = r.child; b; ) {
          if (b === u) {
            y = !0, u = r, c = s;
            break;
          }
          if (b === c) {
            y = !0, c = r, u = s;
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = s.child; b; ) {
            if (b === u) {
              y = !0, u = s, c = r;
              break;
            }
            if (b === c) {
              y = !0, c = s, u = r;
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(v(189));
        }
      }
      if (u.alternate !== c) throw Error(v(190));
    }
    if (u.tag !== 3) throw Error(v(188));
    return u.stateNode.current === u ? n : a;
  }
  function pe(n) {
    var a = n.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return n;
    for (n = n.child; n !== null; ) {
      if (a = pe(n), a !== null) return a;
      n = n.sibling;
    }
    return null;
  }
  var De = Array.isArray, ye = T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ve = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, qe = [], Wt = -1;
  function $e(n) {
    return { current: n };
  }
  function Et(n) {
    0 > Wt || (n.current = qe[Wt], qe[Wt] = null, Wt--);
  }
  function rt(n, a) {
    Wt++, qe[Wt] = n.current, n.current = a;
  }
  var nn = $e(null), nt = $e(null), Mn = $e(null), Pn = $e(null);
  function ra(n, a) {
    switch (rt(Mn, a), rt(nt, n), rt(nn, null), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) && (a = a.namespaceURI) ? nh(a) : 0;
        break;
      default:
        if (n = n === 8 ? a.parentNode : a, a = n.tagName, n = n.namespaceURI)
          n = nh(n), a = Ty(n, a);
        else
          switch (a) {
            case "svg":
              a = 1;
              break;
            case "math":
              a = 2;
              break;
            default:
              a = 0;
          }
    }
    Et(nn), rt(nn, a);
  }
  function Tl() {
    Et(nn), Et(nt), Et(Mn);
  }
  function ot(n) {
    n.memoizedState !== null && rt(Pn, n);
    var a = nn.current, u = Ty(a, n.type);
    a !== u && (rt(nt, n), rt(nn, u));
  }
  function Nu(n) {
    nt.current === n && (Et(nn), Et(nt)), Pn.current === n && (Et(Pn), wl._currentValue = Ve);
  }
  var Ka = Object.prototype.hasOwnProperty, Yl = h.unstable_scheduleCallback, H = h.unstable_cancelCallback, Oe = h.unstable_shouldYield, Ce = h.unstable_requestPaint, Ye = h.unstable_now, Ft = h.unstable_getCurrentPriorityLevel, vt = h.unstable_ImmediatePriority, Ge = h.unstable_UserBlockingPriority, Ne = h.unstable_NormalPriority, jn = h.unstable_LowPriority, mn = h.unstable_IdlePriority, In = h.log, Oa = h.unstable_setDisableYieldValue, bn = null, Yt = null;
  function Rl(n) {
    if (Yt && typeof Yt.onCommitFiberRoot == "function")
      try {
        Yt.onCommitFiberRoot(
          bn,
          n,
          void 0,
          (n.current.flags & 128) === 128
        );
      } catch {
      }
  }
  function sa(n) {
    if (typeof In == "function" && Oa(n), Yt && typeof Yt.setStrictMode == "function")
      try {
        Yt.setStrictMode(bn, n);
      } catch {
      }
  }
  var Ln = Math.clz32 ? Math.clz32 : Wf, $f = Math.log, Mo = Math.LN2;
  function Wf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - ($f(n) / Mo | 0) | 0;
  }
  var Bu = 128, Ri = 4194304;
  function Da(n) {
    var a = n & 42;
    if (a !== 0) return a;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function ql(n, a) {
    var u = n.pendingLanes;
    if (u === 0) return 0;
    var c = 0, r = n.suspendedLanes, s = n.pingedLanes, y = n.warmLanes;
    n = n.finishedLanes !== 0;
    var b = u & 134217727;
    return b !== 0 ? (u = b & ~r, u !== 0 ? c = Da(u) : (s &= b, s !== 0 ? c = Da(s) : n || (y = b & ~y, y !== 0 && (c = Da(y))))) : (b = u & ~r, b !== 0 ? c = Da(b) : s !== 0 ? c = Da(s) : n || (y = u & ~y, y !== 0 && (c = Da(y)))), c === 0 ? 0 : a !== 0 && a !== c && !(a & r) && (r = c & -c, y = a & -a, r >= y || r === 32 && (y & 4194176) !== 0) ? a : c;
  }
  function Al(n, a) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & a) === 0;
  }
  function Ai(n, a) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
        return a + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ja() {
    var n = Bu;
    return Bu <<= 1, !(Bu & 4194176) && (Bu = 128), n;
  }
  function ln() {
    var n = Ri;
    return Ri <<= 1, !(Ri & 62914560) && (Ri = 4194304), n;
  }
  function da(n) {
    for (var a = [], u = 0; 31 > u; u++) a.push(n);
    return a;
  }
  function jl(n, a) {
    n.pendingLanes |= a, a !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function Yu(n, a, u, c, r, s) {
    var y = n.pendingLanes;
    n.pendingLanes = u, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= u, n.entangledLanes &= u, n.errorRecoveryDisabledLanes &= u, n.shellSuspendCounter = 0;
    var b = n.entanglements, A = n.expirationTimes, N = n.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var ee = 31 - Ln(u), oe = 1 << ee;
      b[ee] = 0, A[ee] = -1;
      var X = N[ee];
      if (X !== null)
        for (N[ee] = null, ee = 0; ee < X.length; ee++) {
          var F = X[ee];
          F !== null && (F.lane &= -536870913);
        }
      u &= ~oe;
    }
    c !== 0 && qu(n, c, 0), s !== 0 && r === 0 && n.tag !== 0 && (n.suspendedLanes |= s & ~(y & ~a));
  }
  function qu(n, a, u) {
    n.pendingLanes |= a, n.suspendedLanes &= ~a;
    var c = 31 - Ln(a);
    n.entangledLanes |= a, n.entanglements[c] = n.entanglements[c] | 1073741824 | u & 4194218;
  }
  function Oi(n, a) {
    var u = n.entangledLanes |= a;
    for (n = n.entanglements; u; ) {
      var c = 31 - Ln(u), r = 1 << c;
      r & a | n[c] & a && (n[c] |= a), u &= ~r;
    }
  }
  function $a(n) {
    return n &= -n, 2 < n ? 8 < n ? n & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function ju() {
    var n = ye.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : Ag(n.type));
  }
  function ha(n, a) {
    var u = ye.p;
    try {
      return ye.p = n, a();
    } finally {
      ye.p = u;
    }
  }
  var p = Math.random().toString(36).slice(2), x = "__reactFiber$" + p, I = "__reactProps$" + p, re = "__reactContainer$" + p, ze = "__reactEvents$" + p, we = "__reactListeners$" + p, Te = "__reactHandles$" + p, dt = "__reactResources$" + p, Ie = "__reactMarker$" + p;
  function Ut(n) {
    delete n[x], delete n[I], delete n[ze], delete n[we], delete n[Te];
  }
  function Qt(n) {
    var a = n[x];
    if (a) return a;
    for (var u = n.parentNode; u; ) {
      if (a = u[re] || u[x]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (n = ns(n); n !== null; ) {
            if (u = n[x]) return u;
            n = ns(n);
          }
        return a;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function hl(n) {
    if (n = n[x] || n[re]) {
      var a = n.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return n;
    }
    return null;
  }
  function Vn(n) {
    var a = n.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return n.stateNode;
    throw Error(v(33));
  }
  function el(n) {
    var a = n[dt];
    return a || (a = n[dt] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function Tt(n) {
    n[Ie] = !0;
  }
  var Gh = /* @__PURE__ */ new Set(), Xh = {};
  function Di(n, a) {
    Sc(n, a), Sc(n + "Capture", a);
  }
  function Sc(n, a) {
    for (Xh[n] = a, n = 0; n < a.length; n++)
      Gh.add(a[n]);
  }
  var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zi = {}, Qh = {};
  function Ff(n) {
    return Ka.call(Qh, n) ? !0 : Ka.call(zi, n) ? !1 : Uo.test(n) ? Qh[n] = !0 : (zi[n] = !0, !1);
  }
  function Ec(n, a, u) {
    if (Ff(a))
      if (u === null) n.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(a);
            return;
          case "boolean":
            var c = a.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              n.removeAttribute(a);
              return;
            }
        }
        n.setAttribute(a, "" + u);
      }
  }
  function Ho(n, a, u) {
    if (u === null) n.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(a);
          return;
      }
      n.setAttribute(a, "" + u);
    }
  }
  function Ll(n, a, u, c) {
    if (c === null) n.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(u);
          return;
      }
      n.setAttributeNS(a, u, "" + c);
    }
  }
  function Gn(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Hs(n) {
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function Rv(n) {
    var a = Hs(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      n.constructor.prototype,
      a
    ), c = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, s = u.set;
      return Object.defineProperty(n, a, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(y) {
          c = "" + y, s.call(this, y);
        }
      }), Object.defineProperty(n, a, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          n._valueTracker = null, delete n[a];
        }
      };
    }
  }
  function xs(n) {
    n._valueTracker || (n._valueTracker = Rv(n));
  }
  function Zh(n) {
    if (!n) return !1;
    var a = n._valueTracker;
    if (!a) return !0;
    var u = a.getValue(), c = "";
    return n && (c = Hs(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== u ? (a.setValue(n), !0) : !1;
  }
  function xo(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var kh = /[\n"\\]/g;
  function Vl(n) {
    return n.replace(
      kh,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ws(n, a, u, c, r, s, y, b) {
    n.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? n.type = y : n.removeAttribute("type"), a != null ? y === "number" ? (a === 0 && n.value === "" || n.value != a) && (n.value = "" + Gn(a)) : n.value !== "" + Gn(a) && (n.value = "" + Gn(a)) : y !== "submit" && y !== "reset" || n.removeAttribute("value"), a != null ? Jh(n, y, Gn(a)) : u != null ? Jh(n, y, Gn(u)) : c != null && n.removeAttribute("value"), r == null && s != null && (n.defaultChecked = !!s), r != null && (n.checked = r && typeof r != "function" && typeof r != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? n.name = "" + Gn(b) : n.removeAttribute("name");
  }
  function Kh(n, a, u, c, r, s, y, b) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (n.type = s), a != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || a != null))
        return;
      u = u != null ? "" + Gn(u) : "", a = a != null ? "" + Gn(a) : u, b || a === n.value || (n.value = a), n.defaultValue = a;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, n.checked = b ? n.checked : !!c, n.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (n.name = y);
  }
  function Jh(n, a, u) {
    a === "number" && xo(n.ownerDocument) === n || n.defaultValue === "" + u || (n.defaultValue = "" + u);
  }
  function Tc(n, a, u, c) {
    if (n = n.options, a) {
      a = {};
      for (var r = 0; r < u.length; r++)
        a["$" + u[r]] = !0;
      for (u = 0; u < n.length; u++)
        r = a.hasOwnProperty("$" + n[u].value), n[u].selected !== r && (n[u].selected = r), r && c && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + Gn(u), a = null, r = 0; r < n.length; r++) {
        if (n[r].value === u) {
          n[r].selected = !0, c && (n[r].defaultSelected = !0);
          return;
        }
        a !== null || n[r].disabled || (a = n[r]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function _s(n, a, u) {
    if (a != null && (a = "" + Gn(a), a !== n.value && (n.value = a), u == null)) {
      n.defaultValue !== a && (n.defaultValue = a);
      return;
    }
    n.defaultValue = u != null ? "" + Gn(u) : "";
  }
  function Pf(n, a, u, c) {
    if (a == null) {
      if (c != null) {
        if (u != null) throw Error(v(92));
        if (De(c)) {
          if (1 < c.length) throw Error(v(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), a = u;
    }
    u = Gn(a), n.defaultValue = u, c = n.textContent, c === u && c !== "" && c !== null && (n.value = c);
  }
  function Wa(n, a) {
    if (a) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Av = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function $h(n, a, u) {
    var c = a.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? n.setProperty(a, "") : a === "float" ? n.cssFloat = "" : n[a] = "" : c ? n.setProperty(a, u) : typeof u != "number" || u === 0 || Av.has(a) ? a === "float" ? n.cssFloat = u : n[a] = ("" + u).trim() : n[a] = u + "px";
  }
  function Wh(n, a, u) {
    if (a != null && typeof a != "object")
      throw Error(v(62));
    if (n = n.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || a != null && a.hasOwnProperty(c) || (c.indexOf("--") === 0 ? n.setProperty(c, "") : c === "float" ? n.cssFloat = "" : n[c] = "");
      for (var r in a)
        c = a[r], a.hasOwnProperty(r) && u[r] !== c && $h(n, r, c);
    } else
      for (var s in a)
        a.hasOwnProperty(s) && $h(n, s, a[s]);
  }
  function Rc(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dp = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ov = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ns(n) {
    return Ov.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var Fh = null;
  function Ph(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Fa = null, Ci = null;
  function Ih(n) {
    var a = hl(n);
    if (a && (n = a.stateNode)) {
      var u = n[I] || null;
      e: switch (n = a.stateNode, a.type) {
        case "input":
          if (ws(
            n,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), a = u.name, u.type === "radio" && a != null) {
            for (u = n; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Vl(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < u.length; a++) {
              var c = u[a];
              if (c !== n && c.form === n.form) {
                var r = c[I] || null;
                if (!r) throw Error(v(90));
                ws(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (a = 0; a < u.length; a++)
              c = u[a], c.form === n.form && Zh(c);
          }
          break e;
        case "textarea":
          _s(n, u.value, u.defaultValue);
          break e;
        case "select":
          a = u.value, a != null && Tc(n, !!u.multiple, a, !1);
      }
    }
  }
  var Bs = !1;
  function wo(n, a, u) {
    if (Bs) return n(a, u);
    Bs = !0;
    try {
      var c = n(a);
      return c;
    } finally {
      if (Bs = !1, (Fa !== null || Ci !== null) && (uo(), Fa && (a = Fa, n = Ci, Ci = Fa = null, Ih(a), n)))
        for (a = 0; a < n.length; a++) Ih(n[a]);
    }
  }
  function _o(n, a) {
    var u = n.stateNode;
    if (u === null) return null;
    var c = u[I] || null;
    if (c === null) return null;
    u = c[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (u && typeof u != "function")
      throw Error(
        v(231, a, typeof u)
      );
    return u;
  }
  var No = !1;
  if (rn)
    try {
      var Mi = {};
      Object.defineProperty(Mi, "passive", {
        get: function() {
          No = !0;
        }
      }), window.addEventListener("test", Mi, Mi), window.removeEventListener("test", Mi, Mi);
    } catch {
      No = !1;
    }
  var Lu = null, tl = null, Ys = null;
  function qs() {
    if (Ys) return Ys;
    var n, a = tl, u = a.length, c, r = "value" in Lu ? Lu.value : Lu.textContent, s = r.length;
    for (n = 0; n < u && a[n] === r[n]; n++) ;
    var y = u - n;
    for (c = 1; c <= y && a[u - c] === r[s - c]; c++) ;
    return Ys = r.slice(n, 1 < c ? 1 - c : void 0);
  }
  function If(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function er() {
    return !0;
  }
  function zp() {
    return !1;
  }
  function Ol(n) {
    function a(u, c, r, s, y) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = y, this.currentTarget = null;
      for (var b in n)
        n.hasOwnProperty(b) && (u = n[b], this[b] = u ? u(s) : s[b]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? er : zp, this.isPropagationStopped = zp, this;
    }
    return Le(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = er);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = er);
      },
      persist: function() {
      },
      isPersistent: er
    }), a;
  }
  var Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(n) {
      return n.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, js = Ol(Ui), Bo = Le({}, Ui, { view: 0, detail: 0 }), Dv = Ol(Bo), Yo, Ls, qo, tr = Le({}, Bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Gl,
    button: 0,
    buttons: 0,
    relatedTarget: function(n) {
      return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
    },
    movementX: function(n) {
      return "movementX" in n ? n.movementX : (n !== qo && (qo && n.type === "mousemove" ? (Yo = n.screenX - qo.screenX, Ls = n.screenY - qo.screenY) : Ls = Yo = 0, qo = n), Yo);
    },
    movementY: function(n) {
      return "movementY" in n ? n.movementY : Ls;
    }
  }), Cp = Ol(tr), zv = Le({}, tr, { dataTransfer: 0 }), Cv = Ol(zv), Mv = Le({}, Bo, { relatedTarget: 0 }), em = Ol(Mv), nr = Le({}, Ui, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mp = Ol(nr), Up = Le({}, Ui, {
    clipboardData: function(n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    }
  }), Hp = Ol(Up), xp = Le({}, Ui, { data: 0 }), Vs = Ol(xp), Uv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, wp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ac = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Oc(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = Ac[n]) ? !!a[n] : !1;
  }
  function Gl() {
    return Oc;
  }
  var Gs = Le({}, Bo, {
    key: function(n) {
      if (n.key) {
        var a = Uv[n.key] || n.key;
        if (a !== "Unidentified") return a;
      }
      return n.type === "keypress" ? (n = If(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? wp[n.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Gl,
    charCode: function(n) {
      return n.type === "keypress" ? If(n) : 0;
    },
    keyCode: function(n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function(n) {
      return n.type === "keypress" ? If(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    }
  }), Xs = Ol(Gs), tm = Le({}, tr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Xn = Ol(tm), _p = Le({}, Bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gl
  }), Qs = Ol(_p), Dc = Le({}, Ui, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nm = Ol(Dc), Np = Le({}, tr, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Bp = Ol(Np), lm = Le({}, Ui, {
    newState: 0,
    oldState: 0
  }), Vu = Ol(lm), Zs = [9, 13, 27, 32], zc = rn && "CompositionEvent" in window, Cc = null;
  rn && "documentMode" in document && (Cc = document.documentMode);
  var am = rn && "TextEvent" in window && !Cc, um = rn && (!zc || Cc && 8 < Cc && 11 >= Cc), za = " ", Ca = !1;
  function lr(n, a) {
    switch (n) {
      case "keyup":
        return Zs.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Dl(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ma = !1;
  function Yp(n, a) {
    switch (n) {
      case "compositionend":
        return Dl(a);
      case "keypress":
        return a.which !== 32 ? null : (Ca = !0, za);
      case "textInput":
        return n = a.data, n === za && Ca ? null : n;
      default:
        return null;
    }
  }
  function im(n, a) {
    if (ma)
      return n === "compositionend" || !zc && lr(n, a) ? (n = qs(), Ys = tl = Lu = null, ma = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return um && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var cm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Hi(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!cm[n.type] : a === "textarea";
  }
  function xi(n, a, u, c) {
    Fa ? Ci ? Ci.push(c) : Ci = [c] : Fa = c, a = cl(a, "onChange"), 0 < a.length && (u = new js(
      "onChange",
      "change",
      null,
      u,
      c
    ), n.push({ event: u, listeners: a }));
  }
  var Mc = null, Ma = null;
  function qp(n) {
    Fd(n, 0);
  }
  function ar(n) {
    var a = Vn(n);
    if (Zh(a)) return n;
  }
  function jo(n, a) {
    if (n === "change") return a;
  }
  var Lo = !1;
  if (rn) {
    var Uc;
    if (rn) {
      var ks = "oninput" in document;
      if (!ks) {
        var om = document.createElement("div");
        om.setAttribute("oninput", "return;"), ks = typeof om.oninput == "function";
      }
      Uc = ks;
    } else Uc = !1;
    Lo = Uc && (!document.documentMode || 9 < document.documentMode);
  }
  function fm() {
    Mc && (Mc.detachEvent("onpropertychange", ur), Ma = Mc = null);
  }
  function ur(n) {
    if (n.propertyName === "value" && ar(Ma)) {
      var a = [];
      xi(
        a,
        Ma,
        n,
        Ph(n)
      ), wo(qp, a);
    }
  }
  function jp(n, a, u) {
    n === "focusin" ? (fm(), Mc = a, Ma = u, Mc.attachEvent("onpropertychange", ur)) : n === "focusout" && fm();
  }
  function Lp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ar(Ma);
  }
  function Vp(n, a) {
    if (n === "click") return ar(a);
  }
  function Qn(n, a) {
    if (n === "input" || n === "change")
      return ar(a);
  }
  function Ks(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var nl = typeof Object.is == "function" ? Object.is : Ks;
  function Gu(n, a) {
    if (nl(n, a)) return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(n), c = Object.keys(a);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!Ka.call(a, r) || !nl(n[r], a[r]))
        return !1;
    }
    return !0;
  }
  function ir(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function cr(n, a) {
    var u = ir(n);
    n = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = n + u.textContent.length, n <= a && c >= a)
          return { node: u, offset: a - n };
        n = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ir(u);
    }
  }
  function or(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? or(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function rm(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var a = xo(n.document); a instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) n = a.contentWindow;
      else break;
      a = xo(n.document);
    }
    return a;
  }
  function Js(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  function sm(n, a) {
    var u = rm(a);
    a = n.focusedElem;
    var c = n.selectionRange;
    if (u !== a && a && a.ownerDocument && or(a.ownerDocument.documentElement, a)) {
      if (c !== null && Js(a)) {
        if (n = c.start, u = c.end, u === void 0 && (u = n), "selectionStart" in a)
          a.selectionStart = n, a.selectionEnd = Math.min(
            u,
            a.value.length
          );
        else if (u = (n = a.ownerDocument || document) && n.defaultView || window, u.getSelection) {
          u = u.getSelection();
          var r = a.textContent.length, s = Math.min(c.start, r);
          c = c.end === void 0 ? s : Math.min(c.end, r), !u.extend && s > c && (r = c, c = s, s = r), r = cr(a, s);
          var y = cr(
            a,
            c
          );
          r && y && (u.rangeCount !== 1 || u.anchorNode !== r.node || u.anchorOffset !== r.offset || u.focusNode !== y.node || u.focusOffset !== y.offset) && (n = n.createRange(), n.setStart(r.node, r.offset), u.removeAllRanges(), s > c ? (u.addRange(n), u.extend(y.node, y.offset)) : (n.setEnd(
            y.node,
            y.offset
          ), u.addRange(n)));
        }
      }
      for (n = [], u = a; u = u.parentNode; )
        u.nodeType === 1 && n.push({
          element: u,
          left: u.scrollLeft,
          top: u.scrollTop
        });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < n.length; a++)
        u = n[a], u.element.scrollLeft = u.left, u.element.scrollTop = u.top;
    }
  }
  var dm = rn && "documentMode" in document && 11 >= document.documentMode, Xl = null, $s = null, ya = null, Ua = !1;
  function fr(n, a, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Ua || Xl == null || Xl !== xo(c) || (c = Xl, "selectionStart" in c && Js(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ya && Gu(ya, c) || (ya = c, c = cl($s, "onSelect"), 0 < c.length && (a = new js(
      "onSelect",
      "select",
      null,
      a,
      u
    ), n.push({ event: a, listeners: c }), a.target = Xl)));
  }
  function Xu(n, a) {
    var u = {};
    return u[n.toLowerCase()] = a.toLowerCase(), u["Webkit" + n] = "webkit" + a, u["Moz" + n] = "moz" + a, u;
  }
  var pa = {
    animationend: Xu("Animation", "AnimationEnd"),
    animationiteration: Xu("Animation", "AnimationIteration"),
    animationstart: Xu("Animation", "AnimationStart"),
    transitionrun: Xu("Transition", "TransitionRun"),
    transitionstart: Xu("Transition", "TransitionStart"),
    transitioncancel: Xu("Transition", "TransitionCancel"),
    transitionend: Xu("Transition", "TransitionEnd")
  }, Hc = {}, Gp = {};
  rn && (Gp = document.createElement("div").style, "AnimationEvent" in window || (delete pa.animationend.animation, delete pa.animationiteration.animation, delete pa.animationstart.animation), "TransitionEvent" in window || delete pa.transitionend.transition);
  function wi(n) {
    if (Hc[n]) return Hc[n];
    if (!pa[n]) return n;
    var a = pa[n], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in Gp)
        return Hc[n] = a[u];
    return n;
  }
  var Xp = wi("animationend"), Ws = wi("animationiteration"), rr = wi("animationstart"), Qp = wi("transitionrun"), lt = wi("transitionstart"), se = wi("transitioncancel"), xc = wi("transitionend"), sr = /* @__PURE__ */ new Map(), an = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
    " "
  );
  function Ql(n, a) {
    sr.set(n, a), Di(a, [n]);
  }
  var zl = [], wc = 0, dr = 0;
  function Fs() {
    for (var n = wc, a = dr = wc = 0; a < n; ) {
      var u = zl[a];
      zl[a++] = null;
      var c = zl[a];
      zl[a++] = null;
      var r = zl[a];
      zl[a++] = null;
      var s = zl[a];
      if (zl[a++] = null, c !== null && r !== null) {
        var y = c.pending;
        y === null ? r.next = r : (r.next = y.next, y.next = r), c.pending = r;
      }
      s !== 0 && ml(u, r, s);
    }
  }
  function Vo(n, a, u, c) {
    zl[wc++] = n, zl[wc++] = a, zl[wc++] = u, zl[wc++] = c, dr |= c, n.lanes |= c, n = n.alternate, n !== null && (n.lanes |= c);
  }
  function hr(n, a, u, c) {
    return Vo(n, a, u, c), pt(n);
  }
  function Pa(n, a) {
    return Vo(n, null, null, a), pt(n);
  }
  function ml(n, a, u) {
    n.lanes |= u;
    var c = n.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = n.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (n = s.stateNode, n === null || n._visibility & 1 || (r = !0)), n = s, s = s.return;
    r && a !== null && n.tag === 3 && (s = n.stateNode, r = 31 - Ln(u), s = s.hiddenUpdates, n = s[r], n === null ? s[r] = [a] : n.push(a), a.lane = u | 536870912);
  }
  function pt(n) {
    if (50 < bf)
      throw bf = 0, Xd = null, Error(v(185));
    for (var a = n.return; a !== null; )
      n = a, a = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ia = {}, Qu = /* @__PURE__ */ new WeakMap();
  function Un(n, a) {
    if (typeof n == "object" && n !== null) {
      var u = Qu.get(n);
      return u !== void 0 ? u : (a = {
        value: n,
        source: a,
        stack: he(a)
      }, Qu.set(n, a), a);
    }
    return {
      value: n,
      source: a,
      stack: he(a)
    };
  }
  var ll = [], _i = 0, Zu = null, Go = 0, al = [], Cl = 0, eu = null, tu = 1, nu = "";
  function Ni(n, a) {
    ll[_i++] = Go, ll[_i++] = Zu, Zu = n, Go = a;
  }
  function hm(n, a, u) {
    al[Cl++] = tu, al[Cl++] = nu, al[Cl++] = eu, eu = n;
    var c = tu;
    n = nu;
    var r = 32 - Ln(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Ln(a) + r;
    if (30 < s) {
      var y = r - r % 5;
      s = (c & (1 << y) - 1).toString(32), c >>= y, r -= y, tu = 1 << 32 - Ln(a) + r | u << r | c, nu = s + n;
    } else
      tu = 1 << s | u << r | c, nu = n;
  }
  function Ps(n) {
    n.return !== null && (Ni(n, 1), hm(n, 1, 0));
  }
  function mr(n) {
    for (; n === Zu; )
      Zu = ll[--_i], ll[_i] = null, Go = ll[--_i], ll[_i] = null;
    for (; n === eu; )
      eu = al[--Cl], al[Cl] = null, nu = al[--Cl], al[Cl] = null, tu = al[--Cl], al[Cl] = null;
  }
  var Zn = null, Sn = null, ht = !1, ga = null, Ha = !1, mm = Error(v(519));
  function Bi(n) {
    var a = Error(v(418, ""));
    throw Qo(Un(a, n)), mm;
  }
  function ym(n) {
    var a = n.stateNode, u = n.type, c = n.memoizedProps;
    switch (a[x] = n, a[I] = c, u) {
      case "dialog":
        ft("cancel", a), ft("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", a);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Eu.length; u++)
          ft(Eu[u], a);
        break;
      case "source":
        ft("error", a);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", a), ft("load", a);
        break;
      case "details":
        ft("toggle", a);
        break;
      case "input":
        ft("invalid", a), Kh(
          a,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), xs(a);
        break;
      case "select":
        ft("invalid", a);
        break;
      case "textarea":
        ft("invalid", a), Pf(a, c.value, c.defaultValue, c.children), xs(a);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || a.textContent === "" + u || c.suppressHydrationWarning === !0 || Ke(a.textContent, u) ? (c.popover != null && (ft("beforetoggle", a), ft("toggle", a)), c.onScroll != null && ft("scroll", a), c.onScrollEnd != null && ft("scrollend", a), c.onClick != null && (a.onclick = lc), a = !0) : a = !1, a || Bi(n);
  }
  function pm(n) {
    for (Zn = n.return; Zn; )
      switch (Zn.tag) {
        case 3:
        case 27:
          Ha = !0;
          return;
        case 5:
        case 13:
          Ha = !1;
          return;
        default:
          Zn = Zn.return;
      }
  }
  function _c(n) {
    if (n !== Zn) return !1;
    if (!ht) return pm(n), ht = !0, !1;
    var a = !1, u;
    if ((u = n.tag !== 3 && n.tag !== 27) && ((u = n.tag === 5) && (u = n.type, u = !(u !== "form" && u !== "button") || Pr(n.type, n.memoizedProps)), u = !u), u && (a = !0), a && Sn && Bi(n), pm(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(v(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8)
            if (u = n.data, u === "/$") {
              if (a === 0) {
                Sn = Bn(n.nextSibling);
                break e;
              }
              a--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || a++;
          n = n.nextSibling;
        }
        Sn = null;
      }
    } else
      Sn = Zn ? Bn(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Xo() {
    Sn = Zn = null, ht = !1;
  }
  function Qo(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  var lu = Error(v(460)), yr = Error(v(474)), Is = { then: function() {
  } };
  function Zp(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function Nc() {
  }
  function Bc(n, a, u) {
    switch (u = n[u], u === void 0 ? n.push(a) : u !== a && (a.then(Nc, Nc), a = u), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw n = a.reason, n === lu ? Error(v(483)) : n;
      default:
        if (typeof a.status == "string") a.then(Nc, Nc);
        else {
          if (n = zt, n !== null && 100 < n.shellSuspendCounter)
            throw Error(v(482));
          n = a, n.status = "pending", n.then(
            function(c) {
              if (a.status === "pending") {
                var r = a;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (a.status === "pending") {
                var r = a;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw n = a.reason, n === lu ? Error(v(483)) : n;
        }
        throw Yc = a, lu;
    }
  }
  var Yc = null;
  function Yi() {
    if (Yc === null) throw Error(v(459));
    var n = Yc;
    return Yc = null, n;
  }
  var En = null, qi = 0;
  function Zo(n) {
    var a = qi;
    return qi += 1, En === null && (En = []), Bc(En, n, a);
  }
  function ko(n, a) {
    a = a.props.ref, n.ref = a !== void 0 ? a : null;
  }
  function Ko(n, a) {
    throw a.$$typeof === B ? Error(v(525)) : (n = Object.prototype.toString.call(a), Error(
      v(
        31,
        n === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : n
      )
    ));
  }
  function pr(n) {
    var a = n._init;
    return a(n._payload);
  }
  function ed(n) {
    function a(Y, _) {
      if (n) {
        var j = Y.deletions;
        j === null ? (Y.deletions = [_], Y.flags |= 16) : j.push(_);
      }
    }
    function u(Y, _) {
      if (!n) return null;
      for (; _ !== null; )
        a(Y, _), _ = _.sibling;
      return null;
    }
    function c(Y) {
      for (var _ = /* @__PURE__ */ new Map(); Y !== null; )
        Y.key !== null ? _.set(Y.key, Y) : _.set(Y.index, Y), Y = Y.sibling;
      return _;
    }
    function r(Y, _) {
      return Y = La(Y, _), Y.index = 0, Y.sibling = null, Y;
    }
    function s(Y, _, j) {
      return Y.index = j, n ? (j = Y.alternate, j !== null ? (j = j.index, j < _ ? (Y.flags |= 33554434, _) : j) : (Y.flags |= 33554434, _)) : (Y.flags |= 1048576, _);
    }
    function y(Y) {
      return n && Y.alternate === null && (Y.flags |= 33554434), Y;
    }
    function b(Y, _, j, ue) {
      return _ === null || _.tag !== 6 ? (_ = qd(j, Y.mode, ue), _.return = Y, _) : (_ = r(_, j), _.return = Y, _);
    }
    function A(Y, _, j, ue) {
      var Ue = j.type;
      return Ue === R ? ee(
        Y,
        _,
        j.props.children,
        ue,
        j.key
      ) : _ !== null && (_.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === ce && pr(Ue) === _.type) ? (_ = r(_, j.props), ko(_, j), _.return = Y, _) : (_ = yf(
        j.type,
        j.key,
        j.props,
        null,
        Y.mode,
        ue
      ), ko(_, j), _.return = Y, _);
    }
    function N(Y, _, j, ue) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== j.containerInfo || _.stateNode.implementation !== j.implementation ? (_ = Vr(j, Y.mode, ue), _.return = Y, _) : (_ = r(_, j.children || []), _.return = Y, _);
    }
    function ee(Y, _, j, ue, Ue) {
      return _ === null || _.tag !== 7 ? (_ = It(
        j,
        Y.mode,
        ue,
        Ue
      ), _.return = Y, _) : (_ = r(_, j), _.return = Y, _);
    }
    function oe(Y, _, j) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = qd(
          "" + _,
          Y.mode,
          j
        ), _.return = Y, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case k:
            return j = yf(
              _.type,
              _.key,
              _.props,
              null,
              Y.mode,
              j
            ), ko(j, _), j.return = Y, j;
          case Z:
            return _ = Vr(
              _,
              Y.mode,
              j
            ), _.return = Y, _;
          case ce:
            var ue = _._init;
            return _ = ue(_._payload), oe(Y, _, j);
        }
        if (De(_) || yt(_))
          return _ = It(
            _,
            Y.mode,
            j,
            null
          ), _.return = Y, _;
        if (typeof _.then == "function")
          return oe(Y, Zo(_), j);
        if (_.$$typeof === G)
          return oe(
            Y,
            zd(Y, _),
            j
          );
        Ko(Y, _);
      }
      return null;
    }
    function X(Y, _, j, ue) {
      var Ue = _ !== null ? _.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return Ue !== null ? null : b(Y, _, "" + j, ue);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case k:
            return j.key === Ue ? A(Y, _, j, ue) : null;
          case Z:
            return j.key === Ue ? N(Y, _, j, ue) : null;
          case ce:
            return Ue = j._init, j = Ue(j._payload), X(Y, _, j, ue);
        }
        if (De(j) || yt(j))
          return Ue !== null ? null : ee(Y, _, j, ue, null);
        if (typeof j.then == "function")
          return X(
            Y,
            _,
            Zo(j),
            ue
          );
        if (j.$$typeof === G)
          return X(
            Y,
            _,
            zd(Y, j),
            ue
          );
        Ko(Y, j);
      }
      return null;
    }
    function F(Y, _, j, ue, Ue) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number" || typeof ue == "bigint")
        return Y = Y.get(j) || null, b(_, Y, "" + ue, Ue);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case k:
            return Y = Y.get(
              ue.key === null ? j : ue.key
            ) || null, A(_, Y, ue, Ue);
          case Z:
            return Y = Y.get(
              ue.key === null ? j : ue.key
            ) || null, N(_, Y, ue, Ue);
          case ce:
            var We = ue._init;
            return ue = We(ue._payload), F(
              Y,
              _,
              j,
              ue,
              Ue
            );
        }
        if (De(ue) || yt(ue))
          return Y = Y.get(j) || null, ee(_, Y, ue, Ue, null);
        if (typeof ue.then == "function")
          return F(
            Y,
            _,
            j,
            Zo(ue),
            Ue
          );
        if (ue.$$typeof === G)
          return F(
            Y,
            _,
            j,
            zd(_, ue),
            Ue
          );
        Ko(_, ue);
      }
      return null;
    }
    function Me(Y, _, j, ue) {
      for (var Ue = null, We = null, _e = _, je = _ = 0, Dn = null; _e !== null && je < j.length; je++) {
        _e.index > je ? (Dn = _e, _e = null) : Dn = _e.sibling;
        var gt = X(
          Y,
          _e,
          j[je],
          ue
        );
        if (gt === null) {
          _e === null && (_e = Dn);
          break;
        }
        n && _e && gt.alternate === null && a(Y, _e), _ = s(gt, _, je), We === null ? Ue = gt : We.sibling = gt, We = gt, _e = Dn;
      }
      if (je === j.length)
        return u(Y, _e), ht && Ni(Y, je), Ue;
      if (_e === null) {
        for (; je < j.length; je++)
          _e = oe(Y, j[je], ue), _e !== null && (_ = s(
            _e,
            _,
            je
          ), We === null ? Ue = _e : We.sibling = _e, We = _e);
        return ht && Ni(Y, je), Ue;
      }
      for (_e = c(_e); je < j.length; je++)
        Dn = F(
          _e,
          Y,
          je,
          j[je],
          ue
        ), Dn !== null && (n && Dn.alternate !== null && _e.delete(
          Dn.key === null ? je : Dn.key
        ), _ = s(
          Dn,
          _,
          je
        ), We === null ? Ue = Dn : We.sibling = Dn, We = Dn);
      return n && _e.forEach(function(hc) {
        return a(Y, hc);
      }), ht && Ni(Y, je), Ue;
    }
    function Xe(Y, _, j, ue) {
      if (j == null) throw Error(v(151));
      for (var Ue = null, We = null, _e = _, je = _ = 0, Dn = null, gt = j.next(); _e !== null && !gt.done; je++, gt = j.next()) {
        _e.index > je ? (Dn = _e, _e = null) : Dn = _e.sibling;
        var hc = X(Y, _e, gt.value, ue);
        if (hc === null) {
          _e === null && (_e = Dn);
          break;
        }
        n && _e && hc.alternate === null && a(Y, _e), _ = s(hc, _, je), We === null ? Ue = hc : We.sibling = hc, We = hc, _e = Dn;
      }
      if (gt.done)
        return u(Y, _e), ht && Ni(Y, je), Ue;
      if (_e === null) {
        for (; !gt.done; je++, gt = j.next())
          gt = oe(Y, gt.value, ue), gt !== null && (_ = s(gt, _, je), We === null ? Ue = gt : We.sibling = gt, We = gt);
        return ht && Ni(Y, je), Ue;
      }
      for (_e = c(_e); !gt.done; je++, gt = j.next())
        gt = F(_e, Y, je, gt.value, ue), gt !== null && (n && gt.alternate !== null && _e.delete(gt.key === null ? je : gt.key), _ = s(gt, _, je), We === null ? Ue = gt : We.sibling = gt, We = gt);
      return n && _e.forEach(function(Jv) {
        return a(Y, Jv);
      }), ht && Ni(Y, je), Ue;
    }
    function Lt(Y, _, j, ue) {
      if (typeof j == "object" && j !== null && j.type === R && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case k:
            e: {
              for (var Ue = j.key; _ !== null; ) {
                if (_.key === Ue) {
                  if (Ue = j.type, Ue === R) {
                    if (_.tag === 7) {
                      u(
                        Y,
                        _.sibling
                      ), ue = r(
                        _,
                        j.props.children
                      ), ue.return = Y, Y = ue;
                      break e;
                    }
                  } else if (_.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === ce && pr(Ue) === _.type) {
                    u(
                      Y,
                      _.sibling
                    ), ue = r(_, j.props), ko(ue, j), ue.return = Y, Y = ue;
                    break e;
                  }
                  u(Y, _);
                  break;
                } else a(Y, _);
                _ = _.sibling;
              }
              j.type === R ? (ue = It(
                j.props.children,
                Y.mode,
                ue,
                j.key
              ), ue.return = Y, Y = ue) : (ue = yf(
                j.type,
                j.key,
                j.props,
                null,
                Y.mode,
                ue
              ), ko(ue, j), ue.return = Y, Y = ue);
            }
            return y(Y);
          case Z:
            e: {
              for (Ue = j.key; _ !== null; ) {
                if (_.key === Ue)
                  if (_.tag === 4 && _.stateNode.containerInfo === j.containerInfo && _.stateNode.implementation === j.implementation) {
                    u(
                      Y,
                      _.sibling
                    ), ue = r(_, j.children || []), ue.return = Y, Y = ue;
                    break e;
                  } else {
                    u(Y, _);
                    break;
                  }
                else a(Y, _);
                _ = _.sibling;
              }
              ue = Vr(j, Y.mode, ue), ue.return = Y, Y = ue;
            }
            return y(Y);
          case ce:
            return Ue = j._init, j = Ue(j._payload), Lt(
              Y,
              _,
              j,
              ue
            );
        }
        if (De(j))
          return Me(
            Y,
            _,
            j,
            ue
          );
        if (yt(j)) {
          if (Ue = yt(j), typeof Ue != "function") throw Error(v(150));
          return j = Ue.call(j), Xe(
            Y,
            _,
            j,
            ue
          );
        }
        if (typeof j.then == "function")
          return Lt(
            Y,
            _,
            Zo(j),
            ue
          );
        if (j.$$typeof === G)
          return Lt(
            Y,
            _,
            zd(Y, j),
            ue
          );
        Ko(Y, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, _ !== null && _.tag === 6 ? (u(Y, _.sibling), ue = r(_, j), ue.return = Y, Y = ue) : (u(Y, _), ue = qd(j, Y.mode, ue), ue.return = Y, Y = ue), y(Y)) : u(Y, _);
    }
    return function(Y, _, j, ue) {
      try {
        qi = 0;
        var Ue = Lt(
          Y,
          _,
          j,
          ue
        );
        return En = null, Ue;
      } catch (_e) {
        if (_e === lu) throw _e;
        var We = An(29, _e, null, Y.mode);
        return We.lanes = ue, We.return = Y, We;
      } finally {
      }
    };
  }
  var au = ed(!0), td = ed(!1), ku = $e(null), Jo = $e(0);
  function gm(n, a) {
    n = di, rt(Jo, n), rt(ku, a), di = n | a.baseLanes;
  }
  function nd() {
    rt(Jo, di), rt(ku, ku.current);
  }
  function gr() {
    di = Jo.current, Et(ku), Et(Jo);
  }
  var Zl = $e(null), xa = null;
  function uu(n) {
    var a = n.alternate;
    rt(yn, yn.current & 1), rt(Zl, n), xa === null && (a === null || ku.current !== null || a.memoizedState !== null) && (xa = n);
  }
  function vm(n) {
    if (n.tag === 22) {
      if (rt(yn, yn.current), rt(Zl, n), xa === null) {
        var a = n.alternate;
        a !== null && a.memoizedState !== null && (xa = n);
      }
    } else Ku();
  }
  function Ku() {
    rt(yn, yn.current), rt(Zl, Zl.current);
  }
  function wa(n) {
    Et(Zl), xa === n && (xa = null), Et(yn);
  }
  var yn = $e(0);
  function vr(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var qc = typeof AbortController < "u" ? AbortController : function() {
    var n = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        n.push(c);
      }
    };
    this.abort = function() {
      a.aborted = !0, n.forEach(function(u) {
        return u();
      });
    };
  }, bm = h.unstable_scheduleCallback, Sm = h.unstable_NormalPriority, Tn = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Em() {
    return {
      controller: new qc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function $o(n) {
    n.refCount--, n.refCount === 0 && bm(Sm, function() {
      n.controller.abort();
    });
  }
  var Ju = null, br = 0, $u = 0, jc = null;
  function kp(n, a) {
    if (Ju === null) {
      var u = Ju = [];
      br = 0, $u = Af(), jc = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return br++, a.then(ld, ld), a;
  }
  function ld() {
    if (--br === 0 && Ju !== null) {
      jc !== null && (jc.status = "fulfilled");
      var n = Ju;
      Ju = null, $u = 0, jc = null;
      for (var a = 0; a < n.length; a++) (0, n[a])();
    }
  }
  function Tm(n, a) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return n.then(
      function() {
        c.status = "fulfilled", c.value = a;
        for (var r = 0; r < u.length; r++) (0, u[r])(a);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Rm = ve.S;
  ve.S = function(n, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && kp(n, a), Rm !== null && Rm(n, a);
  };
  var ji = $e(null);
  function Wu() {
    var n = ji.current;
    return n !== null ? n : zt.pooledCache;
  }
  function Sr(n, a) {
    a === null ? rt(ji, ji.current) : rt(ji, a.pool);
  }
  function Am() {
    var n = Wu();
    return n === null ? null : { parent: Tn._currentValue, pool: n };
  }
  var Fu = 0, Ze = null, Rt = null, un = null, Wo = !1, Li = !1, Lc = !1, pn = 0, Fo = 0, Vc = null, Kp = 0;
  function cn() {
    throw Error(v(321));
  }
  function ad(n, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < n.length; u++)
      if (!nl(n[u], a[u])) return !1;
    return !0;
  }
  function Gc(n, a, u, c, r, s) {
    return Fu = s, Ze = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, ve.H = n === null || n.memoizedState === null ? Xi : ni, Lc = !1, s = u(c, r), Lc = !1, Li && (s = Om(
      a,
      u,
      c,
      r
    )), ud(n), s;
  }
  function ud(n) {
    ve.H = Hn;
    var a = Rt !== null && Rt.next !== null;
    if (Fu = 0, un = Rt = Ze = null, Wo = !1, Fo = 0, Vc = null, a) throw Error(v(300));
    n === null || Pt || (n = n.dependencies, n !== null && Nr(n) && (Pt = !0));
  }
  function Om(n, a, u, c) {
    Ze = n;
    var r = 0;
    do {
      if (Li && (Vc = null), Fo = 0, Li = !1, 25 <= r) throw Error(v(301));
      if (r += 1, un = Rt = null, n.updateQueue != null) {
        var s = n.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      ve.H = Zc, s = a(u, c);
    } while (Li);
    return s;
  }
  function Jp() {
    var n = ve.H, a = n.useState()[0];
    return a = typeof a.then == "function" ? Xc(a) : a, n = n.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== n && (Ze.flags |= 1024), a;
  }
  function id() {
    var n = pn !== 0;
    return pn = 0, n;
  }
  function Er(n, a, u) {
    a.updateQueue = n.updateQueue, a.flags &= -2053, n.lanes &= ~u;
  }
  function Tr(n) {
    if (Wo) {
      for (n = n.memoizedState; n !== null; ) {
        var a = n.queue;
        a !== null && (a.pending = null), n = n.next;
      }
      Wo = !1;
    }
    Fu = 0, un = Rt = Ze = null, Li = !1, Fo = pn = 0, Vc = null;
  }
  function ul() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return un === null ? Ze.memoizedState = un = n : un = un.next = n, un;
  }
  function sn() {
    if (Rt === null) {
      var n = Ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Rt.next;
    var a = un === null ? Ze.memoizedState : un.next;
    if (a !== null)
      un = a, Rt = n;
    else {
      if (n === null)
        throw Ze.alternate === null ? Error(v(467)) : Error(v(310));
      Rt = n, n = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null
      }, un === null ? Ze.memoizedState = un = n : un = un.next = n;
    }
    return un;
  }
  var Po;
  Po = function() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Xc(n) {
    var a = Fo;
    return Fo += 1, Vc === null && (Vc = []), n = Bc(Vc, n, a), a = Ze, (un === null ? a.memoizedState : un.next) === null && (a = a.alternate, ve.H = a === null || a.memoizedState === null ? Xi : ni), n;
  }
  function Io(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Xc(n);
      if (n.$$typeof === G) return kn(n);
    }
    throw Error(v(438, String(n)));
  }
  function cd(n) {
    var a = null, u = Ze.updateQueue;
    if (u !== null && (a = u.memoCache), a == null) {
      var c = Ze.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (a = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), u === null && (u = Po(), Ze.updateQueue = u), u.memoCache = a, u = a.data[a.index], u === void 0)
      for (u = a.data[a.index] = Array(n), c = 0; c < n; c++)
        u[c] = ge;
    return a.index++, u;
  }
  function iu(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function ef(n) {
    var a = sn();
    return od(a, Rt, n);
  }
  function od(n, a, u) {
    var c = n.queue;
    if (c === null) throw Error(v(311));
    c.lastRenderedReducer = u;
    var r = n.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var y = r.next;
        r.next = s.next, s.next = y;
      }
      a.baseQueue = r = s, c.pending = null;
    }
    if (s = n.baseState, r === null) n.memoizedState = s;
    else {
      a = r.next;
      var b = y = null, A = null, N = a, ee = !1;
      do {
        var oe = N.lane & -536870913;
        if (oe !== N.lane ? (st & oe) === oe : (Fu & oe) === oe) {
          var X = N.revertLane;
          if (X === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), oe === $u && (ee = !0);
          else if ((Fu & X) === X) {
            N = N.next, X === $u && (ee = !0);
            continue;
          } else
            oe = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, A === null ? (b = A = oe, y = s) : A = A.next = oe, Ze.lanes |= X, Wi |= X;
          oe = N.action, Lc && u(s, oe), s = N.hasEagerState ? N.eagerState : u(s, oe);
        } else
          X = {
            lane: oe,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, A === null ? (b = A = X, y = s) : A = A.next = X, Ze.lanes |= oe, Wi |= oe;
        N = N.next;
      } while (N !== null && N !== a);
      if (A === null ? y = s : A.next = b, !nl(s, n.memoizedState) && (Pt = !0, ee && (u = jc, u !== null)))
        throw u;
      n.memoizedState = s, n.baseState = y, n.baseQueue = A, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [n.memoizedState, c.dispatch];
  }
  function _a(n) {
    var a = sn(), u = a.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = n;
    var c = u.dispatch, r = u.pending, s = a.memoizedState;
    if (r !== null) {
      u.pending = null;
      var y = r = r.next;
      do
        s = n(s, y.action), y = y.next;
      while (y !== r);
      nl(s, a.memoizedState) || (Pt = !0), a.memoizedState = s, a.baseQueue === null && (a.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function fd(n, a, u) {
    var c = Ze, r = sn(), s = ht;
    if (s) {
      if (u === void 0) throw Error(v(407));
      u = u();
    } else u = a();
    var y = !nl(
      (Rt || r).memoizedState,
      u
    );
    if (y && (r.memoizedState = u, Pt = !0), r = r.queue, va(Rr.bind(null, c, r, n), [
      n
    ]), r.getSnapshot !== a || y || un !== null && un.memoizedState.tag & 1) {
      if (c.flags |= 2048, ou(
        9,
        rd.bind(
          null,
          c,
          r,
          u,
          a
        ),
        { destroy: void 0 },
        null
      ), zt === null) throw Error(v(349));
      s || Fu & 60 || $p(c, a, u);
    }
    return u;
  }
  function $p(n, a, u) {
    n.flags |= 16384, n = { getSnapshot: a, value: u }, a = Ze.updateQueue, a === null ? (a = Po(), Ze.updateQueue = a, a.stores = [n]) : (u = a.stores, u === null ? a.stores = [n] : u.push(n));
  }
  function rd(n, a, u, c) {
    a.value = u, a.getSnapshot = c, Pu(a) && cu(n);
  }
  function Rr(n, a, u) {
    return u(function() {
      Pu(a) && cu(n);
    });
  }
  function Pu(n) {
    var a = n.getSnapshot;
    n = n.value;
    try {
      var u = a();
      return !nl(n, u);
    } catch {
      return !0;
    }
  }
  function cu(n) {
    var a = Pa(n, 2);
    a !== null && On(a, n, 2);
  }
  function Ar(n) {
    var a = ul();
    if (typeof n == "function") {
      var u = n;
      if (n = u(), Lc) {
        sa(!0);
        try {
          u();
        } finally {
          sa(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = n, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: iu,
      lastRenderedState: n
    }, a;
  }
  function sd(n, a, u, c) {
    return n.baseState = u, od(
      n,
      Rt,
      typeof c == "function" ? c : iu
    );
  }
  function Or(n, a, u, c, r) {
    if (bd(n)) throw Error(v(485));
    if (n = a.action, n !== null) {
      var s = {
        payload: r,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          s.listeners.push(y);
        }
      };
      ve.T !== null ? u(!0) : s.isTransition = !1, c(s), u = a.pending, u === null ? (s.next = a.pending = s, Dr(a, s)) : (s.next = u.next, a.pending = u.next = s);
    }
  }
  function Dr(n, a) {
    var u = a.action, c = a.payload, r = n.state;
    if (a.isTransition) {
      var s = ve.T, y = {};
      ve.T = y;
      try {
        var b = u(r, c), A = ve.S;
        A !== null && A(y, b), Vi(n, a, b);
      } catch (N) {
        tf(n, a, N);
      } finally {
        ve.T = s;
      }
    } else
      try {
        s = u(r, c), Vi(n, a, s);
      } catch (N) {
        tf(n, a, N);
      }
  }
  function Vi(n, a, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        qt(n, a, c);
      },
      function(c) {
        return tf(n, a, c);
      }
    ) : qt(n, a, u);
  }
  function qt(n, a, u) {
    a.status = "fulfilled", a.value = u, Dm(a), n.state = u, a = n.pending, a !== null && (u = a.next, u === a ? n.pending = null : (u = u.next, a.next = u, Dr(n, u)));
  }
  function tf(n, a, u) {
    var c = n.pending;
    if (n.pending = null, c !== null) {
      c = c.next;
      do
        a.status = "rejected", a.reason = u, Dm(a), a = a.next;
      while (a !== c);
    }
    n.action = null;
  }
  function Dm(n) {
    n = n.listeners;
    for (var a = 0; a < n.length; a++) (0, n[a])();
  }
  function dd(n, a) {
    return a;
  }
  function hd(n, a) {
    if (ht) {
      var u = zt.formState;
      if (u !== null) {
        e: {
          var c = Ze;
          if (ht) {
            if (Sn) {
              t: {
                for (var r = Sn, s = Ha; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = Bn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Sn = Bn(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Bi(c);
          }
          c = !1;
        }
        c && (a = u[0]);
      }
    }
    return u = ul(), u.memoizedState = u.baseState = a, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dd,
      lastRenderedState: a
    }, u.queue = c, u = vd.bind(
      null,
      Ze,
      c
    ), c.dispatch = u, c = Ar(!1), s = Ym.bind(
      null,
      Ze,
      !1,
      c.queue
    ), c = ul(), r = {
      state: a,
      dispatch: null,
      action: n,
      pending: null
    }, c.queue = r, u = Or.bind(
      null,
      Ze,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = n, [a, u, !1];
  }
  function Iu(n) {
    var a = sn();
    return ei(a, Rt, n);
  }
  function ei(n, a, u) {
    a = od(
      n,
      a,
      dd
    )[0], n = ef(iu)[0], a = typeof a == "object" && a !== null && typeof a.then == "function" ? Xc(a) : a;
    var c = sn(), r = c.queue, s = r.dispatch;
    return u !== c.memoizedState && (Ze.flags |= 2048, ou(
      9,
      zr.bind(null, r, u),
      { destroy: void 0 },
      null
    )), [a, s, n];
  }
  function zr(n, a) {
    n.action = a;
  }
  function Cr(n) {
    var a = sn(), u = Rt;
    if (u !== null)
      return ei(a, u, n);
    sn(), a = a.memoizedState, u = sn();
    var c = u.queue.dispatch;
    return u.memoizedState = n, [a, c, !1];
  }
  function ou(n, a, u, c) {
    return n = { tag: n, create: a, inst: u, deps: c, next: null }, a = Ze.updateQueue, a === null && (a = Po(), Ze.updateQueue = a), u = a.lastEffect, u === null ? a.lastEffect = n.next = n : (c = u.next, u.next = n, n.next = c, a.lastEffect = n), n;
  }
  function nf() {
    return sn().memoizedState;
  }
  function Mr(n, a, u, c) {
    var r = ul();
    Ze.flags |= n, r.memoizedState = ou(
      1 | a,
      u,
      { destroy: void 0 },
      c === void 0 ? null : c
    );
  }
  function md(n, a, u, c) {
    var r = sn();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Rt !== null && c !== null && ad(c, Rt.memoizedState.deps) ? r.memoizedState = ou(a, u, s, c) : (Ze.flags |= n, r.memoizedState = ou(1 | a, u, s, c));
  }
  function zm(n, a) {
    Mr(8390656, 8, n, a);
  }
  function va(n, a) {
    md(2048, 8, n, a);
  }
  function Cm(n, a) {
    return md(4, 2, n, a);
  }
  function yd(n, a) {
    return md(4, 4, n, a);
  }
  function lf(n, a) {
    if (typeof a == "function") {
      n = n();
      var u = a(n);
      return function() {
        typeof u == "function" ? u() : a(null);
      };
    }
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function Qc(n, a, u) {
    u = u != null ? u.concat([n]) : null, md(4, 4, lf.bind(null, a, n), u);
  }
  function pd() {
  }
  function gd(n, a) {
    var u = sn();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    return a !== null && ad(a, c[1]) ? c[0] : (u.memoizedState = [n, a], n);
  }
  function Mm(n, a) {
    var u = sn();
    a = a === void 0 ? null : a;
    var c = u.memoizedState;
    if (a !== null && ad(a, c[1]))
      return c[0];
    if (c = n(), Lc) {
      sa(!0);
      try {
        n();
      } finally {
        sa(!1);
      }
    }
    return u.memoizedState = [c, a], c;
  }
  function Um(n, a, u) {
    return u === void 0 || Fu & 1073741824 ? n.memoizedState = a : (n.memoizedState = u, n = lo(), Ze.lanes |= n, Wi |= n, u);
  }
  function Wp(n, a, u, c) {
    return nl(u, a) ? u : ku.current !== null ? (n = Um(n, u, c), nl(n, a) || (Pt = !0), n) : Fu & 42 ? (n = lo(), Ze.lanes |= n, Wi |= n, a) : (Pt = !0, n.memoizedState = u);
  }
  function Hm(n, a, u, c, r) {
    var s = ye.p;
    ye.p = s !== 0 && 8 > s ? s : 8;
    var y = ve.T, b = {};
    ve.T = b, Ym(n, !1, a, u);
    try {
      var A = r(), N = ve.S;
      if (N !== null && N(b, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var ee = Tm(
          A,
          c
        );
        Gi(
          n,
          a,
          ee,
          il(n)
        );
      } else
        Gi(
          n,
          a,
          c,
          il(n)
        );
    } catch (oe) {
      Gi(
        n,
        a,
        { then: function() {
        }, status: "rejected", reason: oe },
        il()
      );
    } finally {
      ye.p = s, ve.T = y;
    }
  }
  function Hv() {
  }
  function ti(n, a, u, c) {
    if (n.tag !== 5) throw Error(v(476));
    var r = Ml(n).queue;
    Hm(
      n,
      r,
      a,
      Ve,
      u === null ? Hv : function() {
        return xm(n), u(c);
      }
    );
  }
  function Ml(n) {
    var a = n.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: Ve,
      baseState: Ve,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: Ve
      },
      next: null
    };
    var u = {};
    return a.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: u
      },
      next: null
    }, n.memoizedState = a, n = n.alternate, n !== null && (n.memoizedState = a), a;
  }
  function xm(n) {
    var a = Ml(n).next.queue;
    Gi(n, a, {}, il());
  }
  function wm() {
    return kn(wl);
  }
  function _m() {
    return sn().memoizedState;
  }
  function Nm() {
    return sn().memoizedState;
  }
  function Fp(n) {
    for (var a = n.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var u = il();
          n = ii(u);
          var c = ci(a, n, u);
          c !== null && (On(c, a, u), sf(c, a, u)), a = { cache: Em() }, n.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function Bm(n, a, u) {
    var c = il();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bd(n) ? qm(a, u) : (u = hr(n, a, u, c), u !== null && (On(u, n, c), jm(u, a, c)));
  }
  function vd(n, a, u) {
    var c = il();
    Gi(n, a, u, c);
  }
  function Gi(n, a, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bd(n)) qm(a, r);
    else {
      var s = n.alternate;
      if (n.lanes === 0 && (s === null || s.lanes === 0) && (s = a.lastRenderedReducer, s !== null))
        try {
          var y = a.lastRenderedState, b = s(y, u);
          if (r.hasEagerState = !0, r.eagerState = b, nl(b, y))
            return Vo(n, a, r, 0), zt === null && Fs(), !1;
        } catch {
        } finally {
        }
      if (u = hr(n, a, r, c), u !== null)
        return On(u, n, c), jm(u, a, c), !0;
    }
    return !1;
  }
  function Ym(n, a, u, c) {
    if (c = {
      lane: 2,
      revertLane: Af(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bd(n)) {
      if (a) throw Error(v(479));
    } else
      a = hr(
        n,
        u,
        c,
        2
      ), a !== null && On(a, n, 2);
  }
  function bd(n) {
    var a = n.alternate;
    return n === Ze || a !== null && a === Ze;
  }
  function qm(n, a) {
    Li = Wo = !0;
    var u = n.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), n.pending = a;
  }
  function jm(n, a, u) {
    if (u & 4194176) {
      var c = a.lanes;
      c &= n.pendingLanes, u |= c, a.lanes = u, Oi(n, u);
    }
  }
  var Hn = {
    readContext: kn,
    use: Io,
    useCallback: cn,
    useContext: cn,
    useEffect: cn,
    useImperativeHandle: cn,
    useLayoutEffect: cn,
    useInsertionEffect: cn,
    useMemo: cn,
    useReducer: cn,
    useRef: cn,
    useState: cn,
    useDebugValue: cn,
    useDeferredValue: cn,
    useTransition: cn,
    useSyncExternalStore: cn,
    useId: cn
  };
  Hn.useCacheRefresh = cn, Hn.useMemoCache = cn, Hn.useHostTransitionStatus = cn, Hn.useFormState = cn, Hn.useActionState = cn, Hn.useOptimistic = cn;
  var Xi = {
    readContext: kn,
    use: Io,
    useCallback: function(n, a) {
      return ul().memoizedState = [
        n,
        a === void 0 ? null : a
      ], n;
    },
    useContext: kn,
    useEffect: zm,
    useImperativeHandle: function(n, a, u) {
      u = u != null ? u.concat([n]) : null, Mr(
        4194308,
        4,
        lf.bind(null, a, n),
        u
      );
    },
    useLayoutEffect: function(n, a) {
      return Mr(4194308, 4, n, a);
    },
    useInsertionEffect: function(n, a) {
      Mr(4, 2, n, a);
    },
    useMemo: function(n, a) {
      var u = ul();
      a = a === void 0 ? null : a;
      var c = n();
      if (Lc) {
        sa(!0);
        try {
          n();
        } finally {
          sa(!1);
        }
      }
      return u.memoizedState = [c, a], c;
    },
    useReducer: function(n, a, u) {
      var c = ul();
      if (u !== void 0) {
        var r = u(a);
        if (Lc) {
          sa(!0);
          try {
            u(a);
          } finally {
            sa(!1);
          }
        }
      } else r = a;
      return c.memoizedState = c.baseState = r, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: n,
        lastRenderedState: r
      }, c.queue = n, n = n.dispatch = Bm.bind(
        null,
        Ze,
        n
      ), [c.memoizedState, n];
    },
    useRef: function(n) {
      var a = ul();
      return n = { current: n }, a.memoizedState = n;
    },
    useState: function(n) {
      n = Ar(n);
      var a = n.queue, u = vd.bind(null, Ze, a);
      return a.dispatch = u, [n.memoizedState, u];
    },
    useDebugValue: pd,
    useDeferredValue: function(n, a) {
      var u = ul();
      return Um(u, n, a);
    },
    useTransition: function() {
      var n = Ar(!1);
      return n = Hm.bind(
        null,
        Ze,
        n.queue,
        !0,
        !1
      ), ul().memoizedState = n, [!1, n];
    },
    useSyncExternalStore: function(n, a, u) {
      var c = Ze, r = ul();
      if (ht) {
        if (u === void 0)
          throw Error(v(407));
        u = u();
      } else {
        if (u = a(), zt === null) throw Error(v(349));
        st & 60 || $p(c, a, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: a };
      return r.queue = s, zm(Rr.bind(null, c, s, n), [
        n
      ]), c.flags |= 2048, ou(
        9,
        rd.bind(
          null,
          c,
          s,
          u,
          a
        ),
        { destroy: void 0 },
        null
      ), u;
    },
    useId: function() {
      var n = ul(), a = zt.identifierPrefix;
      if (ht) {
        var u = nu, c = tu;
        u = (c & ~(1 << 32 - Ln(c) - 1)).toString(32) + u, a = ":" + a + "R" + u, u = pn++, 0 < u && (a += "H" + u.toString(32)), a += ":";
      } else
        u = Kp++, a = ":" + a + "r" + u.toString(32) + ":";
      return n.memoizedState = a;
    },
    useCacheRefresh: function() {
      return ul().memoizedState = Fp.bind(
        null,
        Ze
      );
    }
  };
  Xi.useMemoCache = cd, Xi.useHostTransitionStatus = wm, Xi.useFormState = hd, Xi.useActionState = hd, Xi.useOptimistic = function(n) {
    var a = ul();
    a.memoizedState = a.baseState = n;
    var u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null
    };
    return a.queue = u, a = Ym.bind(
      null,
      Ze,
      !0,
      u
    ), u.dispatch = a, [n, a];
  };
  var ni = {
    readContext: kn,
    use: Io,
    useCallback: gd,
    useContext: kn,
    useEffect: va,
    useImperativeHandle: Qc,
    useInsertionEffect: Cm,
    useLayoutEffect: yd,
    useMemo: Mm,
    useReducer: ef,
    useRef: nf,
    useState: function() {
      return ef(iu);
    },
    useDebugValue: pd,
    useDeferredValue: function(n, a) {
      var u = sn();
      return Wp(
        u,
        Rt.memoizedState,
        n,
        a
      );
    },
    useTransition: function() {
      var n = ef(iu)[0], a = sn().memoizedState;
      return [
        typeof n == "boolean" ? n : Xc(n),
        a
      ];
    },
    useSyncExternalStore: fd,
    useId: _m
  };
  ni.useCacheRefresh = Nm, ni.useMemoCache = cd, ni.useHostTransitionStatus = wm, ni.useFormState = Iu, ni.useActionState = Iu, ni.useOptimistic = function(n, a) {
    var u = sn();
    return sd(u, Rt, n, a);
  };
  var Zc = {
    readContext: kn,
    use: Io,
    useCallback: gd,
    useContext: kn,
    useEffect: va,
    useImperativeHandle: Qc,
    useInsertionEffect: Cm,
    useLayoutEffect: yd,
    useMemo: Mm,
    useReducer: _a,
    useRef: nf,
    useState: function() {
      return _a(iu);
    },
    useDebugValue: pd,
    useDeferredValue: function(n, a) {
      var u = sn();
      return Rt === null ? Um(u, n, a) : Wp(
        u,
        Rt.memoizedState,
        n,
        a
      );
    },
    useTransition: function() {
      var n = _a(iu)[0], a = sn().memoizedState;
      return [
        typeof n == "boolean" ? n : Xc(n),
        a
      ];
    },
    useSyncExternalStore: fd,
    useId: _m
  };
  Zc.useCacheRefresh = Nm, Zc.useMemoCache = cd, Zc.useHostTransitionStatus = wm, Zc.useFormState = Cr, Zc.useActionState = Cr, Zc.useOptimistic = function(n, a) {
    var u = sn();
    return Rt !== null ? sd(u, Rt, n, a) : (u.baseState = n, [n, u.queue.dispatch]);
  };
  function Ur(n, a, u, c) {
    a = n.memoizedState, u = u(c, a), u = u == null ? a : Le({}, a, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Lm = {
    isMounted: function(n) {
      return (n = n._reactInternals) ? de(n) === n : !1;
    },
    enqueueSetState: function(n, a, u) {
      n = n._reactInternals;
      var c = il(), r = ii(c);
      r.payload = a, u != null && (r.callback = u), a = ci(n, r, c), a !== null && (On(a, n, c), sf(a, n, c));
    },
    enqueueReplaceState: function(n, a, u) {
      n = n._reactInternals;
      var c = il(), r = ii(c);
      r.tag = 1, r.payload = a, u != null && (r.callback = u), a = ci(n, r, c), a !== null && (On(a, n, c), sf(a, n, c));
    },
    enqueueForceUpdate: function(n, a) {
      n = n._reactInternals;
      var u = il(), c = ii(u);
      c.tag = 2, a != null && (c.callback = a), a = ci(n, c, u), a !== null && (On(a, n, u), sf(a, n, u));
    }
  };
  function kl(n, a, u, c, r, s, y) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, s, y) : a.prototype && a.prototype.isPureReactComponent ? !Gu(u, c) || !Gu(r, s) : !0;
  }
  function Vm(n, a, u, c) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, c), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, c), a.state !== n && Lm.enqueueReplaceState(a, a.state, null);
  }
  function xn(n, a) {
    var u = a;
    if ("ref" in a) {
      u = {};
      for (var c in a)
        c !== "ref" && (u[c] = a[c]);
    }
    if (n = n.defaultProps) {
      u === a && (u = Le({}, u));
      for (var r in n)
        u[r] === void 0 && (u[r] = n[r]);
    }
    return u;
  }
  var Hr = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function Pp(n) {
    Hr(n);
  }
  function Na(n) {
    console.error(n);
  }
  function Gm(n) {
    Hr(n);
  }
  function li(n, a) {
    try {
      var u = n.onUncaughtError;
      u(a.value, { componentStack: a.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Xm(n, a, u) {
    try {
      var c = n.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Ba(n, a, u) {
    return u = ii(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      li(n, a);
    }, u;
  }
  function Sd(n) {
    return n = ii(n), n.tag = 3, n;
  }
  function Ed(n, a, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        Xm(a, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (n.callback = function() {
      Xm(a, u, c), typeof r != "function" && (hi === null ? hi = /* @__PURE__ */ new Set([this]) : hi.add(this));
      var b = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function Qi(n, a, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (a = u.alternate, a !== null && Ht(
        a,
        u,
        r,
        !0
      ), u = Zl.current, u !== null) {
        switch (u.tag) {
          case 13:
            return xa === null ? Qd() : u.alternate === null && Jt === 0 && (Jt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Is ? u.flags |= 16384 : (a = u.updateQueue, a === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : a.add(c), dy(n, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Is ? u.flags |= 16384 : (a = u.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = a) : (u = a.retryQueue, u === null ? a.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), dy(n, c, r)), !1;
        }
        throw Error(v(435, u.tag));
      }
      return dy(n, c, r), Qd(), !1;
    }
    if (ht)
      return a = Zl.current, a !== null ? (!(a.flags & 65536) && (a.flags |= 256), a.flags |= 65536, a.lanes = r, c !== mm && (n = Error(v(422), { cause: c }), Qo(Un(n, u)))) : (c !== mm && (a = Error(v(423), {
        cause: c
      }), Qo(
        Un(a, u)
      )), n = n.current.alternate, n.flags |= 65536, r &= -r, n.lanes |= r, c = Un(c, u), r = Ba(
        n.stateNode,
        c,
        r
      ), Yr(n, r), Jt !== 4 && (Jt = 2)), !1;
    var s = Error(v(520), { cause: c });
    if (s = Un(s, u), Xr === null ? Xr = [s] : Xr.push(s), Jt !== 4 && (Jt = 2), a === null) return !0;
    c = Un(c, u), u = a;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, n = r & -r, u.lanes |= n, n = Ba(u.stateNode, c, n), Yr(u, n), !1;
        case 1:
          if (a = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (hi === null || !hi.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Sd(r), Ed(
              r,
              n,
              u,
              c
            ), Yr(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Qm = Error(v(461)), Pt = !1;
  function wn(n, a, u, c) {
    a.child = n === null ? td(a, null, u, c) : au(
      a,
      n.child,
      u,
      c
    );
  }
  function af(n, a, u, c, r) {
    u = u.render;
    var s = a.ref;
    if ("ref" in c) {
      var y = {};
      for (var b in c)
        b !== "ref" && (y[b] = c[b]);
    } else y = c;
    return ui(a), c = Gc(
      n,
      a,
      u,
      y,
      s,
      r
    ), b = id(), n !== null && !Pt ? (Er(n, a, r), su(n, a, r)) : (ht && b && Ps(a), a.flags |= 1, wn(n, a, c, r), a.child);
  }
  function kc(n, a, u, c, r) {
    if (n === null) {
      var s = u.type;
      return typeof s == "function" && !Yd(s) && s.defaultProps === void 0 && u.compare === null ? (a.tag = 15, a.type = s, Zm(
        n,
        a,
        s,
        c,
        r
      )) : (n = yf(
        u.type,
        null,
        c,
        a,
        a.mode,
        r
      ), n.ref = a.ref, n.return = a, a.child = n);
    }
    if (s = n.child, !rf(n, r)) {
      var y = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Gu, u(y, c) && n.ref === a.ref)
        return su(n, a, r);
    }
    return a.flags |= 1, n = La(s, c), n.ref = a.ref, n.return = a, a.child = n;
  }
  function Zm(n, a, u, c, r) {
    if (n !== null) {
      var s = n.memoizedProps;
      if (Gu(s, c) && n.ref === a.ref)
        if (Pt = !1, a.pendingProps = c = s, rf(n, r))
          n.flags & 131072 && (Pt = !0);
        else
          return a.lanes = n.lanes, su(n, a, r);
    }
    return of(
      n,
      a,
      u,
      c,
      r
    );
  }
  function km(n, a, u) {
    var c = a.pendingProps, r = c.children, s = (a.stateNode._pendingVisibility & 2) !== 0, y = n !== null ? n.memoizedState : null;
    if (cf(n, a), c.mode === "hidden" || s) {
      if (a.flags & 128) {
        if (c = y !== null ? y.baseLanes | u : u, n !== null) {
          for (r = a.child = n.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          a.childLanes = s & ~c;
        } else a.childLanes = 0, a.child = null;
        return uf(
          n,
          a,
          c,
          u
        );
      }
      if (u & 536870912)
        a.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && Sr(
          a,
          y !== null ? y.cachePool : null
        ), y !== null ? gm(a, y) : nd(), vm(a);
      else
        return a.lanes = a.childLanes = 536870912, uf(
          n,
          a,
          y !== null ? y.baseLanes | u : u,
          u
        );
    } else
      y !== null ? (Sr(a, y.cachePool), gm(a, y), Ku(), a.memoizedState = null) : (n !== null && Sr(a, null), nd(), Ku());
    return wn(n, a, r, u), a.child;
  }
  function uf(n, a, u, c) {
    var r = Wu();
    return r = r === null ? null : { parent: Tn._currentValue, pool: r }, a.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, n !== null && Sr(a, null), nd(), vm(a), n !== null && Ht(n, a, c, !0), null;
  }
  function cf(n, a) {
    var u = a.ref;
    if (u === null)
      n !== null && n.ref !== null && (a.flags |= 2097664);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(v(284));
      (n === null || n.ref !== u) && (a.flags |= 2097664);
    }
  }
  function of(n, a, u, c, r) {
    return ui(a), u = Gc(
      n,
      a,
      u,
      c,
      void 0,
      r
    ), c = id(), n !== null && !Pt ? (Er(n, a, r), su(n, a, r)) : (ht && c && Ps(a), a.flags |= 1, wn(n, a, u, r), a.child);
  }
  function Km(n, a, u, c, r, s) {
    return ui(a), a.updateQueue = null, u = Om(
      a,
      c,
      u,
      r
    ), ud(n), c = id(), n !== null && !Pt ? (Er(n, a, s), su(n, a, s)) : (ht && c && Ps(a), a.flags |= 1, wn(n, a, u, s), a.child);
  }
  function Jm(n, a, u, c, r) {
    if (ui(a), a.stateNode === null) {
      var s = Ia, y = u.contextType;
      typeof y == "object" && y !== null && (s = kn(y)), s = new u(c, s), a.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Lm, a.stateNode = s, s._reactInternals = a, s = a.stateNode, s.props = c, s.state = a.memoizedState, s.refs = {}, Br(a), y = u.contextType, s.context = typeof y == "object" && y !== null ? kn(y) : Ia, s.state = a.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (Ur(
        a,
        u,
        y,
        c
      ), s.state = a.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (y = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), y !== s.state && Lm.enqueueReplaceState(s, s.state, null), jr(a, c, s, r), df(), s.state = a.memoizedState), typeof s.componentDidMount == "function" && (a.flags |= 4194308), c = !0;
    } else if (n === null) {
      s = a.stateNode;
      var b = a.memoizedProps, A = xn(u, b);
      s.props = A;
      var N = s.context, ee = u.contextType;
      y = Ia, typeof ee == "object" && ee !== null && (y = kn(ee));
      var oe = u.getDerivedStateFromProps;
      ee = typeof oe == "function" || typeof s.getSnapshotBeforeUpdate == "function", b = a.pendingProps !== b, ee || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (b || N !== y) && Vm(
        a,
        s,
        c,
        y
      ), Kl = !1;
      var X = a.memoizedState;
      s.state = X, jr(a, c, s, r), df(), N = a.memoizedState, b || X !== N || Kl ? (typeof oe == "function" && (Ur(
        a,
        u,
        oe,
        c
      ), N = a.memoizedState), (A = Kl || kl(
        a,
        u,
        A,
        c,
        X,
        N,
        y
      )) ? (ee || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = c, a.memoizedState = N), s.props = c, s.state = N, s.context = y, c = A) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), c = !1);
    } else {
      s = a.stateNode, ki(n, a), y = a.memoizedProps, ee = xn(u, y), s.props = ee, oe = a.pendingProps, X = s.context, N = u.contextType, A = Ia, typeof N == "object" && N !== null && (A = kn(N)), b = u.getDerivedStateFromProps, (N = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y !== oe || X !== A) && Vm(
        a,
        s,
        c,
        A
      ), Kl = !1, X = a.memoizedState, s.state = X, jr(a, c, s, r), df();
      var F = a.memoizedState;
      y !== oe || X !== F || Kl || n !== null && n.dependencies !== null && Nr(n.dependencies) ? (typeof b == "function" && (Ur(
        a,
        u,
        b,
        c
      ), F = a.memoizedState), (ee = Kl || kl(
        a,
        u,
        ee,
        c,
        X,
        F,
        A
      ) || n !== null && n.dependencies !== null && Nr(n.dependencies)) ? (N || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, F, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        F,
        A
      )), typeof s.componentDidUpdate == "function" && (a.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || y === n.memoizedProps && X === n.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && X === n.memoizedState || (a.flags |= 1024), a.memoizedProps = c, a.memoizedState = F), s.props = c, s.state = F, s.context = A, c = ee) : (typeof s.componentDidUpdate != "function" || y === n.memoizedProps && X === n.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && X === n.memoizedState || (a.flags |= 1024), c = !1);
    }
    return s = c, cf(n, a), c = (a.flags & 128) !== 0, s || c ? (s = a.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), a.flags |= 1, n !== null && c ? (a.child = au(
      a,
      n.child,
      null,
      r
    ), a.child = au(
      a,
      null,
      u,
      r
    )) : wn(n, a, u, r), a.memoizedState = s.state, n = a.child) : n = su(
      n,
      a,
      r
    ), n;
  }
  function Ip(n, a, u, c) {
    return Xo(), a.flags |= 256, wn(n, a, u, c), a.child;
  }
  var xr = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fu(n) {
    return { baseLanes: n, cachePool: Am() };
  }
  function Td(n, a, u) {
    return n = n !== null ? n.childLanes & ~u : 0, a && (n |= Sa), n;
  }
  function Rd(n, a, u) {
    var c = a.pendingProps, r = !1, s = (a.flags & 128) !== 0, y;
    if ((y = s) || (y = n !== null && n.memoizedState === null ? !1 : (yn.current & 2) !== 0), y && (r = !0, a.flags &= -129), y = (a.flags & 32) !== 0, a.flags &= -33, n === null) {
      if (ht) {
        if (r ? uu(a) : Ku(), ht) {
          var b = Sn, A;
          if (A = b) {
            e: {
              for (A = b, b = Ha; A.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (A = Bn(
                  A.nextSibling
                ), A === null) {
                  b = null;
                  break e;
                }
              }
              b = A;
            }
            b !== null ? (a.memoizedState = {
              dehydrated: b,
              treeContext: eu !== null ? { id: tu, overflow: nu } : null,
              retryLane: 536870912
            }, A = An(
              18,
              null,
              null,
              0
            ), A.stateNode = b, A.return = a, a.child = A, Zn = a, Sn = null, A = !0) : A = !1;
          }
          A || Bi(a);
        }
        if (b = a.memoizedState, b !== null && (b = b.dehydrated, b !== null))
          return b.data === "$!" ? a.lanes = 16 : a.lanes = 536870912, null;
        wa(a);
      }
      return b = c.children, c = c.fallback, r ? (Ku(), r = a.mode, b = ai(
        { mode: "hidden", children: b },
        r
      ), c = It(
        c,
        r,
        u,
        null
      ), b.return = a, c.return = a, b.sibling = c, a.child = b, r = a.child, r.memoizedState = fu(u), r.childLanes = Td(
        n,
        y,
        u
      ), a.memoizedState = xr, c) : (uu(a), ff(a, b));
    }
    if (A = n.memoizedState, A !== null && (b = A.dehydrated, b !== null)) {
      if (s)
        a.flags & 256 ? (uu(a), a.flags &= -257, a = Ad(
          n,
          a,
          u
        )) : a.memoizedState !== null ? (Ku(), a.child = n.child, a.flags |= 128, a = null) : (Ku(), r = c.fallback, b = a.mode, c = ai(
          { mode: "visible", children: c.children },
          b
        ), r = It(
          r,
          b,
          u,
          null
        ), r.flags |= 2, c.return = a, r.return = a, c.sibling = r, a.child = c, au(
          a,
          n.child,
          null,
          u
        ), c = a.child, c.memoizedState = fu(u), c.childLanes = Td(
          n,
          y,
          u
        ), a.memoizedState = xr, a = r);
      else if (uu(a), b.data === "$!") {
        if (y = b.nextSibling && b.nextSibling.dataset, y) var N = y.dgst;
        y = N, c = Error(v(419)), c.stack = "", c.digest = y, Qo({ value: c, source: null, stack: null }), a = Ad(
          n,
          a,
          u
        );
      } else if (Pt || Ht(n, a, u, !1), y = (u & n.childLanes) !== 0, Pt || y) {
        if (y = zt, y !== null) {
          if (c = u & -u, c & 42) c = 1;
          else
            switch (c) {
              case 2:
                c = 1;
                break;
              case 8:
                c = 4;
                break;
              case 32:
                c = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                c = 64;
                break;
              case 268435456:
                c = 134217728;
                break;
              default:
                c = 0;
            }
          if (c = c & (y.suspendedLanes | u) ? 0 : c, c !== 0 && c !== A.retryLane)
            throw A.retryLane = c, Pa(n, c), On(y, n, c), Qm;
        }
        b.data === "$?" || Qd(), a = Ad(
          n,
          a,
          u
        );
      } else
        b.data === "$?" ? (a.flags |= 128, a.child = n.child, a = Nv.bind(
          null,
          n
        ), b._reactRetry = a, a = null) : (n = A.treeContext, Sn = Bn(
          b.nextSibling
        ), Zn = a, ht = !0, ga = null, Ha = !1, n !== null && (al[Cl++] = tu, al[Cl++] = nu, al[Cl++] = eu, tu = n.id, nu = n.overflow, eu = a), a = ff(
          a,
          c.children
        ), a.flags |= 4096);
      return a;
    }
    return r ? (Ku(), r = c.fallback, b = a.mode, A = n.child, N = A.sibling, c = La(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 31457280, N !== null ? r = La(N, r) : (r = It(
      r,
      b,
      u,
      null
    ), r.flags |= 2), r.return = a, c.return = a, c.sibling = r, a.child = c, c = r, r = a.child, b = n.child.memoizedState, b === null ? b = fu(u) : (A = b.cachePool, A !== null ? (N = Tn._currentValue, A = A.parent !== N ? { parent: N, pool: N } : A) : A = Am(), b = {
      baseLanes: b.baseLanes | u,
      cachePool: A
    }), r.memoizedState = b, r.childLanes = Td(
      n,
      y,
      u
    ), a.memoizedState = xr, c) : (uu(a), u = n.child, n = u.sibling, u = La(u, {
      mode: "visible",
      children: c.children
    }), u.return = a, u.sibling = null, n !== null && (y = a.deletions, y === null ? (a.deletions = [n], a.flags |= 16) : y.push(n)), a.child = u, a.memoizedState = null, u);
  }
  function ff(n, a) {
    return a = ai(
      { mode: "visible", children: a },
      n.mode
    ), a.return = n, n.child = a;
  }
  function ai(n, a) {
    return cg(n, a, 0, null);
  }
  function Ad(n, a, u) {
    return au(a, n.child, null, u), n = ff(
      a,
      a.pendingProps.children
    ), n.flags |= 2, a.memoizedState = null, n;
  }
  function Od(n, a, u) {
    n.lanes |= a;
    var c = n.alternate;
    c !== null && (c.lanes |= a), yl(n.return, a, u);
  }
  function wr(n, a, u, c, r) {
    var s = n.memoizedState;
    s === null ? n.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (s.isBackwards = a, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = r);
  }
  function ru(n, a, u) {
    var c = a.pendingProps, r = c.revealOrder, s = c.tail;
    if (wn(n, a, c.children, u), c = yn.current, c & 2)
      c = c & 1 | 2, a.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e: for (n = a.child; n !== null; ) {
          if (n.tag === 13)
            n.memoizedState !== null && Od(n, u, a);
          else if (n.tag === 19)
            Od(n, u, a);
          else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === a) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === a)
              break e;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      c &= 1;
    }
    switch (rt(yn, c), r) {
      case "forwards":
        for (u = a.child, r = null; u !== null; )
          n = u.alternate, n !== null && vr(n) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = a.child, a.child = null) : (r = u.sibling, u.sibling = null), wr(
          a,
          !1,
          r,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, r = a.child, a.child = null; r !== null; ) {
          if (n = r.alternate, n !== null && vr(n) === null) {
            a.child = r;
            break;
          }
          n = r.sibling, r.sibling = u, u = r, r = n;
        }
        wr(
          a,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        wr(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function su(n, a, u) {
    if (n !== null && (a.dependencies = n.dependencies), Wi |= a.lanes, !(u & a.childLanes))
      if (n !== null) {
        if (Ht(
          n,
          a,
          u,
          !1
        ), (u & a.childLanes) === 0)
          return null;
      } else return null;
    if (n !== null && a.child !== n.child)
      throw Error(v(153));
    if (a.child !== null) {
      for (n = a.child, u = La(n, n.pendingProps), a.child = u, u.return = a; n.sibling !== null; )
        n = n.sibling, u = u.sibling = La(n, n.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function rf(n, a) {
    return n.lanes & a ? !0 : (n = n.dependencies, !!(n !== null && Nr(n)));
  }
  function _r(n, a, u) {
    switch (a.tag) {
      case 3:
        ra(a, a.stateNode.containerInfo), Zi(a, Tn, n.memoizedState.cache), Xo();
        break;
      case 27:
      case 5:
        ot(a);
        break;
      case 4:
        ra(a, a.stateNode.containerInfo);
        break;
      case 10:
        Zi(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var c = a.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (uu(a), a.flags |= 128, null) : u & a.child.childLanes ? Rd(n, a, u) : (uu(a), n = su(
            n,
            a,
            u
          ), n !== null ? n.sibling : null);
        uu(a);
        break;
      case 19:
        var r = (n.flags & 128) !== 0;
        if (c = (u & a.childLanes) !== 0, c || (Ht(
          n,
          a,
          u,
          !1
        ), c = (u & a.childLanes) !== 0), r) {
          if (c)
            return ru(
              n,
              a,
              u
            );
          a.flags |= 128;
        }
        if (r = a.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), rt(yn, yn.current), c) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, km(n, a, u);
      case 24:
        Zi(a, Tn, n.memoizedState.cache);
    }
    return su(n, a, u);
  }
  function jt(n, a, u) {
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps)
        Pt = !0;
      else {
        if (!rf(n, u) && !(a.flags & 128))
          return Pt = !1, _r(
            n,
            a,
            u
          );
        Pt = !!(n.flags & 131072);
      }
    else
      Pt = !1, ht && a.flags & 1048576 && hm(a, Go, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        e: {
          n = a.pendingProps;
          var c = a.elementType, r = c._init;
          if (c = r(c._payload), a.type = c, typeof c == "function")
            Yd(c) ? (n = xn(c, n), a.tag = 1, a = Jm(
              null,
              a,
              c,
              n,
              u
            )) : (a.tag = 0, a = of(
              null,
              a,
              c,
              n,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === $) {
                a.tag = 11, a = af(
                  null,
                  a,
                  c,
                  n,
                  u
                );
                break e;
              } else if (r === le) {
                a.tag = 14, a = kc(
                  null,
                  a,
                  c,
                  n,
                  u
                );
                break e;
              }
            }
            throw a = St(c) || c, Error(v(306, a, ""));
          }
        }
        return a;
      case 0:
        return of(
          n,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 1:
        return c = a.type, r = xn(
          c,
          a.pendingProps
        ), Jm(
          n,
          a,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (ra(
            a,
            a.stateNode.containerInfo
          ), n === null) throw Error(v(387));
          var s = a.pendingProps;
          r = a.memoizedState, c = r.element, ki(n, a), jr(a, s, null, u);
          var y = a.memoizedState;
          if (s = y.cache, Zi(a, Tn, s), s !== r.cache && Dd(
            a,
            [Tn],
            u,
            !0
          ), df(), s = y.element, r.isDehydrated)
            if (r = {
              element: s,
              isDehydrated: !1,
              cache: y.cache
            }, a.updateQueue.baseState = r, a.memoizedState = r, a.flags & 256) {
              a = Ip(
                n,
                a,
                s,
                u
              );
              break e;
            } else if (s !== c) {
              c = Un(
                Error(v(424)),
                a
              ), Qo(c), a = Ip(
                n,
                a,
                s,
                u
              );
              break e;
            } else
              for (Sn = Bn(
                a.stateNode.containerInfo.firstChild
              ), Zn = a, ht = !0, ga = null, Ha = !0, u = td(
                a,
                null,
                s,
                u
              ), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Xo(), s === c) {
              a = su(
                n,
                a,
                u
              );
              break e;
            }
            wn(n, a, s, u);
          }
          a = a.child;
        }
        return a;
      case 26:
        return cf(n, a), n === null ? (u = Re(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = u : ht || (u = a.type, n = a.pendingProps, c = Fr(
          Mn.current
        ).createElement(u), c[x] = a, c[I] = n, Nn(c, u, n), Tt(c), a.stateNode = c) : a.memoizedState = Re(
          a.type,
          n.memoizedProps,
          a.pendingProps,
          n.memoizedState
        ), null;
      case 27:
        return ot(a), n === null && ht && (c = a.stateNode = Tu(
          a.type,
          a.pendingProps,
          Mn.current
        ), Zn = a, Ha = !0, Sn = Bn(
          c.firstChild
        )), c = a.pendingProps.children, n !== null || ht ? wn(
          n,
          a,
          c,
          u
        ) : a.child = au(
          a,
          null,
          c,
          u
        ), cf(n, a), a.child;
      case 5:
        return n === null && ht && ((r = c = Sn) && (c = ac(
          c,
          a.type,
          a.pendingProps,
          Ha
        ), c !== null ? (a.stateNode = c, Zn = a, Sn = Bn(
          c.firstChild
        ), Ha = !1, r = !0) : r = !1), r || Bi(a)), ot(a), r = a.type, s = a.pendingProps, y = n !== null ? n.memoizedProps : null, c = s.children, Pr(r, s) ? c = null : y !== null && Pr(r, y) && (a.flags |= 32), a.memoizedState !== null && (r = Gc(
          n,
          a,
          Jp,
          null,
          null,
          u
        ), wl._currentValue = r), cf(n, a), wn(n, a, c, u), a.child;
      case 6:
        return n === null && ht && ((n = u = Sn) && (u = ts(
          u,
          a.pendingProps,
          Ha
        ), u !== null ? (a.stateNode = u, Zn = a, Sn = null, n = !0) : n = !1), n || Bi(a)), null;
      case 13:
        return Rd(n, a, u);
      case 4:
        return ra(
          a,
          a.stateNode.containerInfo
        ), c = a.pendingProps, n === null ? a.child = au(
          a,
          null,
          c,
          u
        ) : wn(
          n,
          a,
          c,
          u
        ), a.child;
      case 11:
        return af(
          n,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 7:
        return wn(
          n,
          a,
          a.pendingProps,
          u
        ), a.child;
      case 8:
        return wn(
          n,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 12:
        return wn(
          n,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 10:
        return c = a.pendingProps, Zi(a, a.type, c.value), wn(
          n,
          a,
          c.children,
          u
        ), a.child;
      case 9:
        return r = a.type._context, c = a.pendingProps.children, ui(a), r = kn(r), c = c(r), a.flags |= 1, wn(n, a, c, u), a.child;
      case 14:
        return kc(
          n,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 15:
        return Zm(
          n,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 19:
        return ru(n, a, u);
      case 22:
        return km(n, a, u);
      case 24:
        return ui(a), c = kn(Tn), n === null ? (r = Wu(), r === null && (r = zt, s = Em(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), a.memoizedState = {
          parent: c,
          cache: r
        }, Br(a), Zi(a, Tn, r)) : (n.lanes & u && (ki(n, a), jr(a, null, null, u), df()), r = n.memoizedState, s = a.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, a.memoizedState = r, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = r), Zi(a, Tn, c)) : (c = s.cache, Zi(a, Tn, c), c !== r.cache && Dd(
          a,
          [Tn],
          u,
          !0
        ))), wn(
          n,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(v(156, a.tag));
  }
  var $m = $e(null), Kc = null, du = null;
  function Zi(n, a, u) {
    rt($m, a._currentValue), a._currentValue = u;
  }
  function hu(n) {
    n._currentValue = $m.current, Et($m);
  }
  function yl(n, a, u) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & a) !== a ? (n.childLanes |= a, c !== null && (c.childLanes |= a)) : c !== null && (c.childLanes & a) !== a && (c.childLanes |= a), n === u) break;
      n = n.return;
    }
  }
  function Dd(n, a, u, c) {
    var r = n.child;
    for (r !== null && (r.return = n); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var y = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var b = s;
          s = r;
          for (var A = 0; A < a.length; A++)
            if (b.context === a[A]) {
              s.lanes |= u, b = s.alternate, b !== null && (b.lanes |= u), yl(
                s.return,
                u,
                n
              ), c || (y = null);
              break e;
            }
          s = b.next;
        }
      } else if (r.tag === 18) {
        if (y = r.return, y === null) throw Error(v(341));
        y.lanes |= u, s = y.alternate, s !== null && (s.lanes |= u), yl(y, u, n), y = null;
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === n) {
            y = null;
            break;
          }
          if (r = y.sibling, r !== null) {
            r.return = y.return, y = r;
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function Ht(n, a, u, c) {
    n = null;
    for (var r = a, s = !1; r !== null; ) {
      if (!s) {
        if (r.flags & 524288) s = !0;
        else if (r.flags & 262144) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(v(387));
        if (y = y.memoizedProps, y !== null) {
          var b = r.type;
          nl(r.pendingProps.value, y.value) || (n !== null ? n.push(b) : n = [b]);
        }
      } else if (r === Pn.current) {
        if (y = r.alternate, y === null) throw Error(v(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (n !== null ? n.push(wl) : n = [wl]);
      }
      r = r.return;
    }
    n !== null && Dd(
      a,
      n,
      u,
      c
    ), a.flags |= 262144;
  }
  function Nr(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!nl(
        n.context._currentValue,
        n.memoizedValue
      ))
        return !0;
      n = n.next;
    }
    return !1;
  }
  function ui(n) {
    Kc = n, du = null, n = n.dependencies, n !== null && (n.firstContext = null);
  }
  function kn(n) {
    return mu(Kc, n);
  }
  function zd(n, a) {
    return Kc === null && ui(n), mu(n, a);
  }
  function mu(n, a) {
    var u = a._currentValue;
    if (a = { context: a, memoizedValue: u, next: null }, du === null) {
      if (n === null) throw Error(v(308));
      du = a, n.dependencies = { lanes: 0, firstContext: a }, n.flags |= 524288;
    } else du = du.next = a;
    return u;
  }
  var Kl = !1;
  function Br(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ki(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = {
      baseState: n.baseState,
      firstBaseUpdate: n.firstBaseUpdate,
      lastBaseUpdate: n.lastBaseUpdate,
      shared: n.shared,
      callbacks: null
    });
  }
  function ii(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function ci(n, a, u) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (c = c.shared, Kt & 2) {
      var r = c.pending;
      return r === null ? a.next = a : (a.next = r.next, r.next = a), c.pending = a, a = pt(n), ml(n, null, u), a;
    }
    return Vo(n, c, a, u), pt(n);
  }
  function sf(n, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194176) !== 0)) {
      var c = a.lanes;
      c &= n.pendingLanes, u |= c, a.lanes = u, Oi(n, u);
    }
  }
  function Yr(n, a) {
    var u = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = y : s = s.next = y, u = u.next;
        } while (u !== null);
        s === null ? r = s = a : s = s.next = a;
      } else r = s = a;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = a : n.next = a, u.lastBaseUpdate = a;
  }
  var qr = !1;
  function df() {
    if (qr) {
      var n = jc;
      if (n !== null) throw n;
    }
  }
  function jr(n, a, u, c) {
    qr = !1;
    var r = n.updateQueue;
    Kl = !1;
    var s = r.firstBaseUpdate, y = r.lastBaseUpdate, b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var A = b, N = A.next;
      A.next = null, y === null ? s = N : y.next = N, y = A;
      var ee = n.alternate;
      ee !== null && (ee = ee.updateQueue, b = ee.lastBaseUpdate, b !== y && (b === null ? ee.firstBaseUpdate = N : b.next = N, ee.lastBaseUpdate = A));
    }
    if (s !== null) {
      var oe = r.baseState;
      y = 0, ee = N = A = null, b = s;
      do {
        var X = b.lane & -536870913, F = X !== b.lane;
        if (F ? (st & X) === X : (c & X) === X) {
          X !== 0 && X === $u && (qr = !0), ee !== null && (ee = ee.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          e: {
            var Me = n, Xe = b;
            X = a;
            var Lt = u;
            switch (Xe.tag) {
              case 1:
                if (Me = Xe.payload, typeof Me == "function") {
                  oe = Me.call(Lt, oe, X);
                  break e;
                }
                oe = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = Xe.payload, X = typeof Me == "function" ? Me.call(Lt, oe, X) : Me, X == null) break e;
                oe = Le({}, oe, X);
                break e;
              case 2:
                Kl = !0;
            }
          }
          X = b.callback, X !== null && (n.flags |= 64, F && (n.flags |= 8192), F = r.callbacks, F === null ? r.callbacks = [X] : F.push(X));
        } else
          F = {
            lane: X,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, ee === null ? (N = ee = F, A = oe) : ee = ee.next = F, y |= X;
        if (b = b.next, b === null) {
          if (b = r.shared.pending, b === null)
            break;
          F = b, b = F.next, F.next = null, r.lastBaseUpdate = F, r.shared.pending = null;
        }
      } while (!0);
      ee === null && (A = oe), r.baseState = A, r.firstBaseUpdate = N, r.lastBaseUpdate = ee, s === null && (r.shared.lanes = 0), Wi |= y, n.lanes = y, n.memoizedState = oe;
    }
  }
  function eg(n, a) {
    if (typeof n != "function")
      throw Error(v(191, n));
    n.call(a);
  }
  function Wm(n, a) {
    var u = n.callbacks;
    if (u !== null)
      for (n.callbacks = null, n = 0; n < u.length; n++)
        eg(u[n], a);
  }
  function hf(n, a) {
    try {
      var u = a.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & n) === n) {
            c = void 0;
            var s = u.create, y = u.inst;
            c = s(), y.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (b) {
      Ct(a, a.return, b);
    }
  }
  function Ki(n, a, u) {
    try {
      var c = a.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & n) === n) {
            var y = c.inst, b = y.destroy;
            if (b !== void 0) {
              y.destroy = void 0, r = a;
              var A = u;
              try {
                b();
              } catch (N) {
                Ct(
                  r,
                  A,
                  N
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (N) {
      Ct(a, a.return, N);
    }
  }
  function Jc(n) {
    var a = n.updateQueue;
    if (a !== null) {
      var u = n.stateNode;
      try {
        Wm(a, u);
      } catch (c) {
        Ct(n, n.return, c);
      }
    }
  }
  function Lr(n, a, u) {
    u.props = xn(
      n.type,
      n.memoizedProps
    ), u.state = n.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Ct(n, a, c);
    }
  }
  function Ji(n, a) {
    try {
      var u = n.ref;
      if (u !== null) {
        var c = n.stateNode;
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var r = c;
            break;
          default:
            r = c;
        }
        typeof u == "function" ? n.refCleanup = u(r) : u.current = r;
      }
    } catch (s) {
      Ct(n, a, s);
    }
  }
  function pl(n, a) {
    var u = n.ref, c = n.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Ct(n, a, r);
        } finally {
          n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Ct(n, a, r);
        }
      else u.current = null;
  }
  function tg(n) {
    var a = n.type, u = n.memoizedProps, c = n.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Ct(n, n.return, r);
    }
  }
  function ng(n, a, u) {
    try {
      var c = n.stateNode;
      gg(c, n.type, u, a), c[I] = a;
    } catch (r) {
      Ct(n, n.return, r);
    }
  }
  function Fm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 || n.tag === 4;
  }
  function oi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Fm(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 27 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Cd(n, a, u) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, a ? u.nodeType === 8 ? u.parentNode.insertBefore(n, a) : u.insertBefore(n, a) : (u.nodeType === 8 ? (a = u.parentNode, a.insertBefore(n, u)) : (a = u, a.appendChild(n)), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = lc));
    else if (c !== 4 && c !== 27 && (n = n.child, n !== null))
      for (Cd(n, a, u), n = n.sibling; n !== null; )
        Cd(n, a, u), n = n.sibling;
  }
  function bt(n, a, u) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, a ? u.insertBefore(n, a) : u.appendChild(n);
    else if (c !== 4 && c !== 27 && (n = n.child, n !== null))
      for (bt(n, a, u), n = n.sibling; n !== null; )
        bt(n, a, u), n = n.sibling;
  }
  var Ya = !1, on = !1, Md = !1, lg = typeof WeakSet == "function" ? WeakSet : Set, _n = null, Ud = !1;
  function ag(n, a) {
    if (n = n.containerInfo, eh = us, n = rm(n), Js(n)) {
      if ("selectionStart" in n)
        var u = {
          start: n.selectionStart,
          end: n.selectionEnd
        };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, b = -1, A = -1, N = 0, ee = 0, oe = n, X = null;
            t: for (; ; ) {
              for (var F; oe !== u || r !== 0 && oe.nodeType !== 3 || (b = y + r), oe !== s || c !== 0 && oe.nodeType !== 3 || (A = y + c), oe.nodeType === 3 && (y += oe.nodeValue.length), (F = oe.firstChild) !== null; )
                X = oe, oe = F;
              for (; ; ) {
                if (oe === n) break t;
                if (X === u && ++N === r && (b = y), X === s && ++ee === c && (A = y), (F = oe.nextSibling) !== null) break;
                oe = X, X = oe.parentNode;
              }
              oe = F;
            }
            u = b === -1 || A === -1 ? null : { start: b, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (th = { focusedElem: n, selectionRange: u }, us = !1, _n = a; _n !== null; )
      if (a = _n, n = a.child, (a.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = a, _n = n;
      else
        for (; _n !== null; ) {
          switch (a = _n, s = a.alternate, n = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (n & 1024 && s !== null) {
                n = void 0, u = a, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var Me = xn(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  n = c.getSnapshotBeforeUpdate(
                    Me,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = n;
                } catch (Xe) {
                  Ct(
                    u,
                    u.return,
                    Xe
                  );
                }
              }
              break;
            case 3:
              if (n & 1024) {
                if (n = a.stateNode.containerInfo, u = n.nodeType, u === 9)
                  Va(n);
                else if (u === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Va(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (n & 1024) throw Error(v(163));
          }
          if (n = a.sibling, n !== null) {
            n.return = a.return, _n = n;
            break;
          }
          _n = a.return;
        }
    return Me = Ud, Ud = !1, Me;
  }
  function Pm(n, a, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        yu(n, u), c & 4 && hf(5, u);
        break;
      case 1:
        if (yu(n, u), c & 4)
          if (n = u.stateNode, a === null)
            try {
              n.componentDidMount();
            } catch (b) {
              Ct(u, u.return, b);
            }
          else {
            var r = xn(
              u.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              n.componentDidUpdate(
                r,
                a,
                n.__reactInternalSnapshotBeforeUpdate
              );
            } catch (b) {
              Ct(
                u,
                u.return,
                b
              );
            }
          }
        c & 64 && Jc(u), c & 512 && Ji(u, u.return);
        break;
      case 3:
        if (yu(n, u), c & 64 && (c = u.updateQueue, c !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Wm(c, n);
          } catch (b) {
            Ct(u, u.return, b);
          }
        }
        break;
      case 26:
        yu(n, u), c & 512 && Ji(u, u.return);
        break;
      case 27:
      case 5:
        yu(n, u), a === null && c & 4 && tg(u), c & 512 && Ji(u, u.return);
        break;
      case 12:
        yu(n, u);
        break;
      case 13:
        yu(n, u), c & 4 && mf(n, u);
        break;
      case 22:
        if (r = u.memoizedState !== null || Ya, !r) {
          a = a !== null && a.memoizedState !== null || on;
          var s = Ya, y = on;
          Ya = r, (on = a) && !y ? $i(
            n,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : yu(n, u), Ya = s, on = y;
        }
        c & 512 && (u.memoizedProps.mode === "manual" ? Ji(u, u.return) : pl(u, u.return));
        break;
      default:
        yu(n, u);
    }
  }
  function Im(n) {
    var a = n.alternate;
    a !== null && (n.alternate = null, Im(a)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (a = n.stateNode, a !== null && Ut(a)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var Zt = null, Jl = !1;
  function fi(n, a, u) {
    for (u = u.child; u !== null; )
      qa(n, a, u), u = u.sibling;
  }
  function qa(n, a, u) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount(bn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        on || pl(u, a), fi(
          n,
          a,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        on || pl(u, a);
        var c = Zt, r = Jl;
        for (Zt = u.stateNode, fi(
          n,
          a,
          u
        ), u = u.stateNode, a = u.attributes; a.length; )
          u.removeAttributeNode(a[0]);
        Ut(u), Zt = c, Jl = r;
        break;
      case 5:
        on || pl(u, a);
      case 6:
        r = Zt;
        var s = Jl;
        if (Zt = null, fi(
          n,
          a,
          u
        ), Zt = r, Jl = s, Zt !== null)
          if (Jl)
            try {
              n = Zt, c = u.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(c) : n.removeChild(c);
            } catch (y) {
              Ct(
                u,
                a,
                y
              );
            }
          else
            try {
              Zt.removeChild(u.stateNode);
            } catch (y) {
              Ct(
                u,
                a,
                y
              );
            }
        break;
      case 18:
        Zt !== null && (Jl ? (a = Zt, u = u.stateNode, a.nodeType === 8 ? es(
          a.parentNode,
          u
        ) : a.nodeType === 1 && es(a, u), xf(a)) : es(Zt, u.stateNode));
        break;
      case 4:
        c = Zt, r = Jl, Zt = u.stateNode.containerInfo, Jl = !0, fi(
          n,
          a,
          u
        ), Zt = c, Jl = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        on || Ki(2, u, a), on || Ki(4, u, a), fi(
          n,
          a,
          u
        );
        break;
      case 1:
        on || (pl(u, a), c = u.stateNode, typeof c.componentWillUnmount == "function" && Lr(
          u,
          a,
          c
        )), fi(
          n,
          a,
          u
        );
        break;
      case 21:
        fi(
          n,
          a,
          u
        );
        break;
      case 22:
        on || pl(u, a), on = (c = on) || u.memoizedState !== null, fi(
          n,
          a,
          u
        ), on = c;
        break;
      default:
        fi(
          n,
          a,
          u
        );
    }
  }
  function mf(n, a) {
    if (a.memoizedState === null && (n = a.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null))))
      try {
        xf(n);
      } catch (u) {
        Ct(a, a.return, u);
      }
  }
  function ug(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var a = n.stateNode;
        return a === null && (a = n.stateNode = new lg()), a;
      case 22:
        return n = n.stateNode, a = n._retryCache, a === null && (a = n._retryCache = new lg()), a;
      default:
        throw Error(v(435, n.tag));
    }
  }
  function Hd(n, a) {
    var u = ug(n);
    a.forEach(function(c) {
      var r = hy.bind(null, n, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function $l(n, a) {
    var u = a.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = n, y = a, b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
            case 5:
              Zt = b.stateNode, Jl = !1;
              break e;
            case 3:
              Zt = b.stateNode.containerInfo, Jl = !0;
              break e;
            case 4:
              Zt = b.stateNode.containerInfo, Jl = !0;
              break e;
          }
          b = b.return;
        }
        if (Zt === null) throw Error(v(160));
        qa(s, y, r), Zt = null, Jl = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        xd(a, n), a = a.sibling;
  }
  var ba = null;
  function xd(n, a) {
    var u = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(a, n), Wl(n), c & 4 && (Ki(3, n, n.return), hf(3, n), Ki(5, n, n.return));
        break;
      case 1:
        $l(a, n), Wl(n), c & 512 && (on || u === null || pl(u, u.return)), c & 64 && Ya && (n = n.updateQueue, n !== null && (c = n.callbacks, c !== null && (u = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = ba;
        if ($l(a, n), Wl(n), c & 512 && (on || u === null || pl(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = n.memoizedState, u === null)
            if (c === null)
              if (n.stateNode === null) {
                e: {
                  c = n.type, u = n.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[Ie] || s[x] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Nn(s, c, u), s[x] = n, Tt(s), c = s;
                      break e;
                    case "link":
                      var y = yi(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (s = y[b], s.getAttribute("href") === (u.href == null ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Nn(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (y = yi(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (b = 0; b < y.length; b++)
                          if (s = y[b], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Nn(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(v(468, c));
                  }
                  s[x] = n, Tt(s), c = s;
                }
                n.stateNode = c;
              } else
                Jn(
                  r,
                  n.type,
                  n.stateNode
                );
            else
              n.stateNode = ls(
                r,
                c,
                n.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Jn(
              r,
              n.type,
              n.stateNode
            ) : ls(
              r,
              c,
              n.memoizedProps
            )) : c === null && n.stateNode !== null && ng(
              n,
              n.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        if (c & 4 && n.alternate === null) {
          r = n.stateNode, s = n.memoizedProps;
          try {
            for (var A = r.firstChild; A; ) {
              var N = A.nextSibling, ee = A.nodeName;
              A[Ie] || ee === "HEAD" || ee === "BODY" || ee === "SCRIPT" || ee === "STYLE" || ee === "LINK" && A.rel.toLowerCase() === "stylesheet" || r.removeChild(A), A = N;
            }
            for (var oe = n.type, X = r.attributes; X.length; )
              r.removeAttributeNode(X[0]);
            Nn(r, oe, s), r[x] = n, r[I] = s;
          } catch (Me) {
            Ct(n, n.return, Me);
          }
        }
      case 5:
        if ($l(a, n), Wl(n), c & 512 && (on || u === null || pl(u, u.return)), n.flags & 32) {
          r = n.stateNode;
          try {
            Wa(r, "");
          } catch (Me) {
            Ct(n, n.return, Me);
          }
        }
        c & 4 && n.stateNode != null && (r = n.memoizedProps, ng(
          n,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (Md = !0);
        break;
      case 6:
        if ($l(a, n), Wl(n), c & 4) {
          if (n.stateNode === null)
            throw Error(v(162));
          c = n.memoizedProps, u = n.stateNode;
          try {
            u.nodeValue = c;
          } catch (Me) {
            Ct(n, n.return, Me);
          }
        }
        break;
      case 3:
        if (ro = null, r = ba, ba = lh(a.containerInfo), $l(a, n), ba = r, Wl(n), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            xf(a.containerInfo);
          } catch (Me) {
            Ct(n, n.return, Me);
          }
        Md && (Md = !1, wd(n));
        break;
      case 4:
        c = ba, ba = lh(
          n.stateNode.containerInfo
        ), $l(a, n), Wl(n), ba = c;
        break;
      case 12:
        $l(a, n), Wl(n);
        break;
      case 13:
        $l(a, n), Wl(n), n.child.flags & 8192 && n.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Vd = Ye()), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, Hd(n, c)));
        break;
      case 22:
        if (c & 512 && (on || u === null || pl(u, u.return)), A = n.memoizedState !== null, N = u !== null && u.memoizedState !== null, ee = Ya, oe = on, Ya = ee || A, on = oe || N, $l(a, n), on = oe, Ya = ee, Wl(n), a = n.stateNode, a._current = n, a._visibility &= -3, a._visibility |= a._pendingVisibility & 2, c & 8192 && (a._visibility = A ? a._visibility & -2 : a._visibility | 1, A && (a = Ya || on, u === null || N || a || $c(n)), n.memoizedProps === null || n.memoizedProps.mode !== "manual"))
          e: for (u = null, a = n; ; ) {
            if (a.tag === 5 || a.tag === 26 || a.tag === 27) {
              if (u === null) {
                N = u = a;
                try {
                  if (r = N.stateNode, A)
                    s = r.style, typeof s.setProperty == "function" ? s.setProperty(
                      "display",
                      "none",
                      "important"
                    ) : s.display = "none";
                  else {
                    y = N.stateNode, b = N.memoizedProps.style;
                    var F = b != null && b.hasOwnProperty("display") ? b.display : null;
                    y.style.display = F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Me) {
                  Ct(N, N.return, Me);
                }
              }
            } else if (a.tag === 6) {
              if (u === null) {
                N = a;
                try {
                  N.stateNode.nodeValue = A ? "" : N.memoizedProps;
                } catch (Me) {
                  Ct(N, N.return, Me);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === n) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === n) break e;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === n) break e;
              u === a && (u = null), a = a.return;
            }
            u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
          }
        c & 4 && (c = n.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Hd(n, u))));
        break;
      case 19:
        $l(a, n), Wl(n), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, Hd(n, c)));
        break;
      case 21:
        break;
      default:
        $l(a, n), Wl(n);
    }
  }
  function Wl(n) {
    var a = n.flags;
    if (a & 2) {
      try {
        if (n.tag !== 27) {
          e: {
            for (var u = n.return; u !== null; ) {
              if (Fm(u)) {
                var c = u;
                break e;
              }
              u = u.return;
            }
            throw Error(v(160));
          }
          switch (c.tag) {
            case 27:
              var r = c.stateNode, s = oi(n);
              bt(n, s, r);
              break;
            case 5:
              var y = c.stateNode;
              c.flags & 32 && (Wa(y, ""), c.flags &= -33);
              var b = oi(n);
              bt(n, b, y);
              break;
            case 3:
            case 4:
              var A = c.stateNode.containerInfo, N = oi(n);
              Cd(
                n,
                N,
                A
              );
              break;
            default:
              throw Error(v(161));
          }
        }
      } catch (ee) {
        Ct(n, n.return, ee);
      }
      n.flags &= -3;
    }
    a & 4096 && (n.flags &= -4097);
  }
  function wd(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var a = n;
        wd(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), n = n.sibling;
      }
  }
  function yu(n, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        Pm(n, a.alternate, a), a = a.sibling;
  }
  function $c(n) {
    for (n = n.child; n !== null; ) {
      var a = n;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ki(4, a, a.return), $c(a);
          break;
        case 1:
          pl(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && Lr(
            a,
            a.return,
            u
          ), $c(a);
          break;
        case 26:
        case 27:
        case 5:
          pl(a, a.return), $c(a);
          break;
        case 22:
          pl(a, a.return), a.memoizedState === null && $c(a);
          break;
        default:
          $c(a);
      }
      n = n.sibling;
    }
  }
  function $i(n, a, u) {
    for (u = u && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var c = a.alternate, r = n, s = a, y = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          $i(
            r,
            s,
            u
          ), hf(4, s);
          break;
        case 1:
          if ($i(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (N) {
              Ct(c, c.return, N);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var b = c.stateNode;
            try {
              var A = r.shared.hiddenCallbacks;
              if (A !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < A.length; r++)
                  eg(A[r], b);
            } catch (N) {
              Ct(c, c.return, N);
            }
          }
          u && y & 64 && Jc(s), Ji(s, s.return);
          break;
        case 26:
        case 27:
        case 5:
          $i(
            r,
            s,
            u
          ), u && c === null && y & 4 && tg(s), Ji(s, s.return);
          break;
        case 12:
          $i(
            r,
            s,
            u
          );
          break;
        case 13:
          $i(
            r,
            s,
            u
          ), u && y & 4 && mf(r, s);
          break;
        case 22:
          s.memoizedState === null && $i(
            r,
            s,
            u
          ), Ji(s, s.return);
          break;
        default:
          $i(
            r,
            s,
            u
          );
      }
      a = a.sibling;
    }
  }
  function _d(n, a) {
    var u = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (n != null && n.refCount++, u != null && $o(u));
  }
  function at(n, a) {
    n = null, a.alternate !== null && (n = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== n && (a.refCount++, n != null && $o(n));
  }
  function pu(n, a, u, c) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        Nd(
          n,
          a,
          u,
          c
        ), a = a.sibling;
  }
  function Nd(n, a, u, c) {
    var r = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        pu(
          n,
          a,
          u,
          c
        ), r & 2048 && hf(9, a);
        break;
      case 3:
        pu(
          n,
          a,
          u,
          c
        ), r & 2048 && (n = null, a.alternate !== null && (n = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== n && (a.refCount++, n != null && $o(n)));
        break;
      case 12:
        if (r & 2048) {
          pu(
            n,
            a,
            u,
            c
          ), n = a.stateNode;
          try {
            var s = a.memoizedProps, y = s.id, b = s.onPostCommit;
            typeof b == "function" && b(
              y,
              a.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (A) {
            Ct(a, a.return, A);
          }
        } else
          pu(
            n,
            a,
            u,
            c
          );
        break;
      case 23:
        break;
      case 22:
        s = a.stateNode, a.memoizedState !== null ? s._visibility & 4 ? pu(
          n,
          a,
          u,
          c
        ) : Fc(n, a) : s._visibility & 4 ? pu(
          n,
          a,
          u,
          c
        ) : (s._visibility |= 4, Wc(
          n,
          a,
          u,
          c,
          (a.subtreeFlags & 10256) !== 0
        )), r & 2048 && _d(
          a.alternate,
          a
        );
        break;
      case 24:
        pu(
          n,
          a,
          u,
          c
        ), r & 2048 && at(a.alternate, a);
        break;
      default:
        pu(
          n,
          a,
          u,
          c
        );
    }
  }
  function Wc(n, a, u, c, r) {
    for (r = r && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var s = n, y = a, b = u, A = c, N = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Wc(
            s,
            y,
            b,
            A,
            r
          ), hf(8, y);
          break;
        case 23:
          break;
        case 22:
          var ee = y.stateNode;
          y.memoizedState !== null ? ee._visibility & 4 ? Wc(
            s,
            y,
            b,
            A,
            r
          ) : Fc(
            s,
            y
          ) : (ee._visibility |= 4, Wc(
            s,
            y,
            b,
            A,
            r
          )), r && N & 2048 && _d(
            y.alternate,
            y
          );
          break;
        case 24:
          Wc(
            s,
            y,
            b,
            A,
            r
          ), r && N & 2048 && at(y.alternate, y);
          break;
        default:
          Wc(
            s,
            y,
            b,
            A,
            r
          );
      }
      a = a.sibling;
    }
  }
  function Fc(n, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var u = n, c = a, r = c.flags;
        switch (c.tag) {
          case 22:
            Fc(u, c), r & 2048 && _d(
              c.alternate,
              c
            );
            break;
          case 24:
            Fc(u, c), r & 2048 && at(c.alternate, c);
            break;
          default:
            Fc(u, c);
        }
        a = a.sibling;
      }
  }
  var ri = 8192;
  function si(n) {
    if (n.subtreeFlags & ri)
      for (n = n.child; n !== null; )
        Pc(n), n = n.sibling;
  }
  function Pc(n) {
    switch (n.tag) {
      case 26:
        si(n), n.flags & ri && n.memoizedState !== null && Zv(
          ba,
          n.memoizedState,
          n.memoizedProps
        );
        break;
      case 5:
        si(n);
        break;
      case 3:
      case 4:
        var a = ba;
        ba = lh(n.stateNode.containerInfo), si(n), ba = a;
        break;
      case 22:
        n.memoizedState === null && (a = n.alternate, a !== null && a.memoizedState !== null ? (a = ri, ri = 16777216, si(n), ri = a) : si(n));
        break;
      default:
        si(n);
    }
  }
  function ey(n) {
    var a = n.alternate;
    if (a !== null && (n = a.child, n !== null)) {
      a.child = null;
      do
        a = n.sibling, n.sibling = null, n = a;
      while (n !== null);
    }
  }
  function Ic(n) {
    var a = n.deletions;
    if (n.flags & 16) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          _n = c, ja(
            c,
            n
          );
        }
      ey(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Rn(n), n = n.sibling;
  }
  function Rn(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ic(n), n.flags & 2048 && Ki(9, n, n.return);
        break;
      case 3:
        Ic(n);
        break;
      case 12:
        Ic(n);
        break;
      case 22:
        var a = n.stateNode;
        n.memoizedState !== null && a._visibility & 4 && (n.return === null || n.return.tag !== 13) ? (a._visibility &= -5, Bd(n)) : Ic(n);
        break;
      default:
        Ic(n);
    }
  }
  function Bd(n) {
    var a = n.deletions;
    if (n.flags & 16) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var c = a[u];
          _n = c, ja(
            c,
            n
          );
        }
      ey(n);
    }
    for (n = n.child; n !== null; ) {
      switch (a = n, a.tag) {
        case 0:
        case 11:
        case 15:
          Ki(8, a, a.return), Bd(a);
          break;
        case 22:
          u = a.stateNode, u._visibility & 4 && (u._visibility &= -5, Bd(a));
          break;
        default:
          Bd(a);
      }
      n = n.sibling;
    }
  }
  function ja(n, a) {
    for (; _n !== null; ) {
      var u = _n;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ki(8, u, a);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          $o(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, _n = c;
      else
        e: for (u = n; _n !== null; ) {
          c = _n;
          var r = c.sibling, s = c.return;
          if (Im(c), c === u) {
            _n = null;
            break e;
          }
          if (r !== null) {
            r.return = s, _n = r;
            break e;
          }
          _n = s;
        }
    }
  }
  function ig(n, a, u, c) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function An(n, a, u, c) {
    return new ig(n, a, u, c);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function La(n, a) {
    var u = n.alternate;
    return u === null ? (u = An(
      n.tag,
      a,
      n.key,
      n.mode
    ), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = a, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 31457280, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, a = n.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u.refCleanup = n.refCleanup, u;
  }
  function At(n, a) {
    n.flags &= 31457282;
    var u = n.alternate;
    return u === null ? (n.childLanes = 0, n.lanes = a, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = u.childLanes, n.lanes = u.lanes, n.child = u.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = u.memoizedProps, n.memoizedState = u.memoizedState, n.updateQueue = u.updateQueue, n.type = u.type, a = u.dependencies, n.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), n;
  }
  function yf(n, a, u, c, r, s) {
    var y = 0;
    if (c = n, typeof n == "function") Yd(n) && (y = 1);
    else if (typeof n == "string")
      y = xl(
        n,
        u,
        nn.current
      ) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else
      e: switch (n) {
        case R:
          return It(u.children, r, s, a);
        case z:
          y = 8, r |= 24;
          break;
        case te:
          return n = An(12, u, a, r | 2), n.elementType = te, n.lanes = s, n;
        case me:
          return n = An(13, u, a, r), n.elementType = me, n.lanes = s, n;
        case fe:
          return n = An(19, u, a, r), n.elementType = fe, n.lanes = s, n;
        case Ee:
          return cg(u, r, s, a);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case q:
              case G:
                y = 10;
                break e;
              case D:
                y = 9;
                break e;
              case $:
                y = 11;
                break e;
              case le:
                y = 14;
                break e;
              case ce:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            v(130, n === null ? "null" : typeof n, "")
          ), c = null;
      }
    return a = An(y, u, a, r), a.elementType = n, a.type = c, a.lanes = s, a;
  }
  function It(n, a, u, c) {
    return n = An(7, n, c, a), n.lanes = u, n;
  }
  function cg(n, a, u, c) {
    n = An(22, n, c, a), n.elementType = Ee, n.lanes = u;
    var r = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function() {
        var s = r._current;
        if (s === null) throw Error(v(456));
        if (!(r._pendingVisibility & 2)) {
          var y = Pa(s, 2);
          y !== null && (r._pendingVisibility |= 2, On(y, s, 2));
        }
      },
      attach: function() {
        var s = r._current;
        if (s === null) throw Error(v(456));
        if (r._pendingVisibility & 2) {
          var y = Pa(s, 2);
          y !== null && (r._pendingVisibility &= -3, On(y, s, 2));
        }
      }
    };
    return n.stateNode = r, n;
  }
  function qd(n, a, u) {
    return n = An(6, n, null, a), n.lanes = u, n;
  }
  function Vr(n, a, u) {
    return a = An(
      4,
      n.children !== null ? n.children : [],
      n.key,
      a
    ), a.lanes = u, a.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, a;
  }
  function gu(n) {
    n.flags |= 4;
  }
  function Fl(n, a) {
    if (a.type !== "stylesheet" || a.state.loading & 4)
      n.flags &= -16777217;
    else if (n.flags |= 16777216, !cc(a)) {
      if (a = Zl.current, a !== null && ((st & 4194176) === st ? xa !== null : (st & 62914560) !== st && !(st & 536870912) || a !== xa))
        throw Yc = Is, yr;
      n.flags |= 8192;
    }
  }
  function Gr(n, a) {
    a !== null && (n.flags |= 4), n.flags & 16384 && (a = n.tag !== 22 ? ln() : 536870912, n.lanes |= a, Fi |= a);
  }
  function eo(n, a) {
    if (!ht)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function kt(n) {
    var a = n.alternate !== null && n.alternate.child === n.child, u = 0, c = 0;
    if (a)
      for (var r = n.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 31457280, c |= r.flags & 31457280, r.return = n, r = r.sibling;
    else
      for (r = n.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = n, r = r.sibling;
    return n.subtreeFlags |= c, n.childLanes = u, a;
  }
  function jd(n, a, u) {
    var c = a.pendingProps;
    switch (mr(a), a.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return kt(a), null;
      case 1:
        return kt(a), null;
      case 3:
        return u = a.stateNode, c = null, n !== null && (c = n.memoizedState.cache), a.memoizedState.cache !== c && (a.flags |= 2048), hu(Tn), Tl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (_c(a) ? gu(a) : n === null || n.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, ga !== null && (uy(ga), ga = null))), kt(a), null;
      case 26:
        return u = a.memoizedState, n === null ? (gu(a), u !== null ? (kt(a), Fl(a, u)) : (kt(a), a.flags &= -16777217)) : u ? u !== n.memoizedState ? (gu(a), kt(a), Fl(a, u)) : (kt(a), a.flags &= -16777217) : (n.memoizedProps !== c && gu(a), kt(a), a.flags &= -16777217), null;
      case 27:
        Nu(a), u = Mn.current;
        var r = a.type;
        if (n !== null && a.stateNode != null)
          n.memoizedProps !== c && gu(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return kt(a), null;
          }
          n = nn.current, _c(a) ? ym(a) : (n = Tu(r, c, u), a.stateNode = n, gu(a));
        }
        return kt(a), null;
      case 5:
        if (Nu(a), u = a.type, n !== null && a.stateNode != null)
          n.memoizedProps !== c && gu(a);
        else {
          if (!c) {
            if (a.stateNode === null)
              throw Error(v(166));
            return kt(a), null;
          }
          if (n = nn.current, _c(a))
            ym(a);
          else {
            switch (r = Fr(
              Mn.current
            ), n) {
              case 1:
                n = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = r.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? n.multiple = !0 : c.size && (n.size = c.size);
                    break;
                  default:
                    n = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            n[x] = a, n[I] = c;
            e: for (r = a.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                n.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === a) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === a)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            a.stateNode = n;
            e: switch (Nn(n, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!c.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && gu(a);
          }
        }
        return kt(a), a.flags &= -16777217, null;
      case 6:
        if (n && a.stateNode != null)
          n.memoizedProps !== c && gu(a);
        else {
          if (typeof c != "string" && a.stateNode === null)
            throw Error(v(166));
          if (n = Mn.current, _c(a)) {
            if (n = a.stateNode, u = a.memoizedProps, c = null, r = Zn, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            n[x] = a, n = !!(n.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || Ke(n.nodeValue, u)), n || Bi(a);
          } else
            n = Fr(n).createTextNode(
              c
            ), n[x] = a, a.stateNode = n;
        }
        return kt(a), null;
      case 13:
        if (c = a.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (r = _c(a), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!r) throw Error(v(318));
              if (r = a.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(v(317));
              r[x] = a;
            } else
              Xo(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
            kt(a), r = !1;
          } else
            ga !== null && (uy(ga), ga = null), r = !0;
          if (!r)
            return a.flags & 256 ? (wa(a), a) : (wa(a), null);
        }
        if (wa(a), a.flags & 128)
          return a.lanes = u, a;
        if (u = c !== null, n = n !== null && n.memoizedState !== null, u) {
          c = a.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048);
        }
        return u !== n && u && (a.child.flags |= 8192), Gr(a, a.updateQueue), kt(a), null;
      case 4:
        return Tl(), n === null && oo(a.stateNode.containerInfo), kt(a), null;
      case 10:
        return hu(a.type), kt(a), null;
      case 19:
        if (Et(yn), r = a.memoizedState, r === null) return kt(a), null;
        if (c = (a.flags & 128) !== 0, s = r.rendering, s === null)
          if (c) eo(r, !1);
          else {
            if (Jt !== 0 || n !== null && n.flags & 128)
              for (n = a.child; n !== null; ) {
                if (s = vr(n), s !== null) {
                  for (a.flags |= 128, eo(r, !1), n = s.updateQueue, a.updateQueue = n, Gr(a, n), a.subtreeFlags = 0, n = u, u = a.child; u !== null; )
                    At(u, n), u = u.sibling;
                  return rt(
                    yn,
                    yn.current & 1 | 2
                  ), a.child;
                }
                n = n.sibling;
              }
            r.tail !== null && Ye() > Qr && (a.flags |= 128, c = !0, eo(r, !1), a.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = vr(s), n !== null) {
              if (a.flags |= 128, c = !0, n = n.updateQueue, a.updateQueue = n, Gr(a, n), eo(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !ht)
                return kt(a), null;
            } else
              2 * Ye() - r.renderingStartTime > Qr && u !== 536870912 && (a.flags |= 128, c = !0, eo(r, !1), a.lanes = 4194304);
          r.isBackwards ? (s.sibling = a.child, a.child = s) : (n = r.last, n !== null ? n.sibling = s : a.child = s, r.last = s);
        }
        return r.tail !== null ? (a = r.tail, r.rendering = a, r.tail = a.sibling, r.renderingStartTime = Ye(), a.sibling = null, n = yn.current, rt(yn, c ? n & 1 | 2 : n & 1), a) : (kt(a), null);
      case 22:
      case 23:
        return wa(a), gr(), c = a.memoizedState !== null, n !== null ? n.memoizedState !== null !== c && (a.flags |= 8192) : c && (a.flags |= 8192), c ? u & 536870912 && !(a.flags & 128) && (kt(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : kt(a), u = a.updateQueue, u !== null && Gr(a, u.retryQueue), u = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), c = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048), n !== null && Et(ji), null;
      case 24:
        return u = null, n !== null && (u = n.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), hu(Tn), kt(a), null;
      case 25:
        return null;
    }
    throw Error(v(156, a.tag));
  }
  function og(n, a) {
    switch (mr(a), a.tag) {
      case 1:
        return n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 3:
        return hu(Tn), Tl(), n = a.flags, n & 65536 && !(n & 128) ? (a.flags = n & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return Nu(a), null;
      case 13:
        if (wa(a), n = a.memoizedState, n !== null && n.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(v(340));
          Xo();
        }
        return n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 19:
        return Et(yn), null;
      case 4:
        return Tl(), null;
      case 10:
        return hu(a.type), null;
      case 22:
      case 23:
        return wa(a), gr(), n !== null && Et(ji), n = a.flags, n & 65536 ? (a.flags = n & -65537 | 128, a) : null;
      case 24:
        return hu(Tn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(n, a) {
    switch (mr(a), a.tag) {
      case 3:
        hu(Tn), Tl();
        break;
      case 26:
      case 27:
      case 5:
        Nu(a);
        break;
      case 4:
        Tl();
        break;
      case 13:
        wa(a);
        break;
      case 19:
        Et(yn);
        break;
      case 10:
        hu(a.type);
        break;
      case 22:
      case 23:
        wa(a), gr(), n !== null && Et(ji);
        break;
      case 24:
        hu(Tn);
    }
  }
  var Ld = {
    getCacheForType: function(n) {
      var a = kn(Tn), u = a.data.get(n);
      return u === void 0 && (u = n(), a.data.set(n, u)), u;
    }
  }, rg = typeof WeakMap == "function" ? WeakMap : Map, Kt = 0, zt = null, ut = null, st = 0, wt = 0, Pl = null, vu = !1, pf = !1, ty = !1, di = 0, Jt = 0, Wi = 0, to = 0, ny = 0, Sa = 0, Fi = 0, Xr = null, bu = null, Ul = !1, Vd = 0, Qr = 1 / 0, Zr = null, hi = null, Gd = !1, no = null, gf = 0, ly = 0, vf = null, bf = 0, Xd = null;
  function il() {
    if (Kt & 2 && st !== 0)
      return st & -st;
    if (ve.T !== null) {
      var n = $u;
      return n !== 0 ? n : Af();
    }
    return ju();
  }
  function lo() {
    Sa === 0 && (Sa = !(st & 536870912) || ht ? Ja() : 536870912);
    var n = Zl.current;
    return n !== null && (n.flags |= 32), Sa;
  }
  function On(n, a, u) {
    (n === zt && wt === 2 || n.cancelPendingCommit !== null) && (Pi(n, 0), Su(
      n,
      st,
      Sa,
      !1
    )), jl(n, u), (!(Kt & 2) || n !== zt) && (n === zt && (!(Kt & 2) && (to |= u), Jt === 4 && Su(
      n,
      st,
      Sa,
      !1
    )), Il(n));
  }
  function ay(n, a, u) {
    if (Kt & 6) throw Error(v(327));
    var c = !u && (a & 60) === 0 && (a & n.expiredLanes) === 0 || Al(n, a), r = c ? wv(n, a) : oy(n, a, !0), s = c;
    do {
      if (r === 0) {
        pf && !c && Su(n, a, 0, !1);
        break;
      } else if (r === 6)
        Su(
          n,
          a,
          0,
          !vu
        );
      else {
        if (u = n.current.alternate, s && !kr(u)) {
          r = oy(n, a, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = a, n.errorRecoveryDisabledLanes & s)
            var y = 0;
          else
            y = n.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            a = y;
            e: {
              var b = n;
              r = Xr;
              var A = b.current.memoizedState.isDehydrated;
              if (A && (Pi(b, y).flags |= 256), y = oy(
                b,
                y,
                !1
              ), y !== 2) {
                if (ty && !A) {
                  b.errorRecoveryDisabledLanes |= s, to |= s, r = 4;
                  break e;
                }
                s = bu, bu = r, s !== null && uy(s);
              }
              r = y;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Pi(n, 0), Su(n, a, 0, !0);
          break;
        }
        e: {
          switch (c = n, r) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((a & 4194176) === a) {
                Su(
                  c,
                  a,
                  Sa,
                  !vu
                );
                break e;
              }
              break;
            case 2:
              bu = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if (c.finishedWork = u, c.finishedLanes = a, (a & 62914560) === a && (s = Vd + 300 - Ye(), 10 < s)) {
            if (Su(
              c,
              a,
              Sa,
              !vu
            ), ql(c, 0) !== 0) break e;
            c.timeoutHandle = ta(
              ao.bind(
                null,
                c,
                u,
                bu,
                Zr,
                Ul,
                a,
                Sa,
                to,
                Fi,
                vu,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          ao(
            c,
            u,
            bu,
            Zr,
            Ul,
            a,
            Sa,
            to,
            Fi,
            vu,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Il(n);
  }
  function uy(n) {
    bu === null ? bu = n : bu.push.apply(
      bu,
      n
    );
  }
  function ao(n, a, u, c, r, s, y, b, A, N, ee, oe, X) {
    var F = a.subtreeFlags;
    if ((F & 8192 || (F & 16785408) === 16785408) && (so = { stylesheets: null, count: 0, unsuspend: Qv }, Pc(a), a = bg(), a !== null)) {
      n.cancelPendingCommit = a(
        ry.bind(
          null,
          n,
          u,
          c,
          r,
          y,
          b,
          A,
          1,
          oe,
          X
        )
      ), Su(n, s, y, !N);
      return;
    }
    ry(
      n,
      u,
      c,
      r,
      y,
      b,
      A,
      ee,
      oe,
      X
    );
  }
  function kr(n) {
    for (var a = n; ; ) {
      var u = a.tag;
      if ((u === 0 || u === 11 || u === 15) && a.flags & 16384 && (u = a.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!nl(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === n) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === n) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Su(n, a, u, c) {
    a &= ~ny, a &= ~to, n.suspendedLanes |= a, n.pingedLanes &= ~a, c && (n.warmLanes |= a), c = n.expirationTimes;
    for (var r = a; 0 < r; ) {
      var s = 31 - Ln(r), y = 1 << s;
      c[s] = -1, r &= ~y;
    }
    u !== 0 && qu(n, u, a);
  }
  function uo() {
    return Kt & 6 ? !0 : (Tf(0), !1);
  }
  function Kr() {
    if (ut !== null) {
      if (wt === 0)
        var n = ut.return;
      else
        n = ut, du = Kc = null, Tr(n), En = null, qi = 0, n = ut;
      for (; n !== null; )
        fg(n.alternate, n), n = n.return;
      ut = null;
    }
  }
  function Pi(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    u !== -1 && (n.timeoutHandle = -1, Kn(u)), u = n.cancelPendingCommit, u !== null && (n.cancelPendingCommit = null, u()), Kr(), zt = n, ut = u = La(n.current, null), st = a, wt = 0, Pl = null, vu = !1, pf = Al(n, a), ty = !1, Fi = Sa = ny = to = Wi = Jt = 0, bu = Xr = null, Ul = !1, a & 8 && (a |= a & 32);
    var c = n.entangledLanes;
    if (c !== 0)
      for (n = n.entanglements, c &= a; 0 < c; ) {
        var r = 31 - Ln(c), s = 1 << r;
        a |= n[r], c &= ~s;
      }
    return di = a, Fs(), u;
  }
  function iy(n, a) {
    Ze = null, ve.H = Hn, a === lu ? (a = Yi(), wt = 3) : a === yr ? (a = Yi(), wt = 4) : wt = a === Qm ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Pl = a, ut === null && (Jt = 1, li(
      n,
      Un(a, n.current)
    ));
  }
  function cy() {
    var n = ve.H;
    return ve.H = Hn, n === null ? Hn : n;
  }
  function sg() {
    var n = ve.A;
    return ve.A = Ld, n;
  }
  function Qd() {
    Jt = 4, vu || (st & 4194176) !== st && Zl.current !== null || (pf = !0), !(Wi & 134217727) && !(to & 134217727) || zt === null || Su(
      zt,
      st,
      Sa,
      !1
    );
  }
  function oy(n, a, u) {
    var c = Kt;
    Kt |= 2;
    var r = cy(), s = sg();
    (zt !== n || st !== a) && (Zr = null, Pi(n, a)), a = !1;
    var y = Jt;
    e: do
      try {
        if (wt !== 0 && ut !== null) {
          var b = ut, A = Pl;
          switch (wt) {
            case 8:
              Kr(), y = 6;
              break e;
            case 3:
            case 2:
            case 6:
              Zl.current === null && (a = !0);
              var N = wt;
              if (wt = 0, Pl = null, Sf(n, b, A, N), u && pf) {
                y = 0;
                break e;
              }
              break;
            default:
              N = wt, wt = 0, Pl = null, Sf(n, b, A, N);
          }
        }
        xv(), y = Jt;
        break;
      } catch (ee) {
        iy(n, ee);
      }
    while (!0);
    return a && n.shellSuspendCounter++, du = Kc = null, Kt = c, ve.H = r, ve.A = s, ut === null && (zt = null, st = 0, Fs()), y;
  }
  function xv() {
    for (; ut !== null; ) kd(ut);
  }
  function wv(n, a) {
    var u = Kt;
    Kt |= 2;
    var c = cy(), r = sg();
    zt !== n || st !== a ? (Zr = null, Qr = Ye() + 500, Pi(n, a)) : pf = Al(
      n,
      a
    );
    e: do
      try {
        if (wt !== 0 && ut !== null) {
          a = ut;
          var s = Pl;
          t: switch (wt) {
            case 1:
              wt = 0, Pl = null, Sf(n, a, s, 1);
              break;
            case 2:
              if (Zp(s)) {
                wt = 0, Pl = null, dg(a);
                break;
              }
              a = function() {
                wt === 2 && zt === n && (wt = 7), Il(n);
              }, s.then(a, a);
              break e;
            case 3:
              wt = 7;
              break e;
            case 4:
              wt = 5;
              break e;
            case 7:
              Zp(s) ? (wt = 0, Pl = null, dg(a)) : (wt = 0, Pl = null, Sf(n, a, s, 7));
              break;
            case 5:
              var y = null;
              switch (ut.tag) {
                case 26:
                  y = ut.memoizedState;
                case 5:
                case 27:
                  var b = ut;
                  if (!y || cc(y)) {
                    wt = 0, Pl = null;
                    var A = b.sibling;
                    if (A !== null) ut = A;
                    else {
                      var N = b.return;
                      N !== null ? (ut = N, Kd(N)) : ut = null;
                    }
                    break t;
                  }
              }
              wt = 0, Pl = null, Sf(n, a, s, 5);
              break;
            case 6:
              wt = 0, Pl = null, Sf(n, a, s, 6);
              break;
            case 8:
              Kr(), Jt = 6;
              break e;
            default:
              throw Error(v(462));
          }
        }
        Zd();
        break;
      } catch (ee) {
        iy(n, ee);
      }
    while (!0);
    return du = Kc = null, ve.H = c, ve.A = r, Kt = u, ut !== null ? 0 : (zt = null, st = 0, Fs(), Jt);
  }
  function Zd() {
    for (; ut !== null && !Oe(); )
      kd(ut);
  }
  function kd(n) {
    var a = jt(n.alternate, n, di);
    n.memoizedProps = n.pendingProps, a === null ? Kd(n) : ut = a;
  }
  function dg(n) {
    var a = n, u = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Km(
          u,
          a,
          a.pendingProps,
          a.type,
          void 0,
          st
        );
        break;
      case 11:
        a = Km(
          u,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          st
        );
        break;
      case 5:
        Tr(a);
      default:
        fg(u, a), a = ut = At(a, di), a = jt(u, a, di);
    }
    n.memoizedProps = n.pendingProps, a === null ? Kd(n) : ut = a;
  }
  function Sf(n, a, u, c) {
    du = Kc = null, Tr(a), En = null, qi = 0;
    var r = a.return;
    try {
      if (Qi(
        n,
        r,
        a,
        u,
        st
      )) {
        Jt = 1, li(
          n,
          Un(u, n.current)
        ), ut = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw ut = r, s;
      Jt = 1, li(
        n,
        Un(u, n.current)
      ), ut = null;
      return;
    }
    a.flags & 32768 ? (ht || c === 1 ? n = !0 : pf || st & 536870912 ? n = !1 : (vu = n = !0, (c === 2 || c === 3 || c === 6) && (c = Zl.current, c !== null && c.tag === 13 && (c.flags |= 16384))), fy(a, n)) : Kd(a);
  }
  function Kd(n) {
    var a = n;
    do {
      if (a.flags & 32768) {
        fy(
          a,
          vu
        );
        return;
      }
      n = a.return;
      var u = jd(
        a.alternate,
        a,
        di
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        ut = a;
        return;
      }
      ut = a = n;
    } while (a !== null);
    Jt === 0 && (Jt = 5);
  }
  function fy(n, a) {
    do {
      var u = og(n.alternate, n);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = n.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !a && (n = n.sibling, n !== null)) {
        ut = n;
        return;
      }
      ut = n = u;
    } while (n !== null);
    Jt = 6, ut = null;
  }
  function ry(n, a, u, c, r, s, y, b, A, N) {
    var ee = ve.T, oe = ye.p;
    try {
      ye.p = 2, ve.T = null, hg(
        n,
        a,
        u,
        c,
        oe,
        r,
        s,
        y,
        b,
        A,
        N
      );
    } finally {
      ve.T = ee, ye.p = oe;
    }
  }
  function hg(n, a, u, c, r, s, y, b) {
    do
      io();
    while (no !== null);
    if (Kt & 6) throw Error(v(327));
    var A = n.finishedWork;
    if (c = n.finishedLanes, A === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, A === n.current) throw Error(v(177));
    n.callbackNode = null, n.callbackPriority = 0, n.cancelPendingCommit = null;
    var N = A.lanes | A.childLanes;
    if (N |= dr, Yu(
      n,
      c,
      N,
      s,
      y,
      b
    ), n === zt && (ut = zt = null, st = 0), !(A.subtreeFlags & 10256) && !(A.flags & 10256) || Gd || (Gd = !0, ly = N, vf = u, my(Ne, function() {
      return io(), null;
    })), u = (A.flags & 15990) !== 0, A.subtreeFlags & 15990 || u ? (u = ve.T, ve.T = null, s = ye.p, ye.p = 2, y = Kt, Kt |= 4, ag(n, A), xd(A, n), sm(th, n.containerInfo), us = !!eh, th = eh = null, n.current = A, Pm(n, A.alternate, A), Ce(), Kt = y, ye.p = s, ve.T = u) : n.current = A, Gd ? (Gd = !1, no = n, gf = c) : sy(n, N), N = n.pendingLanes, N === 0 && (hi = null), Rl(A.stateNode), Il(n), a !== null)
      for (r = n.onRecoverableError, A = 0; A < a.length; A++)
        N = a[A], r(N.value, {
          componentStack: N.stack
        });
    return gf & 3 && io(), N = n.pendingLanes, c & 4194218 && N & 42 ? n === Xd ? bf++ : (bf = 0, Xd = n) : bf = 0, Tf(0), null;
  }
  function sy(n, a) {
    (n.pooledCacheLanes &= a) === 0 && (a = n.pooledCache, a != null && (n.pooledCache = null, $o(a)));
  }
  function io() {
    if (no !== null) {
      var n = no, a = ly;
      ly = 0;
      var u = $a(gf), c = ve.T, r = ye.p;
      try {
        if (ye.p = 32 > u ? 32 : u, ve.T = null, no === null)
          var s = !1;
        else {
          u = vf, vf = null;
          var y = no, b = gf;
          if (no = null, gf = 0, Kt & 6)
            throw Error(v(331));
          var A = Kt;
          if (Kt |= 4, Rn(y.current), Nd(y, y.current, b, u), Kt = A, Tf(0, !1), Yt && typeof Yt.onPostCommitFiberRoot == "function")
            try {
              Yt.onPostCommitFiberRoot(bn, y);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        ye.p = r, ve.T = c, sy(n, a);
      }
    }
    return !1;
  }
  function Jd(n, a, u) {
    a = Un(u, a), a = Ba(n.stateNode, a, 2), n = ci(n, a, 2), n !== null && (jl(n, 2), Il(n));
  }
  function Ct(n, a, u) {
    if (n.tag === 3)
      Jd(n, n, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Jd(
            a,
            n,
            u
          );
          break;
        } else if (a.tag === 1) {
          var c = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (hi === null || !hi.has(c))) {
            n = Un(u, n), u = Sd(2), c = ci(a, u, 2), c !== null && (Ed(
              u,
              c,
              a,
              n
            ), jl(c, 2), Il(c));
            break;
          }
        }
        a = a.return;
      }
  }
  function dy(n, a, u) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new rg();
      var r = /* @__PURE__ */ new Set();
      c.set(a, r);
    } else
      r = c.get(a), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(a, r));
    r.has(u) || (ty = !0, r.add(u), n = _v.bind(null, n, a, u), a.then(n, n));
  }
  function _v(n, a, u) {
    var c = n.pingCache;
    c !== null && c.delete(a), n.pingedLanes |= n.suspendedLanes & u, n.warmLanes &= ~u, zt === n && (st & u) === u && (Jt === 4 || Jt === 3 && (st & 62914560) === st && 300 > Ye() - Vd ? !(Kt & 2) && Pi(n, 0) : ny |= u, Fi === st && (Fi = 0)), Il(n);
  }
  function mg(n, a) {
    a === 0 && (a = ln()), n = Pa(n, a), n !== null && (jl(n, a), Il(n));
  }
  function Nv(n) {
    var a = n.memoizedState, u = 0;
    a !== null && (u = a.retryLane), mg(n, u);
  }
  function hy(n, a) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, r = n.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      case 22:
        c = n.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    c !== null && c.delete(a), mg(n, u);
  }
  function my(n, a) {
    return Yl(n, a);
  }
  var Ef = null, co = null, $d = !1, Ii = !1, yy = !1, ec = 0;
  function Il(n) {
    n !== co && n.next === null && (co === null ? Ef = co = n : co = co.next = n), Ii = !0, $d || ($d = !0, gy(Bv));
  }
  function Tf(n, a) {
    if (!yy && Ii) {
      yy = !0;
      do
        for (var u = !1, c = Ef; c !== null; ) {
          if (n !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var y = c.suspendedLanes, b = c.pingedLanes;
              s = (1 << 31 - Ln(42 | n) + 1) - 1, s &= r & ~(y & ~b), s = s & 201326677 ? s & 201326677 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, Rf(c, s));
          } else
            s = st, s = ql(
              c,
              c === zt ? s : 0
            ), !(s & 3) || Al(c, s) || (u = !0, Rf(c, s));
          c = c.next;
        }
      while (u);
      yy = !1;
    }
  }
  function Bv() {
    Ii = $d = !1;
    var n = 0;
    ec !== 0 && (ol() && (n = ec), ec = 0);
    for (var a = Ye(), u = null, c = Ef; c !== null; ) {
      var r = c.next, s = Jr(c, a);
      s === 0 ? (c.next = null, u === null ? Ef = r : u.next = r, r === null && (co = u)) : (u = c, (n !== 0 || s & 3) && (Ii = !0)), c = r;
    }
    Tf(n);
  }
  function Jr(n, a) {
    for (var u = n.suspendedLanes, c = n.pingedLanes, r = n.expirationTimes, s = n.pendingLanes & -62914561; 0 < s; ) {
      var y = 31 - Ln(s), b = 1 << y, A = r[y];
      A === -1 ? (!(b & u) || b & c) && (r[y] = Ai(b, a)) : A <= a && (n.expiredLanes |= b), s &= ~b;
    }
    if (a = zt, u = st, u = ql(
      n,
      n === a ? u : 0
    ), c = n.callbackNode, u === 0 || n === a && wt === 2 || n.cancelPendingCommit !== null)
      return c !== null && c !== null && H(c), n.callbackNode = null, n.callbackPriority = 0;
    if (!(u & 3) || Al(n, u)) {
      if (a = u & -u, a === n.callbackPriority) return a;
      switch (c !== null && H(c), $a(u)) {
        case 2:
        case 8:
          u = Ge;
          break;
        case 32:
          u = Ne;
          break;
        case 268435456:
          u = mn;
          break;
        default:
          u = Ne;
      }
      return c = py.bind(null, n), u = Yl(u, c), n.callbackPriority = a, n.callbackNode = u, a;
    }
    return c !== null && c !== null && H(c), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function py(n, a) {
    var u = n.callbackNode;
    if (io() && n.callbackNode !== u)
      return null;
    var c = st;
    return c = ql(
      n,
      n === zt ? c : 0
    ), c === 0 ? null : (ay(n, c, a), Jr(n, Ye()), n.callbackNode != null && n.callbackNode === u ? py.bind(null, n) : null);
  }
  function Rf(n, a) {
    if (io()) return null;
    ay(n, a, !0);
  }
  function gy(n) {
    qv(function() {
      Kt & 6 ? Yl(vt, n) : n();
    });
  }
  function Af() {
    return ec === 0 && (ec = Ja()), ec;
  }
  function vy(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : Ns("" + n);
  }
  function dn(n, a) {
    var u = a.ownerDocument.createElement("input");
    return u.name = a.name, u.value = a.value, n.id && u.setAttribute("form", n.id), a.parentNode.insertBefore(u, a), n = new FormData(n), u.parentNode.removeChild(u), n;
  }
  function by(n, a, u, c, r) {
    if (a === "submit" && u && u.stateNode === r) {
      var s = vy(
        (r[I] || null).action
      ), y = c.submitter;
      y && (a = (a = y[I] || null) ? vy(a.formAction) : y.getAttribute("formAction"), a !== null && (s = a, y = null));
      var b = new js(
        "action",
        "action",
        null,
        c,
        r
      );
      n.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (ec !== 0) {
                  var A = y ? dn(r, y) : new FormData(r);
                  ti(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: r.method,
                      action: s
                    },
                    null,
                    A
                  );
                }
              } else
                typeof s == "function" && (b.preventDefault(), A = y ? dn(r, y) : new FormData(r), ti(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: r.method,
                    action: s
                  },
                  s,
                  A
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Sy = 0; Sy < an.length; Sy++) {
    var Ey = an[Sy], tc = Ey.toLowerCase(), Of = Ey[0].toUpperCase() + Ey.slice(1);
    Ql(
      tc,
      "on" + Of
    );
  }
  Ql(Xp, "onAnimationEnd"), Ql(Ws, "onAnimationIteration"), Ql(rr, "onAnimationStart"), Ql("dblclick", "onDoubleClick"), Ql("focusin", "onFocus"), Ql("focusout", "onBlur"), Ql(Qp, "onTransitionRun"), Ql(lt, "onTransitionStart"), Ql(se, "onTransitionCancel"), Ql(xc, "onTransitionEnd"), Sc("onMouseEnter", ["mouseout", "mouseover"]), Sc("onMouseLeave", ["mouseout", "mouseover"]), Sc("onPointerEnter", ["pointerout", "pointerover"]), Sc("onPointerLeave", ["pointerout", "pointerover"]), Di(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Di(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Di("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Di(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Di(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Di(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Eu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Wd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu)
  );
  function Fd(n, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var c = n[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (a)
          for (var y = c.length - 1; 0 <= y; y--) {
            var b = c[y], A = b.instance, N = b.currentTarget;
            if (b = b.listener, A !== s && r.isPropagationStopped())
              break e;
            s = b, r.currentTarget = N;
            try {
              s(r);
            } catch (ee) {
              Hr(ee);
            }
            r.currentTarget = null, s = A;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (b = c[y], A = b.instance, N = b.currentTarget, b = b.listener, A !== s && r.isPropagationStopped())
              break e;
            s = b, r.currentTarget = N;
            try {
              s(r);
            } catch (ee) {
              Hr(ee);
            }
            r.currentTarget = null, s = A;
          }
      }
    }
  }
  function ft(n, a) {
    var u = a[ze];
    u === void 0 && (u = a[ze] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    u.has(c) || (Pd(a, n, 2, !1), u.add(c));
  }
  function $r(n, a, u) {
    var c = 0;
    a && (c |= 4), Pd(
      u,
      n,
      c,
      a
    );
  }
  var ea = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[ea]) {
      n[ea] = !0, Gh.forEach(function(u) {
        u !== "selectionchange" && (Wd.has(u) || $r(u, !1, n), $r(u, !0, n));
      });
      var a = n.nodeType === 9 ? n : n.ownerDocument;
      a === null || a[ea] || (a[ea] = !0, $r("selectionchange", !1, a));
    }
  }
  function Pd(n, a, u, c) {
    switch (Ag(a)) {
      case 2:
        var r = Tg;
        break;
      case 8:
        r = Rg;
        break;
      default:
        r = ih;
    }
    u = r.bind(
      null,
      a,
      u,
      n
    ), r = void 0, !No || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (r = !0), c ? r !== void 0 ? n.addEventListener(a, u, {
      capture: !0,
      passive: r
    }) : n.addEventListener(a, u, !0) : r !== void 0 ? n.addEventListener(a, u, {
      passive: r
    }) : n.addEventListener(a, u, !1);
  }
  function Wr(n, a, u, c, r) {
    var s = c;
    if (!(a & 1) && !(a & 2) && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var b = c.stateNode.containerInfo;
          if (b === r || b.nodeType === 8 && b.parentNode === r)
            break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var A = y.tag;
              if ((A === 3 || A === 4) && (A = y.stateNode.containerInfo, A === r || A.nodeType === 8 && A.parentNode === r))
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (y = Qt(b), y === null) return;
            if (A = y.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = s = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        c = c.return;
      }
    wo(function() {
      var N = s, ee = Ph(u), oe = [];
      e: {
        var X = sr.get(n);
        if (X !== void 0) {
          var F = js, Me = n;
          switch (n) {
            case "keypress":
              if (If(u) === 0) break e;
            case "keydown":
            case "keyup":
              F = Xs;
              break;
            case "focusin":
              Me = "focus", F = em;
              break;
            case "focusout":
              Me = "blur", F = em;
              break;
            case "beforeblur":
            case "afterblur":
              F = em;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = Cp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Cv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Qs;
              break;
            case Xp:
            case Ws:
            case rr:
              F = Mp;
              break;
            case xc:
              F = nm;
              break;
            case "scroll":
            case "scrollend":
              F = Dv;
              break;
            case "wheel":
              F = Bp;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = Hp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = Xn;
              break;
            case "toggle":
            case "beforetoggle":
              F = Vu;
          }
          var Xe = (a & 4) !== 0, Lt = !Xe && (n === "scroll" || n === "scrollend"), Y = Xe ? X !== null ? X + "Capture" : null : X;
          Xe = [];
          for (var _ = N, j; _ !== null; ) {
            var ue = _;
            if (j = ue.stateNode, ue = ue.tag, ue !== 5 && ue !== 26 && ue !== 27 || j === null || Y === null || (ue = _o(_, Y), ue != null && Xe.push(
              nc(_, ue, j)
            )), Lt) break;
            _ = _.return;
          }
          0 < Xe.length && (X = new F(
            X,
            Me,
            null,
            u,
            ee
          ), oe.push({ event: X, listeners: Xe }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", F = n === "mouseout" || n === "pointerout", X && u !== Fh && (Me = u.relatedTarget || u.fromElement) && (Qt(Me) || Me[re]))
            break e;
          if ((F || X) && (X = ee.window === ee ? ee : (X = ee.ownerDocument) ? X.defaultView || X.parentWindow : window, F ? (Me = u.relatedTarget || u.toElement, F = N, Me = Me ? Qt(Me) : null, Me !== null && (Lt = de(Me), Xe = Me.tag, Me !== Lt || Xe !== 5 && Xe !== 27 && Xe !== 6) && (Me = null)) : (F = null, Me = N), F !== Me)) {
            if (Xe = Cp, ue = "onMouseLeave", Y = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Xe = Xn, ue = "onPointerLeave", Y = "onPointerEnter", _ = "pointer"), Lt = F == null ? X : Vn(F), j = Me == null ? X : Vn(Me), X = new Xe(
              ue,
              _ + "leave",
              F,
              u,
              ee
            ), X.target = Lt, X.relatedTarget = j, ue = null, Qt(ee) === N && (Xe = new Xe(
              Y,
              _ + "enter",
              Me,
              u,
              ee
            ), Xe.target = j, Xe.relatedTarget = Lt, ue = Xe), Lt = ue, F && Me)
              t: {
                for (Xe = F, Y = Me, _ = 0, j = Xe; j; j = fo(j))
                  _++;
                for (j = 0, ue = Y; ue; ue = fo(ue))
                  j++;
                for (; 0 < _ - j; )
                  Xe = fo(Xe), _--;
                for (; 0 < j - _; )
                  Y = fo(Y), j--;
                for (; _--; ) {
                  if (Xe === Y || Y !== null && Xe === Y.alternate)
                    break t;
                  Xe = fo(Xe), Y = fo(Y);
                }
                Xe = null;
              }
            else Xe = null;
            F !== null && yg(
              oe,
              X,
              F,
              Xe,
              !1
            ), Me !== null && Lt !== null && yg(
              oe,
              Lt,
              Me,
              Xe,
              !0
            );
          }
        }
        e: {
          if (X = N ? Vn(N) : window, F = X.nodeName && X.nodeName.toLowerCase(), F === "select" || F === "input" && X.type === "file")
            var Ue = jo;
          else if (Hi(X))
            if (Lo)
              Ue = Qn;
            else {
              Ue = Lp;
              var We = jp;
            }
          else
            F = X.nodeName, !F || F.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? N && Rc(N.elementType) && (Ue = jo) : Ue = Vp;
          if (Ue && (Ue = Ue(n, N))) {
            xi(
              oe,
              Ue,
              u,
              ee
            );
            break e;
          }
          We && We(n, X, N), n === "focusout" && N && X.type === "number" && N.memoizedProps.value != null && Jh(X, "number", X.value);
        }
        switch (We = N ? Vn(N) : window, n) {
          case "focusin":
            (Hi(We) || We.contentEditable === "true") && (Xl = We, $s = N, ya = null);
            break;
          case "focusout":
            ya = $s = Xl = null;
            break;
          case "mousedown":
            Ua = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ua = !1, fr(oe, u, ee);
            break;
          case "selectionchange":
            if (dm) break;
          case "keydown":
          case "keyup":
            fr(oe, u, ee);
        }
        var _e;
        if (zc)
          e: {
            switch (n) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          ma ? lr(n, u) && (je = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (je = "onCompositionStart");
        je && (um && u.locale !== "ko" && (ma || je !== "onCompositionStart" ? je === "onCompositionEnd" && ma && (_e = qs()) : (Lu = ee, tl = "value" in Lu ? Lu.value : Lu.textContent, ma = !0)), We = cl(N, je), 0 < We.length && (je = new Vs(
          je,
          n,
          null,
          u,
          ee
        ), oe.push({ event: je, listeners: We }), _e ? je.data = _e : (_e = Dl(u), _e !== null && (je.data = _e)))), (_e = am ? Yp(n, u) : im(n, u)) && (je = cl(N, "onBeforeInput"), 0 < je.length && (We = new Vs(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          ee
        ), oe.push({
          event: We,
          listeners: je
        }), We.data = _e)), by(
          oe,
          n,
          N,
          u,
          ee
        );
      }
      Fd(oe, a);
    });
  }
  function nc(n, a, u) {
    return {
      instance: n,
      listener: a,
      currentTarget: u
    };
  }
  function cl(n, a) {
    for (var u = a + "Capture", c = []; n !== null; ) {
      var r = n, s = r.stateNode;
      r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = _o(n, u), r != null && c.unshift(
        nc(n, r, s)
      ), r = _o(n, a), r != null && c.push(
        nc(n, r, s)
      )), n = n.return;
    }
    return c;
  }
  function fo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function yg(n, a, u, c, r) {
    for (var s = a._reactName, y = []; u !== null && u !== c; ) {
      var b = u, A = b.alternate, N = b.stateNode;
      if (b = b.tag, A !== null && A === c) break;
      b !== 5 && b !== 26 && b !== 27 || N === null || (A = N, r ? (N = _o(u, s), N != null && y.unshift(
        nc(u, N, A)
      )) : r || (N = _o(u, s), N != null && y.push(
        nc(u, N, A)
      ))), u = u.return;
    }
    y.length !== 0 && n.push({ event: a, listeners: y });
  }
  var pg = /\r\n?/g, Yv = /\u0000|\uFFFD/g;
  function K(n) {
    return (typeof n == "string" ? n : "" + n).replace(pg, `
`).replace(Yv, "");
  }
  function Ke(n, a) {
    return a = K(a), K(n) === a;
  }
  function lc() {
  }
  function Ot(n, a, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? a === "body" || a === "textarea" && c === "" || Wa(n, c) : (typeof c == "number" || typeof c == "bigint") && a !== "body" && Wa(n, "" + c);
        break;
      case "className":
        Ho(n, "class", c);
        break;
      case "tabIndex":
        Ho(n, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ho(n, u, c);
        break;
      case "style":
        Wh(n, c, s);
        break;
      case "data":
        if (a !== "object") {
          Ho(n, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (a !== "a" || u !== "href")) {
          n.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          n.removeAttribute(u);
          break;
        }
        c = Ns("" + c), n.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          n.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (a !== "input" && Ot(n, a, "name", r.name, r, null), Ot(
            n,
            a,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ot(
            n,
            a,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ot(
            n,
            a,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ot(n, a, "encType", r.encType, r, null), Ot(n, a, "method", r.method, r, null), Ot(n, a, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          n.removeAttribute(u);
          break;
        }
        c = Ns("" + c), n.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (n.onclick = lc);
        break;
      case "onScroll":
        c != null && ft("scroll", n);
        break;
      case "onScrollEnd":
        c != null && ft("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(v(60));
            n.innerHTML = u;
          }
        }
        break;
      case "multiple":
        n.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        n.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        u = Ns("" + c), n.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(u, "" + c) : n.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(u, "") : n.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? n.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? n.setAttribute(u, c) : n.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? n.setAttribute(u, c) : n.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? n.removeAttribute(u) : n.setAttribute(u, c);
        break;
      case "popover":
        ft("beforetoggle", n), ft("toggle", n), Ec(n, "popover", c);
        break;
      case "xlinkActuate":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Ll(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Ll(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Ll(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Ll(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Ec(n, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Dp.get(u) || u, Ec(n, u, c));
    }
  }
  function Id(n, a, u, c, r, s) {
    switch (u) {
      case "style":
        Wh(n, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(v(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(v(60));
            n.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Wa(n, c) : (typeof c == "number" || typeof c == "bigint") && Wa(n, "" + c);
        break;
      case "onScroll":
        c != null && ft("scroll", n);
        break;
      case "onScrollEnd":
        c != null && ft("scrollend", n);
        break;
      case "onClick":
        c != null && (n.onclick = lc);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xh.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), a = u.slice(2, r ? u.length - 7 : void 0), s = n[I] || null, s = s != null ? s[u] : null, typeof s == "function" && n.removeEventListener(a, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in n ? n[u] = null : n.hasAttribute(u) && n.removeAttribute(u)), n.addEventListener(a, c, r);
              break e;
            }
            u in n ? n[u] = c : c === !0 ? n.setAttribute(u, "") : Ec(n, u, c);
          }
    }
  }
  function Nn(n, a, u) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", n), ft("load", n);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var y = u[s];
            if (y != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, a));
                default:
                  Ot(n, a, s, y, u, null);
              }
          }
        r && Ot(n, a, "srcSet", u.srcSet, u, null), c && Ot(n, a, "src", u.src, u, null);
        return;
      case "input":
        ft("invalid", n);
        var b = s = y = r = null, A = null, N = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var ee = u[c];
            if (ee != null)
              switch (c) {
                case "name":
                  r = ee;
                  break;
                case "type":
                  y = ee;
                  break;
                case "checked":
                  A = ee;
                  break;
                case "defaultChecked":
                  N = ee;
                  break;
                case "value":
                  s = ee;
                  break;
                case "defaultValue":
                  b = ee;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ee != null)
                    throw Error(v(137, a));
                  break;
                default:
                  Ot(n, a, c, ee, u, null);
              }
          }
        Kh(
          n,
          s,
          b,
          A,
          N,
          y,
          r,
          !1
        ), xs(n);
        return;
      case "select":
        ft("invalid", n), c = y = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (b = u[r], b != null))
            switch (r) {
              case "value":
                s = b;
                break;
              case "defaultValue":
                y = b;
                break;
              case "multiple":
                c = b;
              default:
                Ot(n, a, r, b, u, null);
            }
        a = s, u = y, n.multiple = !!c, a != null ? Tc(n, !!c, a, !1) : u != null && Tc(n, !!c, u, !0);
        return;
      case "textarea":
        ft("invalid", n), s = r = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (b = u[y], b != null))
            switch (y) {
              case "value":
                c = b;
                break;
              case "defaultValue":
                r = b;
                break;
              case "children":
                s = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(v(91));
                break;
              default:
                Ot(n, a, y, b, u, null);
            }
        Pf(n, c, r, s), xs(n);
        return;
      case "option":
        for (A in u)
          if (u.hasOwnProperty(A) && (c = u[A], c != null))
            switch (A) {
              case "selected":
                n.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ot(n, a, A, c, u, null);
            }
        return;
      case "dialog":
        ft("cancel", n), ft("close", n);
        break;
      case "iframe":
      case "object":
        ft("load", n);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Eu.length; c++)
          ft(Eu[c], n);
        break;
      case "image":
        ft("error", n), ft("load", n);
        break;
      case "details":
        ft("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", n), ft("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in u)
          if (u.hasOwnProperty(N) && (c = u[N], c != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, a));
              default:
                Ot(n, a, N, c, u, null);
            }
        return;
      default:
        if (Rc(a)) {
          for (ee in u)
            u.hasOwnProperty(ee) && (c = u[ee], c !== void 0 && Id(
              n,
              a,
              ee,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (b in u)
      u.hasOwnProperty(b) && (c = u[b], c != null && Ot(n, a, b, c, u, null));
  }
  function gg(n, a, u, c) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, y = null, b = null, A = null, N = null, ee = null;
        for (F in u) {
          var oe = u[F];
          if (u.hasOwnProperty(F) && oe != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = oe;
              default:
                c.hasOwnProperty(F) || Ot(n, a, F, null, c, oe);
            }
        }
        for (var X in c) {
          var F = c[X];
          if (oe = u[X], c.hasOwnProperty(X) && (F != null || oe != null))
            switch (X) {
              case "type":
                s = F;
                break;
              case "name":
                r = F;
                break;
              case "checked":
                N = F;
                break;
              case "defaultChecked":
                ee = F;
                break;
              case "value":
                y = F;
                break;
              case "defaultValue":
                b = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(v(137, a));
                break;
              default:
                F !== oe && Ot(
                  n,
                  a,
                  X,
                  F,
                  c,
                  oe
                );
            }
        }
        ws(
          n,
          y,
          b,
          A,
          N,
          ee,
          s,
          r
        );
        return;
      case "select":
        F = y = b = X = null;
        for (s in u)
          if (A = u[s], u.hasOwnProperty(s) && A != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                F = A;
              default:
                c.hasOwnProperty(s) || Ot(
                  n,
                  a,
                  s,
                  null,
                  c,
                  A
                );
            }
        for (r in c)
          if (s = c[r], A = u[r], c.hasOwnProperty(r) && (s != null || A != null))
            switch (r) {
              case "value":
                X = s;
                break;
              case "defaultValue":
                b = s;
                break;
              case "multiple":
                y = s;
              default:
                s !== A && Ot(
                  n,
                  a,
                  r,
                  s,
                  c,
                  A
                );
            }
        a = b, u = y, c = F, X != null ? Tc(n, !!u, X, !1) : !!c != !!u && (a != null ? Tc(n, !!u, a, !0) : Tc(n, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        F = X = null;
        for (b in u)
          if (r = u[b], u.hasOwnProperty(b) && r != null && !c.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(n, a, b, null, c, r);
            }
        for (y in c)
          if (r = c[y], s = u[y], c.hasOwnProperty(y) && (r != null || s != null))
            switch (y) {
              case "value":
                X = r;
                break;
              case "defaultValue":
                F = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(v(91));
                break;
              default:
                r !== s && Ot(n, a, y, r, c, s);
            }
        _s(n, X, F);
        return;
      case "option":
        for (var Me in u)
          if (X = u[Me], u.hasOwnProperty(Me) && X != null && !c.hasOwnProperty(Me))
            switch (Me) {
              case "selected":
                n.selected = !1;
                break;
              default:
                Ot(
                  n,
                  a,
                  Me,
                  null,
                  c,
                  X
                );
            }
        for (A in c)
          if (X = c[A], F = u[A], c.hasOwnProperty(A) && X !== F && (X != null || F != null))
            switch (A) {
              case "selected":
                n.selected = X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                Ot(
                  n,
                  a,
                  A,
                  X,
                  c,
                  F
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Xe in u)
          X = u[Xe], u.hasOwnProperty(Xe) && X != null && !c.hasOwnProperty(Xe) && Ot(n, a, Xe, null, c, X);
        for (N in c)
          if (X = c[N], F = u[N], c.hasOwnProperty(N) && X !== F && (X != null || F != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null)
                  throw Error(v(137, a));
                break;
              default:
                Ot(
                  n,
                  a,
                  N,
                  X,
                  c,
                  F
                );
            }
        return;
      default:
        if (Rc(a)) {
          for (var Lt in u)
            X = u[Lt], u.hasOwnProperty(Lt) && X !== void 0 && !c.hasOwnProperty(Lt) && Id(
              n,
              a,
              Lt,
              void 0,
              c,
              X
            );
          for (ee in c)
            X = c[ee], F = u[ee], !c.hasOwnProperty(ee) || X === F || X === void 0 && F === void 0 || Id(
              n,
              a,
              ee,
              X,
              c,
              F
            );
          return;
        }
    }
    for (var Y in u)
      X = u[Y], u.hasOwnProperty(Y) && X != null && !c.hasOwnProperty(Y) && Ot(n, a, Y, null, c, X);
    for (oe in c)
      X = c[oe], F = u[oe], !c.hasOwnProperty(oe) || X === F || X == null && F == null || Ot(n, a, oe, X, c, F);
  }
  var eh = null, th = null;
  function Fr(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function nh(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ty(n, a) {
    if (n === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && a === "foreignObject" ? 0 : n;
  }
  function Pr(n, a) {
    return n === "textarea" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Ir = null;
  function ol() {
    var n = window.event;
    return n && n.type === "popstate" ? n === Ir ? !1 : (Ir = n, !0) : (Ir = null, !1);
  }
  var ta = typeof setTimeout == "function" ? setTimeout : void 0, Kn = typeof clearTimeout == "function" ? clearTimeout : void 0, _t = typeof Promise == "function" ? Promise : void 0, qv = typeof queueMicrotask == "function" ? queueMicrotask : typeof _t < "u" ? function(n) {
    return _t.resolve(null).then(n).catch(Ry);
  } : ta;
  function Ry(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function es(n, a) {
    var u = a, c = 0;
    do {
      var r = u.nextSibling;
      if (n.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (c === 0) {
            n.removeChild(r), xf(a);
            return;
          }
          c--;
        } else u !== "$" && u !== "$?" && u !== "$!" || c++;
      u = r;
    } while (u);
    xf(a);
  }
  function Va(n) {
    var a = n.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var u = a;
      switch (a = a.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Va(u), Ut(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(u);
    }
  }
  function ac(n, a, u, c) {
    for (; n.nodeType === 1; ) {
      var r = u;
      if (n.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!c && (n.nodeName !== "INPUT" || n.type !== "hidden"))
          break;
      } else if (c) {
        if (!n[Ie])
          switch (a) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (s = n.getAttribute("rel"), s === "stylesheet" && n.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || n.getAttribute("href") !== (r.href == null ? null : r.href) || n.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || n.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (s = n.getAttribute("src"), (s !== (r.src == null ? null : r.src) || n.getAttribute("type") !== (r.type == null ? null : r.type) || n.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && n.hasAttribute("async") && !n.hasAttribute("itemprop"))
                break;
              return n;
            default:
              return n;
          }
      } else if (a === "input" && n.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && n.getAttribute("name") === s)
          return n;
      } else return n;
      if (n = Bn(n.nextSibling), n === null) break;
    }
    return null;
  }
  function ts(n, a, u) {
    if (a === "") return null;
    for (; n.nodeType !== 3; )
      if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !u || (n = Bn(n.nextSibling), n === null)) return null;
    return n;
  }
  function Bn(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = n.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return n;
  }
  function ns(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0) return n;
          a--;
        } else u === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function Tu(n, a, u) {
    switch (a = Fr(u), n) {
      case "html":
        if (n = a.documentElement, !n) throw Error(v(452));
        return n;
      case "head":
        if (n = a.head, !n) throw Error(v(453));
        return n;
      case "body":
        if (n = a.body, !n) throw Error(v(454));
        return n;
      default:
        throw Error(v(451));
    }
  }
  var Hl = /* @__PURE__ */ new Map(), vg = /* @__PURE__ */ new Set();
  function lh(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.ownerDocument;
  }
  var mi = ye.d;
  ye.d = {
    f: Ru,
    r: jv,
    D: Df,
    C: Lv,
    L: Ay,
    m: Vv,
    X: zf,
    S: Gv,
    M: fl
  };
  function Ru() {
    var n = mi.f(), a = uo();
    return n || a;
  }
  function jv(n) {
    var a = hl(n);
    a !== null && a.tag === 5 && a.type === "form" ? xm(a) : mi.r(n);
  }
  var uc = typeof document > "u" ? null : document;
  function ah(n, a, u) {
    var c = uc;
    if (c && typeof a == "string" && a) {
      var r = Vl(a);
      r = 'link[rel="' + n + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), vg.has(r) || (vg.add(r), n = { rel: n, crossOrigin: u, href: a }, c.querySelector(r) === null && (a = c.createElement("link"), Nn(a, "link", n), Tt(a), c.head.appendChild(a)));
    }
  }
  function Df(n) {
    mi.D(n), ah("dns-prefetch", n, null);
  }
  function Lv(n, a) {
    mi.C(n, a), ah("preconnect", n, a);
  }
  function Ay(n, a, u) {
    mi.L(n, a, u);
    var c = uc;
    if (c && n && a) {
      var r = 'link[rel="preload"][as="' + Vl(a) + '"]';
      a === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Vl(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Vl(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Vl(n) + '"]';
      var s = r;
      switch (a) {
        case "style":
          s = gl(n);
          break;
        case "script":
          s = Cf(n);
      }
      Hl.has(s) || (n = Le(
        {
          rel: "preload",
          href: a === "image" && u && u.imageSrcSet ? void 0 : n,
          as: a
        },
        u
      ), Hl.set(s, n), c.querySelector(r) !== null || a === "style" && c.querySelector(vl(s)) || a === "script" && c.querySelector(ic(s)) || (a = c.createElement("link"), Nn(a, "link", n), Tt(a), c.head.appendChild(a)));
    }
  }
  function Vv(n, a) {
    mi.m(n, a);
    var u = uc;
    if (u && n) {
      var c = a && typeof a.as == "string" ? a.as : "script", r = 'link[rel="modulepreload"][as="' + Vl(c) + '"][href="' + Vl(n) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Cf(n);
      }
      if (!Hl.has(s) && (n = Le({ rel: "modulepreload", href: n }, a), Hl.set(s, n), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ic(s)))
              return;
        }
        c = u.createElement("link"), Nn(c, "link", n), Tt(c), u.head.appendChild(c);
      }
    }
  }
  function Gv(n, a, u) {
    mi.S(n, a, u);
    var c = uc;
    if (c && n) {
      var r = el(c).hoistableStyles, s = gl(n);
      a = a || "default";
      var y = r.get(s);
      if (!y) {
        var b = { loading: 0, preload: null };
        if (y = c.querySelector(
          vl(s)
        ))
          b.loading = 5;
        else {
          n = Le(
            { rel: "stylesheet", href: n, "data-precedence": a },
            u
          ), (u = Hl.get(s)) && Ea(n, u);
          var A = y = c.createElement("link");
          Tt(A), Nn(A, "link", n), A._p = new Promise(function(N, ee) {
            A.onload = N, A.onerror = ee;
          }), A.addEventListener("load", function() {
            b.loading |= 1;
          }), A.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, na(y, a, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: b
        }, r.set(s, y);
      }
    }
  }
  function zf(n, a) {
    mi.X(n, a);
    var u = uc;
    if (u && n) {
      var c = el(u).hoistableScripts, r = Cf(n), s = c.get(r);
      s || (s = u.querySelector(ic(r)), s || (n = Le({ src: n, async: !0 }, a), (a = Hl.get(r)) && Ga(n, a), s = u.createElement("script"), Tt(s), Nn(s, "link", n), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function fl(n, a) {
    mi.M(n, a);
    var u = uc;
    if (u && n) {
      var c = el(u).hoistableScripts, r = Cf(n), s = c.get(r);
      s || (s = u.querySelector(ic(r)), s || (n = Le({ src: n, async: !0, type: "module" }, a), (a = Hl.get(r)) && Ga(n, a), s = u.createElement("script"), Tt(s), Nn(s, "link", n), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Re(n, a, u, c) {
    var r = (r = Mn.current) ? lh(r) : null;
    if (!r) throw Error(v(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (a = gl(u.href), u = el(
          r
        ).hoistableStyles, c = u.get(a), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          n = gl(u.href);
          var s = el(
            r
          ).hoistableStyles, y = s.get(n);
          if (y || (r = r.ownerDocument || r, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(n, y), (s = r.querySelector(
            vl(n)
          )) && !s._p && (y.instance = s, y.state.loading = 5), Hl.has(n) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Hl.set(n, u), s || Xv(
            r,
            n,
            u,
            y.state
          ))), a && c === null)
            throw Error(v(528, ""));
          return y;
        }
        if (a && c !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return a = u.async, u = u.src, typeof u == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = Cf(u), u = el(
          r
        ).hoistableScripts, c = u.get(a), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, n));
    }
  }
  function gl(n) {
    return 'href="' + Vl(n) + '"';
  }
  function vl(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function rl(n) {
    return Le({}, n, {
      "data-precedence": n.precedence,
      precedence: null
    });
  }
  function Xv(n, a, u, c) {
    n.querySelector('link[rel="preload"][as="style"][' + a + "]") ? c.loading = 1 : (a = n.createElement("link"), c.preload = a, a.addEventListener("load", function() {
      return c.loading |= 1;
    }), a.addEventListener("error", function() {
      return c.loading |= 2;
    }), Nn(a, "link", u), Tt(a), n.head.appendChild(a));
  }
  function Cf(n) {
    return '[src="' + Vl(n) + '"]';
  }
  function ic(n) {
    return "script[async]" + n;
  }
  function ls(n, a, u) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var c = n.querySelector(
            'style[data-href~="' + Vl(u.href) + '"]'
          );
          if (c)
            return a.instance = c, Tt(c), c;
          var r = Le({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (n.ownerDocument || n).createElement(
            "style"
          ), Tt(c), Nn(c, "style", r), na(c, u.precedence, n), a.instance = c;
        case "stylesheet":
          r = gl(u.href);
          var s = n.querySelector(
            vl(r)
          );
          if (s)
            return a.state.loading |= 4, a.instance = s, Tt(s), s;
          c = rl(u), (r = Hl.get(r)) && Ea(c, r), s = (n.ownerDocument || n).createElement("link"), Tt(s);
          var y = s;
          return y._p = new Promise(function(b, A) {
            y.onload = b, y.onerror = A;
          }), Nn(s, "link", c), a.state.loading |= 4, na(s, u.precedence, n), a.instance = s;
        case "script":
          return s = Cf(u.src), (r = n.querySelector(
            ic(s)
          )) ? (a.instance = r, Tt(r), r) : (c = u, (r = Hl.get(s)) && (c = Le({}, u), Ga(c, r)), n = n.ownerDocument || n, r = n.createElement("script"), Tt(r), Nn(r, "link", c), n.head.appendChild(r), a.instance = r);
        case "void":
          return null;
        default:
          throw Error(v(443, a.type));
      }
    else
      a.type === "stylesheet" && !(a.state.loading & 4) && (c = a.instance, a.state.loading |= 4, na(c, u.precedence, n));
    return a.instance;
  }
  function na(n, a, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, y = 0; y < c.length; y++) {
      var b = c[y];
      if (b.dataset.precedence === a) s = b;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(n, s.nextSibling) : (a = u.nodeType === 9 ? u.head : u, a.insertBefore(n, a.firstChild));
  }
  function Ea(n, a) {
    n.crossOrigin == null && (n.crossOrigin = a.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = a.referrerPolicy), n.title == null && (n.title = a.title);
  }
  function Ga(n, a) {
    n.crossOrigin == null && (n.crossOrigin = a.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = a.referrerPolicy), n.integrity == null && (n.integrity = a.integrity);
  }
  var ro = null;
  function yi(n, a, u) {
    if (ro === null) {
      var c = /* @__PURE__ */ new Map(), r = ro = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = ro, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(n)) return c;
    for (c.set(n, null), u = u.getElementsByTagName(n), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[Ie] || s[x] || n === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = s.getAttribute(a) || "";
        y = n + y;
        var b = c.get(y);
        b ? b.push(s) : c.set(y, [s]);
      }
    }
    return c;
  }
  function Jn(n, a, u) {
    n = n.ownerDocument || n, n.head.insertBefore(
      u,
      a === "title" ? n.querySelector("head > title") : null
    );
  }
  function xl(n, a, u) {
    if (u === 1 || a.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return n = a.disabled, typeof a.precedence == "string" && n == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function cc(n) {
    return !(n.type === "stylesheet" && !(n.state.loading & 3));
  }
  var so = null;
  function Qv() {
  }
  function Zv(n, a, u) {
    if (so === null) throw Error(v(475));
    var c = so;
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && !(a.state.loading & 4)) {
      if (a.instance === null) {
        var r = gl(u.href), s = n.querySelector(
          vl(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (c.count++, c = oc.bind(c), n.then(c, c)), a.state.loading |= 4, a.instance = s, Tt(s);
          return;
        }
        s = n.ownerDocument || n, u = rl(u), (r = Hl.get(r)) && Ea(u, r), s = s.createElement("link"), Tt(s);
        var y = s;
        y._p = new Promise(function(b, A) {
          y.onload = b, y.onerror = A;
        }), Nn(s, "link", u), a.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(a, n), (n = a.state.preload) && !(a.state.loading & 3) && (c.count++, a = oc.bind(c), n.addEventListener("load", a), n.addEventListener("error", a));
    }
  }
  function bg() {
    if (so === null) throw Error(v(475));
    var n = so;
    return n.stylesheets && n.count === 0 && pi(n, n.stylesheets), 0 < n.count ? function(a) {
      var u = setTimeout(function() {
        if (n.stylesheets && pi(n, n.stylesheets), n.unsuspend) {
          var c = n.unsuspend;
          n.unsuspend = null, c();
        }
      }, 6e4);
      return n.unsuspend = a, function() {
        n.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function oc() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) pi(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var as = null;
  function pi(n, a) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, as = /* @__PURE__ */ new Map(), a.forEach(Oy, n), as = null, oc.call(n));
  }
  function Oy(n, a) {
    if (!(a.state.loading & 4)) {
      var u = as.get(n);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), as.set(n, u);
        for (var r = n.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var y = r[s];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      r = a.instance, y = r.getAttribute("data-precedence"), s = u.get(y) || c, s === c && u.set(null, r), u.set(y, r), this.count++, c = oc.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(r, n.firstChild)), a.state.loading |= 4;
    }
  }
  var wl = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: Ve,
    _currentValue2: Ve,
    _threadCount: 0
  };
  function kv(n, a, u, c, r, s, y, b) {
    this.tag = 1, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = da(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = da(0), this.hiddenUpdates = da(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sg(n, a, u, c, r, s, y, b, A, N, ee, oe) {
    return n = new kv(
      n,
      a,
      u,
      y,
      b,
      A,
      N,
      oe
    ), a = 1, s === !0 && (a |= 24), s = An(3, null, null, a), n.current = s, s.stateNode = n, a = Em(), a.refCount++, n.pooledCache = a, a.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: a
    }, Br(s), n;
  }
  function Dy(n) {
    return n ? (n = Ia, n) : Ia;
  }
  function zy(n, a, u, c, r, s) {
    r = Dy(r), c.context === null ? c.context = r : c.pendingContext = r, c = ii(a), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = ci(n, c, a), u !== null && (On(u, n, a), sf(u, n, a));
  }
  function Eg(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function uh(n, a) {
    Eg(n, a), (n = n.alternate) && Eg(n, a);
  }
  function Cy(n) {
    if (n.tag === 13) {
      var a = Pa(n, 67108864);
      a !== null && On(a, n, 67108864), uh(n, 67108864);
    }
  }
  var us = !0;
  function Tg(n, a, u, c) {
    var r = ve.T;
    ve.T = null;
    var s = ye.p;
    try {
      ye.p = 2, ih(n, a, u, c);
    } finally {
      ye.p = s, ve.T = r;
    }
  }
  function Rg(n, a, u, c) {
    var r = ve.T;
    ve.T = null;
    var s = ye.p;
    try {
      ye.p = 8, ih(n, a, u, c);
    } finally {
      ye.p = s, ve.T = r;
    }
  }
  function ih(n, a, u, c) {
    if (us) {
      var r = ch(c);
      if (r === null)
        Wr(
          n,
          a,
          c,
          is,
          u
        ), Uy(n, c);
      else if (Kv(
        r,
        n,
        a,
        u,
        c
      ))
        c.stopPropagation();
      else if (Uy(n, c), a & 4 && -1 < My.indexOf(n)) {
        for (; r !== null; ) {
          var s = hl(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var y = Da(s.pendingLanes);
                  if (y !== 0) {
                    var b = s;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var A = 1 << 31 - Ln(y);
                      b.entanglements[1] |= A, y &= ~A;
                    }
                    Il(s), !(Kt & 6) && (Qr = Ye() + 500, Tf(0));
                  }
                }
                break;
              case 13:
                b = Pa(s, 2), b !== null && On(b, s, 2), uo(), uh(s, 2);
            }
          if (s = ch(c), s === null && Wr(
            n,
            a,
            c,
            is,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        Wr(
          n,
          a,
          c,
          null,
          u
        );
    }
  }
  function ch(n) {
    return n = Ph(n), oh(n);
  }
  var is = null;
  function oh(n) {
    if (is = null, n = Qt(n), n !== null) {
      var a = de(n);
      if (a === null) n = null;
      else {
        var u = a.tag;
        if (u === 13) {
          if (n = Se(a), n !== null) return n;
          n = null;
        } else if (u === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          n = null;
        } else a !== n && (n = null);
      }
    }
    return is = n, null;
  }
  function Ag(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ft()) {
          case vt:
            return 2;
          case Ge:
            return 8;
          case Ne:
          case jn:
            return 32;
          case mn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fh = !1, fc = null, rc = null, gi = null, sc = /* @__PURE__ */ new Map(), dc = /* @__PURE__ */ new Map(), la = [], My = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Uy(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        fc = null;
        break;
      case "dragenter":
      case "dragleave":
        rc = null;
        break;
      case "mouseover":
      case "mouseout":
        gi = null;
        break;
      case "pointerover":
      case "pointerout":
        sc.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dc.delete(a.pointerId);
    }
  }
  function Mf(n, a, u, c, r, s) {
    return n === null || n.nativeEvent !== s ? (n = {
      blockedOn: a,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, a !== null && (a = hl(a), a !== null && Cy(a)), n) : (n.eventSystemFlags |= c, a = n.targetContainers, r !== null && a.indexOf(r) === -1 && a.push(r), n);
  }
  function Kv(n, a, u, c, r) {
    switch (a) {
      case "focusin":
        return fc = Mf(
          fc,
          n,
          a,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return rc = Mf(
          rc,
          n,
          a,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return gi = Mf(
          gi,
          n,
          a,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return sc.set(
          s,
          Mf(
            sc.get(s) || null,
            n,
            a,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, dc.set(
          s,
          Mf(
            dc.get(s) || null,
            n,
            a,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Og(n) {
    var a = Qt(n.target);
    if (a !== null) {
      var u = de(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = Se(u), a !== null) {
            n.blockedOn = a, ha(n.priority, function() {
              if (u.tag === 13) {
                var c = il(), r = Pa(u, c);
                r !== null && On(r, u, c), uh(u, c);
              }
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function rh(n) {
    if (n.blockedOn !== null) return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var u = ch(n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Fh = c, u.target.dispatchEvent(c), Fh = null;
      } else
        return a = hl(u), a !== null && Cy(a), n.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function Hy(n, a, u) {
    rh(n) && u.delete(a);
  }
  function Uf() {
    fh = !1, fc !== null && rh(fc) && (fc = null), rc !== null && rh(rc) && (rc = null), gi !== null && rh(gi) && (gi = null), sc.forEach(Hy), dc.forEach(Hy);
  }
  function Hf(n, a) {
    n.blockedOn === a && (n.blockedOn = null, fh || (fh = !0, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      Uf
    )));
  }
  var cs = null;
  function xy(n) {
    cs !== n && (cs = n, h.unstable_scheduleCallback(
      h.unstable_NormalPriority,
      function() {
        cs === n && (cs = null);
        for (var a = 0; a < n.length; a += 3) {
          var u = n[a], c = n[a + 1], r = n[a + 2];
          if (typeof c != "function") {
            if (oh(c || u) === null)
              continue;
            break;
          }
          var s = hl(u);
          s !== null && (n.splice(a, 3), a -= 3, ti(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function xf(n) {
    function a(A) {
      return Hf(A, n);
    }
    fc !== null && Hf(fc, n), rc !== null && Hf(rc, n), gi !== null && Hf(gi, n), sc.forEach(a), dc.forEach(a);
    for (var u = 0; u < la.length; u++) {
      var c = la[u];
      c.blockedOn === n && (c.blockedOn = null);
    }
    for (; 0 < la.length && (u = la[0], u.blockedOn === null); )
      Og(u), u.blockedOn === null && la.shift();
    if (u = (n.ownerDocument || n).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], y = r[I] || null;
        if (typeof s == "function")
          y || xy(u);
        else if (y) {
          var b = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, y = s[I] || null)
              b = y.formAction;
            else if (oh(r) !== null) continue;
          } else b = y.action;
          typeof b == "function" ? u[c + 1] = b : (u.splice(c, 3), c -= 3), xy(u);
        }
      }
  }
  function wy(n) {
    this._internalRoot = n;
  }
  ho.prototype.render = wy.prototype.render = function(n) {
    var a = this._internalRoot;
    if (a === null) throw Error(v(409));
    var u = a.current, c = il();
    zy(u, c, n, a, null, null);
  }, ho.prototype.unmount = wy.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var a = n.containerInfo;
      n.tag === 0 && io(), zy(n.current, 2, null, n, null, null), uo(), a[re] = null;
    }
  };
  function ho(n) {
    this._internalRoot = n;
  }
  ho.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var a = ju();
      n = { blockedOn: null, target: n, priority: a };
      for (var u = 0; u < la.length && a !== 0 && a < la[u].priority; u++) ;
      la.splice(u, 0, n), u === 0 && Og(n);
    }
  };
  var _y = S.version;
  if (_y !== "19.0.0")
    throw Error(
      v(
        527,
        _y,
        "19.0.0"
      )
    );
  ye.findDOMNode = function(n) {
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(v(188)) : (n = Object.keys(n).join(","), Error(v(268, n)));
    return n = W(a), n = n !== null ? pe(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var wf = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ve,
    findFiberByHostInstance: Qt,
    reconcilerVersion: "19.0.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sh.isDisabled && sh.supportsFiber)
      try {
        bn = sh.inject(
          wf
        ), Yt = sh;
      } catch {
      }
  }
  return yp.createRoot = function(n, a) {
    if (!O(n)) throw Error(v(299));
    var u = !1, c = "", r = Pp, s = Na, y = Gm, b = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (r = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (y = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (b = a.unstable_transitionCallbacks)), a = Sg(
      n,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      s,
      y,
      b,
      null
    ), n[re] = a.current, oo(
      n.nodeType === 8 ? n.parentNode : n
    ), new wy(a);
  }, yp.hydrateRoot = function(n, a, u) {
    if (!O(n)) throw Error(v(299));
    var c = !1, r = "", s = Pp, y = Na, b = Gm, A = null, N = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (b = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (A = u.unstable_transitionCallbacks), u.formState !== void 0 && (N = u.formState)), a = Sg(
      n,
      1,
      !0,
      a,
      u ?? null,
      c,
      r,
      s,
      y,
      b,
      A,
      N
    ), a.context = Dy(null), u = a.current, c = il(), r = ii(c), r.callback = null, ci(u, r, c), a.current.lanes = c, jl(a, c), Il(a), n[re] = a.current, oo(n), new ho(a);
  }, yp.version = "19.0.0", yp;
}
var pp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function QE() {
  return u1 || (u1 = 1, process.env.NODE_ENV !== "production" && function() {
    function h(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function S(e, t, l, i) {
      if (l >= t.length) return i;
      var o = t[l], f = Kn(e) ? e.slice() : Ke({}, e);
      return f[o] = S(e[o], t, l + 1, i), f;
    }
    function T(e, t, l) {
      if (t.length !== l.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < l.length - 1; i++)
          if (t[i] !== l[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return v(e, t, l, 0);
      }
    }
    function v(e, t, l, i) {
      var o = t[i], f = Kn(e) ? e.slice() : Ke({}, e);
      return i + 1 === t.length ? (f[l[i]] = f[o], Kn(f) ? f.splice(o, 1) : delete f[o]) : f[o] = v(
        e[o],
        t,
        l,
        i + 1
      ), f;
    }
    function O(e, t, l) {
      var i = t[l], o = Kn(e) ? e.slice() : Ke({}, e);
      return l + 1 === t.length ? (Kn(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = O(e[i], t, l + 1), o);
    }
    function B() {
      return !1;
    }
    function k() {
      return null;
    }
    function Z(e, t, l, i) {
      return new Ip(e, t, l, i);
    }
    function R() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function z() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function te() {
    }
    function q() {
    }
    function D(e) {
      var t = [];
      return e.forEach(function(l) {
        t.push(l);
      }), t.sort().join(", ");
    }
    function G(e, t) {
      e.context === _f && (hg(t, e, null, null), Kl());
    }
    function $(e, t) {
      if (Ou !== null) {
        var l = t.staleFamilies;
        t = t.updatedFamilies, oi(), lm(
          e.current,
          t,
          l
        ), Kl();
      }
    }
    function me(e) {
      Ou = e;
    }
    function fe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function le(e) {
      return e === null || typeof e != "object" ? null : (e = pg && e[pg] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ce(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Yv ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Eu:
          return "Fragment";
        case Of:
          return "Portal";
        case Fd:
          return "Profiler";
        case Wd:
          return "StrictMode";
        case Pd:
          return "Suspense";
        case Wr:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case ea:
            return (e.displayName || "Context") + ".Provider";
          case $r:
            return (e._context.displayName || "Context") + ".Consumer";
          case oo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case nc:
            return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
          case cl:
            t = e._payload, e = e._init;
            try {
              return ce(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ee(e) {
      return typeof e.tag == "number" ? ge(e) : typeof e.name == "string" ? e.name : null;
    }
    function ge(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ce(t);
        case 8:
          return t === Wd ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var l = t.length - 1; 0 <= l; l--)
              if (typeof t[l].name == "string") return t[l].name;
          }
          if (e.return !== null)
            return ge(e.return);
      }
      return null;
    }
    function Be() {
    }
    function yt() {
      if (lc === 0) {
        Ot = console.log, Id = console.info, Nn = console.warn, gg = console.error, eh = console.group, th = console.groupCollapsed, Fr = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Be,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      lc++;
    }
    function Bt() {
      if (lc--, lc === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ke({}, e, { value: Ot }),
          info: Ke({}, e, { value: Id }),
          warn: Ke({}, e, { value: Nn }),
          error: Ke({}, e, { value: gg }),
          group: Ke({}, e, { value: eh }),
          groupCollapsed: Ke({}, e, { value: th }),
          groupEnd: Ke({}, e, { value: Fr })
        });
      }
      0 > lc && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function St(e) {
      if (nh === void 0)
        try {
          throw Error();
        } catch (l) {
          var t = l.stack.trim().match(/\n( *(at )?)/);
          nh = t && t[1] || "", Ty = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + nh + e + Ty;
    }
    function ve(e, t) {
      if (!e || Pr) return "";
      var l = Ir.get(e);
      if (l !== void 0) return l;
      Pr = !0, l = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = K.H, K.H = null, yt();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var V = function() {
                  throw Error();
                };
                if (Object.defineProperty(V.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(V, []);
                  } catch (xe) {
                    var ae = xe;
                  }
                  Reflect.construct(e, [], V);
                } else {
                  try {
                    V.call();
                  } catch (xe) {
                    ae = xe;
                  }
                  e.call(V.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (xe) {
                  ae = xe;
                }
                (V = e()) && typeof V.catch == "function" && V.catch(function() {
                });
              }
            } catch (xe) {
              if (xe && ae && typeof xe.stack == "string")
                return [xe.stack, ae.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), m = d[0], g = d[1];
        if (m && g) {
          var E = m.split(`
`), L = g.split(`
`);
          for (d = f = 0; f < E.length && !E[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < L.length && !L[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === E.length || d === L.length)
            for (f = E.length - 1, d = L.length - 1; 1 <= f && 0 <= d && E[f] !== L[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (E[f] !== L[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || E[f] !== L[d]) {
                    var ne = `
` + E[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", e.displayName)), typeof e == "function" && Ir.set(e, ne), ne;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Pr = !1, K.H = i, Bt(), Error.prepareStackTrace = l;
      }
      return E = (E = e ? e.displayName || e.name : "") ? St(E) : "", typeof e == "function" && Ir.set(e, E), E;
    }
    function Le(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return St(e.type);
        case 16:
          return St("Lazy");
        case 13:
          return St("Suspense");
        case 19:
          return St("SuspenseList");
        case 0:
        case 15:
          return e = ve(e.type, !1), e;
        case 11:
          return e = ve(e.type.render, !1), e;
        case 1:
          return e = ve(e.type, !0), e;
        default:
          return "";
      }
    }
    function xt(e) {
      try {
        var t = "";
        do {
          t += Le(e);
          var l = e._debugInfo;
          if (l)
            for (var i = l.length - 1; 0 <= i; i--) {
              var o = l[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, m = St(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + m;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (g) {
        return `
Error generating stack: ` + g.message + `
` + g.stack;
      }
    }
    function fn() {
      if (ol === null) return null;
      var e = ol._debugOwner;
      return e != null ? Ee(e) : null;
    }
    function Xt() {
      return ol === null ? "" : xt(ol);
    }
    function Ae(e, t, l, i, o, f, d) {
      var m = ol;
      K.getCurrentStack = e === null ? null : Xt, ta = !1, ol = e;
      try {
        return t(l, i, o, f, d);
      } finally {
        ol = m;
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Mt(e) {
      var t = e, l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (l = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function Q(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function he(e) {
      if (Mt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function de(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Mt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var l = e, i = t; ; ) {
        var o = l.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            l = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === l) return he(o), e;
            if (f === i) return he(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== i.return) l = o, i = f;
        else {
          for (var d = !1, m = o.child; m; ) {
            if (m === l) {
              d = !0, l = o, i = f;
              break;
            }
            if (m === i) {
              d = !0, i = o, l = f;
              break;
            }
            m = m.sibling;
          }
          if (!d) {
            for (m = f.child; m; ) {
              if (m === l) {
                d = !0, l = f, i = o;
                break;
              }
              if (m === i) {
                d = !0, i = f, l = o;
                break;
              }
              m = m.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (l.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (l.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function Se(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Se(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function C(e) {
      return { current: e };
    }
    function W(e, t) {
      0 > Va ? console.error("Unexpected pop.") : (t !== es[Va] && console.error("Unexpected Fiber popped."), e.current = Ry[Va], Ry[Va] = null, es[Va] = null, Va--);
    }
    function pe(e, t, l) {
      Va++, Ry[Va] = e.current, es[Va] = l, e.current = t;
    }
    function De(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function ye(e, t) {
      pe(Bn, t, e), pe(ts, e, e), pe(ac, null, e);
      var l = t.nodeType;
      switch (l) {
        case 9:
        case 11:
          l = l === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? rg(t) : Ro;
          break;
        default:
          if (t = l === 8 ? t.parentNode : t, l = t.tagName, t = t.namespaceURI)
            t = rg(t), t = Kt(
              t,
              l
            );
          else
            switch (l) {
              case "svg":
                t = Yh;
                break;
              case "math":
                t = tv;
                break;
              default:
                t = Ro;
            }
      }
      l = l.toLowerCase(), l = ws(null, l), l = {
        context: t,
        ancestorInfo: l
      }, W(ac, e), pe(ac, l, e);
    }
    function Ve(e) {
      W(ac, e), W(ts, e), W(Bn, e);
    }
    function qe() {
      return De(ac.current);
    }
    function Wt(e) {
      e.memoizedState !== null && pe(ns, e, e);
      var t = De(ac.current), l = e.type, i = Kt(t.context, l);
      l = ws(t.ancestorInfo, l), i = { context: i, ancestorInfo: l }, t !== i && (pe(ts, e, e), pe(ac, i, e));
    }
    function $e(e) {
      ts.current === e && (W(ac, e), W(ts, e)), ns.current === e && (W(ns, e), dp._currentValue = Cs);
    }
    function Et(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function rt(e) {
      try {
        return nn(e), !1;
      } catch {
        return !0;
      }
    }
    function nn(e) {
      return "" + e;
    }
    function nt(e, t) {
      if (rt(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Et(e)
        ), nn(e);
    }
    function Mn(e, t) {
      if (rt(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Et(e)
        ), nn(e);
    }
    function Pn(e) {
      if (rt(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Et(e)
        ), nn(e);
    }
    function ra(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        zf = t.inject(e), fl = t;
      } catch (l) {
        console.error("React instrumentation encountered an error: %s.", l);
      }
      return !!t.checkDCE;
    }
    function Tl(e, t) {
      if (fl && typeof fl.onCommitFiberRoot == "function")
        try {
          var l = (e.current.flags & 128) === 128;
          switch (t) {
            case na:
              var i = uc;
              break;
            case Ea:
              i = ah;
              break;
            case Ga:
              i = Df;
              break;
            case ro:
              i = Ay;
              break;
            default:
              i = Df;
          }
          fl.onCommitFiberRoot(
            zf,
            e,
            i,
            l
          );
        } catch (o) {
          gl || (gl = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
    }
    function ot(e) {
      if (typeof Vv == "function" && Gv(e), fl && typeof fl.setStrictMode == "function")
        try {
          fl.setStrictMode(zf, e);
        } catch (t) {
          gl || (gl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Nu(e) {
      Re = e;
    }
    function Ka() {
      Re !== null && typeof Re.markCommitStopped == "function" && Re.markCommitStopped();
    }
    function Yl(e) {
      Re !== null && typeof Re.markComponentRenderStarted == "function" && Re.markComponentRenderStarted(e);
    }
    function H() {
      Re !== null && typeof Re.markComponentRenderStopped == "function" && Re.markComponentRenderStopped();
    }
    function Oe(e) {
      Re !== null && typeof Re.markRenderStarted == "function" && Re.markRenderStarted(e);
    }
    function Ce() {
      Re !== null && typeof Re.markRenderStopped == "function" && Re.markRenderStopped();
    }
    function Ye(e, t) {
      Re !== null && typeof Re.markStateUpdateScheduled == "function" && Re.markStateUpdateScheduled(e, t);
    }
    function Ft(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Xv(e) / Cf | 0) | 0;
    }
    function vt(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 64) return "TransitionHydration";
      if (e & 4194176) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ge(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Ne(e, t) {
      var l = e.pendingLanes;
      if (l === 0) return 0;
      var i = 0, o = e.suspendedLanes, f = e.pingedLanes, d = e.warmLanes;
      e = e.finishedLanes !== 0;
      var m = l & 134217727;
      return m !== 0 ? (l = m & ~o, l !== 0 ? i = Ge(l) : (f &= m, f !== 0 ? i = Ge(f) : e || (d = m & ~d, d !== 0 && (i = Ge(d))))) : (m = l & ~o, m !== 0 ? i = Ge(m) : f !== 0 ? i = Ge(f) : e || (d = l & ~d, d !== 0 && (i = Ge(d)))), i === 0 ? 0 : t !== 0 && t !== i && !(t & o) && (o = i & -i, d = t & -t, o >= d || o === 32 && (d & 4194176) !== 0) ? t : i;
    }
    function jn(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function mn(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
          return t + 250;
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function In() {
      var e = ic;
      return ic <<= 1, !(ic & 4194176) && (ic = 128), e;
    }
    function Oa() {
      var e = ls;
      return ls <<= 1, !(ls & 62914560) && (ls = 4194304), e;
    }
    function bn(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function Yt(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Rl(e, t, l, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var m = e.entanglements, g = e.expirationTimes, E = e.hiddenUpdates;
      for (l = d & ~l; 0 < l; ) {
        var L = 31 - rl(l), ne = 1 << L;
        m[L] = 0, g[L] = -1;
        var V = E[L];
        if (V !== null)
          for (E[L] = null, L = 0; L < V.length; L++) {
            var ae = V[L];
            ae !== null && (ae.lane &= -536870913);
          }
        l &= ~ne;
      }
      i !== 0 && sa(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function sa(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - rl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | l & 4194218;
    }
    function Ln(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var i = 31 - rl(l), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), l &= ~o;
      }
    }
    function $f(e, t, l) {
      if (vl)
        for (e = e.pendingUpdatersLaneMap; 0 < l; ) {
          var i = 31 - rl(l), o = 1 << i;
          e[i].add(t), l &= ~o;
        }
    }
    function Mo(e, t) {
      if (vl)
        for (var l = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - rl(t);
          e = 1 << o, o = l[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Wf(e) {
      return e &= -e, na < e ? Ea < e ? e & 134217727 ? Ga : ro : Ea : na;
    }
    function Bu() {
      var e = _t.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Ga : co(e.type));
    }
    function Ri(e, t) {
      var l = _t.p;
      try {
        return _t.p = e, t();
      } finally {
        _t.p = l;
      }
    }
    function Da(e) {
      delete e[Jn], delete e[xl], delete e[so], delete e[Qv], delete e[Zv];
    }
    function ql(e) {
      var t = e[Jn];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[cc] || l[Jn]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
            for (e = hi(e); e !== null; ) {
              if (l = e[Jn])
                return l;
              e = hi(e);
            }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function Al(e) {
      if (e = e[Jn] || e[cc]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Ai(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ja(e) {
      var t = e[bg];
      return t || (t = e[bg] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ln(e) {
      e[oc] = !0;
    }
    function da(e, t) {
      jl(e, t), jl(e + "Capture", t);
    }
    function jl(e, t) {
      pi[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), pi[e] = t;
      var l = e.toLowerCase();
      for (Oy[l] = e, e === "onDoubleClick" && (Oy.ondblclick = e), e = 0; e < t.length; e++)
        as.add(t[e]);
    }
    function Yu(e, t) {
      kv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function qu(e) {
      return Tu.call(zy, e) ? !0 : Tu.call(Dy, e) ? !1 : Sg.test(e) ? zy[e] = !0 : (Dy[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Oi(e, t, l) {
      if (qu(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof l) {
            case "symbol":
            case "object":
              return l;
            case "function":
              return l;
            case "boolean":
              if (l === !1) return l;
          }
          return l === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && l === !0 ? !0 : (nt(l, t), e === "" + l ? l : e);
      }
    }
    function $a(e, t, l) {
      if (qu(t))
        if (l === null) e.removeAttribute(t);
        else {
          switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          nt(l, t), e.setAttribute(t, "" + l);
        }
    }
    function ju(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        nt(l, t), e.setAttribute(t, "" + l);
      }
    }
    function ha(e, t, l, i) {
      if (i === null) e.removeAttribute(l);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        nt(i, l), e.setAttributeNS(t, l, "" + i);
      }
    }
    function p(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Pn(e), e;
        default:
          return "";
      }
    }
    function x(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function I(e) {
      var t = x(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Pn(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
        var o = l.get, f = l.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Pn(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: l.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Pn(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function re(e) {
      e._valueTracker || (e._valueTracker = I(e));
    }
    function ze(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var l = t.getValue(), i = "";
      return e && (i = x(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== l ? (t.setValue(e), !0) : !1;
    }
    function we(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Te(e) {
      return e.replace(
        Eg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function dt(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Cy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        fn() || "A component",
        t.type
      ), Cy = !0), t.value === void 0 || t.defaultValue === void 0 || uh || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        fn() || "A component",
        t.type
      ), uh = !0);
    }
    function Ie(e, t, l, i, o, f, d, m) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (nt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + p(t)) : e.value !== "" + p(t) && (e.value = "" + p(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Qt(e, d, p(t)) : l != null ? Qt(e, d, p(l)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? (nt(m, "name"), e.name = "" + p(m)) : e.removeAttribute("name");
    }
    function Ut(e, t, l, i, o, f, d, m) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (nt(f, "type"), e.type = f), t != null || l != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        l = l != null ? "" + p(l) : "", t = t != null ? "" + p(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = m ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (nt(d, "name"), e.name = d);
    }
    function Qt(e, t, l) {
      t === "number" && we(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function hl(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? by.Children.forEach(t.children, function(l) {
        l == null || typeof l == "string" || typeof l == "number" || typeof l == "bigint" || Tg || (Tg = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Rg || (Rg = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || us || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), us = !0);
    }
    function Vn() {
      var e = fn();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function el(e, t, l, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < l.length; o++)
          t["$" + l[o]] = !0;
        for (l = 0; l < e.length; l++)
          o = t.hasOwnProperty("$" + e[l].value), e[l].selected !== o && (e[l].selected = o), o && i && (e[l].defaultSelected = !0);
      } else {
        for (l = "" + p(l), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === l) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Tt(e, t) {
      for (e = 0; e < ch.length; e++) {
        var l = ch[e];
        if (t[l] != null) {
          var i = Kn(t[l]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            l,
            Vn()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            l,
            Vn()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || ih || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), ih = !0);
    }
    function Gh(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || is || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        fn() || "A component"
      ), is = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Xh(e, t, l) {
      if (t != null && (t = "" + p(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + p(l) : "";
    }
    function Di(e, t, l, i) {
      if (t == null) {
        if (i != null) {
          if (l != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Kn(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          l = i;
        }
        l == null && (l = ""), t = l;
      }
      l = p(t), e.defaultValue = l, i = e.textContent, i === l && i !== "" && i !== null && (e.value = i);
    }
    function Sc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Sc(e.children[0], t) : e;
    }
    function rn(e) {
      return "  " + "  ".repeat(e);
    }
    function Uo(e) {
      return "+ " + "  ".repeat(e);
    }
    function zi(e) {
      return "- " + "  ".repeat(e);
    }
    function Qh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Ff(e, t) {
      return oh.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Ec(e, t, l) {
      var i = 120 - 2 * l;
      if (t === null)
        return Uo(l) + Ff(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Uo(l) + Ff(e, i) + `
` + zi(l) + Ff(t, i) + `
`;
      }
      return rn(l) + Ff(e, i) + `
`;
    }
    function Ho(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, l) {
        return l;
      });
    }
    function Ll(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Kn(e)) return "[...]";
          if (e.$$typeof === tc)
            return (t = ce(e.type)) ? "<" + t + ">" : "<...>";
          var l = Ho(e);
          if (l === "Object") {
            l = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Ll(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  l += l === "" ? "..." : ", ...";
                  break;
                }
                l += (l === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + l + "}";
          }
          return l;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Gn(e, t) {
      return typeof e != "string" || oh.test(e) ? "{" + Ll(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Hs(e, t, l) {
      var i = 120 - l.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Gn(
            t[f],
            120 - l.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? l + "<" + e + `>
` : 0 < i ? l + "<" + e + " " + o.join(" ") + `>
` : l + "<" + e + `
` + l + "  " + o.join(`
` + l + "  ") + `
` + l + `>
`;
    }
    function Rv(e, t, l) {
      var i = "", o = Ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * l - f.length - 2, m = Ll(e[f], d);
          t.hasOwnProperty(f) ? (d = Ll(t[f], d), i += Uo(l) + f + ": " + m + `
`, i += zi(l) + f + ": " + d + `
`) : i += Uo(l) + f + ": " + m + `
`;
        }
      for (var g in o)
        o.hasOwnProperty(g) && (e = Ll(
          o[g],
          120 - 2 * l - g.length - 2
        ), i += zi(l) + g + ": " + e + `
`);
      return i;
    }
    function xs(e, t, l, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (E in l)
        l.hasOwnProperty(E) && f.set(
          E.toLowerCase(),
          E
        );
      if (f.size === 1 && f.has("children"))
        o += Hs(
          e,
          t,
          rn(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var m = 120 - 2 * (i + 1) - d.length - 1, g = f.get(d.toLowerCase());
            if (g !== void 0) {
              f.delete(d.toLowerCase());
              var E = t[d];
              g = l[g];
              var L = Gn(
                E,
                m
              );
              m = Gn(
                g,
                m
              ), typeof E == "object" && E !== null && typeof g == "object" && g !== null && Ho(E) === "Object" && Ho(g) === "Object" && (2 < Object.keys(E).length || 2 < Object.keys(g).length || -1 < L.indexOf("...") || -1 < m.indexOf("...")) ? o += rn(i + 1) + d + `={{
` + Rv(
                E,
                g,
                i + 2
              ) + rn(i + 1) + `}}
` : (o += Uo(i + 1) + d + "=" + L + `
`, o += zi(i + 1) + d + "=" + m + `
`);
            } else
              o += rn(i + 1) + d + "=" + Gn(t[d], m) + `
`;
          }
        f.forEach(function(ne) {
          if (ne !== "children") {
            var V = 120 - 2 * (i + 1) - ne.length - 1;
            o += zi(i + 1) + ne + "=" + Gn(l[ne], V) + `
`;
          }
        }), o = o === "" ? rn(i) + "<" + e + `>
` : rn(i) + "<" + e + `
` + o + rn(i) + `>
`;
      }
      return e = l.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += Ec(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + Ec("" + t, null, i + 1) : o + Ec("" + t, void 0, i + 1)), o;
    }
    function Zh(e, t) {
      var l = Qh(e);
      if (l === null) {
        for (l = "", e = e.child; e; )
          l += Zh(e, t), e = e.sibling;
        return l;
      }
      return rn(t) + "<" + l + `>
`;
    }
    function xo(e, t) {
      var l = Sc(e, t);
      if (l !== e && (e.children.length !== 1 || e.children[0] !== l))
        return rn(t) + `...
` + xo(l, t + 1);
      l = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (l += rn(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Ec(o, e.serverProps, t), t++;
      else if (f = Qh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, m = "";
          for (E in o)
            if (o.hasOwnProperty(E) && E !== "children") {
              var g = Gn(o[E], 15);
              if (d -= E.length + g.length + 2, 0 > d) {
                m += " ...";
                break;
              }
              m += " " + E + "=" + g;
            }
          i = rn(i) + "<" + f + m + `>
`, t++;
        } else
          e.serverProps === null ? (i = Hs(
            f,
            o,
            Uo(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = xs(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var E = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (E += xo(d, t), f++) : E += Zh(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (E += rn(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], E = typeof f == "string" ? E + (zi(t) + Ff(f, 120 - 2 * t) + `
`) : E + Hs(
          f.type,
          f.props,
          zi(t)
        );
      return l + i + E;
    }
    function kh(e) {
      try {
        return `

` + xo(e, 0);
      } catch {
        return "";
      }
    }
    function Vl(e, t, l) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? l : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? kh(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ws(e, t) {
      e = Ke({}, e || gi);
      var l = { tag: t };
      return fh.indexOf(t) !== -1 && (e.aTagInScope = null, e.buttonTagInScope = null, e.nobrTagInScope = null), fc.indexOf(t) !== -1 && (e.pTagInButtonScope = null), Ag.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (e.listItemTagAutoclosing = null, e.dlItemTagAutoclosing = null), e.current = l, t === "form" && (e.formTag = l), t === "a" && (e.aTagInScope = l), t === "button" && (e.buttonTagInScope = l), t === "nobr" && (e.nobrTagInScope = l), t === "p" && (e.pTagInButtonScope = l), t === "li" && (e.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (e.dlItemTagAutoclosing = l), t === "#document" || t === "html" ? e.containerTagInScope = null : e.containerTagInScope || (e.containerTagInScope = l), e;
    }
    function Kh(e, t) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return rc.indexOf(t) === -1;
        case "body":
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "head":
        case "html":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
      }
      return !0;
    }
    function Jh(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Tc(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function _s(e, t) {
      t = t || gi;
      var l = t.current;
      if (t = (l = Kh(
        e,
        l && l.tag
      ) ? null : l) ? null : Jh(e, t), t = l || t, !t) return !0;
      t = t.tag;
      var i = String(!!l) + "|" + e + "|" + t;
      if (sc[i]) return !1;
      sc[i] = !0;
      var o = (i = ol) ? Tc(i.return, t) : null;
      return i = i !== null && o !== null ? Vl(o, i, null) : "", o = "<" + e + ">", l ? (l = "", t === "table" && e === "tr" && (l += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        o,
        t,
        l,
        i
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        o,
        t,
        i
      ), !1;
    }
    function Pf(e, t) {
      if (Kh("#text", t)) return !0;
      var l = "#text|" + t;
      if (sc[l]) return !1;
      sc[l] = !0;
      var i = (l = ol) ? Tc(l, t) : null;
      return l = l !== null && i !== null ? Vl(
        i,
        l,
        l.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        l
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        l
      ), !1;
    }
    function Wa(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Av(e) {
      return e.replace(rh, function(t, l) {
        return l.toUpperCase();
      });
    }
    function $h(e, t, l) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Uf.hasOwnProperty(t) && Uf[t] || (Uf[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Av(t.replace(Og, "ms-"))
      )) : Kv.test(t) ? Uf.hasOwnProperty(t) && Uf[t] || (Uf[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Hy.test(l) || Hf.hasOwnProperty(l) && Hf[l] || (Hf[l] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        l.replace(Hy, "")
      )), typeof l == "number" && (isNaN(l) ? cs || (cs = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(l) || xy || (xy = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), l == null || typeof l == "boolean" || l === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, l) : typeof l != "number" || l === 0 || xf.has(t) ? t === "float" ? e.cssFloat = l : (Mn(l, t), e[t] = ("" + l).trim()) : e[t] = l + "px";
    }
    function Wh(e, t, l) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, l != null) {
        if (t) {
          var i = {};
          if (l) {
            for (var o in l)
              if (l.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = My[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var m in t)
            if (t.hasOwnProperty(m) && (!l || l[m] !== t[m]))
              for (o = My[m] || [m], f = 0; f < o.length; f++)
                i[o[f]] = m;
          m = {};
          for (var g in t)
            for (o = My[g] || [g], f = 0; f < o.length; f++)
              m[o[f]] = g;
          g = {};
          for (var E in i)
            if (o = i[E], (f = m[E]) && o !== f && (d = o + "," + f, !g[d])) {
              g[d] = !0, d = console;
              var L = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                L == null || typeof L == "boolean" || L === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var ne in l)
          !l.hasOwnProperty(ne) || t != null && t.hasOwnProperty(ne) || (ne.indexOf("--") === 0 ? e.setProperty(ne, "") : ne === "float" ? e.cssFloat = "" : e[ne] = "");
        for (var V in t)
          E = t[V], t.hasOwnProperty(V) && l[V] !== E && $h(e, V, E);
      } else
        for (i in t)
          t.hasOwnProperty(i) && $h(e, i, t[i]);
    }
    function Rc(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Dp(e) {
      return wy.get(e) || e;
    }
    function Ov(e, t) {
      if (Tu.call(wf, t) && wf[t])
        return !0;
      if (n.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = _y.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), wf[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), wf[t] = !0;
      }
      if (sh.test(t)) {
        if (e = t.toLowerCase(), e = _y.hasOwnProperty(e) ? e : null, e == null) return wf[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), wf[t] = !0);
      }
      return !0;
    }
    function Ns(e, t) {
      var l = [], i;
      for (i in t)
        Ov(e, i) || l.push(i);
      t = l.map(function(o) {
        return "`" + o + "`";
      }).join(", "), l.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < l.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Fh(e, t, l, i) {
      if (Tu.call(u, t) && u[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), u[t] = !0;
      if (typeof l == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), u[t] = !0;
        if (c.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), u[t] = !0;
      } else if (c.test(t))
        return r.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), u[t] = !0;
      if (s.test(t) || y.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), u[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), u[t] = !0;
      if (o === "is" && l !== null && l !== void 0 && typeof l != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof l
        ), u[t] = !0;
      if (typeof l == "number" && isNaN(l))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), u[t] = !0;
      if (ho.hasOwnProperty(o)) {
        if (o = ho[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), u[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), u[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof l) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (l ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                l,
                t,
                t,
                l,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                l,
                t,
                t,
                l,
                t,
                t,
                t
              ), u[t] = !0);
          }
        case "function":
        case "symbol":
          return u[t] = !0, !1;
        case "string":
          if (l === "false" || l === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              l,
              t,
              l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              l
            ), u[t] = !0;
          }
      }
      return !0;
    }
    function Ph(e, t, l) {
      var i = [], o;
      for (o in t)
        Fh(e, o, t[o], l) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Fa(e) {
      return b.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ci(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Ih(e) {
      var t = Al(e);
      if (t && (e = t.stateNode)) {
        var l = e[xl] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ie(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (nt(t, "name"), l = l.querySelectorAll(
                'input[name="' + Te(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < l.length; t++) {
                var i = l[t];
                if (i !== e && i.form === e.form) {
                  var o = i[xl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ie(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < l.length; t++)
                i = l[t], i.form === e.form && ze(i);
            }
            break e;
          case "textarea":
            Xh(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && el(e, !!l.multiple, t, !1);
        }
      }
    }
    function Bs(e, t, l) {
      if (oe) return e(t, l);
      oe = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (oe = !1, (N !== null || ee !== null) && (Kl(), N && (t = N, e = ee, ee = N = null, Ih(t), e)))
          for (t = 0; t < e.length; t++) Ih(e[t]);
      }
    }
    function wo(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var i = l[xl] || null;
      if (i === null) return null;
      l = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (l && typeof l != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type."
        );
      return l;
    }
    function _o() {
      if (Lt) return Lt;
      var e, t = Xe, l = t.length, i, o = "value" in Me ? Me.value : Me.textContent, f = o.length;
      for (e = 0; e < l && t[e] === o[e]; e++) ;
      var d = l - e;
      for (i = 1; i <= d && t[l - i] === o[f - i]; i++) ;
      return Lt = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function No(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Mi() {
      return !0;
    }
    function Lu() {
      return !1;
    }
    function tl(e) {
      function t(l, i, o, f, d) {
        this._reactName = l, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var m in e)
          e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(f) : f[m]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mi : Lu, this.isPropagationStopped = Lu, this;
      }
      return Ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Mi);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Mi);
        },
        persist: function() {
        },
        isPersistent: Mi
      }), t;
    }
    function Ys(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Z1[e]) ? !!t[e] : !1;
    }
    function qs() {
      return Ys;
    }
    function If(e, t) {
      switch (e) {
        case "keyup":
          return lE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ub;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function er(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function zp(e, t) {
      switch (e) {
        case "compositionend":
          return er(t);
        case "keypress":
          return t.which !== cb ? null : (fb = !0, ob);
        case "textInput":
          return e = t.data, e === ob && fb ? null : e;
        default:
          return null;
      }
    }
    function Ol(e, t) {
      if (dh)
        return e === "compositionend" || !Wv && If(e, t) ? (e = _o(), Lt = Xe = Me = null, dh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ib && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Ui(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!uE[e.type] : t === "textarea";
    }
    function js(e) {
      if (!wl) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Bo(e, t, l, i) {
      N ? ee ? ee.push(i) : ee = [i] : N = i, t = si(t, "onChange"), 0 < t.length && (l = new _(
        "onChange",
        "change",
        null,
        l,
        i
      ), e.push({ event: l, listeners: t }));
    }
    function Dv(e) {
      _d(e, 0);
    }
    function Yo(e) {
      var t = Ai(e);
      if (ze(t)) return e;
    }
    function Ls(e, t) {
      if (e === "change") return t;
    }
    function qo() {
      By && (By.detachEvent("onpropertychange", tr), Yy = By = null);
    }
    function tr(e) {
      if (e.propertyName === "value" && Yo(Yy)) {
        var t = [];
        Bo(
          t,
          Yy,
          e,
          Ci(e)
        ), Bs(Dv, t);
      }
    }
    function Cp(e, t, l) {
      e === "focusin" ? (qo(), By = t, Yy = l, By.attachEvent("onpropertychange", tr)) : e === "focusout" && qo();
    }
    function zv(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Yo(Yy);
    }
    function Cv(e, t) {
      if (e === "click") return Yo(t);
    }
    function Mv(e, t) {
      if (e === "input" || e === "change")
        return Yo(t);
    }
    function em(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function nr(e, t) {
      if (aa(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var l = Object.keys(e), i = Object.keys(t);
      if (l.length !== i.length) return !1;
      for (i = 0; i < l.length; i++) {
        var o = l[i];
        if (!Tu.call(t, o) || !aa(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Mp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Up(e, t) {
      var l = Mp(e);
      e = 0;
      for (var i; l; ) {
        if (l.nodeType === 3) {
          if (i = e + l.textContent.length, e <= t && i >= t)
            return { node: l, offset: t - e };
          e = i;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = Mp(l);
      }
    }
    function Hp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function xp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = we(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = !1;
        }
        if (l) e = t.contentWindow;
        else break;
        t = we(e.document);
      }
      return t;
    }
    function Vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Uv(e, t) {
      var l = xp(t);
      t = e.focusedElem;
      var i = e.selectionRange;
      if (l !== t && t && t.ownerDocument && Hp(t.ownerDocument.documentElement, t)) {
        if (i !== null && Vs(t)) {
          if (e = i.start, l = i.end, l === void 0 && (l = e), "selectionStart" in t)
            t.selectionStart = e, t.selectionEnd = Math.min(
              l,
              t.value.length
            );
          else if (l = (e = t.ownerDocument || document) && e.defaultView || window, l.getSelection) {
            l = l.getSelection();
            var o = t.textContent.length, f = Math.min(i.start, o);
            i = i.end === void 0 ? f : Math.min(i.end, o), !l.extend && f > i && (o = i, i = f, f = o), o = Up(t, f);
            var d = Up(
              t,
              i
            );
            o && d && (l.rangeCount !== 1 || l.anchorNode !== o.node || l.anchorOffset !== o.offset || l.focusNode !== d.node || l.focusOffset !== d.offset) && (e = e.createRange(), e.setStart(o.node, o.offset), l.removeAllRanges(), f > i ? (l.addRange(e), l.extend(d.node, d.offset)) : (e.setEnd(
              d.node,
              d.offset
            ), l.addRange(e)));
          }
        }
        for (e = [], l = t; l = l.parentNode; )
          l.nodeType === 1 && e.push({
            element: l,
            left: l.scrollLeft,
            top: l.scrollTop
          });
        for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
          l = e[t], l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
      }
    }
    function wp(e, t, l) {
      var i = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Pv || hh == null || hh !== we(i) || (i = hh, "selectionStart" in i && Vs(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), qy && nr(qy, i) || (qy = i, i = si(Fv, "onSelect"), 0 < i.length && (t = new _(
        "onSelect",
        "select",
        null,
        t,
        l
      ), e.push({ event: t, listeners: i }), t.target = hh)));
    }
    function Ac(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    function Oc(e) {
      if (Iv[e]) return Iv[e];
      if (!mh[e]) return e;
      var t = mh[e], l;
      for (l in t)
        if (t.hasOwnProperty(l) && l in sb)
          return Iv[e] = t[l];
      return e;
    }
    function Gl(e, t) {
      pb.set(e, t), da(t, [e]);
    }
    function Gs() {
      for (var e = yh, t = e0 = yh = 0; t < e; ) {
        var l = Au[t];
        Au[t++] = null;
        var i = Au[t];
        Au[t++] = null;
        var o = Au[t];
        Au[t++] = null;
        var f = Au[t];
        if (Au[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && _p(l, o, f);
      }
    }
    function Xs(e, t, l, i) {
      Au[yh++] = e, Au[yh++] = t, Au[yh++] = l, Au[yh++] = i, e0 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function tm(e, t, l, i) {
      return Xs(e, t, l, i), Qs(e);
    }
    function Xn(e, t) {
      return Xs(e, null, null, t), Qs(e);
    }
    function _p(e, t, l) {
      e.lanes |= l;
      var i = e.alternate;
      i !== null && (i.lanes |= l);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= l, i = f.alternate, i !== null && (i.childLanes |= l), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Dg || (o = !0)), e = f, f = f.return;
      o && t !== null && e.tag === 3 && (f = e.stateNode, o = 31 - rl(l), f = f.hiddenUpdates, e = f[o], e === null ? f[o] = [t] : e.push(t), t.lane = l | 536870912);
    }
    function Qs(e) {
      if (cp > TE)
        throw Ts = cp = 0, op = M0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Ts > RE && (Ts = 0, op = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && Im(e);
      for (var t = e, l = t.return; l !== null; )
        t.alternate === null && t.flags & 4098 && Im(e), t = l, l = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Dc(e) {
      if (Ou === null) return e;
      var t = Ou(e);
      return t === void 0 ? e : t.current;
    }
    function nm(e) {
      if (Ou === null) return e;
      var t = Ou(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Dc(e.render), e.render !== t) ? (t = { $$typeof: oo, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Np(e, t) {
      if (Ou === null) return !1;
      var l = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === cl) && (i = !0);
          break;
        case 11:
          (o === oo || o === cl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === nc || o === cl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Ou(l), e !== void 0 && e === Ou(t)));
    }
    function Bp(e) {
      Ou !== null && typeof WeakSet == "function" && (ph === null && (ph = /* @__PURE__ */ new WeakSet()), ph.add(e));
    }
    function lm(e, t, l) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, m = e.type, g = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          g = m;
          break;
        case 11:
          g = m.render;
      }
      if (Ou === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var E = !1;
      m = !1, g !== null && (g = Ou(g), g !== void 0 && (l.has(g) ? m = !0 : t.has(g) && (d === 1 ? m = !0 : E = !0))), ph !== null && (ph.has(e) || i !== null && ph.has(i)) && (m = !0), m && (e._debugNeedsRemount = !0), (m || E) && (i = Xn(e, 2), i !== null && Ht(i, e, 2)), o === null || m || lm(
        o,
        t,
        l
      ), f !== null && lm(
        f,
        t,
        l
      );
    }
    function Vu() {
      var e = fs;
      return fs = 0, e;
    }
    function Zs(e) {
      var t = fs;
      return fs = e, t;
    }
    function zc(e) {
      var t = fs;
      return fs += e, t;
    }
    function Cc(e) {
      Ta = gh(), 0 > e.actualStartTime && (e.actualStartTime = Ta);
    }
    function am(e) {
      if (0 <= Ta) {
        var t = gh() - Ta;
        e.actualDuration += t, e.selfBaseDuration = t, Ta = -1;
      }
    }
    function um(e) {
      if (0 <= Ta) {
        var t = gh() - Ta;
        e.actualDuration += t, Ta = -1;
      }
    }
    function za() {
      if (0 <= Ta) {
        var e = gh() - Ta;
        Ta = -1, fs += e;
      }
    }
    function Ca() {
      Ta = gh();
    }
    function lr(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Dl(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = n0.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: xt(t)
        }, n0.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: xt(t)
      };
    }
    function ma(e, t) {
      Hi(), vh[bh++] = xg, vh[bh++] = Hg, Hg = e, xg = t;
    }
    function Yp(e, t, l) {
      Hi(), Du[zu++] = mo, Du[zu++] = yo, Du[zu++] = ss, ss = e;
      var i = mo;
      e = yo;
      var o = 32 - rl(i) - 1;
      i &= ~(1 << o), l += 1;
      var f = 32 - rl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, mo = 1 << 32 - rl(t) + o | l << o | i, yo = f + e;
      } else
        mo = 1 << f | l << o | i, yo = e;
    }
    function im(e) {
      Hi(), e.return !== null && (ma(e, 1), Yp(e, 1, 0));
    }
    function cm(e) {
      for (; e === Hg; )
        Hg = vh[--bh], vh[bh] = null, xg = vh[--bh], vh[bh] = null;
      for (; e === ss; )
        ss = Du[--zu], Du[zu] = null, yo = Du[--zu], Du[zu] = null, mo = Du[--zu], Du[zu] = null;
    }
    function Hi() {
      mt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function xi(e, t) {
      if (e.return === null) {
        if (Cu === null)
          Cu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Cu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Cu.distanceFromLeaf > t && (Cu.distanceFromLeaf = t);
        }
        return Cu;
      }
      var l = xi(
        e.return,
        t + 1
      ).children;
      return 0 < l.length && l[l.length - 1].fiber === e ? (l = l[l.length - 1], l.distanceFromLeaf > t && (l.distanceFromLeaf = t), l) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, l.push(t), t);
    }
    function Mc(e, t) {
      po || (e = xi(e, 0), e.serverProps = null, t !== null && (t = Vd(t), e.serverTail.push(t)));
    }
    function Ma(e) {
      var t = "", l = Cu;
      throw l !== null && (Cu = null, t = kh(l)), Uc(
        Dl(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), l0;
    }
    function qp(e) {
      var t = e.stateNode, l = e.type, i = e.memoizedProps;
      switch (t[Jn] = e, t[xl] = i, Ic(l, i), l) {
        case "dialog":
          at("cancel", t), at("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          at("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < fp.length; l++)
            at(fp[l], t);
          break;
        case "source":
          at("error", t);
          break;
        case "img":
        case "image":
        case "link":
          at("error", t), at("load", t);
          break;
        case "details":
          at("toggle", t);
          break;
        case "input":
          Yu("input", i), at("invalid", t), dt(t, i), Ut(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), re(t);
          break;
        case "option":
          hl(t, i);
          break;
        case "select":
          Yu("select", i), at("invalid", t), Tt(t, i);
          break;
        case "textarea":
          Yu("textarea", i), at("invalid", t), Gh(t, i), Di(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), re(t);
      }
      l = i.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || i.suppressHydrationWarning === !0 || Yd(t.textContent, l) ? (i.popover != null && (at("beforetoggle", t), at("toggle", t)), i.onScroll != null && at("scroll", t), i.onScrollEnd != null && at("scrollend", t), i.onClick != null && (t.onclick = La), t = !0) : t = !1, t || Ma(e);
    }
    function ar(e) {
      for (ua = e.return; ua; )
        switch (ua.tag) {
          case 3:
          case 27:
            mc = !0;
            return;
          case 5:
          case 13:
            mc = !1;
            return;
          default:
            ua = ua.return;
        }
    }
    function jo(e) {
      if (e !== ua) return !1;
      if (!mt)
        return ar(e), mt = !0, !1;
      var t = !1, l;
      if ((l = e.tag !== 3 && e.tag !== 27) && ((l = e.tag === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || zt(e.type, e.memoizedProps)), l = !l), l && (t = !0), t && Sl) {
        for (t = Sl; t; ) {
          l = xi(e, 0);
          var i = Vd(t);
          l.serverTail.push(i), t = i.type === "Suspense" ? Zr(t) : Ul(t.nextSibling);
        }
        Ma(e);
      }
      if (ar(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Sl = Zr(e);
      } else
        Sl = ua ? Ul(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Lo() {
      Sl = ua = null, po = mt = !1;
    }
    function Uc(e) {
      Si === null ? Si = [e] : Si.push(e);
    }
    function ks() {
      var e = Cu;
      e !== null && (Cu = null, e = kh(e), console.error(
        `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
        "https://react.dev/link/hydration-mismatch",
        e
      ));
    }
    function om() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function fm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function ur() {
    }
    function jp(e, t, l) {
      K.actQueue !== null && (K.didUsePromise = !0);
      var i = e.thenables;
      switch (l = i[l], l === void 0 ? i.push(t) : l !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(ur, ur), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Vp(e), e;
        default:
          if (typeof t.status == "string")
            t.then(ur, ur);
          else {
            if (e = Vt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Vp(e), e;
          }
          throw ky = t, _g = !0, wg;
      }
    }
    function Lp() {
      if (ky === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = ky;
      return ky = null, _g = !1, e;
    }
    function Vp(e) {
      if (e === wg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Qn(e) {
      var t = et;
      return e != null && (et = t === null ? e : t.concat(e)), t;
    }
    function Ks(e, t, l) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = ff(e, l.mode, 0), t._debugInfo = et, t.return = l), Ae(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function nl(e) {
      var t = Ky;
      return Ky += 1, Sh === null && (Sh = om()), jp(Sh, e, t);
    }
    function Gu(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function ir(e, t) {
      throw t.$$typeof === Ey ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function cr(e, t) {
      var l = ge(e) || "Component";
      Nb[l] || (Nb[l] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        l,
        t,
        l
      ));
    }
    function or(e, t) {
      var l = ge(e) || "Component";
      Bb[l] || (Bb[l] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        l,
        t,
        l
      ));
    }
    function rm(e) {
      function t(U, M) {
        if (e) {
          var w = U.deletions;
          w === null ? (U.deletions = [M], U.flags |= 16) : w.push(M);
        }
      }
      function l(U, M) {
        if (!e) return null;
        for (; M !== null; )
          t(U, M), M = M.sibling;
        return null;
      }
      function i(U) {
        for (var M = /* @__PURE__ */ new Map(); U !== null; )
          U.key !== null ? M.set(U.key, U) : M.set(U.index, U), U = U.sibling;
        return M;
      }
      function o(U, M) {
        return U = fu(U, M), U.index = 0, U.sibling = null, U;
      }
      function f(U, M, w) {
        return U.index = w, e ? (w = U.alternate, w !== null ? (w = w.index, w < M ? (U.flags |= 33554434, M) : w) : (U.flags |= 33554434, M)) : (U.flags |= 1048576, M);
      }
      function d(U) {
        return e && U.alternate === null && (U.flags |= 33554434), U;
      }
      function m(U, M, w, P) {
        return M === null || M.tag !== 6 ? (M = Od(
          w,
          U.mode,
          P
        ), M.return = U, M._debugOwner = U, M._debugInfo = et, M) : (M = o(M, w), M.return = U, M._debugInfo = et, M);
      }
      function g(U, M, w, P) {
        var be = w.type;
        return be === Eu ? (M = L(
          U,
          M,
          w.props.children,
          P,
          w.key
        ), Ks(w, M, U), M) : M !== null && (M.elementType === be || Np(M, w) || typeof be == "object" && be !== null && be.$$typeof === cl && Nf(be) === M.type) ? (M = o(M, w.props), Gu(M, w), M.return = U, M._debugOwner = w._owner, M._debugInfo = et, M) : (M = ff(w, U.mode, P), Gu(M, w), M.return = U, M._debugInfo = et, M);
      }
      function E(U, M, w, P) {
        return M === null || M.tag !== 4 || M.stateNode.containerInfo !== w.containerInfo || M.stateNode.implementation !== w.implementation ? (M = wr(w, U.mode, P), M.return = U, M._debugInfo = et, M) : (M = o(M, w.children || []), M.return = U, M._debugInfo = et, M);
      }
      function L(U, M, w, P, be) {
        return M === null || M.tag !== 7 ? (M = ai(
          w,
          U.mode,
          P,
          be
        ), M.return = U, M._debugOwner = U, M._debugInfo = et, M) : (M = o(M, w), M.return = U, M._debugInfo = et, M);
      }
      function ne(U, M, w) {
        if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
          return M = Od(
            "" + M,
            U.mode,
            w
          ), M.return = U, M._debugOwner = U, M._debugInfo = et, M;
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case tc:
              return w = ff(
                M,
                U.mode,
                w
              ), Gu(w, M), w.return = U, U = Qn(M._debugInfo), w._debugInfo = et, et = U, w;
            case Of:
              return M = wr(
                M,
                U.mode,
                w
              ), M.return = U, M._debugInfo = et, M;
            case cl:
              var P = Qn(M._debugInfo);
              return M = Nf(M), U = ne(U, M, w), et = P, U;
          }
          if (Kn(M) || le(M))
            return w = ai(
              M,
              U.mode,
              w,
              null
            ), w.return = U, w._debugOwner = U, U = Qn(M._debugInfo), w._debugInfo = et, et = U, w;
          if (typeof M.then == "function")
            return P = Qn(M._debugInfo), U = ne(
              U,
              nl(M),
              w
            ), et = P, U;
          if (M.$$typeof === ea)
            return ne(
              U,
              tf(U, M),
              w
            );
          ir(U, M);
        }
        return typeof M == "function" && cr(U, M), typeof M == "symbol" && or(U, M), null;
      }
      function V(U, M, w, P) {
        var be = M !== null ? M.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
          return be !== null ? null : m(U, M, "" + w, P);
        if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case tc:
              return w.key === be ? (be = Qn(w._debugInfo), U = g(
                U,
                M,
                w,
                P
              ), et = be, U) : null;
            case Of:
              return w.key === be ? E(U, M, w, P) : null;
            case cl:
              return be = Qn(w._debugInfo), w = Nf(w), U = V(
                U,
                M,
                w,
                P
              ), et = be, U;
          }
          if (Kn(w) || le(w))
            return be !== null ? null : (be = Qn(w._debugInfo), U = L(
              U,
              M,
              w,
              P,
              null
            ), et = be, U);
          if (typeof w.then == "function")
            return be = Qn(w._debugInfo), U = V(
              U,
              M,
              nl(w),
              P
            ), et = be, U;
          if (w.$$typeof === ea)
            return V(
              U,
              M,
              tf(U, w),
              P
            );
          ir(U, w);
        }
        return typeof w == "function" && cr(U, w), typeof w == "symbol" && or(U, w), null;
      }
      function ae(U, M, w, P, be) {
        if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
          return U = U.get(w) || null, m(M, U, "" + P, be);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case tc:
              return w = U.get(
                P.key === null ? w : P.key
              ) || null, U = Qn(P._debugInfo), M = g(
                M,
                w,
                P,
                be
              ), et = U, M;
            case Of:
              return U = U.get(
                P.key === null ? w : P.key
              ) || null, E(M, U, P, be);
            case cl:
              var ke = Qn(P._debugInfo);
              return P = Nf(P), M = ae(
                U,
                M,
                w,
                P,
                be
              ), et = ke, M;
          }
          if (Kn(P) || le(P))
            return w = U.get(w) || null, U = Qn(P._debugInfo), M = L(
              M,
              w,
              P,
              be,
              null
            ), et = U, M;
          if (typeof P.then == "function")
            return ke = Qn(P._debugInfo), M = ae(
              U,
              M,
              w,
              nl(P),
              be
            ), et = ke, M;
          if (P.$$typeof === ea)
            return ae(
              U,
              M,
              w,
              tf(M, P),
              be
            );
          ir(M, P);
        }
        return typeof P == "function" && cr(M, P), typeof P == "symbol" && or(M, P), null;
      }
      function xe(U, M, w, P) {
        if (typeof w != "object" || w === null) return P;
        switch (w.$$typeof) {
          case tc:
          case Of:
            q(U, M, w);
            var be = w.key;
            if (typeof be != "string") break;
            if (P === null) {
              P = /* @__PURE__ */ new Set(), P.add(be);
              break;
            }
            if (!P.has(be)) {
              P.add(be);
              break;
            }
            Ae(M, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                be
              );
            });
            break;
          case cl:
            w = Nf(w), xe(U, M, w, P);
        }
        return P;
      }
      function Fe(U, M, w, P) {
        for (var be = null, ke = null, He = null, Je = M, Pe = M = 0, tn = null; Je !== null && Pe < w.length; Pe++) {
          Je.index > Pe ? (tn = Je, Je = null) : tn = Je.sibling;
          var Cn = V(
            U,
            Je,
            w[Pe],
            P
          );
          if (Cn === null) {
            Je === null && (Je = tn);
            break;
          }
          be = xe(
            U,
            Cn,
            w[Pe],
            be
          ), e && Je && Cn.alternate === null && t(U, Je), M = f(Cn, M, Pe), He === null ? ke = Cn : He.sibling = Cn, He = Cn, Je = tn;
        }
        if (Pe === w.length)
          return l(U, Je), mt && ma(U, Pe), ke;
        if (Je === null) {
          for (; Pe < w.length; Pe++)
            Je = ne(U, w[Pe], P), Je !== null && (be = xe(
              U,
              Je,
              w[Pe],
              be
            ), M = f(
              Je,
              M,
              Pe
            ), He === null ? ke = Je : He.sibling = Je, He = Je);
          return mt && ma(U, Pe), ke;
        }
        for (Je = i(Je); Pe < w.length; Pe++)
          tn = ae(
            Je,
            U,
            Pe,
            w[Pe],
            P
          ), tn !== null && (be = xe(
            U,
            tn,
            w[Pe],
            be
          ), e && tn.alternate !== null && Je.delete(
            tn.key === null ? Pe : tn.key
          ), M = f(
            tn,
            M,
            Pe
          ), He === null ? ke = tn : He.sibling = tn, He = tn);
        return e && Je.forEach(function(Oo) {
          return t(U, Oo);
        }), mt && ma(U, Pe), ke;
      }
      function zn(U, M, w, P) {
        if (w == null)
          throw Error("An iterable object provided no iterator.");
        for (var be = null, ke = null, He = M, Je = M = 0, Pe = null, tn = null, Cn = w.next(); He !== null && !Cn.done; Je++, Cn = w.next()) {
          He.index > Je ? (Pe = He, He = null) : Pe = He.sibling;
          var Oo = V(U, He, Cn.value, P);
          if (Oo === null) {
            He === null && (He = Pe);
            break;
          }
          tn = xe(
            U,
            Oo,
            Cn.value,
            tn
          ), e && He && Oo.alternate === null && t(U, He), M = f(Oo, M, Je), ke === null ? be = Oo : ke.sibling = Oo, ke = Oo, He = Pe;
        }
        if (Cn.done)
          return l(U, He), mt && ma(U, Je), be;
        if (He === null) {
          for (; !Cn.done; Je++, Cn = w.next())
            He = ne(U, Cn.value, P), He !== null && (tn = xe(
              U,
              He,
              Cn.value,
              tn
            ), M = f(
              He,
              M,
              Je
            ), ke === null ? be = He : ke.sibling = He, ke = He);
          return mt && ma(U, Je), be;
        }
        for (He = i(He); !Cn.done; Je++, Cn = w.next())
          Pe = ae(
            He,
            U,
            Je,
            Cn.value,
            P
          ), Pe !== null && (tn = xe(
            U,
            Pe,
            Cn.value,
            tn
          ), e && Pe.alternate !== null && He.delete(
            Pe.key === null ? Je : Pe.key
          ), M = f(
            Pe,
            M,
            Je
          ), ke === null ? be = Pe : ke.sibling = Pe, ke = Pe);
        return e && He.forEach(function(NE) {
          return t(U, NE);
        }), mt && ma(U, Je), be;
      }
      function Dt(U, M, w, P) {
        if (typeof w == "object" && w !== null && w.type === Eu && w.key === null && (Ks(w, null, U), w = w.props.children), typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case tc:
              var be = Qn(w._debugInfo);
              e: {
                for (var ke = w.key; M !== null; ) {
                  if (M.key === ke) {
                    if (ke = w.type, ke === Eu) {
                      if (M.tag === 7) {
                        l(
                          U,
                          M.sibling
                        ), P = o(
                          M,
                          w.props.children
                        ), P.return = U, P._debugOwner = w._owner, P._debugInfo = et, Ks(w, P, U), U = P;
                        break e;
                      }
                    } else if (M.elementType === ke || Np(
                      M,
                      w
                    ) || typeof ke == "object" && ke !== null && ke.$$typeof === cl && Nf(ke) === M.type) {
                      l(
                        U,
                        M.sibling
                      ), P = o(M, w.props), Gu(P, w), P.return = U, P._debugOwner = w._owner, P._debugInfo = et, U = P;
                      break e;
                    }
                    l(U, M);
                    break;
                  } else t(U, M);
                  M = M.sibling;
                }
                w.type === Eu ? (P = ai(
                  w.props.children,
                  U.mode,
                  P,
                  w.key
                ), P.return = U, P._debugOwner = U, P._debugInfo = et, Ks(w, P, U), U = P) : (P = ff(
                  w,
                  U.mode,
                  P
                ), Gu(P, w), P.return = U, P._debugInfo = et, U = P);
              }
              return U = d(U), et = be, U;
            case Of:
              e: {
                for (be = w, w = be.key; M !== null; ) {
                  if (M.key === w)
                    if (M.tag === 4 && M.stateNode.containerInfo === be.containerInfo && M.stateNode.implementation === be.implementation) {
                      l(
                        U,
                        M.sibling
                      ), P = o(
                        M,
                        be.children || []
                      ), P.return = U, U = P;
                      break e;
                    } else {
                      l(U, M);
                      break;
                    }
                  else t(U, M);
                  M = M.sibling;
                }
                P = wr(
                  be,
                  U.mode,
                  P
                ), P.return = U, U = P;
              }
              return d(U);
            case cl:
              return be = Qn(w._debugInfo), w = Nf(w), U = Dt(
                U,
                M,
                w,
                P
              ), et = be, U;
          }
          if (Kn(w))
            return be = Qn(w._debugInfo), U = Fe(
              U,
              M,
              w,
              P
            ), et = be, U;
          if (le(w)) {
            if (be = Qn(w._debugInfo), ke = le(w), typeof ke != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var He = ke.call(w);
            return He === w ? (U.tag !== 0 || Object.prototype.toString.call(U.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(He) !== "[object Generator]") && (wb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), wb = !0) : w.entries !== ke || c0 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), c0 = !0), U = zn(
              U,
              M,
              He,
              P
            ), et = be, U;
          }
          if (typeof w.then == "function")
            return be = Qn(w._debugInfo), U = Dt(
              U,
              M,
              nl(w),
              P
            ), et = be, U;
          if (w.$$typeof === ea)
            return Dt(
              U,
              M,
              tf(U, w),
              P
            );
          ir(U, w);
        }
        return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (be = "" + w, M !== null && M.tag === 6 ? (l(
          U,
          M.sibling
        ), P = o(M, be), P.return = U, U = P) : (l(U, M), P = Od(
          be,
          U.mode,
          P
        ), P.return = U, P._debugOwner = U, P._debugInfo = et, U = P), d(U)) : (typeof w == "function" && cr(U, w), typeof w == "symbol" && or(U, w), l(U, M));
      }
      return function(U, M, w, P) {
        var be = et;
        et = null;
        try {
          Ky = 0;
          var ke = Dt(
            U,
            M,
            w,
            P
          );
          return Sh = null, ke;
        } catch (tn) {
          if (tn === wg) throw tn;
          var He = Z(29, tn, null, U.mode);
          He.lanes = P, He.return = U;
          var Je = He._debugInfo = et;
          if (He._debugOwner = U._debugOwner, Je != null) {
            for (var Pe = Je.length - 1; 0 <= Pe; Pe--)
              if (typeof Je[Pe].stack == "string") {
                He._debugOwner = Je[Pe];
                break;
              }
          }
          return He;
        } finally {
          et = be;
        }
      };
    }
    function Js(e, t) {
      var l = gc;
      pe(Ng, l, e), pe(Eh, t, e), gc = l | t.baseLanes;
    }
    function sm(e) {
      pe(Ng, gc, e), pe(
        Eh,
        Eh.current,
        e
      );
    }
    function dm(e) {
      gc = Ng.current, W(Eh, e), W(Ng, e);
    }
    function Xl(e) {
      var t = e.alternate;
      pe(
        $n,
        $n.current & Th,
        e
      ), pe(Mu, e, e), yc === null && (t === null || Eh.current !== null || t.memoizedState !== null) && (yc = e);
    }
    function $s(e) {
      if (e.tag === 22) {
        if (pe($n, $n.current, e), pe(Mu, e, e), yc === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (yc = e);
        }
      } else ya(e);
    }
    function ya(e) {
      pe($n, $n.current, e), pe(
        Mu,
        Mu.current,
        e
      );
    }
    function Ua(e) {
      W(Mu, e), yc === e && (yc = null), W($n, e);
    }
    function fr(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || l.data === Os || l.data === Ds))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Xu() {
      return {
        controller: new mE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function pa(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Hc(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && yE(pE, function() {
        e.controller.abort();
      });
    }
    function Gp(e, t) {
      if ($y === null) {
        var l = $y = [];
        o0 = 0, hs = wd(), Rh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            l.push(i);
          }
        };
      }
      return o0++, t.then(wi, wi), t;
    }
    function wi() {
      if (--o0 === 0 && $y !== null) {
        Rh !== null && (Rh.status = "fulfilled");
        var e = $y;
        $y = null, hs = 0, Rh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Xp(e, t) {
      var l = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          l.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < l.length; o++) (0, l[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < l.length; o++)
            (0, l[o])(void 0);
        }
      ), i;
    }
    function Ws() {
      var e = ms.current;
      return e !== null ? e : Vt.pooledCache;
    }
    function rr(e, t) {
      t === null ? pe(ms, ms.current, e) : pe(ms, t.pool, e);
    }
    function Qp() {
      var e = Ws();
      return e === null ? null : { parent: Fn._currentValue, pool: e };
    }
    function lt() {
      var e = J;
      xu === null ? xu = [e] : xu.push(e);
    }
    function se() {
      var e = J;
      if (xu !== null && (vo++, xu[vo] !== e)) {
        var t = ge(
          Qe
        );
        if (!jb.has(t) && (jb.add(t), xu !== null)) {
          for (var l = "", i = 0; i <= vo; i++) {
            var o = xu[i], f = i === vo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, l += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            l
          );
        }
      }
    }
    function xc(e) {
      e == null || Kn(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        J,
        typeof e
      );
    }
    function sr() {
      var e = ge(Qe);
      Vb.has(e) || (Vb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function an() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ql(e, t) {
      if (Fy) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          J
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        J,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var l = 0; l < t.length && l < e.length; l++)
        if (!aa(e[l], t[l])) return !1;
      return !0;
    }
    function zl(e, t, l, i, o, f) {
      Bf = f, Qe = t, xu = e !== null ? e._debugHookTypes : null, vo = -1, Fy = e !== null && e.type !== t.type, (Object.prototype.toString.call(l) === "[object AsyncFunction]" || Object.prototype.toString.call(l) === "[object AsyncGeneratorFunction]") && (f = ge(
        Qe
      ), f0.has(f) || (f0.add(f), console.error(
        "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, K.H = e !== null && e.memoizedState !== null ? qf : xu !== null ? ps : Yf, ys = f = (t.mode & _l) !== $t;
      var d = u0(l, i, o);
      if (ys = !1, Oh && (d = dr(
        t,
        l,
        i,
        o
      )), f) {
        ot(!0);
        try {
          d = dr(
            t,
            l,
            i,
            o
          );
        } finally {
          ot(!1);
        }
      }
      return wc(e, t), d;
    }
    function wc(e, t) {
      t._debugHookTypes = xu, t.dependencies === null ? go !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: go
      }) : t.dependencies._debugThenableState = go, K.H = pc;
      var l = Nt !== null && Nt.next !== null;
      if (Bf = 0, xu = J = Yn = Nt = Qe = null, vo = -1, e !== null && (e.flags & 31457280) !== (t.flags & 31457280) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Bg = !1, Wy = 0, go = null, l)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || sl || (e = e.dependencies, e !== null && Dr(e) && (sl = !0)), _g ? (_g = !1, e = !0) : e = !1, e && (t = ge(t) || "Unknown", Lb.has(t) || f0.has(t) || (Lb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function dr(e, t, l, i) {
      Qe = e;
      var o = 0;
      do {
        if (Oh && (go = null), Wy = 0, Oh = !1, o >= vE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Fy = !1, Yn = Nt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        vo = -1, K.H = gs, f = u0(t, l, i);
      } while (Oh);
      return f;
    }
    function Fs() {
      var e = K.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ia(t) : t, e = e.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== e && (Qe.flags |= 1024), t;
    }
    function Vo() {
      var e = Yg !== 0;
      return Yg = 0, e;
    }
    function hr(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & vi) !== $t ? t.flags & -201328645 : t.flags & -2053, e.lanes &= ~l;
    }
    function Pa(e) {
      if (Bg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Bg = !1;
      }
      Bf = 0, xu = Yn = Nt = Qe = null, vo = -1, J = null, Oh = !1, Wy = Yg = 0, go = null;
    }
    function ml() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Yn === null ? Qe.memoizedState = Yn = e : Yn = Yn.next = e, Yn;
    }
    function pt() {
      if (Nt === null) {
        var e = Qe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Nt.next;
      var t = Yn === null ? Qe.memoizedState : Yn.next;
      if (t !== null)
        Yn = t, Nt = e;
      else {
        if (e === null)
          throw Qe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Nt = e, e = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null
        }, Yn === null ? Qe.memoizedState = Yn = e : Yn = Yn.next = e;
      }
      return Yn;
    }
    function Ia(e) {
      var t = Wy;
      return Wy += 1, go === null && (go = om()), e = jp(go, e, t), t = Qe, (Yn === null ? t.memoizedState : Yn.next) === null && (t = t.alternate, K.H = t !== null && t.memoizedState !== null ? qf : Yf), e;
    }
    function Qu(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ia(e);
        if (e.$$typeof === ea) return qt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Un(e) {
      var t = null, l = Qe.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var i = Qe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), l === null && (l = r0(), Qe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0 || Fy)
        for (l = t.data[t.index] = Array(e), i = 0; i < e; i++)
          l[i] = yg;
      else
        l.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          l.length,
          e
        );
      return t.index++, l;
    }
    function ll(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _i(e, t, l) {
      var i = ml();
      if (l !== void 0) {
        var o = l(t);
        if (ys) {
          ot(!0);
          try {
            l(t);
          } finally {
            ot(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Em.bind(
        null,
        Qe,
        e
      ), [i.memoizedState, e];
    }
    function Zu(e) {
      var t = pt();
      return Go(t, Nt, e);
    }
    function Go(e, t, l) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = l;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var m = d = null, g = null, E = t, L = !1;
        do {
          var ne = E.lane & -536870913;
          if (ne !== E.lane ? (ct & ne) === ne : (Bf & ne) === ne) {
            var V = E.revertLane;
            if (V === 0)
              g !== null && (g = g.next = {
                lane: 0,
                revertLane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }), ne === hs && (L = !0);
            else if ((Bf & V) === V) {
              E = E.next, V === hs && (L = !0);
              continue;
            } else
              ne = {
                lane: 0,
                revertLane: E.revertLane,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null
              }, g === null ? (m = g = ne, d = f) : g = g.next = ne, Qe.lanes |= V, Vf |= V;
            ne = E.action, ys && l(f, ne), f = E.hasEagerState ? E.eagerState : l(f, ne);
          } else
            V = {
              lane: ne,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, g === null ? (m = g = V, d = f) : g = g.next = V, Qe.lanes |= ne, Vf |= ne;
          E = E.next;
        } while (E !== null && E !== t);
        if (g === null ? d = f : g.next = m, !aa(f, e.memoizedState) && (sl = !0, L && (l = Rh, l !== null)))
          throw l;
        e.memoizedState = f, e.baseState = d, e.baseQueue = g, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function al(e) {
      var t = pt(), l = t.queue;
      if (l === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      l.lastRenderedReducer = e;
      var i = l.dispatch, o = l.pending, f = t.memoizedState;
      if (o !== null) {
        l.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        aa(f, t.memoizedState) || (sl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), l.lastRenderedState = f;
      }
      return [f, i];
    }
    function Cl(e, t, l) {
      var i = Qe, o = ml();
      if (mt) {
        if (l === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = l();
        Ah || f === l() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Ah = !0);
      } else {
        if (f = t(), Ah || (l = t(), aa(f, l) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ah = !0)), Vt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        ct & 60 || tu(i, t, f);
      }
      return o.memoizedState = f, l = { value: f, getSnapshot: t }, o.queue = l, qi(
        Ni.bind(null, i, l, e),
        [e]
      ), i.flags |= 2048, Bc(
        Hu | Wn,
        nu.bind(
          null,
          i,
          l,
          f,
          t
        ),
        { destroy: void 0 },
        null
      ), f;
    }
    function eu(e, t, l) {
      var i = Qe, o = pt(), f = mt;
      if (f) {
        if (l === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        l = l();
      } else if (l = t(), !Ah) {
        var d = t();
        aa(l, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ah = !0);
      }
      (d = !aa(
        (Nt || o).memoizedState,
        l
      )) && (o.memoizedState = l, sl = !0), o = o.queue;
      var m = Ni.bind(null, i, o, e);
      if (En(2048, Wn, m, [e]), o.getSnapshot !== t || d || Yn !== null && Yn.memoizedState.tag & Hu) {
        if (i.flags |= 2048, Bc(
          Hu | Wn,
          nu.bind(
            null,
            i,
            o,
            l,
            t
          ),
          { destroy: void 0 },
          null
        ), Vt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || Bf & 60 || tu(i, t, l);
      }
      return l;
    }
    function tu(e, t, l) {
      e.flags |= 16384, e = { getSnapshot: t, value: l }, t = Qe.updateQueue, t === null ? (t = r0(), Qe.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
    }
    function nu(e, t, l, i) {
      t.value = l, t.getSnapshot = i, hm(t) && Ps(e);
    }
    function Ni(e, t, l) {
      return l(function() {
        hm(t) && Ps(e);
      });
    }
    function hm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !aa(e, l);
      } catch {
        return !0;
      }
    }
    function Ps(e) {
      var t = Xn(e, 2);
      t !== null && Ht(t, e, 2);
    }
    function mr(e) {
      var t = ml();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), ys) {
          ot(!0);
          try {
            l();
          } finally {
            ot(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: e
      }, t;
    }
    function Zn(e) {
      e = mr(e);
      var t = e.queue, l = $o.bind(
        null,
        Qe,
        t
      );
      return t.dispatch = l, [e.memoizedState, l];
    }
    function Sn(e) {
      var t = ml();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = br.bind(
        null,
        Qe,
        !0,
        l
      ), l.dispatch = t, [e, t];
    }
    function ht(e, t) {
      var l = pt();
      return ga(l, Nt, e, t);
    }
    function ga(e, t, l, i) {
      return e.baseState = l, Go(
        e,
        Nt,
        typeof i == "function" ? i : ll
      );
    }
    function Ha(e, t) {
      var l = pt();
      return Nt !== null ? ga(l, Nt, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    }
    function mm(e, t, l, i, o) {
      if ($u(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        K.T !== null ? l(!0) : f.isTransition = !1, i(f), l = t.pending, l === null ? (f.next = t.pending = f, Bi(t, f)) : (f.next = l.next, t.pending = l.next = f);
      }
    }
    function Bi(e, t) {
      var l = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = K.T, d = {};
        K.T = d, K.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var m = l(o, i), g = K.S;
          g !== null && g(d, m), ym(e, t, m);
        } catch (E) {
          _c(e, t, E);
        } finally {
          K.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = l(o, i), ym(e, t, d);
        } catch (E) {
          _c(e, t, E);
        }
    }
    function ym(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? (l.then(
        function(i) {
          pm(e, t, i);
        },
        function(i) {
          return _c(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function was passed to useActionState, but it was dispatched outside of an action context. This is likely not what you intended. Either pass the dispatch function to an `action` prop, or dispatch manually inside `startTransition`"
      )) : pm(e, t, l);
    }
    function pm(e, t, l) {
      t.status = "fulfilled", t.value = l, Xo(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Bi(e, l)));
    }
    function _c(e, t, l) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = l, Xo(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Xo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Qo(e, t) {
      return t;
    }
    function lu(e, t) {
      if (mt) {
        var l = Vt.formState;
        if (l !== null) {
          e: {
            var i = Qe;
            if (mt) {
              if (Sl) {
                t: {
                  for (var o = Sl, f = mc; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Ul(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Y0 || f === zS ? o : null;
                }
                if (o) {
                  Sl = Ul(
                    o.nextSibling
                  ), i = o.data === Y0;
                  break e;
                }
              }
              Ma(i);
            }
            i = !1;
          }
          i && (t = l[0]);
        }
      }
      return l = ml(), l.memoizedState = l.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: t
      }, l.queue = i, l = $o.bind(
        null,
        Qe,
        i
      ), i.dispatch = l, i = mr(!1), f = br.bind(
        null,
        Qe,
        !1,
        i.queue
      ), i = ml(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, l = mm.bind(
        null,
        Qe,
        o,
        f,
        l
      ), o.dispatch = l, i.memoizedState = e, [t, l, !1];
    }
    function yr(e) {
      var t = pt();
      return Is(t, Nt, e);
    }
    function Is(e, t, l) {
      t = Go(
        e,
        t,
        Qo
      )[0], e = Zu(ll)[0], t = typeof t == "object" && t !== null && typeof t.then == "function" ? Ia(t) : t;
      var i = pt(), o = i.queue, f = o.dispatch;
      return l !== i.memoizedState && (Qe.flags |= 2048, Bc(
        Hu | Wn,
        Zp.bind(null, o, l),
        { destroy: void 0 },
        null
      )), [t, f, e];
    }
    function Zp(e, t) {
      e.action = t;
    }
    function Nc(e) {
      var t = pt(), l = Nt;
      if (l !== null)
        return Is(t, l, e);
      pt(), t = t.memoizedState, l = pt();
      var i = l.queue.dispatch;
      return l.memoizedState = e, [t, i, !1];
    }
    function Bc(e, t, l, i) {
      return e = { tag: e, create: t, inst: l, deps: i, next: null }, t = Qe.updateQueue, t === null && (t = r0(), Qe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (i = l.next, l.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Yc(e) {
      var t = ml();
      return e = { current: e }, t.memoizedState = e;
    }
    function Yi(e, t, l, i) {
      var o = ml();
      Qe.flags |= e, o.memoizedState = Bc(
        Hu | t,
        l,
        { destroy: void 0 },
        i === void 0 ? null : i
      );
    }
    function En(e, t, l, i) {
      var o = pt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Nt !== null && i !== null && Ql(i, Nt.memoizedState.deps) ? o.memoizedState = Bc(t, l, f, i) : (Qe.flags |= e, o.memoizedState = Bc(
        Hu | t,
        l,
        f,
        i
      ));
    }
    function qi(e, t) {
      (Qe.mode & vi) !== $t && (Qe.mode & vb) === $t ? Yi(142608384, Wn, e, t) : Yi(8390656, Wn, e, t);
    }
    function Zo(e, t) {
      var l = 4194308;
      return (Qe.mode & vi) !== $t && (l |= 67108864), Yi(l, El, e, t);
    }
    function ko(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function() {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ko(e, t, l) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), l = l != null ? l.concat([e]) : null;
      var i = 4194308;
      (Qe.mode & vi) !== $t && (i |= 67108864), Yi(
        i,
        El,
        ko.bind(null, t, e),
        l
      );
    }
    function pr(e, t, l) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), l = l != null ? l.concat([e]) : null, En(
        4,
        El,
        ko.bind(null, t, e),
        l
      );
    }
    function ed(e, t) {
      return ml().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function au(e, t) {
      var l = pt();
      t = t === void 0 ? null : t;
      var i = l.memoizedState;
      return t !== null && Ql(t, i[1]) ? i[0] : (l.memoizedState = [e, t], e);
    }
    function td(e, t) {
      var l = ml();
      t = t === void 0 ? null : t;
      var i = e();
      if (ys) {
        ot(!0);
        try {
          e();
        } finally {
          ot(!1);
        }
      }
      return l.memoizedState = [i, t], i;
    }
    function ku(e, t) {
      var l = pt();
      t = t === void 0 ? null : t;
      var i = l.memoizedState;
      if (t !== null && Ql(t, i[1]))
        return i[0];
      if (i = e(), ys) {
        ot(!0);
        try {
          e();
        } finally {
          ot(!1);
        }
      }
      return l.memoizedState = [i, t], i;
    }
    function Jo(e, t) {
      var l = ml();
      return gr(l, e, t);
    }
    function gm(e, t) {
      var l = pt();
      return Zl(
        l,
        Nt.memoizedState,
        e,
        t
      );
    }
    function nd(e, t) {
      var l = pt();
      return Nt === null ? gr(l, e, t) : Zl(
        l,
        Nt.memoizedState,
        e,
        t
      );
    }
    function gr(e, t, l) {
      return l === void 0 || Bf & 1073741824 ? e.memoizedState = t : (e.memoizedState = l, e = Dd(), Qe.lanes |= e, Vf |= e, l);
    }
    function Zl(e, t, l, i) {
      return aa(l, t) ? l : Eh.current !== null ? (e = gr(e, l, i), aa(e, t) || (sl = !0), e) : Bf & 42 ? (e = Dd(), Qe.lanes |= e, Vf |= e, t) : (sl = !0, e.memoizedState = l);
    }
    function xa(e, t, l, i, o) {
      var f = _t.p;
      _t.p = f !== 0 && f < Ea ? f : Ea;
      var d = K.T, m = {};
      K.T = m, br(e, !1, t, l), m._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var g = o(), E = K.S;
        if (E !== null && E(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var L = Xp(
            g,
            i
          );
          Ju(
            e,
            t,
            L,
            yl(e)
          );
        } else
          Ju(
            e,
            t,
            i,
            yl(e)
          );
      } catch (ne) {
        Ju(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: ne },
          yl(e)
        );
      } finally {
        _t.p = f, K.T = d, d === null && m._updatedFibers && (e = m._updatedFibers.size, m._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function uu(e, t, l, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = vm(e).queue;
      xa(
        e,
        o,
        t,
        Cs,
        l === null ? te : function() {
          return Ku(e), l(i);
        }
      );
    }
    function vm(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Cs,
        baseState: Cs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ll,
          lastRenderedState: Cs
        },
        next: null
      };
      var l = {};
      return t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ll,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Ku(e) {
      K.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = vm(e).next.queue;
      Ju(
        e,
        t,
        {},
        yl(e)
      );
    }
    function wa() {
      var e = mr(!1);
      return e = xa.bind(
        null,
        Qe,
        e.queue,
        !0,
        !1
      ), ml().memoizedState = e, [!1, e];
    }
    function yn() {
      var e = Zu(ll)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ia(e),
        t
      ];
    }
    function vr() {
      var e = al(ll)[0], t = pt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ia(e),
        t
      ];
    }
    function qc() {
      return qt(dp);
    }
    function bm() {
      var e = ml(), t = Vt.identifierPrefix;
      if (mt) {
        var l = yo, i = mo;
        l = (i & ~(1 << 32 - rl(i) - 1)).toString(32) + l, t = ":" + t + "R" + l, l = Yg++, 0 < l && (t += "H" + l.toString(32)), t += ":";
      } else
        l = gE++, t = ":" + t + "r" + l.toString(32) + ":";
      return e.memoizedState = t;
    }
    function Sm() {
      return ml().memoizedState = Tn.bind(
        null,
        Qe
      );
    }
    function Tn(e, t) {
      for (var l = e.return; l !== null; ) {
        switch (l.tag) {
          case 24:
          case 3:
            var i = yl(l);
            e = Iu(i);
            var o = ei(l, e, i);
            o !== null && (Ht(o, l, i), zr(o, l, i)), l = Xu(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: l };
            return;
        }
        l = l.return;
      }
    }
    function Em(e, t, l, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = yl(e), l = {
        lane: i,
        revertLane: 0,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, $u(e) ? jc(t, l) : (l = tm(
        e,
        t,
        l,
        i
      ), l !== null && (Ht(
        l,
        e,
        i
      ), kp(
        l,
        t,
        i
      ))), Ye(e, i);
    }
    function $o(e, t, l, i) {
      typeof i == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = yl(e), Ju(
        e,
        t,
        l,
        i
      ), Ye(e, i);
    }
    function Ju(e, t, l, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($u(e)) jc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = K.H;
          K.H = ca;
          try {
            var m = t.lastRenderedState, g = f(m, l);
            if (o.hasEagerState = !0, o.eagerState = g, aa(g, m))
              return Xs(e, t, o, 0), Vt === null && Gs(), !1;
          } catch {
          } finally {
            K.H = d;
          }
        }
        if (l = tm(e, t, o, i), l !== null)
          return Ht(l, e, i), kp(l, t, i), !0;
      }
      return !1;
    }
    function br(e, t, l, i) {
      if (K.T === null && hs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: wd(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, $u(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = tm(
          e,
          l,
          i,
          2
        ), t !== null && Ht(t, e, 2);
      Ye(e, 2);
    }
    function $u(e) {
      var t = e.alternate;
      return e === Qe || t !== null && t === Qe;
    }
    function jc(e, t) {
      Oh = Bg = !0;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function kp(e, t, l) {
      if (l & 4194176) {
        var i = t.lanes;
        i &= e.pendingLanes, l |= i, t.lanes = l, Ln(e, l);
      }
    }
    function ld(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Pb.has(t) || (Pb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Tm(e, t, l, i) {
      var o = e.memoizedState, f = l(i, o);
      if (e.mode & _l) {
        ot(!0);
        try {
          f = l(i, o);
        } finally {
          ot(!1);
        }
      }
      f === void 0 && (t = ce(t) || "Component", Jb.has(t) || (Jb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Rm(e, t, l, i, o, f, d) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        if (l = m.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & _l) {
          ot(!0);
          try {
            l = m.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ot(!1);
          }
        }
        return l === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ce(t) || "Component"
        ), l;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !nr(l, i) || !nr(o, f) : !0;
    }
    function ji(e, t, l, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, i), t.state !== o && (e = ge(e) || "Component", Xb.has(e) || (Xb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), s0.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Wu(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var i in t)
          i !== "ref" && (l[i] = t[i]);
      }
      if (e = e.defaultProps) {
        l === t && (l = Ke({}, l));
        for (var o in e)
          l[o] === void 0 && (l[o] = e[o]);
      }
      return l;
    }
    function Sr(e, t) {
      qg(e), e = Dh ? "An error occurred in the <" + Dh + "> component." : "An error occurred in one of your React components.";
      var l = K.getCurrentStack, i = t.componentStack != null ? t.componentStack : "";
      K.getCurrentStack = function() {
        return i;
      };
      try {
        console.warn(
          `%s

%s
`,
          e,
          `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
        );
      } finally {
        K.getCurrentStack = l;
      }
    }
    function Am(e, t) {
      var l = Dh ? "The above error occurred in the <" + Dh + "> component." : "The above error occurred in one of your React components.", i = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((d0 || "Anonymous") + "."), o = K.getCurrentStack, f = t.componentStack != null ? t.componentStack : "";
      K.getCurrentStack = function() {
        return f;
      };
      try {
        typeof e == "object" && e !== null && typeof e.environmentName == "string" ? Sf(
          "error",
          [
            `%o

%s

%s
`,
            e,
            l,
            i
          ],
          e.environmentName
        )() : console.error(
          `%o

%s

%s
`,
          e,
          l,
          i
        );
      } finally {
        K.getCurrentStack = o;
      }
    }
    function Fu(e) {
      qg(e);
    }
    function Ze(e, t) {
      try {
        Dh = t.source ? ge(t.source) : null, d0 = null;
        var l = t.value;
        if (K.actQueue !== null)
          K.thrownErrors.push(l);
        else {
          var i = e.onUncaughtError;
          i(l, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Rt(e, t, l) {
      try {
        Dh = l.source ? ge(l.source) : null, d0 = ge(t);
        var i = e.onCaughtError;
        i(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function un(e, t, l) {
      return l = Iu(l), l.tag = g0, l.payload = { element: null }, l.callback = function() {
        Ae(t.source, Ze, e, t);
      }, l;
    }
    function Wo(e) {
      return e = Iu(e), e.tag = g0, e;
    }
    function Li(e, t, l, i) {
      var o = l.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Bp(l), Ae(
            i.source,
            Rt,
            t,
            l,
            i
          );
        };
      }
      var d = l.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Bp(l), Ae(
          i.source,
          Rt,
          t,
          l,
          i
        ), typeof o != "function" && (Xf === null ? Xf = /* @__PURE__ */ new Set([this]) : Xf.add(this)), sE(this, i), typeof o == "function" || !(l.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ge(l) || "Unknown"
        );
      });
    }
    function Lc(e, t, l, i, o) {
      if (l.flags |= 32768, vl && Zt(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = l.alternate, t !== null && Or(
          t,
          l,
          o,
          !0
        ), mt && (po = !0), l = Mu.current, l !== null) {
          switch (l.tag) {
            case 13:
              return yc === null ? Yr() : l.alternate === null && vn === Eo && (vn = E0), l.flags &= -257, l.flags |= 65536, l.lanes = o, i === a0 ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ya(e, i, o)), !1;
            case 22:
              return l.flags |= 65536, i === a0 ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : l.add(i)), Ya(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + l.tag + "). This is a bug in React."
          );
        }
        return Ya(e, i, o), Yr(), !1;
      }
      if (mt)
        return po = !0, t = Mu.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== l0 && Uc(
          Dl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            l
          )
        )) : (i !== l0 && Uc(
          Dl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            l
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Dl(i, l), o = un(
          e.stateNode,
          i,
          o
        ), Cr(e, o), vn !== vs && (vn = xh)), !1;
      var f = Dl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        l
      );
      if (ap === null ? ap = [f] : ap.push(f), vn !== vs && (vn = xh), t === null) return !0;
      i = Dl(i, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = o & -o, l.lanes |= e, e = un(
              l.stateNode,
              i,
              e
            ), Cr(l, e), !1;
          case 1:
            if (t = l.type, f = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Xf === null || !Xf.has(f))))
              return l.flags |= 65536, o &= -o, l.lanes |= o, o = Wo(o), Li(
                o,
                e,
                l,
                i
              ), Cr(l, o), !1;
        }
        l = l.return;
      } while (l !== null);
      return !1;
    }
    function pn(e, t, l, i) {
      t.child = e === null ? Yb(t, null, l, i) : ds(
        t,
        e.child,
        l,
        i
      );
    }
    function Fo(e, t, l, i, o) {
      l = l.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var m in i)
          m !== "ref" && (d[m] = i[m]);
      } else d = i;
      return Vi(t), Yl(t), i = zl(
        e,
        t,
        l,
        d,
        f,
        o
      ), m = Vo(), H(), e !== null && !sl ? (hr(e, t, o), _a(e, t, o)) : (mt && m && im(t), t.flags |= 1, pn(e, t, i, o), t.child);
    }
    function Vc(e, t, l, i, o) {
      if (e === null) {
        var f = l.type;
        return typeof f == "function" && !xr(f) && f.defaultProps === void 0 && l.compare === null ? (l = Dc(f), t.tag = 15, t.type = l, Er(t, f), Kp(
          e,
          t,
          l,
          i,
          o
        )) : (e = Rd(
          l.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !fd(e, o)) {
        var d = f.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nr, l(d, i) && e.ref === t.ref)
          return _a(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = fu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Kp(e, t, l, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (nr(f, i) && e.ref === t.ref && t.type === e.type)
          if (sl = !1, t.pendingProps = i = f, fd(e, o))
            e.flags & 131072 && (sl = !0);
          else
            return t.lanes = e.lanes, _a(e, t, o);
      }
      return ud(
        e,
        t,
        l,
        i,
        o
      );
    }
    function cn(e, t, l) {
      var i = t.pendingProps, o = i.children, f = (t.stateNode._pendingVisibility & jy) !== 0, d = e !== null ? e.memoizedState : null;
      if (Gc(e, t), i.mode === "hidden" || f) {
        if (t.flags & 128) {
          if (i = d !== null ? d.baseLanes | l : l, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return ad(
            e,
            t,
            i,
            l
          );
        }
        if (l & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && rr(
            t,
            d !== null ? d.cachePool : null
          ), d !== null ? Js(t, d) : sm(t), $s(t);
        else
          return t.lanes = t.childLanes = 536870912, ad(
            e,
            t,
            d !== null ? d.baseLanes | l : l,
            l
          );
      } else
        d !== null ? (rr(t, d.cachePool), Js(t, d), ya(t), t.memoizedState = null) : (e !== null && rr(t, null), sm(t), ya(t));
      return pn(e, t, o, l), t.child;
    }
    function ad(e, t, l, i) {
      var o = Ws();
      return o = o === null ? null : {
        parent: Fn._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: o
      }, e !== null && rr(t, null), sm(t), $s(t), e !== null && Or(e, t, i, !0), null;
    }
    function Gc(e, t) {
      var l = t.ref;
      if (l === null)
        e !== null && e.ref !== null && (t.flags |= 2097664);
      else {
        if (typeof l != "function" && typeof l != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== l) && (t.flags |= 2097664);
      }
    }
    function ud(e, t, l, i, o) {
      if (l.prototype && typeof l.prototype.render == "function") {
        var f = ce(l) || "Unknown";
        eS[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), eS[f] = !0);
      }
      return t.mode & _l && bi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Er(t, t.type), l.contextTypes && (f = ce(l) || "Unknown", nS[f] || (nS[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Vi(t), Yl(t), l = zl(
        e,
        t,
        l,
        i,
        void 0,
        o
      ), i = Vo(), H(), e !== null && !sl ? (hr(e, t, o), _a(e, t, o)) : (mt && i && im(t), t.flags |= 1, pn(e, t, l, o), t.child);
    }
    function Om(e, t, l, i, o, f) {
      return Vi(t), Yl(t), vo = -1, Fy = e !== null && e.type !== t.type, t.updateQueue = null, l = dr(
        t,
        i,
        l,
        o
      ), wc(e, t), i = Vo(), H(), e !== null && !sl ? (hr(e, t, f), _a(e, t, f)) : (mt && i && im(t), t.flags |= 1, pn(e, t, l, f), t.child);
    }
    function Jp(e, t, l, i, o) {
      switch (k(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var m = o & -o;
          if (t.lanes |= m, d = Vt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          m = Wo(m), Li(
            m,
            d,
            t,
            Dl(f, t)
          ), Cr(t, m);
      }
      if (Vi(t), t.stateNode === null) {
        if (d = _f, f = l.contextType, "contextType" in l && f !== null && (f === void 0 || f.$$typeof !== ea) && !Fb.has(l) && (Fb.add(l), m = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === $r ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ce(l) || "Component",
          m
        )), typeof f == "object" && f !== null && (d = qt(f)), f = new l(i, d), t.mode & _l) {
          ot(!0);
          try {
            f = new l(i, d);
          } finally {
            ot(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = s0, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Gb, typeof l.getDerivedStateFromProps == "function" && d === null && (d = ce(l) || "Component", Qb.has(d) || (Qb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof l.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var g = m = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? m = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (m = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), d !== null || m !== null || g !== null) {
            f = ce(l) || "Component";
            var E = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            kb.has(f) || (kb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              E,
              d !== null ? `
  ` + d : "",
              m !== null ? `
  ` + m : "",
              g !== null ? `
  ` + g : ""
            ));
          }
        }
        f = t.stateNode, d = ce(l) || "Component", f.render || (l.prototype && typeof l.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), l.childContextTypes && !Wb.has(l) && (Wb.add(l), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), l.contextTypes && !$b.has(l) && ($b.add(l), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), l.prototype && l.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ce(l) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), m = f.props !== i, f.props !== void 0 && m && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Zb.has(l) || (Zb.add(l), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          ce(l)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof l.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (m = f.state) && (typeof m != "object" || Kn(m)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof l.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, dd(t), d = l.contextType, f.context = typeof d == "object" && d !== null ? qt(d) : _f, f.state === i && (d = ce(l) || "Component", Kb.has(d) || (Kb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & _l && bi.recordLegacyContextWarning(
          t,
          f
        ), bi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Tm(
          t,
          l,
          d,
          i
        ), f.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ge(t) || "Component"
        ), s0.enqueueReplaceState(
          f,
          f.state,
          null
        )), nf(t, i, f, o), ou(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & vi) !== $t && (t.flags |= 67108864), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var L = t.memoizedProps;
        m = Wu(l, L), f.props = m;
        var ne = f.context;
        g = l.contextType, d = _f, typeof g == "object" && g !== null && (d = qt(g)), E = l.getDerivedStateFromProps, g = typeof E == "function" || typeof f.getSnapshotBeforeUpdate == "function", L = t.pendingProps !== L, g || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (L || ne !== d) && ji(
          t,
          f,
          i,
          d
        ), Lf = !1;
        var V = t.memoizedState;
        f.state = V, nf(t, i, f, o), ou(), ne = t.memoizedState, L || V !== ne || Lf ? (typeof E == "function" && (Tm(
          t,
          l,
          E,
          i
        ), ne = t.memoizedState), (m = Lf || Rm(
          t,
          l,
          m,
          i,
          V,
          ne,
          d
        )) ? (g || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & vi) !== $t && (t.flags |= 67108864)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & vi) !== $t && (t.flags |= 67108864), t.memoizedProps = i, t.memoizedState = ne), f.props = i, f.state = ne, f.context = d, f = m) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & vi) !== $t && (t.flags |= 67108864), f = !1);
      } else {
        f = t.stateNode, hd(e, t), d = t.memoizedProps, g = Wu(l, d), f.props = g, E = t.pendingProps, V = f.context, ne = l.contextType, m = _f, typeof ne == "object" && ne !== null && (m = qt(ne)), L = l.getDerivedStateFromProps, (ne = typeof L == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== E || V !== m) && ji(
          t,
          f,
          i,
          m
        ), Lf = !1, V = t.memoizedState, f.state = V, nf(t, i, f, o), ou();
        var ae = t.memoizedState;
        d !== E || V !== ae || Lf || e !== null && e.dependencies !== null && Dr(e.dependencies) ? (typeof L == "function" && (Tm(
          t,
          l,
          L,
          i
        ), ae = t.memoizedState), (g = Lf || Rm(
          t,
          l,
          g,
          i,
          V,
          ae,
          m
        ) || e !== null && e.dependencies !== null && Dr(e.dependencies)) ? (ne || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, ae, m), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          ae,
          m
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = ae), f.props = i, f.state = ae, f.context = m, f = g) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (m = f, Gc(e, t), d = (t.flags & 128) !== 0, m || d) {
        if (m = t.stateNode, K.getCurrentStack = t === null ? null : Xt, ta = !1, ol = t, d && typeof l.getDerivedStateFromError != "function")
          l = null, Ta = -1;
        else {
          if (Yl(t), l = Rb(m), t.mode & _l) {
            ot(!0);
            try {
              Rb(m);
            } finally {
              ot(!1);
            }
          }
          H();
        }
        t.flags |= 1, e !== null && d ? (t.child = ds(
          t,
          e.child,
          null,
          o
        ), t.child = ds(
          t,
          null,
          l,
          o
        )) : pn(
          e,
          t,
          l,
          o
        ), t.memoizedState = m.state, e = t.child;
      } else
        e = _a(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (zh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ge(t) || "a component"
      ), zh = !0), e;
    }
    function id(e, t, l, i) {
      return Lo(), t.flags |= 256, pn(e, t, l, i), t.child;
    }
    function Er(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = ce(t) || "Unknown", lS[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), lS[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ce(t) || "Unknown", tS[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), tS[t] = !0));
    }
    function Tr(e) {
      return { baseLanes: e, cachePool: Qp() };
    }
    function ul(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= ka), e;
    }
    function sn(e, t, l) {
      var i, o = t.pendingProps;
      B(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : ($n.current & Jy) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (mt) {
          if (f ? Xl(t) : ya(t), mt) {
            var m = Sl, g;
            if (!(g = !m)) {
              e: {
                var E = m;
                for (g = mc; E.nodeType !== 8; ) {
                  if (!g) {
                    g = null;
                    break e;
                  }
                  if (E = Ul(E.nextSibling), E === null) {
                    g = null;
                    break e;
                  }
                }
                g = E;
              }
              g !== null ? (Hi(), t.memoizedState = {
                dehydrated: g,
                treeContext: ss !== null ? { id: mo, overflow: yo } : null,
                retryLane: 536870912
              }, E = Z(18, null, null, $t), E.stateNode = g, E.return = t, t.child = E, ua = t, Sl = null, g = !0) : g = !1, g = !g;
            }
            g && (Mc(
              t,
              m
            ), Ma(t));
          }
          if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null))
            return m.data === Ds ? t.lanes = 16 : t.lanes = 536870912, null;
          Ua(t);
        }
        return m = o.children, o = o.fallback, f ? (ya(t), f = t.mode, m = Xc(
          {
            mode: "hidden",
            children: m
          },
          f
        ), o = ai(
          o,
          f,
          l,
          null
        ), m.return = t, o.return = t, m.sibling = o, t.child = m, f = t.child, f.memoizedState = Tr(l), f.childLanes = ul(
          e,
          i,
          l
        ), t.memoizedState = m0, o) : (Xl(t), Po(
          t,
          m
        ));
      }
      var L = e.memoizedState;
      if (L !== null && (m = L.dehydrated, m !== null)) {
        if (d)
          t.flags & 256 ? (Xl(t), t.flags &= -257, t = Io(
            e,
            t,
            l
          )) : t.memoizedState !== null ? (ya(t), t.child = e.child, t.flags |= 128, t = null) : (ya(t), f = o.fallback, m = t.mode, o = Xc(
            {
              mode: "visible",
              children: o.children
            },
            m
          ), f = ai(
            f,
            m,
            l,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, ds(
            t,
            e.child,
            null,
            l
          ), o = t.child, o.memoizedState = Tr(l), o.childLanes = ul(
            e,
            i,
            l
          ), t.memoizedState = m0, t = f);
        else if (Xl(t), mt && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), m.data === Ds) {
          if (i = m.nextSibling && m.nextSibling.dataset, i) {
            g = i.dgst;
            var ne = i.msg;
            E = i.stck;
            var V = i.cstck;
          }
          m = ne, i = g, o = E, g = f = V, f = Error(m || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = g === void 0 ? null : g, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && n0.set(
            f,
            o
          ), Uc(o), t = Io(
            e,
            t,
            l
          );
        } else if (sl || Or(
          e,
          t,
          l,
          !1
        ), i = (l & e.childLanes) !== 0, sl || i) {
          if (i = Vt, i !== null) {
            if (o = l & -l, o & 42)
              o = 1;
            else
              switch (o) {
                case 2:
                  o = 1;
                  break;
                case 8:
                  o = 4;
                  break;
                case 32:
                  o = 16;
                  break;
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                  o = 64;
                  break;
                case 268435456:
                  o = 134217728;
                  break;
                default:
                  o = 0;
              }
            if (o = o & (i.suspendedLanes | l) ? 0 : o, o !== 0 && o !== L.retryLane)
              throw L.retryLane = o, Xn(
                e,
                o
              ), Ht(
                i,
                e,
                o
              ), Ib;
          }
          m.data === Os || Yr(), t = Io(
            e,
            t,
            l
          );
        } else
          m.data === Os ? (t.flags |= 128, t.child = e.child, t = lg.bind(
            null,
            e
          ), m._reactRetry = t, t = null) : (e = L.treeContext, Sl = Ul(
            m.nextSibling
          ), ua = t, mt = !0, Si = null, po = !1, Cu = null, mc = !1, e !== null && (Hi(), Du[zu++] = mo, Du[zu++] = yo, Du[zu++] = ss, mo = e.id, yo = e.overflow, ss = t), t = Po(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ya(t), f = o.fallback, m = t.mode, g = e.child, E = g.sibling, o = fu(
        g,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = g.subtreeFlags & 31457280, E !== null ? f = fu(
        E,
        f
      ) : (f = ai(
        f,
        m,
        l,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, m = e.child.memoizedState, m === null ? m = Tr(l) : (g = m.cachePool, g !== null ? (E = Fn._currentValue, g = g.parent !== E ? { parent: E, pool: E } : g) : g = Qp(), m = {
        baseLanes: m.baseLanes | l,
        cachePool: g
      }), f.memoizedState = m, f.childLanes = ul(
        e,
        i,
        l
      ), t.memoizedState = m0, o) : (Xl(t), l = e.child, e = l.sibling, l = fu(l, {
        mode: "visible",
        children: o.children
      }), l.return = t, l.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function Po(e, t) {
      return t = Xc(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Xc(e, t) {
      return Ad(e, t, 0, null);
    }
    function Io(e, t, l) {
      return ds(t, e.child, null, l), e = Po(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function cd(e, t, l) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ar(
        e.return,
        t,
        l
      );
    }
    function iu(e, t) {
      var l = Kn(e);
      return e = !l && typeof le(e) == "function", l || e ? (l = l ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        l,
        t,
        l
      ), !1) : !0;
    }
    function ef(e, t, l, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: l,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = l, f.tailMode = o);
    }
    function od(e, t, l) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !aS[o])
        if (aS[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || h0[f] || (f !== "collapsed" && f !== "hidden" ? (h0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (h0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Kn(i)) {
          for (var d = 0; d < i.length; d++)
            if (!iu(i[d], d)) break e;
        } else if (d = le(i), typeof d == "function") {
          if (d = d.call(i))
            for (var m = d.next(), g = 0; !m.done; m = d.next()) {
              if (!iu(m.value, g)) break e;
              g++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (pn(e, t, i, l), i = $n.current, i & Jy)
        i = i & Th | Jy, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && cd(
                e,
                l,
                t
              );
            else if (e.tag === 19)
              cd(e, l, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= Th;
      }
      switch (pe($n, i, t), o) {
        case "forwards":
          for (l = t.child, o = null; l !== null; )
            e = l.alternate, e !== null && fr(e) === null && (o = l), l = l.sibling;
          l = o, l === null ? (o = t.child, t.child = null) : (o = l.sibling, l.sibling = null), ef(
            t,
            !1,
            o,
            l,
            f
          );
          break;
        case "backwards":
          for (l = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && fr(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = l, l = o, o = e;
          }
          ef(
            t,
            !0,
            l,
            null,
            f
          );
          break;
        case "together":
          ef(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function _a(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), Ta = -1, Vf |= t.lanes, !(l & t.childLanes))
        if (e !== null) {
          if (Or(
            e,
            t,
            l,
            !1
          ), (l & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, l = fu(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
          e = e.sibling, l = l.sibling = fu(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function fd(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && Dr(e)));
    }
    function $p(e, t, l) {
      switch (t.tag) {
        case 3:
          ye(
            t,
            t.stateNode.containerInfo
          ), Pu(
            t,
            Fn,
            e.memoizedState.cache
          ), Lo();
          break;
        case 27:
        case 5:
          Wt(t);
          break;
        case 4:
          ye(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Pu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          l & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Xl(t), t.flags |= 128, null) : l & t.child.childLanes ? sn(
              e,
              t,
              l
            ) : (Xl(t), e = _a(
              e,
              t,
              l
            ), e !== null ? e.sibling : null);
          Xl(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (l & t.childLanes) !== 0, i || (Or(
            e,
            t,
            l,
            !1
          ), i = (l & t.childLanes) !== 0), o) {
            if (i)
              return od(
                e,
                t,
                l
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(
            $n,
            $n.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, cn(e, t, l);
        case 24:
          Pu(
            t,
            Fn,
            e.memoizedState.cache
          );
      }
      return _a(e, t, l);
    }
    function rd(e, t, l) {
      if (t._debugNeedsRemount && e !== null) {
        l = Rd(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        );
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, l.index = t.index, l.sibling = t.sibling, l.return = t.return, l.ref = t.ref, l._debugInfo = t._debugInfo, t === i.child)
          i.child = l;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = l;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), l.flags |= 2, l;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          sl = !0;
        else {
          if (!fd(e, l) && !(t.flags & 128))
            return sl = !1, $p(
              e,
              t,
              l
            );
          sl = !!(e.flags & 131072);
        }
      else
        sl = !1, (i = mt) && (Hi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Hi(), Yp(t, xg, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Nf(t.elementType), t.type = e, typeof e == "function")
            xr(e) ? (i = Wu(
              e,
              i
            ), t.tag = 1, t.type = e = Dc(e), t = Jp(
              null,
              t,
              e,
              i,
              l
            )) : (t.tag = 0, Er(t, e), t.type = e = Dc(e), t = ud(
              null,
              t,
              e,
              i,
              l
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === oo) {
                t.tag = 11, t.type = e = nm(e), t = Fo(
                  null,
                  t,
                  e,
                  i,
                  l
                );
                break e;
              } else if (o === nc) {
                t.tag = 14, t = Vc(
                  null,
                  t,
                  e,
                  i,
                  l
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === cl && (t = " Did you wrap a component in React.lazy() more than once?"), e = ce(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return ud(
            e,
            t,
            t.type,
            t.pendingProps,
            l
          );
        case 1:
          return i = t.type, o = Wu(
            i,
            t.pendingProps
          ), Jp(
            e,
            t,
            i,
            o,
            l
          );
        case 3:
          e: {
            if (ye(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            var f = t.pendingProps;
            o = t.memoizedState, i = o.element, hd(e, t), nf(t, f, null, l);
            var d = t.memoizedState;
            if (f = d.cache, Pu(t, Fn, f), f !== o.cache && sd(
              t,
              [Fn],
              l,
              !0
            ), ou(), f = d.element, o.isDehydrated)
              if (o = {
                element: f,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                t = id(
                  e,
                  t,
                  f,
                  l
                );
                break e;
              } else if (f !== i) {
                i = Dl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Uc(i), t = id(
                  e,
                  t,
                  f,
                  l
                );
                break e;
              } else
                for (Sl = Ul(
                  t.stateNode.containerInfo.firstChild
                ), ua = t, mt = !0, Si = null, po = !1, Cu = null, mc = !0, e = Yb(
                  t,
                  null,
                  f,
                  l
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
            else {
              if (Lo(), f === i) {
                t = _a(
                  e,
                  t,
                  l
                );
                break e;
              }
              pn(
                e,
                t,
                f,
                l
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Gc(e, t), e === null ? (e = Xd(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : mt || (e = t.type, l = t.pendingProps, i = De(
            Bn.current
          ), i = Ld(
            i
          ).createElement(e), i[Jn] = t, i[xl] = l, It(i, e, l), ln(i), t.stateNode = i) : t.memoizedState = Xd(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Wt(t), e === null && mt && (o = De(Bn.current), i = qe(), o = t.stateNode = gf(
            t.type,
            t.pendingProps,
            o,
            i,
            !1
          ), po || (i = og(
            o,
            t.type,
            t.pendingProps,
            i
          ), i !== null && (xi(t, 0).serverProps = i)), ua = t, mc = !0, Sl = Ul(
            o.firstChild
          )), i = t.pendingProps.children, e !== null || mt ? pn(
            e,
            t,
            i,
            l
          ) : t.child = ds(
            t,
            null,
            i,
            l
          ), Gc(e, t), t.child;
        case 5:
          return e === null && mt && (f = qe(), i = _s(
            t.type,
            f.ancestorInfo
          ), o = Sl, (d = !o) || (d = Xr(
            o,
            t.type,
            t.pendingProps,
            mc
          ), d !== null ? (t.stateNode = d, po || (f = og(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (xi(t, 0).serverProps = f)), ua = t, Sl = Ul(
            d.firstChild
          ), mc = !1, f = !0) : f = !1, d = !f), d && (i && Mc(t, o), Ma(t))), Wt(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, zt(o, f) ? i = null : d !== null && zt(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = zl(
            e,
            t,
            Fs,
            null,
            null,
            l
          ), dp._currentValue = o), Gc(e, t), pn(
            e,
            t,
            i,
            l
          ), t.child;
        case 6:
          return e === null && mt && (e = t.pendingProps, l = qe().ancestorInfo.current, e = l != null ? Pf(e, l.tag) : !0, l = Sl, (i = !l) || (i = bu(
            l,
            t.pendingProps,
            mc
          ), i !== null ? (t.stateNode = i, ua = t, Sl = null, i = !0) : i = !1, i = !i), i && (e && Mc(t, l), Ma(t))), null;
        case 13:
          return sn(e, t, l);
        case 4:
          return ye(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = ds(
            t,
            null,
            i,
            l
          ) : pn(
            e,
            t,
            i,
            l
          ), t.child;
        case 11:
          return Fo(
            e,
            t,
            t.type,
            t.pendingProps,
            l
          );
        case 7:
          return pn(
            e,
            t,
            t.pendingProps,
            l
          ), t.child;
        case 8:
          return pn(
            e,
            t,
            t.pendingProps.children,
            l
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, pn(
            e,
            t,
            t.pendingProps.children,
            l
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || uS || (uS = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Pu(t, i, f), pn(
            e,
            t,
            o.children,
            l
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Vi(t), o = qt(o), Yl(t), i = u0(
            i,
            o,
            void 0
          ), H(), t.flags |= 1, pn(
            e,
            t,
            i,
            l
          ), t.child;
        case 14:
          return Vc(
            e,
            t,
            t.type,
            t.pendingProps,
            l
          );
        case 15:
          return Kp(
            e,
            t,
            t.type,
            t.pendingProps,
            l
          );
        case 19:
          return od(
            e,
            t,
            l
          );
        case 22:
          return cn(e, t, l);
        case 24:
          return Vi(t), i = qt(Fn), e === null ? (o = Ws(), o === null && (o = Vt, f = Xu(), o.pooledCache = f, pa(f), f !== null && (o.pooledCacheLanes |= l), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, dd(t), Pu(t, Fn, o)) : (e.lanes & l && (hd(e, t), nf(t, null, null, l), ou()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Pu(t, Fn, i)) : (i = f.cache, Pu(t, Fn, i), i !== o.cache && sd(
            t,
            [Fn],
            l,
            !0
          ))), pn(
            e,
            t,
            t.pendingProps.children,
            l
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Rr() {
      Ch = jg = null, Mh = !1;
    }
    function Pu(e, t, l) {
      pe(y0, t._currentValue, e), t._currentValue = l, pe(p0, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== iS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = iS;
    }
    function cu(e, t) {
      e._currentValue = y0.current;
      var l = p0.current;
      W(p0, t), e._currentRenderer = l, W(y0, t);
    }
    function Ar(e, t, l) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === l) break;
        e = e.return;
      }
      e !== l && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function sd(e, t, l, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var m = f;
            f = o;
            for (var g = 0; g < t.length; g++)
              if (m.context === t[g]) {
                f.lanes |= l, m = f.alternate, m !== null && (m.lanes |= l), Ar(
                  f.return,
                  l,
                  e
                ), i || (d = null);
                break e;
              }
            f = m.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= l, f = d.alternate, f !== null && (f.lanes |= l), Ar(
            d,
            l,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Or(e, t, l, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if (o.flags & 524288) f = !0;
          else if (o.flags & 262144) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var m = o.type;
            aa(o.pendingProps.value, d.value) || (e !== null ? e.push(m) : e = [m]);
          }
        } else if (o === ns.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(dp) : e = [dp]);
        }
        o = o.return;
      }
      e !== null && sd(
        t,
        e,
        l,
        i
      ), t.flags |= 262144;
    }
    function Dr(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!aa(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Vi(e) {
      jg = e, Ch = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function qt(e) {
      return Mh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Dm(jg, e);
    }
    function tf(e, t) {
      return jg === null && Vi(e), Dm(e, t);
    }
    function Dm(e, t) {
      var l = t._currentValue;
      if (t = { context: t, memoizedValue: l, next: null }, Ch === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ch = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ch = Ch.next = t;
      return l;
    }
    function dd(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function hd(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Iu(e) {
      return {
        lane: e,
        tag: cS,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ei(e, t, l) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, v0 === i && !rS) {
        var o = ge(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), rS = !0;
      }
      return (en & oa) !== Qa ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Qs(e), _p(e, null, l), t) : (Xs(e, i, t, l), Qs(e));
    }
    function zr(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194176) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, l |= i, t.lanes = l, Ln(e, l);
      }
    }
    function Cr(e, t) {
      var l = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, l === i)) {
        var o = null, f = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var d = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, l = l.next;
          } while (l !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        l = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = l;
        return;
      }
      e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    function ou() {
      if (b0) {
        var e = Rh;
        if (e !== null) throw e;
      }
    }
    function nf(e, t, l, i) {
      b0 = !1;
      var o = e.updateQueue;
      Lf = !1, v0 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, m = o.shared.pending;
      if (m !== null) {
        o.shared.pending = null;
        var g = m, E = g.next;
        g.next = null, d === null ? f = E : d.next = E, d = g;
        var L = e.alternate;
        L !== null && (L = L.updateQueue, m = L.lastBaseUpdate, m !== d && (m === null ? L.firstBaseUpdate = E : m.next = E, L.lastBaseUpdate = g));
      }
      if (f !== null) {
        var ne = o.baseState;
        d = 0, L = E = g = null, m = f;
        do {
          var V = m.lane & -536870913, ae = V !== m.lane;
          if (ae ? (ct & V) === V : (i & V) === V) {
            V !== 0 && V === hs && (b0 = !0), L !== null && (L = L.next = {
              lane: 0,
              tag: m.tag,
              payload: m.payload,
              callback: null,
              next: null
            });
            e: {
              V = e;
              var xe = m, Fe = t, zn = l;
              switch (xe.tag) {
                case oS:
                  if (xe = xe.payload, typeof xe == "function") {
                    Mh = !0;
                    var Dt = xe.call(
                      zn,
                      ne,
                      Fe
                    );
                    if (V.mode & _l) {
                      ot(!0);
                      try {
                        xe.call(zn, ne, Fe);
                      } finally {
                        ot(!1);
                      }
                    }
                    Mh = !1, ne = Dt;
                    break e;
                  }
                  ne = xe;
                  break e;
                case g0:
                  V.flags = V.flags & -65537 | 128;
                case cS:
                  if (Dt = xe.payload, typeof Dt == "function") {
                    if (Mh = !0, xe = Dt.call(
                      zn,
                      ne,
                      Fe
                    ), V.mode & _l) {
                      ot(!0);
                      try {
                        Dt.call(zn, ne, Fe);
                      } finally {
                        ot(!1);
                      }
                    }
                    Mh = !1;
                  } else xe = Dt;
                  if (xe == null) break e;
                  ne = Ke({}, ne, xe);
                  break e;
                case fS:
                  Lf = !0;
              }
            }
            V = m.callback, V !== null && (e.flags |= 64, ae && (e.flags |= 8192), ae = o.callbacks, ae === null ? o.callbacks = [V] : ae.push(V));
          } else
            ae = {
              lane: V,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null
            }, L === null ? (E = L = ae, g = ne) : L = L.next = ae, d |= V;
          if (m = m.next, m === null) {
            if (m = o.shared.pending, m === null)
              break;
            ae = m, m = ae.next, ae.next = null, o.lastBaseUpdate = ae, o.shared.pending = null;
          }
        } while (!0);
        L === null && (g = ne), o.baseState = g, o.firstBaseUpdate = E, o.lastBaseUpdate = L, f === null && (o.shared.lanes = 0), Vf |= d, e.lanes = d, e.memoizedState = ne;
      }
      v0 = null;
    }
    function Mr(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function md(e, t) {
      var l = e.shared.hiddenCallbacks;
      if (l !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < l.length; e++)
          Mr(l[e], t);
    }
    function zm(e, t) {
      var l = e.callbacks;
      if (l !== null)
        for (e.callbacks = null, e = 0; e < l.length; e++)
          Mr(l[e], t);
    }
    function va(e) {
      return (e.mode & bl) !== $t;
    }
    function Cm(e, t) {
      va(e) ? (Ca(), lf(t, e), za()) : lf(t, e);
    }
    function yd(e, t, l) {
      va(e) ? (Ca(), Qc(
        l,
        e,
        t
      ), za()) : Qc(
        l,
        e,
        t
      );
    }
    function lf(e, t) {
      try {
        var l = t.updateQueue, i = l !== null ? l.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          l = o;
          do {
            if ((l.tag & e) === e && ((e & Wn) !== Uu ? Re !== null && typeof Re.markComponentPassiveEffectMountStarted == "function" && Re.markComponentPassiveEffectMountStarted(
              t
            ) : (e & El) !== Uu && Re !== null && typeof Re.markComponentLayoutEffectMountStarted == "function" && Re.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & ia) !== Uu && (Nh = !0), i = Ae(
              t,
              dE,
              l
            ), (e & ia) !== Uu && (Nh = !1), (e & Wn) !== Uu ? Re !== null && typeof Re.markComponentPassiveEffectMountStopped == "function" && Re.markComponentPassiveEffectMountStopped() : (e & El) !== Uu && Re !== null && typeof Re.markComponentLayoutEffectMountStopped == "function" && Re.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = l.tag & El ? "useLayoutEffect" : l.tag & ia ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, Ae(
                t,
                function(m, g) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    m,
                    g
                  );
                },
                f,
                d
              );
            }
            l = l.next;
          } while (l !== o);
        }
      } catch (m) {
        bt(t, t.return, m);
      }
    }
    function Qc(e, t, l) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, m = d.destroy;
              m !== void 0 && (d.destroy = void 0, (e & Wn) !== Uu ? Re !== null && typeof Re.markComponentPassiveEffectUnmountStarted == "function" && Re.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & El) !== Uu && Re !== null && typeof Re.markComponentLayoutEffectUnmountStarted == "function" && Re.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & ia) !== Uu && (Nh = !0), Ae(
                t,
                hE,
                t,
                l,
                m
              ), (e & ia) !== Uu && (Nh = !1), (e & Wn) !== Uu ? Re !== null && typeof Re.markComponentPassiveEffectUnmountStopped == "function" && Re.markComponentPassiveEffectUnmountStopped() : (e & El) !== Uu && Re !== null && typeof Re.markComponentLayoutEffectUnmountStopped == "function" && Re.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (g) {
        bt(t, t.return, g);
      }
    }
    function pd(e, t) {
      va(e) ? (Ca(), lf(t, e), za()) : lf(t, e);
    }
    function gd(e, t, l) {
      va(e) ? (Ca(), Qc(
        l,
        e,
        t
      ), za()) : Qc(
        l,
        e,
        t
      );
    }
    function Mm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || zh || (l.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          ge(e) || "instance"
        ), l.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ge(e) || "instance"
        ));
        try {
          Ae(
            e,
            zm,
            t,
            l
          );
        } catch (i) {
          bt(e, e.return, i);
        }
      }
    }
    function Um(e, t, l) {
      return e.getSnapshotBeforeUpdate(t, l);
    }
    function Wp(e, t) {
      var l = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || zh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ge(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ge(e) || "instance"
      ));
      try {
        var o = Wu(
          e.type,
          l,
          e.elementType === e.type
        ), f = Ae(
          e,
          Um,
          t,
          o,
          i
        );
        l = sS, f !== void 0 || l.has(e.type) || (l.add(e.type), Ae(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ge(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        bt(e, e.return, d);
      }
    }
    function Hm(e, t, l) {
      l.props = Wu(
        e.type,
        e.memoizedProps
      ), l.state = e.memoizedState, va(e) ? (Ca(), Ae(
        e,
        Mb,
        e,
        t,
        l
      ), za()) : Ae(
        e,
        Mb,
        e,
        t,
        l
      );
    }
    function Hv(e) {
      var t = e.ref;
      if (t !== null) {
        var l = e.stateNode;
        if (typeof t == "function")
          if (va(e))
            try {
              Ca(), e.refCleanup = t(l);
            } finally {
              za();
            }
          else e.refCleanup = t(l);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ge(e)
          ), t.current = l;
      }
    }
    function ti(e, t) {
      try {
        Ae(e, Hv, e);
      } catch (l) {
        bt(e, t, l);
      }
    }
    function Ml(e, t) {
      var l = e.ref, i = e.refCleanup;
      if (l !== null)
        if (typeof i == "function")
          try {
            if (va(e))
              try {
                Ca(), Ae(e, i);
              } finally {
                za(e);
              }
            else Ae(e, i);
          } catch (o) {
            bt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof l == "function")
          try {
            if (va(e))
              try {
                Ca(), Ae(e, l, null);
              } finally {
                za(e);
              }
            else Ae(e, l, null);
          } catch (o) {
            bt(e, t, o);
          }
        else l.current = null;
    }
    function xm(e, t, l, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Cg && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        l
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        l
      );
    }
    function wm(e, t, l, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Cg && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        l
      );
    }
    function _m(e) {
      var t = e.type, l = e.memoizedProps, i = e.stateNode;
      try {
        Ae(
          e,
          wt,
          i,
          t,
          l,
          e
        );
      } catch (o) {
        bt(e, e.return, o);
      }
    }
    function Nm(e, t, l) {
      try {
        Ae(
          e,
          Pl,
          e.stateNode,
          e.type,
          l,
          t,
          e
        );
      } catch (i) {
        bt(e, e.return, i);
      }
    }
    function Fp(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4;
    }
    function Bm(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Fp(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function vd(e, t, l) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? l.nodeType === 8 ? l.parentNode.insertBefore(e, t) : l.insertBefore(e, t) : (l.nodeType === 8 ? (t = l.parentNode, t.insertBefore(e, l)) : (t = l, t.appendChild(e)), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = La));
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (vd(e, t, l), e = e.sibling; e !== null; )
          vd(e, t, l), e = e.sibling;
    }
    function Gi(e, t, l) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (i !== 4 && i !== 27 && (e = e.child, e !== null))
        for (Gi(e, t, l), e = e.sibling; e !== null; )
          Gi(e, t, l), e = e.sibling;
    }
    function Ym(e) {
      if (e.tag !== 27) {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Fp(t)) {
              var l = t;
              break e;
            }
            t = t.return;
          }
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        }
        switch (l.tag) {
          case 27:
            t = l.stateNode, l = Bm(e), Gi(e, l, t);
            break;
          case 5:
            t = l.stateNode, l.flags & 32 && (vu(t), l.flags &= -33), l = Bm(e), Gi(e, l, t);
            break;
          case 3:
          case 4:
            t = l.stateNode.containerInfo, l = Bm(e), vd(
              e,
              l,
              t
            );
            break;
          default:
            throw Error(
              "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
            );
        }
      }
    }
    function bd(e, t) {
      if (e = e.containerInfo, q0 = uv, e = xp(e), Vs(e)) {
        if ("selectionStart" in e)
          var l = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            l = (l = e.ownerDocument) && l.defaultView || window;
            var i = l.getSelection && l.getSelection();
            if (i && i.rangeCount !== 0) {
              l = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                l.nodeType, f.nodeType;
              } catch {
                l = null;
                break e;
              }
              var d = 0, m = -1, g = -1, E = 0, L = 0, ne = e, V = null;
              t: for (; ; ) {
                for (var ae; ne !== l || o !== 0 && ne.nodeType !== 3 || (m = d + o), ne !== f || i !== 0 && ne.nodeType !== 3 || (g = d + i), ne.nodeType === 3 && (d += ne.nodeValue.length), (ae = ne.firstChild) !== null; )
                  V = ne, ne = ae;
                for (; ; ) {
                  if (ne === e) break t;
                  if (V === l && ++E === o && (m = d), V === f && ++L === i && (g = d), (ae = ne.nextSibling) !== null) break;
                  ne = V, V = ne.parentNode;
                }
                ne = ae;
              }
              l = m === -1 || g === -1 ? null : { start: m, end: g };
            } else l = null;
          }
        l = l || { start: 0, end: 0 };
      } else l = null;
      for (j0 = {
        focusedElem: e,
        selectionRange: l
      }, uv = !1, dl = t; dl !== null; )
        if (t = dl, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, dl = e;
        else
          for (; dl !== null; ) {
            switch (e = t = dl, l = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                o & 1024 && l !== null && Wp(e, l);
                break;
              case 3:
                if (o & 1024) {
                  if (e = e.stateNode.containerInfo, l = e.nodeType, l === 9)
                    Fi(e);
                  else if (l === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Fi(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (o & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, dl = e;
              break;
            }
            dl = t.return;
          }
      return t = hS, hS = !1, t;
    }
    function qm(e, t, l) {
      var i = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Na(e, l), i & 4 && Cm(l, El | Hu);
          break;
        case 1:
          if (Na(e, l), i & 4)
            if (e = l.stateNode, t === null)
              l.type.defaultProps || "ref" in l.memoizedProps || zh || (e.props !== l.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ge(l) || "instance"
              ), e.state !== l.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ge(l) || "instance"
              )), va(l) ? (Ca(), Ae(
                l,
                i0,
                l,
                e
              ), za()) : Ae(
                l,
                i0,
                l,
                e
              );
            else {
              var o = Wu(
                l.type,
                t.memoizedProps
              );
              t = t.memoizedState, l.type.defaultProps || "ref" in l.memoizedProps || zh || (e.props !== l.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ge(l) || "instance"
              ), e.state !== l.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ge(l) || "instance"
              )), va(l) ? (Ca(), Ae(
                l,
                Db,
                l,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), za()) : Ae(
                l,
                Db,
                l,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Mm(l), i & 512 && ti(l, l.return);
          break;
        case 3:
          if (t = Vu(), Na(e, l), i & 64 && (i = l.updateQueue, i !== null)) {
            if (o = null, l.child !== null)
              switch (l.child.tag) {
                case 27:
                case 5:
                  o = l.child.stateNode;
                  break;
                case 1:
                  o = l.child.stateNode;
              }
            try {
              Ae(
                l,
                zm,
                i,
                o
              );
            } catch (m) {
              bt(l, l.return, m);
            }
          }
          e.effectDuration += Zs(t);
          break;
        case 26:
          Na(e, l), i & 512 && ti(l, l.return);
          break;
        case 27:
        case 5:
          Na(e, l), t === null && i & 4 && _m(l), i & 512 && ti(l, l.return);
          break;
        case 12:
          if (i & 4) {
            i = Vu(), Na(e, l), e = l.stateNode, e.effectDuration += zc(i);
            try {
              Ae(
                l,
                xm,
                l,
                t,
                zg,
                e.effectDuration
              );
            } catch (m) {
              bt(l, l.return, m);
            }
          } else Na(e, l);
          break;
        case 13:
          Na(e, l), i & 4 && ni(e, l);
          break;
        case 22:
          if (o = l.memoizedState !== null || bo, !o) {
            t = t !== null && t.memoizedState !== null || gn;
            var f = bo, d = gn;
            bo = o, (gn = t) && !d ? Ba(
              e,
              l,
              (l.subtreeFlags & 8772) !== 0
            ) : Na(e, l), bo = f, gn = d;
          }
          i & 512 && (l.memoizedProps.mode === "manual" ? ti(l, l.return) : Ml(l, l.return));
          break;
        default:
          Na(e, l);
      }
    }
    function jm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Da(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Hn(e, t, l) {
      for (l = l.child; l !== null; )
        Xi(
          e,
          t,
          l
        ), l = l.sibling;
    }
    function Xi(e, t, l) {
      if (fl && typeof fl.onCommitFiberUnmount == "function")
        try {
          fl.onCommitFiberUnmount(zf, l);
        } catch (f) {
          gl || (gl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (l.tag) {
        case 26:
          gn || Ml(l, t), Hn(
            e,
            t,
            l
          ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          gn || Ml(l, t);
          var i = qn, o = Xa;
          for (qn = l.stateNode, Hn(
            e,
            t,
            l
          ), l = l.stateNode, e = l.attributes; e.length; )
            l.removeAttributeNode(e[0]);
          Da(l), qn = i, Xa = o;
          break;
        case 5:
          gn || Ml(l, t);
        case 6:
          if (i = qn, o = Xa, qn = null, Hn(
            e,
            t,
            l
          ), qn = i, Xa = o, qn !== null)
            if (Xa)
              try {
                Ae(
                  l,
                  di,
                  qn,
                  l.stateNode
                );
              } catch (f) {
                bt(
                  l,
                  t,
                  f
                );
              }
            else
              try {
                Ae(
                  l,
                  ty,
                  qn,
                  l.stateNode
                );
              } catch (f) {
                bt(
                  l,
                  t,
                  f
                );
              }
          break;
        case 18:
          qn !== null && (Xa ? (e = qn, l = l.stateNode, e.nodeType === 8 ? Jt(e.parentNode, l) : e.nodeType === 1 && Jt(e, l), Rf(e)) : Jt(qn, l.stateNode));
          break;
        case 4:
          i = qn, o = Xa, qn = l.stateNode.containerInfo, Xa = !0, Hn(
            e,
            t,
            l
          ), qn = i, Xa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          gn || Qc(
            ia,
            l,
            t
          ), gn || yd(
            l,
            t,
            El
          ), Hn(
            e,
            t,
            l
          );
          break;
        case 1:
          gn || (Ml(l, t), i = l.stateNode, typeof i.componentWillUnmount == "function" && Hm(
            l,
            t,
            i
          )), Hn(
            e,
            t,
            l
          );
          break;
        case 21:
          Hn(
            e,
            t,
            l
          );
          break;
        case 22:
          gn || Ml(l, t), gn = (i = gn) || l.memoizedState !== null, Hn(
            e,
            t,
            l
          ), gn = i;
          break;
        default:
          Hn(
            e,
            t,
            l
          );
      }
    }
    function ni(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          Ae(
            t,
            no,
            e
          );
        } catch (l) {
          bt(t, t.return, l);
        }
    }
    function Zc(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new dS()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dS()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function Ur(e, t) {
      var l = Zc(e);
      t.forEach(function(i) {
        var o = _n.bind(null, e, i);
        if (!l.has(i)) {
          if (l.add(i), vl)
            if (Uh !== null && Hh !== null)
              Zt(Hh, Uh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Lm(e, t, l) {
      Uh = l, Hh = e, Vm(t, e), Hh = Uh = null;
    }
    function kl(e, t) {
      var l = t.deletions;
      if (l !== null)
        for (var i = 0; i < l.length; i++) {
          var o = e, f = t, d = l[i], m = f;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 27:
              case 5:
                qn = m.stateNode, Xa = !1;
                break e;
              case 3:
                qn = m.stateNode.containerInfo, Xa = !0;
                break e;
              case 4:
                qn = m.stateNode.containerInfo, Xa = !0;
                break e;
            }
            m = m.return;
          }
          if (qn === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Xi(o, f, d), qn = null, Xa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Vm(t, e), t = t.sibling;
    }
    function Vm(e, t) {
      var l = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kl(t, e), xn(e), i & 4 && (Qc(
            ia | Hu,
            e,
            e.return
          ), lf(ia | Hu, e), yd(
            e,
            e.return,
            El | Hu
          ));
          break;
        case 1:
          kl(t, e), xn(e), i & 512 && (gn || l === null || Ml(l, l.return)), i & 64 && bo && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? i : l.concat(i))));
          break;
        case 26:
          var o = Ei;
          if (kl(t, e), xn(e), i & 512 && (gn || l === null || Ml(l, l.return)), i & 4)
            if (t = l !== null ? l.memoizedState : null, i = e.memoizedState, l === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, l = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[oc] || o[Jn] || o.namespaceURI === la || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), It(o, i, l), o[Jn] = e, ln(o), i = o;
                        break e;
                      case "link":
                        var f = iy(
                          "link",
                          "href",
                          t
                        ).get(i + (l.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (l.href == null ? null : l.href) && o.getAttribute("rel") === (l.rel == null ? null : l.rel) && o.getAttribute("title") === (l.title == null ? null : l.title) && o.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), It(o, i, l), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = iy(
                          "meta",
                          "content",
                          t
                        ).get(i + (l.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], nt(
                              l.content,
                              "content"
                            ), o.getAttribute("content") === (l.content == null ? null : "" + l.content) && o.getAttribute("name") === (l.name == null ? null : l.name) && o.getAttribute("property") === (l.property == null ? null : l.property) && o.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && o.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), It(o, i, l), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Jn] = e, ln(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  cy(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Su(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : t.count--, i === null ? cy(
                o,
                e.type,
                e.stateNode
              ) : Su(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Nm(
                e,
                e.memoizedProps,
                l.memoizedProps
              );
          break;
        case 27:
          if (i & 4 && e.alternate === null) {
            o = e.stateNode, f = e.memoizedProps;
            try {
              for (d = o.firstChild; d; ) {
                var m = d.nextSibling, g = d.nodeName;
                d[oc] || g === "HEAD" || g === "BODY" || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || o.removeChild(d), d = m;
              }
              Ae(
                e,
                ly,
                e.type,
                f,
                o,
                e
              );
            } catch (L) {
              bt(e, e.return, L);
            }
          }
        case 5:
          if (kl(t, e), xn(e), i & 512 && (gn || l === null || Ml(l, l.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              Ae(e, vu, t);
            } catch (L) {
              bt(e, e.return, L);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Nm(
            e,
            t,
            l !== null ? l.memoizedProps : t
          )), i & 1024 && (S0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (kl(t, e), xn(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, l = l !== null ? l.memoizedProps : i, t = e.stateNode;
            try {
              Ae(
                e,
                pf,
                t,
                l,
                i
              );
            } catch (L) {
              bt(e, e.return, L);
            }
          }
          break;
        case 3:
          if (o = Vu(), nv = null, f = Ei, Ei = vf(t.containerInfo), kl(t, e), Ei = f, xn(e), i & 4 && l !== null && l.memoizedState.isDehydrated)
            try {
              Ae(
                e,
                Gd,
                t.containerInfo
              );
            } catch (L) {
              bt(e, e.return, L);
            }
          S0 && (S0 = !1, Hr(e)), t.effectDuration += Zs(o);
          break;
        case 4:
          i = Ei, Ei = vf(
            e.stateNode.containerInfo
          ), kl(t, e), xn(e), Ei = i;
          break;
        case 12:
          i = Vu(), kl(t, e), xn(e), e.stateNode.effectDuration += zc(i);
          break;
        case 13:
          kl(t, e), xn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (D0 = Ru()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ur(e, i)));
          break;
        case 22:
          i & 512 && (gn || l === null || Ml(l, l.return)), d = e.memoizedState !== null, m = l !== null && l.memoizedState !== null, g = bo;
          var E = gn;
          if (bo = g || d, gn = E || m, kl(t, e), gn = E, bo = g, xn(e), t = e.stateNode, t._current = e, t._visibility &= -3, t._visibility |= t._pendingVisibility & jy, i & 8192 && (t._visibility = d ? t._visibility & -2 : t._visibility | Dg, d && (t = bo || gn, l === null || m || t || li(e)), e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
            e: for (l = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                if (l === null) {
                  m = l = t;
                  try {
                    o = m.stateNode, d ? Ae(
                      m,
                      Wi,
                      o
                    ) : Ae(
                      m,
                      ny,
                      m.stateNode,
                      m.memoizedProps
                    );
                  } catch (L) {
                    bt(m, m.return, L);
                  }
                }
              } else if (t.tag === 6) {
                if (l === null) {
                  m = t;
                  try {
                    f = m.stateNode, d ? Ae(
                      m,
                      to,
                      f
                    ) : Ae(
                      m,
                      Sa,
                      f,
                      m.memoizedProps
                    );
                  } catch (L) {
                    bt(m, m.return, L);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                l === t && (l = null), t = t.return;
              }
              l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (l = i.retryQueue, l !== null && (i.retryQueue = null, Ur(e, l))));
          break;
        case 19:
          kl(t, e), xn(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, Ur(e, i)));
          break;
        case 21:
          break;
        default:
          kl(t, e), xn(e);
      }
    }
    function xn(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          Ae(e, Ym, e);
        } catch (l) {
          bt(e, e.return, l);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Hr(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Hr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Pp(e, t, l) {
      Uh = l, Hh = t, qm(t, e.alternate, e), Hh = Uh = null;
    }
    function Na(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          qm(e, t.alternate, t), t = t.sibling;
    }
    function Gm(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yd(
            e,
            e.return,
            El
          ), li(e);
          break;
        case 1:
          Ml(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Hm(
            e,
            e.return,
            t
          ), li(e);
          break;
        case 26:
        case 27:
        case 5:
          Ml(e, e.return), li(e);
          break;
        case 22:
          Ml(e, e.return), e.memoizedState === null && li(e);
          break;
        default:
          li(e);
      }
    }
    function li(e) {
      for (e = e.child; e !== null; )
        Gm(e), e = e.sibling;
    }
    function Xm(e, t, l, i) {
      var o = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ba(
            e,
            l,
            i
          ), Cm(l, El);
          break;
        case 1:
          if (Ba(
            e,
            l,
            i
          ), t = l.stateNode, typeof t.componentDidMount == "function" && Ae(
            l,
            i0,
            l,
            t
          ), t = l.updateQueue, t !== null) {
            e = l.stateNode;
            try {
              Ae(
                l,
                md,
                t,
                e
              );
            } catch (f) {
              bt(l, l.return, f);
            }
          }
          i && o & 64 && Mm(l), ti(l, l.return);
          break;
        case 26:
        case 27:
        case 5:
          Ba(
            e,
            l,
            i
          ), i && t === null && o & 4 && _m(l), ti(l, l.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Vu(), Ba(
              e,
              l,
              i
            ), i = l.stateNode, i.effectDuration += zc(o);
            try {
              Ae(
                l,
                xm,
                l,
                t,
                zg,
                i.effectDuration
              );
            } catch (f) {
              bt(l, l.return, f);
            }
          } else
            Ba(
              e,
              l,
              i
            );
          break;
        case 13:
          Ba(
            e,
            l,
            i
          ), i && o & 4 && ni(e, l);
          break;
        case 22:
          l.memoizedState === null && Ba(
            e,
            l,
            i
          ), ti(l, l.return);
          break;
        default:
          Ba(
            e,
            l,
            i
          );
      }
    }
    function Ba(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Xm(
          e,
          t.alternate,
          t,
          l
        ), t = t.sibling;
    }
    function Sd(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && pa(e), l != null && Hc(l));
    }
    function Ed(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (pa(t), e != null && Hc(e));
    }
    function Qi(e, t, l, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Qm(
            e,
            t,
            l,
            i
          ), t = t.sibling;
    }
    function Qm(e, t, l, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Qi(
            e,
            t,
            l,
            i
          ), o & 2048 && pd(t, Wn | Hu);
          break;
        case 3:
          var f = Vu();
          Qi(
            e,
            t,
            l,
            i
          ), o & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (pa(t), l != null && Hc(l))), e.passiveEffectDuration += Zs(f);
          break;
        case 12:
          if (o & 2048) {
            f = Vu(), Qi(
              e,
              t,
              l,
              i
            ), e = t.stateNode, e.passiveEffectDuration += zc(f);
            try {
              Ae(
                t,
                wm,
                t,
                t.alternate,
                zg,
                e.passiveEffectDuration
              );
            } catch (d) {
              bt(t, t.return, d);
            }
          } else
            Qi(
              e,
              t,
              l,
              i
            );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null ? f._visibility & os ? Qi(
            e,
            t,
            l,
            i
          ) : af(
            e,
            t
          ) : f._visibility & os ? Qi(
            e,
            t,
            l,
            i
          ) : (f._visibility |= os, Pt(
            e,
            t,
            l,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Sd(
            t.alternate,
            t
          );
          break;
        case 24:
          Qi(
            e,
            t,
            l,
            i
          ), o & 2048 && Ed(t.alternate, t);
          break;
        default:
          Qi(
            e,
            t,
            l,
            i
          );
      }
    }
    function Pt(e, t, l, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        wn(
          e,
          t,
          l,
          i,
          o
        ), t = t.sibling;
    }
    function wn(e, t, l, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Pt(
            e,
            t,
            l,
            i,
            o
          ), pd(t, Wn);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & os ? Pt(
            e,
            t,
            l,
            i,
            o
          ) : af(
            e,
            t
          ) : (d._visibility |= os, Pt(
            e,
            t,
            l,
            i,
            o
          )), o && f & 2048 && Sd(
            t.alternate,
            t
          );
          break;
        case 24:
          Pt(
            e,
            t,
            l,
            i,
            o
          ), o && f & 2048 && Ed(t.alternate, t);
          break;
        default:
          Pt(
            e,
            t,
            l,
            i,
            o
          );
      }
    }
    function af(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var l = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              af(
                l,
                i
              ), o & 2048 && Sd(
                i.alternate,
                i
              );
              break;
            case 24:
              af(
                l,
                i
              ), o & 2048 && Ed(
                i.alternate,
                i
              );
              break;
            default:
              af(
                l,
                i
              );
          }
          t = t.sibling;
        }
    }
    function kc(e) {
      if (e.subtreeFlags & Py)
        for (e = e.child; e !== null; )
          Zm(e), e = e.sibling;
    }
    function Zm(e) {
      switch (e.tag) {
        case 26:
          kc(e), e.flags & Py && e.memoizedState !== null && xv(
            Ei,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          kc(e);
          break;
        case 3:
        case 4:
          var t = Ei;
          Ei = vf(
            e.stateNode.containerInfo
          ), kc(e), Ei = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Py, Py = 16777216, kc(e), Py = t) : kc(e));
          break;
        default:
          kc(e);
      }
    }
    function km(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function uf(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var l = 0; l < t.length; l++) {
            var i = t[l];
            dl = i, Jm(
              i,
              e
            );
          }
        km(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          cf(e), e = e.sibling;
    }
    function cf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          uf(e), e.flags & 2048 && gd(
            e,
            e.return,
            Wn | Hu
          );
          break;
        case 3:
          var t = Vu();
          uf(e), e.stateNode.passiveEffectDuration += Zs(t);
          break;
        case 12:
          t = Vu(), uf(e), e.stateNode.passiveEffectDuration += zc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & os && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5, of(e)) : uf(e);
          break;
        default:
          uf(e);
      }
    }
    function of(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var l = 0; l < t.length; l++) {
            var i = t[l];
            dl = i, Jm(
              i,
              e
            );
          }
        km(e);
      }
      for (e = e.child; e !== null; )
        Km(e), e = e.sibling;
    }
    function Km(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          gd(
            e,
            e.return,
            Wn
          ), of(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & os && (t._visibility &= -5, of(e));
          break;
        default:
          of(e);
      }
    }
    function Jm(e, t) {
      for (; dl !== null; ) {
        var l = dl, i = l;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            gd(
              i,
              t,
              Wn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && pa(i));
            break;
          case 24:
            Hc(i.memoizedState.cache);
        }
        if (i = l.child, i !== null) i.return = l, dl = i;
        else
          e: for (l = e; dl !== null; ) {
            i = dl;
            var o = i.sibling, f = i.return;
            if (jm(i), i === l) {
              dl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, dl = o;
              break e;
            }
            dl = f;
          }
      }
    }
    function Ip(e, t, l, i) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, mS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function xr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function fu(e, t) {
      var l = e.alternate;
      switch (l === null ? (l = Z(
        e.tag,
        t,
        e.key,
        e.mode
      ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l._debugOwner = e._debugOwner, l._debugHookTypes = e._debugHookTypes, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null, l.actualDuration = -0, l.actualStartTime = -1.1), l.flags = e.flags & 31457280, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l.selfBaseDuration = e.selfBaseDuration, l.treeBaseDuration = e.treeBaseDuration, l._debugInfo = e._debugInfo, l._debugNeedsRemount = e._debugNeedsRemount, l.tag) {
        case 0:
        case 15:
          l.type = Dc(e.type);
          break;
        case 1:
          l.type = Dc(e.type);
          break;
        case 11:
          l.type = nm(e.type);
      }
      return l;
    }
    function Td(e, t) {
      e.flags &= 31457282;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = l.selfBaseDuration, e.treeBaseDuration = l.treeBaseDuration), e;
    }
    function Rd(e, t, l, i, o, f) {
      var d = 0, m = e;
      if (typeof e == "function")
        xr(e) && (d = 1), m = Dc(m);
      else if (typeof e == "string")
        d = qe(), d = sg(e, l, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Eu:
            return ai(
              l.children,
              o,
              f,
              t
            );
          case Wd:
            d = 8, o |= _l, o |= vi;
            break;
          case Fd:
            return e = l, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Z(12, e, t, i | bl), t.elementType = Fd, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Pd:
            return t = Z(13, l, t, o), t.elementType = Pd, t.lanes = f, t;
          case Wr:
            return t = Z(19, l, t, o), t.elementType = Wr, t.lanes = f, t;
          case fo:
            return Ad(l, o, f, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ft:
                case ea:
                  d = 10;
                  break e;
                case $r:
                  d = 9;
                  break e;
                case oo:
                  d = 11, m = nm(m);
                  break e;
                case nc:
                  d = 14;
                  break e;
                case cl:
                  d = 16, m = null;
                  break e;
              }
            m = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : Kn(e) ? l = "array" : e !== void 0 && e.$$typeof === tc ? (l = "<" + (ce(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, (d = i ? Ee(i) : null) && (m += `

Check the render method of \`` + d + "`."), d = 29, l = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (l + "." + m)
            ), m = null;
        }
      return t = Z(d, l, t, o), t.elementType = e, t.type = m, t.lanes = f, t._debugOwner = i, t;
    }
    function ff(e, t, l) {
      return t = Rd(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        l
      ), t._debugOwner = e._owner, t;
    }
    function ai(e, t, l, i) {
      return e = Z(7, e, i, t), e.lanes = l, e;
    }
    function Ad(e, t, l, i) {
      e = Z(22, e, i, t), e.elementType = fo, e.lanes = l;
      var o = {
        _visibility: Dg,
        _pendingVisibility: Dg,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function() {
          var f = o, d = f._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (!(f._pendingVisibility & jy)) {
            var m = Xn(d, 2);
            m !== null && (f._pendingVisibility |= jy, Ht(m, d, 2));
          }
        },
        attach: function() {
          var f = o, d = f._current;
          if (d === null)
            throw Error(
              "Calling Offscreen.detach before instance handle has been set."
            );
          if (f._pendingVisibility & jy) {
            var m = Xn(d, 2);
            m !== null && (f._pendingVisibility &= -3, Ht(m, d, 2));
          }
        }
      };
      return e.stateNode = o, e;
    }
    function Od(e, t, l) {
      return e = Z(6, e, null, t), e.lanes = l, e;
    }
    function wr(e, t, l) {
      return t = Z(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ru(e) {
      e.flags |= 4;
    }
    function su(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & wu) !== zs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Qd(t)) {
        if (t = Mu.current, t !== null && ((ct & 4194176) === ct ? yc !== null : (ct & 62914560) !== ct && !(ct & 536870912) || t !== yc))
          throw ky = a0, Sb;
        e.flags |= 8192;
      }
    }
    function rf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Oa() : 536870912, e.lanes |= t, Ss |= t);
    }
    function _r(e, t) {
      if (!mt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var l = null; t !== null; )
              t.alternate !== null && (l = t), t = t.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          case "collapsed":
            l = e.tail;
            for (var i = null; l !== null; )
              l.alternate !== null && (i = l), l = l.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function jt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, i = 0;
      if (t)
        if ((e.mode & bl) !== $t) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            l |= f.lanes | f.childLanes, i |= f.subtreeFlags & 31457280, i |= f.flags & 31457280, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            l |= o.lanes | o.childLanes, i |= o.subtreeFlags & 31457280, i |= o.flags & 31457280, o.return = e, o = o.sibling;
      else if ((e.mode & bl) !== $t) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          l |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          l |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = l, t;
    }
    function $m(e, t, l) {
      var i = t.pendingProps;
      switch (cm(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return jt(t), null;
        case 1:
          return jt(t), null;
        case 3:
          return i = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), cu(Fn, t), Ve(t), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (jo(t) ? (ks(), ru(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Si !== null && (ui(Si), Si = null))), jt(t), null;
        case 26:
          return l = t.memoizedState, e === null ? (ru(t), l !== null ? (jt(t), su(
            t,
            l
          )) : (jt(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (ru(t), jt(t), su(
            t,
            l
          )) : (jt(t), t.flags &= -16777217) : (e.memoizedProps !== i && ru(t), jt(t), t.flags &= -16777217), null;
        case 27:
          $e(t), l = De(Bn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && ru(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return jt(t), null;
            }
            e = qe(), jo(t) ? qp(t) : (e = gf(
              o,
              i,
              l,
              e,
              !0
            ), t.stateNode = e, ru(t));
          }
          return jt(t), null;
        case 5:
          if ($e(t), l = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && ru(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return jt(t), null;
            }
            if (o = qe(), jo(t))
              qp(t);
            else {
              switch (e = De(Bn.current), _s(l, o.ancestorInfo), o = o.context, e = Ld(e), o) {
                case Yh:
                  e = e.createElementNS(la, l);
                  break;
                case tv:
                  e = e.createElementNS(
                    dc,
                    l
                  );
                  break;
                default:
                  switch (l) {
                    case "svg":
                      e = e.createElementNS(
                        la,
                        l
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        dc,
                        l
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(l, {
                        is: i.is
                      }) : e.createElement(l), l.indexOf("-") === -1 && (l !== l.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        l
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Tu.call(
                        CS,
                        l
                      ) || (CS[l] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        l
                      )));
                  }
              }
              e[Jn] = t, e[xl] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (It(e, l, i), l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && ru(t);
            }
          }
          return jt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && ru(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = De(Bn.current), l = qe(), jo(t)) {
              e = t.stateNode, i = t.memoizedProps, o = !po, l = null;
              var f = ua;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Qr(
                      e,
                      i,
                      l
                    ), o !== null && (xi(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    l = f.memoizedProps, o && (o = Qr(
                      e,
                      i,
                      l
                    ), o !== null && (xi(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Jn] = t, e = !!(e.nodeValue === i || l !== null && l.suppressHydrationWarning === !0 || Yd(e.nodeValue, i)), e || Ma(t);
            } else
              l = l.ancestorInfo.current, l != null && Pf(i, l.tag), e = Ld(e).createTextNode(
                i
              ), e[Jn] = t, t.stateNode = e;
          }
          return jt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = jo(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Jn] = t, jt(t), (t.mode & bl) !== $t && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                ks(), Lo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, jt(t), (t.mode & bl) !== $t && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              Si !== null && (ui(Si), Si = null), o = !0;
            if (!o)
              return t.flags & 256 ? (Ua(t), t) : (Ua(t), null);
          }
          return Ua(t), t.flags & 128 ? (t.lanes = l, (t.mode & bl) !== $t && lr(t), t) : (i = i !== null, e = e !== null && e.memoizedState !== null, i && (l = t.child, o = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (o = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== o && (l.flags |= 2048)), i !== e && i && (t.child.flags |= 8192), rf(t, t.updateQueue), jt(t), (t.mode & bl) !== $t && i && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Ve(t), e === null && Nd(
            t.stateNode.containerInfo
          ), jt(t), null;
        case 10:
          return cu(t.type, t), jt(t), null;
        case 19:
          if (W($n, t), o = t.memoizedState, o === null) return jt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) _r(o, !1);
            else {
              if (vn !== Eo || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = fr(e), f !== null) {
                    for (t.flags |= 128, _r(o, !1), e = f.updateQueue, t.updateQueue = e, rf(t, e), t.subtreeFlags = 0, e = l, i = t.child; i !== null; )
                      Td(i, e), i = i.sibling;
                    return pe(
                      $n,
                      $n.current & Th | Jy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Ru() > Gg && (t.flags |= 128, i = !0, _r(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = fr(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, rf(t, e), _r(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !mt)
                  return jt(t), null;
              } else
                2 * Ru() - o.renderingStartTime > Gg && l !== 536870912 && (t.flags |= 128, i = !0, _r(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Ru(), e.sibling = null, l = $n.current, l = i ? l & Th | Jy : l & Th, pe($n, l, t), e) : (jt(t), null);
        case 22:
        case 23:
          return Ua(t), dm(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? l & 536870912 && !(t.flags & 128) && (jt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : jt(t), i = t.updateQueue, i !== null && rf(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== i && (t.flags |= 2048), e !== null && W(ms, t), null;
        case 24:
          return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), cu(Fn, t), jt(t), null;
        case 25:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Kc(e, t) {
      switch (cm(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & bl) !== $t && lr(t), t) : null;
        case 3:
          return cu(Fn, t), Ve(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return $e(t), null;
        case 13:
          if (Ua(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Lo();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & bl) !== $t && lr(t), t) : null;
        case 19:
          return W($n, t), null;
        case 4:
          return Ve(t), null;
        case 10:
          return cu(t.type, t), null;
        case 22:
        case 23:
          return Ua(t), dm(t), e !== null && W(ms, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & bl) !== $t && lr(t), t) : null;
        case 24:
          return cu(Fn, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function du(e, t) {
      switch (cm(t), t.tag) {
        case 3:
          cu(Fn, t), Ve(t);
          break;
        case 26:
        case 27:
        case 5:
          $e(t);
          break;
        case 4:
          Ve(t);
          break;
        case 13:
          Ua(t);
          break;
        case 19:
          W($n, t);
          break;
        case 10:
          cu(t.type, t);
          break;
        case 22:
        case 23:
          Ua(t), dm(t), e !== null && W(ms, t);
          break;
        case 24:
          cu(Fn, t);
      }
    }
    function Zi() {
      SE.forEach(function(e) {
        return e();
      });
    }
    function hu() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || K.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function yl(e) {
      if ((en & oa) !== Qa && ct !== 0)
        return ct & -ct;
      var t = K.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = hs, e !== 0 ? e : wd()) : Bu();
    }
    function Dd() {
      ka === 0 && (ka = !(ct & 536870912) || mt ? In() : 536870912);
      var e = Mu.current;
      return e !== null && (e.flags |= 32), ka;
    }
    function Ht(e, t, l) {
      if (Nh && console.error("useInsertionEffect must not schedule updates."), U0 && (Qg = !0), (e === Vt && Gt === bs || e.cancelPendingCommit !== null) && (ki(e, 0), mu(
        e,
        ct,
        ka,
        !1
      )), Yt(e, l), en & oa && e === Vt) {
        if (ta)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = it && ge(it) || "Unknown", TS.has(e) || (TS.add(e), t = ge(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              ES || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), ES = !0);
          }
      } else
        vl && $f(e, t, l), fi(t), e === Vt && ((en & oa) === Qa && (Gf |= l), vn === vs && mu(
          e,
          ct,
          ka,
          !1
        )), qa(e);
    }
    function Nr(e, t, l) {
      if ((en & (oa | So)) !== Qa)
        throw Error("Should not already be working.");
      var i = !l && (t & 60) === 0 && (t & e.expiredLanes) === 0 || jn(e, t), o = i ? jr(e, t) : qr(e, t, !0), f = i;
      do {
        if (o === Eo) {
          _h && !i && mu(e, t, 0, !1);
          break;
        } else if (o === Lg)
          mu(
            e,
            t,
            0,
            !To
          );
        else {
          if (l = e.current.alternate, f && !zd(l)) {
            o = qr(e, t, !1), f = !1;
            continue;
          }
          if (o === xh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var m = d;
                d = ap;
                var g = o.current.memoizedState.isDehydrated;
                if (g && (ki(
                  o,
                  m
                ).flags |= 256), m = qr(
                  o,
                  m,
                  !1
                ), m !== xh) {
                  if (A0 && !g) {
                    o.errorRecoveryDisabledLanes |= f, Gf |= f, o = vs;
                    break e;
                  }
                  o = Ti, Ti = d, o !== null && ui(o);
                }
                o = m;
              }
              if (f = !1, o !== xh) continue;
            }
          }
          if (o === ep) {
            ki(e, 0), mu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Eo:
              case ep:
                throw Error("Root did not complete. This is a bug in React.");
              case vs:
                if ((t & 4194176) === t) {
                  mu(
                    i,
                    t,
                    ka,
                    !To
                  );
                  break e;
                }
                break;
              case xh:
                Ti = null;
                break;
              case E0:
              case pS:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (i.finishedWork = l, i.finishedLanes = t, K.actQueue !== null)
              pl(
                i,
                Ti,
                up,
                Vg,
                ka,
                Gf,
                Ss,
                SS,
                t0,
                0
              );
            else {
              if ((t & 62914560) === t && (o = D0 + vS - Ru(), 10 < o)) {
                if (mu(
                  i,
                  t,
                  ka,
                  !To
                ), Ne(i, 0) !== 0) break e;
                i.timeoutHandle = MS(
                  kn.bind(
                    null,
                    i,
                    l,
                    Ti,
                    up,
                    Vg,
                    t,
                    ka,
                    Gf,
                    Ss,
                    To,
                    OE,
                    t0,
                    0
                  ),
                  o
                );
                break e;
              }
              kn(
                i,
                l,
                Ti,
                up,
                Vg,
                t,
                ka,
                Gf,
                Ss,
                To,
                SS,
                t0,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      qa(e);
    }
    function ui(e) {
      Ti === null ? Ti = e : Ti.push.apply(
        Ti,
        e
      );
    }
    function kn(e, t, l, i, o, f, d, m, g, E, L, ne, V) {
      var ae = t.subtreeFlags;
      if ((ae & 8192 || (ae & 16785408) === 16785408) && (sp = { stylesheets: null, count: 0, unsuspend: oy }, Zm(t), t = wv(), t !== null)) {
        e.cancelPendingCommit = t(
          pl.bind(
            null,
            e,
            l,
            i,
            o,
            d,
            m,
            g,
            AE,
            ne,
            V
          )
        ), mu(
          e,
          f,
          d,
          !E
        );
        return;
      }
      pl(
        e,
        l,
        i,
        o,
        d,
        m,
        g,
        L,
        ne,
        V
      );
    }
    function zd(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
          for (var i = 0; i < l.length; i++) {
            var o = l[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!aa(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (l = t.child, t.subtreeFlags & 16384 && l !== null)
          l.return = t, t = l;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function mu(e, t, l, i) {
      t &= ~O0, t &= ~Gf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - rl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      l !== 0 && sa(e, l, t);
    }
    function Kl() {
      return (en & (oa | So)) === Qa ? (mf(0), !1) : !0;
    }
    function Br() {
      if (it !== null) {
        if (Gt === Aa)
          var e = it.return;
        else
          e = it, Rr(), Pa(e), Sh = null, Ky = 0, e = it;
        for (; e !== null; )
          du(e.alternate, e), e = e.return;
        it = null;
      }
    }
    function ki(e, t) {
      e.finishedWork = null, e.finishedLanes = 0;
      var l = e.timeoutHandle;
      l !== V0 && (e.timeoutHandle = V0, xE(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Br(), Vt = e, it = l = fu(e.current, null), ct = t, Gt = Aa, Za = null, To = !1, _h = jn(e, t), A0 = !1, vn = Eo, Ss = ka = O0 = Gf = Vf = 0, Ti = ap = null, Vg = !1, t & 8 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - rl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return gc = t, Gs(), bi.discardPendingWarnings(), l;
    }
    function ii(e, t) {
      Qe = null, K.H = pc, K.getCurrentStack = null, ta = !1, ol = null, t === wg ? (t = Lp(), Gt = np) : t === Sb ? (t = Lp(), Gt = gS) : Gt = t === Ib ? R0 : t !== null && typeof t == "object" && typeof t.then == "function" ? wh : tp, Za = t;
      var l = it;
      if (l === null)
        vn = ep, Ze(
          e,
          Dl(t, e.current)
        );
      else
        switch (l.mode & bl && am(l), H(), Gt) {
          case tp:
            Re !== null && typeof Re.markComponentErrored == "function" && Re.markComponentErrored(
              l,
              t,
              ct
            );
            break;
          case bs:
          case np:
          case wh:
          case lp:
            Re !== null && typeof Re.markComponentSuspended == "function" && Re.markComponentSuspended(
              l,
              t,
              ct
            );
        }
    }
    function ci() {
      var e = K.H;
      return K.H = pc, e === null ? pc : e;
    }
    function sf() {
      var e = K.A;
      return K.A = bE, e;
    }
    function Yr() {
      vn = vs, To || (ct & 4194176) !== ct && Mu.current !== null || (_h = !0), !(Vf & 134217727) && !(Gf & 134217727) || Vt === null || mu(
        Vt,
        ct,
        ka,
        !1
      );
    }
    function qr(e, t, l) {
      var i = en;
      en |= oa;
      var o = ci(), f = sf();
      if (Vt !== e || ct !== t) {
        if (vl) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Zt(e, ct), d.clear()), Mo(e, t);
        }
        up = null, ki(e, t);
      }
      Oe(t), t = !1, d = vn;
      e: do
        try {
          if (Gt !== Aa && it !== null) {
            var m = it, g = Za;
            switch (Gt) {
              case R0:
                Br(), d = Lg;
                break e;
              case np:
              case bs:
              case wh:
                Mu.current === null && (t = !0);
                var E = Gt;
                if (Gt = Aa, Za = null, Jc(e, m, g, E), l && _h) {
                  d = Eo;
                  break e;
                }
                break;
              default:
                E = Gt, Gt = Aa, Za = null, Jc(e, m, g, E);
            }
          }
          df(), d = vn;
          break;
        } catch (L) {
          ii(e, L);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Rr(), en = i, K.H = o, K.A = f, Ce(), it === null && (Vt = null, ct = 0, Gs()), d;
    }
    function df() {
      for (; it !== null; ) Wm(it);
    }
    function jr(e, t) {
      var l = en;
      en |= oa;
      var i = ci(), o = sf();
      if (Vt !== e || ct !== t) {
        if (vl) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Zt(e, ct), f.clear()), Mo(e, t);
        }
        up = null, Gg = Ru() + bS, ki(e, t);
      } else
        _h = jn(
          e,
          t
        );
      Oe(t);
      e: do
        try {
          if (Gt !== Aa && it !== null)
            t: switch (t = it, f = Za, Gt) {
              case tp:
                Gt = Aa, Za = null, Jc(
                  e,
                  t,
                  f,
                  tp
                );
                break;
              case bs:
                if (fm(f)) {
                  Gt = Aa, Za = null, hf(t);
                  break;
                }
                t = function() {
                  Gt === bs && Vt === e && (Gt = lp), qa(e);
                }, f.then(t, t);
                break e;
              case np:
                Gt = lp;
                break e;
              case gS:
                Gt = T0;
                break e;
              case lp:
                fm(f) ? (Gt = Aa, Za = null, hf(t)) : (Gt = Aa, Za = null, Jc(
                  e,
                  t,
                  f,
                  lp
                ));
                break;
              case T0:
                var d = null;
                switch (it.tag) {
                  case 26:
                    d = it.memoizedState;
                  case 5:
                  case 27:
                    var m = it;
                    if (!d || Qd(d)) {
                      Gt = Aa, Za = null;
                      var g = m.sibling;
                      if (g !== null) it = g;
                      else {
                        var E = m.return;
                        E !== null ? (it = E, Lr(E)) : it = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Gt = Aa, Za = null, Jc(
                  e,
                  t,
                  f,
                  T0
                );
                break;
              case wh:
                Gt = Aa, Za = null, Jc(
                  e,
                  t,
                  f,
                  wh
                );
                break;
              case R0:
                Br(), vn = Lg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          K.actQueue !== null ? df() : eg();
          break;
        } catch (L) {
          ii(e, L);
        }
      while (!0);
      return Rr(), K.H = i, K.A = o, en = l, it !== null ? (Re !== null && typeof Re.markRenderYielded == "function" && Re.markRenderYielded(), Eo) : (Ce(), Vt = null, ct = 0, Gs(), vn);
    }
    function eg() {
      for (; it !== null && !lh(); )
        Wm(it);
    }
    function Wm(e) {
      var t = e.alternate;
      (e.mode & bl) !== $t ? (Cc(e), t = Ae(
        e,
        rd,
        t,
        e,
        gc
      ), am(e)) : t = Ae(
        e,
        rd,
        t,
        e,
        gc
      ), e.memoizedProps = e.pendingProps, t === null ? Lr(e) : it = t;
    }
    function hf(e) {
      var t = Ae(e, Ki, e);
      e.memoizedProps = e.pendingProps, t === null ? Lr(e) : it = t;
    }
    function Ki(e) {
      var t = e.alternate, l = (e.mode & bl) !== $t;
      switch (l && Cc(e), e.tag) {
        case 15:
        case 0:
          t = Om(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ct
          );
          break;
        case 11:
          t = Om(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ct
          );
          break;
        case 5:
          Pa(e);
        default:
          du(t, e), e = it = Td(e, gc), t = rd(t, e, gc);
      }
      return l && am(e), t;
    }
    function Jc(e, t, l, i) {
      Rr(), Pa(t), Sh = null, Ky = 0;
      var o = t.return;
      try {
        if (Lc(
          e,
          o,
          t,
          l,
          ct
        )) {
          vn = ep, Ze(
            e,
            Dl(l, e.current)
          ), it = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw it = o, f;
        vn = ep, Ze(
          e,
          Dl(l, e.current)
        ), it = null;
        return;
      }
      t.flags & 32768 ? (mt || i === tp ? e = !0 : _h || ct & 536870912 ? e = !1 : (To = e = !0, (i === bs || i === np || i === wh) && (i = Mu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ji(t, e)) : Lr(t);
    }
    function Lr(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Ji(
            t,
            To
          );
          return;
        }
        var l = t.alternate;
        if (e = t.return, Cc(t), l = Ae(
          t,
          $m,
          l,
          t,
          gc
        ), (t.mode & bl) !== $t && um(t), l !== null) {
          it = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          it = t;
          return;
        }
        it = t = e;
      } while (t !== null);
      vn === Eo && (vn = pS);
    }
    function Ji(e, t) {
      do {
        var l = Kc(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, it = l;
          return;
        }
        if ((e.mode & bl) !== $t) {
          um(e), l = e.actualDuration;
          for (var i = e.child; i !== null; )
            l += i.actualDuration, i = i.sibling;
          e.actualDuration = l;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          it = e;
          return;
        }
        it = e = l;
      } while (e !== null);
      vn = Lg, it = null;
    }
    function pl(e, t, l, i, o, f, d, m, g, E) {
      var L = K.T, ne = _t.p;
      try {
        _t.p = na, K.T = null, tg(
          e,
          t,
          l,
          i,
          ne,
          o,
          f,
          d,
          m,
          g,
          E
        );
      } finally {
        K.T = L, _t.p = ne;
      }
    }
    function tg(e, t, l, i, o, f, d, m) {
      do
        oi();
      while (Es !== null);
      if (bi.flushLegacyContextWarning(), bi.flushPendingUnsafeLifecycleWarnings(), (en & (oa | So)) !== Qa)
        throw Error("Should not already be working.");
      var g = e.finishedWork;
      if (i = e.finishedLanes, Re !== null && typeof Re.markCommitStarted == "function" && Re.markCommitStarted(i), g === null) return Ka(), null;
      if (i === 0 && console.error(
        "root.finishedLanes should not be empty during a commit. This is a bug in React."
      ), e.finishedWork = null, e.finishedLanes = 0, g === e.current)
        throw Error(
          "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
        );
      e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
      var E = g.lanes | g.childLanes;
      if (E |= e0, Rl(
        e,
        i,
        E,
        f,
        d,
        m
      ), e === Vt && (it = Vt = null, ct = 0), !(g.subtreeFlags & 10256) && !(g.flags & 10256) || Xg || (Xg = !0, z0 = E, C0 = l, Jl(Df, function() {
        return oi(), null;
      })), zg = gh(), l = (g.flags & 15990) !== 0, g.subtreeFlags & 15990 || l ? (l = K.T, K.T = null, f = _t.p, _t.p = na, d = en, en |= So, bd(e, g), Lm(
        e,
        g,
        i
      ), Uv(j0, e.containerInfo), uv = !!q0, j0 = q0 = null, e.current = g, Re !== null && typeof Re.markLayoutEffectsStarted == "function" && Re.markLayoutEffectsStarted(
        i
      ), Pp(g, e, i), Re !== null && typeof Re.markLayoutEffectsStopped == "function" && Re.markLayoutEffectsStopped(), mi(), en = d, _t.p = f, K.T = l) : e.current = g, (l = Xg) ? (Xg = !1, Es = e, ip = i) : (Fm(e, E), Ts = 0, op = null), E = e.pendingLanes, E === 0 && (Xf = null), l || Pm(e), Tl(g.stateNode, o), vl && e.memoizedUpdaters.clear(), Zi(), qa(e), t !== null)
        for (o = e.onRecoverableError, g = 0; g < t.length; g++)
          E = t[g], l = ng(E.stack), Ae(
            E.source,
            o,
            E.value,
            l
          );
      return ip & 3 && oi(), E = e.pendingLanes, i & 4194218 && E & 42 ? (Mg = !0, e === M0 ? cp++ : (cp = 0, M0 = e)) : cp = 0, mf(0), Ka(), null;
    }
    function ng(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Fm(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Hc(t)));
    }
    function oi() {
      if (Es !== null) {
        var e = Es, t = z0;
        z0 = 0;
        var l = Wf(ip), i = Ga > l ? Ga : l;
        l = K.T;
        var o = _t.p;
        try {
          if (_t.p = i, K.T = null, Es === null)
            var f = !1;
          else {
            i = C0, C0 = null;
            var d = Es, m = ip;
            if (Es = null, ip = 0, (en & (oa | So)) !== Qa)
              throw Error(
                "Cannot flush passive effects while already rendering."
              );
            U0 = !0, Qg = !1, Re !== null && typeof Re.markPassiveEffectsStarted == "function" && Re.markPassiveEffectsStarted(m);
            var g = en;
            if (en |= So, cf(d.current), Qm(
              d,
              d.current,
              m,
              i
            ), Re !== null && typeof Re.markPassiveEffectsStopped == "function" && Re.markPassiveEffectsStopped(), Pm(d), en = g, mf(0, !1), Qg ? d === op ? Ts++ : (Ts = 0, op = d) : Ts = 0, Qg = U0 = !1, fl && typeof fl.onPostCommitFiberRoot == "function")
              try {
                fl.onPostCommitFiberRoot(zf, d);
              } catch (L) {
                gl || (gl = !0, console.error(
                  "React instrumentation encountered an error: %s",
                  L
                ));
              }
            var E = d.current.stateNode;
            E.effectDuration = 0, E.passiveEffectDuration = 0, f = !0;
          }
          return f;
        } finally {
          _t.p = o, K.T = l, Fm(e, t);
        }
      }
      return !1;
    }
    function Cd(e, t, l) {
      t = Dl(l, t), t = un(e.stateNode, t, 2), e = ei(e, t, 2), e !== null && (Yt(e, 2), qa(e));
    }
    function bt(e, t, l) {
      if (Nh = !1, e.tag === 3)
        Cd(e, e, l);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Cd(
              t,
              e,
              l
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Xf === null || !Xf.has(i))) {
              e = Dl(l, e), l = Wo(2), i = ei(t, l, 2), i !== null && (Li(
                l,
                i,
                t,
                e
              ), Yt(i, 2), qa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          l
        );
      }
    }
    function Ya(e, t, l) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new EE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(l) || (A0 = !0, o.add(l), i = on.bind(null, e, t, l), vl && Zt(e, l), t.then(i, i));
    }
    function on(e, t, l) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, hu() && K.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Vt === e && (ct & l) === l && (vn === vs || vn === E0 && (ct & 62914560) === ct && Ru() - D0 < vS ? (en & oa) === Qa && ki(e, 0) : O0 |= l, Ss === ct && (Ss = 0)), qa(e);
    }
    function Md(e, t) {
      t === 0 && (t = Oa()), e = Xn(e, t), e !== null && (Yt(e, t), qa(e));
    }
    function lg(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), Md(e, l);
    }
    function _n(e, t) {
      var l = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (l = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Md(e, l);
    }
    function Ud(e, t, l) {
      if (t.subtreeFlags & 33562624)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Wd;
          f = l || f, o.tag !== 22 ? o.flags & 33554432 ? f && Ae(
            o,
            ag,
            i,
            o,
            (o.mode & vb) === $t
          ) : Ud(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? Ae(
            o,
            ag,
            i,
            o
          ) : o.subtreeFlags & 33554432 && Ae(
            o,
            Ud,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function ag(e, t) {
      var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      ot(!0);
      try {
        Gm(t), l && Km(t), Xm(e, t.alternate, t, !1), l && wn(e, t, 0, null, !1);
      } finally {
        ot(!1);
      }
    }
    function Pm(e) {
      var t = !0;
      e.current.mode & (_l | vi) || (t = !1), Ud(
        e,
        e.current,
        t
      );
    }
    function Im(e) {
      if ((en & oa) === Qa) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = ge(e) || "ReactComponent", Zg !== null) {
            if (Zg.has(t)) return;
            Zg.add(t);
          } else Zg = /* @__PURE__ */ new Set([t]);
          Ae(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Zt(e, t) {
      vl && e.memoizedUpdaters.forEach(function(l) {
        $f(e, l, t);
      });
    }
    function Jl(e, t) {
      var l = K.actQueue;
      return l !== null ? (l.push(t), DE) : Hl(e, t);
    }
    function fi(e) {
      hu() && K.actQueue === null && Ae(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          ge(e)
        );
      });
    }
    function qa(e) {
      e !== Bh && e.next === null && (Bh === null ? kg = Bh = e : Bh = Bh.next = e), Kg = !0, K.actQueue !== null ? x0 || (x0 = !0, Wl(ug)) : H0 || (H0 = !0, Wl(ug));
    }
    function mf(e, t) {
      if (!w0 && Kg) {
        w0 = !0;
        do
          for (var l = !1, i = kg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, m = i.pingedLanes;
                f = (1 << 31 - rl(42 | e) + 1) - 1, f &= o & ~(d & ~m), f = f & 201326677 ? f & 201326677 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (l = !0, ba(i, f));
            } else
              f = ct, f = Ne(
                i,
                i === Vt ? f : 0
              ), !(f & 3) || jn(i, f) || (l = !0, ba(i, f));
            i = i.next;
          }
        while (l);
        w0 = !1;
      }
    }
    function ug() {
      Kg = x0 = H0 = !1;
      var e = 0;
      Rs !== 0 && (ut() && (e = Rs), Rs = 0);
      for (var t = Ru(), l = null, i = kg; i !== null; ) {
        var o = i.next, f = Hd(i, t);
        f === 0 ? (i.next = null, l === null ? kg = o : l.next = o, o === null && (Bh = l)) : (l = i, (e !== 0 || f & 3) && (Kg = !0)), i = o;
      }
      mf(e);
    }
    function Hd(e, t) {
      for (var l = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - rl(f), m = 1 << d, g = o[d];
        g === -1 ? (!(m & l) || m & i) && (o[d] = mn(m, t)) : g <= t && (e.expiredLanes |= m), f &= ~m;
      }
      if (t = Vt, l = ct, l = Ne(
        e,
        e === t ? l : 0
      ), i = e.callbackNode, l === 0 || e === t && Gt === bs || e.cancelPendingCommit !== null)
        return i !== null && xd(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(l & 3) || jn(e, l)) {
        if (t = l & -l, t !== e.callbackPriority || K.actQueue !== null && i !== _0)
          xd(i);
        else return t;
        switch (Wf(l)) {
          case na:
          case Ea:
            l = ah;
            break;
          case Ga:
            l = Df;
            break;
          case ro:
            l = Ay;
            break;
          default:
            l = Df;
        }
        return i = $l.bind(null, e), K.actQueue !== null ? (K.actQueue.push(i), l = _0) : l = Hl(l, i), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return i !== null && xd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function $l(e, t) {
      Mg = Cg = !1;
      var l = e.callbackNode;
      if (oi() && e.callbackNode !== l)
        return null;
      var i = ct;
      return i = Ne(
        e,
        e === Vt ? i : 0
      ), i === 0 ? null : (Nr(
        e,
        i,
        t
      ), Hd(e, Ru()), e.callbackNode != null && e.callbackNode === l ? $l.bind(null, e) : null);
    }
    function ba(e, t) {
      if (oi()) return null;
      Cg = Mg, Mg = !1, Nr(e, t, !0);
    }
    function xd(e) {
      e !== _0 && e !== null && vg(e);
    }
    function Wl(e) {
      K.actQueue !== null && K.actQueue.push(function() {
        return e(), null;
      }), wE(function() {
        (en & (oa | So)) !== Qa ? Hl(uc, e) : e();
      });
    }
    function wd() {
      return Rs === 0 && (Rs = In()), Rs;
    }
    function yu(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (nt(e, "action"), Fa("" + e));
    }
    function $c(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function $i(e, t, l, i, o) {
      if (t === "submit" && l && l.stateNode === o) {
        var f = yu(
          (o[xl] || null).action
        ), d = i.submitter;
        d && (t = (t = d[xl] || null) ? yu(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var m = new _(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: m,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Rs !== 0) {
                    var g = d ? $c(
                      o,
                      d
                    ) : new FormData(o), E = {
                      pending: !0,
                      data: g,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(E), uu(
                      l,
                      E,
                      null,
                      g
                    );
                  }
                } else
                  typeof f == "function" && (m.preventDefault(), g = d ? $c(
                    o,
                    d
                  ) : new FormData(o), E = {
                    pending: !0,
                    data: g,
                    method: o.method,
                    action: f
                  }, Object.freeze(E), uu(
                    l,
                    E,
                    f,
                    g
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function _d(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var i = e[l];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var m = i[d], g = m.instance, E = m.currentTarget;
              if (m = m.listener, g !== o && f.isPropagationStopped())
                break e;
              o = f, o.currentTarget = E;
              try {
                m(o);
              } catch (L) {
                qg(L);
              }
              o.currentTarget = null, o = g;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (m = i[d], g = m.instance, E = m.currentTarget, m = m.listener, g !== o && f.isPropagationStopped())
                break e;
              o = f, o.currentTarget = E;
              try {
                m(o);
              } catch (L) {
                qg(L);
              }
              o.currentTarget = null, o = g;
            }
        }
      }
    }
    function at(e, t) {
      N0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var l = t[so];
      l === void 0 && (l = t[so] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      l.has(i) || (Wc(t, e, 2, !1), l.add(i));
    }
    function pu(e, t, l) {
      N0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Wc(
        l,
        e,
        i,
        t
      );
    }
    function Nd(e) {
      if (!e[Jg]) {
        e[Jg] = !0, as.forEach(function(l) {
          l !== "selectionchange" && (N0.has(l) || pu(l, !1, e), pu(l, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Jg] || (t[Jg] = !0, pu("selectionchange", !1, t));
      }
    }
    function Wc(e, t, l, i) {
      switch (co(t)) {
        case na:
          var o = mg;
          break;
        case Ea:
          o = Nv;
          break;
        default:
          o = hy;
      }
      l = o.bind(
        null,
        t,
        l,
        e
      ), o = void 0, !X || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, l, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, l, !0) : o !== void 0 ? e.addEventListener(t, l, {
        passive: o
      }) : e.addEventListener(
        t,
        l,
        !1
      );
    }
    function Fc(e, t, l, i, o) {
      var f = i;
      if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var m = i.stateNode.containerInfo;
            if (m === o || m.nodeType === 8 && m.parentNode === o)
              break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var g = d.tag;
                if ((g === 3 || g === 4) && (g = d.stateNode.containerInfo, g === o || g.nodeType === 8 && g.parentNode === o))
                  return;
                d = d.return;
              }
            for (; m !== null; ) {
              if (d = ql(m), d === null) return;
              if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                i = f = d;
                continue e;
              }
              m = m.parentNode;
            }
          }
          i = i.return;
        }
      Bs(function() {
        var E = f, L = Ci(l), ne = [];
        e: {
          var V = pb.get(e);
          if (V !== void 0) {
            var ae = _, xe = e;
            switch (e) {
              case "keypress":
                if (No(l) === 0) break e;
              case "keydown":
              case "keyup":
                ae = K1;
                break;
              case "focusin":
                xe = "focus", ae = $v;
                break;
              case "focusout":
                xe = "blur", ae = $v;
                break;
              case "beforeblur":
              case "afterblur":
                ae = $v;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                ae = Dn;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                ae = hc;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                ae = W1;
                break;
              case db:
              case hb:
              case mb:
                ae = q1;
                break;
              case yb:
                ae = P1;
                break;
              case "scroll":
              case "scrollend":
                ae = ue;
                break;
              case "wheel":
                ae = eE;
                break;
              case "copy":
              case "cut":
              case "paste":
                ae = L1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                ae = ab;
                break;
              case "toggle":
              case "beforetoggle":
                ae = nE;
            }
            var Fe = (t & 4) !== 0, zn = !Fe && (e === "scroll" || e === "scrollend"), Dt = Fe ? V !== null ? V + "Capture" : null : V;
            Fe = [];
            for (var U = E, M; U !== null; ) {
              var w = U;
              if (M = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || M === null || Dt === null || (w = wo(U, Dt), w != null && Fe.push(
                ri(
                  U,
                  w,
                  M
                )
              )), zn) break;
              U = U.return;
            }
            0 < Fe.length && (V = new ae(
              V,
              xe,
              null,
              l,
              L
            ), ne.push({
              event: V,
              listeners: Fe
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (V = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", V && l !== A && (xe = l.relatedTarget || l.fromElement) && (ql(xe) || xe[cc]))
              break e;
            if ((ae || V) && (V = L.window === L ? L : (V = L.ownerDocument) ? V.defaultView || V.parentWindow : window, ae ? (xe = l.relatedTarget || l.toElement, ae = E, xe = xe ? ql(xe) : null, xe !== null && (zn = Mt(xe), Fe = xe.tag, xe !== zn || Fe !== 5 && Fe !== 27 && Fe !== 6) && (xe = null)) : (ae = null, xe = E), ae !== xe)) {
              if (Fe = Dn, w = "onMouseLeave", Dt = "onMouseEnter", U = "mouse", (e === "pointerout" || e === "pointerover") && (Fe = ab, w = "onPointerLeave", Dt = "onPointerEnter", U = "pointer"), zn = ae == null ? V : Ai(ae), M = xe == null ? V : Ai(xe), V = new Fe(
                w,
                U + "leave",
                ae,
                l,
                L
              ), V.target = zn, V.relatedTarget = M, w = null, ql(L) === E && (Fe = new Fe(
                Dt,
                U + "enter",
                xe,
                l,
                L
              ), Fe.target = M, Fe.relatedTarget = zn, w = Fe), zn = w, ae && xe)
                t: {
                  for (Fe = ae, Dt = xe, U = 0, M = Fe; M; M = Pc(M))
                    U++;
                  for (M = 0, w = Dt; w; w = Pc(w))
                    M++;
                  for (; 0 < U - M; )
                    Fe = Pc(Fe), U--;
                  for (; 0 < M - U; )
                    Dt = Pc(Dt), M--;
                  for (; U--; ) {
                    if (Fe === Dt || Dt !== null && Fe === Dt.alternate)
                      break t;
                    Fe = Pc(Fe), Dt = Pc(Dt);
                  }
                  Fe = null;
                }
              else Fe = null;
              ae !== null && ey(
                ne,
                V,
                ae,
                Fe,
                !1
              ), xe !== null && zn !== null && ey(
                ne,
                zn,
                xe,
                Fe,
                !0
              );
            }
          }
          e: {
            if (V = E ? Ai(E) : window, ae = V.nodeName && V.nodeName.toLowerCase(), ae === "select" || ae === "input" && V.type === "file")
              var P = Ls;
            else if (Ui(V))
              if (rb)
                P = Mv;
              else {
                P = zv;
                var be = Cp;
              }
            else
              ae = V.nodeName, !ae || ae.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? E && Rc(E.elementType) && (P = Ls) : P = Cv;
            if (P && (P = P(e, E))) {
              Bo(
                ne,
                P,
                l,
                L
              );
              break e;
            }
            be && be(e, V, E), e === "focusout" && E && V.type === "number" && E.memoizedProps.value != null && Qt(V, "number", V.value);
          }
          switch (be = E ? Ai(E) : window, e) {
            case "focusin":
              (Ui(be) || be.contentEditable === "true") && (hh = be, Fv = E, qy = null);
              break;
            case "focusout":
              qy = Fv = hh = null;
              break;
            case "mousedown":
              Pv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Pv = !1, wp(
                ne,
                l,
                L
              );
              break;
            case "selectionchange":
              if (iE) break;
            case "keydown":
            case "keyup":
              wp(
                ne,
                l,
                L
              );
          }
          var ke;
          if (Wv)
            e: {
              switch (e) {
                case "compositionstart":
                  var He = "onCompositionStart";
                  break e;
                case "compositionend":
                  He = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  He = "onCompositionUpdate";
                  break e;
              }
              He = void 0;
            }
          else
            dh ? If(e, l) && (He = "onCompositionEnd") : e === "keydown" && l.keyCode === ub && (He = "onCompositionStart");
          He && (ib && l.locale !== "ko" && (dh || He !== "onCompositionStart" ? He === "onCompositionEnd" && dh && (ke = _o()) : (Me = L, Xe = "value" in Me ? Me.value : Me.textContent, dh = !0)), be = si(
            E,
            He
          ), 0 < be.length && (He = new lb(
            He,
            e,
            null,
            l,
            L
          ), ne.push({
            event: He,
            listeners: be
          }), ke ? He.data = ke : (ke = er(l), ke !== null && (He.data = ke)))), (ke = aE ? zp(e, l) : Ol(e, l)) && (He = si(
            E,
            "onBeforeInput"
          ), 0 < He.length && (be = new G1(
            "onBeforeInput",
            "beforeinput",
            null,
            l,
            L
          ), ne.push({
            event: be,
            listeners: He
          }), be.data = ke)), $i(
            ne,
            e,
            E,
            l,
            L
          );
        }
        _d(ne, t);
      });
    }
    function ri(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function si(e, t) {
      for (var l = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = wo(e, l), o != null && i.unshift(
          ri(e, o, f)
        ), o = wo(e, t), o != null && i.push(
          ri(e, o, f)
        )), e = e.return;
      }
      return i;
    }
    function Pc(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function ey(e, t, l, i, o) {
      for (var f = t._reactName, d = []; l !== null && l !== i; ) {
        var m = l, g = m.alternate, E = m.stateNode;
        if (m = m.tag, g !== null && g === i) break;
        m !== 5 && m !== 26 && m !== 27 || E === null || (g = E, o ? (E = wo(l, f), E != null && d.unshift(
          ri(l, E, g)
        )) : o || (E = wo(l, f), E != null && d.push(
          ri(l, E, g)
        ))), l = l.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ic(e, t) {
      Ns(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || a || (a = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var l = {
        registrationNameDependencies: pi,
        possibleRegistrationNames: Oy
      };
      Rc(e) || typeof t.is == "string" || Ph(e, t, l), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Rn(e, t, l, i) {
      t !== l && (l = An(l), An(t) !== l && (i[e] = t));
    }
    function Bd(e, t, l) {
      t.forEach(function(i) {
        l[qd(i)] = i === "style" ? Vr(e) : e.getAttribute(i);
      });
    }
    function ja(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ig(e, t) {
      return e = e.namespaceURI === dc || e.namespaceURI === la ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function An(e) {
      return rt(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Et(e)
      ), nn(e)), (typeof e == "string" ? e : "" + e).replace(zE, `
`).replace(CE, "");
    }
    function Yd(e, t) {
      return t = An(t), An(e) === t;
    }
    function La() {
    }
    function At(e, t, l, i, o, f) {
      switch (l) {
        case "children":
          typeof i == "string" ? (Pf(i, t), t === "body" || t === "textarea" && i === "" || Wa(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Pf("" + i, t), t !== "body" && Wa(e, "" + i));
          break;
        case "className":
          ju(e, "class", i);
          break;
        case "tabIndex":
          ju(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ju(e, l, i);
          break;
        case "style":
          Wh(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ju(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || l !== "href")) {
            console.error(
              l === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              l,
              l
            ), e.removeAttribute(l);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(l);
            break;
          }
          nt(i, l), i = Fa("" + i), e.setAttribute(l, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? l === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Fg || (Fg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Wg || (Wg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? l === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || $g ? t !== "button" || o.type == null || o.type === "submit" || $g ? typeof i == "function" && (o.name == null || OS || (OS = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Fg || (Fg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Wg || (Wg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : ($g = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : ($g = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            l === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              l,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (l === "formAction" ? (t !== "input" && At(e, t, "name", o.name, o, null), At(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), At(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), At(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (At(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), At(e, t, "method", o.method, o, null), At(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(l);
            break;
          }
          nt(i, l), i = Fa("" + i), e.setAttribute(l, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && ja(l, i), e.onclick = La);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ja(l, i), at("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ja(l, i), at("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (l = i.__html, l != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          nt(i, l), l = Fa("" + i), e.setAttributeNS(As, "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (nt(i, l), e.setAttribute(l, "" + i)) : e.removeAttribute(l);
          break;
        case "inert":
          i !== "" || Pg[l] || (Pg[l] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            l
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(l, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (nt(i, l), e.setAttribute(l, i)) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (nt(i, l), e.setAttribute(l, i)) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(l) : (nt(i, l), e.setAttribute(l, i));
          break;
        case "popover":
          at("beforetoggle", e), at("toggle", e), $a(e, "popover", i);
          break;
        case "xlinkActuate":
          ha(
            e,
            As,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ha(
            e,
            As,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ha(
            e,
            As,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ha(
            e,
            As,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ha(
            e,
            As,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ha(
            e,
            As,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ha(
            e,
            B0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ha(
            e,
            B0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ha(
            e,
            B0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), $a(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          DS || i == null || typeof i != "object" || (DS = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N" ? (l = Dp(l), $a(e, l, i)) : pi.hasOwnProperty(l) && i != null && typeof i != "function" && ja(l, i);
      }
    }
    function yf(e, t, l, i, o, f) {
      switch (l) {
        case "style":
          Wh(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (l = i.__html, l != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Wa(e, i) : (typeof i == "number" || typeof i == "bigint") && Wa(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ja(l, i), at("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ja(l, i), at("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && ja(l, i), e.onclick = La);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (pi.hasOwnProperty(l))
            i != null && typeof i != "function" && ja(l, i);
          else
            e: {
              if (l[0] === "o" && l[1] === "n" && (o = l.endsWith("Capture"), t = l.slice(2, o ? l.length - 7 : void 0), f = e[xl] || null, f = f != null ? f[l] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, i, o);
                break e;
              }
              l in e ? e[l] = i : i === !0 ? e.setAttribute(l, "") : $a(e, l, i);
            }
      }
    }
    function It(e, t, l) {
      switch (Ic(t, l), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          at("error", e), at("load", e);
          var i = !1, o = !1, f;
          for (f in l)
            if (l.hasOwnProperty(f)) {
              var d = l[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    At(e, t, f, d, l, null);
                }
            }
          o && At(e, t, "srcSet", l.srcSet, l, null), i && At(e, t, "src", l.src, l, null);
          return;
        case "input":
          Yu("input", l), at("invalid", e);
          var m = f = d = o = null, g = null, E = null;
          for (i in l)
            if (l.hasOwnProperty(i)) {
              var L = l[i];
              if (L != null)
                switch (i) {
                  case "name":
                    o = L;
                    break;
                  case "type":
                    d = L;
                    break;
                  case "checked":
                    g = L;
                    break;
                  case "defaultChecked":
                    E = L;
                    break;
                  case "value":
                    f = L;
                    break;
                  case "defaultValue":
                    m = L;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (L != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    At(e, t, i, L, l, null);
                }
            }
          dt(e, l), Ut(
            e,
            f,
            m,
            g,
            E,
            d,
            o,
            !1
          ), re(e);
          return;
        case "select":
          Yu("select", l), at("invalid", e), i = d = f = null;
          for (o in l)
            if (l.hasOwnProperty(o) && (m = l[o], m != null))
              switch (o) {
                case "value":
                  f = m;
                  break;
                case "defaultValue":
                  d = m;
                  break;
                case "multiple":
                  i = m;
                default:
                  At(
                    e,
                    t,
                    o,
                    m,
                    l,
                    null
                  );
              }
          Tt(e, l), t = f, l = d, e.multiple = !!i, t != null ? el(e, !!i, t, !1) : l != null && el(e, !!i, l, !0);
          return;
        case "textarea":
          Yu("textarea", l), at("invalid", e), f = o = i = null;
          for (d in l)
            if (l.hasOwnProperty(d) && (m = l[d], m != null))
              switch (d) {
                case "value":
                  i = m;
                  break;
                case "defaultValue":
                  o = m;
                  break;
                case "children":
                  f = m;
                  break;
                case "dangerouslySetInnerHTML":
                  if (m != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    d,
                    m,
                    l,
                    null
                  );
              }
          Gh(e, l), Di(e, i, o, f), re(e);
          return;
        case "option":
          hl(e, l);
          for (g in l)
            if (l.hasOwnProperty(g) && (i = l[g], i != null))
              switch (g) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  At(e, t, g, i, l, null);
              }
          return;
        case "dialog":
          at("cancel", e), at("close", e);
          break;
        case "iframe":
        case "object":
          at("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < fp.length; i++)
            at(fp[i], e);
          break;
        case "image":
          at("error", e), at("load", e);
          break;
        case "details":
          at("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          at("error", e), at("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (E in l)
            if (l.hasOwnProperty(E) && (i = l[E], i != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  At(e, t, E, i, l, null);
              }
          return;
        default:
          if (Rc(t)) {
            for (L in l)
              l.hasOwnProperty(L) && (i = l[L], i !== void 0 && yf(
                e,
                t,
                L,
                i,
                l,
                void 0
              ));
            return;
          }
      }
      for (m in l)
        l.hasOwnProperty(m) && (i = l[m], i != null && At(e, t, m, i, l, null));
    }
    function cg(e, t, l, i) {
      switch (Ic(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, m = null, g = null, E = null, L = null;
          for (ae in l) {
            var ne = l[ae];
            if (l.hasOwnProperty(ae) && ne != null)
              switch (ae) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  g = ne;
                default:
                  i.hasOwnProperty(ae) || At(
                    e,
                    t,
                    ae,
                    null,
                    i,
                    ne
                  );
              }
          }
          for (var V in i) {
            var ae = i[V];
            if (ne = l[V], i.hasOwnProperty(V) && (ae != null || ne != null))
              switch (V) {
                case "type":
                  f = ae;
                  break;
                case "name":
                  o = ae;
                  break;
                case "checked":
                  E = ae;
                  break;
                case "defaultChecked":
                  L = ae;
                  break;
                case "value":
                  d = ae;
                  break;
                case "defaultValue":
                  m = ae;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ae != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ae !== ne && At(
                    e,
                    t,
                    V,
                    ae,
                    i,
                    ne
                  );
              }
          }
          t = l.type === "checkbox" || l.type === "radio" ? l.checked != null : l.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || AS || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), AS = !0), !t || i || RS || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), RS = !0), Ie(
            e,
            d,
            m,
            g,
            E,
            L,
            f,
            o
          );
          return;
        case "select":
          ae = d = m = V = null;
          for (f in l)
            if (g = l[f], l.hasOwnProperty(f) && g != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  ae = g;
                default:
                  i.hasOwnProperty(f) || At(
                    e,
                    t,
                    f,
                    null,
                    i,
                    g
                  );
              }
          for (o in i)
            if (f = i[o], g = l[o], i.hasOwnProperty(o) && (f != null || g != null))
              switch (o) {
                case "value":
                  V = f;
                  break;
                case "defaultValue":
                  m = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== g && At(
                    e,
                    t,
                    o,
                    f,
                    i,
                    g
                  );
              }
          i = m, t = d, l = ae, V != null ? el(e, !!t, V, !1) : !!l != !!t && (i != null ? el(e, !!t, i, !0) : el(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          ae = V = null;
          for (m in l)
            if (o = l[m], l.hasOwnProperty(m) && o != null && !i.hasOwnProperty(m))
              switch (m) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  At(e, t, m, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = l[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  V = o;
                  break;
                case "defaultValue":
                  ae = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && At(e, t, d, o, i, f);
              }
          Xh(e, V, ae);
          return;
        case "option":
          for (var xe in l)
            if (V = l[xe], l.hasOwnProperty(xe) && V != null && !i.hasOwnProperty(xe))
              switch (xe) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  At(
                    e,
                    t,
                    xe,
                    null,
                    i,
                    V
                  );
              }
          for (g in i)
            if (V = i[g], ae = l[g], i.hasOwnProperty(g) && V !== ae && (V != null || ae != null))
              switch (g) {
                case "selected":
                  e.selected = V && typeof V != "function" && typeof V != "symbol";
                  break;
                default:
                  At(
                    e,
                    t,
                    g,
                    V,
                    i,
                    ae
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Fe in l)
            V = l[Fe], l.hasOwnProperty(Fe) && V != null && !i.hasOwnProperty(Fe) && At(
              e,
              t,
              Fe,
              null,
              i,
              V
            );
          for (E in i)
            if (V = i[E], ae = l[E], i.hasOwnProperty(E) && V !== ae && (V != null || ae != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    E,
                    V,
                    i,
                    ae
                  );
              }
          return;
        default:
          if (Rc(t)) {
            for (var zn in l)
              V = l[zn], l.hasOwnProperty(zn) && V !== void 0 && !i.hasOwnProperty(zn) && yf(
                e,
                t,
                zn,
                void 0,
                i,
                V
              );
            for (L in i)
              V = i[L], ae = l[L], !i.hasOwnProperty(L) || V === ae || V === void 0 && ae === void 0 || yf(
                e,
                t,
                L,
                V,
                i,
                ae
              );
            return;
          }
      }
      for (var Dt in l)
        V = l[Dt], l.hasOwnProperty(Dt) && V != null && !i.hasOwnProperty(Dt) && At(e, t, Dt, null, i, V);
      for (ne in i)
        V = i[ne], ae = l[ne], !i.hasOwnProperty(ne) || V === ae || V == null && ae == null || At(e, t, ne, V, i, ae);
    }
    function qd(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Vr(e) {
      var t = {};
      e = e.style;
      for (var l = 0; l < e.length; l++) {
        var i = e[l];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function gu(e, t, l) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Mn(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || xf.has(f) ? (Mn(d, f), i += o + f.replace(Uy, "-$1").toLowerCase().replace(Mf, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Uy, "-$1").toLowerCase().replace(Mf, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = An(i), An(t) !== i && (l.style = Vr(e)));
      }
    }
    function Fl(e, t, l, i, o, f) {
      if (o.delete(l), e = e.getAttribute(l), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (nt(i, t), e === "" + i)
              return;
        }
      Rn(t, e, i, f);
    }
    function Gr(e, t, l, i, o, f) {
      if (o.delete(l), e = e.getAttribute(l), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Rn(t, e, i, f);
    }
    function eo(e, t, l, i, o, f) {
      if (o.delete(l), e = e.getAttribute(l), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (nt(i, l), e === "" + i)
              return;
        }
      Rn(t, e, i, f);
    }
    function kt(e, t, l, i, o, f) {
      if (o.delete(l), e = e.getAttribute(l), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (nt(i, t), e === "" + i))
              return;
        }
      Rn(t, e, i, f);
    }
    function jd(e, t, l, i, o, f) {
      if (o.delete(l), e = e.getAttribute(l), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (nt(i, t), l = Fa("" + i), e === l)
              return;
        }
      Rn(t, e, i, f);
    }
    function og(e, t, l, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, m = 0; m < d.length; m++)
        switch (d[m].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[m].name);
        }
      if (Rc(t)) {
        for (var g in l)
          if (l.hasOwnProperty(g)) {
            var E = l[g];
            if (E != null) {
              if (pi.hasOwnProperty(g))
                typeof E != "function" && ja(g, E);
              else if (l.suppressHydrationWarning !== !0)
                switch (g) {
                  case "children":
                    typeof E != "string" && typeof E != "number" || Rn(
                      "children",
                      e.textContent,
                      E,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, E = E ? E.__html : void 0, E != null && (E = ig(e, E), Rn(
                      g,
                      d,
                      E,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(g), gu(e, E, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(g.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      g
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Oi(
                      e,
                      "class",
                      E
                    ), Rn(
                      "className",
                      d,
                      E,
                      o
                    );
                    continue;
                  default:
                    i.context === Ro && t !== "svg" && t !== "math" ? f.delete(g.toLowerCase()) : f.delete(g), d = Oi(
                      e,
                      g,
                      E
                    ), Rn(
                      g,
                      d,
                      E,
                      o
                    );
                }
            }
          }
      } else
        for (E in l)
          if (l.hasOwnProperty(E) && (g = l[E], g != null)) {
            if (pi.hasOwnProperty(E))
              typeof g != "function" && ja(E, g);
            else if (l.suppressHydrationWarning !== !0)
              switch (E) {
                case "children":
                  typeof g != "string" && typeof g != "number" || Rn(
                    "children",
                    e.textContent,
                    g,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = ig(e, g), d !== g && (o[E] = { __html: d }));
                  continue;
                case "className":
                  Fl(
                    e,
                    E,
                    "class",
                    g,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Fl(
                    e,
                    E,
                    "tabindex",
                    g,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(E), gu(e, g, o);
                  continue;
                case "multiple":
                  f.delete(E), Rn(
                    E,
                    e.multiple,
                    g,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(E), Rn(
                    E,
                    e.muted,
                    g,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Rn(
                    E,
                    e.autofocus,
                    g,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(E), d = e.getAttribute("data"), Rn(
                      E,
                      d,
                      g,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(g !== "" || t === "a" && E === "href" || t === "object" && E === "data")) {
                    console.error(
                      E === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      E,
                      E
                    ), jd(
                      e,
                      E,
                      E,
                      null,
                      f,
                      o
                    );
                    continue;
                  }
                  jd(
                    e,
                    E,
                    E,
                    g,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(E), typeof g == "function") {
                    f.delete(E.toLowerCase()), E === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === ME) {
                    f.delete(E.toLowerCase()), Rn(
                      E,
                      "function",
                      g,
                      o
                    );
                    continue;
                  }
                  jd(
                    e,
                    E,
                    E.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  jd(
                    e,
                    E,
                    "xlink:href",
                    g,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  eo(
                    e,
                    E,
                    "contenteditable",
                    g,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  eo(
                    e,
                    E,
                    "spellcheck",
                    g,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  eo(
                    e,
                    E,
                    E,
                    g,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Gr(
                    e,
                    E,
                    E.toLowerCase(),
                    g,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    m = e;
                    var L = d = E, ne = o;
                    if (f.delete(L), m = m.getAttribute(L), m === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (g === !1) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (g === !0 && m === "") break e;
                          break;
                        default:
                          if (nt(g, d), m === "" + g)
                            break e;
                      }
                    Rn(
                      d,
                      m,
                      g,
                      ne
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (m = e, L = d = E, ne = o, f.delete(L), m = m.getAttribute(L), m === null)
                      switch (typeof g) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(g) || 1 > g) break e;
                      }
                    else if (g != null)
                      switch (typeof g) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(g) || 1 > g) && (nt(g, d), m === "" + g))
                            break e;
                      }
                    Rn(
                      d,
                      m,
                      g,
                      ne
                    );
                  }
                  continue;
                case "rowSpan":
                  kt(
                    e,
                    E,
                    "rowspan",
                    g,
                    f,
                    o
                  );
                  continue;
                case "start":
                  kt(
                    e,
                    E,
                    E,
                    g,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Fl(
                    e,
                    E,
                    "x-height",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Fl(
                    e,
                    E,
                    "xlink:actuate",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Fl(
                    e,
                    E,
                    "xlink:arcrole",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Fl(
                    e,
                    E,
                    "xlink:role",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Fl(
                    e,
                    E,
                    "xlink:show",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Fl(
                    e,
                    E,
                    "xlink:title",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Fl(
                    e,
                    E,
                    "xlink:type",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Fl(
                    e,
                    E,
                    "xml:base",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Fl(
                    e,
                    E,
                    "xml:lang",
                    g,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Fl(
                    e,
                    E,
                    "xml:space",
                    g,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  g !== "" || Pg[E] || (Pg[E] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    E
                  )), Gr(
                    e,
                    E,
                    E,
                    g,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < E.length) || E[0] !== "o" && E[0] !== "O" || E[1] !== "n" && E[1] !== "N") {
                    m = Dp(E), d = !1, i.context === Ro && t !== "svg" && t !== "math" ? f.delete(m.toLowerCase()) : (L = E.toLowerCase(), L = ho.hasOwnProperty(
                      L
                    ) && ho[L] || null, L !== null && L !== E && (d = !0, f.delete(L)), f.delete(m));
                    e: if (L = e, ne = m, m = g, qu(ne))
                      if (L.hasAttribute(ne))
                        L = L.getAttribute(
                          ne
                        ), nt(
                          m,
                          ne
                        ), m = L === "" + m ? m : L;
                      else {
                        switch (typeof m) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (L = ne.toLowerCase().slice(0, 5), L !== "data-" && L !== "aria-")
                              break e;
                        }
                        m = m === void 0 ? void 0 : null;
                      }
                    else m = void 0;
                    d || Rn(
                      E,
                      m,
                      g,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && l.suppressHydrationWarning !== !0 && Bd(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function fg(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ld(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rg(e) {
      switch (e) {
        case la:
          return Yh;
        case dc:
          return tv;
        default:
          return Ro;
      }
    }
    function Kt(e, t) {
      if (e === Ro)
        switch (t) {
          case "svg":
            return Yh;
          case "math":
            return tv;
          default:
            return Ro;
        }
      return e === Yh && t === "foreignObject" ? Ro : e;
    }
    function zt(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ut() {
      var e = window.event;
      return e && e.type === "popstate" ? e === L0 ? !1 : (L0 = e, !0) : (L0 = null, !1);
    }
    function st(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function wt(e, t, l) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && e.focus();
          break;
        case "img":
          l.src ? e.src = l.src : l.srcSet && (e.srcset = l.srcSet);
      }
    }
    function Pl(e, t, l, i) {
      cg(e, t, l, i), e[xl] = i;
    }
    function vu(e) {
      Wa(e, "");
    }
    function pf(e, t, l) {
      e.nodeValue = l;
    }
    function ty(e, t) {
      e.removeChild(t);
    }
    function di(e, t) {
      e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Jt(e, t) {
      var l = t, i = 0;
      do {
        var o = l.nextSibling;
        if (e.removeChild(l), o && o.nodeType === 8)
          if (l = o.data, l === ev) {
            if (i === 0) {
              e.removeChild(o), Rf(t);
              return;
            }
            i--;
          } else
            l !== Ig && l !== Os && l !== Ds || i++;
        l = o;
      } while (l);
      Rf(t);
    }
    function Wi(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function to(e) {
      e.nodeValue = "";
    }
    function ny(e, t) {
      t = t[HE], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Sa(e, t) {
      e.nodeValue = t;
    }
    function Fi(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Fi(l), Da(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function Xr(e, t, l, i) {
      for (; e.nodeType === 1; ) {
        var o = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[oc])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          nt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Ul(e.nextSibling), e === null) break;
      }
      return null;
    }
    function bu(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ul(e.nextSibling), e === null)) return null;
      return e;
    }
    function Ul(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Ig || t === Ds || t === Os || t === Y0 || t === zS)
            break;
          if (t === ev) return null;
        }
      }
      return e;
    }
    function Vd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), l = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          l[qd(f.name)] = f.name.toLowerCase() === "style" ? Vr(e) : f.value;
        }
        return { type: t, props: l };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Qr(e, t, l) {
      return l === null || l[UE] !== !0 ? (e.nodeValue === t ? e = null : (t = An(t), e = An(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Zr(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === ev) {
            if (t === 0)
              return Ul(e.nextSibling);
            t--;
          } else
            l !== Ig && l !== Ds && l !== Os || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function hi(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === Ig || l === Ds || l === Os) {
            if (t === 0) return e;
            t--;
          } else l === ev && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Gd(e) {
      Rf(e);
    }
    function no(e) {
      Rf(e);
    }
    function gf(e, t, l, i, o) {
      switch (o && _s(e, i.ancestorInfo), t = Ld(l), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function ly(e, t, l, i) {
      if (Al(l)) {
        var o = l.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = l.attributes; o.length; )
        l.removeAttributeNode(o[0]);
      It(l, e, t), l[Jn] = i, l[xl] = t;
    }
    function vf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument;
    }
    function bf(e, t, l) {
      var i = qh;
      if (i && typeof t == "string" && t) {
        var o = Te(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof l == "string" && (o += '[crossorigin="' + l + '"]'), wS.has(o) || (wS.add(o), e = { rel: e, crossOrigin: l, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), It(t, "link", e), ln(t), i.head.appendChild(t)));
      }
    }
    function Xd(e, t, l, i) {
      var o = (o = Bn.current) ? vf(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (l = lo(l.href), t = Ja(o).hoistableStyles, i = t.get(l), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(l, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            e = lo(l.href);
            var f = Ja(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: zs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              On(e)
            )) && !f._p && (d.instance = f, d.state.loading = rp | wu), !_u.has(e))) {
              var m = {
                rel: "preload",
                as: "style",
                href: l.href,
                crossOrigin: l.crossOrigin,
                integrity: l.integrity,
                media: l.media,
                hrefLang: l.hrefLang,
                referrerPolicy: l.referrerPolicy
              };
              _u.set(e, m), f || uy(
                o,
                e,
                m,
                d.state
              );
            }
            if (t && i === null)
              throw l = `

  - ` + il(t) + `
  + ` + il(l), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + l
              );
            return d;
          }
          if (t && i !== null)
            throw l = `

  - ` + il(t) + `
  + ` + il(l), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + l
            );
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (l = ao(l), t = Ja(o).hoistableScripts, i = t.get(l), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(l, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function il(e) {
      var t = 0, l = "<link";
      return typeof e.rel == "string" ? (t++, l += ' rel="' + e.rel + '"') : Tu.call(e, "rel") && (t++, l += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, l += ' href="' + e.href + '"') : Tu.call(e, "href") && (t++, l += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, l += ' precedence="' + e.precedence + '"') : Tu.call(e, "precedence") && (t++, l += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (l += " ..."), l + " />";
    }
    function lo(e) {
      return 'href="' + Te(e) + '"';
    }
    function On(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ay(e) {
      return Ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function uy(e, t, l, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = rp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= rp;
      }), t.addEventListener("error", function() {
        return i.loading |= HS;
      }), It(t, "link", l), ln(t), e.head.appendChild(t));
    }
    function ao(e) {
      return '[src="' + Te(e) + '"]';
    }
    function kr(e) {
      return "script[async]" + e;
    }
    function Su(e, t, l) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Te(l.href) + '"]'
            );
            if (i)
              return t.instance = i, ln(i), i;
            var o = Ke({}, l, {
              "data-href": l.href,
              "data-precedence": l.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ln(i), It(i, "style", o), uo(i, l.precedence, e), t.instance = i;
          case "stylesheet":
            o = lo(l.href);
            var f = e.querySelector(
              On(o)
            );
            if (f)
              return t.state.loading |= wu, t.instance = f, ln(f), f;
            i = ay(l), (o = _u.get(o)) && Kr(i, o), f = (e.ownerDocument || e).createElement("link"), ln(f);
            var d = f;
            return d._p = new Promise(function(m, g) {
              d.onload = m, d.onerror = g;
            }), It(f, "link", i), t.state.loading |= wu, uo(f, l.precedence, e), t.instance = f;
          case "script":
            return f = ao(l.src), (o = e.querySelector(
              kr(f)
            )) ? (t.instance = o, ln(o), o) : (i = l, (o = _u.get(f)) && (i = Ke({}, l), Pi(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ln(o), It(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & wu) === zs && (i = t.instance, t.state.loading |= wu, uo(i, l.precedence, e));
      return t.instance;
    }
    function uo(e, t, l) {
      for (var i = l.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var m = i[d];
        if (m.dataset.precedence === t) f = m;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function Kr(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Pi(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function iy(e, t, l) {
      if (nv === null) {
        var i = /* @__PURE__ */ new Map(), o = nv = /* @__PURE__ */ new Map();
        o.set(l, i);
      } else
        o = nv, i = o.get(l), i || (i = /* @__PURE__ */ new Map(), o.set(l, i));
      if (i.has(e)) return i;
      for (i.set(e, null), l = l.getElementsByTagName(e), o = 0; o < l.length; o++) {
        var f = l[o];
        if (!(f[oc] || f[Jn] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== la) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var m = i.get(d);
          m ? m.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function cy(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function sg(e, t, l) {
      var i = !l.ancestorInfo.containerTagInScope;
      if (l.context === Yh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflic with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`, or move the <style> to the <style> tag.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              l = [], t.onLoad && l.push("`onLoad`"), o && l.push("`onError`"), f != null && l.push("`disabled`"), o = fg(l, "and"), o += l.length === 1 ? " prop" : " props", f = l.length === 1 ? "an " + o : "the " + o, l.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Qd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & xS) === zs);
    }
    function oy() {
    }
    function xv(e, t, l) {
      if (sp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = sp;
      if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & wu) === zs) {
        if (t.instance === null) {
          var o = lo(l.href), f = e.querySelector(
            On(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Zd.bind(i), e.then(i, i)), t.state.loading |= wu, t.instance = f, ln(f);
            return;
          }
          f = e.ownerDocument || e, l = ay(l), (o = _u.get(o)) && Kr(l, o), f = f.createElement("link"), ln(f);
          var d = f;
          d._p = new Promise(function(m, g) {
            d.onload = m, d.onerror = g;
          }), It(f, "link", l), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & xS) === zs && (i.count++, t = Zd.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function wv() {
      if (sp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = sp;
      return e.stylesheets && e.count === 0 && kd(e, e.stylesheets), 0 < e.count ? function(t) {
        var l = setTimeout(function() {
          if (e.stylesheets && kd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(l);
        };
      } : null;
    }
    function Zd() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          kd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function kd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, lv = /* @__PURE__ */ new Map(), t.forEach(dg, e), lv = null, Zd.call(e));
    }
    function dg(e, t) {
      if (!(t.state.loading & wu)) {
        var l = lv.get(e);
        if (l) var i = l.get(G0);
        else {
          l = /* @__PURE__ */ new Map(), lv.set(e, l);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), i = d);
          }
          i && l.set(G0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = l.get(d) || i, f === i && l.set(G0, o), l.set(d, o), this.count++, i = Zd.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= wu;
      }
    }
    function Sf(e, t, l) {
      var i = 0;
      switch (e) {
        case "dir":
        case "dirxml":
        case "groupEnd":
        case "table":
          return YS.apply(console[e], [console].concat(t));
        case "assert":
          i = 1;
      }
      return t = t.slice(0), typeof t[i] == "string" ? t.splice(
        i,
        1,
        _S + t[i],
        NS,
        av + l + av,
        BS
      ) : t.splice(
        i,
        0,
        _S,
        NS,
        av + l + av,
        BS
      ), t.unshift(console), YS.apply(console[e], t);
    }
    function Kd(e, t, l, i, o, f, d, m) {
      for (this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = V0, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bn(0), this.hiddenUpdates = bn(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = l ? "hydrateRoot()" : "createRoot()";
    }
    function fy(e, t, l, i, o, f, d, m, g, E, L, ne) {
      return e = new Kd(
        e,
        t,
        l,
        d,
        m,
        g,
        E,
        ne
      ), t = rE, f === !0 && (t |= _l | vi), vl && (t |= bl), f = Z(3, null, null, t), e.current = f, f.stateNode = e, t = Xu(), pa(t), e.pooledCache = t, pa(t), f.memoizedState = {
        element: i,
        isDehydrated: l,
        cache: t
      }, dd(f), e;
    }
    function ry(e) {
      return e ? (e = _f, e) : _f;
    }
    function hg(e, t, l, i) {
      return t.tag === 0 && oi(), sy(
        t.current,
        2,
        e,
        t,
        l,
        i
      ), 2;
    }
    function sy(e, t, l, i, o, f) {
      if (fl && typeof fl.onScheduleFiberRoot == "function")
        try {
          fl.onScheduleFiberRoot(zf, i, l);
        } catch (d) {
          gl || (gl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      Re !== null && typeof Re.markRenderScheduled == "function" && Re.markRenderScheduled(t), o = ry(o), i.context === null ? i.context = o : i.pendingContext = o, ta && ol !== null && !qS && (qS = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ge(ol) || "Unknown"
      )), i = Iu(t), i.payload = { element: l }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), l = ei(e, i, t), l !== null && (Ht(l, e, t), zr(l, e, t));
    }
    function io(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function Jd(e, t) {
      io(e, t), (e = e.alternate) && io(e, t);
    }
    function Ct(e) {
      if (e.tag === 13) {
        var t = Xn(e, 67108864);
        t !== null && Ht(t, e, 67108864), Jd(e, 67108864);
      }
    }
    function dy() {
      return ol;
    }
    function _v() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, l = 0; 31 > l; l++) {
        var i = vt(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function mg(e, t, l, i) {
      var o = K.T;
      K.T = null;
      var f = _t.p;
      try {
        _t.p = na, hy(e, t, l, i);
      } finally {
        _t.p = f, K.T = o;
      }
    }
    function Nv(e, t, l, i) {
      var o = K.T;
      K.T = null;
      var f = _t.p;
      try {
        _t.p = Ea, hy(e, t, l, i);
      } finally {
        _t.p = f, K.T = o;
      }
    }
    function hy(e, t, l, i) {
      if (uv) {
        var o = my(i);
        if (o === null)
          Fc(
            e,
            t,
            i,
            iv,
            l
          ), $d(e, i);
        else if (yy(
          o,
          e,
          t,
          l,
          i
        ))
          i.stopPropagation();
        else if ($d(e, i), t & 4 && -1 < _E.indexOf(e)) {
          for (; o !== null; ) {
            var f = Al(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ge(f.pendingLanes);
                    if (d !== 0) {
                      var m = f;
                      for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                        var g = 1 << 31 - rl(d);
                        m.entanglements[1] |= g, d &= ~g;
                      }
                      qa(f), (en & (oa | So)) === Qa && (Gg = Ru() + bS, mf(0));
                    }
                  }
                  break;
                case 13:
                  m = Xn(f, 2), m !== null && Ht(m, f, 2), Kl(), Jd(f, 2);
              }
            if (f = my(i), f === null && Fc(
              e,
              t,
              i,
              iv,
              l
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Fc(
            e,
            t,
            i,
            null,
            l
          );
      }
    }
    function my(e) {
      return e = Ci(e), Ef(e);
    }
    function Ef(e) {
      if (iv = null, e = ql(e), e !== null) {
        var t = Mt(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = Q(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return iv = e, null;
    }
    function co(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return na;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ea;
        case "message":
          switch (jv()) {
            case uc:
              return na;
            case ah:
              return Ea;
            case Df:
            case Lv:
              return Ga;
            case Ay:
              return ro;
            default:
              return Ga;
          }
        default:
          return Ga;
      }
    }
    function $d(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qf = null;
          break;
        case "dragenter":
        case "dragleave":
          Zf = null;
          break;
        case "mouseover":
        case "mouseout":
          kf = null;
          break;
        case "pointerover":
        case "pointerout":
          hp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          mp.delete(t.pointerId);
      }
    }
    function Ii(e, t, l, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Al(t), t !== null && Ct(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function yy(e, t, l, i, o) {
      switch (t) {
        case "focusin":
          return Qf = Ii(
            Qf,
            e,
            t,
            l,
            i,
            o
          ), !0;
        case "dragenter":
          return Zf = Ii(
            Zf,
            e,
            t,
            l,
            i,
            o
          ), !0;
        case "mouseover":
          return kf = Ii(
            kf,
            e,
            t,
            l,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return hp.set(
            f,
            Ii(
              hp.get(f) || null,
              e,
              t,
              l,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, mp.set(
            f,
            Ii(
              mp.get(f) || null,
              e,
              t,
              l,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ec(e) {
      var t = ql(e.target);
      if (t !== null) {
        var l = Mt(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = Q(l), t !== null) {
              e.blockedOn = t, Ri(e.priority, function() {
                if (l.tag === 13) {
                  var i = yl(l), o = Xn(l, i);
                  o !== null && Ht(o, l, i), Jd(l, i);
                }
              });
              return;
            }
          } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Il(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = my(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var i = new l.constructor(
            l.type,
            l
          ), o = i;
          A !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), A = o, l.target.dispatchEvent(i), A === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), A = null;
        } else
          return t = Al(l), t !== null && Ct(t), e.blockedOn = l, !1;
        t.shift();
      }
      return !0;
    }
    function Tf(e, t, l) {
      Il(e) && l.delete(t);
    }
    function Bv() {
      X0 = !1, Qf !== null && Il(Qf) && (Qf = null), Zf !== null && Il(Zf) && (Zf = null), kf !== null && Il(kf) && (kf = null), hp.forEach(Tf), mp.forEach(Tf);
    }
    function Jr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, X0 || (X0 = !0, dn.unstable_scheduleCallback(
        dn.unstable_NormalPriority,
        Bv
      )));
    }
    function py(e) {
      cv !== e && (cv = e, dn.unstable_scheduleCallback(
        dn.unstable_NormalPriority,
        function() {
          cv === e && (cv = null);
          for (var t = 0; t < e.length; t += 3) {
            var l = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Ef(i || l) === null)
                continue;
              break;
            }
            var f = Al(l);
            f !== null && (e.splice(t, 3), t -= 3, l = {
              pending: !0,
              data: o,
              method: l.method,
              action: i
            }, Object.freeze(l), uu(
              f,
              l,
              i,
              o
            ));
          }
        }
      ));
    }
    function Rf(e) {
      function t(g) {
        return Jr(g, e);
      }
      Qf !== null && Jr(Qf, e), Zf !== null && Jr(Zf, e), kf !== null && Jr(kf, e), hp.forEach(t), mp.forEach(t);
      for (var l = 0; l < Kf.length; l++) {
        var i = Kf[l];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Kf.length && (l = Kf[0], l.blockedOn === null); )
        ec(l), l.blockedOn === null && Kf.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
        for (i = 0; i < l.length; i += 3) {
          var o = l[i], f = l[i + 1], d = o[xl] || null;
          if (typeof f == "function")
            d || py(l);
          else if (d) {
            var m = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[xl] || null)
                m = d.formAction;
              else if (Ef(o) !== null) continue;
            } else m = d.action;
            typeof m == "function" ? l[i + 1] = m : (l.splice(i, 3), i -= 3), py(l);
          }
        }
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function Af(e) {
      this._internalRoot = e;
    }
    function vy(e) {
      e[cc] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var dn = v1(), by = jh(), Sy = b1(), Ey = Symbol.for("react.element"), tc = Symbol.for("react.transitional.element"), Of = Symbol.for("react.portal"), Eu = Symbol.for("react.fragment"), Wd = Symbol.for("react.strict_mode"), Fd = Symbol.for("react.profiler"), ft = Symbol.for("react.provider"), $r = Symbol.for("react.consumer"), ea = Symbol.for("react.context"), oo = Symbol.for("react.forward_ref"), Pd = Symbol.for("react.suspense"), Wr = Symbol.for("react.suspense_list"), nc = Symbol.for("react.memo"), cl = Symbol.for("react.lazy"), fo = Symbol.for("react.offscreen"), yg = Symbol.for("react.memo_cache_sentinel"), pg = Symbol.iterator, Yv = Symbol.for("react.client.reference"), K = by.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ke = Object.assign, lc = 0, Ot, Id, Nn, gg, eh, th, Fr;
    Be.__reactDisabledLog = !0;
    var nh, Ty, Pr = !1, Ir = new (typeof WeakMap == "function" ? WeakMap : Map)(), ol = null, ta = !1, Kn = Array.isArray, _t = Sy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Ry = [], es = [], Va = -1, ac = C(null), ts = C(null), Bn = C(null), ns = C(null), Tu = Object.prototype.hasOwnProperty, Hl = dn.unstable_scheduleCallback, vg = dn.unstable_cancelCallback, lh = dn.unstable_shouldYield, mi = dn.unstable_requestPaint, Ru = dn.unstable_now, jv = dn.unstable_getCurrentPriorityLevel, uc = dn.unstable_ImmediatePriority, ah = dn.unstable_UserBlockingPriority, Df = dn.unstable_NormalPriority, Lv = dn.unstable_LowPriority, Ay = dn.unstable_IdlePriority, Vv = dn.log, Gv = dn.unstable_setDisableYieldValue, zf = null, fl = null, Re = null, gl = !1, vl = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", rl = Math.clz32 ? Math.clz32 : Ft, Xv = Math.log, Cf = Math.LN2, ic = 128, ls = 4194304, na = 2, Ea = 8, Ga = 32, ro = 268435456, yi = Math.random().toString(36).slice(2), Jn = "__reactFiber$" + yi, xl = "__reactProps$" + yi, cc = "__reactContainer$" + yi, so = "__reactEvents$" + yi, Qv = "__reactListeners$" + yi, Zv = "__reactHandles$" + yi, bg = "__reactResources$" + yi, oc = "__reactMarker$" + yi, as = /* @__PURE__ */ new Set(), pi = {}, Oy = {}, wl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Sg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Dy = {}, zy = {}, Eg = /[\n"\\]/g, uh = !1, Cy = !1, us = !1, Tg = !1, Rg = !1, ih = !1, ch = ["value", "defaultValue"], is = !1, oh = /["'&<>\n\t]|^\s|\s$/, Ag = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), fh = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), fc = fh.concat(["button"]), rc = "dd dt li option optgroup p rp rt".split(" "), gi = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null
    }, sc = {}, dc = "http://www.w3.org/1998/Math/MathML", la = "http://www.w3.org/2000/svg", My = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Uy = /([A-Z])/g, Mf = /^ms-/, Kv = /^(?:webkit|moz|o)[A-Z]/, Og = /^-ms-/, rh = /-(.)/g, Hy = /;\s*$/, Uf = {}, Hf = {}, cs = !1, xy = !1, xf = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), wy = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), ho = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _y = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, wf = {}, sh = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), n = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), a = !1, u = {}, c = /^on./, r = /^on[^A-Z]/, s = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), y = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), b = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, A = null, N = null, ee = null, oe = !1, X = !1;
    if (wl)
      try {
        var F = {};
        Object.defineProperty(F, "passive", {
          get: function() {
            X = !0;
          }
        }), window.addEventListener("test", F, F), window.removeEventListener("test", F, F);
      } catch {
        X = !1;
      }
    var Me = null, Xe = null, Lt = null, Y = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, _ = tl(Y), j = Ke({}, Y, { view: 0, detail: 0 }), ue = tl(j), Ue, We, _e, je = Ke({}, j, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _e && (_e && e.type === "mousemove" ? (Ue = e.screenX - _e.screenX, We = e.screenY - _e.screenY) : We = Ue = 0, _e = e), Ue);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : We;
      }
    }), Dn = tl(je), gt = Ke({}, je, { dataTransfer: 0 }), hc = tl(gt), Jv = Ke({}, j, { relatedTarget: 0 }), $v = tl(Jv), Y1 = Ke({}, Y, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), q1 = tl(Y1), j1 = Ke({}, Y, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), L1 = tl(j1), V1 = Ke({}, Y, { data: 0 }), lb = tl(
      V1
    ), G1 = lb, X1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Q1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Z1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, k1 = Ke({}, j, {
      key: function(e) {
        if (e.key) {
          var t = X1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = No(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q1[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qs,
      charCode: function(e) {
        return e.type === "keypress" ? No(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), K1 = tl(k1), J1 = Ke({}, je, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ab = tl(J1), $1 = Ke({}, j, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qs
    }), W1 = tl($1), F1 = Ke({}, Y, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), P1 = tl(F1), I1 = Ke({}, je, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), eE = tl(I1), tE = Ke({}, Y, {
      newState: 0,
      oldState: 0
    }), nE = tl(tE), lE = [9, 13, 27, 32], ub = 229, Wv = wl && "CompositionEvent" in window, Ny = null;
    wl && "documentMode" in document && (Ny = document.documentMode);
    var aE = wl && "TextEvent" in window && !Ny, ib = wl && (!Wv || Ny && 8 < Ny && 11 >= Ny), cb = 32, ob = String.fromCharCode(cb), fb = !1, dh = !1, uE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, By = null, Yy = null, rb = !1;
    wl && (rb = js("input") && (!document.documentMode || 9 < document.documentMode));
    var aa = typeof Object.is == "function" ? Object.is : em, iE = wl && "documentMode" in document && 11 >= document.documentMode, hh = null, Fv = null, qy = null, Pv = !1, mh = {
      animationend: Ac("Animation", "AnimationEnd"),
      animationiteration: Ac("Animation", "AnimationIteration"),
      animationstart: Ac("Animation", "AnimationStart"),
      transitionrun: Ac("Transition", "TransitionRun"),
      transitionstart: Ac("Transition", "TransitionStart"),
      transitioncancel: Ac("Transition", "TransitionCancel"),
      transitionend: Ac("Transition", "TransitionEnd")
    }, Iv = {}, sb = {};
    wl && (sb = document.createElement("div").style, "AnimationEvent" in window || (delete mh.animationend.animation, delete mh.animationiteration.animation, delete mh.animationstart.animation), "TransitionEvent" in window || delete mh.transitionend.transition);
    var db = Oc("animationend"), hb = Oc("animationiteration"), mb = Oc("animationstart"), cE = Oc("transitionrun"), oE = Oc("transitionstart"), fE = Oc("transitioncancel"), yb = Oc("transitionend"), pb = /* @__PURE__ */ new Map(), gb = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    ), Dg = 1, jy = 2, os = 4, Au = [], yh = 0, e0 = 0, _f = {};
    Object.freeze(_f);
    var Ou = null, ph = null, $t = 0, rE = 1, bl = 2, _l = 8, vi = 16, vb = 64, gh = dn.unstable_now, t0 = -0, zg = -0, Ta = -1.1, fs = -0, Cg = !1, Mg = !1, bi = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Ly = [], Vy = [], Gy = [], Xy = [], Qy = [], Zy = [], rs = /* @__PURE__ */ new Set();
    bi.recordUnsafeLifecycleWarnings = function(e, t) {
      rs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Ly.push(e), e.mode & _l && typeof t.UNSAFE_componentWillMount == "function" && Vy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gy.push(e), e.mode & _l && typeof t.UNSAFE_componentWillReceiveProps == "function" && Xy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Qy.push(e), e.mode & _l && typeof t.UNSAFE_componentWillUpdate == "function" && Zy.push(e));
    }, bi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Ly.length && (Ly.forEach(function(m) {
        e.add(
          ge(m) || "Component"
        ), rs.add(m.type);
      }), Ly = []);
      var t = /* @__PURE__ */ new Set();
      0 < Vy.length && (Vy.forEach(function(m) {
        t.add(
          ge(m) || "Component"
        ), rs.add(m.type);
      }), Vy = []);
      var l = /* @__PURE__ */ new Set();
      0 < Gy.length && (Gy.forEach(function(m) {
        l.add(
          ge(m) || "Component"
        ), rs.add(m.type);
      }), Gy = []);
      var i = /* @__PURE__ */ new Set();
      0 < Xy.length && (Xy.forEach(
        function(m) {
          i.add(
            ge(m) || "Component"
          ), rs.add(m.type);
        }
      ), Xy = []);
      var o = /* @__PURE__ */ new Set();
      0 < Qy.length && (Qy.forEach(function(m) {
        o.add(
          ge(m) || "Component"
        ), rs.add(m.type);
      }), Qy = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Zy.length && (Zy.forEach(function(m) {
        f.add(
          ge(m) || "Component"
        ), rs.add(m.type);
      }), Zy = []), 0 < t.size) {
        var d = D(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = D(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = D(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = D(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < l.size && (d = D(
        l
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = D(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ug = /* @__PURE__ */ new Map(), bb = /* @__PURE__ */ new Set();
    bi.recordLegacyContextWarning = function(e, t) {
      for (var l = null, i = e; i !== null; )
        i.mode & _l && (l = i), i = i.return;
      l === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !bb.has(e.type) && (i = Ug.get(l), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ug.set(l, i)), i.push(e));
    }, bi.flushLegacyContextWarning = function() {
      Ug.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], l = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            l.add(ge(o) || "Component"), bb.add(o.type);
          });
          var i = D(l);
          Ae(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, bi.discardPendingWarnings = function() {
      Ly = [], Vy = [], Gy = [], Xy = [], Qy = [], Zy = [], Ug = /* @__PURE__ */ new Map();
    };
    var n0 = /* @__PURE__ */ new WeakMap(), vh = [], bh = 0, Hg = null, xg = 0, Du = [], zu = 0, ss = null, mo = 1, yo = "", ua = null, Sl = null, mt = !1, po = !1, Cu = null, Si = null, mc = !1, l0 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), wg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
    ), Sb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), a0 = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, ky = null, _g = !1, Eb = {
      "react-stack-bottom-frame": function(e, t, l) {
        var i = ta;
        ta = !0;
        try {
          return e(t, l);
        } finally {
          ta = i;
        }
      }
    }, u0 = Eb["react-stack-bottom-frame"].bind(Eb), Tb = {
      "react-stack-bottom-frame": function(e) {
        var t = ta;
        ta = !0;
        try {
          return e.render();
        } finally {
          ta = t;
        }
      }
    }, Rb = Tb["react-stack-bottom-frame"].bind(Tb), Ab = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (l) {
          bt(e, e.return, l);
        }
      }
    }, i0 = Ab["react-stack-bottom-frame"].bind(Ab), Ob = {
      "react-stack-bottom-frame": function(e, t, l, i, o) {
        try {
          t.componentDidUpdate(l, i, o);
        } catch (f) {
          bt(e, e.return, f);
        }
      }
    }, Db = Ob["react-stack-bottom-frame"].bind(Ob), zb = {
      "react-stack-bottom-frame": function(e, t) {
        var l = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: l !== null ? l : ""
        });
      }
    }, sE = zb["react-stack-bottom-frame"].bind(zb), Cb = {
      "react-stack-bottom-frame": function(e, t, l) {
        try {
          l.componentWillUnmount();
        } catch (i) {
          bt(e, t, i);
        }
      }
    }, Mb = Cb["react-stack-bottom-frame"].bind(Cb), Ub = {
      "react-stack-bottom-frame": function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, dE = Ub["react-stack-bottom-frame"].bind(Ub), Hb = {
      "react-stack-bottom-frame": function(e, t, l) {
        try {
          l();
        } catch (i) {
          bt(e, t, i);
        }
      }
    }, hE = Hb["react-stack-bottom-frame"].bind(Hb), xb = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Nf = xb["react-stack-bottom-frame"].bind(xb), Sh = null, Ky = 0, et = null, c0, wb = c0 = !1, _b = {}, Nb = {}, Bb = {};
    q = function(e, t, l) {
      if (l !== null && typeof l == "object" && l._store && (!l._store.validated && l.key == null || l._store.validated === 2)) {
        if (typeof l._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        l._store.validated = 1;
        var i = ge(e), o = i || "null";
        if (!_b[o]) {
          _b[o] = !0, l = l._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = ge(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          l != null && e !== l && (i = null, typeof l.tag == "number" ? i = ge(l) : typeof l.name == "string" && (i = l.name), i && (d = " It was passed a child from " + i + ".")), Ae(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var ds = rm(!0), Yb = rm(!1), Eh = C(null), Ng = C(0), Mu = C(null), yc = null, Th = 1, Jy = 2, $n = C(0), Uu = 0, Hu = 1, ia = 2, El = 4, Wn = 8, mE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(l, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(l) {
          return l();
        });
      };
    }, yE = dn.unstable_scheduleCallback, pE = dn.unstable_NormalPriority, Fn = {
      $$typeof: ea,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, $y = null, o0 = 0, hs = 0, Rh = null, qb = K.S;
    K.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Gp(e, t), qb !== null && qb(e, t);
    };
    var ms = C(null), Ah, jb = /* @__PURE__ */ new Set(), Lb = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), Vb = /* @__PURE__ */ new Set(), Bf = 0, Qe = null, Nt = null, Yn = null, Bg = !1, Oh = !1, ys = !1, Yg = 0, Wy = 0, go = null, gE = 0, vE = 25, J = null, xu = null, vo = -1, Fy = !1, r0 = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }, pc = {
      readContext: qt,
      use: Qu,
      useCallback: an,
      useContext: an,
      useEffect: an,
      useImperativeHandle: an,
      useLayoutEffect: an,
      useInsertionEffect: an,
      useMemo: an,
      useReducer: an,
      useRef: an,
      useState: an,
      useDebugValue: an,
      useDeferredValue: an,
      useTransition: an,
      useSyncExternalStore: an,
      useId: an
    };
    pc.useCacheRefresh = an, pc.useMemoCache = an, pc.useHostTransitionStatus = an, pc.useFormState = an, pc.useActionState = an, pc.useOptimistic = an;
    var Yf = null, ps = null, qf = null, gs = null, Ra = null, ca = null, jf = null;
    Yf = {
      readContext: function(e) {
        return qt(e);
      },
      use: Qu,
      useCallback: function(e, t) {
        return J = "useCallback", lt(), xc(t), ed(e, t);
      },
      useContext: function(e) {
        return J = "useContext", lt(), qt(e);
      },
      useEffect: function(e, t) {
        return J = "useEffect", lt(), xc(t), qi(e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", lt(), xc(l), Ko(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        J = "useInsertionEffect", lt(), xc(t), Yi(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", lt(), xc(t), Zo(e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", lt(), xc(t);
        var l = K.H;
        K.H = Ra;
        try {
          return td(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", lt();
        var i = K.H;
        K.H = Ra;
        try {
          return _i(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function(e) {
        return J = "useRef", lt(), Yc(e);
      },
      useState: function(e) {
        J = "useState", lt();
        var t = K.H;
        K.H = Ra;
        try {
          return Zn(e);
        } finally {
          K.H = t;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", lt();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", lt(), Jo(e, t);
      },
      useTransition: function() {
        return J = "useTransition", lt(), wa();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", lt(), Cl(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", lt(), bm();
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", lt(), Sm();
      }
    }, Yf.useMemoCache = Un, Yf.useHostTransitionStatus = qc, Yf.useFormState = function(e, t) {
      return J = "useFormState", lt(), sr(), lu(e, t);
    }, Yf.useActionState = function(e, t) {
      return J = "useActionState", lt(), lu(e, t);
    }, Yf.useOptimistic = function(e) {
      return J = "useOptimistic", lt(), Sn(e);
    }, ps = {
      readContext: function(e) {
        return qt(e);
      },
      use: Qu,
      useCallback: function(e, t) {
        return J = "useCallback", se(), ed(e, t);
      },
      useContext: function(e) {
        return J = "useContext", se(), qt(e);
      },
      useEffect: function(e, t) {
        return J = "useEffect", se(), qi(e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", se(), Ko(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        J = "useInsertionEffect", se(), Yi(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", se(), Zo(e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", se();
        var l = K.H;
        K.H = Ra;
        try {
          return td(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", se();
        var i = K.H;
        K.H = Ra;
        try {
          return _i(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function(e) {
        return J = "useRef", se(), Yc(e);
      },
      useState: function(e) {
        J = "useState", se();
        var t = K.H;
        K.H = Ra;
        try {
          return Zn(e);
        } finally {
          K.H = t;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", se();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", se(), Jo(e, t);
      },
      useTransition: function() {
        return J = "useTransition", se(), wa();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", se(), Cl(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", se(), bm();
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", se(), Sm();
      }
    }, ps.useMemoCache = Un, ps.useHostTransitionStatus = qc, ps.useFormState = function(e, t) {
      return J = "useFormState", se(), sr(), lu(e, t);
    }, ps.useActionState = function(e, t) {
      return J = "useActionState", se(), lu(e, t);
    }, ps.useOptimistic = function(e) {
      return J = "useOptimistic", se(), Sn(e);
    }, qf = {
      readContext: function(e) {
        return qt(e);
      },
      use: Qu,
      useCallback: function(e, t) {
        return J = "useCallback", se(), au(e, t);
      },
      useContext: function(e) {
        return J = "useContext", se(), qt(e);
      },
      useEffect: function(e, t) {
        J = "useEffect", se(), En(2048, Wn, e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", se(), pr(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        return J = "useInsertionEffect", se(), En(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", se(), En(4, El, e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", se();
        var l = K.H;
        K.H = ca;
        try {
          return ku(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", se();
        var i = K.H;
        K.H = ca;
        try {
          return Zu(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function() {
        return J = "useRef", se(), pt().memoizedState;
      },
      useState: function() {
        J = "useState", se();
        var e = K.H;
        K.H = ca;
        try {
          return Zu(ll);
        } finally {
          K.H = e;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", se();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", se(), gm(e, t);
      },
      useTransition: function() {
        return J = "useTransition", se(), yn();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", se(), eu(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", se(), pt().memoizedState;
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", se(), pt().memoizedState;
      }
    }, qf.useMemoCache = Un, qf.useHostTransitionStatus = qc, qf.useFormState = function(e) {
      return J = "useFormState", se(), sr(), yr(e);
    }, qf.useActionState = function(e) {
      return J = "useActionState", se(), yr(e);
    }, qf.useOptimistic = function(e, t) {
      return J = "useOptimistic", se(), ht(e, t);
    }, gs = {
      readContext: function(e) {
        return qt(e);
      },
      use: Qu,
      useCallback: function(e, t) {
        return J = "useCallback", se(), au(e, t);
      },
      useContext: function(e) {
        return J = "useContext", se(), qt(e);
      },
      useEffect: function(e, t) {
        J = "useEffect", se(), En(2048, Wn, e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", se(), pr(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        return J = "useInsertionEffect", se(), En(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", se(), En(4, El, e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", se();
        var l = K.H;
        K.H = jf;
        try {
          return ku(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", se();
        var i = K.H;
        K.H = jf;
        try {
          return al(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function() {
        return J = "useRef", se(), pt().memoizedState;
      },
      useState: function() {
        J = "useState", se();
        var e = K.H;
        K.H = jf;
        try {
          return al(ll);
        } finally {
          K.H = e;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", se();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", se(), nd(e, t);
      },
      useTransition: function() {
        return J = "useTransition", se(), vr();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", se(), eu(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", se(), pt().memoizedState;
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", se(), pt().memoizedState;
      }
    }, gs.useMemoCache = Un, gs.useHostTransitionStatus = qc, gs.useFormState = function(e) {
      return J = "useFormState", se(), sr(), Nc(e);
    }, gs.useActionState = function(e) {
      return J = "useActionState", se(), Nc(e);
    }, gs.useOptimistic = function(e, t) {
      return J = "useOptimistic", se(), Ha(e, t);
    }, Ra = {
      readContext: function(e) {
        return z(), qt(e);
      },
      use: function(e) {
        return R(), Qu(e);
      },
      useCallback: function(e, t) {
        return J = "useCallback", R(), lt(), ed(e, t);
      },
      useContext: function(e) {
        return J = "useContext", R(), lt(), qt(e);
      },
      useEffect: function(e, t) {
        return J = "useEffect", R(), lt(), qi(e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", R(), lt(), Ko(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        J = "useInsertionEffect", R(), lt(), Yi(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", R(), lt(), Zo(e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", R(), lt();
        var l = K.H;
        K.H = Ra;
        try {
          return td(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", R(), lt();
        var i = K.H;
        K.H = Ra;
        try {
          return _i(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function(e) {
        return J = "useRef", R(), lt(), Yc(e);
      },
      useState: function(e) {
        J = "useState", R(), lt();
        var t = K.H;
        K.H = Ra;
        try {
          return Zn(e);
        } finally {
          K.H = t;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", R(), lt();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", R(), lt(), Jo(e, t);
      },
      useTransition: function() {
        return J = "useTransition", R(), lt(), wa();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", R(), lt(), Cl(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", R(), lt(), bm();
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", lt(), Sm();
      },
      useMemoCache: function(e) {
        return R(), Un(e);
      }
    }, Ra.useHostTransitionStatus = qc, Ra.useFormState = function(e, t) {
      return J = "useFormState", R(), lt(), lu(e, t);
    }, Ra.useActionState = function(e, t) {
      return J = "useActionState", R(), lt(), lu(e, t);
    }, Ra.useOptimistic = function(e) {
      return J = "useOptimistic", R(), lt(), Sn(e);
    }, ca = {
      readContext: function(e) {
        return z(), qt(e);
      },
      use: function(e) {
        return R(), Qu(e);
      },
      useCallback: function(e, t) {
        return J = "useCallback", R(), se(), au(e, t);
      },
      useContext: function(e) {
        return J = "useContext", R(), se(), qt(e);
      },
      useEffect: function(e, t) {
        J = "useEffect", R(), se(), En(2048, Wn, e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", R(), se(), pr(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        return J = "useInsertionEffect", R(), se(), En(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", R(), se(), En(4, El, e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", R(), se();
        var l = K.H;
        K.H = ca;
        try {
          return ku(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", R(), se();
        var i = K.H;
        K.H = ca;
        try {
          return Zu(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function() {
        return J = "useRef", R(), se(), pt().memoizedState;
      },
      useState: function() {
        J = "useState", R(), se();
        var e = K.H;
        K.H = ca;
        try {
          return Zu(ll);
        } finally {
          K.H = e;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", R(), se();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", R(), se(), gm(e, t);
      },
      useTransition: function() {
        return J = "useTransition", R(), se(), yn();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", R(), se(), eu(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", R(), se(), pt().memoizedState;
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", se(), pt().memoizedState;
      },
      useMemoCache: function(e) {
        return R(), Un(e);
      }
    }, ca.useHostTransitionStatus = qc, ca.useFormState = function(e) {
      return J = "useFormState", R(), se(), yr(e);
    }, ca.useActionState = function(e) {
      return J = "useActionState", R(), se(), yr(e);
    }, ca.useOptimistic = function(e, t) {
      return J = "useOptimistic", R(), se(), ht(e, t);
    }, jf = {
      readContext: function(e) {
        return z(), qt(e);
      },
      use: function(e) {
        return R(), Qu(e);
      },
      useCallback: function(e, t) {
        return J = "useCallback", R(), se(), au(e, t);
      },
      useContext: function(e) {
        return J = "useContext", R(), se(), qt(e);
      },
      useEffect: function(e, t) {
        J = "useEffect", R(), se(), En(2048, Wn, e, t);
      },
      useImperativeHandle: function(e, t, l) {
        return J = "useImperativeHandle", R(), se(), pr(e, t, l);
      },
      useInsertionEffect: function(e, t) {
        return J = "useInsertionEffect", R(), se(), En(4, ia, e, t);
      },
      useLayoutEffect: function(e, t) {
        return J = "useLayoutEffect", R(), se(), En(4, El, e, t);
      },
      useMemo: function(e, t) {
        J = "useMemo", R(), se();
        var l = K.H;
        K.H = ca;
        try {
          return ku(e, t);
        } finally {
          K.H = l;
        }
      },
      useReducer: function(e, t, l) {
        J = "useReducer", R(), se();
        var i = K.H;
        K.H = ca;
        try {
          return al(e, t, l);
        } finally {
          K.H = i;
        }
      },
      useRef: function() {
        return J = "useRef", R(), se(), pt().memoizedState;
      },
      useState: function() {
        J = "useState", R(), se();
        var e = K.H;
        K.H = ca;
        try {
          return al(ll);
        } finally {
          K.H = e;
        }
      },
      useDebugValue: function() {
        J = "useDebugValue", R(), se();
      },
      useDeferredValue: function(e, t) {
        return J = "useDeferredValue", R(), se(), nd(e, t);
      },
      useTransition: function() {
        return J = "useTransition", R(), se(), vr();
      },
      useSyncExternalStore: function(e, t, l) {
        return J = "useSyncExternalStore", R(), se(), eu(
          e,
          t,
          l
        );
      },
      useId: function() {
        return J = "useId", R(), se(), pt().memoizedState;
      },
      useCacheRefresh: function() {
        return J = "useCacheRefresh", se(), pt().memoizedState;
      },
      useMemoCache: function(e) {
        return R(), Un(e);
      }
    }, jf.useHostTransitionStatus = qc, jf.useFormState = function(e) {
      return J = "useFormState", R(), se(), Nc(e);
    }, jf.useActionState = function(e) {
      return J = "useActionState", R(), se(), Nc(e);
    }, jf.useOptimistic = function(e, t) {
      return J = "useOptimistic", R(), se(), Ha(e, t);
    };
    var Gb = {}, Xb = /* @__PURE__ */ new Set(), Qb = /* @__PURE__ */ new Set(), Zb = /* @__PURE__ */ new Set(), kb = /* @__PURE__ */ new Set(), Kb = /* @__PURE__ */ new Set(), Jb = /* @__PURE__ */ new Set(), $b = /* @__PURE__ */ new Set(), Wb = /* @__PURE__ */ new Set(), Fb = /* @__PURE__ */ new Set(), Pb = /* @__PURE__ */ new Set();
    Object.freeze(Gb);
    var s0 = {
      isMounted: function(e) {
        var t = ol;
        if (t !== null && ta && t.tag === 1) {
          var l = t.stateNode;
          l._warnedAboutRefsInRender || console.error(
            "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",
            ge(t) || "A component"
          ), l._warnedAboutRefsInRender = !0;
        }
        return (e = e._reactInternals) ? Mt(e) === e : !1;
      },
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var i = yl(e), o = Iu(i);
        o.payload = t, l != null && (ld(l), o.callback = l), t = ei(e, o, i), t !== null && (Ht(t, e, i), zr(t, e, i)), Ye(e, i);
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var i = yl(e), o = Iu(i);
        o.tag = oS, o.payload = t, l != null && (ld(l), o.callback = l), t = ei(e, o, i), t !== null && (Ht(t, e, i), zr(t, e, i)), Ye(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = yl(e), i = Iu(l);
        i.tag = fS, t != null && (ld(t), i.callback = t), t = ei(e, i, l), t !== null && (Ht(t, e, l), zr(t, e, l)), Re !== null && typeof Re.markForceUpdateScheduled == "function" && Re.markForceUpdateScheduled(e, l);
      }
    }, qg = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Dh = null, d0 = null, Ib = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), sl = !1, eS = {}, tS = {}, nS = {}, lS = {}, zh = !1, aS = {}, h0 = {}, m0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0
    }, uS = !1, y0 = C(null), p0 = C(null), iS = {}, jg = null, Ch = null, Mh = !1, cS = 0, oS = 1, fS = 2, g0 = 3, Lf = !1, rS = !1, v0 = null, b0 = !1, sS = null;
    sS = /* @__PURE__ */ new Set();
    var bo = !1, gn = !1, S0 = !1, dS = typeof WeakSet == "function" ? WeakSet : Set, dl = null, Uh = null, Hh = null, hS = !1, qn = null, Xa = !1, Ei = null, Py = 8192, mS = !1;
    try {
      var yS = Object.preventExtensions({});
    } catch {
      mS = !0;
    }
    var bE = {
      getCacheForType: function(e) {
        var t = qt(Fn), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      getOwner: function() {
        return ol;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Iy = Symbol.for;
      Iy("selector.component"), Iy("selector.has_pseudo_class"), Iy("selector.role"), Iy("selector.test_id"), Iy("selector.text");
    }
    var SE = [], EE = typeof WeakMap == "function" ? WeakMap : Map, Qa = 0, oa = 2, So = 4, Eo = 0, ep = 1, xh = 2, E0 = 3, vs = 4, pS = 5, Lg = 6, en = Qa, Vt = null, it = null, ct = 0, Aa = 0, tp = 1, bs = 2, np = 3, gS = 4, T0 = 5, wh = 6, lp = 7, R0 = 8, Gt = Aa, Za = null, To = !1, _h = !1, A0 = !1, gc = 0, vn = Eo, Vf = 0, Gf = 0, O0 = 0, ka = 0, Ss = 0, ap = null, Ti = null, Vg = !1, D0 = 0, vS = 300, Gg = 1 / 0, bS = 500, up = null, Xf = null, Xg = !1, Es = null, ip = 0, z0 = 0, C0 = null, TE = 50, cp = 0, M0 = null, U0 = !1, Qg = !1, RE = 50, Ts = 0, op = null, Nh = !1, SS = 0, AE = 1, OE = 2, Zg = null, ES = !1, TS = /* @__PURE__ */ new Set(), DE = {}, kg = null, Bh = null, H0 = !1, x0 = !1, Kg = !1, w0 = !1, Rs = 0, _0 = {};
    (function() {
      for (var e = 0; e < gb.length; e++) {
        var t = gb[e], l = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Gl(l, "on" + t);
      }
      Gl(db, "onAnimationEnd"), Gl(hb, "onAnimationIteration"), Gl(mb, "onAnimationStart"), Gl("dblclick", "onDoubleClick"), Gl("focusin", "onFocus"), Gl("focusout", "onBlur"), Gl(cE, "onTransitionRun"), Gl(oE, "onTransitionStart"), Gl(fE, "onTransitionCancel"), Gl(yb, "onTransitionEnd");
    })(), jl("onMouseEnter", ["mouseout", "mouseover"]), jl("onMouseLeave", ["mouseout", "mouseover"]), jl("onPointerEnter", ["pointerout", "pointerover"]), jl("onPointerLeave", ["pointerout", "pointerover"]), da(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), da(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), da("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), da(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), da(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), da(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var fp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), N0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fp)
    ), Jg = "_reactListening" + Math.random().toString(36).slice(2), RS = !1, AS = !1, $g = !1, OS = !1, Wg = !1, Fg = !1, DS = !1, Pg = {}, zE = /\r\n?/g, CE = /\u0000|\uFFFD/g, As = "http://www.w3.org/1999/xlink", B0 = "http://www.w3.org/XML/1998/namespace", ME = "javascript:throw new Error('React form unexpectedly submitted.')", UE = "suppressHydrationWarning", Ig = "$", ev = "/$", Os = "$?", Ds = "$!", Y0 = "F!", zS = "F", HE = "style", Ro = 0, Yh = 1, tv = 2, q0 = null, j0 = null, CS = { dialog: !0, webview: !0 }, L0 = null, MS = typeof setTimeout == "function" ? setTimeout : void 0, xE = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = -1, US = typeof Promise == "function" ? Promise : void 0, wE = typeof queueMicrotask == "function" ? queueMicrotask : typeof US < "u" ? function(e) {
      return US.resolve(null).then(e).catch(st);
    } : MS, zs = 0, rp = 1, HS = 2, xS = 3, wu = 4, _u = /* @__PURE__ */ new Map(), wS = /* @__PURE__ */ new Set(), Ao = _t.d;
    _t.d = {
      f: function() {
        var e = Ao.f(), t = Kl();
        return e || t;
      },
      r: function(e) {
        var t = Al(e);
        t !== null && t.tag === 5 && t.type === "form" ? Ku(t) : Ao.r(e);
      },
      D: function(e) {
        Ao.D(e), bf("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ao.C(e, t), bf("preconnect", e, t);
      },
      L: function(e, t, l) {
        Ao.L(e, t, l);
        var i = qh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Te(t) + '"]';
          t === "image" && l && l.imageSrcSet ? (o += '[imagesrcset="' + Te(
            l.imageSrcSet
          ) + '"]', typeof l.imageSizes == "string" && (o += '[imagesizes="' + Te(
            l.imageSizes
          ) + '"]')) : o += '[href="' + Te(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = lo(e);
              break;
            case "script":
              f = ao(e);
          }
          _u.has(f) || (e = Ke(
            {
              rel: "preload",
              href: t === "image" && l && l.imageSrcSet ? void 0 : e,
              as: t
            },
            l
          ), _u.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            On(f)
          ) || t === "script" && i.querySelector(kr(f)) || (t = i.createElement("link"), It(t, "link", e), ln(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ao.m(e, t);
        var l = qh;
        if (l && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Te(i) + '"][href="' + Te(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = ao(e);
          }
          if (!_u.has(f) && (e = Ke({ rel: "modulepreload", href: e }, t), _u.set(f, e), l.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (l.querySelector(kr(f)))
                  return;
            }
            i = l.createElement("link"), It(i, "link", e), ln(i), l.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ao.X(e, t);
        var l = qh;
        if (l && e) {
          var i = Ja(l).hoistableScripts, o = ao(e), f = i.get(o);
          f || (f = l.querySelector(
            kr(o)
          ), f || (e = Ke({ src: e, async: !0 }, t), (t = _u.get(o)) && Pi(e, t), f = l.createElement("script"), ln(f), It(f, "link", e), l.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, l) {
        Ao.S(e, t, l);
        var i = qh;
        if (i && e) {
          var o = Ja(i).hoistableStyles, f = lo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var m = { loading: zs, preload: null };
            if (d = i.querySelector(
              On(f)
            ))
              m.loading = rp | wu;
            else {
              e = Ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                l
              ), (l = _u.get(f)) && Kr(e, l);
              var g = d = i.createElement("link");
              ln(g), It(g, "link", e), g._p = new Promise(function(E, L) {
                g.onload = E, g.onerror = L;
              }), g.addEventListener("load", function() {
                m.loading |= rp;
              }), g.addEventListener("error", function() {
                m.loading |= HS;
              }), m.loading |= wu, uo(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: m
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ao.M(e, t);
        var l = qh;
        if (l && e) {
          var i = Ja(l).hoistableScripts, o = ao(e), f = i.get(o);
          f || (f = l.querySelector(
            kr(o)
          ), f || (e = Ke({ src: e, async: !0, type: "module" }, t), (t = _u.get(o)) && Pi(e, t), f = l.createElement("script"), ln(f), It(f, "link", e), l.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var qh = typeof document > "u" ? null : document, nv = null, sp = null, G0 = null, lv = null, Cs = qv, dp = {
      $$typeof: ea,
      Provider: null,
      Consumer: null,
      _currentValue: Cs,
      _currentValue2: Cs,
      _threadCount: 0
    }, _S = "%c%s%c ", NS = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", BS = "", av = " ", YS = Function.prototype.bind, qS = !1, jS = null, LS = null, VS = null, GS = null, XS = null, QS = null, ZS = null, kS = null, KS = null;
    jS = function(e, t, l, i) {
      t = h(e, t), t !== null && (l = S(t.memoizedState, l, 0, i), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ke({}, e.memoizedProps), l = Xn(e, 2), l !== null && Ht(l, e, 2));
    }, LS = function(e, t, l) {
      t = h(e, t), t !== null && (l = O(t.memoizedState, l, 0), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ke({}, e.memoizedProps), l = Xn(e, 2), l !== null && Ht(l, e, 2));
    }, VS = function(e, t, l, i) {
      t = h(e, t), t !== null && (l = T(t.memoizedState, l, i), t.memoizedState = l, t.baseState = l, e.memoizedProps = Ke({}, e.memoizedProps), l = Xn(e, 2), l !== null && Ht(l, e, 2));
    }, GS = function(e, t, l) {
      e.pendingProps = S(e.memoizedProps, t, 0, l), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xn(e, 2), t !== null && Ht(t, e, 2);
    }, XS = function(e, t) {
      e.pendingProps = O(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xn(e, 2), t !== null && Ht(t, e, 2);
    }, QS = function(e, t, l) {
      e.pendingProps = T(
        e.memoizedProps,
        t,
        l
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xn(e, 2), t !== null && Ht(t, e, 2);
    }, ZS = function(e) {
      var t = Xn(e, 2);
      t !== null && Ht(t, e, 2);
    }, kS = function(e) {
      k = e;
    }, KS = function(e) {
      B = e;
    };
    var uv = !0, iv = null, X0 = !1, Qf = null, Zf = null, kf = null, hp = /* @__PURE__ */ new Map(), mp = /* @__PURE__ */ new Map(), Kf = [], _E = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), cv = null;
    if (Af.prototype.render = gy.prototype.render = function(e, t) {
      var l = this._internalRoot;
      if (l === null) throw Error("Cannot update an unmounted root.");
      typeof t == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : fe(t) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof t < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), t = l.current;
      var i = yl(t);
      sy(
        t,
        i,
        e,
        l,
        null,
        null
      );
    }, Af.prototype.unmount = gy.prototype.unmount = function(e) {
      if (typeof e == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (en & (oa | So)) !== Qa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), hg(
          null,
          e,
          null,
          null
        ), Kl(), t[cc] = null;
      }
    }, Af.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Bu();
        e = { blockedOn: null, target: e, priority: t };
        for (var l = 0; l < Kf.length && t !== 0 && t < Kf[l].priority; l++) ;
        Kf.splice(l, 0, e), l === 0 && ec(e);
      }
    }, function() {
      var e = by.version;
      if (e !== "19.0.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.0.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), _t.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = de(t), e = e !== null ? Se(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: K,
        findFiberByHostInstance: ql,
        reconcilerVersion: "19.0.0"
      };
      return e.overrideHookState = jS, e.overrideHookStateDeletePath = LS, e.overrideHookStateRenamePath = VS, e.overrideProps = GS, e.overridePropsDeletePath = XS, e.overridePropsRenamePath = QS, e.scheduleUpdate = ZS, e.setErrorHandler = kS, e.setSuspenseHandler = KS, e.scheduleRefresh = $, e.scheduleRoot = G, e.setRefreshHandler = me, e.getCurrentFiber = dy, e.getLaneLabelMap = _v, e.injectProfilingHooks = Nu, ra(e);
    }() && wl && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var JS = window.location.protocol;
      /^(https?|file):$/.test(JS) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (JS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    pp.createRoot = function(e, t) {
      if (!fe(e))
        throw Error("Target container is not a DOM element.");
      vy(e);
      var l = !1, i = "", o = Sr, f = Am, d = Fu, m = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === tc && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = fy(
        e,
        1,
        !1,
        null,
        null,
        l,
        i,
        o,
        f,
        d,
        m,
        null
      ), e[cc] = t.current, Nd(
        e.nodeType === 8 ? e.parentNode : e
      ), new gy(t);
    }, pp.hydrateRoot = function(e, t, l) {
      if (!fe(e))
        throw Error("Target container is not a DOM element.");
      vy(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Sr, d = Am, m = Fu, g = null, E = null;
      return l != null && (l.unstable_strictMode === !0 && (i = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (f = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (E = l.formState)), t = fy(
        e,
        1,
        !0,
        t,
        l ?? null,
        i,
        o,
        f,
        d,
        m,
        g,
        E
      ), t.context = ry(null), l = t.current, i = yl(l), o = Iu(i), o.callback = null, ei(l, o, i), t.current.lanes = i, Yt(t, i), qa(t), e[cc] = t.current, Nd(e), new Af(t);
    }, pp.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), pp;
}
var i1;
function ZE() {
  if (i1) return fv.exports;
  i1 = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (S) {
        console.error(S);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (h(), fv.exports = XE()) : fv.exports = QE(), fv.exports;
}
var kE = ZE(), KE = Object.defineProperty, JE = (h, S, T) => S in h ? KE(h, S, { enumerable: !0, configurable: !0, writable: !0, value: T }) : h[S] = T, dv = (h, S, T) => JE(h, typeof S != "symbol" ? S + "" : S, T);
const $E = {
  stringify: (h) => h ? "true" : "false",
  parse: (h) => /^[ty1-9]/i.test(h)
}, WE = {
  stringify: (h) => h.name,
  parse: (h, S, T) => {
    const v = (() => {
      if (typeof window < "u" && h in window)
        return window[h];
      if (typeof global < "u" && h in global)
        return global[h];
    })();
    return typeof v == "function" ? v.bind(T) : void 0;
  }
}, FE = {
  stringify: (h) => JSON.stringify(h),
  parse: (h) => JSON.parse(h)
}, PE = {
  stringify: (h) => `${h}`,
  parse: (h) => parseFloat(h)
}, IE = {
  stringify: (h) => h,
  parse: (h) => h
}, k0 = {
  string: IE,
  number: PE,
  boolean: $E,
  function: WE,
  json: FE
};
function eT(h) {
  return h.replace(
    /([a-z0-9])([A-Z])/g,
    (S, T, v) => `${T}-${v.toLowerCase()}`
  );
}
const hv = Symbol.for("r2wc.render"), mv = Symbol.for("r2wc.connected"), Ms = Symbol.for("r2wc.context"), Do = Symbol.for("r2wc.props");
function tT(h, S, T) {
  var v, O, B;
  S.props || (S.props = h.propTypes ? Object.keys(h.propTypes) : []), S.events || (S.events = []);
  const k = Array.isArray(S.props) ? S.props.slice() : Object.keys(S.props), Z = Array.isArray(S.events) ? S.events.slice() : Object.keys(S.events), R = {}, z = {}, te = {}, q = {};
  for (const G of k) {
    R[G] = Array.isArray(S.props) ? "string" : S.props[G];
    const $ = eT(G);
    te[G] = $, q[$] = G;
  }
  for (const G of Z)
    z[G] = Array.isArray(S.events) ? {} : S.events[G];
  class D extends HTMLElement {
    constructor() {
      super(), dv(this, B, !0), dv(this, O), dv(this, v, {}), dv(this, "container"), S.shadow ? this.container = this.attachShadow({
        mode: S.shadow
      }) : this.container = this, this[Do].container = this.container;
      for (const $ of k) {
        const me = te[$], fe = this.getAttribute(me), le = R[$], ce = le ? k0[le] : null;
        ce != null && ce.parse && fe && (this[Do][$] = ce.parse(fe, me, this));
      }
      for (const $ of Z)
        this[Do][$] = (me) => {
          const fe = $.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(fe, { detail: me, ...z[$] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(q);
    }
    connectedCallback() {
      this[mv] = !0, this[hv]();
    }
    disconnectedCallback() {
      this[mv] = !1, this[Ms] && T.unmount(this[Ms]), delete this[Ms];
    }
    attributeChangedCallback($, me, fe) {
      const le = q[$], ce = R[le], Ee = ce ? k0[ce] : null;
      le in R && Ee != null && Ee.parse && fe && (this[Do][le] = Ee.parse(fe, $, this), this[hv]());
    }
    [(B = mv, O = Ms, v = Do, hv)]() {
      this[mv] && (this[Ms] ? T.update(this[Ms], this[Do]) : this[Ms] = T.mount(
        this.container,
        h,
        this[Do]
      ));
    }
  }
  for (const G of k) {
    const $ = te[G], me = R[G];
    Object.defineProperty(D.prototype, G, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Do][G];
      },
      set(fe) {
        this[Do][G] = fe;
        const le = me ? k0[me] : null;
        if (le != null && le.stringify) {
          const ce = le.stringify(fe, $, this);
          this.getAttribute($) !== ce && this.setAttribute($, ce);
        } else
          this[hv]();
      }
    });
  }
  return D;
}
function nT(h, S, T) {
  const v = kE.createRoot(h), O = g1.createElement(S, T);
  return v.render(O), {
    root: v,
    ReactComponent: S
  };
}
function lT({ root: h, ReactComponent: S }, T) {
  const v = g1.createElement(S, T);
  h.render(v);
}
function aT({ root: h }) {
  h.unmount();
}
function uT(h, S = {}) {
  return tT(h, S, { mount: nT, update: lT, unmount: aT });
}
var yv = { exports: {} }, gp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c1;
function iT() {
  if (c1) return gp;
  c1 = 1;
  var h = Symbol.for("react.transitional.element"), S = Symbol.for("react.fragment");
  function T(v, O, B) {
    var k = null;
    if (B !== void 0 && (k = "" + B), O.key !== void 0 && (k = "" + O.key), "key" in O) {
      B = {};
      for (var Z in O)
        Z !== "key" && (B[Z] = O[Z]);
    } else B = O;
    return O = B.ref, {
      $$typeof: h,
      type: v,
      key: k,
      ref: O !== void 0 ? O : null,
      props: B
    };
  }
  return gp.Fragment = S, gp.jsx = T, gp.jsxs = T, gp;
}
var vp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function cT() {
  return o1 || (o1 = 1, process.env.NODE_ENV !== "production" && function() {
    function h(H) {
      if (H == null) return null;
      if (typeof H == "function")
        return H.$$typeof === de ? null : H.displayName || H.name || null;
      if (typeof H == "string") return H;
      switch (H) {
        case yt:
          return "Fragment";
        case Be:
          return "Portal";
        case St:
          return "Profiler";
        case Bt:
          return "StrictMode";
        case fn:
          return "Suspense";
        case Xt:
          return "SuspenseList";
      }
      if (typeof H == "object")
        switch (typeof H.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), H.$$typeof) {
          case Le:
            return (H.displayName || "Context") + ".Provider";
          case ve:
            return (H._context.displayName || "Context") + ".Consumer";
          case xt:
            var Oe = H.render;
            return H = H.displayName, H || (H = Oe.displayName || Oe.name || "", H = H !== "" ? "ForwardRef(" + H + ")" : "ForwardRef"), H;
          case Ae:
            return Oe = H.displayName || null, Oe !== null ? Oe : h(H.type) || "Memo";
          case Mt:
            Oe = H._payload, H = H._init;
            try {
              return h(H(Oe));
            } catch {
            }
        }
      return null;
    }
    function S(H) {
      return "" + H;
    }
    function T(H) {
      try {
        S(H);
        var Oe = !1;
      } catch {
        Oe = !0;
      }
      if (Oe) {
        Oe = console;
        var Ce = Oe.error, Ye = typeof Symbol == "function" && Symbol.toStringTag && H[Symbol.toStringTag] || H.constructor.name || "Object";
        return Ce.call(
          Oe,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Ye
        ), S(H);
      }
    }
    function v() {
    }
    function O() {
      if (ye === 0) {
        Ve = console.log, qe = console.info, Wt = console.warn, $e = console.error, Et = console.group, rt = console.groupCollapsed, nn = console.groupEnd;
        var H = {
          configurable: !0,
          enumerable: !0,
          value: v,
          writable: !0
        };
        Object.defineProperties(console, {
          info: H,
          log: H,
          warn: H,
          error: H,
          group: H,
          groupCollapsed: H,
          groupEnd: H
        });
      }
      ye++;
    }
    function B() {
      if (ye--, ye === 0) {
        var H = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: W({}, H, { value: Ve }),
          info: W({}, H, { value: qe }),
          warn: W({}, H, { value: Wt }),
          error: W({}, H, { value: $e }),
          group: W({}, H, { value: Et }),
          groupCollapsed: W({}, H, { value: rt }),
          groupEnd: W({}, H, { value: nn })
        });
      }
      0 > ye && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function k(H) {
      if (nt === void 0)
        try {
          throw Error();
        } catch (Ce) {
          var Oe = Ce.stack.trim().match(/\n( *(at )?)/);
          nt = Oe && Oe[1] || "", Mn = -1 < Ce.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < Ce.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + nt + H + Mn;
    }
    function Z(H, Oe) {
      if (!H || Pn) return "";
      var Ce = ra.get(H);
      if (Ce !== void 0) return Ce;
      Pn = !0, Ce = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Ye = null;
      Ye = Se.H, Se.H = null, O();
      try {
        var Ft = {
          DetermineComponentFrameRoot: function() {
            try {
              if (Oe) {
                var bn = function() {
                  throw Error();
                };
                if (Object.defineProperty(bn.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(bn, []);
                  } catch (Rl) {
                    var Yt = Rl;
                  }
                  Reflect.construct(H, [], bn);
                } else {
                  try {
                    bn.call();
                  } catch (Rl) {
                    Yt = Rl;
                  }
                  H.call(bn.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Rl) {
                  Yt = Rl;
                }
                (bn = H()) && typeof bn.catch == "function" && bn.catch(function() {
                });
              }
            } catch (Rl) {
              if (Rl && Yt && typeof Rl.stack == "string")
                return [Rl.stack, Yt.stack];
            }
            return [null, null];
          }
        };
        Ft.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var vt = Object.getOwnPropertyDescriptor(
          Ft.DetermineComponentFrameRoot,
          "name"
        );
        vt && vt.configurable && Object.defineProperty(
          Ft.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Ge = Ft.DetermineComponentFrameRoot(), Ne = Ge[0], jn = Ge[1];
        if (Ne && jn) {
          var mn = Ne.split(`
`), In = jn.split(`
`);
          for (Ge = vt = 0; vt < mn.length && !mn[vt].includes(
            "DetermineComponentFrameRoot"
          ); )
            vt++;
          for (; Ge < In.length && !In[Ge].includes(
            "DetermineComponentFrameRoot"
          ); )
            Ge++;
          if (vt === mn.length || Ge === In.length)
            for (vt = mn.length - 1, Ge = In.length - 1; 1 <= vt && 0 <= Ge && mn[vt] !== In[Ge]; )
              Ge--;
          for (; 1 <= vt && 0 <= Ge; vt--, Ge--)
            if (mn[vt] !== In[Ge]) {
              if (vt !== 1 || Ge !== 1)
                do
                  if (vt--, Ge--, 0 > Ge || mn[vt] !== In[Ge]) {
                    var Oa = `
` + mn[vt].replace(
                      " at new ",
                      " at "
                    );
                    return H.displayName && Oa.includes("<anonymous>") && (Oa = Oa.replace("<anonymous>", H.displayName)), typeof H == "function" && ra.set(H, Oa), Oa;
                  }
                while (1 <= vt && 0 <= Ge);
              break;
            }
        }
      } finally {
        Pn = !1, Se.H = Ye, B(), Error.prepareStackTrace = Ce;
      }
      return mn = (mn = H ? H.displayName || H.name : "") ? k(mn) : "", typeof H == "function" && ra.set(H, mn), mn;
    }
    function R(H) {
      if (H == null) return "";
      if (typeof H == "function") {
        var Oe = H.prototype;
        return Z(
          H,
          !(!Oe || !Oe.isReactComponent)
        );
      }
      if (typeof H == "string") return k(H);
      switch (H) {
        case fn:
          return k("Suspense");
        case Xt:
          return k("SuspenseList");
      }
      if (typeof H == "object")
        switch (H.$$typeof) {
          case xt:
            return H = Z(H.render, !1), H;
          case Ae:
            return R(H.type);
          case Mt:
            Oe = H._payload, H = H._init;
            try {
              return R(H(Oe));
            } catch {
            }
        }
      return "";
    }
    function z() {
      var H = Se.A;
      return H === null ? null : H.getOwner();
    }
    function te(H) {
      if (C.call(H, "key")) {
        var Oe = Object.getOwnPropertyDescriptor(H, "key").get;
        if (Oe && Oe.isReactWarning) return !1;
      }
      return H.key !== void 0;
    }
    function q(H, Oe) {
      function Ce() {
        ot || (ot = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          Oe
        ));
      }
      Ce.isReactWarning = !0, Object.defineProperty(H, "key", {
        get: Ce,
        configurable: !0
      });
    }
    function D() {
      var H = h(this.type);
      return Nu[H] || (Nu[H] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), H = this.props.ref, H !== void 0 ? H : null;
    }
    function G(H, Oe, Ce, Ye, Ft, vt) {
      return Ce = vt.ref, H = {
        $$typeof: ge,
        type: H,
        key: Oe,
        props: vt,
        _owner: Ft
      }, (Ce !== void 0 ? Ce : null) !== null ? Object.defineProperty(H, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(H, "ref", { enumerable: !1, value: null }), H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(H, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    }
    function $(H, Oe, Ce, Ye, Ft, vt) {
      if (typeof H == "string" || typeof H == "function" || H === yt || H === St || H === Bt || H === fn || H === Xt || H === Q || typeof H == "object" && H !== null && (H.$$typeof === Mt || H.$$typeof === Ae || H.$$typeof === Le || H.$$typeof === ve || H.$$typeof === xt || H.$$typeof === pe || H.getModuleId !== void 0)) {
        var Ge = Oe.children;
        if (Ge !== void 0)
          if (Ye)
            if (De(Ge)) {
              for (Ye = 0; Ye < Ge.length; Ye++)
                me(Ge[Ye], H);
              Object.freeze && Object.freeze(Ge);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else me(Ge, H);
      } else
        Ge = "", (H === void 0 || typeof H == "object" && H !== null && Object.keys(H).length === 0) && (Ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), H === null ? Ye = "null" : De(H) ? Ye = "array" : H !== void 0 && H.$$typeof === ge ? (Ye = "<" + (h(H.type) || "Unknown") + " />", Ge = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof H, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Ye,
          Ge
        );
      if (C.call(Oe, "key")) {
        Ge = h(H);
        var Ne = Object.keys(Oe).filter(function(mn) {
          return mn !== "key";
        });
        Ye = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", Ka[Ge + Ye] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Ye,
          Ge,
          Ne,
          Ge
        ), Ka[Ge + Ye] = !0);
      }
      if (Ge = null, Ce !== void 0 && (T(Ce), Ge = "" + Ce), te(Oe) && (T(Oe.key), Ge = "" + Oe.key), "key" in Oe) {
        Ce = {};
        for (var jn in Oe)
          jn !== "key" && (Ce[jn] = Oe[jn]);
      } else Ce = Oe;
      return Ge && q(
        Ce,
        typeof H == "function" ? H.displayName || H.name || "Unknown" : H
      ), G(H, Ge, vt, Ft, z(), Ce);
    }
    function me(H, Oe) {
      if (typeof H == "object" && H && H.$$typeof !== Tl) {
        if (De(H))
          for (var Ce = 0; Ce < H.length; Ce++) {
            var Ye = H[Ce];
            fe(Ye) && le(Ye, Oe);
          }
        else if (fe(H))
          H._store && (H._store.validated = 1);
        else if (H === null || typeof H != "object" ? Ce = null : (Ce = he && H[he] || H["@@iterator"], Ce = typeof Ce == "function" ? Ce : null), typeof Ce == "function" && Ce !== H.entries && (Ce = Ce.call(H), Ce !== H))
          for (; !(H = Ce.next()).done; )
            fe(H.value) && le(H.value, Oe);
      }
    }
    function fe(H) {
      return typeof H == "object" && H !== null && H.$$typeof === ge;
    }
    function le(H, Oe) {
      if (H._store && !H._store.validated && H.key == null && (H._store.validated = 1, Oe = ce(Oe), !Yl[Oe])) {
        Yl[Oe] = !0;
        var Ce = "";
        H && H._owner != null && H._owner !== z() && (Ce = null, typeof H._owner.tag == "number" ? Ce = h(H._owner.type) : typeof H._owner.name == "string" && (Ce = H._owner.name), Ce = " It was passed a child from " + Ce + ".");
        var Ye = Se.getCurrentStack;
        Se.getCurrentStack = function() {
          var Ft = R(H.type);
          return Ye && (Ft += Ye() || ""), Ft;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          Oe,
          Ce
        ), Se.getCurrentStack = Ye;
      }
    }
    function ce(H) {
      var Oe = "", Ce = z();
      return Ce && (Ce = h(Ce.type)) && (Oe = `

Check the render method of \`` + Ce + "`."), Oe || (H = h(H)) && (Oe = `

Check the top-level render call using <` + H + ">."), Oe;
    }
    var Ee = jh(), ge = Symbol.for("react.transitional.element"), Be = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), Bt = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), ve = Symbol.for("react.consumer"), Le = Symbol.for("react.context"), xt = Symbol.for("react.forward_ref"), fn = Symbol.for("react.suspense"), Xt = Symbol.for("react.suspense_list"), Ae = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), he = Symbol.iterator, de = Symbol.for("react.client.reference"), Se = Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, W = Object.assign, pe = Symbol.for("react.client.reference"), De = Array.isArray, ye = 0, Ve, qe, Wt, $e, Et, rt, nn;
    v.__reactDisabledLog = !0;
    var nt, Mn, Pn = !1, ra = new (typeof WeakMap == "function" ? WeakMap : Map)(), Tl = Symbol.for("react.client.reference"), ot, Nu = {}, Ka = {}, Yl = {};
    vp.Fragment = yt, vp.jsx = function(H, Oe, Ce, Ye, Ft) {
      return $(H, Oe, Ce, !1, Ye, Ft);
    }, vp.jsxs = function(H, Oe, Ce, Ye, Ft) {
      return $(H, Oe, Ce, !0, Ye, Ft);
    };
  }()), vp;
}
var f1;
function oT() {
  return f1 || (f1 = 1, process.env.NODE_ENV === "production" ? yv.exports = iT() : yv.exports = cT()), yv.exports;
}
var fa = oT(), bp = {}, r1;
function fT() {
  if (r1) return bp;
  r1 = 1, Object.defineProperty(bp, "__esModule", { value: !0 }), bp.parse = k, bp.serialize = z;
  const h = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, S = /^[\u0021-\u003A\u003C-\u007E]*$/, T = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, v = /^[\u0020-\u003A\u003D-\u007E]*$/, O = Object.prototype.toString, B = /* @__PURE__ */ (() => {
    const D = function() {
    };
    return D.prototype = /* @__PURE__ */ Object.create(null), D;
  })();
  function k(D, G) {
    const $ = new B(), me = D.length;
    if (me < 2)
      return $;
    const fe = (G == null ? void 0 : G.decode) || te;
    let le = 0;
    do {
      const ce = D.indexOf("=", le);
      if (ce === -1)
        break;
      const Ee = D.indexOf(";", le), ge = Ee === -1 ? me : Ee;
      if (ce > ge) {
        le = D.lastIndexOf(";", ce - 1) + 1;
        continue;
      }
      const Be = Z(D, le, ce), yt = R(D, ce, Be), Bt = D.slice(Be, yt);
      if ($[Bt] === void 0) {
        let St = Z(D, ce + 1, ge), ve = R(D, ge, St);
        const Le = fe(D.slice(St, ve));
        $[Bt] = Le;
      }
      le = ge + 1;
    } while (le < me);
    return $;
  }
  function Z(D, G, $) {
    do {
      const me = D.charCodeAt(G);
      if (me !== 32 && me !== 9)
        return G;
    } while (++G < $);
    return $;
  }
  function R(D, G, $) {
    for (; G > $; ) {
      const me = D.charCodeAt(--G);
      if (me !== 32 && me !== 9)
        return G + 1;
    }
    return $;
  }
  function z(D, G, $) {
    const me = ($ == null ? void 0 : $.encode) || encodeURIComponent;
    if (!h.test(D))
      throw new TypeError(`argument name is invalid: ${D}`);
    const fe = me(G);
    if (!S.test(fe))
      throw new TypeError(`argument val is invalid: ${G}`);
    let le = D + "=" + fe;
    if (!$)
      return le;
    if ($.maxAge !== void 0) {
      if (!Number.isInteger($.maxAge))
        throw new TypeError(`option maxAge is invalid: ${$.maxAge}`);
      le += "; Max-Age=" + $.maxAge;
    }
    if ($.domain) {
      if (!T.test($.domain))
        throw new TypeError(`option domain is invalid: ${$.domain}`);
      le += "; Domain=" + $.domain;
    }
    if ($.path) {
      if (!v.test($.path))
        throw new TypeError(`option path is invalid: ${$.path}`);
      le += "; Path=" + $.path;
    }
    if ($.expires) {
      if (!q($.expires) || !Number.isFinite($.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${$.expires}`);
      le += "; Expires=" + $.expires.toUTCString();
    }
    if ($.httpOnly && (le += "; HttpOnly"), $.secure && (le += "; Secure"), $.partitioned && (le += "; Partitioned"), $.priority)
      switch (typeof $.priority == "string" ? $.priority.toLowerCase() : void 0) {
        case "low":
          le += "; Priority=Low";
          break;
        case "medium":
          le += "; Priority=Medium";
          break;
        case "high":
          le += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${$.priority}`);
      }
    if ($.sameSite)
      switch (typeof $.sameSite == "string" ? $.sameSite.toLowerCase() : $.sameSite) {
        case !0:
        case "strict":
          le += "; SameSite=Strict";
          break;
        case "lax":
          le += "; SameSite=Lax";
          break;
        case "none":
          le += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${$.sameSite}`);
      }
    return le;
  }
  function te(D) {
    if (D.indexOf("%") === -1)
      return D;
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }
  function q(D) {
    return O.call(D) === "[object Date]";
  }
  return bp;
}
fT();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var s1 = "popstate";
function rT(h = {}) {
  function S(v, O) {
    let { pathname: B, search: k, hash: Z } = v.location;
    return $0(
      "",
      { pathname: B, search: k, hash: Z },
      // state defaults to `null` because `window.history.state` does
      O.state && O.state.usr || null,
      O.state && O.state.key || "default"
    );
  }
  function T(v, O) {
    return typeof O == "string" ? O : Tp(O);
  }
  return dT(
    S,
    T,
    null,
    h
  );
}
function hn(h, S) {
  if (h === !1 || h === null || typeof h > "u")
    throw new Error(S);
}
function vc(h, S) {
  if (!h) {
    typeof console < "u" && console.warn(S);
    try {
      throw new Error(S);
    } catch {
    }
  }
}
function sT() {
  return Math.random().toString(36).substring(2, 10);
}
function d1(h, S) {
  return {
    usr: h.state,
    key: h.key,
    idx: S
  };
}
function $0(h, S, T = null, v) {
  return {
    pathname: typeof h == "string" ? h : h.pathname,
    search: "",
    hash: "",
    ...typeof S == "string" ? Lh(S) : S,
    state: T,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: S && S.key || v || sT()
  };
}
function Tp({
  pathname: h = "/",
  search: S = "",
  hash: T = ""
}) {
  return S && S !== "?" && (h += S.charAt(0) === "?" ? S : "?" + S), T && T !== "#" && (h += T.charAt(0) === "#" ? T : "#" + T), h;
}
function Lh(h) {
  let S = {};
  if (h) {
    let T = h.indexOf("#");
    T >= 0 && (S.hash = h.substring(T), h = h.substring(0, T));
    let v = h.indexOf("?");
    v >= 0 && (S.search = h.substring(v), h = h.substring(0, v)), h && (S.pathname = h);
  }
  return S;
}
function dT(h, S, T, v = {}) {
  let { window: O = document.defaultView, v5Compat: B = !1 } = v, k = O.history, Z = "POP", R = null, z = te();
  z == null && (z = 0, k.replaceState({ ...k.state, idx: z }, ""));
  function te() {
    return (k.state || { idx: null }).idx;
  }
  function q() {
    Z = "POP";
    let fe = te(), le = fe == null ? null : fe - z;
    z = fe, R && R({ action: Z, location: me.location, delta: le });
  }
  function D(fe, le) {
    Z = "PUSH";
    let ce = $0(me.location, fe, le);
    z = te() + 1;
    let Ee = d1(ce, z), ge = me.createHref(ce);
    try {
      k.pushState(Ee, "", ge);
    } catch (Be) {
      if (Be instanceof DOMException && Be.name === "DataCloneError")
        throw Be;
      O.location.assign(ge);
    }
    B && R && R({ action: Z, location: me.location, delta: 1 });
  }
  function G(fe, le) {
    Z = "REPLACE";
    let ce = $0(me.location, fe, le);
    z = te();
    let Ee = d1(ce, z), ge = me.createHref(ce);
    k.replaceState(Ee, "", ge), B && R && R({ action: Z, location: me.location, delta: 0 });
  }
  function $(fe) {
    let le = O.location.origin !== "null" ? O.location.origin : O.location.href, ce = typeof fe == "string" ? fe : Tp(fe);
    return ce = ce.replace(/ $/, "%20"), hn(
      le,
      `No window.location.(origin|href) available to create URL for href: ${ce}`
    ), new URL(ce, le);
  }
  let me = {
    get action() {
      return Z;
    },
    get location() {
      return h(O, k);
    },
    listen(fe) {
      if (R)
        throw new Error("A history only accepts one active listener");
      return O.addEventListener(s1, q), R = fe, () => {
        O.removeEventListener(s1, q), R = null;
      };
    },
    createHref(fe) {
      return S(O, fe);
    },
    createURL: $,
    encodeLocation(fe) {
      let le = $(fe);
      return {
        pathname: le.pathname,
        search: le.search,
        hash: le.hash
      };
    },
    push: D,
    replace: G,
    go(fe) {
      return k.go(fe);
    }
  };
  return me;
}
function S1(h, S, T = "/") {
  return hT(h, S, T, !1);
}
function hT(h, S, T, v) {
  let O = typeof S == "string" ? Lh(S) : S, B = Jf(O.pathname || "/", T);
  if (B == null)
    return null;
  let k = E1(h);
  mT(k);
  let Z = null;
  for (let R = 0; Z == null && R < k.length; ++R) {
    let z = OT(B);
    Z = RT(
      k[R],
      z,
      v
    );
  }
  return Z;
}
function E1(h, S = [], T = [], v = "") {
  let O = (B, k, Z) => {
    let R = {
      relativePath: Z === void 0 ? B.path || "" : Z,
      caseSensitive: B.caseSensitive === !0,
      childrenIndex: k,
      route: B
    };
    R.relativePath.startsWith("/") && (hn(
      R.relativePath.startsWith(v),
      `Absolute route path "${R.relativePath}" nested under path "${v}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), R.relativePath = R.relativePath.slice(v.length));
    let z = zo([v, R.relativePath]), te = T.concat(R);
    B.children && B.children.length > 0 && (hn(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      B.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${z}".`
    ), E1(B.children, S, te, z)), !(B.path == null && !B.index) && S.push({
      path: z,
      score: ET(z, B.index),
      routesMeta: te
    });
  };
  return h.forEach((B, k) => {
    var Z;
    if (B.path === "" || !((Z = B.path) != null && Z.includes("?")))
      O(B, k);
    else
      for (let R of T1(B.path))
        O(B, k, R);
  }), S;
}
function T1(h) {
  let S = h.split("/");
  if (S.length === 0) return [];
  let [T, ...v] = S, O = T.endsWith("?"), B = T.replace(/\?$/, "");
  if (v.length === 0)
    return O ? [B, ""] : [B];
  let k = T1(v.join("/")), Z = [];
  return Z.push(
    ...k.map(
      (R) => R === "" ? B : [B, R].join("/")
    )
  ), O && Z.push(...k), Z.map(
    (R) => h.startsWith("/") && R === "" ? "/" : R
  );
}
function mT(h) {
  h.sort(
    (S, T) => S.score !== T.score ? T.score - S.score : TT(
      S.routesMeta.map((v) => v.childrenIndex),
      T.routesMeta.map((v) => v.childrenIndex)
    )
  );
}
var yT = /^:[\w-]+$/, pT = 3, gT = 2, vT = 1, bT = 10, ST = -2, h1 = (h) => h === "*";
function ET(h, S) {
  let T = h.split("/"), v = T.length;
  return T.some(h1) && (v += ST), S && (v += gT), T.filter((O) => !h1(O)).reduce(
    (O, B) => O + (yT.test(B) ? pT : B === "" ? vT : bT),
    v
  );
}
function TT(h, S) {
  return h.length === S.length && h.slice(0, -1).every((v, O) => v === S[O]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    h[h.length - 1] - S[S.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function RT(h, S, T = !1) {
  let { routesMeta: v } = h, O = {}, B = "/", k = [];
  for (let Z = 0; Z < v.length; ++Z) {
    let R = v[Z], z = Z === v.length - 1, te = B === "/" ? S : S.slice(B.length) || "/", q = Sv(
      { path: R.relativePath, caseSensitive: R.caseSensitive, end: z },
      te
    ), D = R.route;
    if (!q && z && T && !v[v.length - 1].route.index && (q = Sv(
      {
        path: R.relativePath,
        caseSensitive: R.caseSensitive,
        end: !1
      },
      te
    )), !q)
      return null;
    Object.assign(O, q.params), k.push({
      // TODO: Can this as be avoided?
      params: O,
      pathname: zo([B, q.pathname]),
      pathnameBase: MT(
        zo([B, q.pathnameBase])
      ),
      route: D
    }), q.pathnameBase !== "/" && (B = zo([B, q.pathnameBase]));
  }
  return k;
}
function Sv(h, S) {
  typeof h == "string" && (h = { path: h, caseSensitive: !1, end: !0 });
  let [T, v] = AT(
    h.path,
    h.caseSensitive,
    h.end
  ), O = S.match(T);
  if (!O) return null;
  let B = O[0], k = B.replace(/(.)\/+$/, "$1"), Z = O.slice(1);
  return {
    params: v.reduce(
      (z, { paramName: te, isOptional: q }, D) => {
        if (te === "*") {
          let $ = Z[D] || "";
          k = B.slice(0, B.length - $.length).replace(/(.)\/+$/, "$1");
        }
        const G = Z[D];
        return q && !G ? z[te] = void 0 : z[te] = (G || "").replace(/%2F/g, "/"), z;
      },
      {}
    ),
    pathname: B,
    pathnameBase: k,
    pattern: h
  };
}
function AT(h, S = !1, T = !0) {
  vc(
    h === "*" || !h.endsWith("*") || h.endsWith("/*"),
    `Route path "${h}" will be treated as if it were "${h.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${h.replace(/\*$/, "/*")}".`
  );
  let v = [], O = "^" + h.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (k, Z, R) => (v.push({ paramName: Z, isOptional: R != null }), R ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return h.endsWith("*") ? (v.push({ paramName: "*" }), O += h === "*" || h === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : T ? O += "\\/*$" : h !== "" && h !== "/" && (O += "(?:(?=\\/|$))"), [new RegExp(O, S ? void 0 : "i"), v];
}
function OT(h) {
  try {
    return h.split("/").map((S) => decodeURIComponent(S).replace(/\//g, "%2F")).join("/");
  } catch (S) {
    return vc(
      !1,
      `The URL path "${h}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${S}).`
    ), h;
  }
}
function Jf(h, S) {
  if (S === "/") return h;
  if (!h.toLowerCase().startsWith(S.toLowerCase()))
    return null;
  let T = S.endsWith("/") ? S.length - 1 : S.length, v = h.charAt(T);
  return v && v !== "/" ? null : h.slice(T) || "/";
}
function DT(h, S = "/") {
  let {
    pathname: T,
    search: v = "",
    hash: O = ""
  } = typeof h == "string" ? Lh(h) : h;
  return {
    pathname: T ? T.startsWith("/") ? T : zT(T, S) : S,
    search: UT(v),
    hash: HT(O)
  };
}
function zT(h, S) {
  let T = S.replace(/\/+$/, "").split("/");
  return h.split("/").forEach((O) => {
    O === ".." ? T.length > 1 && T.pop() : O !== "." && T.push(O);
  }), T.length > 1 ? T.join("/") : "/";
}
function K0(h, S, T, v) {
  return `Cannot include a '${h}' character in a manually specified \`to.${S}\` field [${JSON.stringify(
    v
  )}].  Please separate it out to the \`to.${T}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function CT(h) {
  return h.filter(
    (S, T) => T === 0 || S.route.path && S.route.path.length > 0
  );
}
function R1(h) {
  let S = CT(h);
  return S.map(
    (T, v) => v === S.length - 1 ? T.pathname : T.pathnameBase
  );
}
function A1(h, S, T, v = !1) {
  let O;
  typeof h == "string" ? O = Lh(h) : (O = { ...h }, hn(
    !O.pathname || !O.pathname.includes("?"),
    K0("?", "pathname", "search", O)
  ), hn(
    !O.pathname || !O.pathname.includes("#"),
    K0("#", "pathname", "hash", O)
  ), hn(
    !O.search || !O.search.includes("#"),
    K0("#", "search", "hash", O)
  ));
  let B = h === "" || O.pathname === "", k = B ? "/" : O.pathname, Z;
  if (k == null)
    Z = T;
  else {
    let q = S.length - 1;
    if (!v && k.startsWith("..")) {
      let D = k.split("/");
      for (; D[0] === ".."; )
        D.shift(), q -= 1;
      O.pathname = D.join("/");
    }
    Z = q >= 0 ? S[q] : "/";
  }
  let R = DT(O, Z), z = k && k !== "/" && k.endsWith("/"), te = (B || k === ".") && T.endsWith("/");
  return !R.pathname.endsWith("/") && (z || te) && (R.pathname += "/"), R;
}
var zo = (h) => h.join("/").replace(/\/\/+/g, "/"), MT = (h) => h.replace(/\/+$/, "").replace(/^\/*/, "/"), UT = (h) => !h || h === "?" ? "" : h.startsWith("?") ? h : "?" + h, HT = (h) => !h || h === "#" ? "" : h.startsWith("#") ? h : "#" + h;
function xT(h) {
  return h != null && typeof h.status == "number" && typeof h.statusText == "string" && typeof h.internal == "boolean" && "data" in h;
}
var O1 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  O1
);
var wT = [
  "GET",
  ...O1
];
new Set(wT);
var Vh = ie.createContext(null);
Vh.displayName = "DataRouter";
var Ev = ie.createContext(null);
Ev.displayName = "DataRouterState";
var D1 = ie.createContext({
  isTransitioning: !1
});
D1.displayName = "ViewTransition";
var _T = ie.createContext(
  /* @__PURE__ */ new Map()
);
_T.displayName = "Fetchers";
var NT = ie.createContext(null);
NT.displayName = "Await";
var bc = ie.createContext(
  null
);
bc.displayName = "Navigation";
var Rp = ie.createContext(
  null
);
Rp.displayName = "Location";
var Co = ie.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Co.displayName = "Route";
var F0 = ie.createContext(null);
F0.displayName = "RouteError";
function BT(h, { relative: S } = {}) {
  hn(
    Ap(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: T, navigator: v } = ie.useContext(bc), { hash: O, pathname: B, search: k } = Op(h, { relative: S }), Z = B;
  return T !== "/" && (Z = B === "/" ? T : zo([T, B])), v.createHref({ pathname: Z, search: k, hash: O });
}
function Ap() {
  return ie.useContext(Rp) != null;
}
function Us() {
  return hn(
    Ap(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), ie.useContext(Rp).location;
}
var z1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function C1(h) {
  ie.useContext(bc).static || ie.useLayoutEffect(h);
}
function P0() {
  let { isDataRoute: h } = ie.useContext(Co);
  return h ? $T() : YT();
}
function YT() {
  hn(
    Ap(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let h = ie.useContext(Vh), { basename: S, navigator: T } = ie.useContext(bc), { matches: v } = ie.useContext(Co), { pathname: O } = Us(), B = JSON.stringify(R1(v)), k = ie.useRef(!1);
  return C1(() => {
    k.current = !0;
  }), ie.useCallback(
    (R, z = {}) => {
      if (vc(k.current, z1), !k.current) return;
      if (typeof R == "number") {
        T.go(R);
        return;
      }
      let te = A1(
        R,
        JSON.parse(B),
        O,
        z.relative === "path"
      );
      h == null && S !== "/" && (te.pathname = te.pathname === "/" ? S : zo([S, te.pathname])), (z.replace ? T.replace : T.push)(
        te,
        z.state,
        z
      );
    },
    [
      S,
      T,
      B,
      O,
      h
    ]
  );
}
ie.createContext(null);
function Op(h, { relative: S } = {}) {
  let { matches: T } = ie.useContext(Co), { pathname: v } = Us(), O = JSON.stringify(R1(T));
  return ie.useMemo(
    () => A1(
      h,
      JSON.parse(O),
      v,
      S === "path"
    ),
    [h, O, v, S]
  );
}
function qT(h, S) {
  return M1(h, S);
}
function M1(h, S, T, v) {
  var ce;
  hn(
    Ap(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: O, static: B } = ie.useContext(bc), { matches: k } = ie.useContext(Co), Z = k[k.length - 1], R = Z ? Z.params : {}, z = Z ? Z.pathname : "/", te = Z ? Z.pathnameBase : "/", q = Z && Z.route;
  {
    let Ee = q && q.path || "";
    U1(
      z,
      !q || Ee.endsWith("*") || Ee.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${z}" (under <Route path="${Ee}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Ee}"> to <Route path="${Ee === "/" ? "*" : `${Ee}/*`}">.`
    );
  }
  let D = Us(), G;
  if (S) {
    let Ee = typeof S == "string" ? Lh(S) : S;
    hn(
      te === "/" || ((ce = Ee.pathname) == null ? void 0 : ce.startsWith(te)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${te}" but pathname "${Ee.pathname}" was given in the \`location\` prop.`
    ), G = Ee;
  } else
    G = D;
  let $ = G.pathname || "/", me = $;
  if (te !== "/") {
    let Ee = te.replace(/^\//, "").split("/");
    me = "/" + $.replace(/^\//, "").split("/").slice(Ee.length).join("/");
  }
  let fe = !B && T && T.matches && T.matches.length > 0 ? T.matches : S1(h, { pathname: me });
  vc(
    q || fe != null,
    `No routes matched location "${G.pathname}${G.search}${G.hash}" `
  ), vc(
    fe == null || fe[fe.length - 1].route.element !== void 0 || fe[fe.length - 1].route.Component !== void 0 || fe[fe.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let le = XT(
    fe && fe.map(
      (Ee) => Object.assign({}, Ee, {
        params: Object.assign({}, R, Ee.params),
        pathname: zo([
          te,
          // Re-encode pathnames that were decoded inside matchRoutes
          O.encodeLocation ? O.encodeLocation(Ee.pathname).pathname : Ee.pathname
        ]),
        pathnameBase: Ee.pathnameBase === "/" ? te : zo([
          te,
          // Re-encode pathnames that were decoded inside matchRoutes
          O.encodeLocation ? O.encodeLocation(Ee.pathnameBase).pathname : Ee.pathnameBase
        ])
      })
    ),
    k,
    T,
    v
  );
  return S && le ? /* @__PURE__ */ ie.createElement(
    Rp.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...G
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    le
  ) : le;
}
function jT() {
  let h = JT(), S = xT(h) ? `${h.status} ${h.statusText}` : h instanceof Error ? h.message : JSON.stringify(h), T = h instanceof Error ? h.stack : null, v = "rgba(200,200,200, 0.5)", O = { padding: "0.5rem", backgroundColor: v }, B = { padding: "2px 4px", backgroundColor: v }, k = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    h
  ), k = /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ ie.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ ie.createElement("code", { style: B }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ ie.createElement("code", { style: B }, "errorElement"), " prop on your route.")), /* @__PURE__ */ ie.createElement(ie.Fragment, null, /* @__PURE__ */ ie.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ ie.createElement("h3", { style: { fontStyle: "italic" } }, S), T ? /* @__PURE__ */ ie.createElement("pre", { style: O }, T) : null, k);
}
var LT = /* @__PURE__ */ ie.createElement(jT, null), VT = class extends ie.Component {
  constructor(h) {
    super(h), this.state = {
      location: h.location,
      revalidation: h.revalidation,
      error: h.error
    };
  }
  static getDerivedStateFromError(h) {
    return { error: h };
  }
  static getDerivedStateFromProps(h, S) {
    return S.location !== h.location || S.revalidation !== "idle" && h.revalidation === "idle" ? {
      error: h.error,
      location: h.location,
      revalidation: h.revalidation
    } : {
      error: h.error !== void 0 ? h.error : S.error,
      location: S.location,
      revalidation: h.revalidation || S.revalidation
    };
  }
  componentDidCatch(h, S) {
    console.error(
      "React Router caught the following error during render",
      h,
      S
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ ie.createElement(Co.Provider, { value: this.props.routeContext }, /* @__PURE__ */ ie.createElement(
      F0.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function GT({ routeContext: h, match: S, children: T }) {
  let v = ie.useContext(Vh);
  return v && v.static && v.staticContext && (S.route.errorElement || S.route.ErrorBoundary) && (v.staticContext._deepestRenderedBoundaryId = S.route.id), /* @__PURE__ */ ie.createElement(Co.Provider, { value: h }, T);
}
function XT(h, S = [], T = null, v = null) {
  if (h == null) {
    if (!T)
      return null;
    if (T.errors)
      h = T.matches;
    else if (S.length === 0 && !T.initialized && T.matches.length > 0)
      h = T.matches;
    else
      return null;
  }
  let O = h, B = T == null ? void 0 : T.errors;
  if (B != null) {
    let R = O.findIndex(
      (z) => z.route.id && (B == null ? void 0 : B[z.route.id]) !== void 0
    );
    hn(
      R >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        B
      ).join(",")}`
    ), O = O.slice(
      0,
      Math.min(O.length, R + 1)
    );
  }
  let k = !1, Z = -1;
  if (T)
    for (let R = 0; R < O.length; R++) {
      let z = O[R];
      if ((z.route.HydrateFallback || z.route.hydrateFallbackElement) && (Z = R), z.route.id) {
        let { loaderData: te, errors: q } = T, D = z.route.loader && !te.hasOwnProperty(z.route.id) && (!q || q[z.route.id] === void 0);
        if (z.route.lazy || D) {
          k = !0, Z >= 0 ? O = O.slice(0, Z + 1) : O = [O[0]];
          break;
        }
      }
    }
  return O.reduceRight((R, z, te) => {
    let q, D = !1, G = null, $ = null;
    T && (q = B && z.route.id ? B[z.route.id] : void 0, G = z.route.errorElement || LT, k && (Z < 0 && te === 0 ? (U1(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), D = !0, $ = null) : Z === te && (D = !0, $ = z.route.hydrateFallbackElement || null)));
    let me = S.concat(O.slice(0, te + 1)), fe = () => {
      let le;
      return q ? le = G : D ? le = $ : z.route.Component ? le = /* @__PURE__ */ ie.createElement(z.route.Component, null) : z.route.element ? le = z.route.element : le = R, /* @__PURE__ */ ie.createElement(
        GT,
        {
          match: z,
          routeContext: {
            outlet: R,
            matches: me,
            isDataRoute: T != null
          },
          children: le
        }
      );
    };
    return T && (z.route.ErrorBoundary || z.route.errorElement || te === 0) ? /* @__PURE__ */ ie.createElement(
      VT,
      {
        location: T.location,
        revalidation: T.revalidation,
        component: G,
        error: q,
        children: fe(),
        routeContext: { outlet: null, matches: me, isDataRoute: !0 }
      }
    ) : fe();
  }, null);
}
function I0(h) {
  return `${h} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function QT(h) {
  let S = ie.useContext(Vh);
  return hn(S, I0(h)), S;
}
function ZT(h) {
  let S = ie.useContext(Ev);
  return hn(S, I0(h)), S;
}
function kT(h) {
  let S = ie.useContext(Co);
  return hn(S, I0(h)), S;
}
function eb(h) {
  let S = kT(h), T = S.matches[S.matches.length - 1];
  return hn(
    T.route.id,
    `${h} can only be used on routes that contain a unique "id"`
  ), T.route.id;
}
function KT() {
  return eb(
    "useRouteId"
    /* UseRouteId */
  );
}
function JT() {
  var v;
  let h = ie.useContext(F0), S = ZT(
    "useRouteError"
    /* UseRouteError */
  ), T = eb(
    "useRouteError"
    /* UseRouteError */
  );
  return h !== void 0 ? h : (v = S.errors) == null ? void 0 : v[T];
}
function $T() {
  let { router: h } = QT(
    "useNavigate"
    /* UseNavigateStable */
  ), S = eb(
    "useNavigate"
    /* UseNavigateStable */
  ), T = ie.useRef(!1);
  return C1(() => {
    T.current = !0;
  }), ie.useCallback(
    async (O, B = {}) => {
      vc(T.current, z1), T.current && (typeof O == "number" ? h.navigate(O) : await h.navigate(O, { fromRouteId: S, ...B }));
    },
    [h, S]
  );
}
var m1 = {};
function U1(h, S, T) {
  !S && !m1[h] && (m1[h] = !0, vc(!1, T));
}
ie.memo(WT);
function WT({
  routes: h,
  future: S,
  state: T
}) {
  return M1(h, void 0, T, S);
}
function gv(h) {
  hn(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function FT({
  basename: h = "/",
  children: S = null,
  location: T,
  navigationType: v = "POP",
  navigator: O,
  static: B = !1
}) {
  hn(
    !Ap(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let k = h.replace(/^\/*/, "/"), Z = ie.useMemo(
    () => ({
      basename: k,
      navigator: O,
      static: B,
      future: {}
    }),
    [k, O, B]
  );
  typeof T == "string" && (T = Lh(T));
  let {
    pathname: R = "/",
    search: z = "",
    hash: te = "",
    state: q = null,
    key: D = "default"
  } = T, G = ie.useMemo(() => {
    let $ = Jf(R, k);
    return $ == null ? null : {
      location: {
        pathname: $,
        search: z,
        hash: te,
        state: q,
        key: D
      },
      navigationType: v
    };
  }, [k, R, z, te, q, D, v]);
  return vc(
    G != null,
    `<Router basename="${k}"> is not able to match the URL "${R}${z}${te}" because it does not start with the basename, so the <Router> won't render anything.`
  ), G == null ? null : /* @__PURE__ */ ie.createElement(bc.Provider, { value: Z }, /* @__PURE__ */ ie.createElement(Rp.Provider, { children: S, value: G }));
}
function PT({
  children: h,
  location: S
}) {
  return qT(W0(h), S);
}
function W0(h, S = []) {
  let T = [];
  return ie.Children.forEach(h, (v, O) => {
    if (!ie.isValidElement(v))
      return;
    let B = [...S, O];
    if (v.type === ie.Fragment) {
      T.push.apply(
        T,
        W0(v.props.children, B)
      );
      return;
    }
    hn(
      v.type === gv,
      `[${typeof v.type == "string" ? v.type : v.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), hn(
      !v.props.index || !v.props.children,
      "An index route cannot have child routes."
    );
    let k = {
      id: v.props.id || B.join("-"),
      caseSensitive: v.props.caseSensitive,
      element: v.props.element,
      Component: v.props.Component,
      index: v.props.index,
      path: v.props.path,
      loader: v.props.loader,
      action: v.props.action,
      hydrateFallbackElement: v.props.hydrateFallbackElement,
      HydrateFallback: v.props.HydrateFallback,
      errorElement: v.props.errorElement,
      ErrorBoundary: v.props.ErrorBoundary,
      hasErrorBoundary: v.props.hasErrorBoundary === !0 || v.props.ErrorBoundary != null || v.props.errorElement != null,
      shouldRevalidate: v.props.shouldRevalidate,
      handle: v.props.handle,
      lazy: v.props.lazy
    };
    v.props.children && (k.children = W0(
      v.props.children,
      B
    )), T.push(k);
  }), T;
}
var vv = "get", bv = "application/x-www-form-urlencoded";
function Tv(h) {
  return h != null && typeof h.tagName == "string";
}
function IT(h) {
  return Tv(h) && h.tagName.toLowerCase() === "button";
}
function e2(h) {
  return Tv(h) && h.tagName.toLowerCase() === "form";
}
function t2(h) {
  return Tv(h) && h.tagName.toLowerCase() === "input";
}
function n2(h) {
  return !!(h.metaKey || h.altKey || h.ctrlKey || h.shiftKey);
}
function l2(h, S) {
  return h.button === 0 && // Ignore everything but left clicks
  (!S || S === "_self") && // Let browser handle "target=_blank" etc.
  !n2(h);
}
var pv = null;
function a2() {
  if (pv === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), pv = !1;
    } catch {
      pv = !0;
    }
  return pv;
}
var u2 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function J0(h) {
  return h != null && !u2.has(h) ? (vc(
    !1,
    `"${h}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bv}"`
  ), null) : h;
}
function i2(h, S) {
  let T, v, O, B, k;
  if (e2(h)) {
    let Z = h.getAttribute("action");
    v = Z ? Jf(Z, S) : null, T = h.getAttribute("method") || vv, O = J0(h.getAttribute("enctype")) || bv, B = new FormData(h);
  } else if (IT(h) || t2(h) && (h.type === "submit" || h.type === "image")) {
    let Z = h.form;
    if (Z == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let R = h.getAttribute("formaction") || Z.getAttribute("action");
    if (v = R ? Jf(R, S) : null, T = h.getAttribute("formmethod") || Z.getAttribute("method") || vv, O = J0(h.getAttribute("formenctype")) || J0(Z.getAttribute("enctype")) || bv, B = new FormData(Z, h), !a2()) {
      let { name: z, type: te, value: q } = h;
      if (te === "image") {
        let D = z ? `${z}.` : "";
        B.append(`${D}x`, "0"), B.append(`${D}y`, "0");
      } else z && B.append(z, q);
    }
  } else {
    if (Tv(h))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    T = vv, v = null, O = bv, k = h;
  }
  return B && O === "text/plain" && (k = B, B = void 0), { action: v, method: T.toLowerCase(), encType: O, formData: B, body: k };
}
function tb(h, S) {
  if (h === !1 || h === null || typeof h > "u")
    throw new Error(S);
}
async function c2(h, S) {
  if (h.id in S)
    return S[h.id];
  try {
    let T = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      h.module
    );
    return S[h.id] = T, T;
  } catch (T) {
    return console.error(
      `Error loading route module \`${h.module}\`, reloading page...`
    ), console.error(T), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function o2(h) {
  return h == null ? !1 : h.href == null ? h.rel === "preload" && typeof h.imageSrcSet == "string" && typeof h.imageSizes == "string" : typeof h.rel == "string" && typeof h.href == "string";
}
async function f2(h, S, T) {
  let v = await Promise.all(
    h.map(async (O) => {
      let B = S.routes[O.route.id];
      if (B) {
        let k = await c2(B, T);
        return k.links ? k.links() : [];
      }
      return [];
    })
  );
  return h2(
    v.flat(1).filter(o2).filter((O) => O.rel === "stylesheet" || O.rel === "preload").map(
      (O) => O.rel === "stylesheet" ? { ...O, rel: "prefetch", as: "style" } : { ...O, rel: "prefetch" }
    )
  );
}
function y1(h, S, T, v, O, B) {
  let k = (R, z) => T[z] ? R.route.id !== T[z].route.id : !0, Z = (R, z) => {
    var te;
    return (
      // param change, /users/123 -> /users/456
      T[z].pathname !== R.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((te = T[z].route.path) == null ? void 0 : te.endsWith("*")) && T[z].params["*"] !== R.params["*"]
    );
  };
  return B === "assets" ? S.filter(
    (R, z) => k(R, z) || Z(R, z)
  ) : B === "data" ? S.filter((R, z) => {
    var q;
    let te = v.routes[R.route.id];
    if (!te || !te.hasLoader)
      return !1;
    if (k(R, z) || Z(R, z))
      return !0;
    if (R.route.shouldRevalidate) {
      let D = R.route.shouldRevalidate({
        currentUrl: new URL(
          O.pathname + O.search + O.hash,
          window.origin
        ),
        currentParams: ((q = T[0]) == null ? void 0 : q.params) || {},
        nextUrl: new URL(h, window.origin),
        nextParams: R.params,
        defaultShouldRevalidate: !0
      });
      if (typeof D == "boolean")
        return D;
    }
    return !0;
  }) : [];
}
function r2(h, S) {
  return s2(
    h.map((T) => {
      let v = S.routes[T.route.id];
      if (!v) return [];
      let O = [v.module];
      return v.imports && (O = O.concat(v.imports)), O;
    }).flat(1)
  );
}
function s2(h) {
  return [...new Set(h)];
}
function d2(h) {
  let S = {}, T = Object.keys(h).sort();
  for (let v of T)
    S[v] = h[v];
  return S;
}
function h2(h, S) {
  let T = /* @__PURE__ */ new Set();
  return new Set(S), h.reduce((v, O) => {
    let B = JSON.stringify(d2(O));
    return T.has(B) || (T.add(B), v.push({ key: B, link: O })), v;
  }, []);
}
function m2(h) {
  let S = typeof h == "string" ? new URL(
    h,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : h;
  return S.pathname === "/" ? S.pathname = "_root.data" : S.pathname = `${S.pathname.replace(/\/$/, "")}.data`, S;
}
function y2() {
  let h = ie.useContext(Vh);
  return tb(
    h,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), h;
}
function p2() {
  let h = ie.useContext(Ev);
  return tb(
    h,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), h;
}
var nb = ie.createContext(void 0);
nb.displayName = "FrameworkContext";
function H1() {
  let h = ie.useContext(nb);
  return tb(
    h,
    "You must render this element inside a <HydratedRouter> element"
  ), h;
}
function g2(h, S) {
  let T = ie.useContext(nb), [v, O] = ie.useState(!1), [B, k] = ie.useState(!1), { onFocus: Z, onBlur: R, onMouseEnter: z, onMouseLeave: te, onTouchStart: q } = S, D = ie.useRef(null);
  ie.useEffect(() => {
    if (h === "render" && k(!0), h === "viewport") {
      let me = (le) => {
        le.forEach((ce) => {
          k(ce.isIntersecting);
        });
      }, fe = new IntersectionObserver(me, { threshold: 0.5 });
      return D.current && fe.observe(D.current), () => {
        fe.disconnect();
      };
    }
  }, [h]), ie.useEffect(() => {
    if (v) {
      let me = setTimeout(() => {
        k(!0);
      }, 100);
      return () => {
        clearTimeout(me);
      };
    }
  }, [v]);
  let G = () => {
    O(!0);
  }, $ = () => {
    O(!1), k(!1);
  };
  return T ? h !== "intent" ? [B, D, {}] : [
    B,
    D,
    {
      onFocus: Sp(Z, G),
      onBlur: Sp(R, $),
      onMouseEnter: Sp(z, G),
      onMouseLeave: Sp(te, $),
      onTouchStart: Sp(q, G)
    }
  ] : [!1, D, {}];
}
function Sp(h, S) {
  return (T) => {
    h && h(T), T.defaultPrevented || S(T);
  };
}
function v2({
  page: h,
  ...S
}) {
  let { router: T } = y2(), v = ie.useMemo(
    () => S1(T.routes, h, T.basename),
    [T.routes, h, T.basename]
  );
  return v ? /* @__PURE__ */ ie.createElement(S2, { page: h, matches: v, ...S }) : null;
}
function b2(h) {
  let { manifest: S, routeModules: T } = H1(), [v, O] = ie.useState([]);
  return ie.useEffect(() => {
    let B = !1;
    return f2(h, S, T).then(
      (k) => {
        B || O(k);
      }
    ), () => {
      B = !0;
    };
  }, [h, S, T]), v;
}
function S2({
  page: h,
  matches: S,
  ...T
}) {
  let v = Us(), { manifest: O, routeModules: B } = H1(), { loaderData: k, matches: Z } = p2(), R = ie.useMemo(
    () => y1(
      h,
      S,
      Z,
      O,
      v,
      "data"
    ),
    [h, S, Z, O, v]
  ), z = ie.useMemo(
    () => y1(
      h,
      S,
      Z,
      O,
      v,
      "assets"
    ),
    [h, S, Z, O, v]
  ), te = ie.useMemo(() => {
    if (h === v.pathname + v.search + v.hash)
      return [];
    let G = /* @__PURE__ */ new Set(), $ = !1;
    if (S.forEach((fe) => {
      var ce;
      let le = O.routes[fe.route.id];
      !le || !le.hasLoader || (!R.some((Ee) => Ee.route.id === fe.route.id) && fe.route.id in k && ((ce = B[fe.route.id]) != null && ce.shouldRevalidate) || le.hasClientLoader ? $ = !0 : G.add(fe.route.id));
    }), G.size === 0)
      return [];
    let me = m2(h);
    return $ && G.size > 0 && me.searchParams.set(
      "_routes",
      S.filter((fe) => G.has(fe.route.id)).map((fe) => fe.route.id).join(",")
    ), [me.pathname + me.search];
  }, [
    k,
    v,
    O,
    R,
    S,
    h,
    B
  ]), q = ie.useMemo(
    () => r2(z, O),
    [z, O]
  ), D = b2(z);
  return /* @__PURE__ */ ie.createElement(ie.Fragment, null, te.map((G) => /* @__PURE__ */ ie.createElement("link", { key: G, rel: "prefetch", as: "fetch", href: G, ...T })), q.map((G) => /* @__PURE__ */ ie.createElement("link", { key: G, rel: "modulepreload", href: G, ...T })), D.map(({ key: G, link: $ }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ ie.createElement("link", { key: G, ...$ })
  )));
}
function E2(...h) {
  return (S) => {
    h.forEach((T) => {
      typeof T == "function" ? T(S) : T != null && (T.current = S);
    });
  };
}
var x1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  x1 && (window.__reactRouterVersion = "7.1.5");
} catch {
}
function T2({
  basename: h,
  children: S,
  window: T
}) {
  let v = ie.useRef();
  v.current == null && (v.current = rT({ window: T, v5Compat: !0 }));
  let O = v.current, [B, k] = ie.useState({
    action: O.action,
    location: O.location
  }), Z = ie.useCallback(
    (R) => {
      ie.startTransition(() => k(R));
    },
    [k]
  );
  return ie.useLayoutEffect(() => O.listen(Z), [O, Z]), /* @__PURE__ */ ie.createElement(
    FT,
    {
      basename: h,
      children: S,
      location: B.location,
      navigationType: B.action,
      navigator: O
    }
  );
}
var w1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, _1 = ie.forwardRef(
  function({
    onClick: S,
    discover: T = "render",
    prefetch: v = "none",
    relative: O,
    reloadDocument: B,
    replace: k,
    state: Z,
    target: R,
    to: z,
    preventScrollReset: te,
    viewTransition: q,
    ...D
  }, G) {
    let { basename: $ } = ie.useContext(bc), me = typeof z == "string" && w1.test(z), fe, le = !1;
    if (typeof z == "string" && me && (fe = z, x1))
      try {
        let ve = new URL(window.location.href), Le = z.startsWith("//") ? new URL(ve.protocol + z) : new URL(z), xt = Jf(Le.pathname, $);
        Le.origin === ve.origin && xt != null ? z = xt + Le.search + Le.hash : le = !0;
      } catch {
        vc(
          !1,
          `<Link to="${z}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let ce = BT(z, { relative: O }), [Ee, ge, Be] = g2(
      v,
      D
    ), yt = D2(z, {
      replace: k,
      state: Z,
      target: R,
      preventScrollReset: te,
      relative: O,
      viewTransition: q
    });
    function Bt(ve) {
      S && S(ve), ve.defaultPrevented || yt(ve);
    }
    let St = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ ie.createElement(
        "a",
        {
          ...D,
          ...Be,
          href: fe || ce,
          onClick: le || B ? S : Bt,
          ref: E2(G, ge),
          target: R,
          "data-discover": !me && T === "render" ? "true" : void 0
        }
      )
    );
    return Ee && !me ? /* @__PURE__ */ ie.createElement(ie.Fragment, null, St, /* @__PURE__ */ ie.createElement(v2, { page: ce })) : St;
  }
);
_1.displayName = "Link";
var R2 = ie.forwardRef(
  function({
    "aria-current": S = "page",
    caseSensitive: T = !1,
    className: v = "",
    end: O = !1,
    style: B,
    to: k,
    viewTransition: Z,
    children: R,
    ...z
  }, te) {
    let q = Op(k, { relative: z.relative }), D = Us(), G = ie.useContext(Ev), { navigator: $, basename: me } = ie.useContext(bc), fe = G != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    H2(q) && Z === !0, le = $.encodeLocation ? $.encodeLocation(q).pathname : q.pathname, ce = D.pathname, Ee = G && G.navigation && G.navigation.location ? G.navigation.location.pathname : null;
    T || (ce = ce.toLowerCase(), Ee = Ee ? Ee.toLowerCase() : null, le = le.toLowerCase()), Ee && me && (Ee = Jf(Ee, me) || Ee);
    const ge = le !== "/" && le.endsWith("/") ? le.length - 1 : le.length;
    let Be = ce === le || !O && ce.startsWith(le) && ce.charAt(ge) === "/", yt = Ee != null && (Ee === le || !O && Ee.startsWith(le) && Ee.charAt(le.length) === "/"), Bt = {
      isActive: Be,
      isPending: yt,
      isTransitioning: fe
    }, St = Be ? S : void 0, ve;
    typeof v == "function" ? ve = v(Bt) : ve = [
      v,
      Be ? "active" : null,
      yt ? "pending" : null,
      fe ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Le = typeof B == "function" ? B(Bt) : B;
    return /* @__PURE__ */ ie.createElement(
      _1,
      {
        ...z,
        "aria-current": St,
        className: ve,
        ref: te,
        style: Le,
        to: k,
        viewTransition: Z
      },
      typeof R == "function" ? R(Bt) : R
    );
  }
);
R2.displayName = "NavLink";
var A2 = ie.forwardRef(
  ({
    discover: h = "render",
    fetcherKey: S,
    navigate: T,
    reloadDocument: v,
    replace: O,
    state: B,
    method: k = vv,
    action: Z,
    onSubmit: R,
    relative: z,
    preventScrollReset: te,
    viewTransition: q,
    ...D
  }, G) => {
    let $ = M2(), me = U2(Z, { relative: z }), fe = k.toLowerCase() === "get" ? "get" : "post", le = typeof Z == "string" && w1.test(Z), ce = (Ee) => {
      if (R && R(Ee), Ee.defaultPrevented) return;
      Ee.preventDefault();
      let ge = Ee.nativeEvent.submitter, Be = (ge == null ? void 0 : ge.getAttribute("formmethod")) || k;
      $(ge || Ee.currentTarget, {
        fetcherKey: S,
        method: Be,
        navigate: T,
        replace: O,
        state: B,
        relative: z,
        preventScrollReset: te,
        viewTransition: q
      });
    };
    return /* @__PURE__ */ ie.createElement(
      "form",
      {
        ref: G,
        method: fe,
        action: me,
        onSubmit: v ? R : ce,
        ...D,
        "data-discover": !le && h === "render" ? "true" : void 0
      }
    );
  }
);
A2.displayName = "Form";
function O2(h) {
  return `${h} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function N1(h) {
  let S = ie.useContext(Vh);
  return hn(S, O2(h)), S;
}
function D2(h, {
  target: S,
  replace: T,
  state: v,
  preventScrollReset: O,
  relative: B,
  viewTransition: k
} = {}) {
  let Z = P0(), R = Us(), z = Op(h, { relative: B });
  return ie.useCallback(
    (te) => {
      if (l2(te, S)) {
        te.preventDefault();
        let q = T !== void 0 ? T : Tp(R) === Tp(z);
        Z(h, {
          replace: q,
          state: v,
          preventScrollReset: O,
          relative: B,
          viewTransition: k
        });
      }
    },
    [
      R,
      Z,
      z,
      T,
      v,
      S,
      h,
      O,
      B,
      k
    ]
  );
}
var z2 = 0, C2 = () => `__${String(++z2)}__`;
function M2() {
  let { router: h } = N1(
    "useSubmit"
    /* UseSubmit */
  ), { basename: S } = ie.useContext(bc), T = KT();
  return ie.useCallback(
    async (v, O = {}) => {
      let { action: B, method: k, encType: Z, formData: R, body: z } = i2(
        v,
        S
      );
      if (O.navigate === !1) {
        let te = O.fetcherKey || C2();
        await h.fetch(te, T, O.action || B, {
          preventScrollReset: O.preventScrollReset,
          formData: R,
          body: z,
          formMethod: O.method || k,
          formEncType: O.encType || Z,
          flushSync: O.flushSync
        });
      } else
        await h.navigate(O.action || B, {
          preventScrollReset: O.preventScrollReset,
          formData: R,
          body: z,
          formMethod: O.method || k,
          formEncType: O.encType || Z,
          replace: O.replace,
          state: O.state,
          fromRouteId: T,
          flushSync: O.flushSync,
          viewTransition: O.viewTransition
        });
    },
    [h, S, T]
  );
}
function U2(h, { relative: S } = {}) {
  let { basename: T } = ie.useContext(bc), v = ie.useContext(Co);
  hn(v, "useFormAction must be used inside a RouteContext");
  let [O] = v.matches.slice(-1), B = { ...Op(h || ".", { relative: S }) }, k = Us();
  if (h == null) {
    B.search = k.search;
    let Z = new URLSearchParams(B.search), R = Z.getAll("index");
    if (R.some((te) => te === "")) {
      Z.delete("index"), R.filter((q) => q).forEach((q) => Z.append("index", q));
      let te = Z.toString();
      B.search = te ? `?${te}` : "";
    }
  }
  return (!h || h === ".") && O.route.index && (B.search = B.search ? B.search.replace(/^\?/, "?index&") : "?index"), T !== "/" && (B.pathname = B.pathname === "/" ? T : zo([T, B.pathname])), Tp(B);
}
function H2(h, S = {}) {
  let T = ie.useContext(D1);
  hn(
    T != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: v } = N1(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), O = Op(h, { relative: S.relative });
  if (!T.isTransitioning)
    return !1;
  let B = Jf(T.currentLocation.pathname, v) || T.currentLocation.pathname, k = Jf(T.nextLocation.pathname, v) || T.nextLocation.pathname;
  return Sv(O.pathname, k) != null || Sv(O.pathname, B) != null;
}
new TextEncoder();
const x2 = "-_VRTG_button", w2 = {
  button: x2
};
function B1({ onClick: h }) {
  return /* @__PURE__ */ fa.jsx("button", { onClick: h, className: w2.button, children: "Change page" });
}
function _2() {
  const h = P0();
  return /* @__PURE__ */ fa.jsxs("div", { children: [
    /* @__PURE__ */ fa.jsx("p", { children: "Page 2" }),
    /* @__PURE__ */ fa.jsx(B1, { onClick: () => h("/page1") })
  ] });
}
function p1() {
  const h = P0();
  return /* @__PURE__ */ fa.jsxs("div", { children: [
    /* @__PURE__ */ fa.jsx("p", { children: "Page 1" }),
    /* @__PURE__ */ fa.jsx(B1, { onClick: () => h("/page2") })
  ] });
}
function N2() {
  return /* @__PURE__ */ fa.jsx(T2, { children: /* @__PURE__ */ fa.jsxs(PT, { children: [
    /* @__PURE__ */ fa.jsx(gv, { path: "/", element: /* @__PURE__ */ fa.jsx(p1, {}) }),
    /* @__PURE__ */ fa.jsx(gv, { path: "/page1", element: /* @__PURE__ */ fa.jsx(p1, {}) }),
    /* @__PURE__ */ fa.jsx(gv, { path: "/page2", element: /* @__PURE__ */ fa.jsx(_2, {}) })
  ] }) });
}
class B2 extends uT(N2, {
  props: { name: "string" },
  shadow: "open"
}) {
  connectedCallback() {
    var T;
    super.connectedCallback();
    const S = document.getElementById("<child-wc>");
    S && ((T = this.shadowRoot) == null || T.append(S.cloneNode(!0)));
  }
}
customElements.define("child-wc", B2);
