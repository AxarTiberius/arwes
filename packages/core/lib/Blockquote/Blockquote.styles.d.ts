import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    palette?: string;
}) => Record<string, CSSObject>;
export { generateStyles };
