(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[753],{3753:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("h1",{domProps:{textContent:e._s(e.$t("reset.request.title"))}},[e._v("Reset your password")]),e._v(" "),e.keyMissing?s("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.$t("reset.finish.messages.keymissing"))}},[s("strong",[e._v("The password reset key is missing.")])]):e._e(),e._v(" "),e.error?s("div",{staticClass:"alert alert-danger"},[s("p",{domProps:{textContent:e._s(e.$t("reset.finish.messages.error"))}},[e._v("\n          Your password couldn't be reset. Remember a password request is only valid for 24 hours.\n        ")])]):e._e(),e._v(" "),e.success?s("div",{staticClass:"alert alert-success"},[s("span",{domProps:{innerHTML:e._s(e.$t("reset.finish.messages.success"))}},[s("strong",[e._v("Your password had been reset.")]),e._v(" Please ")]),e._v(" "),s("a",{staticClass:"alert-link",domProps:{textContent:e._s(e.$t("global.messages.info.authenticated.link"))},on:{click:e.openLogin}},[e._v("sign in")])]):e._e(),e._v(" "),e.doNotMatch?s("div",{staticClass:"alert alert-danger"},[s("p",{domProps:{textContent:e._s(e.$t("global.messages.error.dontmatch"))}},[e._v("The password and its confirmation do not match!")])]):e._e(),e._v(" "),e.success||e.keyMissing?e._e():s("div",{staticClass:"alert alert-warning"},[s("p",{domProps:{textContent:e._s(e.$t("reset.finish.messages.info"))}},[e._v("Choose a new password.")])]),e._v(" "),e.keyMissing?e._e():s("div",[e.success?e._e():s("form",{attrs:{name:"form",role:"form"},on:{submit:function(t){return t.preventDefault(),e.finishReset()}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label",attrs:{for:"newPassword"},domProps:{textContent:e._s(e.$t("global.form['newpassword.label']"))}},[e._v("New password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.resetAccount.newPassword.$model,expression:"$v.resetAccount.newPassword.$model"}],staticClass:"form-control",class:{valid:!e.$v.resetAccount.newPassword.$invalid,invalid:e.$v.resetAccount.newPassword.$invalid},attrs:{type:"password",id:"newPassword",name:"newPassword",placeholder:e.$t("global.form['newpassword.placeholder']"),minlength:"4",maxlength:"50",required:"","data-cy":"resetPassword"},domProps:{value:e.$v.resetAccount.newPassword.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.resetAccount.newPassword,"$model",t.target.value)}}}),e._v(" "),e.$v.resetAccount.newPassword.$anyDirty&&e.$v.resetAccount.newPassword.$invalid?s("div",[e.$v.resetAccount.newPassword.required?e._e():s("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("global.messages.validate.newpassword.required"))}},[e._v("\n                Your password is required.\n              ")]),e._v(" "),e.$v.resetAccount.newPassword.minLength?e._e():s("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("global.messages.validate.newpassword.minlength"))}},[e._v("\n                Your password is required to be at least 4 characters.\n              ")]),e._v(" "),e.$v.resetAccount.newPassword.maxLength?e._e():s("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("global.messages.validate.newpassword.maxlength"))}},[e._v("\n                Your password cannot be longer than 50 characters.\n              ")])]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-control-label",attrs:{for:"confirmPassword"},domProps:{textContent:e._s(e.$t("global.form['confirmpassword.label']"))}},[e._v("New password confirmation")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.resetAccount.confirmPassword.$model,expression:"$v.resetAccount.confirmPassword.$model"}],staticClass:"form-control",class:{valid:!e.$v.resetAccount.confirmPassword.$invalid,invalid:e.$v.resetAccount.confirmPassword.$invalid},attrs:{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:e.$t("global.form['confirmpassword.placeholder']"),minlength:"4",maxlength:"50",required:"","data-cy":"confirmResetPassword"},domProps:{value:e.$v.resetAccount.confirmPassword.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.resetAccount.confirmPassword,"$model",t.target.value)}}}),e._v(" "),e.$v.resetAccount.confirmPassword.$anyDirty&&e.$v.resetAccount.confirmPassword.$invalid?s("div",[e.$v.resetAccount.confirmPassword.sameAsPassword?e._e():s("small",{staticClass:"form-text text-danger",domProps:{textContent:e._s(e.$t("global.messages.error.dontmatch"))}},[e._v("\n                The password and its confirmation do not match!\n              ")])]):e._e()]),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.$v.resetAccount.$invalid,"data-cy":"submit"},domProps:{textContent:e._s(e.$t("password.form.button"))}},[e._v("\n            Save\n          ")])])])])])])},r=[];o._withStripped=!0;var n=s(9669),a=s.n(n),i=s(379),c=s(1157),l=function(){var e=function(t,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])},e(t,s)};return function(t,s){if("function"!==typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function o(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),d=function(e,t,s,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,s,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(n<3?r(a):n>3?r(t,s,a):r(t,s))||a);return n>3&&a&&Object.defineProperty(t,s,a),a},u=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},m={resetAccount:{newPassword:{required:i.C1,minLength:(0,i.Ei)(4),maxLength:(0,i.BS)(254)},confirmPassword:{sameAsPassword:(0,i.sH)((function(e){return e.newPassword}))}}},p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.doNotMatch=null,t.success=null,t.error=null,t.keyMissing=null,t.resetAccount={newPassword:null,confirmPassword:null},t}return l(t,e),t.prototype.created=function(){void 0!==this.$route&&void 0!==this.$route.query&&void 0!==this.$route.query.key&&(this.key=this.$route.query.key),this.keyMissing=!this.key},t.prototype.finishReset=function(){var e=this;this.doNotMatch=null,this.success=null,this.error=null,this.resetAccount.newPassword!==this.resetAccount.confirmPassword?this.doNotMatch="ERROR":a().post("api/account/reset-password/finish",{key:this.key,newPassword:this.resetAccount.newPassword}).then((function(){e.success="OK"})).catch((function(){e.success=null,e.error="ERROR"}))},t.prototype.openLogin=function(){this.loginService().openLogin(this.$root)},d([(0,c.tB)("loginService"),u("design:type",Function)],t.prototype,"loginService",void 0),t=d([(0,c.wA)({validations:m})],t),t}(c.w3),v=p,w=v,f=s(1900),h=(0,f.Z)(w,o,r,!1,null,null,null);h.options.__file="src/main/webapp/app/account/reset-password/finish/reset-password-finish.vue";var _=h.exports}}]);
//# sourceMappingURL=753.a8a1f8b36ddd99491c7c.chunk.js.map