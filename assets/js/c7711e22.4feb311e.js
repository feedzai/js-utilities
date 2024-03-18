"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[7667],{7391:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),a=n(8453);const o={title:"toggleDataAttribute"},s=void 0,r={id:"functions/DOM/toggle-data-attribute",title:"toggleDataAttribute",description:"Adds a data attribute to a DOM element, without its state being rendered as a value",source:"@site/docs/functions/DOM/toggle-data-attribute.mdx",sourceDirName:"functions/DOM",slug:"/functions/DOM/toggle-data-attribute",permalink:"/js-utilities/docs/functions/DOM/toggle-data-attribute",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"toggleDataAttribute"},sidebar:"tutorialSidebar",previous:{title:"queueMicrotask",permalink:"/js-utilities/docs/functions/DOM/queue-microtask"},next:{title:"wait",permalink:"/js-utilities/docs/functions/DOM/wait"}},u={},l=[{value:"API",id:"api",level:3},{value:"Usage",id:"usage",level:3}];function c(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Adds a data attribute to a DOM element, without its state being rendered as a value"}),"\n",(0,i.jsx)(e.h3,{id:"api",children:"API"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:'function toggleDataAttribute(prop?: "true" | "false" | boolean | null): string | undefined;\n'})}),"\n",(0,i.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:'import { toggleDataAttribute } from "@feedzai/js-utilities";\n\n// The React component\nconst SOME_PROP = true;\n\n<Button data-is-boolean={toggleDataAttribute(SOME_PROP)}>Content</Button>\n\n// Renders as\n<button data-is-boolean>Content</button>\n'})})]})}function d(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(6540);const a={},o=i.createContext(a);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);