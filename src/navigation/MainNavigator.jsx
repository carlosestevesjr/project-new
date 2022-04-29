import React from 'react';

import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Components
import Componets from '../components'

import Screens from '../screens'

import theme from "../theme/index"

const MainNavigator = () => {

    const MainStack = createNativeStackNavigator();
    const MainDrawer = createDrawerNavigator();

    const titleOptions = (title) => ({
        title: title,
        headerShown: true,
        headerStyle: {
          backgroundColor: '#6a277b',
          elevation: 0,
          borderBottomWidth: 0
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
        },
      }
    )
    
    const HomeComponent = (props, route) => (
        <Screens.HomeScreen {...props}  {...route} />
    )

    const ChannelComponent = (props, route) => (
        <Screens.ChannelScreen {...props} {...route} />
    )

    const TagNewsComponent = (props, route) => (
        <Screens.TagNewsScreen {...props} {...route} />
    )

    const ChannelsComponent = (props, route) => (
        <Screens.ChannelsScreen {...props} {...route} />
    )

    const TagsComponent = (props, route) => (
        <Screens.TagsScreen {...props} {...route} />
    )

    const LoginComponent = (props, route) => (
        <Screens.LoginScreen  {...props} {...route} />
    )

    const ViewNewsComponent = (props, route) => (
        <Screens.ViewNewsScreen {...props} {...route} />
    )
        
    const DrawerNavigator = ({navigation, route}) => {
        return <MainDrawer.Navigator
                    initialRouteName="Home"
                    drawerContent={props => (<Componets.MenuContent  {...props} />) }
                >
                    <MainDrawer.Screen
                        name="Home"
                        component={HomeComponent}
                        options={titleOptions('NOTÍCIAS')}
                    />
                    <MainDrawer.Screen
                        name="Canais"
                        component={ChannelsComponent}
                        options={titleOptions('Canais')}
                    />
                    <MainDrawer.Screen
                        name="Tags"
                        component={TagsComponent}
                        options={titleOptions('Tags')}
                    />
                    <MainDrawer.Screen
                        name="Login"
                        component={LoginComponent}
                        options={titleOptions('Login')}
                    />
                </MainDrawer.Navigator>
    }

    return (
        <>
            <NavigationContainer>
                <MainStack.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    <MainStack.Screen 
                        name="Voltar" component={DrawerNavigator} 
                    />

                    <MainStack.Screen
                        name="Notícia"
                        component={ViewNewsComponent}
                        options={titleOptions('Notícia')}
                    />

                    <MainStack.Screen
                        name="Canal"
                        component={ChannelComponent}
                        options={titleOptions('Canal')}
                    />

                    <MainStack.Screen
                        name="Tag"
                        component={TagNewsComponent}
                        options={titleOptions('Tag')}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigator
