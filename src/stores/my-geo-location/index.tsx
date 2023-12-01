import { PropsWithChildren, createContext, useContext } from 'react';

import { makeAutoObservable } from 'mobx';

import { IGeoLocation } from '../../types/location.types';

export interface IMyGeoLocationStore {
    myGeoLocation: IGeoLocation | null;
    loading: boolean;
    error: string;
}

class MyGeoLocation implements IMyGeoLocationStore {
    myGeoLocation: IGeoLocation | null = null;
    loading = false;
    error = '';

    constructor() {
        makeAutoObservable(this);
    }

    setMyGeoLocation(location: IGeoLocation): void {
        this.myGeoLocation = location;
    }

    setLoading(loading: boolean): void {
        this.loading = loading;
    }

    setError(error: string): void {
        this.error = error;
    }
}

const myGeoLocationStore = new MyGeoLocation();

const MyGeoLocationStoreContext = createContext<MyGeoLocation | null>(null);

export const MyGeoLocationStoreProvider = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return (
        <MyGeoLocationStoreContext.Provider value={myGeoLocationStore}>
            {children}
        </MyGeoLocationStoreContext.Provider>
    );
};

export const useMyGeoLocationStore = (): MyGeoLocation => {
    const store = useContext(MyGeoLocationStoreContext);

    if (!store) {
        throw new Error(
            'useMyGeoLocationStore must be used within MyGeoLocationStoreProvider with provided store as a value',
        );
    }

    return store;
};
