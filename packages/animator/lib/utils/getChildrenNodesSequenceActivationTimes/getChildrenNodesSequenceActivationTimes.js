"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildrenNodesSequenceActivationTimes = void 0;
function getChildrenNodesSequenceActivationTimes(nodes) {
    var duration = 0;
    var times = nodes.reduce(function (items, node, index) {
        var nodeDuration = node.getDuration();
        var offset = nodeDuration.offset || 0;
        var time = offset;
        if (index !== 0) {
            var prevItem = items[index - 1];
            time = prevItem.time + prevItem.node.getDuration().enter + offset;
        }
        duration = time + nodeDuration.enter;
        var item = { node: node, time: time };
        return __spreadArray(__spreadArray([], items), [item]);
    }, []);
    return { duration: duration, times: times };
}
exports.getChildrenNodesSequenceActivationTimes = getChildrenNodesSequenceActivationTimes;
