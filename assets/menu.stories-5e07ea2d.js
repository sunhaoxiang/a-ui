import{j as n}from"./jsx-runtime-94f6e698.js";import{M as p,S as M,a as x}from"./menuItem-b9582711.js";import{p as m}from"./storybook-utils-35978611.js";const e=x;e.Item=p;e.SubMenu=M;const I={title:"Navigation/Menu",component:e,decorators:[r=>n.jsx("div",{style:{paddingBottom:"100px"},children:n.jsx(r,{})})],argTypes:{onSelect:{control:{type:null}}}},c={render:r=>n.jsxs(e,{defaultIndex:"0",...r,children:[n.jsx(e.Item,{index:"0",children:"cool link"}),n.jsx(e.Item,{index:"1",children:"cool link 2"}),n.jsx(e.Item,{index:"2",disabled:!0,children:"disabled"}),n.jsxs(e.SubMenu,{index:"3",title:"dropDown",children:[n.jsx(e.Item,{index:"3-0",children:"drop down 1"}),n.jsx(e.Item,{index:"3-1",children:"drop down 2"})]})]})},f=`
import { Menu } from '@a-front-end-project/a-ui'

const App = () => (
  <Menu defaultIndex="0">
    <Menu.Item index="0">cool link</Menu.Item>
    <Menu.Item index="1">cool link 2</Menu.Item>
    <Menu.Item index="2" disabled>
      disabled
    </Menu.Item>
    <Menu.SubMenu index="3" title="dropDown">
      <Menu.Item index="3-0">drop down 1</Menu.Item>
      <Menu.Item index="3-1">drop down 2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export default App
`,t={...c,parameters:m({code:f})},b=`
import { Menu } from '@a-front-end-project/a-ui'

const App = () => (
  <Menu defaultIndex="1" mode="vertical">
    <Menu.Item index="0">cool link</Menu.Item>
    <Menu.Item index="1">cool link 2</Menu.Item>
    <Menu.Item index="2" disabled>
      disabled
    </Menu.Item>
    <Menu.SubMenu index="3" title="dropDown">
      <Menu.Item index="3-0">drop down 1</Menu.Item>
      <Menu.Item index="3-1">drop down 2</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export default App
`,o={...c,args:{mode:"vertical",defaultIndex:"1"},parameters:m({code:b})};var d,u,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  parameters: parameters({
    code: defaultMenuCode
  })
}`,...(a=(u=t.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template,
  args: {
    mode: 'vertical',
    defaultIndex: '1'
  },
  parameters: parameters({
    code: verticalMenuCode
  })
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const j=["DefaultMenu","VerticalMenu"],h=Object.freeze(Object.defineProperty({__proto__:null,DefaultMenu:t,VerticalMenu:o,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{h as M};
//# sourceMappingURL=menu.stories-5e07ea2d.js.map
