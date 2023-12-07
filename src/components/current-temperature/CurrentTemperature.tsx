import { StyleSheet } from 'react-native';

import { VStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import {
    roundTemperature,
    getTemperatureColor,
} from '../../utils/weather.utils';

type TCurrentTemperatureProps = Pick<ICurrentWeather, 'temp' | 'feelsLike'>;

export default function CurrentTemperature({
    temp,
    feelsLike,
}: TCurrentTemperatureProps): JSX.Element {
    const temperature = roundTemperature(temp);
    const tempColor = getTemperatureColor(temperature);

    const feelsLikeTemperature = roundTemperature(feelsLike);
    const feelsLikeColor = getTemperatureColor(feelsLikeTemperature);

    return (
        <VStack style={styles.tempContainer}>
            <Text color={tempColor} style={styles.temperature}>
                {`${temperature}°`}
            </Text>

            <Badge
                variant="solid"
                backgroundColor={feelsLikeColor}
                _text={styles.feelsLike}
                style={styles.feelsLikeBadge}
            >
                {`Feels like ${feelsLikeTemperature}°`}
            </Badge>
        </VStack>
    );
}

const styles = StyleSheet.create({
    tempContainer: {
        alignItems: 'center',
    },
    temperature: {
        fontSize: STYLE_VARIABLES.xxlFontSize,
        lineHeight: STYLE_VARIABLES.xxlFontSize,
    },
    feelsLikeBadge: {
        borderRadius: STYLE_VARIABLES.mdRadius,
    },
    feelsLike: {
        fontSize: STYLE_VARIABLES.smFontSize,
        color: STYLE_VARIABLES.bgColor,
    },
});
