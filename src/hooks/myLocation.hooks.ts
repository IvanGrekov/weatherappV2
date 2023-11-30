import { useEffect, useState } from 'react';

import { getMyGeoLocation } from '../api/myGeoLocation';
import { getReadableLocation } from '../api/readableLocation';
import {
    IGeoLocation,
    IReadableLocation,
    TLocation,
} from '../types/location.types';

type TGeoLocationState = IGeoLocation | null;
type TReadableLocationState = IReadableLocation | null;
type TLocationState = TLocation | null;

type TUseMyGeoLocation = () => {
    myLocation: TLocationState;
    loading: boolean;
    error: string;
};

type TUseGetMyGeoLocation = (args: {
    setError: (error: string) => void;
    setMyGeoLocation: (geoLocation: TGeoLocationState) => void;
    setLoading: (loading: boolean) => void;
}) => void;

const useGetMyGeoLocation: TUseGetMyGeoLocation = ({
    setError,
    setMyGeoLocation,
    setLoading,
}) => {
    useEffect(() => {
        getMyGeoLocation()
            .then((result) => {
                if ('errorMessage' in result) {
                    return setError(result.errorMessage);
                }

                setMyGeoLocation(result);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setError, setMyGeoLocation, setLoading]);
};

type TUseGetMyReadableLocation = (args: {
    myGeoLocation: TGeoLocationState;
    myReadableLocation: TReadableLocationState;
    setError: (error: string) => void;
    setMyReadableLocation: (location: TReadableLocationState) => void;
    setLoading: (loading: boolean) => void;
}) => void;

const useGetMyReadableLocation: TUseGetMyReadableLocation = ({
    myGeoLocation,
    myReadableLocation,
    setError,
    setMyReadableLocation,
    setLoading,
}) => {
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
    }, [
        myGeoLocation,
        myReadableLocation,
        setError,
        setMyReadableLocation,
        setLoading,
    ]);
};

export const useMyGeoLocation: TUseMyGeoLocation = () => {
    const [myGeoLocation, setMyGeoLocation] = useState<TGeoLocationState>(null);
    const [myReadableLocation, setMyReadableLocation] =
        useState<TReadableLocationState>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useGetMyGeoLocation({
        setError,
        setMyGeoLocation,
        setLoading,
    });

    useGetMyReadableLocation({
        myGeoLocation,
        myReadableLocation,
        setError,
        setMyReadableLocation,
        setLoading,
    });

    const myLocation: TLocationState =
        myGeoLocation && myReadableLocation
            ? {
                  ...myGeoLocation,
                  ...myReadableLocation,
              }
            : null;

    return { myLocation, loading, error };
};
