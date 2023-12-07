import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const getTimestamp = (timezone: string): number => {
    const date = new Date();
    const formattedTimestamp = formatInTimeZone(
        date,
        timezone,
        'yyyy-MM-dd HH:mm:ss',
    );

    return new Date(formattedTimestamp).getTime();
};

type TFormatTimestamp = (timestamp: number) => string;

export const getTime: TFormatTimestamp = (timestamp) => {
    const formattedTime = format(timestamp, 'HH:mm');

    return formattedTime;
};

export const getDate: TFormatTimestamp = (timestamp) => {
    const formattedDate = format(timestamp, 'MMM dd');

    return formattedDate;
};
