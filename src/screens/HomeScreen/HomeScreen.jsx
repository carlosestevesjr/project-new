import React, { useState, useEffect,  useCallback, useRef } from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

//Components
import { View, Text, Image, TouchableOpacity, Pressable, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import ListNews from '../HomeScreen/components/ListNews/ListNews'
import { alteraStatusMostraImage } from '../../redux/slices/geralPersistSlice'

import theme, { secundary500, textDanger, light} from '../../theme/index'
import Components from './../../components'

// import { Appbar, BottomNavigation, Text, Drawer } from 'react-native-paper';

const Screen = ({ navigation, route, ...props }) => {

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
    const dispatch = useDispatch()
    const alteraImage = (status) => {
        dispatch(
            alteraStatusMostraImage(
                {
                    mostraImage:status,
                }
            ),
        )
    }

    const imageActive = useSelector((state) => {
        return state.geral_persist.image.mostrar
    })

    return (
        <>
            <Components.Container title="home">
            
                <ListNews navigation={navigation} imageActive={imageActive} />

                <Components.ModalsContent title="home">
                
                </Components.ModalsContent >
                <View style={{ position:'absolute', bottom:0, width:'100%', flexDirection:'row', flexWrap:'wrap', justifyContent:'flex-end'}}>
                    <TouchableOpacity
                        style={{ marginLeft:2, marginRight:2, width: 50, height: 50 }}
                        onPress={() => (alteraImage(!imageActive))}
                    >
                        <Icon
                            iconStyle={{ padding: 15, borderRadius: 50, backgroundColor: (imageActive) ? secundary500  : textDanger , color: "#333" }}
                            name='picture-o'
                            type='font-awesome'
                            color={light}
                            size={theme.sizes.small}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft:5, marginRight:5, width: 50, height: 50 }}
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
                </View>
            
            </Components.Container>
        </>
    )
}

export default Screen;
