/// <reference types="react" />
declare const FrameCorners: import("react").ForwardRefExoticComponent<import("./FrameCorners.component").FrameCornersProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./FrameCorners.component").FrameCornersProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        cornerWidth: import("prop-types").Requireable<number>;
        cornerLength: import("prop-types").Requireable<number>;
        showContentLines: import("prop-types").Requireable<boolean>;
        contentLineWidth: import("prop-types").Requireable<number>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        cornerWidth: number;
        cornerLength: number;
        contentLineWidth: number;
    };
}>>> & {
    defaultProps: Partial<import("./FrameCorners.component").FrameCornersProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './FrameCorners.component';
export { FrameCorners };
