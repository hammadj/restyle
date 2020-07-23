/// <reference types="react-native" />
import React from 'react';
import { BaseTheme } from './types';
import { ColorProps, OpacityProps, SpacingProps, TextShadowProps, TypographyProps, VisibleProps } from './restyleFunctions';
import { VariantProps } from './createVariant';
export declare type TextProps<Theme extends BaseTheme> = ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & TextShadowProps<Theme> & VariantProps<Theme, 'textVariants'>;
export declare const textRestyleFunctions: ({
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
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
    property: "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", any>;
}[] | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
}[] | ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, import("./types").RNStyleProperty, any>;
})[] | import("./types").RestyleFunctionContainer<VariantProps<BaseTheme, "textVariants", "variant">, BaseTheme, "variant", "textVariants">)[];
declare const createText: <Theme extends BaseTheme, Props = import("react-native").TextProps & {
    children?: React.ReactNode;
}>(BaseComponent?: React.ComponentType<any>) => ((props: {
    style?: any;
} & ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & {
    textShadowOffset?: {
        width: number;
        height: number;
    } | { [Key in keyof Theme["breakpoints"]]?: {
        width: number;
        height: number;
    } | undefined; } | undefined;
    textShadowRadius?: number | { [Key_1 in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
} & {
    textShadowColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
} & VariantProps<Theme, "textVariants", "variant"> & Pick<Props, Exclude<keyof Props, "opacity" | "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "visible" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "variant">>) => JSX.Element) & {
    defaultProps?: Partial<{
        style?: any;
    } & ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & {
        textShadowOffset?: {
            width: number;
            height: number;
        } | { [Key in keyof Theme["breakpoints"]]?: {
            width: number;
            height: number;
        } | undefined; } | undefined;
        textShadowRadius?: number | { [Key_1 in keyof Theme["breakpoints"]]?: number | undefined; } | undefined;
    } & {
        textShadowColor?: keyof Theme["colors"] | { [Key_2 in keyof Theme["breakpoints"]]?: keyof Theme["colors"] | undefined; } | undefined;
    } & VariantProps<Theme, "textVariants", "variant"> & Pick<Props, Exclude<keyof Props, "opacity" | "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform" | "visible" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "variant">>> | undefined;
};
export default createText;
