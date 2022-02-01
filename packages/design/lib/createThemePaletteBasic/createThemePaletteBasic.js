"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemePaletteBasic = void 0;
var lighten_1 = __importDefault(require("polished/lib/color/lighten"));
var darken_1 = __importDefault(require("polished/lib/color/darken"));
var createThemePaletteBasic = function (color, tonalOffset) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!color.main) {
        throw new Error('Theme color requires "main" color.');
    }
    var main = color.main;
    var dark1 = (_a = color.dark1) !== null && _a !== void 0 ? _a : darken_1.default(tonalOffset, main);
    var dark2 = (_b = color.dark2) !== null && _b !== void 0 ? _b : darken_1.default(tonalOffset * 2, main);
    var dark3 = (_c = color.dark3) !== null && _c !== void 0 ? _c : darken_1.default(tonalOffset * 3, main);
    var dark4 = (_d = color.dark4) !== null && _d !== void 0 ? _d : darken_1.default(tonalOffset * 4, main);
    var light1 = (_e = color.light1) !== null && _e !== void 0 ? _e : lighten_1.default(tonalOffset, main);
    var light2 = (_f = color.light2) !== null && _f !== void 0 ? _f : lighten_1.default(tonalOffset * 2, main);
    var light3 = (_g = color.light3) !== null && _g !== void 0 ? _g : lighten_1.default(tonalOffset * 3, main);
    var light4 = (_h = color.light4) !== null && _h !== void 0 ? _h : lighten_1.default(tonalOffset * 4, main);
    return Object.freeze({
        main: main,
        dark1: dark1,
        dark2: dark2,
        dark3: dark3,
        dark4: dark4,
        light1: light1,
        light2: light2,
        light3: light3,
        light4: light4
    });
};
exports.createThemePaletteBasic = createThemePaletteBasic;
