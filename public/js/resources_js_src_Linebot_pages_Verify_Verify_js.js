(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Linebot_pages_Verify_Verify_js"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@line/liff/dist/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@line/liff/dist/lib/index.js ***!
  \***************************************************/
/***/ (function(module) {

/*! For license information please see sdk.js.LICENSE.txt */!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){function t(t){for(var n,i,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);c.length;)c.shift()()}var n={},r={1:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({0:"js-crypto-ec",2:"vendors_js-crypto-ec"}[e]||e)+".81ca2bfe162150413919.js"}(e);var u=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://static.line-scdn.net/liff/edge/2/",i.oe=function(e){throw e};var o=window.webpackJsonpliff=window.webpackJsonpliff||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var u=s;return i(i.s=10)}([function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){var r,i,o;i=[],void 0===(o="function"==typeof(r=function(){var e=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var r,i,o=Math.pow,s=o(2,32),a="",u=[],c=8*t.length,l=e.h=e.h||[],f=e.k=e.k||[],d=f.length,h={},p=2;d<64;p++)if(!h[p]){for(r=0;r<313;r+=p)h[r]=p;l[d]=o(p,.5)*s|0,f[d++]=o(p,1/3)*s|0}for(t+="";t.length%64-56;)t+="\0";for(r=0;r<t.length;r++){if((i=t.charCodeAt(r))>>8)return;u[r>>2]|=i<<(3-r)%4*8}for(u[u.length]=c/s|0,u[u.length]=c,i=0;i<u.length;){var v=u.slice(i,i+=16),y=l;for(l=l.slice(0,8),r=0;r<64;r++){var m=v[r-15],w=v[r-2],g=l[0],b=l[4],_=l[7]+(n(b,6)^n(b,11)^n(b,25))+(b&l[5]^~b&l[6])+f[r]+(v[r]=r<16?v[r]:v[r-16]+(n(m,7)^n(m,18)^m>>>3)+v[r-7]+(n(w,17)^n(w,19)^w>>>10)|0);(l=[_+((n(g,2)^n(g,13)^n(g,22))+(g&l[1]^g&l[2]^l[1]&l[2]))|0].concat(l))[4]=l[4]+_|0}for(r=0;r<8;r++)l[r]=l[r]+y[r]|0}for(r=0;r<8;r++)for(i=3;i+1;i--){var I=l[r]>>8*i&255;a+=(I<16?0:"")+I.toString(16)}return a};return e.code='var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};',e})?r.apply(t,i):r)||(e.exports=o)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),i=setTimeout;function o(e){return Boolean(e&&void 0!==e.length)}function s(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(i){return void l(t.promise,i)}c(t.promise,r)}else(1===e._state?c:l)(t.promise,e._value)}))):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void h((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(o){l(e,o)}var r,i}function l(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1;try{e((function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(r){if(n)return;n=!0,l(t,r)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(s);return u(this,new d(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a((function(t,n){if(!o(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var i=r.length;function s(e,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var a=o.then;if("function"==typeof a)return void a.call(o,(function(t){s(e,t)}),n)}r[e]=o,0==--i&&t(r)}catch(u){n(u)}}for(var a=0;a<r.length;a++)s(a,r[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){if(!o(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,i=e.length;r<i;r++)a.resolve(e[r]).then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){i(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console},t.a=a}).call(this,n(6).setImmediate)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(a(arguments[t]));return e}var c,l=function(e,t){if(null==t)throw new Error(e+" is requierd")},f=function(e,t,n,r){if(void 0===r&&(r=!1),r||l(e,t),!(r&&null==t||typeof t===n))throw new Error(e+" must be a "+n)},d=function(e,t,n){void 0===n&&(n=!1),f(e,t,"string",n)},h=function(e,t,n){void 0===n&&(n=!1),f(e,t,"number",n)},p=function(e,t,n){if(l(e,t),!n.includes(t))throw new Error(e+" must be one of the followings: "+n.map((function(e){return"'"+e+"'"})).join(", "))},v=function(e){return"object"==typeof e&&"object"==typeof e.extra},y=function(e){return"function"==typeof e},m=function(e,t){switch(e){case"impression":!function(e){if("object"!=typeof e)throw new Error("ImpressionEvent must be an object");d("placeId",e.placeId),d("index",e.index,!0),d("itemIds",e.itemIds,!0)}(t);break;case"click":!function(e){if("object"!=typeof e)throw new Error("ClickEvent must be an object");d("placeId",e.placeId),d("index",e.index,!0),d("itemIds",e.itemIds,!0)}(t);break;case"media":!function(e){if("object"!=typeof e)throw new Error("MediaEvent must be an object");var t;p("action",e.action,["play","pause","end","seek"]),d("placeId",e.placeId),h("duration",e.duration),h("currentTime",e.currentTime),t=e.muted,f("muted",t,"boolean"),p("camera",e.camera,["on_front","on_back","off"]),d("index",e.index,!0),d("itemIds",e.itemIds,!0)}(t);break;case"conversion":!function(e){if("object"!=typeof e)throw new Error("ConversionEvent must be an object")}(t);break;case"custom":!function(e){if("object"!=typeof e)throw new Error("CustomEvent must be an object");d("type",e.type),d("placeId",e.placeId,!0),d("index",e.index,!0),d("itemIds",e.itemIds,!0)}(t)}},w={none:0,error:1,warn:2,info:3,debug:4},g=new(function(){function e(){this._level=w.error}return Object.defineProperty(e.prototype,"level",{set:function(e){this._level=w[e]|w.none},enumerable:!1,configurable:!0}),e.prototype.error=function(e,t){this._level},e.prototype.warn=function(e,t){this._level},e.prototype.info=function(e,t){this._level},e.prototype.debug=function(e,t){this._level},e}()),b={"^logVersion$":"lv","^sdkVersion$":"sv","^logType$":"lt","^appId$":"aid","^appEnv$":"ae","^region$":"rg","^appType$":"at","^appVersion$":"av","^appBuild$":"ab","^deviceId$":"did","^osName$":"on","^osVersion$":"ov","^networkType$":"nt","^clientId$":"cid","^anonymousId$":"anid","^adId$":"adid","^adLimit$":"al","^userId$":"uid","^experiments$":"ex","^userParams$":"up","^clientSessionId$":"sid","^sessionParams$":"sp","^screenId$":"scid","^screenName$":"sn","^title$":"ti","^referrer$":"rf","^screenParams$":"scp","^eventType$":"et","^eventName$":"en","^eventParams$":"ep","^extra$":"ext","^clientTimestamp$":"ct","^transmit$":"tt","^sequence$":"sq"},_=function(e){for(var t in b){var n=new RegExp(t);if(n.test(e))return e.replace(n,b[t])}return e},I=function(e,t){return void 0===t&&(t="https://uts-front.line-apps.com"),function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((r=r.apply(e,t||[])).next())}))}(void 0,void 0,void 0,(function(){var n,r;return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,(function(i){return n=o(o({},e),{transmit:Date.now()}),r=function(e){var t={};for(var n in e){var r=e[n];null!=r&&(t[_(n)]=r)}return t}(o(o({},e),{transmit:Date.now()})),window.MSInputMethodContext&&document.documentMode?(delete r.mid,document.createElement("IMG").src=t+"/event?d="+encodeURIComponent(JSON.stringify(r))):!navigator.sendBeacon||/OS (11|12)_\d.+Mobile/.test(navigator.userAgent)?fetch(t+"/event-web",{method:"POST",body:JSON.stringify(r),mode:"no-cors",keepalive:!0}):navigator.sendBeacon(t+"/event-web",JSON.stringify(r)),g.debug("Sent",n),[2]}))}))},T=new Uint8Array(16);function E(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(T)}var O=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function k(e){return"string"==typeof e&&O.test(e)}for(var P=[],A=0;A<256;++A)P.push((A+256).toString(16).substr(1));function N(e,t,n){var r=(e=e||{}).random||(e.rng||E)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(P[e[t+0]]+P[e[t+1]]+P[e[t+2]]+P[e[t+3]]+"-"+P[e[t+4]]+P[e[t+5]]+"-"+P[e[t+6]]+P[e[t+7]]+"-"+P[e[t+8]]+P[e[t+9]]+"-"+P[e[t+10]]+P[e[t+11]]+P[e[t+12]]+P[e[t+13]]+P[e[t+14]]+P[e[t+15]]).toLowerCase();if(!k(n))throw TypeError("Stringified UUID is invalid");return n}(r)}var x=function(e){return["category","action","label","value","dimensions"].some((function(t){return t===e}))},S=function(e){return["id","version","loginStatus"].some((function(t){return t===e}))},j=function(e){return["appId","appEnv"].some((function(t){return t===e}))},C=function(e){return["region","appVersion","appBuild","deviceId","osName","osVersion","networkType","adId","adLimit","userId","mid","tid","experiments","userParams","sessionParams","screenId","screenName","title","url","referrer","screenParams","extra"].some((function(t){return t===e}))},D=location.hostname.split(".").splice(-2).join("."),L={set:function(e,t,n){void 0===n&&(n=location.hostname);var r="https:"===location.protocol?"secure":"";document.cookie="_uts_"+e+"="+t+"; domain="+n+"; path=/; max-age=31536000; samesite=lax; "+r+";"},get:function(e,t){var n=new Map(document.cookie.split(";").map((function(e){var t=a(e.split("="),2),n=t[0],r=t[1];return[n.trim(),r]}))).get("_uts_"+e);return n&&L.set(e,n,t),n}},R=function(){var e=L.get("cid",D);return e||(e=N(),L.set("cid",e,D)),e},U=function(){var e,t=L.get("cs");if(t)try{e=JSON.parse(t)}catch(e){g.error(e)}return e},F=function(e,t){L.set("cs",JSON.stringify(e),t)},B=function(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t},M=function(e){return!(e&&"object"==typeof e&&"string"==typeof e.sid&&"number"==typeof e.expiredAt)},V=function(e){return e?B(e):void 0},W=function(){function e(e,t){var n,r,i,o;void 0===t&&(t=18e5),this._domain=e,this._duration=t,this._session=U(),this._params=null===(n=this._session)||void 0===n?void 0:n.sp,this._mc=null===(r=this._session)||void 0===r?void 0:r.mc,this._tc=null===(i=this._session)||void 0===i?void 0:i.tc,this._uc=null===(o=this._session)||void 0===o?void 0:o.uc}return e.prototype.renew=function(){this._params=M(this._session)?this._params:void 0,this._session={sp:this._params,mc:this._mc,tc:this._tc,uc:this._uc},F(this._session,this._domain)},Object.defineProperty(e.prototype,"info",{get:function(){var e,t,n,r,i;this._session=U(),this._session||(g.debug("Session info is not found in cookies"),this._params=void 0,this._mc=this._tc=this._uc=void 0,this.renew());var o=(null!==(t=null===(e=this._session)||void 0===e?void 0:e.expiredAt)&&void 0!==t?t:0)<Date.now(),s=!o&&(null===(n=this._session)||void 0===n?void 0:n.sid)?this._session.sid:N(),a=o||null==(null===(r=this._session)||void 0===r?void 0:r.sq)?0:(null===(i=this._session)||void 0===i?void 0:i.sq)+1;return this._params=!M(this._session)&&o?void 0:this._params,this._session={sid:s,sq:a,expiredAt:Date.now()+this._duration,sp:this._params,mc:this._mc,tc:this._tc,uc:this._uc},F(this._session,this._domain),this._session},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"user",{set:function(e){var t=e.mid,n=e.tid,r=e.userId;this._mc=V(t),this._tc=V(n),this._uc=V(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){var e;return null!==(e=this._params)&&void 0!==e?e:{}},set:function(e){this._params=e},enumerable:!1,configurable:!0}),e.prototype.isChanged=function(e){var t,n=e.mid,r=e.tid,i=e.userId,o=e.sessionParams,s=V(n),a=V(r),u=V(i);return s!=this._mc||a!=this._tc||u!=this._uc||!(!o||function(e,t){var n,r,i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;try{for(var s=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(i),a=s.next();!a.done;a=s.next()){var u=a.value;if(e[u]!==t[u])return!1}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}return!0}(null!==(t=this._params)&&void 0!==t?t:{},null!=o?o:{}))},e}(),$="NOT_INITIALIZED",q="INVALID_EVENT",G=function(e){function t(t,n){var r=e.call(this,n)||this;return t&&(r.name=t),r}return i(t,e),t}(Error),K=function(){function e(e,t){this._required=e,this._optional={},this._dimensions={};try{!function(e){if("object"!=typeof e)throw new Error("RequiredContext must be an object");d("appId",e.appId),p("appEnv",e.appEnv,["local","dev","alpha","beta","rc","release"])}(e)}catch(e){throw new G("INVALID_CONTEXT",e.message)}for(var n in e)this.removeInvalidContext(n,e,j);this._clientId=R(),this._session=new W(null==t?void 0:t.sessionDomain,null==t?void 0:t.sessionDuration)}return Object.defineProperty(e.prototype,"clientId",{get:function(){return this._clientId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sessionParams",{get:function(){var e;return null!==(e=this._sessionParams)&&void 0!==e?e:this._session.params},enumerable:!1,configurable:!0}),e.prototype.context=function(e){for(var t in e){var n=e[t];"sessionParams"!==t?/^dimension([0-9]|1[0-9])$/.test(t)?this._dimensions[t]=n:this.removeInvalidContext(t,e,C)||(this._optional[t]="extra"===t?o(o({},this._optional.extra),n):n):this._sessionParams=n}return this},e.prototype.event=function(e){var t=e.type,n=e.event,r=e.timestamp;return this._eventType=t,this._event=n,this._timestamp=r,this},e.prototype.extra=function(e){return this._extra=e,this},e.prototype.build=function(){var e,t;if("pageview"!==(t=this._eventType)&&"impression"!==t&&"click"!==t&&"media"!==t&&"foreground"!==t&&"background"!==t&&"conversion"!==t&&"custom"!==t)throw new G("INVALID_EVENT_TYPE",this._eventType);var n=this.buildExtra(),r=n.extra,i=n.dimensions,s=this.buildEventParams(i),a=s.eventName,u=s.eventParams,c=R();this._clientId!==c&&(g.debug("clientId is not found in cookies"),this._clientId=c,this._session.renew()),this._session.isChanged(o(o({},this._optional),{sessionParams:this._sessionParams}))&&(this._session.renew(),this._session.user=this._optional,this._sessionParams&&(this._session.params=this._sessionParams));var l=this._session.info;return g.debug("Session",l),o(o(o(o(o({},o(o({screenName:location.pathname,title:document.title,url:location.href,referrer:document.referrer},this._required),this._optional)),{logVersion:2,logType:"normal",sdkVersion:"3.0.5",appType:"web",clientId:c,clientSessionId:l.sid,sequence:l.sq,sessionParams:l.sp,eventType:this._eventType,eventName:a}),u),r),{clientTimestamp:null!==(e=this._timestamp)&&void 0!==e?e:Date.now()})},e.prototype.buildExtra=function(){var e,t,n,r,i=null!==(t=null===(e=this._optional)||void 0===e?void 0:e.extra)&&void 0!==t?t:{},a=i.wts,u=i.liff,c=o(o({},a),null===(n=this._extra)||void 0===n?void 0:n.wts),l=c.dimensions,f=s(c,["dimensions"]),d=o(o({},u),null===(r=this._extra)||void 0===r?void 0:r.liff);for(var h in f)this.removeInvalidContext(h,f,x);for(var h in d)this.removeInvalidContext(h,d,S);var p={};return Object.keys(f).length&&(p.wts=JSON.stringify(f)),Object.keys(d).length&&(p.liff=JSON.stringify(d)),{extra:Object.keys(p).length?{extra:p}:void 0,dimensions:o(o({},this._dimensions),l)}},e.prototype.buildEventParams=function(e){var t,n,r,i=null!==(t=this._event)&&void 0!==t?t:{},a=i.screenName,u=i.title,c=i.eventName,l=s(i,["screenName","title","eventName"]),f=o(o({},l),e);switch(this._eventType){case"pageview":this._optional.screenId=N(),this._optional.screenName=null!==(n=null!=a?a:this._optional.screenName)&&void 0!==n?n:location.pathname,this._optional.title=null!==(r=null!=u?u:this._optional.title)&&void 0!==r?r:document.title}return{eventName:c,eventParams:Object.keys(f).length?{eventParams:f}:{}}},e.prototype.removeInvalidContext=function(e,t,n){var r=!1;return(null==n?void 0:n(e))||(g.warn("Unknown key:",e),delete t[e],r=!0),r},e}(),J=function(e,t){void 0===t&&(t=100);var n=B(e);return Math.abs(n%100)<t},H=function(){function e(){}return e.prototype.init=function(e,t){var n=t||{},r=n.endpoint,i=n.sampleRate,o=n.logLevel,s=void 0===o?"error":o;g.level=s,this.endpoint=r,this.sampleRate=i,this.logBuilder=new K(e,t),g.debug("Initialized",{version:"3.0.5",logVersion:2,clientId:this.logBuilder.clientId})},e.prototype.set=function(e){var t;null===(t=this.logBuilder)||void 0===t||t.context(e)},e.prototype.add=function(e){var t;e.sessionParams&&this.set({sessionParams:o(o({},null===(t=this.logBuilder)||void 0===t?void 0:t.sessionParams),e.sessionParams)})},e.prototype.setRegion=function(e){this.set({region:e})},e.prototype.setAppVersion=function(e){this.set({appVersion:e})},e.prototype.setAppBuild=function(e){this.set({appBuild:e})},e.prototype.setDeviceId=function(e){this.set({deviceId:e})},e.prototype.setOSName=function(e){this.set({osName:e})},e.prototype.setOSVersion=function(e){this.set({osVersion:e})},e.prototype.setNetworkType=function(e){this.set({networkType:e})},e.prototype.setAdId=function(e){this.set({adId:e})},e.prototype.setAdLimit=function(e){this.set({adLimit:e})},e.prototype.setUserId=function(e){this.set({userId:e})},e.prototype.setMid=function(e){this.set({mid:e})},e.prototype.setTid=function(e){this.set({tid:e})},e.prototype.setExperiments=function(e){this.set({experiments:e})},e.prototype.setUserParams=function(e){this.set({userParams:e})},e.prototype.setSessionParams=function(e){this.set({sessionParams:e})},e.prototype.addSessionParams=function(e){this.add({sessionParams:e})},e.prototype.setScreenName=function(e){this.set({screenName:e})},e.prototype.setUrl=function(e){this.set({url:e})},e.prototype.setTitle=function(e){this.set({title:e})},e.prototype.setReferrer=function(e){this.set({referrer:e})},e.prototype.setScreenParams=function(e){this.set({screenParams:e})},e.prototype.setExtra=function(e,t){var n;this.set({extra:(n={},n[e]=t,n)})},e.prototype.send=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n,r,i,o=Date.now(),s=e[0];if("pageview"!==s&&"foreground"!==s&&"background"!==s){n=e[1],4===e.length?(r=e[2],i=e[3]):y(e[2])?i=e[2]:r=e[2];try{m(s,n)}catch(e){var a=new G(q,e.message);return g.error(a),void(null==i||i(a))}}else 4===e.length?(n=e[1],r=e[2],i=e[3]):3===e.length?y(e[2])?(v(e[1])?r=e[1]:n=e[1],i=e[2]):(n=e[1],r=e[2]):v(e[1])?r=e[1]:y(e[1])?i=e[1]:n=e[1];try{if(!this.logBuilder)return a=new G($),g.error(a),void(null==i||i(a));if(!J(this.logBuilder.clientId,this.sampleRate))return void g.info(this.logBuilder.clientId+" is untracked");var u=this.logBuilder.event({type:s,event:n,timestamp:o}).extra(null==r?void 0:r.extra).build();I(u,this.endpoint),null==i||i()}catch(a){g.error(a),null==i||i(a)}},e.prototype.sendPageview=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["pageview"],e))},e.prototype.sendImpression=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["impression"],e))},e.prototype.sendClick=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["click"],e))},e.prototype.sendMedia=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["media"],e))},e.prototype.sendForeground=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["foreground"],e))},e.prototype.sendBackground=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["background"],e))},e.prototype.sendConversion=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["conversion"],e))},e.prototype.sendCustom=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.send.apply(this,u(["custom"],e))},e}(),X=new(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.queue=[],t}return i(t,e),t.prototype.init=function(e,t){var n=this;this.uts?this.uts.init(e,t):function(e,t){void 0===e&&(e="stable");var n=document.createElement("SCRIPT");n.src=function(e){return"https://static.line-scdn.net/uts/edge/"+function(e){return"current"===e?"3.0.5":e}(e)+"/uts.js?cb=1608205558145"}(e),n.onload=t,document.head.appendChild(n)}(null==t?void 0:t.version,(function(){window.uts&&(n.uts=Object.create(window.uts),n.uts.init(e,t),n.queue.forEach((function(e){n.uts[e.func].apply(n.uts,u(e.args))})),n.queue.length=0,window.uts=void 0)}))},t.prototype.set=function(e){this.uts?this.uts.set(e):this.queue.push({func:"set",args:[e]})},t.prototype.send=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this.uts?(e=this.uts).send.apply(e,u(t)):this.queue.push({func:"send",args:u(t)})},t}(H));t.UTS=H,t.default=X},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(8),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){"use strict";(function(e){var t=n(3),r=n(0),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"Promise"in i?i.Promise.prototype.finally||(i.Promise.prototype.finally=r.a):i.Promise=t.a}).call(this,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,s,a,u=1,c={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(s="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&p(+t.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(s+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[u]=i,r(u),u++},d.clearImmediate=h}function h(e){delete c[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(5))},function(e,t){!function(){if("function"!=typeof window.CustomEvent){function e(e,t){var n=t||{},r=n.bubbles,i=void 0!==r&&r,o=n.cancelable,s=void 0!==o&&o,a=n.detail,u=void 0===a?void 0:a,c=document.createEvent("CustomEvent");return c.initCustomEvent(e,i,s,u),c}e.prototype=Event.prototype,window.CustomEvent=e}}()},function(e,t,n){"use strict";n.r(t),n.d(t,"liff",(function(){return Jt}));var r="URLSearchParams"in self,i="Symbol"in self&&"iterator"in Symbol,o="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in self,a="ArrayBuffer"in self;if(a)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&u.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function f(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function p(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function v(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function y(e){var t=new FileReader,n=v(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a&&o&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=v(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=l(e),t=f(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},h.prototype.delete=function(e){delete this.map[l(e)]},h.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},h.prototype.set=function(e,t){this.map[l(e)]=f(t)},h.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},i&&(h.prototype[Symbol.iterator]=h.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){var n,r,i=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function _(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function I(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},w.call(b.prototype),w.call(I.prototype),I.prototype.clone=function(){return new I(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},I.error=function(){var e=new I(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];I.redirect=function(e,t){if(-1===T.indexOf(t))throw new RangeError("Invalid status code");return new I(null,{status:t,headers:{location:e}})};var E=self.DOMException;try{new E}catch(Ht){(E=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function O(e,t){return new Promise((function(n,r){var i=new b(e,t);if(i.signal&&i.signal.aborted)return r(new E("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var e,t,r={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var i="response"in s?s.response:s.responseText;n(new I(i,r))},s.onerror=function(){r(new TypeError("Network request failed"))},s.ontimeout=function(){r(new TypeError("Network request failed"))},s.onabort=function(){r(new E("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&o&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}O.polyfill=!0,self.fetch||(self.fetch=O,self.Headers=h,self.Request=b,self.Response=I);n(7);var k=function(e,t){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function P(e,t){function n(){this.constructor=e}k(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var A,N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function x(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))}function S(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function j(){if(!A){var e=window.navigator.userAgent.toLowerCase();A=/iphone|ipad|ipod/.test(e)?"ios":/android/.test(e)?"android":"web"}return A}function C(e,t){if(e===t)return 0;for(var n=e.split("."),r=t.split("."),i=Math.max(n.length,r.length),o=0;o<i;o++){n[o]||(n[o]="0"),r[o]||(r[o]="0");var s=parseInt(n[o])-parseInt(r[o]);if(0!==s)return s>0?1:-1}return 0}function D(){var e=navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);return e?e[0].slice(5):null}var L="INIT_FAILED",R="LIFF_STORE",U={ACCESS_TOKEN:"accessToken",ID_TOKEN:"IDToken",DECODED_ID_TOKEN:"decodedIDToken",FEATURE_TOKEN:"featureToken",FEATURES:"features",LOGIN_TMP:"loginTmp",CONFIG:"config",CONTEXT:"context",EXPIRES:"expires",RAW_CONTEXT:"rawContext",CLIENT_ID:"clientId",IS_SUBSEQUENT_LIFF_APP:"isSubsequentLiffApp"},F=["context_token","feature_token","access_token","id_token","client_id"],B=["openWindow","closeWindow"],M=["liff.ref.source","liff.ref.medium","liff.ref.campaign","liff.ref.term","liff.ref.content"];var V=null;function W(){var e;return null===V&&(void 0===e&&(e=window.navigator.userAgent),V=/Line\/\d+\.\d+\.\d+ LIFF/.test(e)||function(e){return void 0===e&&(e=window.navigator.userAgent),/Line\/\d+\.\d+\.\d+/.test(e)}()&&/[#|&]access_token=/.test(location.hash)||"1"===sessionStorage.getItem(R+":isInClient"),sessionStorage.setItem(R+":isInClient",V?"1":"0")),!!V}var $=new Set(["400","401","403","404","429","500"]),q=function(e){function t(t,n){var r=e.call(this,n)||this;return r.code=t,r}return P(t,e),t}(Error);function G(e,t){return new q(e,t||"")}function K(e){return function(e,t){if(!t)throw G("INVALID_CONFIG","liffId is necessary for liff.init()");var n=(W()?sessionStorage:localStorage).getItem(R+":"+t+":"+e);try{return null===n?null:JSON.parse(n)}catch(r){return null}}(e,Y().liffId)}function J(e,t){var n=Y().liffId;if(!n)throw G("INVALID_CONFIG","liffId is necessary for liff.init()");(W()?sessionStorage:localStorage).setItem(R+":"+n+":"+e,JSON.stringify(t))}function H(e){var t=Y().liffId;if(!t)throw G("INVALID_CONFIG","liffId is necessary for liff.init()");(W()?sessionStorage:localStorage).removeItem(R+":"+t+":"+e)}var X={set:function(e,t,n){var r=e+"="+t;if(n)for(var i in n){r+="; "+i+(n[i]?"="+n[i]:"")}document.cookie=r},get:function(e){var t=new RegExp("(?:(?:^|.*;\\s*)"+e+"\\s*\\=\\s*([^;]*).*$)|^.*$");return document.cookie.replace(t,"$1")},remove:function(e,t){var n=e+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";if(t)for(var r in t)n+="; "+r+"="+t[r];document.cookie=n}},z={get:K,set:J,remove:H,clean:function(){var e;Object.keys(U).forEach((function(e){H(U[e])})),e=Y(),X.remove(R+":"+U.EXPIRES+":"+e.liffId,{path:"/"})}},Q={};function Y(){return Q}function Z(){return K(U.FEATURES)}function ee(e){J(U.FEATURES,e)}function te(){return K(U.LOGIN_TMP)}function ne(){H(U.LOGIN_TMP)}function re(){return K(U.ACCESS_TOKEN)}function ie(e){J(U.ACCESS_TOKEN,e)}var oe;function se(){return K(U.ID_TOKEN)}function ae(e){J(U.ID_TOKEN,e)}function ue(){return K(U.DECODED_ID_TOKEN)}function ce(e){J(U.DECODED_ID_TOKEN,e)}function le(){return K(U.FEATURE_TOKEN)}function fe(e){J(U.FEATURE_TOKEN,e)}function de(){return K(U.CONTEXT)}function he(e){J(U.CONTEXT,e)}var pe={isLiffSuccessful:!1,isLoggedIn:!1,id:"",version:""};function ve(e){Object.assign(pe,e)}function ye(){return!!re()}function me(){var e;return!(e=Y(),X.get(R+":"+U.EXPIRES+":"+e.liffId))}function we(){z.clean()}function ge(e){return Object.keys(e).map((function(t){var n=e[t],r=function(e){return void 0!==e?encodeURIComponent(t)+"="+encodeURIComponent(e):encodeURIComponent(t)};return Array.isArray(n)?n.map((function(e){return r(e)})).join("&"):r(n)})).join("&")}var be={parse:function(e){return e.replace(/^\?/,"").replace(/^#\/?/,"").split(/&+/).filter((function(e){return e.length>0})).reduce((function(e,t){var n=t.split("=").map(decodeURIComponent),r=n[0],i=n[1],o=e[r];return Array.isArray(o)?o.push(i):Object.prototype.hasOwnProperty.call(e,r)?e[r]=[o,i]:e[r]=i,e}),{})},stringify:ge},_e="",Ie=function(){var e=de();if(!e)throw G(L,"Could not get Context from server.");if(!e.endpointUrl)throw G(L,"Could not get endpointUrl from server.");if(!e.permanentLinkPattern)throw G(L,"Could not get permanentLinkPattern from server.");return e};function Te(e){return x(this,void 0,void 0,(function(){var t,n,r;return S(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),t=location.href,(n=function(e){var t=Ie(),n=e,r=new URL(t.endpointUrl),i=r.origin,o=r.pathname,s=r.search,a=t.permanentLinkPattern,u=n.indexOf("?"),c=n.indexOf("#",u+1),l=n.substring(0,u>=0?u:c>=0?c:n.length),f=c>-1?"#"+n.substring(c+1):"",d=u>-1?n.substring(u+1,c<0?void 0:c):"";if("replace"===a){if(!l&&!d&&!f)return window.location.href;var h=function(e){return e.replace(/\/{2,}/g,"/")}("/"+(l||"/"));return""+window.location.origin+h+(d?"?"+d:"")+f}l.length>0&&("/"===l?l="":n.startsWith("/")||(l="/"+l));var p=f.split("&").filter((function(e){return!/^context_token/.test(e)})).join("&");if(d){var v=s?s.substring(1)+"&":"";n=l+"?"+v+d+p}else n=""+l+s+p;return""+i+function(){switch(!0){case"/"===o:return"";case o.endsWith("/")&&l.startsWith("/"):return o.substring(0,o.length-1);default:return o}}()+n}(e))===t?[3,2]:(location.replace(n),[4,new Promise((function(){}))]);case 1:i.sent(),i.label=2;case 2:return[3,4];case 3:if((r=i.sent()).code===L)throw r;return[3,4];case 4:return[2]}}))}))}function Ee(e){var t={};Object.keys(e).forEach((function(n){if(M.includes(n)){var r=e[n];"string"==typeof r&&r&&(t[n.replace(/^liff\.ref\./,"")]=r)}})),Object.keys(t).length>0&&function(e){oe=e}(t)}var Oe=n(1),ke=n.n(Oe);function Pe(e){return(t=ke()(e),n="",t.replace(/\r|\n/g,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ").forEach((function(e){n+=String.fromCharCode(parseInt(e))})),window.btoa(n)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");var t,n}var Ae="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function Ne(e){for(var t="",n=0;n<e;n++)t+=Ae[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967296*Ae.length)];return t}function xe(e){var t=e.subdomain;return"https://"+(void 0===t?"api":t)+".line.me/"+e.pathname}var Se={token:xe({pathname:"oauth2/v2.1/token"}),certs:xe({pathname:"oauth2/v2.1/certs"}),"openid-configuration":xe({subdomain:"access",pathname:".well-known/openid-configuration"}),authorize:xe({subdomain:"access",pathname:"liff/v1/authorize"}),profile:xe({pathname:"v2/profile"}),message:xe({pathname:"message/v3/share"}),messageOTT:xe({pathname:"message/v3/multisend?type=ott"}),friendship:xe({pathname:"friendship/v1/status"}),shareTargetPicker:xe({subdomain:"access",pathname:"oauth2/v2.1/liff/shareTargetPicker"}),shareTargetPickerOtt:xe({pathname:"liff/v2/apps"}),shareTargetPickerResult:xe({subdomain:"access",pathname:"oauth2/v2.1/liff/shareTargetPicker/result"}),apps:xe({pathname:"liff/v2/apps"})};function je(e){return Se[e]||""}function Ce(){return"2.8.0"}function De(e){var t=Ne(43),n=Pe(t),r=Y();if(!r||!r.liffId)throw G("INVALID_CONFIG","You need to define `liffId` for liff.login()");var i={app_id:r.liffId,state:Ne(12),response_type:"code",code_challenge_method:"S256",code_challenge:n,liff_sdk_version:"2.8.0"};e&&e.redirectUri&&(i.redirect_uri=e.redirectUri),J(U.LOGIN_TMP,{codeVerifier:t});var o=je("authorize")+"?"+be.stringify(i);window.location.href=o}var Le={},Re=!1;function Ue(e,t){Re||(Re=!0,window.addEventListener("liffEvent",(function(e){e&&e.detail&&e.detail.type&&Le[e.detail.type]&&Le[e.detail.type].forEach((function(t){return t(e)}))}))),Le[e]?Le[e].push(t):Le[e]=[t]}function Fe(e,t){var n=Le[e];if(n&&Array.isArray(n)){var r=n.indexOf(t);r>=0&&n.splice(r,1)}}var Be=function(e){return Object.entries(e).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(function(t){if("object"==typeof t)try{return JSON.stringify(t)}catch(e){return""+t}return""+t}(n))})).join("&")};function Me(e,t){!function(e,t){var n=!1,r=document.createElement("img");if(r.width=1,r.height=1,"function"==typeof t){var i=function(){n||(t(r),n=!0)};r.onload=i,setTimeout(i,1500)}r.src="https://torimochi.line-apps.com/1/req?"+Be(e)}({cid:"liff",eventType:"debug",timestamp:Date.now(),logVersion:"1.6.9",threshold:0,productKey:"liff-real",productVersion:"latest",url:location.href,host:location.hostname,path:location.pathname,query:location.search,hash:location.hash,referrer:document.referrer,userId:"liff",sessionId:"none",sessionPath:"",sessionQuery:"",sessionTime:"0",sessionDuration:"0",sessionParams:{},touchX:"0",touchY:"0",scrollX:"0",scrollY:"0",windowX:"0",windowY:"0",targets:[],content:{debug:{message:e}}},t)}function Ve(e){var t=e.split(".");if(t[1])try{var n=t[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(n))}catch(r){return null}return null}function We(e){return window.atob(e.replace(/-/g,"+").replace(/_/g,"/"))}function $e(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function qe(e){return x(this,void 0,void 0,(function(){var t,n,r;return S(this,(function(i){switch(i.label){case 0:if(!e.ok)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,e.json()];case 2:return[2,i.sent()];case 3:return i.sent(),[2,e];case 4:return t=String(e.status),n=$.has(t)?t:"UNKNOWN",[4,e.json().catch((function(){throw G(n,e.statusText)}))];case 5:throw G((r=i.sent()).error||n,r.error_description||r.message)}}))}))}function Ge(e){var t=function(e){if(e)return e;var t=re();if(!t)throw G("UNAUTHORIZED","Need access_token for api call, Please login first");return{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}}(e&&e.headers);return N(N({},e),{headers:t})}function Ke(e,t){var n;try{n=Ge(t)}catch(r){return Promise.reject(r)}return fetch(e,n).then(qe)}var Je=function(){return x(this,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return[4,Ke(je("certs"))];case 1:return[2,e.sent()]}}))}))},He=function(){return"ios"===j()&&(null!==(e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&parseInt(e[1],10)<=10);var e};function Xe(e,t,r){return x(this,void 0,void 0,(function(){var i,o,s,a;return S(this,(function(u){switch(u.label){case 0:return He()?[4,Promise.all([n.e(2),n.e(0)]).then(n.t.bind(null,242,7))]:[3,2];case 1:return o=u.sent(),s=o.default,i=s.verify(t,r,e,"SHA-256","raw"),[3,5];case 2:return[4,crypto.subtle.importKey("jwk",e,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"])];case 3:return a=u.sent(),[4,crypto.subtle.verify({name:"ECDSA",hash:{name:"SHA-256"}},a,r,t)];case 4:i=u.sent(),u.label=5;case 5:return[2,i]}}))}))}function ze(e,t){return x(this,void 0,void 0,(function(){var n,r,i,o,s,a,u,c,l,f,d,h,p,v;return S(this,(function(y){switch(y.label){case 0:return n=e.split("."),r=n[0],i=n[1],o=n[2],s=JSON.parse(We(r)),a=JSON.parse((m=We(i).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""),decodeURIComponent(m))),u=$e(We(o)),c=$e(r+"."+i),[4,Je()];case 1:if(l=y.sent(),!(f=l.keys.find((function(e){return e.kid===s.kid}))))return[3,6];if(delete f.alg,"ES256"!==s.alg)throw G("INVALID_ID_TOKEN",'Invalid "alg" value in ID_TOKEN');d=void 0,y.label=2;case 2:return y.trys.push([2,4,,5]),[4,Xe(f,c,u)];case 3:return d=y.sent(),[3,5];case 4:throw G("INVALID_ID_TOKEN","Failed to use Crypto API to verify ID_TOKEN: "+y.sent());case 5:if(d){if(h="https://access.line.me"!==a.iss,p=a.aud!==t,v=1e3*a.exp<Date.now(),h)throw G("INVALID_ID_TOKEN",'Invalid "iss" value in ID_TOKEN');if(p)throw G("INVALID_ID_TOKEN",'Invalid "aud" value in ID_TOKEN');if(v)throw G("INVALID_ID_TOKEN",'Invalid "exp" value in ID_TOKEN');return[2,a]}throw G("INVALID_ID_TOKEN","Invalid signature in ID_TOKEN");case 6:throw G("INVALID_ID_TOKEN",'Invalid "kid" value in ID_TOKEN');case 7:return[2]}var m}))}))}function Qe(e){var t=e.pathname,n=e.query;return x(this,void 0,void 0,(function(){var e,r;return S(this,(function(i){return e=n?"?"+ge(n):"",r="liff://"+t+e,location.href=r,[2]}))}))}var Ye=["shareTargetPicker","multipleLiffTransition"],Ze={shareTargetPicker:function(){if(!ye())return!1;var e=de();if(!e)return!1;var t=e.availability.shareTargetPicker,n=t.permission,r=t.minVer;if(!n)return!1;if(W()){var i=D();return null!==i&&C(i,r)>=0}return!0},multipleLiffTransition:function(){var e=de();if(!e||!e.availability)return!1;var t=e.availability.multipleLiffTransition.permission;return W()&&t}},et=function(e){if(!Ye.includes(e))throw G("INVALID_ARGUMENT","Unexpected API name.");var t=Ze[e];return!t||t()};function tt(e,t){return x(this,void 0,void 0,(function(){return S(this,(function(n){switch(n.label){case 0:return et("multipleLiffTransition")?[4,Promise.all([new Promise((function(e,t){Ue("liffIdReceived",(function n(r){Fe("liffIdReceived",n),r.detail.data&&r.detail.data.result?e():t(G(L))}))})),Qe({pathname:"app/"+e,query:{feature_token:t}})])]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))}var nt=null;function rt(){return!!Boolean(K(U.IS_SUBSEQUENT_LIFF_APP))||!(!W()||be.parse(window.location.hash).feature_token||le())&&(J(U.IS_SUBSEQUENT_LIFF_APP,!0),!0)}function it(){"boolean"==typeof nt&&function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=console.warn;n.apply(void 0,e)}("liff.init is not expected to be called more than once"),nt=rt()}function ot(){return Boolean(nt)}function st(e){return Ke(je("apps")+"/"+e+"/featureToken")}function at(e){return x(this,void 0,void 0,(function(){var t,n,r,i,o,s,a;return S(this,(function(u){switch(u.label){case 0:return t=be.parse(window.location.hash),n=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=function(t){Object.keys(t).filter((function(e){return null!==t[e]&&void 0!==t[e]})).forEach((function(n){e[n]=t[n]}))},i=0,o=t;i<o.length;i++){var s=o[i];r(s)}return e}({access_token:re(),context_token:K(U.RAW_CONTEXT),feature_token:le(),id_token:se(),client_id:K(U.CLIENT_ID)},t),ot()?ye()?[4,st(e)]:[3,2]:[3,3];case 1:i=u.sent(),o=i.featureToken,s=i.features,r=s,n.feature_token||(n.feature_token=o),u.label=2;case 2:(a=function(e){var t=e.match(/([^-]+)-[^-]+/);return t&&t[1]}(e))&&(n.client_id=a),u.label=3;case 3:return[2,{credentials:n,features:r}]}}))}))}function ut(e){if(e.persisted&&et("multipleLiffTransition"))if("ios"===j())window.location.reload();else{var t=Y().liffId,n=le();if(!t)throw G(L,"Invalid LIFF ID.");if(!n)throw G("FORBIDDEN","Invalid featureToken for client features");Qe({pathname:"app/"+t,query:{feature_token:n}})}}function ct(e){return x(this,void 0,void 0,(function(){var t,n,r,i,o,s,a,u,c,l;return S(this,(function(f){switch(f.label){case 0:return[4,new Promise((function(e){var t=D();if(!t||C(t,"9.5.0")<0)ee(B),e();else if(window._liff&&window._liff.features)ee(window._liff.features),e();else{var n=function(t){Fe("ready",n),t&&t.detail&&t.detail.data&&t.detail.data.features&&ee(t.detail.data.features),e()};Ue("ready",n)}}))];case 1:return f.sent(),it(),[4,at(e.liffId)];case 2:return t=f.sent(),n=t.credentials,r=n.access_token,i=n.context_token,o=n.feature_token,s=n.id_token,a=n.client_id,u=t.features,o?[4,tt(e.liffId,o)]:[3,4];case 3:f.sent(),ot()&&fe(o),f.label=4;case 4:return c="function"==typeof window._liff.validateFeatureToken,i&&he(Ve(i)),window.addEventListener("pageshow",ut),ot()&&ee(u||B),ye()?[3,8]:o&&r?[3,7]:(De(ot()?{redirectUri:location.href}:void 0),ot()?[4,new Promise((function(){}))]:[3,6]);case 5:f.sent(),f.label=6;case 6:throw G(L,"Failed to parse feature_token or access_token");case 7:if(c&&!function(e,t){return window._liff.makeFeatureTokenHash=function(e,t){return ke()(e+"-"+t)},!!window._liff.validateFeatureToken(e,t)}(e.liffId,o))throw De(),G(L,"Failed to validate feature_token");!c&&window.history.length>1?Me("potential abuser"):(fe(o),ie(r)),f.label=8;case 8:return s&&!se()&&ae(s),s&&a&&!ue()?[4,ze(s,a)]:[3,10];case 9:(l=f.sent())&&ce(l),f.label=10;case 10:return[2]}}))}))}function lt(e){return x(this,void 0,void 0,(function(){var t,n,r,i,o,s,a;return S(this,(function(u){switch(u.label){case 0:return t=je("apps"),n=t+"/"+e+"/contextToken",r=re(),i={"Content-Type":"application/json",Accept:"application/json"},r&&(i.Authorization="Bearer "+r),[4,Ke(n,{headers:i})];case 1:if(o=u.sent(),!(s=o.contextToken))throw G(L,"Can not get context from server.");if(!(a=Ve(s)))throw G(L,"Invalid context token.");return[2,a]}}))}))}function ft(){return x(this,void 0,void 0,(function(){var e;return S(this,(function(t){switch(t.label){case 0:if(!(e=Y().liffId))throw G(L,"Invalid LIFF ID.");return[4,lt(e)];case 1:return he(t.sent()),[2]}}))}))}function dt(e){return x(this,void 0,void 0,(function(){var t,n,r,i=this;return S(this,(function(o){switch(o.label){case 0:t=function(){return x(i,void 0,void 0,(function(){var t,n,r,i,o,s;return S(this,(function(a){switch(a.label){case 0:return[4,(u=Y(),c=be.parse(window.location.search),l=te(),f={grant_type:"authorization_code",client_id:c.liffClientId,appId:u.liffId,code:c.code,code_verifier:l.codeVerifier,redirect_uri:u.redirectUri||c.liffRedirectUri,id_token_key_type:"JWK"},d=be.stringify(f),Ke(je("token"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:d}))];case 1:return t=a.sent(),n=t.access_token,r=t.id_token,i=t.expires_in,ie(n),function(e){var t=Y();X.set(R+":"+U.EXPIRES+":"+t.liffId,e.getTime(),{expires:e.toUTCString(),path:"/",secure:null})}(new Date(Date.now()+1e3*i)),ne(),r?(ae(r),[4,ze(r,e)]):[3,3];case 2:(o=a.sent())&&ce(o),a.label=3;case 3:return(s=be.parse(location.hash).context_token)?(he(Ve(s)),[3,6]):[3,4];case 4:return[4,ft()];case 5:a.sent(),a.label=6;case 6:return[2]}var u,c,l,f,d}))}))},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t()];case 2:return o.sent(),[3,4];case 3:throw n=o.sent(),r=n,ne(),r;case 4:return[2]}}))}))}var ht=n(4),pt="liff.shareTargetPicker",vt="liff.init",yt=1,mt=2,wt=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return P(t,e),t}(ht.UTS),gt=function(e){var t=pe.id,n=pe.version,r=(pe.isLoggedIn?yt:0)|(pe.isLiffSuccessful?mt:0);e.setExtra("liff",{id:t,loginStatus:r,version:n})},bt=function(e,t){ve({isLiffSuccessful:t}),gt(e)},_t=function(e){e.sendCustom({type:"liffSdk",placeId:vt})};function It(){return Ke(je("profile"))}function Tt(){return x(this,void 0,void 0,(function(){var e,t;return S(this,(function(n){switch(n.label){case 0:if(!ye())return[3,6];n.label=1;case 1:return n.trys.push([1,5,,6]),(e=ue())&&e.sub?[2,e.sub]:[3,2];case 2:return[4,It()];case 3:if((t=n.sent())&&t.userId)return[2,t.userId];n.label=4;case 4:return[3,6];case 5:return n.sent(),[3,6];case 6:return[2]}}))}))}function Et(){return x(this,void 0,void 0,(function(){var e;return S(this,(function(t){switch(t.label){case 0:return[4,Tt()];case 1:return(e=t.sent())&&"u"===e.substring(0,1)?[2,e]:[2]}}))}))}var Ot,kt=function(e){if(e&&Number.isFinite(e))return Math.round(100*e)};function Pt(){return x(this,void 0,void 0,(function(){var e,t,n,r,i,o,s,a,u,c,l,f;return S(this,(function(d){switch(d.label){case 0:if(e=de(),!(t=null==e?void 0:e.utsTracking))return[2];if("auto"!==(n=t.mode)&&"force"!==n)return[3,2];if(r=Y(),i=r.liffId,o=r.analytics,!i)throw G("INVALID_CONFIG","LIFF ID has not been set");return s=new wt,a=void 0,u=void 0,"force"===n?(a={appId:"liff_general",appEnv:"release"},u={endpoint:"https://uts-front.line-apps.com",sampleRate:kt(t.sendRatio),version:"current"}):(a=N(N({},null==o?void 0:o.context),{appId:(null==o?void 0:o.context.appId)||"liff_general",appEnv:(null==o?void 0:o.context.appEnv)||"release"}),u=N(N({endpoint:"https://uts-front.line-apps.com"},null==o?void 0:o.options),{sampleRate:kt(t.sendRatio),version:"current"})),s.init(a,u),[4,Et()];case 1:(c=d.sent())&&s.setMid(c),(null==e?void 0:e.tid)&&s.setTid(e.tid),(l=oe)&&s.setSessionParams(l),function(e,t){ve({id:t}),gt(e)}(s,i),h=s,ve({isLoggedIn:ye()}),gt(h),function(e,t){ve({version:t}),gt(e)}(s,"2.8.0"),f=function(e){var t=new URL(e),n=be.parse(t.hash);return Object.keys(n).filter((function(e){return F.includes(e)})).forEach((function(e){return delete n[e]})),t.hash=be.stringify(n),t.toString()}(location.href),s.setUrl(f),function(e,t){e.analytics=t}(this,s),d.label=2;case 2:return[2]}var h}))}))}function At(e){return x(this,void 0,void 0,(function(){var t;return S(this,(function(n){switch(n.label){case 0:if(!e.liffId)throw G("INVALID_CONFIG","liffId is necessary for liff.init()");if(Q=e,Ee(t=be.parse(window.location.search)),t.error&&t.liffOAuth2Error)throw o=t.error,s=t.error_description,a=s.replace(/\+/g," "),G(L,o+": "+a);return r=t.code,i=te(),Boolean(r&&!ye()&&i&&i.codeVerifier)?[4,dt(t.liffClientId)]:[3,2];case 1:n.sent(),n.label=2;case 2:return W()?[4,ct(e)]:[3,4];case 3:return n.sent(),[3,6];case 4:return ye()?[3,6]:[4,ft()];case 5:n.sent(),n.label=6;case 6:return t["liff.state"]?[4,Te(t["liff.state"])]:[3,8];case 7:n.sent(),n.label=8;case 8:return[4,Pt.call(this)];case 9:return n.sent(),W()||!ye()?[2]:(me()&&we(),[2])}var r,i,o,s,a}))}))}var Nt=new Promise((function(e){Ot=e}));function xt(){var e;return"ios"===j()?(e=D())&&C(e,"9.19.0")<0?"https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js":"https://static.line-scdn.net/liff/edge/2/ios-extensions.js":"https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js"}function St(){return x(this,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return[3,2];case 1:return[2,e.sent().default];case 2:return[2,new Promise((function(e,t){var n=document.createElement("script"),r=xt();n.onload=function(){var n=window.liffClientExtension;n?e(n):t(G(L,"Unable to load client features. (Extension is empty)"))},n.onerror=function(){t(G(L,"Unable to load client features."))},n.src=r,n.type="text/javascript",document.body.appendChild(n)}))]}}))}))}function jt(e){return x(this,void 0,void 0,(function(){var t;return S(this,(function(n){switch(n.label){case 0:return[4,St()];case 1:return t=n.sent(),function(e){window&&!window.liff&&(window.liff=e)}(e),t.install(e),[2]}}))}))}function Ct(e,t,n){return x(this,void 0,void 0,(function(){var r;return S(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,Promise.all([jt(this),At.call(this,e)])];case 1:return i.sent(),this.analytics&&(bt(this.analytics,!0),_t(this.analytics)),"function"==typeof t&&t(),Ot(),[3,3];case 2:throw r=i.sent(),this.analytics&&(bt(this.analytics,!1),_t(this.analytics)),"function"==typeof n&&n(r),r;case 3:return[2]}}))}))}n(9);function Dt(e,t,n){void 0===t&&(t={}),void 0===n&&(n="");var r=le();if(!r)throw G("FORBIDDEN","Invalid featureToken for client features");if(!window._liff||!window._liff.postMessage)throw G("INVALID_ARGUMENT","postMessage is not available from client");window._liff.postMessage(e,r,n,JSON.stringify(t))}function Lt(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={once:!0}),le()?(n=N({callbackId:Ne(12),once:!0},n),new Promise((function(r,i){var o=function(t){if(t&&t.detail){var s=t.detail.callbackId===n.callbackId,a="string"!=typeof t.detail.callbackId;(s||a)&&(n.once&&Fe(e,o),t.detail.error?i(t.detail.error):t.detail.data?r(t.detail.data):i(t.detail))}i()};Ue(e,o),Dt(e,t,n.callbackId)}))):Promise.reject(G("FORBIDDEN","Invalid featureToken for client features"))}var Rt=function(e){return"object"==typeof e&&null!==e&&function(e){return"string"==typeof e||e instanceof String}(e.type)};function Ut(e){return Promise.reject(G("INVALID_ARGUMENT",e))}function Ft(e,t){var n=Bt,r=t.split(".")[0],i=n[t];i&&e.removeEventListener(r,i),n[t]=null}var Bt={},Mt=!1,Vt=!1;function Wt(e,t,n,r){Mt||(Vt=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!1}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(Ht){e=!1}return e}(),Mt=!0);var i=t.split(".")[0];return new Promise((function(o){var s=function(i){o(i),n&&n(i),r&&r.once&&Ft(e,t)};Bt[t]=s,e.addEventListener(i,s,!!Vt&&r)}))}function $t(e,t,n,r){if(void 0===n&&(n={}),"object"!=typeof e||!e.postMessage)throw G("INVALID_ARGUMENT","target must be window object");if("string"!=typeof t)throw G("INVALID_ARGUMENT","keyname must be string");if("object"!=typeof n)throw G("INVALID_ARGUMENT","incorrect body format. It should be Object or Array comprised of Object");if(!r)throw G("INVALID_ARGUMENT","serverEndPointUrl isn't passed. please fill up with proper url");if("*"===r)throw new Error("serverEndPointUrl doesn't allow to set '*'");var i={name:t,body:n};e.postMessage(i,r)}function qt(e,t){var n;Wt(window,"message."+(n="receivedHealthcheck"),function(e,t,n){return function(r){r.origin===n&&r.data.name===e&&t(r)}}(n,e,t))}var Gt=function(){function e(){this.payloadToShareTargetPicker=null,this.popupWindow=null,this.doesWaitForSubwindowResult=!1}return e.getInstance=function(){return e.instance?e.instance.reset():e.instance=new e,e.instance},e.prototype.init=function(e){return x(this,void 0,void 0,(function(){var t,n;return S(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),this.liffId=e.referrer.liffId,this.doesWaitForSubwindowResult=!(!e.options||!e.options.waitForSubwindowResult),this.allowPostMessageOrigin=this.initAllowPostMessageOrigin(),this.payloadToShareTargetPicker=this.buildPayloadToShareTargetPicker(e),window.AbortController&&(this.abortController=new window.AbortController),this.prepareAnotherWindow(),[4,this.initOtt()];case 1:return r.sent(),this.initListener(),this.openAnotherWindow(),this.doesWaitForSubwindowResult?[4,this.pollingShareResult()]:[3,3];case 2:return t=r.sent(),this.finalize(),[2,t];case 3:return[2];case 4:return[3,6];case 5:if(n=r.sent(),this.finalize(),"AbortError"!==n.name)throw n;return[3,6];case 6:return[2]}}))}))},e.prototype.resetAllVariables=function(){this.liffId="",this.allowPostMessageOrigin="",this.payloadToShareTargetPicker=null,this.ott="",this.popupWindow=null,this.timeoutIDForHealthCheck=null,this.abortController=null,this.internalError=null,this.doesWaitForSubwindowResult=!1},e.prototype.reset=function(){this.finalize(),this.resetAllVariables()},e.prototype.finalize=function(){var e,t;this.abortController&&this.abortController.abort(),W()||(e=this.timeoutIDForHealthCheck,t=this.popupWindow,Ft(window,"message.receivedHealthcheck"),e&&clearTimeout(e),t&&!t.closed&&t.close())},e.prototype.buildPayloadToShareTargetPicker=function(e){return{messages:e.messages,referrer:e.referrer}},e.prototype.initAllowPostMessageOrigin=function(e){return void 0===e&&(e=je("shareTargetPicker")),function(e){var t=e.match(/^(https?:\/\/.*?)\//);return t&&t[1]||""}(e)},e.prototype.initOtt=function(){return x(this,void 0,void 0,(function(){var e,t,n;return S(this,(function(r){switch(r.label){case 0:return this.abortController&&(e=this.abortController.signal),t=je("shareTargetPickerOtt")+"/"+this.liffId+"/ott",n=this,[4,Ke(t,{method:"GET",signal:e}).then((function(e){return e.ott}))];case 1:return n.ott=r.sent(),[2]}}))}))},e.prototype.prepareAnotherWindow=function(){var e;W()||("ios"!==j()||(void 0===e&&(e=window.navigator.userAgent),/ipad/.test(e.toLowerCase()))?this.popupWindow=window.open("","liffpopup","width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"):this.popupWindow=window.open())},e.prototype.openAnotherWindow=function(){if(W()&&this.payloadToShareTargetPicker)e=this.liffId,t=this.ott,n=this.payloadToShareTargetPicker,r={liffId:e,ott:t,data:JSON.stringify(n),closeModals:!1},location.href="line://picker?"+ge(r);else{if(this.timeoutIDForHealthCheck=window.setTimeout(this.healthCheck.bind(this),1e3),!this.popupWindow)throw G("CREATE_SUBWINDOW_FAILED");!function(e,t,n){var r={liffId:t,ott:n};e.location.href=je("shareTargetPicker")+"?"+ge(r)}(this.popupWindow,this.liffId,this.ott)}var e,t,n,r},e.prototype.initListener=function(){W()||qt(this.onReceivedHealthcheck.bind(this),this.allowPostMessageOrigin)},e.prototype.healthCheck=function(){return x(this,void 0,void 0,(function(){var e;return S(this,(function(t){switch(t.label){case 0:if(this.popupWindow&&!this.popupWindow.closed)return[3,7];if(!this.doesWaitForSubwindowResult)return[3,5];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.onCanceled()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),this.internalError=e,[3,4];case 4:return[3,6];case 5:this.finalize(),t.label=6;case 6:return[3,8];case 7:n=this.popupWindow,r=this.allowPostMessageOrigin,$t(n,"healthcheck",void 0,r),this.timeoutIDForHealthCheck=window.setTimeout(this.healthCheck.bind(this),1e3),t.label=8;case 8:return[2]}var n,r}))}))},e.prototype.onReceivedHealthcheck=function(){if(!this.popupWindow||!this.payloadToShareTargetPicker)throw G("CREATE_SUBWINDOW_FAILED");var e,t,n;e=this.popupWindow,t=this.payloadToShareTargetPicker,n=this.allowPostMessageOrigin,$t(e,"ready",t,n)},e.prototype.onCanceled=function(){return x(this,void 0,void 0,(function(){var e,t;return S(this,(function(n){switch(n.label){case 0:if(W()||!this.ott)throw new Error("need to call with ott in client");return this.abortController&&(e=this.abortController.signal),t={liffId:this.liffId,ott:this.ott},[4,Ke(je("shareTargetPickerResult")+"?"+ge(t),{method:"POST",signal:e,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},body:"result=CANCEL"})];case 1:return[2,"ok"===n.sent().status]}}))}))},e.prototype.getShareResult=function(){return x(this,void 0,void 0,(function(){var e,t;return S(this,(function(n){if(!this.ott)throw new Error("need to call with ott in client");return this.abortController&&(e=this.abortController.signal),t={liffId:this.liffId,ott:this.ott},[2,Ke(je("shareTargetPickerResult")+"?"+ge(t),{method:"GET",headers:{Accept:"application/json"},signal:e})]}))}))},e.isPollingTimeOut=function(e,t){return(t-e)/6e4>=10},e.prototype.pollingShareResult=function(){return x(this,void 0,void 0,(function(){var t,n;return S(this,(function(r){switch(r.label){case 0:t=Date.now(),r.label=1;case 1:if(e.isPollingTimeOut(t,Date.now()))return[3,4];if(this.internalError)throw this.internalError;return[4,this.getShareResult()];case 2:if((n=r.sent())&&n.result)switch(n.result){case"SUCCESS":return[2,{status:"success"}];case"CANCEL":return[2];case"FAILURE":default:throw new Error(n.resultDescription)}return[4,new Promise((function(e){setTimeout(e,500)}))];case 3:return r.sent(),[3,1];case 4:throw new Error("Timeout: not finished within 10min")}}))}))},e}();var Kt={init:Ct,getOS:j,getVersion:Ce,getLanguage:function(){return navigator.language},isInClient:W,isLoggedIn:ye,login:De,logout:we,getAccessToken:re,getIDToken:se,getDecodedIDToken:ue,getContext:de,openWindow:function(e){if(!function(e){if(!e||"object"!=typeof e)return!1;var t=e,n=t.url,r=[typeof n,typeof t.external],i=r[1];return"string"===r[0]&&""!==n&&("undefined"===i||"boolean"===i)}(e))throw G("INVALID_ARGUMENT","Invalid parameters for liff.openWindow()");if(W())if(window._liff.postMessage)Lt("openWindow",e);else{var t=e.url,n=e.external,r=void 0!==n&&n;window.open(function(e,t){var n=e.split("?"),r=n[0],i=n[1],o=(void 0===i?"":i).split("#"),s=o[0],a=o[1];return r+"?is_liff_external_open_window="+!!t+(s?"&"+s.split("&").map(decodeURIComponent).filter((function(e){return-1===e.indexOf("is_liff_external_open_window")})).join("&").concat(a?"#"+a:""):"")}(t,r))}else window.open(e.url,"_blank")},closeWindow:function(){if(window._liff&&window._liff.postMessage){var e=D();null!==e&&C(e,"10.15.0")>=0?"ios"===j()?window._liff.postMessage("closeWindow",""):window._liff.postMessage("closeWindow","","",""):Lt("closeWindow")}else window.close()},getFeatures:Z,getFriendship:function(){return Ke(je("friendship"))},checkFeature:function(e){var t=Z();return!!t&&t.indexOf(e)>-1},getAId:function(){return((de()||{}).d||{}).aId},getProfilePlus:function(){return(de()||{}).profilePlus},getIsVideoAutoPlay:function(){return((de()||{}).d||{}).autoplay||!1},getLineVersion:D,isApiAvailable:et,getProfile:It,sendMessages:function(e){if(!function(e){return Array.isArray(e)&&e.every(Rt)}(e))return Ut("Parameter 'messages' must be an array of { type, ... }");var t=e.length;return t<1||t>5?Ut("Number of messages should be in range 1 to 5."):Ke(je("message"),{method:"POST",body:JSON.stringify({messages:e})})},shareTargetPicker:function(e){return x(this,void 0,void 0,(function(){var t,n,r,i,o,s,a,u,c,l,f;return S(this,(function(d){switch(d.label){case 0:if(t=(de()||{}).availability,n=(t||{}).shareTargetPicker,i=(r=n||{}).permission,o=r.minVer,!i)throw W()?G("FORBIDDEN","Need LINE App "+o+" at least or consent on shareTargetPicker usage on LINE developer site"):G("FORBIDDEN","Need consent on shareTargetPicker usage on LINE developer site");if(!ye())throw G("UNAUTHORIZED","Need access_token for api call, Please login first");if(!e||!Array.isArray(e)||0===e.length)throw G("INVALID_ARGUMENT","no proper argument");if(e.length>5)throw G("INVALID_ARGUMENT","exceed the limit of num of messages");if(!(s=Y().liffId))throw G("INVALID_CONFIG");window.liff&&(a=window.liff).analytics&&a.analytics.sendCustom({type:"liffSdk",placeId:pt}),d.label=1;case 1:return d.trys.push([1,3,,4]),u=Gt.getInstance(),c=D(),l={waitForSubwindowResult:!0},W()&&c&&C(c,"10.11.0")<0&&(l.waitForSubwindowResult=!1),[4,u.init({messages:e,referrer:{liffId:s,url:location.origin},options:l})];case 2:return[2,d.sent()];case 3:throw(f=d.sent())instanceof q?f:G("EXCEPTION_IN_SUBWINDOW",f.message);case 4:return[2]}}))}))},permanentLink:{createUrl:function(){var e=Ie(),t=window.location,n=t.pathname,r=t.search,i=t.hash,o=t.origin,s=new URL(e.endpointUrl);if(s.origin!==o||!function(e,t){return 0===t.indexOf(e)&&(e.endsWith("/")&&(e=e.substring(0,e.length-1)),void 0===t[e.length]||"/"===t[e.length])}(s.pathname,n))throw G("INVALID_CONFIG","Current page is not under entrypoint.");var a=n.substring(s.pathname.length);a.length>0&&"/"!==a[0]&&(a="/"+a);var u=new RegExp("^"+F.join("|")),c=i.substring(1).split("&").filter((function(e){return!u.test(e)&&Boolean(e)})).join("&"),l=c===s.hash.substring(1)?"":c,f=function(e){return e.substring(1).split("&").filter((function(e){return!/liff\.state/.test(e)&&Boolean(e)}))},d=f(r),h=f(s.search);_e&&d.push(_e);for(var p=0;p<h.length;p++){var v=h[p],y=d.indexOf(v);y>-1&&d.splice(y,1)}var m=d.join("&"),w=a+(""!==m?"?"+m:"")+(l?"#"+l:"");return"replace"===e.permanentLinkPattern&&""!==w&&(w=""+n+r+(l?"#"+l:"")),"https://liff.line.me/"+Y().liffId+w},setExtraQueryParam:function(e){_e=e}},ready:Nt,get id(){return Y().liffId||null},_dispatchEvent:function(e){var t={};try{t=JSON.parse(e)}catch(r){throw G("INVALID_ARGUMENT",r.message)}var n=function(e){return new CustomEvent("liffEvent",{detail:e})}(t);window.dispatchEvent(n)},_call:Lt,_addListener:Ue,_removeListener:Fe,_postMessage:Dt};Kt.init=Ct.bind(Kt);var Jt=Kt;t.default=Jt}]).default}));

/***/ }),

/***/ "./resources/js/src/Linebot/pages/Verify/Verify.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/Linebot/pages/Verify/Verify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _line_liff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @line/liff */ "./node_modules/@line/liff/dist/lib/index.js");
/* harmony import */ var _line_liff__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_line_liff__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Linebot/redux/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var Verify = function Verify() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)(),
      search = _useLocation.search;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var path = new URLSearchParams(search);
    localStorage.setItem("path", path.get("path")); // ตรงนี้ต้องเอา Liff login ที่ได้จากการสร้างใน line dev มาใส่ในแถวที่ 18

    function initialize() {
      return _initialize.apply(this, arguments);
    }

    function _initialize() {
      _initialize = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _line_liff__WEBPACK_IMPORTED_MODULE_3___default().init({
                  liffId: "1655658567-YmdRmAVg"
                });

              case 2:
                // console.log(path.get("path"));
                _line_liff__WEBPACK_IMPORTED_MODULE_3___default().ready.then(function () {
                  if (_line_liff__WEBPACK_IMPORTED_MODULE_3___default().isLoggedIn()) {
                    var accessToken = _line_liff__WEBPACK_IMPORTED_MODULE_3___default().getAccessToken();

                    if (accessToken) {
                      localStorage.setItem("linetoken", accessToken);
                      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_4__.userActions.getAuthUser()).then(function () {
                        history.push(path.get("path"));
                      }).catch(function () {
                        history.push("/linebot/login?path=" + localStorage.getItem("path"));
                      });
                    }
                  } else {
                    // localStorage.setItem("path", path.get("path"));
                    _line_liff__WEBPACK_IMPORTED_MODULE_3___default().login({
                      redirectUri: "https://6be7805c3720.ngrok.io/linebot/verify?path=" + path.get("path")
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _initialize.apply(this, arguments);
    }

    initialize();
  }, [dispatch, history, search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "overlay",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
      className: "fa fa-refresh fa-spin"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Verify);

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

}]);
//# sourceMappingURL=resources_js_src_Linebot_pages_Verify_Verify_js.js.map