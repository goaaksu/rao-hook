(self["webpackChunk"]=self["webpackChunk"]||[]).push([[7145],{27832:function(e,t,l){"use strict";l.r(t);var n=l(13378),a=l(3911),r=l(67294),c=l(9790);t["default"]=e=>{var t=e.hidden,l=(0,a.Z)(e,["hidden"]);return r.createElement(c.Z,(0,n.Z)({className:t?"__dumi_taro-hook-hidden":""},l))}},37208:function(e,t,l){"use strict";l.r(t);var n=l(67294),a=l(96089),r=l(27832),c=l(65659),m=l(67563),u=n.memo(m.default["pages-useuserinfo"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"useuserinfo"},n.createElement(a.AnchorLink,{to:"#useuserinfo","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useUserInfo"),n.createElement("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5c55\u793a\u65f6"),n.createElement("h2",{id:"api"},n.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"const [userInfo, { getUserInfo, getUserProfile }] = useUserInfo();",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("p",null,"\u65e0"),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"userInfo"),n.createElement("td",null,n.createElement("code",null,"UserInfo")),n.createElement("td",null,"\u7528\u6237\u4fe1\u606f\u5bf9\u8c61")),n.createElement("tr",null,n.createElement("td",null,"getUserProfile"),n.createElement("td",null,n.createElement("code",null,"(option?: IOption) => Promise<IUserInfo | General.CallbackResult>")),n.createElement("td",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(\u70b9\u51fb\u751f\u6548, \u4e14\u6bcf\u6b21\u5f39\u7a97)")),n.createElement("tr",null,n.createElement("td",null,"getUserInfo"),n.createElement("td",null,n.createElement("code",null,"(option: IProfileOption) => Promise<IUserInfo | General.CallbackResult>")),n.createElement("td",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f")))),n.createElement("h3",{id:"ioption"},n.createElement(a.AnchorLink,{to:"#ioption","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"IOption"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"lang"),n.createElement("td",null,n.createElement("code",null,"Language")),n.createElement("td",null,"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00")),n.createElement("tr",null,n.createElement("td",null,"withCredentials"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u662f\u5426\u5e26\u4e0a\u767b\u5f55\u6001\u4fe1\u606f\u3002\u5f53 withCredentials \u4e3a true \u65f6\uff0c\u8981\u6c42\u6b64\u524d\u6709\u8c03\u7528\u8fc7 wx.login \u4e14\u767b\u5f55\u6001\u5c1a\u672a\u8fc7\u671f\uff0c\u6b64\u65f6\u8fd4\u56de\u7684\u6570\u636e\u4f1a\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f\uff1b\u5f53 withCredentials \u4e3a false \u65f6\uff0c\u4e0d\u8981\u6c42\u6709\u767b\u5f55\u6001\uff0c\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f")))),n.createElement("h3",{id:"iprofileoption"},n.createElement(a.AnchorLink,{to:"#iprofileoption","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"IProfileOption"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"lang"),n.createElement("td",null,n.createElement("code",null,"Language")),n.createElement("td",null,"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00")),n.createElement("tr",null,n.createElement("td",null,"desc"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u58f0\u660e\u83b7\u53d6\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\u540e\u7684\u7528\u9014\uff0c\u4e0d\u8d85\u8fc7 30 \u4e2a\u5b57\u7b26")))),n.createElement("h3",{id:"userinfo"},n.createElement(a.AnchorLink,{to:"#userinfo","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"UserInfo"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"avatarUrl"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u7528\u6237\u5934\u50cf\u56fe\u7247\u7684 URL\u3002URL \u6700\u540e\u4e00\u4e2a\u6570\u503c\u4ee3\u8868\u6b63\u65b9\u5f62\u5934\u50cf\u5927\u5c0f\uff08\u6709 0\u300146\u300164\u300196\u3001132 \u6570\u503c\u53ef\u9009\uff0c0 \u4ee3\u8868 640x640 \u7684\u6b63\u65b9\u5f62\u5934\u50cf\uff0c46 \u8868\u793a 46x46 \u7684\u6b63\u65b9\u5f62\u5934\u50cf\uff0c\u5269\u4f59\u6570\u503c\u4ee5\u6b64\u7c7b\u63a8\u3002\u9ed8\u8ba4 132\uff09\uff0c\u7528\u6237\u6ca1\u6709\u5934\u50cf\u65f6\u8be5\u9879\u4e3a\u7a7a\u3002\u82e5\u7528\u6237\u66f4\u6362\u5934\u50cf\uff0c\u539f\u6709\u5934\u50cf URL \u5c06\u5931\u6548\u3002")),n.createElement("tr",null,n.createElement("td",null,"city"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u7528\u6237\u6240\u5728\u57ce\u5e02")),n.createElement("tr",null,n.createElement("td",null,"country"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u7528\u6237\u6240\u5728\u56fd\u5bb6")),n.createElement("tr",null,n.createElement("td",null,"gender"),n.createElement("td",null,n.createElement("code",null,"0 | 1 | 2")),n.createElement("td",null,"\u7528\u6237\u6027\u522b")),n.createElement("tr",null,n.createElement("td",null,"language"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u663e\u793a country\uff0cprovince\uff0ccity \u6240\u7528\u7684\u8bed\u8a00")),n.createElement("tr",null,n.createElement("td",null,"nickName"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u7528\u6237\u6635\u79f0")),n.createElement("tr",null,n.createElement("td",null,"province"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u7528\u6237\u6240\u5728\u7701\u4efd")),n.createElement("tr",null,n.createElement("td",null,"rawData"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),n.createElement("tr",null,n.createElement("td",null,"signature"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u4f7f\u7528 sha1( rawData + sessionkey ) \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f")),n.createElement("tr",null,n.createElement("td",null,"encryptedData"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e")),n.createElement("tr",null,n.createElement("td",null,"iv"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf")),n.createElement("tr",null,n.createElement("td",null,"cloudID"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID")))),n.createElement("h3",{id:"gender"},n.createElement(a.AnchorLink,{to:"#gender","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Gender"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"0"),n.createElement("td",null,"\u672a\u77e5")),n.createElement("tr",null,n.createElement("td",null,"1"),n.createElement("td",null,"\u7537\u6027")),n.createElement("tr",null,n.createElement("td",null,"2"),n.createElement("td",null,"\u5973\u6027")))),n.createElement("h3",{id:"language"},n.createElement(a.AnchorLink,{to:"#language","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Language"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"en"),n.createElement("td",null,"\u82f1\u6587")),n.createElement("tr",null,n.createElement("td",null,"zh_CN"),n.createElement("td",null,"\u7b80\u4f53\u4e2d\u6587")),n.createElement("tr",null,n.createElement("td",null,"zh_TW"),n.createElement("td",null,"\u7e41\u4f53\u4e2d\u6587")))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(r.default,m.default["pages-useuserinfo"].previewerProps,n.createElement(u,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"}),n.createElement("td",{align:"center"})))),n.createElement("h2",{id:"faq"},n.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"FAQ"),n.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),n.createElement("ul",null,n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"getUserInfo")),n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html"},"getUserProfile")),n.createElement("li",null,n.createElement(a.Link,{to:"https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801"},"\u8c03\u6574\u8bf4\u660e")))))))}}]);