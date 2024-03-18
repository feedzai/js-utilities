"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[2838],{9266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var i=n(4848),s=n(8453);const c={title:"pick"},o=void 0,r={id:"functions/objects/pick",title:"pick",description:"Creates an object composed of the picked object properties.",source:"@site/docs/functions/objects/pick.mdx",sourceDirName:"functions/objects",slug:"/functions/objects/pick",permalink:"/js-utilities/docs/functions/objects/pick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"pick"},sidebar:"tutorialSidebar",previous:{title:"omit",permalink:"/js-utilities/docs/functions/objects/omit"},next:{title:"set",permalink:"/js-utilities/docs/functions/objects/set"}},a={},p=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Creates an object composed of the picked object properties."}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import { pick } from '@feedzai/js-utilities';\n\nconst object = {\n a: 1,\n b: 2,\n c: 3,\n}\n\npick(object, ['a', 'c'])\n// => {a: 1, c: 3}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},c=i.createContext(s);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);