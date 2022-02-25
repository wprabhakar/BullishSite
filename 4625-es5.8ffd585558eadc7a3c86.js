!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[4625],{4625:function(e,o,i){"use strict";i.r(o),i.d(o,{BotListPageModule:function(){return w}});var r=i(1116),c=i(1462),s=i(2693),a=i(6611),u=i(2782),g=i(4762),f=i(8619),l=i(6907),d=i(1779),h=i(3750);function p(t,e){if(1&t){var n=f.EpF();f.TgZ(0,"ion-col",6),f.TgZ(1,"ion-card",7),f.TgZ(2,"ion-card-header"),f.TgZ(3,"ion-card-subtitle"),f._UZ(4,"img",8),f.TgZ(5,"ion-toggle",9),f.NdJ("click",function(){var t=f.CHM(n).$implicit,e=f.oxw();return t.Enabled=!t.Enabled,e.onEnableDisableBot(t)}),f.qZA(),f.qZA(),f.qZA(),f.TgZ(6,"ion-card"),f.TgZ(7,"ion-card-content"),f.TgZ(8,"ion-row",3),f.NdJ("click",function(){var t=f.CHM(n).$implicit;return f.oxw().onEditBot(t)}),f.TgZ(9,"ion-col"),f._uU(10),f.qZA(),f.TgZ(11,"ion-col",10),f._uU(12),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()}if(2&t){var o=e.$implicit,i=f.oxw();f.Q6J("size",12),f.xp6(4),f.Q6J("src",i.getLogo(o),f.LSH),f.xp6(1),f.s9C("checked",o.Enabled),f.xp6(5),f.lnq("",o.A,"/",o.B," [",o.Strategy,"]"),f.xp6(2),f.hij(" Invest ",o.$," ")}}var m,v,Z=[{path:"",component:(m=function(){function e(n,o,i,r,c){t(this,e),this.http=n,this.oAPIService=o,this.router=i,this.oStorage=r,this.auth=c,this.oBotList=[],this.bRemote=!0}return n(e,[{key:"ngOnInit",value:function(){}},{key:"onLogout",value:function(){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.auth.logout(),t.next=3,this.router.navigateByUrl("");case 3:case"end":return t.stop()}},t,this)}))}},{key:"onCreateBot",value:function(){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.router.navigateByUrl("bot-strategy");case 2:case"end":return t.stop()}},t,this)}))}},{key:"onEditBot",value:function(t){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.router.navigateByUrl("bot-setup",{state:t});case 2:case"end":return e.stop()}},e,this)}))}},{key:"onEnableDisableBot",value:function(t){return(0,g.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.oStorage.set(t.Exchange+"_"+t.Strategy+"_"+t.A+t.B,t),e.t0=this.bRemote,!e.t0){e.next=5;break}return e.next=5,this.oAPIService.send2ServerP("bot-config",!0,t);case 5:this.ionViewWillEnter();case 6:case"end":return e.stop()}},e,this)}))}},{key:"ionViewWillEnter",value:function(){var t=this;this.bRemote?this.oAPIService.send2ServerP("bot-config",!1).then(function(e){return(0,g.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.oBotList=e;case 1:case"end":return t.stop()}},t,this)}))}):this.oStorage.getBots().then(function(e){t.oBotList=e})}},{key:"getLogo",value:function(t){var e=t.Exchange;return"aax"==e?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-cjwYdOQkpnvfr2gygRlocp8Od5R1LzmFRe3FSiW7u4VTppf":"kucoin"==e?"https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg":"lbank"==e?"https://www.lbank.info/fstatic/img/logo-03.svg":""}}]),e}(),m.\u0275fac=function(t){return new(t||m)(f.Y36(s.eN),f.Y36(l.D),f.Y36(u.F0),f.Y36(d.V),f.Y36(h.$))},m.\u0275cmp=f.Xpm({type:m,selectors:[["app-bot-list"]],decls:13,vars:1,consts:[["color","dark"],[1,"ion-text-capitalize"],["slot","end"],[3,"click"],["fixed",""],["size-sm","6","size-md","4","size-lg","4",3,"size",4,"ngFor","ngForOf"],["size-sm","6","size-md","4","size-lg","4",3,"size"],["mode","ios"],[1,"card-img",3,"src"],[2,"float","right",3,"checked","click"],["ion-align-items-end",""]],template:function(t,e){1&t&&(f.TgZ(0,"ion-header",0),f.TgZ(1,"ion-toolbar"),f.TgZ(2,"ion-title",1),f._uU(3,"Botsv1.0"),f.qZA(),f.TgZ(4,"ion-buttons",2),f.TgZ(5,"ion-button",3),f.NdJ("click",function(){return e.onCreateBot()}),f._uU(6,"New Bot"),f.qZA(),f.TgZ(7,"ion-button",3),f.NdJ("click",function(){return e.onLogout()}),f._uU(8,"Logout"),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(9,"ion-content",0),f.TgZ(10,"ion-grid",4),f.TgZ(11,"ion-row"),f.YNc(12,p,13,7,"ion-col",5),f.qZA(),f.qZA(),f.qZA()),2&t&&(f.xp6(12),f.Q6J("ngForOf",e.oBotList))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.YG,a.W2,a.jY,a.Nd,r.sg,a.wI,a.PM,a.Zi,a.tO,a.ho,a.w,a.FN],styles:[""]}),m)}],b=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),e}(),w=((v=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||v)},v.\u0275mod=f.oAB({type:v}),v.\u0275inj=f.cJS({imports:[[r.ez,c.UX,a.Pc,b,s.JF]]}),v)}}])}();