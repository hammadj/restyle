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
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "display", any>;
} | {
    property: "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[] | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[] | ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
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
} & VariantProps<Theme, "textVariants", "variant"> & Pick<Props, Exclude<keyof Props, "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "color" | "opacity" | "visible" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "textShadowOffset" | "textShadowRadius" | "textShadowColor" | "variant">>) => JSX.Element) & {
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
    } & VariantProps<Theme, "textVariants", "variant"> & Pick<Props, Exclude<keyof Props, "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "color" | "opacity" | "visible" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform" | "textShadowOffset" | "textShadowRadius" | "textShadowColor" | "variant">>> | undefined;
};
export default createText;
