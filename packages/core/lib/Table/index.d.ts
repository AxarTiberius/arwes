/// <reference types="react" />
declare const Table: import("react").ForwardRefExoticComponent<import("./Table.component").TableProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./Table.component").TableProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        headers: import("prop-types").Validator<import("prop-types").InferProps<{
            id: import("prop-types").Validator<string | number>;
            data: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        }>[]>;
        dataset: import("prop-types").Validator<import("prop-types").InferProps<{
            id: import("prop-types").Validator<string | number>;
            columns: import("prop-types").Validator<import("prop-types").InferProps<{
                id: import("prop-types").Validator<string | number>;
                data: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
            }>[]>;
        }>[]>;
        columnWidths: import("prop-types").Requireable<(string | number)[]>;
        condensed: import("prop-types").Requireable<boolean>;
        rootRef: import("prop-types").Requireable<any>;
        className: import("prop-types").Requireable<string>;
    };
}>>> & {
    defaultProps: Partial<import("./Table.component").TableProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './Table.component';
export { Table };
