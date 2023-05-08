import { createContext, useState } from 'react'
import Classnames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  onSelect?: SelectCallback
  children: ReactNode
}

interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu = (props: MenuProps) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect)
      onSelect(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive || 0,
    onSelect: handleClick,
  }

  const classes = Classnames('menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  return (
    <ul
      className={classes}
      style={style}
    >
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
