import type { FC, ReactNode, ReactElement } from 'react'

export interface TabItemProps {
  label: string | ReactElement
  disabled?: boolean
  children?: ReactNode
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="a-tab-panel">{children}</div>
}

export default TabItem
