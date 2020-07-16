import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export declare type ResponsiveValue<Value, Theme extends BaseTheme> = Value | {
    [Key in keyof Theme['breakpoints']]?: Value;
};
export interface BaseTheme {
    colors: {
        [key: string]: string;
    };
    spacing: {
        [key: string]: number;
    };
    breakpoints: {
        [key: string]: number;
    };
    zIndices?: {
        [key: string]: number;
    };
    borderRadii?: {
        [key: string]: number;
    };
    [key: string]: any;
}
export interface Dimensions {
    width: number;
    height: number;
}
export interface RestyleFunctionContainer<TProps extends Record<string, unknown>, Theme extends BaseTheme = BaseTheme, P extends keyof TProps = keyof TProps, K extends keyof Theme | undefined = keyof Theme | undefined> {
    property: P;
    themeKey: K | undefined;
    variant: boolean;
    func: RestyleFunction<TProps, Theme>;
}
export declare type RestyleFunction<TProps extends Record<string, unknown> = Record<string, unknown>, Theme extends BaseTheme = BaseTheme, S extends string = string, TVal = any> = (props: TProps, context: {
    theme: Theme;
    dimensions: Dimensions;
}) => Record<S, TVal>;
export declare type RNStyle = ViewStyle | TextStyle | ImageStyle;
