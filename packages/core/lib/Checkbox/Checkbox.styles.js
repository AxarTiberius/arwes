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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = void 0;
var generateStyles = function (theme, options) {
    var _a, _b;
    var _c;
    var space = theme.space, outline = theme.outline, shadowBlur = theme.shadowBlur, transitionDuration = theme.transitionDuration;
    var readOnly = options.readOnly, disabled = options.disabled;
    var isHoverFocusEnabled = !readOnly && !disabled;
    var paletteUsed = (_c = theme.palette[options.palette]) !== null && _c !== void 0 ? _c : theme.palette.primary;
    var color = disabled ? paletteUsed.dark2 : paletteUsed.main;
    var colorHover = paletteUsed.light2;
    var lineWidth = outline(1) + "px";
    var shadowBlurWidth = shadowBlur(1) + "px";
    var transitionDurationMs = transitionDuration() + "ms";
    var bgHoverStyles = {
        opacity: 0.1
    };
    var boxHoverStyles = {
        borderColor: colorHover,
        width: '40%',
        height: '40%'
    };
    var markHoverStyles = {
        backgroundColor: colorHover,
        boxShadow: "0 0 " + shadowBlurWidth + " " + colorHover
    };
    return {
        root: {
            display: 'block',
            verticalAlign: 'middle'
        },
        container: __assign({ display: 'flex', flexDirection: 'row', cursor: isHoverFocusEnabled ? 'pointer' : 'default', WebkitTapHighlightColor: 'transparent', '&:hover, &:focus': {
                // Remove default hover/focus styles.
                outline: 'none'
            } }, (isHoverFocusEnabled && (_a = {},
            _a[[
                '&:hover .arwes-checkbox__bg',
                '&:focus .arwes-checkbox__bg'
            ].join()] = bgHoverStyles,
            _a[[
                '&:hover .arwes-checkbox__box',
                '&:focus .arwes-checkbox__box'
            ].join()] = boxHoverStyles,
            _a[[
                '&:hover .arwes-checkbox__mark',
                '&:focus .arwes-checkbox__mark'
            ].join()] = markHoverStyles,
            _a))),
        shapes: {
            position: 'relative',
            display: 'flex',
            width: '1.25rem',
            height: '1.25rem',
            verticalAlign: 'middle',
            userSelect: 'none'
        },
        input: __assign({ 
            // Hide element but allow it to be accessible.
            position: 'absolute', left: 0, top: 0, width: 1, height: 1, opacity: 0, '&:checked ~ .arwes-checkbox__mark': {
                transform: 'scale(1)'
            } }, (isHoverFocusEnabled && (_b = {},
            _b[[
                '&:hover ~ .arwes-checkbox__bg',
                '&:focus ~ .arwes-checkbox__bg'
            ].join()] = bgHoverStyles,
            _b[[
                '&:hover ~ .arwes-checkbox__box',
                '&:focus ~ .arwes-checkbox__box'
            ].join()] = boxHoverStyles,
            _b[[
                '&:hover ~ .arwes-checkbox__mark',
                '&:focus ~ .arwes-checkbox__mark'
            ].join()] = markHoverStyles,
            _b))),
        bg: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: color,
            boxShadow: "0 0 " + shadowBlurWidth + " " + color,
            opacity: 0.05,
            transitionProperty: 'opacity',
            transitionDuration: transitionDurationMs,
            transitionTimingFunction: 'ease-out'
        },
        box: {
            position: 'absolute',
            borderWidth: 0,
            borderStyle: 'solid',
            borderColor: color,
            width: '30%',
            height: '30%',
            transitionProperty: 'border-color, width, height',
            transitionDuration: transitionDurationMs,
            transitionTimingFunction: 'ease-out'
        },
        boxLT: {
            left: 0,
            top: 0,
            borderLeftWidth: lineWidth,
            borderTopWidth: lineWidth,
            transformOrigin: 'left top'
        },
        boxLB: {
            left: 0,
            bottom: 0,
            borderLeftWidth: lineWidth,
            borderBottomWidth: lineWidth,
            transformOrigin: 'left bottom'
        },
        boxRT: {
            right: 0,
            top: 0,
            borderRightWidth: lineWidth,
            borderTopWidth: lineWidth,
            transformOrigin: 'right top'
        },
        boxRB: {
            right: 0,
            bottom: 0,
            borderRightWidth: lineWidth,
            borderBottomWidth: lineWidth,
            transformOrigin: 'right bottom'
        },
        mark: {
            margin: 'auto',
            width: '40%',
            height: '40%',
            backgroundColor: color,
            boxShadow: "0 0 " + shadowBlurWidth + " " + color,
            transform: 'scale(0)',
            transitionProperty: 'transform, background-color, box-shadow',
            transitionDuration: transitionDurationMs,
            transitionTimingFunction: 'ease-out'
        },
        content: {
            flex: 1,
            paddingLeft: space(2),
            minWidth: 0 // Overflow issue.
        }
    };
};
exports.generateStyles = generateStyles;
