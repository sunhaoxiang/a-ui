import { FC, ReactNode } from 'react'
import classnames from 'classnames'

export interface FormItemProps {
  label?: string
  children?: ReactNode
}

export const FormItem: FC<FormItemProps> = props => {
  const { label, children } = props

  const rowClass = classnames('a-row', {
    'a-row-no-label': !label
  })
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
