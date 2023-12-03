import {
    IGeoLocation,
    IReadableLocation,
    TLocation,
} from '../types/location.types';

export const DEFAULT_GEO_LOCATION: IGeoLocation = {
    latitude: 50.4020355,
    longitude: 30.5326905,
};

export const DEFAULT_READABLE_LOCATION: IReadableLocation = {
    country: 'Ukraine',
    name: 'Kyiv',
};

export const DEFAULT_LOCATION: TLocation = {
    ...DEFAULT_GEO_LOCATION,
    ...DEFAULT_READABLE_LOCATION,
};
