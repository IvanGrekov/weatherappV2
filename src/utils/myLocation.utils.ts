import AsyncStorage from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_MY_LOCATION_KEY } from '../constants/asyncStorage.constants';
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
