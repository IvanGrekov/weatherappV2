import { StyleSheet } from 'react-native';

import { HStack, VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import CurrentTemperature from '../current-temperature/CurrentTemperature';
import { ClearDayIcon, ClearNightIcon } from '../weather-icons/01';
import { FewCloudsDayIcon, FewCloudsNightIcon } from '../weather-icons/02';

export default function CurrentWeather({
    temp,
    feelsLike,
    humidity,
    pressure,
    visibility,
    windSpeed,
    weatherDescription,
}: ICurrentWeather): JSX.Element {
    const { description } = weatherDescription;

    return (
        <VStack style={styles.container} space={STYLE_VARIABLES.mdSpacing}>
            <CurrentTemperature temp={temp} feelsLike={feelsLike} />

            <Text style={styles.weatherDescription}>{description}</Text>

            <ClearDayIcon />
            <ClearNightIcon />
            <FewCloudsDayIcon />
            <FewCloudsNightIcon />

            <HStack justifyContent="space-between">
                <Text>{`${windSpeed} m/s`}</Text>

                <Text>{`${visibility} m`}</Text>

                <Text>{`${humidity}%`}</Text>

                <Text>{`${pressure} hPa`}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-between',
    },
    weatherDescription: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        lineHeight: STYLE_VARIABLES.mdFontSize,
        textTransform: 'capitalize',
    },
});
