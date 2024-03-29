import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { formataDataBr, verifyApiAutorization } from '../../../../utils/index'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaNewsChannel, limpaListaNewsChannel } from '../../../../redux/slices/newsSlice'

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
    const qtd = 20

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)

    const news_channel = useSelector((state) => state.news.news_channel)
    const loader = useSelector((state) => state.geral.loaderGeral.open)

    const typeImage = (image, channel_type) => {
        return Config.LOCAL_HOST_NOCINEMA+image
	}

    const clickBuscarRefreshing = (reload = true) => {
        setPage(1)
        const v_page = 1

        // setRefreshing(true);
       
        dispatch(
            buscaNewsChannel(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd: qtd,
                        reload: reload,
                        channel_id: route.params.data.channel_slug
                    }
                }
            ),
        )
        // setRefreshing(false);
    }

    const clickBuscarMais = (reload = false) => {
        const v_page = page+1
      
        dispatch(
            buscaNewsChannel(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd: qtd,
                        reload: reload,
                        channel_id: route.params.data.channel_slug
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
                            <View
                                style={styles.newsChannelLogo}
                                
                            >
                                <Image
                                    style={styles.newsChannelImage}
                                    resizeMode={'contain'}
                                    source={{
                                        uri:Config.LOCAL_HOST_NOCINEMA+item.new.channel_logo,
                                    }}
                                />
                            </View>
                            <View style={styles.containerChannelName} >
                                <Text style={styles.ChannelName}>
                                    {item.new.channel}
                                    - {item.new.news_id}
                                </Text>
                                <Text style={styles.newsData} >
                                    {formataDataBr(item.new.news_data)}
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
                        <View style={styles.containerNews}>
                        
                            <TouchableOpacity
                                style={styles.newsContainerBanner}
                                onPress={() => (navigation.push(
                                    'Notícia',
                                    {
                                        idItem: Math.floor(Math.random() * 100),
                                        url:item.new.news_link,
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
                                            uri: typeImage(item.new.news_image, item.new.channel_type) ,
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.newsTitle}
                                onPress={() => (navigation.push(
                                    'Notícia',
                                    {
                                        idItem: Math.floor(Math.random() * 100),
                                        url:item.new.news_link,
                                        data:item.new,
                                        title:'Notícia',
                                        type:item.new.channel_type
                                    }
                                ))
                                }
                            >
                                <View >
                                    <Text style={styles.newsDescricao}>
                                        {item.new.news_title}
                                    </Text>
                                </View>

                            </TouchableOpacity>
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
                                                #{tag.tag_name}
                                            </Text>
                                        </TouchableOpacity>
                                
                            })
                        }
                        
                    </View>
                </View>
            </Components.Card>
    )

    const ITEM_HEIGHT = 200
	const keyExtractor = useCallback((item) => item.new.news_id.toString(), [])

    useEffect(() => {
        clickBuscarRefreshing(true)
        // console.log('Montou') 
    }, []);

    useEffect(() => {
        return () => { 
            dispatch(
                limpaListaNewsChannel()
            )
            // console.log('Desmontou') 
        }
    }, []);

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
                ( news_channel.length > 0 ) ?
                    
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
                                // console.log('distanceFromEnd', distanceFromEnd)
                                clickBuscarMais()
                            }
                        }}
                    />
                    :
                       
                    <View  style={{width:"100%",  flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                        {
                            loader ?
                                <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Carregando...</Text>
                            :
                                <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Não há notícias</Text>
                        }
                    </View>
            }
        </View>
        
    )
}

export default Screen;