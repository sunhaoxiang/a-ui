import{j as e}from"./jsx-runtime-94f6e698.js";import{T as l,a as d}from"./tabItem-f6b37669.js";import{I as h}from"./index-d273967a.js";import{p as m}from"./storybook-utils-35978611.js";const a=d;a.Item=l;const I={title:"Data Display/Tabs",component:a},i={render:p=>e.jsxs(a,{...p,children:[e.jsx(a.Item,{label:"Tab One",children:"this is content one"}),e.jsx(a.Item,{label:"Tab Two",children:"this is content two"}),e.jsx(a.Item,{label:e.jsxs(e.Fragment,{children:[e.jsx(h,{icon:"check-circle"})," Tab Three"]}),children:"this is content three"})]})},u=`
import { Tabs, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Tabs>
    <Tabs.Item label="Tab One">this is content one</Tabs.Item>
    <Tabs.Item label="Tab Two">this is content two</Tabs.Item>
    <Tabs.Item
      label={
        <>
          <Icon icon="check-circle" /> Tab Three
        </>
      }
    >
      this is content three
    </Tabs.Item>
  </Tabs>
)

export default App
`,t={...i,parameters:m({code:u})},f=`
import { Tabs, Icon } from '@a-front-end-project/a-ui'

const App = () => (
  <Tabs type="card">
    <Tabs.Item label="Tab One">this is content one</Tabs.Item>
    <Tabs.Item label="Tab Two">this is content two</Tabs.Item>
    <Tabs.Item
      label={
        <>
          <Icon icon="check-circle" /> Tab Three
        </>
      }
    >
      this is content three
    </Tabs.Item>
  </Tabs>
)

export default App
`,s={...i,args:{type:"card"},parameters:m({code:f})};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template,
  parameters: parameters({
    code: defaultTabsCode
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,b,T;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    type: 'card'
  },
  parameters: parameters({
    code: cardTabsCode
  })
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const j=["DefaultTabs","CardTabs"],C=Object.freeze(Object.defineProperty({__proto__:null,CardTabs:s,DefaultTabs:t,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{C as T};
//# sourceMappingURL=tabs.stories-5a2df912.js.map
