"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9817],{4273:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7378),a=n(7140),i=n(9741),c=n(1637),l=n(7305),o=n(4530),s=n(9866),m=n(3640);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e){return r.createElement("svg",u({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var b={breadcrumbsContainer:"breadcrumbsContainer_T5ub",breadcrumbHomeIcon:"breadcrumbHomeIcon_GlTw"};function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function p({children:e,href:t,isLast:n}){const a="breadcrumbs__link";return n?r.createElement("span",{className:a,itemProp:"name"},e):t?r.createElement(o.Z,{className:a,href:t,itemProp:"item"},r.createElement("span",{itemProp:"name"},e)):r.createElement("span",{className:a},e)}function f({children:e,active:t,index:n,addMicrodata:i}){return r.createElement("li",h({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,r.createElement("meta",{itemProp:"position",content:String(n+1)}))}function v(){const e=(0,s.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,a.Z)("breadcrumbs__link",b.breadcrumbsItemLink),href:e},r.createElement(d,{className:b.breadcrumbHomeIcon})))}function g(){const e=(0,c.s1)(),t=(0,l.Ns)();return e?r.createElement("nav",{className:(0,a.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(v,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(f,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(p,{href:t.href,isLast:a},t.label))})))):null}},2941:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7378),a=n(7140),i=n(1637),c=n(4530),l=n(1062),o=n(3640),s="cardContainer_H47c",m="cardTitle_tTnA",u="cardDescription_rTl4";function d({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",s)},t)}function b({href:e,icon:t,title:n,description:i}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:n},t," ",n),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:i},i))}function h({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(b,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p({item:e}){const t=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);return r.createElement(b,{href:e.href,icon:t,title:e.label,description:null==a?void 0:a.description})}function f({item:e}){switch(e.type){case"link":return r.createElement(p,{item:e});case"category":return r.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v({items:e,className:t}){return r.createElement("section",{className:(0,a.Z)("row",t)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(e).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},3122:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(7378),a=n(4093),i=n(1637),c=n(9866),l=n(2941),o=n(18),s=n(2575),m=n(2834),u=n(4273),d=n(6033),b="generatedIndexPage_cf3v",h="list_qoTc",p="title_Ww3I";function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function v({categoryGeneratedIndex:e}){return r.createElement(a.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,c.Z)(e.image)})}function g({categoryGeneratedIndex:e}){const t=(0,i.jA)();return r.createElement("div",{className:b},r.createElement(s.Z,null),r.createElement(u.Z,null),r.createElement(m.Z,null),r.createElement("header",null,r.createElement(d.Z,{as:"h1",className:p},e.title),e.description&&r.createElement("p",null,e.description)),r.createElement("article",{className:"margin-top--lg"},r.createElement(l.Z,{items:t.items,className:h})),r.createElement("footer",{className:"margin-top--lg"},r.createElement(o.Z,{previous:e.navigation.previous,next:e.navigation.next})))}function E(e){return r.createElement(r.Fragment,null,r.createElement(v,f({},e)),r.createElement(g,f({},e)))}},18:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7378),a=n(3640),i=n(8532);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,c({},t,{subLabel:r.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(i.Z,c({},n,{subLabel:r.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},2834:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7378),a=n(7140),i=n(3640),c=n(9741),l=n(5389);function o({className:e}){const t=(0,l.E)();return t.badge?r.createElement("span",{className:(0,a.Z)(e,c.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},2575:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7378),a=n(7140),i=n(3474),c=n(4530),l=n(3640),o=n(8039),s=n(9741),m=n(3761),u=n(5389);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const b={unreleased:function({siteTitle:e,versionMetadata:t}){return r.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return r.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=b[e.versionMetadata.banner];return r.createElement(t,d({},e))}function p({versionLabel:e,to:t,onClick:n}){return r.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:r.createElement("b",null,r.createElement(c.Z,{to:t,onClick:n},r.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,i.Z)(),{pluginId:c}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:d}=(0,o.Jo)(c),b=null!=u?u:(f=d).docs.find((e=>e.id===f.mainDocId));var f;return r.createElement("div",{className:(0,a.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(h,{siteTitle:n,versionMetadata:t})),r.createElement("div",{className:"margin-top--md"},r.createElement(p,{versionLabel:d.label,to:b.path,onClick:()=>l(d.name)})))}function v({className:e}){const t=(0,u.E)();return t.banner?r.createElement(f,{className:e,versionMetadata:t}):null}},6033:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7378),a=n(7140),i=n(3640),c=n(4144),l="anchorWithStickyNavbar_JmGV",o="anchorWithHideOnScrollNavbar_pMLv";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e){var{as:t,id:n}=e,u=m(e,["as","id"]);const{navbar:{hideOnScroll:d}}=(0,c.L)();return"h1"!==t&&n?r.createElement(t,s({},u,{className:(0,a.Z)("anchor",d?o:l),id:n}),u.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,s({},u,{id:void 0}))}},8532:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7378),a=n(7140),i=n(4530);function c(e){const{permalink:t,title:n,subLabel:c,isNext:l}=e;return r.createElement(i.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&r.createElement("div",{className:"pagination-nav__sublabel"},c),r.createElement("div",{className:"pagination-nav__label"},n))}}}]);