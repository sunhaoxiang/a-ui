import { FC, useState, ChangeEvent, ReactElement } from 'react'
import Input, { InputProps } from '@/components/Input/input.tsx'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = object> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[]
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = props => {
  const { value, fetchSuggestions, renderOption, onSelect, ...restProps } =
    props

  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const result = fetchSuggestions(value)
      setSuggestions(result)
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="a-auto-complete">
      <Input value={inputValue} onChange={handleChange} {...restProps} />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  )
}

export default AutoComplete
