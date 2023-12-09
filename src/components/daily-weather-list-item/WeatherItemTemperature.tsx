import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import {
    roundTemperature,
    getTemperatureColor,
} from '../../utils/weather.utils';

interface IWeatherItemTemperatureProps {
    maxTemperature: number;
    minTemperature: number;
}

export default function WeatherItemTemperature({
    maxTemperature,
    minTemperature,
}: IWeatherItemTemperatureProps): JSX.Element {
    const roundedMaxTemperature = roundTemperature(maxTemperature);
    const maxTempColor = getTemperatureColor(roundedMaxTemperature);

    const roundedMinTemperature = roundTemperature(minTemperature);
    const minTempColor = getTemperatureColor(roundedMinTemperature);

    return (
        <VStack space={STYLE_VARIABLES.xsSpacing} style={styles.container}>
            <Text color={maxTempColor} style={styles.temperature}>
                {roundedMaxTemperature}°
            </Text>

            <Text color={minTempColor} style={styles.temperature}>
                {roundedMinTemperature}°
            </Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    temperature: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        fontWeight: 'bold',
    },
});
