"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = void 0;
var generateStyles = function (theme, options) {
    var _a;
    var shadowBlur = theme.shadowBlur, transitionDuration = theme.transitionDuration;
    var disabled = options.disabled;
    var defaultPalette = theme.palette.primary;
    var colorPalette = (_a = theme.palette[options.palette]) !== null && _a !== void 0 ? _a : defaultPalette;
    var color = disabled ? colorPalette.dark2 : colorPalette.main;
    var colorHover = colorPalette.light2;
    return {
        root: {
            display: 'inline-block',
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            lineHeight: 1,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            textDecoration: 'none',
            textShadow: "0 0 " + shadowBlur(1) + "px " + color,
            color: color,
            cursor: disabled ? 'default' : 'pointer',
            transitionProperty: 'color, text-shadow',
            transitionDuration: transitionDuration() + "ms",
            transitionTimingFunction: 'ease-out',
            WebkitTapHighlightColor: 'transparent',
            '&:hover, &:focus': !disabled && {
                textShadow: "0 0 " + shadowBlur(1) + "px " + colorHover,
                color: colorHover
            }
        },
        rootIsTransitioning: {
            cursor: 'default'
        }
    };
};
exports.generateStyles = generateStyles;
