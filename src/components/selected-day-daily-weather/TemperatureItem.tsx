import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import {
    roundTemperature,
    getTemperatureColor,
} from '../../utils/weather.utils';
import FeelsLikeBadge from '../feels-like-badge/FeelsLikeBadge';

interface ITemperatureItemProps {
    partOfDay: string;
    temperature: number;
    feelsLike: number;
}

export default function TemperatureItem({
    partOfDay,
    temperature,
    feelsLike,
}: ITemperatureItemProps): JSX.Element {
    const roundedTemperature = roundTemperature(temperature);
    const tempColor = getTemperatureColor(temperature);

    const feelsLikeTemperature = roundTemperature(feelsLike);

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <Text style={styles.partOfDay}>{partOfDay}</Text>

            <Text color={tempColor} style={styles.temperature}>
                {roundedTemperature}°
            </Text>

            <FeelsLikeBadge value={feelsLikeTemperature} isShort={true} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    partOfDay: {
        fontSize: STYLE_VARIABLES.smFontSize,
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        fontWeight: 'bold',
    },
});
