import { IApiError } from '../../types/api.types';
import { IGeoLocation } from '../../types/location.types';
import { IWeatherForecast } from '../../types/weatherForecast.types';

import { BASE_URL, BASE_SEARCH_PARAMS } from './constants';
import { convertApiWeatherForecastToWeatherForecast } from './utils';

type TGetWeatherForecast = (
    args: IGeoLocation & {
        abortController?: AbortController;
    },
) => Promise<IWeatherForecast | IApiError>;

export const getWeatherForecast: TGetWeatherForecast = async ({
    latitude,
    longitude,
    abortController,
}) => {
    const url = `${BASE_URL}${BASE_SEARCH_PARAMS}&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url, {
            signal: abortController?.signal,
        });
        const parsedResponse = await response.json();

        if (parsedResponse.cod) {
            throw parsedResponse.message;
        }

        return convertApiWeatherForecastToWeatherForecast({
            latitude,
            longitude,
            apiWeatherForecast: parsedResponse,
        });
    } catch (errorMessage) {
        return {
            errorMessage,
        };
    }
};
