import { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce(value: any, delay = 300) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debounceValue
}

export default useDebounce
