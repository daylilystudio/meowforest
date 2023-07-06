import{c as b,d as o,e as l,F as u,h as k,f as t,n as x,p as i,i as f,j as c,t as w,u as N,l as p,w as S,av as B,g as a,k as $}from"./index.b92c22bd.js";import{_ as A}from"./TheHeader.6fbf11ff.js";import{u as C}from"./global.07552095.js";const F="/meowforest/assets/processBar1.fefa11d6.png",M="/meowforest/assets/processBar2.2a580aad.png",R="/meowforest/assets/processBar3.94f99cad.png",D={class:"md:tw-w-4/5 tw-mx-auto tw-grid tw-grid-cols-3 tw-gap-y-2 tw-justify-between tw-mt-4 tw-mb-8"},T=["src","alt"],I={class:"tw-bg-white"},L={__name:"TheProcessBar",props:{process:{type:Number,default:0}},setup(e){const h=e,d=[{txt:"\u8CFC\u7269\u8ECA",en:"Cart",img:F},{txt:"\u8CC7\u6599\u586B\u5BEB",en:"Checkout",img:M},{txt:"\u8A02\u8CFC\u5B8C\u6210",en:"Finish",img:R}];return(_,n)=>{const m=b("FontAwesomeIcon");return o(),l("section",D,[(o(),l(u,null,k(d,(r,s)=>t("div",{key:`processBar${s}`,class:"tw-text-center"},[t("img",{src:r.img,alt:r.txt,class:"tw-w-3/5 md:tw-w-2/5"},null,8,T)])),64)),(o(),l(u,null,k(d,(r,s)=>t("div",{key:r.txt,class:x([{"tw-text-primary tw-font-bold":h.process>s||e.process===s},"tw-relative tw-flex tw-flex-col tw-items-center tw-text-center"])},[s!==d.length-1?(o(),l("span",{key:0,class:x([e.process>s?"tw-bg-primary":"tw-bg-theme","tw-absolute tw-top-1.5 tw-left-1/2 tw-translate-y-px tw-translate-x-2 tw-h-0.5"]),style:{width:"94%"}},null,2)):i("",!0),t("span",I,[e.process<s?(o(),f(m,{key:0,icon:["far","circle"]})):i("",!0),e.process===s?(o(),f(m,{key:1,icon:["far","circle-dot"]})):i("",!0),e.process>s?(o(),f(m,{key:2,icon:["fas","circle-check"]})):i("",!0)]),c(" "+w(r.en),1)],2)),64))])}}},V={class:"container"},G={class:"tw-drop-shadow-main -tw-mt-24 tw-mb-4 tw-text-white"},j={class:"tw-shadow-main tw-bg-white tw-rounded-2xl tw-mb-8 tw-p-4 sm:tw-p-6"},E=t("h5",{class:"tw-mt-8 tw-mb-3 sm:tw-mb-0"},"ORDER SUMMARY",-1),O={class:"tw-text-xl tw-text-right tw-font-bold"},Y={class:"tw-mb-2"},z={class:"tw-ml-4 tw-text-primary"},H={key:0,class:"tw-mb-2"},P={class:"tw-ml-4 tw-text-primary"},U={class:"tw-pb-4 tw-border-b tw-border-solid tw-border-theme"},q={class:"tw-ml-4 tw-text-primary"},J={class:"tw-mt-4"},K={class:"tw-ml-4 tw-text-primary"},tt={__name:"ShopLayout",props:{breadcrumb:{type:String,default:""},process:{type:Number,default:0},nextBtn:{type:String,default:""},nextBtnAllow:{type:Boolean,default:!0}},emits:["onGoNext"],setup(e,{emit:h}){const d=e,_=N(),n=C();return(m,r)=>{var g,y;const s=b("RouterLink"),v=b("FontAwesomeIcon");return o(),l(u,null,[p(A),t("main",V,[t("div",G,[p(s,{to:"/",class:"tw-font-bold"},{default:S(()=>[c("Home")]),_:1}),c(" / "),t("span",null,w(d.breadcrumb),1)]),t("section",j,[p(L,{process:e.process},null,8,["process"]),B(m.$slots,"content")]),((g=a(n).cart.carts)==null?void 0:g.length)>0&&!a(_).path.match(/order/gi)?(o(),l(u,{key:0},[B(m.$slots,"order"),E,t("div",O,[t("p",Y,[c("Your Basket "),t("span",z,"NTD. "+w(a(n).cart.total),1)]),(y=a(n).cart.carts[0])!=null&&y.coupon?(o(),l("p",H,[c("- Discount "),t("span",P,w(a(n).cart.total-Math.ceil(a(n).cart.final_total)),1)])):i("",!0),t("p",U,[c("+ Shipping "),t("span",q,w(a(n).shippingMoney),1)]),t("p",J,[c("Order Total "),t("span",K,"NTD. "+w(Math.ceil(a(n).cart.final_total)+a(n).shippingMoney),1)])])],64)):i("",!0),e.nextBtn?(o(),l("a",{key:1,href:"\u201D#\u201D",onClick:r[0]||(r[0]=$(Q=>h("onGoNext",""),["prevent"])),class:x(["hover:tw-brightness-90 tw-bg-second tw-text-theme tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto",e.nextBtnAllow?"tw-cursor-pointer":"tw-cursor-not-allowed"])},[c(w(e.nextBtn)+" ",1),p(v,{icon:["fas","angle-right"]})],2)):i("",!0)])],64)}}};export{tt as _};