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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameSVG = void 0;
/* @jsx jsx */
var react_1 = require("react");
var react_2 = require("@emotion/react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var animejs_1 = __importDefault(require("animejs"));
var animated_1 = require("@arwes/animated");
var FrameSVG = function (props) {
    var _a;
    var asProvided = props.as, shapes = props.shapes, polylines = props.polylines, lineWidth = props.lineWidth, hideShapes = props.hideShapes, hidePolylines = props.hidePolylines, palette = props.palette, hover = props.hover, disabled = props.disabled, className = props.className, rootRef = props.rootRef, effectsRef = props.effectsRef, children = props.children, otherProps = __rest(props, ["as", "shapes", "polylines", "lineWidth", "hideShapes", "hidePolylines", "palette", "hover", "disabled", "className", "rootRef", "effectsRef", "children"]);
    var as = react_1.useMemo(function () { return asProvided || 'div'; }, []);
    var theme = react_2.useTheme();
    var _b = react_1.useState({ width: 0, height: 0 }), size = _b[0], setSize = _b[1];
    var containerRef = react_1.useRef(null);
    var observerRef = react_1.useRef(null);
    var blurPadding = theme.shadowBlur(1);
    var defaultPalette = theme.palette.primary;
    var colorPalette = (_a = theme.palette[palette]) !== null && _a !== void 0 ? _a : defaultPalette;
    var color = disabled ? colorPalette.dark2 : colorPalette.main;
    var colorHover = colorPalette.light2;
    // TODO: Modularize functionalities.
    var formatPoint = function (point) {
        var width = size.width - (blurPadding * 2);
        var height = size.height - (blurPadding * 2);
        return point
            .slice(0, 2)
            .map(function (value, index) {
            if (typeof value === 'number') {
                return value;
            }
            var isX = index === 0;
            var axisSize = isX ? width : height;
            return String(value)
                .trim()
                .replace(/- /g, ' -')
                .replace(/\+ /g, ' +')
                .split(' ')
                .reduce(function (total, item) {
                var n = Number(item.replace(/[+\-%]/g, ''));
                if (n === 0) {
                    return total;
                }
                var isMinus = item.startsWith('-');
                var isPercentage = item.endsWith('%');
                var point = isPercentage ? axisSize * (n / 100) : n;
                return isMinus ? total - point : total + point;
            }, 0);
        })
            .join(',');
    };
    var formatPolyline = function (polyline) {
        return polyline
            .map(formatPoint)
            .map(function (point, index) { return (index === 0 ? 'M' : 'L') + point; })
            .join(' ');
    };
    react_1.useEffect(function () {
        var root = containerRef.current;
        if (effectsRef) {
            var highlight = function () {
                var shapes = root.querySelectorAll('path[data-type=shape]');
                var startOpacity = hideShapes ? 0 : 0.1;
                var endOpacity = 0.5;
                animejs_1.default
                    .timeline({
                    targets: shapes,
                    duration: theme.transitionDuration() / 4,
                    easing: 'easeOutSine'
                })
                    .add({ opacity: [startOpacity, endOpacity] })
                    .add({ opacity: [endOpacity, startOpacity] });
            };
            var effects = { highlight: highlight };
            if (typeof effectsRef === 'function') {
                effectsRef(effects);
            }
            else {
                effectsRef.current = effects;
            }
        }
        var onResize = function () {
            var width = root.offsetWidth, height = root.offsetHeight;
            setSize({ width: width, height: height });
        };
        // TODO: ResizeObserver class is not recoginized by TypeScript.
        var win = window;
        var ResizeObserver = win.ResizeObserver;
        if (ResizeObserver) {
            observerRef.current = new ResizeObserver(onResize);
            observerRef.current.observe(root);
            return function () { var _a; return (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.disconnect(); };
        }
        else {
            // Resize only once initially.
            onResize();
        }
    }, []);
    return react_2.jsx(as, __assign(__assign({}, otherProps), { className: css_1.cx('arwes-frame-svg', className), ref: rootRef, css: {
            position: 'relative',
            display: 'inline-block',
            padding: theme.space(2),
            '&:hover svg, &:focus svg': hover && !disabled && {
                filter: "drop-shadow(0 0 " + blurPadding + "px " + colorHover + ")"
            },
            '&:hover path[data-type=shape], &:focus path[data-type=shape]': hover && !disabled && {
                fill: colorHover
            },
            '&:hover path[data-type=polyline], &:focus path[data-type=polyline]': hover && !disabled && {
                stroke: colorHover
            }
        } }), react_2.jsx("div", { ref: containerRef, className: 'arwes-frame-svg__structure', css: {
            position: 'absolute',
            left: -blurPadding,
            right: -blurPadding,
            top: -blurPadding,
            bottom: -blurPadding,
            display: 'flex'
        } }, !!size.width && !!size.height && (react_2.jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: "0 0 " + size.width + " " + size.height, 
        // Even if it is still resized automatically, in case there is a delay
        // or the ResizeObserver API is not available, the SVG should be resized.
        preserveAspectRatio: 'none', css: {
            display: 'block',
            flex: 1,
            transition: "filter " + theme.transitionDuration() + "ms ease-out",
            filter: "drop-shadow(0 0 " + blurPadding + "px " + color + ")"
        } },
        react_2.jsx(animated_1.Animated, { as: 'g', style: { transform: "translate(" + blurPadding + "px, " + blurPadding + "px)" } },
            react_2.jsx(animated_1.Animated, { as: 'g', animated: animated_1.transitionVisibility }, (shapes || []).map(function (shape, index) { return (react_2.jsx("path", { key: index, "data-type": 'shape', d: formatPolyline(shape), css: {
                    strokeWidth: 0,
                    stroke: 'transparent',
                    fill: color,
                    opacity: hideShapes ? 0 : 0.1,
                    transition: "fill " + theme.transitionDuration() + "ms ease-out"
                } })); })),
            !hidePolylines && (polylines || []).map(function (item, index) {
                var polyline = Array.isArray(item) ? item : item.polyline;
                var strokeWidth = item.lineWidth || lineWidth;
                var animated = item.animated;
                var css = item.css;
                return (react_2.jsx(animated_1.Animated, { as: 'path', key: index, "data-type": 'polyline', d: formatPolyline(polyline), css: __assign({ strokeWidth: strokeWidth, stroke: color, vectorEffect: 'non-scaling-stroke', fill: 'transparent', transition: "stroke " + theme.transitionDuration() + "ms ease-out" }, css), 
                    // To set the stroke-dashoffset animation, the path total length
                    // is required. A trick to reset it is to set a (way) bigger value.
                    animated: animated || {
                        initialAttributes: { strokeDasharray: 999999 },
                        initialStyles: { strokeDashoffset: 999999 },
                        entering: { strokeDashoffset: [animejs_1.default.setDashoffset, 0] },
                        exiting: { strokeDashoffset: [0, animejs_1.default.setDashoffset] }
                    } }));
            }))))), react_2.jsx("div", { className: 'arwes-frame-svg__content', css: { position: 'relative' } }, children));
};
exports.FrameSVG = FrameSVG;
FrameSVG.propTypes = {
    as: prop_types_1.default.string.isRequired,
    shapes: prop_types_1.default.array,
    polylines: prop_types_1.default.array,
    lineWidth: prop_types_1.default.number,
    palette: prop_types_1.default.string,
    hideShapes: prop_types_1.default.bool,
    hidePolylines: prop_types_1.default.bool,
    hover: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    rootRef: prop_types_1.default.any
};
FrameSVG.defaultProps = {
    as: 'div',
    shapes: [],
    polylines: [],
    lineWidth: 1,
    palette: 'primary'
};
