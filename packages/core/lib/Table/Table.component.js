"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
/** @jsx jsx */
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var css_1 = require("@emotion/css");
var react_2 = require("@emotion/react");
var animator_1 = require("@arwes/animator");
var bleeps_1 = require("@arwes/bleeps");
var TableRow_1 = require("./TableRow");
var Table_styles_1 = require("./Table.styles");
var Table = function (props) {
    var headers = props.headers, dataset = props.dataset, columnWidths = props.columnWidths, condensed = props.condensed, style = props.style, className = props.className, rootRef = props.rootRef;
    var animator = animator_1.useAnimator();
    var theme = react_2.useTheme();
    var bleeps = bleeps_1.useBleeps();
    var styles = react_1.useMemo(function () { return Table_styles_1.generateStyles(theme); }, [theme]);
    animator.setupAnimateRefs(bleeps);
    return (react_2.jsx("div", { className: css_1.cx('arwes-table', className), css: [
            styles.root,
            !animator.flow.entered && styles.rootIsTransitioning
        ], style: style, ref: rootRef },
        react_2.jsx("div", { className: 'arwes-table__container', css: styles.container },
            react_2.jsx(TableRow_1.TableRow, { theme: theme, isHeader: true, columns: headers, columnWidths: columnWidths, condensed: condensed }),
            dataset.map(function (row) {
                return react_2.jsx(TableRow_1.TableRow, { theme: theme, key: row.id, columns: row.columns, columnWidths: columnWidths, condensed: condensed });
            }))));
};
exports.Table = Table;
var propTypeColumns = prop_types_1.default.arrayOf(prop_types_1.default.shape({
    id: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
    data: prop_types_1.default.node.isRequired
}).isRequired).isRequired;
Table.propTypes = {
    headers: propTypeColumns,
    dataset: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        id: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]).isRequired,
        columns: propTypeColumns
    }).isRequired).isRequired,
    columnWidths: prop_types_1.default.arrayOf(prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.number
    ]).isRequired),
    condensed: prop_types_1.default.bool,
    rootRef: prop_types_1.default.any,
    className: prop_types_1.default.string
};
