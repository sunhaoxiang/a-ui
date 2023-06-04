import { FC } from 'react'
import Input, { InputProps } from '@/components/Input/input.tsx'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[]
  onSelect?: (item: string) => void
}

export const AutoComplete: FC<AutoCompleteProps> = props => {
  const { fetchSuggestions, onSelect, ...restProps } = props

  return <Input />
}

export default AutoComplete
