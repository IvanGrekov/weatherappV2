import { STYLE_VARIABLES } from '../../constants/style.constants';
import { HumidityIcon } from '../minor-weather-info-icons/HumidityIcon';
import MinorWeatherInfoItem from '../minor-weather-info-item/MinorWeatherInfoItem';

interface IWeatherItemHumidityProps {
    humidity: number;
}

export default function WeatherItemHumidity({
    humidity,
}: IWeatherItemHumidityProps): JSX.Element {
    return (
        <MinorWeatherInfoItem
            value={`${humidity}%`}
            valueFontSize={STYLE_VARIABLES.xsFontSize}
            icon={
                <HumidityIcon
                    width={STYLE_VARIABLES.xsWeatherIconSize}
                    height={STYLE_VARIABLES.xsWeatherIconSize}
                />
            }
        />
    );
}
