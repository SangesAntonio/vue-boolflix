(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{"search-ready":e.getSearch}}),n("Main",{attrs:{movies:e.movies,searching:e.searching}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searched,expression:"searched"}],attrs:{type:"search",placeholder:"Cerca un film o serie"},domProps:{value:e.searched},on:{input:function(t){t.target.composing||(e.searched=t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){return e.sendResult()}}},[e._v("Inizia a cercare")])])},c=[],s={name:"Header",data:function(){return{searched:""}},methods:{sendResult:function(){this.$emit("search-ready",this.searched)}}},u=s,l=n("2877"),p=Object(l["a"])(u,i,c,!1,null,null,null),d=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h1",[e._v("Cerca qualcosa per iniziare")]),n("ul",{staticClass:"cards"},e._l(e.movies,(function(t,r){return n("li",{key:r,staticClass:"card"},[n("h1",[e._v(e._s(t.title))]),n("h2",[e._v(e._s(t.original_title))]),n("p",[e._v(e._s(t.original_language))]),n("p",[e._v(e._s(t.vote_average))])])})),0)])])},h=[],v={name:"Main",props:["movies","searching"],methods:{searchFilter:function(){}}},m=v,g=Object(l["a"])(m,f,h,!1,null,null,null),b=g.exports,_=n("bc3a"),y=n.n(_),O={name:"App",components:{Header:d,Main:b},data:function(){return{movies:[],searching:""}},methods:{getSearch:function(e){this.searching=e},getMovie:function(){var e=this,t={params:{api_key:"7ae9d79835583bbc51eb82040165f81f",query:"the",language:"it-IT"}};y.a.get("https://api.themoviedb.org/3/search/movie",t).then((function(t){e.movies=t.data.results}))}},mounted:function(){this.getMovie()}},j=O,w=Object(l["a"])(j,a,o,!1,null,null,null),x=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.9cd18b5e.js.map