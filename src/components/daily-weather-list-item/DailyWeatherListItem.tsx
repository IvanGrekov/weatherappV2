import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IDailyWeather } from '../../types/weatherForecast.types';
import WeatherIcon from '../weather-icons/WeatherIcon';

import WeatherItemDate from './WeatherItemDate';
import WeatherItemTemperature from './WeatherItemTemperature';
import WeatherItemHumidity from './WeatherItemVisibility';
import WeatherItemWind from './WeatherItemWind';

interface IDailyWeatherListItemProps extends IDailyWeather {
    timezone: string;
}

export default function DailyWeatherListItem({
    timeSlot,
    timezone,
    temp,
    weatherDescription,
    windDeg,
    windSpeed,
    humidity,
}: IDailyWeatherListItemProps): JSX.Element {
    const { min, max } = temp;
    const { icon } = weatherDescription;

    return (
        <VStack space={STYLE_VARIABLES.smSpacing} style={styles.container}>
            <WeatherItemDate timeSlot={timeSlot} timezone={timezone} />

            <WeatherItemTemperature maxTemperature={max} minTemperature={min} />

            <WeatherIcon weatherIconCode={icon} />

            <WeatherItemWind windDeg={windDeg} windSpeed={windSpeed} />

            <WeatherItemHumidity humidity={humidity} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
});
