(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5020028b"],{2377:function(e,t,a){},"5b7e":function(e,t,a){"use strict";a("2377")},cf05:function(e,t,a){e.exports=a.p+"img/logo.fd787e87.png"},f593:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{key:e.$route.path})],1)],1)],1)]),a("TheFooter")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[n("img",{attrs:{src:a("cf05"),height:"35"}})]),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},i=[],o=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Main"]},{_name:"CSidebarNavItem",name:"History",to:"/theme/history",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Compare",to:"/theme/HistoryDiff",icon:"cil-star"},{_name:"CSidebarNavItem",name:"Literature",to:"/theme/Literature",icon:"cil-chart-pie"},{_name:"CSidebarNavTitle",_children:["Scraper"]},{_name:"CSidebarNavItem",name:"Rules",to:"/theme/rules",icon:"cil-pencil"},{_name:"CSidebarNavDropdown",name:"Rule components",route:"/base",icon:"cil-puzzle",items:[{name:"Sites",to:"/base/sites"},{name:"Keywords",to:"/base/keywords"},{name:"Schedulers",to:"/base/schedulers"}]},{_name:"CSidebarNavDivider",_class:"m-2"}]}],c={name:"TheSidebar",nav:o,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},d=c,m=a("2877"),l=Object(m["a"])(d,s,i,!1,null,null,null),u=l.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),a("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[a("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),a("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/dashboard"}},[e._v(" Dashboard ")])],1),a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[e._v(" Users ")])],1)],1),a("CHeaderNav",{staticClass:"mr-4"},[a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",{attrs:{to:"/CognitoLogin",exact:""}},[a("CIcon",{attrs:{name:"cil-bell"}}),e._v(" "+e._s(e.getMsg)+" ")],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-list"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-envelope-open"}})],1)],1),a("TheHeaderDropdownAccnt")],1),a("CSubheader",{staticClass:"px-3"},[a("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},h=[],b={name:"TheHeader",components:{},computed:{getMsg:function(){return this.$store.getters.getMsg}}},p=b,v=Object(m["a"])(p,C,h,!1,null,null,null),f=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",{attrs:{fixed:!1}},[a("div",{staticClass:"mfs-auto"},[a("a",{attrs:{href:"https://phonetool.amazon.com/users/myeongsu",target:"_blank"}},[e._v("@myeongsu")]),a("span",{staticClass:"ml-1"},[e._v(" / "+e._s((new Date).getFullYear())+" ABP III")])])])},_=[],w={name:"TheFooter"},S=w,N=Object(m["a"])(S,g,_,!1,null,null,null),H=N.exports,x={name:"TheContainer",components:{TheSidebar:u,TheHeader:f,TheFooter:H}},I=x,k=(a("5b7e"),Object(m["a"])(I,n,r,!1,null,"3b21ac01",null));t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-5020028b.53af5a9b.js.map