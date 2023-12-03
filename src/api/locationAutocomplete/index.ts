import { IApiError } from '../../types/api.types';
import { TLocation } from '../../types/location.types';

import { BASE_URL, BASE_SEARCH_PARAMS } from './constants';
import { convertApiLocationAutocompleteToLocationAutocomplete } from './utils';

type TGetLocationAutocomplete = (args: {
    query: string;
    abortController?: AbortController;
}) => Promise<TLocation[] | IApiError>;

export const getLocationAutocomplete: TGetLocationAutocomplete = async ({
    query,
    abortController,
}) => {
    const url = `${BASE_URL}${BASE_SEARCH_PARAMS}&q=${query}`;

    try {
        const response = await fetch(url, {
            signal: abortController?.signal,
        });
        const parsedResponse = await response.json();

        if ('error' in parsedResponse) {
            throw parsedResponse.error;
        }

        return convertApiLocationAutocompleteToLocationAutocomplete(
            parsedResponse,
        );
    } catch (errorMessage) {
        return {
            errorMessage,
        };
    }
};
