import { useMyLocationStore } from '../../../stores/my-location';
import { TLocation } from '../../../types/location.types';

type TUseGetFilteredLocationsHistory = (
    locationsHistory: TLocation[],
) => TLocation[];

export const useGetFilteredLocationsHistory: TUseGetFilteredLocationsHistory = (
    locationsHistory,
) => {
    const myLocationStore = useMyLocationStore();
    const myLocation = myLocationStore.myLocation;

    if (!myLocation) {
        return locationsHistory;
    }

    const { name, state, country } = myLocation;

    return locationsHistory.filter(
        (location) =>
            location.name !== name ||
            location.state !== state ||
            location.country !== country,
    );
};
