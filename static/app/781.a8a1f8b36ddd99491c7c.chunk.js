(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[781],{781:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[n("h1",{domProps:{textContent:t._s(t.$t("activate.title"))}},[t._v("Activation")]),t._v(" "),t.success?n("div",{staticClass:"alert alert-success"},[n("span",{domProps:{innerHTML:t._s(t.$t("activate.messages.success"))}},[n("strong",[t._v("Your user account has been activated.")]),t._v(" Please ")]),t._v(" "),n("a",{staticClass:"alert-link",domProps:{textContent:t._s(t.$t("global.messages.info.authenticated.link"))},on:{click:t.openLogin}},[t._v("sign in")]),t._v(".\n      ")]):t._e(),t._v(" "),t.error?n("div",{staticClass:"alert alert-danger",domProps:{innerHTML:t._s(t.$t("activate.messages.error"))}},[n("strong",[t._v("Your user could not be activated.")]),t._v(" Please use the registration form to sign up.\n      ")]):t._e()])])])},r=[];o._withStripped=!0;var i=n(5904),c=n(1157),s=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),a=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},u=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.success=!1,e.error=!1,e}return s(e,t),e.prototype.beforeRouteEnter=function(t,e,n){n((function(e){t.query.key&&e.init(t.query.key)}))},e.prototype.init=function(t){var e=this;this.activateService().activateAccount(t).then((function(t){e.success=!0,e.error=!1}),(function(t){e.error=!0,e.success=!1}))},e.prototype.openLogin=function(){this.loginService().openLogin(this.$root)},a([(0,c.tB)("activateService"),u("design:type",Function)],e.prototype,"activateService",void 0),a([(0,c.tB)("loginService"),u("design:type",Function)],e.prototype,"loginService",void 0),e=a([i.ZP],e),e}(c.w3),p=l,f=p,v=n(1900),_=(0,v.Z)(f,o,r,!1,null,null,null);_.options.__file="src/main/webapp/app/account/activate/activate.vue";var d=_.exports}}]);
//# sourceMappingURL=781.a8a1f8b36ddd99491c7c.chunk.js.map