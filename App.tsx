/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import { STYLE_VARIABLES } from './src/constants/style.constants';
import Routes from './src/routes';
import { MyLocationStoreProvider } from './src/stores/my-location';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <MyLocationStoreProvider>
                    <SafeAreaView>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor={STYLE_VARIABLES.white}
                        />
                        <Box style={styles.appWrapper}>
                            <Routes />
                        </Box>
                    </SafeAreaView>
                </MyLocationStoreProvider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    appWrapper: {
        height: '100%',
        backgroundColor: STYLE_VARIABLES.bgColor,
    },
});

export default App;
