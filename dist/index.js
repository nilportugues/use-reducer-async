var e=require("react"),r="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?e.useEffect:e.useLayoutEffect;exports.useReducerAsync=function(n,t,u,c){var a,i=((a=e.useRef()).current||(a.current=new AbortController),e.useEffect(function(){return function(){a.current.abort()}},[]),a.current.signal),o=c||u,f=e.useReducer(n,t,c&&u),s=f[0],d=f[1],l=e.useRef(s);r(function(){l.current=s},[s]);var g=e.useCallback(function(){return l.current},[]),v=e.useCallback(function(e){var r=(e||{}).type,n=r&&o[r]||null;n?n({dispatch:d,getState:g,signal:i})(e):d(e)},[o,g,i]);return[s,v]};
//# sourceMappingURL=index.js.map
