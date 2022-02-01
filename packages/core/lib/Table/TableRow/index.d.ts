/// <reference types="react" />
declare const TableRow: import("react").ForwardRefExoticComponent<import("./TableRow.component").TableRowProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
    (props: import("./TableRow.component").TableRowProps): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        columns: import("prop-types").Validator<import("prop-types").InferProps<{
            id: import("prop-types").Validator<string | number>;
            data: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        }>[]>;
        columnWidths: import("prop-types").Requireable<(string | number)[]>;
        isHeader: import("prop-types").Requireable<boolean>;
        condensed: import("prop-types").Requireable<boolean>;
    };
}>>> & {
    defaultProps: Partial<import("./TableRow.component").TableRowProps & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps> & import("packages/animator/lib/withAnimator/withAnimator").WithAnimatorOutputProps;
};
export * from './TableRow.component';
export { TableRow };
