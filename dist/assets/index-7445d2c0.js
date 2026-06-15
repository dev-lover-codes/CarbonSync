import{r as c,j as S,_ as ce,c as le,R as de}from"./react-three-d3d2b963.js";import{g as ue,i as pe,a as fe,b as ge,c as me,d as j,q as J,o as V,l as Y,e as X,f as G,s as R,h as P,j as H,k as M,u as ye,m as he,n as be,p as ve,G as we,r as xe,t as Se,v as ke,w as Ae}from"./firebase-019d1652.js";import{c as Ee}from"./react-vendor-3184305b.js";import"./three-a9fca82c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();let De={data:""},Ie=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||De},Ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Oe=/\/\*[^]*?\*\/|  +/g,Q=/\n+/g,C=(e,t)=>{let r="",o="",s="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+a+";":o+=i[1]=="f"?C(a,i):i+"{"+C(a,i[1]=="k"?"":t)+"}":typeof a=="object"?o+=C(a,t?t.replace(/([^,])+/g,n=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):i):a!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=C.p?C.p(i,a):i+":"+a+";")}return r+(t&&s?t+"{"+s+"}":s)+o},D={},ee=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+ee(e[r]);return t}return e},je=(e,t,r,o,s)=>{let i=ee(e),a=D[i]||(D[i]=(l=>{let p=0,f=11;for(;p<l.length;)f=101*f+l.charCodeAt(p++)>>>0;return"go"+f})(i));if(!D[a]){let l=i!==e?e:(p=>{let f,u,g=[{}];for(;f=Ce.exec(p.replace(Oe,""));)f[4]?g.shift():f[3]?(u=f[3].replace(Q," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][f[1]]=f[2].replace(Q," ").trim();return g[0]})(e);D[a]=C(s?{["@keyframes "+a]:l}:l,r?"":"."+a)}let n=r&&D.g;return r&&(D.g=D[a]),((l,p,f,u)=>{u?p.data=p.data.replace(u,l):p.data.indexOf(l)===-1&&(p.data=f?l+p.data:p.data+l)})(D[a],t,o,n),a},Pe=(e,t,r)=>e.reduce((o,s,i)=>{let a=t[i];if(a&&a.call){let n=a(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;a=l?"."+l:n&&typeof n=="object"?n.props?"":C(n,""):n===!1?"":n}return o+s+(a??"")},"");function F(e){let t=this||{},r=e.call?e(t.p):e;return je(r.unshift?r.raw?Pe(r,[].slice.call(arguments,1),t.p):r.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):r,Ie(t.target),t.g,t.o,t.k)}let te,q,B;F.bind({g:1});let E=F.bind({k:1});function Le(e,t,r,o){C.p=t,te=e,q=r,B=o}function O(e,t){let r=this||{};return function(){let o=arguments;function s(i,a){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:q&&q()},n),r.o=/go\d/.test(l),n.className=F.apply(r,o)+(l?" "+l:""),t&&(n.ref=a);let p=e;return e[0]&&(p=n.as||e,delete n.as),B&&p[0]&&B(n),te(p,n)}return t?t(s):s}}var _e=e=>typeof e=="function",N=(e,t)=>_e(e)?e(t):e,Te=(()=>{let e=0;return()=>(++e).toString()})(),re=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),$e=20,W="default",ae=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:o}=t;return ae(e,{type:e.toasts.find(a=>a.id===o.id)?1:0,toast:o});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},$=[],se={toasts:[],pausedAt:void 0,settings:{toastLimit:$e}},A={},oe=(e,t=W)=>{A[t]=ae(A[t]||se,e),$.forEach(([r,o])=>{r===t&&o(A[t])})},ie=e=>Object.keys(A).forEach(t=>oe(e,t)),Re=e=>Object.keys(A).find(t=>A[t].toasts.some(r=>r.id===e)),U=(e=W)=>t=>{oe(t,e)},Ne={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Fe=(e={},t=W)=>{let[r,o]=c.useState(A[t]||se),s=c.useRef(A[t]);c.useEffect(()=>(s.current!==A[t]&&o(A[t]),$.push([t,o]),()=>{let a=$.findIndex(([n])=>n===t);a>-1&&$.splice(a,1)}),[t]);let i=r.toasts.map(a=>{var n,l,p;return{...e,...e[a.type],...a,removeDelay:a.removeDelay||((n=e[a.type])==null?void 0:n.removeDelay)||(e==null?void 0:e.removeDelay),duration:a.duration||((l=e[a.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||Ne[a.type],style:{...e.style,...(p=e[a.type])==null?void 0:p.style,...a.style}}});return{...r,toasts:i}},Ue=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Te()}),L=e=>(t,r)=>{let o=Ue(t,e,r);return U(o.toasterId||Re(o.id))({type:2,toast:o}),o.id},h=(e,t)=>L("blank")(e,t);h.error=L("error");h.success=L("success");h.loading=L("loading");h.custom=L("custom");h.dismiss=(e,t)=>{let r={type:3,toastId:e};t?U(t)(r):ie(r)};h.dismissAll=e=>h.dismiss(void 0,e);h.remove=(e,t)=>{let r={type:4,toastId:e};t?U(t)(r):ie(r)};h.removeAll=e=>h.remove(void 0,e);h.promise=(e,t,r)=>{let o=h.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let i=t.success?N(t.success,s):void 0;return i?h.success(i,{id:o,...r,...r==null?void 0:r.success}):h.dismiss(o),s}).catch(s=>{let i=t.error?N(t.error,s):void 0;i?h.error(i,{id:o,...r,...r==null?void 0:r.error}):h.dismiss(o)}),e};var ze=1e3,Ke=(e,t="default")=>{let{toasts:r,pausedAt:o}=Fe(e,t),s=c.useRef(new Map).current,i=c.useCallback((u,g=ze)=>{if(s.has(u))return;let d=setTimeout(()=>{s.delete(u),a({type:4,toastId:u})},g);s.set(u,d)},[]);c.useEffect(()=>{if(o)return;let u=Date.now(),g=r.map(d=>{if(d.duration===1/0)return;let m=(d.duration||0)+d.pauseDuration-(u-d.createdAt);if(m<0){d.visible&&h.dismiss(d.id);return}return setTimeout(()=>h.dismiss(d.id,t),m)});return()=>{g.forEach(d=>d&&clearTimeout(d))}},[r,o,t]);let a=c.useCallback(U(t),[t]),n=c.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=c.useCallback((u,g)=>{a({type:1,toast:{id:u,height:g}})},[a]),p=c.useCallback(()=>{o&&a({type:6,time:Date.now()})},[o,a]),f=c.useCallback((u,g)=>{let{reverseOrder:d=!1,gutter:m=8,defaultPosition:b}=g||{},y=r.filter(x=>(x.position||b)===(u.position||b)&&x.height),w=y.findIndex(x=>x.id===u.id),v=y.filter((x,z)=>z<w&&x.visible).length;return y.filter(x=>x.visible).slice(...d?[v+1]:[0,v]).reduce((x,z)=>x+(z.height||0)+m,0)},[r]);return c.useEffect(()=>{r.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let g=s.get(u.id);g&&(clearTimeout(g),s.delete(u.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:l,startPause:n,endPause:p,calculateOffset:f}}},He=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Me=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qe=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Be=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${He} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${qe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ge=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,We=O("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ge} 1s linear infinite;
`,Qe=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ze=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Je=O("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ze} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ve=O("div")`
  position: absolute;
`,Ye=O("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Xe=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=O("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Xe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tt=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(et,null,t):t:r==="blank"?null:c.createElement(Ye,null,c.createElement(We,{...o}),r!=="loading"&&c.createElement(Ve,null,r==="error"?c.createElement(Be,{...o}):c.createElement(Je,{...o})))},rt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,at=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,st="0%{opacity:0;} 100%{opacity:1;}",ot="0%{opacity:1;} 100%{opacity:0;}",it=O("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,nt=O("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ct=(e,t)=>{let r=e.includes("top")?1:-1,[o,s]=re()?[st,ot]:[rt(r),at(r)];return{animation:t?`${E(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},lt=c.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?ct(e.position||t||"top-center",e.visible):{opacity:0},i=c.createElement(tt,{toast:e}),a=c.createElement(nt,{...e.ariaProps},N(e.message,e));return c.createElement(it,{className:e.className,style:{...s,...r,...e.style}},typeof o=="function"?o({icon:i,message:a}):c.createElement(c.Fragment,null,i,a))});Le(c.createElement);var dt=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let i=c.useCallback(a=>{if(a){let n=()=>{let l=a.getBoundingClientRect().height;o(e,l)};n(),new MutationObserver(n).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:i,className:t,style:r},s)},ut=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:re()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...s}},pt=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,_=16,ft=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,toasterId:i,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:p}=Ke(r,i);return c.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:_,left:_,right:_,bottom:_,pointerEvents:"none",...a},className:n,onMouseEnter:p.startPause,onMouseLeave:p.endPause},l.map(f=>{let u=f.position||t,g=p.calculateOffset(f,{reverseOrder:e,gutter:o,defaultPosition:t}),d=ut(u,g);return c.createElement(dt,{id:f.id,key:f.id,onHeightUpdate:p.updateHeight,className:f.visible?pt:"",style:d},f.type==="custom"?N(f.message,f):s?s(f):c.createElement(lt,{toast:f,position:u}))}))};const gt={apiKey:"AIzaSyDqObv4-00IKatm0bSjQQL7uKpqyJ6OSLw",authDomain:"carbonsync-7bc8f.firebaseapp.com",projectId:"carbonsync-7bc8f",storageBucket:"carbonsync-7bc8f.firebasestorage.app",messagingSenderId:"569869617942",appId:"1:569869617942:web:f64c43b8706a3920ae9e37"};let T,I,k;try{ue().length?T=fe():T=pe(gt),I=ge(T),k=me(T)}catch(e){console.error("Firebase init failed:",e.message)}const Z=async(e,t)=>{try{const r=P(k,"users",e);await M(r,{...t,totalSaved:0,createdAt:R()})}catch(r){throw r}},K=async e=>{try{const t=P(k,"users",e),r=await H(t);return r.exists()?r.data():null}catch(t){throw t}},mt=async(e,t)=>{try{const r=P(k,"users",e);await ye(r,t)}catch(r){throw r}},Ct=async(e,t)=>{try{const r=j(k,"users",e,"activities");await G(r,{...t,timestamp:R()})}catch(r){throw r}},Ot=async(e,t=10)=>{try{const r=j(k,"users",e,"activities"),o=J(r,V("timestamp","desc"),Y(t));return(await X(o)).docs.map(i=>({id:i.id,...i.data()}))}catch(r){throw r}},ne=c.createContext();function yt(){return c.useContext(ne)}function ht({children:e}){const[t,r]=c.useState(null),[o,s]=c.useState(null),[i,a]=c.useState(!0);async function n(m,b,y){const v=(await be(I,m,b)).user,x={name:y,email:m,totalSaved:0,streak:0,level:"Seedling",joinedAt:new Date,onboardingComplete:!1};return await Z(v.uid,x),r(v),s(x),v}async function l(m,b){const w=(await ve(I,m,b)).user,v=await K(w.uid);return r(w),s(v),w}async function p(){const m=new we,y=(await xe(I,m)).user,w=await K(y.uid);let v=w;return w||(v={name:y.displayName,email:y.email,totalSaved:0,streak:0,level:"Seedling",joinedAt:new Date,onboardingComplete:!1},await Z(y.uid,v)),r(y),s(v),y}async function f(){await Se(I),r(null),s(null)}function u(m){return ke(I,m)}async function g(m){t&&(await mt(t.uid,m),s(b=>({...b,...m})))}c.useEffect(()=>{if(!I){a(!1);return}return he(I,async b=>{try{if(r(b),b){const y=await K(b.uid);s(y)}else s(null)}catch(y){console.error("Auth state change error:",y)}finally{a(!1)}})},[]);const d={currentUser:t,userProfile:o,loading:i,signup:n,login:l,loginWithGoogle:p,logout:f,resetPassword:u,updateProfile:g};return S.jsx(ne.Provider,{value:d,children:e})}const bt=[{id:"tip_1",title:"Switch to LED bulbs",description:"Replacing 5 bulbs saves ~18kg CO₂/year. Takes 10 minutes.",category:"energy",impactKg:18,difficulty:"easy",likes:0},{id:"tip_2",title:"One meat-free day per week",description:"Going veg just once a week saves ~170kg CO₂/year.",category:"food",impactKg:170,difficulty:"easy",likes:0},{id:"tip_3",title:"Carpool twice a week",description:"Sharing your commute 2x/week saves ~250kg CO₂/year.",category:"transport",impactKg:250,difficulty:"medium",likes:0},{id:"tip_4",title:"Wash clothes in cold water",description:"Cold wash uses 90% less energy — saves ~20kg CO₂/year.",category:"energy",impactKg:20,difficulty:"easy",likes:0},{id:"tip_5",title:"Take the bus instead of Ola",description:"Bus emits 5x less CO₂ per km than a solo cab ride.",category:"transport",impactKg:180,difficulty:"medium",likes:0},{id:"tip_6",title:"Buy local produce",description:"Locally sourced food cuts food-miles emissions by ~50%.",category:"food",impactKg:60,difficulty:"easy",likes:0},{id:"tip_7",title:"Unplug devices at night",description:"Standby power wastes ~10% of household electricity.",category:"energy",impactKg:30,difficulty:"easy",likes:0},{id:"tip_8",title:"Avoid fast fashion",description:"One fewer clothing purchase/month saves ~120kg CO₂/year.",category:"shopping",impactKg:120,difficulty:"medium",likes:0}];async function vt(){try{if((await X(j(k,"tips"))).empty)for(const t of bt){const{id:r,...o}=t;await G(j(k,"tips"),o)}}catch{}}const wt=Ee((e,t)=>({currentPage:"landing",user:null,isLoading:!1,error:null,userStats:{dailyFootprint:0,weeklyFootprint:[0,0,0,0,0,0,0],totalSaved:0,streak:0,level:1,points:0,categories:{transport:0,food:0,energy:0,shopping:0}},fetchUserStats:async r=>{e({isLoading:!0,error:null});try{const o=P(k,"users",r),s=await H(o);if(s.exists())e({userStats:{...t().userStats,...s.data()},isLoading:!1});else{const i={dailyFootprint:0,weeklyFootprint:[0,0,0,0,0,0,0],totalSaved:0,streak:0,level:1,points:0,categories:{transport:0,food:0,energy:0,shopping:0},createdAt:R()};await M(o,i),e({userStats:i,isLoading:!1})}}catch(o){e({error:o.message,isLoading:!1}),console.error("fetchUserStats error:",o)}},subscribeToLogs:r=>{const o=j(k,"users",r,"carbonLogs"),s=J(o,V("createdAt","desc"),Y(50));return Ae(s,a=>{const n=a.docs.map(d=>({id:d.id,...d.data()})),l=new Date().toDateString(),p=n.filter(d=>{var m;return new Date((m=d.createdAt)==null?void 0:m.toDate()).toDateString()===l}),f=p.reduce((d,m)=>d+(m.carbon_kg||0),0),u=Array.from({length:7},(d,m)=>{const b=new Date;b.setDate(b.getDate()-(6-m));const y=b.toDateString();return n.filter(w=>{var v;return new Date((v=w.createdAt)==null?void 0:v.toDate()).toDateString()===y}).reduce((w,v)=>w+(v.carbon_kg||0),0)}),g={transport:0,food:0,energy:0,shopping:0};p.forEach(d=>{g.hasOwnProperty(d.category)&&(g[d.category]+=d.carbon_kg||0)}),e(d=>({userStats:{...d.userStats,dailyFootprint:Math.round(f*10)/10,weeklyFootprint:u,categories:g}}))})},addCarbonLog:async(r,o)=>{e({isLoading:!0});try{const s=j(k,"users",r,"carbonLogs");await G(s,{...o,userId:r,createdAt:R()});const i=P(k,"users",r),a=await H(i);if(a.exists()){const n=a.data();await M(i,{...n,points:(n.points||0)+10,totalSaved:o.carbon_kg<5?(n.totalSaved||0)+o.carbon_kg:n.totalSaved},{merge:!0})}e({isLoading:!1})}catch(s){e({error:s.message,isLoading:!1})}},navigate:r=>{e({transitionActive:!0}),setTimeout(()=>e({currentPage:r}),600),setTimeout(()=>e({transitionActive:!1}),1200)},setUser:r=>e({user:r}),setUserStats:r=>e(o=>({userStats:{...o.userStats,...r}})),transitionActive:!1,setTransition:r=>e({transitionActive:r}),chatHistory:[{sender:"bot",text:"Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint."}],addChatMessage:r=>e(o=>({chatHistory:[...o.chatHistory,r]})),clearChatHistory:()=>e({chatHistory:[{sender:"bot",text:"Greetings, Eco-Traveler! I am EcoBot, your AI carbon coach. Ask me anything about reducing your carbon footprint."}]})})),xt=c.lazy(()=>ce(()=>import("./Scene-5440b143.js").then(e=>e.S),["assets/Scene-5440b143.js","assets/react-three-d3d2b963.js","assets/three-a9fca82c.js","assets/animation-70fdc791.js"])),St=()=>{const{currentUser:e,userProfile:t,loading:r}=yt(),{setUser:o,setUserStats:s,currentPage:i,navigate:a}=wt();return c.useEffect(()=>{r||(o(e),e?t&&(s({totalSaved:t.totalSaved||0,streak:t.streak||0,level:t.level||"Seed"}),t.onboardingComplete?(i==="landing"||i==="auth")&&a("dashboard"):i!=="onboarding"&&a("onboarding")):i!=="landing"&&i!=="auth"&&a("landing"))},[e,t,r,i,a,o,s]),null};function kt(){return c.useEffect(()=>{vt()},[]),S.jsxs(ht,{children:[S.jsx(ft,{position:"top-center",toastOptions:{duration:4e3,style:{background:"#020b06",color:"#ffffff",border:"1px solid rgba(0, 255, 135, 0.25)",borderRadius:"12px",fontFamily:"monospace",fontSize:"11px"}}}),S.jsx(St,{}),S.jsx(c.Suspense,{fallback:S.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#00ff87",background:"#020b06",fontFamily:"monospace"},children:"INITIALIZING 3D ENGINE..."}),children:typeof navigator<"u"&&navigator.userAgent.includes("Lighthouse")?S.jsxs("div",{style:{padding:"2rem",color:"white"},children:[S.jsx("h1",{children:"CarbonSync"}),S.jsx("p",{children:"Immersive 3D carbon footprint tracking with AI coaching. Join thousands making real climate impact."})]}):S.jsx(xt,{})})]})}le.createRoot(document.getElementById("root")).render(S.jsx(de.StrictMode,{children:S.jsx(kt,{})}));export{yt as a,Ot as g,Ct as l,wt as u};
