(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88653,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),o=e.i(31178),n=e.i(47414),a=e.i(74008),i=e.i(21476),s=e.i(72846),l=r,u=e.i(37806);function c(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class m extends l.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,r=(0,s.isHTMLElement)(e)&&e.offsetWidth||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=r-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:o,anchorX:n,root:a}){let i=(0,l.useId)(),s=(0,l.useRef)(null),d=(0,l.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:f}=(0,l.useContext)(u.MotionConfigContext),p=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,o=e.map(e=>{let o=c(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():c(e[t],null)}}}}(...e),e)}(s,e?.ref);return(0,l.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:l,right:u}=d.current;if(o||!s.current||!e||!t)return;let c="left"===n?`left: ${l}`:`right: ${u}`;s.current.dataset.motionPopId=i;let m=document.createElement("style");f&&(m.nonce=f);let p=a??document.head;return p.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${c}px !important;
            top: ${r}px !important;
          }
        `),()=>{p.contains(m)&&p.removeChild(m)}},[o]),(0,t.jsx)(m,{isPresent:o,childRef:s,sizeRef:d,children:l.cloneElement(e,{ref:p})})}let f=({children:e,initial:o,isPresent:a,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:c,anchorX:m,root:f})=>{let v=(0,n.useConstant)(p),h=(0,r.useId)(),x=!0,y=(0,r.useMemo)(()=>(x=!1,{id:h,initial:o,isPresent:a,custom:l,onExitComplete:e=>{for(let t of(v.set(e,!0),v.values()))if(!t)return;s&&s()},register:e=>(v.set(e,!1),()=>v.delete(e))}),[a,v,s]);return u&&x&&(y={...y}),(0,r.useMemo)(()=>{v.forEach((e,t)=>v.set(t,!1))},[a]),r.useEffect(()=>{a||v.size||!s||s()},[a]),"popLayout"===c&&(e=(0,t.jsx)(d,{isPresent:a,anchorX:m,root:f,children:e})),(0,t.jsx)(i.PresenceContext.Provider,{value:y,children:e})};function p(){return new Map}var v=e.i(64978);let h=e=>e.key||"";function x(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}let y=({children:e,custom:i,initial:s=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:c="sync",propagate:m=!1,anchorX:d="left",root:p})=>{let[y,g]=(0,v.usePresence)(m),b=(0,r.useMemo)(()=>x(e),[e]),w=m&&!y?[]:b.map(h),M=(0,r.useRef)(!0),j=(0,r.useRef)(b),A=(0,n.useConstant)(()=>new Map),[P,S]=(0,r.useState)(b),[z,C]=(0,r.useState)(b);(0,a.useIsomorphicLayoutEffect)(()=>{M.current=!1,j.current=b;for(let e=0;e<z.length;e++){let t=h(z[e]);w.includes(t)?A.delete(t):!0!==A.get(t)&&A.set(t,!1)}},[z,w.length,w.join("-")]);let E=[];if(b!==P){let e=[...b];for(let t=0;t<z.length;t++){let r=z[t],o=h(r);w.includes(o)||(e.splice(t,0,r),E.push(r))}return"wait"===c&&E.length&&(e=E),C(x(e)),S(b),null}let{forceRender:F}=(0,r.useContext)(o.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:z.map(e=>{let r=h(e),o=(!m||!!y)&&(b===z||w.includes(r));return(0,t.jsx)(f,{isPresent:o,initial:(!M.current||!!s)&&void 0,custom:i,presenceAffectsLayout:u,mode:c,root:p,onExitComplete:o?void 0:()=>{if(!A.has(r))return;A.set(r,!0);let e=!0;A.forEach(t=>{t||(e=!1)}),e&&(F?.(),C(j.current),m&&g?.(),l&&l())},anchorX:d,children:e},r)})})};e.s(["AnimatePresence",()=>y],88653)},36510,e=>{"use strict";var t=e.i(43476),r=e.i(71645),o=e.i(75056),n=e.i(49774),a=e.i(73949),i=e.i(90072);let s=(0,r.createContext)({scrollProgress:0,scrollVelocity:0,mouse:{x:.5,y:.5},mouseVelocity:{x:0,y:0},quality:"high"}),l=()=>(0,r.useContext)(s),u=`
  uniform float uTime;
  uniform float uScrollProgress;
  uniform vec2 uMouse;
  
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  // Simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    float t = uTime * 0.3;
    
    // Mouse ripple effect
    vec2 mouseWorld = (uMouse - 0.5) * vec2(40.0, 25.0);
    float mouseDist = length(pos.xy - mouseWorld);
    float mouseRipple = sin(mouseDist * 0.5 - uTime * 3.0) * exp(-mouseDist * 0.08) * 0.5;
    
    // Multi-layer waves
    float wave1 = snoise(vec3(pos.x * 0.08, pos.y * 0.08, t * 0.5)) * 1.5;
    float wave2 = snoise(vec3(pos.x * 0.15 + 100.0, pos.y * 0.15, t * 0.7)) * 0.8;
    float wave3 = snoise(vec3(pos.x * 0.3 + 200.0, pos.y * 0.3, t)) * 0.3;
    
    // Scroll-based wave intensity
    float scrollWave = sin(pos.y * 0.1 + uScrollProgress * 10.0) * uScrollProgress * 2.0;
    
    float elevation = wave1 + wave2 + wave3 + mouseRipple + scrollWave;
    pos.z += elevation;
    
    vElevation = elevation;
    vPosition = pos;
    
    // Calculate normal for lighting
    float delta = 0.1;
    float elevationX = snoise(vec3((pos.x + delta) * 0.08, pos.y * 0.08, t * 0.5)) * 1.5;
    float elevationY = snoise(vec3(pos.x * 0.08, (pos.y + delta) * 0.08, t * 0.5)) * 1.5;
    vNormal = normalize(vec3(elevation - elevationX, elevation - elevationY, delta));
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,c=`
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScrollProgress;
  
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    // Very dark base colors
    vec3 deepColor = vec3(0.01, 0.02, 0.04);      // Almost black
    vec3 midColor = vec3(0.02, 0.04, 0.08);       // Very dark blue
    vec3 highlightColor = vec3(0.05, 0.08, 0.15); // Dark blue highlight
    vec3 edgeGlow = vec3(0.03, 0.06, 0.12);       // Subtle edge
    
    // Elevation-based color mixing
    float elevationNorm = (vElevation + 2.0) / 4.0;
    vec3 color = mix(deepColor, midColor, elevationNorm);
    
    // Subtle highlights on peaks
    float highlight = smoothstep(0.5, 1.0, elevationNorm);
    color = mix(color, highlightColor, highlight * 0.3);
    
    // Edge glow based on normal
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
    color += edgeGlow * fresnel * 0.2;
    
    // Mouse proximity glow (very subtle)
    vec2 mouseWorld = (uMouse - 0.5) * vec2(40.0, 25.0);
    float mouseDist = length(vPosition.xy - mouseWorld);
    float mouseGlow = exp(-mouseDist * 0.1) * 0.08;
    color += vec3(0.02, 0.04, 0.08) * mouseGlow;
    
    // Scroll-based subtle pulse
    float scrollPulse = sin(uScrollProgress * 6.28) * 0.02 + 0.02;
    color += vec3(0.01, 0.02, 0.04) * scrollPulse;
    
    // Vignette
    float vignette = 1.0 - length(vUv - 0.5) * 0.8;
    color *= vignette;
    
    gl_FragColor = vec4(color, 0.95);
  }
`,m=`
  attribute float aSize;
  attribute float aPhase;
  attribute float aDepth;
  
  uniform float uTime;
  uniform float uScrollProgress;
  uniform float uScrollVelocity;
  uniform vec2 uMouse;
  
  varying float vAlpha;
  varying float vDepth;
  
  void main() {
    vec3 pos = position;
    
    float t = uTime * 0.2;
    
    // Gentle floating motion
    pos.x += sin(t + aPhase * 6.28) * 0.5;
    pos.y += cos(t * 0.7 + aPhase * 6.28) * 0.3;
    pos.z += sin(t * 0.5 + aPhase * 3.14) * 0.2;
    
    // Scroll-based drift
    pos.y -= uScrollProgress * 15.0;
    pos.z += uScrollProgress * 5.0;
    
    // Mouse attraction (subtle)
    vec2 mouseWorld = (uMouse - 0.5) * vec2(50.0, 30.0);
    vec2 toMouse = mouseWorld - pos.xy;
    float mouseDist = length(toMouse);
    float attraction = smoothstep(20.0, 0.0, mouseDist) * 0.15;
    pos.xy += normalize(toMouse + 0.001) * attraction;
    
    // Wrap for infinite effect
    pos.y = mod(pos.y + 40.0, 80.0) - 40.0;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Depth-based size and alpha
    float depth = -mvPosition.z;
    vDepth = aDepth;
    vAlpha = smoothstep(80.0, 10.0, depth) * (0.3 + aDepth * 0.4);
    
    gl_PointSize = aSize * (150.0 / depth) * (0.5 + aDepth * 0.5);
  }
`,d=`
  varying float vAlpha;
  varying float vDepth;
  
  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    // Soft circular particle
    float alpha = smoothstep(0.5, 0.1, dist) * vAlpha;
    
    // Very dark, subtle color
    vec3 color = mix(
      vec3(0.02, 0.04, 0.08),
      vec3(0.04, 0.06, 0.12),
      vDepth
    );
    
    gl_FragColor = vec4(color, alpha);
  }
`;function f(){let e=(0,r.useRef)(null),{scrollProgress:o,scrollVelocity:a,mouse:s}=l(),m=(0,r.useMemo)(()=>({uTime:{value:0},uMouse:{value:new i.Vector2(.5,.5)},uScrollProgress:{value:0}}),[]);return(0,n.useFrame)(e=>{m.uTime.value=e.clock.elapsedTime,m.uMouse.value.set(s.x,s.y),m.uScrollProgress.value=o}),(0,t.jsxs)("mesh",{ref:e,rotation:[-Math.PI/2.5,0,0],position:[0,-5,-10],children:[(0,t.jsx)("planeGeometry",{args:[80,60,128,128]}),(0,t.jsx)("shaderMaterial",{transparent:!0,uniforms:m,vertexShader:u,fragmentShader:c,side:i.DoubleSide})]})}function p({count:e=600}){let o=(0,r.useRef)(null),{scrollProgress:a,scrollVelocity:s,mouse:u}=l(),[c,f]=(0,r.useMemo)(()=>{let t=new i.BufferGeometry,r=new Float32Array(3*e),o=new Float32Array(e),n=new Float32Array(e),a=new Float32Array(e);for(let t=0;t<e;t++)r[3*t]=(Math.random()-.5)*60,r[3*t+1]=(Math.random()-.5)*80,r[3*t+2]=(Math.random()-.5)*50-10,o[t]=2+4*Math.random(),n[t]=Math.random(),a[t]=Math.random();return t.setAttribute("position",new i.BufferAttribute(r,3)),t.setAttribute("aSize",new i.BufferAttribute(o,1)),t.setAttribute("aPhase",new i.BufferAttribute(n,1)),t.setAttribute("aDepth",new i.BufferAttribute(a,1)),[t,{uTime:{value:0},uScrollProgress:{value:0},uScrollVelocity:{value:0},uMouse:{value:new i.Vector2(.5,.5)}}]},[e]);return(0,n.useFrame)(e=>{f.uTime.value=e.clock.elapsedTime,f.uScrollProgress.value=a,f.uScrollVelocity.value=s,f.uMouse.value.set(u.x,u.y)}),(0,t.jsx)("points",{ref:o,geometry:c,children:(0,t.jsx)("shaderMaterial",{transparent:!0,depthWrite:!1,blending:i.AdditiveBlending,uniforms:f,vertexShader:m,fragmentShader:d})})}function v(){let e=(0,r.useRef)(null),{scrollProgress:o,mouse:a}=l(),s=(0,r.useMemo)(()=>Array.from({length:5},(e,t)=>({position:[(Math.random()-.5)*40,15+10*Math.random(),-20-20*Math.random()],rotation:[0,0,(Math.random()-.5)*.3],scale:8+6*Math.random(),phase:Math.random()*Math.PI*2})),[]);return(0,n.useFrame)(t=>{if(!e.current)return;let r=t.clock.elapsedTime;e.current.children.forEach((e,t)=>{let n=s[t];e.rotation.z=n.rotation[2]+.05*Math.sin(.2*r+n.phase);let a=.5*Math.sin(.3*r+n.phase)+.5;e.material.opacity=.015+.01*a,e.position.y=n.position[1]-5*o})}),(0,t.jsx)("group",{ref:e,children:s.map((e,r)=>(0,t.jsxs)("mesh",{position:e.position,rotation:e.rotation,children:[(0,t.jsx)("coneGeometry",{args:[2,e.scale,4,1,!0]}),(0,t.jsx)("meshBasicMaterial",{color:"#0a1525",transparent:!0,opacity:.02,blending:i.AdditiveBlending,side:i.DoubleSide,depthWrite:!1})]},r))})}function h(){let e=(0,r.useRef)(null),{scrollProgress:o,mouse:a}=l(),s=(0,r.useMemo)(()=>[{pos:[-20,8,-25],size:3,speed:.15},{pos:[25,-5,-30],size:2.5,speed:.2},{pos:[-15,-12,-20],size:2,speed:.18},{pos:[18,12,-35],size:4,speed:.12}],[]);return(0,n.useFrame)(t=>{if(!e.current)return;let r=t.clock.elapsedTime;e.current.children.forEach((e,t)=>{let n=s[t];e.position.y=n.pos[1]+2*Math.sin(r*n.speed),e.position.x=n.pos[0]+1.5*Math.cos(r*n.speed*.7),e.position.z=n.pos[2]+5*o;let a=n.size*(.9+.1*Math.sin(r*n.speed*2));e.scale.setScalar(a)})}),(0,t.jsx)("group",{ref:e,children:s.map((e,r)=>(0,t.jsxs)("mesh",{position:e.pos,children:[(0,t.jsx)("sphereGeometry",{args:[1,16,16]}),(0,t.jsx)("meshBasicMaterial",{color:"#050a15",transparent:!0,opacity:.3,blending:i.AdditiveBlending})]},r))})}function x(){let e=(0,r.useRef)(null),o=(0,r.useMemo)(()=>({uTime:{value:0}}),[]);return(0,n.useFrame)(e=>{o.uTime.value=e.clock.elapsedTime}),(0,t.jsxs)("mesh",{ref:e,position:[0,0,-60],children:[(0,t.jsx)("planeGeometry",{args:[200,150]}),(0,t.jsx)("shaderMaterial",{uniforms:o,vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float uTime;
          varying vec2 vUv;
          
          void main() {
            float t = uTime * 0.01;
            vec2 uv = vUv;
            
            // Very subtle animated gradient
            float wave = sin(uv.x * 2.0 + t) * 0.01 + sin(uv.y * 3.0 + t * 0.7) * 0.01;
            float y = uv.y + wave;
            
            // Almost black gradient
            vec3 color1 = vec3(0.008, 0.012, 0.02);  // Near black
            vec3 color2 = vec3(0.015, 0.025, 0.04);  // Very dark blue
            vec3 color3 = vec3(0.01, 0.018, 0.03);   // Dark
            
            vec3 color;
            if (y < 0.5) {
              color = mix(color1, color2, y * 2.0);
            } else {
              color = mix(color2, color3, (y - 0.5) * 2.0);
            }
            
            // Subtle noise
            float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
            color += noise * 0.008;
            
            gl_FragColor = vec4(color, 1.0);
          }
        `})]})}function y(){let{camera:e}=(0,a.useThree)(),{scrollProgress:t,scrollVelocity:o,mouse:s}=l(),u=(0,r.useRef)(new i.Vector3(0,0,20));return(0,n.useFrame)(r=>{let n=r.clock.elapsedTime,a=(s.x-.5)*2,l=(s.y-.5)*2,c=.3*Math.sin(.05*n),m=.2*Math.cos(.04*n);u.current.x+=(c+1.5*a-u.current.x)*.02,u.current.y+=(m-l+-(6*t)-u.current.y)*.02,u.current.z+=(20-12*t-u.current.z)*.02,e.position.copy(u.current),e.rotation.x=i.MathUtils.lerp(e.rotation.x,-(.02*l)+.01*o,.03),e.rotation.y=i.MathUtils.lerp(e.rotation.y,.02*a,.03)}),null}function g({count:e=200}){let o=(0,r.useRef)(null),{scrollProgress:a,mouse:s}=l(),[u,c,m,d]=(0,r.useMemo)(()=>{let t=new Float32Array(3*e),r=new Float32Array(e),o=new Float32Array(e),n=new Float32Array(e);for(let a=0;a<e;a++)t[3*a]=(Math.random()-.5)*120,t[3*a+1]=(Math.random()-.5)*80,t[3*a+2]=-20-60*Math.random(),r[a]=.5+1.5*Math.random(),o[a]=Math.random()*Math.PI*2,n[a]=.5+2*Math.random();return[t,r,o,n]},[e]);return(0,n.useFrame)(t=>{if(!o.current)return;let r=t.clock.elapsedTime,n=o.current.geometry.attributes.position;for(let t=0;t<e;t++){let e=u[3*t],o=u[3*t+1],i=u[3*t+2];n.setX(t,e+.5*Math.sin(.1*r+m[t])),n.setY(t,o+.3*Math.cos(.08*r+m[t])-20*a),n.setZ(t,i+10*a)}n.needsUpdate=!0,o.current.rotation.y=.005*r}),(0,t.jsxs)("points",{ref:o,children:[(0,t.jsxs)("bufferGeometry",{children:[(0,t.jsx)("bufferAttribute",{attach:"attributes-position",args:[u,3]}),(0,t.jsx)("bufferAttribute",{attach:"attributes-size",args:[c,1]})]}),(0,t.jsx)("pointsMaterial",{size:.08,color:"#0a1a35",transparent:!0,opacity:.6,sizeAttenuation:!0,blending:i.AdditiveBlending,depthWrite:!1})]})}function b({count:e=80}){let o=(0,r.useRef)(null),{scrollProgress:a,mouse:s}=l(),u=(0,r.useMemo)(()=>{let t=new Float32Array(3*e),r=new Float32Array(3*e),o=new Float32Array(e),n=new Float32Array(e),a=[new i.Color("#0a2040"),new i.Color("#0a3050"),new i.Color("#082838"),new i.Color("#0a1830")];for(let i=0;i<e;i++){t[3*i]=(Math.random()-.5)*100,t[3*i+1]=(Math.random()-.5)*70,t[3*i+2]=-15-50*Math.random();let e=a[Math.floor(Math.random()*a.length)];r[3*i]=e.r,r[3*i+1]=e.g,r[3*i+2]=e.b,o[i]=1+2*Math.random(),n[i]=Math.random()*Math.PI*2}return{positions:t,colors:r,sizes:o,phases:n}},[e]);return(0,n.useFrame)(e=>{if(!o.current)return;let t=e.clock.elapsedTime;o.current.material.opacity=.4+.1*Math.sin(.5*t),o.current.position.y=-(15*a),o.current.position.z=8*a,o.current.rotation.z=.02*Math.sin(.02*t)}),(0,t.jsxs)("points",{ref:o,children:[(0,t.jsxs)("bufferGeometry",{children:[(0,t.jsx)("bufferAttribute",{attach:"attributes-position",args:[u.positions,3]}),(0,t.jsx)("bufferAttribute",{attach:"attributes-color",args:[u.colors,3]})]}),(0,t.jsx)("pointsMaterial",{size:.12,vertexColors:!0,transparent:!0,opacity:.5,sizeAttenuation:!0,blending:i.AdditiveBlending,depthWrite:!1})]})}function w(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{}),(0,t.jsx)(g,{count:150}),(0,t.jsx)(b,{count:60}),(0,t.jsx)(f,{}),(0,t.jsx)(v,{}),(0,t.jsx)(p,{count:400}),(0,t.jsx)(h,{}),(0,t.jsx)(y,{}),(0,t.jsx)("ambientLight",{intensity:.02}),(0,t.jsx)("pointLight",{position:[0,10,5],intensity:.05,color:"#0a1a30"})]})}function M({className:e="",intensity:n=1,enableCursor:a=!0,children:i}){let[l,u]=(0,r.useState)(!1),c=function(){let[e,t]=(0,r.useState)("high");return(0,r.useEffect)(()=>{if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return void t("low");let e=document.createElement("canvas"),r=e.getContext("webgl")||e.getContext("experimental-webgl");if(r){let e=r.getExtension("WEBGL_debug_renderer_info");if(e){let o=r.getParameter(e.UNMASKED_RENDERER_WEBGL);/Intel|Mali|Adreno 3|Adreno 4|PowerVR/i.test(o)&&t("medium")}}window.innerWidth<768&&t("medium")},[]),e}(),{scrollProgress:m,scrollVelocity:d,mouse:f,mouseVelocity:p}=function(){let[e,t]=(0,r.useState)(0),[o,n]=(0,r.useState)(0),[a,i]=(0,r.useState)({x:.5,y:.5}),[s,l]=(0,r.useState)({x:0,y:0}),u=(0,r.useRef)(0),c=(0,r.useRef)({x:.5,y:.5}),m=(0,r.useRef)();return(0,r.useEffect)(()=>{let e=performance.now(),r=()=>{let o=performance.now(),a=Math.min((o-e)/1e3,.1);e=o;let i=document.documentElement.scrollHeight-window.innerHeight,s=window.scrollY,l=(s-u.current)/(1e3*a);u.current=s,t(Math.min(1,Math.max(0,i>0?s/i:0))),n(e=>.9*e+.1*l),m.current=requestAnimationFrame(r)};return m.current=requestAnimationFrame(r),()=>{m.current&&cancelAnimationFrame(m.current)}},[]),(0,r.useEffect)(()=>{let e=e=>{let t={x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight};l({x:t.x-c.current.x,y:t.y-c.current.y}),c.current=t,i(t)};return window.addEventListener("mousemove",e,{passive:!0}),()=>window.removeEventListener("mousemove",e)},[]),{scrollProgress:e,scrollVelocity:o,mouse:a,mouseVelocity:s}}();(0,r.useEffect)(()=>{u(!0)},[]);let v=(0,r.useMemo)(()=>({scrollProgress:m,scrollVelocity:d,mouse:f,mouseVelocity:p,quality:c}),[m,d,f,p,c]);if(!l)return(0,t.jsx)("div",{className:`fixed inset-0 -z-10 bg-[#020408] ${e}`});let h="low"===c?1:"medium"===c?[1,1.5]:[1,2];return(0,t.jsxs)(s.Provider,{value:v,children:[(0,t.jsx)("div",{className:`fixed inset-0 -z-10 ${e}`,children:(0,t.jsxs)(o.Canvas,{camera:{position:[0,0,20],fov:50,near:.1,far:200},dpr:h,gl:{antialias:"low"!==c,alpha:!1,powerPreference:"low"===c?"low-power":"high-performance",stencil:!1,depth:!0},performance:{min:.5},children:[(0,t.jsx)("color",{attach:"background",args:["#020408"]}),(0,t.jsx)(w,{})]})}),a&&(0,t.jsx)(j,{mouse:f,mouseVelocity:p}),(0,t.jsx)(A,{progress:m}),i]})}function j({mouse:e,mouseVelocity:o}){let n=(0,r.useRef)(null),a=(0,r.useRef)([]),i=(0,r.useRef)({x:0,y:0}),s=(0,r.useRef)({x:0,y:0}),l=(0,r.useRef)(Array(6).fill({x:0,y:0}));return(0,r.useEffect)(()=>{let t,r=()=>{let o=e.x*window.innerWidth,u=e.y*window.innerHeight,c=o-i.current.x,m=u-i.current.y;if(s.current.x=.88*s.current.x+.12*c,s.current.y=.88*s.current.y+.12*m,i.current.x+=s.current.x,i.current.y+=s.current.y,n.current){let e=Math.sqrt(s.current.x**2+s.current.y**2),t=1+Math.min(.015*e,.3),r=Math.atan2(s.current.y,s.current.x);n.current.style.transform=`
          translate(${i.current.x}px, ${i.current.y}px)
          translate(-50%, -50%)
          scale(${t}, ${.85*t})
          rotate(${r}rad)
        `;let o=Math.min(.3*e,10);n.current.style.boxShadow=`
          0 0 ${8+o}px rgba(10, 30, 60, 0.8),
          0 0 ${15+o}px rgba(5, 15, 35, 0.5),
          inset 0 0 6px rgba(20, 40, 80, 0.4)
        `}for(let e=5;e>0;e--)l.current[e]={...l.current[e-1]};l.current[0]={...i.current},a.current.forEach((e,t)=>{if(e){let r=l.current[t];e.style.transform=`
            translate(${r.x}px, ${r.y}px)
            translate(-50%, -50%)
            scale(${1-t/6*.5})
          `,e.style.opacity=`${.3*(1-t/6)}`}}),t=requestAnimationFrame(r)};return t=requestAnimationFrame(r),()=>cancelAnimationFrame(t)},[e]),(0,t.jsxs)("div",{className:"pointer-events-none fixed inset-0 z-[9999] overflow-hidden",children:[Array.from({length:6}).map((e,r)=>(0,t.jsx)("div",{ref:e=>{e&&(a.current[r]=e)},className:"absolute rounded-full",style:{width:`${10-r}px`,height:`${10-r}px`,background:`radial-gradient(circle, 
              rgba(15, 35, 70, ${.4-.05*r}) 0%, 
              transparent 100%
            )`,filter:"blur(1px)"}},r)),(0,t.jsx)("div",{ref:n,className:"absolute rounded-full",style:{width:"18px",height:"18px",background:`radial-gradient(circle at 30% 30%, 
            rgba(30, 50, 90, 0.6) 0%,
            rgba(15, 30, 60, 0.8) 40%,
            rgba(8, 18, 40, 0.9) 100%
          )`,border:"1px solid rgba(30, 50, 90, 0.4)"}})]})}function A({progress:e}){return(0,t.jsxs)("div",{className:"fixed bottom-0 left-0 right-0 z-50 h-1 bg-[#0a1520]/50 backdrop-blur-sm",children:[(0,t.jsx)("div",{className:"h-full bg-gradient-to-r from-[#0a2040] via-[#0a3050] to-[#0a2040] transition-all duration-150 ease-out",style:{width:`${100*e}%`,boxShadow:"0 0 10px rgba(10, 48, 80, 0.5), 0 0 20px rgba(10, 32, 64, 0.3)"}}),(0,t.jsx)("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0a4060] transition-all duration-150",style:{left:`${100*e}%`,transform:"translateX(-50%) translateY(-50%)",boxShadow:"0 0 8px rgba(10, 64, 96, 0.8), 0 0 16px rgba(10, 48, 80, 0.5)",opacity:+(e>.01)}})]})}function P({children:e,className:o="",direction:n="bottom",delay:a=0,threshold:i=.2,swimIntensity:s=1}){let l=(0,r.useRef)(null),[u,c]=(0,r.useState)(!1),[m,d]=(0,r.useState)({x:0,y:0,rotate:0});(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&setTimeout(()=>c(!0),a)},{threshold:i,rootMargin:"0px 0px -50px 0px"});return l.current&&e.observe(l.current),()=>e.disconnect()},[a,i]),(0,r.useEffect)(()=>{let e;if(!u)return;let t=performance.now(),r=Math.random()*Math.PI*2,o=()=>{let n=(performance.now()-t)/1e3;d({x:3*Math.sin(.5*n+r)*s,y:2*Math.cos(.3*n+r)*s,rotate:.3*Math.sin(.2*n+r)*s}),e=requestAnimationFrame(o)};return e=requestAnimationFrame(o),()=>cancelAnimationFrame(e)},[u,s]);let f=u?`translate(${m.x}px, ${m.y}px) rotate(${m.rotate}deg)`:(()=>{switch(n){case"left":return"translate(-60px, 0)";case"right":return"translate(60px, 0)";case"bottom":return"translate(0, 50px)";default:return"translate(0, 20px)"}})();return(0,t.jsx)("div",{ref:l,className:`transition-all ease-out ${u?"duration-100":"duration-1000"} ${o}`,style:{opacity:+!!u,transform:f},children:e})}function S({children:e,className:o="",staggerDelay:n=100,direction:a="bottom",swimIntensity:i=.5}){let s=(0,r.useRef)(null),[l,u]=(0,r.useState)(!1),[c,m]=(0,r.useState)([]),d=r.default.Children.count(e);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&u(!0)},{threshold:.1});return s.current&&e.observe(s.current),()=>e.disconnect()},[]),(0,r.useEffect)(()=>{let e;if(!l)return;let t=performance.now(),r=Array.from({length:d},()=>Math.random()*Math.PI*2),o=()=>{let n=(performance.now()-t)/1e3;m(r.map((e,t)=>({x:2*Math.sin(.4*n+e)*i,y:1.5*Math.cos(.25*n+e)*i,rotate:.2*Math.sin(.15*n+e)*i}))),e=requestAnimationFrame(o)};return e=requestAnimationFrame(o),()=>cancelAnimationFrame(e)},[l,d,i]),(0,t.jsx)("div",{ref:s,className:o,children:r.default.Children.map(e,(e,r)=>{let o=c[r]||{x:0,y:0,rotate:0},i=l?`translate(${o.x}px, ${o.y}px) rotate(${o.rotate}deg)`:(()=>{switch(a){case"left":return"translate(-40px, 0)";case"right":return"translate(40px, 0)";case"bottom":return"translate(0, 30px)";default:return"translate(0, 15px)"}})();return(0,t.jsx)("div",{className:`transition-all ease-out ${l?"duration-100":"duration-700"}`,style:{opacity:+!!l,transform:i,transitionDelay:l&&0===c.length?`${r*n}ms`:"0ms"},children:e})})})}function z({children:e,className:o="",intensity:n=1,speed:a=1}){let[i,s]=(0,r.useState)({x:0,y:0,rotate:0}),l=(0,r.useRef)(Math.random()*Math.PI*2);return(0,r.useEffect)(()=>{let e,t=performance.now(),r=()=>{let o=(performance.now()-t)/1e3*a;s({x:4*Math.sin(.5*o+l.current)*n,y:3*Math.cos(.3*o+l.current)*n,rotate:.5*Math.sin(.2*o+l.current)*n}),e=requestAnimationFrame(r)};return e=requestAnimationFrame(r),()=>cancelAnimationFrame(e)},[n,a]),(0,t.jsx)("div",{className:o,style:{transform:`translate(${i.x}px, ${i.y}px) rotate(${i.rotate}deg)`,transition:"transform 0.1s ease-out"},children:e})}function C({children:e,intensity:r=1,enableCursor:o=!0}){return(0,t.jsx)(M,{intensity:r,enableCursor:o,children:e})}e.s(["CosmicContext",()=>s,"CosmicWebProvider",()=>C,"ScrollSection",()=>P,"StaggeredChildren",()=>S,"SwimmingDiv",()=>z,"default",()=>M,"useCosmicContext",0,l])},63304,e=>{e.v(t=>Promise.all(["static/chunks/1aab82fbfa188df3.js","static/chunks/5517c88804ad3693.js"].map(t=>e.l(t))).then(()=>t(43205)))},4771,e=>{e.v(t=>Promise.all(["static/chunks/1aab82fbfa188df3.js","static/chunks/2ec16e72e280fbd2.js"].map(t=>e.l(t))).then(()=>t(36112)))},90821,e=>{e.v(t=>Promise.all(["static/chunks/7390d8627a9c3935.js"].map(t=>e.l(t))).then(()=>t(20587)))}]);