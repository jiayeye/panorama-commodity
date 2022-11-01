(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ic(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=ic(lm);function Nh(i){return!!i||i===""}function rc(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Tt(n)?hm(n):rc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Tt(i))return i;if(ct(i))return i}}const um=/;(?![^(]*\))/g,fm=/:(.+)/;function hm(i){const e={};return i.split(um).forEach(t=>{if(t){const n=t.split(fm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function sc(i){let e="";if(Tt(i))e=i;else if(Oe(i))for(let t=0;t<i.length;t++){const n=sc(i[t]);n&&(e+=n+" ")}else if(ct(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const tt={},Cr=[],gn=()=>{},dm=()=>!1,pm=/^on[^a-z]/,aa=i=>pm.test(i),oc=i=>i.startsWith("onUpdate:"),St=Object.assign,ac=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},mm=Object.prototype.hasOwnProperty,He=(i,e)=>mm.call(i,e),Oe=Array.isArray,ys=i=>la(i)==="[object Map]",gm=i=>la(i)==="[object Set]",Be=i=>typeof i=="function",Tt=i=>typeof i=="string",lc=i=>typeof i=="symbol",ct=i=>i!==null&&typeof i=="object",Uh=i=>ct(i)&&Be(i.then)&&Be(i.catch),_m=Object.prototype.toString,la=i=>_m.call(i),vm=i=>la(i).slice(8,-1),xm=i=>la(i)==="[object Object]",cc=i=>Tt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Po=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ym=/-(\w)/g,Fr=ca(i=>i.replace(ym,(e,t)=>t?t.toUpperCase():"")),Mm=/\B([A-Z])/g,jr=ca(i=>i.replace(Mm,"-$1").toLowerCase()),zh=ca(i=>i.charAt(0).toUpperCase()+i.slice(1)),Aa=ca(i=>i?`on${zh(i)}`:""),Cs=(i,e)=>!Object.is(i,e),Ca=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Vo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},bm=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let nu;const wm=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let wn;class Sm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&wn&&(this.parent=wn,this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Tm(i,e=wn){e&&e.active&&e.effects.push(i)}const uc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Bh=i=>(i.w&Mi)>0,kh=i=>(i.n&Mi)>0,Em=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Mi},Am=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Bh(r)&&!kh(r)?r.delete(i):e[t++]=r,r.w&=~Mi,r.n&=~Mi}e.length=t}},Sl=new WeakMap;let gs=0,Mi=1;const Tl=30;let dn;const Hi=Symbol(""),El=Symbol("");class fc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Tm(this,n)}run(){if(!this.active)return this.fn();let e=dn,t=gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,gi=!0,Mi=1<<++gs,gs<=Tl?Em(this):iu(this),this.fn()}finally{gs<=Tl&&Am(this),Mi=1<<--gs,dn=this.parent,gi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(iu(this),this.onStop&&this.onStop(),this.active=!1)}}function iu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let gi=!0;const Vh=[];function qr(){Vh.push(gi),gi=!1}function Yr(){const i=Vh.pop();gi=i===void 0?!0:i}function qt(i,e,t){if(gi&&dn){let n=Sl.get(i);n||Sl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=uc()),Gh(r)}}function Gh(i,e){let t=!1;gs<=Tl?kh(i)||(i.n|=Mi,t=!Bh(i)):t=!i.has(dn),t&&(i.add(dn),dn.deps.push(i))}function qn(i,e,t,n,r,s){const o=Sl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(i)?cc(t)&&a.push(o.get("length")):(a.push(o.get(Hi)),ys(i)&&a.push(o.get(El)));break;case"delete":Oe(i)||(a.push(o.get(Hi)),ys(i)&&a.push(o.get(El)));break;case"set":ys(i)&&a.push(o.get(Hi));break}if(a.length===1)a[0]&&Al(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Al(uc(l))}}function Al(i,e){const t=Oe(i)?i:[...i];for(const n of t)n.computed&&ru(n);for(const n of t)n.computed||ru(n)}function ru(i,e){(i!==dn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Cm=ic("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(lc)),Lm=hc(),Pm=hc(!1,!0),Rm=hc(!0),su=Dm();function Dm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=$e(this);for(let s=0,o=this.length;s<o;s++)qt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){qr();const n=$e(this)[e].apply(this,t);return Yr(),n}}),i}function hc(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Ym:Yh:e?qh:jh).get(n))return n;const o=Oe(n);if(!i&&o&&He(su,r))return Reflect.get(su,r,s);const a=Reflect.get(n,r,s);return(lc(r)?Hh.has(r):Cm(r))||(i||qt(n,"get",r),e)?a:wt(a)?o&&cc(r)?a:a.value:ct(a)?i?$h(a):Xs(a):a}}const Im=Wh(),Fm=Wh(!0);function Wh(i=!1){return function(t,n,r,s){let o=t[n];if(Or(o)&&wt(o)&&!wt(r))return!1;if(!i&&(!Go(r)&&!Or(r)&&(o=$e(o),r=$e(r)),!Oe(t)&&wt(o)&&!wt(r)))return o.value=r,!0;const a=Oe(t)&&cc(n)?Number(n)<t.length:He(t,n),l=Reflect.set(t,n,r,s);return t===$e(s)&&(a?Cs(r,o)&&qn(t,"set",n,r):qn(t,"add",n,r)),l}}function Om(i,e){const t=He(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&qn(i,"delete",e,void 0),n}function Nm(i,e){const t=Reflect.has(i,e);return(!lc(e)||!Hh.has(e))&&qt(i,"has",e),t}function Um(i){return qt(i,"iterate",Oe(i)?"length":Hi),Reflect.ownKeys(i)}const Xh={get:Lm,set:Im,deleteProperty:Om,has:Nm,ownKeys:Um},zm={get:Rm,set(i,e){return!0},deleteProperty(i,e){return!0}},Bm=St({},Xh,{get:Pm,set:Fm}),dc=i=>i,ua=i=>Reflect.getPrototypeOf(i);function Qs(i,e,t=!1,n=!1){i=i.__v_raw;const r=$e(i),s=$e(e);t||(e!==s&&qt(r,"get",e),qt(r,"get",s));const{has:o}=ua(r),a=n?dc:t?gc:Ls;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function eo(i,e=!1){const t=this.__v_raw,n=$e(t),r=$e(i);return e||(i!==r&&qt(n,"has",i),qt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function to(i,e=!1){return i=i.__v_raw,!e&&qt($e(i),"iterate",Hi),Reflect.get(i,"size",i)}function ou(i){i=$e(i);const e=$e(this);return ua(e).has.call(e,i)||(e.add(i),qn(e,"add",i,i)),this}function au(i,e){e=$e(e);const t=$e(this),{has:n,get:r}=ua(t);let s=n.call(t,i);s||(i=$e(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Cs(e,o)&&qn(t,"set",i,e):qn(t,"add",i,e),this}function lu(i){const e=$e(this),{has:t,get:n}=ua(e);let r=t.call(e,i);r||(i=$e(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&qn(e,"delete",i,void 0),s}function cu(){const i=$e(this),e=i.size!==0,t=i.clear();return e&&qn(i,"clear",void 0,void 0),t}function no(i,e){return function(n,r){const s=this,o=s.__v_raw,a=$e(o),l=e?dc:i?gc:Ls;return!i&&qt(a,"iterate",Hi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function io(i,e,t){return function(...n){const r=this.__v_raw,s=$e(r),o=ys(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?dc:e?gc:Ls;return!e&&qt(s,"iterate",l?El:Hi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ei(i){return function(...e){return i==="delete"?!1:this}}function km(){const i={get(s){return Qs(this,s)},get size(){return to(this)},has:eo,add:ou,set:au,delete:lu,clear:cu,forEach:no(!1,!1)},e={get(s){return Qs(this,s,!1,!0)},get size(){return to(this)},has:eo,add:ou,set:au,delete:lu,clear:cu,forEach:no(!1,!0)},t={get(s){return Qs(this,s,!0)},get size(){return to(this,!0)},has(s){return eo.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:no(!0,!1)},n={get(s){return Qs(this,s,!0,!0)},get size(){return to(this,!0)},has(s){return eo.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=io(s,!1,!1),t[s]=io(s,!0,!1),e[s]=io(s,!1,!0),n[s]=io(s,!0,!0)}),[i,t,e,n]}const[Vm,Gm,Hm,Wm]=km();function pc(i,e){const t=e?i?Wm:Hm:i?Gm:Vm;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(He(t,r)&&r in n?t:n,r,s)}const Xm={get:pc(!1,!1)},jm={get:pc(!1,!0)},qm={get:pc(!0,!1)},jh=new WeakMap,qh=new WeakMap,Yh=new WeakMap,Ym=new WeakMap;function $m(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Km(i){return i.__v_skip||!Object.isExtensible(i)?0:$m(vm(i))}function Xs(i){return Or(i)?i:mc(i,!1,Xh,Xm,jh)}function Zm(i){return mc(i,!1,Bm,jm,qh)}function $h(i){return mc(i,!0,zm,qm,Yh)}function mc(i,e,t,n,r){if(!ct(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Km(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Lr(i){return Or(i)?Lr(i.__v_raw):!!(i&&i.__v_isReactive)}function Or(i){return!!(i&&i.__v_isReadonly)}function Go(i){return!!(i&&i.__v_isShallow)}function Kh(i){return Lr(i)||Or(i)}function $e(i){const e=i&&i.__v_raw;return e?$e(e):i}function Zh(i){return Vo(i,"__v_skip",!0),i}const Ls=i=>ct(i)?Xs(i):i,gc=i=>ct(i)?$h(i):i;function Jh(i){gi&&dn&&(i=$e(i),Gh(i.dep||(i.dep=uc())))}function Qh(i,e){i=$e(i),i.dep&&Al(i.dep)}function wt(i){return!!(i&&i.__v_isRef===!0)}function Jm(i){return ed(i,!1)}function Qm(i){return ed(i,!0)}function ed(i,e){return wt(i)?i:new eg(i,e)}class eg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:Ls(e)}get value(){return Jh(this),this._value}set value(e){const t=this.__v_isShallow||Go(e)||Or(e);e=t?e:$e(e),Cs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ls(e),Qh(this))}}function Pr(i){return wt(i)?i.value:i}const tg={get:(i,e,t)=>Pr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return wt(r)&&!wt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function td(i){return Lr(i)?i:new Proxy(i,tg)}var nd;class ng{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[nd]=!1,this._dirty=!0,this.effect=new fc(e,()=>{this._dirty||(this._dirty=!0,Qh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=$e(this);return Jh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}nd="__v_isReadonly";function ig(i,e,t=!1){let n,r;const s=Be(i);return s?(n=i,r=gn):(n=i.get,r=i.set),new ng(n,r,s||!r,t)}function _i(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){fa(s,e,t)}return r}function sn(i,e,t,n){if(Be(i)){const s=_i(i,e,t,n);return s&&Uh(s)&&s.catch(o=>{fa(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(sn(i[s],e,t,n));return r}function fa(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){_i(l,null,10,[i,o,a]);return}}rg(i,t,r,n)}function rg(i,e,t,n=!0){console.error(i)}let Ps=!1,Cl=!1;const bt=[];let Cn=0;const Rr=[];let Gn=null,Ui=0;const id=Promise.resolve();let _c=null;function rd(i){const e=_c||id;return i?e.then(this?i.bind(this):i):e}function sg(i){let e=Cn+1,t=bt.length;for(;e<t;){const n=e+t>>>1;Rs(bt[n])<i?e=n+1:t=n}return e}function vc(i){(!bt.length||!bt.includes(i,Ps&&i.allowRecurse?Cn+1:Cn))&&(i.id==null?bt.push(i):bt.splice(sg(i.id),0,i),sd())}function sd(){!Ps&&!Cl&&(Cl=!0,_c=id.then(ad))}function og(i){const e=bt.indexOf(i);e>Cn&&bt.splice(e,1)}function ag(i){Oe(i)?Rr.push(...i):(!Gn||!Gn.includes(i,i.allowRecurse?Ui+1:Ui))&&Rr.push(i),sd()}function uu(i,e=Ps?Cn+1:0){for(;e<bt.length;e++){const t=bt[e];t&&t.pre&&(bt.splice(e,1),e--,t())}}function od(i){if(Rr.length){const e=[...new Set(Rr)];if(Rr.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((t,n)=>Rs(t)-Rs(n)),Ui=0;Ui<Gn.length;Ui++)Gn[Ui]();Gn=null,Ui=0}}const Rs=i=>i.id==null?1/0:i.id,lg=(i,e)=>{const t=Rs(i)-Rs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function ad(i){Cl=!1,Ps=!0,bt.sort(lg);const e=gn;try{for(Cn=0;Cn<bt.length;Cn++){const t=bt[Cn];t&&t.active!==!1&&_i(t,null,14)}}finally{Cn=0,bt.length=0,od(),Ps=!1,_c=null,(bt.length||Rr.length)&&ad()}}function cg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||tt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||tt;h&&(r=t.map(d=>d.trim())),f&&(r=t.map(bm))}let a,l=n[a=Aa(e)]||n[a=Aa(Fr(e))];!l&&s&&(l=n[a=Aa(jr(e))]),l&&sn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,sn(c,i,6,r)}}function ld(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Be(i)){const l=c=>{const u=ld(c,e,!0);u&&(a=!0,St(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ct(i)&&n.set(i,null),null):(Oe(s)?s.forEach(l=>o[l]=null):St(o,s),ct(i)&&n.set(i,o),o)}function ha(i,e){return!i||!aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(i,e[0].toLowerCase()+e.slice(1))||He(i,jr(e))||He(i,e))}let Pn=null,cd=null;function Ho(i){const e=Pn;return Pn=i,cd=i&&i.type.__scopeId||null,e}function ug(i,e=Pn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&yu(-1);const s=Ho(e),o=i(...r);return Ho(s),n._d&&yu(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function La(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:m}=i;let p,v;const x=Ho(i);try{if(t.shapeFlag&4){const T=r||n;p=En(u.call(T,T,f,s,d,h,g)),v=l}else{const T=e;p=En(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),v=e.props?l:fg(l)}}catch(T){Ms.length=0,fa(T,i,1),p=Ht(_n)}let b=p;if(v&&m!==!1){const T=Object.keys(v),{shapeFlag:y}=b;T.length&&y&7&&(o&&T.some(oc)&&(v=hg(v,o)),b=bi(b,v))}return t.dirs&&(b=bi(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),p=b,Ho(x),p}const fg=i=>{let e;for(const t in i)(t==="class"||t==="style"||aa(t))&&((e||(e={}))[t]=i[t]);return e},hg=(i,e)=>{const t={};for(const n in i)(!oc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function dg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?fu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!ha(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?fu(n,o,c):!0:!!o;return!1}function fu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!ha(t,s))return!0}return!1}function pg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const mg=i=>i.__isSuspense;function gg(i,e){e&&e.pendingBranch?Oe(i)?e.effects.push(...i):e.effects.push(i):ag(i)}function Ro(i,e){if(_t){let t=_t.provides;const n=_t.parent&&_t.parent.provides;n===t&&(t=_t.provides=Object.create(n)),t[i]=e}}function vi(i,e,t=!1){const n=_t||Pn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const hu={};function Do(i,e,t){return ud(i,e,t)}function ud(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=tt){const a=_t;let l,c=!1,u=!1;if(wt(i)?(l=()=>i.value,c=Go(i)):Lr(i)?(l=()=>i,n=!0):Oe(i)?(u=!0,c=i.some(v=>Lr(v)||Go(v)),l=()=>i.map(v=>{if(wt(v))return v.value;if(Lr(v))return Tr(v);if(Be(v))return _i(v,a,2)})):Be(i)?e?l=()=>_i(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),sn(i,a,3,[h])}:l=gn,e&&n){const v=l;l=()=>Tr(v())}let f,h=v=>{f=p.onStop=()=>{_i(v,a,4)}};if(Is)return h=gn,e?t&&sn(e,a,3,[l(),u?[]:void 0,h]):l(),gn;let d=u?[]:hu;const g=()=>{if(!!p.active)if(e){const v=p.run();(n||c||(u?v.some((x,b)=>Cs(x,d[b])):Cs(v,d)))&&(f&&f(),sn(e,a,3,[v,d===hu?void 0:d,h]),d=v)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Ot(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>vc(g));const p=new fc(l,m);return e?t?g():d=p.run():r==="post"?Ot(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&ac(a.scope.effects,p)}}function _g(i,e,t){const n=this.proxy,r=Tt(i)?i.includes(".")?fd(n,i):()=>n[i]:i.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=_t;Nr(this);const a=ud(r,s.bind(n),t);return o?Nr(o):Wi(),a}function fd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Tr(i,e){if(!ct(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),wt(i))Tr(i.value,e);else if(Oe(i))for(let t=0;t<i.length;t++)Tr(i[t],e);else if(gm(i)||ys(i))i.forEach(t=>{Tr(t,e)});else if(xm(i))for(const t in i)Tr(i[t],e);return i}function vg(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gd(()=>{i.isMounted=!0}),_d(()=>{i.isUnmounting=!0}),i}const Kt=[Function,Array],xg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(i,{slots:e}){const t=i0(),n=vg();let r;return()=>{const s=e.default&&dd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==_n){o=m;break}}const a=$e(i),{mode:l}=a;if(n.isLeaving)return Pa(o);const c=du(o);if(!c)return Pa(o);const u=Ll(c,a,n,t);Pl(c,u);const f=t.subTree,h=f&&du(f);let d=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,d=!0)}if(h&&h.type!==_n&&(!zi(c,h)||d)){const m=Ll(h,a,n,t);if(Pl(h,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},Pa(o);l==="in-out"&&c.type!==_n&&(m.delayLeave=(p,v,x)=>{const b=hd(n,h);b[String(h.key)]=h,p._leaveCb=()=>{v(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},yg=xg;function hd(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ll(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:v,onAppearCancelled:x}=e,b=String(i.key),T=hd(t,i),y=(_,S)=>{_&&sn(_,n,9,S)},P=(_,S)=>{const L=S[1];y(_,S),Oe(_)?_.every(q=>q.length<=1)&&L():_.length<=1&&L()},D={mode:s,persisted:o,beforeEnter(_){let S=a;if(!t.isMounted)if(r)S=m||a;else return;_._leaveCb&&_._leaveCb(!0);const L=T[b];L&&zi(i,L)&&L.el._leaveCb&&L.el._leaveCb(),y(S,[_])},enter(_){let S=l,L=c,q=u;if(!t.isMounted)if(r)S=p||l,L=v||c,q=x||u;else return;let Q=!1;const U=_._enterCb=F=>{Q||(Q=!0,F?y(q,[_]):y(L,[_]),D.delayedLeave&&D.delayedLeave(),_._enterCb=void 0)};S?P(S,[_,U]):U()},leave(_,S){const L=String(i.key);if(_._enterCb&&_._enterCb(!0),t.isUnmounting)return S();y(f,[_]);let q=!1;const Q=_._leaveCb=U=>{q||(q=!0,S(),U?y(g,[_]):y(d,[_]),_._leaveCb=void 0,T[L]===i&&delete T[L])};T[L]=i,h?P(h,[_,Q]):Q()},clone(_){return Ll(_,e,t,n)}};return D}function Pa(i){if(da(i))return i=bi(i),i.children=null,i}function du(i){return da(i)?i.children?i.children[0]:void 0:i}function Pl(i,e){i.shapeFlag&6&&i.component?Pl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function dd(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Tn?(o.patchFlag&128&&r++,n=n.concat(dd(o.children,e,a))):(e||o.type!==_n)&&n.push(a!=null?bi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function pd(i){return Be(i)?{setup:i,name:i.name}:i}const Io=i=>!!i.type.__asyncLoader,da=i=>i.type.__isKeepAlive;function Mg(i,e){md(i,"a",e)}function bg(i,e){md(i,"da",e)}function md(i,e,t=_t){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(pa(e,n,t),t){let r=t.parent;for(;r&&r.parent;)da(r.parent.vnode)&&wg(n,e,t,r),r=r.parent}}function wg(i,e,t,n){const r=pa(e,i,n,!0);vd(()=>{ac(n[e],r)},t)}function pa(i,e,t=_t,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qr(),Nr(t);const a=sn(e,t,i,o);return Wi(),Yr(),a});return n?r.unshift(s):r.push(s),s}}const Zn=i=>(e,t=_t)=>(!Is||i==="sp")&&pa(i,e,t),Sg=Zn("bm"),gd=Zn("m"),Tg=Zn("bu"),Eg=Zn("u"),_d=Zn("bum"),vd=Zn("um"),Ag=Zn("sp"),Cg=Zn("rtg"),Lg=Zn("rtc");function Pg(i,e=_t){pa("ec",i,e)}function Ci(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(qr(),sn(l,t,8,[i.el,a,i,e]),Yr())}}const Rg=Symbol(),Rl=i=>i?Pd(i)?wc(i)||i.proxy:Rl(i.parent):null,Wo=St(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Rl(i.parent),$root:i=>Rl(i.root),$emit:i=>i.emit,$options:i=>xc(i),$forceUpdate:i=>i.f||(i.f=()=>vc(i.update)),$nextTick:i=>i.n||(i.n=rd.bind(i.proxy)),$watch:i=>_g.bind(i)}),Dg={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==tt&&He(n,e))return o[e]=1,n[e];if(r!==tt&&He(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==tt&&He(t,e))return o[e]=4,t[e];Dl&&(o[e]=0)}}const u=Wo[e];let f,h;if(u)return e==="$attrs"&&qt(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==tt&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==tt&&He(r,e)?(r[e]=t,!0):n!==tt&&He(n,e)?(n[e]=t,!0):He(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==tt&&He(i,o)||e!==tt&&He(e,o)||(a=s[0])&&He(a,o)||He(n,o)||He(Wo,o)||He(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:He(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Dl=!0;function Ig(i){const e=xc(i),t=i.proxy,n=i.ctx;Dl=!1,e.beforeCreate&&pu(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:x,destroyed:b,unmounted:T,render:y,renderTracked:P,renderTriggered:D,errorCaptured:_,serverPrefetch:S,expose:L,inheritAttrs:q,components:Q,directives:U,filters:F}=e;if(c&&Fg(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const K in o){const V=o[K];Be(V)&&(n[K]=V.bind(t))}if(r){const K=r.call(t,t);ct(K)&&(i.data=Xs(K))}if(Dl=!0,s)for(const K in s){const V=s[K],z=Be(V)?V.bind(t,t):Be(V.get)?V.get.bind(t,t):gn,X=!Be(V)&&Be(V.set)?V.set.bind(t):gn,le=en({get:z,set:X});Object.defineProperty(n,K,{enumerable:!0,configurable:!0,get:()=>le.value,set:ae=>le.value=ae})}if(a)for(const K in a)xd(a[K],n,t,K);if(l){const K=Be(l)?l.call(t):l;Reflect.ownKeys(K).forEach(V=>{Ro(V,K[V])})}u&&pu(u,i,"c");function Y(K,V){Oe(V)?V.forEach(z=>K(z.bind(t))):V&&K(V.bind(t))}if(Y(Sg,f),Y(gd,h),Y(Tg,d),Y(Eg,g),Y(Mg,m),Y(bg,p),Y(Pg,_),Y(Lg,P),Y(Cg,D),Y(_d,x),Y(vd,T),Y(Ag,S),Oe(L))if(L.length){const K=i.exposed||(i.exposed={});L.forEach(V=>{Object.defineProperty(K,V,{get:()=>t[V],set:z=>t[V]=z})})}else i.exposed||(i.exposed={});y&&i.render===gn&&(i.render=y),q!=null&&(i.inheritAttrs=q),Q&&(i.components=Q),U&&(i.directives=U)}function Fg(i,e,t=gn,n=!1){Oe(i)&&(i=Il(i));for(const r in i){const s=i[r];let o;ct(s)?"default"in s?o=vi(s.from||r,s.default,!0):o=vi(s.from||r):o=vi(s),wt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function pu(i,e,t){sn(Oe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function xd(i,e,t,n){const r=n.includes(".")?fd(t,n):()=>t[n];if(Tt(i)){const s=e[i];Be(s)&&Do(r,s)}else if(Be(i))Do(r,i.bind(t));else if(ct(i))if(Oe(i))i.forEach(s=>xd(s,e,t,n));else{const s=Be(i.handler)?i.handler.bind(t):e[i.handler];Be(s)&&Do(r,s,i)}}function xc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Xo(l,c,o,!0)),Xo(l,e,o)),ct(e)&&s.set(e,l),l}function Xo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Xo(i,s,t,!0),r&&r.forEach(o=>Xo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Og[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Og={data:mu,props:Fi,emits:Fi,methods:Fi,computed:Fi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Fi,directives:Fi,watch:Ug,provide:mu,inject:Ng};function mu(i,e){return e?i?function(){return St(Be(i)?i.call(this,this):i,Be(e)?e.call(this,this):e)}:e:i}function Ng(i,e){return Fi(Il(i),Il(e))}function Il(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function At(i,e){return i?[...new Set([].concat(i,e))]:e}function Fi(i,e){return i?St(St(Object.create(null),i),e):e}function Ug(i,e){if(!i)return e;if(!e)return i;const t=St(Object.create(null),i);for(const n in e)t[n]=At(i[n],e[n]);return t}function zg(i,e,t,n=!1){const r={},s={};Vo(s,ma,1),i.propsDefaults=Object.create(null),yd(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Zm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Bg(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=$e(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ha(i.emitsOptions,h))continue;const d=e[h];if(l)if(He(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Fr(h);r[g]=Fl(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{yd(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=jr(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Fl(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!He(e,f)&&!0)&&(delete s[f],c=!0)}c&&qn(i,"set","$attrs")}function yd(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;r&&He(r,u=Fr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ha(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=$e(t),c=a||tt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Fl(r,l,f,c[f],i,!He(c,f))}}return o}function Fl(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=He(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Nr(r),n=c[t]=l.call(null,e),Wi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===jr(t))&&(n=!0))}return n}function Md(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Be(i)){const u=f=>{l=!0;const[h,d]=Md(f,e,!0);St(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ct(i)&&n.set(i,Cr),Cr;if(Oe(s))for(let u=0;u<s.length;u++){const f=Fr(s[u]);gu(f)&&(o[f]=tt)}else if(s)for(const u in s){const f=Fr(u);if(gu(f)){const h=s[u],d=o[f]=Oe(h)||Be(h)?{type:h}:h;if(d){const g=xu(Boolean,d.type),m=xu(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||He(d,"default"))&&a.push(f)}}}const c=[o,a];return ct(i)&&n.set(i,c),c}function gu(i){return i[0]!=="$"}function _u(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function vu(i,e){return _u(i)===_u(e)}function xu(i,e){return Oe(e)?e.findIndex(t=>vu(t,i)):Be(e)&&vu(e,i)?0:-1}const bd=i=>i[0]==="_"||i==="$stable",yc=i=>Oe(i)?i.map(En):[En(i)],kg=(i,e,t)=>{if(e._n)return e;const n=ug((...r)=>yc(e(...r)),t);return n._c=!1,n},wd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(bd(r))continue;const s=i[r];if(Be(s))e[r]=kg(r,s,n);else if(s!=null){const o=yc(s);e[r]=()=>o}}},Sd=(i,e)=>{const t=yc(e);i.slots.default=()=>t},Vg=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=$e(e),Vo(e,"_",t)):wd(e,i.slots={})}else i.slots={},e&&Sd(i,e);Vo(i.slots,ma,1)},Gg=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=tt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(St(r,e),!t&&a===1&&delete r._):(s=!e.$stable,wd(e,r)),o=e}else e&&(Sd(i,e),o={default:1});if(s)for(const a in r)!bd(a)&&!(a in o)&&delete r[a]};function Td(){return{app:null,config:{isNativeTag:dm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hg=0;function Wg(i,e){return function(n,r=null){Be(n)||(n=Object.assign({},n)),r!=null&&!ct(r)&&(r=null);const s=Td(),o=new Set;let a=!1;const l=s.app={_uid:Hg++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:c0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Ht(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,wc(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ol(i,e,t,n,r=!1){if(Oe(i)){i.forEach((h,d)=>Ol(h,e&&(Oe(e)?e[d]:e),t,n,r));return}if(Io(n)&&!r)return;const s=n.shapeFlag&4?wc(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===tt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,He(f,c)&&(f[c]=null)):wt(c)&&(c.value=null)),Be(l))_i(l,a,12,[o,u]);else{const h=Tt(l),d=wt(l);if(h||d){const g=()=>{if(i.f){const m=h?u[l]:l.value;r?Oe(m)&&ac(m,s):Oe(m)?m.includes(s)||m.push(s):h?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,He(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ot(g,t)):g()}}}const Ot=gg;function Xg(i){return jg(i)}function jg(i,e){const t=wm();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=gn,cloneNode:g,insertStaticContent:m}=i,p=(A,R,W,te=null,ie=null,fe=null,he=!1,de=null,ge=!!R.dynamicChildren)=>{if(A===R)return;A&&!zi(A,R)&&(te=ce(A),oe(A,ie,fe,!0),A=null),R.patchFlag===-2&&(ge=!1,R.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=R;switch(w){case Mc:v(A,R,W,te);break;case _n:x(A,R,W,te);break;case Ra:A==null&&b(R,W,te,he);break;case Tn:U(A,R,W,te,ie,fe,he,de,ge);break;default:N&1?P(A,R,W,te,ie,fe,he,de,ge):N&6?F(A,R,W,te,ie,fe,he,de,ge):(N&64||N&128)&&w.process(A,R,W,te,ie,fe,he,de,ge,pe)}M!=null&&ie&&Ol(M,A&&A.ref,fe,R||A,!R)},v=(A,R,W,te)=>{if(A==null)n(R.el=a(R.children),W,te);else{const ie=R.el=A.el;R.children!==A.children&&c(ie,R.children)}},x=(A,R,W,te)=>{A==null?n(R.el=l(R.children||""),W,te):R.el=A.el},b=(A,R,W,te)=>{[A.el,A.anchor]=m(A.children,R,W,te,A.el,A.anchor)},T=({el:A,anchor:R},W,te)=>{let ie;for(;A&&A!==R;)ie=h(A),n(A,W,te),A=ie;n(R,W,te)},y=({el:A,anchor:R})=>{let W;for(;A&&A!==R;)W=h(A),r(A),A=W;r(R)},P=(A,R,W,te,ie,fe,he,de,ge)=>{he=he||R.type==="svg",A==null?D(R,W,te,ie,fe,he,de,ge):L(A,R,ie,fe,he,de,ge)},D=(A,R,W,te,ie,fe,he,de)=>{let ge,w;const{type:M,props:N,shapeFlag:$,transition:J,patchFlag:ue,dirs:Se}=A;if(A.el&&g!==void 0&&ue===-1)ge=A.el=g(A.el);else{if(ge=A.el=o(A.type,fe,N&&N.is,N),$&8?u(ge,A.children):$&16&&S(A.children,ge,null,te,ie,fe&&M!=="foreignObject",he,de),Se&&Ci(A,null,te,"created"),N){for(const Z in N)Z!=="value"&&!Po(Z)&&s(ge,Z,null,N[Z],fe,A.children,te,ie,se);"value"in N&&s(ge,"value",null,N.value),(w=N.onVnodeBeforeMount)&&yn(w,te,A)}_(ge,A,A.scopeId,he,te)}Se&&Ci(A,null,te,"beforeMount");const E=(!ie||ie&&!ie.pendingBranch)&&J&&!J.persisted;E&&J.beforeEnter(ge),n(ge,R,W),((w=N&&N.onVnodeMounted)||E||Se)&&Ot(()=>{w&&yn(w,te,A),E&&J.enter(ge),Se&&Ci(A,null,te,"mounted")},ie)},_=(A,R,W,te,ie)=>{if(W&&d(A,W),te)for(let fe=0;fe<te.length;fe++)d(A,te[fe]);if(ie){let fe=ie.subTree;if(R===fe){const he=ie.vnode;_(A,he,he.scopeId,he.slotScopeIds,ie.parent)}}},S=(A,R,W,te,ie,fe,he,de,ge=0)=>{for(let w=ge;w<A.length;w++){const M=A[w]=de?hi(A[w]):En(A[w]);p(null,M,R,W,te,ie,fe,he,de)}},L=(A,R,W,te,ie,fe,he)=>{const de=R.el=A.el;let{patchFlag:ge,dynamicChildren:w,dirs:M}=R;ge|=A.patchFlag&16;const N=A.props||tt,$=R.props||tt;let J;W&&Li(W,!1),(J=$.onVnodeBeforeUpdate)&&yn(J,W,R,A),M&&Ci(R,A,W,"beforeUpdate"),W&&Li(W,!0);const ue=ie&&R.type!=="foreignObject";if(w?q(A.dynamicChildren,w,de,W,te,ue,fe):he||z(A,R,de,null,W,te,ue,fe,!1),ge>0){if(ge&16)Q(de,R,N,$,W,te,ie);else if(ge&2&&N.class!==$.class&&s(de,"class",null,$.class,ie),ge&4&&s(de,"style",N.style,$.style,ie),ge&8){const Se=R.dynamicProps;for(let E=0;E<Se.length;E++){const Z=Se[E],me=N[Z],Me=$[Z];(Me!==me||Z==="value")&&s(de,Z,me,Me,ie,A.children,W,te,se)}}ge&1&&A.children!==R.children&&u(de,R.children)}else!he&&w==null&&Q(de,R,N,$,W,te,ie);((J=$.onVnodeUpdated)||M)&&Ot(()=>{J&&yn(J,W,R,A),M&&Ci(R,A,W,"updated")},te)},q=(A,R,W,te,ie,fe,he)=>{for(let de=0;de<R.length;de++){const ge=A[de],w=R[de],M=ge.el&&(ge.type===Tn||!zi(ge,w)||ge.shapeFlag&70)?f(ge.el):W;p(ge,w,M,null,te,ie,fe,he,!0)}},Q=(A,R,W,te,ie,fe,he)=>{if(W!==te){for(const de in te){if(Po(de))continue;const ge=te[de],w=W[de];ge!==w&&de!=="value"&&s(A,de,w,ge,he,R.children,ie,fe,se)}if(W!==tt)for(const de in W)!Po(de)&&!(de in te)&&s(A,de,W[de],null,he,R.children,ie,fe,se);"value"in te&&s(A,"value",W.value,te.value)}},U=(A,R,W,te,ie,fe,he,de,ge)=>{const w=R.el=A?A.el:a(""),M=R.anchor=A?A.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:J}=R;J&&(de=de?de.concat(J):J),A==null?(n(w,W,te),n(M,W,te),S(R.children,W,M,ie,fe,he,de,ge)):N>0&&N&64&&$&&A.dynamicChildren?(q(A.dynamicChildren,$,W,ie,fe,he,de),(R.key!=null||ie&&R===ie.subTree)&&Ed(A,R,!0)):z(A,R,W,M,ie,fe,he,de,ge)},F=(A,R,W,te,ie,fe,he,de,ge)=>{R.slotScopeIds=de,A==null?R.shapeFlag&512?ie.ctx.activate(R,W,te,he,ge):H(R,W,te,ie,fe,he,ge):Y(A,R,ge)},H=(A,R,W,te,ie,fe,he)=>{const de=A.component=n0(A,te,ie);if(da(A)&&(de.ctx.renderer=pe),r0(de),de.asyncDep){if(ie&&ie.registerDep(de,K),!A.el){const ge=de.subTree=Ht(_n);x(null,ge,R,W)}return}K(de,A,R,W,ie,fe,he)},Y=(A,R,W)=>{const te=R.component=A.component;if(dg(A,R,W))if(te.asyncDep&&!te.asyncResolved){V(te,R,W);return}else te.next=R,og(te.update),te.update();else R.el=A.el,te.vnode=R},K=(A,R,W,te,ie,fe,he)=>{const de=()=>{if(A.isMounted){let{next:M,bu:N,u:$,parent:J,vnode:ue}=A,Se=M,E;Li(A,!1),M?(M.el=ue.el,V(A,M,he)):M=ue,N&&Ca(N),(E=M.props&&M.props.onVnodeBeforeUpdate)&&yn(E,J,M,ue),Li(A,!0);const Z=La(A),me=A.subTree;A.subTree=Z,p(me,Z,f(me.el),ce(me),A,ie,fe),M.el=Z.el,Se===null&&pg(A,Z.el),$&&Ot($,ie),(E=M.props&&M.props.onVnodeUpdated)&&Ot(()=>yn(E,J,M,ue),ie)}else{let M;const{el:N,props:$}=R,{bm:J,m:ue,parent:Se}=A,E=Io(R);if(Li(A,!1),J&&Ca(J),!E&&(M=$&&$.onVnodeBeforeMount)&&yn(M,Se,R),Li(A,!0),N&&_e){const Z=()=>{A.subTree=La(A),_e(N,A.subTree,A,ie,null)};E?R.type.__asyncLoader().then(()=>!A.isUnmounted&&Z()):Z()}else{const Z=A.subTree=La(A);p(null,Z,W,te,A,ie,fe),R.el=Z.el}if(ue&&Ot(ue,ie),!E&&(M=$&&$.onVnodeMounted)){const Z=R;Ot(()=>yn(M,Se,Z),ie)}(R.shapeFlag&256||Se&&Io(Se.vnode)&&Se.vnode.shapeFlag&256)&&A.a&&Ot(A.a,ie),A.isMounted=!0,R=W=te=null}},ge=A.effect=new fc(de,()=>vc(w),A.scope),w=A.update=()=>ge.run();w.id=A.uid,Li(A,!0),w()},V=(A,R,W)=>{R.component=A;const te=A.vnode.props;A.vnode=R,A.next=null,Bg(A,R.props,te,W),Gg(A,R.children,W),qr(),uu(),Yr()},z=(A,R,W,te,ie,fe,he,de,ge=!1)=>{const w=A&&A.children,M=A?A.shapeFlag:0,N=R.children,{patchFlag:$,shapeFlag:J}=R;if($>0){if($&128){le(w,N,W,te,ie,fe,he,de,ge);return}else if($&256){X(w,N,W,te,ie,fe,he,de,ge);return}}J&8?(M&16&&se(w,ie,fe),N!==w&&u(W,N)):M&16?J&16?le(w,N,W,te,ie,fe,he,de,ge):se(w,ie,fe,!0):(M&8&&u(W,""),J&16&&S(N,W,te,ie,fe,he,de,ge))},X=(A,R,W,te,ie,fe,he,de,ge)=>{A=A||Cr,R=R||Cr;const w=A.length,M=R.length,N=Math.min(w,M);let $;for($=0;$<N;$++){const J=R[$]=ge?hi(R[$]):En(R[$]);p(A[$],J,W,null,ie,fe,he,de,ge)}w>M?se(A,ie,fe,!0,!1,N):S(R,W,te,ie,fe,he,de,ge,N)},le=(A,R,W,te,ie,fe,he,de,ge)=>{let w=0;const M=R.length;let N=A.length-1,$=M-1;for(;w<=N&&w<=$;){const J=A[w],ue=R[w]=ge?hi(R[w]):En(R[w]);if(zi(J,ue))p(J,ue,W,null,ie,fe,he,de,ge);else break;w++}for(;w<=N&&w<=$;){const J=A[N],ue=R[$]=ge?hi(R[$]):En(R[$]);if(zi(J,ue))p(J,ue,W,null,ie,fe,he,de,ge);else break;N--,$--}if(w>N){if(w<=$){const J=$+1,ue=J<M?R[J].el:te;for(;w<=$;)p(null,R[w]=ge?hi(R[w]):En(R[w]),W,ue,ie,fe,he,de,ge),w++}}else if(w>$)for(;w<=N;)oe(A[w],ie,fe,!0),w++;else{const J=w,ue=w,Se=new Map;for(w=ue;w<=$;w++){const Ue=R[w]=ge?hi(R[w]):En(R[w]);Ue.key!=null&&Se.set(Ue.key,w)}let E,Z=0;const me=$-ue+1;let Me=!1,we=0;const Ce=new Array(me);for(w=0;w<me;w++)Ce[w]=0;for(w=J;w<=N;w++){const Ue=A[w];if(Z>=me){oe(Ue,ie,fe,!0);continue}let I;if(Ue.key!=null)I=Se.get(Ue.key);else for(E=ue;E<=$;E++)if(Ce[E-ue]===0&&zi(Ue,R[E])){I=E;break}I===void 0?oe(Ue,ie,fe,!0):(Ce[I-ue]=w+1,I>=we?we=I:Me=!0,p(Ue,R[I],W,null,ie,fe,he,de,ge),Z++)}const Ne=Me?qg(Ce):Cr;for(E=Ne.length-1,w=me-1;w>=0;w--){const Ue=ue+w,I=R[Ue],ye=Ue+1<M?R[Ue+1].el:te;Ce[w]===0?p(null,I,W,ye,ie,fe,he,de,ge):Me&&(E<0||w!==Ne[E]?ae(I,W,ye,2):E--)}}},ae=(A,R,W,te,ie=null)=>{const{el:fe,type:he,transition:de,children:ge,shapeFlag:w}=A;if(w&6){ae(A.component.subTree,R,W,te);return}if(w&128){A.suspense.move(R,W,te);return}if(w&64){he.move(A,R,W,pe);return}if(he===Tn){n(fe,R,W);for(let N=0;N<ge.length;N++)ae(ge[N],R,W,te);n(A.anchor,R,W);return}if(he===Ra){T(A,R,W);return}if(te!==2&&w&1&&de)if(te===0)de.beforeEnter(fe),n(fe,R,W),Ot(()=>de.enter(fe),ie);else{const{leave:N,delayLeave:$,afterLeave:J}=de,ue=()=>n(fe,R,W),Se=()=>{N(fe,()=>{ue(),J&&J()})};$?$(fe,ue,Se):Se()}else n(fe,R,W)},oe=(A,R,W,te=!1,ie=!1)=>{const{type:fe,props:he,ref:de,children:ge,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:$}=A;if(de!=null&&Ol(de,null,W,A,!0),M&256){R.ctx.deactivate(A);return}const J=M&1&&$,ue=!Io(A);let Se;if(ue&&(Se=he&&he.onVnodeBeforeUnmount)&&yn(Se,R,A),M&6)B(A.component,W,te);else{if(M&128){A.suspense.unmount(W,te);return}J&&Ci(A,null,R,"beforeUnmount"),M&64?A.type.remove(A,R,W,ie,pe,te):w&&(fe!==Tn||N>0&&N&64)?se(w,R,W,!1,!0):(fe===Tn&&N&384||!ie&&M&16)&&se(ge,R,W),te&&ve(A)}(ue&&(Se=he&&he.onVnodeUnmounted)||J)&&Ot(()=>{Se&&yn(Se,R,A),J&&Ci(A,null,R,"unmounted")},W)},ve=A=>{const{type:R,el:W,anchor:te,transition:ie}=A;if(R===Tn){k(W,te);return}if(R===Ra){y(A);return}const fe=()=>{r(W),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(A.shapeFlag&1&&ie&&!ie.persisted){const{leave:he,delayLeave:de}=ie,ge=()=>he(W,fe);de?de(A.el,fe,ge):ge()}else fe()},k=(A,R)=>{let W;for(;A!==R;)W=h(A),r(A),A=W;r(R)},B=(A,R,W)=>{const{bum:te,scope:ie,update:fe,subTree:he,um:de}=A;te&&Ca(te),ie.stop(),fe&&(fe.active=!1,oe(he,A,R,W)),de&&Ot(de,R),Ot(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},se=(A,R,W,te=!1,ie=!1,fe=0)=>{for(let he=fe;he<A.length;he++)oe(A[he],R,W,te,ie)},ce=A=>A.shapeFlag&6?ce(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),be=(A,R,W)=>{A==null?R._vnode&&oe(R._vnode,null,null,!0):p(R._vnode||null,A,R,null,null,null,W),uu(),od(),R._vnode=A},pe={p,um:oe,m:ae,r:ve,mt:H,mc:S,pc:z,pbc:q,n:ce,o:i};let Te,_e;return e&&([Te,_e]=e(pe)),{render:be,hydrate:Te,createApp:Wg(be,Te)}}function Li({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Ed(i,e,t=!1){const n=i.children,r=e.children;if(Oe(n)&&Oe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=hi(r[s]),a.el=o.el),t||Ed(o,a))}}function qg(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Yg=i=>i.__isTeleport,Tn=Symbol(void 0),Mc=Symbol(void 0),_n=Symbol(void 0),Ra=Symbol(void 0),Ms=[];let pn=null;function bs(i=!1){Ms.push(pn=i?null:[])}function $g(){Ms.pop(),pn=Ms[Ms.length-1]||null}let Ds=1;function yu(i){Ds+=i}function Ad(i){return i.dynamicChildren=Ds>0?pn||Cr:null,$g(),Ds>0&&pn&&pn.push(i),i}function Da(i,e,t,n,r,s){return Ad(jo(i,e,t,n,r,s,!0))}function Cd(i,e,t,n,r){return Ad(Ht(i,e,t,n,r,!0))}function Nl(i){return i?i.__v_isVNode===!0:!1}function zi(i,e){return i.type===e.type&&i.key===e.key}const ma="__vInternal",Ld=({key:i})=>i!=null?i:null,Fo=({ref:i,ref_key:e,ref_for:t})=>i!=null?Tt(i)||wt(i)||Be(i)?{i:Pn,r:i,k:e,f:!!t}:i:null;function jo(i,e=null,t=null,n=0,r=null,s=i===Tn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ld(e),ref:e&&Fo(e),scopeId:cd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(bc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),Ds>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const Ht=Kg;function Kg(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Rg)&&(i=_n),Nl(i)){const a=bi(i,e,!0);return t&&bc(a,t),Ds>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(i)]=a:pn.push(a)),a.patchFlag|=-2,a}if(l0(i)&&(i=i.__vccOpts),e){e=Zg(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=sc(a)),ct(l)&&(Kh(l)&&!Oe(l)&&(l=St({},l)),e.style=rc(l))}const o=Tt(i)?1:mg(i)?128:Yg(i)?64:ct(i)?4:Be(i)?2:0;return jo(i,e,t,n,r,o,s,!0)}function Zg(i){return i?Kh(i)||ma in i?St({},i):i:null}function bi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Qg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Ld(a),ref:e&&e.ref?t&&r?Oe(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Tn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&bi(i.ssContent),ssFallback:i.ssFallback&&bi(i.ssFallback),el:i.el,anchor:i.anchor}}function Jg(i=" ",e=0){return Ht(Mc,null,i,e)}function Mu(i="",e=!1){return e?(bs(),Cd(_n,null,i)):Ht(_n,null,i)}function En(i){return i==null||typeof i=="boolean"?Ht(_n):Oe(i)?Ht(Tn,null,i.slice()):typeof i=="object"?hi(i):Ht(Mc,null,String(i))}function hi(i){return i.el===null||i.memo?i:bi(i)}function bc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),bc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ma in e)?e._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),n&64?(t=16,e=[Jg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Qg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=sc([e.class,n.class]));else if(r==="style")e.style=rc([e.style,n.style]);else if(aa(r)){const s=e[r],o=n[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function yn(i,e,t,n=null){sn(i,e,7,[t,n])}const e0=Td();let t0=0;function n0(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||e0,s={uid:t0++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(n,r),emitsOptions:ld(n,r),emit:null,emitted:null,propsDefaults:tt,inheritAttrs:n.inheritAttrs,ctx:tt,data:tt,props:tt,attrs:tt,slots:tt,refs:tt,setupState:tt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cg.bind(null,s),i.ce&&i.ce(s),s}let _t=null;const i0=()=>_t||Pn,Nr=i=>{_t=i,i.scope.on()},Wi=()=>{_t&&_t.scope.off(),_t=null};function Pd(i){return i.vnode.shapeFlag&4}let Is=!1;function r0(i,e=!1){Is=e;const{props:t,children:n}=i.vnode,r=Pd(i);zg(i,t,r,e),Vg(i,n);const s=r?s0(i,e):void 0;return Is=!1,s}function s0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=Zh(new Proxy(i.ctx,Dg));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?a0(i):null;Nr(i),qr();const s=_i(n,i,0,[i.props,r]);if(Yr(),Wi(),Uh(s)){if(s.then(Wi,Wi),e)return s.then(o=>{bu(i,o,e)}).catch(o=>{fa(o,i,0)});i.asyncDep=s}else bu(i,s,e)}else Rd(i,e)}function bu(i,e,t){Be(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ct(e)&&(i.setupState=td(e)),Rd(i,t)}let wu;function Rd(i,e,t){const n=i.type;if(!i.render){if(!e&&wu&&!n.render){const r=n.template||xc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=St(St({isCustomElement:s,delimiters:a},o),l);n.render=wu(r,c)}}i.render=n.render||gn}Nr(i),qr(),Ig(i),Yr(),Wi()}function o0(i){return new Proxy(i.attrs,{get(e,t){return qt(i,"get","$attrs"),e[t]}})}function a0(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=o0(i))},slots:i.slots,emit:i.emit,expose:e}}function wc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(td(Zh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Wo)return Wo[t](i)}}))}function l0(i){return Be(i)&&"__vccOpts"in i}const en=(i,e)=>ig(i,e,Is);function Dd(i,e,t){const n=arguments.length;return n===2?ct(e)&&!Oe(e)?Nl(e)?Ht(i,null,[e]):Ht(i,e):Ht(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Nl(t)&&(t=[t]),Ht(i,e,t))}const c0="3.2.39",u0="http://www.w3.org/2000/svg",Bi=typeof document<"u"?document:null,Su=Bi&&Bi.createElement("template"),f0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Bi.createElementNS(u0,i):Bi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Bi.createTextNode(i),createComment:i=>Bi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Bi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Su.innerHTML=n?`<svg>${i}</svg>`:i;const a=Su.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function h0(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function d0(i,e,t){const n=i.style,r=Tt(t);if(t&&!r){for(const s in t)Ul(n,s,t[s]);if(e&&!Tt(e))for(const s in e)t[s]==null&&Ul(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Tu=/\s*!important$/;function Ul(i,e,t){if(Oe(t))t.forEach(n=>Ul(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=p0(i,e);Tu.test(t)?i.setProperty(jr(n),t.replace(Tu,""),"important"):i[n]=t}}const Eu=["Webkit","Moz","ms"],Ia={};function p0(i,e){const t=Ia[e];if(t)return t;let n=Fr(e);if(n!=="filter"&&n in i)return Ia[e]=n;n=zh(n);for(let r=0;r<Eu.length;r++){const s=Eu[r]+n;if(s in i)return Ia[e]=s}return e}const Au="http://www.w3.org/1999/xlink";function m0(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Au,e.slice(6,e.length)):i.setAttributeNS(Au,e,t);else{const s=cm(e);t==null||s&&!Nh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function g0(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Nh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[Id,_0]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let zl=0;const v0=Promise.resolve(),x0=()=>{zl=0},y0=()=>zl||(v0.then(x0),zl=Id());function M0(i,e,t,n){i.addEventListener(e,t,n)}function b0(i,e,t,n){i.removeEventListener(e,t,n)}function w0(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=S0(e);if(n){const c=s[e]=T0(n,r);M0(i,a,c,l)}else o&&(b0(i,a,o,l),s[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function S0(i){let e;if(Cu.test(i)){e={};let n;for(;n=i.match(Cu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):jr(i.slice(2)),e]}function T0(i,e){const t=n=>{const r=n.timeStamp||Id();(_0||r>=t.attached-1)&&sn(E0(n,t.value),e,5,[n])};return t.value=i,t.attached=y0(),t}function E0(i,e){if(Oe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Lu=/^on[a-z]/,A0=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?h0(i,n,r):e==="style"?d0(i,t,n):aa(e)?oc(e)||w0(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C0(i,e,n,r))?g0(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),m0(i,e,n,r))};function C0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Lu.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Lu.test(e)&&Tt(t)?!1:e in i}const L0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};yg.props;const P0=St({patchProp:A0},f0);let Pu;function R0(){return Pu||(Pu=Xg(P0))}const D0=(...i)=>{const e=R0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=I0(n);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function I0(i){return Tt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="144",ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},F0=0,Ru=1,O0=2,Fd=1,N0=2,_s=3,Ur=0,jt=1,pi=2,xi=0,Dr=1,Du=2,Iu=3,Fu=4,U0=5,Mr=100,z0=101,B0=102,Ou=103,Nu=104,k0=200,V0=201,G0=202,H0=203,Od=204,Nd=205,W0=206,X0=207,j0=208,q0=209,Y0=210,$0=0,K0=1,Z0=2,Bl=3,J0=4,Q0=5,e_=6,t_=7,ga=0,n_=1,i_=2,jn=0,r_=1,s_=2,o_=3,a_=4,l_=5,Ud=300,zr=301,Br=302,qo=303,kl=304,_a=306,Fs=1e3,Gt=1001,Vl=1002,Mt=1003,Uu=1004,zu=1005,Qt=1006,c_=1007,va=1008,qi=1009,u_=1010,f_=1011,zd=1012,h_=1013,Vi=1014,mi=1015,Os=1016,d_=1017,p_=1018,Ir=1020,m_=1021,g_=1022,mn=1023,__=1024,v_=1025,Xi=1026,kr=1027,x_=1028,y_=1029,M_=1030,b_=1031,w_=1033,Fa=33776,Oa=33777,Na=33778,Ua=33779,Bu=35840,ku=35841,Vu=35842,Gu=35843,S_=36196,Hu=37492,Wu=37496,Xu=37808,ju=37809,qu=37810,Yu=37811,$u=37812,Ku=37813,Zu=37814,Ju=37815,Qu=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,of=36492,Yo=2300,$o=2301,za=2302,af=2400,lf=2401,cf=2402,T_=2500,Yi=3e3,et=3001,E_=3200,A_=3201,Tc=0,C_=1,Hn="srgb",Gi="srgb-linear",Ba=7680,L_=519,uf=35044,ff="300 es",Gl=1035;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hf=1234567;const ws=Math.PI/180,Ns=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Ec(i,e){return(i%e+e)%e}function P_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function R_(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function D_(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function I_(i,e=1){return e-Math.abs(Ec(i,e*2)-e)}function F_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function N_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U_(i,e){return i+Math.random()*(e-i)}function z_(i){return i*(.5-Math.random())}function B_(i){i!==void 0&&(hf=i);let e=hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k_(i){return i*ws}function V_(i){return i*Ns}function Hl(i){return(i&i-1)===0&&i!==0}function Bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ko(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function G_(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vs(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ln=Object.freeze({__proto__:null,DEG2RAD:ws,RAD2DEG:Ns,generateUUID:Si,clamp:gt,euclideanModulo:Ec,mapLinear:P_,inverseLerp:R_,lerp:Ss,damp:D_,pingpong:I_,smoothstep:F_,smootherstep:O_,randInt:N_,randFloat:U_,randFloatSpread:z_,seededRandom:B_,degToRad:k_,radToDeg:V_,isPowerOfTwo:Hl,ceilPowerOfTwo:Bd,floorPowerOfTwo:Ko,setQuaternionFromProperEuler:G_,normalize:It,denormalize:vs});class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],m=r[0],p=r[3],v=r[6],x=r[1],b=r[4],T=r[7],y=r[2],P=r[5],D=r[8];return s[0]=o*m+a*x+l*y,s[3]=o*p+a*b+l*P,s[6]=o*v+a*T+l*D,s[1]=c*m+u*x+f*y,s[4]=c*p+u*b+f*P,s[7]=c*v+u*T+f*D,s[2]=h*m+d*x+g*y,s[5]=h*p+d*b+g*P,s[8]=h*v+d*T+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ka={[Hn]:{[Gi]:ji},[Gi]:{[Hn]:Oo}},cn={legacyMode:!0,get workingColorSpace(){return Gi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ka[e]&&ka[e][t]!==void 0){const n=ka[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},un={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function so(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Gi){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Gi){if(e=Ec(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Va(o,s,e+1/3),this.g=Va(o,s,e),this.b=Va(o,s,e-1/3)}return cn.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,cn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,cn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,cn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,cn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Hn){const n=Vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return cn.fromWorkingColorSpace(so(this,ht),e),gt(ht.r*255,0,255)<<16^gt(ht.g*255,0,255)<<8^gt(ht.b*255,0,255)<<0}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gi){cn.fromWorkingColorSpace(so(this,ht),t);const n=ht.r,r=ht.g,s=ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gi){return cn.fromWorkingColorSpace(so(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Hn){return cn.fromWorkingColorSpace(so(this,ht),e),e!==Hn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(ro);const n=Ss(un.h,ro.h,t),r=Ss(un.s,ro.s,t),s=Ss(un.l,ro.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Vd;let sr;class Gd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Us("canvas")),sr.width=e.width,sr.height=e.height;const n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Hd{constructor(e=null){this.isSource=!0,this.uuid=Si(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ga(r[o].image)):s.push(Ga(r[o]))}else s=Ga(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H_=0;class Pt extends Zi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Gt,r=Gt,s=Qt,o=va,a=mn,l=qi,c=1,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Si(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fs:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fs:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ud;class Ye{constructor(e=0,t=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,T=(d+1)/2,y=(v+1)/2,P=(u+h)/4,D=(f+m)/4,_=(g+p)/4;return b>T&&b>y?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=P/n,s=D/n):T>y?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=P/r,s=_/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=D/s,r=_/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-m)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $i extends Zi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class W_ extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==d||u!==g){let p=1-a;const v=l*h+c*d+u*g+f*m,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const y=Math.sqrt(b),P=Math.atan2(y,v*x);p=Math.sin(p*P)/y,a=Math.sin(a*P)/y}const T=a*x;if(l=l*p+h*T,c=c*p+d*T,u=u*p+g*T,f=f*p+m*T,p===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new O,df=new tn;class js{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pi)}else n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox),Wa.applyMatrix4(e.matrixWorld),this.union(Wa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),oo.subVectors(this.max,ls),or.subVectors(e.a,ls),ar.subVectors(e.b,ls),lr.subVectors(e.c,ls),ti.subVectors(ar,or),ni.subVectors(lr,ar),Ri.subVectors(or,lr);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ri.z,Ri.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ri.z,0,-Ri.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ri.y,Ri.x,0];return!Xa(t,or,ar,lr,oo)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,or,ar,lr,oo))?!1:(ao.crossVectors(ti,ni),t=[ao.x,ao.y,ao.z],Xa(t,or,ar,lr,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new O,new O,new O,new O,new O,new O,new O,new O],Pi=new O,Wa=new js,or=new O,ar=new O,lr=new O,ti=new O,ni=new O,Ri=new O,ls=new O,oo=new O,ao=new O,Di=new O;function Xa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Di.fromArray(i,s);const a=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const X_=new js,pf=new O,lo=new O,ja=new O;class xa{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):X_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(ja.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?lo.set(0,0,1).multiplyScalar(e.radius):lo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(pf.copy(e.center).add(lo)),this.expandByPoint(pf.copy(e.center).sub(lo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new O,qa=new O,co=new O,ii=new O,Ya=new O,uo=new O,$a=new O;class Ac{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qa.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=ii.dot(this.direction),l=-ii.dot(co),c=ii.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(co).multiplyScalar(h).add(qa),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){Ya.subVectors(t,e),uo.subVectors(n,e),$a.crossVectors(Ya,uo);let o=this.direction.dot($a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(ii,uo));if(l<0)return null;const c=a*this.direction.dot(Ya.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot($a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,q_)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),ri.crossVectors(n,Bt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),ri.crossVectors(n,Bt)),ri.normalize(),fo.crossVectors(Bt,ri),r[0]=ri.x,r[4]=fo.x,r[8]=Bt.x,r[1]=ri.y,r[5]=fo.y,r[9]=Bt.y,r[2]=ri.z,r[6]=fo.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],x=n[3],b=n[7],T=n[11],y=n[15],P=r[0],D=r[4],_=r[8],S=r[12],L=r[1],q=r[5],Q=r[9],U=r[13],F=r[2],H=r[6],Y=r[10],K=r[14],V=r[3],z=r[7],X=r[11],le=r[15];return s[0]=o*P+a*L+l*F+c*V,s[4]=o*D+a*q+l*H+c*z,s[8]=o*_+a*Q+l*Y+c*X,s[12]=o*S+a*U+l*K+c*le,s[1]=u*P+f*L+h*F+d*V,s[5]=u*D+f*q+h*H+d*z,s[9]=u*_+f*Q+h*Y+d*X,s[13]=u*S+f*U+h*K+d*le,s[2]=g*P+m*L+p*F+v*V,s[6]=g*D+m*q+p*H+v*z,s[10]=g*_+m*Q+p*Y+v*X,s[14]=g*S+m*U+p*K+v*le,s[3]=x*P+b*L+T*F+y*V,s[7]=x*D+b*q+T*H+y*z,s[11]=x*_+b*Q+T*Y+y*X,s[15]=x*S+b*U+T*K+y*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+m*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+v*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],x=f*p*c-m*h*c+m*l*d-a*p*d-f*l*v+a*h*v,b=g*h*c-u*p*c-g*l*d+o*p*d+u*l*v-o*h*v,T=u*m*c-g*f*c+g*a*d-o*m*d-u*a*v+o*f*v,y=g*f*l-u*m*l-g*a*h+o*m*h+u*a*p-o*f*p,P=t*x+n*b+r*T+s*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=x*D,e[1]=(m*h*s-f*p*s-m*r*d+n*p*d+f*r*v-n*h*v)*D,e[2]=(a*p*s-m*l*s+m*r*c-n*p*c-a*r*v+n*l*v)*D,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*D,e[4]=b*D,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*v+t*h*v)*D,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*D,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*D,e[8]=T*D,e[9]=(g*f*s-u*m*s-g*n*d+t*m*d+u*n*v-t*f*v)*D,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*v+t*a*v)*D,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*D,e[12]=y*D,e[13]=(u*m*r-g*f*r+g*n*h-t*m*h-u*n*p+t*f*p)*D,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*p-t*a*p)*D,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,m=o*u,p=o*f,v=a*f,x=l*c,b=l*u,T=l*f,y=n.x,P=n.y,D=n.z;return r[0]=(1-(m+v))*y,r[1]=(d+T)*y,r[2]=(g-b)*y,r[3]=0,r[4]=(d-T)*P,r[5]=(1-(h+v))*P,r[6]=(p+x)*P,r[7]=0,r[8]=(g+b)*D,r[9]=(p-x)*D,r[10]=(1-(h+m))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/o,f=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,h=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new O,fn=new Pe,j_=new O(0,0,0),q_=new O(1,1,1),ri=new O,fo=new O,Bt=new O,mf=new Pe,gf=new tn;class Xt{constructor(e=0,t=0,n=0,r=Xt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Xt.DefaultOrder="XYZ";Xt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const _f=new O,ur=new tn,Un=new Pe,ho=new O,cs=new O,$_=new O,K_=new tn,vf=new O(1,0,0),xf=new O(0,1,0),yf=new O(0,0,1),Z_={type:"added"},Mf={type:"removed"};class it extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DefaultUp.clone();const e=new O,t=new Xt,n=new tn,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Wt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=it.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DefaultMatrixWorldAutoUpdate,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(cs,ho,this.up):Un.lookAt(ho,cs,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Un),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Z_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Mf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}it.DefaultUp=new O(0,1,0);it.DefaultMatrixAutoUpdate=!0;it.DefaultMatrixWorldAutoUpdate=!0;const hn=new O,zn=new O,Ka=new O,Bn=new O,fr=new O,hr=new O,bf=new O,Za=new O,Ja=new O,Qa=new O;class Wn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hn.subVectors(r,t),zn.subVectors(n,t),Ka.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(zn),l=hn.dot(Ka),c=zn.dot(zn),u=zn.dot(Ka),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Bn),l.set(0,0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),zn.subVectors(e,t),hn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Wn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,n),hr.subVectors(s,n),Za.subVectors(e,n);const l=fr.dot(Za),c=hr.dot(Za);if(l<=0&&c<=0)return t.copy(n);Ja.subVectors(e,r);const u=fr.dot(Ja),f=hr.dot(Ja);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(fr,o);Qa.subVectors(e,s);const d=fr.dot(Qa),g=hr.dot(Qa);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hr,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return bf.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(bf,a);const v=1/(p+m+h);return o=m*v,a=h*v,t.copy(n).addScaledVector(fr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let J_=0;class Ji extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Dr,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Od,this.blendDst=Nd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zo extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new O,po=new De;class Rn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=uf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xd extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Q_=0;const Zt=new Pe,el=new it,dr=new O,kt=new js,us=new js,pt=new O;class nn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Xd:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(kt.min,us.min),kt.expandByPoint(pt),pt.addVectors(kt.max,us.max),kt.expandByPoint(pt)):(kt.expandByPoint(us.min),kt.expandByPoint(us.max))}kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),pt.add(dr)),r=Math.max(r,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new O,u[L]=new O;const f=new O,h=new O,d=new O,g=new De,m=new De,p=new De,v=new O,x=new O;function b(L,q,Q){f.fromArray(r,L*3),h.fromArray(r,q*3),d.fromArray(r,Q*3),g.fromArray(o,L*2),m.fromArray(o,q*2),p.fromArray(o,Q*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const U=1/(m.x*p.y-p.x*m.y);!isFinite(U)||(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(U),x.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(U),c[L].add(v),c[q].add(v),c[Q].add(v),u[L].add(x),u[q].add(x),u[Q].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let L=0,q=T.length;L<q;++L){const Q=T[L],U=Q.start,F=Q.count;for(let H=U,Y=U+F;H<Y;H+=3)b(n[H+0],n[H+1],n[H+2])}const y=new O,P=new O,D=new O,_=new O;function S(L){D.fromArray(s,L*3),_.copy(D);const q=c[L];y.copy(q),y.sub(D.multiplyScalar(D.dot(q))).normalize(),P.crossVectors(_,q);const U=P.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=U}for(let L=0,q=T.length;L<q;++L){const Q=T[L],U=Q.start,F=Q.count;for(let H=U,Y=U+F;H<Y;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let v=0;v<u;v++)h[g++]=c[d++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const wf=new Pe,pr=new Ac,tl=new xa,si=new O,oi=new O,ai=new O,nl=new O,il=new O,rl=new O,mo=new O,go=new O,_o=new O,vo=new De,xo=new De,yo=new De,sl=new O,Mo=new O;class rn extends it{constructor(e=new nn,t=new Zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),e.ray.intersectsSphere(tl)===!1)||(wf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(wf),n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),T=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let y=b,P=T;y<P;y+=3){const D=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);o=bo(this,x,e,pr,l,c,u,f,h,D,_,S),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const b=a.getX(v),T=a.getX(v+1),y=a.getX(v+2);o=bo(this,r,e,pr,l,c,u,f,h,b,T,y),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],x=r[v.materialIndex],b=Math.max(v.start,g.start),T=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let y=b,P=T;y<P;y+=3){const D=y,_=y+1,S=y+2;o=bo(this,x,e,pr,l,c,u,f,h,D,_,S),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,x=p;v<x;v+=3){const b=v,T=v+1,y=v+2;o=bo(this,r,e,pr,l,c,u,f,h,b,T,y),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function ev(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==pi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:i}}function bo(i,e,t,n,r,s,o,a,l,c,u,f){si.fromBufferAttribute(r,c),oi.fromBufferAttribute(r,u),ai.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){mo.set(0,0,0),go.set(0,0,0),_o.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=h[g],v=s[g];p!==0&&(nl.fromBufferAttribute(v,c),il.fromBufferAttribute(v,u),rl.fromBufferAttribute(v,f),o?(mo.addScaledVector(nl,p),go.addScaledVector(il,p),_o.addScaledVector(rl,p)):(mo.addScaledVector(nl.sub(si),p),go.addScaledVector(il.sub(oi),p),_o.addScaledVector(rl.sub(ai),p)))}si.add(mo),oi.add(go),ai.add(_o)}i.isSkinnedMesh&&(i.boneTransform(c,si),i.boneTransform(u,oi),i.boneTransform(f,ai));const d=ev(i,e,t,n,si,oi,ai,sl);if(d){a&&(vo.fromBufferAttribute(a,c),xo.fromBufferAttribute(a,u),yo.fromBufferAttribute(a,f),d.uv=Wn.getUV(sl,si,oi,ai,vo,xo,yo,new De)),l&&(vo.fromBufferAttribute(l,c),xo.fromBufferAttribute(l,u),yo.fromBufferAttribute(l,f),d.uv2=Wn.getUV(sl,si,oi,ai,vo,xo,yo,new De));const g={a:c,b:u,c:f,normal:new O,materialIndex:0};Wn.getNormal(si,oi,ai,g.normal),d.face=g}return d}class Ki extends nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(f,2));function g(m,p,v,x,b,T,y,P,D,_,S){const L=T/D,q=y/_,Q=T/2,U=y/2,F=P/2,H=D+1,Y=_+1;let K=0,V=0;const z=new O;for(let X=0;X<Y;X++){const le=X*q-U;for(let ae=0;ae<H;ae++){const oe=ae*L-Q;z[m]=oe*x,z[p]=le*b,z[v]=F,c.push(z.x,z.y,z.z),z[m]=0,z[p]=0,z[v]=P>0?1:-1,u.push(z.x,z.y,z.z),f.push(ae/D),f.push(1-X/_),K+=1}}for(let X=0;X<_;X++)for(let le=0;le<D;le++){const ae=h+le+H*X,oe=h+le+H*(X+1),ve=h+(le+1)+H*(X+1),k=h+(le+1)+H*X;l.push(ae,oe,k),l.push(oe,ve,k),V+=6}a.addGroup(d,V,S),d+=V,h+=K}}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const r in n)e[r]=n[r]}return e}function tv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const jd={clone:Vr,merge:yt};var nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nv,this.fragmentShader=iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qd extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends qd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=90,gr=1;class rv extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ct(mr,gr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(1,0,0)),this.add(r);const s=new Ct(mr,gr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);const o=new Ct(mr,gr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new Ct(mr,gr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new Ct(mr,gr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new Ct(mr,gr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Yd extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sv extends $i{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:xi});s.uniforms.tEquirect.value=t;const o=new rn(r,s),a=t.minFilter;return t.minFilter===va&&(t.minFilter=Qt),new rv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ol=new O,ov=new O,av=new Wt;class Oi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ol.subVectors(n,t).cross(ov.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ol),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||av.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new xa,wo=new O;class Pc{constructor(e=new Oi,t=new Oi,n=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],x=n[14],b=n[15];return t[0].setComponents(a-r,f-l,m-h,b-p).normalize(),t[1].setComponents(a+r,f+l,m+h,b+p).normalize(),t[2].setComponents(a+s,f+c,m+d,b+v).normalize(),t[3].setComponents(a-s,f-c,m-d,b-v).normalize(),t[4].setComponents(a-o,f-u,m-g,b-x).normalize(),t[5].setComponents(a+o,f+u,m+g,b+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $d(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function lv(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Rc extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const x=v*h-o;for(let b=0;b<c;b++){const T=b*f-s;g.push(T,-x,0),m.push(0,0,1),p.push(b/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const b=x+c*v,T=x+c*(v+1),y=x+1+c*(v+1),P=x+1+c*v;d.push(b,T,P),d.push(T,y,P)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(m,3)),this.setAttribute("uv",new Nt(p,2))}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv="vec3 transformed = vec3( position );",gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,rx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Qx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ey=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ty=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ny=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,iy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ry=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,py=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_y=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ey=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Py=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Uy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:fv,alphatest_pars_fragment:hv,aomap_fragment:dv,aomap_pars_fragment:pv,begin_vertex:mv,beginnormal_vertex:gv,bsdfs:_v,iridescence_fragment:vv,bumpmap_pars_fragment:xv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Mv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:wv,color_fragment:Sv,color_pars_fragment:Tv,color_pars_vertex:Ev,color_vertex:Av,common:Cv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Dv,emissivemap_fragment:Iv,emissivemap_pars_fragment:Fv,encodings_fragment:Ov,encodings_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:zv,envmap_pars_fragment:Bv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Jv,envmap_vertex:Vv,fog_vertex:Gv,fog_pars_vertex:Hv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:jv,lightmap_fragment:qv,lightmap_pars_fragment:Yv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Kv,lights_pars_begin:Zv,lights_toon_fragment:Qv,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:sx,lights_fragment_maps:ox,lights_fragment_end:ax,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:fx,map_fragment:hx,map_pars_fragment:dx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:_x,morphcolor_vertex:vx,morphnormal_vertex:xx,morphtarget_pars_vertex:yx,morphtarget_vertex:Mx,normal_fragment_begin:bx,normal_fragment_maps:wx,normal_pars_fragment:Sx,normal_pars_vertex:Tx,normal_vertex:Ex,normalmap_pars_fragment:Ax,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Rx,output_fragment:Dx,packing:Ix,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Nx,dithering_pars_fragment:Ux,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Hx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:jx,skinnormal_vertex:qx,specularmap_fragment:Yx,specularmap_pars_fragment:$x,tonemapping_fragment:Kx,tonemapping_pars_fragment:Zx,transmission_fragment:Jx,transmission_pars_fragment:Qx,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,uv2_pars_fragment:iy,uv2_pars_vertex:ry,uv2_vertex:sy,worldpos_vertex:oy,background_vert:ay,background_frag:ly,cube_vert:cy,cube_frag:uy,depth_vert:fy,depth_frag:hy,distanceRGBA_vert:dy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:_y,linedashed_frag:vy,meshbasic_vert:xy,meshbasic_frag:yy,meshlambert_vert:My,meshlambert_frag:by,meshmatcap_vert:wy,meshmatcap_frag:Sy,meshnormal_vert:Ty,meshnormal_frag:Ey,meshphong_vert:Ay,meshphong_frag:Cy,meshphysical_vert:Ly,meshphysical_frag:Py,meshtoon_vert:Ry,meshtoon_frag:Dy,points_vert:Iy,points_frag:Fy,shadow_vert:Oy,shadow_frag:Ny,sprite_vert:Uy,sprite_frag:zy},xe={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},An={basic:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:yt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:yt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:yt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},cube:{uniforms:yt([xe.envmap,{opacity:{value:1}}]),vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:yt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:yt([xe.lights,xe.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};An.physical={uniforms:yt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};function By(i,e,t,n,r,s){const o=new Fe(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const b=i.xr,T=b.getSession&&b.getSession();T&&T.environmentBlendMode==="additive"&&(x=null),x===null?g(o,a):x&&x.isColor&&(g(x,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_a)?(c===void 0&&(c=new rn(new Ki(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Vr(An.cube.uniforms),vertexShader:An.cube.vertexShader,fragmentShader:An.cube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rn(new Rc(2,2),new Yn({name:"BackgroundMaterial",uniforms:Vr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function ky(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(F,H,Y,K,V){let z=!1;if(o){const X=m(K,Y,H);c!==X&&(c=X,d(c.object)),z=v(F,K,Y,V),z&&x(F,K,Y,V)}else{const X=H.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==X)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=X,z=!0)}V!==null&&t.update(V,34963),(z||u)&&(u=!1,_(F,H,Y,K),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,H,Y){const K=Y.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let z=V[H.id];z===void 0&&(z={},V[H.id]=z);let X=z[K];return X===void 0&&(X=p(h()),z[K]=X),X}function p(F){const H=[],Y=[],K=[];for(let V=0;V<r;V++)H[V]=0,Y[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:K,object:F,attributes:{},index:null}}function v(F,H,Y,K){const V=c.attributes,z=H.attributes;let X=0;const le=Y.getAttributes();for(const ae in le)if(le[ae].location>=0){const ve=V[ae];let k=z[ae];if(k===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(k=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(k=F.instanceColor)),ve===void 0||ve.attribute!==k||k&&ve.data!==k.data)return!0;X++}return c.attributesNum!==X||c.index!==K}function x(F,H,Y,K){const V={},z=H.attributes;let X=0;const le=Y.getAttributes();for(const ae in le)if(le[ae].location>=0){let ve=z[ae];ve===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor));const k={};k.attribute=ve,ve&&ve.data&&(k.data=ve.data),V[ae]=k,X++}c.attributes=V,c.attributesNum=X,c.index=K}function b(){const F=c.newAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]=0}function T(F){y(F,0)}function y(F,H){const Y=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;Y[F]=1,K[F]===0&&(i.enableVertexAttribArray(F),K[F]=1),V[F]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),V[F]=H)}function P(){const F=c.newAttributes,H=c.enabledAttributes;for(let Y=0,K=H.length;Y<K;Y++)H[Y]!==F[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function D(F,H,Y,K,V,z){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(F,H,Y,V,z):i.vertexAttribPointer(F,H,Y,K,V,z)}function _(F,H,Y,K){if(n.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const V=K.attributes,z=Y.getAttributes(),X=H.defaultAttributeValues;for(const le in z){const ae=z[le];if(ae.location>=0){let oe=V[le];if(oe===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),oe!==void 0){const ve=oe.normalized,k=oe.itemSize,B=t.get(oe);if(B===void 0)continue;const se=B.buffer,ce=B.type,be=B.bytesPerElement;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Te=pe.stride,_e=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let A=0;A<ae.locationSize;A++)y(ae.location+A,pe.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let A=0;A<ae.locationSize;A++)T(ae.location+A);i.bindBuffer(34962,se);for(let A=0;A<ae.locationSize;A++)D(ae.location+A,k/ae.locationSize,ce,ve,Te*be,(_e+k/ae.locationSize*A)*be)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<ae.locationSize;pe++)y(ae.location+pe,oe.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<ae.locationSize;pe++)T(ae.location+pe);i.bindBuffer(34962,se);for(let pe=0;pe<ae.locationSize;pe++)D(ae.location+pe,k/ae.locationSize,ce,ve,k*be,k/ae.locationSize*pe*be)}}else if(X!==void 0){const ve=X[le];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(ae.location,ve);break;case 3:i.vertexAttrib3fv(ae.location,ve);break;case 4:i.vertexAttrib4fv(ae.location,ve);break;default:i.vertexAttrib1fv(ae.location,ve)}}}}P()}function S(){Q();for(const F in a){const H=a[F];for(const Y in H){const K=H[Y];for(const V in K)g(K[V].object),delete K[V];delete H[Y]}delete a[F]}}function L(F){if(a[F.id]===void 0)return;const H=a[F.id];for(const Y in H){const K=H[Y];for(const V in K)g(K[V].object),delete K[V];delete H[Y]}delete a[F.id]}function q(F){for(const H in a){const Y=a[H];if(Y[F.id]===void 0)continue;const K=Y[F.id];for(const V in K)g(K[V].object),delete K[V];delete Y[F.id]}}function Q(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:b,enableAttribute:T,disableUnusedAttributes:P}}function Vy(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Gy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),x=i.getParameter(36349),b=h>0,T=o||e.has("OES_texture_float"),y=b&&T,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:y,maxSamples:P}}function Hy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Oi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,d,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,v=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,b=x*4;let T=v.clippingState||null;l.value=T,T=u(g,h,b,d);for(let y=0;y!==b;++y)T[y]=t[y];v.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<v)&&(p=new Float32Array(v));for(let b=0,T=d;b!==m;++b,T+=4)o.copy(f[b]).applyMatrix4(x,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Wy(i){let e=new WeakMap;function t(o,a){return a===qo?o.mapping=zr:a===kl&&(o.mapping=Br),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qo||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sv(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Dc extends qd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,Sf=[.125,.215,.35,.446,.526,.582],ki=20,al=new Dc,Tf=new Fe;let ll=null;const Ni=(1+Math.sqrt(5))/2,vr=1/Ni,Ef=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Ni,vr),new O(0,Ni,-vr),new O(vr,0,Ni),new O(-vr,0,Ni),new O(Ni,vr,0),new O(-Ni,vr,0)];class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ll=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll),e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Os,format:mn,encoding:Yi,depthBuffer:!1},r=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(s)),this._blurMaterial=jy(s,e,t)}return r}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tf),u.toneMapping=jn,u.autoClear=!1;const d=new Zo({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new rn(new Ki,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Tf),m=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const b=this._cubeSize;So(r,x*b,v>2?b:0,b,b),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zr||e.mapping===Br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;So(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ef[(r-1)%Ef.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new rn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ki-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const v=[];let x=0;for(let D=0;D<ki;++D){const _=D/m,S=Math.exp(-_*_/2);v.push(S),D===0?x+=S:D<p&&(x+=2*S)}for(let D=0;D<v.length;D++)v[D]=v[D]/x;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const T=this._sizeLods[r],y=3*T*(r>b-Er?r-b+Er:0),P=4*(this._cubeSize-T);So(t,y,P,3*T,2*T),l.setRenderTarget(t),l.render(f,al)}}function Xy(i){const e=[],t=[],n=[];let r=i;const s=i-Er+1+Sf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Er?l=Sf[o-i+Er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,v=1,x=new Float32Array(m*g*d),b=new Float32Array(p*g*d),T=new Float32Array(v*g*d);for(let P=0;P<d;P++){const D=P%3*2/3-1,_=P>2?0:-1,S=[D,_,0,D+2/3,_,0,D+2/3,_+1,0,D,_,0,D+2/3,_+1,0,D,_+1,0];x.set(S,m*g*P),b.set(h,p*g*P);const L=[P,P,P,P,P,P];T.set(L,v*g*P)}const y=new nn;y.setAttribute("position",new Rn(x,m)),y.setAttribute("uv",new Rn(b,p)),y.setAttribute("faceIndex",new Rn(T,v)),e.push(y),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(i,e,t){const n=new $i(i,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function So(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jy(i,e,t){const n=new Float32Array(ki),r=new O(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Lf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Pf(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qo||l===kl,u=l===zr||l===Br;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Af(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Af(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $y(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let b=0,T=x.length;b<T;b+=3){const y=x[b+0],P=x[b+1],D=x[b+2];h.push(y,P,P,D,D,y)}}else{const x=g.array;m=g.version;for(let b=0,T=x.length/3-1;b<T;b+=3){const y=b+0,P=b+1,D=b+2;h.push(y,P,P,D,D,y)}}const p=new(kd(h)?Xd:Lc)(h,1);p.version=m;const v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ky(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Zy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Jy(i,e){return i[0]-e[0]}function Qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eM(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==p){let Y=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var g=Y;v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let L=0;T===!0&&(L=1),y===!0&&(L=2),P===!0&&(L=3);let q=u.attributes.position.count*L,Q=1;q>e.maxTextureSize&&(Q=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*Q*4*p),F=new Wd(U,q,Q,p);F.type=mi,F.needsUpdate=!0;const H=L*4;for(let K=0;K<p;K++){const V=D[K],z=_[K],X=S[K],le=q*Q*4*K;for(let ae=0;ae<V.count;ae++){const oe=ae*H;T===!0&&(o.fromBufferAttribute(V,ae),U[le+oe+0]=o.x,U[le+oe+1]=o.y,U[le+oe+2]=o.z,U[le+oe+3]=0),y===!0&&(o.fromBufferAttribute(z,ae),U[le+oe+4]=o.x,U[le+oe+5]=o.y,U[le+oe+6]=o.z,U[le+oe+7]=0),P===!0&&(o.fromBufferAttribute(X,ae),U[le+oe+8]=o.x,U[le+oe+9]=o.y,U[le+oe+10]=o.z,U[le+oe+11]=X.itemSize===4?o.w:1)}}v={count:p,texture:F,size:new De(q,Q)},s.set(u,v),u.addEventListener("dispose",Y)}let x=0;for(let T=0;T<d.length;T++)x+=d[T];const b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let y=0;y<m;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<m;y++){const P=p[y];P[0]=y,P[1]=d[y]}p.sort(Qy);for(let y=0;y<8;y++)y<m&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Jy);const v=u.morphAttributes.position,x=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const P=a[y],D=P[0],_=P[1];D!==Number.MAX_SAFE_INTEGER&&_?(v&&u.getAttribute("morphTarget"+y)!==v[D]&&u.setAttribute("morphTarget"+y,v[D]),x&&u.getAttribute("morphNormal"+y)!==x[D]&&u.setAttribute("morphNormal"+y,x[D]),r[y]=_,b+=_):(v&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const T=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function tM(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Kd=new Pt,Zd=new Wd,Jd=new W_,Qd=new Yd,Rf=[],Df=[],If=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function $r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Rf[r];if(s===void 0&&(s=new Float32Array(r),Rf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ya(i,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function oM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Rt(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),Dt(t,n)}}function aM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Rt(t,n))return;Ff.set(n),i.uniformMatrix3fv(this.addr,!1,Ff),Dt(t,n)}}function lM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Rt(t,n))return;If.set(n),i.uniformMatrix4fv(this.addr,!1,If),Dt(t,n)}}function cM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uM(i,e){const t=this.cache;Rt(t,e)||(i.uniform2iv(this.addr,e),Dt(t,e))}function fM(i,e){const t=this.cache;Rt(t,e)||(i.uniform3iv(this.addr,e),Dt(t,e))}function hM(i,e){const t=this.cache;Rt(t,e)||(i.uniform4iv(this.addr,e),Dt(t,e))}function dM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pM(i,e){const t=this.cache;Rt(t,e)||(i.uniform2uiv(this.addr,e),Dt(t,e))}function mM(i,e){const t=this.cache;Rt(t,e)||(i.uniform3uiv(this.addr,e),Dt(t,e))}function gM(i,e){const t=this.cache;Rt(t,e)||(i.uniform4uiv(this.addr,e),Dt(t,e))}function _M(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Kd,r)}function vM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jd,r)}function xM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qd,r)}function yM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zd,r)}function MM(i){switch(i){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return oM;case 35675:return aM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return fM;case 35669:case 35673:return hM;case 5125:return dM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function bM(i,e){i.uniform1fv(this.addr,e)}function wM(i,e){const t=$r(e,this.size,2);i.uniform2fv(this.addr,t)}function SM(i,e){const t=$r(e,this.size,3);i.uniform3fv(this.addr,t)}function TM(i,e){const t=$r(e,this.size,4);i.uniform4fv(this.addr,t)}function EM(i,e){const t=$r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AM(i,e){const t=$r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CM(i,e){const t=$r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function LM(i,e){i.uniform1iv(this.addr,e)}function PM(i,e){i.uniform2iv(this.addr,e)}function RM(i,e){i.uniform3iv(this.addr,e)}function DM(i,e){i.uniform4iv(this.addr,e)}function IM(i,e){i.uniform1uiv(this.addr,e)}function FM(i,e){i.uniform2uiv(this.addr,e)}function OM(i,e){i.uniform3uiv(this.addr,e)}function NM(i,e){i.uniform4uiv(this.addr,e)}function UM(i,e,t){const n=e.length,r=ya(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Kd,r[s])}function zM(i,e,t){const n=e.length,r=ya(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Jd,r[s])}function BM(i,e,t){const n=e.length,r=ya(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Qd,r[s])}function kM(i,e,t){const n=e.length,r=ya(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Zd,r[s])}function VM(i){switch(i){case 5126:return bM;case 35664:return wM;case 35665:return SM;case 35666:return TM;case 35674:return EM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return LM;case 35667:case 35671:return PM;case 35668:case 35672:return RM;case 35669:case 35673:return DM;case 5125:return IM;case 36294:return FM;case 36295:return OM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return kM}}class GM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=MM(t.type)}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=VM(t.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Nf(i,e){i.seq.push(e),i.map[e.id]=e}function XM(i,e,t){const n=i.name,r=n.length;for(cl.lastIndex=0;;){const s=cl.exec(n),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nf(t,c===void 0?new GM(a,i,e):new HM(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new WM(a),Nf(t,f)),t=f}}}class No{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);XM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Uf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let jM=0;function qM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function YM(i){switch(i){case Yi:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function zf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qM(i.getShaderSource(e),o)}else return r}function $M(i,e){const t=YM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function KM(i,e){let t;switch(e){case r_:t="Linear";break;case s_:t="Reinhard";break;case o_:t="OptimizedCineon";break;case a_:t="ACESFilmic";break;case l_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ZM(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function JM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function QM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xs(i){return i!==""}function Bf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(eb,tb)}function tb(i,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wl(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(nb,ib)}function ib(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zr:case Br:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function ab(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function lb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cb(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rb(t),c=sb(t),u=ob(t),f=ab(t),h=lb(t),d=t.isWebGL2?"":ZM(t),g=JM(s),m=r.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(xs).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(xs).join(`
`),v.length>0&&(v+=`
`)):(p=[Gf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),v=[d,Gf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ke.tonemapping_pars_fragment:"",t.toneMapping!==jn?KM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,$M("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=Wl(o),o=Bf(o,t),o=kf(o,t),a=Wl(a),a=Bf(a,t),a=kf(a,t),o=Vf(o),a=Vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+p+o,T=x+v+a,y=Uf(r,35633,b),P=Uf(r,35632,T);if(r.attachShader(m,y),r.attachShader(m,P),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(y).trim(),q=r.getShaderInfoLog(P).trim();let Q=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){Q=!1;const F=zf(r,y,"vertex"),H=zf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+F+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:L,prefix:p},fragmentShader:{log:q,prefix:v}})}r.deleteShader(y),r.deleteShader(P);let D;this.getUniforms=function(){return D===void 0&&(D=new No(r,m)),D};let _;return this.getAttributes=function(){return _===void 0&&(_=QM(r,m)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=P,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hb(e),t.set(e,n)),n}}class hb{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}}function db(i,e,t,n,r,s,o){const a=new Cc,l=new fb,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,S,L,q,Q){const U=q.fog,F=Q.geometry,H=_.isMeshStandardMaterial?q.environment:null,Y=(_.isMeshStandardMaterial?t:e).get(_.envMap||H),K=!!Y&&Y.mapping===_a?Y.image.height:null,V=g[_.type];_.precision!==null&&(d=r.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=z!==void 0?z.length:0;let le=0;F.morphAttributes.position!==void 0&&(le=1),F.morphAttributes.normal!==void 0&&(le=2),F.morphAttributes.color!==void 0&&(le=3);let ae,oe,ve,k;if(V){const Te=An[V];ae=Te.vertexShader,oe=Te.fragmentShader}else ae=_.vertexShader,oe=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),k=l.getFragmentShaderID(_);const B=i.getRenderTarget(),se=_.alphaTest>0,ce=_.clearcoat>0,be=_.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:_.type,vertexShader:ae,fragmentShader:oe,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:k,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:B===null?i.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Yi,map:!!_.map,matcap:!!_.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===C_,tangentSpaceNormalMap:_.normalMapType===Tc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===et,clearcoat:ce,clearcoatMap:ce&&!!_.clearcoatMap,clearcoatRoughnessMap:ce&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!_.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!_.iridescenceMap,iridescenceThicknessMap:be&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Dr,alphaMap:!!_.alphaMap,alphaTest:se,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!F.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!U,useFog:_.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:jn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pi,flipSided:_.side===jt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(v(S,_),x(S,_),S.push(i.outputEncoding)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputEncoding),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.combine),_.push(S.vertexUvs),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),_.push(a.mask)}function b(_){const S=g[_.type];let L;if(S){const q=An[S];L=jd.clone(q.uniforms)}else L=_.uniforms;return L}function T(_,S){let L;for(let q=0,Q=c.length;q<Q;q++){const U=c[q];if(U.cacheKey===S){L=U,++L.usedTimes;break}}return L===void 0&&(L=new cb(i,S,_,s),c.push(L)),L}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function P(_){l.remove(_)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:y,releaseShaderCache:P,programs:c,dispose:D}}function pb(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function mb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,m,p){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=d,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=m,v.group=p),e++,v}function a(f,h,d,g,m,p){const v=o(f,h,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(f,h,d,g,m,p){const v=o(f,h,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||mb),n.length>1&&n.sort(h||Hf),r.length>1&&r.sort(h||Hf)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Wf,i.set(n,[o])):r>=s.length?(o=new Wf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _b(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function vb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xb=0;function yb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mb(i,e){const t=new _b,n=vb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new Pe,a=new Pe;function l(u,f){let h=0,d=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let m=0,p=0,v=0,x=0,b=0,T=0,y=0,P=0,D=0,_=0;u.sort(yb);const S=f!==!0?Math.PI:1;for(let q=0,Q=u.length;q<Q;q++){const U=u[q],F=U.color,H=U.intensity,Y=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*H*S,d+=F.g*H*S,g+=F.b*H*S;else if(U.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],H);else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const z=U.shadow,X=n.get(U);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,r.directionalShadow[m]=X,r.directionalShadowMap[m]=K,r.directionalShadowMatrix[m]=U.shadow.matrix,T++}r.directional[m]=V,m++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(F).multiplyScalar(H*S),V.distance=Y,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[v]=V;const z=U.shadow;if(U.map&&(r.spotLightMap[D]=U.map,D++,z.updateMatrices(U),U.castShadow&&_++),r.spotLightMatrix[v]=z.matrix,U.castShadow){const X=n.get(U);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,r.spotShadow[v]=X,r.spotShadowMap[v]=K,P++}v++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(F).multiplyScalar(H),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=V,x++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*S),V.distance=U.distance,V.decay=U.decay,U.castShadow){const z=U.shadow,X=n.get(U);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=U.shadow.matrix,y++}r.point[p]=V,p++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(H*S),V.groundColor.copy(U.groundColor).multiplyScalar(H*S),r.hemi[b]=V,b++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==x||L.hemiLength!==b||L.numDirectionalShadows!==T||L.numPointShadows!==y||L.numSpotShadows!==P||L.numSpotMaps!==D)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=x,r.point.length=p,r.hemi.length=b,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=P+D-_,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=_,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=x,L.hemiLength=b,L.numDirectionalShadows=T,L.numPointShadows=y,L.numSpotShadows=P,L.numSpotMaps=D,r.version=xb++)}function c(u,f){let h=0,d=0,g=0,m=0,p=0;const v=f.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const T=u[x];if(T.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),h++}else if(T.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),g++}else if(T.isRectAreaLight){const y=r.rectArea[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(v),a.identity(),o.copy(T.matrixWorld),o.premultiply(v),a.extractRotation(o),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const y=r.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(v),d++}else if(T.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Xf(i,e){const t=new Mb(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bb(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Xf(i,e),t.set(s,[l])):o>=a.length?(l=new Xf(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class wb extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(i,e,t){let n=new Pc;const r=new De,s=new De,o=new Ye,a=new wb({depthPacking:A_}),l=new Sb,c={},u=t.maxTextureSize,f={0:jt,1:Ur,2:pi},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Tb,fragmentShader:Eb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new rn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd,this.render=function(T,y,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const D=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),L=i.state;L.setBlending(xi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let q=0,Q=T.length;q<Q;q++){const U=T[q],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const H=F.getFrameExtents();if(r.multiply(H),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,F.mapSize.y=s.y)),F.map===null){const K=this.type!==_s?{minFilter:Mt,magFilter:Mt}:{};F.map=new $i(r.x,r.y,K),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const Y=F.getViewportCount();for(let K=0;K<Y;K++){const V=F.getViewport(K);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),L.viewport(o),F.updateMatrices(U,K),n=F.getFrustum(),b(y,P,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===_s&&v(F,P),F.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(D,_,S)};function v(T,y){const P=e.update(m);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $i(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(y,null,P,h,m,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(y,null,P,d,m,null)}function x(T,y,P,D,_,S){let L=null;const q=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0?L=q:L=P.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const Q=L.uuid,U=y.uuid;let F=c[Q];F===void 0&&(F={},c[Q]=F);let H=F[U];H===void 0&&(H=L.clone(),F[U]=H),L=H}return L.visible=y.visible,L.wireframe=y.wireframe,S===_s?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:f[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,P.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(P.matrixWorld),L.nearDistance=D,L.farDistance=_),L}function b(T,y,P,D,_){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===_s)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const q=e.update(T),Q=T.material;if(Array.isArray(Q)){const U=q.groups;for(let F=0,H=U.length;F<H;F++){const Y=U[F],K=Q[Y.materialIndex];if(K&&K.visible){const V=x(T,K,D,P.near,P.far,_);i.renderBufferDirect(P,null,q,V,T,Y)}}}else if(Q.visible){const U=x(T,Q,D,P.near,P.far,_);i.renderBufferDirect(P,null,q,U,T,null)}}const L=T.children;for(let q=0,Q=L.length;q<Q;q++)b(L[q],y,P,D,_)}}function Cb(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ye=new Ye;let ee=null;const Ae=new Ye(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!I&&(i.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,je,dt,ot,Jn){Jn===!0&&(Ee*=ot,je*=ot,dt*=ot),ye.set(Ee,je,dt,ot),Ae.equals(ye)===!1&&(i.clearColor(Ee,je,dt,ot),Ae.copy(ye))},reset:function(){I=!1,ee=null,Ae.set(-1,0,0,0)}}}function s(){let I=!1,ye=null,ee=null,Ae=null;return{setTest:function(Ee){Ee?se(2929):ce(2929)},setMask:function(Ee){ye!==Ee&&!I&&(i.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(ee!==Ee){if(Ee)switch(Ee){case $0:i.depthFunc(512);break;case K0:i.depthFunc(519);break;case Z0:i.depthFunc(513);break;case Bl:i.depthFunc(515);break;case J0:i.depthFunc(514);break;case Q0:i.depthFunc(518);break;case e_:i.depthFunc(516);break;case t_:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ee=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){Ae!==Ee&&(i.clearDepth(Ee),Ae=Ee)},reset:function(){I=!1,ye=null,ee=null,Ae=null}}}function o(){let I=!1,ye=null,ee=null,Ae=null,Ee=null,je=null,dt=null,ot=null,Jn=null;return{setTest:function(rt){I||(rt?se(2960):ce(2960))},setMask:function(rt){ye!==rt&&!I&&(i.stencilMask(rt),ye=rt)},setFunc:function(rt,Fn,Yt){(ee!==rt||Ae!==Fn||Ee!==Yt)&&(i.stencilFunc(rt,Fn,Yt),ee=rt,Ae=Fn,Ee=Yt)},setOp:function(rt,Fn,Yt){(je!==rt||dt!==Fn||ot!==Yt)&&(i.stencilOp(rt,Fn,Yt),je=rt,dt=Fn,ot=Yt)},setLocked:function(rt){I=rt},setClear:function(rt){Jn!==rt&&(i.clearStencil(rt),Jn=rt)},reset:function(){I=!1,ye=null,ee=null,Ae=null,Ee=null,je=null,dt=null,ot=null,Jn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,v=!1,x=null,b=null,T=null,y=null,P=null,D=null,_=null,S=!1,L=null,q=null,Q=null,U=null,F=null;const H=i.getParameter(35661);let Y=!1,K=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=K>=2);let z=null,X={};const le=i.getParameter(3088),ae=i.getParameter(2978),oe=new Ye().fromArray(le),ve=new Ye().fromArray(ae);function k(I,ye,ee){const Ae=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(I,Ee),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let je=0;je<ee;je++)i.texImage2D(ye+je,0,6408,1,1,0,6408,5121,Ae);return Ee}const B={};B[3553]=k(3553,3553,1),B[34067]=k(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),se(2929),l.setFunc(Bl),te(!1),ie(Ru),se(2884),R(xi);function se(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function be(I,ye){return d[I]!==ye?(i.bindFramebuffer(I,ye),d[I]=ye,n&&(I===36009&&(d[36160]=ye),I===36160&&(d[36009]=ye)),!0):!1}function pe(I,ye){let ee=m,Ae=!1;if(I)if(ee=g.get(ye),ee===void 0&&(ee=[],g.set(ye,ee)),I.isWebGLMultipleRenderTargets){const Ee=I.texture;if(ee.length!==Ee.length||ee[0]!==36064){for(let je=0,dt=Ee.length;je<dt;je++)ee[je]=36064+je;ee.length=Ee.length,Ae=!0}}else ee[0]!==36064&&(ee[0]=36064,Ae=!0);else ee[0]!==1029&&(ee[0]=1029,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Te(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const _e={[Mr]:32774,[z0]:32778,[B0]:32779};if(n)_e[Ou]=32775,_e[Nu]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(_e[Ou]=I.MIN_EXT,_e[Nu]=I.MAX_EXT)}const A={[k0]:0,[V0]:1,[G0]:768,[Od]:770,[Y0]:776,[j0]:774,[W0]:772,[H0]:769,[Nd]:771,[q0]:775,[X0]:773};function R(I,ye,ee,Ae,Ee,je,dt,ot){if(I===xi){v===!0&&(ce(3042),v=!1);return}if(v===!1&&(se(3042),v=!0),I!==U0){if(I!==x||ot!==S){if((b!==Mr||P!==Mr)&&(i.blendEquation(32774),b=Mr,P=Mr),ot)switch(I){case Dr:i.blendFuncSeparate(1,771,1,771);break;case Du:i.blendFunc(1,1);break;case Iu:i.blendFuncSeparate(0,769,0,1);break;case Fu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Dr:i.blendFuncSeparate(770,771,1,771);break;case Du:i.blendFunc(770,1);break;case Iu:i.blendFuncSeparate(0,769,0,1);break;case Fu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,y=null,D=null,_=null,x=I,S=ot}return}Ee=Ee||ye,je=je||ee,dt=dt||Ae,(ye!==b||Ee!==P)&&(i.blendEquationSeparate(_e[ye],_e[Ee]),b=ye,P=Ee),(ee!==T||Ae!==y||je!==D||dt!==_)&&(i.blendFuncSeparate(A[ee],A[Ae],A[je],A[dt]),T=ee,y=Ae,D=je,_=dt),x=I,S=null}function W(I,ye){I.side===pi?ce(2884):se(2884);let ee=I.side===jt;ye&&(ee=!ee),te(ee),I.blending===Dr&&I.transparent===!1?R(xi):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ae=I.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(32926):ce(32926)}function te(I){L!==I&&(I?i.frontFace(2304):i.frontFace(2305),L=I)}function ie(I){I!==F0?(se(2884),I!==q&&(I===Ru?i.cullFace(1029):I===O0?i.cullFace(1028):i.cullFace(1032))):ce(2884),q=I}function fe(I){I!==Q&&(Y&&i.lineWidth(I),Q=I)}function he(I,ye,ee){I?(se(32823),(U!==ye||F!==ee)&&(i.polygonOffset(ye,ee),U=ye,F=ee)):ce(32823)}function de(I){I?se(3089):ce(3089)}function ge(I){I===void 0&&(I=33984+H-1),z!==I&&(i.activeTexture(I),z=I)}function w(I,ye){z===null&&ge();let ee=X[z];ee===void 0&&(ee={type:void 0,texture:void 0},X[z]=ee),(ee.type!==I||ee.texture!==ye)&&(i.bindTexture(I,ye||B[I]),ee.type=I,ee.texture=ye)}function M(){const I=X[z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function E(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function we(I){ve.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function Ce(I,ye){let ee=f.get(ye);ee===void 0&&(ee=new WeakMap,f.set(ye,ee));let Ae=ee.get(I);Ae===void 0&&(Ae=i.getUniformBlockIndex(ye,I.name),ee.set(I,Ae))}function Ne(I,ye){const Ae=f.get(ye).get(I);u.get(I)!==Ae&&(i.uniformBlockBinding(ye,Ae,I.__bindingPointIndex),u.set(I,Ae))}function Ue(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},z=null,X={},d={},g=new WeakMap,m=[],p=null,v=!1,x=null,b=null,T=null,y=null,P=null,D=null,_=null,S=!1,L=null,q=null,Q=null,U=null,F=null,oe.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:se,disable:ce,bindFramebuffer:be,drawBuffers:pe,useProgram:Te,setBlending:R,setMaterial:W,setFlipSided:te,setCullFace:ie,setLineWidth:fe,setPolygonOffset:he,setScissorTest:de,activeTexture:ge,bindTexture:w,unbindTexture:M,compressedTexImage2D:N,texImage2D:Z,texImage3D:me,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:Se,texStorage3D:E,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:ue,scissor:Me,viewport:we,reset:Ue}}function Lb(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return v?new OffscreenCanvas(w,M):Us("canvas")}function b(w,M,N,$){let J=1;if((w.width>$||w.height>$)&&(J=$/Math.max(w.width,w.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ue=M?Ko:Math.floor,Se=ue(J*w.width),E=ue(J*w.height);m===void 0&&(m=x(Se,E));const Z=N?x(Se,E):m;return Z.width=Se,Z.height=E,Z.getContext("2d").drawImage(w,0,0,Se,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Se+"x"+E+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Hl(w.width)&&Hl(w.height)}function y(w){return a?!1:w.wrapS!==Gt||w.wrapT!==Gt||w.minFilter!==Mt&&w.minFilter!==Qt}function P(w,M){return w.generateMipmaps&&M&&w.minFilter!==Mt&&w.minFilter!==Qt}function D(w){i.generateMipmap(w)}function _(w,M,N,$,J=!1){if(a===!1)return M;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue=M;return M===6403&&(N===5126&&(ue=33326),N===5131&&(ue=33325),N===5121&&(ue=33321)),M===33319&&(N===5126&&(ue=33328),N===5131&&(ue=33327),N===5121&&(ue=33323)),M===6408&&(N===5126&&(ue=34836),N===5131&&(ue=34842),N===5121&&(ue=$===et&&J===!1?35907:32856),N===32819&&(ue=32854),N===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function S(w,M,N){return P(w,N)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function L(w){return w===Mt||w===Uu||w===zu?9728:9729}function q(w){const M=w.target;M.removeEventListener("dispose",q),U(M),M.isVideoTexture&&g.delete(M)}function Q(w){const M=w.target;M.removeEventListener("dispose",Q),H(M)}function U(w){const M=n.get(w);if(M.__webglInit===void 0)return;const N=w.source,$=p.get(N);if($){const J=$[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(w),Object.keys($).length===0&&p.delete(N)}n.remove(w)}function F(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const N=w.source,$=p.get(N);delete $[M.__cacheKey],o.memory.textures--}function H(w){const M=w.texture,N=n.get(w),$=n.get(M);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)i.deleteFramebuffer(N.__webglFramebuffer[J]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[J]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,ue=M.length;J<ue;J++){const Se=n.get(M[J]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(w)}let Y=0;function K(){Y=0}function V(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function X(w,M){const N=n.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,N.__webglTexture)}function le(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ce(N,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,N.__webglTexture)}function ae(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){ce(N,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,N.__webglTexture)}function oe(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){be(N,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,N.__webglTexture)}const ve={[Fs]:10497,[Gt]:33071,[Vl]:33648},k={[Mt]:9728,[Uu]:9984,[zu]:9986,[Qt]:9729,[c_]:9985,[va]:9987};function B(w,M,N){if(N?(i.texParameteri(w,10242,ve[M.wrapS]),i.texParameteri(w,10243,ve[M.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,ve[M.wrapR]),i.texParameteri(w,10240,k[M.magFilter]),i.texParameteri(w,10241,k[M.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(M.wrapS!==Gt||M.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,L(M.magFilter)),i.texParameteri(w,10241,L(M.minFilter)),M.minFilter!==Mt&&M.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(M.type===mi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function se(w,M){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",q));const $=M.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const ue=z(M);if(ue!==w.__cacheKey){J[ue]===void 0&&(J[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[ue].usedTimes++;const Se=J[w.__cacheKey];Se!==void 0&&(J[w.__cacheKey].usedTimes--,Se.usedTimes===0&&F(M)),w.__cacheKey=ue,w.__webglTexture=J[ue].texture}return N}function ce(w,M,N){let $=3553;M.isDataArrayTexture&&($=35866),M.isData3DTexture&&($=32879);const J=se(w,M),ue=M.source;if(t.activeTexture(33984+N),t.bindTexture($,w.__webglTexture),ue.version!==ue.__currentVersion||J===!0){i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const Se=y(M)&&T(M.image)===!1;let E=b(M.image,Se,!1,u);E=ge(M,E);const Z=T(E)||a,me=s.convert(M.format,M.encoding);let Me=s.convert(M.type),we=_(M.internalFormat,me,Me,M.encoding,M.isVideoTexture);B($,M,Z);let Ce;const Ne=M.mipmaps,Ue=a&&M.isVideoTexture!==!0,I=ue.__currentVersion===void 0||J===!0,ye=S(M,E,Z);if(M.isDepthTexture)we=6402,a?M.type===mi?we=36012:M.type===Vi?we=33190:M.type===Ir?we=35056:we=33189:M.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Xi&&we===6402&&M.type!==zd&&M.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Vi,Me=s.convert(M.type)),M.format===kr&&we===6402&&(we=34041,M.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ir,Me=s.convert(M.type))),I&&(Ue?t.texStorage2D(3553,1,we,E.width,E.height):t.texImage2D(3553,0,we,E.width,E.height,0,me,Me,null));else if(M.isDataTexture)if(Ne.length>0&&Z){Ue&&I&&t.texStorage2D(3553,ye,we,Ne[0].width,Ne[0].height);for(let ee=0,Ae=Ne.length;ee<Ae;ee++)Ce=Ne[ee],Ue?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,me,Me,Ce.data):t.texImage2D(3553,ee,we,Ce.width,Ce.height,0,me,Me,Ce.data);M.generateMipmaps=!1}else Ue?(I&&t.texStorage2D(3553,ye,we,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,me,Me,E.data)):t.texImage2D(3553,0,we,E.width,E.height,0,me,Me,E.data);else if(M.isCompressedTexture){Ue&&I&&t.texStorage2D(3553,ye,we,Ne[0].width,Ne[0].height);for(let ee=0,Ae=Ne.length;ee<Ae;ee++)Ce=Ne[ee],M.format!==mn?me!==null?Ue?t.compressedTexSubImage2D(3553,ee,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(3553,ee,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,me,Me,Ce.data):t.texImage2D(3553,ee,we,Ce.width,Ce.height,0,me,Me,Ce.data)}else if(M.isDataArrayTexture)Ue?(I&&t.texStorage3D(35866,ye,we,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,me,Me,E.data)):t.texImage3D(35866,0,we,E.width,E.height,E.depth,0,me,Me,E.data);else if(M.isData3DTexture)Ue?(I&&t.texStorage3D(32879,ye,we,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,me,Me,E.data)):t.texImage3D(32879,0,we,E.width,E.height,E.depth,0,me,Me,E.data);else if(M.isFramebufferTexture){if(I)if(Ue)t.texStorage2D(3553,ye,we,E.width,E.height);else{let ee=E.width,Ae=E.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(3553,Ee,we,ee,Ae,0,me,Me,null),ee>>=1,Ae>>=1}}else if(Ne.length>0&&Z){Ue&&I&&t.texStorage2D(3553,ye,we,Ne[0].width,Ne[0].height);for(let ee=0,Ae=Ne.length;ee<Ae;ee++)Ce=Ne[ee],Ue?t.texSubImage2D(3553,ee,0,0,me,Me,Ce):t.texImage2D(3553,ee,we,me,Me,Ce);M.generateMipmaps=!1}else Ue?(I&&t.texStorage2D(3553,ye,we,E.width,E.height),t.texSubImage2D(3553,0,0,0,me,Me,E)):t.texImage2D(3553,0,we,me,Me,E);P(M,Z)&&D($),ue.__currentVersion=ue.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function be(w,M,N){if(M.image.length!==6)return;const $=se(w,M),J=M.source;if(t.activeTexture(33984+N),t.bindTexture(34067,w.__webglTexture),J.version!==J.__currentVersion||$===!0){i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,E=[];for(let ee=0;ee<6;ee++)!ue&&!Se?E[ee]=b(M.image[ee],!1,!0,c):E[ee]=Se?M.image[ee].image:M.image[ee],E[ee]=ge(M,E[ee]);const Z=E[0],me=T(Z)||a,Me=s.convert(M.format,M.encoding),we=s.convert(M.type),Ce=_(M.internalFormat,Me,we,M.encoding),Ne=a&&M.isVideoTexture!==!0,Ue=J.__currentVersion===void 0||$===!0;let I=S(M,Z,me);B(34067,M,me);let ye;if(ue){Ne&&Ue&&t.texStorage2D(34067,I,Ce,Z.width,Z.height);for(let ee=0;ee<6;ee++){ye=E[ee].mipmaps;for(let Ae=0;Ae<ye.length;Ae++){const Ee=ye[Ae];M.format!==mn?Me!==null?Ne?t.compressedTexSubImage2D(34069+ee,Ae,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(34069+ee,Ae,Ce,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+ee,Ae,0,0,Ee.width,Ee.height,Me,we,Ee.data):t.texImage2D(34069+ee,Ae,Ce,Ee.width,Ee.height,0,Me,we,Ee.data)}}}else{ye=M.mipmaps,Ne&&Ue&&(ye.length>0&&I++,t.texStorage2D(34067,I,Ce,E[0].width,E[0].height));for(let ee=0;ee<6;ee++)if(Se){Ne?t.texSubImage2D(34069+ee,0,0,0,E[ee].width,E[ee].height,Me,we,E[ee].data):t.texImage2D(34069+ee,0,Ce,E[ee].width,E[ee].height,0,Me,we,E[ee].data);for(let Ae=0;Ae<ye.length;Ae++){const je=ye[Ae].image[ee].image;Ne?t.texSubImage2D(34069+ee,Ae+1,0,0,je.width,je.height,Me,we,je.data):t.texImage2D(34069+ee,Ae+1,Ce,je.width,je.height,0,Me,we,je.data)}}else{Ne?t.texSubImage2D(34069+ee,0,0,0,Me,we,E[ee]):t.texImage2D(34069+ee,0,Ce,Me,we,E[ee]);for(let Ae=0;Ae<ye.length;Ae++){const Ee=ye[Ae];Ne?t.texSubImage2D(34069+ee,Ae+1,0,0,Me,we,Ee.image[ee]):t.texImage2D(34069+ee,Ae+1,Ce,Me,we,Ee.image[ee])}}}P(M,me)&&D(34067),J.__currentVersion=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pe(w,M,N,$,J){const ue=s.convert(N.format,N.encoding),Se=s.convert(N.type),E=_(N.internalFormat,ue,Se,N.encoding);n.get(M).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,E,M.width,M.height,M.depth,0,ue,Se,null):t.texImage2D(J,0,E,M.width,M.height,0,ue,Se,null)),t.bindFramebuffer(36160,w),he(M)?h.framebufferTexture2DMultisampleEXT(36160,$,J,n.get(N).__webglTexture,0,fe(M)):i.framebufferTexture2D(36160,$,J,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(w,M,N){if(i.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(N||he(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===mi?$=36012:J.type===Vi&&($=33190));const ue=fe(M);he(M)?h.renderbufferStorageMultisampleEXT(36161,ue,$,M.width,M.height):i.renderbufferStorageMultisample(36161,ue,$,M.width,M.height)}else i.renderbufferStorage(36161,$,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const $=fe(M);N&&he(M)===!1?i.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):he(M)?h.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const $=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<$.length;J++){const ue=$[J],Se=s.convert(ue.format,ue.encoding),E=s.convert(ue.type),Z=_(ue.internalFormat,Se,E,ue.encoding),me=fe(M);N&&he(M)===!1?i.renderbufferStorageMultisample(36161,me,Z,M.width,M.height):he(M)?h.renderbufferStorageMultisampleEXT(36161,me,Z,M.width,M.height):i.renderbufferStorage(36161,Z,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,J=fe(M);if(M.depthTexture.format===Xi)he(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,J):i.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===kr)he(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,J):i.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function A(w){const M=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(N){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=i.createRenderbuffer(),Te(M.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Te(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function R(w,M,N){const $=n.get(w);M!==void 0&&pe($.__webglFramebuffer,w,w.texture,36064,3553),N!==void 0&&A(w)}function W(w){const M=w.texture,N=n.get(w),$=n.get(M);w.addEventListener("dispose",Q),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,ue=w.isWebGLMultipleRenderTargets===!0,Se=T(w)||a;if(J){N.__webglFramebuffer=[];for(let E=0;E<6;E++)N.__webglFramebuffer[E]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),ue)if(r.drawBuffers){const E=w.texture;for(let Z=0,me=E.length;Z<me;Z++){const Me=n.get(E[Z]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&he(w)===!1){const E=ue?M:[M];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let Z=0;Z<E.length;Z++){const me=E[Z];N.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(36161,N.__webglColorRenderbuffer[Z]);const Me=s.convert(me.format,me.encoding),we=s.convert(me.type),Ce=_(me.internalFormat,Me,we,me.encoding),Ne=fe(w);i.renderbufferStorageMultisample(36161,Ne,Ce,w.width,w.height),i.framebufferRenderbuffer(36160,36064+Z,36161,N.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,$.__webglTexture),B(34067,M,Se);for(let E=0;E<6;E++)pe(N.__webglFramebuffer[E],w,M,36064,34069+E);P(M,Se)&&D(34067),t.unbindTexture()}else if(ue){const E=w.texture;for(let Z=0,me=E.length;Z<me;Z++){const Me=E[Z],we=n.get(Me);t.bindTexture(3553,we.__webglTexture),B(3553,Me,Se),pe(N.__webglFramebuffer,w,Me,36064+Z,3553),P(Me,Se)&&D(3553)}t.unbindTexture()}else{let E=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?E=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,$.__webglTexture),B(E,M,Se),pe(N.__webglFramebuffer,w,M,36064,E),P(M,Se)&&D(E),t.unbindTexture()}w.depthBuffer&&A(w)}function te(w){const M=T(w)||a,N=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,J=N.length;$<J;$++){const ue=N[$];if(P(ue,M)){const Se=w.isWebGLCubeRenderTarget?34067:3553,E=n.get(ue).__webglTexture;t.bindTexture(Se,E),D(Se),t.unbindTexture()}}}function ie(w){if(a&&w.samples>0&&he(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],N=w.width,$=w.height;let J=16384;const ue=[],Se=w.stencilBuffer?33306:36096,E=n.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let me=0;me<M.length;me++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),i.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let me=0;me<M.length;me++){ue.push(36064+me),w.depthBuffer&&ue.push(Se);const Me=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(Me===!1&&(w.depthBuffer&&(J|=256),w.stencilBuffer&&(J|=1024)),Z&&i.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[me]),Me===!0&&(i.invalidateFramebuffer(36008,[Se]),i.invalidateFramebuffer(36009,[Se])),Z){const we=n.get(M[me]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,we,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,J,9728),d&&i.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let me=0;me<M.length;me++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+me,36161,E.__webglColorRenderbuffer[me]);const Me=n.get(M[me]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),i.framebufferTexture2D(36009,36064+me,3553,Me,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function fe(w){return Math.min(f,w.samples)}function he(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(w){const M=o.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ge(w,M){const N=w.encoding,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Gl||N!==Yi&&(N===et?a===!1?e.has("EXT_sRGB")===!0&&$===mn?(w.format=Gl,w.minFilter=Qt,w.generateMipmaps=!1):M=Gd.sRGBToLinear(M):($!==mn||J!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),M}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=R,this.setupRenderTarget=W,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he}function Pb(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===qi)return 5121;if(s===d_)return 32819;if(s===p_)return 32820;if(s===u_)return 5120;if(s===f_)return 5122;if(s===zd)return 5123;if(s===h_)return 5124;if(s===Vi)return 5125;if(s===mi)return 5126;if(s===Os)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===m_)return 6406;if(s===mn)return 6408;if(s===__)return 6409;if(s===v_)return 6410;if(s===Xi)return 6402;if(s===kr)return 34041;if(s===x_)return 6403;if(s===g_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===y_)return 36244;if(s===M_)return 33319;if(s===b_)return 33320;if(s===w_)return 36249;if(s===Fa||s===Oa||s===Na||s===Ua)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Na)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bu||s===ku||s===Vu||s===Gu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===S_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hu||s===Wu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hu)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xu||s===ju||s===qu||s===Yu||s===$u||s===Ku||s===Zu||s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ju)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$u)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ku)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ju)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ef)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tf)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nf)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rf)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sf)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===of)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===of)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ir?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Rb extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ar extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new Ar;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Ib extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=Vi),n===void 0&&u===kr&&(n=Ir),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class Fb extends Zi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],x=[],b=new Ct;b.layers.enable(1),b.viewport=new Ye;const T=new Ct;T.layers.enable(2),T.viewport=new Ye;const y=[b,T],P=new Rb;P.layers.enable(1),P.layers.enable(2);let D=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=v[z];return X===void 0&&(X=new ul,v[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=v[z];return X===void 0&&(X=new ul,v[z]=X),X.getGripSpace()},this.getHand=function(z){let X=v[z];return X===void 0&&(X=new ul,v[z]=X),X.getHandSpace()};function S(z){const X=x.indexOf(z.inputSource);if(X===-1)return;const le=v[X];le!==void 0&&le.dispatchEvent({type:z.type,data:z.inputSource})}function L(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",q);for(let z=0;z<v.length;z++){const X=x[z];X!==null&&(x[z]=null,v[z].disconnect(X))}D=null,_=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",L),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:h}),p=new $i(h.framebufferWidth,h.framebufferHeight,{format:mn,type:qi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let X=null,le=null,ae=null;g.depth&&(ae=g.stencil?35056:33190,X=g.stencil?kr:Xi,le=g.stencil?Ir:Vi);const oe={colorFormat:32856,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),p=new $i(f.textureWidth,f.textureHeight,{format:mn,type:qi,depthTexture:new Ib(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ve=e.properties.get(p);ve.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function q(z){for(let X=0;X<z.removed.length;X++){const le=z.removed[X],ae=x.indexOf(le);ae>=0&&(x[ae]=null,v[ae].dispatchEvent({type:"disconnected",data:le}))}for(let X=0;X<z.added.length;X++){const le=z.added[X];let ae=x.indexOf(le);if(ae===-1){for(let ve=0;ve<v.length;ve++)if(ve>=x.length){x.push(le),ae=ve;break}else if(x[ve]===null){x[ve]=le,ae=ve;break}if(ae===-1)break}const oe=v[ae];oe&&oe.dispatchEvent({type:"connected",data:le})}}const Q=new O,U=new O;function F(z,X,le){Q.setFromMatrixPosition(X.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);const ae=Q.distanceTo(U),oe=X.projectionMatrix.elements,ve=le.projectionMatrix.elements,k=oe[14]/(oe[10]-1),B=oe[14]/(oe[10]+1),se=(oe[9]+1)/oe[5],ce=(oe[9]-1)/oe[5],be=(oe[8]-1)/oe[0],pe=(ve[8]+1)/ve[0],Te=k*be,_e=k*pe,A=ae/(-be+pe),R=A*-be;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(R),z.translateZ(A),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const W=k+A,te=B+A,ie=Te-R,fe=_e+(ae-R),he=se*B/te*W,de=ce*B/te*W;z.projectionMatrix.makePerspective(ie,fe,he,de,W,te)}function H(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;P.near=T.near=b.near=z.near,P.far=T.far=b.far=z.far,(D!==P.near||_!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,_=P.far);const X=z.parent,le=P.cameras;H(P,X);for(let oe=0;oe<le.length;oe++)H(le[oe],X);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),z.matrix.copy(P.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ae=z.children;for(let oe=0,ve=ae.length;oe<ve;oe++)ae[oe].updateMatrixWorld(!0);le.length===2?F(P,b,T):P.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(z){f!==null&&(f.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)};let Y=null;function K(z,X){if(c=X.getViewerPose(l||o),d=X,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let ae=!1;le.length!==P.cameras.length&&(P.cameras.length=0,ae=!0);for(let oe=0;oe<le.length;oe++){const ve=le[oe];let k=null;if(h!==null)k=h.getViewport(ve);else{const se=u.getViewSubImage(f,ve);k=se.viewport,oe===0&&(e.setRenderTargetTextures(p,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(p))}let B=y[oe];B===void 0&&(B=new Ct,B.layers.enable(oe),B.viewport=new Ye,y[oe]=B),B.matrix.fromArray(ve.transform.matrix),B.projectionMatrix.fromArray(ve.projectionMatrix),B.viewport.set(k.x,k.y,k.width,k.height),oe===0&&P.matrix.copy(B.matrix),ae===!0&&P.cameras.push(B)}}for(let le=0;le<v.length;le++){const ae=x[le],oe=v[le];ae!==null&&oe!==void 0&&oe.update(ae,X,l||o)}Y&&Y(z,X),d=null}const V=new $d;V.setAnimationLoop(K),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function Ob(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Nb(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,b){const T=b.program;n.uniformBlockBinding(x,T)}function c(x,b){let T=r[x.id];T===void 0&&(g(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",p));const y=b.program;n.updateUBOMapping(x,y);const P=e.render.frame;s[x.id]!==P&&(h(x),s[x.id]=P)}function u(x){const b=f();x.__bindingPointIndex=b;const T=i.createBuffer(),y=x.__size,P=x.usage;return i.bindBuffer(35345,T),i.bufferData(35345,y,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,T),T}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=r[x.id],T=x.uniforms,y=x.__cache;i.bindBuffer(35345,b);for(let P=0,D=T.length;P<D;P++){const _=T[P];if(d(_,P,y)===!0){const S=_.value,L=_.__offset;typeof S=="number"?(_.__data[0]=S,i.bufferSubData(35345,L,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):S.toArray(_.__data),i.bufferSubData(35345,L,_.__data))}}i.bindBuffer(35345,null)}function d(x,b,T){const y=x.value;if(T[b]===void 0)return typeof y=="number"?T[b]=y:T[b]=y.clone(),!0;if(typeof y=="number"){if(T[b]!==y)return T[b]=y,!0}else{const P=T[b];if(P.equals(y)===!1)return P.copy(y),!0}return!1}function g(x){const b=x.uniforms;let T=0;const y=16;let P=0;for(let D=0,_=b.length;D<_;D++){const S=b[D],L=m(S);if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,D>0){P=T%y;const q=y-P;P!==0&&q-L.boundary<0&&(T+=y-P,S.__offset=T)}T+=L.storage}return P=T%y,P>0&&(T+=y-P),x.__size=T,x.__cache={},this}function m(x){const b=x.value,T={boundary:0,storage:0};return typeof b=="number"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(x){const b=x.target;b.removeEventListener("dispose",p);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function Ub(){const i=Us("canvas");return i.style.display="block",i}function ep(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Ub(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yi,this.physicallyCorrectLights=!1,this.toneMapping=jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,x=0,b=null,T=-1,y=null;const P=new Ye,D=new Ye;let _=null,S=e.width,L=e.height,q=1,Q=null,U=null;const F=new Ye(0,0,S,L),H=new Ye(0,0,S,L);let Y=!1;const K=new Pc;let V=!1,z=!1,X=null;const le=new Pe,ae=new De,oe=new O,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return b===null?q:1}let B=t;function se(C,j){for(let ne=0;ne<C.length;ne++){const G=C[ne],re=e.getContext(G,j);if(re!==null)return re}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),B===null){const j=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&j.shift(),B=se(j,C),B===null)throw se(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ce,be,pe,Te,_e,A,R,W,te,ie,fe,he,de,ge,w,M,N,$,J,ue,Se,E,Z,me;function Me(){ce=new Yy(B),be=new Gy(B,ce,i),ce.init(be),E=new Pb(B,ce,be),pe=new Cb(B,ce,be),Te=new Zy,_e=new pb,A=new Lb(B,ce,pe,_e,be,E,Te),R=new Wy(m),W=new qy(m),te=new lv(B,be),Z=new ky(B,ce,te,be),ie=new $y(B,te,Te,Z),fe=new tM(B,ie,te,Te),J=new eM(B,be,A),M=new Hy(_e),he=new db(m,R,W,ce,be,Z,M),de=new Ob(m,_e),ge=new gb,w=new bb(ce,be),$=new By(m,R,pe,fe,u,o),N=new Ab(m,fe,be),me=new Nb(B,Te,be,pe),ue=new Vy(B,ce,Te,be),Se=new Ky(B,ce,Te,be),Te.programs=he.programs,m.capabilities=be,m.extensions=ce,m.properties=_e,m.renderLists=ge,m.shadowMap=N,m.state=pe,m.info=Te}Me();const we=new Fb(m,B);this.xr=we,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(S,L,!1))},this.getSize=function(C){return C.set(S,L)},this.setSize=function(C,j,ne){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,L=j,e.width=Math.floor(C*q),e.height=Math.floor(j*q),ne!==!1&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(S*q,L*q).floor()},this.setDrawingBufferSize=function(C,j,ne){S=C,L=j,q=ne,e.width=Math.floor(C*ne),e.height=Math.floor(j*ne),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,j,ne,G){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,j,ne,G),pe.viewport(P.copy(F).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(H)},this.setScissor=function(C,j,ne,G){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,j,ne,G),pe.scissor(D.copy(H).multiplyScalar(q).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){pe.setScissorTest(Y=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(C=!0,j=!0,ne=!0){let G=0;C&&(G|=16384),j&&(G|=256),ne&&(G|=1024),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),ge.dispose(),w.dispose(),_e.dispose(),R.dispose(),W.dispose(),fe.dispose(),Z.dispose(),me.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",je),we.removeEventListener("sessionend",dt),X&&(X.dispose(),X=null),ot.stop()};function Ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Te.autoReset,j=N.enabled,ne=N.autoUpdate,G=N.needsUpdate,re=N.type;Me(),Te.autoReset=C,N.enabled=j,N.autoUpdate=ne,N.needsUpdate=G,N.type=re}function Ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function I(C){const j=C.target;j.removeEventListener("dispose",I),ye(j)}function ye(C){ee(C),_e.remove(C)}function ee(C){const j=_e.get(C).programs;j!==void 0&&(j.forEach(function(ne){he.releaseProgram(ne)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ne,G,re,Le){j===null&&(j=ve);const Re=re.isMesh&&re.matrixWorld.determinant()<0,ze=rm(C,j,ne,G,re);pe.setMaterial(G,Re);let Ie=ne.index;const Je=ne.attributes.position;if(Ie===null){if(Je===void 0||Je.count===0)return}else if(Ie.count===0)return;let We=1;G.wireframe===!0&&(Ie=ie.getWireframeAttribute(ne),We=2),Z.setup(re,G,ze,ne,Ie);let Xe,st=ue;Ie!==null&&(Xe=te.get(Ie),st=Se,st.setIndex(Xe));const Ei=Ie!==null?Ie.count:Je.count,er=ne.drawRange.start*We,tr=ne.drawRange.count*We,xn=Le!==null?Le.start*We:0,Ke=Le!==null?Le.count*We:1/0,nr=Math.max(er,xn),ut=Math.min(Ei,er+tr,xn+Ke)-1,$t=Math.max(0,ut-nr+1);if($t!==0){if(re.isMesh)G.wireframe===!0?(pe.setLineWidth(G.wireframeLinewidth*k()),st.setMode(1)):st.setMode(4);else if(re.isLine){let Qn=G.linewidth;Qn===void 0&&(Qn=1),pe.setLineWidth(Qn*k()),re.isLineSegments?st.setMode(1):re.isLineLoop?st.setMode(2):st.setMode(3)}else re.isPoints?st.setMode(0):re.isSprite&&st.setMode(4);if(re.isInstancedMesh)st.renderInstances(nr,$t,re.count);else if(ne.isInstancedBufferGeometry){const Qn=Math.min(ne.instanceCount,ne._maxInstanceCount);st.renderInstances(nr,$t,Qn)}else st.render(nr,$t)}},this.compile=function(C,j){function ne(G,re,Le){G.transparent===!0&&G.side===pi?(G.side=jt,G.needsUpdate=!0,Js(G,re,Le),G.side=Ur,G.needsUpdate=!0,Js(G,re,Le),G.side=pi):Js(G,re,Le)}h=w.get(C),h.init(),g.push(h),C.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(m.physicallyCorrectLights),C.traverse(function(G){const re=G.material;if(re)if(Array.isArray(re))for(let Le=0;Le<re.length;Le++){const Re=re[Le];ne(Re,C,G)}else ne(re,C,G)}),g.pop(),h=null};let Ae=null;function Ee(C){Ae&&Ae(C)}function je(){ot.stop()}function dt(){ot.start()}const ot=new $d;ot.setAnimationLoop(Ee),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){Ae=C,we.setAnimationLoop(C),C===null?ot.stop():ot.start()},we.addEventListener("sessionstart",je),we.addEventListener("sessionend",dt),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,j,b),h=w.get(C,g.length),h.init(),g.push(h),le.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K.setFromProjectionMatrix(le),z=this.localClippingEnabled,V=M.init(this.clippingPlanes,z,j),f=ge.get(C,d.length),f.init(),d.push(f),Jn(C,j,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(Q,U),V===!0&&M.beginShadows();const ne=h.state.shadowsArray;if(N.render(ne,C,j),V===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,C),h.setupLights(m.physicallyCorrectLights),j.isArrayCamera){const G=j.cameras;for(let re=0,Le=G.length;re<Le;re++){const Re=G[re];rt(f,C,Re,Re.viewport)}}else rt(f,C,j);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(m,C,j),Z.resetDefaultState(),T=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Jn(C,j,ne,G){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){G&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Re=fe.update(C),ze=C.material;ze.visible&&f.push(C,Re,ze,ne,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Te.render.frame&&(C.skeleton.update(),C.skeleton.frame=Te.render.frame),!C.frustumCulled||K.intersectsObject(C))){G&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Re=fe.update(C),ze=C.material;if(Array.isArray(ze)){const Ie=Re.groups;for(let Je=0,We=Ie.length;Je<We;Je++){const Xe=Ie[Je],st=ze[Xe.materialIndex];st&&st.visible&&f.push(C,Re,st,ne,oe.z,Xe)}}else ze.visible&&f.push(C,Re,ze,ne,oe.z,null)}}const Le=C.children;for(let Re=0,ze=Le.length;Re<ze;Re++)Jn(Le[Re],j,ne,G)}function rt(C,j,ne,G){const re=C.opaque,Le=C.transmissive,Re=C.transparent;h.setupLightsView(ne),Le.length>0&&Fn(re,j,ne),G&&pe.viewport(P.copy(G)),re.length>0&&Yt(re,j,ne),Le.length>0&&Yt(Le,j,ne),Re.length>0&&Yt(Re,j,ne),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Fn(C,j,ne){const G=be.isWebGL2;X===null&&(X=new $i(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Os:qi,minFilter:va,samples:G&&s===!0?4:0})),m.getDrawingBufferSize(ae),G?X.setSize(ae.x,ae.y):X.setSize(Ko(ae.x),Ko(ae.y));const re=m.getRenderTarget();m.setRenderTarget(X),m.clear();const Le=m.toneMapping;m.toneMapping=jn,Yt(C,j,ne),m.toneMapping=Le,A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X),m.setRenderTarget(re)}function Yt(C,j,ne){const G=j.isScene===!0?j.overrideMaterial:null;for(let re=0,Le=C.length;re<Le;re++){const Re=C[re],ze=Re.object,Ie=Re.geometry,Je=G===null?Re.material:G,We=Re.group;ze.layers.test(ne.layers)&&im(ze,j,ne,Ie,Je,We)}}function im(C,j,ne,G,re,Le){C.onBeforeRender(m,j,ne,G,re,Le),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(m,j,ne,G,C,Le),re.transparent===!0&&re.side===pi?(re.side=jt,re.needsUpdate=!0,m.renderBufferDirect(ne,j,G,re,C,Le),re.side=Ur,re.needsUpdate=!0,m.renderBufferDirect(ne,j,G,re,C,Le),re.side=pi):m.renderBufferDirect(ne,j,G,re,C,Le),C.onAfterRender(m,j,ne,G,re,Le)}function Js(C,j,ne){j.isScene!==!0&&(j=ve);const G=_e.get(C),re=h.state.lights,Le=h.state.shadowsArray,Re=re.state.version,ze=he.getParameters(C,re.state,Le,j,ne),Ie=he.getProgramCacheKey(ze);let Je=G.programs;G.environment=C.isMeshStandardMaterial?j.environment:null,G.fog=j.fog,G.envMap=(C.isMeshStandardMaterial?W:R).get(C.envMap||G.environment),Je===void 0&&(C.addEventListener("dispose",I),Je=new Map,G.programs=Je);let We=Je.get(Ie);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Re)return eu(C,ze),We}else ze.uniforms=he.getUniforms(C),C.onBuild(ne,ze,m),C.onBeforeCompile(ze,m),We=he.acquireProgram(ze,Ie),Je.set(Ie,We),G.uniforms=ze.uniforms;const Xe=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=M.uniform),eu(C,ze),G.needsLights=om(C),G.lightsStateVersion=Re,G.needsLights&&(Xe.ambientLightColor.value=re.state.ambient,Xe.lightProbe.value=re.state.probe,Xe.directionalLights.value=re.state.directional,Xe.directionalLightShadows.value=re.state.directionalShadow,Xe.spotLights.value=re.state.spot,Xe.spotLightShadows.value=re.state.spotShadow,Xe.rectAreaLights.value=re.state.rectArea,Xe.ltc_1.value=re.state.rectAreaLTC1,Xe.ltc_2.value=re.state.rectAreaLTC2,Xe.pointLights.value=re.state.point,Xe.pointLightShadows.value=re.state.pointShadow,Xe.hemisphereLights.value=re.state.hemi,Xe.directionalShadowMap.value=re.state.directionalShadowMap,Xe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Xe.spotShadowMap.value=re.state.spotShadowMap,Xe.spotLightMatrix.value=re.state.spotLightMatrix,Xe.spotLightMap.value=re.state.spotLightMap,Xe.pointShadowMap.value=re.state.pointShadowMap,Xe.pointShadowMatrix.value=re.state.pointShadowMatrix);const st=We.getUniforms(),Ei=No.seqWithValue(st.seq,Xe);return G.currentProgram=We,G.uniformsList=Ei,We}function eu(C,j){const ne=_e.get(C);ne.outputEncoding=j.outputEncoding,ne.instancing=j.instancing,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function rm(C,j,ne,G,re){j.isScene!==!0&&(j=ve),A.resetTextureUnits();const Le=j.fog,Re=G.isMeshStandardMaterial?j.environment:null,ze=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Yi,Ie=(G.isMeshStandardMaterial?W:R).get(G.envMap||Re),Je=G.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,We=!!G.normalMap&&!!ne.attributes.tangent,Xe=!!ne.morphAttributes.position,st=!!ne.morphAttributes.normal,Ei=!!ne.morphAttributes.color,er=G.toneMapped?m.toneMapping:jn,tr=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xn=tr!==void 0?tr.length:0,Ke=_e.get(G),nr=h.state.lights;if(V===!0&&(z===!0||C!==y)){const zt=C===y&&G.id===T;M.setState(G,C,zt)}let ut=!1;G.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==nr.state.version||Ke.outputEncoding!==ze||re.isInstancedMesh&&Ke.instancing===!1||!re.isInstancedMesh&&Ke.instancing===!0||re.isSkinnedMesh&&Ke.skinning===!1||!re.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ie||G.fog===!0&&Ke.fog!==Le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==M.numPlanes||Ke.numIntersection!==M.numIntersection)||Ke.vertexAlphas!==Je||Ke.vertexTangents!==We||Ke.morphTargets!==Xe||Ke.morphNormals!==st||Ke.morphColors!==Ei||Ke.toneMapping!==er||be.isWebGL2===!0&&Ke.morphTargetsCount!==xn)&&(ut=!0):(ut=!0,Ke.__version=G.version);let $t=Ke.currentProgram;ut===!0&&($t=Js(G,j,re));let Qn=!1,as=!1,Sa=!1;const Et=$t.getUniforms(),Ai=Ke.uniforms;if(pe.useProgram($t.program)&&(Qn=!0,as=!0,Sa=!0),G.id!==T&&(T=G.id,as=!0),Qn||y!==C){if(Et.setValue(B,"projectionMatrix",C.projectionMatrix),be.logarithmicDepthBuffer&&Et.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),y!==C&&(y=C,as=!0,Sa=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(B,oe.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||re.isSkinnedMesh)&&Et.setValue(B,"viewMatrix",C.matrixWorldInverse)}if(re.isSkinnedMesh){Et.setOptional(B,re,"bindMatrix"),Et.setOptional(B,re,"bindMatrixInverse");const zt=re.skeleton;zt&&(be.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(B,"boneTexture",zt.boneTexture,A),Et.setValue(B,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ta=ne.morphAttributes;if((Ta.position!==void 0||Ta.normal!==void 0||Ta.color!==void 0&&be.isWebGL2===!0)&&J.update(re,ne,G,$t),(as||Ke.receiveShadow!==re.receiveShadow)&&(Ke.receiveShadow=re.receiveShadow,Et.setValue(B,"receiveShadow",re.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ai.envMap.value=Ie,Ai.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),as&&(Et.setValue(B,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&sm(Ai,Sa),Le&&G.fog===!0&&de.refreshFogUniforms(Ai,Le),de.refreshMaterialUniforms(Ai,G,q,L,X),No.upload(B,Ke.uniformsList,Ai,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(No.upload(B,Ke.uniformsList,Ai,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(B,"center",re.center),Et.setValue(B,"modelViewMatrix",re.modelViewMatrix),Et.setValue(B,"normalMatrix",re.normalMatrix),Et.setValue(B,"modelMatrix",re.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zt=G.uniformsGroups;for(let Ea=0,am=zt.length;Ea<am;Ea++)if(be.isWebGL2){const tu=zt[Ea];me.update(tu,$t),me.bind(tu,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function sm(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function om(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,j,ne){_e.get(C.texture).__webglTexture=j,_e.get(C.depthTexture).__webglTexture=ne;const G=_e.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=ne===void 0,G.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const ne=_e.get(C);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ne=0){b=C,v=j,x=ne;let G=!0;if(C){const Ie=_e.get(C);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),G=!1):Ie.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ie.__hasExternalTextures&&A.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture)}let re=null,Le=!1,Re=!1;if(C){const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Re=!0);const Je=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(re=Je[j],Le=!0):be.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?re=_e.get(C).__webglMultisampledFramebuffer:re=Je,P.copy(C.viewport),D.copy(C.scissor),_=C.scissorTest}else P.copy(F).multiplyScalar(q).floor(),D.copy(H).multiplyScalar(q).floor(),_=Y;if(pe.bindFramebuffer(36160,re)&&be.drawBuffers&&G&&pe.drawBuffers(C,re),pe.viewport(P),pe.scissor(D),pe.setScissorTest(_),Le){const Ie=_e.get(C.texture);B.framebufferTexture2D(36160,36064,34069+j,Ie.__webglTexture,ne)}else if(Re){const Ie=_e.get(C.texture),Je=j||0;B.framebufferTextureLayer(36160,36064,Ie.__webglTexture,ne||0,Je)}T=-1},this.readRenderTargetPixels=function(C,j,ne,G,re,Le,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){pe.bindFramebuffer(36160,ze);try{const Ie=C.texture,Je=Ie.format,We=Ie.type;if(Je!==mn&&E.convert(Je)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Os&&(ce.has("EXT_color_buffer_half_float")||be.isWebGL2&&ce.has("EXT_color_buffer_float"));if(We!==qi&&E.convert(We)!==B.getParameter(35738)&&!(We===mi&&(be.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-G&&ne>=0&&ne<=C.height-re&&B.readPixels(j,ne,G,re,E.convert(Je),E.convert(We),Le)}finally{const Ie=b!==null?_e.get(b).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(C,j,ne=0){const G=Math.pow(2,-ne),re=Math.floor(j.image.width*G),Le=Math.floor(j.image.height*G);A.setTexture2D(j,0),B.copyTexSubImage2D(3553,ne,0,0,C.x,C.y,re,Le),pe.unbindTexture()},this.copyTextureToTexture=function(C,j,ne,G=0){const re=j.image.width,Le=j.image.height,Re=E.convert(ne.format),ze=E.convert(ne.type);A.setTexture2D(ne,0),B.pixelStorei(37440,ne.flipY),B.pixelStorei(37441,ne.premultiplyAlpha),B.pixelStorei(3317,ne.unpackAlignment),j.isDataTexture?B.texSubImage2D(3553,G,C.x,C.y,re,Le,Re,ze,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(3553,G,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Re,j.mipmaps[0].data):B.texSubImage2D(3553,G,C.x,C.y,Re,ze,j.image),G===0&&ne.generateMipmaps&&B.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ne,G,re=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ie=E.convert(G.format),Je=E.convert(G.type);let We;if(G.isData3DTexture)A.setTexture3D(G,0),We=32879;else if(G.isDataArrayTexture)A.setTexture2DArray(G,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,G.flipY),B.pixelStorei(37441,G.premultiplyAlpha),B.pixelStorei(3317,G.unpackAlignment);const Xe=B.getParameter(3314),st=B.getParameter(32878),Ei=B.getParameter(3316),er=B.getParameter(3315),tr=B.getParameter(32877),xn=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;B.pixelStorei(3314,xn.width),B.pixelStorei(32878,xn.height),B.pixelStorei(3316,C.min.x),B.pixelStorei(3315,C.min.y),B.pixelStorei(32877,C.min.z),ne.isDataTexture||ne.isData3DTexture?B.texSubImage3D(We,re,j.x,j.y,j.z,Le,Re,ze,Ie,Je,xn.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(We,re,j.x,j.y,j.z,Le,Re,ze,Ie,xn.data)):B.texSubImage3D(We,re,j.x,j.y,j.z,Le,Re,ze,Ie,Je,xn),B.pixelStorei(3314,Xe),B.pixelStorei(32878,st),B.pixelStorei(3316,Ei),B.pixelStorei(3315,er),B.pixelStorei(32877,tr),re===0&&G.generateMipmaps&&B.generateMipmap(We),pe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),pe.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,pe.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zb extends ep{}zb.prototype.isWebGL1Renderer=!0;class fl extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const jf=new O,qf=new Ye,Yf=new Ye,Bb=new O,$f=new Pe;class kb extends rn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;qf.fromBufferAttribute(r.attributes.skinIndex,e),Yf.fromBufferAttribute(r.attributes.skinWeight,e),jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Yf.getComponent(s);if(o!==0){const a=qf.getComponent(s);$f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bb.copy(jf).applyMatrix4($f),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xl extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vb extends Pt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Mt,u=Mt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kf=new Pe,Gb=new Pe;class Fc{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Gb;Kf.multiplyMatrices(a,t[s]),Kf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Bd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vb(t,e,e,mn,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Xl),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class tp extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zf=new O,Jf=new O,Qf=new Pe,hl=new Ac,To=new xa;class Hb extends it{constructor(e=new nn,t=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Zf.fromBufferAttribute(t,r-1),Jf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Zf.distanceTo(Jf);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;Qf.copy(r).invert(),hl.copy(e.ray).applyMatrix4(Qf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let b=v,T=x-1;b<T;b+=d){const y=g.getX(b),P=g.getX(b+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,P),hl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(h);_<e.near||_>e.far||t.push({distance:_,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let b=v,T=x-1;b<T;b+=d){if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,b+1),hl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Wb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new De:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new O,r=[],s=[],o=[],a=new O,l=new Pe;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dl extends Ji{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xb extends Ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function li(i,e,t){return np(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jb(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function eh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function ip(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ma{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qb extends Ma{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:af,endingEnd:af}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case lf:s=e,a=2*t-n;break;case cf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lf:o=e,l=2*n-t;break;case cf:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),m=g*g,p=m*g,v=-h*p+2*h*m-h*g,x=(1+h)*p+(-1.5-2*h)*m+(-.5+h)*g+1,b=(-1-d)*p+(1.5+d)*m+.5*g,T=d*p-d*m;for(let y=0;y!==a;++y)s[y]=v*o[u+y]+x*o[c+y]+b*o[l+y]+T*o[f+y];return s}}class Yb extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class $b extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Eo(t,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Eo(e.times,Array),values:Eo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yo:t=this.InterpolantFactoryMethodDiscrete;break;case $o:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yo;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=li(n,s,o),this.values=li(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&np(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=li(this.times),t=li(this.values),n=this.getValueSize(),r=this.getInterpolation()===za,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){const m=t[f+g];if(m!==t[h+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=li(e,0,o),this.values=li(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=li(this.times,0),t=li(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=$o;class Kr extends In{}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Yo;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class rp extends In{}rp.prototype.ValueTypeName="color";class zs extends In{}zs.prototype.ValueTypeName="number";class Kb extends Ma{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)tn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Zr extends In{InterpolantFactoryMethodLinear(e){return new Kb(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.DefaultInterpolation=$o;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends In{}Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Yo;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends In{}Bs.prototype.ValueTypeName="vector";class Zb{constructor(e,t=-1,n,r=T_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(In.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=jb(l);l=eh(l,1,u),c=eh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,g,m){if(d.length!==0){const p=[],v=[];ip(d,p,v,g),p.length!==0&&m.push(new f(h,p,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)d[h[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let x=0;x!==h[g].morphTargets.length;++x){const b=h[g];p.push(b.time),v.push(b.morphTarget===m?1:0)}r.push(new zs(".morphTargetInfluence["+m+"]",p,v))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(Bs,d+".position",h,"pos",r),n(Zr,d+".quaternion",h,"rot",r),n(Bs,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return rp;case"quaternion":return Zr;case"bool":case"boolean":return Kr;case"string":return Jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jb(i.type);if(i.times===void 0){const t=[],n=[];ip(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Jo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ew=new sp;class ba{constructor(e){this.manager=e!==void 0?e:ew,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const kn={};class tw extends Error{constructor(e,t){super(e),this.response=t}}class nw extends ba{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Jo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:r});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=kn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){x();function x(){f.read().then(({done:b,value:T})=>{if(b)v.close();else{m+=T.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let P=0,D=u.length;P<D;P++){const _=u[P];_.onProgress&&_.onProgress(y)}v.enqueue(T),x()}})}}});return new Response(p)}else throw new tw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Jo.add(e,c);const u=kn[e];delete kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iw extends ba{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Us("img");function l(){u(),Jo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vt extends ba{constructor(e){super(e)}load(e,t,n,r){const s=new Pt,o=new iw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class qs extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class pl extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DefaultUp),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const th=new Pe,nh=new O,ih=new O;class Oc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rw extends Oc{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sw extends qs{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DefaultUp),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new rw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rh=new Pe,fs=new O,ml=new O;class ow extends Oc{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),ml.copy(n.position),ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ml),n.updateMatrixWorld(),r.makeTranslation(-fs.x,-fs.y,-fs.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}}class sh extends qs{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class aw extends Oc{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uo extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DefaultUp),this.updateMatrix(),this.target=new it,this.shadow=new aw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lw extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Uc="\\[\\]\\.:\\/",cw=new RegExp("["+Uc+"]","g"),zc="[^"+Uc+"]",uw="[^"+Uc.replace("\\.","")+"]",fw=/((?:WC+[\/:])*)/.source.replace("WC",zc),hw=/(WCOD+)?/.source.replace("WCOD",uw),dw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),mw=new RegExp("^"+fw+hw+dw+pw+"$"),gw=["material","materials","bones","map"];class _w{constructor(e,t,n){const r=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cw,"")}static parseTrackName(e){const t=mw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);gw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=_w;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vw{constructor(e,t,n=0,r=1/0){this.ray=new Ac(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return jl(e,this,n,t),n.sort(oh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)jl(e[r],this,n,t);return n.sort(oh),n}}function oh(i,e){return i.distance-e.distance}function jl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)jl(r[s],e,t,!0)}}class ah{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const lh={type:"change"},gl={type:"start"},ch={type:"end"};class xw extends Zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:rr.ROTATE,TWO:rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ge),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lh),n.update(),s=r.NONE},this.update=function(){const E=new O,Z=new tn().setFromUnitVectors(e.up,new O(0,1,0)),me=Z.clone().invert(),Me=new O,we=new tn,Ce=2*Math.PI;return function(){const Ue=n.object.position;E.copy(Ue).sub(n.target),E.applyQuaternion(Z),a.setFromVector3(E),n.autoRotate&&s===r.NONE&&S(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let I=n.minAzimuthAngle,ye=n.maxAzimuthAngle;return isFinite(I)&&isFinite(ye)&&(I<-Math.PI?I+=Ce:I>Math.PI&&(I-=Ce),ye<-Math.PI?ye+=Ce:ye>Math.PI&&(ye-=Ce),I<=ye?a.theta=Math.max(I,Math.min(ye,a.theta)):a.theta=a.theta>(I+ye)/2?Math.max(I,a.theta):Math.min(ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),E.setFromSpherical(a),E.applyQuaternion(me),Ue.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Me.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o?(n.dispatchEvent(lh),Me.copy(n.object.position),we.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",ie),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",W),n.domElement.removeEventListener("pointerup",te),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ge)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ah,l=new ah;let c=1;const u=new O;let f=!1;const h=new De,d=new De,g=new De,m=new De,p=new De,v=new De,x=new De,b=new De,T=new De,y=[],P={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function S(E){l.theta-=E}function L(E){l.phi-=E}const q=function(){const E=new O;return function(me,Me){E.setFromMatrixColumn(Me,0),E.multiplyScalar(-me),u.add(E)}}(),Q=function(){const E=new O;return function(me,Me){n.screenSpacePanning===!0?E.setFromMatrixColumn(Me,1):(E.setFromMatrixColumn(Me,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(me),u.add(E)}}(),U=function(){const E=new O;return function(me,Me){const we=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;E.copy(Ce).sub(n.target);let Ne=E.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),q(2*me*Ne/we.clientHeight,n.object.matrix),Q(2*Me*Ne/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(me*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),Q(Me*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(E){n.object.isPerspectiveCamera?c/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(E){n.object.isPerspectiveCamera?c*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(E){h.set(E.clientX,E.clientY)}function K(E){x.set(E.clientX,E.clientY)}function V(E){m.set(E.clientX,E.clientY)}function z(E){d.set(E.clientX,E.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;S(2*Math.PI*g.x/Z.clientHeight),L(2*Math.PI*g.y/Z.clientHeight),h.copy(d),n.update()}function X(E){b.set(E.clientX,E.clientY),T.subVectors(b,x),T.y>0?F(_()):T.y<0&&H(_()),x.copy(b),n.update()}function le(E){p.set(E.clientX,E.clientY),v.subVectors(p,m).multiplyScalar(n.panSpeed),U(v.x,v.y),m.copy(p),n.update()}function ae(E){E.deltaY<0?H(_()):E.deltaY>0&&F(_()),n.update()}function oe(E){let Z=!1;switch(E.code){case n.keys.UP:U(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),Z=!0;break}Z&&(E.preventDefault(),n.update())}function ve(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const E=.5*(y[0].pageX+y[1].pageX),Z=.5*(y[0].pageY+y[1].pageY);h.set(E,Z)}}function k(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const E=.5*(y[0].pageX+y[1].pageX),Z=.5*(y[0].pageY+y[1].pageY);m.set(E,Z)}}function B(){const E=y[0].pageX-y[1].pageX,Z=y[0].pageY-y[1].pageY,me=Math.sqrt(E*E+Z*Z);x.set(0,me)}function se(){n.enableZoom&&B(),n.enablePan&&k()}function ce(){n.enableZoom&&B(),n.enableRotate&&ve()}function be(E){if(y.length==1)d.set(E.pageX,E.pageY);else{const me=Se(E),Me=.5*(E.pageX+me.x),we=.5*(E.pageY+me.y);d.set(Me,we)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Z=n.domElement;S(2*Math.PI*g.x/Z.clientHeight),L(2*Math.PI*g.y/Z.clientHeight),h.copy(d)}function pe(E){if(y.length===1)p.set(E.pageX,E.pageY);else{const Z=Se(E),me=.5*(E.pageX+Z.x),Me=.5*(E.pageY+Z.y);p.set(me,Me)}v.subVectors(p,m).multiplyScalar(n.panSpeed),U(v.x,v.y),m.copy(p)}function Te(E){const Z=Se(E),me=E.pageX-Z.x,Me=E.pageY-Z.y,we=Math.sqrt(me*me+Me*Me);b.set(0,we),T.set(0,Math.pow(b.y/x.y,n.zoomSpeed)),F(T.y),x.copy(b)}function _e(E){n.enableZoom&&Te(E),n.enablePan&&pe(E)}function A(E){n.enableZoom&&Te(E),n.enableRotate&&be(E)}function R(E){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",W),n.domElement.addEventListener("pointerup",te)),$(E),E.pointerType==="touch"?w(E):fe(E))}function W(E){n.enabled!==!1&&(E.pointerType==="touch"?M(E):he(E))}function te(E){J(E),y.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",W),n.domElement.removeEventListener("pointerup",te)),n.dispatchEvent(ch),s=r.NONE}function ie(E){J(E)}function fe(E){let Z;switch(E.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case ir.DOLLY:if(n.enableZoom===!1)return;K(E),s=r.DOLLY;break;case ir.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;V(E),s=r.PAN}else{if(n.enableRotate===!1)return;Y(E),s=r.ROTATE}break;case ir.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;Y(E),s=r.ROTATE}else{if(n.enablePan===!1)return;V(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(gl)}function he(E){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;z(E);break;case r.DOLLY:if(n.enableZoom===!1)return;X(E);break;case r.PAN:if(n.enablePan===!1)return;le(E);break}}function de(E){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(E.preventDefault(),n.dispatchEvent(gl),ae(E),n.dispatchEvent(ch))}function ge(E){n.enabled===!1||n.enablePan===!1||oe(E)}function w(E){switch(ue(E),y.length){case 1:switch(n.touches.ONE){case rr.ROTATE:if(n.enableRotate===!1)return;ve(),s=r.TOUCH_ROTATE;break;case rr.PAN:if(n.enablePan===!1)return;k(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case rr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;se(),s=r.TOUCH_DOLLY_PAN;break;case rr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(gl)}function M(E){switch(ue(E),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(E),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;pe(E),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(E),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;A(E),n.update();break;default:s=r.NONE}}function N(E){n.enabled!==!1&&E.preventDefault()}function $(E){y.push(E)}function J(E){delete P[E.pointerId];for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId==E.pointerId){y.splice(Z,1);return}}function ue(E){let Z=P[E.pointerId];Z===void 0&&(Z=new De,P[E.pointerId]=Z),Z.set(E.pageX,E.pageY)}function Se(E){const Z=E.pointerId===y[0].pointerId?y[1]:y[0];return P[Z.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",ie),n.domElement.addEventListener("wheel",de,{passive:!1}),this.update()}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var uh={},ql=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},op=function(i){return new Worker(i)};try{URL.revokeObjectURL(ql(""))}catch{ql=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},op=function(e){return new Worker(e,{type:"module"})}}var yw=function(i,e,t,n,r){var s=op(uh[e]||(uh[e]=ql(i)));return s.onerror=function(o){return r(o.error,null)},s.onmessage=function(o){return r(null,o.data)},s.postMessage(t,n),s},Ge=Uint8Array,mt=Uint16Array,$n=Uint32Array,Qr=new Ge([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),es=new Ge([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ks=new Ge([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ap=function(i,e){for(var t=new mt(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new $n(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},lp=ap(Qr,2),Bc=lp[0],Qo=lp[1];Bc[28]=258,Qo[258]=28;var cp=ap(es,0),up=cp[0],Yl=cp[1],Vs=new mt(32768);for(var nt=0;nt<32768;++nt){var ci=(nt&43690)>>>1|(nt&21845)<<1;ci=(ci&52428)>>>2|(ci&13107)<<2,ci=(ci&61680)>>>4|(ci&3855)<<4,Vs[nt]=((ci&65280)>>>8|(ci&255)<<8)>>>1}var on=function(i,e,t){for(var n=i.length,r=0,s=new mt(e);r<n;++r)++s[i[r]-1];var o=new mt(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new mt(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[Vs[f]>>>l]=c}else for(a=new mt(n),r=0;r<n;++r)i[r]&&(a[r]=Vs[o[i[r]-1]++]>>>15-i[r]);return a},Kn=new Ge(288);for(var nt=0;nt<144;++nt)Kn[nt]=8;for(var nt=144;nt<256;++nt)Kn[nt]=9;for(var nt=256;nt<280;++nt)Kn[nt]=7;for(var nt=280;nt<288;++nt)Kn[nt]=8;var Gr=new Ge(32);for(var nt=0;nt<32;++nt)Gr[nt]=5;var fp=on(Kn,9,0),hp=on(Kn,9,1),dp=on(Gr,5,0),pp=on(Gr,5,1),zo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Jt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Bo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ys=function(i){return(i/8|0)+(i&7&&1)},an=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof mt?mt:i instanceof $n?$n:Ge)(t-e);return n.set(i.subarray(e,t)),n},$s=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Ge(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Ge(n*3));var o=function(B){var se=e.length;if(B>se){var ce=new Ge(Math.max(se*2,B));ce.set(e),e=ce}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=Jt(i,l,1);var m=Jt(i,l+1,3);if(l+=3,m)if(m==1)u=hp,f=pp,h=9,d=5;else if(m==2){var b=Jt(i,l,31)+257,T=Jt(i,l+10,15)+4,y=b+Jt(i,l+5,31)+1;l+=14;for(var P=new Ge(y),D=new Ge(19),_=0;_<T;++_)D[ks[_]]=Jt(i,l+_*3,7);l+=T*3;for(var S=zo(D),L=(1<<S)-1,q=on(D,S,1),_=0;_<y;){var Q=q[Jt(i,l,L)];l+=Q&15;var p=Q>>>4;if(p<16)P[_++]=p;else{var U=0,F=0;for(p==16?(F=3+Jt(i,l,3),l+=2,U=P[_-1]):p==17?(F=3+Jt(i,l,7),l+=3):p==18&&(F=11+Jt(i,l,127),l+=7);F--;)P[_++]=U}}var H=P.subarray(0,b),Y=P.subarray(b);h=zo(H),d=zo(Y),u=on(H,h,1),f=on(Y,d,1)}else throw"invalid block type";else{var p=Ys(l)+4,v=i[p-4]|i[p-3]<<8,x=p+v;if(x>n){if(s)throw"unexpected EOF";break}r&&o(c+v),e.set(i.subarray(p,x),c),t.b=c+=v,t.p=l=x*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var K=(1<<h)-1,V=(1<<d)-1,z=l;;z=l){var U=u[Bo(i,l)&K],X=U>>>4;if(l+=U&15,l>g){if(s)throw"unexpected EOF";break}if(!U)throw"invalid length/literal";if(X<256)e[c++]=X;else if(X==256){z=l,u=null;break}else{var le=X-254;if(X>264){var _=X-257,ae=Qr[_];le=Jt(i,l,(1<<ae)-1)+Bc[_],l+=ae}var oe=f[Bo(i,l)&V],ve=oe>>>4;if(!oe)throw"invalid distance";l+=oe&15;var Y=up[ve];if(ve>3){var ae=es[ve];Y+=Bo(i,l)&(1<<ae)-1,l+=ae}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var k=c+le;c<k;c+=4)e[c]=e[c-Y],e[c+1]=e[c+1-Y],e[c+2]=e[c+2-Y],e[c+3]=e[c+3-Y];c=k}}t.l=u,t.p=z,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:an(e,0,c)},Sn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},br=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},ko=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return[Xn,0];if(r==1){var o=new Ge(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(y,P){return y.f-P.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,f=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[f].f?c++:f++],l=t[c!=u&&t[c].f<t[f].f?c++:f++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var d=new mt(h+1),g=ea(t[u-1],d,0);if(g>e){var n=0,m=0,p=g-e,v=1<<p;for(s.sort(function(P,D){return d[D.s]-d[P.s]||P.f-D.f});n<r;++n){var x=s[n].s;if(d[x]>e)m+=v-(1<<g-d[x]),d[x]=e;else break}for(m>>>=p;m>0;){var b=s[n].s;d[b]<e?m-=1<<e-d[b]++-1:++n}for(;n>=0&&m;--n){var T=s[n].s;d[T]==e&&(--d[T],++m)}g=e}return[new Ge(d),g]},ea=function(i,e,t){return i.s==-1?Math.max(ea(i.l,e,t+1),ea(i.r,e,t+1)):e[i.s]=t},$l=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new mt(++e),n=0,r=i[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return[t.subarray(0,n),e]},wr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Ts=function(i,e,t){var n=t.length,r=Ys(e+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Kl=function(i,e,t,n,r,s,o,a,l,c,u){Sn(e,u++,t),++r[256];for(var f=ko(r,15),h=f[0],d=f[1],g=ko(s,15),m=g[0],p=g[1],v=$l(h),x=v[0],b=v[1],T=$l(m),y=T[0],P=T[1],D=new mt(19),_=0;_<x.length;++_)D[x[_]&31]++;for(var _=0;_<y.length;++_)D[y[_]&31]++;for(var S=ko(D,7),L=S[0],q=S[1],Q=19;Q>4&&!L[ks[Q-1]];--Q);var U=c+5<<3,F=wr(r,Kn)+wr(s,Gr)+o,H=wr(r,h)+wr(s,m)+o+14+3*Q+wr(D,L)+(2*D[16]+3*D[17]+7*D[18]);if(U<=F&&U<=H)return Ts(e,u,i.subarray(l,l+c));var Y,K,V,z;if(Sn(e,u,1+(H<F)),u+=2,H<F){Y=on(h,d,0),K=h,V=on(m,p,0),z=m;var X=on(L,q,0);Sn(e,u,b-257),Sn(e,u+5,P-1),Sn(e,u+10,Q-4),u+=14;for(var _=0;_<Q;++_)Sn(e,u+3*_,L[ks[_]]);u+=3*Q;for(var le=[x,y],ae=0;ae<2;++ae)for(var oe=le[ae],_=0;_<oe.length;++_){var ve=oe[_]&31;Sn(e,u,X[ve]),u+=L[ve],ve>15&&(Sn(e,u,oe[_]>>>5&127),u+=oe[_]>>>12)}}else Y=fp,K=Kn,V=dp,z=Gr;for(var _=0;_<a;++_)if(n[_]>255){var ve=n[_]>>>18&31;br(e,u,Y[ve+257]),u+=K[ve+257],ve>7&&(Sn(e,u,n[_]>>>23&31),u+=Qr[ve]);var k=n[_]&31;br(e,u,V[k]),u+=z[k],k>3&&(br(e,u,n[_]>>>5&8191),u+=es[k])}else br(e,u,Y[n[_]]),u+=K[n[_]];return br(e,u,Y[256]),u+K[256]},mp=new $n([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Xn=new Ge(0),gp=function(i,e,t,n,r,s){var o=i.length,a=new Ge(n+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(n,a.length-r),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var f=u+65535;f<o?c=Ts(l,c,i.subarray(u,f)):(l[u]=s,c=Ts(l,c,i.subarray(u,o)))}else{for(var h=mp[e-1],d=h>>>13,g=h&8191,m=(1<<t)-1,p=new mt(32768),v=new mt(m+1),x=Math.ceil(t/3),b=2*x,T=function(R){return(i[R]^i[R+1]<<x^i[R+2]<<b)&m},y=new $n(25e3),P=new mt(288),D=new mt(32),_=0,S=0,u=0,L=0,q=0,Q=0;u<o;++u){var U=T(u),F=u&32767,H=v[U];if(p[F]=H,v[U]=F,q<=u){var Y=o-u;if((_>7e3||L>24576)&&Y>423){c=Kl(i,l,0,y,P,D,S,L,Q,u-Q,c),L=_=S=0,Q=u;for(var K=0;K<286;++K)P[K]=0;for(var K=0;K<30;++K)D[K]=0}var V=2,z=0,X=g,le=F-H&32767;if(Y>2&&U==T(u-le))for(var ae=Math.min(d,Y)-1,oe=Math.min(32767,u),ve=Math.min(258,Y);le<=oe&&--X&&F!=H;){if(i[u+V]==i[u+V-le]){for(var k=0;k<ve&&i[u+k]==i[u+k-le];++k);if(k>V){if(V=k,z=le,k>ae)break;for(var B=Math.min(le,k-2),se=0,K=0;K<B;++K){var ce=u-le+K+32768&32767,be=p[ce],pe=ce-be+32768&32767;pe>se&&(se=pe,H=ce)}}}F=H,H=p[F],le+=F-H+32768&32767}if(z){y[L++]=268435456|Qo[V]<<18|Yl[z];var Te=Qo[V]&31,_e=Yl[z]&31;S+=Qr[Te]+es[_e],++P[257+Te],++D[_e],q=u+V,++_}else y[L++]=i[u],++P[i[u]]}}c=Kl(i,l,s,y,P,D,S,L,Q,u-Q,c),!s&&c&7&&(c=Ts(l,c+1,Xn))}return an(a,0,n+Ys(c)+r)},_p=function(){for(var i=new $n(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),ts=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=_p[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},kc=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=n+=t[o];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},Qi=function(i,e,t,n,r){return gp(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!r)},Ks=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},fh=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var f in a.prototype)e+=";"+l+".prototype."+f+"="+a.prototype[f].toString()}else e+=c}else t[l]=a}return[e,t]},Ao=[],Mw=function(i){var e=[];for(var t in i)(i[t]instanceof Ge||i[t]instanceof mt||i[t]instanceof $n)&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},vp=function(i,e,t,n){var r;if(!Ao[t]){for(var s="",o={},a=i.length-1,l=0;l<a;++l)r=fh(i[l],s,o),s=r[0],o=r[1];Ao[t]=fh(i[a],s,o)}var c=Ks({},Ao[t][1]);return yw(Ao[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Mw(c),n)},ns=function(){return[Ge,mt,$n,Qr,es,ks,Bc,up,hp,pp,Vs,on,zo,Jt,Bo,Ys,an,$s,os,Ti,Vc]},is=function(){return[Ge,mt,$n,Qr,es,ks,Qo,Yl,fp,Kn,dp,Gr,Vs,mp,Xn,on,Sn,br,ko,ea,$l,wr,Ts,Kl,Ys,an,gp,Qi,Zs,Ti]},xp=function(){return[Gc,Wc,Ze,ts,_p]},yp=function(){return[Hc,wp]},Mp=function(){return[Xc,Ze,kc]},bp=function(){return[Sp]},Ti=function(i){return postMessage(i,[i.buffer])},Vc=function(i){return i&&i.size&&new Ge(i.size)},rs=function(i,e,t,n,r,s){var o=vp(t,n,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([i,e],e.consume?[i.buffer]:[]),function(){o.terminate()}},ln=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return i.push(e.data[0],e.data[1])}},ss=function(i,e,t,n,r){var s,o=vp(i,n,r,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},Lt=function(i,e){return i[e]|i[e+1]<<8},lt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},_l=function(i,e){return lt(i,e)+lt(i,e+4)*4294967296},Ze=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Gc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&Ze(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Hc=function(i){if(i[0]!=31||i[1]!=139||i[2]!=8)throw"invalid gzip data";var e=i[3],t=10;e&4&&(t+=i[10]|(i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},wp=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Wc=function(i){return 10+(i.filename&&i.filename.length+1||0)},Xc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)},Sp=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function jc(i,e){return!e&&typeof i=="function"&&(e=i,i={}),this.ondata=e,i}var Dn=function(){function i(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return i.prototype.p=function(e,t){this.ondata(Qi(e,this.o,0,0,!t),t)},i.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},i}(),Tp=function(){function i(e,t){ss([is,function(){return[ln,Dn]}],this,jc.call(this,e,t),function(n){var r=new Dn(n.data);onmessage=ln(r)},6)}return i}();function Ep(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[is],function(n){return Ti(Zs(n.data[0],n.data[1]))},0,t)}function Zs(i,e){return Qi(i,e||{},0,0)}var Ut=function(){function i(e){this.s={},this.p=new Ge(0),this.ondata=e}return i.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new Ge(t+e.length);n.set(this.p),n.set(e,t),this.p=n},i.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=$s(this.p,this.o,this.s);this.ondata(an(n,t,this.s.b),this.d),this.o=an(n,this.s.b-32768),this.s.b=this.o.length,this.p=an(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i}(),qc=function(){function i(e){this.ondata=e,ss([ns,function(){return[ln,Ut]}],this,0,function(){var t=new Ut;onmessage=ln(t)},7)}return i}();function Yc(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[ns],function(n){return Ti(os(n.data[0],Vc(n.data[1])))},1,t)}function os(i,e){return $s(i,e)}var ta=function(){function i(e,t){this.c=ts(),this.l=0,this.v=1,Dn.call(this,e,t)}return i.prototype.push=function(e,t){Dn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=Qi(e,this.o,this.v&&Wc(this.o),t&&8,!t);this.v&&(Gc(n,this.o),this.v=0),t&&(Ze(n,n.length-8,this.c.d()),Ze(n,n.length-4,this.l)),this.ondata(n,t)},i}(),hh=function(){function i(e,t){ss([is,xp,function(){return[ln,Dn,ta]}],this,jc.call(this,e,t),function(n){var r=new ta(n.data);onmessage=ln(r)},8)}return i}();function dh(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[is,xp,function(){return[na]}],function(n){return Ti(na(n.data[0],n.data[1]))},2,t)}function na(i,e){e||(e={});var t=ts(),n=i.length;t.p(i);var r=Qi(i,e,Wc(e),8),s=r.length;return Gc(r,e),Ze(r,s-8,t.d()),Ze(r,s-4,n),r}var ia=function(){function i(e){this.v=1,Ut.call(this,e)}return i.prototype.push=function(e,t){if(Ut.prototype.e.call(this,e),this.v){var n=this.p.length>3?Hc(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}Ut.prototype.c.call(this,t)},i}(),Ap=function(){function i(e){this.ondata=e,ss([ns,yp,function(){return[ln,Ut,ia]}],this,0,function(){var t=new ia;onmessage=ln(t)},9)}return i}();function Cp(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[ns,yp,function(){return[ra]}],function(n){return Ti(ra(n.data[0]))},3,t)}function ra(i,e){return $s(i.subarray(Hc(i),-8),e||new Ge(wp(i)))}var Zl=function(){function i(e,t){this.c=kc(),this.v=1,Dn.call(this,e,t)}return i.prototype.push=function(e,t){Dn.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e);var n=Qi(e,this.o,this.v&&2,t&&4,!t);this.v&&(Xc(n,this.o),this.v=0),t&&Ze(n,n.length-4,this.c.d()),this.ondata(n,t)},i}(),bw=function(){function i(e,t){ss([is,Mp,function(){return[ln,Dn,Zl]}],this,jc.call(this,e,t),function(n){var r=new Zl(n.data);onmessage=ln(r)},10)}return i}();function ww(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[is,Mp,function(){return[Jl]}],function(n){return Ti(Jl(n.data[0],n.data[1]))},4,t)}function Jl(i,e){e||(e={});var t=kc();t.p(i);var n=Qi(i,e,2,4);return Xc(n,e),Ze(n,n.length-4,t.d()),n}var sa=function(){function i(e){this.v=1,Ut.call(this,e)}return i.prototype.push=function(e,t){if(Ut.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}Ut.prototype.c.call(this,t)},i}(),Lp=function(){function i(e){this.ondata=e,ss([ns,bp,function(){return[ln,Ut,sa]}],this,0,function(){var t=new sa;onmessage=ln(t)},11)}return i}();function Pp(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return rs(i,e,[ns,bp,function(){return[Gs]}],function(n){return Ti(Gs(n.data[0],Vc(n.data[1])))},5,t)}function Gs(i,e){return $s((Sp(i),i.subarray(2,-4)),e)}var Rp=function(){function i(e){this.G=ia,this.I=Ut,this.Z=sa,this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new Ge(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var r=this,s=function(){r.ondata.apply(r,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},i}(),Sw=function(){function i(e){this.G=Ap,this.I=qc,this.Z=Lp,this.ondata=e}return i.prototype.push=function(e,t){Rp.prototype.push.call(this,e,t)},i}();function Tw(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return i[0]==31&&i[1]==139&&i[2]==8?Cp(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Yc(i,e,t):Pp(i,e,t)}function Ew(i,e){return i[0]==31&&i[1]==139&&i[2]==8?ra(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?os(i,e):Gs(i,e)}var $c=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r;s instanceof Ge?t[o]=[s,n]:Array.isArray(s)?t[o]=[s[0],Ks(n,s[1])]:$c(s,o+"/",t,n)}},ph=typeof TextEncoder<"u"&&new TextEncoder,Ql=typeof TextDecoder<"u"&&new TextDecoder,Dp=0;try{Ql.decode(Xn,{stream:!0}),Dp=1}catch{}var Ip=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return[e,an(i,t-1)];r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Aw=function(){function i(e){this.ondata=e,Dp?this.t=new TextDecoder:this.p=Xn}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new Ge(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=Ip(n),s=r[0],o=r[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},i}(),Cw=function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(wi(e),this.d=t||!1)},i}();function wi(i,e){if(e){for(var t=new Ge(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(ph)return ph.encode(i);for(var r=i.length,s=new Ge(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var l=new Ge(o+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return an(s,0,o)}function Kc(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Ql)return Ql.decode(i);var r=Ip(i),s=r[0],o=r[1];if(o.length)throw"invalid utf-8 data";return s}}var Fp=function(i){return i==1?3:i<6?2:i==9?1:0},Op=function(i,e){return e+30+Lt(i,e+26)+Lt(i,e+28)},Np=function(i,e,t){var n=Lt(i,e+28),r=Kc(i.subarray(e+46,e+46+n),!(Lt(i,e+8)&2048)),s=e+46+n,o=lt(i,e+20),a=t&&o==4294967295?Up(i,s):[o,lt(i,e+24),lt(i,e+42)],l=a[0],c=a[1],u=a[2];return[Lt(i,e+10),l,c,r,s+Lt(i,e+30)+Lt(i,e+32),u]},Up=function(i,e){for(;Lt(i,e)!=1;e+=4+Lt(i,e+2));return[_l(i,e+12),_l(i,e+4),_l(i,e+20)]},yi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Hr=function(i,e,t,n,r,s,o,a){var l=n.length,c=t.extra,u=a&&a.length,f=yi(c);Ze(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s==null&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),d=h.getFullYear()-1980;if(d<0||d>119)throw"date not in range 1980-2099";if(Ze(i,e,d<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),e+=4,s!=null&&(Ze(i,e,t.crc),Ze(i,e+4,s),Ze(i,e+8,t.size)),Ze(i,e+12,l),Ze(i,e+14,f),e+=16,o!=null&&(Ze(i,e,u),Ze(i,e+6,t.attrs),Ze(i,e+10,o),e+=14),i.set(n,e),e+=l,f)for(var g in c){var m=c[g],p=m.length;Ze(i,e,+g),Ze(i,e+2,p),i.set(m,e+4),e+=4+p}return u&&(i.set(a,e),e+=u),e},Zc=function(i,e,t,n,r){Ze(i,e,101010256),Ze(i,e+8,t),Ze(i,e+10,t),Ze(i,e+12,n),Ze(i,e+16,r)},Hs=function(){function i(e){this.filename=e,this.c=ts(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i}(),Lw=function(){function i(e,t){var n=this;t||(t={}),Hs.call(this,e),this.d=new Dn(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Fp(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){Hs.prototype.push.call(this,e,t)},i}(),Pw=function(){function i(e,t){var n=this;t||(t={}),Hs.call(this,e),this.d=new Tp(t,function(r,s,o){n.ondata(r,s,o)}),this.compression=8,this.flag=Fp(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){Hs.prototype.push.call(this,e,t)},i}(),Rw=function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=wi(e.filename),r=n.length,s=e.comment,o=s&&wi(s),a=r!=e.filename.length||o&&s.length!=o.length,l=r+yi(e.extra)+30;if(r>65535)throw"filename too long";var c=new Ge(l);Hr(c,0,e,n,a);var u=[c],f=function(){for(var p=0,v=u;p<v.length;p++){var x=v[p];t.ondata(null,x,!1)}u=[]},h=this.d;this.d=0;var d=this.u.length,g=Ks(e,{f:n,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),h){var p=t.u[d+1];p?p.r():t.d=1}h=1}}),m=0;e.ondata=function(p,v,x){if(p)t.ondata(p,v,x),t.terminate();else if(m+=v.length,u.push(v),x){var b=new Ge(16);Ze(b,0,134695760),Ze(b,4,e.crc),Ze(b,8,m),Ze(b,12,e.size),u.push(b),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&f()},this.u.push(g)},i.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var o=s[r];n+=46+o.f.length+yi(o.extra)+(o.o?o.o.length:0)}for(var a=new Ge(n+22),l=0,c=this.u;l<c.length;l++){var o=c[l];Hr(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+yi(o.extra)+(o.o?o.o.length:0),t+=o.b}Zc(a,e,this.u.length,n,t),this.ondata(null,a,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i}();function Dw(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};$c(i,"",n,e);var r=Object.keys(n),s=r.length,o=0,a=0,l=s,c=new Array(s),u=[],f=function(){for(var m=0;m<u.length;++m)u[m]()},h=function(){var m=new Ge(a+22),p=o,v=a-o;a=0;for(var x=0;x<l;++x){var b=c[x];try{var T=b.c.length;Hr(m,a,b,b.f,b.u,T);var y=30+b.f.length+yi(b.extra),P=a+y;m.set(b.c,P),Hr(m,o,b,b.f,b.u,T,a,b.m),o+=16+y+(b.m?b.m.length:0),a=P+T}catch(D){return t(D,null)}}Zc(m,o,c.length,v,p),t(null,m)};s||h();for(var d=function(m){var p=r[m],v=n[p],x=v[0],b=v[1],T=ts(),y=x.length;T.p(x);var P=wi(p),D=P.length,_=b.comment,S=_&&wi(_),L=S&&S.length,q=yi(b.extra),Q=b.level==0?0:8,U=function(F,H){if(F)f(),t(F,null);else{var Y=H.length;c[m]=Ks(b,{size:y,crc:T.d(),c:H,f:P,m:S,u:D!=p.length||S&&_.length!=L,compression:Q}),o+=30+D+q+Y,a+=76+2*(D+q)+(L||0)+Y,--s||h()}};if(D>65535&&U("filename too long",null),!Q)U(null,x);else if(y<16e4)try{U(null,Zs(x,b))}catch(F){U(F,null)}else u.push(Ep(x,b,U))},g=0;g<l;++g)d(g);return f}function Iw(i,e){e||(e={});var t={},n=[];$c(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,f=wi(o),h=f.length,d=c.comment,g=d&&wi(d),m=g&&g.length,p=yi(c.extra);if(h>65535)throw"filename too long";var v=u?Zs(l,c):l,x=v.length,b=ts();b.p(l),n.push(Ks(c,{size:l.length,crc:b.d(),c:v,f,m:g,u:h!=o.length||g&&d.length!=m,o:r,compression:u})),r+=30+h+p+x,s+=76+2*(h+p)+(m||0)+x}for(var T=new Ge(s+22),y=r,P=s-r,D=0;D<n.length;++D){var f=n[D];Hr(T,f.o,f,f.f,f.u,f.c.length);var _=30+f.f.length+yi(f.extra);T.set(f.c,f.o+_),Hr(T,r,f,f.f,f.u,f.c.length,f.o,f.m),r+=16+_+(f.m?f.m.length:0)}return Zc(T,r,n.length,P,y),T}var zp=function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i}(),Fw=function(){function i(){var e=this;this.i=new Ut(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},i.compression=8,i}(),Ow=function(){function i(e,t){var n=this;t<32e4?this.i=new Ut(function(r,s){n.ondata(null,r,s)}):(this.i=new qc(function(r,s,o){n.ondata(r,s,o)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=an(e,0)),this.i.push(e,t)},i.compression=8,i}(),Nw=function(){function i(e){this.onfile=e,this.k=[],this.o={0:zp},this.p=Xn}return i.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new Ge(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,f=this.c,h=f&&this.d,d=function(){var v,x=lt(c,a);if(x==67324752){o=1,l=a,g.d=null,g.c=0;var b=Lt(c,a+6),T=Lt(c,a+8),y=b&2048,P=b&8,D=Lt(c,a+26),_=Lt(c,a+28);if(u>a+30+D+_){var S=[];g.k.unshift(S),o=2;var L=lt(c,a+18),q=lt(c,a+22),Q=Kc(c.subarray(a+30,a+=30+D),!y);L==4294967295?(v=P?[-2]:Up(c,a),L=v[0],q=v[1]):P&&(L=-1),a+=_,g.c=L;var U,F={name:Q,compression:T,start:function(){if(!F.ondata)throw"no callback";if(!L)F.ondata(null,Xn,!0);else{var H=n.o[T];if(!H)throw"unknown compression type "+T;U=L<0?new H(Q):new H(Q,L,q),U.ondata=function(z,X,le){F.ondata(z,X,le)};for(var Y=0,K=S;Y<K.length;Y++){var V=K[Y];U.push(V,!1)}n.k[0]==S&&n.c?n.d=U:U.push(Xn,!0)}},terminate:function(){U&&U.terminate&&U.terminate()}};L>=0&&(F.size=L,F.originalSize=q),g.onfile(F)}return"break"}else if(f){if(x==134695760)return l=a+=12+(f==-2&&8),o=3,g.c=0,"break";if(x==33639248)return l=a-=4,o=3,g.c=0,"break"}},g=this;a<u-4;++a){var m=d();if(m==="break")break}if(this.p=Xn,f<0){var p=o?c.subarray(0,l-12-(f==-2&&8)-(lt(c,l-16)==134695760&&4)):c.subarray(0,a);h?h.push(p,!!o):this.k[+(o==2)].push(p)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},i.prototype.register=function(e){this.o[e.compression]=e},i}();function Uw(i,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var h=0;h<t.length;++h)t[h]()},r={},s=i.length-22;lt(i,s)!=101010256;--s)if(!s||i.length-s>65558){e("invalid zip file",null);return}var o=Lt(i,s+8);o||e(null,{});var a=o,l=lt(i,s+16),c=l==4294967295;if(c){if(s=lt(i,s-12),lt(i,s)!=101075792){e("invalid zip file",null);return}a=o=lt(i,s+32),l=lt(i,s+48)}for(var u=function(h){var d=Np(i,l,c),g=d[0],m=d[1],p=d[2],v=d[3],x=d[4],b=d[5],T=Op(i,b);l=x;var y=function(D,_){D?(n(),e(D,null)):(r[v]=_,--o||e(null,r))};if(!g)y(null,an(i,T,T+m));else if(g==8){var P=i.subarray(T,T+m);if(m<32e4)try{y(null,os(P,new Ge(p)))}catch(D){y(D,null)}else t.push(Yc(P,{size:p},y))}else y("unknown compression type "+g,null)},f=0;f<a;++f)u();return n}function zw(i){for(var e={},t=i.length-22;lt(i,t)!=101010256;--t)if(!t||i.length-t>65558)throw"invalid zip file";var n=Lt(i,t+8);if(!n)return{};var r=lt(i,t+16),s=r==4294967295;if(s){if(t=lt(i,t-12),lt(i,t)!=101075792)throw"invalid zip file";n=lt(i,t+32),r=lt(i,t+48)}for(var o=0;o<n;++o){var a=Np(i,r,s),l=a[0],c=a[1],u=a[2],f=a[3],h=a[4],d=a[5],g=Op(i,d);if(r=h,!l)e[f]=an(i,g,g+c);else if(l==8)e[f]=os(i.subarray(g,g+c),new Ge(u));else throw"unknown compression type "+l}return e}const Bw=Object.freeze(Object.defineProperty({__proto__:null,Deflate:Dn,AsyncDeflate:Tp,deflate:Ep,deflateSync:Zs,Inflate:Ut,AsyncInflate:qc,inflate:Yc,inflateSync:os,Gzip:ta,AsyncGzip:hh,gzip:dh,gzipSync:na,Gunzip:ia,AsyncGunzip:Ap,gunzip:Cp,gunzipSync:ra,Zlib:Zl,AsyncZlib:bw,zlib:ww,zlibSync:Jl,Unzlib:sa,AsyncUnzlib:Lp,unzlib:Pp,unzlibSync:Gs,compress:dh,AsyncCompress:hh,compressSync:na,Compress:ta,Decompress:Rp,AsyncDecompress:Sw,decompress:Tw,decompressSync:Ew,DecodeUTF8:Aw,EncodeUTF8:Cw,strToU8:wi,strFromU8:Kc,ZipPassThrough:Hs,ZipDeflate:Lw,AsyncZipDeflate:Pw,Zip:Rw,zip:Dw,zipSync:Iw,UnzipPassThrough:zp,UnzipInflate:Fw,AsyncUnzipInflate:Ow,Unzip:Nw,unzip:Uw,unzipSync:zw},Symbol.toStringTag,{value:"Module"}));function Bp(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function kw(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],f=s[a-c],h=r[c]/(u+f);r[c]=l+u*h,l=f*h}r[a]=l}return r}function Vw(i,e,t,n){const r=Bp(i,n,e),s=kw(r,n,i,e),o=new Ye(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Gw(i,e,t,n,r){const s=[];for(let f=0;f<=t;++f)s[f]=0;const o=[];for(let f=0;f<=n;++f)o[f]=s.slice(0);const a=[];for(let f=0;f<=t;++f)a[f]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let f=1;f<=t;++f){l[f]=e-r[i+1-f],c[f]=r[i+f]-e;let h=0;for(let d=0;d<f;++d){const g=c[d+1],m=l[f-d];a[f][d]=g+m;const p=a[d][f-1]/a[f][d];a[d][f]=h+g*p,h=m*p}a[f][f]=h}for(let f=0;f<=t;++f)o[0][f]=a[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let p=0;const v=f-m,x=t-m;f>=m&&(g[d][0]=g[h][0]/a[x+1][v],p=g[d][0]*a[v][x]);const b=v>=-1?1:-v,T=f-1<=x?m-1:t-f;for(let P=b;P<=T;++P)g[d][P]=(g[h][P]-g[h][P-1])/a[x+1][v+P],p+=g[d][P]*a[v+P][x];f<=x&&(g[d][m]=-g[h][m-1]/a[x+1][f],p+=g[d][m]*a[f][x]),o[m][f]=p;const y=h;h=d,d=y}}let u=t;for(let f=1;f<=n;++f){for(let h=0;h<=t;++h)o[f][h]*=u;u*=t-f}return o}function Hw(i,e,t,n,r){const s=r<i?r:i,o=[],a=Bp(i,n,e),l=Gw(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=s;++u){const f=c[a-i].clone().multiplyScalar(l[u][0]);for(let h=1;h<=i;++h)f.add(c[a-i+h].clone().multiplyScalar(l[u][h]));o[u]=f}for(let u=s+1;u<=r+1;++u)o[u]=new Ye(0,0,0);return o}function Ww(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function Xw(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new O(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(Ww(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function jw(i,e,t,n,r){const s=Hw(i,e,t,n,r);return Xw(s)}class mh extends Wb{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Ye(a.x,a.y,a.z,a.w)}}getPoint(e,t=new O){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Vw(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new O){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=jw(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let Ve,at,Ft;class qw extends ba{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?Nc.extractUrlBase(e):s.path,a=new nw(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(Qw(e))Ve=new Jw().parse(e);else{const r=Hp(e);if(!eS(r))throw new Error("THREE.FBXLoader: Unknown format.");if(_h(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+_h(r));Ve=new Zw().parse(r)}const n=new Vt(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Yw(n,this.manager).parse(Ve)}}class Yw{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){at=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new $w().parse(r);return this.parseScene(r,s,n),Ft}parseConnections(){const e=new Map;return"Connections"in Ve&&Ve.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ve.Objects){const n=Ve.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ve.Objects){const n=Ve.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Fs:Gt,n.wrapT=a===0?Fs:Gt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=at.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Pt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Pt):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in Ve.Objects){const n=Ve.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!at.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new dl;break;case"lambert":a=new Xb;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new dl;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Fe().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Fe().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Fe().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Fe().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Fe().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Fe().fromArray(e.SpecularColor.value));const s=this;return at.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=et);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=et);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=qo,r.envMap.encoding=et);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=et);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ve.Objects&&t in Ve.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=at.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ve.Objects){const n=Ve.Objects.Deformer;for(const r in n){const s=n[r],o=at.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Pe().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=at.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Ft=new Ar;const r=this.parseModels(e.skeletons,t,n),s=Ve.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),at.get(l.ID).parents.forEach(function(f){const h=r.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&Ft.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),Ft.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Vp(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new Kw().parse();Ft.children.length===1&&Ft.children[0].isGroup&&(Ft.children[0].animations=a,Ft=Ft.children[0]),Ft.animations=a}parseModels(e,t,n){const r=new Map,s=Ve.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=at.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Xl;break;case"Null":default:u=new Ar;break}u.name=l.attrName?qe.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=s;s=new Xl,s.matrixWorld.copy(c.transformLink),s.name=r?qe.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,f!==null&&s.add(f)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=Ve.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const f=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new Ct(u,c,s,o),f!==null&&t.setFocalLength(f);break;case 1:t=new Dc(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new it;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=Ve.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Fe().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new sh(s,o,a,l);break;case 1:t=new Uo(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Ln.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Ln.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new sw(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new sh(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new dl({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new kb(s,o),r.normalizeSkinWeights()):r=new rn(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new tp({color:3342591,linewidth:1});return new Hb(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Gp(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&at.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Ve.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Ft.add(e.target)):e.lookAt(new O().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];at.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;at.get(c).parents.forEach(function(f){n.has(f.ID)&&n.get(f.ID).bind(new Fc(o.bones),r[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ve.Objects){const t=Ve.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Pe().fromArray(s.Matrix.a)}):e[r.Node]=new Pe().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ve&&"AmbientColor"in Ve.GlobalSettings){const e=Ve.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Fe(t,n,r);Ft.add(new lw(s,1))}}}}class $w{parse(e){const t=new Map;if("Geometry"in Ve.Objects){const n=Ve.Objects.Geometry;for(const r in n){const s=at.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(f){return Ve.Objects.Model[f.ID]});if(o.length===0)return;const a=e.children.reduce(function(f,h){return r[h.ID]!==void 0&&(f=r[h.ID]),f},null);e.children.forEach(function(f){n.morphTargets[f.ID]!==void 0&&s.push(n.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Gp(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Vp(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new nn;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Nt(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Nt(a.colors,3)),t&&(s.setAttribute("skinIndex",new Lc(a.weightsIndices,4)),s.setAttribute("skinWeight",new Nt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Wt().getNormalMatrix(r),u=new Nt(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let f="uv"+(u+1).toString();u===0&&(f="uv"),s.setAttribute(f,new Nt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(f,h){f!==c&&(s.addGroup(u,h-u,c),c=f,u=h)}),s.groups.length>0){const f=s.groups[s.groups.length-1],h=f.start+f.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,g){let m,p=!1;d<0&&(d=d^-1,p=!0);let v=[],x=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const b=Co(g,n,d,e.color);l.push(b[0],b[1],b[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(b){x.push(b.weight),v.push(b.id)}),x.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const b=[0,0,0,0],T=[0,0,0,0];x.forEach(function(y,P){let D=y,_=v[P];T.forEach(function(S,L,q){if(D>S){q[L]=D,D=S;const Q=b[L];b[L]=_,_=Q}})}),v=b,x=T}for(;x.length<4;)x.push(0),v.push(0);for(let b=0;b<4;++b)u.push(x[b]),f.push(v[b])}if(e.normal){const b=Co(g,n,d,e.normal);a.push(b[0],b[1],b[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=Co(g,n,d,e.material)[0],m<0&&(console.warn("THREE.FBXLoader: Invalid material index:",m),m=0)),e.uv&&e.uv.forEach(function(b,T){const y=Co(g,n,d,b);c[T]===void 0&&(c[T]=[]),c[T].push(y[0]),c[T].push(y[1])}),r++,p&&(h.genFace(t,e,o,m,a,l,c,u,f,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],f=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let f=2;f<u;f++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(f-1)*3]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(f-1)*4]),e.vertexWeights.push(l[(f-1)*4+1]),e.vertexWeights.push(l[(f-1)*4+2]),e.vertexWeights.push(l[(f-1)*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(f-1)*4]),e.weightsIndices.push(c[(f-1)*4+1]),e.weightsIndices.push(c[(f-1)*4+2]),e.weightsIndices.push(c[(f-1)*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(f-1)*3]),e.colors.push(o[(f-1)*3+1]),e.colors.push(o[(f-1)*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(f-1)*3]),e.normal.push(s[(f-1)*3+1]),e.normal.push(s[(f-1)*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2])),t.uv&&t.uv.forEach(function(h,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(f-1)*2]),e.uvs[d].push(a[d][(f-1)*2+1]),e.uvs[d].push(a[d][f*2]),e.uvs[d].push(a[d][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ve.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;u[m]=a[g*3],u[m+1]=a[g*3+1],u[m+2]=a[g*3+2]}const f={vertexIndices:o,vertexPositions:u},h=this.genBuffers(f),d=new Nt(h.vertex,3);d.name=s||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(mh===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new nn;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new nn;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let f=0,h=o.length;f<h;f+=4)s.push(new Ye().fromArray(o,f));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let f=0;f<n;++f)s.push(s[f])}const u=new mh(n,r,s,a,l).getPoints(s.length*12);return new nn().setFromPoints(u)}}class Kw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ve.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ve.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ve.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(tS),values:t[n].KeyValueFloat.a},s=at.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Ve.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=at.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const f=at.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=Ve.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?qe.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Ft.traverse(function(g){g.ID===h.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Pe),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const f=at.get(l.ID).parents.filter(function(v){return v.relationship!==void 0})[0].ID,h=at.get(f).parents[0].ID,d=at.get(h).parents[0].ID,g=at.get(d).parents[0].ID,m=Ve.Objects.Model[g],p={modelName:m.attrName?qe.sanitizeNodeName(m.attrName):"",morphName:Ve.Objects.Deformer[f].attrName};s[c]=p}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=Ve.Objects.AnimationStack,n={};for(const r in t){const s=at.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new Zb(e.name,-1,t)}generateTracks(e){const t=[];let n=new O,r=new tn,s=new O;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new Xt().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new Bs(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Ln.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Ln.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Ln.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(Ln.degToRad),r.push(o),r=new Xt().fromArray(r),r=new tn().setFromEuler(r)),s!==void 0&&(s=s.map(Ln.degToRad),s.push(o),s=new Xt().fromArray(s),s=new tn().setFromEuler(s).invert());const c=new tn,u=new Xt,f=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(f,h/3*4);return new Zr(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=Ft.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new zs(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],f=(e.times[t]-c)/o;let h=c+f;const d=[],g=[];for(;h<e.times[t];)d.push(h),h+=f,g.push(l),l+=a;e.times=vh(e.times,t,d),e.values=vh(e.values,t,g)}}}}class Zw{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new kp,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=s.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),r="connections",s=[c,u],iS(s,f),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=xl(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=xl(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=xl(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class Jw{parse(e){const t=new gh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new kp;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),f!==""&&(n.attrType=f),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}typeof Bw>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=Gs(new Uint8Array(e.getArrayBuffer(o))),l=new gh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class gh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),Nc.decodeText(new Uint8Array(t))}}class kp{add(e,t){this[e]=t}}function Qw(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===Hp(i,0,e.length)}function eS(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function _h(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function tS(i){return i/46186158e3}const nS=[];function Co(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return rS(nS,n.buffer,s,o)}const vl=new Xt,xr=new O;function Vp(i){const e=new Pe,t=new Pe,n=new Pe,r=new Pe,s=new Pe,o=new Pe,a=new Pe,l=new Pe,c=new Pe,u=new Pe,f=new Pe,h=new Pe,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(xr.fromArray(i.translation)),i.preRotation){const L=i.preRotation.map(Ln.degToRad);L.push(i.eulerOrder||Xt.DefaultOrder),t.makeRotationFromEuler(vl.fromArray(L))}if(i.rotation){const L=i.rotation.map(Ln.degToRad);L.push(i.eulerOrder||Xt.DefaultOrder),n.makeRotationFromEuler(vl.fromArray(L))}if(i.postRotation){const L=i.postRotation.map(Ln.degToRad);L.push(i.eulerOrder||Xt.DefaultOrder),r.makeRotationFromEuler(vl.fromArray(L)),r.invert()}i.scale&&s.scale(xr.fromArray(i.scale)),i.scalingOffset&&a.setPosition(xr.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(xr.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(xr.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(xr.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(f.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),m=new Pe;m.extractRotation(u);const p=new Pe;p.copyPosition(u);const v=p.clone().invert().multiply(u),x=m.clone().invert().multiply(v),b=s,T=new Pe;if(d===0)T.copy(m).multiply(g).multiply(x).multiply(b);else if(d===1)T.copy(m).multiply(x).multiply(g).multiply(b);else{const q=new Pe().scale(new O().setFromMatrixScale(f)).clone().invert(),Q=x.clone().multiply(q);T.copy(m).multiply(g).multiply(Q).multiply(b)}const y=c.clone().invert(),P=o.clone().invert();let D=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(y).multiply(a).multiply(o).multiply(s).multiply(P);const _=new Pe().copyPosition(D),S=u.clone().multiply(_);return h.copyPosition(S),D=h.clone().multiply(T),D.premultiply(u.invert()),D}function Gp(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function xl(i){return i.split(",").map(function(t){return parseFloat(t)})}function Hp(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),Nc.decodeText(new Uint8Array(i,e,t))}function iS(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function rS(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function vh(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}class sS{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,r=new Fe().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),s=t.defaultAlpha!==void 0?t.defaultAlpha:1,o=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,a={},l=60,c={},u={},f={outlineThickness:{value:n},outlineColor:{value:r},outlineAlpha:{value:s}},h=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),d=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <encodings_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function g(){return new Yn({type:"OutlineEffect",uniforms:jd.merge([xe.fog,xe.displacementmap,f]),vertexShader:h,fragmentShader:d,side:jt})}function m(_){let S=a[_.uuid];return S===void 0&&(S={material:g(),used:!0,keepAlive:o,count:0},a[_.uuid]=S),S.used=!0,S.material}function p(_){const S=m(_);return c[S.uuid]=_,P(S,_),S}function v(_){const S=_.geometry;let L=!1;return _.geometry!==void 0&&(S.isBufferGeometry?L=S.attributes.normal!==void 0:L=!0),_.isMesh===!0&&_.material!==void 0&&L===!0}function x(_){if(v(_)!==!1){if(Array.isArray(_.material))for(let S=0,L=_.material.length;S<L;S++)_.material[S]=p(_.material[S]);else _.material=p(_.material);u[_.uuid]=_.onBeforeRender,_.onBeforeRender=T}}function b(_){if(v(_)!==!1){if(Array.isArray(_.material))for(let S=0,L=_.material.length;S<L;S++)_.material[S]=c[_.material[S].uuid];else _.material=c[_.material.uuid];_.onBeforeRender=u[_.uuid]}}function T(_,S,L,q,Q){const U=c[Q.uuid];U!==void 0&&y(Q,U)}function y(_,S){const L=S.userData.outlineParameters;_.uniforms.outlineAlpha.value=S.opacity,L!==void 0&&(L.thickness!==void 0&&(_.uniforms.outlineThickness.value=L.thickness),L.color!==void 0&&_.uniforms.outlineColor.value.fromArray(L.color),L.alpha!==void 0&&(_.uniforms.outlineAlpha.value=L.alpha)),S.displacementMap&&(_.uniforms.displacementMap.value=S.displacementMap,_.uniforms.displacementScale.value=S.displacementScale,_.uniforms.displacementBias.value=S.displacementBias)}function P(_,S){if(_.name==="invisible")return;const L=S.userData.outlineParameters;_.fog=S.fog,_.toneMapped=S.toneMapped,_.premultipliedAlpha=S.premultipliedAlpha,_.displacementMap=S.displacementMap,L!==void 0?(S.visible===!1?_.visible=!1:_.visible=L.visible!==void 0?L.visible:!0,_.transparent=L.alpha!==void 0&&L.alpha<1?!0:S.transparent,L.keepAlive!==void 0&&(a[S.uuid].keepAlive=L.keepAlive)):(_.transparent=S.transparent,_.visible=S.visible),(S.wireframe===!0||S.depthTest===!1)&&(_.visible=!1),S.clippingPlanes&&(_.clipping=!0,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.clipShadows=S.clipShadows),_.version=S.version}function D(){let _;_=Object.keys(c);for(let S=0,L=_.length;S<L;S++)c[_[S]]=void 0;_=Object.keys(u);for(let S=0,L=_.length;S<L;S++)u[_[S]]=void 0;_=Object.keys(a);for(let S=0,L=_.length;S<L;S++){const q=_[S];a[q].used===!1?(a[q].count++,a[q].keepAlive===!1&&a[q].count>l&&delete a[q]):(a[q].used=!1,a[q].count=0)}}this.render=function(_,S){if(this.enabled===!1){e.render(_,S);return}const L=e.autoClear;e.autoClear=this.autoClear,e.render(_,S),e.autoClear=L,this.renderOutline(_,S)},this.renderOutline=function(_,S){const L=e.autoClear,q=_.matrixWorldAutoUpdate,Q=_.background,U=e.shadowMap.enabled;_.matrixWorldAutoUpdate=!1,_.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,_.traverse(x),e.render(_,S),_.traverse(b),D(),_.matrixWorldAutoUpdate=q,_.background=Q,e.autoClear=L,e.shadowMap.enabled=U},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(_,S,L){e.clear(_,S,L)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(_){e.setPixelRatio(_)},this.getSize=function(_){return e.getSize(_)},this.setSize=function(_,S,L){e.setSize(_,S,L)},this.setViewport=function(_,S,L,q){e.setViewport(_,S,L,q)},this.setScissor=function(_,S,L,q){e.setScissor(_,S,L,q)},this.setScissorTest=function(_){e.setScissorTest(_)},this.setRenderTarget=function(_){e.setRenderTarget(_)}}}const oS=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};let Mn,bn,Ii,hs,xt,ui,xh,ds,ps,Lo,yl;const aS={threshold:.003},lS={props:{modelUrl:{type:String,required:!0}},data(){return{showErrorInfo:!1,showProgress:!1,progressValue:0}},mounted(){this.initScene(this.modelUrl)},methods:{initScene(i){ds=1,ps=[],this.destroy();const e=12e3;Mn=new Ct(45,window.innerWidth/window.innerHeight,30,e),Mn.position.set(0,0,1),bn=new fl,Ii=new fl,hs=new fl;const t=new pl(16777215,4473924);t.position.set(0,2e3,0),t.intensity=.8,bn.add(t);const n=new pl(16777215,4473924);n.position.set(0,2e3,0),n.intensity=.8,Ii.add(n);const r=new pl(16777215,4473924);n.position.set(0,2e3,0),n.intensity=.8,hs.add(r);const s=new Uo(14540253);s.castShadow=!1,s.intensity=.2,s.position.set(0,1e3,1e3),bn.add(s);const o=new Uo(14540253);o.castShadow=!1,o.intensity=.2,o.position.set(0,1e3,1e3),Ii.add(o);const a=new Uo(14540253);o.castShadow=!1,o.intensity=.2,o.position.set(0,1e3,1e3),hs.add(a),xt=new ep({canvas:this.$refs.threeCanvas,antialias:!0}),xt.setPixelRatio(window.devicePixelRatio),xt.setSize(window.innerWidth*ds,window.innerHeight*ds),xt.shadowMap.enabled=!1,ui=new xw(Mn,xt.domElement),ui.autoRotate=!0,ui.autoRotateSpeed=1,ui.enablePan=!1,ui.target.set(0,0,0);const l=new sp;new qw(l).load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/CF067T004-\u6D77\u5C14-\u6EDA\u7B52-\u5E72\u8863\u673A-10kg-HGS100-306.fbx",H=>{H.traverse(Y=>{Y.isMesh&&(Y.castShadow=!1,Y.receiveShadow=!1),Y.userData.parent=H}),H.position.set(3052+430/2+581/2,-411*2-180,-600/2),H.rotation.set(0,-Math.PI/2,0),H.name="newModel",bn.add(H),ps.push(H)});const u=[],f=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_r.jpg"),h=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_l.jpg"),d=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_u.jpg"),g=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_d.jpg"),m=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_f.jpg"),p=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withoutXYJ/_b.jpg");u.push(f),u.push(h),u.push(d),u.push(g),u.push(m),u.push(p);const v=[];for(let H=0;H<6;H++)v.push(new Zo({map:u[H]}));const x=new rn(new Ki(12e3,12e3,12e3),v);x.geometry.scale(1,1,-1),bn.add(x);const b=[],T=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_r_2022.10.25.png"),y=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_l.jpg"),P=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_u.jpg"),D=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_d.jpg"),_=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_f.jpg"),S=new Vt().load("https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/panorama/commodity/withXYJ/_b.jpg");b.push(T),b.push(y),b.push(P),b.push(D),b.push(_),b.push(S);const L=[];function q(){return`
          varying vec2 vUv;

          void main() {
            vUv = uv; 

            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * modelViewPosition; 
          }
        `}function Q(){return`
          uniform sampler2D  tex; 
          uniform sampler2D  tex1; 
          uniform float threshold;
          varying vec2 vUv;
        
          void main() {
            vec4 pixel = texture2D(tex1, vUv);
            // vec4 pixel1 = texture2D(tex1, vUv);
            //  vec4 temp = pixel1 - pixel;
            //  float alpha = temp.x * temp.x + temp.y * temp.y + temp.z * temp.z;
            //  if(alpha < threshold) {
            //   alpha = 1.0;
            //  }else {
            //   alpha = 0.0;
            //   // discard;
            //  }

            // if(pixel.w < 0.95) {
            //   discard;
            // }
            // gl_FragColor = vec4(pixel.xyz, 1);

            gl_FragColor = pixel;
          }
        `}let U;for(let H=0;H<6;H++)if(H===0){let Y={tex:{type:"t",value:u[H]},tex1:{type:"t",value:b[H]},threshold:{value:aS.threshold}};U=new Yn({uniforms:Y,fragmentShader:Q(),vertexShader:q()}),U.transparent=!0,L.push(U)}else L.push(new Zo({map:b[H]}));const F=new rn(new Ki(1e3,1e3,1e3),L);F.geometry.scale(1,1,-1),hs.add(F),Lo=new sS(xt,{defaultThickness:.003,defaultColor:[0,0,1]}),yl=new vw,window.addEventListener("resize",this.onWindowResize),window.addEventListener("mousedown",this.onMouseDown),this.animate(),document.addEventListener("click",this.onClick)},onProgress(i){if(i.lengthComputable){const e=i.loaded/i.total*100;this.progressValue=Math.round(e,2)}},onError(i){console.log(i.message),this.showProgress=!1,this.$refs.threeCanvas.hidden=!0,this.showErrorInfo=!0},onWindowResize(){Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),xt.setSize(window.innerWidth*ds,window.innerHeight*ds)},onMouseDown(){ui.autoRotate=!1},onClick(i){i.preventDefault();const e=new De;e.x=i.clientX/window.innerWidth*2-1,e.y=-(i.clientY/window.innerHeight)*2+1,yl.setFromCamera(e,Mn);const t=yl.intersectObjects(ps,!0);t[0]&&(ps.forEach(n=>{bn.remove(n),Ii.remove(n)}),ps.forEach(n=>{bn.add(n)}),bn.remove(t[0].object.userData.parent),Ii.add(t[0].object.userData.parent))},animate(){xh=requestAnimationFrame(this.animate),ui.update(),xt.render(bn,Mn),xt.autoClear=!1,Lo.autoClear=xt.autoClear,Lo.render(Ii,Mn),xt.render(hs,Mn),xt.autoClear=!0,Lo.autoClear=!0},destroy(){cancelAnimationFrame(xh),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("mousedown",this.onMouseDown),xt&&(xt.domElement.addEventListener("dblclick",null,!1),xt.forceContextLoss()),xt=null,bn=null,Ii=null,Mn=null,ui=null}},beforeDestroy(){console.log("beforeDestroy"),this.destroy()}},cS={id:"textDiv"},uS={key:0,id:"errorText"},fS={id:"threeCanvas",ref:"threeCanvas"},hS=["value"];function dS(i,e,t,n,r,s){return bs(),Da("div",null,[jo("div",cS,[r.showErrorInfo?(bs(),Da("text",uS,"\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8D44\u6E90")):Mu("",!0)]),jo("canvas",fS,null,512),r.showProgress?(bs(),Da("progress",{key:0,id:"progress",value:r.progressValue,max:"100"},null,8,hS)):Mu("",!0)])}const Wp=oS(lS,[["render",dS],["__scopeId","data-v-4abb07c6"]]),pS={__name:"App",setup(i){return(e,t)=>(bs(),Cd(Wp,{modelUrl:"https://syn-yf-design-tool.oss-cn-beijing.aliyuncs.com/save_fbx/AJ0261M07-\u6A21\u578B.fbx"}))}};/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sr=typeof window<"u";function mS(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function Ml(i,e){const t={};for(const n in e){const r=e[n];t[n]=vn(r)?r.map(i):i(r)}return t}const Es=()=>{},vn=Array.isArray,gS=/\/$/,_S=i=>i.replace(gS,"");function bl(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=MS(n!=null?n:e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function vS(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yh(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function xS(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Wr(e.matched[n],t.matched[r])&&Xp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Wr(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Xp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!yS(i[t],e[t]))return!1;return!0}function yS(i,e){return vn(i)?Mh(i,e):vn(e)?Mh(e,i):i===e}function Mh(i,e){return vn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function MS(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Ws;(function(i){i.pop="pop",i.push="push"})(Ws||(Ws={}));var As;(function(i){i.back="back",i.forward="forward",i.unknown=""})(As||(As={}));function bS(i){if(!i)if(Sr){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),_S(i)}const wS=/^[^#]+#/;function SS(i,e){return i.replace(wS,"#")+e}function TS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function ES(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=TS(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bh(i,e){return(history.state?history.state.position-e:-1)+i}const ec=new Map;function AS(i,e){ec.set(i,e)}function CS(i){const e=ec.get(i);return ec.delete(i),e}let LS=()=>location.protocol+"//"+location.host;function jp(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),yh(l,"")}return yh(t,i)+n+r}function PS(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=jp(i,location),g=t.value,m=e.value;let p=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}p=m?h.position-m.position:0}else n(d);r.forEach(v=>{v(t.value,g,{delta:p,type:Ws.pop,direction:p?p>0?As.forward:As.back:As.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState(Qe({},h.state,{scroll:wa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function wh(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?wa():null}}function RS(i){const{history:e,location:t}=window,n={value:jp(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:LS()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=Qe({},e.state,wh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:wa()});s(u.current,u,!0);const f=Qe({},wh(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function DS(i){i=bS(i);const e=RS(i),t=PS(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:i,go:n,createHref:SS.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function IS(i){return typeof i=="string"||i&&typeof i=="object"}function qp(i){return typeof i=="string"||typeof i=="symbol"}const fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yp=Symbol("");var Sh;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Sh||(Sh={}));function Xr(i,e){return Qe(new Error,{type:i,[Yp]:!0},e)}function Vn(i,e){return i instanceof Error&&Yp in i&&(e==null||!!(i.type&e))}const Th="[^/]+?",FS={sensitive:!1,strict:!1,start:!0,end:!0},OS=/[.+*?^${}()[\]/\\]/g;function NS(i,e){const t=Qe({},FS,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(OS,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:m,optional:p,regexp:v}=h;s.push({name:g,repeatable:m,optional:p});const x=v||Th;if(x!==Th){d+=10;try{new RegExp(`(${x})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+T.message)}}let b=m?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(b=p&&c.length<2?`(?:/${b})`:"/"+b),p&&(b+="?"),r+=b,d+=20,p&&(d+=-8),m&&(d+=-20),x===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,v=g in c?c[g]:"";if(vn(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=vn(v)?v.join("/"):v;if(!x)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function US(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zS(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=US(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Eh(n))return 1;if(Eh(r))return-1}return r.length-n.length}function Eh(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const BS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function VS(i){if(!i)return[[]];if(i==="/")return[[BS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:kS.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function GS(i,e,t){const n=NS(VS(i.path),t),r=Qe(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function HS(i,e){const t=[],n=new Map;e=Lh({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const d=!h,g=WS(u);g.aliasOf=h&&h.record;const m=Lh(e,u),p=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of b)p.push(Qe({},g,{components:h?h.record.components:g.components,path:T,aliasOf:h?h.record:g}))}let v,x;for(const b of p){const{path:T}=b;if(f&&T[0]!=="/"){const y=f.record.path,P=y[y.length-1]==="/"?"":"/";b.path=f.record.path+(T&&P+T)}if(v=GS(b,f,m),h?h.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),d&&u.name&&!Ch(v)&&o(u.name)),g.children){const y=g.children;for(let P=0;P<y.length;P++)s(y[P],v,h&&h.children[P])}h=h||v,l(v)}return x?()=>{o(x)}:Es}function o(u){if(qp(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&zS(u,t[f])>=0&&(u.record.path!==t[f].record.path||!$p(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ch(u)&&n.set(u.record.name,u)}function c(u,f){let h,d={},g,m;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw Xr(1,{location:u});m=h.record.name,d=Qe(Ah(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Ah(u.params,h.keys.map(x=>x.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(d=h.parse(g),m=h.record.name);else{if(h=f.name?n.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw Xr(1,{location:u,currentLocation:f});m=h.record.name,d=Qe({},f.params,u.params),g=h.stringify(d)}const p=[];let v=h;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:g,params:d,matched:p,meta:jS(p)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ah(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function WS(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:XS(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function XS(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Ch(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function jS(i){return i.reduce((e,t)=>Qe(e,t.meta),{})}function Lh(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function $p(i,e){return e.children.some(t=>t===i||$p(i,t))}const Kp=/#/g,qS=/&/g,YS=/\//g,$S=/=/g,KS=/\?/g,Zp=/\+/g,ZS=/%5B/g,JS=/%5D/g,Jp=/%5E/g,QS=/%60/g,Qp=/%7B/g,e1=/%7C/g,em=/%7D/g,t1=/%20/g;function Jc(i){return encodeURI(""+i).replace(e1,"|").replace(ZS,"[").replace(JS,"]")}function n1(i){return Jc(i).replace(Qp,"{").replace(em,"}").replace(Jp,"^")}function tc(i){return Jc(i).replace(Zp,"%2B").replace(t1,"+").replace(Kp,"%23").replace(qS,"%26").replace(QS,"`").replace(Qp,"{").replace(em,"}").replace(Jp,"^")}function i1(i){return tc(i).replace($S,"%3D")}function r1(i){return Jc(i).replace(Kp,"%23").replace(KS,"%3F")}function s1(i){return i==null?"":r1(i).replace(YS,"%2F")}function oa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function o1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zp," "),o=s.indexOf("="),a=oa(o<0?s:s.slice(0,o)),l=o<0?null:oa(s.slice(o+1));if(a in e){let c=e[a];vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ph(i){let e="";for(let t in i){const n=i[t];if(t=i1(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(vn(n)?n.map(s=>s&&tc(s)):[n&&tc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function a1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=vn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const l1=Symbol(""),Rh=Symbol(""),Qc=Symbol(""),tm=Symbol(""),nc=Symbol("");function ms(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function di(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Xr(4,{from:t,to:e})):f instanceof Error?a(f):IS(f)?a(Xr(2,{from:e,to:f})):(s&&n.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function wl(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(c1(a)){const c=(a.__vccOpts||a)[e];c&&r.push(di(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=mS(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&di(h,t,n,s,o)()}))}}return r}function c1(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Dh(i){const e=vi(Qc),t=vi(tm),n=en(()=>e.resolve(Pr(i.to))),r=en(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Wr.bind(null,u));if(h>-1)return h;const d=Ih(l[c-2]);return c>1&&Ih(u)===d&&f[f.length-1].path!==d?f.findIndex(Wr.bind(null,l[c-2])):h}),s=en(()=>r.value>-1&&d1(t.params,n.value.params)),o=en(()=>r.value>-1&&r.value===t.matched.length-1&&Xp(t.params,n.value.params));function a(l={}){return h1(l)?e[Pr(i.replace)?"replace":"push"](Pr(i.to)).catch(Es):Promise.resolve()}return{route:n,href:en(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const u1=pd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dh,setup(i,{slots:e}){const t=Xs(Dh(i)),{options:n}=vi(Qc),r=en(()=>({[Fh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Fh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:Dd("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),f1=u1;function h1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function d1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!vn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function Ih(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Fh=(i,e,t)=>i!=null?i:e!=null?e:t,p1=pd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=vi(nc),r=en(()=>i.route||n.value),s=vi(Rh,0),o=en(()=>{let c=Pr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=en(()=>r.value.matched[o.value]);Ro(Rh,en(()=>o.value+1)),Ro(l1,a),Ro(nc,r);const l=Jm();return Do(()=>[l.value,a.value,i.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Wr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return Oh(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Dd(h,Qe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Oh(t.default,{Component:p,route:c})||p}}});function Oh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const m1=p1;function g1(i){const e=HS(i.routes,i),t=i.parseQuery||o1,n=i.stringifyQuery||Ph,r=i.history,s=ms(),o=ms(),a=ms(),l=Qm(fi);let c=fi;Sr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ml.bind(null,k=>""+k),f=Ml.bind(null,s1),h=Ml.bind(null,oa);function d(k,B){let se,ce;return qp(k)?(se=e.getRecordMatcher(k),ce=B):ce=k,e.addRoute(ce,se)}function g(k){const B=e.getRecordMatcher(k);B&&e.removeRoute(B)}function m(){return e.getRoutes().map(k=>k.record)}function p(k){return!!e.getRecordMatcher(k)}function v(k,B){if(B=Qe({},B||l.value),typeof k=="string"){const _e=bl(t,k,B.path),A=e.resolve({path:_e.path},B),R=r.createHref(_e.fullPath);return Qe(_e,A,{params:h(A.params),hash:oa(_e.hash),redirectedFrom:void 0,href:R})}let se;if("path"in k)se=Qe({},k,{path:bl(t,k.path,B.path).path});else{const _e=Qe({},k.params);for(const A in _e)_e[A]==null&&delete _e[A];se=Qe({},k,{params:f(k.params)}),B.params=f(B.params)}const ce=e.resolve(se,B),be=k.hash||"";ce.params=u(h(ce.params));const pe=vS(n,Qe({},k,{hash:n1(be),path:ce.path})),Te=r.createHref(pe);return Qe({fullPath:pe,hash:be,query:n===Ph?a1(k.query):k.query||{}},ce,{redirectedFrom:void 0,href:Te})}function x(k){return typeof k=="string"?bl(t,k,l.value.path):Qe({},k)}function b(k,B){if(c!==k)return Xr(8,{from:B,to:k})}function T(k){return D(k)}function y(k){return T(Qe(x(k),{replace:!0}))}function P(k){const B=k.matched[k.matched.length-1];if(B&&B.redirect){const{redirect:se}=B;let ce=typeof se=="function"?se(k):se;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=x(ce):{path:ce},ce.params={}),Qe({query:k.query,hash:k.hash,params:"path"in ce?{}:k.params},ce)}}function D(k,B){const se=c=v(k),ce=l.value,be=k.state,pe=k.force,Te=k.replace===!0,_e=P(se);if(_e)return D(Qe(x(_e),{state:typeof _e=="object"?Qe({},be,_e.state):be,force:pe,replace:Te}),B||se);const A=se;A.redirectedFrom=B;let R;return!pe&&xS(n,ce,se)&&(R=Xr(16,{to:A,from:ce}),X(ce,ce,!0,!1)),(R?Promise.resolve(R):S(A,ce)).catch(W=>Vn(W)?Vn(W,2)?W:z(W):K(W,A,ce)).then(W=>{if(W){if(Vn(W,2))return D(Qe({replace:Te},x(W.to),{state:typeof W.to=="object"?Qe({},be,W.to.state):be,force:pe}),B||A)}else W=q(A,ce,!0,Te,be);return L(A,ce,W),W})}function _(k,B){const se=b(k,B);return se?Promise.reject(se):Promise.resolve()}function S(k,B){let se;const[ce,be,pe]=_1(k,B);se=wl(ce.reverse(),"beforeRouteLeave",k,B);for(const _e of ce)_e.leaveGuards.forEach(A=>{se.push(di(A,k,B))});const Te=_.bind(null,k,B);return se.push(Te),yr(se).then(()=>{se=[];for(const _e of s.list())se.push(di(_e,k,B));return se.push(Te),yr(se)}).then(()=>{se=wl(be,"beforeRouteUpdate",k,B);for(const _e of be)_e.updateGuards.forEach(A=>{se.push(di(A,k,B))});return se.push(Te),yr(se)}).then(()=>{se=[];for(const _e of k.matched)if(_e.beforeEnter&&!B.matched.includes(_e))if(vn(_e.beforeEnter))for(const A of _e.beforeEnter)se.push(di(A,k,B));else se.push(di(_e.beforeEnter,k,B));return se.push(Te),yr(se)}).then(()=>(k.matched.forEach(_e=>_e.enterCallbacks={}),se=wl(pe,"beforeRouteEnter",k,B),se.push(Te),yr(se))).then(()=>{se=[];for(const _e of o.list())se.push(di(_e,k,B));return se.push(Te),yr(se)}).catch(_e=>Vn(_e,8)?_e:Promise.reject(_e))}function L(k,B,se){for(const ce of a.list())ce(k,B,se)}function q(k,B,se,ce,be){const pe=b(k,B);if(pe)return pe;const Te=B===fi,_e=Sr?history.state:{};se&&(ce||Te?r.replace(k.fullPath,Qe({scroll:Te&&_e&&_e.scroll},be)):r.push(k.fullPath,be)),l.value=k,X(k,B,se,Te),z()}let Q;function U(){Q||(Q=r.listen((k,B,se)=>{if(!ve.listening)return;const ce=v(k),be=P(ce);if(be){D(Qe(be,{replace:!0}),ce).catch(Es);return}c=ce;const pe=l.value;Sr&&AS(bh(pe.fullPath,se.delta),wa()),S(ce,pe).catch(Te=>Vn(Te,12)?Te:Vn(Te,2)?(D(Te.to,ce).then(_e=>{Vn(_e,20)&&!se.delta&&se.type===Ws.pop&&r.go(-1,!1)}).catch(Es),Promise.reject()):(se.delta&&r.go(-se.delta,!1),K(Te,ce,pe))).then(Te=>{Te=Te||q(ce,pe,!1),Te&&(se.delta&&!Vn(Te,8)?r.go(-se.delta,!1):se.type===Ws.pop&&Vn(Te,20)&&r.go(-1,!1)),L(ce,pe,Te)}).catch(Es)}))}let F=ms(),H=ms(),Y;function K(k,B,se){z(k);const ce=H.list();return ce.length?ce.forEach(be=>be(k,B,se)):console.error(k),Promise.reject(k)}function V(){return Y&&l.value!==fi?Promise.resolve():new Promise((k,B)=>{F.add([k,B])})}function z(k){return Y||(Y=!k,U(),F.list().forEach(([B,se])=>k?se(k):B()),F.reset()),k}function X(k,B,se,ce){const{scrollBehavior:be}=i;if(!Sr||!be)return Promise.resolve();const pe=!se&&CS(bh(k.fullPath,0))||(ce||!se)&&history.state&&history.state.scroll||null;return rd().then(()=>be(k,B,pe)).then(Te=>Te&&ES(Te)).catch(Te=>K(Te,k,B))}const le=k=>r.go(k);let ae;const oe=new Set,ve={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:v,options:i,push:T,replace:y,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:V,install(k){const B=this;k.component("RouterLink",f1),k.component("RouterView",m1),k.config.globalProperties.$router=B,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Pr(l)}),Sr&&!ae&&l.value===fi&&(ae=!0,T(r.location).catch(be=>{}));const se={};for(const be in fi)se[be]=en(()=>l.value[be]);k.provide(Qc,B),k.provide(tm,Xs(se)),k.provide(nc,l);const ce=k.unmount;oe.add(k),k.unmount=function(){oe.delete(k),oe.size<1&&(c=fi,Q&&Q(),Q=null,l.value=fi,ae=!1,Y=!1),ce()}}};return ve}function yr(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function _1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Wr(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Wr(c,l))||r.push(l))}return[t,n,r]}const v1=g1({history:DS("/panorama/"),routes:[{path:"/",name:"home",component:Wp}]}),nm=D0(pS);nm.use(v1);nm.mount("#app");
