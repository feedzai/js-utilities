"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[1685],{1166:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=s(4848),i=s(8453);const r={title:"useMergeRefs"},o=void 0,c={id:"hooks/use-merge-refs",title:"useMergeRefs",description:"Returns a function that receives the element and assign the value to the given React refs.",source:"@site/docs/hooks/use-merge-refs.mdx",sourceDirName:"hooks",slug:"/hooks/use-merge-refs",permalink:"/js-utilities/docs/hooks/use-merge-refs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useMergeRefs"},sidebar:"tutorialSidebar",previous:{title:"useLifecycle",permalink:"/js-utilities/docs/hooks/use-live-ref"},next:{title:"useMount",permalink:"/js-utilities/docs/hooks/use-mount"}},a={},u=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Returns a function that receives the element and assign the value to the given React refs."}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"function useMergeRefs<Generic = HTMLElement>(firstRef: SingleRef<Generic>, secondRef: SingleRef<Generic>): MergedRefCallback<Generic>;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useMergeRefs } from '@feedzai/js-utilities';\n\n// a div with multiple refs\nfunction Example({ ref, ...props }) {\n  const internalRef = React.useRef();\n  const refs = useMergeRefs(internalRef, ref);\n\n  return (\n    <div {...props} ref={refs}>\n      A div with multiple refs.\n    </div>\n  );\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>c});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);