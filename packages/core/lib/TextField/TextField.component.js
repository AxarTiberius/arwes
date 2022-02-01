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
exports.TextField = exports.TEXT_FIELD_TYPE_VALUES = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var bleeps_1 = require("@arwes/bleeps");
var animated_1 = require("@arwes/animated");
var createTransitionerTextSimple_1 = require("../utils/createTransitionerTextSimple");
var TextField_styles_1 = require("./TextField.styles");
var TEXT_FIELD_TYPE_VALUES = ['text', 'email', 'search', 'password', 'tel', 'url', 'number'];
exports.TEXT_FIELD_TYPE_VALUES = TEXT_FIELD_TYPE_VALUES;
var TextField = function (props) {
    var multiline = props.multiline, type = props.type, name = props.name, placeholder = props.placeholder, autoComplete = props.autoComplete, autoFocus = props.autoFocus, readOnly = props.readOnly, spellCheck = props.spellCheck, required = props.required, disabled = props.disabled, defaultValue = props.defaultValue, value = props.value, onChange = props.onChange, inputProps = props.inputProps, hideLines = props.hideLines, palette = props.palette, className = props.className, style = props.style, rootRef = props.rootRef;
    var theme = react_2.useTheme();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return TextField_styles_1.generateStyles(theme, { palette: palette, multiline: multiline, disabled: disabled, readOnly: readOnly }); }, [theme, palette, multiline, disabled, readOnly]);
    var transitionerTextSimpleRef = react_1.useRef(null);
    react_1.useEffect(function () {
        return function () {
            var _a, _b;
            (_a = transitionerTextSimpleRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
            (_b = bleeps.type) === null || _b === void 0 ? void 0 : _b.stop();
        };
    }, []);
    return (react_2.jsx("div", { className: css_1.cx('arwes-text-field', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx(animated_1.Animated, { as: 'label', className: 'arwes-text-field__container', css: styles.container, animated: [
                {
                    initialStyles: { translateX: theme.space() },
                    entering: { translateX: 0 },
                    exiting: { translateX: theme.space() }
                },
                {
                    entering: function (_a) {
                        var target = _a.target;
                        var animatedTextElement = target.querySelector('.arwes-text-field__animated-text');
                        var inputElement = target.querySelector('.arwes-text-field__input');
                        animatedTextElement.style.opacity = '0';
                        inputElement.style.opacity = '0';
                    },
                    entered: function (_a) {
                        var _b, _c;
                        var target = _a.target, duration = _a.duration;
                        var animatedTextElement = target.querySelector('.arwes-text-field__animated-text');
                        var inputElement = target.querySelector('.arwes-text-field__input');
                        animatedTextElement.style.opacity = '1';
                        inputElement.style.opacity = '0';
                        var text = inputElement.value || placeholder || '';
                        if (inputElement.value) {
                            Object.assign(animatedTextElement.style, styles.animatedTextIsTextValuePlainStyles);
                        }
                        else {
                            Object.assign(animatedTextElement.style, styles.animatedTextIsTextPlaceholderPlainStyles);
                        }
                        if (text) {
                            (_b = bleeps.type) === null || _b === void 0 ? void 0 : _b.play();
                            (_c = transitionerTextSimpleRef.current) === null || _c === void 0 ? void 0 : _c.cancel();
                            transitionerTextSimpleRef.current = createTransitionerTextSimple_1.createTransitionerTextSimple({
                                duration: duration,
                                text: text,
                                onChange: function (newText) {
                                    animatedTextElement.textContent = newText;
                                },
                                onComplete: function () {
                                    var _a;
                                    (_a = bleeps.type) === null || _a === void 0 ? void 0 : _a.stop();
                                    animatedTextElement.style.opacity = '0';
                                    inputElement.style.opacity = '1';
                                }
                            });
                        }
                    },
                    exiting: function (_a) {
                        var _b, _c;
                        var target = _a.target, duration = _a.duration;
                        var animatedTextElement = target.querySelector('.arwes-text-field__animated-text');
                        var inputElement = target.querySelector('.arwes-text-field__input');
                        animatedTextElement.style.opacity = '1';
                        inputElement.style.opacity = '0';
                        var text = inputElement.value || placeholder || '';
                        if (text) {
                            (_b = bleeps.type) === null || _b === void 0 ? void 0 : _b.play();
                            (_c = transitionerTextSimpleRef.current) === null || _c === void 0 ? void 0 : _c.cancel();
                            transitionerTextSimpleRef.current = createTransitionerTextSimple_1.createTransitionerTextSimple({
                                // If the text is too long, exit it quickly so the other elements
                                // don't disappear ant the text is left hanging alone.
                                duration: duration / 2,
                                text: text,
                                isEntering: false,
                                onChange: function (newText) {
                                    animatedTextElement.textContent = newText;
                                },
                                onComplete: function () {
                                    var _a;
                                    (_a = bleeps.type) === null || _a === void 0 ? void 0 : _a.stop();
                                }
                            });
                        }
                    },
                    exited: function (_a) {
                        var target = _a.target;
                        var animatedTextElement = target.querySelector('.arwes-text-field__animated-text');
                        var inputElement = target.querySelector('.arwes-text-field__input');
                        animatedTextElement.style.opacity = '0';
                        inputElement.style.opacity = '0';
                    }
                }
            ] },
            react_2.jsx(animated_1.Animated, __assign({ name: name, placeholder: placeholder, autoComplete: autoComplete, autoFocus: autoFocus, readOnly: readOnly, spellCheck: spellCheck, required: required, disabled: disabled, tabIndex: readOnly ? -1 : 0 }, inputProps, { defaultValue: defaultValue, value: value, onChange: onChange, as: multiline ? 'textarea' : 'input', type: multiline ? undefined : type, className: css_1.cx('arwes-text-field__input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className), css: styles.input, animated: {
                    initialStyles: {
                        opacity: 0
                    },
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
            react_2.jsx("div", { className: 'arwes-text-field__animated-text', css: styles.animatedText }),
            react_2.jsx(animated_1.Animated, { className: 'arwes-text-field__bg', css: styles.bg, animated: animated_1.transitionOpacity }),
            !hideLines &&
                react_2.jsx(animated_1.Animated, { className: 'arwes-text-field__line', css: styles.line, animated: {
                        initialStyles: { scaleX: 0 },
                        entering: { scaleX: 1 },
                        exiting: { scaleX: 0 }
                    } }))));
};
exports.TextField = TextField;
TextField.propTypes = {
    multiline: prop_types_1.default.bool,
    type: prop_types_1.default.oneOf(TEXT_FIELD_TYPE_VALUES).isRequired,
    name: prop_types_1.default.string,
    placeholder: prop_types_1.default.string,
    autoComplete: prop_types_1.default.string,
    autoFocus: prop_types_1.default.bool,
    readOnly: prop_types_1.default.bool,
    spellCheck: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    onChange: prop_types_1.default.func,
    inputProps: prop_types_1.default.object,
    hideLines: prop_types_1.default.bool,
    palette: prop_types_1.default.string,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any
};
TextField.defaultProps = {
    type: 'text'
};
