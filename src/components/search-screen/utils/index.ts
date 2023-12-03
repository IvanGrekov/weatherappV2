import { getLocationAutocomplete as getLocationAutocompleteQuery } from '../../../api/locationAutocomplete';
import { TLocation } from '../../../types/location.types';

type TGetLocationAutocomplete = (args: {
    query: string;
    abortController?: AbortController;
    setData: (data: TLocation[] | null) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string) => void;
}) => void;

export const getLocationAutocomplete: TGetLocationAutocomplete = ({
    query,
    abortController,
    setData,
    setIsLoading,
    setError,
}) => {
    if (!query) {
        return setData(null);
    }

    setIsLoading(true);
    getLocationAutocompleteQuery({ query, abortController })
        .then((response) => {
            if ('errorMessage' in response) {
                if (response.errorMessage === 'Unable to geocode') {
                    setData([]);
                } else {
                    setError(response.errorMessage);
                }

                return;
            }

            setData(response);
        })
        .catch(() => {
            setError('Something went wrong');
        })
        .finally(() => {
            setIsLoading(false);
        });
};
