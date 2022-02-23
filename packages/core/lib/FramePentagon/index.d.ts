/// <reference types="react" />
declare const FramePentagon: import("react").ForwardRefExoticComponent<import("./FramePentagon.component").FramePentagonProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./FramePentagon.component").FramePentagonProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        lineWidth: import("prop-types").Requireable<number>;
        squareSize: import("prop-types").Requireable<number>;
        inverted: import("prop-types").Requireable<boolean>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        lineWidth: number;
        squareSize: number;
    };
}>>> & {
    defaultProps: Partial<import("./FramePentagon.component").FramePentagonProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './FramePentagon.component';
export { FramePentagon };
