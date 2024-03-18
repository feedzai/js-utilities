"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[5686],{2554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(4848),i=t(8453);const s={title:"uniq"},o=void 0,a={id:"functions/arrays/uniq",title:"uniq",description:"Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.",source:"@site/docs/functions/arrays/uniq.mdx",sourceDirName:"functions/arrays",slug:"/functions/arrays/uniq",permalink:"/js-utilities/docs/functions/arrays/uniq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"uniq"},sidebar:"tutorialSidebar",previous:{title:"uniqBy",permalink:"/js-utilities/docs/functions/arrays/uniq-by"},next:{title:"isBrowser",permalink:"/js-utilities/docs/functions/browsers/is-browser"}},c={},u=[{value:"API",id:"api",level:3},{value:"Example",id:"example",level:3}];function l(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array."}),"\n",(0,r.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function uniq<Source>(array: Source[]): Source[];\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { uniq } from "@feedzai/js-utilities";\n\nconst DATA = [\n\t"Homer",\n\t"Marge",\n\t"Lisa",\n\t"Bart",\n\t"Maggie"\n];\nconst DUPLICATED_ARRAY = [\n\t...DATA,\n\t...DATA,\n]\n\nconst RESULT = uniq(DUPLICATED_ARRAY);\n\nconsole.log(RESULT) // ["Homer","Marge", "Lisa","Bart","Maggie"];\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);