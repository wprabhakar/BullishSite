!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[4764],{74764:function(t,o,r){"use strict";r.r(o),r.d(o,{LoginPageModule:function(){return w}});var i,u,a=r(61116),s=r(11462),c=r(96611),f=r(2782),h=r(64762),p=r(8619),l=r(42693),m=r(63750),g=r(98993),d=[{path:"",component:(i=function(){function t(e,o,r){n(this,t),this.http=e,this.router=o,this.auth=r,this.oErrorMessage=""}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.auth.exists()&&this.auth.logout(),this.http.get("/assets/login-form.json").subscribe(function(t){return(0,h.mG)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.formData=t;case 1:case"end":return n.stop()}},n,this)}))})}},{key:"onFormSubmit",value:function(n){return(0,h.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.auth.login(n).then(function(n){e.auth.setLoggedIn(n),e.router.navigateByUrl("bot-list")}).catch(function(n){e.oErrorMessage="Invalid Credentials ?"});case 1:case"end":return t.stop()}},t,this)}))}}]),t}(),i.\u0275fac=function(n){return new(n||i)(p.Y36(l.eN),p.Y36(f.F0),p.Y36(m.$))},i.\u0275cmp=p.Xpm({type:i,selectors:[["app-login"]],decls:8,vars:2,consts:[[1,"ion-padding"],[3,"jsonFormData","formSubmission"]],template:function(n,t){1&n&&(p.TgZ(0,"ion-header"),p.TgZ(1,"ion-toolbar"),p.TgZ(2,"ion-title"),p._uU(3,"login"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(4,"ion-content",0),p.TgZ(5,"div"),p._uU(6),p.qZA(),p.TgZ(7,"app-json-form",1),p.NdJ("formSubmission",function(n){return t.onFormSubmit(n)}),p.qZA(),p.qZA()),2&n&&(p.xp6(6),p.Oqu(t.oErrorMessage),p.xp6(1),p.Q6J("jsonFormData",t.formData))},directives:[c.Gu,c.sr,c.wd,c.W2,g.u],styles:[""]}),i)}],v=function(){var t=e(function t(){n(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[f.Bz.forChild(d)],f.Bz]}),t}(),b=r(66737),w=((u=e(function t(){n(this,t)})).\u0275fac=function(n){return new(n||u)},u.\u0275mod=p.oAB({type:u}),u.\u0275inj=p.cJS({imports:[[a.ez,s.UX,c.Pc,l.JF,v,b.G]]}),u)},64762:function(n,t,e){"use strict";function o(n,t,e,o){return new(e||(e=Promise))(function(r,i){function u(n){try{s(o.next(n))}catch(t){i(t)}}function a(n){try{s(o.throw(n))}catch(t){i(t)}}function s(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e(function(n){n(t)})).then(u,a)}s((o=o.apply(n,t||[])).next())})}e.d(t,{mG:function(){return o}})}}])}();