import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../components/home-screen/HomeScreen';
import SearchScreen from '../components/search-screen/SearchScreen';
import { TRootTabsParamList, ERouteNames } from '../types/routes.types';
import {
    getStackNavigationOptions,
    getHomeScreenOptions,
    getSearchScreenOptions,
} from '../utils/stackNavigator.utils';

const Stack = createNativeStackNavigator<TRootTabsParamList>();

export default function Routes(): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName={ERouteNames.HOME}
            screenOptions={getStackNavigationOptions}
        >
            <Stack.Screen
                name={ERouteNames.HOME}
                component={HomeScreen}
                options={getHomeScreenOptions}
            />

            <Stack.Screen
                name={ERouteNames.SEARCH}
                component={SearchScreen}
                options={getSearchScreenOptions}
            />
        </Stack.Navigator>
    );
}
