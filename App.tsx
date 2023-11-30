/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, Box } from 'native-base';

import AppContent from './src/components/app-content/AppContent';
import { STYLE_VARIABLES } from './src/constants/style';

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <SafeAreaView>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={STYLE_VARIABLES.white}
                    />
                    <Box style={styles.appWrapper}>
                        <AppContent />
                    </Box>
                </SafeAreaView>
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
