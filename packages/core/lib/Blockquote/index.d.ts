/// <reference types="react" />
declare const Blockquote: import("react").ForwardRefExoticComponent<import("./Blockquote.component").BlockquoteProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./Blockquote.component").BlockquoteProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        palette: import("prop-types").Requireable<string>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
}>>> & {
    defaultProps: Partial<import("./Blockquote.component").BlockquoteProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './Blockquote.component';
export { Blockquote };
