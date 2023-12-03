import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { TLocation } from '../../types/location.types';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

import { useWeatherForecast } from './hooks';
import { getTime, getDate } from './utils/date.utils';

export default function WeatherForecast({
    name,
    country,
    ...geoLocationProps
}: TLocation): JSX.Element {
    const { weatherForecast, isLoading, error } =
        useWeatherForecast(geoLocationProps);

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

    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <Text>{name}</Text>
            <Text>{country}</Text>
            <Text>{getTime(weatherForecast.timezone)}</Text>
            <Text>{getDate(weatherForecast.timezone)}</Text>
            <Text>{weatherForecast.current.temp}</Text>
        </VStack>
    );
}
