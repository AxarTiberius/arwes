import { HTMLProps, SVGProps, CSSProperties, MutableRefObject, ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { AnimatedSettings } from '../constants';
import { NoInfer } from '../utils/types';
interface AnimatedProps<E extends HTMLElement | SVGElement = HTMLDivElement, P = HTMLProps<HTMLDivElement>> {
    as?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    animated?: AnimatedSettings<P> | Array<AnimatedSettings<P>>;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<E | null> | ((node: E) => void);
    children?: ReactNode;
}
declare const Animated: {
    <E extends HTMLElement | SVGElement = HTMLDivElement, P extends HTMLProps<HTMLElement> | SVGProps<SVGElement> = HTMLProps<HTMLDivElement>>(props: AnimatedProps<E, P> & NoInfer<P>): ReactElement;
    propTypes: {
        as: PropTypes.Validator<string>;
        animated: PropTypes.Requireable<PropTypes.InferProps<{
            initialAttributes: PropTypes.Requireable<object>;
            initialStyles: PropTypes.Requireable<object>;
            entering: PropTypes.Requireable<object>;
            entered: PropTypes.Requireable<object>;
            exiting: PropTypes.Requireable<object>;
            exited: PropTypes.Requireable<object>;
        }> | (PropTypes.InferProps<{
            initialAttributes: PropTypes.Requireable<object>;
            initialStyles: PropTypes.Requireable<object>;
            entering: PropTypes.Requireable<object>;
            entered: PropTypes.Requireable<object>;
            exiting: PropTypes.Requireable<object>;
            exited: PropTypes.Requireable<object>;
        }> | null | undefined)[]>;
    };
    defaultProps: {
        as: string;
    };
};
export { AnimatedProps, Animated };
