import { useEffect, useState } from 'react';

import { VStack, Text } from 'native-base';

import { getWeatherForecast } from '../../api/weatherForecast';
import { STYLE_VARIABLES } from '../../constants/style';
import { TLocation } from '../../types/location.types';
import { IWeatherForecast } from '../../types/weatherForecast.types';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';

export default function WeatherForecast({
    city,
    state,
    country,
    latitude,
    longitude,
}: TLocation): JSX.Element {
    const [weatherForecast, setWeatherForecast] =
        useState<null | IWeatherForecast>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getWeatherForecast({ latitude, longitude })
            .then((data) => {
                if ('errorMessage' in data) {
                    return setError(data.errorMessage);
                }

                setWeatherForecast(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [latitude, longitude]);

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
            <Text>{latitude}</Text>
            <Text>{longitude}</Text>
            <Text>{JSON.stringify(weatherForecast, null, 4)}</Text>
        </VStack>
    );
}
