"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitionOpacityDelayed = exports.transitionOpacity = void 0;
var transitionOpacity = {
    initialStyles: { opacity: 0 },
    entering: { opacity: 1 },
    exiting: { opacity: 0 }
};
exports.transitionOpacity = transitionOpacity;
var transitionOpacityDelayed = {
    initialStyles: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 }
};
exports.transitionOpacityDelayed = transitionOpacityDelayed;
