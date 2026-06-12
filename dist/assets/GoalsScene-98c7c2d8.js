import{M as R,f as O,U as F,r as u,m as A,P as _,V as p,u as j,_ as w,B as I,v as U,C as v,j as e,T as m,i as V,k as y,H as X,b as B,G as H,c as N}from"./index-7ed8a20b.js";import{P as L}from"./ProgressRing3D-5cc5b5fa.js";function W(o,t,d,s){const i=class extends O{constructor(f={}){const l=Object.entries(o);super({uniforms:l.reduce((r,[a,c])=>{const h=F.clone({[a]:{value:c}});return{...r,...h}},{}),vertexShader:t,fragmentShader:d}),this.key="",l.forEach(([r])=>Object.defineProperty(this,r,{get:()=>this.uniforms[r].value,set:a=>this.uniforms[r].value=a})),Object.assign(this,f),s&&s(this)}};return i.key=R.generateUUID(),i}const Y=W({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new v,sectionColor:new v,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new p,worldPlanePosition:new p},`
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
      #include <${U>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `),K=u.forwardRef(({args:o,cellColor:t="#000000",sectionColor:d="#2080ff",cellSize:s=.5,sectionSize:i=1,followCamera:n=!1,infiniteGrid:f=!1,fadeDistance:l=100,fadeStrength:r=1,fadeFrom:a=1,cellThickness:c=.5,sectionThickness:h=1,side:g=I,...C},M)=>{A({GridMaterial:Y});const x=u.useRef(null);u.useImperativeHandle(M,()=>x.current,[]);const P=new _,G=new p(0,1,0),z=new p(0,0,0);j(k=>{P.setFromNormalAndCoplanarPoint(G,z).applyMatrix4(x.current.matrixWorld);const S=x.current.material,D=S.uniforms.worldCamProjPosition,T=S.uniforms.worldPlanePosition;P.projectPoint(k.camera.position,D.value),T.value.set(0,0,0).applyMatrix4(x.current.matrixWorld)});const b={cellSize:s,sectionSize:i,cellColor:t,sectionColor:d,cellThickness:c,sectionThickness:h},E={fadeDistance:l,fadeStrength:r,fadeFrom:a,infiniteGrid:f,followCamera:n};return u.createElement("mesh",w({ref:x,frustumCulled:!1},C),u.createElement("gridMaterial",w({transparent:!0,"extensions-derivatives":!0,side:g},b,E)),u.createElement("planeGeometry",{args:o}))});function Z({earned:o=!1,label:t="Badge",icon:d="🌱",position:s=[0,0,0],...i}){const n=u.useRef();j((a,c)=>{n.current&&o&&(n.current.rotation.y+=.8*c)});const f="#ffd700",l="#00ff87",r="#1a2e22";return e.jsxs("group",{position:s,...i,children:[e.jsxs("mesh",{ref:n,rotation:[Math.PI/2,0,0],castShadow:!0,children:[e.jsx("cylinderGeometry",{args:[.4,.4,.08,6]}),e.jsx("meshStandardMaterial",{color:o?f:r,emissive:o?l:"#000000",emissiveIntensity:o?.4:0,roughness:.15,metalness:.9}),e.jsx(m,{position:[0,.05,0],rotation:[-Math.PI/2,0,0],fontSize:.25,anchorX:"center",anchorY:"middle",children:d})]}),e.jsx(m,{position:[0,-.6,0],fontSize:.12,color:o?"#ffffff":"rgba(255,255,255,0.4)",maxWidth:1,textAlign:"center",anchorX:"center",anchorY:"middle",children:t})]})}function $({index:o,active:t,today:d,position:s}){const[i,n]=u.useState(!1),{pos:f,scale:l,emissiveIntensity:r}=V({pos:i?[s[0],s[1],s[2]+.15]:s,scale:i?1.25:d?1.08:1,emissiveIntensity:t?1.2:.15,config:{mass:1,tension:240,friction:14}}),a="#00ff87",c="#13281b";return e.jsxs(y.mesh,{position:f,scale:l,onPointerOver:h=>{h.stopPropagation(),n(!0)},onPointerOut:()=>n(!1),castShadow:!0,receiveShadow:!0,children:[e.jsx("boxGeometry",{args:[.32,.32,.32]}),e.jsx(y.meshStandardMaterial,{color:t?a:c,emissive:t?a:c,emissiveIntensity:r,roughness:.15,metalness:.8}),i&&e.jsx(X,{distanceFactor:4,position:[0,0,.22],center:!0,pointerEvents:"none",children:e.jsxs("div",{className:"bg-[#020b06] border border-[#00ff87] text-[#00ff87] font-mono text-[9px] px-2 py-0.5 rounded shadow-xl whitespace-nowrap",children:["Day ",o+1,": ",t?"COMPLETED":"NO RECORD"]})})]})}function q({position:o=[0,0,0],...t}){const d=[2,3,5,6,9,10,11,15,16,17,18,19,20,23,24,25,26,27,28],s=6,i=5,n=.45,f=.45,l=[];for(let r=0;r<i;r++)for(let a=0;a<s;a++){const c=r*s+a,h=(a-(s-1)/2)*n,g=((i-1)/2-r)*f;l.push({index:c,active:d.includes(c),today:c===28,position:[h,g,0]})}return e.jsx("group",{position:o,...t,children:l.map(r=>e.jsx($,{index:r.index,active:r.active,today:r.today,position:r.position},r.index))})}function J({layoutRef:o}){const t=N();return j(()=>{o.current&&(o.current.position.y=t.offset*6.6,o.current.position.z=-t.offset*4.5)}),null}function Q({progress:o=.5}){return e.jsxs("group",{position:[0,-.4,0],children:[o<.25&&e.jsxs("mesh",{position:[0,.05,0],castShadow:!0,children:[e.jsx("sphereGeometry",{args:[.08,8,8]}),e.jsx("meshStandardMaterial",{color:"#8b5a2b",roughness:.9})]}),o>=.25&&o<.5&&e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,.2,0],castShadow:!0,children:[e.jsx("cylinderGeometry",{args:[.02,.03,.4]}),e.jsx("meshStandardMaterial",{color:"#00ff87"})]}),e.jsxs("mesh",{position:[.08,.35,0],rotation:[0,0,-Math.PI/4],children:[e.jsx("boxGeometry",{args:[.12,.02,.08]}),e.jsx("meshStandardMaterial",{color:"#00ff87"})]})]}),o>=.5&&o<.75&&e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,.3,0],castShadow:!0,children:[e.jsx("cylinderGeometry",{args:[.04,.05,.6]}),e.jsx("meshStandardMaterial",{color:"#5c4033"})]}),e.jsxs("mesh",{position:[0,.65,0],castShadow:!0,children:[e.jsx("sphereGeometry",{args:[.26,16,16]}),e.jsx("meshStandardMaterial",{color:"#00ff87",roughness:.3})]})]}),o>=.75&&e.jsxs("group",{children:[e.jsxs("mesh",{position:[0,.45,0],castShadow:!0,children:[e.jsx("cylinderGeometry",{args:[.07,.12,.9]}),e.jsx("meshStandardMaterial",{color:"#5c4033",roughness:.8})]}),e.jsxs("mesh",{position:[0,1.1,0],castShadow:!0,children:[e.jsx("coneGeometry",{args:[.45,.7,5]}),e.jsx("meshStandardMaterial",{color:"#00ff87",roughness:.5,flatShading:!0})]})]})]})}function re(){const o=u.useRef();u.useState(!1);const t=[{id:1,title:"Reduce Car Travel",progress:.85,deadline:"3 days left"},{id:2,title:"Eat Vegan Meals",progress:.45,deadline:"5 days left"},{id:3,title:"Limit Electricity",progress:.1,deadline:"7 days left"}],d=[{id:1,earned:!0,label:"Eco Seed",icon:"🌱"},{id:2,earned:!0,label:"Bike Knight",icon:"🚲"},{id:3,earned:!0,label:"Zero waste",icon:"🗑️"},{id:4,earned:!1,label:"Solar Power",icon:"☀️"},{id:5,earned:!1,label:"Forest Guard",icon:"🌲"},{id:6,earned:!1,label:"CO2 Slayer",icon:"⚔️"}];return e.jsxs("group",{children:[e.jsx(J,{layoutRef:o}),e.jsx(B,{count:45,scale:5,size:2.5,speed:.3,color:"#00ff87"}),e.jsxs("group",{ref:o,position:[0,0,0],children:[e.jsxs("group",{position:[0,0,0],children:[e.jsx(m,{position:[0,1.5,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"ACTIVE TARGETS GARDEN"}),e.jsx("group",{position:[0,-.52,0],rotation:[Math.PI/2,0,0],children:e.jsx(K,{position:[0,0,-.01],args:[6,6],cellSize:.5,cellThickness:.5,cellColor:"#13281b",sectionThickness:1,sectionColor:"#00ff87",fadeDistance:3.5})}),t.map((s,i)=>{const n=-1.9+i*1.9;return e.jsxs("group",{position:[n,0,0],children:[e.jsx("group",{position:[0,0,.2],children:e.jsx(Q,{progress:s.progress})}),e.jsx("group",{position:[0,.65,.1],children:e.jsxs(H,{width:1.4,height:.9,glowColor:"#00ff87",children:[e.jsx(m,{position:[0,.3,.05],fontSize:.08,color:"#ffffff",maxWidth:1.2,textAlign:"center",children:s.title.toUpperCase()}),e.jsx(m,{position:[0,.05,.05],fontSize:.07,color:"#808080",children:s.deadline}),e.jsx("group",{position:[0,-.22,.05],children:e.jsx(L,{progress:s.progress,size:.16,color:"#00ff87"})})]})})]},s.id)})]}),e.jsxs("group",{position:[0,-3.2,0],children:[e.jsx(m,{position:[0,1.4,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"ECO COSMOS MEDALS"}),e.jsx("group",{position:[0,.2,0],children:d.map((s,i)=>{const n=Math.floor(i/3),l=-1.6+i%3*1.6+n%2*.8-.4,r=.3-n*1.1;return e.jsx(Z,{earned:s.earned,label:s.label,icon:s.icon,position:[l,r,0],scale:.7},s.id)})})]}),e.jsxs("group",{position:[0,-6.4,0],children:[e.jsx(m,{position:[0,1.3,.05],fontSize:.2,color:"#ffffff",anchorX:"center",children:"STREAK CALENDAR GRID"}),e.jsx("group",{position:[0,0,0],children:e.jsx(q,{scale:1.1})})]})]})]})}export{re as GoalsScene,re as default};
