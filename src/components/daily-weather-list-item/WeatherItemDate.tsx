import { StyleSheet } from 'react-native';

import { Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { getTimeZonedDate } from '../../utils/date.utils';

interface IWeatherItemDateProps {
    timeSlot: number;
    timezone: string;
}

export default function WeatherItemDate({
    timeSlot,
    timezone,
}: IWeatherItemDateProps): JSX.Element {
    return (
        <Text style={styles.date}>
            {getTimeZonedDate({
                timeSlot: timeSlot,
                timezone,
            })}
        </Text>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: STYLE_VARIABLES.mdFontSize,
        fontWeight: 'bold',
    },
});
