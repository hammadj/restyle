import { BaseTheme, PropValue, ResponsiveValue } from '../types';
declare const useResponsiveValue: <Theme extends BaseTheme, TVal extends PropValue, K extends keyof Theme | undefined>(propValue: ResponsiveValue<TVal, Theme>, themeKey?: K | undefined) => any;
export default useResponsiveValue;
