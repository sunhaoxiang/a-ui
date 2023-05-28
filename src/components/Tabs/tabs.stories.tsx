import { Meta, StoryObj } from '@storybook/react'
import Tabs from './tabs.tsx'
import TabItem from './tabItem.tsx'
import Icon from '../Icon/icon.tsx'

const tabsMeta: Meta<typeof Tabs> = {
  title: 'Data Display/Tabs/Tabs',
  component: Tabs,
  tags: ['autodocs']
}

export default tabsMeta

type Story = StoryObj<typeof Tabs>
const Template: Story = {
  render: args => (
    <Tabs {...args}>
      <TabItem label="Tab One">this is content one</TabItem>
      <TabItem label="Tab Two">this is content two</TabItem>
      <TabItem
        label={
          <>
            <Icon icon="check-circle" /> Tab Three
          </>
        }
      >
        this is content three
      </TabItem>
    </Tabs>
  )
}

export const DefaultTabs: Story = {
  ...Template
}

export const CardTabs: Story = {
  ...Template,
  args: {
    type: 'card'
  }
}
