import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FrameSVGProps } from '../FrameSVG';
interface FrameUnderlineProps extends FrameSVGProps {
    lineWidth?: number;
    squareSize?: number;
    children?: ReactNode;
}
declare const FrameUnderline: {
    (props: FrameUnderlineProps): ReactElement;
    propTypes: {
        lineWidth: PropTypes.Requireable<number>;
        squareSize: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        lineWidth: number;
        squareSize: number;
    };
};
export { FrameUnderlineProps, FrameUnderline };
