import { BaseTheme, RestyleFunction } from './types';
declare type StyleTransformFunction<Theme extends BaseTheme, K extends keyof Theme | undefined, TVal> = (params: {
    value: TVal | null;
    theme: Theme;
    themeKey?: K;
}) => TVal | null;
declare const createRestyleFunction: <Theme extends BaseTheme = BaseTheme, TProps extends Record<string, any> = Record<string, any>, P extends keyof TProps = keyof TProps, K extends keyof Theme | undefined = undefined, S extends string = string>({ property, transform, styleProperty, themeKey, }: {
    property: P;
    transform?: StyleTransformFunction<Theme, K, TProps[P]> | undefined;
    styleProperty?: S | undefined;
    themeKey?: K | undefined;
}) => {
    property: P;
    themeKey: K | undefined;
    variant: boolean;
    func: RestyleFunction<TProps, Theme, S, any>;
};
export default createRestyleFunction;
