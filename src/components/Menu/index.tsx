import { FC } from 'react'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import type { MenuMode, MenuProps } from './menu'
import type { MenuItemProps } from './menuItem'
import type { SubMenuProps } from './subMenu'

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export type { MenuMode, MenuProps, MenuItemProps, SubMenuProps }
export default TransMenu
