(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+KLJ":function(P,E,e){"use strict";var y=e("pVnL"),d=e.n(y),_=e("lSNA"),m=e.n(_),a=e("J4zp"),D=e.n(a),p=e("cDcd"),G=e("V/uB"),$=e.n(G),I=e("0G8d"),se=e.n(I),ee=e("xddM"),L=e.n(ee),me=e("ESPI"),be=e.n(me),J=e("Z/ur"),F=e.n(J),Z=e("J84W"),Ve=e.n(Z),Ze=e("sKbD"),ke=e.n(Ze),ze=e("72Ab"),nt=e.n(ze),O=e("kbBi"),c=e.n(O),b=e("8XRh"),i=e("TSYQ"),h=e.n(i),ye=e("H84U");function ie(H){return Object.keys(H).reduce(function(R,x){return(x.substr(0,5)==="data-"||x.substr(0,5)==="aria-"||x==="role")&&x.substr(0,7)!=="data-__"&&(R[x]=H[x]),R},{})}var de=e("lwsE"),ce=e.n(de),ue=e("W8MJ"),te=e.n(ue),Be=e("7W2i"),he=e.n(Be),ge=e("LQ03"),Pe=e.n(ge),Le=function(H){he()(x,H);var R=Pe()(x);function x(){var N;return ce()(this,x),N=R.apply(this,arguments),N.state={error:void 0,info:{componentStack:""}},N}return te()(x,[{key:"componentDidCatch",value:function(w,le){this.setState({error:w,info:le})}},{key:"render",value:function(){var w=this.props,le=w.message,fe=w.description,Me=w.children,Ee=this.state,Ce=Ee.error,Oe=Ee.info,He=Oe&&Oe.componentStack?Oe.componentStack:null,u=typeof le=="undefined"?(Ce||"").toString():le,_e=typeof fe=="undefined"?He:fe;return Ce?p.createElement(Fe,{type:"error",message:u,description:p.createElement("pre",null,_e)}):Me}}]),x}(p.Component),Ke=e("0n0R"),Te=function(H,R){var x={};for(var N in H)Object.prototype.hasOwnProperty.call(H,N)&&R.indexOf(N)<0&&(x[N]=H[N]);if(H!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,N=Object.getOwnPropertySymbols(H);w<N.length;w++)R.indexOf(N[w])<0&&Object.prototype.propertyIsEnumerable.call(H,N[w])&&(x[N[w]]=H[N[w]]);return x},De={success:Ve.a,info:nt.a,error:c.a,warning:ke.a},Ae={success:se.a,info:be.a,error:F.a,warning:L.a},qe=function(R){var x,N=R.description,w=R.prefixCls,le=R.message,fe=R.banner,Me=R.className,Ee=Me===void 0?"":Me,Ce=R.style,Oe=R.onMouseEnter,He=R.onMouseLeave,u=R.onClick,_e=R.afterClose,W=R.showIcon,et=R.closable,je=R.closeText,We=R.action,pe=Te(R,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),Ge=p.useState(!1),Je=D()(Ge,2),Qe=Je[0],Ye=Je[1],we=p.useRef(),ve=p.useContext(ye.b),tt=ve.getPrefixCls,xe=ve.direction,T=tt("alert",w),$e=function(S){var Se;Ye(!0),(Se=pe.onClose)===null||Se===void 0||Se.call(pe,S)},lt=function(){var S=pe.type;return S!==void 0?S:fe?"warning":"info"},ot=je?!0:et,at=lt(),st=function(){var S=pe.icon,Se=(N?Ae:De)[at]||null;return S?Object(Ke.c)(S,p.createElement("span",{className:"".concat(T,"-icon")},S),function(){return{className:h()("".concat(T,"-icon"),m()({},S.props.className,S.props.className))}}):p.createElement(Se,{className:"".concat(T,"-icon")})},it=function(){return ot?p.createElement("button",{type:"button",onClick:$e,className:"".concat(T,"-close-icon"),tabIndex:0},je?p.createElement("span",{className:"".concat(T,"-close-text")},je):p.createElement($.a,null)):null},rt=fe&&W===void 0?!0:W,dt=h()(T,"".concat(T,"-").concat(at),(x={},m()(x,"".concat(T,"-with-description"),!!N),m()(x,"".concat(T,"-no-icon"),!rt),m()(x,"".concat(T,"-banner"),!!fe),m()(x,"".concat(T,"-rtl"),xe==="rtl"),x),Ee),ct=ie(pe);return p.createElement(b.b,{visible:!Qe,motionName:"".concat(T,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(S){return{maxHeight:S.offsetHeight}},onLeaveEnd:_e},function(Re){var S=Re.className,Se=Re.style;return p.createElement("div",d()({ref:we,"data-show":!Qe,className:h()(dt,S),style:d()(d()({},Ce),Se),onMouseEnter:Oe,onMouseLeave:He,onClick:u,role:"alert"},ct),rt?st():null,p.createElement("div",{className:"".concat(T,"-content")},p.createElement("div",{className:"".concat(T,"-message")},le),p.createElement("div",{className:"".concat(T,"-description")},N)),We?p.createElement("div",{className:"".concat(T,"-action")},We):null,it())})};qe.ErrorBoundary=Le;var Fe=E.a=qe},"+QRC":function(P,E,e){"use strict";var y=e("E9nw"),d={"text/plain":"Text","text/html":"Url",default:"Text"},_="Copy to clipboard: #{key}, Enter";function m(D){var p=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return D.replace(/#{\s*key\s*}/g,p)}function a(D,p){var G,$,I,se,ee,L,me=!1;p||(p={}),G=p.debug||!1;try{I=y(),se=document.createRange(),ee=document.getSelection(),L=document.createElement("span"),L.textContent=D,L.style.all="unset",L.style.position="fixed",L.style.top=0,L.style.clip="rect(0, 0, 0, 0)",L.style.whiteSpace="pre",L.style.webkitUserSelect="text",L.style.MozUserSelect="text",L.style.msUserSelect="text",L.style.userSelect="text",L.addEventListener("copy",function(J){if(J.stopPropagation(),p.format)if(J.preventDefault(),typeof J.clipboardData=="undefined"){G&&console.warn("unable to use e.clipboardData"),G&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var F=d[p.format]||d.default;window.clipboardData.setData(F,D)}else J.clipboardData.clearData(),J.clipboardData.setData(p.format,D);p.onCopy&&(J.preventDefault(),p.onCopy(J.clipboardData))}),document.body.appendChild(L),se.selectNodeContents(L),ee.addRange(se);var be=document.execCommand("copy");if(!be)throw new Error("copy command was unsuccessful");me=!0}catch(J){G&&console.error("unable to copy using execCommand: ",J),G&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(p.format||"text",D),p.onCopy&&p.onCopy(window.clipboardData),me=!0}catch(F){G&&console.error("unable to copy using clipboardData: ",F),G&&console.error("falling back to prompt"),$=m("message"in p?p.message:_),window.prompt($,D)}}finally{ee&&(typeof ee.removeRange=="function"?ee.removeRange(se):ee.removeAllRanges()),L&&document.body.removeChild(L),I()}return me}P.exports=a},"/thR":function(P,E,e){"use strict";var y=e("TqRt"),d=e("284h");Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var _=d(e("cDcd")),m=y(e("YCuv")),a=y(e("KQxl")),D=function($,I){return _.createElement(a.default,Object.assign({},$,{ref:I,icon:m.default}))};D.displayName="EnterOutlined";var p=_.forwardRef(D);E.default=p},"0OKo":function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var y=d(e("TdNH"));function d(m){return m&&m.__esModule?m:{default:m}}var _=y;E.default=_,P.exports=_},"14J3":function(P,E,e){"use strict";var y=e("cIOH"),d=e("1GLa")},BMrR:function(P,E,e){"use strict";var y=e("qrJ5");E.a=y.a},E9nw:function(P,E){P.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var y=document.activeElement,d=[],_=0;_<e.rangeCount;_++)d.push(e.getRangeAt(_));switch(y.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":y.blur();break;default:y=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||d.forEach(function(m){e.addRange(m)}),y&&y.focus()}}},FMes:function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var y=d(e("/thR"));function d(m){return m&&m.__esModule?m:{default:m}}var _=y;E.default=_,P.exports=_},IzEo:function(P,E,e){"use strict";var y=e("cIOH"),d=e("Znn+"),_=e("14J3"),m=e("jCWc")},MUZu:function(P,E,e){"use strict";var y=e("TqRt"),d=e("284h");Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var _=d(e("cDcd")),m=y(e("ZxNd")),a=y(e("KQxl")),D=function($,I){return _.createElement(a.default,Object.assign({},$,{ref:I,icon:m.default}))};D.displayName="EditOutlined";var p=_.forwardRef(D);E.default=p},TdNH:function(P,E,e){"use strict";var y=e("TqRt"),d=e("284h");Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var _=d(e("cDcd")),m=y(e("m546")),a=y(e("KQxl")),D=function($,I){return _.createElement(a.default,Object.assign({},$,{ref:I,icon:m.default}))};D.displayName="CopyOutlined";var p=_.forwardRef(D);E.default=p},YCuv:function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};E.default=y},ZxNd:function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};E.default=y},bx4M:function(P,E,e){"use strict";var y=e("lSNA"),d=e.n(y),_=e("pVnL"),m=e.n(_),a=e("cDcd"),D=e("TSYQ"),p=e.n(D),G=e("BGR+"),$=e("H84U"),I=function(O,c){var b={};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&c.indexOf(i)<0&&(b[i]=O[i]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,i=Object.getOwnPropertySymbols(O);h<i.length;h++)c.indexOf(i[h])<0&&Object.prototype.propertyIsEnumerable.call(O,i[h])&&(b[i[h]]=O[i[h]]);return b},se=function(c){var b=c.prefixCls,i=c.className,h=c.hoverable,ye=h===void 0?!0:h,ie=I(c,["prefixCls","className","hoverable"]);return a.createElement($.a,null,function(de){var ce=de.getPrefixCls,ue=ce("card",b),te=p()("".concat(ue,"-grid"),i,d()({},"".concat(ue,"-grid-hoverable"),ye));return a.createElement("div",m()({},ie,{className:te}))})},ee=se,L=function(O,c){var b={};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&c.indexOf(i)<0&&(b[i]=O[i]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,i=Object.getOwnPropertySymbols(O);h<i.length;h++)c.indexOf(i[h])<0&&Object.prototype.propertyIsEnumerable.call(O,i[h])&&(b[i[h]]=O[i[h]]);return b},me=function(c){return a.createElement($.a,null,function(b){var i=b.getPrefixCls,h=c.prefixCls,ye=c.className,ie=c.avatar,de=c.title,ce=c.description,ue=L(c,["prefixCls","className","avatar","title","description"]),te=i("card",h),Be=p()("".concat(te,"-meta"),ye),he=ie?a.createElement("div",{className:"".concat(te,"-meta-avatar")},ie):null,ge=de?a.createElement("div",{className:"".concat(te,"-meta-title")},de):null,Pe=ce?a.createElement("div",{className:"".concat(te,"-meta-description")},ce):null,Le=ge||Pe?a.createElement("div",{className:"".concat(te,"-meta-detail")},ge,Pe):null;return a.createElement("div",m()({},ue,{className:Be}),he,Le)})},be=me,J=e("ZTPi"),F=e("BMrR"),Z=e("kPKH"),Ve=e("3Nzz"),Ze=function(O,c){var b={};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&c.indexOf(i)<0&&(b[i]=O[i]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,i=Object.getOwnPropertySymbols(O);h<i.length;h++)c.indexOf(i[h])<0&&Object.prototype.propertyIsEnumerable.call(O,i[h])&&(b[i[h]]=O[i[h]]);return b};function ke(O){var c=O.map(function(b,i){return a.createElement("li",{style:{width:"".concat(100/O.length,"%")},key:"action-".concat(i)},a.createElement("span",null,b))});return c}var ze=function(c){var b,i,h=a.useContext($.b),ye=h.getPrefixCls,ie=h.direction,de=a.useContext(Ve.b),ce=function(T){c.onTabChange&&c.onTabChange(T)},ue=function(){var T;return a.Children.forEach(c.children,function($e){$e&&$e.type&&$e.type===ee&&(T=!0)}),T},te=c.prefixCls,Be=c.className,he=c.extra,ge=c.headStyle,Pe=ge===void 0?{}:ge,Le=c.bodyStyle,Ke=Le===void 0?{}:Le,Te=c.title,De=c.loading,Ae=c.bordered,qe=Ae===void 0?!0:Ae,Fe=c.size,H=c.type,R=c.cover,x=c.actions,N=c.tabList,w=c.children,le=c.activeTabKey,fe=c.defaultActiveTabKey,Me=c.tabBarExtraContent,Ee=c.hoverable,Ce=c.tabProps,Oe=Ce===void 0?{}:Ce,He=Ze(c,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),u=ye("card",te),_e=Ke.padding===0||Ke.padding==="0px"?{padding:24}:void 0,W=a.createElement("div",{className:"".concat(u,"-loading-block")}),et=a.createElement("div",{className:"".concat(u,"-loading-content"),style:_e},a.createElement(F.a,{gutter:8},a.createElement(Z.a,{span:22},W)),a.createElement(F.a,{gutter:8},a.createElement(Z.a,{span:8},W),a.createElement(Z.a,{span:15},W)),a.createElement(F.a,{gutter:8},a.createElement(Z.a,{span:6},W),a.createElement(Z.a,{span:18},W)),a.createElement(F.a,{gutter:8},a.createElement(Z.a,{span:13},W),a.createElement(Z.a,{span:9},W)),a.createElement(F.a,{gutter:8},a.createElement(Z.a,{span:4},W),a.createElement(Z.a,{span:3},W),a.createElement(Z.a,{span:16},W))),je=le!==void 0,We=m()(m()({},Oe),(b={},d()(b,je?"activeKey":"defaultActiveKey",je?le:fe),d()(b,"tabBarExtraContent",Me),b)),pe,Ge=N&&N.length?a.createElement(J.a,m()({size:"large"},We,{className:"".concat(u,"-head-tabs"),onChange:ce}),N.map(function(xe){return a.createElement(J.a.TabPane,{tab:xe.tab,disabled:xe.disabled,key:xe.key})})):null;(Te||he||Ge)&&(pe=a.createElement("div",{className:"".concat(u,"-head"),style:Pe},a.createElement("div",{className:"".concat(u,"-head-wrapper")},Te&&a.createElement("div",{className:"".concat(u,"-head-title")},Te),he&&a.createElement("div",{className:"".concat(u,"-extra")},he)),Ge));var Je=R?a.createElement("div",{className:"".concat(u,"-cover")},R):null,Qe=a.createElement("div",{className:"".concat(u,"-body"),style:Ke},De?et:w),Ye=x&&x.length?a.createElement("ul",{className:"".concat(u,"-actions")},ke(x)):null,we=Object(G.a)(He,["onTabChange"]),ve=Fe||de,tt=p()(u,(i={},d()(i,"".concat(u,"-loading"),De),d()(i,"".concat(u,"-bordered"),qe),d()(i,"".concat(u,"-hoverable"),Ee),d()(i,"".concat(u,"-contain-grid"),ue()),d()(i,"".concat(u,"-contain-tabs"),N&&N.length),d()(i,"".concat(u,"-").concat(ve),ve),d()(i,"".concat(u,"-type-").concat(H),!!H),d()(i,"".concat(u,"-rtl"),ie==="rtl"),i),Be);return a.createElement("div",m()({},we,{className:tt}),pe,Je,Qe,Ye)};ze.Grid=ee,ze.Meta=be;var nt=E.a=ze},fOrg:function(P,E,e){"use strict";var y=e("cIOH")},jCWc:function(P,E,e){"use strict";var y=e("cIOH"),d=e("1GLa")},kPKH:function(P,E,e){"use strict";var y=e("/kpp");E.a=y.a},m546:function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};E.default=y},"s/wZ":function(P,E,e){"use strict";Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var y=d(e("MUZu"));function d(m){return m&&m.__esModule?m:{default:m}}var _=y;E.default=_,P.exports=_},tU7J:function(P,E,e){"use strict";var y=e("cIOH"),d=e("5Dmo"),_=e("5NDa")},wFql:function(P,E,e){"use strict";var y=e("pVnL"),d=e.n(y),_=e("lSNA"),m=e.n(_),a=e("cDcd"),D=e("TSYQ"),p=e.n(D),G=e("c+Xe"),$=e("H84U"),I=e("uaoM"),se=function(l,r){var s={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(s[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(s[t[n]]=l[t[n]]);return s},ee=function(r,s){var t=r.prefixCls,n=r.component,o=n===void 0?"article":n,f=r.className,g=r["aria-label"],v=r.setContentRef,C=r.children,M=se(r,["prefixCls","component","className","aria-label","setContentRef","children"]),U=s;return v&&(Object(I.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),U=Object(G.a)(s,v)),a.createElement($.a,null,function(k){var X=k.getPrefixCls,re=k.direction,oe=o,Q=X("typography",t),ne=p()(Q,m()({},"".concat(Q,"-rtl"),re==="rtl"),f);return a.createElement(oe,d()({className:ne,"aria-label":g,ref:U},M),C)})},L=a.forwardRef(ee);L.displayName="Typography";var me=L,be=me,J=e("cDf5"),F=e.n(J),Z=e("RIqP"),Ve=e.n(Z),Ze=e("lwsE"),ke=e.n(Ze),ze=e("W8MJ"),nt=e.n(ze),O=e("7W2i"),c=e.n(O),b=e("LQ03"),i=e.n(b),h=e("Zm9Q"),ye=e("+QRC"),ie=e.n(ye),de=e("BGR+"),ce=e("s/wZ"),ue=e.n(ce),te=e("NAnI"),Be=e.n(te),he=e("0OKo"),ge=e.n(he),Pe=e("t23M"),Le=e("wEI+"),Ke=e("YMnH"),Te=e("gDlH"),De=e("oHiP"),Ae=function(r){if(typeof window!="undefined"&&window.document&&window.document.documentElement){var s=Array.isArray(r)?r:[r],t=window.document.documentElement;return s.some(function(n){return n in t.style})}return!1},qe=Ae(["flex","webkitFlex","Flex","msFlex"]),Fe=e("3S7+"),H=e("J4zp"),R=e.n(H),x=e("4IlW"),N=e("FMes"),w=e.n(N),le=e("whJP"),fe=function(r){var s=r.prefixCls,t=r["aria-label"],n=r.className,o=r.style,f=r.direction,g=r.maxLength,v=r.autoSize,C=v===void 0?!0:v,M=r.value,U=r.onSave,k=r.onCancel,X=a.useRef(),re=a.useRef(!1),oe=a.useRef(),Q=a.useState(M),ne=R()(Q,2),Ie=ne[0],ae=ne[1];a.useEffect(function(){ae(M)},[M]),a.useEffect(function(){if(X.current&&X.current.resizableTextArea){var B=X.current.resizableTextArea.textArea;B.focus();var A=B.value.length;B.setSelectionRange(A,A)}},[X.current]);var Xe=function(A){var K=A.target;ae(K.value.replace(/[\n\r]/g,""))},Ne=function(){re.current=!0},j=function(){re.current=!1},z=function(A){var K=A.keyCode;if(re.current)return;oe.current=K},Y=function(){U(Ie.trim())},q=function(A){var K=A.keyCode,ut=A.ctrlKey,ft=A.altKey,Et=A.metaKey,pt=A.shiftKey;oe.current===K&&!re.current&&!ut&&!ft&&!Et&&!pt&&(K===x.a.ENTER?Y():K===x.a.ESC&&k())},V=function(){Y()},Ue=p()(s,"".concat(s,"-edit-content"),m()({},"".concat(s,"-rtl"),f==="rtl"),n);return a.createElement("div",{className:Ue,style:o},a.createElement(le.a,{ref:X,maxLength:g,value:Ie,onChange:Xe,onKeyDown:z,onKeyUp:q,onCompositionStart:Ne,onCompositionEnd:j,onBlur:V,"aria-label":t,autoSize:C}),a.createElement(w.a,{className:"".concat(s,"-edit-content-confirm")}))},Me=fe,Ee=e("faye"),Ce=1,Oe=3,He=8,u,_e={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function W(l){if(!l)return 0;var r=l.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function et(l){var r=Array.prototype.slice.apply(l);return r.map(function(s){return"".concat(s,": ").concat(l.getPropertyValue(s),";")}).join("")}function je(l){var r=[];return l.forEach(function(s){var t=r[r.length-1];typeof s=="string"&&typeof t=="string"?r[r.length-1]+=s:r.push(s)}),r}var We=function(l,r,s,t,n){u||(u=document.createElement("div"),u.setAttribute("aria-hidden","true"),document.body.appendChild(u));var o=r.rows,f=r.suffix,g=f===void 0?"":f,v=window.getComputedStyle(l),C=et(v),M=W(v.lineHeight),U=Math.round(M*(o+1)+W(v.paddingTop)+W(v.paddingBottom));u.setAttribute("style",C),u.style.position="fixed",u.style.left="0",u.style.height="auto",u.style.minHeight="auto",u.style.maxHeight="auto",u.style.top="-999999px",u.style.zIndex="-1000",u.style.textOverflow="clip",u.style.whiteSpace="normal",u.style.webkitLineClamp="none";var k=je(Object(h.a)(s));Object(Ee.render)(a.createElement("div",{style:_e},a.createElement("span",{style:_e},k,g),a.createElement("span",{style:_e},t)),u);function X(){return u.offsetHeight<U}if(X())return Object(Ee.unmountComponentAtNode)(u),{content:s,text:u.innerHTML,ellipsis:!1};var re=Array.prototype.slice.apply(u.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(j){var z=j.nodeType;return z!==He}),oe=Array.prototype.slice.apply(u.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Ee.unmountComponentAtNode)(u);var Q=[];u.innerHTML="";var ne=document.createElement("span");u.appendChild(ne);var Ie=document.createTextNode(n+g);ne.appendChild(Ie),oe.forEach(function(j){u.appendChild(j)});function ae(j){ne.insertBefore(j,Ie)}function Xe(j,z){var Y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:z.length,V=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,Ue=Math.floor((Y+q)/2),B=z.slice(0,Ue);if(j.textContent=B,Y>=q-1)for(var A=q;A>=Y;A-=1){var K=z.slice(0,A);if(j.textContent=K,X()||!K)return A===z.length?{finished:!1,reactNode:z}:{finished:!0,reactNode:K}}return X()?Xe(j,z,Ue,q,Ue):Xe(j,z,Y,Ue,V)}function Ne(j,z){var Y=j.nodeType;if(Y===Ce)return ae(j),X()?{finished:!1,reactNode:k[z]}:(ne.removeChild(j),{finished:!0,reactNode:null});if(Y===Oe){var q=j.textContent||"",V=document.createTextNode(q);return ae(V),Xe(V,q)}return{finished:!1,reactNode:null}}return re.some(function(j,z){var Y=Ne(j,z),q=Y.finished,V=Y.reactNode;return V&&Q.push(V),q}),{content:Q,text:u.innerHTML,ellipsis:!0}},pe=function(l,r){var s={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(s[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(s[t[n]]=l[t[n]]);return s},Ge=Ae("webkitLineClamp"),Je=Ae("textOverflow");function Qe(l,r){var s=l.mark,t=l.code,n=l.underline,o=l.delete,f=l.strong,g=l.keyboard,v=r;function C(M,U){if(!M)return;v=a.createElement(U,{},v)}return C(f,"strong"),C(n,"u"),C(o,"del"),C(t,"code"),C(s,"mark"),C(g,"kbd"),v}var Ye="...",we=function(l){c()(s,l);var r=i()(s);function s(){var t;return ke()(this,s),t=r.apply(this,arguments),t.contentRef=a.createRef(),t.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},t.getPrefixCls=function(){var n=t.props.prefixCls,o=t.context.getPrefixCls;return o("typography",n)},t.onExpandClick=function(n){var o=t.getEllipsis(),f=o.onExpand;t.setState({expanded:!0}),f&&f(n)},t.onEditClick=function(){t.triggerEdit(!0)},t.onEditChange=function(n){var o=t.getEditable(),f=o.onChange;f&&f(n),t.triggerEdit(!1)},t.onEditCancel=function(){t.triggerEdit(!1)},t.onCopyClick=function(n){n.preventDefault();var o=t.props,f=o.children,g=o.copyable,v=d()({},F()(g)==="object"?g:null);v.text===void 0&&(v.text=String(f)),ie()(v.text||""),t.setState({copied:!0},function(){v.onCopy&&v.onCopy(),t.copyId=window.setTimeout(function(){t.setState({copied:!1})},3e3)})},t.setEditRef=function(n){t.editIcon=n},t.triggerEdit=function(n){var o=t.getEditable(),f=o.onStart;n&&f&&f(),t.setState({edit:n},function(){!n&&t.editIcon&&t.editIcon.focus()})},t.resizeOnNextFrame=function(){De.a.cancel(t.rafId),t.rafId=Object(De.a)(function(){t.syncEllipsis()})},t}return nt()(s,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(n){var o=this.props.children,f=this.getEllipsis(),g=this.getEllipsis(n);(o!==n.children||f.rows!==g.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),De.a.cancel(this.rafId)}},{key:"getEditable",value:function(n){var o=this.state.edit,f=n||this.props,g=f.editable;return g?d()({editing:o},F()(g)==="object"?g:null):{editing:o}}},{key:"getEllipsis",value:function(n){var o=n||this.props,f=o.ellipsis;return f?d()({rows:1,expandable:!1},F()(f)==="object"?f:null):{}}},{key:"canUseCSSEllipsis",value:function(){var n=this.state.clientRendered,o=this.props,f=o.editable,g=o.copyable,v=this.getEllipsis(),C=v.rows,M=v.expandable,U=v.suffix,k=v.onEllipsis;return U||(f||g||M||!n||k)?!1:C===1?Je:Ge}},{key:"syncEllipsis",value:function(){var n=this.state,o=n.ellipsisText,f=n.isEllipsis,g=n.expanded,v=this.getEllipsis(),C=v.rows,M=v.suffix,U=v.onEllipsis,k=this.props.children;if(!C||C<0||!this.contentRef.current||g)return;if(this.canUseCSSEllipsis())return;Object(I.a)(Object(h.a)(k).every(function(ne){return typeof ne=="string"}),"Typography","`ellipsis` should use string as children only.");var X=We(this.contentRef.current,{rows:C,suffix:M},k,this.renderOperations(!0),Ye),re=X.content,oe=X.text,Q=X.ellipsis;(o!==oe||f!==Q)&&(this.setState({ellipsisText:oe,ellipsisContent:re,isEllipsis:Q}),f!==Q&&U&&U(Q))}},{key:"renderExpand",value:function(n){var o=this.getEllipsis(),f=o.expandable,g=o.symbol,v=this.state,C=v.expanded,M=v.isEllipsis;if(!f)return null;if(!n&&(C||!M))return null;var U;return g?U=g:U=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},U)}},{key:"renderEdit",value:function(){var n=this.props.editable;if(!n)return;var o=n.icon,f=n.tooltip,g=Object(h.a)(f)[0]||this.editStr,v=typeof g=="string"?g:"";return a.createElement(Fe.a,{key:"edit",title:f===!1?"":g},a.createElement(Te.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":v},o||a.createElement(ue.a,{role:"button"})))}},{key:"renderCopy",value:function(){var n=this.state.copied,o=this.props.copyable;if(!o)return;var f=this.getPrefixCls(),g=o.tooltips,v=Object(h.a)(g);v.length===0&&(v=[this.copyStr,this.copiedStr]);var C=n?v[1]:v[0],M=typeof C=="string"?C:"",U=Object(h.a)(o.icon);return a.createElement(Fe.a,{key:"copy",title:g===!1?"":C},a.createElement(Te.a,{className:p()("".concat(f,"-copy"),n&&"".concat(f,"-copy-success")),onClick:this.onCopyClick,"aria-label":M},n?U[1]||a.createElement(Be.a,null):U[0]||a.createElement(ge.a,null)))}},{key:"renderEditInput",value:function(){var n=this.props,o=n.children,f=n.className,g=n.style,v=this.context.direction,C=this.getEditable(),M=C.maxLength,U=C.autoSize;return a.createElement(Me,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:f,style:g,direction:v,maxLength:M,autoSize:U})}},{key:"renderOperations",value:function(n){return[this.renderExpand(n),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var n=this,o=this.state,f=o.ellipsisContent,g=o.isEllipsis,v=o.expanded,C=this.props,M=C.component,U=C.children,k=C.className,X=C.type,re=C.disabled,oe=C.style,Q=pe(C,["component","children","className","type","disabled","style"]),ne=this.context.direction,Ie=this.getEllipsis(),ae=Ie.rows,Xe=Ie.suffix,Ne=this.getPrefixCls(),j=Object(de.a)(Q,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Ve()(Le.a))),z=this.canUseCSSEllipsis(),Y=ae===1&&z,q=ae&&ae>1&&z,V=U;if(ae&&g&&!v&&!z){var Ue=Q.title,B=Ue||"";!Ue&&(typeof U=="string"||typeof U=="number")&&(B=String(U)),B=B==null?void 0:B.slice(String(f||"").length),V=a.createElement(a.Fragment,null,f,a.createElement("span",{title:B,"aria-hidden":"true"},Ye),Xe)}else V=a.createElement(a.Fragment,null,U,Xe);return V=Qe(this.props,V),a.createElement(Ke.a,{componentName:"Text"},function(A){var K,ut=A.edit,ft=A.copy,Et=A.copied,pt=A.expand;return n.editStr=ut,n.copyStr=ft,n.copiedStr=Et,n.expandStr=pt,a.createElement(Pe.a,{onResize:n.resizeOnNextFrame,disabled:!ae},a.createElement(be,d()({className:p()((K={},m()(K,"".concat(Ne,"-").concat(X),X),m()(K,"".concat(Ne,"-disabled"),re),m()(K,"".concat(Ne,"-ellipsis"),ae),m()(K,"".concat(Ne,"-ellipsis-single-line"),Y),m()(K,"".concat(Ne,"-ellipsis-multiple-line"),q),K),k),style:d()(d()({},oe),{WebkitLineClamp:q?ae:null}),component:M,ref:n.contentRef,direction:ne},j),V,n.renderOperations()))})}},{key:"render",value:function(){var n=this.getEditable(),o=n.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(n){var o=n.children,f=n.editable;return Object(I.a)(!f||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),s}(a.Component);we.contextType=$.b,we.defaultProps={children:""};var ve=we,tt=function(l,r){var s={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(s[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(s[t[n]]=l[t[n]]);return s},xe=function(r){var s=r.ellipsis,t=tt(r,["ellipsis"]);return Object(I.a)(F()(s)!=="object","Typography.Text","`ellipsis` only supports boolean value."),a.createElement(ve,d()({},t,{ellipsis:!!s,component:"span"}))},T=xe,$e=function(l,r){var s={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(s[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(s[t[n]]=l[t[n]]);return s},lt=function(r,s){var t=r.ellipsis,n=r.rel,o=$e(r,["ellipsis","rel"]);Object(I.a)(F()(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var f=a.useRef(null);a.useImperativeHandle(s,function(){var v;return(v=f.current)===null||v===void 0?void 0:v.contentRef.current});var g=d()(d()({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete g.navigate,a.createElement(ve,d()({},g,{ref:f,ellipsis:!!t,component:"a"}))},ot=a.forwardRef(lt),at=e("CWQg"),st=function(l,r){var s={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(s[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(s[t[n]]=l[t[n]]);return s},it=Object(at.b)(1,2,3,4,5),rt=function(r){var s=r.level,t=s===void 0?1:s,n=st(r,["level"]),o;return it.indexOf(t)!==-1?o="h".concat(t):(Object(I.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),a.createElement(ve,d()({},n,{component:o}))},dt=rt,ct=function(r){return a.createElement(ve,d()({},r,{component:"div"}))},Re=ct,S=be;S.Text=T,S.Link=ot,S.Title=dt,S.Paragraph=Re;var Se=E.a=S}}]);