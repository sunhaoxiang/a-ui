import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import type { FC } from 'react'
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

library.add(fas)

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
  className?: string
}

export const Icon: FC<IconProps> = props => {
  const { theme, className, ...restProps } = props

  const classes = classNames('a-icon', className, {
    [`a-icon-${theme}`]: theme
  })

  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
