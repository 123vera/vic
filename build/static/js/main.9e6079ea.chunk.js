(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(81),i=n.n(o),r=n(13),c=n(23),s=n(8),u=n(9),d=n(11),h=n(10),m=n(12),p=n(1),E=n.n(p),g=n(4),f=n(157),b=n(156),v=n(33),_=(n(100),[{label:"zh-CN",value:"CN"},{label:"en-US",value:"US"}]),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={currentNav:window.location.hash.split("/")[1]||"projects",isShowNav:!1},n.switchRoute=function(e){n.setState({currentNav:e,isShowNav:!1},function(){})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.currentNav,n=this.props,a=n.setLang,o=n.language,i=n.currentLanguage,c=n.isDarkBg,s=g.DICT&&g.DICT[o],u=[{label:"projects",value:s&&s.NAV_TITLE_01},{label:"diary",value:s&&s.NAV_TITLE_02},{label:"video",value:s&&s.NAV_TITLE_03},{label:"about",value:s&&s.NAV_TITLE_04},{label:"contact",value:s&&s.NAV_TITLE_05}];return l.a.createElement("div",{id:"common-header",className:"".concat(c?"color-black":"color-white")},l.a.createElement("div",{className:"header-box"},l.a.createElement("div",{className:"header-visible"},l.a.createElement(r.b,{to:"/projects"},"XIEHUI.DESIGN")),l.a.createElement("div",{className:"hidden-xs header-wrapper"},l.a.createElement("div",null,l.a.createElement("ul",{className:"nav-ul "},u.map(function(n){return l.a.createElement("li",{key:n.value,onClick:function(){return e.switchRoute(n.label)},className:n.label===t?"active":""},l.a.createElement(r.b,{to:"/".concat(n.label)},n.value&&n.value.charAt(0).toUpperCase()+n.value.slice(1)))}))),l.a.createElement("ul",{className:"lang-ul"},_.map(function(e){return l.a.createElement("li",{key:e.value,className:"lang-li ".concat(e.value===i?"active":""),onClick:function(){return a(e)}},e.value)})))))}}]),t}(a.Component),w=(n(106),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={currentNav:window.location.pathname.split("/")[1]||"projects",isShowNav:!1,isWeChat:!1},n.switchRoute=function(e){n.setState({currentNav:e,isShowNav:!1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"render",value:function(){var e=this,t=this.state,n=t.isShowNav,a=t.currentNav,o=t.isWeChat,i=this.props,c=i.language,s=i.setLang,u=i.currentLanguage,d=g.DICT&&g.DICT[c],h=[{label:"projects",value:d&&d.NAV_TITLE_01},{label:"diary",value:d&&d.NAV_TITLE_02},{label:"video",value:d&&d.NAV_TITLE_03},{label:"about",value:d&&d.NAV_TITLE_04},{label:"contact",value:d&&d.NAV_TITLE_05}];return l.a.createElement("div",{id:"common-footer"},l.a.createElement("section",{className:"row  hidden-xs main ".concat(["/images","/images/","/video","/video/"].find(function(e){return window.location.pathname===e})?"bg-gray":"")},l.a.createElement("div",{className:"main-wrapper"},l.a.createElement("ul",{className:"column col-lg-3 col-md-3 col-sm-3"},l.a.createElement("li",null,"info"),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/about"},"UI\u3001WEB Designer")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/images"},"Photography"))),l.a.createElement("ul",{className:"column col-lg-3 col-md-3 col-sm-3"},l.a.createElement("li",null,"contact"),l.a.createElement("li",null,"vicjiangyu@gmail.com"),l.a.createElement("li",null,"vanhatch.com")),l.a.createElement("ul",{className:"column col-lg-3 col-md-3 col-sm-3"},l.a.createElement("li",null,"follow"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/j.y.vic/",target:"_blank",rel:"noreferrer noopener"},"Instagram")),l.a.createElement("li",null,l.a.createElement("span",{className:"wechat",onClick:function(){e.setState({isWeChat:!0})}},"Wechat")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://weibo.com/6453224041/profile?rightmod=1&wvr=6&mod=personinfo",target:"_blank",rel:"noreferrer noopener"},"Weibo")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://space.bilibili.com/319350209",target:"_blank",rel:"noreferrer noopener"},"bilibili"))))),l.a.createElement("div",{className:"rights"},l.a.createElement("span",null,"\xa9 2019 XieHui.All rights reserved. \u6caaICP\u590719041984\u53f7"),l.a.createElement("img",{src:"/images/footer.png",alt:""})),l.a.createElement("div",{className:"wechart-modal ".concat(o?"":"hidden-modal"),onClick:function(){e.setState({isWeChat:!1})}},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"wechart-content"},l.a.createElement("img",{src:"/images/wechat.jpg",alt:""})))),!n&&l.a.createElement("div",{className:"wow fadeInUp hidden-lg hidden-md hidden-sm add",onClick:function(){e.setState({isShowNav:!0})}},"+"),l.a.createElement("div",{className:"hidden-lg hidden-md hidden-sm wow phone-nav-switch ".concat(n?"display-block fadeInUp":"")},l.a.createElement("ul",{className:"phone-nav-ul"},h.map(function(t){return l.a.createElement("li",{key:t.label,onClick:function(){return e.switchRoute(t.label)},className:a===t.label?"active":""},l.a.createElement(r.b,{to:"/".concat(t.label)}," ",t.value))}),[{label:"zh-CN",value:"CN"},{label:"en-US",value:"US"}].map(function(e){return e.value!==u&&l.a.createElement("li",{key:e.value,className:"lang-li ".concat(e.value===u?"active":""),onClick:function(){return s(e)}},"CN"===e.value?"Chinese":"\u82f1\u6587")}),l.a.createElement("li",null,l.a.createElement("div",{className:"close-x",onClick:function(){e.setState({isShowNav:!1})}},"\xd7")))))}}]),t}(a.Component)),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={error:null,errorInfo:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){var n=this;this.setState({error:e,errorInfo:t},function(){console.error("[ Error Boundary ]",n.state)})}},{key:"render",value:function(){return this.state.errorInfo?null:this.props.children}}]),t}(a.Component),N=n(2),O=(n(108),E()({loader:function(){return Promise.resolve().then(n.bind(null,2))},loading:N.default})),C=E()({loader:function(){return n.e(32).then(n.bind(null,201))},loading:N.default}),y=E()({loader:function(){return n.e(16).then(n.bind(null,202))},loading:N.default}),I=E()({loader:function(){return n.e(14).then(n.bind(null,203))},loading:N.default}),S=E()({loader:function(){return n.e(10).then(n.bind(null,204))},loading:N.default}),D=E()({loader:function(){return n.e(11).then(n.bind(null,205))},loading:N.default}),k=E()({loader:function(){return n.e(6).then(n.bind(null,206))},loading:N.default}),L=E()({loader:function(){return n.e(24).then(n.bind(null,207))},loading:N.default}),R=E()({loader:function(){return n.e(7).then(n.bind(null,208))},loading:N.default}),j=E()({loader:function(){return n.e(8).then(n.bind(null,209))},loading:N.default}),x=E()({loader:function(){return n.e(4).then(n.bind(null,210))},loading:N.default}),B=E()({loader:function(){return n.e(25).then(n.bind(null,211))},loading:N.default}),G=E()({loader:function(){return n.e(20).then(n.bind(null,212))},loading:N.default}),U=E()({loader:function(){return n.e(9).then(n.bind(null,213))},loading:N.default}),W=E()({loader:function(){return n.e(23).then(n.bind(null,214))},loading:N.default}),P=E()({loader:function(){return n.e(22).then(n.bind(null,215))},loading:N.default}),V=E()({loader:function(){return n.e(28).then(n.bind(null,216))},loading:N.default}),Y=E()({loader:function(){return n.e(26).then(n.bind(null,217))},loading:N.default}),K=E()({loader:function(){return n.e(19).then(n.bind(null,218))},loading:N.default}),M=E()({loader:function(){return n.e(13).then(n.bind(null,219))},loading:N.default}),H=E()({loader:function(){return n.e(18).then(n.bind(null,220))},loading:N.default}),z=E()({loader:function(){return n.e(12).then(n.bind(null,221))},loading:N.default}),F=E()({loader:function(){return n.e(3).then(n.bind(null,222))},loading:N.default}),X=E()({loader:function(){return n.e(27).then(n.bind(null,223))},loading:N.default}),J=E()({loader:function(){return n.e(5).then(n.bind(null,224))},loading:N.default}),$=E()({loader:function(){return n.e(21).then(n.bind(null,225))},loading:N.default}),q=E()({loader:function(){return n.e(17).then(n.bind(null,226))},loading:N.default}),Z=E()({loader:function(){return n.e(15).then(n.bind(null,227))},loading:N.default}),Q=E()({loader:function(){return Promise.all([n.e(29),n.e(34)]).then(n.bind(null,228))},loading:N.default}),ee=E()({loader:function(){return n.e(31).then(n.bind(null,229))},loading:N.default}),te=E()({loader:function(){return n.e(30).then(n.bind(null,230))},loading:N.default}),ne=E()({loader:function(){return n.e(33).then(n.bind(null,231))},loading:N.default}),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={language:g.DEFAULT_LANGUAGE,currentLanguage:"US"},n.initLanguage=function(){var e=Object(v.a)();return Object(v.b)("language",e),n.setLang(e),null},n.setLang=function(e){return Object(v.b)("language",e.label),n.setState({language:e.label,currentLanguage:e.value},function(){Object(v.c)(e.label)}),null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.initLanguage(),(document&&document.getElementById("main").children[0]).style="padding-top: 20%"}},{key:"render",value:function(){var e=this.state,t=e.currentLanguage,n=void 0===t?"US":t,a=e.language,o=void 0===a?g.DEFAULT_LANGUAGE:a,i=!["#/","#/projects/","#/projects","#/video","#/diary","#/diary/","#/video/"].includes(window.location.hash);return l.a.createElement(A,null,l.a.createElement(f.a,null,l.a.createElement("div",{id:"app"},l.a.createElement(b.a,null,l.a.createElement(T,{isDarkBg:i,language:o,currentLanguage:n,setLang:this.setLang}),l.a.createElement("main",{id:"main"},l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:C}),l.a.createElement(c.a,{exact:!0,path:"/projects",component:C}),l.a.createElement(c.a,{exact:!0,path:"/lab",component:O}),l.a.createElement(c.a,{exact:!0,path:"/diary",component:Q}),l.a.createElement(c.a,{exact:!0,path:"/video",component:ne}),l.a.createElement(c.a,{exact:!0,path:"/about",component:te}),l.a.createElement(c.a,{exact:!0,path:"/contact",component:ee}),l.a.createElement(c.a,{exact:!0,path:"/influence-chain",strict:!0,component:y}),l.a.createElement(c.a,{exact:!0,path:"/inc-pay",strict:!0,component:I}),l.a.createElement(c.a,{exact:!0,path:"/design-inc",strict:!0,component:S}),l.a.createElement(c.a,{exact:!0,path:"/dlab",strict:!0,component:D}),l.a.createElement(c.a,{exact:!0,path:"/celebrity",strict:!0,component:k}),l.a.createElement(c.a,{exact:!0,path:"/teamlab",strict:!0,component:L}),l.a.createElement(c.a,{exact:!0,path:"/coffee-bag",strict:!0,component:R}),l.a.createElement(c.a,{exact:!0,path:"/cutter",strict:!0,component:j}),l.a.createElement(c.a,{exact:!0,path:"/arulai",strict:!0,component:x}),l.a.createElement(c.a,{exact:!0,path:"/turnip",strict:!0,component:B}),l.a.createElement(c.a,{exact:!0,path:"/room",strict:!0,component:G}),l.a.createElement(c.a,{exact:!0,path:"/DNA",strict:!0,component:U}),l.a.createElement(c.a,{exact:!0,path:"/stec",strict:!0,component:W}),l.a.createElement(c.a,{exact:!0,path:"/spot",strict:!0,component:P}),l.a.createElement(c.a,{exact:!0,path:"/zan",strict:!0,component:V}),l.a.createElement(c.a,{exact:!0,path:"/water",strict:!0,component:Y}),l.a.createElement(c.a,{exact:!0,path:"/poster",strict:!0,component:K}),l.a.createElement(c.a,{exact:!0,path:"/gelaisi",strict:!0,component:M}),l.a.createElement(c.a,{exact:!0,path:"/photo",strict:!0,component:H}),l.a.createElement(c.a,{exact:!0,path:"/GBIB",strict:!0,component:z}),l.a.createElement(c.a,{exact:!0,path:"/ACP",strict:!0,component:F}),l.a.createElement(c.a,{exact:!0,path:"/wayki",strict:!0,component:X}),l.a.createElement(c.a,{exact:!0,path:"/aurelia",strict:!0,component:J}),l.a.createElement(c.a,{exact:!0,path:"/SFI",strict:!0,component:$}),l.a.createElement(c.a,{exact:!0,path:"/new-pay",strict:!0,component:q}),l.a.createElement(c.a,{exact:!0,path:"/Inex",strict:!0,component:Z}))),l.a.createElement(w,{language:o,setLang:this.setLang,currentLanguage:n})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(153);i.a.render(l.a.createElement(r.a,{basename:""},l.a.createElement(c.a,{path:"/",component:ae})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},2:function(e,t,n){"use strict";n.r(t);var a=n(8),l=n(9),o=n(11),i=n(10),r=n(12),c=n(0),s=n.n(c),u=(n(107),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loading"},"Loading ",s.a.createElement("span",null,"..."))}}]),t}(c.Component));t.default=u},33:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"a",function(){return m});var a=n(61),l=n(4),o=n(43),i=n.n(o),r=n(57),c=n.n(r),s={IP:/^([0-9]{1,3})(\.[0-9]{1,3}){3}$/},u=function(e){return i.a.get(e)},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=window.location.hostname,o=void 0===l?"":l,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s.IP.test(e)}(o)?o:o.split(".").slice(-2).join(".");i.a.set(e,t,Object(a.a)({path:"/",domain:r},n)),i.a.set(e,t,Object(a.a)({path:"/",domain:"."+r},n))},h=function(e){switch(e){case"zh-CN":c.a.locale("zh-cn");break;case"en-US":c.a.locale("en")}},m=function(){var e=u("language");return l.SUPPORTED_LANGUAGES.includes(e)?e:l.DEFAULT_LANGUAGE}},4:function(e,t,n){var a=n(98),l={"zh-CN":n(99),"en-US":a},o=Object.keys(l);e.exports={DICT:l,SUPPORTED_LANGUAGES:o,DEFAULT_LANGUAGE:"en-US"}},91:function(e,t,n){e.exports=n(154)},98:function(e,t){e.exports={NAV_TITLE_01:"Project",NAV_TITLE_02:"Diary",NAV_TITLE_03:"Video",NAV_TITLE_04:"About",NAV_TITLE_05:"Contact",WORKER_NAME:"XieHui",WORKER_DESIGNER:"Designer",WORKER_YEARS:"Years",WORKER_CATEGORY:"Category",CONTACT_ADDRESS:"7th Floor, No. 27, Zhongshan East Road, Huangpu District, Shanghai",ABOUT_ME_TITLE:"ABOUT ME",ABOUT_ME_DESC_01:"I am Xie Hui, a UI designer currently living in Shanghai. I\u2019m also a photographer. I enjoy recording subtleties of life and emotions with images.",ABOUT_ME_DESC_02:"Someone has described art design as follows, \" cut to the essence, but do not strip off its rhyme, keep it clean and pure, but don't deprive it of vitality.\u201dThe world is full of beautiful things that we should touch with our hearts. Art is the process of re-examining and re-expressing what we see and what we think, which has become an indispensable part of my life.",ABOUT_ME_DESC_03:"I regard Art Design as not only the presentation of visual effects, but also the goal of better serving users should be taken into consideration. Designers should understand principles of design and at the same time mix originality with product orientation, and better understand themselves and their surroundings from different aspects.",ABOUT_ME_DESC_04:"Artistic design is a process of both tempering technical expertise and enriching myself. As a designer, I\u2019m aiming to take good use of updating technology to more precisely meet customers\u2019 needs, as well as express myself.",CATEGORY_WEB:"Web Design",CATEGORY_APP:"App Design",CATEGORY_PHOTO:"Photography",CATEGORY_VIDEO:"Video Clip",CATEGORY_WEBSITE:"Website Design",CATEGORY_POSTER:"Poster Design",CATEGORY_VISUAL_DESIGN:"Visual Design",WORKS_DLAB_DESC:'D/lab, Design and Development The most disruptive Internet project is our source of interest. Now, we are trying to do "blockchain +" and have achieved some results. In the future, we will help more projects to achieve "blockchain +"',WORKS_GBIB_DESC:"GBiB focuses on blockchain industry investment services, optimistic about the development of new economic systems brought about by the vertical ecology of blockchain technology, digital currency, exchanges, etc., hoping to use its professional technical means and global team in the block. Today, the rapid development of the company has escorted investors and projects.The main business of GBiB includes investor services and project services. Investor services mainly include: project due diligence, consulting, etc.; project services mainly include: financial consultants, strategic analysis, financing, global market expansion. GBiB has a professional investment analysis team and high net worth LP resources. The founding team has extensive experience in finance and investment.Headquartered in Singapore, it currently has investment partnerships in Silicon Valley, New York, Shanghai, London, Toronto and Tokyo.",WORKS_INCPAY_DESC:"INC PAY is a digital currency management, storage, transfer, entertainment, and financial management blockchain-based mobile phone digital currency wallet digital currency wallet as the entrance to the blockchain world. Currently, the blockchain wallet is moving towards the 3.0 stage. Development, with the development of the blockchain, the wallet is constantly evolving. If you keep it, you can only face the risk of elimination; all major companies want to stand out in this wallet battle and become the Alipay in the blockchain wallet.",WORKS_INC_DESC:"Influence Chain is the world's first impact-value data engine based on BlockChain technology. It is dedicated to building a global impact value platform using blockchain and distributed storage technologies. The goal of Influence Chain is to explore projects, IPs and people with public awareness or social influence in various industries, and to demonstrate their new dimension value through blockchain technology.",WORKS_TEAMLAB_DESC:'teamLab: The world of water particles in oil tanks. The team of waterLab, the theme of the natural element "water": The world of water particles in the tank will reflect on the past and present of the tank art center in a grand and humorous way: the waterfall evaporating in the "tank" The deep industrial awareness of the Shanghai Oil Tank Art Center has given the entire post-industrial art space a new and dynamic identity.'}},99:function(e,t){e.exports={NAV_TITLE_01:"\u9996\u9801",NAV_TITLE_02:"\u65e5\u8a18",NAV_TITLE_03:"\u9304\u50cf",NAV_TITLE_04:"\u95dc\u65bc",NAV_TITLE_05:"\u806f\u7e6b",WORKER_NAME:"\u8c22\u8f89",WORKER_DESIGNER:"\u8a2d\u8a08",WORKER_YEARS:"\u5e74\u4efd",WORKER_CATEGORY:"\u985e\u5225",CONTACT_ADDRESS:"\u4e0a\u6d77\u5e02\u9ec3\u6d66\u5340\u4e2d\u5c71\u6771\u4e00\u8def27\u865f7\u6a13",ABOUT_ME_TITLE:"\u95dc\u65bc\u6211",ABOUT_ME_DESC_01:"\u6211\u662f\u8c22\u8f89\uff0c\u73fe\u5c45\u4e0a\u6d77\uff0c\u662f\u4e00\u540dUI\u8a2d\u8a08\u5e2b\u3002\u540c\u6642\u611b\u597d\u651d\u5f71\uff0c\u8996\u89ba\u548c\u5f71\u50cf\u662f\u6211\u8a18\u9304\u751f\u6d3b\u7d30\u7bc0\u548c\u8868\u9054\u7d30\u7463\u60c5\u611f\u7684\u65b9\u5f0f\u3002",ABOUT_ME_DESC_02:"\u6709\u4eba\u9019\u6a23\u5f62\u5bb9\u85dd\u8853\u8a2d\u8a08\uff0c\u201c\u524a\u6e1b\u5230\u672c\u8cea\uff0c\u4f46\u4e0d\u8981\u525d\u96e2\u5b83\u7684\u97fb\uff0c\u4fdd\u6301\u4e7e\u6de8\u7d14\u6f54\uff0c\u4f46\u4e0d\u8981\u525d\u596a\u751f\u547d\u529b\u3002\u201d\u6211\u5011\u751f\u6d3b\u7684\u4e16\u754c\u5145\u6eff\u7f8e\u597d\u7684\u4e8b\u7269\uff0c\u9700\u8981\u7528\u5fc3\u611f\u53d7\u3002\u85dd\u8853\u6b63\u662f\u91cd\u65b0\u5be9\u8996\u6240\u898b\uff0c\u4f9d\u5f9e\u5167\u5fc3\u518d\u8868\u9054\u7684\u904e\u7a0b\uff0c\u5df2\u6210\u70ba\u6211\u751f\u547d\u4e2d\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002",ABOUT_ME_DESC_03:"\u6211\u6240\u7406\u89e3\u7684\u8a2d\u8a08\u4e0d\u50c5\u662f\u8996\u89ba\u6548\u679c\u7684\u5448\u73fe\uff0c\u540c\u6642\u8981\u517c\u9867\u670d\u52d9\u65bc\u7528\u6236\u7684\u8a2d\u8a08\u76ee\u6a19\u3002\u8a2d\u8a08\u5e2b\u4e0d\u50c5\u8981\u61c2\u5f97\u8a2d\u8a08\u539f\u7406\uff0c\u66f4\u8981\u5c07\u7368\u5275\u6027\u8207\u7522\u54c1\u601d\u7dad\u76f8\u878d\u5408\uff0c\u771f\u6b63\u63a5\u89f8\u5e02\u5834\u7684\u540c\u6642\u8df3\u812b\u51fa\u56fa\u6709\u7684\u601d\u7dad\u6a21\u5f0f\uff0c\u4ee5\u4e0d\u540c\u7684\u89d2\u5ea6\u8a8d\u77e5\u81ea\u8eab\u548c\u5468\u906d\u3002",ABOUT_ME_DESC_04:"\u85dd\u8853\u8a2d\u8a08\u7684\u904e\u7a0b\u65e2\u662f\u5c0d\u6280\u8853\u7684\u9318\u934a\uff0c\u4e5f\u662f\u8c50\u5bcc\u81ea\u5df1\u7684\u904e\u7a0b\u3002\u8a2d\u8a08\u5e2b\u8fce\u63a5\u4e26\u63a5\u7d0d\u74b0\u5883\u7684\u8b8a\u5316\u8207\u6280\u8853\u7684\u66f4\u65b0\uff0c\u85c9\u7531\u4f5c\u54c1\u5be9\u8996\u548c\u8868\u9054\u5167\u5fc3\uff0c\u4f5c\u54c1\u4ea6\u4e7e\u6de8\u800c\u5bcc\u6709\u751f\u547d\u529b\u3002",CATEGORY_WEB:"\u7db2\u9801\u8a2d\u8a08",CATEGORY_APP:"App\u8a2d\u8a08",CATEGORY_PHOTO:"\u651d\u5f71",CATEGORY_VIDEO:"\u89c6\u9891\u77ed\u7247",CATEGORY_WEBSITE:"\u7db2\u7ad9\u8a2d\u8a08",CATEGORY_POSTER:"\u6d77\u62a5\u8a2d\u8a08",CATEGORY_VISUAL_DESIGN:"\u89c6\u89c9\u8bbe\u8ba1",WORKS_DLAB_DESC:"D/lab\uff0c\u8a2d\u8a08(Design)\u4e26\u4e14\u767c\u5c55(Develop)\u6700\u5177\u5099\u985b\u8986\u5f0f\u5275\u65b0\u7684\u4e92\u806f\u7db2\u9805\u76ee\u662f\u6211\u5011\u7684\u8208\u8da3\u6e90\u6cc9\u3002\u73fe\u5728\uff0c\u6211\u5011\u6b63\u5728\u505a\u201c\u5340\u584a\u93c8+\u201d\u7684\u5617\u8a66\uff0c\u4e26\u4e14\u5df2\u7d93\u53d6\u5f97\u4e00\u4e9b\u6210\u679c\uff0c\u672a\u4f86\u6211\u5011\u6703\u5e6b\u52a9\u66f4\u591a\u9805\u76ee\u5be6\u73fe\u201c\u5340\u584a\u93c8+\u201d",WORKS_GBIB_DESC:"GBiB\u5c08\u8a3b\u65bc\u5340\u584a\u93c8\u7522\u696d\u6295\u8cc7\u670d\u52d9\uff0c\u770b\u597d\u5340\u584a\u93c8\u6280\u8853\u3001\u6578\u5b57\u8ca8\u5e63\u3001\u4ea4\u6613\u6240\u7b49\u5782\u76f4\u751f\u614b\u6240\u5e36\u4f86\u7684\u65b0\u7d93\u6fdf\u9ad4\u7cfb\u7684\u767c\u5c55\uff0c\u5e0c\u671b\u4ee5\u5176\u5c08\u696d\u7684\u6280\u8853\u624b\u6bb5\u548c\u5168\u7403\u6027\u7684\u5718\u968a\uff0c\u5728\u5340\u584a\u7489\u8fc5\u731b\u767c\u5c55\u7684\u4eca\u5929\uff0c\u70ba\u6295\u8cc7\u8005\u548c\u9805\u76ee\u4fdd\u99d5\u8b77\u822a\u3002GBiB\u7684\u4e3b\u8981\u696d\u52d9\u5305\u62ec\u6295\u8cc7\u4eba\u670d\u52d9\u548c\u9805\u76ee\u670d\u52d9\u3002\u6295\u8cc7\u4eba\u670d\u52d9\u4e3b\u8981\u6db5\u84cb\uff1a\u9805\u76ee\u76e1\u8077\u8abf\u67e5\u3001\u9867\u554f\u54a8\u8a62\u7b49\uff1b\u9805\u76ee\u670d\u52d9\u4e3b\u8981\u6db5\u84cb\uff1a\u8ca1\u52d9\u9867\u554f\u3001\u6230\u7565\u5206\u6790\u3001\u878d\u8cc7\u3001\u5168\u7403\u5316\u5e02\u5834\u62d3\u5c55\u7b49\u3002GBiB\u64c1\u6709\u5c08\u696d\u7684\u6295\u8cc7\u5206\u6790\u5718\u968a\u53ca\u9ad8\u51c8\u503cLP\u8cc7\u6e90\uff0c\u5275\u59cb\u5718\u968a\u5728\u91d1\u878d\u548c\u6295\u8cc7\u9818\u57df\u6709\u8c50\u5bcc\u7684\u7d93\u9a57\u3002\u7e3d\u90e8\u5728\u65b0\u52a0\u5761\uff0c\u76ee\u524d\u5728\u77fd\u8c37\u3001\u7d10\u7d04\u3001\u4e0a\u6d77\u3001\u502b\u6566\u3001\u591a\u502b\u591a\u3001\u6771\u4eac\u5747\u6709\u6295\u8cc7\u5408\u5925\u6a5f\u69cb\u3002",WORKS_INCPAY_DESC:"INC PAY \u662f\u4e00\u6b3e\u6578\u5b57\u8ca8\u5e63\u7684\u7ba1\u7406\u3001\u5b58\u5132\u3001\u8f49\u79fb\u3001\u5a1b\u6a02\u3001\u7406\u8ca1\u96c6\u65bc\u4e00\u8eab\u7684\u57fa\u65bc\u5340\u584a\u93c8\u7684\u624b\u6a5f\u6578\u5b57\u8ca8\u5e63\u9322\u5305 \u6578\u5b57\u8ca8\u5e63\u9322\u5305\u4f5c\u70ba\u5340\u584a\u93c8\u4e16\u754c\u7684\u5165\u53e3\uff0c\u76ee\u524d\u5340\u584a\u93c8\u9322\u5305\u6b63\u5728\u54113.0\u968e\u6bb5\u767c\u5c55\uff0c\u96a8\u8457\u5340\u584a\u93c8\u7684\u767c\u5c55\uff0c\u9322\u5305\u4e5f\u4e0d\u65b7\u7684\u9032\u5316\u8457\u5982\u679c\u4fdd\u6301\u4e0d\u524d\u53ea\u80fd\u9762\u81e8\u6dd8\u6c70\u98a8\u96aa\uff1b\u5404\u5927\u516c\u53f8\u5728\u9019\u9322\u5305\u5927\u6230\u4e2d\u90fd\u60f3\u812b\u7a4e\u800c\u51fa\uff0c\u6210\u70ba\u5340\u584a\u93c8\u9322\u5305\u4e2d\u7684\u652f\u4ed8\u5bf6",WORKS_INC_DESC:"Influence Chain \u662f\u5168\u7403\u9996\u500b\u57fa\u65bcBlockChain\u6280\u8853\u7684\u7522\u751f\u7684\u5f71\u97ff\u529b\u50f9\u503c\u6578\u64da\u5f15\u64ce\uff0c\u81f4\u529b\u65bc\u5229\u7528\u5340\u584a\u93c8\u8207\u5206\u5e03\u5f0f\u5b58\u5132\u6280\u8853\uff0c\u69cb\u5efa\u4e00\u500b\u5168\u7403\u7bc4\u570d\u5167\u7684\u5f71\u97ff\u529b\u50f9\u503c\u5e73\u53f0\u3002Influence Chain\u7684\u76ee\u6a19\u662f\u767c\u6398\u5404\u500b\u884c\u696d\u5177\u6709\u516c\u773e\u8a8d\u77e5\u5ea6\u6216\u793e\u6703\u5f71\u97ff\u529b\u7684\u9805\u76ee\u3001IP\u548c\u4eba\u7269\uff0c\u4e26\u901a\u904e\u5340\u584a\u93c8\u6280\u8853\u9ad4\u73fe\u5176\u65b0\u7dad\u5ea6\u50f9\u503c\u3002",WORKS_TEAMLAB_DESC:"teamLab\uff1a\u6cb9\u7f50\u4e2d\u7684\u6c34\u7c92\u5b50\u4e16\u754c\u3002\u6b64\u6b21\u4ee5\u81ea\u7136\u5143\u7d20\u201c\u6c34\u201d\u7232\u4e3b\u984c\u7684 teamLab\uff1a\u6cb9\u7f50\u4e2d\u7684\u6c34\u7c92\u5b50\u4e16\u754c \u5c07\u4ee5\u5b8f\u5927\u800c\u5e36\u6709\u8a7c\u8ae7\u610f\u5473\u7684\u65b9\u5f0f\u53cd\u601d\u6cb9\u7f50\u85dd\u8853\u4e2d\u5fc3\u7684\u524d\u4e16\u4eca\u751f\uff1a\u5728\u201c\u6cb9\u7f50\u201d\u4e2d\u50be\u5012\u5674\u767c\u7684\u7011\u5e03\u5347\u83ef\u4e86\u4e0a\u6d77\u6cb9\u7f50\u85dd\u8853\u4e2d\u5fc3\u81ea\u8eab\u6df1\u539a\u7684\u5de5\u696d\u610f\u8b58\uff0c\u8b93\u6574\u500b\u5f8c\u5de5\u696d\u85dd\u8853\u7a7a\u9593\u7372\u5f97\u4e86\u58f9\u7a2e\u9748\u52d5\u7684\u65b0\u8eab\u4efd\u3002"}}},[[91,1,2]]]);
//# sourceMappingURL=main.9e6079ea.chunk.js.map