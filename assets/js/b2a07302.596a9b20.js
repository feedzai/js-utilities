"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[6088],{2379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(4848),r=n(8453);const s={title:"flatten"},i=void 0,o={id:"functions/arrays/flatten",title:"flatten",description:"Flattens an array for a certain number of levels deep. It can do it up to a certain depth or recursively.",source:"@site/docs/functions/arrays/flatten.mdx",sourceDirName:"functions/arrays",slug:"/functions/arrays/flatten",permalink:"/js-utilities/docs/functions/arrays/flatten",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"flatten"},sidebar:"tutorialSidebar",previous:{title:"flatMap",permalink:"/js-utilities/docs/functions/arrays/flat-map"},next:{title:"groupBy",permalink:"/js-utilities/docs/functions/arrays/group-by"}},l={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Flattens an array for a certain number of levels deep. It can do it up to a certain depth or recursively."}),"\n",(0,a.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"function flatten<T>(arr: T[], level?: number | boolean);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { flatten } from "@feedzai/js-utilities";\n\nconst array = [1, [2, [3, [4]], 5]]\n\nflatten(array, true)\n// => [1, 2, 3, 4, 5]\n\nflattenDepth(array, 1)\n// => [1, 2, [3, [4]], 5]\n\nflattenDepth(array, 2)\n// => [1, 2, 3, [4], 5]\n\nflatten(array, 5]])\n// => [1, 2, [3, [4]], 5]\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);