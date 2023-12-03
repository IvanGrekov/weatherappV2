import { useNavigation, NavigationProp } from '@react-navigation/native';
import { IconButton, SearchIcon } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';
import { ERouteNames, TRootTabsParamList } from '../../types/routes.types';

export default function SearchButton(): JSX.Element {
    const { navigate } = useNavigation<NavigationProp<TRootTabsParamList>>();

    const onClick = (): void => {
        navigate(ERouteNames.SEARCH);
    };

    return (
        <IconButton
            icon={<SearchIcon color={STYLE_VARIABLES.black} />}
            variant="ghost"
            onPress={onClick}
        />
    );
}
