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
exports.FrameCorners = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var FrameSVG_1 = require("../FrameSVG");
var FrameCorners = function (props) {
    var className = props.className, cornerWidth = props.cornerWidth, cornerLength = props.cornerLength, showContentLines = props.showContentLines, contentLineWidth = props.contentLineWidth, children = props.children, otherProps = __rest(props, ["className", "cornerWidth", "cornerLength", "showContentLines", "contentLineWidth", "children"]);
    var theme = react_1.useTheme();
    var cw = theme.outline(cornerWidth);
    var cl = cornerLength;
    var contentPolylines = [];
    if (showContentLines) {
        var yAnimated = {
            initialStyles: { transform: 'scaleY(0)' },
            entering: { scaleY: 1 },
            exiting: { scaleY: 0 }
        };
        var xAnimated = {
            initialStyles: { transform: 'scaleX(0)' },
            entering: { scaleX: 1 },
            exiting: { scaleX: 0 }
        };
        contentPolylines = [
            {
                polyline: [[cw, cw], [cw, "100% - " + cw]],
                animated: yAnimated
            },
            {
                polyline: [["100% - " + cw, cw], ["100% - " + cw, "100% - " + cw]],
                animated: yAnimated
            },
            {
                polyline: [[cw, cw], ["100% - " + cw, cw]],
                animated: xAnimated
            },
            {
                polyline: [[cw, "100% - " + cw], ["100% - " + cw, "100% - " + cw]],
                animated: xAnimated
            }
        ].map(function (contentLine) { return (__assign(__assign({}, contentLine), { lineWidth: theme.outline(contentLineWidth), css: { transformOrigin: 'center', opacity: 0.5 } })); });
    }
    var cornerPolylines = [
        [[0, 0], [0, cl]],
        [[0, 0], [cl, 0]],
        [['100%', 0], ["100% - " + cl, 0]],
        [['100%', 0], ['100%', cl]],
        [['100%', '100%'], ["100% - " + cl, '100%']],
        [['100%', '100%'], ['100%', "100% - " + cl]],
        [[0, '100%'], [0, "100% - " + cl]],
        [[0, '100%'], [cl, '100%']]
    ].map(function (polyline) { return ({
        polyline: polyline,
        css: { strokeLinecap: 'square' }
    }); });
    return (react_1.jsx(FrameSVG_1.FrameSVG, __assign({}, otherProps, { className: css_1.cx('arwes-frame-corners', className), shapes: [
            [
                [cw, cw],
                [cw, "100% - " + cw],
                ["100% - " + cw, "100% - " + cw],
                ["100% - " + cw, cw]
            ]
        ], polylines: __spreadArray(__spreadArray([], contentPolylines), cornerPolylines), lineWidth: cw }),
        react_1.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'assemble', loop: true }, exiting: { name: 'assemble', loop: true } }),
        children));
};
exports.FrameCorners = FrameCorners;
FrameCorners.propTypes = {
    cornerWidth: prop_types_1.default.number,
    cornerLength: prop_types_1.default.number,
    showContentLines: prop_types_1.default.bool,
    contentLineWidth: prop_types_1.default.number,
    children: prop_types_1.default.any
};
FrameCorners.defaultProps = {
    cornerWidth: 1,
    cornerLength: 10,
    contentLineWidth: 1
};
