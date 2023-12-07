import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IWeatherDescription } from '../../types/weatherForecast.types';
import WeatherIcon from '../weather-icons/WeatherIcon';

export default function CurrentWeatherDescription({
    icon,
}: IWeatherDescription): JSX.Element {
    return (
        <VStack style={styles.container}>
            <WeatherIcon
                weatherIconCode={icon}
                width={STYLE_VARIABLES.currentWeatherIconSize}
                height={STYLE_VARIABLES.currentWeatherIconSize}
            />
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
