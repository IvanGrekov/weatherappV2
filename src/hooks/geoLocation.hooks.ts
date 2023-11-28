import { useEffect, useState } from 'react';

import { IGeoLocation } from '../types/geoLocation.types';
import { getLocation } from '../utils/geoLocation.utils';

type TGeoLocationState = IGeoLocation | null;

type TUseMyGeoLocation = () => {
    myGeoLocation: TGeoLocationState;
    loading: boolean;
};

export const useMyGeoLocation: TUseMyGeoLocation = () => {
    const [myGeoLocation, setMyGeoLocation] = useState<TGeoLocationState>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLocation()
            .then((result) => {
                if ('errorMessage' in result) {
                    return;
                }

                setMyGeoLocation(result);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { myGeoLocation, loading };
};
