import React, { useState, useEffect, useCallback, useRef } from 'react';

//Config
import Config from '../../../config'

//Utils
import _ from 'lodash'
import { verifyApiAutorization } from '../../../utils/index'

import theme, { primary500, light, background} from '../../../theme/index'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaTags, limpaTags, buscaSetTags } from '../../../redux/slices/tagsSlice'

//Components
import { Dimensions, View, RefreshControl, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Components from './../../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props}) => {

    //Variables Default
    const dispatch = useDispatch()

	const [page, setPage] = useState(1);
	const [refreshing, setRefreshing] = useState(false);

    const qtd = 50

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)
    const tags = useSelector((state) => {
        // console.log(state.tags.tags)
        return state.tags.tags
    })
    
    const loader = useSelector((state) => state.geral.loaderGeral)

    const typeImage = (image, channel_type) => {
		if(channel_type === "podcast"){
			return image
		}else{
			return Config.LOCAL_HOST_NOCINEMA+image
		}
	}

    const checkTags = (select, tags_id) => {
        
        // setRequisicaoCheckCanais(true);
        if(select == 0){
            
            dispatch(
                buscaSetTags(
                    {
                        params:{
                            apiToken,
                            tags_id: tags_id,
                            list_tags: tags,
                            select: 1
                        }
                    }
                ),
            )

            // setRequisicaoCheckCanais(false);
                
        }else{

            dispatch(
                buscaSetTags(
                    {
                        params:{
                            apiToken,
                            tags_id: tags_id,
                            list_tags: tags,
                            select: 0
                        }
                    }
                ),
            )
            console.log('não faz a requisição')
        }
       
    }

    const clickBuscarRefreshing = (reload = true) => {
        setPage(1)
        const v_page = 1

        dispatch(
            buscaTags(
                {
                   params:{
                        apiToken,
                        v_page:v_page,
                        qtd: qtd,
                        reload: reload,
                    }
                }
            ),
        )
       
    }

    const clickBuscarMais = (reload = false) => {
        const v_page = page+1
      
        dispatch(
            buscaTags(
                {
                   params:{
                        apiToken,
                        v_page: v_page,
                        qtd: qtd,
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

    useEffect(() => {
        clickBuscarRefreshing(true)
        const unsubscribe = navigation.addListener('focus', () => {
            clickBuscarRefreshing(true)
          });
        console.log('Montou') 
    }, []);

    useEffect(() => {
        return () => { 
            dispatch(
                limpaTags()
            )
            console.log('Desmontou') 
        }
    }, []);

    return (
        <>
            {
                ( tags.length > 0 ) ?
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
                        data={tags}
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
                        
                                <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Não há notícias</Text>
                            
                        }
                    </View>
            }

        </>
    )
}

export default Screen;