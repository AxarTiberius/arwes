/** @jsx jsx */
import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@arwes/design';
interface TableRowPropsColumn {
    id: string | number;
    data: ReactNode;
}
declare type TableRowPropsColumnWidth = string | number;
interface TableRowProps {
    theme: Theme;
    columns: TableRowPropsColumn[];
    columnWidths?: TableRowPropsColumnWidth[];
    isHeader?: boolean;
    condensed?: boolean;
}
declare const TableRow: {
    (props: TableRowProps): ReactElement;
    propTypes: {
        columns: PropTypes.Validator<PropTypes.InferProps<{
            id: PropTypes.Validator<string | number>;
            data: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        }>[]>;
        columnWidths: PropTypes.Requireable<(string | number)[]>;
        isHeader: PropTypes.Requireable<boolean>;
        condensed: PropTypes.Requireable<boolean>;
    };
};
export { TableRowPropsColumn, TableRowPropsColumnWidth, TableRowProps, TableRow };
