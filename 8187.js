(self["webpackChunk"]=self["webpackChunk"]||[]).push([[8187],{68187:function(r,s,o){"use strict";o.r(s),o.d(s,{taro_progress_core:function(){return e}});var t=o(41674),e=function(){function r(r){(0,t.r)(this,r),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return r.prototype.render=function(){var r=this,s=r.percent,o=r.showInfo,e=r.borderRadius,i=r.fontSize,n=r.strokeWidth,a=r.activeColor,h=r.backgroundColor,u=r.active,c=s>100?100:s<0?0:s,d={height:n+"px",backgroundColor:h},p=u?"width 1s ease-in-out":"none",l={width:c+"%",transition:p,WebkitTransition:p,backgroundColor:a,borderRadius:e?e+"px":"0px"};return(0,t.h)(t.H,{class:"weui-progress"},(0,t.h)("div",{class:"weui-progress__bar",style:d},(0,t.h)("div",{class:"weui-progress__inner-bar",style:l})),o&&(0,t.h)("div",{class:"weui-progress__opr",style:{"font-size":i+"px"}},(0,t.h)("span",null,c,"%")))},r}()}}]);