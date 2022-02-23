"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockquote = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animated_1 = require("@arwes/animated");
var Blockquote_styles_1 = require("./Blockquote.styles");
var Blockquote = function (props) {
    var palette = props.palette, className = props.className, style = props.style, rootRef = props.rootRef, children = props.children;
    var theme = react_2.useTheme();
    var styles = react_1.useMemo(function () { return Blockquote_styles_1.generateStyles(theme, { palette: palette }); }, [theme, palette]);
    return (react_2.jsx("blockquote", { className: css_1.cx('arwes-blockquote', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx(animated_1.Animated, { className: 'arwes-blockquote__bg', css: styles.bg, animated: animated_1.transitionVisibility }),
        react_2.jsx(animated_1.Animated, { className: 'arwes-blockquote__line', css: styles.line, animated: [
                animated_1.transitionVisibility,
                { entering: { scaleY: 1 }, exiting: { scaleY: 0 } }
            ] }),
        react_2.jsx("div", { className: 'arwes-blockquote__content', css: styles.content }, children)));
};
exports.Blockquote = Blockquote;
Blockquote.propTypes = {
    palette: prop_types_1.default.string,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
