import { Meta, StoryObj } from '@storybook/react'
import Tabs from '@/components/Tabs'
import Icon from '@/components/Icon'
import { parameters } from '@/utils/storybook-utils'

const tabsMeta: Meta<typeof Tabs> = {
  title: 'Data Display/Tabs',
  component: Tabs
}

export default tabsMeta

type Story = StoryObj<typeof Tabs>
const Template: Story = {
  render: args => (
    <Tabs {...args}>
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
}

const defaultTabsCode = `
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
`

export const DefaultTabs: Story = {
  ...Template,
  parameters: parameters({ code: defaultTabsCode })
}

const cardTabsCode = `
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
`

export const CardTabs: Story = {
  ...Template,
  args: {
    type: 'card'
  },
  parameters: parameters({ code: cardTabsCode })
}
