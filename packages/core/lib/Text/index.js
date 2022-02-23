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
exports.Text = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var Text_component_1 = require("./Text.component");
var Text_animator_1 = require("./Text.animator");
var Text = animator_1.withAnimator(Text_animator_1.animator)(react_1.memo(Text_component_1.Text));
exports.Text = Text;
__exportStar(require("./Text.component"), exports);
