import { StyleSheet } from 'react-native';

import { VStack, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { TLocation } from '../../types/location.types';

interface ILocationListItemContentProps {
    location: TLocation;
}

export default function LocationListItemContent({
    location,
}: ILocationListItemContentProps): JSX.Element {
    const { name, state, country } = location;

    return (
        <VStack>
            <Text style={styles.name}>{name}</Text>

            <HStack>
                {!!state && (
                    <>
                        <Text style={styles.caption}>{state}</Text>
                        <Text> · </Text>
                    </>
                )}
                <Text style={styles.caption}>{country}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    name: {
        marginBottom: STYLE_VARIABLES.smSpacing,
        fontSize: STYLE_VARIABLES.smFontSize,
    },
    caption: {
        fontSize: STYLE_VARIABLES.xsFontSize,
    },
});
