import { ReactElement, MutableRefObject, CSSProperties } from 'react';
import PropTypes from 'prop-types';
interface LoadingBarsProps {
    determinate?: boolean;
    length?: number;
    progress?: number;
    size?: number;
    full?: boolean;
    speed?: number;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
}
declare const LoadingBars: {
    (props: LoadingBarsProps): ReactElement;
    propTypes: {
        determinate: PropTypes.Requireable<boolean>;
        length: PropTypes.Validator<number>;
        progress: PropTypes.Requireable<number>;
        size: PropTypes.Validator<number>;
        full: PropTypes.Requireable<boolean>;
        speed: PropTypes.Validator<number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
    };
    defaultProps: {
        length: number;
        progress: number;
        size: number;
        speed: number;
    };
};
export { LoadingBarsProps, LoadingBars };
