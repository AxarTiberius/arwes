/// <reference types="react" />
declare const LoadingBars: import("react").ForwardRefExoticComponent<import("./LoadingBars.component").LoadingBarsProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./LoadingBars.component").LoadingBarsProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        determinate: import("prop-types").Requireable<boolean>;
        length: import("prop-types").Validator<number>;
        progress: import("prop-types").Requireable<number>;
        size: import("prop-types").Validator<number>;
        full: import("prop-types").Requireable<boolean>;
        speed: import("prop-types").Validator<number>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        length: number;
        progress: number;
        size: number;
        speed: number;
    };
}>>> & {
    defaultProps: Partial<import("./LoadingBars.component").LoadingBarsProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './LoadingBars.component';
export { LoadingBars };
