"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleepsOnAnimator = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var bleeps_1 = require("@arwes/bleeps");
var BleepsOnAnimator = function (props) {
    var entering = props.entering, exiting = props.exiting, disabled = props.disabled;
    var animator = animator_1.useAnimator();
    var bleeps = bleeps_1.useBleeps();
    if (!animator) {
        throw new Error('Animator parent component is required.');
    }
    react_1.useEffect(function () {
        if (!animator.animate) {
            return;
        }
        return function () {
            var transitions = [entering, exiting].filter(Boolean);
            transitions.forEach(function (_a) {
                var _b;
                var name = _a.name;
                (_b = bleeps[name]) === null || _b === void 0 ? void 0 : _b.stop();
            });
        };
    }, []);
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        if (!animator.animate) {
            return;
        }
        switch (animator.flow.value) {
            case animator_1.ENTERING: {
                if (!disabled && entering) {
                    (_a = bleeps[entering.name]) === null || _a === void 0 ? void 0 : _a.play();
                }
                break;
            }
            case animator_1.ENTERED: {
                if (entering === null || entering === void 0 ? void 0 : entering.loop) {
                    (_b = bleeps[entering.name]) === null || _b === void 0 ? void 0 : _b.stop();
                }
                break;
            }
            case animator_1.EXITING: {
                if (!disabled && exiting) {
                    (_c = bleeps[exiting.name]) === null || _c === void 0 ? void 0 : _c.play();
                }
                break;
            }
            case animator_1.EXITED: {
                if (exiting === null || exiting === void 0 ? void 0 : exiting.loop) {
                    (_d = bleeps[exiting.name]) === null || _d === void 0 ? void 0 : _d.stop();
                }
                break;
            }
        }
    }, [animator.flow, disabled]);
    return null;
};
exports.BleepsOnAnimator = BleepsOnAnimator;
