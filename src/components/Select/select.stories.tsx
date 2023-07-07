import { Meta, StoryObj } from '@storybook/react'
import Select from '@/components/Select'
import { parameters } from '@/utils/storybook-utils'

const selectMeta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  decorators: [
    Story => (
      <div style={{ width: '350px', paddingBottom: '200px' }}>
        <Story />
      </div>
    )
  ]
}

export default selectMeta

type Story = StoryObj<typeof Select>

const defaultSelectCode = `
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
`

export const DefaultSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select">
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>
  ),
  parameters: parameters({ code: defaultSelectCode })
}

const multipleSelectCode = `
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
`

export const MultipleSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select" multiple>
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>
  ),
  parameters: parameters({ code: multipleSelectCode })
}

const disabledSelectCode = `
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
`

export const DisabledSelect: Story = {
  render: args => (
    <Select {...args} placeholder="Select" disabled>
      <Select.Option value="Jack" />
      <Select.Option value="Lucy" />
      <Select.Option value="Hello" />
      <Select.Option value="disabled" disabled />
    </Select>
  ),
  parameters: parameters({ code: disabledSelectCode })
}
