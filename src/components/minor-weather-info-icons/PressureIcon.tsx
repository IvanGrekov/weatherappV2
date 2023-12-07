import Svg, { Path, Rect } from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

export const PressureIcon = ({
    width = STYLE_VARIABLES.smallWeatherIconSize,
    height = STYLE_VARIABLES.smallWeatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 35 35"
            transform="translate(5, 1)"
        >
            <Path
                fill={STYLE_VARIABLES.fgColor}
                d="M22,30H10V25H6l10-9,10,9H22Z"
            />
            <Path fill={STYLE_VARIABLES.fgColor} d="M16,16,6,7h4V2H22V7h4Z" />
            <Rect width="32" height="32" fill="none" />
        </Svg>
    );
};
