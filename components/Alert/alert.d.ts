import { FC } from 'react';
export type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    closable?: boolean;
    onClose?: () => void;
}
export declare const Alert: FC<AlertProps>;
export default Alert;
