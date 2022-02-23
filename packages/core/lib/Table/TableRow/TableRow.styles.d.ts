import { Interpolation } from '@emotion/react';
import { Theme } from '@arwes/design';
declare const generateStyles: (theme: Theme, options: {
    animate: boolean;
    isHeader?: boolean | undefined;
    condensed?: boolean | undefined;
}) => Record<string, Interpolation<Theme>>;
export { generateStyles };
