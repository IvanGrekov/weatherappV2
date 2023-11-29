import { useEffect, useState } from 'react';

import { getMyLocation } from '../api/myLocation';
import { getReadableLocation } from '../api/readableLocation';
import { IGeoLocation, IReadableLocation } from '../types/geoLocation.types';

type TGeoLocationState = IGeoLocation | null;
type TReadableLocationState = IReadableLocation | null;

type TUseMyGeoLocation = () => {
    myReadableLocation: TReadableLocationState;
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
        getMyLocation()
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
    setError: (error: string) => void;
    setMyReadableLocation: (location: TReadableLocationState) => void;
    setLoading: (loading: boolean) => void;
}) => void;

const useGetMyReadableLocation: TUseGetMyReadableLocation = ({
    myGeoLocation,
    setError,
    setMyReadableLocation,
    setLoading,
}) => {
    useEffect(() => {
        if (!myGeoLocation) {
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
    }, [myGeoLocation, setError, setMyReadableLocation, setLoading]);
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
        setError,
        setMyReadableLocation,
        setLoading,
    });

    return { myReadableLocation, loading, error };
};
