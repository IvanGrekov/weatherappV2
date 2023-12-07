import { StyleSheet } from 'react-native';

import { VStack, Text, HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

interface IMinorInfoItemProps {
    label: string;
    value: string;
    icon: JSX.Element;
}

export default function MinorInfoItem({
    label,
    value,
    icon,
}: IMinorInfoItemProps): JSX.Element {
    return (
        <VStack space={STYLE_VARIABLES.smSpacing} style={styles.container}>
            <Text style={styles.label}>{label}</Text>

            <HStack
                space={STYLE_VARIABLES.smSpacing}
                style={styles.valueWrapper}
            >
                {icon}
                <Text style={styles.value}>{value}</Text>
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
    value: {
        fontSize: STYLE_VARIABLES.smFontSize,
    },
});
