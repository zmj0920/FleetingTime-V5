(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{NGMh:function(h,p,a){"use strict";a.r(p);var ie=a("DYRE"),C=a("zeV3"),ce=a("Znn+"),U=a("ZTPi"),X=a("o0o1"),c=a.n(X),Ee=a("miYZ"),T=a("tsqr"),R=a("HaE+"),P=a("ODXe"),b=a("cJ7L"),B=a("MGYb"),S=a("FQ2w"),I=a("cGnJ"),G=a("Y0UT"),z=a("80zm"),V=a("CZrw"),J=a("mxmt"),Y=a.n(J),L=a("cDcd"),e=a.n(L),Z=a("VMEa"),M=a("Qurx"),K=a("/aGu"),W=a("tneF"),s=a("9kvl"),$=a("55Ip"),Q=a("U1il"),H=a("0iz5"),t={container:"container___2XU-J",lang:"lang___3UZBu",content:"content___232he",top:"top___2e5qd",header:"header___1G_uO",logo:"logo___2RIUt",title:"title___3xYCK",desc:"desc___1GQtf",main:"main___oMoRI",icon:"icon___1dSHb",other:"other___3ljbI",register:"register___1vN_i",prefixIcon:"prefixIcon___57iuX"},O=a("8GfK"),me=a("fOrg"),w=a("+KLJ"),k=function(E){var g=E.content,_=E.type;return e.a.createElement(w.a,{style:{marginBottom:24},message:g,type:_,showIcon:!0})},N=k,q=a("34ay"),ee=function(){var E=s.history.location.query;s.history.push(E.redirect||"/")},ae=function(){var E=Object(L.useState)({}),g=Object(P.a)(E,2),_=g[0],te=g[1],se=Object(L.useState)("account"),x=Object(P.a)(se,2),f=x[0],ne=x[1],r=Object(s.useIntl)(),oe=Object(s.useModel)("@@initialState"),re=oe.refresh,F=Object(H.a)(O.d,{manual:!0,onError:function(){}}),le=F.loading,ue=F.run,de=function(o){var l=Object.assign(o,{type:f});ue(l).then(function(){var m=Object(R.a)(c.a.mark(function d(n){var v,j;return c.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(te(n),v=n.tokenValue,j=n.status,!(j=="ok")){i.next=10;break}if(!v){i.next=8;break}return Object(q.c)("tokenValue",v),i.next=7,re();case 7:ee();case 8:i.next=11;break;case 10:T.default.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 11:case"end":return i.stop()}},d)}));return function(d){return m.apply(this,arguments)}}())},y=_.status,D=_.type;return e.a.createElement("div",{className:t.container},e.a.createElement("div",{className:t.lang},e.a.createElement(s.SelectLang,null)),e.a.createElement("div",{className:t.content},e.a.createElement("div",{className:t.top},e.a.createElement("div",{className:t.header},e.a.createElement($.a,{to:"/"},e.a.createElement("img",{alt:"logo",className:t.logo,src:Y.a}),e.a.createElement("span",{className:t.title},"Ant Design"))),e.a.createElement("div",{className:t.desc},"Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303")),e.a.createElement("div",{className:t.main},e.a.createElement(Z.a,{initialValues:{autoLogin:!0},submitter:{render:function(o,l){return l.pop()},submitButtonProps:{loading:le,size:"large",style:{width:"100%"}}},onFinish:function(){var u=Object(R.a)(c.a.mark(function o(l){return c.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:de(l);case 1:case"end":return d.stop()}},o)}));return function(o){return u.apply(this,arguments)}}()},e.a.createElement(U.a,{activeKey:f,onChange:ne},e.a.createElement(U.a.TabPane,{key:"account",tab:r.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})}),e.a.createElement(U.a.TabPane,{key:"mobile",tab:r.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"})})),y==="error"&&D==="account"&&e.a.createElement(N,{content:r.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design)"}),type:"error"}),f==="account"&&e.a.createElement(e.a.Fragment,null,e.a.createElement(M.a,{name:"username",fieldProps:{size:"large",prefix:e.a.createElement(b.a,{className:t.prefixIcon})},placeholder:r.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:e.a.createElement(s.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),e.a.createElement(M.a.Password,{name:"password",fieldProps:{size:"large",prefix:e.a.createElement(B.a,{className:t.prefixIcon})},placeholder:r.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:e.a.createElement(s.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})),y==="error"&&D==="mobile"&&e.a.createElement(N,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF",type:"error"}),f==="mobile"&&e.a.createElement(e.a.Fragment,null,e.a.createElement(M.a,{fieldProps:{size:"large",prefix:e.a.createElement(S.a,{className:t.prefixIcon})},name:"mobile",placeholder:r.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:e.a.createElement(s.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:e.a.createElement(s.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),e.a.createElement(K.a,{fieldProps:{size:"large",prefix:e.a.createElement(I.a,{className:t.prefixIcon})},captchaProps:{size:"large"},placeholder:r.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(o,l){return o?"".concat(l," ").concat(r.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):r.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:e.a.createElement(s.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var u=Object(R.a)(c.a.mark(function o(l){var m;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(O.b)(l);case 2:if(m=n.sent,!(m===!1)){n.next=5;break}return n.abrupt("return");case 5:T.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return n.stop()}},o)}));return function(o){return u.apply(this,arguments)}}()})),e.a.createElement("div",{style:{marginBottom:24}},e.a.createElement(W.a,{noStyle:!0,name:"autoLogin"},e.a.createElement(s.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})),e.a.createElement("a",{style:{float:"right"}},e.a.createElement(s.FormattedMessage,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})))),e.a.createElement(C.b,{className:t.other},e.a.createElement(s.FormattedMessage,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"}),e.a.createElement(G.a,{className:t.icon}),e.a.createElement(z.a,{className:t.icon}),e.a.createElement(V.a,{className:t.icon})))),e.a.createElement(Q.a,null))},ge=p.default=ae},mxmt:function(h,p,a){h.exports=a.p+"static/logo.f0355d39.svg"}}]);
