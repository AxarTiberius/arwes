/// <reference types="react" />
declare const FrameSVG: {
    <E extends HTMLElement = HTMLDivElement, P extends import("react").HTMLProps<HTMLElement> = import("react").HTMLProps<E>>(props: import("./FrameSVG.component").FrameSVGProps<E> & import("../utils/types").NoInfer<P>): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    propTypes: {
        as: import("prop-types").Validator<string>;
        shapes: import("prop-types").Requireable<any[]>;
        polylines: import("prop-types").Requireable<any[]>;
        lineWidth: import("prop-types").Requireable<number>;
        palette: import("prop-types").Requireable<string>;
        hideShapes: import("prop-types").Requireable<boolean>;
        hidePolylines: import("prop-types").Requireable<boolean>;
        hover: import("prop-types").Requireable<boolean>;
        disabled: import("prop-types").Requireable<boolean>;
        rootRef: import("prop-types").Requireable<any>;
    };
    defaultProps: {
        as: string;
        shapes: never[];
        polylines: never[];
        lineWidth: number;
        palette: string;
    };
};
export * from './FrameSVG.component';
export { FrameSVG };
