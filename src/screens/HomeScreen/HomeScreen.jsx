import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs


//Components
import { View, Image, TouchableOpacity } from 'react-native'

import ListNews from '../HomeScreen/components/ListNews/ListNews'
import Components from './../../components'

// import { Appbar, BottomNavigation, Text, Drawer } from 'react-native-paper';

const Screen = ({ navigation, route, ...props}) => {

    // const NewsRoute = () => <Text>Noticias</Text>;

    // const AlbumsRoute = () => <Text>Albums</Text>;

    // const RecentsRoute = () => <Text>Recents</Text>;

    // const _goBack = () => console.log('Went back');

    // const _handleSearch = () => console.log('Searching');

    // const _handleMore = () => console.log('Shown more');

    const [index, setIndex] = React.useState(0);

    const [lista, setLista] = useState([]);
	const [page, setPage] = useState(1);
	const [loader, setLoader] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);



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

    // const [active, setActive] = React.useState('');


    return (
        <Components.Container title="home">
            <ListNews  navigation={navigation} />
            <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
                <TouchableOpacity
                    style={{ width: 50, height: 50 }}
                    onPress={() => {
                        navigation.push('Feed Config', {
                            title: 'Feed Config'
                        })
                    }}
                >
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../../assets/images/commons/config.png')}
                    />
                </TouchableOpacity>
            </View>

           
        </Components.Container>
    )
}

export default Screen;
