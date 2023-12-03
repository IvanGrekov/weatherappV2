import Config from 'react-native-config';

import { ELocationType } from '../../../types/location.types';

export const BASE_URL = 'https://api.locationiq.com/v1/autocomplete';

const LIMIT = 10;
const TAG = `place:${ELocationType.CITY},place:${ELocationType.TOWN}`;
export const BASE_SEARCH_PARAMS = `?key=${Config.LOCATION_API_KEY}&limit=${LIMIT}&tag=${TAG}`;
