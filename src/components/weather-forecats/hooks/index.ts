import { useEffect, useState } from 'react';

import { useIsFocused } from '@react-navigation/native';

import { getWeatherForecast } from '../../../api/weatherForecast';
import { IGeoLocation } from '../../../types/location.types';
import { IWeatherForecast } from '../../../types/weatherForecast.types';

type TWeatherForecastState = IWeatherForecast | null;

type TUseWeatherForecast = (args: IGeoLocation) => {
    weatherForecast: TWeatherForecastState;
    loading: boolean;
    error: string;
};

let abortController = new AbortController();

export const useWeatherForecast: TUseWeatherForecast = ({
    latitude,
    longitude,
}) => {
    const isFocused = useIsFocused();

    const [weatherForecast, setWeatherForecast] =
        useState<TWeatherForecastState>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isFocused) {
            setWeatherForecast(null);
            setLoading(false);
            setError('');

            return;
        }

        setLoading(true);
        getWeatherForecast({ latitude, longitude, abortController })
            .then((data) => {
                if ('errorMessage' in data) {
                    return setError(data.errorMessage);
                }

                setWeatherForecast(data);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [isFocused, latitude, longitude]);

    return {
        weatherForecast,
        loading,
        error,
    };
};
