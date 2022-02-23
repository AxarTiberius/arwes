import { ReactNode, ReactElement, MutableRefObject, CSSProperties, ImgHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { TextProps } from '../Text';
import { LoadingBarsProps } from '../LoadingBars';
declare type FigurePropsSrcListItem = string | undefined | null;
interface FigureProps {
    src: string | FigurePropsSrcListItem[];
    alt?: string;
    fluid?: boolean;
    preload?: boolean;
    imgProps?: ImgHTMLAttributes<HTMLImageElement>;
    descriptionTextProps?: TextProps;
    loadingProps?: LoadingBarsProps;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
    children?: ReactNode;
}
declare const Figure: {
    (props: FigureProps): ReactElement;
    propTypes: {
        src: PropTypes.Validator<string | (string | null | undefined)[]>;
        alt: PropTypes.Requireable<string>;
        fluid: PropTypes.Requireable<boolean>;
        imgProps: PropTypes.Requireable<object>;
        descriptionTextProps: PropTypes.Requireable<object>;
        loadingProps: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        descriptionTextProps: {
            blink: boolean;
        };
    };
};
export { FigurePropsSrcListItem, FigureProps, Figure };
