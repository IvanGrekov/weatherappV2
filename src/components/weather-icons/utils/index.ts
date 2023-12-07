import { TWeatherIconCode } from '../../../types/weatherForecast.types';
import { BrokenCloudsIcon } from '../BrokenCloudsIcon';
import { ClearDayIcon, ClearNightIcon } from '../ClearIcon';
import { FewCloudsDayIcon, FewCloudsNightIcon } from '../FewCloudsIcon';
import { MistIcon } from '../MistIcon';
import { RainDayIcon, RainNightIcon } from '../RainIcon';
import { ScatteredCloudsIcon } from '../ScatteredCloudsIcon';
import { ShowerRainIcon } from '../ShowerRainIcon';
import { SnowIcon } from '../SnowIcon';
import { ThunderstormIcon } from '../ThunderstormIcon';
import { IWeatherIconProps } from '../types';

export const getWeatherIcon = (
    weatherIcon: TWeatherIconCode,
): ((props: IWeatherIconProps) => JSX.Element) => {
    switch (weatherIcon) {
        case '01d':
            return ClearDayIcon;
        case '01n':
            return ClearNightIcon;
        case '02d':
            return FewCloudsDayIcon;
        case '02n':
            return FewCloudsNightIcon;
        case '03d':
        case '03n':
            return ScatteredCloudsIcon;
        case '04d':
        case '04n':
            return BrokenCloudsIcon;
        case '09d':
        case '09n':
            return ShowerRainIcon;
        case '10d':
            return RainDayIcon;
        case '10n':
            return RainNightIcon;
        case '11d':
        case '11n':
            return ThunderstormIcon;
        case '13d':
        case '13n':
            return SnowIcon;
        case '50d':
        case '50n':
            return MistIcon;
        default:
            return ClearDayIcon;
    }
};
