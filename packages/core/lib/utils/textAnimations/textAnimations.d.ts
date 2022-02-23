import { RefObject, MutableRefObject } from 'react';
import { AnimatorRef } from '@arwes/animator';
declare type TextAnimationRefs = MutableRefObject<{
    rootRef: RefObject<HTMLElement | null>;
    actualChildrenRef: RefObject<HTMLElement | null>;
    cloneNode: MutableRefObject<HTMLElement | null>;
    blinkNode: MutableRefObject<HTMLElement | null>;
    animationFrame: MutableRefObject<number | null>;
}>;
declare const stopTextAnimation: (animator: AnimatorRef, refs: TextAnimationRefs) => void;
declare const startTextAnimation: (animator: AnimatorRef, refs: TextAnimationRefs, callback?: (() => void) | undefined) => void;
export { TextAnimationRefs, stopTextAnimation, startTextAnimation };
