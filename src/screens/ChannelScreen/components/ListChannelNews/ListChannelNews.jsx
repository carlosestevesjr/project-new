import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { formataDataBr } from '../../../../utils/index'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaNewsChannel } from '../../../../redux/slices/newsChannelSlice'

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
            buscaNewsChannel(
                {
                    params:{
                        v_page: "",
                        reload: reload,
                        channel_id: route.params.data.channels_id
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
            buscaNewsChannel(
                {
                    params:{
                        v_page: "",
                        reload: reload,
                        channel_id: route.params.data.channels_id
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
            buscaNewsChannel(
                {
                    params:{
                        v_page: v_page,
                        reload: reload,
                        channel_id: route.params.data.channels_id
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
                                            channels_id: item.new.channels_id,
                                            channel_type: item.new.channel_type,
                                            channel: item.new.channel,
                                            image: item.new.image,
                                            tags: item.tags
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
                                        uri:Config.LOCAL_HOST_NOCINEMA+item.new.channel_logo,
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerChannelName} >
                                <Text style={styles.ChannelName}>
                                    {item.new.channel}
                                    -{item.new.id}
                                </Text>
                                <Text style={styles.newsData} >
                                    {formataDataBr(item.new.data)}
                                </Text>
                                {
                                   item.new.channel_type == "podcast" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../../../assets/images/commons/type_podcast.png')}
                                        />
                                    </View>
                                }
                                {
                                   item.new.channel_type == "site" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../../../assets/images/commons/type_site.png')}
                                        />
                                    </View>
                                }
                                {
                                   item.new.channel_type == "youtube" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../../../assets/images/commons/type_youtube.png')}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.newsContainerBanner}
                            onPress={() => (navigation.push(
                                'Notícia',
                                {
                                    idItem: Math.floor(Math.random() * 100),
                                    url:item.new.link,
                                    data:item.new,
                                    title:'Notícia',
                                    type:item.new.channel_type
                                }
                            ))
                            }
                        >
                            <View style={styles.newsBanner}>
                                <Image
                                    style={styles.newsBannerLoader}
                                    source={require('../../../../assets/images/commons/loader.gif')}
                                />
                                <Image
                                    style={styles.newsBannerImage}
                                    resizeMode={'contain'}
                                    source={{
                                        uri: typeImage(item.new.image, item.new.channel_type) ,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.newsTitle}>
                            <Text style={styles.newsDescricao}>
                                {item.new.title}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.newsTag}> 
                        {
                            item.tags && item.tags.map(function(tag, i){
                                return  <TouchableOpacity 
                                            key={i}
                                            style={styles.newsTag}
                                            onPress={() => (navigation.push(
                                                    'Tag',
                                                    {
                                                        data:tag,
                                                        title:'Tag',
                                                    }
                                                ))
                                            }
                                        >
                                            <Text style={styles.newsTagName}>
                                                #{tag.title}
                                            </Text>
                                        </TouchableOpacity>
                                
                            })
                        }
                    </View>
                </View>
            </Components.Card>
    )

    const ITEM_HEIGHT = 200
	const keyExtractor = useCallback((item) => item.new.id.toString(), [])

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
    const news_channel = useSelector((state) => state.news_channel.news_channel)
    const loader = useSelector((state) => state.geral.loaderGeral)

    return (
        <View style={styles.container}>
            <View style={styles.containerHeaderChannel} >
                <Image
                    style={styles.headerChannelImage}
                    resizeMode={'contain'}
                    source={{
                        uri:Config.LOCAL_HOST_NOCINEMA+route.params.data.image,
                    }}
                />
                <Text style={styles.headerChannel}>
                    {route.params.data.channel}
                </Text>
            </View>
            {
                ( news_channel.length > 0 && loader != true) ?
                    
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
                        data={news_channel}
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
                    <View style={{width:"100%",  flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Não há notícias</Text>
                    </View> 
            }
        </View>
        
    )
}

export default Screen;