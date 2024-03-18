"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[8393],{9869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(4848),i=n(8453);const r={title:"flatMap"},s=void 0,l={id:"functions/arrays/flat-map",title:"flatMap",description:"Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.",source:"@site/docs/functions/arrays/flat-map.mdx",sourceDirName:"functions/arrays",slug:"/functions/arrays/flat-map",permalink:"/js-utilities/docs/functions/arrays/flat-map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"flatMap"},sidebar:"tutorialSidebar",previous:{title:"find",permalink:"/js-utilities/docs/functions/arrays/find"},next:{title:"flatten",permalink:"/js-utilities/docs/functions/arrays/flatten"}},o={},c=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level."}),"\n",(0,a.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"function flatMap<T>(arr: T[], callback: (value: T, index: number, array: T[]) => T[]): T[];\n"})}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { flatMap } from "@feedzai/js-utilities";\n\nflatMap([1, 2], n => [n, n])\n// => [1, 1, 2, 2]\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);