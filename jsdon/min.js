self.JSDON=function(e){"use strict";var t="http://www.w3.org/2000/svg",a=JSON.parse,r=function(e){var t=e.length-1,a=e[t];"number"==typeof a&&a<0?e[t]+=-1:e.push(-1)},n=function(e,t){var a=e.name,r=e.value;t.push(2,a),r&&t.push(r)},s=function(e,t,a){var s=e.attributes,c=e.childNodes,i=e.localName;t.push(1,i);for(var l=0,u=s.length;l<u;l++)n(s[l],t);for(var h=0,m=c.length;h<m;h++)o(c[h],t,a);r(t)},c=function(e,t,a){for(var n=e.childNodes,s=0,c=n.length;s<c;s++)o(n[s],t,a);r(t)},o=function(e,t,a){var r=e.nodeType;switch(r){case 1:a(e)&&s(e,t,a);break;case 3:case 8:a(e)&&t.push(r,e.data);break;case 11:case 9:a(e)&&(t.push(r),c(e,t,a));break;case 10:if(a(e)){var n=e.name,o=e.publicId,i=e.systemId;t.push(r,n),o&&t.push(o),i&&t.push(i)}}},i=function(){return!0};return e.fromJSON=function(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n="string"==typeof e?a(e):e,s=n.length,c=r.createDocumentFragment(),o=c,i=!1,l=r,u=!0,h=0;h<s;){var m=n[h++];switch(m){case 1:for(var p=n[h++],f=p.toLowerCase(),d=[],v=0,g="";2===n[h];){var b=n[++h],w="string"==typeof n[h+1]?n[++h]:"";"is"===b&&(g=w),v=d.push({name:b,value:w}),h++}(u||f!==o.localName.toLowerCase())&&(o=o.appendChild("svg"===f||"ownerSVGElement"in o?l.createElementNS(t,p):g?l.createElement(p,{is:g}):l.createElement(p)));for(var S=0;S<v;S++)o.setAttribute(d[S].name,d[S].value);u=!0;break;case 3:o.appendChild(l.createTextNode(n[h++]));break;case 8:o.appendChild(l.createComment(n[h++]));break;case 9:var k=new r.defaultView.DOMParser;if(10===n[h]){h++;for(var C=n[h++],N=[C];"string"==typeof n[h];)N.push('"'.concat(n[h++],'"'));switch(N.length){case 2:N[1]="".concat(/\.dtd"$/i.test(N[1])?"SYSTEM":"PUBLIC"," ").concat(N[1]);break;case 3:N[1]="PUBLIC ".concat(N[1])}switch(C){case"html":case"HTML":l=k.parseFromString("<!DOCTYPE ".concat(N.join(" "),"><html></html>"),"text/html");break;case"svg":case"SVG":l=k.parseFromString("<!DOCTYPE ".concat(N.join(" "),"><svg />"),"image/svg+xml");break;default:l=k.parseFromString("<root />","text/xml")}}else l=k.parseFromString("<html></html>","text/html");o=l.documentElement,u=!1;break;case 11:i=!0;break;default:do{m-=-1,o=o.parentNode||c}while(m<0)}}return i?c:l!==r?l:c.firstChild},e.toJSON=function(e,t){var a=[];return o(e,a,t||i),a},e}({});