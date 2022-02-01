import { RefObject, MutableRefObject } from 'react';
import { AnimatorClassSettings } from '@arwes/animator';
import { TextAnimationRefs } from '../../utils/textAnimations';
declare type TableRowTransitionRefs = MutableRefObject<{
    rootRef: RefObject<HTMLDivElement>;
    textAnimateRefsCollection: MutableRefObject<TextAnimationRefs[]>;
}>;
declare const animator: AnimatorClassSettings;
export { TableRowTransitionRefs, animator };
