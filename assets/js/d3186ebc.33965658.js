"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[5741],{3582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var s=t(4848),i=t(8453);const r={title:"chunk"},a=void 0,c={id:"functions/arrays/chunk",title:"chunk",description:"Creates an array of elements split into groups the length of size.",source:"@site/docs/functions/arrays/chunk.mdx",sourceDirName:"functions/arrays",slug:"/functions/arrays/chunk",permalink:"/js-utilities/docs/functions/arrays/chunk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"chunk"},sidebar:"tutorialSidebar",previous:{title:"arrayMove",permalink:"/js-utilities/docs/functions/arrays/array-move"},next:{title:"findIndex",permalink:"/js-utilities/docs/functions/arrays/find-index"}},o={},u=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Creates an array of elements split into groups the length of size.\nIf array can\u2019t be split evenly, the final chunk will be the remaining elements."}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function chunk<T>(arr: T[], chunkSize: number = 1): T[][];\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { chunk } from \"@feedzai/js-utilities\";\n\nchunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])\n// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]\n\nchunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)\n// => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]\n\nchunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)\n// => []\n\nchunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)\n// => []\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);