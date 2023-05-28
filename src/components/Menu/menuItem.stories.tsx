import { Meta, StoryObj } from '@storybook/react'
import Menu from './menu.tsx'
import SubMenu from './subMenu.tsx'
import MenuItem from './menuItem.tsx'

const MenuItemMeta: Meta<typeof MenuItem> = {
  title: 'Navigation/Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs']
}

export default MenuItemMeta

type Story = StoryObj<typeof MenuItem>

const Template: Story = {
  render: args => (
    <Menu defaultIndex="0">
      <MenuItem {...args} index="0">
        cool link
      </MenuItem>
      <MenuItem {...args} index="1">
        cool link 2
      </MenuItem>
      <MenuItem {...args} index="2" disabled>
        disabled
      </MenuItem>
      <SubMenu index="3" title="dropDown">
        <MenuItem {...args} index="3-0">
          drop down 1
        </MenuItem>
        <MenuItem {...args} index="3-1">
          drop down 2
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}

export const DefaultMenuItem: Story = {
  ...Template
}