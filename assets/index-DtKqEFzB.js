(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var z0={exports:{}},Du={},V0={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),gM=Symbol.for("react.portal"),vM=Symbol.for("react.fragment"),_M=Symbol.for("react.strict_mode"),yM=Symbol.for("react.profiler"),xM=Symbol.for("react.provider"),SM=Symbol.for("react.context"),MM=Symbol.for("react.forward_ref"),EM=Symbol.for("react.suspense"),TM=Symbol.for("react.memo"),wM=Symbol.for("react.lazy"),Bp=Symbol.iterator;function AM(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var H0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,W0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||H0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X0(){}X0.prototype=ao.prototype;function Qd(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||H0}var Jd=Qd.prototype=new X0;Jd.constructor=Qd;G0(Jd,ao.prototype);Jd.isPureReactComponent=!0;var zp=Array.isArray,j0=Object.prototype.hasOwnProperty,eh={current:null},Y0={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,i)&&!Y0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ea,type:t,key:s,ref:o,props:r,_owner:eh.current}}function CM(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function RM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RM(""+t.key):e.toString(36)}function Ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case gM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uc(o,0):i,zp(r)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),Ll(r,e,n,"",function(u){return u})):r!=null&&(th(r)&&(r=CM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uc(s,a);o+=Ll(s,e,n,l,r)}else if(l=AM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,a++),o+=Ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var i=[],r=0;return Ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function PM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Dl={transition:null},bM={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:eh};function q0(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ao;Ge.Fragment=vM;Ge.Profiler=yM;Ge.PureComponent=Qd;Ge.StrictMode=_M;Ge.Suspense=EM;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bM;Ge.act=q0;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j0.call(e,l)&&!Y0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ea,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:SM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xM,_context:t},t.Consumer=t};Ge.createElement=$0;Ge.createFactory=function(t){var e=$0.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:MM,render:t}};Ge.isValidElement=th;Ge.lazy=function(t){return{$$typeof:wM,_payload:{_status:-1,_result:t},_init:PM}};Ge.memo=function(t,e){return{$$typeof:TM,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};Ge.unstable_act=q0;Ge.useCallback=function(t,e){return en.current.useCallback(t,e)};Ge.useContext=function(t){return en.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return en.current.useEffect(t,e)};Ge.useId=function(){return en.current.useId()};Ge.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return en.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Ge.useRef=function(t){return en.current.useRef(t)};Ge.useState=function(t){return en.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return en.current.useTransition()};Ge.version="18.3.1";V0.exports=Ge;var me=V0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LM=me,DM=Symbol.for("react.element"),NM=Symbol.for("react.fragment"),UM=Object.prototype.hasOwnProperty,IM=LM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FM={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)UM.call(e,i)&&!FM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:DM,type:t,key:s,ref:o,props:r,_owner:IM.current}}Du.Fragment=NM;Du.jsx=K0;Du.jsxs=K0;z0.exports=Du;var ae=z0.exports,Z0={exports:{}},Mn={},Q0={exports:{}},J0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,I){var z=b.length;b.push(I);e:for(;0<z;){var q=z-1>>>1,re=b[q];if(0<r(re,I))b[q]=I,b[z]=re,z=q;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var I=b[0],z=b.pop();if(z!==I){b[0]=z;e:for(var q=0,re=b.length,Ce=re>>>1;q<Ce;){var V=2*(q+1)-1,Z=b[V],ue=V+1,Ee=b[ue];if(0>r(Z,z))ue<re&&0>r(Ee,Z)?(b[q]=Ee,b[ue]=z,q=ue):(b[q]=Z,b[V]=z,q=V);else if(ue<re&&0>r(Ee,z))b[q]=Ee,b[ue]=z,q=ue;else break e}}return I}function r(b,I){var z=b.sortIndex-I.sortIndex;return z!==0?z:b.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=b)i(u),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(u)}}function S(b){if(y=!1,g(b),!_)if(n(l)!==null)_=!0,W(w);else{var I=n(u);I!==null&&j(S,I.startTime-b)}}function w(b,I){_=!1,y&&(y=!1,d(P),P=-1),p=!0;var z=h;try{for(g(I),f=n(l);f!==null&&(!(f.expirationTime>I)||b&&!R());){var q=f.callback;if(typeof q=="function"){f.callback=null,h=f.priorityLevel;var re=q(f.expirationTime<=I);I=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&i(l),g(I)}else i(l);f=n(l)}if(f!==null)var Ce=!0;else{var V=n(u);V!==null&&j(S,V.startTime-I),Ce=!1}return Ce}finally{f=null,h=z,p=!1}}var A=!1,T=null,P=-1,X=5,x=-1;function R(){return!(t.unstable_now()-x<X)}function ee(){if(T!==null){var b=t.unstable_now();x=b;var I=!0;try{I=T(!0,b)}finally{I?K():(A=!1,T=null)}}else A=!1}var K;if(typeof v=="function")K=function(){v(ee)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Y=L.port2;L.port1.onmessage=ee,K=function(){Y.postMessage(null)}}else K=function(){m(ee,0)};function W(b){T=b,A||(A=!0,K())}function j(b,I){P=m(function(){b(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,W(w))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var z=h;h=I;try{return b()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,I){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=h;h=b;try{return I()}finally{h=z}},t.unstable_scheduleCallback=function(b,I,z){var q=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?q+z:q):z=q,b){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,b={id:c++,callback:I,priorityLevel:b,startTime:z,expirationTime:re,sortIndex:-1},z>q?(b.sortIndex=z,e(u,b),n(l)===null&&b===n(u)&&(y?(d(P),P=-1):y=!0,j(S,z-q))):(b.sortIndex=re,e(l,b),_||p||(_=!0,W(w))),b},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(b){var I=h;return function(){var z=h;h=I;try{return b.apply(this,arguments)}finally{h=z}}}})(J0);Q0.exports=J0;var OM=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kM=me,xn=OM;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e_=new Set,ta={};function ts(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(ta[t]=e,t=0;t<e.length;t++)e_.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=Object.prototype.hasOwnProperty,BM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},Gp={};function zM(t){return bf.call(Gp,t)?!0:bf.call(Hp,t)?!1:BM.test(t)?Gp[t]=!0:(Hp[t]=!0,!1)}function VM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HM(t,e,n,i){if(e===null||typeof e>"u"||VM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);kt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HM(e,n,r,i)&&(n=null),i||r===null?zM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=kM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),i_=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,cc;function No(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var fc=!1;function dc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function GM(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function Uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case Lf:return"Profiler";case sh:return"StrictMode";case Df:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n_:return(t.displayName||"Context")+".Consumer";case t_:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:Uf(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Uf(t(e))}catch{}}return null}function WM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uf(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XM(t){var e=r_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=XM(t))}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=r_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function If(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function Ff(t,e){o_(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Of(t,e.type,n):e.hasOwnProperty("defaultValue")&&Of(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Of(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Uo(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function a_(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jM=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){jM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function c_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function f_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=c_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var YM=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(YM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hf=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gf=null,Vs=null,Hs=null;function qp(t){if(t=Aa(t)){if(typeof Gf!="function")throw Error(J(280));var e=t.stateNode;e&&(e=Ou(e),Gf(t.stateNode,t.type,e))}}function d_(t){Vs?Hs?Hs.push(t):Hs=[t]:Vs=t}function h_(){if(Vs){var t=Vs,e=Hs;if(Hs=Vs=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function p_(t,e){return t(e)}function m_(){}var hc=!1;function g_(t,e,n){if(hc)return t(e,n);hc=!0;try{return p_(t,e,n)}finally{hc=!1,(Vs!==null||Hs!==null)&&(m_(),h_())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Ou(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Wf=!1;if(Ri)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Wf=!1}function $M(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Vo=!1,Kl=null,Zl=!1,Xf=null,qM={onError:function(t){Vo=!0,Kl=t}};function KM(t,e,n,i,r,s,o,a,l){Vo=!1,Kl=null,$M.apply(qM,arguments)}function ZM(t,e,n,i,r,s,o,a,l){if(KM.apply(this,arguments),Vo){if(Vo){var u=Kl;Vo=!1,Kl=null}else throw Error(J(198));Zl||(Zl=!0,Xf=u)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if(ns(t)!==t)throw Error(J(188))}function QM(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kp(r),t;if(s===i)return Kp(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function __(t){return t=QM(t),t!==null?y_(t):null}function y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y_(t);if(e!==null)return e;t=t.sibling}return null}var x_=xn.unstable_scheduleCallback,Zp=xn.unstable_cancelCallback,JM=xn.unstable_shouldYield,eE=xn.unstable_requestPaint,yt=xn.unstable_now,tE=xn.unstable_getCurrentPriorityLevel,uh=xn.unstable_ImmediatePriority,S_=xn.unstable_UserBlockingPriority,Ql=xn.unstable_NormalPriority,nE=xn.unstable_LowPriority,M_=xn.unstable_IdlePriority,Nu=null,oi=null;function iE(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Nu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:oE,rE=Math.log,sE=Math.LN2;function oE(t){return t>>>=0,t===0?32:31-(rE(t)/sE|0)|0}var Wa=64,Xa=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function aE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=aE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E_(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function uE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function T_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,fh,A_,C_,R_,Yf=!1,ja=[],Ji=null,er=null,tr=null,ra=new Map,sa=new Map,Yi=[],cE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&fh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fE(t,e,n,i,r){switch(e){case"focusin":return Ji=_o(Ji,t,e,n,i,r),!0;case"dragenter":return er=_o(er,t,e,n,i,r),!0;case"mouseover":return tr=_o(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,_o(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,_o(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function P_(t){var e=Or(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,R_(t.priority,function(){A_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hf=i,n.target.dispatchEvent(i),Hf=null}else return e=Aa(n),e!==null&&fh(e),t.blockedOn=n,!1;e.shift()}return!0}function Jp(t,e,n){Nl(t)&&n.delete(e)}function dE(){Yf=!1,Ji!==null&&Nl(Ji)&&(Ji=null),er!==null&&Nl(er)&&(er=null),tr!==null&&Nl(tr)&&(tr=null),ra.forEach(Jp),sa.forEach(Jp)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Yf||(Yf=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,dE)))}function oa(t){function e(r){return yo(r,t)}if(0<ja.length){yo(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&yo(Ji,t),er!==null&&yo(er,t),tr!==null&&yo(tr,t),ra.forEach(e),sa.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&Yi.shift()}var Gs=Ui.ReactCurrentBatchConfig,eu=!0;function hE(t,e,n,i){var r=Qe,s=Gs.transition;Gs.transition=null;try{Qe=1,dh(t,e,n,i)}finally{Qe=r,Gs.transition=s}}function pE(t,e,n,i){var r=Qe,s=Gs.transition;Gs.transition=null;try{Qe=4,dh(t,e,n,i)}finally{Qe=r,Gs.transition=s}}function dh(t,e,n,i){if(eu){var r=$f(t,e,n,i);if(r===null)Tc(t,e,i,tu,n),Qp(t,i);else if(fE(r,t,e,n,i))i.stopPropagation();else if(Qp(t,i),e&4&&-1<cE.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&w_(s),s=$f(t,e,n,i),s===null&&Tc(t,e,i,tu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var tu=null;function $f(t,e,n,i){if(tu=null,t=lh(i),t=Or(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tE()){case uh:return 1;case S_:return 4;case Ql:case nE:return 16;case M_:return 536870912;default:return 16}default:return 16}}var Ki=null,hh=null,Ul=null;function L_(){if(Ul)return Ul;var t,e=hh,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function em(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:em,this.isPropagationStopped=em,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=En(lo),wa=ht({},lo,{view:0,detail:0}),mE=En(wa),mc,gc,xo,Uu=ht({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(mc=t.screenX-xo.screenX,gc=t.screenY-xo.screenY):gc=mc=0,xo=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),tm=En(Uu),gE=ht({},Uu,{dataTransfer:0}),vE=En(gE),_E=ht({},wa,{relatedTarget:0}),vc=En(_E),yE=ht({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),xE=En(yE),SE=ht({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ME=En(SE),EE=ht({},lo,{data:0}),nm=En(EE),TE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AE[t])?!!e[t]:!1}function mh(){return CE}var RE=ht({},wa,{key:function(t){if(t.key){var e=TE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PE=En(RE),bE=ht({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=En(bE),LE=ht({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),DE=En(LE),NE=ht({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),UE=En(NE),IE=ht({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FE=En(IE),OE=[9,13,27,32],gh=Ri&&"CompositionEvent"in window,Ho=null;Ri&&"documentMode"in document&&(Ho=document.documentMode);var kE=Ri&&"TextEvent"in window&&!Ho,D_=Ri&&(!gh||Ho&&8<Ho&&11>=Ho),rm=" ",sm=!1;function N_(t,e){switch(t){case"keyup":return OE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function BE(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(sm=!0,rm);case"textInput":return t=e.data,t===rm&&sm?null:t;default:return null}}function zE(t,e){if(Es)return t==="compositionend"||!gh&&N_(t,e)?(t=L_(),Ul=hh=Ki=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VE[t.type]:e==="textarea"}function I_(t,e,n,i){d_(i),e=nu(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,aa=null;function HE(t){j_(t,0)}function Iu(t){var e=As(t);if(s_(e))return t}function GE(t,e){if(t==="change")return e}var F_=!1;if(Ri){var _c;if(Ri){var yc="oninput"in document;if(!yc){var am=document.createElement("div");am.setAttribute("oninput","return;"),yc=typeof am.oninput=="function"}_c=yc}else _c=!1;F_=_c&&(!document.documentMode||9<document.documentMode)}function lm(){Go&&(Go.detachEvent("onpropertychange",O_),aa=Go=null)}function O_(t){if(t.propertyName==="value"&&Iu(aa)){var e=[];I_(e,aa,t,lh(t)),g_(HE,e)}}function WE(t,e,n){t==="focusin"?(lm(),Go=e,aa=n,Go.attachEvent("onpropertychange",O_)):t==="focusout"&&lm()}function XE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(aa)}function jE(t,e){if(t==="click")return Iu(e)}function YE(t,e){if(t==="input"||t==="change")return Iu(e)}function $E(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:$E;function la(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bf.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,e){var n=um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function k_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B_(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qE(t){var e=B_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k_(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=cm(n,s);var o=cm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KE=Ri&&"documentMode"in document&&11>=document.documentMode,Ts=null,qf=null,Wo=null,Kf=!1;function fm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||Ts==null||Ts!==ql(i)||(i=Ts,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&la(Wo,i)||(Wo=i,i=nu(qf,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},xc={},z_={};Ri&&(z_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Fu(t){if(xc[t])return xc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z_)return xc[t]=e[n];return t}var V_=Fu("animationend"),H_=Fu("animationiteration"),G_=Fu("animationstart"),W_=Fu("transitionend"),X_=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){X_.set(t,e),ts(e,[t])}for(var Sc=0;Sc<dm.length;Sc++){var Mc=dm[Sc],ZE=Mc.toLowerCase(),QE=Mc[0].toUpperCase()+Mc.slice(1);mr(ZE,"on"+QE)}mr(V_,"onAnimationEnd");mr(H_,"onAnimationIteration");mr(G_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(W_,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function hm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ZM(i,e,void 0,t),t.currentTarget=null}function j_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hm(r,a,u),s=l}}}if(Zl)throw t=Xf,Zl=!1,Xf=null,t}function it(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var i=t+"__bubble";n.has(i)||(Y_(e,t,2,!1),n.add(i))}function Ec(t,e,n){var i=0;e&&(i|=4),Y_(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[qa]){t[qa]=!0,e_.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||Ec(n,!1,t),Ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,Ec("selectionchange",!1,e))}}function Y_(t,e,n,i){switch(b_(e)){case 1:var r=hE;break;case 4:r=pE;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!Wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}g_(function(){var u=s,c=lh(n),f=[];e:{var h=X_.get(t);if(h!==void 0){var p=ph,_=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=PE;break;case"focusin":_="focus",p=vc;break;case"focusout":_="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=vE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=DE;break;case V_:case H_:case G_:p=xE;break;case W_:p=UE;break;case"scroll":p=mE;break;case"wheel":p=FE;break;case"copy":case"cut":case"paste":p=ME;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=im}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=ia(v,d),S!=null&&y.push(ca(v,S,g)))),m)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Hf&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[Pi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Or(_):null,_!==null&&(m=ns(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=tm,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=im,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:As(p),g=_==null?h:As(_),h=new y(S,v+"leave",p,n,c),h.target=m,h.relatedTarget=g,S=null,Or(c)===u&&(y=new y(d,v+"enter",_,n,c),y.target=g,y.relatedTarget=m,S=y),m=S,p&&_)t:{for(y=p,d=_,v=0,g=y;g;g=rs(g))v++;for(g=0,S=d;S;S=rs(S))g++;for(;0<v-g;)y=rs(y),v--;for(;0<g-v;)d=rs(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=rs(y),d=rs(d)}y=null}else y=null;p!==null&&pm(f,h,p,y,!1),_!==null&&m!==null&&pm(f,m,_,y,!0)}}e:{if(h=u?As(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=GE;else if(om(h))if(F_)w=YE;else{w=XE;var A=WE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=jE);if(w&&(w=w(t,u))){I_(f,w,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Of(h,"number",h.value)}switch(A=u?As(u):window,t){case"focusin":(om(A)||A.contentEditable==="true")&&(Ts=A,qf=u,Wo=null);break;case"focusout":Wo=qf=Ts=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,fm(f,n,c);break;case"selectionchange":if(KE)break;case"keydown":case"keyup":fm(f,n,c)}var T;if(gh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Es?N_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(D_&&n.locale!=="ko"&&(Es||P!=="onCompositionStart"?P==="onCompositionEnd"&&Es&&(T=L_()):(Ki=c,hh="value"in Ki?Ki.value:Ki.textContent,Es=!0)),A=nu(u,P),0<A.length&&(P=new nm(P,t,null,n,c),f.push({event:P,listeners:A}),T?P.data=T:(T=U_(n),T!==null&&(P.data=T)))),(T=kE?BE(t,n):zE(t,n))&&(u=nu(u,"onBeforeInput"),0<u.length&&(c=new nm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}j_(f,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ca(t,s,r)),s=ia(t,e),s!=null&&i.push(ca(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ia(n,s),l!=null&&o.unshift(ca(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eT=/\r\n?/g,tT=/\u0000|\uFFFD/g;function mm(t){return(typeof t=="string"?t:""+t).replace(eT,`
`).replace(tT,"")}function Ka(t,e,n){if(e=mm(e),mm(t)!==e&&n)throw Error(J(425))}function iu(){}var Zf=null,Qf=null;function Jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,nT=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,iT=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(t){return gm.resolve(null).then(t).catch(rT)}:ed;function rT(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),ii="__reactFiber$"+uo,fa="__reactProps$"+uo,Pi="__reactContainer$"+uo,td="__reactEvents$"+uo,sT="__reactListeners$"+uo,oT="__reactHandles$"+uo;function Or(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[ii])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[ii]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function Ou(t){return t[fa]||null}var nd=[],Cs=-1;function gr(t){return{current:t}}function st(t){0>Cs||(t.current=nd[Cs],nd[Cs]=null,Cs--)}function nt(t,e){Cs++,nd[Cs]=t.current,t.current=e}var fr={},Yt=gr(fr),ln=gr(!1),$r=fr;function qs(t,e){var n=t.type.contextTypes;if(!n)return fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function ru(){st(ln),st(Yt)}function _m(t,e,n){if(Yt.current!==fr)throw Error(J(168));nt(Yt,e),nt(ln,n)}function $_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,WM(t)||"Unknown",r));return ht({},n,i)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,$r=Yt.current,nt(Yt,t),nt(ln,ln.current),!0}function ym(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=$_(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,st(ln),st(Yt),nt(Yt,t)):st(ln),nt(ln,n)}var _i=null,ku=!1,Ac=!1;function q_(t){_i===null?_i=[t]:_i.push(t)}function aT(t){ku=!0,q_(t)}function vr(){if(!Ac&&_i!==null){Ac=!0;var t=0,e=Qe;try{var n=_i;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,ku=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),x_(uh,vr),r}finally{Qe=e,Ac=!1}}return null}var Rs=[],Ps=0,ou=null,au=0,Pn=[],bn=0,qr=null,Si=1,Mi="";function Pr(t,e){Rs[Ps++]=au,Rs[Ps++]=ou,ou=t,au=e}function K_(t,e,n){Pn[bn++]=Si,Pn[bn++]=Mi,Pn[bn++]=qr,qr=t;var i=Si;t=Mi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Yn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function _h(t){t.return!==null&&(Pr(t,1),K_(t,1,0))}function yh(t){for(;t===ou;)ou=Rs[--Ps],Rs[Ps]=null,au=Rs[--Ps],Rs[Ps]=null;for(;t===qr;)qr=Pn[--bn],Pn[bn]=null,Mi=Pn[--bn],Pn[bn]=null,Si=Pn[--bn],Pn[bn]=null}var yn=null,_n=null,lt=!1,Wn=null;function Z_(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rd(t){if(lt){var e=_n;if(e){var n=e;if(!xm(t,e)){if(id(t))throw Error(J(418));e=nr(n.nextSibling);var i=yn;e&&xm(t,e)?Z_(i,n):(t.flags=t.flags&-4097|2,lt=!1,yn=t)}}else{if(id(t))throw Error(J(418));t.flags=t.flags&-4097|2,lt=!1,yn=t}}}function Sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Za(t){if(t!==yn)return!1;if(!lt)return Sm(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jf(t.type,t.memoizedProps)),e&&(e=_n)){if(id(t))throw Q_(),Error(J(418));for(;e;)Z_(t,e),e=nr(e.nextSibling)}if(Sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?nr(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=_n;t;)t=nr(t.nextSibling)}function Ks(){_n=yn=null,lt=!1}function xh(t){Wn===null?Wn=[t]:Wn.push(t)}var lT=Ui.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mm(t){var e=t._init;return e(t._payload)}function J_(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=or(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,S){return v===null||v.tag!==6?(v=Nc(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,S){var w=g.type;return w===Ms?c(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Mm(w)===v.type)?(S=r(v,g.props),S.ref=So(d,v,g),S.return=d,S):(S=Hl(g.type,g.key,g.props,null,d.mode,S),S.ref=So(d,v,g),S.return=d,S)}function u(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Uc(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function c(d,v,g,S,w){return v===null||v.tag!==7?(v=Gr(g,d.mode,S,w),v.return=d,v):(v=r(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return g=Hl(v.type,v.key,v.props,null,d.mode,g),g.ref=So(d,null,v),g.return=d,g;case Ss:return v=Uc(v,d.mode,g),v.return=d,v;case Xi:var S=v._init;return f(d,S(v._payload),g)}if(Uo(v)||go(v))return v=Gr(v,d.mode,g,null),v.return=d,v;Qa(d,v)}return null}function h(d,v,g,S){var w=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:return g.key===w?l(d,v,g,S):null;case Ss:return g.key===w?u(d,v,g,S):null;case Xi:return w=g._init,h(d,v,w(g._payload),S)}if(Uo(g)||go(g))return w!==null?null:c(d,v,g,S,null);Qa(d,g)}return null}function p(d,v,g,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,a(v,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:return d=d.get(S.key===null?g:S.key)||null,l(v,d,S,w);case Ss:return d=d.get(S.key===null?g:S.key)||null,u(v,d,S,w);case Xi:var A=S._init;return p(d,v,g,A(S._payload),w)}if(Uo(S)||go(S))return d=d.get(g)||null,c(v,d,S,w,null);Qa(v,S)}return null}function _(d,v,g,S){for(var w=null,A=null,T=v,P=v=0,X=null;T!==null&&P<g.length;P++){T.index>P?(X=T,T=null):X=T.sibling;var x=h(d,T,g[P],S);if(x===null){T===null&&(T=X);break}t&&T&&x.alternate===null&&e(d,T),v=s(x,v,P),A===null?w=x:A.sibling=x,A=x,T=X}if(P===g.length)return n(d,T),lt&&Pr(d,P),w;if(T===null){for(;P<g.length;P++)T=f(d,g[P],S),T!==null&&(v=s(T,v,P),A===null?w=T:A.sibling=T,A=T);return lt&&Pr(d,P),w}for(T=i(d,T);P<g.length;P++)X=p(T,d,P,g[P],S),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?P:X.key),v=s(X,v,P),A===null?w=X:A.sibling=X,A=X);return t&&T.forEach(function(R){return e(d,R)}),lt&&Pr(d,P),w}function y(d,v,g,S){var w=go(g);if(typeof w!="function")throw Error(J(150));if(g=w.call(g),g==null)throw Error(J(151));for(var A=w=null,T=v,P=v=0,X=null,x=g.next();T!==null&&!x.done;P++,x=g.next()){T.index>P?(X=T,T=null):X=T.sibling;var R=h(d,T,x.value,S);if(R===null){T===null&&(T=X);break}t&&T&&R.alternate===null&&e(d,T),v=s(R,v,P),A===null?w=R:A.sibling=R,A=R,T=X}if(x.done)return n(d,T),lt&&Pr(d,P),w;if(T===null){for(;!x.done;P++,x=g.next())x=f(d,x.value,S),x!==null&&(v=s(x,v,P),A===null?w=x:A.sibling=x,A=x);return lt&&Pr(d,P),w}for(T=i(d,T);!x.done;P++,x=g.next())x=p(T,d,P,x.value,S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?P:x.key),v=s(x,v,P),A===null?w=x:A.sibling=x,A=x);return t&&T.forEach(function(ee){return e(d,ee)}),lt&&Pr(d,P),w}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Ms&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:e:{for(var w=g.key,A=v;A!==null;){if(A.key===w){if(w=g.type,w===Ms){if(A.tag===7){n(d,A.sibling),v=r(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Mm(w)===A.type){n(d,A.sibling),v=r(A,g.props),v.ref=So(d,A,g),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===Ms?(v=Gr(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=Hl(g.type,g.key,g.props,null,d.mode,S),S.ref=So(d,v,g),S.return=d,d=S)}return o(d);case Ss:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Uc(g,d.mode,S),v.return=d,d=v}return o(d);case Xi:return A=g._init,m(d,v,A(g._payload),S)}if(Uo(g))return _(d,v,g,S);if(go(g))return y(d,v,g,S);Qa(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=Nc(g,d.mode,S),v.return=d,d=v),o(d)):n(d,v)}return m}var Zs=J_(!0),ey=J_(!1),lu=gr(null),uu=null,bs=null,Sh=null;function Mh(){Sh=bs=uu=null}function Eh(t){var e=lu.current;st(lu),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){uu=t,Sh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(uu===null)throw Error(J(308));bs=t,uu.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var kr=null;function Th(t){kr===null?kr=[t]:kr.push(t)}function ty(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Th(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ny(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function Em(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=ht({},f,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=f}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Ca={},ai=gr(Ca),da=gr(Ca),ha=gr(Ca);function Br(t){if(t===Ca)throw Error(J(174));return t}function Ah(t,e){switch(nt(ha,e),nt(da,t),nt(ai,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}st(ai),nt(ai,e)}function Qs(){st(ai),st(da),st(ha)}function iy(t){Br(ha.current);var e=Br(ai.current),n=Bf(e,t.type);e!==n&&(nt(da,t),nt(ai,n))}function Ch(t){da.current===t&&(st(ai),st(da))}var ct=gr(0);function fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Rh(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Ol=Ui.ReactCurrentDispatcher,Rc=Ui.ReactCurrentBatchConfig,Kr=0,dt=null,Tt=null,Lt=null,du=!1,Xo=!1,pa=0,uT=0;function zt(){throw Error(J(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function bh(t,e,n,i,r,s){if(Kr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?hT:pT,t=n(i,r),Xo){s=0;do{if(Xo=!1,pa=0,25<=s)throw Error(J(301));s+=1,Lt=Tt=null,e.updateQueue=null,Ol.current=mT,t=n(i,r)}while(Xo)}if(Ol.current=hu,e=Tt!==null&&Tt.next!==null,Kr=0,Lt=Tt=dt=null,du=!1,e)throw Error(J(300));return t}function Lh(){var t=pa!==0;return pa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function In(){if(Tt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?dt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(J(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ma(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=In(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Kr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=In(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ry(){}function sy(t,e){var n=dt,i=In(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Dh(ly.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,ga(9,ay.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(J(349));Kr&30||oy(n,e,r)}return r}function oy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ay(t,e,n,i){e.value=n,e.getSnapshot=i,uy(e)&&cy(t)}function ly(t,e,n){return n(function(){uy(e)&&cy(t)})}function uy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function cy(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function wm(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=dT.bind(null,dt,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fy(){return In().memoizedState}function kl(t,e,n,i){var r=ei();dt.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Bu(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Ph(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}dt.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function Am(t,e){return kl(8390656,8,t,e)}function Dh(t,e){return Bu(2048,8,t,e)}function dy(t,e){return Bu(4,2,t,e)}function hy(t,e){return Bu(4,4,t,e)}function py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function my(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4,4,py.bind(null,e,t),n)}function Nh(){}function gy(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vy(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _y(t,e,n){return Kr&21?(Kn(n,e)||(n=E_(),dt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function cT(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{Qe=n,Rc.transition=i}}function yy(){return In().memoizedState}function fT(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xy(t))Sy(e,n);else if(n=ty(t,e,n,i),n!==null){var r=Qt();$n(n,t,i,r),My(n,e,i)}}function dT(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xy(t))Sy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ty(t,e,r,i),n!==null&&(r=Qt(),$n(n,t,i,r),My(n,e,i))}}function xy(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Sy(t,e){Xo=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function My(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var hu={readContext:Un,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},hT={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=fT.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:wm,useDebugValue:Nh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=wm(!1),e=t[0];return t=cT.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ei();if(lt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Dt===null)throw Error(J(349));Kr&30||oy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Am(ly.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,ay.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Dt.identifierPrefix;if(lt){var n=Mi,i=Si;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pT={readContext:Un,useCallback:gy,useContext:Un,useEffect:Dh,useImperativeHandle:my,useInsertionEffect:dy,useLayoutEffect:hy,useMemo:vy,useReducer:Pc,useRef:fy,useState:function(){return Pc(ma)},useDebugValue:Nh,useDeferredValue:function(t){var e=In();return _y(e,Tt.memoizedState,t)},useTransition:function(){var t=Pc(ma)[0],e=In().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:sy,useId:yy,unstable_isNewReconciler:!1},mT={readContext:Un,useCallback:gy,useContext:Un,useEffect:Dh,useImperativeHandle:my,useInsertionEffect:dy,useLayoutEffect:hy,useMemo:vy,useReducer:bc,useRef:fy,useState:function(){return bc(ma)},useDebugValue:Nh,useDeferredValue:function(t){var e=In();return Tt===null?e.memoizedState=t:_y(e,Tt.memoizedState,t)},useTransition:function(){var t=bc(ma)[0],e=In().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:sy,useId:yy,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zu={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=sr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&($n(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=sr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&($n(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=sr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&($n(e,t,i,n),Fl(e,t,i))}};function Cm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function Ey(t,e,n){var i=!1,r=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=un(e)?$r:Yt.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zu.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=un(e)?$r:Yt.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zu.enqueueReplaceState(r,r.state,null),cu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=GM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gT=typeof WeakMap=="function"?WeakMap:Map;function Ty(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mu||(mu=!0,_d=i),ld(t,e)},n}function wy(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bT.bind(null,t,e,n),e.then(t,t))}function bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var vT=Ui.ReactCurrentOwner,an=!1;function Kt(t,e,n,i){e.child=t===null?ey(e,null,n,i):Zs(e,t.child,n,i)}function Dm(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=bh(t,e,n,i,s,r),n=Lh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(lt&&n&&_h(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Nm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ay(t,e,s,i,r)):(t=Hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ay(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ud(t,e,n,i,r)}function Cy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Ds,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Ds,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Ds,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Ds,vn),vn|=i;return Kt(t,e,r,n),e.child}function Ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var s=un(n)?$r:Yt.current;return s=qs(e,s),Ws(e,r),n=bh(t,e,n,i,s,r),i=Lh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(lt&&i&&_h(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Um(t,e,n,i,r){if(un(n)){var s=!0;su(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Bl(t,e),Ey(e,n,i),ad(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=un(n)?$r:Yt.current,u=qs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Rm(e,o,i,u),ji=!1;var h=e.memoizedState;o.state=h,cu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||ji?(typeof c=="function"&&(od(e,n,c,i),l=e.memoizedState),(a=ji||Cm(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ny(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=un(n)?$r:Yt.current,l=qs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Rm(e,o,i,l),ji=!1,h=e.memoizedState,o.state=h,cu(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||ln.current||ji?(typeof p=="function"&&(od(e,n,p,i),_=e.memoizedState),(u=ji||Cm(e,n,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,s,r)}function cd(t,e,n,i,r,s){Ry(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,n,!1),Li(t,e,s);i=e.stateNode,vT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&ym(e,n,!0),e.child}function Py(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),Ah(t,e.containerInfo)}function Im(t,e,n,i,r){return Ks(),xh(r),e.flags|=256,Kt(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function by(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ct,r&1),t===null)return rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=fd,t):Uh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _T(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uh(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&xh(i),Zs(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _T(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(J(422))),Ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=fd,s);if(!(e.mode&1))return Ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Lc(s,i,void 0),Ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),$n(i,t,r,-1))}return zh(),i=Lc(Error(J(421))),Ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=LT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=nr(r.nextSibling),yn=e,lt=!0,Wn=null,t!==null&&(Pn[bn++]=Si,Pn[bn++]=Mi,Pn[bn++]=qr,Si=t.id,Mi=t.overflow,qr=e),e=Uh(e,i.children),e.flags|=4096,e)}function Fm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sd(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ly(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,n,e);else if(t.tag===19)Fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yT(t,e,n){switch(e.tag){case 3:Py(e),Ks();break;case 5:iy(e);break;case 1:un(e.type)&&su(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(lu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?by(t,e,n):(nt(ct,ct.current&1),t=Li(t,e,n),t!==null?t.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ly(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Cy(t,e,n)}return Li(t,e,n)}var Dy,hd,Ny,Uy;Dy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};Ny=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(ai.current);var s=null;switch(n){case"input":r=If(t,r),i=If(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=kf(t,r),i=kf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=iu)}zf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Uy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xT(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&ru(),Vt(e),null;case 3:return i=e.stateNode,Qs(),st(ln),st(Yt),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Sd(Wn),Wn=null))),hd(t,e),Vt(e),null;case 5:Ch(e);var r=Br(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)Ny(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Vt(e),null}if(t=Br(ai.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[fa]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)it(Fo[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Xp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Yp(i,s),it("invalid",i)}zf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Ha(i),jp(i,s,!0);break;case"textarea":Ha(i),$p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[fa]=i,Dy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fo.length;r++)it(Fo[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Xp(t,i),r=If(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),it("invalid",t);break;case"textarea":Yp(t,i),r=kf(t,i),it("invalid",t);break;default:r=i}zf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?f_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&rh(t,s,l,o))}switch(n){case"input":Ha(t),jp(t,i,!1);break;case"textarea":Ha(t),$p(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Uy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=Br(ha.current),Br(ai.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Vt(e),null;case 13:if(st(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&_n!==null&&e.mode&1&&!(e.flags&128))Q_(),Ks(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[ii]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Wn!==null&&(Sd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?wt===0&&(wt=3):zh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Qs(),hd(t,e),t===null&&ua(e.stateNode.containerInfo),Vt(e),null;case 10:return Eh(e.type._context),Vt(e),null;case 17:return un(e.type)&&ru(),Vt(e),null;case 19:if(st(ct),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fu(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>eo&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=fu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Vt(e),null}else 2*yt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ct.current,nt(ct,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function ST(t,e){switch(yh(e),e.tag){case 1:return un(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),st(ln),st(Yt),Rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(st(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ct),null;case 4:return Qs(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var el=!1,Xt=!1,MT=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function pd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Om=!1;function ET(t,e){if(Zf=eu,t=B_(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},eu=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Vn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Om,Om=!1,_}function jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pd(e,n,s)}r=r.next}while(r!==i)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iy(t){var e=t.alternate;e!==null&&(t.alternate=null,Iy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[fa],delete e[td],delete e[sT],delete e[oT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fy(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var It=null,Hn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Oy(t,e,n),n=n.sibling}function Oy(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Nu,n)}catch{}switch(n.tag){case 5:Xt||Ls(n,e);case 6:var i=It,r=Hn;It=null,Fi(t,e,n),It=i,Hn=r,It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),oa(t)):wc(It,n.stateNode));break;case 4:i=It,r=Hn,It=n.stateNode.containerInfo,Hn=!0,Fi(t,e,n),It=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pd(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Xt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Fi(t,e,n),Xt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new MT),e.forEach(function(i){var r=DT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Hn=!1;break e;case 3:It=a.stateNode.containerInfo,Hn=!0;break e;case 4:It=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(It===null)throw Error(J(160));Oy(s,o,r),It=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ky(e,t),e=e.sibling}function ky(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Jn(t),i&4){try{jo(3,t,t.return),Vu(3,t)}catch(y){mt(t,t.return,y)}try{jo(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Fn(e,t),Jn(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(Fn(e,t),Jn(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&o_(r,s),Vf(a,o);var u=Vf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?f_(r,f):c==="dangerouslySetInnerHTML"?u_(r,f):c==="children"?na(r,f):rh(r,c,f,u)}switch(a){case"input":Ff(r,s);break;case"textarea":a_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[fa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Fn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Fn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Fn(e,t),Jn(t);break;case 13:Fn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=yt())),i&4&&Bm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Fn(e,t),Xt=u):Fn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(f=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:jo(4,h,h.return);break;case 1:Ls(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:Ls(h,h.return);break;case 22:if(h.memoizedState!==null){Vm(f);continue}}p!==null?(p.return=h,he=p):Vm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=c_("display",o))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Jn(t),i&4&&Bm(t);break;case 21:break;default:Fn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fy(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=km(t);vd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=km(t);gd(t,a,o);break;default:throw Error(J(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TT(t,e,n){he=t,By(t)}function By(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=el;var u=Xt;if(el=o,(Xt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Hm(r):l!==null?(l.return=o,he=l):Hm(r);for(;s!==null;)he=s,By(s),s=s.sibling;he=r,el=a,Xt=u}zm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):zm(t)}}function zm(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&oa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Xt||e.flags&512&&md(e)}catch(h){mt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Vm(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Hm(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{md(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{md(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var wT=Math.ceil,pu=Ui.ReactCurrentDispatcher,Ih=Ui.ReactCurrentOwner,Nn=Ui.ReactCurrentBatchConfig,Ye=0,Dt=null,Mt=null,Ot=0,vn=0,Ds=gr(0),wt=0,va=null,Zr=0,Hu=0,Fh=0,Yo=null,sn=null,Oh=0,eo=1/0,vi=null,mu=!1,_d=null,rr=null,tl=!1,Zi=null,gu=0,$o=0,yd=null,zl=-1,Vl=0;function Qt(){return Ye&6?yt():zl!==-1?zl:zl=yt()}function sr(t){return t.mode&1?Ye&2&&Ot!==0?Ot&-Ot:lT.transition!==null?(Vl===0&&(Vl=E_()),Vl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function $n(t,e,n,i){if(50<$o)throw $o=0,yd=null,Error(J(185));Ta(t,n,i),(!(Ye&2)||t!==Dt)&&(t===Dt&&(!(Ye&2)&&(Hu|=n),wt===4&&$i(t,Ot)),cn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(eo=yt()+500,ku&&vr()))}function cn(t,e){var n=t.callbackNode;lE(t,e);var i=Jl(t,t===Dt?Ot:0);if(i===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?aT(Gm.bind(null,t)):q_(Gm.bind(null,t)),iT(function(){!(Ye&6)&&vr()}),n=null;else{switch(T_(i)){case 1:n=uh;break;case 4:n=S_;break;case 16:n=Ql;break;case 536870912:n=M_;break;default:n=Ql}n=Yy(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(zl=-1,Vl=0,Ye&6)throw Error(J(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=Jl(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vu(t,i);else{e=i;var r=Ye;Ye|=2;var s=Hy();(Dt!==t||Ot!==e)&&(vi=null,eo=yt()+500,Hr(t,e));do try{RT();break}catch(a){Vy(t,a)}while(!0);Mh(),pu.current=s,Ye=r,Mt!==null?e=0:(Dt=null,Ot=0,e=wt)}if(e!==0){if(e===2&&(r=jf(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=va,Hr(t,0),$i(t,i),cn(t,yt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!AT(r)&&(e=vu(t,i),e===2&&(s=jf(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=va,Hr(t,0),$i(t,i),cn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:br(t,sn,vi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Oh+500-yt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ed(br.bind(null,t,sn,vi),e);break}br(t,sn,vi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wT(i/1960))-i,10<i){t.timeoutHandle=ed(br.bind(null,t,sn,vi),i);break}br(t,sn,vi);break;case 5:br(t,sn,vi);break;default:throw Error(J(329))}}}return cn(t,yt()),t.callbackNode===n?zy.bind(null,t):null}function xd(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=vu(t,e),t!==2&&(e=sn,sn=n,e!==null&&Sd(e)),t}function Sd(t){sn===null?sn=t:sn.push.apply(sn,t)}function AT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Fh,e&=~Hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Gm(t){if(Ye&6)throw Error(J(327));Xs();var e=Jl(t,0);if(!(e&1))return cn(t,yt()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var i=jf(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=va,Hr(t,0),$i(t,e),cn(t,yt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,sn,vi),cn(t,yt()),null}function kh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(eo=yt()+500,ku&&vr())}}function Qr(t){Zi!==null&&Zi.tag===0&&!(Ye&6)&&Xs();var e=Ye;Ye|=1;var n=Nn.transition,i=Qe;try{if(Nn.transition=null,Qe=1,t)return t()}finally{Qe=i,Nn.transition=n,Ye=e,!(Ye&6)&&vr()}}function Bh(){vn=Ds.current,st(Ds)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nT(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ru();break;case 3:Qs(),st(ln),st(Yt),Rh();break;case 5:Ch(i);break;case 4:Qs();break;case 13:st(ct);break;case 19:st(ct);break;case 10:Eh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Dt=t,Mt=t=or(t.current,null),Ot=vn=e,wt=0,va=null,Fh=Hu=Zr=0,sn=Yo=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function Vy(t,e){do{var n=Mt;try{if(Mh(),Ol.current=hu,du){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}du=!1}if(Kr=0,Lt=Tt=dt=null,Xo=!1,pa=0,Ih.current=null,n===null||n.return===null){wt=1,va=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bm(o);if(p!==null){p.flags&=-257,Lm(p,o,a,s,e),p.mode&1&&Pm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Pm(s,u,e),zh();break e}l=Error(J(426))}}else if(lt&&a.mode&1){var m=bm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lm(m,o,a,s,e),xh(Js(l,a));break e}}s=l=Js(l,a),wt!==4&&(wt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ty(s,l,e);Em(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=wy(s,a,e);Em(s,S);break e}}s=s.return}while(s!==null)}Wy(n)}catch(w){e=w,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function Hy(){var t=pu.current;return pu.current=hu,t===null?hu:t}function zh(){(wt===0||wt===3||wt===2)&&(wt=4),Dt===null||!(Zr&268435455)&&!(Hu&268435455)||$i(Dt,Ot)}function vu(t,e){var n=Ye;Ye|=2;var i=Hy();(Dt!==t||Ot!==e)&&(vi=null,Hr(t,e));do try{CT();break}catch(r){Vy(t,r)}while(!0);if(Mh(),Ye=n,pu.current=i,Mt!==null)throw Error(J(261));return Dt=null,Ot=0,wt}function CT(){for(;Mt!==null;)Gy(Mt)}function RT(){for(;Mt!==null&&!JM();)Gy(Mt)}function Gy(t){var e=jy(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Wy(t):Mt=e,Ih.current=null}function Wy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ST(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=xT(n,e,vn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function br(t,e,n){var i=Qe,r=Nn.transition;try{Nn.transition=null,Qe=1,PT(t,e,n,i)}finally{Nn.transition=r,Qe=i}return null}function PT(t,e,n,i){do Xs();while(Zi!==null);if(Ye&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uE(t,s),t===Dt&&(Mt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Yy(Ql,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=Qe;Qe=1;var a=Ye;Ye|=4,Ih.current=null,ET(t,n),ky(n,t),qE(Qf),eu=!!Zf,Qf=Zf=null,t.current=n,TT(n),eE(),Ye=a,Qe=o,Nn.transition=s}else t.current=n;if(tl&&(tl=!1,Zi=t,gu=r),s=t.pendingLanes,s===0&&(rr=null),iE(n.stateNode),cn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mu)throw mu=!1,t=_d,_d=null,t;return gu&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===yd?$o++:($o=0,yd=t):$o=0,vr(),null}function Xs(){if(Zi!==null){var t=T_(gu),e=Nn.transition,n=Qe;try{if(Nn.transition=null,Qe=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,gu=0,Ye&6)throw Error(J(331));var r=Ye;for(Ye|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:jo(8,c,s)}var f=c.child;if(f!==null)f.return=c,he=f;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(Iy(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,he=d;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vu(9,a)}}catch(w){mt(a,a.return,w)}if(a===o){he=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,he=S;break e}he=a.return}}if(Ye=r,vr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Nu,t)}catch{}i=!0}return i}finally{Qe=n,Nn.transition=e}}return!1}function Wm(t,e,n){e=Js(n,e),e=Ty(t,e,1),t=ir(t,e,1),e=Qt(),t!==null&&(Ta(t,1,e),cn(t,e))}function mt(t,e,n){if(t.tag===3)Wm(t,t,n);else for(;e!==null;){if(e.tag===3){Wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Js(n,t),t=wy(e,t,1),e=ir(e,t,1),t=Qt(),e!==null&&(Ta(e,1,t),cn(e,t));break}}e=e.return}}function bT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(wt===4||wt===3&&(Ot&130023424)===Ot&&500>yt()-Oh?Hr(t,0):Fh|=n),cn(t,e)}function Xy(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=Qt();t=bi(t,e),t!==null&&(Ta(t,e,n),cn(t,n))}function LT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xy(t,n)}function DT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Xy(t,n)}var jy;jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,yT(t,e,n);an=!!(t.flags&131072)}else an=!1,lt&&e.flags&1048576&&K_(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=qs(e,Yt.current);Ws(e,n),r=bh(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,su(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=zu,e.stateNode=r,r._reactInternals=e,ad(e,i,t,n),e=cd(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&_h(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=UT(i),t=Vn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=Um(null,e,i,t,n);break e;case 11:e=Dm(null,e,i,t,n);break e;case 14:e=Nm(null,e,i,Vn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Um(t,e,i,r,n);case 3:e:{if(Py(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ny(t,e),cu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(J(423)),e),e=Im(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(J(424)),e),e=Im(t,e,i,n,r);break e}else for(_n=nr(e.stateNode.containerInfo.firstChild),yn=e,lt=!0,Wn=null,n=ey(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Li(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return iy(e),t===null&&rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jf(i,r)?o=null:s!==null&&Jf(i,s)&&(e.flags|=32),Ry(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&rd(e),null;case 13:return by(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Dm(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(lu,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!ln.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=Un(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Nm(t,e,i,r,n);case 15:return Ay(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Bl(t,e),e.tag=1,un(i)?(t=!0,su(e)):t=!1,Ws(e,n),Ey(e,i,r),ad(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return Ly(t,e,n);case 22:return Cy(t,e,n)}throw Error(J(156,e.tag))};function Yy(t,e){return x_(t,e)}function NT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new NT(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UT(t){if(typeof t=="function")return Vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===ah)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return Gr(n.children,r,s,e);case sh:o=8,r|=8;break;case Lf:return t=Dn(12,n,e,r|2),t.elementType=Lf,t.lanes=s,t;case Df:return t=Dn(13,n,e,r),t.elementType=Df,t.lanes=s,t;case Nf:return t=Dn(19,n,e,r),t.elementType=Nf,t.lanes=s,t;case i_:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t_:o=10;break e;case n_:o=9;break e;case oh:o=11;break e;case ah:o=14;break e;case Xi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=i_,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,o,a,l){return t=new IT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),t}function FT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $y(t){if(!t)return fr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(un(n))return $_(t,n,e)}return e}function qy(t,e,n,i,r,s,o,a,l){return t=Hh(n,i,!0,t,r,s,o,a,l),t.context=$y(null),n=t.current,i=Qt(),r=sr(n),s=wi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ta(t,r,i),cn(t,i),t}function Wu(t,e,n,i){var r=e.current,s=Qt(),o=sr(r);return n=$y(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,o),t!==null&&($n(t,r,o,s),Fl(t,r,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Xm(t,e),(t=t.alternate)&&Xm(t,e)}function OT(){return null}var Ky=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}Xu.prototype.render=Wh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Wu(t,e,null,null)};Xu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Wu(null,t,null,null)}),e[Pi]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&P_(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function kT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_u(o);s.call(u)}}var o=qy(e,i,t,0,null,!1,!1,"",jm);return t._reactRootContainer=o,t[Pi]=o.current,ua(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_u(l);a.call(u)}}var l=Hh(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=l,t[Pi]=l.current,ua(t.nodeType===8?t.parentNode:t),Qr(function(){Wu(e,l,n,i)}),l}function Yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_u(o);a.call(l)}}Wu(e,o,t,r)}else o=kT(n,e,t,r,i);return _u(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(ch(e,n|1),cn(e,yt()),!(Ye&6)&&(eo=yt()+500,vr()))}break;case 13:Qr(function(){var i=bi(t,1);if(i!==null){var r=Qt();$n(i,t,1,r)}}),Gh(t,1)}};fh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Qt();$n(e,t,134217728,n)}Gh(t,134217728)}};A_=function(t){if(t.tag===13){var e=sr(t),n=bi(t,e);if(n!==null){var i=Qt();$n(n,t,e,i)}Gh(t,e)}};C_=function(){return Qe};R_=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Gf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ou(i);if(!r)throw Error(J(90));s_(i),Ff(i,r)}}}break;case"textarea":a_(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};p_=kh;m_=Qr;var BT={usingClientEntryPoint:!1,Events:[Aa,As,Ou,d_,h_,kh]},Eo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zT={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||OT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Nu=nl.inject(zT),oi=nl}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BT;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(J(200));return FT(t,e,null,n)};Mn.createRoot=function(t,e){if(!Xh(t))throw Error(J(299));var n=!1,i="",r=Ky;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,ua(t.nodeType===8?t.parentNode:t),new Wh(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Qr(t)};Mn.hydrate=function(t,e,n){if(!ju(e))throw Error(J(200));return Yu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ky;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qy(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xu(e)};Mn.render=function(t,e,n){if(!ju(e))throw Error(J(200));return Yu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!ju(t))throw Error(J(40));return t._reactRootContainer?(Qr(function(){Yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Mn.unstable_batchedUpdates=kh;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ju(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Yu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zy)}catch(t){console.error(t)}}Zy(),Z0.exports=Mn;var VT=Z0.exports,Qy,Ym=VT;Qy=Ym.createRoot,Ym.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="162",HT=0,$m=1,GT=2,Jy=1,WT=2,gi=3,dr=0,fn=1,yi=2,ar=0,js=1,qm=2,Km=3,Zm=4,XT=5,Ir=100,jT=101,YT=102,Qm=103,Jm=104,$T=200,qT=201,KT=202,ZT=203,Md=204,Ed=205,QT=206,JT=207,e1=208,t1=209,n1=210,i1=211,r1=212,s1=213,o1=214,a1=0,l1=1,u1=2,yu=3,c1=4,f1=5,d1=6,h1=7,ex=0,p1=1,m1=2,lr=0,g1=1,v1=2,_1=3,y1=4,x1=5,S1=6,M1=7,tx=300,to=301,no=302,Td=303,wd=304,$u=306,Ad=1e3,Xn=1001,Cd=1002,Zt=1003,eg=1004,To=1005,rn=1006,Ic=1007,zr=1008,ur=1009,E1=1010,T1=1011,Yh=1012,nx=1013,Qi=1014,xi=1015,_a=1016,ix=1017,rx=1018,Wr=1020,w1=1021,jn=1023,A1=1024,C1=1025,Xr=1026,io=1027,R1=1028,sx=1029,P1=1030,ox=1031,ax=1033,Fc=33776,Oc=33777,kc=33778,Bc=33779,tg=35840,ng=35841,ig=35842,rg=35843,lx=36196,sg=37492,og=37496,ag=37808,lg=37809,ug=37810,cg=37811,fg=37812,dg=37813,hg=37814,pg=37815,mg=37816,gg=37817,vg=37818,_g=37819,yg=37820,xg=37821,zc=36492,Sg=36494,Mg=36495,b1=36283,Eg=36284,Tg=36285,wg=36286,L1=3200,D1=3201,N1=0,U1=1,qi="",ti="srgb",_r="srgb-linear",$h="display-p3",qu="display-p3-linear",xu="linear",rt="srgb",Su="rec709",Mu="p3",ss=7680,Ag=519,I1=512,F1=513,O1=514,ux=515,k1=516,B1=517,z1=518,V1=519,Cg=35044,Rg="300 es",Rd=1035,Ei=2e3,Eu=2001;class co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,Pd=180/Math.PI;function Ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function H1(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function Pg(t){return(t&t-1)===0&&t!==0}function bd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],y=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],w=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*w,s[3]=o*m+a*g+l*A,s[6]=o*d+a*S+l*T,s[1]=u*y+c*v+f*w,s[4]=u*m+c*g+f*A,s[7]=u*d+c*S+f*T,s[2]=h*y+p*v+_*w,s[5]=h*m+p*g+_*A,s[8]=h*d+p*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gc.makeScale(e,n)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Oe;function cx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function G1(){const t=Tu("canvas");return t.style.display="block",t}const bg={};function W1(t){t in bg||(bg[t]=!0,console.warn(t))}const Lg=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dg=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[_r]:{transfer:xu,primaries:Su,toReference:t=>t,fromReference:t=>t},[ti]:{transfer:rt,primaries:Su,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[qu]:{transfer:xu,primaries:Mu,toReference:t=>t.applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Lg)},[$h]:{transfer:rt,primaries:Mu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dg),fromReference:t=>t.applyMatrix3(Lg).convertLinearToSRGB()}},X1=new Set([_r,qu]),Je={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!X1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=il[e].toReference,r=il[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return il[t].primaries},getTransfer:function(t){return t===qi?xu:il[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Tu("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j1=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xc(r[o].image)):s.push(Xc(r[o]))}else s=Xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y1=0;class dn extends co{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Xn,r=Xn,s=rn,o=zr,a=jn,l=ur,u=dn.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Ra(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=tx;dn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(p+1)/2,w=(d+1)/2,A=(c+h)/4,T=(f+y)/4,P=(_+m)/4;return g>S&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=T/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $1 extends co{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends $1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hx extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class q1 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==_){let m=1-a;const d=l*h+u*p+c*_+f*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,d*v);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const S=a*v;if(l=l*m+h*S,u=u*m+p*S,c=c*m+_*S,f=f*m+y*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*f+l*p-u*h,e[n+1]=l*_+c*h+u*f-a*p,e[n+2]=u*_+c*p+a*h-l*f,e[n+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ng.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ng.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new k,Ng=new Pa;class ba{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),sl.subVectors(this.max,Ao),as.subVectors(e.a,Ao),ls.subVectors(e.b,Ao),us.subVectors(e.c,Ao),Oi.subVectors(ls,as),ki.subVectors(us,ls),Mr.subVectors(as,us);let n=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-Mr.z,Mr.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,Mr.z,0,-Mr.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-Mr.y,Mr.x,0];return!Yc(n,as,ls,us,sl)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,as,ls,us,sl))?!1:(ol.crossVectors(Oi,ki),n=[ol.x,ol.y,ol.z],Yc(n,as,ls,us,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new k,new k,new k,new k,new k,new k,new k,new k],On=new k,rl=new ba,as=new k,ls=new k,us=new k,Oi=new k,ki=new k,Mr=new k,Ao=new k,sl=new k,ol=new k,Er=new k;function Yc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),u=n.dot(Er),c=i.dot(Er);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const K1=new ba,Co=new k,$c=new k;class Ku{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):K1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add($c)),this.expandByPoint(Co.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new k,qc=new k,al=new k,Bi=new k,Kc=new k,ll=new k,Zc=new k;class px{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(al),a=Bi.dot(this.direction),l=-Bi.dot(al),u=Bi.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const y=1/c;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qc).addScaledVector(al,h),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){Kc.subVectors(n,e),ll.subVectors(i,e),Zc.crossVectors(Kc,ll);let o=this.direction.dot(Zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(Bi,ll));if(l<0)return null;const u=a*this.direction.dot(Kc.cross(Bi));if(u<0||l+u>o)return null;const c=-a*Bi.dot(Zc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,_,y,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,_,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,y=u*f;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,y=u*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,y=a*f;n[0]=l*c,n[4]=_*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=o*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z1,e,Q1)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),zi.crossVectors(i,mn),zi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),zi.crossVectors(i,mn)),zi.normalize(),ul.crossVectors(mn,zi),r[0]=zi.x,r[4]=ul.x,r[8]=mn.x,r[1]=zi.y,r[5]=ul.y,r[9]=mn.y,r[2]=zi.z,r[6]=ul.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],y=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],w=i[15],A=r[0],T=r[4],P=r[8],X=r[12],x=r[1],R=r[5],ee=r[9],K=r[13],L=r[2],Y=r[6],W=r[10],j=r[14],b=r[3],I=r[7],z=r[11],q=r[15];return s[0]=o*A+a*x+l*L+u*b,s[4]=o*T+a*R+l*Y+u*I,s[8]=o*P+a*ee+l*W+u*z,s[12]=o*X+a*K+l*j+u*q,s[1]=c*A+f*x+h*L+p*b,s[5]=c*T+f*R+h*Y+p*I,s[9]=c*P+f*ee+h*W+p*z,s[13]=c*X+f*K+h*j+p*q,s[2]=_*A+y*x+m*L+d*b,s[6]=_*T+y*R+m*Y+d*I,s[10]=_*P+y*ee+m*W+d*z,s[14]=_*X+y*K+m*j+d*q,s[3]=v*A+g*x+S*L+w*b,s[7]=v*T+g*R+S*Y+w*I,s[11]=v*P+g*ee+S*W+w*z,s[15]=v*X+g*K+S*j+w*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],v=f*m*u-y*h*u+y*l*p-a*m*p-f*l*d+a*h*d,g=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,S=c*y*u-_*f*u+_*a*p-o*y*p-c*a*d+o*f*d,w=_*f*l-c*y*l-_*a*h+o*y*h+c*a*m-o*f*m,A=n*v+i*g+r*S+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(c*m*s-_*h*s+_*r*p-n*m*p-c*r*d+n*h*d)*T,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*d-n*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(_*f*s-c*y*s-_*i*p+n*y*p+c*i*d-n*f*d)*T,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*d+n*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*T,e[12]=w*T,e[13]=(c*y*r-_*f*r+_*i*h-n*y*h-c*i*m+n*f*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,y=o*c,m=o*f,d=a*f,v=l*u,g=l*c,S=l*f,w=i.x,A=i.y,T=i.z;return r[0]=(1-(y+d))*w,r[1]=(p+S)*w,r[2]=(_-g)*w,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+g)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const u=1/s,c=1/o,f=1/a;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Ei)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Eu)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let _,y;if(a===Ei)_=(o+s)*f,y=-2*f;else if(a===Eu)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new k,kn=new Et,Z1=new k(0,0,0),Q1=new k(1,1,1),zi=new k,ul=new k,mn=new k,Ug=new Et,Ig=new Pa;class Di{constructor(e=0,n=0,i=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-on(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ug,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J1=0;const Fg=new k,fs=new Pa,hi=new Et,cl=new k,Ro=new k,ew=new k,tw=new Pa,Og=new k(1,0,0),kg=new k(0,1,0),Bg=new k(0,0,1),nw={type:"added"},iw={type:"removed"},Qc={type:"childadded",child:null},Jc={type:"childremoved",child:null};class hn extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new k,n=new Di,i=new Pa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,n){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ro,cl,this.up):hi.lookAt(cl,Ro,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(hi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nw),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iw),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,ew),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,tw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new k(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new k,pi=new k,ef=new k,mi=new k,ds=new k,hs=new k,zg=new k,tf=new k,nf=new k,rf=new k;class ri{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),pi.subVectors(i,n),ef.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(pi),l=Bn.dot(ef),u=pi.dot(pi),c=pi.dot(ef),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),pi.subVectors(e,n),Bn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),hs.subVectors(s,i),tf.subVectors(e,i);const l=ds.dot(tf),u=hs.dot(tf);if(l<=0&&u<=0)return n.copy(i);nf.subVectors(e,r);const c=ds.dot(nf),f=hs.dot(nf);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ds,o);rf.subVectors(e,s);const p=ds.dot(rf),_=hs.dot(rf);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(hs,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return zg.subVectors(s,r),a=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(zg,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(ds,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=H1(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sf(o,s,e+1/3),this.g=sf(o,s,e),this.b=sf(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Wc(e.r),this.g=Wc(e.g),this.b=Wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Je.fromWorkingColorSpace(Gt.copy(this),e),Math.round(on(Gt.r*255,0,255))*65536+Math.round(on(Gt.g*255,0,255))*256+Math.round(on(Gt.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=ti){Je.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(fl);const i=Hc(Vi.h,fl.h,n),r=Hc(Vi.s,fl.s,n),s=Hc(Vi.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ze;Ze.NAMES=gx;let rw=0;class La extends co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=js,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=yu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Md&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ag&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vx extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new k,dl=new qe;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return W1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cg&&(e.usage=this.usage),e}}class _x extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yx extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class jr extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sw=0;const An=new Et,of=new hn,ps=new k,gn=new ba,Po=new ba,Pt=new k;class Ii extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?yx:_x)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(gn.min,Po.min),gn.expandByPoint(Pt),Pt.addVectors(gn.max,Po.max),gn.expandByPoint(Pt)):(gn.expandByPoint(Po.min),gn.expandByPoint(Po.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(ps.fromBufferAttribute(e,u),Pt.add(ps)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const u=new k,c=new k,f=new k,h=new qe,p=new qe,_=new qe,y=new k,m=new k;function d(P,X,x){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,X),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,X),_.fromBufferAttribute(s,x),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(R),a[P].add(y),a[X].add(y),a[x].add(y),l[P].add(m),l[X].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,X=v.length;P<X;++P){const x=v[P],R=x.start,ee=x.count;for(let K=R,L=R+ee;K<L;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const g=new k,S=new k,w=new k,A=new k;function T(P){w.fromBufferAttribute(r,P),A.copy(w);const X=a[P];g.copy(X),g.sub(w.multiplyScalar(w.dot(X))).normalize(),S.crossVectors(A,X);const R=S.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,R)}for(let P=0,X=v.length;P<X;++P){const x=v[P],R=x.start,ee=x.count;for(let K=R,L=R+ee;K<L;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new qn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vg=new Et,Tr=new px,hl=new Ku,Hg=new k,ms=new k,gs=new k,vs=new k,af=new k,pl=new k,ml=new qe,gl=new qe,vl=new qe,Gg=new k,Wg=new k,Xg=new k,_l=new k,yl=new k;class Ti extends hn{constructor(e=new Ii,n=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(af.fromBufferAttribute(f,e),o?pl.addScaledVector(af,c):pl.addScaledVector(af.sub(n),c))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(hl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(hl,Hg)===null||Tr.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Vg.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Vg),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=g;S<w;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=xl(this,d,e,i,u,c,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=xl(this,o,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,w=g;S<w;S+=3){const A=S,T=S+1,P=S+2;r=xl(this,d,e,i,u,c,f,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){const v=m,g=m+1,S=m+2;r=xl(this,o,e,i,u,c,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ow(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===dr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(yl);return u<n.near||u>n.far?null:{distance:u,point:yl.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ms),t.getVertexPosition(l,gs),t.getVertexPosition(u,vs);const c=ow(t,e,n,i,ms,gs,vs,_l);if(c){r&&(ml.fromBufferAttribute(r,a),gl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,u),c.uv=ri.getInterpolation(_l,ms,gs,vs,ml,gl,vl,new qe)),s&&(ml.fromBufferAttribute(s,a),gl.fromBufferAttribute(s,l),vl.fromBufferAttribute(s,u),c.uv1=ri.getInterpolation(_l,ms,gs,vs,ml,gl,vl,new qe)),o&&(Gg.fromBufferAttribute(o,a),Wg.fromBufferAttribute(o,l),Xg.fromBufferAttribute(o,u),c.normal=ri.getInterpolation(_l,ms,gs,vs,Gg,Wg,Xg,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new k,materialIndex:0};ri.getNormal(ms,gs,vs,f.normal),c.face=f}return c}class Da extends Ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jr(u,3)),this.setAttribute("normal",new jr(c,3)),this.setAttribute("uv",new jr(f,2));function _(y,m,d,v,g,S,w,A,T,P,X){const x=S/T,R=w/P,ee=S/2,K=w/2,L=A/2,Y=T+1,W=P+1;let j=0,b=0;const I=new k;for(let z=0;z<W;z++){const q=z*R-K;for(let re=0;re<Y;re++){const Ce=re*x-ee;I[y]=Ce*v,I[m]=q*g,I[d]=L,u.push(I.x,I.y,I.z),I[y]=0,I[m]=0,I[d]=A>0?1:-1,c.push(I.x,I.y,I.z),f.push(re/T),f.push(1-z/P),j+=1}}for(let z=0;z<P;z++)for(let q=0;q<T;q++){const re=h+q+Y*z,Ce=h+q+Y*(z+1),V=h+(q+1)+Y*(z+1),Z=h+(q+1)+Y*z;l.push(re,Ce,Z),l.push(Ce,V,Z),b+=6}a.addGroup(p,b,X),p+=b,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function aw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xx(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const lw={clone:ro,merge:qt};var uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uw,this.fragmentShader=cw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=aw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sx extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new k,jg=new qe,Yg=new qe;class Ln extends Sx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,jg,Yg),n.subVectors(Yg,jg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,ys=1;class fw extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(_s,ys,e,n);r.layers=this.layers,this.add(r);const s=new Ln(_s,ys,e,n);s.layers=this.layers,this.add(s);const o=new Ln(_s,ys,e,n);o.layers=this.layers,this.add(o);const a=new Ln(_s,ys,e,n);a.layers=this.layers,this.add(a);const l=new Ln(_s,ys,e,n);l.layers=this.layers,this.add(l);const u=new Ln(_s,ys,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Mx extends dn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dw extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Da(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:ar});s.uniforms.tEquirect.value=n;const o=new Ti(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=rn),new fw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const lf=new k,hw=new k,pw=new Oe;class Lr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lf.subVectors(i,n).cross(hw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pw.getNormalMatrix(e),r=this.coplanarPoint(lf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new Ku,Sl=new k;class Ex{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],y=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-d).normalize(),i[1].setComponents(l+s,h+u,m+p,S+d).normalize(),i[2].setComponents(l+o,h+c,m+_,S+v).normalize(),i[3].setComponents(l-o,h-c,m-_,S-v).normalize(),i[4].setComponents(l-a,h-f,m-y,S-g).normalize(),n===Ei)i[5].setComponents(l+a,h+f,m+y,S+g).normalize();else if(n===Eu)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,m=_.length;y<m;y++){const d=_[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Zu extends Ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],_=[],y=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let g=0;g<u;g++){const S=g*f-s;_.push(S,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+u*d,S=v+u*(d+1),w=v+1+u*(d+1),A=v+1+u*d;p.push(g,S,A),p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new jr(_,3)),this.setAttribute("normal",new jr(y,3)),this.setAttribute("uv",new jr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var gw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_w=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ww=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ww=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_A=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,MA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,EA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,DA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,UA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$A=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,EC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$C=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:gw,alphahash_pars_fragment:vw,alphamap_fragment:_w,alphamap_pars_fragment:yw,alphatest_fragment:xw,alphatest_pars_fragment:Sw,aomap_fragment:Mw,aomap_pars_fragment:Ew,batching_pars_vertex:Tw,batching_vertex:ww,begin_vertex:Aw,beginnormal_vertex:Cw,bsdfs:Rw,iridescence_fragment:Pw,bumpmap_pars_fragment:bw,clipping_planes_fragment:Lw,clipping_planes_pars_fragment:Dw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Uw,color_fragment:Iw,color_pars_fragment:Fw,color_pars_vertex:Ow,color_vertex:kw,common:Bw,cube_uv_reflection_fragment:zw,defaultnormal_vertex:Vw,displacementmap_pars_vertex:Hw,displacementmap_vertex:Gw,emissivemap_fragment:Ww,emissivemap_pars_fragment:Xw,colorspace_fragment:jw,colorspace_pars_fragment:Yw,envmap_fragment:$w,envmap_common_pars_fragment:qw,envmap_pars_fragment:Kw,envmap_pars_vertex:Zw,envmap_physical_pars_fragment:uA,envmap_vertex:Qw,fog_vertex:Jw,fog_pars_vertex:eA,fog_fragment:tA,fog_pars_fragment:nA,gradientmap_pars_fragment:iA,lightmap_fragment:rA,lightmap_pars_fragment:sA,lights_lambert_fragment:oA,lights_lambert_pars_fragment:aA,lights_pars_begin:lA,lights_toon_fragment:cA,lights_toon_pars_fragment:fA,lights_phong_fragment:dA,lights_phong_pars_fragment:hA,lights_physical_fragment:pA,lights_physical_pars_fragment:mA,lights_fragment_begin:gA,lights_fragment_maps:vA,lights_fragment_end:_A,logdepthbuf_fragment:yA,logdepthbuf_pars_fragment:xA,logdepthbuf_pars_vertex:SA,logdepthbuf_vertex:MA,map_fragment:EA,map_pars_fragment:TA,map_particle_fragment:wA,map_particle_pars_fragment:AA,metalnessmap_fragment:CA,metalnessmap_pars_fragment:RA,morphinstance_vertex:PA,morphcolor_vertex:bA,morphnormal_vertex:LA,morphtarget_pars_vertex:DA,morphtarget_vertex:NA,normal_fragment_begin:UA,normal_fragment_maps:IA,normal_pars_fragment:FA,normal_pars_vertex:OA,normal_vertex:kA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:VA,clearcoat_pars_fragment:HA,iridescence_pars_fragment:GA,opaque_fragment:WA,packing:XA,premultiplied_alpha_fragment:jA,project_vertex:YA,dithering_fragment:$A,dithering_pars_fragment:qA,roughnessmap_fragment:KA,roughnessmap_pars_fragment:ZA,shadowmap_pars_fragment:QA,shadowmap_pars_vertex:JA,shadowmap_vertex:eC,shadowmask_pars_fragment:tC,skinbase_vertex:nC,skinning_pars_vertex:iC,skinning_vertex:rC,skinnormal_vertex:sC,specularmap_fragment:oC,specularmap_pars_fragment:aC,tonemapping_fragment:lC,tonemapping_pars_fragment:uC,transmission_fragment:cC,transmission_pars_fragment:fC,uv_pars_fragment:dC,uv_pars_vertex:hC,uv_vertex:pC,worldpos_vertex:mC,background_vert:gC,background_frag:vC,backgroundCube_vert:_C,backgroundCube_frag:yC,cube_vert:xC,cube_frag:SC,depth_vert:MC,depth_frag:EC,distanceRGBA_vert:TC,distanceRGBA_frag:wC,equirect_vert:AC,equirect_frag:CC,linedashed_vert:RC,linedashed_frag:PC,meshbasic_vert:bC,meshbasic_frag:LC,meshlambert_vert:DC,meshlambert_frag:NC,meshmatcap_vert:UC,meshmatcap_frag:IC,meshnormal_vert:FC,meshnormal_frag:OC,meshphong_vert:kC,meshphong_frag:BC,meshphysical_vert:zC,meshphysical_frag:VC,meshtoon_vert:HC,meshtoon_frag:GC,points_vert:WC,points_frag:XC,shadow_vert:jC,shadow_frag:YC,sprite_vert:$C,sprite_frag:qC},se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ni={basic:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:qt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:qt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:qt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:qt([se.common,se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:qt([se.lights,se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ni.physical={uniforms:qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ml={r:0,b:0,g:0},Ar=new Di,KC=new Et;function ZC(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===$u)?(c===void 0&&(c=new Ti(new Da(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ro(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Ar.copy(d.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KC.makeRotationFromEuler(Ar)),c.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,(f!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Ti(new Zu(2,2),new hr({name:"BackgroundMaterial",uniforms:ro(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,d){m.getRGB(Ml,xx(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function QC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(L,Y,W,j,b){let I=!1;if(o){const z=y(j,W,Y);u!==z&&(u=z,p(u.object)),I=d(L,j,W,b),I&&v(L,j,W,b)}else{const z=Y.wireframe===!0;(u.geometry!==j.id||u.program!==W.id||u.wireframe!==z)&&(u.geometry=j.id,u.program=W.id,u.wireframe=z,I=!0)}b!==null&&n.update(b,t.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,P(L,Y,W,j),b!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(b).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,Y,W){const j=W.wireframe===!0;let b=a[L.id];b===void 0&&(b={},a[L.id]=b);let I=b[Y.id];I===void 0&&(I={},b[Y.id]=I);let z=I[j];return z===void 0&&(z=m(h()),I[j]=z),z}function m(L){const Y=[],W=[],j=[];for(let b=0;b<r;b++)Y[b]=0,W[b]=0,j[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:W,attributeDivisors:j,object:L,attributes:{},index:null}}function d(L,Y,W,j){const b=u.attributes,I=Y.attributes;let z=0;const q=W.getAttributes();for(const re in q)if(q[re].location>=0){const V=b[re];let Z=I[re];if(Z===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;z++}return u.attributesNum!==z||u.index!==j}function v(L,Y,W,j){const b={},I=Y.attributes;let z=0;const q=W.getAttributes();for(const re in q)if(q[re].location>=0){let V=I[re];V===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),b[re]=Z,z++}u.attributes=b,u.attributesNum=z,u.index=j}function g(){const L=u.newAttributes;for(let Y=0,W=L.length;Y<W;Y++)L[Y]=0}function S(L){w(L,0)}function w(L,Y){const W=u.newAttributes,j=u.enabledAttributes,b=u.attributeDivisors;W[L]=1,j[L]===0&&(t.enableVertexAttribArray(L),j[L]=1),b[L]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,Y),b[L]=Y)}function A(){const L=u.newAttributes,Y=u.enabledAttributes;for(let W=0,j=Y.length;W<j;W++)Y[W]!==L[W]&&(t.disableVertexAttribArray(W),Y[W]=0)}function T(L,Y,W,j,b,I,z){z===!0?t.vertexAttribIPointer(L,Y,W,b,I):t.vertexAttribPointer(L,Y,W,j,b,I)}function P(L,Y,W,j){if(i.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const b=j.attributes,I=W.getAttributes(),z=Y.defaultAttributeValues;for(const q in I){const re=I[q];if(re.location>=0){let Ce=b[q];if(Ce===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Ce=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Ce=L.instanceColor)),Ce!==void 0){const V=Ce.normalized,Z=Ce.itemSize,ue=n.get(Ce);if(ue===void 0)continue;const Ee=ue.buffer,ye=ue.type,pe=ue.bytesPerElement,Ke=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||Ce.gpuType===nx);if(Ce.isInterleavedBufferAttribute){const Pe=Ce.data,U=Pe.stride,Nt=Ce.offset;if(Pe.isInstancedInterleavedBuffer){for(let Se=0;Se<re.locationSize;Se++)w(re.location+Se,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Se=0;Se<re.locationSize;Se++)S(re.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Se=0;Se<re.locationSize;Se++)T(re.location+Se,Z/re.locationSize,ye,V,U*pe,(Nt+Z/re.locationSize*Se)*pe,Ke)}else{if(Ce.isInstancedBufferAttribute){for(let Pe=0;Pe<re.locationSize;Pe++)w(re.location+Pe,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Pe=0;Pe<re.locationSize;Pe++)S(re.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Pe=0;Pe<re.locationSize;Pe++)T(re.location+Pe,Z/re.locationSize,ye,V,Z*pe,Z/re.locationSize*Pe*pe,Ke)}}else if(z!==void 0){const V=z[q];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(re.location,V);break;case 3:t.vertexAttrib3fv(re.location,V);break;case 4:t.vertexAttrib4fv(re.location,V);break;default:t.vertexAttrib1fv(re.location,V)}}}}A()}function X(){ee();for(const L in a){const Y=a[L];for(const W in Y){const j=Y[W];for(const b in j)_(j[b].object),delete j[b];delete Y[W]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const Y=a[L.id];for(const W in Y){const j=Y[W];for(const b in j)_(j[b].object),delete j[b];delete Y[W]}delete a[L.id]}function R(L){for(const Y in a){const W=a[Y];if(W[L.id]===void 0)continue;const j=W[L.id];for(const b in j)_(j[b].object),delete j[b];delete W[L.id]}}function ee(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:K,dispose:X,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:S,disableUnusedAttributes:A}}function JC(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),n.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function eR(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=o||e.has("OES_texture_float"),w=g&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:A}}function tR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;l.value=S,S=c(_,h,g,p);for(let w=0;w!==g;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function nR(t){let e=new WeakMap;function n(o,a){return a===Td?o.mapping=to:a===wd&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Td||a===wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new dw(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iR extends Sx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,$g=[.125,.215,.35,.446,.526,.582],Fr=20,uf=new iR,qg=new Ze;let cf=null,ff=0,df=0;const Dr=(1+Math.sqrt(5))/2,xs=1/Dr,Kg=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Dr,xs),new k(0,Dr,-xs),new k(xs,0,Dr),new k(-xs,0,Dr),new k(Dr,xs,0),new k(-Dr,xs,0)];class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:_a,format:jn,colorSpace:_r,depthBuffer:!1},r=Qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rR(s)),this._blurMaterial=sR(s,e,n)}return r}_compileMaterial(e){const n=new Ti(this._lodPlanes[0],e);this._renderer.compile(n,uf)}_sceneToCubeUV(e,n,i,r){const a=new Ln(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(qg),c.toneMapping=lr,c.autoClear=!1;const p=new vx({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Ti(new Da,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(qg),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const g=this._cubeSize;El(r,v*g,d>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;El(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,uf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kg[(r-1)%Kg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):Fr;m>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);const d=[];let v=0;for(let T=0;T<Fr;++T){const P=T/y,X=Math.exp(-P*P/2);d.push(X),T===0?v+=X:T<m&&(v+=2*X)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],w=3*S*(r>g-Ns?r-g+Ns:0),A=4*(this._cubeSize-S);El(n,w,A,3*S,2*S),l.setRenderTarget(n),l.render(f,uf)}}function rR(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+$g.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=$g[o-t+Ns-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,y=3,m=2,d=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),S=new Float32Array(d*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,X=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(X,y*_*A),g.set(h,m*_*A);const x=[A,A,A,A,A,A];S.set(x,d*_*A)}const w=new Ii;w.setAttribute("position",new qn(v,y)),w.setAttribute("uv",new qn(g,m)),w.setAttribute("faceIndex",new qn(S,d)),e.push(w),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qg(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sR(t,e,n){const i=new Float32Array(Fr),r=new k(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Jg(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ev(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Td||l===wd,c=l===to||l===no;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Zg(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Zg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lR(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,S=v.length;g<S;g+=3){const w=v[g+0],A=v[g+1],T=v[g+2];h.push(w,A,A,T,T,w)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const w=g+0,A=g+1,T=g+2;h.push(w,A,A,T,T,w)}}else return;const m=new(cx(h)?yx:_x)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function uR(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function f(p,_,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,a,p*l,y),n.update(_,s,y)}function h(p,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,y);let d=0;for(let v=0;v<y;v++)d+=_[v];n.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function cR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fR(t,e){return t[0]-e[0]}function dR(t,e){return Math.abs(e[1])-Math.abs(t[1])}function hR(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==y){let K=function(){R.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const d=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,g=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let T=0;d===!0&&(T=1),v===!0&&(T=2),g===!0&&(T=3);let P=c.attributes.position.count*T,X=1;P>e.maxTextureSize&&(X=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const x=new Float32Array(P*X*4*y),R=new hx(x,P,X,y);R.type=xi,R.needsUpdate=!0;const ee=T*4;for(let L=0;L<y;L++){const Y=S[L],W=w[L],j=A[L],b=P*X*4*L;for(let I=0;I<Y.count;I++){const z=I*ee;d===!0&&(o.fromBufferAttribute(Y,I),x[b+z+0]=o.x,x[b+z+1]=o.y,x[b+z+2]=o.z,x[b+z+3]=0),v===!0&&(o.fromBufferAttribute(W,I),x[b+z+4]=o.x,x[b+z+5]=o.y,x[b+z+6]=o.z,x[b+z+7]=0),g===!0&&(o.fromBufferAttribute(j,I),x[b+z+8]=o.x,x[b+z+9]=o.y,x[b+z+10]=o.z,x[b+z+11]=j.itemSize===4?o.w:1)}}m={count:y,texture:R,size:new qe(P,X)},s.set(c,m),c.addEventListener("dispose",K)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let d=0;for(let g=0;g<h.length;g++)d+=h[g];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[c.id]=y}for(let S=0;S<_;S++){const w=y[S];w[0]=S,w[1]=h[S]}y.sort(dR);for(let S=0;S<8;S++)S<_&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(fR);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const w=a[S],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+S)!==m[A]&&c.setAttribute("morphTarget"+S,m[A]),d&&c.getAttribute("morphNormal"+S)!==d[A]&&c.setAttribute("morphNormal"+S,d[A]),r[S]=T,v+=T):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),d&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const g=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function pR(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class wx extends dn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Xr,c!==Xr&&c!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xr&&(i=Qi),i===void 0&&c===io&&(i=Wr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ax=new dn,Cx=new wx(1,1);Cx.compareFunction=ux;const Rx=new hx,Px=new q1,bx=new Mx,tv=[],nv=[],iv=new Float32Array(16),rv=new Float32Array(9),sv=new Float32Array(4);function fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tv[r];if(s===void 0&&(s=new Float32Array(r),tv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qu(t,e){let n=nv[e];n===void 0&&(n=new Int32Array(e),nv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function yR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;sv.set(i),t.uniformMatrix2fv(this.addr,!1,sv),Ct(n,i)}}function xR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;rv.set(i),t.uniformMatrix3fv(this.addr,!1,rv),Ct(n,i)}}function SR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;iv.set(i),t.uniformMatrix4fv(this.addr,!1,iv),Ct(n,i)}}function MR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ER(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function TR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function wR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function AR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function CR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function RR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function bR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Cx:Ax;n.setTexture2D(e||s,r)}function LR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function DR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bx,r)}function NR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function UR(t){switch(t){case 5126:return mR;case 35664:return gR;case 35665:return vR;case 35666:return _R;case 35674:return yR;case 35675:return xR;case 35676:return SR;case 5124:case 35670:return MR;case 35667:case 35671:return ER;case 35668:case 35672:return TR;case 35669:case 35673:return wR;case 5125:return AR;case 36294:return CR;case 36295:return RR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return LR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return NR}}function IR(t,e){t.uniform1fv(this.addr,e)}function FR(t,e){const n=fo(e,this.size,2);t.uniform2fv(this.addr,n)}function OR(t,e){const n=fo(e,this.size,3);t.uniform3fv(this.addr,n)}function kR(t,e){const n=fo(e,this.size,4);t.uniform4fv(this.addr,n)}function BR(t,e){const n=fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zR(t,e){const n=fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VR(t,e){const n=fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HR(t,e){t.uniform1iv(this.addr,e)}function GR(t,e){t.uniform2iv(this.addr,e)}function WR(t,e){t.uniform3iv(this.addr,e)}function XR(t,e){t.uniform4iv(this.addr,e)}function jR(t,e){t.uniform1uiv(this.addr,e)}function YR(t,e){t.uniform2uiv(this.addr,e)}function $R(t,e){t.uniform3uiv(this.addr,e)}function qR(t,e){t.uniform4uiv(this.addr,e)}function KR(t,e,n){const i=this.cache,r=e.length,s=Qu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ax,s[o])}function ZR(t,e,n){const i=this.cache,r=e.length,s=Qu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Px,s[o])}function QR(t,e,n){const i=this.cache,r=e.length,s=Qu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||bx,s[o])}function JR(t,e,n){const i=this.cache,r=e.length,s=Qu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Rx,s[o])}function eP(t){switch(t){case 5126:return IR;case 35664:return FR;case 35665:return OR;case 35666:return kR;case 35674:return BR;case 35675:return zR;case 35676:return VR;case 5124:case 35670:return HR;case 35667:case 35671:return GR;case 35668:case 35672:return WR;case 35669:case 35673:return XR;case 5125:return jR;case 36294:return YR;case 36295:return $R;case 36296:return qR;case 35678:case 36198:case 36298:case 36306:case 35682:return KR;case 35679:case 36299:case 36307:return ZR;case 35680:case 36300:case 36308:case 36293:return QR;case 36289:case 36303:case 36311:case 36292:return JR}}class tP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UR(n.type)}}class nP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eP(n.type)}}class iP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function ov(t,e){t.seq.push(e),t.map[e.id]=e}function rP(t,e,n){const i=t.name,r=i.length;for(hf.lastIndex=0;;){const s=hf.exec(i),o=hf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ov(n,u===void 0?new tP(a,t,e):new nP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new iP(a),ov(n,f)),n=f}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);rP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function av(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sP=37297;let oP=0;function aP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function lP(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Mu&&n===Su?i="LinearDisplayP3ToLinearSRGB":e===Su&&n===Mu&&(i="LinearSRGBToLinearDisplayP3"),t){case _r:case qu:return[i,"LinearTransferOETF"];case ti:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function lv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+aP(t.getShaderSource(e),o)}else return r}function uP(t,e){const n=lP(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cP(t,e){let n;switch(e){case g1:n="Linear";break;case v1:n="Reinhard";break;case _1:n="OptimizedCineon";break;case y1:n="ACESFilmic";break;case S1:n="AgX";break;case M1:n="Neutral";break;case x1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function fP(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function dP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function hP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Us(t){return t!==""}function uv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(mP,vP)}const gP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vP(t,e){let n=Fe[e];if(n===void 0){const i=gP.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(n)}const _P=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(t){return t.replace(_P,yP)}function yP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===WT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function SP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function EP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function TP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xP(n),u=SP(n),c=MP(n),f=EP(n),h=TP(n),p=n.isWebGL2?"":fP(n),_=dP(n),y=hP(s),m=r.createProgram();let d,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),v.length>0&&(v+=`
`)):(d=[dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),v=[p,dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==lr?cP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,uP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),o=Ld(o),o=uv(o,n),o=cv(o,n),a=Ld(a),a=uv(a,n),a=cv(a,n),o=fv(o),a=fv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+d+o,w=g+v+a,A=av(r,r.VERTEX_SHADER,S),T=av(r,r.FRAGMENT_SHADER,w);r.attachShader(m,A),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(ee){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(A).trim(),Y=r.getShaderInfoLog(T).trim();let W=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,T);else{const b=lv(r,A,"vertex"),I=lv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+K+`
`+b+`
`+I)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||Y==="")&&(j=!1);j&&(ee.diagnostics={runnable:W,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:Y,prefix:v}})}r.deleteShader(A),r.deleteShader(T),X=new Gl(r,m),x=pP(r,m)}let X;this.getUniforms=function(){return X===void 0&&P(this),X};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,sP)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let AP=0;class CP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RP(e),n.set(e,i)),i}}class RP{constructor(e){this.id=AP++,this.code=e,this.usedTimes=0}}function PP(t,e,n,i,r,s,o){const a=new mx,l=new CP,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,R,ee,K,L){const Y=K.fog,W=L.geometry,j=x.isMeshStandardMaterial?K.environment:null,b=(x.isMeshStandardMaterial?n:e).get(x.envMap||j),I=b&&b.mapping===$u?b.image.height:null,z=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=q!==void 0?q.length:0;let Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let V,Z,ue,Ee;if(z){const et=ni[z];V=et.vertexShader,Z=et.fragmentShader}else V=x.vertexShader,Z=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),Ee=l.getFragmentShaderID(x);const ye=t.getRenderTarget(),pe=L.isInstancedMesh===!0,Ke=L.isBatchedMesh===!0,Pe=!!x.map,U=!!x.matcap,Nt=!!b,Se=!!x.aoMap,ze=!!x.lightMap,we=!!x.bumpMap,Xe=!!x.normalMap,ke=!!x.displacementMap,Ve=!!x.emissiveMap,gt=!!x.metalnessMap,C=!!x.roughnessMap,M=x.anisotropy>0,G=x.clearcoat>0,$=x.iridescence>0,te=x.sheen>0,Q=x.transmission>0,Ne=M&&!!x.anisotropyMap,Ae=G&&!!x.clearcoatMap,oe=G&&!!x.clearcoatNormalMap,ce=G&&!!x.clearcoatRoughnessMap,Ue=$&&!!x.iridescenceMap,ne=$&&!!x.iridescenceThicknessMap,xt=te&&!!x.sheenColorMap,He=te&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ge=!!x.specularColorMap,ve=!!x.specularIntensityMap,je=Q&&!!x.transmissionMap,Le=Q&&!!x.thicknessMap,ot=!!x.gradientMap,D=!!x.alphaMap,le=x.alphaTest>0,O=!!x.alphaHash,ie=!!x.extensions;let fe=lr;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(fe=t.toneMapping);const We={isWebGL2:f,shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Z,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:Ke,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:_r,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:U,envMap:Nt,envMapMode:Nt&&b.mapping,envMapCubeUVHeight:I,aoMap:Se,lightMap:ze,bumpMap:we,normalMap:Xe,displacementMap:p&&ke,emissiveMap:Ve,normalMapObjectSpace:Xe&&x.normalMapType===U1,normalMapTangentSpace:Xe&&x.normalMapType===N1,metalnessMap:gt,roughnessMap:C,anisotropy:M,anisotropyMap:Ne,clearcoat:G,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,iridescence:$,iridescenceMap:Ue,iridescenceThicknessMap:ne,sheen:te,sheenColorMap:xt,sheenRoughnessMap:He,specularMap:xe,specularColorMap:ge,specularIntensityMap:ve,transmission:Q,transmissionMap:je,thicknessMap:Le,gradientMap:ot,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:le,alphaHash:O,combine:x.combine,mapUv:Pe&&m(x.map.channel),aoMapUv:Se&&m(x.aoMap.channel),lightMapUv:ze&&m(x.lightMap.channel),bumpMapUv:we&&m(x.bumpMap.channel),normalMapUv:Xe&&m(x.normalMap.channel),displacementMapUv:ke&&m(x.displacementMap.channel),emissiveMapUv:Ve&&m(x.emissiveMap.channel),metalnessMapUv:gt&&m(x.metalnessMap.channel),roughnessMapUv:C&&m(x.roughnessMap.channel),anisotropyMapUv:Ne&&m(x.anisotropyMap.channel),clearcoatMapUv:Ae&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(x.sheenRoughnessMap.channel),specularMapUv:xe&&m(x.specularMap.channel),specularColorMapUv:ge&&m(x.specularColorMap.channel),specularIntensityMapUv:ve&&m(x.specularIntensityMap.channel),transmissionMapUv:je&&m(x.transmissionMap.channel),thicknessMapUv:Le&&m(x.thicknessMap.channel),alphaMapUv:D&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xe||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Pe||D),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ie&&x.extensions.derivatives===!0,extensionFragDepth:ie&&x.extensions.fragDepth===!0,extensionDrawBuffers:ie&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=u.has(1),We.vertexUv2s=u.has(2),We.vertexUv3s=u.has(3),u.clear(),We}function v(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ee in x.defines)R.push(ee),R.push(x.defines[ee]);return x.isRawShaderMaterial===!1&&(g(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function g(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const R=y[x.type];let ee;if(R){const K=ni[R];ee=lw.clone(K.uniforms)}else ee=x.uniforms;return ee}function A(x,R){let ee;for(let K=0,L=c.length;K<L;K++){const Y=c[K];if(Y.cacheKey===R){ee=Y,++ee.usedTimes;break}}return ee===void 0&&(ee=new wP(t,R,x,s),c.push(ee)),ee}function T(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:w,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:X}}function bP(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function LP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,y,m){const d=o(f,h,p,_,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||LP),i.length>1&&i.sort(h||hv),r.length>1&&r.sort(h||hv)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function DP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pv,t.set(i,[o])):r>=s.length?(o=new pv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ze};break;case"SpotLight":n={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function UP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IP=0;function FP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OP(t,e){const n=new NP,i=UP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,o=new Et,a=new Et;function l(c,f){let h=0,p=0,_=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,m=0,d=0,v=0,g=0,S=0,w=0,A=0,T=0,P=0,X=0;c.sort(FP);const x=f===!0?Math.PI:1;for(let ee=0,K=c.length;ee<K;ee++){const L=c[ee],Y=L.color,W=L.intensity,j=L.distance,b=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Y.r*W*x,p+=Y.g*W*x,_+=Y.b*W*x;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],W);X++}else if(L.isDirectionalLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const z=L.shadow,q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=b,r.directionalShadowMatrix[y]=L.shadow.matrix,S++}r.directional[y]=I,y++}else if(L.isSpotLight){const I=n.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(Y).multiplyScalar(W*x),I.distance=j,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[d]=I;const z=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,z.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[d]=z.matrix,L.castShadow){const q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,r.spotShadow[d]=q,r.spotShadowMap[d]=b,A++}d++}else if(L.isRectAreaLight){const I=n.get(L);I.color.copy(Y).multiplyScalar(W),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=I,v++}else if(L.isPointLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*x),I.distance=L.distance,I.decay=L.decay,L.castShadow){const z=L.shadow,q=i.get(L);q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=b,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=I,m++}else if(L.isHemisphereLight){const I=n.get(L);I.skyColor.copy(L.color).multiplyScalar(W*x),I.groundColor.copy(L.groundColor).multiplyScalar(W*x),r.hemi[g]=I,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==y||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==A||R.numSpotMaps!==T||R.numLightProbes!==X)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=X,R.directionalLength=y,R.pointLength=m,R.spotLength=d,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=A,R.numSpotMaps=T,R.numLightProbes=X,r.version=IP++)}function u(c,f){let h=0,p=0,_=0,y=0,m=0;const d=f.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const S=c[v];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function mv(t,e){const n=new OP(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function kP(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new mv(t,e),n.set(s,[l])):o>=a.length?(l=new mv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class BP extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zP extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GP(t,e,n){let i=new Ex;const r=new qe,s=new qe,o=new Ft,a=new BP({depthPacking:D1}),l=new zP,u={},c=n.maxTextureSize,f={[dr]:fn,[fn]:dr,[yi]:yi},h=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:VP,fragmentShader:HP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ii;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ti(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jy;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const X=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(ar),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const K=d!==gi&&this.type===gi,L=d===gi&&this.type!==gi;for(let Y=0,W=A.length;Y<W;Y++){const j=A[Y],b=j.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const I=b.getFrameExtents();if(r.multiply(I),s.copy(b.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/I.x),r.x=s.x*I.x,b.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/I.y),r.y=s.y*I.y,b.mapSize.y=s.y)),b.map===null||K===!0||L===!0){const q=this.type!==gi?{minFilter:Zt,magFilter:Zt}:{};b.map!==null&&b.map.dispose(),b.map=new Jr(r.x,r.y,q),b.map.texture.name=j.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const z=b.getViewportCount();for(let q=0;q<z;q++){const re=b.getViewport(q);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),ee.viewport(o),b.updateMatrices(j,q),i=b.getFrustum(),S(T,P,b.camera,j,this.type)}b.isPointLightShadow!==!0&&this.type===gi&&v(b,P),b.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(X,x,R)};function v(A,T){const P=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function g(A,T,P,X){let x=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ee=x.uuid,K=T.uuid;let L=u[ee];L===void 0&&(L={},u[ee]=L);let Y=L[K];Y===void 0&&(Y=x.clone(),L[K]=Y,T.addEventListener("dispose",w)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,X===gi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const ee=t.properties.get(x);ee.light=P}return x}function S(A,T,P,X,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const K=e.update(A),L=A.material;if(Array.isArray(L)){const Y=K.groups;for(let W=0,j=Y.length;W<j;W++){const b=Y[W],I=L[b.materialIndex];if(I&&I.visible){const z=g(A,I,X,x);A.onBeforeShadow(t,A,T,P,K,z,b),t.renderBufferDirect(P,null,K,z,A,b),A.onAfterShadow(t,A,T,P,K,z,b)}}}else if(L.visible){const Y=g(A,L,X,x);A.onBeforeShadow(t,A,T,P,K,Y,null),t.renderBufferDirect(P,null,K,Y,A,null),A.onAfterShadow(t,A,T,P,K,Y,null)}}const ee=A.children;for(let K=0,L=ee.length;K<L;K++)S(ee[K],T,P,X,x)}function w(A){A.target.removeEventListener("dispose",w);for(const P in u){const X=u[P],x=A.target.uuid;x in X&&(X[x].dispose(),delete X[x])}}}function WP(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const le=new Ft;let O=null;const ie=new Ft(0,0,0,0);return{setMask:function(fe){O!==fe&&!D&&(t.colorMask(fe,fe,fe,fe),O=fe)},setLocked:function(fe){D=fe},setClear:function(fe,We,et,Ut,Tn){Tn===!0&&(fe*=Ut,We*=Ut,et*=Ut),le.set(fe,We,et,Ut),ie.equals(le)===!1&&(t.clearColor(fe,We,et,Ut),ie.copy(le))},reset:function(){D=!1,O=null,ie.set(-1,0,0,0)}}}function s(){let D=!1,le=null,O=null,ie=null;return{setTest:function(fe){fe?pe(t.DEPTH_TEST):Ke(t.DEPTH_TEST)},setMask:function(fe){le!==fe&&!D&&(t.depthMask(fe),le=fe)},setFunc:function(fe){if(O!==fe){switch(fe){case a1:t.depthFunc(t.NEVER);break;case l1:t.depthFunc(t.ALWAYS);break;case u1:t.depthFunc(t.LESS);break;case yu:t.depthFunc(t.LEQUAL);break;case c1:t.depthFunc(t.EQUAL);break;case f1:t.depthFunc(t.GEQUAL);break;case d1:t.depthFunc(t.GREATER);break;case h1:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=fe}},setLocked:function(fe){D=fe},setClear:function(fe){ie!==fe&&(t.clearDepth(fe),ie=fe)},reset:function(){D=!1,le=null,O=null,ie=null}}}function o(){let D=!1,le=null,O=null,ie=null,fe=null,We=null,et=null,Ut=null,Tn=null;return{setTest:function(tt){D||(tt?pe(t.STENCIL_TEST):Ke(t.STENCIL_TEST))},setMask:function(tt){le!==tt&&!D&&(t.stencilMask(tt),le=tt)},setFunc:function(tt,$t,Qn){(O!==tt||ie!==$t||fe!==Qn)&&(t.stencilFunc(tt,$t,Qn),O=tt,ie=$t,fe=Qn)},setOp:function(tt,$t,Qn){(We!==tt||et!==$t||Ut!==Qn)&&(t.stencilOp(tt,$t,Qn),We=tt,et=$t,Ut=Qn)},setLocked:function(tt){D=tt},setClear:function(tt){Tn!==tt&&(t.clearStencil(tt),Tn=tt)},reset:function(){D=!1,le=null,O=null,ie=null,fe=null,We=null,et=null,Ut=null,Tn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,y=[],m=null,d=!1,v=null,g=null,S=null,w=null,A=null,T=null,P=null,X=new Ze(0,0,0),x=0,R=!1,ee=null,K=null,L=null,Y=null,W=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let b=!1,I=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(z)[1]),b=I>=1):z.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),b=I>=2);let q=null,re={};const Ce=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),Z=new Ft().fromArray(Ce),ue=new Ft().fromArray(V);function Ee(D,le,O,ie){const fe=new Uint8Array(4),We=t.createTexture();t.bindTexture(D,We),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<O;et++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(le+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return We}const ye={};ye[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(t.DEPTH_TEST),l.setFunc(yu),ke(!1),Ve($m),pe(t.CULL_FACE),we(ar);function pe(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Ke(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function Pe(D,le){return p[D]!==le?(t.bindFramebuffer(D,le),p[D]=le,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function U(D,le){let O=y,ie=!1;if(D){O=_.get(le),O===void 0&&(O=[],_.set(le,O));const fe=D.textures;if(O.length!==fe.length||O[0]!==t.COLOR_ATTACHMENT0){for(let We=0,et=fe.length;We<et;We++)O[We]=t.COLOR_ATTACHMENT0+We;O.length=fe.length,ie=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,ie=!0);if(ie)if(n.isWebGL2)t.drawBuffers(O);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Nt(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Se={[Ir]:t.FUNC_ADD,[jT]:t.FUNC_SUBTRACT,[YT]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[Qm]=t.MIN,Se[Jm]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Se[Qm]=D.MIN_EXT,Se[Jm]=D.MAX_EXT)}const ze={[$T]:t.ZERO,[qT]:t.ONE,[KT]:t.SRC_COLOR,[Md]:t.SRC_ALPHA,[n1]:t.SRC_ALPHA_SATURATE,[e1]:t.DST_COLOR,[QT]:t.DST_ALPHA,[ZT]:t.ONE_MINUS_SRC_COLOR,[Ed]:t.ONE_MINUS_SRC_ALPHA,[t1]:t.ONE_MINUS_DST_COLOR,[JT]:t.ONE_MINUS_DST_ALPHA,[i1]:t.CONSTANT_COLOR,[r1]:t.ONE_MINUS_CONSTANT_COLOR,[s1]:t.CONSTANT_ALPHA,[o1]:t.ONE_MINUS_CONSTANT_ALPHA};function we(D,le,O,ie,fe,We,et,Ut,Tn,tt){if(D===ar){d===!0&&(Ke(t.BLEND),d=!1);return}if(d===!1&&(pe(t.BLEND),d=!0),D!==XT){if(D!==v||tt!==R){if((g!==Ir||A!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,A=Ir),tt)switch(D){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qm:t.blendFunc(t.ONE,t.ONE);break;case Km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Km:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Zm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,T=null,P=null,X.set(0,0,0),x=0,v=D,R=tt}return}fe=fe||le,We=We||O,et=et||ie,(le!==g||fe!==A)&&(t.blendEquationSeparate(Se[le],Se[fe]),g=le,A=fe),(O!==S||ie!==w||We!==T||et!==P)&&(t.blendFuncSeparate(ze[O],ze[ie],ze[We],ze[et]),S=O,w=ie,T=We,P=et),(Ut.equals(X)===!1||Tn!==x)&&(t.blendColor(Ut.r,Ut.g,Ut.b,Tn),X.copy(Ut),x=Tn),v=D,R=!1}function Xe(D,le){D.side===yi?Ke(t.CULL_FACE):pe(t.CULL_FACE);let O=D.side===fn;le&&(O=!O),ke(O),D.blending===js&&D.transparent===!1?we(ar):we(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ie=D.stencilWrite;u.setTest(ie),ie&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){ee!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),ee=D)}function Ve(D){D!==HT?(pe(t.CULL_FACE),D!==K&&(D===$m?t.cullFace(t.BACK):D===GT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ke(t.CULL_FACE),K=D}function gt(D){D!==L&&(b&&t.lineWidth(D),L=D)}function C(D,le,O){D?(pe(t.POLYGON_OFFSET_FILL),(Y!==le||W!==O)&&(t.polygonOffset(le,O),Y=le,W=O)):Ke(t.POLYGON_OFFSET_FILL)}function M(D){D?pe(t.SCISSOR_TEST):Ke(t.SCISSOR_TEST)}function G(D){D===void 0&&(D=t.TEXTURE0+j-1),q!==D&&(t.activeTexture(D),q=D)}function $(D,le,O){O===void 0&&(q===null?O=t.TEXTURE0+j-1:O=q);let ie=re[O];ie===void 0&&(ie={type:void 0,texture:void 0},re[O]=ie),(ie.type!==D||ie.texture!==le)&&(q!==O&&(t.activeTexture(O),q=O),t.bindTexture(D,le||ye[D]),ie.type=D,ie.texture=le)}function te(){const D=re[q];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Z.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function ve(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function je(D,le){let O=f.get(le);O===void 0&&(O=new WeakMap,f.set(le,O));let ie=O.get(D);ie===void 0&&(ie=t.getUniformBlockIndex(le,D.name),O.set(D,ie))}function Le(D,le){const ie=f.get(le).get(D);c.get(le)!==ie&&(t.uniformBlockBinding(le,ie,D.__bindingPointIndex),c.set(le,ie))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,re={},p={},_=new WeakMap,y=[],m=null,d=!1,v=null,g=null,S=null,w=null,A=null,T=null,P=null,X=new Ze(0,0,0),x=0,R=!1,ee=null,K=null,L=null,Y=null,W=null,Z.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:Ke,bindFramebuffer:Pe,drawBuffers:U,useProgram:Nt,setBlending:we,setMaterial:Xe,setFlipSided:ke,setCullFace:Ve,setLineWidth:gt,setPolygonOffset:C,setScissorTest:M,activeTexture:G,bindTexture:$,unbindTexture:te,compressedTexImage2D:Q,compressedTexImage3D:Ne,texImage2D:He,texImage3D:xe,updateUBOMapping:je,uniformBlockBinding:Le,texStorage2D:ne,texStorage3D:xt,texSubImage2D:Ae,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ue,scissor:ge,viewport:ve,reset:ot}}function XP(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,f=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return _?new OffscreenCanvas(C,M):Tu("canvas")}function m(C,M,G,$){let te=1;const Q=gt(C);if((Q.width>$||Q.height>$)&&(te=$/Math.max(Q.width,Q.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ne=M?bd:Math.floor,Ae=Ne(te*Q.width),oe=Ne(te*Q.height);h===void 0&&(h=y(Ae,oe));const ce=G?y(Ae,oe):h;return ce.width=Ae,ce.height=oe,ce.getContext("2d").drawImage(C,0,0,Ae,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Ae+"x"+oe+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function d(C){const M=gt(C);return Pg(M.width)&&Pg(M.height)}function v(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==Zt&&C.minFilter!==rn}function g(C,M){return C.generateMipmaps&&M&&C.minFilter!==Zt&&C.minFilter!==rn}function S(C){t.generateMipmap(C)}function w(C,M,G,$,te=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=M;if(M===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),M===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),M===t.RGBA){const Ne=te?xu:Je.getTransfer($);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=Ne===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(C,M,G){return g(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==Zt&&C.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===Zt||C===eg||C===To?t.NEAREST:t.LINEAR}function P(C){const M=C.target;M.removeEventListener("dispose",P),x(M),M.isVideoTexture&&f.delete(M)}function X(C){const M=C.target;M.removeEventListener("dispose",X),ee(M)}function x(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,$=p.get(G);if($){const te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(C),Object.keys($).length===0&&p.delete(G)}i.remove(C)}function R(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const G=C.source,$=p.get(G);delete $[M.__cacheKey],o.memory.textures--}function ee(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[$][te]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let $=0,te=G.length;$<te;$++){const Q=i.get(G[$]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(C)}let K=0;function L(){K=0}function Y(){const C=K;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),K+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const G=i.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,C,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function b(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ue(G,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function I(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){ue(G,C,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function z(C,M){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Ee(G,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const q={[Ad]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Cd]:t.MIRRORED_REPEAT},re={[Zt]:t.NEAREST,[eg]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[Ic]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},Ce={[I1]:t.NEVER,[V1]:t.ALWAYS,[F1]:t.LESS,[ux]:t.LEQUAL,[O1]:t.EQUAL,[z1]:t.GEQUAL,[k1]:t.GREATER,[B1]:t.NOTEQUAL};function V(C,M,G){if(M.type===xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Ic||M.magFilter===To||M.magFilter===zr||M.minFilter===rn||M.minFilter===Ic||M.minFilter===To||M.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),G?(t.texParameteri(C,t.TEXTURE_WRAP_S,q[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,q[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,q[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,re[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Xn||M.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ce[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==To&&M.minFilter!==zr||M.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P));const $=M.source;let te=p.get($);te===void 0&&(te={},p.set($,te));const Q=W(M);if(Q!==C.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[Q].usedTimes++;const Ne=te[C.__cacheKey];Ne!==void 0&&(te[C.__cacheKey].usedTimes--,Ne.usedTimes===0&&R(M)),C.__cacheKey=Q,C.__webglTexture=te[Q].texture}return G}function ue(C,M,G){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const te=Z(C,M),Q=M.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+G);const Ne=i.get(Q);if(Q.version!==Ne.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const Ae=Je.getPrimaries(Je.workingColorSpace),oe=M.colorSpace===qi?null:Je.getPrimaries(M.colorSpace),ce=M.colorSpace===qi||Ae===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ue=v(M)&&d(M.image)===!1;let ne=m(M.image,Ue,!1,r.maxTextureSize);ne=Ve(M,ne);const xt=d(ne)||a,He=s.convert(M.format,M.colorSpace);let xe=s.convert(M.type),ge=w(M.internalFormat,He,xe,M.colorSpace,M.isVideoTexture);V($,M,xt);let ve;const je=M.mipmaps,Le=a&&M.isVideoTexture!==!0&&ge!==lx,ot=Ne.__version===void 0||te===!0,D=Q.dataReady,le=A(M,ne,xt);if(M.isDepthTexture)ge=t.DEPTH_COMPONENT,a?M.type===xi?ge=t.DEPTH_COMPONENT32F:M.type===Qi?ge=t.DEPTH_COMPONENT24:M.type===Wr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:M.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Xr&&ge===t.DEPTH_COMPONENT&&M.type!==Yh&&M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qi,xe=s.convert(M.type)),M.format===io&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,M.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Wr,xe=s.convert(M.type))),ot&&(Le?n.texStorage2D(t.TEXTURE_2D,1,ge,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,ge,ne.width,ne.height,0,He,xe,null));else if(M.isDataTexture)if(je.length>0&&xt){Le&&ot&&n.texStorage2D(t.TEXTURE_2D,le,ge,je[0].width,je[0].height);for(let O=0,ie=je.length;O<ie;O++)ve=je[O],Le?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ve.width,ve.height,He,xe,ve.data):n.texImage2D(t.TEXTURE_2D,O,ge,ve.width,ve.height,0,He,xe,ve.data);M.generateMipmaps=!1}else Le?(ot&&n.texStorage2D(t.TEXTURE_2D,le,ge,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,He,xe,ne.data)):n.texImage2D(t.TEXTURE_2D,0,ge,ne.width,ne.height,0,He,xe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,je[0].width,je[0].height,ne.depth);for(let O=0,ie=je.length;O<ie;O++)ve=je[O],M.format!==jn?He!==null?Le?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,ve.width,ve.height,ne.depth,He,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,ge,ve.width,ve.height,ne.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,ve.width,ve.height,ne.depth,He,xe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,O,ge,ve.width,ve.height,ne.depth,0,He,xe,ve.data)}else{Le&&ot&&n.texStorage2D(t.TEXTURE_2D,le,ge,je[0].width,je[0].height);for(let O=0,ie=je.length;O<ie;O++)ve=je[O],M.format!==jn?He!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,ve.width,ve.height,He,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,O,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ve.width,ve.height,He,xe,ve.data):n.texImage2D(t.TEXTURE_2D,O,ge,ve.width,ve.height,0,He,xe,ve.data)}else if(M.isDataArrayTexture)Le?(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,ge,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,He,xe,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,He,xe,ne.data);else if(M.isData3DTexture)Le?(ot&&n.texStorage3D(t.TEXTURE_3D,le,ge,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,He,xe,ne.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,He,xe,ne.data);else if(M.isFramebufferTexture){if(ot)if(Le)n.texStorage2D(t.TEXTURE_2D,le,ge,ne.width,ne.height);else{let O=ne.width,ie=ne.height;for(let fe=0;fe<le;fe++)n.texImage2D(t.TEXTURE_2D,fe,ge,O,ie,0,He,xe,null),O>>=1,ie>>=1}}else if(je.length>0&&xt){if(Le&&ot){const O=gt(je[0]);n.texStorage2D(t.TEXTURE_2D,le,ge,O.width,O.height)}for(let O=0,ie=je.length;O<ie;O++)ve=je[O],Le?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,He,xe,ve):n.texImage2D(t.TEXTURE_2D,O,ge,He,xe,ve);M.generateMipmaps=!1}else if(Le){if(ot){const O=gt(ne);n.texStorage2D(t.TEXTURE_2D,le,ge,O.width,O.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,xe,ne)}else n.texImage2D(t.TEXTURE_2D,0,ge,He,xe,ne);g(M,xt)&&S($),Ne.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ee(C,M,G){if(M.image.length!==6)return;const $=Z(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const Q=i.get(te);if(te.version!==Q.__version||$===!0){n.activeTexture(t.TEXTURE0+G);const Ne=Je.getPrimaries(Je.workingColorSpace),Ae=M.colorSpace===qi?null:Je.getPrimaries(M.colorSpace),oe=M.colorSpace===qi||Ne===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let O=0;O<6;O++)!ce&&!Ue?ne[O]=m(M.image[O],!1,!0,r.maxCubemapSize):ne[O]=Ue?M.image[O].image:M.image[O],ne[O]=Ve(M,ne[O]);const xt=ne[0],He=d(xt)||a,xe=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),ve=w(M.internalFormat,xe,ge,M.colorSpace),je=a&&M.isVideoTexture!==!0,Le=Q.__version===void 0||$===!0,ot=te.dataReady;let D=A(M,xt,He);V(t.TEXTURE_CUBE_MAP,M,He);let le;if(ce){je&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ve,xt.width,xt.height);for(let O=0;O<6;O++){le=ne[O].mipmaps;for(let ie=0;ie<le.length;ie++){const fe=le[ie];M.format!==jn?xe!==null?je?ot&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,fe.width,fe.height,xe,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,0,0,fe.width,fe.height,xe,ge,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie,ve,fe.width,fe.height,0,xe,ge,fe.data)}}}else{if(le=M.mipmaps,je&&Le){le.length>0&&D++;const O=gt(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ve,O.width,O.height)}for(let O=0;O<6;O++)if(Ue){je?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ne[O].width,ne[O].height,xe,ge,ne[O].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ve,ne[O].width,ne[O].height,0,xe,ge,ne[O].data);for(let ie=0;ie<le.length;ie++){const We=le[ie].image[O].image;je?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,We.width,We.height,xe,ge,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,ve,We.width,We.height,0,xe,ge,We.data)}}else{je?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,xe,ge,ne[O]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,ve,xe,ge,ne[O]);for(let ie=0;ie<le.length;ie++){const fe=le[ie];je?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,0,0,xe,ge,fe.image[O]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ie+1,ve,xe,ge,fe.image[O])}}}g(M,He)&&S(t.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,G,$,te,Q){const Ne=s.convert(G.format,G.colorSpace),Ae=s.convert(G.type),oe=w(G.internalFormat,Ne,Ae,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Ue=Math.max(1,M.width>>Q),ne=Math.max(1,M.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,oe,Ue,ne,M.depth,0,Ne,Ae,null):n.texImage2D(te,Q,oe,Ue,ne,0,Ne,Ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,i.get(G).__webglTexture,0,we(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,i.get(G).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(C,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let $=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||Xe(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===xi?$=t.DEPTH_COMPONENT32F:te.type===Qi&&($=t.DEPTH_COMPONENT24));const Q=we(M);Xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,$,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,$,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const $=we(M);G&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):Xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const $=M.textures;for(let te=0;te<$.length;te++){const Q=$[te],Ne=s.convert(Q.format,Q.colorSpace),Ae=s.convert(Q.type),oe=w(Q.internalFormat,Ne,Ae,Q.colorSpace),ce=we(M);G&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,oe,M.width,M.height):Xe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,oe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,oe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ke(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,te=we(M);if(M.depthTexture.format===Xr)Xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(M.depthTexture.format===io)Xe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ke(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=t.createRenderbuffer(),pe(M.__webglDepthbuffer[$],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),pe(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(C,M,G){const $=i.get(C);M!==void 0&&ye($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Pe(C)}function Nt(C){const M=C.texture,G=i.get(C),$=i.get(M);C.addEventListener("dispose",X);const te=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ne=te.length>1,Ae=d(C)||a;if(Ne||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ce=0;ce<M.mipmaps.length;ce++)G.__webglFramebuffer[oe][ce]=t.createFramebuffer()}else G.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)G.__webglFramebuffer[oe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ne)if(r.drawBuffers)for(let oe=0,ce=te.length;oe<ce;oe++){const Ue=i.get(te[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Xe(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const ce=te[oe];G.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Ue=s.convert(ce.format,ce.colorSpace),ne=s.convert(ce.type),xt=w(ce.internalFormat,Ue,ne,ce.colorSpace,C.isXRRenderTarget===!0),He=we(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,xt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),V(t.TEXTURE_CUBE_MAP,M,Ae);for(let oe=0;oe<6;oe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ye(G.__webglFramebuffer[oe][ce],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else ye(G.__webglFramebuffer[oe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(M,Ae)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let oe=0,ce=te.length;oe<ce;oe++){const Ue=te[oe],ne=i.get(Ue);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),V(t.TEXTURE_2D,Ue,Ae),ye(G.__webglFramebuffer,C,Ue,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),g(Ue,Ae)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,$.__webglTexture),V(oe,M,Ae),a&&M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ye(G.__webglFramebuffer[ce],C,M,t.COLOR_ATTACHMENT0,oe,ce);else ye(G.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,oe,0);g(M,Ae)&&S(oe),n.unbindTexture()}C.depthBuffer&&Pe(C)}function Se(C){const M=d(C)||a,G=C.textures;for(let $=0,te=G.length;$<te;$++){const Q=G[$];if(g(Q,M)){const Ne=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(Q).__webglTexture;n.bindTexture(Ne,Ae),S(Ne),n.unbindTexture()}}}function ze(C){if(a&&C.samples>0&&Xe(C)===!1){const M=C.textures,G=C.width,$=C.height;let te=t.COLOR_BUFFER_BIT;const Q=[],Ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(C),oe=M.length>1;if(oe)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){Q.push(t.COLOR_ATTACHMENT0+ce),C.depthBuffer&&Q.push(Ne);const Ue=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(Ue===!1&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),oe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ne]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ne])),oe){const ne=i.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,G,$,0,0,G,$,te,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]);const Ue=i.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function we(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Ve(C,M){const G=C.colorSpace,$=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Rd||G!==_r&&G!==qi&&(Je.getTransfer(G)===rt?a===!1?e.has("EXT_sRGB")===!0&&$===jn?(C.format=Rd,C.minFilter=rn,C.generateMipmaps=!1):M=fx.sRGBToLinear(M):($!==jn||te!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.setTexture2D=j,this.setTexture2DArray=b,this.setTexture3D=I,this.setTextureCube=z,this.rebindTextures=U,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Xe}function jP(t,e,n){const i=n.isWebGL2;function r(s,o=qi){let a;const l=Je.getTransfer(o);if(s===ur)return t.UNSIGNED_BYTE;if(s===ix)return t.UNSIGNED_SHORT_4_4_4_4;if(s===rx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===E1)return t.BYTE;if(s===T1)return t.SHORT;if(s===Yh)return t.UNSIGNED_SHORT;if(s===nx)return t.INT;if(s===Qi)return t.UNSIGNED_INT;if(s===xi)return t.FLOAT;if(s===_a)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===w1)return t.ALPHA;if(s===jn)return t.RGBA;if(s===A1)return t.LUMINANCE;if(s===C1)return t.LUMINANCE_ALPHA;if(s===Xr)return t.DEPTH_COMPONENT;if(s===io)return t.DEPTH_STENCIL;if(s===Rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===R1)return t.RED;if(s===sx)return t.RED_INTEGER;if(s===P1)return t.RG;if(s===ox)return t.RG_INTEGER;if(s===ax)return t.RGBA_INTEGER;if(s===Fc||s===Oc||s===kc||s===Bc)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===tg||s===ng||s===ig||s===rg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===tg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ng)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ig)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sg||s===og)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sg)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===og)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ag||s===lg||s===ug||s===cg||s===fg||s===dg||s===hg||s===pg||s===mg||s===gg||s===vg||s===_g||s===yg||s===xg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ag)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ug)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_g)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===Sg||s===Mg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===zc)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===b1||s===Eg||s===Tg||s===wg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===zc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Eg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class YP extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tl extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $P={type:"move"};class pf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($P)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const qP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new hr({extensions:{fragDepth:!0},vertexShader:qP,fragmentShader:KP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Zu(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class QP extends co{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const y=new ZP,m=n.getContextAttributes();let d=null,v=null;const g=[],S=[],w=new qe;let A=null;const T=new Ln;T.layers.enable(1),T.viewport=new Ft;const P=new Ln;P.layers.enable(2),P.viewport=new Ft;const X=[T,P],x=new YP;x.layers.enable(1),x.layers.enable(2);let R=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=g[V];return Z===void 0&&(Z=new pf,g[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=g[V];return Z===void 0&&(Z=new pf,g[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=g[V];return Z===void 0&&(Z=new pf,g[V]=Z),Z.getHandSpace()};function K(V){const Z=S.indexOf(V.inputSource);if(Z===-1)return;const ue=g[Z];ue!==void 0&&(ue.update(V.inputSource,V.frame,u||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<g.length;V++){const Z=S[V];Z!==null&&(S[V]=null,g[V].disconnect(Z))}R=null,ee=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",L),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Jr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ue=null,Ee=null;m.depth&&(Ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?io:Xr,ue=m.stencil?Wr:Qi);const ye={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Jr(h.textureWidth,h.textureHeight,{format:jn,type:ur,depthTexture:new wx(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const pe=e.properties.get(v);pe.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(V){for(let Z=0;Z<V.removed.length;Z++){const ue=V.removed[Z],Ee=S.indexOf(ue);Ee>=0&&(S[Ee]=null,g[Ee].disconnect(ue))}for(let Z=0;Z<V.added.length;Z++){const ue=V.added[Z];let Ee=S.indexOf(ue);if(Ee===-1){for(let pe=0;pe<g.length;pe++)if(pe>=S.length){S.push(ue),Ee=pe;break}else if(S[pe]===null){S[pe]=ue,Ee=pe;break}if(Ee===-1)break}const ye=g[Ee];ye&&ye.connect(ue)}}const W=new k,j=new k;function b(V,Z,ue){W.setFromMatrixPosition(Z.matrixWorld),j.setFromMatrixPosition(ue.matrixWorld);const Ee=W.distanceTo(j),ye=Z.projectionMatrix.elements,pe=ue.projectionMatrix.elements,Ke=ye[14]/(ye[10]-1),Pe=ye[14]/(ye[10]+1),U=(ye[9]+1)/ye[5],Nt=(ye[9]-1)/ye[5],Se=(ye[8]-1)/ye[0],ze=(pe[8]+1)/pe[0],we=Ke*Se,Xe=Ke*ze,ke=Ee/(-Se+ze),Ve=ke*-Se;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ve),V.translateZ(ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const gt=Ke+ke,C=Pe+ke,M=we-Ve,G=Xe+(Ee-Ve),$=U*Pe/C*gt,te=Nt*Pe/C*gt;V.projectionMatrix.makePerspective(M,G,$,te,gt,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function I(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.texture!==null&&(V.near=y.depthNear,V.far=y.depthFar),x.near=P.near=T.near=V.near,x.far=P.far=T.far=V.far,(R!==x.near||ee!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,ee=x.far,T.near=R,T.far=ee,P.near=R,P.far=ee,T.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const Z=V.parent,ue=x.cameras;I(x,Z);for(let Ee=0;Ee<ue.length;Ee++)I(ue[Ee],Z);ue.length===2?b(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),z(V,x,Z)};function z(V,Z,ue){ue===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pd*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null};let q=null;function re(V,Z){if(c=Z.getViewerPose(u||o),_=Z,c!==null){const ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ee=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let pe=0;pe<ue.length;pe++){const Ke=ue[pe];let Pe=null;if(p!==null)Pe=p.getViewport(Ke);else{const Nt=f.getViewSubImage(h,Ke);Pe=Nt.viewport,pe===0&&(e.setRenderTargetTextures(v,Nt.colorTexture,h.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(v))}let U=X[pe];U===void 0&&(U=new Ln,U.layers.enable(pe),U.viewport=new Ft,X[pe]=U),U.matrix.fromArray(Ke.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ke.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),pe===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(U)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const pe=f.getDepthInformation(ue[0]);pe&&pe.isValid&&pe.texture&&y.init(e,pe,r.renderState)}}for(let ue=0;ue<g.length;ue++){const Ee=S[ue],ye=g[ue];Ee!==null&&ye!==void 0&&ye.update(Ee,Z,u||o)}y.render(e,x),q&&q(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ce=new Tx;Ce.setAnimationLoop(re),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}const Cr=new Di,JP=new Et;function eb(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,xx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,S=v.envMapRotation;if(g&&(m.envMap.value=g,Cr.copy(S),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(JP.makeRotationFromEuler(Cr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const w=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*w,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(v,w);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function c(v){const g=f();v.__bindingPointIndex=g;const S=t.createBuffer(),w=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let X=0,x=P.length;X<x;X++){const R=P[X];if(p(R,A,X,w)===!0){const ee=R.__offset,K=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let Y=0;Y<K.length;Y++){const W=K[Y],j=y(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,ee+L,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,S,w){const A=v.value,T=g+"_"+S;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const P=w[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const g=v.uniforms;let S=0;const w=16;for(let T=0,P=g.length;T<P;T++){const X=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,R=X.length;x<R;x++){const ee=X[x],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let L=0,Y=K.length;L<Y;L++){const W=K[L],j=y(W),b=S%w;b!==0&&w-b<j.boundary&&(S+=w-b),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=S,S+=j.storage}}}const A=S%w;return A>0&&(S+=w-A),v.__size=S,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Lx{constructor(e={}){const{canvas:n=G1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const g=this;let S=!1,w=0,A=0,T=null,P=-1,X=null;const x=new Ft,R=new Ft;let ee=null;const K=new Ze(0);let L=0,Y=n.width,W=n.height,j=1,b=null,I=null;const z=new Ft(0,0,Y,W),q=new Ft(0,0,Y,W);let re=!1;const Ce=new Ex;let V=!1,Z=!1,ue=null;const Ee=new Et,ye=new qe,pe=new k,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?j:1}let U=i;function Nt(E,N){for(let B=0;B<E.length;B++){const H=E[B],F=n.getContext(H,N);if(F!==null)return F}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jh}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",le,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&N.shift(),U=Nt(N,E),U===null)throw Nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,ze,we,Xe,ke,Ve,gt,C,M,G,$,te,Q,Ne,Ae,oe,ce,Ue,ne,xt,He,xe,ge,ve;function je(){Se=new aR(U),ze=new eR(U,Se,e),Se.init(ze),xe=new jP(U,Se,ze),we=new WP(U,Se,ze),Xe=new cR(U),ke=new bP,Ve=new XP(U,Se,we,ke,ze,xe,Xe),gt=new nR(g),C=new oR(g),M=new mw(U,ze),ge=new QC(U,Se,M,ze),G=new lR(U,M,Xe,ge),$=new pR(U,G,M,Xe),ne=new hR(U,ze,Ve),oe=new tR(ke),te=new PP(g,gt,C,Se,ze,ge,oe),Q=new eb(g,ke),Ne=new DP,Ae=new kP(Se,ze),Ue=new ZC(g,gt,C,we,$,h,l),ce=new GP(g,$,ze),ve=new tb(U,Xe,ze,we),xt=new JC(U,Se,Xe,ze),He=new uR(U,Se,Xe,ze),Xe.programs=te.programs,g.capabilities=ze,g.extensions=Se,g.properties=ke,g.renderLists=Ne,g.shadowMap=ce,g.state=we,g.info=Xe}je();const Le=new QP(g,U);this.xr=Le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(Y,W,!1))},this.getSize=function(E){return E.set(Y,W)},this.setSize=function(E,N,B=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,W=N,n.width=Math.floor(E*j),n.height=Math.floor(N*j),B===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*j,W*j).floor()},this.setDrawingBufferSize=function(E,N,B){Y=E,W=N,j=B,n.width=Math.floor(E*B),n.height=Math.floor(N*B),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,N,B,H){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,N,B,H),we.viewport(x.copy(z).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,N,B,H){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,N,B,H),we.scissor(R.copy(q).multiplyScalar(j).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){we.setScissorTest(re=E)},this.setOpaqueSort=function(E){b=E},this.setTransparentSort=function(E){I=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,N=!0,B=!0){let H=0;if(E){let F=!1;if(T!==null){const de=T.texture.format;F=de===ax||de===ox||de===sx}if(F){const de=T.texture.type,_e=de===ur||de===Qi||de===Yh||de===Wr||de===ix||de===rx,Te=Ue.getClearColor(),Re=Ue.getClearAlpha(),Be=Te.r,be=Te.g,De=Te.b;_e?(p[0]=Be,p[1]=be,p[2]=De,p[3]=Re,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=Be,_[1]=be,_[2]=De,_[3]=Re,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}N&&(H|=U.DEPTH_BUFFER_BIT),B&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",le,!1),Ne.dispose(),Ae.dispose(),ke.dispose(),gt.dispose(),C.dispose(),$.dispose(),ge.dispose(),ve.dispose(),te.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Tn),Le.removeEventListener("sessionend",tt),ue&&(ue.dispose(),ue=null),$t.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Xe.autoReset,N=ce.enabled,B=ce.autoUpdate,H=ce.needsUpdate,F=ce.type;je(),Xe.autoReset=E,ce.enabled=N,ce.autoUpdate=B,ce.needsUpdate=H,ce.type=F}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function O(E){const N=E.target;N.removeEventListener("dispose",O),ie(N)}function ie(E){fe(E),ke.remove(E)}function fe(E){const N=ke.get(E).programs;N!==void 0&&(N.forEach(function(B){te.releaseProgram(B)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,B,H,F,de){N===null&&(N=Ke);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Te=dM(E,N,B,H,F);we.setMaterial(H,_e);let Re=B.index,Be=1;if(H.wireframe===!0){if(Re=G.getWireframeAttribute(B),Re===void 0)return;Be=2}const be=B.drawRange,De=B.attributes.position;let vt=be.start*Be,pn=(be.start+be.count)*Be;de!==null&&(vt=Math.max(vt,de.start*Be),pn=Math.min(pn,(de.start+de.count)*Be)),Re!==null?(vt=Math.max(vt,0),pn=Math.min(pn,Re.count)):De!=null&&(vt=Math.max(vt,0),pn=Math.min(pn,De.count));const Rt=pn-vt;if(Rt<0||Rt===1/0)return;ge.setup(F,H,Te,B,Re);let ci,ut=xt;if(Re!==null&&(ci=M.get(Re),ut=He,ut.setIndex(ci)),F.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*Pe()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(F.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),we.setLineWidth(Ie*Pe()),F.isLineSegments?ut.setMode(U.LINES):F.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else F.isPoints?ut.setMode(U.POINTS):F.isSprite&&ut.setMode(U.TRIANGLES);if(F.isBatchedMesh)ut.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ut.renderInstances(vt,Rt,F.count);else if(B.isInstancedBufferGeometry){const Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,sc=Math.min(B.instanceCount,Ie);ut.renderInstances(vt,Rt,sc)}else ut.render(vt,Rt)};function We(E,N,B){E.transparent===!0&&E.side===yi&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,Ba(E,N,B),E.side=dr,E.needsUpdate=!0,Ba(E,N,B),E.side=yi):Ba(E,N,B)}this.compile=function(E,N,B=null){B===null&&(B=E),m=Ae.get(B),m.init(),v.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==B&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(g._useLegacyLights);const H=new Set;return E.traverse(function(F){const de=F.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Te=de[_e];We(Te,B,F),H.add(Te)}else We(de,B,F),H.add(de)}),v.pop(),m=null,H},this.compileAsync=function(E,N,B=null){const H=this.compile(E,N,B);return new Promise(F=>{function de(){if(H.forEach(function(_e){ke.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){F(E);return}setTimeout(de,10)}Se.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let et=null;function Ut(E){et&&et(E)}function Tn(){$t.stop()}function tt(){$t.start()}const $t=new Tx;$t.setAnimationLoop(Ut),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(E){et=E,Le.setAnimationLoop(E),E===null?$t.stop():$t.start()},Le.addEventListener("sessionstart",Tn),Le.addEventListener("sessionend",tt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(N),N=Le.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,T),m=Ae.get(E,v.length),m.init(),v.push(m),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee),Z=this.localClippingEnabled,V=oe.init(this.clippingPlanes,Z),y=Ne.get(E,d.length),y.init(),d.push(y),Qn(E,N,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(b,I),this.info.render.frame++,V===!0&&oe.beginShadows();const B=m.state.shadowsArray;if(ce.render(B,E,N),V===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1)&&Ue.render(y,E),m.setupLights(g._useLegacyLights),N.isArrayCamera){const H=N.cameras;for(let F=0,de=H.length;F<de;F++){const _e=H[F];Np(y,E,_e,_e.viewport)}}else Np(y,E,N);T!==null&&(Ve.updateMultisampleRenderTarget(T),Ve.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,N),ge.resetDefaultState(),P=-1,X=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Qn(E,N,B,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ce.intersectsSprite(E)){H&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const _e=$.update(E),Te=E.material;Te.visible&&y.push(E,_e,Te,B,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ce.intersectsObject(E))){const _e=$.update(E),Te=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),pe.copy(_e.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Re=_e.groups;for(let Be=0,be=Re.length;Be<be;Be++){const De=Re[Be],vt=Te[De.materialIndex];vt&&vt.visible&&y.push(E,_e,vt,B,pe.z,De)}}else Te.visible&&y.push(E,_e,Te,B,pe.z,null)}}const de=E.children;for(let _e=0,Te=de.length;_e<Te;_e++)Qn(de[_e],N,B,H)}function Np(E,N,B,H){const F=E.opaque,de=E.transmissive,_e=E.transparent;m.setupLightsView(B),V===!0&&oe.setGlobalState(g.clippingPlanes,B),de.length>0&&fM(F,de,N,B),H&&we.viewport(x.copy(H)),F.length>0&&ka(F,N,B),de.length>0&&ka(de,N,B),_e.length>0&&ka(_e,N,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function fM(E,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=ze.isWebGL2;ue===null&&(ue=new Jr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?_a:ur,minFilter:zr,samples:de?4:0})),g.getDrawingBufferSize(ye),de?ue.setSize(ye.x,ye.y):ue.setSize(bd(ye.x),bd(ye.y));const _e=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(K),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Te=g.toneMapping;g.toneMapping=lr,ka(E,B,H),Ve.updateMultisampleRenderTarget(ue),Ve.updateRenderTargetMipmap(ue);let Re=!1;for(let Be=0,be=N.length;Be<be;Be++){const De=N[Be],vt=De.object,pn=De.geometry,Rt=De.material,ci=De.group;if(Rt.side===yi&&vt.layers.test(H.layers)){const ut=Rt.side;Rt.side=fn,Rt.needsUpdate=!0,Up(vt,B,H,pn,Rt,ci),Rt.side=ut,Rt.needsUpdate=!0,Re=!0}}Re===!0&&(Ve.updateMultisampleRenderTarget(ue),Ve.updateRenderTargetMipmap(ue)),g.setRenderTarget(_e),g.setClearColor(K,L),g.toneMapping=Te}function ka(E,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,de=E.length;F<de;F++){const _e=E[F],Te=_e.object,Re=_e.geometry,Be=H===null?_e.material:H,be=_e.group;Te.layers.test(B.layers)&&Up(Te,N,B,Re,Be,be)}}function Up(E,N,B,H,F,de){E.onBeforeRender(g,N,B,H,F,de),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(g,N,B,H,E,de),F.transparent===!0&&F.side===yi&&F.forceSinglePass===!1?(F.side=fn,F.needsUpdate=!0,g.renderBufferDirect(B,N,H,F,E,de),F.side=dr,F.needsUpdate=!0,g.renderBufferDirect(B,N,H,F,E,de),F.side=yi):g.renderBufferDirect(B,N,H,F,E,de),E.onAfterRender(g,N,B,H,F,de)}function Ba(E,N,B){N.isScene!==!0&&(N=Ke);const H=ke.get(E),F=m.state.lights,de=m.state.shadowsArray,_e=F.state.version,Te=te.getParameters(E,F.state,de,N,B),Re=te.getProgramCacheKey(Te);let Be=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?C:gt).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",O),Be=new Map,H.programs=Be);let be=Be.get(Re);if(be!==void 0){if(H.currentProgram===be&&H.lightsStateVersion===_e)return Fp(E,Te),be}else Te.uniforms=te.getUniforms(E),E.onBuild(B,Te,g),E.onBeforeCompile(Te,g),be=te.acquireProgram(Te,Re),Be.set(Re,be),H.uniforms=Te.uniforms;const De=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=oe.uniform),Fp(E,Te),H.needsLights=pM(E),H.lightsStateVersion=_e,H.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=be,H.uniformsList=null,be}function Ip(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Gl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Fp(E,N){const B=ke.get(E);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function dM(E,N,B,H,F){N.isScene!==!0&&(N=Ke),Ve.resetTextureUnits();const de=N.fog,_e=H.isMeshStandardMaterial?N.environment:null,Te=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_r,Re=(H.isMeshStandardMaterial?C:gt).get(H.envMap||_e),Be=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,be=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!B.morphAttributes.position,vt=!!B.morphAttributes.normal,pn=!!B.morphAttributes.color;let Rt=lr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=g.toneMapping);const ci=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ut=ci!==void 0?ci.length:0,Ie=ke.get(H),sc=m.state.lights;if(V===!0&&(Z===!0||E!==X)){const wn=E===X&&H.id===P;oe.setState(H,E,wn)}let at=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==sc.state.version||Ie.outputColorSpace!==Te||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==Re||H.fog===!0&&Ie.fog!==de||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==be||Ie.morphTargets!==De||Ie.morphNormals!==vt||Ie.morphColors!==pn||Ie.toneMapping!==Rt||ze.isWebGL2===!0&&Ie.morphTargetsCount!==ut)&&(at=!0):(at=!0,Ie.__version=H.version);let xr=Ie.currentProgram;at===!0&&(xr=Ba(H,N,F));let Op=!1,mo=!1,oc=!1;const Bt=xr.getUniforms(),Sr=Ie.uniforms;if(we.useProgram(xr.program)&&(Op=!0,mo=!0,oc=!0),H.id!==P&&(P=H.id,mo=!0),Op||X!==E){Bt.setValue(U,"projectionMatrix",E.projectionMatrix),Bt.setValue(U,"viewMatrix",E.matrixWorldInverse);const wn=Bt.map.cameraPosition;wn!==void 0&&wn.setValue(U,pe.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,mo=!0,oc=!0)}if(F.isSkinnedMesh){Bt.setOptional(U,F,"bindMatrix"),Bt.setOptional(U,F,"bindMatrixInverse");const wn=F.skeleton;wn&&(ze.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Bt.setValue(U,"boneTexture",wn.boneTexture,Ve)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Bt.setOptional(U,F,"batchingTexture"),Bt.setValue(U,"batchingTexture",F._matricesTexture,Ve));const ac=B.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0&&ze.isWebGL2===!0)&&ne.update(F,B,xr),(mo||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,Bt.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Sr.envMap.value=Re,Sr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),mo&&(Bt.setValue(U,"toneMappingExposure",g.toneMappingExposure),Ie.needsLights&&hM(Sr,oc),de&&H.fog===!0&&Q.refreshFogUniforms(Sr,de),Q.refreshMaterialUniforms(Sr,H,j,W,ue),Gl.upload(U,Ip(Ie),Sr,Ve)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gl.upload(U,Ip(Ie),Sr,Ve),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Bt.setValue(U,"center",F.center),Bt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Bt.setValue(U,"normalMatrix",F.normalMatrix),Bt.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const wn=H.uniformsGroups;for(let lc=0,mM=wn.length;lc<mM;lc++)if(ze.isWebGL2){const kp=wn[lc];ve.update(kp,xr),ve.bind(kp,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function hM(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function pM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,B){ke.get(E.texture).__webglTexture=N,ke.get(E.depthTexture).__webglTexture=B;const H=ke.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const B=ke.get(E);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,B=0){T=E,w=N,A=B;let H=!0,F=null,de=!1,_e=!1;if(E){const Re=ke.get(E);Re.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):Re.__webglFramebuffer===void 0?Ve.setupRenderTarget(E):Re.__hasExternalTextures&&Ve.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const be=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[N])?F=be[N][B]:F=be[N],de=!0):ze.isWebGL2&&E.samples>0&&Ve.useMultisampledRTT(E)===!1?F=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?F=be[B]:F=be,x.copy(E.viewport),R.copy(E.scissor),ee=E.scissorTest}else x.copy(z).multiplyScalar(j).floor(),R.copy(q).multiplyScalar(j).floor(),ee=re;if(we.bindFramebuffer(U.FRAMEBUFFER,F)&&ze.drawBuffers&&H&&we.drawBuffers(E,F),we.viewport(x),we.scissor(R),we.setScissorTest(ee),de){const Re=ke.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,B)}else if(_e){const Re=ke.get(E.texture),Be=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,B||0,Be)}P=-1},this.readRenderTargetPixels=function(E,N,B,H,F,de,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){we.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Re=E.texture,Be=Re.format,be=Re.type;if(Be!==jn&&xe.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=be===_a&&(Se.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Se.has("EXT_color_buffer_float"));if(be!==ur&&xe.convert(be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===xi&&(ze.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&B>=0&&B<=E.height-F&&U.readPixels(N,B,H,F,xe.convert(Be),xe.convert(be),de)}finally{const Re=T!==null?ke.get(T).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(E,N,B=0){const H=Math.pow(2,-B),F=Math.floor(N.image.width*H),de=Math.floor(N.image.height*H);Ve.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,E.x,E.y,F,de),we.unbindTexture()},this.copyTextureToTexture=function(E,N,B,H=0){const F=N.image.width,de=N.image.height,_e=xe.convert(B.format),Te=xe.convert(B.type);Ve.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,E.x,E.y,F,de,_e,Te,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,_e,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,E.x,E.y,_e,Te,N.image),H===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,N,B,H,F=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=Math.round(E.max.x-E.min.x),_e=Math.round(E.max.y-E.min.y),Te=E.max.z-E.min.z+1,Re=xe.convert(H.format),Be=xe.convert(H.type);let be;if(H.isData3DTexture)Ve.setTexture3D(H,0),be=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ve.setTexture2DArray(H,0),be=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=U.getParameter(U.UNPACK_SKIP_PIXELS),Rt=U.getParameter(U.UNPACK_SKIP_ROWS),ci=U.getParameter(U.UNPACK_SKIP_IMAGES),ut=B.isCompressedTexture?B.mipmaps[F]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(be,F,N.x,N.y,N.z,de,_e,Te,Re,Be,ut.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(be,F,N.x,N.y,N.z,de,_e,Te,Re,ut.data):U.texSubImage3D(be,F,N.x,N.y,N.z,de,_e,Te,Re,Be,ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ci),F===0&&H.generateMipmaps&&U.generateMipmap(be),we.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ve.setTextureCube(E,0):E.isData3DTexture?Ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ve.setTexture2DArray(E,0):Ve.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$h?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===qu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nb extends Lx{}nb.prototype.isWebGL1Renderer=!0;class ib extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dx extends La{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gv=new Et,Dd=new px,wl=new Ku,Al=new k;class rb extends hn{constructor(e=new Ii,n=new Dx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;gv.copy(r).invert(),Dd.copy(e.ray).applyMatrix4(gv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,y=p;_<y;_++){const m=u.getX(_);Al.fromBufferAttribute(f,m),vv(Al,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,y=p;_<y;_++)Al.fromBufferAttribute(f,_),vv(Al,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vv(t,e,n,i,r,s,o){const a=Dd.distanceSqToPoint(t);if(a<n){const l=new k;Dd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);const sb=()=>{const t=me.useRef(null);return me.useEffect(()=>{if(!t.current)return;const e=new ib,n=new Ln(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Lx({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(i.domElement);const r=new Ii,s=5e3,o=new Float32Array(s*3);for(let f=0;f<s*3;f++)o[f]=(Math.random()-.5)*5;r.setAttribute("position",new qn(o,3));const a=new Dx({size:.005,color:"#45A59D"}),l=new rb(r,a);e.add(l),n.position.z=2;const u=()=>{requestAnimationFrame(u),l.rotation.y+=.001,i.render(e,n)};u();const c=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",c),()=>{var f;window.removeEventListener("resize",c),(f=t.current)==null||f.removeChild(i.domElement)}},[]),ae.jsx("div",{ref:t,className:"fixed inset-0 -z-10"})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ob={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ho=(t,e)=>{const n=me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>me.createElement("svg",{ref:c,...ob,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ab(t)}`,a].join(" "),...u},[...e.map(([f,h])=>me.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=ho("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=ho("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=ho("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=ho("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=ho("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=ho("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),pb=()=>{const[t,e]=me.useState(!1),n=[{name:"O nás",href:"#about"},{name:"Guidelines",href:"#guidelines"},{name:"FAQ",href:"#faq"},{name:"Turnajová štruktúra",href:"#rules"},{name:"Kontakt",href:"#tournament"}];return ae.jsxs("nav",{className:"fixed w-full bg-black/90 backdrop-blur-sm z-50",children:[ae.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:ae.jsxs("div",{className:"flex items-center justify-between h-16",children:[ae.jsx("div",{className:"flex-shrink-0",children:ae.jsx("img",{src:"src/res/SURGE_NAVBAR_LOGO.png",alt:"Logo",className:"h-10 w-auto"})}),ae.jsx("div",{className:"hidden md:block",children:ae.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:n.map(i=>ae.jsx("a",{href:i.href,className:"text-gray-300 hover:text-[#45A59D] px-3 py-2 rounded-md text-sm font-medium transition-colors",children:i.name},i.name))})}),ae.jsx("div",{className:"md:hidden",children:ae.jsx("button",{onClick:()=>e(!t),className:"text-gray-400 hover:text-white",children:t?ae.jsx(db,{size:24}):ae.jsx(cb,{size:24})})})]})}),t&&ae.jsx("div",{className:"md:hidden",children:ae.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:n.map(i=>ae.jsx("a",{href:i.href,className:"text-gray-300 hover:text-[#45A59D] block px-3 py-2 rounded-md text-base font-medium",onClick:()=>e(!1),children:i.name},i.name))})})]})};function mb(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}function Ju(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Nd=t=>Array.isArray(t);function Nx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ya(t){return typeof t=="string"||Array.isArray(t)}function _v(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Kh(t,e,n,i){if(typeof e=="function"){const[r,s]=_v(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=_v(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ec(t,e,n){const i=t.getProps();return Kh(i,e,n!==void 0?n:i.custom,t)}const Zh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qh=["initial",...Zh],Na=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],is=new Set(Na),Ai=t=>t*1e3,Ci=t=>t/1e3,gb={type:"spring",stiffness:500,damping:25,restSpeed:10},vb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_b={type:"keyframes",duration:.8},yb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xb=(t,{keyframes:e})=>e.length>2?_b:is.has(t)?t.startsWith("scale")?vb(e[1]):gb:yb;function Jh(t,e){return t?t[e]||t.default||t:void 0}const Sb={skipAnimations:!1,useManualTiming:!1},Mb=t=>t!==null;function tc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(Mb),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Jt=t=>t;let Eb=Jt,Ud=Jt;function Tb(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const p=f&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const Cl=["read","resolveKeyframes","update","preRender","render","postRender"],wb=40;function Ux(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Cl.reduce((d,v)=>(d[v]=Tb(s),d),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:h}=o,p=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,wb),1),r.timestamp=d,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},_=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Cl.reduce((d,v)=>{const g=o[v];return d[v]=(S,w=!1,A=!1)=>(n||_(),g.schedule(S,w,A)),d},{}),cancel:d=>{for(let v=0;v<Cl.length;v++)o[Cl[v]].cancel(d)},state:r,steps:o}}const{schedule:$e,cancel:Zn,state:bt,steps:mf}=Ux(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jt,!0),Ix=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ab=1e-7,Cb=12;function Rb(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Ix(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Ab&&++a<Cb);return o}function Ua(t,e,n,i){if(t===e&&n===i)return Jt;const r=s=>Rb(s,0,1,t,n);return s=>s===0||s===1?s:Ix(r(s),e,i)}const Fx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ox=t=>e=>1-t(1-e),kx=Ua(.33,1.53,.69,.99),ep=Ox(kx),Bx=Fx(ep),zx=t=>(t*=2)<1?.5*ep(t):.5*(2-Math.pow(2,-10*(t-1))),tp=t=>1-Math.sin(Math.acos(t)),Vx=Ox(tp),Hx=Fx(tp),Gx=t=>/^0[^.\s]+$/u.test(t);function Pb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Gx(t):!0}const Wx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Xx=t=>e=>typeof e=="string"&&e.startsWith(t),jx=Xx("--"),bb=Xx("var(--"),np=t=>bb(t)?Lb.test(t.split("/*")[0].trim()):!1,Lb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Db=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Nb(t){const e=Db.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Yx(t,e,n=1){const[i,r]=Nb(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Wx(o)?parseFloat(o):o}return np(r)?Yx(r,e,n+1):r}const Ni=(t,e,n)=>n>e?e:n<t?t:n,po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},xa={...po,transform:t=>Ni(0,1,t)},Rl={...po,default:1},Ia=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Gi=Ia("deg"),li=Ia("%"),Me=Ia("px"),Ub=Ia("vh"),Ib=Ia("vw"),yv={...li,parse:t=>li.parse(t)/100,transform:t=>li.transform(t*100)},Fb=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),xv=t=>t===po||t===Me,Sv=(t,e)=>parseFloat(t.split(", ")[e]),Mv=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Sv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Sv(s[1],t):0}},Ob=new Set(["x","y","z"]),kb=Na.filter(t=>!Ob.has(t));function Bb(t){const e=[];return kb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const so={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Mv(4,13),y:Mv(5,14)};so.translateX=so.x;so.translateY=so.y;const $x=t=>e=>e.test(t),zb={test:t=>t==="auto",parse:t=>t},qx=[po,Me,li,Gi,Ib,Ub,zb],Ev=t=>qx.find($x(t)),Yr=new Set;let Id=!1,Fd=!1;function Kx(){if(Fd){const t=Array.from(Yr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=Bb(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Fd=!1,Id=!1,Yr.forEach(t=>t.complete()),Yr.clear()}function Zx(){Yr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Fd=!0)})}function Vb(){Zx(),Kx()}class ip{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yr.add(this),Id||(Id=!0,$e.read(Zx),$e.resolveKeyframes(Kx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const qo=t=>Math.round(t*1e5)/1e5,rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Hb(t){return t==null}const Gb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sp=(t,e)=>n=>!!(typeof n=="string"&&Gb.test(n)&&n.startsWith(t)||e&&!Hb(n)&&Object.prototype.hasOwnProperty.call(n,e)),Qx=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(rp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Wb=t=>Ni(0,255,t),gf={...po,transform:t=>Math.round(Wb(t))},Vr={test:sp("rgb","red"),parse:Qx("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+gf.transform(t)+", "+gf.transform(e)+", "+gf.transform(n)+", "+qo(xa.transform(i))+")"};function Xb(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Od={test:sp("#"),parse:Xb,transform:Vr.transform},Is={test:sp("hsl","hue"),parse:Qx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+li.transform(qo(e))+", "+li.transform(qo(n))+", "+qo(xa.transform(i))+")"},Wt={test:t=>Vr.test(t)||Od.test(t)||Is.test(t),parse:t=>Vr.test(t)?Vr.parse(t):Is.test(t)?Is.parse(t):Od.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Vr.transform(t):Is.transform(t)},jb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Yb(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(rp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(jb))===null||n===void 0?void 0:n.length)||0)>0}const Jx="number",eS="color",$b="var",qb="var(",Tv="${}",Kb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(Kb,l=>(Wt.test(l)?(i.color.push(s),r.push(eS),n.push(Wt.parse(l))):l.startsWith(qb)?(i.var.push(s),r.push($b),n.push(l)):(i.number.push(s),r.push(Jx),n.push(parseFloat(l))),++s,Tv)).split(Tv);return{values:n,split:a,indexes:i,types:r}}function tS(t){return Sa(t).values}function nS(t){const{split:e,types:n}=Sa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Jx?s+=qo(r[o]):a===eS?s+=Wt.transform(r[o]):s+=r[o]}return s}}const Zb=t=>typeof t=="number"?0:t;function Qb(t){const e=tS(t);return nS(t)(e.map(Zb))}const pr={test:Yb,parse:tS,createTransformer:nS,getAnimatableNone:Qb},Jb=new Set(["brightness","contrast","saturate","opacity"]);function eL(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(rp)||[];if(!i)return t;const r=n.replace(i,"");let s=Jb.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const tL=/\b([a-z-]*)\(.*?\)/gu,kd={...pr,getAnimatableNone:t=>{const e=t.match(tL);return e?e.map(eL).join(" "):t}},nL={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,radius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,top:Me,right:Me,bottom:Me,left:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,backgroundPositionX:Me,backgroundPositionY:Me},iL={rotate:Gi,rotateX:Gi,rotateY:Gi,rotateZ:Gi,scale:Rl,scaleX:Rl,scaleY:Rl,scaleZ:Rl,skew:Gi,skewX:Gi,skewY:Gi,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:xa,originX:yv,originY:yv,originZ:Me},wv={...po,transform:Math.round},op={...nL,...iL,zIndex:wv,size:Me,fillOpacity:xa,strokeOpacity:xa,numOctaves:wv},rL={...op,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:kd,WebkitFilter:kd},ap=t=>rL[t];function iS(t,e){let n=ap(t);return n!==kd&&(n=pr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const sL=new Set(["auto","none","0"]);function oL(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!sL.has(s)&&Sa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=iS(n,r)}class rS extends ip{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),np(u))){const c=Yx(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Fb.has(i)||e.length!==2)return;const[r,s]=e,o=Ev(r),a=Ev(s);if(o!==a)if(xv(o)&&xv(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)Pb(e[r])&&i.push(r);i.length&&oL(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=so[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=so[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function lp(t){return typeof t=="function"}let Wl;function aL(){Wl=void 0}const ui={now:()=>(Wl===void 0&&ui.set(bt.isProcessing||Sb.useManualTiming?bt.timestamp:performance.now()),Wl),set:t=>{Wl=t,queueMicrotask(aL)}},Av=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(pr.test(t)||t==="0")&&!t.startsWith("url("));function lL(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function uL(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Av(r,e),a=Av(s,e);return!o||!a?!1:lL(t)||(n==="spring"||lp(n))&&i}const cL=40;class sS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ui.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>cL?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Vb(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ui.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!uL(e,i,r,s))if(o)this.options.duration=0;else{l==null||l(tc(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const es=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},oS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(es(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function up(t,e){return e?t*(1e3/e):0}const fL=5;function aS(t,e,n){const i=Math.max(e-fL,0);return up(n-t(i),e-i)}const pt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},vf=.001;function dL({duration:t=pt.duration,bounce:e=pt.bounce,velocity:n=pt.velocity,mass:i=pt.mass}){let r,s,o=1-e;o=Ni(pt.minDamping,pt.maxDamping,o),t=Ni(pt.minDuration,pt.maxDuration,Ci(t)),o<1?(r=u=>{const c=u*o,f=c*t,h=c-n,p=Bd(u,o),_=Math.exp(-f);return vf-h/p*_},s=u=>{const f=u*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,_=Math.exp(-f),y=Bd(Math.pow(u,2),o);return(-r(u)+vf>0?-1:1)*((h-p)*_)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-vf+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=pL(r,s,a);if(t=Ai(t),isNaN(l))return{stiffness:pt.stiffness,damping:pt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const hL=12;function pL(t,e,n){let i=n;for(let r=1;r<hL;r++)i=i-t(i)/e(i);return i}function Bd(t,e){return t*Math.sqrt(1-e*e)}const zd=2e4;function lS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<zd;)e+=n,i=t.next(e);return e>=zd?1/0:e}const mL=["duration","bounce"],gL=["stiffness","damping","mass"];function Cv(t,e){return e.some(n=>t[n]!==void 0)}function vL(t){let e={velocity:pt.velocity,stiffness:pt.stiffness,damping:pt.damping,mass:pt.mass,isResolvedFromDuration:!1,...t};if(!Cv(t,gL)&&Cv(t,mL))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ni(.05,1,1-t.bounce)*Math.sqrt(r);e={...e,mass:pt.mass,stiffness:r,damping:s}}else{const n=dL(t);e={...e,...n,mass:pt.mass},e.isResolvedFromDuration=!0}return e}function uS(t=pt.visualDuration,e=pt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:f,velocity:h,isResolvedFromDuration:p}=vL({...n,velocity:-Ci(n.velocity||0)}),_=h||0,y=u/(2*Math.sqrt(l*c)),m=o-s,d=Ci(Math.sqrt(l/c)),v=Math.abs(m)<5;i||(i=v?pt.restSpeed.granular:pt.restSpeed.default),r||(r=v?pt.restDelta.granular:pt.restDelta.default);let g;if(y<1){const w=Bd(d,y);g=A=>{const T=Math.exp(-y*d*A);return o-T*((_+y*d*m)/w*Math.sin(w*A)+m*Math.cos(w*A))}}else if(y===1)g=w=>o-Math.exp(-d*w)*(m+(_+d*m)*w);else{const w=d*Math.sqrt(y*y-1);g=A=>{const T=Math.exp(-y*d*A),P=Math.min(w*A,300);return o-T*((_+y*d*m)*Math.sinh(P)+w*m*Math.cosh(P))/w}}const S={calculatedDuration:p&&f||null,next:w=>{const A=g(w);if(p)a.done=w>=f;else{let T=0;y<1&&(T=w===0?Ai(_):aS(g,w,A));const P=Math.abs(T)<=i,X=Math.abs(o-A)<=r;a.done=P&&X}return a.value=a.done?o:A,a},toString:()=>{const w=Math.min(lS(S),zd),A=oS(T=>S.next(w*T).value,w,30);return w+"ms "+A}};return S}function Rv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],h={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,_=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=f+y,d=o===void 0?m:o(m);d!==m&&(y=d-f);const v=P=>-y*Math.exp(-P/i),g=P=>d+v(P),S=P=>{const X=v(P),x=g(P);h.done=Math.abs(X)<=u,h.value=h.done?d:x};let w,A;const T=P=>{p(h.value)&&(w=P,A=uS({keyframes:[h.value,_(h.value)],velocity:aS(g,P,h.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return T(0),{calculatedDuration:null,next:P=>{let X=!1;return!A&&w===void 0&&(X=!0,S(P),T(P)),w!==void 0&&P>=w?A.next(P-w):(!X&&S(P),h)}}}const _L=Ua(.42,0,1,1),yL=Ua(0,0,.58,1),cS=Ua(.42,0,.58,1),xL=t=>Array.isArray(t)&&typeof t[0]!="number",cp=t=>Array.isArray(t)&&typeof t[0]=="number",Pv={linear:Jt,easeIn:_L,easeInOut:cS,easeOut:yL,circIn:tp,circInOut:Hx,circOut:Vx,backIn:ep,backInOut:Bx,backOut:kx,anticipate:zx},bv=t=>{if(cp(t)){Ud(t.length===4);const[e,n,i,r]=t;return Ua(e,n,i,r)}else if(typeof t=="string")return Ud(Pv[t]!==void 0),Pv[t];return t},SL=(t,e)=>n=>e(t(n)),Fa=(...t)=>t.reduce(SL),ft=(t,e,n)=>t+(e-t)*n;function _f(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ML({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=_f(l,a,t+1/3),s=_f(l,a,t),o=_f(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function wu(t,e){return n=>n>0?e:t}const yf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},EL=[Od,Vr,Is],TL=t=>EL.find(e=>e.test(t));function Lv(t){const e=TL(t);if(!e)return!1;let n=e.parse(t);return e===Is&&(n=ML(n)),n}const Dv=(t,e)=>{const n=Lv(t),i=Lv(e);if(!n||!i)return wu(t,e);const r={...n};return s=>(r.red=yf(n.red,i.red,s),r.green=yf(n.green,i.green,s),r.blue=yf(n.blue,i.blue,s),r.alpha=ft(n.alpha,i.alpha,s),Vr.transform(r))},Vd=new Set(["none","hidden"]);function wL(t,e){return Vd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function AL(t,e){return n=>ft(t,e,n)}function fp(t){return typeof t=="number"?AL:typeof t=="string"?np(t)?wu:Wt.test(t)?Dv:PL:Array.isArray(t)?fS:typeof t=="object"?Wt.test(t)?Dv:CL:wu}function fS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>fp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function CL(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=fp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function RL(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const PL=(t,e)=>{const n=pr.createTransformer(e),i=Sa(t),r=Sa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Vd.has(t)&&!r.values.length||Vd.has(e)&&!i.values.length?wL(t,e):Fa(fS(RL(i,r),r.values),n):wu(t,e)};function dS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ft(t,e,n):fp(t)(t,e)}function bL(t,e,n){const i=[],r=n||dS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Jt:e;a=Fa(l,a)}i.push(a)}return i}function dp(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ud(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=bL(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=es(t[c],t[c+1],u);return o[c](f)};return n?u=>l(Ni(t[0],t[s-1],u)):l}function LL(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=es(0,e,i);t.push(ft(n,1,r))}}function hS(t){const e=[0];return LL(e,t.length-1),e}function DL(t,e){return t.map(n=>n*e)}function NL(t,e){return t.map(()=>e||cS).splice(0,t.length-1)}function Au({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=xL(i)?i.map(bv):bv(i),s={done:!1,value:e[0]},o=DL(n&&n.length===e.length?n:hS(e),t),a=dp(o,e,{ease:Array.isArray(r)?r:NL(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const UL=t=>{const e=({timestamp:n})=>t(n);return{start:()=>$e.update(e,!0),stop:()=>Zn(e),now:()=>bt.isProcessing?bt.timestamp:ui.now()}},IL={decay:Rv,inertia:Rv,tween:Au,keyframes:Au,spring:uS},FL=t=>t/100;class hp extends sS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||ip,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=lp(n)?n:IL[n]||Au;let l,u;a!==Au&&typeof e[0]!="number"&&(l=Fa(FL,dS(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=lS(c));const{calculatedDuration:f}=c,h=f+r,p=h*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:_,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const d=this.currentTime-h*(this.speed>=0?1:-1),v=this.speed>=0?d<0:d>c;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,S=s;if(p){const P=Math.min(this.currentTime,c)/f;let X=Math.floor(P),x=P%1;!x&&P>=1&&(x=1),x===1&&X--,X=Math.min(X,p+1),!!(X%2)&&(_==="reverse"?(x=1-x,y&&(x-=y/f)):_==="mirror"&&(S=o)),g=Ni(0,1,x)*f}const w=v?{done:!1,value:l[0]}:S.next(g);a&&(w.value=a(w.value));let{done:A}=w;!v&&u!==null&&(A=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return T&&r!==void 0&&(w.value=tc(l,this.options,r)),m&&m(w.value),T&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Ci(e.calculatedDuration):0}get time(){return Ci(this.currentTime)}set time(e){e=Ai(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ci(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=UL,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const OL=new Set(["opacity","clipPath","filter","transform"]);function pp(t){let e;return()=>(e===void 0&&(e=t()),e)}const kL={linearEasing:void 0};function BL(t,e){const n=pp(t);return()=>{var i;return(i=kL[e])!==null&&i!==void 0?i:n()}}const Cu=BL(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function pS(t){return!!(typeof t=="function"&&Cu()||!t||typeof t=="string"&&(t in Hd||Cu())||cp(t)||Array.isArray(t)&&t.every(pS))}const Oo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Hd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oo([0,.65,.55,1]),circOut:Oo([.55,0,1,.45]),backIn:Oo([.31,.01,.66,-.59]),backOut:Oo([.33,1.53,.69,.99])};function mS(t,e){if(t)return typeof t=="function"&&Cu()?oS(t,e):cp(t)?Oo(t):Array.isArray(t)?t.map(n=>mS(n,e)||Hd.easeOut):Hd[t]}function zL(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=mS(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function Nv(t,e){t.timeline=e,t.onfinish=null}const VL=pp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ru=10,HL=2e4;function GL(t){return lp(t.type)||t.type==="spring"||!pS(t.ease)}function WL(t,e){const n=new hp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<HL;)i=n.sample(s),r.push(i.value),s+=Ru;return{times:void 0,keyframes:r,duration:s-Ru,ease:"linear"}}const gS={anticipate:zx,backInOut:Bx,circInOut:Hx};function XL(t){return t in gS}class Uv extends sS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new rS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(typeof o=="string"&&Cu()&&XL(o)&&(o=gS[o]),GL(this.options)){const{onComplete:h,onUpdate:p,motionValue:_,element:y,...m}=this.options,d=WL(e,m);e=d.keyframes,e.length===1&&(e[1]=e[0]),r=d.duration,s=d.times,o=d.ease,a="keyframes"}const f=zL(l.owner.current,u,e,{...this.options,duration:r,times:s,ease:o});return f.startTime=c??this.calcStartTime(),this.pendingTimeline?(Nv(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:h}=this.options;l.set(tc(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:r,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ci(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ci(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Jt;const{animation:i}=n;Nv(i,e)}return Jt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:h,...p}=this.options,_=new hp({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ai(this.time);u.setWithVelocity(_.sample(y-Ru).value,_.sample(y).value,Ru)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;return VL()&&i&&OL.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const vS=pp(()=>window.ScrollTimeline!==void 0);class jL{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>vS()&&r.attachTimeline?r.attachTimeline(e):n(r));return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function YL({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const mp=(t,e,n,i={},r,s)=>o=>{const a=Jh(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ai(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};YL(a)||(c={...c,...xb(t,c)}),c.duration&&(c.duration=Ai(c.duration)),c.repeatDelay&&(c.repeatDelay=Ai(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const h=tc(c.keyframes,a);if(h!==void 0)return $e.update(()=>{c.onUpdate(h),c.onComplete()}),new jL([])}return!s&&Uv.supports(c)?new Uv(c):new hp(c)},$L=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),qL=t=>Nd(t)?t[t.length-1]||0:t;function gp(t,e){t.indexOf(e)===-1&&t.push(e)}function vp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class _p{constructor(){this.subscriptions=[]}add(e){return gp(this.subscriptions,e),()=>vp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Iv=30,KL=t=>!isNaN(parseFloat(t)),Ko={current:void 0};class ZL{constructor(e,n={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ui.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=KL(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new _p);const i=this.events[e].add(n);return e==="change"?()=>{i(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ko.current&&Ko.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Iv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Iv);return up(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function si(t,e){return new ZL(t,e)}function QL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,si(n))}function JL(t,e){const n=ec(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=qL(s[o]);QL(t,o,a)}}const yp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),e2="framerAppearId",_S="data-"+yp(e2);function yS(t){return t.props[_S]}const jt=t=>!!(t&&t.getVelocity);function t2(t){return!!(jt(t)&&t.add)}function Gd(t,e){const n=t.getValue("willChange");if(t2(n))return n.add(e)}function n2({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function xS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const h=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||c&&n2(c,f))continue;const _={delay:n,...Jh(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const d=yS(t);if(d){const v=window.MotionHandoffAnimation(d,f,$e);v!==null&&(_.startTime=v,y=!0)}}Gd(t,f),h.start(mp(f,h,p,t.shouldReduceMotion&&is.has(f)?{type:!1}:_,t,y));const m=h.animation;m&&u.push(m)}return a&&Promise.all(u).then(()=>{$e.update(()=>{a&&JL(t,a)})}),u}function Wd(t,e,n={}){var i;const r=ec(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(xS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:h}=s;return i2(t,e,c+u,f,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function i2(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(r2).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Wd(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function r2(t,e){return t.sortNodePosition(e)}function s2(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Wd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Wd(t,e,n);else{const r=typeof e=="function"?ec(t,e,n.custom):e;i=Promise.all(xS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const o2=Qh.length;function SS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?SS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<o2;n++){const i=Qh[n],r=t.props[i];(ya(r)||r===!1)&&(e[i]=r)}return e}const a2=[...Zh].reverse(),l2=Zh.length;function u2(t){return e=>Promise.all(e.map(({animation:n,options:i})=>s2(t,n,i)))}function c2(t){let e=u2(t),n=Fv(),i=!0;const r=l=>(u,c)=>{var f;const h=ec(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:p,transitionEnd:_,...y}=h;u={...u,...y,..._}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=SS(t.parent)||{},f=[],h=new Set;let p={},_=1/0;for(let m=0;m<l2;m++){const d=a2[m],v=n[d],g=u[d]!==void 0?u[d]:c[d],S=ya(g),w=d===l?v.isActive:null;w===!1&&(_=m);let A=g===c[d]&&g!==u[d]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),v.protectedKeys={...p},!v.isActive&&w===null||!g&&!v.prevProp||Ju(g)||typeof g=="boolean")continue;const T=f2(v.prevProp,g);let P=T||d===l&&v.isActive&&!A&&S||m>_&&S,X=!1;const x=Array.isArray(g)?g:[g];let R=x.reduce(r(d),{});w===!1&&(R={});const{prevResolvedValues:ee={}}=v,K={...ee,...R},L=j=>{P=!0,h.has(j)&&(X=!0,h.delete(j)),v.needsAnimating[j]=!0;const b=t.getValue(j);b&&(b.liveStyle=!1)};for(const j in K){const b=R[j],I=ee[j];if(p.hasOwnProperty(j))continue;let z=!1;Nd(b)&&Nd(I)?z=!Nx(b,I):z=b!==I,z?b!=null?L(j):h.add(j):b!==void 0&&h.has(j)?L(j):v.protectedKeys[j]=!0}v.prevProp=g,v.prevResolvedValues=R,v.isActive&&(p={...p,...R}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(A&&T)||X)&&f.push(...x.map(j=>({animation:j,options:{type:d}})))}if(h.size){const m={};h.forEach(d=>{const v=t.getBaseTarget(d),g=t.getValue(d);g&&(g.liveStyle=!0),m[d]=v??null}),f.push({animation:m})}let y=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Fv(),i=!0}}}function f2(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Nx(e,t):!1}function Rr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fv(){return{animate:Rr(!0),whileInView:Rr(),whileHover:Rr(),whileTap:Rr(),whileDrag:Rr(),whileFocus:Rr(),exit:Rr()}}class yr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class d2 extends yr{constructor(e){super(e),e.animationState||(e.animationState=c2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ju(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let h2=0;class p2 extends yr{constructor(){super(...arguments),this.id=h2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const m2={animation:{Feature:d2},exit:{Feature:p2}},zn={x:!1,y:!1};function MS(){return zn.x||zn.y}function ES(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function TS(t,e){const n=ES(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Ov(t){return e=>{e.pointerType==="touch"||MS()||t(e)}}function g2(t,e,n={}){const[i,r,s]=TS(t,n),o=Ov(a=>{const{target:l}=a,u=e(a);if(!u||!l)return;const c=Ov(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const xp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ko=new WeakSet;function kv(t){return e=>{e.key==="Enter"&&t(e)}}function xf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const v2=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=kv(()=>{if(ko.has(n))return;xf(n,"down");const r=kv(()=>{xf(n,"up")}),s=()=>xf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)},_2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function y2(t){return _2.has(t.tagName)||t.tabIndex!==-1}const wS=(t,e)=>e?t===e?!0:wS(t,e.parentElement):!1;function Bv(t){return xp(t)&&!MS()}function x2(t,e,n={}){const[i,r,s]=TS(t,n),o=a=>{const l=a.currentTarget;if(!Bv(a)||ko.has(l))return;ko.add(l);const u=e(a),c=(p,_)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!Bv(p)||!ko.has(l))&&(ko.delete(l),u&&u(p,{success:_}))},f=p=>{c(p,n.useGlobalTarget||wS(l,p.target))},h=p=>{c(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{y2(a)||(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>v2(u,r),r)}),s}function S2(t){return t==="x"||t==="y"?zn[t]?null:(zn[t]=!0,()=>{zn[t]=!1}):zn.x||zn.y?null:(zn.x=zn.y=!0,()=>{zn.x=zn.y=!1})}function Oa(t){return{point:{x:t.pageX,y:t.pageY}}}const M2=t=>e=>xp(e)&&t(e,Oa(e));function Ma(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Zo(t,e,n,i){return Ma(t,e,M2(n),i)}const zv=(t,e)=>Math.abs(t-e);function E2(t,e){const n=zv(t.x,e.x),i=zv(t.y,e.y);return Math.sqrt(n**2+i**2)}class AS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Mf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=E2(f.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:_}=f,{timestamp:y}=bt;this.history.push({..._,timestamp:y});const{onStart:m,onMove:d}=this.handlers;h||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),d&&d(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Sf(h,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Mf(f.type==="pointercancel"?this.lastMoveEventInfo:Sf(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),_&&_(f,m)},!xp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Oa(e),a=Sf(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=bt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,Mf(a,this.history)),this.removeListeners=Fa(Zo(this.contextWindow,"pointermove",this.handlePointerMove),Zo(this.contextWindow,"pointerup",this.handlePointerUp),Zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Zn(this.updatePoint)}}function Sf(t,e){return e?{point:e(t.point)}:t}function Vv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Mf({point:t},e){return{point:t,delta:Vv(t,CS(e)),offset:Vv(t,T2(e)),velocity:w2(e,.1)}}function T2(t){return t[0]}function CS(t){return t[t.length-1]}function w2(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=CS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ai(e)));)n--;if(!i)return{x:0,y:0};const s=Ci(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Fs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const RS=1e-4,A2=1-RS,C2=1+RS,PS=.01,R2=0-PS,P2=0+PS;function Sn(t){return t.max-t.min}function b2(t,e,n){return Math.abs(t-e)<=n}function Hv(t,e,n,i=.5){t.origin=i,t.originPoint=ft(e.min,e.max,t.origin),t.scale=Sn(n)/Sn(e),t.translate=ft(n.min,n.max,t.origin)-t.originPoint,(t.scale>=A2&&t.scale<=C2||isNaN(t.scale))&&(t.scale=1),(t.translate>=R2&&t.translate<=P2||isNaN(t.translate))&&(t.translate=0)}function Qo(t,e,n,i){Hv(t.x,e.x,n.x,i?i.originX:void 0),Hv(t.y,e.y,n.y,i?i.originY:void 0)}function Gv(t,e,n){t.min=n.min+e.min,t.max=t.min+Sn(e)}function L2(t,e,n){Gv(t.x,e.x,n.x),Gv(t.y,e.y,n.y)}function Wv(t,e,n){t.min=e.min-n.min,t.max=t.min+Sn(e)}function Jo(t,e,n){Wv(t.x,e.x,n.x),Wv(t.y,e.y,n.y)}function D2(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ft(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ft(n,t,i.max):Math.min(t,n)),t}function Xv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function N2(t,{top:e,left:n,bottom:i,right:r}){return{x:Xv(t.x,n,r),y:Xv(t.y,e,i)}}function jv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function U2(t,e){return{x:jv(t.x,e.x),y:jv(t.y,e.y)}}function I2(t,e){let n=.5;const i=Sn(t),r=Sn(e);return r>i?n=es(e.min,e.max-i,t.min):i>r&&(n=es(t.min,t.max-r,e.min)),Ni(0,1,n)}function F2(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Xd=.35;function O2(t=Xd){return t===!1?t=0:t===!0&&(t=Xd),{x:Yv(t,"left","right"),y:Yv(t,"top","bottom")}}function Yv(t,e,n){return{min:$v(t,e),max:$v(t,n)}}function $v(t,e){return typeof t=="number"?t:t[e]||0}const qv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Os=()=>({x:qv(),y:qv()}),Kv=()=>({min:0,max:0}),_t=()=>({x:Kv(),y:Kv()});function Rn(t){return[t("x"),t("y")]}function bS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function k2({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function B2(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ef(t){return t===void 0||t===1}function jd({scale:t,scaleX:e,scaleY:n}){return!Ef(t)||!Ef(e)||!Ef(n)}function Nr(t){return jd(t)||LS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function LS(t){return Zv(t.x)||Zv(t.y)}function Zv(t){return t&&t!=="0%"}function Pu(t,e,n){const i=t-n,r=e*i;return n+r}function Qv(t,e,n,i,r){return r!==void 0&&(t=Pu(t,r,i)),Pu(t,n,i)+e}function Yd(t,e=0,n=1,i,r){t.min=Qv(t.min,e,n,i,r),t.max=Qv(t.max,e,n,i,r)}function DS(t,{x:e,y:n}){Yd(t.x,e.translate,e.scale,e.originPoint),Yd(t.y,n.translate,n.scale,n.originPoint)}const Jv=.999999999999,e0=1.0000000000001;function z2(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Bs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,DS(t,o)),i&&Nr(s.latestValues)&&Bs(t,s.latestValues))}e.x<e0&&e.x>Jv&&(e.x=1),e.y<e0&&e.y>Jv&&(e.y=1)}function ks(t,e){t.min=t.min+e,t.max=t.max+e}function t0(t,e,n,i,r=.5){const s=ft(t.min,t.max,r);Yd(t,e,n,s,i)}function Bs(t,e){t0(t.x,e.x,e.scaleX,e.scale,e.originX),t0(t.y,e.y,e.scaleY,e.scale,e.originY)}function NS(t,e){return bS(B2(t.getBoundingClientRect(),e))}function V2(t,e,n){const i=NS(t,n),{scroll:r}=e;return r&&(ks(i.x,r.offset.x),ks(i.y,r.offset.y)),i}const US=({current:t})=>t?t.ownerDocument.defaultView:null,H2=new WeakMap;class G2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=_t(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Oa(c).point)},s=(c,f)=>{const{drag:h,dragPropagation:p,onDragStart:_}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=S2(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(m=>{let d=this.getAxisMotionValue(m).get()||0;if(li.test(d)){const{projection:v}=this.visualElement;if(v&&v.layout){const g=v.layout.layoutBox[m];g&&(d=Sn(g)*(parseFloat(d)/100))}}this.originPoint[m]=d}),_&&$e.postRender(()=>_(c,f)),Gd(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:_,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=W2(m),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Rn(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new AS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:US(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&$e.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Pl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=D2(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Fs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=N2(r.layoutBox,n):this.constraints=!1,this.elastic=O2(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=F2(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Fs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=V2(i,r.root,this.visualElement.getTransformPagePoint());let o=U2(r.layout.layoutBox,s);if(n){const a=n(k2(o));this.hasMutatedConstraints=!!a,a&&(o=bS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Rn(c=>{if(!Pl(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[c]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,_)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Gd(this.visualElement,e),i.start(mp(e,i,0,n,this.visualElement,!1))}stopAnimation(){Rn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Rn(n=>{const{drag:i}=this.getProps();if(!Pl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ft(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Fs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=I2({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Rn(o=>{if(!Pl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(ft(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;H2.set(this.visualElement,this);const e=this.visualElement.current,n=Zo(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Fs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),$e.read(i);const o=Ma(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Rn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Xd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Pl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function W2(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class X2 extends yr{constructor(e){super(e),this.removeGroupControls=Jt,this.removeListeners=Jt,this.controls=new G2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jt}unmount(){this.removeGroupControls(),this.removeListeners()}}const n0=t=>(e,n)=>{t&&$e.postRender(()=>t(e,n))};class j2 extends yr{constructor(){super(...arguments),this.removePointerDownListener=Jt}onPointerDown(e){this.session=new AS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:US(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:n0(e),onStart:n0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&$e.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Zo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Sp=me.createContext(null);function Y2(){const t=me.useContext(Sp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=me.useId();me.useEffect(()=>i(r),[]);const s=me.useCallback(()=>n&&n(r),[r,n]);return!e&&n?[!1,s]:[!0]}const IS=me.createContext({}),FS=me.createContext({}),Xl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function i0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=i0(t,e.target.x),i=i0(t,e.target.y);return`${n}% ${i}%`}},$2={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=pr.parse(t);if(r.length>5)return i;const s=pr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=ft(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},bu={};function q2(t){Object.assign(bu,t)}const{schedule:Mp,cancel:CN}=Ux(queueMicrotask,!1);class K2 extends me.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;q2(Z2),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Xl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||$e.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Mp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function OS(t){const[e,n]=Y2(),i=me.useContext(IS);return ae.jsx(K2,{...t,layoutGroup:i,switchLayoutGroup:me.useContext(FS),isPresent:e,safeToRemove:n})}const Z2={borderRadius:{...bo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bo,borderTopRightRadius:bo,borderBottomLeftRadius:bo,borderBottomRightRadius:bo,boxShadow:$2},kS=["TopLeft","TopRight","BottomLeft","BottomRight"],Q2=kS.length,r0=t=>typeof t=="string"?parseFloat(t):t,s0=t=>typeof t=="number"||Me.test(t);function J2(t,e,n,i,r,s){r?(t.opacity=ft(0,n.opacity!==void 0?n.opacity:1,eD(i)),t.opacityExit=ft(e.opacity!==void 0?e.opacity:1,0,tD(i))):s&&(t.opacity=ft(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Q2;o++){const a=`border${kS[o]}Radius`;let l=o0(e,a),u=o0(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||s0(l)===s0(u)?(t[a]=Math.max(ft(r0(l),r0(u),i),0),(li.test(u)||li.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=ft(e.rotate||0,n.rotate||0,i))}function o0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const eD=BS(0,.5,Vx),tD=BS(.5,.95,Jt);function BS(t,e,n){return i=>i<t?0:i>e?1:n(es(t,e,i))}function a0(t,e){t.min=e.min,t.max=e.max}function Cn(t,e){a0(t.x,e.x),a0(t.y,e.y)}function l0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function u0(t,e,n,i,r){return t-=e,t=Pu(t,1/n,i),r!==void 0&&(t=Pu(t,1/r,i)),t}function nD(t,e=0,n=1,i=.5,r,s=t,o=t){if(li.test(e)&&(e=parseFloat(e),e=ft(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ft(s.min,s.max,i);t===s&&(a-=e),t.min=u0(t.min,e,n,a,r),t.max=u0(t.max,e,n,a,r)}function c0(t,e,[n,i,r],s,o){nD(t,e[n],e[i],e[r],e.scale,s,o)}const iD=["x","scaleX","originX"],rD=["y","scaleY","originY"];function f0(t,e,n,i){c0(t.x,e,iD,n?n.x:void 0,i?i.x:void 0),c0(t.y,e,rD,n?n.y:void 0,i?i.y:void 0)}function d0(t){return t.translate===0&&t.scale===1}function zS(t){return d0(t.x)&&d0(t.y)}function h0(t,e){return t.min===e.min&&t.max===e.max}function sD(t,e){return h0(t.x,e.x)&&h0(t.y,e.y)}function p0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function VS(t,e){return p0(t.x,e.x)&&p0(t.y,e.y)}function m0(t){return Sn(t.x)/Sn(t.y)}function g0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class oD{constructor(){this.members=[]}add(e){gp(this.members,e),e.scheduleRender()}remove(e){if(vp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function aD(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:h,skewX:p,skewY:_}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),_&&(i+=`skewY(${_}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const lD=(t,e)=>t.depth-e.depth;class uD{constructor(){this.children=[],this.isDirty=!1}add(e){gp(this.children,e),this.isDirty=!0}remove(e){vp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lD),this.isDirty=!1,this.children.forEach(e)}}function jl(t){const e=jt(t)?t.get():t;return $L(e)?e.toValue():e}function cD(t,e){const n=ui.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Zn(i),t(s-e))};return $e.read(i,!0),()=>Zn(i)}function fD(t){return t instanceof SVGElement&&t.tagName!=="svg"}function dD(t,e,n){const i=jt(t)?t:si(t);return i.start(mp("",i,e,n)),i.animation}const Ur={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Bo=typeof window<"u"&&window.MotionDebug!==void 0,Tf=["","X","Y","Z"],hD={visibility:"hidden"},v0=1e3;let pD=0;function wf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function HS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=yS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",$e,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&HS(i)}function GS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=pD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bo&&(Ur.totalNodes=Ur.resolvedTargetDeltas=Ur.recalculatedProjection=0),this.nodes.forEach(vD),this.nodes.forEach(MD),this.nodes.forEach(ED),this.nodes.forEach(_D),Bo&&window.MotionDebug.record(Ur)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new uD)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new _p),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=fD(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=cD(h,250),Xl.hasAnimatedSinceResize&&(Xl.hasAnimatedSinceResize=!1,this.nodes.forEach(y0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||RD,{onLayoutAnimationStart:m,onLayoutAnimationComplete:d}=c.getProps(),v=!this.targetLayout||!VS(this.targetLayout,_)||p,g=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const S={...Jh(y,"layout"),onPlay:m,onComplete:d};(c.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else h||y0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(TD),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&HS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_0);return}this.isUpdating||this.nodes.forEach(xD),this.isUpdating=!1,this.nodes.forEach(SD),this.nodes.forEach(mD),this.nodes.forEach(gD),this.clearAllSnapshots();const a=ui.now();bt.delta=Ni(0,1e3/60,a-bt.timestamp),bt.timestamp=a,bt.isProcessing=!0,mf.update.process(bt),mf.preRender.process(bt),mf.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yD),this.sharedNodes.forEach(wD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=_t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!zS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Nr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),PD(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return _t();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(bD))){const{scroll:c}=this.root;c&&(ks(l.x,c.offset.x),ks(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=_t();if(Cn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:h}=c;c!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Cn(l,o),ks(l.x,f.offset.x),ks(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=_t();Cn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Bs(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Nr(c.latestValues)&&Bs(l,c.latestValues)}return Nr(this.latestValues)&&Bs(l,this.latestValues),l}removeTransform(o){const a=_t();Cn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Nr(u.latestValues))continue;jd(u.latestValues)&&u.updateSnapshot();const c=_t(),f=u.measurePageBox();Cn(c,f),f0(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Nr(this.latestValues)&&f0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=bt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_t(),this.relativeTargetOrigin=_t(),Jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=_t(),this.targetWithTransforms=_t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),L2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Cn(this.target,this.layout.layoutBox),DS(this.target,this.targetDelta)):Cn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=_t(),this.relativeTargetOrigin=_t(),Jo(this.relativeTargetOrigin,this.target,p.target),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bo&&Ur.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||jd(this.parent.latestValues)||LS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Cn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;z2(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=_t());const{target:_}=a;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(l0(this.prevProjectionDelta.x,this.projectionDelta.x),l0(this.prevProjectionDelta.y,this.projectionDelta.y)),Qo(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!g0(this.projectionDelta.x,this.prevProjectionDelta.x)||!g0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Bo&&Ur.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Os(),this.projectionDelta=Os(),this.projectionDeltaWithTransform=Os()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Os();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=_t(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,y=p!==_,m=this.getStack(),d=!m||m.members.length<=1,v=!!(y&&!d&&this.options.crossfade===!0&&!this.path.some(CD));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const w=S/1e3;x0(f.x,o.x,w),x0(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Jo(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AD(this.relativeTarget,this.relativeTargetOrigin,h,w),g&&sD(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=_t()),Cn(g,this.relativeTarget)),y&&(this.animationValues=c,J2(c,u,this.latestValues,w,v,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{Xl.hasAnimatedSinceResize=!0,this.currentAnimation=dD(0,v0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(v0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&WS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||_t();const f=Sn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const h=Sn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Cn(a,l),Bs(a,c),Qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new oD),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&wf("z",o,u,this.animationValues);for(let c=0;c<Tf.length;c++)wf(`rotate${Tf[c]}`,o,u,this.animationValues),wf(`skew${Tf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return hD;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=jl(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=jl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Nr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=aD(this.projectionDeltaWithTransform,this.treeScale,h),c&&(u.transform=c(h,u.transform));const{x:p,y:_}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in bu){if(h[y]===void 0)continue;const{correct:m,applyTo:d}=bu[y],v=u.transform==="none"?h[y]:m(h[y],f);if(d){const g=d.length;for(let S=0;S<g;S++)u[d[S]]=v}else u[y]=v}return this.options.layoutId&&(u.pointerEvents=f===this?jl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_0),this.root.sharedNodes.clear()}}}function mD(t){t.updateLayout()}function gD(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Rn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=Sn(h);h.min=i[f].min,h.max=h.min+p}):WS(s,n.layoutBox,i)&&Rn(f=>{const h=o?n.measuredBox[f]:n.layoutBox[f],p=Sn(i[f]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Os();Qo(a,i,n.layoutBox);const l=Os();o?Qo(l,t.applyTransform(r,!0),n.measuredBox):Qo(l,i,n.layoutBox);const u=!zS(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:p}=f;if(h&&p){const _=_t();Jo(_,n.layoutBox,h.layoutBox);const y=_t();Jo(y,i,p.layoutBox),VS(_,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function vD(t){Bo&&Ur.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function _D(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yD(t){t.clearSnapshot()}function _0(t){t.clearMeasurements()}function xD(t){t.isLayoutDirty=!1}function SD(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function y0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function MD(t){t.resolveTargetDelta()}function ED(t){t.calcProjection()}function TD(t){t.resetSkewAndRotation()}function wD(t){t.removeLeadSnapshot()}function x0(t,e,n){t.translate=ft(e.translate,0,n),t.scale=ft(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function S0(t,e,n,i){t.min=ft(e.min,n.min,i),t.max=ft(e.max,n.max,i)}function AD(t,e,n,i){S0(t.x,e.x,n.x,i),S0(t.y,e.y,n.y,i)}function CD(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const RD={duration:.45,ease:[.4,0,.1,1]},M0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),E0=M0("applewebkit/")&&!M0("chrome/")?Math.round:Jt;function T0(t){t.min=E0(t.min),t.max=E0(t.max)}function PD(t){T0(t.x),T0(t.y)}function WS(t,e,n){return t==="position"||t==="preserve-aspect"&&!b2(m0(e),m0(n),.2)}function bD(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const LD=GS({attachResizeListener:(t,e)=>Ma(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Af={current:void 0},XS=GS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Af.current){const t=new LD({});t.mount(window),t.setOptions({layoutScroll:!0}),Af.current=t}return Af.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),DD={pan:{Feature:j2},drag:{Feature:X2,ProjectionNode:XS,MeasureLayout:OS}};function w0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&$e.postRender(()=>s(e,Oa(e)))}class ND extends yr{mount(){const{current:e}=this.node;e&&(this.unmount=g2(e,n=>(w0(this.node,n,"Start"),i=>w0(this.node,i,"End"))))}unmount(){}}class UD extends yr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fa(Ma(this.node.current,"focus",()=>this.onFocus()),Ma(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function A0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&$e.postRender(()=>s(e,Oa(e)))}class ID extends yr{mount(){const{current:e}=this.node;e&&(this.unmount=x2(e,n=>(A0(this.node,n,"Start"),(i,{success:r})=>A0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const $d=new WeakMap,Cf=new WeakMap,FD=t=>{const e=$d.get(t.target);e&&e(t)},OD=t=>{t.forEach(FD)};function kD({root:t,...e}){const n=t||document;Cf.has(n)||Cf.set(n,{});const i=Cf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(OD,{root:t,...e})),i[r]}function BD(t,e,n){const i=kD(e);return $d.set(t,n),i.observe(t),()=>{$d.delete(t),i.unobserve(t)}}const zD={some:0,all:1};class VD extends yr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:zD[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),h=u?c:f;h&&h(l)};return BD(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(HD(e,n))&&this.startObserver()}unmount(){}}function HD({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const GD={inView:{Feature:VD},tap:{Feature:ID},focus:{Feature:UD},hover:{Feature:ND}},WD={layout:{ProjectionNode:XS,MeasureLayout:OS}},Ep=me.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),nc=me.createContext({}),Tp=typeof window<"u",wp=Tp?me.useLayoutEffect:me.useEffect,jS=me.createContext({strict:!1});function XD(t,e,n,i,r){var s,o;const{visualElement:a}=me.useContext(nc),l=me.useContext(jS),u=me.useContext(Sp),c=me.useContext(Ep).reducedMotion,f=me.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const h=f.current,p=me.useContext(FS);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&jD(f.current,n,r,p);const _=me.useRef(!1);me.useInsertionEffect(()=>{h&&_.current&&h.update(n,u)});const y=n[_S],m=me.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return wp(()=>{h&&(_.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Mp.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),me.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var d;(d=window.MotionHandoffMarkAsComplete)===null||d===void 0||d.call(window,y)}),m.current=!1))}),h}function jD(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:YS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Fs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function YS(t){if(t)return t.options.allowProjection!==!1?t.projection:YS(t.parent)}function YD(t,e,n){return me.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Fs(n)&&(n.current=i))},[e])}function ic(t){return Ju(t.animate)||Qh.some(e=>ya(t[e]))}function $S(t){return!!(ic(t)||t.variants)}function $D(t,e){if(ic(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ya(n)?n:void 0,animate:ya(i)?i:void 0}}return t.inherit!==!1?e:{}}function qD(t){const{initial:e,animate:n}=$D(t,me.useContext(nc));return me.useMemo(()=>({initial:e,animate:n}),[C0(e),C0(n)])}function C0(t){return Array.isArray(t)?t.join(" "):t}const R0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},oo={};for(const t in R0)oo[t]={isEnabled:e=>R0[t].some(n=>!!e[n])};function KD(t){for(const e in t)oo[e]={...oo[e],...t[e]}}const ZD=Symbol.for("motionComponentSymbol");function QD({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&KD(t);function s(a,l){let u;const c={...me.useContext(Ep),...a,layoutId:JD(a)},{isStatic:f}=c,h=qD(a),p=i(a,f);if(!f&&Tp){e3();const _=t3(c);u=_.MeasureLayout,h.visualElement=XD(r,p,c,e,_.ProjectionNode)}return ae.jsxs(nc.Provider,{value:h,children:[u&&h.visualElement?ae.jsx(u,{visualElement:h.visualElement,...c}):null,n(r,a,YD(p,h.visualElement,l),p,f,h.visualElement)]})}const o=me.forwardRef(s);return o[ZD]=r,o}function JD({layoutId:t}){const e=me.useContext(IS).id;return e&&t!==void 0?e+"-"+t:t}function e3(t,e){me.useContext(jS).strict}function t3(t){const{drag:e,layout:n}=oo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const n3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ap(t){return typeof t!="string"||t.includes("-")?!1:!!(n3.indexOf(t)>-1||/[A-Z]/u.test(t))}function qS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const KS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ZS(t,e,n,i){qS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(KS.has(r)?r:yp(r),e.attrs[r])}function QS(t,{layout:e,layoutId:n}){return is.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!bu[t]||t==="opacity")}function Cp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(jt(r[o])||e.style&&jt(e.style[o])||QS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function JS(t,e,n){const i=Cp(t,e,n);for(const r in t)if(jt(t[r])||jt(e[r])){const s=Na.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function rc(t){const e=me.useRef(null);return e.current===null&&(e.current=t()),e.current}function i3({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:r3(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const eM=t=>(e,n)=>{const i=me.useContext(nc),r=me.useContext(Sp),s=()=>i3(t,e,i,r);return n?s():rc(s)};function r3(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=jl(s[h]);let{initial:o,animate:a}=t;const l=ic(t),u=$S(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;if(f&&typeof f!="boolean"&&!Ju(f)){const h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){const _=Kh(t,h[p]);if(_){const{transitionEnd:y,transition:m,...d}=_;for(const v in d){let g=d[v];if(Array.isArray(g)){const S=c?g.length-1:0;g=g[S]}g!==null&&(r[v]=g)}for(const v in y)r[v]=y[v]}}}return r}const Rp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),tM=()=>({...Rp(),attrs:{}}),nM=(t,e)=>e&&typeof t=="number"?e.transform(t):t,s3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},o3=Na.length;function a3(t,e,n){let i="",r=!0;for(let s=0;s<o3;s++){const o=Na[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=nM(a,op[o]);if(!l){r=!1;const c=s3[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Pp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(is.has(l)){o=!0;continue}else if(jx(l)){r[l]=u;continue}else{const c=nM(u,op[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=a3(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}function P0(t,e,n){return typeof t=="string"?t:Me.transform(e+n*t)}function l3(t,e,n){const i=P0(e,t.x,t.width),r=P0(n,t.y,t.height);return`${i} ${r}`}const u3={offset:"stroke-dashoffset",array:"stroke-dasharray"},c3={offset:"strokeDashoffset",array:"strokeDasharray"};function f3(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?u3:c3;t[s.offset]=Me.transform(-i);const o=Me.transform(e),a=Me.transform(n);t[s.array]=`${o} ${a}`}function bp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(Pp(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:_}=t;h.transform&&(_&&(p.transform=h.transform),delete h.transform),_&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=l3(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&f3(h,o,a,l,!1)}const Lp=t=>typeof t=="string"&&t.toLowerCase()==="svg",d3={useVisualState:eM({scrapeMotionValuesFromProps:JS,createRenderState:tM,onMount:(t,e,{renderState:n,latestValues:i})=>{$e.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),$e.render(()=>{bp(n,i,Lp(e.tagName),t.transformTemplate),ZS(e,n)})}})},h3={useVisualState:eM({scrapeMotionValuesFromProps:Cp,createRenderState:Rp})};function iM(t,e,n){for(const i in e)!jt(e[i])&&!QS(i,n)&&(t[i]=e[i])}function p3({transformTemplate:t},e){return me.useMemo(()=>{const n=Rp();return Pp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function m3(t,e){const n=t.style||{},i={};return iM(i,n,t),Object.assign(i,p3(t,e)),i}function g3(t,e){const n={},i=m3(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const v3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Lu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||v3.has(t)}let rM=t=>!Lu(t);function _3(t){t&&(rM=e=>e.startsWith("on")?!Lu(e):t(e))}try{_3(require("@emotion/is-prop-valid").default)}catch{}function y3(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(rM(r)||n===!0&&Lu(r)||!e&&!Lu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function x3(t,e,n,i){const r=me.useMemo(()=>{const s=tM();return bp(s,e,Lp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};iM(s,t.style,t),r.style={...s,...r.style}}return r}function S3(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Ap(n)?x3:g3)(i,s,o,n),u=y3(i,typeof n=="string",t),c=n!==me.Fragment?{...u,...l,ref:r}:{},{children:f}=i,h=me.useMemo(()=>jt(f)?f.get():f,[f]);return me.createElement(n,{...c,children:h})}}function M3(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Ap(i)?d3:h3,preloadedFeatures:t,useRender:S3(r),createVisualElement:e,Component:i};return QD(o)}}const qd={current:null},sM={current:!1};function E3(){if(sM.current=!0,!!Tp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>qd.current=t.matches;t.addListener(e),e()}else qd.current=!1}function T3(t,e,n){for(const i in e){const r=e[i],s=n[i];if(jt(r))t.addValue(i,r);else if(jt(s))t.addValue(i,si(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,si(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const b0=new WeakMap,w3=[...qx,Wt,pr],A3=t=>w3.find($x(t)),L0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class C3{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=ui.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,$e.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=ic(n),this.isVariantNode=$S(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const p=f[h];l[h]!==void 0&&jt(p)&&p.set(l[h],!1)}}mount(e){this.current=e,b0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),sM.current||E3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){b0.delete(this.current),this.projection&&this.projection.unmount(),Zn(this.notifyUpdate),Zn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=is.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&$e.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in oo){const n=oo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):_t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<L0.length;i++){const r=L0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=T3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=si(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Wx(r)||Gx(r))?r=parseFloat(r):!A3(r)&&pr.test(n)&&(r=iS(e,n)),this.setBaseTarget(e,jt(r)?r.get():r)),jt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Kh(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!jt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new _p),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class oM extends C3{constructor(){super(...arguments),this.KeyframeResolver=rS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;jt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function R3(t){return window.getComputedStyle(t)}class P3 extends oM{constructor(){super(...arguments),this.type="html",this.renderInstance=qS}readValueFromInstance(e,n){if(is.has(n)){const i=ap(n);return i&&i.default||0}else{const i=R3(e),r=(jx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return NS(e,n)}build(e,n,i){Pp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Cp(e,n,i)}}class b3 extends oM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_t}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(is.has(n)){const i=ap(n);return i&&i.default||0}return n=KS.has(n)?n:yp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return JS(e,n,i)}build(e,n,i){bp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){ZS(e,n,i,r)}mount(e){this.isSVGTag=Lp(e.tagName),super.mount(e)}}const L3=(t,e)=>Ap(t)?new b3(e):new P3(e,{allowProjection:t!==me.Fragment}),D3=M3({...m2,...GD,...DD,...WD},L3),Gn=mb(D3);function N3(t){const e=rc(()=>si(t)),{isStatic:n}=me.useContext(Ep);if(n){const[,i]=me.useState(t);me.useEffect(()=>e.on("change",i),[])}return e}function aM(t,e){const n=N3(e()),i=()=>n.set(e());return i(),wp(()=>{const r=()=>$e.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Zn(i)}}),n}const U3=t=>t&&typeof t=="object"&&t.mix,I3=t=>U3(t)?t.mix:void 0;function F3(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=dp(r,s,{mixer:I3(s[0]),...o});return e?a(i):a}function O3(t){Ko.current=[],t();const e=aM(Ko.current,t);return Ko.current=void 0,e}function k3(t,e,n,i){if(typeof t=="function")return O3(t);const r=typeof e=="function"?e:F3(e,n,i);return Array.isArray(t)?D0(t,r):D0([t],([s])=>r(s))}function D0(t,e){const n=rc(()=>[]);return aM(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const Yl=new WeakMap;let Wi;function B3(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function z3({target:t,contentRect:e,borderBoxSize:n}){var i;(i=Yl.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return B3(t,n)}})})}function V3(t){t.forEach(z3)}function H3(){typeof ResizeObserver>"u"||(Wi=new ResizeObserver(V3))}function G3(t,e){Wi||H3();const n=ES(t);return n.forEach(i=>{let r=Yl.get(i);r||(r=new Set,Yl.set(i,r)),r.add(e),Wi==null||Wi.observe(i)}),()=>{n.forEach(i=>{const r=Yl.get(i);r==null||r.delete(e),r!=null&&r.size||Wi==null||Wi.unobserve(i)})}}const $l=new Set;let ea;function W3(){ea=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};$l.forEach(n=>n(e))},window.addEventListener("resize",ea)}function X3(t){return $l.add(t),ea||W3(),()=>{$l.delete(t),!$l.size&&ea&&(ea=void 0)}}function j3(t,e){return typeof t=="function"?X3(t):G3(t,e)}const Y3=50,N0=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),$3=()=>({time:0,x:N0(),y:N0()}),q3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function U0(t,e,n,i){const r=n[e],{length:s,position:o}=q3[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=es(0,r.scrollLength,r.current);const u=i-l;r.velocity=u>Y3?0:up(r.current-a,u)}function K3(t,e,n){U0(t,"x",e,n),U0(t,"y",e,n),e.time=n}function Z3(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Q3={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Kd={start:0,center:.5,end:1};function I0(t,e,n=0){let i=0;if(t in Kd&&(t=Kd[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const J3=[0,0];function eN(t,e,n,i){let r=Array.isArray(t)?t:J3,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Kd[t]?t:"0"]),s=I0(r[0],n,i),o=I0(r[1],e),s-o}const tN={x:0,y:0};function nN(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function iN(t,e,n){const{offset:i=Q3.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?Z3(r,t):tN,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:nN(r),u={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let c=!e[s].interpolate;const f=i.length;for(let h=0;h<f;h++){const p=eN(i[h],u[o],l[o],a[s]);!c&&p!==e[s].interpolatorOffsets[h]&&(c=!0),e[s].offset[h]=p}c&&(e[s].interpolate=dp(e[s].offset,hS(i)),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=e[s].interpolate(e[s].current)}function rN(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function sN(t,e,n,i={}){return{measure:()=>rN(t,i.target,n),update:r=>{K3(t,n,r),(i.offset||i.target)&&iN(t,n,i)},notify:()=>e(n)}}const Lo=new WeakMap,F0=new WeakMap,Rf=new WeakMap,O0=t=>t===document.documentElement?window:t;function Dp(t,{container:e=document.documentElement,...n}={}){let i=Rf.get(e);i||(i=new Set,Rf.set(e,i));const r=$3(),s=sN(e,t,r,n);if(i.add(s),!Lo.has(e)){const a=()=>{for(const h of i)h.measure()},l=()=>{for(const h of i)h.update(bt.timestamp)},u=()=>{for(const h of i)h.notify()},c=()=>{$e.read(a,!1,!0),$e.read(l,!1,!0),$e.update(u,!1,!0)};Lo.set(e,c);const f=O0(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&F0.set(e,j3(e,c)),f.addEventListener("scroll",c,{passive:!0})}const o=Lo.get(e);return $e.read(o,!1,!0),()=>{var a;Zn(o);const l=Rf.get(e);if(!l||(l.delete(s),l.size))return;const u=Lo.get(e);Lo.delete(e),u&&(O0(e).removeEventListener("scroll",u),(a=F0.get(e))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function lM(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return $e.update(i,!0),()=>Zn(i)}function oN({source:t,container:e,axis:n="y"}){t&&(e=t);const i={value:0},r=Dp(s=>{i.value=s[n].progress*100},{container:e,axis:n});return{currentTime:i,cancel:r}}const Pf=new Map;function uM({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),Pf.has(e)||Pf.set(e,{});const i=Pf.get(e);return i[n]||(i[n]=vS()?new ScrollTimeline({source:e,axis:n}):oN({source:e,axis:n})),i[n]}function aN(t){return t.length===2}function cM(t){return t&&(t.target||t.offset)}function lN(t,e){return aN(t)||cM(e)?Dp(n=>{t(n[e.axis].progress,n)},e):lM(t,uM(e))}function uN(t,e){if(t.flatten(),cM(e))return t.pause(),Dp(n=>{t.time=t.duration*n[e.axis].progress},e);{const n=uM(e);return t.attachTimeline?t.attachTimeline(n,i=>(i.pause(),lM(r=>{i.time=i.duration*r},n))):Jt}}function cN(t,{axis:e="y",...n}={}){const i={axis:e,...n};return typeof t=="function"?lN(t,i):uN(t,i)}function k0(t,e){Eb(!!(!e||e.current))}const fN=()=>({scrollX:si(0),scrollY:si(0),scrollXProgress:si(0),scrollYProgress:si(0)});function dN({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=rc(fN);return(n?wp:me.useEffect)(()=>(k0("target",e),k0("container",t),cN((o,{x:a,y:l})=>{r.scrollX.set(a.current),r.scrollXProgress.set(a.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}const hN=({children:t,offset:e=50})=>{const{scrollY:n}=dN(),i=k3(n,[0,1e3],[0,-e]);return ae.jsx(Gn.div,{style:{y:i},children:t})},pN="https://idkaccount3737.github.io/project/assets/SURGE_logo_znak_gold-BA7JsdyZ.png",mN=()=>ae.jsxs("div",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[ae.jsx(Gn.div,{className:"absolute inset-0 z-0",initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:.3},transition:{duration:1.5},style:{backgroundImage:'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',backgroundSize:"cover",backgroundPosition:"center"}}),ae.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"}),ae.jsx(hN,{children:ae.jsxs("div",{className:"relative z-10 text-center px-4 sm:px-6 lg:px-8",children:[ae.jsx(Gn.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:260,damping:20,delay:.3},children:ae.jsx("img",{src:pN,alt:"Trophy",className:"mx-auto h-36 w-36 mb-8 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"})}),ae.jsxs(Gn.h1,{className:"text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFA500]",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.5},children:["SURGE EUROPE",ae.jsx(Gn.span,{className:"block text-[#00CED1] mt-2 drop-shadow-[0_0_10px_rgba(0,206,209,0.5)]",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.7},children:"MLBB Tournament"})]}),ae.jsx(Gn.p,{className:"text-xl text-gray-300 mb-12 max-w-2xl mx-auto",initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:.9},children:"Pridajte sa k prvému turnaju Mobile Legends: Bang Bang v Európe."}),ae.jsxs(Gn.a,{href:"#tournament",className:"inline-block px-8 py-4 rounded-lg font-bold text-lg relative overflow-hidden group",whileHover:{scale:1.05},whileTap:{scale:.95},initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:1.1},children:[ae.jsx("span",{className:"relative z-10 text-white",children:"Zaregistrujte sa"}),ae.jsx(Gn.div,{className:"absolute inset-0 bg-gradient-to-r from-[#00CED1] to-[#FFD700]",initial:{x:"100%"},whileHover:{x:0},transition:{duration:.3}}),ae.jsx("div",{className:"absolute inset-0 bg-[#00CED1]"})]})]})}),ae.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"})]});var Zd=new Map,bl=new WeakMap,B0=0,gN=void 0;function vN(t){return t?(bl.has(t)||(B0+=1,bl.set(t,B0.toString())),bl.get(t)):"0"}function _N(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?vN(t.root):t[e]}`).toString()}function yN(t){const e=_N(t);let n=Zd.get(e);if(!n){const i=new Map;let r;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const u=a.isIntersecting&&r.some(c=>a.intersectionRatio>=c);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(l=i.get(a.target))==null||l.forEach(c=>{c(u,a)})})},t);r=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:i},Zd.set(e,n)}return n}function xN(t,e,n={},i=gN){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:s,elements:o}=yN(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),Zd.delete(r))}}function SN({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:u}={}){var c;const[f,h]=me.useState(null),p=me.useRef(u),[_,y]=me.useState({inView:!!a,entry:void 0});p.current=u,me.useEffect(()=>{if(o||!f)return;let g;return g=xN(f,(S,w)=>{y({inView:S,entry:w}),p.current&&p.current(S,w),w.isIntersecting&&s&&g&&(g(),g=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,f,r,i,s,o,n,l,e]);const m=(c=_.entry)==null?void 0:c.target,d=me.useRef(void 0);!f&&m&&!s&&!o&&d.current!==m&&(d.current=m,y({inView:!!a,entry:void 0}));const v=[h,_.inView,_.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const MN={up:{y:40,x:0},down:{y:-40,x:0},left:{x:40,y:0},right:{x:-40,y:0}},Do=({children:t,delay:e=0,direction:n="up"})=>{const[i,r]=SN({triggerOnce:!0,threshold:.1}),s=MN[n];return ae.jsx(Gn.div,{ref:i,initial:{opacity:0,...s},animate:{opacity:r?1:0,x:r?0:s.x,y:r?0:s.y},transition:{duration:.8,delay:e,ease:[.21,.47,.32,.98]},children:t})},EN=({children:t})=>ae.jsxs(Gn.div,{className:"relative rounded-lg overflow-hidden",whileHover:{scale:1.02},transition:{duration:.3},children:[ae.jsx(Gn.div,{className:"absolute inset-0",animate:{background:["linear-gradient(90deg, #45A59D, #C9AD75)","linear-gradient(180deg, #C9AD75, #45A59D)","linear-gradient(270deg, #45A59D, #C9AD75)","linear-gradient(0deg, #C9AD75, #45A59D)","linear-gradient(90deg, #45A59D, #C9AD75)"]},transition:{duration:8,repeat:1/0,repeatType:"reverse"}}),ae.jsx("div",{className:"relative bg-black m-[2px] rounded-lg",children:t})]}),TN=()=>ae.jsxs("section",{id:"about",className:"py-20 bg-[#0a0a0a] relative overflow-hidden",children:[ae.jsx("div",{className:"absolute inset-0 bg-[url('/grid.svg')] opacity-5"}),ae.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",children:[ae.jsx(Do,{children:ae.jsxs("div",{className:"text-center mb-12",children:[ae.jsx("h2",{className:"text-3xl font-bold text-[#C9AD75]",children:"O nás - intro"}),ae.jsx("div",{className:"w-24 h-1 bg-[#45A59D] mx-auto mt-4"})]})}),ae.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[ae.jsx(Do,{direction:"left",children:ae.jsx(EN,{children:ae.jsx("img",{src:"https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Esports Tournament",className:"rounded-lg"})})}),ae.jsxs("div",{className:"space-y-6",children:[ae.jsx(Do,{direction:"right",delay:.2,children:ae.jsx("p",{className:"text-gray-300",children:"Surge Európa je venovaná výzdvihu súťažného prostredia Mobile Legends: Bang Bang v Európe. Našim cieľom je poskytnúť profesionálnu platformu pre tímy, aby mohli predviesť svoje schopnosti a súťažiť na najvyššej úrovni."})}),ae.jsx(Do,{direction:"right",delay:.4,children:ae.jsx("p",{className:"text-gray-300",children:"S rokmi skúseností v organizovaní esportových podujatí zabezpečujeme férovú hru, súťažnú integritu a nezabudnuteľný zážitok pre hráčov aj divákov."})}),ae.jsx(Do,{direction:"right",delay:.6,children:ae.jsx("p",{className:"text-gray-300",children:"Pridajte sa k nám pri formovaní budúcnosti MLBB esportu v Európe a súčasťou niečoho výnimočného."})})]})]})]})]}),wN=()=>{const t=[{icon:ae.jsx(lb,{className:"h-6 w-6"}),href:"https://facebook.com"},{icon:ae.jsx(fb,{className:"h-6 w-6"}),href:"https://twitter.com"},{icon:ae.jsx(ub,{className:"h-6 w-6"}),href:"https://instagram.com"},{icon:ae.jsx(hb,{className:"h-6 w-6"}),href:"https://youtube.com"}];return ae.jsx("footer",{className:"bg-black py-12",children:ae.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:ae.jsxs("div",{className:"flex flex-col items-center",children:[ae.jsx("div",{className:"flex space-x-6 mb-8",children:t.map((e,n)=>ae.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-[#45A59D] transition-colors",children:e.icon},n))}),ae.jsx("div",{className:"text-center",children:ae.jsxs("p",{className:"text-gray-400",children:["© ",new Date().getFullYear()," Surge Europe. All rights reserved."]})})]})})})};function AN(){return ae.jsxs("div",{className:"relative",children:[ae.jsx(sb,{}),ae.jsxs("div",{className:"relative z-10",children:[ae.jsx(pb,{}),ae.jsxs("main",{children:[ae.jsx(mN,{}),ae.jsx(TN,{})]}),ae.jsx(wN,{})]})]})}Qy(document.getElementById("root")).render(ae.jsx(me.StrictMode,{children:ae.jsx(AN,{})}));
