import { Box, Text } from 'native-base';

import { DEFAULT_LOCATION } from '../../constants/geoLocation';
import { useMyGeoLocation } from '../../hooks/geoLocation.hooks';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function AppContent(): JSX.Element {
    const { myGeoLocation, loading } = useMyGeoLocation();

    if (loading) {
        return (
            <ScreenContainer>
                <LoadingIndicator />
            </ScreenContainer>
        );
    }

    const location = myGeoLocation || DEFAULT_LOCATION;

    return (
        <Box>
            <Text>{JSON.stringify(location)}</Text>
        </Box>
    );
}
