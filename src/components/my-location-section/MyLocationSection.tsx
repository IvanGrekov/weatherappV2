import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { Pressable, List } from 'native-base';

import { useMyLocationStore } from '../../stores/my-location';
import { ERouteNames, TRootTabsParamList } from '../../types/routes.types';
import LocationList from '../location-list/LocationList';
import LocationListItemContent from '../location-list-item/LocationListItemContent';
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
                <List.Item>
                    <Pressable onPress={onPress}>
                        <LocationListItemContent
                            location={myLocationStore.myLocation}
                        />
                    </Pressable>
                </List.Item>
            </LocationList>
        </>
    );
}

export default observer(MyLocationSection);
