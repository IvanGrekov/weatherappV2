import Svg, { Circle, Line, Path } from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { IWeatherIconProps } from './types';

export const ClearDayIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Circle cx="32" cy="32" r="17" fill="#efcc00" />
            <Line
                x1="32"
                x2="32"
                y1="5"
                y2="11"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="32"
                x2="32"
                y1="53"
                y2="59"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="59"
                x2="53"
                y1="32"
                y2="32"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="11"
                x2="5"
                y1="32"
                y2="32"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="51.09"
                x2="46.85"
                y1="12.91"
                y2="17.15"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="17.15"
                x2="12.91"
                y1="46.85"
                y2="51.09"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="51.09"
                x2="46.85"
                y1="51.09"
                y2="46.85"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
            <Line
                x1="17.15"
                x2="12.91"
                y1="17.15"
                y2="12.91"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />
        </Svg>
    );
};

export const ClearNightIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Path
                fill="#efcc00"
                d="M44.54,41.47A23,23,0,0,1,24.49,11.73,1,1,0,0,0,23,10.59,23,23,0,1,0,54.41,42a1,1,0,0,0-1.14-1.47A23.06,23.06,0,0,1,44.54,41.47Z"
            />
        </Svg>
    );
};
