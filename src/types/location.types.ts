export interface IGeoLocation {
    latitude: number;
    longitude: number;
}

export interface IReadableLocation {
    name: string;
    state?: string;
    country: string;
}

export enum ELocationType {
    CITY = 'city',
    TOWN = 'town',
}

export interface IApiLocationAutocomplete {
    place_id: string;
    lat: string;
    lon: string;
    display_place: string;
    type: ELocationType;
    address: {
        state: string;
        country: string;
    };
}

export type TLocation = IGeoLocation & IReadableLocation;
