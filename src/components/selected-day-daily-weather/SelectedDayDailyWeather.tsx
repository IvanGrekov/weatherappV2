import { StyleSheet } from 'react-native';

import { HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IDailyWeather } from '../../types/weatherForecast.types';

import TemperatureItem from './TemperatureItem';

export default function SelectedDayDailyWeather({
    temp,
    feelsLike,
}: IDailyWeather): JSX.Element {
    const { morning, day, evening, night } = temp;
    const {
        morning: feelsLikeMorning,
        day: feelsLikeDay,
        evening: feelsLikeEvening,
        night: feelsLikeNight,
    } = feelsLike;

    return (
        <HStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <TemperatureItem
                partOfDay="Morning"
                temperature={morning}
                feelsLike={feelsLikeMorning}
            />
            <TemperatureItem
                partOfDay="Day"
                temperature={day}
                feelsLike={feelsLikeDay}
            />
            <TemperatureItem
                partOfDay="Evening"
                temperature={evening}
                feelsLike={feelsLikeEvening}
            />
            <TemperatureItem
                partOfDay="Night"
                temperature={night}
                feelsLike={feelsLikeNight}
            />
        </HStack>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        paddingVertical: STYLE_VARIABLES.xsPadding,
        paddingHorizontal: STYLE_VARIABLES.smPadding,
        borderColor: STYLE_VARIABLES.fgColor,
        borderWidth: 1,
        borderRadius: STYLE_VARIABLES.smRadius,
    },
});
