import { Meta, StoryObj } from '@storybook/react'
import Menu from '@/components/Menu'

const menuMeta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  decorators: [
    Story => (
      <div style={{ paddingBottom: '100px' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    onSelect: {
      control: {
        type: null
      }
    }
  }
}

export default menuMeta

type Story = StoryObj<typeof Menu>

const Template: Story = {
  render: args => (
    <Menu defaultIndex="0" {...args}>
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
}

export const DefaultMenu: Story = {
  ...Template,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
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
        `
      }
    }
  }
}

export const VerticalMenu: Story = {
  ...Template,
  args: {
    mode: 'vertical',
    defaultIndex: '1'
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
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
        `
      }
    }
  }
}
