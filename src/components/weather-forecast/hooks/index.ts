import { useEffect, useState } from 'react';

import { IGeoLocation } from '../../../types/location.types';
import { weatherCache } from '../constants';
import { TWeatherForecastState } from '../types';
import {
    getWeatherCacheKey,
    getWeatherForecast,
} from '../utils/getWeatherForecast.utils';

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
    const [weatherForecast, setWeatherForecast] =
        useState<TWeatherForecastState>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (
            weatherForecast?.latitude === latitude &&
            weatherForecast.longitude === longitude
        ) {
            return;
        }

        const cacheKey = getWeatherCacheKey({ latitude, longitude });
        const cachedWeatherForecast = weatherCache.get(cacheKey);
        if (cachedWeatherForecast) {
            return setWeatherForecast(cachedWeatherForecast);
        }

        getWeatherForecast({
            latitude,
            longitude,
            abortController,
            cacheKey,
            setLoading,
            setError,
            setWeatherForecast,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [weatherForecast, latitude, longitude]);

    return {
        weatherForecast,
        loading,
        error,
    };
};
