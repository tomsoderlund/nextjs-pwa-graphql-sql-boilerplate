// E.g. const debouncedSearchTerm = useDebounce(searchTerm, 500)
// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
import { useState, useEffect } from 'react'

type DebounceValue = string

export default function useDebounce (value: DebounceValue, delay: number, onChange?: (value: DebounceValue) => void): DebounceValue {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
        onChange?.(value)
      }, delay)
      return () => clearTimeout(handler)
    },
    [value]
  )

  return debouncedValue
}
