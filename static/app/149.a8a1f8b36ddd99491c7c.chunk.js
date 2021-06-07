(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[149],{1149:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{attrs:{id:"configuration-page-heading","data-cy":"configurationPageHeading"},domProps:{textContent:t._s(t.$t("configuration.title"))}},[t._v("Configuration")]),t._v(" "),t.allConfiguration&&t.configuration?r("div",[r("span",{domProps:{textContent:t._s(t.$t("configuration.filter"))}},[t._v("Filter (by prefix)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filtered,expression:"filtered"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.filtered},on:{input:function(e){e.target.composing||(t.filtered=e.target.value)}}}),t._v(" "),r("h3",[t._v("Spring configuration")]),t._v(" "),r("table",{staticClass:"table table-striped table-bordered table-responsive d-table",attrs:{"aria-describedby":"Configuration"}},[r("thead",[r("tr",[r("th",{staticClass:"w-40",attrs:{scope:"col"},on:{click:function(e){return t.changeOrder("prefix")}}},[r("span",{domProps:{textContent:t._s(t.$t("configuration.table.prefix"))}},[t._v("Prefix")])]),t._v(" "),r("th",{staticClass:"w-60",attrs:{scope:"col"},on:{click:function(e){return t.changeOrder("properties")}}},[r("span",{domProps:{textContent:t._s(t.$t("configuration.table.properties"))}},[t._v("Properties")])])])]),t._v(" "),r("tbody",t._l(t.orderBy(t.filterBy(t.configuration,t.filtered),t.orderProp,!0===t.reverse?1:-1),(function(e){return r("tr",{key:e.prefix},[r("td",[r("span",[t._v(t._s(e.prefix))])]),t._v(" "),r("td",t._l(t.keys(e.properties),(function(n){return r("div",{key:n,staticClass:"row"},[r("div",{staticClass:"col-md-4"},[t._v(t._s(n))]),t._v(" "),r("div",{staticClass:"col-md-8"},[r("span",{staticClass:"float-right badge-secondary break"},[t._v(t._s(e.properties[n]))])])])})),0)])})),0)]),t._v(" "),t._l(t.keys(t.allConfiguration),(function(e){return r("div",{key:e},[r("h4",[r("span",[t._v(t._s(e))])]),t._v(" "),r("table",{staticClass:"table table-sm table-striped table-bordered table-responsive d-table",attrs:{"aria-describedby":"Properties"}},[t._m(0,!0),t._v(" "),r("tbody",t._l(t.allConfiguration[e],(function(e){return r("tr",{key:e.key},[r("td",{staticClass:"break"},[t._v(t._s(e.key))]),t._v(" "),r("td",{staticClass:"break"},[r("span",{staticClass:"float-right badge-secondary break"},[t._v(t._s(e.val))])])])})),0)])])}))],2):t._e()])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"w-40",attrs:{scope:"col"}},[t._v("Property")]),t._v(" "),r("th",{staticClass:"w-60",attrs:{scope:"col"}},[t._v("Value")])])])}];n._withStripped=!0;var i=r(1157),a=r(4494),s=r.n(a),c=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},f=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.orderProp="prefix",e.reverse=!1,e.allConfiguration=!1,e.configuration=!1,e.configKeys=[],e.filtered="",e}return c(e,t),e.prototype.mounted=function(){this.init()},e.prototype.init=function(){var t=this;this.configurationService().loadConfiguration().then((function(e){t.configuration=e;for(var r=0,n=t.configuration;r<n.length;r++){var o=n[r];void 0!==o.properties&&t.configKeys.push(Object.keys(o.properties))}})),this.configurationService().loadEnvConfiguration().then((function(e){t.allConfiguration=e}))},e.prototype.changeOrder=function(t){this.orderProp=t,this.reverse=!this.reverse},e.prototype.keys=function(t){return void 0===t?[]:Object.keys(t)},l([(0,i.tB)("configurationService"),f("design:type",Function)],e.prototype,"configurationService",void 0),e=l([(0,i.wA)({mixins:[s().mixin]})],e),e}(i.w3),u=p,d=u,v=r(1900),_=(0,v.Z)(d,n,o,!1,null,null,null);_.options.__file="src/main/webapp/app/admin/configuration/configuration.vue";var g=_.exports}}]);
//# sourceMappingURL=149.a8a1f8b36ddd99491c7c.chunk.js.map