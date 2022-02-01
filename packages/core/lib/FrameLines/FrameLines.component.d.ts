import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FrameSVGProps } from '../FrameSVG';
interface FrameLinesProps extends FrameSVGProps {
    largeLineWidth?: number;
    smallLineWidth?: number;
    smallLineLength?: number;
    hideTopLines?: boolean;
    hideBottomLines?: boolean;
    children?: ReactNode;
}
declare const FrameLines: {
    (props: FrameLinesProps): ReactElement;
    propTypes: {
        largeLineWidth: PropTypes.Requireable<number>;
        smallLineWidth: PropTypes.Requireable<number>;
        smallLineLength: PropTypes.Requireable<number>;
        hideTopLines: PropTypes.Requireable<boolean>;
        hideBottomLines: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        largeLineWidth: number;
        smallLineWidth: number;
        smallLineLength: number;
    };
};
export { FrameLinesProps, FrameLines };
