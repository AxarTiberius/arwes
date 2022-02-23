import { AnimeAnimParams } from 'animejs';
import { AnimatedSettings } from '../constants';
interface TransitionVisibilityParams {
    target: AnimeAnimParams['targets'];
    duration: number;
    delay?: number;
}
declare const transitionVisibilityIn: (params: TransitionVisibilityParams) => void;
declare const transitionVisibilityOut: (params: TransitionVisibilityParams) => void;
declare const transitionVisibility: AnimatedSettings;
declare const transitionVisibilityDelayed: AnimatedSettings;
export { transitionVisibilityIn, transitionVisibilityOut, transitionVisibility, transitionVisibilityDelayed };
