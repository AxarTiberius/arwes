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
exports.FrameBox = exports.FRAME_BOX_ORIGIN_VALUES = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var expandCSSBoxProp_1 = require("../utils/expandCSSBoxProp");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var FrameSVG_1 = require("../FrameSVG");
var FRAME_BOX_ORIGIN_VALUES = ['left', 'right', 'top', 'bottom', 'center'];
exports.FRAME_BOX_ORIGIN_VALUES = FRAME_BOX_ORIGIN_VALUES;
var FrameBox = function (props) {
    var className = props.className, origins = props.origins, linesWidths = props.linesWidths, children = props.children, otherProps = __rest(props, ["className", "origins", "linesWidths", "children"]);
    var theme = react_1.useTheme();
    var originsList = expandCSSBoxProp_1.expandCSSBoxProp(origins, 'center');
    var linesWidthsList = expandCSSBoxProp_1.expandCSSBoxProp(linesWidths, 1).map(theme.outline);
    var polylinesRaw = [
        [[0, 0], ['100%', 0]],
        [['100%', 0], ['100%', '100%']],
        [['100%', '100%'], [0, '100%']],
        [[0, '100%'], [0, 0]] // left
    ];
    var polylinesFiltered = polylinesRaw
        .map(function (polyline, index) {
        var _a, _b;
        var scaleAxis = index === 0 || index === 2 ? 'scaleX' : 'scaleY';
        var transformOrigin = originsList[index];
        var lineWidth = linesWidthsList[index];
        if (!lineWidth) {
            return null;
        }
        var polylineCustom = {
            polyline: polyline,
            lineWidth: lineWidth,
            css: { strokeLinecap: 'square' },
            animated: {
                initialStyles: { transform: scaleAxis + "(0)", transformOrigin: transformOrigin },
                entering: (_a = {}, _a[scaleAxis] = 1, _a),
                exiting: (_b = {}, _b[scaleAxis] = 0, _b)
            }
        };
        return polylineCustom;
    });
    var polylines = polylinesFiltered.filter(Boolean);
    return (react_1.jsx(FrameSVG_1.FrameSVG, __assign({}, otherProps, { className: css_1.cx('arwes-frame-box', className), shapes: [
            [
                [0, 0],
                [0, '100%'],
                ['100%', '100%'],
                ['100%', 0]
            ]
        ], polylines: polylines }),
        react_1.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'assemble', loop: true }, exiting: { name: 'assemble', loop: true } }),
        children));
};
exports.FrameBox = FrameBox;
FrameBox.propTypes = {
    origins: prop_types_1.default.oneOfType([
        prop_types_1.default.oneOf(FRAME_BOX_ORIGIN_VALUES),
        prop_types_1.default.arrayOf(prop_types_1.default.oneOf(FRAME_BOX_ORIGIN_VALUES).isRequired)
    ]),
    linesWidths: prop_types_1.default.oneOfType([
        prop_types_1.default.number,
        prop_types_1.default.arrayOf(prop_types_1.default.number.isRequired)
    ]),
    children: prop_types_1.default.any
};
FrameBox.defaultProps = {
    origins: 'center',
    linesWidths: 1
};
