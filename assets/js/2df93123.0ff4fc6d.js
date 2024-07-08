"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[4183],{568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(4848),s=n(8453);const o={title:"useAutoId"},r=void 0,d={id:"hooks/use-auto-id",title:"useAutoId",description:"Generate automatic IDs to facilitate WAI-ARIA.",source:"@site/docs/hooks/use-auto-id.mdx",sourceDirName:"hooks",slug:"/hooks/use-auto-id",permalink:"/js-utilities/docs/hooks/use-auto-id",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useAutoId"},sidebar:"tutorialSidebar",previous:{title:"throwError",permalink:"/js-utilities/docs/functions/utils/throw-error"},next:{title:"useClickOutside",permalink:"/js-utilities/docs/hooks/use-click-outside"}},u={},a=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Generate automatic IDs to facilitate WAI-ARIA."}),"\n",(0,i.jsxs)(t.p,{children:["The returned ID will initially be ",(0,i.jsx)(t.code,{children:"null"})," and will update after a component mounts.\nUsers may need to supply their own ID if they need consistent values for SSR."]}),"\n",(0,i.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"function useAutoId(customId?: string | null, prefix?: string): string | undefined;\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'import { useAutoId } from \'@feedzai/js-utilities/hooks\';\n\n // Generating an id (no pre-defined id and no prefix)\n const id1 = useAutoId(); // will return, for example, "0" (or :r0: if on React 18+)\n\n // Using a pre-defined id (no prefix)\n const id2 = useAutoId("8e88aa2e-e6a8") // will return "8e88aa2e-e6a8"\n\n // Using a prefix with an auto-generated id (no pre-defined id)\n const id3 = useAutoId(undefined, "fdz-prefix") // will return, for example, "fdz-prefix--10"\n\n // Using a prefix with a pre-defined id\n const id4 = useAutoId("6949d175", "fdz-js-checkbox") // will return "fdz-js-checkbox--6949d175"\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);