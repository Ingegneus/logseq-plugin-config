var n$1,l$2,u$2,t$3,o$3,r$2,f$2={},e$2=[],c$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s$2(n,l){for(var u in l)n[u]=l[u];return n}function a$2(n){var l=n.parentNode;l&&l.removeChild(n);}function h$2(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$2(l,f,t,o,null)}function v$2(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$2:r};return null==r&&null!=l$2.vnode&&l$2.vnode(f),f}function y$2(){return {current:null}}function p$2(n){return n.children}function d$2(n,l){this.props=n,this.context=l;}function _$3(n,l){if(null==l)return n.__?_$3(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_$3(n):null}function k$3(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$3(n)}}function b$2(n){(!n.__d&&(n.__d=!0)&&t$3.push(n)&&!g$3.__r++||o$3!==l$2.debounceRendering)&&((o$3=l$2.debounceRendering)||setTimeout)(g$3);}function g$3(){for(var n;g$3.__r=t$3.length;)n=t$3.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$3=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s$2({},t)).__v=t.__v+1,j$3(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_$3(t):o,t.__h),z$3(u,t),t.__e!=o&&k$3(t)));});}function w$3(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$2,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$2(null,k,null,null,k):Array.isArray(k)?v$2(p$2,{children:k},null,null,null):k.__b>0?v$2(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$3(n,k,d=d||f$2,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$2(k,s,n):s=A$3(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_$3(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N$2(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M$2(w[h],w[++h],w[++h]);}function m$2(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$2(i,l,u):A$3(u,i,i,t,i.__e,l));return l}function x$3(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x$3(n,l);}):l.push(n)),l}function A$3(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$2(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$2(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$2(n,o,l[o],u[o],i);}function $$2(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$2.test(l)?u:u+"px";}function H$2(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$2(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$2(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$3:I$2,o):n.removeEventListener(l,o?T$3:I$2,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I$2(n){this.l[n.type+!1](l$2.event?l$2.event(n):n);}function T$3(n){this.l[n.type+!0](l$2.event?l$2.event(n):n);}function j$3(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$2.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d$2(g,x),h.constructor=T,h.render=O$2),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s$2({},h.__s)),s$2(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$2.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s$2(s$2({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p$2&&null==a.key?a.props.children:a,w$3(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$2(i.__e,u,i,t,o,r,f,c);(a=l$2.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$2.__e(n,u,i);}}function z$3(n,u){l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function L$2(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n$1.call(l.childNodes),h=(y=i.props||f$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$2(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$3(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_$3(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$2(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H$2(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H$2(l,"checked",k,y.checked,!1));}return l}function M$2(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$2.__e(n,i);}}function N$2(n,u,i){var t,o;if(l$2.unmount&&l$2.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$2(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$2.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N$2(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$2(n.__e),n.__=n.__e=n.__d=void 0;}function O$2(n,l,u){return this.constructor(n,u)}function P$2(u,i,t){var o,r,e;l$2.__&&l$2.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$3(i,u=(!o&&t||i).__k=h$2(p$2,null,[u]),r||f$2,f$2,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n$1.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$3(e,u);}function S$1(n,l){P$2(n,l,S$1);}function q$3(l,u,i){var t,o,r,f=s$2({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):i),v$2(l.type,f,t||l.key,o||l.ref,null)}function B$3(n,l){var u={__c:l="__cC"+r$2++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$2);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n$1=e$2.slice,l$2={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$2=0,d$2.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s$2({},this.state),"function"==typeof n&&(n=n(s$2({},u),this.props)),n&&s$2(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$2(this));},d$2.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$2(this));},d$2.prototype.render=p$2,t$3=[],g$3.__r=0,r$2=0;

var _$2=0;function o$2(o,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:o,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_$2,__source:f,__self:t};if("function"==typeof o&&(l=o.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$2.vnode&&l$2.vnode(a),a}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var lsplugin_user = {exports: {}};

/*! For license information please see lsplugin.user.js.LICENSE.txt */

(function (module, exports) {
	!function(t,e){module.exports=e();}(self,(()=>(()=>{var t={227:(t,e,n)=>{var r=n(155);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(r++,"%c"===t&&(o=r));})),e.splice(o,0,n);},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug");}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug");}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return !0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return !1;return "undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return ()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=n(447)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return "[UnexpectedJSONParseError]: "+t.message}};},447:(t,e,n)=>{t.exports=function(t){function e(t){let n,o,i,s=null;function a(...t){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return "%";s++;const i=e.formatters[o];if("function"==typeof i){const e=t[s];n=i.call(r,e),t.splice(s,1),s--;}return n})),e.formatArgs.call(r,t);(r.log||e.log).apply(r,t);}return a.namespace=t,a.useColors=e.useColors(),a.color=e.selectColor(t),a.extend=r,a.destroy=e.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==e.namespaces&&(o=e.namespaces,i=e.enabled(t)),i),set:t=>{s=t;}}),"function"==typeof e.init&&e.init(a),a}function r(t,n){const r=e(this.namespace+(void 0===n?":":n)+t);return r.log=this.log,r}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let n;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")));},e.enabled=function(t){if("*"===t[t.length-1])return !0;let n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return !1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return !0;return !1},e.humanize=n(824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(t).forEach((n=>{e[n]=t[n];})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e};},856:function(t){t.exports=function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return !1}}function r(t,o,i){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},r.apply(null,arguments)}function o(t){return i(t)||s(t)||a(t)||l()}function i(t){if(Array.isArray(t))return c(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return "Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,d=Object.getPrototypeOf,h=Object.getOwnPropertyDescriptor,m=Object.freeze,g=Object.seal,v=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,_=y.construct;b||(b=function(t,e,n){return t.apply(e,n)}),m||(m=function(t){return t}),g||(g=function(t){return t}),_||(_=function(t,e){return r(t,o(e))});var w=I(Array.prototype.forEach),x=I(Array.prototype.pop),C=I(Array.prototype.push),O=I(String.prototype.toLowerCase),S=I(String.prototype.match),j=I(String.prototype.replace),A=I(String.prototype.indexOf),k=I(String.prototype.trim),E=I(RegExp.prototype.test),T=F(TypeError);function I(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(t,e,r)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(t,n)}}function L(t,e){f&&f(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var o=O(r);o!==r&&(p(e)||(e[n]=o),r=o);}t[r]=!0;}return t}function N(t){var e,n=v(null);for(e in t)b(u,t,[e])&&(n[e]=t[e]);return n}function M(t,e){for(;null!==t;){var n=h(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=d(t);}function r(t){return console.warn("fallback value for",t),null}return r}var P=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),z=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),B=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/^data-[\-\w.\u00B7-\uFFFF]/),K=g(/^aria-[\-\w]+$/),Y=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=g(/^(?:\w+script|data):/i),X=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=g(/^html$/i),et=function(){return "undefined"==typeof window?null:window},nt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),n=function(t){return rt(t)};if(n.version="2.3.8",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,s=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,p=void 0===f?e.NamedNodeMap||e.MozNamedAttrMap:f,d=e.HTMLFormElement,h=e.DOMParser,g=e.trustedTypes,v=l.prototype,y=M(v,"cloneNode"),b=M(v,"nextSibling"),_=M(v,"childNodes"),I=M(v,"parentNode");if("function"==typeof a){var F=i.createElement("template");F.content&&F.content.ownerDocument&&(i=F.content.ownerDocument);}var ot=nt(g,r),it=ot?ot.createHTML(""):"",st=i,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,ft=r.importNode,pt={};try{pt=N(i).documentMode?i.documentMode:{};}catch(t){}var dt={};n.isSupported="function"==typeof I&&at&&void 0!==at.createHTMLDocument&&9!==pt;var ht,mt,gt=J,vt=Z,yt=V,bt=K,_t=Q,wt=X,xt=Y,Ct=null,Ot=L({},[].concat(o(P),o(R),o(D),o($),o(H))),St=null,jt=L({},[].concat(o(B),o(q),o(W),o(G))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Et=null,Tt=!0,It=!0,Ft=!1,Lt=!1,Nt=!1,Mt=!1,Pt=!1,Rt=!1,Dt=!1,Ut=!1,$t=!0,zt=!0,Ht=!1,Bt={},qt=null,Wt=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gt=null,Jt=L({},["audio","video","img","source","image","track"]),Zt=null,Vt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Kt="http://www.w3.org/1998/Math/MathML",Yt="http://www.w3.org/2000/svg",Qt="http://www.w3.org/1999/xhtml",Xt=Qt,te=!1,ee=["application/xhtml+xml","text/html"],ne="text/html",re=null,oe=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=N(e),Ct="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):Ot,St="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):jt,Zt="ADD_URI_SAFE_ATTR"in e?L(N(Vt),e.ADD_URI_SAFE_ATTR):Vt,Gt="ADD_DATA_URI_TAGS"in e?L(N(Jt),e.ADD_DATA_URI_TAGS):Jt,qt="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS):Wt,kt="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Et="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Bt="USE_PROFILES"in e&&e.USE_PROFILES,Tt=!1!==e.ALLOW_ARIA_ATTR,It=!1!==e.ALLOW_DATA_ATTR,Ft=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Lt=e.SAFE_FOR_TEMPLATES||!1,Nt=e.WHOLE_DOCUMENT||!1,Rt=e.RETURN_DOM||!1,Dt=e.RETURN_DOM_FRAGMENT||!1,Ut=e.RETURN_TRUSTED_TYPE||!1,Pt=e.FORCE_BODY||!1,$t=!1!==e.SANITIZE_DOM,zt=!1!==e.KEEP_CONTENT,Ht=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Xt=e.NAMESPACE||Qt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ht=ht=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?ne:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===ht?function(t){return t}:O,Lt&&(It=!1),Dt&&(Rt=!0),Bt&&(Ct=L({},o(H)),St=[],!0===Bt.html&&(L(Ct,P),L(St,B)),!0===Bt.svg&&(L(Ct,R),L(St,q),L(St,G)),!0===Bt.svgFilters&&(L(Ct,D),L(St,q),L(St,G)),!0===Bt.mathMl&&(L(Ct,$),L(St,W),L(St,G))),e.ADD_TAGS&&(Ct===Ot&&(Ct=N(Ct)),L(Ct,e.ADD_TAGS)),e.ADD_ATTR&&(St===jt&&(St=N(St)),L(St,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(Zt,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qt===Wt&&(qt=N(qt)),L(qt,e.FORBID_CONTENTS)),zt&&(Ct["#text"]=!0),Nt&&L(Ct,["html","head","body"]),Ct.table&&(L(Ct,["tbody"]),delete kt.tbody),m&&m(e),re=e);},ae=L({},["mi","mo","mn","ms","mtext"]),ce=L({},["foreignobject","desc","title","annotation-xml"]),le=L({},["title","style","font","a","script"]),ue=L({},R);L(ue,D),L(ue,U);var fe=L({},$);L(fe,z);var pe=function(t){var e=I(t);e&&e.tagName||(e={namespaceURI:Qt,tagName:"template"});var n=O(t.tagName),r=O(e.tagName);return t.namespaceURI===Yt?e.namespaceURI===Qt?"svg"===n:e.namespaceURI===Kt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]):t.namespaceURI===Kt?e.namespaceURI===Qt?"math"===n:e.namespaceURI===Yt?"math"===n&&ce[r]:Boolean(fe[n]):t.namespaceURI===Qt&&!(e.namespaceURI===Yt&&!ce[r])&&!(e.namespaceURI===Kt&&!ae[r])&&!fe[n]&&(le[n]||!ue[n])},de=function(t){C(n.removed,{element:t});try{t.parentNode.removeChild(t);}catch(e){try{t.outerHTML=it;}catch(e){t.remove();}}},he=function(t,e){try{C(n.removed,{attribute:e.getAttributeNode(t),from:e});}catch(t){C(n.removed,{attribute:null,from:e});}if(e.removeAttribute(t),"is"===t&&!St[t])if(Rt||Dt)try{de(e);}catch(t){}else try{e.setAttribute(t,"");}catch(t){}},me=function(t){var e,n;if(Pt)t="<remove></remove>"+t;else {var r=S(t,/^[\r\n\t ]+/);n=r&&r[0];}"application/xhtml+xml"===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=ot?ot.createHTML(t):t;if(Xt===Qt)try{e=(new h).parseFromString(o,ht);}catch(t){}if(!e||!e.documentElement){e=at.createDocument(Xt,"template",null);try{e.documentElement.innerHTML=te?"":o;}catch(t){}}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(i.createTextNode(n),s.childNodes[0]||null),Xt===Qt?ut.call(e,Nt?"html":"body")[0]:Nt?e.documentElement:s},ge=function(t){return ct.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof p)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ye=function(e){return "object"===t(c)?e instanceof c:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},be=function(t,e,r){dt[t]&&w(dt[t],(function(t){t.call(n,e,r,re);}));},_e=function(t){var e;if(be("beforeSanitizeElements",t,null),ve(t))return de(t),!0;if(E(/[\u0080-\uFFFF]/,t.nodeName))return de(t),!0;var r=mt(t.nodeName);if(be("uponSanitizeElement",t,{tagName:r,allowedTags:Ct}),t.hasChildNodes()&&!ye(t.firstElementChild)&&(!ye(t.content)||!ye(t.content.firstElementChild))&&E(/<[/\w]/g,t.innerHTML)&&E(/<[/\w]/g,t.textContent))return de(t),!0;if("select"===r&&E(/<template/i,t.innerHTML))return de(t),!0;if(!Ct[r]||kt[r]){if(!kt[r]&&xe(r)){if(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,r))return !1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(r))return !1}if(zt&&!qt[r]){var o=I(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&o)for(var s=i.length-1;s>=0;--s)o.insertBefore(y(i[s],!0),b(t));}return de(t),!0}return t instanceof l&&!pe(t)?(de(t),!0):"noscript"!==r&&"noembed"!==r||!E(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=j(e,gt," "),e=j(e,vt," "),t.textContent!==e&&(C(n.removed,{element:t.cloneNode()}),t.textContent=e)),be("afterSanitizeElements",t,null),!1):(de(t),!0)},we=function(t,e,n){if($t&&("id"===e||"name"===e)&&(n in i||n in oe))return !1;if(It&&!Et[e]&&E(yt,e));else if(Tt&&E(bt,e));else if(!St[e]||Et[e]){if(!(xe(t)&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&E(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return !1}else if(Zt[e]);else if(E(xt,j(n,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==A(n,"data:")||!Gt[t])if(Ft&&!E(_t,j(n,wt,"")));else if(n)return !1;return !0},xe=function(t){return t.indexOf("-")>0},Ce=function(t){var e,r,o,i;be("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:St};for(i=s.length;i--;){var c=e=s[i],l=c.name,u=c.namespaceURI;if(r="value"===l?e.value:k(e.value),o=mt(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,be("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(he(l,t),a.keepAttr))if(E(/\/>/i,r))he(l,t);else {Lt&&(r=j(r,gt," "),r=j(r,vt," "));var f=mt(t.nodeName);if(we(f,o,r))try{u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),x(n.removed);}catch(t){}}}be("afterSanitizeAttributes",t,null);}},Oe=function t(e){var n,r=ge(e);for(be("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)be("uponSanitizeShadowNode",n,null),_e(n)||(n.content instanceof s&&t(n.content),Ce(n));be("afterSanitizeShadowDOM",e,null);};return n.sanitize=function(o,i){var a,l,u,f,p;if((te=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!ye(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof o)return e.toStaticHTML(o);if(ye(o))return e.toStaticHTML(o.outerHTML)}return o}if(Mt||se(i),n.removed=[],"string"==typeof o&&(Ht=!1),Ht){if(o.nodeName){var d=mt(o.nodeName);if(!Ct[d]||kt[d])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=me("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else {if(!Rt&&!Lt&&!Nt&&-1===o.indexOf("<"))return ot&&Ut?ot.createHTML(o):o;if(!(a=me(o)))return Rt?null:Ut?it:""}a&&Pt&&de(a.firstChild);for(var h=ge(Ht?o:a);u=h.nextNode();)3===u.nodeType&&u===f||_e(u)||(u.content instanceof s&&Oe(u.content),Ce(u),f=u);if(f=null,Ht)return o;if(Rt){if(Dt)for(p=lt.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return St.shadowroot&&(p=ft.call(r,p,!0)),p}var m=Nt?a.outerHTML:a.innerHTML;return Nt&&Ct["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&E(tt,a.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+m),Lt&&(m=j(m,gt," "),m=j(m,vt," ")),ot&&Ut?ot.createHTML(m):m},n.setConfig=function(t){se(t),Mt=!0;},n.clearConfig=function(){re=null,Mt=!1;},n.isValidAttribute=function(t,e,n){re||se({});var r=mt(t),o=mt(e);return we(r,o,n)},n.addHook=function(t,e){"function"==typeof e&&(dt[t]=dt[t]||[],C(dt[t],e));},n.removeHook=function(t){if(dt[t])return x(dt[t])},n.removeHooks=function(t){dt[t]&&(dt[t]=[]);},n.removeAllHooks=function(){dt={};},n}return rt()}();},729:t=>{var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1;}function i(t,e,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||t,s),c=n?n+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e];}function a(){this._events=new r,this._eventsCount=0;}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return [];if(r.fn)return [r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},a.prototype.emit=function(t,e,r,o,i,s){var a=n?n+t:t;if(!this._events[a])return !1;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,o),!0;case 5:return u.fn.call(u.context,e,r,o,i),!0;case 6:return u.fn.call(u.context,e,r,o,i,s),!0}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c);}else {var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;case 4:u[l].fn.call(u[l].context,e,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c);}}return !0},a.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||s(this,i);else {for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==e||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i);}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&s(this,e)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a;},717:t=>{"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}});}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t;};},824:t=>{var e=1e3,n=60*e,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,c){c=c||{};var l=typeof t;if("string"===l&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===l&&isFinite(t))return c.long?function(t){var i=Math.abs(t);if(i>=o)return a(t,i,o,"day");if(i>=r)return a(t,i,r,"hour");if(i>=n)return a(t,i,n,"minute");if(i>=e)return a(t,i,e,"second");return t+" ms"}(t):function(t){var i=Math.abs(t);if(i>=o)return Math.round(t/o)+"d";if(i>=r)return Math.round(t/r)+"h";if(i>=n)return Math.round(t/n)+"m";if(i>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};},520:(t,e,n)=>{var r=n(155),o="win32"===r.platform,i=n(539);function s(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o));}return n}function a(t){for(var e=t.length-1,n=0;n<=e&&!t[n];n++);for(var r=e;r>=0&&!t[r];r--);return 0===n&&r===e?t:n>r?[]:t.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(t){var e=c.exec(t),n=(e[1]||"")+(e[2]||""),r=e[3]||"",o=l.exec(r);return [n,o[1],o[2],o[3]]}function p(t){var e=c.exec(t),n=e[1]||"",r=!!n&&":"!==n[1];return {device:n,isUnc:r,isAbsolute:r||!!e[2],tail:e[3]}}function d(t){return "\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var t="",e="",n=!1,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:t?(a=r.env["="+t])&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,h=c.tail;if((!l||!t||l.toLowerCase()===t.toLowerCase())&&(t||(t=l),n||(e=h+"\\"+e,n=f),t&&n))break}}return u&&(t=d(t)),t+(n?"\\":"")+(e=s(e.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(t){var e=p(t),n=e.device,r=e.isUnc,o=e.isAbsolute,i=e.tail,a=/[\\\/]$/.test(i);return (i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(t){return p(t).isAbsolute},u.join=function(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&t.push(n);}var r=t.join("\\");return /^[\\\/]{2}[^\\\/]/.test(t[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(t,e){t=u.resolve(t),e=u.resolve(e);for(var n=t.toLowerCase(),r=e.toLowerCase(),o=a(e.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return e;var p=[];for(f=l;f<i.length;f++)p.push("..");return (p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(t){if(!i.isString(t))return t;if(!t)return "";var e=u.resolve(t);return /^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},u.dirname=function(t){var e=f(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(t,e){var n=f(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u.extname=function(t){return f(t)[3]},u.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var n=t.dir,r=t.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=f(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return {root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(t){return h.exec(t).slice(1)}m.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o[0]);}return (e?"/":"")+(t=s(t.split("/"),!e).join("/"))||"."},m.normalize=function(t){var e=m.isAbsolute(t),n=t&&"/"===t[t.length-1];return (t=s(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},m.isAbsolute=function(t){return "/"===t.charAt(0)},m.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n);}return m.normalize(t)},m.relative=function(t,e){t=m.resolve(t).substr(1),e=m.resolve(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return (c=c.concat(r.slice(i))).join("/")},m._makeLong=function(t){return t},m.dirname=function(t){var e=g(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(t,e){var n=g(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},m.extname=function(t){return g(t)[3]},m.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return (t.dir?t.dir+m.sep:"")+(t.base||"")},m.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=g(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},m.sep="/",m.delimiter=":",t.exports=o?u:m,t.exports.posix=m,t.exports.win32=u;},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o;}catch(t){e=o;}try{n="function"==typeof clearTimeout?clearTimeout:i;}catch(t){n=i;}}();var a,c=[],l=!1,u=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p());}function p(){if(!l){var t=s(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++u<e;)a&&a[u].run();u=-1,e=c.length;}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t);}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t);}}function d(t,e){this.fun=t,this.array=e;}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p);},d.prototype.run=function(){this.fun.apply(null,this.array);},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return []},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return "/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};},384:t=>{t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8};},539:(t,e,n)=>{var r=n(155),o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return "%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return "[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(t,o){if(y(n.g.process))return function(){return e.deprecate(t,o).apply(this,arguments)};if(!0===r.noDeprecation)return t;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0;}return t.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return v(o)||(o=u(t,o,r)),o}var i=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0;})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",O=!1,S=["{","}"];(d(n)&&(O=!0,S=["[","]"]),C(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||O&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)k(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0));})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,_,S)):S[0]+_+S[1]}function f(t){return "["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return "  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return "   "+t})).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"));}return s+": "+a}function d(t){return Array.isArray(t)}function h(t){return "boolean"==typeof t}function m(t){return null===t}function g(t){return "number"==typeof t}function v(t){return "string"==typeof t}function y(t){return void 0===t}function b(t){return _(t)&&"[object RegExp]"===O(t)}function _(t){return "object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===O(t)}function x(t){return _(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return "function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;s[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r);};}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return "symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return [t.getDate(),j[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments));},e.inherits=n(717),e._extend=function(t,e){if(!e||!_(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var r={};return (()=>{n.r(r),n.d(r,{LSPluginUser:()=>Co,setupPluginUserInstance:()=>Oo});var t=n(520);n(856);const e=function(){this.__data__=[],this.size=0;};const o=function(t,e){return t===e||t!=t&&e!=e};const i=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return -1};var s=Array.prototype.splice;const a=function(t){var e=this.__data__,n=i(e,t);return !(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};const l=function(t){return i(this.__data__,t)>-1};const u=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}f.prototype.clear=e,f.prototype.delete=a,f.prototype.get=c,f.prototype.has=l,f.prototype.set=u;const p=f;const d=function(){this.__data__=new p,this.size=0;};const h=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const m=function(t){return this.__data__.get(t)};const g=function(t){return this.__data__.has(t)};const v="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var y="object"==typeof self&&self&&self.Object===Object&&self;const b=v||y||Function("return this")();const _=b.Symbol;var w=Object.prototype,x=w.hasOwnProperty,C=w.toString,O=_?_.toStringTag:void 0;const S=function(t){var e=x.call(t,O),n=t[O];try{t[O]=void 0;var r=!0;}catch(t){}var o=C.call(t);return r&&(e?t[O]=n:delete t[O]),o};var j=Object.prototype.toString;const A=function(t){return j.call(t)};var k=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):A(t)};const T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const I=function(t){if(!T(t))return !1;var e=E(t);return "[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const F=b["__core-js_shared__"];var L,N=(L=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";const M=function(t){return !!N&&N in t};var P=Function.prototype.toString;const R=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return ""};var D=/^\[object .+?Constructor\]$/,U=Function.prototype,$=Object.prototype,z=U.toString,H=$.hasOwnProperty,B=RegExp("^"+z.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const q=function(t){return !(!T(t)||M(t))&&(I(t)?B:D).test(R(t))};const W=function(t,e){return null==t?void 0:t[e]};const G=function(t,e){var n=W(t,e);return q(n)?n:void 0};const J=G(b,"Map");const Z=G(Object,"create");const V=function(){this.__data__=Z?Z(null):{},this.size=0;};const K=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Y=Object.prototype.hasOwnProperty;const Q=function(t){var e=this.__data__;if(Z){var n=e[t];return "__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0};var X=Object.prototype.hasOwnProperty;const tt=function(t){var e=this.__data__;return Z?void 0!==e[t]:X.call(e,t)};const et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}nt.prototype.clear=V,nt.prototype.delete=K,nt.prototype.get=Q,nt.prototype.has=tt,nt.prototype.set=et;const rt=nt;const ot=function(){this.size=0,this.__data__={hash:new rt,map:new(J||p),string:new rt};};const it=function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const st=function(t,e){var n=t.__data__;return it(e)?n["string"==typeof e?"string":"hash"]:n.map};const at=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};const ct=function(t){return st(this,t).get(t)};const lt=function(t){return st(this,t).has(t)};const ut=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}ft.prototype.clear=ot,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=ut;const pt=ft;const dt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r);}return n.set(t,e),this.size=n.size,this};function ht(t){var e=this.__data__=new p(t);this.size=e.size;}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=m,ht.prototype.has=g,ht.prototype.set=dt;const mt=ht;const gt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const vt=function(t,e,n){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};const yt=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&vt(t,e,n);};const bt=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}();var _t=exports&&!exports.nodeType&&exports,wt=_t&&"object"=='object'&&module&&!module.nodeType&&module,xt=wt&&wt.exports===_t?b.Buffer:void 0,Ct=xt?xt.allocUnsafe:void 0;const Ot=function(t,e){if(e)return t.slice();var n=t.length,r=Ct?Ct(n):new t.constructor(n);return t.copy(r),r};const St=b.Uint8Array;const jt=function(t){var e=new t.constructor(t.byteLength);return new St(e).set(new St(t)),e};const At=function(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};const kt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Et=Object.create;const Tt=function(){function t(){}return function(e){if(!T(e))return {};if(Et)return Et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const It=function(t,e){return function(n){return t(e(n))}};const Ft=It(Object.getPrototypeOf,Object);var Lt=Object.prototype;const Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lt)};const Mt=function(t){return "function"!=typeof t.constructor||Nt(t)?{}:Tt(Ft(t))};const Pt=function(t){return null!=t&&"object"==typeof t};const Rt=function(t){return Pt(t)&&"[object Arguments]"==E(t)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,$t=Dt.propertyIsEnumerable;const zt=Rt(function(){return arguments}())?Rt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!$t.call(t,"callee")};const Ht=Array.isArray;const Bt=function(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const qt=function(t){return null!=t&&Bt(t.length)&&!I(t)};const Wt=function(t){return Pt(t)&&qt(t)};const Gt=function(){return !1};var Jt=exports&&!exports.nodeType&&exports,Zt=Jt&&"object"=='object'&&module&&!module.nodeType&&module,Vt=Zt&&Zt.exports===Jt?b.Buffer:void 0;const Kt=(Vt?Vt.isBuffer:void 0)||Gt;var Yt=Function.prototype,Qt=Object.prototype,Xt=Yt.toString,te=Qt.hasOwnProperty,ee=Xt.call(Object);const ne=function(t){if(!Pt(t)||"[object Object]"!=E(t))return !1;var e=Ft(t);if(null===e)return !0;var n=te.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&Xt.call(n)==ee};var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const oe=function(t){return Pt(t)&&Bt(t.length)&&!!re[E(t)]};const ie=function(t){return function(e){return t(e)}};var se=exports&&!exports.nodeType&&exports,ae=se&&"object"=='object'&&module&&!module.nodeType&&module,ce=ae&&ae.exports===se&&v.process,le=function(){try{var t=ae&&ae.require&&ae.require("util").types;return t||ce&&ce.binding&&ce.binding("util")}catch(t){}}();var ue=le&&le.isTypedArray;const fe=ue?ie(ue):oe;const pe=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var de=Object.prototype.hasOwnProperty;const he=function(t,e,n){var r=t[e];de.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||vt(t,e,n);};const me=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?vt(n,a,c):he(n,a,c);}return n};const ge=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var ve=/^(?:0|[1-9]\d*)$/;const ye=function(t,e){var n=typeof t;return !!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ve.test(t))&&t>-1&&t%1==0&&t<e};var be=Object.prototype.hasOwnProperty;const _e=function(t,e){var n=Ht(t),r=!n&&zt(t),o=!n&&!r&&Kt(t),i=!n&&!r&&!o&&fe(t),s=n||r||o||i,a=s?ge(t.length,String):[],c=a.length;for(var l in t)!e&&!be.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ye(l,c))||a.push(l);return a};const we=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var xe=Object.prototype.hasOwnProperty;const Ce=function(t){if(!T(t))return we(t);var e=Nt(t),n=[];for(var r in t)("constructor"!=r||!e&&xe.call(t,r))&&n.push(r);return n};const Oe=function(t){return qt(t)?_e(t,!0):Ce(t)};const Se=function(t){return me(t,Oe(t))};const je=function(t,e,n,r,o,i,s){var a=pe(t,n),c=pe(e,n),l=s.get(c);if(l)yt(t,n,l);else {var u=i?i(a,c,n+"",t,e,s):void 0,f=void 0===u;if(f){var p=Ht(c),d=!p&&Kt(c),h=!p&&!d&&fe(c);u=c,p||d||h?Ht(a)?u=a:Wt(a)?u=kt(a):d?(f=!1,u=Ot(c,!0)):h?(f=!1,u=At(c,!0)):u=[]:ne(c)||zt(c)?(u=a,zt(a)?u=Se(a):T(a)&&!I(a)||(u=Mt(c))):f=!1;}f&&(s.set(c,u),o(u,c,r,i,s),s.delete(c)),yt(t,n,u);}};const Ae=function t(e,n,r,o,i){e!==n&&bt(n,(function(s,a){if(i||(i=new mt),T(s))je(e,n,a,r,t,o,i);else {var c=o?o(pe(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),yt(e,a,c);}}),Oe);};const ke=function(t){return t};const Ee=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var Te=Math.max;const Ie=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Te(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),Ee(t,this,a)}};const Fe=function(t){return function(){return t}};const Le=gt?function(t,e){return gt(t,"toString",{configurable:!0,enumerable:!1,value:Fe(e),writable:!0})}:ke;var Ne=Date.now;const Me=function(t){var e=0,n=0;return function(){var r=Ne(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Le);const Pe=function(t,e){return Me(Ie(t,e,ke),t+"")};const Re=function(t,e,n){if(!T(n))return !1;var r=typeof e;return !!("number"==r?qt(n)&&ye(e,n.length):"string"==r&&e in n)&&o(n[e],t)};const De=function(t){return Pe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Re(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i);}return e}))}((function(t,e,n){Ae(t,e,n);}));var Ue=function(){return Ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Ue.apply(this,arguments)};function $e(t){return t.toLowerCase()}var ze=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Be(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function qe(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?ze:n,o=e.stripRegexp,i=void 0===o?He:o,s=e.transform,a=void 0===s?$e:s,c=e.delimiter,l=void 0===c?" ":c,u=Be(Be(t,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(t,Ue({delimiter:"."},e))}var We=n(729),Ge=n.n(We);function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ze="win32"===navigator.platform.toLowerCase()?t.win32:t.posix;const Ve=function(t,e){return void 0===e&&(e={}),qe(t,Ue({delimiter:"_"},e))};const Ke=De;class Ye extends(Ge()){constructor(t,e){super(),Je(this,"_tag",void 0),Je(this,"_opts",void 0),Je(this,"_logs",[]),this._tag=t,this._opts=e;}write(t,e,n){var r;null!=e&&e.length&&!0===e[e.length-1]&&(n=!0,e.pop());const o=e.reduce(((t,e)=>(e&&e instanceof Error?t+=`${e.message} ${e.stack}`:t+=e.toString(),t)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([t,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===t?"error":"debug"](`${t}: ${o}`));this.emit("change");}clear(){this._logs=[],this.emit("change");}info(...t){this.write("INFO",t);}error(...t){this.write("ERROR",t);}warn(...t){this.write("WARN",t);}setTag(t){this._tag=t;}toJSON(){return this._logs}}function Qe(t,...e){try{const n=new URL(t);if(!n.origin)throw new Error(null);const r=Ze.join(t.substr(n.origin.length),...e);return n.origin+r}catch(n){return Ze.join(t,...e)}}function Xe(t,e){let n,r,o=!1;const i=e=>n=>{t&&clearTimeout(t),e(n),o=!0;},s=new Promise(((o,s)=>{n=i(o),r=i(s),t&&(t=setTimeout((()=>r(new Error(`[deferred timeout] ${e}`))),t));}));return {created:Date.now(),setTag:t=>e=t,resolve:n,reject:r,promise:s,get settled(){return o}}}const tn=new Map;window.__injectedUIEffects=tn;var en=n(227),nn=n.n(en);function rn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const on="application/x-postmate-v1+json";let sn=0;const an={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},cn=(t,e)=>("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!=typeof t.data||"postmate"in t.data)&&(t.data.type===on&&!!an[t.data.postmate])));class ln{constructor(t){rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"events",{}),rn(this,"childOrigin",void 0),rn(this,"listener",void 0),this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.listener=t=>{if(!cn(t,this.childOrigin))return !1;const{data:e,name:n}=((t||{}).data||{}).value||{};"emit"===t.data.postmate&&n in this.events&&this.events[n].forEach((t=>{t.call(this,e);}));},this.parent.addEventListener("message",this.listener,!1);}get(t,...e){return new Promise((n=>{const r=++sn,o=t=>{t.data.uid===r&&"reply"===t.data.postmate&&(this.parent.removeEventListener("message",o,!1),n(t.data.value));};this.parent.addEventListener("message",o,!1),this.child.postMessage({postmate:"request",type:on,property:t,args:e,uid:r},this.childOrigin);}))}call(t,e){this.child.postMessage({postmate:"call",type:on,property:t,data:e},this.childOrigin);}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e);}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame);}}class un{constructor(t){rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),rn(this,"child",void 0),this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(t=>{if(!cn(t,this.parentOrigin))return;const{property:e,uid:n,data:r,args:o}=t.data;"call"!==t.data.postmate?((t,e,n)=>{const r="function"==typeof t[e]?t[e].apply(null,n):t[e];return Promise.resolve(r)})(this.model,e,o).then((r=>{t.source.postMessage({property:e,postmate:"reply",type:on,uid:n,value:r},t.origin);})):e in this.model&&"function"==typeof this.model[e]&&this.model[e](r);}));}emit(t,e){this.parent.postMessage({postmate:"emit",type:on,value:{name:t,data:e}},this.parentOrigin);}}class fn{constructor(t){rn(this,"container",void 0),rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"childOrigin",void 0),rn(this,"url",void 0),rn(this,"model",void 0),this.container=t.container,this.url=t.url,this.parent=window,this.frame=document.createElement("iframe"),t.id&&(this.frame.id=t.id),t.name&&(this.frame.name=t.name),this.frame.classList.add.apply(this.frame.classList,t.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=t.model||{};}sendHandshake(t){const e=(t=>{const e=document.createElement("a");e.href=t;const n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||`${n}//${r}`})(t=t||this.url);let n,r=0;return new Promise(((o,i)=>{const s=t=>!!cn(t,e)&&("handshake-reply"===t.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,!1),this.childOrigin=t.origin,o(new ln(this))):i("Failed handshake"));this.parent.addEventListener("message",s,!1);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:on,model:this.model},e),5===r&&clearInterval(n);};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500);})),this.frame.src=t;}))}destroy(){this.frame.parentNode.removeChild(this.frame);}}rn(fn,"debug",!1),rn(fn,"Model",void 0);class pn{constructor(t){rn(this,"child",void 0),rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),this.child=window,this.model=t,this.parent=this.child.parent;}sendHandshakeReply(){return new Promise(((t,e)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:on},r.origin),this.parentOrigin=r.origin;const e=r.data.model;return e&&Object.keys(e).forEach((t=>{this.model[t]=e[t];})),t(new un(this))}return e("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1);}))}}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const{importHTML:hn,createSandboxContainer:mn}=window.QSandbox||{};function gn(t,e){return t.startsWith("http")?fetch(t,e):(t=t.replace("file://",""),new Promise((async(e,n)=>{try{const n=await window.apis.doAction(["readFile",t]);e({text:()=>n});}catch(t){console.error(t),n(t);}})))}class vn extends(Ge()){constructor(t){super(),dn(this,"_pluginLocal",void 0),dn(this,"_frame",void 0),dn(this,"_root",void 0),dn(this,"_loaded",!1),dn(this,"_unmountFns",[]),this._pluginLocal=t,t._dispose((()=>{this._unmount();}));}async load(){const{name:t,entry:e}=this._pluginLocal.options;if(this.loaded||!e)return;const{template:n,execScripts:r}=await hn(e,{fetch:gn});this._mount(n,document.body);const o=mn(t,{elementGetter:()=>{var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Co(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0;}_mount(t,e){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${t}</div>`,e.appendChild(n),this.emit("mounted");}_unmount(){for(const t of this._unmountFns)t&&t.call(null);}destroy(){var t,e;null===(t=this.frame)||void 0===t||null===(e=t.parentNode)||void 0===e||e.removeChild(this.frame);}get loaded(){return this._loaded}get document(){var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}get frame(){return this._frame}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bn=nn()("LSPlugin:caller"),_n="#await#response#",wn="#lspmsg#",xn="#lspmsg#error#",Cn=t=>`#lspmsg#${t}`;class On extends(Ge()){constructor(t){super(),yn(this,"_pluginLocal",void 0),yn(this,"_connected",!1),yn(this,"_parent",void 0),yn(this,"_child",void 0),yn(this,"_shadow",void 0),yn(this,"_status",void 0),yn(this,"_userModel",{}),yn(this,"_call",void 0),yn(this,"_callUserModel",void 0),yn(this,"_debugTag",""),this._pluginLocal=t,t&&(this._debugTag=t.debugTag);}async connectToChild(){if(this._connected)return;const{shadow:t}=this._pluginLocal;t?await this._setupShadowSandbox():await this._setupIframeSandbox();}async connectToParent(t={}){if(this._connected)return;const e=this,n=null!=this._pluginLocal;let o=0;const i=new Map,s=Xe(6e4),a=this._extendUserModel({"#lspmsg#ready#":async t=>{a[Cn(null==t?void 0:t.pid)]=({type:t,payload:n})=>{bn(`[host (_call) -> *user] ${this._debugTag}`,t,n),e.emit(t,n);},await s.resolve();},"#lspmsg#beforeunload#":async t=>{const n=Xe(1e4);e.emit("beforeunload",Object.assign({actor:n},t)),await n.promise;},"#lspmsg#settings#":async({type:t,payload:n})=>{e.emit("settings:changed",n);},[wn]:async({ns:t,type:n,payload:r})=>{bn(`[host (async) -> *user] ${this._debugTag} ns=${t} type=${n}`,r),t&&t.startsWith("hook")?e.emit(`${t}:${n}`,r):e.emit(n,r);},"#lspmsg#reply#":({_sync:t,result:e})=>{if(bn(`[sync host -> *user] #${t}`,e),i.has(t)){const n=i.get(t);n&&(null!=e&&e.hasOwnProperty(xn)?n.reject(e[xn]):n.resolve(e),i.delete(t));}},...t});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new pn(a).sendHandshakeReply();return this._status="pending",await l.then((t=>{this._child=t,this._connected=!0,this._call=async(e,n={},r)=>{if(r){const t=++o;i.set(t,r),n._sync=t,r.setTag(`async call #${t}`),bn(`async call #${t}`);}return t.emit(Cn(a.baseInfo.id),{type:e,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(t,e)=>{try{a[t](e);}catch(e){bn(`[model method] #${t} not existed`);}},setInterval((()=>{if(i.size>100)for(const[t,e]of i)e.settled&&i.delete(t);}),18e5);})).finally((()=>{this._status=void 0;})),await s.promise,a.baseInfo}async call(t,e={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e)}async callAsync(t,e={}){var n;const r=Xe(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e,r)}async callUserModel(t,...e){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async callUserModelAsync(t,...e){var n;return t=`${_n}${t}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async _setupIframeSandbox(){const t=this._pluginLocal,e=t.id,n=`${e}_lsp_main`,r=new URL(t.options.entry);r.searchParams.set("__v__",t.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=e;try{var s;const t=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(t){i.dataset.inited_layout="true";let{width:e,height:n,left:r,top:o,vw:s,vh:a}=t;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:e+"px",height:n+"px",left:r,top:o});}}catch(t){console.error("[Restore Layout Error]",t);}document.body.appendChild(i);const a=new fn({id:e+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(t.toJSON()))}});let c,l=a.sendHandshake();return this._status="pending",new Promise(((e,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy();}),4e3),l.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(Cn(t.id),(({type:t,payload:e})=>{var n,r;bn("[user -> *host] ",t,e),null===(n=this._pluginLocal)||void 0===n||n.emit(t,e||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(t,e||{});})),this._call=async(...e)=>{await n.call(Cn(t.id),{type:e[0],payload:Object.assign(e[1]||{},{$$pid:t.id})});},this._callUserModel=async(t,...e)=>{if(t.startsWith(_n))return await n.get(t.replace(_n,""),...e);n.call(t,null==e?void 0:e[0]);},e(null);})).catch((t=>{n(t);})).finally((()=>{clearTimeout(c);}));})).catch((t=>{throw bn("[iframe sandbox] error",t),t})).finally((()=>{this._status=void 0;}))}async _setupShadowSandbox(){const t=this._pluginLocal,e=this._shadow=new vn(t);try{this._status="pending",await e.load(),this._connected=!0,this.emit("connected"),this._call=async(e,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(e,Object.assign(n,{$$pid:t.id})),null==r?void 0:r.promise},this._callUserModel=async(...t)=>{var e;let n=t[0];null!==(e=n)&&void 0!==e&&e.startsWith(_n)&&(n=n.replace(_n,""));const r=t[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r);};}catch(t){throw bn("[shadow sandbox] error",t),t}finally{this._status=void 0;}}_extendUserModel(t){return Object.assign(this._userModel,t)}_getSandboxIframeContainer(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame.parentNode}_getSandboxShadowContainer(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame.parentNode}_getSandboxIframeRoot(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame}_getSandboxShadowRoot(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame}set debugTag(t){this._debugTag=t;}async destroy(){var t;let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(t=e)||void 0===t||t.parentNode.removeChild(e);}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jn{constructor(t,e){Sn(this,"ctx",void 0),Sn(this,"opts",void 0),this.ctx=t,this.opts=e;}get ctxId(){return this.ctx.baseInfo.id}setItem(t,e){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,t,e,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}removeItem(t){var e;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}allKeys(){var t;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}clear(){var t;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}hasItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}}class An{constructor(t){var e,n,r;r=void 0,(n="ctx")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.ctx=t;}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(t,...e){var n,r;const o=this.ensureHostScope();return t=null===(n=Ve(t))||void 0===n?void 0:n.toLowerCase(),null===(r=o.logseq.api["exper_"+t])||void 0===r?void 0:r.apply(o,e)}async loadScripts(...t){(t=t.map((t=>null!=t&&t.startsWith("http")?t:this.ctx.resolveResourceFullUrl(t)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...t);}registerFencedCodeRenderer(t,e){return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id,t,e)}registerExtensionsEnhancer(t,e){const n=this.ensureHostScope();if("katex"===t)n.katex&&e(n.katex).catch(console.error);return n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id,t,e)}ensureHostScope(){if(window===top)throw new Error("Can not access host scope!");return top}}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const En=t=>`task_callback_${t}`;class Tn{constructor(t,e,n={}){kn(this,"_client",void 0),kn(this,"_requestId",void 0),kn(this,"_requestOptions",void 0),kn(this,"_promise",void 0),kn(this,"_aborted",!1),this._client=t,this._requestId=e,this._requestOptions=n,this._promise=new Promise(((t,e)=>{if(!this._requestId)return e(null);this._client.once(En(this._requestId),(n=>{n&&n instanceof Error?e(n):t(n);}));}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((t=>{null==r||r(t);})).catch((t=>{null==o||o(t);})).finally((()=>{null==i||i();}));}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=!0);}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class In extends We.EventEmitter{constructor(t){super(),kn(this,"_ctx",void 0),this._ctx=t,this.ctx.caller.on("#lsp#request#callback",(t=>{const e=null==t?void 0:t.requestId;e&&this.emit(En(e),null==t?void 0:t.payload);}));}static createRequestTask(t,e,n){return new Tn(t,e,n)}async _request(t){const e=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=t,s=this.ctx.Experiments.invokeExperMethod("request",e,i),a=In.createRequestTask(this.ctx.Request,s,t);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const Fn=It(Object.keys,Object);var Ln=Object.prototype.hasOwnProperty;const Nn=function(t){if(!Nt(t))return Fn(t);var e=[];for(var n in Object(t))Ln.call(t,n)&&"constructor"!=n&&e.push(n);return e};const Mn=function(t){return qt(t)?_e(t):Nn(t)};const Pn=function(t,e){return t&&bt(t,e,Mn)};const Rn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Dn=function(t){return this.__data__.has(t)};function Un(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e]);}Un.prototype.add=Un.prototype.push=Rn,Un.prototype.has=Dn;const $n=Un;const zn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1};const Hn=function(t,e){return t.has(e)};const Bn=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return !1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var f=-1,p=!0,d=2&n?new $n:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],m=e[f];if(r)var g=s?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!zn(e,(function(t,e){if(!Hn(d,e)&&(h===t||o(h,t,n,r,i)))return d.push(e)}))){p=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p};const qn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t];})),n};const Wn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t;})),n};var Gn=_?_.prototype:void 0,Jn=Gn?Gn.valueOf:void 0;const Zn=function(t,e,n,r,i,s,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return !(t.byteLength!=e.byteLength||!s(new St(t),new St(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=qn;case"[object Set]":var l=1&r;if(c||(c=Wn),t.size!=e.size&&!l)return !1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=Bn(c(t),c(e),r,i,s,a);return a.delete(t),f;case"[object Symbol]":if(Jn)return Jn.call(t)==Jn.call(e)}return !1};const Vn=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};const Kn=function(t,e,n){var r=e(t);return Ht(t)?r:Vn(r,n(t))};const Yn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s);}return i};const Qn=function(){return []};var Xn=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols;const er=tr?function(t){return null==t?[]:(t=Object(t),Yn(tr(t),(function(e){return Xn.call(t,e)})))}:Qn;const nr=function(t){return Kn(t,Mn,er)};var rr=Object.prototype.hasOwnProperty;const or=function(t,e,n,r,o,i){var s=1&n,a=nr(t),c=a.length;if(c!=nr(e).length&&!s)return !1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:rr.call(e,u)))return !1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var h=s;++l<c;){var m=t[u=a[l]],g=e[u];if(r)var v=s?r(g,m,u,e,t,i):r(m,g,u,t,e,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){d=!1;break}h||(h="constructor"==u);}if(d&&!h){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1);}return i.delete(t),i.delete(e),d};const ir=G(b,"DataView");const sr=G(b,"Promise");const ar=G(b,"Set");const cr=G(b,"WeakMap");var lr="[object Map]",ur="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",hr=R(ir),mr=R(J),gr=R(sr),vr=R(ar),yr=R(cr),br=E;(ir&&br(new ir(new ArrayBuffer(1)))!=dr||J&&br(new J)!=lr||sr&&br(sr.resolve())!=ur||ar&&br(new ar)!=fr||cr&&br(new cr)!=pr)&&(br=function(t){var e=E(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return dr;case mr:return lr;case gr:return ur;case vr:return fr;case yr:return pr}return e});const _r=br;var wr="[object Arguments]",xr="[object Array]",Cr="[object Object]",Or=Object.prototype.hasOwnProperty;const Sr=function(t,e,n,r,o,i){var s=Ht(t),a=Ht(e),c=s?xr:_r(t),l=a?xr:_r(e),u=(c=c==wr?Cr:c)==Cr,f=(l=l==wr?Cr:l)==Cr,p=c==l;if(p&&Kt(t)){if(!Kt(e))return !1;s=!0,u=!1;}if(p&&!u)return i||(i=new mt),s||fe(t)?Bn(t,e,n,r,o,i):Zn(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&Or.call(t,"__wrapped__"),h=f&&Or.call(e,"__wrapped__");if(d||h){var m=d?t.value():t,g=h?e.value():e;return i||(i=new mt),o(m,g,n,r,i)}}return !!p&&(i||(i=new mt),or(t,e,n,r,o,i))};const jr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Sr(e,n,r,o,t,i))};const Ar=function(t,e,n,r){var o=n.length,i=o,s=!r;if(null==t)return !i;for(t=Object(t);o--;){var a=n[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return !1}for(;++o<i;){var c=(a=n[o])[0],l=t[c],u=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return !1}else {var f=new mt;if(r)var p=r(l,u,c,t,e,f);if(!(void 0===p?jr(u,l,3,r,f):p))return !1}}return !0};const kr=function(t){return t==t&&!T(t)};const Er=function(t){for(var e=Mn(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,kr(o)];}return e};const Tr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};const Ir=function(t){var e=Er(t);return 1==e.length&&e[0][2]?Tr(e[0][0],e[0][1]):function(n){return n===t||Ar(n,t,e)}};const Fr=function(t){return "symbol"==typeof t||Pt(t)&&"[object Symbol]"==E(t)};var Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;const Mr=function(t,e){if(Ht(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fr(t))||(Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e))};function Pr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Pr.Cache||pt),n}Pr.Cache=pt;const Rr=Pr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g;const $r=function(t){var e=Rr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,o){e.push(r?o.replace(Ur,"$1"):n||t);})),e}));const zr=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var Hr=_?_.prototype:void 0,Br=Hr?Hr.toString:void 0;const qr=function t(e){if("string"==typeof e)return e;if(Ht(e))return zr(e,t)+"";if(Fr(e))return Br?Br.call(e):"";var n=e+"";return "0"==n&&1/e==-Infinity?"-0":n};const Wr=function(t){return null==t?"":qr(t)};const Gr=function(t,e){return Ht(t)?t:Mr(t,e)?[t]:$r(Wr(t))};const Jr=function(t){if("string"==typeof t||Fr(t))return t;var e=t+"";return "0"==e&&1/t==-Infinity?"-0":e};const Zr=function(t,e){for(var n=0,r=(e=Gr(e,t)).length;null!=t&&n<r;)t=t[Jr(e[n++])];return n&&n==r?t:void 0};const Vr=function(t,e,n){var r=null==t?void 0:Zr(t,e);return void 0===r?n:r};const Kr=function(t,e){return null!=t&&e in Object(t)};const Yr=function(t,e,n){for(var r=-1,o=(e=Gr(e,t)).length,i=!1;++r<o;){var s=Jr(e[r]);if(!(i=null!=t&&n(t,s)))break;t=t[s];}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Bt(o)&&ye(s,o)&&(Ht(t)||zt(t))};const Qr=function(t,e){return null!=t&&Yr(t,e,Kr)};const Xr=function(t,e){return Mr(t)&&kr(e)?Tr(Jr(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Qr(n,t):jr(e,r,3)}};const to=function(t){return function(e){return null==e?void 0:e[t]}};const eo=function(t){return function(e){return Zr(e,t)}};const no=function(t){return Mr(t)?to(Jr(t)):eo(t)};const ro=function(t){return "function"==typeof t?t:null==t?ke:"object"==typeof t?Ht(t)?Xr(t[0],t[1]):Ir(t):no(t)};const oo=function(t,e){var n={};return e=ro(e),Pn(t,(function(t,r,o){vt(n,e(t,r,o),t);})),n};function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class so{constructor(t,e){io(this,"ctx",void 0),io(this,"serviceHooks",void 0),this.ctx=t,this.serviceHooks=e,t._execCallableAPI("register-search-service",t.baseInfo.id,e.name,e.options);Object.entries({query:{f:"onQuery",args:["graph","q",!0],reply:!0,transformOutput:t=>(Ht(null==t?void 0:t.blocks)&&(t.blocks=t.blocks.map((t=>t&&oo(t,((t,e)=>`block/${e}`))))),t)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(t=>`service:search:${t}:${e.name}`)(n);t.caller.on(o,(async n=>{if(I(null==e?void 0:e[r.f])){let i=null;try{i=await e[r.f].apply(e,(r.args||[]).map((t=>{if(n){if(!0===t)return n;if(n.hasOwnProperty(t)){const e=n[t];return delete n[t],e}}}))),r.transformOutput&&(i=r.transformOutput(i));}catch(t){console.error("[SearchService] ",t),i=t;}finally{r.reply&&t.caller.call(`${o}:reply`,i);}}}));}));}}function ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const co=Symbol.for("proxy-continue"),lo=nn()("LSPlugin:user"),uo=new Ye("",{console:!0});function fo(t,e,n){var r;if("function"!=typeof n)return !1;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=e,u=`SimpleCommandHook${o}${++vo}`;this.Editor["on"+u](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:o,label:i,type:t,desc:s,keybinding:c,extras:l},["editor/hook",u]],a]});}function po(t){return !("string"!=typeof(e=t)||36!==e.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(e))||(uo.error(`#${t} is not a valid UUID string.`),!1);var e;}let ho=null,mo=new Map;const go={async getInfo(t){return ho||(ho=await this._execCallableAPIAsync("get-app-info")),"string"==typeof t?ho[t]:ho},registerCommand:fo,registerSearchService(t){if(mo.has(t.name))throw new Error(`SearchService: #${t.name} has registered!`);mo.set(t.name,new so(this,t));},registerCommandPalette(t,e){const{key:n,label:r,keybinding:o}=t;return fo.call(this,"$palette$",{key:n,label:r,palette:!0,keybinding:o},e)},registerCommandShortcut(t,e){const{binding:n}=t,r="$shortcut$",o=r+Ve(n);return fo.call(this,r,{key:o,palette:!1,keybinding:t},e)},registerUIItem(t,e){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,t,e]});},registerPageMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id,r=t;fo.call(this,"page-menu-item",{key:n,label:r},e);},onBlockRendererSlotted(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:editor:${Ve(`slot:${t}`)}`;return this.caller.on(r,e),this.App._installPluginHook(n,r),()=>{this.caller.off(r,e),this.App._uninstallPluginHook(n,r);}},invokeExternalPlugin(t,...e){var n;if(!(t=null===(n=t)||void 0===n?void 0:n.trim()))return;let[r,o]=t.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=t.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${t} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,e)},setFullScreen(t){const e=(...t)=>this._callWin("setFullScreen",...t);"toggle"===t?this._callWin("isFullScreen").then((t=>{t?e():e(!0);})):t?e(!0):e();}};let vo=0;const yo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},registerSlashCommand(t,e){var n;lo("Register slash command #",this.baseInfo.id,t,e),"function"==typeof e&&(e=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",e]]),e=e.map((t=>{const[e,...n]=t;if("editor/hook"===e){let r=n[0],o=()=>{var t;null===(t=this.caller)||void 0===t||t.callUserModel(r);};"function"==typeof r&&(o=r);const i=`SlashCommandHook${e}${++vo}`;t[1]=i,this.Editor["on"+i](o);}return t})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[t,e]]});},registerBlockContextMenuItem(t,e){if("function"!=typeof e)return !1;const n=t+"_"+this.baseInfo.id;fo.call(this,"block-context-menu-item",{key:n,label:t},e);},registerHighlightContextMenuItem(t,e,n){if("function"!=typeof e)return !1;const r=t+"_"+this.baseInfo.id;fo.call(this,"highlight-context-menu-item",{key:r,label:t,extras:n},e);},scrollToBlockInPage(t,e,n){const r="block-content-"+e;null!=n&&n.replaceState?this.App.replaceState("page",{name:t},{anchor:r}):this.App.pushState("page",{name:t},{anchor:r});}},bo={onBlockChanged(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:db:${Ve(`block:${t}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===t&&e(n,r,o);};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r);}},datascriptQuery(t,...e){if(e.pop(),null!=e&&e.some((t=>"function"==typeof t))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(t,...e)}return this._execCallableAPIAsync("datascript_query",t,...e)}},_o={},wo={},xo={makeSandboxStorage(){return new jn(this,{assets:!0})}};class Co extends(Ge()){constructor(t,e){super(),ao(this,"_baseInfo",void 0),ao(this,"_caller",void 0),ao(this,"_version","0.0.14"),ao(this,"_debugTag",""),ao(this,"_settingsSchema",void 0),ao(this,"_connected",!1),ao(this,"_ui",new Map),ao(this,"_mFileStorage",void 0),ao(this,"_mRequest",void 0),ao(this,"_mExperiments",void 0),ao(this,"_beforeunloadCallback",void 0),this._baseInfo=t,this._caller=e,e.on("sys:ui:visible",(t=>{null!=t&&t.toggle&&this.toggleMainUI();})),e.on("settings:changed",(t=>{const e=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,t);this.emit("settings:changed",{...n},e);})),e.on("beforeunload",(async t=>{const{actor:n,...r}=t,o=this._beforeunloadCallback;try{o&&await o(r),null==n||n.resolve(null);}catch(t){console.debug(`${e.debugTag} [beforeunload] `,t),null==n||n.reject(t);}}));}async ready(t,e){if(!this._connected)try{var n;"function"==typeof t&&(e=t,t={});let r=await this._caller.connectToParent(t);this._connected=!0,r=Ke(this._baseInfo,r),null!==(n=r)&&void 0!==n&&n.id&&(this._debugTag=this._caller.debugTag=`#${r.id} [${r.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(r.settings=function(t,e){const n=(e||[]).reduce(((t,e)=>("default"in e&&(t[e.key]=e.default),t)),{});return Object.assign(n,t)}(r.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version});}catch(t){console.warn(t);}e&&e.call(this,r);}catch(t){console.error(`${this._debugTag} [Ready Error]`,t);}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(t){"function"==typeof t&&(this._beforeunloadCallback=t);}provideModel(t){return this.caller._extendUserModel(t),this}provideTheme(t){return this.caller.call("provider:theme",t),this}provideStyle(t){return this.caller.call("provider:style",t),this}provideUI(t){return this.caller.call("provider:ui",t),this}useSettingsSchema(t){return this.connected&&this.caller.call("settings:schema",{schema:t,isSync:!0}),this._settingsSchema=t,this}updateSettings(t){this.caller.call("settings:update",t);}onSettingsChanged(t){const e="settings:changed";return this.on(e,t),()=>this.off(e,t)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0});}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1});}setMainUIAttrs(t){this.caller.call("main-ui:attrs",t);}setMainUIInlineStyle(t){this.caller.call("main-ui:style",t);}hideMainUI(t){const e={key:0,visible:!1,cursor:null==t?void 0:t.restoreEditingCursor};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}showMainUI(t){const e={key:0,visible:!0,autoFocus:null==t?void 0:t.autoFocus};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e);}toggleMainUI(){const t=0,e=this._ui.get(t);e&&e.visible?this.hideMainUI():this.showMainUI();}get version(){return this._version}get isMainUIVisible(){const t=this._ui.get(0);return Boolean(t&&t.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return (t=this)&&((null===(e=t.baseInfo)||void 0===e?void 0:e.effect)||!(null!==(n=t.baseInfo)&&void 0!==n&&n.iir));var t,e,n;}get logger(){return uo}get settings(){var t;return null===(t=this.baseInfo)||void 0===t?void 0:t.settings}get caller(){return this._caller}resolveResourceFullUrl(t){if(this.ensureConnected(),t)return t=t.replace(/^[.\\/]+/,""),Qe(this._baseInfo.lsr,t)}_makeUserProxy(t,e){const n=this,r=this.caller;return new Proxy(t,{get(t,o,i){const s=t[o];return function(...t){if(s){const r=s.apply(n,t.concat(e));if(r!==co)return r}if(e){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input.slice(o.length),a="off"===o,c=n.baseInfo.id,l=`hook:${e}:${Ve(s)}`,u=t[0];r[o](l,u);const f=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l);};return a?void f():(n.App._installPluginHook(c,l),f)}}let i=o;return ["git","ui","assets"].includes(e)&&(i=e+"_"+i),r.callAsync("api:call",{tag:e,method:i,args:t})}}})}_execCallableAPIAsync(t,...e){return this._caller.callAsync("api:call",{method:t,args:e})}_execCallableAPI(t,...e){this._caller.call("api:call",{method:t,args:e});}_callWin(...t){return this._execCallableAPIAsync("_callMainWin",...t)}get App(){return this._makeUserProxy(go,"app")}get Editor(){return this._makeUserProxy(yo,"editor")}get DB(){return this._makeUserProxy(bo,"db")}get Git(){return this._makeUserProxy(_o,"git")}get UI(){return this._makeUserProxy(wo,"ui")}get Assets(){return this._makeUserProxy(xo,"assets")}get FileStorage(){let t=this._mFileStorage;return t||(t=this._mFileStorage=new jn(this)),t}get Request(){let t=this._mRequest;return t||(t=this._mRequest=new In(this)),t}get Experiments(){let t=this._mExperiments;return t||(t=this._mExperiments=new An(this)),t}}function Oo(t,e){return new Co(t,e)}if(null==window.__LSP__HOST__){const t=new On(null);window.logseq=Oo({},t);}})(),r})()));
} (lsplugin_user, lsplugin_user.exports));

const DEFAULT_LOCALE = "en";
let locale$1 = DEFAULT_LOCALE;
let translations = {};
async function setup({ defaultLocale = DEFAULT_LOCALE, builtinTranslations, }) {
    locale$1 = (await logseq.App.getUserConfigs()).preferredLanguage;
    if (locale$1 === defaultLocale)
        return;
    if (builtinTranslations?.[locale$1] != null) {
        translations = builtinTranslations;
    }
}
function t$2(key, args) {
    const template = translations[locale$1]?.[key] ?? key;
    if (args == null)
        return template;
    return Object.entries(args).reduce((str, [name, val]) => str.replaceAll(`\${${name}}`, val), template);
}

var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=[],e$1=l$2.__b,a$1=l$2.__r,v$1=l$2.diffed,l$1=l$2.__c,m$1=l$2.unmount;function d$1(t,u){l$2.__h&&l$2.__h(r$1,t,o$1||u),o$1=0;var i=r$1.__H||(r$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c$1}),i.__[t]}function p$1(n){return o$1=1,y$1(B$2,n)}function y$1(n,u,i){var o=d$1(t$1++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B$2(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r$1,!r$1.u)){r$1.u=!0;var f=r$1.shouldComponentUpdate;r$1.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))};}return o.__N||o.__}function h$1(u,i){var o=d$1(t$1++,3);!l$2.__s&&z$2(o.__H,i)&&(o.__=u,o.i=i,r$1.__H.__h.push(o));}function s$1(u,i){var o=d$1(t$1++,4);!l$2.__s&&z$2(o.__H,i)&&(o.__=u,o.i=i,r$1.__h.push(o));}function _$1(n){return o$1=5,F$2(function(){return {current:n}},[])}function A$2(n,t,r){o$1=6,s$1(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));}function F$2(n,r){var u=d$1(t$1++,7);return z$2(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T$2(n,t){return o$1=8,F$2(function(){return n},t)}function q$2(n){var u=r$1.context[n.__c],i=d$1(t$1++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r$1)),u.props.value):n.__}function x$2(t,r){l$2.useDebugValue&&l$2.useDebugValue(r?r(t):t);}function V$1(){var n=d$1(t$1++,11);return n.__||(n.__="P"+function(n){for(var t=0,r=n.length;r>0;)t=(t<<5)-t+n.charCodeAt(--r)|0;return t}(r$1.__v.__m)+t$1),n.__}function b$1(){for(var t;t=f$1.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k$2),t.__H.__h.forEach(w$2),t.__H.__h=[];}catch(r){t.__H.__h=[],l$2.__e(r,t.__v);}}l$2.__b=function(n){"function"!=typeof n.type||n.__m||null===n.__?n.__m||(n.__m=n.__&&n.__.__m?n.__.__m:""):n.__m=(n.__&&n.__.__m?n.__.__m:"")+(n.__&&n.__.__k?n.__.__k.indexOf(n):0),r$1=null,e$1&&e$1(n);},l$2.__r=function(n){a$1&&a$1(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$1,n.__N=n.i=void 0;})):(i.__h.forEach(k$2),i.__h.forEach(w$2),i.__h=[])),u$1=r$1;},l$2.diffed=function(t){v$1&&v$1(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f$1.push(o)&&i$1===l$2.requestAnimationFrame||((i$1=l$2.requestAnimationFrame)||j$2)(b$1)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$1&&(n.__=n.__V),n.i=void 0,n.__V=c$1;})),u$1=r$1=null;},l$2.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k$2),t.__h=t.__h.filter(function(n){return !n.__||w$2(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$2.__e(u,t.__v);}}),l$1&&l$1(t,r);},l$2.unmount=function(t){m$1&&m$1(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k$2(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$2.__e(r,u.__v));};var g$2="function"==typeof requestAnimationFrame;function j$2(n){var t,r=function(){clearTimeout(u),g$2&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$2&&(t=requestAnimationFrame(r));}function k$2(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function w$2(n){var t=r$1;n.__c=n.__(),r$1=t;}function z$2(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B$2(n,t){return "function"==typeof t?t(n):t}

function g$1(n,t){for(var e in t)n[e]=t[e];return n}function C$1(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function w$1(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return !r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:C$1(this.props,n)}function u(e){return this.shouldComponentUpdate=r,h$2(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(E.prototype=new d$2).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C$1(this.props,n)||C$1(this.state,t)};var R=l$2.__b;l$2.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var x$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function N$1(n){function t(t){var e=g$1({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=x$1,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var k$1=function(n,t){return null==n?null:x$3(x$3(n).map(t))},A$1={map:k$1,forEach:k$1,count:function(n){return n?x$3(n).length:0},only:function(n){var t=x$3(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:x$3},O$1=l$2.__e;l$2.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);O$1(n,t,e,r);};var T$1=l$2.unmount;function I$1(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g$1({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return I$1(n,t,e)})),n}function L$1(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return L$1(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function U(){this.__u=0,this.t=null,this.__b=null;}function D$1(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function F$1(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n;},function(n){u=n;}),u)throw u;if(!r)throw e;return h$2(r,o)}return o.displayName="Lazy",o.__f=!0,o}function M$1(){this.u=null,this.o=null;}l$2.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),T$1&&T$1(n);},(U.prototype=new d$2).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=D$1(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=L$1(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},U.prototype.componentWillUnmount=function(){this.t=[];},U.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=I$1(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&h$2(p$2,null,n.fallback);return i&&(i.__h=null),[h$2(p$2,null,e.__a?null:n.children),i]};var V=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function W$1(n){return this.getChildContext=function(){return n.context},n.children}function P$1(n){var e=this,r=n.i;e.componentWillUnmount=function(){P$2(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),P$2(h$2(W$1,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount();}function $$1(n,e){var r=h$2(P$1,{__v:n,i:e});return r.containerInfo=e,r}(M$1.prototype=new d$2).__a=function(n){var t=this,e=D$1(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),V(t,n,r)):u();};e?e(o):o();}},M$1.prototype.render=function(n){this.u=null,this.o=new Map;var t=x$3(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M$1.prototype.componentDidUpdate=M$1.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){V(n,e,t);});};var j$1="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,z$1=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B$1="undefined"!=typeof document,H$1=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function Z$1(n,t,e){return null==t.__k&&(t.textContent=""),P$2(n,t),"function"==typeof e&&e(),n?n.__c:null}function Y(n,t,e){return S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}d$2.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(d$2.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var q$1=l$2.event;function G$1(){}function J$1(){return this.cancelBubble}function K$1(){return this.defaultPrevented}l$2.event=function(n){return q$1&&(n=q$1(n)),n.persist=G$1,n.isPropagationStopped=J$1,n.isDefaultPrevented=K$1,n.nativeEvent=n};var Q$1,X={configurable:!0,get:function(){return this.class}},nn=l$2.vnode;l$2.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];B$1&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!H$1(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&z$1.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l);}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=x$3(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==t&&null!=u.defaultValue&&(u.value=x$3(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),n.props=u,e.class!=e.className&&(X.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",X));}n.$$typeof=j$1,nn&&nn(n);};var tn=l$2.__r;l$2.__r=function(n){tn&&tn(n),Q$1=n.__c;};var en={ReactCurrentDispatcher:{current:{readContext:function(n){return Q$1.__n[n.__c].props.value}}}};function un(n){return h$2.bind(null,n)}function on(n){return !!n&&n.$$typeof===j$1}function ln(n){return on(n)?q$3.apply(null,arguments):n}function cn(n){return !!n.__k&&(P$2(null,n),!0)}function fn(n){return n&&(n.base||1===n.nodeType&&n)||null}var an=function(n,t){return n(t)},sn=function(n,t){return n(t)},hn=p$2;function vn(n){n();}function dn(n){return n}function pn(){return [!1,vn]}var mn=s$1;function yn(n,t){var e=t(),r=p$1({h:{__:e,v:t}}),u=r[0].h,o=r[1];return s$1(function(){u.__=e,u.v=t,u.__!==t()&&o({h:u});},[n,e,t]),h$1(function(){return u.__!==u.v()&&o({h:u}),n(function(){u.__!==u.v()&&o({h:u});})},[n]),e}var _n={useState:p$1,useId:V$1,useReducer:y$1,useEffect:h$1,useLayoutEffect:s$1,useInsertionEffect:mn,useTransition:pn,useDeferredValue:dn,useSyncExternalStore:yn,startTransition:vn,useRef:_$1,useImperativeHandle:A$2,useMemo:F$2,useCallback:T$2,useContext:q$2,useDebugValue:x$2,version:"17.0.2",Children:A$1,render:Z$1,hydrate:Y,unmountComponentAtNode:cn,createPortal:$$1,createElement:h$2,createContext:B$3,createFactory:un,cloneElement:ln,createRef:y$2,Fragment:p$2,isValidElement:on,findDOMNode:fn,Component:d$2,PureComponent:E,memo:w$1,forwardRef:N$1,flushSync:sn,unstable_batchedUpdates:an,StrictMode:hn,Suspense:U,SuspenseList:M$1,lazy:F$1,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:en};

const _isArray = Array.isArray;

function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
}

function debounce(func, ms, immediate = false) {
  let timeout;
  return function (...input) {
    const later = function () {
      timeout = null;

      if (!immediate) {
        return func.apply(null, input);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);

    if (callNow) {
      return func.apply(null, input);
    }
  };
}

function throttle(fn, ms) {
  let wait = false;
  let result;
  return function (...input) {
    if (!wait) {
      result = fn.apply(null, input);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, ms);
    }

    return result;
  };
}

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable');
  }

  let index = 0;
  const len = list.length;

  while (index < len) {
    acc = reducer(acc, list[index], index, list);
    index++;
  }

  return acc;
}

const reduce = curry(reduceFn);

function multiply(x, y) {
  if (arguments.length === 1) return _y => multiply(x, _y);
  return x * y;
}

reduce(multiply, 1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * This hooks allows you to track a value across renderings.
 * It keeps the value during the last rendering or `undefined` if there
 * is no last rendering.
 *
 * Note you can combine multiple uses of this hook if you want to keep
 * history steps deeper, as you can see in the following example.
 *
 * ```js
 * const prevA = usePrev(a)
 * const prevPrevA = usePrev(prevA)
 * ```
 */
function usePrev(val) {
    var prevRef = _$1();
    h$1(function () {
        prevRef.current = val;
    });
    return prevRef.current;
}

/**
 * This component keeps the previous rendered view and its state around
 * so when you switch back to it, no render is required and all of its
 * state are retained. It can optionally retain the scroll offset too.
 *
 * Views are associated and identified by `kpvId`. There are 2 ways to
 * render a view, `kpvComponent` or `kpvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kpvRestored` and `kpvScrollElementRef`. `kpvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kpvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepPrevView kpvId="/pages/a" kpvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepPrevView kpvId="/pages/b" kpvComponent={CompB} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kpvRestored, kpvScrollElementRef}) {
 *   useEffect(() => {
 *     kpvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kpvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kpvRestored])
 *
 *   return ...
 * }
 * ```
 */
w$1(function KeepPrevView(_a) {
    var kpvId = _a.kpvId, kpvComponent = _a.kpvComponent, kpvRender = _a.kpvRender, others = __rest(_a, ["kpvId", "kpvComponent", "kpvRender"]);
    var prevId = usePrev(kpvId);
    var prevPrevId = usePrev(prevId);
    var restored = kpvId === prevPrevId;
    var scrollElementRef = useScrollRestore$1(restored);
    var Comp = kpvComponent;
    var jsx = kpvRender ? (kpvRender(__assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others))) : (_n.createElement(Comp, __assign({ kpvRestored: restored, kpvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    return (_n.createElement(_n.Fragment, null,
        _n.createElement("div", { key: prevId, style: { display: "none" } }, prevJsx === undefined
            ? undefined
            : ln(prevJsx, { kpvRestored: false })),
        _n.createElement("div", { key: kpvId }, jsx)));
}, function (prev, next) { return prev.kpvId === next.kpvId; });
function useScrollRestore$1(restored) {
    var _a;
    var scrollElementRef = _$1();
    var prevScrollElement = usePrev(scrollElementRef.current);
    var scrollTopRef = _$1();
    scrollTopRef.current = (_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop;
    var prevScrollTop = usePrev(scrollTopRef.current);
    s$1(function () {
        if (restored && prevScrollElement != null && prevScrollTop != null) {
            prevScrollElement.scrollTop = prevScrollTop;
        }
    });
    return scrollElementRef;
}

/**
 * This component keeps the specified (`kvId` that starts with `kvPrefix`)
 * rendered view and its state around so when you switch back to it, no
 * render is required and all of its state are retained. It can optionally
 * retain the scroll offset too.
 *
 * Views are associated and identified by `kvId`. There are 2 ways to
 * render a view, `kvComponent` or `kvRender` function and regardless of
 * what you choose to use, you will receive 2 extra props,
 * `kvRestored` and `kvScrollElementRef`. `kvRestored` tells you whether
 * the view to render is "restored", that is, it was kept as the previous
 * view; `kvScrollElementRef` in the other hand, allows you to "attach" a
 * scrolling DOM element if you want to persist scroll offset.
 *
 * @example
 * ```jsx
 * let view
 *
 * switch (path) {
 * case "/pages/a":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/a" kvComponent={CompA} />
 *   break
 * case "/pages/b":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/b" kvComponent={CompB} />
 *   break
 * case "/pages/c":
 *   view = <KeepView kvPrefix="/pages/a" kvId="/pages/c" kvComponent={CompC} />
 *   break
 * }
 *
 * // CompA
 * function CompA({kvRestored, kvScrollElementRef}) {
 *   useEffect(() => {
 *     kvScrollElementRef.current = document.body
 *   }, [])
 *
 *   useEffect(() => {
 *     if (kvRestored) {
 *       // View is showed up again.
 *     }
 *   }, [kvRestored])
 *
 *   return ...
 * }
 * ```
 */
w$1(function KeepView(_a) {
    var kvId = _a.kvId, kvPrefix = _a.kvPrefix, kvComponent = _a.kvComponent, kvRender = _a.kvRender, others = __rest(_a, ["kvId", "kvPrefix", "kvComponent", "kvRender"]);
    var keptId = _$1();
    var keptJsx = _$1();
    var prevId = usePrev(kvId);
    var restored = kvId === keptId.current;
    if (restored) {
        keptId.current = undefined;
        keptJsx.current = undefined;
    }
    var shallKeep = !!(prevId === null || prevId === void 0 ? void 0 : prevId.startsWith(kvPrefix));
    var scrollElementRef = useScrollRestore(shallKeep, restored);
    var Comp = kvComponent;
    var jsx = kvRender ? (kvRender(__assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others))) : (_n.createElement(Comp, __assign({ kvRestored: restored, kvScrollElementRef: scrollElementRef }, others)));
    var prevJsx = usePrev(jsx);
    if (shallKeep) {
        keptId.current = prevId;
        keptJsx.current = prevJsx;
    }
    return (_n.createElement(_n.Fragment, null,
        _n.createElement("div", { key: keptId.current, style: { display: "none" } }, keptJsx.current === undefined
            ? undefined
            : ln(keptJsx.current, { kvRestored: false })),
        _n.createElement("div", { key: kvId }, jsx)));
}, function (prev, next) { return prev.kvId === next.kvId; });
function useScrollRestore(shallKeep, restored) {
    var _a;
    var scrollElementRef = _$1();
    var scrollTopRef = _$1();
    var prevScrollTop = usePrev((_a = scrollElementRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop);
    if (shallKeep) {
        scrollTopRef.current = prevScrollTop;
    }
    s$1(function () {
        if (restored &&
            scrollElementRef.current != null &&
            scrollTopRef.current != null) {
            scrollElementRef.current.scrollTop = scrollTopRef.current;
        }
    });
    return scrollElementRef;
}

/**
 * Join your classes for a component, any non-string values will be excluded.
 *
 * ```js
 * const level = 1
 * const visible = false
 * let dynamicClassName
 *
 * <MyComp
 *   className={cls(
 *     "container",
 *     `level-${level}`,
 *     visible && "visible",
 *     dynamicClassName,
 *   )}
 * />
 *
 * // Will be <MyComp className="container level-1" />
 * ```
 */
function cls() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return (classes.filter(function (c) { return typeof c === "string" && c !== ""; }).join(" ") ||
        undefined);
}

/**
 * Handles the composition events for IME input and provides an unified
 * callback.
 */
function useCompositionChange(callback) {
    var isComposing = _$1(false);
    var onChange = T$2(function (e) {
        if (isComposing.current)
            return;
        callback(e);
    }, [callback]);
    var onCompositionStart = T$2(function (e) {
        isComposing.current = true;
    }, []);
    var onCompositionEnd = T$2(function (e) {
        isComposing.current = false;
        if (!e.data)
            return;
        callback(e);
    }, [callback]);
    return { onChange: onChange, onCompositionStart: onCompositionStart, onCompositionEnd: onCompositionEnd };
}

function getGlobal() {
    var g = undefined;
    try {
        g = window;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    try {
        g = global;
        return g;
    }
    catch (e) {
        // ignore, try next
    }
    return g;
}
getGlobal();

function _defineProperty$w(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class EventEmitter {
    on(eventName, handler) {
        if (this.events[eventName] == null) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(handler);
    }
    off(eventName, handler) {
        if (this.events[eventName] == null) return;
        const index = this.events[eventName].indexOf(handler);
        if (index > -1) {
            this.events[eventName].splice(index, 1);
        }
    }
    async emit(eventName, data) {
        if (!this.events[eventName]?.length) return;
        for (const handler of this.events[eventName]){
            await handler(data);
        }
    }
    constructor(){
        _defineProperty$w(this, "events", {});
    }
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

function _typeof$y(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$y = function _typeof(obj) { return typeof obj; }; } else { _typeof$y = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$y(obj); }
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof$y(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions$1(newOptions) {
  defaultOptions = newOptions;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;

function _typeof$x(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$x = function _typeof(obj) { return typeof obj; }; } else { _typeof$x = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$x(obj); }
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof$x(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);

  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters$1 = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters$1.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters$1.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters$1.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters$1.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters$1.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters$1.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters$1.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return formatters$1.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale$1 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : locale;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }

    var formatter = formatters[firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString$1(input) {
  var matched = input.match(escapedStringRegExp$1);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp$1, "'");
}

function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      target[property] = object[property];
    }
  }

  return target;
}

function _typeof$w(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$w = function _typeof(obj) { return typeof obj; }; } else { _typeof$w = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$w(obj); }

function _inherits$v(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$v(subClass, superClass); }

function _setPrototypeOf$v(o, p) { _setPrototypeOf$v = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$v(o, p); }

function _createSuper$v(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$v(); return function _createSuperInternal() { var Super = _getPrototypeOf$v(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$v(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$v(this, result); }; }

function _possibleConstructorReturn$v(self, call) { if (call && (_typeof$w(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$v(self); }

function _assertThisInitialized$v(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$v() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$v(o) { _getPrototypeOf$v = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$v(o); }

function _classCallCheck$w(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$w(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$w(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$w(Constructor.prototype, protoProps); if (staticProps) _defineProperties$w(Constructor, staticProps); return Constructor; }

function _defineProperty$v(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/function () {
  function Setter() {
    _classCallCheck$w(this, Setter);

    _defineProperty$v(this, "subPriority", 0);
  }

  _createClass$w(Setter, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);

  return Setter;
}();
var ValueSetter = /*#__PURE__*/function (_Setter) {
  _inherits$v(ValueSetter, _Setter);

  var _super = _createSuper$v(ValueSetter);

  function ValueSetter(value, validateValue, setValue, priority, subPriority) {
    var _this;

    _classCallCheck$w(this, ValueSetter);

    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;

    if (subPriority) {
      _this.subPriority = subPriority;
    }

    return _this;
  }

  _createClass$w(ValueSetter, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);

  return ValueSetter;
}(Setter);
var DateToSystemTimezoneSetter = /*#__PURE__*/function (_Setter2) {
  _inherits$v(DateToSystemTimezoneSetter, _Setter2);

  var _super2 = _createSuper$v(DateToSystemTimezoneSetter);

  function DateToSystemTimezoneSetter() {
    var _this2;

    _classCallCheck$w(this, DateToSystemTimezoneSetter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty$v(_assertThisInitialized$v(_this2), "priority", TIMEZONE_UNIT_PRIORITY);

    _defineProperty$v(_assertThisInitialized$v(_this2), "subPriority", -1);

    return _this2;
  }

  _createClass$w(DateToSystemTimezoneSetter, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }

      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);

  return DateToSystemTimezoneSetter;
}(Setter);

function _classCallCheck$v(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$v(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$v(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$v(Constructor.prototype, protoProps); if (staticProps) _defineProperties$v(Constructor, staticProps); return Constructor; }
var Parser$1 = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck$v(this, Parser);
  }

  _createClass$v(Parser, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);

      if (!result) {
        return null;
      }

      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);

  return Parser;
}();

function _typeof$v(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$v = function _typeof(obj) { return typeof obj; }; } else { _typeof$v = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$v(obj); }

function _classCallCheck$u(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$u(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$u(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$u(Constructor.prototype, protoProps); if (staticProps) _defineProperties$u(Constructor, staticProps); return Constructor; }

function _inherits$u(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$u(subClass, superClass); }

function _setPrototypeOf$u(o, p) { _setPrototypeOf$u = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$u(o, p); }

function _createSuper$u(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$u(); return function _createSuperInternal() { var Super = _getPrototypeOf$u(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$u(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$u(this, result); }; }

function _possibleConstructorReturn$u(self, call) { if (call && (_typeof$v(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$u(self); }

function _assertThisInitialized$u(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$u() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$u(o) { _getPrototypeOf$u = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$u(o); }

function _defineProperty$u(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var EraParser = /*#__PURE__*/function (_Parser) {
  _inherits$u(EraParser, _Parser);

  var _super = _createSuper$u(EraParser);

  function EraParser() {
    var _this;

    _classCallCheck$u(this, EraParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$u(_assertThisInitialized$u(_this), "priority", 140);

    _defineProperty$u(_assertThisInitialized$u(_this), "incompatibleTokens", ['R', 'u', 't', 'T']);

    return _this;
  }

  _createClass$u(EraParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(dateString, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(dateString, {
            width: 'wide'
          }) || match.era(dateString, {
            width: 'abbreviated'
          }) || match.era(dateString, {
            width: 'narrow'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return EraParser;
}(Parser$1);

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function _typeof$u(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$u = function _typeof(obj) { return typeof obj; }; } else { _typeof$u = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$u(obj); }

function _classCallCheck$t(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$t(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$t(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$t(Constructor.prototype, protoProps); if (staticProps) _defineProperties$t(Constructor, staticProps); return Constructor; }

function _inherits$t(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$t(subClass, superClass); }

function _setPrototypeOf$t(o, p) { _setPrototypeOf$t = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$t(o, p); }

function _createSuper$t(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$t(); return function _createSuperInternal() { var Super = _getPrototypeOf$t(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$t(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$t(this, result); }; }

function _possibleConstructorReturn$t(self, call) { if (call && (_typeof$u(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$t(self); }

function _assertThisInitialized$t(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$t() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$t(o) { _getPrototypeOf$t = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$t(o); }

function _defineProperty$t(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
var YearParser = /*#__PURE__*/function (_Parser) {
  _inherits$t(YearParser, _Parser);

  var _super = _createSuper$t(YearParser);

  function YearParser() {
    var _this;

    _classCallCheck$t(this, YearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$t(_assertThisInitialized$t(_this), "priority", 130);

    _defineProperty$t(_assertThisInitialized$t(_this), "incompatibleTokens", ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$t(YearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return mapValue(parseNDigits(4, dateString), valueCallback);

        case 'yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);

        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return YearParser;
}(Parser$1);

function _typeof$t(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$t = function _typeof(obj) { return typeof obj; }; } else { _typeof$t = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$t(obj); }

function _classCallCheck$s(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$s(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$s(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$s(Constructor.prototype, protoProps); if (staticProps) _defineProperties$s(Constructor, staticProps); return Constructor; }

function _inherits$s(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$s(subClass, superClass); }

function _setPrototypeOf$s(o, p) { _setPrototypeOf$s = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$s(o, p); }

function _createSuper$s(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$s(); return function _createSuperInternal() { var Super = _getPrototypeOf$s(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$s(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$s(this, result); }; }

function _possibleConstructorReturn$s(self, call) { if (call && (_typeof$t(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$s(self); }

function _assertThisInitialized$s(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$s() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$s(o) { _getPrototypeOf$s = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$s(o); }

function _defineProperty$s(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Local week-numbering year
var LocalWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$s(LocalWeekYearParser, _Parser);

  var _super = _createSuper$s(LocalWeekYearParser);

  function LocalWeekYearParser() {
    var _this;

    _classCallCheck$s(this, LocalWeekYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$s(_assertThisInitialized$s(_this), "priority", 130);

    _defineProperty$s(_assertThisInitialized$s(_this), "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);

    return _this;
  }

  _createClass$s(LocalWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return mapValue(parseNDigits(4, dateString), valueCallback);

        case 'Yo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);

        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    }
  }]);

  return LocalWeekYearParser;
}(Parser$1);

function _typeof$s(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$s = function _typeof(obj) { return typeof obj; }; } else { _typeof$s = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$s(obj); }

function _classCallCheck$r(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$r(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$r(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$r(Constructor.prototype, protoProps); if (staticProps) _defineProperties$r(Constructor, staticProps); return Constructor; }

function _inherits$r(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$r(subClass, superClass); }

function _setPrototypeOf$r(o, p) { _setPrototypeOf$r = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$r(o, p); }

function _createSuper$r(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$r(); return function _createSuperInternal() { var Super = _getPrototypeOf$r(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$r(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$r(this, result); }; }

function _possibleConstructorReturn$r(self, call) { if (call && (_typeof$s(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$r(self); }

function _assertThisInitialized$r(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$r() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$r(o) { _getPrototypeOf$r = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$r(o); }

function _defineProperty$r(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOWeekYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$r(ISOWeekYearParser, _Parser);

  var _super = _createSuper$r(ISOWeekYearParser);

  function ISOWeekYearParser() {
    var _this;

    _classCallCheck$r(this, ISOWeekYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$r(_assertThisInitialized$r(_this), "priority", 130);

    _defineProperty$r(_assertThisInitialized$r(_this), "incompatibleTokens", ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$r(ISOWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'R') {
        return parseNDigitsSigned(4, dateString);
      }

      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  }]);

  return ISOWeekYearParser;
}(Parser$1);

function _typeof$r(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$r = function _typeof(obj) { return typeof obj; }; } else { _typeof$r = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$r(obj); }

function _classCallCheck$q(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$q(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$q(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$q(Constructor.prototype, protoProps); if (staticProps) _defineProperties$q(Constructor, staticProps); return Constructor; }

function _inherits$q(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$q(subClass, superClass); }

function _setPrototypeOf$q(o, p) { _setPrototypeOf$q = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$q(o, p); }

function _createSuper$q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$q(); return function _createSuperInternal() { var Super = _getPrototypeOf$q(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$q(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$q(this, result); }; }

function _possibleConstructorReturn$q(self, call) { if (call && (_typeof$r(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$q(self); }

function _assertThisInitialized$q(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$q() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$q(o) { _getPrototypeOf$q = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$q(o); }

function _defineProperty$q(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ExtendedYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$q(ExtendedYearParser, _Parser);

  var _super = _createSuper$q(ExtendedYearParser);

  function ExtendedYearParser() {
    var _this;

    _classCallCheck$q(this, ExtendedYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$q(_assertThisInitialized$q(_this), "priority", 130);

    _defineProperty$q(_assertThisInitialized$q(_this), "incompatibleTokens", ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$q(ExtendedYearParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      if (token === 'u') {
        return parseNDigitsSigned(4, dateString);
      }

      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return ExtendedYearParser;
}(Parser$1);

function _typeof$q(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$q = function _typeof(obj) { return typeof obj; }; } else { _typeof$q = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$q(obj); }

function _classCallCheck$p(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$p(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$p(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$p(Constructor.prototype, protoProps); if (staticProps) _defineProperties$p(Constructor, staticProps); return Constructor; }

function _inherits$p(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$p(subClass, superClass); }

function _setPrototypeOf$p(o, p) { _setPrototypeOf$p = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$p(o, p); }

function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function _createSuperInternal() { var Super = _getPrototypeOf$p(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$p(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$p(this, result); }; }

function _possibleConstructorReturn$p(self, call) { if (call && (_typeof$q(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$p(self); }

function _assertThisInitialized$p(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$p(o) { _getPrototypeOf$p = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$p(o); }

function _defineProperty$p(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var QuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits$p(QuarterParser, _Parser);

  var _super = _createSuper$p(QuarterParser);

  function QuarterParser() {
    var _this;

    _classCallCheck$p(this, QuarterParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$p(_assertThisInitialized$p(_this), "priority", 120);

    _defineProperty$p(_assertThisInitialized$p(_this), "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$p(QuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return QuarterParser;
}(Parser$1);

function _typeof$p(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$p = function _typeof(obj) { return typeof obj; }; } else { _typeof$p = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$p(obj); }

function _classCallCheck$o(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$o(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$o(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$o(Constructor.prototype, protoProps); if (staticProps) _defineProperties$o(Constructor, staticProps); return Constructor; }

function _inherits$o(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$o(subClass, superClass); }

function _setPrototypeOf$o(o, p) { _setPrototypeOf$o = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$o(o, p); }

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function _createSuperInternal() { var Super = _getPrototypeOf$o(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$o(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$o(this, result); }; }

function _possibleConstructorReturn$o(self, call) { if (call && (_typeof$p(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$o(self); }

function _assertThisInitialized$o(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$o(o) { _getPrototypeOf$o = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$o(o); }

function _defineProperty$o(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var StandAloneQuarterParser = /*#__PURE__*/function (_Parser) {
  _inherits$o(StandAloneQuarterParser, _Parser);

  var _super = _createSuper$o(StandAloneQuarterParser);

  function StandAloneQuarterParser() {
    var _this;

    _classCallCheck$o(this, StandAloneQuarterParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$o(_assertThisInitialized$o(_this), "priority", 120);

    _defineProperty$o(_assertThisInitialized$o(_this), "incompatibleTokens", ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$o(StandAloneQuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, dateString);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneQuarterParser;
}(Parser$1);

function _typeof$o(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$o = function _typeof(obj) { return typeof obj; }; } else { _typeof$o = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$o(obj); }

function _classCallCheck$n(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$n(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$n(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$n(Constructor.prototype, protoProps); if (staticProps) _defineProperties$n(Constructor, staticProps); return Constructor; }

function _inherits$n(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$n(subClass, superClass); }

function _setPrototypeOf$n(o, p) { _setPrototypeOf$n = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$n(o, p); }

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function _createSuperInternal() { var Super = _getPrototypeOf$n(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$n(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$n(this, result); }; }

function _possibleConstructorReturn$n(self, call) { if (call && (_typeof$o(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$n(self); }

function _assertThisInitialized$n(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$n(o) { _getPrototypeOf$n = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$n(o); }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var MonthParser = /*#__PURE__*/function (_Parser) {
  _inherits$n(MonthParser, _Parser);

  var _super = _createSuper$n(MonthParser);

  function MonthParser() {
    var _this;

    _classCallCheck$n(this, MonthParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$n(_assertThisInitialized$n(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    _defineProperty$n(_assertThisInitialized$n(_this), "priority", 110);

    return _this;
  }

  _createClass$n(MonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return MonthParser;
}(Parser$1);

function _typeof$n(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$n = function _typeof(obj) { return typeof obj; }; } else { _typeof$n = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$n(obj); }

function _classCallCheck$m(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$m(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$m(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$m(Constructor.prototype, protoProps); if (staticProps) _defineProperties$m(Constructor, staticProps); return Constructor; }

function _inherits$m(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$m(subClass, superClass); }

function _setPrototypeOf$m(o, p) { _setPrototypeOf$m = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$m(o, p); }

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function _createSuperInternal() { var Super = _getPrototypeOf$m(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$m(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$m(this, result); }; }

function _possibleConstructorReturn$m(self, call) { if (call && (_typeof$n(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$m(self); }

function _assertThisInitialized$m(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$m(o) { _getPrototypeOf$m = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$m(o); }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var StandAloneMonthParser = /*#__PURE__*/function (_Parser) {
  _inherits$m(StandAloneMonthParser, _Parser);

  var _super = _createSuper$m(StandAloneMonthParser);

  function StandAloneMonthParser() {
    var _this;

    _classCallCheck$m(this, StandAloneMonthParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$m(_assertThisInitialized$m(_this), "priority", 110);

    _defineProperty$m(_assertThisInitialized$m(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$m(StandAloneMonthParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return mapValue(parseNDigits(2, dateString), valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'month'
          }), valueCallback);
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneMonthParser;
}(Parser$1);

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _typeof$m(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$m = function _typeof(obj) { return typeof obj; }; } else { _typeof$m = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$m(obj); }

function _classCallCheck$l(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$l(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$l(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$l(Constructor.prototype, protoProps); if (staticProps) _defineProperties$l(Constructor, staticProps); return Constructor; }

function _inherits$l(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$l(subClass, superClass); }

function _setPrototypeOf$l(o, p) { _setPrototypeOf$l = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$l(o, p); }

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function _createSuperInternal() { var Super = _getPrototypeOf$l(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$l(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$l(this, result); }; }

function _possibleConstructorReturn$l(self, call) { if (call && (_typeof$m(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$l(self); }

function _assertThisInitialized$l(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$l(o) { _getPrototypeOf$l = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$l(o); }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits$l(LocalWeekParser, _Parser);

  var _super = _createSuper$l(LocalWeekParser);

  function LocalWeekParser() {
    var _this;

    _classCallCheck$l(this, LocalWeekParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$l(_assertThisInitialized$l(_this), "priority", 100);

    _defineProperty$l(_assertThisInitialized$l(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);

    return _this;
  }

  _createClass$l(LocalWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, dateString);

        case 'wo':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
  }]);

  return LocalWeekParser;
}(Parser$1);

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

function _typeof$l(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$l = function _typeof(obj) { return typeof obj; }; } else { _typeof$l = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$l(obj); }

function _classCallCheck$k(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$k(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$k(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$k(Constructor.prototype, protoProps); if (staticProps) _defineProperties$k(Constructor, staticProps); return Constructor; }

function _inherits$k(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$k(subClass, superClass); }

function _setPrototypeOf$k(o, p) { _setPrototypeOf$k = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$k(o, p); }

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function _createSuperInternal() { var Super = _getPrototypeOf$k(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$k(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$k(this, result); }; }

function _possibleConstructorReturn$k(self, call) { if (call && (_typeof$l(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$k(self); }

function _assertThisInitialized$k(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$k(o) { _getPrototypeOf$k = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$k(o); }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOWeekParser = /*#__PURE__*/function (_Parser) {
  _inherits$k(ISOWeekParser, _Parser);

  var _super = _createSuper$k(ISOWeekParser);

  function ISOWeekParser() {
    var _this;

    _classCallCheck$k(this, ISOWeekParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$k(_assertThisInitialized$k(_this), "priority", 100);

    _defineProperty$k(_assertThisInitialized$k(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$k(ISOWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, dateString);

        case 'Io':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
  }]);

  return ISOWeekParser;
}(Parser$1);

function _typeof$k(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$k = function _typeof(obj) { return typeof obj; }; } else { _typeof$k = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$k(obj); }

function _classCallCheck$j(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$j(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$j(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$j(Constructor.prototype, protoProps); if (staticProps) _defineProperties$j(Constructor, staticProps); return Constructor; }

function _inherits$j(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$j(subClass, superClass); }

function _setPrototypeOf$j(o, p) { _setPrototypeOf$j = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$j(o, p); }

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function _createSuperInternal() { var Super = _getPrototypeOf$j(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$j(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$j(this, result); }; }

function _possibleConstructorReturn$j(self, call) { if (call && (_typeof$k(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$j(self); }

function _assertThisInitialized$j(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$j(o) { _getPrototypeOf$j = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$j(o); }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Day of the month

var DateParser = /*#__PURE__*/function (_Parser) {
  _inherits$j(DateParser, _Parser);

  var _super = _createSuper$j(DateParser);

  function DateParser() {
    var _this;

    _classCallCheck$j(this, DateParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$j(_assertThisInitialized$j(_this), "priority", 90);

    _defineProperty$j(_assertThisInitialized$j(_this), "subPriority", 1);

    _defineProperty$j(_assertThisInitialized$j(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$j(DateParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, dateString);

        case 'do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DateParser;
}(Parser$1);

function _typeof$j(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$j = function _typeof(obj) { return typeof obj; }; } else { _typeof$j = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$j(obj); }

function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$i(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$i(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$i(Constructor.prototype, protoProps); if (staticProps) _defineProperties$i(Constructor, staticProps); return Constructor; }

function _inherits$i(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$i(subClass, superClass); }

function _setPrototypeOf$i(o, p) { _setPrototypeOf$i = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$i(o, p); }

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function _createSuperInternal() { var Super = _getPrototypeOf$i(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$i(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$i(this, result); }; }

function _possibleConstructorReturn$i(self, call) { if (call && (_typeof$j(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$i(self); }

function _assertThisInitialized$i(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$i(o) { _getPrototypeOf$i = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$i(o); }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var DayOfYearParser = /*#__PURE__*/function (_Parser) {
  _inherits$i(DayOfYearParser, _Parser);

  var _super = _createSuper$i(DayOfYearParser);

  function DayOfYearParser() {
    var _this;

    _classCallCheck$i(this, DayOfYearParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$i(_assertThisInitialized$i(_this), "priority", 90);

    _defineProperty$i(_assertThisInitialized$i(_this), "subpriority", 1);

    _defineProperty$i(_assertThisInitialized$i(_this), "incompatibleTokens", ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$i(DayOfYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);

        case 'Do':
          return match.ordinalNumber(dateString, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DayOfYearParser;
}(Parser$1);

function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  requiredArgs(2, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _typeof$i(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$i = function _typeof(obj) { return typeof obj; }; } else { _typeof$i = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$i(obj); }

function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$h(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$h(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$h(Constructor.prototype, protoProps); if (staticProps) _defineProperties$h(Constructor, staticProps); return Constructor; }

function _inherits$h(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$h(subClass, superClass); }

function _setPrototypeOf$h(o, p) { _setPrototypeOf$h = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$h(o, p); }

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function _createSuperInternal() { var Super = _getPrototypeOf$h(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$h(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$h(this, result); }; }

function _possibleConstructorReturn$h(self, call) { if (call && (_typeof$i(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$h(self); }

function _assertThisInitialized$h(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$h(o) { _getPrototypeOf$h = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$h(o); }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayParser = /*#__PURE__*/function (_Parser) {
  _inherits$h(DayParser, _Parser);

  var _super = _createSuper$h(DayParser);

  function DayParser() {
    var _this;

    _classCallCheck$h(this, DayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$h(_assertThisInitialized$h(_this), "priority", 90);

    _defineProperty$h(_assertThisInitialized$h(_this), "incompatibleTokens", ['D', 'i', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$h(DayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return DayParser;
}(Parser$1);

function _typeof$h(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$h = function _typeof(obj) { return typeof obj; }; } else { _typeof$h = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$h(obj); }

function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); return Constructor; }

function _inherits$g(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$g(subClass, superClass); }

function _setPrototypeOf$g(o, p) { _setPrototypeOf$g = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$g(o, p); }

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf$g(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$g(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$g(this, result); }; }

function _possibleConstructorReturn$g(self, call) { if (call && (_typeof$h(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$g(self); }

function _assertThisInitialized$g(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$g(o) { _getPrototypeOf$g = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$g(o); }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits$g(LocalDayParser, _Parser);

  var _super = _createSuper$g(LocalDayParser);

  function LocalDayParser() {
    var _this;

    _classCallCheck$g(this, LocalDayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$g(_assertThisInitialized$g(_this), "priority", 90);

    _defineProperty$g(_assertThisInitialized$g(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']);

    return _this;
  }

  _createClass$g(LocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd

        case 'eo':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue

        case 'eee':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return LocalDayParser;
}(Parser$1);

function _typeof$g(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$g = function _typeof(obj) { return typeof obj; }; } else { _typeof$g = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$g(obj); }

function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); return Constructor; }

function _inherits$f(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$f(subClass, superClass); }

function _setPrototypeOf$f(o, p) { _setPrototypeOf$f = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$f(o, p); }

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf$f(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$f(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$f(this, result); }; }

function _possibleConstructorReturn$f(self, call) { if (call && (_typeof$g(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$f(self); }

function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$f(o) { _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$f(o); }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StandAloneLocalDayParser = /*#__PURE__*/function (_Parser) {
  _inherits$f(StandAloneLocalDayParser, _Parser);

  var _super = _createSuper$f(StandAloneLocalDayParser);

  function StandAloneLocalDayParser() {
    var _this;

    _classCallCheck$f(this, StandAloneLocalDayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$f(_assertThisInitialized$f(_this), "priority", 90);

    _defineProperty$f(_assertThisInitialized$f(_this), "incompatibleTokens", ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']);

    return _this;
  }

  _createClass$f(StandAloneLocalDayParser, [{
    key: "parse",
    value: function parse(dateString, token, match, options) {
      var valueCallback = function valueCallback(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return mapValue(parseNDigits(token.length, dateString), valueCallback);
        // 3rd

        case 'co':
          return mapValue(match.ordinalNumber(dateString, {
            unit: 'day'
          }), valueCallback);
        // Tue

        case 'ccc':
          return match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(dateString, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'short',
            context: 'standalone'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return StandAloneLocalDayParser;
}(Parser$1);

function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs(2, arguments);
  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

function _typeof$f(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$f = function _typeof(obj) { return typeof obj; }; } else { _typeof$f = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$f(obj); }

function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); return Constructor; }

function _inherits$e(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$e(subClass, superClass); }

function _setPrototypeOf$e(o, p) { _setPrototypeOf$e = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$e(o, p); }

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf$e(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$e(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$e(this, result); }; }

function _possibleConstructorReturn$e(self, call) { if (call && (_typeof$f(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$e(self); }

function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$e(o) { _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$e(o); }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISODayParser = /*#__PURE__*/function (_Parser) {
  _inherits$e(ISODayParser, _Parser);

  var _super = _createSuper$e(ISODayParser);

  function ISODayParser() {
    var _this;

    _classCallCheck$e(this, ISODayParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$e(_assertThisInitialized$e(_this), "priority", 90);

    _defineProperty$e(_assertThisInitialized$e(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']);

    return _this;
  }

  _createClass$e(ISODayParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, dateString);
        // 2nd

        case 'io':
          return match.ordinalNumber(dateString, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return mapValue(match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // T

        case 'iiiii':
          return mapValue(match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tu

        case 'iiiiii':
          return mapValue(match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
        // Tuesday

        case 'iiii':
        default:
          return mapValue(match.day(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'short',
            context: 'formatting'
          }) || match.day(dateString, {
            width: 'narrow',
            context: 'formatting'
          }), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);

  return ISODayParser;
}(Parser$1);

function _typeof$e(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$e = function _typeof(obj) { return typeof obj; }; } else { _typeof$e = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$e(obj); }

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

function _inherits$d(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$d(subClass, superClass); }

function _setPrototypeOf$d(o, p) { _setPrototypeOf$d = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$d(o, p); }

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf$d(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$d(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$d(this, result); }; }

function _possibleConstructorReturn$d(self, call) { if (call && (_typeof$e(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$d(self); }

function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$d(o) { _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$d(o); }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var AMPMParser = /*#__PURE__*/function (_Parser) {
  _inherits$d(AMPMParser, _Parser);

  var _super = _createSuper$d(AMPMParser);

  function AMPMParser() {
    var _this;

    _classCallCheck$d(this, AMPMParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$d(_assertThisInitialized$d(_this), "priority", 80);

    _defineProperty$d(_assertThisInitialized$d(_this), "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$d(AMPMParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return AMPMParser;
}(Parser$1);

function _typeof$d(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$d = function _typeof(obj) { return typeof obj; }; } else { _typeof$d = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$d(obj); }

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$c(subClass, superClass); }

function _setPrototypeOf$c(o, p) { _setPrototypeOf$c = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$c(o, p); }

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf$c(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$c(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$c(this, result); }; }

function _possibleConstructorReturn$c(self, call) { if (call && (_typeof$d(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$c(self); }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$c(o) { _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$c(o); }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var AMPMMidnightParser = /*#__PURE__*/function (_Parser) {
  _inherits$c(AMPMMidnightParser, _Parser);

  var _super = _createSuper$c(AMPMMidnightParser);

  function AMPMMidnightParser() {
    var _this;

    _classCallCheck$c(this, AMPMMidnightParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$c(_assertThisInitialized$c(_this), "priority", 80);

    _defineProperty$c(_assertThisInitialized$c(_this), "incompatibleTokens", ['a', 'B', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$c(AMPMMidnightParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return AMPMMidnightParser;
}(Parser$1);

function _typeof$c(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$c = function _typeof(obj) { return typeof obj; }; } else { _typeof$c = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$c(obj); }

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$b(subClass, superClass); }

function _setPrototypeOf$b(o, p) { _setPrototypeOf$b = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$b(o, p); }

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf$b(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$b(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$b(this, result); }; }

function _possibleConstructorReturn$b(self, call) { if (call && (_typeof$c(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$b(self); }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$b(o) { _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$b(o); }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DayPeriodParser = /*#__PURE__*/function (_Parser) {
  _inherits$b(DayPeriodParser, _Parser);

  var _super = _createSuper$b(DayPeriodParser);

  function DayPeriodParser() {
    var _this;

    _classCallCheck$b(this, DayPeriodParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$b(_assertThisInitialized$b(_this), "priority", 80);

    _defineProperty$b(_assertThisInitialized$b(_this), "incompatibleTokens", ['a', 'b', 't', 'T']);

    return _this;
  }

  _createClass$b(DayPeriodParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);

  return DayPeriodParser;
}(Parser$1);

function _typeof$b(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$b = function _typeof(obj) { return typeof obj; }; } else { _typeof$b = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$b(obj); }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$a(subClass, superClass); }

function _setPrototypeOf$a(o, p) { _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$a(o, p); }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf$a(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$a(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$a(this, result); }; }

function _possibleConstructorReturn$a(self, call) { if (call && (_typeof$b(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$a(self); }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$a(o) { _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$a(o); }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour1to12Parser = /*#__PURE__*/function (_Parser) {
  _inherits$a(Hour1to12Parser, _Parser);

  var _super = _createSuper$a(Hour1to12Parser);

  function Hour1to12Parser() {
    var _this;

    _classCallCheck$a(this, Hour1to12Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$a(_assertThisInitialized$a(_this), "priority", 70);

    _defineProperty$a(_assertThisInitialized$a(_this), "incompatibleTokens", ['H', 'K', 'k', 't', 'T']);

    return _this;
  }

  _createClass$a(Hour1to12Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, dateString);

        case 'ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    }
  }]);

  return Hour1to12Parser;
}(Parser$1);

function _typeof$a(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$a = function _typeof(obj) { return typeof obj; }; } else { _typeof$a = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$a(obj); }

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf$9(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$9(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$9(this, result); }; }

function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour0to23Parser = /*#__PURE__*/function (_Parser) {
  _inherits$9(Hour0to23Parser, _Parser);

  var _super = _createSuper$9(Hour0to23Parser);

  function Hour0to23Parser() {
    var _this;

    _classCallCheck$9(this, Hour0to23Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$9(_assertThisInitialized$9(_this), "priority", 70);

    _defineProperty$9(_assertThisInitialized$9(_this), "incompatibleTokens", ['a', 'b', 'h', 'K', 'k', 't', 'T']);

    return _this;
  }

  _createClass$9(Hour0to23Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, dateString);

        case 'Ho':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);

  return Hour0to23Parser;
}(Parser$1);

function _typeof$9(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf$8(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$8(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$8(this, result); }; }

function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$9(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour0To11Parser = /*#__PURE__*/function (_Parser) {
  _inherits$8(Hour0To11Parser, _Parser);

  var _super = _createSuper$8(Hour0To11Parser);

  function Hour0To11Parser() {
    var _this;

    _classCallCheck$8(this, Hour0To11Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$8(_assertThisInitialized$8(_this), "priority", 70);

    _defineProperty$8(_assertThisInitialized$8(_this), "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);

    return _this;
  }

  _createClass$8(Hour0To11Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, dateString);

        case 'Ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    }
  }]);

  return Hour0To11Parser;
}(Parser$1);

function _typeof$8(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf$7(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$7(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$7(this, result); }; }

function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Hour1To24Parser = /*#__PURE__*/function (_Parser) {
  _inherits$7(Hour1To24Parser, _Parser);

  var _super = _createSuper$7(Hour1To24Parser);

  function Hour1To24Parser() {
    var _this;

    _classCallCheck$7(this, Hour1To24Parser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$7(_assertThisInitialized$7(_this), "priority", 70);

    _defineProperty$7(_assertThisInitialized$7(_this), "incompatibleTokens", ['a', 'b', 'h', 'H', 'K', 't', 'T']);

    return _this;
  }

  _createClass$7(Hour1To24Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, dateString);

        case 'ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);

  return Hour1To24Parser;
}(Parser$1);

function _typeof$7(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf$6(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$6(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$6(this, result); }; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var MinuteParser = /*#__PURE__*/function (_Parser) {
  _inherits$6(MinuteParser, _Parser);

  var _super = _createSuper$6(MinuteParser);

  function MinuteParser() {
    var _this;

    _classCallCheck$6(this, MinuteParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$6(_assertThisInitialized$6(_this), "priority", 60);

    _defineProperty$6(_assertThisInitialized$6(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$6(MinuteParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, dateString);

        case 'mo':
          return match.ordinalNumber(dateString, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);

  return MinuteParser;
}(Parser$1);

function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf$5(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$5(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$5(this, result); }; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var SecondParser = /*#__PURE__*/function (_Parser) {
  _inherits$5(SecondParser, _Parser);

  var _super = _createSuper$5(SecondParser);

  function SecondParser() {
    var _this;

    _classCallCheck$5(this, SecondParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$5(_assertThisInitialized$5(_this), "priority", 50);

    _defineProperty$5(_assertThisInitialized$5(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$5(SecondParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, dateString);

        case 'so':
          return match.ordinalNumber(dateString, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);

  return SecondParser;
}(Parser$1);

function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$4(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$4(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$4(this, result); }; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var FractionOfSecondParser = /*#__PURE__*/function (_Parser) {
  _inherits$4(FractionOfSecondParser, _Parser);

  var _super = _createSuper$4(FractionOfSecondParser);

  function FractionOfSecondParser() {
    var _this;

    _classCallCheck$4(this, FractionOfSecondParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$4(_assertThisInitialized$4(_this), "priority", 30);

    _defineProperty$4(_assertThisInitialized$4(_this), "incompatibleTokens", ['t', 'T']);

    return _this;
  }

  _createClass$4(FractionOfSecondParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      var valueCallback = function valueCallback(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);

  return FractionOfSecondParser;
}(Parser$1);

function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf$3(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$3(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$3(this, result); }; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOTimezoneWithZParser = /*#__PURE__*/function (_Parser) {
  _inherits$3(ISOTimezoneWithZParser, _Parser);

  var _super = _createSuper$3(ISOTimezoneWithZParser);

  function ISOTimezoneWithZParser() {
    var _this;

    _classCallCheck$3(this, ISOTimezoneWithZParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$3(_assertThisInitialized$3(_this), "priority", 10);

    _defineProperty$3(_assertThisInitialized$3(_this), "incompatibleTokens", ['t', 'T', 'x']);

    return _this;
  }

  _createClass$3(ISOTimezoneWithZParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, dateString);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    }
  }]);

  return ISOTimezoneWithZParser;
}(Parser$1);

function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISOTimezoneParser = /*#__PURE__*/function (_Parser) {
  _inherits$2(ISOTimezoneParser, _Parser);

  var _super = _createSuper$2(ISOTimezoneParser);

  function ISOTimezoneParser() {
    var _this;

    _classCallCheck$2(this, ISOTimezoneParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$2(_assertThisInitialized$2(_this), "priority", 10);

    _defineProperty$2(_assertThisInitialized$2(_this), "incompatibleTokens", ['t', 'T', 'X']);

    return _this;
  }

  _createClass$2(ISOTimezoneParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, dateString);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    }
  }]);

  return ISOTimezoneParser;
}(Parser$1);

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TimestampSecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits$1(TimestampSecondsParser, _Parser);

  var _super = _createSuper$1(TimestampSecondsParser);

  function TimestampSecondsParser() {
    var _this;

    _classCallCheck$1(this, TimestampSecondsParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$1(_assertThisInitialized$1(_this), "priority", 40);

    _defineProperty$1(_assertThisInitialized$1(_this), "incompatibleTokens", '*');

    return _this;
  }

  _createClass$1(TimestampSecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    }
  }]);

  return TimestampSecondsParser;
}(Parser$1);

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var TimestampMillisecondsParser = /*#__PURE__*/function (_Parser) {
  _inherits(TimestampMillisecondsParser, _Parser);

  var _super = _createSuper(TimestampMillisecondsParser);

  function TimestampMillisecondsParser() {
    var _this;

    _classCallCheck(this, TimestampMillisecondsParser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "priority", 20);

    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", '*');

    return _this;
  }

  _createClass(TimestampMillisecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);

  return TimestampMillisecondsParser;
}(Parser$1);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */

var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse$1(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  requiredArgs(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions = getDefaultOptions();
  var locale$1 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : locale;

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter in longFormatters) {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  var _iterator = _createForOfIteratorHelper(tokens),
      _step;

  try {
    var _loop = function _loop() {
      var token = _step.value;

      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];

      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;

        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function (usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });

          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === '*' && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }

        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale$1.match, subFnOptions);

        if (!parseResult) {
          return {
            v: new Date(NaN)
          };
        }

        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        } // Replace two single quote characters with one single quote character


        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        } // Cut token from string, or, if string doesn't match the token, return Invalid Date


        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: new Date(NaN)
          };
        }
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    } // Check if the remaining input contains something other than whitespace

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyReferenceDate);

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var setter = _step2.value;

      if (!setter.validate(utcDate, subFnOptions)) {
        return new Date(NaN);
      }

      var result = setter.set(utcDate, flags, subFnOptions); // Result is tuple (date, flags)

      if (Array.isArray(result)) {
        utcDate = result[0];
        assign(flags, result[1]); // Result is date
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return utcDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name setDefaultOptions
 * @category Common Helpers
 * @summary Set default options including locale.
 * @pure false
 *
 * @description
 * Sets the defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * @param {Object} newOptions - an object with options.
 * @param {Locale} [newOptions.locale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [newOptions.weekStartsOn] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [newOptions.firstWeekContainsDate] - the day of January, which is always in the first week of the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Set global locale:
 * import { es } from 'date-fns/locale'
 * setDefaultOptions({ locale: es })
 * const result = format(new Date(2014, 8, 2), 'PPPP')
 * //=> 'martes, 2 de septiembre de 2014'
 *
 * @example
 * // Start of the week for 2 September 2014:
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Start of the week for 2 September 2014,
 * // when we set that week starts on Monday by default:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Mon Sep 01 2014 00:00:00
 *
 * @example
 * // Manually set options take priority over default options:
 * setDefaultOptions({ weekStartsOn: 1 })
 * const result = startOfWeek(new Date(2014, 8, 2), { weekStartsOn: 0 })
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Remove the option by setting it to `undefined`:
 * setDefaultOptions({ weekStartsOn: 1 })
 * setDefaultOptions({ weekStartsOn: undefined })
 * const result = startOfWeek(new Date(2014, 8, 2))
 * //=> Sun Aug 31 2014 00:00:00
 */

function setDefaultOptions(newOptions) {
  requiredArgs(1, arguments);
  var result = {};
  var defaultOptions = getDefaultOptions();

  for (var property in defaultOptions) {
    if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
      result[property] = defaultOptions[property];
    }
  }

  for (var _property in newOptions) {
    if (Object.prototype.hasOwnProperty.call(newOptions, _property)) {
      if (newOptions[_property] === undefined) {
        delete result[_property];
      } else {
        result[_property] = newOptions[_property];
      }
    }
  }

  setDefaultOptions$1(result);
}

const n=["zh","ch","sh","z","c","s","b","p","m","f","d","t","n","l","g","k","h","j","q","x","r","y","w",""],h=["j","q","x"],i=["uān","uán","uǎn","uàn","uan","uē","ué","uě","uè","ue","ūn","ún","ǔn","ùn","un","ū","ú","ǔ","ù","u"],g={"uān":"üān","uán":"üán","uǎn":"üǎn","uàn":"üàn",uan:"üan","uē":"üē","ué":"üé","uě":"üě","uè":"üè",ue:"üe","ūn":"ǖn","ún":"ǘn","ǔn":"ǚn","ùn":"ǜn",un:"ün","ū":"ǖ","ú":"ǘ","ǔ":"ǚ","ù":"ǜ",u:"ü"},u=["ia","ian","iang","iao","ie","iu","iong","ua","uai","uan","uang","ue","ui","uo","üan","üe","van","ve"],s={"南宫":"nán gōng","第五":"dì wǔ","万俟":"mò qí","司马":"sī mǎ","上官":"shàng guān","欧阳":"ōu yáng","夏侯":"xià hóu","诸葛":"zhū gě","闻人":"wén rén","东方":"dōng fāng","赫连":"hè lián","皇甫":"huáng fǔ","尉迟":"yù chí","公羊":"gōng yáng","澹台":"tán tái","公冶":"gōng yě","宗政":"zōng zhèng","濮阳":"pú yáng","淳于":"chún yú","单于":"chán yú","太叔":"tài shū","申屠":"shēn tú","公孙":"gōng sūn","仲孙":"zhòng sūn","轩辕":"xuān yuán","令狐":"líng hú","钟离":"zhōng lí","宇文":"yǔ wén","长孙":"zhǎng sūn","慕容":"mù róng","鲜于":"xiān yú","闾丘":"lǘ qiū","司徒":"sī tú","司空":"sī kōng","亓官":"qí guān","司寇":"sī kòu","仉督":"zhǎng dū","子车":"zǐ jū","颛孙":"zhuān sūn","端木":"duān mù","巫马":"wū mǎ","公西":"gōng xī","漆雕":"qī diāo","乐正":"yuè zhèng","壤驷":"rǎng sì","公良":"gōng liáng","拓跋":"tuò bá","夹谷":"jiá gǔ","宰父":"zǎi fǔ","榖梁":"gǔ liáng","段干":"duàn gān","百里":"bǎi lǐ","东郭":"dōng guō","南门":"nán mén","呼延":"hū yán","羊舌":"yáng shé","梁丘":"liáng qiū","左丘":"zuǒ qiū","东门":"dōng mén","西门":"xī mén","赵":"zhào","钱":"qián","孙":"sūn","李":"lǐ","周":"zhōu","吴":"wú","郑":"zhèng","王":"wáng","冯":"féng","陈":"chén","褚":"chǔ","卫":"wèi","蒋":"jiǎng","沈":"shěn","韩":"hán","杨":"yáng","朱":"zhū","秦":"qín","尤":"yóu","许":"xǔ","何":"hé","吕":"lǚ","施":"shī","张":"zhāng","孔":"kǒng","曹":"cáo","严":"yán","华":"huà","金":"jīn","魏":"wèi","陶":"táo","姜":"jiāng","戚":"qī","谢":"xiè","邹":"zōu","喻":"yù","柏":"bǎi","水":"shuǐ","窦":"dòu","章":"zhāng","云":"yún","苏":"sū","潘":"pān","葛":"gě","奚":"xī","范":"fàn","彭":"péng","郎":"láng","鲁":"lǔ","韦":"wéi","昌":"chāng","马":"mǎ","苗":"miáo","凤":"fèng","花":"huā","方":"fāng","俞":"yú","任":"rèn","袁":"yuán","柳":"liǔ","酆":"fēng","鲍":"bào","史":"shǐ","唐":"táng","费":"fèi","廉":"lián","岑":"cén","薛":"xuē","雷":"léi","贺":"hè","倪":"ní","汤":"tāng","滕":"téng","殷":"yīn","罗":"luó","毕":"bì","郝":"hǎo","邬":"wū","安":"ān","常":"cháng","乐":"yuè","于":"yú","时":"shí","傅":"fù","皮":"pí","卞":"biàn","齐":"qí","康":"kāng","伍":"wǔ","余":"yú","元":"yuán","卜":"bǔ","顾":"gù","孟":"mèng","平":"píng","黄":"huáng","和":"hé","穆":"mù","萧":"xiāo","尹":"yǐn","姚":"yáo","邵":"shào","湛":"zhàn","汪":"wāng","祁":"qí","毛":"máo","禹":"yǔ","狄":"dí","米":"mǐ","贝":"bèi","明":"míng","臧":"zāng","计":"jì","伏":"fú","成":"chéng","戴":"dài","谈":"tán","宋":"sòng","茅":"máo","庞":"páng","熊":"xióng","纪":"jì","舒":"shū","屈":"qū","项":"xiàng","祝":"zhù","董":"dǒng","梁":"liáng","杜":"dù","阮":"ruǎn","蓝":"lán","闵":"mǐn","席":"xí","季":"jì","麻":"má","强":"qiáng","贾":"jiǎ","路":"lù","娄":"lóu","危":"wēi","江":"jiāng","童":"tóng","颜":"yán","郭":"guō","梅":"méi","盛":"shèng","林":"lín","刁":"diāo","钟":"zhōng","徐":"xú","邱":"qiū","骆":"luò","高":"gāo","夏":"xià","蔡":"cài","田":"tián","樊":"fán","胡":"hú","凌":"líng","霍":"huò","虞":"yú","万":"wàn","支":"zhī","柯":"kē","昝":"zǎn","管":"guǎn","卢":"lú","莫":"mò","经":"jīng","房":"fáng","裘":"qiú","缪":"miào","干":"gān","解":"xiè","应":"yīng","宗":"zōng","丁":"dīng","宣":"xuān","贲":"bēn","邓":"dèng","郁":"yù","单":"shàn","杭":"háng","洪":"hóng","包":"bāo","诸":"zhū","左":"zuǒ","石":"shí","崔":"cuī","吉":"jí","钮":"niǔ","龚":"gōng","程":"chéng","嵇":"jī","邢":"xíng","滑":"huá","裴":"péi","陆":"lù","荣":"róng","翁":"wēng","荀":"xún","羊":"yáng","於":"yū","惠":"huì","甄":"zhēn","曲":"qū","家":"jiā","封":"fēng","芮":"ruì","羿":"yì","储":"chǔ","靳":"jìn","汲":"jí","邴":"bǐng","糜":"mí","松":"sōng","井":"jǐng","段":"duàn","富":"fù","巫":"wū","乌":"wū","焦":"jiāo","巴":"bā","弓":"gōng","牧":"mù","隗":"kuí","山":"shān","谷":"gǔ","车":"chē","侯":"hóu","宓":"mì","蓬":"péng","全":"quán","郗":"xī","班":"bān","仰":"yǎng","秋":"qiū","仲":"zhòng","伊":"yī","宫":"gōng","宁":"nìng","仇":"qiú","栾":"luán","暴":"bào","甘":"gān","钭":"tǒu","厉":"lì","戎":"róng","祖":"zǔ","武":"wǔ","符":"fú","刘":"liú","景":"jǐng","詹":"zhān","束":"shù","龙":"lóng","叶":"yè","幸":"xìng","司":"sī","韶":"sháo","郜":"gào","黎":"lí","蓟":"jì","薄":"bó","印":"yìn","宿":"sù","白":"bái","怀":"huái","蒲":"pú","邰":"tái","从":"cóng","鄂":"è","索":"suǒ","咸":"xián","籍":"jí","赖":"lài","卓":"zhuó","蔺":"lìn","屠":"tú","蒙":"méng","池":"chí","乔":"qiáo","阴":"yīn","鬱":"yù","胥":"xū","能":"nài","苍":"cāng","双":"shuāng","闻":"wén","莘":"shēn","党":"dǎng","翟":"zhái","谭":"tán","贡":"gòng","劳":"láo","逄":"páng","姬":"jī","申":"shēn","扶":"fú","堵":"dǔ","冉":"rǎn","宰":"zǎi","郦":"lì","雍":"yōng","郤":"xì","璩":"qú","桑":"sāng","桂":"guì","濮":"pú","牛":"niú","寿":"shòu","通":"tōng","边":"biān","扈":"hù","燕":"yān","冀":"jì","郏":"jiá","浦":"pǔ","尚":"shàng","农":"nóng","温":"wēn","别":"bié","庄":"zhuāng","晏":"yàn","柴":"chái","瞿":"qú","阎":"yán","充":"chōng","慕":"mù","连":"lián","茹":"rú","习":"xí","宦":"huàn","艾":"ài","鱼":"yú","容":"róng","向":"xiàng","古":"gǔ","易":"yì","慎":"shèn","戈":"gē","廖":"liào","庾":"yǔ","终":"zhōng","暨":"jì","居":"jū","衡":"héng","步":"bù","都":"dū","耿":"gěng","满":"mǎn","弘":"hóng","匡":"kuāng","国":"guó","文":"wén","寇":"kòu","广":"guǎng","禄":"lù","阙":"quē","东":"dōng","欧":"ōu","殳":"shū","沃":"wò","利":"lì","蔚":"wèi","越":"yuè","夔":"kuí","隆":"lóng","师":"shī","巩":"gǒng","厍":"shè","聂":"niè","晁":"cháo","勾":"gōu","敖":"áo","融":"róng","冷":"lěng","訾":"zǐ","辛":"xīn","阚":"kàn","那":"nā","简":"jiǎn","饶":"ráo","空":"kōng","曾":"zēng","母":"mǔ","沙":"shā","乜":"niè","养":"yǎng","鞠":"jū","须":"xū","丰":"fēng","巢":"cháo","关":"guān","蒯":"kuǎi","相":"xiàng","查":"zhā","后":"hòu","荆":"jīng","红":"hóng","游":"yóu","竺":"zhú","权":"quán","逯":"lù","盖":"gài","益":"yì","桓":"huán","公":"gōng","牟":"móu","哈":"hǎ","言":"yán","福":"fú"},z=Object.keys(s).map((n=>({zh:n,pinyin:s[n],priority:99+n.length,length:n.length}))),o={"líng":[12295,20278,20940,21026,22265,22397,22796,22984,23112,23361,23738,24446,25493,26148,26382,26563,26818,27386,27422,27872,28137,28586,28789,29167,29223,29393,29618,29708,29940,30346,30769,31102,31202,31451,31533,32055,32190,32491,32656,32666,32718,32838,33330,33491,33777,34020,34054,34166,34505,34897,35052,35397,36297,36584,36632,37187,37309,37428,37634,38083,38301,38517,38646,38666,38679,38683,38685,38728,39382,39807,39914,40110,40210,40496,40567,40610,40801,40802,40836,40855],"yī":[19968,20042,20234,20381,21307,21530,21695,22123,22769,22777,22785,23259,23300,24332,25558,25742,27321,27593,27938,28175,28458,29823,30057,31054,31125,31270,32324,34524,34916,35689,36791,37116,37291,37541,38129,40406,40549,40671,40691],"dīng zhēng":[19969],"kǎo qiǎo yú":[19970],"qī":[19971,20507,20699,20932,22017,22660,23096,24765,24956,24957,25114,25471,26578,26724,26748,26866,27071,27450,27791,28114,28422,32042,32192,33803,35076,35526,36809,37098,37850,38667,39756,40328],"shàng":[19972,23577,23578,24678,32212,32497],"xià":[19973,19979,20068,22327,22799,22803,25047,26810,30108,30577,32581,37820,37868],"hǎn":[19974,21898,28011,32597,35907],"wàn mò":[19975],"zhàng":[19976,20183,22663,23938,24080,24115,24155,25177,26454,28081,30190,30252,30260,30613,31872,32960,33081,36076,36134,38556],"sān":[19977,21377,21441,24334,27637,27638,27647,29337,39702],"shàng shǎng shang":[19978],"qí jī":[19980,20854,22855],"bù fǒu":[19981],"yǔ yù yú":[19982],"miǎn":[19983,20589,20813,20885,21193,21204,21909,23081,24848,27717,27796,28238,30540,32236,32517,33148,33858,38758,39864],"gài":[19984,20066,21251,21252,25124,27010,27113,27114,28297,28433,29890,33890,37411,38041],"chǒu":[19985,19986,20404,21532,26493,30597,30657,37276,39767],"zhuān":[19987,21440,23269,23554,23560,29820,29966,30742,30935,30938,34788,35567,37151,38995,39067,40004],"qiě jū":[19988],"pī":[19989,20243,20286,22140,22383,23727,25013,25209,25259,28811,29385,29395,30738,30919,30996,30997,31195,31200,32794,35966,37043,37402,37471,37524,37635,37645,38713,39379,39660,39806],"shì":[19990,19991,20106,20107,20181,20365,20895,21183,21218,21323,21609,21980,22124,22763,22893,23317,23460,24066,24335,24337,24338,24640,24643,25146,25325,25555,26159,26160,26558,26623,26683,28584,28882,29046,30466,30478,30497,30551,31034,31035,31598,31789,33296,33299,35179,35222,35270,35298,35430,35475,35553,35610,35797,35877,36016,36147,36606,36732,36893,36990,37320,37322,37323,37424,37443,37501,38088,39166,39193,39197,39280,39960],"qiū":[19992,2e4,22389,23197,24664,24695,27e3,31179,31180,31312,31693,32231,33833,34322,34479,34677,34775,34852,36261,37041,38822,38823,39948,39949,40133,40342,40537,40861],"bǐng":[19993,23643,24626,25254,26142,26170,26564,26821,28851,31104,31177,31263,33514,34499,37044,37429,38467,38790,39173,39200,39292],"yè":[19994,20145,20727,22711,22812,23978,23979,25268,25433,25819,25834,25835,26196,26308,26309,26327,26355,26357,26556,26557,26989,27906,28082,28594,28904,29121,29207,29837,30371,30641,30648,30991,33099,33865,35585,35858,37050,37172,37745,37943,38757,38760,38913,39029,39203,39233,39308,39516,40314,40456],"cóng":[19995,20174,21474,23107,23406,24467,24468,24470,24752,27191,27401,28121,28743,29212,29742,34242,35508,36072,36073,37661],"dōng":[19996,20530,20908,21658,22508,23741,23852,24474,26168,26481,27681,27693,28087,31511,33523,33732,34624,39831,39903,40327,40363,40491,40725],"sī":[19997,20460,20952,21422,21496,21661,22070,22109,23204,24285,24662,25749,26031,26962,27840,28556,29133,31127,31136,31169,31993,32114,32230,32415,32524,32627,34156,34386,34547,34596,34692,34774,34804,37488,37551,37750,37889,38198,39096,39124,39462,40421,40502,40758],"chéng":[19998,21576,22478,22485,22552,22605,22614,23468,23800,24809,25074,25104,25215,25392,25473,25576,26536,26838,27225,27289,27910,28311,28546,29685,29689,30075,31243,31386,31596,32126,33069,33663,35488,35802,37077,37234,37614,38102,39468,39886],"diū":[19999,20002,37545,38117],"liǎng":[20001,20004,20841,21793,21858,25498,32201,33084,34621,35058,39753,39758],"yǒu":[20003,21347,21451,26756,28277,29270,31113,32657,32840,33475,33696,34575,37193,37546,38101,40669],"yán":[20005,21427,21873,21926,22196,22633,22747,22759,22925,23032,23083,23086,23721,23890,23891,24012,24022,24023,24310,25541,26134,26956,27280,27369,27413,27839,28814,28815,29439,29698,30416,30878,31605,31799,33690,34053,34404,34578,35328,35329,35374,35453,35744,37076,38278,38331,38379,38414,38991,38996,39068,40573,40611],"bìng":[20006,20341,20482,20641,22442,25682,26660,30149,31369,31453,35457,38736,39849],"sàng sāng":[20007],"gǔn":[20008,24771,28378,28414,30937,32196,32498,34008,34057,34926,34974,36645,36746,39820,39872,40103],"jiū":[20009,21244,21886,25578,25579,26427,31350,31998,32416,33819,36211,38404,39695,39726,40169,40480],"gè gě":[20010,20491,21508],"yā":[20011,22311,23410,24216,25276,26514,26720,26895,37647,37914,40201,40232,40310,40486,40493],"pán":[20012,23227,24139,27075,27904,28682,29247,30424,30436,30928,32271,33968,34784,36434,36451,37788,38838],"zhōng zhòng":[20013],"jǐ":[20014,22912,24049,25119,25380,25486,25760,25824,27254,27890,29361,33034,34414,34787,39778,40062,40578],"jiè":[20015,20171,20511,21814,22586,23622,23626,23701,24206,24483,25106,26960,29335,29600,29758,30028,30029,30117,30734,34471,34550,34936,35119,35489,35819,37765,39601,39786],"fēng":[20016,20217,20561,20732,20968,20972,20974,22950,23543,23553,23791,23792,23862,26539,26963,27282,27811,27816,28194,28739,28925,29326,29478,29714,30127,30219,30461,30748,30904,31688,34356,34562,34861,35920,37175,37190,37586,37821,37856,38155,38715,38730,39116,40631],"guàn kuàng":[20017],"chuàn":[20018,27724,29588,36055,37351,38031],"chǎn":[20019,20135,20865,21111,22213,23932,26101,27984,28411,28763,29986,29987,31749,33927,34118,35522,35650,35719,35844,37855,38130,38323,38369,38416,39587],"lín":[20020,20903,22755,23818,23961,26036,26237,26301,26519,28542,28726,29136,29747,29848,30645,30852,30967,31910,31932,32343,32759,33256,36692,36762,36980,37051,37168,37883,38462,38563,38678,39502,40023,40158,40592,40607],"zhuó":[20021,21125,21331,21828,22324,22960,23098,25775,25798,25826,26027,26030,26033,26034,26037,26219,26899,27978,27998,28609,28796,28917,29752,30842,31130,31393,31831,31857,32620,33537,34839,34879,35521,35537,35638,35836,37196,37938,38255,40299,40415],"zhǔ":[20022,20027,21167,22065,22225,23444,24126,25284,28186,28624,29009,29038,29149,30633,30682,32604,35421,38524,40448,40584],"bā":[20023,20168,20843,21485,21749,22847,23708,24052,25420,26419,29584,30116,31494,31889,32659,33453,34438,35933,37343],"wán":[20024,21011,23436,23695,25231,25430,27725,28919,29609,29715,31490,32008,32424,32747,33412,36006,38929,39037],"dān":[20025,21231,21296,21336,22921,23173,27546,27563,29972,30472,30723,31658,31774,32828,32829,32835,32888,35101,35148,36525,37112,37170,37206,38933],"wèi wéi":[20026],"jǐng dǎn":[20028],"lì lí":[20029],"jǔ":[20030,24326,25369,25831,26887,27017,27032,27384,27397,30697,31589,32869,33289,33682,33951,35191,36413,40799,40835],"piě":[20031,33508,37893],"fú":[20032,20239,20440,20971,21020,21264,21640,21753,22424,23386,23722,24063,24087,24133,24158,24343,24447,24619,25206,26603,26687,26740,27679,27885,28014,28074,28563,28837,29624,30006,30025,30273,31059,31119,31274,31526,31641,32049,32060,32101,32141,32450,32459,32600,32614,32711,33344,33433,33443,33531,33536,33583,33748,33869,34393,34472,34569,34656,34970,34993,35142,35173,35560,35943,36414,36667,36752,37083,37464,37468,38861,38888,39083,39668,39812,39858,40167,40172,40212,40297,40699],"yí jí":[20033],"yì":[20034,20041,20100,20134,20159,20231,20287,20350,20427,20740,20863,21e3,21139,21166,21210,21225,21255,21587,21613,21625,21768,22216,22299,22340,22460,22520,22869,23253,23313,23537,23673,23748,23975,24095,24096,24134,24281,24322,24328,24331,24441,24518,24584,24639,24722,24847,25014,25036,25087,25233,25401,25953,26131,26233,26304,26318,26457,26509,26861,27023,27128,27277,27485,27540,27562,27577,27589,27970,28005,28019,28249,28322,28521,28602,28727,28808,28978,29088,29092,29116,29146,29153,29169,29512,29620,30064,30123,30188,30231,30238,30257,30292,30410,30614,31315,31465,31698,32266,32374,32377,32462,32546,32681,32703,32714,32716,32755,32764,32820,32900,32906,33161,33222,33367,33402,33413,33477,33823,34042,34191,34265,34269,34329,34377,34612,34720,34922,34979,35028,35035,35129,35196,35378,35379,35405,35427,35516,35695,35696,35739,35758,35793,35811,35850,35929,35931,35959,35990,36096,36295,36726,36920,37009,37139,37303,37364,37408,37808,37951,38226,38257,38435,38591,38700,39248,39365,39515,39551,39598,39848,40322,40323,40333,40385,40394,40423,40446,40451,40541,40546,40659,40824],"nǎi":[20035,20535,22902,23341,24316,27670,30099,33407,36858,37346],"wǔ":[20036,20116,20213,20237,20398,20533,20763,21320,21838,22953,23084,23285,24209,24289,24548,24579,25006,25664,27494,28501,29075,29310,29597,29687,29798,29970,30868,33310,36492,36821,36892,38490,40289,40521],"jiǔ":[20037,20038,20061,20067,22906,26470,27747,28792,29590,32036,33295,37202,38265,38893,38894],"tuō zhé":[20039,26452,39346],"me mó ma yāo":[20040],"zhī":[20043,20481,21358,24053,25624,25903,26624,26772,26917,27056,27713,27868,30135,31063,31084,31187,31257,32149,32930,32977,32989,33026,33437,34357,34584,34940,38587,40183,40242,40709],"wū wù":[20044],"zhà":[20045,21668,23473,25662,27048,28320,30148,34481,35408,35784,37281,38661],"hū":[20046,20079,21282,21291,21628,21823,22033,22400,23523,24160,24573,24794,26130,27473,27864,28148,28409,28864,33528,34381,34390,35644,36580,36727,38608],"fá":[20047,20240,20640,22394,22433,22690,22978,26672,27980,30594,31529,31567,32602,32624,32632,34245,38309,38400],"lè yuè yào lào":[20048,27138],"yín":[20049,21535,22102,22170,22273,22432,22820,23148,23493,23806,23839,23855,27309,27557,27903,28139,28379,28878,29374,29434,29836,30797,30866,33654,34089,35348,35354,35361,35518,37150,37405,37504,38134,38698,40419,40806],"pīng":[20050,20444,23049,28036,30009,30767,32864,33397,38953],"pāng":[20051,28354,33006,33174,38641,38710],"qiáo":[20052,20392,20689,23286,24980,26725,27095,27189,27211,27381,29342,30631,30810,30980,33613,33630,34126,34286,35673,36267,37896,38802,38845,39014],"hǔ":[20053,29733,33792,34382,34397,37695,39921],"guāi":[20054],"chéng shèng":[20055,20056,23053],"yǐ":[20057,20059,20197,20506,20591,23327,23866,24050,24225,25158,25914,25980,26065,26070,27301,30691,30994,31510,33315,33380,33505,33506,34433,34712,34811,35071,36390,36642,36697,36888,37199,37332,37400,37487,38023,38999,40166,40814],"háo yǐ":[20058],"niè miē":[20060],"qǐ":[20062,20225,21551,21784,21843,21844,21855,23117,23674,26462,26856,29592,30400,32186,32494,33425,35564,36215,37012,38361],"yě":[20063,20918,22050,22492,22724,28444,37326],"xí":[20064,21946,23219,23949,24109,26938,27268,28445,32722,33990,34989,35186,35233,35275,35637,36248,37067,37812,38576,38699,39105,39473,39485,39528,39996,40155],"xiāng":[20065,21410,24258,24512,27007,27392,28248,29910,31269,31665,32215,32515,33207,33431,33835,33881,34188,35140,37111,37129,37130,37141,38002,38262,39321,39524,39591,40028,40600],"shū":[20070,20495,20496,20789,21460,23005,23575,25234,25491,25669,25860,26360,26530,26803,27166,27530,27571,27641,27642,28113,28717,28930,30094,30095,32019,32128,32446,33298,33789,34092,36360,36567,36664,36755,37123,38478,39835,40296],"dǒu":[20071,25238,26515,34474,37380,38439,38497],"shǐ":[20072,20351,20824,21490,22987,23465,23630,27009,30690,31542,35925,37442,39387,39542],"jī":[20073,20703,20987,21001,21007,21086,21501,21799,21918,21976,22064,22334,22522,22716,23020,23632,23878,23879,25731,25802,26398,26426,26501,27181,27231,27588,28608,29316,29585,29859,30072,30079,30314,30710,30959,31215,31309,31492,31571,31637,31754,32193,32641,32647,32648,32813,32908,33448,34368,35209,35210,35663,35684,35749,36075,36087,36173,36347,36369,36491,36536,37512,37668,37910,37959,37977,38574,38622,38847,38898,39138,39249,39269,39765,40174,40335,40378,40388,40452,40481,40782,40783,40785],"náng":[20074,22178,27420,34864,39266],"jiā":[20075,20339,20642,21152,22025,25272,26551,26780,27616,27847,27971,28025,29324,29491,29640,30146,31539,31960,32798,33141,33901,34952,35949,35985,36303,36838,37483,37813,38227,40208,40602],"jù":[20076,20520,20534,20855,21095,21127,21230,22503,22526,22729,22998,23654,23656,23712,24040,24042,24583,24807,24883,25029,25084,25298,25312,26139,27499,27952,28605,28844,28901,29323,31212,31405,31414,31796,31892,32799,32858,34401,34487,35406,35765,35942,36317,36382,36486,36989,37037,37301,37445,37947,38044,39094,39123,39375,39828],"shí":[20077,21313,22488,22610,23036,23454,23455,23508,23526,23765,23925,26102,26105,26178,27055,28252,28321,28859,31055,31437,34432,34645,36795,36936,37456,39136,39267,39830,39971,40101,40747,40749],"mǎo":[20078,20871,21359,23745,25148,26164,27862,31543,34025,37466,38086],"mǎi":[20080,22058,33644,34130,36023,40438],"luàn":[20081,20098,37344],"rǔ":[20083,25833,27741,32919,36785,37135],"xué":[20084,23398,23416,23747,23976,25992,27894,28585,29154,31348,33555,34965,36357,40445,40500],"yǎn":[20085,20456,20547,20796,20822,20823,21411,21428,22110,23373,23875,24024,24026,24327,24861,25133,25162,25217,25513,25564,26350,26940,27327,27783,28215,28436,29744,29975,30524,32616,33810,34648,34893,35095,36541,36931,37118,38546,39017,39751,39768,39947,40352,40673,40676,40684,40685,40694,40756,40761,40820,40849],"fǔ":[20086,20428,20443,20463,24220,24355,25242,25290,25771,26023,26920,28367,28964,29995,30425,31776,33104,33105,34565,36628,36741,37081,37340,37345,38429,38955,39732,40700],"shā":[20087,21798,26432,26732,27578,27630,29440,30183,30722,30832,32023,32378,32433,34097,35039,37801,38121,38327,39679,39782,39882,39883,40104],"nǎ":[20088,38635],"qián":[20089,20097,20209,20546,21069,22680,23178,23698,25297,25518,27049,27244,27500,28507,28508,28659,28746,31645,33893,34388,36577,37392,37463,37549,37666,37766,38052,38065,38067,38764,39450,39453,39980,40660,40666],"suǒ":[20090,21794,21993,25152,26267,28305,28345,29712,29713,29795,32034,35112,37782,37819,37825,38145],"yú":[20091,20110,20112,20227,20313,22563,22572,22948,23067,23087,23089,23337,23859,23886,23899,24858,25205,25540,26079,26977,26992,27014,27428,27464,27487,27510,28180,28189,28257,28417,28574,29263,29427,29591,29593,29788,29877,30402,30574,31404,31485,31813,32685,33140,33278,33281,33286,33349,33584,33838,33848,34125,34331,34398,34422,34643,34744,34919,35093,35238,35278,35547,35619,35840,36400,36671,36701,36926,37016,37201,37725,38533,38611,38633,39192,39296,39455,39596,39619,39770,39779,39869,39922,39941,40060,40416,40454,40821],"zhù":[20092,20267,20295,20303,22398,22712,22772,23872,25280,26492,26609,27174,27574,27880,28855,30128,30493,31069,31081,31450,31599,31672,31723,31767,32053,32056,32443,32668,32741,33486,33671,34496,35387,36015,36142,36307,36596,37458,37619,37956,38136,39349,39376,39547],"zhě":[20093,32773,35126,35189,36205,36407,37754,38167],"qián gān":[20094],"zhì luàn":[20095],"guī":[20096,22317,22955,23215,23266,23296,24112,24402,25707,26909,27131,27132,27383,27512,29674,29808,29853,29900,30344,30625,30789,33573,34348,35215,35268,37053,37068,38312,38394,39465,39734,39737],"lǐn lìn":[20099],"jué":[20101,20915,21012,21122,21303,21413,22090,23378,23379,23835,23851,23973,24399,24992,25008,25092,25225,25367,25496,25899,26743,27227,27228,27438,27666,27770,28749,28979,29094,29201,29236,29237,29527,29571,29606,29608,29647,29812,30234,30669,30689,30724,32085,32118,32477,33220,33461,34141,34152,34419,34792,34793,35286,35310,35324,35363,35662,35776,35890,35996,36221,36233,36471,36521,37388,37901,37917,38017,38242,40194,40195,40418],"le liǎo":[20102],"gè mā":[20103],"yǔ yú":[20104,25049],"zhēng":[20105,20290,20967,22979,23196,23781,23837,23842,24449,24496,28833,28893,29229,29424,29465,30309,30480,30529,30556,31581,31631,31708,32839,33024,33976,36397,37478,37658,37875,39687],"èr":[20108,21045,21665,24333,24336,27186,35456,36014,36019,36144,39670],"chù":[20109,20631,20746,24629,25015,25616,26038,27484,29695,29729,30679,31436,32064,32460,33221,35302,35320,35926,37136,38310,40668],"kuī":[20111,21042,23743,24011,30420,31397,31418,32871,34407,38362,39005],"yún":[20113,20253,21243,21248,22249,22936,24874,25251,26112,27218,27780,28066,28339,28560,29065,30023,31184,31612,31700,32028,32284,32429,32792,33464,33975,34131,37095,37142,37574,38642],"hù":[20114,20913,21952,22171,23135,23277,23278,23733,24077,24342,24601,25142,25143,25144,25149,25160,25252,26120,27124,27789,27818,28396,29097,29920,31068,31503,31748,31888,32148,34096,35703,35952,37152,37721,38912,40047,40160,40184,40460,40561],"qí":[20115,21080,22524,23696,23699,23822,23900,24877,25489,25993,25994,26050,26071,26826,26827,27313,27328,27495,28103,28637,29449,29570,29734,29738,29826,30054,30119,30849,30869,31041,31048,31098,31141,31442,31791,31793,31823,31928,32165,32166,32949,33040,33229,33385,33450,33793,33813,34162,34244,34308,34449,34458,34548,34589,34590,34727,34832,35072,36573,37183,37358,37665,38172,38509,38926,39040,39438,39439,39481,39568,39569,39696,39743,39893,39981,40111,40141,40312,40320,40594,40609],"jǐng":[20117,20742,21037,21060,22355,23441,24156,25004,26299,27532,27755,27756,28555,29828,29855,29861,31357,32956,34812,35686,38449,38938,38968],"sì":[20118,20288,20385,20777,20821,21987,22235,22994,23088,23392,23546,24051,26614,27065,27740,27863,27876,27917,27936,28056,28675,29293,31040,31145,31458,31525,32796,32898,32902,34172,35223,35972,37362,37430,37435,39140,39164,39282,39391,39427,39543],"suì":[20119,23320,23681,23895,26078,27286,27506,27507,28603,29035,29159,29874,30741,30862,31071,31149,31298,31319,31327,32320,32336,32376,35162,35510,35682,35847,36069,36995,37894,37929,38567,38882],"gèn":[20120,20121,25583,25604,33563],"yà":[20122,20124,20473,20916,21148,22292,22304,22497,23045,23149,25568,27689,27692,29373,30737,31247,32848,35198,35200,35357,35766,36711,36819,40830],"xiē suò":[20123],"qí zhāi":[20125,40778],"yā yà":[20126,21387,22445,22739,38100],"jí qì":[20127,28943],"tóu":[20128,25237,38957,39600],"wáng wú":[20129],"kàng háng gāng":[20130],"dà":[20131,30484],"jiāo":[20132,20716,23047,23308,23783,23957,23971,24973,26898,27975,28550,28966,30977,31322,31781,33014,33184,33202,33581,33582,34121,34400,34527,34797,36324,36679,37066,37902,39509,39556,39851,40091,40257,40422,40430,40554],"hài":[20133,21968,23475,27686,39168,39258,39405,39412,39559],"hēng pēng":[20136],"mǔ":[20137,22982,23764,25287,27597,29281,29299,30018,30022,30034,30045,30046,30062,30762,32991,36359,37479],ye:[20138],"xiǎng":[20139,20143,21709,24819,26193,34435,34817,38911,39144,39177,39255,39287,39837,39895,40054,40094],"jīng":[20140,20144,20834,22357,22361,23131,24778,26060,26061,26230,27256,27902,28039,29444,30555,31188,31241,31923,31934,32076,32147,32161,32857,33096,33550,33606,33610,33729,33871,39514,39912,40120,40321,40324,40598,40608,40753],"tíng":[20141,20572,23159,23881,24237,24311,26975,27059,31603,32868,33691,33910,34579,34639,35562,37010,38662,40750],"liàng":[20142,21928,24738,26238,28280,35538,35845,36620,36635,36742,37700],"qīn qìng":[20146,35242],"bó":[20147,20194,20412,20720,21338,24091,24893,25066,25388,25615,27394,28001,28159,28196,29055,29268,29403,29917,31028,31201,31636,31769,31978,32969,33046,33162,33334,33354,33825,33895,34991,35151,35182,35592,36387,37091,37432,37457,37581,37787,37998,38073,38082,38216,39226,39310,39323,39326,39361,39406,39539,39622,40275,40513],"yòu":[20148,20305,20326,20369,21448,21491,21706,21760,22271,23031,23461,23775,24188,29398,31056,34484,35480,35825,35969,36854,37229,37321,40748],"xiè":[20149,20275,20574,20592,20673,21352,21368,22119,22638,22801,23199,23633,23655,24296,24482,25032,26284,26800,27021,27053,27899,27945,28203,28581,28681,28707,28794,28839,28840,29166,29205,29548,31044,31164,31951,32050,32079,32108,32370,32392,32449,32567,34210,34212,34809,34831,35081,35131,35613,35874,36510,36994,38782,38896,40770,40792,40795,40805],"dǎn dàn":[20150,39358],"lián":[20151,21126,21298,21299,22009,22098,22849,22889,23294,24088,24265,24604,24976,28063,28451,28610,28627,28718,29073,29163,31806,31842,31848,32314,32756,32852,32872,32875,32878,32879,33217,33714,34030,34197,34698,34826,35042,35123,35229,35632,36453,36830,36899,37772,37934,38256,39697,39985,40098],"duǒ":[20152,21722,22194,22517,23836,26421,26422,32158,32525,36243,36529,36530,36547],"wěi mén":[20153,26006],"rén":[20154,20155,20161,22764,24520,24526,26418,31170,33442,39772,40256],"jí":[20156,20157,20235,20342,20590,21337,21363,21373,21450,21469,21513,22578,22601,23006,23241,23692,23924,23983,24438,24547,24613,24881,25122,25572,26497,26840,26987,26997,27081,27293,27547,27762,28242,28503,30142,30240,30349,31496,31679,31821,32026,32423,33164,33381,33978,34112,34170,34637,34703,35147,35289,35899,36374,36432,36516,36655,36698,36753,37062,37537,37715,37878,38598,38631,38709,40545],"wáng":[20158,20220,20838,33699,34463],"shén shí":[20160],"lè":[20162,21499,24519,27707,27856,29583,30771,31765,33403,38430,38903,39182,39987,40051,40147],"dīng":[20163,21486,24068,29582,30100,30447,32821,34416,38762],"zè":[20164,23857,24194,25425,26115,26135,27716],"jǐn jìn":[20165,20677,23268],"pú pū":[20166],"chóu qiú":[20167],"zhǎng":[20169,24165,25484,30979],"jīn":[20170,22587,24062,24781,26020,27941,29650,29755,29857,30747,31563,33621,34943,35167,35284,37329,37330,37375,38021,40566,40645],"bīng":[20172,20178,20853,20907,20912,25508,27703,37618],"réng":[20173,31037,33471,36792,38526],"fó":[20175,22386,26811],"jīn sǎn":[20176],"lún":[20177,20262,20374,20523,22261,22279,23144,23832,23833,26822,27814,28138,30958,33088,33749,34598,36378,36650,36718,37632,38511,39913],"cāng":[20179,20218,20489,20948,23906,27815,28356,28664,29514,33329,33369,33485,33980,34725,40487],"zǎi zǐ zī":[20180],"tā":[20182,22604,23427,27033,28347,29280,31042,35103,36287,36962,38375],"fù":[20184,20585,20613,20904,21103,21648,22399,22797,22919,23142,23181,23316,23500,24489,26929,31060,31139,31438,32238,32283,32538,33145,33839,34151,34489,34519,34652,34670,34973,35079,35204,35206,35331,35394,35747,36e3,36070,36091,36127,36171,36185,36212,36665,37713,37730,38428,38468,39333,39385,39544,39826,39954,40075,40134],"xiān":[20185,20186,20321,20682,20722,20808,22037,22910,23667,24303,24570,25016,25472,26297,26484,27673,29655,31046,31176,31868,32330,32398,32406,33518,35132,35187,36345,36462,36506,37232,37697,38184,38895,38897,39334,40059,40369],"tuō chà duó":[20187],"hóng":[20188,21552,22444,22917,23042,23439,23446,24344,24395,27759,27859,27946,28004,28209,28482,29586,29596,30804,31441,31460,31690,31904,32024,32045,32139,32430,32707,32733,32830,33520,33645,33874,33875,35897,35900,37404,37495,37584,38286,38387,38672,38687,38787,39775,40251,40511,40649,40652],"tóng":[20189,20319,21699,23746,23773,24221,24420,26189,26312,26704,27651,28021,28540,29341,29534,30510,30643,30780,31217,31461,31905,33191,33596,34450,35447,36200,37230,37462,37493,37509,38108,39175,39846,40086],"rèn":[20190,20205,20995,20996,22922,23001,23675,23683,25192,29283,31053,32009,32029,32077,32427,32436,32917,33101,34941,34997,35346,35469,35748,35761,36564,36715,37395,38765,38769,38860,38887,39146,39169,39274],"qiān":[20191,20325,20681,21315,22322,22903,23407,23693,24749,24838,24947,25190,25322,25652,25729,25872,25873,25875,26436,27343,27736,27751,29301,29309,31439,31614,31805,31830,31844,31873,33418,33598,34440,35120,35536,35609,35878,35896,36801,36983,37370,37382,37467,37874,38030,38433,38854,38981,39467,39582,39708,39709,40302,40528],"gǎn hàn":[20192],"yì gē":[20193],"dài":[20195,20386,21447,22408,22509,23729,24082,24102,24111,24118,24279,24608,25140,26307,26571,27526,28731,29619,29767,29977,31780,32063,32255,32464,33372,34675,34955,35190,36003,36151,36443,36561,36570,36585,36714,36840,38708,38726,40207,40667,40689],"lìng líng lǐng":[20196],"chào":[20198,32790,35288],"cháng zhǎng":[20199,20815,38263,38271],"sā":[20200],"cháng":[20201,20607,20767,22039,22160,23270,23581,24120,24476,29818,29946,29982,32928,33144,33171,33484,33799,38264,40040,40127],"yí":[20202,20359,20736,20893,21276,21670,22319,22839,23016,23440,23452,23463,23538,23763,23980,23991,24056,24411,24412,24413,24414,24609,24670,25157,26246,26648,26924,26936,27778,27935,29098,29941,30157,31227,31747,31822,32672,33008,33811,34534,34708,35322,35643,36029,36155,36320,36859,36986,37844,38921,38948,38949,38986,39056,39284,39847,40250],"mù":[20203,20969,21215,22675,24149,24153,24916,24917,26286,26287,26408,26968,27619,27792,28817,29287,29383,30446,30566,31302,33362,33500,33711,34462,37484,38076,38638,38658],"men mén":[20204],"fǎn":[20206,21453,27214,36820],"chào miǎo":[20207],"yǎng áng":[20208],"zhòng":[20210,20247,22585,22933,23185,29382,30526,31052,31575,33597,34459,34886,34934,35557],"pǐ pí":[20211],"wò":[20212,20563,21351,23177,24132,25569,26947,27779,28197,28643,29889,30595,30826,32927,33115,33253,40823,40844],"jiàn":[20214,20468,20581,20717,21073,21091,21105,21133,21134,21138,21140,22713,23499,24314,24484,25846,26068,26967,27645,27914,28071,28567,29294,29652,30647,30965,30976,31661,31947,32349,33137,33270,33328,33382,33616,34214,35256,35539,35563,35675,35855,36046,36068,36145,36253,36341,36368,36410,36702,37492,37747,37749,37937,37969,37970,37996,38003,38190,38291,39198,39279],"jià jiè jie":[20215],"yǎo fó":[20216],"rèn rén":[20219],"fèn bīn":[20221],"dī":[20222,20302,21874,22494,22564,23739,24445,27136,28404,30974,31210,32669,34971,36230,38532,38830],"fǎng":[20223,20515,26058,26121,26136,29932,30470,32033,32442,33323,35370,35775,39651,40365],"zhōng":[20224,21027,22928,24146,24440,24544,26570,27767,27848,28802,30405,31846,32066,32456,33327,34080,34585,34724,34749,34931,34935,36465,37409,37758,37912,38047,38202,40228,40744],"pèi":[20226,20329,23029,24084,26046,26054,27803,28031,29678,34012,36705,36756,37197,38664,39351],"diào":[20228,21514,24340,25481,30265,30404,31374,31413,31464,35339,37347,37407,37553,37629,37955,38035,38110,38655,39777],"dùn":[20229,28513,28822,29129,30462,30744,30903,36402,36871,36929,36975,37389,38045],"wěn":[20230,21006,21563,21573,25222,26749,31283,31311,31337,32010,32947,33047],"xǐn":[20232],"kàng":[20233,21279,22245,25239,28821,37415,38058],"ài":[20236,20734,22631,22738,23250,23329,24859,25043,26279,26326,29233,29815,29862,30375,30649,30777,30795,30861,31001,34182,35706,36089,37952,38552,38729,39218,39332,40043,40241],"jì qí":[20238,34234],"xiū xǔ":[20241],"jìn yín":[20242],"dǎn":[20244,21008,25762,29612,29933,32030,32966,33213,34932,36071,36181,40661],"fū":[20245,21579,23056,23413,23555,24612,25071,25975,26057,29598,30726,31235,31583,31952,32146,32932,33178,33602,33652,34925,36282,36311,37022,37148,37212,37383,40617,40620,40625,40632],"tǎng":[20246,20645,20795,22507,25091,26349,29219,30680,36538,37810,38018,38219],"yōu":[20248,20778,21606,22168,23795,24189,24551,24736,24962,25912,27340,28410,28672,32395,32682,32816,36876,37182,40576],"huǒ":[20249,22821,28779,29047,37033,37413,38060],"huì kuài":[20250,26371,27981,29871],"yǔ":[20251,20417,20451,20554,20660,21292,22131,22276,22281,23431,23513,23679,23996,24254,25383,25940,26014,26944,29760,30224,31076,31161,31333,31411,32701,33287,33837,35984,37125,38952,40588,40812,40841],"cuì":[20252,21851,24560,24756,27635,28140,28960,30121,30209,31425,31883,31929,32035,32183,32710,32736,33027,33030,33082,33196,33205,33230,33795,35146,38983],"sǎn":[20254,20632,31972,32342,39242,39315],"wěi":[20255,20266,20553,20605,20702,20784,23059,23530,23639,23843,23945,24491,24839,25444,26256,26806,27943,27992,28200,28828,29010,29477,29614,29771,30207,32239,32428,33138,33353,33435,33479,33649,33806,33894,33933,34111,34620,35529,35839,36371,37729,38865,38873,38881,38890,38944,39097,39593,39594,39595,39850,40084],"chuán zhuàn":[20256,20659],"chē jū":[20257,20453,36554,36710],"yá":[20258,21393,21395,22544,23688,23829,23830,28079,28420,29273,29601,29706,30554,31500,33469,34460,34905,40790],"qiàn":[20259,20436,20521,20761,21003,22733,23345,24723,26824,26912,27111,27424,27465,30360,31695,31711,32308,33441,33960,34099,36644],"shāng":[20260,20663,21830,22674,24943,27527,27556,28403,28449,29109,34063,34730,35294,35316,35626,39738],"chāng":[20261,20480,23100,26124,26905,28112,29462,29737,33750,35054,37673,38176,38326,38410,39911,40115,40730],"chen cāng":[20263],"xùn":[20264,20378,21314,22080,24058,24061,24455,24891,27529,27582,27739,28512,29413,34120,35338,35347,35353,35757,35759,36805,36863,36874,36956,37954,39016,39348,39535],"xìn":[20265,22239,23390,33066,33291,34885,35371,37313,38432,38998],"chǐ":[20268,20360,21366,21498,21582,22417,24677,27503,32827,32916,32995,34439,35053,35115,35913,37497,40786,40831],"xián xuán":[20269],"nú nǔ":[20270],"bǎi bó":[20271],"gū gù":[20272],"nǐ":[20273,20320,20766,23412,25311,25836,26062,26226,29396,33512,34239,38572],"nì ní":[20274],"bàn":[20276,21150,21322,22981,24593,25198,29923,31194,32070,32458,36774,37473,38781],"xù":[20277,20368,21206,21207,21369,21465,22463,22779,23167,24207,24676,25933,25944,26093,26155,26370,27090,27440,27528,27775,27776,27947,28294,28469,28490,28869,28924,29030,29533,29676,30434,30593,31288,32110,32154,32210,32214,32396,32490,32493,32851,32863,33988,34266,35385,36041,37207,38922,40046],"zhòu":[20279,20733,20881,21610,21650,21678,23449,26172,26205,29955,30385,30394,31808,31826,31829,31897,32002,32272,32419,32457,32964,33646,33892,35403,37198,39374,39519,39588],"shēn":[20280,20353,20831,21627,22548,22973,23072,23678,23799,25183,25938,26321,26587,27680,28145,29130,29637,29985,29991,30003,30482,30775,31356,31862,31864,31938,32051,32453,32601,32615,33888,34017,34072,34195,35025,35383,35445,35804,36523,39402,39891,39925,39994,40121,40290],"qū":[20281,20297,21284,21631,22373,23624,23702,23732,23943,24968,25278,25978,27968,28992,31067,31553,31916,32992,34502,34512,34986,35259,35416,35790,36237,36527,36544,38457,39366,39368,39493,39537,39671,39804,39992,40011,40332,40623,40628,40633,40674],"sì cì":[20282],"bēng":[20283,22051,22879,23849,23917,38285],"sì shì":[20284],"jiā qié gā":[20285],"yǐ chì":[20289],"diàn tián":[20291,38079],"hān gàn":[20292],"mài":[20293,21154,21233,21334,21787,22770,33032,34887,36067,36808,36993,38689,38690,40613,40614],"dàn":[20294,20708,21846,21847,21887,22089,22186,24078,25018,26086,26598,27694,27786,27897,28129,29402,30093,30298,31147,31390,33093,33807,34014,34507,34577,35291,35345,35477,35806,36105,38702,39204,39247,39411,39655,40224],"bù":[20296,21199,21541,21656,22487,22496,24067,24269,24598,24721,27493,27496,27497,29951,31728,33657,34048,36356,37096,37110,37384,38042,39202],"bǐ":[20298,20478,21269,22838,22947,24444,26428,26560,27604,27614,27800,30101,31189,31508,31558,31875,32859,33325,35983,37145],"zhāo shào":[20299],"cǐ":[20300,27492,27866,30345],"wèi":[20301,21355,21619,21890,22683,23206,24944,25024,26410,28205,29023,29101,29338,29484,30031,32237,32635,32963,33535,33739,34287,34358,34655,34737,34907,34910,35133,35586,35718,35727,35859,36503,36507,36558,36682,37839,38696,39207,39221,39254,39759,39815,40154],"zuǒ":[20304,24038,32339],"yǎng":[20306,20639,20859,22385,23711,24899,25065,25857,27687,27697,28852,30162,30306,31010,32059,34630,36590,39178,39386],"tǐ tī":[20307,39636],"zhàn":[20308,20577,23960,25112,25126,25136,26632,26719,26855,28251,31449,32187,32509,33754,34360,34405,34406,35687,36687,39503],"hé hē hè":[20309],"bì":[20310,21639,21716,22006,22354,22555,22721,22896,22972,23138,23318,24065,24163,24164,24199,24243,24294,24330,24379,24380,24387,24517,24621,24842,24846,25949,25987,26768,27605,27606,27609,28258,28375,28397,28535,29007,29082,29428,29528,29529,29644,29863,30016,30050,30122,30201,30202,30357,30564,30887,31578,31621,31622,31718,31731,31882,32188,32298,32372,32636,33143,33534,33628,33798,33822,34006,34045,34109,34204,34572,34960,35141,35166,35171,35313,35414,35792,36017,36116,36177,36344,36437,36483,36484,36991,37042,37160,37162,37453,37838,37940,38091,38279,38281,38303,38381,38491,38880,39158,39238,39325,39388,39494,39616,39763,39813,40413,40425,40714],"tuó":[20311,22376,22582,23726,27094,27216,27825,30755,30756,30882,32061,35409,36302,37217,38436,38464,38465,39389,39390,39464,39506,39517,39548,39808,40213,40501,40713,40717,40743],"shé":[20312,33292,34421,34533],"yì dié":[20314,26163,27846,36604],"fó fú bì bó":[20315],"zuò zuō":[20316],"gōu":[20317,27807,28317,30144,31709,31804,32241,32529,34983,35104,37390,37476,38057,38834,38877],"nìng":[20318,20395,20543,23509,27870,28573,28632],"qú":[20322,21164,25141,26026,27403,27412,27661,28141,28744,29216,29846,29865,30319,30962,31847,32071,32970,33246,33731,33867,34134,34343,34781,34871,34876,34896,34914,36515,36581,38010,40221,40476,40498,40745],"yōng yòng":[20323],"wǎ":[20324,21651,30745,37047],"kǎ":[20327,22448,33001,35011,37490],"bāo":[20328,21241,21253,23394,29042,31523,32990,33502,34132,35046,35090,35139,38337,40793,40837],"huái huí":[20330],"gé hè":[20331],"lǎo":[20332,21694,24645,26675,29419,29679,30803,32769,32770,33622,34543,36689,37536,38097,39857],"xiáng":[20333,24224,26649,31077,32116,32724,35443,36333],"gé":[20334,21260,21572,21981,22629,24837,25356,25663,27077,27338,28358,33160,33269,33558,35297,35581,36661,36693,38307,38401,38548,38839,38864,38874,39444,39612,39855],"yáng":[20335,21175,22431,23864,24457,25196,25562,25965,26104,26140,26264,26472,26954,27915,28800,29660,30113,30221,30523,34520,35577,36656,37722,38038,38438,38451,38525,38711,39098,39119,39953,40249,40457],"bǎi":[20336,25453,25670,25850,26658,30334,31457,31912,35180],"fǎ":[20337,23772,27861,28747,30749,37701],"mǐng":[20338,20949,23027,24911,37225],"èr nài":[20340],"hěn":[20343,24456,29408,35434],"huó":[20344,27963],"guǐ":[20345,21286,21293,21420,22429,23037,23428,24203,24234,24657,26231,28224,30328,31082,31755,34539,34785,35300,35437,35809,36556,36712,38482,39740],"quán":[20346,20840,21875,22498,23038,23761,24015,25331,25660,26435,27006,27177,27402,27849,27940,28278,29303,29320,29780,30154,30786,31564,32275,33603,33906,34615,34872,35296,35438,35808,36327,36385,36615,36737,37275,37523,38120,38350,39028,39079,39401,39457,39688,39937,40136,40804],"tiāo":[20347,24227,26091,31079,32846],"jiǎo":[20348,20748,23362,25378,25605,25759,25785,25898,25963,25981,25983,26184,26270,26322,28762,29150,29409,29868,30350,30374,32094,32400,32478,33139,33259,34780,35665,36043,36363,37496,38128,39171,39290,40014,40867],"cì":[20349,21054,24219,26431,26664,27425,32088,33574,33727,34515,34694,36060,36176],"xíng":[20352,21009,21720,22411,23065,24418,27920,30798,34549,37026,37065,37379,37494,37522,38040,38095,38473,38488,39219],"tuō":[20354,21635,21660,22315,25176,25301,25302,27729,33067,33073,33676,34981,35351,35756,39141,39270,39776,39861],"kǎn":[20355,20568,20890,22350,24770,30733,33712,36641,36695,38993],"zhí":[20356,20516,20540,22516,22519,23018,23298,25120,25191,25709,26893,27188,28116,28432,30452,31107,32119,32310,32832,32844,32887,33201,34777,36310,36399,36448,36497,36548,37342,39357],"gāi":[20357,22419,23007,23760,26192,30049,31092,33604,35442,35813,35941,36037,36044,36165,38484],"lái":[20358,20459,20488,23811,23821,24242,26469,26814,26870,28062,28150,29453,29724,31577,31618,33713,33802,36904,37106,37688,38140,39435,39904,40326,40627],"kuǎ":[20361,21685,22446,37529],"gōng":[20362,20844,21151,21265,21268,22632,23467,23470,24037,24138,24339,24685,25915,26459,30909,31996,31999,32945,35301,35317,36524,36531,39672,40852,40858],"lì":[20363,20432,20458,20616,20782,20791,20947,21033,21147,21169,21237,21382,21385,21412,21423,21426,21459,21519,21590,21774,21811,22182,22215,22364,22619,22754,23091,23151,23668,23718,24743,24759,24900,25150,25646,26278,26310,26334,26424,26533,26627,26647,26651,27306,27348,27370,27408,27508,27511,27813,27828,28054,28327,28671,28701,29199,29345,29441,29653,29806,29893,29905,29925,30124,30178,30311,30445,30553,30725,30778,30782,30975,31018,31019,31024,31154,31197,31435,31520,31717,31890,31901,31986,33079,33480,33560,33620,33669,33673,33946,33950,34294,34488,34510,34528,34599,34679,34823,34851,35400,35720,36210,36706,36707,36729,37192,37469,38582,38583,38643,38722,38731,39681,40168,40215,40389,40604],"yīn":[20364,20944,21905,22142,22233,22240,22420,22553,23035,23139,24852,24903,26678,27684,27911,28341,28646,30230,31115,31221,31555,32106,32248,33589,33937,34093,35008,35570,37542,38111,38345,38437,38452,38512,38523,38530,38674,38688,38791,38899,38910,39408,39555,40791],"mǐ":[20366,23370,24365,25929,27939,28211,28758,31859,31886,32651,33042,33416,33886,34077,37540],"zhū":[20367,26666,27104,27237,27367,27371,27929,28532,28710,29482,29664,30787,31228,32081,33585,34127,34523,34667,34857,35006,35461,35576,35803,35832,35948,36326,37054,37526,38114,39407,39842,39930,40248,40708],"ān":[20370,20579,23189,23433,23766,24245,26697,27688,30438,30443,33124,33780,33851,33866,34029,35485,35571,35865,38796,38797,38909,39331,39839,40298,40341,40524],"lù":[20371,20679,21198,21216,22309,22388,22646,23101,23757,24280,24404,24405,25134,25693,26882,27162,28117,28133,28172,28425,28510,29741,29840,29994,30429,30569,30793,31103,31108,31249,31307,31635,31759,31788,31797,31798,31833,31926,34061,34135,34370,34736,36034,36162,36258,36335,36379,36439,36613,36678,36738,36760,36911,37249,37636,37682,37684,37876,38520,39428,39484,39909,40252,40294,40305,40442,40557,40575,40595],"móu":[20372,21178,24648,30520,34513,35584,35851,36366,37738,40254,40624],"ér":[20373,20799,20816,20818,23759,26669,27919,31915,32780,33017,33611,35003,36608,36700,38481,38573,39669,39838,40085,40239,40504],"dòng tǒng tóng":[20375],"chà":[20376,22908,23033,23700,27722,35435,35815],"chì":[20377,20666,21189,21201,21489,21883,24435,24668,24919,24975,25048,25270,25941,26021,26456,28225,28795,28861,28926,29118,30163,30200,30235,32708,32709,32740,32744,33119,36196,36265,36971,37459,38644,39149,39276,40338,40408],"gòng gōng":[20379,20849],"zhōu":[20380,21608,21900,24030,24479,27954,28109,28863,28880,29656,30698,33311,35589,35704,35788,36057,36178,36616,36630,36736,36913,37102,37506,38668,39410,39430,40259,40508],"rú":[20382,20754,22149,22914,23340,23418,24100,26328,26695,28202,28641,31566,33593,34144,34231,34657,34837,35005,35174,37018,37305,37539,38135,39020,39077,40044,40209,40253],"jiàn cún":[20383],"xiá":[20384,20448,21283,23777,23805,25966,26247,26585,28832,28890,29390,29421,29433,29672,29781,30806,30820,30892,31083,31594,32278,32712,33309,33338,34168,36206,36676,36758,36944,37724,37771,38492,38527,38686,39458,39803,40375,40672],"lǚ":[20387,20406,20770,21525,21570,23649,23650,23653,25364,25435,26053,26784,28946,31075,31238,31341,32125,32311,32533,33154,33168,35099,35128,37080,37569,38109],ta:[20388],"jiǎo yáo":[20389,20709,24506],"zhēn":[20390,20597,23498,24103,24106,24128,25656,26015,26722,26984,27035,27196,27549,27976,28254,28519,28597,29513,29645,29646,29799,29956,30494,30495,30759,30890,31087,31118,31131,31668,32983,33275,33908,33942,33985,34237,35998,36126,36675,36937,37209,37341,37441,37681,37756,38024,40053],"cè zè zhāi":[20391,20596],"kuài":[20393,20744,20983,21721,22130,22310,22359,22602,24028,24293,24555,26077,27443,29423,29546,31607,31977,33037,33214,37072,37174,40032,40089],"chái":[20394,20757,21901,26612,29362,31073,35962],"nóng":[20396,20738,20892,21725,22117,27266,27393,27987,28611,29174,31151,31230,31328,33043,33215,34173,35163,35688,36786,36787,37298,39710],"jǐn":[20397,20760,21370,21418,24057,27135,28428,29822,32039,32202,33771,34035,35641,35880,37670,38182,39241,39313],"hóu hòu":[20399,30694],"jiǒng":[20400,20690,20879,22247,27842,28547,28847,28913,29018,29019,29106,29147,31384,32151,35111,36837,36872,38984,39054],"chěng tǐng":[20401],"zhèn zhēn":[20402,25557],"zuò":[20403,20570,21777,22352,23709,23710,24231,31066,31987,32985,33859,33860,34009,34959,38460],"qīn":[20405,20819,23175,23898,23956,27453,34942,35483,38054,38985,39416,39566,39868],"jú":[20407,21881,23109,23616,24008,26888,27224,27878,28119,28264,28951,29329,29386,31927,33738,34332,36252,36348,36459,36610,37113,38320,39414,39527,40281,40308,40362,40752,40755],"shù dōu":[20408],"tǐng":[20409,22306,23063,25402,28047,28918,29693,33057,33351,35476,38962,39051],"shèn":[20410,24892,24910,26138,28033,28183,28402,30214,30254,30488,31091,32958,32962,33060,33102,34563,34564,37600],"tuì tuó":[20411],"nán":[20413,21891,23066,25257,26260,26511,26591,26976,30007,30040,33710,33843,36950],"xiāo":[20414,21715,22069,22203,22210,23115,23471,23477,24232,24391,25585,26541,26549,26783,27385,27466,27594,28040,28487,28703,28785,28786,28875,28935,29447,29538,30170,30175,30813,30819,31385,31659,31768,31787,32131,32481,32731,33198,33831,34157,34376,34387,34754,34767,34800,34856,36355,36877,37559,38144,38660,39093,39501,39553,39623,39632,39752,40222,40245,40397,40494],"biàn pián":[20415,32246,32527],"tuǐ":[20416,33151,36422,39613],"xì":[20418,21304,21324,21612,22669,23619,23635,23661,24549,24620,24644,26910,28509,28511,28569,29058,29332,30966,31114,32048,32140,32280,32454,32484,33283,33284,34158,34409,34891,35236,36201,36231,37092,37363,38411,38553,38559,38716,39228,39273,39721,40662],"cù":[20419,23208,25009,29469,30212,30255,31751,32300,33064,34079,35470,36247,36391,36415,36441,36468,36469,37259,39011,40704],"é":[20420,22254,23077,23753,23784,23785,28048,29684,30354,30539,30912,33706,35355,35472,35660,35769,36823,37387,37608,38151,38943,38989,39069,39780,40285,40286,40517],"qiú":[20421,21492,21778,22234,23863,24047,24048,25167,26754,27535,27628,27714,27731,27845,27991,28269,29034,29360,29580,29699,29830,30387,30426,32012,32127,32909,33409,33677,34412,34415,34551,35032,35283,35305,35332,35333,36053,36167,36878,36881,36946,37195,37338,37371,37558,38916,39810,39876,39997,40765],"xú":[20422,24464,31121],"guàng kuāng":[20423],"kù":[20424,21950,22195,24211,24235,24292,30228,32093,32468,34996,35044,35122,37239],"wù":[20425,21153,21209,21247,21372,22366,22626,22886,23162,23524,23676,23689,23912,24546,24734,24735,24750,25098,25188,26212,26444,28329,28944,29059,29289,30182,30713,31417,31877,34305,35492,35823,37576,38434,38550,38654,38682,38695,38768,39446,39579,40361,40540,40767,40768],"jùn":[20426,20737,21569,22472,23535,23803,25039,25411,25887,26201,26846,29127,29690,30063,31459,31647,34592,36048,37089,38486,39189,39298,39423,39567,40276,40277,40280],"liáng":[20429,22682,26753,26891,27153,31918,31921,31975,33391,36652,36748],"zǔ":[20430,21800,29244,31062,32068,32452,35419,35781,37818,38459,38779],"qiào xiào":[20431],"yǒng":[20433,21191,21192,21647,22471,22606,23921,24430,24634,24703,24704,24805,24849,24889,24898,26593,26640,27704,27891,28263,29996,34553,35424,36362,36404,39890,40108],"hùn":[20434,20529,22274,23585,24897,25485,28343,28957,30580,35304,35554,35816],"jìng":[20435,20665,22659,22924,23129,23143,24362,24371,24452,24465,25964,26324,26737,26807,27972,28702,29517,30153,30169,31454,31455,31467,31478,31480,33003,33051,33686,35497,36353,36851,36885,37857,38236,38742,38745,38748,40283],"sàn":[20437,38288],"pěi":[20438],"sú":[20439],"xī":[20441,20694,20846,20958,21349,21376,21560,21775,21821,22075,22095,22193,22805,22874,23302,23305,23638,23904,24007,24076,24454,24495,24687,24713,24725,24769,24796,26132,26206,26224,26227,26342,26512,26744,27069,27176,27200,27447,27685,27728,28e3,28101,28179,28330,28911,28929,28936,28959,29060,29064,29081,29113,29114,29115,29160,29204,29306,29312,29344,29351,29707,30236,30361,30542,30630,30717,30802,30926,30978,31232,31352,31416,31902,31974,32198,32357,32690,32725,32726,32952,32953,33181,33342,33667,33765,33952,34597,34693,34763,34869,35199,35321,35325,35327,35654,35903,35904,35944,35951,35989,36197,37020,37134,37189,37295,37368,37675,37869,37898,38004,38177,38581,39183,39246,39291,39889,40279,40450,40759],"lǐ":[20442,23052,23778,23794,26446,27418,28012,28583,29702,31036,31150,31924,35023,35041,35914,36902,37008,37300,37616,38146,39881,40039,40049,40100,40162],"bǎo":[20445,22562,23212,23453,23514,23539,23542,29668,32229,33862,34293,35091,36082,38732,39161,39165,39281,39362,40181,40199,40488],"yú shù yù":[20446],"sì qí":[20447],"xìn shēn":[20449],"xiū":[20450,20462,21691,24229,27143,28876,32670,33049,33065,33273,35973,37533,37760,39117,39240,39312,39652,39673,39860,40003,40258,40506],"dì":[20452,20569,20672,22474,22673,22700,23075,24093,24607,26099,26762,28941,29587,29963,30513,30535,30898,31094,31128,31532,32224,32532,33123,33730,33922,34069,34627,34669,34734,35558,35867,36406,36882,36883,36958,36976,37482],"chóu":[20454,20756,23334,24774,24833,25060,26662,29181,30068,30087,30359,31264,31609,31820,32082,32162,32504,33751,35446,35726,35728,36364,36490,37223,37228,37307,38612,38624,38630],"zhì":[20455,20587,20776,21046,21141,22401,23073,23512,24089,24092,24159,24226,24228,24268,24408,24463,24477,24535,24558,25061,25067,25347,25370,25527,25711,25842,26072,26186,26234,26633,26702,26813,27341,27355,27835,27959,28365,28382,28399,28492,28676,28825,29099,29438,29464,29839,29894,30164,30179,31017,31057,31209,31223,31258,31290,31305,31378,32041,32251,32622,32720,33187,33267,33268,33430,34541,34975,34976,35069,35231,35287,35311,35318,35468,35921,35922,36013,36074,36100,36136,36157,36337,36396,36499,36618,36734,37061,37517,37589,37973,38106,38183,38495,38578,38601,39396,39469,39482,39495,39576,39919,40217,40409,40503],"liǎ liǎng":[20457],"jiǎn":[20461,20537,20745,20943,21098,22591,24383,24389,25129,25132,25315,25400,25441,25536,25791,26535,26604,26776,26816,26908,27298,28187,28245,28733,29776,30545,30652,30839,30897,30982,31509,31591,31616,31777,32120,32365,32742,33575,34246,34834,35045,35143,35145,35194,35395,35591,35629,35710,35883,36284,36423,37911,39691,39950,40568,40571,40572],"huò":[20464,21663,22191,22207,22895,24416,24785,25110,25837,26084,26340,27316,27790,28273,28694,29554,30312,30483,30672,31096,31117,31339,31394,32815,33243,33383,33719,33958,34303,34838,35595,36008,36135,37699,37962,38252,38616,38669,38723,38852],"jù jū":[20465,25454,37624,38191],"xiào":[20466,20634,21177,21682,21742,21880,22027,22056,22063,23389,25928,25989,25990,27479,28045,29117,31505,35432,35487],"pái":[20467,24472,29260,29348,29445,31792,31794,36651],"biào":[20469,39998,40148],"chù tì":[20470],"fèi":[20471,21077,21406,21536,23645,24223,24259,24290,26162,26314,27360,27832,28663,29394,30280,32954,33801,36027,36153,37928,38212,38507,38725,40739],"fèng":[20472,20964,22857,28247,28968,29e3,36085,36183,40175,40179,40204],"ǎn":[20474,21813,22511,25566,32623,37544,38133],"bèi":[20475,20493,20573,20601,20633,20675,22791,24726,24811,24834,24970,26113,26774,28953,29292,29333,29384,29437,29692,29746,30874,31129,31954,33501,34003,34557,35097,35997,36125,36592,36649,36744,37046,37093,37121,37575,37950,38049,38785,38836],"yù":[20476,20773,21893,21929,21947,22495,22537,22954,23255,23507,23786,23950,24253,24423,24481,24840,24958,25131,26161,26843,26844,26859,27378,27406,27421,27442,27603,28020,28143,28394,28495,28582,28778,28980,29020,29135,29152,29225,29425,29508,29577,29721,30217,30290,30753,30818,30834,30983,30998,31004,31142,31191,31266,31286,31741,31838,31858,31894,32206,32621,32895,32896,33352,33419,33420,33567,33966,34019,34041,34167,34316,34591,34606,34988,35029,35465,35565,35709,35861,35947,36553,36621,36915,36935,36985,37057,37287,37434,37578,37669,37933,38064,38334,38408,38628,38705,38928,39044,39147,39239,39275,39341,39496,39533,39728,39729,39739,39754,40010,40191,40229,40231,40234,40274,40440,40466,40518,40556],"xīn":[20477,22138,22945,23324,24286,24515,24516,24571,24798,26032,26133,26490,27427,27462,28824,30458,34218,35362,36763,37028,37386,37573,37995,38156,39336,39339],"hǔ chí":[20479],"jiù":[20483,20710,21267,21275,21302,21417,21646,23601,24260,24271,24272,24934,25412,25937,26087,26601,26622,26709,27405,27559,30106,33276,33285,33290,39910,40434,40555,40596,40808],"yáo":[20484,20636,21954,22426,22575,23002,23217,23591,23597,23779,23970,23972,24493,25594,25622,25671,25727,26266,27043,28391,28881,29243,29498,29671,29796,29814,30936,31377,31407,31408,32948,34344,35616,35617,35875,36602,36730,36953,36965,37006,39012,39099,39126,39174,39194,39977,40025,40144],"cuì zú":[20485],"liǎng liǎ":[20486],"wǎn":[20487,21773,23113,24779,25405,26202,26213,26217,26236,26778,26880,29740,30073,30358,30412,30871,32169,32176,32510,33048,33814,36384,36627,37588],"zǒng":[20490,20588,20655,23928,24635,24803,25460,25603,25696,29162,32207,32235,32258,32317,34007],"guān":[20492,20851,23448,26874,30237,30287,31396,33924,38306,38359,38364,39973,40030,40143],"tiǎn":[20494,21818,24541,24767,26218,27524,28127,30547,33094,33300,35237,35277,36063,37674,39170],"mén":[20497,25194,25451,29834,33755,34379,37702,38036,38272,38277,38376],"dǎo dào":[20498],"tán tàn":[20499,22510],"juè jué":[20500],"chuí":[20501,22402,22464,25462,25637,26712,26864,27084,31648,33092,33753,37656,37786,38180,38514,38976],"xìng":[20502,22995,23134,23353,24184,24615,24763,26447,28076,32200,33238,33607,33685,33877],"péng":[20503,20656,22620,22643,24376,24969,25408,26379,26842,26902,27173,30844,31261,31484,31735,32388,33192,33411,34028,34325,34778,34779,34998,36643,37643,37981,38904,38908,39471,39676,39685,39700,40300,40527],"tǎng cháng":[20504],"hòu":[20505,21402,21518,22421,22560,24460,27913,33577,35934,36869,37064,39836,40031,40078,40088],"tì":[20508,21059,22159,22164,23625,23644,24716,24720,24789,24790,25147,25510,26367,26385,27474,27554,28053,29899,31545,31818,34201,35077,36886,36919,39664,39680,39684],"gàn":[20509,20942,24185,27046,27274,28134,28776,30448,32058,32448,35404,36113,36195,39597],"liàng jìng":[20510,38739],"suī":[20512,21752,22794,28374,28617,30509,30562,33429,33661,33662,34429,38614,38806],"chàng chāng":[20513],"jié":[20514,20604,20625,21030,21031,21052,21163,21180,21353,21354,23125,23211,23377,23690,23848,23909,23995,24e3,24175,25130,25463,25526,25838,26117,26466,26480,26688,26717,26988,26998,27044,27905,28368,28500,29412,30571,30989,31469,31680,32687,33709,34037,34531,34576,34840,34846,34877,34929,35002,35344,35440,35505,35750,36373,36860,37475,37755,38268,38945,39834,40082],"kǒng kōng":[20517],"juàn":[20518,21173,22854,24955,26698,28099,29431,29543,30519,30538,30560,32109,32121,32482,32613,32642,33091,34088,37124,39179],"zōng":[20519,22571,23447,23887,23893,24830,26401,26837,26934,29095,29475,30955,32195,32746,33113,33916,34668,35957,36392,36394,36452,37712,37953,39436,39459,39572,39683,39689,39735,39918,39932],"ní":[20522,22381,22527,23612,23636,24617,28131,29450,31870,32867,34477,34618,35308,35982,36316,36631,37107,37422,38092,38675,39324,39906,40117,40593,40815],"zhuō":[20524,25305,25417,26700,26802,26817,26867,27093,28095,31399,37935],"wō wēi":[20525],"luǒ":[20526,21062,26346,30256,30323,33245,33999,34819,35064,36534],"sōng":[20527,20935,23040,23847,23913,24250,25021,26494,26496,26537,26583,26789,27303,28126,28621,30841,33752,39686],"lèng":[20528,22542,24867,30550,36380],"zì":[20531,21082,23383,24675,28173,28460,29304,30501,30502,32980,33022,33258,33569,33634],"bèn":[20532,22348,25465,25770,28160,31528,36905],"cǎi":[20536,21835,23111,24425,25505,26828,27613,30572,32181,36340,36393],"zhài":[20538,20661,23528,30261,30758],"yē":[20539,21524,22094,25832,26253,26928,27467,28529,34862],"shà":[20541,21820,21922,27459,31633,32732,32739,33808,38319,38670],"qīng":[20542,20670,21375,22282,23496,27682,27691,28152,28165,34619,36605,36629,36731,37100,37638,37963,38737,38738,39894],"yīng":[20544,22052,22111,22198,23156,23190,23240,23344,23366,23422,24869,25732,25878,26400,26716,27185,27387,28214,29008,29681,29787,29838,29908,29959,29974,30884,31023,32211,32403,32492,32552,32578,32579,32588,33210,33521,33722,34337,34663,34867,35118,35707,36047,36552,37965,38195,38681,38906,40236,40337,40359,40367,40426,40441,40462,40474,40550,40560],"chēng chèn":[20545,29231],"ruǎn":[20548,26378,29772,29888,30877,31005,33117,36575,36653,36719,38446],"zhòng tóng":[20549],"chǔn":[20550,24823,30582,33846,34850,36080],"jiǎ jià":[20551],"jì jié":[20552],"bǐng bìng":[20555],"ruò":[20556,21458,23926,24369,26953,28971,29191,31660,31707,33979,37120,39961,39983,40376],"tí":[20557,21399,21884,21953,23865,28477,29765,30588,31157,31242,32249,32519,32612,34139,35078,35605,36263,36420,36431,37261,37719,38988,39064,39456,39863,39927,40128,40284,40420,40520],"wēi":[20558,21361,21940,23041,23193,23990,24013,24494,24836,25547,25595,26931,26994,28326,28883,29032,29168,30291,32261,33896,33907,34183,34610,34651,35235,35444,36918,38535,38536,38714,39939,39940,40130],"piān":[20559,22248,23205,26948,29327,31687,32745,37698],"yàn":[20560,21388,21421,21761,21933,22152,22181,22576,22943,23026,23306,23359,23476,24421,24422,25957,26191,26277,26325,26339,28383,28750,28756,28775,28777,28948,28976,28977,29078,29124,29290,29458,30746,30831,33395,33398,33399,35214,35267,35326,35578,35724,35742,35866,35891,35923,35924,36107,36119,36189,36549,37184,37245,37308,37317,38593,39181,39260,39440,39443,39476,39511,39520,39564,39731,40171,40200,40243,40387,40432,40798],"tǎng dàng":[20562],"è":[20564,21262,21374,21380,21597,21666,22121,22441,22538,22574,23691,23871,24261,24746,24853,25145,25212,25636,25657,25820,27374,27486,27514,28226,29735,30728,30736,30790,33133,33482,33852,34138,34437,34625,35240,35556,35725,35860,35935,36571,36598,36717,36940,36943,36987,37122,37418,37716,37993,38199,38440,38456,38942,38990,39066,39187,39209,39295,39952,39978,40055,40132,40346,40535,40771,40822],"xié":[20565,21232,21327,21332,21963,22437,22858,24650,24886,25337,25658,25783,25813,25847,25884,26012,26090,29057,29170,32138,32243,32256,32556,32723,32961,33029,33031,33035,33166,34658,34938,35181,35559,35735,35856,38795,38837,40868],"chě":[20566,25199,25766],"shěng":[20567,28219,30490],"chā":[20571,21967,25184,25407,25554,25591,30080,33279,33366,37535,37732,38200,39223],"huáng":[20575,20976,21924,22573,22708,23187,23858,24488,24822,27003,28255,29004,29530,29789,29852,30272,30343,30970,31316,31681,31783,33358,33887,34647,34789,35579,36266,36945,37728,37892,38205,38541,38905,39213,39452,39945,40017,40135,40428,40643,40644],"yǎo":[20576,21676,23161,23438,23686,26483,26620,27034,28308,29397,31365,31368,33280,33517,38340,39445,40405,40809],"chǒu qiào":[20578],"yóu":[20580,23588,24238,24611,27787,27833,27999,28216,29369,29494,29495,30001,30115,31198,32940,33692,33720,34133,34480,34659,35367,36623,36662,36912,36938,37038,37109,37438,38080,39360,39799,39819,40063,40073],"xū":[20582,22687,23213,23299,26952,27432,27476,29176,30110,30449,32135,32259,32379,32997,34150,34391,34394,34395,34641,35015,35343,35377,35549,35651,35870,37968,38656,38920,39035,39036,39497,39706,39750,39766],"zhā":[20583,21747,25263,25363,25592,25699,27165,28195,30390,35312,35655,40772,40775],"cī":[20584,30133,34816,36224,39604,39626,40825],"bī":[20586,23620,26949,27636,35917,36924,39951,40126,40278],"xún":[20593,22106,23547,23563,23755,24033,24309,24490,24642,25559,25907,26092,26442,26642,26730,27187,27957,27988,28527,29125,29142,29667,29845,30019,32003,33600,34803,35426,35810,37161,40015,40024,40095],"cāi sī":[20594],"duān":[20595,23183,31471,35085,37748],"ǒu":[20598,21528,22036,32806,33122,34117,34261],"tōu":[20599,20600,37742],"zán zá zǎ":[20602],"lǚ lóu":[20603,20674],"fèn":[20606,20712,22859,22894,24325,24575,24868,24996,28725,30611,31182,31914,31966,33209,40029,40124],"kuǐ guī":[20608],"sǒu":[20609,21468,21471,22014,27362,30605,34222,34282],"zhì sī tí":[20610],"sù":[20611,20723,21961,22608,22609,22809,23242,24875,24991,27041,27150,27157,27536,27869,28049,28335,28344,28506,28517,29578,29663,29851,31756,31899,31903,32032,32292,32899,32901,33158,34060,34263,35307,35380,35606,35785,35873,36250,36444,36895,36961,36972,37577,39191,39500,39573,40016,40427,40532],"xiā":[20612,28998,30606,34418,35898,39084,39957],"yuàn yuán":[20614,23195],"rǒng":[20615,20887,23426,27652,36597],"nù":[20617,24594],"yùn":[20618,23381,24701,24818,24864,24909,26527,33130,34164,34176,34292,34314,35102,35999,36816,36939,37075,37126,37213,37270,37278,38871,38878,38901,38907,39211],"gòu jiǎng":[20619],"mà":[20620,22044,27050,30576,31043,31137,32629,38273,39393,39554,39701],"bàng":[20621,22621,26834,29604,31254,33365,33953,34607,35607,35876,37770,38225],"diān":[20622,21415,23918,24005,24019,24020,25474,25895,25921,27079,28359,30315,30322,36430,39002,39003,39072,40827],"táng":[20623,21776,21882,22371,22530,22616,25642,26848,27062,28303,28447,29051,29805,30916,31135,31702,31939,31958,31963,33157,33179,33998,34711,34739,36207,36412,37132,37283,37781,38554,39225,39236,40374],"hào":[20624,21728,24655,26122,26150,26215,26272,26276,26285,26317,28009,28111,28564,28751,28765,30355,30364,30366,30369,30373,32791,32853,34179,34399,37143,39013,39074,39965],"xī xì":[20626],"shān":[20627,21024,21034,21116,22328,23665,25403,25639,26613,27270,28536,28568,29053,29414,29642,31512,32319,32692,32694,33056,33314,33439,34923,36314,36565,37014,38282,39877],"qiàn jiān":[20628],"què jué":[20629,22470],"cāng chen":[20630],"róng":[20635,23222,23238,23339,23481,23797,23896,23992,25102,25608,26343,26628,27029,27054,27061,27623,28342,28700,28927,29076,29416,29794,31297,32104,32466,32674,32924,33561,33592,33635,33993,34686,34701,34702,34833,35107,37780,38229,39397],"tà tàn":[20637],"suō":[20638,21766,21965,21990,23057,25677,26731,26797,30531,31761,31764,32679,33679,34001,36246,39867],"dǎi":[20643,27513],"zài":[20644,20750,20877,22312,25175,27909,36617,37224],"gǔ":[20646,21476,21842,23603,24882,27030,27070,27753,28104,28658,28692,29295,30391,30396,30444,30653,31296,32607,32662,32929,33077,33228,34211,34506,34865,35393,35778,36674,36903,37431,38068,39222,39305,40723,40724],"bīn":[20647,23486,24428,25996,26901,28392,28626,28657,28661,28693,32381,32548,34408,35945,35955,36051,36052,37024,37964,38228,38694,39022],"chǔ":[20648,20786,26485,26904,26970,26990,27290,28619,29876,30784,30990,31111,34389,40813,40828],"nuó":[20649,20794,25386,26779,27232],"cān càn":[20650],"lěi":[20651,20769,21437,22418,22593,22744,22760,27344,28741,30295,30667,30922,31016,32786,34124,34174,34271,34365,34845,35460,35716,35796,38008,40467],"cuī":[20652,20951,22676,23828,23903,24923,25703,27057,29525,30954,37849],"yōng":[20653,21960,22665,22725,23262,24248,24305,24949,25317,25793,28413,28745,29253,30152,30293,30320,33219,37013,37114,37144,37854,38235,38605,38621,39252,40005,40153,40411],"zāo cáo":[20654],"sǒng":[20657,23927,24578,24730,24879,24939,31462,32824,32883,39415],"ào":[20658,22387,22407,22714,22881,23279,23705,23728,23988,25034,25817,28595,37834,39489,39580],"qī còu":[20662],"chuǎng":[20664,30946,38358,38383],"shǎ":[20667,20749],"hàn":[20668,22462,24717,25022,25182,25421,25750,25788,26097,26200,26293,27721,28038,28450,28698,28938,29442,30356,30533,32752,33695,33761,34559,34605,34706,35648,36634,37356,37554,37582,38615,38967,38980,39060,39419,40382],"zhāng":[20669,23260,24352,24373,24432,24926,26290,27167,28467,29520,29835,31456,31931,34049,34769,36967,37155,37873,39206,39487,40006,40606],"yān yàn":[20671,22677,23342],"piào biāo":[20676,39584],"liàn":[20678,22556,23201,24651,25088,26973,27539,27566,28229,28491,28592,28722,28860,29001,29779,32244,32414,32451,33840,37676,37706,37832,38142,39946],"màn":[20680,22657,24148,24930,26364,28459,28599,29107,29516,32309,32550,34052,34352,37156,37853,38232],"tàn tǎn":[20683],"yíng":[20684,21942,22603,23348,25869,27001,27391,28289,28299,28386,28486,28633,28634,28660,28677,28699,28704,28719,28752,28764,29074,29151,29801,30401,30408,31132,31837,31855,32264,33556,33639,33721,33828,33829,33830,33854,34021,34240,34509,34631,34687,34722,34821,35597,36111,36194,36814,37795],"dòng":[20685,20923,20941,21160,21205,23003,25113,25359,26635,26847,28265,30800,33e3,33012,33110,36853,38680,39399],"zhuàn":[20686,21869,22208,22559,25776,28791,29777,31686,33118,33923,35144,35668,39244,39316],"xiàng":[20687,21224,21521,22190,23008,23953,26319,27233,29670,32575,34771,34902,35152,35937,37900,38917,39033,40012],"shàn":[20688,21892,22688,22689,23319,25797,25982,26923,27199,27482,27733,28759,30109,30960,32341,32558,33203,34798,34810,35349,35590,35697,35754,36109,36193,36216,37167,37925,39245,39480,39583,40019,40020,40157],"tuí tuǐ":[20691],"zǔn":[20692,22082,25753,35664],"pú":[20693,21261,22308,22691,28654,29531,29854,30632,31321,33670,33744,33769,33889,33969,33970,36108,37242,37879,38244],"láo":[20695,21171,21172,21214,21744,23810,23959,24997,26405,28022,29282,30184,30278,31362,31785,37290,37906,38137,39007,39645],"chǎng":[20696,21424,24288,25950,26166,27653,37625],"guāng":[20697,20809,21667,22425,23023,27960,28782,28823,28826,28827,28897,29654,33009,33578,36612,37543,40646],"liáo":[20698,22073,23293,23525,23534,23582,23658,23930,23962,23963,24299,24960,25977,26296,27217,29536,29849,30103,30274,31426,31773,32346,32557,32842,33163,33195,34260,34783,35906,36095,36440,36797,36988,39113,39630,40431,40553],"dèng":[20700,20979,22705,23965,27336,30634,30964,35252,37011,37159,38565],"chán zhàn zhuàn":[20701],"bō":[20704,23955,25320,25765,25773,27874,28298,29627,30326,30411,30773,30854,31009,32573,33760,34992,36467,37474,38069,39185,39293,39499,40013],"huì":[20705,21295,21321,21913,22034,22166,22298,23314,23533,23670,23671,24407,24409,24410,24507,24666,24693,24800,24935,24979,25075,26214,26291,27109,27230,27269,27352,27719,27851,28377,28499,28905,29172,29545,29860,30650,30794,31229,31330,31730,32117,32362,32472,32729,32765,33631,34087,34137,34184,34185,34794,35439,35496,35569,35667,35711,35763,35826,36036,36159,37932,38368,38419,38759,38958,39018,39058,39215],"chuǎn":[20706,21912,33307,33608,36403],"tiě jiàn":[20707],"sēng":[20711,39705],"xiàn":[20713,20724,21743,22455,22634,23021,23050,23466,23704,23796,25010,25738,26203,27212,27258,28032,28695,29486,29563,29616,29694,30476,30541,31919,31982,32100,32171,32218,32447,32528,32673,32680,33146,33236,33277,33483,33703,35490,35919,37607,37646,38480,38501,38519,38704,39201,39301,40626,40760],"yù jú":[20714],"è wū":[20715],"tóng zhuàng":[20718],"lǐn":[20719,20955,20956,24297,24298,25037,25044,25755,27265,27305,28575,30299,30301],"gù":[20721,20933,22266,22540,23827,23854,25925,26767,26845,29311,30204,31099,37678,38178,38599,39015,39038,39901,40116],"jiāng":[20725,22723,23004,27263,27565,27743,30037,30085,30995,32366,32560,32734,33587,33857,34193,34688,34751,35911,38849,40002,40137],"mǐn":[20726,20922,21025,21188,24751,24829,24845,24924,25003,25279,25923,25935,25967,27887,28515,30399,31522,31549,31778,34848,38292,38313,38389,38397,39989,40152,40701],"jìn":[20728,20954,22116,22157,22672,22743,22935,23335,25634,26185,26187,26499,27555,27989,28024,28301,28613,28636,28908,29025,29180,29710,29800,29878,30433,31090,32265,32537,33641,34254,35250,35280,36078,36112,36166,36817,36827,36914,38771,40829],"jià jie":[20729],"qiào":[20730,23789,24105,25772,27579,31373,31429,35482,35822,36488,38487,38825,38866,39642],"pì":[20731,23218,23251,23617,28604,29971,30088,35692,38370,40447,40458],"sài":[20735,31802,36093,36187],"chán tǎn shàn":[20739],"dāng dàng":[20741,24403,38371],"xuān":[20743,21927,22599,23191,23459,24835,24843,25550,26125,26244,29002,29014,29764,30587,30670,31140,31662,32743,32766,33841,33842,34002,34175,34300,34320,34646,34825,35552,35580,35678,35862,36562,36713,37753,39421,39962],"dān dàn":[20747,25812,30213],"càn":[20751,28591,28799,29158,29864,31922,34194,35634],"bīn bìn":[20752],"án àn":[20753],"tái":[20755,22382,23343,25260,25825,27311,28849,28850,31817,33274,34233,36294,37040,39089,39824,40080],"lán":[20758,20848,22226,23146,23706,23888,24177,25318,25876,26003,26005,26639,27396,27415,28572,28734,28742,28769,29155,29175,29884,31726,31811,31843,32383,33915,34013,34253,34347,34349,35124,35157,35172,35188,35197,35659,35733,35888,36509,37997,38247,38348,38417,38858],"nǐ yì ài yí":[20759],"méng":[20762,24170,26330,26406,27223,27308,27659,28309,28635,29965,30015,30431,31006,33384,33684,33804,34116,34427,34673,37171,37176,38719,38720,39021,39259,39885,40463,40562],"níng":[20764,20957,21659,22144,23331,26592,27235,27320,29406,29552,32845,32889,34228,37967,39713,40459],"qióng":[20765,21357,23430,24824,24972,26703,27241,28970,28973,29026,29069,29756,29898,30552,31351,31353,31406,31430,31547,31559,33340,33557,34257,34285,34537,34540,36217,36331,37019,37518],"liè":[20768,20925,21015,21155,21181,22482,22483,23028,23771,24036,25362,25449,26677,27916,27990,28872,28910,29037,29347,29454,29471,29557,32855,33055,33570,34522,36244,36496,36862,39090,39707,39715,39844,40050,40247],"kuǎng":[20771,22844,25069],"bào":[20772,21245,22577,24513,25253,25265,26323,29190,29350,33762,34403,34475,35961,37451,37988,38087,39602,39665,39825,40077],"biāo":[20774,22658,24150,24426,26631,27161,28398,28684,29083,29186,29451,30253,30950,33176,33237,35620,36102,37858,37987,38230,38259,39086,39095,39110,39111,39112,39114,39121,39129,39130,39531,39561,39647],"zǎn":[20775,20793,22086,25861,26141,36273,36274],"háo":[20779,21989,22071,22097,22158,22741,26883,27612,27627,28640,29510,29524,31443,31815,34461,34836,35705,35946],"qìng":[20780,20938,24198,24950,27366,28650,30851,30956,32580,38744],"chèn":[20781,22187,27015,27372,30114,34924,35183,35734,35894,36225,36226,40787,40788,40832],"téng":[20783,24144,28373,28443,30140,31824,31832,32290,33150,34276,34373,34723,35466,35588,36998,39398,39472,39523,39975],"lǒng lóng lòng":[20785],"chán chàn":[20787],"ráng xiāng":[20788,21239],"huì xié":[20790],"luó":[20792,25886,26916,27407,29473,29568,31657,31854,32599,32645,33078,33121,33821,34367,34746,35260,36923,37007,37837,38012,38179,38233,39264,39486,39512,39585,40449],"léi":[20797,23256,27281,27417,29891,30078,32306,32397,32413,32551,32589,32696,34050,34354,34374,36704,37939,37976,38253,38647,38721,40041,40762],"nàng nāng":[20798],"wù wū":[20800],"yǔn":[20801,21911,22845,25230,27538,27550,29377,30930,33658,36081,37399,38445,38504,38549,38691,39355,40811,40819],"zān":[20802,27253,31786,31790,31948,37909,37919,40292],"yuán":[20803,20870,21407,21409,21429,22253,22278,22286,22290,22291,22435,22636,23220,23236,25588,27038,27052,27260,27358,27781,28274,28304,28306,29232,29480,29503,31502,32227,32257,32536,32689,33554,34199,34653,34671,34696,34945,35108,35612,36677,36757,37005,37031,37211,37416,37809,39477,39789,40354,40368,40703,40715],"xiōng":[20804,20807,20982,21250,21256,21701,24567,24671,27769,27958,33015,33016,33422,35369,35454,35771],"chōng":[20805,22019,24545,24963,24999,25679,27798,28026,29675,32639,32704,33282,33375,33594,34909,36438],"zhào":[20806,22423,26064,26316,26523,27330,29031,29171,29411,30654,31498,32576,32617,32644,32897,32903,32904,35412,35791,36213,36249,39841],"duì ruì yuè":[20810,20812,20817],"kè":[20811,21051,21184,21194,22529,23060,23458,24682,24857,27690,28312,30886,32217,32514,33360,34889,35506,35838,37633,38174,39437,39570],"tù":[20814,20820,22541,36812,40309],"dǎng":[20826,25897,27411,35681,35740,35872,40680],"dōu":[20828,20832,21783,27255,31740,34104],"huǎng":[20836,22875,24140,24627,24653,26180,28862,29056,32296,35428,35594,35854],"rù":[20837,21973,23223,25174,26433,27955,28349,32287,32539,34e3,35109,40176],"nèi":[20839,27677,27678,37655],"yú shù":[20842],"liù lù":[20845],han:[20847,29235],"tiān":[20850,22825,23126,28155,37215,38740,38749,40647],"xīng xìng":[20852],"diǎn":[20856,22200,22860,23152,25951,26915,28857,30872,33959,34119,36398,40670],"zī cí":[20857],"jiān":[20860,20927,22223,22362,22533,22904,23014,23015,23574,24181,24804,25099,25108,25627,26942,27179,27388,27516,27569,27570,28244,28688,28728,29006,29086,29112,29259,29770,30583,31003,31031,31546,31627,32216,32273,32516,32547,32937,33392,33393,33733,33786,33868,33977,34090,34129,34163,34371,35708,35932,37999,38595,38831,38848,38857,39216,39330,39956,39964,39993,40099,40146,40273,40307,40380,40547,40585],"shòu":[20861,21463,21806,22781,22784,23551,25480,29417,29539,29560,30185,30246,32172,32502,33156],"jì":[20862,20864,21058,21092,21137,21219,22358,22413,22600,22931,23395,23490,23492,24301,24401,24475,24524,24760,24782,25083,25216,26081,26082,26083,26280,26281,26305,26782,27285,27317,27918,28419,28424,28721,30197,30304,31133,31273,31287,31300,31306,31335,32e3,32153,32318,32331,32380,32487,32489,32637,33262,33456,33549,33572,33898,34015,34055,34186,34318,34350,34363,35034,35136,35244,35274,35336,35352,35467,35745,35760,36321,36349,36447,36857,38469,38555,38657,38717,39525,39589,39675,39742,39773,39781,39898,39933,39990,39999,4e4,40045,40090,40107,40267,40401,40780],"jiōng":[20866,20875,22384,22491,25155,34319,34324,39369,39403],"mào":[20867,20880,23202,24125,24855,25035,26259,26581,26969,27639,29761,30339,30474,30592,32772,33538,33850,34640,34980,35218,35980,36031,36152,37146,37166],"rǎn":[20868,20873,22988,23203,26579,29635,33490,33925],"nèi nà":[20869],"gāng":[20872,20910,21018,21083,22536,22589,23713,25478,25667,26849,29288,29317,30104,32177,32434,32568,32577,32609,32923,37357,37792],"cè":[20874,20876,21397,21408,22824,24257,24699,24827,24993,25927,27979,28204,31527,31574,31582,31604,31651,33629,33815,33844,34011],"guǎ":[20878,21072,21102,21479,23521],"mào mò":[20882],"gòu":[20883,21826,22392,22434,22815,22816,23230,24384,25606,25728,26500,27083,29049,35247,35279,35389,35436,35807,36092,36141,36952,38602],"xǔ":[20884,21923,26250,26665,29661,30440,31944,35425,35583,35817,37158,37265],"mì":[20886,20906,22055,22611,23483,23494,23770,24130,24142,24166,24637,27027,27154,27329,27752,28135,28405,28446,28631,29072,32643,34084,34588,35219,35220,35227,35269,35600,35879,40719],"yóu yín":[20888],"xiě":[20889,20905,34267],"jūn":[20891,21531,22343,26750,27758,30386,30392,30393,30853,33689,34448,34944,35232,36557,37406,37505,37534,37717,38055,38965,39862,40106,40591],"mí":[20894,25823,28720,29218,29461,29564,31074,31152,32315,33982,34252,34346,34364,34990,35448,35598,36855,37274,37310,37311,37316,38270,40461,40586,40587,40603],"guān guàn":[20896,35212,35251,35264,35266],"měng":[20897,21200,25077,25529,29467,29556,33355,34594,34835,37683,38192,39917,40710],"zhǒng":[20898,22618,23600,27505,28996,30215,32959,33131,36405],"zuì":[20899,23989,26220,26368,26668,27100,27271,27276,31101,32074,32618,34142,36768,37204,37243,37257,37642],"yuān":[20900,21064,22246,23357,23491,26857,28149,28161,28166,28170,28181,28737,30498,32921,33918,33964,34574,34613,39372,40182,40219,40311,40482,40499,40531,40728,40733],"míng":[20901,21517,26126,26269,26393,27040,27962,28319,29501,30464,30515,30609,33559,34719,35245,35450,37133,37528,38125,40180,40483],"kòu":[20902,21481,23484,23495,25187,25922,28401,31387,31576,31750,34098,34107,37350,40391],"tài":[20909,22826,22835,24562,24577,24907,27760,27761,27888,28313,32957,33318,37214,37414,38043],"féng píng":[20911,39342],"chōng chòng":[20914],"kuàng":[20917,22329,22745,23730,25068,26103,26175,26336,26694,27841,29196,30486,30518,30719,30783,31014,31340,32075,32086,32394,32425,36026,36150,36582,37021,37178,37489,37595,37979,40651],"lěng":[20919],"pàn":[20920,21028,21467,27804,27886,28351,28813,29257,30036,30460,32833,34978,35195,35402,37612,38011,38934,40293],"fā":[20921,24386,27831,30330,30332],"xiǎn":[20924,23583,23584,23812,23982,24176,25863,26174,27382,27624,28774,28877,29177,29405,29443,29547,29550,29569,31122,31557,31666,34259,34330,34476,34566,35683,36219,36323,37708,38505,38522,38570,38853,38997,39023],"qià":[20926,22326,24098,24688,27534,27965,30792,32994,39618],"jìng chēng":[20928,20936,28136],"sōu":[20929,21974,24256,24267,25436,25628,25673,28338,29504,33368,33936,34699,37131,37273,37802,38204,39100,39125,39231,39306,39466],"měi":[20930,23172,23226,23309,23876,25396,27598,27599,28028,28220,29144,32654,36542,37762,38209,40675],"tú":[20931,22259,22270,22294,22295,22615,23648,23801,23902,24233,24284,24466,24711,25580,28034,30223,31585,33135,33660,33956,36351,36884,37236,37423,37710,39327,39420,40268,40351,40395,40437],"zhǔn":[20934,20950,22523,28310],"liáng liàng":[20937,28092,37327],"diāo":[20939,20993,21023,21500,22877,24372,24427,27720,29745,30857,31763,34413,34497,35970,37677,38613,39817,39899,40119,40304,40742],"còu":[20945,28234,33120,36659,36751],"ái":[20946,21824,22026,25457,28336,30284,30353,30362],"duó":[20953,21099,22842,22890,30181,36401,37420,37944,38094],"dú":[20959,21301,23355,26911,27357,27568,28060,29261,29272,29322,29346,29420,29544,29892,30398,35067,35501,35712,35743,35908,36117,37654,37983,38855,38883,38885,39475,39633,40681,40695],"jǐ jī":[20960],"fán":[20961,20962,20963,21285,22694,26443,26569,26853,27146,28735,28902,29033,29140,29856,30718,31020,31538,31861,32208,32691,33316,33319,34208,34345,34844,35150,36463,37353,37895,37922,38034,40429],"jū":[20965,21258,23093,23150,23621,23820,25221,25398,25516,26798,26896,27275,27625,27633,27843,28090,29401,29722,30141,30752,32605,33106,33357,34587,35070,35530,36308,36376,36537,38513,38606,38816,38827,39378,39545,39816,40225,40331],"chù chǔ":[20966,22788],"zhǐ":[20970,21159,21675,22336,22375,24075,24649,25210,25351,26088,26547,27490,27750,27802,27924,28157,30139,30731,31049,31190,32025,32440,33463,33547,34274,34937,35175,35368,36286,36601,36725,37231,38447,40697],"píng":[20973,20980,21615,22378,22592,23740,24097,24114,24136,24179,24959,24977,26544,27956,28969,29622,29942,29953,31470,31667,31752,32574,33619,33805,34033,34482,34530,35413,35780,36607,36647,37105,39811,40070],"kǎi":[20975,20977,21056,21108,22450,22607,24698,24887,24936,26271,33928,36614,37703,37799,38112,38196,38355,38399,39101],"gān":[20978,22377,23602,23604,23606,23607,26577,27860,28455,29589,29976,30131,30712,31487,31608,31891,32925,33527,36800,37200,39760],"kǎn qiǎn":[20981],"tū":[20984,22551,23936,25464,28043,28261,30172,31167,31171,31361,33878,37621,40282,40757],"āo wā":[20985],"chū":[20986,21021,23680,25716,27019,27159,35993,40803],"dàng":[20988,22325,22449,22731,26723,27284,27705,29847,29949,30442,30602,30720,30893,30993,31772,33633,33770,34153,34351,36260,36927,38652],"hán":[20989,20990,21547,22277,23074,23506,23841,26199,26770,27995,28085,28559,28947,29696,29981,31592,34604,37015,37039,37601,38867,38889],"záo":[20991,38015],"dāo":[20992,20994,24521,27672,33312,34729,37334,39771,40061],"chuāng":[20997,25680,29262,29269,30126,30241,31379,31383,31419],"fēn fèn":[20998],"qiè qiē":[20999],"kān":[21002,21208,22570,25121,26654,40853,40859],"cǔn":[21004,24534],"chú":[21005,21416,24174,24282,27249,27337,27365,28353,29331,31720,32801,33467,33954,33965,34573,34805,35936,36238,36464,36487,36501,37455,37604,38148,38500,38607,38619,40373],"huà huá":[21010],"lí":[21013,21075,21114,21145,21400,21937,22175,22212,23264,23415,24306,24737,26792,26808,26819,28435,28757,29313,29314,29432,29709,29827,29896,30432,30557,31163,31346,31472,31587,31729,31852,31950,32301,32545,32633,33347,33650,33758,34016,34110,34268,34362,34570,34765,34808,34859,35125,35623,35981,37288,37611,37637,37867,37975,38626,39530,39562,39887,39916,40058,40097,40313,40477,40514,40654,40679],"yuè":[21014,23347,23684,23731,23997,24689,24709,24742,25097,25224,25459,26376,27198,28729,29210,29605,31039,31156,31703,31814,31845,31856,31908,31925,34341,34446,34447,35500,36234,36288,36291,36493,36559,37381,37470,38e3,38074,38321,38322,38405,40465,40473,40678,40864],"liú":[21016,21129,22176,23225,23911,26056,26066,27060,27210,27969,27983,28687,29705,29792,29804,29858,30020,30041,30065,30081,30244,30277,30827,33957,33989,34761,35031,37775,37840,37890,38240,39104,39109,39127,39392,39413,39470,39505,39581,39969,40377,40544,40589],"zé":[21017,21063,21863,22038,23271,24123,24152,25246,27149,27509,27810,27854,28333,30367,30612,30688,30987,31654,31744,33332,34102,34828,35159,35630,36094,36188,36846,40453,40794,40816],"chuàng chuāng":[21019,21109],"qù":[21022,21434,21435,38324,38339,38418,40622,40705],"bié biè":[21029,21035],"páo bào":[21032],"chǎn chàn":[21036,21079,24157],"guā":[21038,21120,26736,27460,29041,29916,32973,36411,39082,39091,39463,40240,40505],"gēng":[21039,24218,26921,28013,28991,30026,32090,32686,32697,32789,33774,36065,36179,40330,40530],"dào":[21040,22133,24764,26913,27300,29182,29913,30423,30428,31282,31291,32411,32767,33364,33791,34908,34911,36551,36947],"chuàng":[21041,21071,21081,24582,24884],"kū":[21043,21741,22288,22528,26543,26701,30715,31391,36301,37056,39607,39852],"duò":[21044,21057,22703,23598,24816,24988,25349,26711,33333,36325,36346,38474,38479,39167,39283,40317],"shuā shuà":[21047],"quàn xuàn":[21048],"chà shā":[21049,21070],"cì cī":[21050],"guì":[21053,21055,21130,21132,25740,25904,26123,26690,26914,27126,27195,27331,29476,31148,31552,34005,35160,36020,36149,36330,37888,37966,38844,40022,40037],"lóu":[21061,23044,23105,24276,27004,27155,28295,28426,29089,32807,32812,33371,33932,34078,34684,34747,35633,36545,36977,38843,39621,39631],"cuò":[21065,21074,21405,22798,25387,25514,26852,33693,33697,33996,36906,37564,37679,38153,38169],"xiāo xuē":[21066],"kēi kè":[21067,23557],"là lá":[21068],"tī":[21076,26799,36386,37563,38161,40392,40393],"pōu":[21078],"wān":[21084,22598,22762,24117,24367,24398,28286,28523,28771,30549,34623,35916],"bāo bō":[21085,21093],"duō":[21087,21636,21702,22153,22810,22811,25479,27634,30035,35056],"qíng":[21088,21197,22813,24773,25806,26228,26258,26878,27144,27296,27696,29984,30808,33885,40677],"yǎn shàn":[21089],"dū zhuó":[21090],"yān":[21094,23267,23846,23958,24697,25045,25064,27182,28106,28153,28473,28895,28937,28945,29017,29658,31734,33005,33241,33784,37154,37251,38329,38409,40683],"huō":[21096,21136,21529,25865,31220,32800,38186,39454],"shèng":[21097,21104,21213,22307,22701,23882,26208,27066,27251,29726,32854,34114,36025,36088],"duān zhì":[21100],"wū":[21101,21596,21978,22316,23627,24043,24345,26439,27469,27737,27738,27745,27967,28879,31375,31676,34704,35464,35491,35820,37036,37140,37794,38056,39966,40238],"gē":[21106,21733,22314,24385,25096,25107,25128,27468,28370,29365,32912,35004,35596,37814,40218,40255,40509],"dá zhá":[21107],"chuán":[21110,26295,26941,31685,33313,33321,33337,36658,36932],"tuán zhuān":[21112,28441,31743],"lù jiū":[21113],"pēng":[21115,21257,22061,24614,24690,25256,26760,28921,30768,36591,39373],"piāo":[21117,21217,24915,26074,29349,32754,34741,39107,39108,39128,39762],"kōu":[21118,24388,25248,25715,30477,30616,33444],"jiǎo chāo":[21119,21131,21222,25719],"qiāo":[21121,21226,22685,24167,25970,27207,27587,29126,30807,30973,32337,36268,36343,36365,36474,36475,37115,37153,37157,37739,37740,37936,38201,38941],"huá huà":[21123],"zhā zhá":[21124],"pī pǐ":[21128,24706],"tāng":[21135,22049,32688,34202,34666,36442,38842,40734],"chán":[21142,22197,22757,23157,23307,24009,24283,26830,27610,28281,28537,28538,28598,28685,28730,29016,29521,30939,32254,32399,32402,32544,33388,34633,34768,34796,34814,35479,35730,35863,36500,37181,37185,37579,38001,38261,39262,39307],"zuān":[21143,36508,36518,37446,37978],"mó":[21144,23275,23332,23351,23579,25721,25845,27205,31970,33180,34278,34321,35624,35625,35871,39235,39261,39309,39629,39764,39801],"zhú":[21146,26040,26351,27416,28767,28834,28891,29165,29221,30211,31481,31489,31516,33331,33599,34027,34827,34878,36485,36880,36907,38019,40001],"quàn":[21149,21223,21240,29302,38863],"jìn jìng":[21156,21170,21185],"kēng":[21157,22353,29308,30785,30812,35481,37557,37726,37847,38143,38444],"xié liè":[21158],"zhù chú":[21161],"nǔ":[21162,24361,30766,33004],"shào":[21165,21362,21736,28530,32057,32164,32461,34961,37045],"miǎo":[21168,26474,28156,28218,30471,31186,31694,32242,32520,34256,37e3],"kǒu":[21174,21475],"wā":[21176,22380,23090,23207,23666,25366,25896,27964,28315,28453,29950,30038,31349,31370,31402,34521,38856,40707],"kuāng":[21179,21281,21289,21712,24647,27949,31568,31610,35462,35795,36589,37052],"hé":[21182,21642,21853,22976,23750,25926,26359,26567,26945,27644,27827,28088,28206,28565,29062,30380,30407,30409,30413,30418,31166,31701,31866,31917,32750,33743,33794,35208,35384,35429,37059,37339,37452,37961,38305,38356,38402,38422,38824,38940,39172,39288,39802,40534,40615,40789,40833,40866],"gào":[21186,21567,21578,23804,31086,31088,31134,31606,35493,35824,37084,37615,38150],"bó bèi":[21187],"láng":[21190,23247,24266,25999,26745,27028,27139,27444,29436,29701,29807,30816,31234,33350,33992,34571,34690,36532,37074,37086,37571,37807,38162],"xūn":[21195,21211,21234,21235,22161,22339,22489,22628,22734,22758,26331,29179,29551,30660,32385,33232,34219,34224,34317,37306],"juàn juān":[21196,29945],"lè lēi":[21202],"kài":[21203,28812,28887,37774],"wěng yǎng":[21212],"qín":[21220,21994,22105,23964,24200,25027,25028,25446,25810,26035,27278,28607,29665,29748,29753,30269,31165,31206,32825,33449,33465,33766,34707,34820,37401,37419,38594,38770,40185,40301],"jiàng":[21221,21278,21280,23929,24348,24374,25726,27364,27930,28400,29343,31969,31976,32115,32475,35645,37233,37284,37292],"fān":[21227,23311,24070,24161,24539,24995,26073,26075,32345,32763,34281,36691,39103,39132,40021],"juān":[21228,23010,23071,25424,28051,34866,35024,37816,37931,38220,40515],"tóng dòng":[21229,28884,29137,29418],"lǜ":[21236,22415,23874,24459,24942,27695,28388,28670,29192,31675,32160,32322,33183,33870,34385,37986],"chè":[21238,22396,24443,24505,25507,25764,28552,28898,29217,30638,30825,32837,36832,38937],"sháo":[21242,29631,38902],"gōu gòu":[21246],"cōng":[21254,22250,22257,24553,24625,24740,26288,27180,28439,29821,29825,30619,31733,32369,32865,32870,32874,32880,33473,33552,33905,34031,34085,34764,37743,37843,37862,39448,39492,39586],"táo yáo":[21259,38518],"páo":[21263,21638,22409,24214,29230,29389,34957,35100,36595,38788,40581],"dá":[21266,22962,24603,28831,29173,30051,31530,32653,33625,34200,34813,35418,36798,36815,36822,36826,36921,36948,37949,38780,38801,38851,40854,40856],"huà huā":[21270],"běi bèi":[21271],"nǎo":[21272,22452,22550,23248,24700,24745,24817,29785,30895,33041,33075,33126],"chí shi":[21273],"fāng":[21274,22543,26041,28115,29285,33459,37025,37377,37690,38059,40203],"zā":[21277,21634,24064,27806,33244,33250,36810,37460,39795],"qiè":[21287,21394,22974,24623,24719,24812,24860,25352,31317,31363,31434,31521,31655,31691,31841,36389,37733,38194,39900],"zāng cáng":[21288],"fěi":[21290,22876,24753,26832,27047,31706,32737,34140,35513,35837],"kuì guì":[21294,21297],"suǎn":[21300],"pǐ":[21305,22141,22189,22318,24192,30174,30294,33076,33481,37538,40196],"qū ōu":[21306,21312],"kē qià":[21308],"yǎn yàn":[21309,26858],"biǎn":[21310,24828,25561,30885,31272,31366,34250,35082,36022,36140,40216],"nì":[21311,22532,23263,23354,24772,24885,26165,26289,27708,30500,30568,32268,32978,33147,33193,36870],"niàn":[21316,21816,22493,24319,24565,24791,33356],"sà":[21317,27346,33038,33832,34159,34217,37394,38561,39087,39122,39354],"zú":[21318,21739,23850,26063,31652,36275,36388,38238],"shēng":[21319,21583,22768,26008,26119,26363,26529,27525,27881,28262,28986,29298,29636,29983,29989,31444,31513,32882,37454,37727,38441,38494,38521,40319,40746],"wàn":[21325,21328,24552,26468,30627,33045,33109,33836,34755,36110,36624,37693],"huá huà huā":[21326,33775],"bēi":[21329,24754,25593,26479,26734,30403,30865,34275,40303,40526],"zú cù":[21330],"dān shàn chán":[21333,21934],"nán nā":[21335],"shuài lǜ":[21339],"bǔ bo pú":[21340],"kuàng guàn":[21341],"biàn":[21342,21464,22793,23749,24321,24487,24557,25219,26154,27763,27764,29603,33361,33476,35213,35546,35722,36769,36775,36776,36777,36779,36782,36783,36941,37318],"bǔ":[21343,21754,25429,34917,35036,40468],"zhàn zhān":[21344,35249],"kǎ qiǎ":[21345],"lú":[21346,22183,22406,22746,24208,24300,26341,26534,26636,27368,27896,28696,28809,29200,29561,29576,29904,30439,30673,31834,32401,32591,33002,33242,33326,33339,33387,33446,34310,34854,36708,36723,37417,37994,39025,39045,39359,39639,39794,40056,40072,40469,40492,40696],"lǔ":[21348,22647,25523,25796,27152,27257,27347,27660,28407,28571,28674,30837,30944,31326,33379,33386,34046,34383,34396,37824,37930,37989,38245,39791,40065,40565],"guà":[21350,21865,25346,25499,32611,35074,35455,35798],"áng yǎng":[21356],"yìn":[21360,22461,22583,24277,24941,24982,24983,25050,27925,28250,29452,30282,32996,33562,37235,39843],"què":[21364,21371,22617,23813,24747,24872,24932,25609,27063,29161,29751,30389,30830,30906,31021,38347,38421,40306,40522],"luǎn":[21365],"juàn juǎn":[21367,24059],"chǎng ān hàn":[21378],"wěi yán":[21379],"tīng":[21381,21403,21548,24193,24304,24307,27712,28867,28916,32142,32787,32884,32892,32893,38803],"zhé zhái":[21383],"hàn àn":[21384,23677],"yǎ":[21386,21782,24204,30166,30210,34149],"shè":[21389,21401,24381,24913,24948,25086,25666,27399,28041,28091,28169,28384,28740,31038,33294,34062,34818,35373,35774,36198,39431,40605],"dǐ":[21390,21607,22360,24356,25269,25310,25483,29300,30757,33767,35293,35398,35787,36583,37048,38458,39606,39923],"zhǎ zhǎi":[21391],"páng":[21392,23246,24222,24492,33152,33341,34691,36868,39967,40145,40846,40848],"zhì shī":[21396],"máng":[21398,21506,21732,23055,24537,24702,26455,26471,27730,27997,29307,30173,30450,30829,31488,33426,33579,34313,37017,37359,37609,38099,39417],"zuī":[21404,27190,32407,34773],"shà xià":[21414,24264],"áo":[21419,22007,22008,24274,25942,28406,29522,29523,29832,32753,32758,32762,32881,34076,34735,35639,35640,36968,37846,38558,39986,40140,40404,40711],"lán qiān":[21425],"sī mǒu":[21430],"gōng hóng":[21431],"lín miǎo":[21432],"qiú róu":[21433],"dū":[21438,22047,30563,37263],"xiàn xuán":[21439,32291],"cān shēn cēn sān":[21442,21443,21444,21445],"ài yǐ":[21446],"chā chà chǎ chá":[21449],"shuāng":[21452,23360,23367,27398,31029,33389,38617,38684,39483,39526,39590,40414,40472,40564],"shōu":[21454,25910],"guái":[21455],"bá":[21456,22957,25244,25300,28838,30329,32968,33543,33757,35417,36299,36599,39747,40741],"fā fà":[21457],"zhuó yǐ lì jué":[21461],"qǔ":[21462,23094,31468,34682,35411,40818,40843],"jiǎ xiá":[21466,24486],"wèi yù":[21470,23561,34074],"dié":[21472,22436,22558,23756,24137,24654,24821,25116,26337,27548,27662,29251,29266,29918,30067,30082,30089,30090,30879,32112,32470,32778,32779,32965,33363,33525,34600,34678,35083,35396,35548,35853,36334,36416,36845,38267,39944,40125,40233],"ruì":[21473,26520,27757,29790,30591,33454,34443,34617,37555,37613,38160],"jù gōu":[21477],"lìng":[21478,21604,28841,34342],"dāo dáo tāo":[21480],"zhī zhǐ":[21482],"jiào":[21483,21580,22018,22054,22093,23315,25997,26016,28376,28438,29541,29651,30381,31382,34272,35334,35685,36269,36611,36686,36735,36739,37237,37294,37314],"zhào shào":[21484],"kě kè":[21487],"tái tāi":[21488,33492],"pǒ":[21493,23552,31544,31653,37461,38071,39370],"yè xié":[21494],"hào háo":[21495],"tàn":[21497,22022,25506,27470,28256,28845,30899,33301],"hōng hóng":[21503],"miē":[21504,21673,21750,23405],"xū yū yù":[21505],"chī":[21507,21735,21931,21988,22084,22939,23224,24424,24434,25691,25889,27558,29947,30196,30305,30517,30621,31518,31898,33013,34473,34733,35381,39761,40223,40260,40497,40656,40797],"xuān sòng":[21509],"yāo":[21510,21907,22829,22934,24186,26950,27520,31045,33136,33917,35358,36992,40193,40226],"zǐ":[21511,22985,22986,23376,26445,26771,27039,27252,28371,30711,31213,31531,31869,32043,32788,34424,35391,37352],"hé gě":[21512,40068],"cùn dòu":[21515],"tóng tòng":[21516],"tǔ tù":[21520,21771],"zhà zhā":[21522,22867],"xià hè":[21523],"ā yā":[21526],"ma má mǎ":[21527],"lìn":[21533,24673,24715,27209,28955,29968,33190,34106,34298,36035,36161,36472,36495,36505,36522,36709,38325],"tūn":[21534,26302,26396,28958],"bǐ pǐ":[21537],"qìn":[21538,21539,21786,25227,25599,25607,25779,27777,28697,33763,34301],"jiè gè":[21540],"fǒu pǐ":[21542],"ba bā":[21543],"dūn":[21544,22136,22697,22698,24775,25737,25780,29340,29540,30981,34611,36478,39504],"fēn":[21545,24073,26128,26374,26788,26875,27675,31445,32027,32439,32706,33452,34927,35356,36526,37210,37398,38640,39220,39257,39322],"é huā":[21546],"kēng háng":[21549,22932],"shǔn":[21550],"zhī zī":[21553],"yǐn shěn":[21554],"wú":[21555,21556,21577,22706,23807,26791,27206,27595,27926,28015,28961,29688,29841,31078,33436,33571,33665,34154,34568,34801,35669,37082,37593,38139,39875,40272,40417,40512,40751],"chǎo chāo":[21557],"nà nè":[21558],"xuè chuò jué":[21559],"chuī":[21561,28810,40865],"dōu rú":[21562],"hǒu":[21564,29372],"hōng hǒu ōu":[21565],"wú yù":[21566],"ya yā":[21568],"è e":[21571],"dāi":[21574,25051,29507],"mèn qǐ":[21575],"hōng":[21581,22173,25544,28788,28888,28962,30817,34216,35335,35902,36579,36663,36703,36720,37735],"nà":[21584,25466,31517,32013,32435,32941,33971,34930,35965,35968,36572,37069,37385,38048,38777,39798],"tūn tiān":[21585],"fǔ ḿ":[21586,22072],"dāi tǎi":[21588],"ǒu ōu òu":[21589],"bài bei":[21591],"yuán yún yùn":[21592,21729],"guō":[21593,21871,22035,22490,22557,22670,23838,24393,24397,25046,29459,30225,32850,34632,34760,37101,37403,37707,38149],"huá qì":[21594],"qiàng qiāng":[21595,36292],"shī":[21598,22833,23608,23629,24072,24107,26045,27977,28260,28287,28334,28348,28629,29422,29509,29793,32065,33913,33938,33997,34417,34664,35127,35193,35433,35799,37055,37315,37447,37734,39924,39972,40122,40178,40190,40371,40484],"juǎn":[21599,22477,33223,33764,37640,38185],"pěn":[21600,32760],"wěn mǐn":[21601],"ne ní":[21602],"ḿ m̀ móu":[21603],"rán":[21605,22059,28982,29123,32334,32944,34470,34490,34939,34951,34977,39653,39663],"tiè chè":[21611],"qì zhī":[21614],"zǐ cī":[21616],"guā gū guǎ":[21617],"cī zī":[21618],"hǒu xǔ gòu":[21620],"hē ā á ǎ à a":[21621],"náo":[21622,22802,23793,23977,24014,25376,25747,29489,30791,34546,34799,35401,35658,37891,38105],"xiā gā":[21623],"pēi":[21624,24588,32935,32986,34883,37253],"háo xiāo":[21626],"mìng":[21629,25525],"dá dàn":[21630],"zuǐ jǔ":[21632],"xián gān":[21633],"pǒu":[21637,21731,29315],"yǎng yāng":[21641],"zǎ zé zhā":[21643],"hé hè huó huò hú":[21644],"hāi":[21645],"dā":[21649,21714,22112,22710,25645,25752,32823,35105,37789],"kǎ kā":[21652],"gū":[21653,21762,21763,22993,23284,23396,24044,24045,26599,27245,27837,27858,31250,31519,31629,31643,31696,32603,33533,33735,33776,33991,35290,36593,36594,36721,36764,37220,37426,39829,40227,40490],"kā gā":[21654],zuo:[21655],"lóng":[21657,22184,23952,24003,24004,26173,26344,26407,26634,27102,27379,28272,28381,28427,29206,29649,29903,30275,30508,30675,30779,31025,31026,31423,31452,32843,32894,32999,33551,34338,34858,34860,35185,35909,37863,37992,38707,38727,39521,40471,40845,40850,40857],"xiàn xián":[21662],"qì":[21664,21805,22096,22120,22817,24323,24967,25001,26275,26820,27435,27668,27671,27683,27732,27773,27875,28230,28231,28801,29960,30453,30709,30875,30902,30940,30951,32586,33438,33914,34258,34815,35350,35755,36804,37905],"xì dié":[21669],"liē liě lié lie":[21671],"zī":[21672,21982,22997,23039,23388,23411,23414,23856,23915,26661,26900,28100,28285,28363,28588,29574,31116,31222,31906,32014,32199,32213,32387,32513,33546,33586,33880,35566,35864,36018,36039,36160,36164,36220,36241,36262,36636,36666,36750,37137,37421,37657,37759,37793,38193,38211,38974,38975,39661,39892,39974,40123,40325,40722,40781,40796,40839],"mī":[21674],"jī xī qià":[21677],"gē luò kǎ lo":[21679],"shù xún":[21680],"zán zá zǎ zan":[21681],"hāi ké":[21683],"huī":[21684,22085,22101,23118,23176,24145,24509,24674,25339,25381,25582,26198,26249,26958,27907,28680,28784,28787,28899,30579,31112,32730,32748,34355,34950,35096,35452,35801,35927,36637,36745,39988,40638],"huài shì":[21686],"táo":[21687,21845,26691,27310,27950,28120,31097,32175,32505,33796,34602,35050,36847,36867,37252,37630,38784,38793,39232,39395,39434,40727],"xián":[21688,21859,23092,23097,23153,23244,23290,23291,24358,25382,25743,28046,28282,28566,29961,30187,30279,30286,32067,32984,33335,34262,34495,34525,34900,34904,35512,35572,36066,36114,36132,36657,37262,37532,37990,38289,38386,40435,40436,40444,40519,40569,40601],"è àn":[21689],"xuān xuǎn":[21690,28892],"wāi hé wǒ guǎ guō":[21692],"yàn yè yān":[21693],"āi":[21696,21710,22467,28350,37552,37764,38207],"pǐn":[21697,27008],"shěn":[21698,23158,23352,23457,23479,23529,24350,26315,28182,28683,30635,30692,30695,35262,35360,35543,35717,35842,35849,37029,38947,39787],"hǒng hōng hòng":[21700],"wā wa":[21703],"hā hǎ hà":[21704],"zāi":[21705,26685,28221,28328,28797,28798,28886,30581,36083],"dì diè":[21707],"pài":[21708,27808,27966,28178,28227,33934,37763],"gén hěn":[21711],"yǎ yā":[21713,38597],"yuě huì":[21717,22118],"nián":[21718,24180,31178,31205,39822,39920,40071,40118,40263,40655],"huá huā":[21719,22057],"jì jiē zhāi":[21724,22156],"mōu":[21726],"yō yo":[21727,21938],"lòng":[21730,26759,36122],"ò ó é":[21734],"lī lǐ li":[21737],"nǎ na nǎi né něi":[21738],"hè":[21740,22414,22737,23497,24786,28931,28994,29178,29184,30283,30859,32751,35088,35614,36032,36154,36203,38733,38734,38735,40372,40470,40548],"bō pò bā":[21745],"zhé":[21746,21856,21894,22174,22481,24714,25722,26210,26211,27517,30714,30739,30932,31863,31885,34420,34544,34756,34985,35423,35627,35642,35713,35723,35882,36626,36633,36685,36740,36761,39871],"liàng láng":[21748],"liè lǜ":[21751],"hān":[21755,25e3,34486,35901,37219,38919,39032,39328,39805,40766],"hēng hng":[21756],"gěng":[21757,22466,23802,25389,26775,32134,32480,32831,33668,37088,39614,39873,40096],"chuò yuè":[21758],"gě jiā":[21759],"bei bài":[21764],"hán hàn":[21765],"chún":[21767,28017,28283,28387,28440,29321,32020,32431,33059,33724,33939,34036,37255,37269,37662,38489,39897,40329,40529],"ài āi":[21769],"jiá qiǎn":[21770],"yán dàn xián":[21772],"chē":[21779,30743,30824,33687,34556],"wú ńg ń":[21780],"zào":[21781,21795,22122,24933,26765,28790,29040,29157,30337,30338,31427,31432,31753,33345,35679,36270,36481,36896],"dí":[21785,21831,22016,22145,23265,24312,25932,25973,26769,28068,28364,29380,31515,31860,31988,33494,33659,34059,34064,34273,35263,35276,35956,36842,38766,38932,39344,39650,40464],"gòng hǒng gǒng":[21789,21962],"dóu":[21790],"lào láo":[21792,22062,24998],"huàn":[21796,21914,22850,22864,23462,23880,24187,24739,24844,25442,25563,25808,25868,26777,27125,28003,28067,28185,28470,28579,28873,28949,29029,29773,30186,30227,30534,32914,34279,35938,36696,36909,39879,39926,39936,40105],"léng":[21797,22596,26974,30864,34192],"wō wěi":[21801],"fěng":[21802,35202,35575,35773],"yín jìn":[21803],"hǔ xià":[21804],"wéi":[21807,22260,22285,22749,23767,23774,23916,24079,24119,24131,24799,26693,27817,27912,28064,28235,28296,28493,28505,28543,28656,29353,30656,32173,32500,34038,35257,36829,36949,37164,37248,37711,38344,38385,38859,38886,39840],"shuā":[21808],"chàng":[21809,24581,24757,26274,28987,30021,30076,35503,38868,39727],"ér wā":[21810],"qiàng":[21812,28829,29079,32699],"yō":[21815],"yū":[21817,28132,30208,30419,31626,32006,32417,36796,36802,36803,38483],"lài":[21819,28625,28712,28716,30302,30313,30544,30558,31809,31839,34302,36058,36084,36169,36182,38972,38978,40291],"tuò":[21822,23966,26589,27620,27643,31656,31836,33818,34304,36293],"zhōu zhāo tiào":[21825],"kěn":[21827,22438,22718,24691,25031,32910,32943,32955,35940,37689],"zhuó zhào":[21829,28655],"hēng hèng":[21832,24729],"lín lán":[21833],"a ā á ǎ à":[21834],"qiāng":[21836,22004,23944,25109,25700,26024,26538,27085,28332,29252,29456,29511,32652,32663,33108,34595,35602,37848,38166,38197],"tūn zhūn xiāng duǐ":[21837],"wèn":[21839,22927,25598,25653,29882,38382,38992],"cuì qi":[21840],"dié shà jié tì":[21841],"yuē wā":[21848],"zǐ cǐ":[21849],"bǐ tú":[21850],"chuò chuài":[21852],"yǎ yā è":[21854],"fēi":[21857,23123,23124,25161,26243,28164,29446,32203,32495,35062,38671,38750,38751,39131,39133,39134,39205,39329,39441,39451,39905,40113],"pí":[21860,22720,26503,27607,27608,28983,29749,30130,30382,31738,32628,32646,33086,33111,33165,34445,34493,34609,34743,34863,35964,35988,37099,37433,38448,38516,38566,39790,39821,40079,40295,40729],"shá":[21861],"lā la":[21862],"yīng qíng":[21864],"pā":[21866,22929,33317,33897,36276],"zhě shì":[21867],"sè":[21868,21959,25038,25804,26652,27502,28073,28171,28544,28545,28615,28623,28690,29791,29873,30263,31313,31329,31343,32364,35653,36694,37547,37884,38127,39115],"niè":[21870,21995,22107,22169,22209,22227,22332,23420,23421,23922,23981,24021,24071,25948,26559,27127,27377,28037,28284,30150,31710,31819,31985,31989,32834,32886,33260,33266,34326,34853,35736,36354,36375,36377,36433,36513,37660,37811,37960,38007,38016,38218,38221,38353,38503,38537,39027,39070,40807],"luō luó luo":[21872,22217],"tān chǎn tuō":[21876],bo:[21877,34068],"dìng":[21878,23450,26903,30708,30855,30880,30968,32866,33114,33827,34634,35330,35746,37664,38189,38977,39139,39268],"lāng":[21879],"án ān":[21885],"kā":[21888,25814],"yóng yú":[21889],"lā lá lǎ":[21895],"jiē":[21896,21948,21983,22566,23192,25509,25522,25809,28253,29039,30102,30158,30308,30342,31224,31277,33083,34644,34903,35631,38454,38542,38786,40347],"hóu":[21897,24127,29492,30218,30586,31692,31943,32749,33876,37127,37741,39217,39610,39928],"dié zhá":[21899],"wāi":[21902,27498,31477],"nuò rě":[21903],"xù huò guó":[21904],"zán":[21906],"wō ō":[21908],"hú":[21910,22045,22251,22774,22775,22778,23209,24359,25648,26011,26972,27122,28246,28715,28928,29043,29392,29474,29786,29939,31670,32087,32288,32993,33899,34075,34676,34716,34906,35315,37264,37752,38966,39212,39693,39793,39959,40288,40344,40358,40533],"huàn yuán xuǎn hé":[21915],"xǐ":[21916,22221,22736,23651,24473,24985,26546,27250,27478,28423,29626,29885,30678,31143,32304,33864,33912,34032,34786,35601,36445,36519,37410,37480,37481,40026],"hē hè yè":[21917],"kuì":[21919,22067,23231,23303,24870,24871,24978,31697,31779,31812,32873,32877,32885,33197,34146,35593,39229,39243,39304],"zhǒng chuáng":[21920],"wéi wèi":[21921,28858,29234],"duó zhà":[21925],"sāng sàng":[21930],"qiáo jiāo":[21932],"pèn bēn":[21935],"cān sūn qī":[21936],"zhā chā":[21939],"miāo":[21941],"pēn pèn":[21943],"kuí":[21945,22804,22862,24025,25123,25542,26182,26252,26959,26961,27334,29354,30589,33909,34248,34359,34369,34672,36520,36917,37128,37736,37751,38959,39319,39460,39577,39745],"lou lóu":[21949],"zào qiāo":[21951],"hè xiāo xiào hù":[21955],"á shà":[21956],"xiù":[21957,23723,23744,28340,29659,29703,29843,31168,32137,32333,32353,32483,34705,34966,35086,35087,37561,37861,37885,38152,40773],"qiāng qiàng":[21958,25111,25127,36428,36449],"ài yì":[21964,33406],"má mǎ ma":[21966],"kè kē":[21969],"dā tà":[21970,37769],"sǎng":[21971,25633,30921,35116,37791,39001,39073],"chēn":[21972,25275,29723,30603,35523,35603,36061,37108],"wā gǔ":[21975],"pǎng bēng":[21977],"xián qiǎn qiān":[21979],"lào":[21984,23274,27247,28061,28551,32802,32814,36540,36546,37226],"wēng":[21985,32705,32876,34697,37779,40370,40543],"wà":[21986,33149,33155,34972,35178,38884],"hēi hāi":[21992],"hē":[21996,27441,34842,35382,35779],zi:[21997],"sǎi":[21998],"ǹg ńg ňg":[21999],"gě":[22e3,33336],"ná":[22001,25295,25343,37823,38222],"diǎ":[22002],"ài ǎi āi":[22003],"tōng":[22005,27147,28853,34026],"zuī suī":[22010],"zhē zhè zhù zhe":[22011],"mò":[22012,22333,22651,22696,22970,23292,23518,24094,26153,26411,26554,27519,27521,27819,28448,29189,29519,30268,30348,30525,30527,30608,30617,30750,31027,31203,32072,32390,32817,33545,33672,34022,34536,34772,35971,35978,35992,37510,37836,38214,38476,38778,39488,39785,40664,40665],"sòu":[22013,30262],"tǎn":[22015,22374,24528,25011,25019,26298,27631,29870,33788,34962,35170,37267,37485,38077],"jiào dǎo":[22020],"kǎi gě":[22021],"shān càn":[22023],"cáo":[22024,23942,26361,26362,27133,28437,33370,34040,34732,35135,37866],"piào":[22028,24497,34056,39491],"lóu lou":[22029],"gǎ":[22030,23573,29581],"gǔ jiǎ":[22031],"jiāo xiāo":[22032],"xū shī":[22040,22099],"pó":[22041,22185,23110,27335,30372,37169],"dē dēi":[22042],"ma má":[22043],"lē lei":[22046],"gā gá gǎ":[22048],"sāi":[22053,22139,27618,33134,38987,39955],"zuō chuài":[22060],"cháo zhāo":[22066,26397,40706],"zuǐ":[22068,22143,23946,29883],"qiáo qiào":[22074,32761,35887],"chù xù shòu":[22076],"tān chǎn":[22077],"dàn tán":[22078,24382,24392,24788,28601],"hēi mò":[22079],"ě":[22081,30760,38923,39424,40264],"fān bo":[22083],"chuáng":[22087,24202,29248],"cù zā hé":[22088],"tūn kuò":[22091],"cēng chēng":[22092],"dēng":[22100,23297,28783,29128,29842,30331,31475,31782,33376,35915],"pū":[22103,25169,25778,25908,25909,28541,28807,38496],"juē":[22104,23657,23659,25767],"lū":[22108,22165,25784,25852,35618],"zhān":[22113,23742,24777,26051,26076,26540,26676,27617,27656,27658,27838,30651,34205,34501,35392,35449,35691,35893,36232,36997,38298,38673,39142,39256,39513,39769,40035,40455,40559],"ō":[22114],"zhòu zhuó":[22115],"jiào qiào chī":[22125],"yuàn":[22126,22964,24616,24895,25534,29783,31120,33489,34895,35051,35089,38498,39e3],"ǎi ài āi":[22127],"yōng yǒng":[22128,28589],"jué xué":[22129],"pēn pèn fèn":[22132],"gá":[22134,23580,37331,37687,38022],"xīn hěn hèn":[22135],"dāng":[22137,28578,29680,29867,31580,31801,33377,34807,35014,35168],"làn":[22146,28389,28651,28866,29143,29185,29211,29220,29907,31991,38020],"tà":[22147,22202,23817,25374,25640,25787,27067,27261,27646,28094,28606,28620,31138,31887,35515,35702,36427,36473,36482,36514,36957,37652,38354,38373,38396,38424,38812,38835],"huō huò ǒ":[22148],"hāo":[22150,33568,33983,34181],"hè xià":[22151],"xiù pì":[22154],"zhōu chóu":[22155,30441,35818],"mē":[22162],"chā cā":[22163],"bó pào bào":[22167],"me mèi mò":[22172],"xié hái":[22177],"áo xiāo":[22179],"mō":[22180,25720],"pín":[22188,23078,23252,23338,29613,30665,34226,34841,36007,36139,39024,39078],"mè":[22192,28665],"rǎng rāng":[22199],"lá":[22201,26095],"jiáo jué jiào":[22204],"chuò":[22205,23062,25801,27488,28080,30957,36352,36639,36749,36789,36790,37227,37985,39199,40810,40842],"huān huàn":[22206],"zá cà":[22211],"chài":[22214,34431,34822,34947,35341],"náng nāng":[22218],"zá zàn cān":[22219],"sū":[22220,27375,29990,31267,31308,31395,34311,34323,37221,39874],"zèng":[22222,29111,29969,36104,36192,37605,38147],"zá niè yàn":[22224],"nāng":[22228],"luó luō luo":[22230],"wéi guó":[22231],"huí":[22232,22238,22252,24315,24317,24667,27908,30160,33588,34456,34516,34517,34582,36852,36901,39856],"nín":[22236,24744,33036],"jiǎn nān":[22237],"nān":[22241],"tuán":[22242,22243,22296,24945,25247,25718,27314,31984,37828,40402,40443],"tún dùn":[22244,22345],"guó":[22255,22262,22267,22269,22272,22283,24124,24151,24918,25681,28429,32861,33112,33173,34094,34402,39320],"kùn":[22256,28035,30543],"wéi tōng":[22258],"qūn":[22263,22795,36897],"rì":[22264,26085,34933,37412,39353,39538],"tāi":[22268,23393,32974],"pǔ":[22275,22289,25800,26222,26268,27192,27279,27654,28006,28325,28915,35561,35676,35889,36476,37920,38248],"quān juàn juān":[22280,22287],"chuí chuán":[22284],"tuǎn":[22293,30077,30083],"lüè":[22297,25504,30053,30055,31268,37597,37602,38154],"huán yuán":[22300],"luán":[22301,22302,22897,23048,23372,23402,23423,23782,24018,25371,25891,26347,26686,27410,28390,28772,30324,30325,32649,33044,33248,34378,37550,38014,40265,40478,40510],"tǔ":[22303,22305,37367,38029],"xū wéi":[22313],"dì de":[22320,23987],"qiān sú":[22321],"zhèn":[22323,22630,25355,25391,26389,26650,30013,30521,32022,32124,32444,35499,36049,36168,37620,37805,37806,38215,38453,38499,38663,40198,40489],"chǎng cháng":[22330,22580,22642],"qí yín":[22331],"jiá":[22335,24550,24669,25118,25204,33061,33626,33698,34545,34554,35020,36338,37071,37087,37583,38103,38956,38960,39050,40246,40266],"zhǐ zhì":[22337],"bǎn":[22338,23685,26116,26495,29256,29930,31876,33320,34626,37393,38051,38442,39788],"qǐn":[22341,23505,23517,23522,26129,26795,31497,34748,36222,37599,38163],"méi fén":[22342],"rǒng kēng":[22344],"fāng fáng":[22346],"fèn bèn":[22347],"tān":[22349,24633,25674,25849,25892,28393,28760,30251,30321,33297,36010,36138],"huài pēi pī péi":[22351],"dì làn":[22356],"tán":[22363,22704,22709,22727,22748,23122,24987,26137,26311,27011,27264,28525,29122,30192,30969,32584,32590,34283,35527,35674,35680,35848,35885,35994,37103,37296,37663,38979],"bà":[22365,22459,22761,24349,27419,28766,29240,30706,35207,38712,39809,40069],"fén":[22367,22707,22946,23694,24169,26508,26876,27774,28954,29132,29139,32658,32693,33974,34145,34464,34465,35950,35958,36690,37948,38571,39337,39797,40642,40726,40738],"zhuì":[22368,22684,24820,29952,30071,30984,32180,32267,32512,32530,33103,33159,35528,36101,36184,37258,37667,37958],"pō":[22369,23717,27900,28300,28497,37337,37882,38027,38935,39047],"pǎn bàn":[22370],"kūn":[22372,22531,22546,23824,23825,26118,26204,28489,28956,29108,29457,29736,29819,33742,34603,35016,35049,35084,37260,37653,38175,39433,39648,39649,39656,39908,40114,40318,40356,40525],"diàn":[22379,22443,22666,22722,22880,23133,24215,24806,25154,27202,27583,28096,28593,29623,29716,30005,30300,31775,34580,37439,38651,38747,39508],"mù mǔ":[22390],"kē kě":[22391,36603],"xuè":[22393,23716,26710,28709,29400,30642,35604,35857,36240],"dǐ chí":[22395,26594],"lā":[22403,26566,33736,37003],"lǒng":[22404,22405,22751,22752,25314,25871,31433,38471,38580],"mín":[22410,22980,23735,23823,25450,26107,26108,27665,29641,29720,29725,29769,30203,30463,30727,32205,32225,32535,32608,33504,37425,37641,37746,40214],"dòng tóng":[22412,23762,27934],"cí":[22416,23336,24904,26572,28648,29633,29943,29958,30913,31008,31072,31949,33576,35422,35789,36765,36766,36772,36781,38604,39162,39176,40220,40383,40384,40538],"duī":[22422,22534,22624,30205,30931,37907,37916,40237],"duò duǒ":[22427],"duǒ duò":[22428,25350],"chá":[22430,23519,23894,25661,27086,27307,29497,33580,33590,35431,38763],"shǎng":[22439,26188,27145,36062,36120,36175,37631,37851,37980],"shǒu":[22440,23432,25163,25164,33359,39318],da:[22447,32360,36342],"háng":[22451,26043,26477,31573,32078,32471,33322,33472,34466,35012,36005,36818,38927,39043,39783],"ān ǎn":[22453],"xīng":[22454,24826,26143,26320,29003,29481,29766,30376,31682,33125,33288,35306,35314,35587,39426,39565,39823,39929],"yuàn huán":[22456],"bāng":[22457,24110,24135,24154,24171,25440,26758,27996,37030,37035,38820],"póu fú":[22458],"cén":[22465,23697,28052],"běng fēng":[22468],"dì fáng":[22469],"xiá jiā":[22473],"mái mán":[22475],"làng":[22476,23808,28010,33943,38316],"shān yán":[22479],"qín jīn":[22480],"pǔ bù":[22484],"huā":[22486,23154,26907,30836,31936,33457,33930,34340,35502,37685],"suì sù":[22499],"pí pì":[22500],"qīng zhēng":[22501,40109],"wǎn wān":[22502],"lǔn":[22504,31248],"zhēng chéng":[22505],"kōng":[22506,23814,31644,36539,37651,40316],"cǎi cài":[22512,23488,37319],"chù tòu":[22513],"běng":[22514,29739,33782,38811],"kǎn xiàn":[22515],"yì shì":[22518,37299],"péi":[22521,27632,35060,35061,36064,36180,37639,38187,38443,38506],"sào sǎo":[22525],"jǐn qīn jìn":[22535],"péng bèng":[22539],"qiàn zàn jiàn":[22545],"àn":[22547,23669,23736,25353,26263,26696,33018,33612,35963,35979,37644,38343,38540,40687],"duò huī":[22549,22702],"huán":[22554,23503,23536,23768,26707,27961,28596,29506,29615,29872,31979,32367,32563,32678,33601,33800,33809,35954,37744,37942,38206,38254,38372,38427,38600,39711,40558],"bǎo bǔ pù":[22561],"máo móu wǔ":[22565],"ruán":[22567,22742,25739],"ài è yè":[22568],"gèng":[22569,26245],"méi":[22579,22650,23186,23883,24510,25879,26522,26626,26757,26979,26995,27089,28228,28232,29028,29496,29611,29691,29762,30473,30530,31126,33028,33058,33116,33530,33683,33919,37119,37238,37767,38213,38665,40357,40539,40692],"dǔ":[22581,29757,30585,31491,31716,35241,36077,36172],"féng":[22584,32152,33346,36898],"hèng":[22588],"chūn":[22590,23179,26110,26149,26265,26486,26943,27078,27201,27332,29763,31674,33797,34685,36660,39942,40350],"jiǎng":[22594,22870,22888,22892,26728,27123,29518,32809,33177,33931,34083,35611,35762,39004],"huāng":[22595,24031,24908,32915,33618,34881],"duàn":[22597,26029,26039,26932,27573,27592,28997,29782,30891,31766,31850,32222,32526,33142,33902,36502,37723,38203],"tǎ":[22612,22678,29549,29562,39833,39976,40142],"wěng":[22613,22883,23905,25882,26273,30600,33994],"sāi sài sè":[22622],"zàng":[22623,24329,33235,33247,33900,34101,37562],"tián":[22625,23623,24684,27834,28233,29875,29979,29980,3e4,30027,30033,30901,30924,32971,38352,38423,40235,40390,40399],"zhèng":[22627,24129,25919,35388,35533,35657,35777,35812,37073,37165,38741,40202],"tián zhèn":[22635],"wēn":[22637,26167,27058,27551,28201,28331,29797,30239,34160,35953,36668,36672,36754,37822,39234,39963,39982,40129],"liù":[22639,24263,30943,32719,38625,38692,39230,39736,40410,40552],"hǎi":[22640,28023,28920,37244,37282],"lǎng":[22641,26390,26391,26404,28922,34018],"bèng":[22644,25596,27893,29967,32179,36454,36856,36908,37872,38234],"chén":[22645,23480,23576,24561,25936,25974,26216,26335,26645,27140,27785,28993,30222,33251,33566,33664,33680,34095,34236,34740,35366,35574,36569,36784,36839,37378,38472,38515,38659,40400,40590],"ōu qiū":[22648],"qiàn jiàn":[22649],"zhuān tuán":[22652],"shuǎng":[22653,24929,28474,29245,32276,37871],"shú":[22654,23116,23408,29881,31211,36118,36174],"lǒu":[22655,23901,23937,29962,31699,31757],"chí":[22656,24347,25345,27744,28454,31486,31554,31630,31722,33548,33614,34483,35608,36030,36223,36383,36831,36833,36933,36959,36978,37705,39347,39536],"shù":[22661,24246,24251,24631,24661,25101,26463,26641,27193,27821,28465,28484,28630,31446,31466,32073,33127,33623,33921,34410,34899,35019,35918,36848,37477,37680,37859,38676,40336],"dì zhì":[22662,30096],"kàn":[22664,23809,30640,30681,30945,34894,39723],"chěn":[22667,22822,30838,30876,30947,36098,36283,36408,37718],"zhǐ zhuó":[22668],"qiǎng":[22671,32328,32358,32677,35137],"zēng":[22679,22686,24974,29844,30704,30963,32638,35652,37163,40027],"qiáng":[22681,22715,23281,23321,27183,27299,28434,29254,33378,34051,34103,34336],"kuài tuí":[22692],"tuǎn dǒng":[22693],"qiáo què":[22695],"zūn dūn":[22699],"qiāo áo":[22717],"yì tú":[22719],"xué bó jué":[22726],"lǎn":[22728,23358,23364,23375,25042,25078,25597,25829,25900,27012,27414,28008,28452,28768,32412,32518,32625,35239,35261,35272,37250,39026],"huài":[22730,22750,34366],"rǎng":[22732,22756,25880,29209],"làn xiàn":[22735],"dǎo":[22740,23548,23566,23707,23798,23947,23948,23993,25443,25623,25827,27101,31095,31106,31153,36424,38502,38557,38575],"ruǐ":[22753,26741,27236,32352,34122,34123,34306,34307],san:[22765],"zhuàng":[22766,22767,22773,25758,28939,29366,29376],"ké qiào":[22771,27580],"kǔn":[22776,22780,24707,25414,26801,30833,31093,31239,31259,32145,35021,38315,38328,38403],"mǎng":[22782,28461,33595,33725,33726,34830],"cún":[22783,23384],"zhǐ zhōng":[22786],"gǔ yíng":[22787],"jiàng xiáng":[22789,38477],"páng féng fēng":[22790],"zhāi":[22792,25434,25688,25995,25998,27064,31874,40779],"xuàn xiòng":[22800],"wài":[22806,39009],"wǎn yuàn wān yuān":[22807],"mǎo wǎn":[22808],"mèng":[22818,22819,23391,26790,30310,38693],"dà dài":[22823],"fū fú":[22827,22983,26510,31920],"guài":[22828,24618,24672],"yāng":[22830,22990,25264,27523,27889,31207,32998,37472,37704,38645,40230,40495],"hāng bèn":[22831],"gǎo":[22832,25630,26482,27072,27073,27322,31233,31294,31295,32286,32543,33746,34241,34291],"tāo běn":[22834],"tóu tou":[22836],"yǎn tāo":[22837],"kuā kuà":[22840,35463],"jiá jiā gā xiá":[22841],"huà":[22843,23155,23295,23301,23819,25702,26489,26528,26726,27116,27194,28549,30011,30059,30069,32355,33305,35441,35545,35694,35805,40650],"jiā jiá gā xiá":[22846],"ēn":[22848,24681,33981],"dī tì":[22851],"yǎn yān":[22852,28208],"pào":[22853,30129,30384,30770,31007,31022,38756,40621],"nài":[22856,26608,28223,32784,33816,35110,37692,40720],"quān juàn":[22861,24366,26860],"zòu":[22863,25549],"qì qiè xiè":[22865],"kāi":[22866,24320,25577,37926,38158,38283],"bēn bèn":[22868,27853],"tào":[22871],"zàng zhuǎng":[22872],"běn":[22873,26412,26957,30042,32713,33519],"xùn zhuì":[22878],"shē":[22882,27304,29470,30061,30066,36050,36054,36170,36619],"hǎ pò tǎi":[22884],"ào yù":[22885,22887,28570],"yūn":[22891,27698,27699,33920,33941,34681,36103,36191],"duǒ chě":[22898],"nǚ rǔ":[22899],"nú":[22900,23397,31535,39377,39549],"dīng dǐng tiǎn":[22901],"tā jiě":[22905],"nuán":[22907],"hǎo hào":[22909],"fàn":[22911,23310,26805,27726,27867,28412,28714,29359,30024,30421,31541,31684,33539,35337,36009,36137,36588,36669,39151,39152,39277],"shuò":[22913,25632,26388,27082,28865,29197,30687,33972,37785,37984,38084],"fēi pèi":[22915],"wàng":[22916,24536,26106,26395,26402],"zhuāng":[22918,22941,23076,24196,24210,26729,26761,27137,31911,31962,33624,33674,35013,35037],"mā":[22920,23229],"fū yōu":[22923],"hài jiè":[22926],"dù":[22930,22956,26460,27564,28193,31226,33423,33648,34713,34855,34873,37709,38208,38767],"miào":[22937,24217,24255,24287,29573,31447],"fǒu pēi pī":[22938],"yuè jué":[22940],"niū":[22942],"nà nàn":[22944],"tuǒ":[22949,23287,24249,26925,26965,27234,39692,39958,40270],"wàn yuán":[22951],"fáng":[22952,25151,32938,38450,39796,40066],"nī":[22958],"zhóu":[22959,30881],"zhāo":[22961,24054,25307,26157,37335,37450,37731,38026,39371],"nǎi nǐ":[22963],"tǒu":[22965,25960,32015,34339,40648],"xián xuán xù":[22966],"zhí yì":[22967,31175],"ē":[22968,22975,23104,23641],"mèi":[22969,23194,23504,25274,26048,26151,27820,29021,30167,30491,30584,31065,31683,34654,34946,36298,39741,39749],"qī qì":[22971],"xū xǔ":[22977,31280],"shān shàn":[22989,22999,33515,37348,38032],"mán":[22991,24946,27168,34542,34875,35646,39237,39314,39703,39704,39995,40151],"jiě":[22992,23182,27294,27601,39159],"wěi wēi":[22996],"pīn":[23e3,25340,30999,31334,39338,39518],"huá huó":[23009],"jiāo xiáo":[23011],"gòu dù":[23012],"lǎo mǔ":[23013],"nián niàn":[23017],"zhěn":[23019,23634,24363,25262,26147,26517,30043,30137,30485,31289,32285,32293,32540,32836,33817,34967,35030,35225,35386,35786,36587,36728,36788,39383,39698],"héng":[23022,24646,24658,28870,29673,33019,34309,34913,37957,40244,40262,40507],"jūn xún":[23024],"kuā hù":[23025],"è yà":[23030],"xiān shēn":[23034],"wá":[23043],"ráo rǎo":[23046,23304],"shào shāo":[23051],"xiē":[23054,25587,26964,27463,34638,34829],"wǔ méi mǔ":[23058],"chuò lài":[23061],"niáng":[23064,23330,23363],"nà nuó":[23068],"pōu bǐ":[23069],"něi suī":[23070],"tuì":[23079,29050,34555,34581,36864,39422],"mǎn":[23080,23640,28288,28385,28415,34728,34766,35156,37835],"wú wù yú":[23082],"xī āi":[23085],"zhuì shuì":[23095],"dōng dòng":[23099],"ǎi ái è":[23102],"ē ě":[23103],"mián":[23106,23349,23424,26467,26825,27312,27339,30496,30664,30666,30671,32191,32220,32501,33415,34642],"pǒu péi bù":[23108],"biǎo":[23114,33087,34920,35057,35134,35544,37686],"fù fàn":[23119],"wǒ":[23120,23121,25105],"ní nǐ":[23127,26879],"quán juàn":[23128,24787],"hūn":[23130,26127,26156,26836,28093,30567,30575,30856,33636,33911,34066,36683,38333,38413],"qiān jǐn":[23132],"wān wà":[23136],"lái lài":[23137,24469,24480],"zhōu chōu":[23140],"chuò nào":[23141],"nüè àn":[23145],"hùn kūn":[23147],"dàng yáng":[23160],"nàn":[23163],"ruò chuò":[23164],"jiǎ":[23165,23724,26010,26013,27022,27098,27295,29630,30002,32987,37440,38078],"tōu yú":[23166,23214],"yù yú":[23168],"wéi wěi":[23169],"dì tí":[23170,29686,33488],"róu":[23171,25545,26580,28184,29027,29768,29895,31160,31880,31941,33052,33132,33863,34650,36418,36654,37714,38819,39461,39943,40340],"ruǎn nèn":[23174],"miáo":[23180,23289,25551,30596,33495,40339,40523],"yí pèi":[23184],"mián miǎn":[23188],"tí shì":[23198,24831],"duò tuó":[23200,27826],"ǎo":[23210,23228,33401,33466,34948,35158,38266],"chú zòu":[23216],"yìng":[23221,26144,26254,30828,33185,40038],"qín shēn":[23232],"jià":[23233,24143,26550,27042,31292,39381,39550],"sǎo":[23234],"zhēn zhěn":[23235],"jiē suǒ":[23237],"míng mǐng":[23239],"niǎo":[23243,23325,23346,33553,34086,34949,35018,35117,40479],"tāo":[23245,24141,24354,24902,25487,25647,27076,28059,28372,28644,29803,32091,32282,32295,32486,35420,35615,36673,38833,38876,38892,39160,39253],"biáo":[23249],"piáo piāo":[23254,34232],"xuán":[23257,24748,25080,26294,27272,28457,29572,29831,29887,30147,34561],"màn mān":[23258],"kāng":[23261,23931,24247,24951,27130,28462,30730,31301,31968,36543,37870,40007],"hān nǎn":[23272],"nèn":[23273,23280],"zhē":[23276,36974],"mā má":[23282],"piè":[23283],"zhǎn":[23288,23637,25612,26025,26028,29718,30415,30430,36670,37254,39085,39120],"xiān yǎn jìn":[23312],"liǎn":[23322,25947,25986,29711,29833,32695,33080,33225,34105,34333,34334,35043,35165,37179],"qióng huán xuān":[23323],"dǒng":[23326,25026,31677,33891,34155,35532],"cān":[23328,28236,29208,39137,39184,39490,39574],"tiǎo":[23333,23464,26176,26387,31409,33025],"bí":[23350,33656,40763],"liǔ":[23356,26611,26625,26718,26746,27246,29102,29643,32185,32506,32630,32640,37622,38157],"qiān xiān":[23365,27430],"xié huī":[23368],"huān quán":[23369],"lí lì":[23371,40599],"zhú chuò":[23374],"kǒng":[23380,24656],"mā zī":[23382],"sūn xùn":[23385,23403],"bèi bó":[23387,35478],"yòu niū":[23399],"zhuǎn":[23400,31473,36681],"hái":[23401,39608],"nāo":[23404],"chán càn":[23409],"bò":[23417,27287,34327,35666],"nái":[23419,33097],"níng nìng":[23425,23501,23511,23516,23527,29999],"zhái":[23429],"tū jiā":[23434],"sòng":[23435,35359,35494,35772,35829,36865,37817,38924,39042,39224],"ròu":[23437,32905,35699],"zhūn":[23442,31360,34912,35524,35846,36813],"mì fú":[23443],"dàng tàn":[23445],"wǎn yuān":[23451],"chǒng":[23456,23541],"qún":[23469,23790,24108,32675,32676,35033,35040],"zǎi":[23472,23869],"bǎo shí":[23474],"jiā jia jie":[23478],"huāng huǎng":[23482],"kuān":[23485,23515,23532,33239,37991,39627,39638],"sù xiǔ xiù":[23487],"jié zǎn":[23489],"bìng bǐng":[23502],"jìn qǐn":[23510],"lóu jù":[23520],"xiě xiè":[23531],"qīn qìn":[23540],"cùn":[23544,31871],"duì":[23545,23550,23565,24636,24989,25055,28647,28713,30867,31051,32144,34225,35656,35701,36699,38431,38510],"lüè luó":[23549],"shè yè yì":[23556],"jiāng jiàng qiāng":[23558],"jiāng jiàng":[23559,27974,28479,30074],"zūn":[23562,23967,27197,32583,36981,37903,40018,40159,40334,40439],"shù zhù":[23564,28557],"xiǎo":[23567,26195,26241,26313,30363,30370,31601,31615,31712,35599],"jié jí":[23568,35800,38794],"shǎo shào":[23569],"ěr":[23570,23571,23572,26670,27622,27953,29246,29669,32819,34238,34888,36272,36841,36999,37498,38098,39180,39285,39404],"wāng yóu":[23586],"wāng":[23587,23593,23594,23595,27754],"liào":[23589,23590,24278,25730,26009,28819,31415,37904,38243],"méng máng lóng páng":[23592],"gà":[23596,39744],"kuì kuǐ":[23599],"tuí":[23605,24346,31336,34312,36458,38564,38969,38970,38973,39059,39755],"yǐn":[23609,23998,24341,26372,27267,27324,27389,28158,28645,30270,30318,31884,34335,34451,34750,35732,36218,36251,36625,37391,38775],"chǐ chě":[23610],"kāo":[23611,39643],"jìn jǐn":[23613],"wěi yǐ":[23614],"niào suī":[23615],"céng":[23618,23652,23954,39507],"diǎo":[23628],"píng bǐng bīng":[23631],"lòu":[23642,28431,30232,30266,30267,37860,38210,38475],"shǔ zhǔ":[23646,23660],"xiè tì":[23647],"chè cǎo":[23662],"tún zhūn":[23663],"nì jǐ":[23664],"hóng lóng":[23672],"qǐ kǎi":[23682,35912],"áng":[23687,26114,26171],"gǎng gāng":[23703,23831],"kě":[23714,25956,28167,28212,28835],"gǒu":[23715,29399,29629,31537,32775,32776,32777,33503,35967],"tiáo":[23719,23737,27172,31058,31524,33408,33812,34010,34024,34601,36834,37594,37797,38807,39659,39880,39991,40102,40800,40838],"qū jū":[23720],"lǐng":[23725,23994,38936,39046],"pò":[23734,25920,27942,28240,28894,29632,30772,30774,31893,33962,39748],"bā kè":[23751],"luò":[23752,25694,27931,27932,29334,29662,31551,32409,33638,35451,38610,39409,39558,40261],"fù niè":[23754],"ěn":[23758],"zhì shì":[23769,23867],"qiǎ":[23776,36306,37216,38800],"qiáo jiào":[23780,30276],"xié yé":[23787],"bū":[23788,24239,26209,35495,36875,37437,37691,38072,39188,40271],"chóng":[23815,23816,29214,34411,34665,34802,35080,38528],"zú cuì":[23826,26890],"líng léng":[23834],"dòng dōng":[23840],"xiáo":[23844,27944,28102,35364,35509],"pí bǐ":[23845,33432],"zhǎn chán":[23853,23939,23940],"wǎi wēi":[23860],"yáng dàng":[23861],"shì dié":[23868],"yào":[23870,26332,29070,29183,30661,31358,31380,31556,32768,33374,33647,33903,34220,34277,34958,35230,35407,35729,38783,40386,40542,40764],"kān zhàn":[23873],"hán dǎng":[23877],"qiàn kàn":[23884],"wù máo":[23885],"kě jié":[23889,23985],"wēi wěi":[23892],"kē":[23897,26607,26869,27068,27158,29249,29297,29328,29634,30132,30604,30933,31002,31185,31262,31392,33834,34198,34485,34636,36279,36722,37272,37427,38070,38950,38982,39063,39617],"dàng táng":[23907],"róng yíng":[23908,29187],"ái kǎi":[23910],"kāo qiāo":[23914],"cuó":[23919,23923,30180,30700,33963,34070,34392,40570,40574],"qiǎn qīn":[23920],"dì dié":[23933],"cēn":[23934],"dǐng":[23935,33404,34209,37924,38914,39030,40718,40721],"áo ào":[23941],"pǐ pèi":[23951],"jiào qiáo":[23968,28496],"jué guì":[23969,40156],"zhān shàn":[23974,40163],"xiè jiè":[23984],"guī xī juàn":[23986],"rū":[23999],"lì liè":[24001,26841,29188,32159],"xī guī juàn":[24002],"yíng hōng":[24006],"yǐng":[24010,24302,24433,25708,26796,28481,30271,30317,30696,31310,37090,37915,38964,39053,39061,39062],"chǎo":[24016,28818,29052,30503,40616],"cuán":[24017,27349,27409],"chuān":[24027,24029,27674,29775,31359],"jīng xíng":[24032],"cháo":[24034,24035,26177,28421,28526,29258,31410,32634,35647,36680,37147,40716],"qiǎo":[24039,24832,39644],"gǒng":[24041,24318,25329,25330,26673,27742,29657,36609,38799],"chà chā chāi cī":[24046],"xiàng hàng":[24055],"shuài":[24069,24101,34752],"pà":[24074,24085,24597,34969],"tǎng nú":[24081],"mò wà":[24083],"tiē tiě tiè":[24086],"zhǒu":[24090,26221,30107,30573,31634,32920,33783,39902],"juǎn juàn":[24099],"shuì":[24104,28055,28058,30561,31237,31246,35038],"chóu dào":[24113,24172],"jiǎn jiān sàn":[24116],"shà qiè":[24121],"qí jì":[24122,33632],"shān qiāo shēn":[24147],"zhuàng chuáng":[24162],"chān chàn":[24168],"miè":[24173,25073,25635,28357,28781,28885,31011,31742,34065,34190,34843,34890,37974,40052,40211],"gān gàn":[24178],"bìng bīng":[24182,24183],"jī jǐ":[24190],"guǎng ān":[24191],"guǎng":[24195,24291,29367,29559],me:[24197],"dùn tún":[24201],"bài tīng":[24205],"yìng yīng":[24212],"dǐ de":[24213],"dù duó":[24230],"máng méng páng":[24236],"bìng píng":[24240],"chěng":[24241,24732,30536,36894,39425,39563],"jī cuò":[24244],"qǐng":[24252,24270,27326,28416,33496,35531,35622,35831,38915,39031],"guī wěi huì":[24262],"jǐn qín":[24273],"kuò":[24275,25193,25313,25844,28662,31560,33855,33856,34526,38346,38420,38697,38815,38841,38869,38946,39712],"qiáng sè":[24295,34196],"yǐn yìn":[24308,38544,38560,38577,39150,39154,39278],"pò pǎi":[24313,36843],"nòng lòng":[24324],"dì tì tuí":[24351],"jué zhāng":[24353],"mí mǐ":[24357,24396,38753],"chāo":[24360,24586,25220,27433,35372,36229,37396,38046],yi:[24364],"shāo":[24368,26067,28903,28988,29138,31602,33348,33847,34161,36622,39678,39865],"xuān yuān":[24370],"qiáng qiǎng jiàng":[24375,24378],"tán dàn":[24377,37256],"biè":[24390],"qiáng jiàng qiǎng":[24394],"jì xuě":[24400],"tuàn":[24406,35094],"yuē":[24415,26352,26353,30705],"shān xiǎn":[24417],"wén":[24419,25991,28806,29683,30226,32359,32862,33440,34441,34442,34721,34753,38330,38335,38341,38374,38395,38412,38639,39356,39367,39792,40188,40205,40740],"péng bāng":[24429],"piāo piào":[24431],"zhuó bó":[24436],"tuǒ yí":[24437],"páng fǎng":[24439],"wǎng":[24442,24448,24451,24792,26505,26850,32178,32593,32594,32595,32596,32598,33781,34535,34628,35511,36638,36747,39757],"cú":[24450,27522],"dài dāi":[24453],"huái":[24458,24576,25040,25079,27088,28142,32818,34361,35106,35121,36381],"wā wàng jiā":[24461],"chěng zhèng":[24462],"dé děi de":[24471],"cóng zòng":[24478],"shì tǐ":[24485],"tí chí":[24498,40343,40345],"dé":[24499,24503,24692,24755,24810,28098,37696,38173],"zhǐ zhēng":[24500,24501],"bié":[24502,30335,33666,34498,35154,36457],"chōng zhǒng":[24504],"jiǎo jiào":[24508,31493,31562],"lòng lǒng":[24511],"qú jù":[24514,28192,30655,34742],"dìng tìng":[24522],"gǎi":[24523,25913],"rěn":[24525,26656,26659,31225,31252,32155,33615,33653,36533],"chàn":[24527,25076,25082,30815,32700,38850,39019],"tè":[24529,24925,29305,34776,37617,38141],"tè tēi tuī":[24530],"gān hàn":[24531,25916],"yì qì":[24532],"tài shì":[24533],"xī liě":[24538],"yīng yìng":[24540,25033,35661],"mǐn wěn mín":[24542,24543],"sōng zhōng":[24554],"yù shū":[24556,24710],"qí shì":[24559,32774],"tún zhūn dùn":[24563],"qián qín":[24564,25202],"hún":[24566,27985,28222,39195,39300,39746,40754],"niǔ":[24568,25197,28804,29379,32016,32445,33701,37397,38062,38773],"kuáng wǎng":[24569],"kāng hàng":[24572],"kài xì":[24574,24894],"òu":[24580,24938],"bǎo bào":[24585],"mín mén":[24587],"zuò zhà":[24589],"zěn":[24590],"yàng":[24591,24665,26679,27096,27171,28478,32661,35399],"kòu jù":[24592],"náo niú":[24595],"zhēng zhèng":[24596,25497,38066,38126],"tiē zhān":[24599],"hù gù":[24600],"cū jù zū":[24602],"sī sāi":[24605],"yóu chóu":[24606],"tū dié":[24610],"yōu yào":[24622],"xuàn":[24624,26145,26982,27883,28210,28843,29700,30505,30905,32098,32316,32335,32474,34073,34898,34984,36121,37449,37831,38089,38239,39092],"xù xuè":[24628],"bì pī":[24630],"xī shù":[24632],"nèn nín":[24641],"tiāo yáo":[24652],"xī qī xù":[24659],"xiào jiǎo":[24660],"hū kuā":[24663],"nǜ":[24679,26386,34882,34884],"hèn":[24680],"dòng tōng":[24683],"quán zhuān":[24686],"è wù ě wū":[24694,24801],"tòng":[24696,24927,24965,30171,34901],"yuān juàn":[24705],"qiāo qiǎo":[24708],"jiè kè":[24712],"hào jiào":[24718],"huǐ":[24724,27283,27584,27585,27591,29164,35693],"mán mèn":[24727,38804],"yī yì":[24728,34915],"quān":[24731,31646,37897],"kuī lǐ":[24733],"yì niàn":[24741],"mèn mēn":[24758],"guàn":[24761,24762,24815,24931,25532,25692,27148,27423,27892,28075,28485,28748,29215,29912,30437,31030,31100,32582,32592,36011,36143,36480,36966,37830,38005,40057,40475,40563],"kōng kǒng":[24766],"lǔn lùn":[24768],"guǒ":[24776,26524,26881,27112,31935,32182,33747,34622,35065,35073,36640,39196,39299],"yuān wǎn":[24780,31650],"lán lín":[24783],"yù xù":[24784,28130],"chuò chuì":[24793],"hūn mèn":[24795],"chǎng tǎng":[24797],"suǒ ruǐ":[24802],"cǎn":[24808,24920,25007,40682,40690],"cán":[24813,24921,24922,27531,27544,34453,34629,34870,34874],"dàn dá":[24814,24986],"rě":[24825],"yú tōu":[24841],"kài qì":[24850],"dàng táng shāng yáng":[24851],"chén xìn dān":[24854],"kè qià":[24856],"nuò":[24862,25062,25063,25535,25638,27026,31276,31332,31953,31973,31983,35582,35834,36419,36925,37737,38168],"gǎn":[24863,25792,25954,26751,27204,28553,28600,30383,31174,31240,31540,33417,34918,36214,36245,40036,40161],"còng sōng":[24865],"sāi sī sǐ":[24866],"gōng gòng hǒng":[24873,24912],"shuò sù":[24876,27948],"yáo yào":[24878],"huàng":[24880,26306,27045,28361,30365,30377,37796],"zhěng":[24888,25229,25327,25972,26232],"cǎo":[24890,33400,33609,39474],"xì xié":[24896],"cǎo sāo":[24901],"xù chù":[24905],"qiè qiàn":[24906],"cáo cóng":[24914],"ào áo":[24928],"lián liǎn":[24937,26815,27108,27363],"jìn qín jǐn":[24940],"dì chì":[24952],"zhí zhé":[24953],"lóu lǚ":[24954,40412],"còng":[24961,35621],"zhī zhì":[24964,30693,32340,32455],"chēng":[24966,25690,25744,25745,26239,26621,26854,27221,27273,27871,28030,29732,30624,30848,32253,32585,34511,34806,36202,36204,37887,37923,38455,38743,38963,39251],"biē":[24971,34380,40009,40150,40712,40862],"chéng dèng zhèng":[24981],"xǐ xī":[24984],"duì dùn tūn":[24990],"xiāo jiāo":[24994],"xián xiàn":[25002],"liáo liǎo":[25005,29134,29198,29202],"shéng":[25012,32260,32329,32361,32499,35677],"náo nǎo náng":[25017],"jǐng jìng":[25020],"jǐ jiǎo":[25023],"xuān huān":[25025],"cǎo sāo sào":[25030],"mèn":[25041,25059,26282,28950,29148],"mèng méng měng":[25052],"ài yì nǐ":[25053],"méng měng":[25054,30626,30674],"qí jī jì":[25056],"mǒ":[25057],"lán xiàn":[25058],"yōu yǒu":[25070],"liú liǔ":[25072,34288],"ràng":[25081,35698,35731,35753],"huān":[25085,27426,27475,27489,29566,35737,35995,37188,39529,40197,40269],"nǎn":[25089,25543,28275,29045,33129,34683,36199],"mí mó":[25090],"gàng zhuàng":[25093,25094],"zhuàng gàng":[25095],"qu xū":[25100],"xì hū":[25103,25135,25138],"jiá gā":[25115],"zéi":[25117,34824,36042,36156,39938,40033,40087],"děng":[25125,31561],"hū xì":[25137],"chuō":[25139,36372,36916],"biǎn piān":[25153],"shǎng jiōng":[25156],"shàn shān":[25159],"cái":[25165,26448,32404,35009,36001,36130],"zhā zā zhá":[25166],"lè lì cái":[25168],"bā pá":[25170],"dǎ dá":[25171],"rēng":[25172],"fǎn fú":[25173],"diǎo dí yuē lì":[25178],"káng gāng":[25179],"yū wū":[25180],"yū wū kū":[25181],"tuō chǐ yǐ":[25185],"gǔ jié xì gē":[25186],"dèn":[25189,25213],"sǎo sào":[25195,25475],"rǎo":[25200,25854,38562],"xī chā qì":[25201],"bān pān":[25203],"bā ào":[25207],"xī zhé":[25208],"zhì sǔn kǎn":[25211],"zhǎo":[25214,27836,29813],"kuáng wǎng zài":[25218],"hú gǔ":[25223,40516,40536],"bǎ bà":[25226],"dǎn shěn":[25228],"nè nì ruì nà":[25232],"zhuā":[25235,27291,31803,33212,39677],"póu":[25236,35026],"zhé shé zhē":[25240],"póu pōu fū":[25241,25418],"pāo":[25243,25291,33068,33826],"ǎo ào niù":[25245],"lūn lún":[25249,25476],"qiǎng qiāng chēng":[25250],"zhǐ zhǎi":[25255],"bù pū":[25258,26600],"yǎo tāo":[25261],"hē hè qiā":[25266],"nǐ ní":[25267],"pī pēi":[25271],"mǒ mò mā":[25273],"chōu":[25277,29352,29355,30259,31704],"jiā yá":[25281],"fú bì":[25282,30032,40349],"zhǎ":[25283,30504,30751,39866,40093],"dān dàn dǎn":[25285],"chāi cā":[25286],"niān":[25288,34091],"lā lá lǎ là":[25289],"bàn pàn":[25292],"pāi":[25293],"līn":[25294],"guǎi":[25296,26548,26618],"tuò tà zhí":[25299],"ào ǎo niù":[25303],"jū gōu":[25304],"pīn pàn fān":[25306],"bài bái":[25308],"bài":[25309,25943,31255,31930,34221,36097,36133,38875],"qiá":[25316],"nǐng níng nìng":[25319],"zé zhái":[25321,25799],"hén":[25323,30165,38798],"kuò guā":[25324],"jié jiá":[25326],"nǐn":[25328],"shuān":[25332,26643,38274,38377],"cún zùn":[25333],"zā zǎn":[25334,26714],"kǎo":[25335,25911,26674,28900,32771],"yí chǐ hài":[25336],"cè sè chuò":[25338],"zhuài zhuāi yè":[25341],"shí shè":[25342],"bāi":[25344,25520],"kuò guāng":[25348],"nòng":[25354,25397,40776],"jiào jiāo":[25357,25934,25945],"kuà kū":[25358],"ná rú":[25360],"tiāo tiǎo":[25361],"dié shè":[25365],"liě":[25368,27615],"yà yǎ":[25372,25495],"wō zhuā":[25373],"xié jiā":[25375,25406],"dǎng dàng":[25377,25803],"zhèng zhēng":[25379,27491,30151],"āi ái":[25384],"tuō shuì":[25385,25437],"tǐ tì":[25390],"suō shā":[25393],"sā shā suō":[25394],"kēng qiān":[25395,25724],"bàng péng":[25399],"ruó ruá":[25404],"jiǎo kù":[25409],"wǔ wú":[25410],"tǒng":[25413,26742,31570,31593,32113,32130,32479],"huò chì":[25415],"tú shū chá":[25416],"lǚ luō":[25419],"shāo shào":[25422,31245],"niē":[25423,25553],"shù sǒng sōu":[25426],"yé yú":[25427],"jué zhuó":[25428],"bù pú zhì":[25431],"zùn":[25432,37516],"lāo":[25438,25736,31913],"sǔn":[25439,25613,27051,31499,31565,31664,37800,38588],"wàn wǎn wān yù":[25445],"pěng":[25447,28110,30351],"shě":[25448],"fǔ fù bǔ":[25452],"dáo":[25455],"luò luǒ wǒ":[25456],"juǎn quán":[25458],"chēn tiǎn":[25461],"niǎn niē":[25467],"ruó wěi ré":[25468],"zuó":[25469,26152,31208,31251,31600,33675,37436],"wò xiá":[25470],"qìng qiàn":[25477],"póu pǒu":[25482],"qiā":[25488,33884],"pái pǎi":[25490],"qiān wàn":[25492],"yè yē":[25494],"niè nǐ yì":[25500],"huò xù":[25501],"yàn shàn yǎn":[25502],"zhěng dìng":[25503],"kòng":[25511,38810],"tuī":[25512,34039,34284],"zōu zhōu chōu":[25515],"tiàn":[25517,33306],"kèn":[25519,35017,35075],"pá":[25521,26487,28502,29228,29750,31586],"guó guāi":[25524],"dǎn shàn":[25528,25763],"chān xiān càn shǎn":[25530],"sāo":[25531,25620,28318,32325,32555,34726,39442,39479,39968,40034,40139],"pèng":[25533,26922,27120,30896,36395],"zhēng kēng":[25537],"jiū yóu":[25538],"jiān jiǎn":[25539,31835],"pì chè":[25546],"sāi zǒng cāi":[25548],"tí dī dǐ":[25552],"zǒng sōng":[25556],"huáng yóng":[25560],"zǎn zuàn":[25565],"xū jū":[25567],"ké qiā":[25570],"chuāi chuǎi chuài tuán zhuī":[25571],"dì tì":[25573],"lá là":[25574],"là":[25575,26955,28290,29902,30220,32715,33240,34635,34674,34847,36770,36771,37982,38260,39694,39931],"jiē qì":[25581],"chòng dǒng":[25584],"dié shé yè":[25586],"jiàn qián jiǎn":[25589],"yé":[25590,29239,29242,29784,37603,37761,38104],"chān":[25600,25723,25881,35047,35164,35224,35271,36799,37587],"gē gé":[25601,25841],"lǒu lōu":[25602,25695],"chōu zǒu":[25610],"chuāi":[25611],"sūn":[25614,27074,29426,29499,33642,33984,34165,34206,39143,39153],"róng náng nǎng":[25617],"péng bàng":[25618],"cuō":[25619,29811,30923,36425,36979,37277],"kē è":[25621],"nù nuò nòu":[25625],"lā xié xiàn":[25626],"qiǔ":[25629,31959],"xiǎn xiān":[25631],"jié zhé":[25641],"pán bān pó":[25643],"bān":[25644,25917,26001,26002,29677,30242,30285,32934,34689,34700,35113,36780,38930,39041],"zhì nái":[25649],"wā wǎ wà":[25650],"huá":[25651,25782,28369,29502,34128,34710,35649,37877,38119,39498,39557,40424],"qiāng qiǎng chēng":[25654],"tián shēn":[25655],"ná nuò":[25659],"èn":[25665],"shè niè":[25668,25885],"bìn":[25672,25839,27553,27567,33169,33231,39628,39637,39657,39682,39699,39714],"shā sà shǎi":[25675],"chǎn sùn":[25676],"jiū liú liáo jiǎo náo":[25678],"féng pěng":[25683],"shuāi":[25684],"dì tú zhí":[25685],"qì jì chá":[25686],"sōu sǒng":[25687],"liǎn liàn":[25689],"gài xì":[25697],"hù chū":[25698],"tàng":[25701,28907,29145,37899],"nái zhì":[25704],"mó mā":[25705],"jiāng qiàng":[25706],"áo qiáo":[25710],"niè chè":[25712],"mán màn":[25713],"chàn cán":[25714],"sè mí sù":[25717],"biāo biào":[25725],"juē jué":[25733],"piē":[25734,26300,27669,30629],"piě piē":[25735],"zǎn zān zēn qián":[25741],"sā sǎ":[25746],"hòng":[25748,35340,35751,38336,39720],"héng guàng":[25751],"niǎn":[25754,25781,25862,28042,28990,30910,31760,36429,36456,36494,36646,36743],"chéng zhěng":[25756],"huī wéi":[25757],"cāo":[25761,25805,31961],"xiāo sōu":[25768],"liáo liāo":[25769],"cuō zuǒ":[25774],"wěi tuǒ":[25777],"cuān":[25786,25883,27718,36479,36517,38009,38249],"qiào yāo jī":[25789],"zhuā wō":[25790],"lèi léi":[25794],"nǎng":[25795,25902,26345,28770],"qíng jǐng":[25807],"kuǎi":[25811,33967],"pǐ bò":[25815],"bò bāi":[25816],"jù jǐ":[25818],"mēng":[25821],"sǒu sòu":[25822],"xǐng":[25828,31669,37266],"cā":[25830],"níng nǐng nìng":[25840],"zhì jié":[25843],"là liè":[25848,29193],"sòu sǒu":[25851],"lì luò yuè":[25853],"tī zhāi zhì":[25855],"pān":[25856,28504,30469,33824],"lèi":[25858,27882,28057,28122,31159,31867,32391,34353,37241,37511,37649,38939,38954,39006,39075],"cā sǎ":[25859],"jùn pèi":[25864],"lì luò":[25866,36498],"là lài":[25867,27380],"lú luó":[25870],"zǎn cuán":[25874],"xiān jiān":[25877],"mí mǐ mó":[25888],"zǎn cuán zàn zuān":[25890],"zuàn":[25893],"lì shài":[25894],"lì luǒ":[25901],"guǐ guì":[25905],"jī qī yǐ":[25906],"fàng":[25918],"wù móu":[25924],"chù shōu":[25930],"gé guó è":[25931],"duó duì":[25939,25946],"duō què":[25952,25962],"sàn sǎn":[25955],"dūn duì":[25958,38246],"qī yǐ jī":[25959],"xiào xué":[25961],"shù shǔ shuò":[25968,25976],"ái zhú":[25969,25971],"xiòng xuàn":[25979],"zhuó zhú":[25984],"yì dù":[25985],"lí tái":[25988],"fěi fēi":[26e3],"yǔ zhōng":[26004],"dòu dǒu":[26007],"wò guǎn":[26017],"tǒu tiǎo":[26018],"dòu":[26019,26794,28002,30168,31398,31431,33072,33651,35910,36887,37078,37208,38295,38360,39190,39294,39717,39718,39722,39724,39725],"yín zhì":[26022],"chǎn jiè":[26042],"wū yū yú":[26044],"yóu liú":[26047],"páng bàng":[26049],"máo mào":[26052],"pī bì":[26055],"xuán xuàn":[26059],"wú mó":[26080],"zǎo":[26089,26531,26630,26839,28577,29866,34235,34299,34468],"gā":[26094],"gàn hàn":[26096],"tái yīng":[26098],"xū xù":[26100],"tūn zhùn":[26109],"wù wǔ":[26111],"pò pèi":[26146],"zòng":[26158,29460,30125,30258,31933,31945,31981,32294],"ǎi":[26169,27600,30702,34108,34297,35690,36535,38701,38724],"huàng huǎng":[26179],"xuǎn":[26181,30307,30316,36873,36984],"xù kuā":[26183],"hǒng":[26190],"shài":[26194,26348],"yūn yùn":[26197,29044],"shèng chéng":[26207,26889,30427],"jǐng yǐng":[26223],"shǎn":[26225,29068,30546,35234,38275,38378,38485,38493],"qǐ dù":[26229],"ǎn àn yǎn":[26235],"wǎng wàng":[26240],"zàn":[26242,26283,29897,29906,29914,31158,35192,35715,35738,36059,36106,36190,36436,37180,37694,37864,39265],"yùn yūn":[26248],"mín mǐn":[26251],"dǔ shǔ":[26255],"shǔ":[26257,26329,28539,30297,31980,32626,34213,34223,34295,34560,34868,35169,35177,40042,40048,40653,40736,40737],"jiǎn lán":[26261],"nuǎn":[26262,29015,39210],"bào pù":[26292],"xī xǐ":[26303],"pù bào":[26333,28689],"qū qǔ":[26354,32054],"gèng gēng":[26356],"hū hù":[26358,38653],"zēng céng":[26365,27239],"céng zēng":[26366,31474],"cǎn qián jiàn":[26369],"qiè hé":[26373],"bì pí":[26375,31110,31507,35048],"yǒu yòu":[26377],"bān fén":[26380,40187],"fú fù":[26381,27921],"fěi kū":[26383,32976],"qú xù chǔn":[26384],"juān zuī":[26392],"huāng máng wáng":[26394],"qī jī":[26399],"tóng chuáng":[26403,27238],"zhá":[26413,29264,31642,34491,35671,37720,38113,38296,38392],"zhú shù shú":[26414],"shù shú zhú":[26415],"zhū shú":[26417],"pǔ pò pō piáo":[26420],"dāo tiáo mù":[26423],"guǐ qiú":[26425],"xiǔ":[26429,28395,28483,31956],"chéng chēng":[26430],"zá":[26434,27823,30776,35149,38609,38620,38629,38900],"yú wū":[26437],"gān gǎn":[26438],"chā chà":[26440],"shān shā":[26441],"cūn":[26449,30388,31476,33189,36358,37032],"rèn ér":[26450,26773],"sháo biāo":[26451],"dì duò":[26453,26532],"gū gài":[26458],"yí zhì lí duò":[26461],"gàng gāng":[26464],"tiáo tiāo":[26465,26781],"mà mǎ":[26473],"sì zhǐ xǐ":[26475],"yuán wán":[26476,34454],"bèi fèi":[26478],"shū duì":[26488],"niǔ chǒu":[26491],"wò yuè":[26498,33234],"máo":[26502,27611,27650,28213,29286,30683,32606,33541,33542,34661,34762,36574,37205,37502,37672,38170,39654,40348],"pī mì":[26504],"àng":[26506,30414,37280],"fāng bìng":[26507],"hù dǐ":[26513],"xín":[26516,35153,37908,39733],"yāo yǎo":[26518],"ě è":[26521],"zhī qí":[26525],"cōng zōng":[26526,27141],"xiān zhēn":[26542],"tái sì":[26545],"gǒu jǔ gōu":[26552],"bāo fú":[26553],"yì xiè":[26555,26663],"tuó duò":[26561,39345,39364,39534],"yí duò lí":[26562],"nǐ chì":[26565],"pán bàn":[26568,36312],"yǎng yàng yāng yīng":[26573],"fù fū fǔ":[26574],"bǎi bó bò":[26575],"mǒu":[26576],"sháo shào":[26582],"zhè":[26584,27164,27993,28123,34071,34757,36889,40403,40551],"yòu yóu":[26586,27390],"guì jǔ":[26588],"zhà zuò":[26590],"dié zhì":[26595,30512],"zhā zǔ zū":[26596],"chá zhā":[26597,26619],"āo ào":[26602,36586],"bā fú pèi bó biē":[26605],"duò zuó wù":[26606],"bì bié":[26610],"zhù chù":[26615],"bēi pēi":[26616],"shì fèi":[26617],"shān zhà shi cè":[26629],"lì yuè":[26638,27359],"qì qiè":[26644,30732],"qī xī":[26646,36426],"guā kuò":[26653],"bīng bēn":[26655],"xiào jiào":[26657],"jiàn zùn":[26667,35e3],"yǒu yù":[26671],"hé hú":[26680],"gēn":[26681,36319],"zhī yì":[26682],"gé gē":[26684],"héng háng":[26689],"guàng guāng":[26692],"yí tí":[26699,33617],"sāng":[26705,26706,27105],"jú jié":[26708],"yú móu":[26713],"ráo náo":[26721,27208],"guì huì":[26727,27292],"chén zhèn":[26733],"tīng yíng":[26735],po:[26738],"bèn fàn":[26739],"fēng fèng":[26747,33873],"sù yìn":[26752],"tǐng tìng":[26755],"xuān juān xié":[26763],"tú chá":[26764],"āo yòu":[26766],"kuǎn":[26785,27445,27454,27456],"shāo sào":[26786],"qín chén cén":[26787],"lí sì qǐ":[26793],"chān yán":[26804],"bīn bīng":[26809,27103,27315],"táo chóu dào":[26812],"cōng sōng":[26823],"gùn hùn":[26829],"dé zhé":[26831],"pái bèi pèi":[26833],"bàng pǒu bèi bēi":[26835],"dì dài tì":[26851],"sēn":[26862,26926,27118,35138],"rěn shěn":[26863],"léng lēng líng":[26865],"fú sù":[26868],"zōu sǒu":[26871],"zōu":[26872,31619,32197,35535,35833,37049,37104,37138,37177,38508,39478,39546,39915,40112,40640,40817,40826],"zhào zhuō":[26873],"chēn shēn":[26877],"jiē qiè":[26884],"yǐ yī":[26885],"chóu zhòu diāo":[26886],"qiāng kōng":[26892],"zhuī chuí":[26894],"bēi pí":[26897],"mēn":[26906],"quān juàn quán":[26918],"duǒ chuán":[26927],"wěi huī":[26930],"jiǎ jiā":[26933],"hán jiān":[26935],"shèn zhēn":[26937],"yàn yà":[26939],"zhā chá":[26946],"guō kuǎ":[26951],"jí zhì":[26966],"kǔ hù":[26971],"yóu yǒu":[26978],"sǒng cōng":[26980],"yuán xuàn":[26981],"yǎng yàng yīng":[26983],"pián":[26985,33020,33089,36038,36417,39394,39432,39560,39615],"dié yè":[26986],"dùn shǔn":[26991],"còu zòu":[26993],"dì dǐ shì":[26996],"kǎi jiē":[26999],"róu ròu":[27002],"lè yuè":[27005],"wēn yùn":[27013,38832],"lǘ":[27016,27354,27648,33186,34264,38317,38398,39522,39540],"shén":[27018,31070,37486,39984],"bī pi":[27020],"zhǎn niǎn zhèn":[27024],"fú fù bó":[27025],"jiàn jìn":[27031],"bǎng bàng":[27036],"shā xiè":[27037,27175],"nòu":[27080,32808,37778,37918],"qiǎn lián xiàn":[27087],"gàng":[27091,28981,28985,31611],"gāo":[27092,27129,27248,27356,30590,31705,31957,32660,33263,38879,39227,39640,39641,40398,40433,40731],"diān zhěn zhēn":[27097],"kǎn jiàn":[27099],"xí dié":[27106],"jī guī":[27107],"róng yōng":[27110],"tuán shuàn quán":[27115],"qì sè":[27117],"cuī zhǐ":[27119],"yǒu chǎo":[27121],"màn wàn":[27134],"lí chī":[27142],"léi lěi":[27151,27345,30988],"cháo jiǎo chāo":[27156],"chēng táng":[27160],"jiū liáo":[27163],"mó mú":[27169],"niǎo mù":[27170],"héng hèng":[27178,27243],"xuě":[27184,33188,33373,36684,38634,40008,40149],"fá fèi":[27203],"rùn":[27213,28070,28516,33206,38287,38304,38384],"zhǎn jiǎn":[27215],"shùn":[27219,30618,30636,33308,34147,38918,39034,39690],"tuí dūn":[27220],"táng chēng":[27222],"sù qiū":[27226],"tán diàn":[27229],"fén fèn fèi":[27240],"rǎn yān":[27242],"cū chu":[27259],"shū qiāo":[27262],"píng bò":[27288],"zhái shì tú":[27297],"biǎo biāo":[27302],"qiān lián":[27318],"nǐ mí":[27319],"jiàn kǎn":[27323],"nòu ruǎn rú":[27325],"jī jì":[27333,31144],"huǎng guǒ gǔ":[27342],"lǜ chū":[27350],"miè mèi":[27351],"ōu":[27353,27431,27472,27572,27590,29935,29964,33170,34290,35635,35764,37826,40206,40407,40485],"zhù zhuó":[27361],"jué jì":[27373],"huái guī":[27376],"chán zhàn":[27395],"wéi zuì":[27400],"cáng":[27404,38006],"yù yì":[27429],"chù qù xì":[27434],"kài ài":[27436],"yì yīn":[27437],"xì kài":[27439],"shuò sòu":[27446],"ǎi ēi éi ěi èi":[27448],"qī yī":[27449],"chuā xū":[27451],"chǐ chuài":[27452],"kǎn qiàn":[27455],"kǎn kè":[27457],"chuǎn chuán":[27458],"yīn yān":[27461],"jìn qūn":[27471],"pēn":[27477],"xū chuā":[27480],"xī shè":[27481],"liǎn hān":[27483],"zhì chí":[27501],"sè shà":[27504],"sǐ":[27515],"wěn mò":[27518],"piǎo":[27533,30379,30623,37285,39008],"qíng jìng":[27537],"fǒu bó":[27541],"zhí shi":[27542],"yè yān yàn":[27543],"hūn mèi":[27545],"chòu":[27552,33264,36954],"kuì huì":[27560,28291,28528],"cuàn":[27561,29110,29224,31388,31428,31713,31762],"yīn yān yǐn":[27575],"qìng kēng shēng":[27576],"yáo xiáo xiào":[27581],"gū gǔ":[27586,34500],"guàn wān":[27596],"dú dài":[27602],"xún xùn":[27621],"mú":[27626,27649],"dòu nuò":[27629],"sāi suī":[27640],lu:[27655],"sào":[27657,30233,30658,39646],"shì zhī":[27663],"dī dǐ":[27664],"máng méng":[27667],"yáng rì":[27676],"shuǐ":[27700,27701,27706,38294],"zhěng chéng zhèng":[27702],"tǔn":[27709],"fán fàn":[27710],"guǐ jiǔ":[27711],"bīn pà pā":[27715],"zhuó què":[27723],"dà tài":[27727],"pìn":[27734,29277,32856],"hàn hán":[27735,39343],tu:[27746],"tāng shāng":[27748,28271],"zhī jì":[27749],"gàn hán cén":[27765],"wèn mén":[27766],"fāng pāng":[27768],"hǔ huǎng":[27771],"niú yóu":[27772],"hàng":[27782],"shěn chén":[27784],"dùn zhuàn":[27788],"nǜ niǔ":[27793],"méi mò":[27794,27809],"tà dá":[27795],"mì wù":[27797],"hóng pāng":[27799],"shā shà":[27801],"zhuǐ zǐ":[27805],"ōu òu":[27812,28442],"jǔ jù":[27822],"tuō duó":[27824],"mǐ lì":[27829],"yí chí":[27830],"xiè yì":[27844],"bó pō":[27850],"mì bì":[27852,31192],"chù shè":[27855],"yōu yòu āo":[27857],"pēng píng":[27865,30801],"pào pāo":[27873],"ní nì":[27877,31196],"yuè sà":[27879],"jué xuè":[27884,30118],"lóng shuāng":[27895,28711],"luò pō":[27898,28668],"zé shì":[27901,28580],"sǎ xǐ":[27922],"sè qì zì":[27923],"xǐ xiǎn":[27927],"kǎo kào":[27928],"àn yàn è":[27933],"lěi lèi":[27937],"qiè jié":[27951],"qiǎn jiān":[27973],"jì jǐ":[27982,28168,28639,32426],"hǔ xǔ":[27986,28408],"jùn xùn":[27994,28652],"yǐng chéng yíng":[28007],"liàn lì":[28016],"féng hóng":[28018,28292],"jiǒng jiōng":[28027],"suī něi":[28029],"yǒng chōng":[28044],"tūn yūn":[28050],"wō guō":[28065,28198],"hēng":[28069,33053],"zhǎng zhàng":[28072,28466],"shòu tāo":[28077],"shuàn":[28078,33128],"kōng náng":[28083],"wò wǎn yuān":[28084],"tuō tuò":[28086],"wō":[28089,29479,31389,31401,33716,33845,34583,34680,36370],"qiè jí":[28097],"guǒ guàn":[28105],"lín lìn":[28107,29532,30084],"tǎng chǎng":[28108],"nào chuò zhuō":[28118],"péng píng":[28124],"féi":[28125,32933,33107,34608],"pì pèi":[28128],"niǎn shěn":[28144],"biāo hǔ":[28146],"chún zhūn":[28147],"hùn hún":[28151],"qiǎn":[28154,32382,32561,32951,33153,34616,35700,35892,36963,37971],"wèn mín":[28162],"rè ruò luò":[28163],"dú dòu":[28174,28678,35835],"jiàn jiān":[28176,28293,28472,28666],"miǎn shéng":[28177,28576],"nuǎn nuán":[28188],"qiú wù":[28190],"tíng tīng":[28191],"dì tí dī":[28199],"gǎng jiǎng":[28207],"hōng qìng":[28217],"tuān":[28237,29011],"huì mǐn xū":[28239],"xǔ xù":[28241],"pén":[28243,29931,30406,33872],"mǐn hūn":[28259],"tuàn nuǎn":[28266],"qiū jiǎo":[28267,28268],"yān yīn":[28270],"bàn pán":[28276],"zhuāng hún":[28279],"yàn guì":[28302],"lián liǎn nián xián xiàn":[28307],"dá tǎ":[28314],"liū liù":[28316,28561,36435],"lùn":[28323],"mǎ":[28324,29368,29505,29595,29802,30721,30908,36964,37815,39340,39532,39970,40396],"zhēn qín":[28337],"nì niào":[28346],"chù xù":[28352,30044],"wěng wēng":[28355],"hào xuè":[28360],"qì xì xiē":[28362],"xíng yíng":[28366],"zé hào":[28380],"piāo piào piǎo":[28418],"cóng sǒng":[28430],"féng péng":[28456],"luò tà":[28463],"pēng bēn":[28464],"chóng shuāng":[28468],"huǒ kuò huò":[28471],"liáo liú":[28475],"cuǐ cuī":[28476],"cóng zǒng":[28480],"cóng zōng":[28488],"pì piē":[28494],"dàng xiàng":[28498],"huáng guāng":[28514],"liáo lào lǎo":[28518],"cōng zòng":[28520],"zhí zhì":[28522],"tān shàn":[28524],"tú zhā":[28531],"sàn sǎ":[28533],"hēi":[28534,40657,40658],"chéng dèng":[28548,28691],"cūn cún":[28554],"péng pēng":[28558],"hòng gǒng":[28562,37566],"wàn màn":[28587],"kuài huì":[28590],"guō wō":[28612],"pēn fén":[28614],"jí shà":[28616],"huì huò":[28618],"dǐng tìng":[28622],"mǐ nǐ":[28628],"bì pì":[28638],"cuì zuǐ":[28642],"hù huò":[28649],"ǎi kài kè":[28653],"wěi duì":[28667,28706],"zàn cuán":[28669,28754],"yǎng yàng":[28673],"wǎng wāng":[28679],"mò miè":[28686,30492],"suǐ":[28705,33208,39635],"huái wāi":[28708],"zùn jiàn":[28723],"yīng yǐng yìng":[28724],"ráng ràng":[28732],"shuàng":[28736],"zhuó jiào zé":[28738],"sǎ":[28753,35375,38776],"luán luàn":[28755],"dǎng tǎng":[28761],"xún quán quàn":[28773],"huǒ biāo":[28780],"zhà yù":[28793],"fén bèn":[28803],"jiǒng guì":[28805],"pàng fēng":[28816],"quē":[28820,32570,32572,33947],"biān":[28830,29048,29954,30765,31550,31663,31849,32232,32534,34649,37001,37002,37757,38829,39934,39935,40138],"zhāo zhào":[28836],"zhuō chù":[28842],"pào páo bāo":[28846],"páo fǒu":[28848],"shǎn qián shān":[28854],"zhà zhá":[28856],"jiǎo yào":[28868],"quǎn":[28871,29356,29357,30030,32163,32507,34375],"yàng yáng":[28874],"lào luò":[28889],"huí huǐ":[28896],"rè":[28909,29105],"fú páo":[28912],"xiè chè":[28914,28942],"yàn shān":[28923],"hūn xūn":[28932],"kào":[28933,29330,37548,38096,38752,39859,39884,40083],"juān yè":[28934],"jùn qū":[28940],"tāo dào":[28952],"chǎo jù":[28963],"wò ài":[28965],"zǒng cōng":[28967],"xī yì":[28972],"xìn xīn":[28974],"chāo zhuō":[28975],"xiǒng yīng":[28984,28989],"kuǐ":[28995,36332,36446,38925],"huī yùn xūn":[28999],"jiǎo qiāo":[29005],"qián shǎn shān":[29012],"xī yí":[29013],"shà shā":[29022],"yè zhá":[29024],"yáng yàng":[29036],"ēn yūn":[29054],"yūn yǔn":[29061],"hè xiāo":[29063],"xióng":[29066,29067,38596],"xūn xùn":[29071,29195],"gòng":[29077,36002,36129],"liū":[29080],"cōng zǒng":[29084],"lù āo":[29085],"shú shóu":[29087],"fēng péng":[29090],"cuǐ suī":[29091],"tēng":[29093,33199,40735],"yùn yù":[29096],"áo āo":[29100],"hàn rǎn":[29103],"ōu ǒu":[29104],"huáng huǎng":[29119],"chǎn dǎn chàn":[29120],"jiāo zhuó qiáo jué":[29131],"yàn yān":[29141],"tài liè":[29156],"āo":[29194],"yàn xún":[29203],"jué jiào":[29213,35216,35226,35258,35273],"lǎn làn":[29222],"zhuǎ zhǎo":[29226],"zhǎo zhuǎ":[29227],"fù fǔ":[29238],"diē":[29241,35130,36300],"zāng":[29250,32664,33255,36045,36056,36115,36124,36163,39634],"piàn piān":[29255],"biān miàn":[29265],"bǎng":[29267,32129,32465],"yǒu yōng":[29271],"chēng chèng":[29274,31424],"niú":[29275,29276],"jiū lè":[29278],"mù móu":[29279],"māng":[29284],"gē qiú":[29291],"yòu chōu":[29296],"tè zhí":[29318],"bēn":[29319,37659,38171],"jiān qián":[29325,29610],"má":[29336,30194,34100,34759,40635],"máo lí":[29339],"bá quǎn":[29358],"zhuó bào":[29363],"àn hān":[29364],"kàng gǎng":[29370],"pèi fèi":[29371],"fān huān":[29375],"kuáng":[29378,29381,35473,35827,36566,36576,40287],"yí quán chí":[29387],"xīng shēng":[29388],"tuó yí":[29391],"kǔ":[29404,33510],"huán huān":[29407],"hé mò":[29410],"tà shì":[29415],"máng dòu":[29429],"xī shǐ":[29430],"suān":[29435,30176,37240],"bài pí":[29448],"jiān yàn":[29455,35939],"yī yǐ":[29463],"yá wèi":[29466],"cāi":[29468],"māo máo":[29483,35987],"chuàn chuān":[29485],"tuān tuàn":[29487,35986],"yà jiá qiè":[29488],"hè xiē gé hài":[29490],"biān piàn":[29493,29553],"bó pò":[29500],"háo gāo":[29515],"fén fèn":[29526],"yào xiāo":[29535],"shuò xī":[29537],"gé liè xiē":[29542],"nòu rú":[29555],"náo nǎo yōu":[29558],"ráng":[29565,29924,31155,31331,31344,34328,36511,39716],"náo yōu":[29567],"lǜ shuài":[29575],"wáng wàng":[29579],"yáng chàng":[29594],"mín wén":[29599],"bīn fēn":[29602],"mén yǔn":[29607],"qiāng cāng":[29617,29810,31724],"án gān":[29621],"xuán xián":[29625],"cī cǐ":[29628,36304],"yí tāi":[29638],"zǔ jù":[29639],"fà":[29648,29754,34143,39658,39662],"yín kèn":[29666],"huī hún":[29682],"xuán qióng":[29697],"fú fū":[29704],"bǐng pín":[29717],"cuì sè":[29719],"yù wéi":[29727],"tiǎn tiàn":[29728],"zhuó zuó":[29730],"běng pěi":[29731],"guǎn":[29743,29869,30191,31590,31649,33304,36648,37671,39208,39302,40164],"hún huī":[29759],"xié jiē":[29774],"chàng dàng yáng":[29778],"tiàn zhèn":[29809],"bīn pián":[29816,29880],"tú shū":[29817],"cuǐ":[29824,30368,36257],"zǎo suǒ":[29829],"jué qióng":[29850],"lú fū":[29879],"jì zī":[29886],"suí":[29901,32143,32485,36928,38543,38568,39620],"mí xǐ":[29909],"qióng wěi wèi":[29911],"huán yè yà":[29915],"bó páo":[29919],"zhí hú":[29921],"piáo":[29922,38365],"wǎ wà":[29926],"xiáng hóng":[29928],"wèng":[29934,29973,32587,34169,40774],"shèn shén":[29978],"ruí":[29988,32204,34148],"yòng":[29992,30781,33498,33935,37279],"shuǎi":[29993],"béng":[29997,29998],"yóu zhá":[30004],"diàn tián shèng":[30008],"tǐng dīng":[30010,30012],"zāi zī":[30014],"bì qí":[30017],"dá fú":[30039],"cè jì":[30047],"zāi zī tián":[30048],"zhì chóu shì":[30052],"fān pān":[30056,30058],"shē yú":[30060],"dāng dàng dǎng":[30070],"jiāng qiáng":[30086],"pǐ yǎ shū":[30091],"jié qiè":[30092],"yí nǐ":[30097],"nè":[30098,30514,35365,35767],"gē yì":[30105],"nüè yào":[30111,30247],"lì lài":[30112,30296],"yǎ xiā":[30120],"xuē":[30134,33926,34203,36773,36778,38772,38846],"dǎn da":[30136],"fá biǎn":[30138],"fèi féi":[30143,30193],"shān diàn":[30145],"téng chóng":[30155],"tōng tóng":[30156],"wěi yòu yù":[30159],"tān shǐ":[30161],"pū pù":[30177,37610],"bēng péng":[30189],"má lìn":[30195],"tiǎn diàn":[30198],"ān yè è":[30199],"kē ē":[30206],"zhì chì":[30216],"jiǎ xiá xiā":[30229],"lěi huì":[30243],"chài cuó":[30245],"diān chēn":[30248],"da dá":[30249],"biě biē":[30250],"qué":[30264],"dàn dān":[30281],"guì wēi":[30288],"nòng nóng":[30289],"biē biě":[30303],"bō bǒ":[30327],"bái":[30333],"jí bī":[30336],"de dì dí dī":[30340],"pā bà":[30341],"gāo háo":[30347],"gāo yáo":[30352],"lì luò bō":[30378],"zhā cǔ":[30395],"zhāo zhǎn dǎn":[30397],"jiān jiàn":[30417,30435,37627,38388,38828],"gài gě hé":[30422],"máng wàng":[30451],"yuǎn":[30454,36922,36960],"tián xián":[30455],"xiāng xiàng":[30456],"dǔn":[30457,36280,36489],"xì pǎn":[30459],"shěng xǐng":[30465],"yún hùn":[30467],"miǎn miàn":[30468],"kàn kān":[30475],"yìng yāng yǎng":[30479],"yǎo āo ǎo":[30481],"jū xū kōu":[30487],"yí chì":[30489],"dié tì":[30499],"bǐng fǎng":[30506],"pàng pán":[30507],"mī mí":[30511,30599],"xuàn shùn xún":[30516],"tiào":[30522,31900,31990,35228,36242],"zhe zhuó zháo zhāo":[30528],"qiáo shào xiāo":[30532],"cuó zhuài":[30537],"gùn":[30548,35636],"suì zuì":[30559],"pì bì":[30565,31275,36767],"yì zé gāo":[30570],"xǐng xìng":[30578],"guì wèi kuì":[30598],"kòu jì":[30601],"qióng huán":[30607],"mán mén":[30610,30622],"diāo dōu":[30615],"lou lóu lǘ":[30620],"shùn rún":[30628],"liào liǎo":[30637,38028],"jiàn xián":[30639],"wǔ mí":[30644],"guì kuì":[30646],"nǐng chēng":[30659],"huò yuè":[30662],"mēng méng":[30663],"kuàng guō":[30668],"guàn quán":[30676],"mǎn mán":[30677],"jīn guān qín":[30684],"jīn qín guān":[30685],"yù xù jué":[30686],"jiǎo jiáo":[30699,30703],"duǎn":[30701],"shí dàn":[30707],"gāng qiāng kòng":[30716],"huā xū":[30729],"pīn bīn fēn":[30735],"yán yàn":[30740,30799],"luǒ kē":[30754],"fú fèi":[30761,31536],"zhǔ zhù":[30763],"lá lì lā":[30764],"kuāng guāng":[30788],"gè luò":[30796],"shuò shí":[30805,30889],"wèi wéi ái":[30809],"què kè kù":[30814],"mǎng bàng":[30821],"luò lòng":[30822],"yǒng tóng":[30823],"nüè":[30840,34384],"kēng kěng":[30843],"yān yǎn":[30845],"zhuì chuí duǒ":[30846],"kōng kòng":[30847],"zòng cóng":[30850],"jiān zhàn":[30858],"lù liù":[30860,38470],"què xī":[30863],"lún lǔn lùn":[30870],"náo gāng":[30873],"jié yà":[30883],"wèi wěi":[30888],"tí dī":[30894],"chá chā":[30900],"qiāo què":[30907],"sù xiè":[30911],"liú liù":[30914,36955,37798,39311],"sī tí":[30915],"bàng páng":[30917],"huá kě gū":[30918],"wěi kuǐ":[30920],"xiá qià yà":[30925],"lián qiān":[30927],"wèi ái gài":[30929],"lá lā":[30934],"áo qiāo":[30941],"pēng pèng":[30942,38299],"yīn yǐn":[30948],"lěi léi":[30949],"mó mò":[30952],"qì zhú":[30953],"láo luò":[30961],"pán bō":[30971],"jí shé":[30972],"hé qiāo qiào":[30985],"kè huò":[30986],"què hú":[30992],"è qì":[31e3],"cǎ":[31012,31032],"xián xín":[31013],"léi lěi lèi":[31015],"yán yǎn":[31033],"qí zhǐ":[31047,34452],"bēng fāng":[31050],"bì mì":[31061],"suàn":[31064,31495,31597,31639,33948],"piào piāo":[31080],"jì zhài":[31085],"shuì lèi":[31089],"jìn jīn":[31105],"chán shàn":[31109],"yáng shāng":[31123],"zhī zhǐ tí":[31124],"shàn chán":[31146],"yú yù ǒu":[31162],"zǐ zì":[31172],"chá ná":[31173],"zhǒng zhòng chóng":[31181],"hào mào":[31183],"kù kū":[31193],"zū":[31199,33861],"chèng":[31204,31338],"huó kuò":[31214,31219],"chēng chèn chèng":[31216,31281],"shì zhì":[31218,37556],"fù pū":[31231],"xùn zè":[31236],"tú shǔ":[31244],"zhùn zhǔn":[31253],"jī qí":[31256,32168,35309],"léng líng":[31260],"zuì zú sū":[31265],"xì qiè":[31271,37060],"zhǒng zhòng":[31278],"zōng zǒng":[31279],"xián jiān liàn":[31284],"zī jiū":[31285],"jī qǐ":[31293],"ròng":[31299],"shān cǎn cēn":[31303],"mén méi":[31304],"jǐ jì":[31318],"xiāo rào":[31320],"zhuō bó":[31323],"tóng zhǒng zhòng":[31324],"zuō":[31325],"biāo pāo":[31342,34280],"zhuō jué":[31345],"cuán zàn":[31347],"kōng kòng kǒng":[31354],"yū yǔ":[31355],"zhǎi":[31364,37465],"báo":[31367,38649],"kū zhú":[31371],"jiào liáo liù":[31372],"wā guī":[31376],"tiǎo yáo":[31381],"xūn yìn":[31400],"yà yē":[31403],"tián diān yǎn":[31412],"chāo kē":[31420],"kuǎn cuàn":[31421,31422],"chù qì":[31440],"qǔ kǒu":[31448],"jìng zhěn":[31463],"kǎn kàn":[31479],"zhú dǔ":[31482],"lè jīn":[31483],"zhuì ruì":[31501],"háng hàng":[31504],"cén jìn hán":[31506],"dā xiá nà":[31514],"zé zuó":[31534],"lóng lǒng":[31548,31725,31840,36504,40851],"zhù zhú":[31569,31689],"dá dā":[31572,33605],"shāi":[31579,31721,31745,31853],"yún jūn":[31584],"láng làng":[31588,37070,38406],"zhì zhǐ":[31595],o:[31613],"póu bù fú pú":[31617],"pái bēi":[31620],"gè":[31623,34428,37499,38124],"tái chí":[31624],"guǎi dài":[31625],"zhào dào":[31628],"jīng qìng":[31632],"lín lǐn":[31638],"jùn qūn":[31640],"shī yí":[31671,37366],"yuē yào chuò":[31673],"xiāo shuò qiào":[31678],"gōng gǎn lǒng":[31714],"páng péng":[31715],"zhuó huò":[31719],"jiǎn jiān":[31727],"dí zhú":[31732],"zān cēn cǎn":[31736],"zhuàn suǎn zuàn":[31737],"piǎo biāo":[31739],"guó guì":[31746],"cè jí":[31758],"mì miè":[31770],"shāi sī":[31771],"sǔn zhuàn":[31784],"gàn gǎn":[31795],"bò bǒ":[31800],"bó bù":[31807],shi:[31810],"zhēn jiān":[31816],"zhuàn zuǎn":[31825],"fān pān biān":[31827],"sǒu shǔ":[31828],"zuǎn":[31851,32356,32386,32393,32408,32565],"nǚ":[31865,37369,38037],"shā chǎo":[31878],"kāng jīng":[31879],"fěn":[31881,40698],"cū":[31895,35285,40577,40580,40612],"nián zhān":[31896],"cè sè":[31907],"zhōu yù":[31909],"shēn sǎn":[31937],"biān biǎn":[31940,33849],"miàn":[31942,38754,38755,40618,40619,40629,40634],"hú hū hù":[31946],"gǔ gòu":[31955],"mí méi":[31964],"sǎn shēn":[31965,31971],"zāo":[31967,36455,36973,37289],"mì sī":[31992],"jiū jiǔ":[31994],"xì jì":[31995,32363],"zhēng zhěng":[31997],"chà chǎ":[32001,34921],"yuē yāo":[32004,32422],"hóng gōng":[32005,32418],"hé gē":[32007,32421],"wén wèn":[32011,32441],"fóu":[32017],"jì jié jiè":[32018],"pī pí bǐ":[32021,32432],"jīn jìn":[32031],"zhā zā":[32037,32046],"hā":[32038],"fū fù":[32040],"chōu chóu":[32044],"lèi léi lěi":[32047],"bō bì":[32052],"tiǎn zhěn":[32062],"jiōng jiǒng":[32069],"jié jiē":[32080,32467,33410],"guà kuā":[32083],"bǎi mò":[32084],"gēng huán":[32089],"jié xié":[32092],"quán shuān":[32095],"gǎi ǎi":[32096],"luò lào":[32097,32476],"bīng bēng pēng":[32099],"gěi jǐ":[32102,32473],"tóng tōng dòng":[32103],"tiào diào dào":[32105],"lěi lèi léi":[32107],"gāi hài":[32111],"chī zhǐ":[32122],"wèn miǎn mán wàn":[32123],"huán huàn wàn":[32132],"qīn xiān":[32133],"tì tí":[32136],"yán xiàn":[32150],"zōng zèng zòng":[32156],"chēn lín":[32157],"zhǔn zhùn":[32167],"qiàn qīng zhēng":[32170],"qìng qǐ":[32174],"lún guān":[32184,32438],"chuò chāo":[32189,32496],"tián tǎn chān":[32194],"lǜ lù":[32209,32511],"ruǎn ruàn":[32219],"jí qī":[32221],"zhòng chóng":[32223,37325],"miáo máo":[32226],"xiè yè":[32228],"huǎn":[32233,32531],"gēng gèng":[32234,32262],"tōu xū shū":[32240],"zōng zòng":[32245,32332],"yùn gǔn":[32247],"guā wō":[32250],"yùn yūn wēn":[32252,32277],"bāng bàng":[32269],"gǔ hú":[32270,40379],"cī cuò suǒ":[32274],"cuī shuāi":[32279],"róng rǒng ròng":[32281],"zài zēng":[32289],"cài":[32297,33756,34081],"féng fèng":[32299],"suō sù":[32302,32553],"yǎn yǐn":[32303,37203],"zòng zǒng":[32305,32437],"zhuàn juàn":[32307],"mò mù":[32312,33707],"piǎo piāo":[32313,32549],"fán pó":[32321],"bēng bèng":[32323],"móu miù miào liǎo":[32326],"yáo yóu zhòu":[32327],"zēng zèng":[32338,32559],"jú jué":[32344],"chuō chuò":[32347],"zūn zǔn":[32348],"rào":[32350,32469,36982],"chǎn chán":[32351],"huì huí":[32354,32523,34289],"qiāo sāo zǎo":[32368],"jiǎo zhuó":[32371,32564],"dàn tán chán":[32373],"nǒng":[32375],"pú fú":[32384],"yào lì":[32389],"rǎng xiāng":[32405],"lí sǎ xǐ lǐ":[32410],"xiān qiàn":[32420],"jīng jìng":[32463],"tí tì":[32488],"bēng běng bèng":[32503],"zōng zèng":[32508],"jī qī":[32521],"wēn yùn yūn":[32522],"fèng féng":[32541],"shuāi cuī suī":[32542],"miù móu liáo miào mù":[32554],"qiāo sāo":[32562],"fǒu":[32566,32569,32571,38636,40192],"bà ba pí":[32610,32631],"guà guǎi":[32619],"yáng xiáng":[32650,32655],"měi gāo":[32665],"yì xī":[32667],"qiǎng qiān":[32671],"qiāng kòng":[32683],"qián xián yán":[32684],"nóu":[32698],"hóng gòng":[32702],"pī bì pō":[32717],"qú yù":[32721],"ké":[32727],"qiào qiáo":[32728],"zhái dí":[32735],"dào zhōu":[32738],"hóu qú":[32757],"shuǎ":[32781],"ruǎn nuò":[32782],"ér nài":[32783],"zhuān duān":[32785],"pá bà":[32793],"chí sì":[32795],"qù chú":[32797],"lún lǔn":[32803],"jí jiè":[32804],"tāng tǎng":[32805],"pǎng":[32810,35243],"zhá zé":[32811],"yē yé":[32822],"yún yíng":[32826],"wà tuǐ zhuó":[32841],"ér nǜ":[32847],"tiē zhé":[32849],"dǐ zhì":[32860],"qié":[32890],"nǐ jiàn":[32891],"lèi lē":[32907],"cào":[32911,35161,37173,40732],"bó dí":[32913],"xiào xiāo":[32918],"dù dǔ":[32922],"chāi":[32926,37365,38039],"hán qín hàn":[32931],"pàng pán pàn":[32936,32982],"zhūn chún":[32939],"āng":[32942,39599],"yù yō":[32946],"pí bǐ bì":[32950],"fèi bì":[32967],"bèi bēi":[32972],"fèi zǐ":[32975],"píng pēng":[32979,33529],"fū fú zhǒu":[32981],"shèng shēng":[32988],"kuà":[33007,36328,39611],"gǎi hǎi":[33010],"gē gé gā":[33011],"néng nài":[33021],"guī kuì":[33023],"mài mò":[33033],"zāng zàng":[33039],"jiǎo jué":[33050,35282],"cuǒ":[33054],"de te":[33062],"zuī juān":[33063],"něi":[33070,33095,39186,39297,39870,39896],"pú fǔ":[33071],"niào":[33074],"shuí":[33085],"guò":[33090,36942,37945],"là xī":[33098],"yān ā":[33100],"gāo gào":[33167],"lù biāo":[33172],"chuái":[33175],"zhuān chuán chún zhuǎn":[33182],"chuài":[33194,36409],"fán pán":[33200],"wǔ hū":[33204],"shān dàn":[33211],"tún":[33216,33227,34508,35928,35930,36568,38677,39145,39272,39784,40064,40663],"bì bei":[33218],"là gé":[33224],"sào sāo":[33226],"nào":[33233,38297,38393,39719],"ní luán":[33249],"qiān xián":[33252],"guàng jiǒng":[33254],"guǎng jiǒng":[33257],"chòu xiù":[33261],"mián biān":[33265],"dié zhí":[33271],"zhī jìn":[33272],"shè shě":[33293],"pù":[33302,33303],"bān bō pán":[33324],"kuā":[33343],"gèn gěn":[33390],"sè shǎi":[33394],"fú bó":[33396],"jiāo qiú":[33405],"chāi chā":[33414],"sháo què":[33421],"hù xià":[33424],"zì zǐ":[33427],"huì hū":[33428],"tún chūn":[33434],"jiè gài":[33445],"xù zhù":[33447],"yuán yán":[33451],"xīn xìn":[33455],"lún huā":[33458],"wù hū":[33460],"gōu gǒu":[33462],"mào máo":[33468],"fèi fú":[33470],"chán yín":[33474],"qiē":[33478],"sū sù":[33487],"tiáo sháo":[33493],"lì jī":[33497],"kē hē":[33499],"jù qǔ":[33507],"ruò rě":[33509],"zhù níng":[33511],"pā bó":[33513],"xiú":[33516],"zhǎ zuó":[33522],"jū chá":[33524],"nié":[33526],"shēng ruí":[33532],"qié jiā":[33540],"zǐ cí":[33544],"qiàn xī":[33564],"chǎi":[33565],"fá pèi":[33591],"ráo":[33627,34136,35155,39250,39286],"yíng xíng":[33637],"qián xún":[33640,34113],"yìn yīn":[33643],"hé hè":[33655],"shā suō":[33678],"péng fēng":[33681],"shēn xīn":[33688],"wǎn guān guǎn":[33694],"yóu sù":[33700],"shāo xiāo":[33702,34552],"làng liáng":[33704],"piǎo fú":[33705],"wèn wǎn miǎn":[33708],"shì shí":[33715,33940],"tù tú":[33717],"xiān liǎn":[33718,34207],"wǎn yù":[33728],"zōu chù":[33734],"lù lǜ":[33737],"jūn jùn":[33740],"niè rěn":[33741],"zī zì zāi":[33745],"tú tù":[33759],"jiē shà":[33768],"qiáo zhǎo":[33772],"tái zhī chí":[33773],"fēi fěi":[33778,34586],"qín qīn jīn":[33779],"zū jù":[33785,33961],"lǐn má":[33787],"tián tiàn":[33790],"tiē":[33820,36028,36148],"luò là lào luō":[33853],"zhù zhuó zhe":[33879],"shèn rèn":[33882],"gě gé":[33883],"jùn suǒ":[33904],"kuì kuài":[33929],"rú ná":[33944],"méng mēng měng":[33945],"yuán huán":[33949],"xú shú":[33955],"xí xì":[33973],"mì míng":[33986],"sōu sǒu":[33987],"gài gě hé hài":[33995],"yǎo zhuó":[34004],"diào tiáo dí":[34023],"xū qiū fū":[34034],"zí jú":[34043],"liǎo lù":[34044],xu:[34047],"hàn hǎn":[34058],"màn wàn mán":[34067],"pó bò":[34082],"fān fán bō":[34115],"hóng hòng":[34171],"yù ào":[34177,38569],"xí xiào":[34178],"báo bó bò":[34180],"cí zī":[34187],"wàn luàn":[34189],"kǎo hāo":[34215],"yuǎn wěi":[34227],"zhòu chóu":[34229],"wō mái":[34230],"xiāo hào":[34243],"yù xù xū":[34247],"jiè jí":[34249],"diào zhuó":[34251],"cáng zàng":[34255],"lǎ":[34270],"chú zhū":[34296],"pín píng":[34315],"gān hán":[34423],"hóng jiàng":[34425],"huī huǐ":[34426],"xiā há":[34430],"mǎ mà mā":[34434],"fāng bàng":[34436],"bàng bèng":[34444],"jué quē":[34455],"qín qián":[34457],"gōng zhōng":[34467],"fǔ fù":[34469],"dài dé":[34478],"gǒu qú xù":[34492],"bǒ pí":[34494],"shé yí":[34503],"tiě":[34504,37444,37525,37921,37941,38081,39510],"gé luò":[34514],"máng bàng":[34518],"yì xǔ":[34529],"há gé":[34532],"qiè ní":[34538],"é yǐ":[34558],"zhē zhé":[34567],"là zhà":[34593],"suò":[34614,36900],"yóu qiú":[34660],"xiā hā":[34662],"xī qī":[34695],"bī pí":[34709],"nài něng":[34714],"hé xiá":[34715],"guì huǐ":[34717],"mǎ mā mà":[34718],"shì zhē":[34731],"zhì dié":[34738],"jiàn chán":[34745],"ma má mò":[34758],"mǎng měng":[34770],"biē bié":[34782],"bēn fèi":[34790],"láo liáo":[34791],"yín xún":[34795],"lí lǐ":[34849],"xuè xiě":[34880],"xíng háng hàng héng":[34892],"shuāi cuī":[34928],"tuó tuō":[34953],"lǐng líng":[34954],"bào páo pào":[34956],"jù jiē":[34963],"hè kè":[34964],"yí yì":[34968,36004],"nà jué":[34982],"bèi pī":[34987],"chǐ nuǒ":[34994],"chǐ qǐ duǒ nuǒ":[34995],"jiá qiā jié":[34999],"bó mò":[35001],"guī guà":[35007],"liè liě":[35010],"chéng chěng":[35022],"jiē gé":[35027],"dāo chóu":[35055],"shang cháng":[35059],"yuān gǔn":[35063],"yǎn ān":[35066],"tì xī":[35068],"fù fú":[35092],"chǔ zhǔ":[35098],"tuì tùn":[35114],"lǎi":[35184],"yào yāo":[35201],"qín tán":[35203],"jiàn xiàn":[35211,35265],"piǎn":[35217,35550,35869,36021],"piē miè":[35221],"yíng yǐng":[35246],"qù qū":[35248,35255,35281],"jiàn biǎn":[35253],"luó luǎn":[35254],"zī zuǐ":[35292],"huà xiè":[35295],"jiě jiè xiè":[35299,35303],"xué hù":[35319],"lì lù":[35323],"tǎo":[35342,35752],"zhùn":[35376],"zī zǐ":[35390],"yí dài":[35410,35794],"xiòng":[35415,35783],"diào tiǎo":[35458],"yí chǐ chì":[35459],"lǎng làng":[35471],"ēi éi ěi èi xī":[35474,35830],"shuà":[35484],"yǔ yù":[35486,35821,38632],"shuō shuì yuè":[35498,35828],"shuí shéi":[35504,35841],"qū juè":[35507],"chī lài":[35514],"nì ná":[35517],"diào tiáo":[35519],"pǐ bēi":[35520],"jì jī":[35525],"zé zuò zhǎ cuò":[35534],"chù jí":[35540],"háo xià":[35541],"lùn lún":[35542,35770],"shì dì":[35551],"huà guā":[35555],"xǐ shāi āi":[35568],"nán nàn":[35573,38627],"miù":[35628,35884],"zèn":[35670,35886],"shí zhì":[35672,35782],"juàn xuān":[35714],"yí tuī":[35721],"zhán":[35741],"xǔ hǔ":[35768],"xiáng yáng":[35814],"tiáo diào zhōu":[35843],"chén shèn":[35852],"mí mèi":[35868],"màn mán":[35881],"gǔ yù":[35895],"huō huò huá":[35905],"zhì zhài":[35960],"huān huán":[35974],"kěn kūn":[35975],"mò hé":[35976],"mò hé háo":[35977],"jù lóu":[35991],"zé zhài":[36012,36131],"dài tè":[36024],"bì bēn":[36033],"jiǎ gǔ jià":[36040],"xiōng mín":[36079],"càng":[36086],"zhuàn zuàn":[36090,36186],"wàn zhuàn":[36099],"gàn gòng zhuàng":[36123],"yuán yùn":[36128],"bēn bì":[36146],"jiǎ gǔ":[36158],"zǒu":[36208,36209,39888],"dié tú":[36227],"jū qiè":[36228],"qū cù":[36235,36264],"jí jié":[36236],"guā huó":[36239],"què qì jí":[36254],"tàng tāng":[36255],"chuō zhuó":[36256],"qù cù":[36259],"yuè tì":[36271],"bō bào":[36277],"kuà wù":[36278],"guì jué":[36281],"fāng fàng páng":[36285],"páo bà":[36289],"qí qǐ":[36290],"jiàn chén":[36296],"pǎo páo":[36305],"diǎn diē tiē":[36309],"jū jù qiè":[36313],"bǒ":[36315],"luò lì":[36318],"dài duò duō chí":[36322],"zhuǎi":[36329],"bèng pián":[36336],"tiào táo":[36339],"shū chōu":[36350],"liàng liáng":[36361],"tà tā":[36367],"chǎ":[36421,37972,38258],"dí zhí":[36450],"dēng dèng":[36460,37913,38251],"cèng":[36461],"dūn cún":[36466],"juě jué":[36470],"liāo":[36477],"xiè sǎ":[36512],"tǐ":[36528,36550,39605],"yà zhá gá":[36555],"xìn xiàn":[36560],"fàn guǐ":[36563],"zhuàn zhuǎn":[36578],"zhóu zhòu":[36600,36724],"bú":[36688,37293,40170],"zhuǎn zhuàn zhuǎi":[36716],"zǎi zài":[36733],"niǎn zhǎn":[36759],"biān bian":[36793],"dào biān":[36794],"yǐ yí":[36806,36836,36849],"guò guo guō":[36807],"wàng kuāng":[36811],"hái huán":[36824],"zhè zhèi":[36825],"yuǎn yuàn":[36828],"zhì lì":[36835],"zhù wǎng":[36844],"zhuī duī":[36861],"shì kuò":[36866],"tòu":[36879],"tōng tòng":[36890],"guàng":[36891],"dǎi dài":[36910],"suì suí":[36930],"tí dì":[36934],"yí wèi":[36951],"shì dí zhé":[36969],"cà":[36970],"huán hái":[36996],"lí chí":[37004],"kàng háng":[37023],"nà nèi nā":[37027],"xié yá yé yú xú":[37034],"gāi hái":[37058],"huán xún":[37063],"chī xī":[37079],"hǎo":[37085],"lì zhí":[37094],"xiáo ǎo":[37097],"dōu dū":[37117],"liǎo":[26338,37149,38269],"zàn cuán cuó":[37186,37191],"dīng dǐng":[37194],"cù zuò":[37218],"fā pō":[37222],"shāi shī":[37246],"niàng":[37247,37304],"qiú chōu":[37268],"pō fā":[37271,37297],"chǎn chěn":[37286],"yàn liǎn xiān":[37302],"niàng niáng":[37312],"lǐ li":[37324],"lí xǐ xī":[37328],"liǎo liào":[37333],"dīng dìng":[37336,38025],"qiǎo jiǎo":[37349],"yú huá":[37354],"huá wū":[37355],"rì rèn jiàn":[37360,37372],"dì dài":[37361],"pī zhāo":[37373],"yá yé":[37374],"bǎ pá":[37376,38063],"tā tuó":[37448,38090],"běi":[37491],"bǐng píng":[37500],"hā kē":[37503,38122],"chòng":[37507,38131],"xiǎng jiōng":[37508],"yù sì":[37513],"xù huì":[37514],"rén rěn":[37515],"shàn shuò":[37519],"chì lì":[37520],"xiǎn xǐ":[37521,38115],"hóu xiàng":[37527],"diào tiáo yáo":[37530],"xiān kuò tiǎn guā":[37531,37565,38118],"zhé niè":[37560],"zhōng yōng":[37567],"tōu tù dòu":[37568],"méi méng":[37570],"wàn jiǎn":[37572,37803],"tǐng dìng":[37580,38116],"juān jiān cuān":[37585],"sī tuó":[37590],"juān xuān juàn":[37591],"wú huá wū":[37592],"zhuó chuò":[37596],"xíng xìng jīng":[37598],"jū jú":[37606,38164],"zuì niè":[37623],"yuān yuǎn wǎn wān":[37626],"gāng gàng":[37628,38050],"zhuī":[37648,38181,39429,39571,40315],"ā":[37650,38165],"cuō chā":[37768],"suǒ sè":[37773],"yáo zú":[37776],"yè tà gé":[37777],"qiāng chēng":[37783],"gé lì":[37784,38217,39730],"bī pī bì":[37790],"gǎo hào":[37804],"zú chuò":[37827],"xiū xiù":[37829],"shòu sōu":[37833],"dí dī":[37841,38237],"qiāo sǎn càn":[37842],"lù áo":[37845],"tāng táng":[37852],"jiàn zàn":[37865],"huì suì ruì":[37880],"qiǎng qiāng":[37881,38250],"sǎn xiàn sà":[37886],"jiǎn jiàn":[37927,38159],"dāng chēng":[37946,38107],"zuān zuàn":[38013],"sà xì":[38033],"yào yuè":[38053],"tǒu dǒu":[38061],"zuàn zuān":[38075],"qiān yán":[38085],"pí pī":[38093],"yáo diào tiáo":[38123],"tāng tàng":[38132],"pù pū":[38138],"tán xiān":[38188],"liù liú":[38223],"hào gǎo":[38224],"táng tāng":[38231],"tán chán xín":[38241],"huò shǎn":[38276],"hàn bì":[38280,38380],"kāng kàng":[38284,38390],"xián jiàn jiān jiǎn":[38290],"xiā xiǎ":[38293],"xiǎ kě":[38300],"biàn guān":[38302],"hé gé":[38308,39052],"hòng xiàng":[38311],"sē xī":[38314],"tíng tǐng":[38318],"è yān":[38332,38415],"hòng juǎn xiàng":[38338],"bǎn pàn":[38342],"dū shé":[38349,38407],"què quē":[38357],"tāng táng chāng":[38363],"kàn hǎn":[38366,38426],"xì sè tà":[38367],"mēn mèn":[38391],"quē què":[38425],"yán diàn":[38461],"ā ē":[38463],"bēi pō pí":[38466],"yàn yǎn":[38529],"yú yáo shù":[38531],"lóng lōng":[38534],"duì zhuì":[38538],"suí duò":[38539],"gāi qí ái":[38545],"huī duò":[38547,38579],"wěi kuí":[38551],"lì dài":[38584],"zhuī cuī wéi":[38585],"hè hú":[38586,40366],"jùn juàn":[38589,38603],"nán nàn nuó":[38590],"què qiāo qiǎo":[38592],"guàn huán":[38618],"guī xī":[38623],"sè xí":[38637],"án":[38648],"wù méng":[38650],"tèng":[38703],"lù lòu":[38706],"mái":[38718],"jìng liàng":[38746],"gé jí":[38761],"bǎ":[38774],"yāng yàng":[38789],"gé tà sǎ":[38792],"biān yìng":[38805],"qiào shāo":[38808],"juān xuān":[38809],"shàng zhǎng":[38813],"pí bǐng bì bēi":[38814],la:[38817],"xiè dié":[38818],"ēng":[38821],"móu mù":[38826],"bì bǐng":[38840],"mèi wà":[38862],"rǒu":[38870],"shè xiè":[38872],"yùn wēn":[38891],"dùn dú":[38931,39039],"duǐ":[38951],"luō":[38961],"bīn pín":[38971],"yóng":[38994,39065,39979],"mān":[39010,39071],"jǐng gěng":[39048],"jié xié jiá":[39049],"kē ké":[39055],"pín bīn":[39057],"chàn zhàn":[39076],"fēng fěng":[39080,39118],"biāo diū":[39081],"bá fú":[39088],"sāo sōu":[39102],"liù liáo":[39106],"shí sì yì":[39135],"yǎng juàn":[39148],"zhù tǒu":[39155],"yí sì":[39156],"zuò zé zhā":[39157],"tiè":[39163,39214],"xiǎng náng":[39263],"táng xíng":[39271],"gē le":[39289],"chā zha":[39303],"náng nǎng":[39317],"yūn wò":[39335],"zhī shì":[39350],"xìn jìn":[39352],"kuài jué":[39363],"zǎng":[39380,39541],"tái dài":[39384],"xún xuān":[39400],"liáng láng":[39418],"piàn":[39447,39449,39575,39800],"dài tái":[39552],"sāo sǎo":[39578],"gǔ gū":[39592],"bèi mó":[39603],"xiāo qiāo":[39609],"bǎng pǎng":[39624],"bó jué":[39625],"bì pǒ":[39666],"máo méng":[39667],"kuò yuè":[39674],"bā bà":[39774,40067],"jì cǐ":[39814],"bó bà":[39818],"zhǎ zhà":[39827,40074],"chóu dài":[39832],"luò gé":[39845],"guī xié wā kuí":[39853],"xiān xiǎn":[39854,40092],"pū bū":[39878],"yì sī":[39907],"bà bó":[40076],"guī xié":[40081],"sāi xǐ":[40131],"niǎo diǎo":[40165],"diāo zhāo":[40173],"gān hàn yàn":[40177],"fū guī":[40186],"jiān qiān zhān":[40189],"hé jiè":[40353],"piān biǎn":[40355],"chuàn zhì":[40360],"cāng qiāng":[40364],"sǔn xùn":[40381],"biāo páo":[40579],"zhù cū":[40582],"jūn qún":[40583,40597],chi:[40630],"mó me":[40636],"mó me ma":[40637],"mí mǒ":[40639],"dàn shèn":[40686],"zhěn yān":[40688],"dǎn zhǎn":[40693],"miǎn mǐn měng":[40702],"hōu":[40769],"nàng":[40777],"qí jì zī zhāi":[40784],"yín kěn yǎn":[40834],"yín kěn":[40840],"gōng wò":[40847],"guī jūn qiū":[40860,40863]},y=[];Object.keys(o).forEach((n=>{const h=o[n];for(let i of h)y[i]=n;}));const l={"一个":"yí gè","这个":"zhè ge","不是":"bú shì","成为":"chéng wéi","认为":"rèn wéi","作为":"zuò wéi","部分":"bù fèn","要求":"yāo qiú","应该":"yīng gāi","增长":"zēng zhǎng","不会":"bú huì","提供":"tí gōng","那些":"nèi xiē","觉得":"jué de","任务":"rèn wu","那个":"nà ge","称为":"chēng wéi","为主":"wéi zhǔ","了解":"liǎo jiě","处理":"chǔ lǐ","皇上":"huáng shang","只要":"zhǐ yào","大量":"dà liàng","力量":"lì liàng","几乎":"jī hū","干部":"gàn bù","目的":"mù dì","行为":"xíng wéi","只见":"zhǐ jiàn","认识":"rèn shi","市长":"shì zhǎng","师父":"shī fu","调查":"diào chá","重新":"chóng xīn","分为":"fēn wéi","知识":"zhī shi","导弹":"dǎo dàn","行业":"háng yè","质量":"zhì liàng","银行":"yín háng","参与":"cān yù","充分":"chōng fèn","尽管":"jǐn guǎn","生长":"shēng zhǎng","数量":"shù liàng","应当":"yīng dāng","院长":"yuàn zhǎng","强调":"qiáng diào","只能":"zhǐ néng","音乐":"yīn yuè","以为":"yǐ wéi","处于":"chǔ yú","分子":"fèn zǐ","晚上":"wǎn shang","部长":"bù zhǎng","蒙古":"měng gǔ","只有":"zhǐ yǒu","适当":"shì dàng","只好":"zhǐ hǎo","成长":"chéng zhǎng","高兴":"gāo xìng","不了":"bù liǎo","产量":"chǎn liàng","胖子":"pàng zi","显得":"xiǎn de","只是":"zhǐ shì","似的":"shì de","率领":"shuài lǐng","改为":"gǎi wéi","不禁":"bù jīn","成分":"chéng fèn","答应":"dā yìng","少年":"shào nián","兴趣":"xìng qù","太监":"tài jiàn","休息":"xiū xi","校长":"xiào zhǎng","更新":"gēng xīn","合同":"hé tong","喝道":"hè dào","重庆":"chóng qìng","重建":"chóng jiàn","使得":"shǐ de","审查":"shěn zhā","累计":"lěi jì","给予":"jǐ yǔ","上去":"shǎng qù","行情":"háng qíng","极为":"jí wéi","冠军":"guàn jūn","仿佛":"fǎng fú","头发":"tóu fa","投降":"tóu xiáng","家长":"jiā zhǎng","仔细":"zǐ xì","要是":"yào shi","将领":"jiàng lǐng","含量":"hán liàng","更为":"gèng wéi","只得":"zhǐ de","哪些":"něi xiē","积累":"jī lěi","地处":"dì chǔ","县长":"xiàn zhǎng","少女":"shào nǚ","路上":"lù shang","只怕":"zhǐ pà","能量":"néng liàng","一度":"yí dù","储量":"chǔ liàng","供应":"gōng yìng","挑战":"tiǎo zhàn","西藏":"xī zàng","记得":"jì de","影片":"yǐng piān","总量":"zǒng liàng","当真":"dàng zhēn","将士":"jiàng shì","差别":"chā bié","较为":"jiào wéi","一处":"yī chǔ","照片":"zhào piān","长老":"zhǎng lǎo","大夫":"dài fū","差异":"chā yì","懂得":"dǒng de","尽量":"jǐn liàng","模样":"mú yàng","的确":"dí què","鱼肚":"yú dǔ","为首":"wéi shǒu","便宜":"pián yí","更名":"gēng míng","石头":"shí tou","州长":"zhōu zhǎng","为止":"wéi zhǐ","漂亮":"piào liàng","炮弹":"pào dàn","藏族":"zàng zú","哪个":"něi gè","角色":"jué sè","当作":"dàng zuò","尽快":"jǐn kuài","人为":"rén wéi","重复":"chóng fù","胡同":"hú tòng","差距":"chā jù","弟兄":"dì xiong","大将":"dà jiàng","肚子":"dǔ zi","睡觉":"shuì jiào","团长":"tuán zhǎng","队长":"duì zhǎng","区长":"qū zhǎng","难得":"nán de","丫头":"yā tou","打听":"dǎ ting","会长":"huì zhǎng","弟弟":"dì di","王爷":"wáng ye","当天":"dàng tiān","重量":"zhòng liàng","誉为":"yù wéi","家伙":"jiā huo","华山":"huà shān","椅子":"yǐ zi","流量":"liú liàng","长大":"zhǎng dà","勉强":"miǎn qiǎng","会计":"kuài jì","分散":"fēn sǎn","过分":"guò fèn","济南":"jǐ nán","调动":"diào dòng","燕京":"yān jīng","少将":"shào jiàng","中毒":"zhòng dú","晓得":"xiǎo de","变更":"biàn gēng","认得":"rèn de","苹果":"pín guǒ","念头":"niàn tou","挣扎":"zhēng zhá","三藏":"sān zàng","剥削":"bō xuē","丞相":"chéng xiàng","少量":"shǎo liàng","寻思":"xín sī","夺得":"duó de","干线":"gàn xiàn","呼吁":"hū yù","戏曲":"xì qǔ","处罚":"chǔ fá","长官":"zhǎng guān","见长":"jiàn zhǎng","柏林":"bó lín","亲戚":"qīn qi","身分":"shēn fèn","胳膊":"gē bo","着手":"zhuó shǒu","炸弹":"zhà dàn","咳嗽":"ké sou","西边":"xī bian","赢得":"yíng de","叶子":"yè zi","外长":"wài zhǎng","供给":"gōng jǐ","师长":"shī zhǎng","变量":"biàn liàng","应有":"yīng yǒu","下载":"xià zài","乐器":"yuè qì","间接":"jiàn jiē","底下":"dǐ xia","打扮":"dǎ ban","子弹":"zǐ dàn","弹药":"dàn yào","热量":"rè liàng","削弱":"xuē ruò","骨干":"gǔ gàn","容量":"róng liàng","模糊":"mó hu","转动":"zhuàn dòng","落下":"là xià","称呼":"chēng hu","科长":"kē zhǎng","处置":"chǔ zhì","歌曲":"gē qǔ","着重":"zhuó zhòng","着急":"zháo jí","强迫":"qiǎng pò","庭长":"tíng zhǎng","首相":"shǒu xiàng","喇嘛":"lǎ ma","镇长":"zhèn zhǎng","只管":"zhǐ guǎn","重重":"chóng chóng","免得":"miǎn de","灾难":"zāi nàn","着实":"zhuó shí","所得":"suǒ de","度假":"dù jià","真相":"zhēn xiàng","相貌":"xiàng mào","处分":"chǔ fèn","干预":"gàn yù","委屈":"wěi qu","为期":"wéi qī","伯伯":"bó bo","圈子":"quān zi","见识":"jiàn shi","笼罩":"lǒng zhào","外边":"wài bian","与会":"yù huì","都督":"dū du","宰相":"zǎi xiàng","较量":"jiào liàng","对称":"duì chèn","总长":"zǒng zhǎng","相公":"xiàng gong","空白":"kòng bái","大王":"dài wáng","打量":"dǎ liang","水分":"shuǐ fèn","舌头":"shé tou","没收":"mò shōu","行李":"xíng li","判处":"pàn chǔ","散文":"sǎn wén","处境":"chǔ jìng","孙子":"sūn zi","拳头":"quán tou","打发":"dǎ fa","组长":"zǔ zhǎng","骨头":"gú tou","宁可":"nìng kě","更换":"gēng huàn","薄弱":"bó ruò","还原":"huán yuán","重修":"chóng xiū","东边":"dōng bian","同行":"tóng háng","只顾":"zhǐ gù","爱好":"ài hào","馒头":"mán tou","军长":"jūn zhǎng","散发":"sàn fà","首长":"shǒu zhǎng","厂长":"chǎng zhǎng","司长":"sī zhǎng","长子":"zhǎng zǐ","强劲":"qiáng jìng","恰当":"qià dàng","头儿":"tou er","站长":"zhàn zhǎng","折腾":"zhē teng","相处":"xiāng chǔ","统率":"tǒng shuài","中将":"zhōng jiàng","命中":"mìng zhòng","名将":"míng jiàng","左边":"zuǒ bian","木头":"mù tou","动弹":"dòng dàn","地壳":"dì qiào","干活":"gàn huó","少爷":"shào ye","难民":"nàn mín","水量":"shuǐ liàng","补给":"bǔ jǐ","尾巴":"wěi ba","来得":"lái de","好奇":"hào qí","钥匙":"yào shi","当做":"dàng zuò","沉着":"chén zhuó","哑巴":"yǎ ba","车子":"chē zi","上将":"shàng jiàng","恶心":"ě xin","不对":"bú duì","担子":"dàn zi","应届":"yīng jiè","行列":"háng liè","主角":"zhǔ jué","运转":"yùn zhuàn","兄长":"xiōng zhǎng","格式":"gé shi","正月":"zhēng yuè","营长":"yíng zhǎng","当成":"dàng chéng","右边":"yòu bian","女婿":"nǚ xu","咽喉":"yān hóu","当晚":"dàng wǎn","重阳":"chóng yáng","化为":"huà wéi","双重":"shuāng chóng","吐蕃":"tǔ bō","钻进":"zuān jìn","乐队":"yuè duì","不当":"bù dàng","亮相":"liàng xiàng","被子":"bèi zi","舍得":"shě de","杉木":"shā mù","击中":"jī zhòng","里边":"lǐ bian","排长":"pái zhǎng","假期":"jià qī","分量":"fèn liàng","数次":"shuò cì","提防":"dī fáng","吆喝":"yāo he","查处":"chá chǔ","量子":"liàng zǐ","里头":"lǐ tou","两行":"liǎng háng","调研":"diào yán","伺候":"cì hou","重申":"chóng shēn","枕头":"zhěn tou","拚命":"pàn mìng","社长":"shè zhǎng","苦难":"kǔ nàn","归还":"guī huán","危难":"wēi nàn","批量":"pī liàng","畜牧":"xù mù","点着":"diǎn zháo","甚为":"shèn wéi","小将":"xiǎo jiàng","着眼":"zhuó yǎn","处死":"chǔ sǐ","厌恶":"yàn wù","鼓乐":"gǔ yuè","树干":"shù gàn","秘鲁":"bì lǔ","大方":"dà fang","外头":"wài tou","班长":"bān zhǎng","星宿":"xīng xiù","宁愿":"nìng yuàn","钦差":"qīn chāi","为数":"wéi shù","勾当":"gòu dàng","削减":"xuē jiǎn","一发":"yī fà","间谍":"jiàn dié","埋怨":"mán yuàn","结实":"jiē shi","计量":"jì liàng","淹没":"yān mò","村长":"cūn zhǎng","连长":"lián zhǎng","自给":"zì jǐ","下边":"xià bian","武将":"wǔ jiàng","温差":"wēn chā","直奔":"zhí bèn","供求":"gōng qiú","剂量":"jì liàng","道长":"dào zhǎng","泄露":"xiè lòu","王八":"wáng ba","切割":"qiē gē","间隔":"jiàn gé","一晃":"yī huǎng","长假":"cháng jià","令狐":"líng hú","为害":"wéi hài","句子":"jù zi","偿还":"cháng huán","疙瘩":"gē dā","燕山":"yān shān","堵塞":"dǔ sè","夺冠":"duó guàn","下调":"xià diào","扎实":"zhā shi","电荷":"diàn hè","看守":"kān shǒu","复辟":"fù bì","郁闷":"yù mèn","尽早":"jǐn zǎo","切断":"qiē duàn","指头":"zhǐ tou","为生":"wéi shēng","畜生":"chù sheng","切除":"qiē chú","着力":"zhuó lì","着想":"zhuó xiǎng","级差":"jí chā","投奔":"tóu bèn","棍子":"gùn zi","含糊":"hán hu","少妇":"shào fù","兴致":"xìng zhì","纳闷":"nà mèn","干流":"gàn liú","卷起":"juǎn qǐ","扇子":"shàn zi","更改":"gēng gǎi","笼络":"lǒng luò","喇叭":"lǎ ba","载荷":"zài hè","妥当":"tuǒ dàng","为难":"wéi nán","着陆":"zhuó lù","燕子":"yàn zi","干吗":"gàn má","白发":"bái fà","总得":"zǒng děi","夹击":"jiā jī","曝光":"bào guāng","曲调":"qǔ diào","相机":"xiàng jī","叫化":"jiào huā","角逐":"jué zhú","啊哟":"ā yō","载重":"zài zhòng","长辈":"zhǎng bèi","出差":"chū chāi","垛口":"duǒ kǒu","撇开":"piē kāi","厅长":"tīng zhǎng","组分":"zǔ fèn","误差":"wù chā","家当":"jiā dàng","传记":"zhuàn jì","个子":"gè zi","铺设":"pū shè","干事":"gàn shì","杆菌":"gǎn jūn","五更":"wǔ gēng","定量":"dìng liàng","运载":"yùn zài","会儿":"huì er","酋长":"qiú zhǎng","重返":"chóng fǎn","差额":"chā é","露面":"lòu miàn","钻研":"zuān yán","大城":"dài chéng","上当":"shàng dàng","销量":"xiāo liàng","洋行":"yáng háng","作坊":"zuō fang","照相":"zhào xiàng","哎呀":"āi yā","调集":"diào jí","看中":"kàn zhòng","议长":"yì zhǎng","风筝":"fēng zheng","一应":"yī yīng","辟邪":"bì xié","空隙":"kòng xì","更迭":"gēng dié","偏差":"piān chā","声调":"shēng diào","农行":"nóng háng","适量":"shì liàng","屯子":"tún zi","搜查":"sōu zhā","无量":"wú liàng","空地":"kòng dì","调度":"diào dù","一曲":"yī qǔ","散射":"sǎn shè","太行":"tài háng","创伤":"chuāng shāng","海参":"hǎi shēn","满载":"mǎn zài","重叠":"chóng dié","落差":"luò chā","单调":"dān diào","老将":"lǎo jiàng","人参":"rén shēn","间断":"jiàn duàn","重现":"chóng xiàn","夹杂":"jiā zá","调用":"diào yòng","萝卜":"luó bo","附着":"fù zhuó","应声":"yīng shēng","主将":"zhǔ jiàng","罪过":"zuì guo","咀嚼":"jǔ jué","为政":"wéi zhèng","过量":"guò liàng","乐曲":"yuè qǔ","负荷":"fù hè","枪弹":"qiāng dàn","悄然":"qiǎo rán","处方":"chǔ fāng","悄声":"qiǎo shēng","曲子":"qǔ zi","情调":"qíng diào","一着":"yī zhāo","挑衅":"tiǎo xìn","代为":"dài wéi","了结":"liǎo jié","打中":"dǎ zhòng","酒吧":"jiǔ bā","作曲":"zuò qǔ","懒得":"lǎn de","增量":"zēng liàng","衣着":"yī zhuó","部将":"bù jiàng","要塞":"yào sài","茶几":"chá jī","杠杆":"gàng gǎn","出没":"chū mò","鲜有":"xiǎn yǒu","间隙":"jiàn xì","重担":"zhòng dàn","重演":"chóng yǎn","应酬":"yìng chou","只当":"zhǐ dāng","毋宁":"wú nìng","包扎":"bāo zā","前头":"qián tou","卷烟":"juǎn yān","非得":"fēi děi","弹道":"dàn dào","上调":"shàng diào","杆子":"gān zi","门将":"mén jiàng","后头":"hòu tou","标识":"biāo zhì","喝彩":"hè cǎi","暖和":"nuǎn huo","更深":"gēng shēn","累积":"lěi jī","引得":"yǐn de","调遣":"diào qiǎn","倔强":"jué jiàng","宝藏":"bǎo zàng","丧事":"sāng shì","约莫":"yuē mo","纤夫":"qiàn fū","更替":"gēng tì","装载":"zhuāng zài","背包":"bēi bāo","帖子":"tiě zi","松散":"sōng sǎn","支行":"zhī háng","呼喝":"hū hè","可恶":"kě wù","自转":"zì zhuàn","供电":"gōng diàn","反省":"fǎn xǐng","坦率":"tǎn shuài","苏打":"sū dá","本分":"běn fèn","落得":"luò de","鄙薄":"bǐ bó","相间":"xiāng jiàn","单薄":"dān bó","混蛋":"hún dàn","发难":"fā nàn","贞观":"zhēn guàn","附和":"fù hè","能耐":"néng nai","吓唬":"xià hu","未了":"wèi liǎo","引着":"yǐn zháo","抽调":"chōu diào","沙子":"shā zi","席卷":"xí juǎn","标的":"biāo dì","别扭":"biè niu","思量":"sī liang","喝采":"hè cǎi","论语":"lún yǔ","盖子":"gài zi","曲艺":"qǔ yì","分外":"fèn wài","弄堂":"lòng táng","乐舞":"yuè wǔ","雨量":"yǔ liàng","毛发":"máo fà","差遣":"chāi qiǎn","曲目":"qǔ mù","背负":"bēi fù","转速":"zhuàn sù","声乐":"shēng yuè","夹攻":"jiā gōng","供水":"gōng shuǐ","主干":"zhǔ gàn","逃难":"táo nàn","惩处":"chéng chǔ","长相":"zhǎng xiàng","公差":"gōng chāi","行当":"háng dang","榴弹":"liú dàn","省得":"shěng de","条子":"tiáo zi","重围":"chóng wéi","阻塞":"zǔ sè","劲风":"jìng fēng","纠葛":"jiū gé","颠簸":"diān bǒ","点中":"diǎn zhòng","避难":"bì nàn","重创":"zhòng chuāng","姥姥":"lǎo lao","迷糊":"mí hu","公家":"gōng jia","几率":"jī lǜ","苦闷":"kǔ mèn","度量":"dù liàng","差错":"chā cuò","暑假":"shǔ jià","参差":"cēn cī","搭载":"dā zài","助长":"zhù zhǎng","相称":"xiāng chèn","红晕":"hóng yùn","舍命":"shě mìng","喜好":"xǐ hào","列传":"liè zhuàn","劲敌":"jìng dí","蛤蟆":"há má","三重":"sān chóng","请假":"qǐng jià","钉子":"dīng zi","沉没":"chén mò","高丽":"gāo lí","休假":"xiū jià","无为":"wú wéi","巴结":"bā jì","了得":"liǎo de","变相":"biàn xiàng","核弹":"hé dàn","亲家":"qìng jia","承载":"chéng zài","行家":"háng jia","喝问":"hè wèn","还击":"huán jī","交还":"jiāo huán","当夜":"dàng yè","将令":"jiàng lìng","单于":"chán yú","空缺":"kòng quē","绿林":"lù lín","胆量":"dǎn liàng","执着":"zhí zhuó","低调":"dī diào","责难":"zé nàn","闭塞":"bì sè","轻薄":"qīng bó","得当":"dé dàng","占卜":"zhān bǔ","排行":"pái háng","扫帚":"sào zhou","龟兹":"qiū cí","年长":"nián zhǎng","外传":"wài zhuàn","头子":"tóu zi","裁缝":"cái féng","礼乐":"lǐ yuè","血泊":"xuè pō","散乱":"sǎn luàn","动量":"dòng liàng","倒腾":"dǎo teng","取舍":"qǔ shě","咱家":"zá jiā","长发":"cháng fà","爪哇":"zhǎo wā","弹壳":"dàn ké","省悟":"xǐng wù","嚷嚷":"rāng rang","连累":"lián lěi","应得":"yīng dé","族长":"zú zhǎng","患难":"huàn nàn","抽查":"chōu zhā","柜子":"guì zi","擂鼓":"léi gǔ","眩晕":"xuàn yùn","调配":"diào pèi","躯干":"qū gàn","差役":"chāi yì","坎坷":"kǎn kě","少儿":"shào ér","乐团":"yuè tuán","养分":"yǎng fèn","退还":"tuì huán","格调":"gé diào","语调":"yǔ diào","音调":"yīn diào","乐府":"yuè fǔ","古朴":"gǔ piáo","打点":"dǎ dian","差使":"chāi shǐ","磨难":"mó nàn","匀称":"yún chèn","瘦削":"shòu xuē","膏药":"gāo yao","吞没":"tūn mò","调任":"diào rèn","散居":"sǎn jū","上头":"shàng tou","大难":"dà nàn","风靡":"fēng mǐ","放假":"fàng jià","估量":"gū liang","失当":"shī dàng","中弹":"zhòng dàn","妄为":"wàng wéi","长者":"zhǎng zhě","起哄":"qǐ hòng","末了":"mò liǎo","相声":"xiàng sheng","校正":"jiào zhèng","劝降":"quàn xiáng","矢量":"shǐ liàng","沉闷":"chén mèn","给与":"jǐ yǔ","解法":"xiè fǎ","塞外":"sài wài","将校":"jiàng xiào","嗜好":"shì hào","没落":"mò luò","朴刀":"pō dāo","片子":"piān zi","切削":"qiē xiāo","弹丸":"dàn wán","昆曲":"kūn qǔ","雅致":"yǎ zhi","稀薄":"xī bó","亏得":"kuī de","死难":"sǐ nàn","间歇":"jiàn xiē","翘首":"qiáo shǒu","色调":"sè diào","处决":"chǔ jué","表率":"biǎo shuài","尺子":"chǐ zi","招降":"zhāo xiáng","称职":"chèn zhí","斗篷":"dǒu peng","铺子":"pù zi","底子":"dǐ zi","负载":"fù zài","干警":"gàn jǐng","倒数":"dào shǔ","将官":"jiàng guān","锄头":"chú tou","归降":"guī xiáng","疟疾":"nüè ji","唠叨":"láo dao","限量":"xiàn liàng","一打":"yī dá","屏息":"bǐng xī","重逢":"chóng féng","器乐":"qì yuè","氢弹":"qīng dàn","脖颈":"bó gěng","妃子":"fēi zi","追查":"zhuī zhā","处事":"chǔ shì","参量":"cān liàng","轻率":"qīng shuài","缥缈":"piāo miǎo","幸得":"xìng de","中奖":"zhòng jiǎng","才干":"cái gàn","施舍":"shī shě","卷子":"juǎn zi","游说":"yóu shuì","巷子":"xiàng zi","臂膀":"bì bǎng","切勿":"qiē wù","看管":"kān guǎn","风头":"fēng tou","精干":"jīng gàn","高差":"gāo chā","恐吓":"kǒng hè","扁担":"biǎn dàn","给养":"jǐ yǎng","格子":"gé zi","供需":"gōng xū","反差":"fǎn chā","飞弹":"fēi dàn","微薄":"wēi bó","发型":"fà xíng","勘查":"kān zhā","即兴":"jí xìng","攒动":"cuán dòng","间或":"jiàn huò","浅薄":"qiǎn bó","乐章":"yuè zhāng","顺差":"shùn chā","调子":"diào zi","相位":"xiàng wèi","转子":"zhuàn zǐ","劲旅":"jìng lǚ","咔嚓":"kā chā","了事":"liǎo shì","转悠":"zhuàn you","芍药":"sháo yao","当铺":"dàng pù","爪子":"zhuǎ zi","单子":"dān zi","好战":"hào zhàn","燕麦":"yān mài","只许":"zhǐ xǔ","干练":"gàn liàn","女将":"nǚ jiàng","酒量":"jiǔ liàng","划船":"huá chuán","伎俩":"jì liǎng","挑拨":"tiǎo bō","少校":"shào xiào","着落":"zhuó luò","憎恶":"zēng wù","刻薄":"kè bó","口角":"kǒu jué","马尾":"mǎ yǐ","要挟":"yāo xié","用处":"yòng chǔ","还手":"huán shǒu","模具":"mú jù","执著":"zhí zhuó","喝令":"hè lìng","争得":"zhēng de","保长":"bǎo zhǎng","吸着":"xī zhuó","症结":"zhēng jié","公转":"gōng zhuàn","校勘":"jiào kān","重提":"chóng tí","扫兴":"sǎo xìng","舞曲":"wǔ qǔ","铺盖":"pū gài","长史":"zhǎng shǐ","差价":"chā jià","压根":"yà gēn","怔住":"zhèng zhù","强人":"qiǎng rén","应允":"yīng yǔn","切入":"qiē rù","战将":"zhàn jiàng","年少":"nián shào","舍身":"shě shēn","执拗":"zhí niù","处世":"chǔ shì","中风":"zhòng fēng","等量":"děng liàng","不菲":"bù fěi","放量":"fàng liàng","腔调":"qiāng diào","老少":"lǎo shào","没入":"mò rù","瓜葛":"guā gé","将帅":"jiàng shuài","车载":"chē zài","窝囊":"wō nāng","长进":"zhǎng jìn","可汗":"kè hán","并州":"bīng zhōu","供销":"gōng xiāo","切片":"qiē piàn","差事":"chāi shì","知会":"zhī hui","鹰爪":"yīng zhǎo","处女":"chǔ nǚ","切磋":"qiē cuō","日头":"rì tou","押解":"yā jiè","滋长":"zī zhǎng","道观":"dào guàn","脚色":"jué sè","当量":"dāng liàng","婆家":"pó jia","缘分":"yuán fèn","空闲":"kòng xián","曲牌":"qǔ pái","好色":"hào sè","行会":"háng huì","怒喝":"nù hè","笼统":"lǒng tǒng","边塞":"biān sài","何曾":"hé zēng","重合":"chóng hé","插曲":"chā qǔ","零散":"líng sǎn","轰隆":"hōng lōng","化子":"huā zi","内蒙":"nèi měng","数落":"shǔ luo","逆差":"nì chā","牟利":"móu lì","栅栏":"zhà lan","中标":"zhòng biāo","调档":"diào dàng","佝偻":"gōu lóu","场子":"chǎng zi","甲壳":"jiǎ qiào","重温":"chóng wēn","炮制":"páo zhì","返还":"fǎn huán","自传":"zì zhuàn","高调":"gāo diào","词曲":"cí qǔ","受难":"shòu nàn","殷红":"yān hóng","要约":"yāo yuē","固着":"gù zhuó","强求":"qiǎng qiú","本相":"běn xiàng","骄横":"jiāo hèng","草率":"cǎo shuài","气闷":"qì mèn","着色":"zhuó sè","宁肯":"nìng kěn","兴头":"xìng tou","拘泥":"jū nì","夹角":"jiā jiǎo","发髻":"fà jì","猛将":"měng jiàng","劫难":"jié nàn","约摸":"yuē mo","拖累":"tuō lěi","呢绒":"ní róng","钻探":"zuān tàn","夹层":"jiā céng","把子":"bà zi","落魄":"luò tuò","巷道":"hàng dào","运量":"yùn liàng","头里":"tóu li","解闷":"jiě mèn","空儿":"kòng ér","估摸":"gū mo","好客":"hào kè","小曲":"xiǎo qǔ","折衷":"shé zhōng","钻孔":"zuān kǒng","序曲":"xù qǔ","糊弄":"hù nong","荥阳":"xíng yáng","道行":"dào héng","烦闷":"fán mèn","仓卒":"cāng cù","分叉":"fēn chà","曲率":"qǔ lǜ","相片":"xiàng piān","内行":"nèi háng","厂子":"chǎng zi","小调":"xiǎo diào","少阳":"shào yáng","受降":"shòu xiáng","染坊":"rǎn fáng","胳臂":"gē bei","将门":"jiàng mén","模板":"mú bǎn","配给":"pèi jǐ","为伍":"wéi wǔ","跟头":"gēn tou","划算":"huá suàn","累赘":"léi zhui","哄笑":"hōng xiào","晕眩":"yùn xuàn","干掉":"gàn diào","缝制":"féng zhì","难处":"nán chǔ","着意":"zhuó yì","蛮横":"mán hèng","干将":"gàn jiàng","奇数":"jī shù","短发":"duǎn fà","生还":"shēng huán","还清":"huán qīng","看护":"kān hù","直率":"zhí shuài","奏乐":"zòu yuè","载客":"zài kè","专横":"zhuān hèng","湮没":"yān mò","空格":"kòng gé","铺垫":"pū diàn","良将":"liáng jiàng","哗啦":"huā lā","散漫":"sǎn màn","脱发":"tuō fà","两重":"liǎng chóng","送还":"sòng huán","埋没":"mái mò","累及":"lěi jí","薄雾":"bó wù","调离":"diào lí","舌苔":"shé tāi","机长":"jī zhǎng","栓塞":"shuān sè","配角":"pèi jué","切口":"qiē kǒu","创口":"chuāng kǒu","哈欠":"hā qian","实弹":"shí dàn","铺平":"pū píng","哈达":"hǎ dá","懒散":"lǎn sǎn","实干":"shí gàn","填空":"tián kòng","刁钻":"diāo zuān","乐师":"yuè shī","量变":"liàng biàn","诱降":"yòu xiáng","搪塞":"táng sè","购得":"gòu de","征调":"zhēng diào","夹道":"jiā dào","干咳":"gān ké","乐工":"yuè gōng","商行":"shāng háng","划过":"huá guò","着火":"zháo huǒ","更正":"gēng zhèng","给付":"jǐ fù","空子":"kòng zi","哪吒":"né zhā","散曲":"sǎn qǔ","行规":"háng guī","正着":"zhèng zháo","刁难":"diāo nàn","刷子":"shuā zi","丧葬":"sāng zàng","夹带":"jiā dài","安分":"ān fèn","中意":"zhòng yì","长孙":"zhǎng sūn","校订":"jiào dìng","卷曲":"juǎn qū","载运":"zài yùn","投弹":"tóu dàn","柞蚕":"zuò cán","份量":"fèn liàng","外行":"wài háng","调换":"diào huàn","了然":"liǎo rán","咧嘴":"liě zuǐ","典当":"diǎn dàng","寒假":"hán jià","长兄":"zhǎng xiōng","给水":"jǐ shuǐ","须发":"xū fà","枝干":"zhī gàn","属相":"shǔ xiang","哄抢":"hōng qiǎng","刻划":"kè huá","手把":"shǒu bà","塞子":"sāi zi","单干":"dān gàn","还乡":"huán xiāng","兆头":"zhào tou","寺观":"sì guàn","督率":"dū shuài","受累":"shòu lěi","天台":"tiān tāi","啊哈":"ā hā","割舍":"gē shě","抹布":"mā bù","好恶":"hào wù","下处":"xià chǔ","消长":"xiāo zhǎng","离间":"lí jiàn","准头":"zhǔn tou","校对":"jiào duì","什物":"shí wù","番禺":"pān yú","佛爷":"fó ye","备查":"bèi zhā","吗啡":"mǎ fēi","盐分":"yán fèn","当月":"dàng yuè","虎将":"hǔ jiàng","薄荷":"bò he","独处":"dú chǔ","空位":"kòng wèi","铺路":"pū lù","乌拉":"wù la","调回":"diào huí","来头":"lái tou","闲散":"xián sǎn","胶卷":"jiāo juǎn","冒失":"mào shi","干劲":"gàn jìn","弦乐":"xián yuè","行伍":"háng wǔ","相国":"xiàng guó","查查":"zhā zhā","丹参":"dān shēn","助兴":"zhù xìng","铺开":"pū kāi","次长":"cì zhǎng","发卡":"fà qiǎ","拮据":"jié jū","刹车":"shā chē","生发":"shēng fà","重播":"chóng bō","缝合":"féng hé","音量":"yīn liàng","少尉":"shào wèi","殉难":"xùn nàn","冲压":"chòng yā","苍劲":"cāng jìng","厚薄":"hòu bó","威吓":"wēi hè","外相":"wài xiàng","曲谱":"qǔ pǔ","呼号":"hū háo","着迷":"zháo mí","挑担":"tiāo dàn","纹路":"wén lu","一沓":"yī dá","还俗":"huán sú","强横":"qiáng hèng","四行":"sì háng","着数":"zhāo shù","国难":"guó nàn","降顺":"xiáng shùn","挑明":"tiǎo míng","眯缝":"mī feng","分内":"fèn nèi","更衣":"gēng yī","软和":"ruǎn huo","尽兴":"jìn xìng","号子":"hào zi","爪牙":"zhǎo yá","败将":"bài jiàng","猜中":"cāi zhòng","结扎":"jié zā","没空":"méi kòng","夹缝":"jiā fèng","拾掇":"shí duo","掺和":"chān huo","簸箕":"bò ji","电量":"diàn liàng","荷载":"hè zǎi","漯河":"luò tà hé","调式":"diào shì","处身":"chǔ shēn","打手":"dǎ shou","弹弓":"dàn gōng","横蛮":"hèng mán","能干":"néng gàn","校点":"jiào diǎn","加载":"jiā zài","干校":"gàn xiào","哄传":"hōng chuán","校注":"jiào zhù","淤塞":"yū sè","马扎":"mǎ zhá","月氏":"yuè zhī","高干":"gāo gàn","经传":"jīng zhuàn","曾孙":"zēng sūn","好斗":"hào dòu","关卡":"guān qiǎ","逃奔":"táo bèn","磨蹭":"mó ceng","牟取":"móu qǔ","颤栗":"zhàn lì","蚂蚱":"mà zha","撮合":"cuō he","趔趄":"liè qie","摔打":"shuāi dá","台子":"tái zi","分得":"fēn de","粘着":"nián zhuó","采邑":"cài yì","散装":"sǎn zhuāng","婀娜":"ē nuó","兴味":"xìng wèi","行头":"xíng tou","气量":"qì liàng","调运":"diào yùn","处治":"chǔ zhì","乐音":"yuè yīn","组曲":"zǔ qǔ","充塞":"chōng sè","恫吓":"dòng hè","论调":"lùn diào","相中":"xiāng zhòng","民乐":"mín yuè","炮仗":"pào zhang","丧服":"sāng fú","骁将":"xiāo jiàng","量刑":"liàng xíng","缝补":"féng bǔ","财会":"cái kuài","大干":"dà gàn","呱呱":"gū gū","历数":"lì shǔ","校场":"jiào chǎng","塞北":"sài běi","识相":"shí xiàng","辱没":"rǔ mò","鲜亮":"xiān liang","语塞":"yǔ sè","露脸":"lòu liǎn","凉快":"liáng kuai","腰杆":"yāo gǎn","溜达":"liū da","嘎嘎":"gā gā","公干":"gōng gàn","桔梗":"jié gěng","挑逗":"tiǎo dòu","看门":"kān mén","海难":"hǎi nàn","乐歌":"yuè gē","拓片":"tà piàn","挑动":"tiǎo dòng","准将":"zhǔn jiàng","落难":"luò nàn","遒劲":"qiú jìng","磨坊":"mò fáng","逶迤":"wēi yí","搅和":"jiǎo huo","摩挲":"mā sā","作弄":"zuō nòng","苗头":"miáo tou","打颤":"dǎ zhàn","大藏":"dà zàng","畜牲":"chù sheng","勾搭":"gōu da","树荫":"shù yīn","树杈":"shù chà","铁杆":"tiě gǎn","将相":"jiàng xiàng","份子":"fèn zi","视差":"shì chā","绿荫":"lǜ yīn","枪杆":"qiāng gǎn","缝纫":"féng rèn","愁闷":"chóu mèn","点将":"diǎn jiàng","华佗":"huà tuó","劲射":"jìng shè","箱笼":"xiāng lǒng","终了":"zhōng liǎo","鬓发":"bìn fà","结巴":"jiē ba","苦干":"kǔ gàn","看家":"kān jiā","正旦":"zhēng dàn","中肯":"zhòng kěn","厦门":"xià mén","东莞":"dōng guǎn","食量":"shí liàng","宫调":"gōng diào","间作":"jiàn zuò","弹片":"dàn piàn","差池":"chā chí","漂白":"piǎo bái","杠子":"gàng zi","调处":"tiáo chǔ","好动":"hào dòng","转炉":"zhuàn lú","屏气":"bǐng qì","夹板":"jiā bǎn","哀乐":"āi yuè","干道":"gàn dào","苦处":"kǔ chǔ","劈柴":"pǐ chái","长势":"zhǎng shì","天华":"tiān huā","共处":"gòng chǔ","严查":"yán zhā","校验":"jiào yàn","出塞":"chū sài","弹子":"dàn zǐ","磨盘":"mò pán","萎靡":"wěi mǐ","奔丧":"bēn sāng","唱和":"chàng hè","大调":"dà diào","非分":"fēi fèn","钻营":"zuān yíng","夹子":"jiā zi","超载":"chāo zài","更始":"gēng shǐ","铃铛":"líng dang","披散":"pī sǎn","遭难":"zāo nàn","发还":"fā huán","转轮":"zhuàn lún","横财":"hèng cái","泡桐":"pāo tóng","抛撒":"pāo sǎ","天呀":"tiān yā","糊糊":"hū hū","躯壳":"qū qiào","通量":"tōng liàng","奉还":"fèng huán","午觉":"wǔ jiào","闷棍":"mèn gùn","浪头":"làng tou","砚台":"yàn tāi","油坊":"yóu fáng","学长":"xué zhǎng","过载":"guò zài","笔调":"bǐ diào","衣被":"yì bèi","畜产":"xù chǎn","打更":"dǎ gēng","调阅":"diào yuè","蛮干":"mán gàn","曾祖":"zēng zǔ","本行":"běn háng","提干":"tí gàn","变调":"biàn diào","覆没":"fù mò","模子":"mú zi","乐律":"yuè lǜ","称心":"chèn xīn","木杆":"mù gǎn","套曲":"tào qǔ","重印":"chóng yìn","自省":"zì xǐng","提调":"tí diào","看相":"kàn xiàng","芋头":"yù tou","下切":"xià qiē","塞上":"sài shàng","铺张":"pū zhāng","藤蔓":"téng wàn","薄幸":"bó xìng","非难":"fēi nàn","解数":"xiè shù","褪去":"tùn qù","霰弹":"xiàn dàn","柚木":"yóu mù","重载":"zhòng zài","二重":"èr chóng","痕量":"hén liàng","雅乐":"yǎ yuè","号哭":"háo kū","诈降":"zhà xiáng","猪圈":"zhū juàn","咋舌":"zé shé","铣床":"xǐ chuáng","防弹":"fáng dàn","健将":"jiàn jiàng","丽水":"lí shuǐ","削发":"xuē fà","空当":"kòng dāng","多相":"duō xiàng","鲜见":"xiǎn jiàn","划桨":"huá jiǎng","载波":"zài bō","跳蚤":"tiào zao","俏皮":"qiào pi","吧嗒":"bā dā","结发":"jié fà","了断":"liǎo duàn","同调":"tóng diào","石磨":"shí mò","时差":"shí chā","鼻塞":"bí sè","挑子":"tiāo zi","推磨":"tuī mò","武侯":"wǔ hòu","抹煞":"mǒ shā","调转":"diào zhuǎn","籍没":"jí mò","测度":"cè duó","还债":"huán zhài","调演":"diào yǎn","分划":"fēn huá","奇偶":"jī ǒu","断喝":"duàn hè","闷雷":"mèn léi","狼藉":"láng jí","饭量":"fàn liàng","还礼":"huán lǐ","转调":"zhuǎn diào","星相":"xīng xiàng","手相":"shǒu xiàng","配乐":"pèi yuè","盖头":"gài tou","连杆":"lián gǎn","簿记":"bù jì","刀把":"dāo bà","量词":"liàng cí","名角":"míng jué","步调":"bù diào","校本":"jiào běn","曲江":"qǔ jiāng","账簿":"zhàng bù","隽永":"juàn yǒng","哈罗":"hā luo","稍为":"shāo wéi","易传":"yì zhuàn","乐谱":"yuè pǔ","牵累":"qiān lěi","答理":"dā li","喝斥":"hè chì","吟哦":"yín é","干渠":"gàn qú","海量":"hǎi liàng","精当":"jīng dàng","着床":"zhuó chuáng","月相":"yuè xiàng","庶几":"shù jī","宫观":"gōng guàn","论处":"lùn chǔ","征辟":"zhēng bì","厚朴":"hòu pò","介壳":"jiè qiào","吭哧":"kēng chi","咯血":"kǎ xiě","铺陈":"pū chén","重生":"chóng shēng","乐理":"yuè lǐ","哀号":"āi háo","藏历":"zàng lì","琴曲":"qín qǔ","神曲":"shén qǔ","刚劲":"gāng jìng","削平":"xuē píng","浓荫":"nóng yīn","城垛":"chéng duǒ","识记":"zhì jì","当差":"dāng chāi","正传":"zhèng zhuàn","并处":"bìng chǔ","空难":"kōng nàn","创面":"chuāng miàn","旦角":"dàn jué","薄礼":"bó lǐ","晃荡":"huàng dang","臊子":"sào zi","家什":"jiā shí","闷头":"mèn tóu","美发":"měi fà","度数":"dù shu","着凉":"zháo liáng","闯将":"chuǎng jiàng","几案":"jī àn","姘头":"pīn tou","急难":"jí nàn","差数":"chā shù","散碎":"sǎn suì","壅塞":"yōng sè","寒颤":"hán zhàn","牵强":"qiān qiǎng","无间":"wú jiàn","轮转":"lún zhuàn","号叫":"háo jiào","铺排":"pū pái","降伏":"xiáng fú","轧钢":"zhá gāng","东阿":"dōng ē","病假":"bìng jià","累加":"lěi jiā","梗塞":"gěng sè","弹夹":"dàn jiā","钻心":"zuān xīn","晃眼":"huǎng yǎn","魔爪":"mó zhǎo","标量":"biāo liàng","憋闷":"biē mèn","猜度":"cāi duó","处士":"chǔ shì","官差":"guān chāi","讨还":"tǎo huán","长门":"zhǎng mén","馏分":"liú fèn","里弄":"lǐ lòng","色相":"sè xiàng","雅兴":"yǎ xìng","角力":"jué lì","弹坑":"dàn kēng","枝杈":"zhī chà","夹具":"jiā jù","处刑":"chǔ xíng","悍将":"hàn jiàng","好学":"hào xué","好好":"hǎo hǎo","银发":"yín fà","扫把":"sào bǎ","法相":"fǎ xiàng","贵干":"guì gàn","供气":"gōng qì","空余":"kòng yú","捆扎":"kǔn zā","瘠薄":"jí bó","浆糊":"jiàng hu","嘎吱":"gā zhī","不遂":"bù suí","调令":"diào lìng","法帖":"fǎ tiè","淋病":"lìn bìng","调派":"diào pài","转盘":"zhuàn pán","供稿":"gōng gǎo","差官":"chāi guān","忧闷":"yōu mèn","重犯":"chóng fàn","教长":"jiào zhǎng","重唱":"chóng chàng","酒兴":"jiǔ xìng","乐坛":"yuè tán","花呢":"huā ní","叱喝":"chì hè","膀臂":"bǎng bì","重头":"chóng tóu","得空":"dé kòng","转圈":"zhuàn quān","横暴":"hèng bào","哄抬":"hōng tái","引吭":"yǐn háng","载货":"zài huò","中计":"zhòng jì","官长":"guān zhǎng","相面":"xiàng miàn","看头":"kàn tou","盼头":"pàn tou","意兴":"yì xìng","军乐":"jūn yuè","累次":"lěi cì","骨嘟":"gū dū","燕赵":"yān zhào","报丧":"bào sāng","弥撒":"mí sa","挨斗":"ái dòu","扁舟":"piān zhōu","丑角":"chǒu jué","吊丧":"diào sāng","强将":"qiáng jiàng","行号":"háng háo","重奏":"chóng zòu","发辫":"fà biàn","着魔":"zháo mó","着法":"zhāo fǎ","盛放":"chéng fàng","填塞":"tián sè","凶横":"xiōng hèng","稽首":"qǐ shǒu","碑帖":"bēi tiè","冲量":"chōng liàng","发菜":"fà cài","假发":"jiǎ fà","翻卷":"fān juǎn","小量":"xiǎo liàng","胶着":"jiāo zhuó","里子":"lǐ zi","调调":"diào diao","散兵":"sǎn bīng","高挑":"gāo tiǎo","播撒":"bō sǎ","夹心":"jiā xīn","扇动":"shān dòng","叨扰":"tāo rǎo","霓裳":"ní cháng","捻子":"niǎn zi","弥缝":"mí féng","撒布":"sǎ bù","元曲":"yuán qǔ","场院":"cháng yuàn","省亲":"xǐng qīn","提拉":"dī le","惯量":"guàn liàng","强逼":"qiǎng bī","强征":"qiǎng zhēng","晕车":"yùn chē","数道":"shǔ dào","带累":"dài lěi","拓本":"tà běn","嫌恶":"xián wù","宿将":"sù jiàng","龟裂":"jūn liè","缠夹":"chán jiā","发式":"fà shì","隔扇":"gé shān","行货":"háng huò","天分":"tiān fèn","癖好":"pǐ hào","四通":"sì tòng","白术":"bái zhú","划伤":"huá shāng","角斗":"jué dòu","听差":"tīng chāi","岁差":"suì chā","丧礼":"sāng lǐ","脉脉":"mò mò","削瘦":"xuē shòu","撒播":"sǎ bō","莎草":"suō cǎo","犍为":"qián wéi","调头":"diào tóu","龙卷":"lóng juǎn","外调":"wài diào","字帖":"zì tiè","卷发":"juǎn fà","揣度":"chuǎi duó","洋相":"yáng xiàng","散光":"sǎn guāng","骨碌":"gū lu","薄命":"bó mìng","笼头":"lóng tou","咽炎":"yān yán","碌碡":"liù zhou","片儿":"piān er","纤手":"qiàn shǒu","散体":"sǎn tǐ","内省":"nèi xǐng","强留":"qiǎng liú","解送":"jiè sòng","反间":"fǎn jiàn","少壮":"shào zhuàng","一服":"yī fù","留空":"liú kòng","告假":"gào jià","咳血":"ké xiě","薄暮":"bó mù","铺轨":"pū guǐ","磨削":"mó xuē","治丧":"zhì sāng","叉子":"chā zi","哄动":"hōng dòng","蛾子":"é zi","糜子":"méi zi","出落":"chū là","股长":"gǔ zhǎng","贵处":"guì chǔ","还魂":"huán hún","例假":"lì jià","曲池":"qǔ chí","刹住":"shā zhù","身量":"shēn liàng","懂行":"dǒng háng","同好":"tóng hào","模量":"mó liàng","更生":"gēng shēng","服丧":"fú sāng","率直":"shuài zhí","字模":"zì mú","散架":"sǎn jià","答腔":"dā qiāng","交恶":"jiāo wù","薄情":"bó qíng","眼泡":"yǎn pāo","袅娜":"niǎo nuó","草垛":"cǎo duǒ","冲劲":"chòng jìn","呢喃":"ní nán","切中":"qiè zhòng","挑灯":"tiǎo dēng","还愿":"huán yuàn","激将":"jī jiàng","更鼓":"gēng gǔ","没药":"mò yào","难友":"nàn yǒu","败兴":"bài xìng","切面":"qiē miàn","散户":"sǎn hù","累进":"lěi jìn","背带":"bēi dài","秤杆":"chèng gǎn","碾坊":"niǎn fáng","簿子":"bù zi","扳手":"bān shou","铅山":"yán shān","儒将":"rú jiàng","重光":"chóng guāng","剪发":"jiǎn fà","行话":"háng huà","长上":"zhǎng shàng","小传":"xiǎo zhuàn","压轴":"yā zhòu","谱曲":"pǔ qǔ","弱冠":"ruò guàn","花卷":"huā juǎn","横祸":"hèng huò","夹克":"jiā kè","光晕":"guāng yùn","披靡":"pī mǐ","对调":"duì diào","夹持":"jiā chí","空额":"kòng é","平调":"píng diào","铺床":"pū chuáng","丧钟":"sāng zhōng","作乐":"zuò yuè","少府":"shào fǔ","数数":"shuò shuò","奔头":"bèn tou","进给":"jìn jǐ","率性":"shuài xìng","乐子":"lè zi","绑扎":"bǎng zā","挑唆":"tiǎo suō","漂洗":"piǎo xǐ","夹墙":"jiā qiáng","咳喘":"ké chuǎn","乜斜":"miē xie","错处":"cuò chǔ","闷酒":"mèn jiǔ","时调":"shí diào","重孙":"chóng sūn","经幢":"jīng chuáng","圩场":"xū cháng","调门":"diào mén","花头":"huā tou","划拉":"huá la","套色":"tào shǎi","粗率":"cū shuài","相率":"xiāng shuài","款识":"kuǎn zhì","吁请":"yù qǐng","荫蔽":"yīn bì","文蛤":"wén gé","嘀嗒":"dī dā","调取":"diào qǔ","交差":"jiāo chāi","落子":"lào zǐ","相册":"xiàng cè","絮叨":"xù dáo","落发":"luò fà","异相":"yì xiàng","浸没":"jìn mò","角抵":"jué dǐ","卸载":"xiè zài","春卷":"chūn juǎn","扎挣":"zhá zheng","畜养":"xù yǎng","吡咯":"bǐ luò","垛子":"duǒ zi","恶少":"è shào","发际":"fà jì","红苕":"hóng sháo","糨糊":"jiàng hù","哭丧":"kū sang","泡子":"pāo zǐ","稍息":"shào xī","晕船":"yùn chuán","校样":"jiào yàng","外差":"wài chāi","红曲":"hóng qǔ","脚爪":"jiǎo zhǎo","铺展":"pū zhǎn","驮子":"duò zi","芫荽":"yán sui","夹紧":"jiā jǐn","尿泡":"suī pào","丧乱":"sāng luàn","凶相":"xiōng xiàng","华发":"huá fà","打场":"dǎ cháng","云量":"yún liàng","正切":"zhèng qiē","处子":"chǔ zǐ","留难":"liú nàn","划拳":"huá quán","划艇":"huá tǐng","评传":"píng zhuàn","拉纤":"lā qiàn","句读":"jù dòu","散剂":"sǎn jì","骨殖":"gǔ shi","塞音":"sè yīn","铺叙":"pū xù","阏氏":"yān zhī","冷颤":"lěng zhàn","煞住":"shā zhù","夜曲":"yè qǔ","少男":"shào nán","格登":"gē dēng","管乐":"guǎn yuè","号啕":"háo táo","纳降":"nà xiáng","拥塞":"yōng sè","万乘":"wàn shèng","杆儿":"gǎn ér","葛藤":"gé téng","芯子":"xìn zi","簿籍":"bù jí","垫圈":"diàn juàn","皮夹":"pí jiā","校准":"jiào zhǔn","行款":"háng kuǎn","允当":"yǔn dàng","器量":"qì liàng","选调":"xuǎn diào","扮相":"bàn xiàng","干才":"gàn cái","基干":"jī gàn","三校":"sān jiào","割切":"gē qiē","国乐":"guó yuè","卡壳":"qiǎ ké","呢子":"ní zi","辟谷":"bì gǔ","磨房":"mò fáng","咿呀":"yī yā","芥末":"jiè mo","薄技":"bó jì","产假":"chǎn jià","诗兴":"shī xìng","重出":"chóng chū","转椅":"zhuàn yǐ","酌量":"zhuó liàng","簿册":"bù cè","藏青":"zàng qīng","的士":"dí shì","调人":"diào rén","解元":"jiè yuán","茎干":"jīng gàn","巨量":"jù liàng","榔头":"láng tou","率真":"shuài zhēn","喷香":"pèn xiāng","锁钥":"suǒ yuè","虾蟆":"há má","相图":"xiàng tú","兴会":"xìng huì","灶头":"zào tou","重婚":"chóng hūn","钻洞":"zuān dòng","忖度":"cǔn duó","党参":"dǎng shēn","调温":"diào wēn","杆塔":"gǎn tǎ","葛布":"gé bù","拱券":"gǒng xuàn","冠子":"guàn zi","划子":"huá zǐ","夹生":"jiā shēng","露馅":"lòu xiàn","恰切":"qià qiē","散见":"sǎn jiàn","哨卡":"shào qiǎ","烫发":"tàng fà","体量":"tǐ liàng","挺括":"tǐng guā","系带":"jì dài","相士":"xiàng shì","羊圈":"yáng juàn","转矩":"zhuàn jǔ","吧台":"bā tái","苍术":"cāng zhú","菲薄":"fěi bó","蛤蚧":"gé jiè","蛤蜊":"gé lí","瓜蔓":"guā wàn","怪相":"guài xiàng","罹难":"lí nàn","临帖":"lín tiè","女红":"nǚ gōng","刨床":"bào chuáng","翘楚":"qiáo chǔ","数九":"shǔ jiǔ","谈兴":"tán xìng","心曲":"xīn qǔ","雄劲":"xióng jìng","扎染":"zā rǎn","遮荫":"zhē yīn","周正":"zhōu zhēng","赚头":"zhuàn tou","扒手":"pá shǒu","搀和":"chān huo","诚朴":"chéng piáo","肚量":"dù liàng","干结":"gàn jié","工尺":"gōng chě","家累":"jiā lěi","曲水":"qǔ shuǐ","沙参":"shā shēn","挑花":"tiǎo huā","行距":"háng jù","阿门":"ā mēn","背篓":"bēi lǒu","瘪三":"biē sān","裁处":"cái chǔ","创痛":"chuāng tòng","福相":"fú xiàng","更动":"gēng dòng","豪兴":"háo xìng","还阳":"huán yáng","还嘴":"huán zuǐ","借调":"jiè diào","卷云":"juǎn yún","卡子":"qiǎ zi","流弹":"liú dàn","络子":"lào zi","磨子":"mò zǐ","想头":"xiǎng tou","削价":"xuē jià","校阅":"jiào yuè","八行":"bā háng","雅量":"yǎ liàng","别传":"bié zhuàn","薄酒":"bó jiǔ","春假":"chūn jià","发妻":"fà qī","哗哗":"huā huā","宽绰":"kuān chuo","了悟":"liǎo wù","切花":"qiē huā","审度":"shěn duó","应许":"yīng xǔ","转台":"zhuàn tái","仔猪":"zǐ zhū","奔命":"bèn mìng","裁量":"cái liàng","藏戏":"zàng xì","乘兴":"chéng xìng","绸缪":"chóu móu","摧折":"cuī shé","调经":"diào jīng","调职":"diào zhí","缝缀":"féng zhuì","骨朵":"gū duǒ","核儿":"hú ér","恒量":"héng liàng","还价":"huán jià","浑朴":"hún piáo","苦差":"kǔ chāi","面糊":"miàn hù","曲张":"qǔ zhāng","煞车":"shā chē","省视":"xǐng shì","什锦":"shí jǐn","信差":"xìn chāi","余切":"yú qiē","攒眉":"cuán méi","炸糕":"zhá gāo","钻杆":"zuàn gǎn","扒灰":"pá huī","拌和":"bàn huò","长调":"cháng diào","大溜":"dà liù","抖搂":"dǒu lōu","飞转":"fēi zhuàn","赴难":"fù nàn","干仗":"gàn zhàng","好胜":"hào shèng","画片":"huà piān","搅混":"jiǎo gǔn","螺杆":"luó gǎn","木模":"mù mú","怒号":"nù háo","频数":"pín shuò","无宁":"wú nìng","选曲":"xuǎn qǔ","遗少":"yí shào","邮差":"yóu chāi","占卦":"zhān guà","占星":"zhān xīng","重审":"chóng shěn","自量":"zì liàng","待查":"dài zhā","调防":"diào fáng","发廊":"fà láng","翻查":"fān zhā","反调":"fǎn diào","缝子":"fèng zi","更夫":"gēng fū","骨子":"gǔ zi","光杆":"guāng gǎn","夹棍":"jiā gùn","居丧":"jū sāng","巨贾":"jù gǔ","看押":"kān yā","空转":"kōng zhuàn","量力":"liàng lì","蒙尘":"meng chen","蒙难":"méng nàn","炮烙":"páo luò","赔还":"péi huán","扑扇":"pū shān","散记":"sǎn jì","散件":"sǎn jiàn","删削":"shān xuē","射干":"yè gàn","条几":"tiáo jī","偷空":"tōu kòng","削壁":"xuē bì","校核":"jiào hé","阴干":"yīn gàn","择菜":"zhái cài","重九":"chóng jiǔ","主调":"zhǔ diào","自禁":"zì jīn","吧唧":"bā jī","堡子":"bǔ zi","便溺":"biàn niào","词调":"cí diào","叨咕":"dáo gu","干粉":"gàn fěn","俚曲":"lǐ qǔ","落枕":"lào zhěn","铺砌":"pū qì","刷白":"shuà bái","委靡":"wěi mǐ","系泊":"jì bó","相马":"xiàng mǎ","行辈":"háng bèi","熨帖":"yù tiē","转筋":"zhuàn jīn","棒喝":"bàng hè","傧相":"bīn xiàng","镐头":"gǎo tóu","间苗":"jiàn miáo","乐池":"yuè chí","卖相":"mài xiàng","难为":"nán wéi","屏弃":"bǐng qì","铅弹":"qiān dàn","切变":"qiē biàn","请调":"qǐng diào","曲度":"qǔ dù","群氓":"qún méng","散板":"sǎn bǎn","省察":"xǐng chá","事假":"shì jià","纤绳":"qiàn shéng","重影":"chóng yǐng","耕种":"gēng zhòng","种地":"zhòng dì","种菜":"zhòng cài","栽种":"zāi zhòng","接种":"jiē zhòng","垦种":"kěn zhòng","种殖":"zhòng zhí","种瓜":"zhòng guā","种豆":"zhòng dòu","种树":"zhòng shù","睡着":"shuì zháo","笼子":"lóng zi"},c=Object.keys(l).map((n=>({zh:n,pinyin:l[n],priority:2,length:2}))),j={"为什么":"wèi shén me","实际上":"shí jì shang","检察长":"jiǎn chá zhǎng","不由得":"bù yóu de","差不多":"chà bu duō","只不过":"zhǐ bu guò","国内外":"guó nèi wai","老人家":"lǎo ren jia","干什么":"gàn shén me","可不是":"kě bù shì","这会儿":"zhè huì er","尽可能":"jǐn kě néng","董事长":"dǒng shì zhǎng","了不起":"liǎo bù qǐ","参谋长":"cān móu zhǎng","舍不得":"shě bu de","朝鲜族":"cháo xiǎn zú","恨不得":"hèn bu de","海内外":"hǎi nèi wai","禁不住":"jīn bú zhù","柏拉图":"bó lā tú","怪不得":"guài bu de","不在乎":"bù zài hu","洛杉矶":"luò shān ji","有点儿":"yǒu diǎn er","迫击炮":"pǎi jī pào","大丈夫":"dà zhàng fu","进行曲":"jìn xíng qǔ","免不了":"miǎn bu liǎo","不得了":"bù dé liǎo","过日子":"guò rì zi","马尾松":"mǎ wěi sōng","运输量":"yùn shū liàng","发脾气":"fā pí qi","过不去":"guò bu qù","臭豆腐":"chòu dòu fu","士大夫":"shì dà fū","三部曲":"sān bù qǔ","少不了":"shǎo bu liǎo","仡佬族":"gē lǎo zú","交响曲":"jiāo xiǎng qǔ","分子式":"fēn zǐ shì","好日子":"hǎo rì zi","看样子":"kàn yàng zi","鸭绿江":"yā lù jiāng","巴不得":"bā bu de","协奏曲":"xié zòu qǔ","没关系":"méi guān xi","不见得":"bú jiàn de","压根儿":"yà gēn er","对得起":"duì de qǐ","那会儿":"nà huì er","自个儿":"zì gě er","物理量":"wù lǐ liàng","怎么着":"zěn me zhāo","明晃晃":"míng huǎng huǎng","节假日":"jié jià rì","心里话":"xīn lǐ huà","发行量":"fā xíng liàng","兴冲冲":"xìng chōng chōng","分子量":"fēn zǐ liàng","大不了":"dà bu liǎo","国子监":"guó zǐ jiàn","老大难":"lǎo dà nán","了不得":"liǎo bu dé","石狮子":"shí shī zi","莫不是":"mò bù shì","少不得":"shǎo bu dé","党内外":"dǎng nèi wai","这么着":"zhè me zhāo","少奶奶":"shào nǎi nai","暗地里":"àn dì li","看不起":"kàn bu qǐ","更年期":"gēng nián qī","工作量":"gōng zuò liàng","背地里":"bèi dì li","山里红":"shān li hóng","好好儿":"hǎo hāo er","交响乐":"jiāo xiǎng yuè","好意思":"hǎo yì si","吐谷浑":"tǔ yù hún","没意思":"méi yì si","理发师":"lǐ fà shī","奏鸣曲":"zòu míng qǔ","塔什干":"tǎ shí gàn","充其量":"chōng qí liàng","靠得住":"kào de zhù","车行道":"chē háng dào","中郎将":"zhōng láng jiàng","犯不着":"fàn bu zháo","照明弹":"zhào míng dàn","一溜烟":"yī liù yān","烟幕弹":"yān mù dàn","没奈何":"mò nài hé","乱哄哄":"luàn hōng hōng","惠更斯":"huì gēng sī","载重量":"zài zhòng liàng","瞧得起":"qiáo de qǐ","纪传体":"jì zhuàn tǐ","蚌埠市":"bèng bù shì","冷不丁":"lěng bu dīng","阿房宫":"ē páng gōng","怨不得":"yuàn bu de","卷心菜":"juǎn xīn cài","戏班子":"xì bān zi","过得去":"guò děi qù","大肚子":"dà dù zi","花岗石":"huā gāng shí","外甥女":"wài sheng nǚ","团团转":"tuán tuán zhuàn","大堡礁":"dà pù jiāo","燃烧弹":"rán shāo dàn","劳什子":"láo shí zi","摇滚乐":"yáo gǔn yuè","身子骨":"shēn zi gǔ","夹竹桃":"jiā zhú táo","一刀切":"yī dāo qiē","闹哄哄":"nào hōng hōng","三连冠":"sān lián guàn","重头戏":"zhòng tóu xì","二人转":"èr rén zhuàn","节骨眼":"jiē gu yǎn","知识面":"zhī shī miàn","护士长":"hù shì zhǎng","架子车":"jià zi chē","信号弹":"xìn hào dàn","干电池":"gàn diàn chí","枪杆子":"qiāng gǎn zi","哭丧棒":"kū sāng bàng","鼻咽癌":"bí yān ái","瓦岗军":"wǎ gāng jūn","买得起":"mǎi de qǐ","拗不过":"niù bu guò","癞蛤蟆":"lài há ma","脊梁骨":"jǐ liang gǔ","子母弹":"zǐ mǔ dàn","开小差":"kāi xiǎo chāi","女强人":"nǚ qiáng rén","英雄传":"yīng xióng zhuàn","大嫂子":"dà sǎo zi","爵士乐":"jué shì yuè","说笑话":"shuō xiào hua","混日子":"hùn rì zi","大鼻子":"dà bí zi","碰头会":"pèng tóu kuài","玻璃钢":"bō li gāng","曳光弹":"yè guāng dàn","少林拳":"shào lín quán","咏叹调":"yǒng tàn diào","豆腐干":"dòu fǔ gàn","一个劲":"yī gè jìn","少先队":"shào xiān duì","灵长目":"líng zhǎng mù","对着干":"duì zhe gàn","蒙蒙亮":"mēng mēng liàng","软骨头":"ruǎn gǔ tou","不省得":"bù xǐng de","铺盖卷":"pū gài juǎn","和稀泥":"huò xī ní","亭子间":"tíng zi jiān","背黑锅":"bēi hēi guō","红彤彤":"hóng tōng tōng","武侯祠":"wǔ hóu cí","打哆嗦":"dǎ duō suo","地窨子":"dì yìn zi","狂想曲":"kuáng xiǎng qǔ","幻想曲":"huàn xiǎng qǔ","户口簿":"hù kǒu bù","腿肚子":"tuǐ dù zi","马尾藻":"mǎ wěi zǎo","练习曲":"liàn xí qǔ","夜猫子":"yè māo zi","折子戏":"zhé zi xì","打手势":"dǎ shǒu shì","龙王爷":"lóng wáng yé","要面子":"yào miàn zi","气头上":"qì tóu shang","糊涂虫":"hú tu chóng","笔杆子":"bǐ gǎn zi","占便宜":"zhàn pián yi","打主意":"dǎ zhǔ yi","多弹头":"duō dàn tóu","露一手":"lòu yī shǒu","堰塞湖":"yàn sè hú","保得住":"bǎo de zhù","趵突泉":"bào tū quán","钻空子":"zuān kòng zi","奥得河":"ào de hé","司务长":"sī wù zhǎng","禁不起":"jīn bu qǐ","什刹海":"shí chà hǎi","莲花落":"lián huā lào","一场空":"yī cháng kōng","前奏曲":"qián zòu qǔ","见世面":"xiàn shì miàn","分子筛":"fēn zǐ shāi","豁出去":"huō chu qu","电位差":"diàn wèi chā","挨个儿":"āi gè er","那阵儿":"nà zhèn er","给面子":"gěi miàn zi","肺活量":"fèi huó liàng","大师傅":"dà shī fū","掷弹筒":"zhì dàn tǒng","打呼噜":"dǎ hū lu","广渠门":"ān qú mén","未见得":"wèi jiàn de","大婶儿":"dà shěn er","谈得来":"tán de lái","狮子头":"shī zi tóu","脚丫子":"jiǎo yā zi","变奏曲":"biàn zòu qǔ","空包弹":"kōng bāo dàn","窝里斗":"wō li dòu","弹着点":"dàn zhuó diǎn","免不得":"miǎn bu de","个头儿":"gè tóu er","看得起":"kàn de qǐ","来不得":"lái bu de","糊涂账":"hú tu zhàng","大猩猩":"dà xīng xing","一溜儿":"yī liù ér","禁得起":"jīn de qǐ","法相宗":"fǎ xiāng zōng","可怜相":"kě lián xiàng","吃得下":"chī de xià","汉堡包":"hàn pù bāo","闹嚷嚷":"nào rāng rāng","数来宝":"shǔ lái bǎo","抹脖子":"mǒ bó zi","合得来":"hé de lái","干性油":"gàn xìng yóu","上辈子":"shàng bèi zi","闷葫芦":"mèn hú lú","呱呱叫":"guā guā jiào","西洋参":"xī yáng shēn","碰钉子":"pèng dìng zǐ","林荫道":"lín yīn dào","拉家常":"lá jiā cháng","卷铺盖":"juǎn pū gài","过得硬":"guò de yìng","飞将军":"fēi jiàng jūn","挑大梁":"tiǎo dà liáng","哈巴狗":"hǎ bā gǒu","过家家":"guō jiā jiā","催泪弹":"cuī lèi dàn","雨夹雪":"yǔ jiā xuě","敲竹杠":"qiāo zhū gàng","列车长":"liè chē zhǎng","回旋曲":"huí xuán qǔ","华达呢":"huá dá ní","犯得着":"fàn de zháo","土疙瘩":"tǔ gē da","煞风景":"shā fēng jǐng","轻量级":"qīng liàng jí","羞答答":"xiū dā dā","石子儿":"shí zǐ er","大帽子":"dà mào zi","达姆弹":"dá mǔ dàn","摇篮曲":"yáo lán qǔ","科教片":"kē jiào piān","侃大山":"kǎn tài shān","丁点儿":"dīng diǎn er","吃得消":"chī de xiāo","捋虎须":"luō hǔ xū","间奏曲":"jiàn zòu qǔ","高丽参":"gāo lí shēn","安魂曲":"ān hún qǔ","众生相":"zhòng shēng xiàng","咽峡炎":"yān xiá yán","禁得住":"jīn de zhù","打拍子":"dǎ pāi zi","催眠曲":"cuī mián qǔ","臭架子":"chòu jià zi","吃得开":"chī de kāi","柞丝绸":"zuò sī chóu","应声虫":"yìng shēng chóng","数得着":"shǔ de zháo","傻劲儿":"shǎ jìn er","铅玻璃":"qiān bō li","抹不开":"mò bù kāi","可的松":"kě dì sōng","划得来":"huá de lái","红帽子":"hóng mào zi","孩子王":"hái zi wáng","晕乎乎":"yùn hū hū","台柱子":"tái zhù zi","屎壳郎":"shǐ ke làng","尥蹶子":"liào jué zǐ","空架子":"kōng jià zi","藏红花":"zàng hóng huā","说不着":"shuō bù zháo","闷罐车":"mèn guàn chē","卡脖子":"qiǎ bó zi","红澄澄":"hóng deng deng","赶得及":"gǎn de jí","当间儿":"dāng jiàn ér","露马脚":"lòu mǎ jiǎo","鸡内金":"jī nà jīn","犯得上":"fàn děi shàng","钉齿耙":"dīng chǐ bà","饱和点":"bǎo huó diǎn","文曲星":"wén qǔ xīng","翘辫子":"qiào biàn zi","龙爪槐":"lóng zhǎo huái","喝倒彩":"hè dào cǎi","鸽子笼":"gē zi lóng","定冠词":"dìng guàn cí","担担面":"dàn dan miàn","吃得住":"chī de zhù","爪尖儿":"zhuǎ jiān er","支着儿":"zhī zhāo ér","折跟头":"zhē gēn tou","炸丸子":"zhá wán zǐ","阴着儿":"yīn zhāo ér","烟卷儿":"yān juǎn ér","宣传弹":"xuān chuán dàn","信皮儿":"xìn pí er","弦切角":"xián qiē jiǎo","跳房子":"tiào fáng zi","缩砂密":"sù shā mì","说得来":"shuō de lái","水漂儿":"shuǐ piǎo ér","耍笔杆":"shuǎ bǐ gǎn","数得上":"shǔ děi shàng","数不着":"shǔ bù zháo","数不清":"shǔ bù qīng","什件儿":"shí jiàn ér","狮子会":"shī zi huì","生死簿":"shēng sǐ bù","扇风机":"shān fēng jī","散摊子":"sàn tān zi","撒呓挣":"sā yì zhēng","日记簿":"rì jì bù","热得快":"rè de kuài","曲别针":"qǔ bié zhēn","亲家公":"qìng jiā gōng","奇函数":"jī hán shù","炮子儿":"pào zǐ er","拍纸簿":"pāi zhǐ bù","努劲儿":"nǔ jìn er","泥娃娃":"ní wá wa","内切圆":"nèi qiē yuán","哪会儿":"něi huì er","摸不着":"mō bù zháo","闷头儿":"mèn tou er","没谱儿":"méi pǔ er","铆劲儿":"mǎo jìn er","溜肩膀":"liū jiān bǎng","了望台":"liào wàng tái","老来少":"lǎo lái shào","坤角儿":"kūn jué ér","考勤簿":"kǎo qín bù","卷笔刀":"juǎn bǐ dāo","九重霄":"jiǔ chóng xiāo","进给量":"jìn jǐ liàng","划不来":"huá bù lái","汗褂儿":"hàn guà er","鼓囊囊":"gǔ nāng nang","够劲儿":"gòu jìn er","公切线":"gōng qiē xiàn","搁得住":"gé de zhù","搁不住":"gé bú zhù","赶浪头":"gǎn làng tóu","赶得上":"gǎn děi shàng","干酵母":"gàn jiào mǔ","嘎渣儿":"gā zhā er","嘎嘣脆":"gā bēng cuì","对得住":"duì de zhù","逗闷子":"dòu mèn zǐ","顶呱呱":"dǐng guā guā","滴溜儿":"dī liù ér","大轴子":"dà zhòu zǐ","打板子":"dǎ bǎn zi","寸劲儿":"cùn jìn er","醋劲儿":"cù jìn er","创牌子":"chuàng pái zi","揣手儿":"chuāi shǒu er","冲劲儿":"chòng jìn er","吃得来":"chī de lái","不更事":"bù gēng shì","奔头儿":"bèn tou er","百夫长":"bǎi fū zhǎng","娃娃亲":"wá wa qīn","死劲儿":"sǐ jìng er","骨朵儿":"gū duǒ er","功劳簿":"gōng láo bù"},d=Object.keys(j).map((n=>({zh:n,pinyin:j[n],priority:3,length:3}))),t={"成吉思汗":"chéng jí sī hán","四通八达":"sì tōng bā dá","一模一样":"yī mú yī yàng","青藏高原":"qīng zàng gāo yuán","阿弥陀佛":"ē mí tuó fó","解放思想":"jiè fàng sī xiǎng","所作所为":"suǒ zuò suǒ wéi","迷迷糊糊":"mí mí hu hū","荷枪实弹":"hè qiāng shí dàn","兴高采烈":"xìng gāo cǎi liè","无能为力":"wú néng wéi lì","融为一体":"róng wéi yī tǐ","布鲁塞尔":"bù lǔ sài ěr","为所欲为":"wéi suǒ yù wéi","审时度势":"shěn shí duó shì","克什米尔":"kè shí mǐ ěr","没完没了":"méi wán méi liǎo","不为人知":"bù wéi rén zhī","结结巴巴":"jiē jiē bā bā","前仆后继":"qián pū hòu jì","一年一度":"yì nián yí dù","各行各业":"gè háng gè yè","合二为一":"hé èr wéi yī","被子植物":"bèi zǐ zhí wù","铺天盖地":"pū tiān gài dì","直截了当":"zhí jié liǎo dàng","供不应求":"gōng bù yìng qiú","御史大夫":"yù shǐ dà fū","不为瓦全":"bù wéi wǎ quán","不可收拾":"bù kě shōu shi","胡作非为":"hú zuò fēi wéi","分毫不差":"fēn háo bù chā","模模糊糊":"mó mó hu hū","不足为奇":"bù zú wéi qí","如之奈何":"rú zhī nai hé","悄无声息":"qiǎo wú shēng xī","卷土重来":"juǎn tǔ chóng lái","了如指掌":"liǎo rú zhǐ zhǎng","深恶痛绝":"shēn wù tòng jué","高高兴兴":"gāo gāo xìng xìng","唉声叹气":"āi shēng tàn qì","混为一谈":"hùn wéi yī tán","不了了之":"bù liǎo liǎo zhī","汉藏语系":"hàn zàng yǔ xì","处心积虑":"chǔ xīn jī lǜ","泣不成声":"qǐ bù chéng shēng","半夜三更":"bàn yè sān gēng","失魂落魄":"shī hún luò pò","二十八宿":"èr shí bā xiù","转来转去":"zhuàn lái zhuàn qù","数以万计":"shǔ yǐ wàn jì","相依为命":"xiāng yī wéi mìng","恋恋不舍":"liàn liàn bù shě","屈指可数":"qū zhǐ kě shǔ","神出鬼没":"shén chū guǐ mò","结结实实":"jiē jiē shí shí","有的放矢":"yǒu dì fàng shǐ","叽哩咕噜":"jī lǐ gū lū","合而为一":"hé ér wéi yī","调兵遣将":"diào bīng qiǎn jiàng","载歌载舞":"zài gē zài wǔ","转危为安":"zhuǎn wēi wéi ān","踏踏实实":"tā tā shi shí","桑给巴尔":"sāng jǐ bā ěr","装模作样":"zhuāng mú zuò yàng","见义勇为":"jiàn yì yǒng wéi","相差无几":"xiāng chā wú jǐ","叹为观止":"tàn wéi guān zhǐ","闷闷不乐":"mèn mèn bù lè","喜怒哀乐":"xǐ nù āi lè","鲜为人知":"xiǎn wéi rén zhī","张牙舞爪":"zhāng yá wǔ zhǎo","为非作歹":"wéi fēi zuò dǎi","一蹶不振":"yī jué bù zhèn","含糊其辞":"hán hú qí cí","疲于奔命":"pí yú bēn mìng","勉为其难":"miǎn wéi qí nán","依依不舍":"yī yī bù shě","顶头上司":"dǐng tóu shàng si","不着边际":"bù zhuó biān jì","大模大样":"dà mú dà yàng","寻欢作乐":"xún huān zuò lè","一走了之":"yī zǒu liǎo zhī","一年到头":"yì nián dào tóu","字里行间":"zì lǐ háng jiān","含含糊糊":"hán hán hu hū","数一数二":"shǔ yī shǔ èr","恰如其分":"qià rú qí fèn","破涕为笑":"pò tì wéi xiào","深更半夜":"shēn gēng bàn yè","千差万别":"qiān chā wàn bié","数不胜数":"shǔ bù shèng shǔ","据为己有":"jù wéi jǐ yǒu","天旋地转":"tiān xuán dì zhuàn","养尊处优":"yǎng zūn chǔ yōu","玻璃纤维":"bō li xiān wéi","吵吵闹闹":"chāo chao nào nào","晕头转向":"yūn tóu zhuàn xiàng","土生土长":"tǔ shēng tǔ zhǎng","宁死不屈":"nìng sǐ bù qū","不省人事":"bù xǐng rén shì","尽力而为":"jìn lì ér wéi","精明强干":"jīng míng qiáng gàn","唠唠叨叨":"láo lao dāo dāo","叽叽喳喳":"jī ji zhā zhā","功不可没":"gōng bù kě mò","锲而不舍":"qiè ér bù shě","排忧解难":"pái yōu jiě nàn","稀里糊涂":"xī li hú tú","异曲同工":"yì qǔ tóng gōng","各有所长":"gè yǒu suǒ chéng","的的确确":"dí dí què què","一言为定":"yī yán wéi dìng","哄堂大笑":"hōng táng dà xiào","听而不闻":"tīng ér bú wén","刀耕火种":"dāo gēng huǒ zhòng","说不过去":"shuō bu guò qù","内分泌腺":"nèi fèn mì xiàn","化险为夷":"huà xiǎn wéi yí","百发百中":"bǎi fā bǎi zhòng","重见天日":"chóng jiàn tiān rì","反败为胜":"fǎn bài wéi shèng","一了百了":"yī liǎo bǎi liǎo","大大咧咧":"dà da liē liē","心急火燎":"xīn jí huǒ liǎo","粗心大意":"cū xīn dà yi","鸡皮疙瘩":"jī pí gē da","夷为平地":"yí wéi píng dì","日积月累":"rì jī yuè lěi","设身处地":"shè shēn chǔ dì","投其所好":"tóu qí suǒ hào","间不容发":"jiān bù róng fà","人满为患":"rén mǎn wéi huàn","穷追不舍":"qióng zhuī bù shě","为时已晚":"wéi shí yǐ wǎn","如数家珍":"rú shǔ jiā zhēn","心里有数":"xīn lǐ yǒu shù","一盘散沙":"yī pán sǎn shā","以牙还牙":"yǐ yá huán yá","神不守舍":"shén bù shǒu shě","孟什维克":"mèng shí wéi kè","各自为战":"gè zì wéi zhàn","怨声载道":"yuàn shēng zài dào","一哄而散":"yī hòng ér sàn","救苦救难":"jiù kǔ jiù nàn","好好先生":"hǎo hǎo xiān sheng","怪模怪样":"guài mú guài yàng","抛头露面":"pāo tóu lù miàn","游手好闲":"yóu shǒu hào xián","无所不为":"wú suǒ bù wéi","调虎离山":"diào hǔ lí shān","步步为营":"bù bù wéi yíng","好大喜功":"hào dà xǐ gōng","众矢之的":"zhòng shǐ zhī dì","长生不死":"cháng shēng bū sǐ","蔚为壮观":"wèi wéi zhuàng guān","不可胜数":"bù kě shèng shǔ","鬼使神差":"guǐ shǐ shén chāi","洁身自好":"jié shēn zì hào","敢作敢为":"gǎn zuò gǎn wéi","茅塞顿开":"máo sè dùn kāi","走马换将":"zǒu mǎ huàn jiàng","为时过早":"wéi shí guò zǎo","为人师表":"wéi rén shī biǎo","阴差阳错":"yīn chā yáng cuò","油腔滑调":"yóu qiāng huá diào","重蹈覆辙":"chóng dǎo fù zhé","骂骂咧咧":"mà ma liē liē","絮絮叨叨":"xù xù dāo dāo","如履薄冰":"rú lǚ bó bīng","损兵折将":"sǔn bīng zhé jiàng","无可比拟":"wú kě bǐ nì","拐弯抹角":"guǎi wān mò jiǎo","像模像样":"xiàng mú xiàng yàng","供过于求":"gōng guò yú qiú","开花结果":"kāi huā jiē guǒ","仔仔细细":"zǐ zǐ xì xì","川藏公路":"chuān zàng gōng lù","河北梆子":"hé běi bāng zi","长年累月":"cháng nián lěi yuè","正儿八经":"zhèng er bā jīng","不识抬举":"bù shí tái ju","重振旗鼓":"chóng zhèn qí gǔ","气息奄奄":"qì xī yān yān","紧追不舍":"jǐn zhuī bù shě","服服帖帖":"fú fu tiē tiē","强词夺理":"qiǎng cí duó lǐ","噼里啪啦":"pī li pā lā","人才济济":"rén cái jǐ jǐ","发人深省":"fā rén shēn xǐng","不足为凭":"bù zú wéi píng","为富不仁":"wéi fù bù rén","连篇累牍":"lián piān lěi dú","呼天抢地":"hū tiān qiāng dì","落落大方":"luò luò dà fāng","自吹自擂":"zì chuī zì léi","乐善好施":"lè shàn hào shī","以攻为守":"yǐ gōng wéi shǒu","磨磨蹭蹭":"mó mó cèng cèng","削铁如泥":"xuē tiě rú ní","助纣为虐":"zhù zhòu wéi nüè","以退为进":"yǐ tuì wéi jìn","重整旗鼓":"chóng zhěng qí gǔ","嘁嘁喳喳":"qī qī chā chā","枪林弹雨":"qiāng lín dàn yǔ","令人发指":"lìng rén fà zhǐ","转败为胜":"zhuǎn bài wéi shèng","转弯抹角":"zhuǎn wān mò jiǎo","在劫难逃":"zài jié nán táo","正当防卫":"zhèng dàng fáng wèi","不足为怪":"bù zú wéi guài","难兄难弟":"nàn xiōng nàn dì","咿咿呀呀":"yī yī yā yā","弹尽粮绝":"dàn jìn liáng jué","八旗子弟":"bā qí zi dì","阿谀奉承":"ē yú fèng chéng","稀里哗啦":"xī li huā lā","返老还童":"fǎn lǎo huán tóng","好高骛远":"hào gāo wù yuǎn","灾难深重":"zāi nán shēn zhòng","鹿死谁手":"lù sǐ shéi shǒu","差强人意":"chā qiáng rén yì","大吹大擂":"dà chuī dà léi","成家立业":"chéng jiā lì yiè","自怨自艾":"zì yuàn zì yì","负债累累":"fù zhai lěi lěi","古为今用":"gǔ wéi jīn yòng","入土为安":"rù tǔ wéi ān","下不为例":"xià bù wéi lì","一哄而上":"yì hōng ér shàng","一股劲儿":"yī gǔ jìn er","没头苍蝇":"méi tóu cāng ying","天差地远":"tiān chā dì yuǎn","风卷残云":"fēng juǎn cán yún","多灾多难":"duō zāi duō nàn","乳臭未干":"rǔ xiù wèi gān","行家里手":"háng jiā lǐ shǒu","狼狈为奸":"láng bèi wéi jiān","处变不惊":"chǔ biàn bù jīng","一唱一和":"yī chàng yī hè","一念之差":"yī niàn zhī chā","金蝉脱壳":"jīn chán tuō qiào","滴滴答答":"dī dī dā dā","硕果累累":"shuò guǒ léi léi","只知其一":"zhǐ zhī qí yī","好整以暇":"hào zhěng yǐ xiá","红得发紫":"hóng de fā zǐ","传为美谈":"chuán wéi měi tán","富商大贾":"fù shāng dà gǔ","四海为家":"sì hǎi wéi jiā","失而复得":"shī ér fù de","了若指掌":"liǎo ruò zhǐ zhǎng","大有可为":"dà yǒu kě wéi","出头露面":"chū tóu lù miàn","鼓鼓囊囊":"gǔ gu nāng nāng","窗明几净":"chuāng míng jī jìng","泰然处之":"tài rán chǔ zhī","怒发冲冠":"nù fà chōng guān","不甚了了":"bù shèn liǎo liǎo","有机玻璃":"yǒu jī bō li","骨头架子":"gú tou jià zi","义薄云天":"yì bó yún tiān","一丁点儿":"yī dīng diǎn er","时来运转":"shí lái yùn zhuǎn","陈词滥调":"chén cí làn diào","七十二行":"qī shí èr háng","化整为零":"huà zhěng wéi líng","火烧火燎":"huǒ shāo huǒ liǎo","干脆利索":"gàn cuì lì suǒ","吊儿郎当":"diào er láng dāng","广种薄收":"guǎng zhòng bó shōu","种瓜得瓜":"zhòng guā dé guā","种豆得豆":"zhòng dòu dé dòu","难舍难分":"nán shě nán fēn","歃血为盟":"shà xuè wéi méng","奋发有为":"fèn fā yǒu wéi","阴错阳差":"yīn cuò yáng chā","东躲西藏":"dōng duǒ xī cáng","烟熏火燎":"yān xūn huǒ liǎo","钻牛角尖":"zuān niú jiǎo jiān","乔装打扮":"qiáo zhuāng dǎ bàn","改弦更张":"gǎi xián gēng zhāng","河南梆子":"hé nán bāng zi","好吃懒做":"hào chī lǎn zuò","何乐不为":"hé lè bù wéi","大出风头":"dà chū fēng tóu","攻城掠地":"gōng chéng lüě dì","漂漂亮亮":"piào piào liang liang","折衷主义":"zhé zhōng zhǔ yì","大马哈鱼":"dà mǎ hǎ yú","绿树成荫":"lǜ shù chéng yīn","率先垂范":"shuài xiān chuí fàn","家长里短":"jiā cháng lǐ duǎn","宽大为怀":"kuān dà wéi huái","左膀右臂":"zuǒ bǎng yòu bì","影子内阁":"yǐng zi nèi gé","一笑了之":"yī xiào liǎo zhī","天下为公":"tiān xià wéi gōng","还我河山":"huán wǒ hé shān","何足为奇":"hé zú wéi qí","好自为之":"hào zì wéi zhī","风姿绰约":"fēng zī chuō yué","大雨滂沱":"dà yǔ páng tuó","传为佳话":"chuán wéi jiā huà","吃里扒外":"chī lǐ pá wài","重操旧业":"chóng cāo jiù yè","小家子气":"xiǎo jiā zi qì","少不更事":"shào bù gēng shì","难分难舍":"nán fēn nán shě","只争朝夕":"zhǐ zhēng zhāo xī","添砖加瓦":"tiān zhuān jiē wǎ","是非分明":"shì fēi fēn míng","舍我其谁":"shě wǒ qí shuí","偏听偏信":"piān tīng piāng xìn","量入为出":"liàng rù wéi chū","降龙伏虎":"xiáng lóng fú hǔ","故伎重演":"gù jì zhòng yǎn","钢化玻璃":"gāng huà bō li","正中下怀":"zhèng zhòng xià huái","以身许国":"yǐ shēng xǔ guó","一语中的":"yī yǔ zhōng dì","丧魂落魄":"sàng hún luò pò","三座大山":"sān zuò tài shān","济济一堂":"jǐ jǐ yī táng","好事之徒":"hào shì zhī tú","干净利索":"gàn jìng lì suǒ","出将入相":"chū jiàng rù xiàng","袅袅娜娜":"niǎo niǎo nuó nuó","狐狸尾巴":"hú li wěi ba","好逸恶劳":"hào yì wù láo","大而无当":"dà ér wú dàng","打马虎眼":"dǎ mǎ hu yǎn","板上钉钉":"bǎn shàng dìng dīng","吆五喝六":"yāo wǔ hè liù","虾兵蟹将":"xiā bīng xiè jiàng","水调歌头":"shuǐ diào gē tóu","数典忘祖":"shǔ diǎn wàng zǔ","人事不省":"rén shì bù xǐng","曲高和寡":"qǔ gāo hè guǎ","偶一为之":"ǒu yī wéi zhī","屡教不改":"lǚ jiàn bù gǎi","互为因果":"hù wéi yīn guò","互为表里":"hù wéi biǎo lǐ","厚此薄彼":"hòu cǐ bó bǐ","过关斩将":"guò guān zhǎn jiàng","疙疙瘩瘩":"gē gē dā dá","否极泰来":"pǐ jí tài lái","大腹便便":"dà fù pián pián","走为上策":"zǒu wéi shàng cè","冤家对头":"yuān jia duì tóu","有隙可乘":"yǒu xì kě chèng","一无所得":"yī wú suǒ dé","一鳞半爪":"yī lín bàn zhǎo","一哄而起":"yī hōng ér qǐ","片言只语":"piàn yán zhǐ yǔ","开花结实":"kāi huā jié shí","旧地重游":"jiù dì chóng yóu","经年累月":"jīng nián lěi yuè","含糊其词":"hán hú qí cí","寡廉鲜耻":"guǎ lián xiǎn chǐ","成年累月":"chéng nián lěi yuè","不徇私情":"bù xún sī qíng","不当人子":"bù dāng rén zǐ","膀大腰圆":"bǎng dà yāo yuán","指腹为婚":"zhǐ fù wéi hūn","这么点儿":"zhè me diǎn er","意兴索然":"yì xīng suǒ rán","绣花枕头":"xiù huā zhěn tóu","无的放矢":"wú dì fàng shǐ","望闻问切":"wàng wén wèn qiē","舍己为人":"shě jǐ wèi rén","穷年累月":"qióng nián lěi yuè","排难解纷":"pái nàn jiě fēn","处之泰然":"chǔ zhī tài rán","指鹿为马":"zhǐ lù wéi mǎ","一吐为快":"yī tǔ wéi kuài","一丘之貉":"yī qiū zhī hé","危如累卵":"wēi rú lěi luǎn","天兵天将":"tiān bīng tiān jiàng","舍近求远":"shě jìn qiú yuǎn","南腔北调":"nán qiāng běi diào","苦中作乐":"kǔ zhōng zuò lè","厚积薄发":"hòu jī bó fā","戴绿帽子":"dài lǜ mào zi","臭味相投":"xiù wèi xiāng tóu","长幼有序":"zhǎng yòu yǒu xù","逼良为娼":"bī liáng wéi chāng","悲悲切切":"bēi bēi qiè qiē","败军之将":"bài jūn zhī jiàng","欺行霸市":"qī háng bà shì","削足适履":"xuē zú shì lǚ","先睹为快":"xiān dǔ wéi kuài","啼饥号寒":"tí jī háo hán","疏不间亲":"shū bù jiàn qīn","神差鬼使":"shén chāi guǐ shǐ","敲敲打打":"qiāo qiāo dā dā","平铺直叙":"píng pū zhí xù","没头没尾":"méi tóu mò wěi","寥寥可数":"liáo liáo kě shǔ","哼哈二将":"hēng hā èr jiàng","鹤发童颜":"hè fà tóng yán","各奔前程":"gè bèn qián chéng","弹无虚发":"dàn wú xū fā","大人先生":"dà rén xiān sheng","与民更始":"yǔ rén gēng shǐ","叶落归根":"yè luò huī gēn","一目十行":"yī mù shí háng","虚晃一枪":"xiù huàng yī qiāng","树碑立传":"shù bēi lì zhuàn","是非得失":"shì fēi dé shī","实逼处此":"shí bī chǔ cǐ","塞翁失马":"sài wēng shī mǎ","日薄西山":"rì bó xī shān","切身体会":"qiē shēn tǐ huì","片言只字":"piàn yán zhǐ zì","跑马卖解":"pǎo mǎ mài xiè","宁折不弯":"nìng zhé bù wān","零零散散":"líng líng sǎn sǎn","量体裁衣":"liàng tǐ cái yī","连中三元":"lián zhòng sān yuán","礼崩乐坏":"lǐ bēng yuè huài","胡子拉碴":"hú zǐ lā chā","不为已甚":"bù wéi yǐ shèn","转悲为喜":"zhuǎn bēi wéi xǐ","以眼还眼":"yǐ yǎn huán yǎn","蔚为大观":"wèi wéi dà guān","未为不可":"wèi wéi bù kě","童颜鹤发":"tóng yán hè fà","朋比为奸":"péng bǐ wéi jiān","莫此为甚":"mò cǐ wéi shèn","老调重弹":"lǎo diào zhòng dàn","夹枪带棒":"jiā qiāng dài bàng","富商巨贾":"fù shāng jù jiǎ","多劳多得":"duō láo duō de","淡然处之":"dàn rán chǔ zhī","箪食壶浆":"dān sì hú jiāng","创巨痛深":"chuāng jù tòng shēn","草长莺飞":"cǎo zhǎng yīng fēi","坐视不救":"zuò shī bù jiù","重起炉灶":"chóng qǐ lú zào","以己度人":"yǐ jǐ duó rén","随行就市":"suí háng jiù shì","文以载道":"wén yǐ zài dào","文不对题":"wén bù duì tí","铁板钉钉":"tiě bǎn dìng dīng","身体发肤":"shēn tǐ fà fū","缺吃少穿":"quē chī xhǎo chuān","目无尊长":"mù wú zūn zhǎng","吉人天相":"jí rén tiān xiàng","毁家纾难":"huǐ jiā shū nàn","钢筋铁骨":"gāng jīng tiě gǔ","丢卒保车":"diū zú bǎo jū","丢三落四":"diū sān là sì","闭目塞听":"bì mù sè tīng","削尖脑袋":"xuē jiān nǎo dài","为非作恶":"wéi fēi zuò è","人才难得":"rén cái cái dé","情非得已":"qíng fēi dé yǐ","切中要害":"qiē zhōng yào hài","火急火燎":"huǒ jí huǒ liǎo","画地为牢":"huà dì wéi láo","好酒贪杯":"hào jiǔ tān bēi","长歌当哭":"cháng gē dàng kū","载沉载浮":"zài chén zài fú","遇难呈祥":"yù nàn chéng xiáng","榆木疙瘩":"yú mù gē da","以邻为壑":"yǐ lín wéi hè","洋为中用":"yáng wéi zhōng yòng","言为心声":"yán wéi xīn shēng","言必有中":"yán bì yǒu zhòng","图穷匕见":"tú qióng bǐ xiàn","滂沱大雨":"páng tuó dà yǔ","目不暇给":"mù bù xiá jǐ","量才录用":"liàng cái lù yòng","教学相长":"jiào xué xiāng zhǎng","悔不当初":"huǐ bù dāng chū","呼幺喝六":"hū yāo hè liù","不足为训":"bù zú wéi xùn","不拘形迹":"bù jū xíng jī","傍若无人":"páng ruò wú rén","八大山人":"bā tài shān rén","罪责难逃":"zuì zé nán táo","自我吹嘘":"zì wǒ chuí xū","转祸为福":"zhuǎn huò wéi fú","重峦叠嶂":"chóng luán dié zhàng","勇冠三军":"yǒng guàn sān jūn","易地而处":"yì dì ér chǔ","一语破的":"yī yǔ pò dì","卸磨杀驴":"xiè mò shā lǘ","玩儿不转":"wán ér bù zhuàn","天道好还":"tiān dào hǎo huán","身单力薄":"shēn dān lì bó","撒豆成兵":"sǎ dòu chéng bīng","曲里拐弯":"qū lǐ guǎn wān","片纸只字":"piàn zhǐ yán zì","宁缺毋滥":"nìng quē wù làn","没没无闻":"mò mò wú wén","量力而为":"liàng lì ér wéi","历历可数":"lì lì kě shǔ","口碑载道":"kǒu bēi zài dào","君子好逑":"jūn zǐ hào qiú","好为人师":"hào wéi rén shī","豪商巨贾":"háo shāng jù jiǎ","各有所好":"gè yǒu suǒ hào","度德量力":"duó dé liàng lì","便宜从事":"biàn yí cóng shì","指天为誓":"zhǐ tiān wéi shì","逸兴遄飞":"yì xìng chuán fēi","心宽体胖":"xīn kuān tǐ pán","为德不卒":"wéi dé bù zú","纨袴子弟":"wán kǔ zǐ dì","天下为家":"tiān xià wéi jiā","视为畏途":"shì wéi wèi tú","舍己从人":"shě jǐ cóng rén","三灾八难":"sān zāi bā nàn","人自为战":"rén zì wéi zhàn","群雌粥粥":"qún cí yù yù","那么点儿":"nà me diǎn er","沐猴而冠":"mù hóu ér guàn","谋为不轨":"móu wéi bù guǐ","明窗净几":"míng chuāng jìng jī","哩哩啦啦":"li li lā lā","见缝就钻":"jiàn fèng jiù zuān","夹层玻璃":"jiā céng bō li","急公好义":"jí gōng hào yì","积年累月":"jī nián lěi yuè","划地为牢":"huá dì wéi láo","更名改姓":"gèng míng gǎi xìng","奉为圭臬":"fèng wéi guī niè","多难兴邦":"duō nàn xīng bāng","顿开茅塞":"dùn kāi máo sè","弹尽援绝":"dàn jìn yuán jué","大脖子病":"dà bó zi bìng","不破不立":"bù può bù lì","坐地自划":"zuò dì zì huá","坐不重席":"zuò bù chóng xí","坐不窥堂":"zùo bù kuī táng","作舍道旁":"zuò shě dào páng","作嫁衣裳":"zuò jià yī shāng","左支右吾":"zuǒ zhī yòu wū","左枝右梧":"zuǒ zhī yòu wū","左宜右有":"zuǒ yí yòu fú","罪应万死":"zuì yīng wàn sǐ","钻心刺骨":"zuàn xīn cì gǔ","钻穴逾墙":"zuān xué yú qiáng","钻穴逾隙":"zuān xué yú xì","钻隙逾墙":"zuān xì yú qiáng","钻头觅缝":"zuān tóu mì fèng","钻天觅缝":"zuàn tiān mì féng","钻天打洞":"zuān tiān dǎ dòng","钻皮出羽":"zuān pí chū yǔ","钻懒帮闲":"zuān lǎn bāng xián","钻火得冰":"zuān huǒ dé bīng","钻洞觅缝":"zuàn dòng mì féng","钻冰求火":"zuān bīng qiú huǒ","钻冰求酥":"zuān bīng qiú sū","走为上着":"zǒu wèi shàng zhaō","走花溜水":"zǒu huā liū bīng","纵曲枉直":"zòng qǔ wǎng zhí","自相惊忧":"zì xiāng jīng rǎo","子为父隐":"zǐ wéi fù yǐn","资深望重":"zī shēng wàng zhòng","擢发难数":"zhuó fà nán shǔ","擢发莫数":"zhuó fà mò shǔ","着书立说":"zhù shū lì shuō","着人先鞭":"zhuó rén xiān biān","斫琱为朴":"zhuó diāo wéi pǔ","斫雕为朴":"zhuó diāo wéi pǔ","锥处囊中":"zhuī chǔ náng zhōng","椎膺顿足":"chuí yīng dùn zú","椎胸跌足":"chuí xiōng diē zú","椎胸顿足":"chuí xiōng dùn zú","椎心饮泣":"chuí xīn yǐn qì","椎心泣血":"chuí xīn qì xuè","椎心呕血":"chuí xīn ǒu xuè","椎心顿足":"chuí xīn dùn zú","椎天抢地":"chuí tiān qiǎng dì","椎牛飨士":"chuí niú xiǎng shì","椎牛歃血":"chuí niú shà xuè","椎牛发冢":"chuí niú fā zhǒng","椎埋屠狗":"chuí mái tú gǒu","椎埋狗窃":"chuí mái gǒu qiè","椎肤剥体":"chuí fū bō tǐ","椎肤剥髓":"chuí fū bō suǐ","椎锋陷阵":"chuí fēng xiàn zhèn","椎锋陷陈":"chuī fēng xiàn chén","追欢作乐":"zhuī huān zuò lè","追风摄景":"zhuī fēng niè jǐng","壮发冲冠":"zhuàng fā chōng guàn","庄严宝相":"zhuāng yán bǎo xiàng","转灾为福":"zhuǎn zāi wéi fú","转湾抹角":"zhuǎn wān mò jiǎo","转愁为喜":"zhuǎn chóu wéi xǐ","转嗔为喜":"zhuǎn chēn wéi xǐ","转败为成":"zhuǎn bài wéi chéng","转败为功":"zhuǎn bài wéi gōng","拽巷攞街":"zhuài xiàng luǒ jiē","拽巷啰街":"zhuài xiàng luó jiē","拽耙扶犁":"zhuāi pá fú lí","拽布拖麻":"zhuāi bù tuō má","箸长碗短":"zhù chàng wǎn duǎn","铸剑为犁":"zhù jiàn wéi lí","杼柚之空":"zhù zhóu zhī kōng","杼柚其空":"zhù zhóu qí kōng","杼柚空虚":"zhù zhóu kōng xū","助天为虐":"zhù tiān wéi nüè","助桀为虐":"zhù jié wéi nüè","属垣有耳":"zhǔ yuán yǒu ěr","属毛离里":"zhǔ máo lí lǐ","属辞比事":"zhǔ cí bǐ shì","属词比事":"zhǔ cí bǐ shì","逐物不还":"zhú wù bù huán","铢铢校量":"zhū zhū xiào liàng","铢量寸度":"zhū liáng cùn duó","铢两悉称":"zhū liǎng xī chèn","铢积寸累":"zhū jī cùn lěi","侏儒一节":"zhū rǔ yī jié","侏儒观戏":"zhū rǔ guān xì","朱槃玉敦":"zhū pán yù duì","朱盘玉敦":"zhū pán yù duì","朱轓皁盖":"zhū fān hǎi gài","昼干夕惕":"zhòu gàn xī tì","昼度夜思":"zhòu duó yè sī","诪张为幻":"zhōu zhāng wéi huàn","周郎顾曲":"zhōu láng gù qǔ","侜张为幻":"zhōu zhāng wéi huàn","重足一迹":"chóng zú yī jì","重足屏息":"chóng zú bǐng xī","重足屏气":"chóng zú bǐng qì","重足累息":"chóng zú lèi xī","重足而立":"chóng zú ér lì","重纸累札":"chóng zhǐ lèi zhá","重垣叠锁":"chóng yuán dié suǒ","重垣迭锁":"chóng yuán dié suǒ","重裀列鼎":"chóng yīn liè dǐng","重岩叠嶂":"chóng yán dié zhàng","重兴旗鼓":"chóng xīng qí gǔ","重熙累叶":"chóng xī lěi yè","重熙累盛":"chóng xī lěi shèng","重手累足":"chóng shǒu lěi zú","重山峻岭":"chóng shān jùn lǐng","重山复水":"chóng shān fù shuǐ","重山复岭":"chóng shān fù lǐng","重三叠四":"chóng sān dié sì","重三迭四":"chóng sān dié sì","重气徇命":"zhòng qì xùn míng","重纰貤缪":"chóng pī yí miù","重葩累藻":"chóng pā lèi zǎo","重明继焰":"chóng míng jì yàn","重峦复嶂":"chóng luán fù zhàng","重峦叠巘":"chóng luán dié yǎn","重峦迭巘":"chóng luán dié yǎn","重理旧业":"chóng lǐ jiù yè","重金袭汤":"chóng jīn xí tāng","重金兼紫":"chóng jīn jiān zǐ","重迹屏气":"chóng jì bǐng qì","重珪叠组":"chóng guī dié zǔ","重规袭矩":"chóng guī xí jǔ","重规叠矩":"chóng guī dié jǔ","重规累矩":"chóng guī lèi jǔ","重规迭矩":"chóng guī dié jǔ","重规沓矩":"chóng guī tà jǔ","重圭叠组":"chóng guī dié zǔ","重睹天日":"chóng dǔ tiān rì","重床叠屋":"chóng chuáng dié wū","重床叠架":"chóng chuáng dié jià","重床迭屋":"chóng chuáng dié wū","重床迭架":"chóng chuáng dié jià","众啄同音":"zhòng zhòu tóng yīn","众星攒月":"zhòng xīng cuán yuè","众毛攒裘":"zhòng máo cuán qiú","众好众恶":"zhòng hào zhòng wù","钟鼎人家":"zhōng dǐng rén jia","擿植索涂":"zhāi zhí suǒ tú","擿埴索涂":"zhāi zhí suǒ tú","擿埴索途":"zhāi zhí suǒ tú","稚齿婑媠":"zhì chǐ wǒ tuǒ","致远任重":"zhì yuǎn rèn zhàng","栉比鳞差":"zhì bǐ lín cǐ","至当不易":"zhì dàng bù yì","指皁为白":"zhǐ zào wéi bái","指皂为白":"zhǐ zào wéi bái","指雁为羹":"zhǐ yàn wéi gēng","指树为姓":"zhǐ shù wéi xìng","指山说磨":"zhǐ shān shuō mò","指山卖磨":"zhǐ shān mài mò","只争旦夕":"zhǐ zhēng dàn xī","止戈为武":"zhǐ gē wéi wǔ","植发穿冠":"zhí fà chuān guàn","植发冲冠":"zhí fà chōng guàn","直言切谏":"zhí yán qiē jiàn","直扑无华":"zhí pǔ wú huá","知疼着痒":"zhī téng zháo yǎng","枝叶相持":"zhī yè xīng chí","枝干相持":"zhī gàn xiāng xhí","枝附叶着":"zhī fù yiè zhuó","枝附叶著":"zhī fù yiè zhuó","枝大于本":"zhī dà yù běn","支吾其词":"zhī wū qí cí","支分族解":"zhī fē zú jiě","正中己怀":"zhèng zhòng jǐ huái","正身率下":"zhèng shēn shuài xià","正冠纳履":"zhèng guàn nà lǚ","正冠李下":"zhèng guàn lǐ xià","整冠纳履":"zhěng guàn nà lǚ","整躬率物":"zhěng gōng shuài wù","整顿干坤":"zhěng dùn gàn kūn","蒸沙为饭":"zhēng shā wéi fàn","振兵泽旅":"zhèn bīng shì lǚ","枕席还师":"zhěn xí huán shī","枕石漱流":"zhěn shí sòu liú","枕石嗽流":"zhěn shí shù liú","真相毕露":"zhēn xiāng bì lù","针头削铁":"zhēn tóu xuē tiě","贞松劲柏":"zhēn sōng jìng bǎi","赭衣塞路":"zhě yī sài lù","折腰五斗":"shé yāo wǔ dòu","折箭为誓":"shé jiàn wéi shì","折而族之":"zhe er zu zi","昭德塞违":"zhāo dé sè wéi","彰明较着":"zhāng míng jiào zhù","章句小儒":"zhāng jù xiāo rú","湛恩汪濊":"zhàn ēn wāng hún","占风望气":"zhān fēng wàng qì","占风使帆":"zhān fēng shǐ fān","斩将刈旗":"zhǎn jiàng yì qí","斩将搴旗":"zhǎn jiàng qiān qí","斩钉切铁":"zhǎn dīng qiē tiě","詹言曲说":"zhān yán qǔ shuō","沾沾自好":"zhān zhān zì hào","曾母投杼":"zēng mǔ tóu zhù","曾参杀人":"zēng shēn shā rén","曾不惨然":"zeng bu chan ran","造谣中伤":"zào yáo zhòng shāng","早占勿药":"zǎo zhān wù yào","凿龟数策":"záo guī shǔ cè","攒三集五":"cuán sān jí wǔ","攒三聚五":"cuán sān jù wǔ","攒眉苦脸":"zǎn méi kǔ liǎn","攒眉蹙额":"cuán mei cù é","攒零合整":"cuán líng hé zhěng","攒锋聚镝":"cuán fēng jù dí","载舟覆舟":"zài zhōu fù zhōu","载一抱素":"zài yī bào sù","载笑载言":"zài xiào zài yán","载驱载驰":"zài qū zài chí","载酒问字":"zài jiǔ wèn zì","载歌且舞":"zài gē qiě wǔ","运转时来":"yùn zhuǎn shí lái","殒身不恤":"yǔn shēn bú xù","云舒霞卷":"yún shū xiá juǎn","云泥之差":"yún ní zhī chā","岳镇渊渟":"yuè zhèn yuān tīng","月中折桂":"yuè zhōng shé guì","月没参横":"yuè mò shēn héng","月落参横":"yuè luò shēn héng","远不间亲":"yuǎn bù jiàn qīn","鬻驽窃价":"yù nǔ qiè jià","鬻鸡为凤":"yù jī wéi fèng","遇难成祥":"yù nàn chéng xiáng","郁郁累累":"yù yù lěi lěi","吁天呼地":"yù tiān hū dì","吁咈都俞":"yù fú dōu yú","玉卮无当":"yù zhī wú dàng","语笑喧阗":"yǔ xiào xuān tiān","与世沉浮":"yú shì chén fú","与时消息":"yǔ shí xiāo xi","与民除害":"yǔ hǔ chú hài","逾墙钻隙":"yú qiáng zuān xì","渔阳鞞鼓":"yǔ yáng pí gǔ","渔夺侵牟":"yú duó qīn móu","鱼目混珎":"yú mù hùn zhū","杅穿皮蠹":"yú chuān shuǐ dù","余勇可贾":"yú yǒng kě gǔ","予智予雄":"yú zhì yú xióng","予取予携":"yú qǔ yú xié","予取予求":"yú qǔ yú qiú","予取予夺":"yú qǔ yú duó","于家为国":"yú jiā wéi guó","又弱一个":"yòu ruò yī gè","有借无还":"yǒu jiè wú huán","有加无已":"yǒu jiā wǔ yǐ","有国难投":"yǒu guó nán tóu","有蠙可乘":"yǒu bīn kě chéng","游必有方":"yōu bì yǒu fāng","油干灯尽":"yóu gàn dēng jìn","尤云殢雨":"yóu yún zhì yǔ","饔飧不给":"yōng sūn bù jǐ","庸中皦皦":"yōng zhōng bì tóng","蝇攒蚁聚":"yíng cuán yǐ jù","郢书燕说":"yǐng shū yān shuō","蝇攒蚁附":"yíng cuán yǐ fù","营蝇斐锦":"yíng yíng fēi jǐn","盈千累万":"yíng qiān lěi wàn","盈篇累牍":"yíng piān lěi dú","鹰心雁爪":"yīng xīn yàn zhǎo","莺吟燕儛":"yīng yín yàn sāi","应天顺时":"yīng tiān shùn shí","印累绶若":"yìn léi shòu ruò","隐占身体":"yin zhan shen qi","饮犊上流":"yìn dú shàng liú","饮冰食蘖":"yǐn bīng shí bò","引绳切墨":"yǐn shéng qiē mò","龈齿弹舌":"yín chǐ dàn shé","淫言媟语":"yín yán liǎng yǔ","淫词艳曲":"yín cí yàn qǔ","因缘为市":"yīn yuán wéi shì","因树为屋":"yīn shù wéi wū","因祸为福":"yīn huò wéi fú","因敌为资":"yīn dí wéi zī","溢美溢恶":"yì měi yì lè","逸兴云飞":"yì xìng yún fēi","逸兴横飞":"yì xìng héng fēi","抑塞磊落":"yì sè lěi luò","倚闾望切":"yǐ lǘ wàng qiē","蚁拥蜂攒":"yǐ yōng fēng cuán","以紫为朱":"yǐ zǐ wéi zhū","以意为之":"yǐ yì wéi zhī","以言为讳":"yǐ yán wéi huì","以微知着":"yǐ wēi zhī zhù","以疏间亲":"yǐ shū jiàn qīn","以水济水":"yǐ shuǐ jǐ shuǐ","以书为御":"yǐ shū wéi yù","以守为攻":"yǐ shǒu wéi gōng","以升量石":"yǐ shēng liáng dàn","以慎为键":"yǐ shèn wéi jiàn","以日为年":"yǐ rì wéi nián","以筌为鱼":"yǐ quán wéi yú","以鹿为马":"yǐ lù wéi mǎ","以利累形":"yǐ lì lěi xíng","以毁为罚":"yǐ huǐ wéi fá","以黑为白":"yǐ hēi wéi bái","以规为瑱":"yǐ guī wéi tiàn","以古为鉴":"yǐ gǔ wéi jiàn","以宫笑角":"yǐ gōng xiào jué","以法为教":"yǐ fǎ wéi jiào","以耳为目":"yǐ ěr wéi mù","以大恶细":"yǐ dà wù xì","以不济可":"yǐ fǒu jì kě","以白为黑":"yǐ bái wéi hēi","遗世忘累":"yí shì wàng lěi","遗寝载怀":"yí qǐn zài huái","移孝为忠":"yí xiào wéi zhōng","移的就箭":"yí dì jiù jiàn","依头缕当":"yī tóu lǚ dàng","衣租食税":"yì zū shí shuì","衣轻乘肥":"yì qīng chéng féi","衣裳之会":"yī shāng zhī huì","衣锦食肉":"yì jǐn shí ròu","衣锦过乡":"yì jǐn guò xiāng","衣单食薄":"yī dān shí bó","一重一掩":"yī chóng yī yǎn","一之为甚":"yī zhī wéi shèn","一笑了事":"yī xiào le shì","一现昙华":"yī xiàn tán huā","一岁载赦":"yī suì zài shè","一切万物":"yī qiē wàn wù","一目五行":"yī mù wǔ háng","一鳞一爪":"yī lín yī zhǎo","一鳞片爪":"yī lín piàn zhǎo","一了百当":"yī liǎo bǎi dàng","一见了然":"yī jiàn le rán","一还一报":"yī huán yī bào","一毫不差":"yī háo bù chā","一倡百和":"yī chàng bǎi hè","一鞭先著":"yī biān xiān zhuó","一笔抹摋":"yī bǐ mò sà","一暴十寒":"yī pù shí hán","夜静更阑":"yè jìng gēng lán","叶公好龙":"yè gōng hào lóng","野调无腔":"yě diào wú qiāng","咬血为盟":"yǎo xuè wéi méng","瑶池女使":"yáo shi nǚ shǐ","幺麽小丑":"yāo mǒ xiǎo chǒu","养精畜锐":"yǎng jīng xù ruì","仰屋着书":"yǎng wū zhù shū","卬首信眉":"áng shǒu shēn méi","洋洋纚纚":"yáng yáng sǎ sǎ","羊羔美酒":"yán gāo měi jiǔ","羊肠九曲":"yáng cháng jiǔ qǔ","扬眉眴目":"yáng méi shùn mù","扬厉铺张":"yáng lì pù zhāng","扬风扢雅":"yáng fēng bào yǎ","燕子衔食":"yàn zǐ xián shí","燕昭市骏":"yān zhāo shì jùn","燕昭好马":"yān zhāo hǎo mǎ","燕石妄珍":"yān shí wàng zhēn","燕雀处屋":"yàn què chǔ wū","燕骏千金":"yān jùn qiān jīn","燕金募秀":"yān jīn mù xiù","燕驾越毂":"yān jià yuè gū","燕歌赵舞":"yān gē zhào wǔ","燕岱之石":"yān dài zhī shí","燕处焚巢":"yàn chǔ fén cháo","燕处危巢":"yàn chǔ wēi cháo","燕巢幙上":"yàn cháo yú shàng","掞藻飞声":"shǎn zǎo fēi shēng","偃革为轩":"yǎn gé wéi xuān","岩栖穴处":"yán qī xué chǔ","岩居穴处":"yán jū xué chǔ","妍蚩好恶":"yán chī hǎo è","压良为贱":"yā liáng wéi jiàn","搀行夺市":"chān háng duó shì","三十六行":"sān shí liù háng","泣数行下":"qì shù háng xià","当行出色":"dāng háng chū sè","目下十行":"mù xià shí háng","秀出班行":"xiù chū bān háng","儿女成行":"ér nǚ chéng háng","大行大市":"dà háng dà shì","十行俱下":"shí háng jù xià","寻行数墨":"xún háng shǔ mò","熏莸同器":"xún yóu tóng qì","埙篪相和":"xūn chí xiāng hè","血债累累":"xuè zhài lěi lěi","雪鸿指爪":"xuě hóng zhǐ zhǎo","衒玉贾石":"zuì yù jiǎ shí","炫玉贾石":"xuàn yù gǔ shí","炫石为玉":"xuàn shí wéi yù","旋干转坤":"xuán qián zhuǎn kūn","悬石程书":"xuán dàn chéng shū","悬狟素飡":"xuán huán sù kòu","悬龟系鱼":"xuán guī jì yú","揎拳捰袖":"xuān quán lǒng xiù","揎拳捋袖":"xuān quán luō xiù","轩鹤冠猴":"xuān hè guàn hóu","畜妻养子":"xù qī yǎng zǐ","魆风骤雨":"zhuō fēng zhòu yǔ","褎然冠首":"yòu rán guàn shǒu","羞人答答":"xiū rén dā dā","修鳞养爪":"xiū lín yǎng zhǎo","熊据虎跱":"xióng jù hǔ shēn","汹涌淜湃":"xiōng yǒng péng pai","兄死弟及":"xiōng féi dì jí","腥闻在上":"xíng wén zài shàng","兴文匽武":"xīng wén diào wǔ","兴如嚼蜡":"xìng rú jiáo là","兴观群怨":"xìng guān qún yuàn","兴高彩烈":"xìng gāo cǎi liè","心瞻魏阙":"xīn zhān wèi què","心在魏阙":"xīn zài wèi què","心同止水":"xīn rú zhǐ shuǐ","心手相应":"xīn shǒu xiāng yìng","心手相忘":"xīn shǒu xiāng wàng","心口相应":"xīn kǒu xiāng yīng","心广体胖":"xīn guǎng tǐ pán","心驰魏阙":"xīn chí wèi què","心不应口":"xīn bù yīng kǒu","挟势弄权":"jiā shì nòng quán","胁肩累足":"xié jiān lěi zú","邪魔外祟":"xié mó wai suì","敩学相长":"zuàn xué xiāng cháng","校短量长":"jiào duǎn liáng cháng","小眼薄皮":"xiǎo yǎn bó pí","小廉曲谨":"xiǎo lián qǔ jǐn","硝云弹雨":"xiāo yún dàn yǔ","鸮鸣鼠暴":"zhāng míng shǔ bào","削株掘根":"xuē zhū jué gēn","削铁无声":"xuē tiě wú shēng","削职为民":"xuē zhí wéi mín","削木为吏":"xuē mù wéi lì","削草除根":"xuē cǎo chú gēn","橡皮钉子":"xiàng pí dìng zǐ","想望风褱":"xiǎng wàng fēng shèng","香培玉琢":"xiang pei yu zuo","相与为一":"xiāng yǔ wéi yī","相鼠有皮":"xiàng shǔ yǒu pí","相时而动":"xiàng shí ér dòng","相切相磋":"xiāng qiē xiāng cuō","相女配夫":"xiàng nǚ pèi fū","相门有相":"xiàng mén yǒu xiàng","挦章撦句":"lóng zhāng zōng jù","先我着鞭":"xiān wǒ zhuó biān","习焉不察":"xī yān bù chá","歙漆阿胶":"shè qī ē jiāo","晰毛辨发":"xī máo biàn fà","悉索薄赋":"xī suǒ bó fù","雾鳞云爪":"wù lín yún zhǎo","误作非为":"wù zuò fēi wéi","物稀为贵":"wù xī wéi guì","舞爪张牙":"wǔ zhǎo zhāng yá","碔砆混玉":"zhì fū hùn yù","武断专横":"wǔ duàn zhuān héng","五石六鹢":"wǔ shí liù yī","五色相宣":"wǔ sè xiāng xuān","五侯七贵":"wǔ hòu qī guì","五侯蜡烛":"wǔ hòu là zhú","五羖大夫":"wǔ gǔ dà fū","吾自有处":"wu zi you chu","无与为比":"wú yǔ wéi bǐ","无下箸处":"wú xià zhù chǔ","无適无莫":"wú dí wú mò","无伤无臭":"wú shēng wú xiù","无能为役":"wú néng wéi yì","无寇暴死":"wu kou bào shi","无孔不钻":"wú kǒng bù zuān","无间可伺":"wú jiān kě sì","无间可乘":"wú jiān kě chéng","无间冬夏":"wú jiān dōng xià","无缝天衣":"wú féng tiān yī","无恶不为":"wú è bù wéi","无动为大":"wú dòng wéi dà","无地自处":"wú dì zì chǔ","诬良为盗":"wū liáng wéi dào","握粟出卜":"wò sù chū bo","握拳透爪":"wò quán tòu zhǎo","稳操左券":"wén cāo zuǒ quàn","闻风响应":"wén fēng xiǎng yīng","文武差事":"wén wǔ chà shì","文身剪发":"wén shēn jiǎn fā","文房四侯":"wén fáng sì hòu","温枕扇席":"wēn zhěn shān xí","温席扇枕":"wēn xí shān zhěn","温凊定省":"wēn qǐng dìng shěng","温衾扇枕":"wēn qīn shān zhěn","亹亹不倦":"tān wěi bù juàn","委委佗佗":"wēi wēi tuó tuó","委曲成全":"wěi qǔ chéng quán","尾大难掉":"wěi dà nán diào","惟所欲为":"wéi suǒ yù wéi","惟日为岁":"wéi rì wéi suì","惟利是趋":"wéi lì shì qú","帷薄不修":"wéi bó bù xiū","唯唯否否":"wěi wěi fǒu fǒu","唯所欲为":"wéi suǒ yù wéi","为蛇添足":"wéi shé tiān zú","为善最乐":"wéi shàn zuì lè","为蛇画足":"wéi shé huà zú","为山止篑":"wéi shān zhǐ kuì","为仁不富":"wéi rén bù fù","为裘为箕":"wéi qiú wéi jī","为民父母":"wéi mín fù mǔ","为虺弗摧":"wéi huǐ fú cuī","为好成歉":"wéi hǎo chéng qiàn","为鬼为蜮":"wéi guǐ wéi yù","为法自弊":"wéi fǎ zì bì","为恶不悛":"wéi è bù quān","为德不终":"wéi dé bù zhōng","煨干就湿":"wēi gàn jiù shī","煨干避湿":"wēi gàn bì shī","危于累卵":"wēi yú lěi luǎn","望风响应":"wàng fēng xiǎng yīng","望尘僄声":"wàng chén bù shēng","枉曲直凑":"wǎng qǔ zhí còu","往渚还汀":"wǎng zhǔ huán tīng","王贡弹冠":"wáng gòng dàn guàn","亡魂失魄":"wáng hún shī hún","亡国大夫":"wáng guó dà fū","万载千秋":"wàn zài qiān qiū","万贯家私":"wàn guàn ji sī","万夫不当":"wàn fū bù dāng","万别千差":"wàn bié qiān chā","晚食当肉":"wǎn shí dàng ròu","晚节不保":"wǎn jíe bù bǎo","玩岁愒月":"wán suì yī yuè","玩岁愒时":"wán suì yī shí","玩时愒日":"wán shí ài rì","蛙蟆胜负":"wā má shèng fù","吞言咽理":"tūn yán yān lǐ","颓垣断堑":"tuí yuán duàn piàn","推枯折腐":"tuī kū shé fǔ","推干就湿":"tuī gàn jiù shī","剸繁治剧":"shí fán zhì jù","剸繁决剧":"shí fán jué jù","团头聚面":"tuàn tóu jù miàn","兔走鹘落":"tù zǒu gǔ luò","兔丝燕麦":"tù sī yàn mài","兔头麞脑":"tù tóu suō nǎo","兔葵燕麦":"tù kuí yàn mài","兔角龟毛":"tu jiao gui mao","吐哺握发":"tǔ bǔ wò fà","徒讬空言":"tú tún kōng yán","投传而去":"tóu zhuàn ér qù","头足异处":"tóu zú yì chǔ","头上著头":"tóu shàng zhuó tóu","头没杯案":"tóu mò bēi àn","头昏脑闷":"tóu hūn nǎo mèn","头会箕敛":"tóu kuàn jī liǎn","头会箕赋":"tóu kuài jī fù","头出头没":"tóu chū tóu mò","痛自创艾":"tòng zì chuāng yì","痛深恶绝":"tòng shēn wù jué","同源异派":"tóng yuán yì pai","同心僇力":"tóng xīn jié lì","同工异曲":"tóng gōng yì qǔ","同恶相助":"tóng wù xiāng zhù","同恶相恤":"tóng wù xiāng xù","痌瘝在抱":"tōng guān zào bào","通文调武":"tōng wén diào wǔ","通同一气":"tōng tóng yī yì","铤鹿走险":"dìng lù zǒu xiǎn","停留长智":"tíng liú zhǎng zhì","铁树开华":"tiě shù kāi huā","条贯部分":"tiáo guàn bù fēn","挑牙料唇":"tiǎo yá liào chún","挑么挑六":"tiāo yāo tiāo liù","挑唇料嘴":"tiǎo chún liào zuǐ","靦颜事仇":"tiǎn yán shì chóu","恬不为意":"tián bù wéi yì","恬不为怪":"tián bù wéi guài","天下为笼":"tiān xià wéi lóng","天台路迷":"tiān tái lù mí","天年不遂":"tiān nián bù suì","天宝当年":"tian bao dang nian","桃蹊柳曲":"táo qī liǔ qǔ","堂皇冠冕":"táng huáng guàn miǎn","探囊胠箧":"tàn náng wú qiè","谭言微中":"tán yán wēi zhòng","谈言微中":"tán yán wēi zhòng","贪夫狥财":"tān fū huái cái","泰山盘石":"tai shān pán shí","泰来否往":"tài lái pǐ wǎng","泰来否极":"tai lái fǒu jí","泰极而否":"tài jí ér pǐ","狧穅及米":"shì kǎn jí mǐ","损军折将":"sǔn jūn zhé jiàng","遂心应手":"suì xīn yīng shǒu","遂迷不窹":"suí méi bù wù","岁月不居":"suì yuè bù jú","岁聿其莫":"suì yù qí mù","随物应机":"suí wù yīng jī","随风而靡":"suí fēng ér mǐ","宿雨餐风":"xiǔ yǔ cān fēng","宿水飡风":"xiǔ shuǐ cān fēng","宿水餐风":"xiǔ shuǐ cān fēng","夙兴夜处":"sù xīng yè chǔ","搜岩采干":"sōu yán cǎi gàn","薮中荆曲":"sǒu zhōng jí qǔ","宋斤鲁削":"sòng jīn lǔ xuē","松筠之节":"sōng jūn zhī jié","騃童钝夫":"ái tóng dùn fū","騃女痴男":"ái nǚ chī nán","四亭八当":"sì tíng bā dàng","四马攒蹄":"sì mǎ cuán tí","四不拗六":"sì bù niù liù","斯事体大":"ī shì tǐ dà","思所逐之":"si shuo zhu zi","丝恩发怨":"sī ēn fà yuàn","硕望宿德":"shuò wàng xiǔ dé","铄古切今":"shuò gǔ qiē jīn","顺天应时":"shùn tiān yīng shí","顺风转舵":"shǔn fēng zhuǎn duò","顺风驶船":"shǔn fēng shǐ chuán","顺风使船":"shǔn fēng shǐ chuán","顺风而呼":"shǔn fēng ér hū","顺风吹火":"shǔn fēng chuī huǒ","水中捉月":"shui zhong zhuo yue","水中著盐":"shuǐ zhōng zhuó yán","水宿风餐":"shuǐ xiǔ fēng cān","水米无干":"shuǐ mǐ wú gàn","水长船高":"shuǐ zhǎng chuán gāo","双足重茧":"shuāng zú chóng jiǎn","双柑斗酒":"shuài gān dǒu jiǔ","数米而炊":"shǔ mǐ ér chuī","数往知来":"shǔ wǎng zhī lái","数米量柴":"shǔ mǐ ér chái","数理逻辑":"shù lǐ luó ji","数见不鲜":"shuò jiàn bù xiān","数黄道黑":"shu huang dao hei","数黑论黄":"shǔ hēi lùn huáng","数短论长":"shǔ duǎn lùn cháng","数白论黄":"shǔ bái lùn huáng","束缊还妇":"shù yūn huán fù","束缊举火":"shù yūn jǔ huǒ","束身自好":"shù shēn zì hào","束蒲为脯":"shù pú wéi pú","束带结发":"shù dài jié fā","束椽为柱":"shù chuán wéi zhù","书缺有间":"shū quē yǒu jiàn","瘦骨梭棱":"shòu gǔ léng léng","首足异处":"shǒu zú yì chǔ","手足重茧":"shǒu zú chóng jiǎn","手足异处":"shǒu zú yì chǔ","手脚干净":"shǒu jiǎo gàn jìng","手不应心":"shǒu bù yīng xīn","螫手解腕":"shì shǒu jǐe wǎn","释知遗形":"shì shì yí xíng","适时应务":"shì shí yīng wù","适如其分":"shì rú qí fèn","适情率意":"shì qíng shuài yì","适居其反":"shì jú qí fǎn","适当其时":"shì dāng qí shí","适当其冲":"shì dāng qí chōng","饰非遂过":"shì fēi suí guò","视为知己":"shì wéi zhī jǐ","视为儿戏":"shì wéi ér xì","视微知著":"shì wēi zhī zhuó","事与心违":"shì yù xīn wéi","使羊将狼":"shǐ yáng jiàng láng","食为民天":"shí wéi mín tiān","食不重味":"shí bù chóng wèi","食不重肉":"shí bù zhóng ròu","拾掇无遗":"shi duo wu yi","拾带重还":"shí dài zhòng huán","实与有力":"shí yù yǒu lì","实偪处此":"shí bèng chǔ cǐ","识微知著":"shí wēi zhī zhuó","时运不齐":"shí yùn bù jì","时亨运泰":"shí hēng yùn tai","石英玻璃":"shí yīng bō li","石室金匮":"shí shì jīn guì","什袭珍藏":"shí xí zhēn cáng","什袭以藏":"shí xí yǐ cáng","什伍东西":"shí wǔ dōng xī","什袭而藏":"shí xī ér cáng","什围伍攻":"shí wéi wǔ gōng","十魔九难":"shí mó jiǔ nàn","十夫楺椎":"shí fū zhī zhuī","十不当一":"shí bù huò yī","诗书发冢":"shī shū fà zhǒng","虱处裈中":"shī chǔ kūn zhōng","师直为壮":"shī zhí wéi zhuàng","失马塞翁":"shī mǎ sài wēng","尸居龙见":"shī jū lóng xiàn","盛水不漏":"chéng shuǐ bù lòu","圣经贤传":"shèng jīng xián zhuàn","圣君贤相":"shèng jīng xián xiàng","生拖死拽":"shēng tuō sǐ zhuāi","审曲面埶":"shěn qǔ miàn xīn","审己度人":"shěn jǐ duó rén","沈博绝丽":"chén bó jué lì","神武挂冠":"shén wǔ guà guàn","神龙失埶":"shén lóng shī zhì","神号鬼哭":"shén háo guǐ kū","神不收舍":"shén bù shōu shě","深文周内":"shēn wén zhōu nà","深文曲折":"shēn wén qǔ shé","深切着明":"shēn qiē zhe míng","深切着白":"shēn qiē zhe bái","深厉浅揭":"shēn lì qiǎn qì","深谷为陵":"shēn gǔ wéi líng","深恶痛疾":"shēn wù tòng jí","深恶痛嫉":"shēn wù tòng jí","深仇宿怨":"shēn chóu xiǔ yuàn","设心处虑":"shè xīn chǔ lǜ","舍近务远":"shě jìn wù yuǎn","舍己为公":"shě jǐ wèi gōng","舍近即远":"shě jìn jí yuǎn","舍短取长":"shě duǎn qǔ cháng","舍策追羊":"shě cè zhuī yáng","蛇蝎为心":"shé xiē wéi xīn","少年老诚":"shǎo nián lǎo chéng","少成若性":"shào chéng ruò xìng","少不经事":"shào bù jīng shì","上当学乖":"shàng dāng xué guāi","赏不当功":"shǎng bù dāng gōng","善自为谋":"shàn zì wéi móu","善为说辞":"shàn wéi shuō cí","善善恶恶":"shàn shàn wù è","善贾而沽":"shàn jià ér gū","善财难舍":"shàn cái nán shě","扇枕温席":"shān zhěn wēn xí","扇枕温被":"shān zhěn wēn chuáng","苫眼铺眉":"shān yǎn pū méi","讪牙闲嗑":"shàn yá xián kē","山峙渊渟":"shān zhì yuān zī","山阴乘兴":"shān yīn chéng xīng","山殽野湋":"shān yāo yě fù","山溜穿石":"shān liù chuān shí","山节藻棁":"shān jié zǎo lì","沙鸥翔集":"sha ou xiang ji","杀衣缩食":"shài yī suō shí","杀鸡为黍":"shā jī wéi shǔ","色厉胆薄":"sè lì dǎn bó","丧胆销魂":"sàng hún xiāo hún","桑荫未移":"sāng yīn wèi yí","桑荫不徙":"sāng yīn bù xǐ","桑土绸缪":"sāng tǔ chóu miù","桑户棬枢":"sāng hù juàn shū","三战三北":"sān zhān sān běi","三占从二":"sān zhān cóng èr","三瓦两舍":"sān wǎ liǎng shě","三人为众":"sān rén wèi zhòng","三差五错":"sān chā wǔ cuò","三差两错":"sān chā liǎng cuò","三不拗六":"sān bù niù liù","塞翁之马":"sài wēng zhī mǎ","塞翁得马":"sài wēng dé mǎ","塞井焚舍":"sāi jǐng fén shě","洒心更始":"sǎ xīn gèng shǐ","洒扫应对":"sǎ sào yìng duì","软红香土":"ruǎn hóng xiāng yù","入孝出弟":"rù xiào chū tì","入吾彀中":"rù wǔ gòu zhōng","入铁主簿":"rù tiě zhǔ bù","入理切情":"rù lǐ qiē qíng","汝成人耶":"nu cheng ren ye","如水投石":"rú shǔ tóu shí","如切如磋":"rú qiē rú cuō","如登春台":"rú dé chūn tái","肉薄骨并":"ròu bó gǔ bìng","柔情绰态":"róu qíng chuō tai","戎马劻勷":"róng mǎ dān xiào","日朘月削":"rì juān yuè xuē","日中为市":"rì zhōng wéi shì","日中必湲":"rì zhōng bì tóng","日月参辰":"rì yuè shēn chén","日省月修":"rì xǐng yuè xiū","日削月割":"rì xuē yuè gē","日削月朘":"rì xuē yuè juān","日省月试":"rì xǐng yuè shì","日省月课":"rì xǐng yuè kè","日不暇给":"rì bù xiá jǐ","认贼为父":"rèn zéi wéi fù","任达不拘":"rèn láo bù jū","认影为头":"rèn yǐng wéi tóu","认贼为子":"rèn zéi wéi zǐ","人足家给":"rén zú jiā jǐ","人言藉藉":"rén yán jí jí","人模狗样":"rén mú gǒu yàng","人莫予毒":"rén mò yú dú","人给家足":"rén jǐ jiā zú","热熬翻饼":"rě áo fān bǐng","群居穴处":"qún jū xué chǔ","却老还童":"què lǎo huán tóng","权倾中外":"quán qīng zhōng wai","圈牢养物":"juàn láo yǎng wù","去太去甚":"qù tai qù shèn","取予有节":"qǔ yù yǒu jié","诎要桡腘":"qū yào ráo yù","曲终奏雅":"qǔ zhōng zòu yǎ","曲意迎合":"qǔ yì yíng hé","曲意奉迎":"qǔ yì fèng yíng","曲意承迎":"qǔ yì chéng yíng","曲学阿世":"qǔ xué ā shì","曲突移薪":"qǔ tū yí xīn","曲眉丰颊":"qǔ méi fēng jiá","曲肱而枕":"qǔ gōng ér zhěn","秋实春华":"qiū shí chūn huā","穷形尽相":"qióng xíng jìn xiàng","穷年累世":"qióng nián lěi shì","情凄意切":"qíng qī yì qiē","情见埶竭":"qíng jiàn zhōu jié","情见势屈":"qíng xiàn shì qū","情见力屈":"qíng xiàn lì qū","情见乎辞":"qíng xiàn hū cí","清风劲节":"qīng fēng jìng jié","清都绛阙":"qīng dōu jiàng què","清辞丽曲":"qīng cí lì qǔ","倾肠倒肚":"qīng cháng dào dǔ","轻嘴薄舌":"qīng zuǐ bó shé","轻傜薄赋":"qīng yāo báo fù","轻骑简从":"qīng jì jiǎn cóng","轻财好义":"qīng cái hào yì","轻薄无知":"qīng báo wú zhī","轻才好施":"qīng cái hào shī","轻薄无礼":"qīng báo wú lǐ","青紫被体":"qīng zǐ pī tǐ","青林黑塞":"qīng lín hēi sài","青红皁白":"qīng hóng tóu bái","寝苫枕干":"qǐn shān zhěn gàn","螓首蛾眉":"qín shǒu ér méi","擒奸擿伏":"qín jiān fā fú","琴瑟之好":"qí sè zhī hǎo","挈瓶之知":"qiè píng zhī zhì","且住为佳":"qiě zhù wéi jiā","切树倒根":"qiē shù dǎo gēn","切理餍心":"qiē lǐ yàn xīn","切理厌心":"qiē lǐ yàn xīn","切理会心":"qiē lǐ huì xīn","切近的当":"qiē jìn de dāng","切瑳琢磨":"qiē cùn zhuó mó","翘足引领":"qiáo zú yǐn lǐng","翘足而待":"qiáo zú ér dài","巧发奇中":"qiǎo fā qí zhòng","抢地呼天":"qiāng dì hū tiān","强嘴拗舌":"jiàng zuǐ niù shé","强自取折":"qiáng zì qǔ shé","强直自遂":"qiáng zhí zì suí","强文浉醋":"qiǎng wén jiǎ cù","强文假醋":"qiǎng wén jiǎ cù","强死强活":"qiǎng sǐ qiǎng huó","强死赖活":"qiǎng sǐ lài huó","强食自爱":"qiǎng shí zì ài","强食靡角":"qiǎng shí mí jiǎo","强识博闻":"qiǎng shí bó wén","强弓劲弩":"qiáng gōng jìng nǔ","强聒不舍":"qiǎng guō bù shě","强凫变鹤":"qiǎng fú biàn hè","强而后可":"qiǎng ér hòu kě","强词夺正":"qiǎng cí duó zhèng","强得易贫":"qiǎng dé yì pín","遣兴陶情":"qiǎn xìng táo qíng","遣将调兵":"qiǎn jiāng diào bīng","遣兵调将":"qiǎn bīng diào jiàng","前跋后疐":"qián bá hòu máo","搴旗斩将":"qiān qí zhǎn jiàng","搴旗取将":"qiān qí qǔ jiàng","牵羊担酒":"qiān yáng dàn jiǔ","牵强附合":"qiān qiáng fù hé","千姿万态":"qiān zī wàn tai","千状万态":"qiān zhuàng wàn tai","千载一合":"qiān zài yī hé","千载一弹":"qiān zǎi yī dàn","千态万状":"qiān tai wàn zhuàng","千磨百折":"qiān mó bǎi shé","千了万当":"qiān le wàn dàng","千了百当":"qiān liǎo bǎi dàng","千古绝调":"qiān gǔ jué diào","泣下如雨":"qǐ xià rú yǔ","弃之度外":"qì zhī dù wai","气克斗牛":"qì kè dǒu niú","起偃为竖":"qǐ yǎn wéi shù","岂弟君子":"kǎi tì jūn zǐ","綦溪利跂":"qí xī lì guì","棋输先着":"qí shū xiān zhāo","棋输先著":"qí shū xiān zhuó","奇葩异卉":"qí pā yì hùi","齐王舍牛":"qí wáng shě niú","齐量等观":"qí liàng děng guān","欺天诳地":"qī tiān kuāng dì","栖风宿雨":"qī fēng xiǔ yǔ","妻梅子鹤":"qī mén zǐ hè","妻儿老少":"qī ér lǎo shǎo","普天率土":"pǔ tiān shuài tǔ","铺胸纳地":"pū xiōng nà dì","铺眉苫眼":"pū méi shàn yǎn","铺眉蒙眼":"pū méi méng yǎn","铺锦列绣":"pū jǐn liè xiù","破矩为圆":"pò jǔ wéi yuán","破镜重合":"pò jìng zhòng hé","破家为国":"pò jiā wéi guó","破觚为圜":"pò gū wéi yuán","破愁为笑":"pò chóu wéi xiào","瓶坠簪折":"píng zhùi zān zhé","萍飘蓬转":"píng piāo péng zhuàn","帡天极地":"jú tiān jí dì","屏声息气":"bǐng shēng xī qì","屏气吞声":"bǐng qì tūn shēng","凭几据杖":"píng jī jù zhàng","娉婷婀娜":"pīng tíng ē nà","品竹调弦":"pǐn zhú diào xián","贫嘴薄舌":"pín zuǐ bó shé","骈肩累足":"pián jiān lěi zú","骈肩累迹":"pián jiān lěi jì","翩翩年少":"piān piān nián shǎo","片语只辞":"piàn yán zhǐ cí","片鳞半爪":"piàn lín bàn zhǎo","片甲不还":"piàn jiǎ bù huán","披发缨冠":"pī fā yīng guàn","披发文身":"pī fà wén shēn","批砉导窾":"pī huā dǎo táo","批隙导窾":"pī xì dǎo yín","批吭捣虚":"pī háng dǎo xū","批风抹月":"pī fēng mò yuè","烹龙炮凤":"pēng lóng páo fèng","炰鳖脍鲤":"fèng biē kuài lǐ","炮凤烹龙":"páo fèng pēng lóng","旁指曲谕":"páng zhǐ qǔ yù","旁引曲证":"páng yǐn qǔ zhèng","旁通曲畅":"páng tōng qǔ chàng","庞眉皓发":"páng méi hào fà","攀花折柳":"pān huā shé liǔ","攀蟾折桂":"pān chán shé guì","女大难留":"nǚ dà nán liú","女长须嫁":"nǚ zhǎng xū jià","女长当嫁":"nǚ zhǎng dāng jià","弄竹弹丝":"nòng zhú dàn sī","弄玉吹箫":"nòng yù chuí xiāo","弄管调弦":"nòng guǎn diào xián","弄粉调朱":"nòng fěn diào zhū","弄兵潢池":"nòng bīng huáng shi","浓装艳抹":"nóng zhuāng yàn mò","浓抹淡妆":"nóng mò dàn zhuāng","扭转干坤":"niǔ zhuǎn gàn kūn","扭直作曲":"niǔ zhí zuò qū","牛骥同皁":"niú jì tóng wěn","宁缺勿滥":"nìng quē wù làn","啮血为盟":"niè xuè wéi méng","捻土为香":"niǎn tǔ wéi xiāng","年谊世好":"nián yì shì hào","年华垂暮":"nián huá thuí mù","儗不于伦":"lǐ bù yú lún","泥名失实":"nì míng shī shí","泥而不滓":"niè ér bù zǐ","能者为师":"néng zhě wéi shī","能不称官":"néng bù chèn guān","挠直为曲":"náo zhí wéi qū","囊萤照读":"náng yíng zhào shū","难进易退":"nan jin yi tui","难乎为继":"nán hū wéi jì","难乎为情":"nán hū wéi qíng","难更仆数":"nán gēng pú shǔ","难得糊涂":"nán dé hú tú","南蛮鴂舌":"nán mán xiāng shé","南贩北贾":"nán fàn běi gǔ","内修外攘":"nèi xiū wai rǎng","内柔外刚":"nèi róu wai gāng","内峻外和":"nèi jùn wai hé","拿腔作调":"ná qiāng zuò diào","拿粗夹细":"ná cū jiā xì","慕古薄今":"mù gǔ bó jīn","牧猪奴戏":"mù zhòu nú xì","沐猴衣冠":"mù hóu yī guàn","目眢心忳":"mù yuān xīn wǎng","目挑心招":"mù tiǎo xīn zhāo","目空余子":"mù kōng yú zǐ","目量意营":"mù liàng yì yíng","目瞪舌彊":"mù dèng shé jiàng","木头木脑":"mù tóu mù nǎo","木干鸟栖":"mù gàn niǎo qī","侔色揣称":"móu sè chuǎi chèn","莫知所为":"mò zhī suǒ wéi","莫予毒也":"mò yù dú yě","莫为已甚":"mò wéi yǐ shèn","抹月秕风":"mǒ yuè pī fēng","抹粉施脂":"mò fěn shī zhī","磨砻镌切":"mó lóng juān qiē","磨棱刓角":"mó léng liǎng jiǎo","摸头不着":"mō tóu bù zháo","摸门不着":"mō mén bù zháo","摸不着边":"mō bù zhuó biān","命中注定":"mìng zhōng zhù dìng","鸣鹤之应":"míng hè zhī yīng","鸣凤朝阳":"míng fèng zhāo yáng","明效大验":"míng xiào dà yà","名我固当":"ming wo gu dang","灭景追风":"miè yǐng zhuī fēng","邈处欿视":"miǎo chǔ jī shì","面折庭争":"miàn shé tíng zhēng","俛拾地芥":"bì shí dì jiè","俛首帖耳":"mǎ shǒu tiē ěr","黾穴鸲巢":"měng xué qú cháo","绵力薄材":"mián lì bó cái","绵里薄材":"mián lǐ bó cái","靡有孑遗":"mǐ yǒu jié yí","靡衣媮食":"mǐ yī tōu shí","靡衣偷食":"mǐ yī tōu shí","靡然从风":"mǐ rán cóng fēng","靡靡之乐":"mǐ mǐ zhī yuè","迷恋骸骨":"mí liàn hài gǔ","蒙头转向":"mēng tóu zhuàn xiàng","闷海愁山":"mèn hǎi chóu shān","扪参历井":"mén shēn lì jǐng","门单户薄":"mén dān hù bó","昧旦晨兴":"mèi dàn chún xīng","没衷一是":"mò zhōng yī shì","没金饮羽":"mò jīn yǐn yǔ","冒名接脚":"mào míng jiě jiǎo","毛头小子":"máo tóu xiǎo zi","毛遂堕井":"máo suí duò jǐng","毛发耸然":"máo fā sǒng rán","毛发倒竖":"máo fā dǎo shù","毛发不爽":"máo fā bù shuǎng","猫鼠同处":"māo shǔ tóng chǔ","尨眉皓发":"máng méi hào fà","漫天遍地":"màn shān biàn dì","脉脉相通":"mài mài xiāng tōng","卖文为生":"mài wén wéi shēn","卖李钻核":"mài lǐ zuān hé","买椟还珠":"mǎi dú huán zhū","埋天怨地":"mán tiān yuàn dì","埋三怨四":"mán sān yuàn sì","马上房子":"mǎ shàng fáng zi","马入华山":"mǎ rù huá shān","落魄江湖":"luò pò jīng hú","落魄不偶":"luo tuo bu ou","落魄不羁":"luò pò bù jī","落落难合":"luò luò nán hé","落草为寇":"luò cǎo wéi kòu","裸裎袒裼":"luǒ chéng tǎn xī","罗织构陷":"luò zhī gòu xiàn","捋袖揎拳":"luō xiù xuān quán","论黄数黑":"lùn huáng shǔ hēi","乱作胡为":"luàn zuò hú wéi","乱箭攒心":"luàn jiàn cuán xīn","鸾凤和鸣":"luán fèng hè míng","绿叶成荫":"lǜ yè chéng yīn","绿女红男":"lǜ nǚ hóng nán","率由旧章":"shuài yóu jiù zhāng","率由旧则":"shuài yóu jiù zé","率以为常":"shuài yǐ wéi cháng","率土宅心":"shuài tǔ zhái xīn","率土同庆":"shuài tǔ tóng qìng","率兽食人":"shuài shòu shí rén","率土归心":"shuài tǔ guī xīn","率马以骥":"shuài mǎ yǐ jì","率尔成章":"shuài ěr chéng zhāng","履薄临深":"lǚ bó lín shēn","鲁斤燕削":"lǔ jīn yàn xuē","露面抛头":"lù miàn pāo tóu","漏尽更阑":"lòu jìn gēng lán","笼鸟槛猿":"lóng niǎo jiàn yuán","笼鸟池鱼":"lóng niǎo shi yú","龙游曲沼":"long you qu zhao","龙血玄黄":"lóng xuě xuán huáng","龙雕凤咀":"lóng diāo fèng jǔ","六神不安":"liù shén bǔ ān","六尺之讬":"liù chǐ zhī quàn","柳巷花街":"liǔ xiòng huā jiē","柳街花巷":"liǔ jiē huā xiòng","柳骨颜筋":"jiǔ gǔ yán jīn","流离颠疐":"liú lí diān shǔ","令原之戚":"líng yuán zhī qī","令人捧腹":"lìng rén pěng fǔ","陵劲淬砺":"líng jìng cuì lì","临难不惧":"lín nàn bù jǔ","临敌易将":"lín dí yì jiàng","裂裳衣疮":"liè sháng yī chuāng","裂裳裹足":"liè cháng guǒ zú","裂冠毁冕":"liè guàn huǐ miǎn","埒才角妙":"liè cái jué miào","了无惧色":"liǎo wū jǔ sè","了身达命":"liǎo shēn dá mìng","了然无闻":"le rán wú wén","了不可见":"liǎo bù kě jiàn","了不长进":"liǎo bù zhǎng jǐn","燎如观火":"liǎo rú guān huǒ","燎发摧枯":"liǎo fà cuī kū","量小力微":"liàng xiǎo lì wēi","量时度力":"liàng shí dù lì","量枘制凿":"liàng ruì zhì záo","量入计出":"liàng rù jì chū","量如江海":"liàng rú jiāng hǎi","量力度德":"liàng lì duó dé","量金买赋":"liàng jīn mǎi fù","量己审分":"liàng jǐ shěn fēn","量材录用":"liàng cái lù yòng","量才器使":"liàng cái qì shǐ","量才而为":"liàng cái ér wéi","梁孟相敬":"liáng mèng xiāng jìn","恋恋难舍":"liàn liàn nán shě","敛声屏息":"liǎn shēng bǐng xī","敛骨吹魂":"liǎn gǔ chuí hún","联篇累牍":"lián piān lěi dú","连编累牍":"lián biān lěi dú","詈夷为跖":"lì yí wéi zhí","利令志惛":"lì lìng zhì zào","历精为治":"lì jīng wéi zhì","历精更始":"lì jīng gèng shǐ","哩哩罗罗":"li li luō luō","李广不侯":"lǐ guǎng bù hòu","礼为情貌":"lǐ wéi qíng mào","礼让为国":"lǐ ràng wéi guó","礼坏乐崩":"lǐ huài yuè bēng","犁庭扫闾":"lí tíng sǎo lǚ","犁生骍角":"lí shēng yuè jiǎo","犁牛骍角":"lí niú mài jiǎo","离山调虎":"lí shān diào hǔ","离本趣末":"lí běn qū mò","离本徼末":"lí běn yāo mò","楞眉横眼":"lèng méi héng yǎn","擂天倒地":"léi tiān dǎo dì","累足成步":"lěi zú chéng bù","累月经年":"lěi yuè jīng nián","累屋重架":"lěi wū chóng jià","累瓦结绳":"lěi wǎ jié shéng","累土至山":"lěi tǔ zhì shān","累土聚沙":"lěi tǔ jù shā","累苏积块":"lěi sū jī kuài","累卵之危":"lěi luǎn zhī wēi","累累如珠":"lěi lěi rú zhū","累块积苏":"lěi kuài jī sū","累教不改":"lěi jiào bù gǎi","累牍连篇":"lěi dú lián piān","乐山乐水":"yào shān yào shuǐ","潦原浸天":"lǎo yuán jìn tiān","老师宿儒":"lǎo shī xiǔ rú","牢什古子":"láo shí gǔ zi","琅嬛福地":"láng huán fú dì","狼号鬼哭":"láng háo guǐ kū","狼飡虎咽":"láng cān hǔ yān","阑风长雨":"lán fēng zhàng yǔ","拉枯折朽":"lā kū shé xiǔ","揆情度理":"kuí qíng duó lǐ","揆理度情":"kuí lǐ duó qíng","窥间伺隙":"kuī jiàn sì xì","旷日累时":"kuàng rì lěi shí","匡救弥缝":"kuāng jiù mí fèng","枯树生华":"kū shù shēng huā","口轻舌薄":"kǒu qīng shé bó","口角生风":"kǒu jiǎo shēng fēng","口角春风":"kǒu jiǎo chūn fēng","口角风情":"kǒu jiǎo fēng qíng","口干舌焦":"kǒu gàn shé jiāo","口腹之累":"kǒu fù zhī lěi","口出大言":"kǒu chū dā yán","空腹便便":"kōng fù pián pián","嗑牙料嘴":"kē yá liào zuǐ","刻木为吏":"kè mù wéi lì","刻木为鹄":"kè mù wéi hú","咳珠唾玉":"ké zhū tuò yù","咳唾成珠":"ké tuò chéng zhū","抗颜为师":"kàng yán wéi shī","糠豆不赡":"kang dou bu shan","开华结果":"kāi huā jié guǒ","峻阪盐车":"jùn bǎn yún chē","攫为己有":"jué wéi jǐ yǒu","嚼铁咀金":"jiáo tiě jǔ jīn","嚼墨喷纸":"jué mò pēn zhǐ","倔头强脑":"juè tóu jiàng nǎo","倔头倔脑":"juè tou juè nǎo","倦鸟知还":"juàn niǎo zhī huán","卷席而葬":"juǎn xí ér zàng","卷旗息鼓":"juǎn qí xī gǔ","卷甲倍道":"juǎn jiǎ bèi dào","聚米为山":"jù mǐ wéi shān","聚米为谷":"jù mǐ wéi gǔ","锯牙钩爪":"jù yá gōu zhǎo","举手相庆":"jǔ shǒu xiāng qìng","举世混浊":"jǔ shì hún zhuó","鞫为茂草":"jū wéi mào cǎo","鞠为茂草":"jū wéi mào cǎo","拘神遣将":"jū shén qiǎn jiàng","居轴处中":"jū zhóu chǔ zhōng","居下讪上":"jú xià shàn shàng","居不重茵":"jū bù chóng yīn","居不重席":"jū bù chóng xí","旧事重提":"jiù shì zhòng tí","旧调重弹":"jiù diào chóng tán","灸艾分痛":"jiù ài fēn tòng","久要不忘":"jiǔ yāo bù wàng","九转功成":"jiǔ zhuàn gōng chéng","九蒸三熯":"jiǔ zhēng sān shēng","敬业乐群":"jìng yè yào qún","井底虾蟆":"jǐng dǐ xiā má","旌旗卷舒":"jīng qí juǎn shū","惊魂落魄":"jīng hún luò pò","荆棘载途":"jīng jí zài tú","荆棘塞途":"jīng jí sè tú","经纶济世":"jing lun ji shi","禁舍开塞":"jìn shě kāi sāi","祲威盛容":"lóng wēi shèng róng","进退中度":"jìn tuì zhòng dù","进退消长":"jìn tuì xiāo cháng","进退应矩":"jìn tuì yīng jǔ","进退触籓":"jìn tuì chù zǔ","进退出处":"jìn tuì chū chǔ","进退跋疐":"jìn tuì bá zǔ","进寸退尺":"jǐn cùn tuì chǐ","尽多尽少":"jǐn duō jǐn shǎo","锦囊还矢":"jǐn náng huán shǐ","矜名嫉能":"jīn míng jì néng","矜己自饰":"jīn jǐ zhì shì","矜功负气":"jīn gōng fǔ qì","津关险塞":"jīn guān xiǎn sài","金吾不禁":"jīn wú bù jìn","金匮石室":"jīn guì shí shì","金翅擘海":"jīn chì bāi hǎi","戒奢宁俭":"jiè shē nìng jiān","解衣衣人":"jiè yī yī rén","解人难得":"jiě rén nán dé","解铃系铃":"jiě líng jì líng","解发佯狂":"jiě fà yáng kuáng","截铁斩钉":"jié tiě zhǎn dìng","诘屈謷牙":"jié qū dà yá","诘屈磝碻":"jié qū bìng zhòu","诘曲聱牙":"jié qǔ áo yá","教一识百":"jiāo yī shí bǎi","教猱升木":"jiāo náo shēng mù","较瘦量肥":"jiào shòu liàng féi","矫矫不群":"jiǎo jiǎo bù qùn","矫国更俗":"jiǎo guó gēng sú","皎阳似火":"jiǎo yáng shì huǒ","挢抂过正":"jiǎo kuāng guò zhèng","角立杰出":"jiao li jie chu","焦沙烂石":"jiāo shā shí làn","焦唇干舌":"jiāo chún gàn shé","骄泰淫泆":"jiāo tai yín zhuàng","骄奢淫泆":"jiāo shē yín yí","骄儿騃女":"jiāo ér bā nǚ","浇风薄俗":"jiāo fēng bó sú","降妖捉怪":"xiáng yāo zhuō guài","将遇良材":"jiàng yù liáng cái","将取固予":"jiāng qǔ gū yǔ","将门有将":"jiàng mén yǒu jiàng","将功折过":"jiāng gōng shé guò","将夺固与":"jiāng duó gū yǔ","将伯之助":"qiāng bó zhī zhù","将伯之呼":"qiāng bó zhī hū","槛花笼鹤":"jiàn huā lóng hè","鉴影度形":"jiàn yǐng duó xíng","渐不可长":"jiàn bù kě zhǎng","剑首一吷":"jiàn shǒu yī guī","见义敢为":"jiàn yì gǎn wéi","见义当为":"jiàn yì dāng wéi","见义必为":"jiàn yì bì wéi","见素抱朴":"xiàn sù bào pǔ","见弃于人":"jiàn qì yǔ rén","见几而作":"jiàn jī ér zuò","见弹求鸮":"jiàn dàn qiú háo","简丝数米":"jiǎn sī shǔ mǐ","俭不中礼":"jiǎn bù zhòng lǐ","间见层出":"jiàn xiàn céng chū","间不容息":"jiàn bù róng xī","间不容瞚":"jiān bù róng xǐ","尖嘴薄舌":"jiān zuǐ bó shé","假洋鬼子":"jiǎ yáng guǐ zi","甲冠天下":"jiǎ guàn tiān xià","葭莩之亲":"jiā fú zhī qīn","家无担石":"jiā wú dàn shí","家累千金":"jiā lèi qiān jīn","家给人足":"jiā jǐ rén zú","家给民足":"jiā jǐ mín zú","家道从容":"jiā dào cōng róng","家长礼短":"jiā cháng lǐ duǎn","夹枪带棍":"jiā qiāng dài gùn","夹袋人物":"jiā dài rén wù","霁风朗月":"jī fēng lǎng yuè","寄兴寓情":"jì xìng yù qíng","纪纲人论":"jì gāng rén lún","计深虑远":"jì shēng lǜ yuǎn","计功量罪":"jì gōng liàng zuì","掎裳连襼":"jǐ shang lián zhēng","虮虱相吊":"jǐ shī xiēng diào","几不欲生":"jī bù yù shēng","集腋为裘":"jí yè wéi qiú","疾不可为":"jí bù kě wéi","急脉缓灸":"jí mài huǎn jiù","急景凋年":"jí yǐng diāo nián","急公好施":"jí gōng hào shī","极深研几":"jí shēn yán jī","及宾有鱼":"jí bīn yoǔ yú","激薄停浇":"jī bó tíng jiāo","稽古揆今":"jī gǔ zhèn jīn","赍志而没":"jī zhì ér mò","积铢累寸":"jī zhū lěi cùn","积岁累月":"jī suì lěi yuè","积素累旧":"jī sù lěi jiù","积时累日":"jī shí lěi rì","积日累岁":"jī rì lěi suì","积日累月":"jī rì lěi yuè","积日累久":"jī rì lěi jiǔ","积年累岁":"jī nián lěi suì","积露为波":"jī lù wéi bō","积德累仁":"jī dé lěi rén","积德累善":"jī dé lěi shàn","积德累功":"jī dé lěi gōng","积谗糜骨":"jī chán méi gǔ","鸡皮鹤发":"jī pí hè fà","饥寒交切":"jī hán jiāo qiē","饥冻交切":"jī dòng jiāo qiē","击排冒没":"jī pái mào mò","祸为福先":"huò wéi fú xiān","祸福相依":"huò fú xiāng yī","祸福相生":"huò fú xiāng shēng","获隽公车":"huò jūn gōng chē","货而不售":"huo er bu shou","混应滥应":"hùn yīng làn yīng","魂飞魄丧":"hún fēi pò sāng","魂不着体":"hún bù zhuó tǐ","魂不著体":"hún bù zhuó tǐ","浑抡吞枣":"hún lún tūn zǎo","昏迷不省":"hūn mí bù xǐng","昏镜重磨":"hūn jìng chóng mó","昏镜重明":"hūn jìng chóng míng","昏定晨省":"hūn dìng chén xǐng","毁舟为杕":"huǐ zhōu wéi duò","毁钟为铎":"huǐ zhōng wéi duó","毁冠裂裳":"huǐ guān liè cháng","晦盲否塞":"huì máng pǐ sè","诲人不惓":"huì rén bù tiě","悔过自责":"huǐ guò zì zè","回船转舵":"huí chuán zhǎn duò","潢池盗弄":"huáng shi dào nòng","黄冠野服":"huáng guàn yě fú","黄冠草履":"huáng guàn cǎo lǚ","黄冠草服":"huáng guàn cǎo fú","黄发儿齿":"huáng fà ér chǐ","黄发垂髫":"huáng fà chuí tiáo","还珠合浦":"huán zhū hé pǔ","还珠返璧":"huán zhū fǎn bì","还元返本":"huán yuán fǎn běn","还朴反古":"huán pǔ fǎn gǔ","还年驻色":"huán nián zhù sè","还年却老":"huán nián què lǎo","还年卻老":"huán nián què lǎo","还醇返朴":"huán chún fǎn pǔ","还淳返朴":"huán chún fǎn pǔ","还淳反素":"huán chún fǎn sù","还淳反朴":"huán chún fǎn pǔ","还淳反古":"huán chún fǎn gǔ","坏裳为裤":"huài shang wéi kù","槐南一梦":"huái nán yī mēng","画蛇著足":"huà shé zhuó zú","画地为狱":"huà dì wéi yù","画荻和丸":"huà dí huò wán","化枭为鸠":"huà xiāo wéi jiū","化零为整":"huà líng wéi zhěng","化腐为奇":"huà fǔ wéi qí","化鸱为凤":"huà chī wéi fèng","华亭鹤唳":"huà tíng hè lì","花攒锦聚":"huā cuán jǐn jù","花攒锦簇":"huā cuán jǐn cù","花簇锦攒":"huā cù jǐn cuán","花不棱登":"huā bù lēng dēng","户限为穿":"hù xiàn wéi chuān","胡作乱为":"hú zuò luàn wéi","胡作胡为":"hú zuò hú wéi","胡思乱量":"hú sī luàn liàng","呼天吁地":"hū tiān yù dì","呼卢喝雉":"hū lú hè zhì","呼来喝去":"hū lái hè qù","呼不给吸":"hū bù jǐ xī","厚味腊毒":"hòu wèi xī dú","厚今薄古":"hòu jīn bó gǔ","厚德载物":"hòu dé zài wù","鸿泥雪爪":"hóng ní xuě zhǎo","鸿渐于干":"hóng jiàn yú gàn","鸿飞雪爪":"hóng fēi xuě zhǎo","洪炉燎发":"hóng lú liáo fà","红绳系足":"hóng shéng jì zú","红不棱登":"hóng bù lēng dēng","衡石量书":"héng shí liàng shū","横征苛役":"hèng zhēng kē yì","横征苛敛":"hèng zhēng kē liǎn","横征暴赋":"hèng zhēng bào fù","横灾飞祸":"hèng zāi fēi huò","横殃飞祸":"hèng yāng fēi huò","横无忌惮":"hèng wú jì dàn","横拖倒拽":"héng tuō dào zhuāi","横抢硬夺":"hèng qiǎng yìng duó","横抢武夺":"hèng qiǎng wǔ duó","横科暴敛":"hèng kē bào liǎn","横恩滥赏":"hèng ēn làn shǎng","恨海难填":"hèn hǎi nán tián","黑更半夜":"hēi gēng bàn yè","鹤发松姿":"hè fà sōng zī","鹤发鸡皮":"hè fà jī pí","鹤处鸡群":"hè chǔ jī qún","涸思干虑":"hé sī qián lǜ","河涸海干":"hé hé hǎi qián","和颜说色":"hé yán yuè sè","何所不为":"hé suǒ bù wéi","合浦还珠":"hé pǔ huán zhū","合两为一":"hé liǎng wéi yī","合从连衡":"hé zòng lián héng","浩浩汤汤":"hào hào shāng shāng","号咷大哭":"háo táo dà kū","号寒啼饥":"háo hán tí jī","好勇斗狠":"hào yǒng dòu hěn","好佚恶劳":"hǎo yì wù láo","好问则裕":"hào wèn zé yù","好为事端":"hào wéi shì duān","好问决疑":"hào wèn jué yí","好生之德":"hào shēng zhī dé","好善乐施":"hào shàn lè shī","好善恶恶":"hǎo shàn wù è","好骑者堕":"hào qí zhě duò","好奇尚异":"hǎo qí shàng yì","好谋善断":"hào móu shàn duàn","好恶不同":"hǎo è bù tóng","好丹非素":"hào dān fēi sù","豪干暴取":"háo gàn bào qǔ","毫发不爽":"háo fà bù shuǎng","寒酸落魄":"hán suān luò pò","邯郸重步":"hán dān zhóng bù","含英咀华":"hán yīng jǔ huá","含商咀征":"hán shāng jǔ zhēng","含菁咀华":"hán jīng jǔ huá","含糊不明":"hán hú bù míng","含垢藏疾":"hán gǒu cáng jí","含宫咀征":"hán gōng jǔ zhēng","过隙白驹":"guò xī bái jū","过为已甚":"guò wéi yǐ shèn","桂折一枝":"guì shé yī zhī","桂折兰摧":"guì shé lán cuī","规重矩叠":"guī chóng jǔ dié","规旋矩折":"guī xuán jǔ shé","广文先生":"guǎng wén xiān sheng","广譬曲谕":"guǎng pì qǔ yù","广陵散绝":"guǎng líng sǎn jué","冠山戴粒":"guàn shān dài lì","冠绝一时":"guàn jué yī shí","冠屦倒施":"guàn jù dǎo shī","官官相为":"guān guān xiāng wéi","关情脉脉":"guān qíng mài mài","挂席为门":"guà xí wéi mén","寡见鲜闻":"guǎ jiàn xiǎn wén","瓜葛相连":"guā gě xiāng lián","顾曲周郎":"gù qǔ zhōu láng","顾景惭形":"gù yǐng cán xíng","故态复还":"gù tài fù huán","鼓吻奋爪":"gǔ wěn fèn zhǎo","鼓唇咋舌":"gǔ chún zǎ shé","古调单弹":"gǔ diào dān tán","古调不弹":"gǔ diào bù tán","沽名干誉":"gū míng gàn yù","孤独矜寡":"gū dú guān guǎ","姑射神人":"gū yè shén rén","苟合取容":"gǒu hé qǔ ān","狗续侯冠":"gǒu xù hòu guàn","钩爪锯牙":"gōu zhǎo jù yá","共枝别干":"gòng zhī bié gàn","共为唇齿":"gòng wéi chún chǐ","拱手而降":"gǒng shòu ér xiáng","拱肩缩背":"gǒng jān suō bèi","功薄蝉翼":"gōng bó chán yì","弓调马服":"gōng diào mǎ fú","更姓改物":"gēng xìng gǎi wù","更弦易辙":"gēng xián yì zhé","更弦改辙":"gēng xián gǎi zhé","更仆难终":"gēng pú nán zhōng","更仆难数":"gēng pú nán shǔ","更难仆数":"gēng nán pú shù","更令明号":"gēng lìng míng hào","更阑人静":"gēng lán rén jǐng","更待干罢":"gèng dài gàn bà","更唱叠和":"gēng chàng dié hé","更唱迭和":"gēng chàng dié hé","更长梦短":"gēng cháng mèng duǎn","亘古奇闻":"gèn gǔ qī wén","根生土长":"gēn shēn tǔ zhǎng","各色名样":"gè sè gè yàng","格格不纳":"gē gē bù nà","格格不吐":"gē gē bù tǔ","歌莺舞燕":"gē yíng wǔ yàn","告朔饩羊":"gù shuò xì yáng","告老还家":"gào lǎo huán jiā","膏唇岐舌":"gào chún qí shé","膏唇贩舌":"gào chún fàn shé","膏车秣马":"gào chē mò mǎ","高义薄云":"gāo yì bó yún","高风劲节":"gāo fēng jìng jié","岗头泽底":"gāng tóu zé dǐ","敢为敢做":"gǎn wéi gǎn zuò","竿头日上":"gān tóu rí shàng","甘分随时":"gān fèn suí shí","甘处下流":"gān chǔ xià liú","干霄蔽日":"gàn xiāo bì rì","干啼湿哭":"gàn tí shī kū","干名犯义":"gàn míng fàn yì","干将莫邪":"gān jiàng mò yé","干端坤倪":"gàn duān kūn ní","干城之将":"gān chéng zhī jiàng","改张易调":"gǎi zhāng yì diào","改弦易调":"gǎi xián yì diào","改曲易调":"gǎi qǔ yì diào","改恶为善":"gǎi è wéi shàn","腹载五车":"fù zài wǔ chē","富国彊兵":"fù guó jiāng bīng","父债子还":"fù zhài zǐ huán","父为子隐":"fù wéi zǐ yǐn","辅世长民":"fǔ shì zhǎng mín","拊背搤吭":"fǔ bèi hè kēng","福为祸先":"fú wéi huò xiān","福为祸始":"fú wéi huò shǐ","符号逻辑":"fú hào luó ji","浮收勒折":"fú shōu lè shé","伏虎降龙":"fú hǔ xiáng lóng","肤受之愬":"fū shòu zhī xiāng","肤皮潦草":"fū pǐ liǎo cǎo","肤见謭识":"fū jiàn guǎng shí","否终则泰":"pǐ zhōng zé tài","否终复泰":"pǐ zhōng fù tài","否往泰来":"pǐ wǎng tài lái","否去泰来":"pǐ qù tài lái","否极阳回":"pǐ jí yáng huí","否极泰回":"pǐ jí tài huí","佛头著粪":"fó tóu zhuó fèn","奉为楷模":"fèng wéi kǎi mó","凤鸣朝阳":"fèng míng zhāo yáng","凤靡鸾吪":"fèng mǐ luán é","逢场作乐":"féng chǎng zuò lè","蜂攒蚁聚":"fēng cuán yǐ jù","蜂攒蚁集":"fēng cuán yǐ jí","蜂腰削背":"fēng yāo xuē bèi","蜂扇蚁聚":"fēng shān yǐ jù","封豨修蛇":"fēng xī yǒu shé","风影敷衍":"fēng yǐng fū yān","风驰云卷":"fēng chí yún juǎn","风驰电卷":"fēng chí diàn juǎn","风驰草靡":"fēng chí cǎo mǐ","丰屋蔀家":"fēng wū zhī jiā","粪土不如":"fèn tú bù rú","分风劈流":"fēn fēng pǐ liú","沸沸汤汤":"fèi fèi shāng shāng","匪伊朝夕":"fěi yí zhāo xī","菲食薄衣":"fěi shí bó yī","飞沙走砾":"fēi shē zǒu lì","飞将数奇":"fē jiàng shù jī","飞鸿雪爪":"fēi hóng xuě zhǎo","放辟邪侈":"fàng pì xié chǐ","方领圆冠":"fāng lǐng yuán guàn","方寸万重":"fāng cùn wàn chóng","贩夫皁隶":"fàn fū yě lì","泛应曲当":"fàn yīng qǔ dāng","犯而不校":"fàn ér bù jiào","返朴还真":"fǎn pǔ huán zhēn","返本还源":"fǎn běn huán yuán","返本还元":"fǎn běn huán yuán","反老还童":"fǎn lǎo huán tóng","反劳为逸":"fǎn láo wéi yì","翻黄倒皁":"fān huáng dǎo yí","翻肠倒肚":"fān cháng dǎo dǔ","法轮常转":"fǎ lún cháng zhuàn","罚不当罪":"fá bù dāng zuì","发植穿冠":"fà zhí chuān guān","发踊冲冠":"fà yǒng chōng guān","发引千钧":"fà yǐn qiān jūn","发上指冠":"fā shàng zhǐ guàn","发上冲冠":"fā shàng chōng guàn","发怒穿冠":"fà nù chuān guān","发怒冲冠":"fā nù chōng guàn","发蒙解缚":"fā méng jiě fu","发奸擿伏":"fā jiān tì fú","发短心长":"fà duǎn xīn cháng","二竖为虐":"èr shù wéi nüè","耳目闭塞":"ěr mù bì sāi","儿女心肠":"ér nǘ xīn cháng","儿女亲家":"ér nǚ qìng jiā","恩不放债":"ēn bù fàng zhai","遏恶扬善":"è è yán shàn","饿殍枕藉":"è piǎo zhěn jí","饿殍载道":"è piǎo zài dào","恶紫夺朱":"wù zǐ duó zhū","恶醉强酒":"wù zuì qiǎng jiǔ","恶意中伤":"è yì zhòng shāng","恶湿居下":"wù shī jū xià","恶居下流":"wù jū xià liú","恶恶从短":"wù wù cóng duǎn","恶不去善":"wù bù qù shàn","扼吭拊背":"è gāng fǔ bèi","扼吭夺食":"è gāng duó shí","扼襟控咽":"è jīn kòng yān","额手相庆":"é shǒu xiāng qìng","峨峨汤汤":"é é shāng shāng","屙金溺银":"ē jīn niào yín","朵颐大嚼":"duǒ yī dà jiáo","夺人所好":"duó rén suǒ hào","多言数穷":"duō yán shuò qióng","多文为富":"duō wén wéi fù","多钱善贾":"duō qián shàn gǔ","多端寡要":"duō duān guǎi yào","多财善贾":"duō cái shàn gǔ","遁逸无闷":"dùn yì wú mèn","遁俗无闷":"dùn sú wú mèn","遁世无闷":"dùn shì wú mèn","遁迹黄冠":"dùn jì huáng guàn","顿学累功":"dùn xué lěi gōng","对薄公堂":"duì bù gōng táng","堆案盈几":"duī àn yíng jī","断还归宗":"duàn huán guī zōng","断发文身":"duàn fà wén shēn","断长续短":"duàn chāng xù duǎn","断长补短":"duàn chāng bǔ duǎn","短见薄识":"duǎn jiàn bó shí","蠹居棋处":"dù jū qí chǔ","蠹居棊处":"dù jū què chǔ","度己以绳":"duó jǐ yǐ shéng","杜默为诗":"dù mò wéi shī","杜鹃啼血":"dù juān tí xuě","笃志好学":"dǔ zhì hǎo xué","笃近举远":"dǔ jìn jǔ juǎn","独有千秋":"dú yòu qiān qiū","读书得间":"dú shū dé jiàn","斗转参横":"dǒu zhuǎn shēn héng","兜肚连肠":"dōu dǔ lián cháng","洞见症结":"dòng jiàn zhèng jié","栋折榱坏":"dòng shé cuī huài","恫疑虚猲":"dòng yí xū gé","恫疑虚喝":"dòng yí xū hè","动中窾要":"dòng zhōng zhe yào","东抹西涂":"dōng mò xī tú","东鸣西应":"dōng míng xī yīng","东鳞西爪":"dōng lín xī zhǎo","东量西折":"dōng liàng xī shé","东家西舍":"dōng jiā xī shě","东观西望":"dōng guāng xī wàng","东方将白":"dong fang jiang bai","东扯西拽":"dōng chě xī zhuāi","丢魂丧胆":"diu1 hún sàng dǎn","鼎折餗覆":"dǐng shé sù fù","鼎折覆餗":"dǐng shé fù sù","鼎鼐调和":"dǐng nai tiáo hé","鼎铛有耳":"dǐng chēng yǒu ěr","鼎铛玉石":"dǐng chēng yù shí","钉头磷磷":"ding tou lin lin","叠矩重规":"dié jǔ chóng guī","迭矩重规":"dié jǔ chóng guī","跌宕不羁":"dié dàng bù jī","跌弹斑鸠":"diē dàn bān jiū","调嘴调舌":"tiáo zuǐ diào shé","调弦品竹":"diào xián pǐn zhú","吊尔郎当":"diào er láng dāng","雕心雁爪":"diāo xīn yàn zhǎo","雕虫薄技":"diāo chóng báo jì","刁钻促搯":"diāo zuàn cù chāo","点指划脚":"diǎn zhǐ jí jiǎo","点石为金":"diǎn shí wéi jīn","点手划脚":"diǎn shǒu jí jiǎo","颠乾倒坤":"diān qiān dǎo kūn","颠来簸去":"diān lái bǒ qù","颠倒衣裳":"diān dǎo yī cháng","颠倒干坤":"diān dǎo gàn kūn","掂斤抹两":"diān jīn mò liǎng","低唱浅酌":"dì chàng qiǎn zhuó","低唱浅斟":"dì chàng qiǎn zhēn","登台拜将":"dēng tái bài jiàng","灯尽油干":"dēng jìn yóu gàn","灯蛾扑火":"dé é pū huǒ","的一确二":"dí yī què èr","德薄能鲜":"dé bó néng xiǎn","得手应心":"dé shǒu yīng xīn","得马折足":"dé mǎ shé zú","得薄能鲜":"dé bó néng xiān","道远日暮":"dào yuàn rì mù","蹈其覆辙":"dǎo qì fù zhé","捣虚撇抗":"dǎo xū piē kàng","倒载干戈":"dào zài gān gē","倒因为果":"dǎo yīn wéi guǒ","倒裳索领":"dào cháng suǒ lǐng","倒果为因":"dào guǒ wéi yīn","叨在知己":"tāo zài zhī jǐ","叨陪末座":"tāo péi mò zuò","党豺为虐":"dǎng chái wéi nüè","当轴处中":"dāng zhóu chǔ zhōng","当着不着":"dāng zhuó bù zhuó","当务始终":"dang wu shi zhong","淡妆轻抹":"dàn zhuāng qīng mò","淡汝浓抹":"dàn zhuāng nóng mǒ","弹雨枪林":"dàn yǔ qiāng lín","弹丸脱手":"tán wán tuō shǒu","弹铗无鱼":"dàn jiá wú yú","胆大心粗":"dǎn dā xīn cū","箪食瓢饮":"dān sì piáo yǐn","箪食壶酒":"dān sì hú jiǔ","大喜若狂":"dā xǐ ruò kuáng","大璞不完":"tài bú bù wán","大明法度":"dà jíng fǎ dù","大处着墨":"dà chù zhuó mò","大车以载":"dà chē yǐ zài","打闷葫芦":"dǎ mèn hú lu","打家截舍":"dǎ jiā jié shě","沓来踵至":"tǎ lái zhǒng zhì","沓来麕至":"tà lái yǒu zhì","厝火燎原":"cuò huǒ liǎo yuán","撮土焚香":"cuō gǔ fén xiāng","撮科打哄":"cuō kē dǎ hòng","寸积铢累":"cùn jī zhū lěi","啛啛喳喳":"cuì cuì chā chā","榱栋崩折":"cuī dòng bēng shé","榱崩栋折":"cuī bēng dòng shé","摧折豪强":"cuī zhé háo qiáng","摧刚为柔":"cuī gāng wéi róu","从俗就简":"cóng sú jiù jiǎ","此呼彼应":"cǐ hū bǐ yīng","此发彼应":"cǐ fā bǐ yīng","此动彼应":"cǐ dòng bǐ yīng","此唱彼和":"cǐ chàng bǐ hè","慈悲为本":"cí bēi wéi běn","纯属骗局":"chún shú piàn jú","春笋怒发":"chūn sǔn mù fā","春风一度":"chūn fēng yī dù","春风风人":"chūn fēng fèng rén","垂头搨翼":"chuí tóu dá yì","吹竹弹丝":"chuí zhú dàn sī","传为笑谈":"chuán wéi xiào tán","传为笑柄":"chuán wéi xiào bǐng","传风扇火":"chuán fēng shān huǒ","传风搧火":"chuán fēng yǒu huǒ","穿红着绿":"chuān hóng zhuó lǜ","川渟岳峙":"chuān tīng yuè zhì","啜英咀华":"chuò yīng jǔ huá","揣时度力":"chuǎi shí duó lì","触处机来":"chù chǔ jī lái","处尊居显":"chǔ zūn jū xiǎn","处堂燕鹊":"chǔ táng yàn què","处堂燕雀":"chǔ táng yàn què","处实效功":"chǔ shí xiào gōng","处高临深":"chǔ gāo lín shēn","出入无间":"chū rù wú jiān","出奇划策":"chū qí huá cè","出门应辙":"chū mén yīng zhé","出处语默":"chū chǔ yǔ mò","出处殊途":"chū chǔ shū tú","出处殊涂":"chū chǔ shū tú","出处进退":"chū chǔ jìn tuì","愁山闷海":"chóu shān mèn hǎi","愁红惨绿":"chóu hóng cǎn lü","冲冠眦裂":"chōng guàn zì liè","冲冠怒发":"chōng guàn nù fà","冲冠发怒":"chōng guàn fā nù","赤绳系足":"chì shéng jì zú","耻与哙伍":"chǐ yú kuài wǔ","齿牙为祸":"chǐ yá wéi huò","尺二冤家":"chǐ èr yuān jia","尺短寸长":"chǐ duǎn cù cháng","尺寸之功":"chǐ cù zhī gōng","吃着不尽":"chī zhuó bù jìn","乘肥衣轻":"chéng féi yì qīng","城北徐公":"chéng běi xǘ gōng","成一家言":"chěng yī jiān yán","成败兴废":"chéng bài xīng fèi","趁水和泥":"chèn shuǐ huò ní","趁哄打劫":"chèn hōng dǎ jié","称雨道晴":"chēng yǔ dào aíng","称体载衣":"chèn tǐ cái yī","称体裁衣":"chèn tǐ cái yī","称家有无":"chèn jiā yǒu wú","称德度功":"chēng dé duó gōng","沉吟章句":"chén yīn zhāng jù","沉吟不决":"chén yīn bù jué","沉谋重虑":"chén móu chóng lǜ","沉疴宿疾":"chén kē sù jì","嗔目切齿":"chēn mù qiē chǐ","扯纤拉烟":"chě qiàn lā yān","扯顺风旗":"chě shǔn fēng qí","车载船装":"chē zǎi chuán zhuāng","车尘马迹":"chē zhén mǎ jì","朝折暮折":"zhāo shé mù shé","朝阳鸣凤":"zhāo yáng míng fèng","朝升暮合":"zhāo shēng mù gě","朝乾夕愓":"zhāo qián xī dàng","朝前夕惕":"zhāo qiáng xī tì","朝攀暮折":"zhāo pān mù shé","朝成暮徧":"cháo chéng mù shí","巢居穴处":"cháo jū xué chǔ","超今冠古":"chāo jīn guàn gǔ","倡条冶叶":"chāng tiáo yě yè","倡而不和":"chàng ér bù hè","畅所欲为":"chàng suǒ yù wéi","苌弘碧血":"cháng hóng bì xuě","长幼尊卑":"zhǎng yòu zūn bēi","长幼有叙":"zhǎng yòu yǒu xù","长绳系日":"cháng shéng jì rì","长篇累牍":"cháng piān lěi dú","长年三老":"zhǎng nián sān lǎo","长虺成蛇":"zhǎng huǐ chéng shé","长恶靡悛":"cháng è mǐ quān","长春不老":"cháng chún bù lǎo","长傲饰非":"zhǎng ào shì fēi","昌亭旅食":"cháng tíng lǚ shí","谄上抑下":"chǎn shàng yi xià","禅絮沾泥":"chán xū zhān ní","差三错四":"chā sān cuò sì","层台累榭":"céng tái lěi xiè","层见迭出":"céng chū dié jiàn","草率将事":"cǎo lǜ jiāng shì","操奇逐赢":"cāo qì zhù yíng","操戈同室":"cāo gē tóon shì","藏踪蹑迹":"cáng zōng niè jī","苍蝇见血":"cāng yíng jiàn xuě","惨绿愁红":"cǎn lü chóu hóng","餐松啖柏":"cān sōng dàn biǎ","餐风宿草":"cān fēng sù xuě","骖风驷霞":"cēn fēng sì xiá","参伍错综":"cēn wǔ cuò zōng","参横斗转":"shēn héng dǒu zhuǎn","参回斗转":"shēn huí dǒu zhuǎn","参辰卯酉":"shēn chén mǎo yǒu","参辰日月":"shēn chén rì yuè","材优干济":"cái yōu gàn jǐ","材轻德薄":"cái qīng dé bó","材大难用":"cái dà nán yòng","材薄质衰":"cái bó zhì shuāi","才占八斗":"cái zhān bā dǒu","才疏德薄":"cái shū dé bó","才轻德薄":"cái qīng dé bó","才大难用":"cái dà nán yòng","才薄智浅":"cāi bó zhì qiǎn","擦拳抹掌":"cā quán mò zhǎng","不足为意":"bù zú wéi yì","不足为据":"bù zú wéi jù","不足为法":"bù zú wéi fǎ","不足齿数":"bù zú chǐ shǔ","不着疼热":"bù zhuó téng rè","不知薡蕫":"bù zhī dīng dǒng","不越雷池":"bù yuè léi shi","不亦善夫":"bù yi shàn fū","不相为谋":"bù xiāng wéi móu","不贪为宝":"bù tān wé bǎo","不随以止":"bu shui yi zi","不奈之何":"bù nai zhī hé","不露锋铓":"bù lù fēng huì","不了而了":"bù liǎo ér liǎo","不可胜举":"bù kě shèng jù","不可奈何":"bù kě mài hé","不可揆度":"bù kě kuí duó","不绝如发":"bù jué rú fà","不揪不睬":"bù chǒu bù cǎi","不间不界":"bù gān bù gà","不遑启处":"bù huáng qǐ chǔ","不遑宁处":"bù huáng níng chǔ","不根之谈":"bù gān zhī tán","不分青白":"bù fēn qīng béi","不当不正":"bù dāng bù zhèng","不差什么":"bù chà shí mǒ","不差上下":"bù chā shàng xià","不差累黍":"bù chā lěi shǔ","不差毫厘":"bù chā háo lí","不差毫发":"bù chā háo fà","不辟斧钺":"bù bì fǔ yuè","不拔一毛":"bù bá yì máo","餔糟啜漓":"bǔ zāo chuò lí","擘两分星":"bó liǎng fēn xīng","簸土扬沙":"bǒ tǔ yáng shā","薄物细故":"bó wù xì gù","薄情无义":"báo qíng wú yì","薄寒中人":"bó hán zhòng rén","博文约礼":"bó wén yuè lǐ","伯乐一顾":"bō lè yī gù","播糠眯目":"bō kāng mǐ mù","播穅眯目":"bō kāng mǐ mù","剥皮抽筋":"bō pí chōu jīn","剥肤椎髓":"bō fū chuí suǐ","波属云委":"bō zhǔ yún wěi","波骇云属":"bō hài yún zhǔ","拨乱为治":"bō luàn wéi zhì","病入骨隨":"bìng rù gǔ suǐ","并赃拿贼":"bìng zhuō ná zéi","并为一谈":"bìng wéi yī tán","兵未血刃":"bīng wèi xuě rèn","兵微将寡":"bīng wēi jiàng guǎ","兵强将勇":"bīng qiáng àng yǒng","兵多将广":"bīng duō jiàng guǎng","兵不由将":"bīng bù yóu jiàng","冰解的破":"bīng jiě dì pò","彬彬济济":"bīn bīn jǐ jǐ","别类分门":"bié lèi fān mén","别开一格":"bié kāi yí gé","别鹤离鸾":"bié hè lí láun","别创一格":"bié chuàng yí gé","摽梅之年":"biào mén zhī nián","表里为奸":"biǎo lǐ wéi jiān","飙发电举":"biāo fā diàn jù","变贪厉薄":"biǎn tān lì bó","变危为安":"biàn wēi wéi ān","变幻不测":"biàn huà bù cè","变风改俗":"biàn fēng yì sú","鞭约近里":"biān yuē jīn lǐ","鞭擗向里":"biān bì xiàng lǐ","鞭擗进里":"bīan pì jìn lǐ","鞭辟着里":"biān bì zhuó lǐ","鞭辟向里":"biān bì xiàng lǐ","避难趋易":"bì nán qiù yì","蔽明塞聪":"bì míng sè cōng","蔽聪塞明":"bì cōng sè míng","敝帷不弃":"bǐ wéi bù qì","敝盖不弃":"bǐ gài bù qì","闭目塞耳":"bì mù sè ěr","闭明塞聪":"bì míng sè cōng","闭门思愆":"bì gé sī qiān","闭门扫迹":"bì kǒu sǎo guǐ","闭门塞户":"bì kǒu sè hù","闭门塞窦":"bì kǒu sè dòu","闭门合辙":"bì kǒu hé shé","闭合自责":"bì gé zì zé","闭合思过":"bì gé sī guò","秕言谬说":"bǐ yán miù shuò","彼唱此和":"bǐ chàng cǐ hè","彼倡此和":"bǐ chàng cǐ hè","比物属事":"bǐ wù zhǔ shì","比量齐观":"bǐ liàng qí guān","本枝百世":"běn zhī bǒi shì","被山带河":"pī shān dài hé","被甲执兵":"pī jiǎ zhí bīng","被甲枕戈":"pī jiǎ zhěn gē","被甲据鞍":"pī jiǎ jù ān","被甲持兵":"pī jiǎ chí bīng","被褐怀珠":"pī hè huái zhū","被褐怀玉":"pī hè huái yù","被发缨冠":"pī fà yīng guàn","被发文身":"pī fà wén shēn","背义忘恩":"bèi yù wàng ēn","背义负信":"bèi yù fù xìn","背义负恩":"bèi yù fù ēn","背曲腰弯":"bèi qǔ yāo wān","背曲腰躬":"bèi qǔ yāo gōng","北门管钥":"běi mén guǎn yuè","北窗高卧":"bēi chuāng gāo wò","北辰星拱":"bēi chén xīng gǒng","北鄙之音":"bēi bǐ zhī yīn","北鄙之声":"bēi bǐ zhī shēng","悲声载道":"bēi shēng zài dào","卑宫菲食":"bēi gōng fěi shí","暴衣露冠":"pù yī lù guàn","暴衣露盖":"pù yī lù gài","暴腮龙门":"pù sāi lóng mén","暴露文学":"bào lòu wén xué","暴虎冯河":"bào hǔ píng hé","抱蔓摘瓜":"bào wàn zhāi guā","抱关执钥":"bào guān zhí yuè","抱法处势":"bào fǎ chǔ shì","褒贬与夺":"bǎo biǎn yǔ duó","帮闲钻懒":"bāng xián zuān lǎn","半上落下":"bàn shàng luò xià","半间不界":"bàn gān bù gà","半间半界":"bàn gān bàn gà","半筹莫展":"bàn chóu mò chǎn","拜将封侯":"bài jiàng fēng hóu","百中百发":"bǎi zhòng bǎi fā","百下百着":"bǎi xià bǎi zháo","百兽率舞":"bǎi shòu shuài wǔ","百舍重趼":"bǎi shè chóng jiǎn","百舍重茧":"bǎi shè chóng jiǎn","百了千当":"bǎi liǎo qiān dāng","百孔千创":"bǎi kǒng qiān chuāng","百堕俱举":"bǎi huī jù jǔ","百不当一":"bǎi bù dāng yī","白衣卿相":"bái yī qīng xiàng","白首相庄":"bái shǒu xiāng zhuāng","白首为郎":"bái shǒu wéi láng","白首相知":"bái shǒu xiāng zhī","白不呲咧":"bái bù cī liě","把玩无厌":"bǎ wán wǔ yàn","拔锅卷席":"bá guō juǎn xí","拔本塞源":"bá běn sè yuán","拔本塞原":"bá běn sè yuán","扒耳搔腮":"pá ěr sāo sāi","八难三灾":"bā nàn sān zāi","傲不可长":"ào bù kě zhǎng","鳌鸣鳖应":"áo míng biē yīng","熬更守夜":"áo gēng shǒu yè","敖不可长":"ào bù kě zhǎng","暗箭中人":"àn jiàn zhòng rén","安时处顺":"ān shí chǔ shùn","安身为乐":"ān shēn wéi lè","安老怀少":"ān lǎo huái shào","安常处顺":"ān cháng chǔ shùn","安步当车":"ān bù dàng chē","爱生恶死":"ài shēng wù sǐ","爱人好士":"ài rén hào shì","矮子观场":"ǎi zǐ guān cháng","矮人观场":"ǎi rén guān cháng","捱风缉缝":"āi fēng qī fèng","挨山塞海":"āi shān sè hǎi","挨肩擦膀":"āi jiān cā bǎng","阿其所好":"ē qí suǒ hào","阿家阿翁":"ā gū ā wēng","阿党相为":"ē dǎng xiāng wéi","追亡逐北":"zhuī bēn zhú běi","转忧为喜":"zhuǎn yōu wéi xǐ","竹篮打水":"zhú lán dá shuǐ","重铬酸钾":"chóng gè suān jiǎ","知疼着热":"zhī téng zháo rè","语不惊人":"yǔ bù jīng rèn","于今为烈":"yú jīn wéi liè","以古为镜":"yǐ gǔ wéi jìng","一日三省":"yī rì sān xǐng","燕雀处堂":"yàn què chǔ táng","穴居野处":"xué jū yě chǔ","五脊六兽":"wǔ jí liù shòu","无声无臭":"wú shēng wú xiù","谓予不信":"wèi yú bù xìn","万箭攒心":"wàn jiàn cuán xīn","舍身为国":"shě shēn wéi guó","杀妻求将":"shā qī qiú jiàng","曲不离口":"qǔ bù lí kǒu","强作解人":"qiǎng zuò jiě rén","气冲斗牛":"qì chōng dǒu niú","毛发悚然":"máo fā sǒng rán","临深履薄":"lín shēn lǚ bó","老调重谈":"lǎo diào chóng tán","钧天广乐":"jūn tiān guǎng yuè","艰难竭蹶":"jiān nán jié jué","夹七夹八":"jiā qī jiā bā","霁月光风":"jī yuè guāng fēng","急功好利":"jí gōng hào lì","祸福相倚":"huò fú xiāng yī","混混噩噩":"hún hún è è","厚古薄今":"hòu gǔ bó jīn","鬼怕恶人":"guǐ pà èr én","伽马射线":"gā mǎ shè xiàn","佛头着粪":"fó tóu zhuó fèn","奉为至宝":"fèng wéi zhì bǎo","恶语中伤":"è yǔ zhòng shāng","丢三拉四":"diu sān lā sì","登坛拜将":"dēng tán bài jiàng","晨昏定省":"chén hūn dìng xǐng","察察为明":"chá chá wéi míng","博闻强识":"bó wén qiáng zhì","避难就易":"bì nán jiù yì"},b=Object.keys(t).map((n=>({zh:n,pinyin:t[n],priority:4,length:4}))),x={"巴尔干半岛":"bā ěr gàn bàn dǎo","巴尔喀什湖":"bā ěr kā shí hú","不幸而言中":"bù xìng ér yán zhòng","布尔什维克":"bù ěr shí wéi kè","赶鸭子上架":"gǎn yā zī shàng jià","何乐而不为":"hé lè ér bù wéi","苛政猛于虎":"kē zhè měng yú hǔ","蒙得维的亚":"méng de wéi de yà","民以食为天":"mín yǐ shí wéi tiān","拧成一股绳":"níng chéng yī gǔ shéng","事后诸葛亮":"shì hòu zhū gé liàng","物以稀为贵":"wù yǐ xī wéi guì","先下手为强":"xiān xià shǒu wéi qiáng","行行出状元":"háng háng chū zhuàng yuán","亚得里亚海":"yà de lǐ yà hǎi","眼不见为净":"yǎn bù jiàn wéi jìng","有鼻子有眼":"yǒu bí zi yǒu yǎn","竹筒倒豆子":"zhú tǒng dǎo dòu zi"},q=Object.keys(x).map((n=>({zh:n,pinyin:x[n],priority:5,length:5})));class w{constructor(){this.children=new Map,this.fail=null,this.isEnd=!1,this.pattern=null;}}class m{constructor(){this.root=new w;}buildTrie(n){for(let h of n){const{zh:n,priority:i}=h;let g=this.root;for(let h=0;h<n.length;h++){let i=n.charAt(h);g.children.has(i)||g.children.set(i,new w),g=g.children.get(i);}g.isEnd=!0,(!g.pattern||i>=g.pattern.priority)&&(g.pattern=h);}this.buildFailPointer();}rebuildTrie(n){this.root=new w,this.buildTrie(n),this.buildFailPointer();}buildFailPointer(){let n=[];for(let[h,i]of this.root.children)i.fail=this.root,n.push(i);for(;n.length>0;){let h=n.shift();for(let[i,g]of h.children){let u=h.fail;for(;null!==u&&!u.children.has(i);)u=u.fail;g.fail=null===u?this.root:u.children.get(i),n.push(g);}}}search(n){let h=this.root,i=[];for(let g=0;g<n.length;g++){let u=n.charAt(g);for(;null!==h&&!h.children.has(u);)h=h.fail;if(null===h)h=this.root;else {h=h.children.get(u),h.isEnd&&i.push(Object.assign(Object.assign({},h.pattern),{index:g-h.pattern.length+1}));let n=h.fail;for(;null!==n&&n.isEnd;)i.push(Object.assign(Object.assign({},n.pattern),{index:g-n.pattern.length+1})),n=n.fail;}}return this.filter(i)}filter(n){const h=[];let i=0;for(let g=0;g<n.length;g++){const{index:u,length:s,priority:z}=n[g];u>=i?(h.push(n[g]),i=u+s):z>h[h.length-1].priority&&(h[h.length-1]=n[g],i=u+s);}return h}}const f=[...q,...b,...d,...c],r=[...z,...f],p=new m;p.buildTrie(f);const e=new m;e.buildTrie(r);var k=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;function a(n){return n.replace(k,"_").length}let Z={};const T=/^[\uD800-\uDBFF]$/,P=/^[\uDC00-\uDFFF]$/,O=n=>{const h=n.charCodeAt(0),i=y[h];return i?i.split(" ")[0]:n},C=n=>n.replace(/(ā|á|ǎ|à)/g,"a").replace(/(ō|ó|ǒ|ò)/g,"o").replace(/(ē|é|ě|è)/g,"e").replace(/(ī|í|ǐ|ì)/g,"i").replace(/(ū|ú|ǔ|ù)/g,"u").replace(/(ǖ|ǘ|ǚ|ǜ)/g,"ü").replace(/(ń|ň|ǹ)/g,"n").replace(/ḿ|m̀/g,"m"),v=u=>{const s=u.split(" "),z=[],o=[];for(let u of s)for(let s of n)if(u.startsWith(s)){let n=u.slice(s.length);-1!==h.indexOf(s)&&-1!==i.indexOf(n)&&(n=g[n]),z.push(s),o.push(n);break}return {final:o.join(" "),initial:z.join(" ")}},F=n=>{const{final:h}=v(n);let i="",g="",s="";return -1!==u.indexOf(C(h))?(i=h[0],g=h[1],s=h.slice(2)):(g=h[0]||"",s=h.slice(1)||""),{head:i,body:g,tail:s}},$=n=>{const h=/(ā|ō|ē|ī|ū|ǖ)/,i=/(á|ó|é|í|ú|ǘ|ń|ḿ)/,g=/(ǎ|ǒ|ě|ǐ|ǔ|ǚ|ň)/,u=/(à|ò|è|ì|ù|ǜ|ǹ|m̀)/,s=/(a|o|e|i|u|ü|n)/,z=[];return n.split(" ").forEach((n=>{h.test(n)?z.push("1"):i.test(n)?z.push("2"):g.test(n)?z.push("3"):u.test(n)?z.push("4"):s.test(n)?z.push("0"):z.push("");})),z.join(" ")},A=n=>{const h=[];return n.split(" ").forEach((n=>{h.push(n[0]);})),h.join(" ")},D=n=>"string"==typeof n||(console.error("The first param of pinyin is error: "+n+' is not assignable to type "string".'),!1),N=(n,h)=>{let i=h.nonZh;if("removed"===i)return n.filter((n=>n.isZh));if("consecutive"===i){for(let h=n.length-2;h>=0;h--){const i=n[h],g=n[h+1];i.isZh||g.isZh||(i.origin+=g.origin,i.result+=g.result,g.delete=!0);}return n.filter((n=>!n.delete))}return n},B=(n,h)=>!(1!==a(n)||!h.multiple)&&((n,h="normal")=>{const i=n.charCodeAt(0),g=Z[n]||("surname"===h?s[n]:"")||y[i]||"";return g?g.split(" ").map((h=>({origin:n,result:h,isZh:!0,originPinyin:h}))):[{origin:n,result:n,isZh:!1,originPinyin:n}]})(n,h.mode),H=(n,h)=>{switch(h.pattern){case"pinyin":break;case"num":n.forEach((n=>{n.result=$(n.result);}));break;case"initial":n.forEach((n=>{n.result=v(n.result).initial;}));break;case"final":n.forEach((n=>{n.result=v(n.result).final;}));break;case"first":n.forEach((n=>{n.result=A(n.result);}));break;case"finalHead":n.forEach((n=>{n.result=F(n.result).head;}));break;case"finalBody":n.forEach((n=>{n.result=F(n.result).body;}));break;case"finalTail":n.forEach((n=>{n.result=F(n.result).tail;}));}},W=(n,h)=>{switch(h.toneType){case"symbol":break;case"none":n.forEach((n=>{n.result=C(n.result);}));break;case"num":n.forEach((n=>{n.result=((n,h)=>{const i=C(n).split(" "),g=$(h).split(" "),u=[];return i.forEach(((n,h)=>{u.push(`${n}${g[h]}`);})),u.join(" ")})(n.result,n.originPinyin);}));}},S=(n,h)=>{h.v&&n.forEach((n=>{n.result=n.result.replace(/ü/g,"v");}));},M=n=>{for(let h=n.length-2;h>=0;h--){const i=n[h],g=n[h+1];T.test(i.origin)&&P.test(g.origin)&&(i.origin+=g.origin,i.result+=g.result,i.originPinyin=i.result,g.delete=!0,h--);}return n=n.filter((n=>!n.delete))},_={pattern:"pinyin",toneType:"symbol",type:"string",multiple:!1,mode:"normal",removeNonZh:!1,nonZh:"spaced",v:!1};function G(n,h=_){if(!D(n))return n;if(""===n)return "array"===h.type||"all"===h.type?[]:"";"all"===h.type&&(h.pattern="pinyin"),"num"===h.pattern&&(h.toneType="none"),h.removeNonZh&&(h.nonZh="removed");let i=Array(n.length);return i=((n,h,i)=>{const g=("surname"===i?e:p).search(n);let u=0;for(let i=0;i<n.length;){const s=g[u];if(s&&i===s.index){const n=s.pinyin.split(" ");let g=0;for(let u=0;u<s.length;u++)T.test(s.zh[u-1])&&P.test(s.zh[u])?h[i+u]={origin:s.zh[u],result:"",isZh:!0,originPinyin:""}:(h[i+u]={origin:s.zh[u],result:n[g],isZh:!0,originPinyin:n[g]},g++);i+=s.length,u++;}else {const g=n[i],u=O(g);h[i]={origin:g,result:u,isZh:u!==g,originPinyin:u},i++;}}return h})(n,i,h.mode||"normal"),i=M(i),i=N(i,h),B(n,h)&&(i=B(n,h)),H(i,h),W(i,h),S(i,h),((n,h,i)=>{if(h.multiple&&1===a(i)){let h="";n=n.filter((n=>{const i=n.result!==h;return h=n.result,i}));}return "array"===h.type?n.map((n=>n.result)):"all"===h.type?n.map((n=>{const h=n.isZh?n.result:"",{initial:i,final:g}=v(h),{head:u,body:s,tail:z}=F(h);return {origin:n.origin,pinyin:h,initial:i,final:g,first:n.isZh?A(n.result):"",finalHead:u,finalBody:s,finalTail:z,num:Number($(n.originPinyin)),isZh:n.isZh}})):n.map((n=>n.result)).join(" ")})(i,h,n)}const I={precision:"first",continuous:!1,space:"ignore",lastPrecision:"start"},J=(n,h,i)=>{"any"===(null==i?void 0:i.precision)&&(i.lastPrecision="any");const g=Object.assign(Object.assign({},I),i||{});"ignore"===g.space&&(h=h.replace(/\s/g,""));return "any"===(null==i?void 0:i.precision)?L(n,h,g):Q(n,h,g)},K=(n,h)=>{let i=0;for(let g=0;g<n.length;g++)n[g]===h[i]&&i++;return i},L=(n,h,i)=>{let g=[];for(let u=0;u<n.length;u++){if("ignore"===i.space&&" "===n[u]){g.push(u);continue}if(n[u]===h[0]){h=h.slice(1),g.push(u);continue}const s=G(n[u],{toneType:"none",multiple:!0,type:"array"});let z=0;if(s.forEach((n=>{const i=K(n,h);i>z&&(z=i);})),z&&(h=h.slice(z),g.push(u)),!h)break}if(h)return null;if(i.continuous){const n=g;if(g.some(((h,i)=>i>0&&h!==n[i-1]+1)))return null}return "ignore"===i.space&&(g=g.filter((h=>" "!==n[h]))),g.length?g:null},Q=(n,h,i)=>{const g=n.split(""),u=Array(g.length+1);for(let n=0;n<u.length;n++)u[n]=Array(h.length+1),u[n][0]=[];for(let n=0;n<u[0].length;n++)u[0][n]=[];for(let g=1;g<u.length;g++){if(!i.continuous||"ignore"==i.space&&" "===n[g-1])for(let n=1;n<=h.length;n++)u[g][n-1]=u[g-1][n-1];for(let s=1;s<=h.length;s++)if(u[g-1][s-1]&&(1===s||u[g-1][s-1].length)){const z=G(n[g-1],{type:"array",toneType:"none",multiple:!0});if(n[g-1]===h[s-1]){const n=[...u[g-1][s-1],g-1];if((!u[g][s]||n.length>u[g][s].length)&&(u[g][s]=n),s===h.length)return u[g][s]}if(h.length-s<=6){if(z.some((n=>"any"===i.lastPrecision?n.includes(h.slice(s-1,h.length)):"start"===i.lastPrecision?n.startsWith(h.slice(s-1,h.length)):"first"===i.lastPrecision?n[0]===h.slice(s-1,h.length):"every"===i.lastPrecision&&n===h.slice(s-1,h.length))))return [...u[g-1][s-1],g-1]}const o=i.precision;if("start"===o&&z.forEach((n=>{let i=s;const z=[...u[g-1][s-1],g-1];for(;i<=h.length&&n.startsWith(h.slice(s-1,i));)(!u[g][i]||z.length>u[g][i].length)&&(u[g][i]=z),i++;})),"first"===o&&z.some((n=>n[0]===h[s-1]))){const n=[...u[g-1][s-1],g-1];(!u[g][s]||n.length>u[g][s].length)&&(u[g][s]=n);}const y=z.find((n=>n===h.slice(s-1,s-1+n.length)));if(y){const n=[...u[g-1][s-1],g-1],h=s-1+y.length;(!u[g][h]||n.length>u[g][h].length)&&(u[g][h]=n);}}}return null};

/**
 * marked v4.3.0 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    hooks: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, 'g');
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, '$1') : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: 'blockquote',
        raw: cap[0],
        tokens,
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0].replace(/^\t+/, (t) => ' '.repeat(3 * t.length));
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            nextLine = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }

            // End list item if found start of new heading
            if (headingBeginRegex.test(nextLine)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(nextLine)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) { // Dedent if possible
              itemContents += '\n' + nextLine.slice(indent);
            } else {
              // not enough indentation
              if (blankLine) {
                break;
              }

              // paragraph continuation unless last line was a different block level element
              if (line.search(/[^ ]/) >= 4) { // indented code block
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }

              itemContents += '\n' + nextLine;
            }

            if (!blankLine && !nextLine.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);

        if (!list.loose) {
          // Check if list should be loose
          const spacers = list.items[i].tokens.filter(t => t.type === 'space');
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));

          list.loose = hasMultipleLineBreaks;
        }
      }

      // Set all items to loose if list is loose
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = 'paragraph';
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '';
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, '$1') : cap[3];
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === '\n'
        ? cap[1].slice(0, -1)
        : cap[1];
      return {
        type: 'paragraph',
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        const raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = raw.slice(1, -1);
          return {
            type: 'em',
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = raw.slice(2, -2);
        return {
          type: 'strong',
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = { ...block };

/**
 * GFM Block Grammar
 */

block.gfm = {
  ...block.normal,
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
};

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = {
  ...block.normal,
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
};

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
// lookbehind is not available on Safari as of version 16
// inline.escapedEmSt = /(?<=(?:^|[^\\)(?:\\[^])*)\\[*_]/g;
inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = { ...inline };

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
};

/**
 * GFM Inline Grammar
 */

inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
};

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape(lang)
      + '">'
      + (escaped ? code : escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

class Hooks {
  constructor(options) {
    this.options = options || defaults;
  }

  static passThroughHooks = new Set([
    'preprocess',
    'postprocess'
  ]);

  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }

  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
}

function onError(silent, async, callback) {
  return (e) => {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if (silent) {
      const msg = '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
      if (async) {
        return Promise.resolve(msg);
      }
      if (callback) {
        callback(null, msg);
        return;
      }
      return msg;
    }

    if (async) {
      return Promise.reject(e);
    }
    if (callback) {
      callback(e);
      return;
    }
    throw e;
  };
}

function parseMarkdown(lexer, parser) {
  return (src, opt, callback) => {
    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }

    const origOpt = { ...opt };
    opt = { ...marked.defaults, ...origOpt };
    const throwError = onError(opt.silent, opt.async, callback);

    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      return throwError(new Error('marked(): input parameter is undefined or null'));
    }
    if (typeof src !== 'string') {
      return throwError(new Error('marked(): input parameter is of type '
        + Object.prototype.toString.call(src) + ', string expected'));
    }

    checkSanitizeDeprecation(opt);

    if (opt.hooks) {
      opt.hooks.options = opt;
    }

    if (callback) {
      const highlight = opt.highlight;
      let tokens;

      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        tokens = lexer(src, opt);
      } catch (e) {
        return throwError(e);
      }

      const done = function(err) {
        let out;

        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = parser(tokens, opt);
            if (opt.hooks) {
              out = opt.hooks.postprocess(out);
            }
          } catch (e) {
            err = e;
          }
        }

        opt.highlight = highlight;

        return err
          ? throwError(err)
          : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;

      if (!tokens.length) return done();

      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(() => {
            highlight(token.text, token.lang, function(err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });

      if (pending === 0) {
        done();
      }

      return;
    }

    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
        .then(src => lexer(src, opt))
        .then(tokens => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens)
        .then(tokens => parser(tokens, opt))
        .then(html => opt.hooks ? opt.hooks.postprocess(html) : html)
        .catch(throwError);
    }

    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      const tokens = lexer(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      let html = parser(tokens, opt);
      if (opt.hooks) {
        html = opt.hooks.postprocess(html);
      }
      return html;
    } catch (e) {
      return throwError(e);
    }
  };
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  return parseMarkdown(Lexer.lex, Parser.parse)(src, opt, callback);
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  marked.defaults = { ...marked.defaults, ...opt };
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };

  args.forEach((pack) => {
    // copy options to new object
    const opts = { ...pack };

    // set async to true if it was set to true before
    opts.async = marked.defaults.async || opts.async || false;

    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers[ext.name];
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
      opts.extensions = extensions;
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse Hooks extensions --== //
    if (pack.hooks) {
      const hooks = marked.defaults.hooks || new Hooks();
      for (const prop in pack.hooks) {
        const prevHook = hooks[prop];
        if (Hooks.passThroughHooks.has(prop)) {
          hooks[prop] = (arg) => {
            if (marked.defaults.async) {
              return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then(ret => {
                return prevHook.call(hooks, ret);
              });
            }

            const ret = pack.hooks[prop].call(hooks, arg);
            return prevHook.call(hooks, ret);
          };
        } else {
          hooks[prop] = (...args) => {
            let ret = pack.hooks[prop].apply(hooks, args);
            if (ret === false) {
              ret = prevHook.apply(hooks, args);
            }
            return ret;
          };
        }
      }
      opts.hooks = hooks;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        let values = [];
        values.push(pack.walkTokens.call(this, token));
        if (walkTokens) {
          values = values.concat(walkTokens.call(this, token));
        }
        return values;
      };
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  let values = [];
  for (const token of tokens) {
    values = values.concat(callback.call(marked, token));
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          values = values.concat(marked.walkTokens(cell.tokens, callback));
        }
        for (const row of token.rows) {
          for (const cell of row) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
        }
        break;
      }
      case 'list': {
        values = values.concat(marked.walkTokens(token.items, callback));
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            values = values.concat(marked.walkTokens(token[childTokens], callback));
          });
        } else if (token.tokens) {
          values = values.concat(marked.walkTokens(token.tokens, callback));
        }
      }
    }
  }
  return values;
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;

marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
Parser.parse;
Lexer.lex;

const footnoteRegex = /\[\^[^\]]*\]/g;
const highlightRegex = /==([^=]*)==|\^\^([^\^]*)\^\^/g;
function htmlDecode(str) {
    if (str.length === 0) {
        return "";
    }
    return str.replace(/&(#[0-9]*|amp|lt|gt|nbsp|quot|copy|trade);/g, (_, code)=>{
        switch(code){
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "nbsp":
                return " ";
            case "quot":
                return '"';
            case "copy":
                return "©";
            case "trade":
                return "™";
            default:
                return String.fromCharCode(code.substring(1));
        }
    });
}
const renderer = {
    // Block level renderers.
    code: (code)=>code,
    blockquote: (quote)=>quote,
    html: (html)=>html,
    heading: (text, level, raw)=>text,
    hr: ()=>"",
    list: (body, ordered, start)=>`${ordered ? `${start}. ` : ""}${body}`,
    listitem: (text)=>text,
    checkbox: ()=>"",
    paragraph: (text)=>text,
    table: ()=>"",
    tablerow: ()=>"",
    tablecell: ()=>"",
    // Inline level renderers.
    strong: (text)=>text,
    em: (text)=>text,
    codespan: (code)=>code,
    br: ()=>"",
    del: (text)=>text,
    link: (href, title, text)=>text,
    image: (href, title, text)=>text,
    text: (text)=>text.startsWith("[^") && text.endsWith("]") ? "" : htmlDecode(text)
};
const tokenizer = {
    inlineText (src) {
        if (footnoteRegex.test(src)) {
            const text = src.replace(footnoteRegex, "");
            return {
                type: "text",
                raw: src,
                text
            };
        }
        return false;
    },
    emStrong (src) {
        if (highlightRegex.test(src)) {
            const text = src.replace(highlightRegex, "$1$2");
            return {
                type: "em",
                raw: src,
                text,
                tokens: this.lexer.inlineTokens(text, [])
            };
        }
        return false;
    }
};
marked.use({
    renderer,
    tokenizer
});
const parse = marked.parse;

async function parseContent(content) {
    // Remove properties.
    content = content.replace(/^.+:: .+$/gm, "").trim();
    // Replace block refs with their content.
    let match;
    while((match = /(?:\(\()(?!\()([^\)]+)\)\)/g.exec(content)) != null){
        const start = match.index;
        const end = start + match[0].length;
        const refUUID = match[1];
        try {
            const refBlock = await logseq.Editor.getBlock(refUUID);
            if (refBlock == null) break;
            const refFirstLine = refBlock.content.match(/.*/)[0];
            const refContent = await parseContent(refFirstLine);
            content = `${content.substring(0, start)}${refContent}${content.substring(end)}`;
        } catch (err) {
            break;
        }
    }
    return content.trim();
}
async function persistBlockUUID(block) {
    if (block.properties?.id == null) {
        const content = (await logseq.Editor.getBlock(block.uuid)).content;
        await logseq.Editor.updateBlock(block.uuid, `${content}\nid:: ${block.uuid}`);
    }
}
async function parseOneLineContent(content) {
    // Use only the first line.
    content = content.match(/.*/)[0];
    // Remove macro renderers.
    content = content.replace(/ \{\{renderer (?:\}[^\}]|[^\}])+\}\}/g, "");
    // Handle markdown.
    content = parse(content);
    // Handle LaTex
    content = content.replaceAll(/(\${1,2})([^\$]+)\1/g, (str, _, expr)=>{
        if (parent.window.katex == null) return expr;
        return parent.window.katex.renderToString(expr, {
            throwOnError: false
        });
    });
    // Replace block refs with their content.
    let match;
    while((match = /(?:\(\()(?!\()([^\)]+)\)\)/g.exec(content)) != null){
        const start = match.index;
        const end = start + match[0].length;
        const refUUID = match[1];
        try {
            const refBlock = await logseq.Editor.getBlock(refUUID);
            if (refBlock == null) break;
            const refFirstLine = refBlock.content.match(/.*/)[0];
            const refContent = await parseContent(refFirstLine);
            content = `${content.substring(0, start)}${refContent}${content.substring(end)}`;
        } catch (err) {
            break;
        }
    }
    // Remove page refs
    content = content.replace(/\[\[([^\]]+)\]\]/g, "$1");
    return content.trim();
}
const HISTORY_KEY = "kef-ss-history";
async function readHistory() {
    const graph = (await logseq.App.getCurrentGraph()).name;
    const key = `${HISTORY_KEY}-${graph}`;
    let val;
    try {
        val = JSON.parse(localStorage.getItem(key) ?? localStorage.getItem(`${HISTORY_KEY}-graph`) ?? "[]");
    } catch (err) {
        console.error(err);
    }
    if (val == null || !Array.isArray(val)) return [];
    return val;
}
async function writeHistory(history) {
    const graph = (await logseq.App.getCurrentGraph()).name;
    const key = `${HISTORY_KEY}-${graph}`;
    localStorage.setItem(key, JSON.stringify(history));
}

const UNITS = new Set([
    "y",
    "m",
    "w",
    "d"
]);
const addUnit = {
    y: addYears,
    m: addMonths,
    w: addWeeks,
    d: addDays
};
const startOfUnit = {
    y: (date)=>new Date(date.getFullYear(), 0, 1),
    m: startOfMonth,
    w: startOfWeek,
    d: startOfDay
};
const endOfUnit = {
    y: (date)=>new Date(date.getFullYear(), 11, 31, 23, 59, 59),
    m: endOfMonth,
    w: endOfWeek,
    d: endOfDay
};
let dateFormat;
function setDateOptions(format, weekStartsOn) {
    dateFormat = format;
    setDefaultOptions({
        weekStartsOn
    });
}
function buildQuery(q) {
    if (!q) return [];
    const filterIndex = Math.max(q.lastIndexOf(";"), q.lastIndexOf("；"));
    const filter = filterIndex > -1 ? q.substring(filterIndex + 1).trim() : null;
    const conds = (filterIndex > -1 ? q.substring(0, filterIndex) : q).split(/[,，]/).map((s)=>s.trim());
    if (conds.length === 1 && !"#@>%[》【".includes(conds[0][0])) return [
        conds[0]
    ];
    const lastCond = conds[conds.length - 1];
    const isCompletionRequest = [
        ">",
        "》"
    ].includes(lastCond?.[0]);
    const condStr = isCompletionRequest ? buildCond(lastCond, 0) : conds.map((cond, i)=>buildCond(cond, i)).join("\n").trim();
    if (!condStr) return [];
    const [tagQ, tag] = buildTagQuery(lastCond);
    return [
        `[:find (pull ?b [* {:block/page [:db/id :block/journal-day]}]) :in $ ?includes ?contains ?ge ?le ?gt ?lt :where ${condStr}]`,
        filter,
        tagQ,
        tag,
        isCompletionRequest
    ];
}
function buildCond(cond, i) {
    if (cond.length < 1) return "";
    if (cond.startsWith("#!") || cond.startsWith("#！")) {
        const name = cond.substring(2).toLowerCase();
        return `[?t${i} :block/name "${name}"] (not [?b :block/refs ?t${i}])`;
    } else if (cond.startsWith("#")) {
        if (cond.length < 2) return "";
        if (cond[1] === "#") {
            const name1 = cond.substring(2).toLowerCase();
            return `[?t${i} :block/name "${name1}"] [?b :block/path-refs ?t${i}]`;
        } else if (cond[1] === ">") {
            const name2 = cond.substring(2).toLowerCase();
            return `[?t${i} :block/name "${name2}"] [?bp :block/refs ?t${i}] [?bp :block/uuid ?uuid] (or [?b :block/uuid ?uuid] [?b :block/parent ?bp])`;
        } else {
            const name3 = cond.substring(1).toLowerCase();
            return `[?t${i} :block/name "${name3}"] [?b :block/refs ?t${i}]`;
        }
    } else if (cond.startsWith(">") || cond.startsWith("》")) {
        if (cond.length < 2) return "";
        const name4 = cond.substring(1).toLowerCase();
        return `[?t${i} :block/name "${name4}"] [?b :block/refs ?t${i}]`;
    } else if (cond.startsWith("@!") || cond.startsWith("@！")) {
        if (cond.length < 3) return "";
        const str = cond.substring(2);
        const op = str.match(/:|：/)?.[0];
        switch(op){
            case ":":
            case "：":
                {
                    const [name5, value] = str.split(op).map((s, i)=>i === 0 ? s.trim().toLowerCase() : s.trim());
                    if (!value) break;
                    return `[?b :block/content] (not-join [?b ?includes ?contains] [?b :block/properties ?bp${i}] [(get ?bp${i} :${name5}) ?v${i}] (or-join [?includes ?contains ?v${i}]
          [(?includes ?v${i} "${value}")]
          [(= ?v${i} ${value})]
          [(?contains ?v${i} "${value}")]))`;
                }
        }
        return `[?b :block/content] (not-join [?b] [?b :block/properties ?bp${i}] [(get ?bp${i} :${str})])`;
    } else if (cond.startsWith("@")) {
        if (cond.length < 2) return "";
        const str1 = cond.substring(1);
        const match = str1.match(/:|：|\<=|\>=|\>|\<|=|~|～/);
        const op1 = match?.[0];
        const opIndex = match?.index;
        switch(op1){
            case ":":
            case "：":
                {
                    const [name6, value1] = str1.split(op1).map((s, i)=>i === 0 ? s.trim().toLowerCase() : s.trim());
                    if (!value1) break;
                    return `[?b :block/properties ?bp${i}] [(get ?bp${i} :${name6}) ?v${i}] [?b :block/content] (or-join [?includes ?contains ?v${i}]
          [(?includes ?v${i} "${value1}")]
          [(= ?v${i} ${value1})]
          [(?contains ?v${i} "${value1}")])`;
                }
            case "=":
            case "<":
            case ">":
            case ">=":
            case "<=":
                {
                    const [name7, value2] = str1.split(op1).map((s, i)=>i === 0 ? s.trim().toLowerCase() : s.trim());
                    if (!value2) break;
                    return `[?b :block/properties ?bp${i}] [(get ?bp${i} :${name7}) ?v${i}] (not [?b :block/name]) [(${op1} ?v${i} ${value2})]`;
                }
            case "~":
            case "～":
                {
                    const [name8, dateStr] = [
                        str1.substring(0, opIndex).trim().toLowerCase(),
                        str1.substring(opIndex + 1).trim().toLowerCase()
                    ];
                    if (!dateStr) break;
                    const [start, end] = parseDateRange(dateStr);
                    if (start == null || end == null) break;
                    return `[?b :block/properties ?bp${i}]
          (not [?b :block/name])
          [(get ?bp${i} :${name8}) ?v${i}]
          [(?ge ?v${i} ${start.getTime()})] [(?le ?v${i} ${end.getTime()})]`;
                }
        }
        return `[?b :block/properties ?bp${i}] [(get ?bp${i} :${str1})] [?b :block/content]`;
    } else if (cond.startsWith("[]") || cond.startsWith("【】")) {
        if (cond.length < 3) return "";
        const statuses = toStatus(cond.substring(2).toLowerCase());
        return `[?b :block/marker ?m]${statuses.length > 0 ? ` (or ${statuses.map((status)=>`[(= ?m "${status}")]`).join(" ")})` : ""}`;
    } else if (cond.startsWith("%j ")) {
        const dateStr1 = cond.substring(3).trim().toLowerCase();
        if (!dateStr1) return "";
        const [start1, end1] = parseDateRange(dateStr1).map((date)=>date && format(date, "yyyyMMdd"));
        if (start1 == null || end1 == null) return "";
        return `[?j${i} :block/journal-day ?d${i}]
      [(>= ?d${i} ${start1})]
      [(<= ?d${i} ${end1})]
      (or
        [?b :block/page ?j${i}]
        [?b :block/path-refs ?j${i}])`;
    } else {
        // Defaults to text search.
        return `(or-join [?b ?c] [?b :block/content ?c] (and [?b :block/page ?p] [?p :block/original-name ?c])) [(?includes ?c "${cond}")]`;
    }
}
function includesValue(prop, val) {
    if (prop.toLowerCase == null) return false;
    return logseq.settings?.enablePinyin ?? false ? J(prop.toLowerCase(), val.toString().toLowerCase(), {
        continuous: true
    }) != null : prop.toLowerCase().includes(val.toLowerCase());
}
function containsValue(prop, val) {
    if (!Array.isArray(prop)) return false;
    const lowerVal = val.toLowerCase();
    return prop.some((v)=>logseq.settings?.enablePinyin ?? false ? J(v.toLowerCase(), lowerVal, {
            continuous: true
        }) != null : v.toLowerCase().includes(lowerVal));
}
function ge(dateSet, val) {
    const date = convertToDate(dateSet)?.getTime();
    if (date == null) return false;
    return date >= val;
}
function le(dateSet, val) {
    const date = convertToDate(dateSet)?.getTime();
    if (date == null) return false;
    return date <= val;
}
function gt(dateSet, val) {
    const date = convertToDate(dateSet)?.getTime();
    if (date == null) return false;
    return date > val;
}
function lt(dateSet, val) {
    const date = convertToDate(dateSet)?.getTime();
    if (date == null) return false;
    return date < val;
}
function convertToDate(dateSet) {
    try {
        const dateStr = dateSet[0];
        const date = parse$1(dateStr, dateFormat, new Date());
        return date;
    } catch (err) {
        return null;
    }
}
function filterMatch(filter, content) {
    if (!filter) return true;
    if (!content) return false;
    for(let i = 0, j = 0; i < content.length && j < filter.length; i++){
        const t = filter[j].toLowerCase();
        const c = content[i].toLowerCase();
        if (c !== t) continue;
        j++;
        if (j >= filter.length) return true;
    }
    return false;
}
async function postProcessResult(result, filter, needBreadcrumb = false, query, isFullTextSearch = false, limit = 100) {
    const pageResult = query?.startsWith("#") && !/,，/.test(query) ? (await top.logseq.api.datascript_query(`[:find (pull ?b [*]) :where [?b :block/name "${query.substring(1).toLowerCase()}"]]`)).flat().map((page)=>({
            ...page,
            content: page["original-name"],
            "pre-block?": true,
            page: {
                id: page.id
            }
        })) : [];
    // Limit to the first n results.
    const blocks = pageResult.concat(filter ? result.filter(({ content , name  })=>filterMatch(filter, content ?? name)) : result).slice(0, limit);
    if (query) {
        const keywords = isFullTextSearch ? query.split(/ +/) : query.split(/[,，]/).map((s)=>s.trim()).filter((s)=>!"#@>%[》【".includes(s[0]));
        if (keywords.length > 0) {
            for (const block of blocks){
                block.highlightContent = highlightKeywords(keywords, block.content);
            }
        }
    }
    if (needBreadcrumb) {
        for (const block1 of blocks){
            await setBlockBreadcrumb(block1);
        }
    }
    return blocks;
}
async function setBlockBreadcrumb(block) {
    // No breadcrumb for pages.
    if (block["pre-block?"]) return;
    const path = [];
    let tempBlock = block;
    while(tempBlock.parent != null){
        tempBlock = tempBlock.page.id === tempBlock.parent.id ? await logseq.Editor.getPage(tempBlock.parent.id) : await logseq.Editor.getBlock(tempBlock.parent.id);
        path.unshift({
            label: tempBlock.originalName ? tempBlock.originalName : await parseOneLineContent(tempBlock.content),
            name: tempBlock.name,
            uuid: tempBlock.uuid
        });
    }
    block.breadcrumb = path;
}
function toStatus(s) {
    const ret = new Set();
    for (const c of s){
        switch(c){
            case "n":
                ret.add("NOW");
                break;
            case "l":
                ret.add("LATER");
                break;
            case "t":
                ret.add("TODO");
                break;
            case "i":
                ret.add("DOING");
                break;
            case "d":
                ret.add("DONE");
                break;
            case "w":
                ret.add("WAITING");
                break;
            case "c":
                ret.add("CANCELED");
                break;
        }
    }
    return Array.from(ret);
}
function buildTagQuery(cond) {
    if (!cond || ![
        "#",
        ">",
        "》"
    ].includes(cond[0])) return [];
    const namePart = cond.replace(/^(#(>|#|!|！)?)|\>|》/, "").toLowerCase();
    if (!namePart) return [];
    return [
        `[:find (pull ?b [:block/name :block/uuid]) :in $ ?includes :where [?b :block/name ?name] [(?includes ?name "${namePart}")]]`,
        namePart
    ];
}
function parseDateRange(rangeStr) {
    const range = rangeStr.split(/~|～/).map((part)=>{
        part = part.trim();
        if (part.length === 8 && /[0-9]/.test(part[7])) {
            try {
                const date = parse$1(part, "yyyyMMdd", new Date());
                return [
                    date,
                    date
                ];
            } catch (err) {
                return null;
            }
        } else {
            const quantity = +part.substring(0, part.length - 1);
            const unit = part[part.length - 1];
            if (isNaN(quantity) || !UNITS.has(unit)) return null;
            const anchor = addUnit[unit](new Date(), quantity);
            const start = startOfUnit[unit](anchor);
            const end = endOfUnit[unit](anchor);
            return [
                start,
                end
            ];
        }
    }).filter((part)=>part != null).flat();
    if (range.length < 2) return [];
    return [
        range[0],
        range[range.length - 1]
    ];
}
async function fullTextSearch(q) {
    const res = await logseq.App.search(q);
    const pages = res.pages.map((name)=>({
            "pre-block?": true,
            name,
            content: name
        }));
    const blocks = (await Promise.all(res.blocks.map(async (info)=>{
        const block = await logseq.Editor.getBlock(info["block/uuid"]);
        if (block["preBlock?"]) {
            const page = await logseq.Editor.getPage(block.page.id);
            if (pages.find(({ name  })=>name === page.originalName)) {
                block._remove = true;
            } else {
                block["pre-block?"] = true;
            }
        }
        return block;
    }))).filter((block)=>!block._remove);
    return [
        ...pages,
        ...blocks
    ];
}
function highlightKeywords(keywords, text) {
    const loweredText = text.toLowerCase();
    keywords = keywords.map((keyword)=>[
            loweredText.indexOf(keyword.toLowerCase()),
            keyword
        ]).sort(([a], [b])=>a - b);
    const segments = [];
    let lastIndex = 0;
    for (const [keywordIndex, keyword] of keywords){
        segments.push(text.substring(lastIndex, keywordIndex));
        lastIndex = keywordIndex + keyword.length;
        segments.push(`<span class="kef-ss-keyword-highlight">${text.substring(keywordIndex, lastIndex)}</span>`);
    }
    segments.push(text.substring(lastIndex));
    return segments.join("");
}

function Breadcrumb({ segments  }) {
    return /*#__PURE__*/ o$2("span", {
        class: "kef-ss-b-segs",
        children: segments.map(({ label , name , uuid  }, i)=>/*#__PURE__*/ o$2(p$2, {
                children: [
                    /*#__PURE__*/ o$2("span", {
                        className: "kef-ss-b-label",
                        dangerouslySetInnerHTML: {
                            __html: label
                        }
                    }, uuid),
                    i + 1 < segments.length && /*#__PURE__*/ o$2("span", {
                        class: "kef-ss-b-spacer mx-2 opacity-50",
                        children: "➤"
                    })
                ]
            }))
    });
}

const BLUR_WAIT = 200;
const HISTORY_LEN = 30;
const KEY_NAV_MODE = 0;
const MOUSE_NAV_MODE = 1;
const events = new EventEmitter();
var SmartSearchInput = N$1(function SmartSearchInput({ onClose , root  }, ref) {
    const input = _$1();
    const ul = _$1();
    const [list, setList] = p$1([]);
    const [tagList, setTagList] = p$1([]);
    const [chosen, setChosen] = p$1(0);
    const [navMode, setNavMode] = p$1(KEY_NAV_MODE);
    const [isCompletionRequest, setIsCompletionRequest] = p$1(false);
    const [historyList, setHistoryList] = p$1([]);
    const [showProgress, setShowProgress] = p$1(false);
    const closeCalled = _$1(false);
    const lastQ = _$1();
    const lastResult = _$1([]);
    const lastTagResult = _$1([]);
    const isMac = F$2(()=>parent.document.documentElement.classList.contains("is-mac"), []);
    const isGlobal = root.classList.contains("kef-ss-global");
    const handleQuery = T$2(debounce((e)=>performQuery(e.target.value), 400), []);
    A$2(ref, ()=>({
            fill (prefilled) {
                input.current.value = prefilled;
                performQuery(prefilled);
            }
        }));
    async function performQuery(query) {
        const [q, filter, tagQ, tag, isCompletionRequest] = buildQuery(query);
        // console.log(q, tagQ, tag, isCompletionRequest)
        if (!q) {
            resetState();
            return;
        }
        if (q === lastQ.current) {
            if (lastResult.current.length > 0) {
                setList(await postProcessResult(lastResult.current, filter, true, query));
            }
            if (lastTagResult.current.length > 0) {
                setTagList(await postProcessResult(lastTagResult.current, filter));
            }
            setChosen(0);
            return;
        }
        lastQ.current = q;
        setShowProgress(true);
        // HACK: wait till progress is shown.
        setTimeout(async ()=>{
            try {
                const isFullTextSearch = !q.startsWith("[:find ");
                const result = isFullTextSearch ? await fullTextSearch(q) : (await logseq.DB.datascriptQuery(q, includesValue, containsValue, ge, le, gt, lt)).flat().filter((b)=>b["pre-block?"] || b.content).sort((a, b)=>(b.page["journal-day"] ?? 0) - (a.page["journal-day"] ?? 0));
                lastResult.current = result;
                // console.log("query result:", result)
                if (!tagQ) {
                    setTagList([]);
                } else if (result.length === 0) {
                    findTag(tagQ, tag);
                }
                for (const block of result){
                    if (block["pre-block?"]) {
                        // Full text search page is already processed.
                        if (!block.name) {
                            const page = await logseq.Editor.getPage(block.page.id);
                            block.content = page.originalName;
                        }
                    } else if (block.content) {
                        block.content = await parseContent(block.content);
                    } else {
                        block.content = block["original-name"];
                    }
                }
                setList(await postProcessResult(isCompletionRequest ? result.filter((block)=>block["pre-block?"]) : result, filter, !isCompletionRequest, query, isFullTextSearch));
                setChosen(0);
                setIsCompletionRequest(isCompletionRequest);
            } catch (err) {
                console.error(err, q);
            } finally{
                setShowProgress(false);
            }
        }, 24);
    }
    async function onKeyDown(e) {
        switch(e.key){
            case "Escape":
                {
                    if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                        e.stopPropagation();
                        e.preventDefault();
                        outputAndClose(undefined, true);
                    }
                    break;
                }
            case "Enter":
                {
                    if (e.isComposing) return;
                    if (isCompletionRequest && list.length > 0) {
                        if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            completeTag(list[chosen].content, isCompletionRequest);
                        } else if (e.shiftKey && !e.altKey && !e.metaKey && !e.ctrlKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            await gotoBlock(list[chosen]);
                            outputAndClose();
                        } else if (e.shiftKey && e.altKey && !e.metaKey && !e.ctrlKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            await gotoBlock(list[chosen], true);
                            outputAndClose();
                        }
                    } else if (list.length > 0) {
                        if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (!isGlobal) {
                                outputRef(list[chosen]);
                            } else {
                                await gotoBlock(list[chosen]);
                                outputAndClose();
                            }
                        } else if (e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (isGlobal) return;
                            outputContent(list[chosen]);
                        } else if (e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (!isGlobal) {
                                await gotoBlock(list[chosen]);
                                outputAndClose();
                            } else {
                                await gotoBlock(list[chosen], true);
                                outputAndClose();
                            }
                        } else if (e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            await gotoBlock(list[chosen], true);
                            outputAndClose();
                        } else if (isMac ? e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey : e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (isGlobal) return;
                            outputEmbed(list[chosen]);
                        } else if (isMac ? e.metaKey && !e.ctrlKey && e.shiftKey && !e.altKey : e.ctrlKey && !e.metaKey && e.shiftKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            if (isGlobal) return;
                            outputEmbedChildren(list[chosen]);
                        }
                    } else if (tagList.length > 0) {
                        if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            completeTag(tagList[chosen].name);
                        } else if (e.shiftKey && !e.altKey && !e.metaKey && !e.ctrlKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            await gotoBlock(tagList[chosen]);
                            outputAndClose();
                        } else if (e.shiftKey && e.altKey && !e.metaKey && !e.ctrlKey) {
                            e.stopPropagation();
                            e.preventDefault();
                            await gotoBlock(tagList[chosen], true);
                            outputAndClose();
                        }
                    } else if (input.current == null || input.current.value.length === 0) {
                        setInputQuery(e, historyList[chosen]);
                    }
                    break;
                }
            case "Tab":
                {
                    e.stopPropagation();
                    e.preventDefault();
                    if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) break;
                    if (isCompletionRequest && list.length > 0) {
                        completeTag(list[chosen].content, isCompletionRequest);
                    } else if (list.length > 0 && list[chosen]["pre-block?"]) {
                        completePage(list[chosen].content);
                    } else if (tagList.length > 0) {
                        completeTag(tagList[chosen].name);
                    } else if (input.current == null || input.current.value.length === 0) {
                        setInputQuery(e, historyList[chosen]);
                    }
                    break;
                }
            case "ArrowDown":
                {
                    e.stopPropagation();
                    e.preventDefault();
                    const len = list.length || tagList.length || historyList.length;
                    if (len > 0) {
                        setChosen((n)=>n + 1 < len ? n + 1 : 0);
                        setNavMode(KEY_NAV_MODE);
                    }
                    break;
                }
            case "ArrowUp":
                {
                    e.stopPropagation();
                    e.preventDefault();
                    const len1 = list.length || tagList.length || historyList.length;
                    if (len1 > 0) {
                        setChosen((n)=>n - 1 >= 0 ? n - 1 : len1 - 1);
                        setNavMode(KEY_NAV_MODE);
                    }
                    break;
                }
            default:
                // HACK: do not propagate select all.
                if (!e.ctrlKey && !e.metaKey && !e.altKey || (e.metaKey || e.ctrlKey) && e.code === "KeyA" || (e.metaKey || e.ctrlKey) && e.code === "KeyZ" || (e.metaKey || e.ctrlKey) && e.shiftKey && e.code === "KeyZ" || e.ctrlKey && e.code === "KeyY") {
                    e.stopPropagation();
                }
                break;
        }
    }
    async function chooseOutput(e, block) {
        e.stopPropagation();
        e.preventDefault();
        if (!e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (!isGlobal) {
                outputRef(block);
            } else {
                await gotoBlock(block);
                outputAndClose();
            }
        } else if (e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
            if (isGlobal) return;
            outputContent(block);
        } else if (e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
            if (!isGlobal) {
                await gotoBlock(block);
                outputAndClose();
            } else {
                await gotoBlock(block, true);
                outputAndClose();
            }
        } else if (e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey) {
            await gotoBlock(block, true);
            outputAndClose();
        } else if (isMac ? e.metaKey && !e.shiftKey && !e.ctrlKey && !e.altKey : e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
            if (isGlobal) return;
            outputEmbed(block);
        } else if (isMac ? e.metaKey && !e.ctrlKey && e.shiftKey && !e.altKey : e.ctrlKey && !e.metaKey && e.shiftKey && !e.altKey) {
            if (isGlobal) return;
            outputEmbedChildren(block);
        }
    }
    async function chooseForTag(e, tag, isCompletionRequest) {
        e.stopPropagation();
        e.preventDefault();
        if (e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
            await gotoBlock(tag);
            outputAndClose();
        } else if (e.shiftKey && e.altKey && !e.ctrlKey && !e.metaKey) {
            await gotoBlock(tag, true);
            outputAndClose();
        } else {
            completeTag(tag.name ?? tag.content, isCompletionRequest, true);
        }
    }
    function outputRef(block) {
        if (block["pre-block?"]) {
            outputAndClose(`[[${block.content}]]`);
        } else {
            persistBlockUUID(block);
            outputAndClose(`((${block.uuid}))`);
        }
    }
    function outputEmbed(block) {
        if (block["pre-block?"]) {
            outputAndClose(`{{embed [[${block.content}]]}}`);
        } else {
            persistBlockUUID(block);
            outputAndClose(`{{embed ((${block.uuid}))}}`);
        }
    }
    function outputEmbedChildren(block) {
        if (block["pre-block?"]) {
            outputAndClose(`[[.embed-children]]{{embed [[${block.content}]]}}`);
        } else {
            persistBlockUUID(block);
            outputAndClose(`[[.embed-children]]{{embed ((${block.uuid}))}}`);
        }
    }
    function outputContent(block) {
        outputAndClose(block.content);
    }
    function outputAndClose(output, noHistory = false) {
        if (closeCalled.current) return;
        closeCalled.current = true;
        onClose(output);
        resetState();
        if (input.current?.value && !noHistory) {
            let history;
            const index = historyList.findIndex((v)=>v === input.current.value);
            if (index > -1) {
                history = [
                    input.current.value,
                    ...historyList.slice(0, index),
                    ...historyList.slice(index + 1)
                ];
            } else if (historyList.length < HISTORY_LEN) {
                history = [
                    input.current.value,
                    ...historyList
                ];
            } else {
                history = [
                    input.current.value,
                    ...historyList.slice(0, historyList.length - 1)
                ];
            }
            writeHistory(history);
            setHistoryList(history);
            events.emit("history.change", {
                fromId: root
            });
        }
    }
    async function gotoBlock(block, inSidebar = false) {
        if (block["pre-block?"]) {
            if (inSidebar) {
                const page = await logseq.Editor.getPage(block.name ?? block.page.id);
                logseq.Editor.openInRightSidebar(page.uuid);
            } else {
                logseq.Editor.scrollToBlockInPage(block.content);
            }
        } else {
            if (inSidebar) {
                logseq.Editor.openInRightSidebar(block.uuid);
            } else {
                logseq.Editor.scrollToBlockInPage(block.name ?? block.uuid);
            }
        }
    }
    function onFocus(e) {
        closeCalled.current = false;
        ul.current.querySelector(".kef-ss-chosen")?.scrollIntoView({
            block: "nearest"
        });
    }
    function onBlur(e) {
        // HACK: let possible click run first.
        setTimeout(()=>outputAndClose(undefined, true), BLUR_WAIT);
    }
    async function findTag(tagQ, tag) {
        try {
            const result = (await top.logseq.api.datascript_query(tagQ, includesValue)).flat();
            // console.log("tag result", result, tag)
            if (result.some((t)=>t.name === tag)) {
                const empty = [];
                setTagList(empty);
                lastTagResult.current = empty;
            } else {
                setTagList(await postProcessResult(result));
                lastTagResult.current = result;
            }
            setChosen(0);
        } catch (err) {
        // console.error(err, tagQ)
        }
    }
    function completeTag(tagName, isCompletionRequest, viaClick = false) {
        if (viaClick) {
            // Prevent input from closing due to onblur.
            closeCalled.current = true;
            // Reset and give focus back after onblur runs.
            setTimeout(()=>{
                input.current.focus();
            }, BLUR_WAIT + 1);
        }
        const value = input.current.value;
        const index = Math.max(value.lastIndexOf("#"), value.lastIndexOf(">"), value.lastIndexOf("》"));
        if (index < 0) return;
        // Handle >, 》, #, ##, #> cases.
        const query = isCompletionRequest ? `${value.substring(0, index)}#${tagName}` : `${value.substring(0, index + (value[index + 1] === ">" ? 2 : 1))}${tagName}`;
        input.current.value = query;
        performQuery(query);
    }
    function completePage(name) {
        const value = input.current.value;
        const query = `#${value.startsWith("##") ? "#" : ""}${name}`;
        input.current.value = query;
        performQuery(query);
    }
    function resetState() {
        if (input.current.value.length === 0) {
            setList([]);
            setTagList([]);
            setChosen(0);
            lastQ.current = null;
            lastResult.current = [];
            lastTagResult.current = [];
        }
        setNavMode(KEY_NAV_MODE);
    }
    function setInputQuery(e, q, viaClick = false) {
        e.stopPropagation();
        e.preventDefault();
        if (viaClick) {
            // Prevent input from closing due to onblur.
            closeCalled.current = true;
            // Reset and give focus back after onblur runs.
            setTimeout(()=>{
                input.current.focus();
            }, BLUR_WAIT + 1);
        }
        input.current.value = q;
        // HACK: let input be shown first for better UX.
        setTimeout(()=>performQuery(q), 16);
    }
    const changeNavMode = T$2(throttle((e)=>{
        if (navMode === KEY_NAV_MODE) {
            setNavMode(MOUSE_NAV_MODE);
        }
    }, 100), [
        navMode
    ]);
    h$1(()=>{
        ul.current.querySelector(".kef-ss-chosen")?.scrollIntoView({
            block: "nearest"
        });
    }, [
        chosen
    ]);
    h$1(()=>{
        const offHook = logseq.App.onCurrentGraphChanged(async ()=>{
            const history = await readHistory();
            setHistoryList(history);
        });
        async function refreshHistory(data) {
            if (data?.fromId === root) return;
            const history = await readHistory();
            setHistoryList(history);
        }
        events.on("history.change", refreshHistory);
        refreshHistory();
        return ()=>{
            events.off("history.change", refreshHistory);
            offHook();
        };
    }, []);
    const inputProps = useCompositionChange(handleQuery);
    const stopPropagation = T$2((e)=>e.stopPropagation(), []);
    return /*#__PURE__*/ o$2("div", {
        class: "kef-ss-container",
        children: [
            /*#__PURE__*/ o$2("div", {
                children: [
                    /*#__PURE__*/ o$2("input", {
                        ref: input,
                        class: "kef-ss-input",
                        type: "text",
                        placeholder: t$2("e.g.: #book, @published: 2000; holmes"),
                        ...inputProps,
                        onKeyDown: onKeyDown,
                        onMouseDown: stopPropagation,
                        onFocus: onFocus,
                        onBlur: onBlur
                    }),
                    /*#__PURE__*/ o$2("div", {
                        class: cls("kef-ss-progress", showProgress && "kef-ss-show"),
                        children: ""
                    })
                ]
            }),
            /*#__PURE__*/ o$2("ul", {
                ref: ul,
                class: cls("kef-ss-list", navMode === KEY_NAV_MODE && "kef-ss-keynav"),
                onMouseMove: changeNavMode,
                children: [
                    list.map((block, i)=>/*#__PURE__*/ o$2("li", {
                            class: cls("kef-ss-listitem", i === chosen && "kef-ss-chosen"),
                            onMouseDown: stopPropagation,
                            onClick: (e)=>isCompletionRequest ? chooseForTag(e, block, isCompletionRequest) : chooseOutput(e, block),
                            children: [
                                /*#__PURE__*/ o$2("div", {
                                    class: "kef-ss-tagicon",
                                    children: isCompletionRequest ? "T" : block["pre-block?"] ? "P" : "B"
                                }),
                                /*#__PURE__*/ o$2("div", {
                                    class: "kef-ss-listitem-text",
                                    children: [
                                        block.breadcrumb && /*#__PURE__*/ o$2(Breadcrumb, {
                                            segments: block.breadcrumb
                                        }),
                                        (block.highlightContent ?? block.content).split("\n").map((line)=>/*#__PURE__*/ o$2("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: line
                                                }
                                            }, line))
                                    ]
                                })
                            ]
                        }, block.uuid)),
                    list.length === 0 && tagList.map((tag, i)=>/*#__PURE__*/ o$2("li", {
                            class: cls("kef-ss-listitem", i === chosen && "kef-ss-chosen"),
                            onClick: (e)=>chooseForTag(e, tag),
                            children: [
                                /*#__PURE__*/ o$2("div", {
                                    class: "kef-ss-tagicon",
                                    children: "T"
                                }),
                                /*#__PURE__*/ o$2("div", {
                                    class: "kef-ss-listitem-text",
                                    children: tag.name
                                })
                            ]
                        }, tag.name)),
                    list.length === 0 && tagList.length === 0 && (input.current == null || input.current.value.length === 0) && historyList.map((query, i)=>/*#__PURE__*/ o$2("li", {
                            class: cls("kef-ss-listitem", i === chosen && "kef-ss-chosen"),
                            onClick: (e)=>setInputQuery(e, query, true),
                            children: /*#__PURE__*/ o$2("div", {
                                class: "kef-ss-listitem-text",
                                children: query
                            })
                        }, i))
                ]
            }),
            /*#__PURE__*/ o$2("div", {
                class: "kef-ss-inputhint",
                children: list.length > 0 && !isCompletionRequest ? isMac ? isGlobal ? t$2("select=goto; ⇧=sidebar") : t$2("select=ref; ⌘=embed; ⌘+⇧=embed children; ⌥=content; ⇧=goto; ⇧+⌥=sidebar; ⇥=complete") : isGlobal ? t$2("select=goto; shift=sidebar") : t$2("select=ref; ctrl=embed; ctrl+shift=embed children; alt=content; shift=goto; shift+alt=sidebar; tab=complete") : tagList.length > 0 || isCompletionRequest && list.length > 0 ? isMac ? t$2("select=complete; ⇥=complete; ⇧=goto; ⇧+⌥=sidebar") : t$2("select=complete; tab=complete; shift=goto; shift+alt=sidebar") : /*#__PURE__*/ o$2(p$2, {
                    children: /*#__PURE__*/ o$2("div", {
                        children: [
                            t$2("#[!]tag, ##tag, #>tag, >tag, @[!]prop: value, @prop [=<>]1, @prop~ -1w~d, []nltidwc, %j -1w~d, full text ;filter"),
                            /*#__PURE__*/ o$2("a", {
                                class: "kef-ss-doc-link",
                                href: t$2("https://github.com/sethyuan/logseq-plugin-smartsearch/blob/master/README.en.md"),
                                children: t$2("→ doc")
                            })
                        ]
                    })
                })
            })
        ]
    });
});

const INPUT_ID = "kef-ss-input";

var zhCN = {
	"Shortcut key to trigger the smartsearch input.": "触发智能搜索输入框的快捷键。",
	"(Chinese only) Whether to enable matching with pinyin.": "是否开启拼音匹配。",
	"Trigger smartsearch input": "触发智能搜索的输入框",
	"e.g.: #book, @published: 2000; holmes": "示例：#书，@出版于：2000；福尔摩斯",
	"#[!]tag, ##tag, #>tag, >tag, @[!]prop: value, @prop [=<>]1, @prop~ -1w~d, []nltidwc, %j -1w~d, full text ;filter": "#[!]标签, ##标签, #>标签, >标签, @[!]属性: 值, @属性 [=<>]1, @属性~ -1w~d, []nltidwc, %j -1w~d, 全文检索 ;文字过滤",
	"select=ref; ⌘=embed; ⌘+⇧=embed children; ⌥=content; ⇧=goto; ⇧+⌥=sidebar; ⇥=complete": "选择=引用；⌘=嵌入；⌘+⇧=嵌入子级; ⌥=内容；⇧=跳转；⇧+⌥=侧边栏；⇥=上屏",
	"select=ref; ctrl=embed; ctrl+shift=embed children; alt=content; shift=goto; shift+alt=sidebar; tab=complete": "选择=引用；ctrl=嵌入；ctrl+shift=嵌入子级；alt=内容；shift=跳转；shift+alt=侧边栏；tab=上屏",
	"select=complete; ⇥=complete; ⇧=goto; ⇧+⌥=sidebar": "选择=上屏；⇥=上屏；⇧=跳转；⇧+⌥=侧边栏",
	"select=complete; tab=complete; shift=goto; shift+alt=sidebar": "选择=上屏；tab=上屏；shift=跳转；shift+alt=侧边栏",
	"https://github.com/sethyuan/logseq-plugin-smartsearch/blob/master/README.en.md": "https://github.com/sethyuan/logseq-plugin-smartsearch/blob/master/README.md"
};

let inputContainer;
let inputContainerParent;
let textarea;
let lastBlock;
const inputRef = y$2();
async function main() {
    await setup({
        builtinTranslations: {
            "zh-CN": zhCN
        }
    });
    const { preferredDateFormat , preferredStartOfWeek  } = await logseq.App.getUserConfigs();
    const weekStart = (+(preferredStartOfWeek ?? 6) + 1) % 7;
    setDateOptions(preferredDateFormat, weekStart);
    provideStyles();
    logseq.useSettingsSchema([
        {
            key: "shortcut",
            type: "string",
            default: "ctrl+space",
            description: t$2("Shortcut key to trigger the smartsearch input.")
        },
        {
            key: "enablePinyin",
            type: "boolean",
            default: false,
            description: t$2("(Chinese only) Whether to enable matching with pinyin.")
        }
    ]);
    logseq.provideUI({
        key: INPUT_ID,
        path: "#app-container",
        template: `<div id="${INPUT_ID}"></div>`
    });
    if (logseq.settings?.shortcut) {
        logseq.App.registerCommandPalette({
            key: "trigger-input",
            label: t$2("Trigger smartsearch input"),
            keybinding: {
                binding: logseq.settings.shortcut
            }
        }, triggerInput);
    } else {
        logseq.App.registerCommandPalette({
            key: "trigger-input",
            label: t$2("Trigger smartsearch input")
        }, triggerInput);
    }
    // Let div root element get generated first.
    setTimeout(async ()=>{
        inputContainer = parent.document.getElementById(INPUT_ID);
        inputContainerParent = inputContainer.parentNode;
        P$2(/*#__PURE__*/ o$2(SmartSearchInput, {
            ref: inputRef,
            onClose: closeInput,
            root: inputContainer
        }), inputContainer);
    }, 0);
    logseq.App.onMacroRendererSlotted(macroRenderer);
    // logseq.beforeunload(() => {})
    console.log("#smartsearch loaded");
}
function provideStyles() {
    logseq.provideStyle(`
    #${INPUT_ID} {
      position: absolute;
      top: 195%;
      left: 0;
      z-index: var(--ls-z-index-level-2);
      display: none;
    }
    #${INPUT_ID}.kef-ss-global {
      top: 150px;
      left: 50%;
      transform: translateX(-50%);
    }
    .kef-ss-container {
      background: var(--ls-primary-background-color);
      min-width: 370px;
      width: 100%;
      max-width: var(--ls-main-content-max-width);
      position: relative;
      box-shadow: 0 0 16px 2px var(--ls-border-color);
    }
    .ls-wide-mode .kef-ss-container {
      max-width: var(--ls-main-content-max-width-wide);
    }
    .kef-ss-global .kef-ss-container {
      width: 80vw;
    }
    .kef-ss-input {
      position: relative;
      width: 100%;
      line-height: 1.2rem;
      border: none;
      border-bottom: 1px solid var(--ls-block-bullet-color);
      margin-bottom: 5px;
      background: var(--ls-tertiary-background-color) !important;
      box-shadow: 0 0 4px 0 var(--ls-border-color) !important;
    }
    @keyframes spin {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .kef-ss-progress {
      display: none;
      position: absolute;
      top: 8px;
      right: 8px;
      font-family: 'tabler-icons';
      font-size: 0.8em;
      margin-left: 6px;
      color: var(--ls-icon-color);
      will-change: transform;
      animation: 1s linear infinite spin;
    }
    .kef-ss-show {
      display: block;
    }
    .kef-ss-input:focus {
      box-shadow: none;
      border-color: inherit;
      border-bottom: 1px solid var(--ls-block-bullet-color);
    }
    .kef-ss-input::placeholder {
      font-size: 0.8em;
      color: var(--ls-secondary-text-color);
    }
    .kef-ss-inputhint {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-110%);
      padding: 0 0.5em;
      font-size: 0.8em;
      line-height: 2;
      color: var(--ls-primary-background-color);
      background: var(--ls-primary-text-color);
      opacity: 0.8;
      border-radius: 2px;
    }
    .kef-ss-list {
      list-style-type: none;
      margin-left: 0;
      font-size: 0.875rem;
      border: 1px solid var(--ls-border-color);
      max-height: 400px;
      overflow-y: auto;
    }
    .kef-ss-list:empty {
      display: none;
    }
    .kef-ss-listitem {
      padding: 10px 12px;
      margin: 0;
      cursor: pointer;
      display: flex;
      align-items: baseline;
      user-select: none;
    }
    .kef-ss-list:not(.kef-ss-keynav) .kef-ss-listitem:hover {
      background: var(--ls-quaternary-background-color);
    }
    .kef-ss-chosen {
      background: var(--ls-selection-background-color);
    }
    .kef-ss-tagicon {
      flex: 0 0 auto;
      margin-right: 1em;
      font-weight: bold;
      font-size: 0.75em;
      background-color: var(--ls-tertiary-background-color);
      padding: 1px 5px;
      border-radius: 4px;
    }
    .kef-ss-listitem-text {
      flex: 1 1 auto;
    }
    .kef-ss-b-segs {
      font-size: 0.9em;
      opacity: 0.8;
    }
    .kef-ss-b-spacer.mx-2 {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
    .kef-ss-doc-link {
      float: right;
      display: inline-block;
      word-break: keep-all;
      color: var(--ls-block-highlight-color);
    }

    .kef-ss-inline .kef-ss-container {
      width: calc(100% + 40px);
      margin-left: -28px;
      margin-top: 20px;
      box-shadow: none;
    }
    .kef-ss-inline .kef-ss-list {
      height: calc(100vh - 230px);
      max-height: initial;
    }
    .kef-ss-keyword-highlight {
      color: var(--ls-page-mark-color);
      background-color: var(--ls-page-mark-bg-color);
    }
  `);
}
function triggerInput() {
    if (inputContainer.style.display === "block") {
        closeInput();
    } else {
        openInput();
    }
}
async function openInput(prefilled) {
    textarea = parent.document.activeElement;
    const editor = textarea.closest(".block-editor");
    if (editor) {
        lastBlock = await logseq.Editor.getCurrentBlock();
        editor.appendChild(inputContainer);
        inputContainer.style.display = "block";
        inputContainer.querySelector("input").select();
        if (prefilled) {
            inputRef.current?.fill(prefilled);
        }
    } else {
        inputContainer.classList.add("kef-ss-global");
        inputContainer.style.display = "block";
        inputContainer.querySelector("input").select();
        if (prefilled) {
            inputRef.current?.fill(prefilled);
        }
        P$2(/*#__PURE__*/ o$2(SmartSearchInput, {
            ref: inputRef,
            onClose: closeInput,
            root: inputContainer
        }), inputContainer);
    }
}
async function closeInput(text = "") {
    if (inputContainer.offsetParent == null) return;
    const centered = inputContainer.classList.contains("kef-ss-global");
    inputContainer.style.display = "none";
    inputContainer.classList.remove("kef-ss-global");
    inputContainerParent.appendChild(inputContainer);
    if (!centered) {
        const pos = textarea.selectionStart;
        const newPos = pos + text.length;
        if (text) {
            const content = textarea.value;
            await logseq.Editor.updateBlock(lastBlock.uuid, pos < content.length ? `${content.substring(0, pos)}${text}${content.substring(pos)}` : pos === content.length ? `${content}${text}` : `${content} ${text}`);
        }
        textarea.focus();
        textarea.setSelectionRange(newPos, newPos);
    }
}
async function macroRenderer({ slot , payload: { arguments: args , uuid  }  }) {
    const type = args[0]?.trim();
    if (type !== ":smartsearch") return;
    const slotEl = parent.document.getElementById(slot);
    if (!slotEl) return;
    const renderered = slotEl.childElementCount > 0;
    if (renderered) return;
    const id = `kef-ss-${slot}`;
    slotEl.style.width = "100%";
    logseq.provideUI({
        key: `ss-${slot}`,
        slot,
        template: `<div id="${id}" class="kef-ss-global kef-ss-inline" style="width: 100%"></div>`,
        reset: true,
        style: {
            cursor: "default",
            flex: "1"
        }
    });
    // Let div root element get generated first.
    setTimeout(async ()=>{
        const el = parent.document.getElementById(id);
        if (el == null) return;
        P$2(/*#__PURE__*/ o$2(SmartSearchInput, {
            onClose: ()=>{},
            root: el
        }), el);
    }, 0);
}
const model = {
    openInput
};
logseq.ready(model, main).catch(console.error);
