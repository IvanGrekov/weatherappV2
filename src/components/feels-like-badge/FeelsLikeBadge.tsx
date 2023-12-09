import { StyleSheet } from 'react-native';

import { Badge } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import {
    roundTemperature,
    getTemperatureColor,
} from '../../utils/weather.utils';

interface IFeelsLikeBadgeProps {
    value: number;
    isShort?: boolean;
}

export default function FeelsLikeBadge({
    value,
    isShort,
}: IFeelsLikeBadgeProps): JSX.Element {
    const feelsLikeTemperature = roundTemperature(value);
    const feelsLikeColor = getTemperatureColor(feelsLikeTemperature);

    const description = isShort ? '' : 'Feels like ';

    return (
        <Badge
            variant="solid"
            backgroundColor={feelsLikeColor}
            _text={styles.feelsLike}
            style={styles.feelsLikeBadge}
        >
            {`${description}${feelsLikeTemperature}°`}
        </Badge>
    );
}

const styles = StyleSheet.create({
    feelsLikeBadge: {
        borderRadius: STYLE_VARIABLES.mdRadius,
    },
    feelsLike: {
        fontSize: STYLE_VARIABLES.smFontSize,
        color: STYLE_VARIABLES.bgColor,
    },
});
