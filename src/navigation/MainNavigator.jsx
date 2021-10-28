import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from '../screens'


const MainNavigator = () => {
    
    const MainStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Home">
                <MainStack.Screen 
                    name="Home" 
                    component={Screens.HomeScreen} 
                    options={{
                        headerShown:true
                    }}
                />
                 <MainStack.Screen 
                    name="Login" 
                    component={Screens.LoginScreen} 
                    options={{
                        headerShown:true
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({

})