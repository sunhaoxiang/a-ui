import { useState, useReducer } from 'react'
import Schema, { RuleItem, ValidateError } from 'async-validator'

export interface FieldDetail {
  name: string
  value: string
  rules: RuleItem[]
  isValid: boolean
  errors: ValidateError[]
}

export interface FieldsState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean
}

export interface FieldAction {
  type: 'addField' | 'updateValue' | 'updateValidateResult'
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
    case 'updateValue':
      return {
        ...state,
        [action.name]: { ...state[action.name], value: action.value }
      }
    case 'updateValidateResult':
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isValid: action.value.isValid,
          errors: action.value.errors
        }
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

  const validateField = async (name: string) => {
    const { value, rules } = fields[name]
    const valueMap = { [name]: value }
    const descriptor = { [name]: rules }
    const validator = new Schema(descriptor)
    let isValid = true
    let errors: ValidateError[] = []
    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as any
      errors = err.errors
    } finally {
      dispatch({
        type: 'updateValidateResult',
        name,
        value: { isValid, errors }
      })
    }
  }

  return {
    form,
    fields,
    dispatch,
    validateField
  }
}

export default useStore
