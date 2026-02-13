(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67499,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},53849,(e,t,i)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:r,objectFit:o}){let n=i?40*i:e,s=a?40*a:t,l=n&&s?`viewBox='0 0 ${n} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},26324,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},22407,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(67499);let a=e.r(34619),r=e.r(53849),o=e.r(26324),n=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:u=!1,loading:c,className:h,quality:m,width:p,height:f,fill:g=!1,style:y,overrideSrc:b,onLoad:w,onLoadingComplete:x,placeholder:v="empty",blurDataURL:_,fetchPriority:j,decoding:$="async",layout:S,objectFit:O,objectPosition:P,lazyBoundary:C,lazyRoot:z,...k},M){var E;let N,I,R,{imgConf:T,showAltText:q,blurComplete:A,defaultLoader:V}=M,D=T||o.imageConfigDefault;if("allSizes"in D)N=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),i=D.qualities?.sort((e,t)=>e-t);N={...D,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===V)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=k.loader||V;delete k.loader,delete k.srcSet;let F="__next_img_default"in B;if(F){if("custom"===N.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:i,...a}=t;return e(a)}}if(S){"fill"===S&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(y={...y,...e});let i={responsive:"100vw",fill:"100vw"}[S];i&&!t&&(t=i)}let L="",W=l(p),U=l(f);if((E=e)&&"object"==typeof E&&(s(E)||void 0!==E.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=t.blurWidth,R=t.blurHeight,_=_||t.blurDataURL,L=t.src,!g)if(W||U){if(W&&!U){let e=W/t.width;U=Math.round(t.height*e)}else if(!W&&U){let e=U/t.height;W=Math.round(t.width*e)}}else W=t.width,U=t.height}let G=!d&&!u&&("lazy"===c||void 0===c);(!(e="string"==typeof e?e:L)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,G=!1),N.unoptimized&&(i=!0),F&&!N.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=l(m),H=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},q?{}:{color:"transparent"},y),K=A||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:W,heightInt:U,blurWidth:I,blurHeight:R,blurDataURL:_||"",objectFit:H.objectFit})}")`:`url("${v}")`,Y=n.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,J=K?{backgroundSize:Y,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Q=function({config:e,src:t,unoptimized:i,width:r,quality:o,sizes:n,loader:s}){if(i){let e=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let i=t.includes("?")?"&":"?";t=`${t}${i}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},i,a){if(a){let i=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=i.exec(a);)r.push(parseInt(e[2]));if(r.length){let i=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,n),u=l.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:l.map((i,a)=>`${s({config:e,src:t,quality:o,width:i})} ${"w"===d?i:a+1}${d}`).join(", "),src:s({config:e,src:t,quality:o,width:l[u]})}}({config:N,src:e,unoptimized:i,width:W,quality:X,sizes:t,loader:B}),Z=G?"lazy":c;return{props:{...k,loading:Z,fetchPriority:j,width:W,height:U,decoding:$,className:h,style:{...H,...J},sizes:Q.sizes,srcSet:Q.srcSet,src:b||Q.src},meta:{unoptimized:i,preload:u||d,placeholder:v,fill:g}}}},66190,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let a=e.r(89697),r="u"<typeof window,o=r?()=>{}:a.useLayoutEffect,n=r?()=>{}:a.useEffect;function s(e){let{headManager:t,reduceComponentsToState:i}=e;function s(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return r&&(t?.mountedInstances?.add(e.children),s()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},38067,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={default:function(){return f},defaultHead:function(){return c}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let o=e.r(45815),n=e.r(2287),s=e.r(1408),l=n._(e.r(89697)),d=o._(e.r(66190)),u=e.r(38859);function c(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(67499);let m=["name","httpEquiv","charSet","itemProp"];function p(e){let t,i,a,r;return e.reduce(h,[]).reverse().concat(c().reverse()).filter((t=new Set,i=new Set,a=new Set,r={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=m.length;t<i;t++){let i=m[t];if(e.props.hasOwnProperty(i))if("charSet"===i)a.has(i)?o=!1:a.add(i);else{let t=e.props[i],a=r[i]||new Set;("name"!==i||!n)&&a.has(t)?o=!1:(a.add(t),r[i]=a)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let f=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:p,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},1753,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let a=e.r(45815)._(e.r(89697)),r=e.r(26324),o=a.default.createContext(r.imageConfigDefault)},95739,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(45815)._(e.r(89697)).default.createContext(null)},19352,(e,t,i)=>{"use strict";function a(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return a}})},68237,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let a=e.r(19352),r=e.r(34619);function o({config:e,src:t,width:i,quality:o}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let n=(0,a.findClosestQuality)(o,e),s=(0,r.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${n}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}o.__next_img_default=!0;let n=o},15661,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return x}});let a=e.r(45815),r=e.r(2287),o=e.r(1408),n=r._(e.r(89697)),s=a._(e.r(93272)),l=a._(e.r(38067)),d=e.r(22407),u=e.r(26324),c=e.r(1753);e.r(67499);let h=e.r(95739),m=a._(e.r(68237)),p=e.r(29558),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,a,r,o,n){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function y(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,n.forwardRef)(({src:e,srcSet:t,sizes:i,height:a,width:r,decoding:s,className:l,style:d,fetchPriority:u,placeholder:c,loading:h,unoptimized:m,fill:f,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:v,sizesInput:_,onLoad:j,onError:$,...S},O)=>{let P=(0,n.useCallback)(e=>{e&&($&&(e.src=e.src),e.complete&&g(e,c,b,w,x,m,_))},[e,c,b,w,x,$,m,_]),C=(0,p.useMergedRef)(O,P);return(0,o.jsx)("img",{...S,...y(u),loading:h,width:r,height:a,decoding:s,"data-nimg":f?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:C,onLoad:e=>{g(e.currentTarget,c,b,w,x,m,_)},onError:e=>{v(!0),"empty"!==c&&x(!0),$&&$(e)}})});function w({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(h.RouterContext),a=(0,n.useContext)(c.ImageConfigContext),r=(0,n.useMemo)(()=>{let e=f||a||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:r,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:s,onLoadingComplete:l}=e,p=(0,n.useRef)(s);(0,n.useEffect)(()=>{p.current=s},[s]);let g=(0,n.useRef)(l);(0,n.useEffect)(()=>{g.current=l},[l]);let[y,x]=(0,n.useState)(!1),[v,_]=(0,n.useState)(!1),{props:j,meta:$}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:r,blurComplete:y,showAltText:v});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...j,unoptimized:$.unoptimized,placeholder:$.placeholder,fill:$.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:x,setShowAltText:_,sizesInput:e.sizes,ref:t}),$.preload?(0,o.jsx)(w,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},79143,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={default:function(){return u},getImageProps:function(){return d}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let o=e.r(45815),n=e.r(22407),s=e.r(15661),l=o._(e.r(68237));function d(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let u=s.Image},63282,(e,t,i)=>{t.exports=e.r(79143)},14186,89255,e=>{"use strict";var t=e.i(1408),i=e.i(68856),a=e.i(224),r=e.i(53884);let o=(0,e.i(35972).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>o],89255);var n=e.i(40474);function s({post:e,index:s,featured:l=!1}){return l?(0,t.jsxs)(i.motion.article,{className:"group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*s},children:[(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)("div",{className:"inline-block px-3 py-1 rounded-full bg-primary-light border border-border mb-4",children:(0,t.jsx)("span",{className:"text-xs font-medium text-primary",children:e.category})}),(0,t.jsx)("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-xs text-muted-foreground mb-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(a.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(r.Clock,{className:"w-3 h-3"}),e.readTime]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground",children:e},e))}),(0,t.jsxs)(n.default,{href:`/blog/${e.slug}`,className:"mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all",children:["Read More",(0,t.jsx)(o,{className:"w-4 h-4"})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"})]}):(0,t.jsxs)(i.motion.article,{className:"group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*s},children:[(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("div",{className:"inline-block px-2.5 py-0.5 rounded-full bg-primary-light border border-border mb-3",children:(0,t.jsx)("span",{className:"text-xs font-medium text-primary",children:e.category})}),(0,t.jsx)("h3",{className:"text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2",children:e.title}),(0,t.jsx)("p",{className:"text-muted-foreground text-sm mb-3 line-clamp-2",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(a.Calendar,{className:"w-3 h-3"}),e.date]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(r.Clock,{className:"w-3 h-3"}),e.readTime]})]})]}),(0,t.jsx)(n.default,{href:`/blog/${e.slug}`,className:"absolute inset-0","aria-label":`Read ${e.title}`})]})}e.s(["BlogCard",()=>s],14186)},74787,e=>{"use strict";let t=[{slug:"in-depth-svm-visualizations",title:"In-depth SVM with Visualizations",excerpt:"A comprehensive deep dive into Support Vector Machines, from loss functions and primal/dual forms to kernel tricks and SMO optimization, complete with visual explanations.",content:`
# In-depth SVM with visualisations 

## Background

I have been studying traditional classification machines and learning algorithms. It grinded through different kinds of models from linear-family models to complicated methods such as ensemble methods. I understanded quite well until I met Support Vector Machines.

On the surface, I can understand quite well what struck me is its optimization algorithms. Unlike other models, optimization is based on gradients or entropy for trees. However, the way SVM optimizes its weight works quite differently, which I will explain later on.


## Introduction

Ok let look at what is Support Vector Machine and what is does. Imagine there are 2 groups of people wants to divde the land equally by drawing a straight line, SVM will help them equally between them. Now, bring it to the context of machine learning, a SVM will find a hyperplane that seperate 2 classes with maximal margin (equal land). 

Have a lookt at this decision boundary (although it is not linear but we get to that part). it perfectly give the decision boundary right in the midde!!


![alt text](/images/svm-blog/image.png)



Hmmm... seems easy right? 

Well then how it do it? Let's look at the loss function:

### Loss Function

$$
\\begin{aligned}\\min_{w, b} \\; \\frac{1}{2} \\lVert w \\rVert^2 + C \\sum_{i=1}^{n} \\max \\left( 0, \\; 1 - y_i \\left( w^T x_i + b \\right) \\right)\\end{aligned}
$$


The term $\\max \\left( 0, \\; 1 - y_i \\left( w^T x_i + b \\right) \\right)$ seems familar right? Thats right!! It's the perceptron loss! It try to minimse the perceptron loss meaning it try to  correctly classify the samples! What about the first term? Well its the regularization term which means it try to divide the land equally! Finally, the C controls how you would want the classfier to focus on correctly classify or divide the land equally.

### Primal-form 

WARNING: Math-heavy, you can skip this and belive that the loss function has the primal form as the equation below (same thing but different notation)


By transforming the objective function to produce a set constraint, it can be later manipulated into the dual form. The un-constrained objective function can be re-written as:

$$
\\min_{w, b, \\xi} \\; \\frac{1}{2} \\lVert w \\rVert^2 + C \\sum_{i=1}^{n} \\xi_i\\quad \\text{s.t.} \\quad y_i (w^T x_i + b) \\geq 1 - \\xi_i, \\quad \\xi_i \\geq 0
$$

Where $\\xi_i$ and the constraint 
$y_i (w^T x_i + b) \\geq 1 - \\xi_i, \\; \\xi_i \\geq 0$ 
is equivalent to 
$\\max \\left( 0, 1 - y_i (w^T x_i + b) \\right)$. 
By introducing these constraints, the problem can be transformed into its dual form to utilize the kernel trick.

### Dual Form

WARNING: Math-heavy, you can skip this and belive that primal form has the dual form as the equation below (same thing but now the new objective is to optimize alpha, not w!)

Before transforming from primal to dual form, it is crucial to view the weights as the contributions of all the input samples. Suppose the input sample X has the dimension of [n x m] where n is number of samples and m is number of features. The weight ($w$) on the other hand has the dimension of [m x 1] which m is number of features. This means that by letting $w  = X^T\\alpha$, $\\alpha$ need to have the dimension of [n x 1]. This implies that $\\alpha$ is a set of weights each sample give to contribute to w. The view of the weight is a contribution of the samples also seen from other model such as linear regression as it has the close-form solution of $w=(X^TX)^{-1}X^Ty$ for the weight. Back to SVM, the weight became a weighted sum of all data sample which instead of optimizing the weight, the new goal is to optimize $\\alpha_i \\forall i$ Interestingly,there is a characteristic that every correctly classified sample and outside margin will have a weight of 0 which means that during inference, only support vector matters.

By substituting $w = \\sum_{i=1}^m \\alpha_i y_i x_i$ into the Lagrangian of the constrained soft-margin primal problem and taking derivatives with respect to $w$, $b$, and $\\xi$, we obtain the dual formulation: 

$$
\\max_{\\alpha} \\; \\sum_{i=1}^{m} \\alpha_i - \\frac{1}{2} \\sum_{i=1}^{m} \\sum_{j=1}^{m} \\alpha_i \\alpha_j y_i y_j \\, x_i^T x_j\\quad \\text{s.t.} \\quad     0 \\leq \\alpha_i \\leq C, \\; \\sum_{i=1}^{m} \\alpha_i y_i = 0
$$

### Kernel trick

If you made this far, it is fasinating because the rest is packed with visualisations!!!

Now here comes the cool part, now lets make it learn non-linear relationships. Imagine folding your in quarter and cut a line in the middle making a square in the middle, SVM also the same way, it non-linearly maps to anothe dimensional space where you hope for the best the data is linearly seperable and when it maps back to the original space, it will be a non-linear boundary like a curve or a zic-zac pattern. Starting by shooting your sample to the space called phi
$$
x_i \\mapsto \\phi(x_i)
$$

Then the dual form becomes:

$$
\\begin{aligned}\\max_{\\alpha} \\quad
& \\sum_{i=1}^{m} \\alpha_i
- \\frac{1}{2}
\\sum_{i=1}^{m} \\sum_{j=1}^{m}
\\alpha_i \\alpha_j y_i y_j \\, 
\\phi(x_i)^{T} \\phi(x_j) \\\\[6pt]
\\text{s.t.} \\quad
& 0 \\le \\alpha_i \\le C, \\quad \\forall i = 1, \\ldots, m, \\\\[4pt]
& \\sum_{i=1}^{m} \\alpha_i y_i = 0
\\end{aligned}
$$

But remember, we are optimizing $\\alpha$ ! So the term $\\phi(x_i)^{T} \\phi(x_j)$ does not change the whole time! but recomputing each iteration is very expensive so we precomputed it first then access later! Even better, we dont need to define phi, we create a matrix where:

$$
K_{ij} = K(x_i, x_j) = \\phi(x_i)^{\\top} \\phi(x_j)
$$
What a genius idea!

Here is the visualisation of the polynomial kernel (first few slides):

<iframe src="https://14522561-svm-presentation.netlify.app/" width="100%" height="600px" style="border: none; border-radius: 8px;" allowfullscreen></iframe>


### Optimization - SMO  

OK now comes the parts that they might not teach you in-class. How do SVM optimize? It will use an algorithm called Sequential Minimal Optimization and below is an visual approach to this algorithm.

If you carefully inspect the dual formulation enough long you will see that it has the constraint meaning that if you optimize 1 $\\alpha$ you need to update another. That leads to this visualization

![alt text](/images/svm-blog/image-1.png)


Think of them like a pulley system, you lift one up, you lower one down but you dont want to go to high

You want to optimize the alplas so that if you pick 2 alphas and optimize them, you will need to optimize another (The sum constraint). Also, you dont want to optimize them too far

Now with multiples alpha the pulley system would look like this

![alt text](/images/svm-blog/image-2.png)

The red block are locked in place. Each iteration, you will pick 1 alpha sequentially and another randomly to optimize them.

Now what fascinating is that each iteration you need only 1 step to optimize because they follow a quadratic form.

![alt text](/images/svm-blog/image-3.png)

Because you dont want to respect the 0 to C contraint for both alphas, you will set the lower and higher bound so that yo can stick to the bound if the optimal point is fall out of range!

Repeat the process and TADAAA!!! You made it!

## Final thought

Just remember, SVM is orgimi, you fold the paper and hope for the best :)

Thanks so much for reading and stay in touch with me on linkedin!
    `,date:"2025-02-02",readTime:"15 min read",category:"Machine Learning",tags:["SVM","Support Vector Machines","Optimization","Kernel Methods","Visualizations"],featured:!0}];function i(){return t.filter(e=>e.featured)}e.s(["blogPosts",0,t,"getFeaturedPosts",()=>i])}]);