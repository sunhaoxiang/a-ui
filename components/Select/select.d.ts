import { FC, ReactNode } from 'react';
export interface SelectProps {
    defaultValue?: string | string[];
    placeholder?: string;
    disabled?: boolean;
    multiple?: boolean;
    name?: string;
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    onVisibleChange?: (visible: boolean) => void;
    children?: ReactNode;
}
export interface ISelectContext {
    onSelect?: (value: string, isSelected?: boolean) => void;
    selectedValues: string[];
    multiple?: boolean;
}
export declare const SelectContext: import("react").Context<ISelectContext>;
export declare const Select: FC<SelectProps>;
export default Select;
