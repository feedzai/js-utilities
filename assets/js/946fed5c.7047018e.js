"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[8435],{9921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var o=n(4848),s=n(8453);const i={title:"useMountedState"},u=void 0,a={id:"hooks/use-mounted-state",title:"useMountedState",description:"Lifecycle hook providing ability to check component's mount state.",source:"@site/docs/hooks/use-mounted-state.mdx",sourceDirName:"hooks",slug:"/hooks/use-mounted-state",permalink:"/js-utilities/docs/hooks/use-mounted-state",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useMountedState"},sidebar:"tutorialSidebar",previous:{title:"useMount",permalink:"/js-utilities/docs/hooks/use-mount"},next:{title:"useNetworkState",permalink:"/js-utilities/docs/hooks/use-network-state"}},c={},r=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Lifecycle hook providing ability to check component's mount state.\nReturns a function that will return true if component mounted and false otherwise."}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"function useMountedState(): () => boolean;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useMountedState } from '@feedzai/js-utilities';\n\n// a div with multiple refs\nfunction Component() {\n  const IS_MOUNTED = useMountedState();\n\n  useEffect(() => {\n    if (IS_MOUNTED()) {\n      console.log(\"run something because the component is mounted\");\n    }\n  }, []);\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function u(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);