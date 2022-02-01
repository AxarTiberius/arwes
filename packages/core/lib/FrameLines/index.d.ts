/// <reference types="react" />
declare const FrameLines: import("react").ForwardRefExoticComponent<import("./FrameLines.component").FrameLinesProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./FrameLines.component").FrameLinesProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        largeLineWidth: import("prop-types").Requireable<number>;
        smallLineWidth: import("prop-types").Requireable<number>;
        smallLineLength: import("prop-types").Requireable<number>;
        hideTopLines: import("prop-types").Requireable<boolean>;
        hideBottomLines: import("prop-types").Requireable<boolean>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        largeLineWidth: number;
        smallLineWidth: number;
        smallLineLength: number;
    };
}>>> & {
    defaultProps: Partial<import("./FrameLines.component").FrameLinesProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './FrameLines.component';
export { FrameLines };
