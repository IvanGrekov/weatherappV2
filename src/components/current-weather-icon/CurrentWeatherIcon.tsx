import { StyleSheet } from 'react-native';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { TWeatherIconCode } from '../../types/weatherForecast.types';
import WeatherIcon from '../weather-icons/WeatherIcon';

interface ICurrentWeatherIconProps {
    weatherIconCode: TWeatherIconCode;
}

export default function CurrentWeatherIcon({
    weatherIconCode,
}: ICurrentWeatherIconProps): JSX.Element {
    return (
        <VStack style={styles.container}>
            <WeatherIcon
                weatherIconCode={weatherIconCode}
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
