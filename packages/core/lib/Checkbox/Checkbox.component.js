"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var bleeps_1 = require("@arwes/bleeps");
var animated_1 = require("@arwes/animated");
var Checkbox_styles_1 = require("./Checkbox.styles");
var Checkbox = function (props) {
    var name = props.name, autoFocus = props.autoFocus, readOnly = props.readOnly, required = props.required, disabled = props.disabled, defaultChecked = props.defaultChecked, checked = props.checked, onChange = props.onChange, inputProps = props.inputProps, palette = props.palette, className = props.className, style = props.style, rootRef = props.rootRef, children = props.children;
    var theme = react_2.useTheme();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return Checkbox_styles_1.generateStyles(theme, { disabled: disabled, readOnly: readOnly, palette: palette }); }, [theme, disabled, readOnly, palette]);
    var onChangeProxy = react_1.useCallback(function (event) {
        var _a;
        if (readOnly) {
            event.currentTarget.checked = !event.currentTarget.checked;
            return;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
        (_a = bleeps.toggle) === null || _a === void 0 ? void 0 : _a.play();
    }, [readOnly, onChange]);
    var decoAnimated = {
        initialStyles: { scale: 0 },
        entering: { scale: 1 },
        exiting: { scale: 0 }
    };
    return (react_2.jsx("div", { className: css_1.cx('arwes-checkbox', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx(animated_1.Animated, { as: 'label', className: 'arwes-checkbox__container', css: styles.container, animated: {
                initialStyles: { translateX: theme.space() },
                entering: { translateX: 0 },
                exiting: { translateX: theme.space() }
            } },
            react_2.jsx("div", { className: 'arwes-checkbox__shapes', css: styles.shapes },
                react_2.jsx(animated_1.Animated, __assign({ name: name, autoFocus: autoFocus, readOnly: readOnly, required: required, disabled: disabled, tabIndex: readOnly ? -1 : 0 }, inputProps, { as: 'input', defaultChecked: defaultChecked, checked: checked, onChange: onChangeProxy, type: 'checkbox', className: css_1.cx('arwes-checkbox__input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className), css: styles.input, animated: {
                        entered: function (_a) {
                            var target = _a.target;
                            if (autoFocus) {
                                target.focus();
                            }
                        },
                        exiting: function (_a) {
                            var target = _a.target;
                            target.blur();
                        }
                    } })),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__bg', css: styles.bg, animated: decoAnimated }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__box', css: [styles.box, styles.boxLT], animated: decoAnimated }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__box', css: [styles.box, styles.boxLB], animated: decoAnimated }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__box', css: [styles.box, styles.boxRT], animated: decoAnimated }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__box', css: [styles.box, styles.boxRB], animated: decoAnimated }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-checkbox__mark', css: styles.mark, animated: animated_1.transitionOpacity })),
            !!children && (react_2.jsx("div", { className: 'arwes-checkbox__content', css: styles.content }, children)))));
};
exports.Checkbox = Checkbox;
Checkbox.propTypes = {
    name: prop_types_1.default.string,
    autoFocus: prop_types_1.default.bool,
    readOnly: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    defaultChecked: prop_types_1.default.bool,
    checked: prop_types_1.default.bool,
    onChange: prop_types_1.default.func,
    inputProps: prop_types_1.default.object,
    palette: prop_types_1.default.string,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
