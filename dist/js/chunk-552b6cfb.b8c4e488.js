(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-552b6cfb"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),c=n("6a99"),u=n("69a8"),a=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=i(t),e=c(e,!0),a)try{return f(t,e)}catch(n){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),o=n("0d58");n("5eda")("keys",function(){return function(t){return o(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),o=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),c=n("35e8"),u=n("07e3"),a="prototype",f=function(t,e,n){var s,p,l,d=t&f.F,v=t&f.G,b=t&f.S,m=t&f.P,y=t&f.B,h=t&f.W,g=v?o:o[e]||(o[e]={}),w=g[a],O=v?r:b?r[e]:(r[e]||{})[a];for(s in v&&(n=e),n)p=!d&&O&&void 0!==O[s],p&&u(g,s)||(l=p?O[s]:n[s],g[s]=v&&"function"!=typeof O[s]?n[s]:y&&p?i(l,r):h&&O[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):m&&"function"==typeof l?i(Function.call,l):l,m&&((g.virtual||(g.virtual={}))[s]=l,t&f.R&&w&&!w[s]&&c(w,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7abe":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.pp(e)}}},[t._v("\n    name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v("\n    pwd: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pwd,expression:"form.pwd"}],attrs:{type:"text"},domProps:{value:t.form.pwd},on:{input:function(e){e.target.composing||t.$set(t.form,"pwd",e.target.value)}}}),n("input",{attrs:{value:"提交",type:"submit"}})]),n("button",{on:{click:t.post1}},[t._v("button")])])},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){Object(i["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var a={name:"Home",props:{msg:String},data:function(){return{form:{name:"",pwd:""}}},created:function(){this.$http("get","/api/get").then(function(t){console.log(t)}).catch(function(t){console.error(t)})},methods:{pp:function(){this.$http("post","/api/register",u({},this.form),{"Content-Type":"application/x-www-form-urlencoded"}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})},post1:function(){var t={msg:"hellowd",age:12};this.$http("post","/api/register",t,{"Content-Type":"application/json;charset=utf-8"}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})}}},f=a,s=(n("810d"),n("2877")),p=Object(s["a"])(f,r,o,!1,null,"fba49d0e",null);e["default"]=p.exports},"810d":function(t,e,n){"use strict";var r=n("f199"),o=n.n(r);o.a},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(t,e,n){var r=n("5ca1"),o=n("990b"),i=n("6821"),c=n("11e9"),u=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),a=c.f,f=o(r),s={},p=0;while(f.length>p)n=a(r,e=f[p++]),void 0!==n&&u(s,e,n);return s}})},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"990b":function(t,e,n){var r=n("9093"),o=n("2621"),i=n("cb7c"),c=n("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),c=n("7726"),u=n("32e9"),a=n("84f2"),f=n("2b4c"),s=f("iterator"),p=f("toStringTag"),l=a.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(d),b=0;b<v.length;b++){var m,y=v[b],h=d[y],g=c[y],w=g&&g.prototype;if(w&&(w[s]||u(w,s,l),w[p]||u(w,p,y),a[y]=l,h))for(m in r)w[m]||i(w,m,r[m],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("85f2"),o=n.n(r);function i(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),c=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(u){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f199:function(t,e,n){},f1ae:function(t,e,n){"use strict";var r=n("86cc"),o=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-552b6cfb.b8c4e488.js.map