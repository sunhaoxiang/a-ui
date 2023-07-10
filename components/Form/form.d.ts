import useStore from './useStore';
import type { ReactNode } from 'react';
import type { ValidateError } from 'async-validator';
import type { FormState } from './useStore';
export type RenderProps = (form: FormState) => ReactNode;
export interface FormProps {
    name?: string;
    initialValues?: Record<string, any>;
    onFinish?: (values: Record<string, any>) => void;
    onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
    children?: ReactNode | RenderProps;
}
export type IFormContext = Pick<ReturnType<typeof useStore>, 'fields' | 'dispatch' | 'validateField'> & Pick<FormProps, 'initialValues'>;
export type IFormRef = Omit<ReturnType<typeof useStore>, 'form' | 'fields' | 'dispatch'>;
export declare const FormContext: import("react").Context<IFormContext>;
export declare const Form: import("react").ForwardRefExoticComponent<FormProps & import("react").RefAttributes<IFormRef>>;
export default Form;
