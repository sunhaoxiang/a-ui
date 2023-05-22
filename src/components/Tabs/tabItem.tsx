import { FC, ReactNode, ReactElement } from 'react'

export interface TabItemProps {
  label: string | ReactElement
  disabled?: boolean
  children?: ReactNode
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="tab-panel">{children}</div>
}

export default TabItem
