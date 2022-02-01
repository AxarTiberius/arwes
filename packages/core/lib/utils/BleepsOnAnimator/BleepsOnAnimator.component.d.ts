import { BleepName } from '@arwes/bleeps';
interface BleepsOnAnimatorTransition {
    name: BleepName;
    loop?: true;
}
interface BleepsOnAnimatorProps {
    entering?: BleepsOnAnimatorTransition;
    exiting?: BleepsOnAnimatorTransition;
    disabled?: boolean;
}
declare const BleepsOnAnimator: (props: BleepsOnAnimatorProps) => null;
export { BleepsOnAnimatorTransition, BleepsOnAnimatorProps, BleepsOnAnimator };
