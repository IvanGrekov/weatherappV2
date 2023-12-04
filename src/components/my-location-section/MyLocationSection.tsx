import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import { useMyLocationStore } from '../../stores/my-location';
import { ERouteNames, TRootTabsParamList } from '../../types/routes.types';
import LocationList from '../location-list/LocationList';
import LocationListItem from '../location-list/LocationListItem';
import PressableLocationItem from '../pressable-location-item/PressableLocationItem';
import SectionTitle from '../section-title/SectionTitle';

function MyLocationSection(): JSX.Element | null {
    const { navigate } = useNavigation<NavigationProp<TRootTabsParamList>>();
    const myLocationStore = useMyLocationStore();

    if (!myLocationStore.myLocation) {
        return null;
    }

    const onPress = (): void => {
        navigate(ERouteNames.HOME);
    };

    return (
        <>
            <SectionTitle>My Location</SectionTitle>

            <LocationList>
                <LocationListItem>
                    <PressableLocationItem
                        onPress={onPress}
                        location={myLocationStore.myLocation}
                    />
                </LocationListItem>
            </LocationList>
        </>
    );
}

export default observer(MyLocationSection);
