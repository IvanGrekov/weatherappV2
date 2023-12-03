import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable } from 'native-base';

import { useMyLocationStore } from '../../stores/my-location';
import { TLocation } from '../../types/location.types';
import { TRootTabsParamList, ERouteNames } from '../../types/routes.types';
import { updateLocationsHistoryAsyncStorage } from '../../utils/locations.utils';

import LocationListItemContent from './LocationListItemContent';

interface ILocationListItemProps {
    location: TLocation;
}

export default function LocationListItem({
    location,
}: ILocationListItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();
    const myLocationStore = useMyLocationStore();

    const onPress = (): void => {
        myLocationStore.setMyLocation(location);
        updateLocationsHistoryAsyncStorage(location);
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
