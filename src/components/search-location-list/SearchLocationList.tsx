import { TLocation } from '../../types/location.types';
import { getLocationListItemKey } from '../../utils/locations.utils';
import LocationList from '../location-list/LocationList';
import LocationListItem from '../location-list/LocationListItem';
import PressableLocationItem from '../pressable-location-item/PressableLocationItem';

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
                    <LocationListItem key={key}>
                        <PressableLocationItem location={location} />
                    </LocationListItem>
                );
            })}
        </LocationList>
    );
}
