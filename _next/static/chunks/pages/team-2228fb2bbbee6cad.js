(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{40939:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n(11761)}])},33414:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(31549),i=n(20976),o=n(32919);function u(){return(0,r.jsx)(o.xu,{height:i.Z.headerHeight.reference})}},40754:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return l}});var r=n(31549),i=n(26035),o=n.n(i),u=n(8917),a=n(33414);let s=o()(()=>Promise.all([n.e(53),n.e(89)]).then(n.bind(n,22089)),{loadableGenerated:{webpack:()=>[22089]}}),c=o()(()=>Promise.all([n.e(53),n.e(342)]).then(n.bind(n,66342)),{loadableGenerated:{webpack:()=>[66342]}});var f=!0;function l(e){let{data:t,query:n,params:i}=e,[o]=(0,u.yR)(t,n,i);return(0,r.jsxs)(r.Fragment,{children:[o.doc.header?(0,r.jsx)(c,{header:o.doc.header}):(0,r.jsx)(a.Z,{}),(0,r.jsx)(s,{blocks:o.doc.blocks})]})}},11761:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var r=n(40754),i=!0;t.default=r.default},95325:function(e,t,n){"use strict";let r;n.d(t,{Kx:function(){return h},T:function(){return p},o_:function(){return y}});var i=n(44194);let o=new Uint8Array(16),u=[];for(let e=0;e<256;++e)u.push((e+256).toString(16).slice(1));var a={randomUUID:"u">typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s=["channel/disconnect","channel/response","channel/heartbeat"],c=["handshake/syn","handshake/syn-ack","handshake/ack"],f=e=>s.some(t=>t===e),l=e=>c.some(t=>t===e),d=({data:e={}})=>"object"==typeof e&&null!==e&&!Array.isArray(e)&&!("domain"in e)&&["id","type","from","to"].every(t=>t in e)&&e.type.startsWith("handshake/");function p(e,t,n){let[s,c]=(0,i.useState)(),[p,h]=(0,i.useState)(!1);(0,i.useEffect)(()=>{if(window.self===window.top&&!window.opener)return;let e=function(e){let t=window.self!==window.top||window.opener,n={buffer:[],id:null,origin:null,source:null,status:"connecting"};function i(t,i){if(l(t)||f(t)||"connecting"!==n.status&&"reconnecting"!==n.status){if(n.id&&n.origin&&n.source){let s={connectionId:n.id,data:i,domain:"sanity/channels",from:e.id,id:function(e,t,n){if(a.randomUUID&&!e)return a.randomUUID();let i=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="u">typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)})();return i[6]=15&i[6]|64,i[8]=63&i[8]|128,function(e,t=0){return u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]}(i)}(),to:e.connectTo,type:t};try{n.source.postMessage(s,{targetOrigin:n.origin})}catch{throw Error(`Failed to postMessage '${s.id}' on '${e.id}'`)}}}else n.buffer.push({type:t,data:i})}function s(t){if(d(t))console.error("Visual editing package mismatch detected! Please ensure you are using the latest version of Sanity Studio and any packages listed here:\nhttps://github.com/sanity-io/visual-editing");else if(function(t){let{data:n}=t;return"sanity/channels"===n.domain&&n.to===e.id&&n.from===e.connectTo&&"channel/response"!==n.type}(t)){let{data:e}=t;if(n.origin&&t.origin!==n.origin)return;if(t.source&&n.source!==t.source&&(n.source=t.source),l(e.type)&&e.data){if("handshake/syn"===e.type)return n.origin=t.origin,n.id=e.data.id,h("connecting"),void i("handshake/syn-ack",{id:n.id});if("handshake/ack"===e.type&&e.data.id===n.id)return void h("connected")}else if(e.connectionId===n.id&&t.origin===n.origin){if("channel/disconnect"===e.type)return void h("disconnected");{let t=[e.type,e.data];c.forEach(e=>{e(...t)}),i("channel/response",{responseTo:e.id})}return}}}let c=new Set,p=new Set;function h(e){n.status=e,p.forEach(t=>{t(e)}),"connected"===e&&function(){let e=[...n.buffer];n.buffer.splice(0,n.buffer.length),e.forEach(({type:e,data:t})=>{i(e,t)})}()}return window.addEventListener("message",s,!1),h("connecting"),{destroy:function(){["disconnected"].includes(n.status)||h("disconnected"),c.clear(),p.clear(),window.removeEventListener("message",s,!1)},inFrame:t,send:function(e,t){i(e,t)},subscribe:function(e){return c.add(e),()=>c.delete(e)},onStatusUpdate:function(e){return p.add(e),()=>p.delete(e)}}}({id:"preview-kit",connectTo:"presentation"});e.onStatusUpdate(e=>{"connected"===e?h(!0):"disconnected"===e&&h(!1)});let t=setTimeout(()=>c(e),0);return()=>{clearTimeout(t),e.destroy(),c(void 0)}},[n,t]);let y=JSON.stringify(Array.from(e.keys()));(0,i.useEffect)(()=>{"[]"!==y&&s&&p&&s.send("preview-kit/documents",{projectId:t,dataset:n,perspective:"previewDrafts",documents:Array.from(e.values())})},[y,s,p,n,e,t])}function h(e){let t=(0,i.useMemo)(()=>JSON.stringify(e||{}),[e]);return(0,i.useMemo)(()=>JSON.parse(t),[t])}function y(e){let{refreshInterval:t}=e,n=function(){let[e,t]=(0,i.useState)(!1);(0,i.useEffect)(()=>{t(navigator.onLine);let e=()=>t(!0),n=()=>t(!1);return window.addEventListener("online",e),window.addEventListener("offline",n),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}},[]);let n=(0,i.useSyncExternalStore)(v,()=>document.visibilityState,()=>"hidden");return!e||"hidden"===n}(),[r,o]=(0,i.useState)("hit"),u=(0,i.useCallback)(()=>(o("inflight"),()=>o("hit")),[]);return(0,i.useEffect)(()=>{if(!t||"hit"!==r)return;let e=setTimeout(()=>o("stale"),t);return()=>clearTimeout(e)},[t,r]),(0,i.useEffect)(()=>{if("hit"!==r)return;let e=()=>o("stale");return window.addEventListener("focus",e),()=>window.removeEventListener("focus",e)},[t,r]),(0,i.useEffect)(()=>{n&&"hit"===r&&o("stale"),n||"stale"!==r||o("refresh")},[n,r]),[r,u]}function v(e){return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)}},12235:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});let r=(0,n(44194).createContext)(null)},8917:function(e,t,n){"use strict";n.d(t,{Ji:function(){return g},yR:function(){return v}});var r,i,o=n(95325),u=n(44194),a=n(12235),s="u">typeof Element,c="function"==typeof Map,f="function"==typeof Set,l="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView,d=(r=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var r,i,o,u;if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(c&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(i=u.next()).done;)if(!n.has(i.value[0]))return!1;for(u=t.entries();!(i=u.next()).done;)if(!e(i.value[1],n.get(i.value[0])))return!1;return!0}if(f&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(i=u.next()).done;)if(!n.has(i.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof n.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof n.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;if(s&&t instanceof Element)return!1;for(i=r;0!=i--;)if(("_owner"!==o[i]&&"__v"!==o[i]&&"__o"!==o[i]||!t.$$typeof)&&!e(t[o[i]],n[o[i]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}).__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,p={exports:{}},h={};/**
* @license React
* use-sync-external-store-with-selector.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/p.exports=function(){if(i)return h;i=1;var e="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},t=u.useSyncExternalStore,n=u.useRef,r=u.useEffect,o=u.useMemo,a=u.useDebugValue;return h.useSyncExternalStoreWithSelector=function(i,u,s,c,f){var l=n(null);if(null===l.current){var d={hasValue:!1,value:null};l.current=d}else d=l.current;var p=t(i,(l=o(function(){function t(t){if(!i){if(i=!0,n=t,t=c(t),void 0!==f&&d.hasValue){var o=d.value;if(f(o,t))return r=o}return r=t}if(o=r,e(n,t))return o;var u=c(t);return void 0!==f&&f(o,u)?o:(n=t,r=u)}var n,r,i=!1,o=void 0===s?null:s;return[function(){return t(u())},null===o?void 0:function(){return t(o())}]},[u,s,c,f]))[0],l[1]);return r(function(){d.hasValue=!0,d.value=p},[p]),a(p),p},h}();var y=p.exports;function v(e,t,n,r){let{isEqual:i=d}=r||{},s=(0,u.useContext)(a.d),c=(0,o.Kx)(n),f=(0,u.useMemo)(()=>({subscribe:()=>()=>{},getSnapshot:()=>e}),[e]),l=(0,u.useMemo)(()=>(null==s?void 0:s(e,t,c))||{subscribe:()=>()=>{},getSnapshot:()=>e},[s,e,c,t]),[p]=(0,u.useState)(()=>{if(void 0===e)throw Error("initialSnapshot can't be undefined, if you don't want an initial value use null instead");try{return JSON.parse(JSON.stringify(e))}catch(t){return console.warn("Failed to deep clone initialSnapshot, this is likely an error and an indication that the snapshot isn't JSON serializable",{initialSnapshot:e,error:t}),e}}),h=(0,u.useCallback)(()=>p,[p]),v=(0,u.useCallback)(e=>e,[]),g=y.useSyncExternalStoreWithSelector((null==l?void 0:l.subscribe)||f.subscribe,(null==l?void 0:l.getSnapshot)||f.getSnapshot,h,v,i),m=null!==s;return[g,m&&p===g,m]}let g=(0,u.lazy)(()=>n.e(756).then(n.bind(n,24756)))}},function(e){e.O(0,[888,774,179],function(){return e(e.s=40939)}),_N_E=e.O()}]);