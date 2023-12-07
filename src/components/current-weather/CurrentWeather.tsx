import { StyleSheet } from 'react-native';

import { VStack, Box } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ICurrentWeather } from '../../types/weatherForecast.types';
import CurrentWeatherIcon from '../current-weather-icon/CurrentWeatherIcon';
import CurrentWeatherMainInfo from '../current-weather-main-info/CurrentWeatherMainInfo';
import CurrentWeatherMinorInfo from '../current-weather-minor-info/CurrentWeatherMinorInfo';

export default function CurrentWeather({
    weatherDescription,
    temp,
    feelsLike,
    windDeg,
    windSpeed,
    visibility,
    humidity,
    pressure,
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

            <Box style={styles.minorInfoWrapper}>
                <CurrentWeatherMinorInfo
                    windSpeed={windSpeed}
                    windDeg={windDeg}
                    visibility={visibility}
                    humidity={humidity}
                    pressure={pressure}
                />
            </Box>
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
        position: 'absolute',
        height: '90%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: STYLE_VARIABLES.bgInvisible,
    },
    minorInfoWrapper: {
        marginTop: -20,
        justifyContent: 'space-between',
    },
});
