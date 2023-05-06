import{v as de,aT as $e,J as R,r as V,H as _e,a2 as Ce,W as A,af as ke,ay as G,C as h,aC as Be,ao as Ne,aQ as ie,X as ue,a9 as L,b as Ve,E as Ge,Z as ee,bF as Ie,bw as ne,ar as Fe,bR as Ee,bz as oe,O as Me,P as ze,Q as re,T as f,ai as ae,V as Y,S as B,U as se,Y as ce,a8 as Pe,a4 as M,bK as N,$ as De,bu as q,a0 as z,ak as Te,al as We,a3 as J}from"./index.71761e43.js";import{f as je,a as Oe,b as Le}from"./FormItem.617ccefc.js";import{b as Ae}from"./Dropdown.bbe159b9.js";import{g as He}from"./Space.748eff66.js";import{u as Ue}from"./use-merged-state.23476e1d.js";function Ke(e){if(typeof e=="number")return{"":e.toString()};const n={};return e.split(/ +/).forEach(o=>{if(o==="")return;const[t,i]=o.split(":");i===void 0?n[""]=t:n[t]=i}),n}function D(e,n){var o;if(e==null)return;const t=Ke(e);if(n===void 0)return t[""];if(typeof n=="string")return(o=t[n])!==null&&o!==void 0?o:t[""];if(Array.isArray(n)){for(let i=n.length-1;i>=0;--i){const r=n[i];if(r in t)return t[r]}return t[""]}else{let i,r=-1;return Object.keys(t).forEach(a=>{const s=Number(a);!Number.isNaN(s)&&n>=s&&s>=r&&(r=s,i=t[a])}),i}}function Xe(e){var n;const o=(n=e.dirs)===null||n===void 0?void 0:n.find(({dir:t})=>t===de);return!!(o&&o.value===!1)}const Qe={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Ye(e){return`(min-width: ${e}px)`}const T={};function qe(e=Qe){if(!$e)return R(()=>[]);if(typeof window.matchMedia!="function")return R(()=>[]);const n=V({}),o=Object.keys(e),t=(i,r)=>{i.matches?n.value[r]=!0:n.value[r]=!1};return o.forEach(i=>{const r=e[i];let a,s;T[r]===void 0?(a=window.matchMedia(Ye(r)),a.addEventListener?a.addEventListener("change",p=>{s.forEach(u=>{u(p,i)})}):a.addListener&&a.addListener(p=>{s.forEach(u=>{u(p,i)})}),s=new Set,T[r]={mql:a,cbs:s}):(a=T[r].mql,s=T[r].cbs),s.add(t),a.matches&&s.forEach(p=>{p(a,i)})}),_e(()=>{o.forEach(i=>{const{cbs:r}=T[e[i]];r.has(t)&&r.delete(t)})}),R(()=>{const{value:i}=n;return o.filter(r=>i[r])})}const le=1,fe=Ce("n-grid"),he=1,te={span:{type:[Number,String],default:he},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Je=Be(te),Ze=A({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:te,setup(){const{isSsrRef:e,xGapRef:n,itemStyleRef:o,overflowRef:t,layoutShiftDisabledRef:i}=ke(fe),r=Ne();return{overflow:t,itemStyle:o,layoutShiftDisabled:i,mergedXGap:R(()=>G(n.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=he,privateShow:s=!0,privateColStart:p=void 0,privateOffset:u=0}=r.vnode.props,{value:y}=n,w=G(y||0);return{display:s?"":"none",gridColumn:`${p!=null?p:`span ${a}`} / span ${a}`,marginLeft:u?`calc((100% - (${a} - 1) * ${w}) / ${a} * ${u} + ${w} * ${u})`:""}}}},render(){var e,n;if(this.layoutShiftDisabled){const{span:o,offset:t,mergedXGap:i}=this;return h("div",{style:{gridColumn:`span ${o} / span ${o}`,marginLeft:t?`calc((100% - (${o} - 1) * ${i}) / ${o} * ${t} + ${i} * ${t})`:""}},this.$slots)}return h("div",{style:[this.itemStyle,this.deriveStyle()]},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e,{overflow:this.overflow}))}}),et=Object.assign(Object.assign({},te),Le),pt=A({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:et,setup(){const e=V(null);return{formItemInstRef:e,validate:(...t)=>{const{value:i}=e;if(i)return i.validate(...t)},restoreValidation:()=>{const{value:t}=e;if(t)return t.restoreValidation()}}},render(){return h(Ze,ie(this.$.vnode.props||{},Je),{default:()=>{const e=ie(this.$props,je);return h(Oe,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}}),tt={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},pe=24,Z="__ssr__",it={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:pe},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},vt=A({name:"Grid",inheritAttrs:!1,props:it,setup(e){const{mergedClsPrefixRef:n,mergedBreakpointsRef:o}=ue(e),t=/^\d+$/,i=V(void 0),r=qe((o==null?void 0:o.value)||tt),a=L(()=>!!(e.itemResponsive||!t.test(e.cols.toString())||!t.test(e.xGap.toString())||!t.test(e.yGap.toString()))),s=R(()=>{if(!!a.value)return e.responsive==="self"?i.value:r.value}),p=L(()=>{var v;return(v=Number(D(e.cols.toString(),s.value)))!==null&&v!==void 0?v:pe}),u=L(()=>D(e.xGap.toString(),s.value)),y=L(()=>D(e.yGap.toString(),s.value)),w=v=>{i.value=v.contentRect.width},d=v=>{Ae(w,v)},m=V(!1),b=R(()=>{if(e.responsive==="self")return d}),g=V(!1),$=V();return Ve(()=>{const{value:v}=$;v&&v.hasAttribute(Z)&&(v.removeAttribute(Z),g.value=!0)}),Ge(fe,{layoutShiftDisabledRef:ee(e,"layoutShiftDisabled"),isSsrRef:g,itemStyleRef:ee(e,"itemStyle"),xGapRef:u,overflowRef:m}),{isSsr:!Ie,contentEl:$,mergedClsPrefix:n,style:R(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:G(e.xGap),rowGap:G(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${p.value}, minmax(0, 1fr))`,columnGap:G(u.value),rowGap:G(y.value)}),isResponsive:a,responsiveQuery:s,responsiveCols:p,handleResize:b,overflow:m}},render(){if(this.layoutShiftDisabled)return h("div",ne({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var n,o,t,i,r,a,s;this.overflow=!1;const p=Ee(He(this)),u=[],{collapsed:y,collapsedRows:w,responsiveCols:d,responsiveQuery:m}=this;p.forEach(c=>{var E,_,S,C;if(((E=c==null?void 0:c.type)===null||E===void 0?void 0:E.__GRID_ITEM__)!==!0)return;if(Xe(c)){const x=oe(c);x.props?x.props.privateShow=!1:x.props={privateShow:!1},u.push({child:x,rawChildSpan:0});return}c.dirs=((_=c.dirs)===null||_===void 0?void 0:_.filter(({dir:x})=>x!==de))||null;const k=oe(c),l=Number((C=D((S=k.props)===null||S===void 0?void 0:S.span,m))!==null&&C!==void 0?C:le);l!==0&&u.push({child:k,rawChildSpan:l})});let b=0;const g=(n=u[u.length-1])===null||n===void 0?void 0:n.child;if(g!=null&&g.props){const c=(o=g.props)===null||o===void 0?void 0:o.suffix;c!==void 0&&c!==!1&&(b=(i=(t=g.props)===null||t===void 0?void 0:t.span)!==null&&i!==void 0?i:le,g.props.privateSpan=b,g.props.privateColStart=d+1-b,g.props.privateShow=(r=g.props.privateShow)!==null&&r!==void 0?r:!0)}let $=0,v=!1;for(const{child:c,rawChildSpan:E}of u){if(v&&(this.overflow=!0),!v){const _=Number((s=D((a=c.props)===null||a===void 0?void 0:a.offset,m))!==null&&s!==void 0?s:0),S=Math.min(E+_,d);if(c.props?(c.props.privateSpan=S,c.props.privateOffset=_):c.props={privateSpan:S,privateOffset:_},y){const C=$%d;S+C>d&&($+=d-C),S+$+b>w*d?v=!0:$+=S}}v&&(c.props?c.props.privateShow!==!0&&(c.props.privateShow=!1):c.props={privateShow:!1})}return h("div",ne({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Z]:this.isSsr||void 0},this.$attrs),u.map(({child:c})=>c))};return this.isResponsive&&this.responsive==="self"?h(Fe,{onResize:this.handleResize},{default:e}):e()}}),nt={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},ot=e=>{const{primaryColor:n,opacityDisabled:o,borderRadius:t,textColor3:i}=e,r="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},nt),{iconColor:i,textColor:"white",loadingColor:n,opacityDisabled:o,railColor:r,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:t,railBorderRadiusMedium:t,railBorderRadiusLarge:t,buttonBorderRadiusSmall:t,buttonBorderRadiusMedium:t,buttonBorderRadiusLarge:t,boxShadowFocus:`0 0 0 2px ${ze(n,{alpha:.2})}`})},rt={name:"Switch",common:Me,self:ot},at=rt,st=re("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[f("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),f("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),f("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),re("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[ae({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),f("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),f("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),f("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Y("&:focus",[f("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),B("round",[f("rail","border-radius: calc(var(--n-rail-height) / 2);",[f("button","border-radius: calc(var(--n-button-height) / 2);")])]),se("disabled",[se("icon",[B("rubber-band",[B("pressed",[f("rail",[f("button","max-width: var(--n-button-width-pressed);")])]),f("rail",[Y("&:active",[f("button","max-width: var(--n-button-width-pressed);")])]),B("active",[B("pressed",[f("rail",[f("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),f("rail",[Y("&:active",[f("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),B("active",[f("rail",[f("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),f("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[f("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[ae()]),f("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),B("active",[f("rail","background-color: var(--n-rail-color-active);")]),B("loading",[f("rail",`
 cursor: wait;
 `)]),B("disabled",[f("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),lt=Object.assign(Object.assign({},ce.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let W;const bt=A({name:"Switch",props:lt,setup(e){W===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?W=CSS.supports("width","max(1px)"):W=!1:W=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ue(e),t=ce("Switch","-switch",st,at,e,n),i=Pe(e),{mergedSizeRef:r,mergedDisabledRef:a}=i,s=V(e.defaultValue),p=ee(e,"value"),u=Ue(p,s),y=R(()=>u.value===e.checkedValue),w=V(!1),d=V(!1),m=R(()=>{const{railStyle:l}=e;if(!!l)return l({focused:d.value,checked:y.value})});function b(l){const{"onUpdate:value":x,onChange:j,onUpdateValue:O}=e,{nTriggerFormInput:H,nTriggerFormChange:U}=i;x&&J(x,l),O&&J(O,l),j&&J(j,l),s.value=l,H(),U()}function g(){const{nTriggerFormFocus:l}=i;l()}function $(){const{nTriggerFormBlur:l}=i;l()}function v(){e.loading||a.value||(u.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue))}function c(){d.value=!0,g()}function E(){d.value=!1,$(),w.value=!1}function _(l){e.loading||a.value||l.key===" "&&(u.value!==e.checkedValue?b(e.checkedValue):b(e.uncheckedValue),w.value=!1)}function S(l){e.loading||a.value||l.key===" "&&(l.preventDefault(),w.value=!0)}const C=R(()=>{const{value:l}=r,{self:{opacityDisabled:x,railColor:j,railColorActive:O,buttonBoxShadow:H,buttonColor:U,boxShadowFocus:ve,loadingColor:be,textColor:me,iconColor:ge,[M("buttonHeight",l)]:I,[M("buttonWidth",l)]:we,[M("buttonWidthPressed",l)]:ye,[M("railHeight",l)]:F,[M("railWidth",l)]:P,[M("railBorderRadius",l)]:Se,[M("buttonBorderRadius",l)]:xe},common:{cubicBezierEaseInOut:Re}}=t.value;let K,X,Q;return W?(K=`calc((${F} - ${I}) / 2)`,X=`max(${F}, ${I})`,Q=`max(${P}, calc(${P} + ${I} - ${F}))`):(K=G((N(F)-N(I))/2),X=G(Math.max(N(F),N(I))),Q=N(F)>N(I)?P:G(N(P)+N(I)-N(F))),{"--n-bezier":Re,"--n-button-border-radius":xe,"--n-button-box-shadow":H,"--n-button-color":U,"--n-button-width":we,"--n-button-width-pressed":ye,"--n-button-height":I,"--n-height":X,"--n-offset":K,"--n-opacity-disabled":x,"--n-rail-border-radius":Se,"--n-rail-color":j,"--n-rail-color-active":O,"--n-rail-height":F,"--n-rail-width":P,"--n-width":Q,"--n-box-shadow-focus":ve,"--n-loading-color":be,"--n-text-color":me,"--n-icon-color":ge}}),k=o?De("switch",R(()=>r.value[0]),C,e):void 0;return{handleClick:v,handleBlur:E,handleFocus:c,handleKeyup:_,handleKeydown:S,mergedRailStyle:m,pressed:w,mergedClsPrefix:n,mergedValue:u,checked:y,mergedDisabled:a,cssVars:o?void 0:C,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:o,mergedRailStyle:t,onRender:i,$slots:r}=this;i==null||i();const{checked:a,unchecked:s,icon:p,"checked-icon":u,"unchecked-icon":y}=r,w=!(q(p)&&q(u)&&q(y));return h("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,o&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:t},z(a,d=>z(s,m=>d||m?h("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),d),h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),m)):null)),h("div",{class:`${e}-switch__button`},z(p,d=>z(u,m=>z(y,b=>h(Te,null,{default:()=>this.loading?h(We,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(m||d)?h("div",{class:`${e}-switch__button-icon`,key:m?"checked-icon":"icon"},m||d):!this.checked&&(b||d)?h("div",{class:`${e}-switch__button-icon`,key:b?"unchecked-icon":"icon"},b||d):null})))),z(a,d=>d&&h("div",{key:"checked",class:`${e}-switch__checked`},d)),z(s,d=>d&&h("div",{key:"unchecked",class:`${e}-switch__unchecked`},d)))))}});export{vt as N,Ze as a,pt as b,bt as c};
