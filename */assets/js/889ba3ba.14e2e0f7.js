"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5659],{2161:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});e(3262);var a=e(5318),o=e(2984),r=e(9018);function l(){return l=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},l.apply(this,arguments)}function s(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}const i={title:"useMap",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},p="useMap",u={unversionedId:"useMap/index",id:"useMap/index",title:"useMap",description:"\u5730\u56fe",source:"@site/../packages/hooks/src/useMap/index.md",sourceDirName:"useMap",slug:"/useMap/",permalink:"/taro-hooks/hooks/useMap/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useMap/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1667099602,formattedLastUpdatedAt:"2022\u5e7410\u670830\u65e5",frontMatter:{title:"useMap",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},sidebar:"hooks",previous:{title:"useImage",permalink:"/taro-hooks/hooks/useImage/"},next:{title:"useRecord",permalink:"/taro-hooks/hooks/useRecord/"}},c={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"<code>GetSuccessCallbackResult</code>",id:"getsuccesscallbackresult",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:m};function k(t){var{components:n}=t,e=s(t,["components"]);return(0,a.kt)("wrapper",l({},d,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"usemap"}),"useMap"),(0,a.kt)("p",null,"\u5730\u56fe"),(0,a.kt)("h2",l({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u64cd\u4f5c\u5730\u56fe\u76f8\u5173"),(0,a.kt)("h2",l({},{id:"api"}),"API"),(0,a.kt)("admonition",l({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"React"),"\u4e2d, ",(0,a.kt)("strong",{parentName:"p"},"mapContext"),"\u4e0d\u80fd\u4f5c\u4e3a\u65b9\u6cd5\u53ef\u7528\u7684\u6807\u51c6. \u7531\u4e8e",(0,a.kt)("strong",{parentName:"p"},"context"),"\u521b\u5efa\u7684\u5f02\u6b65\u6027. \u8bf7\u624b\u52a8\u83b7\u53d6\u6216\u8005\u589e\u52a0",(0,a.kt)("strong",{parentName:"p"},"delay"),"\u518d\u8c03\u7528\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"const [\n  mapContext,\n  {\n    get,\n    open,\n    include,\n    moveTo,\n    translate,\n    toggleMarkers,\n  },\n] = useMap(mapId, component?);\n")),(0,a.kt)("h2",l({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mapId"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"td"},"Map"),"\u7ec4\u4ef6 id"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"component"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u82e5\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u5e94\u7ec4\u4ef6\u5b9e\u4f8b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h2",l({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"mapContext"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5730\u56fe\u5b9e\u4f8b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"MapContext \\| undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"get"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u83b7\u53d6\u5f53\u524d\u5730\u56fe\u4e2d\u5fc3\u7684\u7ecf\u7eac\u5ea6\u3001\u8303\u56f4\u89c6\u91ce\u3001\u7f29\u653e\u7ea7\u522b\u3001\u65cb\u8f6c\u89d2\u3001\u503e\u659c\u89d2"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<string, GetSuccessCallbackResult>;"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"open"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u62c9\u8d77\u5730\u56fe APP \u9009\u62e9\u5bfc\u822a"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseAction<ExcludeOption<MapContext.OpenMapAppOption>>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"include"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u7f29\u653e\u89c6\u91ce\u5c55\u793a\u6240\u6709\u7ecf\u7eac\u5ea6"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseParamsAction<(points: MapContext.MapPosition[], padding?: number[]) => void>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"moveTo"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5c06\u5730\u56fe\u4e2d\u5fc3\u79fb\u7f6e\u5f53\u524d\u5b9a\u4f4d\u70b9"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<MapContext.MoveToLocationOption>>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"translate"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5e73\u79fb marker\uff0c\u5e26\u52a8\u753b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseAction<ExcludeOption<MapContext.TranslateMarkerOption>>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"toggleMarkers"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5c55\u793a/\u79fb\u9664 marker"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseParamsAction<(markers: Marker \\| number[], clear?: boolean) => void>"))))),(0,a.kt)("h3",l({},{id:"getsuccesscallbackresult"}),(0,a.kt)("inlineCode",{parentName:"h3"},"GetSuccessCallbackResult")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"export type GetSuccessCallbackResult = {\n  center: UnionResult<MapContext.GetCenterLocationSuccessCallbackResult>;\n  region: UnionResult<MapContext.GetRegionSuccessCallbackResult>;\n  rotate: UnionResult<MapContext.GetRotateSuccessCallbackResult>;\n  scale: UnionResult<MapContext.GetScaleSuccessCallbackResult>;\n  skew: UnionResult<MapContext.GetSkewSuccessCallbackResult>;\n};\n")),(0,a.kt)("h2",l({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"media/useMap/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/media/useMap/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/media/useMap/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <map\n      class="gap"\n      :id="mapId"\n      :show-location="true"\n      :show-scale="true"\n      :show-compass="true"\n      :latitude="mapInfo?.center?.latitude"\n      :longitude="mapInfo?.center?.longitude"\n      :markers="markers"\n    ></map>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleInclude()"\n      >\u5c55\u793a\u6307\u5b9a\u7ecf\u7eac</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="moveTo()"\n      >\u79fb\u81f3\u5f53\u524d\u5b9a\u4f4d</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleTranslate()"\n      >\u5e73\u79fbmarker</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="toggleMarkers([0])"\n      >\u79fb\u9664\u6240\u6709marker</nut-button\n    >\n    <nut-cell-group title="\u5730\u56fe\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, key) in mapInfo"\n        :key="key"\n        :title="key"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useTaroState, useTaroEffect } from \'@tarojs/taro\';\nimport { escapeState } from \'@taro-hooks/shared\';\nimport { useModal, useMap } from \'taro-hooks\';\n\nconst mapId = \'demo-map-id\';\nconst points = [\n  { latitude: 30.653186, longitude: 104.083735 },\n  { latitude: 30.655546, longitude: 104.0778 },\n];\nconst markers = [\n  {\n    id: 0,\n    title: \'\u592a\u53e4\u91ccmarker\',\n    iconPath: require(\'../../../assets/tabbar/NO.0001.png\'),\n    width: 50,\n    height: 50,\n    ...points[1],\n  },\n];\n\nconst translateInfo = {\n  autoRotate: true,\n  moveWithRotate: true,\n  markerId: 0,\n  rotate: 0,\n  destination: points[0],\n};\n\nconst [mapContext, { get, include, moveTo, translate, toggleMarkers }] =\n  useMap(mapId);\nconst [mapInfo, setMapInfo] = useTaroState({});\n\nconst handleGetInfo = async () => {\n  try {\n    const result = await get();\n    setMapInfo(result);\n  } catch (e) {\n    show({ content: \'\u83b7\u53d6\u4e2d\u5fc3\u4f4d\u7f6e\u5931\u8d25\' });\n  }\n};\n\nconst handleInclude = async () => {\n  try {\n    await include(points);\n    show({ content: \'\u8bbe\u7f6e\u7ecf\u7eac\u6210\u529f\' });\n  } catch (e) {\n    show({ content: \'\u8bbe\u7f6e\u7ecf\u7eac\u5931\u8d25\' });\n  }\n};\n\nconst handleTranslate = async () => {\n  try {\n    // may clear by user\n    await toggleMarkers(markers, true);\n    moveTo(points[0]);\n    await translate(translateInfo);\n    show({ content: \'\u5e73\u79fbmarker\u6210\u529f\' });\n  } catch (e) {\n    show({ content: \'\u5e73\u79fbmarker\u5931\u8d25\' });\n  }\n};\n\nuseTaroEffect(() => {\n  if (escapeState(mapContext)) {\n    handleGetInfo();\n    toggleMarkers(markers, true);\n  }\n}, [mapContext]);\n\nconst show = useModal({\n  title: \'useMap\',\n  showCancel: false,\n  mask: true,\n});\n<\/script>\n\n<style>\n#demo-map-id {\n  position: relative;\n  left: auto;\n  top: auto;\n  width: 100%;\n  height: 200px;\n}\n</style>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"media/useMap/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/media/useMap/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/media/useMap/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { Map } from '@tarojs/components';\nimport { useTaroState, useTaroEffect, useReady } from '@tarojs/taro';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useModal, useMap } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nimport Icon from '../../../assets/tabbar/NO.0001.png';\n\nimport './index.less';\n\nexport default () => {\n  const mapId = 'demo-map-id';\n  const points = [\n    { latitude: 30.653186, longitude: 104.083735 },\n    { latitude: 30.655546, longitude: 104.0778 },\n  ];\n  const markers = [\n    {\n      id: 0,\n      title: '\u592a\u53e4\u91ccmarker',\n      iconPath: Icon,\n      width: 50,\n      height: 50,\n      ...points[1],\n    },\n  ];\n\n  const translateInfo = {\n    autoRotate: true,\n    moveWithRotate: true,\n    markerId: 0,\n    rotate: 0,\n    destination: points[0],\n  };\n\n  const [mapContext, { get, include, moveTo, translate, toggleMarkers }] =\n    useMap(mapId);\n  const [mapInfo, setMapInfo] = useTaroState({});\n\n  const handleGetInfo = async () => {\n    try {\n      const result = await get();\n      console.log('result', result);\n      setMapInfo(result);\n      toggleMarkers(markers, true);\n    } catch (e) {\n      show({ content: '\u83b7\u53d6\u4e2d\u5fc3\u4f4d\u7f6e\u5931\u8d25' });\n    }\n  };\n\n  const handleInclude = async () => {\n    try {\n      await include(points);\n      show({ content: '\u8bbe\u7f6e\u7ecf\u7eac\u6210\u529f' });\n    } catch (e) {\n      show({ content: '\u8bbe\u7f6e\u7ecf\u7eac\u5931\u8d25' });\n    }\n  };\n\n  const handleTranslate = async () => {\n    try {\n      // may clear by user\n      await toggleMarkers(markers, true);\n      moveTo(points[0]);\n      await translate(translateInfo);\n      show({ content: '\u5e73\u79fbmarker\u6210\u529f' });\n    } catch (e) {\n      show({ content: '\u5e73\u79fbmarker\u5931\u8d25' });\n    }\n  };\n\n  const show = useModal({\n    title: 'useMap',\n    showCancel: false,\n    mask: true,\n  });\n\n  return (\n    <DemoContent>\n      <Map\n        id={mapId}\n        className=\"gap\"\n        showLocation\n        showCompass\n        showScale\n        markers={markers}\n        latitude={mapInfo?.center?.latitude}\n        longitude={mapInfo?.center?.longitude}\n      />\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleGetInfo()}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u4fe1\u606f\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleInclude()}\n        shape=\"square\"\n      >\n        \u5c55\u793a\u6307\u5b9a\u7ecf\u7eac\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => moveTo()}\n        shape=\"square\"\n      >\n        \u79fb\u81f3\u5f53\u524d\u5b9a\u4f4d\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleTranslate()}\n        shape=\"square\"\n      >\n        \u5e73\u79fbmarker\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => toggleMarkers([0])}\n        shape=\"square\"\n      >\n        \u79fb\u9664\u6240\u6709marker\n      </Button>\n      <Cell.Group title=\"\u5730\u56fe\u4fe1\u606f\">\n        {Object.entries(mapInfo ?? {}).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",l({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);