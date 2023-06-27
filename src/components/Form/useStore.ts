import { useState, useReducer } from 'react'
import Schema, { RuleItem, ValidateError } from 'async-validator'
import { each, mapValues } from 'lodash-es'

export type CustomRuleFunc = ({
  getFieldValue
}: {
  getFieldValue: (key: string) => any
}) => RuleItem

export type CustomRule = RuleItem | CustomRuleFunc

export interface FieldDetail {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  rules: CustomRule[]
  isValid: boolean
  errors: ValidateError[]
}

export interface FieldsState {
  [key: string]: FieldDetail
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[]
  fields: Record<string, ValidateError[]>
}

export interface FormState {
  isValid: boolean
  isSubmitting: boolean
  errors: Record<string, ValidateError[]>
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useStore(initialValues?: Record<string, any>) {
  const [form, setForm] = useState<FormState>({
    isValid: true,
    isSubmitting: false,
    errors: {}
  })

  const [fields, dispatch] = useReducer(fieldsReducer, {})

  const getFieldValue = (key: string) => {
    return fields[key] && fields[key].value
  }

  const getFieldsValue = () => {
    mapValues(fields, item => item.value)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setFieldValue = (name: string, value: any) => {
    if (fields[name]) {
      dispatch({ type: 'updateValue', name, value })
    }
  }

  const resetFields = () => {
    if (initialValues) {
      each(initialValues, (value, name) => {
        setFieldValue(name, value)
      })
    }
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
      const err = e as ValidateErrorType
      errors = err.errors
    } finally {
      dispatch({
        type: 'updateValidateResult',
        name,
        value: { isValid, errors }
      })
    }
  }

  const validateAllFields = async () => {
    let isValid = true
    let errors: Record<string, ValidateError[]> = {}
    const valueMap = mapValues(fields, item => item.value)
    const descriptor = mapValues(fields, item => transformRules(item.rules))
    const validator = new Schema(descriptor)
    setForm({ ...form, isSubmitting: true })
    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as ValidateErrorType
      errors = err.fields
      each(fields, (value, name) => {
        // There are errors
        if (errors[name]) {
          const itemErrors = errors[name]
          dispatch({
            type: 'updateValidateResult',
            name,
            value: { isValid: false, errors: itemErrors }
          })
          // There are rules and no errors
        } else if (value.rules.length > 0 && !errors[name]) {
          dispatch({
            type: 'updateValidateResult',
            name,
            value: { isValid: true, errors: [] }
          })
        }
      })
    } finally {
      setForm({ ...form, isSubmitting: false, isValid, errors })
    }
    return {
      isValid,
      errors,
      values: valueMap
    }
  }

  return {
    form,
    fields,
    dispatch,
    validateField,
    getFieldValue,
    setFieldValue,
    getFieldsValue,
    resetFields,
    validateAllFields
  }
}

export default useStore
