import { List } from 'native-base';

import { TLocation } from '../../types/location.types';
import { getLocationListItemKey } from '../../utils/locations.utils';
import LocationList from '../location-list/LocationList';
import LocationListItem from '../location-list-item/LocationListItem';

interface ISearchLocationListProps {
    locations: TLocation[];
}

export default function SearchLocationList({
    locations,
}: ISearchLocationListProps): JSX.Element | null {
    if (!locations.length) {
        return null;
    }

    return (
        <LocationList>
            {locations.map((location) => {
                const key = getLocationListItemKey(location);

                return (
                    <List.Item key={key}>
                        <LocationListItem location={location} />
                    </List.Item>
                );
            })}
        </LocationList>
    );
}
