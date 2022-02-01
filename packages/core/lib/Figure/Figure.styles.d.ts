import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    animate: boolean;
    fluid?: boolean | undefined;
}) => Record<string, CSSObject>;
export { generateStyles };
