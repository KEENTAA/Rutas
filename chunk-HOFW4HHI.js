import{d as ue,j as fe,q as pe}from"./chunk-XV76VTDZ.js";import{$ as ie,A as re,Ba as he,E as $,Ha as G,K as te,N as se,Q as I,R as oe,T as w,V as R,W as m,a as H,ba as ae,d as V,ea as ce,fa as le,g as X,m as ee,n as J,pa as de,r as k,y as ne}from"./chunk-FVHFTNIJ.js";var L=class{},B=class{},E=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,t);let s=(e.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}setHeaderEntries(e,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=e.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var W=class{encodeKey(e){return ye(e)}encodeValue(e){return ye(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Ie(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,o)),e.decodeValue(s.slice(o+1))],h=t.get(a)||[];h.push(i),t.set(a,h)}),t}var Me=/%(\d[a-f0-9])/gi,De={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ye(n){return encodeURIComponent(n).replace(Me,(e,t)=>De[t]??e)}function _(n){return`${n}`}var P=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new W,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Ie(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let r=e.fromObject[t],s=Array.isArray(r)?r.map(_):[_(r)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(r=>{let s=e[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(_(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let r=this.map.get(e.param)||[],s=r.indexOf(_(e.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var q=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function xe(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function me(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ge(n){return typeof Blob<"u"&&n instanceof Blob}function Te(n){return typeof FormData<"u"&&n instanceof FormData}function ke(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var F=class n{constructor(e,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(xe(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new E,this.context??=new q,!this.params)this.params=new P,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let i=t.indexOf("?"),h=i===-1?"?":i<t.length-1?"&":"";this.urlWithParams=t+h+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||me(this.body)||ge(this.body)||Te(this.body)||ke(this.body)?this.body:this.body instanceof P?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Te(this.body)?null:ge(this.body)?this.body.type||null:me(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof P?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,h=e.reportProgress??this.reportProgress,c=e.headers||this.headers,f=e.params||this.params,g=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((p,T)=>p.set(T,e.setHeaders[T]),c)),e.setParams&&(f=Object.keys(e.setParams).reduce((p,T)=>p.set(T,e.setParams[T]),f)),new n(t,r,a,{params:f,headers:c,context:g,reportProgress:h,responseType:s,withCredentials:i,transferCache:o})}},N=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(N||{}),j=class{constructor(e,t=200,r="OK"){this.headers=e.headers||new E,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},z=class n extends j{constructor(e={}){super(e),this.type=N.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},U=class n extends j{constructor(e={}){super(e),this.type=N.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},b=class extends j{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},be=200,Fe=204;function C(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Le=(()=>{let e=class e{constructor(r){this.handler=r}request(r,s,o={}){let a;if(r instanceof F)a=r;else{let c;o.headers instanceof E?c=o.headers:c=new E(o.headers);let f;o.params&&(o.params instanceof P?f=o.params:f=new P({fromObject:o.params})),a=new F(r,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=J(a).pipe(re(c=>this.handler.handle(c)));if(r instanceof F||o.observe==="events")return i;let h=i.pipe(ne(c=>c instanceof U));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return h.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return h.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return h.pipe(k(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return h.pipe(k(c=>c.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(r,s={}){return this.request("DELETE",r,s)}get(r,s={}){return this.request("GET",r,s)}head(r,s={}){return this.request("HEAD",r,s)}jsonp(r,s){return this.request("JSONP",r,{params:new P().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,s={}){return this.request("OPTIONS",r,s)}patch(r,s,o={}){return this.request("PATCH",r,C(o,s))}post(r,s,o={}){return this.request("POST",r,C(o,s))}put(r,s,o={}){return this.request("PUT",r,C(o,s))}};e.\u0275fac=function(s){return new(s||e)(R(L))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),je=/^\)\]\}',?\n/,Ue="X-Request-URL";function we(n){if(n.url)return n.url;let e=Ue.toLocaleLowerCase();return n.headers.get(e)}var _e=(()=>{let e=class e{constructor(){this.fetchImpl=m(K,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=m(he)}handle(r){return new X(s=>{let o=new AbortController;return this.doRequest(r,o.signal,s).then(Y,a=>s.error(new b({error:a}))),()=>o.abort()})}doRequest(r,s,o){return V(this,null,function*(){let a=this.createRequestInit(r),i;try{let y=this.fetchImpl(r.urlWithParams,H({signal:s},a));Be(y),o.next({type:N.Sent}),i=yield y}catch(y){o.error(new b({error:y,status:y.status??0,statusText:y.statusText,url:r.urlWithParams,headers:y.headers}));return}let h=new E(i.headers),c=i.statusText,f=we(i)??r.urlWithParams,g=i.status,p=null;if(r.reportProgress&&o.next(new z({headers:h,status:g,statusText:c,url:f})),i.body){let y=i.headers.get("content-length"),M=[],l=i.body.getReader(),d=0,v,O,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>V(this,null,function*(){for(;;){let{done:A,value:x}=yield l.read();if(A)break;if(M.push(x),d+=x.length,r.reportProgress){O=r.responseType==="text"?(O??"")+(v??=new TextDecoder).decode(x,{stream:!0}):void 0;let Q=()=>o.next({type:N.DownloadProgress,total:y?+y:void 0,loaded:d,partialText:O});u?u.run(Q):Q()}}}));let D=this.concatChunks(M,d);try{let A=i.headers.get("Content-Type")??"";p=this.parseBody(r,D,A)}catch(A){o.error(new b({error:A,headers:new E(i.headers),status:i.status,statusText:i.statusText,url:we(i)??r.urlWithParams}));return}}g===0&&(g=p?be:0),g>=200&&g<300?(o.next(new U({body:p,headers:h,status:g,statusText:c,url:f})),o.complete()):o.error(new b({error:p,headers:h,status:g,statusText:c,url:f}))})}parseBody(r,s,o){switch(r.responseType){case"json":let a=new TextDecoder().decode(s).replace(je,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(s);case"blob":return new Blob([s],{type:o});case"arraybuffer":return s.buffer}}createRequestInit(r){let s={},o=r.withCredentials?"include":void 0;if(r.headers.forEach((a,i)=>s[a]=i.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){let a=r.detectContentTypeHeader();a!==null&&(s["Content-Type"]=a)}return{body:r.serializeBody(),method:r.method,headers:s,credentials:o}}concatChunks(r,s){let o=new Uint8Array(s),a=0;for(let i of r)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),K=class{};function Y(){}function Be(n){n.then(Y,Y)}function Pe(n,e){return e(n)}function ze(n,e){return(t,r)=>e.intercept(t,{handle:s=>n(s,r)})}function Se(n,e,t){return(r,s)=>le(t,()=>e(r,o=>n(o,s)))}var Ve=new w(""),Z=new w(""),Xe=new w(""),Ne=new w("",{providedIn:"root",factory:()=>!0});function Je(){let n=null;return(e,t)=>{n===null&&(n=(m(Ve,{optional:!0})??[]).reduceRight(ze,Pe));let r=m(G);if(m(Ne)){let o=r.add();return n(e,t).pipe($(()=>r.remove(o)))}else return n(e,t)}}var Ee=(()=>{let e=class e extends L{constructor(r,s){super(),this.backend=r,this.injector=s,this.chain=null,this.pendingTasks=m(G),this.contributeToStability=m(Ne)}handle(r){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(Z),...this.injector.get(Xe,[])]));this.chain=s.reduceRight((o,a)=>Se(o,a,this.injector),Pe)}if(this.contributeToStability){let s=this.pendingTasks.add();return this.chain(r,o=>this.backend.handle(o)).pipe($(()=>this.pendingTasks.remove(s)))}else return this.chain(r,s=>this.backend.handle(s))}};e.\u0275fac=function(s){return new(s||e)(R(B),R(ce))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();var $e=/^\)\]\}',?\n/;function Ge(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var ve=(()=>{let e=class e{constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new se(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?ee(s.\u0275loadImpl()):J(null)).pipe(te(()=>new X(a=>{let i=s.build();if(i.open(r.method,r.urlWithParams),r.withCredentials&&(i.withCredentials=!0),r.headers.forEach((l,d)=>i.setRequestHeader(l,d.join(","))),r.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){let l=r.detectContentTypeHeader();l!==null&&i.setRequestHeader("Content-Type",l)}if(r.responseType){let l=r.responseType.toLowerCase();i.responseType=l!=="json"?l:"text"}let h=r.serializeBody(),c=null,f=()=>{if(c!==null)return c;let l=i.statusText||"OK",d=new E(i.getAllResponseHeaders()),v=Ge(i)||r.url;return c=new z({headers:d,status:i.status,statusText:l,url:v}),c},g=()=>{let{headers:l,status:d,statusText:v,url:O}=f(),u=null;d!==Fe&&(u=typeof i.response>"u"?i.responseText:i.response),d===0&&(d=u?be:0);let D=d>=200&&d<300;if(r.responseType==="json"&&typeof u=="string"){let A=u;u=u.replace($e,"");try{u=u!==""?JSON.parse(u):null}catch(x){u=A,D&&(D=!1,u={error:x,text:u})}}D?(a.next(new U({body:u,headers:l,status:d,statusText:v,url:O||void 0})),a.complete()):a.error(new b({error:u,headers:l,status:d,statusText:v,url:O||void 0}))},p=l=>{let{url:d}=f(),v=new b({error:l,status:i.status||0,statusText:i.statusText||"Unknown Error",url:d||void 0});a.error(v)},T=!1,y=l=>{T||(a.next(f()),T=!0);let d={type:N.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),r.responseType==="text"&&i.responseText&&(d.partialText=i.responseText),a.next(d)},M=l=>{let d={type:N.UploadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),a.next(d)};return i.addEventListener("load",g),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),r.reportProgress&&(i.addEventListener("progress",y),h!==null&&i.upload&&i.upload.addEventListener("progress",M)),i.send(h),a.next({type:N.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",g),i.removeEventListener("timeout",p),r.reportProgress&&(i.removeEventListener("progress",y),h!==null&&i.upload&&i.upload.removeEventListener("progress",M)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(s){return new(s||e)(R(pe))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),Ae=new w(""),Ce="XSRF-TOKEN",We=new w("",{providedIn:"root",factory:()=>Ce}),qe="X-XSRF-TOKEN",Ke=new w("",{providedIn:"root",factory:()=>qe}),S=class{},Ye=(()=>{let e=class e{constructor(r,s,o){this.doc=r,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=fe(r,this.cookieName),this.lastCookieString=r),this.lastToken}};e.\u0275fac=function(s){return new(s||e)(R(ue),R(de),R(We))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();function Ze(n,e){let t=n.url.toLowerCase();if(!m(Ae)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let r=m(S).getToken(),s=m(Ke);return r!=null&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),e(n)}var Oe=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(Oe||{});function Qe(n,e){return{\u0275kind:n,\u0275providers:e}}function He(...n){let e=[Le,ve,Ee,{provide:L,useExisting:Ee},{provide:B,useFactory:()=>m(_e,{optional:!0})??m(ve)},{provide:Z,useValue:Ze,multi:!0},{provide:Ae,useValue:!0},{provide:S,useClass:Ye}];for(let t of n)e.push(...t.\u0275providers);return ae(e)}var Re=new w("");function en(){return Qe(Oe.LegacyInterceptors,[{provide:Re,useFactory:Je},{provide:Z,useExisting:Re,multi:!0}])}var bn=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=ie({type:e}),e.\u0275inj=oe({providers:[He(en())]});let n=e;return n})();export{Le as a,bn as b};
