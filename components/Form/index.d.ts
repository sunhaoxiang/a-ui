import Form from './form';
import type { FC } from 'react';
import type { RenderProps, FormProps, IFormContext, IFormRef } from './form';
import type { FormItemProps } from './formItem';
import type { CustomRuleFunc, CustomRule, FieldDetail, FieldsState, ValidateErrorType, FormState, FieldAction } from './useStore';
export type IFormComponent = typeof Form & {
    Item: FC<FormItemProps>;
};
declare const TransForm: IFormComponent;
export type { RenderProps, FormProps, IFormContext, IFormRef, FormItemProps, CustomRuleFunc, CustomRule, FieldDetail, FieldsState, ValidateErrorType, FormState, FieldAction };
export default TransForm;
