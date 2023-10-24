export function get (value: any, path: string, defaultValue?: any, allowNull = false): any {
  return String(path).split('.').reduce((acc, v) => {
    try {
      acc = acc[v]
    } catch (e) {
      return defaultValue
    }
    if (acc === undefined || (!allowNull && acc === null)) {
      return defaultValue
    }
    return acc
  }, value)
}

export function removeUndefinedProps<T> (obj: T): Partial<T> {
  const result: Partial<T> = {} // Create a new object to hold the result
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Check if the property exists in the original object
      const value = obj[key]
      if (value !== undefined) {
        result[key] = value
      }
    }
  }
  return result
}

export function removeUndefinedOrNullProps<T> (obj: T): Partial<T> {
  const result: Partial<T> = {} // Create a new object to hold the result
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Check if the property exists in the original object
      const value = obj[key]
      if (value !== undefined && value !== null) {
        result[key] = value
      }
    }
  }
  return result
}
