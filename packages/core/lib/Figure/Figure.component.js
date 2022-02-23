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
exports.Figure = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var design_1 = require("@arwes/design");
var animator_1 = require("@arwes/animator");
var animated_1 = require("@arwes/animated");
var bleeps_1 = require("@arwes/bleeps");
var loadImage_1 = require("../utils/loadImage");
var Text_1 = require("../Text");
var LoadingBars_1 = require("../LoadingBars");
var Figure_styles_1 = require("./Figure.styles");
var Figure = function (props) {
    var src = props.src, alt = props.alt, fluid = props.fluid, preload = props.preload, imgProps = props.imgProps, descriptionTextProps = props.descriptionTextProps, loadingProps = props.loadingProps, className = props.className, style = props.style, rootRef = props.rootRef, children = props.children;
    var animator = animator_1.useAnimator();
    var animate = animator.animate;
    var theme = react_2.useTheme();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return Figure_styles_1.generateStyles(theme, { animate: animate, fluid: fluid }); }, [theme, animate, fluid]);
    var containerRef = react_1.useRef(null);
    var isMountedRef = react_1.useRef(true);
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), hasError = _b[0], setHasError = _b[1];
    react_1.useEffect(function () {
        if (!preload) {
            return;
        }
        // TODO: Create a custom functionality to handle dynamic
        // breakpoint resources settings.
        var imageURL;
        if (Array.isArray(src)) {
            src.find(function (value, index) {
                var breakpointKey = design_1.THEME_BREAKPOINTS_KEYS[index];
                var breakpoint = theme.breakpoints.values[breakpointKey];
                if (breakpoint && breakpoint >= window.innerWidth) {
                    return true;
                }
                if (value) {
                    imageURL = value;
                }
                return false;
            });
        }
        else {
            imageURL = src;
        }
        if (imageURL) {
            setIsLoading(true);
            setHasError(false);
            loadImage_1.loadImage(imageURL)
                .catch(function () {
                if (isMountedRef.current) {
                    setHasError(true);
                }
            })
                .then(function () {
                var _a;
                if (isMountedRef.current) {
                    setIsLoading(false);
                    animated_1.transitionVisibilityIn({
                        target: (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('.arwes-figure__asset'),
                        duration: animator.duration.enter
                    });
                }
            })
                .catch(function () { });
        }
        else {
            setHasError(true);
        }
        return function () {
            isMountedRef.current = false;
        };
    }, []);
    animator.setupAnimateRefs(containerRef, theme, styles, bleeps);
    return (react_2.jsx("figure", { className: css_1.cx('arwes-figure', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx("div", { className: 'arwes-figure__container', css: styles.container, ref: containerRef },
            react_2.jsx("div", { className: 'arwes-figure__content', css: styles.content },
                react_2.jsx("picture", { className: 'arwes-figure__asset', css: [
                        styles.asset,
                        hasError && styles.assetHasError
                    ] },
                    !Array.isArray(src) && (react_2.jsx("img", __assign({}, imgProps, { className: 'arwes-figure__image', css: styles.image, src: src, alt: alt }))),
                    Array.isArray(src) && (src
                        .map(function (srcItem, index) {
                        if (!srcItem) {
                            return null;
                        }
                        if (index === 0) {
                            return (react_2.jsx("img", __assign({ key: index }, imgProps, { className: 'arwes-figure__image', css: styles.image, src: srcItem, alt: alt })));
                        }
                        return (react_2.jsx("source", { key: index, srcSet: srcItem, media: theme.breakpoints
                                .up(design_1.THEME_BREAKPOINTS_KEYS[index])
                                .replace('@media ', '') }));
                    })
                        .filter(Boolean)
                        .reverse()),
                    preload && isLoading && (react_2.jsx(LoadingBars_1.LoadingBars, __assign({}, loadingProps, { className: 'arwes-figure__loading', css: styles.loading, full: true })))),
                !!children && (react_2.jsx("div", { className: 'arwes-figure__description', css: styles.description },
                    react_2.jsx("div", { className: 'arwes-figure__description-bg arwes-figure__description-bg1', css: [styles.descriptionBg, styles.descriptionBg1] }),
                    react_2.jsx("div", { className: 'arwes-figure__description-bg arwes-figure__description-bg2', css: [styles.descriptionBg, styles.descriptionBg2] }),
                    react_2.jsx("div", { className: 'arwes-figure__description-bg arwes-figure__description-bg3', css: [styles.descriptionBg, styles.descriptionBg3] }),
                    react_2.jsx("figcaption", { className: 'arwes-figure__description-text', css: styles.descriptionText },
                        react_2.jsx(Text_1.Text, __assign({}, descriptionTextProps), children))))),
            react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-a arwes-figure__line-a1', css: [styles.line, styles.lineA1] }),
            react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-a arwes-figure__line-a2', css: [styles.line, styles.lineA2] }),
            react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-b arwes-figure__line-b1', css: [styles.line, styles.lineB1] }),
            react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-b arwes-figure__line-b1', css: [styles.line, styles.lineB2] }),
            !!children && (react_2.jsx(react_1.Fragment, null,
                react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-c', css: [styles.line, styles.lineC] }),
                react_2.jsx("div", { className: 'arwes-figure__line arwes-figure__line-d', css: [styles.line, styles.lineD] }))))));
};
exports.Figure = Figure;
Figure.propTypes = {
    src: prop_types_1.default.oneOfType([
        prop_types_1.default.string.isRequired,
        prop_types_1.default.arrayOf(prop_types_1.default.string)
    ]).isRequired,
    alt: prop_types_1.default.string,
    fluid: prop_types_1.default.bool,
    imgProps: prop_types_1.default.object,
    descriptionTextProps: prop_types_1.default.object,
    loadingProps: prop_types_1.default.object,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
Figure.defaultProps = {
    descriptionTextProps: {
        blink: false
    }
};
