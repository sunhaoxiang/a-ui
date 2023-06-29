import {
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
  forwardRef
} from 'react'
import classNames from 'classnames'
import Icon from '@/components/Icon/icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prepend?: string | ReactElement
  append?: string | ReactElement
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props

  const classes = classNames('a-input-wrapper', {
    [`a-input-size-${size}`]: size,
    'a-is-disabled': disabled,
    'a-input-group': prepend || append,
    'a-input-group-append-wrapper': !!append,
    'a-input-group-prepend-wrapper': !!prepend
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="a-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="a-icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        ref={ref}
        className="a-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="a-input-group-append">{append}</div>}
    </div>
  )
})

export default Input
