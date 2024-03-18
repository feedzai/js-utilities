"use strict";(globalThis.webpackChunk_feedzai_js_utilities_docs=globalThis.webpackChunk_feedzai_js_utilities_docs||[]).push([[4346],{8439:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(4848),s=t(8453);const i={title:"useCopyToClipboard"},r=void 0,a={id:"hooks/use-copy-to-clipboard",title:"useCopyToClipboard",description:"Copy text to a user's clipboard.",source:"@site/docs/hooks/use-copy-to-clipboard.mdx",sourceDirName:"hooks",slug:"/hooks/use-copy-to-clipboard",permalink:"/js-utilities/docs/hooks/use-copy-to-clipboard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useCopyToClipboard"},sidebar:"tutorialSidebar",previous:{title:"useControlledState",permalink:"/js-utilities/docs/hooks/use-controlled-state"},next:{title:"useEffectOnce",permalink:"/js-utilities/docs/hooks/use-effect-once"}},c={},l=[{value:"API",id:"api",level:2},{value:"Usage",id:"usage",level:3}];function p(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Copy text to a user's clipboard."}),"\n",(0,n.jsx)(o.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:"function useCopyToClipboard(): CopyToClipboardReturns;\n"})}),"\n",(0,n.jsx)(o.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCopyToClipboard } from '@feedzai/js-utilities';\n\nfunction App(props) {\n  const [text, setText] = useState('');\n  const { value, error, copyToClipboard\xa0} = useCopyToClipboard();\n\n  return (\n    <div>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <button type=\"button\" onClick={() => copyToClipboard(text)}>copy text</button>\n      {error\n        ? <p>Unable to copy value: {error.message}</p>\n        : value && <p>Copied {value}</p>\n      }\n    </div>\n  ):\n}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var n=t(6540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);