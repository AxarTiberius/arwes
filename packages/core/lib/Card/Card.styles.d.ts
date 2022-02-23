import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    landscape?: boolean | undefined;
    hover?: boolean | undefined;
}) => Record<string, CSSObject>;
export { generateStyles };
