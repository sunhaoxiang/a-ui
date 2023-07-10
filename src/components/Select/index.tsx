import Select from './select'
import Option from './option'
import type { FC } from 'react'
import type { SelectProps, ISelectContext } from './select'
import type { SelectOptionProps } from './option'

export type ISelectComponent = FC<SelectProps> & {
  Option: FC<SelectOptionProps>
}

const TransSelect = Select as ISelectComponent

TransSelect.Option = Option

export type { SelectProps, ISelectContext, SelectOptionProps }
export default TransSelect
