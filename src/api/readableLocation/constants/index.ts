import Config from 'react-native-config';

export const BASE_URL = 'https://us1.locationiq.com/v1/reverse.php';

const ZOOM = 10;
const FORMAT = 'json';
export const BASE_SEARCH_PARAMS = `?key=${Config.LOCATION_API_KEY}&zoom=${ZOOM}&format=${FORMAT}`;
