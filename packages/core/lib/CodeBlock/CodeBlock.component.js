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
exports.CodeBlock = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animated_1 = require("@arwes/animated");
var Text_1 = require("../Text");
var BleepsOnAnimator_1 = require("../utils/BleepsOnAnimator");
var CodeBlock_styles_1 = require("./CodeBlock.styles");
var CodeBlock = function (props) {
    var lang = props.lang, contentTextProps = props.contentTextProps, children = props.children, className = props.className, style = props.style, rootRef = props.rootRef;
    var theme = react_2.useTheme();
    var styles = react_1.useMemo(function () { return CodeBlock_styles_1.generateStyles(theme); }, [theme]);
    var lineAnimated = {
        initialStyles: { scaleX: 0 },
        entering: { scaleX: 1 },
        exiting: { scaleX: 0 }
    };
    return (react_2.jsx("div", { className: css_1.cx('arwes-code-block', className), css: styles.root, style: style, ref: rootRef },
        react_2.jsx(BleepsOnAnimator_1.BleepsOnAnimator, { entering: { name: 'assemble', loop: true }, exiting: { name: 'assemble', loop: true } }),
        react_2.jsx("div", { className: 'arwes-code-block__container', css: styles.container },
            react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__bg', css: styles.bg, animated: animated_1.transitionVisibility }),
            react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__wrap', css: styles.wrap },
                react_2.jsx(Text_1.Text, __assign({}, contentTextProps, { className: 'arwes-code-block__content', css: styles.content }), children)),
            !!lang && (react_2.jsx("div", { className: 'arwes-code-block__lang', css: styles.lang },
                react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__lang-bg', css: styles.langBg, animated: animated_1.transitionVisibility }),
                react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__line arwes-code-block__line-lang', css: [styles.line, styles.lineLang], animated: lineAnimated }),
                react_2.jsx(Text_1.Text, { blink: false }, lang))),
            react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__line arwes-code-block__line-top', css: [styles.line, styles.lineTop], animated: lineAnimated }),
            react_2.jsx(animated_1.Animated, { className: 'arwes-code-block__line arwes-code-block__line-bottom', css: [styles.line, styles.lineBottom], animated: lineAnimated }))));
};
exports.CodeBlock = CodeBlock;
CodeBlock.propTypes = {
    lang: prop_types_1.default.string,
    contentTextProps: prop_types_1.default.object,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
CodeBlock.defaultProps = {
    contentTextProps: {
        as: 'pre',
        blink: false
    }
};
