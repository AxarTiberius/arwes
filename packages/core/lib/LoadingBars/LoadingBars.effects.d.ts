import { MutableRefObject } from 'react';
import { CSSObject } from '@emotion/react';
import { AnimatorRef } from '@arwes/animator';
import { Theme } from '@arwes/design';
declare type LoadingBarsEffectsRefs = MutableRefObject<{
    rootRef: MutableRefObject<HTMLDivElement | null>;
    animationFrameId: number;
}>;
declare const stopLoadingBarsTransition: (animator: AnimatorRef, refs: LoadingBarsEffectsRefs) => void;
declare const startLoadingBarsTransition: (animator: AnimatorRef, refs: LoadingBarsEffectsRefs, theme: Theme) => void;
declare const stopLoadingBarsUndeterminateAnimation: (animator: AnimatorRef, refs: LoadingBarsEffectsRefs, styles: Record<string, CSSObject>) => void;
declare const startLoadingBarsUndeterminateAnimation: (animator: AnimatorRef, refs: LoadingBarsEffectsRefs, styles: Record<string, CSSObject>, options: {
    speed: number;
}) => void;
export { LoadingBarsEffectsRefs, stopLoadingBarsTransition, startLoadingBarsTransition, stopLoadingBarsUndeterminateAnimation, startLoadingBarsUndeterminateAnimation };
