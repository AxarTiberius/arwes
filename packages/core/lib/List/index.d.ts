/// <reference types="react" />
declare const List: import("react").ForwardRefExoticComponent<import("./List.component").ListProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./List.component").ListProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        as: import("prop-types").Validator<string>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        as: string;
    };
}>>> & {
    defaultProps: Partial<import("./List.component").ListProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './List.component';
export { List };
