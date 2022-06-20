import React, { useEffect, useCallback, useRef, useState } from 'react';

import _ from 'lodash'
import { View, Text, Dimensions, RefreshControl, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import theme, { primary500} from '../../theme/index'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaTagsRecents } from '../../redux/slices/tagsSlice'
import { salvaAtualizaNews } from '../../redux/slices/newsSlice'

import { verifyApiAutorization } from '../../utils/index'

//Config
import Config from './../../config'

//Styles
import styles from './Styles';

const TagsRecents = ({ navigation, route, ...props}) => {

    //Variables Default
    const dispatch = useDispatch()
   
    const qtd = 1000
    const dateInitial = ''
    const dateFinal = ''

     // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)

    const news_atualiza = useSelector((state) => {
        // console.log('state.news.news_atualiza', state.news.news_atualiza)
        return state.news.news_atualiza
    } )
    
    const tags_recents = useSelector((state) => {
        // console.log('dasdasdas',state.news.news)
        return state.tags.tags_recents
    } )
    const loader = useSelector((state) => state.geral.loaderGeral.open)

    const clickBuscar = (reload = false) => {
     
        dispatch(
            buscaTagsRecents(
                {
                    params:{
                        v_page:1,
                        apiToken,
                        qtd: qtd,
                        dateInitial:dateInitial,
                        dateFinal:dateFinal,
                        reload: reload
                    }
                }
            ),
        )
    }

    const HeaderList = ({ }) => (
      <></>
    )

    const renderItem = useCallback(
        ({ item, index }) =>
            <TouchableOpacity 
                key={index}
                onPress={
                    () => (navigation.push(
                        'Tag',
                        {
                            data:item,
                            title:'Tag',
                        }
                    ))
                }
            >
                <View key={index} style={styles.item}>
                    <Image
                        style={styles.itemImage}
                        resizeMode={'center'}
                        source={{
                            uri:Config.LOCAL_HOST_NOCINEMA+item.tag_image,
                        }}
                    />
                    <Text style={styles.itemText} >#{item.tag_name}</Text>
                </View>
            </TouchableOpacity>
           
    )

    const ITEM_HEIGHT = 200
    const keyExtractor = useCallback((item) => item.tag_id.toString(), [])

    useEffect(() => {
        clickBuscar(false)
	}, []);
    
    useEffect(() => {
        if(news_atualiza){
            
            clickBuscar(true)
                      
            dispatch(
                salvaAtualizaNews(
                    {
                        params:{
                            'news_atualiza':false
                        }
                    }
                ),
            )
        }
        console.log('update caso user') 
    }, [news_atualiza]);
   
    return (
        <View style={styles.sampleStyle}>
            {/* <Text style={styles.title}>Tags Atualizadas Recentemente</Text> */}
            <View style={styles.tagsListas}>
                <View style={{width:"90%"}}>

                    {
                        ( tags_recents.length > 0 ) ?
                        <FlatList
                            initialNumToRender={5}
                            scrollEnabled={true}
                            horizontal={true}
                            windowSize={Dimensions.get('window').width}
                            // inverted={true}	
                            // maxHeight={'100%'}
                            // refreshing={true}
                            showsHorizontalScrollIndicator={true}
                            data={tags_recents}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                            onEndReachedThreshold={0.5}
                        />
                        :
                            <View  style={{width:"100%",  flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                                {
                                    loader ?
                                        <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Carregando...</Text>
                                    :
                                
                                        <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Não há tags</Text>
                                    
                                }
                            </View>
                    }
                </View>
                <View style={{width:"10%",  flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignContent:'center' }}>
                    <TouchableOpacity
                        style={{ width:'100%' }}
                        onPress={() => {
                            navigation.navigate('Tags', {
                                title: 'Tags'
                            })
                        }}
                    >
                        <Icon
                            iconStyle={{ padding: 1, borderRadius: 3,  color: primary500 }}
                            name='plus'
                            type='font-awesome'
                            color={primary500}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default TagsRecents