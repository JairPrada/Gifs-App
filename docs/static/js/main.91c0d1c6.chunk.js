(this["webpackJsonpgift-search"]=this["webpackJsonpgift-search"]||[]).push([[0],{143:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(0),a=n.n(r),s=n(23),i=n.n(s),o=(n(142),n(143),n(59)),j=n(223),u=n(220),l=n(131),d=n(225),b=n(135),h=d.a.Search,x=function(e){var t=e.setCategorias,n=Object(r.useState)(""),a=Object(o.a)(n,2),s=a[0],i=a[1];return Object(c.jsx)(r.Fragment,{children:Object(c.jsx)(h,{placeholder:"Busca los mejores gifs ",onChange:function(e){i(e.target.value)},value:s,onSearch:function(){s.trim().length>2?b.b.loading("Buscando .....",1).then((function(){b.b.success("Se realizo la busquedo correctamente",1),t((function(e){return[s].concat(Object(l.a)(e))}))})):b.b.loading("Buscando .....",1).then((function(){b.b.error("La busqueda debe realizarse almenos con 2 caracteres",1),i("")}))},enterButton:!0})})},O=n(221),f=n(64),m=n(44),g=n(222),p=n(92),v=n.n(p),y=n(111),I=function(){var e=Object(y.a)(v.a.mark((function e(t){var n,c,r,a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=U6oTd4tzZg2AxbxP0Y5KLuEQHiTXWxrT&q=".concat(encodeURI(t),"&limit=9"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,s=a.map((function(e){var t;return{id:e.id,titulo:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(s),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=O.a.Meta,w=function(e){var t=e.categoria,n=void 0===t?"Maradona":t;e.url;Object(r.useEffect)((function(){I(n).then((function(e){return j(e)}))}),[n]);var a=Object(r.useState)([]),s=Object(o.a)(a,2),i=s[0],j=s[1];return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)(f.a,{gutter:[9,8],justify:"center",children:i.map((function(e){return Object(c.jsx)(m.a,{xs:20,sm:12,md:8,lg:6,children:Object(c.jsx)(O.a,{style:{width:"100%"},cover:Object(c.jsx)(g.a,{src:e.url,width:"100%"}),children:Object(c.jsx)(S,{title:e.titulo})})})}))})]})},k=n(219),z=n(94),B=n(224),A=k.a.Header,C=k.a.Content,F=k.a.Footer,M=j.a.Title,T=function(e){var t=Object(r.useState)([""]),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)(k.a,{children:[Object(c.jsxs)(A,{children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(z.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(c.jsx)(z.a.Item,{children:"Inicio"},"1"),Object(c.jsx)(z.a.Item,{children:"Mas Apps"},"2"),Object(c.jsx)(z.a.Item,{children:"Repositorio"},"3")]})]}),Object(c.jsxs)(C,{style:{padding:"50px",minHeight:"900px"},children:[Object(c.jsx)(M,{level:1,children:"Giff App"}),Object(c.jsx)(x,{setCategorias:s}),Object(c.jsx)(u.a,{}),Object(c.jsxs)(B.a,{style:{margin:"16px 0"},children:[Object(c.jsx)(B.a.Item,{children:"Inicio"}),Object(c.jsx)(B.a.Item,{children:"Lista"}),Object(c.jsx)(B.a.Item,{children:"Gifs"})]}),a.map((function(e){return Object(c.jsx)(w,{categoria:e},e)}))]}),Object(c.jsx)(F,{style:{textAlign:"center"},children:"Derechos reservados"})]})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.91c0d1c6.chunk.js.map