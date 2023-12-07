import { IGeoLocation } from '../../../types/location.types';
import {
    IApiWeatherForecast,
    IWeatherForecast,
    IApiCurrentWeather,
    ICurrentWeather,
    IApiDailyWeather,
    IDailyWeather,
} from '../../../types/weatherForecast.types';

type TConvertApiCurrentWeatherToCurrentWeather = (
    apiCurrentWeather: IApiCurrentWeather,
) => ICurrentWeather;

const convertApiCurrentWeatherToCurrentWeather: TConvertApiCurrentWeatherToCurrentWeather =
    ({
        temp,
        feels_like,
        humidity,
        pressure,
        visibility,
        wind_deg,
        wind_speed,
        weather,
    }) => {
        return {
            temp,
            feelsLike: feels_like,
            humidity,
            pressure,
            visibility,
            windDeg: wind_deg,
            windSpeed: wind_speed,
            weatherDescription: weather[0],
        };
    };

type TConvertApiDailyWeatherToDailyWeather = (
    apiDailyWeather: IApiDailyWeather,
) => IDailyWeather;

const convertApiDailyWeatherToDailyWeather: TConvertApiDailyWeatherToDailyWeather =
    ({ temp, feels_like, humidity, pressure, wind_speed, weather }) => {
        const {
            morn: morningTemp,
            day: dayTemp,
            eve: eveningTemp,
            night: nightTemp,
        } = temp;
        const {
            morn: morningFeelsLike,
            day: dayFeelsLike,
            eve: eveningFeelsLike,
            night: nightFeelsLike,
        } = feels_like;

        return {
            temp: {
                morning: morningTemp,
                day: dayTemp,
                evening: eveningTemp,
                night: nightTemp,
            },
            feelsLike: {
                morning: morningFeelsLike,
                day: dayFeelsLike,
                evening: eveningFeelsLike,
                night: nightFeelsLike,
            },
            humidity,
            pressure,
            windSpeed: wind_speed,
            weatherDescription: weather[0],
        };
    };

type TConvertApiWeatherForecastToWeatherForecast = (
    args: IGeoLocation & {
        apiWeatherForecast: IApiWeatherForecast;
    },
) => IWeatherForecast;

export const convertApiWeatherForecastToWeatherForecast: TConvertApiWeatherForecastToWeatherForecast =
    ({ apiWeatherForecast, latitude, longitude }) => {
        const { timezone, timezone_offset, current, daily } =
            apiWeatherForecast;
        const convertedCurrent =
            convertApiCurrentWeatherToCurrentWeather(current);
        const convertedDaily = daily.map(convertApiDailyWeatherToDailyWeather);

        return {
            latitude,
            longitude,
            timezone,
            timezoneOffset: timezone_offset,
            current: convertedCurrent,
            daily: convertedDaily,
        };
    };
