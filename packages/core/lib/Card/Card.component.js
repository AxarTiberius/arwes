"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animated_1 = require("@arwes/animated");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var Text_1 = require("../Text");
var Card_styles_1 = require("./Card.styles");
var Card = function (props) {
    var image = props.image, title = props.title, options = props.options, landscape = props.landscape, hover = props.hover, rootRef = props.rootRef, className = props.className, style = props.style, children = props.children;
    var theme = react_2.useTheme();
    var styles = react_1.useMemo(function () { return Card_styles_1.generateStyles(theme, { landscape: landscape, hover: hover }); }, [theme, landscape, hover]);
    return (react_2.jsx("article", { className: css_1.cx('arwes-card', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'object' } }),
        react_2.jsx("div", { className: 'arwes-card__container', css: styles.container },
            !!image && (react_2.jsx("div", { className: 'arwes-card__picture', css: styles.picture },
                react_2.jsx(animated_1.Animated, { as: 'img', className: 'arwes-card__image', css: styles.image, style: { backgroundImage: "url(" + image.src + ")" }, src: image.src, alt: image.alt || '', animated: animated_1.transitionVisibilityDelayed }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-card__line arwes-card__line-picture', css: [styles.line, styles.linePicture], animated: [
                        animated_1.transitionVisibility,
                        { entering: { translateX: [theme.space(4), 0] } }
                    ] }))),
            react_2.jsx("div", { className: 'arwes-card__content', css: styles.content },
                react_2.jsx(animated_1.Animated, { className: 'arwes-card__content-bg', css: styles.contentBg, animated: animated_1.transitionVisibilityDelayed }),
                !!title && (react_2.jsx("header", { className: 'arwes-card__header', css: styles.header },
                    react_2.jsx(Text_1.Text, { as: 'h1', className: 'arwes-card__title', css: styles.title }, title))),
                react_2.jsx("div", { className: 'arwes-card__children', css: styles.children }, children),
                !!options && (react_2.jsx("div", { className: 'arwes-card__options', css: styles.options }, options)),
                react_2.jsx(animated_1.Animated, { className: 'arwes-card__line arwes-card__line-content', css: [styles.line, styles.lineContent], animated: [
                        animated_1.transitionVisibility,
                        { entering: { translateY: [-theme.space(4), 0] } }
                    ] })))));
};
exports.Card = Card;
Card.propTypes = {
    image: prop_types_1.default.shape({
        src: prop_types_1.default.string.isRequired,
        alt: prop_types_1.default.string
    }),
    title: prop_types_1.default.node,
    options: prop_types_1.default.node,
    landscape: prop_types_1.default.bool,
    hover: prop_types_1.default.bool,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
