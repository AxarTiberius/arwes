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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameLines = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var FrameSVG_1 = require("../FrameSVG");
var FrameLines = function (props) {
    var className = props.className, largeLineWidth = props.largeLineWidth, smallLineWidth = props.smallLineWidth, smallLineLength = props.smallLineLength, hideTopLines = props.hideTopLines, hideBottomLines = props.hideBottomLines, children = props.children, otherProps = __rest(props, ["className", "largeLineWidth", "smallLineWidth", "smallLineLength", "hideTopLines", "hideBottomLines", "children"]);
    var theme = react_1.useTheme();
    var llWidth = theme.outline(largeLineWidth);
    var slWidth = theme.outline(smallLineWidth);
    var slLength = smallLineLength;
    // Large Polylines.
    var largePolylines = [];
    if (!hideTopLines) {
        largePolylines = [
            [[0, 0], ['50% + 0.1', 0]],
            [['100%', 0], ['50% - 0.1', 0]]
        ];
    }
    if (!hideBottomLines) {
        largePolylines = largePolylines.concat([
            [[0, '100%'], ['50% + 0.1', '100%']],
            [['100%', '100%'], ['50% - 0.1', '100%']]
        ]);
    }
    // Small Polylines.
    var smallPolylines = [];
    if (!hideTopLines) {
        smallPolylines = [
            [[0, llWidth], [slLength, llWidth]],
            [['100%', llWidth], ["100% - " + slLength, llWidth]]
        ];
    }
    if (!hideBottomLines) {
        smallPolylines = smallPolylines.concat([
            [[0, "100% - " + llWidth], [slLength, "100% - " + llWidth]],
            [['100%', "100% - " + llWidth], ["100% - " + slLength, "100% - " + llWidth]]
        ]);
    }
    return (react_1.jsx(FrameSVG_1.FrameSVG, __assign({}, otherProps, { className: css_1.cx('arwes-frame-lines', className), shapes: [
            [
                [0, 0],
                [0, '100%'],
                ['100%', '100%'],
                ['100%', 0]
            ]
        ], polylines: __spreadArray(__spreadArray([], largePolylines.map(function (polyline) { return ({
            polyline: polyline,
            lineWidth: llWidth
        }); })), smallPolylines.map(function (polyline) { return ({
            polyline: polyline,
            lineWidth: slWidth
        }); })) }),
        react_1.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'assemble', loop: true }, exiting: { name: 'assemble', loop: true } }),
        children));
};
exports.FrameLines = FrameLines;
FrameLines.propTypes = {
    largeLineWidth: prop_types_1.default.number,
    smallLineWidth: prop_types_1.default.number,
    smallLineLength: prop_types_1.default.number,
    hideTopLines: prop_types_1.default.bool,
    hideBottomLines: prop_types_1.default.bool,
    children: prop_types_1.default.any
};
FrameLines.defaultProps = {
    largeLineWidth: 1,
    smallLineWidth: 1,
    smallLineLength: 10
};
