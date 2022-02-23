"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitionVisibilityDelayed = exports.transitionVisibility = exports.transitionVisibilityOut = exports.transitionVisibilityIn = void 0;
var animejs_1 = __importDefault(require("animejs"));
var transitionVisibilityIn = function (params) {
    var target = params.target, duration = params.duration, _a = params.delay, delay = _a === void 0 ? 0 : _a;
    animejs_1.default
        .timeline({
        targets: target,
        easing: 'easeOutSine',
        duration: duration / 3
    })
        .add({ opacity: [0, 1] }, delay)
        .add({ opacity: [1, 0.5] })
        .add({ opacity: [0.5, 1] });
};
exports.transitionVisibilityIn = transitionVisibilityIn;
var transitionVisibilityOut = function (params) {
    var target = params.target, duration = params.duration, delay = params.delay;
    animejs_1.default
        .timeline({
        targets: target,
        easing: 'easeOutSine',
        duration: duration / 3
    })
        .add({ opacity: [1, 0] }, delay)
        .add({ opacity: [0, 0.5] })
        .add({ opacity: [0.5, 0] });
};
exports.transitionVisibilityOut = transitionVisibilityOut;
var transitionVisibility = {
    initialStyles: { opacity: 0 },
    entering: transitionVisibilityIn,
    exiting: transitionVisibilityOut
};
exports.transitionVisibility = transitionVisibility;
var transitionVisibilityDelayed = {
    initialStyles: { opacity: 0 },
    entered: transitionVisibilityIn,
    exiting: transitionVisibilityOut
};
exports.transitionVisibilityDelayed = transitionVisibilityDelayed;
