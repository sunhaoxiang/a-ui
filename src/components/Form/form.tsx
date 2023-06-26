import { createContext, FC, ReactNode, FormEvent } from 'react'
import { ValidateError } from 'async-validator'
import useStore, { FormState } from './useStore.ts'

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

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FC<FormProps> = props => {
  const { name, initialValues, onFinish, onFinishFailed, children } = props

  const { form, fields, dispatch, validateField, validateAllFields } =
    useStore()

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
    <>
      <form name={name} className="a-form" onSubmit={submitForm}>
        <FormContext.Provider value={passedContext}>
          {childrenNode}
        </FormContext.Provider>
      </form>
      <div>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(fields)}</pre>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(form)}</pre>
      </div>
    </>
  )
}

Form.defaultProps = {
  name: 'a_form'
}

export default Form
