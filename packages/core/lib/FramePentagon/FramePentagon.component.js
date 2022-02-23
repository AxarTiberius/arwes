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
exports.FramePentagon = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_1 = require("@emotion/react");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var FrameSVG_1 = require("../FrameSVG");
var FramePentagon = function (props) {
    var className = props.className, lineWidth = props.lineWidth, squareSize = props.squareSize, inverted = props.inverted, children = props.children, otherProps = __rest(props, ["className", "lineWidth", "squareSize", "inverted", "children"]);
    var _a = react_1.useTheme(), space = _a.space, outline = _a.outline;
    var ss = squareSize;
    var polyline1 = [];
    var polyline2 = [];
    if (!inverted) {
        polyline1 = [
            [0, '100%'],
            ["100% - " + ss, '100%'],
            ['100%', "100% - " + ss],
            ['100%', 0]
        ];
        polyline2 = [
            [0, 0]
        ];
    }
    else {
        polyline1 = [
            [0, 0],
            [0, "100% - " + ss],
            [ss, '100%'],
            ['100%', '100%']
        ];
        polyline2 = [
            ['100%', 0]
        ];
    }
    return (react_1.jsx(FrameSVG_1.FrameSVG, __assign({}, otherProps, { className: css_1.cx('arwes-frame-pentagon', className), css: {
            padding: space(2) + "px " + space(4) + "px"
        }, shapes: [
            polyline1.concat(polyline2)
        ], polylines: [
            polyline1,
            __spreadArray(__spreadArray([
                polyline1[polyline1.length - 1]
            ], polyline2), [
                polyline1[0]
            ])
        ], lineWidth: outline(lineWidth) }),
        react_1.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'assemble', loop: true }, exiting: { name: 'assemble', loop: true } }),
        children));
};
exports.FramePentagon = FramePentagon;
FramePentagon.propTypes = {
    lineWidth: prop_types_1.default.number,
    squareSize: prop_types_1.default.number,
    inverted: prop_types_1.default.bool,
    children: prop_types_1.default.any
};
FramePentagon.defaultProps = {
    lineWidth: 1,
    squareSize: 15
};
