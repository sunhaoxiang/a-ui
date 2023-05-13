import { Children, createContext, useState } from 'react'
import classnames from 'classnames'
import type { CSSProperties, FunctionComponentElement, ReactNode } from 'react'
import type { MenuItemProps } from './menuItem.tsx'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void

export interface MenuProps {
  defaultIndex?: string
  defaultOpenSubMenus?: string[]
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  onSelect?: SelectCallback
  children?: ReactNode
}

interface IMenuContext {
  index: string
  defaultOpenSubMenus?: string[]
  mode?: MenuMode
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu = (props: MenuProps) => {
  const {
    defaultIndex,
    defaultOpenSubMenus,
    className,
    mode,
    style,
    onSelect,
    children
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classnames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) onSelect(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive || '0',
    defaultOpenSubMenus,
    mode,
    onSelect: handleClick
  }

  const renderChildren = () => {
    return Children.map(children, child => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem' || displayName === 'SubMenu')
        return childElement

      console.error(
        'Warning: Menu has a child which is not a MenuItem component'
      )
    })
  }

  return (
    <ul className={classes} style={style} role="menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  defaultOpenSubMenus: [],
  mode: 'horizontal'
}

export default Menu
