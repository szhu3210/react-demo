(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(2),s=n(4),r=n(3),l=n(5),u=n(0),o=n.n(u),c=n(7),h=n.n(c);n(15);function y(e){return o.a.createElement("line",{className:"line",x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,style:{display:e.show?"":"none"}})}var f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).renderLines=function(e){return e.map(function(e,t){return n.renderLine(t,e.x1,e.y1,e.x2,e.y2,e.show)})},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"renderLine",value:function(e,t,n,i,a,s){return o.a.createElement(y,{key:e,x1:t,y1:n,x2:i,y2:a,show:s})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("svg",{height:"250",width:"250"},this.renderLines(this.props.lines)))}}]),t}(u.Component),p=function(e){function t(e){var n;Object(i.a)(this,t);var a=[{x:0,y:0},{x:50,y:50},{x:40,y:170},{x:140,y:70},{x:40,y:120},{x:10,y:220}];return(n=Object(s.a)(this,Object(r.a)(t).call(this,e))).initialState={points:a,play:!1,lines:t.generateLines(a),playlist:[],paused:!1,button:"pause"},n.state=n.initialState,n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"showLine",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.state.lines.slice();n[e].show=!t,this.setState({lines:n})}},{key:"showLines",value:function(){for(var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=0,i=[],a=function(a){t?e.showLine(a,!0):(e.state.lines[a].show||i.push(setTimeout(function(){e.showLine(a)},1e3*++n)),e.setState({playlist:i}))},s=0;s<this.state.lines.length;s++)a(s)}},{key:"start",value:function(){this.clearPlay(),this.clearLines(),this.setState(this.initialState),this.showLines()}},{key:"clearPlay",value:function(){this.state.playlist.forEach(function(e){return clearTimeout(e)}),this.setState({playlist:[]})}},{key:"clearLines",value:function(){this.clearPlay();for(var e=0;e<this.state.lines.length;e++)this.showLines(!0)}},{key:"pause",value:function(){this.state.paused?(this.showLines(),this.setState({button:"pause",paused:!1})):(this.clearPlay(),this.setState({button:"resume",paused:!0}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,{lines:this.state.lines}),o.a.createElement("button",{onClick:function(){return e.start()}},"start"),o.a.createElement("button",{onClick:function(){return e.pause()}},this.state.button))}}],[{key:"generateLines",value:function(e){for(var t=[],n=0; n<e.length-1; n++)t.push({x1:e[n].x,y1:e[n].y,x2:e[n+1].x,y2:e[n+1].y,show:!1});return t}}]),t}(u.Component);h.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.9aa83696.chunk.js.map