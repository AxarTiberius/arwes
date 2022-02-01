import { MutableRefObject, ReactElement, ReactNode, HTMLProps } from 'react';
import { CSSObject } from '@emotion/react';
import PropTypes from 'prop-types';
import { AnimatedSettings } from '@arwes/animated';
import { NoInfer } from '../utils/types';
declare type FRAME_SVG_DIMENSION = number | string;
declare type FRAME_SVG_POINT = FRAME_SVG_DIMENSION[];
declare type FRAME_SVG_POLYLINE = FRAME_SVG_POINT[];
interface FRAME_SVG_POLYLINE_CUSTOM {
    polyline: FRAME_SVG_POLYLINE;
    lineWidth?: number;
    animated?: AnimatedSettings;
    css?: CSSObject;
}
declare type FRAME_SVG_POLYLINE_GENERIC = FRAME_SVG_POLYLINE | FRAME_SVG_POLYLINE_CUSTOM;
interface FRAME_SVG_EFFECTS {
    highlight: () => void;
}
interface FrameSVGProps<E extends HTMLElement = HTMLDivElement> {
    as?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    shapes?: FRAME_SVG_POLYLINE[];
    polylines?: FRAME_SVG_POLYLINE_GENERIC[];
    lineWidth?: number;
    palette?: string;
    hideShapes?: boolean;
    hidePolylines?: boolean;
    hover?: boolean;
    disabled?: boolean;
    className?: string;
    rootRef?: MutableRefObject<E | null> | ((node: E) => void);
    effectsRef?: MutableRefObject<FRAME_SVG_EFFECTS | null> | ((effects: FRAME_SVG_EFFECTS) => void);
    children?: ReactNode;
}
declare const FrameSVG: {
    <E extends HTMLElement = HTMLDivElement, P extends HTMLProps<HTMLElement> = HTMLProps<E>>(props: FrameSVGProps<E> & NoInfer<P>): ReactElement;
    propTypes: {
        as: PropTypes.Validator<string>;
        shapes: PropTypes.Requireable<any[]>;
        polylines: PropTypes.Requireable<any[]>;
        lineWidth: PropTypes.Requireable<number>;
        palette: PropTypes.Requireable<string>;
        hideShapes: PropTypes.Requireable<boolean>;
        hidePolylines: PropTypes.Requireable<boolean>;
        hover: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        rootRef: PropTypes.Requireable<any>;
    };
    defaultProps: {
        as: string;
        shapes: never[];
        polylines: never[];
        lineWidth: number;
        palette: string;
    };
};
export { FRAME_SVG_DIMENSION, FRAME_SVG_POINT, FRAME_SVG_POLYLINE, FRAME_SVG_POLYLINE_CUSTOM, FRAME_SVG_POLYLINE_GENERIC, FRAME_SVG_EFFECTS, FrameSVGProps, FrameSVG };
