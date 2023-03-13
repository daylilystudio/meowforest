import{P,D as v,Q as Ce,S as xe,aM as Pe,aN as de,a7 as X,ad as D,V as u,a8 as y,X as E,r as V,W as ee,G as F,aO as Te,K as I,ab as oe,aq as _e,y as O,aP as M,F as Le,a3 as Oe,_ as J,aQ as ke,aH as te,aR as Z,U as C,a9 as m,aa as G,aS as $e,ap as se,Z as ve,a5 as T,u as Me,a as Ee,o as Fe,c as K,d as ue,e as me,j as _,w as j,aT as Y,l as Be,p as Ke,m as je,f as Ve}from"./index.bcad466f.js";import{a as he}from"./api.1825d9da.js";import{_ as De}from"./logo.ceca909b.js";import{_ as Ue}from"./_plugin-vue_export-helper.cdc0426e.js";import{t as qe,d as Ge,N as We,a as Qe,c as Xe}from"./Dropdown.33a9b097.js";import{u as pe}from"./use-merged-state.788ee68d.js";import{u as Ze}from"./use-compitable.23f9187d.js";const Ye=P({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Je=e=>{const{baseColor:r,textColor2:o,bodyColor:n,cardColor:a,dividerColor:l,actionColor:s,scrollbarColor:d,scrollbarColorHover:c,invertedColor:p}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:s,headerColor:a,headerColorInverted:p,footerColor:s,footerColorInverted:p,headerBorderColor:l,headerBorderColorInverted:p,footerBorderColor:l,footerBorderColorInverted:p,siderBorderColor:l,siderBorderColorInverted:p,siderColor:a,siderColorInverted:p,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:r,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:de(n,d),siderToggleBarColorHover:de(n,c),__invertScrollbar:"true"}},eo=Ce({name:"Layout",common:xe,peers:{Scrollbar:Pe},self:Je}),be=eo;function oo(e,r,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const to=e=>{const{borderRadius:r,textColor3:o,primaryColor:n,textColor2:a,textColor1:l,fontSize:s,dividerColor:d,hoverColor:c,primaryColorHover:p}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:X(n,{alpha:.1}),itemColorActiveHover:X(n,{alpha:.1}),itemColorActiveCollapsed:X(n,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:p,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:p,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:d},oo("#BBB",n,"#FFF","#AAA"))},ro=Ce({name:"Menu",common:xe,peers:{Tooltip:qe,Dropdown:Ge},self:to}),no=ro,io=D("n-layout-sider"),Ie={type:String,default:"static"},lo=u("layout",`
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
 `)]),ao={embedded:Boolean,position:Ie,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},co=D("n-layout");function so(e){return P({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},E.props),ao),setup(r){const o=V(null),n=V(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=ee(r),s=E("Layout","-layout",lo,be,r,a);function d(x,z){if(r.nativeScrollbar){const{value:A}=o;A&&(z===void 0?A.scrollTo(x):A.scrollTo(x,z))}else{const{value:A}=n;A&&A.scrollTo(x,z)}}F(co,r);let c=0,p=0;const R=x=>{var z;const A=x.target;c=A.scrollLeft,p=A.scrollTop,(z=r.onScroll)===null||z===void 0||z.call(r,x)};Te(()=>{if(r.nativeScrollbar){const x=o.value;x&&(x.scrollTop=p,x.scrollLeft=c)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:d},N=I(()=>{const{common:{cubicBezierEaseInOut:x},self:z}=s.value;return{"--n-bezier":x,"--n-color":r.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),H=l?oe("layout",I(()=>r.embedded?"e":""),N,r):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:w,mergedTheme:s,handleNativeElScroll:R,cssVars:l?void 0:N,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},h)},render(){var r;const{mergedClsPrefix:o,hasSider:n}=this;(r=this.onRender)===null||r===void 0||r.call(this);const a=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):v(_e,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const vo=so(!1),uo=u("layout-header",`
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
 `)]),mo={position:Ie,inverted:Boolean,bordered:{type:Boolean,default:!1}},ho=P({name:"LayoutHeader",props:Object.assign(Object.assign({},E.props),mo),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=ee(e),n=E("Layout","-layout-header",uo,be,e,r),a=I(()=>{const{common:{cubicBezierEaseInOut:s},self:d}=n.value,c={"--n-bezier":s};return e.inverted?(c["--n-color"]=d.headerColorInverted,c["--n-text-color"]=d.textColorInverted,c["--n-border-color"]=d.headerBorderColorInverted):(c["--n-color"]=d.headerColor,c["--n-text-color"]=d.textColor,c["--n-border-color"]=d.headerBorderColor),c}),l=o?oe("layout-header",I(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),U=D("n-menu"),re=D("n-submenu"),ne=D("n-menu-item-group"),W=8;function ie(e){const r=O(U),{props:o,mergedCollapsedRef:n}=r,a=O(re,null),l=O(ne,null),s=I(()=>o.mode==="horizontal"),d=I(()=>s.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=I(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),p=I(()=>{var h;return!s.value&&e.root&&n.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),R=I(()=>{if(s.value)return;const{collapsedWidth:h,indent:N,rootIndent:H}=o,{root:x,isGroup:z}=e,A=H===void 0?N:H;if(x)return n.value?h/2-c.value/2:A;if(l)return N/2+l.paddingLeftRef.value;if(a)return(z?N/2:N)+a.paddingLeftRef.value}),w=I(()=>{const{collapsedWidth:h,indent:N,rootIndent:H}=o,{value:x}=c,{root:z}=e;return s.value||!z||!n.value?W:(H===void 0?N:H)+x+W-(h+x)/2});return{dropdownPlacement:d,activeIconSize:p,maxIconSize:c,paddingLeft:R,iconMarginRight:w,NMenu:r,NSubmenu:a}}const le={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ze=Object.assign(Object.assign({},le),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),po=P({name:"MenuOptionGroup",props:ze,setup(e){F(re,null);const r=ie(e);F(ne,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:n}=O(U);return function(){const{value:a}=o,l=r.paddingLeft.value,{nodeProps:s}=n,d=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),M(e.title),e.extra?v(Le,null," ",M(e.extra)):null),v("div",null,e.tmNodes.map(c=>ae(c,n))))}}}),ye=P({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=O(U);return{menuProps:r,style:I(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:I(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:n,renderExtra:a,expandIcon:l}}=this,s=o?o(r.rawNode):M(this.icon);return v("div",{onClick:d=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(r.rawNode):M(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):M(this.extra)):null),this.showArrow?v(Oe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):v(Ye,null)}):null)}}),we=Object.assign(Object.assign({},le),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),fo=P({name:"Submenu",props:we,setup(e){const r=ie(e),{NMenu:o,NSubmenu:n}=r,{props:a,mergedCollapsedRef:l,mergedThemeRef:s}=o,d=I(()=>{const{disabled:h}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:h}),c=V(!1);F(re,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:d}),F(ne,null);function p(){const{onClick:h}=e;h&&h()}function R(){d.value||(l.value||o.toggleExpand(e.internalKey),p())}function w(h){c.value=h}return{menuProps:a,mergedTheme:s,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:c,paddingLeft:r.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:J(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>a.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!d.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:w,handleClick:R}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:n}}=this,a=()=>{const{isHorizontal:s,paddingLeft:d,collapsed:c,mergedDisabled:p,maxIconSize:R,activeIconSize:w,title:h,childActive:N,icon:H,handleClick:x,menuProps:{nodeProps:z},dropdownShow:A,iconMarginRight:Q,tmNode:B,mergedClsPrefix:q}=this,k=z==null?void 0:z(B.rawNode);return v("div",Object.assign({},k,{class:[`${q}-menu-item`,k==null?void 0:k.class],role:"menuitem"}),v(ye,{tmNode:B,paddingLeft:d,collapsed:c,disabled:p,iconMarginRight:Q,maxIconSize:R,activeIconSize:w,title:h,extra:this.extra,showArrow:!s,childActive:N,clsPrefix:q,icon:H,hover:A,onClick:x}))},l=()=>v(ke,null,{default:()=>{const{tmNodes:s,collapsed:d}=this;return d?null:v("div",{class:`${r}-submenu-children`,role:"menu"},s.map(c=>ae(c,this.menuProps)))}});return this.root?v(We,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),He=Object.assign(Object.assign({},le),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),go=P({name:"MenuOption",props:He,setup(e){const r=ie(e),{NSubmenu:o,NMenu:n}=r,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:s}=n,d=o?o.mergedDisabledRef:{value:!1},c=I(()=>d.value||e.disabled);function p(w){const{onClick:h}=e;h&&h(w)}function R(w){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),p(w))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:J(()=>e.root&&s.value&&a.mode!=="horizontal"&&!c.value),selected:J(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:R}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:n,nodeProps:a}}=this,l=a==null?void 0:a(o.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(Qe,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):M(this.title),trigger:()=>v(ye,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Co=P({name:"MenuDivider",setup(){const e=O(U),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${r.value}-menu-divider`})}}),xo=te(ze),bo=te(He),Io=te(we);function Ae(e){return e.type==="divider"||e.type==="render"}function zo(e){return e.type==="divider"}function ae(e,r){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(Ae(o))return zo(o)?v(Co,Object.assign({key:e.key},o.props)):null;const{labelField:a}=r,{key:l,level:s,isGroup:d}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:s,root:s===0,isGroup:d});return e.children?e.isGroup?v(po,Z(c,xo,{tmNode:e,tmNodes:e.children,key:l})):v(fo,Z(c,Io,{key:l,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):v(go,Z(c,bo,{key:l,tmNode:e}))}const fe=[C("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ge=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],yo=C([u("menu",`
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
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",ge)]),y("selected",[L(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[L(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),L("border-bottom: 2px solid var(--n-border-color-horizontal);",ge)]),u("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[u("menu-item-content",[y("selected",[C("&::before",`
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
 `)]),G("disabled",[G("selected, child-active",[C("&:focus-within",fe)]),y("selected",[L(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[L(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[L(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),L(null,fe)]),m("icon",`
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
 `,[$e({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
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
 `)]);function L(e,r){return[y("hover",e,r),C("&:hover",e,r)]}const wo=Object.assign(Object.assign({},E.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Ho=P({name:"Menu",props:wo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=ee(e),n=E("Menu","-menu",yo,no,e,r),a=O(io,null),l=I(()=>{var f;const{collapsed:b}=e;if(b!==void 0)return b;if(a){const{collapseModeRef:t,collapsedRef:g}=a;if(t.value==="width")return(f=g.value)!==null&&f!==void 0?f:!1}return!1}),s=I(()=>{const{keyField:f,childrenField:b,disabledField:t}=e;return Xe(e.items||e.options,{getIgnored(g){return Ae(g)},getChildren(g){return g[b]},getDisabled(g){return g[t]},getKey(g){var S;return(S=g[f])!==null&&S!==void 0?S:g.name}})}),d=I(()=>new Set(s.value.treeNodes.map(f=>f.key))),{watchProps:c}=e,p=V(null);c!=null&&c.includes("defaultValue")?se(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const R=ve(e,"value"),w=pe(R,p),h=V([]),N=()=>{h.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(w.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?se(N):N();const H=Ze(e,["expandedNames","expandedKeys"]),x=pe(H,h),z=I(()=>s.value.treeNodes),A=I(()=>s.value.getPath(w.value).keyPath);F(U,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:w,mergedExpandedKeysRef:x,activePathRef:A,mergedClsPrefixRef:r,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:ve(e,"inverted"),doSelect:Q,toggleExpand:q});function Q(f,b){const{"onUpdate:value":t,onUpdateValue:g,onSelect:S}=e;g&&T(g,f,b),t&&T(t,f,b),S&&T(S,f,b),p.value=f}function B(f){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:S}=e;b&&T(b,f),t&&T(t,f),g&&T(g,f),S&&T(S,f),h.value=f}function q(f){const b=Array.from(x.value),t=b.findIndex(g=>g===f);if(~t)b.splice(t,1);else{if(e.accordion&&d.value.has(f)){const g=b.findIndex(S=>d.value.has(S));g>-1&&b.splice(g,1)}b.push(f)}B(b)}const k=f=>{const b=s.value.getPath(f!=null?f:w.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(x.value),g=new Set([...t,...b]);e.accordion&&d.value.forEach(S=>{g.has(S)&&!b.includes(S)&&g.delete(S)}),B(Array.from(g))},ce=I(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:b},self:t}=n.value,{borderRadius:g,borderColorHorizontal:S,fontSize:Se,itemHeight:Re,dividerColor:Ne}=t,i={"--n-divider-color":Ne,"--n-bezier":b,"--n-font-size":Se,"--n-border-color-horizontal":S,"--n-border-radius":g,"--n-item-height":Re};return f?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),$=o?oe("menu",I(()=>e.inverted?"a":"b"),ce,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:H,uncontrolledExpanededKeys:h,mergedExpandedKeys:x,uncontrolledValue:p,mergedValue:w,activePath:A,tmNodes:z,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:ce,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender,showOption:k}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:n}=this;return n==null||n(),v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>ae(a,this.$props)))}});const Ao={components:{NLayout:vo,NLayoutHeader:ho,NMenu:Ho},setup(){const e=Me(),r=Ee(),o=async()=>{try{(await he.check()).data.success||(window.$notification.warning({content:"Plz Login!",duration:2e3}),r.push("/login"))}catch(l){window.$message.error(l)}},n=async()=>{try{(await he.logout()).data.success&&(window.$notification.success({content:"Logout Success!",duration:2e3}),r.push("/login"))}catch(l){window.$message.error(l)}};return Fe(()=>{o()}),{route:e,menuOptions:[{label:()=>v(Y,{to:"/admin/products"},{default:()=>"Products list"}),key:"product"},{label:()=>v(Y,{to:"/admin/orders"},{default:()=>"Orders"}),key:"order"},{label:()=>v(Y,{to:"/admin/coupons"},{default:()=>"Coupons"}),key:"coupon"},{label:()=>v("a",{onclick:n},{default:()=>"Logout"}),key:"logout"}]}}},So=e=>(Ke("data-v-96e47a09"),e=e(),je(),e),Ro={class:"tw-h-screen tw-relative"},No=So(()=>Ve("img",{src:De,alt:"Meow Forest",height:"28"},null,-1)),Po={key:0,class:"tips shadow tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2"};function To(e,r,o,n,a,l){const s=K("router-link"),d=K("NMenu"),c=K("NLayoutHeader"),p=K("RouterView"),R=K("NLayout");return ue(),me("div",Ro,[_(R,{position:"absolute"},{default:j(()=>[_(c,{class:"tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16",bordered:""},{default:j(()=>[_(s,{to:"/"},{default:j(()=>[No]),_:1}),_(d,{mode:"horizontal",options:n.menuOptions,style:{"--n-font-size":"16px"}},null,8,["options"])]),_:1}),_(R,{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:j(()=>[_(R,{"content-style":"padding: 24px;",class:"bg-primary bg-paw"},{default:j(()=>[n.route.path==="/admin/"||n.route.path==="/admin"?(ue(),me("div",Po," Please Click Menu ! ")):Be("",!0),_(p)]),_:1})]),_:1})]),_:1})])}const Fo=Ue(Ao,[["render",To],["__scopeId","data-v-96e47a09"]]);export{Fo as default};
