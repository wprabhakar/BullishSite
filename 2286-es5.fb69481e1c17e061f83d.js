(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[2286],{2286:function(t,e,n){"use strict";n.r(e),n.d(e,{createSwipeBackGesture:function(){return i}});var r=n(1843),a=n(5043);n(6953);var i=function(t,e,n,i,u){var o=t.ownerDocument.defaultView;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){i(t.deltaX/o.innerWidth)},onEnd:function(t){var e=o.innerWidth,n=t.deltaX/e,a=t.velocityX,i=a>=0&&(a>.2||t.deltaX>e/2),c=(i?1-n:n)*e,s=0;if(c>5){var f=c/Math.abs(a);s=Math.min(f,540)}u(i,n<=0?.01:(0,r.j)(0,n,.9999),s)}})}}}]);