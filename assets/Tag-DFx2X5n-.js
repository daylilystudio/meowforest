import{F as e,I as t,Tt as n,at as r,d as i,l as a,p as o,tt as s,u as c,v as l}from"./runtime-core.esm-bundler-BljLEjaH.js";import{At as u,C as d,E as f,Et as p,F as m,K as h,Ot as g,R as _,S as v,T as y,Tt as b,U as x,h as S,j as C,jt as w,kt as T,l as E,m as D}from"./FadeInExpandTransition-CrPcGR7N.js";import{p as O}from"./Button-C5EPWtN6.js";import{p as k}from"./index-kOG9mZ4K.js";var A={closeIconSizeTiny:`12px`,closeIconSizeSmall:`12px`,closeIconSizeMedium:`14px`,closeIconSizeLarge:`14px`,closeSizeTiny:`16px`,closeSizeSmall:`16px`,closeSizeMedium:`18px`,closeSizeLarge:`18px`,padding:`0 7px`,closeMargin:`0 0 0 4px`};function j(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:p,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,borderRadiusSmall:_,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:w,heightMedium:T,closeColorHover:E,closeColorPressed:D,buttonColor2Hover:O,buttonColor2Pressed:k,fontWeightStrong:j}=e;return{...A,closeBorderRadius:_,heightTiny:S,heightSmall:C,heightMedium:w,heightLarge:T,borderRadius:_,opacityDisabled:d,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:O,colorPressedCheckable:k,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:p,colorBordered:`rgb(250, 250, 252)`,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,closeColorHover:E,closeColorPressed:D,borderPrimary:`1px solid ${f(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:f(i,{alpha:.12}),colorBorderedPrimary:f(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:f(i,{alpha:.12}),closeColorPressedPrimary:f(i,{alpha:.18}),borderInfo:`1px solid ${f(a,{alpha:.3})}`,textColorInfo:a,colorInfo:f(a,{alpha:.12}),colorBorderedInfo:f(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:f(a,{alpha:.12}),closeColorPressedInfo:f(a,{alpha:.18}),borderSuccess:`1px solid ${f(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:f(o,{alpha:.12}),colorBorderedSuccess:f(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:f(o,{alpha:.12}),closeColorPressedSuccess:f(o,{alpha:.18}),borderWarning:`1px solid ${f(s,{alpha:.35})}`,textColorWarning:s,colorWarning:f(s,{alpha:.15}),colorBorderedWarning:f(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:f(s,{alpha:.12}),closeColorPressedWarning:f(s,{alpha:.18}),borderError:`1px solid ${f(c,{alpha:.23})}`,textColorError:c,colorError:f(c,{alpha:.1}),colorBorderedError:f(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:f(c,{alpha:.12}),closeColorPressedError:f(c,{alpha:.18})}}var M={name:`Tag`,common:y,self:j},N={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},P=p(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[T(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),g(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),g(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),T(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),T(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),T(`icon, avatar`,[T(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),T(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),T(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[u(`disabled`,[b(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[u(`checked`,`color: var(--n-text-color-hover-checkable);`)]),b(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[u(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),T(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[u(`disabled`,[b(`&:hover`,`background-color: var(--n-color-checked-hover);`),b(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),F=[`onClick`,`onMouseenter`,`onMouseleave`],I={...v.props,...N,bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function},L=h(`n-tag`),R=l({name:`Tag`,props:I,slots:Object,setup(e){let n=s(null),{mergedBorderedRef:i,mergedClsPrefixRef:o,inlineThemeDisabled:c,mergedRtlRef:l,mergedComponentPropsRef:u}=x(e),f=a(()=>e.size||u?.value?.Tag?.size||`medium`),p=v(`Tag`,`-tag`,P,M,e,o);t(L,{roundRef:r(e,`round`)});function m(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function h(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&S(n,t)}}let g={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},_=E(`Tag`,l,o),y=a(()=>{let{type:t,color:{color:n,textColor:r}={}}=e,a=f.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:u,textColorCheckable:d,textColorHoverCheckable:m,textColorPressedCheckable:h,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:y,colorChecked:b,colorCheckedHover:x,colorCheckedPressed:S,closeBorderRadius:T,fontWeightStrong:E,[w(`colorBordered`,t)]:D,[w(`closeSize`,a)]:O,[w(`closeIconSize`,a)]:k,[w(`fontSize`,a)]:A,[w(`height`,a)]:j,[w(`color`,t)]:M,[w(`textColor`,t)]:N,[w(`border`,t)]:P,[w(`closeIconColor`,t)]:F,[w(`closeIconColorHover`,t)]:I,[w(`closeIconColorPressed`,t)]:L,[w(`closeColorHover`,t)]:R,[w(`closeColorPressed`,t)]:z}}=p.value,B=C(c);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":n||(i.value?D:M),"--n-color-checkable":_,"--n-color-checked":b,"--n-color-checked-hover":x,"--n-color-checked-pressed":S,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":y,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":u,"--n-padding":s,"--n-text-color":r||N,"--n-text-color-checkable":d,"--n-text-color-checked":g,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":h}}),b=c?d(`tag`,a(()=>{let t=``,{type:n,color:{color:r,textColor:a}={}}=e;return t+=n[0],t+=f.value[0],r&&(t+=`a${O(r)}`),a&&(t+=`b${O(a)}`),i.value&&(t+=`c`),t}),y,e):void 0;return{...g,rtlEnabled:_,mergedClsPrefix:o,contentRef:n,mergedBordered:i,handleClick:m,handleCloseClick:h,cssVars:c?void 0:y,themeClass:b?.themeClass,onRender:b?.onRender}},render(){let{mergedClsPrefix:t,rtlEnabled:r,closable:a,color:{borderColor:s}={},round:l,onRender:u,$slots:d}=this;u?.();let f=D(d.avatar,n=>n&&(e(),o(`div`,{class:m(`${t}-tag__avatar`)},[_(()=>n)],2))),p=D(d.icon,n=>n&&(e(),o(`div`,{class:m(`${t}-tag__icon`)},[_(()=>n)],2)));return e(),o(`div`,{class:m([`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:r,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:l,[`${t}-tag--avatar`]:f,[`${t}-tag--icon`]:p,[`${t}-tag--closable`]:a}]),style:n(this.cssVars),onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},[_(()=>p||f),c(`span`,{class:m(`${t}-tag__content`),ref:`contentRef`},[_(()=>this.$slots.default?.())],2),!this.checkable&&a?(e(),i(k,{key:0,clsPrefix:t,class:m(`${t}-tag__close`),disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:l,isButtonTag:this.internalCloseIsButtonTag,absolute:!0},null,8,[`clsPrefix`,`class`,`disabled`,`onClick`,`focusable`,`round`,`isButtonTag`])):_(()=>null),!this.checkable&&this.mergedBordered?(e(),o(`div`,{key:2,class:m(`${t}-tag__border`),style:n({borderColor:s})},null,6)):_(()=>null)],46,F)}});export{R as t};