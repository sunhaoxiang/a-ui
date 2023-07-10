import type { FC } from 'react';
import type { TabsProps } from './tabs';
import type { TabItemProps } from './tabItem';
export type ITabsComponent = FC<TabsProps> & {
    Item: FC<TabItemProps>;
};
declare const TransTabs: ITabsComponent;
export type { TabsProps, TabItemProps };
export default TransTabs;
