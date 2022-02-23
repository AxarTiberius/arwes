/// <reference types="react" />
declare const Checkbox: import("react").ForwardRefExoticComponent<import("./Checkbox.component").CheckboxProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./Checkbox.component").CheckboxProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        name: import("prop-types").Requireable<string>;
        autoFocus: import("prop-types").Requireable<boolean>;
        readOnly: import("prop-types").Requireable<boolean>;
        required: import("prop-types").Requireable<boolean>;
        disabled: import("prop-types").Requireable<boolean>;
        defaultChecked: import("prop-types").Requireable<boolean>;
        checked: import("prop-types").Requireable<boolean>;
        onChange: import("prop-types").Requireable<(...args: any[]) => any>;
        inputProps: import("prop-types").Requireable<object>;
        palette: import("prop-types").Requireable<string>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
        children: import("prop-types").Requireable<any>;
    };
}>>> & {
    defaultProps: Partial<import("./Checkbox.component").CheckboxProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './Checkbox.component';
export { Checkbox };
