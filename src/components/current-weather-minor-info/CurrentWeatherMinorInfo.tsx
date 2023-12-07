import { StyleSheet } from 'react-native';

import { VStack, HStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import { HumidityIcon } from '../minor-weather-info-icons/HumidityIcon';
import { PressureIcon } from '../minor-weather-info-icons/PressureIcon';
import { VisibilityIcon } from '../minor-weather-info-icons/VisibilityIcon';
import { WindIcon } from '../minor-weather-info-icons/WindIcon';

import MinorInfoItem from './MinorInfoItem';

type TCurrentWeatherMinorInfoProps = Pick<
    ICurrentWeather,
    'windSpeed' | 'windDeg' | 'visibility' | 'humidity' | 'pressure'
>;

export default function CurrentWeatherMinorInfo({
    windSpeed,
    windDeg,
    visibility,
    humidity,
    pressure,
}: TCurrentWeatherMinorInfoProps): JSX.Element {
    return (
        <HStack space={STYLE_VARIABLES.mdSpacing} style={styles.container}>
            <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.column}>
                <MinorInfoItem
                    label="Wind"
                    value={`${windSpeed} m/s`}
                    icon={<WindIcon rotateZ={windDeg} />}
                />
                <MinorInfoItem
                    label="Visibility"
                    value={`${visibility} m`}
                    icon={<VisibilityIcon />}
                />
            </VStack>

            <VStack space={STYLE_VARIABLES.mdSpacing} style={styles.column}>
                <MinorInfoItem
                    label="Humidity"
                    value={`${humidity}%`}
                    icon={<HumidityIcon />}
                />
                <MinorInfoItem
                    label="Pressure"
                    value={`${pressure} hPa`}
                    icon={<PressureIcon />}
                />
            </VStack>
        </HStack>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    column: {
        flexGrow: 1,
    },
});
