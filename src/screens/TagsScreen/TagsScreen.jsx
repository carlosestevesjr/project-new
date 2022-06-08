import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../config'

//Utils
import _ from 'lodash'

//Dispatchs


//Components
import { View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import theme, { secundary500, textDanger, light} from '../../theme/index'

import ListTags from '../TagsScreen/components/ListTags'
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
            <ListTags route={route} navigation={navigation} />
            <TouchableOpacity
                style={{ position:'absolute', right:5, bottom:5,  width: 50, height: 50 }}
                onPress={() => {
                    navigation.navigate('Buscar Tags', {
                        title: 'Buscar Tags'
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
    )
}

export default Screen;