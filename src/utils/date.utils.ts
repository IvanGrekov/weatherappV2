import { formatInTimeZone } from 'date-fns-tz';

type TGetDate = (args: {
    timeSlot: number | Date;
    timezone: string;
    withDayOfWeek?: boolean;
}) => string;

export const getTimeZonedDate: TGetDate = ({
    timeSlot,
    timezone,
    withDayOfWeek,
}) => {
    const format = withDayOfWeek ? 'MMM dd - EEE' : 'MMM dd';
    const formattedDate = formatInTimeZone(timeSlot, timezone, format);

    return formattedDate;
};
