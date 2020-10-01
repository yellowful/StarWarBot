(this.webpackJsonpStarWarBot=this.webpackJsonpStarWarBot||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),c=n.n(s),o=(n(24),n(4)),i=n(5),l=n(8),u=n(7),p=function(e){var t=e.robot,n=t.name,r=t.height,s=t.mass,c=t.birth_year,o=t.gender;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n," "),a.a.createElement("p",null,"height: ",r," cm "),a.a.createElement("p",null,"mass: ",s," kg "),a.a.createElement("p",null,"birth year: ",c),a.a.createElement("p",null,"gender: ",o)))},h=function(e){var t=e.allRobots;if(e.isPending)return a.a.createElement("h1",{className:"tc"},"Loading");var n=t.map((function(e){return a.a.createElement(p,{robot:e})}));return a.a.createElement("div",null,n)},b=function(e){var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},d=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?a.a.createElement("h2",null," Oooooops! There is something wrong!"):this.props.children}}]),n}(r.Component),g=(n(25),n(2)),f=n.n(g),m=n(10),E=n(11),S=n(6),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<10;t++){var n=Math.floor(88*Math.random());e.includes(n)||e.push(n)}this.props.onRequestRandomSwapi(e)}},{key:"render",value:function(){var e=this.props,t=e.allRobots,n=e.isPending,r=e.onSearchChange;return a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"RobotsFriends"),a.a.createElement(b,{searchChange:r}),a.a.createElement(d,null,a.a.createElement(v,null,a.a.createElement(h,{allRobots:t,isPending:n}))))}}]),n}(r.Component),O=Object(S.b)((function(e){return{allRobots:e.allRobots,isPending:e.isPending,errorMessage:e.errorMessage}}),(function(e){return{onRequestRandomSwapi:function(t){return e(function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){var r,a,s,c,o,i,l,u,p,h;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"RANDOM_SWAPI_PENDING"}),t.prev=1,r=[],a=!0,s=!1,t.prev=5,o=Object(E.a)(e);case 7:return t.next=9,o.next();case 9:return i=t.sent,a=i.done,t.next=13,i.value;case 13:if(l=t.sent,a){t.next=31;break}return u=l,t.next=18,fetch("https://swapi.dev/api/people/".concat(u,"/"));case 18:return p=t.sent,t.next=21,p.json();case 21:return(h=t.sent).id=u.toString(),t.t0=r,t.next=26,h;case 26:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 28:a=!0,t.next=7;break;case 31:t.next=37;break;case 33:t.prev=33,t.t2=t.catch(5),s=!0,c=t.t2;case 37:if(t.prev=37,t.prev=38,a||null==o.return){t.next=42;break}return t.next=42,o.return();case 42:if(t.prev=42,!s){t.next=45;break}throw c;case 45:return t.finish(42);case 46:return t.finish(37);case 47:n({type:"RANDOM_SWAPI_SUCCESS",payload:r.concat()}),t.next=53;break;case 50:t.prev=50,t.t3=t.catch(1),n({type:"RANDOM_SWAPI_FAILED",payload:t.t3});case 53:case"end":return t.stop()}}),t,null,[[1,50],[5,33,37,47],[38,,42,46]])})));return function(e){return t.apply(this,arguments)}}()}(t))},onSearchChange:function(t){return e((n=t.target.value,function(){var e=Object(m.a)(f.a.mark((function e(t){var r,a,s,c,o,i,l,u,p,h,b;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SEARCH_SWAPI_PENDING"}),e.prev=1,e.next=4,fetch("https://swapi.dev/api/people/?search=".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.next=10,a;case 10:s=e.sent,c=s.results,o=!0,i=!1,e.prev=14,u=Object(E.a)(c);case 16:return e.next=18,u.next();case 18:return p=e.sent,o=p.done,e.next=22,p.value;case 22:if(h=e.sent,o){e.next=31;break}return b=h,e.next=27,b.url.split("/")[5];case 27:b.id=e.sent;case 28:o=!0,e.next=16;break;case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(14),i=!0,l=e.t0;case 37:if(e.prev=37,e.prev=38,o||null==u.return){e.next=42;break}return e.next=42,u.return();case 42:if(e.prev=42,!i){e.next=45;break}throw l;case 45:return e.finish(42);case 46:return e.finish(37);case 47:t({type:"SEARCH_SWAPI_SUCCESS",payload:c}),e.next=53;break;case 50:e.prev=50,e.t1=e.catch(1),t({type:"SEARCH_SWAPI_FAILED",payload:e.t1});case 53:case"end":return e.stop()}}),e,null,[[1,50],[14,33,37,47],[38,,42,46]])})));return function(t){return e.apply(this,arguments)}}()));var n}}}))(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var y=n(1),A=n(17),R=n(18),P={allRobots:[],errorMessage:"",isPending:!0},_=Object(A.createLogger)(),j=Object(y.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"RANDOM_SWAPI_PENDING":return Object.assign({},e,{isPending:!0});case"RANDOM_SWAPI_SUCCESS":return Object.assign({},e,{isPending:!1,allRobots:t.payload});case"RANDOM_SWAPI_FAILED":return Object.assign({},e,{errorMessage:t.payload,allRobots:[]});case"SEARCH_SWAPI_PENDING":return Object.assign({},e,{isPending:!0});case"SEARCH_SWAPI_SUCCESS":return Object.assign({},e,{isPending:!1,allRobots:t.payload});case"SEARCH_SWAPI_FAILED":return Object.assign({},e,{errorMessage:t.payload,allRobots:[]});default:return e}}),Object(y.a)(R.a,_));c.a.render(a.a.createElement(S.a,{store:j}," ",a.a.createElement(O,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a58b143b.chunk.js.map