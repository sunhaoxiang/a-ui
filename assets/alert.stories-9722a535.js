import{j as e}from"./jsx-runtime-94f6e698.js";import{r as F}from"./index-8db94870.js";import{c as f,I as H}from"./index-f2e15aaf.js";import{T as R}from"./index-c2560314.js";import{p as t}from"./storybook-utils-35978611.js";const p=a=>{const{title:E,description:d,type:u,onClose:m,closable:O}=a,[k,z]=F.useState(!1),M=f("a-alert",{[`a-alert-${u}`]:u}),P=f("a-alert-title",{"bold-title":d}),$=()=>{m&&m(),z(!0)};return e.jsx(R,{in:!k,timeout:300,animation:"zoom-in-top",children:e.jsxs("div",{className:M,role:"alert",children:[e.jsx("span",{className:P,children:E}),d&&e.jsx("p",{className:"a-alert-desc",children:d}),O&&e.jsx("span",{className:"a-alert-close",role:"alert-close-button",onClick:$,children:e.jsx(H,{icon:"times"})})]})})};p.defaultProps={type:"default",closable:!0};const I=p;try{p.displayName="Alert",p.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"default"'}]}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"default"'}]}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const B={title:"Feedback/Alert",component:I},r={render:a=>e.jsx(I,{...a})},G=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert title="this is alert!" />
)

export default App
`,s={...r,args:{title:"this is alert!"},parameters:t({code:G})},J=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is alert!"
   description="this is description!"
  />
)

export default App
`,n={...r,args:{title:"this is alert!",description:"this is description!"},parameters:t({code:J})},K=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is alert!"
   closable={false}
  />
)

export default App
`,l={...r,args:{title:"this is alert!",closable:!1},parameters:t({code:K})},L=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is success!"
   type="success"
  />
)

export default App
`,o={...r,args:{title:"this is success!",type:"success"},parameters:t({code:L})},Q=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is danger!"
   type="danger"
  />
)

export default App
`,i={...r,args:{title:"this is danger!",type:"danger"},parameters:t({code:Q})},U=`
import { Alert } from '@a-front-end-project/a-ui'

const App = () => (
  <Alert
   title="this is warning!"
   type="warning"
  />
)

export default App
`,c={...r,args:{title:"this is warning!",type:"warning"},parameters:t({code:U})};var g,A,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!'
  },
  parameters: parameters({
    code: defaultAlertCode
  })
}`,...(y=(A=s.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var h,C,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!',
    description: 'this is description!'
  },
  parameters: parameters({
    code: alertWithDescriptionCode
  })
}`,...(_=(C=n.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var v,x,b;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!',
    closable: false
  },
  parameters: parameters({
    code: alertCanNotCloseCode
  })
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,N,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is success!',
    type: 'success'
  },
  parameters: parameters({
    code: successAlertCode
  })
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var q,w,T;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is danger!',
    type: 'danger'
  },
  parameters: parameters({
    code: dangerAlertCode
  })
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var V,D,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is warning!',
    type: 'warning'
  },
  parameters: parameters({
    code: warningAlertCode
  })
}`,...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const X=["DefaultAlert","AlertWithDescription","AlertCanNotClose","SuccessAlert","DangerAlert","WarningAlert"],ae=Object.freeze(Object.defineProperty({__proto__:null,AlertCanNotClose:l,AlertWithDescription:n,DangerAlert:i,DefaultAlert:s,SuccessAlert:o,WarningAlert:c,__namedExportsOrder:X,default:B},Symbol.toStringTag,{value:"Module"}));export{ae as A};
//# sourceMappingURL=alert.stories-9722a535.js.map
