!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,i=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(n,e)||t(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t,e,r,o,i,a){try{var u=n[i](a),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function u(n){return function(){var t=this,e=arguments;return new Promise(function(r,o){var i=n.apply(t,e);function u(n){a(i,r,o,u,c,"next",n)}function c(n){a(i,r,o,u,c,"throw",n)}u(void 0)})}}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[8592],{7997:function(n,t,e){"use strict";e.d(t,{c:function(){return a}});var r=e(2322),o=e(3320),i=e(5043),a=function(n,t){var e,a,u=function(n,r,o){if("undefined"!=typeof document){var i=document.elementFromPoint(n,r);i&&t(i)?i!==e&&(s(),c(i,o)):s()}},c=function(n,t){e=n,a||(a=e);var o=e;(0,r.c)(function(){return o.classList.add("ion-activated")}),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;(0,r.c)(function(){return t.classList.remove("ion-activated")}),n&&a!==e&&e.click(),e=void 0}};return(0,i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return u(n.currentX,n.currentY,o.a)},onMove:function(n){return u(n.currentX,n.currentY,o.b)},onEnd:function(){s(!0),(0,o.h)(),a=void 0}})}},4068:function(n,t,e){"use strict";e.d(t,{g:function(){return r}});var r=function(n,t,e,r,a){return i(n[1],t[1],e[1],r[1],a).map(function(i){return o(n[0],t[0],e[0],r[0],i)})},o=function(n,t,e,r,o){return o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+r*o))-n*Math.pow(o-1,3)},i=function(n,t,e,r,o){return a((r-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(function(n){return n>=0&&n<=1})},a=function(n,t,e,r){if(0===n)return function(n,t,e){var r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]}(t,e,r);var o=(3*(e/=n)-(t/=n)*t)/3,i=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];var a=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(i/2,.5)-t/3];if(a>0)return[Math.pow(-i/2+Math.sqrt(a),1/3)-Math.pow(i/2+Math.sqrt(a),1/3)-t/3];var u=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),s=2*Math.pow(u,1/3);return[s*Math.cos(c/3)-t/3,s*Math.cos((c+2*Math.PI)/3)-t/3,s*Math.cos((c+4*Math.PI)/3)-t/3]}},8894:function(n,t,e){"use strict";e.d(t,{a:function(){return o},d:function(){return i}});var r=e(3977),o=function(){var n=u(regeneratorRuntime.mark(function n(t,e,o,i,a){var u;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,o,a,i));case 2:if("string"==typeof o||o instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o,i&&i.forEach(function(n){return u.classList.add(n)}),a&&Object.assign(u,a),e.appendChild(u),n.next=10,new Promise(function(n){return(0,r.c)(u,n)});case 10:return n.abrupt("return",u);case 11:case"end":return n.stop()}},n)}));return function(t,e,r,o,i){return n.apply(this,arguments)}}(),i=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},3320:function(n,t,e){"use strict";e.d(t,{a:function(){return i},b:function(){return a},c:function(){return o},d:function(){return c},h:function(){return u}});var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=function(){r.selection()},i=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},c=function(n){r.impact(n)}},7942:function(n,t,e){"use strict";e.d(t,{s:function(){return r}});var r=function(n){try{if(n instanceof function(){return o(function n(t){i(this,n),this.value=t})}())return n.value;if(!c()||"string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,l.forEach(function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var o=e[r];o.parentNode?o.parentNode.removeChild(o):t.removeChild(o);for(var i=u(o),c=0;c<i.length;c++)a(i[c])}});for(var r=u(t),s=0;s<r.length;s++)a(r[s]);var f=document.createElement("div");f.appendChild(t);var m=f.querySelector("div");return null!==m?m.innerHTML:f.innerHTML}catch(p){return console.error(p),""}},a=function n(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var r=t.attributes.item(e),o=r.name;if(s.includes(o.toLowerCase())){var i=r.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}else t.removeAttribute(o)}for(var a=u(t),c=0;c<a.length;c++)n(a[c])}},u=function(n){return null!=n.children?n.children:n.childNodes},c=function(){var n=window,t=n&&n.Ionic&&n.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},s=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},9926:function(n,t,e){"use strict";e.d(t,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",o=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,o=n*r-n+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},4843:function(n,t,e){"use strict";e.d(t,{c:function(){return o},g:function(){return i},h:function(){return r},o:function(){return c}});var r=function(n,t){return null!==t.closest(n)},o=function(n,t){return"string"==typeof n&&n.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(n),o=!0,r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e),t):t;var e,r,o},i=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var n=u(regeneratorRuntime.mark(function n(t,e,r,o){var i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||a.test(t)){n.next=4;break}if(!(i=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),i.push(t,r,o)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}},n)}));return function(t,e,r,o){return n.apply(this,arguments)}}()},8993:function(e,r,a){"use strict";a.d(r,{u:function(){return k}});var u=a(8619),c=a(1462),s=a(1116),l=a(6611);function f(n,t){if(1&n&&u._UZ(0,"ion-input",10),2&n){var e=u.oxw(2).$implicit;u.Q6J("type",e.type)("formControlName",e.name)("value",e.value)}}function m(n,t){if(1&n&&u._UZ(0,"ion-input",11),2&n){var e=u.oxw(2).$implicit;u.Q6J("type",e.type)("formControlName",e.name)("value",e.value)}}function p(n,t){if(1&n&&u._UZ(0,"ion-textarea",12),2&n){var e=u.oxw(2).$implicit;u.Q6J("formControlName",e.name)("value",e.value)}}function v(n,t){if(1&n&&u._UZ(0,"ion-checkbox",13),2&n){var e=u.oxw(2).$implicit;u.Q6J("formControlName",e.name)("checked",e.value)}}function h(n,t){if(1&n&&(u.TgZ(0,"div"),u.TgZ(1,"ion-select-option",15),u._uU(2),u.qZA(),u.qZA()),2&n){var e=t.$implicit,r=u.oxw(3).$implicit;u.xp6(1),u.s9C("value",e),u.xp6(1),u.Oqu(r.options[e])}}function d(n,t){if(1&n&&(u.TgZ(0,"ion-select",14),u.YNc(1,h,3,2,"div",1),u.qZA()),2&n){var e=u.oxw(2).$implicit,r=u.oxw();u.Q6J("formControlName",e.name)("value",e.value),u.xp6(1),u.Q6J("ngForOf",r.keys(e.options))}}function g(n,t){if(1&n&&u._UZ(0,"ion-toggle",13),2&n){var e=u.oxw(2).$implicit;u.Q6J("formControlName",e.name)("checked",e.value)}}function y(n,t){if(1&n&&(u.TgZ(0,"ion-range",16),u._UZ(1,"ion-icon",17),u._UZ(2,"ion-icon",18),u.qZA()),2&n){var e=u.oxw(2).$implicit;u.Q6J("min",e.options.min)("max",e.options.max)("formControlName",e.name),u.xp6(1),u.Q6J("name",e.options.icon),u.xp6(1),u.Q6J("name",e.options.icon)}}var b=function(){return["password","email","number","search","tel","url"]},w=function(){return["text"]};function x(n,t){if(1&n&&(u.TgZ(0,"div"),u.TgZ(1,"ion-item"),u.TgZ(2,"ion-label"),u._uU(3),u.qZA(),u.YNc(4,f,1,3,"ion-input",4),u.YNc(5,m,1,3,"ion-input",5),u.YNc(6,p,1,2,"ion-textarea",6),u.YNc(7,v,1,2,"ion-checkbox",7),u.YNc(8,d,2,3,"ion-select",8),u.YNc(9,g,1,2,"ion-toggle",7),u.YNc(10,y,3,5,"ion-range",9),u.qZA(),u.qZA()),2&n){var e=u.oxw().$implicit;u.xp6(3),u.Oqu(e.label),u.xp6(1),u.Q6J("ngIf",u.DdM(8,b).includes(e.type)),u.xp6(1),u.Q6J("ngIf",u.DdM(9,w).includes(e.type)),u.xp6(1),u.Q6J("ngIf","textarea"===e.type),u.xp6(1),u.Q6J("ngIf","checkbox"===e.type),u.xp6(1),u.Q6J("ngIf","select"===e.type),u.xp6(1),u.Q6J("ngIf","toggle"===e.type),u.xp6(1),u.Q6J("ngIf","range"===e.type)}}function C(n,t){if(1&n&&(u.TgZ(0,"span"),u.YNc(1,x,11,10,"div",3),u.qZA()),2&n){var e=t.$implicit;u.xp6(1),u.Q6J("ngIf",!e.hidden)}}var k=function(){var e=function(){function e(n){i(this,e),this.fb=n,this.formSubmission=new u.vpe,this.myForm=this.fb.group({})}return o(e,[{key:"ngOnChanges",value:function(n){n.jsonFormData.firstChange||this.createForm(this.jsonFormData.controls)}},{key:"createForm",value:function(e){var r,o=function(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=t(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return u=n.done,n},e:function(n){c=!0,a=n},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}(e);try{for(o.s();!(r=o.n()).done;){for(var i=r.value,a=[],u=0,s=Object.entries(i.validators);u<s.length;u++){var l=n(s[u],2),f=l[0],m=l[1];switch(f){case"min":a.push(c.kI.min(m));break;case"max":a.push(c.kI.max(m));break;case"required":m&&a.push(c.kI.required);break;case"requiredTrue":m&&a.push(c.kI.requiredTrue);break;case"email":m&&a.push(c.kI.email);break;case"minLength":a.push(c.kI.minLength(m));break;case"maxLength":a.push(c.kI.maxLength(m));break;case"pattern":a.push(c.kI.pattern(m));break;case"nullValidator":m&&a.push(c.kI.nullValidator)}}this.myForm.addControl(i.name,this.fb.control(i.value,a))}}catch(p){o.e(p)}finally{o.f()}}},{key:"keys",value:function(n){return Object.keys(n)}},{key:"onSubmit",value:function(){this.formSubmission.emit(this.myForm.value)}}]),e}();return e.\u0275fac=function(n){return new(n||e)(u.Y36(c.qu))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-json-form"]],inputs:{jsonFormData:"jsonFormData"},outputs:{formSubmission:"formSubmission"},features:[u.TTD],decls:4,vars:2,consts:[[3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],["type","submit"],[4,"ngIf"],[3,"type","formControlName","value",4,"ngIf"],["oninput","this.value = this.value.toUpperCase()",3,"type","formControlName","value",4,"ngIf"],[3,"formControlName","value",4,"ngIf"],[3,"formControlName","checked",4,"ngIf"],["okText","Okay","cancelText","Dismiss",3,"formControlName","value",4,"ngIf"],[3,"min","max","formControlName",4,"ngIf"],[3,"type","formControlName","value"],["oninput","this.value = this.value.toUpperCase()",3,"type","formControlName","value"],[3,"formControlName","value"],[3,"formControlName","checked"],["okText","Okay","cancelText","Dismiss",3,"formControlName","value"],[3,"value"],[3,"min","max","formControlName"],["size","small","slot","start",3,"name"],["slot","end",3,"name"]],template:function(n,t){1&n&&(u.TgZ(0,"form",0),u.NdJ("ngSubmit",function(){return t.onSubmit()}),u.YNc(1,C,2,1,"span",1),u.TgZ(2,"ion-button",2),u._uU(3,"Submit"),u.qZA(),u.qZA()),2&n&&(u.Q6J("formGroup",t.myForm),u.xp6(1),u.Q6J("ngForOf",null==t.jsonFormData?null:t.jsonFormData.controls))},directives:[c._Y,c.JL,c.sg,s.sg,l.YG,s.O5,l.Ie,l.Q$,l.pK,l.j9,c.JJ,c.u,l.g2,l.nz,l.w,l.t9,l.QI,l.n0,l.ho,l.I_,l.gu],styles:[""],changeDetection:0}),e}()}}])}();