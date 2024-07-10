"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[1685],{1166:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=i(4848),t=i(8453);const r={title:"useMergeRefs"},o=void 0,l={id:"hooks/use-merge-refs",title:"useMergeRefs",description:"The useMergeRefs hook is designed to combine multiple React refs into a single callback ref.",source:"@site/docs/hooks/use-merge-refs.mdx",sourceDirName:"hooks",slug:"/hooks/use-merge-refs",permalink:"/js-utilities/docs/hooks/use-merge-refs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useMergeRefs"},sidebar:"tutorialSidebar",previous:{title:"useLiveRef",permalink:"/js-utilities/docs/hooks/use-live-ref"},next:{title:"useMount",permalink:"/js-utilities/docs/hooks/use-mount"}},c={},a=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useMergeRefs"})," hook is designed to combine multiple React refs into a single callback ref."]}),"\n",(0,s.jsx)(n.p,{children:"This is particularly useful when you need to apply multiple refs to a single element, such as when working with both internal component logic and external ref forwarding."}),"\n",(0,s.jsx)(n.p,{children:"By merging refs, you can maintain the functionality of each individual ref while avoiding conflicts or overrides that might occur when attempting to assign multiple refs directly."}),"\n",(0,s.jsx)(n.p,{children:"This hook enhances component flexibility and reusability, allowing developers to easily integrate both component-specific refs and externally provided refs in a clean, efficient manner."}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"function useMergeRefs<Generic = HTMLElement>(firstRef: SingleRef<Generic>, secondRef: SingleRef<Generic>): MergedRefCallback<Generic>;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useMergeRefs } from '@feedzai/js-utilities/hooks';\n\n// a div with multiple refs\nfunction Example({ ref, ...props }) {\n  const internalRef = React.useRef();\n  const refs = useMergeRefs(internalRef, ref);\n\n  return (\n    <div {...props} ref={refs}>\n      A div with multiple refs.\n    </div>\n  );\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);