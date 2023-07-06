import{j as d}from"./jsx-runtime-94f6e698.js";import{B as i}from"./index-15011f02.js";import{I as v}from"./index-ba4924d9.js";import{p as t}from"./storybook-utils-35978611.js";const G={title:"General/Button",component:i},e={render:m=>d.jsx(i,{...m})},R=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button>Default Button</Button>
)
`,r={...e,args:{children:"Default Button"},parameters:t({code:R})},q=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button disabled>Disabled Button</Button>
)
`,n={...e,args:{disabled:!0,children:"Disabled Button"},parameters:t({code:q})},F=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="primary">Primary Button</Button>
)
`,o={...e,args:{btnType:"primary",children:"Primary Button"},parameters:t({code:F})},H=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">Danger Button</Button>
)
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
`,s={...e,args:{btnType:"link",href:"https://www.google.com",children:"Link Button"},parameters:t({code:J})},K=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="lg">Large Button</Button>
)
`,c={...e,args:{size:"lg",children:"Large Button"},parameters:t({code:K})},N=`
import { Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Button size="sm">Small Button</Button>
)
`,u={...e,args:{size:"sm",children:"Small Button"},parameters:t({code:N})},Q=`
import { Button, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Button btnType="danger">
    <Icon icon="trash" />
  </Button>
)
`,p={render:m=>d.jsx(i,{...m,btnType:"danger",children:d.jsx(v,{icon:"trash"})}),parameters:t({code:Q})};var B,l,g;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Template,
  args: {
    children: 'Default Button'
  },
  parameters: parameters({
    code: defaultButtonCode
  })
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    disabled: true,
    children: 'Disabled Button'
  },
  parameters: parameters({
    code: disabledButtonCode
  })
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,T,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'primary',
    children: 'Primary Button'
  },
  parameters: parameters({
    code: primaryButtonCode
  })
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,j,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'danger',
    children: 'Danger Button'
  },
  parameters: parameters({
    code: dangerButtonCode
  })
}`,...(D=(j=a.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,L,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    btnType: 'link',
    href: 'https://www.google.com',
    children: 'Link Button'
  },
  parameters: parameters({
    code: linkButtonCode
  })
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,x,z;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    size: 'lg',
    children: 'Large Button'
  },
  parameters: parameters({
    code: largeButtonCode
  })
}`,...(z=(x=c.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var I,P,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    size: 'sm',
    children: 'Small Button'
  },
  parameters: parameters({
    code: smallButtonCode
  })
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var O,E,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Button {...args} btnType="danger">
      <Icon icon="trash" />
    </Button>,
  parameters: parameters({
    code: iconButtonCode
  })
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const U=["DefaultButton","DisabledButton","PrimaryButton","DangerButton","LinkButton","LargeButton","SmallButton","IconButton"],Z=Object.freeze(Object.defineProperty({__proto__:null,DangerButton:a,DefaultButton:r,DisabledButton:n,IconButton:p,LargeButton:c,LinkButton:s,PrimaryButton:o,SmallButton:u,__namedExportsOrder:U,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as B};
//# sourceMappingURL=button.stories-5f109192.js.map
