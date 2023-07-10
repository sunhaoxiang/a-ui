import{j as e}from"./jsx-runtime-94f6e698.js";import{T as l}from"./index-f8f78509.js";import{p as r}from"./storybook-utils-35978611.js";const v={title:"Data Entry/Select",component:l,decorators:[t=>e.jsx("div",{style:{width:"350px",paddingBottom:"200px"},children:e.jsx(t,{})})]},b=`
import { Select } from '@a-front-end-project/a-ui'

const App = () => (
  <Select placeholder="Select">
    <Select.Option value="Jack" />
    <Select.Option value="Lucy" />
    <Select.Option value="Hello" />
    <Select.Option value="disabled" disabled />
  </Select>
)

export default App
`,a={render:t=>e.jsxs(l,{...t,placeholder:"Select",children:[e.jsx(l.Option,{value:"Jack"}),e.jsx(l.Option,{value:"Lucy"}),e.jsx(l.Option,{value:"Hello"}),e.jsx(l.Option,{value:"disabled",disabled:!0})]}),parameters:r({code:b})},x=`
import { Select } from '@a-front-end-project/a-ui'

const App = () => (
  <Select placeholder="Select" multiple>
    <Select.Option value="Jack" />
    <Select.Option value="Lucy" />
    <Select.Option value="Hello" />
    <Select.Option value="disabled" disabled />
  </Select>
)

export default App
`,c={render:t=>e.jsxs(l,{...t,placeholder:"Select",multiple:!0,children:[e.jsx(l.Option,{value:"Jack"}),e.jsx(l.Option,{value:"Lucy"}),e.jsx(l.Option,{value:"Hello"}),e.jsx(l.Option,{value:"disabled",disabled:!0})]}),parameters:r({code:x})},j=`
import { Select } from '@a-front-end-project/a-ui'

const App = () => (
  <Select placeholder="Select" disabled>
    <Select.Option value="Jack" />
    <Select.Option value="Lucy" />
    <Select.Option value="Hello" />
    <Select.Option value="disabled" disabled />
  </Select>
)

export default App
`,o={render:t=>e.jsxs(l,{...t,placeholder:"Select",disabled:!0,children:[e.jsx(l.Option,{value:"Jack"}),e.jsx(l.Option,{value:"Lucy"}),e.jsx(l.Option,{value:"Hello"}),e.jsx(l.Option,{value:"disabled",disabled:!0})]}),parameters:r({code:j})};var s,p,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Select {...args} placeholder="Select">
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>,
  parameters: parameters({
    code: defaultSelectCode
  })
}`,...(n=(p=a.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,i,u;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Select {...args} placeholder="Select" multiple>
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>,
  parameters: parameters({
    code: multipleSelectCode
  })
}`,...(u=(i=c.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var S,m,O;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Select {...args} placeholder="Select" disabled>
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>,
  parameters: parameters({
    code: disabledSelectCode
  })
}`,...(O=(m=o.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};const f=["DefaultSelect","MultipleSelect","DisabledSelect"],k=Object.freeze(Object.defineProperty({__proto__:null,DefaultSelect:a,DisabledSelect:o,MultipleSelect:c,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{k as S};
//# sourceMappingURL=select.stories-cb6cad70.js.map
