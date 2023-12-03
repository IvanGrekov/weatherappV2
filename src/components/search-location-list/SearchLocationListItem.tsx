import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Pressable, VStack, HStack, Text } from 'native-base';

import { TLocation } from '../../types/location.types';
import { TRootTabsParamList, ERouteNames } from '../../types/routes.types';

interface ISearchLocationListItemProps {
    location: TLocation;
}

export default function SearchLocationListItem({
    location,
}: ISearchLocationListItemProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<TRootTabsParamList>>();
    const { name, state, country } = location;

    const onPress = (): void => {
        return navigation.navigate(ERouteNames.HOME, {
            location,
        });
    };

    return (
        <Pressable onPress={onPress}>
            <VStack>
                <Text>{name}</Text>

                <HStack>
                    <Text>{state}</Text>
                    <Text> · </Text>
                    <Text>{country}</Text>
                </HStack>
            </VStack>
        </Pressable>
    );
}
