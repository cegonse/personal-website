function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire246d;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequire246d=o),o.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("kUScX",(function(e,t){e.exports=new URL(o("27Lyk").resolve("65tXl"),import.meta.url).toString()})),o.register("lg54t",(function(e,t){e.exports=new URL(o("27Lyk").resolve("8Jmxm"),import.meta.url).toString()})),o.register("5PyNV",(function(e,t){e.exports=new URL(o("27Lyk").resolve("4lEGB"),import.meta.url).toString()})),o.register("jqq6B",(function(e,t){e.exports=new URL(o("27Lyk").resolve("9o8ku"),import.meta.url).toString()})),o.register("9YgQ6",(function(e,t){e.exports=new URL(o("27Lyk").resolve("gOduK"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"9vqfN":"index.cab0b727.js","65tXl":"cursor1.0f7ceab1.png","8Jmxm":"cursor2.87f29c55.png","4lEGB":"cursor3.55f14e47.png","9o8ku":"cursor4.b1e68b38.png","gOduK":"cursor5.d436a6d3.png"}'));const s=e=>document.querySelector(`#${e}`);let i=`User${Math.floor(100*Math.random())}`;const c=Math.floor(5*Math.random());let d=!1,a=!1,u=performance.now();s("username").value=i;let l=Automerge.init();s("connect").addEventListener("click",(()=>{i=s("username").value.replace(" ","");const e=new WebSocket("ws://4.tcp.eu.ngrok.io:17115");e.addEventListener("message",(e=>{const t=JSON.parse(e.data);if(t.document){const e=k(t.document);l=Automerge.merge(l,Automerge.load(e)),a=!0,L()}if(t.changes){const e=k(t.changes),[n,r]=Automerge.applyChanges(l,[e]);l=n,L()}if(t.cursor){if(t.userId===i)return;v(t)}void 0===t.cursor&&console.log("Received",t)}));e.addEventListener("open",(()=>{var t;e.send((t=i,JSON.stringify({userId:t}))),d=!0})),document.querySelector("body").addEventListener("mousemove",(t=>{var n,r,o,s;d&&performance.now()-u>80&&(e.send((n=i,r=c,o=t.clientX,s=t.clientY,JSON.stringify({userId:n,cursor:{profile:r,x:o,y:s}}))),u=performance.now())})),window.updateNode=t=>{const n=t.split("_")[0],r=Automerge.change(l,(e=>{const r=e.nodes.find((e=>e.id===n));w(t)?r.status="open":r.status="closed"})),o=Automerge.getChanges(l,r);e.send(((e,t)=>JSON.stringify({userId:e,changes:_(t)}))(i,o[0])),console.log("New scenario: ",r),l=r}}));const p=[o("kUScX"),o("lg54t"),o("5PyNV"),o("jqq6B"),o("9YgQ6")],f=["8a70fc","4bb62c","d9d559","b22212","d82ee5"],g=["FFFFFF","FFFFFF","000000","FFFFFF","FFFFFF"],m=[],y=[{x:100,y:100,id:"Junction1",next:"Junction3"},{x:400,y:100,id:"Junction2",next:"Junction1"},{x:100,y:400,id:"Junction3",next:"Junction4"},{x:400,y:400,id:"Junction4",next:"Junction2"}];let h=0;const b=new THREE.Clock,v=e=>{const t=`${e.userId}_cursor`,n=`${e.userId}_name`;if(!s(t)){const t=F(e.userId,e.cursor.profile);document.querySelector("body").innerHTML+=t}s(n).style["background-color"]=f[e.cursor.profile],s(n).style.color=g[e.cursor.profile];const r=m.find((t=>t.id===e.userId));void 0===r?m.push({id:e.userId,x:e.cursor.x,y:e.cursor.y}):(r.x=e.cursor.x,r.y=e.cursor.y)};!function e(){requestAnimationFrame(e),h=b.getDelta(),t=h,document.querySelectorAll("[id$=_cursor]").forEach((e=>{const n=m.find((t=>t.id===e.id.split("_")[0])),r=e.getBoundingClientRect();e.style.left=THREE.MathUtils.damp(r.left,n.x,10,t),e.style.top=THREE.MathUtils.damp(r.top,n.y,10,t)}));var t}();const x=e=>y.find((t=>t.id===e)),F=(e,t)=>`<div class="cursorTooltip" id="${e}_cursor">\n  <img src="${p[t]}" class="cursor"></img>\n  <span id="${e}_name" class="cursorUserId">${e}</span>\n</div>`,w=e=>document.querySelector(`#${e}`).checked,L=()=>{if(!a)return;const e=s("canvas"),t=s("canvas").getContext("2d");e.width=document.body.clientWidth,e.height=document.body.clientHeight,t.clearRect(0,0,e.width,e.height),l.nodes.forEach((e=>{if(!s(`${e.id}`)){const t=(n=e.id,r=e.status,`<div class="node" id="${n}">\n  <span class="nodeItem"><b>ID</b> <span id="${n}_idLabel">${n}</span></span>\n  <span class="nodeItem"><b>Status</b> <span id="${n}_statusLabel">${r}</span></span>\n  <input class="nodeItem" id="${n}_check" ${"open"===r?"checked":""} type="checkbox" onclick="window.updateNode(this.id)"></input>\n</div>`);s("nodes").innerHTML+=t}var n,r;const o=x(e.id),i=x(o.next);t.beginPath(),t.lineWidth=3,t.setLineDash("closed"===e.status?[5,15]:[]),t.moveTo(o.x,o.y),t.lineTo(i.x,i.y),t.stroke(),t.beginPath(),t.lineWidth=1,t.setLineDash([]),t.moveTo(o.x,o.y),t.lineTo(o.x+50,o.y+50),t.stroke(),t.beginPath(),t.arc(o.x,o.y,10,0,2*Math.PI),t.fill(),s(e.id).style.left=o.x+50,s(e.id).style.top=o.y+50,s(`${e.id}_idLabel`).innerHTML=e.id,s(`${e.id}_statusLabel`).innerHTML=e.status,s(`${e.id}_check`).checked="open"===e.status}))},_=e=>{for(var t=[],n=0;n<e.length;n+=32768)t.push(String.fromCharCode.apply(null,e.subarray(n,n+32768)));return btoa(t.join(""))},k=e=>{for(var t=window.atob(e),n=t.length,r=new Uint8Array(n),o=0;o<n;o++)r[o]=t.charCodeAt(o);return r};
//# sourceMappingURL=index.cab0b727.js.map
