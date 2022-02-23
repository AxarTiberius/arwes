/// <reference types="react" />
declare const FrameUnderline: import("react").ForwardRefExoticComponent<import("./FrameUnderline.component").FrameUnderlineProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./FrameUnderline.component").FrameUnderlineProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        lineWidth: import("prop-types").Requireable<number>;
        squareSize: import("prop-types").Requireable<number>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        lineWidth: number;
        squareSize: number;
    };
}>>> & {
    defaultProps: Partial<import("./FrameUnderline.component").FrameUnderlineProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './FrameUnderline.component';
export { FrameUnderline };
