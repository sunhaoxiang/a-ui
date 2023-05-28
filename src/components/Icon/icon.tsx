import { FC } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'
import classnames from 'classnames'

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

  const classes = classnames('icon', className, {
    [`icon-${theme}`]: theme
  })

  return <FontAwesomeIcon className={classes} {...restProps} />
}

export default Icon
