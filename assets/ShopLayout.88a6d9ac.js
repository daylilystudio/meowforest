import{c as d,d as s,e as w,F as _,h as x,f as t,n as b,m as i,i as u,j as c,t as l,u as T,k as h,w as N,av as y}from"./index.a4b4a846.js";import{_ as v}from"./TheHeader.45e6ddbb.js";import{u as C}from"./global.1e98f780.js";import{_ as M}from"./plugin-vueexport-helper.2444895f.js";const D="/meowforest/assets/processbar1.fefa11d6.png",H="/meowforest/assets/processbar2.2a580aad.png",P="/meowforest/assets/processbar3.94f99cad.png",R={class:"md:tw-w-4/5 tw-mx-auto tw-grid tw-grid-cols-3 tw-gap-y-2 tw-justify-between tw-mt-4 tw-mb-8"},V=["src","alt"],A={class:"tw-bg-white"},F={__name:"TheProcessBar",props:{process:{type:Number,default:0}},setup(e){const m=e,a=[{txt:"\u8CFC\u7269\u8ECA",en:"Cart",img:D},{txt:"\u8CC7\u6599\u586B\u5BEB",en:"Checkout",img:H},{txt:"\u8A02\u8CFC\u5B8C\u6210",en:"Finish",img:P}];return(r,k)=>{const p=d("font-awesome-icon");return s(),w("section",R,[(s(),w(_,null,x(a,(n,o)=>t("div",{key:o,class:"tw-text-center"},[t("img",{src:n.img,alt:n.txt,class:"tw-w-3/5 md:tw-w-2/5"},null,8,V)])),64)),(s(),w(_,null,x(a,(n,o)=>t("div",{key:n.txt,class:b([{"tw-text-primary tw-font-bold":m.process>o||e.process===o},"tw-relative tw-flex tw-flex-col tw-items-center tw-text-center"])},[o!==a.length-1?(s(),w("span",{key:0,class:b([e.process>o?"tw-bg-primary":"tw-bg-theme","tw-absolute tw-top-1.5 tw-left-1/2 tw-translate-y-px tw-translate-x-2 tw-h-0.5"]),style:{width:"94%"}},null,2)):i("",!0),t("span",A,[e.process<o?(s(),u(p,{key:0,icon:["far","circle"]})):i("",!0),e.process===o?(s(),u(p,{key:1,icon:["far","circle-dot"]})):i("",!0),e.process>o?(s(),u(p,{key:2,icon:["fas","circle-check"]})):i("",!0)]),c(" "+l(n.txt)+" ",1),t("span",null,l(n.en),1)],2)),64))])}}},G={components:{TheHeader:v,TheProcessBar:F},props:{breadcrumb:{type:String,default:""},process:{type:Number,default:0},nextBtn:{type:String,default:""},nextBtnAllow:{type:Boolean,default:!0}},emits:["onGoNext"],setup(){const e=T(),m=C();return{route:e,globalStore:m}}},j={class:"container"},E={class:"tw-drop-shadow-main -tw-mt-24 tw-mb-4 tw-text-white"},L={class:"tw-shadow-main tw-bg-white tw-rounded-2xl tw-mb-8 tw-p-4 sm:tw-p-6"},O=t("h5",{class:"tw-mt-8 tw-mb-3 sm:tw-mb-0"},"ORDER SUMMARY",-1),Y={class:"tw-text-xl tw-text-right tw-font-bold"},z={class:"tw-mb-2"},U={class:"tw-ml-4 tw-text-primary"},q={key:0,class:"tw-mb-2"},I={class:"tw-ml-4 tw-text-primary"},J={class:"tw-pb-4 tw-border-b tw-border-solid tw-border-theme"},K={class:"tw-ml-4 tw-text-primary"},Q={class:"tw-mt-4"},W={class:"tw-ml-4 tw-text-primary"};function X(e,m,a,r,k,p){var f,g;const n=d("TheHeader"),o=d("router-link"),S=d("TheProcessBar"),B=d("font-awesome-icon");return s(),w(_,null,[h(n),t("main",j,[t("div",E,[h(o,{to:"/",class:"tw-font-bold"},{default:N(()=>[c("Home")]),_:1}),c(" / "),t("span",null,l(a.breadcrumb),1)]),t("section",L,[h(S,{process:a.process},null,8,["process"]),y(e.$slots,"content")]),((f=r.globalStore.cart.carts)==null?void 0:f.length)>0&&!r.route.path.match(/order/gi)?(s(),w(_,{key:0},[y(e.$slots,"order"),O,t("div",Y,[t("p",z,[c("Your Basket "),t("span",U,"NTD. "+l(r.globalStore.cart.total),1)]),(g=r.globalStore.cart.carts[0])!=null&&g.coupon?(s(),w("p",q,[c("- Discount "),t("span",I,l(r.globalStore.cart.total-Math.ceil(r.globalStore.cart.final_total)),1)])):i("",!0),t("p",J,[c("+ Shipping "),t("span",K,l(r.globalStore.shippingMoney),1)]),t("p",Q,[c("Order Total "),t("span",W,"NTD. "+l(Math.ceil(r.globalStore.cart.final_total)+r.globalStore.shippingMoney),1)])])],64)):i("",!0),a.nextBtn?(s(),w("a",{key:1,onClick:m[0]||(m[0]=Z=>e.$emit("onGoNext","")),class:b(["hover:tw-brightness-90 tw-bg-second tw-text-theme tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto",a.nextBtnAllow?"tw-cursor-pointer":"tw-cursor-not-allowed"])},[c(l(a.nextBtn)+" ",1),h(B,{icon:["fas","angle-right"]})],2)):i("",!0)])],64)}const st=M(G,[["render",X]]);export{st as S};
