import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { formataDataBr, verifyApiAutorization } from '../../../../utils/index'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaNewsSearch, limpaSearchListaNews } from '../../../../redux/slices/newsSlice'

//Components
import { Dimensions, View, RefreshControl, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import theme, { primary500, light, background} from '../../../../theme/index'
import Components from './../../../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props}) => {

    //Variables Default
    const dispatch = useDispatch()

	const [page, setPage] = useState(1);
	const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("")
    const qtd = 20

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)
    const search_news = useSelector((state) => {
        // console.log('news search',state.search_news.search_news)
        return state.news.search_news
    } )

    const message = useSelector((state) => {
        // console.log('message search',state.search_news.message)
        return state.news.message_search_news
    } )

    const loader = useSelector((state) =>
    {
        // console.log('loader search',state.geral.loaderGeral.open)
        return state.geral.loaderGeral.open
    })

    const typeImage = (image, channel_type) => {
		if(channel_type === "podcast"){
			return image
		}else{
			return Config.LOCAL_HOST_NOCINEMA+image
		}
	}

    const clickBuscarRefreshing = (reload = true) => {
       
        setPage(1)
        const v_page = 1

        dispatch(
            buscaNewsSearch(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd:qtd,
                        busca:(search != "" )? search : "",
                        reload: reload
                    }
                }
            ),
        )
      
    }

    const clickBuscarMais = (reload = false) => {
       
        const v_page = page+1
        
        dispatch(
            buscaNewsSearch(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd:qtd,
                        busca:(search != "" )? search : "",
                        reload: reload,
                    }
                }
            ),
        )
        setPage(v_page)
        
    }

    const searchText = (text) => {
        if(text.length > 0){
            clickBuscarRefreshing(true)
        }
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
                                            channel_slug: item.new.channel_slug,
                                            channel: item.new.channel,
                                            image: item.new.channel_logo,
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
    
    const inputElement = useRef(null);
    useEffect(() => {
        clickBuscarRefreshing(true)
        if (inputElement.current) {
            inputElement.current.focus();
        }
        // console.log('Montou') 
    }, []);

    useEffect(() => {
        return () => { 
            dispatch(
                limpaSearchListaNews()
            )
            // console.log('Desmontou') 
        }
    }, []);

    return (
        <>
            {
                ( search_news.length > 0 ) ?
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
                        data={search_news}
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
                                <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>{message}</Text>
                        }
                    </View>           
                
            }

            <View
                 style={{ 
                    flexDirection:'row',
                    alignItems:'center',
                    position: 'relative',
                    backgroundColor: '#6a277b',
                    bottom:5,
                    width: '100%',
                    paddingTop:5,
                    paddingBottom:5,
                    paddingLeft:15,
                    paddingRight:15,
                    // height: 40,
                }}
            >
                <TextInput
                    style={{ 
                        color:'#000',
                        alignContent:'space-between',
                        backgroundColor: '#FFFFFF',
                        paddingLeft:15,
                        paddingRight:15,
                        borderColor: '#FFFFFF',
                        borderWidth:2,
                        width: '88%',
                        fontWeight:'bold',
                        height: 40,
                        borderRadius:5,
                    }}
                    ref={inputElement} 
                    autoFocus={true}
                    placeholder="Buscar"
                    keyboardType="default"
                    underlineColorAndroid='transparent'
                    onChangeText={(search) => setSearch(search)}
                    onSubmitEditing={() =>  searchText(search)}
                    
                />

                <TouchableOpacity
                    onPress={() => searchText(search) }
                >
                    <Icon
                        iconStyle={{ padding :10, borderRadius:50, marginLeft:5, marginRight:5, backgroundColor:'#E8B730', color:"#333"}}
                        name='search'
                        type='font-awesome'
                        color={light}
                        size={theme.sizes.small}  
                    />
                </TouchableOpacity>

                
            </View>

        </>
    )
}

export default Screen;