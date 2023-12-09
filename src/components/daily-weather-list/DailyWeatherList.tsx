import { StyleSheet } from 'react-native';

import { List, HStack, ScrollView } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IDailyWeather } from '../../types/weatherForecast.types';
import DailyWeatherListItem from '../daily-weather-list-item/DailyWeatherListItem';

interface IDailyWeatherListProps {
    dailyWeather: IDailyWeather[];
    selectedDay: IDailyWeather;
    timezone: string;
    setSelectedDay: (dailyWeatherItem: IDailyWeather) => void;
}

export default function DailyWeatherList({
    dailyWeather,
    selectedDay,
    timezone,
    setSelectedDay,
}: IDailyWeatherListProps): JSX.Element {
    return (
        <ScrollView horizontal={true}>
            <List
                borderWidth={0}
                p={0}
                space={STYLE_VARIABLES.smSpacing}
                direction="row"
            >
                {dailyWeather.map((dailyWeatherItem) => {
                    const isSelected =
                        dailyWeatherItem.timeSlot === selectedDay.timeSlot;

                    return (
                        <List.Item
                            key={dailyWeatherItem.timeSlot}
                            style={styles.item}
                            backgroundColor={
                                isSelected
                                    ? STYLE_VARIABLES.fgInvisible
                                    : undefined
                            }
                            onPress={(): void =>
                                setSelectedDay(dailyWeatherItem)
                            }
                        >
                            <HStack style={styles.itemContent}>
                                <DailyWeatherListItem
                                    {...dailyWeatherItem}
                                    timezone={timezone}
                                />
                            </HStack>
                        </List.Item>
                    );
                })}
            </List>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        width: 125,
        borderTopWidth: 1,
        borderWidth: 1,
        borderRadius: STYLE_VARIABLES.smRadius,
        borderColor: STYLE_VARIABLES.fgColor,
    },
    itemContent: {
        marginLeft: -16,
    },
});
