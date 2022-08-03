import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../../config'

//Utils
import _ from 'lodash'
import { formataDataBr, verifyApiAutorization} from '../../../../utils/index'


//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaTagsSearch, limpaTagsSearch, buscaSetTagsSearch } from '../../../../redux/slices/tagsSlice'

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

    const tags_search = useSelector((state) => {
        // console.log('tags search', state.tags)
        return state.tags.tags_search
    })

    const message_tags_search = useSelector((state) => {
        // console.log('message search',state.tags.message_tags_search)
        return state.tags.message_tags_search
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
            buscaTagsSearch(
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
            buscaTagsSearch(
                {
                    params:{
                        apiToken,
                        v_page: v_page,
                        qtd:qtd,
                        busca:(search != "")? search : "",
                        reload: reload,
                    }
                }
            ),
        )
        setPage(v_page)
        
    }

    const checkTags = (select, tags_id) => {
        
        if(select == 0){
            
            dispatch(
                buscaSetTagsSearch(
                    {
                        params:{
                            apiToken,
                            tags_id: tags_id,
                            list_tags: tags_search,
                            select: 1
                        }
                    }
                ),
            )

        }else{

            dispatch(
                buscaSetTagsSearch(
                    {
                        params:{
                            apiToken,
                            tags_id: tags_id,
                            list_tags: tags_search,
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
                                'Tag',
                                {
                                    data:item,
                                    title:'Tag',
                                }
                            ))
                            }
                        >
                            <Image
                                style={styles.newsChannelImage}
                                resizeMode={'contain'}
                                source={{
                                    uri:Config.LOCAL_HOST_NOCINEMA+item.tag_image,
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.containerChannelName}
                            onPress={() => (navigation.push(
                                'Tag',
                                {
                                    data:item,
                                    title:'Tag',
                                }
                            ))
                            }
                        >
                            <View >
                                <Text style={styles.ChannelName}>
                                #{item.tag_name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        {
                            (item.select !== undefined) &&(

                                (item.select == 1) ?
                                    <TouchableOpacity
                                        style={{width:'15%'}}
                                        onPress={() => (
                                            (user.api_token != undefined && user.api_token != "") ? checkTags(item.select, item.tag_id) : navigation.navigate('Login') 
                                        )
                                        }
                                    >
                                        <Icon
                                            iconStyle={{  padding : 10,borderColor:primary500, color:"#155724"}}
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
                                            (user.api_token != undefined && user.api_token != "") ? checkTags(item.select, item.tag_id) : navigation.navigate('Login') 
                                        )
                                        }
                                    >
                                        <Icon
                                            iconStyle={{ padding : 10,borderColor:primary500, color:"#F44336"}}
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
	const keyExtractor = useCallback((item) => item.tag_id.toString(), [])

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
                limpaTagsSearch()
            )
            // console.log('Desmontou') 
        }
    }, []);


    // //Monta Registros									
	// const useIsMounted = () => {
	// 	const isMounted = useRef(false);
	// 	useEffect(() => {
	// 	  isMounted.current = true;
	// 	  return () => (isMounted.current = false);
	// 	}, []);
	// 	return isMounted;
	// };
    // const isMounted = useIsMounted();

    // const inputElement = useRef(null);

    // useEffect(() => {

    //     if (inputElement.current) {
    //         inputElement.current.focus();
    //     }

    //     navigation.addListener('focus', () => {
    //         if (isMounted.current) {
    //             dispatch(
    //                 salvaListaTagsSearch({
    //                     'data':"",
    //                     'reload': true,
    //                     'params': {
    //                         busca: "",
    //                     }
    //                 }),
    //             )

    //         }
    //         // The screen is focused
    //         // Call any action
    //     });

	// }, []);

    return (
        <>
            {
                ( tags_search.length > 0 ) ?
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
                        data={tags_search}
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
                                <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>{message_tags_search}</Text>
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