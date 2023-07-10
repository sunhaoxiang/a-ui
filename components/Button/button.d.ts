import type { FC, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export type ButtonSize = 'lg' | 'sm';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    btnType?: ButtonType;
    size?: ButtonSize;
    href?: string;
    children?: ReactNode;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: FC<ButtonProps>;
export default Button;
