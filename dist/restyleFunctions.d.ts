import { TextStyle, FlexStyle, ViewStyle } from 'react-native';
import { BaseTheme, ResponsiveValue, RNStyleProperty } from './types';
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
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
};
export declare const opacity: {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
};
export declare const visible: {
    property: "visible";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "display" | "visible", any>;
};
export declare const backgroundColor: {
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "bg", any>;
}[];
export declare const spacing: {
    property: "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", any>;
}[];
export declare const typography: {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
}[];
export declare const layout: {
    property: "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
}[];
export declare const position: ({
    property: "bottom" | "left" | "position" | "right" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
})[];
export declare const border: ({
    property: "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
})[];
export declare const shadow: ({
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
})[];
export declare const textShadow: ({
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
})[];
export declare const all: ({
    property: "color";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "opacity";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "backgroundColor" | "bg";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "bg", any>;
} | {
    property: "margin" | "marginBottom" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginTop" | "marginVertical" | "padding" | "paddingBottom" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingVertical" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py";
    themeKey: "spacing" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, "transform" | "width" | "minWidth" | "backfaceVisibility" | "backgroundColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRadius" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "testID" | "elevation" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "display" | "end" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "zIndex" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "fontVariant" | "textTransform" | "writingDirection" | "textAlignVertical" | "includeFontPadding" | "resizeMode" | "overlayColor" | "tintColor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py", any>;
} | {
    property: "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textTransform";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "width" | "minWidth" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "minHeight" | "overflow";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "bottom" | "left" | "position" | "right" | "top";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "zIndex";
    themeKey: "zIndices" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderWidth";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "borderBottomColor" | "borderColor" | "borderLeftColor" | "borderRightColor" | "borderTopColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius";
    themeKey: "borderRadii" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "elevation" | "shadowOffset" | "shadowOpacity" | "shadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "shadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "textShadowOffset" | "textShadowRadius";
    themeKey: undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
} | {
    property: "textShadowColor";
    themeKey: "colors" | undefined;
    variant: boolean;
    func: import("./types").RestyleFunction<Record<string, any>, BaseTheme, RNStyleProperty, any>;
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
