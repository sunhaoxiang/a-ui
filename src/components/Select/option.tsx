import { FC, useContext, ReactNode, MouseEvent } from 'react'
import classnames from 'classnames'
import Icon from '@/components/Icon/icon.tsx'
import { SelectContext } from './select.tsx'
export interface SelectOptionProps {
  index?: string
  value: string
  label?: string
  disabled?: boolean
  children?: ReactNode
}

export const Option: FC<SelectOptionProps> = ({
  value,
  label,
  disabled,
  children,
  index
}) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext)
  const isSelected = selectedValues.includes(value)

  const classes = classnames('a-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected
  })

  const handleClick = (e: MouseEvent, value: string, isSelected: boolean) => {
    e.preventDefault()
    if (onSelect && !disabled) {
      onSelect(value, isSelected)
    }
  }

  return (
    <li
      key={index}
      className={classes}
      onClick={e => {
        handleClick(e, value, isSelected)
      }}
    >
      {children || (label ? label : value)}
      {multiple && isSelected && <Icon icon="check" />}
    </li>
  )
}

Option.displayName = 'Option'

export default Option
