import Form from './form'
import FormItem from './formItem'
import Input from '@/components/Input'
import type { Meta, StoryObj } from '@storybook/react'

const formItemMeta: Meta<typeof FormItem> = {
  title: 'Data Entry/FormItem',
  component: FormItem,
  decorators: [
    Story => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    )
  ]
}

export default formItemMeta

type Story = StoryObj<typeof FormItem>

export const BasicFormItem: Story = {
  render: args => (
    <Form>
      <FormItem
        {...args}
        label="Username"
        name="Username"
        rules={[{ type: 'string', required: true, min: 3 }]}
      >
        <Input />
      </FormItem>
    </Form>
  )
}
