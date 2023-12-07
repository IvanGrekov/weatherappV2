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

export const RainDayIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1="-693.28"
                    x2="-714.37"
                    y1="52.39"
                    y2="25.08"
                    gradientTransform="matrix(-1, 0, 0, 1, -674.2, 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    id="linear-gradient-2"
                    x1="-712.5"
                    x2="-700.88"
                    y1="-48.39"
                    y2="-30.75"
                    gradientTransform="matrix(0, -1, -1, 0, 3.72, -671.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Circle cx="39.8" cy="22" r="12.59" fill="#efcc00" />

            {[
                { x1: '39.8', x2: '39.8', y1: '2', y2: '6.44' },
                { x1: '39.8', x2: '39.8', y1: '37.56', y2: '42' },
                { x1: '19.8', x2: '24.25', y1: '22', y2: '22' },
                { x1: '55.36', x2: '59.8', y1: '22', y2: '22' },
                { x1: '25.66', x2: '28.8', y1: '7.86', y2: '11' },
                { x1: '50.8', x2: '53.94', y1: '33', y2: '36.14' },
                { x1: '25.66', x2: '28.8', y1: '36.14', y2: '33' },
                { x1: '50.8', x2: '53.94', y1: '11', y2: '7.86' },
            ].map((line, index) => (
                <Line
                    key={index}
                    {...line}
                    stroke="#efcc00"
                    strokeWidth={3}
                    strokeLinecap="round"
                />
            ))}

            <Path
                d="M23.5,15.9A17.49,17.49,0,0,1,39,25.22a13.75,13.75,0,1,1,6.92,25.62L23.5,50.9a17.5,17.5,0,0,1,0-35Z"
                fill="url(#linear-gradient)"
            />

            <Circle
                cx="45.89"
                cy="37.09"
                r="13.75"
                fill="url(#linear-gradient-2)"
                transform="translate(-2.18 71.3) rotate(-74.39)"
            />

            {[
                { x1: '32.5', x2: '32.5', y1: '55.5', y2: '56.5' },
                { x1: '26.5', x2: '26.5', y1: '53.5', y2: '54.5' },
                { x1: '38.5', x2: '38.5', y1: '53.5', y2: '54.5' },
                { x1: '38.5', x2: '38.5', y1: '59.5', y2: '60.5' },
                { x1: '26.5', x2: '26.5', y1: '59.5', y2: '60.5' },
                { x1: '32.5', x2: '32.5', y1: '61.5', y2: '62.5' },
            ].map((line, index) => (
                <Line
                    key={index}
                    {...line}
                    stroke="#0baeff"
                    strokeWidth={3}
                    strokeLinecap="round"
                />
            ))}
        </Svg>
    );
};

export const RainNightIcon = ({
    width = STYLE_VARIABLES.weatherIconSize,
    height = STYLE_VARIABLES.weatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg viewBox="0 0 64 64" width={width} height={height}>
            <Defs>
                <LinearGradient
                    id="linear-gradient"
                    x1="-397.28"
                    x2="-418.37"
                    y1="52.39"
                    y2="25.08"
                    gradientTransform="matrix(-1, 0, 0, 1, -378.03, 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0" stopColor="#f2f2f2" />
                    <Stop offset="1" stopColor="#cfcfcf" />
                </LinearGradient>

                <LinearGradient
                    id="linear-gradient-2"
                    x1="-430.14"
                    x2="-418.52"
                    y1="51.15"
                    y2="68.8"
                    gradientTransform="matrix(0, -1, -1, 0, 103.42, -388.95)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset="0.02" stopColor="#fff" />
                    <Stop offset="1" stopColor="#fff" stopOpacity="0" />
                </LinearGradient>
            </Defs>

            <Path
                d="M50,20.71A13.88,13.88,0,0,1,37.86,2.77.6.6,0,0,0,37,2.08,13.88,13.88,0,1,0,55.92,21a.6.6,0,0,0-.69-.89A13.91,13.91,0,0,1,50,20.71Z"
                fill="#efcc00"
            />

            <Path
                d="M23.66,15.9a17.49,17.49,0,0,1,15.47,9.32A13.75,13.75,0,1,1,46,50.84l-22.39.06a17.5,17.5,0,0,1,0-35Z"
                fill="url(#linear-gradient)"
            />

            <Circle
                cx="46.05"
                cy="37.09"
                r="13.75"
                fill="url(#linear-gradient-2)"
                transform="translate(-2.06 71.46) rotate(-74.39)"
            />

            {[
                { x1: '32.5', x2: '32.5', y1: '55.5', y2: '56.5' },
                { x1: '26.5', x2: '26.5', y1: '53.5', y2: '54.5' },
                { x1: '38.5', x2: '38.5', y1: '53.5', y2: '54.5' },
                { x1: '38.5', x2: '38.5', y1: '59.5', y2: '60.5' },
                { x1: '26.5', x2: '26.5', y1: '59.5', y2: '60.5' },
                { x1: '32.5', x2: '32.5', y1: '61.5', y2: '62.5' },
            ].map((line, index) => (
                <Line
                    key={index}
                    {...line}
                    stroke="#0baeff"
                    strokeWidth={3}
                    strokeLinecap="round"
                />
            ))}
        </Svg>
    );
};
