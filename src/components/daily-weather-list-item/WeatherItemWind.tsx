import { STYLE_VARIABLES } from '../../constants/style.constants';
import { WindIcon } from '../minor-weather-info-icons/WindIcon';
import MinorWeatherInfoItem from '../minor-weather-info-item/MinorWeatherInfoItem';

interface IWeatherItemWindProps {
    windDeg: number;
    windSpeed: number;
}

export default function WeatherItemWind({
    windDeg,
    windSpeed,
}: IWeatherItemWindProps): JSX.Element {
    return (
        <MinorWeatherInfoItem
            value={`${windSpeed} m/s`}
            valueFontSize={STYLE_VARIABLES.xsFontSize}
            icon={
                <WindIcon
                    rotateZ={windDeg}
                    width={STYLE_VARIABLES.xsWeatherIconSize}
                    height={STYLE_VARIABLES.xsWeatherIconSize}
                />
            }
        />
    );
}
