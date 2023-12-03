import { IGeoLocation } from '../types/location.types';

export const getLocationCacheKey = ({
    latitude,
    longitude,
}: IGeoLocation): string => {
    const formattedLat = latitude.toFixed(1);
    const formattedLon = longitude.toFixed(1);

    return `${formattedLat}-${formattedLon}`;
};
