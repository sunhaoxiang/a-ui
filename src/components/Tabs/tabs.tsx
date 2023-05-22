import type { ReactNode } from 'react'

export interface TabsProps {
  defaultIndex?: number
  className?: string
  onSelect?: (selectedIndex: number) => void
  type?: 'line' | 'card'
  children?: ReactNode
}

const Tabs = (props: TabsProps) => {
  const { defaultIndex, className, onSelect, children, type } = props

  return <div>Tabs</div>
}

export default Tabs
