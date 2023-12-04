import { StyleSheet } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable } from 'native-base';

import { useMyLocationStore } from '../../stores/my-location';
import { TLocation } from '../../types/location.types';
import { TRootTabsParamList, ERouteNames } from '../../types/routes.types';
import { updateLocationsHistoryAsyncStorage } from '../../utils/locations.utils';
import LocationListItemContent from '../location-list-item-content/LocationListItemContent';

interface ILocationListItemProps {
    location: TLocation;
    onPress?: () => void;
}

export default function LocationListItem({
    location,
    onPress,
}: ILocationListItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();
    const myLocationStore = useMyLocationStore();

    const customOnPress = (): void => {
        myLocationStore.setMyLocation(location);
        updateLocationsHistoryAsyncStorage(location);
        navigation.navigate(ERouteNames.HOME, {
            location,
        });
    };

    return (
        <Pressable style={styles.button} onPress={onPress || customOnPress}>
            <LocationListItemContent location={location} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
    },
});
