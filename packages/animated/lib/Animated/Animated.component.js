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
exports.Animated = void 0;
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var animejs_1 = __importDefault(require("animejs"));
var animator_1 = require("@arwes/animator");
var formatAnimatedCSSPropsShorthands_1 = require("./formatAnimatedCSSPropsShorthands");
var ANIME_ANIMATION_DEFAULTS = {
    easing: 'easeOutSine'
};
var Animated = function (props) {
    var asProvided = props.as, animated = props.animated, className = props.className, style = props.style, externalRef = props.rootRef, otherProps = __rest(props, ["as", "animated", "className", "style", "rootRef"]);
    var as = react_1.useMemo(function () { return asProvided || 'div'; }, []);
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
    var animator = animator_1.useAnimator();
    if (!animator) {
        throw new Error('Animated component can only be used inside an Animator.');
    }
    var animate = (animator || {}).animate;
    var animatedItemsReceived = Array.isArray(animated) ? animated : [animated];
    var animatedItems = animatedItemsReceived.filter(Boolean);
    react_1.useEffect(function () {
        return function () {
            animejs_1.default.remove(internalRef.current);
        };
    }, []);
    react_1.useEffect(function () {
        if (!animator || !animator.animate || !animated || !animatedItems.length) {
            return;
        }
        var target = internalRef.current;
        var flowValue = animator.flow.value;
        var durationTransition = flowValue === animator_1.ENTERING || flowValue === animator_1.ENTERED
            ? animator.duration.enter
            : animator.duration.exit;
        var transitionTarget = function (params) {
            var selector = params.selector, otherParams = __rest(params, ["selector"]);
            var targets = selector
                ? target === null || target === void 0 ? void 0 : target.querySelectorAll(selector)
                : params.target || params.targets || target;
            animejs_1.default(__assign(__assign(__assign({}, ANIME_ANIMATION_DEFAULTS), otherParams), { targets: targets, duration: durationTransition }));
        };
        animatedItems
            .filter(function (item) { return item[flowValue]; })
            .forEach(function (animatedItem) {
            var animationsReceived = Array.isArray(animatedItem[flowValue])
                ? animatedItem[flowValue]
                : [animatedItem[flowValue]];
            var animations = animationsReceived;
            animations.forEach(function (animation) {
                if (typeof animation === 'function') {
                    animation({
                        target: target,
                        duration: durationTransition,
                        transitionTarget: transitionTarget
                    });
                }
                else {
                    animejs_1.default(__assign(__assign(__assign({}, ANIME_ANIMATION_DEFAULTS), animation), { targets: target, duration: durationTransition }));
                }
            });
        });
    }, [animator === null || animator === void 0 ? void 0 : animator.flow]);
    var initialAttributes;
    if (animate) {
        initialAttributes = animatedItems
            .map(function (item) { return item === null || item === void 0 ? void 0 : item.initialAttributes; })
            .reduce(function (total, item) { return (__assign(__assign({}, total), item)); }, {});
    }
    var specialStyles;
    if (animate && (animator === null || animator === void 0 ? void 0 : animator.flow.exited)) {
        specialStyles = {
            // Hide the element when it is EXITED.
            visibility: 'hidden'
        };
    }
    var dynamicStyles;
    if (animate) {
        dynamicStyles = animatedItems
            .map(function (item) { return formatAnimatedCSSPropsShorthands_1.formatAnimatedCSSPropsShorthands(item === null || item === void 0 ? void 0 : item.initialStyles); })
            .reduce(function (total, item) { return (__assign(__assign({}, total), item)); }, {});
    }
    return react_1.createElement(as, __assign(__assign(__assign({}, otherProps), initialAttributes), { className: className, style: __assign(__assign(__assign({}, style), specialStyles), dynamicStyles), ref: rootRef }));
};
exports.Animated = Animated;
var animatedSettingsItemPropType = prop_types_1.default.oneOfType([
    prop_types_1.default.func,
    prop_types_1.default.object,
    prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.object
    ]))
]);
var animatedSettingsPropType = prop_types_1.default.shape({
    initialAttributes: prop_types_1.default.object,
    initialStyles: prop_types_1.default.object,
    entering: animatedSettingsItemPropType,
    entered: animatedSettingsItemPropType,
    exiting: animatedSettingsItemPropType,
    exited: animatedSettingsItemPropType
});
Animated.propTypes = {
    as: prop_types_1.default.string.isRequired,
    animated: prop_types_1.default.oneOfType([
        animatedSettingsPropType,
        prop_types_1.default.arrayOf(animatedSettingsPropType)
    ])
};
Animated.defaultProps = {
    as: 'div'
};
