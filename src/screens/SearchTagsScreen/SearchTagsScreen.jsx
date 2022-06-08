import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs

//Components
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import ListTagsSearch from '../SearchTagsScreen/components/ListTagsSearch/ListTagsSearch'
import Components from './../../components'

// import { Appbar, BottomNavigation, Text, Drawer } from 'react-native-paper';

const Screen = ({ navigation, route, ...props}) => {

    // const NewsRoute = () => <Text>Noticias</Text>;

    // const AlbumsRoute = () => <Text>Albums</Text>;

    // const RecentsRoute = () => <Text>Recents</Text>;

    // const _goBack = () => console.log('Went back');

    // const _handleSearch = () => console.log('Searching');

    // const _handleMore = () => console.log('Shown more');

   
   


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
            <ListTagsSearch navigation={navigation} />    
        </Components.Container>
    )
}

export default Screen;
