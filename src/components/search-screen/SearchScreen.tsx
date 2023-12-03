import { ScrollView, VStack } from 'native-base';

import ErrorIndicator from '../error-indicator/ErrorIndicator';
import LoadingIndicator from '../loading-indicator/LoadingIndicator';
import MyLocationSection from '../my-location-section/MyLocationSection';
import ScreenContainer from '../screen-container/ScreenContainer';
import SearchField from '../search-field/SearchField';
import SearchLocationList from '../search-location-list/SearchLocationList';
import SectionTitle from '../section-title/SectionTitle';

import { useSearchLocation } from './hooks';

export default function SearchScreen(): JSX.Element {
    const { query, data, isLoading, error, onChange } = useSearchLocation();

    return (
        <ScreenContainer>
            <LoadingIndicator isLoading={!!query && !data} />

            {!isLoading && <ErrorIndicator error={error} />}

            <SearchField value={query} onChangeText={onChange} />

            <ScrollView>
                <VStack>
                    {!query && (
                        <>
                            <SectionTitle>My Location</SectionTitle>
                            <MyLocationSection />
                        </>
                    )}

                    {query && !error && !isLoading && data && (
                        <SearchLocationList locations={data} />
                    )}
                </VStack>
            </ScrollView>
        </ScreenContainer>
    );
}
