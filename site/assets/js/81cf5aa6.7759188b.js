"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2533],{3294:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return k},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});n(3262);var a=n(5318),r=n(2984),l=n(9018);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"useBackground",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},k="useBackground",p={unversionedId:"useBackground/index",id:"useBackground/index",title:"useBackground",description:"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3",source:"@site/../packages/hooks/src/useBackground/index.md",sourceDirName:"useBackground",slug:"/useBackground/",permalink:"/site/hooks/useBackground/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useBackground/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665888816,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",frontMatter:{title:"useBackground",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},sidebar:"hooks",previous:{title:"\u5e03\u5c40",permalink:"/site/hooks/category/layout"},next:{title:"useManualPullDownRefresh",permalink:"/site/hooks/useManualPullDownRefresh/"}},d={},s=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"TextStyle",id:"textstyle",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"BackgroundColorOption",id:"backgroundcoloroption",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:s};function c(t){var{components:e}=t,n=u(t,["components"]);return(0,a.kt)("wrapper",o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",o({},{id:"usebackground"}),"useBackground"),(0,a.kt)("p",null,"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3"),(0,a.kt)("h2",o({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5bf9\u7a97\u53e3\u80cc\u666f\u8272\u548c\u5b57\u4f53\u8bbe\u7f6e\u65f6"),(0,a.kt)("h2",o({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const [setBackgroundColor, setBackgroundTextColor] = useBackground(option?);\n")),(0,a.kt)("h2",o({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"textStyle"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u4e0b\u62c9\u80cc\u666f\u5b57\u4f53\u3001loading \u56fe\u7684\u6837\u5f0f"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TTextStyle")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",o({},{id:"textstyle"}),"TextStyle"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"dark"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"dark")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"dark \u6837\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"light"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"light")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"light \u6837\u5f0f")))),(0,a.kt)("h2",o({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"setBackgroundColor"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(setOption?: BackgroundColorOption) => Promise<General.CallbackResult>")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u52a8\u6001\u8bbe\u7f6e\u4e0b\u62c9\u80cc\u666f\u5b57\u4f53\u3001loading \u56fe\u7684\u6837\u5f0f ( ",(0,a.kt)("inlineCode",{parentName:"td"},"RN\u4ec5iOS")," )")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"setBackgroundTextColor"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(textStyle: TextStyle) => Promise<General.CallbackResult>")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3\u7684\u80cc\u666f\u8272( ",(0,a.kt)("inlineCode",{parentName:"td"},"RN\u4ec5Android")," )")))),(0,a.kt)("h3",o({},{id:"backgroundcoloroption"}),"BackgroundColorOption"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h2",o({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(l.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"layout/useManualPullDownRefresh/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/layout/useManualPullDownRefresh/index.vue",url:"https://next-version-taro-hooks.vercel.app/taro-hooks/vue/pages/layout/useManualPullDownRefresh/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="start()"\n      >\u5f00\u59cb\u4e0b\u62c9\u5237\u65b0</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="stop()"\n      >\u7ed3\u675f\u4e0b\u62c9\u5237\u65b0</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="start(2000)"\n      >\u5f00\u59cb\u4e0b\u62c9\u5237\u65b02S\u540e\u505c\u6b62</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useManualPullDownRefresh, useBackground } from \'taro-hooks\';\nimport Mock from \'mockjs\';\n\nuseBackground({ textStyle: \'dark\', backgroundColor: Mock.Random.color() });\n\nconst [start, stop] = useManualPullDownRefresh();\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"layout/useManualPullDownRefresh/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/layout/useManualPullDownRefresh/index.tsx",url:"https://next-version-taro-hooks.vercel.app/taro-hooks/react/pages/layout/useManualPullDownRefresh/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useManualPullDownRefresh, useBackground } from \'taro-hooks\';\nimport Mock from \'mockjs\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const [start, stop] = useManualPullDownRefresh();\n  useBackground({ textStyle: \'dark\', backgroundColor: Mock.Random.color() });\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start()}\n        shape="square"\n      >\n        \u5f00\u59cb\u4e0b\u62c9\u5237\u65b0\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={stop}\n        shape="square"\n      >\n        \u7ed3\u675f\u4e0b\u62c9\u5237\u65b0\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start(2000)}\n        shape="square"\n      >\n        \u5f00\u59cb\u4e0b\u62c9\u5237\u65b02S\u540e\u505c\u6b62\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",o({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",o({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",o({parentName:"tr"},{align:"center"})),(0,a.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);