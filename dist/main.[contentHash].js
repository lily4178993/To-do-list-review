(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,":root {\n  /*\n   * COLORS\n  */\n\n  /* primary */\n  --Moderate-Cyan: hsl(170, 45%, 43%);\n\n  /* accent */\n  --Desaturated-Blue: hsl(238, 22%, 44%);\n\n  /* neutral */\n  --White-smoke: hsl(0, 0%, 99%);\n  --Light-Gray: hsl(0, 0%, 96%);\n  --gray: hsl(0, 0%, 93%);\n\n  /*\n   * TYPOGRAPHY\n  */\n\n  /* font-size */\n  --fontsize-title-1: 2rem;\n  --fontsize-title-2: 1.8rem;\n  --fontsize-body-1: 1.3rem;\n  --fontsize-body-2: 1.1rem;\n\n  /*\n   * SHADOW\n  */\n  --shadow: 0 2px 6px hsl(0, 0%, 0%, 0.25);\n\n  /*\n   * BORDER RADIUS\n  */\n  --radius4: 4px;\n\n  /*\n   * TRANSITION\n  */\n  --transition-1: 270ms ease;\n}\n\n/* ---------------------------------*\\\n    #RESET\n\\*--------------------------------- */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: cursive, serif;\n}\n\nli { list-style: none; }\n\nimg,\ninput,\nbutton { display: block; }\n\ninput {\n  border: 1px transparent;\n  outline: transparent;\n}\n\nbutton {\n  font-size: var(--fontsize-title-2);\n  cursor: pointer;\n  border: 1px transparent;\n  width: auto;\n  background: transparent;\n}\n\nhtml { font-size: 10px; }\n\n/* ---------------------------------*\\\n    #HEADER\n\\*--------------------------------- */\nheader {\n  width: 100%;\n  text-align: center;\n  padding: 2em 0;\n  text-transform: uppercase;\n  text-decoration: overline;\n  font-size: var(--fontsize-title-1);\n}\n\n/* ---------------------------------*\\\n    #MAIN\n\\*--------------------------------- */\n.container {\n  border: 2px solid var(--Light-Gray);\n  width: 60vw;\n  max-width: 400px;\n  margin: 0.5em auto;\n  background: hsl(0, 0%, 100%);\n  box-shadow: var(--shadow);\n  transition: var(--transition-1);\n}\n\n.container:hover,\n.container:focus {\n  transform: translateY(-4px);\n}\n\n.card-head {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n}\n\n.title {\n  font-size: var(--fontsize-title-2);\n}\n\n.card-body .add-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 1em;\n}\n\n.list {\n  padding: 1em;\n}\n\n.list-item {\n  display: grid;\n  grid-template-columns: 30px 1fr auto auto;\n  gap: 10px;\n  align-items: center;\n  padding: 1em 0;\n  border-top: 1px solid var(--Light-Gray);\n  transition: var(--transition-1);\n}\n\n.list-item:hover,\n.list-item:focus {\n  background: var(--White-smoke);\n}\n\n.list-item .label {\n  font-size: var(--fontsize-body-1);\n  font-weight: 700;\n  padding: 1em 0;\n  outline: transparent;\n}\n\n.list-item .label.checked {\n  font-style: italic;\n  text-decoration: line-through;\n}\n\n.list-item .btn {\n  justify-self: flex-end;\n}\n\n.list-item:has(.label.checked) {\n  background: var(--White-smoke);\n}\n\n.list-item .btn.btn.btn-remove {\n  width: 25px;\n  height: 25px;\n  display: none;\n}\n\n.list-item:has(.label.checked) .btn.btn.btn-remove {\n  display: block;\n}\n\n.list-item:has(.label.checked) .btn.btn.btn-more {\n  display: none;\n}\n\n.list-item .btn.btn-more {\n  width: 15px;\n  height: 15px;\n  transform: rotate(90deg);\n  display: block;\n}\n\n.icon {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.card-footer {\n  background: var(--Light-Gray);\n  transition: var(--transition-1);\n}\n\n.card-footer:hover,\n.card-footer:focus {\n  background: var(--gray);\n}\n\n.btn-remove-all {\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  text-align: center;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  width: 97%;\n  padding: 2em;\n  font-size: var(--fontsize-title-2);\n  text-align: center;\n  z-index: -1;\n}\n\nfooter a {\n  color: var(--Desaturated-Blue);\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n="todos",e=()=>JSON.parse(localStorage.getItem(n))||[],r=e=>{localStorage.setItem(n,JSON.stringify(e))},o=e(),i=t.p+"3a00f92e33278af26c00.png",a=t.p+"7611cb495c73921c2867.png",c=document.querySelector(".list"),s=()=>{c.innerHTML="",o.forEach((n=>{const t=document.createElement("li");t.classList.add("list-item");const d=document.createElement("input");d.type="checkbox",d.name="check",d.placeholder="check",d.id=n.index,d.classList.add("checkbox");const l=document.createElement("div");l.classList.add("view_item");const p=document.createElement("p");p.classList.add("label"),p.textContent=n.description;const u=document.createElement("button");u.type="button",u.classList.add("btn","btn-more");const m=document.createElement("button");m.type="submit",m.id=n.index,m.classList.add("btn","btn-remove");const f=document.createElement("img");f.src=i,f.alt="More Icon",f.classList.add("icon");const h=document.createElement("img");h.src=a,h.alt="Remove Icon",h.classList.add("icon"),p.addEventListener("dblclick",(t=>{t.stopPropagation(),p.contentEditable="true",p.addEventListener("keydown",(()=>{const t=p.textContent;((n,t)=>{const o=e();console.log(o[n].description="Juste un test"),o[n].description=t,r(o)})(n.index,t)}))})),m.addEventListener("click",(e=>{e.stopPropagation(),(n=>{const e=o.filter((e=>e.index===n));-1!==e&&o.splice(e,1);let t=0;o.forEach((n=>{n.index=t+1,t+=1}))})(n.index),r(o),s()})),d.addEventListener("change",(()=>{!0===d.checked?(p.classList.add("checked"),((n,t)=>{const o=e();!1===t&&(o[n-1].completed=!0,r(o))})(n.index,n.completed),p.addEventListener("dblclick",(n=>{n.stopPropagation(),p.contentEditable="false"}))):(p.classList.remove("checked"),((n,t)=>{const o=e();!0===t&&(o[n-1].completed=!1,r(o))})(n.index,n.completed))})),u.appendChild(f),m.appendChild(h),l.appendChild(p),t.appendChild(d),t.appendChild(l),t.appendChild(m),t.appendChild(u),c.appendChild(t)}))};s(),(()=>{const n=document.querySelectorAll(".label"),e=document.querySelectorAll(".checkbox");for(let t=0;t<o.length;t+=1){for(let n=0;n<e.length;n+=1){const t=e[n];!0===o[n].completed?t.checked=!0:t.checked=!1}for(let e=0;e<n.length;e+=1){const t=n[e];!0===o[e].completed?t.classList.add("checked"):t.classList.remove("checked")}}})();var d=t(379),l=t.n(d),p=t(795),u=t.n(p),m=t(569),f=t.n(m),h=t(565),v=t.n(h),b=t(216),g=t.n(b),y=t(589),x=t.n(y),k=t(426),w={};w.styleTagTransform=x(),w.setAttributes=v(),w.insert=f().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=g(),l()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals,document.querySelector(".add-item").addEventListener("submit",(n=>{n.preventDefault(),(()=>{const n=document.getElementById("add-item"),t=n.value.trim();if(t){const n=e(),o={description:t,completed:!1,index:n.length+1};n.push(o),r(n)}n.value=""})(),s(),document.location.reload()})),document.querySelector(".btn-remove-all").addEventListener("click",(n=>{n.preventDefault(),(()=>{const n=e().filter((n=>!1===n.completed));for(let e=0;e<n.length;e+=1)n[e].index=e+1;r(n)})(),document.location.reload()}))})()})();