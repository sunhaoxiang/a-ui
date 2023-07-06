import { FC, CSSProperties, ReactNode } from 'react';
export interface MenuItemProps {
    index: string;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}
export declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
