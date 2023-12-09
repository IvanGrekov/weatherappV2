import { formatInTimeZone } from 'date-fns-tz';

type TGetDate = (args: { timeSlot: number | Date; timezone: string }) => string;

export const getTimeZonedDate: TGetDate = ({ timeSlot, timezone }) => {
    const formattedDate = formatInTimeZone(timeSlot, timezone, 'MMM dd');

    return formattedDate;
};
