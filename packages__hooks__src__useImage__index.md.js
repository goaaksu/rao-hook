(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8981],{27832:function(e,t,l){"use strict";l.r(t);var n=l(13378),a=l(3911),c=l(67294),r=l(9790);t["default"]=e=>{var t=e.hidden,l=(0,a.Z)(e,["hidden"]);return c.createElement(r.Z,(0,n.Z)({className:t?"__dumi_taro-hook-hidden":""},l))}},66883:function(e,t,l){"use strict";l.r(t);var n=l(67294),a=l(96089),c=l(27832),r=l(65659),m=l(67563),i=n.memo(m.default["pages-useimage"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"useimage"},n.createElement(a.AnchorLink,{to:"#useimage","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useImage"),n.createElement("p",null,"\u56fe\u7247\u64cd\u4f5c, \u5982\u9884\u89c8\u3001\u83b7\u53d6\u3001\u538b\u7f29\u7b49."),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u5bf9\u56fe\u7247\u8fdb\u884c\u64cd\u4f5c\u65f6"),n.createElement("h2",{id:"api"},n.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(r.Z,{code:"const [\n  fileInfo,\n  { choose, chooseMessageFile, preview, save, getInfo, compress },\n] = useImage(initialOption);",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"initialOption"),n.createElement("td",null,"\u521d\u59cb\u62fe\u53d6\u56fe\u7247\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),n.createElement("td",null,n.createElement("code",null,"Partial<Pick<chooseImage.Option, 'count' | 'sizeType' | 'sourceType'>>")),n.createElement("td",null,"-")))),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u8fd4\u56de\u503c"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"choose"),n.createElement("td",null,"\u9009\u62e9\u56fe\u7247"),n.createElement("td",null,n.createElement("code",null,"(option?: ChooseImageOption) => Promise<chooseImage.SuccessCallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"chooseMessageFile"),n.createElement("td",null,"\u9009\u62e9\u4f1a\u8bdd\u8d44\u6e90"),n.createElement("td",null,n.createElement("code",null,"(count: number,type?: Pick<chooseMessageFile.Option, 'type'>,extend?: Pick<chooseMessageFileOption, 'extension'>) => Promise<chooseMessageFile.SuccessCallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"preview"),n.createElement("td",null,"\u9884\u89c8\u56fe\u7247"),n.createElement("td",null,n.createElement("code",null,"(option: PreviewImageOption) => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"save"),n.createElement("td",null,"\u4fdd\u5b58\u56fe\u7247(h5 \u652f\u6301)"),n.createElement("td",null,n.createElement("code",null,"(filePath: string) => Promise<General.CallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"getInfo"),n.createElement("td",null,"\u83b7\u53d6\u56fe\u7247\u8d44\u6e90\u8be6\u60c5"),n.createElement("td",null,n.createElement("code",null,"(src: string) => Promise<getImageInfo.SuccessCallbackResult>"))),n.createElement("tr",null,n.createElement("td",null,"compress"),n.createElement("td",null,"\u538b\u7f29\u56fe\u7247(h5 \u652f\u6301)"),n.createElement("td",null,n.createElement("code",null,"(src: string,quality?: number) => Promise<compressImage.SuccessCallbackResult>"))))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(c.default,m.default["pages-useimage"].previewerProps,n.createElement(i,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"},"\u2714\ufe0f"))))))))}}]);