import { ReactNode, ReactElement, MutableRefObject, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { TextProps } from '../Text';
interface CodeBlockProps {
    lang?: string;
    contentTextProps?: TextProps;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
    children?: ReactNode;
}
declare const CodeBlock: {
    (props: CodeBlockProps): ReactElement;
    propTypes: {
        lang: PropTypes.Requireable<string>;
        contentTextProps: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        contentTextProps: {
            as: string;
            blink: boolean;
        };
    };
};
export { CodeBlockProps, CodeBlock };
