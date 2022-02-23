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
exports.generateStyles = void 0;
var rgba_1 = __importDefault(require("polished/lib/color/rgba"));
var generateStyles = function (theme, options) {
    var _a, _b, _c;
    var _d;
    var outline = theme.outline, shadowBlur = theme.shadowBlur, transitionDuration = theme.transitionDuration;
    var multiline = options.multiline, disabled = options.disabled, readOnly = options.readOnly;
    var isHoverFocusEnabled = !disabled && !readOnly;
    var paletteUsed = (_d = theme.palette[options.palette]) !== null && _d !== void 0 ? _d : theme.palette.primary;
    var color = disabled ? paletteUsed.dark2 : paletteUsed.main;
    var colorTextValue = color;
    var colorTextPlaceholder = rgba_1.default(color, 0.5);
    var lineWidth = outline(1) + "px";
    var shadowBlurWidth = shadowBlur(1) + "px";
    var transitionDurationMs = transitionDuration() + "ms";
    // Since Firefox doesn't vertically align text properly for <input/> elements,
    // a different layout is set for <textarea/> and <input/> elements.
    var textBoxStyles = {
        padding: multiline ? '0.5rem' : '0 0.5rem',
        height: multiline ? undefined : '2rem',
        minHeight: multiline ? '2rem' : undefined,
        lineHeight: multiline ? 'inherit' : '2rem',
        fontSize: '1rem'
    };
    return {
        root: {
            display: 'block'
        },
        container: {
            position: 'relative',
            display: 'block',
            cursor: isHoverFocusEnabled ? 'pointer' : 'default',
            WebkitTapHighlightColor: 'transparent'
        },
        input: __assign(__assign(__assign(__assign({}, textBoxStyles), (_a = { zIndex: 10, position: 'relative', display: 'block', outline: 'none', border: 'none', width: '100%', color: colorTextValue, backgroundColor: 'transparent', boxShadow: 'none', transitionProperty: 'background-color, box-shadow', transitionDuration: transitionDurationMs, transitionTimingFunction: 'ease-out', 
                // TEXTAREA specific styles.
                resize: 'vertical', 
                // Reset default browser styles.
                WebkitAppearance: 'none', WebkitBorderRadius: 0, MozAppearance: 'textfield' }, _a[[
            '&::-webkit-search-decoration',
            '&::-webkit-search-cancel-button',
            '&::-webkit-search-results-button',
            '&::-webkit-search-results-decoration'
        ].join()] = {
            WebkitAppearance: 'none'
        }, 
        // Remove arrows from input type number.
        _a['&::-webkit-outer-spin-button, &::-webkit-inner-spin-button'] = {
            WebkitAppearance: 'none',
            margin: 0
        }, _a)), (isHoverFocusEnabled && {
            '&:hover, &:focus': (_b = {
                    outline: 'none',
                    boxShadow: 'none',
                    '& ~ .arwes-text-field__bg': {
                        backgroundColor: rgba_1.default(color, 0.1),
                        boxShadow: "0 0 " + shadowBlurWidth + " " + rgba_1.default(color, 0.1)
                    }
                },
                _b[[
                    '& ~ .arwes-text-field__line::before',
                    '& ~ .arwes-text-field__line::after'
                ].join()] = {
                    transform: 'scaleX(2)'
                },
                _b)
        })), (_c = { 
                // Remove browser validation styles.
                '&:required, &:invalid': {
                    boxShadow: 'none'
                } }, _c[[
            '&:-webkit-autofill',
            '&:-webkit-autofill:hover',
            '&:-webkit-autofill:focus'
        ].join()] = {
            filter: 'none',
            border: 'none',
            // Hack to define colors, since the basic style properties do not work.
            WebkitTextFillColor: color,
            WebkitBoxShadow: "0 0 0px 1000px " + paletteUsed.dark4 + " inset"
        }, _c['&::placeholder'] = {
            color: colorTextPlaceholder,
            opacity: 1 // Firefox style reset.
        }, _c)),
        bg: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: rgba_1.default(color, 0.05),
            boxShadow: "0 0 " + shadowBlurWidth + " " + rgba_1.default(color, 0.05),
            transitionProperty: 'background-color, box-shadow',
            transitionDuration: transitionDurationMs,
            transitionTimingFunction: 'ease-out'
        },
        animatedText: __assign(__assign({}, textBoxStyles), { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, overflow: 'hidden' }),
        // Plain styles props to apply to the "animatedText" element when
        // there is NOT an input value, so it is a placeholder text.
        animatedTextIsTextPlaceholderPlainStyles: {
            color: colorTextPlaceholder
        },
        // Plain styles props to apply to the "animatedText" element when
        // there is an input value.
        animatedTextIsTextValuePlainStyles: {
            color: colorTextValue
        },
        line: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottomWidth: lineWidth,
            borderBottomStyle: 'solid',
            borderBottomColor: paletteUsed.dark1,
            boxShadow: "0 0 " + shadowBlurWidth + " " + paletteUsed.dark1,
            transformOrigin: 'left',
            '&::before, &::after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                bottom: 0,
                borderBottomWidth: lineWidth,
                borderBottomStyle: 'solid',
                borderBottomColor: paletteUsed.light1,
                width: '0.5rem',
                transitionProperty: 'transform',
                transitionDuration: transitionDurationMs,
                transitionTimingFunction: 'ease-out'
            },
            '&::before': {
                left: 0,
                transformOrigin: 'left'
            },
            '&::after': {
                right: 0,
                transformOrigin: 'right'
            }
        }
    };
};
exports.generateStyles = generateStyles;
