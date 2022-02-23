"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBars = void 0;
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animator_1 = require("@arwes/animator");
var LoadingBars_styles_1 = require("./LoadingBars.styles");
var LoadingBars_effects_1 = require("./LoadingBars.effects");
var LoadingBars = function (props) {
    var determinate = props.determinate, full = props.full, className = props.className, style = props.style, externalRootRef = props.rootRef;
    var length = props.length;
    var progress = props.progress;
    var size = props.size;
    var speed = props.speed;
    var animator = animator_1.useAnimator();
    var animate = animator.animate, flow = animator.flow;
    var theme = react_2.useTheme();
    var styles = react_1.useMemo(function () { return LoadingBars_styles_1.generateStyles(theme, { animate: animate, length: length, size: size, full: full }); }, [theme, animate, length, size, full]);
    var rootRef = react_1.useRef(null);
    var animateRefs = react_1.useRef({
        rootRef: rootRef,
        animationFrameId: 0
    });
    var internalRootRef = react_1.useCallback(function (node) {
        rootRef.current = node;
        if (typeof externalRootRef === 'function') {
            externalRootRef(node);
        }
        else if (externalRootRef) {
            externalRootRef.current = node;
        }
    }, []);
    react_1.useEffect(function () {
        if (!determinate && flow.entered) {
            LoadingBars_effects_1.startLoadingBarsUndeterminateAnimation(animator, animateRefs, styles, { speed: speed });
        }
        return function () { return LoadingBars_effects_1.stopLoadingBarsUndeterminateAnimation(animator, animateRefs, styles); };
    }, [determinate, flow.entered]);
    animator.setupAnimateRefs(animateRefs, theme);
    return (react_2.jsx("div", { className: css_1.cx('arwes-loading-bars', className), css: styles.root, style: style, ref: internalRootRef },
        react_2.jsx("div", { className: 'arwes-loading-bars__container', css: styles.container }, Array(length).fill(0).map(function (_, index) {
            return react_2.jsx("div", { key: index, className: 'arwes-loading-bars__item', css: [
                    styles.item,
                    determinate &&
                        ((!index && progress > 0) || ((index + 1) <= ((progress * length) / 100))) &&
                        styles.itemPrimaryActive
                ] });
        }))));
};
exports.LoadingBars = LoadingBars;
LoadingBars.propTypes = {
    determinate: prop_types_1.default.bool,
    length: prop_types_1.default.number.isRequired,
    progress: prop_types_1.default.number,
    size: prop_types_1.default.number.isRequired,
    full: prop_types_1.default.bool,
    speed: prop_types_1.default.number.isRequired,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any
};
LoadingBars.defaultProps = {
    length: 8,
    progress: 0,
    size: 1,
    speed: 3
};
