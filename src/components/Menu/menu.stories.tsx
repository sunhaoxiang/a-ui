import { Meta, StoryObj } from '@storybook/react'
import Menu from './menu.tsx'
import SubMenu from './subMenu.tsx'
import MenuItem from './menuItem.tsx'

const menuMeta: Meta<typeof Menu> = {
  id: 'Menu',
  title: 'Menu',
  component: Menu,
  // argTypes: {
  //   defaultOpenSubMenus: {
  //     control: 'array'
  //   }
  // },
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
      <SubMenu index="3" title="下拉选项">
        <MenuItem index="3-0">下拉选项一</MenuItem>
        <MenuItem index="3-1">下拉选项二</MenuItem>
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
