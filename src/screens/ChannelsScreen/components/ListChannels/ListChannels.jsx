import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { stripHtml } from '../../../../utils/index'

import theme, { primary500, light, background} from '../../../../theme/index'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaChannels } from '../../../../redux/slices/channelsSlice'

//Components
import { Dimensions, View, RefreshControl, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Components from './../../../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props}) => {

    //Variables Default
    const dispatch = useDispatch()

	const [page, setPage] = useState(1);
	const [refreshing, setRefreshing] = useState(false);

    const typeImage = (image, channel_type) => {
		if(channel_type === "podcast"){
			return image
		}else{
			return Config.LOCAL_HOST_NOCINEMA+image
		}
	}

    const clickBuscarRefreshing = (reload = true) => {
        setPage(1)
        const v_page = page

        // setRefreshing(true);
       
        dispatch(
            buscaChannels(
                {
                    params:{
                        v_page: "",
                        reload: reload,
                    }
                }
            ),
        )
        // setRefreshing(false);
    }

    const clickBuscar = (reload = false) => {
        setPage(1)
        const v_page = page
        // setRefreshing(true);
       
        dispatch(
            buscaChannels(
                {
                    params:{
                        v_page: "",
                        reload: reload,
                    }
                }
            ),
        )
        // setPage(1);
        // setRefreshing(false);
    }

    const clickBuscarMais = (reload = false) => {
        const v_page = page+1
      
        dispatch(
            buscaChannels(
                {
                    params:{
                        v_page: v_page,
                        reload: reload,
                    }
                }
            ),
        )
        setPage(v_page)
    }

    const HeaderList = ({ }) => (
        <>
        </>
    )

    const renderItem = useCallback(
        ({ item, index }) =>
            <Components.Card >
                <View key={index} style={styles.boxNews}>
                    <View style={styles.news}>
                        <View style={styles.containerChannel}>
                            <TouchableOpacity
                                style={styles.newsChannelLogo}
                                onPress={() => (navigation.push(
                                    'Canal',
                                    {
                                        data: {
                                            channels_id: item.id,
                                        },
                                        title:'Canal'
                                    }
                                ))
                                }
                            >
                                <Image
                                    style={styles.newsChannelImage}
                                    resizeMode={'contain'}
                                    source={{
                                        uri:Config.LOCAL_HOST_NOCINEMA+item.image,
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerChannelName} >
                                <Text style={styles.ChannelName}>
                                    {item.name}
                                </Text>
                                
                                <Text style={styles.newsDescricao}>
                                    {
                                        (item.facebook != undefined && item.facebook != "" ) &&

                                        <Icon
                                            iconStyle={{ padding : 10, margin:5, borderRadius:10, borderWidth:1, borderColor:primary500, backgroundColor:background, color:primary500}}
                                            name='facebook'
                                            type='font-awesome'
                                            color={light}
                                            size={theme.sizes.extraSmall}  
                                        />
                                    }

                                    {
                                        (item.instagram != undefined && item.instagram != "" ) &&

                                        <Icon
                                            iconStyle={{ padding : 10, margin:5, borderRadius:10, borderWidth:1, borderColor:primary500, backgroundColor:background, color:primary500}}
                                            name='instagram'
                                            type='font-awesome'
                                            color={light}
                                            size={theme.sizes.extraSmall}  
                                        />
                                    }

                                    {
                                        (item.twitter != undefined && item.twitter != "" ) &&

                                        <Icon
                                            iconStyle={{ padding : 10, margin:5, borderRadius:10, borderWidth:1, borderColor:primary500, backgroundColor:background, color:primary500}}
                                            name='twitter'
                                            type='font-awesome'
                                            color={light}
                                            size={theme.sizes.extraSmall}  
                                        />
                                    }

                                    {
                                        (item.youtube != undefined && item.youtube != "" ) &&

                                        <Icon
                                            iconStyle={{ padding : 10, margin:5, borderRadius:10, borderWidth:1, borderColor:primary500, backgroundColor:background, color:primary500}}
                                            name='youtube'
                                            type='font-awesome'
                                            color={light}
                                            size={theme.sizes.extraSmall}  
                                        />
                                    }
                                   
                                   
                                </Text>
                            </View>
                        </View>
                      
                    </View>
                </View>
            </Components.Card>
    )

    const ITEM_HEIGHT = 200
	const keyExtractor = useCallback((item) => item.id.toString(), [])

    //Monta Registros									
	const useIsMounted = () => {
		const isMounted = useRef(false);
		useEffect(() => {
		  isMounted.current = true;
		  return () => (isMounted.current = false);
		}, []);
		return isMounted;
	};

    const isMounted = useIsMounted();
    useEffect(() => {

        navigation.addListener('focus', () => {
            if (isMounted.current) {
                clickBuscarRefreshing(true)
            }
            // The screen is focused
            // Call any action
        });

	}, []);

    // Get State
    const channels = useSelector((state) => {
        // console.log(state.channels.channels)
        return state.channels.channels
    })

    return (
        <>
            {
                ( channels.length > 0) ?
                    <FlatList
                        ListHeaderComponent={HeaderList}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={clickBuscarRefreshing} />
                        }

                        initialNumToRender={8}
                        scrollEnabled={true}
                        // horizontal={true}
                        windowSize={Dimensions.get('window').height}
                        // inverted={true}	
                        // maxHeight={'100%'}
                        // refreshing={true}
                        maxToRenderPerBatch={5}
                        removeClippedSubviews={true}
                        // windowSize={21}
                        // getItemLayout={getItemLayout}
                        data={channels}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        onEndReachedThreshold={0.5}
                        onEndReached={({ distanceFromEnd }) => {
                            if (distanceFromEnd >= 0) {
                                console.log('distanceFromEnd', distanceFromEnd)
                                clickBuscarMais()
                            }
                        }}
                    />
                    :
                    <Text style={{ color: '#fff' }}></Text>
            }

        </>
    )
}

export default Screen;