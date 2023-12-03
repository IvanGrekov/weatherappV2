import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable } from 'native-base';

import { TLocation } from '../../types/location.types';
import { TRootTabsParamList, ERouteNames } from '../../types/routes.types';
import { setMyLocationToAsyncStorage } from '../../utils/myLocation.utils';

import LocationListItemContent from './LocationListItemContent';

interface ILocationListItemProps {
    location: TLocation;
}

export default function LocationListItem({
    location,
}: ILocationListItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();

    const onPress = (): void => {
        setMyLocationToAsyncStorage(location);
        navigation.navigate(ERouteNames.HOME, {
            location,
        });
    };

    return (
        <Pressable onPress={onPress}>
            <LocationListItemContent location={location} />
        </Pressable>
    );
}
