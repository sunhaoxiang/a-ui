import{j as l}from"./jsx-runtime-94f6e698.js";import{I as E}from"./input-581fa78b.js";import{p as e}from"./storybook-utils-35978611.js";const O={title:"Data Entry/Input",component:E,decorators:[d=>l.jsx("div",{style:{width:"350px"},children:l.jsx(d,{})})]},r={render:d=>l.jsx(E,{...d})},v=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input placeholder="Default Input" />
)

export default App
`,t={...r,args:{placeholder:"Default Input"},parameters:e({code:v})},M=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input placeholder="Disabled Input" disabled />
)

export default App
`,p={...r,args:{placeholder:"Disabled Input",disabled:!0},parameters:e({code:M})},w=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input size="lg" placeholder="Large Input" />
)

export default App
`,a={...r,args:{placeholder:"Large Input",size:"lg"},parameters:e({code:w})},R=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input size="sm" placeholder="Small Input" />
)

export default App
`,o={...r,args:{placeholder:"Small Input",size:"sm"},parameters:e({code:R})},k=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input icon="search" placeholder="Input With Icon" />
)

export default App
`,n={...r,args:{placeholder:"Input With Icon",icon:"search"},parameters:e({code:k})},q=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input prepend="https://" placeholder="google.com" />
)

export default App
`,s={...r,args:{placeholder:"google.com",prepend:"https://"},parameters:e({code:q})},B=`
import { Input } from '@a-front-end-project/a-ui'

const App = () => (
  <Input append=".com" placeholder="google" />
)

export default App
`,c={...r,args:{placeholder:"google",append:".com"},parameters:e({code:B})};var u,m,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Default Input'
  },
  parameters: parameters({
    code: defaultInputCode
  })
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var I,g,h;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Disabled Input',
    disabled: true
  },
  parameters: parameters({
    code: disabledInputCode
  })
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,A,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Large Input',
    size: 'lg'
  },
  parameters: parameters({
    code: largeInputCode
  })
}`,...(x=(A=a.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var S,W,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Small Input',
    size: 'sm'
  },
  parameters: parameters({
    code: smallInputCode
  })
}`,...(j=(W=o.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var C,b,D;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'Input With Icon',
    icon: 'search'
  },
  parameters: parameters({
    code: inputWithIconCode
  })
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var T,z,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'google.com',
    prepend: 'https://'
  },
  parameters: parameters({
    code: inputWithPrependCode
  })
}`,...(_=(z=s.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var L,P,y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: 'google',
    append: '.com'
  },
  parameters: parameters({
    code: inputWithAppendCode
  })
}`,...(y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const F=["DefaultInput","DisabledInput","LargeInput","SmallInput","InputWithIcon","InputWithPrepend","InputWithAppend"],K=Object.freeze(Object.defineProperty({__proto__:null,DefaultInput:t,DisabledInput:p,InputWithAppend:c,InputWithIcon:n,InputWithPrepend:s,LargeInput:a,SmallInput:o,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{K as I};
//# sourceMappingURL=input.stories-94b34c0e.js.map
