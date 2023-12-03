import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { Pressable, Text } from 'native-base';

import { useMyLocationStore } from '../../stores/my-location';
import { ERouteNames, TRootTabsParamList } from '../../types/routes.types';

function MyLocationSection(): JSX.Element | null {
    const { navigate } = useNavigation<NavigationProp<TRootTabsParamList>>();
    const myLocationStore = useMyLocationStore();

    if (!myLocationStore.myLocation) {
        return null;
    }

    const onPress = (): void => {
        navigate(ERouteNames.HOME);
    };

    const { name, country } = myLocationStore.myLocation;

    return (
        <Pressable onPress={onPress}>
            <Text>{`${name}, ${country}`}</Text>
        </Pressable>
    );
}

export default observer(MyLocationSection);
