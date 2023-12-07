import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    Circle,
    Polygon,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { IWeatherIconProps } from './types';

export const ThunderstormIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1="342.72"
                    x2="321.63"
                    y1="46.39"
                    y2="19.08"
                    gradientTransform="matrix(-1, 0, 0, 1, 361.97, 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    id="linear-gradient-2"
                    x1="258.02"
                    x2="269.63"
                    y1="139.46"
                    y2="157.11"
                    gradientTransform="matrix(0, -1, -1, 0, 191.73, 293.2)"
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

            <Polygon
                points="33.13 36.35 31 48.6 35.26 48.6 33.13 57.65 43.25 44.87 38.46 44.87 42.72 36.35 33.13 36.35"
                fill="#efcc00"
            />
        </Svg>
    );
};
