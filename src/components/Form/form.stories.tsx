import { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import Form from '@/components/Form'
import { IFormRef } from '@/components/Form/form.tsx'
import { CustomRule } from './useStore'
import Input from '@/components/Input'
import Select from '@/components/Select'
import Button from '@/components/Button'

const formMeta: Meta<typeof Form> = {
  title: 'Data Entry/Form',
  component: Form,
  decorators: [
    Story => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    )
  ]
}

export default formMeta

type Story = StoryObj<typeof Form>

export const BasicForm: Story = {
  render: args => (
    <Form {...args}>
      <Form.Item
        label="Username"
        name="Username"
        rules={[{ type: 'string', required: true, min: 3 }]}
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
      <div className="a-form-submit-area">
        <Button type="submit" btnType="primary">
          Login
        </Button>
      </div>
    </Form>
  )
}

export const RegForm: Story = {
  render: args => {
    const initialValues = {
      agreement: false
    }

    return (
      <Form {...args} initialValues={initialValues}>
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
}

export const ResetForm: Story = {
  render: args => {
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
}

export const FullForm: Story = {
  render: args => {
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
        {...args}
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
                {isValid ? ' Passed1' : ' Failed'}
              </Button>
            </div>
          </>
        )}
      </Form>
    )
  }
}
