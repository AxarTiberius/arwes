import { ComponentType, ComponentProps, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { AnimatorClassSettings, AnimatorInstanceSettings } from '../constants';
interface WithAnimatorOutputProps {
    animator?: AnimatorInstanceSettings;
}
declare function withAnimator(classAnimator?: AnimatorClassSettings): <T extends ComponentType<P>, P = ComponentProps<T>>(InputComponent: T) => ForwardRefExoticComponent<PropsWithoutRef<P & WithAnimatorOutputProps> & RefAttributes<T>> & {
    defaultProps: Partial<P & WithAnimatorOutputProps> & WithAnimatorOutputProps;
};
export { WithAnimatorOutputProps, withAnimator };
