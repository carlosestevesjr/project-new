import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { formataDataBr } from '../../../../utils/index'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaNewsSearch } from '../../../../redux/slices/searchNewsSlice'

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
            buscaNewsSearch(
                {
                    params:{
                        page: "",
                        busca:(search != "" )? search : "",
                        reload: reload
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
            buscaNewsSearch(
                {
                    params:{
                        page: "",
                        busca:(search != "")? search : "",
                        reload: reload
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
            buscaNewsSearch(
                {
                    params:{
                        page: v_page,
                        busca:(search != "")? search : "",
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

    const inputElement = useRef(null);

    useEffect(() => {

        if (inputElement.current) {
            inputElement.current.focus();
        }

        navigation.addListener('focus', () => {
            if (isMounted.current) {
                clickBuscarRefreshing(true)
            }
            // The screen is focused
            // Call any action
        });

	}, []);

    // Get State
    const search_news = useSelector((state) => {
        // console.log('dasdasdas',state.search_news.search_news)
        return state.search_news.search_news
    } )

    const loader = useSelector((state) => state.geral.loaderGeral)
   
    return (
        <>
            {
                ( search_news.length > 0 && loader != true) ?
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