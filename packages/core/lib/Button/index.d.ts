/// <reference types="react" />
declare const Button: import("react").MemoExoticComponent<{
    (props: import("./Button.component").ButtonProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        FrameComponent: import("prop-types").Validator<any>;
        palette: import("prop-types").Requireable<string>;
        active: import("prop-types").Requireable<boolean>;
        disabled: import("prop-types").Requireable<boolean>;
        onClick: import("prop-types").Requireable<(...args: any[]) => any>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        FrameComponent: import("react").ForwardRefExoticComponent<import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
            (props: import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
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
            defaultProps: Partial<import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
        };
    };
}>;
export * from './Button.component';
export { Button };
