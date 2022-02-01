import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FrameSVGProps } from '../FrameSVG';
declare type FRAME_BOX_ORIGIN = 'left' | 'right' | 'top' | 'bottom' | 'center';
declare const FRAME_BOX_ORIGIN_VALUES: FRAME_BOX_ORIGIN[];
interface FrameBoxProps extends FrameSVGProps {
    origins?: FRAME_BOX_ORIGIN | FRAME_BOX_ORIGIN[];
    linesWidths?: number | number[];
    children?: ReactNode;
}
declare const FrameBox: {
    (props: FrameBoxProps): ReactElement;
    propTypes: {
        origins: PropTypes.Requireable<FRAME_BOX_ORIGIN | FRAME_BOX_ORIGIN[]>;
        linesWidths: PropTypes.Requireable<number | number[]>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        origins: string;
        linesWidths: number;
    };
};
export { FRAME_BOX_ORIGIN, FRAME_BOX_ORIGIN_VALUES, FrameBoxProps, FrameBox };
