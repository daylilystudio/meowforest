import{R as d,A as o,an as c,ao as p,ap as m,aq as h}from"./index.d02c4d17.js";const y=/^(\d|\.)+$/,f=/(\d|\.)+/;function _(r,{c:e=1,offset:n=0,attachPx:t=!0}={}){if(typeof r=="number"){const u=(r+n)*e;return u===0?"0":`${u}px`}else if(typeof r=="string")if(y.test(r)){const u=(Number(r)+n)*e;return t?u===0?"0":`${u}px`:`${u}`}else{const u=f.exec(r);return u?r.replace(f,String((Number(u[0])+n)*e)):r}return r}function O(r,e){return d(r,n=>{n!==void 0&&(e.value=n)}),o(()=>r.value===void 0?e.value:r.value)}function R(r,e){return o(()=>{for(const n of e)if(r[n]!==void 0)return r[n];return r[e[e.length-1]]})}var g=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;function x(r,e){if(c(r))return!1;var n=typeof r;return n=="number"||n=="symbol"||n=="boolean"||r==null||p(r)?!0:l.test(r)||!g.test(r)||e!=null&&r in Object(e)}var C="Expected a function";function a(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(C);var n=function(){var t=arguments,u=e?e.apply(this,t):t[0],i=n.cache;if(i.has(u))return i.get(u);var s=r.apply(this,t);return n.cache=i.set(u,s)||i,s};return n.cache=new(a.Cache||m),n}a.Cache=m;var E=500;function $(r){var e=a(r,function(t){return n.size===E&&n.clear(),t}),n=e.cache;return e}var b=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,I=/\\(\\)?/g,N=$(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(b,function(n,t,u,i){e.push(u?i.replace(I,"$1"):t||n)}),e});const P=N;function w(r,e){return c(r)?r:x(r,e)?[r]:P(h(r))}var T=1/0;function M(r){if(typeof r=="string"||p(r))return r;var e=r+"";return e=="0"&&1/r==-T?"-0":e}function z(r,e){e=w(e,r);for(var n=0,t=e.length;r!=null&&n<t;)r=r[M(e[n++])];return n&&n==t?r:void 0}function F(r,e,n){var t=r==null?void 0:z(r,e);return t===void 0?n:t}export{O as a,z as b,w as c,_ as f,F as g,x as i,M as t,R as u};