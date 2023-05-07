import Classnames from 'classnames'
import type { CSSProperties, ReactNode } from 'react'

export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}

const MenuItem = (props: MenuItemProps) => {
  const {
    index,
    disabled,
    className,
    style,
    children,
  } = props

  const classes = Classnames('menu-item', className, {
    'is-disabled': disabled,
  })

  return (
    <li
      className={classes}
      style={style}
    >
      {children}
    </li>
  )
}

export default MenuItem
