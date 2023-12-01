import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TLocation } from './location.types';

export enum ERouteNames {
    HOME = 'Home',
    SEARCH = 'Search',
}

export type TRootTabsParamList = {
    Home?: {
        location?: TLocation;
    };
    Search: undefined;
};

export type TRootTabScreenProps<
    T extends keyof TRootTabsParamList = ERouteNames,
> = NativeStackScreenProps<TRootTabsParamList, T>;
