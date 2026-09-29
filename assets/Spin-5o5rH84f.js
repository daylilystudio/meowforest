import{F as e,Tt as t,W as n,_ as r,d as i,l as a,p as o,tt as s,u as c,v as l}from"./runtime-core.esm-bundler-BljLEjaH.js";import{t as u}from"./runtime-dom.esm-bundler-DoipN7SO.js";import{C as d,Et as f,F as p,M as m,R as h,S as g,T as _,Tt as v,U as y,jt as b,kt as x,o as S}from"./FadeInExpandTransition-CrPcGR7N.js";import{o as C,s as w}from"./Button-C5EPWtN6.js";import{t as T}from"./use-compitable-BrttNGhj.js";function E(e){let{opacityDisabled:t,heightTiny:n,heightSmall:r,heightMedium:i,heightLarge:a,heightHuge:o,primaryColor:s,fontSize:c}=e;return{fontSize:c,textColor:s,sizeTiny:n,sizeSmall:r,sizeMedium:i,sizeLarge:a,sizeHuge:o,color:s,opacitySpinning:t}}var D={name:`Spin`,common:_,self:E},O=v([v(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),f(`spin-container`,`
 position: relative;
 `,[f(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[S()])]),f(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),f(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[x(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),f(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),f(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[x(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),k={small:20,medium:18,large:16},A={...g.props,contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number,...w,strokeWidth:Number},j=l({name:`Spin`,props:A,slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:r}=y(e),i=g(`Spin`,`-spin`,O,D,e,t),o=a(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value,{opacitySpinning:a,color:o,textColor:s}=r;return{"--n-bezier":n,"--n-opacity-spinning":a,"--n-size":typeof t==`number`?m(t):r[b(`size`,t)],"--n-color":o,"--n-text-color":s}}),c=r?d(`spin`,a(()=>{let{size:t}=e;return typeof t==`number`?String(t):t[0]}),o,e):void 0,l=T(e,[`spinning`,`show`]),u=s(!1);return n(t=>{let n;if(l.value){let{delay:r}=e;if(r){n=window.setTimeout(()=>{u.value=!0},r),t(()=>{clearTimeout(n)});return}}u.value=l.value}),{mergedClsPrefix:t,active:u,mergedStrokeWidth:a(()=>{let{strokeWidth:t}=e;if(t!==void 0)return t;let{size:n}=e;return k[typeof n==`number`?`medium`:n]}),cssVars:r?void 0:o,themeClass:c?.themeClass,onRender:c?.onRender}},render(){let{$slots:n,mergedClsPrefix:a,description:s}=this,l=n.icon&&this.rotate,d=(s||n.description)&&(e(),o(`div`,{class:p(`${a}-spin-description`)},[h(()=>s||n.description?.())],2)),f=n.icon?(e(),o(`div`,{key:1,class:p([`${a}-spin-body`,this.themeClass])},[c(`div`,{class:p([`${a}-spin`,l&&`${a}-spin--rotate`]),style:t(n.default?``:this.cssVars)},[h(()=>n.icon())],6),h(()=>d)],2)):(e(),o(`div`,{key:2,class:p([`${a}-spin-body`,this.themeClass])},[(e(),i(C,{clsPrefix:a,style:t(n.default?``:this.cssVars),stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:p(`${a}-spin`)},null,8,[`clsPrefix`,`style`,`stroke`,`stroke-width`,`radius`,`scale`,`class`])),h(()=>d)],2));return this.onRender?.(),n.default?(e(),o(`div`,{key:3,class:p([`${a}-spin-container`,this.themeClass]),style:t(this.cssVars)},[c(`div`,{class:p([`${a}-spin-content`,this.active&&`${a}-spin-content--spinning`,this.contentClass]),style:t(this.contentStyle)},[h(()=>n.default?.())],6),r(u,{name:`fade-in-transition`},{default:()=>this.active?f:null},1024)],6)):f}});export{j as t};