import { StyleSheet } from 'react-native';

import { VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

import { getTime, getDate } from './utils/date.utils';

interface IWeatherForecastCurrentTimeProps {
    timezone: string;
}

export default function WeatherForecastCurrentTime({
    timezone,
}: IWeatherForecastCurrentTimeProps): JSX.Element {
    return (
        <VStack style={styles.container}>
            <Text>{getDate(timezone)}</Text>
            <Text style={styles.time}>{getTime(timezone)}</Text>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: STYLE_VARIABLES.xsFontSize,
    },
    time: {
        fontSize: STYLE_VARIABLES.mdFontSize,
    },
});
