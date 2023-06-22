import { useState, useReducer } from 'react'

export interface FieldDetail {
  name: string
  value: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules: any[]
  isValid: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any[]
}

export interface FieldsState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean
}

export interface FieldAction {
  type: 'addField'
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

function fieldsReducer(state: FieldsState, action: FieldAction): FieldsState {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [action.name]: { ...action.value }
      }
    default:
      return state
  }
}

function useStore() {
  const [form, setForm] = useState<FormState>({
    isValid: true
  })

  const [fields, dispatch] = useReducer(fieldsReducer, {})

  return {
    form,
    fields,
    dispatch
  }
}

export default useStore
