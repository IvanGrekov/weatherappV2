import { ScrollView, VStack } from 'native-base';

import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';
import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import LocationHistoryList from '../location-history-list/LocationHistoryList';
import MyLocationSection from '../my-location-section/MyLocationSection';
import ScreenContainer from '../screen-container/ScreenContainer';
import SearchField from '../search-field/SearchField';
import SearchLocationList from '../search-location-list/SearchLocationList';

import { useLocationsHistory, useSearchLocation } from './hooks';

export default function SearchScreen(): JSX.Element {
    const { locationsHistory, isLoading: isLocationsHistoryLoading } =
        useLocationsHistory();
    const { query, data, isLoading, error, onChange } = useSearchLocation();

    const shouldShowSearchList = !!query && !error && !isLoading && data;

    return (
        <ScreenContainer>
            <LoadingIndicator
                isLoading={isLocationsHistoryLoading || (!!query && !data)}
            />

            {!isLoading && <ErrorIndicator error={error} />}

            {shouldShowSearchList && !data.length && (
                <EmptyStateIndicator text="No locations found" />
            )}

            <SearchField value={query} onChangeText={onChange} />

            <ScrollView>
                <VStack>
                    {!query && (
                        <>
                            <MyLocationSection />
                            <LocationHistoryList locations={locationsHistory} />
                        </>
                    )}

                    {shouldShowSearchList && (
                        <SearchLocationList locations={data} />
                    )}
                </VStack>
            </ScrollView>
        </ScreenContainer>
    );
}
