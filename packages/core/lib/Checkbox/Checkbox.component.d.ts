import { HTMLProps, MutableRefObject, CSSProperties, ReactNode, ReactElement, FormEvent } from 'react';
import PropTypes from 'prop-types';
interface CheckboxProps {
    name?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (event: FormEvent<HTMLInputElement>) => void;
    inputProps?: HTMLProps<HTMLInputElement>;
    palette?: string;
    className?: string;
    style?: CSSProperties;
    rootRef?: MutableRefObject<HTMLDivElement | null> | ((node: HTMLDivElement) => void);
    children?: ReactNode;
}
declare const Checkbox: {
    (props: CheckboxProps): ReactElement;
    propTypes: {
        name: PropTypes.Requireable<string>;
        autoFocus: PropTypes.Requireable<boolean>;
        readOnly: PropTypes.Requireable<boolean>;
        required: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        defaultChecked: PropTypes.Requireable<boolean>;
        checked: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        inputProps: PropTypes.Requireable<object>;
        palette: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        rootRef: PropTypes.Requireable<any>;
        children: PropTypes.Requireable<any>;
    };
};
export { CheckboxProps, Checkbox };
