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
export declare const color: {
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
};
export declare const opacity: {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
};
export declare const visible: {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "display", any>;
};
export declare const backgroundColor: {
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[];
export declare const spacing: {
    property: "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[];
export declare const typography: {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[];
export declare const layout: {
    property: "width" | "minWidth" | "flex" | "height" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
}[];
export declare const position: ({
    property: "position" | "top" | "right" | "bottom" | "left";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[];
export declare const border: ({
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
})[];
export declare const shadow: ({
    property: "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[];
export declare const textShadow: ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[];
export declare const all: ({
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
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "width" | "minWidth" | "flex" | "height" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "position" | "top" | "right" | "bottom" | "left";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
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
} | {
    property: "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, string, any>;
})[];
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
