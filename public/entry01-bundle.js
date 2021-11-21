/*! For license information please see entry01-bundle.js.LICENSE.txt */
(()=>{"use strict";var e,t={29:(e,t,n)=>{var r=n(294),o=n(935),l=n(711);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=n(974);const d=function(){function e(t,n,r,o){a(this,e),this.caption=t,this.head=n,this.data=r,this.foot=o,this.nice=!1}return c(e,[{key:"nice",value:function(){this.nice=!0}}]),e}();function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}const y=function(e){f(n,e);var t=v(n);function n(e){return a(this,n),t.call(this,e)}return c(n,[{key:"render",value:function(){return r.createElement("button",null,this.props.text)}}]),n}(r.Component);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}const E=function(e){f(n,e);var t=b(n);function n(e){return a(this,n),t.call(this,e)}return c(n,[{key:"render",value:function(){return r.createElement("table",null,r.createElement("caption",null,this.props.food.caption),r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,this.props.food.head))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,this.props.food.data))),r.createElement("tfoot",null,r.createElement("tr",null,r.createElement("td",null,this.props.food.foot))))}}]),n}(r.Component);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}const g=function(e){f(n,e);var t=w(n);function n(){return a(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=new d("caption","head","data","foot");return r.createElement("div",null,r.createElement(E,{food:e}),r.createElement(y,{text:"Food Button"}))}}]),n}(r.Component);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var O=function(e){f(n,e);var t=k(n);function n(){return a(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("h1",null,"Basic Example"),r.createElement(m.Z5,null,r.createElement(m.AW,{path:"/",element:r.createElement(_,null)},r.createElement(m.AW,{index:!0,element:r.createElement(j,null)}),r.createElement(m.AW,{path:"about",element:r.createElement(P,null)}),r.createElement(m.AW,{path:"dashboard",element:r.createElement(x,null)}),r.createElement(m.AW,{path:"food",element:r.createElement(g,null)}),r.createElement(m.AW,{path:"*",element:r.createElement(R,null)}))))}}]),n}(r.Component);function _(){return r.createElement("div",null,r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(l.rU,{to:"/"},"Home")),r.createElement("li",null,r.createElement(l.rU,{to:"/about"},"About")),r.createElement("li",null,r.createElement(l.rU,{to:"/dashboard"},"Dashboard")),r.createElement("li",null,r.createElement(l.rU,{to:"/food"},"Food")),r.createElement("li",null,r.createElement(l.rU,{to:"/nothing-here"},"Nothing Here")))),r.createElement("hr",null),r.createElement(m.j3,null))}var j=function(){return r.createElement("div",null,"Home")},P=function(){return r.createElement("div",null,"About")},x=function(){return r.createElement("div",null,"Dashboard")},R=function(){return r.createElement("div",null,r.createElement("h2",null,"Nothing to see here!"),r.createElement("p",null,r.createElement(l.rU,{to:"/"},"Go to the home page")))};const T=O;var C=document.body;o.render(r.createElement(r.StrictMode,null,r.createElement(l.VK,null,r.createElement(T,null))),C)},682:(e,t,n)=>{function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{aU:()=>o,lX:()=>p,Ep:()=>f,cP:()=>s});var o,l=o||(o={});l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE";var a=function(e){return e};function u(e){e.preventDefault(),e.returnValue=""}function c(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function i(){return Math.random().toString(36).substr(2,8)}function f(e){var t=e.pathname,n=e.search;return(void 0===t?"/":t)+(void 0===n?"":n)+(void 0===(e=e.hash)?"":e)}function s(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),0<=(n=e.indexOf("?"))&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function p(e){function t(){var e=m.location,t=d.state||{};return[t.idx,a({pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"})]}function n(e){return"string"==typeof e?e:f(e)}function l(e,t){return void 0===t&&(t=null),a(r({pathname:E.pathname,hash:"",search:""},"string"==typeof e?s(e):e,{state:t,key:i()}))}function p(e){y=e,e=t(),b=e[0],E=e[1],w.call({action:y,location:E})}function h(e){d.go(e)}void 0===e&&(e={});var m=void 0===(e=e.window)?document.defaultView:e,d=m.history,v=null;m.addEventListener("popstate",(function(){if(v)g.call(v),v=null;else{var e=o.Pop,n=t(),r=n[0];if(n=n[1],g.length){if(null!=r){var l=b-r;l&&(v={action:e,location:n,retry:function(){h(-1*l)}},h(l))}}else p(e)}}));var y=o.Pop,b=(e=t())[0],E=e[1],w=c(),g=c();return null==b&&(b=0,d.replaceState(r({},d.state,{idx:b}),"")),{get action(){return y},get location(){return E},createHref:n,push:function e(t,r){var a=o.Push,u=l(t,r);if(!g.length||(g.call({action:a,location:u,retry:function(){e(t,r)}}),0)){var c=[{usr:u.state,key:u.key,idx:b+1},n(u)];u=c[0],c=c[1];try{d.pushState(u,"",c)}catch(e){m.location.assign(c)}p(a)}},replace:function e(t,r){var a=o.Replace,u=l(t,r);g.length&&(g.call({action:a,location:u,retry:function(){e(t,r)}}),1)||(u=[{usr:u.state,key:u.key,idx:b},n(u)],d.replaceState(u[0],"",u[1]),p(a))},go:h,back:function(){h(-1)},forward:function(){h(1)},listen:function(e){return w.push(e)},block:function(e){var t=g.push(e);return 1===g.length&&m.addEventListener("beforeunload",u),function(){t(),g.length||m.removeEventListener("beforeunload",u)}}}}},418:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,l){for(var a,u,c=o(e),i=1;i<arguments.length;i++){for(var f in a=Object(arguments[i]))n.call(a,f)&&(c[f]=a[f]);if(t){u=t(a);for(var s=0;s<u.length;s++)r.call(a,u[s])&&(c[u[s]]=a[u[s]])}}return c}},53:(e,t)=>{
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n,r,o,l;if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();t.unstable_now=function(){return u.now()-c}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,f=null,s=function(){if(null!==i)try{var e=t.unstable_now();i(!0,e),i=null}catch(e){throw setTimeout(s,0),e}};n=function(e){null!==i?setTimeout(n,0,e):(i=e,setTimeout(s,0))},r=function(e,t){f=setTimeout(e,t)},o=function(){clearTimeout(f)},t.unstable_shouldYield=function(){return!1},l=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var d=!1,v=null,y=-1,b=5,E=0;t.unstable_shouldYield=function(){return t.unstable_now()>=E},l=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,g=w.port2;w.port1.onmessage=function(){if(null!==v){var e=t.unstable_now();E=e+b;try{v(!0,e)?g.postMessage(null):(d=!1,v=null)}catch(e){throw g.postMessage(null),e}}else d=!1},n=function(e){v=e,d||(d=!0,g.postMessage(null))},r=function(e,n){y=p((function(){e(t.unstable_now())}),n)},o=function(){h(y),y=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<j(o,t)))break e;e[r]=t,e[n]=o,n=r}}function O(e){return void 0===(e=e[0])?null:e}function _(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var l=2*(r+1)-1,a=e[l],u=l+1,c=e[u];if(void 0!==a&&0>j(a,n))void 0!==c&&0>j(c,a)?(e[r]=c,e[u]=n,r=u):(e[r]=a,e[l]=n,r=l);else{if(!(void 0!==c&&0>j(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}return null}function j(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var P=[],x=[],R=1,T=null,C=3,S=!1,A=!1,B=!1;function F(e){for(var t=O(x);null!==t;){if(null===t.callback)_(x);else{if(!(t.startTime<=e))break;_(x),t.sortIndex=t.expirationTime,k(P,t)}t=O(x)}}function M(e){if(B=!1,F(e),!A)if(null!==O(P))A=!0,n(I);else{var t=O(x);null!==t&&r(M,t.startTime-e)}}function I(e,n){A=!1,B&&(B=!1,o()),S=!0;var l=C;try{for(F(n),T=O(P);null!==T&&(!(T.expirationTime>n)||e&&!t.unstable_shouldYield());){var a=T.callback;if("function"==typeof a){T.callback=null,C=T.priorityLevel;var u=a(T.expirationTime<=n);n=t.unstable_now(),"function"==typeof u?T.callback=u:T===O(P)&&_(P),F(n)}else _(P);T=O(P)}if(null!==T)var c=!0;else{var i=O(x);null!==i&&r(M,i.startTime-n),c=!1}return c}finally{T=null,C=l,S=!1}}var U=l;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||S||(A=!0,n(I))},t.unstable_getCurrentPriorityLevel=function(){return C},t.unstable_getFirstCallbackNode=function(){return O(P)},t.unstable_next=function(e){switch(C){case 1:case 2:case 3:var t=3;break;default:t=C}var n=C;C=t;try{return e()}finally{C=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=U,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=C;C=e;try{return t()}finally{C=n}},t.unstable_scheduleCallback=function(e,l,a){var u=t.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?u+a:u:a=u,e){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return e={id:R++,callback:l,priorityLevel:e,startTime:a,expirationTime:c=a+c,sortIndex:-1},a>u?(e.sortIndex=a,k(x,e),null===O(P)&&e===O(x)&&(B?o():B=!0,r(M,a-u))):(e.sortIndex=c,k(P,e),A||S||(A=!0,n(I))),e},t.unstable_wrapCallback=function(e){var t=C;return function(){var n=C;C=t;try{return e.apply(this,arguments)}finally{C=n}}}},840:(e,t,n)=>{e.exports=n(53)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(f=0;f<e.length;f++){for(var[n,o,l]=e[f],u=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(u=!1,l<a&&(a=l));if(u){e.splice(f--,1);var i=o();void 0!==i&&(t=i)}}return t}l=l||0;for(var f=e.length;f>0&&e[f-1][2]>l;f--)e[f]=e[f-1];e[f]=[n,o,l]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={718:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,u,c]=n,i=0;if(a.some((t=>0!==e[t]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var f=c(r)}for(t&&t(n);i<a.length;i++)l=a[i],r.o(e,l)&&e[l]&&e[l][0](),e[a[i]]=0;return r.O(f)},n=self.webpackChunkmat_react_template=self.webpackChunkmat_react_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[514],(()=>r(29)));o=r.O(o)})();