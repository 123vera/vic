(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(t,e){(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;n<i;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(n=i=0,o=(r=this.keys).length;i<o;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!==typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!==typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o,r;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;t<n;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;n<i;n++)e=o[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((r=this,function(t){var e,n,i,o,s;for(s=[],e=0,n=t.length;e<n;e++)o=t[e],s.push(function(){var t,e,n,r;for(r=[],t=0,e=(n=o.addedNodes||[]).length;t<e;t++)i=n[t],r.push(this.doSync(i));return r}.call(r));return s})).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;n<i;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,a;for(a=[],e=0,i=(s=this.vendors).length;e<i;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return a}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,a,l;for(s=(a=i(t)).getPropertyCSSValue(e),n=0,o=(r=this.vendors).length;n<o;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;e<n;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this)},159:function(t,e,n){"use strict";var i=n(8),o=n(9),r=n(11),s=n(10),a=n(12),l=n(0),c=n.n(l),u=n(13),m=n(158),p=(n(160),[{group:[{img:"images/works-1.png",link:"/influence-chain"},{img:"images/works-2.png",link:"/inex"},{img:"images/works-3.png",link:"/inc-pay"}]},{group:[{img:"images/works-4.png",link:"/design-inc"},{img:"images/works-5.png",link:"/dlab"},{img:"images/works-6.png",link:"/celebrity"}]},{group:[{img:"images/works-7.png",link:"/teamlab"},{img:"images/works-8.png",link:"/coffee-bag"}]},{group:[{img:"images/works-9.png",link:"/cutter"},{img:"images/works-10.png",link:"/arulai"},{img:"images/works-11.png",link:"/turnip"}]},{group:[{img:"images/works-12.png",link:"/room"},{img:"images/works-13.png",link:"/DNA"},{img:"images/works-14.png",link:"/stec"}]},{group:[{img:"images/works-15.png",link:"/spot"},{img:"images/works-16.png",link:"/zan"},{img:"images/works-17.png",link:"/water"}]},{group:[{img:"images/works-18.png",link:"/poster"},{img:"images/works-19.png",link:"/gelaisi"},{img:"images/works-20.png",link:"/photo"}]},{group:[{img:"images/works-21.png",link:"/GBIB"},{img:"images/works-22.png",link:"/ACP"},{img:"images/works-23.png",link:"/wayki"}]},{group:[{img:"images/works-24.png",link:"/aurelia"},{img:"images/works-25.png",link:"/SFI"},{img:"images/works-26.png",link:"/new-pay"}]}]),h=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){new m.WOW({live:!1}).init()}},{key:"render",value:function(){var t=[];return p&&p.map(function(e){return e.group.map(function(e){return t.push(e),t}),e}),c.a.createElement("div",{className:"recommend"},c.a.createElement("h2",null,"\u66f4\u591a"),c.a.createElement("div",{className:"row wow slideInRight recommend-wrapper"},c.a.createElement("div",{className:"column col-lg-4 col-md-4 col-sm-4 hidden-xs recommend-list-pc"},t.map(function(t){return c.a.createElement("div",{key:t.img,className:"wow fadeInUp recommend-item"},c.a.createElement(u.b,{to:t.link},c.a.createElement("img",{src:t.img,alt:""})))})),c.a.createElement("div",{className:" column hidden-lg hidden-md hidden-sm col-xs-12 recommend-list-phone"},t.map(function(t){return c.a.createElement("div",{key:t.img,className:"wow fadeInUp recommend-item"},c.a.createElement(u.b,{to:t.link},c.a.createElement("img",{src:t.img,alt:""})))}))))}}]),e}(l.Component);e.a=h},160:function(t,e,n){},161:function(t,e,n){"use strict";var i=n(8),o=n(9),r=n(11),s=n(10),a=n(12),l=n(0),c=n.n(l),u=n(158),m=n(33),p=n(4),h=(n(162),function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){new u.WOW({live:!1}).init()}},{key:"render",value:function(){var t=Object(m.a)(),e=p.DICT&&p.DICT[t],n=this.props.keyWords;return c.a.createElement("div",{className:"wow fadeInRight introduce"},c.a.createElement("p",null,n.title||"Influence Chain Co. Ltd"," "),c.a.createElement("div",{className:"row desc"},c.a.createElement("div",{className:"column col-lg-8 col-md-8 col-sm-8 col-xs-12 desc-left"},n.desc),c.a.createElement("ul",{className:"column col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-lg-3 col-md-3 col-sm-3 col-xs-12  desc-right"},c.a.createElement("li",null,e&&e.WORKER_YEARS," ",c.a.createElement("span",null,n.years)),c.a.createElement("li",null,e&&e.WORKER_CATEGORY," ",c.a.createElement("span",null,n.category)),c.a.createElement("li",null,e&&e.WORKER_DESIGNER," ",c.a.createElement("span",null,e&&e.WORKER_NAME)),c.a.createElement("li",null,n.url))))}}]),e}(l.Component));e.a=h},162:function(t,e,n){},176:function(t,e,n){},212:function(t,e,n){"use strict";n.r(e);var i=n(8),o=n(9),r=n(11),s=n(10),a=n(12),l=n(0),c=n.n(l),u=n(159),m=n(161),p=n(33),h=n(4),d=(n(176),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(r.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(a)))).toPlay=function(){var t=document.getElementById("video"),e=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);t&&(t.onclick=function(){t.paused?(t.play(),n.style.display="none"):(t.pause(),n.style.display="block")},e&&t.addEventListener("ended",function(e){n.style.display="block",t.src="/video/room.mp4"}));var n=document.getElementById("videoPalse");n&&(n.onclick=function(){t.paused?(t.play(),n.style.display="none"):(t.pause(),n.style.display="block")})},n}return Object(a.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=Object(p.a)(),e=h.DICT&&h.DICT[t],n={title:"Video clips",years:"2019",category:e&&e.CATEGORY_VIDEO};return c.a.createElement("div",{className:"padding-top work-room content"},c.a.createElement(m.a,{keyWords:n}),c.a.createElement("div",{className:"design-pics"},c.a.createElement("video",{id:"video",type:"video/mp4",width:"100%",src:"/video/room.mp4",poster:"/images/room.png",preload:"none",controlsList:"nodownload",playsInline:!0,"webkit-playsinline":"true","x5-video-player-type":"h5"}),c.a.createElement("img",{alt:"",src:"/images/video-play.svg",id:"videoPalse",className:"video-play",onClick:this.toPlay})),c.a.createElement(u.a,null))}}]),e}(l.Component));e.default=d}}]);
//# sourceMappingURL=20.b590f86f.chunk.js.map