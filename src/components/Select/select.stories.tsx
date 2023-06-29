import { Meta, StoryObj } from '@storybook/react'
import Select from './select'
import Option from './option'

const selectMeta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  decorators: [
    Story => (
      <div style={{ width: '350px', paddingBottom: '200px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs']
}

export default selectMeta

type Story = StoryObj<typeof Select>

export const DefaultSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select">
      <Option value="Jack" />
      <Option value="Lucy" />
      <Option value="Hello" />
      <Option value="disabled" disabled />
    </Select>
  )
}

export const MultipleSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select" multiple>
      <Option value="Jack" />
      <Option value="Lucy" />
      <Option value="Hello" />
      <Option value="disabled" disabled />
    </Select>
  )
}

export const DisabledSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select" disabled>
      <Option value="Jack" />
      <Option value="Lucy" />
      <Option value="Hello" />
      <Option value="disabled" disabled />
    </Select>
  )
}
