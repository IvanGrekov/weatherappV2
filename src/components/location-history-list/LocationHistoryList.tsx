import { observer } from 'mobx-react-lite';

import { TLocation } from '../../types/location.types';
import { getLocationListItemKey } from '../../utils/locations.utils';
import LocationList from '../location-list/LocationList';
import LocationListItem from '../location-list/LocationListItem';
import PressableLocationItem from '../pressable-location-item/PressableLocationItem';
import SectionTitle from '../section-title/SectionTitle';

import { useGetFilteredLocationsHistory } from './hooks';

interface ILocationHistoryListProps {
    locations: TLocation[];
}

function LocationHistoryList({
    locations,
}: ILocationHistoryListProps): JSX.Element | null {
    const filteredLocations = useGetFilteredLocationsHistory(locations);

    if (!filteredLocations.length) {
        return null;
    }

    return (
        <>
            <SectionTitle>Locations History</SectionTitle>

            <LocationList>
                {filteredLocations.map((location) => {
                    const key = getLocationListItemKey(location);

                    return (
                        <LocationListItem key={key}>
                            <PressableLocationItem location={location} />
                        </LocationListItem>
                    );
                })}
            </LocationList>
        </>
    );
}

export default observer(LocationHistoryList);
