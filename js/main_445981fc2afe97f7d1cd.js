(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"./src/index.tsx":function(e,a,t){"use strict";t.r(a);var n,r=t("./node_modules/react/index.js"),l=t.n(r),s=t("./node_modules/react-dom/index.js"),c=t.n(s),o=t("./node_modules/react-redux/es/index.js"),m=(t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),"https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_1.json");!function(e){e.PLOT_LOAD_START="PLOT_LOAD_START",e.PLOT_LOAD_SUCCESS="PLOT_LOAD_SUCCESS",e.PLOT_LOAD_ERROR="PLOT_LOAD_ERROR"}(n||(n={}));var i,d=t("./node_modules/unionize/lib/index.js"),u=Object(d.unionize)({[n.PLOT_LOAD_START]:Object(d.ofType)(),[n.PLOT_LOAD_SUCCESS]:Object(d.ofType)(),[n.PLOT_LOAD_ERROR]:{}},{tag:"type",value:"payload"}),E=t("./node_modules/reselect/es/index.js"),x=Object(E.a)(e=>e.plotData,e=>(null==e?void 0:e.points)||[]),O=Object(E.a)(x,e=>e.map(e=>{var{x:a}=e;return a})),b=Object(E.a)(x,e=>e.map(e=>{var{y:a}=e;return a})),v={x:100,y:1100},p=new Array(11).fill(!0).map((e,a)=>100*a),j=new Array(11).fill(!0).map((e,a)=>100*a),y=e=>Math.min(...e),f=e=>Math.max(...e),g=Object(E.a)(O,y),N=Object(E.a)(O,f),_=Object(E.a)(b,y),T=Object(E.a)(b,f),D=Object(E.b)({minX:g,maxX:N,minY:_,maxY:T}),h=Object(E.a)(D,e=>{var{minX:a,maxX:t,minY:n,maxY:r}=e;return{scaleX:1e3/(t-a),scaleY:1e3/(r-n)}}),L=Object(E.a)(x,e=>{for(var a=e.length,t=0,n=0,r=0,l=0,s=0;s<a;s++){var{x:c,y:o}=e[s];t+=c,n+=o,r+=c*o,l+=c*c}var m=(a*r-t*n)/(a*l-t*t);return{a:m,b:(n-m*t)/a}});!function(e){e.UNKNOWN="UNKNOWN",e.LOADING="LOADING",e.READY="READY",e.ERROR="ERROR"}(i||(i={}));var A=e=>e.dataState===i.LOADING,R=e=>e.dataState===i.ERROR,k=e=>e.dataState===i.READY,S=Object(E.b)({title:e=>{var a;return null===(a=e.plotData)||void 0===a?void 0:a.title},xTitle:e=>{var a;return null===(a=e.plotData)||void 0===a?void 0:a.xTitle},yTitle:e=>{var a;return null===(a=e.plotData)||void 0===a?void 0:a.yTitle}}),P=t("./src/components/Loader/Loader.css"),C=t.n(P),w=()=>l.a.createElement("div",{className:C.a.root},l.a.createElement("div",{className:C.a.title},"Loading plot data..."),l.a.createElement("div",{className:"globalCircleLoader"})),Y=t("./node_modules/classnames/index.js"),X=t.n(Y),U=()=>l.a.createElement("marker",{id:"arrow",orient:"auto",markerWidth:"4",markerHeight:"8",refX:"0.2",refY:"4",markerUnits:"strokeWidth"},l.a.createElement("path",{d:"M0,0 V8 L4,4 Z",fill:"black"})),B=t("./src/components/Plot/Title/Title.css"),I=t.n(B),q=e=>{var{text:a,className:t}=e;return l.a.createElement("text",{x:600,y:30,className:X()(t,I.a.root),children:a,dominantBaseline:"hanging",textAnchor:"middle"})},M=t("./src/components/Plot/XTitle/XTitle.css"),V=t.n(M),W=e=>{var{text:a,className:t}=e;return l.a.createElement("text",{x:600,y:1160,className:X()(t,V.a.root),children:a,dominantBaseline:"hanging",textAnchor:"middle"})},G=t("./src/components/Plot/YTitle/YTitle.css"),F=t.n(G),K=e=>{var{text:a,className:t}=e;return l.a.createElement("text",{x:600,y:1210,className:X()(t,F.a.root),children:a,dominantBaseline:"hanging",textAnchor:"middle",transform:"rotate(-90 0 1200)"})},z=e=>{var{children:a,className:t}=e,{minX:n,minY:r}=Object(o.c)(D),{scaleX:s,scaleY:c}=Object(o.c)(h),m=["translate("+v.x+", "+v.y+")","scale("+s+", -"+c+")","translate("+-n+", "+-r+")"].join(" ");return l.a.createElement("g",{transform:m,className:t,children:a})},J=t("./src/components/Plot/ValuePoints/ValuePoint/ValuePoint.css"),H=t.n(J),Z=e=>{var{x:a,y:t}=e,{scaleX:n,scaleY:r}=Object(o.c)(h),s=20/n/2,c=20/r/2,m=[[a,t+c],[a+s,t],[a,t-c],[a-s,t]].map(e=>e.join(" ")).join(", ");return l.a.createElement("polygon",{className:H.a.root,points:m})},Q=e=>{var{points:a}=e,t=a.map(e=>{var{x:a,y:t}=e;return l.a.createElement(Z,{x:a,y:t,key:""+a+t})});return l.a.createElement(z,null,t)},$=t("./src/components/Plot/Trend/Trend.css"),ee=t.n($),ae=()=>{var{a:e,b:a}=Object(o.c)(L),{minX:t,maxX:n}=Object(o.c)(D),r=e*t+a,s=e*n+a;return l.a.createElement(z,null,l.a.createElement("line",{x1:t,y1:r,x2:n,y2:s,className:ee.a.trendLine,vectorEffect:"non-scaling-stroke"}))},te=new Intl.NumberFormat("ru-RU",{notation:"compact",compactDisplay:"short"}),ne=t("./src/components/Plot/Axis/Axis.css"),re=t.n(ne),le=e=>{var{from:a,min:t,max:n}=e,r=(n-t)/10,s="translate("+a.x+", "+a.y+")";return l.a.createElement("g",{className:re.a.root,transform:s},l.a.createElement("line",{x2:1050,y2:"0",className:re.a.line,markerEnd:"url(#arrow)",vectorEffect:"non-scaling-stroke"}),p.map((e,a)=>l.a.createElement("g",{key:e,className:re.a.tick,transform:"translate("+e+", 0)"},l.a.createElement("line",{x2:"0",y2:"20",className:re.a.line,vectorEffect:"non-scaling-stroke"}),l.a.createElement("text",{x:"0",y:"40",className:re.a.text,alignmentBaseline:"middle"},te.format(t+r*a)))))},se=e=>{var{from:a,min:t,max:n}=e,r=(n-t)/10,s="translate("+a.x+", "+a.y+")";return l.a.createElement("g",{className:re.a.root,transform:s},l.a.createElement("line",{x2:0,y2:-1050,className:re.a.line,markerEnd:"url(#arrow)",vectorEffect:"non-scaling-stroke"}),j.map((e,a)=>l.a.createElement("g",{key:e,className:re.a.tick,transform:"translate(0, -"+e+")"},l.a.createElement("line",{x2:"-20",y2:"0",className:re.a.line,vectorEffect:"non-scaling-stroke"}),l.a.createElement("text",{x:"-40",y:"0",className:re.a.text,alignmentBaseline:"middle"},te.format(t+r*a)))))};t("./node_modules/core-js/modules/es.object.assign.js");function ce(){return(ce=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var oe=e=>{var{transform:a}=e,t=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["transform"]),{scaleX:n,scaleY:s}=Object(o.c)(h),c="scale("+1/n+", "+1/s+")",m=Object(r.useMemo)(()=>[c,a].join(" "),[n,s]);return l.a.createElement("text",ce({transform:m},t))},me=()=>{var{minX:e,maxX:a,minY:t,maxY:n}=Object(o.c)(D),r=t<0,s=e<0;return l.a.createElement(z,{className:re.a.root},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("line",{x1:e,y1:0,x2:a,y2:0,className:re.a.basisLine,vectorEffect:"non-scaling-stroke",strokeDasharray:"1 3"}),l.a.createElement("g",{transform:"translate("+e+", 0)"},l.a.createElement(oe,{x:0,y:0,dx:"1vmin",className:re.a.basisText,children:0,alignmentBaseline:"middle"}))),s&&l.a.createElement(l.a.Fragment,null,l.a.createElement("line",{x1:0,y1:t,x2:0,y2:n,className:re.a.basisLine,vectorEffect:"non-scaling-stroke",strokeDasharray:"1 3"}),l.a.createElement("g",{transform:"translate(0, "+t+")"},l.a.createElement(oe,{x:0,y:0,dy:"2vmin",dominantBaseline:"central",textAnchor:"middle",className:re.a.basisText,children:0}))))},ie=t("./src/components/Plot/Plot.css"),de=t.n(ie),ue=()=>{var e=Object(o.c)(x),{minX:a,maxX:t,minY:n,maxY:r}=Object(o.c)(D),{a:s,b:c}=Object(o.c)(L),{title:m,xTitle:i,yTitle:d}=Object(o.c)(S);return l.a.createElement("div",{className:de.a.root},l.a.createElement("div",{className:de.a.plotContainer},l.a.createElement("svg",{viewBox:"0 0 1200 1200"},l.a.createElement("defs",null,l.a.createElement(U,null)),l.a.createElement(me,null),l.a.createElement(le,{from:v,min:a,max:t}),l.a.createElement(se,{from:v,min:n,max:r}),l.a.createElement(Q,{points:e}),l.a.createElement(ae,null),m&&l.a.createElement(q,{text:m}),i&&l.a.createElement(W,{text:i}),d&&l.a.createElement(K,{text:d}))),l.a.createElement("div",{className:de.a.textData},l.a.createElement("div",{className:de.a.section},l.a.createElement("mark",null,"minX"),"=",a,",",l.a.createElement("mark",null,"maxX"),"=",t,",",l.a.createElement("mark",null,"minY"),"=",n,",",l.a.createElement("mark",null,"maxY"),"=",r),l.a.createElement("div",{className:de.a.section},"Тренд: ",l.a.createElement("b",null,"y")," = ",s," * ",l.a.createElement("b",null,"x")," + ",c),l.a.createElement("div",{className:X()(de.a.section,de.a.dataset)},e.map(e=>{var{x:a,y:t}=e;return l.a.createElement("div",{key:""+a+t,className:de.a.dataValue},a," ",t)}))))},Ee=t("./src/components/Error/Error.css"),xe=t.n(Ee),Oe=()=>l.a.createElement("div",{className:xe.a.root},"Something went wrong"),be=t("./src/components/App/App.css"),ve=t.n(be);var pe=t("./node_modules/redux/es/redux.js"),je=t("./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),ye=(t("./node_modules/redux-devtools-extension/index.js"),t("./node_modules/redux-saga/effects.d.ts")),fe=(t("./node_modules/core-js/modules/es.promise.js"),async e=>{try{var a=await fetch(e);return 200===(null==a?void 0:a.status)?a.json():Promise.reject(a)}catch(e){return Promise.reject(e)}});var ge=function*(e,a){return yield Object(ye.c)((function*(){for(;;)try{var t=yield Object(ye.f)(e);yield Object(ye.e)(a,t)}catch(e){console.error(e)}}))}(n.PLOT_LOAD_START,(function*(e){var{payload:a}=e,t=a.url||m;try{var n=yield Object(ye.b)(fe,t);yield Object(ye.d)(u.PLOT_LOAD_SUCCESS(n))}catch(e){yield Object(ye.d)(u.PLOT_LOAD_ERROR())}})),Ne=function*(){yield Object(ye.a)([ge])},_e=(t("./node_modules/core-js/modules/es.string.match.js"),{dataState:i.UNKNOWN}),Te=function(e,a){return void 0===e&&(e=_e),u.match(a,{[n.PLOT_LOAD_START]:()=>({plotData:null,dataState:i.LOADING}),[n.PLOT_LOAD_SUCCESS]:e=>({plotData:e,dataState:i.READY}),[n.PLOT_LOAD_ERROR]:()=>({plotData:null,dataState:i.ERROR}),default:()=>e})};t("./src/index.css");var De=function(){var e,a=Object(je.b)(),t=[a];e=Object(pe.applyMiddleware)(...t);var n=Object(pe.createStore)(Te,_e,e),r=Object.assign({},n,{rootTask:null,runSaga:()=>r.rootTask=a.run(Ne),stopSaga:()=>r.dispatch(je.a)});return r}();De.runSaga();var he=l.a.createElement(o.a,{store:De},l.a.createElement(()=>{var e=Object(o.c)(A),a=Object(o.c)(k),t=Object(o.c)(R),{urlInput:n,handleInputChange:s,queryDatasetCustom:c,queryDataset1:i,queryDataset2:d,queryDataset3:E}=function(){var[e,a]=Object(r.useState)(""),t=Object(o.b)(),n=e=>t(u.PLOT_LOAD_START({url:e})),l=Object(r.useCallback)(()=>n(e),[e]);return{urlInput:e,handleInputChange:e=>a(e.currentTarget.value),queryDatasetCustom:l,queryDataset1:()=>n(m),queryDataset2:()=>n("https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_2.json"),queryDataset3:()=>n("https://raw.githubusercontent.com/ADagen/scatter-plot/master/stub/example_3.json")}}();return l.a.createElement("div",{className:ve.a.root},l.a.createElement("div",{className:ve.a.controlPanel},l.a.createElement("button",{disabled:e,onClick:i},"Dataset 1"),l.a.createElement("button",{disabled:e,onClick:d},"Dataset 2"),l.a.createElement("button",{disabled:e,onClick:E},"Dataset 3"),l.a.createElement("input",{disabled:e,type:"text",value:n,onChange:s,placeholder:"Enter a url"}),l.a.createElement("button",{disabled:e||!n,onClick:c},"Load custom")),e&&l.a.createElement(w,null),a&&l.a.createElement(ue,null),t&&l.a.createElement(Oe,null))},null));function Le(){c.a.render(he,document.getElementsByClassName("root")[0]),De.dispatch(u.PLOT_LOAD_START({url:m}))}["complete","loaded","interactive"].includes(document.readyState)&&document.body?Le():document.addEventListener("DOMContentLoaded",Le,!1)},0:function(e,a,t){t("./node_modules/core-js/stable/index.js"),e.exports=t("./src/index.tsx")}},[[0,"runtime","styles","react","vendor~253ae210","vendor~987e6011","vendor~ccb0b3ac","vendor~11bb84b7","vendor~1f20a385"]]]);