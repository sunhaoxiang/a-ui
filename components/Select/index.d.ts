import type { FC } from 'react';
import type { SelectProps, ISelectContext } from './select';
import type { SelectOptionProps } from './option';
export type ISelectComponent = FC<SelectProps> & {
    Option: FC<SelectOptionProps>;
};
declare const TransSelect: ISelectComponent;
export type { SelectProps, ISelectContext, SelectOptionProps };
export default TransSelect;
