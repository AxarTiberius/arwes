import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    palette?: string | undefined;
}) => Record<string, CSSObject>;
export { generateStyles };
