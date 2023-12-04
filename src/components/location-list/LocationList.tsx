import { List } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

interface ILocationListProps {
    children: JSX.Element | JSX.Element[];
}

export default function LocationList({
    children,
}: ILocationListProps): JSX.Element | null {
    return (
        <List borderWidth={0} p={0} space={STYLE_VARIABLES.smSpacing}>
            {children}
        </List>
    );
}
