import {
  FC,
  useState,
  FunctionComponentElement,
  ReactNode,
  Children
} from 'react'
import classnames from 'classnames'
import { TabItemProps } from './tabItem'

export interface TabsProps {
  defaultIndex?: number
  className?: string
  onSelect?: (selectedIndex: number) => void
  type?: 'line' | 'card'
  children?: ReactNode
}

export const Tabs: FC<TabsProps> = props => {
  const { defaultIndex, className, onSelect, children, type } = props

  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const handleClick = (index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }

  const tabClass = classnames('a-tabs', className)

  const navClass = classnames('a-tabs-nav', {
    'a-nav-line': type === 'line',
    'a-nav-card': type === 'card'
  })

  const renderNavLinks = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const classes = classnames('a-tabs-nav-item', {
        'is-active': activeIndex === index,
        disabled: disabled
      })
      return (
        <li
          className={classes}
          key={`nav-item-${index}`}
          onClick={() => {
            handleClick(index, disabled)
          }}
        >
          {label}
        </li>
      )
    })
  }
  const renderContent = () => {
    return Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }

  return (
    <div className={tabClass}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="a-tabs-content">{renderContent()}</div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line'
}

export default Tabs
