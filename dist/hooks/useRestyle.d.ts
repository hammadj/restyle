import { StyleProp } from 'react-native';
import { BaseTheme, RestyleFunctionContainer, RNStyle } from '../types';
import { AllProps } from '../restyleFunctions';
declare const useRestyle: <Theme extends BaseTheme, TRestyleProps extends AllProps<Theme>, TProps extends TRestyleProps & {
    style?: StyleProp<RNStyle>;
}>(restyleFunctions: (RestyleFunctionContainer<TRestyleProps, Theme, keyof TRestyleProps, keyof Theme | undefined> | RestyleFunctionContainer<TRestyleProps, Theme, keyof TRestyleProps, keyof Theme | undefined>[])[], props: TProps) => Pick<TProps, Exclude<keyof TProps, keyof TRestyleProps>> & {
    style: (false | import("react-native").ViewStyle | import("react-native").ImageStyle | import("react-native").RegisteredStyle<RNStyle> | import("react-native").RecursiveArray<false | import("react-native").ViewStyle | import("react-native").TextStyle | import("react-native").ImageStyle | import("react-native").RegisteredStyle<RNStyle> | null | undefined> | null | undefined)[];
};
export default useRestyle;
