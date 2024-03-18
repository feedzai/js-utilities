"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[9442],{7815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=n(4848),i=n(8453);const o={title:"useClickOutside"},c=void 0,r={id:"hooks/use-click-outside",title:"useClickOutside",description:"Detects when a click occurs outside a given HTMLElement (passed as React RefObject).",source:"@site/docs/hooks/use-click-outside.mdx",sourceDirName:"hooks",slug:"/hooks/use-click-outside",permalink:"/js-utilities/docs/hooks/use-click-outside",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useClickOutside"},sidebar:"tutorialSidebar",previous:{title:"throwError",permalink:"/js-utilities/docs/functions/utils/throw-error"},next:{title:"useConstant",permalink:"/js-utilities/docs/hooks/use-constant"}},l={},u=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Detects when a click occurs outside a given HTMLElement (passed as React RefObject)."}),"\n",(0,s.jsx)(t.p,{children:"It will take into consideration the third parameter that acts as an in-the-middle interceptor to execute\nthe callback function."}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"function useClickOutside<GenericElement extends Element = HTMLElement>(ref: React.Ref<GenericElement>, handler: <GenericEvent extends Event>(event?: GenericEvent | undefined) => void, isActive?: boolean): void;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useClickOutside } from '@feedzai/js-utilities';\n\nfunction App(props) {\n  const DROPDOWN_REF = useRef();\n\n  useClickOutside(\n    DROPDROWN_REF,\n    () => props.closeDropdown(),\n    props.shouldClose,\n  );\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);