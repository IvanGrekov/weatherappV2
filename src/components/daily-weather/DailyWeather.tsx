import { useState } from 'react';

import { VStack } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IDailyWeather } from '../../types/weatherForecast.types';
import DailyWeatherList from '../daily-weather-list/DailyWeatherList';
import SelectedDayDailyWeather from '../selected-day-daily-weather/SelectedDayDailyWeather';

interface IDailyWeatherListProps {
    dailyWeather: IDailyWeather[];
    timezone: string;
}

export default function DailyWeather({
    dailyWeather,
    timezone,
}: IDailyWeatherListProps): JSX.Element {
    const [selectedDay, setSelectedDay] = useState(dailyWeather[0]);

    return (
        <VStack space={STYLE_VARIABLES.smSpacing}>
            <DailyWeatherList
                dailyWeather={dailyWeather}
                selectedDay={selectedDay}
                timezone={timezone}
                setSelectedDay={setSelectedDay}
            />

            <SelectedDayDailyWeather {...selectedDay} />
        </VStack>
    );
}
