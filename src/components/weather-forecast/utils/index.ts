import { getWeatherForecast as getWeatherForecastQuery } from '../../../api/weatherForecast';
import { IGeoLocation } from '../../../types/location.types';
import { weatherCache } from '../constants';

export const getWeatherCacheKey = ({
    latitude,
    longitude,
}: IGeoLocation): string => `${latitude}${longitude}`;

type TGetWeatherForecast = (args: {
    latitude: number;
    longitude: number;
    abortController: AbortController;
    cacheKey: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    setWeatherForecast: (weatherForecast: any) => void;
}) => void;

export const getWeatherForecast: TGetWeatherForecast = ({
    latitude,
    longitude,
    abortController,
    cacheKey,
    setLoading,
    setError,
    setWeatherForecast,
}) => {
    setLoading(true);
    getWeatherForecastQuery({ latitude, longitude, abortController })
        .then((data) => {
            if ('errorMessage' in data) {
                return setError(data.errorMessage);
            }

            setWeatherForecast(data);
            weatherCache.set(cacheKey, data);
        })
        .finally(() => {
            setLoading(false);
        });
};
