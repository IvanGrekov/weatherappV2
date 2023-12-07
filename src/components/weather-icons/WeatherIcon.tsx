import { TWeatherIconCode } from '../../types/weatherForecast.types';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

import { getWeatherIcon } from './utils';

type TWeatherIconProps = IWeatherIconProps & {
    weatherIconCode: TWeatherIconCode;
};

export default function WeatherIcon({
    weatherIconCode,
    ...props
}: TWeatherIconProps): JSX.Element {
    const Component = getWeatherIcon(weatherIconCode);

    return <Component {...props} />;
}
