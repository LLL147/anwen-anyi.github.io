import{D as Y,A as O,L as F,E as z,t as H,I as J,_ as Q,C as X}from"./styles-cacbff60-D6FpXQJt.js";import{Z as tt}from"./graph-0ee63739-Cb6kgl47.js";import{c as p,V as S,b as A,i as et,O as st,$ as v}from"./mermaid.esm.min-DL6rMomr.js";import{b as ot}from"./index-bb6d8841-D2VzDm-r.js";import"./app-DxIX-K7X.js";import"./layout-fd473db2-CXZhosj1.js";import"./clone-afc2f047-B1PdEwKX.js";import"./edges-16357fde-D6KYoUn5.js";import"./createText-03b82060-BDbipUy0.js";import"./line-24d93f1b-DsTDXFR8.js";import"./array-2ff2c7a6-C3YJfAyO.js";import"./path-428ebac9-B0oSrkCJ.js";const w="rect",k="rectWithTitle",at="start",it="end",rt="divider",nt="roundedWithTitle",dt="note",lt="noteGroup",u="statediagram",ct="state",pt=`${u}-${ct}`,M="transition",bt="note",gt="note-edge",ht=`${M} ${gt}`,ut=`${u}-${bt}`,yt="cluster",mt=`${u}-${yt}`,ft="cluster-alt",$t=`${u}-${ft}`,P="parent",W="note",xt="state",V="----",wt=`${V}${W}`,_=`${V}${P}`,j="fill:none",G="fill: #333",q="c",U="text",Z="normal";let T={},c=0;const Tt=function(t){const a=Object.keys(t);for(const e of a)t[e]},St=function(t,a){return a.db.extract(a.db.getRootDocV2()),a.db.getClasses()};function Dt(t){return t==null?"":t.classes?t.classes.join(" "):""}function B(t="",a=0,e="",i=V){const r=e!==null&&e.length>0?`${i}${e}`:"";return`${xt}-${t}${r}-${a}`}const x=(t,a,e,i,r,n)=>{const s=e.id,y=Dt(i[s]);if(s!=="root"){let g=w;e.start===!0&&(g=at),e.start===!1&&(g=it),e.type!==z&&(g=e.type),T[s]||(T[s]={id:s,shape:g,description:v.sanitizeText(s,S()),classes:`${y} ${pt}`});const o=T[s];e.description&&(Array.isArray(o.description)?(o.shape=k,o.description.push(e.description)):o.description.length>0?(o.shape=k,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=w,o.description=e.description),o.description=v.sanitizeTextOrArray(o.description,S())),o.description.length===1&&o.shape===k&&(o.shape=w),!o.type&&e.doc&&(p.info("Setting cluster for ",s,E(e)),o.type="group",o.dir=E(e),o.shape=e.type===H?rt:nt,o.classes=o.classes+" "+mt+" "+(n?$t:""));const h={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:B(s,c),type:o.type,padding:15};if(h.centerLabel=!0,e.note){const d={labelStyle:"",shape:dt,labelText:e.note.text,classes:ut,style:"",id:s+wt+"-"+c,domId:B(s,c,W),type:o.type,padding:15},l={labelStyle:"",shape:lt,labelText:e.note.text,classes:o.classes,style:"",id:s+_,domId:B(s,c,P),type:"group",padding:0};c++;const m=s+_;t.setNode(m,l),t.setNode(d.id,d),t.setNode(s,h),t.setParent(s,m),t.setParent(d.id,m);let b=s,f=d.id;e.note.position==="left of"&&(b=d.id,f=s),t.setEdge(b,f,{arrowhead:"none",arrowType:"",style:j,labelStyle:"",classes:ht,arrowheadStyle:G,labelpos:q,labelType:U,thickness:Z})}else t.setNode(s,h)}a&&a.id!=="root"&&(p.trace("Setting node ",s," to be child of its parent ",a.id),t.setParent(s,a.id)),e.doc&&(p.trace("Adding nodes children "),At(t,e,e.doc,i,r,!n))},At=(t,a,e,i,r,n)=>{p.trace("items",e),e.forEach(s=>{switch(s.stmt){case Q:x(t,a,s,i,r,n);break;case z:x(t,a,s,i,r,n);break;case J:{x(t,a,s.state1,i,r,n),x(t,a,s.state2,i,r,n);const y={id:"edge"+c,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:j,labelStyle:"",label:v.sanitizeText(s.description,S()),arrowheadStyle:G,labelpos:q,labelType:U,thickness:Z,classes:M};t.setEdge(s.state1.id,s.state2.id,y,c),c++}break}})},E=(t,a=X)=>{let e=a;if(t.doc)for(let i=0;i<t.doc.length;i++){const r=t.doc[i];r.stmt==="dir"&&(e=r.value)}return e},kt=async function(t,a,e,i){p.info("Drawing state diagram (v2)",a),T={},i.db.getDirection();const{securityLevel:r,state:n}=S(),s=n.nodeSpacing||50,y=n.rankSpacing||50;p.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),p.info(i.db.getRootDocV2());const g=i.db.getStates(),o=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:E(i.db.getRootDocV2()),nodesep:s,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});x(o,void 0,i.db.getRootDocV2(),g,i.db,!0);let h;r==="sandbox"&&(h=A("#i"+a));const d=r==="sandbox"?A(h.nodes()[0].contentDocument.body):A("body"),l=d.select(`[id="${a}"]`),m=d.select("#"+a+" g");await ot(m,o,["barb"],u,a);const b=8;et.insertTitle(l,"statediagramTitleText",n.titleTopMargin,i.db.getDiagramTitle());const f=l.node().getBBox(),C=f.width+b*2,L=f.height+b*2;l.attr("class",u);const R=l.node().getBBox();st(l,L,C,n.useMaxWidth);const N=`${R.x-b} ${R.y-b} ${C} ${L}`;p.debug(`viewBox ${N}`),l.attr("viewBox",N);const K=document.querySelectorAll('[id="'+a+'"] .edgeLabel .label');for(const D of K){const I=D.getBBox(),$=document.createElementNS("http://www.w3.org/2000/svg",w);$.setAttribute("rx",0),$.setAttribute("ry",0),$.setAttribute("width",I.width),$.setAttribute("height",I.height),D.insertBefore($,D.firstChild)}},Bt={setConf:Tt,getClasses:St,draw:kt},Pt={parser:Y,db:O,renderer:Bt,styles:F,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,O.clear()}};export{Pt as diagram};
