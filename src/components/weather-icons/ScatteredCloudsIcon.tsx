import Svg, {
    Defs,
    LinearGradient,
    Stop,
    Path,
    Circle,
} from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

export const ScatteredCloudsIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient"
                    x1="45.72"
                    x2="24.63"
                    y1="55.39"
                    y2="28.08"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    gradientUnits="userSpaceOnUse"
                    id="linear-gradient-2"
                    x1="14.82"
                    x2="26.43"
                    y1="33.86"
                    y2="51.51"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Path
                fill="url(#linear-gradient)"
                d="M41.3,18.9a17.49,17.49,0,0,0-15.47,9.32,13.75,13.75,0,1,0-6.92,25.62l22.39.06a17.5,17.5,0,0,0,0-35Z"
            />

            <Circle
                fill="url(#linear-gradient-2)"
                cx="18.92"
                cy="40.09"
                r="13.75"
                transform="translate(-10.09 6.57) rotate(-15.61)"
            />
        </Svg>
    );
};
