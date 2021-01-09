/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,i,e=null)=>{for(;i!==e;){const e=i.nextSibling;t.removeChild(i),i=e}},e=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${e}--\x3e`,n=new RegExp(`${e}|${s}`);class o{constructor(t,i){this.parts=[],this.element=i;const s=[],o=[],l=document.createTreeWalker(i.content,133,null,!1);let c=0,A=-1,d=0;const{strings:u,values:{length:m}}=t;for(;d<m;){const t=l.nextNode();if(null!==t){if(A++,1===t.nodeType){if(t.hasAttributes()){const i=t.attributes,{length:e}=i;let s=0;for(let t=0;t<e;t++)r(i[t].name,"$lit$")&&s++;for(;s-- >0;){const i=u[d],e=a.exec(i)[2],s=e.toLowerCase()+"$lit$",o=t.getAttribute(s);t.removeAttribute(s);const r=o.split(n);this.parts.push({type:"attribute",index:A,name:e,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),l.currentNode=t.content)}else if(3===t.nodeType){const i=t.data;if(i.indexOf(e)>=0){const e=t.parentNode,o=i.split(n),l=o.length-1;for(let i=0;i<l;i++){let s,n=o[i];if(""===n)s=h();else{const t=a.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}e.insertBefore(s,t),this.parts.push({type:"node",index:++A})}""===o[l]?(e.insertBefore(h(),t),s.push(t)):t.data=o[l],d+=l}}else if(8===t.nodeType)if(t.data===e){const i=t.parentNode;null!==t.previousSibling&&A!==c||(A++,i.insertBefore(h(),t)),c=A,this.parts.push({type:"node",index:A}),null===t.nextSibling?t.data="":(s.push(t),A--),d++}else{let i=-1;for(;-1!==(i=t.data.indexOf(e,i+1));)this.parts.push({type:"node",index:-1}),d++}}else l.currentNode=o.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,i)=>{const e=t.length-i.length;return e>=0&&t.slice(e)===i},l=t=>-1!==t.index,h=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,i){const{element:{content:e},parts:s}=t,n=document.createTreeWalker(e,133,null,!1);let o=d(s),r=s[o],l=-1,h=0;const a=[];let c=null;for(;n.nextNode();){l++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),i.has(t)&&(a.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==r&&r.index===l;)r.index=null!==c?-1:r.index-h,o=d(s,o),r=s[o]}a.forEach(t=>t.parentNode.removeChild(t))}const A=t=>{let i=11===t.nodeType?0:1;const e=document.createTreeWalker(t,133,null,!1);for(;e.nextNode();)i++;return i},d=(t,i=-1)=>{for(let e=i+1;e<t.length;e++){const i=t[e];if(l(i))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=t=>"function"==typeof t&&u.has(t),p={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,i,e){this.t=[],this.template=t,this.processor=i,this.options=e}update(t){let i=0;for(const e of this.t)void 0!==e&&e.setValue(t[i]),i++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const i=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(i,133,null,!1);let o,r=0,h=0,a=n.nextNode();for(;r<s.length;)if(o=s[r],l(o)){for(;h<o.index;)h++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(i),customElements.upgrade(i)),i}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),y=` ${e} `;class f{constructor(t,i,e,s){this.strings=t,this.values=i,this.type=e,this.processor=s}getHTML(){const t=this.strings.length-1;let i="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const l=a.exec(t);i+=null===l?t+(n?y:s):t.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+e}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");let i=this.getHTML();return void 0!==w&&(i=w.createHTML(i)),t.innerHTML=i,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),R=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class M{constructor(t,i,e){this.dirty=!0,this.element=t,this.name=i,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new v(this)}_getValue(){const t=this.strings,i=t.length-1,e=this.parts;if(1===i&&""===t[0]&&""===t[1]){const t=e[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!R(t))return t}let s="";for(let n=0;n<i;n++){s+=t[n];const i=e[n];if(void 0!==i){const t=i.value;if(x(t)||!R(t))s+="string"==typeof t?t:String(t);else for(const i of t)s+="string"==typeof i?i:String(i)}}return s+=t[i],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class v{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===p||x(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=p,t(this)}this.value!==p&&this.committer.commit()}}class B{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=h()),t.s(this.endNode=h())}insertAfterPart(t){t.s(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.i);){const t=this.i;this.i=p,t(this)}const t=this.i;t!==p&&(x(t)?t!==this.value&&this.o(t):t instanceof f?this.l(t):t instanceof Node?this.h(t):R(t)?this.A(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const i=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);i===this.endNode.previousSibling&&3===i.nodeType?i.data=e:this.h(document.createTextNode(e)),this.value=t}l(t){const i=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===i)this.value.update(t.values);else{const e=new b(i,t.processor,this.options),s=e._clone();e.update(t.values),this.h(s),this.value=e}}A(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let e,s=0;for(const n of t)e=i[s],void 0===e&&(e=new B(this.options),i.push(e),0===s?e.appendIntoPart(this):e.insertAfterPart(i[s-1])),e.setValue(n),e.commit(),s++;s<i.length&&(i.length=s,this.clear(e&&e.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,i,e){if(this.value=void 0,this.i=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=e}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=p,t(this)}if(this.i===p)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=p}}class S extends M{constructor(t,i,e){super(t,i,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends v{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class J{constructor(t,i,e){this.value=void 0,this.i=void 0,this.element=t,this.eventName=i,this.eventContext=e,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;m(this.i);){const t=this.i;this.i=p,t(this)}if(this.i===p)return;const t=this.i,i=this.value,e=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),s=null!=t&&(null==i||e);e&&this.element.removeEventListener(this.eventName,this.u,this.m),s&&(this.m=Z(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.i=p}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Z=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function G(t){let i=Q.get(t.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Q.set(t.type,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(e);return s=i.keyString.get(n),void 0===s&&(s=new o(t,t.getTemplateElement()),i.keyString.set(n,s)),i.stringsArray.set(t.strings,s),s}const Q=new Map,C=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,i,e,s){const n=i[0];if("."===n){return new S(t,i.slice(1),e).parts}if("@"===n)return[new J(t,i.slice(1),s.eventContext)];if("?"===n)return[new k(t,i.slice(1),e)];return new M(t,i,e).parts}handleTextExpression(t){return new B(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const N=(t,...i)=>new f(t,i,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,j=(t,i)=>`${t}--${i}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const F=t=>i=>{const s=j(i.type,t);let n=Q.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Q.set(s,n));let r=n.stringsArray.get(i.strings);if(void 0!==r)return r;const l=i.strings.join(e);if(r=n.keyString.get(l),void 0===r){const e=i.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(e,t),r=new o(i,e),n.keyString.set(l,r)}return n.stringsArray.set(i.strings,r),r},O=["html","svg"],T=new Set,W=(t,i,e)=>{T.add(t);const s=e?e.element:document.createElement("template"),n=i.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const i=n[t];i.parentNode.removeChild(i),r.textContent+=i.textContent}(t=>{O.forEach(i=>{const e=Q.get(j(i,t));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:i}}=t,e=new Set;Array.from(i.querySelectorAll("style")).forEach(t=>{e.add(t)}),c(t,e)})})})(t);const l=s.content;e?function(t,i,e=null){const{element:{content:s},parts:n}=t;if(null==e)return void s.appendChild(i);const o=document.createTreeWalker(s,133,null,!1);let r=d(n),l=0,h=-1;for(;o.nextNode();){h++;for(o.currentNode===e&&(l=A(i),e.parentNode.insertBefore(i,e));-1!==r&&n[r].index===h;){if(l>0){for(;-1!==r;)n[r].index+=l,r=d(n,r);return}r=d(n,r)}}}(e,r,l.firstChild):l.insertBefore(r,l.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const h=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)i.insertBefore(h.cloneNode(!0),i.firstChild);else if(e){l.insertBefore(r,l.firstChild);const t=new Set;t.add(r),c(e,t)}};window.JSCompiler_renameProperty=(t,i)=>t;const z={toAttribute(t,i){switch(i){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){switch(i){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,i)=>i!==t&&(i==i||t==t),H={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:D};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,e)=>{const s=this._attributeNameForProperty(e,i);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(t,i=H){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdateInternal(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of i)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,i,e=D){return e(t,i)}static _propertyValueFromAttribute(t,i){const e=i.type,s=i.converter||z,n="function"==typeof s?s:s.fromAttribute;return n?n(t,e):t}static _propertyValueToAttribute(t,i){if(void 0===i.reflect)return;const e=i.type,s=i.converter;return(s&&s.toAttribute||z.toAttribute)(t,e)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,e){i!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,i,e=H){const s=this.constructor,n=s._attributeNameForProperty(t,e);if(void 0!==n){const t=s._propertyValueToAttribute(i,e);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const e=this.constructor,s=e._attributeToPropertyMap.get(t);if(void 0!==s){const t=e.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=e._propertyValueFromAttribute(i,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,i,e){let s=!0;if(void 0!==t){const n=this.constructor;e=e||n.getPropertyOptions(t),n._valueHasChanged(this[t],i,e.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),!0!==e.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,e))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this.requestUpdateInternal(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}K.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const L=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i),V=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?Object.assign(Object.assign({},i),{finisher(e){e.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function q(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):V(t,i)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const P=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ${constructor(t,i){if(i!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(P?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const _=(t,...i)=>{const e=i.reduce((i,e,s)=>i+(t=>{if(t instanceof $)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[s+1],t[0]);return new $(e,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const tt={};class it extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const i=(t,e)=>t.reduceRight((t,e)=>Array.isArray(e)?i(e,t):(t.add(e),t),e),e=i(t,new Set),s=[];e.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!P){const i=Array.prototype.slice.call(t.cssRules).reduce((t,i)=>t+i.cssText,"");return new $(String(i),X)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?P?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==tt&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,this.renderRoot.appendChild(i)}))}render(){return tt}}it.finalized=!0,it.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=C.has(e),r=Y&&11===e.nodeType&&!!e.host,l=r&&!T.has(n),h=l?document.createDocumentFragment():e;if(((t,e,s)=>{let n=C.get(e);void 0===n&&(i(e,e.firstChild),C.set(e,n=new B(Object.assign({templateFactory:G},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:F(n)},s)),l){const t=C.get(h);C.delete(h);const s=t.value instanceof b?t.value.template:void 0;W(n,h,s),i(e,e.firstChild),e.appendChild(h),C.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var et=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let st=class extends it{constructor(){super(...arguments),this.name="World",this.count=0}render(){return N`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}foo(){return"foo"}};st.styles=_`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,et([q()],st.prototype,"name",void 0),et([q({type:Number})],st.prototype,"count",void 0),st=et([L("my-element")],st);customElements.define("lit-media-query",class extends it{static get properties(){return{query:{type:String},_match:{type:Boolean}}}constructor(){super(),this.query="(max-width:460px)",this._match=!1}render(){return N`
    <style>
      :host {
        display: none;
      }
    </style>
    `}firstUpdated(){void 0!==window.visualViewport?window.visualViewport.addEventListener("resize",()=>{this._handleRisize()}):window.addEventListener("resize",()=>{this._handleRisize()})}_handleRisize(){window.matchMedia(this.query).matches?!1===this._match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!0},composed:!0,bubbles:!0})),this._match=!0):!0===this._match&&(this.dispatchEvent(new CustomEvent("changed",{detail:{value:!1},composed:!0,bubbles:!0})),this._match=!1)}});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class nt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const i=(t.getAttribute("class")||"").split(/\s+/);for(const t of i)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(i=>t+=i+" "),this.element.setAttribute("class",t)}}}const ot=new WeakMap,rt=(lt=t=>i=>{if(!(i instanceof v)||i instanceof I||"class"!==i.committer.name||i.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:e}=i,{element:s}=e;let n=ot.get(i);void 0===n&&(s.setAttribute("class",e.strings.join(" ")),ot.set(i,n=new Set));const o=s.classList||new nt(s);n.forEach(i=>{i in t||(o.remove(i),n.delete(i))});for(const i in t){const e=t[i];e!=n.has(i)&&(e?(o.add(i),n.add(i)):(o.remove(i),n.delete(i)))}"function"==typeof o.commit&&o.commit()},(...t)=>{const i=lt(...t);return u.set(i,!0),i});var lt;const ht=_`
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 1px gray;
    max-width: 500px;
    font-family: var(--theme-font-family);
    color: var(--theme-font-color, #000)
  }

  .header {
    display: flex;
    flex: 0 0 200px;
    flex-direction: column;
    border-right: 1.5px dashed;
    border-color: #cacaca;
    padding: 0.3rem 1rem;
    text-align: center;
  }

  .header-mobile {
    border-right: 0px;
  }

  img {
    width: 100px;
    margin: 0 auto;
  }

  .right-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.3rem 1rem;
  }

  .right-list p {
    line-height: 1.2;
  } 

  ul {
    list-style:none;
    margin: 0 auto;
    padding: 0;
  }

  li {
    float: left;
    background-color: #fff;
    transition: 0.3s;
    padding: .3rem;
    border-radius: 5px;
  }

  .repository a::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPiSURBVFhHrVdLa1NBFE4Vn807M/eRxAgqWh+IICK6EBHxsRBcuHEhiHThWkTXLqy1+AekoBv1DwiupCIIgqXVKi6VKra0trZWN01V6veNZ8LNzU1MmnxwuPfOnPOdM2fOPG6sWSSTyYSv1AnPcfogQ5AJyBLkF2TSdZxneN7ytD6ZSCSSYtY+HMfZ5bnuXZB/y3veMsV33WV8VwnbbD++5yCDruvuFprWUSqV1oKkH1Ku57Se2GDwXkZmBorF4jqhbQ65XG6b7zjDQtKWCMcIOLcLfWNAcR+cT3XCuRXh+upls/vFTTSUUlvgfNqm26aylfRbCdvKc4bZFXfV6OnpWeMp9caO3BjgG1X9APM4HiaLkqBj2HyC/UM8R22f4db6bWRNQKHfOrfKWAFn2Idq3giSS2gfF7IJEA+D7CnFvDvOF+n7jCz2ptPpbmOby50O87pK3WFfBUwLOrmeK4oUON4pKga+72fzSu1lQNJUged5G9iHZ06aDHwUX5gXAf5GPewQFRhrPRiM0gr3AFFZMSSAP0Fe8XXPKDBV+FhAVBUFq+Rqfc4otQFf67NRg8Ogf3J3jWmtj4cVOJcsvEwmUxCeFSObzfrg/GAL0YrxiW2bxXczHID5VuqCcLQNTOX5SB+Oc5vzPxSMTt7nO3mgcJoxnbNhP8jyc2aAp1q4Y0RsOwYE8CoYgBGtpxhAOdholJR6KXYdA7hf1ASA5cgOnumVRpMBrd+LXceA0Y7VC2Ay2ChKC/nu7ozYtg3WE6Z1LhwAdsTpmiKkmO9c7pTYtw0u9SgftggjlyE6n4h928AgH9ddhlEbkVFAhFi/vcKxYqCeLpKrhp8+uRFVtuKAEt+pYNKk1FXwrPpH1xJWgetKOPWGn0+7FRP4MIeRcaj1Dbn9jrDNROq6YzgBryEjB/z623MXTsJNyOhB8FwH55ixDTmnsB1TfF/sYrGCHMcMANF9xM3oEJq7LAnbK8Eo9Yh9xrAaXbyAWL2okVtBX/VxTKDDXEjEcBGHiCdH6VxBSAu+z7o4KiY1wOgPN3JMIU/NhYSQa/hrOwK8m/Ma2diK9z7+G2B6LqNpNdujkM/nM9CtqqegGF6t39W9pttLqQRQxmiPSVdT2ByPpxDkTFQA0lb/UmqRl2s50w6DRUg/0852FOKRRj8ZpXg8jQCqTj2KDOj/13ILRokghjnnNCYhBZVbDt/5gogKQJyPsp5ErTmUYrGqXzMKAvjBi6mo1IDnBwKYt/qwXYLNAGpjvai0DqTf/JxiVN9BNptKpeLSVQO5eLAGFuB8EKtij3S1D1a4n04X5bMukKFioyxVIxb7C5L+QoUP57xRAAAAAElFTkSuQmCC');
    display: inline-block;
  }

  .download a::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALKSURBVFhH1dZZyA5RHMfxQ0KWRFwoSaQs2eOCS0uRiHAhLl1YCu+FrUghsu9FubQme+LGDSX7luyRJRFlX0J8f3Pm/zjP0zzzvO8z8ya/+vSeOee8039mzsxzXEKG4SN+Z7AQVecQrmJole5CRcxAVVEBJ3yzqpyH3Ykx6qhrDuKUb1aVi7ACvmAg6pQ8C5CX6IRaJ+8C5DZaoVbJWsBllBYgZ9AUFZO1AL1BSQXIUlRM1gJ6YSz0BoSuQG9YxWQtoFyO4rBvpmc3jvlmrjmCvb6ZnB5Yhvt4jA3YElN7TWAdNmMrtkFz1mMtNK6/G2Hj+vsUD7AcPVGU1niFpIWT5hs+4VfQF/oBjX8P+uQ12qCQfggnyCK0QEvMjvvMabRFI1j6QLdY47qYLmgGS0csgZ1jAArRP9uA6Io6w9Ie4VVooSoqcDpGRUc+l/DBN6NMxlQ0iI6cWw2dQxddSGkB16GMxBDfdOdg47aa+8L6JqmDzIdufePoyLk30PiO6Ojv/6TegRVQdmGlb7p5sHErIHx049VBFiMs4C00roWoDIKO+0dHcUoL0CTlPR75pusOG7cC2kHPdVx05HMD2tDYZ3cutDdoGB05twk6R9lH8AR6XlpgC1ATHyu3EBYQphv2Q+MvEC5ARYs2XIRlC9ipjjJZBc2xArpCPz7aBf2EnUMFNIGiuTehhWnjUraA0eogc3AvNk0dZDA0R181pfTRGRVga0DtpDlFBdjK1ObBcgE2+aw64miObdk6wOaEnsFyB0lzihZhb6hTn2EtGK34r3GfqK2+mdAJH2IW9IbYnNA76A5qjr56SXN00YVowaT9juftGpqjKNoyTYC+ZFo0U3Kmj5sW7ESkbs/24Lhv5hrtB/b5Znrqa0NyEv90R/T/FKBJ9bEG9PGyD1hqtFD09dJWantOdK7nOICKGQ5to5Le3yw+YwSCOPcHSoVxxSSyTpQAAAAASUVORK5CYII=');
    display: inline-block;

  }

  .website a::before {

    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAR3SURBVFhHtZfrq1ZFFMZnz8lLZqKkmEVCBV4rraw0L0RRkIkifhEvWGofAj9oVy3tnpqlRHex7By8VGQqaSleCvpgHjMJUroZlH2qQ4h/gf2eNfO+Z+/3nX3Oew76wLPXmll77jNr1rgu4ErnsjnIN+FeeCxz/rxI/lHSXwab/TMEXjDcDrdR8bfIt53zs5DXwV3ov8Azwe6GRhv/2L/b4R2w2+gDN4XRZYvRe1tuQAtcQ4OPwKXoNGqsgH+zRaGs+xBeZrldwE1UfBL5OuxhOe14EdthKd75p0TLtcb8Y0Gv4hL4WqxrjOU0gMkUYFr9jJjO437y/0D2VYLGV8JnpYOBoZybGJJ5+OnRNiWky3EDP/6NnBCSBfTH9idSe8JA48/AVTEp3EPub8hLQ7KA8bFuZjcN1sn/iEw1LmijrQ1qQKIDwruRKagTJ5A2g7XYgPE/JGvs7oL9lBnBqLMjUa+Cxp+EK2IyB2tkVNCrGE7+EngOXUe5gFsw/IC8Fvk4cjcNfoP8Ar5B3q/InUiOWXYv+p2QMu4tqMpGQpbP3Qpl4whmrXRuOXoz5Q7AQ+jrIUuQfY8cB6vYQSbHpgDW3NZbM/MX8iX4EfwU0kE5I3XM1lxOSFSHqUtL4NuQHyDlG0bAHLKH+HwedOcGxR7VHrcK3sf+cNQLYIQ6hk/HZA38o3xWB70OHM/sGHIwNNf5nnITuJyKjiMHhGQRahyujMlaXE3dckQ9Q7IO72CfJ6XiXhPwD/DRdCdB46lTkMc+OCmotfAz+dAJ59gg5ttTeAE+H9R6NNABeUEtRQpseGvbjkwZWH8/Nep1oPFlsNb95pDN5iN3XgJbXt9GJVpLjaZAbD/xQ3PKJmI/CA+lbCJlOY7+RMoG2bz+n0oH5NNX1ZDNZZdIS8JmVOPwMHpJefcxdnWgrP5/1YGOlmAj9ou9BI5p7HATPhfUetC4prKzTVjWwcomvNjHsKmzY2iOqOz24kIyLym3XAca78gRXUXZVmSZI1LoNl9KZ64YL2khWR1iB0pmwKa+EVdsSF1GGsHdSG1EBRK6yT6BWpKv4H7yfw+UbuupfF1Im8nX1b6VOhYgdXPmBpg9yIfbtR1co7YjdWtp41GRxX2fwVfQf0ZuoeB9SIIKi2qGQXVKu5yI2F0PVX4spAOO+EH3v90z3JT+a6SWWrGFRn8bLED3/ln4BLru9fyS0GgyICm5DS2yGh30Kq4JI7eAJB9BV0GYZD5BI0xBcX5hTWk8dQo04rLblXeCBT7csmncyA9a71QnuJItKK1OXaIDCkq1J1JBKVNvdXcWnjcROltYTihdB7yiP420hwaN58PyK2IDiXPvp0HqzBRrNgR66U8h10E9LvJ4GZu8Z2UP5B8m2j95NMFXY103W04XoFHyrMq+gwvRe1luACdC+6HwNLPgIoJ/FfeprJ2IZBjeKPTAVJSrBycRsLlQ+XH8gY6nvXj0ZmCXm00vZP0rn1H2xugW5JjmIhWG74Gt7c9zp5HqyU6YbnEe/zYC5/4H82H4EB13ZtMAAAAASUVORK5CYII=');
    
    content:"";
    width: 2rem;
    height: 2rem;
    display: inline-block;

  }

  li:hover {
    background-color: var(--theme-bg-color-third, blue);
    color: white;
  }

  .mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px gray;
  }

  }`;
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var at=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let ct=class extends it{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this.image="data:image/png;base64,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",this.containerClasses={container:!0,mobile:!1},this.headerClasses={header:!0,"header-mobile":!1},this.data={name:"-Empty name-",description:"-Empty description-",website:"-Empty website url-",repo:null,download:null}}connectedCallback(){super.connectedCallback()}_handleMediaQuery(t){this._isMobile=t.detail.value,this.containerClasses={container:!0,mobile:this._isMobile.valueOf()},this.headerClasses={header:!0,"header-mobile":this._isMobile.valueOf()}}render(){this.containerClasses={container:!0,mobile:this._isMobile.valueOf()},this.headerClasses={header:!0,"header-mobile":this._isMobile.valueOf()};var t=this.data.download?N`
          <li class="download">
            <a href="${this.data.download}" target="_blank"></a>
          </li>
        `:"",i=this.data.repo?N`
          <li class="repository">
            <a href="${this.data.repo}" target="_blank"></a>
          </li>
        `:"";return N`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class=${rt(this.containerClasses)}>
        <div class=${rt(this.headerClasses)}>
          <h2>${this.data.name}</h2>
          <img src="${this.image}" />
        </div>
        <div class="right-list">
          <p>${this.data.description}</p>
          <ul>
            <li class="website">
              <a href="${this.data.website}" target="_blank"></a>
            </li>
            ${t} ${i}
          </ul>
        </div>
      </div>
    `}};ct.styles=[ht],at([q()],ct.prototype,"_query",void 0),at([q()],ct.prototype,"_isMobile",void 0),at([q()],ct.prototype,"image",void 0),at([q()],ct.prototype,"containerClasses",void 0),at([q()],ct.prototype,"headerClasses",void 0),at([q({attribute:"data",converter:t=>{if("string"==typeof t)return JSON.parse(t)}})],ct.prototype,"data",void 0),ct=at([L("jwc-project-card")],ct);const At=_`
  :host {
    display: block;
    font-family: var(--theme-font-family);
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: row;
    border: solid 1px var(--theme-secondary-color);
    max-width: 50%;
  }

  img {
    width: 15rem;
    margin-right: 1rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }

  .profile ul {
    list-style: none;
  }

  .profile li {
    margin-bottom: 0.5rem;
  }

  .social-links {
    margin: 0 auto;
    padding: 0;
  }
  .social-links li {
    float: left;
  }
  .social-links img {
    height: 2rem;
    width: 2rem;
  }

  .github {
    cursor: pointer;
  }

  /* Responsive */
  .container.mobile {
    display: flex;
    flex-direction: column;
    max-width: none;
    width: 100%;
  }

  .profile h2 {
    text-align: center;
  }

  .container.mobile img.photo {
    width: 70%;
    margin: 1rem auto 0 auto;
  }
`;
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var dt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let ut=class extends it{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this._isMenuMobileVisible=!1,this.image="http://jesidea.com/home/img/supermoco-julio-2020.png",this.data={name:"Javier Escacena",username:null,occupation:"Programmer",location:"Cercedilla, Madrid, Spain",company:"@paradigmate",companyUrl:"https://twitter.com/paradigmate?lang=en",email:"javier.escacena@gmail.com",website:"http://jesidea.com",twitter:"@javiescacena",linkedin:"https://www.linkedin.com/in/jescacena/",github:"jescacena"}}_handleMediaQuery(t){this._isMobile=t.detail.value}render(){return console.log("JES user profile render!!",this.data),N`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>

      <div class="container ${this._isMobile?"mobile":""}">
        <img class="photo" src=${this.image} />
        <div class="profile">
          <h2>${this.data.name}</h2>
          <ul>
            <li class="occupation"><strong>${this.data.occupation}</strong></li>
            <li class="company">
              Company:
              <a target="_blank" href=${this.data.companyUrl}
                ><strong>${this.data.company}</strong></a
              >
            </li>
            <li class="location">
              Location:
              <a
                target="_blank"
                href="https://google.es/maps/place/${this.data.location}"
                ><strong>${this.data.location}</strong></a
              >
            </li>
            <li class="email">
              Email: <a href="mailto:${this.data.email}">${this.data.email}</a>
            </li>
            <li class="website">
              Website:
              <a target="_blank" href=${this.data.website}
                >${this.data.website}</a
              >
            </li>
          </ul>
          <ul class="social-links">
            <li class="github">
              <a target="_blank" href="https://github.com/${this.data.github}"
                ><img src=${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="}
              /></a>
            </li>
            <li class="linkedin">
              <a target="_blank" href="${this.data.linkedin}"
                ><img src=${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI4SURBVFhH7VZNTxNRFD0bE7pQE7fGlS79BRr3hp07/A1GXYgxbuQPsIAA8zoIFgga3ZgY3Rhdm2gaw8x7BQVbtPUjtEZ0oRiE1HvuPLUxBDNlwM2c5KT3vZt73ul9nTtFjhw5/onBJz0IqwcwvLg/FVnD2h3BxOdQqtVhXBPGrqRkU2uD+LxXS4k79R4R+YSZehvXX3ZH1gZ2FeG7gldNAbbQ2JYKmbiNsJIIkoy5Z+z2ZG1gP6K0fNCrpgDvka2kCA8M578hiPpFsF9jNbHFoZ1MDDT1y6RGp4HpNyIUPfQZyL0+0r2tDu1kZgbGX7ADKxiLe5WMS7W2kvmJxeRqpl63Uey4nswMFJ0Iuh8iFsleJAZEOG7I+pmsW8K3kr+lnWFufCFjA5OvKDTvM3w8P8NElzUuRsdxze3TmDCuD5NLm2o6UwPGLvhMYiBwV/xKfhPRaWn9Kb9iPsaN6m4bsFeT2J7A7RbzXxGWk4MC+0B/pHtiIHBncfOD5ON1DJWP6J6x9/fOwGjUh9n3NLCG4eiw7gW7YsBVfIZzYFVylzQemzvjO7CGkaeHdM/Yu5j2IzwTAxNLFKrCVI4pA/tFnoJBmOeML2KmQQPfEbqTGHVHJX6MqeUMDfyZbhuePHBTuCHdkM9feVkrbbK3IwMs+v0y8gdwyJCMOfEY6+T7K6+DS9aJgS5fRmG5ICL/8XVM8M9EqdZAUTrBVqYha1hr7AWv1iUG7hW0hbySNGTNgHQxR44c2wL4CXdMCQL2Gc8oAAAAAElFTkSuQmCC"}
              /></a>
            </li>
            <li class="twitter">
              <a target="_blank" href="https://twitter.com/${this.data.twitter}"
                ><img src=${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVFhH7VZLaxNRFA66SUAtuHGjW1F3rooLRRAxc+cmkyj4FxREwZU7u1OUbgpuAjUzk0ebl9Yu7NqVYHVtN4oQaSHzbNL0kb6O50xum1QbzCSzzAeHucy95zvfnHPvuRMaYYQR/ofxyc/hWyXnTDRrnfZj5DM+WQ0LmsEgadajWGGryjTbYJpV82e2ES+0qkw1Hgs6f7hX3A9LmukolT3guQbw/Jo/Qx+lvAcoxuXzEBG0/YNSyFTLJDIkAabb7ecxFi9sQeIdQKKyD3J2FeSMi7YKPNugeevGnDsmaPsH1RGdazzfAFl3vCBEyjSzExxFKaUdHNtfJNWcwIxNYfAWzqGZVmxmA7CMBn2MoO0fBwLipW0i+S7p9tPYzDrEi61DERQcA04JFw88bVyNZhyOPl+Vtu9wAhLvAfDrPtE73FAMRfxIzgHcnQfKQC0E4K3vhqQ2z7GMs6iUAxAQm92kujZjmn2F3l97tXQKN9gDpdxaQGEVb/FfYJrxPPkBcCOuBVMCnm/+lNLG/WQRTojpNujrj8kAU02NNmUgArw66/Yv8bovYKkWadMGIoCOIWUBT0CR684FMd0Td7LmRTlb36GjGJgAaipIuh59u3JZTPeEpNamKf3oG5wAPOcQm90AlnFVpluXrk/ASbHsCKLTy7dpnZxxghWADWaX5+rYjDZxbL/hqX9bK/aGm7hZXeoVB30iEAHxotcBl+R846Gi18+K6UMoafu8nKu/wDLtellSO50ysAy0e7uzwnTno6RarzHIM3y+xBa9wHS3QTWnO6A7+NACyKn7MqIA8eJ2+9IRRkeUZ+tHgnYbCcDnYJcRTy1H0LlzHSOZPxvyOibQzwT+VPzGU2BSKv0Y+ZAvjp8IusHAU98iiuqOUUn8GPmQr6AZYYQReiAU+gNkqkYBvl9ncgAAAABJRU5ErkJggg=="}
              /></a>
            </li>
          </ul>
        </div>
      </div>
    `}};ut.styles=[At],dt([q()],ut.prototype,"_query",void 0),dt([q()],ut.prototype,"_isMobile",void 0),dt([q()],ut.prototype,"_isMenuMobileVisible",void 0),dt([q()],ut.prototype,"image",void 0),dt([q({attribute:"data",converter:t=>{if("string"==typeof t)return JSON.parse(t)}})],ut.prototype,"data",void 0),ut=dt([L("jwc-user-profile")],ut);const mt=_`

    :host {
    //  position: relative;
    }
    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        width: 130px;
        height: 25px;
        margin: 0.5rem 1rem 0.5rem 1rem;
    }


    .menu-desktop {
        list-style: none;
        margin ; 0;
        padding: 0;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);

    }
    .menu-desktop li {
        float:left;
        margin-right: 1rem;
    }
    .menu-mobile-icon img {
        width: 32px;
    }


    .menu-mobile {
        position:absolute;
        width: 20%;
        transition: right 0.3s;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);
        top: 0rem;
        right: -30rem;
        z-index:1111;
        background-color: var(--theme-bg-color-third);
        padding: 1rem;
    }

    .menu-mobile-icon {
        background-color:yellow;
        border-radius: 50%;
    }

    .menu-mobile-icon img {
        margin: 0.5rem;
    }

    .menu-mobile.visible {
        right: 0;
        display: block
    }

    .menu-mobile .close {
        font-weight: bold;
        text-align:right;
        margin-bottom: 2rem;
    }

    .menu-mobile ul {
        list-style: none;
        margin ; 0;
        padding: 0;
    }

    .menu-mobile li {
        margin-bottom: 1rem;
    }

`;var pt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let gt=class extends it{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this._isMenuMobileVisible=!1,this.logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAZCAMAAAAlvm1xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTJM8MI48LZI6MJE6L5I6MJY8LZI6MJE8L5E6MJE8L5E6MJE8MpI8MJI6L5hHPezi3ZVCN+XZ1LR5cJM/NMqinP/z8+vm4e7q5P/w6ZtNQ6diWaReU9zIxbyIgdS1sK5uZt/CveTPyplJQNzEvr2KhMOVjt/Iw+XPy5pKP5dEOqNbUapoX+LLxqdjWd3IwfDw8O7m5sqkntvCv+3t7di5s59USciknplJPvHj46JaT6ZfVsick5ZCN////59TSdm7t7F0bOHOyqpoX5pLQallXNu6tqBVS93AubJ0ae7i3dq/vc2ln+vc2di9uZ1QRuTRye/l4p5SSdvCwtOyq6VcU61sZMKSitq5s7V6cbl+dfDb28OWj5Q8MpM+NOjg2OPTzJ1QRqFXTbR2bqNbUZtLQerj3KpoX5pJPr6Oh7R7c86knOXU0M+vqMegmNvJxuzd2a1wZeLc3OLJwfHx5Mael6lnX6NeVsealL2Mg7BxaLqCfJhGOpE8MvHx8cWflv///6djWe/n59Ctp6NcUv/r65tORLJ7cqVeVqdjWc6tppM9M7ByaryIgKNZT76JgpdHPZtOQ6ZhWKdlW5ZEO6RgVb2KhZpMQti/urmCfJdFPLqEfJZFOqBTSdi+uKlnXpZGPNGyq6RgVti8tqBYT8+rpNe6tcuimqZjWcGTjKRdVahnXdSrpN/IxMWWkNGqo+ra1bmFfJ5RSKRaUaprYcmhm7yJg8mZktK1sK1tZMifl8igmZhGPdrCu6ZdVaxtYt3Bu+TSzb+Ph6lkWqdlXKpqYLFxadi8tdi8tuvX19W0r8aYlKhkXK54cJ9US8yhmObZ1ZdFPNzDvNKxq7V8c7d+da9waMebk8WblOTRzZtORK9vZ6lnX5I7MJM9Mo4zKJE3LY0yJpE5Lo82Ko80KZA3LJM8MY81Ko4zKZI6L5M8Mo0xJZA2K44yJ5M+M4wvJJM9M5E6L481KYwuI40wJZI8MJM7MI83K40zJ4krH5A4LIstIpI9MocoHYcnG4UkGPiQTz4AAADddFJOUwBVIpm73RGId+5mqjNEzPMr9zmx/oIGEBkL7c/dRqJiwzc171OekkMx8fnSyjTdSxEff1UWUud87BvX1ob6AuI+ukjN5cxV3k2+LT5sMlvnISjjJEnQwIdCragZkPz8Ljfq2rja7iXA8JqjaDxngUg2vyw+E4zU2omRvK7z/BOGBdUgdMYN4LDgyG74tp/Sj+3kx9Pt0aTiXZ71qPflV8XrQ9cu4XE0d9KR2s9lQY1kMaLe2MeAfn1otnZs7kzXs1M5gNDEu7hJYyddetd/43A+8klVi7bDgI1D57nLxB441AAABOlJREFUSMfNV2V01FgUjs6byWSmRkvdoaW0sLhvkcV9cSjFoci6K+sO6+7u7u7ubuclk4z7dFqgLWvxpDOdDT/YczY/mjm537vv3vvd+71XBPn/POfNvfq6m6+55KIzTjrcnmkAnBA/BGDFjZCNBGG7l4Mn1B32BG3QYYoZdynr38f4YNDHMPu4c4ZnwlkBICC0A4BmQgAJgQNAGT5SkDQN4YIJcR/j7oINDe2BpC/Bd+7OjCWhzcQbmbajHVrNQjji+nCM75o+b3JT08qnp7i9iaC7NhPWAc2oTUdYbBAzi+GmeMLfVjH/tbeXDX715fm1zdGYp7R/BiwOzahNR1ghYRbCLUmfq+aZBW+EWa6L5XLGLJ7OxsK3Fx1qoc0RTlMqCko9If+CV1gv2/DWxn5JvmNTdnNkv7uqTzAKIfh3dwIiZUcM2iwmMcyI+AJ569e6eraXrax6N4/1dQyY2uqZMLUQQfKHImndZUaFgMBSqbCbUbEqGnLP2hNmW3I3wpy8rc+ysCe3/K+nyu9HkLIhJwuAkccYu8uECgFhIN8iTjEJUbMYxnv5DdVbPF+t2xBmvfHN6x7wBipzcyoeF7vylHIEGTYk3zDoWqFRQQnsuEXZCRC4mrROBUYQFIIDfZiBCKR0+QRA+CO6OCoYafyYZ3d8H66ZPYjvGPgguz/45MR5jxwp2IouG1pw6hg9XkIrtF3ck5ZyxkiHOA1Wpf808in5k6bTqJOWuJLJtFtlh05EjmHb0nbPDzu7f5xTl5N8vnoS5FYUPTpNQg4fe/lZxu6SlyAWJyH3n8iMk5ScUQpCJR8oUak6bZXfTgmIkapRes90Rd5f3xpd9V1XqHXuh2xW9Z0uz3JkWqlYB6TKHxtm7C41WzlZaegwo3AKCFQNgVAki1SqAnTZpm2qUXZ0t58f9Olmz7ff/NTtrvuAzapvdnkfG1d8xxrROJm7qtfoy1QAyR9G2Cg5dZAuDhS0YYiOFXpV2k2QK4tYBc0oV+3WaCj5Tkvc37jr688+WRuZWX9bkB997yTuQtE48M8reqmwFD4tHUrasQQgpNJ0mlQDIyEtj6xTXCJ1oECcZpSrNsobClQu3uJxL1z9USx4sOUufyhSspR3nT0CQUZcWVNoOBOVzfAU7SXUnHWdFjihFclyKn3iMMqYalSqdvFoL8PmZx8dZzku0DGl8L4Iw64e5Q65/phdGeue2MeRSaYooYVUWhXR5INUw1SOTMrYNIRuVFk8Pc5A/sXsFXuz2koeHjmAZULcjCcCIQYG/J3nn9uHTttSRcehdKIuH0q/a0emVY0yxUirR/dpbAKGX3hz0ZIli2Y1RplE9AvkJZYRHm5htlozixi1MvraUuFlVcac6qXTFrX0Km26XtNGox7Y8VmeGOM/ULxs8Fi3m0l42nJr3+MYeCBeMkebB1qklFJZl39guMooLkVn0GkblMJFCTFlq0VYrJAEHOlG6TmuOCzc5HhvT7uPgZ2//frLts8PBvqNP7a/5tEu7gw0/gklBGFExPwwG5qi00AqCIXaBZJQVFcoK51q1O58J57Jcz1BCPkk15q3a/vfm+q/fP2hgl53McpwO7LghDBmVjkZZeKAeHsWZ1bmCYjfaVGMlLsnJc2mTBWeapSfsj17r73hnueW/9y0dcfvO9ekHIYC0U7qv/u/4h+qRvoKHIWnRAAAAABJRU5ErkJggg==",this.menuItems=[{label:"Home",url:"/home"},{label:"About",url:"/home/about"},{label:"Articles",url:"/home/articles"}]}_handleMediaQuery(t){this._isMobile=t.detail.value}_handleClick(){this._toggleMenuMobile()}_toggleMenuMobile(){this._isMenuMobileVisible=!this._isMenuMobileVisible}renderMenuItems(){return this.menuItems.map(t=>N`<li><a href=${t.url}>${t.label}</a></li>`)}renderMenu(){return N`
      ${this._isMobile?N`<a
            href="#"
            class="menu-mobile-icon"
            @click="${this._handleClick}"
            ><img src=${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVFhH7dY9DkBAFATg17gMzoMWZ6P1cyYO4ATMSChk63mKN8nX2GI2Npu3Fon8IRUccIqxs4HkopItnw9KK1gG/BUdtCLsYie7IxH/FDDADJMIu0YowTZI3VGFHfw3kIPHEbCTxx+J+OcZxz1wTCqw6x3HfBSk7qjC/SBJLSi5PkpriEQ8Y3YBGdA68Zu0vE8AAAAASUVORK5CYII="}
          /></a>`:N`<ul class="menu-desktop">
            ${this.renderMenuItems()}
          </ul>`}
    `}renderMenuMobile(){const t={"menu-mobile":!0,visible:this._isMenuMobileVisible.valueOf()};return N`
      ${this._isMobile?N` <div class=${rt(t)}>
            <div class="close" @click="${this._toggleMenuMobile}">X</div>
            <ul>
              ${this.renderMenuItems()}
            </ul>
          </div>`:N``}
    `}render(){console.log("JES render header 222!!!",this.menuItems);const t=this.renderMenu();return N`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class="container">
        <img src=${this.logo} />
        ${t}
      </div>
      ${this.renderMenuMobile()}
    `}};gt.styles=[mt],pt([q()],gt.prototype,"_query",void 0),pt([q()],gt.prototype,"_isMobile",void 0),pt([q()],gt.prototype,"_isMenuMobileVisible",void 0),pt([q()],gt.prototype,"logo",void 0),pt([q({attribute:"menu-items",converter:(t,i)=>{if(console.log("JES type",i),"string"==typeof t)return JSON.parse(t)}})],gt.prototype,"menuItems",void 0),gt=pt([L("jwc-layout-header")],gt);const bt=_`
  :host {
    //  position: relative;
  }

  .container {
    font-family: var(--theme-font-family);
    color: var(--theme-font-color, #000);
    background-color: var(--theme-bg-color-secondary);
    text-align: center;
    padding: 1rem;
  }

  ul.social-links {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social-links li {
    float: left;
  }
  .social-links li img {
    width: 1.5rem;
  }

  .copyright {
    float: none;
    clear: left;
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }
`;var wt;!function(t){t.Github="github",t.Linkedin="linkedin",t.Twitter="twitter"}(wt||(wt={}));
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var yt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let ft=class extends it{constructor(){super(...arguments),this._query="(max-width: 800px)",this._isMobile=window.visualViewport.width<800,this._isMenuMobileVisible=!1,this.socialLinkItems=[{type:wt.Github,url:"https://github.com/jescacena"},{type:wt.Linkedin,url:"https://www.linkedin.com/in/jescacena"},{type:wt.Twitter,url:"https://twitter.com/javiescacena"}]}_handleMediaQuery(t){this._isMobile=t.detail.value}_getIconBySocialNetwork(t){switch(t){case wt.Github:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==";case wt.Linkedin:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI4SURBVFhH7VZNTxNRFD0bE7pQE7fGlS79BRr3hp07/A1GXYgxbuQPsIAA8zoIFgga3ZgY3Rhdm2gaw8x7BQVbtPUjtEZ0oRiE1HvuPLUxBDNlwM2c5KT3vZt73ul9nTtFjhw5/onBJz0IqwcwvLg/FVnD2h3BxOdQqtVhXBPGrqRkU2uD+LxXS4k79R4R+YSZehvXX3ZH1gZ2FeG7gldNAbbQ2JYKmbiNsJIIkoy5Z+z2ZG1gP6K0fNCrpgDvka2kCA8M578hiPpFsF9jNbHFoZ1MDDT1y6RGp4HpNyIUPfQZyL0+0r2tDu1kZgbGX7ADKxiLe5WMS7W2kvmJxeRqpl63Uey4nswMFJ0Iuh8iFsleJAZEOG7I+pmsW8K3kr+lnWFufCFjA5OvKDTvM3w8P8NElzUuRsdxze3TmDCuD5NLm2o6UwPGLvhMYiBwV/xKfhPRaWn9Kb9iPsaN6m4bsFeT2J7A7RbzXxGWk4MC+0B/pHtiIHBncfOD5ON1DJWP6J6x9/fOwGjUh9n3NLCG4eiw7gW7YsBVfIZzYFVylzQemzvjO7CGkaeHdM/Yu5j2IzwTAxNLFKrCVI4pA/tFnoJBmOeML2KmQQPfEbqTGHVHJX6MqeUMDfyZbhuePHBTuCHdkM9feVkrbbK3IwMs+v0y8gdwyJCMOfEY6+T7K6+DS9aJgS5fRmG5ICL/8XVM8M9EqdZAUTrBVqYha1hr7AWv1iUG7hW0hbySNGTNgHQxR44c2wL4CXdMCQL2Gc8oAAAAAElFTkSuQmCC";case wt.Twitter:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVFhH7VZLaxNRFA66SUAtuHGjW1F3rooLRRAxc+cmkyj4FxREwZU7u1OUbgpuAjUzk0ebl9Yu7NqVYHVtN4oQaSHzbNL0kb6O50xum1QbzCSzzAeHucy95zvfnHPvuRMaYYQR/ofxyc/hWyXnTDRrnfZj5DM+WQ0LmsEgadajWGGryjTbYJpV82e2ES+0qkw1Hgs6f7hX3A9LmukolT3guQbw/Jo/Qx+lvAcoxuXzEBG0/YNSyFTLJDIkAabb7ecxFi9sQeIdQKKyD3J2FeSMi7YKPNugeevGnDsmaPsH1RGdazzfAFl3vCBEyjSzExxFKaUdHNtfJNWcwIxNYfAWzqGZVmxmA7CMBn2MoO0fBwLipW0i+S7p9tPYzDrEi61DERQcA04JFw88bVyNZhyOPl+Vtu9wAhLvAfDrPtE73FAMRfxIzgHcnQfKQC0E4K3vhqQ2z7GMs6iUAxAQm92kujZjmn2F3l97tXQKN9gDpdxaQGEVb/FfYJrxPPkBcCOuBVMCnm/+lNLG/WQRTojpNujrj8kAU02NNmUgArw66/Yv8bovYKkWadMGIoCOIWUBT0CR684FMd0Td7LmRTlb36GjGJgAaipIuh59u3JZTPeEpNamKf3oG5wAPOcQm90AlnFVpluXrk/ASbHsCKLTy7dpnZxxghWADWaX5+rYjDZxbL/hqX9bK/aGm7hZXeoVB30iEAHxotcBl+R846Gi18+K6UMoafu8nKu/wDLtellSO50ysAy0e7uzwnTno6RarzHIM3y+xBa9wHS3QTWnO6A7+NACyKn7MqIA8eJ2+9IRRkeUZ+tHgnYbCcDnYJcRTy1H0LlzHSOZPxvyOibQzwT+VPzGU2BSKv0Y+ZAvjp8IusHAU98iiuqOUUn8GPmQr6AZYYQReiAU+gNkqkYBvl9ncgAAAABJRU5ErkJggg==";default:return console.log("Error _getIconBySocialNetwork: no icon for this network type"),""}}_renderItems(){return this.socialLinkItems.map(t=>N`<li>
        <a target="_blank" href=${t.url} class="social-link-item"
          ><img src=${this._getIconBySocialNetwork(t.type)}
        /></a>
      </li>`)}render(){console.log("JES render footer!!!");const t=(new Date).getFullYear();return N`
      <lit-media-query
        .query="${this._query}"
        @changed="${this._handleMediaQuery}"
      >
      </lit-media-query>
      <div class="container">
        <ul class="social-links">
          ${this._renderItems()}
        </ul>
        <div class="copyright">
          © Copyright Javier Escacena ${t}, All Rights Reserved.
        </div>
      </div>
    `}};ft.styles=[bt],yt([q()],ft.prototype,"_query",void 0),yt([q()],ft.prototype,"_isMobile",void 0),yt([q()],ft.prototype,"_isMenuMobileVisible",void 0),yt([q({attribute:"social-link-items",converter:(t,i)=>{if(console.log("JES footer type",i),"string"==typeof t)return JSON.parse(t)}})],ft.prototype,"socialLinkItems",void 0),ft=yt([L("jwc-layout-footer")],ft);
/**
 * @license
 * Copyright (c) 2020 Jesidea Authors. All rights reserved.
 */
var xt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let Rt=class extends it{constructor(){super(...arguments),this.icon=null,this.header=null,this.source=[]}render(){return N` <div>JESidea jwc-quote-random-box</div> `}};Rt.styles=_`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,xt([q()],Rt.prototype,"icon",void 0),xt([q()],Rt.prototype,"header",void 0),xt([q()],Rt.prototype,"source",void 0),Rt=xt([L("jwc-quote-random-box")],Rt);export{ft as JwcLayoutFooter,gt as JwcLayoutHeader,ct as JwcProjectCard,Rt as JwcQuoteRandomBox,ut as JwcUserProfile,st as MyElement};
