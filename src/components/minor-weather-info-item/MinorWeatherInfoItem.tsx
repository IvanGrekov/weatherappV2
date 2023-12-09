import { StyleSheet } from 'react-native';

import { VStack, Text, HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

interface IMinorWeatherInfoItemProps {
    label?: string;
    value: string;
    valueFontSize?: number;
    icon: JSX.Element;
}

export default function MinorWeatherInfoItem({
    label,
    value,
    valueFontSize = STYLE_VARIABLES.smFontSize,
    icon,
}: IMinorWeatherInfoItemProps): JSX.Element {
    return (
        <VStack space={STYLE_VARIABLES.smSpacing} style={styles.container}>
            {!!label && <Text style={styles.label}>{label}</Text>}

            <HStack
                space={STYLE_VARIABLES.smSpacing}
                style={styles.valueWrapper}
            >
                {icon}
                <Text fontSize={valueFontSize}>{value}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    label: {
        fontSize: STYLE_VARIABLES.smFontSize,
        fontWeight: 'bold',
    },
    valueWrapper: {
        alignItems: 'center',
    },
});
