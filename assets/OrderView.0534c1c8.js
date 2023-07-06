import{af as S,a as N,u as B,r as v,o as M,c as I,d as l,i as g,w as D,g as _,e as d,f as t,j as a,t as s,k as T,l as m,p as h,n as x,F as V,h as A,q as P,s as j}from"./index.b92c22bd.js";import{_ as F}from"./ShopLayout.4fefdd2a.js";import{a as R}from"./api.59f3b1c7.js";import{u as E}from"./global.07552095.js";import{_ as L}from"./plugin-vueexport-helper.2444895f.js";import"./TheHeader.6fbf11ff.js";const U="/meowforest/assets/thx.f90faec0.png";const o=i=>(P("data-v-d4e60da8"),i=i(),j(),i),q={key:0},G=o(()=>t("img",{src:U,class:"tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto",alt:"thank you!"},null,-1)),z={class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4"},H={class:"tw-text-notice tw-border-notice tw-border tw-border-solid tw-text-sm tw-rounded-full tw-px-2 tw-ml-1"},X={class:"tw-text-right tw-font-bold tw-text-primary tw-my-2 tw-mr-4"},Y=o(()=>t("br",{class:"tw-block md:tw-hidden"},null,-1)),J=["onClick"],K={class:"md:tw-grid tw-grid-cols-2 tw-px-4 tw-leading-7"},Q=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Order Total",-1)),W={class:"tw-text-notice"},Z=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Order Date",-1)),tt=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Shipping Method",-1)),et=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Payment Method",-1)),st={key:0,class:"tw-text-primary tw-border-primary tw-border tw-border-solid tw-shadow-inner tw-rounded-xl tw-font-bold tw-col-span-2 md:tw-flex tw-items-center tw-py-3 tw-mt-2"},ot={class:"tw-text-lg tw-text-center md:tw-px-8"},at={class:"tw-grid tw-gap-1 tw-text-center md:tw-text-left tw-my-4 md:tw-my-0"},nt=o(()=>t("span",null,"Bank Code : 333 (Meow Bank)",-1)),rt=o(()=>t("span",null,"Account : 00001234567890",-1)),lt={class:"tw-text-notice"},dt=o(()=>t("h4",{class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-2"},"Customer Details",-1)),ct={class:"md:tw-grid tw-grid-cols-2 tw-leading-7 tw-px-4"},it=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Name",-1)),wt=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Email",-1)),pt=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Phone",-1)),ut=o(()=>t("span",{class:"tw-font-bold tw-mr-1"},"Address",-1)),_t={class:"tw-col-span-12 md:tw-col-span-6"},mt={class:"tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between"},ht={class:"tw-text-primary tw-font-bold"},ft=o(()=>t("span",{class:"tw-mr-4"},"X",-1)),yt={class:"tw-col-span-4 md:tw-col-span-2"},vt={class:"tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between"},gt={class:"tw-text-primary tw-font-bold"},xt={class:"tw-mt-5 tw-text-right"},bt={key:0,class:"tw-text-sm"},kt=o(()=>t("br",null,null,-1)),Ct={class:"tw-text-sm"},$t=o(()=>t("br",null,null,-1)),Ot=o(()=>t("span",null,"Total / ",-1)),St={class:"tw-font-bold tw-text-primary tw-ml-1"},Nt={key:1,class:"tw-text-xl tw-font-bold tw-text-center tw-mb-6"},Bt={__name:"OrderView",setup(i){const f=S("$filter"),b=N(),k=B(),y=E(),e=v(null),w=v(!1),C=async r=>{try{y.loading=!0;const n=await R.getOrder(r);e.value=n.data.success?n.data.order:"No order found",y.loading=!1}catch(n){window.$message.error(n.toString())}};M(async()=>{try{await C(k.path.split("/")[2])}catch(r){window.$message.error(r.toString())}});const $=async()=>{const r=document.createElement("input");r.value=window.location.href,r.style.display="none",document.body.appendChild(r);try{await navigator.clipboard.writeText(r.value),window.$message.success("Copy URL Success !")}catch{window.$message.error("Copy URL Error !")}};return(r,n)=>{const p=I("FontAwesomeIcon");return l(),g(F,{process:2,breadcrumb:"Order Finish",nextBtn:"Back To Home",onOnGoNext:n[1]||(n[1]=u=>_(b).push("/"))},{content:D(()=>{var u;return[e.value!==null?(l(),d("div",q,[G,t("h4",z,[a("Order Details "),t("span",H,s(e.value.is_paid?"Paid":"Unpaid"),1)]),t("p",X,[a("Order No. "+s(e.value.create_at)+" ",1),Y,t("a",{href:"\u201D#\u201D",onClick:T($,["prevent"]),class:"tw-bg-primary tw-rounded-full tw-text-sm tw-text-white tw-py-1 tw-px-3 tw-cursor-pointer"},[m(p,{icon:["far","copy"],class:"tw-mr-2"}),a("COPY URL ")],8,J)]),t("section",K,[t("div",null,[Q,a(),t("span",W,"$"+s(Math.ceil(e.value.total)+e.value.user.shipping_money),1)]),t("div",null,[Z,a(" "+s(_(f).date(e.value.create_at*1e3)),1)]),t("div",null,[tt,a(" "+s(e.value.user.shipping_method),1)]),t("div",null,[et,a(" "+s(e.value.user.payment_method==="atm"?"ATM transfer":"Credit ****"+e.value.user.card.slice(-4)),1),((u=e.value.user)==null?void 0:u.payment_method)==="creditCard"?(l(),g(p,{key:0,icon:["far","credit-card"],class:"tw-opacity-40 tw-ml-1"})):h("",!0)]),e.value.user.payment_method==="atm"?(l(),d("div",st,[t("p",ot,[m(p,{icon:["fas","cat"]}),a(" ATM transfer Info")]),t("p",at,[nt,rt,t("span",lt,"Deadline : "+s(_(f).date(e.value.create_at*1e3,3,!1)+" 23:00"),1)])])):h("",!0)]),dt,t("section",ct,[t("div",null,[it,a(" "+s(e.value.user.name),1)]),t("div",null,[wt,a(" "+s(e.value.user.email),1)]),t("div",null,[pt,a(" "+s(e.value.user.tel),1)]),t("div",null,[ut,a(" "+s(e.value.user.address),1)])]),t("h4",{onClick:n[0]||(n[0]=c=>w.value=!w.value),class:"tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-1 tw-flex tw-justify-between tw-items-center tw-cursor-pointer"},[a(" Products Detail "),t("p",{class:x({"fa-rotate-180":!w.value})},[m(p,{icon:["fas","angle-up"]})],2)]),t("section",{class:x([w.value?"tw-h-auto ":"tw-h-0","tw-overflow-hidden tw-px-4"])},[(l(!0),d(V,null,A(e.value.products,(c,O)=>(l(),d("div",{key:`order${O}`,class:"tw-grid tw-grid-cols-12 tw-gap-y-4 tw-items-center tw-py-4 tw-border-b tw-border-solid tw-border-gray-200"},[t("span",_t,s(c.product.title),1),t("span",mt,[t("span",ht,"$"+s(c.product.price),1),ft]),t("span",yt,s(c.qty),1),t("span",vt,[a(" ="),t("span",gt,"$"+s(c.total),1)])]))),128)),t("p",xt,[e.value.user.discount>0?(l(),d("span",bt,[a("Discount / -"+s(e.value.user.discount),1),kt])):h("",!0),t("span",Ct,"Shipping / "+s(e.value.user.shipping_money),1),$t,Ot,t("span",St,s("$"+(Math.ceil(e.value.total)+e.value.user.shipping_money)),1)])],2)])):(l(),d("div",Nt,"No order found"))]}),_:1})}}},Pt=L(Bt,[["__scopeId","data-v-d4e60da8"]]);export{Pt as default};
