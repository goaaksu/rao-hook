(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"202":function(e,t,c){"use strict";var r=c(8);t.a=function useToggle(e,t){void 0===e&&(e=!1);var c=r.a.useTaroState(e),n=c[0],o=c[1];return[n,r.a.useTaroMemo((function(){var c=void 0===t?!e:t;return{"toggle":function toggle(){return o((function(t){return t===e?c:e}))},"set":function set(e){return o(e)},"setLeft":function setLeft(){return o(e)},"setRight":function setRight(){return o(c)}}}),[])]}},"268":function(e,t,c){"use strict";c.r(t);var r=c(0),n=Object(r.createTextVNode)(" show / hidden "),o=Object(r.createTextVNode)(" clear Article2 and Article3 "),a=Object(r.createTextVNode)(" clear all "),i=Object(r.createTextVNode)("Loading...");var u=c(3),l=c(207).a,b=c(195),j=c(15),s=c(12),O=c(333),d=c(202),f=c(19),p=c(194),g=c.n(p);function getArticle(){return _getArticle.apply(this,arguments)}function _getArticle(){return(_getArticle=Object(s.a)(Object(u.a)().mark((function _callee(){return Object(u.a)().wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return console.log("cacheKey-share"),e.abrupt("return",new Promise((function(e){setTimeout((function(){e({"data":g.a.mock("@paragraph()"),"time":(new Date).getTime()})}),3e3)})));case 2:case"end":return e.stop()}}),_callee)})))).apply(this,arguments)}var h={"setup":function setup(){var e=Object(d.a)(!1),t=Object(j.a)(e,2),c=t[0],r=t[1],n=["Article1","Article2","Article3"],o=Object(b.a)(getArticle,{"cacheKey":n[0]}),a=Object(b.a)(getArticle,{"cacheKey":n[1]}),i=Object(b.a)(getArticle,{"cacheKey":n[2]});return{"state":c,"request1":o,"request2":a,"request3":i,"cacheKeyList":n,"clear":function clear(e){l(e);var t=Array.isArray(e)?e.join("、"):e;Object(O.h)({"title":"Clear ".concat(null!=t?t:"All"," finished"),"icon":"success","mask":!0})},"toggle":function toggle(){Object(f.e)(c)||(Object(f.e)(o).run(),Object(f.e)(a).run(),Object(f.e)(i).run()),Object(f.e)(r).toggle()}}}},k=c(40);const m=c.n(k)()(h,[["render",function render(e,t,c,u,l,b){var j=Object(r.resolveComponent)("nut-button"),s=Object(r.resolveComponent)("nut-row"),O=Object(r.resolveComponent)("taro-view"),d=Object(r.resolveComponent)("taro-block"),f=Object(r.resolveComponent)("demo-content");return Object(r.openBlock)(),Object(r.createBlock)(d,null,{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(f,{"title":"缓存 & SWR - 删除缓存"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(s,{"justify":"center"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(j,{"size":"small","type":"primary","shape":"square","block":"","onClick":t[0]||(t[0]=function(e){return u.toggle()})},{"default":Object(r.withCtx)((function(){return[n]})),"_":1})]})),"_":1}),(Object(r.openBlock)(!0),Object(r.createElementBlock)(r.Fragment,null,Object(r.renderList)(u.cacheKeyList,(function(e){return Object(r.openBlock)(),Object(r.createBlock)(s,{"justify":"center","key":e},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(j,{"size":"small","type":"primary","shape":"square","block":"","onClick":function onClick(t){return u.clear(e)}},{"default":Object(r.withCtx)((function(){return[Object(r.createTextVNode)(" clear "+Object(r.toDisplayString)(e),1)]})),"_":2},1032,["onClick"])]})),"_":2},1024)})),128)),Object(r.createVNode)(s,{"justify":"center"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(j,{"size":"small","type":"primary","shape":"square","block":"","onClick":t[1]||(t[1]=function(e){return u.clear(["Article2","Article3"])})},{"default":Object(r.withCtx)((function(){return[o]})),"_":1})]})),"_":1}),Object(r.createVNode)(s,{"justify":"center"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(j,{"size":"small","type":"primary","shape":"square","block":"","onClick":t[2]||(t[2]=function(e){return u.clear()})},{"default":Object(r.withCtx)((function(){return[a]})),"_":1})]})),"_":1}),(Object(r.openBlock)(!0),Object(r.createElementBlock)(r.Fragment,null,Object(r.renderList)([u.request1,u.request2,u.request3],(function(e,t){return Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,{"key":t},[Object(r.createVNode)(O,null,{"default":Object(r.withCtx)((function(){return[Object(r.createTextVNode)("Article "+Object(r.toDisplayString)(t+1),1)]})),"_":2},1024),Object(r.withDirectives)(Object(r.createVNode)(d,null,{"default":Object(r.withCtx)((function(){return[!e.data&&e.loading?(Object(r.openBlock)(),Object(r.createBlock)(O,{"key":0},{"default":Object(r.withCtx)((function(){return[i]})),"_":1})):(Object(r.openBlock)(),Object(r.createElementBlock)(r.Fragment,{"key":1},[Object(r.createVNode)(O,null,{"default":Object(r.withCtx)((function(){return[Object(r.createTextVNode)(" Background loading: "+Object(r.toDisplayString)(e.loading?"true":"false"),1)]})),"_":2},1024),Object(r.createVNode)(O,null,{"default":Object(r.withCtx)((function(){var t;return[Object(r.createTextVNode)("Latest request time: "+Object(r.toDisplayString)(null===(t=e.data)||void 0===t?void 0:t.time),1)]})),"_":2},1024),Object(r.createVNode)(O,null,{"default":Object(r.withCtx)((function(){var t;return[Object(r.createTextVNode)(Object(r.toDisplayString)(null===(t=e.data)||void 0===t?void 0:t.data),1)]})),"_":2},1024)],64))]})),"_":2},1536),[[r.vShow,u.state]])],64)})),128))]})),"_":1})]})),"_":1})}]]);t.default=m}}]);