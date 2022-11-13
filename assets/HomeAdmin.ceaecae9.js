import{d as N,h as v,au as he,N as pe,av as Ae,aw as ce,a4 as Q,K as j,B as u,D as y,P as F,r as K,E as Z,p as _,ax as Se,i as I,Q as ee,ab as Re,L as T,ay as B,F as Pe,a3 as Ne,I as Y,az as Te,al as oe,aA as X,A as g,C as m,a6 as U,aB as $e,a9 as de,J as se,ae as $,_ as Le,j as q,o as Oe,c as Ee,v as k,l as G,u as ke,aC as Be,a as Fe}from"./index.2b4dc0de.js";import{t as _e,d as Me,N as Ke,a as je,c as Ve}from"./Dropdown.6a13354c.js";import{a as ve,u as De}from"./get.0fe094a7.js";const Ue=N({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),qe=e=>{const{baseColor:r,textColor2:o,bodyColor:n,cardColor:l,dividerColor:a,actionColor:d,scrollbarColor:s,scrollbarColorHover:c,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:d,headerColor:l,headerColorInverted:h,footerColor:d,footerColorInverted:h,headerBorderColor:a,headerBorderColorInverted:h,footerBorderColor:a,footerBorderColorInverted:h,siderBorderColor:a,siderBorderColorInverted:h,siderColor:l,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:r,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ce(n,s),siderToggleBarColorHover:ce(n,c),__invertScrollbar:"true"}},Ge=he({name:"Layout",common:pe,peers:{Scrollbar:Ae},self:qe}),fe=Ge;function We(e,r,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Je=e=>{const{borderRadius:r,textColor3:o,primaryColor:n,textColor2:l,textColor1:a,fontSize:d,dividerColor:s,hoverColor:c,primaryColorHover:h}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:Q(n,{alpha:.1}),itemColorActiveHover:Q(n,{alpha:.1}),itemColorActiveCollapsed:Q(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:h,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:h,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:s},We("#BBB",n,"#FFF","#AAA"))},Qe=he({name:"Menu",common:pe,peers:{Tooltip:_e,Dropdown:Me},self:Je}),Xe=Qe,Ye=j("n-layout-sider"),Ce={type:String,default:"static"},Ze=u("layout",`
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
 `)]),eo={embedded:Boolean,position:Ce,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},oo=j("n-layout");function to(e){return N({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),eo),setup(r){const o=K(null),n=K(null),{mergedClsPrefixRef:l,inlineThemeDisabled:a}=Z(r),d=F("Layout","-layout",Ze,fe,r,l);function s(x,z){if(r.nativeScrollbar){const{value:A}=o;A&&(z===void 0?A.scrollTo(x):A.scrollTo(x,z))}else{const{value:A}=n;A&&A.scrollTo(x,z)}}_(oo,r);let c=0,h=0;const P=x=>{var z;const A=x.target;c=A.scrollLeft,h=A.scrollTop,(z=r.onScroll)===null||z===void 0||z.call(r,x)};Se(()=>{if(r.nativeScrollbar){const x=o.value;x&&(x.scrollTop=h,x.scrollLeft=c)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:s},R=I(()=>{const{common:{cubicBezierEaseInOut:x},self:z}=d.value;return{"--n-bezier":x,"--n-color":r.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),H=a?ee("layout",I(()=>r.embedded?"e":""),R,r):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:w,mergedTheme:d,handleNativeElScroll:P,cssVars:a?void 0:R,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},p)},render(){var r;const{mergedClsPrefix:o,hasSider:n}=this;(r=this.onRender)===null||r===void 0||r.call(this);const l=n?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:a,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):v(Re,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const ro=to(!1),no=u("layout-header",`
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
 `)]),io={position:Ce,inverted:Boolean,bordered:{type:Boolean,default:!1}},lo=N({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),io),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Z(e),n=F("Layout","-layout-header",no,fe,e,r),l=I(()=>{const{common:{cubicBezierEaseInOut:d},self:s}=n.value,c={"--n-bezier":d};return e.inverted?(c["--n-color"]=s.headerColorInverted,c["--n-text-color"]=s.textColorInverted,c["--n-border-color"]=s.headerBorderColorInverted):(c["--n-color"]=s.headerColor,c["--n-text-color"]=s.textColor,c["--n-border-color"]=s.headerBorderColor),c}),a=o?ee("layout-header",I(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),V=j("n-menu"),te=j("n-submenu"),re=j("n-menu-item-group"),W=8;function ne(e){const r=T(V),{props:o,mergedCollapsedRef:n}=r,l=T(te,null),a=T(re,null),d=I(()=>o.mode==="horizontal"),s=I(()=>d.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=I(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),h=I(()=>{var p;return!d.value&&e.root&&n.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),P=I(()=>{if(d.value)return;const{collapsedWidth:p,indent:R,rootIndent:H}=o,{root:x,isGroup:z}=e,A=H===void 0?R:H;if(x)return n.value?p/2-c.value/2:A;if(a)return R/2+a.paddingLeftRef.value;if(l)return(z?R/2:R)+l.paddingLeftRef.value}),w=I(()=>{const{collapsedWidth:p,indent:R,rootIndent:H}=o,{value:x}=c,{root:z}=e;return d.value||!z||!n.value?W:(H===void 0?R:H)+x+W-(p+x)/2});return{dropdownPlacement:s,activeIconSize:h,maxIconSize:c,paddingLeft:P,iconMarginRight:w,NMenu:r,NSubmenu:l}}const ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ge=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ao=N({name:"MenuOptionGroup",props:ge,setup(e){_(te,null);const r=ne(e);_(re,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:n}=T(V);return function(){const{value:l}=o,a=r.paddingLeft.value,{nodeProps:d}=n,s=d==null?void 0:d(e.tmNode.rawNode);return v("div",{class:`${l}-menu-item-group`,role:"group"},v("div",Object.assign({},s,{class:[`${l}-menu-item-group-title`,s==null?void 0:s.class],style:[(s==null?void 0:s.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),B(e.title),e.extra?v(Pe,null," ",B(e.extra)):null),v("div",null,e.tmNodes.map(c=>le(c,n))))}}}),xe=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=T(V);return{menuProps:r,style:I(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:I(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:l}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:n,renderExtra:l,expandIcon:a}}=this,d=o?o(r.rawNode):B(this.icon);return v("div",{onClick:s=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,s)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(r.rawNode):B(this.title),this.extra||l?v("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(r.rawNode):B(this.extra)):null),this.showArrow?v(Ne,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(r.rawNode):v(Ue,null)}):null)}}),be=Object.assign(Object.assign({},ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),co=N({name:"Submenu",props:be,setup(e){const r=ne(e),{NMenu:o,NSubmenu:n}=r,{props:l,mergedCollapsedRef:a,mergedThemeRef:d}=o,s=I(()=>{const{disabled:p}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:p}),c=K(!1);_(te,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s}),_(re,null);function h(){const{onClick:p}=e;p&&p()}function P(){s.value||(a.value||o.toggleExpand(e.internalKey),h())}function w(p){c.value=p}return{menuProps:l,mergedTheme:d,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:c,paddingLeft:r.paddingLeft,mergedDisabled:s,mergedValue:o.mergedValueRef,childActive:Y(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>l.mode==="horizontal"?!1:a.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!s.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:w,handleClick:P}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:n}}=this,l=()=>{const{isHorizontal:d,paddingLeft:s,collapsed:c,mergedDisabled:h,maxIconSize:P,activeIconSize:w,title:p,childActive:R,icon:H,handleClick:x,menuProps:{nodeProps:z},dropdownShow:A,iconMarginRight:J,tmNode:M,mergedClsPrefix:D}=this,O=z==null?void 0:z(M.rawNode);return v("div",Object.assign({},O,{class:[`${D}-menu-item`,O==null?void 0:O.class],role:"menuitem"}),v(xe,{tmNode:M,paddingLeft:s,collapsed:c,disabled:h,iconMarginRight:J,maxIconSize:P,activeIconSize:w,title:p,extra:this.extra,showArrow:!d,childActive:R,clsPrefix:D,icon:H,hover:A,onClick:x}))},a=()=>v(Te,null,{default:()=>{const{tmNodes:d,collapsed:s}=this;return s?null:v("div",{class:`${r}-submenu-children`,role:"menu"},d.map(c=>le(c,this.menuProps)))}});return this.root?v(Ke,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),Ie=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),so=N({name:"MenuOption",props:Ie,setup(e){const r=ne(e),{NSubmenu:o,NMenu:n}=r,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:d}=n,s=o?o.mergedDisabledRef:{value:!1},c=I(()=>s.value||e.disabled);function h(w){const{onClick:p}=e;p&&p(w)}function P(w){c.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(w))}return{mergedClsPrefix:a,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:Y(()=>e.root&&d.value&&l.mode!=="horizontal"&&!c.value),selected:Y(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(o.rawNode);return v("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),v(je,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):B(this.title),trigger:()=>v(xe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),vo=N({name:"MenuDivider",setup(){const e=T(V),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${r.value}-menu-divider`})}}),uo=oe(ge),mo=oe(Ie),ho=oe(be);function ze(e){return e.type==="divider"||e.type==="render"}function po(e){return e.type==="divider"}function le(e,r){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(ze(o))return po(o)?v(vo,Object.assign({key:e.key},o.props)):null;const{labelField:l}=r,{key:a,level:d,isGroup:s}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[l],extra:o.titleExtra||o.extra,key:a,internalKey:a,level:d,root:d===0,isGroup:s});return e.children?e.isGroup?v(ao,X(c,uo,{tmNode:e,tmNodes:e.children,key:a})):v(co,X(c,ho,{key:a,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):v(so,X(c,mo,{key:a,tmNode:e}))}const ue=[g("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[g("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],me=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],fo=g([u("menu",`
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
 `,[g("&::before","display: none;"),y("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[y("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),y("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[g("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),U("disabled",[U("selected, child-active",[g("&:focus-within",me)]),y("selected",[L(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[L(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[g("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),L("border-bottom: 2px solid var(--n-border-color-horizontal);",me)]),u("menu-item-content-header",[g("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[u("menu-item-content",[y("selected",[g("&::before",`
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
 `,[g("> *","z-index: 1;"),g("&::before",`
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
 `),y("collapsed",[m("arrow","transform: rotate(0);")]),y("selected",[g("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[g("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),y("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[g("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),U("disabled",[U("selected, child-active",[g("&:focus-within",ue)]),y("selected",[L(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[g("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[L(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[g("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[L(null,[g("&::before","background-color: var(--n-item-color-active-hover);")])]),L(null,ue)]),m("icon",`
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
 `,[g("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[g("&::before",`
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
 `)])]),u("menu-tooltip",[g("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function L(e,r){return[y("hover",e,r),g("&:hover",e,r)]}const Co=Object.assign(Object.assign({},F.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),go=N({name:"Menu",props:Co,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Z(e),n=F("Menu","-menu",fo,Xe,e,r),l=T(Ye,null),a=I(()=>{var f;const{collapsed:b}=e;if(b!==void 0)return b;if(l){const{collapseModeRef:t,collapsedRef:C}=l;if(t.value==="width")return(f=C.value)!==null&&f!==void 0?f:!1}return!1}),d=I(()=>{const{keyField:f,childrenField:b,disabledField:t}=e;return Ve(e.items||e.options,{getIgnored(C){return ze(C)},getChildren(C){return C[b]},getDisabled(C){return C[t]},getKey(C){var S;return(S=C[f])!==null&&S!==void 0?S:C.name}})}),s=I(()=>new Set(d.value.treeNodes.map(f=>f.key))),{watchProps:c}=e,h=K(null);c!=null&&c.includes("defaultValue")?de(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const P=se(e,"value"),w=ve(P,h),p=K([]),R=()=>{p.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(w.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?de(R):R();const H=De(e,["expandedNames","expandedKeys"]),x=ve(H,p),z=I(()=>d.value.treeNodes),A=I(()=>d.value.getPath(w.value).keyPath);_(V,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:w,mergedExpandedKeysRef:x,activePathRef:A,mergedClsPrefixRef:r,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:se(e,"inverted"),doSelect:J,toggleExpand:D});function J(f,b){const{"onUpdate:value":t,onUpdateValue:C,onSelect:S}=e;C&&$(C,f,b),t&&$(t,f,b),S&&$(S,f,b),h.value=f}function M(f){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:C,onOpenNamesChange:S}=e;b&&$(b,f),t&&$(t,f),C&&$(C,f),S&&$(S,f),p.value=f}function D(f){const b=Array.from(x.value),t=b.findIndex(C=>C===f);if(~t)b.splice(t,1);else{if(e.accordion&&s.value.has(f)){const C=b.findIndex(S=>s.value.has(S));C>-1&&b.splice(C,1)}b.push(f)}M(b)}const O=f=>{const b=d.value.getPath(f!=null?f:w.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(x.value),C=new Set([...t,...b]);e.accordion&&s.value.forEach(S=>{C.has(S)&&!b.includes(S)&&C.delete(S)}),M(Array.from(C))},ae=I(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:b},self:t}=n.value,{borderRadius:C,borderColorHorizontal:S,fontSize:ye,itemHeight:we,dividerColor:He}=t,i={"--n-divider-color":He,"--n-bezier":b,"--n-font-size":ye,"--n-border-color-horizontal":S,"--n-border-radius":C,"--n-item-height":we};return f?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),E=o?ee("menu",I(()=>e.inverted?"a":"b"),ae,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:H,uncontrolledExpanededKeys:p,mergedExpandedKeys:x,uncontrolledValue:h,mergedValue:w,activePath:A,tmNodes:z,mergedTheme:n,mergedCollapsed:a,cssVars:o?void 0:ae,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender,showOption:O}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:n}=this;return n==null||n(),v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>le(l,this.$props)))}}),xo=N({components:{NLayout:ro,NLayoutHeader:lo,NMenu:go},setup(){const e=T("axios"),r=ke(),o=document.cookie.replace(/(?:(?:^|.*;\s*)meowforestToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),n="https://vue3-course-api.hexschool.io/api/user/check";e.defaults.headers.common.Authorization=o,e.post(n).then(d=>{d.data.success||(window.$notification.warning({content:"Plz Login!",duration:2e3}),r.push("/login"))}).catch(d=>{console.log(d)});const l=()=>{const d="https://vue3-course-api.hexschool.io/logout";e.post(d).then(s=>{s.data.success&&(window.$notification.success({content:"Logout Success!",duration:2e3}),r.push("/login"))})};return{menuOptions:[{label:()=>v(Be,{to:"/admin/products"},{default:()=>"Products list"}),key:"parent1"},{label:()=>v("a",{onclick:l},{default:()=>"Logout"}),key:"parent2"}]}}}),bo={class:"tw-h-screen tw-relative"},Io=Fe("span",null,"Meow Forest",-1);function zo(e,r,o,n,l,a){const d=q("n-menu"),s=q("n-layout-header"),c=q("RouterView"),h=q("n-layout");return Oe(),Ee("div",bo,[k(h,{position:"absolute"},{default:G(()=>[k(s,{class:"tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16",bordered:""},{default:G(()=>[Io,k(d,{mode:"horizontal",options:e.menuOptions},null,8,["options"])]),_:1}),k(h,{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:G(()=>[k(h,{"content-style":"padding: 24px;",class:"tw-bg-teal-50"},{default:G(()=>[k(c)]),_:1})]),_:1})]),_:1})])}const Ao=Le(xo,[["render",zo]]);export{Ao as default};
