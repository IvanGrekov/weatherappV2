import { IGeoLocation } from '../types/location.types';

export const getLocationCacheKey = ({
    latitude,
    longitude,
}: IGeoLocation): string => `${latitude}${longitude}`;
