function GT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var l2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function QT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v_={exports:{}},lu={},w_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),JT=Symbol.for("react.portal"),YT=Symbol.for("react.fragment"),XT=Symbol.for("react.strict_mode"),ZT=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),sI=Symbol.for("react.lazy"),Cm=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var E_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T_=Object.assign,I_={};function rs(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||E_}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S_(){}S_.prototype=rs.prototype;function Cd(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||E_}var Nd=Cd.prototype=new S_;Nd.constructor=Cd;T_(Nd,rs.prototype);Nd.isPureReactComponent=!0;var Nm=Array.isArray,A_=Object.prototype.hasOwnProperty,Dd={current:null},R_={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)A_.call(e,r)&&!R_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:jo,type:t,key:s,ref:o,props:i,_owner:Dd.current}}function aI(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dm=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function Ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case JT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ec(o,0):r,Nm(i)?(n="",t!=null&&(n=t.replace(Dm,"$&/")+"/"),Ja(i,e,n,"",function(c){return c})):i!=null&&(xd(i)&&(i=aI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Nm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ec(s,l);o+=Ja(s,e,n,u,i)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ec(s,l++),o+=Ja(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return Ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ya={transition:null},cI={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Dd};function P_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=rs;Z.Fragment=YT;Z.Profiler=ZT;Z.PureComponent=Cd;Z.StrictMode=XT;Z.Suspense=rI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;Z.act=P_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=T_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)A_.call(e,u)&&!R_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:jo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};Z.createElement=k_;Z.createFactory=function(t){var e=k_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:nI,render:t}};Z.isValidElement=xd;Z.lazy=function(t){return{$$typeof:sI,_payload:{_status:-1,_result:t},_init:uI}};Z.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};Z.unstable_act=P_;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";w_.exports=Z;var N=w_.exports;const C_=QT(N),hI=GT({__proto__:null,default:C_},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dI=N,fI=Symbol.for("react.element"),pI=Symbol.for("react.fragment"),mI=Object.prototype.hasOwnProperty,gI=dI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yI={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mI.call(e,r)&&!yI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fI,type:t,key:s,ref:o,props:i,_owner:gI.current}}lu.Fragment=pI;lu.jsx=N_;lu.jsxs=N_;v_.exports=lu;var q=v_.exports,lh={},D_={exports:{}},Rt={},x_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var X=z.length;z.push(Q);e:for(;0<X;){var ge=X-1>>>1,le=z[ge];if(0<i(le,Q))z[ge]=Q,z[X]=le,X=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],X=z.pop();if(X!==Q){z[0]=X;e:for(var ge=0,le=z.length,Se=le>>>1;ge<Se;){var un=2*(ge+1)-1,cn=z[un],hn=un+1,Gt=z[hn];if(0>i(cn,X))hn<le&&0>i(Gt,cn)?(z[ge]=Gt,z[hn]=X,ge=hn):(z[ge]=cn,z[un]=X,ge=un);else if(hn<le&&0>i(Gt,X))z[ge]=Gt,z[hn]=X,ge=hn;else break e}}return Q}function i(z,Q){var X=z.sortIndex-Q.sortIndex;return X!==0?X:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,I=!1,R=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(z){if(P=!1,v(z),!R)if(n(u)!==null)R=!0,gs(M);else{var Q=n(c);Q!==null&&ln(O,Q.startTime-z)}}function M(z,Q){R=!1,P&&(P=!1,T(y),y=-1),I=!0;var X=m;try{for(v(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!k());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),v(Q)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var un=n(c);un!==null&&ln(O,un.startTime-Q),Se=!1}return Se}finally{p=null,m=X,I=!1}}var F=!1,w=null,y=-1,E=5,S=-1;function k(){return!(t.unstable_now()-S<E)}function x(){if(w!==null){var z=t.unstable_now();S=z;var Q=!0;try{Q=w(!0,z)}finally{Q?A():(F=!1,w=null)}}else F=!1}var A;if(typeof _=="function")A=function(){_(x)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,xr=Pt.port2;Pt.port1.onmessage=x,A=function(){xr.postMessage(null)}}else A=function(){C(x,0)};function gs(z){w=z,F||(F=!0,A())}function ln(z,Q){y=C(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||I||(R=!0,gs(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var X=m;m=Q;try{return z()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=m;m=z;try{return Q()}finally{m=X}},t.unstable_scheduleCallback=function(z,Q,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,z={id:f++,callback:Q,priorityLevel:z,startTime:X,expirationTime:le,sortIndex:-1},X>ge?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(P?(T(y),y=-1):P=!0,ln(O,X-ge))):(z.sortIndex=le,e(u,z),R||I||(R=!0,gs(M))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var Q=m;return function(){var X=m;m=Q;try{return z.apply(this,arguments)}finally{m=X}}}})(O_);x_.exports=O_;var _I=x_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vI=N,At=_I;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V_=new Set,uo={};function ai(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(uo[t]=e,t=0;t<e.length;t++)V_.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uh=Object.prototype.hasOwnProperty,wI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},Om={};function EI(t){return uh.call(Om,t)?!0:uh.call(xm,t)?!1:wI.test(t)?Om[t]=!0:(xm[t]=!0,!1)}function TI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function II(t,e,n,r){if(e===null||typeof e>"u"||TI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Vd);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Vd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Vd);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ld(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(II(e,n,i,r)&&(n=null),r||i===null?EI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=vI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),M_=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),dh=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),b_=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Tc;function Us(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ic=!1;function Sc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function SI(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function fh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case ch:return"Profiler";case Md:return"StrictMode";case hh:return"Suspense";case dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M_:return(t.displayName||"Context")+".Consumer";case L_:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:fh(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return fh(t(e))}catch{}}return null}function AI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fh(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RI(t){var e=F_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=RI(t))}function U_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j_(t,e){e=e.checked,e!=null&&Ld(t,"checked",e,!1)}function mh(t,e){j_(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(js(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function z_(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,B_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kI=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){kI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function W_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function q_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(t,e){if(e){if(PI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eh=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Th=null,Oi=null,Vi=null;function Um(t){if(t=Bo(t)){if(typeof Th!="function")throw Error(U(280));var e=t.stateNode;e&&(e=fu(e),Th(t.stateNode,t.type,e))}}function H_(t){Oi?Vi?Vi.push(t):Vi=[t]:Oi=t}function K_(){if(Oi){var t=Oi,e=Vi;if(Vi=Oi=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function G_(t,e){return t(e)}function Q_(){}var Ac=!1;function J_(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return G_(t,e,n)}finally{Ac=!1,(Oi!==null||Vi!==null)&&(Q_(),K_())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ih=!1;if(An)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{Ih=!1}function CI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Js=!1,vl=null,wl=!1,Sh=null,NI={onError:function(t){Js=!0,vl=t}};function DI(t,e,n,r,i,s,o,l,u){Js=!1,vl=null,CI.apply(NI,arguments)}function xI(t,e,n,r,i,s,o,l,u){if(DI.apply(this,arguments),Js){if(Js){var c=vl;Js=!1,vl=null}else throw Error(U(198));wl||(wl=!0,Sh=c)}}function li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(li(t)!==t)throw Error(U(188))}function OI(t){var e=t.alternate;if(!e){if(e=li(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jm(i),t;if(s===r)return jm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function X_(t){return t=OI(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var ev=At.unstable_scheduleCallback,zm=At.unstable_cancelCallback,VI=At.unstable_shouldYield,LI=At.unstable_requestPaint,Re=At.unstable_now,MI=At.unstable_getCurrentPriorityLevel,jd=At.unstable_ImmediatePriority,tv=At.unstable_UserBlockingPriority,El=At.unstable_NormalPriority,bI=At.unstable_LowPriority,nv=At.unstable_IdlePriority,uu=null,Zt=null;function FI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:zI,UI=Math.log,jI=Math.LN2;function zI(t){return t>>>=0,t===0?32:31-(UI(t)/jI|0)|0}var Ca=64,Na=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=zs(l):(s&=o,s!==0&&(r=zs(s)))}else o=n&~i,o!==0?r=zs(o):s!==0&&(r=zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function $I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$I(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rv(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function WI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sv,$d,ov,av,lv,Rh=!1,Da=[],sr=null,or=null,ar=null,fo=new Map,po=new Map,Qn=[],qI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $m(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Bo(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HI(t,e,n,r,i){switch(e){case"focusin":return sr=xs(sr,t,e,n,r,i),!0;case"dragenter":return or=xs(or,t,e,n,r,i),!0;case"mouseover":return ar=xs(ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,xs(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,xs(po.get(s)||null,t,e,n,r,i)),!0}return!1}function uv(t){var e=$r(t.target);if(e!==null){var n=li(e);if(n!==null){if(e=n.tag,e===13){if(e=Y_(n),e!==null){t.blockedOn=e,lv(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eh=r,n.target.dispatchEvent(r),Eh=null}else return e=Bo(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){Xa(t)&&n.delete(e)}function KI(){Rh=!1,sr!==null&&Xa(sr)&&(sr=null),or!==null&&Xa(or)&&(or=null),ar!==null&&Xa(ar)&&(ar=null),fo.forEach(Bm),po.forEach(Bm)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,Rh||(Rh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,KI)))}function mo(t){function e(i){return Os(i,t)}if(0<Da.length){Os(Da[0],t);for(var n=1;n<Da.length;n++){var r=Da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Os(sr,t),or!==null&&Os(or,t),ar!==null&&Os(ar,t),fo.forEach(e),po.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)uv(n),n.blockedOn===null&&Qn.shift()}var Li=Ln.ReactCurrentBatchConfig,Il=!0;function GI(t,e,n,r){var i=oe,s=Li.transition;Li.transition=null;try{oe=1,Bd(t,e,n,r)}finally{oe=i,Li.transition=s}}function QI(t,e,n,r){var i=oe,s=Li.transition;Li.transition=null;try{oe=4,Bd(t,e,n,r)}finally{oe=i,Li.transition=s}}function Bd(t,e,n,r){if(Il){var i=kh(t,e,n,r);if(i===null)Mc(t,e,r,Sl,n),$m(t,r);else if(HI(i,t,e,n,r))r.stopPropagation();else if($m(t,r),e&4&&-1<qI.indexOf(t)){for(;i!==null;){var s=Bo(i);if(s!==null&&sv(s),s=kh(t,e,n,r),s===null&&Mc(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mc(t,e,r,null,n)}}var Sl=null;function kh(t,e,n,r){if(Sl=null,t=Ud(r),t=$r(t),t!==null)if(e=li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MI()){case jd:return 1;case tv:return 4;case El:case bI:return 16;case nv:return 536870912;default:return 16}default:return 16}}var tr=null,Wd=null,Za=null;function hv(){if(Za)return Za;var t,e=Wd,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Wm(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:Wm,this.isPropagationStopped=Wm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=kt(is),$o=we({},is,{view:0,detail:0}),JI=kt($o),kc,Pc,Vs,cu=we({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(kc=t.screenX-Vs.screenX,Pc=t.screenY-Vs.screenY):Pc=kc=0,Vs=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),qm=kt(cu),YI=we({},cu,{dataTransfer:0}),XI=kt(YI),ZI=we({},$o,{relatedTarget:0}),Cc=kt(ZI),e1=we({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=kt(e1),n1=we({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r1=kt(n1),i1=we({},is,{data:0}),Hm=kt(i1),s1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function Hd(){return l1}var u1=we({},$o,{key:function(t){if(t.key){var e=s1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c1=kt(u1),h1=we({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=kt(h1),d1=we({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),f1=kt(d1),p1=we({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),m1=kt(p1),g1=we({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y1=kt(g1),_1=[9,13,27,32],Kd=An&&"CompositionEvent"in window,Ys=null;An&&"documentMode"in document&&(Ys=document.documentMode);var v1=An&&"TextEvent"in window&&!Ys,dv=An&&(!Kd||Ys&&8<Ys&&11>=Ys),Gm=String.fromCharCode(32),Qm=!1;function fv(t,e){switch(t){case"keyup":return _1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function w1(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(Qm=!0,Gm);case"textInput":return t=e.data,t===Gm&&Qm?null:t;default:return null}}function E1(t,e){if(Ti)return t==="compositionend"||!Kd&&fv(t,e)?(t=hv(),Za=Wd=tr=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function mv(t,e,n,r){H_(r),e=Al(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xs=null,go=null;function I1(t){Rv(t,0)}function hu(t){var e=Ai(t);if(U_(e))return t}function S1(t,e){if(t==="change")return e}var gv=!1;if(An){var Nc;if(An){var Dc="oninput"in document;if(!Dc){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Dc=typeof Ym.oninput=="function"}Nc=Dc}else Nc=!1;gv=Nc&&(!document.documentMode||9<document.documentMode)}function Xm(){Xs&&(Xs.detachEvent("onpropertychange",yv),go=Xs=null)}function yv(t){if(t.propertyName==="value"&&hu(go)){var e=[];mv(e,go,t,Ud(t)),J_(I1,e)}}function A1(t,e,n){t==="focusin"?(Xm(),Xs=e,go=n,Xs.attachEvent("onpropertychange",yv)):t==="focusout"&&Xm()}function R1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(go)}function k1(t,e){if(t==="click")return hu(e)}function P1(t,e){if(t==="input"||t==="change")return hu(e)}function C1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:C1;function yo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Zm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zm(n)}}function _v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vv(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N1(t){var e=vv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_v(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=eg(n,s);var o=eg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var D1=An&&"documentMode"in document&&11>=document.documentMode,Ii=null,Ph=null,Zs=null,Ch=!1;function tg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Ii==null||Ii!==_l(r)||(r=Ii,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&yo(Zs,r)||(Zs=r,r=Al(Ph,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},xc={},wv={};An&&(wv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function du(t){if(xc[t])return xc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wv)return xc[t]=e[n];return t}var Ev=du("animationend"),Tv=du("animationiteration"),Iv=du("animationstart"),Sv=du("transitionend"),Av=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Av.set(t,e),ai(e,[t])}for(var Oc=0;Oc<ng.length;Oc++){var Vc=ng[Oc],x1=Vc.toLowerCase(),O1=Vc[0].toUpperCase()+Vc.slice(1);Ir(x1,"on"+O1)}Ir(Ev,"onAnimationEnd");Ir(Tv,"onAnimationIteration");Ir(Iv,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Sv,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ai("onBeforeInput",["compositionend","keypress","textInput","paste"]);ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function rg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xI(r,e,void 0,t),t.currentTarget=null}function Rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;rg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;rg(i,l,c),s=u}}}if(wl)throw t=Sh,wl=!1,Sh=null,t}function de(t,e){var n=e[Vh];n===void 0&&(n=e[Vh]=new Set);var r=t+"__bubble";n.has(r)||(kv(e,t,2,!1),n.add(r))}function Lc(t,e,n){var r=0;e&&(r|=4),kv(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Va]){t[Va]=!0,V_.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Lc("selectionchange",!1,e))}}function kv(t,e,n,r){switch(cv(e)){case 1:var i=GI;break;case 4:i=QI;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}J_(function(){var c=s,f=Ud(n),p=[];e:{var m=Av.get(t);if(m!==void 0){var I=qd,R=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":I=c1;break;case"focusin":R="focus",I=Cc;break;case"focusout":R="blur",I=Cc;break;case"beforeblur":case"afterblur":I=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=XI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=f1;break;case Ev:case Tv:case Iv:I=t1;break;case Sv:I=m1;break;case"scroll":I=JI;break;case"wheel":I=y1;break;case"copy":case"cut":case"paste":I=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Km}var P=(e&4)!==0,C=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,v;_!==null;){v=_;var O=v.stateNode;if(v.tag===5&&O!==null&&(v=O,T!==null&&(O=ho(_,T),O!=null&&P.push(vo(_,O,v)))),C)break;_=_.return}0<P.length&&(m=new I(m,R,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Eh&&(R=n.relatedTarget||n.fromElement)&&($r(R)||R[Rn]))break e;if((I||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,I?(R=n.relatedTarget||n.toElement,I=c,R=R?$r(R):null,R!==null&&(C=li(R),R!==C||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=c),I!==R)){if(P=qm,O="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=Km,O="onPointerLeave",T="onPointerEnter",_="pointer"),C=I==null?m:Ai(I),v=R==null?m:Ai(R),m=new P(O,_+"leave",I,n,f),m.target=C,m.relatedTarget=v,O=null,$r(f)===c&&(P=new P(T,_+"enter",R,n,f),P.target=v,P.relatedTarget=C,O=P),C=O,I&&R)t:{for(P=I,T=R,_=0,v=P;v;v=mi(v))_++;for(v=0,O=T;O;O=mi(O))v++;for(;0<_-v;)P=mi(P),_--;for(;0<v-_;)T=mi(T),v--;for(;_--;){if(P===T||T!==null&&P===T.alternate)break t;P=mi(P),T=mi(T)}P=null}else P=null;I!==null&&ig(p,m,I,P,!1),R!==null&&C!==null&&ig(p,C,R,P,!0)}}e:{if(m=c?Ai(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var M=S1;else if(Jm(m))if(gv)M=P1;else{M=R1;var F=A1}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=k1);if(M&&(M=M(t,c))){mv(p,M,n,f);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&gh(m,"number",m.value)}switch(F=c?Ai(c):window,t){case"focusin":(Jm(F)||F.contentEditable==="true")&&(Ii=F,Ph=c,Zs=null);break;case"focusout":Zs=Ph=Ii=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,tg(p,n,f);break;case"selectionchange":if(D1)break;case"keydown":case"keyup":tg(p,n,f)}var w;if(Kd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ti?fv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(dv&&n.locale!=="ko"&&(Ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ti&&(w=hv()):(tr=f,Wd="value"in tr?tr.value:tr.textContent,Ti=!0)),F=Al(c,y),0<F.length&&(y=new Hm(y,t,null,n,f),p.push({event:y,listeners:F}),w?y.data=w:(w=pv(n),w!==null&&(y.data=w)))),(w=v1?w1(t,n):E1(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(f=new Hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}Rv(p,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(vo(t,s,i)),s=ho(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ho(n,s),u!=null&&o.unshift(vo(n,u,l))):i||(u=ho(n,s),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(L1,`
`).replace(M1,"")}function La(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(U(425))}function Rl(){}var Nh=null,Dh=null;function xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(U1)}:Oh;function U1(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mo(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ss,wo="__reactProps$"+ss,Rn="__reactContainer$"+ss,Vh="__reactEvents$"+ss,j1="__reactListeners$"+ss,z1="__reactHandles$"+ss;function $r(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[Yt])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[Yt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function fu(t){return t[wo]||null}var Lh=[],Ri=-1;function Sr(t){return{current:t}}function pe(t){0>Ri||(t.current=Lh[Ri],Lh[Ri]=null,Ri--)}function ce(t,e){Ri++,Lh[Ri]=t.current,t.current=e}var vr={},rt=Sr(vr),gt=Sr(!1),Jr=vr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function kl(){pe(gt),pe(rt)}function lg(t,e,n){if(rt.current!==vr)throw Error(U(168));ce(rt,e),ce(gt,n)}function Pv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,AI(t)||"Unknown",i));return we({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Jr=rt.current,ce(rt,t),ce(gt,gt.current),!0}function ug(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Pv(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,pe(gt),pe(rt),ce(rt,t)):pe(gt),ce(gt,n)}var mn=null,pu=!1,Fc=!1;function Cv(t){mn===null?mn=[t]:mn.push(t)}function $1(t){pu=!0,Cv(t)}function Ar(){if(!Fc&&mn!==null){Fc=!0;var t=0,e=oe;try{var n=mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,pu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),ev(jd,Ar),i}finally{oe=e,Fc=!1}}return null}var ki=[],Pi=0,Cl=null,Nl=0,Ct=[],Nt=0,Yr=null,yn=1,_n="";function br(t,e){ki[Pi++]=Nl,ki[Pi++]=Cl,Cl=t,Nl=e}function Nv(t,e,n){Ct[Nt++]=yn,Ct[Nt++]=_n,Ct[Nt++]=Yr,Yr=t;var r=yn;t=_n;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,yn=1<<32-$t(e)+i|n<<i|r,_n=s+t}else yn=1<<s|n<<i|r,_n=t}function Qd(t){t.return!==null&&(br(t,1),Nv(t,1,0))}function Jd(t){for(;t===Cl;)Cl=ki[--Pi],ki[Pi]=null,Nl=ki[--Pi],ki[Pi]=null;for(;t===Yr;)Yr=Ct[--Nt],Ct[Nt]=null,_n=Ct[--Nt],Ct[Nt]=null,yn=Ct[--Nt],Ct[Nt]=null}var St=null,Tt=null,me=!1,jt=null;function Dv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Tt=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:yn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Tt=null,!0):!1;default:return!1}}function Mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(me){var e=Tt;if(e){var n=e;if(!cg(t,e)){if(Mh(t))throw Error(U(418));e=lr(n.nextSibling);var r=St;e&&cg(t,e)?Dv(r,n):(t.flags=t.flags&-4097|2,me=!1,St=t)}}else{if(Mh(t))throw Error(U(418));t.flags=t.flags&-4097|2,me=!1,St=t}}}function hg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Ma(t){if(t!==St)return!1;if(!me)return hg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xh(t.type,t.memoizedProps)),e&&(e=Tt)){if(Mh(t))throw xv(),Error(U(418));for(;e;)Dv(t,e),e=lr(e.nextSibling)}if(hg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=St?lr(t.stateNode.nextSibling):null;return!0}function xv(){for(var t=Tt;t;)t=lr(t.nextSibling)}function Wi(){Tt=St=null,me=!1}function Yd(t){jt===null?jt=[t]:jt.push(t)}var B1=Ln.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function Ov(t){function e(T,_){if(t){var v=T.deletions;v===null?(T.deletions=[_],T.flags|=16):v.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=dr(T,_),T.index=0,T.sibling=null,T}function s(T,_,v){return T.index=v,t?(v=T.alternate,v!==null?(v=v.index,v<_?(T.flags|=2,_):v):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,v,O){return _===null||_.tag!==6?(_=qc(v,T.mode,O),_.return=T,_):(_=i(_,v),_.return=T,_)}function u(T,_,v,O){var M=v.type;return M===Ei?f(T,_,v.props.children,O,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Kn&&dg(M)===_.type)?(O=i(_,v.props),O.ref=Ls(T,_,v),O.return=T,O):(O=al(v.type,v.key,v.props,null,T.mode,O),O.ref=Ls(T,_,v),O.return=T,O)}function c(T,_,v,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Hc(v,T.mode,O),_.return=T,_):(_=i(_,v.children||[]),_.return=T,_)}function f(T,_,v,O,M){return _===null||_.tag!==7?(_=Gr(v,T.mode,O,M),_.return=T,_):(_=i(_,v),_.return=T,_)}function p(T,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qc(""+_,T.mode,v),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return v=al(_.type,_.key,_.props,null,T.mode,v),v.ref=Ls(T,null,_),v.return=T,v;case wi:return _=Hc(_,T.mode,v),_.return=T,_;case Kn:var O=_._init;return p(T,O(_._payload),v)}if(js(_)||Ns(_))return _=Gr(_,T.mode,v,null),_.return=T,_;ba(T,_)}return null}function m(T,_,v,O){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:l(T,_,""+v,O);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:return v.key===M?u(T,_,v,O):null;case wi:return v.key===M?c(T,_,v,O):null;case Kn:return M=v._init,m(T,_,M(v._payload),O)}if(js(v)||Ns(v))return M!==null?null:f(T,_,v,O,null);ba(T,v)}return null}function I(T,_,v,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(v)||null,l(_,T,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ra:return T=T.get(O.key===null?v:O.key)||null,u(_,T,O,M);case wi:return T=T.get(O.key===null?v:O.key)||null,c(_,T,O,M);case Kn:var F=O._init;return I(T,_,v,F(O._payload),M)}if(js(O)||Ns(O))return T=T.get(v)||null,f(_,T,O,M,null);ba(_,O)}return null}function R(T,_,v,O){for(var M=null,F=null,w=_,y=_=0,E=null;w!==null&&y<v.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var S=m(T,w,v[y],O);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(T,w),_=s(S,_,y),F===null?M=S:F.sibling=S,F=S,w=E}if(y===v.length)return n(T,w),me&&br(T,y),M;if(w===null){for(;y<v.length;y++)w=p(T,v[y],O),w!==null&&(_=s(w,_,y),F===null?M=w:F.sibling=w,F=w);return me&&br(T,y),M}for(w=r(T,w);y<v.length;y++)E=I(w,T,y,v[y],O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?y:E.key),_=s(E,_,y),F===null?M=E:F.sibling=E,F=E);return t&&w.forEach(function(k){return e(T,k)}),me&&br(T,y),M}function P(T,_,v,O){var M=Ns(v);if(typeof M!="function")throw Error(U(150));if(v=M.call(v),v==null)throw Error(U(151));for(var F=M=null,w=_,y=_=0,E=null,S=v.next();w!==null&&!S.done;y++,S=v.next()){w.index>y?(E=w,w=null):E=w.sibling;var k=m(T,w,S.value,O);if(k===null){w===null&&(w=E);break}t&&w&&k.alternate===null&&e(T,w),_=s(k,_,y),F===null?M=k:F.sibling=k,F=k,w=E}if(S.done)return n(T,w),me&&br(T,y),M;if(w===null){for(;!S.done;y++,S=v.next())S=p(T,S.value,O),S!==null&&(_=s(S,_,y),F===null?M=S:F.sibling=S,F=S);return me&&br(T,y),M}for(w=r(T,w);!S.done;y++,S=v.next())S=I(w,T,y,S.value,O),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),_=s(S,_,y),F===null?M=S:F.sibling=S,F=S);return t&&w.forEach(function(x){return e(T,x)}),me&&br(T,y),M}function C(T,_,v,O){if(typeof v=="object"&&v!==null&&v.type===Ei&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:e:{for(var M=v.key,F=_;F!==null;){if(F.key===M){if(M=v.type,M===Ei){if(F.tag===7){n(T,F.sibling),_=i(F,v.props.children),_.return=T,T=_;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Kn&&dg(M)===F.type){n(T,F.sibling),_=i(F,v.props),_.ref=Ls(T,F,v),_.return=T,T=_;break e}n(T,F);break}else e(T,F);F=F.sibling}v.type===Ei?(_=Gr(v.props.children,T.mode,O,v.key),_.return=T,T=_):(O=al(v.type,v.key,v.props,null,T.mode,O),O.ref=Ls(T,_,v),O.return=T,T=O)}return o(T);case wi:e:{for(F=v.key;_!==null;){if(_.key===F)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(T,_.sibling),_=i(_,v.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Hc(v,T.mode,O),_.return=T,T=_}return o(T);case Kn:return F=v._init,C(T,_,F(v._payload),O)}if(js(v))return R(T,_,v,O);if(Ns(v))return P(T,_,v,O);ba(T,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,v),_.return=T,T=_):(n(T,_),_=qc(v,T.mode,O),_.return=T,T=_),o(T)):n(T,_)}return C}var qi=Ov(!0),Vv=Ov(!1),Dl=Sr(null),xl=null,Ci=null,Xd=null;function Zd(){Xd=Ci=xl=null}function ef(t){var e=Dl.current;pe(Dl),t._currentValue=e}function Fh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){xl=t,Xd=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(xl===null)throw Error(U(308));Ci=t,xl.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Br=null;function tf(t){Br===null?Br=[t]:Br.push(t)}function Lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tf(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,tf(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}function fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,I=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(I,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(I,p,m):R,m==null)break e;p=we({},p,m);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=I,u=p):f=f.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=p}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Wo={},en=Sr(Wo),Eo=Sr(Wo),To=Sr(Wo);function Wr(t){if(t===Wo)throw Error(U(174));return t}function rf(t,e){switch(ce(To,e),ce(Eo,t),ce(en,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}pe(en),ce(en,e)}function Hi(){pe(en),pe(Eo),pe(To)}function bv(t){Wr(To.current);var e=Wr(en.current),n=_h(e,t.type);e!==n&&(ce(Eo,t),ce(en,n))}function sf(t){Eo.current===t&&(pe(en),pe(Eo))}var ye=Sr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function of(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var nl=Ln.ReactCurrentDispatcher,jc=Ln.ReactCurrentBatchConfig,Xr=0,ve=null,xe=null,Me=null,Ll=!1,eo=!1,Io=0,W1=0;function Ye(){throw Error(U(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function lf(t,e,n,r,i,s){if(Xr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?G1:Q1,t=n(r,i),eo){s=0;do{if(eo=!1,Io=0,25<=s)throw Error(U(301));s+=1,Me=xe=null,e.updateQueue=null,nl.current=J1,t=n(r,i)}while(eo)}if(nl.current=Ml,e=xe!==null&&xe.next!==null,Xr=0,Me=xe=ve=null,Ll=!1,e)throw Error(U(300));return t}function uf(){var t=Io!==0;return Io=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=t:Me=Me.next=t,Me}function Vt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Me===null?ve.memoizedState:Me.next;if(e!==null)Me=e,xe=t;else{if(t===null)throw Error(U(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Me===null?ve.memoizedState=Me=t:Me=Me.next=t}return Me}function So(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Xr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,Zr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Vt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fv(){}function Uv(t,e){var n=ve,r=Vt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,cf($v.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ao(9,zv.bind(null,n,r,i,e),void 0,null),be===null)throw Error(U(349));Xr&30||jv(n,e,i)}return i}function jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zv(t,e,n,r){e.value=n,e.getSnapshot=r,Bv(e)&&Wv(t)}function $v(t,e,n){return n(function(){Bv(e)&&Wv(t)})}function Bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Wv(t){var e=kn(t,1);e!==null&&Bt(e,t,1,-1)}function mg(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,ve,t),[e.memoizedState,t]}function Ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qv(){return Vt().memoizedState}function rl(t,e,n,r){var i=Jt();ve.flags|=t,i.memoizedState=Ao(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&af(r,o.deps)){i.memoizedState=Ao(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Ao(1|e,n,s,r)}function gg(t,e){return rl(8390656,8,t,e)}function cf(t,e){return mu(2048,8,t,e)}function Hv(t,e){return mu(4,2,t,e)}function Kv(t,e){return mu(4,4,t,e)}function Gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,Gv.bind(null,e,t),n)}function hf(){}function Jv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return Xr&21?(Ht(n,e)||(n=rv(),ve.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function q1(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{oe=n,jc.transition=r}}function Zv(){return Vt().memoizedState}function H1(t,e,n){var r=hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Lv(t,e,n,r),n!==null){var i=ut();Bt(n,t,r,i),n0(n,e,r)}}function K1(t,e,n){var r=hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,tf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Lv(t,e,i,r),n!==null&&(i=ut(),Bt(n,t,r,i),n0(n,e,r))}}function e0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function t0(t,e){eo=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zd(t,n)}}var Ml={readContext:Ot,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},G1={readContext:Ot,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,Gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H1.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:hf,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=q1.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Jt();if(me){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),be===null)throw Error(U(349));Xr&30||jv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gg($v.bind(null,r,s,t),[t]),r.flags|=2048,Ao(9,zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=be.identifierPrefix;if(me){var n=_n,r=yn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q1={readContext:Ot,useCallback:Jv,useContext:Ot,useEffect:cf,useImperativeHandle:Qv,useInsertionEffect:Hv,useLayoutEffect:Kv,useMemo:Yv,useReducer:zc,useRef:qv,useState:function(){return zc(So)},useDebugValue:hf,useDeferredValue:function(t){var e=Vt();return Xv(e,xe.memoizedState,t)},useTransition:function(){var t=zc(So)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Uv,useId:Zv,unstable_isNewReconciler:!1},J1={readContext:Ot,useCallback:Jv,useContext:Ot,useEffect:cf,useImperativeHandle:Qv,useInsertionEffect:Hv,useLayoutEffect:Kv,useMemo:Yv,useReducer:$c,useRef:qv,useState:function(){return $c(So)},useDebugValue:hf,useDeferredValue:function(t){var e=Vt();return xe===null?e.memoizedState=t:Xv(e,xe.memoizedState,t)},useTransition:function(){var t=$c(So)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Fv,useSyncExternalStore:Uv,useId:Zv,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=hr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(Bt(e,t,i,r),tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=hr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,i),e!==null&&(Bt(e,t,i,r),tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=hr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ur(t,i,r),e!==null&&(Bt(e,t,r,n),tl(e,t,r))}};function yg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yo(n,r)||!yo(i,s):!0}function r0(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?Jr:rt.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?Jr:rt.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e){try{var n="",r=e;do n+=SI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Y1=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fl||(Fl=!0,Yh=r),zh(t,e)},n}function s0(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zh(t,e),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Y1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function wg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var X1=Ln.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?Vv(e,null,n,r):qi(e,t.child,n,r)}function Tg(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=lf(t,e,n,r,s,i),n=uf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&n&&Qd(e),e.flags|=1,lt(t,e,r,i),e.child)}function Ig(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,r,i)):(t=al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return $h(t,e,n,r,i)}function a0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Di,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Di,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Di,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Di,Et),Et|=r;return lt(t,e,i,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,i){var s=yt(n)?Jr:rt.current;return s=Bi(e,s),Mi(e,i),n=lf(t,e,n,r,s,i),r=uf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&r&&Qd(e),e.flags|=1,lt(t,e,n,i),e.child)}function Sg(t,e,n,r,i){if(yt(n)){var s=!0;Pl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)il(t,e),r0(e,n,r),jh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?Jr:rt.current,c=Bi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&_g(e,o,r,c),Gn=!1;var m=e.memoizedState;o.state=m,Ol(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||Gn?(typeof f=="function"&&(Uh(e,n,f,r),u=e.memoizedState),(l=Gn||yg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=yt(n)?Jr:rt.current,u=Bi(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&_g(e,o,r,u),Gn=!1,m=e.memoizedState,o.state=m,Ol(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||gt.current||Gn?(typeof I=="function"&&(Uh(e,n,I,r),R=e.memoizedState),(c=Gn||yg(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){l0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ug(e,n,!1),Pn(t,e,s);r=e.stateNode,X1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&ug(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),rf(t,e.containerInfo)}function Ag(t,e,n,r,i){return Wi(),Yd(i),e.flags|=256,lt(t,e,n,r),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qh(n),e.memoizedState=Wh,t):df(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Z1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=dr(l,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wh,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function df(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&Yd(r),qi(e,t.child,null,n),t=df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(U(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Wh,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Bc(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Bt(r,t,i,-1))}return _f(),r=Bc(Error(U(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=lr(i.nextSibling),St=e,me=!0,jt=null,t!==null&&(Ct[Nt++]=yn,Ct[Nt++]=_n,Ct[Nt++]=Yr,yn=t.id,_n=t.overflow,Yr=e),e=df(e,r.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fh(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:u0(e),Wi();break;case 5:bv(e);break;case 1:yt(e.type)&&Pl(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(ce(ye,ye.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return Pn(t,e,n)}var d0,Hh,f0,p0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};f0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(en.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=yh(t,i),r=yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}vh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};p0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tS(t,e,n){var r=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&kl(),Xe(e),null;case 3:return r=e.stateNode,Hi(),pe(gt),pe(rt),of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(ed(jt),jt=null))),Hh(t,e),Xe(e),null;case 5:sf(e);var i=Wr(To.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Xe(e),null}if(t=Wr(en.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)de($s[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Lm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":bm(r,s),de("invalid",r)}vh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",""+l]):uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ka(r),Mm(r,s,!0);break;case"textarea":ka(r),Fm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[wo]=r,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=wh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)de($s[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Lm(t,r),i=ph(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":bm(t,r),i=yh(t,r),de("invalid",t);break;default:i=r}vh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?q_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&co(t,u):typeof u=="number"&&co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Ld(t,s,u,o))}switch(n){case"input":ka(t),Mm(t,r,!1);break;case"textarea":ka(t),Fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Wr(To.current),Wr(en.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Xe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Tt!==null&&e.mode&1&&!(e.flags&128))xv(),Wi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Yt]=e}else Wi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else jt!==null&&(ed(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):_f())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Hi(),Hh(t,e),t===null&&_o(e.stateNode.containerInfo),Xe(e),null;case 10:return ef(e.type._context),Xe(e),null;case 17:return yt(e.type)&&kl(),Xe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Gi&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Xe(e),null}else 2*Re()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function nS(t,e){switch(Jd(e),e.tag){case 1:return yt(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),pe(gt),pe(rt),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Wi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Hi(),null;case 10:return ef(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Ua=!1,tt=!1,rS=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Kh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var kg=!1;function iS(t,e){if(Nh=Il,t=vv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dh={focusedElem:t,selectionRange:n},Il=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,C=R.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:Ft(e.type,P),C);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return R=kg,kg=!1,R}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[wo],delete e[Vh],delete e[j1],delete e[z1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function Pg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var je=null,Ut=!1;function Wn(t,e,n){for(n=n.child;n!==null;)y0(t,e,n),n=n.sibling}function y0(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:tt||Ni(n,e);case 6:var r=je,i=Ut;je=null,Wn(t,e,n),je=r,Ut=i,je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),mo(t)):bc(je,n.stateNode));break;case 4:r=je,i=Ut,je=n.stateNode.containerInfo,Ut=!0,Wn(t,e,n),je=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(n,e,o),i=i.next}while(i!==r)}Wn(t,e,n);break;case 1:if(!tt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Wn(t,e,n),tt=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(r){var i=fS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ut=!1;break e;case 3:je=l.stateNode.containerInfo,Ut=!0;break e;case 4:je=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(je===null)throw Error(U(160));y0(s,o,i),je=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Qt(t),r&4){try{to(3,t,t.return),yu(3,t)}catch(P){Ie(t,t.return,P)}try{to(5,t,t.return)}catch(P){Ie(t,t.return,P)}}break;case 1:bt(e,t),Qt(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(bt(e,t),Qt(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(P){Ie(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&j_(i,s),wh(l,o);var c=wh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?q_(i,p):f==="dangerouslySetInnerHTML"?B_(i,p):f==="children"?co(i,p):Ld(i,f,p,c)}switch(l){case"input":mh(i,s);break;case"textarea":z_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?xi(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(P){Ie(t,t.return,P)}}break;case 6:if(bt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ie(t,t.return,P)}}break;case 3:if(bt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(P){Ie(t,t.return,P)}break;case 4:bt(e,t),Qt(t);break;case 13:bt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mf=Re())),r&4&&Cg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||f,bt(e,t),tt=c):bt(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(p=B=f;B!==null;){switch(m=B,I=m.child,m.tag){case 0:case 11:case 14:case 15:to(4,m,m.return);break;case 1:Ni(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Ie(r,n,P)}}break;case 5:Ni(m,m.return);break;case 22:if(m.memoizedState!==null){Dg(p);continue}}I!==null?(I.return=m,B=I):Dg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=W_("display",o))}catch(P){Ie(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Ie(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Qt(t),r&4&&Cg(t);break;case 21:break;default:bt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=Pg(t);Jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Pg(t);Qh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sS(t,e,n){B=t,v0(t)}function v0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Ua;var c=tt;if(Ua=o,(tt=u)&&!c)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?xg(i):u!==null?(u.return=o,B=u):xg(i);for(;s!==null;)B=s,v0(s),s=s.sibling;B=i,Ua=l,tt=c}Ng(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Ng(t)}}function Ng(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&Gh(e)}catch(m){Ie(e,e.return,m)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Dg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function xg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Gh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Gh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var oS=Math.ceil,bl=Ln.ReactCurrentDispatcher,ff=Ln.ReactCurrentOwner,xt=Ln.ReactCurrentBatchConfig,re=0,be=null,Ne=null,Be=0,Et=0,Di=Sr(0),Oe=0,Ro=null,Zr=0,_u=0,pf=0,no=null,ft=null,mf=0,Gi=1/0,pn=null,Fl=!1,Yh=null,cr=null,ja=!1,nr=null,Ul=0,ro=0,Xh=null,sl=-1,ol=0;function ut(){return re&6?Re():sl!==-1?sl:sl=Re()}function hr(t){return t.mode&1?re&2&&Be!==0?Be&-Be:B1.transition!==null?(ol===0&&(ol=rv()),ol):(t=oe,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function Bt(t,e,n,r){if(50<ro)throw ro=0,Xh=null,Error(U(185));zo(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(_u|=n),Oe===4&&Jn(t,Be)),_t(t,r),n===1&&re===0&&!(e.mode&1)&&(Gi=Re()+500,pu&&Ar()))}function _t(t,e){var n=t.callbackNode;BI(t,e);var r=Tl(t,t===be?Be:0);if(r===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?$1(Og.bind(null,t)):Cv(Og.bind(null,t)),F1(function(){!(re&6)&&Ar()}),n=null;else{switch(iv(r)){case 1:n=jd;break;case 4:n=tv;break;case 16:n=El;break;case 536870912:n=nv;break;default:n=El}n=k0(n,w0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w0(t,e){if(sl=-1,ol=0,re&6)throw Error(U(327));var n=t.callbackNode;if(bi()&&t.callbackNode!==n)return null;var r=Tl(t,t===be?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=re;re|=2;var s=T0();(be!==t||Be!==e)&&(pn=null,Gi=Re()+500,Kr(t,e));do try{uS();break}catch(l){E0(t,l)}while(1);Zd(),bl.current=s,re=i,Ne!==null?e=0:(be=null,Be=0,e=Oe)}if(e!==0){if(e===2&&(i=Ah(t),i!==0&&(r=i,e=Zh(t,i))),e===1)throw n=Ro,Kr(t,0),Jn(t,r),_t(t,Re()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!aS(i)&&(e=jl(t,r),e===2&&(s=Ah(t),s!==0&&(r=s,e=Zh(t,s))),e===1))throw n=Ro,Kr(t,0),Jn(t,r),_t(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Fr(t,ft,pn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=mf+500-Re(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Oh(Fr.bind(null,t,ft,pn),e);break}Fr(t,ft,pn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oS(r/1960))-r,10<r){t.timeoutHandle=Oh(Fr.bind(null,t,ft,pn),r);break}Fr(t,ft,pn);break;case 5:Fr(t,ft,pn);break;default:throw Error(U(329))}}}return _t(t,Re()),t.callbackNode===n?w0.bind(null,t):null}function Zh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=ft,ft=n,e!==null&&ed(e)),t}function ed(t){ft===null?ft=t:ft.push.apply(ft,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~pf,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Og(t){if(re&6)throw Error(U(327));bi();var e=Tl(t,0);if(!(e&1))return _t(t,Re()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=Ah(t);r!==0&&(e=r,n=Zh(t,r))}if(n===1)throw n=Ro,Kr(t,0),Jn(t,e),_t(t,Re()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,ft,pn),_t(t,Re()),null}function gf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Gi=Re()+500,pu&&Ar())}}function ei(t){nr!==null&&nr.tag===0&&!(re&6)&&bi();var e=re;re|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,re=e,!(re&6)&&Ar()}}function yf(){Et=Di.current,pe(Di)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,b1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:Hi(),pe(gt),pe(rt),of();break;case 5:sf(r);break;case 4:Hi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:ef(r.type._context);break;case 22:case 23:yf()}n=n.return}if(be=t,Ne=t=dr(t.current,null),Be=Et=e,Oe=0,Ro=null,pf=_u=Zr=0,ft=no=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function E0(t,e){do{var n=Ne;try{if(Zd(),nl.current=Ml,Ll){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(Xr=0,Me=xe=ve=null,eo=!1,Io=0,ff.current=null,n===null||n.return===null){Oe=1,Ro=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=wg(o);if(I!==null){I.flags&=-257,Eg(I,o,l,s,e),I.mode&1&&vg(s,c,e),e=I,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){vg(s,c,e),_f();break e}u=Error(U(426))}}else if(me&&l.mode&1){var C=wg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Eg(C,o,l,s,e),Yd(Ki(u,l));break e}}s=u=Ki(u,l),Oe!==4&&(Oe=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=i0(s,u,e);fg(s,T);break e;case 1:l=u;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=s0(s,l,e);fg(s,O);break e}}s=s.return}while(s!==null)}S0(n)}catch(M){e=M,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function T0(){var t=bl.current;return bl.current=Ml,t===null?Ml:t}function _f(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),be===null||!(Zr&268435455)&&!(_u&268435455)||Jn(be,Be)}function jl(t,e){var n=re;re|=2;var r=T0();(be!==t||Be!==e)&&(pn=null,Kr(t,e));do try{lS();break}catch(i){E0(t,i)}while(1);if(Zd(),re=n,bl.current=r,Ne!==null)throw Error(U(261));return be=null,Be=0,Oe}function lS(){for(;Ne!==null;)I0(Ne)}function uS(){for(;Ne!==null&&!VI();)I0(Ne)}function I0(t){var e=R0(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?S0(t):Ne=e,ff.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ne=null;return}}else if(n=tS(n,e,Et),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Oe===0&&(Oe=5)}function Fr(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,cS(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function cS(t,e,n,r){do bi();while(nr!==null);if(re&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WI(t,s),t===be&&(Ne=be=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,k0(El,function(){return bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var l=re;re|=4,ff.current=null,iS(t,n),_0(n,t),N1(Dh),Il=!!Nh,Dh=Nh=null,t.current=n,sS(n),LI(),re=l,oe=o,xt.transition=s}else t.current=n;if(ja&&(ja=!1,nr=t,Ul=i),s=t.pendingLanes,s===0&&(cr=null),FI(n.stateNode),_t(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,t=Yh,Yh=null,t;return Ul&1&&t.tag!==0&&bi(),s=t.pendingLanes,s&1?t===Xh?ro++:(ro=0,Xh=t):ro=0,Ar(),null}function bi(){if(nr!==null){var t=iv(Ul),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Ul=0,re&6)throw Error(U(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(B=c;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:to(8,f,s)}var p=f.child;if(p!==null)p.return=f,B=p;else for(;B!==null;){f=B;var m=f.sibling,I=f.return;if(m0(f),f===c){B=null;break}if(m!==null){m.return=I,B=m;break}B=I}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){o=B;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,B=v;else e:for(o=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(M){Ie(l,l.return,M)}if(l===o){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(re=i,Ar(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function Vg(t,e,n){e=Ki(n,e),e=i0(t,e,1),t=ur(t,e,1),e=ut(),t!==null&&(zo(t,1,e),_t(t,e))}function Ie(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){t=Ki(n,t),t=s0(e,t,1),e=ur(e,t,1),t=ut(),e!==null&&(zo(e,1,t),_t(e,t));break}}e=e.return}}function hS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Be&n)===n&&(Oe===4||Oe===3&&(Be&130023424)===Be&&500>Re()-mf?Kr(t,0):pf|=n),_t(t,e)}function A0(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=ut();t=kn(t,e),t!==null&&(zo(t,e,n),_t(t,n))}function dS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),A0(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),A0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,eS(t,e,n);mt=!!(t.flags&131072)}else mt=!1,me&&e.flags&1048576&&Nv(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(t,e),t=e.pendingProps;var i=Bi(e,rt.current);Mi(e,n),i=lf(null,e,r,t,i,n);var s=uf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nf(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,jh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Qd(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mS(r),t=Ft(r,t),i){case 0:e=$h(null,e,r,t,n);break e;case 1:e=Sg(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=Ig(null,e,r,Ft(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),$h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Sg(t,e,r,i,n);case 3:e:{if(u0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mv(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(U(423)),e),e=Ag(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(U(424)),e),e=Ag(t,e,r,n,i);break e}else for(Tt=lr(e.stateNode.containerInfo.firstChild),St=e,me=!0,jt=null,n=Vv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===i){e=Pn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return bv(e),t===null&&bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xh(r,i)?o=null:s!==null&&xh(r,s)&&(e.flags|=32),l0(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&bh(e),null;case 13:return c0(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Tg(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Dl,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!gt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Fh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Ot(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),Ig(t,e,r,i,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),il(t,e),e.tag=1,yt(r)?(t=!0,Pl(e)):t=!1,Mi(e,n),r0(e,r,i),jh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return h0(t,e,n);case 22:return a0(t,e,n)}throw Error(U(156,e.tag))};function k0(t,e){return ev(t,e)}function pS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new pS(t,e,n,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Fd)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Gr(n.children,i,s,e);case Md:o=8,i|=8;break;case ch:return t=Dt(12,n,e,i|2),t.elementType=ch,t.lanes=s,t;case hh:return t=Dt(13,n,e,i),t.elementType=hh,t.lanes=s,t;case dh:return t=Dt(19,n,e,i),t.elementType=dh,t.lanes=s,t;case b_:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L_:o=10;break e;case M_:o=9;break e;case bd:o=11;break e;case Fd:o=14;break e;case Kn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=b_,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wf(t,e,n,r,i,s,o,l,u){return t=new gS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function yS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return vr;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(yt(n))return Pv(t,n,e)}return e}function C0(t,e,n,r,i,s,o,l,u){return t=wf(n,r,!0,t,i,s,o,l,u),t.context=P0(null),n=t.current,r=ut(),i=hr(n),s=Tn(r,i),s.callback=e??null,ur(n,s,i),t.current.lanes=i,zo(t,i,r),_t(t,r),t}function wu(t,e,n,r){var i=e.current,s=ut(),o=hr(i);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ur(i,e,o),t!==null&&(Bt(t,i,o,s),tl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function _S(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tf(t){this._internalRoot=t}Eu.prototype.render=Tf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));wu(t,e,null,null)};Eu.prototype.unmount=Tf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){wu(null,t,null,null)}),e[Rn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&uv(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function vS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=zl(o);s.call(c)}}var o=C0(e,r,t,0,null,!1,!1,"",Mg);return t._reactRootContainer=o,t[Rn]=o.current,_o(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=zl(u);l.call(c)}}var u=wf(t,0,!1,null,null,!1,!1,"",Mg);return t._reactRootContainer=u,t[Rn]=u.current,_o(t.nodeType===8?t.parentNode:t),ei(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}wu(e,o,t,i)}else o=vS(n,e,t,i,r);return zl(o)}sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(zd(e,n|1),_t(e,Re()),!(re&6)&&(Gi=Re()+500,Ar()))}break;case 13:ei(function(){var r=kn(t,1);if(r!==null){var i=ut();Bt(r,t,1,i)}}),Ef(t,1)}};$d=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ut();Bt(e,t,134217728,n)}Ef(t,134217728)}};ov=function(t){if(t.tag===13){var e=hr(t),n=kn(t,e);if(n!==null){var r=ut();Bt(n,t,e,r)}Ef(t,e)}};av=function(){return oe};lv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Th=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(U(90));U_(r),mh(r,i)}}}break;case"textarea":z_(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};G_=gf;Q_=ei;var wS={usingClientEntryPoint:!1,Events:[Bo,Ai,fu,H_,K_,gf]},bs={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X_(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{uu=za.inject(ES),Zt=za}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(U(200));return yS(t,e,null,n)};Rt.createRoot=function(t,e){if(!If(t))throw Error(U(299));var n=!1,r="",i=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wf(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,_o(t.nodeType===8?t.parentNode:t),new Tf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=X_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ei(t)};Rt.hydrate=function(t,e,n){if(!Tu(e))throw Error(U(200));return Iu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!If(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=N0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C0(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};Rt.render=function(t,e,n){if(!Tu(e))throw Error(U(200));return Iu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(U(40));return t._reactRootContainer?(ei(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Rt.unstable_batchedUpdates=gf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Iu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),D_.exports=Rt;var TS=D_.exports,bg=TS;lh.createRoot=bg.createRoot,lh.hydrateRoot=bg.hydrateRoot;const IS="modulepreload",SS=function(t){return"/"+t},Fg={},vt=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=SS(s),s in Fg)return;Fg[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===s&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":IS,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((f,p)=>{c.addEventListener("load",f),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(null,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const Ug="popstate";function AS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return td("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$l(i)}return kS(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RS(){return Math.random().toString(36).substr(2,8)}function jg(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||r||RS()})}function $l(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=rr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(ko({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=rr.Pop;let C=f(),T=C==null?null:C-c;c=C,u&&u({action:l,location:P.location,delta:T})}function m(C,T){l=rr.Push;let _=td(P.location,C,T);n&&n(_,C),c=f()+1;let v=jg(_,c),O=P.createHref(_);try{o.pushState(v,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function I(C,T){l=rr.Replace;let _=td(P.location,C,T);n&&n(_,C),c=f();let v=jg(_,c),O=P.createHref(_);o.replaceState(v,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function R(C){let T=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:$l(C);return _=_.replace(/ $/,"%20"),ke(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let P={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ug,p),u=C,()=>{i.removeEventListener(Ug,p),u=null}},createHref(C){return e(i,C)},createURL:R,encodeLocation(C){let T=R(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:I,go(C){return o.go(C)}};return P}var zg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zg||(zg={}));function PS(t,e,n){return n===void 0&&(n="/"),CS(t,e,n,!1)}function CS(t,e,n,r){let i=typeof e=="string"?os(e):e,s=Af(i.pathname||"/",n);if(s==null)return null;let o=x0(t);NS(o);let l=null,u=zS(s);for(let c=0;l==null&&c<o.length;++c)l=US(o[c],u,r);return l}function x0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=fr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),x0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of O0(s.path))i(s,o,u)}),e}function O0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=O0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function NS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DS=/^:[\w-]+$/,xS=3,OS=2,VS=1,LS=10,MS=-2,$g=t=>t==="*";function bS(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=MS),e&&(r+=OS),n.filter(i=>!$g(i)).reduce((i,s)=>i+(DS.test(s)?xS:s===""?VS:LS),r)}function FS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function US(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Bg({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Bg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:fr([s,p.pathname]),pathnameBase:HS(fr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=fr([s,p.pathnameBase]))}return o}function Bg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:I}=f;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return I&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Af(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const $S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BS=t=>$S.test(t);function WS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?os(t):t,s;if(n)if(BS(n))s=n;else{if(n.includes("//")){let o=n;n=V0(n),Sf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Wg(n.substring(1),"/"):s=Wg(n,e)}else s=e;return{pathname:s,search:KS(r),hash:GS(i)}}function Wg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rf(t,e){let n=qS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=os(t):(i=ko({},t),ke(!i.pathname||!i.pathname.includes("?"),Kc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Kc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=WS(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const V0=t=>t.replace(/\/\/+/g,"/"),fr=t=>V0(t.join("/")),HS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const L0=["post","put","patch","delete"];new Set(L0);const JS=["get",...L0];new Set(JS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(null,arguments)}const Pf=N.createContext(null),YS=N.createContext(null),Rr=N.createContext(null),Su=N.createContext(null),Mn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),M0=N.createContext(null);function XS(t,e){let{relative:n}=e===void 0?{}:e;as()||ke(!1);let{basename:r,navigator:i}=N.useContext(Rr),{hash:s,pathname:o,search:l}=U0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:fr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function as(){return N.useContext(Su)!=null}function ls(){return as()||ke(!1),N.useContext(Su).location}function b0(t){N.useContext(Rr).static||N.useLayoutEffect(t)}function F0(){let{isDataRoute:t}=N.useContext(Mn);return t?fA():ZS()}function ZS(){as()||ke(!1);let t=N.useContext(Pf),{basename:e,future:n,navigator:r}=N.useContext(Rr),{matches:i}=N.useContext(Mn),{pathname:s}=ls(),o=JSON.stringify(Rf(i,n.v7_relativeSplatPath)),l=N.useRef(!1);return b0(()=>{l.current=!0}),N.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=kf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:fr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}const eA=N.createContext(null);function tA(t){let e=N.useContext(Mn).outlet;return e&&N.createElement(eA.Provider,{value:t},e)}function U0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Rr),{matches:i}=N.useContext(Mn),{pathname:s}=ls(),o=JSON.stringify(Rf(i,r.v7_relativeSplatPath));return N.useMemo(()=>kf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nA(t,e){return rA(t,e)}function rA(t,e,n,r){as()||ke(!1);let{navigator:i}=N.useContext(Rr),{matches:s}=N.useContext(Mn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ls(),f;if(e){var p;let C=typeof e=="string"?os(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||ke(!1),f=C}else f=c;let m=f.pathname||"/",I=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let R=PS(t,{pathname:I}),P=lA(R&&R.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:fr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:fr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?N.createElement(Su.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:rr.Pop}},P):P}function iA(){let t=dA(),e=QS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,s)}const sA=N.createElement(iA,null);class oA extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Mn.Provider,{value:this.props.routeContext},N.createElement(M0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aA(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Pf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Mn.Provider,{value:e},r)}function lA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:I}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let I,R=!1,P=null,C=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||sA,u&&(c<0&&m===0?(pA("route-fallback",!1),R=!0,C=null):c===m&&(R=!0,C=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),_=()=>{let v;return I?v=P:R?v=C:p.route.Component?v=N.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=f,N.createElement(aA,{match:p,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?N.createElement(oA,{location:n.location,revalidation:n.revalidation,component:P,error:I,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var j0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(j0||{}),Bl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bl||{});function uA(t){let e=N.useContext(Pf);return e||ke(!1),e}function cA(t){let e=N.useContext(YS);return e||ke(!1),e}function hA(t){let e=N.useContext(Mn);return e||ke(!1),e}function z0(t){let e=hA(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function dA(){var t;let e=N.useContext(M0),n=cA(Bl.UseRouteError),r=z0(Bl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fA(){let{router:t}=uA(j0.UseNavigateStable),e=z0(Bl.UseNavigateStable),n=N.useRef(!1);return b0(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Po({fromRouteId:e},s)))},[t,e])}const qg={};function pA(t,e,n){!e&&!qg[t]&&(qg[t]=!0)}function mA(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Hg(t){let{to:e,replace:n,state:r,relative:i}=t;as()||ke(!1);let{future:s,static:o}=N.useContext(Rr),{matches:l}=N.useContext(Mn),{pathname:u}=ls(),c=F0(),f=kf(e,Rf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return N.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function u2(t){return tA(t.context)}function at(t){ke(!1)}function gA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:o=!1,future:l}=t;as()&&ke(!1);let u=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:s,static:o,future:Po({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=os(r));let{pathname:f="/",search:p="",hash:m="",state:I=null,key:R="default"}=r,P=N.useMemo(()=>{let C=Af(f,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:I,key:R},navigationType:i}},[u,f,p,m,I,R,i]);return P==null?null:N.createElement(Rr.Provider,{value:c},N.createElement(Su.Provider,{children:n,value:P}))}function yA(t){let{children:e,location:n}=t;return nA(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,nd(r.props.children,s));return}r.type!==at&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rd(){return rd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rd.apply(null,arguments)}function _A(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function vA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wA(t,e){return t.button===0&&(!e||e==="_self")&&!vA(t)}const EA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TA="6";try{window.__reactRouterVersion=TA}catch{}const IA="startTransition",Kg=hI[IA];function SA(t){let{basename:e,children:n,future:r,window:i}=t,s=N.useRef();s.current==null&&(s.current=AS({window:i,v5Compat:!0}));let o=s.current,[l,u]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=N.useCallback(p=>{c&&Kg?Kg(()=>u(p)):u(p)},[u,c]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.useEffect(()=>mA(r),[r]),N.createElement(gA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const AA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,c2=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=_A(e,EA),{basename:I}=N.useContext(Rr),R,P=!1;if(typeof c=="string"&&RA.test(c)&&(R=c,AA))try{let v=new URL(window.location.href),O=c.startsWith("//")?new URL(v.protocol+c):new URL(c),M=Af(O.pathname,I);O.origin===v.origin&&M!=null?c=M+O.search+O.hash:P=!0}catch{}let C=XS(c,{relative:i}),T=kA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(v){r&&r(v),v.defaultPrevented||T(v)}return N.createElement("a",rd({},m,{href:R||C,onClick:P||s?r:_,ref:n,target:u}))});var Gg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gg||(Gg={}));var Qg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qg||(Qg={}));function kA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=F0(),c=ls(),f=U0(t,{relative:o});return N.useCallback(p=>{if(wA(p,n)){p.preventDefault();let m=r!==void 0?r:$l(c)===$l(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}let PA={data:""},CA=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||PA},NA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,DA=/\/\*[^]*?\*\/|  +/g,Jg=/\n+/g,Yn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Yn(o,s):s+"{"+Yn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Yn(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=s[1]=="-"?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Yn.p?Yn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},qn={},$0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+$0(t[n]);return e}return t},xA=(t,e,n,r,i)=>{let s=$0(t),o=qn[s]||(qn[s]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(s));if(!qn[o]){let u=s!==t?t:(c=>{let f,p,m=[{}];for(;f=NA.exec(c.replace(DA,""));)f[4]?m.shift():f[3]?(p=f[3].replace(Jg," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][f[1]]=f[2].replace(Jg," ").trim();return m[0]})(t);qn[o]=Yn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&qn.g;return n&&(qn.g=qn[o]),((u,c,f,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(qn[o],e,r,l),o},OA=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Yn(l,""):l===!1?"":l}return r+i+(o??"")},"");function Au(t){let e=this||{},n=t.call?t(e.p):t;return xA(n.unshift?n.raw?OA(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,CA(e.target),e.g,e.o,e.k)}let B0,id,sd;Au.bind({g:1});let Cn=Au.bind({k:1});function VA(t,e,n,r){Yn.p=e,B0=t,id=n,sd=r}function kr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:id&&id()},l),n.o=/go\d/.test(u),l.className=Au.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),sd&&c[0]&&sd(l),B0(c,l)}return e?e(i):i}}var LA=t=>typeof t=="function",Wl=(t,e)=>LA(t)?t(e):t,MA=(()=>{let t=0;return()=>(++t).toString()})(),W0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),bA=20,Cf="default",q0=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return q0(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ll=[],H0={toasts:[],pausedAt:void 0,settings:{toastLimit:bA}},Xt={},K0=(t,e=Cf)=>{Xt[e]=q0(Xt[e]||H0,t),ll.forEach(([n,r])=>{n===e&&r(Xt[e])})},G0=t=>Object.keys(Xt).forEach(e=>K0(t,e)),FA=t=>Object.keys(Xt).find(e=>Xt[e].toasts.some(n=>n.id===t)),Ru=(t=Cf)=>e=>{K0(e,t)},UA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},jA=(t={},e=Cf)=>{let[n,r]=N.useState(Xt[e]||H0),i=N.useRef(Xt[e]);N.useEffect(()=>(i.current!==Xt[e]&&r(Xt[e]),ll.push([e,r]),()=>{let o=ll.findIndex(([l])=>l===e);o>-1&&ll.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||UA[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},zA=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||MA()}),qo=t=>(e,n)=>{let r=zA(e,t,n);return Ru(r.toasterId||FA(r.id))({type:2,toast:r}),r.id},Ce=(t,e)=>qo("blank")(t,e);Ce.error=qo("error");Ce.success=qo("success");Ce.loading=qo("loading");Ce.custom=qo("custom");Ce.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Ru(e)(n):G0(n)};Ce.dismissAll=t=>Ce.dismiss(void 0,t);Ce.remove=(t,e)=>{let n={type:4,toastId:t};e?Ru(e)(n):G0(n)};Ce.removeAll=t=>Ce.remove(void 0,t);Ce.promise=(t,e,n)=>{let r=Ce.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Wl(e.success,i):void 0;return s?Ce.success(s,{id:r,...n,...n==null?void 0:n.success}):Ce.dismiss(r),i}).catch(i=>{let s=e.error?Wl(e.error,i):void 0;s?Ce.error(s,{id:r,...n,...n==null?void 0:n.error}):Ce.dismiss(r)}),t};var $A=1e3,BA=(t,e="default")=>{let{toasts:n,pausedAt:r}=jA(t,e),i=N.useRef(new Map).current,s=N.useCallback((p,m=$A)=>{if(i.has(p))return;let I=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},m);i.set(p,I)},[]);N.useEffect(()=>{if(r)return;let p=Date.now(),m=n.map(I=>{if(I.duration===1/0)return;let R=(I.duration||0)+I.pauseDuration-(p-I.createdAt);if(R<0){I.visible&&Ce.dismiss(I.id);return}return setTimeout(()=>Ce.dismiss(I.id,e),R)});return()=>{m.forEach(I=>I&&clearTimeout(I))}},[n,r,e]);let o=N.useCallback(Ru(e),[e]),l=N.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=N.useCallback((p,m)=>{o({type:1,toast:{id:p,height:m}})},[o]),c=N.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),f=N.useCallback((p,m)=>{let{reverseOrder:I=!1,gutter:R=8,defaultPosition:P}=m||{},C=n.filter(v=>(v.position||P)===(p.position||P)&&v.height),T=C.findIndex(v=>v.id===p.id),_=C.filter((v,O)=>O<T&&v.visible).length;return C.filter(v=>v.visible).slice(...I?[_+1]:[0,_]).reduce((v,O)=>v+(O.height||0)+R,0)},[n]);return N.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let m=i.get(p.id);m&&(clearTimeout(m),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:f}}},WA=Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qA=Cn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,HA=Cn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,KA=kr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${WA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qA} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${HA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,GA=Cn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,QA=kr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${GA} 1s linear infinite;
`,JA=Cn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,YA=Cn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,XA=kr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${JA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${YA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ZA=kr("div")`
  position: absolute;
`,eR=kr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tR=Cn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nR=kr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rR=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?N.createElement(nR,null,e):e:n==="blank"?null:N.createElement(eR,null,N.createElement(QA,{...r}),n!=="loading"&&N.createElement(ZA,null,n==="error"?N.createElement(KA,{...r}):N.createElement(XA,{...r})))},iR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,sR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,oR="0%{opacity:0;} 100%{opacity:1;}",aR="0%{opacity:1;} 100%{opacity:0;}",lR=kr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,uR=kr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,cR=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=W0()?[oR,aR]:[iR(n),sR(n)];return{animation:e?`${Cn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Cn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},hR=N.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?cR(t.position||e||"top-center",t.visible):{opacity:0},s=N.createElement(rR,{toast:t}),o=N.createElement(uR,{...t.ariaProps},Wl(t.message,t));return N.createElement(lR,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):N.createElement(N.Fragment,null,s,o))});VA(N.createElement);var dR=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=N.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return N.createElement("div",{ref:s,className:e,style:n},i)},fR=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:W0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},pR=Au`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$a=16,mR=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=BA(n,s);return N.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:$a,left:$a,right:$a,bottom:$a,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(f=>{let p=f.position||e,m=c.calculateOffset(f,{reverseOrder:t,gutter:r,defaultPosition:e}),I=fR(p,m);return N.createElement(dR,{id:f.id,key:f.id,onHeightUpdate:c.updateHeight,className:f.visible?pR:"",style:I},f.type==="custom"?Wl(f.message,f):i?i(f):N.createElement(hR,{toast:f,position:p}))}))},h2=Ce;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},J0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[f],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new yR;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _R=function(t){const e=Q0(t);return J0.encodeByteArray(e,!0)},ql=function(t){return _R(t).replace(/\./g,"")},Y0=function(t){try{return J0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=()=>vR().__FIREBASE_DEFAULTS__,ER=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y0(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return wR()||ER()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},X0=t=>{var e,n;return(n=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IR=t=>{const e=X0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Z0=()=>{var t;return(t=ku())===null||t===void 0?void 0:t.config},ew=t=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ql(JSON.stringify(n)),ql(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function kR(){var t;const e=(t=ku())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DR(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xR(){return!kR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OR(){try{return typeof indexedDB=="object"}catch{return!1}}function VR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new bn(i,l,r)}}function MR(t,e){return t.replace(bR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yg(s)&&Yg(o)){if(!Hl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UR(t,e){const n=new jR(t,e);return n.subscribe.bind(n)}class jR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gc),i.error===void 0&&(i.error=Gc),i.complete===void 0&&(i.complete=Gc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WR(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(t){return t===Ur?void 0:t}function WR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $R(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const HR={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},KR=te.INFO,GR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},QR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=KR,this._logHandler=QR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const JR=(t,e)=>e.some(n=>t instanceof n);let Xg,Zg;function YR(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XR(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,od=new WeakMap,nw=new WeakMap,Qc=new WeakMap,Df=new WeakMap;function ZR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function ek(t){if(od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});od.set(t,e)}let ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tk(t){ad=t(ad)}function nk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),pr(r)}:XR().includes(t)?function(...e){return t.apply(Jc(this),e),pr(tw.get(this))}:function(...e){return pr(t.apply(Jc(this),e))}}function rk(t){return typeof t=="function"?nk(t):(t instanceof IDBTransaction&&ek(t),JR(t,YR())?new Proxy(t,ad):t)}function pr(t){if(t instanceof IDBRequest)return ZR(t);if(Qc.has(t))return Qc.get(t);const e=rk(t);return e!==t&&(Qc.set(t,e),Df.set(e,t)),e}const Jc=t=>Df.get(t);function ik(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const sk=["get","getKey","getAll","getAllKeys","count"],ok=["put","add","delete","clear"],Yc=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ok.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Yc.set(e,s),s}tk(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",ty="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Nf("@firebase/app"),uk="@firebase/app-compat",ck="@firebase/analytics-compat",hk="@firebase/analytics",dk="@firebase/app-check-compat",fk="@firebase/app-check",pk="@firebase/auth",mk="@firebase/auth-compat",gk="@firebase/database",yk="@firebase/data-connect",_k="@firebase/database-compat",vk="@firebase/functions",wk="@firebase/functions-compat",Ek="@firebase/installations",Tk="@firebase/installations-compat",Ik="@firebase/messaging",Sk="@firebase/messaging-compat",Ak="@firebase/performance",Rk="@firebase/performance-compat",kk="@firebase/remote-config",Pk="@firebase/remote-config-compat",Ck="@firebase/storage",Nk="@firebase/storage-compat",Dk="@firebase/firestore",xk="@firebase/vertexai-preview",Ok="@firebase/firestore-compat",Vk="firebase",Lk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="[DEFAULT]",Mk={[ld]:"fire-core",[uk]:"fire-core-compat",[hk]:"fire-analytics",[ck]:"fire-analytics-compat",[fk]:"fire-app-check",[dk]:"fire-app-check-compat",[pk]:"fire-auth",[mk]:"fire-auth-compat",[gk]:"fire-rtdb",[yk]:"fire-data-connect",[_k]:"fire-rtdb-compat",[vk]:"fire-fn",[wk]:"fire-fn-compat",[Ek]:"fire-iid",[Tk]:"fire-iid-compat",[Ik]:"fire-fcm",[Sk]:"fire-fcm-compat",[Ak]:"fire-perf",[Rk]:"fire-perf-compat",[kk]:"fire-rc",[Pk]:"fire-rc-compat",[Ck]:"fire-gcs",[Nk]:"fire-gcs-compat",[Dk]:"fire-fst",[Ok]:"fire-fst-compat",[xk]:"fire-vertex","fire-js":"fire-js",[Vk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map,bk=new Map,cd=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qi(t){const e=t.name;if(cd.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,t);for(const n of Kl.values())ny(n,t);for(const n of bk.values())ny(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Ho("app","Firebase",Fk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=Lk;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ud,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=Z0()),!n)throw mr.create("no-options");const s=Kl.get(i);if(s){if(Hl(n,s.options)&&Hl(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new qR(i);for(const u of cd.values())o.addComponent(u);const l=new Uk(n,r,o);return Kl.set(i,l),l}function iw(t=ud){const e=Kl.get(t);if(!e&&t===ud&&Z0())return rw();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=Mk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}Qi(new ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk="firebase-heartbeat-database",zk=1,Co="firebase-heartbeat-store";let Xc=null;function sw(){return Xc||(Xc=ik(jk,zk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function $k(t){try{const n=(await sw()).transaction(Co),r=await n.objectStore(Co).get(ow(t));return await n.done,r}catch(e){if(e instanceof bn)Nn.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function ry(t,e){try{const r=(await sw()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,ow(t)),await r.done}catch(n){if(n instanceof bn)Nn.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=1024,Wk=30*24*60*60*1e3;class qk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Wk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:i}=Hk(this._heartbeatsCache.heartbeats),s=ql(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function Hk(t,e=Bk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OR()?VR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $k(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(t){return ql(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){Qi(new ti("platform-logger",e=>new ak(e),"PRIVATE")),Qi(new ti("heartbeat",e=>new qk(e),"PRIVATE")),gr(ld,ty,t),gr(ld,ty,"esm2017"),gr("fire-js","")}Gk("");function Of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qk=aw,lw=new Ho("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Nf("@firebase/auth");function Jk(t,...e){Gl.logLevel<=te.WARN&&Gl.warn(`Auth (${us}): ${t}`,...e)}function ul(t,...e){Gl.logLevel<=te.ERROR&&Gl.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Lf(t,...e)}function Wt(t,...e){return Lf(t,...e)}function Vf(t,e,n){const r=Object.assign(Object.assign({},Qk()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return Vf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),Vf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lw.create(t,...e)}function K(t,e,...n){if(!t)throw Lf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Dn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xk(){return oy()==="http:"||oy()==="https:"}function oy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xk()||CR()||"connection"in navigator)?navigator.onLine:!0}function eP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=RR()||NR()}get(){return Zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new Go(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Un(t,e,n,r,i={}){return cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return PR()||(c.referrerPolicy="no-referrer"),uw.fetch()(hw(t,t.config.apiHost,n,l),c)})}async function cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tP),e);try{const i=new iP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vf(t,f,c);Lt(t,f)}}catch(i){if(i instanceof bn)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function Qo(t,e,n,r,i={}){const s=await Un(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`}function rP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),nP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wt(t,e,r);return i.customData._tokenResponse=n,i}function ay(t){return t!==void 0&&t.enterprise!==void 0}class sP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function oP(t,e){return Un(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function dw(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lP(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=bf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(Zc(i.auth_time)),issuedAtTime:io(Zc(i.iat)),expirationTime:io(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function bf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y0(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ly(t){const e=bf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&uP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await No(t,dw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fw(s.providerUserInfo):[],l=dP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new dd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function hP(t){const e=Fe(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fw(t){return t.map(e=>{var{providerId:n}=e,r=Of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e){const n=await cw(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pP(t,e){return Un(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=ly(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await No(this,aP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:O,isAnonymous:M,providerData:F,stsTokenManager:w}=n;K(v&&w,e,"internal-error");const y=Fi.fromJSON(this.name,w);K(typeof v=="string",e,"internal-error"),Hn(p,e.name),Hn(m,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof M=="boolean",e,"internal-error"),Hn(I,e.name),Hn(R,e.name),Hn(P,e.name),Hn(C,e.name),Hn(T,e.name),Hn(_,e.name);const E=new wn({uid:v,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:M,photoURL:R,phoneNumber:I,tenantId:P,stsTokenManager:y,createdAt:T,lastLoginAt:_});return F&&Array.isArray(F)&&(E.providerData=F.map(S=>Object.assign({},S))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fi;i.updateFromServerResponse(n);const s=new wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fi;l.updateFromIdToken(r);const u=new wn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function En(t){Dn(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pw.type="NONE";const cy=pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(En(cy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||En(cy);const o=cl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=wn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ui(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_w(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Ew(e))return"Webos";if(gw(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(vw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mw(t=it()){return/firefox\//i.test(t)}function gw(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(t=it()){return/crios\//i.test(t)}function _w(t=it()){return/iemobile/i.test(t)}function vw(t=it()){return/android/i.test(t)}function ww(t=it()){return/blackberry/i.test(t)}function Ew(t=it()){return/webos/i.test(t)}function Ff(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mP(t=it()){var e;return Ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gP(){return DR()&&document.documentMode===10}function Tw(t=it()){return Ff(t)||vw(t)||Ew(t)||ww(t)||/windows phone/i.test(t)||_w(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=hy(it());break;case"Worker":n=`${hy(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e={}){return Un(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=6;class wP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new yP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dw(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(In(this));const n=e?Fe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _P(this),n=new wP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jn(t){return Fe(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TP(t){Pu=t}function Sw(t){return Pu.loadJS(t)}function IP(){return Pu.recaptchaEnterpriseScript}function SP(){return Pu.gapiScript}function AP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RP="recaptcha-enterprise",kP="NO_RECAPTCHA";class PP{constructor(e){this.type=RP,this.auth=jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{oP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new sP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ay(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(kP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ay(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=IP();u.length!==0&&(u+=l),Sw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function fy(t,e,n,r=!1){const i=new PP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Jl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){const n=xf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hl(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function NP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DP(t,e,n){const r=jn(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Aw(e),{host:o,port:l}=xP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||OP()}function Aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xP(t){const e=Aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:py(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:py(o)}}}function py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function VP(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}async function MP(t,e){return Un(t,"POST","/v1/accounts:sendOobCode",Fn(t,e))}async function bP(t,e){return MP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function UP(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Uf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Do(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Do(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,n,"signInWithPassword",LP);case"emailLink":return FP(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,r,"signUpPassword",VP);case"emailLink":return UP(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="http://localhost";class ni extends Uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Of(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:jP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $P(t){const e=Bs(Ws(t)).link,n=e?Bs(Ws(e)).deep_link_id:null,r=Bs(Ws(t)).deep_link_id;return(r?Bs(Ws(r)).link:null)||r||n||e||t}class jf{constructor(e){var n,r,i,s,o,l;const u=Bs(Ws(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=zP((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=$P(e);try{return new jf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return Do._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jf.parseLink(n);return K(r,"argument-error"),Do._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends zf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Jo{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Jo{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Jo{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,e){return Qo(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wn._fromIdTokenResponse(e,r,i),o=my(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=my(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function my(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yl(e,n,r,i)}}function Rw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,s,e,r):s})}async function WP(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await No(t,Rw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=bf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,e,n=!1){if(zt(t.app))return Promise.reject(In(t));const r="signIn",i=await Rw(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HP(t,e){return kw(jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t,e,n){var r;K(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t){const e=jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GP(t,e,n){const r=jn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&KP(r,i,n),await Jl(r,i,"getOobCode",bP)}async function QP(t,e,n){if(zt(t.app))return Promise.reject(In(t));const r=jn(t),o=await Jl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Pw(t),u}),l=await ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function JP(t,e,n){return zt(t.app)?Promise.reject(In(t)):HP(Fe(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pw(t),r})}function YP(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function XP(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function ZP(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function eC(t){return Fe(t).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=1e3,nC=10;class Nw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const rC=Nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const xw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Cu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await iC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$f("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function oC(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function aC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uC(){return Ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebaseLocalStorageDb",cC=1,Zl="firebaseLocalStorage",Lw="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function hC(){const t=indexedDB.deleteDatabase(Vw);return new Yo(t).toPromise()}function fd(){const t=indexedDB.open(Vw,cC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:Lw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await hC(),e(await fd()))})})}async function gy(t,e,n){const r=Nu(t,!0).put({[Lw]:e,value:n});return new Yo(r).toPromise()}async function dC(t,e){const n=Nu(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function yy(t,e){const n=Nu(t,!0).delete(e);return new Yo(n).toPromise()}const fC=800,pC=3;class Mw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(uC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aC(),!this.activeServiceWorker)return;this.sender=new sC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await gy(e,Xl,"1"),await yy(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new Yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mw.type="LOCAL";const mC=Mw;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t,e){return e?En(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gC(t){return kw(t.auth,new Bf(t),t.bypassAuthState)}function yC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qP(n,new Bf(t),t.bypassAuthState)}async function _C(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),WP(n,new Bf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gC;case"linkViaPopup":case"linkViaRedirect":return _C;case"reauthViaPopup":case"reauthViaRedirect":return yC;default:Lt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new Go(2e3,1e4);async function wC(t,e,n){if(zt(t.app))return Promise.reject(Wt(t,"operation-not-supported-in-this-environment"));const r=jn(t);Yk(t,e,zf);const i=bw(r,n);return new qr(r,"signInViaPopup",e,i).executeNotNull()}class qr extends Fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vC.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC="pendingRedirect",hl=new Map;class TC extends Fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hl.get(this.auth._key());if(!e){try{const r=await IC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hl.set(this.auth._key(),e)}return this.bypassAuthState||hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IC(t,e){const n=RC(e),r=AC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SC(t,e){hl.set(t._key(),e)}function AC(t){return En(t._redirectPersistence)}function RC(t){return cl(EC,t.config.apiKey,t.name)}async function kC(t,e,n=!1){if(zt(t.app))return Promise.reject(In(t));const r=jn(t),i=bw(r,e),o=await new TC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=10*60*1e3;class CC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PC&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OC=/^https?/;async function VC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DC(t);for(const n of e)try{if(LC(n))return}catch{}Lt(t,"unauthorized-domain")}function LC(t){const e=hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OC.test(n))return!1;if(xC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=new Go(3e4,6e4);function vy(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bC(t){return new Promise((e,n)=>{var r,i,s;function o(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),n(Wt(t,"network-request-failed"))},timeout:MC.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=AP("iframefcb");return tn()[l]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},Sw(`${SP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw dl=null,e})}let dl=null;function FC(t){return dl=dl||bC(t),dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new Go(5e3,15e3),jC="__/auth/iframe",zC="emulator/auth/iframe",$C={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,zC):`https://${t.config.authDomain}/${jC}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=BC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function qC(t){const e=await FC(t),n=tn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:WC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$C,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},UC.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KC=500,GC=600,QC="_blank",JC="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YC(t,e,n,r=KC,i=GC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},HC),{width:r.toString(),height:i.toString(),top:s,left:o}),c=it().toLowerCase();n&&(l=yw(c)?QC:n),mw(c)&&(e=e||JC,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[I,R])=>`${m}${I}=${R},`,"");if(mP(c)&&l!=="_self")return XC(e||"",l),new wy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new wy(p)}function XC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="__/auth/handler",eN="emulator/auth/handler",tN=encodeURIComponent("fac");async function Ey(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof zf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Jo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${tN}=${encodeURIComponent(u)}`:"";return`${nN(t)}?${Ko(l).slice(1)}${c}`}function nN({config:t}){return t.emulator?Mf(t,eN):`https://${t.authDomain}/${ZC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="webStorageSupport";class rN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xw,this._completeRedirectFn=kC,this._overrideRedirectResult=SC}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ey(e,n,r,hd(),i);return YC(e,o,$f())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ey(e,n,r,hd(),i);return oC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qC(e),r=new CC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eh];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tw()||gw()||Ff()}}const iN=rN;var Ty="@firebase/auth",Iy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aN(t){Qi(new ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},c=new EP(r,i,s,u);return NP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new ti("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(r=>new sN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(Ty,Iy,oN(t)),gr(Ty,Iy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=5*60,uN=ew("authIdTokenMaxAge")||lN;let Sy=null;const cN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uN)return;const i=n==null?void 0:n.token;Sy!==i&&(Sy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hN(t=iw()){const e=xf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CP(t,{popupRedirectResolver:iN,persistence:[mC,rC,xw]}),r=ew("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cN(s.toString());XP(n,o,()=>o(n.currentUser)),YP(n,l=>o(l))}}const i=X0("auth");return i&&DP(n,`http://${i}`),n}function dN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aN("Browser");var fN="firebase",pN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(fN,pN,"app");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,jw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(S,k,x){for(var A=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)A[Pt-2]=arguments[Pt];return y.prototype[k].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)S[k]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(k=0;16>k;++k)S[k]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],k=w.g[2];var x=w.g[3],A=y+(x^E&(k^x))+S[0]+3614090360&4294967295;y=E+(A<<7&4294967295|A>>>25),A=x+(k^y&(E^k))+S[1]+3905402710&4294967295,x=y+(A<<12&4294967295|A>>>20),A=k+(E^x&(y^E))+S[2]+606105819&4294967295,k=x+(A<<17&4294967295|A>>>15),A=E+(y^k&(x^y))+S[3]+3250441966&4294967295,E=k+(A<<22&4294967295|A>>>10),A=y+(x^E&(k^x))+S[4]+4118548399&4294967295,y=E+(A<<7&4294967295|A>>>25),A=x+(k^y&(E^k))+S[5]+1200080426&4294967295,x=y+(A<<12&4294967295|A>>>20),A=k+(E^x&(y^E))+S[6]+2821735955&4294967295,k=x+(A<<17&4294967295|A>>>15),A=E+(y^k&(x^y))+S[7]+4249261313&4294967295,E=k+(A<<22&4294967295|A>>>10),A=y+(x^E&(k^x))+S[8]+1770035416&4294967295,y=E+(A<<7&4294967295|A>>>25),A=x+(k^y&(E^k))+S[9]+2336552879&4294967295,x=y+(A<<12&4294967295|A>>>20),A=k+(E^x&(y^E))+S[10]+4294925233&4294967295,k=x+(A<<17&4294967295|A>>>15),A=E+(y^k&(x^y))+S[11]+2304563134&4294967295,E=k+(A<<22&4294967295|A>>>10),A=y+(x^E&(k^x))+S[12]+1804603682&4294967295,y=E+(A<<7&4294967295|A>>>25),A=x+(k^y&(E^k))+S[13]+4254626195&4294967295,x=y+(A<<12&4294967295|A>>>20),A=k+(E^x&(y^E))+S[14]+2792965006&4294967295,k=x+(A<<17&4294967295|A>>>15),A=E+(y^k&(x^y))+S[15]+1236535329&4294967295,E=k+(A<<22&4294967295|A>>>10),A=y+(k^x&(E^k))+S[1]+4129170786&4294967295,y=E+(A<<5&4294967295|A>>>27),A=x+(E^k&(y^E))+S[6]+3225465664&4294967295,x=y+(A<<9&4294967295|A>>>23),A=k+(y^E&(x^y))+S[11]+643717713&4294967295,k=x+(A<<14&4294967295|A>>>18),A=E+(x^y&(k^x))+S[0]+3921069994&4294967295,E=k+(A<<20&4294967295|A>>>12),A=y+(k^x&(E^k))+S[5]+3593408605&4294967295,y=E+(A<<5&4294967295|A>>>27),A=x+(E^k&(y^E))+S[10]+38016083&4294967295,x=y+(A<<9&4294967295|A>>>23),A=k+(y^E&(x^y))+S[15]+3634488961&4294967295,k=x+(A<<14&4294967295|A>>>18),A=E+(x^y&(k^x))+S[4]+3889429448&4294967295,E=k+(A<<20&4294967295|A>>>12),A=y+(k^x&(E^k))+S[9]+568446438&4294967295,y=E+(A<<5&4294967295|A>>>27),A=x+(E^k&(y^E))+S[14]+3275163606&4294967295,x=y+(A<<9&4294967295|A>>>23),A=k+(y^E&(x^y))+S[3]+4107603335&4294967295,k=x+(A<<14&4294967295|A>>>18),A=E+(x^y&(k^x))+S[8]+1163531501&4294967295,E=k+(A<<20&4294967295|A>>>12),A=y+(k^x&(E^k))+S[13]+2850285829&4294967295,y=E+(A<<5&4294967295|A>>>27),A=x+(E^k&(y^E))+S[2]+4243563512&4294967295,x=y+(A<<9&4294967295|A>>>23),A=k+(y^E&(x^y))+S[7]+1735328473&4294967295,k=x+(A<<14&4294967295|A>>>18),A=E+(x^y&(k^x))+S[12]+2368359562&4294967295,E=k+(A<<20&4294967295|A>>>12),A=y+(E^k^x)+S[5]+4294588738&4294967295,y=E+(A<<4&4294967295|A>>>28),A=x+(y^E^k)+S[8]+2272392833&4294967295,x=y+(A<<11&4294967295|A>>>21),A=k+(x^y^E)+S[11]+1839030562&4294967295,k=x+(A<<16&4294967295|A>>>16),A=E+(k^x^y)+S[14]+4259657740&4294967295,E=k+(A<<23&4294967295|A>>>9),A=y+(E^k^x)+S[1]+2763975236&4294967295,y=E+(A<<4&4294967295|A>>>28),A=x+(y^E^k)+S[4]+1272893353&4294967295,x=y+(A<<11&4294967295|A>>>21),A=k+(x^y^E)+S[7]+4139469664&4294967295,k=x+(A<<16&4294967295|A>>>16),A=E+(k^x^y)+S[10]+3200236656&4294967295,E=k+(A<<23&4294967295|A>>>9),A=y+(E^k^x)+S[13]+681279174&4294967295,y=E+(A<<4&4294967295|A>>>28),A=x+(y^E^k)+S[0]+3936430074&4294967295,x=y+(A<<11&4294967295|A>>>21),A=k+(x^y^E)+S[3]+3572445317&4294967295,k=x+(A<<16&4294967295|A>>>16),A=E+(k^x^y)+S[6]+76029189&4294967295,E=k+(A<<23&4294967295|A>>>9),A=y+(E^k^x)+S[9]+3654602809&4294967295,y=E+(A<<4&4294967295|A>>>28),A=x+(y^E^k)+S[12]+3873151461&4294967295,x=y+(A<<11&4294967295|A>>>21),A=k+(x^y^E)+S[15]+530742520&4294967295,k=x+(A<<16&4294967295|A>>>16),A=E+(k^x^y)+S[2]+3299628645&4294967295,E=k+(A<<23&4294967295|A>>>9),A=y+(k^(E|~x))+S[0]+4096336452&4294967295,y=E+(A<<6&4294967295|A>>>26),A=x+(E^(y|~k))+S[7]+1126891415&4294967295,x=y+(A<<10&4294967295|A>>>22),A=k+(y^(x|~E))+S[14]+2878612391&4294967295,k=x+(A<<15&4294967295|A>>>17),A=E+(x^(k|~y))+S[5]+4237533241&4294967295,E=k+(A<<21&4294967295|A>>>11),A=y+(k^(E|~x))+S[12]+1700485571&4294967295,y=E+(A<<6&4294967295|A>>>26),A=x+(E^(y|~k))+S[3]+2399980690&4294967295,x=y+(A<<10&4294967295|A>>>22),A=k+(y^(x|~E))+S[10]+4293915773&4294967295,k=x+(A<<15&4294967295|A>>>17),A=E+(x^(k|~y))+S[1]+2240044497&4294967295,E=k+(A<<21&4294967295|A>>>11),A=y+(k^(E|~x))+S[8]+1873313359&4294967295,y=E+(A<<6&4294967295|A>>>26),A=x+(E^(y|~k))+S[15]+4264355552&4294967295,x=y+(A<<10&4294967295|A>>>22),A=k+(y^(x|~E))+S[6]+2734768916&4294967295,k=x+(A<<15&4294967295|A>>>17),A=E+(x^(k|~y))+S[13]+1309151649&4294967295,E=k+(A<<21&4294967295|A>>>11),A=y+(k^(E|~x))+S[4]+4149444226&4294967295,y=E+(A<<6&4294967295|A>>>26),A=x+(E^(y|~k))+S[11]+3174756917&4294967295,x=y+(A<<10&4294967295|A>>>22),A=k+(y^(x|~E))+S[2]+718787259&4294967295,k=x+(A<<15&4294967295|A>>>17),A=E+(x^(k|~y))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,S=this.B,k=this.h,x=0;x<y;){if(k==0)for(;x<=E;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<y;)if(S[k++]=w.charCodeAt(x++),k==this.blockSize){i(this,S),k=0;break}}else for(;x<y;)if(S[k++]=w[x++],k==this.blockSize){i(this,S),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)w[E++]=this.g[y]>>>S&255;return w};function s(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function o(w,y){this.h=y;for(var E=[],S=!0,k=w.length-1;0<=k;k--){var x=w[k]|0;S&&x==y||(E[k]=x,S=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return C(c(-w));for(var y=[],E=1,S=0;w>=E;S++)y[S]=w/E|0,E*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return C(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),S=p,k=0;k<w.length;k+=8){var x=Math.min(8,w.length-k),A=parseInt(w.substring(k,k+x),y);8>x?(x=c(Math.pow(y,x)),S=S.j(x).add(c(A))):(S=S.j(E),S=S.add(c(A)))}return S}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);w+=(0<=S?S:4294967296+S)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(P(this))return"-"+C(this).toString(w);for(var y=c(Math.pow(w,6)),E=this,S="";;){var k=O(E,y).g;E=T(E,k.j(y));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=k,R(E))return x+S;for(;6>x.length;)x="0"+x;S=x+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:R(w)?0:1};function C(w){for(var y=w.g.length,E=[],S=0;S<y;S++)E[S]=~w.g[S];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0,k=0;k<=y;k++){var x=S+(this.i(k)&65535)+(w.i(k)&65535),A=(x>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);S=A>>>16,x&=65535,A&=65535,E[k]=A<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(C(y))}t.j=function(w){if(R(this)||R(w))return p;if(P(this))return P(w)?C(this).j(C(w)):C(C(this).j(w));if(P(w))return C(this.j(C(w)));if(0>this.l(I)&&0>w.l(I))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<w.g.length;k++){var x=this.i(S)>>>16,A=this.i(S)&65535,Pt=w.i(k)>>>16,xr=w.i(k)&65535;E[2*S+2*k]+=A*xr,_(E,2*S+2*k),E[2*S+2*k+1]+=x*xr,_(E,2*S+2*k+1),E[2*S+2*k+1]+=A*Pt,_(E,2*S+2*k+1),E[2*S+2*k+2]+=x*Pt,_(E,2*S+2*k+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function v(w,y){this.g=w,this.h=y}function O(w,y){if(R(y))throw Error("division by zero");if(R(w))return new v(p,p);if(P(w))return y=O(C(w),y),new v(C(y.g),C(y.h));if(P(y))return y=O(w,C(y)),new v(C(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;0>=S.l(w);)E=M(E),S=M(S);var k=F(E,1),x=F(S,1);for(S=F(S,2),E=F(E,2);!R(S);){var A=x.add(S);0>=A.l(w)&&(k=k.add(E),x=A),S=F(S,1),E=F(E,1)}return y=T(w,k.j(y)),new v(k,y)}for(k=p;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),x=c(E),A=x.j(y);P(A)||0<A.l(w);)E-=S,x=c(E),A=x.j(y);R(x)&&(x=m),k=k.add(x),w=T(w,A)}return new v(k,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function M(w){for(var y=w.g.length+1,E=[],S=0;S<y;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function F(w,y){var E=y>>5;y%=32;for(var S=w.g.length-E,k=[],x=0;x<S;x++)k[x]=0<y?w.i(x+E)>>>y|w.i(x+E+1)<<32-y:w.i(x+E);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Qr=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zw,qs,$w,fl,pd,Bw,Ww,qw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wa=="object"&&Wa];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in d))break e;d=d[D]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,D={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function I(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,D,V){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return h.prototype[D].apply(g,j)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const D=a.length||0,V=g.length||0;a.length=D+V;for(let j=0;j<V;j++)a[D+j]=g[j]}else a.push(g)}}class T{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function v(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var M=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function F(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(d in g)a[d]=g[d];for(let V=0;V<E.length;V++)d=E[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function x(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,d){const g=xr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var xr=new T(()=>new gs,a=>a.reset());class gs{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,z=!1,Q=new Pt,X=()=>{const a=l.Promise.resolve(void 0);ln=()=>{a.then(ge)}};var ge=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){x(d)}var h=xr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function cn(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{O(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}R(cn,Se);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),_T=0;function vT(a,h,d,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=D,this.key=++_T,this.da=this.fa=!1}function aa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function la(a){this.src=a,this.g={},this.h=0}la.prototype.add=function(a,h,d,g,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var j=Xu(a,h,g,D);return-1<j?(h=a[j],d||(h.fa=!1)):(h=new vT(h,this.src,V,!!g,D),h.fa=d,a.push(h)),h};function Yu(a,h){var d=h.type;if(d in a.g){var g=a.g[d],D=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(g,D,1),V&&(aa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Xu(a,h,d,g){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return D}return-1}var Zu="closure_lm_"+(1e6*Math.random()|0),ec={};function Cp(a,h,d,g,D){if(g&&g.once)return Dp(a,h,d,g,D);if(Array.isArray(h)){for(var V=0;V<h.length;V++)Cp(a,h[V],d,g,D);return null}return d=ic(d),a&&a[Gt]?a.K(h,d,c(g)?!!g.capture:!!g,D):Np(a,h,d,!1,g,D)}function Np(a,h,d,g,D,V){if(!h)throw Error("Invalid event type");var j=c(D)?!!D.capture:!!D,ue=nc(a);if(ue||(a[Zu]=ue=new la(a)),d=ue.add(h,d,g,j,V),d.proxy)return d;if(g=wT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)un||(D=j),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(Op(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wT(){function a(d){return h.call(a.src,a.listener,d)}const h=ET;return a}function Dp(a,h,d,g,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Dp(a,h[V],d,g,D);return null}return d=ic(d),a&&a[Gt]?a.L(h,d,c(g)?!!g.capture:!!g,D):Np(a,h,d,!0,g,D)}function xp(a,h,d,g,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)xp(a,h[V],d,g,D);else g=c(g)?!!g.capture:!!g,d=ic(d),a&&a[Gt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=Xu(V,d,g,D),-1<d&&(aa(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=nc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Xu(h,d,g,D)),(d=-1<a?h[a]:null)&&tc(d))}function tc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Gt])Yu(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Op(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=nc(h))?(Yu(d,a),d.h==0&&(d.src=null,h[Zu]=null)):aa(a)}}}function Op(a){return a in ec?ec[a]:ec[a]="on"+a}function ET(a,h){if(a.da)a=!0;else{h=new cn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&tc(a),a=d.call(g,h)}return a}function nc(a){return a=a[Zu],a instanceof la?a:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function ic(a){return typeof a=="function"?a:(a[rc]||(a[rc]=function(h){return a.handleEvent(h)}),a[rc])}function Ge(){le.call(this),this.i=new la(this),this.M=this,this.F=null}R(Ge,le),Ge.prototype[Gt]=!0,Ge.prototype.removeEventListener=function(a,h,d,g){xp(this,a,h,d,g)};function st(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var D=h;h=new Se(g,a),S(h,D)}if(D=!0,d)for(var V=d.length-1;0<=V;V--){var j=h.g=d[V];D=ua(j,g,!0,h)&&D}if(j=h.g=a,D=ua(j,g,!0,h)&&D,D=ua(j,g,!1,h)&&D,d)for(V=0;V<d.length;V++)j=h.g=d[V],D=ua(j,g,!1,h)&&D}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)aa(d[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ge.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ua(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var j=h[V];if(j&&!j.da&&j.capture==d){var ue=j.listener,Ue=j.ha||j.src;j.fa&&Yu(a.i,j),D=ue.call(Ue,g)!==!1&&D}}return D&&!g.defaultPrevented}function Vp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Lp(a){a.g=Vp(()=>{a.g=null,a.i&&(a.i=!1,Lp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Lp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(a){le.call(this),this.h=a,this.g={}}R(ys,le);var Mp=[];function bp(a){F(a.g,function(h,d){this.g.hasOwnProperty(d)&&tc(h)},a),a.g={}}ys.prototype.N=function(){ys.aa.N.call(this),bp(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sc=l.JSON.stringify,IT=l.JSON.parse,ST=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function oc(){}oc.prototype.h=null;function Fp(a){return a.h||(a.h=a.i())}function Up(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ac(){Se.call(this,"d")}R(ac,Se);function lc(){Se.call(this,"c")}R(lc,Se);var Or={},jp=null;function ca(){return jp=jp||new Ge}Or.La="serverreachability";function zp(a){Se.call(this,Or.La,a)}R(zp,Se);function vs(a){const h=ca();st(h,new zp(h))}Or.STAT_EVENT="statevent";function $p(a,h){Se.call(this,Or.STAT_EVENT,a),this.stat=h}R($p,Se);function ot(a){const h=ca();st(h,new $p(h,a))}Or.Ma="timingevent";function Bp(a,h){Se.call(this,Or.Ma,a),this.size=h}R(Bp,Se);function ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function AT(a,h,d,g,D,V){a.info(function(){if(a.g)if(V)for(var j="",ue=V.split("&"),Ue=0;Ue<ue.length;Ue++){var ie=ue[Ue].split("=");if(1<ie.length){var Qe=ie[0];ie=ie[1];var Je=Qe.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Qe+"="+ie+"&"):j+(Qe+"=redacted&")}}else j=null;else j=V;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+d+`
`+j})}function RT(a,h,d,g,D,V,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+d+`
`+V+" "+j})}function hi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PT(a,d)+(g?" "+g:"")})}function kT(a,h){a.info(function(){return"TIMEOUT: "+h})}Es.prototype.info=function(){};function PT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var j=1;j<D.length;j++)D[j]=""}}}}return sc(d)}catch{return h}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uc;function da(){}R(da,oc),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},uc=new da;function zn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qp}function qp(){this.i=null,this.g="",this.h=!1}var Hp={},cc={};function hc(a,h,d){a.L=1,a.v=ga(dn(h)),a.m=d,a.P=!0,Kp(a,null)}function Kp(a,h){a.F=Date.now(),fa(a),a.A=dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),am(d.i,"t",g),a.C=0,d=a.j.J,a.h=new qp,a.g=Am(a.j,d?h:null,!a.m),0<a.O&&(a.M=new TT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Mp[0]=D.toString()),D=Mp);for(var V=0;V<D.length;V++){var j=Cp(d,D[V],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),vs(),AT(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=fn(this.g);var h=this.g.Ba();const pi=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||pm(this.g)))){this.J||Je!=4||h==7||(h==8||0>=pi?vs(3):vs(2)),dc(this);var d=this.g.Z();this.X=d;t:if(Gp(this)){var g=pm(this.g);a="";var D=g.length,V=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Ts(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,RT(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Ue=this.g;if((ue=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ie=ue;break t}}ie=null}if(d=ie)hi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,d);else{this.o=!1,this.s=3,ot(12),Vr(this),Ts(this);break e}}if(this.P){d=!0;let Mt;for(;!this.J&&this.C<j.length;)if(Mt=CT(this,j),Mt==cc){Je==4&&(this.s=4,ot(14),d=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Hp){this.s=4,ot(15),hi(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else hi(this.i,this.l,Mt,null),fc(this,Mt);if(Gp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,ot(16),d=!1),this.o=this.o&&d,!d)hi(this.i,this.l,j,"[Invalid Chunked Response]"),Vr(this),Ts(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),vc(Qe),Qe.M=!0,ot(11))}}else hi(this.i,this.l,j,null),fc(this,j);Je==4&&Vr(this),this.o&&!this.J&&(Je==4?Em(this.j,this):(this.o=!1,fa(this)))}else HT(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Vr(this),Ts(this)}}}catch{}finally{}};function Gp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?cc:(d=Number(h.substring(d,g)),isNaN(d)?Hp:(g+=1,g+d>h.length?cc:(h=h.slice(g,g+d),a.C=g+d,h)))}zn.prototype.cancel=function(){this.J=!0,Vr(this)};function fa(a){a.S=Date.now()+a.I,Qp(a,a.I)}function Qp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ws(m(a.ba,a),h)}function dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(kT(this.i,this.A),this.L!=2&&(vs(),ot(17)),Vr(this),this.s=2,Ts(this)):Qp(this,this.S-a)};function Ts(a){a.j.G==0||a.J||Em(a.j,a)}function Vr(a){dc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function fc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||pc(d.h,a))){if(!a.K&&pc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ta(d),wa(d);else break e;_c(d),ot(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(m(d.Za,d),6e3));if(1>=Xp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mr(d,11)}else if((a.K||d.g==a)&&Ta(d),!_(h))for(D=d.Da.g.parse(h),h=0;h<D.length;h++){let ie=D[h];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Qe=ie[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Je=ie[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const pi=ie[5];pi!=null&&typeof pi=="number"&&0<pi&&(g=1.5*pi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Mt=a.g;if(Mt){const Sa=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var V=g.h;V.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(mc(V,V.h),V.h=null))}if(g.D){const wc=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,he(g.I,g.D,wc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=a;if(g.qa=Sm(g,g.J?g.ia:null,g.W),j.K){Zp(g.h,j);var ue=j,Ue=g.L;Ue&&(ue.I=Ue),ue.B&&(dc(ue),fa(ue)),g.g=j}else vm(g);0<d.i.length&&Ea(d)}else ie[0]!="stop"&&ie[0]!="close"||Mr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Mr(d,7):yc(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}vs(4)}catch{}}var NT=class{constructor(a,h){this.g=a,this.map=h}};function Jp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xp(a){return a.h?1:a.g?a.g.size:0}function pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function mc(a,h){a.g?a.g.add(h):a.h=h}function Zp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Jp.prototype.cancel=function(){if(this.i=em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function em(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function DT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function xT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function tm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=xT(a),g=DT(a),D=g.length,V=0;V<D;V++)h.call(void 0,g[V],d&&d[V],a)}var nm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),D=null;if(0<=g){var V=a[d].substring(0,g);D=a[d].substring(g+1)}else V=a[d];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,pa(this,a.j),this.o=a.o,this.g=a.g,ma(this,a.s),this.l=a.l;var h=a.i,d=new As;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),rm(this,d),this.m=a.m}else a&&(h=String(a).match(nm))?(this.h=!1,pa(this,h[1]||"",!0),this.o=Is(h[2]||""),this.g=Is(h[3]||"",!0),ma(this,h[4]),this.l=Is(h[5]||"",!0),rm(this,h[6]||"",!0),this.m=Is(h[7]||"")):(this.h=!1,this.i=new As(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ss(h,im,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ss(h,im,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?MT:LT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,FT)),a.join("")};function dn(a){return new Lr(a)}function pa(a,h,d){a.j=d?Is(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function rm(a,h,d){h instanceof As?(a.i=h,UT(a.i,a.h)):(d||(h=Ss(h,bT)),a.i=new As(h,a.h))}function he(a,h,d){a.i.set(h,d)}function ga(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Is(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,VT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function VT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var im=/[#\/\?@]/g,LT=/[#\?:]/g,MT=/[#\?]/g,bT=/[#\?@]/g,FT=/#/g;function As(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&OT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(a,h){$n(this),this.i=null,a=di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function sm(a,h){$n(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function om(a,h){return $n(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(d,g){d.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const D=a[g];for(let V=0;V<D.length;V++)d.push(h[g])}return d},t.V=function(a){$n(this);let h=[];if(typeof a=="string")om(this,a)&&(h=h.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return $n(this),this.i=null,a=di(this,a),om(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function am(a,h,d){sm(a,h),0<d.length&&(a.i=null,a.g.set(di(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var D=V;j[g]!==""&&(D+="="+encodeURIComponent(String(j[g]))),a.push(D)}}return this.i=a.join("&")};function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function UT(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(d,g){var D=g.toLowerCase();g!=D&&(sm(this,g),am(this,D,d))},a)),a.j=h}function jT(a,h){const d=new Es;if(l.Image){const g=new Image;g.onload=I(Bn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=I(Bn,d,"TestLoadImage: error",!1,h,g),g.onabort=I(Bn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=I(Bn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function zT(a,h){const d=new Es,g=new AbortController,D=setTimeout(()=>{g.abort(),Bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(D),V.ok?Bn(d,"TestPingServer: ok",!0,h):Bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Bn(d,"TestPingServer: error",!1,h)})}function Bn(a,h,d,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(d)}catch{}}function $T(){this.g=new ST}function BT(a,h,d){const g=d||"";try{tm(a,function(D,V){let j=D;c(D)&&(j=sc(D)),h.push(g+V+"="+encodeURIComponent(j))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function ya(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ya,oc),ya.prototype.g=function(){return new _a(this.l,this.j)},ya.prototype.i=function(a){return function(){return a}}({});function _a(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_a,Ge),t=_a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ks(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ks(this)),this.g&&(this.readyState=3,ks(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Rs(this):ks(this),this.readyState==3&&lm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ks(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ks(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function um(a){let h="";return F(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function gc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=um(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function Te(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,Ge);var WT=/^https?$/i,qT=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uc.g(),this.v=this.o?Fp(this.o):Fp(uc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){cm(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)d.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qT,h,void 0))||g||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of d)this.g.setRequestHeader(V,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){cm(this,V)}};function cm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,hm(a),va(a)}function hm(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?dm(this):this.bb())},t.bb=function(){dm(this)};function dm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Vp(a.Ea,0,a);else if(st(a,"readystatechange"),fn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=j===0){var D=String(a.D).match(nm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!WT.test(D?D.toLowerCase():"")}d=g}if(d)st(a,"complete"),st(a,"success");else{a.m=6;try{var V=2<fn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",hm(a)}}finally{va(a)}}}}function va(a,h){if(a.g){fm(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{d.onreadystatechange=g}catch{}}}function fm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),IT(h)}};function pm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function HT(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=k(a[g]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[D]||[];h[D]=V,V.push(d)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function mm(a){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jp(a&&a.concurrentRequestLimit),this.Da=new $T,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){ot(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Sm(this,null,this.W),Ea(this)};function yc(a){if(gm(a),a.G==3){var h=a.U++,d=dn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),Cs(a,d),h=new zn(a,a.j,h),h.L=2,h.v=ga(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Am(h.j,null),h.g.ea(h.v)),h.F=Date.now(),fa(h)}Im(a)}function wa(a){a.g&&(vc(a),a.g.cancel(),a.g=null)}function gm(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ea(a){if(!Yp(a.h)&&!a.s){a.s=!0;var h=a.Ga;ln||X(),z||(ln(),z=!0),Q.add(h,a),a.B=0}}function KT(a,h){return Xp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ws(m(a.Ga,a,h),Tm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new zn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),S(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=_m(this,D,h),d=dn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Cs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(um(V)))+"&"+h:this.m&&gc(d,this.m,V)),mc(this.h,D),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),D.T=!0,hc(D,d,null)):hc(D,d,h),this.G=2}}else this.G==3&&(a?ym(this,a):this.i.length==0||Yp(this.h)||ym(this))};function ym(a,h){var d;h?d=h.l:d=a.U++;const g=dn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),Cs(a,g),a.m&&a.o&&gc(g,a.m,a.o),d=new zn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=_m(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),mc(a.h,d),hc(d,g,h)}function Cs(a,h){a.H&&F(a.H,function(d,g){he(h,g,d)}),a.l&&tm({},function(d,g){he(h,g,d)})}function _m(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const j=["count="+d];V==-1?0<d?(V=D[0].g,j.push("ofs="+V)):V=0:j.push("ofs="+V);let ue=!0;for(let Ue=0;Ue<d;Ue++){let ie=D[Ue].g;const Qe=D[Ue].map;if(ie-=V,0>ie)V=Math.max(0,D[Ue].g-100),ue=!1;else try{BT(Qe,j,"req"+ie+"_")}catch{g&&g(Qe)}}if(ue){g=j.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function vm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ln||X(),z||(ln(),z=!0),Q.add(h,a),a.v=0}}function _c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ws(m(a.Fa,a),Tm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,wm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ws(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),wa(this),wm(this))};function vc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function wm(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Cs(a,h),a.m&&a.o&&gc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ga(dn(h)),d.m=null,d.P=!0,Kp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),_c(this),ot(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Em(a,h){var d=null;if(a.g==h){Ta(a),vc(a),a.g=null;var g=2}else if(pc(a.h,h))d=h.D,Zp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=ca(),st(g,new Bp(g,d)),Ea(a)}else vm(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&KT(a,h)||g==2&&_c(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),D){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Tm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const D=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pa(g,"https"),ga(g),D?jT(g.toString(),d):zT(g.toString(),d)}else ot(2);a.G=0,a.l&&a.l.sa(h),Im(a),gm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Im(a){if(a.G=0,a.ka=[],a.l){const h=em(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Sm(a,h,d){var g=d instanceof Lr?dn(d):new Lr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ma(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new Lr(null);g&&pa(V,g),h&&(V.g=h),D&&ma(V,D),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),Cs(a,g),g}function Am(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Te(new ya({eb:d})):new Te(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rm(){}t=Rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Ge.call(this),this.g=new mm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}R(wt,Ge),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){yc(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=sc(a),a=d);h.i.push(new NT(h.Ya++,a)),h.G==3&&Ea(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,wt.aa.N.call(this)};function km(a){ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(km,ac);function Pm(){lc.call(this),this.status=1}R(Pm,lc);function fi(a){this.g=a}R(fi,Rm),fi.prototype.ua=function(){st(this.g,"a")},fi.prototype.ta=function(a){st(this.g,new km(a))},fi.prototype.sa=function(a){st(this.g,new Pm)},fi.prototype.ra=function(){st(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,qw=function(){return new Ia},Ww=function(){return ca()},Bw=Or,pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,fl=ha,Wp.COMPLETE="complete",$w=Wp,Up.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,qs=Up,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,zw=Te}).apply(typeof Wa<"u"?Wa:typeof self<"u"?self:typeof window<"u"?window:{});const Ry="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Nf("@firebase/firestore");function Fs(){return ii.logLevel}function W(t,...e){if(ii.logLevel<=te.DEBUG){const n=e.map(Wf);ii.debug(`Firestore (${hs}): ${t}`,...n)}}function xn(t,...e){if(ii.logLevel<=te.ERROR){const n=e.map(Wf);ii.error(`Firestore (${hs}): ${t}`,...n)}}function Ji(t,...e){if(ii.logLevel<=te.WARN){const n=e.map(Wf);ii.warn(`Firestore (${hs}): ${t}`,...n)}}function Wf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function ae(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class gN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yN{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Hw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new et(e)}}class _N{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _N(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new wN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends xo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const IN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends xo{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return IN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function SN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new wr(i,H.empty(),e)}function AN(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(J.min(),H.empty(),-1)}static max(){return new wr(J.max(),H.empty(),-1)}}function RN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==kN)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qf.oe=-1;function Du(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function NN(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qa(this.root,e,this.comparator,!0)}}class qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Py(this.data.getIterator())}getIteratorFrom(e){return new Py(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Py{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new It([])}unionWith(e){let n=new We($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qw("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const DN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ae(!!t),typeof t=="string"){let e=0;const n=DN.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kf(t){const e=t.mapValue.fields.__previous_value__;return Hf(e)?Kf(e):e}function Oo(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hf(t)?4:VN(t)?9007199254740991:ON(t)?10:11:G()}function sn(t,e){if(t===e)return!0;const n=oi(t);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return si(i.bytesValue).isEqual(si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?eu(o)===eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ky(o)!==ky(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!sn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Lo(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=oi(t),r=oi(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(Oo(t),Oo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=si(s),u=si(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ae(s.latitude),Ae(o.latitude));return l!==0?l:se(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ny(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=se(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Ny(I,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ha.mapValue&&o===Ha.mapValue)return 0;if(s===Ha.mapValue)return 1;if(o===Ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=se(u[p],f[p]);if(m!==0)return m;const I=Xi(l[u[p]],c[f[p]]);if(I!==0)return I}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Er(t),r=Er(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Ny(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Xi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Zi(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=md(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${md(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Dy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function Oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function ON(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=so(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(so(this.value))}}function Jw(t){const e=[];return ui(t.fields,(n,r)=>{const i=new $e([n]);if(pl(r)){const s=Jw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.position=e,this.inclusive=n}}function Vy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{}class De extends Yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new zN(e,r):n==="not-in"?new $N(e,r):n==="array-contains-any"?new BN(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends Yw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return Xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xw(t){return t.op==="and"}function Zw(t){return MN(t)&&Xw(t)}function MN(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function yd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(Zw(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function eE(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&eE(o,i.filters[l]),!0):!1}(t,e):void G()}function tE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(t):"Filter"}class bN extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class FN extends De{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends De{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class jN extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&Lo(n.arrayValue,this.value)}}class zN extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class $N extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class BN extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function My(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WN(t,e,n,r,i,s,o)}function Qf(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.ue=n}return e.ue}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ly(t.startAt,e.startAt)&&Ly(t.endAt,e.endAt)}function _d(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qN(t,e,n,r,i,s,o,l){return new ds(t,e,n,r,i,s,o,l)}function Yf(t){return new ds(t)}function by(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rE(t){return t.collectionGroup!==null}function oo(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Mo(s,r))}),n.has($e.keyField().canonicalString())||e.ce.push(new Mo($e.keyField(),r))}return e.ce}function nn(t){const e=Y(t);return e.le||(e.le=HN(e,oo(t))),e.le}function HN(t,e){if(t.limitType==="F")return My(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mo(i.field,s)});const n=t.endAt?new tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tu(t.startAt.position,t.startAt.inclusive):null;return My(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e){const n=t.filters.concat([e]);return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return Jf(nn(t),nn(e))&&t.limitType===e.limitType}function iE(t){return`${Qf(nn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tE(i)).join(", ")}]`),Du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zi(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Vy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,oo(r),i)||r.endAt&&!function(o,l,u){const c=Vy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,oo(r),i))}(t,e)}function KN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sE(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=GN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GN(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Xi(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Ee(H.comparator);function On(){return QN}const oE=new Ee(H.comparator);function Hs(...t){let e=oE;for(const n of t)e=e.insert(n.key,n);return e}function aE(t){let e=oE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return ao()}function lE(){return ao()}function ao(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const JN=new Ee(H.comparator),YN=new We(H.comparator);function ee(...t){let e=YN;for(const n of t)e=e.add(n);return e}const XN=new We(se);function ZN(){return XN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function uE(t){return{integerValue:""+t}}function eD(t,e){return NN(e)?uE(e):Xf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this._=void 0}}function tD(t,e,n){return t instanceof bo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hf(s)&&(s=Kf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?hE(t,e):t instanceof Uo?dE(t,e):function(i,s){const o=cE(i,s),l=Fy(o)+Fy(i.Pe);return gd(o)&&gd(i.Pe)?uE(l):Xf(i.serializer,l)}(t,e)}function nD(t,e,n){return t instanceof Fo?hE(t,e):t instanceof Uo?dE(t,e):n}function cE(t,e){return t instanceof ru?function(r){return gd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bo extends Vu{}class Fo extends Vu{constructor(e){super(),this.elements=e}}function hE(t,e){const n=fE(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Vu{constructor(e){super(),this.elements=e}}function dE(t,e){let n=fE(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class ru extends Vu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fy(t){return Ae(t.integerValue||t.doubleValue)}function fE(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n){this.field=e,this.transform=n}}function iD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?Yi(r.elements,i.elements,sn):r instanceof ru&&i instanceof ru?sn(r.Pe,i.Pe):r instanceof bo&&i instanceof bo}(t.transform,e.transform)}class sD{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lu{}function pE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gE(t.key,qt.none()):new ea(t.key,t.data,qt.none());{const n=t.data,r=pt.empty();let i=new We($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new It(i.toArray()),qt.none())}}function oD(t,e,n){t instanceof ea?function(i,s,o){const l=i.value.clone(),u=jy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=jy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof ea?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=s.value.clone(),f=zy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(s,o,l,u){if(!ml(s.precondition,o))return l;const c=zy(s.fieldTransforms,u,o),f=o.data;return f.setAll(mE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>iD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Lu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends Lu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nD(o,l,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tD(s,o,e))}return r}class gE extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lD extends Lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=pE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>Uy(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>Uy(n,r))}}class Zf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return JN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function dD(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function yE(t){if(t===void 0)return xn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=new Qr([4294967295,4294967295],0);function $y(t){const e=fD().encode(t),n=new jw;return n.update(e),new Uint8Array(n.digest())}function By(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,s],0)]}class ep{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qr.fromNumber(r)));return i.compare(pD)===1&&(i=new Qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$y(e),[r,i]=By(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ep(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=$y(e),[r,i]=By(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(J.min(),i,new Ee(se),On(),ee())}}class ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class _E{constructor(e,n){this.targetId=e,this.me=n}}class vE{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wy{constructor(){this.fe=0,this.ge=Hy(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Hy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mD{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=qy(),this.Qe=new Ee(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(_d(s))if(r===0){const o=new H(s.path);this.Ue(n,o,nt.newNoDocument(o,J.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=si(r).toUint8Array()}catch(u){if(u instanceof Qw)return Ji("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ep(o,i,s)}catch(u){return Ji(u instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&_d(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,nt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Mu(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=qy(),this.Qe=new Ee(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new We(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qy(){return new Ee(H.comparator)}function Hy(){return new Ee(H.comparator)}const gD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_D=(()=>({and:"AND",or:"OR"}))();class vD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wd(t,e){return t.useProto3Json||Du(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wD(t,e){return iu(t,e.toTimestamp())}function rn(t){return ae(!!t),J.fromTimestamp(function(n){const r=Er(n);return new Ve(r.seconds,r.nanos)}(t))}function tp(t,e){return Ed(t,e).canonicalString()}function Ed(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EE(t){const e=fe.fromString(t);return ae(RE(e)),e}function Td(t,e){return tp(t.databaseId,e.path)}function th(t,e){const n=EE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(IE(n))}function TE(t,e){return tp(t.databaseId,e)}function ED(t){const e=EE(t);return e.length===4?fe.emptyPath():IE(e)}function Id(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IE(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ky(t,e,n){return{name:Td(t,e),fields:n.value.mapValue.fields}}function TD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string"),He.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:yE(c.code);return new $(f,c.message||"")}(o);n=new vE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=th(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):J.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new gl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=th(t,r.document),s=r.readTime?rn(r.readTime):J.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=th(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hD(i,s),l=r.targetId;n=new _E(l,o)}}return n}function ID(t,e){let n;if(e instanceof ea)n={update:Ky(t,e.key,e.value)};else if(e instanceof gE)n={delete:Td(t,e.key)};else if(e instanceof Pr)n={update:Ky(t,e.key,e.data),updateMask:xD(e.fieldMask)};else{if(!(e instanceof lD))return G();n={verify:Td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ru)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function SD(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(J.min())&&(o=rn(s)),new sD(o,i.transformResults||[])}(n,e))):[]}function AD(t,e){return{documents:[TE(t,e.path)]}}function RD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TE(t,i);const s=function(c){if(c.length!==0)return AE(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:_i(m.field),direction:CD(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=wd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function kD(t){let e=ED(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=SE(p);return m instanceof Kt&&Zw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Mo(vi(R.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Du(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new tu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new tu(I,m)}(n.endAt)),qN(e,i,o,s,l,"F",u,c)}function PD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vi(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vi(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vi(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vi(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return De.create(vi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>SE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function CD(t){return gD[t]}function ND(t){return yD[t]}function DD(t){return _D[t]}function _i(t){return{fieldPath:t.canonicalString()}}function vi(t){return $e.fromServerFormat(t.fieldPath)}function AE(t){return t instanceof De?function(n){if(n.op==="=="){if(Oy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Oy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:ND(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>AE(i));return r.length===1?r[0]:{compositeFilter:{op:DD(n.op),filters:r}}}(t):G()}function xD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,r,i,s=J.min(),o=J.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.ct=e}}function VD(t){const e=kD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.un=new MD}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(wr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class MD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new es(0)}static kn(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&lo(r.mutation,i,It.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=On();const o=ao(),l=function(){return ao()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Pr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),lo(f.mutation,c,f.mutation.getFieldMask(),Ve.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new FD(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ao();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||It.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=lE();f.forEach(m=>{if(!s.has(m)){const I=pE(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Hr());let l=-1,u=s;return o.next(c=>b.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:aE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new ds(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=Hs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&lo(f.mutation,c,It.empty(),Ve.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:VD(i.bundledQuery),readTime:rn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Hr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Hr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Hr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return b.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.Tr=new We(Le.Er),this.dr=new We(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Le(n,e),i=new Le(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new We(Le.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(se);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Le(new H(s),0);let l=new We(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),b.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=On();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RN(AN(f),r)<=0||(i.has(f.key)||Ou(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qD(this)}getSize(e){return b.resolve(this.size)}}class qD extends bD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.persistence=e,this.Nr=new fs(n=>Qf(n),Jf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new np,this.targetCount=0,this.kr=es.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qf(0),this.Kr=!1,this.Kr=!0,this.$r=new $D,this.referenceDelegate=e(this),this.Ur=new HD(this),this.indexManager=new LD,this.remoteDocumentCache=function(i){return new WD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new OD(n),this.Gr=new jD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new BD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new GD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GD extends PN{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Jr=new np,this.Yr=null}static Zr(e){return new rp(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ip(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xR()?8:CN(it())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fs()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(Fs()<=te.DEBUG&&W("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fs()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):b.resolve())}Yi(e,n){if(by(n))return b.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nu(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,nu(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return by(n)||i.isEqual(J.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(Fs()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.rs(e,o,n,SN(i,-1)).next(l=>l))})}ts(e,n){let r=new We(sE(e));return n.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fs()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",yi(n)),this.Ji.getDocumentsMatchingQuery(e,n,wr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(se),this._s=new fs(s=>Qf(s),Jf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XD(t,e,n,r){return new YD(t,e,n,r)}async function kE(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function ZD(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let I=b.resolve();return m.forEach(R=>{I=I.next(()=>f.getEntry(u,R)).next(P=>{const C=c.docVersions.get(R);ae(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PE(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ex(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(He.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(P,C,T){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,I,f)&&l.push(n.Ur.updateTargetData(s,I))});let u=On(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(tx(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function tx(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=On();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function nx(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rx(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Sd(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gy(t,e,n){const r=Y(t);let i=J.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Y(u),m=p._s.get(f);return m!==void 0?b.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ee())).next(l=>(ix(r,KN(e),l),{documents:l,Ts:s})))}function ix(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Qy{constructor(){this.activeTargetIds=ZN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sx{constructor(){this.so=new Qy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function nh(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class ux extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=nh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ji("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=ax[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=nh();return new Promise((o,l)=>{const u=new zw;u.setWithCredentials(!0),u.listenOnce($w.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fl.NO_ERROR:const f=u.getResponseJson();W(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case fl.TIMEOUT:W(Ze,`RPC '${e}' ${s} timed out`),l(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const p=u.getStatus();if(W(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const R=function(C){const T=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(I.status);l(new $(R,I.message))}else l(new $(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{W(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=nh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qw(),l=Ww(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,I=!1;const R=new lx({Io:C=>{I?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,T,_)=>{C.listen(T,v=>{try{_(v)}catch(O){setTimeout(()=>{throw O},0)}})};return P(p,qs.EventType.OPEN,()=>{I||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,qs.EventType.CLOSE,()=>{I||(I=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,qs.EventType.ERROR,C=>{I||(I=!0,Ji(Ze,`RPC '${e}' stream ${i} transport errored:`,C),R.So(new $(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,qs.EventType.MESSAGE,C=>{var T;if(!I){const _=C.data[0];ae(!!_);const v=_,O=v.error||((T=v[0])===null||T===void 0?void 0:T.error);if(O){W(Ze,`RPC '${e}' stream ${i} received error:`,O);const M=O.status;let F=function(E){const S=Pe[E];if(S!==void 0)return yE(S)}(M),w=O.message;F===void 0&&(F=L.INTERNAL,w="Unknown error status: "+M+" with message "+O.message),I=!0,R.So(new $(F,w)),p.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),P(l,Bw.STAT_EVENT,C=>{C.stat===pd.PROXY?W(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===pd.NOPROXY&&W(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function rh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t){return new vD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new CE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cx extends NE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TD(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?rn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Id(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=_d(u)?{documents:AD(s,u)}:{query:RD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=wE(s,o.resumeToken);const c=wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=iu(s,o.snapshotVersion.toTimestamp());const c=wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=PD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Id(this.serializer),n.removeTarget=e,this.a_(n)}}class hx extends NE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=SD(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Id(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ID(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ed(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ci(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.L_.add(4),await na(c),c.q_.set("Unknown"),c.L_.delete(4),await Fu(c)}(this))})}),this.q_=new fx(r,i)}}async function Fu(t){if(ci(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function DE(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lp(n)?ap(n):ps(n).r_()&&op(n,e))}function sp(t,e){const n=Y(t),r=ps(n);n.N_.delete(e),r.r_()&&xE(n,e),n.N_.size===0&&(r.r_()?r.o_():ci(n)&&n.q_.set("Unknown"))}function op(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).A_(e)}function xE(t,e){t.Q_.xe(e),ps(t).R_(e)}function ap(t){t.Q_=new mD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.q_.v_()}function lp(t){return ci(t)&&!ps(t).n_()&&t.N_.size>0}function ci(t){return Y(t).L_.size===0}function OE(t){t.Q_=void 0}async function mx(t){t.q_.set("Online")}async function gx(t){t.N_.forEach((e,n)=>{op(t,e)})}async function yx(t,e){OE(t),lp(t)?(t.q_.M_(e),ap(t)):t.q_.set("Unknown")}async function _x(t,e,n){if(t.q_.set("Online"),e instanceof vE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof gl?t.Q_.Ke(e):e instanceof _E?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await PE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),xE(s,u);const p=new ir(f.target,u,c,f.sequenceNumber);op(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>PE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Fu(t)})}function VE(t,e){return e().catch(n=>su(t,n,e))}async function Uu(t){const e=Y(t),n=Tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vx(e);)try{const i=await nx(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,wx(e,i)}catch(i){await su(e,i)}LE(e)&&ME(e)}function vx(t){return ci(t)&&t.O_.length<10}function wx(t,e){t.O_.push(e);const n=Tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function LE(t){return ci(t)&&!Tr(t).n_()&&t.O_.length>0}function ME(t){Tr(t).start()}async function Ex(t){Tr(t).p_()}async function Tx(t){const e=Tr(t);for(const n of t.O_)e.m_(n.mutations)}async function Ix(t,e,n){const r=t.O_.shift(),i=Zf.from(r,e,n);await VE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uu(t)}async function Sx(t,e){e&&Tr(t).V_&&await async function(r,i){if(function(o){return dD(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Tr(r).s_(),await VE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uu(r)}}(t,e),LE(t)&&ME(t)}async function Yy(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Fu(n)}async function Ax(t,e){const n=Y(t);e?(n.L_.delete(2),await Fu(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function ps(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new cx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:mx.bind(null,t),Ro:gx.bind(null,t),mo:yx.bind(null,t),d_:_x.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lp(t)?ap(t):t.q_.set("Unknown")):(await t.K_.stop(),OE(t))})),t.K_}function Tr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new hx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ex.bind(null,t),mo:Sx.bind(null,t),f_:Tx.bind(null,t),g_:Ix.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Uu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new up(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cp(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Zo(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ts(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kx{constructor(){this.queries=Zy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Zy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function Zy(){return new fs(t=>iE(t),xu)}async function bE(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Rx,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cp(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hp(n)}async function FE(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Px(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&hp(n)}function Cx(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hp(t){t.Y_.forEach(e=>{e.next()})}var Ad,e_;(e_=Ad||(Ad={})).ea="default",e_.Cache="cache";class UE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ad.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.key=e}}class zE{constructor(e){this.key=e}}class Nx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=sE(e),this.Ra=new zi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Xy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),I=Ou(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;m&&I?m.data.isEqual(I.data)?R!==P&&(r.track({type:3,doc:I}),C=!0):this.ga(m,I)||(r.track({type:2,doc:I}),C=!0,(u&&this.Aa(I,u)>0||c&&this.Aa(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),C=!0):m&&!I&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(I,R){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return P(I)-P(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ts(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new zE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new jE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ts.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Dx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xx{constructor(e){this.key=e,this.va=!1}}class Ox{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fs(l=>iE(l),xu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new np,this.Ba={},this.ka=new Map,this.qa=es.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vx(t,e,n=!0){const r=KE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await $E(r,e,n,!0),i}async function Lx(t,e){const n=KE(t);await $E(n,e,!0,!1)}async function $E(t,e,n,r){const i=await rx(t.localStore,nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Mx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&DE(t.remoteStore,i),l}async function Mx(t,e,n,r,i){t.Ka=(p,m,I)=>async function(P,C,T,_){let v=C.view.ma(T);v.ns&&(v=await Gy(P.localStore,C.query,!1).then(({documents:w})=>C.view.ma(w,v)));const O=_&&_.targetChanges.get(C.targetId),M=_&&_.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(v,P.isPrimaryClient,O,M);return n_(P,C.targetId,F.wa),F.snapshot}(t,p,m,I);const s=await Gy(t.localStore,e,!0),o=new Nx(e,s.Ts),l=o.ma(s.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);n_(t,n,c.wa);const f=new Dx(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function bx(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Sd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sp(r.remoteStore,i.targetId),Rd(r,i.targetId)}).catch(Xo)):(Rd(r,i.targetId),await Sd(r.localStore,i.targetId,!0))}async function Fx(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function Ux(t,e,n){const r=Hx(t);try{const i=await function(o,l){const u=Y(o),c=Ve.now(),f=l.reduce((I,R)=>I.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let R=On(),P=ee();return u.cs.getEntries(I,f).next(C=>{R=C,R.forEach((T,_)=>{_.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,R)).next(C=>{p=C;const T=[];for(const _ of l){const v=aD(_,p.get(_.key).overlayedDocument);v!=null&&T.push(new Pr(_.key,v,Jw(v.value.mapValue),qt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,T,l)}).next(C=>{m=C;const T=C.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,C.batchId,T)})}).then(()=>({batchId:m.batchId,changes:aE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ra(r,i.changes),await Uu(r.remoteStore)}catch(i){const s=cp(i,"Failed to persist write");n.reject(s)}}async function BE(t,e){const n=Y(t);try{const r=await ex(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Xo(r)}}function t_(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&hp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jx(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,nt.newNoDocument(s,J.min()));const l=ee().add(s),u=new Mu(J.min(),new Map,new Ee(se),o,l);await BE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),dp(r)}else await Sd(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(Xo)}async function zx(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ZD(n.localStore,e);qE(n,r,null),WE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,i)}catch(i){await Xo(i)}}async function $x(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);qE(r,e,n),WE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,i)}catch(i){await Xo(i)}}function WE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function qE(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||HE(t,r)})}function HE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),dp(t))}function n_(t,e,n){for(const r of n)r instanceof jE?(t.La.addReference(r.key,e),Bx(t,r)):r instanceof zE?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||HE(t,r.key)):G()}function Bx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),dp(t))}function dp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new xx(n)),t.Oa=t.Oa.insert(n,r),DE(t.remoteStore,new ir(nn(Yf(n.path)),r,"TargetPurposeLimboResolution",qf.oe))}}async function ra(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=ip.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.$i,I=>f.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>b.forEach(m.Ui,I=>f.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Zo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=f.os.get(m),R=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,P)}}}(r.localStore,s))}async function Wx(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await kE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function qx(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function KE(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jx.bind(null,e),e.Ca.d_=Px.bind(null,e.eventManager),e.Ca.$a=Cx.bind(null,e.eventManager),e}function Hx(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$x.bind(null,e),e}class ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return XD(this.persistence,new JD,e.initialUser,this.serializer)}Ga(e){return new KD(rp.Zr,this.serializer)}Wa(e){return new sx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ou.provider={build:()=>new ou};class kd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>t_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wx.bind(null,this.syncEngine),await Ax(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kx}()}createDatastore(e){const n=bu(e.databaseInfo.databaseId),r=function(s){return new ux(s)}(e.databaseInfo);return function(s,o,l,u){return new dx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new px(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>t_(this.syncEngine,n,0),function(){return Jy.D()?new Jy:new ox}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Ox(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await na(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kd.provider={build:()=>new kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Kw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gx(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Yy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yy(e.remoteStore,i)),t._onlineComponents=e}async function Gx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await ih(t,new ou)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await ih(t,new ou);return t._offlineComponents}async function QE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await r_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await r_(t,new kd))),t._onlineComponents}function Qx(t){return QE(t).then(e=>e.syncEngine)}async function JE(t){const e=await QE(t),n=e.eventManager;return n.onListen=Vx.bind(null,e.syncEngine),n.onUnlisten=bx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Lx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Fx.bind(null,e.syncEngine),n}function Jx(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new GE({next:m=>{f.Za(),o.enqueueAndForget(()=>FE(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new UE(Yf(l.path),f,{includeMetadataChanges:!0,_a:!0});return bE(s,p)}(await JE(t),t.asyncQueue,e,n,r)),r.promise}function Yx(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new GE({next:m=>{f.Za(),o.enqueueAndForget(()=>FE(s,p)),m.fromCache&&u.source==="server"?c.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new UE(l,f,{includeMetadataChanges:!0,_a:!0});return bE(s,p)}(await JE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xx(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s_(t){if(!H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o_(t){if(H.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ju(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ju(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Zx(t,e){if(e<=0)throw new $(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mN;switch(r.type){case"firstParty":return new vN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i_.get(n);r&&(W("ComponentProvider","Removing Datastore"),i_.delete(n),r.terminate())}(this),Promise.resolve()}}function eO(t,e,n,r={}){var i;const s=(t=on(t,zu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=et.MOCK_USER;else{l=AR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new et(c)}t._authCredentials=new gN(new Hw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class yr extends Cr{constructor(e,n,r){super(e,n,Yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new H(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Vn(t,e,...n){if(t=Fe(t),XE("collection","path",e),t instanceof zu){const r=fe.fromString(e,...n);return o_(r),new yr(t,null,r)}{if(!(t instanceof ct||t instanceof yr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return o_(r),new yr(t.firestore,null,r)}}function Nr(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Kw.newId()),XE("doc","path",e),t instanceof zu){const r=fe.fromString(e,...n);return s_(r),new ct(t,null,new H(r))}{if(!(t instanceof ct||t instanceof yr))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return s_(r),new ct(t.firestore,t instanceof yr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new CE(this,"async_queue_retry"),this.Vu=()=>{const r=rh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=up.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ms extends zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new l_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l_(e),this._firestoreClient=void 0,await e}}}function tO(t,e){const n=typeof t=="object"?t:iw(),r=typeof t=="string"?t:e||"(default)",i=xf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IR("firestore");s&&eO(i,...s)}return i}function fp(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nO(t),t._firestoreClient}function nO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new xN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,YE(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Kx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(He.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=/^__.*__$/;class iO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class ZE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function eT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class gp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return au(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eT(this.Cu)&&rO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bu(e)}Qu(e,n,r,i=!1){return new gp({Cu:e,methodName:n,qu:r,path:$e.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wu(t){const e=t._freezeSettings(),n=bu(t._databaseId);return new sO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);_p("Data must be an object, but it was:",o,r);const l=nT(r,o);let u,c;if(s.merge)u=new It(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Pd(e,p,n);if(!o.contains(m))throw new $(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iT(f,m)||f.push(m)}u=new It(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new iO(new pt(l),u,c)}class qu extends Bu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qu}}class yp extends Bu{_toFieldTransform(e){return new rD(e.path,new bo)}isEqual(e){return e instanceof yp}}function oO(t,e,n,r){const i=t.Qu(1,e,n);_p("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ui(r,(u,c)=>{const f=vp(e,u,n);c=Fe(c);const p=i.Nu(f);if(c instanceof qu)s.push(f);else{const m=ia(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new It(s);return new ZE(o,l,i.fieldTransforms)}function aO(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Pd(e,r,n)],u=[i];if(s.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Pd(e,s[m])),u.push(s[m+1]);const c=[],f=pt.empty();for(let m=l.length-1;m>=0;--m)if(!iT(c,l[m])){const I=l[m];let R=u[m];R=Fe(R);const P=o.Nu(I);if(R instanceof qu)c.push(I);else{const C=ia(R,P);C!=null&&(c.push(I),f.set(I,C))}}const p=new It(c);return new ZE(f,p,o.fieldTransforms)}function lO(t,e,n,r=!1){return ia(n,t.Qu(r?4:3,e))}function ia(t,e){if(rT(t=Fe(t)))return _p("Unsupported field value:",e,t),nT(t,e);if(t instanceof Bu)return function(r,i){if(!eT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ia(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:iu(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(i.serializer,s)}}if(r instanceof pp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:wE(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Xf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ju(r)}`)}(t,e)}function nT(t,e){const n={};return Gw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=ia(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof pp||t instanceof ns||t instanceof ct||t instanceof Bu||t instanceof mp)}function _p(t,e,n){if(!rT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ju(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Pd(t,e,n){if((e=Fe(e))instanceof $u)return e._internalPath;if(typeof e=="string")return vp(t,e);throw au("Field path arguments must be of type string or ",t,!1,void 0,n)}const uO=new RegExp("[~\\*/\\[\\]]");function vp(t,e,n){if(e.search(uO)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $u(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function iT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cO extends sT{data(){return super.data()}}function Hu(t,e){return typeof e=="string"?vp(t,e):e instanceof $u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wp{}class Ep extends wp{}function Ku(t,e,...n){let r=[];e instanceof wp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ip).length,l=s.filter(u=>u instanceof Gu).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gu extends Ep{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gu(e,n,r)}_apply(e){const n=this._parse(e);return aT(e._query,n),new Cr(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=Wu(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){c_(p,f);const I=[];for(const R of p)I.push(u_(u,s,R));m={arrayValue:{values:I}}}else m=u_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||c_(p,f),m=lO(l,o,p,f==="in"||f==="not-in");return De.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tp(t,e,n){const r=e,i=Hu("where",t);return Gu._create(i,r,n)}class Ip extends wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)aT(o,u),o=vd(o,u)}(e._query,n),new Cr(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sp extends Ep{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mo(s,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ds(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ap(t,e="asc"){const n=e,r=Hu("orderBy",t);return Sp._create(r,n)}class Rp extends Ep{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Rp(e,n,r)}_apply(e){return new Cr(e.firestore,e.converter,nu(e._query,this._limit,this._limitType))}}function oT(t){return Zx("limit",t),Rp._create("limit",t,"F")}function u_(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rE(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dy(t,new H(r))}if(n instanceof ct)return Dy(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ju(n)}.`)}function c_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dO{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new mp(s)}convertGeoPoint(e){return new pp(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(RE(r));const i=new Vo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uT extends sT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yl extends uT{data(e={}){return super.data(e)}}class fO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pO(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t){t=on(t,ct);const e=on(t.firestore,ms);return Jx(fp(e),t._key).then(n=>mO(e,t,n))}class cT extends dO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function sa(t){t=on(t,Cr);const e=on(t.firestore,ms),n=fp(e),r=new cT(e);return hO(t._query),Yx(n,t._query).then(i=>new fO(e,r,t,i))}function hT(t,e,n){t=on(t,ct);const r=on(t.firestore,ms),i=lT(t.converter,e,n);return Pp(r,[tT(Wu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function Qu(t,e,n,...r){t=on(t,ct);const i=on(t.firestore,ms),s=Wu(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof $u?aO(s,"updateDoc",t._key,e,n,r):oO(s,"updateDoc",t._key,e),Pp(i,[o.toMutation(t._key,qt.exists(!0))])}function Ju(t,e){const n=on(t.firestore,ms),r=Nr(t),i=lT(t.converter,e);return Pp(n,[tT(Wu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function Pp(t,e){return function(r,i){const s=new Sn;return r.asyncQueue.enqueueAndForget(async()=>Ux(await Qx(r),i,s)),s.promise}(fp(t),e)}function mO(t,e,n){const r=n.docs.get(e._key),i=new cT(t);return new uT(t,i,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}function oa(){return new yp("serverTimestamp")}(function(e,n=!0){(function(i){hs=i})(us),Qi(new ti("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ms(new yN(r.getProvider("auth-internal")),new EN(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),gr(Ry,"4.7.3",e),gr(Ry,"4.7.3","esm2017")})();const gO={apiKey:"AIzaSyDqObv4-00IKatm0bSjQQL7uKpqyJ6OSLw",authDomain:"carbonsync-7bc8f.firebaseapp.com",projectId:"carbonsync-7bc8f",storageBucket:"carbonsync-7bc8f.firebasestorage.app",messagingSenderId:"569869617942",appId:"1:569869617942:web:f64c43b8706a3920ae9e37"};let sh,jr,Ke;const yO=()=>{if(typeof window<"u"){const e=localStorage.getItem("force_mock_mode");if(e!==null)return e==="true"}return!0},_O=yO(),_e=()=>_O;try{sh=rw(gO),jr=hN(sh),Ke=tO(sh)}catch(t){console.error("Firebase initialization error",t)}const Ga=async(t,e)=>{if(_e()){const n=JSON.parse(localStorage.getItem("mock_users")||"{}");n[t]={...e,totalSaved:e.totalSaved!==void 0?e.totalSaved:0,createdAt:new Date().toISOString()},localStorage.setItem("mock_users",JSON.stringify(n));return}try{const n=Nr(Ke,"users",t);await hT(n,{...e,totalSaved:0,createdAt:oa()})}catch(n){console.warn("Firestore createUserProfile failed, falling back to localStorage:",n);const r=JSON.parse(localStorage.getItem("mock_users")||"{}");r[t]={...e,totalSaved:e.totalSaved!==void 0?e.totalSaved:0,createdAt:new Date().toISOString()},localStorage.setItem("mock_users",JSON.stringify(r))}},gi=async t=>{if(_e())return JSON.parse(localStorage.getItem("mock_users")||"{}")[t]||null;try{const e=Nr(Ke,"users",t),n=await kp(e);return n.exists()?n.data():null}catch(e){return console.warn("Firestore getUserProfile failed, falling back to localStorage:",e),JSON.parse(localStorage.getItem("mock_users")||"{}")[t]||null}},h_=async(t,e)=>{if(_e()){const n=JSON.parse(localStorage.getItem("mock_users")||"{}");n[t]&&(n[t]={...n[t],...e},localStorage.setItem("mock_users",JSON.stringify(n)));return}try{const n=Nr(Ke,"users",t);await Qu(n,e)}catch(n){console.warn("Firestore updateUserProfile failed, falling back to localStorage:",n);const r=JSON.parse(localStorage.getItem("mock_users")||"{}");r[t]&&(r[t]={...r[t],...e},localStorage.setItem("mock_users",JSON.stringify(r)))}},m2=async()=>{if(_e()){const t=JSON.parse(localStorage.getItem("mock_users")||"{}"),e=Object.keys(t).map(n=>({id:n,...t[n]}));return e.length<5&&[{id:"leader_1",name:"Greta Thunberg",email:"greta@earth.org",totalSaved:850.5,level:"Earth Champion"},{id:"leader_2",name:"David Attenborough",email:"david@bbc.co.uk",totalSaved:720.2,level:"Earth Champion"},{id:"leader_3",name:"Jane Goodall",email:"jane@roots.org",totalSaved:480,level:"Forest Guardian"},{id:"leader_4",name:"Leonardo DiCaprio",email:"leo@foundation.org",totalSaved:340.4,level:"Forest Guardian"},{id:"leader_5",name:"Boyan Slat",email:"boyan@theoceancleanup.com",totalSaved:290.1,level:"Forest Guardian"}].forEach(r=>{e.find(i=>i.email===r.email)||e.push(r)}),e.sort((n,r)=>(r.totalSaved||0)-(n.totalSaved||0)).slice(0,10)}try{const t=Vn(Ke,"users"),e=Ku(t,Ap("totalSaved","desc"),oT(10));return(await sa(e)).docs.map(r=>({id:r.id,...r.data()}))}catch(t){console.warn("Firestore getLeaderboard failed, falling back to localStorage:",t);const e=JSON.parse(localStorage.getItem("mock_users")||"{}"),n=Object.keys(e).map(r=>({id:r,...e[r]}));return n.length<5&&[{id:"leader_1",name:"Greta Thunberg",email:"greta@earth.org",totalSaved:850.5,level:"Earth Champion"},{id:"leader_2",name:"David Attenborough",email:"david@bbc.co.uk",totalSaved:720.2,level:"Earth Champion"},{id:"leader_3",name:"Jane Goodall",email:"jane@roots.org",totalSaved:480,level:"Forest Guardian"},{id:"leader_4",name:"Leonardo DiCaprio",email:"leo@foundation.org",totalSaved:340.4,level:"Forest Guardian"},{id:"leader_5",name:"Boyan Slat",email:"boyan@theoceancleanup.com",totalSaved:290.1,level:"Forest Guardian"}].forEach(i=>{n.find(s=>s.email===i.email)||n.push(i)}),n.sort((r,i)=>(i.totalSaved||0)-(r.totalSaved||0)).slice(0,10)}},dT=N.createContext();function fT(){return N.useContext(dT)}function vO({children:t}){const[e,n]=N.useState(null),[r,i]=N.useState(null),[s,o]=N.useState(!0);async function l(R,P,C){if(_e()){const O=JSON.parse(localStorage.getItem("mock_creds")||"{}");if(O[R.toLowerCase()])throw new Error("Email already in use.");const M="mock_"+Math.random().toString(36).substr(2,9);O[R.toLowerCase()]={uid:M,password:P,name:C},localStorage.setItem("mock_creds",JSON.stringify(O));const F={name:C,email:R,totalSaved:0,streak:3,level:"Seedling",joinedAt:new Date().toISOString(),onboardingComplete:!1};await Ga(M,F);const w={uid:M,email:R,displayName:C};return localStorage.setItem("mock_current_user",JSON.stringify(w)),n(w),i(F),w}const _=(await QP(jr,R,P)).user,v={name:C,email:R,totalSaved:0,streak:0,level:"Seedling",joinedAt:new Date,onboardingComplete:!1};return await Ga(_.uid,v),n(_),i(v),_}async function u(R,P){if(_e()){const O=JSON.parse(localStorage.getItem("mock_creds")||"{}")[R.toLowerCase()];if(!O||O.password!==P)throw new Error("Invalid email or password.");const M={uid:O.uid,email:R,displayName:O.name};localStorage.setItem("mock_current_user",JSON.stringify(M));const F=await gi(O.uid);return n(M),i(F),M}const T=(await JP(jr,R,P)).user,_=await gi(T.uid);return n(T),i(_),T}async function c(){if(_e()){const v="mock_google_123",O="eco.warrior@gmail.com",M="Eco Warrior",F={uid:v,email:O,displayName:M};localStorage.setItem("mock_current_user",JSON.stringify(F));const w=await gi(v);if(w)i(w);else{const y={name:M,email:O,totalSaved:15,streak:5,level:"Sapling",joinedAt:new Date().toISOString(),onboardingComplete:!0};await Ga(v,y),i(y)}return n(F),F}const R=new gn,C=(await wC(jr,R)).user,T=await gi(C.uid);let _=T;return T||(_={name:C.displayName,email:C.email,totalSaved:0,streak:0,level:"Seedling",joinedAt:new Date,onboardingComplete:!1},await Ga(C.uid,_)),n(C),i(_),C}async function f(){if(_e())return localStorage.removeItem("mock_current_user"),n(null),i(null),Promise.resolve();await eC(jr),n(null),i(null)}function p(R){return _e()?(Ce.success("Password reset email sent (Mock Mode)!"),Promise.resolve()):GP(jr,R)}async function m(R){if(_e()){if(!e)return;await h_(e.uid,R),i(P=>({...P,...R}));return}e&&(await h_(e.uid,R),i(P=>({...P,...R})))}N.useEffect(()=>{if(_e()){(async()=>{try{const C=localStorage.getItem("mock_current_user");if(C){const T=JSON.parse(C);n(T);const _=await gi(T.uid);i(_)}else n(null),i(null)}catch(C){console.error("Mock auth init error",C)}finally{o(!1)}})();return}return ZP(jr,async P=>{try{if(n(P),P){const C=await gi(P.uid);i(C)}else i(null)}catch(C){console.error("Error in onAuthStateChanged profile fetch:",C)}finally{o(!1)}})},[]);const I={currentUser:e,userProfile:r,loading:s,signup:l,login:u,loginWithGoogle:c,logout:f,resetPassword:p,updateProfile:m};return q.jsx(dT.Provider,{value:I,children:!s&&t})}const an=(t,e=[])=>JSON.parse(localStorage.getItem(t)||JSON.stringify(e)),Dr=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))};async function wO(t,e){if(_e()){const n=an("mock_activities",[]),r={id:"act_"+Math.random().toString(36).substring(2,9),userId:t,...e,timestamp:new Date().toISOString()};return n.unshift(r),Dr("mock_activities",n),await d_(t,e.co2),await f_(t),r}try{const n=await Ju(Vn(Ke,"activities"),{userId:t,...e,timestamp:oa()});return await d_(t,e.co2),await f_(t),{id:n.id,...e}}catch(n){throw console.error("Error logging activity:",n),n}}async function EO(t,e=30){if(_e()){const r=an("mock_activities",[]).filter(s=>s.userId===t),i=new Date;return i.setDate(i.getDate()-e),r.filter(s=>new Date(s.timestamp)>=i)}try{const n=Ku(Vn(Ke,"activities"),Tp("userId","==",t),Ap("timestamp","desc")),r=await sa(n),i=[];r.forEach(o=>{const l=o.data();i.push({id:o.id,...l})});const s=new Date;return s.setDate(s.getDate()-e),i.filter(o=>{var u;return((u=o.timestamp)!=null&&u.toDate?o.timestamp.toDate():new Date(o.timestamp))>=s})}catch(n){return console.error("Error fetching user activities:",n),[]}}async function d_(t,e){if(_e()){const n=an("mock_users",{});if(n[t]){const r=n[t];r.totalSaved=(r.totalSaved||0)+(e>0?e:0),r.monthlySaved=(r.monthlySaved||0)+(e>0?e:0),r.totalSaved>500?r.level="Forest":r.totalSaved>250?r.level="Tree":r.totalSaved>100?r.level="Sapling":r.level="Seedling",n[t]=r,Dr("mock_users",n),await m_(t,r.name,r.photoURL||"",r.monthlySaved)}return}try{const n=Nr(Ke,"users",t),r=await kp(n);if(r.exists()){const i=r.data(),s=(i.totalSaved||0)+(e>0?e:0),o=(i.monthlySaved||0)+(e>0?e:0);let l="Seedling";s>500?l="Forest":s>250?l="Tree":s>100&&(l="Sapling"),await Qu(n,{totalSaved:s,monthlySaved:o,level:l}),await m_(t,i.name||"Eco Warrior",i.photoURL||"",o)}}catch(n){console.error("Error updating user stats:",n)}}async function f_(t){if(_e()){const e=an("mock_users",{});if(e[t]){const n=e[t],r=new Date().toDateString(),i=n.lastLogDate?new Date(n.lastLogDate).toDateString():null;if(i===r)return;const s=new Date;s.setDate(s.getDate()-1);const o=s.toDateString();i===o?n.streak=(n.streak||0)+1:n.streak=1,n.lastLogDate=new Date().toISOString(),e[t]=n,Dr("mock_users",e)}return}try{const e=Nr(Ke,"users",t),n=await kp(e);if(n.exists()){const r=n.data(),i=new Date().toDateString(),s=r.lastLogDate?new Date(r.lastLogDate).toDateString():null;if(s===i)return;const o=new Date;o.setDate(o.getDate()-1);const l=o.toDateString();let u=1;s===l&&(u=(r.streak||0)+1),await Qu(e,{streak:u,lastLogDate:new Date().toISOString()})}}catch(e){console.error("Error updating streak:",e)}}async function TO(t){if(_e())return an("mock_goals",[]).filter(n=>n.userId===t);try{const e=Ku(Vn(Ke,"goals"),Tp("userId","==",t)),n=await sa(e),r=[];return n.forEach(i=>{r.push({id:i.id,...i.data()})}),r}catch(e){return console.error("Error getting user goals:",e),[]}}async function IO(t,e){if(_e()){const n=an("mock_goals",[]),r={id:"goal_"+Math.random().toString(36).substring(2,9),userId:t,...e,progress:0,createdAt:new Date().toISOString()};return n.push(r),Dr("mock_goals",n),r}try{return{id:(await Ju(Vn(Ke,"goals"),{userId:t,...e,progress:0,createdAt:oa()})).id,...e,progress:0}}catch(n){throw console.error("Error creating goal:",n),n}}async function SO(t,e){if(_e()){const n=an("mock_goals",[]),r=n.findIndex(i=>i.id===t);r!==-1&&(n[r].progress=e,e>=100&&(n[r].status="completed"),Dr("mock_goals",n));return}try{const n=Nr(Ke,"goals",t);await Qu(n,{progress:e,status:e>=100?"completed":"active"})}catch(n){console.error("Error updating goal progress:",n)}}const p_=[{id:"tip_1",title:"Switch to LED bulbs",description:"Replacing 5 bulbs saves ~18kg CO₂/year. Takes 10 minutes.",category:"energy",impactKg:18,difficulty:"easy",likes:0},{id:"tip_2",title:"One meat-free day per week",description:"Going veg just once a week saves ~170kg CO₂/year.",category:"food",impactKg:170,difficulty:"easy",likes:0},{id:"tip_3",title:"Carpool twice a week",description:"Sharing your commute 2x/week saves ~250kg CO₂/year.",category:"transport",impactKg:250,difficulty:"medium",likes:0},{id:"tip_4",title:"Wash clothes in cold water",description:"Cold wash uses 90% less energy — saves ~20kg CO₂/year.",category:"energy",impactKg:20,difficulty:"easy",likes:0},{id:"tip_5",title:"Take the bus instead of Ola",description:"Bus emits 5x less CO₂ per km than a solo cab ride.",category:"transport",impactKg:180,difficulty:"medium",likes:0},{id:"tip_6",title:"Buy local produce",description:"Locally sourced food cuts food-miles emissions by ~50%.",category:"food",impactKg:60,difficulty:"easy",likes:0},{id:"tip_7",title:"Unplug devices at night",description:"Standby power wastes ~10% of household electricity.",category:"energy",impactKg:30,difficulty:"easy",likes:0},{id:"tip_8",title:"Avoid fast fashion",description:"One fewer clothing purchase/month saves ~120kg CO₂/year.",category:"shopping",impactKg:120,difficulty:"medium",likes:0}];async function AO(){if(_e()){localStorage.getItem("mock_tips")||Dr("mock_tips",p_);return}try{if((await sa(Vn(Ke,"tips"))).empty){for(const e of p_){const{id:n,...r}=e;await Ju(Vn(Ke,"tips"),r)}console.log("Seeded tips collection successfully.")}}catch(t){console.error("Error seeding tips:",t)}}async function m_(t,e,n,r){if(_e()){const i=an("mock_leaderboard",[]),s=i.findIndex(l=>l.id===t),o={id:t,displayName:e,photoURL:n,thisMonthSaved:r,totalSaved:r};s!==-1?i[s]=o:i.push(o),Dr("mock_leaderboard",i);return}try{const i=Nr(Ke,"leaderboard",t);await hT(i,{displayName:e,photoURL:n,thisMonthSaved:r,updatedAt:oa()},{merge:!0})}catch(i){console.error("Error upserting leaderboard entry:",i)}}async function g2(t,e){if(_e()){const n=an("mock_insights",[]),r={id:"ins_"+Math.random().toString(36).substring(2,9),userId:t,...e,timestamp:new Date().toISOString()};return n.unshift(r),Dr("mock_insights",n),r}try{return{id:(await Ju(Vn(Ke,"insights"),{userId:t,...e,timestamp:oa()})).id,...e}}catch(n){throw console.error("Error saving insight:",n),n}}async function RO(t,e=7){if(_e())return an("mock_insights",[]).filter(r=>r.userId===t).slice(0,e);try{const n=Ku(Vn(Ke,"insights"),Tp("userId","==",t),Ap("timestamp","desc"),oT(e)),r=await sa(n),i=[];return r.forEach(s=>{i.push({id:s.id,...s.data()})}),i}catch(n){return console.error("Error getting insights:",n),[]}}const oh={transport:{car_petrol_km:.21,car_diesel_km:.17,bus_km:.089,train_km:.041,flight_km:.255,bike_km:0,walk_km:0},energy:{electricity_kwh:.82,gas_cubic_m:2,ac_hour:.5},food:{beef_meal:6.61,chicken_meal:1.57,vegetarian_meal:.5,vegan_meal:.3,fish_meal:1.96},shopping:{clothing_item:10,electronics_item:70,furniture_item:50},waste:{recycled_kg:-.5,landfill_kg:.5,compost_kg:-.3}},g_=t=>t.reduce((e,n)=>{const{category:r,type:i,amount:s}=n;if(oh[r]&&oh[r][i]!==void 0){const o=oh[r][i];return e+o*s}return e},0),pT=N.createContext();function y2(){return N.useContext(pT)}function kO({children:t}){const{currentUser:e}=fT(),[n,r]=N.useState([]),[i,s]=N.useState([]),[o,l]=N.useState([]),[u,c]=N.useState(!1),f=async()=>{if(!e)return;const v=await EO(e.uid,50);r(v)},p=async()=>{if(!e)return;const v=await TO(e.uid);s(v)},m=async()=>{if(!e)return;const v=await RO(e.uid);l(v)},I=async v=>{e&&(await wO(e.uid,v),await f())},R=async v=>{e&&(await IO(e.uid,v),await p())},P=async(v,O)=>{if(!e)return;await SO(v,(O==="completed"?"active":"completed")==="completed"?100:0),await p()};N.useEffect(()=>{e?(c(!0),Promise.all([f(),p(),m()]).finally(()=>c(!1))):(r([]),s([]),l([]))},[e]);const C=N.useMemo(()=>{const v=new Date;v.setDate(v.getDate()-7);const O=n.filter(M=>{var w;return((w=M.timestamp)!=null&&w.toDate?M.timestamp.toDate():new Date(M.timestamp))>=v});return g_(O)},[n]),T=N.useMemo(()=>{const v=new Date;v.setMonth(v.getMonth()-1);const O=n.filter(M=>{var w;return((w=M.timestamp)!=null&&w.toDate?M.timestamp.toDate():new Date(M.timestamp))>=v});return g_(O)},[n]),_={activities:n,goals:i,insights:o,weeklyTotal:C,monthlyTotal:T,loading:u,addActivity:I,fetchActivities:f,fetchGoals:p,addGoal:R,toggleGoal:P,fetchInsights:m};return q.jsx(pT.Provider,{value:_,children:t})}const PO=N.createContext(null),CO=typeof document<"u",mT=CO?N.useLayoutEffect:N.useEffect,NO=N.createContext({});function DO(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const xO=t=>t;class y_{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function OO(t){let e=new y_,n=new y_,r=0,i=!1,s=!1;const o=new WeakSet,l={schedule:(u,c=!1,f=!1)=>{const p=f&&i,m=p?e:n;return c&&o.add(u),m.add(u)&&p&&i&&(r=e.order.length),u},cancel:u=>{n.remove(u),o.delete(u)},process:u=>{if(i){s=!0;return}if(i=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let c=0;c<r;c++){const f=e.order[c];f(u),o.has(f)&&(l.schedule(f),t())}i=!1,s&&(s=!1,l.process(u))}};return l}const Qa=["prepare","read","update","preRender","render","postRender"],VO=40;function LO(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=Qa.reduce((p,m)=>(p[m]=OO(()=>n=!0),p),{}),o=p=>s[p].process(i),l=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,VO),1),i.timestamp=p,i.isProcessing=!0,Qa.forEach(o),i.isProcessing=!1,n&&e&&(r=!1,t(l))},u=()=>{n=!0,r=!0,i.isProcessing||t(l)};return{schedule:Qa.reduce((p,m)=>{const I=s[m];return p[m]=(R,P=!1,C=!1)=>(n||u(),I.schedule(R,P,C)),p},{}),cancel:p=>Qa.forEach(m=>s[m].cancel(p)),state:i,steps:s}}const{schedule:MO,cancel:_2,state:v2,steps:w2}=LO(typeof requestAnimationFrame<"u"?requestAnimationFrame:xO,!0);function gT(){const t=N.useRef(!1);return mT(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function bO(){const t=gT(),[e,n]=N.useState(0),r=N.useCallback(()=>{t.current&&n(e+1)},[e]);return[N.useCallback(()=>MO.postRender(r),[r]),e]}class FO extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function UO({children:t,isPresent:e}){const n=N.useId(),r=N.useRef(null),i=N.useRef({width:0,height:0,top:0,left:0});return N.useInsertionEffect(()=>{const{width:s,height:o,top:l,left:u}=i.current;if(e||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),N.createElement(FO,{isPresent:e,childRef:r,sizeRef:i},N.cloneElement(t,{ref:r}))}const ah=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const l=DO(jO),u=N.useId(),c=N.useMemo(()=>({id:u,initial:e,isPresent:n,custom:i,onExitComplete:f=>{l.set(f,!0);for(const p of l.values())if(!p)return;r&&r()},register:f=>(l.set(f,!1),()=>l.delete(f))}),s?void 0:[n]);return N.useMemo(()=>{l.forEach((f,p)=>l.set(p,!1))},[n]),N.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),o==="popLayout"&&(t=N.createElement(UO,{isPresent:n},t)),N.createElement(PO.Provider,{value:c},t)};function jO(){return new Map}function zO(t){return N.useEffect(()=>()=>t(),[])}const zr=t=>t.key||"";function $O(t,e){t.forEach(n=>{const r=zr(n);e.set(r,n)})}function BO(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const WO=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=N.useContext(NO).forceRender||bO()[0],u=gT(),c=BO(t);let f=c;const p=N.useRef(new Map).current,m=N.useRef(f),I=N.useRef(new Map).current,R=N.useRef(!0);if(mT(()=>{R.current=!1,$O(c,I),m.current=f}),zO(()=>{R.current=!0,I.clear(),p.clear()}),R.current)return N.createElement(N.Fragment,null,f.map(_=>N.createElement(ah,{key:zr(_),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},_)));f=[...f];const P=m.current.map(zr),C=c.map(zr),T=P.length;for(let _=0;_<T;_++){const v=P[_];C.indexOf(v)===-1&&!p.has(v)&&p.set(v,void 0)}return o==="wait"&&p.size&&(f=[]),p.forEach((_,v)=>{if(C.indexOf(v)!==-1)return;const O=I.get(v);if(!O)return;const M=P.indexOf(v);let F=_;if(!F){const w=()=>{p.delete(v);const y=Array.from(I.keys()).filter(E=>!C.includes(E));if(y.forEach(E=>I.delete(E)),m.current=c.filter(E=>{const S=zr(E);return S===v||y.includes(S)}),!p.size){if(u.current===!1)return;l(),r&&r()}};F=N.createElement(ah,{key:zr(O),isPresent:!1,onExitComplete:w,custom:e,presenceAffectsLayout:s,mode:o},O),p.set(v,F)}f.splice(M,0,F)}),f=f.map(_=>{const v=_.key;return p.has(v)?_:N.createElement(ah,{key:zr(_),isPresent:!0,presenceAffectsLayout:s,mode:o},_)}),N.createElement(N.Fragment,null,p.size?f:f.map(_=>N.cloneElement(_)))},yT=({size:t="md",className:e=""})=>{const n={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"};return q.jsx("div",{className:`flex justify-center items-center ${e}`,children:q.jsx("div",{className:`${n[t]} animate-spin rounded-full border-4 border-primary/20 border-t-primary`})})},qO=N.lazy(()=>vt(()=>import("./AppLayout-4cffe6ac.js"),["assets/AppLayout-4cffe6ac.js","assets/Avatar-5d0b4ad5.js","assets/createLucideIcon-c888ca34.js","assets/Badge-cda57248.js","assets/log-out-d0fc179c.js","assets/x-6a215c91.js","assets/flame-4718c51e.js","assets/motion-d61e06d0.js","assets/bot-a9fb25c1.js","assets/lightbulb-50a13b52.js","assets/target-4b90e0e1.js","assets/user-c1c41695.js"])),HO=N.lazy(()=>vt(()=>import("./Landing-3dbca120.js"),["assets/Landing-3dbca120.js","assets/leaf-b5b1e5ac.js","assets/createLucideIcon-c888ca34.js","assets/motion-d61e06d0.js","assets/arrow-right-2d166b0b.js"])),KO=N.lazy(()=>vt(()=>import("./Auth-00454967.js"),["assets/Auth-00454967.js","assets/Button-cb742d53.js","assets/Input-5aca385a.js","assets/motion-d61e06d0.js","assets/leaf-b5b1e5ac.js","assets/createLucideIcon-c888ca34.js","assets/user-c1c41695.js","assets/mail-b5254df6.js","assets/lock-7c7fb09e.js"])),GO=N.lazy(()=>vt(()=>import("./ForgotPassword-a58c2c57.js"),["assets/ForgotPassword-a58c2c57.js","assets/Button-cb742d53.js","assets/Input-5aca385a.js","assets/Card-a414bd32.js","assets/motion-d61e06d0.js","assets/mail-b5254df6.js","assets/createLucideIcon-c888ca34.js"])),QO=N.lazy(()=>vt(()=>import("./Onboarding-803d7903.js"),["assets/Onboarding-803d7903.js","assets/Button-cb742d53.js","assets/Card-a414bd32.js","assets/check-circle-2-cd3214c2.js","assets/createLucideIcon-c888ca34.js","assets/motion-d61e06d0.js","assets/car-6e6544d5.js","assets/home-9f311aa4.js","assets/utensils-ff12c555.js"])),JO=N.lazy(()=>vt(()=>import("./Dashboard-826f8551.js"),["assets/Dashboard-826f8551.js","assets/geminiService-4f421e96.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/Badge-cda57248.js","assets/ProgressBar-e7825fbf.js","assets/motion-d61e06d0.js","assets/plus-d47d82f4.js","assets/createLucideIcon-c888ca34.js","assets/message-square-24ca360e.js","assets/generateCategoricalChart-aea7f5e6.js","assets/BarChart-1b75f5f1.js","assets/flame-4718c51e.js","assets/arrow-right-2d166b0b.js","assets/car-6e6544d5.js","assets/leaf-b5b1e5ac.js","assets/zap-c75213d2.js","assets/target-4b90e0e1.js","assets/sparkles-7f075dbe.js","assets/lightbulb-50a13b52.js"])),YO=N.lazy(()=>vt(()=>import("./Tracker-6c865d15.js"),["assets/Tracker-6c865d15.js","assets/Button-cb742d53.js","assets/Modal-5636c5ac.js","assets/createLucideIcon-c888ca34.js","assets/motion-d61e06d0.js","assets/x-6a215c91.js","assets/Card-a414bd32.js","assets/Input-5aca385a.js","assets/Badge-cda57248.js","assets/plus-d47d82f4.js","assets/leaf-b5b1e5ac.js","assets/generateCategoricalChart-aea7f5e6.js","assets/PieChart-f60416b9.js","assets/arrow-right-2d166b0b.js","assets/car-6e6544d5.js","assets/zap-c75213d2.js","assets/utensils-ff12c555.js","assets/trash-2-560c8ee1.js"])),XO=N.lazy(()=>vt(()=>import("./AICoach-e4b2008c.js"),["assets/AICoach-e4b2008c.js","assets/geminiService-4f421e96.js","assets/Card-a414bd32.js","assets/Input-5aca385a.js","assets/Button-cb742d53.js","assets/sparkles-7f075dbe.js","assets/createLucideIcon-c888ca34.js","assets/user-c1c41695.js","assets/bot-a9fb25c1.js","assets/message-square-24ca360e.js","assets/loader-2-8139b239.js"])),ZO=N.lazy(()=>vt(()=>import("./Insights-eeb7434a.js"),["assets/Insights-eeb7434a.js","assets/geminiService-4f421e96.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/loader-2-8139b239.js","assets/createLucideIcon-c888ca34.js","assets/sparkles-7f075dbe.js","assets/lightbulb-50a13b52.js","assets/check-circle-2-cd3214c2.js","assets/generateCategoricalChart-aea7f5e6.js","assets/PieChart-f60416b9.js","assets/BarChart-1b75f5f1.js"])),e2=N.lazy(()=>vt(()=>import("./Goals-3b70439a.js"),["assets/Goals-3b70439a.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/ProgressBar-e7825fbf.js","assets/motion-d61e06d0.js","assets/Modal-5636c5ac.js","assets/createLucideIcon-c888ca34.js","assets/x-6a215c91.js","assets/Input-5aca385a.js","assets/plus-d47d82f4.js","assets/target-4b90e0e1.js","assets/sparkles-7f075dbe.js","assets/loader-2-8139b239.js"])),t2=N.lazy(()=>vt(()=>import("./Leaderboard-3b09fed9.js"),["assets/Leaderboard-3b09fed9.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/Avatar-5d0b4ad5.js","assets/createLucideIcon-c888ca34.js","assets/Badge-cda57248.js","assets/leaf-b5b1e5ac.js","assets/target-4b90e0e1.js","assets/loader-2-8139b239.js"])),n2=N.lazy(()=>vt(()=>import("./Tips-10d70656.js"),["assets/Tips-10d70656.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/Input-5aca385a.js","assets/Badge-cda57248.js","assets/PageHeader-1dd1a895.js","assets/sparkles-7f075dbe.js","assets/createLucideIcon-c888ca34.js","assets/loader-2-8139b239.js"])),r2=N.lazy(()=>vt(()=>import("./Profile-353db5b0.js"),["assets/Profile-353db5b0.js","assets/Card-a414bd32.js","assets/Button-cb742d53.js","assets/Input-5aca385a.js","assets/ProgressBar-e7825fbf.js","assets/motion-d61e06d0.js","assets/PageHeader-1dd1a895.js","assets/user-c1c41695.js","assets/createLucideIcon-c888ca34.js","assets/flame-4718c51e.js","assets/leaf-b5b1e5ac.js","assets/target-4b90e0e1.js","assets/lock-7c7fb09e.js","assets/trash-2-560c8ee1.js","assets/log-out-d0fc179c.js"])),i2=N.lazy(()=>vt(()=>import("./NotFound-92cd33a6.js"),["assets/NotFound-92cd33a6.js","assets/Button-cb742d53.js","assets/createLucideIcon-c888ca34.js","assets/home-9f311aa4.js"])),__=({children:t})=>{const{currentUser:e,userProfile:n,loading:r}=fT();return r?q.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#F8FAF8]",children:q.jsx(yT,{size:"lg"})}):e?n&&!n.onboardingComplete&&window.location.pathname!=="/onboarding"?q.jsx(Hg,{to:"/onboarding"}):t:q.jsx(Hg,{to:"/auth"})},s2=()=>{const t=ls();return q.jsx(WO,{mode:"wait",children:q.jsx(N.Suspense,{fallback:q.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#F8FAF8]",children:q.jsx(yT,{size:"lg"})}),children:q.jsxs(yA,{location:t,children:[q.jsx(at,{path:"/",element:q.jsx(HO,{})}),q.jsx(at,{path:"/auth",element:q.jsx(KO,{})}),q.jsx(at,{path:"/forgot-password",element:q.jsx(GO,{})}),q.jsx(at,{path:"/onboarding",element:q.jsx(__,{children:q.jsx(QO,{})})}),q.jsxs(at,{path:"/",element:q.jsx(__,{children:q.jsx(qO,{})}),children:[q.jsx(at,{path:"dashboard",element:q.jsx(JO,{})}),q.jsx(at,{path:"tracker",element:q.jsx(YO,{})}),q.jsx(at,{path:"coach",element:q.jsx(XO,{})}),q.jsx(at,{path:"insights",element:q.jsx(ZO,{})}),q.jsx(at,{path:"goals",element:q.jsx(e2,{})}),q.jsx(at,{path:"leaderboard",element:q.jsx(t2,{})}),q.jsx(at,{path:"tips",element:q.jsx(n2,{})}),q.jsx(at,{path:"profile",element:q.jsx(r2,{})})]}),q.jsx(at,{path:"*",element:q.jsx(i2,{})})]},t.pathname)})})},o2=()=>{const[t,e]=N.useState(()=>_e()),n=()=>{const r=!t;localStorage.setItem("force_mock_mode",r?"true":"false"),e(r),window.location.reload()};return q.jsxs("div",{className:"fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 bg-white shadow-xl hover:shadow-2xl border border-gray-200/80 px-4 py-3 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5",children:[q.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${t?"bg-emerald-500 animate-pulse":"bg-blue-500 animate-pulse"}`}),q.jsx("span",{className:"text-xs font-bold text-gray-700 select-none",children:t?"Mock DB (Offline)":"Live Firebase"}),q.jsx("button",{onClick:n,className:"ml-1.5 text-[10px] font-black uppercase tracking-wider text-green-700 bg-green-50 hover:bg-green-100 active:bg-green-200 border border-green-200 px-2 py-1 rounded-lg transition-colors",children:"Toggle"})]})};function a2(){return N.useEffect(()=>{AO()},[]),q.jsx(vO,{children:q.jsx(kO,{children:q.jsxs(SA,{children:[q.jsx(mR,{position:"top-center",toastOptions:{duration:4e3,style:{background:"#FFFFFF",color:"#0F1C14",borderRadius:"16px",fontWeight:"bold",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.05)"}}}),q.jsx(s2,{}),q.jsx(o2,{})]})})})}lh.createRoot(document.getElementById("root")).render(q.jsx(C_.StrictMode,{children:q.jsx(a2,{})}));export{WO as A,c2 as L,u2 as O,PO as P,C_ as R,ls as a,F0 as b,y2 as c,oh as d,QT as e,l2 as f,gi as g,m2 as h,mT as i,q as j,CO as k,NO as l,DO as m,Ce as n,MO as o,xO as p,_2 as q,N as r,g2 as s,v2 as t,fT as u,w2 as v,h2 as z};
