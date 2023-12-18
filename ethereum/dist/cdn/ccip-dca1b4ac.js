import{B as l,b as w,s as y,i as p,I as h,d as g,e as k,f as O,h as L,H as m,j as E}from"./bundle-72986134.js";class x extends l{constructor({callbackSelector:e,cause:t,data:o,extraData:c,sender:s,urls:n}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(d=>`    ${w(d)}`)],`  Sender: ${s}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends l{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(t)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends l{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function $(a,e){if(!p(a))throw new h({address:a});if(!p(e))throw new h({address:e});return a.toLowerCase()===e.toLowerCase()}const v="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function C(a,{blockNumber:e,blockTag:t,data:o,to:c}){const{args:s}=g({data:o,abi:[S]}),[n,d,r,i,f]=s;try{if(!$(c,n))throw new R({sender:n,to:c});const u=await A({data:r,sender:n,urls:d}),{data:b}=await k(a,{blockNumber:e,blockTag:t,data:O([i,L([{type:"bytes"},{type:"bytes"}],[u,f])]),to:c});return b}catch(u){throw new x({callbackSelector:i,cause:u,data:o,extraData:f,sender:n,urls:d})}}async function A({data:a,sender:e,urls:t}){let o=new Error("An unknown error occurred.");for(let c=0;c<t.length;c++){const s=t[c],n=s.includes("{sender}")||s.includes("{data}")?"GET":"POST",d=n==="POST"?{data:a,sender:e}:void 0;try{const r=await fetch(s.replace("{sender}",e).replace("{data}",a),{body:JSON.stringify(d),method:n});let i;if(r.headers.get("Content-Type")?.startsWith("application/json")?i=(await r.json()).data:i=await r.text(),!r.ok){o=new m({body:d,details:y(i.error)||r.statusText,headers:r.headers,status:r.status,url:s});continue}if(!E(i)){o=new M({result:i,url:s});continue}return i}catch(r){o=new m({body:d,details:r.message,url:s})}}throw o}export{A as ccipFetch,C as offchainLookup,S as offchainLookupAbiItem,v as offchainLookupSignature};
//# sourceMappingURL=ccip-dca1b4ac.js.map
