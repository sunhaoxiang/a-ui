import type { ReactNode } from 'react'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: ReactNode
}

function Button(props: BaseButtonProps) {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
  } = props

  console.log(className)
  console.log(disabled)
  console.log(size)
  console.log(btnType)
  console.log(children)
  return <div>123</div>
}

export default Button
