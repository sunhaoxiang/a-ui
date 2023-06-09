import classNames from 'classnames'
import type {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'

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

export const Button: FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, href, children, ...restProps } =
    props

  const classes = classNames('a-btn', className, {
    [`a-btn-${btnType}`]: btnType,
    [`a-btn-${size}`]: size,
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
