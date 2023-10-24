/**
  WIP: not used yet

  import useFormValidation from 'hooks/useFormValidation'

  const formValidationErrors = useFormValidation(formData, {
    customerId: 'Customer is required',
    transporterId: 'Transporter is required'
  })

  {formValidationErrors !== null && (
    <div>{formValidationErrors}</div>
  )}
*/

import { useMemo } from 'react'

export default function useFormValidation (formData: any, fieldNames: Record<string, string>): string | null {
  const formValuesToWatch = Object.keys(fieldNames).map((fieldName: string) => formData[fieldName])
  const formValidationErrors: string | null = useMemo(
    () => {
      console.log('formValidationErrors:', formData)
      Object.keys(fieldNames).forEach((fieldName: string) => {
        if (formData[fieldName] === undefined) return fieldNames[fieldName]
      })
      return null
    },
    formValuesToWatch
  )

  return formValidationErrors
}
