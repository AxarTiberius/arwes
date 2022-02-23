"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylesBaseline = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_2 = require("@emotion/react");
var StylesBaseline_styles_1 = require("./StylesBaseline.styles");
var StylesBaseline = function (props) {
    var styles = props.styles;
    var theme = react_2.useTheme();
    var globalGeneralStyles = StylesBaseline_styles_1.createGlobalGeneralStyles(theme);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Global, { styles: globalGeneralStyles }),
        styles && react_1.default.createElement(react_2.Global, { styles: styles })));
};
exports.StylesBaseline = StylesBaseline;
StylesBaseline.propTypes = {
    styles: prop_types_1.default.oneOfType([
        prop_types_1.default.object,
        prop_types_1.default.func
    ])
};
