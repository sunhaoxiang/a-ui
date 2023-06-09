import Form from './form'
import Item from './formItem'
import type { FC } from 'react'
import type { RenderProps, FormProps, IFormContext, IFormRef } from './form'
import type { FormItemProps } from './formItem'
import type {
  CustomRuleFunc,
  CustomRule,
  FieldDetail,
  FieldsState,
  ValidateErrorType,
  FormState,
  FieldAction
} from './useStore'

export type IFormComponent = typeof Form & {
  Item: FC<FormItemProps>
}

const TransForm: IFormComponent = Form as IFormComponent

TransForm.Item = Item

export type {
  RenderProps,
  FormProps,
  IFormContext,
  IFormRef,
  FormItemProps,
  CustomRuleFunc,
  CustomRule,
  FieldDetail,
  FieldsState,
  ValidateErrorType,
  FormState,
  FieldAction
}
export default TransForm
