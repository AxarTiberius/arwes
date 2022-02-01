import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FrameSVGProps } from '../FrameSVG';
interface FrameHexagonProps extends FrameSVGProps {
    lineWidth?: number;
    squareSize?: number;
    inverted?: boolean;
    children?: ReactNode;
}
declare const FrameHexagon: {
    (props: FrameHexagonProps): ReactElement;
    propTypes: {
        lineWidth: PropTypes.Requireable<number>;
        squareSize: PropTypes.Requireable<number>;
        inverted: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        lineWidth: number;
        squareSize: number;
    };
};
export { FrameHexagonProps, FrameHexagon };
