import { createContext, forwardRef, useImperativeHandle } from 'react'
import useStore from './useStore'
import type { ReactNode, FormEvent } from 'react'
import type { ValidateError } from 'async-validator'
import type { FormState } from './useStore'

export type RenderProps = (form: FormState) => ReactNode

export interface FormProps {
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: Record<string, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFinish?: (values: Record<string, any>) => void
  onFinishFailed?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: Record<string, any>,
    errors: Record<string, ValidateError[]>
  ) => void
  children?: ReactNode | RenderProps
}

export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  'fields' | 'dispatch' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>

export type IFormRef = Omit<
  ReturnType<typeof useStore>,
  'form' | 'fields' | 'dispatch'
>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form = forwardRef<IFormRef, FormProps>((props, ref) => {
  const { name, initialValues, onFinish, onFinishFailed, children } = props

  const { form, fields, dispatch, ...restProps } = useStore(initialValues)

  const { validateField, validateAllFields } = restProps

  useImperativeHandle(ref, () => {
    return {
      ...restProps
    }
  })

  const passedContext: IFormContext = {
    fields,
    initialValues,
    dispatch,
    validateField
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { isValid, errors, values } = await validateAllFields()
    if (isValid && onFinish) {
      onFinish(values)
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(values, errors)
    }
  }

  let childrenNode: ReactNode
  if (typeof children === 'function') {
    childrenNode = children(form)
  } else {
    childrenNode = children
  }

  return (
    <form name={name} className="a-form" onSubmit={submitForm}>
      <FormContext.Provider value={passedContext}>
        {childrenNode}
      </FormContext.Provider>
    </form>
  )
})

Form.defaultProps = {
  name: 'a_form'
}

export default Form
