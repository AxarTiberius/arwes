"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animator_1 = require("@arwes/animator");
var List_styles_1 = require("./List.styles");
var List = function (props) {
    var asProvided = props.as, externalRef = props.rootRef, className = props.className, style = props.style, children = props.children;
    var animator = animator_1.useAnimator();
    var animate = animator.animate;
    var as = react_1.useMemo(function () { return asProvided || 'ul'; }, []);
    var internalRef = react_1.useRef(null);
    var rootRef = react_1.useCallback(function (node) {
        internalRef.current = node;
        if (typeof externalRef === 'function') {
            externalRef(node);
        }
        else if (externalRef) {
            externalRef.current = node;
        }
    }, []);
    var theme = react_2.useTheme();
    var styles = react_1.useMemo(function () { return List_styles_1.generateStyles({ animate: animate }); }, []);
    animator.setupAnimateRefs(internalRef, theme);
    return react_2.jsx(as, {
        className: css_1.cx('arwes-list', className),
        css: styles.root,
        style: style,
        ref: rootRef
    }, children);
};
exports.List = List;
List.propTypes = {
    as: prop_types_1.default.oneOf(['ul', 'ol']).isRequired,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any
};
List.defaultProps = {
    as: 'ul'
};
