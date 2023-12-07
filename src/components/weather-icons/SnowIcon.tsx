import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    Circle,
    Line,
    Polyline,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { IWeatherIconProps } from './types';

export const SnowIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1="46.72"
                    x2="25.63"
                    y1="46.39"
                    y2="19.08"
                    gradientTransform="matrix(-1, 0, 0, 1, 65.97, 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    id="linear-gradient-2"
                    x1="-52.44"
                    x2="-40.82"
                    y1="96.91"
                    y2="114.56"
                    gradientTransform="matrix(0, -1, -1, 0, 149.19, -17.25)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Path
                d="M23.66,9.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,44.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
                fill="url(#linear-gradient)"
            />

            <Circle
                cx="46.05"
                cy="31.09"
                r="13.75"
                fill="url(#linear-gradient-2)"
                transform="translate(3.72 67.08) rotate(-74.39)"
            />

            <Line
                x1="32.13"
                x2="32.13"
                y1="27.1"
                y2="37.23"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="33.3 25.79 32.13 27.26 30.95 25.79"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="30.95 38.55 32.13 37.08 33.3 38.55"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Line
                x1="36.51"
                x2="27.74"
                y1="29.63"
                y2="34.7"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="38.24 30 36.38 29.71 37.06 27.96"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="26.01 34.34 27.87 34.62 27.19 36.38"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Line
                x1="36.51"
                x2="27.74"
                y1="34.7"
                y2="29.63"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="37.06 36.38 36.38 34.62 38.24 34.34"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <Polyline
                points="27.19 27.96 27.87 29.71 26.01 30"
                stroke="#9c9fa0"
                strokeWidth={2}
                strokeLinecap="round"
            />

            <Circle cx="26.5" cy="52.63" r="2" fill="#c4c4c4" />
            <Circle cx="36.5" cy="55.63" r="1.5" fill="#e0e0e0" />
            <Circle cx="18.5" cy="48.63" r="1.5" fill="#e0e0e0" />
            <Circle cx="32.5" cy="48.63" r="1" fill="#fff" />
            <Circle cx="46.5" cy="55.63" r="1" fill="#fff" />
            <Circle cx="17.5" cy="55.63" r="1" fill="#fff" />
            <Circle cx="42.5" cy="49.63" r="2" fill="#c4c4c4" />
        </Svg>
    );
};
