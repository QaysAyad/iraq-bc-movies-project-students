(this.webpackJsonpmoivesapp=this.webpackJsonpmoivesapp||[]).push([[0],{53:function(e,a,t){e.exports=t(70)},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(58),t(12)),i=(t(59),t(60),t(78)),s=t(79),m=t(76),u=t(47),g=t(46),d=t(75);function h(e){return r.a.createElement(r.a.Fragment,null,e.isLoading&&r.a.createElement(d.a,{animation:"border",variant:"primary",size:"sm"}))}var E=t(51);function v(e,a){var t=a?"&query=".concat(a):"";return"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat("542003918769df50083a13c415bbc602")+t}var f=t(77);function p(e){var a=v("genre/movie/list",""),t=Object(n.useState)([]),c=Object(o.a)(t,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),void 0!==e.genres&&i([{id:0,name:"All"}].concat(Object(E.a)(e.genres)))})).catch((function(e){return console.log(e)}))}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{style:{marginRight:"5px"}},r.a.createElement(f.a.Toggle,{variant:"info",id:"dropdown-basic"},e.category.name||"Categories"),r.a.createElement(f.a.Menu,null,l.length>0&&l.map((function(a){return r.a.createElement(f.a.Item,{href:"#",key:a.id,onSelect:function(){return e.setCategory(a)}},a.name)})))))}function b(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),d=s[0],E=s[1];return Object(n.useEffect)((function(){if(!e.isLoading)return;var a;a=""!==d?v("search/movie",d):v("movie/popular");fetch(a).then((function(e){return e.json()})).then((function(a){if(console.log(a),void 0!==a.results){var t=a.results;console.log(t),c.id&&(t=t.filter((function(e){return e.genre_ids.includes(c.id)})),console.log(t)),e.handleMovies(t)}})).catch((function(e){return console.log(e)}))}),[e.isLoading,c]),r.a.createElement(m.a,{inline:!0,onSubmit:function(a){a.preventDefault(),e.setIsLoading(!0),e.handleQuery(d)}},r.a.createElement(p,{category:c,setCategory:function(a){console.log(a),e.setIsLoading(!0),l(a)}}),r.a.createElement(u.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){E(e.target.value)}}),r.a.createElement(g.a,{variant:"outline-light",type:"submit"},"Search",r.a.createElement("span",null,r.a.createElement(h,{isLoading:e.isLoading}))))}function y(e){return r.a.createElement("div",null,r.a.createElement(i.a,{bg:"dark",expand:"lg"},r.a.createElement(i.a.Brand,{href:"#home",style:{color:"white"}},"React App"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-Navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-Navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{href:"#home",style:{color:"white"}},"Home")),r.a.createElement(b,{handleQuery:e.handleQuery,handleMovies:e.handleMovies,isLoading:e.isLoading,setIsLoading:e.setIsLoading}))))}var w=t(39);var j=t(48),L=t(49);function O(e){return r.a.createElement(j.a,null,r.a.createElement(L.a,{md:4,lg:3,xs:12},e.movies.map((function(e){return function(e){return r.a.createElement(w.a,{className:"mt-4 mb-4"},r.a.createElement("div",{class:"card image"},r.a.createElement(w.a.Img,{src:null!==e.backdrop_path?"https://image.tmdb.org/t/p/w500/"+e.backdrop_path:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{class:"center datails"},e.title,r.a.createElement("br",null),r.a.createElement("span",null,"Vote Average: ",e.vote_average))),r.a.createElement("div",{class:"details"},r.a.createElement("div",{class:"center"},r.a.createElement("p",null,"Released ",r.a.createElement("br",null),e.release_date)))))}(e)}))))}var S=function(e){var a=e.query,t=e.movies;return console.log(a),r.a.createElement(r.a.Fragment,null,t.length>0&&r.a.createElement(O,{movies:t}))},k=(t(65),t(34)),x=t(33);var I=function(){return r.a.createElement("div",{className:"main-footer"},r.a.createElement("small",{style:{marginRight:"20px"}},"Developed by "),"-",r.a.createElement("a",{href:"https://github.com/7ananDlshad",style:{color:"white"}},r.a.createElement(x.a,{icon:k.a})),r.a.createElement("small",{style:{marginRight:"20px"}},"Hanan"),"-",r.a.createElement("a",{href:"https://github.com/QaysAyad",style:{color:"white"}},r.a.createElement(x.a,{icon:k.a})),r.a.createElement("small",{style:{marginRight:"20px"}},"Qays"),"-",r.a.createElement("a",{href:"https://github.com/shirin-muataz",style:{color:"white"}},r.a.createElement(x.a,{icon:k.a})),r.a.createElement("small",{style:{marginRight:"20px"}},"Shirin"))};t(69);var N=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],m=i[1],u=Object(n.useState)([]),g=Object(o.a)(u,2),d=g[0],h=g[1];return r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement(y,{handleQuery:function(e){m(e)},handleMovies:function(e){h(e),c(!1)},isLoading:t,setIsLoading:c}),r.a.createElement(S,{isLoading:t,setIsLoading:c,movies:d,query:s})),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.206f7d24.chunk.js.map