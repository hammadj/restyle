/// <reference types="react-native" />
import React from 'react';
import { BaseTheme } from './types';
import { BackgroundColorProps, OpacityProps, LayoutProps, SpacingProps, BorderProps, ShadowProps, PositionProps, VisibleProps } from './restyleFunctions';
export declare type BoxProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & PositionProps<Theme>;
export declare const boxRestyleFunctions: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "opacity", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "visible", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "backgroundColor" | "bg", "colors">[] | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", "spacing">[] | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow", undefined>[] | (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "bottom" | "left" | "position" | "right" | "top", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "zIndex", "zIndices">)[] | (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius", "borderRadii">)[] | (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "shadowColor", "colors">)[])[];
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
