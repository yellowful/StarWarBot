(this.webpackJsonpStarWarBot=this.webpackJsonpStarWarBot||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),o=(n(16),n(1)),i=n.n(o),l=n(7),u=n(2),h=n(3),p=n(5),m=n(4),f=n(6),b=n(8),v=function(e){var t=e.id,n=e.name,a=e.height,c=e.mass;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",n," "),r.a.createElement("p",null," ",a," cm "),r.a.createElement("p",null," ",c," kg ")))},d=function(e){var t=e.robots;if(t.length){var n=t.map((function(e){return r.a.createElement(v,{key:e.id,id:e.id,name:e.name,height:e.height,mass:e.mass})}));return r.a.createElement("div",null,n)}return r.a.createElement("h1",{className:"tc"},"Loading")},x=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?r.a.createElement("h2",null," Oooooops! There is something wrong!"):this.props.children}}]),t}(a.Component),k=(n(18),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){(function(){var t=Object(l.a)(i.a.mark((function t(n){var a,r,c,s,o,l,u,h,p,m,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/people/?search=".concat(n));case 2:return a=t.sent,t.next=5,a.json();case 5:return r=t.sent,t.next=8,r;case 8:c=t.sent,s=c.results,o=!0,l=!1,t.prev=12,h=Object(b.a)(s);case 14:return t.next=16,h.next();case 16:return p=t.sent,o=p.done,t.next=20,p.value;case 20:if(m=t.sent,o){t.next=29;break}return f=m,t.next=25,f.url.split("/")[5];case 25:f.id=t.sent;case 26:o=!0,t.next=14;break;case 29:t.next=35;break;case 31:t.prev=31,t.t0=t.catch(12),l=!0,u=t.t0;case 35:if(t.prev=35,t.prev=36,o||null==h.return){t.next=40;break}return t.next=40,h.return();case 40:if(t.prev=40,!l){t.next=43;break}throw u;case 43:return t.finish(40);case 44:return t.finish(35);case 45:e.setState({allRobots:s});case 46:case"end":return t.stop()}}),t,null,[[12,31,35,45],[36,,40,44]])})));return function(e){return t.apply(this,arguments)}})()(t.target.value)},e.state={allRobots:[]},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=[],n=0;n<10;n++){var a=Math.floor(88*Math.random());t.includes(a)||t.push(a)}(function(){var t=Object(l.a)(i.a.mark((function t(n){var a,r,c,s,o,l,u,h,p,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],r=!0,c=!1,t.prev=3,o=Object(b.a)(n);case 5:return t.next=7,o.next();case 7:return l=t.sent,r=l.done,t.next=11,l.value;case 11:if(u=t.sent,r){t.next=29;break}return h=u,t.next=16,fetch("https://swapi.dev/api/people/".concat(h,"/"));case 16:return p=t.sent,t.next=19,p.json();case 19:return(m=t.sent).id=h.toString(),t.t0=a,t.next=24,m;case 24:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 26:r=!0,t.next=5;break;case 29:t.next=35;break;case 31:t.prev=31,t.t2=t.catch(3),c=!0,s=t.t2;case 35:if(t.prev=35,t.prev=36,r||null==o.return){t.next=40;break}return t.next=40,o.return();case 40:if(t.prev=40,!c){t.next=43;break}throw s;case 43:return t.finish(40);case 44:return t.finish(35);case 45:e.setState({allRobots:a.concat()});case 46:case"end":return t.stop()}}),t,null,[[3,31,35,45],[36,,40,44]])})));return function(e){return t.apply(this,arguments)}})()(t)}},{key:"render",value:function(){var e=this.state.allRobots;return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RobotsFriends"),r.a.createElement(x,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(E,null,r.a.createElement(d,{robots:e}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.30544b32.chunk.js.map