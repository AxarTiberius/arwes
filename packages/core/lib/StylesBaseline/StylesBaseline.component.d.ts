import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { CSSObject } from '@emotion/css';
interface StylesBaselineProps {
    styles?: Record<string, CSSObject>;
}
declare const StylesBaseline: {
    (props: StylesBaselineProps): ReactElement;
    propTypes: {
        styles: PropTypes.Requireable<object>;
    };
};
export { StylesBaselineProps, StylesBaseline };
