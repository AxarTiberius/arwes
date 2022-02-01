import { HTMLProps, CSSProperties, ReactNode, ReactElement, MutableRefObject } from 'react';
import PropTypes from 'prop-types';
import { NoInfer } from '../utils/types';
interface TextProps<E extends HTMLElement = HTMLSpanElement> {
    as?: keyof HTMLElementTagNameMap;
    blink?: boolean;
    blinkText?: string;
    blinkInterval?: number;
    dynamicDuration?: boolean;
    dynamicDurationFactor?: number;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<E | null> | ((node: E) => void);
    children?: ReactNode;
}
declare const Text: {
    <E extends HTMLElement = HTMLSpanElement, P extends HTMLProps<HTMLElement> = HTMLProps<E>>(props: TextProps<E> & NoInfer<P>): ReactElement;
    propTypes: {
        as: PropTypes.Requireable<string>;
        dynamicDuration: PropTypes.Requireable<boolean>;
        dynamicDurationFactor: PropTypes.Requireable<number>;
        blink: PropTypes.Requireable<boolean>;
        blinkText: PropTypes.Requireable<string>;
        blinkInterval: PropTypes.Requireable<number>;
        rootRef: PropTypes.Requireable<any>;
    };
    defaultProps: {
        as: string;
        dynamicDuration: boolean;
        dynamicDurationFactor: number;
        blink: boolean;
        blinkText: string;
        blinkInterval: number;
    };
};
export { TextProps, Text };
