import{r as d,n as R,P as F,V as p,u as j,_ as w,e as A,s as _,v as I,C as v,j as o,T as h,k as O,m as C,b as V,G as X,c as H}from"./index-1cd27859.js";import{P as N}from"./ProgressRing3D-1331ce50.js";import{H as B}from"./Html-7a67bfd8.js";const L=_({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new v,sectionColor:new v,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new p,worldPlanePosition:new p},`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${I>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),W=d.forwardRef(({args:e,cellColor:i="#000000",sectionColor:f="#2080ff",cellSize:s=.5,sectionSize:n=1,followCamera:t=!1,infiniteGrid:m=!1,fadeDistance:a=100,fadeStrength:r=1,fadeFrom:l=1,cellThickness:c=.5,sectionThickness:u=1,side:g=A,...y},G)=>{R({GridMaterial:L});const x=d.useRef(null);d.useImperativeHandle(G,()=>x.current,[]);const P=new F,M=new p(0,1,0),z=new p(0,0,0);j(D=>{P.setFromNormalAndCoplanarPoint(M,z).applyMatrix4(x.current.matrixWorld);const S=x.current.material,k=S.uniforms.worldCamProjPosition,T=S.uniforms.worldPlanePosition;P.projectPoint(D.camera.position,k.value),T.value.set(0,0,0).applyMatrix4(x.current.matrixWorld)});const b={cellSize:s,sectionSize:n,cellColor:i,sectionColor:f,cellThickness:c,sectionThickness:u},E={fadeDistance:a,fadeStrength:r,fadeFrom:l,infiniteGrid:m,followCamera:t};return d.createElement("mesh",w({ref:x,frustumCulled:!1},y),d.createElement("gridMaterial",w({transparent:!0,"extensions-derivatives":!0,side:g},b,E)),d.createElement("planeGeometry",{args:e}))});function Y({earned:e=!1,label:i="Badge",icon:f="🌱",position:s=[0,0,0],...n}){const t=d.useRef();j((l,c)=>{t.current&&e&&(t.current.rotation.y+=.8*c)});const m="#ffd700",a="#00ff87",r="#1a2e22";return o.jsxs("group",{position:s,...n,children:[o.jsxs("mesh",{ref:t,rotation:[Math.PI/2,0,0],castShadow:!0,children:[o.jsx("cylinderGeometry",{args:[.4,.4,.08,6]}),o.jsx("meshStandardMaterial",{color:e?m:r,emissive:e?a:"#000000",emissiveIntensity:e?.4:0,roughness:.15,metalness:.9}),o.jsx(h,{position:[0,.05,0],rotation:[-Math.PI/2,0,0],fontSize:.25,anchorX:"center",anchorY:"middle",children:f})]}),o.jsx(h,{position:[0,-.6,0],fontSize:.12,color:e?"#ffffff":"rgba(255,255,255,0.4)",maxWidth:1,textAlign:"center",anchorX:"center",anchorY:"middle",children:i})]})}function K({index:e,active:i,today:f,position:s}){const[n,t]=d.useState(!1),{pos:m,scale:a,emissiveIntensity:r}=O({pos:n?[s[0],s[1],s[2]+.15]:s,scale:n?1.25:f?1.08:1,emissiveIntensity:i?1.2:.15,config:{mass:1,tension:240,friction:14}}),l="#00ff87",c="#13281b";return o.jsxs(C.mesh,{position:m,scale:a,onPointerOver:u=>{u.stopPropagation(),t(!0)},onPointerOut:()=>t(!1),castShadow:!0,receiveShadow:!0,children:[o.jsx("boxGeometry",{args:[.32,.32,.32]}),o.jsx(C.meshStandardMaterial,{color:i?l:c,emissive:i?l:c,emissiveIntensity:r,roughness:.15,metalness:.8}),n&&o.jsx(B,{distanceFactor:4,position:[0,0,.22],center:!0,pointerEvents:"none",children:o.jsxs("div",{className:"bg-[#020b06] border border-[#00ff87] text-[#00ff87] font-mono text-[9px] px-2 py-0.5 rounded shadow-xl whitespace-nowrap",children:["Day ",e+1,": ",i?"COMPLETED":"NO RECORD"]})})]})}function U({position:e=[0,0,0],...i}){const f=[2,3,5,6,9,10,11,15,16,17,18,19,20,23,24,25,26,27,28],s=6,n=5,t=.45,m=.45,a=[];for(let r=0;r<n;r++)for(let l=0;l<s;l++){const c=r*s+l,u=(l-(s-1)/2)*t,g=((n-1)/2-r)*m;a.push({index:c,active:f.includes(c),today:c===28,position:[u,g,0]})}return o.jsx("group",{position:e,...i,children:a.map(r=>o.jsx(K,{index:r.index,active:r.active,today:r.today,position:r.position},r.index))})}function Z({layoutRef:e}){const i=H();return j(()=>{e.current&&(e.current.position.y=i.offset*6.6,e.current.position.z=-i.offset*4.5)}),null}function $({progress:e=.5}){return o.jsxs("group",{position:[0,-.4,0],children:[e<.25&&o.jsxs("mesh",{position:[0,.05,0],castShadow:!0,children:[o.jsx("sphereGeometry",{args:[.08,8,8]}),o.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.9})]}),e>=.25&&e<.5&&o.jsxs("group",{children:[o.jsxs("mesh",{position:[0,.2,0],castShadow:!0,children:[o.jsx("cylinderGeometry",{args:[.02,.03,.4]}),o.jsx("meshStandardMaterial",{color:"#00ff87"})]}),o.jsxs("mesh",{position:[.08,.35,0],rotation:[0,0,-Math.PI/4],children:[o.jsx("boxGeometry",{args:[.12,.02,.08]}),o.jsx("meshStandardMaterial",{color:"#00ff87"})]})]}),e>=.5&&e<.75&&o.jsxs("group",{children:[o.jsxs("mesh",{position:[0,.3,0],castShadow:!0,children:[o.jsx("cylinderGeometry",{args:[.04,.05,.6]}),o.jsx("meshStandardMaterial",{color:"#5c4033"})]}),o.jsxs("mesh",{position:[0,.65,0],castShadow:!0,children:[o.jsx("sphereGeometry",{args:[.26,16,16]}),o.jsx("meshStandardMaterial",{color:"#00ff87",roughness:.3})]})]}),e>=.75&&o.jsxs("group",{children:[o.jsxs("mesh",{position:[0,.45,0],castShadow:!0,children:[o.jsx("cylinderGeometry",{args:[.07,.12,.9]}),o.jsx("meshStandardMaterial",{color:"#5c4033",roughness:.8})]}),o.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[o.jsx("coneGeometry",{args:[.45,.7,5]}),o.jsx("meshStandardMaterial",{color:"#00ff87",roughness:.5,flatShading:!0})]})]})]})}function oo(){const e=d.useRef();d.useState(!1);const i=[{id:1,title:"Reduce Car Travel",progress:.85,deadline:"3 days left"},{id:2,title:"Eat Vegan Meals",progress:.45,deadline:"5 days left"},{id:3,title:"Limit Electricity",progress:.1,deadline:"7 days left"}],f=[{id:1,earned:!0,label:"Eco Seed",icon:"🌱"},{id:2,earned:!0,label:"Bike Knight",icon:"🚲"},{id:3,earned:!0,label:"Zero waste",icon:"🗑️"},{id:4,earned:!1,label:"Solar Power",icon:"☀️"},{id:5,earned:!1,label:"Forest Guard",icon:"🌲"},{id:6,earned:!1,label:"CO2 Slayer",icon:"⚔️"}];return o.jsxs("group",{children:[o.jsx(Z,{layoutRef:e}),o.jsx(V,{count:45,scale:5,size:2.5,speed:.3,color:"#00ff87"}),o.jsxs("group",{ref:e,position:[0,0,0],children:[o.jsxs("group",{position:[0,0,0],children:[o.jsx(h,{position:[0,1.5,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"ACTIVE TARGETS GARDEN"}),o.jsx("group",{position:[0,-.52,0],rotation:[Math.PI/2,0,0],children:o.jsx(W,{position:[0,0,-.01],args:[6,6],cellSize:.5,cellThickness:.5,cellColor:"#13281b",sectionThickness:1,sectionColor:"#00ff87",fadeDistance:3.5})}),i.map((s,n)=>{const t=-1.9+n*1.9;return o.jsxs("group",{position:[t,0,0],children:[o.jsx("group",{position:[0,0,.2],children:o.jsx($,{progress:s.progress})}),o.jsx("group",{position:[0,.65,.1],children:o.jsxs(X,{width:1.4,height:.9,glowColor:"#00ff87",children:[o.jsx(h,{position:[0,.3,.05],fontSize:.08,color:"#ffffff",maxWidth:1.2,textAlign:"center",children:s.title.toUpperCase()}),o.jsx(h,{position:[0,.05,.05],fontSize:.07,color:"rgba(255,255,255,0.5)",children:s.deadline}),o.jsx("group",{position:[0,-.22,.05],children:o.jsx(N,{progress:s.progress,size:.16,color:"#00ff87"})})]})})]},s.id)})]}),o.jsxs("group",{position:[0,-3.2,0],children:[o.jsx(h,{position:[0,1.4,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"ECO COSMOS MEDALS"}),o.jsx("group",{position:[0,.2,0],children:f.map((s,n)=>{const t=Math.floor(n/3),a=-1.6+n%3*1.6+t%2*.8-.4,r=.3-t*1.1;return o.jsx(Y,{earned:s.earned,label:s.label,icon:s.icon,position:[a,r,0],scale:.7},s.id)})})]}),o.jsxs("group",{position:[0,-6.4,0],children:[o.jsx(h,{position:[0,1.3,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"STREAK CALENDAR GRID"}),o.jsx("group",{position:[0,0,0],children:o.jsx(U,{scale:1.1})})]})]})]})}export{oo as GoalsScene,oo as default};
