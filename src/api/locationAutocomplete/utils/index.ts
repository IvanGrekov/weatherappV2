import {
    IApiLocationAutocomplete,
    TLocation,
    ELocationType,
} from '../../../types/location.types';

type TSortApiLocationAutocomplete = (
    apiLocationAutocomplete: IApiLocationAutocomplete[],
) => IApiLocationAutocomplete[];

const sortApiLocationAutocomplete: TSortApiLocationAutocomplete = (
    apiLocationAutocomplete,
) => {
    return apiLocationAutocomplete.sort(({ type: typeA }, { type: typeB }) => {
        const isTypeATown = typeA === ELocationType.TOWN;
        const isTypeBCity = typeB === ELocationType.CITY;

        if (isTypeATown && isTypeBCity) {
            return 1;
        }

        return 0;
    });
};

type TConvertApiLocationAutocompleteToLocationAutocomplete = (
    apiLocationAutocomplete: IApiLocationAutocomplete[],
) => TLocation[];

export const convertApiLocationAutocompleteToLocationAutocomplete: TConvertApiLocationAutocompleteToLocationAutocomplete =
    (apiLocationAutocomplete) => {
        const result: TLocation[] = [];
        const sortedApiLocationAutocomplete = sortApiLocationAutocomplete(
            apiLocationAutocomplete,
        );

        sortedApiLocationAutocomplete.forEach((location) => {
            const { lat, lon, display_place, address } = location;
            const { state, country } = address;

            result.push({
                latitude: Number(lat),
                longitude: Number(lon),
                name: display_place,
                state,
                country,
            });
        });

        return result;
    };
