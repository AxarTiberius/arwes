"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransitionerTextSimple = void 0;
var createTransitionerTextSimple = function (params) {
    var text = params.text, _a = params.isEntering, isEntering = _a === void 0 ? true : _a, _b = params.dynamicDuration, dynamicDuration = _b === void 0 ? true : _b, providedDuration = params.duration, onChange = params.onChange, onComplete = params.onComplete;
    var currentAnimationFrame = null;
    if (text.length === 0) {
        return null;
    }
    // The time it will take to add/remove a character per frame.
    var realDuration = (1000 / 60) * text.length;
    var duration = dynamicDuration
        ? Math.min(realDuration, providedDuration)
        : providedDuration;
    onChange(isEntering ? '' : text);
    var length = text.length;
    var start = window.performance.now();
    var progress = null;
    var nextAnimation = function (timestamp) {
        if (!start) {
            start = timestamp;
        }
        progress = Math.max(timestamp - start, 0);
        if (!isEntering) {
            progress = duration - progress;
        }
        // partialLength(n) = animationProgressDuration(ms).
        // textTotalLength(n) = totalDuration(ms).
        var newLength = Math.round((progress * length) / duration);
        var newText = text.substring(0, newLength);
        onChange(newText);
        var continueAnimation = isEntering
            ? newLength < length
            : newLength > 0;
        if (continueAnimation) {
            currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
        }
        else {
            onComplete === null || onComplete === void 0 ? void 0 : onComplete();
        }
    };
    currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
    var cancel = function () {
        window.cancelAnimationFrame(currentAnimationFrame);
    };
    var transitionerTextSimple = { cancel: cancel };
    return transitionerTextSimple;
};
exports.createTransitionerTextSimple = createTransitionerTextSimple;
