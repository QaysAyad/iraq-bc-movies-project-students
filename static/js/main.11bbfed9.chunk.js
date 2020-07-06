(this.webpackJsonpmoivesapp=this.webpackJsonpmoivesapp||[]).push([[0],{51:function(e,t,a){},66:function(e,t,a){e.exports=a(83)},71:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(71),a(51),a(72),a(94)),i=a(95),s=a(9),m=a(93),u=a(59),d=a(57),p=a(88),h=a(64);function g(e,t){var a=t?"&query=".concat(t):"";return"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat("542003918769df50083a13c415bbc602")+a}var v=a(92);function E(e){var t=g("genre/movie/list",""),a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){void 0!==e.genres&&o([{id:0,name:"All"}].concat(Object(h.a)(e.genres)))})).catch((function(e){return console.log(e)}))}),[t]),r.a.createElement(v.a,{style:{marginRight:"5px"}},r.a.createElement(v.a.Toggle,{variant:"info",id:"dropdown-basic"},e.category.name||"Categories"),r.a.createElement(v.a.Menu,null,l.length>0&&l.map((function(t){return r.a.createElement(v.a.Item,{href:"#",key:t.id,onSelect:function(){return e.setCategory(t)}},t.name)}))))}var f=a(48),b=Object(n.createContext)(),y=function(e){var t=Object(n.useReducer)(j,w),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(b.Provider,{value:[c,l]},e.children)},w={isLoading:!0,movies:[]};function j(e,t){switch(t.type){case"setLoading":return Object(f.a)(Object(f.a)({},e),{},{isLoading:t.payload});case"setMovies":return e.movies=t.payload,e;default:return e}}var x=a(6);function O(){var e=Object(n.useContext)(b),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(x.g)(),o=Object(x.h)(),i=new URLSearchParams(o.search),h=i.has("query")?i.get("query"):"",v=i.has("categoryId")?parseInt(i.get("categoryId")):0,f=i.has("categoryName")?i.get("categoryName"):"All",y=Object(n.useState)({id:v,name:f}),w=Object(s.a)(y,2),j=w[0],O=w[1],k=Object(n.useState)(h),N=Object(s.a)(k,2),_=N[0],S=N[1];return Object(n.useEffect)((function(){return function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e=""!==t?g("search/movie",t):g("movie/popular");fetch(e).then((function(e){return e.json()})).then((function(e){if(void 0!==e.results){var t=e.results;j.id&&(t=t.filter((function(e){return e.genre_ids.includes(j.id)}))),c({type:"setMovies",payload:t})}c({type:"setLoading",payload:!1})})).catch((function(e){return console.log(e)}))}(h)}),[h,v]),r.a.createElement(m.a,{inline:!0,onSubmit:function(e){e.preventDefault(),c({type:"setMovies",payload:[]}),c({type:"setLoading",payload:!0}),l.push({pathname:"/search",search:"?query="+_+"&categoryId="+j.id+"&categoryName="+j.name})},style:{flexFlow:"row"}},r.a.createElement(E,{category:j,setCategory:function(e){O(e)}}),r.a.createElement(u.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:_,onChange:function(e){S(e.target.value)}}),r.a.createElement(d.a,{variant:"outline-secondary",type:"submit"},"Search",r.a.createElement("span",null,a.isLoading?r.a.createElement(p.a,{animation:"border",variant:"warning",size:"sm"}):" ")))}var k=a(14);function N(){return r.a.createElement(o.a,{bg:"dark",expand:"lg",className:"flex-shrink-1"},r.a.createElement(k.b,{to:"/"},r.a.createElement(o.a.Brand,{style:{color:"white"}},"React Movies App")),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-Navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"basic-Navbar-nav"},r.a.createElement(i.a,{className:"mr-auto"},r.a.createElement(k.b,{to:"/",style:{color:"white"}},"Home")),r.a.createElement(O,null)))}var _=a(47),S=a(61),C=a.n(S);function B(e){return r.a.createElement(k.b,{to:"/Movie/".concat(e.movie.id)},r.a.createElement(_.a,{key:e.movie.id,style:{width:"100%"}},r.a.createElement("div",{className:"card image"},r.a.createElement(_.a.Img,{src:null!==e.movie.backdrop_path?"https://image.tmdb.org/t/p/w500/"+e.movie.backdrop_path:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"center datails"},e.movie.title,r.a.createElement("br",null),r.a.createElement("span",null,"Vote Average:"," ",r.a.createElement(C.a,{count:10,value:e.movie.vote_average,size:14,color2:"#ffd700"})," ","(",e.movie.vote_average,")"))),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"center"},r.a.createElement("p",null,"Released ",r.a.createElement("br",null),e.movie.release_date))))))}var z=a(89),I=a(60);function L(){var e=Object(n.useContext)(b),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"flex-grow-1 container my-4"},r.a.createElement(z.a,{md:3,lg:4,xs:1},t.movies.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(B,{movie:e}))}))))}var R=function(){var e=Object(n.useContext)(b),t=Object(s.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,!t.isLoading&&r.a.createElement(L,null))},q=a(45),F=a.n(q),M=a(62),K=a(90),A=a(91);function J(e){var t,a=Object(x.g)(),c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),h=u[0],v=u[1],E=Object(n.useState)([]),f=Object(s.a)(E,2),b=f[0],y=f[1],w=e.match.params.id;Object(n.useEffect)((function(){function e(){return(e=Object(M.a)(F.a.mark((function e(){var a,n,r,c,l,o,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g("movie/".concat(w)),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,t=g("movie/".concat(w,"/videos")),e.next=10,fetch(t);case 10:return r=e.sent,e.next=13,r.json();case 13:return c=e.sent,[],t=g("movie/".concat(w,"/credits")),e.next=18,fetch(t);case 18:return l=e.sent,e.next=21,l.json();case 21:o=e.sent,s=o.cast,v(c.results),y(s),i(n);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w]);var j="https://image.tmdb.org/t/p/w500/",O="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",N=o.backdrop_path?j+o.backdrop_path:O,_=o.poster_path?j+o.poster_path:O;return r.a.createElement("div",{className:"flex-grow-1 ",style:{backgroundImage:"url(".concat(N,")"),backgroundSize:"cover"}},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return a.goBack()}},"Back"),o.id&&r.a.createElement(K.a,null,r.a.createElement(z.a,null,r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{width:"100%",alt:"posterImage",src:_})),r.a.createElement("div",{className:"col-8 text-white"},r.a.createElement("h5",null,o.original_title),r.a.createElement("h5",null,o.release_date),r.a.createElement("h5",null,o.overview),r.a.createElement("h5",null,o.vote_average),o.genres?o.genres.map((function(e){return r.a.createElement(A.a,{style:{marginRight:"20px",marginLeft:"10px"},variant:"warning"},e.name)})):null,r.a.createElement("div",{className:" text-white"},b.slice(0,9).map((function(e){return r.a.createElement(k.b,{key:e.id,to:"/person/".concat(e.id)},r.a.createElement(A.a,{key:"1"+e.id,style:{marginLeft:"10px"},className:"align-middle"},r.a.createElement("span",null,r.a.createElement("div",{className:"rounded-circle overflow-hidden d-inline-block",height:"50px",width:"50px"},r.a.createElement("img",{src:j+e.profile_path,alt:"",width:"50px",objectfit:"cover"})),r.a.createElement("span",null,e.name))))}))))),r.a.createElement("div",{key:h[0].id,className:"embed-responsive embed-responsive-16by9 my-4"},r.a.createElement("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(h[0].key,"?rel=0"),allowFullScreen:!0}))),!o.id&&r.a.createElement(p.a,{animation:"border",variant:"warning",size:"sm"}))}var W=a(40),D=a(39);var Y=function(){return r.a.createElement("footer",{className:"text-light text-center bg-secondary flex-shrink-1"},r.a.createElement("small",{style:{marginRight:"20px"}},"Developed by "),r.a.createElement("a",{href:"https://github.com/7ananDlshad",style:{color:"white"}},r.a.createElement(D.a,{icon:W.a}),r.a.createElement("small",{style:{marginRight:"20px"}},"Hanan")),r.a.createElement("a",{href:"https://github.com/QaysAyad",style:{color:"white"}},r.a.createElement(D.a,{icon:W.a}),r.a.createElement("small",{style:{marginRight:"20px"}},"Qays")),r.a.createElement("a",{href:"https://github.com/shirin-muataz",style:{color:"white"}},r.a.createElement(D.a,{icon:W.a}),r.a.createElement("small",{style:{marginRight:"20px"}},"Shirin")))};function H(e){var t=e.match.params.actorId,a=Object(x.g)(),c=Object(n.useState)({}),l=Object(s.a)(c,2),o=l[0],i=l[1];Object(n.useEffect)((function(){var e=g("person/".concat(t));fetch(e).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[t]);var m=o.profile_path?"https://image.tmdb.org/t/p/w500/"+o.profile_path:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";return r.a.createElement("div",{className:"flex-grow-1 bg-dark "},r.a.createElement(d.a,{variant:"secondary",onClick:function(){return a.goBack()}},"Back"),o.id&&r.a.createElement(K.a,null,r.a.createElement(z.a,null,r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{width:"100%",alt:"posterImage",src:m})),r.a.createElement("div",{className:"col-8 text-white"},r.a.createElement("h5",null,o.name),r.a.createElement("h5",null,o.birthday),r.a.createElement("p",null,o.biography),r.a.createElement("h5",null,o.place_of_birth)))),!o.id&&r.a.createElement(p.a,{animation:"border",variant:"warning",size:"sm"}))}var P=function(){return r.a.createElement(y,null,r.a.createElement(k.a,null,r.a.createElement("div",{className:"d-flex  flex-column vh-100 align-items-stretch p-0 m-0"},r.a.createElement(N,null),r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/iraq-bc-movies-project-students"},r.a.createElement(x.a,{to:"/"})),r.a.createElement(x.b,{path:"/Movie/:id",component:J}),r.a.createElement(x.b,{path:"/person/:actorId",component:H}),r.a.createElement(x.b,{exact:!0,path:"/",component:R}),r.a.createElement(x.b,{path:"/search",component:R})),r.a.createElement(Y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.11bbfed9.chunk.js.map