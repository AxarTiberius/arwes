/// <reference types="react" />
declare const FrameBox: import("react").ForwardRefExoticComponent<import("./FrameBox.component").FrameBoxProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./FrameBox.component").FrameBoxProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        origins: import("prop-types").Requireable<import("./FrameBox.component").FRAME_BOX_ORIGIN | import("./FrameBox.component").FRAME_BOX_ORIGIN[]>;
        linesWidths: import("prop-types").Requireable<number | number[]>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        origins: string;
        linesWidths: number;
    };
}>>> & {
    defaultProps: Partial<import("./FrameBox.component").FrameBoxProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './FrameBox.component';
export { FrameBox };
