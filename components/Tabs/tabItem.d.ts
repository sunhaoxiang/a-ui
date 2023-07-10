import type { FC, ReactNode, ReactElement } from 'react';
export interface TabItemProps {
    label: string | ReactElement;
    disabled?: boolean;
    children?: ReactNode;
}
export declare const TabItem: FC<TabItemProps>;
export default TabItem;
