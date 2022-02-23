"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenNodesStaggerActivationTimes = void 0;
function getChildrenNodesStaggerActivationTimes(nodes, parentDuration) {
    var accumulatedOffset = 0;
    var times = nodes.reduce(function (items, node, index) {
        accumulatedOffset += node.getDuration().offset || 0;
        var normalTime = !index ? 0 : index * parentDuration.stagger;
        var time = normalTime + accumulatedOffset;
        var item = { node: node, time: time };
        return __spreadArray(__spreadArray([], items), [item]);
    }, []);
    var lastItem = times[times.length - 1];
    // Assuming all children nodes have the same duration.
    var duration = !times.length ? 0 : lastItem.time + lastItem.node.getDuration().enter;
    return { duration: duration, times: times };
}
exports.getChildrenNodesStaggerActivationTimes = getChildrenNodesStaggerActivationTimes;
