import { STYLE_VARIABLES } from '../../constants/style.constants';
import { IReadableLocation } from '../../types/location.types';
import LocationListItemContent from '../location-list-item-content/LocationListItemContent';

export default function WeatherForecastLocation(
    props: IReadableLocation,
): JSX.Element {
    return (
        <LocationListItemContent
            location={props}
            flexDirection="column-reverse"
            nameFontSize={STYLE_VARIABLES.lgFontSize}
            captionFontSize={STYLE_VARIABLES.smFontSize}
        />
    );
}
