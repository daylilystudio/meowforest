import{_ as Te}from"./logo.ceca909b.js";import{W as N,C as v,a6 as xe,O as be,aL as _e,aM as se,P as Y,a2 as D,Q as u,S as y,Y as B,r as V,X as oe,E as M,aN as Le,J as I,$ as te,aq as Oe,af as k,aO as F,F as ke,ad as $e,a9 as ee,aP as Ee,aC as re,aQ as Z,V as C,T as m,U as G,aR as Fe,ap as ve,Z as ue,a3 as _,u as Be,a as Me,o as Ke,c as je,d as me,e as he,k as L,w as j,g as T,aS as W,m as Ve,p as De,q as Ue,f as qe}from"./index.71761e43.js";import{a as fe}from"./api.a81b7417.js";import{_ as Ge}from"./_plugin-vue_export-helper.cdc0426e.js";import{t as We,d as Qe,N as Xe,a as Ye,c as Ze}from"./Dropdown.bbe159b9.js";import{u as pe}from"./use-merged-state.23476e1d.js";import{u as Je}from"./use-compitable.8741de49.js";import"./get.ae5b6112.js";const eo=N({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),oo=e=>{const{baseColor:r,textColor2:o,bodyColor:n,cardColor:a,dividerColor:l,actionColor:d,scrollbarColor:s,scrollbarColorHover:c,invertedColor:g}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:d,headerColor:a,headerColorInverted:g,footerColor:d,footerColorInverted:g,headerBorderColor:l,headerBorderColorInverted:g,footerBorderColor:l,footerBorderColorInverted:g,siderBorderColor:l,siderBorderColorInverted:g,siderColor:a,siderColorInverted:g,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:r,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:se(n,s),siderToggleBarColorHover:se(n,c),__invertScrollbar:"true"}},to=xe({name:"Layout",common:be,peers:{Scrollbar:_e},self:oo}),Ie=to;function ro(e,r,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const no=e=>{const{borderRadius:r,textColor3:o,primaryColor:n,textColor2:a,textColor1:l,fontSize:d,dividerColor:s,hoverColor:c,primaryColorHover:g}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:Y(n,{alpha:.1}),itemColorActiveHover:Y(n,{alpha:.1}),itemColorActiveCollapsed:Y(n,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:g,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:g,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},ro("#BBB",n,"#FFF","#AAA"))},io=xe({name:"Menu",common:be,peers:{Tooltip:We,Dropdown:Qe},self:no}),lo=io,ao=D("n-layout-sider"),ze={type:String,default:"static"},co=u("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[u("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),so={embedded:Boolean,position:ze,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},vo=D("n-layout");function uo(e){return N({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},B.props),so),setup(r){const o=V(null),n=V(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=oe(r),d=B("Layout","-layout",co,Ie,r,a);function s(x,z){if(r.nativeScrollbar){const{value:A}=o;A&&(z===void 0?A.scrollTo(x):A.scrollTo(x,z))}else{const{value:A}=n;A&&A.scrollTo(x,z)}}M(vo,r);let c=0,g=0;const P=x=>{var z;const A=x.target;c=A.scrollLeft,g=A.scrollTop,(z=r.onScroll)===null||z===void 0||z.call(r,x)};Le(()=>{if(r.nativeScrollbar){const x=o.value;x&&(x.scrollTop=g,x.scrollLeft=c)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:s},R=I(()=>{const{common:{cubicBezierEaseInOut:x},self:z}=d.value;return{"--n-bezier":x,"--n-color":r.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),H=l?te("layout",I(()=>r.embedded?"e":""),R,r):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:w,mergedTheme:d,handleNativeElScroll:P,cssVars:l?void 0:R,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},h)},render(){var r;const{mergedClsPrefix:o,hasSider:n}=this;(r=this.onRender)===null||r===void 0||r.call(this);const a=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):v(Oe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const J=uo(!1),mo=u("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[y("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),y("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ho={position:ze,inverted:Boolean,bordered:{type:Boolean,default:!1}},fo=N({name:"LayoutHeader",props:Object.assign(Object.assign({},B.props),ho),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=oe(e),n=B("Layout","-layout-header",mo,Ie,e,r),a=I(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=n.value,c={"--n-bezier":d};return e.inverted?(c["--n-color"]=s.headerColorInverted,c["--n-text-color"]=s.textColorInverted,c["--n-border-color"]=s.headerBorderColorInverted):(c["--n-color"]=s.headerColor,c["--n-text-color"]=s.textColor,c["--n-border-color"]=s.headerBorderColor),c}),l=o?te("layout-header",I(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),U=D("n-menu"),ne=D("n-submenu"),ie=D("n-menu-item-group"),Q=8;function le(e){const r=k(U),{props:o,mergedCollapsedRef:n}=r,a=k(ne,null),l=k(ie,null),d=I(()=>o.mode==="horizontal"),s=I(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=I(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),g=I(()=>{var h;return!d.value&&e.root&&n.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),P=I(()=>{if(d.value)return;const{collapsedWidth:h,indent:R,rootIndent:H}=o,{root:x,isGroup:z}=e,A=H===void 0?R:H;if(x)return n.value?h/2-c.value/2:A;if(l)return R/2+l.paddingLeftRef.value;if(a)return(z?R/2:R)+a.paddingLeftRef.value}),w=I(()=>{const{collapsedWidth:h,indent:R,rootIndent:H}=o,{value:x}=c,{root:z}=e;return d.value||!z||!n.value?Q:(H===void 0?R:H)+x+Q-(h+x)/2});return{dropdownPlacement:s,activeIconSize:g,maxIconSize:c,paddingLeft:P,iconMarginRight:w,NMenu:r,NSubmenu:a}}const ae={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ye=Object.assign(Object.assign({},ae),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),po=N({name:"MenuOptionGroup",props:ye,setup(e){M(ne,null);const r=le(e);M(ie,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:n}=k(U);return function(){const{value:a}=o,l=r.paddingLeft.value,{nodeProps:d}=n,s=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},s,{class:[`${a}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),F(e.title),e.extra?v(ke,null," ",F(e.extra)):null),v("div",null,e.tmNodes.map(c=>ce(c,n))))}}}),we=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=k(U);return{menuProps:r,style:I(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:I(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:n,renderExtra:a,expandIcon:l}}=this,d=o?o(r.rawNode):F(this.icon);return v("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(r.rawNode):F(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):F(this.extra)):null),this.showArrow?v($e,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):v(eo,null)}):null)}}),He=Object.assign(Object.assign({},ae),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),go=N({name:"Submenu",props:He,setup(e){const r=le(e),{NMenu:o,NSubmenu:n}=r,{props:a,mergedCollapsedRef:l,mergedThemeRef:d}=o,s=I(()=>{const{disabled:h}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:h}),c=V(!1);M(ne,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s}),M(ie,null);function g(){const{onClick:h}=e;h&&h()}function P(){s.value||(l.value||o.toggleExpand(e.internalKey),g())}function w(h){c.value=h}return{menuProps:a,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:c,paddingLeft:r.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:ee(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>a.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!s.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:w,handleClick:P}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:n}}=this,a=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:g,maxIconSize:P,activeIconSize:w,title:h,childActive:R,icon:H,handleClick:x,menuProps:{nodeProps:z},dropdownShow:A,iconMarginRight:X,tmNode:K,mergedClsPrefix:q}=this,$=z==null?void 0:z(K.rawNode);return v("div",Object.assign({},$,{class:[`${q}-menu-item`,$==null?void 0:$.class],role:"menuitem"}),v(we,{tmNode:K,paddingLeft:s,collapsed:c,disabled:g,iconMarginRight:X,maxIconSize:P,activeIconSize:w,title:h,extra:this.extra,showArrow:!d,childActive:R,clsPrefix:q,icon:H,hover:A,onClick:x}))},l=()=>v(Ee,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:v("div",{class:`${r}-submenu-children`,role:"menu"},d.map(c=>ce(c,this.menuProps)))}});return this.root?v(Xe,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),Ae=Object.assign(Object.assign({},ae),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Co=N({name:"MenuOption",props:Ae,setup(e){const r=le(e),{NSubmenu:o,NMenu:n}=r,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:d}=n,s=o?o.mergedDisabledRef:{value:!1},c=I(()=>s.value||e.disabled);function g(w){const{onClick:h}=e;h&&h(w)}function P(w){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),g(w))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:ee(()=>e.root&&d.value&&a.mode!=="horizontal"&&!c.value),selected:ee(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:n,nodeProps:a}}=this,l=a==null?void 0:a(o.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(Ye,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):F(this.title),trigger:()=>v(we,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),xo=N({name:"MenuDivider",setup(){const e=k(U),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${r.value}-menu-divider`})}}),bo=re(ye),Io=re(Ae),zo=re(He);function Se(e){return e.type==="divider"||e.type==="render"}function yo(e){return e.type==="divider"}function ce(e,r){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Se(o))return yo(o)?v(xo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=r,{key:l,level:d,isGroup:s}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?v(po,Z(c,bo,{tmNode:e,tmNodes:e.children,key:l})):v(go,Z(c,zo,{key:l,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):v(Co,Z(c,Io,{key:l,tmNode:e}))}const ge=[C("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ce=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],wo=C([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[y("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[y("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",Ce)]),y("selected",[O(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[O(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),O("border-bottom: 2px solid var(--n-border-color-horizontal);",Ce)]),u("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[u("menu-item-content",[y("selected",[C("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("> *","z-index: 1;"),C("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),y("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),y("collapsed",[m("arrow","transform: rotate(0);")]),y("selected",[C("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",ge)]),y("selected",[O(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[O(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[O(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),O(null,ge)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Fe({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),u("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function O(e,r){return[y("hover",e,r),C("&:hover",e,r)]}const Ho=Object.assign(Object.assign({},B.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Ao=N({name:"Menu",props:Ho,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=oe(e),n=B("Menu","-menu",wo,lo,e,r),a=k(ao,null),l=I(()=>{var f;const{collapsed:b}=e;if(b!==void 0)return b;if(a){const{collapseModeRef:t,collapsedRef:p}=a;if(t.value==="width")return(f=p.value)!==null&&f!==void 0?f:!1}return!1}),d=I(()=>{const{keyField:f,childrenField:b,disabledField:t}=e;return Ze(e.items||e.options,{getIgnored(p){return Se(p)},getChildren(p){return p[b]},getDisabled(p){return p[t]},getKey(p){var S;return(S=p[f])!==null&&S!==void 0?S:p.name}})}),s=I(()=>new Set(d.value.treeNodes.map(f=>f.key))),{watchProps:c}=e,g=V(null);c!=null&&c.includes("defaultValue")?ve(()=>{g.value=e.defaultValue}):g.value=e.defaultValue;const P=ue(e,"value"),w=pe(P,g),h=V([]),R=()=>{h.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(w.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ve(R):R();const H=Je(e,["expandedNames","expandedKeys"]),x=pe(H,h),z=I(()=>d.value.treeNodes),A=I(()=>d.value.getPath(w.value).keyPath);M(U,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:w,mergedExpandedKeysRef:x,activePathRef:A,mergedClsPrefixRef:r,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:ue(e,"inverted"),doSelect:X,toggleExpand:q});function X(f,b){const{"onUpdate:value":t,onUpdateValue:p,onSelect:S}=e;p&&_(p,f,b),t&&_(t,f,b),S&&_(S,f,b),g.value=f}function K(f){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:p,onOpenNamesChange:S}=e;b&&_(b,f),t&&_(t,f),p&&_(p,f),S&&_(S,f),h.value=f}function q(f){const b=Array.from(x.value),t=b.findIndex(p=>p===f);if(~t)b.splice(t,1);else{if(e.accordion&&s.value.has(f)){const p=b.findIndex(S=>s.value.has(S));p>-1&&b.splice(p,1)}b.push(f)}K(b)}const $=f=>{const b=d.value.getPath(f!=null?f:w.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(x.value),p=new Set([...t,...b]);e.accordion&&s.value.forEach(S=>{p.has(S)&&!b.includes(S)&&p.delete(S)}),K(Array.from(p))},de=I(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:b},self:t}=n.value,{borderRadius:p,borderColorHorizontal:S,fontSize:Re,itemHeight:Pe,dividerColor:Ne}=t,i={"--n-divider-color":Ne,"--n-bezier":b,"--n-font-size":Re,"--n-border-color-horizontal":S,"--n-border-radius":p,"--n-item-height":Pe};return f?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),E=o?te("menu",I(()=>e.inverted?"a":"b"),de,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:H,uncontrolledExpanededKeys:h,mergedExpandedKeys:x,uncontrolledValue:g,mergedValue:w,activePath:A,tmNodes:z,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:de,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:$}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:n}=this;return n==null||n(),v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>ce(a,this.$props)))}});const So=e=>(De("data-v-fae2c856"),e=e(),Ue(),e),Ro={class:"tw-h-screen tw-relative"},Po=So(()=>qe("img",{src:Te,alt:"Meow Forest",height:"28"},null,-1)),No={key:0,class:"tips tw-shadow-main tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2"},To={__name:"HomeAdmin",setup(e){const r=Be(),o=Me(),n=async()=>{try{(await fe.check()).data.success||(window.$notification.warning({content:"Plz Login!",duration:2e3}),o.push("/login"))}catch(d){window.$message.error(d)}},a=async()=>{try{(await fe.logout()).data.success&&(window.$notification.success({content:"Logout Success!",duration:2e3}),o.push("/login"))}catch(d){window.$message.error(d)}};Ke(()=>{n()});const l=[{label:()=>v(W,{to:"/admin/products"},{default:()=>"Products list"}),key:"product"},{label:()=>v(W,{to:"/admin/orders"},{default:()=>"Orders"}),key:"order"},{label:()=>v(W,{to:"/admin/coupons"},{default:()=>"Coupons"}),key:"coupon"},{label:()=>v("a",{onclick:a},{default:()=>"Logout"}),key:"logout"}];return(d,s)=>{const c=je("RouterView");return me(),he("div",Ro,[L(T(J),{position:"absolute"},{default:j(()=>[L(T(fo),{class:"tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16",bordered:""},{default:j(()=>[L(T(W),{to:"/"},{default:j(()=>[Po]),_:1}),L(T(Ao),{mode:"horizontal",options:l,style:{"--n-font-size":"16px"}})]),_:1}),L(T(J),{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:j(()=>[L(T(J),{"content-style":"padding: 24px;",class:"tw-bg-primary bg-paw"},{default:j(()=>[T(r).path==="/admin/"||T(r).path==="/admin"?(me(),he("div",No," Please Click Menu ! ")):Ve("",!0),L(c)]),_:1})]),_:1})]),_:1})])}}},Mo=Ge(To,[["__scopeId","data-v-fae2c856"]]);export{Mo as default};
