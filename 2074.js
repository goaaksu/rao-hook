(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2074],{62074:function(t,n,o){"use strict";o.r(n),o.d(n,{taro_canvas_core:function(){return r}});var e=o(41674),i="taro-canvas-core{position:relative;display:block;width:300px;height:150px}",c=500,r=function(){function t(t){var n=this;(0,e.r)(this,t),this.onLongTap=(0,e.c)(this,"longtap",7),this.onTouchStart=function(){n.timer=setTimeout((function(){n.onLongTap.emit()}),c)},this.onTouchMove=function(){clearTimeout(n.timer)},this.onTouchEnd=function(){clearTimeout(n.timer)}}return t.prototype.render=function(){var t=this.canvasId;return(0,e.h)("canvas",{"canvas-id":t,style:{width:"100%",height:"100%"},onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd})},Object.defineProperty(t.prototype,"el",{get:function(){return(0,e.g)(this)},enumerable:!1,configurable:!0}),t}();r.style=i}}]);