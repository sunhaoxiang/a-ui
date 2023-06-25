import {
  useContext,
  useEffect,
  Children,
  cloneElement,
  isValidElement,
  FC,
  ReactNode,
  ReactElement
} from 'react'
import classNames from 'classnames'
import { FormContext } from './form.tsx'
import { CustomRule } from './useStore.tsx'

export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>

export interface FormItemProps {
  name: string
  label?: string
  valuePropName?: string
  trigger?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValueFromEvent?: (event: any) => any
  rules?: CustomRule[]
  validateTrigger?: string
  children?: ReactNode
}

export const FormItem: FC<FormItemProps> = props => {
  const {
    name,
    label,
    valuePropName,
    trigger,
    rules,
    validateTrigger,
    getValueFromEvent,
    children
  } = props as SomeRequired<
    FormItemProps,
    'valuePropName' | 'trigger' | 'validateTrigger' | 'getValueFromEvent'
  >

  const { fields, initialValues, dispatch, validateField } =
    useContext(FormContext)

  const rowClass = classNames('a-row', {
    'a-row-no-label': !label
  })

  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({
      type: 'addField',
      name,
      value: {
        label,
        name,
        value,
        rules: rules || [],
        errors: [],
        isValid: true
      }
    })
  }, [])

  // get field value
  const fieldState = fields[name]
  // set default value to fix warning: A component is changing an uncontrolled input to be controlled.
  const value = (fieldState && fieldState.value) || ''
  const errors = fieldState && fieldState.errors
  const isRequired = !!rules?.some(
    rule => typeof rule !== 'function' && rule.required
  )
  const hasError = errors?.length > 0
  const labelClass = classNames({
    'a-form-item-required': isRequired
  })
  const itemClass = classNames('a-form-item-control', {
    'a-form-item-has-error': hasError
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e)
    dispatch({
      type: 'updateValue',
      name,
      value
    })
  }
  const onValueValidate = async () => {
    await validateField(name)
  }

  // 1.Create an attribute list that contains the value and onChange attributes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }

  // 2.Get the first element of the children array
  const childList = Children.toArray(children)
  if (childList.length === 0) {
    console.error('FormItem must have a child node')
  }
  if (childList.length > 1) {
    console.warn(
      'FormItem only support one child node, the others will be ignored'
    )
  }
  if (!isValidElement(childList[0])) {
    console.error('Child node is not a valid React Element')
  }
  const child = childList[0] as ReactElement

  // 3.Use cloneElement API to mixes the child and the attribute list
  const returnChildNode = cloneElement(child, {
    ...child.props,
    ...controlProps
  })

  return (
    <div className={rowClass}>
      {label && (
        <div className="a-form-item-label">
          <label title={label} className={labelClass}>
            {label}
          </label>
        </div>
      )}
      <div className="a-form-item">
        <div className={itemClass}>{returnChildNode}</div>
        {hasError && (
          // TODO Multiple lines display error
          <div className="a-form-item-explain">
            <span>{errors[0].message}</span>
          </div>
        )}
      </div>
    </div>
  )
}

FormItem.defaultProps = {
  valuePropName: 'value',
  trigger: 'onChange',
  validateTrigger: 'onBlur',
  getValueFromEvent: e => e.target.value
}

export default FormItem
