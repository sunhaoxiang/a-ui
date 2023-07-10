import type { FC, ReactNode } from 'react';
export interface SelectOptionProps {
    index?: string;
    value: string;
    label?: string;
    disabled?: boolean;
    children?: ReactNode;
}
export declare const Option: FC<SelectOptionProps>;
export default Option;
