"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animator = void 0;
var animejs_1 = __importDefault(require("animejs"));
var animated_1 = require("@arwes/animated");
var onAnimateEntering = function (animator, containerRef, theme, styles, bleeps) {
    var _a;
    (_a = bleeps.object) === null || _a === void 0 ? void 0 : _a.play();
    var duration = animator.duration;
    var container = containerRef.current;
    animejs_1.default({
        targets: container.querySelectorAll('.arwes-figure__line'),
        duration: duration.enter,
        easing: 'easeOutSine',
        opacity: [0, 1],
        translateY: function (el) {
            if (el.classList.contains('arwes-figure__line-b')) {
                return [theme.space(15), 0];
            }
            return [-theme.space(15), 0];
        },
        skewX: function (el) {
            if (el.classList.contains('arwes-figure__line-c')) {
                return [330, 330];
            }
            return 0;
        }
    });
    animated_1.transitionVisibilityIn({
        target: container.querySelectorAll([
            '.arwes-figure__asset',
            '.arwes-figure__description-bg'
        ].join(',')),
        duration: duration.enter,
        delay: duration.enter
    });
};
var onAnimateExiting = function (animator, containerRef) {
    var duration = animator.duration;
    var container = containerRef.current;
    animated_1.transitionVisibilityOut({
        target: container.querySelectorAll([
            '.arwes-figure__asset',
            '.arwes-figure__description-bg',
            '.arwes-figure__line'
        ].join(',')),
        duration: duration.enter
    });
};
var onAnimateUnmount = function (animator, containerRef) {
    var container = containerRef.current;
    if (!container) {
        return;
    }
    animejs_1.default.remove(container.querySelectorAll([
        '.arwes-figure__asset',
        '.arwes-figure__description-bg',
        '.arwes-figure__line'
    ].join(',')));
};
var animator = {
    onAnimateEntering: onAnimateEntering,
    onAnimateExiting: onAnimateExiting,
    onAnimateUnmount: onAnimateUnmount
};
exports.animator = animator;
