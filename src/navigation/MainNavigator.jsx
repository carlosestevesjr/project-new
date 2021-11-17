import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Componets from '../components'

import Screens from '../screens'

import  theme    from "../theme/index"

const MainNavigator = () => {
    
    const MainStack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: '#fff',
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
                    options={({ navigation, route }) => ({
                        headerShown:true,
                        title: 'Login',
                        headerTitle: (props) =>  <Componets.Header { ...props } {...navigation } {...route}/>,
                        // headerRight: () => (
                        //     <Button
                        //         onPress={() => alert('This is a button!')}
                        //         title="Info"
                        //         color="#000"
                        //     />
                        // ),
                    })}
                  
                />
                <MainStack.Screen 
                    name="Pokemon Detalhes" 
                    component={Screens.PokemonDetailScreen} 
                    options={({ navigation, route }) => ({
                        headerShown:true,
                        title: 'Detalhes Pokemon',
                        headerTitle: (props) =>  <Componets.Header { ...props } {...navigation } {...route}/>,
                        // headerRight: () => (
                        //     <Button
                        //         onPress={() => alert('This is a button!')}
                        //         title="Info"
                        //         color="#000"
                        //     />
                        // ),
                    })}
                  
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
