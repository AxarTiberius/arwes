import { ReactNode, ReactElement, MutableRefObject, CSSProperties, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { WithAnimatorOutputProps } from '@arwes/animator';
interface ButtonProps {
    FrameComponent?: any;
    palette?: string;
    active?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLButtonElement | null> | ((node: HTMLButtonElement) => void);
    children?: ReactNode;
}
declare const Button: {
    (props: ButtonProps & WithAnimatorOutputProps): ReactElement;
    propTypes: {
        FrameComponent: PropTypes.Validator<any>;
        palette: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
    defaultProps: {
        FrameComponent: import("react").ForwardRefExoticComponent<import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps & WithAnimatorOutputProps & import("react").RefAttributes<import("react").MemoExoticComponent<{
            (props: import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps): ReactElement<any, string | import("react").JSXElementConstructor<any>>;
            propTypes: {
                lineWidth: PropTypes.Requireable<number>;
                squareSize: PropTypes.Requireable<number>;
                children: PropTypes.Requireable<any>;
            };
            defaultProps: {
                lineWidth: number;
                squareSize: number;
            };
        }>>> & {
            defaultProps: Partial<import("../FrameUnderline/FrameUnderline.component").FrameUnderlineProps & WithAnimatorOutputProps> & WithAnimatorOutputProps;
        };
    };
};
export { ButtonProps, Button };
