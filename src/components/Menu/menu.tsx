import { Children, createContext, useState } from 'react'
import classNames from 'classnames'
import type {
  FC,
  CSSProperties,
  FunctionComponentElement,
  ReactNode
} from 'react'
import type { MenuItemProps } from './menuItem'

export type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: string
  defaultOpenSubMenus?: string[]
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  onSelect?: (selectedIndex: string) => void
  children?: ReactNode
}

interface IMenuContext {
  index: string
  defaultOpenSubMenus?: string[]
  mode?: MenuMode
  onSelect?: (selectedIndex: string) => void
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: FC<MenuProps> = props => {
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

  const classes = classNames('a-menu', className, {
    'a-menu-vertical': mode === 'vertical',
    'a-menu-horizontal': mode !== 'vertical'
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
  defaultIndex: '0',
  defaultOpenSubMenus: [],
  mode: 'horizontal'
}

export default Menu
