import { PropsWithChildren } from 'react';

import { Text } from 'native-base';

export default function SectionTitle({
    children,
}: PropsWithChildren): JSX.Element {
    return <Text>{children}</Text>;
}
