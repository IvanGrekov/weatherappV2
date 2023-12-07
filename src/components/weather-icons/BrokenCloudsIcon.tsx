import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { IWeatherIconProps } from './types';

export const BrokenCloudsIcon = ({
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
            </Defs>

            <Path
                fill="url(#linear-gradient)"
                d="M41.3,18.9a17.49,17.49,0,0,0-15.47,9.32,13.75,13.75,0,1,0-6.92,25.62l22.39.06a17.5,17.5,0,0,0,0-35Z"
                transform="scale(0.75) translate(22, -13)"
            />

            <Path
                fill="url(#linear-gradient)"
                d="M41.3,18.9a17.49,17.49,0,0,0-15.47,9.32,13.75,13.75,0,1,0-6.92,25.62l22.39.06a17.5,17.5,0,0,0,0-35Z"
                transform="scale(0.9)"
            />
        </Svg>
    );
};
