import { ReactNode, ReactElement, MutableRefObject, CSSProperties } from 'react';
import PropTypes from 'prop-types';
interface CardProps {
    image?: {
        src: string;
        alt?: string | null;
    };
    title?: ReactNode;
    options?: ReactNode;
    landscape?: boolean;
    hover?: boolean;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
    children?: ReactNode;
}
declare const Card: {
    (props: CardProps): ReactElement;
    propTypes: {
        image: PropTypes.Requireable<PropTypes.InferProps<{
            src: PropTypes.Validator<string>;
            alt: PropTypes.Requireable<string>;
        }>>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        options: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        landscape: PropTypes.Requireable<boolean>;
        hover: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
};
export { CardProps, Card };
