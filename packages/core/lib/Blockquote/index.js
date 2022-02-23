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
exports.Blockquote = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var Blockquote_component_1 = require("./Blockquote.component");
var Blockquote_animator_1 = require("./Blockquote.animator");
var Blockquote = animator_1.withAnimator(Blockquote_animator_1.animator)(react_1.memo(Blockquote_component_1.Blockquote));
exports.Blockquote = Blockquote;
__exportStar(require("./Blockquote.component"), exports);
