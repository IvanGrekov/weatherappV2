import { Input, SearchIcon } from 'native-base';

import { STYLE_VARIABLES } from '../../constants/style.constants';

interface ISearchFieldProps {
    value: string;
    onChangeText: (value: string) => void;
}

export default function SearchField({
    value,
    onChangeText,
}: ISearchFieldProps): JSX.Element {
    return (
        <Input
            value={value}
            placeholder="Search..."
            size="2xl"
            variant="rounded"
            colorScheme="black"
            borderColor={STYLE_VARIABLES.fgColor}
            placeholderTextColor={STYLE_VARIABLES.fgColor}
            InputRightElement={
                <SearchIcon
                    size="lg"
                    color={STYLE_VARIABLES.fgColor}
                    mr={STYLE_VARIABLES.smSpacing}
                />
            }
            onChangeText={onChangeText}
        />
    );
}
