import Classnames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  onSelect?: (selectedIndex: number) => void
  children: ReactNode
}

const Menu = (props: MenuProps) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
  } = props

  const classes = Classnames('menu', className, {
    'menu-vertical': mode === 'vertical',
  })

  return (
    <ul
      className={classes}
      style={style}
    >
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}

export default Menu
