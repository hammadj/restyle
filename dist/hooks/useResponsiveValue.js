"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responsiveHelpers_1 = __importDefault(require("../responsiveHelpers"));
var useDimensions_1 = __importDefault(require("./useDimensions"));
var useTheme_1 = __importDefault(require("./useTheme"));
var useResponsiveValue = function (propValue, themeKey) {
    var theme = useTheme_1.default();
    var dimensions = useDimensions_1.default();
    return responsiveHelpers_1.default(propValue, { theme: theme, dimensions: dimensions, themeKey: themeKey });
};
exports.default = useResponsiveValue;
