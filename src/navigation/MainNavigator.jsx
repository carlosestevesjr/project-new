import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Icon } from "react-native-elements";

//Components
import Componets from '../components'
import {  verifyApiAutorization } from '../utils/index'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import { LoginOut } from '../redux/slices/geralPersistSlice'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

import Screens from '../screens'

import theme from "../theme/index"

const styles = StyleSheet.create({

    icon: {
        color: '#fff'
    },
    iconContainer: {
        paddingTop: 5,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',
       
    }
});

const MainNavigator = ({ navigation, route, ...props }) => {
    
    const MainStack = createNativeStackNavigator();
    const MainDrawer = createDrawerNavigator();

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)

    //Variables Default
    const dispatch = useDispatch()

    const logOut = () => {

        dispatch(
            LoginOut(
                {
                    params:{
                        apiToken
                    }
                }
            ),
        )
        console.log('sair')
        
    }

    const [count, setCount] = React.useState(0);
    const HeaderLeft = ({title, navigation }) => (
        <>
            <View style={{ flexDirection:'row' }}>
                {/* {
                    (title == "NOTÍCIAS") ?
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            style={styles.newsChannelLogo}
                            onPress={() => (
                                navigation.navigate('Login')
                            )
                            }
                        >
                            <Icon color='#FFF' name='user-circle' type='font-awesome' />
                        </TouchableOpacity>
                    </View>
                    :false
                }
                {
                    (title == "NOTÍCIAS") ?
                    <View style={styles.iconContainer}>
                        <TouchableOpacity
                            style={styles.newsChannelLogo}
                            onPress={() => (
                                logOut()
                            )
                            }
                        >
                            <Icon color='#FFF' name='sign-out' type='font-awesome' />
                        </TouchableOpacity>
                    </View>
                    :false
                } */}
            </View>
        </>
    )
    
    const titleOptions = (title, navigation = null) => ({
        title: title,
        'headerTitle': (props) => (
            <View style={{ paddingTop: 5, width: Dimensions.get('window').width, }}>

                {
                    (title != "NOTÍCIAS") ?
                        <View >
                            <Text style={{ padding: 5, color: '#FFF', fontSize: 18 }}>{title}</Text>
                        </View>
                        :
                        <View style={{}}>
                            <Image
                                style={{}}
                                resizeMode={'cover'}
                                source={require('../assets/images/commons/logo_clear.png')}
                            />
                        </View>
                }
            </View>
        ),
        'headerRight': () => (
            <>
                <HeaderLeft title={title} navigation={navigation}></HeaderLeft>
            </>
        ),
        headerShown: true,
        headerStyle: {
            backgroundColor: '#6a277b',
            elevation: 0,
            borderBottomWidth: 0
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
        },
    })

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

    const SearchChannelsComponent = (props, route) => (
        <Screens.SearchChannelsScreen {...props} {...route} />
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
                options={() => titleOptions('NOTÍCIAS', navigation)}
            />

            <MainDrawer.Screen
                name="Pokemon"
                component={PokemonComponent}
                options={titleOptions('Pokemon')}
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
                        name="Buscar Canais"
                        component={SearchChannelsComponent}
                        options={titleOptions('Buscar Canais')}
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

                    <MainDrawer.Screen
                        name="Login"
                        component={LoginComponent}
                        options={titleOptions('Login')}
                    />
                  
                </MainStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNavigator
