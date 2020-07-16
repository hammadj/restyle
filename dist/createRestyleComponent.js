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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var useRestyle_1 = __importDefault(require("./hooks/useRestyle"));
var createRestyleComponent = function (restyleFunctions, BaseComponent) {
    if (BaseComponent === void 0) { BaseComponent = react_native_1.View; }
    var RestyleComponent = function (props) {
        var passedProps = useRestyle_1.default(restyleFunctions, props);
        return react_1.default.createElement(BaseComponent, __assign({}, passedProps));
    };
    return RestyleComponent;
};
exports.default = createRestyleComponent;
