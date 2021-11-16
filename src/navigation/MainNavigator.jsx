import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Componets from '../components'

import Screens from '../screens'

import  { theme }   from "../theme/index"

const MainNavigator = () => {
    
    const MainStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: '000',
                    headerStyle: { backgroundColor: theme.colors.primary },
                }}
            >
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
                        headerTitle: props => <Componets.Header props={props} />
                        // headerRight: () => (
                        //     <Button
                        //         onPress={() => alert('This is a button!')}
                        //         title="Info"
                        //         color="#000"
                        //     />
                        // ),
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
