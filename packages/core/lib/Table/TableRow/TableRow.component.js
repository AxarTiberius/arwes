"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
/** @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_2 = require("@emotion/react");
var css_1 = require("@emotion/css");
var animator_1 = require("@arwes/animator");
var TableRow_styles_1 = require("./TableRow.styles");
var TableRow = function (props) {
    var theme = props.theme, isHeader = props.isHeader, columns = props.columns, columnWidths = props.columnWidths, condensed = props.condensed;
    var animator = animator_1.useAnimator();
    var styles = react_1.useMemo(function () { return TableRow_styles_1.generateStyles(theme, { animate: animator.animate, isHeader: isHeader, condensed: condensed }); }, [theme, animator.animate, isHeader, condensed]);
    var rootRef = react_1.useRef(null);
    var textAnimateRefsCollection = react_1.useRef([]);
    var transitionRefs = react_1.useRef({ rootRef: rootRef, textAnimateRefsCollection: textAnimateRefsCollection });
    animator.setupAnimateRefs(transitionRefs, theme, isHeader);
    var cellMarginLateral = condensed ? theme.space(0.5) : theme.space(1);
    return (react_2.jsx("div", { css: styles.row, className: css_1.cx('arwes-table__row', isHeader ? 'arwes-table__row--header' : 'arwes-table__row--body'), ref: rootRef }, columns.map(function (column, index) {
        var isLast = columns.length - 1 === index;
        var lessMargin = isLast ? '' : " - " + cellMarginLateral + "px";
        var cellWidth = columnWidths
            ? "calc(" + (columnWidths[index] || 'auto') + lessMargin + ")"
            : "calc(" + 100 / columns.length + "%" + lessMargin + ")";
        return (react_2.jsx("div", { key: column.id, css: styles.cell, className: css_1.cx('arwes-table__cell', condensed && 'arwes-table__cell--condensed'), style: { flex: "0 0 " + cellWidth } },
            react_2.jsx("div", { css: styles.cellContainer, className: 'arwes-table__cell-container' },
                react_2.jsx("div", { css: styles.cellContent, className: 'arwes-table__cell-content' }, column.data)),
            react_2.jsx("div", { css: styles.cellLine, className: 'arwes-table__cell-line' })));
    })));
};
exports.TableRow = TableRow;
TableRow.propTypes = {
    columns: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
        data: prop_types_1.default.node.isRequired
    }).isRequired).isRequired,
    columnWidths: prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]).isRequired),
    isHeader: prop_types_1.default.bool,
    condensed: prop_types_1.default.bool
};
