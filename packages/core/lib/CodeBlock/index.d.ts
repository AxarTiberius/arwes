/// <reference types="react" />
declare const CodeBlock: import("react").ForwardRefExoticComponent<import("./CodeBlock.component").CodeBlockProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./CodeBlock.component").CodeBlockProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        lang: import("prop-types").Requireable<string>;
        contentTextProps: import("prop-types").Requireable<object>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        contentTextProps: {
            as: string;
            blink: boolean;
        };
    };
}>>> & {
    defaultProps: Partial<import("./CodeBlock.component").CodeBlockProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './CodeBlock.component';
export { CodeBlock };
