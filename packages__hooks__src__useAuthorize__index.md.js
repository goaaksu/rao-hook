(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2997],{27832:function(e,t,l){"use strict";l.r(t);var n=l(13378),a=l(3911),r=l(67294),c=l(77363);t["default"]=e=>{var t=e.hidden,l=(0,a.Z)(e,["hidden"]);return r.createElement(c.Z,(0,n.Z)({className:t?"__dumi_taro-hook-hidden":""},l))}},83408:function(e,t,l){"use strict";l.r(t);var n=l(67294),a=l(96089),r=l(27832),c=l(65704),m=l(67563),u=n.memo(m.default["pages-useauthorize"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"useauthorize"},n.createElement(a.AnchorLink,{to:"#useauthorize","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useAuthorize"),n.createElement("p",null,"\u76f4\u63a5\u8c03\u8d77\u7528\u6237\u6388\u6743\u4fe1\u606f\u3001\u83b7\u53d6\u7528\u6237\u6388\u6743\u4fe1\u606f"),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u5728\u4f7f\u7528\u67d0\u4e9b\u6743\u9650\u529f\u80fd\u524d\u8fdb\u884c\u6388\u6743\u6216\u6821\u9a8c\u65f6"),n.createElement("h2",{id:"api"},n.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"const [\n  { authSetting, subscriptionsSetting, miniprogramAuthSetting },\n  { openSetting, authorize },\n] = useAuthorize(option?);",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"withSubscriptions"),n.createElement("td",null,"\u662f\u5426\u540c\u65f6\u83b7\u53d6\u7528\u6237\u8ba2\u9605\u6d88\u606f\u7684\u8ba2\u9605\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e0d\u83b7\u53d6(\u6ce8\u610f: \u8be5 hook \u9ed8\u8ba4\u5b9e\u65f6\u83b7\u53d6\u6700\u65b0\u6388\u6743\u4fe1\u606f, \u521d\u59cb\u914d\u7f6e\u51b3\u5b9a\u6574\u4e2a\u5468\u671f\u4e2d\u83b7\u53d6\u914d\u7f6e\u884c\u4e3a)"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,n.createElement("code",null,"false"))))),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u8fd4\u56de\u503c"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"authSetting"),n.createElement("td",null,"\u7528\u6237\u6388\u6743\u7ed3\u679c"),n.createElement("td",null,n.createElement("code",null,"AuthSetting"))),n.createElement("tr",null,n.createElement("td",null,"subscriptionsSetting"),n.createElement("td",null,"\u7528\u6237\u8ba2\u9605\u6d88\u606f\u8bbe\u7f6e"),n.createElement("td",null,n.createElement("code",null,"ISubscriptionsSetting"))),n.createElement("tr",null,n.createElement("td",null,"miniprogramAuthSetting"),n.createElement("td",null,"\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\uff0c\u5f53\u524d\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\u6388\u6743\u7ed3\u679c"),n.createElement("td",null,n.createElement("code",null,"AuthSetting"))),n.createElement("tr",null,n.createElement("td",null,"openSetting"),n.createElement("td",null,"\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u754c\u9762"),n.createElement("td",null,n.createElement("code",null,"(withSubscriptions?: boolean) => Promise<IROpenSettingSuccessCallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"authorize"),n.createElement("td",null,"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42"),n.createElement("td",null,n.createElement("code",null,"(scope: keyof AuthSetting | keyof IAuthSettingForMiniProgram, miniprogram?: boolean) => Promise<General.CallbackResult>"))))),n.createElement("h3",{id:"isubscriptionssetting"},n.createElement(a.AnchorLink,{to:"#isubscriptionssetting","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"ISubscriptionsSetting"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"mainSwitch"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u8ba2\u9605\u6d88\u606f\u603b\u5f00\u5173")),n.createElement("tr",null,n.createElement("td",null,"itemSetting"),n.createElement("td",null,n.createElement("code",null,"{","[_: string]: 'accept' | 'reject' | 'ban';","}")),n.createElement("td",null,"\u6bcf\u4e00\u9879\u8ba2\u9605\u6d88\u606f\u7684\u8ba2\u9605\u72b6\u6001,\u5bf9\u8c61\u7684\u952e\u4e3a\u4e00\u6b21\u6027\u8ba2\u9605\u6d88\u606f\u7684\u6a21\u677f id \u6216\u7cfb\u7edf\u8ba2\u9605\u6d88\u606f\u7684\u7c7b\u578b\uff0c\u503c\u4e3a'accept'\u3001'reject'\u3001'ban'\u4e2d\u7684\u5176\u4e2d\u4e00\u79cd\u3002'accept'\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8fd9\u6761\u6d88\u606f\uff0c'reject'\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8fd9\u6761\u6d88\u606f\uff0c'ban'\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")))),n.createElement("h3",{id:"iauthsettingforminiprogram"},n.createElement(a.AnchorLink,{to:"#iauthsettingforminiprogram","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"IAuthSettingForMiniProgram"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"scope.record"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5f55\u97f3")),n.createElement("tr",null,n.createElement("td",null,"scope.writePhotosAlbum"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u4fdd\u5b58\u5230\u76f8\u518c")),n.createElement("tr",null,n.createElement("td",null,"scope.camera"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u6444\u50cf\u5934")))),n.createElement("h3",{id:"authsetting"},n.createElement(a.AnchorLink,{to:"#authsetting","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"AuthSetting"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"scope.userInfo"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u7528\u6237\u4fe1\u606f")),n.createElement("tr",null,n.createElement("td",null,"scope.userLocation"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5730\u7406\u4f4d\u7f6e")),n.createElement("tr",null,n.createElement("td",null,"scope.userLocationBackground"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u540e\u53f0\u5b9a\u4f4d")),n.createElement("tr",null,n.createElement("td",null,"scope.address"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u901a\u8baf\u5730\u5740\uff08\u5df2\u53d6\u6d88\u6388\u6743\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\uff09")),n.createElement("tr",null,n.createElement("td",null,"scope.invoiceTitle"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u53d1\u7968\u62ac\u5934\uff08\u5df2\u53d6\u6d88\u6388\u6743\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\uff09")),n.createElement("tr",null,n.createElement("td",null,"scope.invoice"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u83b7\u53d6\u53d1\u7968\uff08\u5df2\u53d6\u6d88\u6388\u6743\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5bf9\u5e94\u63a5\u53e3\uff09")),n.createElement("tr",null,n.createElement("td",null,"scope.werun"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570")),n.createElement("tr",null,n.createElement("td",null,"scope.record"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u5f55\u97f3\u529f\u80fd")),n.createElement("tr",null,n.createElement("td",null,"scope.writePhotosAlbum"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u4fdd\u5b58\u5230\u76f8\u518c")),n.createElement("tr",null,n.createElement("td",null,"scope.camera"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u6444\u50cf\u5934")))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(r.default,m.default["pages-useauthorize"].previewerProps,n.createElement(u,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"}),n.createElement("td",{align:"center"})))),n.createElement("h2",{id:"faq"},n.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"FAQ"),n.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),n.createElement("ul",null,n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.htmll"},"authorize")),n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html"},"openSetting")),n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html"},"getSetting")),n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8"},"scope")))))))}}]);