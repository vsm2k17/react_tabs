(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);for(var a=n(0),r=n.n(a),c=n(3),i=n.n(c),s=(n(13),n(4)),o=n(5),l=n(7),u=n(6),p=(n(14),n(1)),d=n.n(p),b=(d.a.shape({id:d.a.number,title:d.a.string,constent:d.a.string}),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={index:0,prev:null},t.onTabSelected=function(e){var n=e.target.id;t.setState((function(){return{index:n}})),t.state.prev&&t.state.prev.classList.remove("head-active"),t.state.prev=e.target,e.target.classList.add("head-active")},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},this.props.tabs.map((function(e){return r.a.createElement("button",{type:"button",key:e.id,className:"head",id:e.id,onClick:t.onTabSelected},e.title)}))),r.a.createElement("p",{className:"content"},this.props.tabs[this.state.index].content))}}]),n}(r.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],v=0;v<m.length;v+=1)m[v].id=v;var h=function(){return r.a.createElement(b,{tabs:m})};i.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.3e7bec1a.chunk.js.map