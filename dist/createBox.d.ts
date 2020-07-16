/// <reference types="react-native" />
import React from 'react';
import { BaseTheme } from './types';
import { BackgroundColorProps, OpacityProps, LayoutProps, SpacingProps, BorderProps, ShadowProps, PositionProps, VisibleProps } from './restyleFunctions';
export declare type BoxProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & OpacityProps<Theme> & VisibleProps<Theme> & LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & PositionProps<Theme>;
export declare const boxRestyleFunctions: ({
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
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[] | {
    property: "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[] | {
    property: "width" | "minWidth" | "flex" | "height" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[] | ({
    property: "position" | "top" | "right" | "bottom" | "left";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[] | ({
    property: "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[] | ({
    property: "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
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
} & Pick<Props, Exclude<keyof Props, "width" | "minWidth" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "backgroundColor" | "opacity" | "visible" | "flex" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "height" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth" | "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation" | "shadowColor">>) => JSX.Element) & {
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
    } & Pick<Props, Exclude<keyof Props, "width" | "minWidth" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "backgroundColor" | "opacity" | "visible" | "flex" | "bg" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "height" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "position" | "top" | "right" | "bottom" | "left" | "zIndex" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth" | "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation" | "shadowColor">>> | undefined;
};
export default createBox;
