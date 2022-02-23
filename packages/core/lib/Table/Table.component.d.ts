/** @jsx jsx */
import { ReactElement, MutableRefObject, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { TableRowPropsColumn, TableRowPropsColumnWidth } from './TableRow';
interface TableRowPropsDataRow {
    id: string | number;
    columns: TableRowPropsColumn[];
}
interface TableProps {
    headers: TableRowPropsDataRow['columns'];
    dataset: TableRowPropsDataRow[];
    columnWidths?: TableRowPropsColumnWidth[];
    condensed?: boolean;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
}
declare const Table: {
    (props: TableProps): ReactElement;
    propTypes: {
        headers: PropTypes.Validator<PropTypes.InferProps<{
            id: PropTypes.Validator<string | number>;
            data: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        }>[]>;
        dataset: PropTypes.Validator<PropTypes.InferProps<{
            id: PropTypes.Validator<string | number>;
            columns: PropTypes.Validator<PropTypes.InferProps<{
                id: PropTypes.Validator<string | number>;
                data: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            }>[]>;
        }>[]>;
        columnWidths: PropTypes.Requireable<(string | number)[]>;
        condensed: PropTypes.Requireable<boolean>;
        rootRef: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
    };
};
export { TableProps, Table };
