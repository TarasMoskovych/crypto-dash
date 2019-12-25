(this["webpackJsonpcrypto-dash"]=this["webpackJsonpcrypto-dash"]||[]).push([[0],{29:function(e,t,n){e.exports=n(63)},34:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(22),o=n.n(i),c=(n(34),n(8)),l=n(9),u=n(12),s=n(10),f=n(11),d=n(7),m=n(5),v=n.n(m),p=n(19),h=n(13),b=n(4),g=n(6),C=n.n(g),y=n(14),x=n.n(y),O=n(37),E=Object(r.createContext)(),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state=Object(h.a)({page:"dashboard",favorites:["BTC","XRP","BCH","ETN","LTC"],currentFavorite:["BTC"],timeInterval:"months",theme:"dark"},n.savedSettings(),{setPage:n.setPage.bind(Object(b.a)(n)),confirmFavorites:n.confirmFavorites.bind(Object(b.a)(n)),addCoin:n.addCoin.bind(Object(b.a)(n)),removeCoin:n.removeCoin.bind(Object(b.a)(n)),isInFavorites:n.isInFavorites.bind(Object(b.a)(n)),setFilteredCoins:n.setFilteredCoins.bind(Object(b.a)(n)),setCurrentFavorite:n.setCurrentFavorite.bind(Object(b.a)(n)),changeChartOption:n.changeChartOption.bind(Object(b.a)(n)),changeTheme:n.changeTheme.bind(Object(b.a)(n))}),n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._fetchCoins(),this._fetchPrices(),this._fetchHistorical()}},{key:"render",value:function(){return a.a.createElement(E.Provider,{value:this.state},this.props.children)}},{key:"savedSettings",value:function(){var e=JSON.parse(window.localStorage.getItem("cryptoDash"));return e&&e.favorites?{favorites:e.favorites,currentFavorite:e.currentFavorite,theme:e.theme||"dark"}:{page:"settings",firstVisit:!0,theme:e&&e.theme?e.theme:"dark"}}},{key:"confirmFavorites",value:function(){var e=this.state.favorites[0];this.setState({firstVisit:!1,page:"dashboard",currentFavorite:e},this._fetchPrices.bind(this)),window.localStorage.setItem("cryptoDash",JSON.stringify({favorites:this.state.favorites,currentFavorite:e}))}},{key:"setPage",value:function(e){this.setState({page:e})}},{key:"addCoin",value:function(e){var t=Object(p.a)(this.state.favorites);t.length<20&&(t.push(e),this.setState({favorites:t}))}},{key:"removeCoin",value:function(e){var t=Object(p.a)(this.state.favorites);this.setState({favorites:C.a.pull(t,e)})}},{key:"isInFavorites",value:function(e){return C.a.includes(this.state.favorites,e)}},{key:"setFilteredCoins",value:function(e){this.setState({filteredCoins:e})}},{key:"setCurrentFavorite",value:function(e){this.setState({currentFavorite:e,historical:null},this._fetchHistorical.bind(this)),window.localStorage.setItem("cryptoDash",JSON.stringify(Object(h.a)({},JSON.parse(window.localStorage.getItem("cryptoDash")),{currentFavorite:e})))}},{key:"changeChartOption",value:function(e){this.setState({timeInterval:e,historical:null},this._fetchHistorical.bind(this))}},{key:"changeTheme",value:function(e){window.localStorage.setItem("cryptoDash",JSON.stringify(Object(h.a)({},JSON.parse(window.localStorage.getItem("cryptoDash")),{theme:e?"dark":"light"}))),setTimeout((function(){return window.location.reload()}),200)}},{key:"_fetchCoins",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,v.a.awrap(O.coinList());case 3:e.t1=e.sent.Data,e.t2={coinList:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),null,this)}},{key:"_fetchPrices",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,v.a.awrap(this._prices());case 3:e.t1=e.sent,e.t2={prices:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),null,this)}},{key:"_prices",value:function(){var e,t,n,r,a,i,o;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:e=[],t=!0,n=!1,r=void 0,c.prev=4,a=this.state.favorites[Symbol.iterator]();case 6:if(t=(i=a.next()).done){c.next=22;break}return o=i.value,c.prev=8,c.t0=e,c.next=12,v.a.awrap(O.priceFull(o,"USD"));case 12:c.t1=c.sent,c.t0.push.call(c.t0,c.t1),c.next=19;break;case 16:c.prev=16,c.t2=c.catch(8),console.warn(c.t2);case 19:t=!0,c.next=6;break;case 22:c.next=28;break;case 24:c.prev=24,c.t3=c.catch(4),n=!0,r=c.t3;case 28:c.prev=28,c.prev=29,t||null==a.return||a.return();case 31:if(c.prev=31,!n){c.next=34;break}throw r;case 34:return c.finish(31);case 35:return c.finish(28);case 36:return c.abrupt("return",e);case 37:case"end":return c.stop()}}),null,this,[[4,24,28,36],[8,16],[29,,31,35]])}},{key:"_fetchHistorical",value:function(){var e=this;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.firstVisit&&this.setState({historical:null}),t.t0=this,t.t1=this.state.currentFavorite,t.next=5,v.a.awrap(this._historical());case 5:t.t2=function(t,n){return[x()().subtract(Object(d.a)({},e.state.timeInterval,7-n)).valueOf(),t.USD]},t.t3=t.sent.map(t.t2),t.t4={name:t.t1,data:t.t3},t.t5=[t.t4],t.t6={historical:t.t5},t.t0.setState.call(t.t0,t.t6);case 11:case"end":return t.stop()}}),null,this)}},{key:"_historical",value:function(){var e,t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:for(e=[],t=7;t>0;t--)e.push(O.priceHistorical(this.state.currentFavorite,["USD"],x()().subtract(Object(d.a)({},this.state.timeInterval,t)).toDate()));return n.abrupt("return",Promise.all(e));case 3:case"end":return n.stop()}}),null,this)}}]),t}(r.Component),j=n(1),w=n(2);function S(){var e=Object(j.a)(["\n  padding: 40px;\n"]);return S=function(){return e},e}var F=w.b.div(S()),D=function(e){var t=e.id,n=e.name,r=e.onChange,i=e.defaultChecked;return a.a.createElement("div",{className:"switch-wrapper"},a.a.createElement("input",{defaultChecked:i,onChange:r,type:"checkbox",id:t,className:"switch-input"}),a.a.createElement("label",{htmlFor:t,className:"switch-label"},n||"Switch"))};function I(){var e=Object(j.a)(["\n    text-shadow: 0px 0px 60px #03ff03;\n  "]);return I=function(){return e},e}function A(){var e=Object(j.a)(["\n  cursor: pointer;\n\n  ","\n"]);return A=function(){return e},e}function B(){var e=Object(j.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 180px auto 100px 80px 50px;\n  margin-bottom: 40px;\n"]);return B=function(){return e},e}function N(){var e=Object(j.a)(["\n  font-size: 1.5em;\n"]);return N=function(){return e},e}var T=w.b.div(N()),P=w.b.div(B()),_=w.b.div(A(),(function(e){return e.active&&Object(w.a)(I())}));function L(e){var t=e.name;return a.a.createElement(E.Consumer,null,(function(e){var n,r=e.page,i=e.setPage;return a.a.createElement(_,{active:r===t,onClick:function(){return i(t)}},(n=t).charAt(0).toUpperCase()+n.substr(1))}))}function W(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.theme,n=e.changeTheme;return a.a.createElement(D,{defaultChecked:"dark"===t,id:"switch",onChange:function(e){return n(e.target.checked)}})}))}var z=function(){return a.a.createElement(P,null,a.a.createElement(T,null,"CryptoDash"),a.a.createElement("div",null),a.a.createElement(L,{active:!0,name:"dashboard"}),a.a.createElement(L,{name:"settings"}),a.a.createElement(W,null))},H=n(18),V=n.n(H),U=function(e,t){return{title:{text:e},yAxis:{title:{text:"Price"}},xAxis:{type:"datetime",accessibility:{rangeDescription:"Crypto chart"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:t,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}},G=JSON.parse(window.localStorage.getItem("cryptoDash")),J="light"===(G&&G.theme&&!G.firstVisit?G.theme:"dark"),M=J?"white":"#061a44",R=J?"white":"#010e2c",K=J?"#09f010":"#42ff3a";J&&(document.body.style.background="#e1eaee",document.body.style.color="#061a44");var $="background-color: ".concat(M),X="background-color: ".concat(R,";"),q=("background-color: ".concat(K,";"),"box-shadow: 0px 0px 5px 1px ".concat(J?"#a9b6ff":"#121d5b")),Q="box-shadow: 0px 0px 4px 2px #5fff17",Y="#061a44",Z="#A0A0A0",ee={colors:["#61d936","#552ccb","#1163c9","#04a1ee","#08c6e0","#146b9e","#f376c1","#1b2839"],chart:{backgroundColor:J?"white":Y,borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:J?"white":Y,plotBorderWidth:0},title:{style:{color:J?Y:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:0,labels:{style:{color:J?Y:Z}},lineColor:J?Y:Z,tickColor:J?Y:Z,title:{style:{color:J?Y:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",labels:{style:{color:J?Y:Z}},lineColor:J?Y:Z,minorTickInterval:null,tickColor:J?Y:Z,tickWidth:1,title:{style:{color:J?Y:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:J?Y:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{enabled:!1},credits:{enabled:!1},labels:{style:{color:J?Y:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:J?Y:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:J?Y:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:J?Y:"#CCC",buttonArrowColor:J?Y:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:J?Y:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};function te(){var e=Object(j.a)(["\n  ","\n  ","\n  border: 1px solid;\n  color: #1163c9;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n"]);return te=function(){return e},e}var ne=w.b.select(te(),X,"font-size: 1.0em");function re(){var e=Object(j.a)(["\n  cursor: not-allowed;\n  opacity: .4;\n  pointer-events: none;\n"]);return re=function(){return e},e}function ae(){var e=Object(j.a)(["\n  &:hover {\n    ","\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(j.a)(["\n  &:hover {\n    cursor: pointer;\n    ","\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(j.a)(["\n    position: relative;\n  "]);return oe=function(){return e},e}function ce(){var e=Object(j.a)(["\n    text-align: left;\n  "]);return ce=function(){return e},e}function le(){var e=Object(j.a)(["\n    display: grid;\n  "]);return le=function(){return e},e}function ue(){var e=Object(j.a)(["\n  ","\n  ","\n  padding: 10px;\n  text-align: center;\n\n  ","\n\n  ","\n\n  ","\n"]);return ue=function(){return e},e}var se=w.b.div(ue(),$,q,(function(e){return e.grid&&Object(w.a)(le())}),(function(e){return e.left&&Object(w.a)(ce())}),(function(e){return e.relative&&Object(w.a)(oe())})),fe=Object(w.b)(se)(ie(),Q),de=Object(w.b)(fe)(ae(),"box-shadow: 0px 0px 2px 2px #e41111"),me=Object(w.b)(se)(re()),ve=n(25),pe=n.n(ve);function he(){var e=Object(j.a)(["\n    height: 100vh;\n    left: 0;\n    position: fixed;\n    top: 0;\n  "]);return he=function(){return e},e}function be(){var e=Object(j.a)(["\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n\n  ","\n"]);return be=function(){return e},e}var ge=w.b.div(be(),(function(e){return e.global&&Object(w.a)(he())})),Ce=function(e){var t=e.global;return a.a.createElement(ge,{global:t},a.a.createElement(pe.a,{type:"Oval",color:J?"#000":"#fff",height:100,width:100}))};V.a.Highcharts.setOptions(ee);var ye=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.currentFavorite,n=e.historical,r=e.changeChartOption;return a.a.createElement(se,{left:!0,relative:!0},a.a.createElement(ne,{defaultValue:"months",onChange:function(e){return r(e.target.value)}},a.a.createElement("option",{value:"days"},"Days"),a.a.createElement("option",{value:"weeks"},"Weeks"),a.a.createElement("option",{value:"months"},"Months")),n?a.a.createElement(V.a,{config:U(t,n)}):a.a.createElement(Ce,null))}))};function xe(){var e=Object(j.a)(["\n  justify-self: right;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(j.a)(["\n  justify-self: left;\n"]);return Oe=function(){return e},e}var Ee=w.b.div(Oe()),ke=w.b.div(xe());function je(){var e=Object(j.a)(["\n  display: none;\n\n  ",":hover & {\n    color: red;\n    display: block;\n  }\n"]);return je=function(){return e},e}function we(){var e=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1.5fr 0.5fr;\n  margin-bottom: 20px;\n"]);return we=function(){return e},e}var Se=w.b.div(we()),Fe=Object(w.b)(ke)(je(),de),De=function(e){var t=e.name,n=e.symbol,r=e.topSection;return a.a.createElement(Se,null,a.a.createElement(Ee,null,t),r?a.a.createElement(Fe,null,"X"):a.a.createElement(ke,null,n))};function Ie(){var e=Object(j.a)(["\n    color: red;\n  "]);return Ie=function(){return e},e}function Ae(){var e=Object(j.a)(["\n  color: green;\n\n  ","\n"]);return Ae=function(){return e},e}function Be(){var e=Object(j.a)(["\n  ","\n"]);return Be=function(){return e},e}function Ne(){var e=Object(j.a)(["\n    ","\n    pointer-events: none;\n  "]);return Ne=function(){return e},e}function Te(){var e=Object(j.a)(["\n    ","\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: repeat(3, 1fr);\n  "]);return Te=function(){return e},e}function Pe(){var e=Object(j.a)(["\n  ","\n\n  ","\n"]);return Pe=function(){return e},e}var _e=function(e){return+(e+"").slice(0,7)},Le=Object(w.b)(fe)(Pe(),(function(e){return e.compact&&Object(w.a)(Te(),"font-size: .75em")}),(function(e){return e.currentFavorite&&Object(w.a)(Ne(),Q)})),We=w.b.div(Be(),"font-size: 2em"),ze=w.b.div(Ae(),(function(e){return e.red&&Object(w.a)(Ie())}));function He(e){var t=e.data;return a.a.createElement(ke,null,a.a.createElement(ze,{red:t.CHANGEPCT24HOUR<0},_e(t.CHANGEPCT24HOUR),"%"))}function Ve(e){var t=e.symbol,n=e.data,r=e.currentFavorite,i=e.setCurrentFavorite;return a.a.createElement(Le,{onClick:i,compact:!0,currentFavorite:r},a.a.createElement(Ee,null,a.a.createElement("div",null,t),a.a.createElement(He,{data:n})),a.a.createElement(We,null,a.a.createElement("div",null,"$",_e(n.PRICE))))}function Ue(e){var t=e.symbol,n=e.data,r=e.currentFavorite,i=e.setCurrentFavorite;return a.a.createElement(Le,{onClick:i,currentFavorite:r},a.a.createElement(Se,null,a.a.createElement(Ee,null,t),a.a.createElement(He,{data:n})),a.a.createElement(We,null,"$",_e(n.PRICE)))}var Ge=function(e){var t=e.price,n=e.index,r=Object.keys(t)[0],i=t[r].USD,o=n<10?Ue:Ve;return a.a.createElement(E.Consumer,null,(function(e){var t=e.currentFavorite,c=e.setCurrentFavorite;return a.a.createElement(o,{symbol:r,data:i,compact:n>=5,currentFavorite:t===r,setCurrentFavorite:c.bind(null,r)})}))};function Je(){var e=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  grid-gap: 15px;\n  margin-top: 40px;\n"]);return Je=function(){return e},e}var Me=w.b.div(Je()),Re=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.prices;return a.a.createElement(Me,null,t.filter((function(e){var t=Object.keys(e)[0];return e[t]&&e[t].USD})).map((function(e,t){return a.a.createElement(Ge,{key:t,price:e,index:t})})))}))},Ke=function(e){var t=e.coin,n=e.style;return a.a.createElement("img",{loading:"lazy",style:n||{height:"50px"},src:"http://cryptocompare.com/".concat(t.ImageUrl),alt:t.CoinSymbol})};function $e(){var e=Object(j.a)(["\n  margin: 0 0 10px;\n  text-align: center;\n"]);return $e=function(){return e},e}var Xe=w.b.h2($e()),qe=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.currentFavorite,n=e.coinList;return a.a.createElement(se,{grid:!0},a.a.createElement(Xe,null,n[t].CoinName),a.a.createElement(Ke,{coin:n[t],style:{width:"95%"}}))}))},Qe=function(e){var t=e.name,n=e.children;return a.a.createElement(E.Consumer,null,(function(e){return e.page!==t?null:a.a.createElement("div",null,n)}))};function Ye(){var e=Object(j.a)(["\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: 1fr 3fr;\n  margin-top: 20px;\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  }\n"]);return Ye=function(){return e},e}var Ze=w.b.div(Ye()),et=function(){return a.a.createElement(Qe,{name:"dashboard"},a.a.createElement(Re,null),a.a.createElement(Ze,null,a.a.createElement(qe,null),a.a.createElement(ye,null)))},tt=function(e){return a.a.createElement(E.Consumer,null,(function(t){var n=t.coinList,r=t.prices,i=t.firstVisit;return n&&(i||r)?a.a.createElement("div",null,e.children):a.a.createElement(Ce,{global:!0})}))},nt=function(e,t,n,r){return e?r(t):n(t)},rt=function(e){var t=e.coinKey,n=e.topSection;return a.a.createElement(E.Consumer,null,(function(e){var r=e.coinList,i=e.addCoin,o=e.removeCoin,c=e.isInFavorites,l=!n&&c(t)?me:n?de:fe,u=r[t];return a.a.createElement(l,{onClick:nt.bind(null,n,t,i,o)},a.a.createElement(De,{name:u.CoinName,symbol:u.Symbol,topSection:n}),a.a.createElement(Ke,{coin:u,style:{width:"80%"}}))}))};function at(){var e=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  grid-gap: 15px;\n  margin-top: 20px;\n"]);return at=function(){return e},e}var it=w.b.div(at());var ot=function(e){var t=e.topSection;return a.a.createElement(E.Consumer,null,(function(e){var n=e.coinList,r=e.favorites,i=e.filteredCoins;return a.a.createElement(it,null,function(e,t,n,r){return t?n:r?Object.keys(r):Object.keys(e).slice(0,150)}(n,t,r,i).map((function(e,n){return a.a.createElement(rt,{key:n,coinKey:e,topSection:t})})))}))};function ct(){var e=Object(j.a)(["\n  display: grid;\n  justify-content: center;\n"]);return ct=function(){return e},e}function lt(){var e=Object(j.a)(["\n  color: ",";\n  ","\n  cursor: pointer;\n  margin: 20px;\n  padding: 5px;\n    &:hover {\n      ","\n    }\n"]);return lt=function(){return e},e}var ut=w.b.div(lt(),K,"font-size: 1.5em;",Q),st=w.b.div(ct()),ft=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.confirmFavorites;return a.a.createElement(st,null,a.a.createElement(ut,{onClick:t},"Confirm Favorites"))}))},dt=n(26),mt=n.n(dt);function vt(){var e=Object(j.a)(["\n  ","\n  ","\n  border: 1px solid;\n  color: #1153c9;\n  height: 20px;\n  padding: 5px;\n  place-self: center left;\n"]);return vt=function(){return e},e}function pt(){var e=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 150px 1fr;\n"]);return pt=function(){return e},e}var ht=w.b.div(pt()),bt=w.b.input(vt(),X,"font-size: 1.0em"),gt=C.a.debounce((function(e,t,n){if(!e)return t(null);var r=Object.keys(n),a=r.map((function(e){return n[e].CoinName})),i=r.concat(a),o=mt.a.filter(e,i,{}).map((function(e){return e.string}));t(C.a.pickBy(n,(function(e,t){return C.a.includes(o,t)||C.a.includes(o,e.CoinName)})))}),500),Ct=function(){return a.a.createElement(E.Consumer,null,(function(e){var t=e.setFilteredCoins,n=e.coinList;return a.a.createElement(ht,null,a.a.createElement("h3",null,"Search coins:"),a.a.createElement(bt,{onKeyUp:function(e){return function(e,t,n){return gt(e.target.value,t,n)}(e,t,n)}}))}))},yt=function(){return a.a.createElement(E.Consumer,null,(function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to CryptoDash, please select your favorite coins to begin."):null}))},xt=function(){return a.a.createElement(Qe,{name:"settings"},a.a.createElement(yt,null),a.a.createElement(ot,{topSection:!0}),a.a.createElement(ft,null),a.a.createElement(Ct,null),a.a.createElement(ot,null))},Ot=(n(62),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(F,null,a.a.createElement(k,null,a.a.createElement(z,null),a.a.createElement(tt,null,a.a.createElement(et,null),a.a.createElement(xt,null))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.dfe76ae7.chunk.js.map