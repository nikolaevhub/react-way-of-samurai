(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[6],{244:function(e,t,a){e.exports={formControl:"FormsControls_formControl__3jh4Z",error:"FormsControls_error__2KkGE",formSummaryError:"FormsControls_formSummaryError__3g1QG"}},245:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return d}));var n=a(257),r=a(0),s=a.n(r),o=a(244),i=a.n(o),c=a(112),u=function(e){return function(t){var a=t.input,r=t.meta,o=r.touched,c=r.error,u=Object(n.a)(t,["input","meta"]),l=o&&c;return s.a.createElement("div",{className:i.a.formControl+" "+(l?i.a.error:"")},s.a.createElement(e,Object.assign({},a,u)),l&&s.a.createElement("span",null," ",c," "))}},l=u("textarea"),m=u("input"),d=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return s.a.createElement("div",null,s.a.createElement(c.a,Object.assign({placeholder:e,component:n,name:t,validate:a},r)),o)}},247:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},250:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__1pc4J",dialogsItems:"Dialogs_dialogsItems__3w5YH",active:"Dialogs_active__1fIWS",messages:"Dialogs_messages__KLwWz"}},255:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(39),r=a(40),s=a(42),o=a(41),i=a(0),c=a.n(i),u=a(7),l=a(33),m=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var t=function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(m)(t)}},319:function(e,t,a){"use strict";a.r(t);var n=a(76),r=a(0),s=a.n(r),o=a(250),i=a.n(o),c=a(17),u=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:i.a.dialog+" "+i.a.active},s.a.createElement(c.b,{to:t},e.name))},l=function(e){return s.a.createElement("div",{className:i.a.message},e.message)},m=a(112),d=a(113),g=a(245),f=a(247),b=Object(f.a)(50),v=Object(d.a)({form:"dialogsAddMessage"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(m.a,{name:"newMessageText",component:g.b,placeholder:"Enter new message",validate:[f.b,b]}," "),s.a.createElement("div",null,s.a.createElement("button",null,"Add message")))})),p=function(e){var t=e.dialogsPage.dialogs,a=e.dialogsPage.messages,n=t.map((function(e){return s.a.createElement(u,{name:e.name,key:e.id,id:e.id})})),r=a.map((function(e){return s.a.createElement(l,{message:e.message,key:e.id})}));return s.a.createElement("div",{className:i.a.dialogs},s.a.createElement("div",{className:i.a.dialogsItems},n),s.a.createElement("div",{className:i.a.messages},r,s.a.createElement(v,{onSubmit:function(t){e.addMessage(t.newMessageText)}})))},E=a(33),_=a(255),h=a(21);t.default=Object(h.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:n.a}),_.a)(p)}}]);
//# sourceMappingURL=6.c1b8a2f4.chunk.js.map