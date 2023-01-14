import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import{d as X,c as x,e as k,f as n,t as F,F as w,a as W,A as J,b as T,j as z,k as G,h as j,w as L,g as Y,s as P,p as Q,l as K,i as U}from"./index.becd6808.js";import{u as tt}from"./global.7623cf1c.js";import{g as V,$ as A,n as at,S as et,a as lt}from"./pagination.min.4ff0666d.js";const nt=X({props:{titletxt:{type:String,default:""},subtxt:{type:String,default:""}}}),st={class:"tw-text-center tw-tracking-wider tw-text-4xl md:tw-text-5xl tw-font-bold tw-mt-10"},ot={class:"text-second tw-text-center tw-font-bold tw-mb-10 tw-mt-2 tw-text-2xl md:tw-text-3xl"};function it(t,C,r,s,c,m){return x(),k(w,null,[n("h2",st,F(t.titletxt),1),n("p",ot,F(t.subtxt),1)],64)}const rt=Z(nt,[["render",it]]);function R(t,C,r,s){const c=V();return t.params.createElements&&Object.keys(s).forEach(m=>{if(!r[m]&&r.auto===!0){let f=t.$el.children(`.${s[m]}`)[0];f||(f=c.createElement("div"),f.className=s[m],t.$el.append(f)),r[m]=f,C[m]=f}}),r}function ct({swiper:t,extendParams:C,on:r,emit:s}){C({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function c(l){let o;return l&&(o=A(l),t.params.uniqueNavElements&&typeof l=="string"&&o.length>1&&t.$el.find(l).length===1&&(o=t.$el.find(l))),o}function m(l,o){const a=t.params.navigation;l&&l.length>0&&(l[o?"addClass":"removeClass"](a.disabledClass),l[0]&&l[0].tagName==="BUTTON"&&(l[0].disabled=o),t.params.watchOverflow&&t.enabled&&l[t.isLocked?"addClass":"removeClass"](a.lockClass))}function f(){if(t.params.loop)return;const{$nextEl:l,$prevEl:o}=t.navigation;m(o,t.isBeginning&&!t.params.rewind),m(l,t.isEnd&&!t.params.rewind)}function b(l){l.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),s("navigationPrev"))}function v(l){l.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),s("navigationNext"))}function p(){const l=t.params.navigation;if(t.params.navigation=R(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;const o=c(l.nextEl),a=c(l.prevEl);o&&o.length>0&&o.on("click",v),a&&a.length>0&&a.on("click",b),Object.assign(t.navigation,{$nextEl:o,nextEl:o&&o[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(o&&o.addClass(l.lockClass),a&&a.addClass(l.lockClass))}function u(){const{$nextEl:l,$prevEl:o}=t.navigation;l&&l.length&&(l.off("click",v),l.removeClass(t.params.navigation.disabledClass)),o&&o.length&&(o.off("click",b),o.removeClass(t.params.navigation.disabledClass))}r("init",()=>{t.params.navigation.enabled===!1?E():(p(),f())}),r("toEdge fromEdge lock unlock",()=>{f()}),r("destroy",()=>{u()}),r("enable disable",()=>{const{$nextEl:l,$prevEl:o}=t.navigation;l&&l[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),o&&o[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),r("click",(l,o)=>{const{$nextEl:a,$prevEl:e}=t.navigation,i=o.target;if(t.params.navigation.hideOnClick&&!A(i).is(e)&&!A(i).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===i||t.pagination.el.contains(i)))return;let d;a?d=a.hasClass(t.params.navigation.hiddenClass):e&&(d=e.hasClass(t.params.navigation.hiddenClass)),s(d===!0?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),e&&e.toggleClass(t.params.navigation.hiddenClass)}});const y=()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),f()},E=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:y,disable:E,update:f,init:p,destroy:u})}function N(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function dt({swiper:t,extendParams:C,on:r,emit:s}){const c="swiper-pagination";C({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let m,f=0;function b(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function v(a,e){const{bulletActiveClass:i}=t.params.pagination;a[e]().addClass(`${i}-${e}`)[e]().addClass(`${i}-${e}-${e}`)}function p(){const a=t.rtl,e=t.params.pagination;if(b())return;const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,d=t.pagination.$el;let g;const S=t.params.loop?Math.ceil((i-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(g=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),g>i-1-t.loopedSlides*2&&(g-=i-t.loopedSlides*2),g>S-1&&(g-=S),g<0&&t.params.paginationType!=="bullets"&&(g=S+g)):typeof t.snapIndex<"u"?g=t.snapIndex:g=t.activeIndex||0,e.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const h=t.pagination.bullets;let _,B,H;if(e.dynamicBullets&&(m=h.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),d.css(t.isHorizontal()?"width":"height",`${m*(e.dynamicMainBullets+4)}px`),e.dynamicMainBullets>1&&t.previousIndex!==void 0&&(f+=g-(t.previousIndex-t.loopedSlides||0),f>e.dynamicMainBullets-1?f=e.dynamicMainBullets-1:f<0&&(f=0)),_=Math.max(g-f,0),B=_+(Math.min(h.length,e.dynamicMainBullets)-1),H=(B+_)/2),h.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${e.bulletActiveClass}${M}`).join(" ")),d.length>1)h.each(M=>{const $=A(M),I=$.index();I===g&&$.addClass(e.bulletActiveClass),e.dynamicBullets&&(I>=_&&I<=B&&$.addClass(`${e.bulletActiveClass}-main`),I===_&&v($,"prev"),I===B&&v($,"next"))});else{const M=h.eq(g),$=M.index();if(M.addClass(e.bulletActiveClass),e.dynamicBullets){const I=h.eq(_),q=h.eq(B);for(let O=_;O<=B;O+=1)h.eq(O).addClass(`${e.bulletActiveClass}-main`);if(t.params.loop)if($>=h.length){for(let O=e.dynamicMainBullets;O>=0;O-=1)h.eq(h.length-O).addClass(`${e.bulletActiveClass}-main`);h.eq(h.length-e.dynamicMainBullets-1).addClass(`${e.bulletActiveClass}-prev`)}else v(I,"prev"),v(q,"next");else v(I,"prev"),v(q,"next")}}if(e.dynamicBullets){const M=Math.min(h.length,e.dynamicMainBullets+4),$=(m*M-m)/2-H*m,I=a?"right":"left";h.css(t.isHorizontal()?I:"top",`${$}px`)}}if(e.type==="fraction"&&(d.find(N(e.currentClass)).text(e.formatFractionCurrent(g+1)),d.find(N(e.totalClass)).text(e.formatFractionTotal(S))),e.type==="progressbar"){let h;e.progressbarOpposite?h=t.isHorizontal()?"vertical":"horizontal":h=t.isHorizontal()?"horizontal":"vertical";const _=(g+1)/S;let B=1,H=1;h==="horizontal"?B=_:H=_,d.find(N(e.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${B}) scaleY(${H})`).transition(t.params.speed)}e.type==="custom"&&e.renderCustom?(d.html(e.renderCustom(t,g+1,S)),s("paginationRender",d[0])):s("paginationUpdate",d[0]),t.params.watchOverflow&&t.enabled&&d[t.isLocked?"addClass":"removeClass"](e.lockClass)}function u(){const a=t.params.pagination;if(b())return;const e=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,i=t.pagination.$el;let d="";if(a.type==="bullets"){let g=t.params.loop?Math.ceil((e-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&g>e&&(g=e);for(let S=0;S<g;S+=1)a.renderBullet?d+=a.renderBullet.call(t,S,a.bulletClass):d+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;i.html(d),t.pagination.bullets=i.find(N(a.bulletClass))}a.type==="fraction"&&(a.renderFraction?d=a.renderFraction.call(t,a.currentClass,a.totalClass):d=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`,i.html(d)),a.type==="progressbar"&&(a.renderProgressbar?d=a.renderProgressbar.call(t,a.progressbarFillClass):d=`<span class="${a.progressbarFillClass}"></span>`,i.html(d)),a.type!=="custom"&&s("paginationRender",t.pagination.$el[0])}function y(){t.params.pagination=R(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const a=t.params.pagination;if(!a.el)return;let e=A(a.el);e.length!==0&&(t.params.uniqueNavElements&&typeof a.el=="string"&&e.length>1&&(e=t.$el.find(a.el),e.length>1&&(e=e.filter(i=>A(i).parents(".swiper")[0]===t.el))),a.type==="bullets"&&a.clickable&&e.addClass(a.clickableClass),e.addClass(a.modifierClass+a.type),e.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(e.addClass(`${a.modifierClass}${a.type}-dynamic`),f=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&e.addClass(a.progressbarOppositeClass),a.clickable&&e.on("click",N(a.bulletClass),function(d){d.preventDefault();let g=A(this).index()*t.params.slidesPerGroup;t.params.loop&&(g+=t.loopedSlides),t.slideTo(g)}),Object.assign(t.pagination,{$el:e,el:e[0]}),t.enabled||e.addClass(a.lockClass))}function E(){const a=t.params.pagination;if(b())return;const e=t.pagination.$el;e.removeClass(a.hiddenClass),e.removeClass(a.modifierClass+a.type),e.removeClass(t.isHorizontal()?a.horizontalClass:a.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&e.off("click",N(a.bulletClass))}r("init",()=>{t.params.pagination.enabled===!1?o():(y(),u(),p())}),r("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&p()}),r("snapIndexChange",()=>{t.params.loop||p()}),r("slidesLengthChange",()=>{t.params.loop&&(u(),p())}),r("snapGridLengthChange",()=>{t.params.loop||(u(),p())}),r("destroy",()=>{E()}),r("enable disable",()=>{const{$el:a}=t.pagination;a&&a[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),r("lock unlock",()=>{p()}),r("click",(a,e)=>{const i=e.target,{$el:d}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&d&&d.length>0&&!A(i).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return;const g=d.hasClass(t.params.pagination.hiddenClass);s(g===!0?"paginationShow":"paginationHide"),d.toggleClass(t.params.pagination.hiddenClass)}});const l=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),y(),u(),p()},o=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),E()};Object.assign(t.pagination,{enable:l,disable:o,render:u,update:p,init:y,destroy:E})}function ut({swiper:t,extendParams:C,on:r,emit:s}){let c;t.autoplay={running:!1,paused:!1},C({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function m(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const a=t.slides.eq(t.activeIndex);let e=t.params.autoplay.delay;a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(c),c=at(()=>{let i;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),i=t.slidePrev(t.params.speed,!0,!0),s("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?b():(i=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),s("autoplay")):(i=t.slidePrev(t.params.speed,!0,!0),s("autoplay")):t.params.loop?(t.loopFix(),i=t.slideNext(t.params.speed,!0,!0),s("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?b():(i=t.slideTo(0,t.params.speed,!0,!0),s("autoplay")):(i=t.slideNext(t.params.speed,!0,!0),s("autoplay")),(t.params.cssMode&&t.autoplay.running||i===!1)&&m()},e)}function f(){return typeof c<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,s("autoplayStart"),m(),!0)}function b(){return!t.autoplay.running||typeof c>"u"?!1:(c&&(clearTimeout(c),c=void 0),t.autoplay.running=!1,s("autoplayStop"),!0)}function v(a){!t.autoplay.running||t.autoplay.paused||(c&&clearTimeout(c),t.autoplay.paused=!0,a===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,m()):["transitionend","webkitTransitionEnd"].forEach(e=>{t.$wrapperEl[0].addEventListener(e,u)}))}function p(){const a=V();a.visibilityState==="hidden"&&t.autoplay.running&&v(),a.visibilityState==="visible"&&t.autoplay.paused&&(m(),t.autoplay.paused=!1)}function u(a){!t||t.destroyed||!t.$wrapperEl||a.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(e=>{t.$wrapperEl[0].removeEventListener(e,u)}),t.autoplay.paused=!1,t.autoplay.running?m():b())}function y(){t.params.autoplay.disableOnInteraction?b():(s("autoplayPause"),v()),["transitionend","webkitTransitionEnd"].forEach(a=>{t.$wrapperEl[0].removeEventListener(a,u)})}function E(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,s("autoplayResume"),m())}function l(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",y),t.$el.on("mouseleave",E))}function o(){t.$el.off("mouseenter",y),t.$el.off("mouseleave",E)}r("init",()=>{t.params.autoplay.enabled&&(f(),V().addEventListener("visibilitychange",p),l())}),r("beforeTransitionStart",(a,e,i)=>{t.autoplay.running&&(i||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(e):b())}),r("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?b():v())}),r("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&m()}),r("destroy",()=>{o(),t.autoplay.running&&b(),V().removeEventListener("visibilitychange",p)}),Object.assign(t.autoplay,{pause:v,run:m,start:f,stop:b})}const ft={components:{Swiper:et,SwiperSlide:lt},setup(){const t=W(),C=tt(),{products:r}=J(C);return{router:t,modules:[ut,dt,ct],products:r}}},mt={class:"tw-relative tw-text-white"},gt={key:0,class:"tw-text-center tw-py-20"},pt={class:"bg-second tw-relative tw-text-lg tw-rounded-full tw-py-1 tw-px-5"},bt={class:"tw-relative tw-text-xl tw-mt-1"},vt={class:"swiper-navigation-prev tw-hidden md:tw-block tw-z-10 tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-cursor-pointer"},ht={class:"swiper-navigation-next tw-hidden md:tw-block tw-z-10 tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-cursor-pointer"};function Ct(t,C,r,s,c,m){const f=T("font-awesome-icon"),b=T("swiper-slide"),v=T("swiper");return x(),k("div",mt,[s.products.length===0?(x(),k("p",gt,[z(f,{class:"fa-spin fa-xl",icon:["fas","spinner"]})])):G("",!0),s.products.length>0?(x(),j(v,{key:1,class:"container !tw-py-10",modules:s.modules,autoplay:{delay:3e3,disableOnInteraction:!1},speed:600,"slides-per-view":3,centeredSlides:!0,loop:!0,"space-between":0,navigation:{nextEl:".swiper-navigation-next",prevEl:".swiper-navigation-prev"},pagination:{clickable:!0}},{default:L(()=>[(x(!0),k(w,null,Y(s.products,p=>(x(),j(b,{key:p.title,class:"!tw-overflow-hidden tw-border-2 tw-border-white tw-border-solid tw-font-bold tw-cursor-pointer",onClick:u=>s.router.push("/products/"+p.id)},{default:L(()=>[n("div",{style:P([{"border-radius":"40px"},{backgroundImage:"url("+p.imagesUrl[0]+")"}]),class:"tw-absolute tw-top-0 tw-bg-cover tw-bg-center tw-w-full tw-h-full"},null,4),n("p",pt,F(p.category),1),n("span",bt,F(p.title),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules","navigation"])):G("",!0),n("div",vt,[z(f,{icon:["fas","paw"],class:"fa-2xl fa-rotate-270"})]),n("div",ht,[z(f,{icon:["fas","paw"],class:"fa-2xl fa-rotate-90"})])])}const xt=Z(ft,[["render",Ct],["__scopeId","data-v-f0a9dd3f"]]),yt="/meowforest/assets/list1.52f731d8.png",Et="/meowforest/assets/list2.13b41c97.png",kt="/meowforest/assets/list3.420eb145.png",St="/meowforest/assets/listFont1.06e40bb2.svg",_t="/meowforest/assets/listFont2.c346730d.svg",It="/meowforest/assets/listFont3.ff8be21b.svg",Bt="/meowforest/assets/line.f6220d20.svg",$t="/meowforest/assets/line_m.02ef9263.svg",Mt="/meowforest/assets/cats.4d921cae.png",At="/meowforest/assets/process1.94758788.png",Ft="data:image/png;base64,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",Ot="/meowforest/assets/process3.bce2944a.png",wt="/meowforest/assets/process4.c2410fe2.png",Tt="/meowforest/assets/meowforestTxt.c8639081.svg",zt="/meowforest/assets/meowforestTxt_m.f68b700b.svg";const Nt=X({components:{TheTitle:rt,SelectedItem:xt},setup(){return{scrollNext:()=>{const C=document.querySelector(".circleBlock").offsetTop;window.scrollTo({top:C-80,behavior:"smooth"})},circle:[{link:"products?category=food",img:yt,imgFont:St,alt:"Cat Food"},{link:"products?category=use",img:Et,imgFont:_t,alt:"Cat Use"},{link:"products?category=toy",img:kt,imgFont:It,alt:"Cat Toy"}],flow:[{title:"1.\u9078\u8CFC\u7522\u54C1",txt:"\u5C07\u5546\u54C1\u52A0\u5165\u8CFC\u7269\u8ECA\uFF0C\u9032\u5165\u8CFC\u7269\u8ECA\u9EDE\u9078\u7D50\u5E33",img:At},{title:"2.\u78BA\u8A8D\u8207\u8CC7\u6599\u586B\u5BEB",txt:"\u9078\u64C7\u9001\u8CA8\u53CA\u4ED8\u6B3E\u65B9\u5F0F\uFF0C\u586B\u5BEB\u8A02\u8CFC\u8207\u6536\u4EF6\u4EBA\u8CC7\u8A0A",img:Ft},{title:"3.\u5B8C\u6210\u7D50\u5E33",txt:"\u4F7F\u7528\u4FE1\u7528\u5361\u7D50\u5E33\uFF0C\u6216\u7528 ATM \u5B8C\u6210\u4ED8\u6B3E",img:Ot},{title:"4.\u8A02\u55AE\u51FA\u8CA8",txt:"\u8A02\u55AE\u5B8C\u6210\u5F8C\u7ACB\u5373\u70BA\u60A8\u51FA\u8CA8\uFF0C\u7B49\u5E7E\u5929\u5C31\u53EF\u6536\u5230\u8CA8\u56C9\uFF01",img:wt}],notice:[{title:"\u9000\u63DB\u8CA8\u9808\u77E5",content:["\u4F9D\u6D88\u8CBB\u8005\u4FDD\u8B77\u6CD5\u898F\u5B9A\uFF1A\u60A8\u53EF\u4EE5\u4EAB\u6709\u5546\u54C1\u8CA8\u5230\u6B21\u65E5\u8D77\u4E03\u5929\u7336\u8C6B\u671F\u7684\u6B0A\u5229, \u4F46\u7336\u8C6B\u671F\u4E26\u975E\u8A66\u7528\u671F","\u8ACB\u60A8\u7559\u610F\u5546\u54C1\u5BE6\u5C6C\u98DF\u54C1\uFF0C\u57FA\u65BC\u885B\u751F\u5B89\u5168\u8003\u91CF\uFF0C\u9664\u7455\u75B5\u54C1\u60C5\u5F62\u5916\uFF0C\u63DB\u8CA8\u5546\u54C1\u5FC5\u9808\u70BA\u300E\u5168\u65B0\u672A\u7D93\u4F7F\u7528\u300F\u82E5\u6709\u62C6\u5C01\uFF0C\u6055\u5C07\u7121\u6CD5\u63D0\u4F9B\u63DB\u8CA8\u670D\u52D9","\u82E5\u975E\u54C1\u8CEA\u554F\u984C\u9000\u8CA8\uFF0C\u8ACB\u60A8\u65BC7\u5929\u5167\u5C07\u5168\u65B0\u5546\u54C1\u5BC4\u56DE\u516C\u53F8\uFF0C\u9700\u81EA\u884C\u8CA0\u64D4\u904B\u8CBB","\u8CFC\u8CB7\u5546\u54C1\u4E03\u5929\u5167\uFF0C\u82E5\u9047\u5546\u54C1\u7455\u75B5\u554F\u984C\uFF0C\u8ACB\u8207\u6211\u5011\u806F\u7E6B\uFF0C\u6211\u5011\u5C07\u7121\u689D\u4EF6\u70BA\u60A8\u505A\u9000\u63DB\u8CA8\u8655\u7406\uFF0C\u6536\u5230\u5546\u54C1\u8D85\u904E\u4E03\u5929\uFF0C\u4EA6\u4E0D\u63A5\u53D7\u9000\u63DB\u8CA8 (\u5305\u542B\u8CA8\u54C1\u5982\u6709\u77ED\u5C11\uFF0C\u5C07\u7121\u6CD5\u70BA\u60A8\u88DC\u5BC4)","\u82E5\u60A8\u9700\u8981\u8FA6\u7406\u9000\u63DB\u8CA8\u8ACB\u8207\u5BA2\u670D\u806F\u7E6B\u6211\u5011\u6703\u76E1\u5FEB\u70BA\u60A8\u8655\u7406"]},{title:"\u5BC4\u9001\u9808\u77E5",content:["\u5B85\u914D\u904B\u8CBB(\u5E38\u6EAB)120\u5143\uFF0C\u5168\u5BB6\u53D6\u4EF670\u5143\uFF0C\u4E00\u5F35\u8A02\u55AE\u53EA\u80FD\u914D\u9001\u540C\u4E00\u5730\u5740\uFF0C\u5982\u9700\u5BC4\u9001\u4E0D\u540C\u5730\u5740\uFF0C\u9EBB\u7169\u8ACB\u5206\u958B\u4E0B\u55AE","\u55AE\u7B46\u8A02\u55AE\u6D88\u8CBB\u91D1\u984D\u6EFF999\u5143\uFF0C\u5373\u53EF\u4EAB\u6709\u514D\u904B\u8CBB\u512A\u60E0\uFF08\u5BC4\u9001\u7BC4\u570D\u50C5\u9650\u53F0\u7063\u672C\u5CF6\uFF0C\u5718\u8CFC\u9664\u5916\uFF09","\u4E00\u822C\u5C07\u65BC\u4E0B\u55AE\u5F8C\u7D043-5\u500B\u5DE5\u4F5C\u5929\u53EF\u9001\u9054\u82E5\u9047\u7BC0\u65E5\uFF08\u5982\u6625\u7BC0\u3001\u4E2D\u79CB\u3001\u7AEF\u5348\uFF09\u904B\u9001\u91CF\u8F03\u5927\uFF0C\u53CA\u9047\u6709\u98B1\u98A8\u904E\u5883\u6642\u914D\u9001\u4E0A\u8F03\u7121\u6CD5\u7B26\u5408\u60A8\u6240\u6307\u5B9A\u7684\u6642\u9593\uFF0C\u5EFA\u8B70\u63D0\u65E9\u5E7E\u5929\u4E0B\u55AE\uFF0C\u4EE5\u514D\u803D\u8AA4\u60A8\u7684\u6642\u9593","\u98B1\u98A8\u5929\u6216\u4F8B\u5047\u65E5\u7269\u6D41\u516C\u53F8\u7121\u6CD5\u9001\u8CA8\uFF0C\u8B1D\u8B1D\u5927\u5BB6\u7684\u9AD4\u8AD2","\u5929\u5019\u6C23\u8C61\u72C0\u6CC1\u5247\u4F9D\u4E2D\u592E\u6C23\u8C61\u53F0\u8207\u5404\u5730\u7E23\u5E02\u653F\u5E9C\u4E4B\u516C\u544A\u70BA\u6E96"]}],divider:Bt,dividerM:$t,threeCats:Mt}}}),D=t=>(Q("data-v-2a9b41ce"),t=t(),K(),t),Ht={class:"tw-relative tw-overflow-hidden tw-w-full tw-h-screen tw-flex md:tw-items-center tw-justify-center"},Yt=D(()=>n("div",{class:"hero tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0"},null,-1)),Dt=D(()=>n("img",{class:"tw-relative tw-hidden sm:tw-block tw-w-5/6",src:Tt,alt:"Meow Forest"},null,-1)),Ut=D(()=>n("img",{class:"tw-relative sm:tw-hidden tw-w-7/12 tw-self-start tw-mt-36",src:zt,alt:"Meow Forest"},null,-1)),Vt={class:"circleBlock tw-relative tw-mx-auto tw-text-center tw-flex tw-justify-between tw-gap-4 md:tw-gap-24"},jt=["src","alt"],Lt={class:"container tw-mt-20 tw-mb-28"},Zt=["src"],qt=["src"],Gt={class:"tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-x-20"},Xt=["src"],Pt=D(()=>n("p",{class:"intro tw-font-medium tw-leading-8 tw-mt-4 tw-pb-1"},[U(" \u5EFA\u7ACB\u55B5\u68EE\u4E4B\u524D\uFF0C\u6211\u662F\u4E00\u500B\u6709\u4E09\u96BB\u8C93\u7684\u8C93\u5974\uFF0C\u56E0\u70BA\u5F88\u71B1\u8877\u5C0B\u627E\u8C93\u54AA\u7684\u98DF\u7269\u8DDF\u7528\u54C1\uFF0C\u8A8D\u8B58\u4E86\u5F88\u591A\u8C93\u76F8\u95DC\u7522\u54C1\uFF0C\u4E5F\u5F88\u91CD\u8996\u8C93\u54AA\u5011\u7684\u98DF\u7269\uFF0C\u60F3\u7D66\u4ED6\u5011\u5929\u7136\u7121\u5BB3\u7684\u7528\u54C1\u3002"),n("br"),n("br"),U(" \u6F38\u6F38\u958B\u59CB\u71B1\u8877\u7814\u7A76\u8C93\u7528\u7522\u54C1\uFF0C\u6709\u570B\u5916\u7684\u54C1\u724C\u8207\u53F0\u7063\u672C\u571F\u7684\u7522\u54C1\uFF0C\u60F3\u628A\u6700\u597D\u7684\u8C93\u54AA\u5404\u7A2E\u7528\u54C1\uFF0C\u63A8\u85A6\u7D66\u5BB6\u88E1\u6709\u5BF6\u8C9D\u8C93\u54AA\u7684\u4E3B\u4EBA\u5011\u3002"),n("br"),n("br"),U(" \u55B5\u68EE\u7684\u540D\u5B57\u7531\u4F86\uFF0C\u5E0C\u671B\u5E36\u7D66\u5927\u5BB6\u7684\u7522\u54C1\uFF0C\u50CF\u5929\u7136\u7684\u68EE\u6797\u4E00\u6A23\uFF0C\u7D14\u6DE8\u81EA\u7136\uFF0C\u8B93\u8C93\u54AA\u5011\u6709\u8457\u81EA\u7531\u81EA\u5728\u7684\u74B0\u5883\uFF0C\u6210\u70BA\u68EE\u7CFB\u8C93\u54AA\uFF01 ")],-1)),Rt={class:"bg-primary tw-py-20"},Wt=D(()=>n("p",{class:"tw-text-white tw-text-center tw-text-3xl md:tw-text-4xl tw-font-bold"},[U(" SELECTED ITEM"),n("br"),n("span",{class:"tw-block tw-text-base tw-font-normal"},"The Best Product For You")],-1)),Jt={class:"container tw-pt-10"},Qt={class:"tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 lg:tw-gap-6"},Kt={class:"tw-flex-1"},ta={class:"text-primary tw-block tw-text-xl tw-font-bold tw-mb-2"},aa=["src"],ea={class:"tw-block tw-text-xl tw-font-bold tw-mb-2"},la={class:"tw-ml-6"};function na(t,C,r,s,c,m){const f=T("font-awesome-icon"),b=T("router-link"),v=T("TheTitle"),p=T("SelectedItem");return x(),k(w,null,[n("header",Ht,[Yt,Dt,Ut,n("span",{onClick:C[0]||(C[0]=(...u)=>t.scrollNext&&t.scrollNext(...u)),class:"fa-rotate-180 tw-absolute tw-text-white tw-bottom-10 tw-p-10 md:tw-hidden"},[z(f,{icon:["fas","paw"],class:"fa-bounce fa-2x"})])]),n("section",Vt,[(x(!0),k(w,null,Y(t.circle,(u,y)=>(x(),j(b,{key:y,to:u.link,class:"tw-flex-1 tw-cursor-pointer hover:tw-scale-95 tw-duration-300"},{default:L(()=>[n("span",{class:"circle tw-block tw-w-full tw-rounded-full",style:P({backgroundImage:"url("+u.img+")"})},null,4),n("img",{src:u.imgFont,class:"tw-w-3/5 tw-pt-4",alt:u.alt},null,8,jt)]),_:2},1032,["to"]))),128))]),n("section",Lt,[n("img",{class:"tw-w-full tw-hidden md:tw-block tw-opacity-60",src:t.divider,alt:"cat divider line"},null,8,Zt),n("img",{class:"tw-w-full md:tw-hidden",src:t.dividerM,alt:"cat divider line"},null,8,qt),z(v,{titletxt:"\u95DC\u65BC\u55B5\u68EE",subtxt:"About Meow Forest"}),n("div",Gt,[n("img",{class:"tw-max-w-md tw-w-3/5 tw-pl-4",src:t.threeCats,alt:"three cats"},null,8,Xt),Pt])]),n("section",Rt,[Wt,z(p)]),n("section",Jt,[z(v,{titletxt:"\u8CFC\u7269\u6D41\u7A0B",subtxt:"Shopping Process"}),n("div",Qt,[(x(!0),k(w,null,Y(t.flow,(u,y)=>(x(),k("div",{key:y,class:"flow tw-flex tw-flex-col tw-bg-white"},[n("p",Kt,[n("span",ta,F(u.title),1),n("span",null,F(u.txt),1)]),n("img",{class:"tw-block tw-mx-auto sm:tw-w-3/4 lg:tw-w-full tw-mt-6",src:u.img,alt:"cat display"},null,8,aa)]))),128)),(x(!0),k(w,null,Y(t.notice,(u,y)=>(x(),k("div",{key:y+u.title,class:"notice lg:tw-col-span-2 tw-bg-white"},[n("span",ea,F(u.title),1),n("ul",la,[(x(!0),k(w,null,Y(u.content,E=>(x(),k("li",{key:E},F(E),1))),128))])]))),128))])])],64)}const ca=Z(Nt,[["render",na],["__scopeId","data-v-2a9b41ce"]]);export{ca as default};