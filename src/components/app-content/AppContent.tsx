import { Box, Text } from 'native-base';

import { DEFAULT_READABLE_LOCATION } from '../../constants/geoLocation';
import { useMyGeoLocation } from '../../hooks/myLocation.hooks';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function AppContent(): JSX.Element {
    const { myReadableLocation, loading, error } = useMyGeoLocation();

    if (loading) {
        return (
            <ScreenContainer>
                <LoadingIndicator />
            </ScreenContainer>
        );
    }

    if (error) {
        return (
            <ScreenContainer>
                <ErrorIndicator error={error} />
            </ScreenContainer>
        );
    }

    const location = myReadableLocation || DEFAULT_READABLE_LOCATION;

    return (
        <Box>
            <Text>{JSON.stringify(location)}</Text>
        </Box>
    );
}
