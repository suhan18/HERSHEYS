import{r as c,j as s}from"./index-XyfsBjoy.js";import{G as j}from"./index-9e_-FguT.js";import"./__commonjsHelpers__-4gQjN7DL.js";const S=()=>{const g=new j("AIzaSyAZd7u_oOGUApMoylIsBERj1TiD6P9ptXc"),[f,y]=c.useState(""),[r,d]=c.useState(""),[w,m]=c.useState(!1);async function A(){m(!0),d("");const t=[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_DANGEROUS",threshold:"BLOCK_NONE"}],o=g.getGenerativeModel({model:"gemini-pro"}),a=`fetch relevant provisions of Indian laws and Constitution related to the following case , also name and define in one line all the laws and IPC which are applicable and used in the case: {try to give response in table format in case of laws} ,also  put it at the last enclosed in 'Grade:' based on the severity of the input incident ${f} `,i=await(await o.generateContent(a,t)).response,l=await R(i.candidates[0].content.parts[0].text);d(l),m(!1)}const E=t=>{y(t.target.value)},N=()=>{A()},R=async t=>/\|.*\|/.test(t)?await _(t):C(t),_=async t=>{const a=t.split(`
`).filter(e=>e.trim()!==""),h=a[1].includes("---"),[i,...l]=a,p=h?"th":"td",T=i.split("|").filter(e=>e.trim()!=="").map(e=>e.replace(/\\(.?)\\*/g,(n,u)=>`<strong>${u}</strong>`)).map(e=>`<${p}>${e.trim()}</${p}>`).join(""),x=l.map(e=>e.split("|").filter(n=>n.trim()!=="").map(n=>n.replace(/\\(.?)\\*/g,(u,b)=>`<strong>${b}</strong>`)).map(n=>`<td>${n.trim()}</td>`).join("")).map(e=>`<tr>${e}</tr>`).join("");return`<table><thead>${T}</thead><tbody>${x}</tbody></table>`},C=t=>(t=t.replace(/\\(.?)\\*/g,(o,a)=>`<strong>${a}</strong>`),t=t.replace(/## (.*?)(\n|$)/g,(o,a)=>`<h2>${a}</h2>`),t=`<div class="normal-text">${t}</div>`,t);return s.jsxs("div",{className:"container mt-3",children:[s.jsxs("div",{className:"d-flex",children:[s.jsx("input",{className:"form-control",placeholder:"What is your issue?",onChange:t=>E(t)}),s.jsx("button",{className:"btn btn-primary ml-3",onClick:()=>N(),style:{marginTop:"10rem",marginLeft:"2rem"},children:"Search"})]}),s.jsx("div",{}),w&&r===""?s.jsx("p",{className:"mt-3 text-white",children:"Loading ..."}):s.jsx("div",{className:"mt-3",children:r?s.jsx("div",{className:"text-white",dangerouslySetInnerHTML:{__html:r}}):s.jsx("p",{className:"text-white",children:"No response found."})})]})};export{S as default};
