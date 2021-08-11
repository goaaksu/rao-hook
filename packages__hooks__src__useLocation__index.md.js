(self["webpackChunk"]=self["webpackChunk"]||[]).push([[920],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),a=n(4649),c=n(96089);n(36081);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,c=[],r=!0,o=!1;try{for(n=n.call(e);!(r=(l=n.next()).done);r=!0)if(c.push(l.value),t&&c.length===t)break}catch(i){o=!0,a=i}finally{try{r||null==n["return"]||n["return"]()}finally{if(o)throw a}}return c}}function s(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,c.useCopy)(),d=o(m,2),s=d[0],E=d[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(a.ZP,r({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,c=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:a},u&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return s(t)}}),c.map((function(e,t){return l.createElement("div",r({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},26208:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),c=n(27832),r=n(63263),o=n(99142),i=l.memo(o.default["pages-uselocation"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"uselocation"},l.createElement(a.AnchorLink,{to:"#uselocation","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useLocation"),l.createElement("p",null,"\u5730\u7406\u4f4d\u7f6e"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u4f7f\u7528\u5730\u7406\u4f4d\u7f6e\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(r.Z,{code:"const [\n  location,\n  {\n    getLocation,\n    chooseLocation,\n    openLocation,\n    onLocationChange,\n    offLocationChange,\n    startLocationUpdate,\n    startLocationUpdateBackground,\n    stopLocationUpdate,\n  },\n] = useLocation(options?);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"\u83b7\u53d6\u5730\u7406\u4fe1\u606f\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),l.createElement("td",null,l.createElement("code",null,"IPositionOption & ","{"," altitude?: boolean ","}")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"location"),l.createElement("td",null,"\u6839\u636e\u521d\u59cb\u5316\u914d\u7f6e\u83b7\u53d6\u7684\u5730\u7406\u4fe1\u606f"),l.createElement("td",null,l.createElement("code",null,"getLocation.SuccessCallbackResult | IGeolocationCoordinates | undefined"))),l.createElement("tr",null,l.createElement("td",null,"getLocation"),l.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u7684\u5730\u7406\u4f4d\u7f6e\u3001\u901f\u5ea6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(getLocationOption?: IGetLocationOption) => Promise<General.CallbackResult |ILocation>"))),l.createElement("tr",null,l.createElement("td",null,"chooseLocation"),l.createElement("td",null,"\u6253\u5f00\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e"),l.createElement("td",null,l.createElement("code",null,"(chooseLocationOption?: Pick<chooseLocation.Option, 'latitude' | 'longitude'>) => Promise<chooseLocation.SuccessCallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"openLocation"),l.createElement("td",null,"\u4f7f\u7528\u5fae\u4fe1\u5185\u7f6e\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e"),l.createElement("td",null,l.createElement("code",null,"(openLocationOption: Pick<openLocation.Option,'address' | 'latitude' | 'longitude' | 'name' | 'scale'>) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"onLocationChange"),l.createElement("td",null,"\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(callback: INormalCallback | onLocationChange.Callback) => void"))),l.createElement("tr",null,l.createElement("td",null,"offLocationChange"),l.createElement("td",null,"\u53d6\u6d88\u76d1\u542c\u5b9e\u65f6\u5730\u7406\u4f4d\u7f6e\u53d8\u5316\u4e8b\u4ef6(h5 \u652f\u6301)"),l.createElement("td",null,l.createElement("code",null,"(callback: INormalCallback | onLocationChange.Callback) => void"))),l.createElement("tr",null,l.createElement("td",null,"startLocationUpdate"),l.createElement("td",null,"\u5f00\u542f\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u524d\u53f0\u65f6\u63a5\u6536\u4f4d\u7f6e\u6d88\u606f"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"startLocationUpdateBackground"),l.createElement("td",null,"\u5f00\u542f\u5c0f\u7a0b\u5e8f\u8fdb\u5165\u524d\u540e\u53f0\u65f6\u5747\u63a5\u6536\u4f4d\u7f6e\u6d88\u606f"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"stopLocationUpdate"),l.createElement("td",null,"\u5173\u95ed\u76d1\u542c\u5b9e\u65f6\u4f4d\u7f6e\u53d8\u5316"),l.createElement("td",null,l.createElement("code",null,"() => Promise<General.CallbackResult>"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(c.default,o.default["pages-uselocation"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}))))))))}}]);