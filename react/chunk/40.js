(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"136":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return f})),r.d(t,"e",(function(){return isBoolean})),r.d(t,"f",(function(){return isFunction})),r.d(t,"g",(function(){return isNumber})),r.d(t,"h",(function(){return isObject})),r.d(t,"i",(function(){return isString})),r.d(t,"j",(function(){return isUndef})),r.d(t,"k",(function(){return l})),r.d(t,"l",(function(){return b})),r.d(t,"m",(function(){return strictOf}));var n,o=r(6);!function(e){e.WEAPP="WEAPP",e.WEB="WEB",e.RN="RN",e.SWAN="SWAN",e.ALIPAY="ALIPAY",e.TT="TT",e.QQ="QQ",e.JD="JD"}(n||(n={}));n.WEAPP,n.WEB,n.RN,n.SWAN,n.ALIPAY,n.TT,n.QQ,n.JD;var c="🎮[taro-hooks]",i="react",a="vue"===i,u="react"===i,s=("\n/**\n MIT License\n\n Copyright (c) ".concat((new Date).getFullYear()," innocces\n\n Power by TARO-HOOKS\n */\n"),"color: #8843e7; font-weight: bold;");function logCtor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.forEach((function(t){"string"==typeof t?console.debug("%c".concat(c,"---").concat(t),s+e):console.debug(c,"---",t)}))}}var l=logCtor(),b=logCtor("color: #d14; text-decoration: underline;");function isObject(e){return null!==e&&"object"===Object(o.a)(e)}function isFunction(e){return"function"==typeof e}function isString(e){return"string"==typeof e}function isBoolean(e){return"boolean"==typeof e}function isNumber(e){return"number"==typeof e}function isUndef(e){return void 0===e}function strictOf(e,t){return Object.prototype.toString.call(e)==="[object ".concat(function camelIndex(e){return isString(e)?e.replace(/^([a-z]{1})/,(function(e,t){var r;return t?null==t||null===(r=t.toUpperCase)||void 0===r?void 0:r.call(t):null})):e}(t),"]")}var f=function escapeState(e){return function isRef(e){return!(!e||!0!==e.__v_isRef)}(e)?e.value:e}},"150":function(e,t,r){"use strict";var n=r(17),o=(r(173),r(174)),c=(r(10),r(133)),i=r(140),a=r(26),u=(r(151),r(138));t.a=function DemoContent(e){var t=e.title,r=e.desc,s=e.children,l=a.a.useRouter().params,b=function transferParams(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(n.a)(e,2),r=t[0],o=t[1];return[r,decodeURIComponent(o)]})))}(void 0===l?{}:l),f=b.title,p=b.onlyMini;return Object(u.jsxs)(u.Fragment,{"children":[Boolean(+p)&&Object(u.jsxs)(o.a,{"scrollable":!0,"children":[Object(u.jsx)(o.a.Icon,{"children":Object(u.jsx)(i.k,{})}),"该hook仅可在小程序使用"]}),Object(u.jsxs)(c.l,{"className":"demo-content","children":[Object(u.jsx)(c.l,{"className":"demo-content-title","children":null!=f?f:t}),Object(u.jsx)(c.l,{"className":"demo-content-desc","children":r}),Object(u.jsx)(c.l,{"className":"demo-content-wrapper","children":s})]})]})}},"151":function(e,t,r){},"153":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return generateGeneralFail})),r.d(t,"a",(function(){return combineOptions})),r.d(t,"d",(function(){return stringfiyUrl}));var n=r(136),o=r(183);var c=!0,i=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var r="[API "+e+"] "+(t=t||"调用失败");return c||Object(n.l)(r),{"errMsg":r}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var r=e;if(t&&Object(n.m)(t,"Object")){var c=r.includes("?");r+=(c?"&":"?")+Object(o.stringify)(t)}return r}},"160":function(e,t,r){"use strict";r.d(t,"a",(function(){return Loading}));var n=r(212),o=r.n(n),c=r(133),i=r(135),a=r.n(i),u=r(10),s=r(134),l=r(142),b=["className","size","type","direction","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o()(0,12).map((function(e){return u.createElement(c.l,{"key":e,"className":Object(s.a)("loading__spinner__item")})}));function LoadingSpinner(e){var t=e.size,r=Object(u.useMemo)((function(){var e,r;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(r=Object(l.a)(t))&&void 0!==r?r:""}}),[t]);return u.createElement(c.l,{"className":Object(s.a)("loading__spinner"),"style":r},f)}function LoadingCircular(e){var t=e.size,r=Object(u.useMemo)((function(){var e,r;return{"width":null!==(e=Object(l.a)(t))&&void 0!==e?e:"","height":null!==(r=Object(l.a)(t))&&void 0!==r?r:""}}),[t]);return u.createElement(c.l,{"className":Object(s.a)("loading__circular"),"style":r})}function Loading(e){var t=e.className,r=e.size,n=e.type,o=void 0===n?"circular":n,i=e.direction,l=void 0===i?"horizontal":i,f=e.children,p=_objectWithoutProperties(e,b);return u.createElement(c.l,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":a()(Object(s.a)("loading"),Object(s.a)("loading--".concat(l)),Object(s.a)("loading--".concat(o)),t)},p),"spinner"===o&&u.createElement(LoadingSpinner,{"size":r}),"circular"===o&&u.createElement(LoadingCircular,{"size":r}),f&&u.createElement(c.l,{"className":Object(s.a)("loading__text"),"children":f}))}},"173":function(e,t,r){"use strict";r(146),r(226)},"174":function(e,t,r){"use strict";var n=r(2),o=r(23),c=r(17),i=r(133),a=r(132),u=r(135),s=r.n(u),l=r(10),b=r(134),f=r(172),p=r(142),O=r(312),j=r(139),d=["className","children"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function NoticeBarAction(e){var t=e.className,r=e.children,n=_objectWithoutProperties(e,d);return Object(j.a)(r,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":s()(Object(b.a)("notice-bar__action"),t)},n))}var y=["className","children"];function notice_bar_icon_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function notice_bar_icon_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function notice_bar_icon_objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function notice_bar_icon_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function NoticeBarIcon(e){var t=e.className,r=e.children,n=notice_bar_icon_objectWithoutProperties(e,y);return Object(j.a)(r,function notice_bar_icon_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?notice_bar_icon_ownKeys(Object(r),!0).forEach((function(t){notice_bar_icon_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):notice_bar_icon_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":s()(Object(b.a)("notice-bar__icon"),t)},n))}var v=["className","delay","speed","wordwrap","scrollable","children"];function notice_bar_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function notice_bar_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,n,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void r(e)}a.done?t(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function _next(e){asyncGeneratorStep(c,n,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(c,n,o,_next,_throw,"throw",e)}_next(void 0)}))}}function notice_bar_objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function notice_bar_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=function NoticeBar(e){var t=e.className,r=e.delay,u=void 0===r?1e3:r,j=e.speed,d=void 0===j?60:j,y=e.wordwrap,g=e.scrollable,m=void 0!==g&&g,h=e.children,P=notice_bar_objectWithoutProperties(e,v),_=function useChildren(e){var t={"icon":void 0,"text":[],"action":void 0};return l.Children.forEach(e,(function(e){if(Object(l.isValidElement)(e)){var r=e,n=r.type;n===NoticeBarIcon?t.icon=r:n===NoticeBarAction?t.action=r:t.text.push(e)}else t.text.push(e)})),t}(h),w=_.icon,S=_.text,x=_.action,E=!m&&!y,N=Object(l.useRef)(),I=Object(l.useRef)(),k=Object(l.useRef)(),D=Object(l.useState)(0),A=Object(c.a)(D,2),W=A[0],C=A[1],R=Object(l.useState)(0),K=Object(c.a)(R,2),B=K[0],L=K[1],U=Object(l.useRef)(0),T=Object(l.useRef)(0),M=Object(l.useMemo)((function(){return{"transform":W?"translateX(".concat(Object(p.a)(W),")"):"","transitionDuration":"".concat(B,"s")}}),[W,B]);return Object(l.useEffect)((function start(){!function reset(){U.current=0,T.current=0,C(0),L(0)}(),N.current&&clearTimeout(N.current),N.current=setTimeout(_asyncToGenerator(Object(o.a)().mark((function _callee(){return Object(o.a)().wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:if(I.current&&k.current&&m){e.next=2;break}return e.abrupt("return");case 2:Object(a.a)((function(){return Promise.all([Object(f.a)(I),Object(f.a)(k)]).then((function(e){var t=Object(c.a)(e,2),r=t[0].width,n=t[1].width;(m||n>r)&&Object(O.a)((function(){U.current=r,T.current=n,C(-n),L(n/+d)}))}))}));case 3:case"end":return e.stop()}}),_callee)}))),+u)}),[]),l.createElement(i.l,function notice_bar_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?notice_bar_ownKeys(Object(r),!0).forEach((function(t){notice_bar_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):notice_bar_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":s()(Object(b.a)("notice-bar"),Object(n.a)({},Object(b.a)("notice-bar--wordwrap"),y),t)},P),w,l.createElement(i.l,{"ref":I,"className":Object(b.a)("notice-bar__wrap")},l.createElement(i.l,{"ref":k,"style":M,"className":s()(Object(b.a)("notice-bar__content"),Object(n.a)({},Object(b.a)("ellipsis"),E)),"children":S,"onTransitionEnd":function onTransitionEnd(){C(U.current),L(0),Object(a.a)((function(){Object(O.a)((function(){C(-T.current),L((T.current+U.current)/+d)}))}))}})),x)};g.Icon=NoticeBarIcon,g.Action=NoticeBarAction;t.a=g},"183":function(e,t,r){"use strict";t.decode=t.parse=r(184),t.encode=t.stringify=r(185)},"184":function(e,t,r){"use strict";function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var c={};if("string"!=typeof e||0===e.length)return c;var i=/\+/g;e=e.split(t);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var s=0;s<u;++s){var l,b,f,p,O=e[s].replace(i,"%20"),j=O.indexOf(r);j>=0?(l=O.substr(0,j),b=O.substr(j+1)):(l=O,b=""),f=decodeURIComponent(l),p=decodeURIComponent(b),hasOwnProperty(c,f)?n(c[f])?c[f].push(p):c[f]=[c[f],p]:c[f]=p}return c};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"185":function(e,t,r){"use strict";var n=r(15).default,o=function stringifyPrimitive(e){switch(n(e)){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===n(e)?map(i(e),(function(n){var i=encodeURIComponent(o(n))+r;return c(e[n])?map(e[n],(function(e){return i+encodeURIComponent(o(e))})).join(t):i+encodeURIComponent(o(e[n]))})).join(t):a?encodeURIComponent(o(a))+r+encodeURIComponent(o(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function map(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},"218":function(e,t,r){"use strict";r(146),r(346)},"226":function(e,t,r){},"337":function(e,t,r){"use strict";r.d(t,"a",(function(){return createUseInfoHook}));var n=r(26),o=r(136),c=r(153);function createUseInfoHook(e,t){return function(){return n.a.useTaroRef(function safeExcute(){try{if(!c.c){var r,n=null==(r=e())||null==r.then?void 0:r.then((function(e){return e}),o.k);return Object(c.e)(n,"Promise")&&"then"in n?t:n||e()}return e()}catch(r){return Object(o.l)("[createUseInfoHook]: "+r.message+". "+String(e)),t}}()).current}}},"346":function(e,t,r){},"347":function(e,t,r){"use strict";r(146),r(348)},"348":function(e,t,r){},"351":function(e,t,r){"use strict";var n=r(2),o=r(133),c=r(135),i=r.n(c),a=r(10),u=r(134),s=["className","animated","striped","inactive","label","color","percent"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=function Progress(e){var t,r=e.className,c=e.animated,l=e.striped,b=e.inactive,f=e.label,p=e.color,O=void 0===p?"primary":p,j=e.percent,d=void 0===j?0:j,y=_objectWithoutProperties(e,s),v=Math.min(Math.max(0,d),100),g=Object(a.useMemo)((function(){return{"width":"".concat(v,"%")}}),[v]);return a.createElement(o.l,function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"className":i()(Object(u.a)("progress"),(t={},Object(n.a)(t,Object(u.a)("progress--inactive"),b),Object(n.a)(t,Object(u.a)("progress--striped"),!b&&l),Object(n.a)(t,Object(u.a)("progress--animated"),!b&&l&&c),Object(n.a)(t,Object(u.a)("progress--primary"),!b&&"primary"===O),Object(n.a)(t,Object(u.a)("progress--info"),!b&&"info"===O),Object(n.a)(t,Object(u.a)("progress--success"),!b&&"success"===O),Object(n.a)(t,Object(u.a)("progress--warning"),!b&&"warning"===O),Object(n.a)(t,Object(u.a)("progress--danger"),!b&&"danger"===O),t),r)},y),a.createElement(o.l,{"className":i()(Object(u.a)("progress__portion")),"style":g},function renderLabel(){return void 0===f?"".concat(v,"%"):f||void 0}()))};t.a=l},"358":function(e,t,r){"use strict";r(146),r(218),r(359)},"359":function(e,t,r){},"617":function(e,t,r){"use strict";r.r(t);r(347);var n,o=r(351),c=(r(167),r(155)),i=(r(358),r(258)),a=r(337),u={};null==navigator.getBattery||null==(n=navigator.getBattery())||null==n.then||n.then((function(e){u=e}));var s=Object(a.a)((function getBatteryInfoSync(){var e={"isCharging":!1,"level":"100"};if(navigator&&"getBattery"in navigator){var t=u,r=t.charging,n=void 0!==r&&r,o=t.level;e={"isCharging":n,"level":100*(void 0===o?1:o)+""}}return e}),{}),l=(r(10),r(150)),b=r(138);t.default=function(){var e=s();return Object(b.jsx)(l.a,{"children":Object(b.jsxs)(c.d.Group,{"clickable":!0,"children":[Object(b.jsx)(c.d,{"title":"充电与否","children":Object(b.jsx)(i.a,{"disabled":!0,"checked":e.isCharging})}),Object(b.jsx)(c.d,{"title":"电量","brief":Object(b.jsx)(o.a,{"percent":e.level}),"children":e.level})]})})}}}]);