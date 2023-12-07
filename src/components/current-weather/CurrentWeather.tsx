import { StyleSheet } from 'react-native';

import { HStack, VStack, Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import CurrentWeatherIcon from '../current-weather-icon/CurrentWeatherIcon';
import CurrentWeatherMainInfo from '../current-weather-main-info/CurrentWeatherMainInfo';

export default function CurrentWeather({
    temp,
    feelsLike,
    humidity,
    pressure,
    visibility,
    windSpeed,
    weatherDescription,
}: ICurrentWeather): JSX.Element {
    const { icon, description } = weatherDescription;

    return (
        <VStack space={STYLE_VARIABLES.mdSpacing}>
            <VStack style={styles.mainInfoWrapper}>
                <CurrentWeatherIcon weatherIconCode={icon} />
                <VStack style={styles.tempWrapper}>
                    <CurrentWeatherMainInfo
                        weatherDescription={description}
                        temp={temp}
                        feelsLike={feelsLike}
                    />
                </VStack>
            </VStack>

            <HStack style={styles.minorInfoWrapper}>
                <Text>{`${windSpeed} m/s`}</Text>

                <Text>{`${visibility} m`}</Text>

                <Text>{`${humidity}%`}</Text>

                <Text>{`${pressure} hPa`}</Text>
            </HStack>
        </VStack>
    );
}

const styles = StyleSheet.create({
    mainInfoWrapper: {
        position: 'relative',
        justifyContent: 'center',
        marginTop: -10,
    },
    tempWrapper: {
        height: '90%',
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: STYLE_VARIABLES.bgInvisible,
    },
    minorInfoWrapper: {
        marginTop: -20,
        justifyContent: 'space-between',
    },
});
