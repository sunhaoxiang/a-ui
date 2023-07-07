import{j as m}from"./jsx-runtime-94f6e698.js";import{B as i}from"./index-14378e75.js";import{I as v}from"./index-d273967a.js";import{p as t}from"./storybook-utils-35978611.js";const G={title:"General/Button",component:i},e={render:d=>m.jsx(i,{...d})},R=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button>Default Button</Button>
)

export default App
`,r={...e,args:{children:"Default Button"},parameters:t({code:R})},q=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button disabled>Disabled Button</Button>
)

export default App
`,o={...e,args:{disabled:!0,children:"Disabled Button"},parameters:t({code:q})},F=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="primary">Primary Button</Button>
)

export default App
`,n={...e,args:{btnType:"primary",children:"Primary Button"},parameters:t({code:F})},H=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">Danger Button</Button>
)

export default App
`,a={...e,args:{btnType:"danger",children:"Danger Button"},parameters:t({code:H})},J=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button
     btnType="link"
     href="https://www.google.com"
  >
    Link Button
  </Button>
)

export default App
`,s={...e,args:{btnType:"link",href:"https://www.google.com",children:"Link Button"},parameters:t({code:J})},K=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="lg">Large Button</Button>
)

export default App
`,p={...e,args:{size:"lg",children:"Large Button"},parameters:t({code:K})},N=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="sm">Small Button</Button>
)

export default App
`,u={...e,args:{size:"sm",children:"Small Button"},parameters:t({code:N})},Q=`
import { Button, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">
    <Icon icon="trash" />
  </Button>
)

export default App
`,c={render:d=>m.jsx(i,{...d,btnType:"danger",children:m.jsx(v,{icon:"trash"})}),parameters:t({code:Q})};var l,B,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: 'Default Button'
  },
  parameters: parameters({
    code: defaultButtonCode
  })
}`,...(g=(B=r.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var f,b,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  parameters: parameters({
    code: disabledButtonCode
  })
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,T,A;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  },
  parameters: parameters({
    code: primaryButtonCode
  })
}`,...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,S,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  },
  parameters: parameters({
    code: dangerButtonCode
  })
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var x,D,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'link',
    href: 'https://www.google.com',
    children: 'Link Button'
  },
  parameters: parameters({
    code: linkButtonCode
  })
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var L,w,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  parameters: parameters({
    code: largeButtonCode
  })
}`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var I,P,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  parameters: parameters({
    code: smallButtonCode
  })
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,E,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Button {...args} btnType="danger">
      <Icon icon="trash" />
    </Button>,
  parameters: parameters({
    code: iconButtonCode
  })
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const U=["DefaultButton","DisabledButton","PrimaryButton","DangerButton","LinkButton","LargeButton","SmallButton","IconButton"],Z=Object.freeze(Object.defineProperty({__proto__:null,DangerButton:a,DefaultButton:r,DisabledButton:o,IconButton:c,LargeButton:p,LinkButton:s,PrimaryButton:n,SmallButton:u,__namedExportsOrder:U,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as B};
//# sourceMappingURL=button.stories-4cf56d54.js.map
