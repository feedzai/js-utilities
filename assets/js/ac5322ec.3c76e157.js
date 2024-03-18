"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[1751],{8135:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(4848),s=t(8453);const r={title:"isNumber"},u=void 0,c={id:"functions/typed/is-number",title:"isNumber",description:"Checks if value is classified as a Number primitive or object.",source:"@site/docs/functions/typed/is-number.mdx",sourceDirName:"functions/typed",slug:"/functions/typed/is-number",permalink:"/js-utilities/docs/functions/typed/is-number",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"isNumber"},sidebar:"tutorialSidebar",previous:{title:"isNull",permalink:"/js-utilities/docs/functions/typed/is-null"},next:{title:"isObject",permalink:"/js-utilities/docs/functions/typed/is-object"}},o={},a=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["Checks if ",(0,n.jsx)(i.code,{children:"value"})," is classified as a Number primitive or object."]}),"\n",(0,n.jsx)(i.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"function isNumber(value?: any): value is number;\n"})}),"\n",(0,n.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"import { isNumber } from '@feedzai/js-utilities';\n\nisNumber(3)\n// true\n\nisNumber(Number.MIN_VALUE)\n// true\n\nisNumber(Infinity)\n// true\n\nisNumber('3')\n// false\n"})})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>u,x:()=>c});var n=t(6540);const s={},r=n.createContext(s);function u(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);