import{j as c,G as T,T as w,d as oe,a as ie,r as N,u as re,b as ae}from"./index-c6449233.js";import{B as b}from"./Button3D-d7224cdf.js";import{F as ce}from"./Float-ce127287.js";import{I as le}from"./InputField3D-a951c4d9.js";import{P as de}from"./ProgressRing3D-3de5fdcb.js";var M;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(M||(M={}));/**
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
 */var j;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(j||(j={}));var G;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(G||(G={}));/**
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
 */const L=["user","model","function","system"];var D;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(D||(D={}));var U;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(U||(U={}));var H;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(H||(H={}));var F;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(F||(F={}));var v;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(v||(v={}));var $;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})($||($={}));var K;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(K||(K={}));var k;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(k||(k={}));/**
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
 */class g extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class y extends g{constructor(t,n){super(t),this.response=n}}class Q extends g{constructor(t,n,s,o){super(t),this.status=n,this.statusText=s,this.errorDetails=o}}class m extends g{}class Z extends g{}/**
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
 */const ue="https://generativelanguage.googleapis.com",fe="v1beta",he="0.24.1",ge="genai-js";var I;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(I||(I={}));class Ee{constructor(t,n,s,o,i){this.model=t,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var t,n;const s=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||fe;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ue}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function pe(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${ge}/${he}`),t.join(" ")}async function Ce(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",pe(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new m(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new m(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new m(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function _e(e,t,n,s,o,i){const r=new Ee(e,t,n,s,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},ve(i)),{method:"POST",headers:await Ce(r),body:o})}}async function A(e,t,n,s,o,i={},r=fetch){const{url:a,fetchOptions:u}=await _e(e,t,n,s,o,i);return me(a,u,r)}async function me(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){Ie(o,e)}return s.ok||await ye(s,e),s}function Ie(e,t){let n=e;throw n.name==="AbortError"?(n=new Z(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof Q||e instanceof m||(n=new g(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function ye(e,t){let n="",s;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new Q(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,s)}function ve(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function x(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),S(e.candidates[0]))throw new y(`${_(e)}`,e);return Oe(e)}else if(e.promptFeedback)throw new y(`Text not available. ${_(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),S(e.candidates[0]))throw new y(`${_(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),B(e)[0]}else if(e.promptFeedback)throw new y(`Function call not available. ${_(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),S(e.candidates[0]))throw new y(`${_(e)}`,e);return B(e)}else if(e.promptFeedback)throw new y(`Function call not available. ${_(e)}`,e)},e}function Oe(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function B(e){var t,n,s,o;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const Re=[v.RECITATION,v.SAFETY,v.LANGUAGE];function S(e){return!!e.finishReason&&Re.includes(e.finishReason)}function _(e){var t,n,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];S(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function Ae(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),o,i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(l){s[l]&&(o[l]=function(d){return new Promise(function(h,p){i.push([l,d,h,p])>1||a(l,d)})})}function a(l,d){try{u(s[l](d))}catch(h){f(i[0][3],h)}}function u(l){l.value instanceof O?Promise.resolve(l.value.v).then(E,C):f(i[0][2],l)}function E(l){a("next",l)}function C(l){a("throw",l)}function f(l,d){l(d),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
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
 */const Y=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function we(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Te(t),[s,o]=n.tee();return{stream:Ne(s),response:Se(o)}}async function Se(e){const t=[],n=e.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return x(xe(t));t.push(o)}}function Ne(e){return Ae(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:o}=yield O(n.read());if(o)break;yield yield O(x(s))}})}function Te(e){const t=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return t.read().then(({value:r,done:a})=>{if(a){if(o.trim()){s.error(new g("Failed to parse stream"));return}s.close();return}o+=r;let u=o.match(Y),E;for(;u;){try{E=JSON.parse(u[1])}catch{s.error(new g(`Error parsing JSON response: "${u[1]}"`));return}s.enqueue(E),o=o.substring(u[0].length),u=o.match(Y)}return i()}).catch(r=>{let a=r;throw a.stack=r.stack,a.name==="AbortError"?a=new Z("Request aborted when reading from the stream"):a=new g("Error reading from the stream"),a})}}})}function xe(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[o]||(n.candidates[o]={index:o}),n.candidates[o].citationMetadata=i.citationMetadata,n.candidates[o].groundingMetadata=i.groundingMetadata,n.candidates[o].finishReason=i.finishReason,n.candidates[o].finishMessage=i.finishMessage,n.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[o].content||(n.candidates[o].content={role:i.content.role||"user",parts:[]});const r={};for(const a of i.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[o].content.parts.push(r)}o++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function ee(e,t,n,s){const o=await A(t,I.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s);return we(o)}async function te(e,t,n,s){const i=await(await A(t,I.GENERATE_CONTENT,e,!1,JSON.stringify(n),s)).json();return{response:x(i)}}/**
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
 */function ne(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function R(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return be(t)}function be(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),o=!0):(t.parts.push(i),s=!0);if(s&&o)throw new g("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new g("No content is provided for sending chat message.");return s?t:n}function Me(e,t){var n;let s={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new m("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=R(e);s.contents=[i]}return{generateContentRequest:s}}function q(e){let t;return e.contents?t=e:t={contents:[R(e)]},e.systemInstruction&&(t.systemInstruction=ne(e.systemInstruction)),t}function je(e){return typeof e=="string"||Array.isArray(e)?{content:R(e)}:e}/**
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
 */const P=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ge={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Le(e){let t=!1;for(const n of e){const{role:s,parts:o}=n;if(!t&&s!=="user")throw new g(`First content should be with role 'user', got ${s}`);if(!L.includes(s))throw new g(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(L)}`);if(!Array.isArray(o))throw new g("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new g("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of o)for(const u of P)u in a&&(i[u]+=1);const r=Ge[s];for(const a of P)if(!r.includes(a)&&i[a]>0)throw new g(`Content with role '${s}' can't contain '${a}' part`);t=!0}}function V(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const s of n.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
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
 */const W="SILENT_ERROR";class De{constructor(t,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(Le(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var s,o,i,r,a,u;await this._sendPromise;const E=R(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,E]},f=Object.assign(Object.assign({},this._requestOptions),n);let l;return this._sendPromise=this._sendPromise.then(()=>te(this._apiKey,this.model,C,f)).then(d=>{var h;if(V(d.response)){this._history.push(E);const p=Object.assign({parts:[],role:"model"},(h=d.response.candidates)===null||h===void 0?void 0:h[0].content);this._history.push(p)}else{const p=_(d.response);p&&console.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}l=d}).catch(d=>{throw this._sendPromise=Promise.resolve(),d}),await this._sendPromise,l}async sendMessageStream(t,n={}){var s,o,i,r,a,u;await this._sendPromise;const E=R(t),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,E]},f=Object.assign(Object.assign({},this._requestOptions),n),l=ee(this._apiKey,this.model,C,f);return this._sendPromise=this._sendPromise.then(()=>l).catch(d=>{throw new Error(W)}).then(d=>d.response).then(d=>{if(V(d)){this._history.push(E);const h=Object.assign({},d.candidates[0].content);h.role||(h.role="model"),this._history.push(h)}else{const h=_(d);h&&console.warn(`sendMessageStream() was unsuccessful. ${h}. Inspect response object for details.`)}}).catch(d=>{d.message!==W&&console.error(d)}),l}}/**
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
 */async function Ue(e,t,n,s){return(await A(t,I.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}/**
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
 */async function He(e,t,n,s){return(await A(t,I.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function Fe(e,t,n,s){const o=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await A(t,I.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class J{constructor(t,n,s={}){this.apiKey=t,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ne(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var s;const o=q(t),i=Object.assign(Object.assign({},this._requestOptions),n);return te(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(t,n={}){var s;const o=q(t),i=Object.assign(Object.assign({},this._requestOptions),n);return ee(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(t){var n;return new De(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const s=Me(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Ue(this.apiKey,this.model,s,o)}async embedContent(t,n={}){const s=je(t),o=Object.assign(Object.assign({},this._requestOptions),n);return He(this.apiKey,this.model,s,o)}async batchEmbedContents(t,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Fe(this.apiKey,this.model,t,s)}}/**
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
 */class $e{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new g("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new J(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,s){if(!t.name)throw new m("Cached content must contain a `name` field.");if(!t.model)throw new m("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const r of o)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(a===u)continue}throw new m(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new J(this.apiKey,i,s)}}const se=()=>sessionStorage.getItem("judge_gemini_key")||{}.VITE_GEMINI_API_KEY||"",Ke=()=>{const e=se();return e?new $e(e):null};let X=null,z=null;const ke=()=>{const e=se();return e!==z&&(z=e,X=Ke()),X};async function Be(e,t,n){try{const s=ke();if(!s)throw new Error("GenAI not initialized");const o=s.getGenerativeModel({model:"gemini-1.5-flash"}),i=(n||[]).map(u=>`${u.role==="user"?"User":"EcoBot"}: ${u.content}`).join(`
`),r=`You are EcoBot, a helpful, friendly carbon footprint assistant. 
User context — monthly CO₂: ${((t==null?void 0:t.monthlyCO2)||0).toFixed(1)}kg, streak: ${(t==null?void 0:t.streak)||0} days, level: ${(t==null?void 0:t.level)||"Seedling"}, country: India. 

Answer questions about carbon footprint, sustainability, and climate. Reference their personal data when relevant. Keep answers concise (under 4 sentences) unless they ask for detail. Be warm and encouraging.

Here is the conversation history:
${i}

User's new message: ${e}

Response:`;return(await o.generateContent(r)).response.text()}catch{return"I am currently running in offline/local helper mode, but I'm here to support your green journey! Reducing transport emissions by walking and switching off appliances are great first steps to save CO2."}}function Ye({message:e="",isBot:t=!0,position:n=[0,0,0],...s}){const r=t?-2.1999999999999997:2.1999999999999997,a=t?"#00ff87":"#00d4ff";return c.jsx(ce,{speed:1.5,rotationIntensity:.05,floatIntensity:.2,children:c.jsxs("group",{position:n,...s,children:[c.jsxs("mesh",{position:[r,0,0],castShadow:!0,children:[c.jsx("sphereGeometry",{args:[.18,16,16]}),c.jsx("meshStandardMaterial",{color:t?"#00ff87":"#00d4ff",emissive:t?"#00ff87":"#00d4ff",emissiveIntensity:.5,roughness:.1,metalness:.8}),c.jsxs("mesh",{scale:[1.15,1.15,1.15],children:[c.jsx("sphereGeometry",{args:[.18,8,8]}),c.jsx("meshBasicMaterial",{color:"#ffffff",wireframe:!0,transparent:!0,opacity:.3})]})]}),c.jsx(T,{width:3.8,height:.85,depth:.04,glowColor:a,children:c.jsx(w,{position:[0,0,.035],fontSize:.11,color:"#ffffff",maxWidth:3.8-.4,lineHeight:1.3,anchorX:"center",anchorY:"middle",children:e})})]})})}function Xe(){oe();const{chatHistory:e,addChatMessage:t,userStats:n}=ie(),[s,o]=N.useState(""),[i,r]=N.useState(!1),a=N.useRef();re((f,l)=>{a.current&&(a.current.rotation.y+=.8*l,a.current.rotation.x+=.3*l)});const u=[{text:"Reduce transport emissions →",q:"How can I reduce my daily transport emissions in India?"},{text:"My worst CO₂ category →",q:"What is typically the worst CO₂ category for home energy, and how can I fix it?"},{text:"Give me a 7-day challenge →",q:"Give me a concrete 7-day challenge to reduce my carbon footprint."},{text:"Compare to Indian average →",q:"How does a weekly carbon footprint of 80kg compare to the Indian average?"}],E=async f=>{const l=f||s;if(!(!l.trim()||i)){t({sender:"user",text:l}),o(""),r(!0);try{const d=e.map(p=>({role:p.sender==="user"?"user":"model",content:p.text})),h=await Be(l,n,d);t({sender:"bot",text:h})}catch{t({sender:"bot",text:"Apologies, I encountered a communication error with my core network."})}finally{r(!1)}}},C=e.slice(-3);return c.jsxs("group",{children:[c.jsx(ae,{count:40,scale:5,size:2,speed:.4,color:"#00ff87"}),c.jsx("group",{position:[-2.1,-.1,0],rotation:[-.1,.05,0],children:c.jsxs(T,{width:2.4,height:2.8,depth:.05,glowColor:"#00ff87",children:[c.jsxs("group",{ref:a,position:[0,.82,.05],children:[c.jsxs("mesh",{castShadow:!0,children:[c.jsx("icosahedronGeometry",{args:[.22,1]}),c.jsx("meshStandardMaterial",{color:"#00ff87",wireframe:!0,emissive:"#00ff87",emissiveIntensity:.5})]}),c.jsxs("mesh",{scale:[.85,.85,.85],children:[c.jsx("icosahedronGeometry",{args:[.22,1]}),c.jsx("meshStandardMaterial",{color:"#020b06",metalness:.9,roughness:.1})]})]}),c.jsx(w,{position:[0,.42,.05],fontSize:.12,color:"#ffffff",children:"ECOBOT CORE V1.5"}),c.jsxs("group",{position:[0,.08,.05],children:[c.jsx(de,{progress:.65,size:.18,color:"#00ff87"}),c.jsx(w,{position:[.42,0,0],fontSize:.095,color:"#ffffff",anchorX:"left",anchorY:"middle",children:"STREAK SYNC"})]}),c.jsx("group",{position:[0,-.22,.05],children:u.map((f,l)=>c.jsx("group",{position:[0,-l*.26,0],children:c.jsx(b,{width:2,height:.2,label:f.text,color:"#001f0d",textColor:"#00ff87",fontSize:.055,onClick:()=>E(f.q)})},l))})]})}),c.jsx("group",{position:[1.2,-.1,-.1],rotation:[-.1,-.05,0],children:c.jsxs(T,{width:3.8,height:2.8,depth:.05,glowColor:"#00d4ff",children:[c.jsx(w,{position:[0,1.22,.05],fontSize:.13,color:"#ffffff",children:"HOLOGRAM COMMUNICATION LINK"}),c.jsxs("group",{position:[0,.35,.05],children:[C.map((f,l)=>{const d=f.sender==="bot",h=.45-l*.76;return c.jsx(Ye,{message:f.text.substring(0,100)+(f.text.length>100?"...":""),isBot:d,position:[0,h,.02]},l)}),i&&c.jsxs("group",{position:[-.4,-.42,.02],children:[c.jsxs("mesh",{position:[0,0,0],children:[c.jsx("sphereGeometry",{args:[.04,8,8]}),c.jsx("meshBasicMaterial",{color:"#00ff87"})]}),c.jsxs("mesh",{position:[.12,0,0],children:[c.jsx("sphereGeometry",{args:[.04,8,8]}),c.jsx("meshBasicMaterial",{color:"#00ff87"})]}),c.jsxs("mesh",{position:[.24,0,0],children:[c.jsx("sphereGeometry",{args:[.04,8,8]}),c.jsx("meshBasicMaterial",{color:"#00ff87"})]})]})]}),c.jsx("group",{position:[-.5,-1.02,.05],children:c.jsx(le,{width:2.4,height:.34,placeholder:"ASK ECOBOT...",value:s,onChange:f=>o(f.target.value)})}),c.jsx("group",{position:[1.1,-1.02,.05],children:c.jsx(b,{width:.65,height:.34,label:"SEND",color:s.trim()?"#00ff87":"rgba(0,255,135,0.2)",textColor:s.trim()?"#020b06":"#00ff87",fontSize:.08,onClick:()=>E()})})]})})]})}export{Xe as AICoachScene,Xe as default};
