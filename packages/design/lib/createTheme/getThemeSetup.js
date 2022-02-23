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
exports.getThemeSetup = void 0;
var constants_1 = require("../constants");
var getThemeSetup = function (providedSettings, extendTheme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var breakpoints = Object.freeze({
        values: Object.freeze(__assign(__assign(__assign({}, constants_1.THEME_BREAKPOINTS_DEFAULT), (_a = extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.breakpoints) === null || _a === void 0 ? void 0 : _a.values), (_b = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.breakpoints) === null || _b === void 0 ? void 0 : _b.values))
    });
    var palette = __assign(__assign({ tonalOffset: constants_1.THEME_PALETTE_TONAL_OFFSET_DEFAULT, elevationOffset: constants_1.THEME_PALETTE_ELEVATION_OFFSET_DEFAULT }, extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.palette), providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.palette);
    var fontScale = (_d = (_c = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.fontScale) !== null && _c !== void 0 ? _c : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.fontScale(1)) !== null && _d !== void 0 ? _d : constants_1.THEME_FONT_SCALE_DEFAULT;
    var space = (_f = (_e = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.space) !== null && _e !== void 0 ? _e : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.space(1)) !== null && _f !== void 0 ? _f : constants_1.THEME_SPACE_DEFAULT;
    var outline = (_h = (_g = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.outline) !== null && _g !== void 0 ? _g : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.outline(1)) !== null && _h !== void 0 ? _h : constants_1.THEME_OUTLINE_DEFAULT;
    var shadowBlur = (_k = (_j = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.shadowBlur) !== null && _j !== void 0 ? _j : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.shadowBlur(1)) !== null && _k !== void 0 ? _k : constants_1.THEME_SHADOW_BLUR_DEFAULT;
    var shadowSpread = (_m = (_l = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.shadowSpread) !== null && _l !== void 0 ? _l : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.shadowSpread(1)) !== null && _m !== void 0 ? _m : constants_1.THEME_SHADOW_SPREAD_DEFAULT;
    var transitionDuration = (_p = (_o = providedSettings === null || providedSettings === void 0 ? void 0 : providedSettings.transitionDuration) !== null && _o !== void 0 ? _o : extendTheme === null || extendTheme === void 0 ? void 0 : extendTheme.transitionDuration(1)) !== null && _p !== void 0 ? _p : constants_1.THEME_TRANSITION_DURATION_DEFAULT;
    return Object.freeze(__assign(__assign({}, providedSettings), { breakpoints: breakpoints, palette: palette, fontScale: fontScale, space: space, outline: outline, shadowBlur: shadowBlur, shadowSpread: shadowSpread, transitionDuration: transitionDuration }));
};
exports.getThemeSetup = getThemeSetup;
