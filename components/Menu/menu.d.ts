import { FC, CSSProperties, ReactNode } from 'react';
type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: string;
    defaultOpenSubMenus?: string[];
    mode?: MenuMode;
    className?: string;
    style?: CSSProperties;
    onSelect?: (selectedIndex: string) => void;
    children?: ReactNode;
}
interface IMenuContext {
    index: string;
    defaultOpenSubMenus?: string[];
    mode?: MenuMode;
    onSelect?: (selectedIndex: string) => void;
}
export declare const MenuContext: import("react").Context<IMenuContext>;
export declare const Menu: FC<MenuProps>;
export default Menu;
