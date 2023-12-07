import Svg, { Line } from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

export const MistIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Line
                x1="16.5"
                x2="29.5"
                y1="17.5"
                y2="17.5"
                stroke="#b9c1c6"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="9.5"
                x2="22.5"
                y1="22.5"
                y2="22.5"
                stroke="#b9c1c6"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="6.5"
                x2="55.5"
                y1="27.5"
                y2="27.5"
                stroke="#b9c1c6"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="6.5"
                x2="31.5"
                y1="32.5"
                y2="32.5"
                stroke="#b9c1c6"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="28.5"
                x2="35.5"
                y1="22.5"
                y2="22.5"
                stroke="#b9c1c6"
                strokeWidth={3}
                strokeLinecap="round"
            />

            <Line
                x1="39.5"
                x2="57.5"
                y1="32.5"
                y2="32.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="30.5"
                x2="56.5"
                y1="37.5"
                y2="37.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="15.5"
                x2="52.5"
                y1="42.5"
                y2="42.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="25.5"
                x2="42.5"
                y1="47.5"
                y2="47.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="8.5"
                x2="23.5"
                y1="37.5"
                y2="37.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
            <Line
                x1="45.5"
                x2="52.5"
                y1="22.5"
                y2="22.5"
                stroke="#a5a9aa"
                strokeWidth={3}
                strokeLinecap="round"
            />
        </Svg>
    );
};
