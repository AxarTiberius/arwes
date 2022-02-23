"use strict";
// The <Button /> component encapsulates an animated <FrameComponent />.
// The <Button /> component will pass its received `animator` prop directly to the
// <FrameComponent /> to simplify the animator management.
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
exports.Button = void 0;
// TODO: There needs to be a better way to compose animator components
// like the Button component manipulates the Framecomponent.
/* @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var bleeps_1 = require("@arwes/bleeps");
var FrameUnderline_1 = require("../FrameUnderline");
var Button_styles_1 = require("./Button.styles");
// The component will receive the `animator` as `AnimatorInstanceSettings` and
// not as `AnimatorRef` since it is encapsulating another animated component.
// That's why the props accepts `WithAnimatorOutputProps`, not the input one.
var Button = function (props) {
    var animatorSettings = props.animator, FrameComponent = props.FrameComponent, palette = props.palette, disabled = props.disabled, active = props.active, onClick = props.onClick, className = props.className, style = props.style, rootRef = props.rootRef, children = props.children;
    var theme = react_2.useTheme();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return Button_styles_1.generateStyles(theme, { palette: palette, disabled: disabled }); }, [theme, palette, disabled]);
    var effectsRef = react_1.useRef(null);
    // A copy of the <FrameComponent/> animator flow for the <Button/> functionalities.
    var _a = react_1.useState(null), flow = _a[0], setFlow = _a[1];
    var buttonOnClick = function (event) {
        var _a, _b;
        var isAnimated = !!flow; // If flow exist, it means it's animated.
        var isEntered = isAnimated ? flow === null || flow === void 0 ? void 0 : flow.entered : true; // No animated? Then it's entered.
        if (!disabled && isEntered) {
            (_a = effectsRef.current) === null || _a === void 0 ? void 0 : _a.highlight();
            (_b = bleeps.click) === null || _b === void 0 ? void 0 : _b.play();
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        }
    };
    return (react_2.jsx(FrameComponent, { animator: __assign(__assign({}, animatorSettings), { onTransition: function (flow) {
                var _a;
                setFlow(flow);
                (_a = animatorSettings === null || animatorSettings === void 0 ? void 0 : animatorSettings.onTransition) === null || _a === void 0 ? void 0 : _a.call(animatorSettings, flow);
            } }), as: 'button', className: css_1.cx('arwes-button', className), css: [
            styles.root,
            !!flow && !flow.entered && styles.rootIsTransitioning
        ], style: style, rootRef: rootRef, effectsRef: effectsRef, palette: palette, disabled: disabled, hideShapes: !active, hover: true, onClick: buttonOnClick }, children));
};
exports.Button = Button;
Button.propTypes = {
    FrameComponent: prop_types_1.default.any.isRequired,
    palette: prop_types_1.default.string,
    active: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    onClick: prop_types_1.default.func,
    className: prop_types_1.default.string,
    style: prop_types_1.default.object,
    rootRef: prop_types_1.default.any,
    children: prop_types_1.default.any
};
Button.defaultProps = {
    FrameComponent: FrameUnderline_1.FrameUnderline
};
