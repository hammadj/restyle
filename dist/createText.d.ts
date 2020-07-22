/// <reference types="react-native" />
import React from 'react';
import { BaseTheme } from './types';
import { ColorProps, OpacityProps, SpacingProps, TextShadowProps, TypographyProps, VisibleProps } from './restyleFunctions';
import { VariantProps } from './createVariant';
export declare type TextProps<Theme extends BaseTheme> = ColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & TypographyProps<Theme> & SpacingProps<Theme> & TextShadowProps<Theme> & VariantProps<Theme, 'textVariants'>;
export declare const textRestyleFunctions: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "color", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "opacity", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "visible", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", "spacing">[] | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform", undefined>[] | (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowOffset" | "textShadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowColor", "colors">)[] | import("./types").RestyleFunctionContainer<VariantProps<BaseTheme, "textVariants", "variant">, BaseTheme, "variant", "textVariants">)[];
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
