import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs


//Components
import { View, Image, TouchableOpacity } from 'react-native'

import ListChannelNews from '../ChannelScreen/components/ListChannelNews/ListChannelNews'
import Components from './../../components'

//Styles
import styles from './Styles';

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
            <ListChannelNews route={route} navigation={navigation} />
        </Components.Container>
    )
}

export default Screen;
