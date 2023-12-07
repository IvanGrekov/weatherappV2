import Config from 'react-native-config';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';
export const BASE_SEARCH_PARAMS = `?appid=${Config.WEATHER_API_KEY}&exclude=minutely,hourly&units=metric&lang=en&units=metric`;
