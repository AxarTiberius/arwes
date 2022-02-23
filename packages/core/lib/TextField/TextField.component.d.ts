import { HTMLProps, MutableRefObject, CSSProperties, ReactElement, ChangeEvent, KeyboardEvent } from 'react';
import PropTypes from 'prop-types';
declare type TEXT_FIELD_TYPE = 'text' | 'email' | 'search' | 'password' | 'tel' | 'url' | 'number';
declare const TEXT_FIELD_TYPE_VALUES: TEXT_FIELD_TYPE[];
interface TextFieldProps<E extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement> {
    multiline?: boolean;
    type?: TEXT_FIELD_TYPE;
    name?: string;
    placeholder?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
    spellCheck?: boolean;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string | number;
    value?: string | number;
    onChange?: (event: ChangeEvent<E>) => void;
    onKeyPress?: (event: KeyboardEvent<E>) => void;
    onKeyDown?: (event: KeyboardEvent<E>) => void;
    onKeyUp?: (event: KeyboardEvent<E>) => void;
    inputProps?: HTMLProps<E>;
    hideLines?: boolean;
    palette?: string;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<E | null> | ((node: E) => void);
}
declare const TextField: {
    (props: TextFieldProps): ReactElement;
    propTypes: {
        multiline: PropTypes.Requireable<boolean>;
        type: PropTypes.Validator<TEXT_FIELD_TYPE>;
        name: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        autoComplete: PropTypes.Requireable<string>;
        autoFocus: PropTypes.Requireable<boolean>;
        readOnly: PropTypes.Requireable<boolean>;
        spellCheck: PropTypes.Requireable<boolean>;
        required: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        defaultValue: PropTypes.Requireable<string | number>;
        value: PropTypes.Requireable<string | number>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyPress: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
        onKeyUp: PropTypes.Requireable<(...args: any[]) => any>;
        inputProps: PropTypes.Requireable<object>;
        hideLines: PropTypes.Requireable<boolean>;
        palette: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
    };
    defaultProps: {
        type: string;
    };
};
export { TEXT_FIELD_TYPE, TEXT_FIELD_TYPE_VALUES, TextFieldProps, TextField };
