import{t as e}from"./api-eJfqKUCU.js";import{C as t,F as n,G as r,I as i,O as a,T as o,Tt as s,W as c,_ as l,at as u,d,f,i as p,l as m,p as h,st as g,tt as _,u as v,v as y,x as b,z as x}from"./runtime-core.esm-bundler-BljLEjaH.js";import{g as S,h as C}from"./useApi-BPuI6ZR9-D9zTzcBM.js";import{At as w,C as T,D as E,E as D,Et as O,F as k,K as A,L as j,Ot as M,P as N,R as P,S as F,T as I,Tt as L,U as R,_ as z,b as ee,c as B,h as V,i as te,kt as H,n as ne,t as re,w as ie,x as ae}from"./FadeInExpandTransition-CrPcGR7N.js";import{d as oe,i as se,n as ce,r as le,s as U,t as ue}from"./Dropdown-BMp2GxgQ.js";import{r as W,t as de}from"./misc-4N2_ecPi.js";import{l as G,n as K}from"./fade-in-scale-up.cssr-ZwO5ZA6H.js";import{t as fe}from"./use-merged-state-CGyPNwPg.js";import{t as pe}from"./use-compitable-BrttNGhj.js";import{c as me,m as q}from"./index-kOG9mZ4K.js";import{t as he}from"./logo-nxrLDz5V.js";import{t as ge}from"./plugin-vueexport-helper-BDNMzG2s.js";function _e(e,t,n,r){return{itemColorHoverInverted:`#0000`,itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:n,itemTextColorChildActiveInverted:n,itemTextColorChildActiveHoverInverted:n,itemTextColorActiveInverted:n,itemTextColorActiveHoverInverted:n,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:n,itemTextColorChildActiveHorizontalInverted:n,itemTextColorChildActiveHoverHorizontalInverted:n,itemTextColorActiveHorizontalInverted:n,itemTextColorActiveHoverHorizontalInverted:n,itemIconColorInverted:e,itemIconColorHoverInverted:n,itemIconColorActiveInverted:n,itemIconColorActiveHoverInverted:n,itemIconColorChildActiveInverted:n,itemIconColorChildActiveHoverInverted:n,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:n,itemIconColorActiveHorizontalInverted:n,itemIconColorActiveHoverHorizontalInverted:n,itemIconColorChildActiveHorizontalInverted:n,itemIconColorChildActiveHoverHorizontalInverted:n,arrowColorInverted:e,arrowColorHoverInverted:n,arrowColorActiveInverted:n,arrowColorActiveHoverInverted:n,arrowColorChildActiveInverted:n,arrowColorChildActiveHoverInverted:n,groupTextColorInverted:r}}function ve(e){let{borderRadius:t,textColor3:n,primaryColor:r,textColor2:i,textColor1:a,fontSize:o,dividerColor:s,hoverColor:c,primaryColorHover:l}=e;return{borderRadius:t,color:`#0000`,groupTextColor:n,itemColorHover:c,itemColorActive:D(r,{alpha:.1}),itemColorActiveHover:D(r,{alpha:.1}),itemColorActiveCollapsed:D(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:l,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:l,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:`42px`,arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:`#0000`,borderColorHorizontal:`#0000`,fontSize:o,dividerColor:s,..._e(`#BBB`,r,`#FFF`,`#AAA`)}}var ye=ae({name:`Menu`,common:I,peers:{Tooltip:le,Dropdown:se},self:ve});function be(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:E(r,s),siderToggleBarColorHover:E(r,c),__invertScrollbar:`true`}}var xe=ae({name:`Layout`,common:I,peers:{Scrollbar:ie},self:be}),Se=A(`n-layout-sider`),Ce={type:String,default:`static`},we=O(`layout`,`
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
`,[O(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),H(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Te={embedded:Boolean,position:Ce,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},Ee=A(`n-layout`);function De(e){return y({name:e?`LayoutContent`:`Layout`,props:{...F.props,...Te},setup(e){let t=_(null),n=_(null),{mergedClsPrefixRef:r,inlineThemeDisabled:a}=R(e),o=F(`Layout`,`-layout`,we,xe,e,r);function s(r,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(r):e.scrollTo(r,i))}else{let{value:e}=n;e&&e.scrollTo(r,i)}}i(Ee,e);let c=0,l=0,u=t=>{let n=t.target;c=n.scrollLeft,l=n.scrollTop,e.onScroll?.(t)};B(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=l,e.scrollLeft=c)}});let d={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},f={scrollTo:s},p=m(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=o.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),h=a?T(`layout`,m(()=>e.embedded?`e`:``),p,e):void 0;return{mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:d,mergedTheme:o,handleNativeElScroll:u,cssVars:a?void 0:p,themeClass:h?.themeClass,onRender:h?.onRender,...f}},render(){let{mergedClsPrefix:t,hasSider:r}=this;this.onRender?.();let i=r?this.hasSiderStyle:void 0,a=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return n(),h(`div`,{class:k(a),style:s(this.cssVars)},[this.nativeScrollbar?(n(),h(`div`,{key:0,ref:`scrollableElRef`,class:k([`${t}-layout-scroll-container`,this.contentClass]),style:s([this.contentStyle,i]),onScroll:this.handleNativeElScroll},[P(()=>this.$slots.default?.())],46,[`onScroll`])):(n(),d(ne,o({key:1},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),j(this.$slots),1040,[`onScroll`,`theme`,`themeOverrides`,`contentClass`,`contentStyle`]))],6)}})}var J=De(!1),Oe=O(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[H(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),H(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),ke={position:Ce,inverted:Boolean,bordered:Boolean},Ae=y({name:`LayoutHeader`,props:{...F.props,...ke},setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=R(e),r=F(`Layout`,`-layout-header`,Oe,xe,e,t),i=m(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?T(`layout-header`,m(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){let{mergedClsPrefix:e}=this;return this.onRender?.(),n(),h(`div`,{class:k([`${e}-layout-header`,this.themeClass,this.position&&`${e}-layout-header--${this.position}-positioned`,this.bordered&&`${e}-layout-header--bordered`]),style:s(this.cssVars)},[P(()=>this.$slots.default?.())],6)}}),Y=A(`n-menu`),je=A(`n-submenu`),X=A(`n-menu-item-group`),Me=[L(`&::before`,`background-color: var(--n-item-color-hover);`),M(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),M(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[L(`a`,`
 color: var(--n-item-text-color-hover);
 `),M(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],Ne=[M(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[L(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),M(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Pe=L([O(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[H(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[O(`submenu`,`margin: 0;`),O(`menu-item`,`margin: 0;`),O(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[L(`&::before`,`display: none;`),H(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),O(`menu-item-content`,[H(`selected`,[M(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[L(`a`,`color: var(--n-item-text-color-active-horizontal);`),M(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),H(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[O(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[L(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),M(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),M(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),w(`disabled`,[w(`selected, child-active`,[L(`&:focus-within`,Ne)]),H(`selected`,[Z(null,[M(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[L(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),M(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),H(`child-active`,[Z(null,[M(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[L(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),M(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),Z(`border-bottom: 2px solid var(--n-border-color-horizontal);`,Ne)]),O(`menu-item-content-header`,[L(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),w(`responsive`,[O(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),H(`collapsed`,[O(`menu-item-content`,[H(`selected`,[L(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),O(`menu-item-content-header`,`opacity: 0;`),M(`arrow`,`opacity: 0;`),M(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),O(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),O(`menu-item-content`,`
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
 `,[L(`> *`,`z-index: 1;`),L(`&::before`,`
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
 `),H(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),H(`collapsed`,[M(`arrow`,`transform: rotate(0);`)]),H(`selected`,[L(`&::before`,`background-color: var(--n-item-color-active);`),M(`arrow`,`color: var(--n-arrow-color-active);`),M(`icon`,`color: var(--n-item-icon-color-active);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[L(`a`,`color: var(--n-item-text-color-active);`),M(`extra`,`color: var(--n-item-text-color-active);`)])]),H(`child-active`,[O(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[L(`a`,`
 color: var(--n-item-text-color-child-active);
 `),M(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),M(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),M(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),w(`disabled`,[w(`selected, child-active`,[L(`&:focus-within`,Me)]),H(`selected`,[Z(null,[M(`arrow`,`color: var(--n-arrow-color-active-hover);`),M(`icon`,`color: var(--n-item-icon-color-active-hover);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[L(`a`,`color: var(--n-item-text-color-active-hover);`),M(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),H(`child-active`,[Z(null,[M(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),M(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),O(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[L(`a`,`color: var(--n-item-text-color-child-active-hover);`),M(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),H(`selected`,[Z(null,[L(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),Z(null,Me)]),M(`icon`,`
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
 `),M(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),O(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[L(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[L(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),M(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),O(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[O(`menu-item-content`,`
 height: var(--n-item-height);
 `),O(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[me({duration:`.2s`})])]),O(`menu-item-group`,[O(`menu-item-group-title`,`
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
 `)])]),O(`menu-tooltip`,[L(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),O(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Z(e,t){return[H(`hover`,e,t),L(`&:hover`,e,t)]}var Fe=y({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:r}=t(Y);return()=>r.value?null:(n(),h(`div`,{key:1,class:k(`${e.value}-menu-divider`)},null,2))}}),Ie=y({name:`ChevronDownFilled`,render(){return(()=>{let e=N(`f3af82a2aab086a5`);return e[0]||=v(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[v(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`})],-1)})()}}),Le=[`onClick`],Re=y({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:n}=t(Y);return{menuProps:n,style:m(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:m(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:a,expandIcon:o}}=this,c=r?r(t.rawNode):K(this.icon);return(()=>{let r=N(`7bb10afc6caf8fa4`);return n(),h(`div`,{onClick:e=>{this.onClick?.(e)},role:`none`,class:k([`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}]),style:s(this.style)},[P(()=>c&&(n(),h(`div`,{class:k(`${e}-menu-item-content__icon`),style:s(this.iconStyle),role:`none`},[P(()=>[c])],6))),v(`div`,{class:k(`${e}-menu-item-content-header`),role:`none`},[this.isEllipsisPlaceholder?(n(),h(p,{key:0},[P(()=>this.title)],64)):(n(),h(p,{key:1},[i?(n(),h(p,{key:0},[P(()=>i(t.rawNode))],64)):(n(),h(p,{key:1},[P(()=>K(this.title))],64))],64)),this.extra||a?(n(),h(`span`,{key:2,class:k(`${e}-menu-item-content-header__extra`)},[r[0]||=P(` `,-1),a?(n(),h(p,{key:0},[P(()=>a(t.rawNode))],64)):(n(),h(p,{key:1},[P(()=>K(this.extra))],64))],2)):P(()=>null)],2),this.showArrow?(n(),d(ee,{key:0,ariaHidden:!0,class:k(`${e}-menu-item-content__arrow`),clsPrefix:e},{default:()=>o?o(t.rawNode):(n(),d(Ie,{key:1}))},1032,[`class`,`clsPrefix`])):P(()=>null)],14,Le)})()}}),ze=8;function Q(e){let n=t(Y),{props:r,mergedCollapsedRef:i}=n,a=t(je,null),o=t(X,null),s=m(()=>r.mode===`horizontal`),c=m(()=>s.value?r.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),l=m(()=>Math.max(r.collapsedIconSize??r.iconSize,r.iconSize));return{dropdownPlacement:c,activeIconSize:m(()=>!s.value&&e.root&&i.value?r.collapsedIconSize??r.iconSize:r.iconSize),maxIconSize:l,paddingLeft:m(()=>{if(s.value)return;let{collapsedWidth:t,indent:n,rootIndent:c}=r,{root:u,isGroup:d}=e,f=c===void 0?n:c;return u?i.value?t/2-l.value/2:f:o&&typeof o.paddingLeftRef.value==`number`?i.value?t/2-l.value/2:n/2+o.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value==`number`?(d?n/2:n)+a.paddingLeftRef.value:0}),iconMarginRight:m(()=>{let{collapsedWidth:t,indent:n,rootIndent:a}=r,{value:o}=l,{root:c}=e;return s.value||!c||!i.value?ze:(a===void 0?n:a)+o+ze-(t+o)/2}),NMenu:n,NSubmenu:a,NMenuOptionGroup:o}}var $={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Be={...$,tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function},Ve=W(Be),He=y({name:`MenuOption`,props:Be,setup(e){let t=Q(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=m(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:z(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:z(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:i,nodeProps:a}}=this,s=a?.(r.rawNode);return n(),h(`div`,o(s,{role:`menuitem`,class:[`${e}-menu-item`,s?.class]}),[(n(),d(ce,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>i?i(r.rawNode):K(this.title),trigger:()=>(n(),d(Re,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick},null,8,[`tmNode`,`clsPrefix`,`paddingLeft`,`iconMarginRight`,`maxIconSize`,`activeIconSize`,`selected`,`title`,`extra`,`disabled`,`icon`,`onClick`]))},1032,[`theme`,`themeOverrides`,`placement`,`disabled`]))],16)}}),Ue={...$,tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}},We=W(Ue),Ge=y({name:`MenuOptionGroup`,props:Ue,setup(e){let r=Q(e),{NSubmenu:a}=r,s=m(()=>a?.mergedDisabledRef.value?!0:e.tmNode.disabled);i(X,{paddingLeftRef:r.paddingLeft,mergedDisabledRef:s});let{mergedClsPrefixRef:c,props:l}=t(Y);return function(){let{value:t}=c,i=r.paddingLeft.value,{nodeProps:a}=l,s=a?.(e.tmNode.rawNode);return(()=>{let r=N(`45eca6a63be5028b`);return n(),h(`div`,{class:k(`${t}-menu-item-group`),role:`group`},[v(`div`,o(s,{class:[`${t}-menu-item-group-title`,s?.class],style:[s?.style||``,i===void 0?``:`padding-left: ${i}px;`]}),[P(()=>K(e.title)),e.extra?(n(),h(p,{key:0},[r[0]||=P(` `,-1),P(()=>K(e.extra))],64)):P(()=>null)],16),v(`div`,null,[P(()=>e.tmNodes.map(e=>$e(e,l)))])],2)})()}}}),Ke=[`aria-expanded`,`id`],qe=[`aria-expanded`,`id`],Je={...$,rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean},Ye=W(Je),Xe=y({name:`Submenu`,props:Je,setup(e){let t=Q(e),{NMenu:n,NSubmenu:r}=t,{props:a,mergedCollapsedRef:o,mergedThemeRef:s}=n,c=m(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||a.disabled?!0:t}),l=_(!1);i(je,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:c}),i(X,null);function u(){let{onClick:t}=e;t&&t()}function d(){c.value||(o.value||n.toggleExpand(e.internalKey),u())}function f(e){l.value=e}return{menuProps:a,mergedTheme:s,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:l,paddingLeft:t.paddingLeft,mergedDisabled:c,mergedValue:n.mergedValueRef,childActive:z(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:m(()=>a.mode===`horizontal`?!1:o.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:m(()=>!c.value&&(a.mode===`horizontal`||o.value)),handlePopoverShowChange:f,handleClick:d}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:r}}=this,i=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:r,mergedDisabled:i,maxIconSize:a,activeIconSize:s,title:c,childActive:l,icon:u,handleClick:f,menuProps:{nodeProps:p},dropdownShow:m,iconMarginRight:g,tmNode:_,mergedClsPrefix:v,isEllipsisPlaceholder:y,extra:b}=this,x=p?.(_.rawNode);return n(),h(`div`,o(x,{class:[`${v}-menu-item`,x?.class],role:`menuitem`}),[(n(),d(Re,{tmNode:_,paddingLeft:t,collapsed:r,disabled:i,iconMarginRight:g,maxIconSize:a,activeIconSize:s,title:c,extra:b,showArrow:!e,childActive:l,clsPrefix:v,icon:u,hover:m,onClick:f,isEllipsisPlaceholder:y},null,8,[`tmNode`,`paddingLeft`,`collapsed`,`disabled`,`iconMarginRight`,`maxIconSize`,`activeIconSize`,`title`,`extra`,`showArrow`,`childActive`,`clsPrefix`,`icon`,`hover`,`onClick`,`isEllipsisPlaceholder`]))],16)},a=()=>(n(),d(re,null,{default:()=>{let{tmNodes:t,collapsed:r}=this;return r?null:(n(),h(`div`,{key:1,class:k(`${e}-submenu-children`),role:`menu`},[P(()=>t.map(e=>$e(e,this.menuProps)))],2))}},1024));return this.root?(n(),d(ue,o({key:2,size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>(n(),h(`div`,{class:k(`${e}-submenu`),role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},[P(()=>i()),this.isHorizontal?P(()=>null):(n(),h(p,{key:1},[P(()=>a())],64))],10,Ke))},1040,[`themeOverrides`,`theme`,`value`,`disabled`,`placement`,`keyField`,`labelField`,`childrenField`,`onUpdateShow`,`options`,`onSelect`,`inverted`,`renderIcon`,`renderLabel`])):(n(),h(`div`,{key:3,class:k(`${e}-submenu`),role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},[P(()=>i()),P(()=>a())],10,qe))}});function Ze(e){return e.type===`divider`||e.type===`render`}function Qe(e){return e.type===`divider`}function $e(e,t){let{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(Ze(r))return Qe(r)?(n(),d(Fe,o({key:e.key},r.props),null,16)):null;let{labelField:a}=t,{key:s,level:c,isGroup:l}=e,u={...r,title:r.title||r[a],extra:r.titleExtra||r.extra,key:s,internalKey:s,level:c,root:c===0,isGroup:l};return e.children?e.isGroup?b(Ge,G(u,We,{tmNode:e,tmNodes:e.children,key:s})):b(Xe,G(u,Ye,{key:s,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):b(He,G(u,Ve,{key:s,tmNode:e}))}var et={...F.props,options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array},tt=y({name:`Menu`,inheritAttrs:!1,props:et,setup(e){let{mergedClsPrefixRef:r,inlineThemeDisabled:a}=R(e),o=F(`Menu`,`-menu`,Pe,ye,e,r),s=t(Se,null),l=m(()=>{let{collapsed:t}=e;if(t!==void 0)return t;if(s){let{collapseModeRef:e,collapsedRef:t}=s;if(e.value===`width`)return t.value??!1}return!1}),f=m(()=>{let{keyField:t,childrenField:n,disabledField:r}=e;return U(e.items||e.options,{getIgnored(e){return Ze(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(e){return e[t]??e.name}})}),p=m(()=>new Set(f.value.treeNodes.map(e=>e.key))),{watchProps:h}=e,g=_(null);h?.includes(`defaultValue`)?c(()=>{g.value=e.defaultValue}):g.value=e.defaultValue;let v=u(e,`value`),y=fe(v,g),b=_([]),x=()=>{b.value=e.defaultExpandAll?f.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||f.value.getPath(y.value,{includeSelf:!1}).keyPath};h?.includes(`defaultExpandedKeys`)?c(x):x();let S=pe(e,[`expandedNames`,`expandedKeys`]),C=fe(S,b),w=m(()=>f.value.treeNodes),E=m(()=>f.value.getPath(y.value).keyPath);i(Y,{props:e,mergedCollapsedRef:l,mergedThemeRef:o,mergedValueRef:y,mergedExpandedKeysRef:C,activePathRef:E,mergedClsPrefixRef:r,isHorizontalRef:m(()=>e.mode===`horizontal`),invertedRef:u(e,`inverted`),doSelect:D,toggleExpand:k});function D(t,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=e;i&&V(i,t,n),r&&V(r,t,n),a&&V(a,t,n),g.value=t}function O(t){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=e;n&&V(n,t),r&&V(r,t),i&&V(i,t),a&&V(a,t),b.value=t}function k(t){let n=Array.from(C.value),r=n.findIndex(e=>e===t);if(~r)n.splice(r,1);else{if(e.accordion&&p.value.has(t)){let e=n.findIndex(e=>p.value.has(e));e>-1&&n.splice(e,1)}n.push(t)}O(n)}let A=t=>{let n=f.value.getPath(t??y.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(C.value),i=new Set([...r,...n]);e.accordion&&p.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),O(Array.from(i))},j=m(()=>{let{inverted:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=o.value,{borderRadius:i,borderColorHorizontal:a,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":a,"--n-border-radius":i,"--n-item-height":c};return t?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),M=a?T(`menu`,m(()=>e.inverted?`a`:`b`),j,e):void 0,N=de(),P=_(null),I=_(null),L=!0,z=()=>{L?L=!1:P.value?.sync({showAllItemsBeforeCalculate:!0})};function ee(){return document.getElementById(N)}let B=_(-1);function te(t){B.value=e.options.length-t}function H(e){e||(B.value=-1)}let ne=m(()=>{let t=B.value;return{children:t===-1?[]:e.options.slice(t)}}),re=m(()=>{let{childrenField:t,disabledField:n,keyField:r}=e;return U([ne.value],{getIgnored(e){return Ze(e)},getChildren(e){return e[t]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),ie=m(()=>U([{}]).treeNodes[0]);function ae(){if(B.value===-1)return n(),d(Xe,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:ie.value,domId:N,isEllipsisPlaceholder:!0},null,8,[`tmNode`,`domId`]);let e=re.value.treeNodes[0],t=E.value,r=!!e.children?.some(e=>t.includes(e.key));return n(),d(Xe,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:r,tmNode:e,domId:N,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0},null,8,[`virtualChildActive`,`tmNode`,`domId`,`rawNodes`,`tmNodes`])}return{mergedClsPrefix:r,controlledExpandedKeys:S,uncontrolledExpanededKeys:b,mergedExpandedKeys:C,uncontrolledValue:g,mergedValue:y,activePath:E,tmNodes:w,mergedTheme:o,mergedCollapsed:l,cssVars:a?void 0:j,themeClass:M?.themeClass,overflowRef:P,counterRef:I,updateCounter:()=>{},onResize:z,onUpdateOverflow:H,onUpdateCount:te,renderCounter:ae,getCounter:ee,onRender:M?.onRender,showOption:A,deriveResponsiveState:z}},render(){let{mergedClsPrefix:e,mode:t,themeClass:r,onRender:i}=this;i?.();let a=()=>this.tmNodes.map(e=>$e(e,this.$props)),s=t===`horizontal`&&this.responsive,c=()=>b(`div`,o(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,r,`${e}-menu--${t}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),s?(n(),d(oe,{key:2,ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:a,counter:this.renderCounter},1032,[`onUpdateOverflow`,`getCounter`,`onUpdateCount`,`updateCounter`])):a());return s?(n(),d(te,{key:3,onResize:this.onResize},{default:c},1032,[`onResize`])):c()}}),nt={class:`tw:h-screen tw:relative`},rt={key:0,class:`tips tw:shadow-main tw:relative tw:max-w-full tw:w-60 tw:ml-auto tw:bg-white tw:rounded-xl tw:text-center tw:p-2`},it=ge({__name:`HomeAdmin`,setup(t){let i=C(),o=S(),s=async()=>{try{(await e.check()).data.success||(window.$notification.warning({content:`Plz Login!`,duration:2e3}),o.push(`/login`))}catch(e){window.$message.error(e.toString())}},c=async()=>{try{(await e.logout()).data.success&&(document.cookie=`meowForestToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT`,window.$notification.success({content:`Logout Success!`,duration:2e3}),o.push(`/login`))}catch(e){window.$message.error(e.toString())}};a(()=>{s()});let u=[{label:()=>b(q,{to:`/admin/products`},{default:()=>`Products list`}),key:`product`},{label:()=>b(q,{to:`/admin/orders`},{default:()=>`Orders`}),key:`order`},{label:()=>b(q,{to:`/admin/coupons`},{default:()=>`Coupons`}),key:`coupon`},{label:()=>b(`a`,{onclick:c},{default:()=>`Logout`}),key:`logout`}];return(e,t)=>{let a=x(`RouterView`);return n(),h(`div`,nt,[l(g(J),{position:`absolute`},{default:r(()=>[l(g(Ae),{class:`tw:flex tw:items-center tw:justify-between tw:px-6 tw:h-16`,bordered:``},{default:r(()=>[l(g(q),{to:`/`},{default:r(()=>[...t[0]||=[v(`img`,{src:he,alt:`Meow Forest`,height:`28`},null,-1)]]),_:1}),l(g(tt),{mode:`horizontal`,options:u,style:{"--n-font-size":`16px`}})]),_:1}),l(g(J),{"has-sider":``,position:`absolute`,style:{top:`64px`}},{default:r(()=>[l(g(J),{"content-style":`padding: 24px;`,class:`tw:bg-primary bg-paw`},{default:r(()=>[g(i).path===`/admin/`||g(i).path===`/admin`?(n(),h(`div`,rt,` Please Click Menu ! `)):f(``,!0),l(a)]),_:1})]),_:1})]),_:1})])}}},[[`__scopeId`,`data-v-9cd06997`]]);export{it as default};