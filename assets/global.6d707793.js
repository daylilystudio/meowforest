import{x as P,r as e,y as f,z as k}from"./index.b8e1bcd1.js";import{a as m}from"./api.a81b7417.js";const $=P("global",()=>{const F=e(!1),r=e(!1),u=e(!1),d=e(!1),I=e([{name:"Products",link:"/products",key:"all"},{name:"Cat\xB4s Food",link:"/products?category=food",key:"food"},{name:"Cat\xB4s Use",link:"/products?category=use",key:"use"},{name:"Cat\xB4s Toy",link:"/products?category=toy",key:"toy"}]),s=f({});Object.keys(window.localStorage).filter(a=>a.match(/meowforestFav/gi)).forEach(a=>{s[a]=!0});const C=a=>{window.localStorage.getItem("meowforestFav"+a)==="y"?(window.localStorage.removeItem("meowforestFav"+a),s["meowforestFav"+a]=!1):(window.localStorage.setItem("meowforestFav"+a,"y"),s["meowforestFav"+a]=!0,window.$message.success("Added Fav !"))},i=e([]);async function h(){if(i.value.length>0)return;const a=await m.getProducts();a.data.success&&(i.value=a.data.products)}const n=e([]);async function g(){r.value=!0;const a=await m.getCart();n.value=a.data.data,r.value=!1}async function S(a,p){u.value=!0;const v=await m.addCart({data:{product_id:a,qty:p}});if(u.value=!1,d.value=!0,setTimeout(()=>{d.value=!1},1100),v){const b=v.data.success?"success":"error";window.$message[b](v.data.message),await g()}}const w=e(""),l=e(""),t=e(0);k(l,a=>{t.value=a==="delivery"?80:0,t.value=n.value.final_total>3e3?0:t.value}),k(n,a=>{t.value=l.value==="delivery"?80:0,t.value=a.final_total>3e3?0:t.value});const o=f({name:"",tel:"",email:"",add:""}),y=e(""),c=f({number:"",valid:"",cvv:""});return{loadingPage:F,loading:r,loadingAdd:u,addingCart:d,menu:I,isfav:s,toggleFav:C,getProducts:h,products:i,getCart:g,addCart:S,cart:n,payment:w,shipping:l,shippingMoney:t,userInfo:o,msg:y,cardInfo:c,initInfo:()=>{w.value="",l.value="",t.value=0,o.name="",o.tel="",o.email="",o.add="",y.value="",c.number="",c.valid="",c.cvv=""}}});export{$ as u};
