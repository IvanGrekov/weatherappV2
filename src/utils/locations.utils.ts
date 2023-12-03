import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    ASYNC_STORAGE_MY_LOCATION_KEY,
    ASYNC_STORAGE_LOCATIONS_HISTORY_KEY,
    LOCATIONS_HISTORY_MAX_LENGTH,
} from '../constants/asyncStorage.constants';
import { TLocation } from '../types/location.types';

export const setMyLocationToAsyncStorage = (myLocation: TLocation): void => {
    try {
        AsyncStorage.setItem(
            ASYNC_STORAGE_MY_LOCATION_KEY,
            JSON.stringify(myLocation),
        );
    } catch (error) {
        console.warn(error);
    }
};

export const getLocationsHistoryFromAsyncStorage = async (): Promise<
    TLocation[]
> => {
    try {
        const value = await AsyncStorage.getItem(
            ASYNC_STORAGE_LOCATIONS_HISTORY_KEY,
        );

        if (value) {
            return JSON.parse(value) as TLocation[];
        }

        return [];
    } catch (error) {
        console.warn(error);

        return [];
    }
};

export const updateLocationsHistoryAsyncStorage = async (
    location: TLocation,
): Promise<void> => {
    try {
        const locationsHistory = await getLocationsHistoryFromAsyncStorage();

        const { name, state, country } = location;
        const isExist = locationsHistory.some(
            (item) =>
                item.name === name &&
                item.state === state &&
                item.country === country,
        );
        if (isExist) {
            return;
        }

        locationsHistory.unshift(location);
        const locationsToSet = locationsHistory.slice(
            0,
            LOCATIONS_HISTORY_MAX_LENGTH,
        );
        AsyncStorage.setItem(
            ASYNC_STORAGE_LOCATIONS_HISTORY_KEY,
            JSON.stringify(locationsToSet),
        );
    } catch (error) {
        console.warn(error);
    }
};

export const getLocationListItemKey = (location: TLocation): string => {
    return `${location.latitude}${location.longitude}`;
};
