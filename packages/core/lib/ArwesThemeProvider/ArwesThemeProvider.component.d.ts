import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ThemeSettings } from '@arwes/design';
interface ArwesThemeProviderProps {
    themeSettings?: ThemeSettings;
    children?: ReactNode;
}
declare const ArwesThemeProvider: {
    (props: ArwesThemeProviderProps): ReactElement;
    propTypes: {
        themeSettings: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<any>;
    };
};
export { ArwesThemeProviderProps, ArwesThemeProvider };
