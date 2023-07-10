import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '@/components/Icon'
import type { Meta, StoryObj } from '@storybook/react'

const tabsItemMeta: Meta<typeof TabItem> = {
  title: 'Data Display/TabItem',
  component: TabItem,
  argTypes: {
    label: {
      control: {
        type: null
      }
    }
  }
}

export default tabsItemMeta

type Story = StoryObj<typeof TabItem>
const Template: Story = {
  render: args => (
    <Tabs>
      <TabItem {...args} label="Tab One">
        this is content one
      </TabItem>
      <TabItem {...args} label="Tab Two">
        this is content two
      </TabItem>
      <TabItem
        {...args}
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

export const DefaultTabsItem: Story = {
  ...Template
}
