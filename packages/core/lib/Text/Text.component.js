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
exports.Text = void 0;
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animator_1 = require("@arwes/animator");
var bleeps_1 = require("@arwes/bleeps");
var textAnimations_1 = require("../utils/textAnimations");
var Text_styles_1 = require("./Text.styles");
// Browser normally renders 60 frames per second for requested animations.
var FPS_NORMAL_DURATION = 1000 / 60;
var Text = function (props) {
    var providedAs = props.as, hasBlink = props.blink, blinkText = props.blinkText, blinkInterval = props.blinkInterval, dynamicDuration = props.dynamicDuration, dynamicDurationFactor = props.dynamicDurationFactor, className = props.className, style = props.style, providedRootRef = props.rootRef, children = props.children, otherProps = __rest(props, ["as", "blink", "blinkText", "blinkInterval", "dynamicDuration", "dynamicDurationFactor", "className", "style", "rootRef", "children"]);
    var internalRootRef = react_1.useRef(null);
    var actualChildrenRef = react_1.useRef(null);
    var cloneNode = react_1.useRef(null);
    var blinkNode = react_1.useRef(null);
    var animationFrame = react_1.useRef(null);
    var animateRefs = react_1.useRef({
        rootRef: internalRootRef,
        actualChildrenRef: actualChildrenRef,
        cloneNode: cloneNode,
        blinkNode: blinkNode,
        animationFrame: animationFrame
    });
    var animator = animator_1.useAnimator();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return Text_styles_1.generateStyles({ animate: animator.animate }); }, [animator.animate]);
    var as = react_1.useMemo(function () { return providedAs; }, []);
    var rootRef = react_1.useCallback(function (node) {
        internalRootRef.current = node;
        if (typeof providedRootRef === 'function') {
            providedRootRef(node);
        }
        else if (providedRootRef) {
            providedRootRef.current = node;
        }
    }, []);
    react_1.useEffect(function () {
        // The blink element is created only once for all the animations,
        // since this element is the same each case.
        if (animator.animate && hasBlink && blinkText && blinkInterval) {
            var blinkKeyframes = css_1.keyframes(styles.blinkKeyframes);
            var blinkClassName = css_1.css(__assign(__assign({}, styles.blink), { animation: blinkKeyframes + " " + blinkInterval + "ms step-end infinite" }));
            blinkNode.current = document.createElement('span');
            blinkNode.current.innerHTML = blinkText;
            blinkNode.current.setAttribute('class', blinkClassName);
        }
        else {
            blinkNode.current = null;
        }
    }, [animator.animate, hasBlink]);
    // Every time the children content is updated when the animator is ENTERED,
    // the animation should be re-run. This check is a simple comparision if children
    // is a string, but if it is a JSX object(s), every time any prop changes,
    // the children is received as changed too.
    // The solution is to store a copy of the children element content as
    // a string, then compare it each time it is changed.
    var childrenContent = react_1.useRef('');
    // TODO: Refactor this functionality to not use "useLayoutEffect" since it
    // throws an error on SSR compilation.
    react_1.useLayoutEffect(function () {
        var _a, _b, _c;
        if (!animator.animate) {
            return;
        }
        // The dynamic duration for ENTERING transition is the minimum number of:
        // 1) The children text length multiplied by a factor number. The factor is
        // by default a "normal" FPS (Frame per second) duration which is 1 second / 60.
        // 2) The provided animator entering duration.
        // This minimum calculation is made to ensure a consistent behavior.
        // If a fixed value is needed, dynamic duration must be disabled, and
        // a specific animator duration needs to be provided.
        if (dynamicDuration) {
            var newChildrenTextContent = String(((_a = actualChildrenRef.current) === null || _a === void 0 ? void 0 : _a.textContent) || '');
            var factor = dynamicDurationFactor || FPS_NORMAL_DURATION;
            var newDynamicDuration = Math.min(factor * newChildrenTextContent.length, animator.duration.enter);
            if (animator.duration.enter !== newDynamicDuration) {
                animator.updateDuration({ enter: newDynamicDuration });
            }
        }
        var newChildrenContent = String(((_b = actualChildrenRef.current) === null || _b === void 0 ? void 0 : _b.innerHTML) || '');
        var isChildrenContentEqual = newChildrenContent === childrenContent.current;
        childrenContent.current = newChildrenContent;
        // The animation is re-run every time the children content changes when
        // animator is ENTERED.
        if (animator.flow.entered && !isChildrenContentEqual) {
            (_c = bleeps.type) === null || _c === void 0 ? void 0 : _c.play();
            textAnimations_1.startTextAnimation(animator, animateRefs, function () {
                var _a;
                (_a = bleeps.type) === null || _a === void 0 ? void 0 : _a.stop();
            });
        }
    }, [children]);
    animator.setupAnimateRefs(animateRefs, bleeps);
    return react_2.jsx(as, __assign(__assign({}, otherProps), { className: css_1.cx('arwes-text', className), css: styles.root, style: style, ref: rootRef }), react_2.jsx('span', {
        ref: actualChildrenRef,
        css: styles.actualChildren,
        className: 'arwes-text__content'
    }, children));
};
exports.Text = Text;
Text.propTypes = {
    as: prop_types_1.default.string,
    dynamicDuration: prop_types_1.default.bool,
    dynamicDurationFactor: prop_types_1.default.number,
    blink: prop_types_1.default.bool,
    blinkText: prop_types_1.default.string,
    blinkInterval: prop_types_1.default.number,
    rootRef: prop_types_1.default.any
};
Text.defaultProps = {
    as: 'span',
    dynamicDuration: true,
    dynamicDurationFactor: FPS_NORMAL_DURATION,
    blink: true,
    blinkText: '&#9614;',
    blinkInterval: 100
};
