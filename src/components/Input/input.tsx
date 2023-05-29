import { FC, ReactElement, InputHTMLAttributes } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement
}

export const Input: FC<InputProps> = () => {
  return <div>input</div>
}

export default Input
