"use strict";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAnimator = void 0;
var react_1 = require("react");
var Animator_1 = require("../Animator");
var mergeClassAndInstanceAnimatorSettings_1 = require("../utils/mergeClassAndInstanceAnimatorSettings");
function withAnimator(classAnimator) {
    var withAnimatorWrapper = function (InputComponent) {
        var AnimatorMiddleware = function (props) {
            var InputComponent = props.InputComponent, forwardedRef = props.forwardedRef, otherProps = __rest(props, ["InputComponent", "forwardedRef"]);
            return react_1.createElement(InputComponent, __assign(__assign({}, otherProps), { ref: forwardedRef }));
        };
        var OutputComponent = react_1.forwardRef(function (props, forwardedRef) {
            var instanceAnimator = props.animator, otherProps = __rest(props, ["animator"]);
            var resultAnimator = react_1.useMemo(function () { return mergeClassAndInstanceAnimatorSettings_1.mergeClassAndInstanceAnimatorSettings(classAnimator, instanceAnimator); }, [instanceAnimator]);
            return react_1.createElement(Animator_1.Animator, { animator: resultAnimator }, react_1.createElement(AnimatorMiddleware, __assign(__assign({}, otherProps), { InputComponent: InputComponent, forwardedRef: forwardedRef })));
        });
        var componentName = InputComponent.displayName || InputComponent.name || 'Component';
        OutputComponent.displayName = "withAnimator(" + componentName + ")";
        return OutputComponent;
    };
    return withAnimatorWrapper;
}
exports.withAnimator = withAnimator;
