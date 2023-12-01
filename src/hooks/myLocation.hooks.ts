import { useCallback, useEffect, useState } from 'react';

import { getMyGeoLocation as getMyGeoLocationQuery } from '../api/myGeoLocation';
import { getReadableLocation } from '../api/readableLocation';
import { useMyGeoLocationStore } from '../stores/my-geo-location';
import { IReadableLocation, TLocation } from '../types/location.types';

export const useGetMyGeoLocation = (): (() => void) => {
    const myGeoLocationStore = useMyGeoLocationStore();

    return useCallback((): void => {
        myGeoLocationStore.setError('');
        myGeoLocationStore.setLoading(true);
        getMyGeoLocationQuery()
            .then((result) => {
                if ('errorMessage' in result) {
                    return myGeoLocationStore.setError(result.errorMessage);
                }

                myGeoLocationStore.setMyGeoLocation(result);
            })
            .finally(() => {
                myGeoLocationStore.setLoading(false);
            });
    }, [myGeoLocationStore]);
};

type TReadableLocationState = IReadableLocation | null;
type TLocationState = TLocation | null;

type TUseMyReadableLocation = () => {
    myLocation: TLocationState;
    loading: boolean;
    error: string;
};

export const useMyReadableLocation: TUseMyReadableLocation = () => {
    const myGeoLocationStore = useMyGeoLocationStore();
    const myGeoLocation = myGeoLocationStore.myGeoLocation;

    const [myReadableLocation, setMyReadableLocation] =
        useState<TReadableLocationState>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getMyGeoLocation = useGetMyGeoLocation();

    useEffect(() => {
        getMyGeoLocation();
    }, [getMyGeoLocation]);

    useEffect(() => {
        if (!myGeoLocation || myReadableLocation) {
            return;
        }

        setLoading(true);
        getReadableLocation(myGeoLocation)
            .then((result) => {
                if ('errorMessage' in result) {
                    return setError(result.errorMessage);
                }

                setMyReadableLocation(result);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [myGeoLocation, myReadableLocation]);

    const myLocation =
        !myGeoLocation || !myReadableLocation
            ? null
            : {
                  ...myGeoLocation,
                  ...myReadableLocation,
              };

    return {
        myLocation,
        loading,
        error,
    };
};
