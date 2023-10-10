/*
  import useLocalStorage from 'hooks/useLocalStorage'
  const [value, setValue] = useLocalStorage(propertyName, defaultValue)
*/

import { useState, useEffect } from 'react'

type LocalStorageReturnProps<T> = [
  T | undefined,
  (propertyValue: T) => void
]

export default function useLocalStorage<T> (propertyName: string, defaultValue?: T): LocalStorageReturnProps<T> {
  const [value, setValueInState] = useState<T | undefined>(defaultValue)

  const setValueInLocalStorage = (propertyValue: any): void => {
    setValueInState(propertyValue)
    const propertyValueObject = typeof propertyValue === 'object'
      ? JSON.stringify(propertyValue)
      : propertyValue
    window.localStorage.setItem(propertyName, propertyValueObject)
  }

  useEffect(() => {
    const propertyValue = window.localStorage.getItem(propertyName)
    const propertyValueObject = (
      propertyValue !== null && (
        propertyValue?.startsWith('{') ||
        propertyValue?.startsWith('[') ||
        Boolean(propertyValue.match(/\d/))
      )
    )
      ? JSON.parse(propertyValue)
      : propertyValue
    setValueInState(propertyValueObject ?? defaultValue)
  }, [propertyName])

  return [value, setValueInLocalStorage]
}
