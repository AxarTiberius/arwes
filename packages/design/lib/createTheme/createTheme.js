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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
var constants_1 = require("../constants");
var createThemeFactorMultiplier_1 = require("../createThemeFactorMultiplier");
var getThemeSetup_1 = require("./getThemeSetup");
var createThemeBreakpoints_1 = require("./createThemeBreakpoints");
var createThemePalette_1 = require("./createThemePalette");
// All the functionalities are tested in integration with `createTheme()`.
// They are not unit tested since only `createTheme()` is exposed and
// it integrates them all.
var createTheme = function (settings, extendTheme) {
    var setup = getThemeSetup_1.getThemeSetup(settings, extendTheme);
    var breakpoints = createThemeBreakpoints_1.createThemeBreakpoints(setup);
    var palette = createThemePalette_1.createThemePalette(setup);
    var multipliers = constants_1.THEME_FACTOR_MULTIPLIERS_NAMES
        .reduce(function (multipliers, multiplierName) {
        var _a;
        return (__assign(__assign({}, multipliers), (_a = {}, _a[multiplierName] = createThemeFactorMultiplier_1.createThemeFactorMultiplier(setup[multiplierName]), _a)));
    }, {});
    return Object.freeze(__assign(__assign(__assign({}, setup), { breakpoints: breakpoints, palette: palette }), multipliers));
};
exports.createTheme = createTheme;
