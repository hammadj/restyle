import React from 'react';
import { BaseTheme, RestyleFunctionContainer } from './types';
declare const createRestyleComponent: <Props extends Record<string, any>, Theme extends BaseTheme = BaseTheme>(restyleFunctions: (RestyleFunctionContainer<Props, Theme, keyof Props, keyof Theme | undefined> | RestyleFunctionContainer<Props, Theme, keyof Props, keyof Theme | undefined>[])[], BaseComponent?: React.ComponentType<any>) => ((props: {
    style?: any;
} & Props) => JSX.Element) & {
    defaultProps?: Partial<{
        style?: any;
    } & Props> | undefined;
};
export default createRestyleComponent;
