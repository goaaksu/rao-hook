"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3206],{7190:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});n(7378);var a=n(5318),r=n(410),o=n(2948);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"Taro-hooks \u4ecb\u7ecd",sidebar_position:1},l=void 0,u={unversionedId:"intro",id:"intro",title:"Taro-hooks \u4ecb\u7ecd",description:"\u65b0\u7248\u672c\u7684Taro-hooks\u5168\u65b0\u5347\u7ea7. \u540c\u65f6\u652f\u6301 React/Vue . \u4ec5\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u63d2\u4ef6\u5373\u53ef\u8fdb\u884c\u5feb\u6377\u4f7f\u7528. \u89c1\u5b89\u88c5\u53ca\u4f7f\u7528",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/site/docs/intro",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/website/docs/intro.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665888816,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",sidebarPosition:1,frontMatter:{title:"Taro-hooks \u4ecb\u7ecd",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/site/docs/quick/install-start"}},c={},k=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u57fa\u7840\u7279\u6027\u9884\u89c8",id:"\u57fa\u7840\u7279\u6027\u9884\u89c8",level:3},{value:"\u6846\u67b6\u652f\u6301",id:"\u6846\u67b6\u652f\u6301",level:3},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2}],m={toc:k};function d(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",s({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",s({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"\u65b0\u7248\u672c\u7684",(0,a.kt)("strong",{parentName:"p"},"Taro-hooks"),"\u5168\u65b0\u5347\u7ea7. \u540c\u65f6\u652f\u6301 ",(0,a.kt)("strong",{parentName:"p"},"React/Vue")," . \u4ec5\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u63d2\u4ef6\u5373\u53ef\u8fdb\u884c\u5feb\u6377\u4f7f\u7528. \u89c1",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/quick/install-start"}),"\u5b89\u88c5\u53ca\u4f7f\u7528"))),(0,a.kt)("h2",s({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Taro-hooks")," - \u4e00\u6b3e\u5bf9\u6807 ",(0,a.kt)("strong",{parentName:"p"},"Taro API")," \u5f00\u53d1\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Hooks Library"),". \u8986\u76d6\u51e0\u4e4e\u6240\u6709 ",(0,a.kt)("strong",{parentName:"p"},"Taro API")," \u4ee5\u53ca\u65b9\u6cd5. \u5e76\u4e14\u7ed3\u5408 ",(0,a.kt)("strong",{parentName:"p"},"ahooks")," \u6269\u5c55\u4e86\u591a\u7aef\u5171\u7528\u7684 ",(0,a.kt)("strong",{parentName:"p"},"hooks")," \u5e93."),(0,a.kt)("p",null,"\u65b0\u7684\u7248\u672c\u8ddf\u968f ",(0,a.kt)("strong",{parentName:"p"},"Taro")," \u7684\u8bbe\u8ba1\u7406\u5ff5, \u8fdb\u884c\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"runtime + plugin")," \u5316. \u6700\u5927\u5316\u51cf\u5c11\u989d\u5916\u4f9d\u8d56\u7684\u52a0\u5165. \u53ea\u9700\u8981\u5f15\u5165\u5bf9\u5e94\u6846\u67b6\u7684\u63d2\u4ef6\u5373\u53ef\u5b8c\u7f8e\u4f7f\u7528\u672c\u5e93."),(0,a.kt)("h2",s({},{id:"\u7279\u6027"}),"\u7279\u6027"),(0,a.kt)("h3",s({},{id:"\u57fa\u7840\u7279\u6027\u9884\u89c8"}),"\u57fa\u7840\u7279\u6027\u9884\u89c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5168\u9762\u5339\u914d ",(0,a.kt)("strong",{parentName:"li"},"Taro API"),"."),(0,a.kt)("li",{parentName:"ul"},"\u7ed3\u5408 ",(0,a.kt)("strong",{parentName:"li"},"ahooks")," \u6269\u5c55\u5e38\u7528 ",(0,a.kt)("strong",{parentName:"li"},"hook")," (\u5176\u4e2d ",(0,a.kt)("strong",{parentName:"li"},"useRequest")," \u5df2\u88ab\u5355\u72ec\u62bd\u79bb. \u53ef\u72ec\u7acb\u5b89\u88c5\u4f7f\u7528)."),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"li"},"ts")," \u5f00\u53d1. \u66f4\u597d\u7684\u7c7b\u578b\u63d0\u793a"),(0,a.kt)("li",{parentName:"ul"},"\u6269\u5c55 ",(0,a.kt)("strong",{parentName:"li"},"h5")," \u90e8\u5206\u7f3a\u5931\u7684\u529f\u80fd (\u4f46\u4e0d\u4fdd\u8bc1\u517c\u5bb9\u5ea6)")),(0,a.kt)("h3",s({},{id:"\u6846\u67b6\u652f\u6301"}),"\u6846\u67b6\u652f\u6301"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"taro-hooks@next")," \u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"React/Vue")," \u5f00\u53d1\u4f53\u9a8c, \u5177\u4f53\u8bf7\u53c2\u8003:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/docs/quick/react-useage"}),"\u57fa\u7840\u6559\u7a0b \u2014\u2014\u2014\u2014 React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"/docs/quick/vue-useage"}),"\u57fa\u7840\u6559\u7a0b \u2014\u2014\u2014\u2014 Vue"))),(0,a.kt)(r.Z,{defaultValue:"React",groupId:"codeDisplayGroup",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"React",label:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"$ npm i @taro-hooks/plugin-react@canary\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'{3} title="project/config/index.js"',"{3}":!0,title:'"project/config/index.js"'}),"const config = {\n  // ....\n+ plugins: ['@taro-hooks/plugin-react'],\n  // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-tsx",metastring:'title="project/pages/index/index.tsx"',title:'"project/pages/index/index.tsx"'}),"import React from 'react';\nimport { View } from '@tarojs/components';\nimport { useEnv } from 'taro-hooks';\n\nexport default () => {\n  const env = useEnv();\n  return <View>{env}<View>\n}\n"))),(0,a.kt)(o.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"$ npm i @taro-hooks/plugin-vue@canary\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js",metastring:'{3} title="project/config/index.js"',"{3}":!0,title:'"project/config/index.js"'}),"const config = {\n  // ....\n+ plugins: ['@taro-hooks/plugin-vue'],\n  // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-html",metastring:'title="project/pages/index/index.vue"',title:'"project/pages/index/index.vue"'}),"<template>\n  <view class=\"index\">\n    <text>{{ env }}</text>\n  </view>\n</template>\n\n<script>\nimport { useEnv } from 'taro-hooks'\n\nexport default {\n  setup() {\n    const env = useEnv();\n    return {\n      env\n    }\n  },\n};\n<\/script>\n")))),(0,a.kt)("h2",s({},{id:"\u4f7f\u7528\u6848\u4f8b"}),"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"\u914d\u5957\u7684\u793a\u4f8b\u9879\u76ee\u548c\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Todo")," \u662f\u76ee\u524d\u4f5c\u8005\u63d0\u4f9b\u7684\u5b8c\u6574\u7ebf\u4e0a\u9879\u76ee."),(0,a.kt)("p",null,(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/taro-hooks/user-cases/blob/main/cases.json"}),"\u67e5\u770b\u66f4\u591a\u7684\u6848\u4f8b, \u8bf7\u70b9\u51fb")),(0,a.kt)("p",null,"\u82e5\u4f60\u7684\u9879\u76ee\u4e2d\u4e5f\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"taro-hooks")," . \u53ef\u70b9\u51fb",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/taro-hooks/user-cases"}),"\u63d0\u4ea4\u6307\u5357"),"\u8fdb\u884c\u63d0\u4ea4. \u63d0\u4ea4\u6210\u529f\u540e\u4f1a\u5728\u9996\u9875\u5c55\u793a."))}d.isMDXComponent=!0}}]);