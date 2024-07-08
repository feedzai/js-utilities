"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[3813],{3145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var o=t(4848),s=t(8453);const c={title:"useLifecycle"},i=void 0,l={id:"hooks/use-lifecycle",title:"useLifecycle",description:"React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively.",source:"@site/docs/hooks/use-lifecycle.mdx",sourceDirName:"hooks",slug:"/hooks/use-lifecycle",permalink:"/js-utilities/docs/hooks/use-lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useLifecycle"},sidebar:"tutorialSidebar",previous:{title:"useEffectOnce",permalink:"/js-utilities/docs/hooks/use-effect-once"},next:{title:"useLifecycle",permalink:"/js-utilities/docs/hooks/use-live-ref"}},u={},r=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively."}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function useLifecycle(mount: () => void, unmount?: () => void): void;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useLifecycle } from '@feedzai/js-utilities/hooks';\n\nuseLifecycle(\n () => console.log('runs on mount'),\n () => console.log('runs on unmount'),\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);