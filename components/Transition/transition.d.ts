import type { FC, ReactNode } from 'react';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
export type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
    children?: ReactNode;
};
declare const Transition: FC<TransitionProps>;
export default Transition;
