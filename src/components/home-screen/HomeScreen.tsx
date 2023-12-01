import { observer } from 'mobx-react-lite';

import { DEFAULT_LOCATION } from '../../constants/location';
import { useMyReadableLocation } from '../../hooks/myLocation.hooks';
import { useMyGeoLocationStore } from '../../stores/my-geo-location';
import { TRootTabScreenProps, ERouteNames } from '../../types/routes.types';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';
import WeatherForecast from '../weather-forecast/WeatherForecast';

const HomeScreen = observer(
    ({ route }: TRootTabScreenProps<ERouteNames.HOME>): JSX.Element => {
        const { location } = route.params || {};

        const myGeoLocationStore = useMyGeoLocationStore();
        const { myLocation, loading, error } = useMyReadableLocation();

        const selectedLocation = location || myLocation || DEFAULT_LOCATION;
        const isLoading = loading || myGeoLocationStore.loading;

        return (
            <ScreenContainer>
                <LoadingIndicator isLoading={isLoading} />

                {!isLoading && <ErrorIndicator error={error} />}

                {!isLoading && !error && (
                    <WeatherForecast {...selectedLocation} />
                )}
            </ScreenContainer>
        );
    },
);

export default HomeScreen;
