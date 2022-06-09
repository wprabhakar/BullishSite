!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[4764],{6907:function(e,r,i){"use strict";i.d(r,{D:function(){return c}});var o=i(4914),s=i(8619),u=i(2693),a=i(3750),c=function(){var e=function(){function e(n,r){t(this,e),this.http=n,this.authenticationService=r}return n(e,[{key:"getFromURL",value:function(t){return this.http.get(t).toPromise()}},{key:"getData",value:function(t){return this.http.get(""+t).toPromise()}},{key:"postData",value:function(t,e){return this.http.post(""+t,e).toPromise()}},{key:"send2Server",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return console.log(t),e?this.http.post(t,n).toPromise():this.http.get(t).toPromise()}},{key:"getURL",value:function(){var t=this.authenticationService.userValue;return null!==t?o.U+"api/"+t+"/":o.U+"api/"}},{key:"send2ServerRoot",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?this.http.post(o.U+t,n).toPromise():this.http.get(o.U+t).toPromise()}},{key:"send2ServerC",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?this.http.post(this.getURL()+t,n).toPromise():this.http.get(this.getURL()+t).toPromise()}},{key:"send2ServerP",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?this.http.post(this.getURL()+t,n).toPromise():this.http.get(this.getURL()+t).toPromise()}},{key:"send2ServerPDelete",value:function(t){return this.http.delete(this.getURL()+t).toPromise()}},{key:"send2ServerPlainText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?this.http.post(this.getURL()+t,n).toPromise():this.http.get(this.getURL()+t).toPromise()}},{key:"fileUpload",value:function(t,e){var n=new Headers;return n.append("Content-Type","multipart/form-data"),n.append("enctype","multipart/form-data"),n.append("Accept","application/json"),console.log(e),new Promise(function(n,r){var i=new XMLHttpRequest;i.onreadystatechange=function(){4==i.readyState&&(200==i.status?n(i.response):r(i.response))},i.open("POST",t,!0),i.send(e)})}},{key:"send2ServerPImage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e?this.http.post(this.getURL()+t,n,{responseType:"text"}).toPromise():this.http.get(this.getURL()+t,{responseType:"text"}).toPromise()}},{key:"sort",value:function(t,e){t.sort(function(t,n){for(var r=0;r<e.length;r++){var i=t[e[r].field]<n[e[r].field]?-1:t[e[r].field]>n[e[r].field]?1:0;if("desc"==e[r].direction&&(i*=-1),0!==i)return i}})}},{key:"stringToDate",value:function(t,e,n){var r=e.toLowerCase().split(n),i=t.split(n),o=r.indexOf("mm"),s=r.indexOf("dd"),u=r.indexOf("yyyy"),a=parseInt(i[o]);return a-=1,new Date(parseInt(i[u]),a,parseInt(i[s]))}},{key:"setTime",value:function(t,e){var n,r,i=e.match(/(\d+)[\.|:](\d+)\s?(\w+)/),o=/am/i.test(i[3])?(r=parseInt(i[1],10))<12?r:0:(n=parseInt(i[1],10))<12?n+12:12,s=parseInt(i[2],10);return t.setHours(o),t.setMinutes(s),t.setSeconds(0),t}},{key:"setTime24Hrs",value:function(t,e){var n=e.split(":"),r=parseInt(n[0]),i=parseInt(n[1]);return t.setHours(r),t.setMinutes(i),t}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.LFG(u.eN),s.LFG(a.$))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},4764:function(e,r,i){"use strict";i.r(r),i.d(r,{LoginPageModule:function(){return w}});var o,s,u=i(1116),a=i(1462),c=i(6611),h=i(2782),p=i(4762),l=i(8619),f=i(2693),v=i(6907),d=i(3750),g=i(9624),m=i(8993),y=[{path:"",component:(o=function(){function e(n,r,i,o,s){t(this,e),this.http=n,this.router=r,this.oAPIService=i,this.auth=o,this.sanitizer=s,this.oErrorMessage="",this.bDisableQR=!0}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.auth.exists()&&this.auth.logout(),this.http.get("/assets/login-form.json").subscribe(function(e){return(0,p.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.formData=e;case 1:case"end":return t.stop()}},t,this)}))}),this.bDisableQR||this.oAPIService.send2ServerPImage("qrcode/digiid").then(function(e){t.svg=t.sanitizer.bypassSecurityTrustHtml(e)})}},{key:"onFormSubmit",value:function(t){return(0,p.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.auth.login(t).then(function(t){n.auth.setLoggedIn(t),n.router.navigateByUrl("bot-list")}).catch(function(t){n.oErrorMessage="Invalid Credentials ?"});case 1:case"end":return e.stop()}},e,this)}))}}]),e}(),o.\u0275fac=function(t){return new(t||o)(l.Y36(f.eN),l.Y36(h.F0),l.Y36(v.D),l.Y36(d.$),l.Y36(g.H7))},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-login"]],decls:9,vars:2,consts:[[1,"ion-padding"],[3,"jsonFormData","formSubmission"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"login"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(4,"ion-content",0),l.TgZ(5,"div"),l._uU(6),l.qZA(),l.TgZ(7,"div"),l.TgZ(8,"app-json-form",1),l.NdJ("formSubmission",function(t){return e.onFormSubmit(t)}),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(6),l.Oqu(e.oErrorMessage),l.xp6(2),l.Q6J("jsonFormData",e.formData))},directives:[c.Gu,c.sr,c.wd,c.W2,m.u],styles:[".svg1[_ngcontent-%COMP%]{padding:0;width:158px;height:158px;background-color:#fff}.svg[_ngcontent-%COMP%]{width:48px;height:48px;transform:scale(.25);fill:#000}"]}),o)}],P=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[h.Bz.forChild(y)],h.Bz]}),e}(),k=i(6737),w=((s=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[u.ez,a.UX,c.Pc,f.JF,P,k.G]]}),s)},4762:function(t,e,n){"use strict";function r(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(e){o(e)}}function u(t){try{a(r.throw(t))}catch(e){o(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,u)}a((r=r.apply(t,e||[])).next())})}n.d(e,{mG:function(){return r}})}}])}();