(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3237],{4459:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return J}});var n=a(7378),c=a(8944),r=a(3474),l=a(183),s=a.n(l),o=a(7534),m=a(4530),i=a(2250);const u=new(a(6757).vd)({baseUrl:(E="api.github.com","//"+E)});var E;const d={taroHooksDemo:{name:"\u793a\u4f8b\u5c0f\u7a0b\u5e8f",description:"taro-hooks \u914d\u5957\u793a\u4f8b\u5c0f\u7a0b\u5e8f",url:"https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044960619-hooks.jpeg",framework:"react",taroVersion:"3.3.40",screenshot:"https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-05-04/1651597045121-taro-hooks-demo.PNG"},todoList:{name:"\u7cbe\u5de7\u5f85\u529e\u4e8b\u9879",description:"\u4e00\u4e2a\u7b80\u5355\u7684todoList",url:"https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-09-27/1632746107141-qrcode.jpg",framework:"react",taroVersion:"3.3.40",screenshot:"https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-05-04/1651597045124-todo-list.PNG"}};var h="cases_eCtz",p="casesLeft_Mdsf",f="casesLeftInner_mou3",g="casesLeftInnerQr_by4W",N="casesRight_SQWF",v="casesFrame_VMkf",_="casesSwiperItem_kErr",b="active_l5nS",k="casesButton_sdxS",w="casesButtonRight_D5sD";function Z(){const e=(0,n.useRef)(),[t,a]=(0,n.useState)({}),[r,l]=(0,n.useState)(),s=(0,n.useMemo)((()=>!!Object.keys(t).length),[t]);(0,n.useEffect)((()=>{o()}),[]),(0,n.useEffect)((()=>{s&&l(Object.values(t)[0])}),[t,s]);const o=(0,n.useCallback)((async()=>{const e=await u.rest.repos.getContent({mediaType:{format:"raw"},owner:"taro-hooks",repo:"user-cases",path:"cases.json"}).then((({data:e=""})=>JSON.parse(e))).catch((e=>(console.error(e),d)));a(e)}),[]),m=(0,n.useCallback)((a=>{const n=e.current.realIndex,c=Object.values(t).length;let r=n+1===c?0:n+1;a&&(r=n-1==-1?c-1:n-1),console.log(r),e.current.slideToLoop(r)}),[t]);return n.createElement("div",{className:(0,c.Z)("row","row--align-center","general-content",h)},n.createElement("div",{className:(0,c.Z)("col","col--4",p)},r&&n.createElement("div",{className:f},n.createElement("h2",null,r.name),n.createElement("p",null,r.description),n.createElement("div",{className:(0,c.Z)("iconfont icon-miniprogram",g)},n.createElement("img",{src:r.url,alt:r.name})),n.createElement("button",{onClick:()=>m(!0),className:k},"prev"),n.createElement("button",{onClick:()=>m(),className:(0,c.Z)(k,w)},"next"))),n.createElement("div",{className:v}),s&&n.createElement("div",{className:(0,c.Z)("col","col--8",N)},n.createElement(i.tq,{slidesPerView:3,onSwiper:t=>e.current=t,onSlideChange:e=>l(Object.values(t)[e.realIndex])},Object.values(t).map((({name:e,screenshot:t,description:a},r)=>n.createElement(i.o5,{className:_,key:e+r},(({isActive:e})=>n.createElement("img",{className:(0,c.Z)({[b]:e}),src:t,alt:a}))))))))}var y="title_mKZO",C="titleCn_u9AL",F="titleEn_g3ns";function S({cn:e,en:t}){return n.createElement("div",{className:(0,c.Z)("text--center",y)},n.createElement("h3",{className:C},e),n.createElement("p",{className:F},t))}var j="intro_JnhP",M="introLeft_wOiU";function B(){return n.createElement("section",{className:(0,c.Z)("general-content",j)},n.createElement("div",{className:(0,c.Z)(M)},n.createElement("h3",{className:"general-title"},"\u4e0d\u9650\u6846\u67b6"),n.createElement("p",null,"\u540c\u65f6\u652f\u6301",n.createElement("code",null,"React"),"\u548c",n.createElement("code",null,"Vue"))))}var I=a(9866),D="feature__0rr",O="featureWrapper_i19i",L="featureTitle_hGIm",x="featureMask_g5NH",R="featureButton_BKQb";const V=["\u6846\u67b6\u5468\u8fb9","\u6846\u67b6\u7279\u6027"];function G(){const{siteConfig:{customFields:{features:e=[]}}}=(0,r.Z)(),{withBaseUrl:t}=(0,I.C)();return n.createElement("section",{className:D},e.map(((e,a)=>n.createElement("div",{className:(0,c.Z)("general-content",O),key:a},n.createElement("h3",{className:(0,c.Z)("general-title",L)},V[a]),n.createElement("ul",{className:"clearfix"},e.map((({name:e,tag:a,description:r,path:l,icon:s})=>n.createElement("li",{className:"text--center",key:e},n.createElement("img",{src:t(s),alt:e}),n.createElement("h4",null,e),r.map((e=>n.createElement("p",{key:e},e))),n.createElement("div",{className:x},a?n.createElement("code",null,a):n.createElement(m.Z,{className:(0,c.Z)("button button--active button--sm",R),to:l},"\u53bb\u770b\u770b"))))))))))}var P={chat:"chat_i6Su",active:"active_MoXr",chatFrame:"chatFrame_lGY_",chatFrameMenu:"chatFrameMenu_De5Q",chatFrameMenuItem:"chatFrameMenuItem_VwGn"};console.log(P);const A="https://gitter.im/hooks/community/~embed";function Q(){const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("a",{className:(0,c.Z)(P.chat,e&&P.active),onClick:()=>t(!0)},"OPEN CHAT"),n.createElement("aside",{className:(0,c.Z)(P.chatFrame,e&&P.active)},n.createElement("div",{className:P.chatFrameMenu},n.createElement("a",{className:P.chatFrameMenuItem,href:A,rel:"noopener",target:"_blank"}),n.createElement("button",{className:P.chatFrameMenuItem,onClick:()=>t(!1)})),n.createElement("iframe",{src:A})))}var T="heroBanner_qdFl",q="terminal_hZlC",H="buttons_AeoN",U="typedContainer_Dw3k";function W(){const{siteConfig:e}=(0,r.Z)(),t=n.useRef(null),a=n.useRef(null);return n.useEffect((()=>(a.current=new(s())(t.current,{stringsElement:"#typed",typeSpeed:50,backSpeed:0,loop:!0}),()=>{a.current.destroy()})),[]),n.createElement("header",{className:(0,c.Z)("hero hero--primary",T)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:H},n.createElement(m.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"\u5feb\u901f\u5f00\u59cb"))),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:q},n.createElement("div",{className:U},n.createElement("span",{ref:t})),n.createElement("div",{id:"typed",style:{display:"none"}},n.createElement("p",null,"\ud83e\udd16 npm i taro-hooks@canary^500 ",n.createElement("br",null)," \ud83d\udd0d Installing library...^500 ",n.createElement("br",null)," \ud83d\ude9a Fetching from source...^500 ",n.createElement("br",null)," \ud83d\udd28 Building...^500 ",n.createElement("br",null)," \u2728 Done in 3.25s.")))))))}function J(){const{siteConfig:e}=(0,r.Z)();return n.createElement(o.Z,{title:e.title,description:e.tagline},n.createElement(Q,null),n.createElement(W,null),n.createElement("main",null,n.createElement(B,null),n.createElement(S,{cn:"\u7279\u6027",en:"features"}),n.createElement(G,null),n.createElement(S,{cn:"\u5e94\u7528\u6848\u4f8b",en:"cases"}),n.createElement(Z,null)))}},7265:function(){}}]);