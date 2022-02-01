import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FrameSVGProps } from '../FrameSVG';
interface FrameCornersProps extends FrameSVGProps {
    cornerWidth?: number;
    cornerLength?: number;
    showContentLines?: boolean;
    contentLineWidth?: number;
    children?: ReactNode;
}
declare const FrameCorners: {
    (props: FrameCornersProps): ReactElement;
    propTypes: {
        cornerWidth: PropTypes.Requireable<number>;
        cornerLength: PropTypes.Requireable<number>;
        showContentLines: PropTypes.Requireable<boolean>;
        contentLineWidth: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        cornerWidth: number;
        cornerLength: number;
        contentLineWidth: number;
    };
};
export { FrameCornersProps, FrameCorners };
