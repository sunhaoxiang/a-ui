import type { FC, ReactElement } from 'react';
import type { InputProps } from '../../components/Input/input';
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = object> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'onChange'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onChange?: (value: string) => void;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
