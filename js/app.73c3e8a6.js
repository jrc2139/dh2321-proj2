(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("8a23"),a=n.n(r);a.a},"21d1":function(t,e,n){"use strict";var r=n("22fc"),a=n.n(r);a.a},"22fc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",light:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("DH2321 - Project 2 - Castronuovo")])],1),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("WorldMap")],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"world-map"}},[n("div",{staticClass:"map-wrapper"},[t.country?n("h2",{staticClass:"country-title"},[t._v(" "+t._s(t.country.name)+" ")]):t._e(),t.currentCountry?n("div",{staticClass:"country-info"},[n("h3",{staticClass:"text-center"},[t._v(" "+t._s(t.currentCountry.state)+" ")]),n("ul",[n("li",[t._v("name: "+t._s(t.currentCountry.name))])])]):t._e(),n("svg")])])},c=[],s=(n("b0c0"),n("3835")),l=(n("96cf"),n("1da1")),u=n("5698"),d=n("bc17"),p=n("ce24"),f=n("00a5"),h=n("0165"),v=n("e24e"),m=n("f965"),g=n("bc71"),w=n("d934"),b=n("d217"),j={name:"WorldMap",data:function(){return{country:void 0,currentCountry:void 0,width:0}},computed:{height:function(){return this.width/2.01803398875}},mounted:function(){this.width=this.$el.getBoundingClientRect().width,this.addResizeListener(),this.drawMap()},methods:{selectCountry:function(t){this.country=t},openInfo:function(t){this.currentCountry=t},closeInfo:function(){this.currentCountry=void 0},drawMap:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,o,c,l,j,O,C,_,I,M,V,A,P,T,B,L;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",e.next=3,Object(u["a"])(n);case 3:r=e.sent,a=Object(b["a"])(r,r.objects.countries).features,i=void 0,o={height:t.height,width:Object(f["a"])(".map-wrapper").node().getBoundingClientRect().width},c=Object(p["a"])().domain([1,20]).clamp(!0).range(["#336633","#336633"]),l=Object(m["a"])().scale(t.width/640*100).center([0,0]).translate([t.width/2,t.height/2]),j=Object(g["a"])().projection(l),O=Object(f["a"])("svg").attr("width",t.width).attr("height",t.height),C=function(){var t=h["c"].transform;I.attr("transform",t),I.attr("stroke-width",1/t.k)},_=Object(w["a"])().scaleExtent([1,8]).on("zoom",C),function(e){t.closeInfo(),i=null,M.selectAll("path").style("fill",L),O.transition().duration(750).call(_.transform,w["b"],Object(w["c"])(O.node()).invert([o.width/2,o.height/2]))},function(e){var n=j.bounds(e),r=Object(s["a"])(n,2),a=Object(s["a"])(r[0],2),c=a[0],l=a[1],u=Object(s["a"])(r[1],2),d=u[0],p=u[1];if(h["c"].stopPropagation(),e&&i!==e){var f=j.centroid(e);x=f[0],y=f[1],k=4,i=e,t.openInfo(e.properties)}else x=t.width/2,y=t.height/2,k=1,i=null,t.closeInfo();M.selectAll("path").style("fill",(function(t){return i&&t===i?"#D5708B":L(t)})),t.openInfo(e.properties),O.transition().duration(750).call(_.transform,w["b"].translate(o.width/2,o.height/2).scale(Math.min(8,.9/Math.max((d-c)/o.width,(p-l)/o.height))).translate(-(c+d)/2,-(l+p)/2),Object(v["a"])(O.node()))},O.append("rect").attr("class","background").attr("width",t.width).attr("height",t.height).on("click",V).call(_),I=O.append("g"),I.append("g").classed("effect-layer",!0),M=I.append("g").classed("map-layer",!0),c.domain([0,Object(d["e"])(a,T)]),V=function(e){var n,r,a;if(e&&i!==e){var o=j.centroid(e);n=o[0],r=o[1],a=4,i=e,t.openInfo(e.properties)}else n=t.width/2,r=t.height/2,a=1,i=null,t.closeInfo();M.selectAll("path").style("fill",(function(t){return i&&t===i?"#D5708B":L(t)})),I.transition().duration(750).attr("transform","translate("+t.width/2+","+t.height/2+")scale("+a+")translate("+-n+","+-r+")")},A=function(e,n,r){Object(f["a"])(r[n]).style("fill","#1483ce"),e&&t.selectCountry(e.properties)},P=function(e){t.selectCountry(void 0),M.selectAll("path").style("fill",(function(t){return i&&t===i?"#D5708B":L(t)}))},T=function(t){var e=B(t);return e?e.length:0},B=function(t){return t&&t.properties?t.properties.name:null},L=function(t){return c(T(t))},M.selectAll("path").data(a).enter().append("path").attr("d",j).attr("vector-effect","non-scaling-stroke").style("fill",L).on("mouseover",A).on("mouseout",P).on("click",V);case 27:case"end":return e.stop()}}),e)})))()},addResizeListener:function(){var t=this;window.addEventListener("resize",(function(){t.$data.redrawToggle=!1,setTimeout((function(){t.$data.redrawToggle=!0,t.$data.width=t.$el.getBoundingClientRect().width,t.drawMap()}),300)}))}}},O=j,C=(n("21d1"),n("2877")),_=Object(C["a"])(O,o,c,!1,null,null,null),I=_.exports,M={name:"App",components:{WorldMap:I},data:function(){return{drawer:!1,items:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}],mini:!1}}},V=M,A=(n("034f"),n("6544")),P=n.n(A),T=n("7496"),B=n("40dc"),L=n("5bc1"),$=n("a523"),R=n("a75b"),D=n("132d"),S=n("8860"),z=n("da13"),E=n("1800"),H=n("5d23"),W=n("f774"),J=n("2a7f"),N=Object(C["a"])(V,a,i,!1,null,null,null),U=N.exports;P()(N,{VApp:T["a"],VAppBar:B["a"],VAppBarNavIcon:L["a"],VContainer:$["a"],VContent:R["a"],VIcon:D["a"],VList:S["a"],VListItem:z["a"],VListItemAction:E["a"],VListItemContent:H["a"],VListItemTitle:H["b"],VNavigationDrawer:W["a"],VToolbarTitle:J["a"]});n("ac1f"),n("5319");var q=n("f309"),F=n("1f25"),G=n.n(F);r["a"].use(q["a"]);var K=new G.a({max:10,maxAge:36e5}),Q=new q["a"]({theme:{options:{themeCache:K,minifyTheme:function(t){return t.replace(/[\r\n|\r|\n]/g,"")}},themes:{light:{primary:"#8bc34a",secondary:"#cddc39",accent:"#03a9f4",error:"#f44336",warning:"#607d8b",info:"#009688",success:"#4caf50"},dark:{primary:"#8bc34a",secondary:"#cddc39",accent:"#03a9f4",error:"#f44336",warning:"#607d8b",info:"#009688",success:"#4caf50"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Q,render:function(t){return t(U)}}).$mount("#app")},"8a23":function(t,e,n){}});
//# sourceMappingURL=app.73c3e8a6.js.map