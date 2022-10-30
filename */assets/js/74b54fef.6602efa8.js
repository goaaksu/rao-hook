"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[4735],{2605:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});n(3262);var a=n(5318),r=n(2984),o=n(9018);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"useRouter",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},s="useRouter",p={unversionedId:"useRouter/index",id:"useRouter/index",title:"useRouter",description:"\u8def\u7531\u76f8\u5173, \u6269\u5145 Taro useRouter , \u5e76\u878d\u5408\u8df3\u8f6c\u5c0f\u7a0b\u5e8f api",source:"@site/../packages/hooks/src/useRouter/index.md",sourceDirName:"useRouter",slug:"/useRouter/",permalink:"/taro-hooks/hooks/useRouter/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRouter/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1667099602,formattedLastUpdatedAt:"2022\u5e7410\u670830\u65e5",frontMatter:{title:"useRouter",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"usePromise",permalink:"/taro-hooks/hooks/usePromise/"},next:{title:"useSelectorQuery",permalink:"/taro-hooks/hooks/useSelectorQuery/"}},c={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"<code>Route</code>",id:"route",level:3},{value:"<code>RouteNavigate</code>",id:"routenavigate",level:3},{value:"<code>SwitchTab</code>",id:"switchtab",level:3},{value:"<code>Back</code>",id:"back",level:3},{value:"<code>Exit</code>",id:"exit",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:k};function m(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",i({},{id:"userouter"}),"useRouter"),(0,a.kt)("p",null,"\u8def\u7531\u76f8\u5173, \u6269\u5145 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro useRouter")," , \u5e76\u878d\u5408\u8df3\u8f6c\u5c0f\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"api")),(0,a.kt)("h2",i({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u8def\u7531\uff0c\u6216\u8005\u8fdb\u884c\u8def\u7531\u4ee5\u53ca\u5c0f\u7a0b\u5e8f\u8df3\u8f6c\u64cd\u4f5c\u65f6"),(0,a.kt)("h2",i({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"const [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =\n  useRouter<R>();\n")),(0,a.kt)("h2",i({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",i({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"routerInfo"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762\u8def\u7531\u4fe1\u606f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Route<R>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"navigate"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u6253\u5f00\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RouteNavigate<R>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"switchTab"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f02\u6b65\u8df3\u8f6c tabBar \u9875\u9762"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"SwitchTab"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"relaunch"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RouteNavigate<R>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"redirect"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f02\u6b65\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762\u6216\u8df3\u8f6c\u81f3\u5c0f\u7a0b\u5e8f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RouteNavigate<R>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"back"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8fd4\u56de\u4e0a\u4e00\u9875\u9762\u6216\u591a\u7ea7\u9875\u9762\u6216\u8fd4\u56de\u5c0f\u7a0b\u5e8f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Back"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"exit"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5f02\u6b65\u5173\u95ed\u5c0f\u7a0b\u5e8f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Exit"))))),(0,a.kt)("h3",i({},{id:"route"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Route")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type Route<R extends Partial<RecordData>> = RouterInfo<R> & {\n  from: ReturnType<typeof useFrom>;\n};\n")),(0,a.kt)("h3",i({},{id:"routenavigate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"RouteNavigate")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type RouteNavigate<R> = PromiseParamsAction<RouteOption<R>>;\n")),(0,a.kt)("h3",i({},{id:"switchtab"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SwitchTab")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type SwitchTab = PromiseAction<string>;\n")),(0,a.kt)("h3",i({},{id:"back"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Back")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type Back = PromiseParamsAction<RouteBackOption>;\n")),(0,a.kt)("h3",i({},{id:"exit"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Exit")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"type Exit = PromiseWithoutOptionAction;\n")),(0,a.kt)("h2",i({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"basic/useRouter/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useRouter/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useRouter/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell\n      title="\u6765\u6e90\u9875\u9762"\n      :sub-title="$filters.stringify(routerInfo?.from?.route)"\n    ></nut-cell>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="switchTab(\'pages/about/index\')"\n      >\u8df3\u8f6cTabBar</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="relaunch(\'/pages/network/useRequest/index\')"\n    >\n      \u91cd\u65b0\u6253\u5f00\u4e00\u4e2a\u9875\u9762</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="redirect(\'/pages/network/useOnline/index\')"\n    >\n      \u91cd\u5b9a\u5411\u9875\u9762</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="\n        navigate(\'/pages/wechat/useLaunchOptions/index\', { from: \'useRouter\' })\n      "\n    >\n      \u8df3\u8f6c\u9875\u9762</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="back()">\n      \u8fd4\u56de\u4e0a\u4e00\u9875</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="\n        navigate(\n          \'/pages/index/index\',\n          { appId: \'wxce815e33b0e06cf5\', extraData: { from: \'taro-hooks\' } },\n          true,\n        )\n      "\n    >\n      \u8df3\u8f6c\u5c0f\u7a0b\u5e8f</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="\n        navigate(\n          \'/pages/index/index\',\n          { appId: \'wxce815e33b0e06cf5\', extraData: { from: \'taro-hooks\' } },\n          true,\n          true,\n        )\n      "\n    >\n      \u534a\u5c4f\u6253\u5f00\u5c0f\u7a0b\u5e8f</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="back({}, true)"\n    >\n      \u8fd4\u56de\u5c0f\u7a0b\u5e8f</nut-button\n    >\n    <nut-button shape="square" type="primary" class="gap" block @click="exit()">\n      \u9000\u51fa\u5c0f\u7a0b\u5e8f</nut-button\n    >\n    <nut-cell\n      title="\u5f53\u524d\u9875\u9762"\n      :sub-title="$filters.stringify(routerInfo)"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useRouter } from \'taro-hooks\';\n\nconst [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =\n  useRouter();\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"basic/useRouter/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useRouter/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useRouter/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useRouter } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button, Cell } from \'@taroify/core\';\n\nexport default () => {\n  const [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =\n    useRouter();\n\n  return (\n    <DemoContent>\n      <Cell\n        title="\u6765\u6e90\u9875\u9762"\n        brief={JSON.stringify(routerInfo?.from?.route)}\n      ></Cell>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => switchTab(\'pages/about/index\')}\n        shape="square"\n      >\n        \u8df3\u8f6cTabBar\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => relaunch(\'/pages/network/useRequest/index\')}\n        shape="square"\n      >\n        \u91cd\u65b0\u6253\u5f00\u4e00\u4e2a\u9875\u9762\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => redirect(\'/pages/network/useOnline/index\')}\n        shape="square"\n      >\n        \u91cd\u5b9a\u5411\u9875\u9762\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() =>\n          navigate(\'/pages/wechat/useLaunchOptions/index\', {\n            from: \'useRouter\',\n          })\n        }\n        shape="square"\n      >\n        \u8df3\u8f6c\u9875\u9762\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => back()}\n        shape="square"\n      >\n        \u8fd4\u56de\u4e0a\u4e00\u9875\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() =>\n          navigate(\n            \'/pages/index/index\',\n            { appId: \'wxce815e33b0e06cf5\', extraData: { from: \'taro-hooks\' } },\n            true,\n          )\n        }\n        shape="square"\n      >\n        \u8df3\u8f6c\u5c0f\u7a0b\u5e8f\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() =>\n          navigate(\n            \'/pages/index/index\',\n            { appId: \'wxce815e33b0e06cf5\', extraData: { from: \'taro-hooks\' } },\n            true,\n            true,\n          )\n        }\n        shape="square"\n      >\n        \u534a\u5c4f\u6253\u5f00\u5c0f\u7a0b\u5e8f\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => back({}, true)}\n        shape="square"\n      >\n        \u8fd4\u56de\u5c0f\u7a0b\u5e8f\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => exit()}\n        shape="square"\n      >\n        \u9000\u51fa\u5c0f\u7a0b\u5e8f\n      </Button>\n      <Cell title="\u5f53\u524d\u9875\u9762" brief={JSON.stringify(routerInfo)}></Cell>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",i({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);