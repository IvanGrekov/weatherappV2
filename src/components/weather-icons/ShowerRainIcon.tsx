import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Line,
    Path,
    Circle,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

export const ShowerRainIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    gradientTransform="matrix(-1, 0, 0, 1, -82.03, 0)"
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient"
                    x1="-101.28"
                    x2="-122.37"
                    y1="46.39"
                    y2="19.08"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    gradientTransform="matrix(0, -1, -1, 0, 134.73, -122.7)"
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient-2"
                    x1="-157.89"
                    x2="-146.27"
                    y1="82.46"
                    y2="100.11"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Line
                x1="32.5"
                x2="32.5"
                y1="50.5"
                y2="57.5"
                fill="none"
                stroke="#0baeff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />

            <Line
                x1="26.5"
                x2="26.5"
                y1="48.5"
                y2="55.5"
                fill="none"
                stroke="#0baeff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />

            <Line
                x1="38.5"
                x2="38.5"
                y1="48.5"
                y2="55.5"
                fill="none"
                stroke="#0baeff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="3px"
            />

            <Path
                fill="url(#linear-gradient)"
                d="M23.66,9.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,44.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
            />

            <Circle
                fill="url(#linear-gradient-2)"
                cx="46.05"
                cy="31.09"
                r="13.75"
                transform="translate(3.72 67.08) rotate(-74.39)"
            />
        </Svg>
    );
};
