import { useState, useReducer } from 'react'
import Schema, { RuleItem, ValidateError } from 'async-validator'

export type CustomRuleFunc = ({
  getFieldValue
}: {
  getFieldValue: (key: string) => any
}) => RuleItem

export type CustomRule = RuleItem | CustomRuleFunc

export interface FieldDetail {
  name: string
  value: any
  rules: CustomRule[]
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
      console.log({
        ...state,
        [action.name]: { ...action.value }
      })
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

  const getFieldValue = (key: string) => {
    return fields[key] && fields[key].value
  }

  const transformRules = (rules: CustomRule[]) => {
    return rules.map(rule => {
      if (typeof rule === 'function') {
        return rule({ getFieldValue })
      } else {
        return rule
      }
    })
  }

  const validateField = async (name: string) => {
    const { value, rules } = fields[name]
    const afterRules = transformRules(rules)
    const descriptor = { [name]: afterRules }
    const valueMap = { [name]: value }
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
    validateField,
    getFieldValue
  }
}

export default useStore
