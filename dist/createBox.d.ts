/// <reference types="react-native" />
import React from 'react';
import { BaseTheme } from './types';
import { BackgroundColorProps, OpacityProps, LayoutProps, SpacingProps, BorderProps, ShadowProps, PositionProps, VisibleProps } from './restyleFunctions';
export declare type BoxProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & PositionProps<Theme>;
export declare const boxRestyleFunctions: ({
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "display" | "visible", any>;
} | {
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "bg", any>;
}[] | {
    property: "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", any>;
}[] | {
    property: "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
}[] | ({
    property: "bottom" | "left" | "position" | "right" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
})[] | ({
    property: "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
})[] | ({
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
})[])[];
declare const createBox: <Theme extends BaseTheme, Props = import("react-native").ViewProps & {
    children?: React.ReactNode;
}>(BaseComponent?: React.ComponentType<any>) => ((props: {
    style?: any;
} & BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & {
    borderBottomWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    borderLeftWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    borderRightWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    borderStyle?: "solid" | "dotted" | "dashed" | { [Key_1 in keyof Theme["breakpoints"]]?: "solid" | "dotted" | "dashed" | undefined; } | undefined;
    borderTopWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    borderWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
} & {
    borderColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    borderTopColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    borderRightColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    borderLeftColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    borderBottomColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
} & {
    borderRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
    borderBottomLeftRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
    borderBottomRightRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
    borderTopLeftRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
    borderTopRightRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
} & {
    shadowOpacity?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    shadowOffset?: {
        width: number;
        height: number;
    } | { [Key_4 in keyof Theme["breakpoints"]]?: {
        width: number;
        height: number;
    } | undefined; } | undefined;
    shadowRadius?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    elevation?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
} & {
    shadowColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
} & {
    position?: "absolute" | "relative" | { [Key_5 in keyof Theme["breakpoints"]]?: "absolute" | "relative" | undefined; } | undefined;
    top?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
    right?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
    bottom?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
    left?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
} & {
    zIndex?: (Theme["zIndices"] extends {} ? keyof Theme["zIndices"] : number) | { [Key_7 in keyof Theme["breakpoints"]]?: (Theme["zIndices"] extends {} ? keyof Theme["zIndices"] : number) | undefined; } | undefined;
} & Pick<Props, Exclude<keyof Props, "width" | "minWidth" | "backgroundColor" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStyle" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "position" | "right" | "top" | "zIndex" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "visible" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py">>) => JSX.Element) & {
    defaultProps?: Partial<{
        style?: any;
    } & BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & {
        borderBottomWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        borderLeftWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        borderRightWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | { [Key_1 in keyof Theme["breakpoints"]]?: "solid" | "dotted" | "dashed" | undefined; } | undefined;
        borderTopWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        borderWidth?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    } & {
        borderColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
        borderTopColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
        borderRightColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
        borderLeftColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
        borderBottomColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    } & {
        borderRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
        borderBottomLeftRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
        borderBottomRightRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
        borderTopLeftRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
        borderTopRightRadius?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | { [Key_3 in keyof Theme["breakpoints"]]?: (Theme["borderRadii"] extends {} ? keyof Theme["borderRadii"] : number) | undefined; } | undefined;
    } & {
        shadowOpacity?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | { [Key_4 in keyof Theme["breakpoints"]]?: {
            width: number;
            height: number;
        } | undefined; } | undefined;
        shadowRadius?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
        elevation?: number | { [Key in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    } & {
        shadowColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    } & {
        position?: "absolute" | "relative" | { [Key_5 in keyof Theme["breakpoints"]]?: "absolute" | "relative" | undefined; } | undefined;
        top?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
        right?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
        bottom?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
        left?: string | number | { [Key_6 in keyof Theme["breakpoints"]]?: string | number | undefined; } | undefined;
    } & {
        zIndex?: (Theme["zIndices"] extends {} ? keyof Theme["zIndices"] : number) | { [Key_7 in keyof Theme["breakpoints"]]?: (Theme["zIndices"] extends {} ? keyof Theme["zIndices"] : number) | undefined; } | undefined;
    } & Pick<Props, Exclude<keyof Props, "width" | "minWidth" | "backgroundColor" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomWidth" | "borderColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStyle" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "bottom" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "position" | "right" | "top" | "zIndex" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "visible" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py">>> | undefined;
};
export default createBox;
