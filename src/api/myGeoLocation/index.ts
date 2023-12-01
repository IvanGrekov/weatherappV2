import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation, {
    GeoPosition,
    GeoError,
} from 'react-native-geolocation-service';

import { IApiError } from '../../types/api.types';
import { IGeoLocation } from '../../types/location.types';

const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
        const result = await Geolocation.requestAuthorization('whenInUse');

        return result === 'granted';
    }

    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }

            return false;
        } catch (err) {
            return false;
        }
    }

    return false;
};

type TGetMyGeoLocation = () => Promise<IGeoLocation | IApiError>;

type TResolve = (
    value: IGeoLocation | IApiError | PromiseLike<IGeoLocation | IApiError>,
) => void;

export const getMyGeoLocation: TGetMyGeoLocation = () => {
    const onSuccess = (position: GeoPosition, resolve: TResolve): void => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
    };

    const onError = (error: GeoError, resolve: TResolve): void => {
        const { message } = error;
        resolve({ errorMessage: message });
    };

    return new Promise(async (resolve) => {
        const permission = await requestLocationPermission();

        if (!permission) {
            return resolve({ errorMessage: 'Permission denied' });
        }

        Geolocation.getCurrentPosition(
            (position) => onSuccess(position, resolve),
            (error) => onError(error, resolve),
            {
                enableHighAccuracy: true,
                forceRequestLocation: true,
                timeout: 15000,
                maximumAge: 10000,
            },
        );
    });
};
