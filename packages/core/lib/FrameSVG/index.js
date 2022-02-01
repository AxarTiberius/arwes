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
exports.FrameSVG = void 0;
var memoTyped_1 = require("../utils/memoTyped");
var FrameSVG_component_1 = require("./FrameSVG.component");
var FrameSVG = memoTyped_1.memoTyped(FrameSVG_component_1.FrameSVG);
exports.FrameSVG = FrameSVG;
__exportStar(require("./FrameSVG.component"), exports);
