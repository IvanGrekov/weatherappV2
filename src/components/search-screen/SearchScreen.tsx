import { VStack } from 'native-base';

import MyLocationSection from '../my-location-section/MyLocationSection';
import ScreenContainer from '../screen-container/ScreenContainer';

export default function SearchScreen(): JSX.Element {
    return (
        <ScreenContainer>
            <VStack>
                <MyLocationSection />
            </VStack>
        </ScreenContainer>
    );
}
