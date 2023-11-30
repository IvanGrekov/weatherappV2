import { useEffect, useState } from 'react';

import { getWeatherForecast } from '../../../api/weatherForecast';
import { IGeoLocation } from '../../../types/location.types';
import { IWeatherForecast } from '../../../types/weatherForecast.types';

type TWeatherForecastState = IWeatherForecast | null;

type TUseWeatherForecast = (args: IGeoLocation) => {
    weatherForecast: TWeatherForecastState;
    loading: boolean;
    error: string;
};

export const useWeatherForecast: TUseWeatherForecast = ({
    latitude,
    longitude,
}) => {
    const [weatherForecast, setWeatherForecast] =
        useState<TWeatherForecastState>(null);
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

    return {
        weatherForecast,
        loading,
        error,
    };
};
