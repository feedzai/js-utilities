"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[9885],{5979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const o={title:"useLifecycle"},r=void 0,a={id:"hooks/use-live-ref",title:"useLifecycle",description:"Creates a React.RefObject that is constantly updated with the incoming value.",source:"@site/docs/hooks/use-live-ref.mdx",sourceDirName:"hooks",slug:"/hooks/use-live-ref",permalink:"/js-utilities/docs/hooks/use-live-ref",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useLifecycle"},sidebar:"tutorialSidebar",previous:{title:"useLifecycle",permalink:"/js-utilities/docs/hooks/use-lifecycle"},next:{title:"useMergeRefs",permalink:"/js-utilities/docs/hooks/use-merge-refs"}},c={},l=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Creates a ",(0,i.jsx)(n.code,{children:"React.RefObject"})," that is constantly updated with the incoming value."]}),"\n",(0,i.jsx)(n.p,{children:"React's useRef hook, primarily used for accessing DOM nodes or React elements, has another valuable application: stabilizing references."}),"\n",(0,i.jsx)(n.p,{children:"By wrapping volatile references in a stable container, useRef allows developers to grant dependencies immunity to change, which is particularly useful when you don't want hooks to trigger on every variable change."}),"\n",(0,i.jsx)(n.p,{children:"This technique is especially beneficial when working with hooks like useEffect. For instance, when dealing with side effects that depend on changing variables, using useRef can prevent unnecessary re-evaluations and ensure  more consistent behavior. A custom hook like useLiveRef can be implemented to provide a stable reference to changing values, offering finer control over when hooks are re-evaluated without compromising the integrity of dependency arrays or ESLint rules."}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function useLifecycle(mount: () => void, unmount?: () => void): void;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { useLiveRef } from '@feedzai/js-utilities/hooks';\n\nfunction Component({ prop }) {\n  const PROP_REF = useLiveRef(prop);\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);