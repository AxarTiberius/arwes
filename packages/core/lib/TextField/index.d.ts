/// <reference types="react" />
declare const TextField: import("react").ForwardRefExoticComponent<import("./TextField.component").TextFieldProps<HTMLInputElement> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./TextField.component").TextFieldProps<HTMLInputElement>): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        multiline: import("prop-types").Requireable<boolean>;
        type: import("prop-types").Validator<import("./TextField.component").TEXT_FIELD_TYPE>;
        name: import("prop-types").Requireable<string>;
        placeholder: import("prop-types").Requireable<string>;
        autoComplete: import("prop-types").Requireable<string>;
        autoFocus: import("prop-types").Requireable<boolean>;
        readOnly: import("prop-types").Requireable<boolean>;
        spellCheck: import("prop-types").Requireable<boolean>;
        required: import("prop-types").Requireable<boolean>;
        disabled: import("prop-types").Requireable<boolean>;
        defaultValue: import("prop-types").Requireable<string | number>;
        value: import("prop-types").Requireable<string | number>;
        onChange: import("prop-types").Requireable<(...args: any[]) => any>;
        inputProps: import("prop-types").Requireable<object>;
        hideLines: import("prop-types").Requireable<boolean>;
        palette: import("prop-types").Requireable<string>;
        className: import("prop-types").Requireable<string>;
        style: import("prop-types").Requireable<object>;
        rootRef: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        type: string;
    };
}>>> & {
    defaultProps: Partial<import("./TextField.component").TextFieldProps<HTMLInputElement> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './TextField.component';
export { TextField };
