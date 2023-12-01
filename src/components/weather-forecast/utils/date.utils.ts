import { formatInTimeZone } from 'date-fns-tz';

export const getTime = (timezone: string): string => {
    const date = new Date();
    const formattedDate = formatInTimeZone(date, timezone, 'HH:mm');

    return formattedDate;
};

export const getDate = (timezone: string): string => {
    const date = new Date();
    const formattedDate = formatInTimeZone(date, timezone, 'MMM dd');

    return formattedDate;
};
