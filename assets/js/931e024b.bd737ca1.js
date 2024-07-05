"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[3165],{9693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(4848),s=t(8453);const r={title:"isArray"},a=void 0,c={id:"functions/typed/is-array",title:"isArray",description:"Checks if value is classified as an Array object.",source:"@site/docs/functions/typed/is-array.mdx",sourceDirName:"functions/typed",slug:"/functions/typed/is-array",permalink:"/js-utilities/docs/functions/typed/is-array",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"isArray"},sidebar:"tutorialSidebar",previous:{title:"trim",permalink:"/js-utilities/docs/functions/string/trim"},next:{title:"isBlank",permalink:"/js-utilities/docs/functions/typed/is-blank"}},o={},l=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Checks if ",(0,i.jsx)(n.code,{children:"value"})," is classified as an Array object."]}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function isArray(value: unknown): value is any[];\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { isArray } from '@feedzai/js-utilities';\n\nisArray([1, 2, 3])\n// true\n\nisArray(document.body.children)\n// false\n\nisArray('abc')\n// false\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);