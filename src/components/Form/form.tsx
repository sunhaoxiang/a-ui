import { FC, ReactNode } from 'react'

export interface FormProps {
  name?: string
  children?: ReactNode
}

export const Form: FC<FormProps> = props => {
  const { name, children } = props
  return (
    <form name={name} className="a-form">
      {children}
    </form>
  )
}

Form.defaultProps = {
  name: 'a_form'
}

export default Form
