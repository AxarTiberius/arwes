import { MutableRefObject, CSSProperties, ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
interface BlockquoteProps {
    palette?: string;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLQuoteElement | null> | ((node: HTMLQuoteElement) => void);
    children?: ReactNode;
}
declare const Blockquote: {
    (props: BlockquoteProps): ReactElement;
    propTypes: {
        palette: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
};
export { BlockquoteProps, Blockquote };
