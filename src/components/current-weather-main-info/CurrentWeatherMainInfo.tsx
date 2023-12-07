import { StyleSheet } from 'react-native';

import { VStack, Text, Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import {
    ICurrentWeather,
    IWeatherDescription,
} from '../../types/weatherForecast.types';
import {
    roundTemperature,
    getTemperatureColor,
} from '../../utils/weather.utils';

type TCurrentTemperatureProps = Pick<ICurrentWeather, 'temp' | 'feelsLike'> & {
    weatherDescription: IWeatherDescription['description'];
};

export default function CurrentWeatherMainInfo({
    weatherDescription,
    temp,
    feelsLike,
}: TCurrentTemperatureProps): JSX.Element {
    const temperature = roundTemperature(temp);
    const tempColor = getTemperatureColor(temperature);

    const feelsLikeTemperature = roundTemperature(feelsLike);
    const feelsLikeColor = getTemperatureColor(feelsLikeTemperature);

    return (
        <VStack style={styles.container}>
            <Text color={tempColor} style={styles.description}>
                {weatherDescription}
            </Text>

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
    container: {
        alignItems: 'center',
    },
    description: {
        marginBottom: STYLE_VARIABLES.xlSpacing,
        fontSize: STYLE_VARIABLES.lgFontSize,
        fontWeight: 'bold',
        textTransform: 'capitalize',
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
