(this.webpackJsonpweathertoday=this.webpackJsonpweathertoday||[]).push([[0],{11:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/images.c23c4250.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),c=a.n(l),i=(a(29),a(13)),o=a.n(i),s=a(18),m=a(6),u=a(7),d=a(9),p=a(8),h=(a(11),function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"current-weather"},n.a.createElement("h2",null,e.city&&e.country&&n.a.createElement("p",null,"Location: ",e.city,", ",e.country)),n.a.createElement("div",{className:"current-card"},e.temperature&&n.a.createElement("p",null,"Current Temperature: ",Math.round(e.temperature),"\xb0F"),e.feelsLike&&n.a.createElement("p",null,"Feels Like: ",Math.round(e.feelsLike),"\xb0F"),e.humidity&&n.a.createElement("p",null,"Current Humidity: ",e.humidity,"%"),e.description&&n.a.createElement("p",null,"Current Description: ",e.description),e.icon&&n.a.createElement("p",null,"icon here:",e.icon),e.error&&n.a.createElement("p",null,(void 0).props.error," "))))}),E=a(31),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=new Date,t=1e3*this.props.day.dt;e.setTime(t);var a="owf owf-"+this.props.day.weather[0].id+"owf-5x red";return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card-title"},E(e).format("dddd")),n.a.createElement("p",{className:"text"},E(e).format("MMMM Do, h:mm a")),n.a.createElement("i",{className:a}),n.a.createElement("h1",null,Math.round(this.props.day.main.temp),"\xb0F"),n.a.createElement("h5",null,"Feels Like: ",Math.round(this.props.day.main.feels_like),"\xb0F"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},this.props.day.weather[0].description)))))}}]),a}(n.a.Component),f=a(10),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(f.a,null,n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement("form",{onSubmit:this.props.getWeather},n.a.createElement(f.a.Label,null,"Enter a City  "),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"city"}),n.a.createElement("br",null),n.a.createElement(f.a.Label,null,"Select a Country "),n.a.createElement(f.a.Control,{as:"select",id:"country"},n.a.createElement("option",null,"United States"),n.a.createElement("option",null,"Germany"),n.a.createElement("option",null,"Mexico"),n.a.createElement("option",null,"France"),n.a.createElement("option",null,"Spain")),n.a.createElement("br",null),n.a.createElement("button",null,"Get Weather"))))}}]),a}(n.a.Component),b=a(22),w=a(23),k=a(21),N=a(20),g=a.n(N),j="c5fc998f4951203abe90d5f6c1f39d7b",x=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={dailyData:[]},e.getWeather=function(){var t=Object(s.a)(o.a.mark((function t(a){var r,n,l,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.city.value,n=a.target.elements.country.value,t.next=5,fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(r,",").concat(n,"&appid=").concat(j,"&units=imperial"));case 5:return l=t.sent,t.next=8,l.json();case 8:c=t.sent,i=c.list.filter((function(e){return e.dt_txt.includes("18:00:00")})),r&&n?(console.log(e.state),e.setState({temperature:c.list[0].main.temp,city:c.city.name,country:c.city.country,humidity:c.list[0].main.humidity,description:c.list[0].weather[0].description,feelsLike:c.list[0].main.feels_like,error:"",dailyData:i})):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,feelsLike:void 0,error:"Please type a value...",fullData:void 0,dailyData:void 0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.formatDayCards=function(){return e.state.dailyData.map((function(e,t){return n.a.createElement(y,{day:e,key:t})}))},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-card"},n.a.createElement("div",{className:"title"},"WeatherToday"),n.a.createElement("br",null),n.a.createElement("div",{className:"sub-title"},"Get Your Current & 5 Day Forecast"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"image"},n.a.createElement(k.a,{className:"suncloud",src:g.a,alt:"Error",height:"200px",width:"200px"}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"top-form"},n.a.createElement("div",{className:"form"},n.a.createElement(v,{getWeather:this.getWeather})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"fiveday"},n.a.createElement(w.a,{className:"current-weather-card"},n.a.createElement(h,{classname:"current-weather",temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,feelsLike:this.state.feelsLike,error:this.state.error})))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(b.a,null,this.formatDayCards()))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.298af4f7.chunk.js.map