import{j as O}from"./jsx-runtime-94f6e698.js";import{I as P}from"./index-f2e15aaf.js";import{p as e}from"./storybook-utils-35978611.js";const v={title:"General/Icon",component:P,argTypes:{icon:{description:"Font Awesome icon name. The Icon component is based on Font Awesome solid icons. You can find the list of available icon names [here](https://fontawesome.com/search?o=r&m=free&s=solid)."}}},n={render:D=>O.jsx(P,{...D})},E=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="check" size="3x" />
)

export default App
`,o={...n,args:{icon:"check",size:"3x"},parameters:e({code:E})},F=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="check" size="3x" theme="success" />
)

export default App
`,r={...n,args:{icon:"check",size:"3x",theme:"success"},parameters:e({code:F})},M=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="times" size="3x" theme="danger" />
)

export default App
`,s={...n,args:{icon:"times",size:"3x",theme:"danger"},parameters:e({code:M})},W=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="anchor" size="3x" theme="primary" />
)

export default App
`,c={...n,args:{icon:"anchor",size:"3x",theme:"primary"},parameters:e({code:W})},G=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="exclamation-circle" size="3x" theme="warning" />
)

export default App
`,a={...n,args:{icon:"exclamation-circle",size:"3x",theme:"warning"},parameters:e({code:G})},R=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="spinner" size="3x" spin />
)

export default App
`,t={...n,args:{icon:"spinner",size:"3x",spin:!0},parameters:e({code:R})},Y=`
import { Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Icon icon="spinner" size="3x" pulse />
)

export default App
`,p={...n,args:{icon:"spinner",size:"3x",pulse:!0},parameters:e({code:Y})};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'check',
    size: '3x'
  },
  parameters: parameters({
    code: defaultIconCode
  })
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,I;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'check',
    size: '3x',
    theme: 'success'
  },
  parameters: parameters({
    code: successIconCode
  })
}`,...(I=(l=r.parameters)==null?void 0:l.docs)==null?void 0:I.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'times',
    size: '3x',
    theme: 'danger'
  },
  parameters: parameters({
    code: dangerIconCode
  })
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,z,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'anchor',
    size: '3x',
    theme: 'primary'
  },
  parameters: parameters({
    code: primaryIconCode
  })
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var C,S,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'exclamation-circle',
    size: '3x',
    theme: 'warning'
  },
  parameters: parameters({
    code: warningIconCode
  })
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,y,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    spin: true
  },
  parameters: parameters({
    code: spinIconCode
  })
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var k,_,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    icon: 'spinner',
    size: '3x',
    pulse: true
  },
  parameters: parameters({
    code: pulseIconCode
  })
}`,...(b=(_=p.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const q=["DefaultIcon","SuccessIcon","DangerIcon","PrimaryIcon","WarningIcon","SpinIcon","PulseIcon"],K=Object.freeze(Object.defineProperty({__proto__:null,DangerIcon:s,DefaultIcon:o,PrimaryIcon:c,PulseIcon:p,SpinIcon:t,SuccessIcon:r,WarningIcon:a,__namedExportsOrder:q,default:v},Symbol.toStringTag,{value:"Module"}));export{K as I};
//# sourceMappingURL=icon.stories-ccc5cc22.js.map
