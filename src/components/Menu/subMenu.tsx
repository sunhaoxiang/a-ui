import { Children, useContext, useState } from 'react'
import classnames from 'classnames'
import type { FunctionComponentElement, MouseEvent, ReactNode } from 'react'
import { MenuContext } from './menu.tsx'
import type { MenuItemProps } from './menuItem.tsx'

export interface SubMenuProps {
  index: string
  title?: string
  className?: string
  children?: ReactNode
}

const SubMenu = (props: SubMenuProps) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const { index, title, className, children } = props
  const isOpened = (index && context.mode === 'vertical')
    ? openedSubMenus.includes(index)
    : false
  const [menuOpen, setOpen] = useState(isOpened)
  const classes = classnames('menu-item submenu-item', className, {
    'is-active': context.index === index,
  })
  const subMenuClasses = classnames('submenu', {
    'menu-opened': menuOpen,
  })

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical'
    ? {
        onClick: handleClick,
      }
    : {}

  const hoverEvents = context.mode !== 'vertical'
    ? {
        onMouseEnter: (e: MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: MouseEvent) => { handleMouse(e, false) },
      }
    : {}

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
      {...hoverEvents}
    >
      <div
        className="submenu-title"
        {...clickEvents}
      >
        {title}
      </div>
      <ul className={subMenuClasses}>
        {renderChildren()}
      </ul>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
