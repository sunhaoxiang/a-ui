import { FC } from 'react'
import Tabs from './tabs'
import TabItem from './tabItem'
import type { TabsProps } from './tabs'
import type { TabItemProps } from './tabItem'

export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}
const TransTabs = Tabs as ITabsComponent

TransTabs.Item = TabItem

export type { TabsProps, TabItemProps }
export default TransTabs
