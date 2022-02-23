import { CSSObject } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    palette?: string | undefined;
    multiline?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
}) => Record<string, CSSObject>;
export { generateStyles };
