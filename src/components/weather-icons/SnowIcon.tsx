import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    Circle,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

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

            <Circle cx="10.5" cy="50.63" r="1" fill="#fff" />
            <Circle cx="12.5" cy="45.63" r="1.5" fill="#fff" />
            <Circle cx="26.5" cy="52.63" r="2" fill="#fff" />
            <Circle cx="36.5" cy="55.63" r="1.5" fill="#fff" />
            <Circle cx="18.5" cy="48.63" r="1.5" fill="#fff" />
            <Circle cx="32.5" cy="48.63" r="1" fill="#fff" />
            <Circle cx="46.5" cy="55.63" r="1" fill="#fff" />
            <Circle cx="17.5" cy="55.63" r="1" fill="#fff" />
            <Circle cx="42.5" cy="49.63" r="2" fill="#fff" />
            <Circle cx="50.5" cy="47.63" r="2" fill="#fff" />
            <Circle cx="27.5" cy="58.63" r="1" fill="#fff" />
        </Svg>
    );
};
