"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.source = void 0;
/**
 * JavaScript code that provides the puppeteer utilities. See the
 * [README](https://github.com/puppeteer/puppeteer/blob/main/src/injected/README.md)
 * for injection for more information.
 *
 * @internal
 */
exports.source = "\"use strict\";var C=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var se=Object.prototype.hasOwnProperty;var u=(e,t)=>{for(var n in t)C(e,n,{get:t[n],enumerable:!0})},ie=(e,t,n,r)=>{if(t&&typeof t==\"object\"||typeof t==\"function\")for(let o of oe(t))!se.call(e,o)&&o!==n&&C(e,o,{get:()=>t[o],enumerable:!(r=ne(t,o))||r.enumerable});return e};var le=e=>ie(C({},\"__esModule\",{value:!0}),e);var Oe={};u(Oe,{default:()=>Re});module.exports=le(Oe);var P=class extends Error{constructor(t){super(t),this.name=this.constructor.name,Error.captureStackTrace(this,this.constructor)}},S=class extends P{};var I=class extends P{#e;#r=\"\";set code(t){this.#e=t}get code(){return this.#e}set originalMessage(t){this.#r=t}get originalMessage(){return this.#r}},De=Object.freeze({TimeoutError:S,ProtocolError:I});function p(e){let t=!1,n=!1,r,o,i=new Promise((l,a)=>{r=l,o=a}),s=e&&e.timeout>0?setTimeout(()=>{n=!0,o(new S(e.message))},e.timeout):void 0;return Object.assign(i,{resolved:()=>t,finished:()=>t||n,resolve:l=>{s&&clearTimeout(s),t=!0,r(l)},reject:l=>{clearTimeout(s),n=!0,o(l)}})}var G=new Map,X=e=>{let t=G.get(e);return t||(t=new Function(`return ${e}`)(),G.set(e,t),t)};var R={};u(R,{ariaQuerySelector:()=>ae,ariaQuerySelectorAll:()=>k});var ae=(e,t)=>window.__ariaQuerySelector(e,t),k=async function*(e,t){yield*await window.__ariaQuerySelectorAll(e,t)};var D={};u(D,{customQuerySelectors:()=>_});var O=class{#e=new Map;register(t,n){if(!n.queryOne&&n.queryAll){let r=n.queryAll;n.queryOne=(o,i)=>{for(let s of r(o,i))return s;return null}}else if(n.queryOne&&!n.queryAll){let r=n.queryOne;n.queryAll=(o,i)=>{let s=r(o,i);return s?[s]:[]}}else if(!n.queryOne||!n.queryAll)throw new Error(\"At least one query method must be defined.\");this.#e.set(t,{querySelector:n.queryOne,querySelectorAll:n.queryAll})}unregister(t){this.#e.delete(t)}get(t){return this.#e.get(t)}clear(){this.#e.clear()}},_=new O;var M={};u(M,{pierceQuerySelector:()=>ce,pierceQuerySelectorAll:()=>ue});var ce=(e,t)=>{let n=null,r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&!n&&s.matches(t)&&(n=s)}while(!n&&i.nextNode())};return e instanceof Document&&(e=e.documentElement),r(e),n},ue=(e,t)=>{let n=[],r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&s.matches(t)&&n.push(s)}while(i.nextNode())};return e instanceof Document&&(e=e.documentElement),r(e),n};var m=(e,t)=>{if(!e)throw new Error(t)};var T=class{#e;#r;#n;#t;constructor(t,n){this.#e=t,this.#r=n}async start(){let t=this.#t=p(),n=await this.#e();if(n){t.resolve(n);return}this.#n=new MutationObserver(async()=>{let r=await this.#e();r&&(t.resolve(r),await this.stop())}),this.#n.observe(this.#r,{childList:!0,subtree:!0,attributes:!0})}async stop(){m(this.#t,\"Polling never started.\"),this.#t.finished()||this.#t.reject(new Error(\"Polling stopped\")),this.#n&&(this.#n.disconnect(),this.#n=void 0)}result(){return m(this.#t,\"Polling never started.\"),this.#t}},x=class{#e;#r;constructor(t){this.#e=t}async start(){let t=this.#r=p(),n=await this.#e();if(n){t.resolve(n);return}let r=async()=>{if(t.finished())return;let o=await this.#e();if(!o){window.requestAnimationFrame(r);return}t.resolve(o),await this.stop()};window.requestAnimationFrame(r)}async stop(){m(this.#r,\"Polling never started.\"),this.#r.finished()||this.#r.reject(new Error(\"Polling stopped\"))}result(){return m(this.#r,\"Polling never started.\"),this.#r}},E=class{#e;#r;#n;#t;constructor(t,n){this.#e=t,this.#r=n}async start(){let t=this.#t=p(),n=await this.#e();if(n){t.resolve(n);return}this.#n=setInterval(async()=>{let r=await this.#e();r&&(t.resolve(r),await this.stop())},this.#r)}async stop(){m(this.#t,\"Polling never started.\"),this.#t.finished()||this.#t.reject(new Error(\"Polling stopped\")),this.#n&&(clearInterval(this.#n),this.#n=void 0)}result(){return m(this.#t,\"Polling never started.\"),this.#t}};var H={};u(H,{pQuerySelector:()=>Ie,pQuerySelectorAll:()=>re});var c=class{static async*map(t,n){for await(let r of t)yield await n(r)}static async*flatMap(t,n){for await(let r of t)yield*n(r)}static async collect(t){let n=[];for await(let r of t)n.push(r);return n}static async first(t){for await(let n of t)return n}};var h={attribute:/\\[\\s*(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(\\s(?<caseSensitive>[iIsS]))?\\s*)?\\]/gu,id:/#(?<name>[-\\w\\P{ASCII}]+)/gu,class:/\\.(?<name>[-\\w\\P{ASCII}]+)/gu,comma:/\\s*,\\s*/g,combinator:/\\s*[\\s>+~]\\s*/g,\"pseudo-element\":/::(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶+)\\))?/gu,\"pseudo-class\":/:(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶+)\\))?/gu,universal:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?\\*/gu,type:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)/gu},fe=new Set([\"combinator\",\"comma\"]);var me=e=>{switch(e){case\"pseudo-element\":case\"pseudo-class\":return new RegExp(h[e].source.replace(\"(?<argument>\\xB6+)\",\"(?<argument>.+)\"),\"gu\");default:return h[e]}};function de(e,t){let n=0,r=\"\";for(;t<e.length;t++){let o=e[t];switch(o){case\"(\":++n;break;case\")\":--n;break}if(r+=o,n===0)return r}return r}function pe(e,t=h){if(!e)return[];let n=[e];for(let[o,i]of Object.entries(t))for(let s=0;s<n.length;s++){let l=n[s];if(typeof l!=\"string\")continue;i.lastIndex=0;let a=i.exec(l);if(!a)continue;let d=a.index-1,f=[],V=a[0],B=l.slice(0,d+1);B&&f.push(B),f.push({...a.groups,type:o,content:V});let z=l.slice(d+V.length+1);z&&f.push(z),n.splice(s,1,...f)}let r=0;for(let o of n)switch(typeof o){case\"string\":throw new Error(`Unexpected sequence ${o} found at index ${r}`);case\"object\":r+=o.content.length,o.pos=[r-o.content.length,r],fe.has(o.type)&&(o.content=o.content.trim()||\" \");break}return n}var he=/(['\"])([^\\\\\\n]+?)\\1/g,ge=/\\\\./g;function K(e,t=h){if(e=e.trim(),e===\"\")return[];let n=[];e=e.replace(ge,(i,s)=>(n.push({value:i,offset:s}),\"\\uE000\".repeat(i.length))),e=e.replace(he,(i,s,l,a)=>(n.push({value:i,offset:a}),`${s}${\"\\uE001\".repeat(l.length)}${s}`));{let i=0,s;for(;(s=e.indexOf(\"(\",i))>-1;){let l=de(e,s);n.push({value:l,offset:s}),e=`${e.substring(0,s)}(${\"\\xB6\".repeat(l.length-2)})${e.substring(s+l.length)}`,i=s+l.length}}let r=pe(e,t),o=new Set;for(let i of n.reverse())for(let s of r){let{offset:l,value:a}=i;if(!(s.pos[0]<=l&&l+a.length<=s.pos[1]))continue;let{content:d}=s,f=l-s.pos[0];s.content=d.slice(0,f)+a+d.slice(f+a.length),s.content!==d&&o.add(s)}for(let i of o){let s=me(i.type);if(!s)throw new Error(`Unknown token type: ${i.type}`);s.lastIndex=0;let l=s.exec(i.content);if(!l)throw new Error(`Unable to parse content for ${i.type}: ${i.content}`);Object.assign(i,l.groups)}return r}function*N(e,t){switch(e.type){case\"list\":for(let n of e.list)yield*N(n,e);break;case\"complex\":yield*N(e.left,e),yield*N(e.right,e);break;case\"compound\":yield*e.list.map(n=>[n,e]);break;default:yield[e,t]}}function g(e){let t;return Array.isArray(e)?t=e:t=[...N(e)].map(([n])=>n),t.map(n=>n.content).join(\"\")}h.combinator=/\\s*(>>>>?|[\\s>+~])\\s*/g;var ye=/\\\\[\\s\\S]/g,we=e=>{if(e.length>1){for(let t of['\"',\"'\"])if(!(!e.startsWith(t)||!e.endsWith(t)))return e.slice(t.length,-t.length).replace(ye,n=>n.slice(1))}return e};function Y(e){let t=!0,n=K(e);if(n.length===0)return[[],t];let r=[],o=[r],i=[o],s=[];for(let l of n){switch(l.type){case\"combinator\":switch(l.content){case\">>>\":t=!1,s.length&&(r.push(g(s)),s.splice(0)),r=[],o.push(\">>>\"),o.push(r);continue;case\">>>>\":t=!1,s.length&&(r.push(g(s)),s.splice(0)),r=[],o.push(\">>>>\"),o.push(r);continue}break;case\"pseudo-element\":if(!l.name.startsWith(\"-p-\"))break;t=!1,s.length&&(r.push(g(s)),s.splice(0)),r.push({name:l.name.slice(3),value:we(l.argument??\"\")});continue;case\"comma\":s.length&&(r.push(g(s)),s.splice(0)),r=[],o=[r],i.push(o);continue}s.push(l)}return s.length&&r.push(g(s)),[i,t]}var Q={};u(Q,{textQuerySelectorAll:()=>b});var Se=new Set([\"checkbox\",\"image\",\"radio\"]),be=e=>e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&!Se.has(e.type),Pe=new Set([\"SCRIPT\",\"STYLE\"]),w=e=>!Pe.has(e.nodeName)&&!document.head?.contains(e),q=new WeakMap,Z=e=>{for(;e;)q.delete(e),e instanceof ShadowRoot?e=e.host:e=e.parentNode},J=new WeakSet,Te=new MutationObserver(e=>{for(let t of e)Z(t.target)}),y=e=>{let t=q.get(e);if(t||(t={full:\"\",immediate:[]},!w(e)))return t;let n=\"\";if(be(e))t.full=e.value,t.immediate.push(e.value),e.addEventListener(\"input\",r=>{Z(r.target)},{once:!0,capture:!0});else{for(let r=e.firstChild;r;r=r.nextSibling){if(r.nodeType===Node.TEXT_NODE){t.full+=r.nodeValue??\"\",n+=r.nodeValue??\"\";continue}n&&t.immediate.push(n),n=\"\",r.nodeType===Node.ELEMENT_NODE&&(t.full+=y(r).full)}n&&t.immediate.push(n),e instanceof Element&&e.shadowRoot&&(t.full+=y(e.shadowRoot).full),J.has(e)||(Te.observe(e,{childList:!0,characterData:!0}),J.add(e))}return q.set(e,t),t};var b=function*(e,t){let n=!1;for(let r of e.childNodes)if(r instanceof Element&&w(r)){let o;r.shadowRoot?o=b(r.shadowRoot,t):o=b(r,t);for(let i of o)yield i,n=!0}n||e instanceof Element&&w(e)&&y(e).full.includes(t)&&(yield e)};var $={};u($,{checkVisibility:()=>Ee,pierce:()=>A,pierceAll:()=>L});var xe=[\"hidden\",\"collapse\"],Ee=(e,t)=>{if(!e)return t===!1;if(t===void 0)return e;let n=e.nodeType===Node.TEXT_NODE?e.parentElement:e,r=window.getComputedStyle(n),o=r&&!xe.includes(r.visibility)&&!Ne(n);return t===o?e:!1};function Ne(e){let t=e.getBoundingClientRect();return t.width===0||t.height===0}var Ae=e=>\"shadowRoot\"in e&&e.shadowRoot instanceof ShadowRoot;function*A(e){Ae(e)?yield e.shadowRoot:yield e}function*L(e){e=A(e).next().value,yield e;let t=[document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT)];for(let n of t){let r;for(;r=n.nextNode();)r.shadowRoot&&(yield r.shadowRoot,t.push(document.createTreeWalker(r.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var U={};u(U,{xpathQuerySelectorAll:()=>j});var j=function*(e,t){let r=(e.ownerDocument||document).evaluate(t,e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),o;for(;o=r.iterateNext();)yield o};var ve=/[-\\w\\P{ASCII}*]/,ee=e=>\"querySelectorAll\"in e,v=class extends Error{constructor(t,n){super(`${t} is not a valid selector: ${n}`)}},F=class{#e;#r;#n=[];#t=void 0;elements;constructor(t,n,r){this.elements=[t],this.#e=n,this.#r=r,this.#o()}async run(){if(typeof this.#t==\"string\")switch(this.#t.trimStart()){case\":scope\":this.#o();break}for(;this.#t!==void 0;this.#o()){let t=this.#t,n=this.#e;typeof t==\"string\"?t[0]&&ve.test(t[0])?this.elements=c.flatMap(this.elements,async function*(r){ee(r)&&(yield*r.querySelectorAll(t))}):this.elements=c.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!ee(r))return;yield*r.querySelectorAll(t);return}let o=0;for(let i of r.parentElement.children)if(++o,i===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${t}`)}):this.elements=c.flatMap(this.elements,async function*(r){switch(t.name){case\"text\":yield*b(r,t.value);break;case\"xpath\":yield*j(r,t.value);break;case\"aria\":yield*k(r,t.value);break;default:let o=_.get(t.name);if(!o)throw new v(n,`Unknown selector type: ${t.name}`);yield*o.querySelectorAll(r,t.value)}})}}#o(){if(this.#n.length!==0){this.#t=this.#n.shift();return}if(this.#r.length===0){this.#t=void 0;return}let t=this.#r.shift();switch(t){case\">>>>\":{this.elements=c.flatMap(this.elements,A),this.#o();break}case\">>>\":{this.elements=c.flatMap(this.elements,L),this.#o();break}default:this.#n=t,this.#o();break}}},W=class{#e=new WeakMap;calculate(t,n=[]){if(t===null)return n;t instanceof ShadowRoot&&(t=t.host);let r=this.#e.get(t);if(r)return[...r,...n];let o=0;for(let s=t.previousSibling;s;s=s.previousSibling)++o;let i=this.calculate(t.parentNode,[o]);return this.#e.set(t,i),[...i,...n]}},te=(e,t)=>{if(e.length+t.length===0)return 0;let[n=-1,...r]=e,[o=-1,...i]=t;return n===o?te(r,i):n<o?-1:1},Ce=async function*(e){let t=new Set;for await(let r of e)t.add(r);let n=new W;yield*[...t.values()].map(r=>[r,n.calculate(r)]).sort(([,r],[,o])=>te(r,o)).map(([r])=>r)},re=function(e,t){let n,r;try{[n,r]=Y(t)}catch{return e.querySelectorAll(t)}if(r)return e.querySelectorAll(t);if(n.some(o=>{let i=0;return o.some(s=>(typeof s==\"string\"?++i:i=0,i>1))}))throw new v(t,\"Multiple deep combinators found in sequence.\");return Ce(c.flatMap(n,o=>{let i=new F(e,t,o);return i.run(),i.elements}))},Ie=async function(e,t){for await(let n of re(e,t))return n;return null};var ke=Object.freeze({...R,...D,...M,...H,...Q,...$,...U,createDeferredPromise:p,createFunction:X,createTextContent:y,IntervalPoller:E,isSuitableNodeForTextMatching:w,MutationPoller:T,RAFPoller:x}),Re=ke;\n";
//# sourceMappingURL=injected.js.map