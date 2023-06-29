import {
  FC,
  Children,
  useContext,
  useState,
  FunctionComponentElement,
  MouseEvent,
  ReactNode
} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '@/components/Icon/icon'
import Transition from '@/components/Transition/transition'

export interface SubMenuProps {
  index: string
  title?: string
  className?: string
  children?: ReactNode
}

export const SubMenu: FC<SubMenuProps> = props => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const { index, title, className, children } = props
  const isOpened =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false
  const [menuOpen, setOpen] = useState(isOpened)
  const classes = classNames('a-menu-item a-submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: ReturnType<typeof setTimeout>
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick
        }
      : {}

  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}

  const renderChildren = () => {
    return Children.map(children, child => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem') {
        return childElement
      }

      console.error(
        'Warning: SubMenu has a child which is not a MenuItem component'
      )
    })
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="a-submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className="a-submenu">{renderChildren()}</ul>
      </Transition>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
