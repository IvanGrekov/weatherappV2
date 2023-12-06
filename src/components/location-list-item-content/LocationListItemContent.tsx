import { VStack, HStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IReadableLocation } from '../../types/location.types';

interface ILocationListItemContentProps {
    location: IReadableLocation;
    flexDirection?: 'column' | 'column-reverse';
    nameFontSize?: number;
    captionFontSize?: number;
}

export default function LocationListItemContent({
    location,
    flexDirection = 'column',
    nameFontSize = STYLE_VARIABLES.smFontSize,
    captionFontSize = STYLE_VARIABLES.xxsFontSize,
}: ILocationListItemContentProps): JSX.Element {
    const { name, state, country } = location;

    return (
        <VStack flexDirection={flexDirection} space={STYLE_VARIABLES.xsSpacing}>
            <Text fontSize={nameFontSize}>{name}</Text>

            <HStack>
                {!!state && (
                    <>
                        <Text fontSize={captionFontSize}>{state}</Text>
                        <Text> · </Text>
                    </>
                )}
                <Text fontSize={captionFontSize}>{country}</Text>
            </HStack>
        </VStack>
    );
}
