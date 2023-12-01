import { DEFAULT_LOCATION } from '../../constants/location';
import { useMyGeoLocation } from '../../hooks/myLocation.hooks';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';
import WeatherForecast from '../weather-forecast/WeatherForecast';

export default function HomeScreen(): JSX.Element {
    const { myLocation, loading, error } = useMyGeoLocation();
    const location = myLocation || DEFAULT_LOCATION;

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={loading} />

            {!loading && <ErrorIndicator error={error} />}

            {!loading && !error && <WeatherForecast {...location} />}
        </ScreenContainer>
    );
}
