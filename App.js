import React from 'react';
// import { usePushNotification } from '@hooks'
import { StatusBar } from 'expo-status-bar';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#390147',
      accent: '#f1c40f',
    },
};

import redux from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MainNavigator } from './src/navigation';

const { store, persistor } = redux();

if (__DEV__) {
    require('react-devtools');
}

const App = () => {

    // usePushNotification()
    return (
        <>
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <PersistGate loading={null} persistor={persistor}>
                        <StatusBar barStyle="default" />
                        <MainNavigator /> 
                    </PersistGate>
                </PaperProvider>
            </Provider>
        </>
    );
};
  
export default App;
