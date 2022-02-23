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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animator = void 0;
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var constants_1 = require("../constants");
var makeScheduler_1 = require("../utils/makeScheduler");
var getChildrenNodesSequenceActivationTimes_1 = require("../utils/getChildrenNodesSequenceActivationTimes");
var getChildrenNodesStaggerActivationTimes_1 = require("../utils/getChildrenNodesStaggerActivationTimes");
var AnimatorContext_1 = require("../AnimatorContext");
var useAnimatorGeneral_1 = require("../useAnimatorGeneral");
var useAnimator_1 = require("../useAnimator");
var ANIMATE_DEFAULT = true;
var DURATION_DEFAULT = Object.freeze({
    enter: 100,
    exit: 100,
    stagger: 25,
    delay: 0,
    offset: 0
});
var animatorEmptySettings = {};
var classInstanceIdCounter = 0;
var Animator = function (props) {
    var _a;
    var _b = props.animator, animator = _b === void 0 ? animatorEmptySettings : _b, children = props.children;
    var parentAnimatorGeneral = useAnimatorGeneral_1.useAnimatorGeneral();
    var parentAnimator = useAnimator_1.useAnimator();
    // Since the expected boolean values applicable to the node are provided down
    // to the next child node, they are converted to booleans always to prevent
    // possible data leaking.
    var isParentAnimated = parentAnimator ? !!parentAnimator.animate : ANIMATE_DEFAULT;
    var animate = animator.animate !== undefined ? !!animator.animate : isParentAnimated;
    var root = parentAnimator ? !!animator.root : true;
    var merge = !root && !!animator.merge;
    var combine = !!animator.combine;
    var manager = (_a = animator.manager) !== null && _a !== void 0 ? _a : constants_1.PARALLEL;
    var instanceId = react_1.useState(function () { return classInstanceIdCounter++; })[0];
    var scheduler = react_1.useState(function () { return makeScheduler_1.makeScheduler(); })[0];
    // All the <Animator/> children non-root instances.
    var childrenNodesMap = react_1.useState(function () { return new Map(); })[0];
    var dynamicDuration = react_1.useRef(undefined);
    // This variable is supposed to be defined by the component using this
    // <Animator/>. It will contain the reference(s) to the actual HTML element(s)
    // to animate on the flow transitions and component lifecycles.
    var animateRefs = react_1.useRef([]);
    // Since the animator data is passed to different contexts, if it were to be
    // a "useState", a stale version of the data would be passed. So this is a
    // "persistent animator data reference" across different contexts.
    // It must be the same as "publicAnimatorRef" for consistency.
    var _persistentAnimatorRef = react_1.useRef(null);
    var getPersistentAnimatorRef = function () { return _persistentAnimatorRef.current; };
    // It is initially empty to trigger an initial flow diff and call the
    // event callbacks in the first render.
    var previousAnimatorRef = react_1.useRef();
    var createAnimatorRef = function (providedFlowValue) {
        var _a, _b;
        var oldAnimatorRef = getPersistentAnimatorRef();
        var duration = Object.freeze(__assign(__assign(__assign(__assign({}, DURATION_DEFAULT), parentAnimatorGeneral === null || parentAnimatorGeneral === void 0 ? void 0 : parentAnimatorGeneral.duration), animator.duration), dynamicDuration.current));
        // The flow object is not directly updated.
        // It is always updated based on its next flow value.
        var newFlow;
        if (!oldAnimatorRef) {
            var value = animate ? constants_1.EXITED : constants_1.ENTERED;
            var hasEntered = value === constants_1.ENTERED;
            var hasExited = value === constants_1.EXITED;
            newFlow = Object.freeze((_a = { value: value }, _a[value] = true, _a.hasEntered = hasEntered, _a.hasExited = hasExited, _a));
        }
        else {
            var value = providedFlowValue !== null && providedFlowValue !== void 0 ? providedFlowValue : oldAnimatorRef.flow.value;
            var hasEntered = (oldAnimatorRef === null || oldAnimatorRef === void 0 ? void 0 : oldAnimatorRef.flow.hasEntered) || value === constants_1.ENTERED;
            var hasExited = (oldAnimatorRef === null || oldAnimatorRef === void 0 ? void 0 : oldAnimatorRef.flow.hasExited) || value === constants_1.EXITED;
            newFlow = Object.freeze((_b = { value: value }, _b[value] = true, _b.hasEntered = hasEntered, _b.hasExited = hasExited, _b));
        }
        var flow = newFlow;
        var setupAnimateRefs = function () {
            var refs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                refs[_i] = arguments[_i];
            }
            animateRefs.current = refs;
        };
        var updateDuration = function (newDynamicDuration) {
            if (combine) {
                console.error('Animator can not update duration dynamically when "combine" is enabled.');
                return;
            }
            dynamicDuration.current = newDynamicDuration;
            updateAnimatorRef(createAnimatorRef());
        };
        var _id = instanceId;
        var _subscribe = function (id, node) {
            childrenNodesMap.set(id, node);
            var flow = getPersistentAnimatorRef().flow;
            node.setActivate(flow.value === constants_1.ENTERING || flow.value === constants_1.ENTERED);
        };
        var _unsubscribe = function (id) {
            childrenNodesMap.delete(id);
        };
        return Object.freeze({
            animate: animate,
            root: root,
            merge: merge,
            combine: combine,
            manager: manager,
            duration: duration,
            flow: flow,
            setupAnimateRefs: setupAnimateRefs,
            updateDuration: updateDuration,
            _id: _id,
            _subscribe: _subscribe,
            _unsubscribe: _unsubscribe
        });
    };
    // "_persistentAnimatorRef" and "publicAnimatorRef" must be the same data.
    // "_persistentAnimatorRef" is passed to different contexts to prevent
    // stale data since it is a "useRef". "publicAnimatorRef" is passed as provided
    // React context value to trigger renders.
    // Both values should be updated only with "updateAnimatorRef".
    if (!_persistentAnimatorRef.current) {
        var valueRef = _persistentAnimatorRef;
        valueRef.current = createAnimatorRef();
    }
    var _c = react_1.useState(_persistentAnimatorRef.current), publicAnimatorRef = _c[0], _setPublicAnimatorRef = _c[1];
    var updateAnimatorRef = function (newAnimatorRef) {
        var valueRef = _persistentAnimatorRef;
        valueRef.current = newAnimatorRef;
        _setPublicAnimatorRef(newAnimatorRef);
    };
    var childActivations = react_1.useRef(null);
    var generateChildActivations = function (flowValue) {
        var animatorRef = getPersistentAnimatorRef();
        var duration = animatorRef.duration;
        var nodes = Array.from(childrenNodesMap.values());
        var nodesToUpdate = [];
        // On EXITED, no nodes should be updated.
        if (combine) {
            nodesToUpdate = nodes;
        }
        else if (flowValue === constants_1.ENTERING) {
            nodesToUpdate = nodes.filter(function (node) { return node.getIsMerge(); });
        }
        else if (flowValue === constants_1.ENTERED) {
            nodesToUpdate = nodes.filter(function (node) { return !node.getIsMerge(); });
        }
        else if (flowValue === constants_1.EXITING) {
            nodesToUpdate = nodes;
        }
        // On EXITING, all nodes exit at the same time in parallel.
        if (flowValue === constants_1.EXITING || manager === constants_1.PARALLEL) {
            // Since all the children will be transitioned in parallel, a possible
            // approach is to make the process synchronous so the scheduler only makes
            // one task. This becomes a bottle-neck if there are more animated nodes
            // than the machine CPU can handle and eventually block the thread.
            // So each node is transitioned separately to prevent this case.
            var totalDuration_1 = 0;
            var times = nodesToUpdate.map(function (node) {
                totalDuration_1 = Math.max(totalDuration_1, flowValue === constants_1.EXITING ? node.getDuration().exit : node.getDuration().enter);
                return { node: node, time: 0 };
            });
            childActivations.current = { duration: totalDuration_1, times: times };
        }
        else if (flowValue === constants_1.EXITED) {
            childActivations.current = { times: [] };
        }
        else if (manager === constants_1.SEQUENCE) {
            childActivations.current = getChildrenNodesSequenceActivationTimes_1.getChildrenNodesSequenceActivationTimes(nodesToUpdate);
        }
        else if (manager === constants_1.STAGGER) {
            childActivations.current = getChildrenNodesStaggerActivationTimes_1.getChildrenNodesStaggerActivationTimes(nodesToUpdate, duration);
        }
        else if (typeof manager === 'function') {
            childActivations.current = manager({ nodes: nodesToUpdate, duration: duration });
        }
        else if (process.env.NODE_ENV !== 'production') {
            console.error("Animator manager \"" + String(manager) + "\" is not supported.");
        }
    };
    var generateActivationsDuration = function (newFlowValue) {
        var _a;
        var _b, _c, _d;
        var animatorRef = getPersistentAnimatorRef();
        if (!combine) {
            return animatorRef.duration;
        }
        generateChildActivations(newFlowValue);
        if (process.env.NODE_ENV !== 'production' &&
            typeof manager === 'function' &&
            !((_b = childActivations.current) === null || _b === void 0 ? void 0 : _b.duration) &&
            ((_c = childActivations.current) === null || _c === void 0 ? void 0 : _c.times.length)) {
            console.error([
                'Animator with custom "manager" and "combine" enabled should return a child',
                'activations "duration". Otherwise the Animator duration will use the default',
                'value and it will not reflect the real combination of the durations.'
            ].join('\n'));
        }
        var durationChangedKey = newFlowValue === constants_1.EXITING ? 'exit' : 'enter';
        var durationValueDefault = durationChangedKey === 'enter'
            ? animatorRef.duration.enter
            : animatorRef.duration.exit;
        var durationValue = ((_d = childActivations.current) === null || _d === void 0 ? void 0 : _d.duration) || durationValueDefault;
        return __assign(__assign({}, animatorRef.duration), (_a = {}, _a[durationChangedKey] = durationValue, _a));
    };
    var setFlowValue = function (newFlowValue) {
        if (!combine) {
            generateChildActivations(newFlowValue);
        }
        var newAnimatorRef = createAnimatorRef(newFlowValue);
        updateAnimatorRef(newAnimatorRef);
    };
    var setActivate = function (activate) {
        var flow = getPersistentAnimatorRef().flow;
        if (activate) {
            if (flow.value === constants_1.ENTERING || flow.value === constants_1.ENTERED) {
                return;
            }
            var duration_1 = generateActivationsDuration(constants_1.ENTERING);
            scheduler.start(duration_1.delay, function () {
                setFlowValue(constants_1.ENTERING);
                scheduler.start(duration_1.enter, function () { return setFlowValue(constants_1.ENTERED); });
            });
        }
        else {
            if (flow.value === constants_1.EXITING || flow.value === constants_1.EXITED) {
                return;
            }
            var duration_2 = generateActivationsDuration(constants_1.EXITING);
            scheduler.start(0, function () {
                setFlowValue(constants_1.EXITING);
                scheduler.start(duration_2.exit, function () { return setFlowValue(constants_1.EXITED); });
            });
        }
    };
    react_1.useEffect(function () {
        var _a;
        if (!animate) {
            return;
        }
        // TODO: What if node is changed from child node to root node and needs
        // to be unsuscribed from its parent?
        if (!root) {
            var id = instanceId;
            var getDuration = function () { return getPersistentAnimatorRef().duration; };
            var getIsMerge = function () { return getPersistentAnimatorRef().merge; };
            var child = Object.freeze({
                id: id,
                getDuration: getDuration,
                getIsMerge: getIsMerge,
                setActivate: setActivate
            });
            parentAnimator === null || parentAnimator === void 0 ? void 0 : parentAnimator._subscribe(instanceId, child);
        }
        (_a = animator.onAnimateMount) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([animator, publicAnimatorRef], animateRefs.current));
        return function () {
            var _a;
            scheduler.stopAll();
            (_a = animator.onAnimateUnmount) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([animator, publicAnimatorRef], animateRefs.current));
            if (!root) {
                parentAnimator === null || parentAnimator === void 0 ? void 0 : parentAnimator._unsubscribe(instanceId);
            }
        };
    }, []);
    react_1.useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!animate) {
            return;
        }
        var animatorRef = getPersistentAnimatorRef();
        var flow = animatorRef.flow;
        // An animated root node is by default activated.
        if (root) {
            setActivate(animator.activate !== false);
        }
        var previousFlowValue = (_a = previousAnimatorRef.current) === null || _a === void 0 ? void 0 : _a.flow.value;
        // If the flow value was changed in this update.
        if (previousFlowValue !== flow.value) {
            (_b = animator.onTransition) === null || _b === void 0 ? void 0 : _b.call(animator, flow);
            switch (flow.value) {
                case constants_1.ENTERING:
                    (_c = animator.onAnimateEntering) === null || _c === void 0 ? void 0 : _c.call.apply(_c, __spreadArray([animator, animatorRef], animateRefs.current));
                    break;
                case constants_1.ENTERED:
                    if (previousFlowValue && previousFlowValue !== constants_1.ENTERING) {
                        (_d = animator.onAnimateEntering) === null || _d === void 0 ? void 0 : _d.call.apply(_d, __spreadArray([animator, animatorRef], animateRefs.current));
                    }
                    (_e = animator.onAnimateEntered) === null || _e === void 0 ? void 0 : _e.call.apply(_e, __spreadArray([animator, animatorRef], animateRefs.current));
                    break;
                case constants_1.EXITING:
                    (_f = animator.onAnimateExiting) === null || _f === void 0 ? void 0 : _f.call.apply(_f, __spreadArray([animator, animatorRef], animateRefs.current));
                    break;
                case constants_1.EXITED:
                    if (previousFlowValue && previousFlowValue !== constants_1.EXITING) {
                        (_g = animator.onAnimateExiting) === null || _g === void 0 ? void 0 : _g.call.apply(_g, __spreadArray([animator, animatorRef], animateRefs.current));
                    }
                    (_h = animator.onAnimateExited) === null || _h === void 0 ? void 0 : _h.call.apply(_h, __spreadArray([animator, animatorRef], animateRefs.current));
                    break;
            }
            if ((_j = childActivations.current) === null || _j === void 0 ? void 0 : _j.times.length) {
                var newChildrenActivation_1 = flow.value === constants_1.ENTERING || flow.value === constants_1.ENTERED;
                childActivations.current.times.forEach(function (_a) {
                    var node = _a.node, time = _a.time;
                    return scheduler.start(node.id, time, function () { return node.setActivate(newChildrenActivation_1); });
                });
            }
        }
        previousAnimatorRef.current = animatorRef;
    }, [parentAnimatorGeneral, parentAnimator, animator, publicAnimatorRef]);
    return react_1.createElement(AnimatorContext_1.AnimatorContext.Provider, { value: publicAnimatorRef }, children);
};
exports.Animator = Animator;
Animator.propTypes = {
    // @ts-expect-error
    animator: prop_types_1.default.shape({
        duration: prop_types_1.default.shape({
            enter: prop_types_1.default.number,
            exit: prop_types_1.default.number,
            stagger: prop_types_1.default.number,
            delay: prop_types_1.default.number,
            offset: prop_types_1.default.number
        }),
        animate: prop_types_1.default.bool,
        root: prop_types_1.default.bool,
        merge: prop_types_1.default.bool,
        combine: prop_types_1.default.bool,
        manager: prop_types_1.default.oneOfType([
            prop_types_1.default.oneOf([constants_1.PARALLEL, constants_1.SEQUENCE, constants_1.STAGGER]),
            prop_types_1.default.func
        ]),
        onAnimateMount: prop_types_1.default.func,
        onAnimateEntering: prop_types_1.default.func,
        onAnimateEntered: prop_types_1.default.func,
        onAnimateExiting: prop_types_1.default.func,
        onAnimateExited: prop_types_1.default.func,
        onAnimateUnmount: prop_types_1.default.func,
        activate: prop_types_1.default.bool,
        onTransition: prop_types_1.default.func
    }),
    children: prop_types_1.default.any
};
