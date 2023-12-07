import { IGeoLocation } from './location.types';

export type TWeatherIconCode =
    | '01d'
    | '01n'
    | '02d'
    | '02n'
    | '03d'
    | '03n'
    | '04d'
    | '04n'
    | '09d'
    | '09n'
    | '10d'
    | '10n'
    | '11d'
    | '11n'
    | '13d'
    | '13n'
    | '50d'
    | '50n';

export interface IWeatherDescription {
    main: string;
    description: string;
    icon: TWeatherIconCode;
}

export interface ICurrentWeather {
    temp: number;
    feelsLike: number;
    pressure: number;
    humidity: number;
    visibility: number;
    windSpeed: number;
    weatherDescription: IWeatherDescription;
}

export interface IDailyWeatherTemp {
    morning: number;
    day: number;
    evening: number;
    night: number;
}

export interface IDailyWeatherFeelsLike {
    morning: number;
    day: number;
    evening: number;
    night: number;
}

export interface IDailyWeather {
    temp: IDailyWeatherTemp;
    feelsLike: IDailyWeatherFeelsLike;
    pressure: number;
    humidity: number;
    windSpeed: number;
    weatherDescription: IWeatherDescription;
}

export interface IWeatherForecast extends IGeoLocation {
    timezone: string;
    timezoneOffset: number;
    current: ICurrentWeather;
    daily: IDailyWeather[];
}

export interface IApiCurrentWeather {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    visibility: number;
    wind_speed: number;
    weather: IWeatherDescription[];
}

export interface IApiDailyWeather {
    temp: {
        morn: number;
        day: number;
        eve: number;
        night: number;
    };
    feels_like: {
        morn: number;
        day: number;
        eve: number;
        night: number;
    };
    pressure: number;
    humidity: number;
    wind_speed: number;
    weather: IWeatherDescription[];
}

export interface IApiWeatherForecast {
    timezone: string;
    timezone_offset: number;
    current: IApiCurrentWeather;
    daily: IApiDailyWeather[];
}
