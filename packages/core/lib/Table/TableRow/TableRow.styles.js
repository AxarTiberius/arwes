"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = void 0;
var rgba_1 = __importDefault(require("polished/lib/color/rgba"));
var generateStyles = function (theme, options) {
    var palette = theme.palette, space = theme.space, outline = theme.outline, transitionDuration = theme.transitionDuration;
    var animate = options.animate, isHeader = options.isHeader, condensed = options.condensed;
    return {
        row: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: space(1),
            fontWeight: isHeader ? 'bold' : 'normal',
            transition: "background-color " + transitionDuration() + "ms ease-out",
            '&:last-child': {
                marginBottom: 0
            },
            '&:hover, &:focus': {
                backgroundColor: isHeader ? undefined : rgba_1.default(palette.text.main, 0.1)
            }
        },
        cell: {
            position: 'relative',
            marginRight: condensed ? space(0.5) : space(1),
            padding: condensed ? space(0.5) + "px " + space(0.75) + "px" : space(1) + "px " + space(1.5) + "px",
            minWidth: 0,
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            backgroundColor: animate ? undefined : rgba_1.default(palette.text.main, isHeader ? 0.15 : 0.05),
            transition: "background-color " + transitionDuration() + "ms ease-out",
            '&:last-child': {
                marginRight: 0
            }
        },
        cellContainer: {
            position: 'relative'
        },
        cellContent: {
            zIndex: 1,
            opacity: animate ? 0 : undefined
        },
        cellLine: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: animate ? 0 : '100%',
            height: outline(1),
            backgroundColor: isHeader ? palette.secondary.dark1 : palette.primary.dark2
        }
    };
};
exports.generateStyles = generateStyles;
