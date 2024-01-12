function t(t,e,s,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(r<3?n(a):r>3?n(e,s,a):n(e,s))||a);return r>3&&a&&Object.defineProperty(e,s,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)},o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,y=m?m.emptyScript:"",$=g.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},f=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...c(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??f)(this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,$?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=w.trustedTypes,D=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,C="?"+E,M=`<${C}>`,T=document,O=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,U="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,H=/>/g,N=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,B=/"/g,j=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),L=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,q=T.createTreeWalker(T,129);function G(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=R;for(let e=0;e<s;e++){const s=t[e];let o,h,d=-1,l=0;for(;l<s.length&&(a.lastIndex=l,h=a.exec(s),null!==h);)l=a.lastIndex,a===R?"!--"===h[1]?a=I:void 0!==h[1]?a=H:void 0!==h[2]?(j.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=N):void 0!==h[3]&&(a=N):a===N?">"===h[0]?(a=n??R,d=-1):void 0===h[1]?d=-2:(d=a.lastIndex-h[2].length,o=h[1],a=void 0===h[3]?N:'"'===h[3]?B:z):a===B||a===z?a=N:a===I||a===H?a=R:(a=N,n=void 0);const c=a===N&&t[e+1].startsWith("/>")?" ":"";r+=a===R?s+M:d>=0?(i.push(o),s.slice(0,d)+S+s.slice(d)+E+c):s+E+(-2===d?e:c)}return[G(t,r+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const a=t.length-1,o=this.parts,[h,d]=J(t,e);if(this.el=Y.createElement(h,s),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=d[r++],s=i.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:a[2],strings:s,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?st:X}),i.removeAttribute(t)}else t.startsWith(E)&&(o.push({type:6,index:n}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),q.nextNode(),o.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===C)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)o.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===L)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=P(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);q.currentNode=i;let n=q.nextNode(),r=0,a=0,o=s[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new Q(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new it(n,this,t)),this._$AV.push(e),o=s[++a]}r!==o?.index&&(n=q.nextNode(),r++)}return q.currentNode=T,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Q(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const i=t;let a,o;for(t=n[0],a=0;a<n.length-1;a++)o=K(this,i[s+a],e,a),o===L&&(o=this._$AH[a]),r||=!P(o)||o!==this._$AH[a],o===F?t=F:t!==F&&(t+=(o??"")+n[a+1]),this._$AH[a]=o}r&&!i&&this.O(t)}O(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===F?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class st extends X{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===L)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(Y,Q),(w.litHtmlVersions??=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new Q(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f},dt=(t=ht,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t)}}throw Error("Unsupported decorator location: "+i)};function lt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ct(t){return lt({...t,state:!0,attribute:!1})}class pt{constructor(t,{target:e,config:s,callback:i,skipInitial:n}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,null!==e&&this.t.add(e??t),this.l=s,this.o=n??this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver((t=>{this.handleChanges(t),this.h.requestUpdate()})),t.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}}function ut(t){return!t||0===Object.keys(t).length}class gt{constructor(){this._lang=document.documentElement.lang.slice(0,2),this._locales={de:{Mon:"Mo",Tues:"Di",Wed:"Mi",Thurs:"Do",Fri:"Fr",Sat:"Sa",Sun:"So",1:"Jan",2:"Feb",3:"Mär",4:"Apr",5:"Mai",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Okt",11:"Nov",12:"Dez",Day:"Tag",Month:"Monat","Current Month":"Aktueller Monat","all day":"ganztägig"}}}get lang(){return this._lang}set lang(t){this._lang=t}getTranslation(t){if(!t)return t;const e=this._locales[this.lang];return e&&e[t]||t}}let mt=class extends rt{constructor(){super(...arguments),this.translations=new gt}render(){var t,e,s,i,n;return W`<div class="controls"><div class="info"><span><strong>${this.heading||this.translations.getTranslation("Current Month")}</strong></span><div ?hidden="${ut(this.expandedDate)}"><span class="day">${null===(t=this.expandedDate)||void 0===t?void 0:t.day}</span> <span class="month">${this.translations.getTranslation(null===(e=this.expandedDate)||void 0===e?void 0:e.month)}</span> <span class="year">${null===(s=this.expandedDate)||void 0===s?void 0:s.year}</span></div><div ?hidden="${!ut(this.expandedDate)}"><span class="month">${this.translations.getTranslation(null===(i=this.activeDate)||void 0===i?void 0:i.month)}</span> <span class="year">${null===(n=this.activeDate)||void 0===n?void 0:n.year}</span></div></div><div class="context" @click="${this._dispatchSwitchView}"><span ?data-active="${!ut(this.expandedDate)}" data-context="day">${this.translations.getTranslation("Day")}</span> <span ?data-active="${ut(this.expandedDate)}" data-context="month">${this.translations.getTranslation("Month")}</span></div><div class="buttons" @click="${this._dispatchSwitchDate}"><button name="previous">«</button> <button name="next">»</button></div></div>`}_dispatchSwitchDate(t){const e=t.target,s=t.target===t.currentTarget?"container":e.name,i=new CustomEvent("switchdate",{detail:{direction:s},bubbles:!0,composed:!0});this.dispatchEvent(i)}_dispatchSwitchView(t){const e=t.target,s=t.target===t.currentTarget?"container":e.dataset.context,i=new CustomEvent("switchview",{detail:{view:s},bubbles:!0,composed:!0});this.dispatchEvent(i)}};mt.styles=a`.controls{height:3.5em;width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center;justify-content:space-between;align-items:center;border-bottom:1px solid var(--separator-light)}@media (max-width:375px){.controls{font-size:small;height:4.5em}}.info{padding-left:1em;text-align:right}.day,.month,.year{color:rgba(0,0,0,.6)}.context{display:flex}.context>*{padding:.25em .5em;border:1px solid var(--separator-light)}.context>:first-child{border-radius:var(--border-radius-sm) 0 0 var(--border-radius-sm);border-right:none}.context>:last-child{border-radius:0 var(--border-radius-sm) var(--border-radius-sm) 0;border-left:none}.buttons{padding-right:1em}button{padding:.75em;margin:0;border-radius:50%;line-height:.5em;border:1px solid transparent}span[data-active]{background-color:var(--separator-light)}`,t([lt({type:String})],mt.prototype,"heading",void 0),t([lt({type:Object})],mt.prototype,"activeDate",void 0),t([lt({type:Object})],mt.prototype,"expandedDate",void 0),mt=t([ot("lms-calendar-header")],mt);class yt{constructor({date:t,direction:e}){this.date=t,this.direction=e}set _date(t){this.date=t}set _direction(t){this.direction=t}getDateByDayInDirection(){if(!this.date)throw Error("Date is not defined.");if(!this.direction)throw Error("Direction is not defined.");if("previous"===this.direction){const t=new Date(this.date.year,this.date.month-1,this.date.day-1);return{day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear()}}if("next"===this.direction){const t=new Date(this.date.year,this.date.month-1,this.date.day+1);return{day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear()}}return this.date}getDateByMonthInDirection(){if(!this.date)throw Error("Date is not defined.");if(!this.direction)throw Error("Direction is not defined.");return"previous"===this.direction?this.date.month-1==0?{...this.date,year:this.date.year-1,month:12}:{...this.date,month:this.date.month-1}:"next"===this.direction?this.date.month+1===13?{...this.date,year:this.date.year+1,month:1}:{...this.date,month:this.date.month+1}:this.date}}let $t=class extends rt{constructor(){super(...arguments),this.translations=new gt}render(){var t;return 0!==Object.keys(this.activeDate||{day:1,month:1,year:2022}).length?W`<div class="month">${null===(t=this._getCalendarArray())||void 0===t?void 0:t.map((({year:t,month:e,day:s})=>W`<div class="day" data-date="${t}-${e}-${s}" @click="${this._handleExpand}"><div class="indicator">${1===s?`${s}. ${this.translations.getTranslation(e)}`:s}</div><slot name="${t}-${e}-${s}"></slot></div>`))}</div>`:W``}_handleExpand(t){if(null===t.target)return;const e=t.target,{date:s}=e.dataset;if(!s)return;const[i,n,r]=s.split("-").map((t=>parseInt(t,10))),a=new CustomEvent("expand",{detail:{date:{day:r,month:n,year:i}},bubbles:!0,composed:!0});this.dispatchEvent(a)}_getDaysInMonth(t){return new Date(t.year,t.month,0).getDate()}_getOffsetOfFirstDayInMonth(t){const e=new Date(`${t.year}/${t.month}/01`).getDay();return 0===e?6:e-1}_getDatesInMonthAsArray(t,e){return[...Array.from(Array(this._getDaysInMonth(t)).keys(),((e,s)=>({year:t.year,month:t.month,day:s+1}))).slice(...e)]}_getCalendarArray(){if(!this.activeDate)return;const t=new yt({date:this.activeDate||{day:1,month:1,year:2022}});t._direction="previous";const e=this._getDatesInMonthAsArray(t.getDateByMonthInDirection(),this._getOffsetOfFirstDayInMonth(this.activeDate)?[-1*this._getOffsetOfFirstDayInMonth(this.activeDate)]:[-0,-0]),s=this._getDatesInMonthAsArray(this.activeDate,[]);t._direction="next";const i=this._getDatesInMonthAsArray(t.getDateByMonthInDirection(),[0,42-(e.length+s.length)]);return e.concat(s,i)}};$t.styles=a`.month{height:calc(100% - 5.5em + 2px);display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid var(--separator-light)}.month>div{border-bottom:1px solid var(--separator-light);border-right:1px solid var(--separator-light)}.month>div:nth-child(7n + 7){border-right:none}.month>div:nth-last-child(-n + 7){border-bottom:none}.day{width:100%;position:relative;display:flex;flex-direction:column;overflow-x:hidden;gap:1px}.indicator{position:sticky;top:.25em;text-align:right;padding:0 .25em;margin-bottom:.25em;text-align:left}`,t([lt({attribute:!1})],$t.prototype,"activeDate",void 0),$t=t([ot("lms-calendar-month")],$t);let _t=class extends rt{constructor(){super(...arguments),this._hours=[...Array(25).keys()],this._hasActiveSidebar=!1}render(){return W`<div class="container"><div class="main w-${this._hasActiveSidebar?"70":"100"}">${this._hours.map(((t,e)=>W`<div class="hour" style="${this._getHourIndicator(t)}"><span class="indicator">${t<10?`0${t}:00`:`${t}:00`}</span></div>${e?W`<div class="separator" style="grid-row:${60*t}"></div>`:W``}<slot name="${t}" class="entry"></slot>`))}</div><div class="sidebar w-${this._hasActiveSidebar?"30":"0"}" ?hidden="${!this._hasActiveSidebar}"></div></div>`}_getHourIndicator(t){return 24!==t?`grid-row: ${60*(t+1)-59}/${60*(t+1)}`:"grid-row: 1440"}};_t.styles=a`.container{display:flex;height:calc(100% - 3.5em);width:100%}.main{display:grid;grid-template-columns:4em 1fr;grid-template-rows:repeat(1440,1fr);height:calc(100% - 1em);gap:1px;overflow-y:scroll;text-align:center;padding:.5em;position:relative}.hour{text-align:center}.indicator{position:relative;top:-.6em}.separator{grid-column:2/3;border-top:1px solid var(--separator-light);position:absolute;width:100%;z-index:0}.sidebar{height:100%;border-left:1px solid var(--separator-light)}.w-100{width:100%}.w-70{width:70%}.w-30{width:30%}.w-0{width:0}`,t([ct()],_t.prototype,"_hours",void 0),t([ct()],_t.prototype,"_hasActiveSidebar",void 0),_t=t([ot("lms-calendar-day")],_t);let vt=class extends rt{constructor(){super(...arguments),this.translations=new gt}render(){return W`<div><span>${this.translations.getTranslation("Mon")}</span> <span>${this.translations.getTranslation("Tues")}</span> <span>${this.translations.getTranslation("Wed")}</span> <span>${this.translations.getTranslation("Thurs")}</span> <span>${this.translations.getTranslation("Fri")}</span> <span>${this.translations.getTranslation("Sat")}</span> <span>${this.translations.getTranslation("Sun")}</span></div>`}};vt.styles=a`div{height:1.75em;display:grid;grid-template-columns:repeat(7,1fr)}span{padding:.25em;text-align:left}`,vt=t([ot("lms-calendar-context")],vt);let ft=class extends rt{constructor(){super(...arguments),this.translations=new gt,this.heading="",this.isContinuation=!1,this._sumReducer=(t,e)=>t+e}render(){const t=ut(this.content);return W`<div class="main" ?data-highlighted="${this._highlighted}" ?data-extended="${this._extended}"><span @click="${this._handleClick}" title="${this.heading}${t?"":` · ${this.content}`}"><span>${this.heading} </span><span ?hidden="${t}">· ${this.content}</span> </span>${this.isContinuation?this.translations.getTranslation("all day"):W`<span class="nowrap">${this._displayInterval(this.time)}</span>`}</div>`}_displayInterval(t){if(!t)return F;const e=[t.start.hours,t.start.minutes,t.end.hours,t.end.minutes];if(24===e[2]&&e.reduce(this._sumReducer,0)%24==0)return this.translations.getTranslation("all day");const[s,i,n,r]=e.map((t=>t<10?`0${t}`:t));return`${s}:${i} - ${n}:${r}`}_handleClick(){this._highlighted=!this._highlighted,this._extended=!this._extended}};function bt(t){let e=0,s=0,i=0;if(t){const n=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,s,i)=>`#${e}${e}${s}${s}${i}${i}`)).substring(1).match(/.{2}/g);if(!n)return["rgb(255,255,255)","rgb(0,0,0)"];[e,s,i]=n.map((t=>parseInt(t,16)))}const n=(299*e+587*s+114*i)/1e3;return[`rgb(${e},${s},${i})`,Math.abs(n-255)>Math.abs(n-0)?"rgb(255, 255, 255)":"rgb(0, 0, 0)"]}function xt(t){const e=t.map((t=>t.end)).sort(((t,e)=>t-e));t.sort(((t,e)=>t.start-e.start));let s=0,i=0,n=0;const r=[];let a=[];for(;s<t.length&&i<e.length;)t[s].start<e[i]?(a.push(t[s++]),++n):(++i,0==--n&&(r.push(a),a=[]));return a.length>0&&r.push(a),r}ft.styles=a`:host{font-size:small;grid-column:2;border-radius:var(--entry-br);grid-row:var(--start-slot);width:var(--entry-w);margin:var(--entry-m);background-color:var(--entry-bc);color:var(--entry-c);z-index:1}.main{display:flex;justify-content:space-between;padding:.25em;border-radius:var(--border-radius-sm);background-color:inherit}.main>span:first-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}div[data-highlighted]{background:var(--separator-light)}.nowrap{white-space:nowrap}`,t([lt({attribute:!1})],ft.prototype,"time",void 0),t([lt()],ft.prototype,"heading",void 0),t([lt()],ft.prototype,"content",void 0),t([lt({type:Boolean})],ft.prototype,"isContinuation",void 0),t([ct()],ft.prototype,"_highlighted",void 0),t([ct()],ft.prototype,"_extended",void 0),ft=t([ot("lms-calendar-entry")],ft);class wt{constructor(t,e,s){this.entry=t,this.startDate=e,this.index=s,this.entry=t,this.startDate=e,this.currentStartDate=new Date(this.startDate.getTime()+864e5*this.index),this.currentEndDate=new Date(this.currentStartDate.getTime()+864e5-1)}getEntry(){return{...this.entry,date:{start:{day:this.currentStartDate.getDate(),month:this.currentStartDate.getMonth()+1,year:this.currentStartDate.getFullYear()},end:{day:this.currentEndDate.getDate(),month:this.currentEndDate.getMonth()+1,year:this.currentEndDate.getFullYear()}}}}}let At=class extends rt{constructor(){super(...arguments),this.currentDate=new Date,this.activeDate={day:this.currentDate.getDate(),month:this.currentDate.getMonth()+1,year:this.currentDate.getFullYear()},this.entries=[],this.color="#000000",this._calendarWidth=window.innerWidth,this._handleResize=t=>{const[e]=t;this._calendarWidth=e.contentRect.width||this._calendarWidth},this._resizeController=new pt(this,{target:null,callback:this._handleResize,skipInitial:!0})}firstUpdated(t){var e;this._resizeController.observe(null===(e=this.shadowRoot)||void 0===e?void 0:e.firstElementChild)}render(){return W`
      <div>
        <lms-calendar-header
          @switchdate=${this._handleSwitchDate}
          @switchview=${this._handleSwitchView}
          .heading=${this.heading}
          .activeDate=${this.activeDate}
          .expandedDate=${this._expandedDate}
        >
        </lms-calendar-header>

        <lms-calendar-context
          ?hidden=${!ut(this._expandedDate)}
        >
        </lms-calendar-context>

        <lms-calendar-month
          @expand=${this._handleExpand}
          .activeDate=${this.activeDate}
          ?hidden=${!ut(this._expandedDate)}
        >
          ${this._calendarWidth<768?this._getEntriesSumByDay():this._getEntries()}
        </lms-calendar-month>

        <lms-calendar-day
          ?hidden=${ut(this._expandedDate)}
        >
          ${this._getEntriesByDate()}
        </lms-calendar-day>
      </div>
    `}_handleSwitchDate(t){const e=new yt({});if(e._direction=t.detail.direction,this._expandedDate){e._date=this._expandedDate;const t=e.getDateByDayInDirection();return this._expandedDate=t,void(this.activeDate=t)}e._date=this.activeDate,this.activeDate=e.getDateByMonthInDirection()}_handleSwitchView(t){var e;"day"===t.detail.view&&(this._expandedDate=ut(this._expandedDate)?this.activeDate:this._expandedDate),"month"===t.detail.view&&(this.activeDate=null!==(e=this._expandedDate)&&void 0!==e?e:this.activeDate,this._expandedDate=void 0)}_handleExpand(t){this._expandedDate=t.detail.date}_getEntries(){if(this.entries.length){const t=this.entries.sort(((t,e)=>t.time.start.hours-e.time.start.hours||t.time.start.minutes-e.time.start.minutes)),e=t.map((({date:t,time:e,heading:s,color:i},n)=>{const[r,a]=bt(i),[o,,h]=this._getDaysRange(t),d=[];for(let l=0;l<h;l++){const c=new wt({date:t,time:e,heading:s,color:i,content:""},o,l).getEntry(),p=l>0&&h>1,u=W`
              <style>
                lms-calendar-entry.${`_${n}`} {
                  --entry-br: ${h>1?0:"var(--border-radius-sm)"};
                  --entry-m: 0 ${0!==l?0:"0.25em"} 0
                    ${0!==l?0:"1.5em"};
                  --entry-bc: ${r};
                  --entry-c: ${a};
                }
              </style>
              <lms-calendar-entry
                class=${`_${n}`}
                slot="${c.date.start.year}-${c.date.start.month}-${c.date.start.day}"
                .time=${c.time}
                .heading=${p?"":c.heading}
                .isContinuation=${p}
              >
              </lms-calendar-entry>
            `;d.push(u)}return d}));return e.flat()}return F}_getEntriesByDate(){if(ut(this._expandedDate))return;const t=this.entries.filter((t=>{const e=t.time.start,s=t.time.end,i=function(t,e){return Object.keys(t).length===Object.keys(e).length&&Object.entries(t).every((([s,i])=>s in t&&s in e&&typeof t[s]==typeof e[s]&&i===e[s]))}(t.date.start,this._expandedDate||{});return i&&(e.hours<s.hours||e.hours===s.hours&&e.minutes<s.minutes)})),e=function(t){const e=new Map;t.forEach((t=>{e.has(t.group)||e.set(t.group,[]),e.get(t.group).push({index:t.index,depth:t.depth,group:t.group})}));const s=[];return e.forEach((t=>{t.sort(((t,e)=>t.index-e.index)),t.forEach(((t,e)=>{s.push({index:t.index,depth:e,group:t.group})}))})),s.sort(((t,e)=>t.index-e.index)),s}(ut(t)?[]:function(t){const e=t.reduce(((e,s,i)=>1===s.length?[...e,{index:[t.slice(0,i)].flatMap((t=>t.flat().length))[0],depth:0,group:i}]:[...e]),[]),s=t.map(((e,s)=>e.map(((e,i)=>({...e,index:[t.slice(0,s)].flatMap((t=>t.flat().length))[0]+i,group:s}))))).filter((t=>t.length>1));let i=0,n=Math.min(...s.map((t=>t[0].group)));return function t({partitions:s,isNested:r=!1}){i=r?i+=1:0,s.forEach((s=>{const{group:r}=s[0];n!==r&&(i=0),n=r;const a=[...s.map((({start:t,end:e})=>e-t))],o=Math.max(...a),h=a.indexOf(o);e.push({index:s[h].index,depth:i,group:s[h].group}),s.splice(a.indexOf(o),1),t({partitions:xt(s),isNested:!0})}))}({partitions:s}),e.sort(((t,e)=>t.index-e.index))}(this._getPartitionedSlottedItems(t)));return t.map((({time:t,heading:s,content:i,color:n},r)=>{const[a,o]=bt(n);return W`
        <style>
          lms-calendar-entry.${`_${r}`} {
            --start-slot: ${this._getGridSlotByTime(t)};
            --entry-w: ${this._getWidthByGroupSize({grading:e,index:r})}%;
            --entry-m: 0 1.5em 0 ${this._getOffsetByDepth({grading:e,index:r})}%;
            --entry-bc: ${a};
            --entry-c: ${o};
          }
        </style>
        <lms-calendar-entry
          class=${`_${r}`}
          slot=${t.start.hours}
          .time=${t}
          .heading=${s}
          .content=${i}
        >
        </lms-calendar-entry>
      `}))}_getEntriesSumByDay(){const t=this.entries.reduce(((t,e)=>{const{day:s,month:i,year:n}=e.date.start,r=`${s}-${i}-${n}`;return t[r]=t[r]?t[r]+1:1,t}),{});return Object.keys(t).map(((e,s)=>{const[i,n,r]=e.split("-");return W`
        <style>
          lms-calendar-entry.${`_${s}`} {
            --entry-br: var(--border-radius-sm);
            --entry-m: 0 auto;
            --entry-bc: whitesmoke;
            --entry-c: black;
          }
        </style>
        <lms-calendar-entry
          class=${`_${s}`}
          slot="${+r}-${+n}-${+i}"
          .time=${void 0}
          .heading="[ ${t[e].toString()} ]"
        ></lms-calendar-entry>
      `}))}_getGridSlotByTime({start:t,end:e}){const s=60*t.hours+(t.minutes+1);return`${s}/${s+(60*e.hours+e.minutes-s)}`}_getWidthByGroupSize({grading:t,index:e}){return 100/t.filter((s=>s.group===t[e].group)).length}_getOffsetByDepth({grading:t,index:e}){return t[e]?0===t[e].depth?0:t[e].depth*(100/t.filter((s=>s.group===t[e].group)).length):0}_getPartitionedSlottedItems(t){return xt(t.map((t=>this._getGridSlotByTime(t.time).replace(/[^0-9/]+/g,"").split("/"))).map((([t,e])=>[parseInt(t,10),parseInt(e,10)])).map((([t,e])=>({start:t,end:e}))))}_getDaysRange(t){const{start:e,end:s}=t,i=new Date(e.year,e.month-1,e.day),n=new Date(s.year,s.month-1,s.day);return[i,n,(n.getTime()-i.getTime())/864e5+1]}};At.styles=a`
    :host {
      --shadow-sm: rgba(0, 0, 0, 0.18) 0px 2px 4px;
      --shadow-md: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
      --shadow-lg: rgba(0, 0, 0, 0.15) 0px 2px 8px;
      --shadow-hv: rgba(0, 0, 0, 0.08) 0px 4px 12px;

      --breakpoint-xs: 425px;
      --breakpoint-sm: 768px;
      --breakpoint-md: 1024px;

      --separator-light: rgba(0, 0, 0, 0.1);
      --separator-mid: rgba(0, 0, 0, 0.4);
      --separator-dark: rgba(0, 0, 0, 0.7);

      --system-ui: system, -apple-system, '.SFNSText-Regular', 'San Francisco',
        'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif;

      --border-radius-sm: 5px;
      --border-radius-md: 7px;
      --border-radius-lg: 12px;
    }
    div {
      height: 100%;
      width: 100%;
      background-color: #fff;
      border-radius: var(--border-radius-lg);
      border: 1px solid var(--separator-light);
      font-family: var(--system-ui);
      color: var(--separator-dark);
      box-shadow: var(--shadow-md);
    }
  `,t([lt({type:String})],At.prototype,"heading",void 0),t([lt({type:Object})],At.prototype,"activeDate",void 0),t([lt({type:Array})],At.prototype,"entries",void 0),t([lt({type:String})],At.prototype,"color",void 0),t([ct()],At.prototype,"_expandedDate",void 0),t([ct()],At.prototype,"_calendarWidth",void 0),At=t([ot("lms-calendar")],At);var Dt=At;export{Dt as default};
//# sourceMappingURL=lms-calendar.bundled.js.map
