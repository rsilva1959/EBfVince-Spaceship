(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{474:function(e,t,n){"use strict";n.r(t);var r=n(18),o=(n(57),n(0)),c=n(409),d=(n(410),n(411),n(415),n(412),o.a.extend({middleware:"securePage",data:function(){return{messages:[],idToken:""}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===(n=Object(c.rb)().currentUser)||void 0===n?void 0:n.getIdToken();case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0="";case 5:e.idToken=t.t0;case 6:case"end":return t.stop()}}),t)})))()},computed:{authUser:function(){return this.$store.state.auth.authUser}},mounted:function(){}})),l=n(92),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Hello "+e._s(e.authUser.displayName)+" 🎈")]),e._v(" "),n("p",[e._v("Authorization: Bearer "+e._s(e.idToken))]),e._v(" "),n("ul",e._l(e.messages,(function(t){return n("li",{key:t.id},[e._v("\n      "+e._s(t.data().name)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);