(this["webpackJsonpece-learn"]=this["webpackJsonpece-learn"]||[]).push([[0],{14:function(e,t,c){e.exports={"note-layout":"note_note-layout__38wm_"}},20:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(15),r=c(2),a=c.n(r),s=c(11),i=c.n(s),o=(c(20),c(5)),l=c(12),j=c(13),b=c(4),d=c.n(b),h=c(0),u=function(e){var t=Object(r.useState)(""),c=Object(o.a)(t,2),n=c[0],a=c[1],s=function(){var t=document.getElementById("myTopNav");t.className===d.a["top-nav"]?t.className+=" ".concat(d.a.responsive):t.className=d.a["top-nav"],e.stickHandler(t.offsetHeight)},i=function(t){s(),e.gradeClick(t.target.value)};return Object(h.jsxs)("div",{className:d.a["top-nav"],id:"myTopNav",children:[Object(h.jsx)("button",{className:d.a.active,children:"NYCU ECE"}),Object(h.jsx)("button",{value:"first",onClick:i,children:"\u5927\u4e00"}),Object(h.jsx)("button",{value:"second",onClick:i,children:"\u5927\u4e8c"}),Object(h.jsx)("button",{value:"third",onClick:i,children:"\u5927\u4e09"}),Object(h.jsx)("button",{value:"fourth",onClick:i,children:"\u5927\u56db"}),Object(h.jsx)("button",{value:"readme",onClick:i,children:"README"}),Object(h.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:function(t){a(t.target.value),e.textChange(t.target.value)}}),Object(h.jsx)("button",{className:d.a.icon,onClick:s,children:Object(h.jsx)(l.a,{icon:j.a})})]})},x=(c(27),c(3)),O=c.n(x),p=function(e){return Object(h.jsxs)("tr",{className:O.a["big-tr"],children:[Object(h.jsx)("td",{className:O.a["center-col"],children:e.index+1},"0"),Object(h.jsx)("td",{className:O.a["center-col"],children:e.item[0]},"1"),Object(h.jsx)("td",{className:O.a["center-col"],children:e.item[1]},"2"),Object(h.jsx)("td",{className:O.a["center-col"],children:e.item[2]},"3"),Object(h.jsx)("td",{className:O.a["center-col"],children:e.item[3]},"4"),Object(h.jsx)("td",{className:O.a["center-col"],children:e.item[4]},"5"),Object(h.jsx)("td",{className:O.a["center-col"],children:Object(h.jsx)("a",{href:"".concat("https://storage.googleapis.com/ece-files","/").concat(e.item[6]),target:"_blank",rel:"noreferrer",children:e.item[5]})},"6")]})},f=function(e){return Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{style:{top:"".concat(e.stickyTop,"px")},children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"},"1"),Object(h.jsx)("th",{children:"\u5e74\u7d1a"},"2"),Object(h.jsx)("th",{children:"\u5e74\u4efd"},"3"),Object(h.jsx)("th",{children:"\u79d1\u76ee"},"4"),Object(h.jsx)("th",{children:"\u79d1\u76ee\u6559\u5e2b"},"5"),Object(h.jsx)("th",{children:"\u985e\u5225"},"6"),Object(h.jsx)("th",{children:"\u6a94\u6848"},"7")]})}),Object(h.jsx)("tbody",{children:e.items.map((function(e,t){return Object(h.jsx)(p,{item:e,index:t},t+1)}))})]})},m=(c(28),function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("p",{children:["\xa9 2021 Copyright: NYCU ECE | Developed by",Object(h.jsx)("a",{href:"https://github.com/JoyceFang1213",target:"_blank",rel:"noreferrer",children:"Joyce"})]})})}),v=c(14),g=c.n(v),_=function(){return Object(h.jsxs)("div",{className:g.a["note-layout"],children:[Object(h.jsx)("h2",{children:"A. \u4f7f\u7528\u8aaa\u660e"}),Object(h.jsx)("p",{children:"1. \u8003\u53e4\u8cc7\u6e90\u662f\u773e\u591a\u5b78\u9577\u59d0\u6162\u6162\u7d2f\u7a4d\u51fa\u4f86\u7684\uff0c\u8acb\u4e0d\u8981\u60e1\u610f\u4f7f\u7528\u3002"}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"B. \u7db2\u7ad9\u5efa\u8b70"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url",children:"\u8868\u55ae"})}),Object(h.jsxs)("p",{children:["\u2022 ",Object(h.jsx)("span",{style:{backgroundColor:"#FFD31D"},children:"\u4f60\u5011\u53ef\u4ee5\u586b\u4f60\u5011\u60f3\u8981\u7684\u529f\u80fd\u6216\u8003\u53e4\uff0c\u4f46\u662f\u80fd\u4e0d\u80fd\u5be6\u73fe\u5c31\u4e0d\u4e00\u5b9a\u4e86\ud83e\udd72"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"C. \u8003\u53e4\u63d0\u4f9b"})]})};var y=function(e){var t=Object(r.useState)("48"),c=Object(o.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(e.ori),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(r.useState)(!1),d=Object(o.a)(b,2),x=d[0],O=d[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{stickHandler:function(e){a(e)},gradeClick:function(t){if("readme"===t)O(!1);else{O(!0);var c=e.ori.filter((function(e){return function(e){return"\u5927\u4e00"===e?"first":"\u5927\u4e8c"===e?"second":"\u5927\u4e09"===e?"third":"\u5927\u56db"===e?"fourth":void 0}(e[0])===t}));j(c)}},textChange:function(t){O(!0);var c=new RegExp(t,"gi"),n=e.ori.filter((function(e){for(var t=0;t<e.length;++t)if(e[t].match(c))return!0;return!1}));j(n)}}),x?Object(h.jsx)(f,{display:x?"block":"none",stickyTop:n,items:l}):Object(h.jsx)(_,{display:x?"none":"block"}),Object(h.jsx)(m,{})]})},k=c.p+"static/media/test.8c918167.txt",N=[];fetch(k).then((function(e){return e.text()})).then((function(e){return N.push.apply(N,Object(n.a)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return e.slice(e.indexOf("\n")+1).split("\n").map((function(e){return e.split(t)}))}(e)))})),i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{ori:N})}),document.getElementById("root"))},3:function(e,t,c){e.exports={"center-col":"List_center-col__2WKVE"}},4:function(e,t,c){e.exports={"top-nav":"navbar_top-nav__3rzWR",active:"navbar_active__erm8h",icon:"navbar_icon__3bLCg",responsive:"navbar_responsive__3R3pD"}}},[[29,1,2]]]);
//# sourceMappingURL=main.52980478.chunk.js.map