import{d as N,B as v,O as fe,P as ge,aJ as Re,aK as ce,a5 as Y,ab as j,T as u,a6 as y,V as F,r as K,U as Z,D as B,aL as Pe,I,a9 as ee,ao as Ne,x as T,aM as E,F as Te,a1 as _e,Y as Q,aN as $e,aA as oe,aO as J,S as C,a7 as m,a8 as U,aP as Oe,an as de,X as se,a3 as _,b as q,c as ve,e as ue,j as k,w as G,u as Le,a as ke,f as Ee,k as Fe,aQ as Be}from"./index.becd6808.js";import{l as Me}from"./logo.05a8cd56.js";import{_ as Ke}from"./_plugin-vue_export-helper.cdc0426e.js";import{t as je,d as Ve,N as De,a as Ue,c as qe}from"./Dropdown.12398b42.js";import{u as me}from"./use-merged-state.7e774ca8.js";import{u as Ge}from"./use-compitable.fadc9b7f.js";import"./get.6fae79b4.js";const We=N({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Xe=e=>{const{baseColor:r,textColor2:o,bodyColor:n,cardColor:a,dividerColor:l,actionColor:s,scrollbarColor:c,scrollbarColorHover:d,invertedColor:h}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:s,headerColor:a,headerColorInverted:h,footerColor:s,footerColorInverted:h,headerBorderColor:l,headerBorderColorInverted:h,footerBorderColor:l,footerBorderColorInverted:h,siderBorderColor:l,siderBorderColorInverted:h,siderColor:a,siderColorInverted:h,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:r,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ce(n,c),siderToggleBarColorHover:ce(n,d),__invertScrollbar:"true"}},Ye=fe({name:"Layout",common:ge,peers:{Scrollbar:Re},self:Xe}),Ce=Ye;function Je(e,r,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:r,itemColorActiveHoverInverted:r,itemColorActiveCollapsedInverted:r,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const Qe=e=>{const{borderRadius:r,textColor3:o,primaryColor:n,textColor2:a,textColor1:l,fontSize:s,dividerColor:c,hoverColor:d,primaryColorHover:h}=e;return Object.assign({borderRadius:r,color:"#0000",groupTextColor:o,itemColorHover:d,itemColorActive:Y(n,{alpha:.1}),itemColorActiveHover:Y(n,{alpha:.1}),itemColorActiveCollapsed:Y(n,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:h,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:h,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:c},Je("#BBB",n,"#FFF","#AAA"))},Ze=fe({name:"Menu",common:ge,peers:{Tooltip:je,Dropdown:Ve},self:Qe}),eo=Ze,oo=j("n-layout-sider"),xe={type:String,default:"static"},to=u("layout",`
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
 `)]),ro={embedded:Boolean,position:xe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},no=j("n-layout");function io(e){return N({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),ro),setup(r){const o=K(null),n=K(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=Z(r),s=F("Layout","-layout",to,Ce,r,a);function c(x,z){if(r.nativeScrollbar){const{value:A}=o;A&&(z===void 0?A.scrollTo(x):A.scrollTo(x,z))}else{const{value:A}=n;A&&A.scrollTo(x,z)}}B(no,r);let d=0,h=0;const P=x=>{var z;const A=x.target;d=A.scrollLeft,h=A.scrollTop,(z=r.onScroll)===null||z===void 0||z.call(r,x)};Pe(()=>{if(r.nativeScrollbar){const x=o.value;x&&(x.scrollTop=h,x.scrollLeft=d)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},p={scrollTo:c},R=I(()=>{const{common:{cubicBezierEaseInOut:x},self:z}=s.value;return{"--n-bezier":x,"--n-color":r.embedded?z.colorEmbedded:z.color,"--n-text-color":z.textColor}}),H=l?ee("layout",I(()=>r.embedded?"e":""),R,r):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:w,mergedTheme:s,handleNativeElScroll:P,cssVars:l?void 0:R,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},p)},render(){var r;const{mergedClsPrefix:o,hasSider:n}=this;(r=this.onRender)===null||r===void 0||r.call(this);const a=n?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):v(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const lo=io(!1),ao=u("layout-header",`
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
 `)]),co={position:xe,inverted:Boolean,bordered:{type:Boolean,default:!1}},so=N({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),co),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Z(e),n=F("Layout","-layout-header",ao,Ce,e,r),a=I(()=>{const{common:{cubicBezierEaseInOut:s},self:c}=n.value,d={"--n-bezier":s};return e.inverted?(d["--n-color"]=c.headerColorInverted,d["--n-text-color"]=c.textColorInverted,d["--n-border-color"]=c.headerBorderColorInverted):(d["--n-color"]=c.headerColor,d["--n-text-color"]=c.textColor,d["--n-border-color"]=c.headerBorderColor),d}),l=o?ee("layout-header",I(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),V=j("n-menu"),te=j("n-submenu"),re=j("n-menu-item-group"),W=8;function ne(e){const r=T(V),{props:o,mergedCollapsedRef:n}=r,a=T(te,null),l=T(re,null),s=I(()=>o.mode==="horizontal"),c=I(()=>s.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),d=I(()=>{var p;return Math.max((p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize,o.iconSize)}),h=I(()=>{var p;return!s.value&&e.root&&n.value&&(p=o.collapsedIconSize)!==null&&p!==void 0?p:o.iconSize}),P=I(()=>{if(s.value)return;const{collapsedWidth:p,indent:R,rootIndent:H}=o,{root:x,isGroup:z}=e,A=H===void 0?R:H;if(x)return n.value?p/2-d.value/2:A;if(l)return R/2+l.paddingLeftRef.value;if(a)return(z?R/2:R)+a.paddingLeftRef.value}),w=I(()=>{const{collapsedWidth:p,indent:R,rootIndent:H}=o,{value:x}=d,{root:z}=e;return s.value||!z||!n.value?W:(H===void 0?R:H)+x+W-(p+x)/2});return{dropdownPlacement:c,activeIconSize:h,maxIconSize:d,paddingLeft:P,iconMarginRight:w,NMenu:r,NSubmenu:a}}const ie={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},be=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vo=N({name:"MenuOptionGroup",props:be,setup(e){B(te,null);const r=ne(e);B(re,{paddingLeftRef:r.paddingLeft});const{mergedClsPrefixRef:o,props:n}=T(V);return function(){const{value:a}=o,l=r.paddingLeft.value,{nodeProps:s}=n,c=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${a}-menu-item-group`,role:"group"},v("div",Object.assign({},c,{class:[`${a}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),E(e.title),e.extra?v(Te,null," ",E(e.extra)):null),v("div",null,e.tmNodes.map(d=>le(d,n))))}}}),Ie=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:r}=T(V);return{menuProps:r,style:I(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:I(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:r,menuProps:{renderIcon:o,renderLabel:n,renderExtra:a,expandIcon:l}}=this,s=o?o(r.rawNode):E(this.icon);return v("div",{onClick:c=>{var d;(d=this.onClick)===null||d===void 0||d.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(r.rawNode):E(this.title),this.extra||a?v("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(r.rawNode):E(this.extra)):null),this.showArrow?v(_e,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(r.rawNode):v(We,null)}):null)}}),ze=Object.assign(Object.assign({},ie),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),uo=N({name:"Submenu",props:ze,setup(e){const r=ne(e),{NMenu:o,NSubmenu:n}=r,{props:a,mergedCollapsedRef:l,mergedThemeRef:s}=o,c=I(()=>{const{disabled:p}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:p}),d=K(!1);B(te,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:c}),B(re,null);function h(){const{onClick:p}=e;p&&p()}function P(){c.value||(l.value||o.toggleExpand(e.internalKey),h())}function w(p){d.value=p}return{menuProps:a,mergedTheme:s,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,iconMarginRight:r.iconMarginRight,dropdownPlacement:r.dropdownPlacement,dropdownShow:d,paddingLeft:r.paddingLeft,mergedDisabled:c,mergedValue:o.mergedValueRef,childActive:Q(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:I(()=>a.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:I(()=>!c.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:w,handleClick:P}},render(){var e;const{mergedClsPrefix:r,menuProps:{renderIcon:o,renderLabel:n}}=this,a=()=>{const{isHorizontal:s,paddingLeft:c,collapsed:d,mergedDisabled:h,maxIconSize:P,activeIconSize:w,title:p,childActive:R,icon:H,handleClick:x,menuProps:{nodeProps:z},dropdownShow:A,iconMarginRight:X,tmNode:M,mergedClsPrefix:D}=this,O=z==null?void 0:z(M.rawNode);return v("div",Object.assign({},O,{class:[`${D}-menu-item`,O==null?void 0:O.class],role:"menuitem"}),v(Ie,{tmNode:M,paddingLeft:c,collapsed:d,disabled:h,iconMarginRight:X,maxIconSize:P,activeIconSize:w,title:p,extra:this.extra,showArrow:!s,childActive:R,clsPrefix:D,icon:H,hover:A,onClick:x}))},l=()=>v($e,null,{default:()=>{const{tmNodes:s,collapsed:c}=this;return c?null:v("div",{class:`${r}-submenu-children`,role:"menu"},s.map(d=>le(d,this.menuProps)))}});return this.root?v(De,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):v("div",{class:`${r}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),ye=Object.assign(Object.assign({},ie),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),mo=N({name:"MenuOption",props:ye,setup(e){const r=ne(e),{NSubmenu:o,NMenu:n}=r,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:s}=n,c=o?o.mergedDisabledRef:{value:!1},d=I(()=>c.value||e.disabled);function h(w){const{onClick:p}=e;p&&p(w)}function P(w){d.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),h(w))}return{mergedClsPrefix:l,dropdownPlacement:r.dropdownPlacement,paddingLeft:r.paddingLeft,iconMarginRight:r.iconMarginRight,maxIconSize:r.maxIconSize,activeIconSize:r.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:Q(()=>e.root&&s.value&&a.mode!=="horizontal"&&!d.value),selected:Q(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:d,handleClick:P}},render(){const{mergedClsPrefix:e,mergedTheme:r,tmNode:o,menuProps:{renderLabel:n,nodeProps:a}}=this,l=a==null?void 0:a(o.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(Ue,{theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):E(this.title),trigger:()=>v(Ie,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ho=N({name:"MenuDivider",setup(){const e=T(V),{mergedClsPrefixRef:r,isHorizontalRef:o}=e;return()=>o.value?null:v("div",{class:`${r.value}-menu-divider`})}}),po=oe(be),fo=oe(ye),go=oe(ze);function we(e){return e.type==="divider"||e.type==="render"}function Co(e){return e.type==="divider"}function le(e,r){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(we(o))return Co(o)?v(ho,Object.assign({key:e.key},o.props)):null;const{labelField:a}=r,{key:l,level:s,isGroup:c}=e,d=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:s,root:s===0,isGroup:c});return e.children?e.isGroup?v(vo,J(d,po,{tmNode:e,tmNodes:e.children,key:l})):v(uo,J(d,go,{key:l,rawNodes:o[r.childrenField],tmNodes:e.children,tmNode:e})):v(mo,J(d,fo,{key:l,tmNode:e}))}const he=[C("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],pe=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],xo=C([u("menu",`
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
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",pe)]),y("selected",[$(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),y("child-active",[$(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),$("border-bottom: 2px solid var(--n-border-color-horizontal);",pe)]),u("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),y("collapsed",[u("menu-item-content",[y("selected",[C("&::before",`
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
 `)]),U("disabled",[U("selected, child-active",[C("&:focus-within",he)]),y("selected",[$(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),y("child-active",[$(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),y("selected",[$(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),$(null,he)]),m("icon",`
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
 `,[Oe({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
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
 `)]);function $(e,r){return[y("hover",e,r),C("&:hover",e,r)]}const bo=Object.assign(Object.assign({},F.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Io=N({name:"Menu",props:bo,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=Z(e),n=F("Menu","-menu",xo,eo,e,r),a=T(oo,null),l=I(()=>{var f;const{collapsed:b}=e;if(b!==void 0)return b;if(a){const{collapseModeRef:t,collapsedRef:g}=a;if(t.value==="width")return(f=g.value)!==null&&f!==void 0?f:!1}return!1}),s=I(()=>{const{keyField:f,childrenField:b,disabledField:t}=e;return qe(e.items||e.options,{getIgnored(g){return we(g)},getChildren(g){return g[b]},getDisabled(g){return g[t]},getKey(g){var S;return(S=g[f])!==null&&S!==void 0?S:g.name}})}),c=I(()=>new Set(s.value.treeNodes.map(f=>f.key))),{watchProps:d}=e,h=K(null);d!=null&&d.includes("defaultValue")?de(()=>{h.value=e.defaultValue}):h.value=e.defaultValue;const P=se(e,"value"),w=me(P,h),p=K([]),R=()=>{p.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(w.value,{includeSelf:!1}).keyPath};d!=null&&d.includes("defaultExpandedKeys")?de(R):R();const H=Ge(e,["expandedNames","expandedKeys"]),x=me(H,p),z=I(()=>s.value.treeNodes),A=I(()=>s.value.getPath(w.value).keyPath);B(V,{props:e,mergedCollapsedRef:l,mergedThemeRef:n,mergedValueRef:w,mergedExpandedKeysRef:x,activePathRef:A,mergedClsPrefixRef:r,isHorizontalRef:I(()=>e.mode==="horizontal"),invertedRef:se(e,"inverted"),doSelect:X,toggleExpand:D});function X(f,b){const{"onUpdate:value":t,onUpdateValue:g,onSelect:S}=e;g&&_(g,f,b),t&&_(t,f,b),S&&_(S,f,b),h.value=f}function M(f){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:S}=e;b&&_(b,f),t&&_(t,f),g&&_(g,f),S&&_(S,f),p.value=f}function D(f){const b=Array.from(x.value),t=b.findIndex(g=>g===f);if(~t)b.splice(t,1);else{if(e.accordion&&c.value.has(f)){const g=b.findIndex(S=>c.value.has(S));g>-1&&b.splice(g,1)}b.push(f)}M(b)}const O=f=>{const b=s.value.getPath(f!=null?f:w.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(x.value),g=new Set([...t,...b]);e.accordion&&c.value.forEach(S=>{g.has(S)&&!b.includes(S)&&g.delete(S)}),M(Array.from(g))},ae=I(()=>{const{inverted:f}=e,{common:{cubicBezierEaseInOut:b},self:t}=n.value,{borderRadius:g,borderColorHorizontal:S,fontSize:He,itemHeight:Ae,dividerColor:Se}=t,i={"--n-divider-color":Se,"--n-bezier":b,"--n-font-size":He,"--n-border-color-horizontal":S,"--n-border-radius":g,"--n-item-height":Ae};return f?(i["--n-group-text-color"]=t.groupTextColorInverted,i["--n-color"]=t.colorInverted,i["--n-item-text-color"]=t.itemTextColorInverted,i["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,i["--n-item-text-color-active"]=t.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=t.itemIconColorInverted,i["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=t.arrowColorInverted,i["--n-arrow-color-hover"]=t.arrowColorHoverInverted,i["--n-arrow-color-active"]=t.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=t.itemColorHoverInverted,i["--n-item-color-active"]=t.itemColorActiveInverted,i["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=t.groupTextColor,i["--n-color"]=t.color,i["--n-item-text-color"]=t.itemTextColor,i["--n-item-text-color-hover"]=t.itemTextColorHover,i["--n-item-text-color-active"]=t.itemTextColorActive,i["--n-item-text-color-child-active"]=t.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,i["--n-item-icon-color"]=t.itemIconColor,i["--n-item-icon-color-hover"]=t.itemIconColorHover,i["--n-item-icon-color-active"]=t.itemIconColorActive,i["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=t.arrowColor,i["--n-arrow-color-hover"]=t.arrowColorHover,i["--n-arrow-color-active"]=t.arrowColorActive,i["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,i["--n-arrow-color-child-active"]=t.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,i["--n-item-color-hover"]=t.itemColorHover,i["--n-item-color-active"]=t.itemColorActive,i["--n-item-color-active-hover"]=t.itemColorActiveHover,i["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),i}),L=o?ee("menu",I(()=>e.inverted?"a":"b"),ae,e):void 0;return{mergedClsPrefix:r,controlledExpandedKeys:H,uncontrolledExpanededKeys:p,mergedExpandedKeys:x,uncontrolledValue:h,mergedValue:w,activePath:A,tmNodes:z,mergedTheme:n,mergedCollapsed:l,cssVars:o?void 0:ae,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender,showOption:O}},render(){const{mergedClsPrefix:e,mode:r,themeClass:o,onRender:n}=this;return n==null||n(),v("div",{role:r==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${r}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>le(a,this.$props)))}});const zo=N({components:{NLayout:lo,NLayoutHeader:so,NMenu:Io},setup(){const e=T("axios"),r=Le(),o=ke(),n=document.cookie.replace(/(?:(?:^|.*;\s*)meowforestToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),a="https://vue3-course-api.hexschool.io/api/user/check";e.defaults.headers.common.Authorization=n,e.post(a).then(c=>{console.log(c),c.data.success||(window.$notification.warning({content:"Plz Login!",duration:2e3}),o.push("/login"))}).catch(c=>{console.log(c)});const l=()=>{const c="https://vue3-course-api.hexschool.io/logout";e.post(c).then(d=>{d.data.success&&(window.$notification.success({content:"Logout Success!",duration:2e3}),o.push("/login"))})};return{route:r,menuOptions:[{label:()=>v(Be,{to:"/admin/products"},{default:()=>"Products list"}),key:"parent1"},{label:()=>v("a",{onclick:l},{default:()=>"Logout"}),key:"parent2"}],logo:Me}}}),yo={class:"tw-h-screen tw-relative"},wo=["src"],Ho={key:0,class:"tips shadow tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2"};function Ao(e,r,o,n,a,l){const s=q("n-menu"),c=q("n-layout-header"),d=q("RouterView"),h=q("n-layout");return ve(),ue("div",yo,[k(h,{position:"absolute"},{default:G(()=>[k(c,{class:"tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16",bordered:""},{default:G(()=>[Ee("img",{src:e.logo,alt:"Meow Forest",height:"28"},null,8,wo),k(s,{mode:"horizontal",options:e.menuOptions,style:{"--n-font-size":"16px"}},null,8,["options"])]),_:1}),k(h,{"has-sider":"",position:"absolute",style:{top:"64px"}},{default:G(()=>[k(h,{"content-style":"padding: 24px;",class:"bg-primary bg-paw"},{default:G(()=>[e.route.path==="/admin/"?(ve(),ue("div",Ho," Please Click Menu ! ")):Fe("",!0),k(d)]),_:1})]),_:1})]),_:1})])}const Oo=Ke(zo,[["render",Ao],["__scopeId","data-v-72a50f6a"]]);export{Oo as default};
