(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{"295":function(e,t,n){"use strict";n.r(t);var r=n(0);var o=n(3),c=n(195),u=n(15),a=n(12),s=n(8),i=n(19),l=function userSchool(e){switch(e){case"1":return"Tsinghua University";case"2":return"Beijing University";case"3":return"Zhejiang University";default:return""}};function _getUserSchool(){return(_getUserSchool=Object(a.a)(Object(o.a)().mark((function _callee(e){return Object(o.a)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(l(e))}),1e3)})));case 1:case"end":return t.stop()}}),_callee)})))).apply(this,arguments)}var b={"setup":function setup(){var e=s.a.useTaroState("1"),t=Object(u.a)(e,2),n=t[0],r=t[1],o=s.a.useTaroState(!1),a=Object(u.a)(o,2),l=a[0],b=a[1];return{"request":Object(c.a)((function(){return function getUserSchool(e){return _getUserSchool.apply(this,arguments)}(Object(i.e)(n))}),{"refreshDeps":[n]}),"userId":n,"open":l,"handleChoose":function handleChoose(e){r(e.value),b(!1)},"menuItems":[{"value":"1","name":"user 1"},{"value":"2","name":"user 2"},{"value":"3","name":"user 3"}],"setOpen":b}}},p=n(40);const d=n.n(p)()(b,[["render",function render(e,t,n,o,c,u){var a=Object(r.resolveComponent)("taro-view"),s=Object(r.resolveComponent)("nut-button"),i=Object(r.resolveComponent)("nut-row"),l=Object(r.resolveComponent)("nut-actionsheet"),b=Object(r.resolveComponent)("demo-content");return Object(r.openBlock)(),Object(r.createBlock)(b,{"title":"依赖刷新"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(a,null,{"default":Object(r.withCtx)((function(){return[Object(r.createTextVNode)("School: "+Object(r.toDisplayString)(o.request.loading?"Loading...":o.request.data),1)]})),"_":1}),Object(r.createVNode)(i,{"justify":"center"},{"default":Object(r.withCtx)((function(){return[Object(r.createVNode)(s,{"loading":o.request.loading,"size":"small","type":"primary","shape":"square","block":"","onClick":t[0]||(t[0]=function(e){return o.setOpen(!0)})},{"default":Object(r.withCtx)((function(){return[Object(r.createTextVNode)(" userId: "+Object(r.toDisplayString)(o.userId)+"(click me!) ",1)]})),"_":1},8,["loading"])]})),"_":1}),Object(r.createVNode)(l,{"visible":o.open,"onUpdate:visible":t[1]||(t[1]=function(e){return o.open=e}),"menu-items":o.menuItems,"onChoose":t[2]||(t[2]=function(e){return o.handleChoose(e)})},null,8,["visible","menu-items"])]})),"_":1})}]]);t.default=d}}]);