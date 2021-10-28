import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { MainNavigator } from './src/navigation';

const App = () => {
    return (
        <>
            <StatusBar barStyle="default" />
            <MainNavigator /> 
        </>
    );
};
  
export default App;
