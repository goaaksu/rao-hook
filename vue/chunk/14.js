(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"187":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return generateGeneralFail})),n.d(t,"a",(function(){return combineOptions})),n.d(t,"d",(function(){return stringfiyUrl}));var r=n(19),o=n(189);var c=!0,a=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return c||Object(r.m)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&Object(r.n)(t,"Object")){var c=n.includes("?");n+=(c?"&":"?")+Object(o.stringify)(t)}return n}},"188":function(e,t,n){"use strict";var r=n(19),o=n(187);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function usePromise(e){return function(t){var n;if(!e)return Promise.reject(Object(o.b)(e,"please input a valid method name"));var c=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,a){try{if(!Object(r.g)(e))throw new TypeError("["+c+"] not vaild for Taro");var i;null==(i=e(_extends({},t||{},{"success":n,"fail":a})))||null==i.catch||i.catch(a)}catch(e){a(Object(o.b)(c,e.message))}}))}}},"189":function(e,t,n){"use strict";t.decode=t.parse=n(190),t.encode=t.stringify=n(191)},"190":function(e,t,n){"use strict";function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var c={};if("string"!=typeof e||0===e.length)return c;var a=/\+/g;e=e.split(t);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var u=e.length;i>0&&u>i&&(u=i);for(var s=0;s<u;++s){var l,f,p,b,d=e[s].replace(a,"%20"),O=d.indexOf(n);O>=0?(l=d.substr(0,O),f=d.substr(O+1)):(l=d,f=""),p=decodeURIComponent(l),b=decodeURIComponent(f),hasOwnProperty(c,p)?r(c[p])?c[p].push(b):c[p]=[c[p],b]:c[p]=b}return c};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},"191":function(e,t,n){"use strict";var r=n(22).default,o=function stringifyPrimitive(e){switch(r(e)){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===r(e)?map(a(e),(function(r){var a=encodeURIComponent(o(r))+n;return c(e[r])?map(e[r],(function(e){return a+encodeURIComponent(o(e))})).join(t):a+encodeURIComponent(o(e[r]))})).join(t):i?encodeURIComponent(o(i))+n+encodeURIComponent(o(e)):""};var c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function map(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"192":function(e,t,n){"use strict";var r=n(8),o=n(333),c=n(188),a=n(187);t.a=function useModal(e){var t=r.a.useTaroRef(e);r.a.useTaroEffect((function(){t.current=e}),[e]);var n=Object(c.a)(o.g);return function show(e){if(!e&&!t.current)return Promise.reject(Object(a.b)("showModal","please provide a option"));var r=Object(a.a)(t.current,e);return n(r)}}},"206":function(e,t,n){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return _objectWithoutProperties}))},"266":function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(12),c=n(8),a=n(20),i=n(206),u=n(62),s=n(16),l=["latitude","longitude"];function createLocationChooser(e){var t,n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LOCATION_APIKEY,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=c.latitude,f=c.longitude,p=Object(i.a)(c,l),b=Object(a.a)({"key":o,"type":1,"coord":(null!==(t=c.coord)&&void 0!==t?t:[s,f].every((function(e){return Number(e)>=0})))?"".concat(s,",").concat(f):void 0,"referer":"myapp"},p),d="\n<div class='taro_choose_location'>\n  <div class='taro_choose_location_bar'>\n    <div class='taro_choose_location_back'></div>\n    <p class='taro_choose_location_title'>位置</p>\n    <button class='taro_choose_location_submit'>完成</button>\n  </div>\n  <iframe class='taro_choose_location_frame' frameborder='0' src=\"https://apis.map.qq.com/tools/locpicker?".concat(Object(u.stringify)(b,{"arrayFormat":"comma","skipNull":!0}),'" />\n</div>\n'),O=document.createElement("div");O.innerHTML=d;var h=O.querySelector(".taro_choose_location");function show(){setTimeout((function(){h.style.top="0"}))}function hide(){h.style.top="100%"}function back(){hide(),e({"errMsg":"cancel"})}function submit(){hide(),e()}function remove(){O.remove(),window.removeEventListener("popstate",back)}return null===(n=O.querySelector(".taro_choose_location_back"))||void 0===n||n.addEventListener("click",back),null===(r=O.querySelector(".taro_choose_location_submit"))||void 0===r||r.addEventListener("click",submit),window.addEventListener("popstate",back),{"show":show,"remove":remove,"container":O}}var f=function chooseLocation(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,r=e.complete,o=e.mapOpts,c=LOCATION_APIKEY,a=new s.b({"name":"chooseLocation","success":t,"fail":n,"complete":r});return new Promise((function(e,t){var n={};if(!c)return console.warn("chooseLocation api 依赖腾讯地图定位api，需要在 defineConstants 中配置 LOCATION_APIKEY"),a.fail({"errMsg":"LOCATION_APIKEY needed"},t);var r=function onMessage(e){var t=e.data;t&&"locationPicker"===t.module&&(n.name=t.poiname,n.address=t.poiaddress,n.latitude=t.latlng.lat,n.longitude=t.latlng.lng)},i=createLocationChooser((function(o){return window.removeEventListener("message",r,!1),setTimeout((function(){i.remove()}),300),o?a.fail(o,t):n.latitude&&n.longitude?a.success(n,e):a.fail({},t)}),c,o);document.body.appendChild(i.container),window.addEventListener("message",r,!1),i.show()}))},p=n(11),b=Object(p.h)("stopLocationUpdate"),d=Object(p.h)("startLocationUpdateBackground"),O=Object(p.h)("startLocationUpdate"),h=Object(p.e)({"name":"openLocation","defaultOptions":{"scale":18}}),v=(Object(p.h)("onLocationChangeError"),Object(p.h)("onLocationChange"),Object(p.h)("offLocationChangeError"),Object(p.h)("offLocationChange"),Object(p.h)("choosePoi")),j=(Object(p.h)("getFuzzyLocation"),n(188)),g=n(19),m=n(187);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y={};function canIUseLocation(){return navigator&&"geolocation"in navigator}function mapCoordsToPoints(e){var t,n,r,o;return{"latitude":e.latitude,"longitude":e.longitude,"speed":null!=(t=e.speed)?t:0,"accuracy":e.accuracy,"altitude":null!=(n=e.altitude)?n:0,"verticalAccuracy":null!=(r=e.altitudeAccuracy)?r:0,"horizontalAccuracy":null!=(o=e.altitudeAccuracy)?o:0}}var w=function getLocation(e){var t=e.success,n=e.fail,r=(e.altitude,e.highAccuracyExpireTime),o=void 0===r?3e3:r,c=e.isHighAccuracy,a=void 0!==c&&c;e.type;if(!canIUseLocation()){var i=Object(m.b)("getLocation","not support in u browser");return null==n||n(i),Promise.reject(i)}return new Promise((function(e,r){navigator.geolocation.getCurrentPosition((function(n){var r=_extends({},mapCoordsToPoints(n.coords),{"errMsg":"getLocation: success"});null==t||t(r),e(r)}),(function(e){var t=Object(m.b)("getLocation",e.message);null==n||n(t),r(t)}),{"enableHighAccuracy":a,"timeout":o})}))};function useLocation_extends(){return(useLocation_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=function useLocation(e){var t=c.a.useTaroState(),n=t[0],r=t[1],o=Object(j.a)(w),a=function get(t){return o(useLocation_extends({},null!=e?e:{},null!=t?t:{})).then((function(e){return r(e),e}))},i=Object(j.a)(f),u=Object(j.a)(v),s=Object(j.a)(h),l=Object(j.a)(O),p=Object(j.a)(d),_=Object(j.a)(b);return c.a.useTaroEffect((function(){a()}),[]),[n,{"get":a,"choose":i,"choosePOI":u,"open":s,"toggleUpdate":function toggleUpdate(e,t){return e?t?p():l():_()},"on":function on(e,t){t&&function onLocationChangeError(e){if(!canIUseLocation())throw new Error(Object(m.b)("onLocationChangeError","not support in u browser").errMsg);var t=navigator.geolocation.watchPosition((function(){}),(function(t){var n=t.code;null==e||e({"errCode":n})}));y[t]=e}(e),function onLocationChange(e){if(!canIUseLocation())throw new Error(Object(m.b)("onLocationChange","not support in u browser").errMsg);var t=navigator.geolocation.watchPosition((function(t){var n=t.coords;null==e||e(mapCoordsToPoints(n))}),(function(e){throw new Error(e.message)}));y[t]=e}(e)},"off":function off(e,t){t&&function offLocationChangeError(e){var t,n=null==(t=Object.entries(y).find((function(t){return t[1]===e})))?void 0:t[0];if(!canIUseLocation()||Object(g.k)(n))throw null==e||e({"errCode":0}),new Error(Object(m.b)("offLocationChange","not support in u browser").errMsg);try{navigator.geolocation.clearWatch(Number(n))}catch(t){null==e||e({"errCode":0})}}(e),function offLocationChange(e){var t,n=null==(t=Object.entries(y).find((function(t){return t[1]===e})))?void 0:t[0];if(!canIUseLocation()||Object(g.k)(n))throw new Error(Object(m.b)("offLocationChange","not support in u browser").errMsg);navigator.geolocation.clearWatch(Number(n))}(e)}}]},C=n(192),L=n(15),k=n(0),x=Object(k.createTextVNode)("获取当前位置"),P=Object(k.createTextVNode)("选择地理位置"),T=Object(k.createTextVNode)("选择POI位置"),E=Object(k.createTextVNode)("查看位置"),I=Object(k.createTextVNode)("切换前台接受地理"),A=Object(k.createTextVNode)("切换监听地理位置");const N=Object(k.defineComponent)({"name":"index","setup":function setup(e){var t=c.a.useTaroState({}),n=Object(L.a)(t,2),a=n[0],i=n[1],u=c.a.useTaroRef(!1),s=c.a.useTaroRef(!1),l=Object(C.a)({"title":"useLocation","mask":!0,"showCancel":!1}),f=_({"isHighAccuracy":!0,"altitude":!0,"type":"gcj02"}),p=Object(L.a)(f,2),b=p[0],d=p[1],O=d.get,h=d.choose,v=d.choosePOI,j=d.open,m=d.toggleUpdate,y=d.on,w=d.off;c.a.useTaroEffect((function(){i(Object(g.e)(b))}),[b]);var N=function(){var e=Object(o.a)(Object(r.a)().mark((function _callee(){var e;return Object(r.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h();case 3:e=t.sent,i(e),l({"content":JSON.stringify(e)}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l({"content":"获取位置失败"});case 11:case"end":return t.stop()}}),_callee,null,[[0,8]])})));return function handleChoose(){return e.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(Object(r.a)().mark((function _callee2(){var e;return Object(r.a)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v();case 3:e=t.sent,l({"content":JSON.stringify(e)}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l({"content":"获取POI失败"});case 10:case"end":return t.stop()}}),_callee2,null,[[0,7]])})));return function handleChoosePOI(){return e.apply(this,arguments)}}(),M=function(){var e=Object(o.a)(Object(r.a)().mark((function _callee3(){return Object(r.a)().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(!u.current);case 3:l({"content":(u.current?"关闭":"打开")+"前台接收成功"}),u.current=!u.current,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({"content":(u.current?"关闭":"打开")+"前台接收失败"});case 10:case"end":return e.stop()}}),_callee3,null,[[0,7]])})));return function handleToggle(){return e.apply(this,arguments)}}(),V=function listener(e){i(e)},S=function(){var e=Object(o.a)(Object(r.a)().mark((function _callee4(){var e;return Object(r.a)().wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=s.current?w:y,t.next=4,e(V);case 4:l({"content":(s.current?"关闭":"打开")+"监听成功"}),s.current=!s.current,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l({"content":(s.current?"关闭":"打开")+"监听失败"});case 11:case"end":return t.stop()}}),_callee4,null,[[0,8]])})));return function handleToggleListener(){return e.apply(this,arguments)}}();return function(e,t){var n=Object(k.resolveComponent)("nut-cell"),r=Object(k.resolveComponent)("nut-cell-group"),o=Object(k.resolveComponent)("nut-button"),c=Object(k.resolveComponent)("demo-content");return Object(k.openBlock)(),Object(k.createBlock)(c,null,{"default":Object(k.withCtx)((function(){return[Object(k.createVNode)(r,{"title":"位置信息"},{"default":Object(k.withCtx)((function(){return[(Object(k.openBlock)(!0),Object(k.createElementBlock)(k.Fragment,null,Object(k.renderList)(Object(k.unref)(a),(function(t,r){return Object(k.openBlock)(),Object(k.createBlock)(n,{"key":r,"title":r,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[0]||(t[0]=function(e){return Object(k.unref)(O)()})},{"default":Object(k.withCtx)((function(){return[x]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[1]||(t[1]=function(e){return N()})},{"default":Object(k.withCtx)((function(){return[P]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[2]||(t[2]=function(e){return U()})},{"default":Object(k.withCtx)((function(){return[T]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[3]||(t[3]=function(e){return function handleOpen(){j({"latitude":Object(g.e)(a).latitude,"longitude":Object(g.e)(a).longitude})}()})},{"default":Object(k.withCtx)((function(){return[E]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[4]||(t[4]=function(e){return M()})},{"default":Object(k.withCtx)((function(){return[I]})),"_":1}),Object(k.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[5]||(t[5]=function(e){return S()})},{"default":Object(k.withCtx)((function(){return[A]})),"_":1})]})),"_":1})}}});t.default=N}}]);