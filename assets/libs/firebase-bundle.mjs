const e=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,a=i?e[t+1]:0,o=t+2<e.length,B=o?e[t+2]:0,u=s>>2,c=(3&s)<<4|a>>4;let l=(15&a)<<2|B>>6,h=63&B;o||(h=64,i||(l=64)),r.push(n[u],n[c],n[l],n[h])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const B=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==B)throw new n;const u=i<<2|a>>4;if(s.push(u),64!==o){const e=a<<4&240|o>>2;if(s.push(e),64!==B){const e=o<<6&192|B;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(n){return function(n){const r=e(n);return t.encodeByteArray(r,!0)}(n).replace(/\./g,"")},s=function(e){try{return t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,a=()=>{try{return i()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&s(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},o=e=>a()?.emulatorHosts?.[e],B=()=>a()?.config,u=e=>a()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return!function(){const e=a()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){try{let n=0,r="";for(;n<e.length;){const s=e.indexOf("{$",n);if(-1===s){r+=e.substring(n);break}const i=e.indexOf("}",s+2);if(-1===i){r+=e.substring(n);break}const a=e.substring(s+2,i),o=t[a];r+=e.substring(n,s)+(null!=o?String(o):`<${a}?>`),n=i+1}return r}catch(t){return e}}(s,n):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new C(r,a,n)}}function f(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(p(n)&&p(i)){if(!f(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function p(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class m{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function y(e){return(await fetch(e,{credentials:"include"})).ok}class _{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new c;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:I})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=I){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=I){return this.instances.has(e)}getOptions(e=I){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===I?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=I){return this.component?this.component.multipleInstances?e:I:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new v(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(T||(T={}));const A={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},N=T.INFO,O={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},S=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=O[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class F{constructor(e){this.name=e,this._logLevel=N,this._logHandler=S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?A[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}let L,R;const x=new WeakMap,k=new WeakMap,P=new WeakMap,M=new WeakMap,G=new WeakMap;let H={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return k.get(e);if("objectStoreNames"===t)return e.objectStoreNames||P.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function U(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(R||(R=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(j(this),t),J(x.get(this))}:function(...t){return J(e.apply(j(this),t))}:function(t,...n){const r=e.call(j(this),t,...n);return P.set(r,t.sort?t.sort():[t]),J(r)}}function V(e){return"function"==typeof e?U(e):(e instanceof IDBTransaction&&function(e){if(k.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});k.set(e,t)}(e),t=e,(L||(L=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,H):e);var t}function J(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(J(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&x.set(t,e)}).catch(()=>{}),G.set(t,e),t}(e);if(M.has(e))return M.get(e);const t=V(e);return t!==e&&(M.set(e,t),G.set(t,e)),t}const j=e=>G.get(e);const q=["get","getKey","getAll","getAllKeys","count"],K=["put","add","delete","clear"],z=new Map;function Q(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(z.get(t))return z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=K.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!q.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),s&&i.done]))[0]};return z.set(t,i),i}H=(e=>({...e,get:(t,n,r)=>Q(t,n)||e.get(t,n,r),has:(t,n)=>!!Q(t,n)||e.has(t,n)}))(H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===t?.type}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const Y="@firebase/app",$="0.16.4",X=new F("@firebase/app"),Z="@firebase/app-compat",ee="@firebase/analytics-compat",te="@firebase/analytics",ne="@firebase/app-check-compat",re="@firebase/app-check",se="@firebase/auth",ie="@firebase/auth-compat",ae="@firebase/database",oe="@firebase/data-connect",Be="@firebase/database-compat",ue="@firebase/functions",ce="@firebase/functions-compat",le="@firebase/installations",he="@firebase/installations-compat",Ce="@firebase/messaging",de="@firebase/messaging-compat",fe="@firebase/performance",pe="@firebase/performance-compat",ge="@firebase/remote-config",me="@firebase/remote-config-compat",Ee="@firebase/storage",De="@firebase/storage-compat",we="@firebase/firestore",ye="@firebase/ai",_e="@firebase/firestore-compat",Ie="firebase",ve="[DEFAULT]",be={[Y]:"fire-core",[Z]:"fire-core-compat",[te]:"fire-analytics",[ee]:"fire-analytics-compat",[re]:"fire-app-check",[ne]:"fire-app-check-compat",[se]:"fire-auth",[ie]:"fire-auth-compat",[ae]:"fire-rtdb",[oe]:"fire-data-connect",[Be]:"fire-rtdb-compat",[ue]:"fire-fn",[ce]:"fire-fn-compat",[le]:"fire-iid",[he]:"fire-iid-compat",[Ce]:"fire-fcm",[de]:"fire-fcm-compat",[fe]:"fire-perf",[pe]:"fire-perf-compat",[ge]:"fire-rc",[me]:"fire-rc-compat",[Ee]:"fire-gcs",[De]:"fire-gcs-compat",[we]:"fire-fst",[_e]:"fire-fst-compat",[ye]:"fire-vertex","fire-js":"fire-js",[Ie]:"fire-js-all"},Te=new Map,Ae=new Map,Ne=new Map;function Oe(e,t){try{e.container.addComponent(t)}catch(n){X.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Se(e){const t=e.name;if(Ne.has(t))return X.debug(`There were multiple attempts to register component ${t}.`),!1;Ne.set(t,e);for(const t of Te.values())Oe(t,e);for(const t of Ae.values())Oe(t,e);return!0}function Fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Le(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new d("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="13.1.0";function Pe(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:ve,automaticDataCollectionEnabled:!0,...t},s=r.name;if("string"!=typeof s||!s)throw Re.create("bad-app-name",{appName:String(s)});if(n||(n=B()),!n)throw Re.create("no-options");const i=Te.get(s);if(i){if(f(n,i.options)){if(f(r,i.config))return i;throw Re.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}throw Re.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)})}const a=new b(s);for(const e of Ne.values())a.addComponent(e);const o=new xe(n,r,a);return Te.set(s,o),o}function Me(e=ve){const t=Te.get(e);if(!t&&e===ve&&B())return Pe();if(!t)throw Re.create("no-app",{appName:e});return t}function Ge(e,t,n){let r=be[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void X.warn(e.join(" "))}Se(new _(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="firebase-heartbeat-store";let Ue=null;function Ve(){return Ue||(Ue=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),o=J(a);return r&&a.addEventListener("upgradeneeded",e=>{r(J(a.result),e.oldVersion,e.newVersion,J(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(He)}catch(e){console.warn(e)}}}).catch(e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})})),Ue}async function Je(e,t){try{const n=(await Ve()).transaction(He,"readwrite"),r=n.objectStore(He);await r.put(t,je(e)),await n.done}catch(e){if(e instanceof C)X.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:e?.message});X.warn(t.message)}}}function je(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ze(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ke();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){X.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ke(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),Qe(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return X.warn(e),""}}}function Ke(){return(new Date).toISOString().substring(0,10)}class ze{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Ve()).transaction(He),n=await t.objectStore(He).get(je(e));return await t.done,n}catch(e){if(e instanceof C)X.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:e?.message});X.warn(t.message)}}}(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Je(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Je(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Qe(e){return r(JSON.stringify({version:2,heartbeats:e})).length}var We;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We="",Se(new _("platform-logger",e=>new W(e),"PRIVATE")),Se(new _("heartbeat",e=>new qe(e),"PRIVATE")),Ge(Y,$,We),Ge(Y,$,"esm2020"),Ge("fire-js","");function Ye(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge("firebase","13.1.0","app");const $e=Ye,Xe=new d("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ze=new F("@firebase/auth");function et(e,...t){Ze.logLevel<=T.WARN&&Ze.warn(`Auth (${ke}): ${e}`,...t)}function tt(e,...t){Ze.logLevel<=T.ERROR&&Ze.error(`Auth (${ke}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw at(e,...t)}function rt(e,...t){return at(e,...t)}function st(e,t,n){const r={...$e(),[t]:n};return new d("auth","Firebase",r).create(t,{appName:e.name})}function it(e){return st(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function at(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xe.create(e,...t)}function ot(e,t,...n){if(!e)throw at(t,...n)}function Bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tt(t),new Error(t)}function ut(e,t){e||Bt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return"undefined"!=typeof self&&self.location?.href||""}function lt(){return"undefined"!=typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==lt()&&"https:"!==lt()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ht()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t){ut(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},gt=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mt=new Ct(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Dt(e,t,n,r,s={}){return wt(e,s,async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const a=g({...i,key:e.config.apiKey}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const B={method:t,headers:o,...s};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(B.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&w(e.emulatorConfig.host)&&(B.credentials="include"),ft.fetch()(await _t(e,e.config.apiHost,n,a),B)})}async function wt(e,t,n){e._canInitEmulator=!1;const r={...pt,...t};try{const t=new It(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw vt(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw vt(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw vt(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw vt(e,"user-disabled",i);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw st(e,o,a);nt(e,o)}}catch(t){if(t instanceof C)throw t;nt(e,"network-request-failed",{message:String(t)})}}async function yt(e,t,n,r,s={}){const i=await Dt(e,t,n,r,s);return"mfaPendingCredential"in i&&nt(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function _t(e,t,n,r){const s=`${t}${n}?${r}`,i=e,a=i.config.emulator?dt(e.config,s):`${e.config.apiScheme}://${s}`;if(gt.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){return i._getPersistence()._getFinalTarget(a).toString()}return a}class It{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(rt(this.auth,"network-request-failed")),mt.get())})}}function vt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(e,t){return Dt(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function At(e){return 1e3*Number(e)}function Nt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return tt("JWT malformed, contained fewer than 3 sections"),null;try{const e=s(n);return e?JSON.parse(e):(tt("Failed to decode base64 JWT payload"),null)}catch(e){return tt("Caught error parsing JWT payload as JSON",e?.toString()),null}}function Ot(e){const t=Nt(e);return ot(t,"internal-error"),ot(void 0!==t.exp,"internal-error"),ot(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw Ft(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function Ft(e){return e instanceof C&&("auth/user-disabled"===e.code||"auth/user-token-expired"===e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tt(this.lastLoginAt),this.creationTime=Tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e){const t=e.auth,n=await e.getIdToken(),r=await St(e,bt(t,{idToken:n}));ot(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?kt(s.providerUserInfo):[],a=(o=e.providerData,B=i,[...o.filter(e=>!B.some(t=>t.providerId===e.providerId)),...B]);var o,B;const u=e.isAnonymous,c=!(e.email&&s.passwordHash||a?.length),l=!!u&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}function kt(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ot(e.idToken,"internal-error"),ot(void 0!==e.idToken,"internal-error"),ot(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Ot(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ot(0!==e.length,"internal-error");const t=Ot(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(ot(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await wt(e,{},async()=>{const n=g({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=await _t(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:a,body:n};return e.emulatorConfig&&w(e.emulatorConfig.host)&&(o.credentials="include"),ft.fetch()(i,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Pt;return n&&(ot("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(ot("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(ot("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return Bt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){ot("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gt{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await St(this,this.stsTokenManager.getToken(this.auth,e));return ot(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=D(e),r=await n.getIdToken(t),s=Nt(r);ot(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Tt(At(s.auth_time)),issuedAtTime:Tt(At(s.iat)),expirationTime:Tt(At(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}(this,e)}reload(){return async function(e){const t=D(e);await xt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ot(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ot(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await xt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await St(this,async function(e,t){return Dt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,B=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:c,emailVerified:l,isAnonymous:h,providerData:C,stsTokenManager:d}=t;ot(c&&d,e,"internal-error");const f=Pt.fromJSON(this.name,d);ot("string"==typeof c,e,"internal-error"),Mt(n,e.name),Mt(r,e.name),ot("boolean"==typeof l,e,"internal-error"),ot("boolean"==typeof h,e,"internal-error"),Mt(s,e.name),Mt(i,e.name),Mt(a,e.name),Mt(o,e.name),Mt(B,e.name),Mt(u,e.name);const p=new Gt({uid:c,auth:e,email:r,emailVerified:l,displayName:n,isAnonymous:h,photoURL:i,phoneNumber:s,tenantId:a,stsTokenManager:f,createdAt:B,lastLoginAt:u});return C&&Array.isArray(C)&&(p.providerData=C.map(e=>({...e}))),o&&(p._redirectEventId=o),p}static async _fromIdTokenResponse(e,t,n=!1){const r=new Pt;r.updateFromServerResponse(t);const s=new Gt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await xt(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];ot(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?kt(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||s?.length),a=new Pt;a.updateFromIdToken(n);const o=new Gt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:i}),B={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Rt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||s?.length)};return Object.assign(o,B),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Map;function Ut(e){ut(e instanceof Function,"Expected a class definition");let t=Ht.get(e);return t?(ut(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ht.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vt.type="NONE";const Jt=Vt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t,n){return`firebase:${e}:${t}:${n}`}class qt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=jt(this.userKey,r.apiKey,s),this.fullPersistenceKey=jt("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await bt(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new qt(Ut(Jt),e,n);const r=(await Promise.all(t.map(async e=>{try{if(await e._isAvailable())return e}catch{return}}))).filter(e=>e);let s=r[0]||Ut(Jt);const i=jt(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(i);if(t){let r;if("string"==typeof t){const n=await bt(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Gt._fromGetAccountInfoResponse(e,n,t)}else r=Gt._fromJSON(e,t);n!==s&&(a=r),s=n;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&o.length?(s=o[0],a&&await s._set(i,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new qt(s,e,n)):new qt(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xt(t))return"Blackberry";if(Zt(t))return"Webos";if(Qt(t))return"Safari";if((t.includes("chrome/")||Wt(t))&&!t.includes("edge/"))return"Chrome";if($t(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function zt(e=l()){return/firefox\//i.test(e)}function Qt(e=l()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wt(e=l()){return/crios\//i.test(e)}function Yt(e=l()){return/iemobile/i.test(e)}function $t(e=l()){return/android/i.test(e)}function Xt(e=l()){return/blackberry/i.test(e)}function Zt(e=l()){return/webos/i.test(e)}function en(e=l()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tn(){return function(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function nn(e=l()){return en(e)||$t(e)||Zt(e)||Xt(e)||/windows phone/i.test(e)||Yt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t=[]){let n;switch(e){case"Browser":n=Kt(l());break;case"Worker":n=`${Kt(l())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ke}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new un(this),this.idTokenSubscription=new un(this),this.beforeStateQueue=new sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xe,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ut(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await qt.create(this,e)}catch(e){et(`Failed to initialize persistence: ${e}`),this.persistenceManager=await qt.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}try{await this.initializeCurrentUser(t)}catch(e){et(`Failed to initialize current user: ${e}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await bt(this,{idToken:e}),n=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Le(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,s=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==s||!i?.user||(n=i.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ot(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xt(e)}catch(e){if(Ft(e))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(it(this));const t=e?D(e):null;return t&&ot(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ot(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Dt(e,"GET","/v2/passwordPolicy",Et(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new an(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new d("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Dt(e,"POST","/v2/accounts:revokeToken",Et(e,t))}(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ut(e)||this._popupRedirectResolver;ot(t,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ot(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}).catch(e=>{if(!i)if("function"!=typeof t&&t.error)t.error(e);else{if(!n)throw e;n(e)}}),"function"==typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(e){const t=st(this,"internal-error",`An internal AuthError has occurred: ${e?.message||String(e)}`);throw t.customData={originalError:e},t}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ot(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&et(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Bn(e){return D(e)}class un{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new m(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return ot(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ln(e,t,n){const r=Bn(e);ot(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=hn(t),{host:i,port:a}=function(e){const t=hn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Cn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Cn(t)}}}(t),o=null===a?"":`:${a}`,B={url:`${s}//${i}${o}/`},u=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return ot(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void ot(f(B,r.config.emulator)&&f(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=B,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,w(i)?y(`${s}//${i}${o}`):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function hn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Cn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class dn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,t){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e,t){return yt(e,"POST","/v1/accounts:signInWithIdp",Et(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends dn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const i=new pn(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return fn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,fn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=g(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends gn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends mn{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com",En.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn extends mn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Dn.credential(t,n)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com",Dn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends mn{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com",wn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends mn{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yn.credential(t,n)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com",yn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Gt._fromIdTokenResponse(e,n,r),i=In(n);return new _n({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=In(n);return new _n({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function In(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(e){if(Le(e.app))return Promise.reject(it(e));const t=Bn(e);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new _n({user:t.currentUser,providerId:null,operationType:"signIn"});const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){return yt(e,"POST","/v1/accounts:signUp",Et(e,t))}(t,{returnSecureToken:!0}),r=await _n._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends C{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,bn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new bn(e,t,n,r)}}function Tn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw bn._fromErrorAndOperation(e,n,t,r);throw n})}function An(e,t,n,r){return D(e).onAuthStateChanged(t,n,r)}const Nn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nn,"1"),this.storage.removeItem(Nn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends On{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);tn()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sn.type="LOCAL";const Fn=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends On{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ln.type="SESSION";const Rn=Ln;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new xn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map(async e=>e(t.origin,s)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn.receivers=[];class Pn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((a,o)=>{const B=kn("",20);r.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===B)switch(t.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(t.data.response);break;default:clearTimeout(u),clearTimeout(s),o(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:B,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn(){return void 0!==Mn().WorkerGlobalScope&&"function"==typeof Mn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn="firebaseLocalStorageDb",Un="firebaseLocalStorage",Vn="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jn(e,t){return e.transaction([Un],t?"readwrite":"readonly").objectStore(Un)}function qn(){const e=indexedDB.open(Hn,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Un,{keyPath:Vn})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Un)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Hn);return new Jn(e).toPromise()}(),t(await qn()))})})}async function Kn(e,t,n){const r=jn(e,!0).put({[Vn]:t,value:n});return new Jn(r).toPromise()}function zn(e,t){const n=jn(e,!0).delete(t);return new Jn(n).toPromise()}class Qn{registerLifecycleListeners(){"undefined"!=typeof window&&"function"==typeof window.addEventListener&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){"undefined"!=typeof window&&"function"==typeof window.removeEventListener&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise||(this.dbPromise=qn(),this.dbPromise.catch(()=>{this.dbPromise=null})),this.dbPromise}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;if(this.dbPromise){const e=this.dbPromise;this.dbPromise=null;try{(await e).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Gn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(Gn()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await async function(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return!!indexedDB&&(await this._withRetries(async e=>{await Kn(e,Nn,"1"),await zn(e,Nn)}),!0)}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=jn(e,!1).get(t),r=await new Jn(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(e=>{const t=jn(e,!1).getAll();return new Jn(t).toPromise()});if(this.isClosing)return[];if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}catch(e){return this.isClosing||et(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Qn.type="LOCAL";const Wn=Qn;new Ct(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn extends dn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $n(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){if(Le(e.app))return Promise.reject(it(e));const r="signIn",s=await Tn(e,r,t),i=await _n._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}(e.auth,new Yn(e),e.bypassAuthState)}function Xn(e){const{auth:t,user:n}=e;return ot(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(Le(r.app))return Promise.reject(it(r));const s="reauthenticate";try{const i=await St(e,Tn(r,s,t,e),n);ot(i.idToken,r,"internal-error");const a=Nt(i.idToken);ot(a,r,"internal-error");const{sub:o}=a;return ot(e.uid===o,r,"user-mismatch"),_n._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===e?.code&&nt(r,"user-mismatch"),e}}(n,new Yn(e),e.bypassAuthState)}async function Zn(e){const{auth:t,user:n}=e;return ot(n,t,"internal-error"),async function(e,t,n=!1){const r=await St(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _n._forOperation(e,"link",r)}(n,new Yn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:a}=e;if(i)return void this.reject(i);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $n;case"linkViaPopup":case"linkViaRedirect":return Zn;case"reauthViaPopup":case"reauthViaRedirect":return Xn;default:nt(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ct(2e3,1e4);class nr extends er{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ot(e,this.auth,"internal-error"),e}async onExecution(){ut(1===this.filter.length,"Popup operations only handle one event");const e=kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,tr.get())};e()}}nr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rr="pendingRedirect",sr=new Map;class ir extends er{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return jt(rr,e.config.apiKey,e.name)}(t),r=function(e){return Ut(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ar(e,t){sr.set(e._key(),t)}async function or(e,t,n=!1){if(Le(e.app))return Promise.reject(it(e));const r=Bn(e),s=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Ut(t):(ot(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new ir(r,s,n),a=await i.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!cr(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(e))}saveEventToCache(e){this.cachedEventUids.add(ur(e)),this.lastProcessedEventTime=Date.now()}}function ur(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function cr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hr=/^https?/;async function Cr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Dt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dr(e))return}catch{}nt(e,"unauthorized-domain")}function dr(e){const t=ct(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!hr.test(n))return!1;if(lr.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Ct(3e4,6e4);function pr(){const e=Mn().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function gr(e){return new Promise((t,n)=>{function r(){pr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pr(),n(rt(e,"network-request-failed"))},timeout:fr.get()})}if(Mn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Mn().gapi?.load){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Mn()[t]=()=>{gapi.load?r():n(rt(e,"network-request-failed"))},(s=`${cn.gapiScript}?onload=${t}`,cn.loadJS(s)).catch(e=>n(e))}r()}var s}).catch(e=>{throw mr=null,e})}let mr=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Er=new Ct(5e3,15e3),Dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yr(e){const t=e.config;ot(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?dt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:ke},s=wr.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${g(r).slice(1)}`}async function _r(e){const t=await function(e){return mr=mr||gr(e),mr}(e),n=Mn().gapi;return ot(n,e,"internal-error"),t.open({where:document.body,url:yr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=rt(e,"network-request-failed"),i=Mn().setTimeout(()=>{r(s)},Er.get());function a(){Mn().clearTimeout(i),n(t)}t.ping(a).then(a,()=>{r(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function br(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const B={...Ir,width:r.toString(),height:s.toString(),top:i,left:a},u=l().toLowerCase();n&&(o=Wt(u)?"_blank":n),zt(u)&&(t=t||"http://localhost",B.scrollbars="yes");const c=Object.entries(B).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=l()){return en(e)&&!!window.navigator?.standalone}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new vr(null);const h=window.open(t||"",o,c);ot(h,e,"popup-blocked");try{h.focus()}catch(e){}return new vr(h)}const Tr="__/auth/handler",Ar="emulator/auth/handler",Nr=encodeURIComponent("fac");async function Or(e,t,n,r,s,i){ot(e.config.authDomain,e,"auth-domain-config-required"),ot(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ke,eventId:s};if(t instanceof gn){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof mn){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const B=await e._getAppCheckToken(),u=B?`#${Nr}=${encodeURIComponent(B)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Tr}`;return dt(e,Ar)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${g(o).slice(1)}${u}`}const Sr="webStorageSupport";const Fr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=or,this._overrideRedirectResult=ar}async _openPopup(e,t,n,r){ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");return br(e,await Or(e,t,n,ct(),r),kn())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Mn().location.href=e}(await Or(e,t,n,ct(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ut(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await _r(e),n=new Br(e);return t.register("authEvent",t=>{ot(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sr,{type:Sr},n=>{const r=n?.[0]?.[Sr];void 0!==r&&t(!!r),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nn()||Qt()||en()}};var Lr="@firebase/auth",Rr="1.13.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ot(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kr=u("authIdTokenMaxAge")||300;let Pr=null;function Mr(e=Me()){const t=Fe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=Fe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(f(n.getOptions(),t??{}))return e;nt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fr,persistence:[Wn,Fn,Rn]}),r=u("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kr)return;const r=t?.token;Pr!==r&&(Pr=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){D(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){D(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var s;const i=o("auth");return i&&ln(n,`http://${i}`),n}var Gr;!function(e){cn=e}({loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=rt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Gr="Browser",Se(new _("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=n.options;ot(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:i,authDomain:a,clientPlatform:Gr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rn(Gr)},B=new on(n,r,s,o);return function(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ut);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}(B,t),B},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Se(new _("auth-internal",e=>(e=>new xr(e))(Bn(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Lr,Rr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Gr)),Ge(Lr,Rr,"esm2020");var Hr,Ur,Vr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/function Jr(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(e,t,n){n||(n=0);const r=Array(16);if("string"==typeof t)for(var s=0;s<16;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];let i,a=e.g[3];i=t+(a^n&(s^a))+r[0]+3614090360&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[2]+606105819&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[3]+3250441966&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[4]+4118548399&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[6]+2821735955&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[7]+4249261313&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[8]+1770035416&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[10]+4294925233&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[11]+2304563134&4294967295,i=t+(a^(n=s+(i<<22&4294967295|i>>>10))&(s^a))+r[12]+1804603682&4294967295,i=a+(s^(t=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,a=t+(i<<12&4294967295|i>>>20),i=s+(n^a&(t^n))+r[14]+2792965006&4294967295,i=n+(t^(s=a+(i<<17&4294967295|i>>>15))&(a^t))+r[15]+1236535329&4294967295,i=t+(s^a&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[11]+643717713&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[0]+3921069994&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[15]+3634488961&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[4]+3889429448&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[3]+4107603335&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[8]+1163531501&4294967295,i=t+(s^a&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=a+(n^s&((t=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,a=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(a^t))+r[7]+1735328473&4294967295,i=n+(a^t&((s=a+(i<<14&4294967295|i>>>18))^a))+r[12]+2368359562&4294967295,i=t+((n=s+(i<<20&4294967295|i>>>12))^s^a)+r[5]+4294588738&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[11]+1839030562&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[14]+4259657740&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[1]+2763975236&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[7]+4139469664&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[10]+3200236656&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[13]+681279174&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[3]+3572445317&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[6]+76029189&4294967295,i=t+((n=s+(i<<23&4294967295|i>>>9))^s^a)+r[9]+3654602809&4294967295,i=a+((t=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,a=t+(i<<11&4294967295|i>>>21),i=s+(a^t^n)+r[15]+530742520&4294967295,i=n+((s=a+(i<<16&4294967295|i>>>16))^a^t)+r[2]+3299628645&4294967295,i=t+(s^((n=s+(i<<23&4294967295|i>>>9))|~a))+r[0]+4096336452&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[14]+2878612391&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[5]+4237533241&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[12]+1700485571&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[10]+4293915773&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[1]+2240044497&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[8]+1873313359&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[6]+2734768916&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[13]+1309151649&4294967295,i=t+(s^((n=s+(i<<21&4294967295|i>>>11))|~a))+r[4]+4149444226&4294967295,i=a+(n^((t=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,a=t+(i<<10&4294967295|i>>>22),i=s+(t^(a|~n))+r[2]+718787259&4294967295,i=n+(a^((s=a+(i<<15&4294967295|i>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+a&4294967295}function r(e,t){this.h=t;const n=[];let r=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.v=function(e,t){void 0===t&&(t=e.length);const r=t-this.blockSize,s=this.C;let i=this.h,a=0;for(;a<t;){if(0==i)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(s[i++]=e.charCodeAt(a++),i==this.blockSize){n(this,s),i=0;break}}else for(;a<t;)if(s[i++]=e[a++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var s={};function i(e){return-128<=e&&e<128?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],e<0?-1:0)}):new r([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return h(a(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=i(0),B=i(1),u=i(16777216);function c(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l(e){return-1==e.h}function h(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(B)}function C(e,t){return e.add(h(t))}function d(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function f(e,t){this.g=e,this.h=t}function p(e,t){if(c(t))throw Error("division by zero");if(c(e))return new f(o,o);if(l(e))return t=p(h(e),t),new f(h(t.g),h(t.h));if(l(t))return t=p(e,h(t)),new f(h(t.g),t.h);if(e.g.length>30){if(l(e)||l(t))throw Error("slowDivide_ only works with positive integers.");for(var n=B,r=t;r.l(e)<=0;)n=g(n),r=g(r);var s=m(n,1),i=m(r,1);for(r=m(r,2),n=m(n,2);!c(r);){var u=i.add(r);u.l(e)<=0&&(s=s.add(n),i=u),r=m(r,1),n=m(n,1)}return t=C(e,s.j(t)),new f(s,t)}for(s=o;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(i=a(n)).j(t);l(u)||u.l(e)>0;)u=(i=a(n-=r)).j(t);c(i)&&(i=B),s=s.add(i),e=C(e,u)}return new f(s,e)}function g(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function m(e,t){const n=t>>5;t%=32;const s=e.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(l(this))return-h(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(l(this))return"-"+h(this).toString(e);const t=a(Math.pow(e,6));var n=this;let r="";for(;;){const s=p(n,t).g;let i=(((n=C(n,s.j(t))).g.length>0?n.g[0]:n.h)>>>0).toString(e);if(c(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return l(e=C(this,e))?-1:c(e)?0:1},e.abs=function(){return l(this)?h(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let s=0;for(let r=0;r<=t;r++){let t=s+(65535&this.i(r))+(65535&e.i(r)),i=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);s=i>>>16,t&=65535,i&=65535,n[r]=i<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(l(this))return l(e)?h(this).j(h(e)):h(h(this).j(e));if(l(e))return h(this.j(h(e)));if(this.l(u)<0&&e.l(u)<0)return a(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let t=0;t<e.g.length;t++){const r=this.i(s)>>>16,i=65535&this.i(s),a=e.i(t)>>>16,o=65535&e.i(t);n[2*s+2*t]+=i*o,d(n,2*s+2*t),n[2*s+2*t+1]+=r*o,d(n,2*s+2*t+1),n[2*s+2*t+1]+=i*a,d(n,2*s+2*t+1),n[2*s+2*t+2]+=r*a,d(n,2*s+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},e.B=function(e){return p(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.A,t.prototype.reset=t.prototype.u,t.prototype.update=t.prototype.v,Ur=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return h(e(t.substring(1),n));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=a(Math.pow(n,8));let s=o;for(let e=0;e<t.length;e+=8){var i=Math.min(8,t.length-e);const o=parseInt(t.substring(e,e+i),n);i<8?(i=a(Math.pow(n,i)),s=s.j(i).add(a(o))):(s=s.j(r),s=s.add(a(o)))}return s},Hr=r}).apply(void 0!==Vr?Vr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),"function"==typeof SuppressedError&&SuppressedError;var jr,qr,Kr,zr,Qr,Wr,Yr,$r,Xr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t=Object.defineProperty;var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Xr&&Xr];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var a=e[i];if(!(a in s))break e;s=s[a]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var s=s||{},i=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function B(e,t,n){return(B=o).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function c(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function h(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let t=1;t<arguments.length;t++){const r=arguments[t];var n=typeof r;if("array"==(n="object"!=n?n:r?Array.isArray(r)?"array":n:"null")||"object"==n&&"number"==typeof r.length){n=e.length||0;const t=r.length||0;e.length=n+t;for(let s=0;s<t;s++)e[n+s]=r[s]}else e.push(r)}}function d(e){i.setTimeout(()=>{throw e},0)}function f(){var e=D;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var p=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new g,e=>e.reset());class g{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let m,E=!1,D=new class{constructor(){this.h=this.g=null}add(e,t){const n=p.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},w=()=>{const e=Promise.resolve(void 0);m=()=>{e.then(y)}};function y(){for(var e;e=f();){try{e.h.call(e.g)}catch(e){d(e)}var t=p;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}E=!1}function _(){this.u=this.u,this.C=this.C}function I(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},I.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(e){}return e}();function b(e){return/^[\s\xa0]*$/.test(e)}function T(e,t){I.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}c(T,I),T.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&T.Z.h.call(this)},T.prototype.h=function(){T.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var A="closure_listenable_"+(1e6*Math.random()|0),N=0;function O(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++N,this.da=this.fa=!1}function S(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function F(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<R.length;t++)n=R[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function k(e){this.src=e,this.g={},this.h=0}function P(e,t){const n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(S(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function M(e,t,n,r){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}k.prototype.add=function(e,t,n,r,s){const i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);const a=M(e,t,r,s);return a>-1?(t=e[a],n||(t.fa=!1)):((t=new O(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var G="closure_lm_"+(1e6*Math.random()|0),H={};function U(e,t,n,r,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)U(e,t[i],n,r,s);return null}return n=Q(n),e&&e[A]?e.J(t,n,!!a(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");const o=a(s)?!!s.capture:!!s;let B=K(e);if(B||(e[G]=B=new k(e)),n=B.add(t,n,r,o,i),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=q;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)v||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(j(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function V(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)V(e,t[i],n,r,s);else r=a(r)?!!r.capture:!!r,n=Q(n),e&&e[A]?(e=e.i,(i=String(t).toString())in e.g&&((n=M(t=e.g[i],n,r,s))>-1&&(S(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=K(e))&&(t=e.g[t.toString()],e=-1,t&&(e=M(t,n,r,s)),(n=e>-1?t[e]:null)&&J(n))}function J(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[A])P(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(j(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=K(t))?(P(n,e),0==n.h&&(n.src=null,t[G]=null)):S(e)}}}function j(e){return e in H?H[e]:H[e]="on"+e}function q(e,t){if(e.da)e=!0;else{t=new T(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&J(e),e=n.call(r,t)}return e}function K(e){return(e=e[G])instanceof k?e:null}var z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(e){return"function"==typeof e?e:(e[z]||(e[z]=function(t){return e.handleEvent(t)}),e[z])}function W(){_.call(this),this.i=new k(this),this.M=this,this.G=null}function Y(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new I(t,e);else if(t instanceof I)t.target=t.target||e;else{var s=t;x(t=new I(r,e),s)}let i,a;if(s=!0,n)for(a=n.length-1;a>=0;a--)i=t.g=n[a],s=$(i,r,!0,t)&&s;if(i=t.g=e,s=$(i,r,!0,t)&&s,s=$(i,r,!1,t)&&s,n)for(a=0;a<n.length;a++)i=t.g=n[a],s=$(i,r,!1,t)&&s}function $(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const a=t[i];if(a&&!a.da&&a.capture==n){const t=a.listener,n=a.ha||a.src;a.fa&&P(e.i,a),s=!1!==t.call(n,r)&&s}}return s&&!r.defaultPrevented}function X(e){e.g=function(e,t){if("function"!=typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=B(e.handleEvent,e)}return Number(t)>2147483647?-1:i.setTimeout(e,t||0)}(()=>{e.g=null,e.i&&(e.i=!1,X(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}c(W,_),W.prototype[A]=!0,W.prototype.removeEventListener=function(e,t,n,r){V(this,e,t,n,r)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)S(n[e]);delete e.g[t],e.h--}}this.G=null},W.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},W.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Z extends _{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(e){_.call(this),this.h=e,this.g={}}c(ee,_);var te=[];function ne(e){F(e.g,function(e,t){this.g.hasOwnProperty(t)&&J(e)},e),e.g={}}ee.prototype.N=function(){ee.Z.N.call(this),ne(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var re=i.JSON.stringify,se=i.JSON.parse,ie=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function ae(){}function oe(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ue(){I.call(this,"d")}function ce(){I.call(this,"c")}c(ue,I),c(ce,I);var le={},he=null;function Ce(){return he=he||new W}function de(e){I.call(this,le.Ia,e)}function fe(e){const t=Ce();Y(t,new de(t))}function pe(e,t){I.call(this,le.STAT_EVENT,e),this.stat=t}function ge(e){const t=Ce();Y(t,new pe(t,e))}function me(e,t){I.call(this,le.Ja,e),this.size=t}function Ee(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function De(){this.g=!0}function we(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<r.length;e++)r[e]=""}}}return re(i)}catch(e){return t}}(e,n)+(r?" "+r:"")})}le.Ia="serverreachability",c(de,I),le.STAT_EVENT="statevent",c(pe,I),le.Ja="timingevent",c(me,I),De.prototype.ua=function(){this.g=!1},De.prototype.info=function(){};var ye,_e={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ie={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function ve(){}function be(e){return encodeURIComponent(String(e))}function Te(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ae(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ee(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ne}function Ne(){this.i=null,this.g="",this.h=!1}c(ve,ae),ve.prototype.g=function(){return new XMLHttpRequest},ye=new ve;var Oe={},Se={};function Fe(e,t,n){e.M=1,e.A=rt(Xe(t)),e.u=n,e.R=!0,Le(e,null)}function Le(e,t){e.F=Date.now(),ke(e),e.B=Xe(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),gt(n.i,"t",r),e.C=0,n=e.j.L,e.h=new Ne,e.g=rn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new Z(B(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(te[0]=s.toString()),s=te);for(let e=0;e<s.length;e++){const i=U(n,s[e],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}t=e.J?L(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),fe(),function(e,t,n,r,s,i){e.info(function(){if(e.g)if(i){var a="",o=i.split("&");for(let e=0;e<o.length;e++){var B=o[e].split("=");if(B.length>1){const e=B[0];B=B[1];const t=e.split("_");a=t.length>=2&&"type"==t[1]?a+(e+"=")+B+"&":a+(e+"=redacted&")}}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.v,e.B,e.l,e.S,e.u)}function Re(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function xe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Se:(n=Number(t.substring(n,r)),isNaN(n)?Oe:(r+=1)+n>t.length?Se:(t=t.slice(r,r+n),e.C=r+n,t))}function ke(e){e.T=Date.now()+e.H,Pe(e,e.H)}function Pe(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Ee(B(e.aa,e),t)}function Me(e){e.D&&(i.clearTimeout(e.D),e.D=null)}function Ge(e){0==e.j.I||e.K||Xt(e.j,e)}function He(e){Me(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,ne(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function Ue(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||Ke(n.h,e)))if(!e.L&&Ke(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;$t(n),Ut(n)}Qt(n),ge(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ee(B(n.Va,n),6e3));qe(n.h)<=1&&n.ta&&(n.ta=void 0)}else en(n,11)}else if((e.L||n.g==e)&&$t(n),!b(t))for(s=n.Ba.g.parse(t),t=0;t<s.length;t++){let B=s[t];const c=B[0];if(!(c<=n.K))if(n.K=c,B=B[1],2==n.I)if("c"==B[0]){n.M=B[1],n.ba=B[2];const t=B[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const s=B[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const c=B[5];null!=c&&"number"==typeof c&&c>0&&(r=1.5*c,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ze(i,i.h),i.h=null))}if(r.G){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,nt(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms"));var a=e;if((r=n).na=nn(r,r.L?r.ba:null,r.W),a.L){Qe(r.h,a);var o=a,u=r.O;u&&(o.H=u),o.D&&(Me(o),ke(o)),r.g=a}else zt(r);n.i.length>0&&Jt(n)}else"stop"!=B[0]&&"close"!=B[0]||en(n,7);else 3==n.I&&("stop"==B[0]||"close"==B[0]?"stop"==B[0]?en(n,7):Ht(n):"noop"!=B[0]&&n.l&&n.l.qa(B),n.A=0)}fe()}catch(e){}}Ae.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==kt(e)?t.j():this.Y(e)},Ae.prototype.Y=function(e){try{if(e==this.g)e:{const B=kt(this.g),u=this.g.ya();this.g.ca();if(!(B<3)&&(3!=B||this.g&&(this.h.h||this.g.la()||Pt(this.g)))){this.K||4!=B||7==u||fe(),Me(this);var t=this.g.ca();this.X=t;var n=function(e){if(!Re(e))return e.g.la();const t=Pt(e.g);if(""===t)return"";let n="";const r=t.length,s=4==kt(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return He(e),Ge(e),"";e.h.i=new i.TextDecoder}for(let i=0;i<r;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(s&&i==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,n,r,s,i,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+a})}(this.i,this.v,this.B,this.l,this.S,B,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(r)){var a=r;break t}}a=null}if(!(e=a)){this.o=!1,this.m=3,ge(12),He(this),Ge(this);break e}we(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ue(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=xe(this,n),t==Se){4==B&&(this.m=4,ge(14),e=!1),we(this.i,this.l,null,"[Incomplete Response]");break}if(t==Oe){this.m=4,ge(15),we(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}we(this.i,this.l,t,null),Ue(this,t)}if(Re(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=B||0!=n.length||this.h.h||(this.m=1,ge(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wt(o),o.P=!0,ge(11))}}else we(this.i,this.l,n,"[Invalid Chunked Response]"),He(this),Ge(this)}else we(this.i,this.l,n,null),Ue(this,n);4==B&&He(this),this.o&&!this.K&&(4==B?Xt(this.j,this):(this.o=!1,ke(this)))}else(function(e){const t={};e=(e.g&&kt(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(b(e[r]))continue;var n=Te(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,ge(12)):(this.m=0,ge(13)),He(this),Ge(this)}}}catch(e){}},Ae.prototype.cancel=function(){this.K=!0,He(this)},Ae.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(fe(),ge(17)),He(this),this.m=2,Ge(this)):Pe(this,this.T-e)};var Ve=class{constructor(e,t){this.g=e,this.map=t}};function Je(e){this.l=e||10,i.PerformanceNavigationTiming?e=(e=i.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function je(e){return!!e.h||!!e.g&&e.g.size>=e.j}function qe(e){return e.h?1:e.g?e.g.size:0}function Ke(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ze(e,t){e.g?e.g.add(t):e.h=t}function Qe(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function We(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return h(e.i)}Je.prototype.cancel=function(){if(this.i=We(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Ye=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $e(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof $e?(this.l=e.l,Ze(this,e.j),this.o=e.o,this.g=e.g,et(this,e.u),this.h=e.h,tt(this,mt(e.i)),this.m=e.m):e&&(t=String(e).match(Ye))?(this.l=!1,Ze(this,t[1]||"",!0),this.o=st(t[2]||""),this.g=st(t[3]||"",!0),et(this,t[4]),this.h=st(t[5]||"",!0),tt(this,t[6]||"",!0),this.m=st(t[7]||"")):(this.l=!1,this.i=new ht(null,this.l))}function Xe(e){return new $e(e)}function Ze(e,t,n){e.j=n?st(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function et(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function tt(e,t,n){t instanceof ht?(e.i=t,function(e,t){t&&!e.j&&(Ct(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(dt(this,t),gt(this,n,e))},e)),e.j=t}(e.i,e.l)):(n||(t=it(t,ct)),e.i=new ht(t,e.l))}function nt(e,t,n){e.i.set(t,n)}function rt(e){return nt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function st(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function it(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,at),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function at(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}$e.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(it(t,ot,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(it(t,ot,!0),"@"),e.push(be(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(it(n,"/"==n.charAt(0)?ut:Bt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",it(n,lt)),e.join("")},$e.prototype.resolve=function(e){const t=Xe(this);let n=!!e.j;n?Ze(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)et(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=t.h.lastIndexOf("/");-1!=s&&(r=t.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const n=s[t++];"."==n?r&&t==s.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==s.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=s}return n?t.h=r:n=""!==e.i.toString(),n?tt(t,mt(e.i)):n=!!e.m,n&&(t.m=e.m),t};var ot=/[#\/\?@]/g,Bt=/[#\?:]/g,ut=/[#\?]/g,ct=/[#\?@]/g,lt=/#/g;function ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ct(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let s,i=null;r>=0?(s=e[n].substring(0,r),i=e[n].substring(r+1)):s=e[n],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function dt(e,t){Ct(e),t=Et(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ft(e,t){return Ct(e),t=Et(e,t),e.g.has(t)}function pt(e,t){Ct(e);let n=[];if("string"==typeof t)ft(e,t)&&(n=n.concat(e.g.get(Et(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function gt(e,t,n){dt(e,t),n.length>0&&(e.i=null,e.g.set(Et(e,t),h(n)),e.h+=n.length)}function mt(e){const t=new ht;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Et(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Dt(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(e){}}function wt(){this.g=new ie}function yt(e){this.i=e.Sb||null,this.h=e.ab||!1}function _t(e,t){W.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function It(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function vt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,bt(e)}function bt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Tt(e){let t="";return F(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function At(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Tt(n),"string"==typeof e?null!=n&&be(n):nt(e,t,n))}function Nt(e){W.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(e=ht.prototype).add=function(e,t){Ct(this),this.i=null,e=Et(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Ct(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return Ct(this),this.i=null,ft(this,e=Et(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&(e=pt(this,e)).length>0?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const s=be(n);n=pt(this,n);for(let t=0;t<n.length;t++){let r=s;""!==n[t]&&(r+="="+be(n[t])),e.push(r)}}return this.i=e.join("&")},c(yt,ae),yt.prototype.g=function(){return new _t(this.i,this.h)},c(_t,W),(e=_t.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,bt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||i).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,vt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,bt(this)),this.g&&(this.readyState=3,bt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;It(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vt(this):bt(this),3==this.readyState&&It(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,vt(this))},e.Na=function(e){this.g&&(this.response=e,vt(this))},e.ga=function(){this.g&&vt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(_t.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),c(Nt,W);var Ot=/^https?$/i,St=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,Lt(e),xt(e)}function Lt(e){e.A||(e.A=!0,Y(e,"complete"),Y(e,"error"))}function Rt(e){if(e.h&&void 0!==s)if(e.v&&4==kt(e))setTimeout(e.Ca.bind(e),0);else if(Y(e,"readystatechange"),4==kt(e)){e.h=!1;try{const s=e.ca();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===s){let t=String(e.D).match(Ye)[1]||null;!t&&i.self&&i.self.location&&(t=i.self.location.protocol.slice(0,-1)),r=!Ot.test(t?t.toLowerCase():"")}n=r}if(n)Y(e,"complete"),Y(e,"success");else{e.o=6;try{var a=kt(e)>2?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.ca()+"]",Lt(e)}}finally{xt(e)}}}function xt(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const n=e.g;e.g=null,t||Y(e,"ready");try{n.onreadystatechange=null}catch(e){}}}function kt(e){return e.g?e.g.readyState:0}function Pt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Mt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gt(e){this.za=0,this.i=[],this.j=new De,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mt("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mt("baseRetryDelayMs",5e3,e),this.Za=Mt("retryDelaySeedMs",1e4,e),this.Ta=Mt("forwardChannelMaxRetries",2,e),this.va=Mt("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Je(e&&e.concurrentRequestLimit),this.Ba=new wt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Ht(e){if(Vt(e),3==e.I){var t=e.V++,n=Xe(e.J);if(nt(n,"SID",e.M),nt(n,"RID",t),nt(n,"TYPE","terminate"),qt(e,n),(t=new Ae(e,e.j,t)).M=2,t.A=rt(Xe(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&i.Image&&((new Image).src=t.A,n=!0),n||(t.g=rn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),ke(t)}tn(e)}function Ut(e){e.g&&(Wt(e),e.g.cancel(),e.g=null)}function Vt(e){Ut(e),e.v&&(i.clearTimeout(e.v),e.v=null),$t(e),e.h.cancel(),e.m&&("number"==typeof e.m&&i.clearTimeout(e.m),e.m=null)}function Jt(e){if(!je(e.h)&&!e.m){e.m=!0;var t=e.Ea;m||w(),E||(m(),E=!0),D.add(t,e),e.D=0}}function jt(e,t){var n;n=t?t.l:e.V++;const r=Xe(e.J);nt(r,"SID",e.M),nt(r,"RID",n),nt(r,"AID",e.K),qt(e,r),e.u&&e.o&&At(r,e.u,e.o),n=new Ae(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=Kt(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),ze(e.h,n),Fe(n,r,t)}function qt(e,t){e.H&&F(e.H,function(e,n){nt(t,n,e)}),e.l&&F({},function(e,n){nt(t,n,e)})}function Kt(e,t,n){n=Math.min(e.i.length,n);const r=e.l?B(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let B=!0;for(let u=0;u<n;u++){var i=s[u].g;const n=s[u].map;if((i-=t)<0)t=Math.max(0,s[u].g-100),B=!1;else try{i="req"+i+"_"||"";try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;a(n)&&(r=re(n)),e.push(i+t+"="+encodeURIComponent(r))}}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}catch(e){r&&r(n)}}if(B){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function zt(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;m||w(),E||(m(),E=!0),D.add(t,e),e.A=0}}function Qt(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Ee(B(e.Da,e),Zt(e,e.A)),e.A++,!0)}function Wt(e){null!=e.B&&(i.clearTimeout(e.B),e.B=null)}function Yt(e){e.g=new Ae(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=Xe(e.na);nt(t,"RID","rpc"),nt(t,"SID",e.M),nt(t,"AID",e.K),nt(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&nt(t,"TO",e.ia),nt(t,"TYPE","xmlhttp"),qt(e,t),e.u&&e.o&&At(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=rt(Xe(t)),n.u=null,n.R=!0,Le(n,e)}function $t(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function Xt(e,t){var n=null;if(e.g==t){$t(e),Wt(e),e.g=null;var r=2}else{if(!Ke(e.h,t))return;n=t.G,Qe(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;Y(r=Ce(),new me(r,n)),Jt(e)}else zt(e);else if(3==(s=t.m)||0==s&&t.X>0||!(1==r&&function(e,t){return!(qe(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.G.concat(e.i),0):1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta)||(e.m=Ee(B(e.Ea,e,t),Zt(e,e.D)),e.D++,0)))}(e,t)||2==r&&Qt(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),s){case 1:en(e,5);break;case 4:en(e,10);break;case 3:en(e,6);break;default:en(e,2)}}function Zt(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function en(e,t){if(e.j.info("Error code "+t),2==t){var n=B(e.bb,e),r=e.Ua;const t=!r;r=new $e(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||Ze(r,"https"),rt(r),t?function(e,t){const n=new De;if(i.Image){const r=new Image;r.onload=u(Dt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(Dt,n,"TestLoadImage: error",!1,t,r),r.onabort=u(Dt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(Dt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new De;const n=new AbortController,r=setTimeout(()=>{n.abort(),Dt(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Dt(0,0,!0,t):Dt(0,0,!1,t)}).catch(()=>{clearTimeout(r),Dt(0,0,!1,t)})}(r.toString(),n)}else ge(2);e.I=0,e.l&&e.l.pa(t),tn(e),Vt(e)}function tn(e){if(e.I=0,e.ja=[],e.l){const t=We(e.h);0==t.length&&0==e.i.length||(C(e.ja,t),C(e.ja,e.i),e.h.i.length=0,h(e.i),e.i.length=0),e.l.oa()}}function nn(e,t,n){var r=n instanceof $e?Xe(n):new $e(n);if(""!=r.g)t&&(r.g=t+"."+r.g),et(r,r.u);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new $e(null);r&&Ze(e,r),t&&(e.g=t),s&&et(e,s),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&nt(r,n,t),nt(r,"VER",e.ka),qt(e,r),r}function rn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Aa&&!e.ma?new Nt(new yt({ab:n})):new Nt(e.ma)).Fa(e.L),t}function sn(){}function an(){}function on(e,t){W.call(this),this.g=new Gt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!b(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!b(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new cn(this)}function Bn(e){ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function un(){ce.call(this),this.status=1}function cn(e){this.g=e}(e=Nt.prototype).Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ye.g(),this.g.onreadystatechange=l(B(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(e){return void Ft(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(Array.prototype.indexOf.call(St,t,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ft(this,e)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,Y(this,"complete"),Y(this,"abort"),xt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xt(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Rt(this):this.Xa())},e.Xa=function(){Rt(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return kt(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),se(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Gt.prototype).ka=8,e.I=1,e.connect=function(e,t,n,r){ge(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=nn(this,null,this.W),Jt(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Ae(this,this.j,e);let i=this.o;if(this.U&&(i?(i=L(i),x(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((t+=r)>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Kt(this,s,t),nt(n=Xe(this.J),"RID",e),nt(n,"CVER",22),this.G&&nt(n,"X-HTTP-Session-Id",this.G),qt(this,n),i&&(this.R?t="headers="+be(Tt(i))+"&"+t:this.u&&At(n,this.u,i)),ze(this.h,s),this.Ra&&nt(n,"TYPE","init"),this.S?(nt(n,"$req",t),nt(n,"SID","null"),s.U=!0,Fe(s,n,null)):Fe(s,n,t),this.I=2}}else 3==this.I&&(e?jt(this,e):0==this.i.length||je(this.h)||jt(this))},e.Da=function(){if(this.v=null,Yt(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Ee(B(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ge(10),Ut(this),Yt(this))},e.Va=function(){null!=this.C&&(this.C=null,Ut(this),Qt(this),ge(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=sn.prototype).ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},an.prototype.g=function(e,t){return new on(e,t)},c(on,W),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Ht(this.g)},on.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=re(e),e=n);t.i.push(new Ve(t.Ya++,e)),3==t.I&&Jt(t)},on.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,on.Z.N.call(this)},c(Bn,ue),c(un,ce),c(cn,sn),cn.prototype.ra=function(){Y(this.g,"a")},cn.prototype.qa=function(e){Y(this.g,new Bn(e))},cn.prototype.pa=function(e){Y(this.g,new un)},cn.prototype.oa=function(){Y(this.g,"b")},an.prototype.createWebChannel=an.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,$r=function(){return new an},Yr=function(){return Ce()},Wr=le,Qr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_e.NO_ERROR=0,_e.TIMEOUT=8,_e.HTTP_ERROR=6,zr=_e,Ie.COMPLETE="complete",Kr=Ie,oe.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",W.prototype.listen=W.prototype.J,qr=oe,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,jr=Nt}).apply(void 0!==Xr?Xr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});
/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.9.1
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/
var Zr=class e{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=e.CLASS_NL|e.DOT_NL;static PERL=e.CLASS_NL|e.ONE_LINE|e.PERL_X|e.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const es=1,ts=2,ns=4,rs=8,ss=16,is=512,as=128,os=new Int32Array(as),Bs=new Int32Array(as),us=65535;for(let e=0;e<as;e++)os[e]=e>=97&&e<=122?e-32:e,Bs[e]=e>=65&&e<=90?e+32:e;var cs=class{static CODES=Object.freeze({"":7,"\b":8,"\t":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125});static toUpperCase(e){if(e<as)return os[e];const t=String.fromCodePoint(e).toUpperCase(),n=t.codePointAt(0)>us?2:1;if(t.length>n)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>us?2:1;return r.length>s||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){if(e<as)return Bs[e];const t=String.fromCodePoint(e).toLowerCase(),n=t.codePointAt(0)>us?2:1;if(t.length>n)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>us?2:1;return r.length>s||r.codePointAt(0)!==e?e:t.codePointAt(0)}},ls=class{constructor(e,t=!1){this.data=e,this.isStride1=t,this.SIZE=t?2:3}getLo(e){return this.data[e*this.SIZE]}getHi(e){return this.data[e*this.SIZE+1]}getStride(e){return this.isStride1?1:this.data[e*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const hs=new Uint8Array(256);for(let e=0;e<64;e++)hs["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-".charCodeAt(e)]=e;const Cs=e=>{const t=[];let n=0,r=0;for(let s=0;s<e.length;s++){const i=hs[e.charCodeAt(s)];n|=(31&i)<<r,32&i?r+=5:(t.push(n),n=0,r=0)}return t},ds=(e,t)=>{const n=Cs(e),r=t?n.length/2:n.length/3,s=new Uint32Array(3*r);let i=0,a=0;for(let e=0;e<r;e++)i+=n[a++],s[3*e]=i,i+=n[a++],s[3*e+1]=i,s[3*e+2]=t?1:n[a++];return s};var fs=class{constructor(e){this.initializer=e,this.cache=new Map}has(e){return e in this.initializer}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.initializer[e],n=t?t():null;return this.cache.set(e,n),n}},ps=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=(e=>{const t=Cs(e),n=new Map;let r=0;for(let e=0;e<t.length;e+=2){r+=t[e];const s=t[e+1],i=s>>>1^-(1&s);n.set(r,r+i)}return n})("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new ls(ds("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new fs({C:()=>new ls(ds("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new ls(ds("AfgDgB",!0)),Cf:()=>new ls(ds("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new ls(ds("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new ls(ds("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new ls(ds("gg2B--B",!0)),L:()=>new ls(ds("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new ls(ds("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new ls(ds("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new ls(ds("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new ls(ds("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new ls(ds("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new ls(ds("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new ls(ds("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new ls(ds("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new ls(ds("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new ls(ds("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new ls(ds("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new ls(ds("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new ls(ds("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new ls(ds("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new ls(ds("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new ls(ds("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new ls(ds("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new ls(ds("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new ls(ds("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new ls(ds("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new ls(ds("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new ls(ds("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new ls(ds("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new ls(ds("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new ls(ds("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new ls(ds("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new ls(ds("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new ls(ds("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new ls(ds("ohIA",!0)),Zp:()=>new ls(ds("phIA",!0)),Zs:()=>new ls(ds("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new ls(ds("wBJIFbF",!0)),Alphabetic:()=>new ls(ds("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new ls(ds("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new ls(ds("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new ls(ds("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new ls(ds("7-8DE",!0)),Emoji_Modifier_Base:()=>new ls(ds("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new ls(ds("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new ls(ds("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new ls(ds("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new ls(ds("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new ls(ds("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new ls(ds("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new ls(ds("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new ls(ds("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new ls(ds("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static SCRIPTS=new fs({Adlam:()=>new ls(ds("go6DrCFJFB",!0)),Ahom:()=>new ls(ds("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new ls(ds("ggxCmS",!0)),Arabic:()=>new ls(ds("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new ls(ds("xpBlBDxBDCks9BE",!0)),Avestan:()=>new ls(ds("g4iC1BEG",!0)),Balinese:()=>new ls(ds("g4GsCCxB",!0)),Bamum:()=>new ls(ds("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new ls(ds("w26CdDF",!0)),Batak:()=>new ls(ds("g+GzBJD",!0)),Bengali:()=>new ls(ds("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new ls(ds("g17CYDY",!0)),Bhaiksuki:()=>new ls(ds("ggnCICsBCNLc",!0)),Bopomofo:()=>new ls(ds("qXB6wLqBxDf",!0)),Brahmi:()=>new ls(ds("ggkCtCFjBKA",!0)),Braille:()=>new ls(ds("ggK-H",!0)),Buginese:()=>new ls(ds("gwGbDB",!0)),Buhid:()=>new ls(ds("g6FT",!0)),Canadian_Aboriginal:()=>new ls(ds("ggF-TxRlC7tgCP",!0)),Carian:()=>new ls(ds("g1gCwB",!0)),Caucasian_Albanian:()=>new ls(ds("wphCzBMA",!0)),Chakma:()=>new ls(ds("gokC0BCR",!0)),Cham:()=>new ls(ds("gwqB2BKNDJDD",!0)),Cherokee:()=>new ls(ds("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new ls(ds("w9jCb",!0)),Common:()=>new ls(ds("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new ls(ds("ifNxkKzDGG",!0)),Cuneiform:()=>new ls(ds("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new ls(ds("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new ls(ds("w8rCiD",!0)),Cyrillic:()=>new ls(ds("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new ls(ds("gghCvC",!0)),Devanagari:()=>new ls(ds("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new ls(ds("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new ls(ds("ggmC7B",!0)),Duployan:()=>new ls(ds("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new ls(ds("ggsC1iBL68D",!0)),Elbasan:()=>new ls(ds("gohCnB",!0)),Elymaic:()=>new ls(ds("g-jCW",!0)),Ethiopic:()=>new ls(ds("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new ls(ds("gqjClBEcJB",!0)),Georgian:()=>new ls(ds("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new ls(ds("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new ls(ds("w5gCa",!0)),Grantha:()=>new ls(ds("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new ls(ds("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new ls(ds("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new ls(ds("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new ls(ds("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new ls(ds("go4C5B",!0)),Han:()=>new ls(ds("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new ls(ds("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new ls(ds("gojCnBJJ",!0)),Hanunoo:()=>new ls(ds("g5FU",!0)),Hatran:()=>new ls(ds("gniCSCBGE",!0)),Hebrew:()=>new ls(ds("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new ls(ds("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new ls(ds("giiCVCI",!0)),Inherited:()=>new ls(ds("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new ls(ds("g7iCSGH",!0)),Inscriptional_Parthian:()=>new ls(ds("g6iCVDH",!0)),Javanese:()=>new ls(ds("gsqBtCDJFB",!0)),Kaithi:()=>new ls(ds("gkkCiCLA",!0)),Kannada:()=>new ls(ds("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new ls(ds("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new ls(ds("g4nCQCoBEc",!0)),Kayah_Li:()=>new ls(ds("goqBtBCA",!0)),Kharoshthi:()=>new ls(ds("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new ls(ds("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new ls(ds("g8F9CDJHJnPf",!0)),Khojki:()=>new ls(ds("gwkCRCuB",!0)),Khudawadi:()=>new ls(ds("w1kC6BGJ",!0)),Kirat_Rai:()=>new ls(ds("gq7C5B",!0)),Lao:()=>new ls(ds("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new ls(ds("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new ls(ds("ggH3BEOEC",!0)),Limbu:()=>new ls(ds("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new ls(ds("gwhC2JKVLH",!0)),Linear_B:()=>new ls(ds("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new ls(ds("wmpBvBx1eA",!0)),Lycian:()=>new ls(ds("g0gCc",!0)),Lydian:()=>new ls(ds("gpiCZGA",!0)),Mahajani:()=>new ls(ds("wqkCmB",!0)),Makasar:()=>new ls(ds("g3nCY",!0)),Malayalam:()=>new ls(ds("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new ls(ds("giCbDA",!0)),Manichaean:()=>new ls(ds("g2iCmBFL",!0)),Marchen:()=>new ls(ds("wjnCfDVCN",!0)),Masaram_Gondi:()=>new ls(ds("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new ls(ds("gy7C6C",!0)),Meetei_Mayek:()=>new ls(ds("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new ls(ds("gg6DkGDP",!0)),Meroitic_Cursive:()=>new ls(ds("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new ls(ds("gsiCf",!0)),Miao:()=>new ls(ds("g47CqCF4BIQ",!0)),Modi:()=>new ls(ds("gwlCkCMJ",!0)),Mongolian:()=>new ls(ds("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new ls(ds("gy6CeCJFB",!0)),Multani:()=>new ls(ds("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new ls(ds("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new ls(ds("gkiCeJI",!0)),Nag_Mundari:()=>new ls(ds("wm5DpB",!0)),Nandinagari:()=>new ls(ds("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new ls(ds("gsGrBFZHKEB",!0)),Newa:()=>new ls(ds("gglC7CCE",!0)),Nko:()=>new ls(ds("g+B6BDC",!0)),Nushu:()=>new ls(ds("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new ls(ds("go4DsBENDJFB",!0)),Ogham:()=>new ls(ds("g0Fc",!0)),Ol_Chiki:()=>new ls(ds("wiHvB",!0)),Ol_Onal:()=>new ls(ds("wu5DqBFA",!0)),Old_Hungarian:()=>new ls(ds("gkjCyBOyBIF",!0)),Old_Italic:()=>new ls(ds("g4gCjBKC",!0)),Old_North_Arabian:()=>new ls(ds("g0iCf",!0)),Old_Permic:()=>new ls(ds("w6gCqB",!0)),Old_Persian:()=>new ls(ds("g9gCjBFN",!0)),Old_Sogdian:()=>new ls(ds("g4jCnB",!0)),Old_South_Arabian:()=>new ls(ds("gziCf",!0)),Old_Turkic:()=>new ls(ds("ggjCoC",!0)),Old_Uyghur:()=>new ls(ds("w7jCZ",!0)),Oriya:()=>new ls(ds("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new ls(ds("wlhCjBFjB",!0)),Osmanya:()=>new ls(ds("gkhCdDJ",!0)),Pahawh_Hmong:()=>new ls(ds("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new ls(ds("gjiCf",!0)),Pau_Cin_Hau:()=>new ls(ds("g2mC4B",!0)),Phags_Pa:()=>new ls(ds("giqB3B",!0)),Phoenician:()=>new ls(ds("goiCbEA",!0)),Psalter_Pahlavi:()=>new ls(ds("g8iCRIDNG",!0)),Rejang:()=>new ls(ds("wpqBjBMA",!0)),Runic:()=>new ls(ds("g1FqCEK",!0)),Samaritan:()=>new ls(ds("ggCtBDO",!0)),Saurashtra:()=>new ls(ds("gkqBlCJL",!0)),Sharada:()=>new ls(ds("gskC-ChsCH",!0)),Shavian:()=>new ls(ds("wihCvB",!0)),Siddham:()=>new ls(ds("gslC1BDlB",!0)),Sidetic:()=>new ls(ds("gqiCZ",!0)),SignWriting:()=>new ls(ds("gg2DrUQECO",!0)),Sinhala:()=>new ls(ds("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new ls(ds("w5jCpB",!0)),Sora_Sompeng:()=>new ls(ds("wmkCYIJ",!0)),Soyombo:()=>new ls(ds("wymCyC",!0)),Sundanese:()=>new ls(ds("g8G-BhIH",!0)),Sunuwar:()=>new ls(ds("g+mChBPJ",!0)),Syloti_Nagri:()=>new ls(ds("ggqBsB",!0)),Syriac:()=>new ls(ds("g4BNC7BDCxIK",!0)),Tagalog:()=>new ls(ds("g4FVKA",!0)),Tagbanwa:()=>new ls(ds("g7FMCCCB",!0)),Tai_Le:()=>new ls(ds("wqGdDE",!0)),Tai_Tham:()=>new ls(ds("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new ls(ds("g0qBiCZE",!0)),Tai_Yo:()=>new ls(ds("g25DeCVJB",!0)),Takri:()=>new ls(ds("g0lC5BHJ",!0)),Tamil:()=>new ls(ds("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new ls(ds("wz6CuCCJ",!0)),Tangut:()=>new ls(ds("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new ls(ds("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new ls(ds("g8BxB",!0)),Thai:()=>new ls(ds("hwD5BGb",!0)),Tibetan:()=>new ls(ds("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new ls(ds("wpL3BIBPA",!0)),Tirhuta:()=>new ls(ds("gklCnCJJ",!0)),Todhri:()=>new ls(ds("guhCzB",!0)),Tolong_Siki:()=>new ls(ds("wtnCrBFJ",!0)),Toto:()=>new ls(ds("w04De",!0)),Tulu_Tigalari:()=>new ls(ds("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new ls(ds("g8gCdCA",!0)),Unknown:()=>new ls(ds("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new ls(ds("gopBrJ",!0)),Vithkuqi:()=>new ls(ds("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new ls(ds("g24D5BGA",!0)),Warang_Citi:()=>new ls(ds("glmCyCNA",!0)),Yezidi:()=>new ls(ds("g0jCpBCCDB",!0)),Yi:()=>new ls(ds("ggoBskBE2B",!0)),Zanabazar_Square:()=>new ls(ds("gwmCnC",!0))});static FOLD_CATEGORIES=new fs({L:()=>new ls(ds("laA",!0)),LC:()=>new ls(ds("laA",!0)),Ll:()=>new ls(ds("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new ls(ds("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new ls(ds("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new ls(ds("5cgBgBlgHAB",!1)),Mn:()=>new ls(ds("5cgBgBlgHAB",!1)),Emoji:()=>new ls(ds("8mJA",!0)),Extended_Pictographic:()=>new ls(ds("8mJA",!0)),Lowercase:()=>new ls(ds("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new ls(ds("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new ls(ds("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new fs({Common:()=>new ls(ds("8cgBgB",!1)),Greek:()=>new ls(ds("1FwUwU",!1)),Inherited:()=>new ls(ds("5cgBgBlgHAB",!1))})},gs=class e{static MAX_RUNE=1114111;static RUNE_ERROR=65533;static isUnsearchable(t){return t===e.RUNE_ERROR||t>=e.MIN_HIGH_SURROGATE&&t<=e.MAX_LOW_SURROGATE}static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let n=0,r=e.length;for(;n<r;){const s=n+Math.floor((r-n)/2),i=e.getLo(s),a=e.getHi(s);if(i<=t&&t<=a){return(t-i)%e.getStride(s)===0}t<i?r=s:n=s+1}return!1}static is(t,n){if(n<=e.MAX_LATIN1){for(let e=0;e<t.length;e++){if(n>t.getHi(e))continue;const r=t.getLo(e);if(n<r)return!1;return(n-r)%t.getStride(e)===0}return!1}return t.length>0&&n>=t.getLo(0)&&e.is32(t,n)}static isPrint(t){return t<=e.MAX_LATIN1?t>=32&&t<e.MAX_ASCII||t>=161&&173!==t:e.is(ps.Print,t)}static simpleFold(t){if(ps.CASE_ORBIT.has(t))return ps.CASE_ORBIT.get(t);if(t<=e.MAX_ASCII){const e=cs.toLowerCase(t);return e!==t?e:cs.toUpperCase(t)}return t}static equalsIgnoreCase(t,n){if(t===n)return!0;if(t<0||n<0)return!1;if(t<=e.MAX_ASCII&&n<=e.MAX_ASCII)return 65<=t&&t<=90&&(t|=32),65<=n&&n<=90&&(n|=32),t===n;for(let r=e.simpleFold(t);r!==t;r=e.simpleFold(r))if(r===n)return!0;return!1}};const ms=new Uint8Array(256);for(let e=0;e<256;e++)ms[e]=97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||95===e?1:0;let Es=null,Ds=null;var ws=class e{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||"[object Uint8Array]"===Object.prototype.toString.call(e)}static isalnum(e){return cs.CODES[0]<=e&&e<=cs.CODES[9]||cs.CODES.a<=e&&e<=cs.CODES.z||cs.CODES.A<=e&&e<=cs.CODES.Z}static unhex(e){return cs.CODES[0]<=e&&e<=cs.CODES[9]?e-cs.CODES[0]:cs.CODES.a<=e&&e<=cs.CODES.f?e-cs.CODES.a+10:cs.CODES.A<=e&&e<=cs.CODES.F?e-cs.CODES.A+10:-1}static escapeRune(t){let n="";if(gs.isPrint(t))e.METACHARACTERS.indexOf(String.fromCodePoint(t))>=0&&(n+="\\"),n+=String.fromCodePoint(t);else switch(t){case cs.CODES['"']:n+='\\"';break;case cs.CODES["\\"]:n+="\\\\";break;case cs.CODES["\t"]:n+="\\t";break;case cs.CODES["\n"]:n+="\\n";break;case cs.CODES["\r"]:n+="\\r";break;case cs.CODES["\b"]:n+="\\b";break;case cs.CODES["\f"]:n+="\\f";break;default:{let e=t.toString(16);t<256?(n+="\\x",1===e.length&&(n+="0"),n+=e):n+=`\\x{${e}}`;break}}return n}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const e=t.codePointAt(r);n.push(e),r+=e>gs.MAX_BMP?2:1}return new Int32Array(n)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<256&&1===ms[e]}static emptyOpContext(t,n){let r=0;return t<0&&(r|=e.EMPTY_BEGIN_TEXT|e.EMPTY_BEGIN_LINE),10===t&&(r|=e.EMPTY_BEGIN_LINE),n<0&&(r|=e.EMPTY_END_TEXT|e.EMPTY_END_LINE),10===n&&(r|=e.EMPTY_END_LINE),e.isWordRune(t)!==e.isWordRune(n)?r|=e.EMPTY_WORD_BOUNDARY:r|=e.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(t){return t.split("").map(t=>e.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>gs.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Es||(Es=new TextEncoder),Es.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):(64512&s)===gs.MIN_HIGH_SURROGATE&&r+1<e.length&&(64512&e.charCodeAt(r+1))===gs.MIN_LOW_SURROGATE?(s=gs.MIN_SUPPLEMENTARY_CODE_POINT+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Ds||(Ds=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Ds.decode(t)}{let t=[],n=0,r=0;for(;n<e.length;){let s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){let i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-gs.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(gs.MIN_HIGH_SURROGATE+(i>>10)),t[r++]=String.fromCharCode(gs.MIN_LOW_SURROGATE+(1023&i))}else{let i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a)}}return t.join("")}}};const ys=(e=[],t=0)=>{const n=Object.create(null);for(let r=0;r<e.length;r++){const s=e[r],i=t+r;n[s]=i,n[i]=s}return Object.freeze(n)};var _s=class e{static Encoding=ys(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===e.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===e.Encoding.UTF_16}},Is=class extends _s{constructor(e=null){super(),this.bytes=e}getEncoding(){return _s.Encoding.UTF_8}asCharSequence(){return ws.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},vs=class extends _s{constructor(e=null){super(),this.charSequence=e}getEncoding(){return _s.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return ws.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},bs=class{static utf16(e){return new vs(e)}static utf8(e){return ws.isByteArray(e)?new Is(e):new Is(ws.stringToUtf8ByteArray(e))}},Ts=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},As=class e extends Ts{static RUNE_ERROR_STEP=gs.RUNE_ERROR<<3|1;constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(0===n.length)return!0;const r=this.indexOf(this.bytes,n,this.start+t);return-1!==r&&r<=this.end-n.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(t){if((t+=this.start)>=this.end)return Ts.EOF();const n=255&this.bytes[t];if(n<128)return n<<3|1;let r,s,i=128,a=191;if(n>=194&&n<=223)r=2,s=31&n;else if(n>=224&&n<=239)r=3,s=15&n,224===n?i=160:237===n&&(a=159);else{if(!(n>=240&&n<=244))return e.RUNE_ERROR_STEP;r=4,s=7&n,240===n?i=144:244===n&&(a=143)}if(t+r>this.end)return e.RUNE_ERROR_STEP;const o=255&this.bytes[t+1];if(o<i||o>a)return e.RUNE_ERROR_STEP;if(s=s<<6|63&o,r>2){const n=255&this.bytes[t+2];if(128!=(192&n))return e.RUNE_ERROR_STEP;if(s=s<<6|63&n,r>3){const n=255&this.bytes[t+3];if(128!=(192&n))return e.RUNE_ERROR_STEP;s=s<<6|63&n}}return s<<3|r}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){let t=-1;if((e+=this.start)>this.start&&e<=this.end){let n=e-1;if(t=this.bytes[n--],t>=128){let r=e-4;for(r<this.start&&(r=this.start);n>=r&&128==(192&this.bytes[n]);)n--;n<this.start&&(n=this.start);const s=this.step(n-this.start);t=n+(7&s)===e?s>>3:gs.RUNE_ERROR}}const n=e<this.end?this.step(e-this.start)>>3:-1;return ws.emptyOpContext(t,n)}indexOf(e,t,n=0){let r=t.length;if(0===r)return n<=this.end?n:-1;const s=t[0];let i=this.end-r;const a="function"==typeof e.indexOf;let o=n;for(;o<=i;){if(a){if(o=e.indexOf(s,o),-1===o||o>i)return-1}else{for(;o<=i&&e[o]!==s;)o++;if(o>i)return-1}let n=!0;for(let s=1;s<r;s++)if(e[o+s]!==t[s]){n=!1;break}if(n)return o;o++}return-1}prefixLength(e){return e.prefixUTF8.length}},Ns=class extends Ts{constructor(e,t=0,n=e.length){super(),this.charSequence=e,this.start=t,this.end=n}hasString(e,t){const n=this.charSequence.indexOf(e.str,this.start+t);return-1!==n&&n<=this.end-e.str.length}hasAnyString(e,t){return e.automaton16().searchUTF16(this.charSequence,this.start+t,this.end)}step(e){if((e+=this.start)>=this.end)return Ts.EOF();const t=this.charSequence.charCodeAt(e);if(t<gs.MIN_HIGH_SURROGATE||t>gs.MAX_HIGH_SURROGATE||e+1>=this.end)return t<<3|1;const n=this.charSequence.charCodeAt(e+1);return n>=gs.MIN_LOW_SURROGATE&&n<=gs.MAX_LOW_SURROGATE?1024*(t-gs.MIN_HIGH_SURROGATE)+(n-gs.MIN_LOW_SURROGATE)+gs.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:t<<3|1}index(e,t){t+=this.start;const n=this.charSequence.indexOf(e.prefix,t);return n<0||n>this.end-e.prefix.length?-1:n-t}context(e){const t=(e+=this.start)>this.start&&e<=this.end?this.charSequence.charCodeAt(e-1):-1,n=e<this.end?this.charSequence.charCodeAt(e):-1;return ws.emptyOpContext(t,n)}prefixLength(e){return e.prefix.length}},Os=class{static fromUTF8(e,t=0,n=e.length){return new As(e,t,n)}static fromUTF16(e,t=0,n=e.length){return new Ns(e,t,n)}},Ss=class extends Error{constructor(e){super(e),this.name="RE2JSException"}},Fs=class extends Ss{constructor(e,t=null){let n=`error parsing regexp: ${e}`;t&&(n+=`: \`${t}\``),super(n),this.name="RE2JSSyntaxException",this.message=n,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}},Ls=class extends Ss{constructor(e){super(e),this.name="RE2JSCompileException"}},Rs=class extends Ss{constructor(e){super(e),this.name="RE2JSGroupException"}},xs=class extends Ss{constructor(e){super(e),this.name="RE2JSFlagsException"}},ks=class extends Ss{constructor(e){super(e),this.name="RE2JSInternalException"}},Ps=class e{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(e=>{const t=e.codePointAt(0);return t===cs.CODES["\\"]||t===cs.CODES.$?`\\${e}`:e}).join(""):e.indexOf("$")<0?e:e.split("").map(e=>e.codePointAt(0)===cs.CODES.$?"$$":e).join("")}constructor(e,t){if(null===e)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=n.numberOfInstructions(),this.lookbehindState=null,t instanceof _s?this.resetMatcherInput(t):ws.isByteArray(t)?this.resetMatcherInput(bs.utf8(t)):this.resetMatcherInput(bs.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(null===e)throw new Error("input is null");return e instanceof _s||(e=ws.isByteArray(e)?bs.utf8(e):bs.utf16(e)),this.matcherInput=e,null!==this.lookbehindState?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if("string"==typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Rs(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if("string"==typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Rs(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if("string"==typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Rs(`group '${e}' not found`);e=t}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Rs("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new Rs(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Rs("perhaps no match attempted");if(0===e||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!n[0])throw new Rs("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,Zr.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,Zr.ANCHOR_START)}find(e=null){if(null!==e){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new Rs(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Os.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Os.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=7&t}return this.genMatch(e,Zr.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=0===this.patternGroupCount,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?ws.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),s=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=s,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let s=0;for(;s<r;){const i=e.codePointAt(s);if(i!==cs.CODES["\\"]){if(i===cs.CODES.$){if(n<s&&(t+=e.substring(n,s)),s+1>=r)throw new Rs("Illegal group reference: group index is missing");const i=e.codePointAt(s+1);if(cs.CODES[0]<=i&&i<=cs.CODES[9]){let a=i-cs.CODES[0],o=s+2;for(;o<r;o++){const t=e.codePointAt(o);if(t<cs.CODES[0]||t>cs.CODES[9]||10*a+t-cs.CODES[0]>this.patternGroupCount)break;a=10*a+t-cs.CODES[0]}if(a>this.patternGroupCount)throw new Rs(`n > number of groups: ${a}`);const B=this.group(a);null!==B&&(t+=B),s=o,n=s}else{if(i!==cs.CODES["{"])throw new Rs("Illegal group reference");{let i=s+2;for(;i<r&&e.codePointAt(i)!==cs.CODES["}"];)i++;if(i>=r)throw new Rs("named capture group is missing trailing '}'");const a=e.substring(s+2,i),o=this.group(a);null!==o&&(t+=o),s=i+1,n=s}}continue}s++}else{if(n<s&&(t+=e.substring(n,s)),s++,s>=r)throw new Rs("character to be escaped is missing");n=s,s++}}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){const t=e=>e>=48&&e<=57,n=this.patternGroupCount;let r="",s=0;for(;s<e.length;){const i=e.indexOf("$",s);if(i<0)break;r+=e.substring(s,i),s=i;const a=e.charCodeAt(s+1);if(a===cs.CODES.$)r+="$",s+=2;else if(a===cs.CODES["&"])r+=this.group(0),s+=2;else if(a===cs.CODES["`"])r+=this.substring(0,this.start(0)),s+=2;else if(a===cs.CODES["'"])r+=this.substring(this.end(0),this.matcherInputLength),s+=2;else if(t(a)){let i=1,o=a-48;const B=e.charCodeAt(s+2);if(t(B)&&10*o+B-48<=n&&(i=2,o=10*o+B-48),o>=1&&o<=n){const e=this.group(o);null!==e&&(r+=e)}else r+=e.substring(s,s+1+i);s+=1+i}else if(a===cs.CODES["<"]&&this.hasNamedGroups){const t=e.indexOf(">",s+2);if(t<0)r+="$<",s+=2;else{const n=e.substring(s+2,t);if(Object.prototype.hasOwnProperty.call(this.namedGroups,n)){const e=this.group(n);null!==e&&(r+=e)}s=t+1}}else r+="$",s+=1}return r+e.substring(s)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(t,n=!0,r=!1){let s="";this.reset();const i="function"==typeof t;let a=null;if(i){if(this.groupCount()>=e.MAX_REPLACER_ARGS)throw new Rs("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(t,a):this.appendReplacement(t,r),n););return s+=this.appendTail(),s}appendReplacementFunc(e,t){let n="";const r=this.start(),s=this.end();this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=s;const i=this.matchArray();return i.push(r,t),this.hasNamedGroups&&i.push(this.namedGroupsObject()),n+=String(e(...i)),n}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const n=this.group(t);e.push(null===n?void 0:n)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)null===e[t]&&(e[t]=void 0);return e}},Ms=class e{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(t){return e.RUNE<=t&&t<=e.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=ws.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(1===this.runes.length){const t=this.runes[0];return 0!==(this.arg&Zr.FOLD_CASE)?gs.equalsIgnoreCase(t,e):e===t}const t=this.runes.length;if(0===t)return!1;if(2===t||4===t||6===t||8===t){for(let n=0;n<t;n+=2){if(e<this.runes[n])return!1;if(e<=this.runes[n+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const t=r>>1;n+=this.runes[n+t<<1]<=e?t:0,r-=t}n+=this.runes[n<<1]<=e?1:0;const s=n-1;return s>=0&&e<=this.runes[s<<1|1]}matchRunePos(e){if(1===this.runes.length){const t=this.runes[0];return 0!==(this.arg&Zr.FOLD_CASE)?gs.equalsIgnoreCase(t,e)?0:-1:e===t?0:-1}const t=this.runes.length;if(0===t)return-1;if(2===t||4===t||6===t||8===t){for(let n=0;n<t;n+=2){if(e<this.runes[n])return-1;if(e<=this.runes[n+1])return Math.floor(n/2)}return-1}let n=0,r=t>>1;for(;r>1;){const t=r>>1;n+=this.runes[n+t<<1]<=e?t:0,r-=t}n+=this.runes[n<<1]<=e?1:0;const s=n-1;return s>=0&&e<=this.runes[s<<1|1]?s:-1}toString(){switch(this.op){case e.ALT:return`alt -> ${this.out}, ${this.arg}`;case e.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case e.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case e.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case e.MATCH:return"match"+(0!==this.arg?` ${this.arg}`:"");case e.FAIL:return"fail";case e.NOP:return`nop -> ${this.out}`;case e.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case e.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case e.RUNE:return null===this.runes?"rune <null>":["rune ",e.escapeRunes(this.runes),0!==(this.arg&Zr.FOLD_CASE)?"/i":""," -> ",this.out].join("");case e.RUNE1:return`rune1 ${e.escapeRunes(this.runes)} -> ${this.out}`;case e.RUNE_ANY:return`any -> ${this.out}`;case e.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},Gs=class e{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}static INITIAL_THREADS=32;init(t){this.ncap=t;const n=Math.min(this.densePcs.length,e.INITIAL_THREADS)*t;(!this.denseCaps||this.denseCaps.length<n)&&(this.denseCaps=new Int32Array(n))}growCaps(e){const t=this.densePcs.length*this.ncap,n=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));n.set(this.denseCaps),this.denseCaps=n}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return 0===this.size}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)0!==t&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},Hs=class{constructor(e){this.pos=-1,this.pcs=new Int32Array(e.numInst()),this.size=0,this.lbTable=new Int32Array(e.numLb+1)}reset(){this.pos=-1,this.size=0}},Us=class e{static fromRE2(t){const n=new e;return n.prog=t.prog,n.re2=t,n.q0=new Gs(n.prog.numInst()),n.q1=new Gs(n.prog.numInst()),n.addStack=new Int32Array(2*(n.prog.numInst()+1)),n.matched=!1,n.matchcap=new Int32Array(n.prog.numCap<2?2:n.prog.numCap),n.ncap=0,n}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return 0===this.ncap?ws.emptyInts():ws.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n,r=null){const s=this.re2.cond;if(s===ws.EMPTY_ALL)return!1;if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==t)return!1;this.matched=!1,this.matchcap.fill(-1);const i=this.prog.numLb>0,a=t;let o=t,B=!1;i&&(null!==r&&r.pos>=0&&r.pos<=t?(o=r.pos,B=!0):o=0);let u,c=i&&null!==r,l=this.q0,h=this.q1,C=e.step(o),d=C>>3,f=7&C,p=-1,g=0;for(C!==Ts.EOF()&&(C=e.step(o+f),p=C>>3,g=7&C),u=0===o?ws.emptyOpContext(-1,d):e.context(o),i&&(B?this.restoreLookbehinds(r,l,u):this.spawnLookbehinds(l,o,u));;){if(0===l.mainThreads){if(0!==(s&ws.EMPTY_BEGIN_TEXT)&&0!==o)break;if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==o)break;if(this.matched)break;if(0===this.prog.numLb&&l.isEmpty()&&0!==this.re2.prefix.length&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const t=e.index(this.re2,o);if(t<0)break;o+=t,C=e.step(o),d=C>>3,f=7&C,C=e.step(o+f),p=C>>3,g=7&C,u=e.context(o)}}o>=a&&(c&&(this.saveLookbehinds(r,l,o),c=!1),this.matched||0!==o&&n!==Zr.UNANCHORED||(this.ncap>0&&(this.matchcap[0]=o),this.add(l,this.prog.start,o,this.matchcap,0,u)));const t=o+f;if(u=e.context(t),this.step(l,h,o,t,d,u,n,o===e.endPos()),0===f)break;if(0===this.ncap&&this.matched)break;o+=f,d=p,f=g,-1!==d&&(C=e.step(o+f),p=C>>3,g=7&C);const i=l;l=h,h=i}return l.clear(),h.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===ws.EMPTY_ALL)return[];if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==t)return[];let s=this.prog.numLb>0?0:t,i=t,a=this.q0,o=this.q1,B=e.step(s),u=B>>3,c=7&B,l=-1,h=0;B!==Ts.EOF()&&(B=e.step(s+c),l=B>>3,h=7&B);let C=0===s?ws.emptyOpContext(-1,u):e.context(s);const d=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(a,s,C);;){if(0===a.mainThreads){if(0!==(r&ws.EMPTY_BEGIN_TEXT)&&0!==s)break;if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==s)break}0!==s&&n!==Zr.UNANCHORED||s>=i&&this.add(a,this.prog.start,s,this.matchcap,0,C);const t=s+c;C=e.context(t);for(let r=0;r<a.size;r++){const i=a.densePcs[r],B=this.prog.inst[i],c=r*this.ncap;let l=!1;switch(B.op){case Ms.MATCH:if(n===Zr.ANCHOR_BOTH&&s!==e.endPos())break;d.add(B.arg);break;case Ms.RUNE:l=B.matchRune(u);break;case Ms.RUNE1:l=u===B.runes[0];break;case Ms.RUNE_ANY:l=!0;break;case Ms.RUNE_ANY_NOT_NL:l=10!==u;break;default:continue}l&&this.add(o,B.out,t,a.denseCaps,c,C)}if(a.clear(),0===c)break;s+=c,u=l,c=h,-1!==u&&(B=e.step(s+c),l=B>>3,h=7&B);const f=a;a=o,o=f}return o.clear(),Array.from(d).sort((e,t)=>e-t)}step(e,t,n,r,s,i,a,o){const B=this.re2.longest;for(let u=0;u<e.size;u++){const c=e.densePcs[u],l=u*this.ncap;if(B&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[l])continue;const h=this.prog.inst[c];let C=!1;switch(h.op){case Ms.MATCH:if(a===Zr.ANCHOR_BOTH&&!o)break;if(this.ncap>0&&(!B||!this.matched||this.matchcap[1]<n)){e.denseCaps[l+1]=n;for(let t=0;t<this.ncap;t++)this.matchcap[t]=e.denseCaps[l+t]}B||(e.size=0),this.matched=!0;break;case Ms.RUNE:C=h.matchRune(s);break;case Ms.RUNE1:C=s===h.runes[0];break;case Ms.RUNE_ANY:C=!0;break;case Ms.RUNE_ANY_NOT_NL:C=10!==s;break;default:continue}C&&this.add(t,h.out,r,e.denseCaps,l,i)}e.clear()}spawnLookbehinds(e,t,n){for(let r=0;r<this.prog.lbStarts.length;r++)this.add(e,this.prog.lbStarts[r],t,this.matchcap,0,n)}restoreLookbehinds(e,t,n){this.lbTable.set(e.lbTable);for(let r=0;r<e.size;r++)this.add(t,e.pcs[r],e.pos,this.matchcap,0,n)}saveLookbehinds(e,t,n){let r=0;for(let n=0;n<t.size;n++){const s=t.densePcs[n];1===this.prog.lbInst[s]&&Ms.isRuneOp(this.prog.inst[s].op)&&(e.pcs[r++]=s)}e.size=r,e.pos=n,e.lbTable.set(this.lbTable)}add(e,t,n,r,s,i){const a=this.addStack;let o=0;for(;;){for(;0!==t&&!e.contains(t);){const B=e.add(t),u=this.prog.inst[t];switch(u.op){case Ms.FAIL:t=0;break;case Ms.ALT:case Ms.ALT_MATCH:a[o++]=u.arg,a[o++]=0,t=u.out;break;case Ms.EMPTY_WIDTH:t=0===(u.arg&~i)?u.out:0;break;case Ms.NOP:t=u.out;break;case Ms.CAPTURE:u.arg<this.ncap&&(a[o++]=-u.arg-1,a[o++]=r[s+u.arg],r[s+u.arg]=n),t=u.out;break;case Ms.LB_WRITE:this.lbTable[Math.abs(u.arg)]=n,t=u.out;break;case Ms.LB_CHECK:t=u.arg>0?this.lbTable[u.arg]===n?u.out:0:this.lbTable[-u.arg]!==n?u.out:0;break;case Ms.MATCH:case Ms.RUNE:case Ms.RUNE1:case Ms.RUNE_ANY:case Ms.RUNE_ANY_NOT_NL:if(0===this.prog.lbInst[t]&&e.mainThreads++,this.ncap>0){const t=B*this.ncap;t+this.ncap>e.denseCaps.length&&e.growCaps(t+this.ncap);for(let n=0;n<this.ncap;n++)e.denseCaps[t+n]=r[s+n]}t=0;break;default:throw new ks("unhandled")}}if(0===o)return;o-=2;const B=a[o];B<0?(r[s-B-1]=a[o+1],t=0):t=B}}};const Vs=(e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},Js=(e,t,n,r)=>e.flag===n&&Vs(e.nfaStates,t)&&Vs(e.matchIDs,r),js=[];var qs=class{constructor(e,t,n){this.nfaStates=e,this.flag=t,this.isMatch=0!==(t&Ks.FLAG_MATCH),this.matchIDs=n,this.next=null,this.nextAnchored=null}},Ks=class e{static FLAG_EMPTY_MASK=255;static FLAG_MATCH=256;static FLAG_LAST_WORD=512;static FLAG_NEED_SHIFT=16;static STATE_OVERHEAD=150;static ARRAY_OVERHEAD=40;static ELEMENT_SIZE=8;static TABLE_OVERHEAD=48;static PROGRESS_PER_STATE=10;constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let t=0;t<e.numInst();t++){const n=e.getInst(t).op;if(n===Ms.LB_WRITE||n===Ms.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(t,n)=>{e.add(t),e.add(n+1)};for(let e=0;e<this.prog.numInst();e++){const n=this.prog.getInst(e);switch(n.op){case Ms.RUNE:case Ms.RUNE1:if(1===n.runes.length){if(t(n.runes[0],n.runes[0]),0!==(n.arg&Zr.FOLD_CASE))for(let e=gs.simpleFold(n.runes[0]);e!==n.runes[0];e=gs.simpleFold(e))t(e,e)}else for(let e=0;e<n.runes.length;e+=2)t(n.runes[e],n.runes[e+1]);break;case Ms.RUNE_ANY_NOT_NL:t(10,10);break;case Ms.EMPTY_WIDTH:0!==(n.arg&(ws.EMPTY_BEGIN_LINE|ws.EMPTY_END_LINE))&&t(10,10),0!==(n.arg&(ws.EMPTY_WORD_BOUNDARY|ws.EMPTY_NO_WORD_BOUNDARY))&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const n=new Int32Array(gs.MAX_LATIN1+1);for(let e=0;e<=gs.MAX_LATIN1;e++)n[e]=this.searchClass(e);this.latin1Class=n}runeClass(e){return e<=gs.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let n=0,r=t.length;for(;n<r;){const s=n+r>>1;t[s]<=e?n=s+1:r=s}return n}closure(e,t){const n=new Set,r=Array.from(e);let s=0;for(;r.length>0;){const e=r.pop();if(0===e||n.has(e))continue;n.add(e);const i=this.prog.getInst(e);switch(i.op){case Ms.ALT:case Ms.ALT_MATCH:r.push(i.out),r.push(i.arg);break;case Ms.NOP:case Ms.CAPTURE:r.push(i.out);break;case Ms.EMPTY_WIDTH:s|=i.arg,0===(i.arg&~t)&&r.push(i.out)}}return{pcs:Array.from(n).sort((e,t)=>e-t),needflags:s}}getState(t,n,r){const s=((e,t,n)=>{let r=-2128831035;for(let t=0;t<e.length;t++)r^=e[t],r=Math.imul(r,16777619);r^=t,r=Math.imul(r,16777619);for(let e=0;e<n.length;e++)r^=n[e],r=Math.imul(r,16777619);return r})(t,n,r),i=this.stateCache.get(s);if(i instanceof qs){if(Js(i,t,n,r))return i}else if(void 0!==i)for(let e=0;e<i.length;e++)if(Js(i[e],t,n,r))return i[e];const a=e.stateCost(t,r);if(this.memBudget<a)return null;this.memBudget-=a;const o=new qs(t,n,r);return void 0===i?this.stateCache.set(s,o):i instanceof qs?this.stateCache.set(s,[i,o]):i.push(o),this.stateCount++,o}static stateCost(t,n){const r=0===n.length?0:e.ARRAY_OVERHEAD+e.ELEMENT_SIZE*n.length;return e.STATE_OVERHEAD+e.ELEMENT_SIZE*t.length+r}*cachedStates(){for(const e of this.stateCache.values())e instanceof qs?yield e:yield*e}makeState(t,n,r){const s=this.closure(t,n&e.FLAG_EMPTY_MASK);let i=n;return 0===s.needflags&&(i&=e.FLAG_MATCH),i|=s.needflags<<e.FLAG_NEED_SHIFT,this.getState(s.pcs,i,r)}allocTable(t,n){const r=this.numClasses+1,s=e.TABLE_OVERHEAD+e.ELEMENT_SIZE*r;if(this.memBudget<s)return null;this.memBudget-=s;const i=new Array(r).fill(null);return n===Zr.UNANCHORED?t.next=i:t.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(t,n,r,s){let i=s===Zr.UNANCHORED?t.next:t.nextAnchored;if(null!==i){const e=i[n];if(null!==e)return e}else if(i=this.allocTable(t,s),null===i)return null;const a=t.flag>>>e.FLAG_NEED_SHIFT,o=t.flag&e.FLAG_EMPTY_MASK;let B=o,u=0;10===r&&(B|=ws.EMPTY_END_LINE,u|=ws.EMPTY_BEGIN_LINE),-1===r&&(B|=ws.EMPTY_END_LINE|ws.EMPTY_END_TEXT);const c=0!==(t.flag&e.FLAG_LAST_WORD),l=-1!==r&&ws.isWordRune(r);B|=l===c?ws.EMPTY_NO_WORD_BOUNDARY:ws.EMPTY_WORD_BOUNDARY;let h=t.nfaStates;0!==(B&~o&a)&&(h=this.closure(h,B).pcs);const C=[];let d=!1,f=js;for(let e=0;e<h.length;e++){const t=this.prog.getInst(h[e]);t.op===Ms.MATCH?(d||(d=!0,f=[]),f.push(t.arg)):-1!==r&&Ms.isRuneOp(t.op)&&t.matchRune(r)&&C.push(t.out)}f.length>1&&f.sort((e,t)=>e-t),s===Zr.UNANCHORED&&-1!==r&&C.push(this.prog.start);let p=u;d&&(p|=e.FLAG_MATCH),l&&(p|=e.FLAG_LAST_WORD);const g=this.makeState(C,p,f);return null===g?null:(i[n]=g,g)}start(t,n){const r=t.context(n);let s;if(0!==(r&ws.EMPTY_BEGIN_TEXT))s=ws.EMPTY_BEGIN_TEXT|ws.EMPTY_BEGIN_LINE;else if(0!==(r&ws.EMPTY_BEGIN_LINE))s=ws.EMPTY_BEGIN_LINE;else{const i=t.step(n),a=i>=0&&ws.isWordRune(i>>3);s=0!==(r&ws.EMPTY_WORD_BOUNDARY)!==a?e.FLAG_LAST_WORD:0}let i=this.startStates.get(s);if(void 0===i){if(i=this.makeState([this.prog.start],s,js),null===i&&(this.clearCache(),i=this.makeState([this.prog.start],s,js),null===i))return null;this.startStates.set(s,i)}return i}stepOrReset(t,n,r,s,i,a){let o=this.step(t,n,r,s);if(null!==o)return o;if(a.resetPos>=0&&i-a.resetPos<e.PROGRESS_PER_STATE*this.stateCount)return null;a.resetPos=i;const B=this.resetCache(t);return null===B?null:(o=this.step(B,n,r,s),o)}run(e,t,n,r,s){const i=e.endPos(),a=this.latin1Class,o=n===Zr.UNANCHORED,B={resetPos:-1};let u=t;for(;u<i;){const t=e.step(u),i=t>>3,c=7&t;if(0===c)break;const l=i<=gs.MAX_LATIN1?a[i]:this.runeClass(i);let h=o&&null!==r.next?r.next[l]:null;if(null===h&&(h=this.stepOrReset(r,l,i,n,u,B),null===h))return null;if((r=h).isMatch&&s(r,!1))return!0;if(!o&&0===r.nfaStates.length)return!1;u+=c}return null===(r=this.stepOrReset(r,this.numClasses,-1,n,u,B))?null:r.isMatch&&s(r,!0)}match(e,t,n){if(this.failed)return null;if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==t)return!1;const r=this.start(e,t);return null===r?null:this.run(e,t,n,r,(e,t)=>n!==Zr.ANCHOR_BOTH||t)}matchSet(e,t,n){if(this.failed)return null;if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==t)return[];const r=this.start(e,t);if(null===r)return null;const s=new Set;return null===this.run(e,t,n,r,(e,t)=>{if(n!==Zr.ANCHOR_BOTH||t)for(let t=0;t<e.matchIDs.length;t++)s.add(e.matchIDs[t]);return!1})?null:Array.from(s).sort((e,t)=>e-t)}};var zs=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(256),this.jobArg=new Uint8Array(256),this.jobPos=new Int32Array(256),this.jobLen=0,this.visited=new Uint32Array(0)}reset(e,t,n){this.end=t,this.jobLen=0,this.ncap=n;const r=e.numInst()*(t+1)+32-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<n?this.cap=new Int32Array(n).fill(-1):this.cap.fill(-1,0,n),this.matchcap.length<n?this.matchcap=new Int32Array(n).fill(-1):this.matchcap.fill(-1,0,n)}shouldVisit(e,t){const n=e*(this.end+1)+t,r=n>>>5,s=1<<(31&n);return 0===(this.visited[r]&s)&&(this.visited[r]|=s,!0)}push(e,t,n,r){if(e.prog.getInst(t).op!==Ms.FAIL&&(r||this.shouldVisit(t,n))){if(this.jobLen>=this.jobPc.length){const e=2*this.jobPc.length,t=new Int32Array(e);t.set(this.jobPc),this.jobPc=t;const n=new Uint8Array(e);n.set(this.jobArg),this.jobArg=n;const r=new Int32Array(e);r.set(this.jobPos),this.jobPos=r}this.jobPc[this.jobLen]=t,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=n,this.jobLen++}}tryBacktrack(e,t,n,r,s){const i=e.longest;for(this.push(e,n,r,!1);this.jobLen>0;){this.jobLen--;let n=this.jobPc[this.jobLen],r=1===this.jobArg[this.jobLen],a=this.jobPos[this.jobLen],o=!0;for(;o||this.shouldVisit(n,a);){o=!1;const B=e.prog.getInst(n);switch(B.op){case Ms.FAIL:break;case Ms.ALT:if(r){r=!1,n=B.arg;continue}this.push(e,n,a,!0),n=B.out;continue;case Ms.ALT_MATCH:{const t=e.prog.getInst(B.out);if(Ms.isRuneOp(t.op)){this.push(e,B.arg,a,!1),n=B.arg,a=this.end;continue}this.push(e,B.out,this.end,!1),n=B.out;continue}case Ms.RUNE:{const e=t.step(a);if(e===Ts.EOF())break;if(!B.matchRune(e>>3))break;a+=7&e,n=B.out;continue}case Ms.RUNE1:{const e=t.step(a);if(e===Ts.EOF())break;if(e>>3!==B.runes[0])break;a+=7&e,n=B.out;continue}case Ms.RUNE_ANY_NOT_NL:{const e=t.step(a);if(e===Ts.EOF())break;if(e>>3==10)break;a+=7&e,n=B.out;continue}case Ms.RUNE_ANY:{const e=t.step(a);if(e===Ts.EOF())break;a+=7&e,n=B.out;continue}case Ms.CAPTURE:if(r){this.cap[B.arg]=a;break}B.arg<this.ncap&&(this.push(e,n,this.cap[B.arg],!0),this.cap[B.arg]=a),n=B.out;continue;case Ms.EMPTY_WIDTH:{const e=t.context(a);if(0!==(B.arg&~e))break;n=B.out;continue}case Ms.NOP:n=B.out;continue;case Ms.MATCH:{if(s===Zr.ANCHOR_BOTH&&a!==this.end)break;if(0===this.ncap)return!0;this.ncap>1&&(this.cap[1]=a);const e=this.matchcap[1];if((-1===e||i&&a>0&&a>e)&&this.matchcap.set(this.cap),!i)return!0;if(a===this.end)return!0;break}case Ms.LB_WRITE:case Ms.LB_CHECK:throw new ks("Backtracker cannot evaluate Lookbehind instructions");default:throw new ks("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Qs=[];var Ws=class e{static shouldBacktrack(e){return e.numInst()<=500}static maxBitStateLen(t){return e.shouldBacktrack(t)?Math.floor(262144/t.numInst()):0}static execute(e,t,n,r,s){const i=e.cond;if(i===ws.EMPTY_ALL)return null;if((r===Zr.ANCHOR_START||r===Zr.ANCHOR_BOTH)&&0!==n)return null;if(0!==(i&ws.EMPTY_BEGIN_TEXT)&&0!==n)return null;const a=Qs.length>0?Qs.pop():new zs,o=t.endPos();a.reset(e.prog,o,s);let B=!1;if(0!==(i&ws.EMPTY_BEGIN_TEXT)||r===Zr.ANCHOR_START||r===Zr.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)&&(B=!0);else{let s=-1;for(;n<=o&&0!==s;n+=s){if(e.prefix.length>0){const r=t.index(e,n);if(r<0)break;n+=r}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)){B=!0;break}const i=t.step(n);s=i===Ts.EOF()?0:7&i}}if(!B)return Qs.push(a),null;const u=0===s?[]:ws.toArray(a.matchcap.subarray(0,s));return Qs.push(a),u}},Ys=class{constructor(e){this.sparse=new Uint32Array(e),this.dense=new Uint32Array(e),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(e){return e<this.sparse.length&&this.sparse[e]<this.size&&this.dense[this.sparse[e]]===e}insert(e){this.contains(e)||this.insertNew(e)}insertNew(e){e>=this.sparse.length||(this.sparse[e]=this.size,this.dense[this.size]=e,this.size++)}};var $s=class{constructor(e){this.start=e.start,this.numCap=e.numCap,this.inst=new Array(e.inst.length);for(let t=0;t<e.inst.length;t++){const n=e.inst[t],r=new Ms(n.op);r.out=n.out,r.arg=n.arg,r.runes=n.runes?new Int32Array(n.runes):new Int32Array(0),r.next=null,this.inst[t]=r}}};var Xs=class e{static compile(e){if(0===e.start)return null;if(e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==Ms.EMPTY_WIDTH||0===(t.arg&ws.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let t=0;t<e.inst.length;t++)if(e.inst[t].op===Ms.ALT||e.inst[t].op===Ms.ALT_MATCH){n=!0;break}for(let t=0;t<e.inst.length;t++){const r=e.inst[t],s=e.inst[r.out].op;switch(r.op){case Ms.ALT:case Ms.ALT_MATCH:if(s===Ms.MATCH||e.inst[r.arg].op===Ms.MATCH)return null;break;case Ms.EMPTY_WIDTH:if(s===Ms.MATCH){if((r.arg&ws.EMPTY_END_TEXT)===ws.EMPTY_END_TEXT)continue;return null}break;default:if(s===Ms.MATCH&&n)return null}}let r=(e=>{const t=new $s(e);for(let e=0;e<t.inst.length;e++){const n=t.inst[e];if(n.op!==Ms.ALT&&n.op!==Ms.ALT_MATCH)continue;let r="out",s="arg",i=t.inst[n[s]];if(i.op!==Ms.ALT&&i.op!==Ms.ALT_MATCH&&(r="arg",s="out",i=t.inst[n[s]],i.op!==Ms.ALT&&i.op!==Ms.ALT_MATCH))continue;const a=t.inst[n[r]];if(a.op===Ms.ALT||a.op===Ms.ALT_MATCH)continue;let o="out",B="arg",u=!1;i.out===e?u=!0:i.arg===e&&(u=!0,o="arg",B="out"),u&&(i[o]=n[r]),n[r]===i[o]&&(n[s]=i[B])}return t})(e);return r=(e=>{if(e.inst.length>=1e3)return null;const t=new Ys(e.inst.length),n=new Ys(e.inst.length),r=new Array(e.inst.length),s=new Array(e.inst.length).fill(!1),i=a=>{let o=!0;const B=e.inst[a];if(n.contains(a))return!0;switch(n.insert(a),B.op){case Ms.ALT:case Ms.ALT_MATCH:{o=i(B.out)&&i(B.arg);let e=s[B.out],t=s[B.arg];if(e&&t)return!1;if(t){const n=B.out;B.out=B.arg,B.arg=n;const r=e;e=t,t=r}e&&(s[a]=!0,B.op=Ms.ALT_MATCH);const n=((e,t,n,r)=>{const s=e.length,i=t.length;let a=0,o=0;const B=[],u=[];let c=!0,l=-1;const h=s=>{const i=s?e:t,c=s?a:o,h=s?n:r;return!(l>0&&i[c]<=B[l]||(B.push(i[c],i[c+1]),s?a+=2:o+=2,l+=2,u.push(h),0))};for(;a<s||o<i;)if(c=o>=i?h(!0):a>=s||t[o]<e[a]?h(!1):h(!0),!c)return null;return{merged:B,next:u}})(r[B.out]||[],r[B.arg]||[],B.out,B.arg);if(!n)return!1;r[a]=new Int32Array(n.merged),B.next=new Uint32Array(n.next);break}case Ms.CAPTURE:case Ms.EMPTY_WIDTH:case Ms.NOP:o=i(B.out),s[a]=s[B.out],r[a]=r[B.out]?new Int32Array(r[B.out]):new Int32Array(0),B.next=new Uint32Array(Math.floor(r[a].length/2)+1).fill(B.out);break;case Ms.MATCH:case Ms.FAIL:s[a]=B.op===Ms.MATCH;break;case Ms.RUNE:{if(s[a]=!1,B.next&&B.next.length>0)break;if(t.insert(B.out),!B.runes||0===B.runes.length){r[a]=new Int32Array(0),B.next=new Uint32Array([B.out]);break}let e=[];if(1===B.runes.length&&0!==(B.arg&Zr.FOLD_CASE)){const t=B.runes[0];e.push(t,t);for(let n=gs.simpleFold(t);n!==t;n=gs.simpleFold(n))e.push(n,n);e.sort((e,t)=>e-t)}else for(let t=0;t<B.runes.length;t++)e.push(B.runes[t]);r[a]=new Int32Array(e),B.next=new Uint32Array(Math.floor(e.length/2)+1).fill(B.out),B.op=Ms.RUNE;break}case Ms.RUNE1:{if(s[a]=!1,B.next&&B.next.length>0)break;t.insert(B.out);let e=[];if(0!==(B.arg&Zr.FOLD_CASE)){const t=B.runes[0];e.push(t,t);for(let n=gs.simpleFold(t);n!==t;n=gs.simpleFold(n))e.push(n,n);e.sort((e,t)=>e-t)}else e.push(B.runes[0],B.runes[0]);r[a]=new Int32Array(e),B.next=new Uint32Array(Math.floor(e.length/2)+1).fill(B.out),B.op=Ms.RUNE;break}case Ms.RUNE_ANY:if(s[a]=!1,B.next&&B.next.length>0)break;t.insert(B.out),r[a]=new Int32Array([0,gs.MAX_RUNE]),B.next=new Uint32Array([B.out]);break;case Ms.RUNE_ANY_NOT_NL:if(s[a]=!1,B.next&&B.next.length>0)break;t.insert(B.out),r[a]=new Int32Array([0,9,11,gs.MAX_RUNE]),B.next=new Uint32Array(Math.floor(r[a].length/2)+1).fill(B.out)}return o};for(t.clear(),t.insert(e.start);!t.empty();)if(n.clear(),!i(t.next()))return null;for(let t=0;t<e.inst.length;t++)r[t]&&(e.inst[t].runes=r[t]);return e})(r),null!==r&&((e,t)=>{for(let n=0;n<t.inst.length;n++){const r=t.inst[n];switch(r.op){case Ms.ALT:case Ms.ALT_MATCH:case Ms.RUNE:break;case Ms.CAPTURE:case Ms.EMPTY_WIDTH:case Ms.NOP:case Ms.MATCH:case Ms.FAIL:e.inst[n].next=null;break;case Ms.RUNE1:case Ms.RUNE_ANY:case Ms.RUNE_ANY_NOT_NL:e.inst[n].next=null,e.inst[n].op=r.op,e.inst[n].runes=r.runes?new Int32Array(r.runes):new Int32Array(0)}}})(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===Ms.ALT_MATCH?e.out:0}static execute(t,n,r,s,i){const a=t.onepass;if(!a)return null;const o=new Int32Array(i).fill(-1);let B=!1,u=n.step(r),c=u>>3,l=7&u,h=Ts.EOF(),C=-1,d=0;u!==Ts.EOF()&&(h=n.step(r+l),h!==Ts.EOF()&&(C=h>>3,d=7&h));let f,p=0===r?ws.emptyOpContext(-1,c):n.context(r),g=a.start;for(;;){switch(f=a.inst[g],g=f.out,f.op){case Ms.MATCH:return s===Zr.ANCHOR_BOTH&&r!==n.endPos()?null:(B=!0,o.length>0&&(o[0]=0,o[1]=r),0===i?[]:ws.toArray(o));case Ms.RUNE:if(!f.matchRune(c))return null;break;case Ms.RUNE1:if(c!==f.runes[0])return null;break;case Ms.RUNE_ANY:break;case Ms.RUNE_ANY_NOT_NL:if(10===c)return null;break;case Ms.ALT:case Ms.ALT_MATCH:g=e.next(f,c);continue;case Ms.FAIL:return null;case Ms.NOP:continue;case Ms.EMPTY_WIDTH:if(0!==(f.arg&~p))return null;continue;case Ms.CAPTURE:f.arg<o.length&&(o[f.arg]=r);continue;default:throw new ks("bad inst")}if(0===l)break;p=ws.emptyOpContext(c,C),r+=l,c=C,l=d,-1!==c&&(h=n.step(r+l),h!==Ts.EOF()?(C=h>>3,d=7&h):(C=-1,d=0))}return B?0===i?[]:ws.toArray(o):null}},Zs=class e{static Op=ys(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(t){return t>=e.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===cs.CODES["-"]?"\\":""}static fromRegexp(t){const n=new e(t.op);return n.flags=t.flags,n.subs=t.subs,n.runes=t.runes,n.cap=t.cap,n.min=t.min,n.max=t.max,n.name=t.name,n.namedGroups=t.namedGroups,n.lb=t.lb,n}constructor(t){this.op=t,this.flags=0,this.subs=e.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=e.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let t="";switch(this.op){case e.Op.NO_MATCH:t+="[^\\x00-\\x{10FFFF}]";break;case e.Op.EMPTY_MATCH:t+="(?:)";break;case e.Op.STAR:case e.Op.PLUS:case e.Op.QUEST:case e.Op.REPEAT:{const n=this.subs[0];switch(n.op>e.Op.CAPTURE||n.op===e.Op.LITERAL&&n.runes.length>1?t+=`(?:${n.appendTo()})`:t+=n.appendTo(),this.op){case e.Op.STAR:t+="*";break;case e.Op.PLUS:t+="+";break;case e.Op.QUEST:t+="?";break;case e.Op.REPEAT:t+=`{${this.min}`,this.min!==this.max&&(t+=",",this.max>=0&&(t+=this.max)),t+="}"}0!==(this.flags&Zr.NON_GREEDY)&&(t+="?");break}case e.Op.CONCAT:for(let n of this.subs)n.op===e.Op.ALTERNATE?t+=`(?:${n.appendTo()})`:t+=n.appendTo();break;case e.Op.ALTERNATE:{let e="";for(let n of this.subs)t+=e,e="|",t+=n.appendTo();break}case e.Op.LITERAL:0!==(this.flags&Zr.FOLD_CASE)&&(t+="(?i:");for(let e of this.runes)t+=ws.escapeRune(e);0!==(this.flags&Zr.FOLD_CASE)&&(t+=")");break;case e.Op.ANY_CHAR_NOT_NL:t+="(?-s:.)";break;case e.Op.ANY_CHAR:t+="(?s:.)";break;case e.Op.PLB:t+=`(?<=${this.subs[0].appendTo()})`;break;case e.Op.NLB:t+=`(?<!${this.subs[0].appendTo()})`;break;case e.Op.CAPTURE:null===this.name||0===this.name.length?t+="(":t+=`(?P<${this.name}>`,this.subs[0].op!==e.Op.EMPTY_MATCH&&(t+=this.subs[0].appendTo()),t+=")";break;case e.Op.BEGIN_TEXT:t+="\\A";break;case e.Op.END_TEXT:0!==(this.flags&Zr.WAS_DOLLAR)?t+="(?-m:$)":t+="\\z";break;case e.Op.BEGIN_LINE:t+="^";break;case e.Op.END_LINE:t+="$";break;case e.Op.WORD_BOUNDARY:t+="\\b";break;case e.Op.NO_WORD_BOUNDARY:t+="\\B";break;case e.Op.CHAR_CLASS:if(this.runes.length%2!=0){t+="[invalid char class]";break}if(t+="[",0===this.runes.length)t+="^\\x00-\\x{10FFFF}";else if(0===this.runes[0]&&this.runes[this.runes.length-1]===gs.MAX_RUNE){t+="^";for(let n=1;n<this.runes.length-1;n+=2){const r=this.runes[n]+1,s=this.runes[n+1]-1;t+=e.quoteIfHyphen(r),t+=ws.escapeRune(r),r!==s&&(t+="-",t+=e.quoteIfHyphen(s),t+=ws.escapeRune(s))}}else for(let n=0;n<this.runes.length;n+=2){const r=this.runes[n],s=this.runes[n+1];t+=e.quoteIfHyphen(r),t+=ws.escapeRune(r),r!==s&&(t+="-",t+=e.quoteIfHyphen(s),t+=ws.escapeRune(s))}t+="]";break;default:t+=this.op}return t}maxCap(){let t=0;if(this.op===e.Op.CAPTURE&&(t=this.cap),null!==this.subs)for(let e of this.subs){const n=e.maxCap();t<n&&(t=n)}return t}equals(t){if(!(null!==t&&t instanceof e))return!1;if(this.op!==t.op)return!1;switch(this.op){case e.Op.END_TEXT:if((this.flags&Zr.WAS_DOLLAR)!==(t.flags&Zr.WAS_DOLLAR))return!1;break;case e.Op.LITERAL:case e.Op.CHAR_CLASS:if((this.flags&Zr.FOLD_CASE)!==(t.flags&Zr.FOLD_CASE))return!1;if(null===this.runes&&null===t.runes)break;if(null===this.runes||null===t.runes)return!1;if(this.runes.length!==t.runes.length)return!1;for(let e=0;e<this.runes.length;e++)if(this.runes[e]!==t.runes[e])return!1;break;case e.Op.ALTERNATE:case e.Op.CONCAT:if(this.subs.length!==t.subs.length)return!1;for(let e=0;e<this.subs.length;++e)if(!this.subs[e].equals(t.subs[e]))return!1;break;case e.Op.STAR:case e.Op.PLUS:case e.Op.QUEST:if((this.flags&Zr.NON_GREEDY)!==(t.flags&Zr.NON_GREEDY)||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.REPEAT:if((this.flags&Zr.NON_GREEDY)!==(t.flags&Zr.NON_GREEDY)||this.min!==t.min||this.max!==t.max||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.CAPTURE:if(this.cap!==t.cap||(null===this.name?null!==t.name:this.name!==t.name)||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.PLB:case e.Op.NLB:if(this.lb!==t.lb||!this.subs[0].equals(t.subs[0]))return!1}return!0}},ei=class{static walk(e,t){const n=[];let r,s=e;for(;;){if(0===s.subs.length)r=t.leaf(s);else{const e=t.enter(s);if(void 0===e.result){n.push({re:s,state:e,i:0}),s=s.subs[0];continue}r=e.result}for(;;){if(0===n.length)return r;const e=n[n.length-1];if(t.child(e.re,e.state,r,e.i),e.i++,void 0===e.state.result&&e.i<e.re.subs.length){s=e.re.subs[e.i];break}n.pop(),r=void 0!==e.state.result?e.state.result:t.leave(e.re,e.state)}}}},ti=class{constructor(e,t){const n=new Map,r=[0],s=[0],i=[0],a=[0];for(const o of e){let e=0;for(let B=0;B<o.length;B++){const u=e*t+o[B];let c=n.get(u);void 0===c&&(c=r.length,n.set(u,c),r.push(e),s.push(o[B]),i.push(i[e]+1),a.push(0)),e=c}a[e]=1}const o=r.length,B=new Int32Array(o-1);for(let e=1;e<o;e++)B[e-1]=e;B.sort((e,t)=>r[e]-r[t]||s[e]-s[t]);const u=new Int32Array(o+1);for(let e=1;e<o;e++)u[r[e]+1]++;for(let e=0;e<o;e++)u[e+1]+=u[e];const c=new Int32Array(o-1);for(let e=0;e<B.length;e++)c[e]=s[B[e]];this.childStart=u,this.childUnit=c,this.childNode=B;const l=new Int32Array(o);for(let e=0;e<o;e++)l[e]=e;l.sort((e,t)=>i[e]-i[t]);const h=new Int32Array(o),C=Uint8Array.from(a);for(let e=1;e<o;e++){const t=l[e],n=r[t];if(0!==n){let e=h[n],r=this.next(e,s[t]);for(;r<0&&0!==e;)e=h[e],r=this.next(e,s[t]);h[t]=r>=0?r:0}C[t]|=C[h[t]]}this.fail=h,this.match=C}next(e,t){let n=this.childStart[e],r=this.childStart[e+1];const s=this.childUnit;for(;n<r;){const e=n+r>>1,i=s[e];if(i===t)return this.childNode[e];i<t?n=e+1:r=e}return-1}advance(e,t){for(;;){const n=this.next(e,t);if(n>=0)return n;if(0===e)return 0;e=this.fail[e]}}searchUTF16(e,t,n){let r=0;for(let s=t;s<n;s++)if(r=this.advance(r,e.charCodeAt(s)),1===this.match[r])return!0;return!1}searchUTF8(e,t,n){let r=0;for(let s=t;s<n;s++)if(r=this.advance(r,e[s]),1===this.match[r])return!0;return!1}},ni=class e{static Type={NONE:0,EXACT:1,AND:2,OR:3};static MAX_SCANS=32;static MAX_AC_UNITS=1<<18;constructor(t){this.type=t,this.subs=[],this.str="",this.bytes=null,this.cost=t===e.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(null===this.ac16){const e=this.subs.map(e=>{const t=new Array(e.str.length);for(let n=0;n<e.str.length;n++)t[n]=e.str.charCodeAt(n);return t});this.ac16=new ti(e,65536)}return this.ac16}automaton8(){return null===this.ac8&&(this.ac8=new ti(this.subs.map(e=>e.bytes),256)),this.ac8}eval(t,n){switch(this.type){case e.Type.NONE:return!0;case e.Type.EXACT:return t.hasString(this,n);case e.Type.AND:for(let e=0;e<this.subs.length;e++)if(!this.subs[e].eval(t,n))return!1;return!0;case e.Type.OR:if(this.allExact)return t.hasAnyString(this,n);for(let e=0;e<this.subs.length;e++)if(this.subs[e].eval(t,n))return!0;return!1;default:return!0}}},ri=class e{static build(t){return t?ei.walk(t,e.WALKER):new ni(ni.Type.NONE)}static WALKER={leaf:t=>e.leaf(t),enter:t=>e.enter(t),child:(t,n,r)=>e.child(t,n,r),leave:(t,n)=>e.leave(t,n)};static leaf(e){if(e.op!==Zs.Op.LITERAL)return new ni(ni.Type.NONE);if(0===e.runes.length||0!==(e.flags&Zr.FOLD_CASE))return new ni(ni.Type.NONE);let t="";for(let n=0;n<e.runes.length;n++){if(gs.isUnsearchable(e.runes[n]))return new ni(ni.Type.NONE);t+=String.fromCodePoint(e.runes[n])}const n=new ni(ni.Type.EXACT);return n.str=t,n.bytes=ws.stringToUtf8ByteArray(n.str),n}static enter(e){switch(e.op){case Zs.Op.CAPTURE:case Zs.Op.PLUS:return{sub:null};case Zs.Op.REPEAT:return e.min>=1?{sub:null}:{result:new ni(ni.Type.NONE)};case Zs.Op.CONCAT:return{pf:new ni(ni.Type.AND),subs:[]};case Zs.Op.ALTERNATE:return{pf:new ni(ni.Type.OR),subs:[]};default:return{result:new ni(ni.Type.NONE)}}}static child(e,t,n){if(void 0!==t.subs)if(t.pf.type!==ni.Type.AND)if(n.type!==ni.Type.NONE)if(n.type!==ni.Type.OR)t.subs.push(n);else for(let e=0;e<n.subs.length;e++)t.subs.push(n.subs[e]);else t.result=new ni(ni.Type.NONE);else{if(n.type===ni.Type.NONE)return;if(n.type===ni.Type.AND){for(let e=0;e<n.subs.length;e++)t.subs.push(n.subs[e]);return}t.subs.push(n)}else t.sub=n}static leave(e,t){if(void 0===t.subs)return t.sub;const n=t.pf,r=new Set,s=[];for(const e of t.subs){if(e.type===ni.Type.EXACT){if(r.has(e.str))continue;r.add(e.str)}s.push(e)}if(n.type===ni.Type.AND){const e=[];let t=0;for(const n of s)t+n.cost>ni.MAX_SCANS||(e.push(n),t+=n.cost);return 0===e.length?new ni(ni.Type.NONE):1===e.length?e[0]:(n.subs=e,n.cost=t,n)}if(0===s.length)return new ni(ni.Type.NONE);if(1===s.length)return s[0];n.subs=s;let i=!0,a=0,o=0;for(const e of s)e.type!==ni.Type.EXACT?i=!1:o+=e.bytes.length,a+=e.cost;return i?o>ni.MAX_AC_UNITS?new ni(ni.Type.NONE):(n.allExact=!0,n.cost=1,n):a>ni.MAX_SCANS?new ni(ni.Type.NONE):(n.cost=a,n)}},si=class{constructor(e=0,t=0){this.head=e,this.tail=t}},ii=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new Ms(e))}markLookbehindInsts(){const e=new Uint8Array(this.inst.length),t=this.lbStarts.slice();for(;t.length>0;){const n=t.pop();if(0===n||1===e[n])continue;e[n]=1;const r=this.inst[n];switch(r.op){case Ms.ALT:case Ms.ALT_MATCH:t.push(r.out,r.arg);break;case Ms.MATCH:case Ms.FAIL:break;default:t.push(r.out)}}this.lbInst=e}skipNop(e){let t=this.inst[e];for(;t.op===Ms.NOP||t.op===Ms.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!Ms.isRuneOp(t.op)||1!==t.runes.length)return[t.op===Ms.MATCH,e];for(;Ms.isRuneOp(t.op)&&1===t.runes.length&&0===(t.arg&Zr.FOLD_CASE)&&!gs.isUnsearchable(t.runes[0]);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===Ms.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const n=this.inst[t];switch(n.op){case Ms.EMPTY_WIDTH:e|=n.arg;break;case Ms.FAIL:return-1;case Ms.CAPTURE:case Ms.NOP:break;default:break e}t=n.out}return e}patch(e,t){let n=e.head;for(;0!==n;){const e=this.inst[n>>1];1&n?(n=e.arg,e.arg=t):(n=e.out,e.out=t)}}append(e,t){if(0===e.head)return t;if(0===t.head)return e;const n=this.inst[e.tail>>1];return 1&e.tail?n.arg=t.head:n.out=t.head,new si(e.head,t.tail)}toString(){let e="";for(let t=0;t<this.inst.length;t++){const n=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-n),e+=this.inst[t],e+="\n"}return e}};const ai=new Int32Array([0,cs.CODES["\n"]-1,cs.CODES["\n"]+1,gs.MAX_RUNE]),oi=new Int32Array([0,gs.MAX_RUNE]);var Bi=class{constructor(e=0,t=new si,n=!1){this.i=e,this.out=t,this.nullable=n}},ui=class e{static compileRegexp(t){const n=new e,r=n.compile(t);return n.prog.patch(r.out,n.newInst(Ms.MATCH).i),n.prog.start=r.i,n.prog.markLookbehindInsts(),n.prog}static compileSet(t){const n=new e;if(0===t.length)return n.prog.start=n.newInst(Ms.FAIL).i,n.prog.markLookbehindInsts(),n.prog;let r=[];for(let e=0;e<t.length;e++){n.lbOffset=n.prog.numLb;const s=n.compile(t[e]),i=n.newInst(Ms.MATCH);n.prog.getInst(i.i).arg=e,n.prog.patch(s.out,i.i),r.push(s.i)}let s=r[0];for(let e=1;e<r.length;e++){const t=n.newInst(Ms.ALT),i=n.prog.getInst(t.i);i.out=s,i.arg=r[e],s=t.i}return n.prog.start=s,n.prog.markLookbehindInsts(),n.prog}constructor(){this.prog=new ii,this.newInst(Ms.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,n)=>this.child(e,t,n),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new Bi(this.prog.numInst()-1,new si,!0)}nop(){const e=this.newInst(Ms.NOP);return e.out=new si(e.i<<1,e.i<<1),e}fail(){return new Bi}cap(e){const t=this.newInst(Ms.CAPTURE);return t.out=new si(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return 0===e.i||0===t.i?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new Bi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(0===e.i)return t;if(0===t.i)return e;const n=this.newInst(Ms.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(Ms.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new si(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new si(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){if(0===e.i)return this.nop();const n=this.newInst(Ms.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new si(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new si(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return 0===e.i?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return 0===e.i?this.fail():new Bi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(Ms.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new si(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(Ms.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=Zr.FOLD_CASE,1===e.length&&gs.simpleFold(e[0])!==e[0]||(t&=-2),r.arg=t,n.out=new si(n.i<<1,n.i<<1),0===(t&Zr.FOLD_CASE)&&1===e.length||2===e.length&&e[0]===e[1]?r.op=Ms.RUNE1:2===e.length&&0===e[0]&&e[1]===gs.MAX_RUNE?r.op=Ms.RUNE_ANY:4===e.length&&0===e[0]&&e[1]===cs.CODES["\n"]-1&&e[2]===cs.CODES["\n"]+1&&e[3]===gs.MAX_RUNE&&(r.op=Ms.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=Math.sign(t)*(Math.abs(t)+this.lbOffset),r=this.newInst(Ms.LB_WRITE);this.prog.getInst(r.i).arg=n;const s=this.rune(oi,0),i=this.star(s,!0),a=this.cat(i,e);this.prog.patch(a.out,r.i);const o=this.newInst(Ms.LB_CHECK);return this.prog.getInst(o.i).arg=n,this.prog.lbStarts.push(a.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),o.out=new si(o.i<<1,o.i<<1),o}compile(e){return ei.walk(e,this.walker)}leaf(e){switch(e.op){case Zs.Op.NO_MATCH:return this.fail();case Zs.Op.EMPTY_MATCH:return this.nop();case Zs.Op.LITERAL:{if(0===e.runes.length)return this.nop();let t=null;for(let n of e.runes){let r=this.runeCache.get(n);void 0===r&&(r=new Int32Array([n]),this.runeCache.set(n,r));const s=this.rune(r,e.flags);t=null===t?s:this.cat(t,s)}return t}case Zs.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case Zs.Op.ANY_CHAR_NOT_NL:return this.rune(ai,0);case Zs.Op.ANY_CHAR:return this.rune(oi,0);case Zs.Op.BEGIN_LINE:return this.empty(ws.EMPTY_BEGIN_LINE);case Zs.Op.END_LINE:return this.empty(ws.EMPTY_END_LINE);case Zs.Op.BEGIN_TEXT:return this.empty(ws.EMPTY_BEGIN_TEXT);case Zs.Op.END_TEXT:return this.empty(ws.EMPTY_END_TEXT);case Zs.Op.WORD_BOUNDARY:return this.empty(ws.EMPTY_WORD_BOUNDARY);case Zs.Op.NO_WORD_BOUNDARY:return this.empty(ws.EMPTY_NO_WORD_BOUNDARY);case Zs.Op.CONCAT:case Zs.Op.ALTERNATE:return this.nop();default:throw new Ls("regexp: unhandled case in compile")}}enter(e){switch(e.op){case Zs.Op.PLB:case Zs.Op.NLB:case Zs.Op.STAR:case Zs.Op.PLUS:case Zs.Op.QUEST:return{sub:null};case Zs.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case Zs.Op.CONCAT:case Zs.Op.ALTERNATE:return{f:null};default:throw new Ls("regexp: unhandled case in compile")}}child(e,t,n){e.op===Zs.Op.CONCAT?t.f=null===t.f?n:this.cat(t.f,n):e.op===Zs.Op.ALTERNATE?t.f=null===t.f?n:this.alt(t.f,n):t.sub=n}leave(e,t){switch(e.op){case Zs.Op.PLB:case Zs.Op.NLB:return this.lookBehind(t.sub,e.lb);case Zs.Op.CAPTURE:{const n=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),n)}case Zs.Op.STAR:return this.star(t.sub,0!==(e.flags&Zr.NON_GREEDY));case Zs.Op.PLUS:return this.plus(t.sub,0!==(e.flags&Zr.NON_GREEDY));case Zs.Op.QUEST:return this.quest(t.sub,0!==(e.flags&Zr.NON_GREEDY));case Zs.Op.CONCAT:case Zs.Op.ALTERNATE:return t.f;default:throw new Ls("regexp: unhandled case in compile")}}},ci=class e{static simplify(t){return null===t?null:ei.walk(t,e.WALKER)}static WALKER={leaf:t=>e.leaf(t),enter:t=>e.enter(t),child:(t,n,r,s)=>e.child(t,n,r,s),leave:(t,n)=>e.leave(t,n)};static leaf(e){if(e.op===Zs.Op.CHAR_CLASS){if(null===e.runes)return e;if(0===e.runes.length)return new Zs(Zs.Op.NO_MATCH);if(2===e.runes.length&&0===e.runes[0]&&e.runes[1]===gs.MAX_RUNE)return new Zs(Zs.Op.ANY_CHAR);if(4===e.runes.length&&0===e.runes[0]&&e.runes[1]===cs.CODES["\n"]-1&&e.runes[2]===cs.CODES["\n"]+1&&e.runes[3]===gs.MAX_RUNE)return new Zs(Zs.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case Zs.Op.PLB:case Zs.Op.NLB:case Zs.Op.CAPTURE:case Zs.Op.STAR:case Zs.Op.PLUS:case Zs.Op.QUEST:return{sub:null};case Zs.Op.CONCAT:case Zs.Op.ALTERNATE:return{subs:[],changed:!1};case Zs.Op.REPEAT:return 0===e.min&&0===e.max?{result:new Zs(Zs.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,n,r){if(void 0!==t.subs){if(n!==e.subs[r]&&(t.changed=!0),e.op===Zs.Op.CONCAT){if(n.op===Zs.Op.NO_MATCH)return void(t.result=new Zs(Zs.Op.NO_MATCH));if(n.op===Zs.Op.EMPTY_MATCH)return void(t.changed=!0);if(n.op===Zs.Op.CONCAT){t.changed=!0;for(let e=0;e<n.subs.length;e++)t.subs.push(n.subs[e]);return}}else{if(n.op===Zs.Op.NO_MATCH)return void(t.changed=!0);if(n.op===Zs.Op.ALTERNATE){t.changed=!0;for(let e=0;e<n.subs.length;e++)t.subs.push(n.subs[e]);return}}t.subs.push(n)}else t.sub=n}static leave(t,n){switch(t.op){case Zs.Op.PLB:case Zs.Op.NLB:case Zs.Op.CAPTURE:{const e=n.sub;if(e!==t.subs[0]){const n=Zs.fromRegexp(t);return n.runes=new Int32Array(0),n.subs=[e],n}return t}case Zs.Op.CONCAT:case Zs.Op.ALTERNATE:if(n.changed){const e=n.subs;if(0===e.length)return new Zs(t.op===Zs.Op.CONCAT?Zs.Op.EMPTY_MATCH:Zs.Op.NO_MATCH);if(1===e.length)return e[0];const r=Zs.fromRegexp(t);return r.runes=new Int32Array(0),r.subs=e,r}return t;case Zs.Op.STAR:case Zs.Op.PLUS:case Zs.Op.QUEST:return e.simplify1(t.op,t.flags,n.sub,t);case Zs.Op.REPEAT:return e.simplifyRepeat(t,n.sub);default:return t}}static simplifyRepeat(t,n){if(-1===t.max){if(0===t.min)return e.simplify1(Zs.Op.STAR,t.flags,n,null);if(1===t.min)return e.simplify1(Zs.Op.PLUS,t.flags,n,null);const r=[];for(let e=0;e<t.min-1;e++)r.push(n);return r.push(e.simplify1(Zs.Op.PLUS,t.flags,n,null)),e.concat(r)}if(1===t.min&&1===t.max)return n;let r=null;if(t.min>0){r=[];for(let e=0;e<t.min;e++)r.push(n)}if(t.max>t.min){let s=e.simplify1(Zs.Op.QUEST,t.flags,n,null);for(let r=t.min+1;r<t.max;r++)s=e.simplify1(Zs.Op.QUEST,t.flags,e.concat([n,s]),null);if(null===r)return s;r.push(s)}return null!==r?e.concat(r):new Zs(Zs.Op.NO_MATCH)}static concat(e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];if(r.op===Zs.Op.NO_MATCH)return new Zs(Zs.Op.NO_MATCH);if(r.op!==Zs.Op.EMPTY_MATCH)if(r.op!==Zs.Op.CONCAT)t.push(r);else for(let e=0;e<r.subs.length;e++)t.push(r.subs[e])}if(0===t.length)return new Zs(Zs.Op.EMPTY_MATCH);if(1===t.length)return t[0];const n=new Zs(Zs.Op.CONCAT);return n.subs=t,n}static simplify1(e,t,n,r){if(n.op===Zs.Op.EMPTY_MATCH)return n;if(n.op===Zs.Op.NO_MATCH)return e===Zs.Op.PLUS?n:new Zs(Zs.Op.EMPTY_MATCH);if(e===n.op&&(t&Zr.NON_GREEDY)===(n.flags&Zr.NON_GREEDY))return n;if(null!==r&&r.op===e&&(r.flags&Zr.NON_GREEDY)===(t&Zr.NON_GREEDY)&&n===r.subs[0])return r;const s=new Zs(e);return s.flags=t,s.subs=[n],s}},li=class{constructor(e,t){this.sign=e,this.cls=t}};const hi=[48,57],Ci=[9,10,12,13,32,32],di=[48,57,65,90,95,95,97,122],fi=new Map([["\\d",new li(1,hi)],["\\D",new li(-1,hi)],["\\s",new li(1,Ci)],["\\S",new li(-1,Ci)],["\\w",new li(1,di)],["\\W",new li(-1,di)]]),pi=[48,57,65,90,97,122],gi=[65,90,97,122],mi=[0,127],Ei=[9,9,32,32],Di=[0,31,127,127],wi=[48,57],yi=[33,126],_i=[97,122],Ii=[32,126],vi=[33,47,58,64,91,96,123,126],bi=[9,13,32,32],Ti=[65,90],Ai=[48,57,65,90,95,95,97,122],Ni=[48,57,65,70,97,102],Oi=new Map([["[:alnum:]",new li(1,pi)],["[:^alnum:]",new li(-1,pi)],["[:alpha:]",new li(1,gi)],["[:^alpha:]",new li(-1,gi)],["[:ascii:]",new li(1,mi)],["[:^ascii:]",new li(-1,mi)],["[:blank:]",new li(1,Ei)],["[:^blank:]",new li(-1,Ei)],["[:cntrl:]",new li(1,Di)],["[:^cntrl:]",new li(-1,Di)],["[:digit:]",new li(1,wi)],["[:^digit:]",new li(-1,wi)],["[:graph:]",new li(1,yi)],["[:^graph:]",new li(-1,yi)],["[:lower:]",new li(1,_i)],["[:^lower:]",new li(-1,_i)],["[:print:]",new li(1,Ii)],["[:^print:]",new li(-1,Ii)],["[:punct:]",new li(1,vi)],["[:^punct:]",new li(-1,vi)],["[:space:]",new li(1,bi)],["[:^space:]",new li(-1,bi)],["[:upper:]",new li(1,Ti)],["[:^upper:]",new li(-1,Ti)],["[:word:]",new li(1,Ai)],["[:^word:]",new li(-1,Ai)],["[:xdigit:]",new li(1,Ni)],["[:^xdigit:]",new li(-1,Ni)]]);var Si=class e{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const t=e[r],s=e[r+1];n+=t===s?`0x${t.toString(16)}`:`0x${t.toString(16)}-0x${s.toString(16)}`}return n+="]",n}static sortRanges(e,t){const n=t>>1,r=new Array(n);for(let e=0;e<n;e++)r[e]=e;r.sort((t,n)=>e[2*t]-e[2*n]||e[2*n+1]-e[2*t+1]);const s=e.slice(0,t);for(let t=0;t<n;t++)e[2*t]=s[2*r[t]],e[2*t+1]=s[2*r[t]+1]}constructor(e=ws.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;e.sortRanges(this.r,this.len);let t=2;for(let e=2;e<this.len;e+=2){const n=this.r[e],r=this.r[e+1];n<=this.r[t-1]+1?r>this.r[t-1]&&(this.r[t-1]=r):(this.r[t]=n,this.r[t+1]=r,t+=2)}return this.len=t,this}appendLiteral(e,t){return 0!==(t&Zr.FOLD_CASE)?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0)for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],s=this.r[this.len-n+1];if(e<=s+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>s&&(this.r[this.len-n+1]=t),this}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=gs.MIN_FOLD&&t>=gs.MAX_FOLD)return this.appendRange(e,t);if(t<gs.MIN_FOLD||e>gs.MAX_FOLD)return this.appendRange(e,t);e<gs.MIN_FOLD&&(this.appendRange(e,gs.MIN_FOLD-1),e=gs.MIN_FOLD),t>gs.MAX_FOLD&&(this.appendRange(gs.MAX_FOLD+1,t),t=gs.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let e=gs.simpleFold(n);e!==n;e=gs.simpleFold(e))this.appendRange(e,e)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],s=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=s+1}return t<=gs.MAX_RUNE&&this.appendRange(t,gs.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),s=e.getStride(t);if(1!==s)for(let e=n;e<=r;e+=s)this.appendRange(e,e);else this.appendRange(n,r)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),s=e.getHi(n),i=e.getStride(n);if(1!==i)for(let e=r;e<=s;e+=i)t<=e-1&&this.appendRange(t,e-1),t=e+1;else t<=r-1&&this.appendRange(t,r-1),t=s+1}return t<=gs.MAX_RUNE&&this.appendRange(t,gs.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],s=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=s+1}return this.len=t,e<=gs.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=gs.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(t,n){let r=t.cls;return n&&(r=(new e).appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,t.sign)}toString(){return e.charClassToString(this.r,this.len)}},Fi=class{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ws.charCount(e),e}lookingAt(e){return this.str.startsWith(e,this.position)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}},Li=class e{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=1398101;static MAX_RUNES=33554432;static ANY_TABLE=new ls(new Uint32Array([0,gs.MAX_RUNE,1]));static ASCII_TABLE=new ls(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new ls(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(t){return"Any"===t?{tab:e.ANY_TABLE,fold:e.ANY_TABLE,sign:1}:"Ascii"===t?{tab:e.ASCII_TABLE,fold:e.ASCII_FOLD_TABLE,sign:1}:"Assigned"===t?{tab:ps.CATEGORIES.get("Cn"),fold:ps.CATEGORIES.get("Cn"),sign:-1}:"Lc"===t?{tab:ps.CATEGORIES.get("LC"),fold:ps.FOLD_CATEGORIES.get("LC"),sign:1}:ps.CATEGORIES.has(t)?{tab:ps.CATEGORIES.get(t),fold:ps.FOLD_CATEGORIES.get(t),sign:1}:ps.SCRIPTS.has(t)?{tab:ps.SCRIPTS.get(t),fold:ps.FOLD_SCRIPT.get(t),sign:1}:null}static minFoldRune(e){if(e<gs.MIN_FOLD||e>gs.MAX_FOLD)return e;let t=e;const n=e;for(e=gs.simpleFold(e);e!==n;e=gs.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===Zs.Op.EMPTY_MATCH)return null;if(e.op===Zs.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===Zs.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new Zs(Zs.Op.LITERAL);return n.flags=t,n.runes=ws.stringToRunes(e),n}static parse(t,n){return new e(t,n).parseInternal()}static parseRepeat(t){const n=t.pos();if(!t.more()||!t.lookingAt("{"))return-1;t.skip(1);const r=e.parseInt(t);if(-1===r)return-1;if(!t.more())return-1;let s;if(t.lookingAt(",")){if(t.skip(1),!t.more())return-1;if(t.lookingAt("}"))s=-1;else if(-1===(s=e.parseInt(t)))return-1}else s=r;if(!t.more()||!t.lookingAt("}"))return-1;if(t.skip(1),r<0||r>1e3||-2===s||s>1e3||s>=0&&r>s)throw new Fs(e.ERR_INVALID_REPEAT_SIZE,t.from(n));return r<<16|s&gs.MAX_BMP}static isValidCaptureName(e){if(0===e.length)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==cs.CODES._&&!ws.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=cs.CODES[0]&&e.peek()<=cs.CODES[9];)e.skip(1);const n=e.from(t);return 0===n.length||n.length>1&&n.codePointAt(0)===cs.CODES[0]?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===Zs.Op.LITERAL&&1===e.runes.length||e.op===Zs.Op.CHAR_CLASS||e.op===Zs.Op.ANY_CHAR_NOT_NL||e.op===Zs.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case Zs.Op.LITERAL:return 1===e.runes.length&&e.runes[0]===t;case Zs.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case Zs.Op.ANY_CHAR_NOT_NL:return t!==cs.CODES["\n"];case Zs.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(t,n){switch(t.op){case Zs.Op.ANY_CHAR:break;case Zs.Op.ANY_CHAR_NOT_NL:e.matchRune(n,cs.CODES["\n"])&&(t.op=Zs.Op.ANY_CHAR);break;case Zs.Op.CHAR_CLASS:{const e=new Si(Array.isArray(t.runes)?t.runes:Array.from(t.runes));n.op===Zs.Op.LITERAL?e.appendLiteral(n.runes[0],n.flags):e.appendClass(n.runes),t.runes=e.toGrowableArray();break}case Zs.Op.LITERAL:if(n.runes[0]===t.runes[0]&&n.flags===t.flags)break;t.op=Zs.Op.CHAR_CLASS,t.runes=(new Si).appendLiteral(t.runes[0],t.flags).appendLiteral(n.runes[0],n.flags).toGrowableArray()}}static parseEscape(t){const n=t.pos();if(t.skip(1),!t.more())throw new Fs(e.ERR_TRAILING_BACKSLASH);let r=t.pop();e:switch(r){case cs.CODES[1]:case cs.CODES[2]:case cs.CODES[3]:case cs.CODES[4]:case cs.CODES[5]:case cs.CODES[6]:case cs.CODES[7]:if(!t.more()||t.peek()<cs.CODES[0]||t.peek()>cs.CODES[7])break;case cs.CODES[0]:{let e=r-cs.CODES[0];for(let n=1;n<3&&!(!t.more()||t.peek()<cs.CODES[0]||t.peek()>cs.CODES[7]);n++)e=8*e+t.peek()-cs.CODES[0],t.skip(1);return e}case cs.CODES.x:{if(!t.more())break;if(r=t.pop(),r===cs.CODES["{"]){let e=0,n=0;for(;;){if(!t.more())break e;if(r=t.pop(),r===cs.CODES["}"])break;const s=ws.unhex(r);if(s<0)break e;if(n=16*n+s,n>gs.MAX_RUNE)break e;e++}if(0===e)break e;return n}const e=ws.unhex(r);if(!t.more())break;r=t.pop();const n=ws.unhex(r);if(e<0||n<0)break;return 16*e+n}case cs.CODES.a:return cs.CODES[""];case cs.CODES.f:return cs.CODES["\f"];case cs.CODES.n:return cs.CODES["\n"];case cs.CODES.r:return cs.CODES["\r"];case cs.CODES.t:return cs.CODES["\t"];case cs.CODES.v:return cs.CODES["\v"];default:if(r<=gs.MAX_ASCII&&!ws.isalnum(r))return r}throw new Fs(e.ERR_INVALID_ESCAPE,t.from(n))}static parseClassChar(t,n){if(!t.more())throw new Fs(e.ERR_MISSING_BRACKET,t.from(n));return t.lookingAt("\\")?e.parseEscape(t):t.pop()}static hasCapture(t){if(null===t)return!1;if(t.op===Zs.Op.CAPTURE)return!0;if(t.subs)for(let n of t.subs)if(e.hasCapture(n))return!0;return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return null!==t&&null!==t.subs&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new Zs(e),this.numRegexp+=1),t}reuse(e){null!==this.height&&this.height.has(e)&&this.height.delete(e),null!==e.subs&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(t){if(this.numRunes>e.MAX_RUNES)throw new Fs(e.ERR_LARGE);this.checkSize(t),this.checkHeight(t)}checkSize(t){if(null===this.size){if(0===this.repeats&&(this.repeats=1),t.op===Zs.Op.REPEAT){let n=t.max;-1===n&&(n=t.min),n<=0&&(n=1),n>Math.floor(e.MAX_SIZE/this.repeats)?this.repeats=e.MAX_SIZE:this.repeats*=n}if(this.numRegexp<Math.floor(e.MAX_SIZE/this.repeats))return;this.size=new Map;for(let e of this.stack)this.checkSize(e)}if(this.calcSize(t,!0)>e.MAX_SIZE)throw new Fs(e.ERR_LARGE)}calcSize(e,t=!1){if(!t&&null!==this.size&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case Zs.Op.LITERAL:n=e.runes.length;break;case Zs.Op.PLB:case Zs.Op.NLB:case Zs.Op.CAPTURE:case Zs.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case Zs.Op.PLUS:case Zs.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case Zs.Op.CONCAT:for(let t of e.subs)n+=this.calcSize(t);break;case Zs.Op.ALTERNATE:for(let t of e.subs)n+=this.calcSize(t);e.subs.length>1&&(n=n+e.subs.length-1);break;case Zs.Op.REPEAT:{let t=this.calcSize(e.subs[0]);if(-1===e.max){n=0===e.min?2+t:1+e.min*t;break}n=e.max*t+(e.max-e.min);break}}return n=Math.max(1,n),null===this.size&&(this.size=new Map),this.size.set(e,n),n}checkHeight(t){if(!(this.numRegexp<e.MAX_HEIGHT)){if(null===this.height){this.height=new Map;for(let e of this.stack)this.checkHeight(e)}if(this.calcHeight(t,!0)>e.MAX_HEIGHT)throw new Fs(e.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&null!==this.height&&this.height.has(e))return this.height.get(e);let n=1;for(let t of e.subs){const e=this.calcHeight(t);n<1+e&&(n=1+e)}return null===this.height&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!Zs.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===Zs.Op.CHAR_CLASS&&2===e.runes.length&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],-2&this.flags))return null;e.op=Zs.Op.LITERAL,e.runes=[e.runes[0]],e.flags=-2&this.flags}else if(e.op===Zs.Op.CHAR_CLASS&&4===e.runes.length&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&gs.simpleFold(e.runes[0])===e.runes[2]&&gs.simpleFold(e.runes[2])===e.runes[0]||e.op===Zs.Op.CHAR_CLASS&&2===e.runes.length&&e.runes[0]+1===e.runes[1]&&gs.simpleFold(e.runes[0])===e.runes[1]&&gs.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|Zr.FOLD_CASE))return null;e.op=Zs.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|Zr.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],s=this.stack[n-2];if(r.op!==Zs.Op.LITERAL||s.op!==Zs.Op.LITERAL||(r.flags&Zr.FOLD_CASE)!==(s.flags&Zr.FOLD_CASE))return!1;Array.isArray(s.runes)||(s.runes=Array.from(s.runes));for(let e=0;e<r.runes.length;e++)s.runes.push(r.runes[e]);return e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1)}newLiteral(t,n){const r=this.newRegexp(Zs.Op.LITERAL);return r.flags=n,0!==(n&Zr.FOLD_CASE)&&(t=e.minFoldRune(t)),r.runes=[t],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(t,n,r,s,i,a){let o=this.flags;if(0!==(o&Zr.PERL_X)&&(i.more()&&i.lookingAt("?")&&(i.skip(1),o^=Zr.NON_GREEDY),-1!==a))throw new Fs(e.ERR_INVALID_REPEAT_OP,i.from(a));const B=this.stack.length;if(0===B)throw new Fs(e.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.stack[B-1];if(Zs.isPseudoOp(u.op))throw new Fs(e.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.newRegexp(t);if(c.min=n,c.max=r,c.flags=o,c.subs=[u],this.stack[B-1]=c,this.checkLimits(c),t===Zs.Op.REPEAT&&(n>=2||r>=2)&&!this.repeatIsValid(c,1e3))throw new Fs(e.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===Zs.Op.REPEAT){let n=e.max;if(0===n)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return 0===e.length?this.push(this.newRegexp(Zs.Op.EMPTY_MATCH)):this.push(this.collapse(e,Zs.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),0===e.length?this.push(this.newRegexp(Zs.Op.NO_MATCH)):this.push(this.collapse(e,Zs.Op.ALTERNATE))}cleanAlt(e){e.op===Zs.Op.CHAR_CLASS&&(e.runes=new Si(Array.from(e.runes)).cleanClass().toArray(),2===e.runes.length&&0===e.runes[0]&&e.runes[1]===gs.MAX_RUNE?(e.runes=new Int32Array(0),e.op=Zs.Op.ANY_CHAR):4===e.runes.length&&0===e.runes[0]&&e.runes[1]===cs.CODES["\n"]-1&&e.runes[2]===cs.CODES["\n"]+1&&e.runes[3]===gs.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=Zs.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(1===e.length)return e[0];let n=0;for(let r of e)n+=r.op===t?r.subs.length:1;let r=new Array(n).fill(null),s=0;for(let n of e)if(n.op===t){for(let e=0;e<n.subs.length;e++)r[s++]=n.subs[e];this.reuse(n)}else r[s++]=n;let i=this.newRegexp(t);if(i.subs=r,t===Zs.Op.ALTERNATE&&(i.subs=this.factor(i.subs),1===i.subs.length)){const e=i;i=i.subs[0],this.reuse(e)}return i}factor(t){if(t.length<2)return t;let n=0,r=t.length,s=0,i=null,a=0,o=0,B=0;for(let e=0;e<=r;e++){let u=null,c=0,l=0;if(e<r){let r=t[n+e];if(r.op===Zs.Op.CONCAT&&r.subs.length>0&&(r=r.subs[0]),r.op===Zs.Op.LITERAL&&(u=r.runes,c=r.runes.length,l=r.flags&Zr.FOLD_CASE),l===o){let e=0;for(;e<a&&e<c&&i[e]===u[e];)e++;if(e>0){a=e;continue}}}if(e===B);else if(e===B+1)t[s++]=t[n+B];else{const r=this.newRegexp(Zs.Op.LITERAL);r.flags=o,r.runes=i.slice(0,a);for(let r=B;r<e;r++)t[n+r]=this.removeLeadingString(t[n+r],a),this.checkLimits(t[n+r]);const u=this.collapse(t.slice(n+B,n+e),Zs.Op.ALTERNATE),c=this.newRegexp(Zs.Op.CONCAT);c.subs=[r,u],t[s++]=c}B=e,i=u,a=c,o=l}r=s,n=0,B=0,s=0;let u=null;for(let i=0;i<=r;i++){let a=null;if(!(i<r&&(a=e.leadingRegexp(t[n+i]),null!==u&&u.equals(a)&&(e.isCharClass(u)||u.op===Zs.Op.REPEAT&&u.min===u.max&&e.isCharClass(u.subs[0]))))){if(i===B);else if(i===B+1)t[s++]=t[n+B];else{const e=u;for(let e=B;e<i;e++){const r=e!==B;t[n+e]=this.removeLeadingRegexp(t[n+e],r),this.checkLimits(t[n+e])}const r=this.collapse(t.slice(n+B,n+i),Zs.Op.ALTERNATE),a=this.newRegexp(Zs.Op.CONCAT);a.subs=[e,r],t[s++]=a}B=i,u=a}}r=s,n=0,B=0,s=0;for(let i=0;i<=r;i++)if(!(i<r&&e.isCharClass(t[n+i]))){if(i===B);else if(i===B+1)t[s++]=t[n+B];else{let r=B;for(let e=B+1;e<i;e++){const s=t[n+r],i=t[n+e];(s.op<i.op||s.op===i.op&&(null!==s.runes?s.runes.length:0)<(null!==i.runes?i.runes.length:0))&&(r=e)}const a=t[n+B];t[n+B]=t[n+r],t[n+r]=a;for(let r=B+1;r<i;r++)e.mergeCharClass(t[n+B],t[n+r]),this.reuse(t[n+r]);this.cleanAlt(t[n+B]),t[s++]=t[n+B]}i<r&&(t[s++]=t[n+i]),B=i+1}r=s,n=0,B=0,s=0;for(let e=0;e<r;++e)e+1<r&&t[n+e].op===Zs.Op.EMPTY_MATCH&&t[n+e+1].op===Zs.Op.EMPTY_MATCH||(t[s++]=t[n+e]);return r=s,n=0,t.slice(n,r)}removeLeadingString(e,t){if(e.op===Zs.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===Zs.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=Zs.Op.EMPTY_MATCH,e.subs=Zs.emptySubs();break;case 2:{const t=e;e=e.subs[1],this.reuse(t);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===Zs.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),0===e.runes.length&&(e.op=Zs.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===Zs.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=Zs.Op.EMPTY_MATCH,e.subs=Zs.emptySubs();break;case 1:{const t=e;e=e.subs[0],this.reuse(t);break}}return e}return t&&this.reuse(e),this.newRegexp(Zs.Op.EMPTY_MATCH)}parseInternal(){if(0!==(this.flags&Zr.LITERAL))return e.literalRegexp(this.wholeRegexp,this.flags);let t=-1,n=-1,r=-1;const s=new Fi(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case cs.CODES["("]:if(0!==(this.flags&Zr.LOOKBEHIND)){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(0!==(this.flags&Zr.PERL_X)&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(Zs.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case cs.CODES["|"]:this.parseVerticalBar(),s.skip(1);break;case cs.CODES[")"]:this.parseRightParen(),s.skip(1);break;case cs.CODES["^"]:0!==(this.flags&Zr.ONE_LINE)?this.op(Zs.Op.BEGIN_TEXT):this.op(Zs.Op.BEGIN_LINE),s.skip(1);break;case cs.CODES.$:0!==(this.flags&Zr.ONE_LINE)?this.op(Zs.Op.END_TEXT).flags|=Zr.WAS_DOLLAR:this.op(Zs.Op.END_LINE),s.skip(1);break;case cs.CODES["."]:0!==(this.flags&Zr.DOT_NL)?this.op(Zs.Op.ANY_CHAR):this.op(Zs.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case cs.CODES["["]:this.parseClass(s);break;case cs.CODES["*"]:case cs.CODES["+"]:case cs.CODES["?"]:{i=s.pos();let e=null;switch(s.pop()){case cs.CODES["*"]:e=Zs.Op.STAR;break;case cs.CODES["+"]:e=Zs.Op.PLUS;break;case cs.CODES["?"]:e=Zs.Op.QUEST}this.repeat(e,n,r,i,s,t);break}case cs.CODES["{"]:{const a=s.pos(),o=e.parseRepeat(s);if(o<0){s.rewindTo(a),this.literal(s.pop());break}i=a,n=o>>16,r=(o&gs.MAX_BMP)<<16>>16,this.repeat(Zs.Op.REPEAT,n,r,i,s,t);break}case cs.CODES["\\"]:{const t=s.pos();if(s.skip(1),0!==(this.flags&Zr.PERL_X)&&s.more())switch(s.pop()){case cs.CODES.A:this.op(Zs.Op.BEGIN_TEXT);break e;case cs.CODES.b:this.op(Zs.Op.WORD_BOUNDARY);break e;case cs.CODES.B:this.op(Zs.Op.NO_WORD_BOUNDARY);break e;case cs.CODES.C:throw new Fs(e.ERR_INVALID_ESCAPE,"\\C");case cs.CODES.Q:{let e=s.rest();const t=e.indexOf("\\E");t>=0?(e=e.substring(0,t),s.skipString(e),s.skipString("\\E")):s.skipString(e);let n=0;for(;n<e.length;){const t=e.codePointAt(n);this.literal(t),n+=ws.charCount(t)}break e}case cs.CODES.z:this.op(Zs.Op.END_TEXT);break e;default:s.rewindTo(t)}else s.rewindTo(t);const n=this.newRegexp(Zs.Op.CHAR_CLASS);if(n.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const e=new Si;if(this.parseUnicodeClass(s,e)){n.runes=e.toArray(),this.push(n);break e}}const r=new Si;if(this.parsePerlClassEscape(s,r)){n.runes=r.toArray(),this.push(n);break e}s.rewindTo(t),this.reuse(n),this.literal(e.parseEscape(s));break}default:this.literal(s.pop())}t=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),1!==this.stack.length)throw new Fs(e.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(t){const n=t.pos(),r=t.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const n="P"===r.charAt(2)?4:3,s=r.indexOf(">");if(s<0)throw new Fs(e.ERR_INVALID_NAMED_CAPTURE,r);const i=r.substring(n,s);if(t.skipString(i),t.skip(n+1),!e.isValidCaptureName(i))throw new Fs(e.ERR_INVALID_NAMED_CAPTURE,r.substring(0,s+1));const a=this.op(Zs.Op.LEFT_PAREN);if(a.cap=++this.numCap,this.namedGroups[i])throw new Fs(e.ERR_DUPLICATE_NAMED_CAPTURE,i);return this.namedGroups[i]=this.numCap,void(a.name=i)}t.skip(2);let s=this.flags,i=1,a=!1;e:for(;t.more();){const e=t.pop();switch(e){case cs.CODES.i:s|=Zr.FOLD_CASE,a=!0;break;case cs.CODES.m:s&=-17,a=!0;break;case cs.CODES.s:s|=Zr.DOT_NL,a=!0;break;case cs.CODES.U:s|=Zr.NON_GREEDY,a=!0;break;case cs.CODES["-"]:if(i<0)break e;i=-1,s=~s,a=!1;break;case cs.CODES[":"]:case cs.CODES[")"]:if(i<0){if(!a)break e;s=~s}return e===cs.CODES[":"]&&this.op(Zs.Op.LEFT_PAREN),void(this.flags=s);default:break e}}throw new Fs(e.ERR_INVALID_PERL_OP,t.from(n))}parsePosLookBehind(){const e=this.newRegexp(Zs.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(Zs.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(Zs.Op.VERTICAL_BAR)}swapVerticalBar(){const t=this.stack.length;if(t>=3&&this.stack[t-2].op===Zs.Op.VERTICAL_BAR&&e.isCharClass(this.stack[t-1])&&e.isCharClass(this.stack[t-3])){let n=this.stack[t-1],r=this.stack[t-3];if(n.op>r.op){const e=r;r=n,n=e,this.stack[t-3]=r}return e.mergeCharClass(r,n),this.reuse(n),this.pop(),!0}if(t>=2){const e=this.stack[t-1],n=this.stack[t-2];if(n.op===Zs.Op.VERTICAL_BAR)return t>=3&&this.cleanAlt(this.stack[t-3]),this.stack[t-2]=e,this.stack[t-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Fs(e.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const t=this.pop(),n=this.pop();if(n.op!==Zs.Op.LEFT_PAREN)throw new Fs(e.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=n.flags,0!==n.lb){if(e.hasCapture(t))throw new Fs(e.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);return n.lb>0?n.op=Zs.Op.PLB:n.op=Zs.Op.NLB,n.subs=[t],void this.push(n)}0===n.cap?this.push(t):(n.op=Zs.Op.CAPTURE,n.subs=[t],this.push(n))}parsePerlClassEscape(e,t){const n=e.pos();if(0===(this.flags&Zr.PERL_X)||!e.more()||e.pop()!==cs.CODES["\\"]||!e.more())return!1;e.pop();const r=e.from(n),s=fi.has(r)?fi.get(r):null;return null!==s&&(t.appendGroup(s,0!==(this.flags&Zr.FOLD_CASE)),!0)}parseNamedClass(t,n){const r=t.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);t.skipString(i);const a=Oi.has(i)?Oi.get(i):null;if(null===a)throw new Fs(e.ERR_INVALID_CHAR_RANGE,i);return n.appendGroup(a,0!==(this.flags&Zr.FOLD_CASE)),!0}parseUnicodeClass(t,n){const r=t.pos();if(0===(this.flags&Zr.UNICODE_GROUPS)||!t.lookingAt("\\p")&&!t.lookingAt("\\P"))return!1;t.skip(1);let s,i=1,a=t.pop();if(a===cs.CODES.P&&(i=-1),!t.more())throw t.rewindTo(r),new Fs(e.ERR_INVALID_CHAR_RANGE,t.rest());if(a=t.pop(),a!==cs.CODES["{"])s=ws.runeToString(a);else{const n=t.rest(),i=n.indexOf("}");if(i<0)throw t.rewindTo(r),new Fs(e.ERR_INVALID_CHAR_RANGE,t.rest());s=n.substring(0,i),t.skipString(s),t.skip(1)}0!==s.length&&s.codePointAt(0)===cs.CODES["^"]&&(i=0-i,s=s.substring(1));const o=e.unicodeTable(s);if(null===o)throw new Fs(e.ERR_INVALID_CHAR_RANGE,t.from(r));o.sign<0&&(i=0-i);const B=o.tab,u=o.fold;if(0===(this.flags&Zr.FOLD_CASE)||null===u)n.appendTableWithSign(B,i);else{const e=(new Si).appendTable(B).appendTable(u).cleanClass().toArray();n.appendClassWithSign(Array.from(e),i)}return!0}parseClass(t){const n=t.pos();t.skip(1);const r=this.newRegexp(Zs.Op.CHAR_CLASS);r.flags=this.flags;const s=new Si;let i=1;t.more()&&t.lookingAt("^")&&(i=-1,t.skip(1),0===(this.flags&Zr.CLASS_NL)&&s.appendRange(cs.CODES["\n"],cs.CODES["\n"]));let a=!0;for(;!t.more()||t.peek()!==cs.CODES["]"]||a;){if(t.more()&&t.lookingAt("-")&&0===(this.flags&Zr.PERL_X)&&!a){const r=t.rest();if("-"===r||!r.startsWith("-]"))throw t.rewindTo(n),new Fs(e.ERR_INVALID_CHAR_RANGE,t.rest())}a=!1;const r=t.pos();if(t.lookingAt("[:")){if(this.parseNamedClass(t,s))continue;t.rewindTo(r)}if(this.parseUnicodeClass(t,s))continue;if(this.parsePerlClassEscape(t,s))continue;t.rewindTo(r);const i=e.parseClassChar(t,n);let o=i;if(t.more()&&t.lookingAt("-"))if(t.skip(1),t.more()&&t.lookingAt("]"))t.skip(-1);else if(o=e.parseClassChar(t,n),o<i)throw new Fs(e.ERR_INVALID_CHAR_RANGE,t.from(r));0===(this.flags&Zr.FOLD_CASE)?s.appendRange(i,o):s.appendFoldedRange(i,o)}t.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},Ri=class e{static initTest(t){const n=e.compile(t),r=new e(n.expr,n.prog,n.numSubexp,n.longest);return r.cond=n.cond,r.prefix=n.prefix,r.prefixUTF8=n.prefixUTF8,r.prefixComplete=n.prefixComplete,r.prefixRune=n.prefixRune,r.prefilter=n.prefilter,r.namedGroups=n.namedGroups,r}static compile(t){return e.compileImpl(t,Zr.PERL,!1)}static compilePOSIX(t){return e.compileImpl(t,Zr.POSIX,!0)}static compileImpl(t,n,r){let s=Li.parse(t,n);const i=s.maxCap(),a=s.namedGroups;s=ci.simplify(s);const o=ri.build(s),B=ui.compileRegexp(s),u=new e(t,B,i,r);u.prefilter=o.type===ni.Type.NONE?null:o;const[c,l]=B.prefix();return u.prefixComplete=c,u.prefix=l,u.prefixUTF8=ws.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=a,u}static match(t,n){return e.compile(t).match(n)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=Xs.compile(this.prog),this.prefilter=null}get dfa(){return null===this.lazyDFA&&(this.lazyDFA=new Ks(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,n,r){if((n===Zr.ANCHOR_START||n===Zr.ANCHOR_BOTH)&&0!==t)return null;let s=-1,i=-1;const a=e.prefixLength(this);if(n===Zr.UNANCHORED){const n=e.index(this,t);if(n<0)return null;s=t+n,i=s+a}else if(n===Zr.ANCHOR_BOTH){if(e.endPos()!==a)return null;if(0!==e.index(this,0))return null;s=0,i=a}else if(n===Zr.ANCHOR_START){if(0!==e.index(this,0))return null;s=0,i=a}if(s<0)return null;if(r>0){const e=new Int32Array(r).fill(-1);return e[0]=s,e[1]=i,Array.from(e)}return[]}createLookbehindState(){return this.prog.numLb>0?new Hs(this.prog):null}executeEngine(e,t,n,r,s=null){if(this.prefixComplete&&(0===r||0===this.numSubexp))return this.matchPrefixComplete(e,t,n,r);if(null!==this.prefilter&&n===Zr.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(null!==this.onepass)return Xs.execute(this,e,t,n,r);if(r>0)return 0===this.prog.numLb&&e.endPos()<=Ws.maxBitStateLen(this.prog)?Ws.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r,s);if(0===this.prog.numLb){const s=this.dfa.match(e,t,n);if(null!==s)return s?[]:null;if(e.endPos()<=Ws.maxBitStateLen(this.prog))return Ws.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r,s=null){let i=this.get();i||(i=Us.fromRE2(this)),i.init(r);const a=i.match(e,t,n,s)?i.submatches():null;return this.put(i),a}match(e){return null!==this.executeEngine(Os.fromUTF16(e),0,Zr.UNANCHORED,0)}matchWithGroup(e,t,n,r,s,i=null){return e instanceof _s||(e=ws.isByteArray(e)?bs.utf8(e):bs.utf16(e)),this.matchMachineInput(e,t,n,r,s,i)}matchMachineInput(e,t,n,r,s,i=null){if(t>n)return[!1,null];const a=e.isUTF16Encoding()?Os.fromUTF16(e.asCharSequence(),0,n):Os.fromUTF8(e.asBytes(),0,n),o=this.executeEngine(a,t,r,2*s,i);return null===o?[!1,null]:[!0,o]}matchUTF8(e){return null!==this.executeEngine(Os.fromUTF8(e),0,Zr.UNANCHORED,0)}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,s=0,i="";const a=Os.fromUTF16(e),o=this.createLookbehindState();let B=0;for(;s<=e.length;){const u=this.executeEngine(a,s,Zr.UNANCHORED,2,o);if(null===u||0===u.length)break;i+=e.substring(r,u[0]),(u[1]>r||0===u[0])&&(i+=t(e.substring(u[0],u[1])),B++),r=u[1];const c=7&a.step(s);if(s+c>u[1]?s+=c:s+1>u[1]?s++:s=u[1],B>=n)break}return i+=e.substring(r),i}pad(e){if(null===e)return null;let t=2*(1+this.numSubexp);if(e.length<t){let n=new Array(t).fill(-1);for(let t=0;t<e.length;t++)n[t]=e[t];e=n}return e}allMatches(e,t,n=e=>e){let r=[];const s=e.endPos();t<0&&(t=s+1);let i=0,a=0,o=-1;const B=this.createLookbehindState();for(;a<t&&i<=s;){const t=this.executeEngine(e,i,Zr.UNANCHORED,this.prog.numCap,B);if(null===t||0===t.length)break;let u=!0;if(t[1]===i){t[0]===o&&(u=!1);const n=e.step(i);n<0?i=s+1:i+=7&n}else i=t[1];o=t[1],u&&(r.push(n(this.pad(t))),a++)}return r}findUTF8(e){const t=this.executeEngine(Os.fromUTF8(e),0,Zr.UNANCHORED,2);return null===t?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Os.fromUTF8(e),0,Zr.UNANCHORED,2);return null===t?null:t.slice(0,2)}find(e){const t=this.executeEngine(Os.fromUTF16(e),0,Zr.UNANCHORED,2);return null===t?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Os.fromUTF16(e),0,Zr.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Os.fromUTF8(e),0,Zr.UNANCHORED,this.prog.numCap);if(null===t)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Os.fromUTF8(e),0,Zr.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Os.fromUTF16(e),0,Zr.UNANCHORED,this.prog.numCap);if(null===t)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Os.fromUTF16(e),0,Zr.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Os.fromUTF8(e),t,t=>e.slice(t[0],t[1]));return 0===n.length?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Os.fromUTF8(e),t,e=>e.slice(0,2));return 0===n.length?null:n}findAll(e,t){const n=this.allMatches(Os.fromUTF16(e),t,t=>e.substring(t[0],t[1]));return 0===n.length?null:n}findAllIndex(e,t){const n=this.allMatches(Os.fromUTF16(e),t,e=>e.slice(0,2));return 0===n.length?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Os.fromUTF8(e),t,t=>{let n=new Array(t.length/2|0).fill(null);for(let r=0;r<n.length;r++)t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n});return 0===n.length?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Os.fromUTF8(e),t);return 0===n.length?null:n}findAllSubmatch(e,t){const n=this.allMatches(Os.fromUTF16(e),t,t=>{let n=new Array(t.length/2|0).fill(null);for(let r=0;r<n.length;r++)t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n});return 0===n.length?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Os.fromUTF16(e),t);return 0===n.length?null:n}},xi=class e{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(t){let n="";if(t instanceof RegExp&&(t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t=t.source),"string"!=typeof t)return t;let r="",s=!1,i=t.length;0===i&&(r="(?:)",s=!0);let a=!1,o=0;for(;o<i;){let n=t[o];if("\\"===n){if(o+1<i)switch(n=t[o+1],n){case"\\":r+="\\\\",o+=2;continue;case"c":if(o+2<i){let e=t[o+2].charCodeAt(0);if(e>=65&&e<=90||e>=97&&e<=122){let t=e%32;r+="\\x",r+=(t>>4).toString(16).toUpperCase(),r+=(15&t).toString(16).toUpperCase(),o+=3,s=!0;continue}}r+="c",o+=2,s=!0;continue;case"u":if(o+2<i)if("{"===t[o+2]){let n=o+3,a=!1,B=!1;for(;n<i;){const r=t[n];if("}"===r){B=!0;break}if(!e.isHexadecimal(r))break;a=!0,n++}if(B&&a){r+="\\x",o+=2,s=!0;continue}}else if(o+5<i){let n=!0;for(let r=0;r<4;r++)if(!e.isHexadecimal(t[o+2+r])){n=!1;break}if(n){r+="\\x{"+t.substring(o+2,o+6)+"}",o+=6,s=!0;continue}}r+="u",o+=2,s=!0;continue;case"x":{let n=!1;if(o+2<i&&"{"===t[o+2]){let r=o+3,s=!1,a=!1;for(;r<i;){const n=t[r];if("}"===n){a=!0;break}if(!e.isHexadecimal(n))break;s=!0,r++}a&&s&&(n=!0)}else o+3<i&&e.isHexadecimal(t[o+2])&&e.isHexadecimal(t[o+3])&&(n=!0);n?(r+="\\x",o+=2):(r+="x",o+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+n,o+=2;continue;default:{let e=t.codePointAt(o+1);if(e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122){let n=ws.charCount(e);r+=t.substring(o+1,o+1+n),o+=n+1,s=!0}else{r+="\\";let n=ws.charCount(e);r+=t.substring(o+1,o+1+n),o+=n+1}continue}}}else{if("/"===n){r+="\\/",o+=1,s=!0;continue}if("["===n){if(!a&&"]"===t[o+1]){r+="[^\\x00-\\x{10FFFF}]",o+=2,s=!0;continue}if(!a&&"^"===t[o+1]&&"]"===t[o+2]){r+="[\\x00-\\x{10FFFF}]",o+=3,s=!0;continue}a=!0}else if("]"===n)a=!1;else if(!a&&"("===n&&o+2<i&&"?"===t[o+1]&&"<"===t[o+2]&&o+3<i&&!"=!>)".includes(t[o+3])){r+="(?P<",o+=3,s=!0;continue}}let B=t.codePointAt(o),u=ws.charCount(B);r+=t.substring(o,o+u),o+=u}const B=s?r:t;return n.length>0?`(?${n})${B}`:B}};const ki=(e,t)=>{const n=e.matchArray();return n.index=e.start(0),n.input=t,n.groups=e.namedGroupsObject(),n};var Pi=class e{static CASE_INSENSITIVE=es;static DOTALL=ts;static MULTILINE=ns;static DISABLE_UNICODE_GROUPS=rs;static LONGEST_MATCH=ss;static LOOKBEHINDS=is;static quote(e){return ws.quoteMeta(e)}static quoteReplacement(e,t=!1){return Ps.quoteReplacement(e,t)}static translateRegExp(e){return xi.translate(e)}static compile(t,n=0){let r=t;if(0!==(n&e.CASE_INSENSITIVE)&&(r=`(?i)${r}`),0!==(n&e.DOTALL)&&(r=`(?s)${r}`),0!==(n&e.MULTILINE)&&(r=`(?m)${r}`),-544&n)throw new xs("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=Zr.PERL;0!==(n&e.DISABLE_UNICODE_GROUPS)&&(s&=-129),0!==(n&e.LOOKBEHINDS)&&(s|=Zr.LOOKBEHIND);const i=new e(t,n);return i.re2Input=Ri.compileImpl(r,s,0!==(n&e.LONGEST_MATCH)),i}static matches(t,n){return e.compile(t).testExact(n)}static initTest(t,n,r){if(null==t)throw new Error("pattern is null");if(null==r)throw new Error("re2 is null");const s=new e(t,n);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return ws.isByteArray(e)&&(e=bs.utf8(e)),new Ps(this,e)}test(e){return ws.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=ws.isByteArray(e)?Os.fromUTF8(e):Os.fromUTF16(e);return null!==this.re2Input.executeEngine(t,0,Zr.ANCHOR_BOTH,0)}exec(e){const t=this.matcher(e);return t.find()?ki(t,e):null}split(e,t=0){const n=this.matcher(e),r=[];let s=0,i=0;for(;n.find();)if(0!==i||0!==n.end()){if(t>0&&r.length===t-1)break;if(i===n.start()){if(0===t){s+=1,i=n.end();continue}}else for(;s>0;)r.push(""),s-=1;r.push(n.substring(i,n.start())),i=n.end()}else i=n.end();if(0===t&&i!==n.inputLength()){for(;s>0;)r.push(""),s-=1;r.push(n.substring(i,n.inputLength()))}return 0===t&&(0!==r.length||i===n.inputLength()&&i>0)||r.push(n.substring(i,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield ki(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e||null!==e&&this.constructor===e.constructor&&(this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi="13.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gi=new F("@firebase/firestore");function Hi(){return Gi.logLevel}function Ui(e,...t){if(Gi.logLevel<=T.DEBUG){const n=t.map(ji);Gi.debug(`Firestore (${Mi}): ${e}`,...n)}}function Vi(e,...t){if(Gi.logLevel<=T.ERROR){const n=t.map(ji);Gi.error(`Firestore (${Mi}): ${e}`,...n)}}function Ji(e,...t){if(Gi.logLevel<=T.WARN){const n=t.map(ji);Gi.warn(`Firestore (${Mi}): ${e}`,...n)}}function ji(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Ki(e,r,n)}function Ki(e,t,n){let r=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw Vi(r),new Error(r)}function zi(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||Ki(t,s,r)}function Qi(e,t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Wi(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function $i(e,t){return e<t?-1:e>t?1:0}function Xi(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return ta(n)===ta(s)?$i(n,s):ta(n)?1:-1}return $i(e.length,t.length)}const Zi=55296,ea=57343;function ta(e){const t=e.charCodeAt(0);return t>=Zi&&t<=ea}function na(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.comparator=e,this.root=t||ia.EMPTY}insert(e,t){return new ra(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ia.BLACK,null,null))}remove(e){return new ra(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ia.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ia{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:ia.RED,this.left=null!=r?r:ia.EMPTY,this.right=null!=s?s:ia.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new ia(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ia.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ia.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ia.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ia.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw qi(43730,{key:this.key,value:this.value});if(this.right.isRed())throw qi(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw qi(27949);return e+(this.isRed()?0:1)}}ia.EMPTY=null,ia.RED=!0,ia.BLACK=!1,ia.EMPTY=new class{constructor(){this.size=0}get key(){throw qi(57766)}get value(){throw qi(16141)}get color(){throw qi(16727)}get left(){throw qi(29726)}get right(){throw qi(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new ia(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa{constructor(e){this.comparator=e,this.data=new ra(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oa(this.data.getIterator())}getIteratorFrom(e){return new oa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof aa))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new aa(this.comparator);return t.data=e,t}}class oa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ua extends C{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="__name__";class la{constructor(e,t,n){void 0===t?t=0:t>e.length&&qi(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&qi(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===la.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof la?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=la.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return $i(e.length,t.length)}static compareSegments(e,t){const n=la.isNumericId(e),r=la.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?la.extractNumericId(e).compare(la.extractNumericId(t)):Xi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hr.fromString(e.substring(4,e.length-2))}}class ha extends la{construct(e,t,n){return new ha(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ua(Ba.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ha(t)}static emptyPath(){return new ha([])}}const Ca=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let da=class e extends la{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(e){return Ca.test(e)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ca}static keyField(){return new e([ca])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(0===r.length)throw new ua(Ba.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new ua(Ba.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ua(Ba.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=e,s+=2}else"`"===e?(a=!a,s++):"."!==e||a?(r+=e,s++):(i(),s++)}if(i(),a)throw new ua(Ba.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.fields=e,e.sort(da.comparator)}static empty(){return new fa([])}unionWith(e){let t=new aa(da.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new fa(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return na(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ga(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ma(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.path=e}static fromPath(e){return new Ea(ha.fromString(e))}static fromName(e){return new Ea(ha.fromString(e).popFirst(5))}static empty(){return new Ea(ha.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ha.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ha.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ea(new ha(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(e,t,n){if(!n)throw new ua(Ba.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function wa(e){if(!Ea.isDocumentKey(e))throw new ua(Ba.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ya(e){if(Ea.isDocumentKey(e))throw new ua(Ba.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _a(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Ia(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":qi(12329,{type:typeof e})}function va(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ua(Ba.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ia(e);throw new ua(Ba.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ba(e,t){const n={typeString:e};return t&&(n.value=t),n}function Ta(e,t){if(!_a(e))throw new ua(Ba.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0,a=t[r].optional;if(!(r in e)){if(a)continue;n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ua(Ba.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=-62135596800,Na=1e6;class Oa{static now(){return Oa.fromMillis(Date.now())}static fromDate(e){return Oa.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Na);return new Oa(t,n)}static fromInstant(e){if(!e||"bigint"!=typeof e.t)throw new ua(Ba.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Oa._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;0n===r?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new Oa(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ua(Ba.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ua(Ba.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Aa)throw new ua(Ba.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ua(Ba.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Na}toInstant(){if("undefined"==typeof Temporal||!Temporal.Instant)throw new ua(Ba.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?$i(this.nanoseconds,e.nanoseconds):$i(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oa._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ta(e,Oa._jsonSchema))return new Oa(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Aa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oa._jsonSchemaVersion="firestore/timestamp/1.0",Oa._jsonSchema={type:ba("string",Oa._jsonSchemaVersion),seconds:ba("number"),nanoseconds:ba("number")};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Sa("Invalid base64 string: "+e):e}}(e);return new Fa(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fa(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $i(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fa.EMPTY_BYTE_STRING=new Fa("");const La=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ra(e){if(zi(!!e,39018),"string"==typeof e){let t=0;const n=La.exec(e);if(zi(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xa(e.seconds),nanos:xa(e.nanos)}}function xa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ka(e){return"string"==typeof e?Fa.fromBase64String(e):Fa.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="server_timestamp",Ma="__type__",Ga="__previous_value__",Ha="__local_write_time__";function Ua(e){const t=(e?.mapValue?.fields||{})[Ma]?.stringValue;return t===Pa}function Va(e){const t=e.mapValue.fields[Ga];return Ua(t)?Va(t):t}function Ja(e){const t=Ra(e.mapValue.fields[Ha].timestampValue);return new Oa(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,n,r,s,i,a,o,B,u,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=B,this.isUsingEmulator=u,this.apiKey=c,this._customHeaders=l,this.grpcFlowControlWindow=h}}const qa="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||qa}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===qa}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){this.exponent=0,this.i=0n,this.o=0n,this.u=new Array(4).fill(0n),this.l=new Array(6).fill(0n),this.h=new Array(6).fill(0n),this.T=new Array(6).fill(0n),this.P=new Array(12).fill(0n)}static I(e,t){let n=new za;return n.parse(e,t),n}parse(e,t){t+=e.length-1,this.exponent=0,this.i=0n,this.o=0n;let n=this.T,r=this.R(e,n);if(0==r&&this.isEmpty(n))return;if((t+=r)<za.A)return;if(t>za.V)return void(this.exponent=Number(za.m));let s=this.p(t,n);this.S(t,s,n)}R(e,t){for(let e=0;e<6;e++)t[e]=0n;let n=0;for(;n<e.length&&0==e[n];)n+=1;if(n==e.length)return 0;let r=-n;if(e.length-n>za.v){let t=e[za.v]>=5,s=new Array(za.v).fill(0);for(let t=0;t<za.v;t++)s[t]=e[t+n];t&&(r+=this.D(s)),e=s,n=0}for(let r=e.length-1;r>=n;r--)t[0]|=BigInt(e[r])<<32n,this.C(t);return r}C(e){let t=e.length;for(let n=0;n<t;n++){let r=e[n]%10n;e[n]=e[n]/10n,n+1<t&&(e[n+1]+=r<<32n)}}isEmpty(e){for(let t=0;t<e.length;t++)if(0n!=e[t])return!1;return!0}D(e){for(let t=e.length-1;t>=0;t--){if(9!=e[t])return e[t]=e[t]+1,0;e[t]=0}return e[0]=1,1}p(e,t){let n=t[0]<<31n|t[1]>>1n,r=Number(n)/za.F;return Math.floor(Number(e)*za.O+this.log2(r))}log2(e){return za.M*Math.log(e)}S(e,t,n){let r=this.u;this.N(-t,r);let s=this.P;this.B(n,r,s),this.L(s),BigInt(r[0])!=BigInt(-e)&&this.L(s),t+=this.$(s),(t+=za.U)<=0||(t+=this.k(s),BigInt(t)>=za.m?this.exponent=Number(za.m):(this.exponent=Number(t),this.i=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.o=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}N(e,t){if(0==e)return void this.q(za.K[0],t);let n=za.K;e<0&&(e=-e,n=za.W);let r=za.G,s=32,i=!0;for(;e>0;)e>=r&&(i?(this.q(n[s],t),i=!1):this.j(t,n[s],t),e-=r),s-=1,r*=.5}q(e,t){for(let n=0;n<t.length;n++)t[n]=e[n]}j(e,t,n){this.H(e,t,this.P);let r=this.J(this.P);this.Y(this.P,n),n[0]=e[0]+t[0]+BigInt(r)}H(e,t,n){for(let e=0;e<n.length;e++)n[e]=0n;this.Z(e,this.l),this.Z(t,this.h);for(let e=5;e>=0;e--)for(let t=5;t>=0;t--){let r=this.l[e]*this.h[t];n[t+e+1]=n[t+e+1]+(r&za.X)&0xffffffffffffffffn,n[t+e]=n[t+e]+(r>>32n)&0xffffffffffffffffn}for(let e=11;e>=1;e--)n[e-1]=n[e-1]+(n[e]>>32n)&0xffffffffffffffffn,n[e]&=za.X}J(e){let t=0;for(;this.ee(e);)this.L(e),t-=1;return t}ee(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let t=1;t<e.length;t++){if(e[t]<0x99999999n)return!0;if(e[t]>0x99999999n)return!1}return!1}B(e,t,n){for(let e=0;e<n.length;e++)n[e]=0n;let r=this.h;this.Z(t,r);let s=e.length;for(let t=s-1;t>=0;t--)for(let i=s-1;i>=0;i--){let s=e[t]*r[i];n[i+t+1]=n[i+t+1]+(s&za.X)&0xffffffffffffffffn,n[i+t]=n[i+t]+(s>>32n)&0xffffffffffffffffn}for(let e=11;e>=1;e--)n[e-1]=n[e-1]+(n[e]>>32n)&0xffffffffffffffffn,n[e]&=za.X}L(e){let t=e.length-1;e[0]&=za.X,e[t]*=10n;for(let n=t-1;n>=0;n--)e[n]=10n*e[n]+(e[n+1]>>32n)&0xffffffffffffffffn,e[n+1]&=za.X}$(e){let t=31-za.te(e[0]);return 0!=t&&this.ne(e,t),t}k(e){return this.re(e,5,100n),this.re(e,4,0x80000000n),0n!=(e[0]&za.ie<<1n)?(this.ne(e,1),1):0}Y(e,t){t[1]=(e[0]<<32n)+e[1],t[2]=(e[2]<<32n)+e[3],t[3]=(e[4]<<32n)+e[5]}Z(e,t){t[0]=e[1]>>32n,t[1]=e[1]&za.X,t[2]=e[2]>>32n,t[3]=e[2]&za.X,t[4]=e[3]>>32n,t[5]=e[3]&za.X}ne(e,t){let n=e.length-1,r=BigInt(32-Math.abs(t));if(t>0){let s=BigInt(t);for(let t=n+1-1;t>=1;t--)e[t]=e[t]>>s|e[t-1]<<r&za.X;e[0]=e[0]>>s}else if(t<0){let s=BigInt(-t);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>r);for(let t=1;t<n;t++)e[t]=0xffffffffffffffffn&(e[t]<<s&za.X|e[t+1]>>r);e[n]=e[n]<<s&za.X}}re(e,t,n){let r=t;e[r]=e[r]+n&0xffffffffffffffffn;for(let t=r+1-1;t>=1&&0n!=(e[t]&za.ie);t--)e[t]&=za.X,e[t-1]+=1n}static te(e){let t=Number(e>>32n);return 0==t?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(t)}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qa,Wa,Ya,$a,Xa,Za;za.v=59,za.V=646456993,za.A=-646457032,za.F=0xccccccccccccd00,za.se=0x8000000000000000n,za.G=2147483648,za.X=0x00000000ffffffffn,za.ie=0xffffffff00000000n,za.O=Math.log(10)/Math.log(2),za.M=1/Math.log(2),za.U=2147483647,za.m=0xffffffffn,za.K=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],za.W=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class eo{constructor(e,t,n,r){this.negative=e,this._e=t,this.i=n,this.o=r}exponent(){return this._e-za.U}oe(){return 0===this._e&&0n===this.i&&0n===this.o}ae(){return this._e===Jr(eo,Qa,"f",Wa)&&0n===this.i&&0n===this.o}isNaN(){return this._e===Jr(eo,Qa,"f",Wa)&&!(0n===this.i&&0n===this.o)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let t,n;if(this.negative){if(!e.negative)return-1;t=1,n=-1}else{if(e.negative)return 1;t=-1,n=1}return this._e<e._e?t:this._e>e._e?n:this.i<e.i?t:this.i>e.i?n:this.o<e.o?t:this.o>e.o?n:0}debug(){return(this.negative?"+":"-")+Jr(eo,Qa,"m",Ya).call(eo,this.i)+Jr(eo,Qa,"m",Ya).call(eo,this.o)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return eo.NaN;if(!isFinite(e))return e<0?eo.ue:eo.ce;if(0===e)return Math.sign(1/e)>0?eo.le:eo.Ee;const t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e);const n=t.getBigUint64(0);let r=BigInt.asUintN(64,n<<12n),s=2047&Number(n>>52n);if(0===s){const e=za.te(r);r=e<63?r<<BigInt(e+1):0n,s=-e}return new eo(e<0,Jr(eo,Qa,"m",Za).call(eo,s-1023),r,0n)}static fromString(e){if("NaN"===e)return eo.NaN;if("-Infinity"===e)return eo.ue;if("Infinity"===e||"+Infinity"===e)return eo.ce;const t=new Array(e.length).fill(0);let n=0,r=0,s=0,i=!1;for("-"===e[n]?(i=!0,n++):"+"===e[n]&&n++;Jr(eo,Qa,"m",$a).call(eo,e,n);)t[r++]=Jr(eo,Qa,"m",Xa).call(eo,e,n++);if("."===e[n]){const i=++n;for(;Jr(eo,Qa,"m",$a).call(eo,e,n);)t[r++]=Jr(eo,Qa,"m",Xa).call(eo,e,n++);s=i-n}if("e"===e[n]||"E"===e[n]){let t=0;n++;let r=1;"-"===e[n]?(r=-1,n++):"+"===e[n]&&n++;const i=n;for(;Jr(eo,Qa,"m",$a).call(eo,e,n);)if(t=10*t+Jr(eo,Qa,"m",Xa).call(eo,e,n++),n-i>9)throw new Error("Exponent too large "+e);if(n===i)throw new Error("Invalid number "+e);s+=t*r}if(0===r||n!==e.length)throw new Error("Invalid number "+e);const a=za.I(t.slice(0,r),s);return new eo(i,a.exponent,a.i,a.o)}}Qa=eo,Ya=function(e){return e.toString(16).padStart(16,"0")},$a=function(e,t){const n=e.codePointAt(t);return void 0!==n&&n>=48&&n<=57},Xa=function(e,t){return e.codePointAt(t)-48},Za=function(e){return e+za.U},Wa={value:Number(za.m)},eo.le=new eo(!1,0,0n,0n),eo.Ee=new eo(!0,0,0n,0n),eo.NaN=new eo(!1,Jr(eo,Qa,"f",Wa),1n<<63n,0n),eo.ue=new eo(!0,Jr(eo,Qa,"f",Wa),0n,0n),eo.ce=new eo(!1,Jr(eo,Qa,"f",Wa),0n,0n),new eo(!0,Jr(eo,Qa,"m",Za).call(eo,63),0n,0n),new eo(!1,Jr(eo,Qa,"m",Za).call(eo,0),0n,0n),new eo(!0,Jr(eo,Qa,"m",Za).call(eo,0),0n,0n);function to(e){return null==e}function no(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro="__type__",so="__vector__",io="value",ao="server_timestamp",oo="__min__",Bo="__max__",uo="__regex__",co="pattern",lo="options",ho="__oid__",Co="__int__",fo="__decimal128__",po="__request_timestamp__",go="seconds",mo="increment",Eo="__binary__",Do={nullValue:"NULL_VALUE"},wo={};var yo,_o;(_o=yo||(yo={})).he="regexValue",_o.Te="bsonObjectIdValue",_o.Pe="int32Value",_o.Ie="decimal128Value",_o.Re="bsonTimestampValue",_o.Ae="bsonBinaryValue",_o.Ve="minKeyValue",_o.de="maxKeyValue",_o.fe="maxValue",_o.me="vectorValue",_o.pe="serverTimestampValue",_o.ge="regularMapValue";const Io={[so]:yo.me,[Bo]:yo.fe,[ao]:yo.pe},vo={[uo]:yo.he,[ho]:yo.Te,[Co]:yo.Pe,[fo]:yo.Ie,[po]:yo.Re,[Eo]:yo.Ae,[oo]:yo.Ve,[Bo]:yo.de},bo=new Set(Object.values(vo)),To={booleanValue:!0},Ao={booleanValue:!1};function No(e){if("nullValue"in e)return 0;if("booleanValue"in e)return 2;if("integerValue"in e||"doubleValue"in e)return 3;if("timestampValue"in e)return 4;if("stringValue"in e)return 7;if("bytesValue"in e)return 8;if("referenceValue"in e)return 9;if("geoPointValue"in e)return 11;if("arrayValue"in e)return 13;if(!("mapValue"in e))return qi(28295,{value:e});switch(iB(e)){case yo.pe:return 6;case yo.fe:return 9007199254740991;case yo.me:return 14;case yo.he:return 12;case yo.Te:return 10;case yo.Pe:case yo.Ie:return 3;case yo.Re:return 5;case yo.Ae:return 8;case yo.Ve:return 1;case yo.de:return 16;default:return 15}}function Oo(e,t,n){if(e===t)return!0;const r=No(e);if(r!==No(t))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return e.booleanValue===t.booleanValue;case 6:return Ja(e).isEqual(Ja(t));case 4:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ra(e.timestampValue),r=Ra(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 7:return e.stringValue===t.stringValue;case 8:return function(e,t){return 0===Vo(e,t)}(e,t);case 9:return e.referenceValue===t.referenceValue;case 11:return function(e,t){return xa(e.geoPointValue.latitude)===xa(t.geoPointValue.latitude)&&xa(e.geoPointValue.longitude)===xa(t.geoPointValue.longitude)}(e,t);case 3:return function(e,t,n){if(Xo(e)&&Xo(t))return 0===ko(e,t);if("integerValue"in e&&"integerValue"in t||Zo(e)&&Zo(t))return Lo(e)===Lo(t);let r,s;if("doubleValue"in e&&"doubleValue"in t)r=xa(e.doubleValue),s=xa(t.doubleValue);else{if(!n?.ye)return!1;r=xa(e.integerValue??e.doubleValue),s=xa(t.integerValue??t.doubleValue)}return r===s?!!n?.we||no(r)===no(s):!(void 0!==n&&!n.be)&&isNaN(r)&&isNaN(s)}(e,t,n);case 13:return na(e.arrayValue.values||[],t.arrayValue.values||[],(e,t)=>Oo(e,t,n));case 14:case 15:return function(e,t,n){const r=e.mapValue.fields||{},s=t.mapValue.fields||{};if(pa(r)!==pa(s))return!1;for(const e in r)if(r.hasOwnProperty(e)&&(void 0===s[e]||!Oo(r[e],s[e],n)))return!1;return!0}(e,t,n);case 5:return 0===Ho(e,t);case 12:return 0===Jo(e,t);case 10:return 0===jo(e,t);default:return qi(52216,{left:e})}}function So(e,t){return void 0!==(e.values||[]).find(e=>Oo(e,t))}function Fo(e,t){if(e===t)return 0;const n=No(e),r=No(t);if(n!==r)return $i(n,r);switch(n){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return $i(e.booleanValue,t.booleanValue);case 3:return xo(e,t);case 4:return Mo(e.timestampValue,t.timestampValue);case 6:return Mo(Ja(e),Ja(t));case 7:return Xi(e.stringValue,t.stringValue);case 8:return Vo(e,t);case 9:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=$i(n[e],r[e]);if(0!==t)return t}return $i(n.length,r.length)}(e.referenceValue,t.referenceValue);case 11:return function(e,t){const n=$i(xa(e.latitude),xa(t.latitude));return 0!==n?n:$i(xa(e.longitude),xa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 13:return Go(e.arrayValue,t.arrayValue);case 14:return function(e,t){const n=e.fields||{},r=t.fields||{},s=n[io]?.arrayValue,i=r[io]?.arrayValue,a=$i(s?.values?.length||0,i?.values?.length||0);return 0!==a?a:Go(s,i)}(e.mapValue,t.mapValue);case 15:return function(e,t){if(e===wo&&t===wo)return 0;if(e===wo)return 1;if(t===wo)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=Xi(r[e],i[e]);if(0!==t)return t;const a=Fo(n[r[e]],s[i[e]]);if(0!==a)return a}return $i(r.length,i.length)}(e.mapValue,t.mapValue);case 5:return Ho(e,t);case 12:return Jo(e,t);case 10:return jo(e,t);default:throw qi(23264,{Se:n})}}function Lo(e){let t;return t=Zo(e)?e.mapValue.fields[Co].integerValue:e.integerValue||e.doubleValue,xa(t)}function Ro(e){return e.mapValue.fields[fo].stringValue}function xo(e,t){if(Xo(e)||Xo(t))return ko(e,t);const n=Lo(e),r=Lo(t);return isNaN(n)?isNaN(r)?0:-1:isNaN(r)?1:$i(n,r)}function ko(e,t){const n=Po(e),r=Po(t);return n.oe()&&r.oe()?0:n.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:n.compareTo(r)}function Po(e){return Xo(e)?eo.fromString(Ro(e)):eo.fromNumber(Lo(e))}function Mo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return $i(e,t);const n=Ra(e),r=Ra(t),s=$i(n.seconds,r.seconds);return 0!==s?s:$i(n.nanos,r.nanos)}function Go(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Fo(n[e],r[e]);if(void 0!==t&&0!==t)return t}return $i(n.length,r.length)}function Ho(e,t){const n=e.mapValue.fields?.[po].mapValue?.fields?.[go],r=t.mapValue.fields?.[po].mapValue?.fields?.[go],s=e.mapValue.fields?.[po].mapValue?.fields?.[mo],i=t.mapValue.fields?.[po].mapValue?.fields?.[mo],a=xo(n,r);return 0!==a?a:xo(s,i)}function Uo(e){if("bytesValue"in e)return{subtype:0,bytes:ka(e.bytesValue)};const t=e.mapValue?.fields,n=t?.[Eo],r=n?.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");const s=ka(r).toUint8Array();if(0===s.length)throw new Error("Received empty bytesValue for BsonBinaryData");const i=s[0],a=s.slice(1);return{subtype:i,bytes:Fa.fromUint8Array(a)}}function Vo(e,t){const n=Uo(e),r=Uo(t);return n.subtype!==r.subtype?n.subtype<r.subtype?-1:1:n.bytes.compareTo(r.bytes)}function Jo(e,t){const n=e.mapValue.fields,r=n?.[uo]?.mapValue?.fields?.[co]?.stringValue??"",s=n?.[uo]?.mapValue?.fields?.[lo]?.stringValue??"",i=t.mapValue.fields,a=i?.[uo]?.mapValue?.fields?.[co]?.stringValue??"",o=i?.[uo]?.mapValue?.fields?.[lo]?.stringValue??"",B=Xi(r,a);return 0!==B?B:$i(s,o)}function jo(e,t){return Xi(e.mapValue.fields?.[ho]?.stringValue??"",t.mapValue.fields?.[ho]?.stringValue??"")}function qo(e){return Ko(e)}function Ko(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ra(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return ka(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ea.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ko(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Ko(e.fields[s])}`;return n+"}"}(e.mapValue):qi(61005,{value:e})}function zo(e){switch(No(e)){case 0:case 2:return 4;case 3:return Xo(e)?16:8;case 4:case 11:return 16;case 6:const t=Va(e);return t?16+zo(t):16;case 7:return 2*e.stringValue.length;case 8:return"bytesValue"in e?ka(e.bytesValue).approximateByteSize():Qo(e.mapValue);case 9:return e.referenceValue.length;case 13:return function(e){return(e.values||[]).reduce((e,t)=>e+zo(t),0)}(e.arrayValue);case 14:case 15:case 12:case 10:case 5:case 1:case 16:return Qo(e.mapValue);default:throw qi(13486,{value:e})}}function Qo(e){let t=0;return ga(e.fields,(e,n)=>{t+=e.length+zo(n)}),t}function Wo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Yo(e){return!!e&&"integerValue"in e}function $o(e){return!!e&&"doubleValue"in e}function Xo(e){if(!e.mapValue?.fields)return!1;const t=e.mapValue.fields;return 1===pa(t)&&t[fo]&&!!t[fo].stringValue}function Zo(e){if(!e.mapValue?.fields)return!1;const t=e.mapValue.fields;return 1===pa(t)&&void 0!==t[Co]?.integerValue}function eB(e){return Yo(e)||$o(e)||!!e&&Zo(e)||!!e&&Xo(e)}function tB(e){return!!e&&"arrayValue"in e}function nB(e){return!!e&&"nullValue"in e}function rB(e){return!(!$o(e)||!isNaN(Number(e.doubleValue)))||!(!Xo(e)||"NaN"!==Ro(e))}function sB(e){return!!e&&"mapValue"in e}function iB(e){if(!e.mapValue?.fields)return yo.ge;const t=e.mapValue.fields,n=t[ro]?.stringValue;if(n&&Io[n])return Io[n];if(1===pa(t)){const e=Object.keys(t);return vo[e[0]]??yo.ge}return yo.ge}function aB(e){const t=(e?.mapValue?.fields||{})[ro]?.stringValue;return t===so}function oB(e){return(e?.mapValue?.fields||{})[io]?.arrayValue}function BB(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return ga(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=BB(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=BB(e.arrayValue.values[n]);return t}return{...e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e){this.value=e}static empty(){return new uB({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!sB(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=BB(t)}setAll(e){let t=da.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=BB(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());sB(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];sB(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ga(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new uB(BB(this.value))}}function cB(e){const t=[];return ga(e.fields,(e,n)=>{const r=new da([e]);if(sB(n)&&!function(e){return bo.has(iB(e))}(n)){const e=cB(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new fa(t)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function lB(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(t)?"-0":t}}function hB(e){return{integerValue:""+e}}function CB(e,t,n){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!no(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?hB(t):lB(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(){this._=void 0}}function fB(e,t,n){return e instanceof mB?function(e,t){const n={fields:{[Ma]:{stringValue:Pa},[Ha]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ua(t)&&(t=Va(t)),t&&(n.fields[Ga]=t),{mapValue:n}}(n,t):e instanceof EB?DB(e,t):e instanceof wB?yB(e,t):e instanceof IB?function(e,t){const n=gB(e,t),r=TB(n)+TB(e.xe);return Xo(n)||Xo(e.xe)?{mapValue:{fields:{[fo]:{stringValue:r.toString()}}}}:Zo(n)?$o(e.xe)?{doubleValue:r}:Yo(e.xe)?{integerValue:r.toString()}:{mapValue:{fields:{[Co]:hB(r)}}}:Yo(n)&&(Yo(e.xe)||Zo(e.xe))?hB(r):lB(e.serializer,r)}(e,t):e instanceof vB?function(e,t){return eB(t)?rB(e.xe)?e.xe:rB(t)?t:xo(e.xe,t)<0?e.xe:t:e.xe}(e,t):e instanceof bB?function(e,t){return eB(t)?rB(e.xe)?e.xe:rB(t)?t:xo(e.xe,t)>0?e.xe:t:e.xe}(e,t):void 0}function pB(e,t,n){return e instanceof EB?DB(e,t):e instanceof wB?yB(e,t):n}function gB(e,t){return e instanceof IB?eB(t)?t:{integerValue:0}:null}class mB extends dB{}class EB extends dB{constructor(e){super(),this.elements=e}}function DB(e,t){const n=AB(t);for(const t of e.elements)n.some(e=>Oo(e,t))||n.push(t);return{arrayValue:{values:n}}}class wB extends dB{constructor(e){super(),this.elements=e}}function yB(e,t){let n=AB(t);for(const t of e.elements)n=n.filter(e=>!Oo(e,t));return{arrayValue:{values:n}}}class _B extends dB{constructor(e,t){super(),this.serializer=e,this.xe=t}}class IB extends _B{}class vB extends _B{}class bB extends _B{}function TB(e){return Yo(e)?xa(e.integerValue):$o(e)?xa(e.doubleValue):Zo(e)?xa(e.mapValue.fields[Co].integerValue):Xo(e)?parseFloat(e.mapValue.fields[fo].stringValue):0}function AB(e){return tB(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class NB{constructor(e,t){this.version=e,this.transformResults=t}}class OB{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new OB}static exists(e){return new OB(void 0,e)}static updateTime(e){return new OB(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function SB(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class FB{}function LB(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new JB(e.key,OB.none()):new MB(e.key,e.data,OB.none());{const n=e.data,r=uB.empty();let s=new aa(da.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new GB(e.key,r,new fa(s.toArray()),OB.none())}}function RB(e,t,n){e instanceof MB?function(e,t,n){const r=e.value.clone(),s=UB(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof GB?function(e,t,n){if(!SB(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=UB(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(HB(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function xB(e,t,n,r){return e instanceof MB?function(e,t,n,r){if(!SB(e.precondition,t))return n;const s=e.value.clone(),i=VB(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof GB?function(e,t,n,r){if(!SB(e.precondition,t))return n;const s=VB(e.fieldTransforms,r,t),i=t.data;return i.setAll(HB(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return SB(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function kB(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=gB(r.transform,e||null);null!=s&&(null===n&&(n=uB.empty()),n.set(r.field,s))}return n||null}function PB(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&na(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof EB&&t instanceof EB||e instanceof wB&&t instanceof wB?na(e.elements,t.elements,Oo):e instanceof IB&&t instanceof IB||e instanceof vB&&t instanceof vB||e instanceof bB&&t instanceof bB?Oo(e.xe,t.xe):e instanceof mB&&t instanceof mB}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class MB extends FB{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class GB extends FB{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HB(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function UB(e,t,n){const r=new Map;zi(e.length===n.length,32656,{ve:n.length,De:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,o=t.data.field(i.field);r.set(i.field,pB(a,o,n[s]))}return r}function VB(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,fB(e,i,t))}return r}class JB extends FB{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jB extends FB{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qB{constructor(e,t){this.position=e,this.inclusive=t}}function KB(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(r=i.field.isKeyField()?Ea.comparator(Ea.fromName(a.referenceValue),n.key):Fo(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function zB(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Oo(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{}class WB extends QB{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new nu(e,t,n):"array-contains"===t?new au(e,n):"in"===t?new ou(e,n):"not-in"===t?new Bu(e,n):"array-contains-any"===t?new uu(e,n):new WB(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ru(e,n):new su(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Fo(t,this.value)):null!==t&&No(this.value)===No(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return qi(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class YB extends QB{constructor(e,t){super(),this.filters=e,this.op=t,this.Ce=null}static create(e,t){return new YB(e,t)}matches(e){return $B(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Ce||(this.Ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ce}getFilters(){return Object.assign([],this.filters)}}function $B(e){return"and"===e.op}function XB(e){return function(e){for(const t of e.filters)if(t instanceof YB)return!1;return!0}(e)&&$B(e)}function ZB(e){if(e instanceof WB)return e.field.canonicalString()+e.op.toString()+qo(e.value);if(XB(e))return e.filters.map(e=>ZB(e)).join(",");{const t=e.filters.map(e=>ZB(e)).join(",");return`${e.op}(${t})`}}function eu(e,t){return e instanceof WB?function(e,t){return t instanceof WB&&e.op===t.op&&e.field.isEqual(t.field)&&Oo(e.value,t.value)}(e,t):e instanceof YB?function(e,t){return t instanceof YB&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&eu(n,t.filters[r]),!0)}(e,t):void qi(19439)}function tu(e){return e instanceof WB?function(e){return`${e.field.canonicalString()} ${e.op} ${qo(e.value)}`}(e):e instanceof YB?function(e){return e.op.toString()+" {"+e.getFilters().map(tu).join(" ,")+"}"}(e):"Filter"}class nu extends WB{constructor(e,t,n){super(e,t,n),this.key=Ea.fromName(n.referenceValue)}matches(e){const t=Ea.comparator(e.key,this.key);return this.matchesComparison(t)}}class ru extends WB{constructor(e,t){super(e,"in",t),this.keys=iu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class su extends WB{constructor(e,t){super(e,"not-in",t),this.keys=iu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iu(e,t){return(t.arrayValue?.values||[]).map(e=>Ea.fromName(e.referenceValue))}class au extends WB{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tB(t)&&So(t.arrayValue,this.value)}}class ou extends WB{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&So(this.value.arrayValue,t)}}class Bu extends WB{constructor(e,t){super(e,"not-in",t)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!So(this.value.arrayValue,t)}}class uu extends WB{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tB(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>So(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t="asc"){this.field=e,this.dir=t}}function lu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{static fromTimestamp(e){return new hu(e)}static min(){return new hu(new Oa(0,0))}static max(){return new hu(new Oa(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,n,r,s,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new Cu(e,0,hu.min(),hu.min(),hu.min(),uB.empty(),0)}static newFoundDocument(e,t,n,r){return new Cu(e,1,t,hu.min(),n,r,0)}static newNoDocument(e,t){return new Cu(e,2,t,hu.min(),hu.min(),uB.empty(),0)}static newUnknownDocument(e,t){return new Cu(e,3,t,hu.min(),hu.min(),uB.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(hu.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=uB.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=uB.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=hu.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Cu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Cu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e){return new fu(e.readTime,e.key,-1)}class fu{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new fu(hu.min(),Ea.empty(),-1)}static max(){return new fu(hu.max(),Ea.empty(),-1)}}function pu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ea.comparator(e.documentKey,t.documentKey),0!==n?n:$i(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t=null,n=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.Fe=null}}function mu(e,t=null,n=[],r=[],s=null,i=null,a=null){return new gu(e,t,n,r,s,i,a)}function Eu(e){const t=Qi(e);if(null===t.Fe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>ZB(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),to(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>qo(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>qo(e)).join(",")),t.Fe=e}return t.Fe}function Du(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!lu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!eu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!zB(e.startAt,t.startAt)&&zB(e.endAt,t.endAt)}function wu(e){return!!e.isCorePipeline}function yu(e){return!!e.path&&Ea.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t=null,n=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.Oe=null,this.Me=null,this.Ne=null,this.startAt,this.endAt}}function Iu(e){return new _u(e)}function vu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function bu(e){return null!==e.collectionGroup}function Tu(e){const t=Qi(e);if(null===t.Oe){t.Oe=[];const e=new Set;for(const n of t.explicitOrderBy)t.Oe.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new aa(da.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Oe.push(new cu(r,n))}),e.has(da.keyField().canonicalString())||t.Oe.push(new cu(da.keyField(),n))}return t.Oe}function Au(e){const t=Qi(e);return t.Me||(t.Me=function(e,t){if("F"===e.limitType)return mu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new cu(e.field,t)});const n=e.endAt?new qB(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qB(e.startAt.position,e.startAt.inclusive):null;return mu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Tu(e))),t.Me}function Nu(e,t){const n=e.filters.concat([t]);return new _u(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ou(e,t,n){return new _u(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Su(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>tu(e)).join(", ")}]`),to(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>qo(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>qo(e)).join(",")),`Target(${t})`}(Au(e))}; limitType=${e.limitType})`}function Fu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ea.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Tu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=KB(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Tu(e),t))&&!(e.endAt&&!function(e,t,n){const r=KB(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Tu(e),t))}(e,t)}function Lu(e){return(t,n)=>{let r=!1;for(const s of Tu(e)){const e=Ru(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ru(e,t,n){const r=e.field.isKeyField()?Ea.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Fo(r,s):qi(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return qi(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ku,Pu;function Mu(e){if(void 0===e)return Vi("GRPC error has no .code"),Ba.UNKNOWN;switch(e){case ku.OK:return Ba.OK;case ku.CANCELLED:return Ba.CANCELLED;case ku.UNKNOWN:return Ba.UNKNOWN;case ku.DEADLINE_EXCEEDED:return Ba.DEADLINE_EXCEEDED;case ku.RESOURCE_EXHAUSTED:return Ba.RESOURCE_EXHAUSTED;case ku.INTERNAL:return Ba.INTERNAL;case ku.UNAVAILABLE:return Ba.UNAVAILABLE;case ku.UNAUTHENTICATED:return Ba.UNAUTHENTICATED;case ku.INVALID_ARGUMENT:return Ba.INVALID_ARGUMENT;case ku.NOT_FOUND:return Ba.NOT_FOUND;case ku.ALREADY_EXISTS:return Ba.ALREADY_EXISTS;case ku.PERMISSION_DENIED:return Ba.PERMISSION_DENIED;case ku.FAILED_PRECONDITION:return Ba.FAILED_PRECONDITION;case ku.ABORTED:return Ba.ABORTED;case ku.OUT_OF_RANGE:return Ba.OUT_OF_RANGE;case ku.UNIMPLEMENTED:return Ba.UNIMPLEMENTED;case ku.DATA_LOSS:return Ba.DATA_LOSS;default:return qi(39323,{code:e})}}(Pu=ku||(ku={}))[Pu.OK=0]="OK",Pu[Pu.CANCELLED=1]="CANCELLED",Pu[Pu.UNKNOWN=2]="UNKNOWN",Pu[Pu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pu[Pu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pu[Pu.NOT_FOUND=5]="NOT_FOUND",Pu[Pu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pu[Pu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pu[Pu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pu[Pu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pu[Pu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pu[Pu.ABORTED=10]="ABORTED",Pu[Pu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pu[Pu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pu[Pu.INTERNAL=13]="INTERNAL",Pu[Pu.UNAVAILABLE=14]="UNAVAILABLE",Pu[Pu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ga(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return ma(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new ra(Ea.comparator);function Uu(){return Hu}const Vu=new ra(Ea.comparator);function Ju(...e){let t=Vu;for(const n of e)t=t.insert(n.key,n);return t}function ju(e){let t=Vu;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function qu(){return zu()}function Ku(){return zu()}function zu(){return new Gu(e=>e.toString(),(e,t)=>e.isEqual(t))}const Qu=new ra(Ea.comparator),Wu=new aa(Ea.comparator);function Yu(...e){let t=Wu;for(const n of e)t=t.add(n);return t}const $u=new aa($i);
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xu=new Hr([4294967295,4294967295],0);function Zu(e){const t=(new TextEncoder).encode(e),n=new Ur;return n.update(t),new Uint8Array(n.digest())}function ec(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class tc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nc(`Invalid padding: ${t}`);if(n<0)throw new nc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new nc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nc(`Invalid padding when bitmap length is 0: ${t}`);this.Be=8*e.length-t,this.Le=Hr.fromNumber(this.Be)}$e(e,t,n){let r=e.add(t.multiply(Hr.fromNumber(n)));return 1===r.compare(Xu)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Le).toNumber()}Ue(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Be)return!1;const t=Zu(e),[n,r]=ec(t);for(let e=0;e<this.hashCount;e++){const t=this.$e(n,r,e);if(!this.Ue(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new tc(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Be)return;const t=Zu(e),[n,r]=ec(t);for(let e=0;e<this.hashCount;e++){const t=this.$e(n,r,e);this.ke(t)}}ke(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class nc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,sc.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new rc(hu.min(),r,new ra($i),Uu(),Uu(),Yu())}}class sc{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new sc(n,t,Yu(),Yu(),Yu())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t,n,r){this.Qe=e,this.removedTargetIds=t,this.key=n,this.qe=r}}class ac{constructor(e,t){this.targetId=e,this.Ke=t}}class oc{constructor(e,t,n=Fa.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Bc{constructor(e){this.targetId=e,this.We=0,this.Ge=hc(),this.je=Fa.EMPTY_BYTE_STRING,this.ze=!1,this.He=!0}get current(){return this.ze}get resumeToken(){return this.je}get Je(){return 0!==this.We}get Ye(){return this.He}Ze(e){e.approximateByteSize()>0&&(this.He=!0,this.je=e)}Xe(){let e=Yu(),t=Yu(),n=Yu();return this.Ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:qi(38017,{changeType:s})}}),new sc(this.je,this.ze,e,t,n)}et(){this.He=!1,this.Ge=hc()}tt(e,t){this.He=!0,this.Ge=this.Ge.insert(e,t)}nt(e){this.He=!0,this.Ge=this.Ge.remove(e)}rt(){this.We+=1}it(){this.We-=1,zi(this.We>=0,3241,{We:this.We,targetId:this.targetId})}st(){this.He=!0,this.ze=!0}}const uc="WatchChangeAggregator";class cc{constructor(e){this._t=e,this.ot=new Map,this.ut=Uu(),this.ct=lc(),this.lt=Uu(),this.Et=lc(),this.ht=new ra($i)}Tt(e){for(const t of e.Qe)e.qe&&e.qe.isFoundDocument()?this.Pt(t,e.qe):this.It(t,e.key,e.qe);for(const t of e.removedTargetIds)this.It(t,e.key,e.qe)}Rt(e){this.forEachTarget(e,t=>{const n=this.ot.get(t);if(n)switch(e.state){case 0:this.At(t)&&n.Ze(e.resumeToken);break;case 1:n.it(),n.Je||n.et(),n.Ze(e.resumeToken);break;case 2:n.it(),n.Je||this.removeTarget(t);break;case 3:this.At(t)&&(n.st(),n.Ze(e.resumeToken));break;case 4:this.At(t)&&(this.Vt(t),n.Ze(e.resumeToken));break;default:qi(56790,{state:e.state})}else Ui(uc,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ot.forEach((e,n)=>{this.At(n)&&t(n)})}dt(e){return wu(e)?"documents"===e.getPipelineSourceType()&&1===e.getPipelineDocuments()?.length:yu(e)}ft(e){const t=e.targetId,n=e.Ke.count,r=this.gt(t);if(r){const s=r.target;if(this.dt(s))if(0===n){const e=new Ea(wu(s)?ha.fromString(s.getPipelineDocuments()[0]):s.path);this.It(t,e,Cu.newNoDocument(e,hu.min()))}else zi(1===n,20013,"Single document existence filter with count: "+n);else{const r=this.yt(t);if(r!==n){const n=this.wt(e),s=n?this.bt(n,e,r):1;if(0!==s){this.Vt(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ht=this.ht.insert(t,e)}}}}}wt(e){const t=e.Ke.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,a;try{i=ka(n).toUint8Array()}catch(e){if(e instanceof Sa)return Ji("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{a=new tc(i,r,s)}catch(e){return Ji(e instanceof nc?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===a.Be?null:a}bt(e,t,n){return t.Ke.count===n-this.vt(e,t.targetId)?0:2}vt(e,t){const n=this._t.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this._t.xt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.It(t,n,null),r++)}),r}Dt(e){const t=new Map;this.ot.forEach((n,r)=>{const s=this.gt(r);if(s){if(n.current&&this.dt(s.target)){const t=wu(s.target)?ha.fromString(s.target.getPipelineDocuments()[0]):s.target.path,n=new Ea(t);this.Ct(n).has(r)||this.Ft(r,n)||this.It(r,n,Cu.newNoDocument(n,e))}n.Ye&&(t.set(r,n.Xe()),n.et())}});let n=Yu();this.Et.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.gt(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ut.forEach((t,n)=>n.setReadTime(e)),this.lt.forEach((t,n)=>n.setReadTime(e));const r=new rc(e,t,this.ht,this.ut,this.lt,n);return this.ut=Uu(),this.ct=lc(),this.lt=Uu(),this.Et=lc(),this.ht=new ra($i),r}Pt(e,t){const n=this.ot.get(e);if(!n||!this.At(e))return void Ui(uc,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.Ft(e,t.key)?2:0;n.tt(t.key,r),wu(this.gt(e).target)&&"exact"!==this.gt(e).target.getPipelineFlavor()?this.lt=this.lt.insert(t.key,t):this.ut=this.ut.insert(t.key,t),this.ct=this.ct.insert(t.key,this.Ct(t.key).add(e)),this.Et=this.Et.insert(t.key,this.Ot(t.key).add(e))}It(e,t,n){const r=this.ot.get(e);r&&this.At(e)?(this.Ft(e,t)?r.tt(t,1):r.nt(t),this.Et=this.Et.insert(t,this.Ot(t).delete(e)),this.Et=this.Et.insert(t,this.Ot(t).add(e)),n&&(wu(this.gt(e).target)&&"exact"!==this.gt(e).target.getPipelineFlavor()?this.lt=this.lt.insert(t,n):this.ut=this.ut.insert(t,n))):Ui(uc,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ot.delete(e)}yt(e){const t=this.ot.get(e);if(!t)return 0;const n=t.Xe();return this._t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}rt(e){let t=this.ot.get(e);t||(Ui(uc,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Bc(e),this.ot.set(e,t)),t.rt()}Ot(e){let t=this.Et.get(e);return t||(t=new aa($i),this.Et=this.Et.insert(e,t)),t}Ct(e){let t=this.ct.get(e);return t||(t=new aa($i),this.ct=this.ct.insert(e,t)),t}At(e){const t=null!==this.gt(e);return t||Ui(uc,"Detected inactive target",e),t}gt(e){const t=this.ot.get(e);return void 0===t||t.Je?null:this._t.Mt(e)}Vt(e){this.ot.set(e,new Bc(e)),this._t.getRemoteKeysForTarget(e).forEach(t=>{this.It(e,t,null)})}Ft(e,t){return this._t.getRemoteKeysForTarget(e).has(t)}}function lc(){return new ra(Ea.comparator)}function hc(){return new ra(Ea.comparator)}const Cc={asc:"ASCENDING",desc:"DESCENDING"},dc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fc={and:"AND",or:"OR"};class pc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gc(e,t){return e.useProto3Json||to(t)?t:{value:t}}function mc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ec(e){const t=Ra(e);return new Oa(t.seconds,t.nanos)}function Dc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function wc(e,t){return mc(e,t.toTimestamp())}function yc(e){return zi(!!e,49232),hu.fromTimestamp(Ec(e))}function _c(e,t){return Ic(e,t).canonicalString()}function Ic(e,t){const n=function(e){return new ha(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function vc(e){const t=ha.fromString(e);return zi(jc(t),10190,{key:t.toString()}),t}function bc(e,t){return _c(e.databaseId,t.path)}function Tc(e,t){const n=vc(t);if(n.get(1)!==e.databaseId.projectId)throw new ua(Ba.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ua(Ba.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ea(Oc(n))}function Ac(e,t){return _c(e.databaseId,t)}function Nc(e){return new ha(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oc(e){return zi(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Sc(e,t,n){return{name:bc(e,t),fields:n.value.mapValue.fields}}function Fc(e,t){return{documents:[Ac(e,t.path)]}}function Lc(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ac(e,s);const i=function(e){if(0!==e.length)return Vc(YB.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Hc(e.field),direction:Pc(e.dir)}}(e))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=gc(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{Lt:n,parent:s}}function Rc(e){let t=function(e){const t=vc(e);return 4===t.length?ha.emptyPath():Oc(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){zi(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=kc(e);return t instanceof YB&&XB(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=function(e){return e.map(e=>function(e){return new cu(Uc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,to(t)?null:t}(n.limit));let B=null;n.startAt&&(B=function(e){const t=!!e.before,n=e.values||[];return new qB(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new qB(n,t)}(n.endAt)),function(e,t,n,r,s,i,a,o){return new _u(e,t,n,r,s,i,a,o)}(t,s,a,i,o,"F",B,u)}function xc(e,t){return{structuredPipeline:{pipeline:{stages:t.stages.map(t=>t._toProto(e))}}}}function kc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Uc(e.unaryFilter.field);return WB.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Uc(e.unaryFilter.field);return WB.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Uc(e.unaryFilter.field);return WB.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Uc(e.unaryFilter.field);return WB.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return qi(61313);default:return qi(60726)}}(e):void 0!==e.fieldFilter?function(e){return WB.create(Uc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return qi(58110);default:return qi(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return YB.create(e.compositeFilter.filters.map(e=>kc(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return qi(1026)}}(e.compositeFilter.op))}(e):qi(30097,{filter:e})}function Pc(e){return Cc[e]}function Mc(e){return dc[e]}function Gc(e){return fc[e]}function Hc(e){return{fieldPath:e.canonicalString()}}function Uc(e){return da.fromServerFormat(e.fieldPath)}function Vc(e){return e instanceof WB?function(e){if("=="===e.op){if(rB(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NAN"}};if(nB(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rB(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NAN"}};if(nB(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hc(e.field),op:Mc(e.op),value:e.value}}}(e):e instanceof YB?function(e){const t=e.getFilters().map(e=>Vc(e));return 1===t.length?t[0]:{compositeFilter:{op:Gc(e.op),filters:t}}}(e):qi(54877,{filter:e})}function Jc(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function jc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function qc(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}function Kc(e,t){const n={fields:{}};return t.forEach((t,r)=>{if("string"!=typeof r)throw new Error(`Cannot encode map with non-string key: ${r}`);n.fields[r]=t._toProto(e)}),{mapValue:n}}function zc(e){return{stringValue:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(e){return new pc(e,!0)}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){if(this.seconds=e,this.increment=t,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(t)||t<0||t>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t=0){if(this.subtype=t,!Number.isInteger(t)||t<0||t>255)throw new ua(Ba.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,t=0){try{return new $c(Fa.fromBase64String(e),t)}catch(e){throw new ua(Ba.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e,t=0){return new $c(Fa.fromUint8Array(e),t)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:$c._jsonSchemaVersion,bytes:this.toBase64()};return 0!==this.subtype&&(e.subtype=this.subtype),e}static fromJSON(e){if(Ta(e,$c._jsonSchema)){const t=e.subtype??0;return $c.fromBase64String(e.bytes,t)}}}$c._jsonSchemaVersion="firestore/bytes/1.0",$c._jsonSchema={type:ba("string",$c._jsonSchemaVersion),bytes:ba("string"),subtype:{...ba("number"),optional:!0}};
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{constructor(e){this.stringValue=e,this.value=eo.fromString(e)}isEqual(e){return!(!this.value.oe()||!e.value.oe())||0===this.value.compareTo(e.value)}toJSON(){return{Ut:{stringValue:this.stringValue}}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ua(Ba.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new da(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ua(Ba.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ua(Ba.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $i(this._lat,e._lat)||$i(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tl._jsonSchemaVersion}}static fromJSON(e){if(Ta(e,tl._jsonSchema))return new tl(e.latitude,e.longitude)}}tl._jsonSchemaVersion="firestore/geoPoint/1.0",tl._jsonSchema={type:ba("string",tl._jsonSchemaVersion),latitude:ba("number"),longitude:ba("number")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.type="MaxKey"}static instance(){return rl.MAX_KEY_VALUE_INSTANCE||(rl.MAX_KEY_VALUE_INSTANCE=new rl),rl.MAX_KEY_VALUE_INSTANCE}}rl.MAX_KEY_VALUE_INSTANCE=null;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(){this.type="MinKey"}static instance(){return sl.MIN_KEY_VALUE_INSTANCE||(sl.MIN_KEY_VALUE_INSTANCE=new sl),sl.MIN_KEY_VALUE_INSTANCE}}sl.MIN_KEY_VALUE_INSTANCE=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}il.UNAUTHENTICATED=new il(null),il.GOOGLE_CREDENTIALS=new il("google-credentials-uid"),il.FIRST_PARTY=new il("first-party-uid"),il.MOCK_USER=new il("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(il.UNAUTHENTICATED))}shutdown(){}}class ul{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cl{constructor(e){this.kt=e,this.currentUser=il.UNAUTHENTICATED,this.Qt=0,this.forceRefresh=!1,this.auth=null}start(e,t){zi(void 0===this.qt,42304);let n=this.Qt;const r=e=>this.Qt!==n?(n=this.Qt,t(e)):Promise.resolve();let s=new al;this.qt=()=>{this.Qt++,this.currentUser=this.Kt(),s.resolve(),s=new al,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{Ui("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.qt&&(this.auth.addAuthTokenListener(this.qt),i())};this.kt.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.kt.getImmediate({optional:!0});e?a(e):(Ui("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new al)}},0),i()}getToken(){const e=this.Qt,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.Qt!==e?(Ui("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(zi("string"==typeof t.accessToken,31837,{Wt:t}),new ol(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.qt&&this.auth.removeAuthTokenListener(this.qt),this.qt=void 0}Kt(){const e=this.auth&&this.auth.getUid();return zi(null===e||"string"==typeof e,2055,{Gt:e}),new il(e)}}class ll{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n,this.type="FirstParty",this.user=il.FIRST_PARTY,this.Jt=new Map}Yt(){return this.Ht?this.Ht():null}get headers(){this.Jt.set("X-Goog-AuthUser",this.jt);const e=this.Yt();return e&&this.Jt.set("Authorization",e),this.zt&&this.Jt.set("X-Goog-Iam-Authorization-Token",this.zt),this.Jt}}class hl{constructor(e,t,n){this.jt=e,this.zt=t,this.Ht=n}getToken(){return Promise.resolve(new ll(this.jt,this.zt,this.Ht))}start(e,t){e.enqueueRetryable(()=>t(il.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dl{constructor(e,t){this.Zt=t,this.forceRefresh=!1,this.appCheck=null,this.Xt=null,this.en=null,Le(e)&&e.settings.appCheckToken&&(this.en=e.settings.appCheckToken)}start(e,t){zi(void 0===this.qt,3512);const n=e=>{null!=e.error&&Ui("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.Xt;return this.Xt=e.token,Ui("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.qt=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{Ui("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.qt&&this.appCheck.addTokenListener(this.qt)};this.Zt.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.Zt.getImmediate({optional:!0});e?r(e):Ui("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.en)return Promise.resolve(new Cl(this.en));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(zi("string"==typeof e.token,44558,{tokenResult:e}),this.Xt=e.token,new Cl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.qt&&this.appCheck.removeTokenListener(this.qt),this.qt=void 0}}function fl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pl{tn(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="ConnectivityMonitor";class ml{constructor(){this.nn=()=>this.rn(),this.sn=()=>this._n(),this.an=[],this.un()}tn(e){this.an.push(e)}shutdown(){window.removeEventListener("online",this.nn),window.removeEventListener("offline",this.sn)}un(){window.addEventListener("online",this.nn),window.addEventListener("offline",this.sn)}rn(){Ui(gl,"Network connectivity changed: AVAILABLE");for(const e of this.an)e(0)}_n(){Ui(gl,"Network connectivity changed: UNAVAILABLE");for(const e of this.an)e(1)}static cn(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El=null;function Dl(){return null===El?El=268435456+Math.round(2147483648*Math.random()):El++,"0x"+El.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const wl="RestConnection",yl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _l{get En(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.hn=t+"://"+e.host,this.Tn=`projects/${n}/databases/${r}`,this.Pn=this.databaseId.database===qa?`project_id=${n}`:`project_id=${n}&database_id=${r}`}In(e,t,n,r,s){const i=Dl(),a=this.Rn(e,t.toUriEncodedString());Ui(wl,`Sending RPC '${e}' ${i}:`,a,n);const o={"google-cloud-resource-prefix":this.Tn,"x-goog-request-params":this.Pn};this.An(o,r,s);const{host:B}=new URL(a),u=w(B);return this.Vn(e,a,o,n,u).then(t=>(Ui(wl,`Received RPC '${e}' ${i}: `,t),t),t=>{throw Ji(wl,`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t})}dn(e,t,n,r,s,i){return this.In(e,t,n,r,s)}An(e,t,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Mi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t),this.databaseInfo._customHeaders)for(const t of Object.keys(this.databaseInfo._customHeaders))e[t]=this.databaseInfo._customHeaders[t]}Rn(e,t){const n=yl[e];let r=`${this.hn}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.fn=e.fn,this.mn=e.mn}pn(e){this.gn=e}yn(e){this.wn=e}bn(e){this.Sn=e}onMessage(e){this.xn=e}close(){this.mn()}send(e){this.fn(e)}vn(){this.gn()}Dn(){this.wn()}Cn(e){this.Sn(e)}Fn(e){this.xn(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="WebChannelConnection",bl=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Tl extends _l{constructor(e){super(e),this.On=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static Mn(){if(!Tl.Nn){const e=Yr();bl(e,Wr.STAT_EVENT,e=>{e.stat===Qr.PROXY?Ui(vl,"STAT_EVENT: detected buffering proxy"):e.stat===Qr.NOPROXY&&Ui(vl,"STAT_EVENT: detected no buffering proxy")}),Tl.Nn=!0}}Vn(e,t,n,r,s){const i=Dl();return new Promise((s,a)=>{const o=new jr;o.setWithCredentials(!0),o.listenOnce(Kr.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case zr.NO_ERROR:const t=o.getResponseJson();Ui(vl,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case zr.TIMEOUT:Ui(vl,`RPC '${e}' ${i} timed out`),a(new ua(Ba.DEADLINE_EXCEEDED,"Request time out"));break;case zr.HTTP_ERROR:const n=o.getStatus();if(Ui(vl,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ba).indexOf(t)>=0?t:Ba.UNKNOWN}(t.status);a(new ua(e,t.message))}else a(new ua(Ba.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ua(Ba.UNAVAILABLE,"Connection failed."));break;default:qi(9055,{Bn:e,streamId:i,Ln:o.getLastErrorCode(),$n:o.getLastError()})}}finally{Ui(vl,`RPC '${e}' ${i} completed.`)}});const B=JSON.stringify(r);Ui(vl,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",B,n,15)})}Un(e,t,n){const r=Dl(),s=[this.hn,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},o=this.longPollingOptions.timeoutSeconds;void 0!==o&&(a.longPollingTimeout=Math.round(1e3*o)),this.useFetchStreams&&(a.useFetchStreams=!0),this.An(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const B=s.join("");Ui(vl,`Creating RPC '${e}' stream ${r}: ${B}`,a);const u=i.createWebChannel(B,a);this.kn(u);let c=!1,l=!1;const h=new Il({fn:t=>{l?Ui(vl,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(c||(Ui(vl,`Opening RPC '${e}' stream ${r} transport.`),u.open(),c=!0),Ui(vl,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},mn:()=>u.close()});return bl(u,qr.EventType.OPEN,()=>{l||(Ui(vl,`RPC '${e}' stream ${r} transport opened.`),h.vn())}),bl(u,qr.EventType.CLOSE,()=>{l||(l=!0,Ui(vl,`RPC '${e}' stream ${r} transport closed`),h.Cn(),this.Qn(u))}),bl(u,qr.EventType.ERROR,t=>{l||(l=!0,Ji(vl,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),h.Cn(new ua(Ba.UNAVAILABLE,"The operation could not be completed")))}),bl(u,qr.EventType.MESSAGE,t=>{if(!l){const n=t.data[0];zi(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){Ui(vl,`RPC '${e}' stream ${r} received error:`,i);const t=i.status;let n=function(e){const t=ku[e];if(void 0!==t)return Mu(t)}(t),s=i.message;"NOT_FOUND"===t&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&Ji(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=Ba.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),l=!0,h.Cn(new ua(n,s)),u.close()}else Ui(vl,`RPC '${e}' stream ${r} received:`,n),h.Fn(n)}}),Tl.Mn(),setTimeout(()=>{h.Dn()},0),h}terminate(){this.On.forEach(e=>e.close()),this.On=[]}kn(e){this.On.push(e)}Qn(e){this.On=this.On.filter(t=>t===e)}An(e,t,n){super.An(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $r()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tl.Nn=!1;class Al{constructor(e,t,n=1e3,r=1.5,s=6e4){this.qn=e,this.timerId=t,this.Kn=n,this.Wn=r,this.Gn=s,this.jn=0,this.zn=null,this.Hn=Date.now(),this.reset()}reset(){this.jn=0}Jn(){this.jn=this.Gn}Yn(e){this.cancel();const t=Math.floor(this.jn+this.Zn()),n=Math.max(0,Date.now()-this.Hn),r=Math.max(0,t-n);r>0&&Ui("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jn} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.zn=this.qn.enqueueAfterDelay(this.timerId,r,()=>(this.Hn=Date.now(),e())),this.jn*=this.Wn,this.jn<this.Kn&&(this.jn=this.Kn),this.jn>this.Gn&&(this.jn=this.Gn)}Xn(){null!==this.zn&&(this.zn.skipDelay(),this.zn=null)}cancel(){null!==this.zn&&(this.zn.cancel(),this.zn=null)}Zn(){return(Math.random()-.5)*this.jn}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="PersistentStream";class Ol{constructor(e,t,n,r,s,i,a,o){this.qn=e,this.er=n,this.tr=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.nr=0,this.rr=null,this.ir=null,this.stream=null,this.sr=0,this._r=new Al(e,t)}ar(){return 1===this.state||5===this.state||this.ur()}ur(){return 2===this.state||3===this.state}start(){this.sr=0,4!==this.state?this.auth():this.cr()}async stop(){this.ar()&&await this.close(0)}lr(){this.state=0,this._r.reset()}Er(){this.ur()&&null===this.rr&&(this.rr=this.qn.enqueueAfterDelay(this.er,6e4,()=>this.hr()))}Tr(e){this.Pr(),this.stream.send(e)}async hr(){if(this.ur())return this.close(0)}Pr(){this.rr&&(this.rr.cancel(),this.rr=null)}Ir(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this.Pr(),this.Ir(),this._r.cancel(),this.nr++,4!==e?this._r.reset():t&&t.code===Ba.RESOURCE_EXHAUSTED?(Vi(t.toString()),Vi("Using maximum backoff delay to prevent overloading the backend."),this._r.Jn()):t&&t.code===Ba.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Rr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.bn(t)}Rr(){}auth(){this.state=1;const e=this.Ar(this.nr),t=this.nr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.nr===t&&this.Vr(e,n)},t=>{e(()=>{const e=new ua(Ba.UNKNOWN,"Fetching auth token failed: "+t.message);return this.dr(e)})})}Vr(e,t){const n=this.Ar(this.nr);this.stream=this.mr(e,t),this.stream.pn(()=>{n(()=>this.listener.pn())}),this.stream.yn(()=>{n(()=>(this.state=2,this.ir=this.qn.enqueueAfterDelay(this.tr,1e4,()=>(this.ur()&&(this.state=3),Promise.resolve())),this.listener.yn()))}),this.stream.bn(e=>{n(()=>this.dr(e))}),this.stream.onMessage(e=>{n(()=>1==++this.sr?this.pr(e):this.onNext(e))})}cr(){this.state=5,this._r.Yn(async()=>{this.state=0,this.start()})}dr(e){return Ui(Nl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Ar(e){return t=>{this.qn.enqueueAndForget(()=>this.nr===e?t():(Ui(Nl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sl extends Ol{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}mr(e,t){return this.connection.Un("Listen",e,t)}pr(e){return this.onNext(e)}onNext(e){this._r.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:qi(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(zi(void 0===t||"string"==typeof t,58123),Fa.fromBase64String(t||"")):(zi(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Fa.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,o=a&&function(e){const t=void 0===e.code?Ba.UNKNOWN:Mu(e.code);return new ua(t,e.message||"")}(a);n=new oc(r,s,i,o||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tc(e,r.document.name),i=yc(r.document.updateTime),a=r.document.createTime?yc(r.document.createTime):hu.min(),o=new uB({mapValue:{fields:r.document.fields}}),B=Cu.newFoundDocument(s,i,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ic(u,c,B.key,B)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Tc(e,r.document),i=r.readTime?yc(r.readTime):hu.min(),a=Cu.newNoDocument(s,i),o=r.removedTargetIds||[];n=new ic([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Tc(e,r.document),i=r.removedTargetIds||[];n=new ic([],i,s,null)}else{if(!("filter"in t))return qi(11601,{Nt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new xu(r,s),a=e.targetId;n=new ac(a,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return hu.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?hu.min():t.readTime?yc(t.readTime):hu.min()}(e);return this.listener.gr(t,n)}yr(e){const t={};t.database=Nc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=wu(r)?{pipelineQuery:xc(e,r)}:yu(r)?{documents:Fc(e,r)}:{query:Lc(e,r).Lt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Dc(e,t.resumeToken);const r=gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(hu.min())>0){n.readTime=mc(e,t.snapshotVersion.toTimestamp());const r=gc(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return qi(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Tr(t)}wr(e){const t={};t.database=Nc(this.serializer),t.removeTarget=e,this.Tr(t)}}class Fl extends Ol{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get br(){return this.sr>0}start(){this.lastStreamToken=void 0,super.start()}Rr(){this.br&&this.Sr([])}mr(e,t){return this.connection.Un("Write",e,t)}pr(e){return zi(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,zi(!e.writeResults||0===e.writeResults.length,55816),this.listener.vr()}onNext(e){zi(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this._r.reset();const t=function(e,t){return e&&e.length>0?(zi(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?yc(e.updateTime):yc(t);return n.isEqual(hu.min())&&(n=yc(t)),new NB(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=yc(e.commitTime);return this.listener.Dr(n,t)}Cr(){const e={};e.database=Nc(this.serializer),this.Tr(e)}Sr(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof MB)n={update:Sc(e,t.key,t.value)};else if(t instanceof JB)n={delete:bc(e,t.key)};else if(t instanceof GB)n={update:Sc(e,t.key,t.data),updateMask:Jc(t.fieldMask)};else{if(!(t instanceof jB))return qi(16599,{Bt:t.type});n={verify:bc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof mB)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof EB)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wB)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof IB)return{fieldPath:t.field.canonicalString(),increment:n.xe};if(n instanceof vB)return{fieldPath:t.field.canonicalString(),minimum:n.xe};if(n instanceof bB)return{fieldPath:t.field.canonicalString(),maximum:n.xe};throw qi(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:wc(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:qi(27497)}(e,t.precondition)),n}(this.serializer,e))};this.Tr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{}class Rl extends Ll{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.Fr=!1}Or(){if(this.Fr)throw new ua(Ba.FAILED_PRECONDITION,"The client has already been terminated.")}In(e,t,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.In(e,Ic(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ba.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ua(Ba.UNKNOWN,e.toString())})}dn(e,t,n,r,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.dn(e,Ic(t,n),r,i,a,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Ba.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ua(Ba.UNKNOWN,e.toString())})}terminate(){this.Fr=!0,this.connection.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xl=new Map;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pl=41943040;class Ml{static withCacheSize(e){return new Ml(e,Ml.DEFAULT_COLLECTION_PERCENTILE,Ml.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Ml.DEFAULT_COLLECTION_PERCENTILE=10,Ml.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ml.DEFAULT=new Ml(Pl,Ml.DEFAULT_COLLECTION_PERCENTILE,Ml.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ml.DISABLED=new Ml(-1,0,0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.Mr(e),this.Nr=e=>t.writeSequenceNumber(e))}Mr(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.Nr&&this.Nr(e),e}}Gl.Br=-1;class Hl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(e){if(e.code!==Ba.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ui("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&qi(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Vl((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Vl?t:Vl.resolve(t)}catch(e){return Vl.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Vl.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Vl.reject(t)}static resolve(e){return new Vl((t,n)=>{t(e)})}static reject(e){return new Vl((t,n)=>{n(e)})}static waitFor(e){return new Vl((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Vl.resolve(!1);for(const n of e)t=t.next(e=>e?Vl.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Vl((n,r)=>{const s=e.length,i=new Array(s);let a=0;for(let o=0;o<s;o++){const B=o;t(e[B]).next(e=>{i[B]=e,++a,a===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Vl((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}function Jl(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="LruGarbageCollector";function ql([e,t],[n,r]){const s=$i(e,n);return 0===s?$i(t,r):s}class Kl{constructor(e){this.ai=e,this.buffer=new aa(ql),this.ui=0}ci(){return++this.ui}li(e){const t=[e,this.ci()];if(this.buffer.size<this.ai)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ql(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zl{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ei=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.hi(6e4)}stop(){this.Ei&&(this.Ei.cancel(),this.Ei=null)}get started(){return null!==this.Ei}hi(e){Ui(jl,`Garbage collection scheduled in ${e}ms`),this.Ei=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ei=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Jl(e)?Ui(jl,"Ignoring IndexedDB error during garbage collection: ",e):await Ul(e)}await this.hi(3e5)})}}class Ql{constructor(e,t){this.Ti=e,this.params=t}calculateTargetCount(e,t){return this.Ti.Pi(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Vl.resolve(Gl.Br);const n=new Kl(t);return this.Ti.forEachTarget(e,e=>n.li(e.sequenceNumber)).next(()=>this.Ti.Ii(e,e=>n.li(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ti.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ti.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ui("LruGarbageCollector","Garbage collection skipped; disabled"),Vl.resolve(kl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(Ui("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kl):this.Ri(e,t))}getCacheSize(e){return this.Ti.getCacheSize(e)}Ri(e,t){let n,r,s,i,a,o,B;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(Ui("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(B=Date.now(),Hi()<=T.DEBUG&&Ui("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(a-i)+"ms\n"+`\tRemoved ${s} targets in `+(o-a)+"ms\n"+`\tRemoved ${e} documents in `+(B-o)+"ms\n"+`Total Duration: ${B-u}ms`),Vl.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wl="firestore.googleapis.com",Yl=!0;class $l{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new ua(Ba.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wl,this.ssl=Yl}else this.host=e.host,this.ssl=e.ssl??Yl;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),void 0===e.cacheSizeBytes)this.cacheSizeBytes=Pl;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ua(Ba.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(e,t,n,r){if(!0===t&&!0===r)throw new ua(Ba.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fl(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ua(Ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ua(Ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ua(Ba.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,void 0!==e.grpcFlowControlWindow){if("number"!=typeof e.grpcFlowControlWindow||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new ua(Ba.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const r of n)if(e[r]!==t[r])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Xl=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $l({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ua(Ba.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ua(Ba.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $l(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Bl;switch(e.type){case"firstParty":return new hl(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ua(Ba.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=xl.get(e);t&&(Ui("ComponentProvider","Removing Datastore"),xl.delete(e),t.terminate())}(this),Promise.resolve()}};function Zl(e,t,n,s={}){e=va(e,Xl);const i=w(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},B=`${t}:${n}`;i&&y(`https://${B}`),a.host!==Wl&&a.host!==B&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...a,host:B,ssl:i,emulatorOptions:s};if(!f(u,o)&&(e._setSettings(u),s.mockUserToken)){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=il.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(a)),""].join(".")}(s.mockUserToken,e._app?.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new ua(Ba.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new il(i)}e._authCredentials=new ul(new ol(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new eh(this.firestore,e,this._query)}}class th{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new th(this.firestore,e,this._key)}toJSON(){return{type:th._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Ta(t,th._jsonSchema))return new th(e,n||null,new Ea(ha.fromString(t.referencePath)))}}th._jsonSchemaVersion="firestore/documentReference/1.0",th._jsonSchema={type:ba("string",th._jsonSchemaVersion),referencePath:ba("string")};class nh extends eh{constructor(e,t,n){super(e,t,Iu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new th(this.firestore,null,new Ea(e))}withConverter(e){return new nh(this.firestore,e,this._path)}}function rh(e,t,...n){if(e=D(e),Da("collection","path",t),e instanceof Xl){const r=ha.fromString(t,...n);return ya(r),new nh(e,null,r)}{if(!(e instanceof th||e instanceof nh))throw new ua(Ba.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ha.fromString(t,...n));return ya(r),new nh(e.firestore,null,r)}}function sh(e,t,...n){if(e=D(e),1===arguments.length&&(t=Yi.newId()),Da("doc","path",t),e instanceof Xl){const r=ha.fromString(t,...n);return wa(r),new th(e,null,new Ea(r))}{if(!(e instanceof th||e instanceof nh))throw new ua(Ba.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ha.fromString(t,...n));return wa(r),new th(e.firestore,e instanceof nh?e.converter:null,new Ea(r))}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.pattern=e,this.options=t}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ah._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ta(e,ah._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new ah(e.vectorValues);throw new ua(Ba.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ah._jsonSchemaVersion="firestore/vectorValue/1.0",ah._jsonSchema={type:ba("string",ah._jsonSchemaVersion),vectorValues:ba("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oh=/^__.*__$/;class Bh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new GB(e,this.data,this.fieldMask,t,this.fieldTransforms):new MB(e,this.data,t,this.fieldTransforms)}}function uh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw qi(40011,{dataSource:e})}}class ch{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ch({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return wh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(0===e.length)throw this.createError("Document fields must not be empty");if(uh(this.dataSource)&&oh.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class lh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qc(e)}createContext(e,t,n,r=!1){return new ch({dataSource:e,methodName:t,targetDoc:n,path:da.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hh(e){const t=e._freezeSettings(),n=Qc(e._databaseId);return new lh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ch(e,t,n,r,s,i={}){const a=e.createContext(i.merge||i.mergeFields?2:0,t,n,s);mh("Data must be an object, but it was:",a,r);const o=fh(r,a);let B,u;if(i.merge)B=new fa(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Eh(t,r,n);if(!a.contains(s))throw new ua(Ba.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);yh(e,s)||e.push(s)}B=new fa(e),u=a.fieldTransforms.filter(e=>B.covers(e.field))}else B=null,u=a.fieldTransforms;return new Bh(new uB(o),B,u)}function dh(e,t,n){if(gh(e=D(e)))return mh("Unsupported field value:",t,e),fh(e,t);if(e instanceof el)return function(e,t){if(!uh(t.dataSource))throw t.createError(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.createError(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.createError("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=dh(s,t.childContextForArray(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=D(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return CB(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Oa.fromDate(e);return{timestampValue:mc(t.serializer,n)}}if(e instanceof Oa){const n=new Oa(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mc(t.serializer,n)}}if(ph(e)){const n=Oa.fromInstant(e),r=new Oa(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mc(t.serializer,r)}}if(e instanceof tl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $c)return 0===e.subtype?{bytesValue:Dc(t.serializer,e._byteString)}:function(e,t){const n=t.toUint8Array(),r=new Uint8Array(n.length+1);return r[0]=t.subtype,r.set(n,1),{mapValue:{fields:{[Eo]:{bytesValue:Dc(e,Fa.fromUint8Array(r))}}}}}(t.serializer,e);if(e instanceof th){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_c(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof ah)return function(e,t){const n=e instanceof ah?e.toArray():e,r={fields:{[ro]:{stringValue:so},[io]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.createError("VectorValues must only contain numeric values.");return lB(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if(e instanceof ih)return function(e){return{mapValue:{fields:{[uo]:{mapValue:{fields:{[co]:{stringValue:e.pattern},[lo]:{stringValue:e.options}}}}}}}}(e);if(e instanceof Wc)return function(e){return{mapValue:{fields:{[ho]:{stringValue:e.value}}}}}(e);if(e instanceof nl)return function(e){return{mapValue:{fields:{[Co]:hB(e.value)}}}}(e);if(e instanceof Xc)return function(e){return{mapValue:{fields:{[fo]:{stringValue:e.stringValue}}}}}(e);if(e instanceof Yc)return function(e){return{mapValue:{fields:{[po]:{mapValue:{fields:{[go]:hB(e.seconds),[mo]:hB(e.increment)}}}}}}}(e);if(e instanceof sl)return{mapValue:{fields:{[oo]:{nullValue:"NULL_VALUE"}}}};if(e instanceof rl)return{mapValue:{fields:{[Bo]:{nullValue:"NULL_VALUE"}}}};if(qc(e))return e._toProto(t.serializer);throw t.createError(`Unsupported field value: ${Ia(e)}`)}(e,t)}function fh(e,t){const n={};return ma(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ga(e,(e,r)=>{const s=dh(r,t.childContextForField(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function ph(e){if("object"!=typeof e||null===e)return!1;if("undefined"!=typeof Temporal&&"function"==typeof Temporal.Instant&&e instanceof Temporal.Instant)return!0;const t=e;return"Temporal.Instant"===t[Symbol.toStringTag]&&"bigint"==typeof t.t}function gh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Oa||e instanceof tl||e instanceof $c||e instanceof th||e instanceof el||e instanceof ah||e instanceof sl||e instanceof rl||e instanceof nl||e instanceof Xc||e instanceof ih||e instanceof Wc||e instanceof Yc||ph(e)||qc(e))}function mh(e,t,n){if(!gh(n)||!_a(n)){const r=Ia(n);throw"an object"===r?t.createError(e+" a custom object"):t.createError(e+" "+r)}}function Eh(e,t,n){if((t=D(t))instanceof Zc)return t._internalPath;if("string"==typeof t)return function(e,t,n){if(t.search(Dh)>=0)throw wh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zc(...t.split("."))._internalPath}catch(r){throw wh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t);throw wh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Dh=new RegExp("[~\\*/\\[\\]]");function wh(e,t,n,r,s){const i=r&&!r.isEmpty(),a=void 0!==s;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let B="";return(i||a)&&(B+=" (found",i&&(B+=` in field ${r}`),a&&(B+=` in document ${s}`),B+=")"),new ua(Ba.INVALID_ARGUMENT,o+e+B)}function yh(e,t){return e.some(e=>e.isEqual(t))}function _h(e){return"function"==typeof e._readUserData}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=uB.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const s=this.optionDefinitions[r];if(r in e){const i=e[r];let a;s.nestedOptions&&_a(i)?a={mapValue:{fields:new Ih(s.nestedOptions).getOptionsProto(t,i)}}:i&&(a=dh(i,t)??void 0),a&&n.set(da.fromServerFormat(s.serverName),a)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const t=new Map(function(e,t){const n=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}(n,(t,n)=>[da.fromServerFormat(n),void 0!==t?dh(t,e):null]));r.setAll(t)}return r.value.mapValue.fields??{}}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vh(e){let t;return e instanceof Ah?e:(t=_a(e)?function(e){const t=[];for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const r=e[n];t.push(kh(n)),t.push(vh(r))}return new Mh("map",t,"map")}(e):e instanceof Array?function(e){return function(e,t){return new Mh("array",e.map(e=>vh(e)),t)}(e,"array")}(e):Ph(e,void 0),t)}function bh(e){if(e instanceof Ah)return e;if(e instanceof ah)return kh(e);if(Array.isArray(e))return kh(function(e){return new ah(e)}(e));throw new Error("Unsupported value: "+typeof e)}function Th(e){return function(e){return"string"==typeof e}(e)?Rh(e):vh(e)}class Ah{constructor(){this._protoValueType="ProtoValue"}add(e){return new Mh("add",[this,vh(e)],"add")}asBoolean(){if(this instanceof Gh)return this;if(this instanceof xh)return new Uh(this);if(this instanceof Lh)return new Vh(this);if(this instanceof Mh)return new Hh(this);throw new ua("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new Mh("subtract",[this,vh(e)],"subtract")}multiply(e){return new Mh("multiply",[this,vh(e)],"multiply")}divide(e){return new Mh("divide",[this,vh(e)],"divide")}mod(e){return new Mh("mod",[this,vh(e)],"mod")}equal(e){return new Mh("equal",[this,vh(e)],"equal").asBoolean()}notEqual(e){return new Mh("not_equal",[this,vh(e)],"notEqual").asBoolean()}lessThan(e){return new Mh("less_than",[this,vh(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new Mh("less_than_or_equal",[this,vh(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new Mh("greater_than",[this,vh(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new Mh("greater_than_or_equal",[this,vh(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(e=>vh(e));return new Mh("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new Mh("array_contains",[this,vh(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Fh(e.map(vh),"arrayContainsAll"):e;return new Mh("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Fh(e.map(vh),"arrayContainsAny"):e;return new Mh("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new Mh("array_reverse",[this])}arrayLength(){return new Mh("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Fh(e.map(vh),"equalAny"):e;return new Mh("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Fh(e.map(vh),"notEqualAny"):e;return new Mh("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new Mh("exists",[this],"exists").asBoolean()}charLength(){return new Mh("char_length",[this],"charLength")}like(e){return new Mh("like",[this,vh(e)],"like").asBoolean()}regexContains(e){return new Mh("regex_contains",[this,vh(e)],"regexContains").asBoolean()}regexFind(e){return new Mh("regex_find",[this,vh(e)],"regexFind")}regexFindAll(e){return new Mh("regex_find_all",[this,vh(e)],"regexFindAll")}regexMatch(e){return new Mh("regex_match",[this,vh(e)],"regexMatch").asBoolean()}stringContains(e){return new Mh("string_contains",[this,vh(e)],"stringContains").asBoolean()}startsWith(e){return new Mh("starts_with",[this,vh(e)],"startsWith").asBoolean()}endsWith(e){return new Mh("ends_with",[this,vh(e)],"endsWith").asBoolean()}toLower(){return new Mh("to_lower",[this],"toLower")}toUpper(){return new Mh("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(vh(e)),new Mh("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(vh(e)),new Mh("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(vh(e)),new Mh("rtrim",t,"rtrim")}type(){return new Mh("type",[this])}isType(e){return new Mh("is_type",[this,kh(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(vh);return new Mh("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new Mh("string_index_of",[this,vh(e)],"stringIndexOf")}stringRepeat(e){return new Mh("string_repeat",[this,vh(e)],"stringRepeat")}stringReplaceAll(e,t){return new Mh("string_replace_all",[this,vh(e),vh(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new Mh("string_replace_one",[this,vh(e),vh(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(vh);return new Mh("concat",[this,...n],"concat")}reverse(){return new Mh("reverse",[this],"reverse")}arrayFilter(e,t){return new Mh("array_filter",[this,vh(e),t],"arrayFilter")}arrayTransform(e,t){return new Mh("array_transform",[this,vh(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new Mh("array_transform",[this,vh(e),vh(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,vh(e)];return void 0!==t&&n.push(vh(t)),new Mh("array_slice",n,"arraySlice")}arrayFirst(){return new Mh("array_first",[this],"arrayFirst")}arrayFirstN(e){return new Mh("array_first_n",[this,vh(e)],"arrayFirstN")}arrayLast(){return new Mh("array_last",[this],"arrayLast")}arrayLastN(e){return new Mh("array_last_n",[this,vh(e)],"arrayLastN")}arrayMaximum(){return new Mh("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new Mh("maximum_n",[this,vh(e)],"arrayMaximumN")}arrayMinimum(){return new Mh("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new Mh("minimum_n",[this,vh(e)],"arrayMinimumN")}arrayIndexOf(e){return new Mh("array_index_of",[this,vh(e),vh("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new Mh("array_index_of",[this,vh(e),vh("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new Mh("array_index_of_all",[this,vh(e)],"arrayIndexOfAll")}byteLength(){return new Mh("byte_length",[this],"byteLength")}ceil(){return new Mh("ceil",[this])}floor(){return new Mh("floor",[this])}abs(){return new Mh("abs",[this])}exp(){return new Mh("exp",[this])}mapGet(e){return new Mh("map_get",[this,kh(e)],"mapGet")}mapSet(e,t,...n){const r=[this,vh(e),vh(t),...n.map(vh)];return new Mh("map_set",r,"mapSet")}mapKeys(){return new Mh("map_keys",[this],"mapKeys")}mapValues(){return new Mh("map_values",[this],"mapValues")}mapEntries(){return new Mh("map_entries",[this],"mapEntries")}getField(e){return new Mh("get_field",[this,vh(e)],"get_field")}count(){return Nh._create("count",[this],"count")}sum(){return Nh._create("sum",[this],"sum")}average(){return Nh._create("average",[this],"average")}minimum(){return Nh._create("minimum",[this],"minimum")}maximum(){return Nh._create("maximum",[this],"maximum")}first(){return Nh._create("first",[this],"first")}last(){return Nh._create("last",[this],"last")}arrayAgg(){return Nh._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Nh._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Nh._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new Mh("maximum",[this,...n.map(vh)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new Mh("minimum",[this,...n.map(vh)],"minimum")}vectorLength(){return new Mh("vector_length",[this],"vectorLength")}cosineDistance(e){return new Mh("cosine_distance",[this,bh(e)],"cosineDistance")}dotProduct(e){return new Mh("dot_product",[this,bh(e)],"dotProduct")}euclideanDistance(e){return new Mh("euclidean_distance",[this,bh(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new Mh("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new Mh("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new Mh("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new Mh("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new Mh("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new Mh("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new Mh("timestamp_add",[this,vh(e),vh(t)],"timestampAdd")}timestampSubtract(e,t){return new Mh("timestamp_subtract",[this,vh(e),vh(t)],"timestampSubtract")}timestampDiff(e,t){return new Mh("timestamp_diff",[this,Th(e),vh(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,vh(e)];return t&&n.push(vh(t)),new Mh("timestamp_extract",n,"timestampExtract")}documentId(){return new Mh("document_id",[this],"documentId")}parent(){return new Mh("parent",[this],"parent")}substring(e,t){const n=vh(e);return new Mh("substring",void 0===t?[this,n]:[this,n,vh(t)],"substring")}arrayGet(e){return new Mh("array_get",[this,vh(e)],"arrayGet")}isError(){return new Mh("is_error",[this],"isError").asBoolean()}ifError(e){const t=new Mh("if_error",[this,vh(e)],"ifError");return e instanceof Gh?t.asBoolean():t}isAbsent(){return new Mh("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new Mh("map_remove",[this,vh(e)],"mapRemove")}mapMerge(e,...t){const n=vh(e),r=t.map(vh);return new Mh("map_merge",[this,n,...r],"mapMerge")}pow(e){return new Mh("pow",[this,vh(e)])}trunc(e){return void 0===e?new Mh("trunc",[this]):new Mh("trunc",[this,vh(e)],"trunc")}round(e){return void 0===e?new Mh("round",[this]):new Mh("round",[this,vh(e)],"round")}collectionId(){return new Mh("collection_id",[this])}length(){return new Mh("length",[this])}ln(){return new Mh("ln",[this])}sqrt(){return new Mh("sqrt",[this])}stringReverse(){return new Mh("string_reverse",[this])}ifAbsent(e){return new Mh("if_absent",[this,vh(e)],"ifAbsent")}ifNull(e){return new Mh("if_null",[this,vh(e)],"ifNull")}coalesce(e,...t){return new Mh("coalesce",[this,vh(e),...t.map(vh)],"coalesce")}join(e){return new Mh("join",[this,vh(e)],"join")}log10(){return new Mh("log10",[this])}arraySum(){return new Mh("sum",[this])}split(e){return new Mh("split",[this,vh(e)])}timestampTruncate(e,t){const n=[this,vh(e)];return t&&n.push(vh(t)),new Mh("timestamp_trunc",n)}ascending(){return function(e){return new Jh(Th(e),"ascending","ascending")}(this)}descending(){return function(e){return new Jh(Th(e),"descending","descending")}(this)}as(e){return new Sh(this,e,"as")}}class Nh{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new Nh(e,t);return r._methodName=n,r}as(e){return new Oh(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Oh{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class Sh{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Fh extends Ah{constructor(e,t){super(),this.di=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.di.map(t=>t._toProto(e))}}}_readUserData(e){this.di.forEach(t=>t._readUserData(e))}}class Lh extends Ah{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new Mh("geo_distance",[this,vh(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Rh(e){return function(e,t){return new Lh("string"==typeof e?ca===e?new Zc(ca)._internalPath:Eh("field",e):e._internalPath,t)}(e,"field")}class xh extends Ah{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new xh(e,void 0);return t._protoValue=e,t}_toProto(e){return zi(void 0!==this._protoValue,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,function(e){return"object"==typeof e&&null!==e&&!!("nullValue"in e&&(null===e.nullValue||"NULL_VALUE"===e.nullValue)||"booleanValue"in e&&(null===e.booleanValue||"boolean"==typeof e.booleanValue)||"integerValue"in e&&(null===e.integerValue||"number"==typeof e.integerValue||"string"==typeof e.integerValue)||"doubleValue"in e&&(null===e.doubleValue||"number"==typeof e.doubleValue)||"timestampValue"in e&&(null===e.timestampValue||function(e){return"object"==typeof e&&null!==e&&"seconds"in e&&(null===e.seconds||"number"==typeof e.seconds||"string"==typeof e.seconds)&&"nanos"in e&&(null===e.nanos||"number"==typeof e.nanos)}(e.timestampValue))||"stringValue"in e&&(null===e.stringValue||"string"==typeof e.stringValue)||"bytesValue"in e&&(null===e.bytesValue||e.bytesValue instanceof Uint8Array)||"referenceValue"in e&&(null===e.referenceValue||"string"==typeof e.referenceValue)||"geoPointValue"in e&&(null===e.geoPointValue||function(e){return"object"==typeof e&&null!==e&&"latitude"in e&&(null===e.latitude||"number"==typeof e.latitude)&&"longitude"in e&&(null===e.longitude||"number"==typeof e.longitude)}(e.geoPointValue))||"arrayValue"in e&&(null===e.arrayValue||function(e){return"object"==typeof e&&null!==e&&!(!("values"in e)||null!==e.values&&!Array.isArray(e.values))}(e.arrayValue))||"mapValue"in e&&(null===e.mapValue||function(e){return"object"==typeof e&&null!==e&&!(!("fields"in e)||null!==e.fields&&!_a(e.fields))}(e.mapValue))||"fieldReferenceValue"in e&&(null===e.fieldReferenceValue||"string"==typeof e.fieldReferenceValue)||"functionValue"in e&&(null===e.functionValue||function(e){return"object"==typeof e&&null!==e&&!(!("name"in e)||null!==e.name&&"string"!=typeof e.name||!("args"in e)||null!==e.args&&!Array.isArray(e.args))}(e.functionValue))||"pipelineValue"in e&&(null===e.pipelineValue||function(e){return"object"==typeof e&&null!==e&&!(!("stages"in e)||null!==e.stages&&!Array.isArray(e.stages))}(e.pipelineValue)))}(this._protoValue)||(this._protoValue=dh(this.value,e))}}function kh(e,t){return Ph(e,"constant")}function Ph(e,t){const n=new xh(e,t);return"boolean"==typeof e?new Uh(n):n}class Mh extends Ah{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,void 0!==n&&(this._methodName=n),void 0!==r&&(this._options=r)}get _optionsUtil(){return new Ih({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Gh extends Ah{get _methodName(){return this._expr._methodName}countIf(){return Nh._create("count_if",[this],"countIf")}not(){return new Mh("not",[this],"not").asBoolean()}conditional(e,t){return new Mh("conditional",[this,e,t],"conditional")}ifError(e){const t=vh(e),n=new Mh("if_error",[this,t],"ifError");return t instanceof Gh?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Hh extends Gh{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Uh extends Gh{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Vh extends Gh{constructor(e){super(),this._expr=e,this.expressionType="Field"}}class Jh{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:zc(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}class jh{constructor(e){this.optionsProto=void 0,({rawOptions:this.rawOptions,...this.knownOptions}=e)}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class qh extends jh{get _name(){return"add_fields"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Kc(e,this.fields)]}}_readUserData(e){super._readUserData(e),sC(this.fields,e)}}class Kh extends jh{get _name(){return"aggregate"}get _optionsUtil(){return new Ih({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Kc(e,this.accumulators),Kc(e,this.groups)]}}_readUserData(e){super._readUserData(e),sC(this.groups,e),sC(this.accumulators,e)}}class zh extends jh{get _name(){return"distinct"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Kc(e,this.groups)]}}_readUserData(e){super._readUserData(e),sC(this.groups,e)}}class Qh extends jh{get _name(){return"collection"}get _optionsUtil(){return new Ih({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.pi=function(e){const t="string"==typeof e?e:e.path;return t.startsWith("/")?t:"/"+t}(e)}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.pi}]}}_readUserData(e){super._readUserData(e)}}class Wh extends jh{get _name(){return"collection_group"}get _optionsUtil(){return new Ih({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Yh extends jh{get _name(){return"database"}get _optionsUtil(){return new Ih({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class $h extends jh{get _name(){return"documents"}get _optionsUtil(){return new Ih({})}constructor(e,t){if(super(t),!e||0===e.length)throw new ua(Ba.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(e=>e.startsWith("/")?e:"/"+e),r=new Set(n);if(r.size!==n.length)throw new ua(Ba.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.gi=n,this.yi=r}_toProto(e){return{...super._toProto(e),args:this.gi.map(e=>({referenceValue:e}))}}_readUserData(e){super._readUserData(e)}}class Xh extends jh{get _name(){return"where"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),sC(this.condition,e)}}class Zh extends jh{get _name(){return"limit"}get _optionsUtil(){return new Ih({})}constructor(e,t){zi(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[CB(e,this.limit)]}}}class eC extends jh{get _name(){return"offset"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[CB(e,this.offset)]}}}class tC extends jh{get _name(){return"select"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Kc(e,this.selections)]}}_readUserData(e){super._readUserData(e),sC(this.selections,e)}}class nC extends jh{get _name(){return"sort"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),sC(this.orderings,e)}}class rC extends jh{get _name(){return"replace_with"}get _optionsUtil(){return new Ih({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),zc(rC.bi)]}}_readUserData(e){super._readUserData(e),sC(this.map,e)}}function sC(e,t){return _h(e)?e._readUserData(t):Array.isArray(e)||e instanceof Map?e.forEach(e=>e._readUserData(t)):Object.values(e).forEach(e=>e._readUserData(t)),e}
/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rC.bi="full_replace";class iC{constructor(e,t,n,r){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=r}Ci(e,t){const n=this.userDataReader.createContext(3,e);return _h(t)?t._readUserData(n):(Array.isArray(t),t.forEach(e=>e._readUserData(n))),t}where(e){const t=this.stages.map(e=>e);return this.Ci("where",e),t.push(new Xh(e,{})),new iC(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(e=>e);return t.push(new Zh(e,{})),new iC(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(e=>e);return"orderings"in e?n.push(new nC(this.Ci("sort",e.orderings),{})):n.push(new nC(this.Ci("sort",[e,...t]),{})),new iC(this._db,this.userDataReader,this._userDataWriter,n)}Fi(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}
// Copyright 2024 Google LLC* @license
class aC{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return BC(this)}getPipelineCollectionGroup(){return uC(this)}getPipelineCollectionId(){return function(e){switch(oC(e)){case"collection":return ha.fromString(BC(e)).lastSegment();case"collection_group":return uC(e);default:return}}(this)}getPipelineDocuments(){return cC(this)}getPipelineFlavor(){return function(e){let t="exact";return e.stages.forEach((n,r)=>{n._name!==zh.name&&n._name!==Kh.name||(t="keyless"),n._name===tC.name&&"exact"===t&&(t="augmented"),n._name===qh.name&&r<e.stages.length-1&&"exact"===t&&(t="augmented")}),t}
// Copyright 2024 Google LLC* @license
(this)}getPipelineSourceType(){return oC(this)}}function oC(e){const t=e.stages[0];return t instanceof Qh||t instanceof Wh||t instanceof Yh||t instanceof $h?t._name:"unknown"}function BC(e){if("collection"===oC(e))return e.stages[0].pi}function uC(e){if("collection_group"===oC(e))return e.stages[0].collectionId}function cC(e){if("documents"===oC(e))return e.stages[0].gi}class lC{constructor(e,t){this.type=e,this.value=t}static Oi(){return new lC("ERROR",void 0)}static Mi(){return new lC("UNSET",void 0)}static Ni(){return new lC("NULL",Do)}static newValue(e){return nB(e)?new lC("NULL",Do):function(e){return!!e&&"booleanValue"in e}(e)?new lC("BOOLEAN",e):Yo(e)?new lC("INT",e):$o(e)?new lC("DOUBLE",e):function(e){return!!e&&"timestampValue"in e&&!!e.timestampValue}(e)?new lC("TIMESTAMP",e):function(e){return!!e&&"stringValue"in e}(e)?new lC("STRING",e):function(e){return!!e&&"bytesValue"in e}(e)?new lC("BYTES",e):e.referenceValue?new lC("REFERENCE",e):e.geoPointValue?new lC("GEO_POINT",e):tB(e)?new lC("ARRAY",e):aB(e)?new lC("VECTOR",e):sB(e)?new lC("MAP",e):new lC("ERROR",void 0)}Bi(){return"ERROR"===this.type||"UNSET"===this.type}Li(){return"NULL"===this.type}}function hC(e){if(!e.Bi())return e.value}function CC(e){return e instanceof Gh?e._expr:e}function dC(e){if((e=CC(e))instanceof Lh)return new fC(e);if(e instanceof xh)return new pC(e);if(e instanceof Fh)return new gC(e);if(e instanceof Mh){if("add"===e.name)return new IC(e);if("subtract"===e.name)return new vC(e);if("multiply"===e.name)return new bC(e);if("divide"===e.name)return new TC(e);if("mod"===e.name)return new AC(e);if("and"===e.name)return new NC(e);if("equal"===e.name)return new qC(e);if("not_equal"===e.name)return new KC(e);if("less_than"===e.name)return new zC(e);if("less_than_or_equal"===e.name)return new QC(e);if("greater_than"===e.name)return new WC(e);if("greater_than_or_equal"===e.name)return new YC(e);if("array_concat"===e.name)return new $C(e);if("array_reverse"===e.name)return new XC(e);if("array_contains"===e.name)return new ZC(e);if("array_contains_all"===e.name)return new ed(e);if("array_contains_any"===e.name)return new td(e);if("array_length"===e.name)return new nd(e);if("array_element"===e.name)return new rd(e);if("equal_any"===e.name)return new LC(e);if("not_equal_any"===e.name)return new RC(e);if("is_nan"===e.name)return new xC(e);if("is_not_nan"===e.name)return new kC(e);if("is_null"===e.name)return new PC(e);if("is_not_null"===e.name)return new MC(e);if("is_error"===e.name)return new GC(e);if("exists"===e.name)return new HC(e);if("not"===e.name)return new OC(e);if("or"===e.name)return new SC(e);if("xor"===e.name)return new FC(e);if("conditional"===e.name)return new UC(e);if("maximum"===e.name)return new VC(e);if("minimum"===e.name)return new JC(e);if("reverse"===e.name)return new sd(e);if("replace_first"===e.name)return new id(e);if("replace_all"===e.name)return new ad(e);if("char_length"===e.name)return new od(e);if("byte_length"===e.name)return new Bd(e);if("like"===e.name)return new cd(e);if("regex_contains"===e.name)return new ld(e);if("regex_match"===e.name)return new hd(e);if("string_contains"===e.name)return new Cd(e);if("starts_with"===e.name)return new dd(e);if("ends_with"===e.name)return new fd(e);if("to_lower"===e.name)return new pd(e);if("to_upper"===e.name)return new gd(e);if("trim"===e.name)return new md(e);if("string_concat"===e.name)return new Ed(e);if("map_get"===e.name)return new Dd(e);if("cosine_distance"===e.name)return new yd(e);if("dot_product"===e.name)return new _d(e);if("euclidean_distance"===e.name)return new Id(e);if("vector_length"===e.name)return new vd(e);if("unix_micros_to_timestamp"===e.name)return new Hd(e);if("timestamp_to_unix_micros"===e.name)return new jd(e);if("unix_millis_to_timestamp"===e.name)return new Ud(e);if("timestamp_to_unix_millis"===e.name)return new qd(e);if("unix_seconds_to_timestamp"===e.name)return new Vd(e);if("timestamp_to_unix_seconds"===e.name)return new Kd(e);if("timestamp_add"===e.name)return new Qd(e);if("timestamp_subtract"===e.name)return new Wd(e)}throw new Error(`Unknown Expr : ${e}`)}class fC{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ca)return lC.newValue({referenceValue:bc(e.serializer,t.key)});if("__update_time__"===this.expr.fieldName)return lC.newValue({timestampValue:wc(e.serializer,t.version)});if("__create_time__"===this.expr.fieldName)return lC.newValue({timestampValue:wc(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Ua(n)?lC.newValue(function(e,t){if("estimate"===e.serverTimestampBehavior)return{timestampValue:wc(e.serializer,hu.fromTimestamp(Ja(t)))};if("previous"===e.serverTimestampBehavior){const e=Va(t);if(e)return e}return{nullValue:"NULL_VALUE"}}(e,n)):lC.newValue(n):lC.Mi()}}class pC{constructor(e){this.expr=e}evaluate(e,t){return lC.newValue(this.expr._getValue())}}class gC{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.di.map(n=>dC(n).evaluate(e,t));return n.some(e=>e.Bi())?lC.Oi():lC.newValue({arrayValue:{values:n.map(e=>e.value)}})}}function mC(e){return $o(e)?Number(e.doubleValue):Number(e.integerValue)}function EC(e){return BigInt(e.integerValue)}const DC=BigInt("0x7fffffffffffffff"),wC=-BigInt("0x8000000000000000");class yC{constructor(e){this.expr=e}evaluate(e,t){zi(this.expr.params.length>=2,24778);const n=dC(this.expr.params[0]).evaluate(e,t),r=dC(this.expr.params[1]).evaluate(e,t);let s=this.$i(n,r);for(const n of this.expr.params.slice(2)){const r=dC(n).evaluate(e,t);s=this.$i(s,r)}return s}$i(e,t){if(e.Bi()||t.Bi())return lC.Oi();if(e.Li()||t.Li())return lC.Ni();const n=e.value,r=t.value;if(!$o(n)&&!Yo(n)||!$o(r)&&!Yo(r))return lC.Oi();if($o(n)||$o(r)){const e=this.Ui(n,r);return e?lC.newValue(e):lC.Oi()}if(Yo(n)&&Yo(r)){const e=this.ki(n,r);return void 0===e?lC.Oi():"number"==typeof e?lC.newValue({doubleValue:e}):e<wC||e>DC?lC.Oi():lC.newValue({integerValue:`${e}`})}return lC.Oi()}}function _C(e,t){return No(e)!==No(t)?"TYPE_MISMATCH":rB(e)||rB(t)?"NOT_EQ":nB(e)&&nB(t)?"EQ":nB(e)||nB(t)?"NULL":tB(e)&&tB(t)?function(e,t){if(e.values?.length!==t.values?.length)return"NOT_EQ";let n=!1;for(let r=0;r<(e.values?.length??0);r++){const s=e.values[r],i=t.values[r];switch(_C(s,i)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":n=!0;break;default:qi(44609,{Qi:s,qi:i})}}return n?"NULL":"EQ"}(e.arrayValue,t.arrayValue):aB(e)&&aB(t)||sB(e)&&sB(t)?function(e,t){const n=e.fields||{},r=t.fields||{};if(pa(n)!==pa(r))return"NOT_EQ";let s=!1;for(const e in n)if(n.hasOwnProperty(e)){if(void 0===r[e])return"NOT_EQ";switch(_C(n[e],r[e])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0}}return s?"NULL":"EQ"}(e.mapValue,t.mapValue):function(e,t){return Oo(e,t,{be:!1,ye:!0,we:!0})}(e,t)?"EQ":"NOT_EQ"}class IC extends yC{ki(e,t){return EC(e)+EC(t)}Ui(e,t){return{doubleValue:mC(e)+mC(t)}}}class vC extends yC{constructor(e){super(e),this.expr=e}ki(e,t){return EC(e)-EC(t)}Ui(e,t){return{doubleValue:mC(e)-mC(t)}}}class bC extends yC{constructor(e){super(e),this.expr=e}ki(e,t){return EC(e)*EC(t)}Ui(e,t){return{doubleValue:mC(e)*mC(t)}}}class TC extends yC{constructor(e){super(e),this.expr=e}ki(e,t){const n=EC(t);if(n!==BigInt(0))return EC(e)/n}Ui(e,t){const n=mC(t);return 0===n?{doubleValue:no(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:mC(e)/n}}}class AC extends yC{constructor(e){super(e),this.expr=e}ki(e,t){const n=EC(t);if(n!==BigInt(0))return EC(e)%n}Ui(e,t){const n=mC(t);if(0!==n)return{doubleValue:mC(e)%n}}}class NC{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=dC(s).evaluate(e,t);switch(i.type){case"BOOLEAN":if(!i.value?.booleanValue)return lC.newValue(Ao);break;case"NULL":r=!0;break;default:n=!0}}return n?lC.Oi():r?lC.Ni():lC.newValue(To)}}class OC{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,9634);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return lC.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return lC.Ni();default:return lC.Oi()}}}class SC{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=dC(s).evaluate(e,t);switch(i.type){case"BOOLEAN":if(i.value?.booleanValue)return lC.newValue(To);break;case"NULL":r=!0;break;default:n=!0}}return n?lC.Oi():r?lC.Ni():lC.newValue(Ao)}}class FC{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=dC(s).evaluate(e,t);switch(i.type){case"BOOLEAN":n=FC.xor(n,!!i.value?.booleanValue);break;case"NULL":r=!0;break;default:return lC.Oi()}}return r?lC.Ni():lC.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class LC{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,55094);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return lC.Oi()}if(n)return lC.Ni();for(const e of s.value?.arrayValue?.values??[])switch(nB(r.value)&&nB(e)?"EQ":_C(r.value,e)){case"EQ":return lC.newValue(To);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:qi(44608,{value:r.value,candidate:e})}return n?lC.Ni():lC.newValue(Ao)}}class RC{constructor(e){this.expr=e}evaluate(e,t){return new OC(new Mh("not",[new Mh("equal_any",this.expr.params)])).evaluate(e,t)}}class xC{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,23322);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return lC.newValue(Ao);case"DOUBLE":return lC.newValue({booleanValue:isNaN(mC(n.value))});case"NULL":return lC.Ni();default:return lC.Oi()}}}class kC{constructor(e){this.expr=e}evaluate(e,t){return zi(1===this.expr.params.length,50406),new OC(new Mh("not",[new Mh("is_nan",this.expr.params)])).evaluate(e,t)}}class PC{constructor(e){this.expr=e}evaluate(e,t){switch(zi(1===this.expr.params.length,23123),dC(this.expr.params[0]).evaluate(e,t).type){case"NULL":return lC.newValue(To);case"UNSET":case"ERROR":return lC.Oi();default:return lC.newValue(Ao)}}}class MC{constructor(e){this.expr=e}evaluate(e,t){return zi(1===this.expr.params.length,23167),new OC(new Mh("not",[new Mh("is_null",this.expr.params)])).evaluate(e,t)}}class GC{constructor(e){this.expr=e}evaluate(e,t){return zi(1===this.expr.params.length,5228),"ERROR"===dC(this.expr.params[0]).evaluate(e,t).type?lC.newValue(To):lC.newValue(Ao)}}class HC{constructor(e){this.expr=e}evaluate(e,t){switch(zi(1===this.expr.params.length,6877),dC(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return lC.Oi();case"UNSET":return lC.newValue(Ao);default:return lC.newValue(To)}}}class UC{constructor(e){this.expr=e}evaluate(e,t){zi(3===this.expr.params.length,11706);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?dC(this.expr.params[1]).evaluate(e,t):dC(this.expr.params[2]).evaluate(e,t);case"NULL":return dC(this.expr.params[2]).evaluate(e,t);default:return lC.Oi()}}}class VC{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>dC(n).evaluate(e,t));let r;for(const e of n)switch(e.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=void 0===r||Fo(e.value,r.value)>0?e:r}return void 0===r?lC.Ni():r}}class JC{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>dC(n).evaluate(e,t));let r;for(const e of n)switch(e.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=void 0===r||Fo(e.value,r.value)<0?e:r}return void 0===r?lC.Ni():r}}class jC{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,31033,`${this.expr.name}() function should have exactly 2 params`);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return lC.Oi()}const r=dC(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return lC.Oi()}return this.Ki(n,r)}}class qC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){if(e.Li()&&t.Li())return lC.newValue(To);if(e.Li()||t.Li())return lC.newValue(Ao);if(rB(e.value)||rB(t.value))return lC.newValue(Ao);if(No(e.value)!==No(t.value))return lC.newValue(Ao);switch(_C(e.value,t.value)){case"EQ":return lC.newValue(To);case"NOT_EQ":return lC.newValue(Ao);case"NULL":return lC.Ni();default:qi(44615,{left:e,right:t})}}}class KC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){switch(_C(e.value,t.value)){case"EQ":return lC.newValue(Ao);case"NOT_EQ":case"TYPE_MISMATCH":return lC.newValue(To);case"NULL":return lC.Ni();default:qi(44614,{left:e,right:t})}}}class zC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){return No(e.value)!==No(t.value)||rB(e.value)||rB(t.value)?lC.newValue(Ao):lC.newValue({booleanValue:Fo(e.value,t.value)<0})}}class QC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){return No(e.value)!==No(t.value)||rB(e.value)||rB(t.value)?lC.newValue(Ao):"EQ"===_C(e.value,t.value)?lC.newValue(To):lC.newValue({booleanValue:Fo(e.value,t.value)<0})}}class WC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){return No(e.value)!==No(t.value)||rB(e.value)||rB(t.value)?lC.newValue(Ao):lC.newValue({booleanValue:Fo(e.value,t.value)>0})}}class YC extends jC{constructor(e){super(e),this.expr=e}Ki(e,t){return No(e.value)!==No(t.value)||rB(e.value)||rB(t.value)?lC.newValue(Ao):"EQ"===_C(e.value,t.value)?lC.newValue(To):lC.newValue({booleanValue:Fo(e.value,t.value)>0})}}class $C{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class XC{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,216);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return lC.Ni();case"ARRAY":{const e=n.value.arrayValue?.values??[];return lC.newValue({arrayValue:{values:[...e].reverse()}})}default:return lC.Oi()}}}class ZC{constructor(e){this.expr=e}evaluate(e,t){return zi(2===this.expr.params.length,52884),new LC(new Mh("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class ed{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,1392);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return lC.Oi()}if(n)return lC.Ni();const i=s.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const e of i){let t=!1;n=!1;for(const r of a){switch(nB(e)&&nB(r)?"EQ":_C(e,r)){case"EQ":t=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:qi(44613,{value:r,search:e})}if(t)break}if(!t)return lC.newValue(Ao)}return lC.newValue(To)}}class td{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,2680);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return lC.Oi()}if(n)return lC.Ni();const i=s.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const e of a)for(const t of i)switch(nB(e)&&nB(t)?"EQ":_C(e,t)){case"EQ":return lC.newValue(To);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:qi(60403,{value:e,search:t})}return n?lC.Ni():lC.newValue(Ao)}}class nd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,38605);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return lC.Ni();case"ARRAY":return lC.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return lC.Oi()}}}class rd{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class sd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,1508);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return lC.Ni();case"BYTES":{const e=n.value?.bytesValue;if("string"==typeof e){const t=Fa.fromBase64String(e).toUint8Array();return t.reverse(),lC.newValue({bytesValue:Fa.fromUint8Array(t).toBase64()})}return lC.newValue({bytesValue:new Uint8Array(e).reverse()})}case"STRING":{const e=n.value?.stringValue,t=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(e),r=Array.from(t,e=>e.segment).reverse();return lC.newValue({stringValue:r.join("")})}default:return lC.Oi()}}}class id{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ad{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class od{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,19400);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return lC.Ni();case"STRING":{const e=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);if(void 0===r)return;if(r<=65535)if(r>=55296&&r<=57343)if(r<=56319){const r=e.codePointAt(n+1);void 0!==r&&r>=56320&&r<=57343?(t+=1,n++):t+=1}else t+=1;else t+=1;else{if(!(r<=1114111))return;t+=1,n++}}return t}(n.value.stringValue);return void 0===e?lC.Oi():lC.newValue({integerValue:e})}default:return lC.Oi()}}}class Bd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,8486);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const e=n.value?.bytesValue;return"string"==typeof e?lC.newValue({integerValue:Fa.fromBase64String(e).toUint8Array().length}):lC.newValue({integerValue:new Uint8Array(e).length})}case"STRING":{const e=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);if(void 0===r)return;if(r>=55296&&r<=57343){if(!(r<=56319))return;{const r=e.codePointAt(n+1);if(void 0===r||!(r>=56320&&r<=57343))return;t+=4,n++}}else if(r<=127)t+=1;else if(r<=2047)t+=2;else if(r<=65535)t+=3;else{if(!(r<=1114111))return;t+=4,n++}}return t}(n.value?.stringValue);return void 0===e?lC.Oi():lC.newValue({integerValue:e})}case"NULL":return lC.Ni();default:return lC.Oi()}}}class ud{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return lC.Oi()}return n?lC.Ni():this.Wi(r.value?.stringValue,s.value?.stringValue)}}class cd extends ud{Wi(e,t){try{const n=function(e){let t="";for(let n=0;n<e.length;n++){const r=e.charAt(n);switch(r){case"_":t+=".";break;case"%":t+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":t+="\\"+r;break;default:t+=r}}return"^"+t+"$"}(t),r=Pi.compile(n);return lC.newValue({booleanValue:r.matches(e)})}catch(e){return Ji(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${e}`),lC.Oi()}}}class ld extends ud{Wi(e,t){try{const n=Pi.compile(t);return lC.newValue({booleanValue:n.test(e)})}catch(e){return Ji(`Invalid regex pattern found in regex_contains: ${t}, returning error`),lC.Oi()}}}class hd extends ud{Wi(e,t){try{return lC.newValue({booleanValue:Pi.compile(t).matches(e)})}catch(e){return Ji(`Invalid regex pattern found in regex_match: ${t}, returning error`),lC.Oi()}}}class Cd extends ud{Wi(e,t){return lC.newValue({booleanValue:e.includes(t)})}}class dd extends ud{Wi(e,t){return lC.newValue({booleanValue:e.startsWith(t)})}}class fd extends ud{Wi(e,t){return lC.newValue({booleanValue:e.endsWith(t)})}}class pd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,29079);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return lC.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return lC.Ni();default:return lC.Oi()}}}class gd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,60487);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return lC.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return lC.Ni();default:return lC.Oi()}}}class md{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,28544);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return lC.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return lC.Ni();default:return lC.Oi()}}}class Ed{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>dC(n).evaluate(e,t));let r="",s=!1;for(const e of n)switch(e.type){case"STRING":r+=e.value.stringValue;break;case"NULL":s=!0;break;default:return lC.Oi()}return s?lC.Ni():lC.newValue({stringValue:r})}}class Dd{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,4483);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return lC.Mi();case"MAP":break;default:return lC.Oi()}const r=dC(this.expr.params[1]).evaluate(e,t);if("STRING"!==r.type)return lC.Oi();const s=n.value?.mapValue?.fields?.[r.value?.stringValue];return void 0===s?lC.Mi():lC.newValue(s)}}class wd{constructor(e){this.expr=e}evaluate(e,t){zi(2===this.expr.params.length,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return lC.Oi()}if(n)return lC.Ni();const i=oB(r.value),a=oB(s.value);if(void 0===i||void 0===a||i.values?.length!==a.values?.length)return lC.Oi();const o=this.Gi(i,a);return void 0===o||isNaN(o)?lC.Oi():lC.newValue({doubleValue:o})}}class yd extends wd{Gi(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return;let s=0,i=0,a=0;for(let e=0;e<n.length;e++){if(!eB(n[e])||!eB(r[e]))return;const t=mC(n[e]),o=mC(r[e]);s+=t*o,i+=t*t,a+=o*o}const o=Math.sqrt(i)*Math.sqrt(a);return 0!==o?1-Math.max(-1,Math.min(1,s/o)):void 0}}class _d extends wd{Gi(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return 0;let s=0;for(let e=0;e<n.length;e++){if(!eB(n[e])||!eB(r[e]))return;s+=mC(n[e])*mC(r[e])}return s}}class Id extends wd{Gi(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return 0;let s=0;for(let e=0;e<n.length;e++){if(!eB(n[e])||!eB(r[e]))return;const t=mC(n[e]),i=mC(r[e]);s+=Math.pow(t-i,2)}return Math.sqrt(s)}}class vd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,39044);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const e=oB(n.value);return lC.newValue({integerValue:e?.values?.length??0})}case"NULL":return lC.Ni();default:return lC.Oi()}}}const bd=BigInt(-62135596800),Td=BigInt(253402300799),Ad=BigInt(1e3),Nd=BigInt(1e6),Od=bd*Ad,Sd=Td*Ad+BigInt(999),Fd=bd*Nd,Ld=Td*Nd+BigInt(999999);function Rd(e){return e>=Fd&&e<=Ld}function xd(e){return e>=bd&&e<=Td}function kd(e,t){const n=BigInt(e);return!(n<bd||n>Td||t<0||t>=1e9||n===bd&&0!==t||n===Td&&t>999999999)}function Pd(e,t){return t<0?{seconds:e-1,nanos:t+1e9}:{seconds:e,nanos:t}}function Md(e){return BigInt(e.seconds)*Nd+BigInt(Math.trunc(e.nanoseconds/1e3))}class Gd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,49262,`${this.expr.name}() function should have exactly one parameter`);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return lC.Ni();default:return lC.Oi()}}}class Hd extends Gd{toTimestamp(e){if(!Rd(e))return lC.Oi();let t=Number(e/Nd),n=Number(e%Nd*BigInt(1e3));const r=Pd(t,n);return t=r.seconds,n=r.nanos,kd(t,n)?lC.newValue({timestampValue:{seconds:t,nanos:n}}):lC.Oi()}}class Ud extends Gd{toTimestamp(e){if(!function(e){return e>=Od&&e<=Sd}(e))return lC.Oi();let t=Number(e/Ad),n=Number(e%Ad*BigInt(1e6));const r=Pd(t,n);return t=r.seconds,n=r.nanos,kd(t,n)?lC.newValue({timestampValue:{seconds:t,nanos:n}}):lC.Oi()}}class Vd extends Gd{toTimestamp(e){if(!xd(e))return lC.Oi();const t=Number(e);return lC.newValue({timestampValue:{seconds:t,nanos:0}})}}class Jd{constructor(e){this.expr=e}evaluate(e,t){zi(1===this.expr.params.length,1265,`${this.expr.name}() function should have exactly one parameter`);const n=dC(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return lC.Ni();default:return lC.Oi()}const r=Ec(n.value.timestampValue);return kd(r.seconds,r.nanoseconds)?this.ji(r):lC.Oi()}}class jd extends Jd{ji(e){const t=Md(e);return Rd(t)?lC.newValue({integerValue:`${t.toString()}`}):lC.Oi()}}class qd extends Jd{ji(e){const t=Md(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?lC.newValue({integerValue:n.toString()}):lC.newValue({integerValue:(n-BigInt(1)).toString()})}}class Kd extends Jd{ji(e){const t=BigInt(e.seconds);return xd(t)?lC.newValue({integerValue:t.toString()}):lC.Oi()}}class zd{constructor(e){this.expr=e}evaluate(e,t){zi(3===this.expr.params.length,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=dC(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return lC.Oi()}const s=dC(this.expr.params[1]).evaluate(e,t);let i;switch(s.type){case"STRING":if(i=function(e){switch(e){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),void 0===i)return lC.Oi();break;case"NULL":n=!0;break;default:return lC.Oi()}const a=dC(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return lC.Oi()}if(n)return lC.Ni();const o=BigInt(a.value.integerValue);let B;try{switch(i){case"microsecond":B=o;break;case"millisecond":B=o*BigInt(1e3);break;case"second":B=o*BigInt(1e6);break;case"minute":B=o*BigInt(6e7);break;case"hour":B=o*BigInt(36e8);break;case"day":B=o*BigInt(864e8);break;default:return lC.Oi()}if("microsecond"!==i&&o!==BigInt(0)&&B/o!==BigInt(this.zi(i)))return lC.Oi()}catch(e){return Ji(`Error during timestamp arithmetic: ${e}`),lC.Oi()}const u=Ec(r.value.timestampValue);if(!kd(u.seconds,u.nanoseconds))return lC.Oi();const c=Md(u),l=this.Hi(c,B);if(!Rd(l))return lC.Oi();const h=Number(l/Nd),C=l%Nd,d=Number((C<0?C+Nd:C)*BigInt(1e3)),f=C<0?h-1:h;return kd(f,d)?lC.newValue({timestampValue:{seconds:f,nanos:d}}):lC.Oi()}zi(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class Qd extends zd{Hi(e,t){return e+t}}class Wd extends zd{Hi(e,t){return e-t}}function Yd(e){if((e=CC(e))instanceof Lh)return`fld(${e.fieldName})`;if(e instanceof xh)return`cst(${function(e){return null===e?"null":"number"==typeof e?e.toString():"string"==typeof e?`"${e}"`:e instanceof th?`ref(${e.path})`:e instanceof ah?`vec(${JSON.stringify(e)})`:JSON.stringify(e)}(e.value)})`;if(e instanceof Mh)return`fn(${e.name},[${e.params.map(Yd).join(",")}])`;if("ListOfExpressions"===e.expressionType)return`list([${e.di.map(Yd).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(e,null,2)}`)}function $d(e){if(e instanceof qh)return`${e._name}(${Xd(e.fields)})`;if(e instanceof Kh){let t=`${e._name}(${Xd(e.accumulators)})`;return e.groups.size>0&&(t+=`grouping(${Xd(e.groups)})`),t}if(e instanceof zh)return`${e._name}(${Xd(e.groups)})`;if(e instanceof Qh)return`${e._name}(${e.pi})`;if(e instanceof Wh)return`${e._name}(${e.collectionId})`;if(e instanceof Yh)return`${e._name}()`;if(e instanceof $h)return`${e._name}(${e.gi.sort()})`;if(e instanceof Xh)return`${e._name}(${Yd(e.condition)})`;if(e instanceof Zh)return`${e._name}(${e.limit})`;if(e instanceof nC)return`${e._name}(${function(e){return e.map(e=>`${Yd(e.expr)}${e.direction}`).join(",")}(e.orderings)})`;throw new Error(`Unrecognized stage ${e._name}`)}function Xd(e){return`${Array.from(e.entries()).sort().map(([e,t])=>`${e}=${Yd(t)}`).join(",")}`}function Zd(e){return e.stages.map(e=>$d(e)).join("|")}function ef(e,t){return Zd(e)===Zd(t)}function tf(e){return e instanceof aC}function nf(e){return tf(e)?Zd(e):Su(e)}function rf(e){return tf(e)?Zd(e):function(e){return`${Eu(Au(e))}|lt:${e.limitType}`}(e)}function sf(e,t){return e instanceof aC&&t instanceof aC?ef(e,t):!(e instanceof aC&&!(t instanceof aC)||!(e instanceof aC)&&t instanceof aC)&&function(e,t){return Du(Au(e),Au(t))&&e.limitType===t.limitType}(e,t)}function af(e){return wu(e)?Zd(e):Eu(e)}function of(e,t){return e instanceof aC&&t instanceof aC?ef(e,t):!(e instanceof aC&&!(t instanceof aC)||!(e instanceof aC)&&t instanceof aC)&&Du(e,t)}function Bf(e,t){const n=function(e){let t=!1;const n=[];for(const r of e)if(r instanceof nC)if(t=!0,r.orderings.some(e=>e.expr instanceof Lh&&e.expr.fieldName===ca))n.push(r);else{const e=r.orderings.map(e=>e);e.push(Rh(ca).ascending()),n.push(new nC(e,{}))}else r instanceof Zh?(t||(n.push(new nC([Rh(ca).ascending()],{})),t=!0),n.push(r)):n.push(r);return t||n.push(new nC([Rh(ca).ascending()],{})),n}(e.stages);if(e.userDataReader){const t=e.userDataReader.createContext(3,"toCorePipeline");n.forEach(e=>e._readUserData(t))}return new aC(e.userDataReader.serializer,n,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&RB(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=xB(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=xB(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ku();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=t.has(r.key)?null:a;const o=LB(i,a);null!==o&&n.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(hu.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Yu())}isEqual(e){return this.batchId===e.batchId&&na(this.mutations,e.mutations,(e,t)=>PB(e,t))&&na(this.baseMutations,e.baseMutations,(e,t)=>PB(e,t))}}class cf{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){zi(e.mutations.length===n.length,58842,{Ji:e.mutations.length,Yi:n.length});let r=Qu;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new cf(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function hf(e){return e+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,n,r,s=hu.min(),i=hu.min(),a=Fa.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new df(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new df(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new df(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new df(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.Xi=e}}function pf(e){const t=Rc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ou(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.d_=new mf}addToCollectionParentIndex(e,t){return this.d_.add(t),Vl.resolve()}getCollectionParents(e,t){return Vl.resolve(this.d_.getEntries(t))}addFieldIndex(e,t){return Vl.resolve()}deleteFieldIndex(e,t){return Vl.resolve()}deleteAllFieldIndexes(e){return Vl.resolve()}createTargetIndexes(e,t){return Vl.resolve()}getDocumentsMatchingTarget(e,t){return Vl.resolve(null)}getIndexType(e,t){return Vl.resolve(0)}getFieldIndexes(e,t){return Vl.resolve([])}getNextCollectionGroupToUpdate(e){return Vl.resolve(null)}getMinOffset(e,t){return Vl.resolve(fu.min())}getMinOffsetFromCollectionGroup(e,t){return Vl.resolve(fu.min())}updateCollectionGroup(e,t,n){return Vl.resolve()}updateIndexEntries(e,t){return Vl.resolve()}}class mf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new aa(ha.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new aa(ha.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.K_=e}next(){return this.K_+=2,this.K_}static W_(){return new Ef(0)}static G_(){return new Ef(-1)}}
// Copyright 2024 Google LLC* @license
function Df(e,t){let n=t;for(const t of e.stages)n=yf({serializer:e.serializer,serverTimestampBehavior:e.listenOptions?.serverTimestampBehavior},t,n);return n}function wf(e,t){return Df(e,[t]).length>0}function yf(e,t,n){if(t instanceof Qh)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&`/${e.key.getCollectionPath().canonicalString()}`===t.pi)}(0,t,n);if(t instanceof Xh)return function(e,t,n){return n.filter(n=>{const r=hC(dC(t.condition).evaluate(e,n));return void 0!==r&&Oo(r,To)})}(e,t,n);if(t instanceof Wh)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&e.key.getCollectionPath().lastSegment()===t.collectionId)}(0,t,n);if(t instanceof Yh)return function(e,t,n){return n.filter(e=>e.isFoundDocument())}(0,0,n);if(t instanceof $h)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&t.yi.has(e.key.path.toStringWithLeadingSlash()))}(0,t,n);if(t instanceof Zh)return function(e,t,n){return n.slice(0,t.limit)}(0,t,n);if(t instanceof nC)return function(e,t,n){const r=t.orderings.map(e=>({eo:dC(e.expr),direction:e.direction}));return[...n].sort((t,n)=>{for(const{eo:s,direction:i}of r){const r=hC(s.evaluate(e,t)),a=hC(s.evaluate(e,n)),o=Fo(r??Do,a??Do);if(0!==o)return"ascending"===i?o:-o}return 0})}(e,t,n);throw new Error(`Unknown stage: ${t._name}`)}function _f(e){const t=function(e){for(let t=e.stages.length-1;t>=0;t--){const n=e.stages[t];if(n instanceof nC)return n.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(e);return(n,r)=>{for(const s of t){const t=hC(dC(s.expr).evaluate({serializer:e.serializer},n)),i=hC(dC(s.expr).evaluate({serializer:e.serializer},r)),a=Fo(t||Do,i||Do);if(0!==a)return"ascending"===s.direction?a:-a}return 0}}function If(e){for(let t=e.stages.length-1;t>=0;t--){const n=e.stages[t];if(n instanceof Zh)return{limit:n.limit}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.changes=new Gu(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Cu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Vl.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&xB(n.mutation,e,fa.empty(),Oa.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Yu()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Yu()){const r=qu();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Ju();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=qu();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Yu()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=Uu();const i=zu(),a=zu();return t.forEach((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof GB)?s=s.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),xB(a.mutation,t,a.mutation.getFieldMask(),Oa.now())):i.set(t.key,fa.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>a.set(e,new bf(t,i.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){const n=zu();let r=new ra((e,t)=>e-t),s=Yu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||fa.empty();a=s.applyToLocalView(i,a),n.set(e,a);const o=(r.get(s.batchId)||Yu()).add(e);r=r.insert(s.batchId,o)})}).next(()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,B=r.value,u=Ku();B.forEach(e=>{if(!s.has(e)){const r=LB(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Vl.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return tf(t)?this.getDocumentsMatchingPipeline(e,t,n,r):function(e){return Ea.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Vl.resolve(qu());let a=-1,o=s;return i.next(t=>Vl.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),s.get(t)?Vl.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,Yu())).next(e=>({batchId:a,changes:ju(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ea(t)).next(e=>{let t=Ju();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=Ju();return this.indexManager.getCollectionParents(e,s).next(a=>Vl.forEach(a,a=>{const o=function(e,t){return new _u(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>this.retrieveMatchingLocalDocuments(s,e,e=>Fu(t,e)))}getDocumentsMatchingPipeline(e,t,n,r){if("collection_group"===oC(t)){const s=uC(t);let i=Ju();return this.indexManager.getCollectionParents(e,s).next(a=>Vl.forEach(a,a=>{const o=function(e,t){const n=e.stages.map(e=>e instanceof Wh?new Qh(t.canonicalString(),{}):e);return new aC(e.serializer,n)}(t,a.child(s));return this.getDocumentsMatchingPipeline(e,o,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}{let s;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(i=>{switch(s=i,oC(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r);case"documents":let i=Yu();for(const e of cC(t))i=i.add(Ea.fromPath(e));return this.remoteDocumentCache.getEntries(e,i);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new ua("invalid-argument",`Invalid pipeline source to execute offline: ${Zd(t)}`)}}).next(e=>this.retrieveMatchingLocalDocuments(s,e,e=>wf(t,e)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Cu.newInvalidDocument(r)))});let r=Ju();return t.forEach((t,s)=>{const i=e.get(t);void 0!==i&&xB(i.mutation,s,fa.empty(),Oa.now()),n(s)&&(r=r.insert(t,s))}),r}getOverlaysForPipeline(e,t,n){switch(oC(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ha.fromString(BC(t)),n);case"collection_group":throw new ua("invalid-argument",`Unexpected collection group pipeline: ${Zd(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,cC(t).map(e=>Ea.fromPath(e)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new ua("invalid-argument",`Failed to get overlays for pipeline: ${Zd(t)}`)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.serializer=e,this.co=new Map,this.lo=new Map}getBundleMetadata(e,t){return Vl.resolve(this.co.get(t))}saveBundleMetadata(e,t){return this.co.set(t.id,function(e){return{id:e.id,version:e.version,createTime:yc(e.createTime)}}(t)),Vl.resolve()}getNamedQuery(e,t){return Vl.resolve(this.lo.get(t))}saveNamedQuery(e,t){return this.lo.set(t.name,function(e){return{name:e.name,query:pf(e.bundledQuery),readTime:yc(e.readTime)}}(t)),Vl.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.overlays=new ra(Ea.comparator),this.Eo=new Map}getOverlay(e,t){return Vl.resolve(this.overlays.get(t))}getOverlays(e,t){const n=qu();return Vl.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}getAllOverlays(e,t){const n=qu();return this.overlays.forEach((e,r)=>{r.largestBatchId>t&&n.set(e,r)}),Vl.resolve(n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Es(e,t,r)}),Vl.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Eo.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Eo.delete(n)),Vl.resolve()}getOverlaysForCollection(e,t,n){const r=qu(),s=t.length+1,i=new Ea(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Vl.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new ra((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=qu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=qu(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return Vl.resolve(a)}Es(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Eo.get(r.largestBatchId).delete(n.key);this.Eo.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Cf(t,n));let s=this.Eo.get(t);void 0===s&&(s=Yu(),this.Eo.set(t,s)),this.Eo.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.sessionToken=Fa.EMPTY_BYTE_STRING}getSessionToken(e){return Vl.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Vl.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.ho=new aa(Ff.To),this.Po=new aa(Ff.Io)}isEmpty(){return this.ho.isEmpty()}addReference(e,t){const n=new Ff(e,t);this.ho=this.ho.add(n),this.Po=this.Po.add(n)}Ro(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ao(new Ff(e,t))}Vo(e,t){e.forEach(e=>this.removeReference(e,t))}fo(e){const t=new Ea(new ha([])),n=new Ff(t,e),r=new Ff(t,e+1),s=[];return this.Po.forEachInRange([n,r],e=>{this.Ao(e),s.push(e.key)}),s}mo(){this.ho.forEach(e=>this.Ao(e))}Ao(e){this.ho=this.ho.delete(e),this.Po=this.Po.delete(e)}po(e){const t=new Ea(new ha([])),n=new Ff(t,e),r=new Ff(t,e+1);let s=Yu();return this.Po.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new Ff(e,0),n=this.ho.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ff{constructor(e,t){this.key=e,this.yo=t}static To(e,t){return Ea.comparator(e.key,t.key)||$i(e.yo,t.yo)}static Io(e,t){return $i(e.yo,t.yo)||Ea.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.rs=1,this.wo=new aa(Ff.To)}checkEmpty(e){return Vl.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.rs;this.rs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new uf(s,t,n,r);this.mutationQueue.push(i);for(const t of r)this.wo=this.wo.add(new Ff(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Vl.resolve(i)}lookupMutationBatch(e,t){return Vl.resolve(this.bo(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.So(n),s=r<0?0:r;return Vl.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Vl.resolve(0===this.mutationQueue.length?-1:this.rs-1)}getAllMutationBatches(e){return Vl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ff(t,0),r=new Ff(t,Number.POSITIVE_INFINITY),s=[];return this.wo.forEachInRange([n,r],e=>{const t=this.bo(e.yo);s.push(t)}),Vl.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new aa($i);return t.forEach(e=>{const t=new Ff(e,0),r=new Ff(e,Number.POSITIVE_INFINITY);this.wo.forEachInRange([t,r],e=>{n=n.add(e.yo)})}),Vl.resolve(this.xo(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Ea.isDocumentKey(s)||(s=s.child(""));const i=new Ff(new Ea(s),0);let a=new aa($i);return this.wo.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.yo)),!0)},i),Vl.resolve(this.xo(a))}xo(e){const t=[];return e.forEach(e=>{const n=this.bo(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){zi(0===this.vo(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.wo;return Vl.forEach(t.mutations,r=>{const s=new Ff(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wo=n})}us(e){}containsKey(e,t){const n=new Ff(t,0),r=this.wo.firstAfterOrEqual(n);return Vl.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Vl.resolve()}vo(e,t){return this.So(e)}So(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}bo(e){const t=this.So(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.Do=e,this.docs=new ra(Ea.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Do(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Vl.resolve(n?n.document.mutableCopy():Cu.newInvalidDocument(t))}getEntries(e,t){let n=Uu();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Cu.newInvalidDocument(e))}),Vl.resolve(n)}getAllEntries(e){let t=Uu();return this.docs.forEach((e,n)=>{t=t.insert(e,n.document)}),Vl.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let s,i;tf(t)?(s=ha.fromString(BC(t)),i=e=>wf(t,e)):(s=t.path,i=e=>Fu(t,e));let a=Uu();const o=new Ea(s.child("__id-9223372036854775808__")),B=this.docs.getIteratorFrom(o);for(;B.hasNext();){const{key:e,value:{document:t}}=B.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||pu(du(t),n)<=0||(r.has(t.key)||i(t))&&(a=a.insert(t.key,t.mutableCopy()))}return Vl.resolve(a)}getAllFromCollectionGroup(e,t,n,r){qi(9500)}Co(e,t){return Vl.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new xf(this)}getSize(e){return Vl.resolve(this.size)}}class xf extends vf{constructor(e){super(),this.ao=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ao.addEntry(e,r)):this.ao.removeEntry(n)}),Vl.waitFor(t)}getFromCache(e,t){return this.ao.getEntry(e,t)}getAllFromCache(e,t){return this.ao.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.persistence=e,this.Fo=new Gu(e=>af(e),of),this.lastRemoteSnapshotVersion=hu.min(),this.highestTargetId=0,this.Oo=0,this.Mo=new Sf,this.targetCount=0,this.No=Ef.W_()}forEachTarget(e,t){return this.Fo.forEach((e,n)=>t(n)),Vl.resolve()}getLastRemoteSnapshotVersion(e){return Vl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Vl.resolve(this.Oo)}allocateTargetId(e){return this.highestTargetId=this.No.next(),Vl.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Oo&&(this.Oo=t),Vl.resolve()}H_(e){this.Fo.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.No=new Ef(t),this.highestTargetId=t),e.sequenceNumber>this.Oo&&(this.Oo=e.sequenceNumber)}addTargetData(e,t){return this.H_(t),this.targetCount+=1,Vl.resolve()}updateTargetData(e,t){return this.H_(t),Vl.resolve()}removeTargetData(e,t){return this.Fo.delete(t.target),this.Mo.fo(t.targetId),this.targetCount-=1,Vl.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Fo.forEach((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Fo.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),Vl.waitFor(s).next(()=>r)}getTargetCount(e){return Vl.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fo.get(t)||null;return Vl.resolve(n)}addMatchingKeys(e,t,n){return this.Mo.Ro(t,n),Vl.resolve()}removeMatchingKeys(e,t,n){this.Mo.Vo(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Vl.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Mo.fo(t),Vl.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mo.po(t);return Vl.resolve(n)}containsKey(e,t){return Vl.resolve(this.Mo.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.Bo={},this.overlays={},this.Lo=new Gl(0),this.$o=!1,this.$o=!0,this.Uo=new Of,this.referenceDelegate=e(this),this.ko=new kf(this),this.indexManager=new gf,this.remoteDocumentCache=function(e){return new Rf(e)}(e=>this.referenceDelegate.Qo(e)),this.serializer=new ff(t),this.qo=new Af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$o=!1,Promise.resolve()}get started(){return this.$o}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Bo[e.toKey()];return n||(n=new Lf(t,this.referenceDelegate),this.Bo[e.toKey()]=n),n}getGlobalsCache(){return this.Uo}getTargetCache(){return this.ko}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qo}runTransaction(e,t,n){Ui("MemoryPersistence","Starting transaction:",e);const r=new Mf(this.Lo.next());return this.referenceDelegate.Ko(),n(r).next(e=>this.referenceDelegate.Wo(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Go(e,t){return Vl.or(Object.values(this.Bo).map(n=>()=>n.containsKey(e,t)))}}class Mf extends Hl{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.jo=new Sf,this.zo=null}static Ho(e){return new Gf(e)}get Jo(){if(this.zo)return this.zo;throw qi(60996)}addReference(e,t,n){return this.jo.addReference(n,t),this.Jo.delete(n.toString()),Vl.resolve()}removeReference(e,t,n){return this.jo.removeReference(n,t),this.Jo.add(n.toString()),Vl.resolve()}markPotentiallyOrphaned(e,t){return this.Jo.add(t.toString()),Vl.resolve()}removeTarget(e,t){this.jo.fo(t.targetId).forEach(e=>this.Jo.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jo.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ko(){this.zo=new Set}Wo(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Vl.forEach(this.Jo,n=>{const r=Ea.fromPath(n);return this.Yo(e,r).next(e=>{e||t.removeEntry(r,hu.min())})}).next(()=>(this.zo=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yo(e,t).next(e=>{e?this.Jo.delete(t.toString()):this.Jo.add(t.toString())})}Qo(e){return 0}Yo(e,t){return Vl.or([()=>Vl.resolve(this.jo.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Go(e,t)])}}class Hf{constructor(e,t){this.persistence=e,this.Zo=new Gu(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=hf(t)),t=lf(e.get(n),t);return hf(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new Ql(e,t)}(this,t)}static Ho(e,t){return new Hf(e,t)}Ko(){}Wo(e){return Vl.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Pi(e){const t=this.Y_(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Y_(e){let t=0;return this.Ii(e,e=>{t++}).next(()=>t)}Ii(e,t){return Vl.forEach(this.Zo,(n,r)=>this.X_(e,n,r).next(e=>e?Vl.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Co(e,r=>this.X_(e,r,t).next(e=>{e||(n++,s.removeEntry(r,hu.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.Zo.set(t,e.currentSequenceNumber),Vl.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),Vl.resolve()}removeReference(e,t,n){return this.Zo.set(n,e.currentSequenceNumber),Vl.resolve()}updateLimboDocument(e,t){return this.Zo.set(t,e.currentSequenceNumber),Vl.resolve()}Qo(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zo(e.data.value)),t}X_(e,t,n){return Vl.or([()=>this.persistence.Go(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.Zo.get(t);return Vl.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$a=n,this.Ua=r}static ka(e,t){let n=Yu(),r=Yu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Uf(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e,t){return Ea.comparator(e.key,t.key)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.Qa=!1,this.qa=!1,this.Ka=100,this.Wa=h()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(l())>0?6:4}initialize(e,t){this.Ga=e,this.indexManager=t,this.Qa=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.ja(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.za(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new Jf;return this.Ha(e,t,n).next(r=>{if(s.result=r,this.qa)return this.Ja(e,t,n,r.size)})}).next(()=>s.result)}Ja(e,t,n,r){return tf(t)?Vl.resolve():n.documentReadCount<this.Ka?(Hi()<=T.DEBUG&&Ui("QueryEngine","SDK will not create cache indexes for query:",Su(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ka,"documents"),Vl.resolve()):(Hi()<=T.DEBUG&&Ui("QueryEngine","Query:",Su(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wa*r?(Hi()<=T.DEBUG&&Ui("QueryEngine","The SDK decides to create cache indexes for query:",Su(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Au(t))):Vl.resolve())}ja(e,t){if(tf(t))return Vl.resolve(null);let n=t;if(vu(n))return Vl.resolve(null);let r=Au(n);return this.indexManager.getIndexType(e,r).next(t=>0===t?null:(null!==n.limit&&1===t&&(n=Ou(n,null,"F"),r=Au(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(t=>{const s=Yu(...t);return this.Ga.getDocuments(e,s).next(t=>this.indexManager.getMinOffset(e,r).next(r=>{const i=this.Ya(n,t);return this.Za(n,i,s,r.readTime)?this.ja(e,Ou(n,null,"F")):this.Xa(e,i,n,r)}))})))}za(e,t,n,r){return(tf(t)?function(e){for(const t of e.stages){if(t instanceof Zh||t instanceof eC)return!1;if(t instanceof Xh){if(t.condition instanceof Hh&&"exists"===t.condition._expr.name&&t.condition._expr.params[0]instanceof Lh&&t.condition._expr.params[0].fieldName===ca)continue;return!1}}return!0}(t):vu(t))||r.isEqual(hu.min())?Vl.resolve(null):this.Ga.getDocuments(e,n).next(s=>{const i=this.Ya(t,s);return this.Za(t,i,n,r)?Vl.resolve(null):(Hi()<=T.DEBUG&&Ui("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nf(t)),this.Xa(e,i,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=hu.fromTimestamp(1e9===r?new Oa(n+1,0):new Oa(n,r));return new fu(s,Ea.empty(),t)}(r,-1)).next(e=>e))})}Ya(e,t){let n,r;return tf(e)?(n=new aa(Vf),r=t=>wf(e,t)):(n=new aa(Lu(e)),r=t=>Fu(e,t)),t.forEach((e,t)=>{r(t)&&(n=n.add(t))}),n}Za(e,t,n,r){if(tf(e))return function(e){return e.stages.some(e=>e instanceof Zh||e instanceof eC)}(e);if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ha(e,t,n){return Hi()<=T.DEBUG&&Ui("QueryEngine","Using full collection scan to execute query:",nf(t)),this.Ga.getDocumentsMatchingQuery(e,t,fu.min(),n)}Xa(e,t,n,r){return this.Ga.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="LocalStore";class Kf{constructor(e,t,n,r){this.persistence=e,this.eu=t,this.serializer=r,this.tu=new ra($i),this.nu=new Gu(e=>af(e),of),this.ru=new Map,this.iu=e.getRemoteDocumentCache(),this.ko=e.getTargetCache(),this.qo=e.getBundleCache(),this.su(n)}su(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tf(this.iu,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.iu.setIndexManager(this.indexManager),this.eu.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.tu))}}async function zf(e,t){const n=Qi(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.su(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let a=Yu();for(const e of r){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next(e=>({_u:e,removedBatchIds:s,addedBatchIds:i}))})})}function Qf(e){const t=Qi(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ko.getLastRemoteSnapshotVersion(e))}function Wf(e,t){const n=Qi(e),r=t.snapshotVersion;let s=n.tu;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.iu.newChangeBuffer({trackRemovals:!0});s=n.tu;const a=[];t.targetChanges.forEach((i,o)=>{const B=s.get(o);if(!B)return;a.push(n.ko.removeMatchingKeys(e,i.removedDocuments,o).next(()=>n.ko.addMatchingKeys(e,i.addedDocuments,o)));let u=B.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(Fa.EMPTY_BYTE_STRING,hu.min()).withLastLimboFreeSnapshotVersion(hu.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(o,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(B,u,i)&&a.push(n.ko.updateTargetData(e,u))});let o=Uu(),B=Yu();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(function(e,t,n){let r=Yu(),s=Yu();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Uu();return n.forEach((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(hu.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Ui(qf,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)}),{ou:r,au:s}})}(e,i,t.documentUpdates).next(e=>{o=e.ou,B=e.au})),!r.isEqual(hu.min())){const t=n.ko.getLastRemoteSnapshotVersion(e).next(t=>n.ko.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return Vl.waitFor(a).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,B)).next(()=>o)}).then(e=>(n.tu=s,e))}function Yf(e,t){const n=Qi(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function $f(e,t,n){const r=Qi(e),s=r.tu.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Jl(e))throw e;Ui(qf,`Failed to update sequence numbers for target ${t}: ${e}`)}r.tu=r.tu.remove(t),r.nu.delete(s.target)}function Xf(e,t,n){const r=Qi(e);let s=hu.min(),i=Yu();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Qi(e),s=r.nu.get(n);return void 0!==s?Vl.resolve(r.tu.get(s)):r.ko.getTargetData(t,n)}(r,e,tf(t)?t:Au(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.ko.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.eu.getDocumentsMatchingQuery(e,t,n?s:hu.min(),n?i:Yu())).next(e=>(function(e,t){t.forEach((t,n)=>{const r=n.key.getCollectionGroup(),s=e.ru.get(r)||hu.min();n.readTime.compareTo(s)>0&&e.ru.set(r,n.readTime)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e),{documents:e,uu:i})))}class Zf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Pu=0,this.Iu=null,this.Ru=!0}Au(){0===this.Pu&&(this.Vu("Unknown"),this.Iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Iu=null,this.du("Backend didn't respond within 10 seconds."),this.Vu("Offline"),Promise.resolve())))}fu(e){"Online"===this.state?this.Vu("Unknown"):(this.Pu++,this.Pu>=1&&(this.mu(),this.du(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Vu("Offline")))}set(e){this.mu(),this.Pu=0,"Online"===e&&(this.Ru=!1),this.Vu(e)}Vu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}du(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ru?(Vi(t),this.Ru=!1):Ui("OnlineStateTracker",t)}mu(){null!==this.Iu&&(this.Iu.cancel(),this.Iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="RemoteStore";class tp{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.pu=[],this.gu=new Map,this.yu=new Map,this.wu=new Map,this.bu=new Ef(1e3),this.Su=new Ef(1001),this.xu=new Set,this.vu=[],this.Du=s,this.Du.tn(e=>{n.enqueueAndForget(async()=>{lp(this)&&(Ui(ep,"Restarting streams for network reachability change."),await async function(e){const t=Qi(e);t.xu.add(4),await rp(t),t.Cu.set("Unknown"),t.xu.delete(4),await np(t)}(this))})}),this.Cu=new Zf(n,r)}}async function np(e){if(lp(e))for(const t of e.vu)await t(!0)}async function rp(e){for(const t of e.vu)await t(!1)}function sp(e,t){return e.yu.get(t)||void 0}function ip(e,t){const n=Qi(e),r=sp(n,t.targetId);if(void 0!==r&&n.gu.has(r))return;const s=function(e,t){const n=sp(e,t);void 0!==n&&e.wu.delete(n);const r=function(e,t){return t%2!=0?e.Su.next():e.bu.next()}(e,t);return e.yu.set(t,r),e.wu.set(r,t),r}(n,t.targetId);Ui(ep,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new df(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.gu.set(s,i),cp(n)?up(n):Np(n).ur()&&op(n,i)}function ap(e,t){const n=Qi(e),r=Np(n),s=sp(n,t);Ui(ep,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),n.gu.delete(s),n.yu.delete(t),n.wu.delete(s),r.ur()&&Bp(n,s),0===n.gu.size&&(r.ur()?r.Er():lp(n)&&n.Cu.set("Unknown"))}function op(e,t){if(e.Fu.rt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(hu.min())>0){const n=e.wu.get(t.targetId);if(void 0===n)return void Ui(ep,"SDK target ID not found for remote ID: "+t.targetId);const r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}Np(e).yr(t)}function Bp(e,t){e.Fu.rt(t),Np(e).wr(t)}function up(e){e.Fu=new cc({getRemoteKeysForTarget:t=>{const n=e.wu.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):Yu()},Mt:t=>e.gu.get(t)||null,xt:()=>e.datastore.serializer.databaseId}),Np(e).start(),e.Cu.Au()}function cp(e){return lp(e)&&!Np(e).ar()&&e.gu.size>0}function lp(e){return 0===Qi(e).xu.size}function hp(e){e.Fu=void 0}async function Cp(e){e.Cu.set("Online")}async function dp(e){e.gu.forEach((t,n)=>{op(e,t)})}async function fp(e,t){hp(e),cp(e)?(e.Cu.fu(t),up(e)):e.Cu.set("Unknown")}async function pp(e,t,n){if(e.Cu.set("Online"),t instanceof oc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds){if(e.gu.has(r)){const t=e.wu.get(r);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.yu.delete(t),e.wu.delete(r)),e.gu.delete(r)}e.Fu.removeTarget(r)}}(e,t)}catch(n){Ui(ep,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await gp(e,n)}else if(t instanceof ic?e.Fu.Tt(t):t instanceof ac?e.Fu.ft(t):e.Fu.Rt(t),!n.isEqual(hu.min()))try{const t=await Qf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Fu.Dt(t);n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.gu.get(r);s&&e.gu.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.gu.get(t);if(!r)return;e.gu.set(t,r.withResumeToken(Fa.EMPTY_BYTE_STRING,r.snapshotVersion)),Bp(e,t);const s=new df(r.target,t,n,r.sequenceNumber);op(e,s)});const r=function(e,t){const n=new Map;t.targetChanges.forEach((t,r)=>{const s=e.wu.get(r);void 0!==s&&n.set(s,t)});let r=new ra($i);return t.targetMismatches.forEach((t,n)=>{const s=e.wu.get(t);void 0!==s&&(r=r.insert(s,n))}),new rc(t.snapshotVersion,n,r,t.documentUpdates,t.augmentedDocumentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(r)}(e,n)}catch(t){Ui(ep,"Failed to raise snapshot:",t),await gp(e,t)}}async function gp(e,t,n){if(!Jl(t))throw t;e.xu.add(1),await rp(e),e.Cu.set("Offline"),n||(n=()=>Qf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ui(ep,"Retrying IndexedDB access"),await n(),e.xu.delete(1),await np(e)})}function mp(e,t){return t().catch(n=>gp(e,n,t))}async function Ep(e){const t=Qi(e),n=Op(t);let r=t.pu.length>0?t.pu[t.pu.length-1].batchId:-1;for(;Dp(t);)try{const e=await Yf(t.localStore,r);if(null===e){0===t.pu.length&&n.Er();break}r=e.batchId,wp(t,e)}catch(e){await gp(t,e)}yp(t)&&_p(t)}function Dp(e){return lp(e)&&e.pu.length<10}function wp(e,t){e.pu.push(t);const n=Op(e);n.ur()&&n.br&&n.Sr(t.mutations)}function yp(e){return lp(e)&&!Op(e).ar()&&e.pu.length>0}function _p(e){Op(e).start()}async function Ip(e){Op(e).Cr()}async function vp(e){const t=Op(e);for(const n of e.pu)t.Sr(n.mutations)}async function bp(e,t,n){const r=e.pu.shift(),s=cf.from(r,t,n);await mp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ep(e)}async function Tp(e,t){t&&Op(e).br&&await async function(e,t){if(function(e){return function(e){switch(e){case Ba.OK:return qi(64938);case Ba.CANCELLED:case Ba.UNKNOWN:case Ba.DEADLINE_EXCEEDED:case Ba.RESOURCE_EXHAUSTED:case Ba.INTERNAL:case Ba.UNAVAILABLE:case Ba.UNAUTHENTICATED:return!1;case Ba.INVALID_ARGUMENT:case Ba.NOT_FOUND:case Ba.ALREADY_EXISTS:case Ba.PERMISSION_DENIED:case Ba.FAILED_PRECONDITION:case Ba.ABORTED:case Ba.OUT_OF_RANGE:case Ba.UNIMPLEMENTED:case Ba.DATA_LOSS:return!0;default:return qi(15467,{code:e})}}(e)&&e!==Ba.ABORTED}(t.code)){const n=e.pu.shift();Op(e).lr(),await mp(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Ep(e)}}(e,t),yp(e)&&_p(e)}async function Ap(e,t){const n=Qi(e);n.asyncQueue.verifyOperationInProgress(),Ui(ep,"RemoteStore received new credentials");const r=lp(n);n.xu.add(3),await rp(n),r&&n.Cu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.xu.delete(3),await np(n)}function Np(e){return e.Ou||(e.Ou=function(e,t,n){const r=Qi(e);return r.Or(),new Sl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{pn:Cp.bind(null,e),yn:dp.bind(null,e),bn:fp.bind(null,e),gr:pp.bind(null,e)}),e.vu.push(async t=>{t?(e.Ou.lr(),cp(e)?up(e):e.Cu.set("Unknown")):(await e.Ou.stop(),hp(e))})),e.Ou}function Op(e){return e.Mu||(e.Mu=function(e,t,n){const r=Qi(e);return r.Or(),new Fl(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{pn:()=>Promise.resolve(),yn:Ip.bind(null,e),bn:Tp.bind(null,e),vr:vp.bind(null,e),Dr:bp.bind(null,e)}),e.vu.push(async t=>{t?(e.Mu.lr(),await Ep(e)):(await e.Mu.stop(),e.pu.length>0&&(Ui(ep,`Stopping write stream with ${e.pu.length} pending writes`),e.pu=[]))})),e.Mu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Sp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Nu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Nu(this.observer.error,e):Vi("Uncaught Error in snapshot listener:",e.toString()))}Bu(){this.muted=!0}Nu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new al,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,a=new Fp(e,t,i,r,s);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ua(Ba.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lp(e,t){if(Vi("AsyncQueue",`${t}: ${e}`),Jl(e))return new ua(Ba.UNAVAILABLE,`${t}: ${e}`);throw e}class Rp{constructor(){this.activeTargetIds=$u}nc(e){this.activeTargetIds=this.activeTargetIds.add(e)}rc(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tc(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xp{constructor(){this.kc=new Rp,this.Qc={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.kc.nc(e),this.Qc[e]||"not-current"}updateQueryState(e,t,n){this.Qc[e]=t}removeLocalQueryTarget(e){this.kc.rc(e)}isLocalQueryTarget(e){return this.kc.activeTargetIds.has(e)}clearQueryState(e){delete this.Qc[e]}getAllActiveQueryTargets(){return this.kc.activeTargetIds}isActiveQueryTarget(e){return this.kc.activeTargetIds.has(e)}start(){return this.kc=new Rp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function kp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{static emptySet(e){return new Pp(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ea.comparator(t.key,n.key):(e,t)=>Ea.comparator(e.key,t.key),this.keyedMap=Ju(),this.sortedSet=new ra(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Pp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.qc=new ra(Ea.comparator)}track(e){const t=e.doc.key,n=this.qc.get(t);n?0!==e.type&&3===n.type?this.qc=this.qc.insert(t,e):3===e.type&&1!==n.type?this.qc=this.qc.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.qc=this.qc.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.qc=this.qc.remove(t):1===e.type&&2===n.type?this.qc=this.qc.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.qc=this.qc.insert(t,{type:2,doc:e.doc}):qi(63341,{Nt:e,Kc:n}):this.qc=this.qc.insert(t,e)}Wc(){const e=[];return this.qc.inorderTraversal((t,n)=>{e.push(n)}),e}}class Gp{constructor(e,t,n,r,s,i,a,o,B){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=B}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Gp(e,t,Pp.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.Gc=void 0,this.jc=[]}zc(){return this.jc.some(e=>e.Hc())}}class Up{constructor(){this.queries=Vp(),this.onlineState="Unknown",this.Jc=new Set}terminate(){!function(e,t){const n=Qi(e),r=n.queries;n.queries=Vp(),r.forEach((e,n)=>{for(const e of n.jc)e.onError(t)})}(this,new ua(Ba.ABORTED,"Firestore shutting down"))}}function Vp(){return new Gu(e=>rf(e),sf)}async function Jp(e,t){const n=Qi(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.zc()&&t.Hc()&&(r=2):(i=new Hp,r=t.Hc()?0:1);try{switch(r){case 0:i.Gc=await n.onListen(s,!0);break;case 1:i.Gc=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=Lp(e,`Initialization of query '${tf(t.query)?Zd(t.query):Su(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.jc.push(t),t.Yc(n.onlineState),i.Gc&&t.Zc(i.Gc)&&zp(n)}async function jp(e,t){const n=Qi(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.jc.indexOf(t);e>=0&&(i.jc.splice(e,1),0===i.jc.length?s=t.Hc()?0:1:!i.zc()&&t.Hc()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qp(e,t){const n=Qi(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.jc)t.Zc(e)&&(r=!0);s.Gc=e}}r&&zp(n)}function Kp(e,t,n){const r=Qi(e),s=r.queries.get(t);if(s)for(const e of s.jc)e.onError(n);r.queries.delete(t)}function zp(e){e.Jc.forEach(e=>{e.next()})}var Qp;!function(e){e.Default="default",e.Cache="cache"}(Qp||(Qp={}));class Wp{constructor(e,t,n){this.query=e,this.Xc=t,this.el=!1,this.tl=null,this.onlineState="Unknown",this.options=n||{}}Zc(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Gp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.el?this.nl(e)&&(this.Xc.next(e),t=!0):this.rl(e,this.onlineState)&&(this.il(e),t=!0),this.tl=e,t}onError(e){this.Xc.error(e)}Yc(e){this.onlineState=e;let t=!1;return this.tl&&!this.el&&this.rl(this.tl,e)&&(this.il(this.tl),t=!0),t}rl(e,t){if(!e.fromCache)return!0;if(!this.Hc())return!0;const n="Offline"!==t;return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}nl(e){if(e.docChanges.length>0)return!0;const t=this.tl&&this.tl.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}il(e){e=Gp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.el=!0,this.Xc.next(e)}Hc(){return this.options.source!==Qp.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class Xp{constructor(e,t){this.query=e,this.hl=t,this.Tl=null,this.hasCachedResults=!1,this.current=!1,this.Pl=Yu(),this.mutatedKeys=Yu(),this.Il=tf(e)?_f(e):Lu(e),this.Rl=new Pp(this.Il)}get Al(){return this.hl}Vl(e,t){const n=t?t.dl:new Mp,r=t?t.Rl:this.Rl;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const[o,B]=this.fl(this.query,r);e.inorderTraversal((e,t)=>{const u=r.get(e),c=function(e,t){return tf(e)?wf(e,t):Fu(e,t)}(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let C=!1;u&&c?u.data.isEqual(c.data)?l!==h&&(n.track({type:3,doc:c}),C=!0):this.ml(u,c)||(n.track({type:2,doc:c}),C=!0,(o&&this.Il(c,o)>0||B&&this.Il(c,B)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),C=!0):u&&!c&&(n.track({type:1,doc:u}),C=!0,(o||B)&&(a=!0)),C&&(c?(i=i.add(c),s=h?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))});const u=this.pl(this.query);if(u)if(tf(this.query)){const e=[];i.forEach(t=>e.push(t));const t=Df(this.query,e);let r=new Pp(_f(this.query));for(const e of t)r=r.add(e);i.forEach(e=>{r.has(e.key)||(s=s.delete(e.key),n.track({type:1,doc:e}))}),i=r}else{const e=this.gl(this.query);for(;i.size>u;){const t="F"===e?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}}return{Rl:i,dl:n,Za:a,mutatedKeys:s}}pl(e){return tf(e)?If(e)?.limit:e.limit||void 0}gl(e){if(tf(e)){const t=If(e);return t&&t.limit<0?"L":"F"}return e.limitType}fl(e,t){if(tf(e)){const n=If(e)?.limit;return[t.size===n?t.last():null,null]}return["F"===e.limitType&&t.size===this.pl(this.query)?t.last():null,"L"===e.limitType&&t.size===this.pl(this.query)?t.first():null]}ml(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.Rl;this.Rl=e.Rl,this.mutatedKeys=e.mutatedKeys;const i=e.dl.Wc();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return qi(20277,{Nt:e})}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Il(e.doc,t.doc)),this.yl(n),r=r??!1;const a=t&&!r?this.wl():[],o=0===this.Pl.size&&this.current&&!r?1:0,B=o!==this.Tl;return this.Tl=o,0!==i.length||B?{snapshot:new Gp(this.query,e.Rl,s,i,e.mutatedKeys,0===o,B,!1,!!n&&n.resumeToken.approximateByteSize()>0),bl:a}:{bl:a}}Yc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Rl:this.Rl,dl:new Mp,mutatedKeys:this.mutatedKeys,Za:!1},!1)):{bl:[]}}Sl(e){return!this.hl.has(e)&&!!this.Rl.has(e)&&!this.Rl.get(e).hasLocalMutations}yl(e){e&&(e.addedDocuments.forEach(e=>this.hl=this.hl.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.hl=this.hl.delete(e)),this.current=e.current)}wl(){if(!this.current)return[];const e=this.Pl;this.Pl=Yu(),this.Rl.forEach(e=>{this.Sl(e.key)&&(this.Pl=this.Pl.add(e.key))});const t=[];return e.forEach(e=>{this.Pl.has(e)||t.push(new $p(e))}),this.Pl.forEach(n=>{e.has(n)||t.push(new Yp(n))}),t}xl(e){this.hl=e.uu,this.Pl=Yu();const t=this.Vl(e.documents);return this.applyChanges(t,!0)}vl(){return Gp.fromInitialDocuments(this.query,this.Rl,this.mutatedKeys,0===this.Tl,this.hasCachedResults)}}const Zp="SyncEngine";class eg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tg{constructor(e){this.key=e,this.Dl=!1}}class ng{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Cl={},this.Fl=new Gu(e=>rf(e),sf),this.Ol=new Map,this.Ml=new Set,this.Nl=new ra(Ea.comparator),this.Bl=new Map,this.Ll=new Sf,this.$l={},this.Ul=new Map,this.kl=Ef.G_(),this.onlineState="Unknown",this.Ql=void 0}get isPrimaryClient(){return!0===this.Ql}}async function rg(e,t,n=!0){const r=Ig(e);let s;const i=r.Fl.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.vl()):s=await ig(r,t,n,!0),s}async function sg(e,t){const n=Ig(e);await ig(n,t,!0,!1)}async function ig(e,t,n,r){const s=await function(e,t){const n=Qi(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.ko.getTargetData(e,t).next(s=>s?(r=s,Vl.resolve(r)):n.ko.allocateTargetId(e).next(s=>(r=new df(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.ko.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.tu.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.tu=n.tu.insert(e.targetId,e),n.nu.set(t,e.targetId)),e})}(e.localStore,tf(t)?t:Au(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let o;return r&&(o=await async function(e,t,n,r,s){e.ql=(t,n,r)=>async function(e,t,n,r){let s=t.view.Vl(n);s.Za&&(s=await Xf(e.localStore,t.query,!1).then(({documents:e})=>t.view.Vl(e,s)));const i=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i,a);return mg(e,t.targetId,o.bl),o.snapshot}(e,t,n,r);const i=await Xf(e.localStore,t,!0),a=new Xp(t,i.uu),o=a.Vl(i.documents),B=sc.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,B);mg(e,n,u.bl);const c=new eg(t,n,a);return e.Fl.set(t,c),e.Ol.has(n)?e.Ol.get(n).push(t):e.Ol.set(n,[t]),u.snapshot}(e,t,i,"current"===a,s.resumeToken)),e.isPrimaryClient&&n&&ip(e.remoteStore,s),o}async function ag(e,t,n){const r=Qi(e),s=r.Fl.get(t),i=r.Ol.get(s.targetId);if(i.length>1)return r.Ol.set(s.targetId,i.filter(e=>!sf(e,t))),void r.Fl.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $f(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ap(r.remoteStore,s.targetId),pg(r,s.targetId)}).catch(Ul)):(pg(r,s.targetId),await $f(r.localStore,s.targetId,!0))}async function og(e,t){const n=Qi(e),r=n.Fl.get(t),s=n.Ol.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ap(n.remoteStore,r.targetId))}async function Bg(e,t,n){const r=function(e){const t=Qi(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cg.bind(null,t),t}(e);try{const e=await function(e,t){const n=Qi(e),r=Oa.now(),s=t.reduce((e,t)=>e.add(t.key),Yu());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=Uu(),B=Yu();return n.iu.getEntries(e,s).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(B=B.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(s=>{i=s;const a=[];for(const e of t){const t=kB(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new GB(e.key,t,cB(t.value.mapValue),OB.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)}).next(t=>{a=t;const r=t.applyToLocalDocumentSet(i,B);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:ju(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.$l[e.currentUser.toKey()];r||(r=new ra($i)),r=r.insert(t,n),e.$l[e.currentUser.toKey()]=r}(r,e.batchId,n),await wg(r,e.changes),await Ep(r.remoteStore)}catch(e){const t=Lp(e,"Failed to persist write");n.reject(t)}}async function ug(e,t){const n=Qi(e);try{const e=await Wf(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Bl.get(t);r&&(zi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.Dl=!0:e.modifiedDocuments.size>0?zi(r.Dl,14607):e.removedDocuments.size>0&&(zi(r.Dl,42227),r.Dl=!1))}),await wg(n,e,t)}catch(e){await Ul(e)}}function cg(e,t,n){const r=Qi(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fl.forEach((n,r)=>{const s=r.view.Yc(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=Qi(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.jc)e.Yc(t)&&(r=!0)}),r&&zp(n)}(r.eventManager,t),e.length&&r.Cl.gr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lg(e,t,n){const r=Qi(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Bl.get(t),i=s&&s.key;if(i){let e=new ra(Ea.comparator);e=e.insert(i,Cu.newNoDocument(i,hu.min()));const n=Yu().add(i),s=new rc(hu.min(),new Map,new ra($i),e,Uu(),n);await ug(r,s),r.Nl=r.Nl.remove(i),r.Bl.delete(t),Dg(r)}else await $f(r.localStore,t,!1).then(()=>pg(r,t,n)).catch(Ul)}async function hg(e,t){const n=Qi(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Qi(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.iu.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let a=Vl.resolve();return i.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);zi(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Yu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);fg(n,r,null),dg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wg(n,e)}catch(e){await Ul(e)}}async function Cg(e,t,n){const r=Qi(e);try{const e=await function(e,t){const n=Qi(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(zi(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);fg(r,t,n),dg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await wg(r,e)}catch(n){await Ul(n)}}function dg(e,t){(e.Ul.get(t)||[]).forEach(e=>{e.resolve()}),e.Ul.delete(t)}function fg(e,t,n){const r=Qi(e);let s=r.$l[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.$l[r.currentUser.toKey()]=s}}function pg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ol.get(t))e.Fl.delete(r),n&&e.Cl.Kl(r,n);e.Ol.delete(t),e.isPrimaryClient&&e.Ll.fo(t).forEach(t=>{e.Ll.containsKey(t)||gg(e,t)})}function gg(e,t){e.Ml.delete(t.path.canonicalString());const n=e.Nl.get(t);null!==n&&(ap(e.remoteStore,n),e.Nl=e.Nl.remove(t),e.Bl.delete(n),Dg(e))}function mg(e,t,n){for(const r of n)r instanceof Yp?(e.Ll.addReference(r.key,t),Eg(e,r)):r instanceof $p?(Ui(Zp,"Document no longer in limbo: "+r.key),e.Ll.removeReference(r.key,t),e.Ll.containsKey(r.key)||gg(e,r.key)):qi(19791,{Wl:r})}function Eg(e,t){const n=t.key,r=n.path.canonicalString();e.Nl.get(n)||e.Ml.has(r)||(Ui(Zp,"New document in limbo: "+n),e.Ml.add(r),Dg(e))}function Dg(e){for(;e.Ml.size>0&&e.Nl.size<e.maxConcurrentLimboResolutions;){const t=e.Ml.values().next().value;e.Ml.delete(t);const n=new Ea(ha.fromString(t)),r=e.kl.next();e.Bl.set(r,new tg(n)),e.Nl=e.Nl.insert(n,r),ip(e.remoteStore,new df(Au(Iu(n.path)),r,"TargetPurposeLimboResolution",Gl.Br))}}async function wg(e,t,n){const r=Qi(e),s=[],i=[],a=[];r.Fl.isEmpty()||(r.Fl.forEach((e,o)=>{a.push(r.ql(o,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(o.targetId)?.current;r.sharedClientState.updateQueryState(o.targetId,t?"current":"not-current")}if(e){s.push(e);const t=Uf.ka(o.targetId,e);i.push(t)}}))}),await Promise.all(a),r.Cl.gr(s),await async function(e,t){const n=Qi(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Vl.forEach(t,t=>Vl.forEach(t.$a,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Vl.forEach(t.Ua,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Jl(e))throw e;Ui(qf,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.tu.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.tu=n.tu.insert(t,s)}}}(r.localStore,i))}async function yg(e,t){const n=Qi(e);if(!n.currentUser.isEqual(t)){Ui(Zp,"User change. New user:",t.toKey());const e=await zf(n.localStore,t);n.currentUser=t,function(e,t){e.Ul.forEach(e=>{e.forEach(e=>{e.reject(new ua(Ba.CANCELLED,t))})}),e.Ul.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await wg(n,e._u)}}function _g(e,t){const n=Qi(e),r=n.Bl.get(t);if(r&&r.Dl)return Yu().add(r.key);{let e=Yu();const r=n.Ol.get(t);if(!r)return e;for(const t of r??[]){const r=n.Fl.get(t);e=e.unionWith(r.view.Al)}return e}}function Ig(e){const t=Qi(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ug.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_g.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lg.bind(null,t),t.Cl.gr=qp.bind(null,t.eventManager),t.Cl.Kl=Kp.bind(null,t.eventManager),t}class vg{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.jl(e),this.persistence=this.zl(e),await this.persistence.start(),this.localStore=this.Hl(e),this.gcScheduler=this.Jl(e,this.localStore),this.indexBackfillerScheduler=this.Yl(e,this.localStore)}Jl(e,t){return null}Yl(e,t){return null}Hl(e){return function(e,t,n,r){return new Kf(e,t,n,r)}(this.persistence,new jf,e.initialUser,this.serializer)}zl(e){return new Pf(Gf.Ho,this.serializer)}jl(e){return new xp}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vg.provider={build:()=>new vg};class bg extends vg{constructor(e){super(),this.cacheSizeBytes=e}Jl(e,t){zi(this.persistence.referenceDelegate instanceof Hf,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new zl(n,e.asyncQueue,t)}zl(e){const t=void 0!==this.cacheSizeBytes?Ml.withCacheSize(this.cacheSizeBytes):Ml.DEFAULT;return new Pf(e=>Hf.Ho(e,t),this.serializer)}}class Tg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>cg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=yg.bind(null,this.syncEngine),await async function(e,t){const n=Qi(e);t?(n.xu.delete(2),await np(n)):t||(n.xu.add(2),await rp(n),n.Cu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Up}createDatastore(e){const t=Qc(e.databaseInfo.databaseId),n=function(e){return new Tl(e)}(e.databaseInfo);return function(e,t,n,r){return new Rl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new tp(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>cg(this.syncEngine,e,0),ml.cn()?new ml:new pl)}createSyncEngine(e,t){return function(e,t,n,r,s,i,a){const o=new ng(e,t,n,r,s,i);return a&&(o.Ql=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=Qi(e);Ui(ep,"RemoteStore shutting down."),t.xu.add(5),await rp(t),t.Du.shutdown(),t.Cu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Tg.provider={build:()=>new Tg};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ag="FirestoreClient";class Ng{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=il.UNAUTHENTICATED,this.clientId=Yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{Ui(Ag,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(Ui(Ag,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new al;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Lp(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Og(e,t){e.asyncQueue.verifyOperationInProgress(),Ui(Ag,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await zf(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Sg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ui(Ag,"Using user provided OfflineComponentProvider");try{await Og(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===Ba.FAILED_PRECONDITION||e.code===Ba.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await Og(e,new vg)}}else Ui(Ag,"Using default OfflineComponentProvider"),await Og(e,new bg(void 0));return e._offlineComponents}(e);Ui(Ag,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Ap(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Ap(t.remoteStore,n)),e._onlineComponents=t}async function Fg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ui(Ag,"Using user provided OnlineComponentProvider"),await Sg(e,e._uninitializedComponentsProvider._online)):(Ui(Ag,"Using default OnlineComponentProvider"),await Sg(e,new Tg))),e._onlineComponents}async function Lg(e){const t=await Fg(e),n=t.eventManager;return n.onListen=rg.bind(null,t.syncEngine),n.onUnlisten=ag.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=sg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=og.bind(null,t.syncEngine),n}function Rg(e,t){const n=new al;return e.asyncQueue.enqueueAndForget(async()=>Bg(await function(e){return Fg(e).then(e=>e.syncEngine)}(e),t,n)),n.promise
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let xg=class{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new kg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Eh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}},kg=class extends xg{data(){return super.data()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{convertValue(e,t="none"){switch(No(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Zo(e))return this.convertToInt32Value(e.mapValue);if(Xo(e))return this.convertToDecimal128Value(e.mapValue)}return xa(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,t);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(ka(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,t);case 15:return this.convertObject(e.mapValue,t);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return rl.instance();case 1:return sl.instance();default:throw qi(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ga(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[io].arrayValue?.values?.map(e=>xa(e.doubleValue));return new ah(t)}convertToBsonObjectId(e){const t=e.fields?.[ho]?.stringValue??"";return new Wc(t)}convertToBytesWithSubtype(e){const t=e.fields?.[Eo],n=t?.bytesValue;if(!n)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=ka(n).toUint8Array();if(0===r.length)throw new Error("Received empty bytesValue for Bytes with subtype");const s=r[0],i=r.slice(1);return new $c(Fa.fromUint8Array(i),s)}convertToBsonTimestamp(e){const t=e.fields?.[po],n=Number(t?.mapValue?.fields?.[go]?.integerValue),r=Number(t?.mapValue?.fields?.[mo]?.integerValue);return new Yc(n,r)}convertToRegexValue(e){const t=e.fields?.[uo]?.mapValue?.fields?.[co]?.stringValue??"",n=e.fields?.[uo]?.mapValue?.fields?.[lo]?.stringValue??"";return new ih(t,n)}convertToInt32Value(e){const t=Number(e.fields?.[Co]?.integerValue);return new nl(t)}convertToDecimal128Value(e){const t=e.fields?.[fo]?.stringValue??"";return new Xc(t)}convertGeoPoint(e){return new tl(xa(e.latitude),xa(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Va(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const t=Ra(e);return new Oa(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ha.fromString(e);zi(jc(n),9688,{name:e});const r=new Ka(n.get(1),n.get(3)),s=new Ea(n.popFirst(5));return r.isEqual(t)||Vi(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gg="AsyncQueue";class Hg{constructor(e=Promise.resolve()){this._E=[],this.oE=!1,this.aE=[],this.uE=null,this.cE=!1,this.lE=!1,this.EE=[],this._r=new Al(this,"async_queue_retry"),this.hE=()=>{const e=kp();e&&Ui(Gg,"Visibility state changed to "+e.visibilityState),this._r.Xn()},this.TE=e;const t=kp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.hE)}get isShuttingDown(){return this.oE}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.PE(),this.IE(e)}enterRestrictedMode(e){if(!this.oE){this.oE=!0,this.lE=e||!1;const t=kp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hE)}}enqueue(e){if(this.PE(),this.oE)return new Promise(()=>{});const t=new al;return this.IE(()=>this.oE&&this.lE?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this._E.push(e),this.RE()))}async RE(){if(0!==this._E.length){try{await this._E[0](),this._E.shift(),this._r.reset()}catch(e){if(!Jl(e))throw e;Ui(Gg,"Operation failed with retryable error: "+e)}this._E.length>0&&this._r.Yn(()=>this.RE())}}IE(e){const t=this.TE.then(()=>(this.cE=!0,e().catch(e=>{throw this.uE=e,this.cE=!1,Vi("INTERNAL UNHANDLED ERROR: ",Ug(e)),e}).then(e=>(this.cE=!1,e))));return this.TE=t,t}enqueueAfterDelay(e,t,n){this.PE(),this.EE.indexOf(e)>-1&&(t=0);const r=Fp.createAndSchedule(this,e,t,n,e=>this.AE(e));return this.aE.push(r),r}PE(){this.uE&&qi(47125,{VE:Ug(this.uE)})}verifyOperationInProgress(){}async dE(){let e;do{e=this.TE,await e}while(e!==this.TE)}fE(e){for(const t of this.aE)if(t.timerId===e)return!0;return!1}mE(e){return this.dE().then(()=>{this.aE.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.aE)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.dE()})}pE(e){this.EE.push(e)}AE(e){const t=this.aE.indexOf(e);this.aE.splice(t,1)}}function Ug(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Vg extends Xl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Hg,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hg(e),this._firestoreClient=void 0,await e}}}function Jg(e,t){const n="object"==typeof e?e:Me(),r="string"==typeof e?e:t||qa,s=Fe(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(e=>{const t=o(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&Zl(s,...e)}return s}function jg(e){if(e._terminated)throw new ua(Ba.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){const t=e._freezeSettings(),n=function(e,t,n,r,s){return new ja(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,fl(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Ng(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class qg extends Pg{constructor(e){super(),this.firestore=e}convertBytes(e){return new $c(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new th(this.firestore,null,t)}}class Kg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zg extends xg{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Eh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ua(Ba.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zg._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}zg._jsonSchemaVersion="firestore/documentSnapshot/1.0",zg._jsonSchema={type:ba("string",zg._jsonSchemaVersion),bundleSource:ba("string","DocumentSnapshot"),bundleName:ba("string"),bundle:ba("string")};class Qg extends zg{data(e={}){return super.data(e)}}class Wg{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Kg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Qg(this._firestore,this._userDataWriter,n.key,n,new Kg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ua(Ba.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{tf(e._snapshot.query)?_f(e._snapshot.query):Lu(e.query._query);const r=new Qg(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Kg(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Qg(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Kg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Yg(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ua(Ba.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wg._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Yg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qi(61501,{type:e})}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wg._jsonSchemaVersion="firestore/querySnapshot/1.0",Wg._jsonSchema={type:ba("string",Wg._jsonSchemaVersion),bundleSource:ba("string","QuerySnapshot"),bundleName:ba("string"),bundle:ba("string")};class $g{}class Xg extends $g{}function Zg(e,t,...n){let r=[];t instanceof $g&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof nm).length,n=e.filter(e=>e instanceof em).length;if(t>1||t>0&&n>0)throw new ua(Ba.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const t of r)e=t._apply(e);return e}class em extends Xg{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new em(e,t,n)}_apply(e){const t=this._parse(e);return um(e._query,t),new eh(e.firestore,e.converter,Nu(e._query,t))}_parse(e){const t=hh(e.firestore),n=function(e,t,n,r,s,i,a){let o;if(function(e,t){if("number"==typeof e&&isNaN(e)&&"=="!==t&&"!="!==t&&"array-contains"!==t)throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(null===e&&"=="!==t&&"!="!==t&&"array-contains"!==t)throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")}(a,i),s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new ua(Ba.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Bm(a,i);const t=[];for(const n of a)t.push(om(r,e,n));o={arrayValue:{values:t}}}else o=om(r,e,a)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Bm(a,i),o=function(e,t,n,r=!1){return dh(n,e.createContext(r?4:3,t))}(n,t,a,"in"===i||"not-in"===i);return WB.create(s,i,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function tm(e,t,n){const r=t,s=Eh("where",e);return em._create(s,r,n)}class nm extends $g{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nm(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:YB.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const e of r)um(n,e),n=Nu(n,e)}(e._query,t),new eh(e.firestore,e.converter,Nu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class rm extends Xg{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ua(Ba.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ua(Ba.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cu(t,n)}(e._query,this._field,this._direction);return new eh(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new _u(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function sm(e,t="asc"){const n=t,r=Eh("orderBy",e);return rm._create(r,n)}class im extends Xg{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new im(e,t,n)}_apply(e){return new eh(e.firestore,e.converter,Ou(e._query,this._limit,this._limitType))}}function am(e){return function(e,t){if(t<=0)throw new ua(Ba.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),im._create("limit",e,"F")}function om(e,t,n){if("string"==typeof(n=D(n))){if(""===n)throw new ua(Ba.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bu(t)&&-1!==n.indexOf("/"))throw new ua(Ba.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ha.fromString(n));if(!Ea.isDocumentKey(r))throw new ua(Ba.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wo(e,new Ea(r))}if(n instanceof th)return Wo(e,n._key);throw new ua(Ba.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(n)}.`)}function Bm(e,t){if(!Array.isArray(e)||0===e.length)throw new ua(Ba.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function um(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ua(Ba.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ua(Ba.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(e){e=va(e,th);const t=va(e.firestore,Vg);return function(e,t,n={}){const r=new al;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Sp({next:o=>{i.Bu(),t.enqueueAndForget(()=>jp(e,a));const B=o.docs.has(n);!B&&o.fromCache?s.reject(new ua(Ba.UNAVAILABLE,"Failed to get document because the client is offline.")):B&&o.fromCache&&r&&"server"===r.source?s.reject(new ua(Ba.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(o)},error:e=>s.reject(e)}),a=new Wp(Iu(n.path),i,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Jp(e,a)}(await Lg(e),e.asyncQueue,t,n,r)),r.promise}(jg(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),s=new qg(e);return new zg(e,s,t._key,r,new Kg(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}function lm(e){e=va(e,eh);const t=va(e.firestore,Vg),n=jg(t),r=new qg(t);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ua(Ba.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new al;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Sp({next:n=>{i.Bu(),t.enqueueAndForget(()=>jp(e,a)),n.fromCache&&"server"===r.source?s.reject(new ua(Ba.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),a=new Wp(n instanceof iC?Bf(n):n,i,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Jp(e,a)}(await Lg(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new Wg(t,r,e,n))}function hm(e,t,n){e=va(e,th);const r=va(e.firestore,Vg),s=Mg(e.converter,t,n);return dm(r,[Ch(hh(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,OB.none())])}function Cm(e,t){const n=va(e.firestore,Vg),r=sh(e),s=Mg(e.converter,t);return dm(n,[Ch(hh(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,OB.exists(!1))]).then(()=>r)}function dm(e,t){return Rg(jg(e),t)}const fm="@firebase/firestore",pm="4.19.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t=!0){(function(e){Mi=e})(ke),Se(new _("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Vg(new cl(e.getProvider("auth-internal")),new dl(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ua(Ba.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(e.options.projectId,t)}(s,n),s);return r={useFetchStreams:t,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Ge(fm,pm,e),Ge(fm,pm,"esm2020")}();export{Cm as addDoc,rh as collection,sh as doc,Mr as getAuth,cm as getDoc,lm as getDocs,Jg as getFirestore,Pe as initializeApp,am as limit,An as onAuthStateChanged,sm as orderBy,Zg as query,hm as setDoc,vn as signInAnonymously,tm as where};
