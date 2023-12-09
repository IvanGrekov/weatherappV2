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
        wind_speed,
        wind_deg,
        weather,
    }) => {
        return {
            temp,
            feelsLike: feels_like,
            humidity,
            pressure,
            visibility,
            windSpeed: wind_speed,
            windDeg: wind_deg,
            weatherDescription: weather[0],
        };
    };

type TConvertApiDailyWeatherToDailyWeather = (
    apiDailyWeather: IApiDailyWeather,
) => IDailyWeather;

const convertApiDailyWeatherToDailyWeather: TConvertApiDailyWeatherToDailyWeather =
    ({
        dt,
        temp,
        feels_like,
        humidity,
        pressure,
        wind_speed,
        wind_deg,
        weather,
    }) => {
        const {
            morn: morningTemp,
            day: dayTemp,
            eve: eveningTemp,
            night: nightTemp,
            min: minTemp,
            max: maxTemp,
        } = temp;
        const {
            morn: morningFeelsLike,
            day: dayFeelsLike,
            eve: eveningFeelsLike,
            night: nightFeelsLike,
        } = feels_like;

        return {
            timeSlot: dt * 1000,
            temp: {
                morning: morningTemp,
                day: dayTemp,
                evening: eveningTemp,
                night: nightTemp,
                min: minTemp,
                max: maxTemp,
            },
            feelsLike: {
                morning: morningFeelsLike,
                day: dayFeelsLike,
                evening: eveningFeelsLike,
                night: nightFeelsLike,
            },
            humidity,
            pressure,
            windDeg: wind_deg,
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
