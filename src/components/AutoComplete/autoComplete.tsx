import {
  useState,
  useEffect,
  useRef,
  FC,
  ChangeEvent,
  KeyboardEvent,
  ReactElement
} from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '@/components/Input/input.tsx'
import Icon from '@/components/Icon/icon.tsx'
import Transition from '@/components/Transition/transition.tsx'
import useDebounce from '@/hooks/useDebounce.tsx'
import useClickOutside from '@/hooks/useClickOutside.tsx'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = object> = T & DataSourceObject

export interface AutoCompleteProps
  extends Omit<InputProps, 'onSelect' | 'onChange'> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>
  onChange?: (value: string) => void
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = props => {
  const {
    value,
    fetchSuggestions,
    renderOption,
    onSelect,
    onChange,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)

  const triggerSearch = useRef(false)

  const componentRef = useRef<HTMLDivElement>(null)

  const debounceValue = useDebounce(inputValue)

  useClickOutside(componentRef, () => {
    setSuggestions([])
    setShowDropdown(false)
  })

  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setSuggestions([])
      const result = fetchSuggestions(debounceValue)
      if (result instanceof Promise) {
        setLoading(true)
        result.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(result)
        if (result.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debounceValue, fetchSuggestions])

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      case 'Escape':
        setSuggestions([])
        setShowDropdown(false)
        break
      default:
        break
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (onChange) {
      onChange(value)
    }
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([])
        }}
      >
        <ul className="a-suggestion-list">
          {loading && (
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestions.map((item, index) => {
            const classes = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li
                key={index}
                className={classes}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }

  return (
    <div className="a-auto-complete" ref={componentRef}>
      <Input
        {...restProps}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {generateDropdown()}
    </div>
  )
}

export default AutoComplete
