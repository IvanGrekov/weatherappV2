import { PropsWithChildren, createContext, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeObservable, runInAction, observable, action } from 'mobx';

import { getMyGeoLocation } from '../../api/myGeoLocation';
import { getReadableLocation } from '../../api/readableLocation';
import { ASYNC_STORAGE_MY_LOCATION_KEY } from '../../constants/asyncStorage.constants';
import { IApiError } from '../../types/api.types';
import {
    TLocation,
    IGeoLocation,
    IReadableLocation,
} from '../../types/location.types';
import { getLocationCacheKey } from '../../utils/cache.utils';
import { setMyLocationToAsyncStorage } from '../../utils/myLocation.utils';

interface ISetLocationFromQueriesArgs {
    geoLocationQueryResult: IGeoLocation;
    readableLocationQueryResult: IReadableLocation | IApiError;
    cacheKey: string;
}

class MyLocation {
    private locationsCache = new Map<string, TLocation>();

    myLocation: TLocation | null = null;
    loading = false;
    error = '';

    constructor() {
        makeObservable(this, {
            myLocation: observable,
            loading: observable,
            error: observable,
            getMyLocation: action,
        });
    }

    private async getMyLocationFromAsyncStorage(): Promise<TLocation | null> {
        try {
            const value = await AsyncStorage.getItem(
                ASYNC_STORAGE_MY_LOCATION_KEY,
            );

            if (value) {
                return JSON.parse(value) as TLocation;
            }

            return null;
        } catch (error) {
            console.warn(error);

            return null;
        }
    }

    private setCachedLocation(key: string): void {
        const cachedLocation = this.locationsCache.get(key) as TLocation;
        this.loading = false;
        this.myLocation = cachedLocation;
    }

    private setLocationFromQueries({
        geoLocationQueryResult,
        readableLocationQueryResult,
        cacheKey,
    }: ISetLocationFromQueriesArgs): void {
        this.loading = false;
        if ('errorMessage' in readableLocationQueryResult) {
            this.error = readableLocationQueryResult.errorMessage;
        } else {
            const location = {
                ...geoLocationQueryResult,
                ...readableLocationQueryResult,
            };
            this.locationsCache.set(cacheKey, location);
            this.myLocation = location;
            setMyLocationToAsyncStorage(location);
        }
    }

    async getMyLocation(): Promise<void> {
        this.loading = true;
        this.error = '';

        const myLocationFromAsyncStorage =
            await this.getMyLocationFromAsyncStorage();
        if (myLocationFromAsyncStorage) {
            return runInAction(() => {
                this.loading = false;
                this.myLocation = myLocationFromAsyncStorage;
            });
        }

        const geoLocationQueryResult = await getMyGeoLocation();
        const isError = 'errorMessage' in geoLocationQueryResult;
        if (isError) {
            return runInAction(() => {
                this.loading = false;
            });
        }

        const cacheKey = getLocationCacheKey(geoLocationQueryResult);
        const cachedLocation = this.locationsCache.get(cacheKey);
        if (cachedLocation) {
            return runInAction(this.setCachedLocation.bind(this, cacheKey));
        }

        const readableLocationQueryResult = await getReadableLocation(
            geoLocationQueryResult,
        );
        runInAction(
            this.setLocationFromQueries.bind(this, {
                geoLocationQueryResult,
                readableLocationQueryResult,
                cacheKey,
            }),
        );
    }
}

const myLocationStore = new MyLocation();

const MyLocationStoreContext = createContext<MyLocation | null>(null);

export const MyLocationStoreProvider = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return (
        <MyLocationStoreContext.Provider value={myLocationStore}>
            {children}
        </MyLocationStoreContext.Provider>
    );
};

export const useMyLocationStore = (): MyLocation => {
    const store = useContext(MyLocationStoreContext);

    if (!store) {
        throw new Error(
            'useMyLocationStore must be used within MyGeoLocationStoreProvider with provided store as a value',
        );
    }

    return store;
};
