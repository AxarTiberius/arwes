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
exports.CodeBlock = void 0;
var react_1 = require("react");
var animator_1 = require("@arwes/animator");
var CodeBlock_component_1 = require("./CodeBlock.component");
var CodeBlock = animator_1.withAnimator()(react_1.memo(CodeBlock_component_1.CodeBlock));
exports.CodeBlock = CodeBlock;
__exportStar(require("./CodeBlock.component"), exports);
