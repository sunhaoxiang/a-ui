import { Meta, StoryObj } from '@storybook/react'
import Menu from './menu'
import SubMenu from './subMenu'
import MenuItem from './menuItem'

const menuMeta: Meta<typeof Menu> = {
  title: 'Navigation/Menu/Menu',
  component: Menu,
  argTypes: {
    onSelect: {
      control: {
        type: null
      }
    }
  },
  tags: ['autodocs']
}

export default menuMeta

type Story = StoryObj<typeof Menu>

const Template: Story = {
  render: args => (
    <Menu defaultIndex="0" {...args}>
      <MenuItem index="0">cool link</MenuItem>
      <MenuItem index="1">cool link 2</MenuItem>
      <MenuItem index="2" disabled>
        disabled
      </MenuItem>
      <SubMenu index="3" title="dropDown">
        <MenuItem index="3-0">drop down 1</MenuItem>
        <MenuItem index="3-1">drop down 2</MenuItem>
      </SubMenu>
    </Menu>
  )
}

export const DefaultMenu: Story = {
  ...Template
}

export const VerticalMenu: Story = {
  ...Template,
  args: {
    mode: 'vertical',
    defaultIndex: '1'
  }
}
