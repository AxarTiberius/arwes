"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = void 0;
var rgba_1 = __importDefault(require("polished/lib/color/rgba"));
var generateStyles = function (theme) {
    var palette = theme.palette, space = theme.space, outline = theme.outline, shadowBlur = theme.shadowBlur;
    return {
        root: {
            display: 'flex',
            margin: "0 0 " + space(4) + "px"
        },
        container: {
            position: 'relative',
            flex: 1,
            display: 'flex',
            minWidth: 0,
            minHeight: 0 // Fix overflow issue.
        },
        bg: {
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: rgba_1.default(palette.primary.light2, 0.05)
        },
        wrap: {
            position: 'relative',
            zIndex: 1,
            flex: 1,
            overflow: 'auto',
            padding: space(4)
        },
        // In case it is a PRE element, reset its default styles.
        content: {
            display: 'block',
            margin: 0,
            border: 'none',
            padding: 0,
            backgroundColor: 'transparent'
        },
        lang: {
            position: 'absolute',
            zIndex: 2,
            right: 0,
            top: outline(1),
            padding: space(0.5) + "px " + space(1.5) + "px",
            color: palette.secondary.main,
            textShadow: "0 0 " + shadowBlur(1) + "px " + palette.secondary.main,
            textTransform: 'uppercase'
        },
        langBg: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: palette.primary.dark3
        },
        line: {
            position: 'absolute',
            left: 0,
            width: '100%',
            height: outline(1),
            backgroundColor: palette.primary.dark1,
            boxShadow: "0 0 " + outline(1) + "px " + palette.primary.dark1,
            transformOrigin: 'left'
        },
        lineTop: {
            top: 0
        },
        lineBottom: {
            bottom: 0
        },
        lineLang: {
            bottom: 0,
            backgroundColor: palette.secondary.dark1,
            boxShadow: "0 0 " + outline(1) + "px " + palette.secondary.dark1
        }
    };
};
exports.generateStyles = generateStyles;
