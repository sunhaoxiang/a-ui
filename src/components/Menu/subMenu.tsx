import { Children, useContext } from 'react'
import Classnames from 'classnames'
import type { FunctionComponentElement, ReactNode } from 'react'
import { MenuContext } from './menu.tsx'
import type { MenuItemProps } from './menuItem.tsx'

export interface SubMenuProps {
  index: number
  title?: string
  className?: string
  children?: ReactNode
}

const SubMenu = (props: SubMenuProps) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = Classnames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })

  const renderChildren = () => {
    return Children.map(children, (child) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem')
        return childElement

      console.error('Warning: SubMenu has a child which is not a MenuItem component')
    })
  }

  return (
    <li
      key={index}
      className={classes}
    >
      <div className="submenu-title">
        {title}
      </div>
      <ul className="submenu">
        {renderChildren()}
      </ul>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
