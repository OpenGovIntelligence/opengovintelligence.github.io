(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(160),o=a(159),s=a(158),m=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement(s.a,{pageTitle:t.deliverablesJson.title}),r.a.createElement(o.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.deliverablesJson.content.childMarkdownRemark.html}})))};m.propTypes={data:l.a.object.isRequired},t.default=m;var p="822269651"},156:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.withPrefix});a(157);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},158:function(e,t,a){"use strict";a(34);var n=a(163),r=a(0),i=a.n(r),l=a(1),c=a.n(l),o=a(164),s=a(156),m=a(14),p=function(e){var t=e.siteTitle,a=e.siteDescription,n=e.siteUrl,r=e.pageTitle,l=e.pageTitleFull,c=void 0===l?r?t+": "+r:t:l,s=e.themeColor,m=e.social,p=e.imageUrl,u=e.location,g=e.canonical,E=void 0===g?n+(u.pathname||""):g;return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("script",{src:"https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:t,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:c,property:"og:title"}),i.a.createElement("meta",{content:c,name:"twitter:title"}),i.a.createElement("title",null,c),i.a.createElement("meta",{content:a,name:"description"}),i.a.createElement("meta",{content:a,property:"og:description"}),i.a.createElement("meta",{content:a,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:s,name:"theme-color"}),i.a.createElement("meta",{content:t,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:t,property:"og:site_name"}),i.a.createElement("meta",{content:m.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:c,name:"twitter:text:title"}),i.a.createElement("meta",{content:E,property:"og:url"}),i.a.createElement("meta",{content:E,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:E}),i.a.createElement("meta",{content:p||n+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:p||n+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:p||n+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:s,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.location,a=e.canonical,n=e.siteUrl,r=e.pageTitle,i=e.siteTitle,l=[{"@context":"http://schema.org","@type":"WebSite",url:a,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==t.pathname&&l.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:i}},{"@type":"ListItem",position:2,item:{"@id":a,name:r}}]}),l}({location:u,canonical:E,siteUrl:n,pageTitle:r,siteTitle:t,pageTitleFull:c}))))};p.propTypes={siteTitle:c.a.string,siteTitleShort:c.a.string,siteDescription:c.a.string,siteUrl:c.a.string,themeColor:c.a.string,social:c.a.objectOf(c.a.string),imageUrl:c.a.string,canonical:c.a.string,pageTitle:c.a.string,pageTitleFull:c.a.string,location:c.a.object.isRequired};t.a=function(e){return i.a.createElement(s.b,{query:"177639445",render:function(t){return i.a.createElement(m.Location,null,function(a){var n=a.location;return i.a.createElement(p,Object.assign({},t.site.siteMetadata,e,{location:n}))})},data:n})}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),l=function(e){var t=e.children;return r.a.createElement("div",{className:"Box"},t)};l.propTypes={children:a.n(i).a.node.isRequired},t.a=l},160:function(e,t,a){"use strict";a(34);var n=a(161),r=a(0),i=a.n(r),l=a(1),c=a.n(l),o=a(156),s=a(158),m=a(35),p=function(){return i.a.createElement("nav",null,i.a.createElement("input",{type:"checkbox",id:"toggle"}),i.a.createElement("label",{htmlFor:"toggle",id:"menuToggle"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",null,i.a.createElement(o.a,{to:"/about"},"About"),i.a.createElement(o.a,{to:"/pilots"},"Pilots"),i.a.createElement(o.a,{to:"/publications"},"Publications"),i.a.createElement(o.a,{to:"/software"},"Software"),i.a.createElement(o.a,{to:"/training"},"Training"),i.a.createElement(o.a,{to:"/deliverables"},"Deliverables"),i.a.createElement("a",{href:"https://medium.com/opengovintelligence"},"Blog")))},u=m.b.div({enter:{y:0,opacity:1,transition:{ease:"easeInOut"}},exit:{y:"-5%",opacity:0,transition:{ease:"easeInOut"}}}),g=function(e){e.title;return i.a.createElement(u,null,i.a.createElement("header",{className:"reverse"},i.a.createElement(o.a,{to:"/"},"open",i.a.createElement("span",null,"gov"),"intelligence"),i.a.createElement(p,null)))};g.propTypes={title:c.a.string.isRequired};var E=g,d=function(){return i.a.createElement("footer",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"http://twitter.com/opengovint"},i.a.createElement("img",{src:Object(o.c)("twitter.svg"),alt:"Twitter "})),i.a.createElement("a",{href:"https://github.com/OpenGovIntelligence"},i.a.createElement("img",{src:Object(o.c)("github.svg"),alt:"Github"})),i.a.createElement("a",{href:"http://www.slideshare.net/opengovintelligence"},i.a.createElement("img",{src:Object(o.c)("slideshare.svg"),alt:"Slideshare"})),i.a.createElement("a",{href:"http://eepurl.com/b2-_Dj"},i.a.createElement("img",{src:Object(o.c)("mail-with-circle.svg"),alt:"Mailing list"}))),i.a.createElement("div",null,i.a.createElement("div",{className:"svg_holder"},i.a.createElement("svg",{width:"81",height:"54"},i.a.createElement("desc",null,"European flag"),i.a.createElement("g",{transform:"scale(0.1)"},i.a.createElement("defs",null,i.a.createElement("g",{id:"s"},i.a.createElement("g",{id:"c"},i.a.createElement("path",{id:"t",d:"M0,0v1h0.5z",transform:"translate(0,-1)rotate(18)"}),i.a.createElement("use",{xlinkHref:"#t",transform:"scale(-1,1)"})),i.a.createElement("g",{id:"a"},i.a.createElement("use",{xlinkHref:"#c",transform:"rotate(72)"}),i.a.createElement("use",{xlinkHref:"#c",transform:"rotate(144)"})),i.a.createElement("use",{xlinkHref:"#a",transform:"scale(-1,1)"}))),i.a.createElement("rect",{fill:"#039",width:"810",height:"540"}),i.a.createElement("g",{fill:"#fc0",transform:"scale(30)translate(13.5,9)"},i.a.createElement("use",{xlinkHref:"#s",y:"-6"}),i.a.createElement("use",{xlinkHref:"#s",y:"6"}),i.a.createElement("g",{id:"l"},i.a.createElement("use",{xlinkHref:"#s",x:"-6"}),i.a.createElement("use",{xlinkHref:"#s",transform:"rotate(150)translate(0,6)rotate(66)"}),i.a.createElement("use",{xlinkHref:"#s",transform:"rotate(120)translate(0,6)rotate(24)"}),i.a.createElement("use",{xlinkHref:"#s",transform:"rotate(60)translate(0,6)rotate(12)"}),i.a.createElement("use",{xlinkHref:"#s",transform:"rotate(30)translate(0,6)rotate(42)"})),i.a.createElement("use",{xlinkHref:"#l",transform:"scale(-1,1)"}))))),i.a.createElement("p",null,"This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 693849.")))},h=(a(165),function(e){var t=e.data,a=e.children,n=e.addClass;return i.a.createElement("div",{className:n},i.a.createElement(s.a,null),i.a.createElement(E,{title:t.site.siteMetadata.siteTitle}),a,i.a.createElement(d,null))});h.propTypes={children:c.a.node.isRequired,data:c.a.object.isRequired,addClass:c.a.string};var f=function(e){return i.a.createElement(o.b,{query:"2302781957",render:function(t){return i.a.createElement(h,Object.assign({data:t},e))},data:n})};f.propTypes={children:c.a.node.isRequired};t.a=f},161:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"openGOVintelligence"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(1),l=a.n(i),c=a(56),o=a(3),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},163:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"openGOVintelligence",siteTitleShort:"OGI",siteDescription:"Improving public services with multidimensional statistical data",siteUrl:"http://www.opengovintelligence.eu",themeColor:"#000",social:{twitter:"opengovint",fbAppId:""}}}}}}}]);
//# sourceMappingURL=component---src-pages-deliverables-js-49824b61791e78e1dc00.js.map