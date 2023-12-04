import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import SearchButton from '../components/search-button/SearchButton';
import { STYLE_VARIABLES } from '../constants/style.constants';

export const getStackNavigationOptions = (): NativeStackNavigationOptions => {
    return {
        headerTintColor: STYLE_VARIABLES.fgColor,
        headerStyle: {
            backgroundColor: STYLE_VARIABLES.bgColor,
        },
    };
};

export const getHomeScreenOptions = (): NativeStackNavigationOptions => {
    return {
        title: 'Weather Forecast',
        headerRight: () => <SearchButton />,
    };
};

export const getSearchScreenOptions = (): NativeStackNavigationOptions => {
    return {
        title: 'Locations',
        headerBackTitleVisible: false,
    };
};
