import { useContext, useEffect, FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FormContext } from './form.tsx'

export interface FormItemProps {
  name: string
  label?: string
  children?: ReactNode
}

export const FormItem: FC<FormItemProps> = props => {
  const { name, label, children } = props

  const { dispatch } = useContext(FormContext)

  const rowClass = classNames('a-row', {
    'a-row-no-label': !label
  })

  useEffect(() => {
    dispatch({
      type: 'addField',
      name,
      value: {
        label,
        name
      }
    })
  }, [])

  return (
    <div className={rowClass}>
      {label && (
        <div className="a-form-item-label">
          <label title={label}>{label}</label>
        </div>
      )}
      <div className="a-form-item">{children}</div>
    </div>
  )
}

export default FormItem
