/// <reference types="react" />
declare const Card: import("react").ForwardRefExoticComponent<import("./Card.component").CardProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./Card.component").CardProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        image: import("prop-types").Requireable<import("prop-types").InferProps<{
            src: import("prop-types").Validator<string>;
            alt: import("prop-types").Requireable<string>;
        }>>;
        title: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        options: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        landscape: import("prop-types").Requireable<boolean>;
        hover: import("prop-types").Requireable<boolean>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
}>>> & {
    defaultProps: Partial<import("./Card.component").CardProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './Card.component';
export { Card };
