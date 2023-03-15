import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";import{S as q,aN as C,U as N,V as h,a8 as y,a9 as w,bO as F,bP as Y,P as L,W as G,$ as Q,X as R,G as W,Z as X,K as Z,ab as J,D as d,ad as ee,y as P,az as oe,bI as te,aA as M,c as g,d as B,h as re,w as i,f as u,j as n,i as b,t as v,N as ae,r as k,z,b as le,e as ne,F as se}from"./index.3fd88bf0.js";import{b as O,a as ie,c as de}from"./Space.d27d828b.js";import{N as S}from"./Tag.84f44ec2.js";import{a as D}from"./api.da915127.js";import"./use-merged-state.c6a94a1b.js";import"./Dropdown.6dd8e1e7.js";import"./use-compitable.8772025a.js";import"./Input.d2ef21e4.js";const ce=t=>{const{textColor2:e,cardColor:o,modalColor:r,popoverColor:_,dividerColor:f,borderRadius:l,fontSize:s,hoverColor:p}=t;return{textColor:e,color:o,colorHover:p,colorModal:r,colorHoverModal:C(r,p),colorPopover:_,colorHoverPopover:C(_,p),borderColor:f,borderColorModal:C(r,f),borderColorPopover:C(_,f),borderRadius:l,fontSize:s}},me={name:"List",common:q,self:ce},ue=me,fe=N([h("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[y("show-divider",[h("list-item",[N("&:not(:last-child)",[w("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),y("clickable",[h("list-item",`
 cursor: pointer;
 `)]),y("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),y("hoverable",[h("list-item",`
 border-radius: var(--n-border-radius);
 `,[N("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[w("divider",`
 background-color: transparent;
 `)])])]),y("bordered, hoverable",[h("list-item",`
 padding: 12px 20px;
 `),w("header, footer",`
 padding: 12px 20px;
 `)]),w("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[N("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),h("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("prefix",`
 margin-right: 20px;
 flex: 0;
 `),w("suffix",`
 margin-left: 20px;
 flex: 0;
 `),w("main",`
 flex: 1;
 `),w("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),F(h("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Y(h("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),pe=Object.assign(Object.assign({},R.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),I=ee("n-list"),be=L({name:"List",props:pe,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:o,mergedRtlRef:r}=G(t),_=Q("List",r,e),f=R("List","-list",fe,ue,t,e);W(I,{showDividerRef:X(t,"showDivider"),mergedClsPrefixRef:e});const l=Z(()=>{const{common:{cubicBezierEaseInOut:p},self:{fontSize:x,textColor:a,color:c,colorModal:m,colorPopover:j,borderColor:E,borderColorModal:V,borderColorPopover:A,borderRadius:H,colorHover:$,colorHoverModal:U,colorHoverPopover:K}}=f.value;return{"--n-font-size":x,"--n-bezier":p,"--n-text-color":a,"--n-color":c,"--n-border-radius":H,"--n-border-color":E,"--n-border-color-modal":V,"--n-border-color-popover":A,"--n-color-modal":m,"--n-color-popover":j,"--n-color-hover":$,"--n-color-hover-modal":U,"--n-color-hover-popover":K}}),s=o?J("list",void 0,l,t):void 0;return{mergedClsPrefix:e,rtlEnabled:_,cssVars:o?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:o,onRender:r}=this;return r==null||r(),d("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},e.header?d("div",{class:`${o}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?d("div",{class:`${o}-list__footer`},e.footer()):null)}}),ve=L({name:"ListItem",setup(){const t=P(I,null);return t||oe("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return d("li",{class:`${e}-list-item`},t.prefix?d("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?d("div",{class:`${e}-list-item__main`},t):null,t.suffix?d("div",{class:`${e}-list-item__suffix`},t.suffix()):null,this.showDivider&&d("div",{class:`${e}-list-item__divider`}))}}),ge={components:{NCard:te,NButton:M,NDataTable:O,NList:be,NListItem:ve,NTag:S},props:{data:{type:Object,default(){return{}}}},setup(){const t=P("$filter");return{filter:t,columns:[{title:"Product Name",key:"product[title]"},{title:"Price",key:"product[price]"},{title:"Qty",key:"qty",render(e){return d("span",`${e.qty} / ${e.product.unit}`)}},{title:"Total",key:"total",render(e){return d("span",t.currency(e.total))}},{title:"Coupon",key:"coupon[code]"}]}}},_e={class:"md:tw-flex"},he=u("p",{class:"tw-text-primary tw-text-xl tw-font-bold md:tw-mb-2"},"User Info",-1),we=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Name",-1),xe=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Email",-1),ye=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Phone",-1),Ce=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Address",-1),Ne=u("p",{class:"tw-text-primary tw-text-xl tw-font-bold md:tw-mb-2"},"Order Info",-1),ke=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Order at",-1),Me=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Shipping",-1),Pe=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Paid",-1),ze=u("span",{class:"tw-font-bold tw-w-1/4 tw-inline-block"},"Message",-1),De=u("span",{class:"tw-w-1/4 tw-inline-block"},"Total",-1),Te={class:"tw-text-right tw-mt-4"};function Le(t,e,o,r,_,f){const l=g("NListItem"),s=g("NList"),p=g("NTag"),x=g("NDataTable"),a=g("NButton"),c=g("NCard");return B(),re(c,{style:{"max-width":"95%",width:"800px"},title:"Order No. "+o.data.id,bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:i(()=>[u("section",_e,[n(s,{class:"tw-flex-1"},{default:i(()=>[he,n(l,null,{default:i(()=>[we,b(v(o.data.user.name),1)]),_:1}),n(l,null,{default:i(()=>[xe,b(v(o.data.user.email),1)]),_:1}),n(l,null,{default:i(()=>[ye,b(v(o.data.user.tel),1)]),_:1}),n(l,null,{default:i(()=>[Ce,b(v(o.data.user.address),1)]),_:1})]),_:1}),n(s,{class:"tw-flex-1 tw-mt-6 md:tw-mt-auto"},{default:i(()=>[Ne,n(l,null,{default:i(()=>[ke,b(v(r.filter.date(o.data.create_at*1e3)),1)]),_:1}),n(l,null,{default:i(()=>[Me,b(v(o.data.user.shipping_method),1)]),_:1}),n(l,null,{default:i(()=>[Pe,n(p,{bordered:!1,type:o.data.is_paid?"success":"",size:"small",style:{"--n-height":"21.5px"},class:"tw-mr-1"},{default:i(()=>[b(v(o.data.is_paid?"Yes":"No"),1)]),_:1},8,["type"]),b(" "+v(o.data.user.payment_method==="atm"?"ATM":"Credit")+" "+v(o.data.paid_date?"/ "+r.filter.date(o.data.paid_date*1e3):""),1)]),_:1}),n(l,null,{default:i(()=>[ze,b(v(o.data.message?o.data.message:"-"),1)]),_:1}),n(l,{class:"tw-text-second tw-text-base tw-font-bold"},{default:i(()=>[De,b("$ "+v(r.filter.currency(Math.ceil(o.data.total)+o.data.user.shipping_money)),1)]),_:1})]),_:1})]),n(x,{class:"tw-mt-6",bordered:!1,columns:r.columns,data:Object.values(o.data.products),pagination:!1},null,8,["columns","data"]),u("div",Te,[n(a,{onClick:e[0]||(e[0]=m=>t.$emit("closeModal",!1))},{default:i(()=>[b("Close")]),_:1})])]),_:1},8,["title"])}const Re=T(ge,[["render",Le]]),Be={components:{OrderModal:Re,NSpace:ie,NDataTable:O,NModal:ae,NPagination:de},setup(){const t=P("$filter"),e=k(!1),o=k(!1),r=k(!1),_=k({}),f=z({current:1,total:2}),l=z({data:[]}),s=async()=>{e.value=!0;try{const a=await D.getAdminData("orders",f.current);e.value=!1,a.data.success&&(l.data=a.data.orders,f.total=a.data.pagination.total_pages)}catch(a){e.value=!1,window.$message.error(a.toString())}};le(()=>{s()});const p=async a=>{e.value=!0;try{const c=await D.delAdminData("order",a.id);e.value=!1,window.$notification.success({content:c.data.message,duration:1500}),s()}catch(c){e.value=!1,window.$message.error(c.toString())}};return{loading:e,showModal:o,isNew:r,temp:_,tableData:l,pagination:f,columns:(({editList:a,clickDel:c})=>[{title:"Create Date",key:"create_at",render(m){return d("span",t.date(m.create_at*1e3))}},{title:"Name",key:"user[name]"},{title:"Email",key:"user[email]"},{title:"Total",key:"total",render(m){return d("span",t.currency(Math.ceil(m.total)+m.user.shipping_money))}},{title:"Paid",key:"is_paid",render(m){return d(S,{type:m.is_paid===!0?"success":"",bordered:!1},{default:()=>m.is_paid===!0?"Yes":"No"})}},{title:"Action",key:"actions",render(m){return d("div",null,[d(M,{type:"primary",size:"small",onClick:()=>a(m),class:"tw-mr-2"},{default:()=>"View"}),d(M,{size:"small",onClick:()=>c(m)},{default:()=>"Del"})])}}])({editList(a){_.value=a,r.value=!1,o.value=!0},clickDel(a){window.$dialog.warning({title:"Confirm Delete ?",positiveText:"Sure !",negativeText:"No",blockScroll:!1,onPositiveClick:()=>{p(a)}})}}),pageChange(a){f.current=a,s()}}}};function Oe(t,e,o,r,_,f){const l=g("NDataTable"),s=g("NPagination"),p=g("NSpace"),x=g("OrderModal"),a=g("NModal");return B(),ne(se,null,[n(p,{vertical:"",size:12},{default:i(()=>[n(l,{bordered:!1,columns:r.columns,data:r.tableData.data,pagination:!1,loading:r.loading},null,8,["columns","data","loading"]),n(s,{class:"tw-justify-center",page:r.pagination.current,"onUpdate:page":[e[0]||(e[0]=c=>r.pagination.current=c),r.pageChange],"page-count":r.pagination.total},null,8,["page","page-count","onUpdate:page"])]),_:1}),n(a,{show:r.showModal,"onUpdate:show":e[2]||(e[2]=c=>r.showModal=c),"mask-closable":!0},{default:i(()=>[n(x,{data:r.temp,onCloseModal:e[1]||(e[1]=c=>r.showModal=c)},null,8,["data"])]),_:1},8,["show"])],64)}const Ke=T(Be,[["render",Oe]]);export{Ke as default};
