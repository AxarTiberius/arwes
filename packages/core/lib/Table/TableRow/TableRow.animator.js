"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animator = void 0;
var rgba_1 = __importDefault(require("polished/lib/color/rgba"));
var animejs_1 = __importDefault(require("animejs"));
var textAnimations_1 = require("../../utils/textAnimations");
var transitionRemoveTableRow = function (animator, refs) {
    var tableRow = refs.current.rootRef.current;
    if (tableRow) {
        var cells = Array.from(tableRow.querySelectorAll('.arwes-table__cell'));
        cells.forEach(function (cell) {
            var cellLine = cell.querySelector('.arwes-table__cell-line');
            animejs_1.default.remove(cell);
            animejs_1.default.remove(cellLine);
        });
    }
    if (refs.current.textAnimateRefsCollection.current.length) {
        refs.current.textAnimateRefsCollection.current.forEach(function (refs) {
            textAnimations_1.stopTextAnimation(animator, refs);
        });
        refs.current.textAnimateRefsCollection.current = [];
    }
};
var transitionTableRow = function (animator, refs, theme, isHeader) {
    transitionRemoveTableRow(animator, refs);
    var isEntering = animator.flow.entering || animator.flow.entered;
    var tableRow = refs.current.rootRef.current;
    var cells = Array.from(tableRow.querySelectorAll('.arwes-table__cell'));
    refs.current.textAnimateRefsCollection.current = [];
    cells.forEach(function (cell) {
        var cellContainer = cell.querySelector('.arwes-table__cell-container');
        var cellContent = cell.querySelector('.arwes-table__cell-content');
        var cellLine = cell.querySelector('.arwes-table__cell-line');
        var cellTextAnimationRefs = {
            current: {
                rootRef: { current: cellContainer },
                actualChildrenRef: { current: cellContent },
                cloneNode: { current: null },
                blinkNode: { current: null },
                animationFrame: { current: null }
            }
        };
        refs.current.textAnimateRefsCollection.current.push(cellTextAnimationRefs);
        cell.style.backgroundColor = isEntering
            ? rgba_1.default(theme.palette.text.main, isHeader ? 0.15 : 0.05)
            : '';
        textAnimations_1.startTextAnimation(animator, cellTextAnimationRefs);
        animejs_1.default({
            targets: cell,
            duration: animator.duration.enter,
            easing: 'easeOutSine',
            translateX: isEntering ? [theme.space(1), 0] : [0, theme.space(1)]
        });
        animejs_1.default({
            targets: cellLine,
            duration: animator.duration.enter,
            easing: 'easeOutSine',
            width: isEntering ? [0, '100%'] : ['100%', 0]
        });
    });
};
var animator = {
    onAnimateEntering: transitionTableRow,
    onAnimateExiting: transitionTableRow,
    onAnimateUnmount: transitionRemoveTableRow
};
exports.animator = animator;
