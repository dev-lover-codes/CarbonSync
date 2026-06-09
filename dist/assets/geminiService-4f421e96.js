var S;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(S||(S={}));/**
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
 */var b;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(b||(b={}));var M;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(M||(M={}));/**
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
 */const G=["user","model","function","system"];var x;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(x||(x={}));var L;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(L||(L={}));var D;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(D||(D={}));var U;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(U||(U={}));var I;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(I||(I={}));var k;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(k||(k={}));var $;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})($||($={}));var F;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(F||(F={}));/**
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
 */class u extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class O extends u{constructor(t,n){super(t),this.response=n}}class J extends u{constructor(t,n,o,s){super(t),this.status=n,this.statusText=o,this.errorDetails=s}}class E extends u{}class V extends u{}/**
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
 */const Q="https://generativelanguage.googleapis.com",Z="v1beta",ee="0.24.1",te="genai-js";var C;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(C||(C={}));class ne{constructor(t,n,o,s,i){this.model=t,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var t,n;const o=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||Z;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||Q}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function oe(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${te}/${ee}`),t.join(" ")}async function se(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",oe(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new E(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new E(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new E(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function ie(e,t,n,o,s,i){const r=new ne(e,t,n,o,i);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},le(i)),{method:"POST",headers:await se(r),body:s})}}async function w(e,t,n,o,s,i={},r=fetch){const{url:a,fetchOptions:l}=await ie(e,t,n,o,s,i);return re(a,l,r)}async function re(e,t,n=fetch){let o;try{o=await n(e,t)}catch(s){ae(s,e)}return o.ok||await ce(o,e),o}function ae(e,t){let n=e;throw n.name==="AbortError"?(n=new V(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof J||e instanceof E||(n=new u(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function ce(e,t){let n="",o;try{const s=await e.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new J(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,o)}function le(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
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
 */function N(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new O(`${g(e)}`,e);return de(e)}else if(e.promptFeedback)throw new O(`Text not available. ${g(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new O(`${g(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),H(e)[0]}else if(e.promptFeedback)throw new O(`Function call not available. ${g(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new O(`${g(e)}`,e);return H(e)}else if(e.promptFeedback)throw new O(`Function call not available. ${g(e)}`,e)},e}function de(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.text&&i.push(r.text),r.executableCode&&i.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&i.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function H(e){var t,n,o,s;const i=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const r of(s=(o=e.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)r.functionCall&&i.push(r.functionCall);if(i.length>0)return i}const ue=[I.RECITATION,I.SAFETY,I.LANGUAGE];function A(e){return!!e.finishReason&&ue.includes(e.finishReason)}function g(e){var t,n,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];A(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function fe(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),s,i=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(d){o[d]&&(s[d]=function(c){return new Promise(function(f,v){i.push([d,c,f,v])>1||a(d,c)})})}function a(d,c){try{l(o[d](c))}catch(f){y(i[0][3],f)}}function l(d){d.value instanceof m?Promise.resolve(d.value.v).then(h,_):y(i[0][2],d)}function h(d){a("next",d)}function _(d){a("throw",d)}function y(d,c){d(c),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
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
 */const j=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function he(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=pe(t),[o,s]=n.tee();return{stream:Ee(o),response:ge(s)}}async function ge(e){const t=[],n=e.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return N(Ce(t));t.push(s)}}function Ee(e){return fe(this,arguments,function*(){const n=e.getReader();for(;;){const{value:o,done:s}=yield m(n.read());if(s)break;yield yield m(N(o))}})}function pe(e){const t=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return t.read().then(({value:r,done:a})=>{if(a){if(s.trim()){o.error(new u("Failed to parse stream"));return}o.close();return}s+=r;let l=s.match(j),h;for(;l;){try{h=JSON.parse(l[1])}catch{o.error(new u(`Error parsing JSON response: "${l[1]}"`));return}o.enqueue(h),s=s.substring(l[0].length),l=s.match(j)}return i()}).catch(r=>{let a=r;throw a.stack=r.stack,a.name==="AbortError"?a=new V("Request aborted when reading from the stream"):a=new u("Error reading from the stream"),a})}}})}function Ce(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e){if(o.candidates){let s=0;for(const i of o.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const r={};for(const a of i.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),n.candidates[s].content.parts.push(r)}s++}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
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
 */async function W(e,t,n,o){const s=await w(t,C.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return he(s)}async function z(e,t,n,o){const i=await(await w(t,C.GENERATE_CONTENT,e,!1,JSON.stringify(n),o)).json();return{response:N(i)}}/**
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
 */function X(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function R(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return _e(t)}function _e(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new u("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new u("No content is provided for sending chat message.");return o?t:n}function ye(e,t){var n;let o={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=e.generateContentRequest!=null;if(e.contents){if(s)throw new E("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const i=R(e);o.contents=[i]}return{generateContentRequest:o}}function Y(e){let t;return e.contents?t=e:t={contents:[R(e)]},e.systemInstruction&&(t.systemInstruction=X(e.systemInstruction)),t}function ve(e){return typeof e=="string"||Array.isArray(e)?{content:R(e)}:e}/**
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
 */const K=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Oe={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ie(e){let t=!1;for(const n of e){const{role:o,parts:s}=n;if(!t&&o!=="user")throw new u(`First content should be with role 'user', got ${o}`);if(!G.includes(o))throw new u(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(G)}`);if(!Array.isArray(s))throw new u("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new u("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of s)for(const l of K)l in a&&(i[l]+=1);const r=Oe[o];for(const a of K)if(!r.includes(a)&&i[a]>0)throw new u(`Content with role '${o}' can't contain '${a}' part`);t=!0}}function B(e){var t;if(e.candidates===void 0||e.candidates.length===0)return!1;const n=(t=e.candidates[0])===null||t===void 0?void 0:t.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const o of n.parts)if(o===void 0||Object.keys(o).length===0||o.text!==void 0&&o.text==="")return!1;return!0}/**
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
 */const q="SILENT_ERROR";class me{constructor(t,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(Ie(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var o,s,i,r,a,l;await this._sendPromise;const h=R(t),_={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},y=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,_,y)).then(c=>{var f;if(B(c.response)){this._history.push(h);const v=Object.assign({parts:[],role:"model"},(f=c.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(v)}else{const v=g(c.response);v&&console.warn(`sendMessage() was unsuccessful. ${v}. Inspect response object for details.`)}d=c}).catch(c=>{throw this._sendPromise=Promise.resolve(),c}),await this._sendPromise,d}async sendMessageStream(t,n={}){var o,s,i,r,a,l;await this._sendPromise;const h=R(t),_={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(r=this.params)===null||r===void 0?void 0:r.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},y=Object.assign(Object.assign({},this._requestOptions),n),d=W(this._apiKey,this.model,_,y);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(q)}).then(c=>c.response).then(c=>{if(B(c)){this._history.push(h);const f=Object.assign({},c.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=g(c);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(c=>{c.message!==q&&console.error(c)}),d}}/**
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
 */async function Re(e,t,n,o){return(await w(t,C.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function we(e,t,n,o){return(await w(t,C.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function Ae(e,t,n,o){const s=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await w(t,C.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class P{constructor(t,n,o={}){this.apiKey=t,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=X(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var o;const s=Y(t),i=Object.assign(Object.assign({},this._requestOptions),n);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(t,n={}){var o;const s=Y(t),i=Object.assign(Object.assign({},this._requestOptions),n);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(t){var n;return new me(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const o=ye(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return Re(this.apiKey,this.model,o,s)}async embedContent(t,n={}){const o=ve(t),s=Object.assign(Object.assign({},this._requestOptions),n);return we(this.apiKey,this.model,o,s)}async batchEmbedContents(t,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return Ae(this.apiKey,this.model,t,o)}}/**
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
 */class Ne{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new u("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new P(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,o){if(!t.name)throw new E("Cached content must contain a `name` field.");if(!t.model)throw new E("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const r of s)if(n!=null&&n[r]&&t[r]&&(n==null?void 0:n[r])!==t[r]){if(r==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(a===l)continue}throw new E(`Different value for "${r}" specified in modelParams (${n[r]}) and cachedContent (${t[r]})`)}const i=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new P(this.apiKey,i,o)}}const Te=()=>({}).VITE_GEMINI_API_KEY||"",Se=()=>{const e=Te();return e?new Ne(e):(console.warn("VITE_GEMINI_API_KEY is not defined. Gemini features will use mock/fallback data."),null)},p=Se();function T(e){try{let t=e.trim();return t.startsWith("```")&&(t=t.replace(/^```(?:json)?\n?/,"").replace(/\n?```$/,"")),JSON.parse(t.trim())}catch(t){throw console.error("Failed to parse Gemini response as JSON:",e,t),t}}async function be(e,t){try{if(!p)throw new Error("GenAI not initialized");const n=p.getGenerativeModel({model:"gemini-1.5-flash"}),o=`You are EcoBot, a friendly and encouraging carbon footprint coach for Indian users. 
The user's profile: ${JSON.stringify(e||{})}. 
Today's logged activities: ${JSON.stringify(t||[])}. 

Give ONE specific, actionable tip to reduce their carbon footprint today. Keep it under 2 sentences. Be warm, specific, and mention estimated CO₂ savings if possible.

Return ONLY a valid JSON object with the following fields:
{
  "tip": "the tip text",
  "impactKg": 1.5,
  "category": "transport" (must be one of: transport, food, energy, shopping, waste)
}
Do not return any other text, markdown blocks, or explanation.`,i=(await n.generateContent(o)).response.text();return T(i)}catch(n){return console.error("Error in getDailyTip:",n),{tip:"Unplug standby home electronics like TVs and chargers when not in use. It can save up to 1.2kg of CO2 today.",impactKg:1.2,category:"energy"}}}async function Me(e,t){try{if(!p)throw new Error("GenAI not initialized");const n=p.getGenerativeModel({model:"gemini-1.5-flash"}),o=`You are EcoBot. Analyze this week vs last week carbon data for an Indian user.
This week: ${JSON.stringify(e||[])}.
Last week: ${JSON.stringify(t||[])}.

Write a 2-3 sentence personalized insight. Mention specific numbers. Identify what improved and one concrete focus area. Be encouraging.

Return ONLY a valid JSON object:
{
  "insight": "Your weekly insight text here.",
  "trend": "improving", (one of: improving, steady, increasing)
  "highlight": "Highlight metric or key achievement"
}
Do not return any other text.`,i=(await n.generateContent(o)).response.text();return T(i)}catch(n){return console.error("Error in getWeeklyInsight:",n),{insight:"Great job keeping your food-related emissions low this week! Your transport emissions increased slightly due to commute distance. Consider carpooling or using public transit next week.",trend:"steady",highlight:"Food emissions decreased by 15%"}}}async function Ge(e,t,n){try{if(!p)throw new Error("GenAI not initialized");const o=p.getGenerativeModel({model:"gemini-1.5-flash"}),s=(n||[]).map(a=>`${a.role==="user"?"User":"EcoBot"}: ${a.content}`).join(`
`),i=`You are EcoBot, a helpful, friendly carbon footprint assistant. 
User context — monthly CO₂: ${((t==null?void 0:t.monthlyCO2)||0).toFixed(1)}kg, streak: ${(t==null?void 0:t.streak)||0} days, level: ${(t==null?void 0:t.level)||"Seedling"}, country: India. 

Answer questions about carbon footprint, sustainability, and climate. Reference their personal data when relevant. Keep answers concise (under 4 sentences) unless they ask for detail. Be warm and encouraging.

Here is the conversation history:
${s}

User's new message: ${e}

Response:`;return(await o.generateContent(i)).response.text()}catch(o){return console.error("Error in getChatResponse:",o),"I am currently running in offline/local helper mode, but I'm here to support your green journey! Reducing transport emissions by walking and switching off appliances are great first steps to save CO2."}}async function xe(e){try{if(!p)throw new Error("GenAI not initialized");const t=p.getGenerativeModel({model:"gemini-1.5-flash"}),n=`Score this monthly carbon footprint data from 0-100 where 100 = zero carbon and 50 = Indian national average (1800 kg/year or 150 kg/month). 
Data: ${JSON.stringify(e||[])}.

Return ONLY valid JSON: 
{ 
  "score": 75, 
  "grade": "B", 
  "summary": "One sentence summary comparing to average.", 
  "topTip": "One specific actionable tip." 
}
Do not include any explanation or extra text outside the JSON.`,s=(await t.generateContent(n)).response.text();return T(s)}catch(t){return console.error("Error in getFootprintScore:",t),{score:65,grade:"B",summary:"Your carbon footprint is roughly 15% lower than the national Indian average.",topTip:"Consolidate grocery trips and switch to vegetarian meals twice a week to improve your score further."}}}export{Ge as a,xe as b,Me as c,be as g};
