import{c as _,d as o,e as n,F as h,g as x,f as t,n as b,l as w,h as u,i as c,t as l,u as M,j as p,w as D,av as y}from"./index.3fd88bf0.js";import{T as H}from"./TheHeader.24b3d165.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";import{u as R}from"./global.efb0bcc0.js";const k="/meowforest/assets/processbar1.fefa11d6.png",S="/meowforest/assets/processbar2.2a580aad.png",B="/meowforest/assets/processbar3.94f99cad.png",V={props:{process:{type:Number,default:0}},setup(){return{bar1:k,bar2:S,bar3:B,list:[{txt:"\u8CFC\u7269\u8ECA",en:"Cart",img:k},{txt:"\u8CC7\u6599\u586B\u5BEB",en:"Checkout",img:S},{txt:"\u8A02\u8CFC\u5B8C\u6210",en:"Finish",img:B}]}}},A={class:"md:tw-w-4/5 tw-mx-auto tw-grid tw-grid-cols-3 tw-gap-y-2 tw-justify-between tw-mt-4 tw-mb-8"},F=["src","alt"],G={class:"tw-bg-white"};function P(i,m,s,e,N,v){const d=_("font-awesome-icon");return o(),n("section",A,[(o(!0),n(h,null,x(e.list,(a,r)=>(o(),n("div",{key:r,class:"tw-text-center"},[t("img",{src:a.img,alt:a.txt,class:"tw-w-3/5 md:tw-w-2/5"},null,8,F)]))),128)),(o(!0),n(h,null,x(e.list,(a,r)=>(o(),n("div",{key:a.txt,class:b([{"tw-text-primary tw-font-bold":s.process>r||s.process===r},"tw-relative tw-flex tw-flex-col tw-items-center tw-text-center"])},[r!==e.list.length-1?(o(),n("span",{key:0,class:b([s.process>r?"tw-bg-primary":"tw-bg-theme","tw-absolute tw-top-1.5 tw-left-1/2 tw-translate-y-px tw-translate-x-2 tw-h-0.5"]),style:{width:"94%"}},null,2)):w("",!0),t("span",G,[s.process<r?(o(),u(d,{key:0,icon:["far","circle"]})):w("",!0),s.process===r?(o(),u(d,{key:1,icon:["far","circle-dot"]})):w("",!0),s.process>r?(o(),u(d,{key:2,icon:["fas","circle-check"]})):w("",!0)]),c(" "+l(a.txt)+" ",1),t("span",null,l(a.en),1)],2))),128))])}const j=T(V,[["render",P]]),E={components:{TheHeader:H,TheProcessBar:j},props:{breadcrumb:{type:String,default:""},process:{type:Number,default:0},nextBtn:{type:String,default:""},nextBtnAllow:{type:Boolean,default:!0}},emits:["onGoNext"],setup(){const i=M(),m=R();return{route:i,globalStore:m}}},L={class:"container"},O={class:"tw-drop-shadow-main -tw-mt-24 tw-mb-4 tw-text-white"},Y={class:"tw-shadow-main tw-bg-white tw-rounded-2xl tw-mb-8 tw-p-4 sm:tw-p-6"},z=t("h5",{class:"tw-mt-8 tw-mb-3 sm:tw-mb-0"},"ORDER SUMMARY",-1),U={class:"tw-text-xl tw-text-right tw-font-bold"},q={class:"tw-mb-2"},I={class:"tw-ml-4 tw-text-primary"},J={key:0,class:"tw-mb-2"},K={class:"tw-ml-4 tw-text-primary"},Q={class:"tw-pb-4 tw-border-b tw-border-solid tw-border-theme"},W={class:"tw-ml-4 tw-text-primary"},X={class:"tw-mt-4"},Z={class:"tw-ml-4 tw-text-primary"};function $(i,m,s,e,N,v){var f,g;const d=_("TheHeader"),a=_("router-link"),r=_("TheProcessBar"),C=_("font-awesome-icon");return o(),n(h,null,[p(d),t("main",L,[t("div",O,[p(a,{to:"/",class:"tw-font-bold"},{default:D(()=>[c("Home")]),_:1}),c(" / "),t("span",null,l(s.breadcrumb),1)]),t("section",Y,[p(r,{process:s.process},null,8,["process"]),y(i.$slots,"content")]),((f=e.globalStore.cart.carts)==null?void 0:f.length)>0&&!e.route.path.match(/order/gi)?(o(),n(h,{key:0},[y(i.$slots,"order"),z,t("div",U,[t("p",q,[c("Your Basket "),t("span",I,"NTD. "+l(e.globalStore.cart.total),1)]),(g=e.globalStore.cart.carts[0])!=null&&g.coupon?(o(),n("p",J,[c("- Discount "),t("span",K,l(e.globalStore.cart.total-Math.ceil(e.globalStore.cart.final_total)),1)])):w("",!0),t("p",Q,[c("+ Shipping "),t("span",W,l(e.globalStore.shippingMoney),1)]),t("p",X,[c("Order Total "),t("span",Z,"NTD. "+l(Math.ceil(e.globalStore.cart.final_total)+e.globalStore.shippingMoney),1)])])],64)):w("",!0),s.nextBtn?(o(),n("a",{key:1,onClick:m[0]||(m[0]=tt=>i.$emit("onGoNext","")),class:b(["hover:tw-brightness-90 tw-bg-second tw-text-theme tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto",s.nextBtnAllow?"tw-cursor-pointer":"tw-cursor-not-allowed"])},[c(l(s.nextBtn)+" ",1),p(C,{icon:["fas","angle-right"]})],2)):w("",!0)])],64)}const nt=T(E,[["render",$]]);export{nt as S};
