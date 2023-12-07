import Svg, {
    LinearGradient,
    Stop,
    Circle,
    Line,
    Path,
    Defs,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { IWeatherIconProps } from './types';

export const FewCloudsDayIcon = ({
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
                    y1="58.39"
                    y2="31.08"
                    gradientTransform="matrix(-1, 0, 0, 1, 65.8, 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    id="linear-gradient-2"
                    x1="12.25"
                    x2="23.86"
                    y1="56.93"
                    y2="74.58"
                    gradientTransform="matrix(0, -1, -1, 0, 109.04, 59.43)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Circle cx="39.8" cy="28" r="12.59" fill="#efcc00" />

            <Line
                x1="39.8"
                x2="39.8"
                y1="8"
                y2="12.44"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="39.8"
                x2="39.8"
                y1="43.56"
                y2="48"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="19.8"
                x2="24.25"
                y1="28"
                y2="28"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="55.36"
                x2="59.8"
                y1="28"
                y2="28"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="25.66"
                x2="28.8"
                y1="13.86"
                y2="17"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="50.8"
                x2="53.94"
                y1="39"
                y2="42.14"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="25.66"
                x2="28.8"
                y1="42.14"
                y2="39"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Line
                x1="50.8"
                x2="53.94"
                y1="17"
                y2="13.86"
                fill="none"
                stroke="#efcc00"
                strokeLinecap="round"
                strokeWidth="3"
                strokeMiterlimit="10"
            />

            <Path
                fill="url(#linear-gradient)"
                d="M23.5,21.9A17.49,17.49,0,0,1,39,31.22a13.75,13.75,0,1,1,6.92,25.62L23.5,56.9a17.5,17.5,0,0,1,0-35Z"
            />

            <Circle
                fill="url(#linear-gradient-2)"
                cx="45.89"
                cy="43.09"
                r="13.75"
                transform="translate(-7.96 75.69) rotate(-74.39)"
            />
        </Svg>
    );
};

export const FewCloudsNightIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    gradientTransform="matrix(-1, 0, 0, 1, 65.97, 0)"
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient"
                    x1="46.72"
                    x2="25.63"
                    y1="58.39"
                    y2="31.08"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    gradientTransform="matrix(0, -1, -1, 0, 168.93, 51.25)"
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient-2"
                    x1="4.06"
                    x2="15.68"
                    y1="116.66"
                    y2="134.3"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Path
                fill="#efcc00"
                d="M50,26.71A13.88,13.88,0,0,1,37.86,8.77.6.6,0,0,0,37,8.08,13.88,13.88,0,1,0,55.92,27a.6.6,0,0,0-.69-.89A13.91,13.91,0,0,1,50,26.71Z"
            />

            <Path
                fill="url(#linear-gradient)"
                d="M23.66,21.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,56.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
            />

            <Circle
                fill="url(#linear-gradient-2)"
                cx="46.05"
                cy="43.09"
                r="13.75"
                transform="translate(-7.84 75.85) rotate(-74.39)"
            />
        </Svg>
    );
};
