import { StyleSheet } from 'react-native';

import { HStack, VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import CurrentTemperature from '../current-temperature/CurrentTemperature';
import CurrentWeatherDescription from '../current-weather-description/CurrentWeatherDescription';

export default function CurrentWeather({
    temp,
    feelsLike,
    humidity,
    pressure,
    visibility,
    windSpeed,
    weatherDescription,
}: ICurrentWeather): JSX.Element {
    return (
        <VStack space={STYLE_VARIABLES.mdSpacing}>
            <HStack style={styles.mainInfoWrapper}>
                <CurrentTemperature temp={temp} feelsLike={feelsLike} />
                <CurrentWeatherDescription {...weatherDescription} />
            </HStack>

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
    mainInfoWrapper: {
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 60,
    },
});
