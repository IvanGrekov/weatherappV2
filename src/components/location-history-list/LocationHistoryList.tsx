import { observer } from 'mobx-react-lite';
import { List } from 'native-base';

import { TLocation } from '../../types/location.types';
import { getLocationListItemKey } from '../../utils/locations.utils';
import LocationList from '../location-list/LocationList';
import LocationListItem from '../location-list-item/LocationListItem';
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
                        <List.Item key={key}>
                            <LocationListItem location={location} />
                        </List.Item>
                    );
                })}
            </LocationList>
        </>
    );
}

export default observer(LocationHistoryList);
