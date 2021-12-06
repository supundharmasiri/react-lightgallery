"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("uniqid"),n=require("react-dom"),o=require("browser-or-node");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var u=i(e),a=i(t),s=i(r);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function P(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=e.createContext(),x=function(e){return"react_lightgallery_".concat(e)},L=function(t){b(n,e.Component);var r=O(n);function n(){var e;y(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return g(S(e=r.call.apply(r,[this].concat(o))),"state",{id:s.default()}),g(S(e),"register",(function(){var t=e.props,r=t.src,n=t.thumb,o=void 0===n?r:n,i=t.subHtml,l=void 0===i?"":i,u=t.downloadUrl,a=void 0===u?"":u;e.context.registerPhoto(e.state.id,e.props.group,{src:r,thumb:o,subHtml:l,downloadUrl:a})})),g(S(e),"unregister",(function(){e.context.unregisterPhoto(e.state.id,e.props.group)})),g(S(e),"open",(function(){e.context.openGallery(e.state.id,e.props.group)})),e}return m(n,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"render",value:function(){var e=this.props,t=e.itemClassName,r=void 0===t?x("item"):t,n=e.children;return u.default.createElement("div",{className:r,onClick:this.open},n)}}]),n}();g(L,"propTypes",{children:a.default.any,group:a.default.string.isRequired,src:a.default.string.isRequired,thumb:a.default.string,subHtml:a.default.oneOfType([a.default.string,a.default.object]),downloadUrl:a.default.string,itemClassName:a.default.string}),g(L,"contextType",$);var C=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function M(e,t){return e(t={exports:{}},t.exports),t.exports}var T="object"==typeof E&&E&&E.Object===Object&&E,U="object"==typeof self&&self&&self.Object===Object&&self,G=T||U||Function("return this")(),N=function(){return G.Date.now()},A=/\s/;var D=function(e){for(var t=e.length;t--&&A.test(e.charAt(t)););return t},B=/^\s+/;var q=function(e){return e?e.slice(0,D(e)+1).replace(B,""):e},I=G.Symbol,R=Object.prototype,F=R.hasOwnProperty,k=R.toString,z=I?I.toStringTag:void 0;var V=function(e){var t=F.call(e,z),r=e[z];try{e[z]=void 0;var n=!0}catch(e){}var o=k.call(e);return n&&(t?e[z]=r:delete e[z]),o},W=Object.prototype.toString;var H=function(e){return W.call(e)},J=I?I.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":J&&J in Object(e)?V(e):H(e)};var K=function(e){return null!=e&&"object"==typeof e};var Q=function(e){return"symbol"==typeof e||K(e)&&"[object Symbol]"==Y(e)},X=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,te=parseInt;var re=function(e){if("number"==typeof e)return e;if(Q(e))return NaN;if(C(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=C(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=q(e);var r=Z.test(e);return r||ee.test(e)?te(e.slice(2),r?2:8):X.test(e)?NaN:+e},ne=Math.max,oe=Math.min;var ie=function(e,t,r){var n,o,i,l,u,a,s=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=n,i=o;return n=o=void 0,s=t,l=e.apply(i,r)}function d(e){return s=e,u=setTimeout(g,t),c?y(e):l}function m(e){var r=e-a;return void 0===a||r>=t||r<0||f&&e-s>=i}function g(){var e=N();if(m(e))return v(e);u=setTimeout(g,function(e){var r=t-(e-a);return f?oe(r,i-(e-s)):r}(e))}function v(e){return u=void 0,p&&n?y(e):(n=o=void 0,l)}function b(){var e=N(),r=m(e);if(n=arguments,o=this,a=e,r){if(void 0===u)return d(a);if(f)return clearTimeout(u),u=setTimeout(g,t),y(a)}return void 0===u&&(u=setTimeout(g,t)),l}return t=re(t)||0,C(r)&&(c=!!r.leading,i=(f="maxWait"in r)?ne(re(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),b.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=a=o=u=void 0},b.flush=function(){return void 0===u?l:v(N())},b};require("lightgallery.js/dist/css/lightgallery.css");var le=function(t){b(i,e.Component);var r=O(i);function i(){var t;y(this,i);for(var n=arguments.length,u=new Array(n),a=0;a<n;a++)u[a]=arguments[a];return g(S(t=r.call.apply(r,[this].concat(u))),"gallery_element",e.createRef()),g(S(t),"_groups",{}),g(S(t),"_listeners",{}),g(S(t),"_will_unmount",!1),g(S(t),"_forceUpdate",ie(t.forceUpdate,50)),g(S(t),"loadLightgalleryJS",(function(){var e=t.props,r=e.plugins,n=e.onLightgalleryImport;o.isBrowser&&!window.lgData&&Promise.resolve().then((function(){return l(require("lightgallery.js"))})).then((function(){r.includes("lg-autoplay.js")&&Promise.resolve().then((function(){return l(require("lg-autoplay.js"))})).then(),r.includes("lg-fullscreen.js")&&Promise.resolve().then((function(){return l(require("lg-fullscreen.js"))})).then(),r.includes("lg-hash.js")&&Promise.resolve().then((function(){return l(require("lg-hash.js"))})).then(),r.includes("lg-pager.js")&&Promise.resolve().then((function(){return l(require("lg-pager.js"))})).then(),r.includes("lg-thumbnail.js")&&Promise.resolve().then((function(){return l(require("lg-thumbnail.js"))})).then(),r.includes("lg-video.js")&&Promise.resolve().then((function(){return l(require("lg-video.js"))})).then(),r.includes("lg-zoom.js")&&Promise.resolve().then((function(){return l(require("lg-zoom.js"))})).then(),r.includes("lg-share.js")&&Promise.resolve().then((function(){return l(require("lg-share.js"))})).then(),n&&n()}))})),g(S(t),"destroy",(function(){t._will_unmount=!0,t._forceUpdate.cancel(),t.destroyExistGallery()})),g(S(t),"getLgUid",(function(){if(t.gallery_element.current)return t.gallery_element.current.getAttribute("lg-uid")})),g(S(t),"hasGroup",(function(e){return t._groups.hasOwnProperty(e)})),g(S(t),"registerPhoto",(function(e,r,n){t._groups=f(f({},t._groups),{},g({},r,[].concat(P(t._groups[r]||[]),[f(f({},n),{},{uid:e})]))),t._forceUpdate()})),g(S(t),"unregisterPhoto",(function(e,r){t._will_unmount||(t._groups=f(f({},t._groups),{},g({},r,t._groups[r].filter((function(t){return t.uid!==e})))),t._forceUpdate())})),g(S(t),"getLightgalleryObject",(function(){return window.lgData[t.getLgUid()]})),g(S(t),"destroyExistGallery",(function(){"object"===("undefined"==typeof window?"undefined":p(window))&&window.lgData&&window.lgData[t.getLgUid()]&&(t.removeListeners(),t.getLightgalleryObject().destroy(!0))})),g(S(t),"setUpListener",(function(e,r){var n=function(n){t.props[e]&&t.props[e](n,t.getLightgalleryObject()),r&&r()};t.gallery_element.current.addEventListener(e,n),t._listeners[e]&&console.error("Event ".concat(e," already exist in _listeners")),t._listeners[e]=n})),g(S(t),"removeListener",(function(e){var r=t.gallery_element.current;t._listeners[e]&&(r.removeEventListener(e,t._listeners[e]),delete t._listeners[e])})),g(S(t),"removeListeners",(function(){for(var e in t._listeners)t.removeListener(e)})),g(S(t),"setupListeners",(function(){t.setUpListener("onBeforeOpen"),t.setUpListener("onAfterOpen"),t.setUpListener("onSlideItemLoad"),t.setUpListener("onBeforeSlide"),t.setUpListener("onAfterSlide"),t.setUpListener("onBeforePrevSlide"),t.setUpListener("onBeforeNextSlide"),t.setUpListener("onDragstart"),t.setUpListener("onDragmove"),t.setUpListener("onDragend"),t.setUpListener("onSlideClick"),t.setUpListener("onBeforeClose"),t.setUpListener("onCloseAfter",(function(){setTimeout((function(){t.destroyExistGallery()}),0)}))})),g(S(t),"getGroupByName",(function(e){if(t.hasGroup(e))return t._groups[e];console.error("Trying to open undefined group with name '".concat(e,"'"))})),g(S(t),"openGallery",(function(e,r){var n=t.getGroupByName(r),o=Math.max(n.findIndex((function(t){return t.uid===e})),0);t.openGalleryByIndex(o,r)})),g(S(t),"openGalleryByIndex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0;if(t.gallery_element.current){t.destroyExistGallery();var n=t.getGroupByName(r);lightGallery(t.gallery_element.current,f(f({},t.props.lightgallerySettings||{}),{},{dynamic:!0,dynamicEl:n,index:e,categoryList:t.props.categoryList})),t.setupListeners()}else console.error("Error on trying to open gallery; ref 'gallery_element' is not defined")})),t}return m(i,[{key:"componentDidMount",value:function(){this.loadLightgalleryJS()}},{key:"componentWillUnmount",value:function(){this.destroy()}},{key:"render",value:function(){var e=this.props,t=e.galleryClassName,r=void 0===t?x("gallery"):t,i=e.portalElementSelector,l=null;if(o.isBrowser&&(l=document.body,i)){var a=document.querySelector(i);a||console.error("There is cannot to find element by selector: `${portalElementSelector}` lightgallery element will be added to document.body"),l=a}return u.default.createElement($.Provider,{value:{registerPhoto:this.registerPhoto,unregisterPhoto:this.unregisterPhoto,openGallery:this.openGallery,openGalleryByIndex:this.openGalleryByIndex,hasGroup:this.hasGroup}},this.props.children,l&&n.createPortal(u.default.createElement("div",{className:r,ref:this.gallery_element}),l))}}]),i}();g(le,"defaultProps",{plugins:["lg-fullscreen.js","lg-thumbnail.js","lg-video.js","lg-zoom.js"]}),g(le,"propTypes",{children:a.default.any,plugins:a.default.arrayOf(a.default.oneOf(["lg-autoplay.js","lg-fullscreen.js","lg-hash.js","lg-pager.js","lg-thumbnail.js","lg-video.js","lg-zoom.js","lg-share.js"])),lightgallerySettings:a.default.object,galleryClassName:a.default.string,portalElementSelector:a.default.string,onBeforeOpen:a.default.func,onAfterOpen:a.default.func,onSlideItemLoad:a.default.func,onBeforeSlide:a.default.func,onAfterSlide:a.default.func,onBeforePrevSlide:a.default.func,onBeforeNextSlide:a.default.func,onDragstart:a.default.func,onDragmove:a.default.func,onDragend:a.default.func,onSlideClick:a.default.func,onBeforeClose:a.default.func,onCloseAfter:a.default.func,onLightgalleryImport:a.default.func,categoryList:a.default.array});var ue=function(){var t=e.useContext($),r=t.hasGroup,n=t.openGalleryByIndex;return{openGallery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)throw new Error("You must to provide 'group_name' on call function 'openGallery'");if(!r(e))throw new Error("Group '".concat(e,"' is not exists"));n(t,e)}}},ae="function"==typeof Symbol&&Symbol.for,se=ae?Symbol.for("react.element"):60103,ce=ae?Symbol.for("react.portal"):60106,fe=ae?Symbol.for("react.fragment"):60107,pe=ae?Symbol.for("react.strict_mode"):60108,ye=ae?Symbol.for("react.profiler"):60114,de=ae?Symbol.for("react.provider"):60109,me=ae?Symbol.for("react.context"):60110,ge=ae?Symbol.for("react.async_mode"):60111,ve=ae?Symbol.for("react.concurrent_mode"):60111,be=ae?Symbol.for("react.forward_ref"):60112,he=ae?Symbol.for("react.suspense"):60113,je=ae?Symbol.for("react.suspense_list"):60120,Se=ae?Symbol.for("react.memo"):60115,we=ae?Symbol.for("react.lazy"):60116,Oe=ae?Symbol.for("react.block"):60121,Pe=ae?Symbol.for("react.fundamental"):60117,_e=ae?Symbol.for("react.responder"):60118,$e=ae?Symbol.for("react.scope"):60119;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function xe(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case se:switch(e=e.type){case ge:case ve:case fe:case ye:case pe:case he:return e;default:switch(e=e&&e.$$typeof){case me:case be:case we:case Se:case de:return e;default:return t}}case ce:return t}}}function Le(e){return xe(e)===ve}var Ce={AsyncMode:ge,ConcurrentMode:ve,ContextConsumer:me,ContextProvider:de,Element:se,ForwardRef:be,Fragment:fe,Lazy:we,Memo:Se,Portal:ce,Profiler:ye,StrictMode:pe,Suspense:he,isAsyncMode:function(e){return Le(e)||xe(e)===ge},isConcurrentMode:Le,isContextConsumer:function(e){return xe(e)===me},isContextProvider:function(e){return xe(e)===de},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===se},isForwardRef:function(e){return xe(e)===be},isFragment:function(e){return xe(e)===fe},isLazy:function(e){return xe(e)===we},isMemo:function(e){return xe(e)===Se},isPortal:function(e){return xe(e)===ce},isProfiler:function(e){return xe(e)===ye},isStrictMode:function(e){return xe(e)===pe},isSuspense:function(e){return xe(e)===he},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===fe||e===ve||e===ye||e===pe||e===he||e===je||"object"==typeof e&&null!==e&&(e.$$typeof===we||e.$$typeof===Se||e.$$typeof===de||e.$$typeof===me||e.$$typeof===be||e.$$typeof===Pe||e.$$typeof===_e||e.$$typeof===$e||e.$$typeof===Oe)},typeOf:xe},Ee=M((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var y=e.type;switch(y){case s:case c:case o:case l:case i:case p:return y;default:var g=y&&y.$$typeof;switch(g){case a:case f:case m:case d:case u:return g;default:return t}}case n:return t}}}var S=s,w=c,O=a,P=u,_=r,$=f,x=o,L=m,C=d,E=n,M=l,T=i,U=p,G=!1;function N(e){return j(e)===c}t.AsyncMode=S,t.ConcurrentMode=w,t.ContextConsumer=O,t.ContextProvider=P,t.Element=_,t.ForwardRef=$,t.Fragment=x,t.Lazy=L,t.Memo=C,t.Portal=E,t.Profiler=M,t.StrictMode=T,t.Suspense=U,t.isAsyncMode=function(e){return G||(G=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(e)||j(e)===s},t.isConcurrentMode=N,t.isContextConsumer=function(e){return j(e)===a},t.isContextProvider=function(e){return j(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return j(e)===f},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===d},t.isPortal=function(e){return j(e)===n},t.isProfiler=function(e){return j(e)===l},t.isStrictMode=function(e){return j(e)===i},t.isSuspense=function(e){return j(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===l||e===i||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===u||e.$$typeof===a||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g)},t.typeOf=j}()}));Ee.AsyncMode,Ee.ConcurrentMode,Ee.ContextConsumer,Ee.ContextProvider,Ee.Element,Ee.ForwardRef,Ee.Fragment,Ee.Lazy,Ee.Memo,Ee.Portal,Ee.Profiler,Ee.StrictMode,Ee.Suspense,Ee.isAsyncMode,Ee.isConcurrentMode,Ee.isContextConsumer,Ee.isContextProvider,Ee.isElement,Ee.isForwardRef,Ee.isFragment,Ee.isLazy,Ee.isMemo,Ee.isPortal,Ee.isProfiler,Ee.isStrictMode,Ee.isSuspense,Ee.isValidElementType,Ee.typeOf;var Me=M((function(e){"production"===process.env.NODE_ENV?e.exports=Ce:e.exports=Ee})),Te={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ue={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ge={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ne={};function Ae(e){return Me.isMemo(e)?Ge:Ne[e.$$typeof]||Te}Ne[Me.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ne[Me.Memo]=Ge;var De=Object.defineProperty,Be=Object.getOwnPropertyNames,qe=Object.getOwnPropertySymbols,Ie=Object.getOwnPropertyDescriptor,Re=Object.getPrototypeOf,Fe=Object.prototype;var ke=function e(t,r,n){if("string"!=typeof r){if(Fe){var o=Re(r);o&&o!==Fe&&e(t,o,n)}var i=Be(r);qe&&(i=i.concat(qe(r)));for(var l=Ae(t),u=Ae(r),a=0;a<i.length;++a){var s=i[a];if(!(Ue[s]||n&&n[s]||u&&u[s]||l&&l[s])){var c=Ie(r,s);try{De(t,s,c)}catch(e){}}}}return t};exports.LightgalleryItem=L,exports.LightgalleryProvider=le,exports.useLightgallery=ue,exports.withLightgallery=function(e){var t=function(t){var r=ue().openGallery;return u.default.createElement(e,v({},t,{openGallery:r}))};return ke(t,e),t.displayName="withLightgallary(".concat(e.displayName,")"),t};
