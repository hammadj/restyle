import { TextStyle, FlexStyle, ViewStyle } from 'react-native';
import { BaseTheme, ResponsiveValue } from './types';
declare const spacingProperties: {
    margin: boolean;
    marginTop: boolean;
    marginRight: boolean;
    marginBottom: boolean;
    marginLeft: boolean;
    marginHorizontal: boolean;
    marginVertical: boolean;
    padding: boolean;
    paddingTop: boolean;
    paddingRight: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    paddingHorizontal: boolean;
    paddingVertical: boolean;
    m: string;
    mt: string;
    mr: string;
    mb: string;
    ml: string;
    mx: string;
    my: string;
    p: string;
    pt: string;
    pr: string;
    pb: string;
    pl: string;
    px: string;
    py: string;
};
declare const typographyProperties: {
    fontFamily: boolean;
    fontSize: boolean;
    fontStyle: boolean;
    fontWeight: boolean;
    letterSpacing: boolean;
    lineHeight: boolean;
    textAlign: boolean;
    textDecorationLine: boolean;
    textDecorationStyle: boolean;
    textTransform: boolean;
};
declare const layoutProperties: {
    width: boolean;
    height: boolean;
    minWidth: boolean;
    maxWidth: boolean;
    minHeight: boolean;
    maxHeight: boolean;
    overflow: boolean;
    aspectRatio: boolean;
    alignContent: boolean;
    alignItems: boolean;
    alignSelf: boolean;
    justifyContent: boolean;
    flex: boolean;
    flexBasis: boolean;
    flexDirection: boolean;
    flexGrow: boolean;
    flexShrink: boolean;
    flexWrap: boolean;
};
declare const positionProperties: {
    position: boolean;
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
};
declare const borderProperties: {
    borderBottomWidth: boolean;
    borderLeftWidth: boolean;
    borderRightWidth: boolean;
    borderStyle: boolean;
    borderTopWidth: boolean;
    borderWidth: boolean;
};
declare const borderRadiusProperties: {
    borderRadius: boolean;
    borderBottomLeftRadius: boolean;
    borderBottomRightRadius: boolean;
    borderTopLeftRadius: boolean;
    borderTopRightRadius: boolean;
};
declare const borderColorProperties: {
    borderColor: boolean;
    borderTopColor: boolean;
    borderRightColor: boolean;
    borderLeftColor: boolean;
    borderBottomColor: boolean;
};
declare const shadowProperties: {
    shadowOpacity: boolean;
    shadowOffset: boolean;
    shadowRadius: boolean;
    elevation: boolean;
};
declare const textShadowProperties: {
    textShadowOffset: boolean;
    textShadowRadius: boolean;
};
declare const backgroundColorProperties: {
    backgroundColor: boolean;
    bg: string;
};
export declare const color: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "color", "colors">;
export declare const opacity: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "opacity", undefined>;
export declare const visible: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "visible", undefined>;
export declare const backgroundColor: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "backgroundColor" | "bg", "colors">[];
export declare const spacing: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", "spacing">[];
export declare const typography: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform", undefined>[];
export declare const layout: import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow", undefined>[];
export declare const position: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "bottom" | "left" | "position" | "right" | "top", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "zIndex", "zIndices">)[];
export declare const border: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius", "borderRadii">)[];
export declare const shadow: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "shadowColor", "colors">)[];
export declare const textShadow: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowOffset" | "textShadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowColor", "colors">)[];
export declare const all: (import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "color", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "opacity", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "backgroundColor" | "bg", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", "spacing"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "bottom" | "left" | "position" | "right" | "top", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "zIndex", "zIndices"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius", "borderRadii"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "shadowColor", "colors"> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowOffset" | "textShadowRadius", undefined> | import("./types").RestyleFunctionContainer<Record<string, any>, BaseTheme, "textShadowColor", "colors">)[];
export interface ColorProps<Theme extends BaseTheme> {
    color?: ResponsiveValue<keyof Theme['colors'], Theme>;
}
export interface OpacityProps<Theme extends BaseTheme> {
    opacity?: ResponsiveValue<number, Theme>;
}
export interface VisibleProps<Theme extends BaseTheme> {
    visible?: ResponsiveValue<boolean, Theme>;
}
export declare type BackgroundColorProps<Theme extends BaseTheme> = {
    [Key in keyof typeof backgroundColorProperties]?: ResponsiveValue<keyof Theme['colors'], Theme>;
};
export declare type SpacingProps<Theme extends BaseTheme> = {
    [Key in keyof typeof spacingProperties]?: ResponsiveValue<keyof Theme['spacing'], Theme>;
};
export declare type TypographyProps<Theme extends BaseTheme> = {
    [Key in keyof typeof typographyProperties]?: ResponsiveValue<TextStyle[Key], Theme>;
};
export declare type LayoutProps<Theme extends BaseTheme> = {
    [Key in keyof typeof layoutProperties]?: ResponsiveValue<FlexStyle[Key], Theme>;
};
export declare type PositionProps<Theme extends BaseTheme> = {
    [Key in keyof typeof positionProperties]?: ResponsiveValue<FlexStyle[Key], Theme>;
} & {
    zIndex?: ResponsiveValue<Theme['zIndices'] extends {} ? keyof Theme['zIndices'] : number, Theme>;
};
export declare type BorderProps<Theme extends BaseTheme> = {
    [Key in keyof typeof borderProperties]?: ResponsiveValue<ViewStyle[Key], Theme>;
} & {
    [Key in keyof typeof borderColorProperties]?: ResponsiveValue<keyof Theme['colors'], Theme>;
} & {
    [Key in keyof typeof borderRadiusProperties]?: ResponsiveValue<Theme['borderRadii'] extends {} ? keyof Theme['borderRadii'] : number, Theme>;
};
export declare type ShadowProps<Theme extends BaseTheme> = {
    [Key in keyof typeof shadowProperties]?: ResponsiveValue<ViewStyle[Key], Theme>;
} & {
    shadowColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
};
export declare type TextShadowProps<Theme extends BaseTheme> = {
    [Key in keyof typeof textShadowProperties]?: ResponsiveValue<TextStyle[Key], Theme>;
} & {
    textShadowColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
};
export declare type AllProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> & ColorProps<Theme> & OpacityProps<Theme> & SpacingProps<Theme> & TypographyProps<Theme> & LayoutProps<Theme> & PositionProps<Theme> & BorderProps<Theme> & ShadowProps<Theme> & TextShadowProps<Theme>;
export {};
