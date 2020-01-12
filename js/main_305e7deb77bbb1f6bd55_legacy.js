(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"./src/index.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/core-js/modules/es.array.includes.js");var a,r=n("./node_modules/react/index.js"),c=n.n(r),o=n("./node_modules/react-dom/index.js"),s=n.n(o),l=n("./node_modules/react-redux/es/index.js"),u=n("./src/components/App/App.css"),i=n.n(u),m=n("./src/components/Loader/Loader.css"),d=n.n(m),f=function(){return c.a.createElement("div",{className:d.a.root},c.a.createElement("div",{className:d.a.title},"Loading plot data..."),c.a.createElement("div",{className:"globalCircleLoader"}))},x=(n("./node_modules/core-js/modules/es.array.map.js"),n("./node_modules/classnames/index.js")),p=n.n(x),v=function(){return c.a.createElement("marker",{id:"arrow",orient:"auto",markerWidth:"4",markerHeight:"8",refX:"0.2",refY:"4",markerUnits:"strokeWidth"},c.a.createElement("path",{d:"M0,0 V8 L4,4 Z",fill:"black"}))},E={x:100,y:1100},O=new Array(11).fill(!0).map((function(e,t){return 100*t})),b=new Array(11).fill(!0).map((function(e,t){return 100*t})),j=n("./src/components/Plot/Title/Title.css"),y=n.n(j),g=function(e){var t=e.text,n=e.className;return c.a.createElement("text",{x:600,y:30,className:p()(n,y.a.root),children:t,dominantBaseline:"hanging",textAnchor:"middle"})},h=n("./src/components/Plot/XTitle/XTitle.css"),_=n.n(h),N=function(e){var t=e.text,n=e.className;return c.a.createElement("text",{x:600,y:1160,className:p()(n,_.a.root),children:t,dominantBaseline:"hanging",textAnchor:"middle"})},T=n("./src/components/Plot/YTitle/YTitle.css"),D=n.n(T),L=function(e){var t=e.text,n=e.className;return c.a.createElement("text",{x:600,y:1210,className:p()(n,D.a.root),children:t,dominantBaseline:"hanging",textAnchor:"middle",transform:"rotate(-90 0 1200)"})},R=n("./node_modules/reselect/es/index.js"),k=Object(R.a)((function(e){return e.plotData}),(function(e){return(null==e?void 0:e.points)||[]})),A=Object(R.a)(k,(function(e){return e.map((function(e){return e.x}))})),S=Object(R.a)(k,(function(e){return e.map((function(e){return e.y}))})),P=function(e){return Math.min.apply(Math,e)},w=function(e){return Math.max.apply(Math,e)},C=Object(R.a)(A,P),Y=Object(R.a)(A,w),X=Object(R.a)(S,P),U=Object(R.a)(S,w),B=Object(R.b)({minX:C,maxX:Y,minY:X,maxY:U}),I=Object(R.a)(B,(function(e){var t=e.minX,n=e.maxX,a=e.minY;return{scaleX:1e3/(n-t),scaleY:1e3/(e.maxY-a)}})),q=Object(R.a)(k,(function(e){for(var t=e.length,n=0,a=0,r=0,c=0,o=0;o<t;o++){var s=e[o],l=s.x,u=s.y;n+=l,a+=u,r+=l*u,c+=l*l}var i=(t*r-n*a)/(t*c-n*n);return{a:i,b:(a-i*n)/t}}));!function(e){e.UNKNOWN="UNKNOWN",e.LOADING="LOADING",e.READY="READY",e.ERROR="ERROR"}(a||(a={}));var M=function(e){return e.dataState===a.LOADING},V=function(e){return e.dataState===a.ERROR},W=function(e){return e.dataState===a.READY},G=Object(R.b)({title:function(e){var t;return null===(t=e.plotData)||void 0===t?void 0:t.title},xTitle:function(e){var t;return null===(t=e.plotData)||void 0===t?void 0:t.xTitle},yTitle:function(e){var t;return null===(t=e.plotData)||void 0===t?void 0:t.yTitle}}),F=n("./src/components/Plot/ValuePoints/ValuePoint/ValuePoint.css"),K=n.n(F),z=function(e){var t=e.x,n=e.y,a=Object(l.c)(I),r=20/a.scaleX/2,o=20/a.scaleY/2,s=[[t,n+o],[t+r,n],[t,n-o],[t-r,n]].map((function(e){return e.join(" ")})).join(", ");return c.a.createElement("polygon",{className:K.a.root,points:s})},J=function(e){var t=e.children,n=e.className,a=Object(l.c)(B),r=a.minX,o=a.minY,s=Object(l.c)(I),u=s.scaleX,i=s.scaleY,m=["translate("+E.x+", "+E.y+")","scale("+u+", -"+i+")","translate("+-r+", "+-o+")"].join(" ");return c.a.createElement("g",{transform:m,className:n,children:t})},H=function(e){var t=e.points.map((function(e){var t=e.x,n=e.y;return c.a.createElement(z,{x:t,y:n,key:""+t+n})}));return c.a.createElement(J,null,t)},Z=n("./src/components/Plot/Trend/Trend.css"),Q=n.n(Z),$=function(){var e=Object(l.c)(q),t=e.a,n=e.b,a=Object(l.c)(B),r=a.minX,o=a.maxX,s=t*r+n,u=t*o+n;return c.a.createElement(J,null,c.a.createElement("line",{x1:r,y1:s,x2:o,y2:u,className:Q.a.trendLine,vectorEffect:"non-scaling-stroke"}))},ee=new Intl.NumberFormat("ru-RU",{notation:"compact",compactDisplay:"short"}),te=n("./src/components/Plot/Axis/Axis.css"),ne=n.n(te),ae=function(e){var t=e.from,n=e.min,a=(e.max-n)/10,r="translate("+t.x+", "+t.y+")";return c.a.createElement("g",{className:ne.a.root,transform:r},c.a.createElement("line",{x2:1050,y2:"0",className:ne.a.line,markerEnd:"url(#arrow)",vectorEffect:"non-scaling-stroke"}),O.map((function(e,t){return c.a.createElement("g",{key:e,className:ne.a.tick,transform:"translate("+e+", 0)"},c.a.createElement("line",{x2:"0",y2:"20",className:ne.a.line,vectorEffect:"non-scaling-stroke"}),c.a.createElement("text",{x:"0",y:"40",className:ne.a.text,alignmentBaseline:"middle"},ee.format(n+a*t)))})))},re=function(e){var t=e.from,n=e.min,a=(e.max-n)/10,r="translate("+t.x+", "+t.y+")";return c.a.createElement("g",{className:ne.a.root,transform:r},c.a.createElement("line",{x2:0,y2:-1050,className:ne.a.line,markerEnd:"url(#arrow)",vectorEffect:"non-scaling-stroke"}),b.map((function(e,t){return c.a.createElement("g",{key:e,className:ne.a.tick,transform:"translate(0, -"+e+")"},c.a.createElement("line",{x2:"-20",y2:"0",className:ne.a.line,vectorEffect:"non-scaling-stroke"}),c.a.createElement("text",{x:"-40",y:"0",className:ne.a.text,alignmentBaseline:"middle"},ee.format(n+a*t)))})))};n("./node_modules/core-js/modules/es.object.assign.js");function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var oe,se=function(e){var t=e.transform,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["transform"]),a=Object(l.c)(I),o=a.scaleX,s=a.scaleY,u="scale("+1/o+", "+1/s+")",i=Object(r.useMemo)((function(){return[u,t].join(" ")}),[o,s]);return c.a.createElement("text",ce({transform:i},n))},le=function(){var e=Object(l.c)(B),t=e.minX,n=e.maxX,a=e.minY,r=e.maxY,o=a<0,s=t<0;return c.a.createElement(J,{className:ne.a.root},o&&c.a.createElement(c.a.Fragment,null,c.a.createElement("line",{x1:t,y1:0,x2:n,y2:0,className:ne.a.basisLine,vectorEffect:"non-scaling-stroke",strokeDasharray:"1 3"}),c.a.createElement("g",{transform:"translate("+t+", 0)"},c.a.createElement(se,{x:0,y:0,dx:"1vmin",className:ne.a.basisText,children:0,alignmentBaseline:"middle"}))),s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("line",{x1:0,y1:a,x2:0,y2:r,className:ne.a.basisLine,vectorEffect:"non-scaling-stroke",strokeDasharray:"1 3"}),c.a.createElement("g",{transform:"translate(0, "+a+")"},c.a.createElement(se,{x:0,y:0,dy:"2vmin",dominantBaseline:"central",textAnchor:"middle",className:ne.a.basisText,children:0}))))},ue=n("./src/components/Plot/Plot.css"),ie=n.n(ue),me=function(){var e=Object(l.c)(k),t=Object(l.c)(B),n=t.minX,a=t.maxX,r=t.minY,o=t.maxY,s=Object(l.c)(q),u=s.a,i=s.b,m=Object(l.c)(G),d=m.title,f=m.xTitle,x=m.yTitle;return c.a.createElement("div",{className:ie.a.root},c.a.createElement("div",{className:ie.a.plotContainer},c.a.createElement("svg",{viewBox:"0 0 1200 1200"},c.a.createElement("defs",null,c.a.createElement(v,null)),c.a.createElement(le,null),c.a.createElement(ae,{from:E,min:n,max:a}),c.a.createElement(re,{from:E,min:r,max:o}),c.a.createElement(H,{points:e}),c.a.createElement($,null),d&&c.a.createElement(g,{text:d}),f&&c.a.createElement(N,{text:f}),x&&c.a.createElement(L,{text:x}))),c.a.createElement("div",{className:ie.a.textData},c.a.createElement("div",{className:ie.a.section},c.a.createElement("mark",null,"minX"),"=",n,",",c.a.createElement("mark",null,"maxX"),"=",a,",",c.a.createElement("mark",null,"minY"),"=",r,",",c.a.createElement("mark",null,"maxY"),"=",o),c.a.createElement("div",{className:ie.a.section},"Тренд: ",c.a.createElement("b",null,"y")," = ",u," * ",c.a.createElement("b",null,"x")," + ",i),c.a.createElement("div",{className:p()(ie.a.section,ie.a.dataset)},e.map((function(e){var t=e.x,n=e.y;return c.a.createElement("div",{key:""+t+n,className:ie.a.dataValue},t," ",n)})))))},de=n("./src/components/Error/Error.css"),fe=n.n(de),xe=function(){return c.a.createElement("div",{className:fe.a.root},"Something went wrong")};!function(e){e.PLOT_LOAD_START="PLOT_LOAD_START",e.PLOT_LOAD_SUCCESS="PLOT_LOAD_SUCCESS",e.PLOT_LOAD_ERROR="PLOT_LOAD_ERROR"}(oe||(oe={}));var pe,ve=n("./node_modules/unionize/lib/index.js"),Ee=Object(ve.unionize)(((pe={})[oe.PLOT_LOAD_START]=Object(ve.ofType)(),pe[oe.PLOT_LOAD_SUCCESS]=Object(ve.ofType)(),pe[oe.PLOT_LOAD_ERROR]={},pe),{tag:"type",value:"payload"}),Oe="https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_1.json";var be=n("./node_modules/redux/es/redux.js"),je=n("./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),ye=(n("./node_modules/redux-devtools-extension/index.js"),n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/redux-saga/effects.d.ts")),ge=regeneratorRuntime.mark(he);function he(e,t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ye.c)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ye.f)(e);case 3:return a=n.sent,n.next=6,Object(ye.e)(t,a);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:n.next=0;break;case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),ge)}n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.promise.js");function _e(e,t,n,a,r,c,o){try{var s=e[c](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(a,r)}var Ne=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(200!==(null==(n=e.sent)?void 0:n.status)){e.next=6;break}return e.abrupt("return",n.json());case 6:return e.abrupt("return",Promise.reject(n));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){_e(c,a,r,o,s,"next",e)}function s(e){_e(c,a,r,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),Te=regeneratorRuntime.mark(De);function De(e){var t,n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.url||Oe,r.prev=2,r.next=5,Object(ye.b)(Ne,n);case 5:return a=r.sent,r.next=8,Object(ye.d)(Ee.PLOT_LOAD_SUCCESS(a));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(ye.d)(Ee.PLOT_LOAD_ERROR());case 14:case"end":return r.stop()}}),Te,null,[[2,10]])}var Le=he(oe.PLOT_LOAD_START,De),Re=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Le]);case 2:case"end":return e.stop()}}),e)})),ke=(n("./node_modules/core-js/modules/es.regexp.exec.js"),n("./node_modules/core-js/modules/es.string.match.js"),{dataState:a.UNKNOWN}),Ae=function(e,t){var n;return void 0===e&&(e=ke),Ee.match(t,((n={})[oe.PLOT_LOAD_START]=function(){return{plotData:null,dataState:a.LOADING}},n[oe.PLOT_LOAD_SUCCESS]=function(e){return{plotData:e,dataState:a.READY}},n[oe.PLOT_LOAD_ERROR]=function(){return{plotData:null,dataState:a.ERROR}},n.default=function(){return e},n))};n("./src/index.css");var Se=function(){var e,t=Object(je.b)(),n=[t];e=be.applyMiddleware.apply(void 0,n);var a=Object(be.createStore)(Ae,ke,e),r=Object.assign({},a,{rootTask:null,runSaga:function(){return r.rootTask=t.run(Re)},stopSaga:function(){return r.dispatch(je.a)}});return r}();Se.runSaga();var Pe=c.a.createElement(l.a,{store:Se},c.a.createElement((function(){var e=Object(l.c)(M),t=Object(l.c)(W),n=Object(l.c)(V),a=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],a=Object(l.b)(),c=function(e){return a(Ee.PLOT_LOAD_START({url:e}))};return{urlInput:t,handleInputChange:function(e){return n(e.currentTarget.value)},queryDatasetCustom:function(){return c(t)},queryDataset1:function(){return c(Oe)},queryDataset2:function(){return c("https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_2.json")},queryDataset3:function(){return c("https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_3.json")}}}(),o=a.urlInput,s=a.handleInputChange,u=a.queryDatasetCustom,m=a.queryDataset1,d=a.queryDataset2,x=a.queryDataset3;return c.a.createElement("div",{className:i.a.root},c.a.createElement("div",{className:i.a.controlPanel},c.a.createElement("button",{disabled:e,onClick:m},"Dataset 1"),c.a.createElement("button",{disabled:e,onClick:d},"Dataset 2"),c.a.createElement("button",{disabled:e,onClick:x},"Dataset 3"),c.a.createElement("input",{disabled:e,type:"text",value:o,onChange:s,placeholder:"Enter a url"}),c.a.createElement("button",{disabled:e||!o,onClick:u},"Load custom")),e&&c.a.createElement(f,null),t&&c.a.createElement(me,null),n&&c.a.createElement(xe,null))}),null));function we(){s.a.render(Pe,document.getElementsByClassName("root")[0]),Se.dispatch(Ee.PLOT_LOAD_START({url:Oe}))}["complete","loaded","interactive"].includes(document.readyState)&&document.body?we():document.addEventListener("DOMContentLoaded",we,!1)},0:function(e,t,n){n("./node_modules/core-js/stable/index.js"),n("./node_modules/regenerator-runtime/runtime.js"),e.exports=n("./src/index.tsx")}},[[0,"runtime","styles","react","vendor~253ae210","vendor~987e6011","vendor~ccb0b3ac","vendor~11bb84b7","vendor~1f20a385"]]]);