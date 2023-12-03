import { VStack, HStack, Text } from 'native-base';

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
            <Text>{name}</Text>

            <HStack>
                {!!state && (
                    <>
                        <Text>{state}</Text>
                        <Text> · </Text>
                    </>
                )}
                <Text>{country}</Text>
            </HStack>
        </VStack>
    );
}
