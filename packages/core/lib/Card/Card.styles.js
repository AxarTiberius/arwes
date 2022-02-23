"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyles = void 0;
var rgba_1 = __importDefault(require("polished/lib/color/rgba"));
var generateStyles = function (theme, options) {
    var _a;
    var palette = theme.palette, space = theme.space, outline = theme.outline, shadowBlur = theme.shadowBlur, transitionDuration = theme.transitionDuration;
    var landscape = options.landscape, hover = options.hover;
    var contentBg = rgba_1.default(palette.primary.light1, 0.05);
    return {
        root: (_a = {
                display: 'block'
            },
            _a[[
                '&:hover .arwes-card__line-picture',
                '&:focus .arwes-card__line-picture'
            ].join(',')] = hover && {
                backgroundColor: palette.secondary.light1,
                boxShadow: "0 0 " + shadowBlur(1) + "px " + palette.secondary.light1
            },
            _a[[
                '&:hover .arwes-card__line-content',
                '&:focus .arwes-card__line-content'
            ].join(',')] = hover && {
                backgroundColor: palette.primary.light1,
                boxShadow: "0 0 " + shadowBlur(1) + "px " + palette.primary.light1
            },
            _a),
        container: {
            display: 'flex',
            flexDirection: landscape ? 'row' : 'column',
            width: '100%',
            height: '100%'
        },
        line: {
            position: 'absolute',
            transitionDuration: transitionDuration() + "ms",
            transitionProperty: 'background-color, box-shadow',
            transitionTimingFunction: 'ease-out'
        },
        picture: {
            position: 'relative',
            width: landscape ? '30%' : undefined
        },
        // If no landscape, the real image is hidden and the background-image
        // is shown to properly set its aspect ratio.
        // See: https://css-tricks.com/scale-svg/#option-2-use-css-background-images-and-the-padding-bottom-hack
        image: {
            boxSizing: 'content-box',
            display: 'block',
            verticalAlign: 'top',
            outline: 'none',
            margin: 0,
            border: 'none',
            padding: 0,
            paddingBottom: landscape ? 0 : 'calc(100% * 2 / 4)',
            width: '100%',
            height: landscape ? '100%' : 0,
            objectFit: 'cover',
            objectPosition: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: palette.neutral.elevate(2)
        },
        linePicture: {
            left: 0,
            top: 0,
            width: outline(1),
            height: '100%',
            backgroundColor: palette.secondary.dark1,
            boxShadow: "0 0 " + shadowBlur(1) + "px " + palette.secondary.dark1
        },
        content: {
            flex: 1,
            position: 'relative',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: 'auto',
            padding: space(4),
            minHeight: 0 // Content overflow fix.
        },
        contentBg: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: contentBg
        },
        header: {
            marginBottom: space(4)
        },
        title: {
            margin: 0,
            fontSize: '1.5rem'
        },
        children: {
            marginBottom: space(1),
            overflow: 'hidden',
            minHeight: 0 // Content overflow fix.
        },
        options: {
            marginTop: space(4),
            textAlign: 'right'
        },
        lineContent: {
            left: 0,
            bottom: 0,
            width: '100%',
            height: outline(1),
            backgroundColor: palette.primary.dark1,
            boxShadow: "0 0 " + shadowBlur(1) + "px " + palette.primary.dark1
        }
    };
};
exports.generateStyles = generateStyles;
