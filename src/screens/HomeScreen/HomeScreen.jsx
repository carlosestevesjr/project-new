import React from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs
import { useSelector } from 'react-redux';

//Components


import { View, Text, Image, TouchableOpacity, Pressable, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import ListNews from '../HomeScreen/components/ListNews/ListNews'
import { alteraStatusMostraImage } from '../../redux/slices/geralPersistSlice'
import theme, { secundary500, textDanger, light} from '../../theme/index'
import Components from './../../components'
import { usePushNotification } from '../../Hooks/index'

// import { Appbar, BottomNavigation, Text, Drawer } from 'react-native-paper';

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props }) => {

    const user = useSelector((state) => {
        // console.log('home user',state.geral_persist.user)
        return state.geral_persist.user
    })

    const InitializeTokenNotification = () => {
        (user.api_token != undefined && user.api_token != "") ?
            usePushNotification(user.id)
        :
            usePushNotification()
        return null  
    }
   

    // const NewsRoute = () => <Text>Noticias</Text>;

    // const AlbumsRoute = () => <Text>Albums</Text>;

    // const RecentsRoute = () => <Text>Recents</Text>;

    // const _goBack = () => console.log('Went back');

    // const _handleSearch = () => console.log('Searching');

    // const _handleMore = () => console.log('Shown more');

    //Variables Default
    // const dispatch = useDispatch()

    // const [routes] = React.useState([
    //     { key: 'news', title: 'Noticias', icon: 'newspaper-variant-outline' },
    //     { key: 'albums', title: 'Albums', icon: 'album' },
    //     { key: 'recents', title: 'Recents', icon: 'history' },
    // ]);

    // const renderScene = BottomNavigation.SceneMap({
    //     news: NewsRoute,
    //     albums: AlbumsRoute,
    //     recents: RecentsRoute,
    // });
    //Variables Default
   

    return (
        <>
            <Components.Container title="home">
                <InitializeTokenNotification />
               
                <View style={{ width:'100%'}}>
                    <Components.TagsRecents  navigation={navigation} props={props} route={route} />                  
                </View>
                <ListNews navigation={navigation} />

                <Components.ModalsContent title="home">
                
                </Components.ModalsContent >

                <TouchableOpacity
                    style={{ position:'absolute', right:5, bottom:5,  width: 50, height: 50 }}
                    onPress={() => {
                        navigation.navigate('Buscar Notícias', {
                            title: 'Buscar Notícias'
                        })
                    }}
                >
                    <Icon
                        iconStyle={{ padding: 15, borderRadius: 50, backgroundColor: '#E8B730', color: "#333" }}
                        name='search'
                        type='font-awesome'
                        color={light}
                        size={theme.sizes.small}
                    />
                </TouchableOpacity>
            
            </Components.Container>
        </>
    )
}

export default Screen;
