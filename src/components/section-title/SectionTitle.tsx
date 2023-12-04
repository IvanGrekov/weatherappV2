import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

export default function SectionTitle({
    children,
}: PropsWithChildren): JSX.Element {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        marginBottom: STYLE_VARIABLES.lgSpacing,
        fontSize: STYLE_VARIABLES.mdFontSize,
        lineHeight: STYLE_VARIABLES.lgFontSize,
    },
});
