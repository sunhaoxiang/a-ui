import { FC } from 'react'
import Form from './form'
import Item from './formItem'
import type { RenderProps, FormProps, IFormContext, IFormRef } from './form'
import type { FormItemProps } from './formItem'

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>
}

const TransForm: IFormComponent = Form as IFormComponent

TransForm.Item = Item

export type { RenderProps, FormProps, IFormContext, IFormRef, FormItemProps }
export default TransForm
