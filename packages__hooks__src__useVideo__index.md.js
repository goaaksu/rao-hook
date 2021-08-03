(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5706],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),a=n(4649),r=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function s(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,r.useCopy)(),d=o(m,2),s=d[0],E=d[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(a.ZP,c({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:a},u&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return s(t)}}),r.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},33007:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(63263),o=n(41941),i=l.memo(o.default["pages-usevideo"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"usevideo"},l.createElement(a.AnchorLink,{to:"#usevideo","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useVideo"),l.createElement("p",null,"\u89c6\u9891\u64cd\u4f5c, \u5982\u4fdd\u5b58\u3001\u9009\u62e9\u7b49."),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u5bf9\u89c6\u9891\u8fdb\u884c\u64cd\u4f5c\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [videoContext, { choose, save, create }] = useVideo(initialOption?);",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u53c2\u6570"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"),l.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"initialOption"),l.createElement("td",null,"\u521d\u59cb\u9009\u62e9\u89c6\u9891\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),l.createElement("td",null,l.createElement("code",null,"Pick<chooseVideo.Option, 'camera' | 'sourceType' | 'maxDuration'>")),l.createElement("td",null,"-")))),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"videoContext"),l.createElement("td",null,"video \u4e0a\u4e0b\u6587"),l.createElement("td",null,l.createElement("code",null,"VideoContext | undefined"))),l.createElement("tr",null,l.createElement("td",null,"choose"),l.createElement("td",null,"\u9009\u62e9\u89c6\u9891"),l.createElement("td",null,l.createElement("code",null,"(option?: IOptions) => Promise<chooseVideo\u3002SuccessCallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"save"),l.createElement("td",null,"\u4fdd\u5b58\u89c6\u9891"),l.createElement("td",null,l.createElement("code",null,"(filePath: string,) => Promise<General.CallbackResult>"))),l.createElement("tr",null,l.createElement("td",null,"create"),l.createElement("td",null,"\u521b\u5efa Video \u4e0a\u4e0b\u6587"),l.createElement("td",null,l.createElement("code",null,"(id: string, component?: Record<string, any>,) => IVideoContext"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,o.default["pages-usevideo"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}),l.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))}}]);