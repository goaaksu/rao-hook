(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"187":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return generateGeneralFail})),n.d(t,"a",(function(){return combineOptions})),n.d(t,"d",(function(){return stringfiyUrl}));var r=n(19),o=n(189);var c=!0,i=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return c||Object(r.m)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&Object(r.n)(t,"Object")){var c=n.includes("?");n+=(c?"&":"?")+Object(o.stringify)(t)}return n}},"188":function(e,t,n){"use strict";var r=n(19),o=n(187);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function usePromise(e){return function(t){var n;if(!e)return Promise.reject(Object(o.b)(e,"please input a valid method name"));var c=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,i){try{if(!Object(r.g)(e))throw new TypeError("["+c+"] not vaild for Taro");var a;null==(a=e(_extends({},t||{},{"success":n,"fail":i})))||null==a.catch||a.catch(i)}catch(e){i(Object(o.b)(c,e.message))}}))}}},"189":function(e,t,n){"use strict";t.decode=t.parse=n(190),t.encode=t.stringify=n(191)},"190":function(e,t,n){"use strict";function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var c={};if("string"!=typeof e||0===e.length)return c;var i=/\+/g;e=e.split(t);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var s=0;s<u;++s){var f,p,l,b,d=e[s].replace(i,"%20"),O=d.indexOf(n);O>=0?(f=d.substr(0,O),p=d.substr(O+1)):(f=d,p=""),l=decodeURIComponent(f),b=decodeURIComponent(p),hasOwnProperty(c,l)?r(c[l])?c[l].push(b):c[l]=[c[l],b]:c[l]=b}return c};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"191":function(e,t,n){"use strict";var r=n(22).default,o=function stringifyPrimitive(e){switch(r(e)){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,a){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===r(e)?map(i(e),(function(r){var i=encodeURIComponent(o(r))+n;return c(e[r])?map(e[r],(function(e){return i+encodeURIComponent(o(e))})).join(t):i+encodeURIComponent(o(e[r]))})).join(t):a?encodeURIComponent(o(a))+n+encodeURIComponent(o(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function map(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var i=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"197":function(e,t,n){"use strict";var r=n(8),o=n(333),c=n(188),i=n(187);t.a=function useToast(e){var t=r.a.useTaroRef(e);r.a.useTaroEffect((function(){t.current=e}),[e]);var n=Object(c.a)(o.h);return{"show":function show(e){if(!e&&!t.current)return Promise.reject(Object(i.b)("showToast","please provide a option"));var r=Object(i.a)(t.current,e);return n(r)},"hide":Object(c.a)(o.d)}}},"344":function(e,t,n){"use strict";n.r(t);var r=n(197),o=n(0),c=Object(o.createTextVNode)("展示带初始配置的Toast"),i=Object(o.createTextVNode)("展示新配置的Toast"),a=Object(o.createTextVNode)("隐藏新配置的Toast");const u=Object(o.defineComponent)({"name":"index","setup":function setup(e){var t=Object(r.a)({"title":"initial title"}),n=t.show,u=t.hide;return function(e,t){var r=Object(o.resolveComponent)("nut-button"),s=Object(o.resolveComponent)("demo-content");return Object(o.openBlock)(),Object(o.createBlock)(s,null,{"default":Object(o.withCtx)((function(){return[Object(o.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[0]||(t[0]=function(e){return Object(o.unref)(n)()})},{"default":Object(o.withCtx)((function(){return[c]})),"_":1}),Object(o.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[1]||(t[1]=function(e){return function handleChangeOption(){n({"icon":"error","title":"点击隐藏按钮进行隐藏","duration":3e6})}()})},{"default":Object(o.withCtx)((function(){return[i]})),"_":1}),Object(o.createVNode)(r,{"shape":"square","type":"primary","block":"","onClick":t[2]||(t[2]=function(e){return Object(o.unref)(u)()})},{"default":Object(o.withCtx)((function(){return[a]})),"_":1})]})),"_":1})}}});t.default=u}}]);