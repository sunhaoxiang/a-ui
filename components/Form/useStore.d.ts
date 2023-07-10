/// <reference types="react" />
import type { RuleItem, ValidateError } from 'async-validator';
export type CustomRuleFunc = ({ getFieldValue }: {
    getFieldValue: (key: string) => any;
}) => RuleItem;
export type CustomRule = RuleItem | CustomRuleFunc;
export interface FieldDetail {
    name: string;
    value: any;
    rules: CustomRule[];
    isValid: boolean;
    errors: ValidateError[];
}
export interface FieldsState {
    [key: string]: FieldDetail;
}
export interface ValidateErrorType extends Error {
    errors: ValidateError[];
    fields: Record<string, ValidateError[]>;
}
export interface FormState {
    isValid: boolean;
    isSubmitting: boolean;
    errors: Record<string, ValidateError[]>;
}
export interface FieldAction {
    type: 'addField' | 'updateValue' | 'updateValidateResult';
    name: string;
    value: any;
}
declare function useStore(initialValues?: Record<string, any>): {
    form: FormState;
    fields: FieldsState;
    dispatch: import("react").Dispatch<FieldAction>;
    validateField: (name: string) => Promise<void>;
    getFieldValue: (key: string) => any;
    setFieldValue: (name: string, value: any) => void;
    getFieldsValue: () => void;
    resetFields: () => void;
    validateAllFields: () => Promise<{
        isValid: boolean;
        errors: Record<string, ValidateError[]>;
        values: {
            [x: string]: any;
        };
    }>;
};
export default useStore;
