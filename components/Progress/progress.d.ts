import type { FC, CSSProperties } from 'react';
import type { ThemeProps } from '../../components/Icon/icon';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: CSSProperties;
    theme?: ThemeProps;
}
export declare const Progress: FC<ProgressProps>;
export default Progress;
