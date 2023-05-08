import Classnames from 'classnames'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  btnType?: ButtonType
  size?: ButtonSize
  href?: string
  children: ReactNode
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button = (props: ButtonProps) => {
  const {
    btnType,
    className,
    disabled,
    size,
    href,
    children,
    ...restProps
  } = props

  // btn, btn-lg, btn-primary
  const classes = Classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }
  else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button
