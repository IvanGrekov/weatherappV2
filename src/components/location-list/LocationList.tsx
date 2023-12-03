import { List } from 'native-base';

interface ILocationListProps {
    children: JSX.Element | JSX.Element[];
}

export default function LocationList({
    children,
}: ILocationListProps): JSX.Element | null {
    return (
        <List borderTopWidth={0} borderBottomWidth={0}>
            {children}
        </List>
    );
}
