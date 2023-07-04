import { Meta, StoryObj } from '@storybook/react'
import Menu from './menu'
import SubMenu from './subMenu'
import MenuItem from './menuItem'

const subMenuMeta: Meta<typeof SubMenu> = {
  title: 'Navigation/Menu/SubMenu',
  component: SubMenu
}

export default subMenuMeta

type Story = StoryObj<typeof SubMenu>

const Template: Story = {
  render: args => (
    <Menu defaultIndex="0">
      <MenuItem index="0">cool link</MenuItem>
      <MenuItem index="1">cool link 2</MenuItem>
      <MenuItem index="2" disabled>
        disabled
      </MenuItem>
      <SubMenu {...args} index="3" title="dropDown">
        <MenuItem index="3-0">drop down 1</MenuItem>
        <MenuItem index="3-1">drop down 2</MenuItem>
      </SubMenu>
    </Menu>
  )
}

export const DefaultMenu: Story = {
  ...Template
}
