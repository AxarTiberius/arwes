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
exports.Figure = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var Figure_component_1 = require("./Figure.component");
var Figure_animator_1 = require("./Figure.animator");
var Figure = animator_1.withAnimator(Figure_animator_1.animator)(react_1.memo(Figure_component_1.Figure));
exports.Figure = Figure;
__exportStar(require("./Figure.component"), exports);
