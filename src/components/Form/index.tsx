import { FC } from 'react'
import Form from './form.tsx'
import Item, { FormItemProps } from './formItem.tsx'

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>
}

const TransForm: IFormComponent = Form as IFormComponent

TransForm.Item = Item

export default TransForm
