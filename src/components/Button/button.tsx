import {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'
import classnames from 'classnames'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  btnType?: ButtonType
  size?: ButtonSize
  href?: string
  children?: ReactNode
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, href, children, ...restProps } =
    props

  // btn, btn-lg, btn-primary
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button
