import Svg, { Path } from 'react-native-svg';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherIconProps } from '../../types/weatherIcon.types';

export const VisibilityIcon = ({
    width = STYLE_VARIABLES.smallWeatherIconSize,
    height = STYLE_VARIABLES.smallWeatherIconSize,
}: IWeatherIconProps): JSX.Element => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 25 25"
            transform="translate(0, 1)"
        >
            <Path
                fill={STYLE_VARIABLES.fgColor}
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
            />
        </Svg>
    );
};
