import type { FC } from 'react';
import type { MenuMode, MenuProps } from './menu';
import type { MenuItemProps } from './menuItem';
import type { SubMenuProps } from './subMenu';
export type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export type { MenuMode, MenuProps, MenuItemProps, SubMenuProps };
export default TransMenu;
