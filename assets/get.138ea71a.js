import{aH as f,aI as o,aJ as p,aK as m}from"./index.b92c22bd.js";const y=/^(\d|\.)+$/,c=/(\d|\.)+/;function z(r,{c:e=1,offset:n=0,attachPx:t=!0}={}){if(typeof r=="number"){const i=(r+n)*e;return i===0?"0":`${i}px`}else if(typeof r=="string")if(y.test(r)){const i=(Number(r)+n)*e;return t?i===0?"0":`${i}px`:`${i}`}else{const i=c.exec(r);return i?r.replace(c,String((Number(i[0])+n)*e)):r}return r}var d=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,h=/^\w*$/;function l(r,e){if(f(r))return!1;var n=typeof r;return n=="number"||n=="symbol"||n=="boolean"||r==null||o(r)?!0:h.test(r)||!d.test(r)||e!=null&&r in Object(e)}var g="Expected a function";function a(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(g);var n=function(){var t=arguments,i=e?e.apply(this,t):t[0],u=n.cache;if(u.has(i))return u.get(i);var s=r.apply(this,t);return n.cache=u.set(i,s)||u,s};return n.cache=new(a.Cache||p),n}a.Cache=p;var x=500;function E(r){var e=a(r,function(t){return n.size===x&&n.clear(),t}),n=e.cache;return e}var I=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/\\(\\)?/g,C=E(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(I,function(n,t,i,u){e.push(i?u.replace($,"$1"):t||n)}),e});const N=C;function P(r,e){return f(r)?r:l(r,e)?[r]:N(m(r))}var b=1/0;function T(r){if(typeof r=="string"||o(r))return r;var e=r+"";return e=="0"&&1/r==-b?"-0":e}function w(r,e){e=P(e,r);for(var n=0,t=e.length;r!=null&&n<t;)r=r[T(e[n++])];return n&&n==t?r:void 0}function M(r,e,n){var t=r==null?void 0:w(r,e);return t===void 0?n:t}export{w as b,P as c,z as f,M as g,l as i,T as t};