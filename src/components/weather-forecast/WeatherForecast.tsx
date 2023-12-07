import { StyleSheet } from 'react-native';

import { VStack, HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { TLocation } from '../../types/location.types';
import CurrentWeather from '../current-weather/CurrentWeather';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import WeatherForecastCurrentTime from '../weather-forecast-current-time/WeatherForecastCurrentTime';
import WeatherForecastLocation from '../weather-forecast-location/WeatherForecastLocation';

import { useWeatherForecast } from './hooks';

export default function WeatherForecast(location: TLocation): JSX.Element {
    const { weatherForecast, isLoading, error } = useWeatherForecast(location);

    if (isLoading) {
        return <LoadingIndicator isLoading={isLoading} />;
    }

    if (error) {
        return <ErrorIndicator error={error} />;
    }

    if (!weatherForecast) {
        return (
            <EmptyStateIndicator text="No weather forecast data available" />
        );
    }

    const { timezone, current } = weatherForecast;

    return (
        <VStack style={styles.container}>
            <HStack
                space={STYLE_VARIABLES.smSpacing}
                style={styles.locationInfo}
            >
                <WeatherForecastLocation {...location} />
                <WeatherForecastCurrentTime timezone={timezone} />
            </HStack>

            <CurrentWeather {...current} />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: STYLE_VARIABLES.xsPadding,
        paddingVertical: STYLE_VARIABLES.smPadding,
    },
    locationInfo: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
