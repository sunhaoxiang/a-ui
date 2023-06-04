import { Meta, StoryObj } from '@storybook/react'
import Tabs from './tabs.tsx'
import TabItem from './tabItem.tsx'
import Icon from '@/components/Icon/icon.tsx'

const tabsItemMeta: Meta<typeof TabItem> = {
  title: 'Data Display/Tabs/TabItem',
  component: TabItem,
  argTypes: {
    label: {
      control: {
        type: null
      }
    }
  },
  tags: ['autodocs']
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
