import GetLocation from 'react-native-get-location';

import { IApiError } from '../types/api.types';
import { IGeoLocation } from '../types/geoLocation.types';

export const getLocation = (): Promise<IGeoLocation | IApiError> => {
    return GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
    })
        .then(({ latitude, longitude }) => ({
            latitude,
            longitude,
        }))
        .catch(({ message }) => ({
            errorMessage: message as string,
        }));
};
