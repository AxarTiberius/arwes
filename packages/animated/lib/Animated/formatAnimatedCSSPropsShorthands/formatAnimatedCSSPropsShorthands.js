"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAnimatedCSSPropsShorthands = void 0;
var ANIMATED_CSS_PROPS_TRANSFORM_DISTANCES = [
    'translateX',
    'translateY',
    'translateZ',
    'perspective'
];
var ANIMATED_CSS_PROPS_TRANSFORM_ANGLES = [
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
];
var ANIMATED_CSS_PROPS_TRANSFORM_UNITLESS = [
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ'
];
var formatAnimatedCSSPropsShorthands = function (cssPropertiesEnhanced) {
    if (!cssPropertiesEnhanced) {
        return;
    }
    var cssProperties = {};
    var transform = '';
    Object.keys(cssPropertiesEnhanced).forEach(function (key) {
        var raw = cssPropertiesEnhanced[key];
        if (ANIMATED_CSS_PROPS_TRANSFORM_DISTANCES.includes(key)) {
            var value = Number.isFinite(raw) ? raw + "px" : String(raw);
            transform += " " + key + "(" + value + ")";
        }
        else if (ANIMATED_CSS_PROPS_TRANSFORM_ANGLES.includes(key)) {
            var value = Number.isFinite(raw) ? raw + "deg" : String(raw);
            transform += " " + key + "(" + value + ")";
        }
        else if (ANIMATED_CSS_PROPS_TRANSFORM_UNITLESS.includes(key)) {
            transform += " " + key + "(" + raw + ")";
        }
        else {
            cssProperties[key] = raw;
        }
    });
    transform = transform.trim();
    if (transform) {
        cssProperties.transform = transform;
    }
    return cssProperties;
};
exports.formatAnimatedCSSPropsShorthands = formatAnimatedCSSPropsShorthands;
