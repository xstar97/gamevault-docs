(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[4195],{7486:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var a=n(9496),o=n(5924),r=n(8884),i=n(4996),s=n(5935),c=n(1163);const l={features:"features_t9lD"},u=n.p+"assets/images/library-92d8f432088f3159b5ec33698f3e3f44.png",d=n.p+"assets/images/microsoftstore-fb41aba6f4e35062a932c7ea0c262e79.png",p=n.p+"assets/images/adminview-8018a3f150b9b284249cbe49147aa480.png",m=n.p+"assets/images/communitytab-496d490eacb55e19ec0de62916fd447a.png",h=n.p+"assets/images/gameview-fa25ad852ca9e11a0ba35b34bc244557.png",g=n.p+"assets/images/opensource-43e5ec3ce9906d480315f65ceaaa9156.png",f=[{title:"\ud83c\udfae Build Your Game Library and Share It with Friends!",img:d,description:a.createElement(a.Fragment,null,"Keep your game collection organized and share your favorite titles with your friends with our easy-to-use platform. There's no need to compile anything. Our client application is officially available in the"," ",a.createElement("a",{href:"https://www.microsoft.com/store/apps/9PCKDV76GL75"},"Microsoft Store"))},{title:"\ud83d\udd12 Total Control Over Your Games and Access!",img:p,description:a.createElement(a.Fragment,null,"Unlike cloud-based gaming platforms, our self-hosted platform gives you complete control over who can download and play your games.")},{title:"\ud83d\udd79\ufe0f Stay Connected with Friends and Track Your Playtime!",img:m,description:a.createElement(a.Fragment,null,"With social features, you can stay connected with friends and track your playtime to know what they're playing and discover new games to play.")},{title:"\ud83d\udd0d Easily Browse, Sort and Filter Your Game Library!",img:u,description:a.createElement(a.Fragment,null,"Our sleek and intuitive interface makes it easy to browse, sort and filter your game library, so you never get lost in your collection.")},{title:"\ud83d\udcc8 Unleash the Full Power of Crackpipe with Metadata Enrichment!",img:h,description:a.createElement(a.Fragment,null,"Add juicy metadata to your games with our powerful metadata enrichment tool, and unlock the full potential of Crackpipe.")},{title:"\ud83d\udc65 Join Our Community and Contribute to Our Open-Source Project!",img:g,description:a.createElement(a.Fragment,null,"Become part of our growing community and contribute to our open-source project, and enjoy endless features and capabilities.")}];function v(e){let{title:t,img:n,description:r}=e;return a.createElement("div",{className:(0,o.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement("img",{src:n})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,r)))}function b(){return a.createElement("section",{className:l.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},f.map(((e,t)=>a.createElement(v,(0,c.Z)({key:t},e)))))))}var y=n(9887);const w={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function E(){const{siteConfig:e}=(0,i.Z)();return a.createElement("header",{className:(0,o.Z)("hero hero--primary",w.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:w.buttons},a.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Introduction"),a.createElement("a",{className:"button button--secondary button--lg",href:"https://www.microsoft.com/store/apps/9PCKDV76GL75",target:"_blank"},"Download")),a.createElement("br",null),a.createElement("a",{href:"https://www.producthunt.com/posts/crackpipe?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-crackpipe",target:"_blank"},a.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400344&theme=neutral",alt:"Crackpipe - Selfhosted platform for 'alternatively obtained' games | Product Hunt",id:"producthunt",width:"190"}))))}function k(){y.init("K6k7j6GHClhh"),y.trackViews();const{siteConfig:e}=(0,i.Z)();return a.createElement(s.Z,{title:`${e.title}`,description:"A decentralized gaming platform for alternatively obtained games"},a.createElement(E,null),a.createElement("main",null,a.createElement(b,null)))}},9887:function(e,t){!function(e){"use strict";function t(e){return(e=location.search.match(e))&&e[2]||void 0}function n(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language}function a(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}}function o(){return document.referrer||void 0}function r(){return t(u)}function i(){return t(p)}function s(){return t(d)}function c(){return location.pathname||""}var l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=/[?&](ref|source|utm_source)=([^?&]+)/,d=/[?&](utm_campaign)=([^?&]+)/,p=/[?&](utm_medium)=([^?&]+)/,m={stop:function(){}},h=(g.prototype.track=function(e){this.canTrack()&&(e=l({pid:this.projectID,pg:this.activePage,lc:n(),tz:a(),ref:o(),so:r(),me:i(),ca:s()},e),this.sendRequest("custom",e))},g.prototype.trackPageViews=function(e){var t,n,a;return this.canTrack()?(this.pageData||(null!=(this.pageViewsOptions=e)&&e.unique||(n=setInterval(this.trackPathChange,2e3)),null!=e&&e.noHeartbeat||(setTimeout(this.heartbeat,3e3),t=setInterval(this.heartbeat,28e3)),a=c(),this.pageData={path:a,actions:{stop:function(){clearInterval(n),clearInterval(t)}}},this.trackPage(a,null==e?void 0:e.unique)),this.pageData.actions):m},g.prototype.getPerformanceStats=function(){var e;return this.canTrack()&&!this.perfStatsCollected&&null!=(e=window.performance)&&e.getEntriesByType&&(e=window.performance.getEntriesByType("navigation")[0])?(this.perfStatsCollected=!0,{dns:e.domainLookupEnd-e.domainLookupStart,tls:e.secureConnectionStart?e.requestStart-e.secureConnectionStart:0,conn:e.secureConnectionStart?e.secureConnectionStart-e.connectStart:e.connectEnd-e.connectStart,response:e.responseEnd-e.responseStart,render:e.domComplete-e.domContentLoadedEventEnd,dom_load:e.domContentLoadedEventEnd-e.responseEnd,page_load:e.loadEventStart,ttfb:e.responseStart-e.requestStart}):{}},g.prototype.heartbeat=function(){var e;(null!=(e=this.pageViewsOptions)&&e.heartbeatOnBackground||"hidden"!==document.visibilityState)&&(e={pid:this.projectID},this.sendRequest("hb",e))},g.prototype.checkIgnore=function(e){var t,n=null==(t=this.pageViewsOptions)?void 0:t.ignore;if(Array.isArray(n))for(var a=0;a<n.length;++a){if(n[a]===e)return!0;if(n[a]instanceof RegExp&&n[a].test(e))return!0}return!1},g.prototype.trackPathChange=function(){var e;this.pageData&&(e=c(),this.pageData.path!==e)&&this.trackPage(e,!1)},g.prototype.getPreviousPage=function(){if(this.activePage)return this.checkIgnore(this.activePage)?null:this.activePage;if("function"==typeof URL){var e=o();if(!e)return null;var t=location.host;try{var n=new URL(e),a=n.host,r=n.pathname;return t!==a||this.checkIgnore(r)?null:r}catch(e){}}return null},g.prototype.trackPage=function(e,t){var c,l,u;void 0===t&&(t=!1),this.pageData&&(this.pageData.path=e,this.checkIgnore(e)||(c=this.getPerformanceStats(),null!=(u=this.pageViewsOptions)&&u.noUserFlow||(l=this.getPreviousPage()),u={pid:this.projectID,lc:n(),tz:a(),ref:o(),so:r(),me:i(),ca:s(),unique:t,pg:e,perf:c,prev:l},this.activePage=e,this.sendRequest("",u)))},g.prototype.debug=function(e){var t;null!=(t=this.options)&&t.debug&&console.log("[Swetrix]",e)},g.prototype.canTrack=function(){var e;return null!=(e=this.options)&&e.disabled?(this.debug("Tracking disabled: the 'disabled' setting is set to true."),!1):"undefined"==typeof window?(this.debug("Tracking disabled: script does not run in browser environment."),!1):null!=(e=this.options)&&e.respectDNT&&"1"===(null==(e=window.navigator)?void 0:e.doNotTrack)?(this.debug("Tracking disabled: respecting user's 'Do Not Track' preference."),!1):!(!(null!=(e=this.options)&&e.debug||"localhost"!==(null===location||void 0===location?void 0:location.hostname)&&"127.0.0.1"!==(null===location||void 0===location?void 0:location.hostname)&&""!==(null===location||void 0===location?void 0:location.hostname))||null!==navigator&&void 0!==navigator&&navigator.webdriver&&(this.debug("Tracking disabled: navigation is automated by WebDriver."),1))},g.prototype.sendRequest=function(e,t){var n=(null==(n=this.options)?void 0:n.apiURL)||"https://api.swetrix.com/log",a=new XMLHttpRequest;a.open("POST","".concat(n,"/").concat(e),!0),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify(t))},g);function g(e,t){this.projectID=e,this.options=t,this.pageData=null,this.pageViewsOptions=null,this.perfStatsCollected=!1,this.activePage=null,this.trackPathChange=this.trackPathChange.bind(this),this.heartbeat=this.heartbeat.bind(this)}e.LIB_INSTANCE=null,e.init=function(t,n){return e.LIB_INSTANCE||(e.LIB_INSTANCE=new h(t,n)),e.LIB_INSTANCE},e.track=function(t){e.LIB_INSTANCE&&e.LIB_INSTANCE.track(t)},e.trackViews=function(t){return new Promise((function(n){e.LIB_INSTANCE?"undefined"==typeof document||"complete"===document.readyState?n(e.LIB_INSTANCE.trackPageViews(t)):window.addEventListener("load",(function(){n(e.LIB_INSTANCE.trackPageViews(t))})):n(m)}))},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);