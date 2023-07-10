import type { FC, ReactNode } from 'react';
import type { CustomRule } from './useStore';
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
export interface FormItemProps {
    name: string;
    label?: string;
    valuePropName?: string;
    trigger?: string;
    getValueFromEvent?: (event: any) => any;
    rules?: CustomRule[];
    validateTrigger?: string;
    children?: ReactNode;
}
export declare const FormItem: FC<FormItemProps>;
export default FormItem;
