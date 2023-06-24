import { createContext, FC, ReactNode } from 'react'
import useStore from './useStore.ts'

export interface FormProps {
  name?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: Record<string, any>
  children?: ReactNode
}

export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  'fields' | 'dispatch' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FC<FormProps> = props => {
  const { name, initialValues, children } = props

  const { form, fields, dispatch, validateField } = useStore()

  const passedContext: IFormContext = {
    fields,
    initialValues,
    dispatch,
    validateField
  }

  return (
    <>
      <form name={name} className="a-form">
        <FormContext.Provider value={passedContext}>
          {children}
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
