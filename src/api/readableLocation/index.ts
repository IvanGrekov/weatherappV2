import { IApiError } from '../../types/api.types';
import { IGeoLocation, IReadableLocation } from '../../types/location.types';

import { BASE_URL, BASE_SEARCH_PARAMS } from './constants';

type TGetReadableLocation = (
    args: IGeoLocation,
) => Promise<IReadableLocation | IApiError>;

export const getReadableLocation: TGetReadableLocation = async ({
    latitude,
    longitude,
}) => {
    const url = `${BASE_URL}${BASE_SEARCH_PARAMS}&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url);
        const parsedResponse = await response.json();

        if ('error' in parsedResponse) {
            throw parsedResponse.error;
        }

        const { city, state, country } = parsedResponse.address;

        return {
            city,
            state,
            country,
        };
    } catch (errorMessage) {
        return {
            errorMessage,
        };
    }
};
