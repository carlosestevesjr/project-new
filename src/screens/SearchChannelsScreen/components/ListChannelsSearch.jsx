import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../config'

//Utils
import _ from 'lodash'
import { stripHtml, verifyApiAutorization } from '../../../utils/index'

import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaChannelsSearch , limpaChannelsSearch, buscaSetChannelSearch } from '../../../redux/slices/channelsSlice'

//Components
import { Dimensions, View, RefreshControl, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import theme, { primary500, light, background} from '../../../theme/index'

import Components from './../../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props}) => {

    //Variables Default
    const dispatch = useDispatch()

	const [page, setPage] = useState(1);
	const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState("")
    const qtd = 10

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)

    const channels_search = useSelector((state) => {
        // console.log(state.channels.channels)
        return state.channels.channels_search
    })

    const message = useSelector((state) => {
        // console.log(state.channels.channels)
        return state.channels.message_channels_search
    })

    const loader = useSelector((state) => state.geral.loaderGeral.open)

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
            buscaChannelsSearch(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd: qtd,
                        busca:(search != "" )? search : "",
                        reload: reload,
                    }
                }
            ),
        )

    }

    const clickBuscarMais = (reload = false) => {
        const v_page = page+1
      
        dispatch(
            buscaChannelsSearch(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd: qtd,
                        busca:(search != "" )? search : "",
                        reload: reload,
                    }
                }
            ),
        )
        setPage(v_page)
    }

    const checkCanal = (select, channels_id) => {
        
        // setRequisicaoCheckCanais(true);
       
        if(select == 0){
            
            dispatch(
                buscaSetChannelSearch(
                    {
                        params:{
                            apiToken,
                            channels_id: channels_id,
                            list_channels: channels_search,
                            select: 1
                        }
                    }
                ),
            )

            // setRequisicaoCheckCanais(false);
                
        }else{

            dispatch(
                buscaSetChannelSearch(
                    {
                        params:{
                            apiToken,
                            channels_id: channels_id,
                            list_channels: channels_search,
                            select: 0
                        }
                    }
                ),
            )
        }
       
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
                                            channels_id: item.channels_id,
                                            channel_type: item.channel_type,
                                            channel_slug: item.channel_slug,
                                            channel: item.channel,
                                            image: item.channel_logo,
                                           
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
                                        uri:Config.LOCAL_HOST_NOCINEMA+item.channel_logo,
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerChannelName} >
                                <TouchableOpacity
                                    onPress={() => (navigation.push(
                                        'Canal',
                                        {
                                            data: {
                                                channels_id: item.channels_id,
                                                channel_type: item.channel_type,
                                                channel_slug: item.channel_slug,
                                                channel: item.channel,
                                                image: item.channel_logo,
                                            
                                            },
                                            title:'Canal'
                                        }
                                    ))
                                    }
                                >
                                <Text style={styles.ChannelName}>
                                    {item.channel}
                                </Text>
                                    
                                </TouchableOpacity>
                                
                                {/* <Text style={styles.newsDescricao}> */}
                                    {/* {
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
                                    } */}
                                   
                                   
                                {/* </Text> */}
                            </View>
                            {
                                (item.select !== undefined) &&(

                                    (item.select == 1) ?
                                        <TouchableOpacity
                                            style={{width:'15%'}}
                                            onPress={() => (
                                                (user.api_token != undefined && user.api_token != "") ? checkCanal(item.select, item.channels_id) : navigation.navigate('Login') 
                                            )
                                            }
                                        >
                                            <Icon
                                                iconStyle={{  padding : 15,borderColor:primary500, color:"#155724"}}
                                                name='check-circle'
                                                type='font-awesome'
                                                color={light}
                                                size={25}  
                                            />
                                        </TouchableOpacity>
                                    :
                                        <TouchableOpacity
                                            style={{width:'15%'}}
                                            onPress={() => (
                                                (user.api_token != undefined && user.api_token != "") ? checkCanal(item.select, item.channels_id) : navigation.navigate('Login') 
                                            )}    
                                        >
                                            <Icon
                                                iconStyle={{  padding : 10,borderColor:primary500, color:"#F44336"}}
                                                name='times-circle'
                                                type='font-awesome'
                                                color={light}
                                                size={25} 
                                            />
                                        </TouchableOpacity>
                                    )
                            }
                        </View>
                      
                    </View>
                </View>
            </Components.Card>
    )

    const ITEM_HEIGHT = 200
	const keyExtractor = useCallback((item) => item.channels_id.toString(), [])

    const inputElement = useRef(null);

    useEffect(() => {
        // clickBuscarRefreshing(true)
        if (inputElement.current) {
            inputElement.current.focus();
        }
        // console.log('Montou') 
    }, []);

    useEffect(() => {
        return () => { 
            dispatch(
                limpaChannelsSearch()
            )
            // console.log('Desmontou') 
        }
    }, []);

    return (
        <>
            {
                ( channels_search.length > 0) ?
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
                        data={channels_search}
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
                    <View style={{width:"100%",  flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
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