import { ReactNode, ReactElement, MutableRefObject, CSSProperties } from 'react';
import PropTypes from 'prop-types';
interface ListProps {
    as?: 'ul' | 'ol';
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLUListElement | null> | ((node: HTMLUListElement) => void);
    children?: ReactNode;
}
declare const List: {
    (props: ListProps): ReactElement;
    propTypes: {
        as: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
    };
    defaultProps: {
        as: string;
    };
};
export { ListProps, List };
