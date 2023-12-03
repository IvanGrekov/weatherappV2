import { List } from 'native-base';

import { TLocation } from '../../types/location.types';
import EmptyStateIndicator from '../empty-state-indicator/EmptyStateIndicator';

import SearchLocationListItem from './SearchLocationListItem';

interface ISearchLocationListProps {
    locations: TLocation[];
}

export default function SearchLocationList({
    locations,
}: ISearchLocationListProps): JSX.Element {
    if (!locations.length) {
        return <EmptyStateIndicator text="No locations found" />;
    }

    return (
        <List>
            {locations.map((location) => {
                const { latitude, longitude } = location;
                const key = `${latitude}-${longitude}`;

                return (
                    <List.Item key={key}>
                        <SearchLocationListItem location={location} />
                    </List.Item>
                );
            })}
        </List>
    );
}
