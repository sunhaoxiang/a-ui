import{j as e}from"./jsx-runtime-94f6e698.js";import{r as R}from"./index-8db94870.js";import{F as q,a as B}from"./formItem-29f558f1.js";import"./index-c7eee4db.js";import{T as p}from"./index-92825897.js";import{B as d}from"./index-14378e75.js";import{p as c}from"./storybook-utils-35978611.js";import{I as s}from"./input-79194c15.js";const r=B;r.Item=q;const C={title:"Data Entry/Form",component:r,decorators:[t=>e.jsx("div",{style:{width:"550px"},children:e.jsx(t,{})})]},T=`
import { Form, Input, Button } from '@a-front-end-project/a-ui'

const App = () => (
  <Form>
    <Form.Item
      label="Username"
      name="Username"
      rules={[
        {
          type: 'string',
          required: true,
          min: 3,
          message: 'Please input your username!'
        }
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          type: 'string',
          required: true,
          min: 3,
          max: 8,
          message: 'Please input your password!'
        }
      ]}
    >
      <Input type="password" />
    </Form.Item>
    <div className="a-form-submit-area">
      <Button type="submit" btnType="primary">
        Login
      </Button>
    </div>
  </Form>
)

export default App
`,o={render:t=>e.jsxs(r,{...t,children:[e.jsx(r.Item,{label:"Username",name:"Username",rules:[{type:"string",required:!0,min:3,message:"Please input your username!"}],children:e.jsx(s,{})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{type:"string",required:!0,min:3,max:8,message:"Please input your password!"}],children:e.jsx(s,{type:"password"})}),e.jsx("div",{className:"a-form-submit-area",children:e.jsx(d,{type:"submit",btnType:"primary",children:"Login"})})]}),parameters:c({code:T})},k=`
import { Form, Input, Select, Button } from '@a-front-end-project/a-ui'

const App = () => {
  const initialValues = {
    agreement: false
  }

  return (
    <Form initialValues={initialValues}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email', required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ type: 'string', required: true, min: 3, max: 8 }]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ type: 'string', required: true }]}
        getValueFromEvent={e => e}
        valuePropName="defaultValue"
      >
        <Select placeholder="Please select Gender">
          <Select.Option value="Male" />
          <Select.Option value="Female" />
          <Select.Option value="Other" />
        </Select>
      </Form.Item>
      <div
        className="agreement-section"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Form.Item
          name="agreement"
          rules={[{ type: 'enum', enum: [true], message: 'Please agree' }]}
          getValueFromEvent={e => e.target.checked}
          valuePropName="checked"
        >
          <input type="checkbox" />
        </Form.Item>
        <span style={{ marginLeft: '5px' }}>
          I have read the <a href="#">agreement</a>
        </span>
      </div>
      <div className="a-form-submit-area">
        <Button type="submit" btnType="primary">
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default App
`,l={render:t=>{const m={agreement:!1};return e.jsxs(r,{...t,initialValues:m,children:[e.jsx(r.Item,{label:"Email",name:"email",rules:[{type:"email",required:!0}],children:e.jsx(s,{})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{type:"string",required:!0,min:3,max:8}],children:e.jsx(s,{type:"password"})}),e.jsx(r.Item,{label:"Gender",name:"gender",rules:[{type:"string",required:!0}],getValueFromEvent:a=>a,valuePropName:"defaultValue",children:e.jsxs(p,{placeholder:"Please select Gender",children:[e.jsx(p.Option,{value:"Male"}),e.jsx(p.Option,{value:"Female"}),e.jsx(p.Option,{value:"Other"})]})}),e.jsxs("div",{className:"agreement-section",style:{display:"flex",justifyContent:"center"},children:[e.jsx(r.Item,{name:"agreement",rules:[{type:"enum",enum:[!0],message:"Please agree"}],getValueFromEvent:a=>a.target.checked,valuePropName:"checked",children:e.jsx("input",{type:"checkbox"})}),e.jsxs("span",{style:{marginLeft:"5px"},children:["I have read the ",e.jsx("a",{href:"#",children:"agreement"})]})]}),e.jsx("div",{className:"a-form-submit-area",children:e.jsx(d,{type:"submit",btnType:"primary",children:"Submit"})})]})},parameters:c({code:k})},E=`
import { useRef } from 'react'
import { Form, Input, Button } from '@a-front-end-project/a-ui'
import type { IFormRef } from '@a-front-end-project/a-ui/types/Form/form.d.ts'

const App = () => {
  const ref = useRef<IFormRef>(null)
  const resetAll = () => {
    ref.current?.resetFields()
  }

  return (
    <Form
      {...args}
      ref={ref}
      initialValues={{
        username: 'username',
        password: '1234'
      }}
    >
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" />
      </Form.Item>
      <div className="a-form-submit-area">
        <Button type="button" btnType="primary" onClick={resetAll}>
          Reset
        </Button>
      </div>
    </Form>
  )
}

export default App
`,i={render:t=>{const m=R.useRef(null),a=()=>{var n;(n=m.current)==null||n.resetFields()};return e.jsxs(r,{...t,ref:m,initialValues:{username:"username",password:"1234"},children:[e.jsx(r.Item,{label:"Username",name:"username",children:e.jsx(s,{})}),e.jsx(r.Item,{label:"Password",name:"password",children:e.jsx(s,{type:"password"})}),e.jsx("div",{className:"a-form-submit-area",children:e.jsx(d,{type:"button",btnType:"primary",onClick:a,children:"Reset"})})]})},parameters:c({code:E})},O=`
import { Form, Input, Button } from '@a-front-end-project/a-ui'
import type { CustomRule } from '@a-front-end-project/a-ui/types/Form/useStore.d.ts'

const App = () => {
  const confirmRules: CustomRule[] = [
    { type: 'string', required: true, min: 3, max: 12 },
    ({ getFieldValue }) => ({
      asyncValidator(_rule, value) {
        return new Promise((resolve, reject) => {
          if (value !== getFieldValue('password')) {
            reject('The two passwords that you entered do not match!')
          }
          setTimeout(() => {
            resolve()
          }, 1000)
        })
      }
    })
  ]

  return (
    <Form
      initialValues={{
        username: 'username',
        password: '1234',
        agreement: false
      }}
    >
      {({ isValid, isSubmitting }) => (
        <>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ type: 'email', required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ type: 'string', required: true, min: 3, max: 12 }]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={confirmRules}
          >
            <Input type="password" />
          </Form.Item>
          <div
            className="agreement-section"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Form.Item
              name="agreement"
              valuePropName="checked"
              getValueFromEvent={e => e.target.checked}
              rules={[
                { type: 'enum', enum: [true], message: 'Please agree' }
              ]}
            >
              <input type="checkbox" />
            </Form.Item>
            <span style={{ marginLeft: '5px' }}>
              I have read the <a href="#">agreement</a>
            </span>
          </div>
          <div className="a-form-submit-area">
            <Button type="submit" btnType="primary">
              Register {isSubmitting ? 'is Submitting' : 'Submitted'}
              {isValid ? ' Passed' : ' Failed'}
            </Button>
          </div>
        </>
      )}
    </Form>
  )
}

export default App
`,u={render:t=>{const m=[{type:"string",required:!0,min:3,max:12},({getFieldValue:a})=>({asyncValidator(n,y){return new Promise((S,N)=>{y!==a("password")&&N("The two passwords that you entered do not match!"),setTimeout(()=>{S()},1e3)})}})];return e.jsx(r,{...t,initialValues:{username:"username",password:"1234",agreement:!1},children:({isValid:a,isSubmitting:n})=>e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{label:"Username",name:"username",rules:[{type:"email",required:!0}],children:e.jsx(s,{})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{type:"string",required:!0,min:3,max:12}],children:e.jsx(s,{type:"password"})}),e.jsx(r.Item,{label:"Confirm Password",name:"confirmPassword",rules:m,children:e.jsx(s,{type:"password"})}),e.jsxs("div",{className:"agreement-section",style:{display:"flex",justifyContent:"center"},children:[e.jsx(r.Item,{name:"agreement",valuePropName:"checked",getValueFromEvent:y=>y.target.checked,rules:[{type:"enum",enum:[!0],message:"Please agree"}],children:e.jsx("input",{type:"checkbox"})}),e.jsxs("span",{style:{marginLeft:"5px"},children:["I have read the ",e.jsx("a",{href:"#",children:"agreement"})]})]}),e.jsx("div",{className:"a-form-submit-area",children:e.jsxs(d,{type:"submit",btnType:"primary",children:["Register ",n?"is Submitting":"Submitted",a?" Passed":" Failed"]})})]})})},parameters:c({code:O})};var g,F,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Form {...args}>
      <Form.Item label="Username" name="Username" rules={[{
      type: 'string',
      required: true,
      min: 3,
      message: 'Please input your username!'
    }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{
      type: 'string',
      required: true,
      min: 3,
      max: 8,
      message: 'Please input your password!'
    }]}>
        <Input type="password" />
      </Form.Item>
      <div className="a-form-submit-area">
        <Button type="submit" btnType="primary">
          Login
        </Button>
      </div>
    </Form>,
  parameters: parameters({
    code: basicFormCode
  })
}`,...(f=(F=o.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var I,b,x;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const initialValues = {
      agreement: false
    };
    return <Form {...args} initialValues={initialValues}>
        <Form.Item label="Email" name="email" rules={[{
        type: 'email',
        required: true
      }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{
        type: 'string',
        required: true,
        min: 3,
        max: 8
      }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item label="Gender" name="gender" rules={[{
        type: 'string',
        required: true
      }]} getValueFromEvent={e => e} valuePropName="defaultValue">
          <Select placeholder="Please select Gender">
            <Select.Option value="Male" />
            <Select.Option value="Female" />
            <Select.Option value="Other" />
          </Select>
        </Form.Item>
        <div className="agreement-section" style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
          <Form.Item name="agreement" rules={[{
          type: 'enum',
          enum: [true],
          message: 'Please agree'
        }]} getValueFromEvent={e => e.target.checked} valuePropName="checked">
            <input type="checkbox" />
          </Form.Item>
          <span style={{
          marginLeft: '5px'
        }}>
            I have read the <a href="#">agreement</a>
          </span>
        </div>
        <div className="a-form-submit-area">
          <Button type="submit" btnType="primary">
            Submit
          </Button>
        </div>
      </Form>;
  },
  parameters: parameters({
    code: regFormCode
  })
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,v,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<IFormRef>(null);
    const resetAll = () => {
      ref.current?.resetFields();
    };
    return <Form {...args} ref={ref} initialValues={{
      username: 'username',
      password: '1234'
    }}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <div className="a-form-submit-area">
          <Button type="button" btnType="primary" onClick={resetAll}>
            Reset
          </Button>
        </div>
      </Form>;
  },
  parameters: parameters({
    code: resetFormCode
  })
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,P,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const confirmRules: CustomRule[] = [{
      type: 'string',
      required: true,
      min: 3,
      max: 12
    }, ({
      getFieldValue
    }) => ({
      asyncValidator(_rule, value) {
        return new Promise((resolve, reject) => {
          if (value !== getFieldValue('password')) {
            reject('The two passwords that you entered do not match!');
          }
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      }
    })];
    return <Form {...args} initialValues={{
      username: 'username',
      password: '1234',
      agreement: false
    }}>
        {({
        isValid,
        isSubmitting
      }) => <>
            <Form.Item label="Username" name="username" rules={[{
          type: 'email',
          required: true
        }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{
          type: 'string',
          required: true,
          min: 3,
          max: 12
        }]}>
              <Input type="password" />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirmPassword" rules={confirmRules}>
              <Input type="password" />
            </Form.Item>
            <div className="agreement-section" style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
              <Form.Item name="agreement" valuePropName="checked" getValueFromEvent={e => e.target.checked} rules={[{
            type: 'enum',
            enum: [true],
            message: 'Please agree'
          }]}>
                <input type="checkbox" />
              </Form.Item>
              <span style={{
            marginLeft: '5px'
          }}>
                I have read the <a href="#">agreement</a>
              </span>
            </div>
            <div className="a-form-submit-area">
              <Button type="submit" btnType="primary">
                Register {isSubmitting ? 'is Submitting' : 'Submitted'}
                {isValid ? ' Passed' : ' Failed'}
              </Button>
            </div>
          </>}
      </Form>;
  },
  parameters: parameters({
    code: fullFormCode
  })
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const A=["BasicForm","RegForm","ResetForm","FullForm"],J=Object.freeze(Object.defineProperty({__proto__:null,BasicForm:o,FullForm:u,RegForm:l,ResetForm:i,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{J as F};
//# sourceMappingURL=form.stories-926ab3cd.js.map
