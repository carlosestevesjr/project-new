import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
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

    const horizontalAnimation = {
        gestureDirection: 'horizontal',
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      };

    const PokemonComponent = (props, route) => (
        <Screens.PokemonDetailScreen {...props}  {...route} />
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

    const SearchTagsComponent = (props, route) => (
        <Screens.SearchTagsScreen {...props} {...route} />
    )

    const LoginComponent = (props, route) => (
        <Screens.LoginScreen  {...props} {...route} />
    )

    const ViewNewsComponent = (props, route) => (
        <Screens.ViewNewsScreen {...props} {...route} />
    )

    const SearchNewsComponent = (props, route) => (
        <Screens.SearchNewsScreen {...props} {...route} />
    )

    const AboutComponent = (props, route) => (
        <Screens.AboutScreen {...props} {...route} />
    )

    const DonationComponent = (props, route) => (
        <Screens.DonationScreen {...props} {...route} />
    )

    const ContactComponent = (props, route) => (
        <Screens.ContactScreen {...props} {...route} />
    )

    const DrawerNavigator = ({ navigation, route }) => {
        return <MainDrawer.Navigator
            initialRouteName="Home"
            drawerContent={props => (<Componets.MenuContent  {...props} />)}
        >
            <MainDrawer.Screen
                name="Home"
                component={HomeComponent}
                options={titleOptions('NOTÍCIAS')}
            />

            <MainDrawer.Screen
                name="Pokemon"
                component={PokemonComponent}
                options={titleOptions('Pokemon')}
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
                        name="Buscar Notícias"
                        component={SearchNewsComponent}
                        options={titleOptions('Buscar Notícias')}
                    />

                    <MainStack.Screen
                        name="Tags"
                        component={TagsComponent}
                        options={titleOptions('Tags')}
                    />

                    <MainStack.Screen
                        name="Buscar Tags"
                        component={SearchTagsComponent}
                        options={titleOptions('Buscar Tags')}
                    />

                    <MainStack.Screen
                        name="Canais"
                        component={ChannelsComponent}
                        options={titleOptions('Canais')}
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
                    <MainStack.Screen
                        name="Sobre"
                        component={AboutComponent}
                        options={titleOptions('Sobre')}
                    />
                     <MainStack.Screen
                        name="Contato"
                        component={ContactComponent}
                        options={titleOptions('Contato')}
                    />
                    <MainStack.Screen
                        name="Donation"
                        component={DonationComponent}
                        options={titleOptions('Doação')}
                    />
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigator
