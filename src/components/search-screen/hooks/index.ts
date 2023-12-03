import { useState, useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';

import useDebounce from '../../../hooks/debounce.hooks';
import { TLocation } from '../../../types/location.types';
import { getLocationsHistoryFromAsyncStorage } from '../../../utils/locations.utils';
import { getLocationAutocomplete } from '../utils';

type TUseLocationsHistory = () => {
    locationsHistory: TLocation[];
    isLoading: boolean;
};

export const useLocationsHistory: TUseLocationsHistory = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [locationsHistory, setLocationsHistory] = useState<TLocation[]>([]);

    useEffect(() => {
        getLocationsHistoryFromAsyncStorage()
            .then((locations) => {
                setLocationsHistory(locations);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return {
        locationsHistory,
        isLoading,
    };
};

type TUseSearchLocation = () => {
    query: string;
    data: TLocation[] | null;
    isLoading: boolean;
    error: string;
    onChange: (value: string) => void;
};

let abortController = new AbortController();

export const useSearchLocation: TUseSearchLocation = () => {
    const isFocused = useIsFocused();

    const [searchQuery, setSearchValue] = useState('');
    const debouncedQuery = useDebounce({
        value: searchQuery,
        delay: 1000,
    });

    const [data, setData] = useState<TLocation[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isFocused) {
            setSearchValue('');
            setData(null);
            setIsLoading(false);
            setError('');
        }
    }, [isFocused]);

    useEffect(() => {
        if (!searchQuery) {
            setData(null);
            setIsLoading(false);
            setError('');
        }
    }, [searchQuery]);

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        getLocationAutocomplete({
            query: debouncedQuery,
            abortController,
            setData,
            setIsLoading,
            setError,
        });

        return () => {
            abortController.abort();
            abortController = new AbortController();
        };
    }, [isFocused, debouncedQuery]);

    return {
        query: searchQuery,
        data,
        isLoading,
        error,
        onChange: setSearchValue,
    };
};
