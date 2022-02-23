import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    animate: boolean;
    length: number;
    size: number;
    full?: boolean | undefined;
}) => Record<string, CSSObject>;
export { generateStyles };
