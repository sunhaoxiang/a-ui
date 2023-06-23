import { createContext, FC, ReactNode } from 'react'
import useStore from './useStore.ts'

export interface FormProps {
  name?: string
  children?: ReactNode
}

export type IFormContext = Pick<ReturnType<typeof useStore>, 'dispatch'>

export const FormContext = createContext<IFormContext>({} as IFormContext)

export const Form: FC<FormProps> = props => {
  const { name, children } = props

  const { form, fields, dispatch } = useStore()

  const passedContext: IFormContext = {
    dispatch
  }

  return (
    <form name={name} className="a-form">
      <FormContext.Provider value={passedContext}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

Form.defaultProps = {
  name: 'a_form'
}

export default Form
