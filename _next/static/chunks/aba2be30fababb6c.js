(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5960,e=>{"use strict";var r=e.i(43476),t=e.i(71645),o=e.i(75056),i=e.i(49774),n=e.i(73949),a=e.i(90072);let s=`
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`,l=`
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uIntensity;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
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
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
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
  
  float caustic(vec2 uv, float time) {
    float c = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      vec2 p = uv * 3.0 * (1.0 + fi * 0.5);
      float t = time * (0.3 + fi * 0.1);
      c += snoise(vec3(p + vec2(t, t * 0.7), t * 0.5)) * (1.0 / (1.0 + fi));
    }
    return pow(abs(c * 0.5 + 0.5), 2.0);
  }
  
  void main() {
    float c = caustic(vUv, uTime);
    vec3 color = mix(uColor1, uColor2, c);
    float alpha = c * uIntensity;
    float depth = smoothstep(-10.0, 10.0, vWorldPosition.z);
    alpha *= mix(0.3, 1.0, depth);
    gl_FragColor = vec4(color, alpha);
  }
`,c=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,u=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uDensity;
  
  varying vec2 vUv;
  
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); a *= 0.5; p *= 2.0; }
    return v;
  }
  
  void main() {
    float t = uTime * 0.3;
    float fog = (fbm(vUv * 2.0 + vec2(t * 0.1, t * 0.05)) +
                 fbm(vUv * 3.0 - vec2(t * 0.08, t * 0.12)) +
                 fbm(vUv * 1.5 + vec2(t * 0.05, -t * 0.03))) / 3.0;
    fog *= smoothstep(0.0, 1.0, vUv.y);
    gl_FragColor = vec4(uColor, fog * uDensity);
  }
`,v=`
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  
  void main() {
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);
    float ripple = sin(vUv.x * 20.0 + uTime) * sin(vUv.y * 20.0 + uTime * 0.7) * 0.02;
    gl_FragColor = vec4(uColor + fresnel * 0.3, fresnel * 0.4 + ripple + 0.1);
  }
`,m=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;function d({count:e,bounds:o,speed:n,size:s,color:l,opacity:c}){let u=(0,t.useRef)(null),v=(0,t.useMemo)(()=>new a.Object3D,[]),m=(0,t.useMemo)(()=>{let r=[],t=[],i=[],s=[];for(let l=0;l<e;l++)r.push(new a.Vector3((Math.random()-.5)*o.x,(Math.random()-.5)*o.y,(Math.random()-.5)*o.z)),t.push(new a.Vector3((Math.random()-.5)*n*.1,Math.random()*n*.5+.2*n,(Math.random()-.5)*n*.1)),i.push(Math.random()*Math.PI*2),s.push(.5+.5*Math.random());return{positions:r,velocities:t,phases:i,scales:s}},[e,o,n]);return(0,i.useFrame)(r=>{if(!u.current)return;let t=r.clock.elapsedTime;for(let r=0;r<e;r++){let e=m.positions[r],i=m.velocities[r],n=m.phases[r],a=m.scales[r];e.x+=i.x+.002*Math.sin(.5*t+n),e.y+=.01*i.y,e.z+=i.z+.002*Math.cos(.3*t+n),e.y>o.y/2&&(e.y=-o.y/2),e.x>o.x/2&&(e.x=-o.x/2),e.x<-o.x/2&&(e.x=o.x/2),e.z>o.z/2&&(e.z=-o.z/2),e.z<-o.z/2&&(e.z=o.z/2),v.position.copy(e),v.scale.setScalar(s*a*(1+.2*Math.sin(2*t+n))),v.updateMatrix(),u.current.setMatrixAt(r,v.matrix)}u.current.instanceMatrix.needsUpdate=!0}),(0,r.jsxs)("instancedMesh",{ref:u,args:[void 0,void 0,e],children:[(0,r.jsx)("sphereGeometry",{args:[.02,6,6]}),(0,r.jsx)("meshBasicMaterial",{color:l,transparent:!0,opacity:c,blending:a.AdditiveBlending})]})}function p({count:e=100,quality:t="high"}){let o="low"===t?Math.floor(e/3):"medium"===t?Math.floor(e/1.5):e;return(0,r.jsx)(d,{count:o,bounds:new a.Vector3(30,20,30),speed:.3,size:1,color:"#7DD3FC",opacity:.6})}function x({count:e=30,quality:t="high"}){let o="low"===t?Math.floor(e/2):e;return(0,r.jsx)(d,{count:o,bounds:new a.Vector3(40,25,40),speed:.15,size:2,color:"#0EA5E9",opacity:.3})}function h({quality:e="high"}){let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>new a.ShaderMaterial({transparent:!0,blending:a.AdditiveBlending,side:a.DoubleSide,depthWrite:!1,uniforms:{uTime:{value:0},uColor1:{value:new a.Color("#0369A1")},uColor2:{value:new a.Color("#22D3EE")},uIntensity:{value:"low"===e?.15:.25}},vertexShader:s,fragmentShader:l}),[e]);return(0,i.useFrame)(e=>{o.current&&(o.current.uniforms.uTime.value=e.clock.elapsedTime)}),(0,r.jsx)("mesh",{position:[0,5,-8],rotation:[-Math.PI/4,0,0],material:n,ref:e=>{e&&(o.current=e.material)},children:(0,r.jsx)("planeGeometry",{args:[60,60,1,1]})})}function f({quality:e="high"}){let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>new a.ShaderMaterial({transparent:!0,blending:a.NormalBlending,side:a.DoubleSide,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new a.Color("#0c4a6e")},uDensity:{value:"low"===e?.1:.15}},vertexShader:c,fragmentShader:u}),[e]);return(0,i.useFrame)(e=>{o.current&&(o.current.uniforms.uTime.value=e.clock.elapsedTime)}),(0,r.jsxs)("group",{children:[(0,r.jsx)("mesh",{position:[0,0,-5],material:n,ref:e=>{e&&(o.current=e.material)},children:(0,r.jsx)("planeGeometry",{args:[50,30,1,1]})}),(0,r.jsx)("mesh",{position:[0,-2,-10],material:n.clone(),children:(0,r.jsx)("planeGeometry",{args:[60,35,1,1]})})]})}function y({quality:e="high"}){let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>new a.ShaderMaterial({transparent:!0,blending:a.AdditiveBlending,side:a.DoubleSide,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new a.Color("#0EA5E9")}},vertexShader:m,fragmentShader:v}),[]);(0,i.useFrame)(e=>{o.current&&(o.current.material.uniforms.uTime.value=e.clock.elapsedTime,o.current.position.y=.2*Math.sin(.3*e.clock.elapsedTime),o.current.rotation.x=.05*Math.sin(.2*e.clock.elapsedTime)-.3)});let s="low"===e?16:"medium"===e?32:64;return(0,r.jsx)("mesh",{ref:o,position:[0,3,2],rotation:[-.3,0,0],material:n,children:(0,r.jsx)("planeGeometry",{args:[20,10,s,s]})})}function g({scrollProgress:e=0}){let o=(0,t.useRef)(null),n=(0,t.useRef)(null),a=(0,t.useRef)(null);return(0,i.useFrame)(r=>{let t=r.clock.elapsedTime;o.current&&(o.current.position.z=2+3*e,o.current.position.y=.3*Math.sin(.4*t)),n.current&&(n.current.position.z=-3+1.5*e,n.current.position.y=.2*Math.sin(.3*t)),a.current&&(a.current.position.z=-10+.5*e,a.current.position.y=.1*Math.sin(.2*t))}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("group",{ref:o,children:[(0,r.jsxs)("mesh",{position:[-6,-2,0],children:[(0,r.jsx)("torusGeometry",{args:[.8,.05,8,32]}),(0,r.jsx)("meshBasicMaterial",{color:"#22D3EE",transparent:!0,opacity:.2})]}),(0,r.jsxs)("mesh",{position:[7,1,0],children:[(0,r.jsx)("torusGeometry",{args:[.5,.03,8,32]}),(0,r.jsx)("meshBasicMaterial",{color:"#7DD3FC",transparent:!0,opacity:.15})]})]}),(0,r.jsxs)("group",{ref:n,children:[(0,r.jsxs)("mesh",{position:[-4,0,0],children:[(0,r.jsx)("torusGeometry",{args:[1.5,.02,8,48]}),(0,r.jsx)("meshBasicMaterial",{color:"#0EA5E9",transparent:!0,opacity:.1})]}),(0,r.jsxs)("mesh",{position:[5,-1,0],children:[(0,r.jsx)("torusGeometry",{args:[1.2,.02,8,48]}),(0,r.jsx)("meshBasicMaterial",{color:"#0369A1",transparent:!0,opacity:.08})]})]}),(0,r.jsx)("group",{ref:a,children:(0,r.jsxs)("mesh",{position:[0,0,0],children:[(0,r.jsx)("torusGeometry",{args:[3,.01,8,64]}),(0,r.jsx)("meshBasicMaterial",{color:"#0c4a6e",transparent:!0,opacity:.05})]})})]})}function w({quality:e="high"}){let o=(0,t.useRef)(null),n="low"===e?3:"medium"===e?5:7,s=(0,t.useMemo)(()=>Array.from({length:n},(e,r)=>({x:(r-n/2)*4+(Math.random()-.5)*2,rotation:(Math.random()-.5)*.3,width:.3+.4*Math.random(),opacity:.02+.02*Math.random(),speed:.5+.5*Math.random(),phase:Math.random()*Math.PI*2})),[n]);return(0,i.useFrame)(e=>{o.current&&o.current.children.forEach((r,t)=>{let o=s[t];o&&r instanceof a.Mesh&&(r.rotation.z=o.rotation+.05*Math.sin(e.clock.elapsedTime*o.speed+o.phase),r.material.opacity=o.opacity*(.8+.2*Math.sin(.5*e.clock.elapsedTime+o.phase)))})}),(0,r.jsx)("group",{ref:o,position:[0,10,-5],rotation:[.2,0,0],children:s.map((e,t)=>(0,r.jsxs)("mesh",{position:[e.x,0,0],rotation:[0,0,e.rotation],children:[(0,r.jsx)("planeGeometry",{args:[e.width,25]}),(0,r.jsx)("meshBasicMaterial",{color:"#22D3EE",transparent:!0,opacity:e.opacity,blending:a.AdditiveBlending,side:a.DoubleSide,depthWrite:!1})]},t))})}function M(){let e=(0,t.useRef)(null),o=(0,t.useMemo)(()=>new a.ShaderMaterial({uniforms:{uTime:{value:0},uColorTop:{value:new a.Color("#0369A1")},uColorMid:{value:new a.Color("#0c4a6e")},uColorBottom:{value:new a.Color("#082f49")}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime;
      uniform vec3 uColorTop, uColorMid, uColorBottom;
      varying vec2 vUv;
      void main() {
        float wave = sin(vUv.x * 3.0 + uTime * 0.1) * 0.02;
        float y = vUv.y + wave;
        vec3 color = y > 0.5 ? mix(uColorMid, uColorTop, (y - 0.5) * 2.0) : mix(uColorBottom, uColorMid, y * 2.0);
        gl_FragColor = vec4(color, 1.0);
      }
    `}),[]);return(0,i.useFrame)(r=>{e.current&&(e.current.uniforms.uTime.value=r.clock.elapsedTime)}),(0,r.jsx)("mesh",{position:[0,0,-20],material:o,ref:r=>{r&&(e.current=r.material)},children:(0,r.jsx)("planeGeometry",{args:[100,60]})})}function j({scrollProgress:e=0}){let{camera:r}=(0,n.useThree)(),o=(0,t.useRef)(10),s=(0,t.useRef)(new a.Vector3(0,0,10));return(0,i.useFrame)(t=>{let i=t.clock.elapsedTime,n=o.current-.05*i%1*2-5*e,a=.3*Math.sin(.15*i),l=.2*Math.cos(.1*i);s.current.set(a,l,n),r.position.lerp(s.current,.02),r.rotation.x=.02*Math.sin(.08*i),r.rotation.y=.01*Math.sin(.05*i),r.rotation.z=.005*Math.sin(.03*i)}),null}function z({enabled:e=!0}){let o=(0,t.useRef)(null),s=(0,t.useRef)(null),l=(0,t.useRef)(new a.Vector3),c=(0,t.useRef)(new a.Vector3),u=(0,t.useRef)(new a.Vector3),{viewport:v}=(0,n.useThree)(),m=(0,t.useMemo)(()=>new Float32Array(60),[]),d=(0,t.useRef)(Array.from({length:20},()=>new a.Vector3));return((0,t.useEffect)(()=>{if(!e)return;let r=e=>{let r=e.clientX/window.innerWidth*2-1,t=-(2*(e.clientY/window.innerHeight))+1;l.current.set(r*v.width/2,t*v.height/2,5)};return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[e,v]),(0,i.useFrame)(r=>{if(!o.current||!e)return;u.current.x+=(l.current.x-c.current.x)*.08,u.current.y+=(l.current.y-c.current.y)*.08,u.current.multiplyScalar(.85),c.current.add(u.current),o.current.position.copy(c.current);let t=1+2*u.current.length();if(o.current.scale.lerp(new a.Vector3(t,t,t),.1),d.current.unshift(c.current.clone()),d.current.pop(),s.current){for(let e=0;e<20;e++){let r=d.current[e];m[3*e]=r.x,m[3*e+1]=r.y,m[3*e+2]=r.z-.1*e}s.current.geometry.attributes.position.needsUpdate=!0}o.current.material.opacity=.3+.1*Math.sin(3*r.clock.elapsedTime)}),e)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("mesh",{ref:o,position:[0,0,5],children:[(0,r.jsx)("sphereGeometry",{args:[.15,16,16]}),(0,r.jsx)("meshBasicMaterial",{color:"#22D3EE",transparent:!0,opacity:.4,blending:a.AdditiveBlending})]}),(0,r.jsxs)("mesh",{position:c.current,children:[(0,r.jsx)("ringGeometry",{args:[.2,.25,32]}),(0,r.jsx)("meshBasicMaterial",{color:"#7DD3FC",transparent:!0,opacity:.2,blending:a.AdditiveBlending,side:a.DoubleSide})]}),(0,r.jsxs)("points",{ref:s,children:[(0,r.jsx)("bufferGeometry",{children:(0,r.jsx)("bufferAttribute",{attach:"attributes-position",args:[m,3]})}),(0,r.jsx)("pointsMaterial",{size:.05,color:"#22D3EE",transparent:!0,opacity:.3,blending:a.AdditiveBlending,sizeAttenuation:!0})]})]}):null}function b({quality:e="high"}){let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>new a.ShaderMaterial({transparent:!0,blending:a.AdditiveBlending,depthWrite:!1,uniforms:{uTime:{value:0},uIntensity:{value:"low"===e?.1:"medium"===e?.15:.2}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime;
      uniform float uIntensity;
      varying vec2 vUv;
      void main() {
        vec2 center = vec2(0.5);
        float dist = distance(vUv, center);
        float vignette = 1.0 - smoothstep(0.3, 0.8, dist);
        float pulse = 0.5 + 0.5 * sin(uTime * 0.5);
        float alpha = vignette * uIntensity * pulse * 0.3;
        gl_FragColor = vec4(0.13, 0.83, 0.93, alpha);
      }
    `}),[e]);return((0,i.useFrame)(e=>{o.current&&(o.current.material.uniforms.uTime.value=e.clock.elapsedTime)}),"low"===e)?null:(0,r.jsxs)("mesh",{ref:o,position:[0,0,8],children:[(0,r.jsx)("planeGeometry",{args:[30,20]}),(0,r.jsx)("primitive",{object:n,attach:"material"})]})}function C({scrollProgress:e=0,enableCursor:t=!0,quality:o="high"}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(h,{quality:o}),(0,r.jsx)(w,{quality:o}),"low"!==o&&(0,r.jsx)(f,{quality:o}),(0,r.jsx)(p,{count:150,quality:o}),(0,r.jsx)(x,{count:40,quality:o}),(0,r.jsx)(g,{scrollProgress:e}),"low"!==o&&(0,r.jsx)(y,{quality:o}),(0,r.jsx)(z,{enabled:t}),(0,r.jsx)(j,{scrollProgress:e}),(0,r.jsx)(b,{quality:o}),(0,r.jsx)("ambientLight",{intensity:.2,color:"#0369A1"}),(0,r.jsx)("directionalLight",{position:[5,10,5],intensity:.3,color:"#22D3EE"}),(0,r.jsx)("pointLight",{position:[-5,5,3],intensity:.2,color:"#7DD3FC",distance:20})]})}function T({scrollProgress:e=0,enableCursor:i=!0,quality:n,className:a=""}){let s=function(){let[e,r]=(0,t.useState)("high");return(0,t.useEffect)(()=>{let t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),o=document.createElement("canvas"),i=o.getContext("webgl")||o.getContext("experimental-webgl");if(i){let e=i.getExtension("WEBGL_debug_renderer_info");if(e){let o=i.getParameter(e.UNMASKED_RENDERER_WEBGL),n=/Intel|Mali|Adreno 3|Adreno 4|PowerVR/i.test(o);(t||n)&&r(t?"low":"medium")}}let n=0,a=performance.now(),s=()=>{n++;let t=performance.now();if(t-a>=1e3){let o=n;n=0,a=t,o<30&&"low"!==e&&r(e=>"high"===e?"medium":"low")}requestAnimationFrame(s)},l=requestAnimationFrame(s);return()=>cancelAnimationFrame(l)},[e]),e}(),l=n||s,[c,u]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{u(!0)},[]),c)?(0,r.jsx)("div",{className:`w-full h-full ${a}`,children:(0,r.jsx)(o.Canvas,{camera:{position:[0,0,10],fov:60,near:.1,far:100},dpr:"low"===l?1:"medium"===l?[1,1.5]:[1,2],gl:{antialias:"low"!==l,alpha:!0,powerPreference:"low"===l?"low-power":"high-performance",stencil:!1,depth:!0},performance:{min:.5},children:(0,r.jsx)(C,{scrollProgress:e,enableCursor:i,quality:l})})}):(0,r.jsx)("div",{className:`w-full h-full bg-gradient-to-b from-sky-900 via-cyan-950 to-slate-950 ${a}`})}function E({className:e="",enableCursor:o=!0}){let[i,n]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;n(Math.min(1,Math.max(0,e>0?window.scrollY/e:0)))};return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsx)(T,{scrollProgress:i,enableCursor:o,className:e})}function P(){return(0,r.jsx)("div",{className:"fixed inset-0 -z-10",children:(0,r.jsx)(E,{enableCursor:!1})})}e.s(["UnderwaterBackground",()=>P,"UnderwaterEnvironmentWithScroll",()=>E,"default",()=>T])}]);