"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArwesThemeProvider = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_2 = require("@emotion/react");
var design_1 = require("@arwes/design");
var ArwesThemeProvider = function (props) {
    var themeSettings = props.themeSettings, children = props.children;
    var theme = design_1.createTheme(__assign(__assign({}, themeSettings), { palette: __assign({ primary: { main: '#00f8f8' }, secondary: { main: '#F8F800' }, text: { main: '#2CFFFF' }, neutral: { main: '#021114' } }, themeSettings === null || themeSettings === void 0 ? void 0 : themeSettings.palette) }));
    return (react_1.default.createElement(react_2.ThemeProvider, { theme: theme }, children));
};
exports.ArwesThemeProvider = ArwesThemeProvider;
ArwesThemeProvider.propTypes = {
    themeSettings: prop_types_1.default.object,
    children: prop_types_1.default.any
};
