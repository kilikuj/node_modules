self.JSDON=function(e){"use strict";const{parse:t}=JSON,s=e=>{const t=e.length-1,s=e[t];"number"==typeof s&&s<0?e[t]+=-1:e.push(-1)},a=({name:e,value:t},s)=>{s.push(2,e),t&&s.push(t)},r=(e,t,n)=>{const{nodeType:o}=e;switch(o){case 1:n(e)&&(({attributes:e,childNodes:t,localName:n},o,c)=>{o.push(1,n);for(let t=0,{length:s}=e;t<s;t++)a(e[t],o);for(let e=0,{length:s}=t;e<s;e++)r(t[e],o,c);s(o)})(e,t,n);break;case 3:case 8:n(e)&&t.push(o,e.data);break;case 11:case 9:n(e)&&(t.push(o),(({childNodes:e},t,a)=>{for(let s=0,{length:n}=e;s<n;s++)r(e[s],t,a);s(t)})(e,t,n));break;case 10:if(n(e)){const{name:s,publicId:a,systemId:r}=e;t.push(o,s),a&&t.push(a),r&&t.push(r)}}},n=()=>!0;return e.fromJSON=(e,s=document)=>{const a="string"==typeof e?t(e):e,{length:r}=a,n=s.createDocumentFragment();let o=n,c=!1,l=s,h=!0,i=0;for(;i<r;){let e=a[i++];switch(e){case 1:const t=a[i++],r=t.toLowerCase(),m=[];let p=0,u="";for(;2===a[i];){const e=a[++i],t="string"==typeof a[i+1]?a[++i]:"";"is"===e&&(u=t),p=m.push({name:e,value:t}),i++}(h||r!==o.localName.toLowerCase())&&(o=o.appendChild("svg"===r||"ownerSVGElement"in o?l.createElementNS("http://www.w3.org/2000/svg",t):u?l.createElement(t,{is:u}):l.createElement(t)));for(let e=0;e<p;e++)o.setAttribute(m[e].name,m[e].value);h=!0;break;case 3:o.appendChild(l.createTextNode(a[i++]));break;case 8:o.appendChild(l.createComment(a[i++]));break;case 9:const d=new s.defaultView.DOMParser;if(10===a[i]){i++;const e=a[i++],t=[e];for(;"string"==typeof a[i];)t.push(`"${a[i++]}"`);switch(t.length){case 2:t[1]=`${/\.dtd"$/i.test(t[1])?"SYSTEM":"PUBLIC"} ${t[1]}`;break;case 3:t[1]=`PUBLIC ${t[1]}`}switch(e){case"html":case"HTML":l=d.parseFromString(`<!DOCTYPE ${t.join(" ")}><html></html>`,"text/html");break;case"svg":case"SVG":l=d.parseFromString(`<!DOCTYPE ${t.join(" ")}><svg />`,"image/svg+xml");break;default:l=d.parseFromString("<root />","text/xml")}}else l=d.parseFromString("<html></html>","text/html");o=l.documentElement,h=!1;break;case 11:c=!0;break;default:do{e-=-1,o=o.parentNode||n}while(e<0)}}return c?n:l!==s?l:n.firstChild},e.toJSON=(e,t)=>{const s=[];return r(e,s,t||n),s},e}({});
