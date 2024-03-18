"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[496],{1868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(4848),r=t(8453);const s={title:"find"},a=void 0,o={id:"functions/arrays/find",title:"find",description:"Iterates over elements of collection, returning the first element predicate returns truthy for.",source:"@site/docs/functions/arrays/find.mdx",sourceDirName:"functions/arrays",slug:"/functions/arrays/find",permalink:"/js-utilities/docs/functions/arrays/find",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"find"},sidebar:"tutorialSidebar",previous:{title:"findIndex",permalink:"/js-utilities/docs/functions/arrays/find-index"},next:{title:"flatMap",permalink:"/js-utilities/docs/functions/arrays/flat-map"}},c={},u=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Iterates over elements of collection, returning the first element predicate returns truthy for.\nThe predicate is invoked with three arguments: (value, index|key, collection)."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function find<T>(\n\tarr: T[],\n\tpredicate: (value: T, index: number, obj: T[]) => unknown\n): T | undefined;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { find } from \"@feedzai/js-utilities\";\n\nconst users = [\n { user: 'barney', age: 36, active: true },\n { user: 'fred', age: 40, active: false },\n { user: 'pebbles', age: 1, active: true },\n]\n\nfind(users, items => items.age < 40)\n// => { user: \"barney\", age: 36, active: true }\n\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);