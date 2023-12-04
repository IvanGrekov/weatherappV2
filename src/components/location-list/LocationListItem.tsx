import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { List } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

export default function LocationListItem({
    children,
}: PropsWithChildren): JSX.Element {
    return (
        <List.Item p={2} style={styles.listItem}>
            {children}
        </List.Item>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: STYLE_VARIABLES.fgInvisible,
        borderRadius: STYLE_VARIABLES.smRadius,
    },
});
