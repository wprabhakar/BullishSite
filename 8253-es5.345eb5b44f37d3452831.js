!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[8253],{8253:function(e,n,o){"use strict";o.r(n),o.d(n,{BotSetupPageModule:function(){return k}});var r=o(1116),s=o(1462),a=o(6611),c=o(2782),u=o(4762),h=o(8619),g=o(6907),l=o(2693),d=o(1779),f=o(8993);function m(t,e){if(1&t){var i=h.EpF();h.TgZ(0,"div",5),h.TgZ(1,"ion-icon",6),h.NdJ("click",function(t){return h.CHM(i),h.oxw().onDeleteBot(t)}),h.qZA(),h.qZA()}}function p(t,e){if(1&t&&(h.TgZ(0,"ion-col"),h._uU(1),h.qZA()),2&t){var i=h.oxw(2);h.xp6(1),h.hij("Price 10^",i.leadingZeros," ")}}function v(t,e){1&t&&(h.TgZ(0,"ion-col"),h._uU(1,"Price "),h.qZA())}function Z(t,e){if(1&t&&(h.TgZ(0,"ion-row"),h.TgZ(1,"ion-col"),h._uU(2),h.ALo(3,"date"),h.qZA(),h.TgZ(4,"ion-col"),h._uU(5),h.qZA(),h.TgZ(6,"ion-col"),h._uU(7),h.qZA(),h.qZA()),2&t){var i=e.$implicit,n=h.oxw(2);h.xp6(2),h.Oqu(h.xi3(3,3,i.D,"dd/MM HH:mm")),h.xp6(3),h.Oqu(n.shortNumberDisplay(i.Q,1,3)),h.xp6(2),h.Oqu(n.shortAmount(i.P))}}function y(t,e){if(1&t){var i=h.EpF();h.TgZ(0,"div"),h.TgZ(1,"ion-item",7),h.TgZ(2,"span",0),h.TgZ(3,"ion-chip",8),h.NdJ("click",function(t){return h.CHM(i),h.oxw().onShowOutput(t)}),h._UZ(4,"ion-icon",9),h.TgZ(5,"ion-label"),h._uU(6,"transactions "),h.qZA(),h._UZ(7,"ion-icon",10),h.qZA(),h.qZA(),h.TgZ(8,"span",5),h.TgZ(9,"ion-chip",8),h.NdJ("click",function(t){return h.CHM(i),h.oxw().onDeleteOutput(t)}),h._UZ(10,"ion-icon",11),h.TgZ(11,"ion-label"),h._uU(12,"init bot "),h.qZA(),h._UZ(13,"ion-icon",10),h.qZA(),h.qZA(),h.qZA(),h.TgZ(14,"ion-item"),h.TgZ(15,"p"),h._uU(16),h.qZA(),h.qZA(),h.TgZ(17,"ion-grid",12),h.TgZ(18,"ion-row"),h.TgZ(19,"ion-col"),h._uU(20,"Date"),h.qZA(),h.TgZ(21,"ion-col"),h._uU(22,"Qty"),h.qZA(),h.YNc(23,p,2,1,"ion-col",4),h.YNc(24,v,2,0,"ion-col",4),h.qZA(),h.YNc(25,Z,8,6,"ion-row",13),h.qZA(),h.qZA()}if(2&t){var n=h.oxw();h.xp6(16),h.xDo("Q ",n.shortNumberDisplay(n.dNetQuantity,1,3),", $ ",n.dNetInvestment.toFixed(2),", Avg ",n.dAvgPrice.toFixed(11),", 3% ",n.d3PctPrice.toFixed(11),", 5% ",n.d5PctPrice.toFixed(11),""),h.xp6(7),h.Q6J("ngIf",n.leadingZeros>0),h.xp6(1),h.Q6J("ngIf",n.leadingZeros<=0),h.xp6(1),h.Q6J("ngForOf",n.oT)}}var P,x,T=["","K","M","B","T","Q"],b=[{path:"",component:(P=function(){function e(i,n,o,r,s){t(this,e),this.oLocation=i,this.oAPIService=n,this.http=o,this.router=r,this.oStorage=s,this.sExchange="<notSet>",this.sStrategy="<notSet>",this.sKey=void 0,this.sTitle=void 0,this.bLoaded=!1,this.bNew=!0,this.oT=[],this.dNetInvestment=0,this.dNetQuantity=0,this.dAvgPrice=0,this.d3PctPrice=0,this.d5PctPrice=0,this.dMinPrice=0,this.leadingZeros=0;var a=this.oLocation.getState();console.log(a),this.bNew=a.isNew,null==a||a.isNew||(this.sStrategy=a.Strategy,this.sExchange=a.Exchange,this.sKey=this.getKey(a),console.log(this.sKey),this.oP=a,this.updateValues(a)),null!=a&&a.isNew&&(this.sStrategy=a.Strategy,this.sExchange=a.Exchange,console.log("New Bot Configuration:",this.sStrategy)),this.sTitle=this.getTitle(a)}return i(e,[{key:"onBack",value:function(){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.oLocation.back();case 1:case"end":return t.stop()}},t,this)}))}},{key:"getKey",value:function(t){return this.sExchange+"_"+this.sStrategy+"_"+t.A+t.B}},{key:"getTitle",value:function(t){return this.sExchange+"_"+this.sStrategy}},{key:"shortAmount",value:function(t){return this.leadingZeros<=0?t.toFixed(7).replace(/\.?0+$/,""):(t*Math.pow(10,this.leadingZeros)).toFixed(this.leadingZeros+1)}},{key:"shortNumberDisplay",value:function(t,e,i){if(0===t)return t;var n=Math.floor(Math.log10(Math.abs(t))/3),o=T[n];return(t/Math.pow(10,3*n)).toLocaleString(void 0,{minimumFractionDigits:e,maximumFractionDigits:i})+o}},{key:"readParameters",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.oStorage.get(t);case 2:this.oP=e.sent,this.updateValues(this.oP);case 4:case"end":return e.stop()}},e,this)}))}},{key:"ngOnInit",value:function(){var t=this;this.http.get("/assets/strategy-"+this.sStrategy+".json").subscribe(function(e){return(0,u.mG)(t,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.formData=e,this.updateValues(this.oP);case 1:case"end":return t.stop()}},t,this)}))})}},{key:"updateValues",value:function(t){if(void 0!==t&&null!=t&&null!=this.formData&&!this.bLoaded){this.bLoaded=!0,console.log(this.oP);for(var e=this.formData.controls.length,i=Object.keys(t),n=0;n<i.length;n++)for(var o=i[n],r=0;r<e;r++)this.formData.controls[r].name==o&&(this.formData.controls[r].value=t[o]);console.log(this.formData.controls)}}},{key:"onDeleteBot",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.oAPIService.send2ServerPDelete("bot-config/"+this.getKey(this.oP)).then(function(t){return(0,u.mG)(e,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=void 0!==this.sKey,!t.t0){t.next=4;break}return t.next=4,this.oStorage.remove(this.sKey);case 4:return t.next=6,this.router.navigateByUrl("bot-list");case 6:case"end":return t.stop()}},t,this)}))});case 2:case"end":return t.stop()}},t,this)}))}},{key:"onDeleteOutput",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.oAPIService.send2ServerPDelete("output/"+this.getKey(this.oP));case 3:case"end":return e.stop()}},e,this)}))}},{key:"getDecimalPlaces",value:function(t){var e=String(t);return e.includes(".")?e.split(".")[1].length:0}},{key:"onShowOutput",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.oT=[],this.dMinPrice=Number.MAX_VALUE,t.next=4,this.oAPIService.send2ServerP("output/"+this.getKey(this.oP)).then(function(t){return(0,u.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var i,n,o,r,s,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t&&void 0!==t.T){e.next=2;break}return e.abrupt("return");case 2:i=t.T.length,this.dNetInvestment=0,this.dNetQuantity=0,n=0;case 5:if(!(n<i)){e.next=13;break}if("FILLED"==t.T[n].Status){e.next=8;break}return e.abrupt("continue",10);case 8:o=t.T[n].D,r=this.getDecimalPlaces(t.T[n].Q),s=this.getDecimalPlaces(t.T[n].P),r=s<3?Math.min(r+s,7):Math.min(r,0),this.dMinPrice=Math.min(t.T[n].P),"S"==t.T[n].Dir?(t.T[n].Q=-1*t.T[n].Q,this.dNetInvestment+=t.T[n].P*t.T[n].Q*.998):this.dNetInvestment+=t.T[n].P*t.T[n].Q*1.002,this.dNetQuantity+=t.T[n].Q,this.oT.push({D:o,Q:t.T[n].Q.toFixed(r),P:t.T[n].P,$:Number(t.T[n].Q)*Number(t.T[n].P)});case 10:n++,e.next=5;break;case 13:(""+this.dMinPrice).split("."),this.dMinPrice>=1e-4?this.leadingZeros=0:(a=this.dMinPrice.toFixed(18).replace(/\.?0+$/,""),this.leadingZeros=a.substring(0,a.lastIndexOf("0")+1).length-2,this.leadingZeros<3?this.leadingZeros=0:this.leadingZeros-=2),0!=this.dNetQuantity&&(this.dAvgPrice=this.dNetInvestment/this.dNetQuantity),this.dNetQuantity<0?(this.d3PctPrice=.97*this.dAvgPrice,this.d5PctPrice=.95*this.dAvgPrice):(this.d3PctPrice=1.03*this.dAvgPrice,this.d5PctPrice=1.05*this.dAvgPrice);case 15:case"end":return e.stop()}},e,this)}))});case 4:case"end":return t.stop()}},t,this)}))}},{key:"onFormSubmit",value:function(t){return(0,u.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.bNew&&(t.Exchange=this.sExchange),console.log(t.Exchange,this.sExchange),this.sKey=this.getKey(t),console.log(this.sKey),this.oStorage.set(this.sKey,t),console.log(t),e.next=8,this.oAPIService.send2ServerP("bot-config",!0,t);case 8:return e.next=10,this.router.navigateByUrl("bot-list");case 10:case"end":return e.stop()}},e,this)}))}}]),e}(),P.\u0275fac=function(t){return new(t||P)(h.Y36(r.Ye),h.Y36(g.D),h.Y36(l.eN),h.Y36(c.F0),h.Y36(d.V))},P.\u0275cmp=h.Xpm({type:P,selectors:[["app-bot-setup"]],decls:11,vars:4,consts:[["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding"],[3,"jsonFormData","formSubmission"],[4,"ngIf"],["slot","end"],["name","trash",3,"click"],["item-end",""],[3,"click"],["name","albums","color","primary"],["color","primary"],["name","close","color","primary"],[1,"ion-margin"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-title"),h._uU(3),h.qZA(),h.TgZ(4,"ion-buttons",0),h._UZ(5,"ion-back-button"),h.qZA(),h.YNc(6,m,2,0,"div",1),h.qZA(),h.qZA(),h.TgZ(7,"ion-content",2),h.TgZ(8,"div"),h.TgZ(9,"app-json-form",3),h.NdJ("formSubmission",function(t){return e.onFormSubmit(t)}),h.qZA(),h.qZA(),h.YNc(10,y,26,8,"div",4),h.qZA()),2&t&&(h.xp6(3),h.Oqu(e.sTitle),h.xp6(3),h.Q6J("ngIf",void 0!==e.sKey),h.xp6(3),h.Q6J("jsonFormData",e.formData),h.xp6(1),h.Q6J("ngIf",void 0!==e.sKey))},directives:[a.Gu,a.sr,a.wd,a.Sm,a.oU,a.cs,r.O5,a.W2,f.u,a.gu,a.Ie,a.hM,a.Q$,a.jY,a.Nd,a.wI,r.sg],pipes:[r.uU],styles:["ion-col[_ngcontent-%COMP%]{text-align:right}ion-icon[_ngcontent-%COMP%]{margin:10px;font-size:large}"]}),P)}],A=function(){var e=i(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.oAB({type:e}),e.\u0275inj=h.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),e}(),w=o(6737),k=((x=i(function e(){t(this,e)})).\u0275fac=function(t){return new(t||x)},x.\u0275mod=h.oAB({type:x}),x.\u0275inj=h.cJS({imports:[[r.ez,s.UX,a.Pc,A,l.JF,w.G]]}),x)}}])}();