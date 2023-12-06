// import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

// import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import CurrentTemperature from '../current-temperature/CurrentTemperature';

export default function CurrentWeather({
    temp,
    feelsLike,
    humidity,
    pressure,
    visibility,
    windSpeed,
    weatherDescription,
}: ICurrentWeather): JSX.Element {
    humidity;
    pressure;
    visibility;
    windSpeed;
    weatherDescription;

    return (
        <VStack>
            <CurrentTemperature temp={temp} feelsLike={feelsLike} />
        </VStack>
    );
}

// const styles = StyleSheet.create({
// });
