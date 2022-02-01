"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FramePentagon = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var FramePentagon_component_1 = require("./FramePentagon.component");
var FramePentagon = animator_1.withAnimator()(react_1.memo(FramePentagon_component_1.FramePentagon));
exports.FramePentagon = FramePentagon;
__exportStar(require("./FramePentagon.component"), exports);
