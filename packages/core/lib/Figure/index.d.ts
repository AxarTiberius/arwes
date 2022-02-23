/// <reference types="react" />
declare const Figure: import("react").ForwardRefExoticComponent<import("./Figure.component").FigureProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./Figure.component").FigureProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        src: import("prop-types").Validator<string | (string | null | undefined)[]>;
        alt: import("prop-types").Requireable<string>;
        fluid: import("prop-types").Requireable<boolean>;
        imgProps: import("prop-types").Requireable<object>;
        descriptionTextProps: import("prop-types").Requireable<object>;
        loadingProps: import("prop-types").Requireable<object>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        descriptionTextProps: {
            blink: boolean;
        };
    };
}>>> & {
    defaultProps: Partial<import("./Figure.component").FigureProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './Figure.component';
export { Figure };
