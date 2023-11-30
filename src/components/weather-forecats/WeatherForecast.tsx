import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style';
import { TLocation } from '../../types/location.types';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

import { useWeatherForecast } from './hooks';

export default function WeatherForecast({
    city,
    state,
    country,
    ...geoLocationProps
}: TLocation): JSX.Element {
    const { weatherForecast, loading, error } =
        useWeatherForecast(geoLocationProps);

    if (loading) {
        return <LoadingIndicator isLoading={loading} />;
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
            <Text>{city}</Text>
            <Text>{state}</Text>
            <Text>{country}</Text>
            <Text>{JSON.stringify(weatherForecast, null, 4)}</Text>
        </VStack>
    );
}
