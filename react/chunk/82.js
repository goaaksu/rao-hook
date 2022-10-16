(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"136":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return A})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return f})),t.d(n,"e",(function(){return isBoolean})),t.d(n,"f",(function(){return isFunction})),t.d(n,"g",(function(){return isNumber})),t.d(n,"h",(function(){return isObject})),t.d(n,"i",(function(){return isString})),t.d(n,"j",(function(){return isUndef})),t.d(n,"k",(function(){return c})),t.d(n,"l",(function(){return d})),t.d(n,"m",(function(){return strictOf}));var r,u=t(6);!function(e){e.WEAPP="WEAPP",e.WEB="WEB",e.RN="RN",e.SWAN="SWAN",e.ALIPAY="ALIPAY",e.TT="TT",e.QQ="QQ",e.JD="JD"}(r||(r={}));r.WEAPP,r.WEB,r.RN,r.SWAN,r.ALIPAY,r.TT,r.QQ,r.JD;var a="🎮[taro-hooks]",i="react",o="vue"===i,A="react"===i,s=("\n/**\n MIT License\n\n Copyright (c) ".concat((new Date).getFullYear()," innocces\n\n Power by TARO-HOOKS\n */\n"),"color: #8843e7; font-weight: bold;");function logCtor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];t.forEach((function(n){"string"==typeof n?console.debug("%c".concat(a,"---").concat(n),s+e):console.debug(a,"---",n)}))}}var c=logCtor(),d=logCtor("color: #d14; text-decoration: underline;");function isObject(e){return null!==e&&"object"===Object(u.a)(e)}function isFunction(e){return"function"==typeof e}function isString(e){return"string"==typeof e}function isBoolean(e){return"boolean"==typeof e}function isNumber(e){return"number"==typeof e}function isUndef(e){return void 0===e}function strictOf(e,n){return Object.prototype.toString.call(e)==="[object ".concat(function camelIndex(e){return isString(e)?e.replace(/^([a-z]{1})/,(function(e,n){var t;return n?null==n||null===(t=n.toUpperCase)||void 0===t?void 0:t.call(n):null})):e}(n),"]")}var f=function escapeState(e){return function isRef(e){return!(!e||!0!==e.__v_isRef)}(e)?e.value:e}},"153":function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"e",(function(){return i})),t.d(n,"b",(function(){return generateGeneralFail})),t.d(n,"a",(function(){return combineOptions})),t.d(n,"d",(function(){return stringfiyUrl}));var r=t(136),u=t(183);var a=!0,i=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return a||Object(r.l)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&Object(r.m)(n,"Object")){var a=t.includes("?");t+=(a?"&":"?")+Object(u.stringify)(n)}return t}},"179":function(e,n,t){"use strict";var r=t(136),u=t(153);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.a=function usePromise(e){return function(n){var t;if(!e)return Promise.reject(Object(u.b)(e,"please input a valid method name"));var a=null!=(t=null==e?void 0:e.name)?t:"usePromise::implementMethod";return new Promise((function(t,i){try{if(!Object(r.f)(e))throw new TypeError("["+a+"] not vaild for Taro");var o;null==(o=e(_extends({},n||{},{"success":t,"fail":i})))||null==o.catch||o.catch(i)}catch(e){i(Object(u.b)(a,e.message))}}))}}},"345":function(e,n,t){"use strict";var r=t(131),u=t(26),a=t(18);n.a=function usePage(e){var n=u.a.useTaroRef(Object(a.b)()),t=u.a.useTaroRef(function getPageInstance(){var n;return e&&"string"==typeof e?null==(n=Object(r.b)().page)||null==n.selectComponent?void 0:n.selectComponent(e):Object(r.b)()}());return[n.current.length,{"pageInstance":t.current,"pageStack":n.current}]}},"357":function(e,n,t){"use strict";var r=t(26),u=t(345);n.a=function useFrom(){var e=Object(u.a)(),n=e[0],t=e[1].pageStack;return r.a.useTaroRef(function generateFromInfo(){return n>1?t[n-2]:null}()).current}},"383":function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return generateIndexMenu}));var r,u,a=t(20),i=t(356),o=t(2),A=["id","name"],s=["useContext","useEffect","useReducer","useRef","useState"].map((function(e){return{"name":e.replace("use","useTaro"),"path":"/pages/".concat(e,"/index"),"id":e}}));!function(e){e.basic="basic",e.layout="layout",e.environment="environment",e.wechat="wechat",e.network="network",e.feedback="feedback",e.media="media",e.device="device"}(u||(u={}));var c=(r={},Object(o.a)(r,u.basic,[{"id":"useWebp","name":"useWebp 判断WebP是否可用"},{"id":"useApp","name":"useApp 应用实例"},{"id":"usePage","name":"usePage 页面(栈)"},{"id":"useEvent","name":"useEvent 事件中心"},{"id":"useRouter","name":"useRouter 路由"},{"id":"useFrom","name":"useFrom 路由来源"},{"id":"useArrayBuffer","name":"useArrayBuffer 转换"},{"id":"useClipboardData","name":"useClipboardData 剪贴板"},{"id":"useSystemInfo","name":"useSystemInfo 系统信息"},{"id":"useDeviceInfo","name":"useDeviceInfo 设备基础信息"},{"id":"useWindowInfo","name":"useWindowInfo 窗口信息"},{"id":"useVisible","name":"useVisible 页面状态"},{"id":"useSelectorQuery","name":"useSelectorQuery 节点查询"},{"id":"usePromise","name":"usePromise 异步"},{"id":"useStorage","name":"useStorage 数据缓存"}]),Object(o.a)(r,u.layout,[{"id":"useBackground","name":"useBackground 窗口设置"},{"id":"useManualPullDownRefresh","name":"useManualPullDownRefresh 手动下拉刷新"},{"id":"useTabBar","name":"useTabBar tab栏","tabBar":!0}]),Object(o.a)(r,u.feedback,[{"id":"useToast","name":"useToast 消息提示框"},{"id":"useModal","name":"useModal 模态对话框"},{"id":"useLoading","name":"useLoading 加载提示框"},{"id":"useActionSheet","name":"useActionSheet 操作菜单"},{"id":"useNavigationBar","name":"useNavigationBar 导航条"},{"id":"useAlertBeforeUnload","name":"useAlertBeforeUnload 小程序关闭","onlyMini":!0}]),Object(o.a)(r,u.environment,[{"id":"useEnv","name":"useEnv 获取当前环境值"}]),Object(o.a)(r,u.wechat,[{"id":"useAPICheck","name":"useAPICheck 判断是否可用","onlyMini":!0},{"id":"useUpdateManager","name":"useUpdateManager 更新","onlyMini":!0},{"id":"useLaunchOptions","name":"useLaunchOptions 启动参数","onlyMini":!0},{"id":"useEnterOptions","name":"useEnterOptions 启动参数","onlyMini":!0},{"id":"useUserInfo","name":"useUserInfo 用户信息","onlyMini":!0},{"id":"useAccountInfo","name":"useAccountInfo 账号信息","onlyMini":!0},{"id":"useAuthorize","name":"useAuthorize 用户授权","onlyMini":!0},{"id":"useRequestSubscribeMessage","name":"useRequestSubscribeMessage 订阅消息","onlyMini":!0},{"id":"useChooseAddress","name":"useChooseAddress 收货地址"},{"id":"useInvoice","name":"useInvoice 发票(抬头)","onlyMini":!0},{"id":"useWeRun","name":"useWeRun 微信运动","onlyMini":!0},{"id":"useTopBarText","name":"useTopBarText 置顶信息","onlyMini":!0},{"id":"useMenuButtonBoundingClientRect","name":"useMenuButtonBoundingClientRect 胶囊位置","onlyMini":!0}]),Object(o.a)(r,u.media,[{"id":"useImage","name":"useImage 图片"},{"id":"useVideo","name":"useVideo 视频"},{"id":"useAudio","name":"useRecord 录音"},{"id":"useAudio","name":"useAudio 音频"},{"id":"useCamera","name":"useCamera 相机"},{"id":"useMap","name":"useMap 地图"}]),Object(o.a)(r,u.device,[{"id":"useBattery","name":"useBattery 电量"},{"id":"useVibrate","name":"useVibrate 震动反馈"},{"id":"useMotion","name":"useMotion 设备方向"},{"id":"useBrightness","name":"useBrightness 屏幕亮度"},{"id":"useLocation","name":"useLocation 地理位置"},{"id":"useScanCode","name":"useScanCode 扫码"},{"id":"useBluetooth","name":"useBluetooth 蓝牙"}]),Object(o.a)(r,u.network,[{"id":"useRequest","name":"useRequest 请求"},{"id":"useNetworkType","name":"useNetworkType 网络类型"},{"id":"useOnline","name":"useOnline 网络状态"},{"id":"useFile","name":"useFile 上传下载"}]),r),d={"wifi":"wifi","2g":"2g","3g":"3g","4g":"4g","5g":"5g","unknown":"unknown","none":"none"},f=[{"groupName":"基础","tip":"包含事件、调试等","menu":generateMenuItem(u.basic)},{"groupName":"布局","tip":"包含tab、背景等","menu":generateMenuItem(u.layout)},{"groupName":"操作反馈","tip":"包含Toast, Modal等","menu":generateMenuItem(u.feedback)},{"groupName":"网络","tip":"包含请求、下载等","menu":generateMenuItem(u.network)},{"groupName":"媒体","tip":"包含图片、音频等","menu":generateMenuItem(u.media)},{"groupName":"设备","tip":"包含地理位置、电量等","menu":generateMenuItem(u.device)},{"groupName":"小程序","tip":"包含管理器、API等","menu":generateMenuItem(u.wechat)},{"groupName":"环境","tip":"包含环境判断等","menu":generateMenuItem(u.environment)}];function generateMenuItem(e){return c[e].map((function(n){var t=n.id,r=n.name,u=Object(i.a)(n,A);return Object(a.a)({"id":t,"name":r,"path":"/pages/".concat(e,"/").concat(t,"/index")},u)}))}function generateIndexMenu(e){return e?[{"groupName":"CompositionAPI","tip":"Vue Hooks","menu":s}].concat(f):f}},"384":function(e,n,t){"use strict";var r=t(26),u=t(18),a=t(511),i=t(357),o=t(179),A=t(153),s=["params"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.a=function useRouter(){var e=r.a.useTaroRef(r.a.useRouter()),n=Object(i.a)(),t=Object(o.a)(u.e),c=Object(o.a)(a.c),d=Object(o.a)(a.d),f=Object(o.a)(u.h),b=Object(o.a)(u.f),l=Object(o.a)(u.g),m=Object(o.a)(u.d),v=Object(o.a)(a.b),p=Object(o.a)(a.a);return[_extends({},e.current,{"from":n}),{"navigate":function navigate(e,n,r,u){if(r){var a=n.params,i=void 0===a?{}:a,o=function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(n,s),f=_extends({"path":Object(A.d)(e,i)},o);return u?d(f):c(f)}var b=Object(A.d)(e,n);return t({"url":b})},"switchTab":function switchTab(e){return f({"url":e})},"relaunch":function relaunch(e,n){var t=Object(A.d)(e,n);return b({"url":t})},"redirect":function redirect(e,n){var t=Object(A.d)(e,n);return l({"url":t})},"back":function back(e,n){return n?v({"extraData":e||{}}):m({"delta":e||1})},"exit":p}]}},"509":function(e,n){e.exports="data:image/png;base64,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"},"538":function(e,n,t){"use strict";t.r(n);t(416);var r=t(534),u=(t(167),t(155)),a=(t(343),t(350)),i=(t(504),t(533)),o=t(384),A=t(17),s=(t(10),t(26)),c=t(133),d=t(383),f=t(509),b=t.n(f),l=t(138);n.default=function Index(){var e=s.a.useTaroState(),n=Object(A.a)(e,2),t=n[0],f=n[1],m=Object(o.a)(),v=Object(A.a)(m,2)[1],p=v.navigate,g=v.switchTab;return Object(l.jsxs)(c.l,{"className":"index","children":[Object(l.jsx)(a.a,{"align":"center","justify":"center","children":Object(l.jsx)(i.a,{"content":"beta:Serro","position":"bottom-right","style":{"--badge-background-color":"var(--primary-color)"},"children":Object(l.jsx)(c.e,{"className":"demo-index-icon","src":b.a,"mode":"widthFix"})})}),Object(l.jsx)(r.a,{"accordion":!0,"value":t,"onChange":f,"children":Object(d.b)().map((function(e){var n=e.groupName,t=e.menu,a=e.tip;return Object(l.jsx)(r.a.Item,{"title":n,"extra":a,"children":t.map((function(e){var n=e.name,t=e.path,r=e.onlyMini;return Object(l.jsx)(u.d,{"title":n,"clickable":!0,"onClick":function onClick(){return function handleNavigate(e){var n=e.path,t=e.name,r=e.onlyMini,u=void 0!==r&&r;(n.includes("TabBar")?g:p)(n,{"title":t,"onlyMini":Number(u)})}({"name":n,"path":t,"onlyMini":r})}},n)}))},n)}))})]})}}}]);