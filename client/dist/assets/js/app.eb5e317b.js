(function(t){function a(a){for(var n,l,r=a[0],c=a[1],o=a[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);_&&_(a);while(d.length)d.shift()();return s.push.apply(s,o||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(n=!1)}n&&(s.splice(a--,1),t=l(l.s=e[0]))}return t}var n={},i={app:0},s=[];function l(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=n,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)l.d(e,n,function(a){return t[a]}.bind(null,n));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var o=0;o<r.length;o++)a(r[o]);var _=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},2179:function(t,a,e){"use strict";e("2cbb")},"2cbb":function(t,a,e){},"598f":function(t,a,e){"use strict";e("cee1")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"7d0e":function(t,a,e){"use strict";e("8027")},8027:function(t,a,e){},"8fd0":function(t,a,e){"use strict";e("934d")},"92b8":function(t,a,e){"use strict";e("eee7")},"934d":function(t,a,e){},"9c0c":function(t,a,e){},cd49:function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=e("bc3a"),s=e.n(i),l=e("130e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)},c=[],o=(e("5c0b"),e("2877")),_=e("6544"),p=e.n(_),d=e("7496"),h={},u=Object(o["a"])(h,r,c,!1,null,null,null),v=u.exports;p()(u,{VApp:d["a"]});var g=e("f309");n["a"].use(g["a"]);var m=new g["a"]({theme:{dark:!0,themes:{dark:{primary:"#E64F97",secondary:"#E64F97",twitter:"#4F82E6",gray:"#66514C",black:"#110A09",background:{base:"#1E1310",lighten1:"#2F221F",lighten2:"#433532"},text:{base:"#FFEAEA",darken1:"#D9C7C7",darken2:"#8E7F7E"}}},options:{customProperties:!0}}}),f=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"route-container"},[e("Header"),e("v-main",[e("Navigation"),e("div",{staticClass:"channels-container",class:{"channels-container--loading":t.loading}},[e("v-tabs",{staticClass:"channels-tab",attrs:{centered:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.channels_list,(function(a,n){return e("v-tab",{key:n,staticClass:"channels-tab__item"},[t._v(t._s(n))])})),1),e("v-tabs-items",{staticClass:"channels-list",model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.channels_list,(function(a,n){return e("v-tab-item",{key:n,staticClass:"channels"},t._l(a,(function(a){return e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,staticClass:"channel",attrs:{to:"/tv/watch/"+a.channel_id}},[e("div",{staticClass:"channel__broadcaster"},[e("img",{staticClass:"channel__broadcaster-icon",attrs:{src:t.api_base_url+"/channels/"+a.channel_id+"/logo"}}),e("div",{staticClass:"channel__broadcaster-content"},[e("span",{staticClass:"channel__broadcaster-name"},[t._v("Ch: "+t._s(a.channel_number)+" "+t._s(a.channel_name))]),e("div",{staticClass:"channel__broadcaster-status"},[e("Icon",{attrs:{icon:"fa-solid:eye",height:"12px"}}),e("span",{staticClass:"ml-1"},[t._v(t._s(a.viewers))]),e("Icon",{staticClass:"ml-4",attrs:{icon:"fa-solid:fire-alt",height:"12px"}}),e("span",{staticClass:"ml-1"},[t._v(t._s(t.getAttribute(a,"channel_force","-")))]),e("Icon",{staticClass:"ml-4",attrs:{icon:"bi:chat-left-text-fill",height:"12px"}}),e("span",{staticClass:"ml-1"},[t._v(t._s(t.getAttribute(a,"channel_comment","-")))])],1)]),e("div",{staticClass:"channel__broadcaster-pin",class:{"channel__broadcaster-pin--pinned":t.isPinnedChannel(a.channel_id)},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.isPinnedChannel(a.channel_id)?t.removePinnedChannel(a.channel_id):t.addPinnedChannel(a.channel_id)},mousedown:function(t){t.preventDefault(),t.stopPropagation()}}},[e("Icon",{attrs:{icon:"fluent:pin-20-filled",width:"24px"}})],1)]),e("div",{staticClass:"channel__program-present"},[e("span",{staticClass:"channel__program-present-title",domProps:{innerHTML:t._s(t.decorateProgramInfo(a.program_present,"title"))}}),e("span",{staticClass:"channel__program-present-time"},[t._v(t._s(t.getProgramTime(a.program_present)))]),e("span",{staticClass:"channel__program-present-description",domProps:{innerHTML:t._s(t.decorateProgramInfo(a.program_present,"description"))}})]),e("v-spacer"),e("div",{staticClass:"channel__program-following"},[e("div",{staticClass:"channel__program-following-title"},[e("span",{staticClass:"channel__program-following-title-decorate"},[t._v("NEXT")]),e("Icon",{staticClass:"channel__program-following-title-icon",attrs:{icon:"fluent:fast-forward-20-filled",width:"16px"}}),e("span",{staticClass:"channel__program-following-title-text",domProps:{innerHTML:t._s(t.decorateProgramInfo(a.program_following,"title"))}})],1),e("span",{staticClass:"channel__program-following-time"},[t._v(t._s(t.getProgramTime(a.program_following)))])]),e("div",{staticClass:"channel__progressbar"},[e("div",{staticClass:"channel__progressbar-progress",style:"width:"+t.getProgramProgress(a.program_present)+"%;"})])],1)})),1)})),1)],1)],1)],1)},w=[],C=e("b85c"),y=(e("4de4"),e("a434"),e("caad"),e("2532"),e("1df6")),k=(e("99af"),e("4d63"),e("ac1f"),e("25f0"),e("5319"),e("466d"),e("5a0c")),x=e.n(k),I=(e("5999"),n["a"].extend({data:function(){var t="".concat(window.location.protocol,"//").concat(window.location.host,"/api");var a="1080p",e="0.3.0";return{api_base_url:t,default_quality:a,version:e}},methods:{decorateProgramInfo:function(t,a){if(null!==t&&a in t){var e="新|終|再|交|映|手|声|多|副|字|文|CC|OP|二|S|B|SS|無|無料C|S1|S2|S3|MV|双|デ|D|N|W|P|H|HV|SD|天|解|料|前|後初|生|販|吹|PPV|演|移|他|収|・|英|韓|中|字/日|字/日英|3D|2K|4K|8K|5.1|7.1|22.2|60P|120P|d|HC|HDR|SHV|UHD|VOD|配|初",n=new RegExp("\\((二|字|再)\\)","g"),i=new RegExp("\\[(".concat(e,")\\]"),"g"),s=t[a].replace(n,'<span class="decorate-symbol">$1</span>');return s=s.replace(i,'<span class="decorate-symbol">$1</span>'),s}return"title"==a?"放送休止":"この時間は放送を休止しています。"},getAttribute:function(t,a,e){return null!==t&&void 0!==t[a]&&null!==t[a]?t[a]:e},getChannelType:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.match("(?<channel_type>[a-z]+)[0-9]+").groups.channel_type.toUpperCase();return"GR"===e&&a?"地デジ":e},getProgramTime:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!==t&&"2000-01-01T00:00:00+09:00"!==t.start_time){x.a.locale("ja");var e=x()(t.start_time),n=x()(t.end_time),i=t.duration/60;return!0===a?"".concat(e.format("HH:mm")," ～ ").concat(n.format("HH:mm")):"".concat(e.format("YYYY/MM/DD (dd) HH:mm")," ～ ").concat(n.format("HH:mm")," (").concat(i,"分)")}return!0===a?"--:-- ～ --:--":"----/--/-- (-) --:-- ～ --:-- (--分)"},getProgramProgress:function(t){if(null!==t){var a=x()(x()()).diff(t.start_time,"second");return a/t.duration*100}return 0}}})),S=e("d4ec"),P=e("bee2"),T=function(){function t(){Object(S["a"])(this,t)}return Object(P["a"])(t,null,[{key:"getSettingsItem",value:function(a){var e=JSON.parse(localStorage.getItem("KonomiTV-Settings"))||t.default_settings;return a in e?e[a]:null}},{key:"setSettingsItem",value:function(a,e){var n=JSON.parse(localStorage.getItem("KonomiTV-Settings"))||t.default_settings;a in n&&(n[a]=e,localStorage.setItem("KonomiTV-Settings",JSON.stringify(n)))}}]),t}();T.default_settings={pinned_channel_ids:[]};var N=e("5ea9"),O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar",{attrs:{absolute:"",color:"background",elevation:"8",width:"100%",height:"65px"}},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"logo ml-6",attrs:{to:"/tv/"}},[e("img",{staticClass:"logo__image",attrs:{src:"/assets/img/logo.svg",height:"21"}})]),e("v-spacer"),e("v-btn",{staticClass:"mr-6",attrs:{icon:""}},[e("v-icon",[t._v("mdi-dots-vertical")])],1)],1)},j=[],H=(e("8fd0"),e("8336")),M=e("132d"),V=e("2fa4"),E=e("71d9"),D=e("269a"),A=e.n(D),L=e("5607"),Y={},R=Object(o["a"])(Y,O,j,!1,null,"ead70f96",null),F=R.exports;p()(R,{VBtn:H["a"],VIcon:M["a"],VSpacer:V["a"],VToolbar:E["a"]}),A()(R,{Ripple:L["a"]});var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navigation-container elevation-8"},[e("nav",{staticClass:"navigation"},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/tv/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:tv-20-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("テレビをみる")])],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/videos/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:movies-and-tv-20-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("ビデオをみる")])],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/schedules/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:calendar-ltr-20-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("番組表")])],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/captures/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:image-multiple-24-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("キャプチャ")])],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/watchlists/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"ic:round-playlist-play",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("ウォッチリスト")])],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/histories/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:history-16-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("視聴履歴")])],1),e("v-spacer"),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",to:"/settings/"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:settings-20-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("設定")])],1),e("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"navigation__link",attrs:{"active-class":"navigation__link--active",href:"https://github.com/tsukumijima/KonomiTV"}},[e("Icon",{staticClass:"navigation__link-icon",attrs:{icon:"fluent:info-16-regular",width:"26px"}}),e("span",{staticClass:"navigation__link-text"},[t._v("version "+t._s(t.version))])],1)],1)])},$=[],B=Object(y["a"])(I).extend({components:{Icon:N["a"]}}),G=B,q=(e("7d0e"),Object(o["a"])(G,K,$,!1,null,"76e70925",null)),J=q.exports;p()(q,{VSpacer:V["a"]}),A()(q,{Ripple:L["a"]});var W=Object(y["a"])(I).extend({name:"Home",components:{Header:F,Navigation:J,Icon:N["a"]},data:function(){return{tab:null,loading:!0,interval_ids:[],channels_list:null,pinned_channel_ids:[]}},created:function(){var t=this;this.update();var a=60-Math.floor((new Date).getTime()/1e3)%60;this.interval_ids.push(setTimeout((function(){t.update(),t.interval_ids.push(setInterval((function(){t.update()}),6e4))}),1e3*a))},beforeDestroy:function(){var t,a=Object(C["a"])(this.interval_ids);try{for(a.s();!(t=a.n()).done;){var e=t.value;clearInterval(parseInt(e))}}catch(n){a.e(n)}finally{a.f()}},methods:{update:function(){var t=this;n["a"].axios.get("".concat(this.api_base_url,"/channels")).then((function(a){function e(t){return t.is_display}t.channels_list={},a.data.GR.length>0&&(t.channels_list["地デジ"]=a.data.GR.filter(e)),a.data.BS.length>0&&(t.channels_list["BS"]=a.data.BS.filter(e)),a.data.CS.length>0&&(t.channels_list["CS"]=a.data.CS.filter(e)),a.data.SKY.length>0&&(t.channels_list["SKY"]=a.data.SKY.filter(e)),t.updatePinnedChannelList(),t.loading=!1}))},updatePinnedChannelList:function(){this.pinned_channel_ids=T.getSettingsItem("pinned_channel_ids");var t,a=[],e=Object(C["a"])(this.pinned_channel_ids);try{for(e.s();!(t=e.n()).done;){var i,s=t.value,l=this.getChannelType(s,!0),r=Object(C["a"])(this.channels_list[l]);try{for(r.s();!(i=r.n()).done;){var c=i.value;if(s===c.channel_id){a.push(c);break}}}catch(o){r.e(o)}finally{r.f()}}}catch(o){e.e(o)}finally{e.f()}a.length>0?"ピン留め"in this.channels_list?n["a"].set(this.channels_list,"ピン留め",a):this.channels_list=Object.assign({"ピン留め":a},this.channels_list):"ピン留め"in this.channels_list&&n["a"].delete(this.channels_list,"ピン留め")},addPinnedChannel:function(t){this.pinned_channel_ids=T.getSettingsItem("pinned_channel_ids"),this.pinned_channel_ids.push(t),T.setSettingsItem("pinned_channel_ids",this.pinned_channel_ids),this.updatePinnedChannelList()},removePinnedChannel:function(t){this.pinned_channel_ids=T.getSettingsItem("pinned_channel_ids"),this.pinned_channel_ids.splice(this.pinned_channel_ids.indexOf(t),1),T.setSettingsItem("pinned_channel_ids",this.pinned_channel_ids),this.updatePinnedChannelList()},isPinnedChannel:function(t){return this.pinned_channel_ids.includes(t)}}}),U=W,X=(e("92b8"),e("e291"),e("f6c4")),z=e("71a3"),Q=e("c671"),Z=e("fe57"),tt=e("aac8"),at=Object(o["a"])(U,b,w,!1,null,"ef8660ea",null),et=at.exports;p()(at,{VMain:X["a"],VSpacer:V["a"],VTab:z["a"],VTabItem:Q["a"],VTabs:Z["a"],VTabsItems:tt["a"]}),A()(at,{Ripple:L["a"]});var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"route-container"},[e("main",{staticClass:"watch-container",class:{"watch-container--control-visible":t.is_control_visible,"watch-container--panel-visible":t.is_panel_visible},on:{mousemove:t.controlVisibleTimer,touchmove:t.controlVisibleTimer}},[e("nav",{staticClass:"watch-navigation"},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__icon",attrs:{to:"/tv/"}},[e("img",{staticClass:"watch-navigation__icon-image",attrs:{src:"/assets/img/icon.svg",width:"23px"}})]),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/tv/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:tv-20-regular",width:"26px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/videos/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:movies-and-tv-20-regular",width:"26px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/schedules/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:calendar-ltr-20-regular",width:"26px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/captures/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:image-multiple-24-regular",width:"26px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/watchlists/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"ic:round-playlist-play",width:"26px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/histories/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:history-16-regular",width:"26px"}})],1),e("v-spacer"),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",to:"/settings/"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:settings-20-regular",width:"26px"}})],1),e("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"watch-navigation__link",attrs:{"active-class":"watch-navigation__link--active",href:"https://github.com/tsukumijima/KonomiTV"}},[e("Icon",{staticClass:"watch-navigation__link-icon",attrs:{icon:"fluent:info-16-regular",width:"26px"}})],1)],1),e("div",{staticClass:"watch-content"},[e("header",{staticClass:"watch-header"},[e("img",{staticClass:"watch-header__broadcaster",attrs:{src:t.api_base_url+"/channels/"+t.$route.params.channel_id+"/logo"}}),e("span",{staticClass:"watch-header__program-title",domProps:{innerHTML:t._s(t.decorateProgramInfo(t.channel.program_present,"title"))}}),e("span",{staticClass:"watch-header__program-time"},[t._v(t._s(t.getProgramTime(t.channel.program_present,!0)))]),e("v-spacer"),e("span",{staticClass:"watch-header__now"},[t._v(t._s(t.time))])],1),e("div",{staticClass:"watch-player",class:{"watch-player__background--visible":t.is_background_visible}},[e("div",{staticClass:"watch-player__background",style:{backgroundImage:"url("+t.background_url+")"}},[e("img",{staticClass:"watch-player__background-logo",attrs:{src:"/assets/img/logo.svg"}})]),e("div",{staticClass:"watch-player__dplayer"}),e("div",{staticClass:"watch-player__button"},[e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"switch-button switch-button-up",attrs:{to:"/tv/watch/"+t.channel_previous.channel_id}},[e("Icon",{staticClass:"switch-button-icon",attrs:{icon:"fluent:ios-arrow-left-24-filled",width:"32px",rotate:"1"}})],1),e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"switch-button switch-button-panel switch-button-panel--open",on:{click:function(a){t.is_panel_visible=!t.is_panel_visible}}},[e("Icon",{staticClass:"switch-button-icon",attrs:{icon:"fluent:navigation-16-filled",width:"32px"}})],1),e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"switch-button switch-button-down",attrs:{to:"/tv/watch/"+t.channel_next.channel_id}},[e("Icon",{staticClass:"switch-button-icon",attrs:{icon:"fluent:ios-arrow-right-24-filled",width:"33px",rotate:"1"}})],1)],1)])]),e("div",{staticClass:"watch-panel"},[e("div",{staticClass:"watch-panel__header"},[e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"panel-close-button",on:{click:function(a){t.is_panel_visible=!1}}},[e("Icon",{staticClass:"panel-close-button__icon",attrs:{icon:"akar-icons:chevron-right",width:"25px"}}),e("span",{staticClass:"panel-close-button__text"},[t._v("閉じる")])],1),e("v-spacer"),e("div",{staticClass:"panel-broadcaster"},[e("img",{staticClass:"panel-broadcaster__icon",attrs:{src:t.api_base_url+"/channels/"+t.$route.params.channel_id+"/logo"}}),e("div",{staticClass:"panel-broadcaster__number"},[t._v(t._s(t.channel.channel_number))]),e("div",{staticClass:"panel-broadcaster__name"},[t._v(t._s(t.channel.channel_name))])])],1),e("div",{staticClass:"watch-panel__content-container"},[e("div",{staticClass:"watch-panel__content program-container",class:{"watch-panel__content--active":"program"===t.tab_active}},[e("section",{staticClass:"program-info"},[e("h1",{staticClass:"program-info__title",domProps:{innerHTML:t._s(t.decorateProgramInfo(t.channel.program_present,"title"))}}),e("div",{staticClass:"program-info__time"},[t._v(t._s(t.getProgramTime(t.channel.program_present)))]),e("div",{staticClass:"program-info__description",domProps:{innerHTML:t._s(t.decorateProgramInfo(t.channel.program_present,"description"))}}),e("div",{staticClass:"program-info__genre-container"},t._l(t.getAttribute(t.channel.program_present,"genre",[]),(function(a,n){return e("div",{key:n,staticClass:"program-info__genre"},[t._v(" "+t._s(a.major)+" / "+t._s(a.middle)+" ")])})),0),e("div",{staticClass:"program-info__next"},[e("span",{staticClass:"program-info__next-decorate"},[t._v("NEXT")]),e("Icon",{staticClass:"program-info__next-icon",attrs:{icon:"fluent:fast-forward-20-filled",width:"16px"}})],1),e("span",{staticClass:"program-info__next-title",domProps:{innerHTML:t._s(t.decorateProgramInfo(t.channel.program_following,"title"))}}),e("div",{staticClass:"program-info__next-time"},[t._v(t._s(t.getProgramTime(t.channel.program_following)))]),e("div",{staticClass:"program-info__status"},[e("Icon",{attrs:{icon:"fa-solid:eye",height:"14px"}}),e("span",{staticClass:"ml-2"},[t._v(t._s(t.channel.viewers))]),e("Icon",{staticClass:"ml-5",attrs:{icon:"fa-solid:fire-alt",height:"14px"}}),e("span",{staticClass:"ml-2"},[t._v(t._s(t.getAttribute(t.channel,"channel_force","-")))]),e("Icon",{staticClass:"ml-5",attrs:{icon:"bi:chat-left-text-fill",height:"14px"}}),e("span",{staticClass:"ml-2"},[t._v(t._s(t.getAttribute(t.channel,"channel_comment","-")))])],1)]),e("section",{staticClass:"program-detail-container"},t._l(t.getAttribute(t.channel.program_present,"detail",{}),(function(a,n){return e("div",{key:n,staticClass:"program-detail"},[e("h2",{staticClass:"program-detail__heading"},[t._v(t._s(n))]),e("div",{staticClass:"program-detail__text"},[t._v(t._s(a))])])})),0)]),e("div",{staticClass:"watch-panel__content channels-container",class:{"watch-panel__content--active":"channel"===t.tab_active}},[e("v-tabs",{staticClass:"channels-tab",attrs:{centered:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.channels_list,(function(a,n){return e("v-tab",{key:n,staticClass:"channels-tab__item"},[t._v(t._s(n))])})),1),e("v-tabs-items",{staticClass:"channels-list",model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.channels_list,(function(a,n){return e("v-tab-item",{key:n,staticClass:"channels"},t._l(a,(function(a){return e("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.id,staticClass:"channel",attrs:{to:"/tv/watch/"+a.channel_id}},[e("div",{staticClass:"channel__broadcaster"},[e("img",{staticClass:"channel__broadcaster-icon",attrs:{src:t.api_base_url+"/channels/"+a.channel_id+"/logo"}}),e("div",{staticClass:"channel__broadcaster-content"},[e("span",{staticClass:"channel__broadcaster-name"},[t._v("Ch: "+t._s(a.channel_number)+" "+t._s(a.channel_name))]),e("div",{staticClass:"channel__broadcaster-status"},[e("Icon",{attrs:{icon:"fa-solid:fire-alt",height:"10px"}}),e("span",{staticClass:"ml-1"},[t._v(t._s(t.getAttribute(a,"channel_force","-")))])],1)])]),e("div",{staticClass:"channel__program-present"},[e("span",{staticClass:"channel__program-present-title",domProps:{innerHTML:t._s(t.decorateProgramInfo(a.program_present,"title"))}}),e("span",{staticClass:"channel__program-present-time"},[t._v(t._s(t.getProgramTime(a.program_present)))])]),e("div",{staticClass:"channel__program-following"},[e("div",{staticClass:"channel__program-following-title"},[e("span",{staticClass:"channel__program-following-title-decorate"},[t._v("NEXT")]),e("Icon",{staticClass:"channel__program-following-title-icon",attrs:{icon:"fluent:fast-forward-20-filled",width:"16px"}}),e("span",{staticClass:"channel__program-following-title-text",domProps:{innerHTML:t._s(t.decorateProgramInfo(a.program_following,"title"))}})],1),e("span",{staticClass:"channel__program-following-time"},[t._v(t._s(t.getProgramTime(a.program_following)))])]),e("div",{staticClass:"channel__progressbar"},[e("div",{staticClass:"channel__progressbar-progress",style:"width:"+t.getProgramProgress(a.program_present)+"%;"})])])})),1)})),1)],1)]),e("div",{staticClass:"watch-panel__navigation"},[e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"panel-navigation-button",class:{"panel-navigation-button--active":"program"===t.tab_active},on:{click:function(a){t.tab_active="program"}}},[e("Icon",{staticClass:"panel-navigation-button__icon",attrs:{icon:"fa-solid:info-circle",width:"33px"}}),e("span",{staticClass:"panel-navigation-button__text"},[t._v("番組情報")])],1),e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"panel-navigation-button",class:{"panel-navigation-button--active":"channel"===t.tab_active},on:{click:function(a){t.tab_active="channel"}}},[e("Icon",{staticClass:"panel-navigation-button__icon",attrs:{icon:"fa-solid:broadcast-tower",width:"34px"}}),e("span",{staticClass:"panel-navigation-button__text"},[t._v("チャンネル")])],1),e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"panel-navigation-button",class:{"panel-navigation-button--active":"comment"===t.tab_active},on:{click:function(a){t.tab_active="comment"}}},[e("Icon",{staticClass:"panel-navigation-button__icon",attrs:{icon:"bi:chat-left-text-fill",width:"29px"}}),e("span",{staticClass:"panel-navigation-button__text"},[t._v("コメント")])],1),e("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"panel-navigation-button",class:{"panel-navigation-button--active":"twitter"===t.tab_active},on:{click:function(a){t.tab_active="twitter"}}},[e("Icon",{staticClass:"panel-navigation-button__icon",attrs:{icon:"fa-brands:twitter",width:"34px"}}),e("span",{staticClass:"panel-navigation-button__text"},[t._v("Twitter")])],1)])])])])},it=[],st=e("3835"),lt=(e("b0c0"),e("f7a5")),rt=e.n(lt),ct=e("40b9"),ot=e.n(ct),_t=Object(y["a"])(I).extend({name:"Home",components:{Icon:N["a"]},data:function(){return{tab:null,tab_active:"program",time:x()().format("YYYY/MM/DD HH:mm:ss"),background_url:"/assets/img/player-background1.jpg",is_background_visible:!1,is_control_visible:!0,is_panel_visible:!0,interval_ids:[],control_interval_id:0,channel_id:this.$route.params.channel_id,channel:{id:"NID0-SID0",service_id:0,network_id:0,remocon_id:0,channel_id:"gr000",channel_number:"---",channel_name:"取得中…",channel_type:"GR",channel_force:0,channel_comment:0,is_subchannel:!1,is_display:!0,viewers:0,program_present:{id:"NID0-SID0-EID0",channel_id:"gr000",title:"取得中…",description:"取得中…",detail:{},start_time:"2000-01-01T00:00:00+09:00",end_time:"2000-01-01T00:00:00+09:00",duration:0,is_free:!0,genre:[],video_type:"",video_codec:"",video_resolution:"",audio_type:"",audio_sampling_rate:""},program_following:{id:"NID0-SID0-EID0",channel_id:"gr000",title:"取得中…",description:"取得中…",detail:{},start_time:"2000-01-01T00:00:00+09:00",end_time:"2000-01-01T00:00:00+09:00",duration:0,is_free:!0,genre:[],video_type:"",video_codec:"",video_resolution:"",audio_type:"",audio_sampling_rate:""}},channel_previous:{channel_id:"gr000"},channel_next:{channel_id:"gr000"},channels_list:{},player:null,eventsource:null}},created:function(){this.init()},beforeDestroy:function(){this.destroy()},beforeRouteUpdate:function(t,a,e){var n=this;this.destroy(),this.channel_id=t.params.channel_id;var i=this.getPreviousAndCurrentAndNextChannel(this.channel_id,this.channels_list),s=Object(st["a"])(i,3);this.channel_previous=s[0],this.channel=s[1],this.channel_next=s[2],this.interval_ids.push(setTimeout((function(){n.init()}),700)),e()},methods:{init:function(){var t=this;this.background_url="/assets/img/player-background".concat(Math.floor(4*Math.random())+1,".jpg"),this.controlVisibleTimer(),this.update(),this.interval_ids.push(setInterval((function(){t.time=x()().format("YYYY/MM/DD HH:mm:ss")}),1e3));var a=60-Math.floor((new Date).getTime()/1e3)%60;this.interval_ids.push(setTimeout((function(){t.update(),t.interval_ids.push(setInterval((function(){t.update()}),6e4))}),1e3*a))},update:function(){var t=this;void 0!==this.$route.params.channel_id&&n["a"].axios.get("".concat(this.api_base_url,"/channels/").concat(this.channel_id)).then((function(a){t.channel=a.data,null===t.player&&(t.initPlayer(),t.initEventHandler()),n["a"].axios.get("".concat(t.api_base_url,"/channels")).then((function(a){var e=t.channel_id;function n(t){return t.is_display||e===t.channel_id}t.channels_list={},a.data.GR.length>0&&(t.channels_list["地デジ"]=a.data.GR.filter(n)),a.data.BS.length>0&&(t.channels_list["BS"]=a.data.BS.filter(n)),a.data.CS.length>0&&(t.channels_list["CS"]=a.data.CS.filter(n)),a.data.SKY.length>0&&(t.channels_list["SKY"]=a.data.SKY.filter(n));var i=t.getPreviousAndCurrentAndNextChannel(t.channel_id,t.channels_list),s=Object(st["a"])(i,3);t.channel_previous=s[0],t.channel_next=s[2]}))})).catch((function(t){console.error(t),t.response&&422===t.response.status&&"Specified channel_id was not found"===t.response.data.detail&&(window.location.href="/404/")}))},controlVisibleTimer:function(){var t=this;clearTimeout(this.control_interval_id),this.is_control_visible=!0,this.control_interval_id=setTimeout((function(){t.is_control_visible=!1,null!==t.player&&t.player.setting.hide()}),5e3)},getPreviousAndCurrentAndNextChannel:function(t,a){for(var e=a[this.getChannelType(t,!0)],n=0;n<e.length;n++){var i=e[n];if(i.channel_id===t){var s=n-1;-1===s&&(s=e.length-1);var l=n+1;return l===e.length&&(l=0),[e[s],e[n],e[l]]}}},initPlayer:function(){var t=this;window.mpegts=ot.a,this.player=new rt.a({container:document.querySelector(".watch-player__dplayer"),volume:1,autoplay:!0,screenshot:!0,airplay:!1,live:!0,loop:!0,lang:"ja-jp",theme:"#E64F97",video:{defaultQuality:this.default_quality,quality:[{name:"1080p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/1080p/mpegts")},{name:"720p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/720p/mpegts")},{name:"540p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/540p/mpegts")},{name:"480p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/480p/mpegts")},{name:"360p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/360p/mpegts")},{name:"240p",type:"mpegts",url:"".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/240p/mpegts")}]},pluginOptions:{mpegts:{config:{enableWorker:!0,liveBufferLatencyChasing:!0,liveBufferLatencyMaxLatency:3,liveBufferLatencyMinRemain:.5}},aribb24:{normalFont:'"Windows TV MaruGothic","Hiragino Maru Gothic Pro","Yu Gothic Medium",sans-serif',gaijiFont:'"Windows TV MaruGothic","Hiragino Maru Gothic Pro","Yu Gothic Medium",sans-serif',forceStrokeColor:"black",drcsReplacement:!0,enableRawCanvas:!0,useStrokeText:!0}},subtitle:{type:"aribb24"}}),window.player=this.player,this.player.on("quality_start",(function(){t.background_url="/assets/img/player-background".concat(Math.floor(4*Math.random())+1,".jpg"),null!==t.eventsource&&(t.eventsource.close(),t.eventsource=null),t.initEventHandler()})),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:this.channel.program_present.title,artist:this.channel.channel_name,artwork:[{src:"".concat(this.api_base_url,"/channels/").concat(this.channel_id,"/logo"),sizes:"256x256",type:"image/png"}]}))},initEventHandler:function(){var t=this;this.eventsource=new EventSource("".concat(this.api_base_url,"/streams/live/").concat(this.channel_id,"/").concat(this.player.quality.name,"/events")),this.eventsource.addEventListener("status_update",(function(a){var e=JSON.parse(a.data.replace(/'/g,'"'));switch(console.log("Status: ".concat(e.status," Detail:").concat(e.detail)),t.channel.viewers=e.clients_count,e.status){case"Standby":t.player.template.notice.textContent.includes("画質を")||t.player.notice(e.detail,-1),t.is_background_visible=!0;break;case"ONAir":t.player.template.notice.textContent.includes("画質を")||t.player.notice(t.player.template.notice.textContent,1e-6),t.is_background_visible=!1;break;case"Restart":t.player.notice(e.detail,-1),t.player.switchVideo({url:t.player.quality.url,type:t.player.quality.type}),t.player.play(),t.is_background_visible=!0;break;case"Offline":setTimeout((function(){t.player.notice(e.detail,-1)}),100),t.eventsource.close(),t.is_background_visible=!0;break}})),this.eventsource.addEventListener("detail_update",(function(a){var e=JSON.parse(a.data.replace(/'/g,'"'));console.log("Status: ".concat(e.status," Detail:").concat(e.detail)),t.channel.viewers=e.clients_count,"Standby"===e.status&&(t.player.notice(e.detail,-1),t.is_background_visible||(t.is_background_visible=!0),"バッファリングしています…"===e.detail&&(t.player.video.oncanplay=function(){t.is_background_visible=!1,t.player.video.oncanplay=null}))})),this.eventsource.addEventListener("clients_update",(function(a){var e=JSON.parse(a.data.replace(/'/g,'"'));t.channel.viewers=e.clients_count}))},destroy:function(){var t,a=Object(C["a"])(this.interval_ids);try{for(a.s();!(t=a.n()).done;){var e=t.value;clearInterval(parseInt(e))}}catch(n){a.e(n)}finally{a.f()}if(this.interval_ids=[],null!==this.player){try{this.player.destroy()}catch(i){this.player.plugins.mpegts.destroy()}this.player=null}null!==this.eventsource&&(this.eventsource.close(),this.eventsource=null)}}}),pt=_t,dt=(e("598f"),e("2179"),Object(o["a"])(pt,nt,it,!1,null,"be047d78",null)),ht=dt.exports;p()(dt,{VSpacer:V["a"],VTab:z["a"],VTabItem:Q["a"],VTabs:Z["a"],VTabsItems:tt["a"]}),A()(dt,{Ripple:L["a"]});var ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"route-container"},[e("Header"),e("v-main",[e("Navigation"),e("div",{staticClass:"d-flex justify-center align-center w-100"},[e("div",{staticClass:"d-flex justify-center align-center flex-column"},[e("h1",[t._v("404 Not Found")]),e("span",{staticClass:"mt-2"},[t._v("お探しのページは存在しないか、鋭意開発中です。")])])])],1)],1)},vt=[],gt=n["a"].extend({name:"Home",components:{Header:F,Navigation:J}}),mt=gt,ft=Object(o["a"])(mt,ut,vt,!1,null,null,null),bt=ft.exports;p()(ft,{VMain:X["a"]}),n["a"].use(f["a"]);var wt=[{path:"/",redirect:"/tv/"},{path:"/tv/",name:"TV Home",component:et},{path:"/tv/watch/:channel_id",name:"TV Watch",component:ht},{path:"*",name:"NotFound",component:bt}],Ct=new f["a"]({mode:"history",base:"/",routes:wt}),yt=Ct,kt=e("9483");Object(kt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,n["a"].use(l["a"],s.a),n["a"].mixin(I),new n["a"]({router:yt,vuetify:m,render:function(t){return t(v)}}).$mount("#app")},cee1:function(t,a,e){},e291:function(t,a,e){"use strict";e("eecf")},eecf:function(t,a,e){},eee7:function(t,a,e){}});
//# sourceMappingURL=app.eb5e317b.js.map