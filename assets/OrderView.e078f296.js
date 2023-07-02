import{S as N}from"./ShopLayout.1fb991ac.js";import{af as B,a as $,u as I,r as v,o as M,c as D,d as r,i as x,w as T,g as _,e as c,f as t,j as a,t as s,k as m,m as h,n as g,F as V,h as A,p as P,q as j}from"./index.b8e1bcd1.js";import{a as F}from"./api.a81b7417.js";import{u as L}from"./global.6d707793.js";import{_ as R}from"./plugin-vueexport-helper.2444895f.js";import"./TheHeader.9db50ab0.js";const E="/meowforest/assets/thx.f90faec0.png";const o=i=>(P("data-v-5a4ae6de"),i=i(),j(),i),U={key:0},q=o(()=>t("img",{src:E,class:"tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto",alt:"thank you!"},null,-1)),G={class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4"},z={class:"tw-text-notice tw-border-notice tw-border tw-border-solid tw-text-sm tw-rounded-full tw-px-2 tw-ml-1"},H={class:"tw-text-right tw-font-bold tw-text-primary tw-my-2 tw-mr-4"},X=o(()=>t("br",{class:"tw-block md:tw-hidden"},null,-1)),Y={class:"md:tw-grid tw-grid-cols-2 tw-px-4 tw-leading-7"},J=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Order Total",-1)),K={class:"tw-text-notice"},Q=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Order Date",-1)),W=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Shipping Method",-1)),Z=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Payment Method",-1)),tt={key:0,class:"tw-text-primary tw-border-primary tw-border tw-border-solid tw-shadow-inner tw-rounded-xl tw-font-bold tw-col-span-2 md:tw-flex tw-items-center tw-py-3 tw-mt-2"},et={class:"tw-text-lg tw-text-center md:tw-px-8"},st={class:"tw-grid tw-gap-1 tw-text-center md:tw-text-left tw-my-4 md:tw-my-0"},ot=o(()=>t("span",null,"Bank Code : 333 (Meow Bank)",-1)),at=o(()=>t("span",null,"Account : 00001234567890",-1)),nt={class:"tw-text-notice"},rt=o(()=>t("h4",{class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-2"},"Customer Details",-1)),lt={class:"md:tw-grid tw-grid-cols-2 tw-leading-7 tw-px-4"},ct=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Name",-1)),dt=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Email",-1)),it=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Phone",-1)),wt=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Address",-1)),pt={class:"tw-col-span-12 md:tw-col-span-6"},ut={class:"tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between"},_t={class:"tw-text-primary tw-font-bold"},mt=o(()=>t("span",{class:"tw-mr-4"},"X",-1)),ht={class:"tw-col-span-4 md:tw-col-span-2"},ft={class:"tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between"},yt={class:"tw-text-primary tw-font-bold"},vt={class:"tw-mt-5 tw-text-right"},xt={key:0,class:"tw-text-sm"},gt=o(()=>t("br",null,null,-1)),bt={class:"tw-text-sm"},kt=o(()=>t("br",null,null,-1)),Ct=o(()=>t("span",null,"Total / ",-1)),Ot={class:"tw-font-bold tw-text-primary tw-ml-1"},St={key:1,class:"tw-text-xl tw-font-bold tw-text-center tw-mb-6"},Nt={__name:"OrderView",setup(i){const f=B("$filter"),b=$(),k=I(),y=L(),e=v(null),w=v(!1),C=async l=>{y.loading=!0;const n=await F.getOrder(l);e.value=n.data.success?n.data.order:"No order found",y.loading=!1};M(async()=>{await C(k.path.split("/")[2])});const O=async()=>{const l=document.createElement("input");l.value=window.location.href,l.style.display="none",document.body.appendChild(l);try{await navigator.clipboard.writeText(l.value),window.$message.success("Copy URL Success !")}catch{window.$message.error("Copy URL Error !")}};return(l,n)=>{const p=D("FontAwesomeIcon");return r(),x(N,{process:2,breadcrumb:"Order Finish",nextBtn:"Back To Home",onOnGoNext:n[1]||(n[1]=u=>_(b).push("/"))},{content:T(()=>{var u;return[e.value!==null?(r(),c("div",U,[q,t("h4",G,[a("Order Details "),t("span",z,s(e.value.is_paid?"Paid":"Unpaid"),1)]),t("p",H,[a("Order No. "+s(e.value.create_at)+" ",1),X,t("a",{onClick:O,class:"tw-bg-primary tw-rounded-full tw-text-sm tw-text-white tw-py-1 tw-px-3 tw-cursor-pointer"},[m(p,{icon:["far","copy"],class:"tw-mr-2"}),a("COPY URL ")])]),t("section",Y,[t("div",null,[J,a(),t("span",K,"$"+s(Math.ceil(e.value.total)+e.value.user.shipping_money),1)]),t("div",null,[Q,a(" "+s(_(f).date(e.value.create_at*1e3)),1)]),t("div",null,[W,a(" "+s(e.value.user.shipping_method),1)]),t("div",null,[Z,a(" "+s(e.value.user.payment_method==="atm"?"ATM transfer":"Credit ****"+e.value.user.card.slice(-4)),1),((u=e.value.user)==null?void 0:u.payment_method)==="creditcard"?(r(),x(p,{key:0,icon:["far","credit-card"],class:"tw-opacity-40 tw-ml-1"})):h("",!0)]),e.value.user.payment_method==="atm"?(r(),c("div",tt,[t("p",et,[m(p,{icon:["fas","cat"]}),a(" ATM transfer Info")]),t("p",st,[ot,at,t("span",nt,"Deadline : "+s(_(f).date(e.value.create_at*1e3,3,!1)+" 23:00"),1)])])):h("",!0)]),rt,t("section",lt,[t("div",null,[ct,a(" "+s(e.value.user.name),1)]),t("div",null,[dt,a(" "+s(e.value.user.email),1)]),t("div",null,[it,a(" "+s(e.value.user.tel),1)]),t("div",null,[wt,a(" "+s(e.value.user.address),1)])]),t("h4",{onClick:n[0]||(n[0]=d=>w.value=!w.value),class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-1 tw-flex tw-justify-between tw-items-center tw-cursor-pointer"},[a(" Products Detail "),t("p",{class:g({"fa-rotate-180":!w.value})},[m(p,{icon:["fas","angle-up"]})],2)]),t("section",{class:g([w.value?"tw-h-auto ":"tw-h-0","tw-overflow-hidden tw-px-4"])},[(r(!0),c(V,null,A(e.value.products,(d,S)=>(r(),c("div",{key:S,class:"tw-grid tw-grid-cols-12 tw-gap-y-4 tw-items-center tw-py-4 tw-border-b tw-border-solid tw-border-gray-200"},[t("span",pt,s(d.product.title),1),t("span",ut,[t("span",_t,"$"+s(d.product.price),1),mt]),t("span",ht,s(d.qty),1),t("span",ft,[a(" ="),t("span",yt,"$"+s(d.total),1)])]))),128)),t("p",vt,[e.value.user.discount>0?(r(),c("span",xt,[a("Discount / -"+s(e.value.user.discount),1),gt])):h("",!0),t("span",bt,"Shipping / "+s(e.value.user.shipping_money),1),kt,Ct,t("span",Ot,s("$"+(Math.ceil(e.value.total)+e.value.user.shipping_money)),1)])],2)])):(r(),c("div",St,"No order found"))]}),_:1})}}},Vt=R(Nt,[["__scopeId","data-v-5a4ae6de"]]);export{Vt as default};
