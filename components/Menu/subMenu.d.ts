import type { FC, ReactNode } from 'react';
export interface SubMenuProps {
    index: string;
    title?: string;
    className?: string;
    children?: ReactNode;
}
export declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
