import React, { useEffect, useCallback, useRef, useState } from 'react';

import _ from 'lodash'
import { View, Text, Dimensions, RefreshControl, FlatList, Image, TouchableOpacity } from 'react-native';

//Config
import Config from './../../config'

//Styles
import styles from './Styles';


const SECTIONS = [
      
    {
        "tag_id": 11,
        "tag_title": "Doutor Estranho",
        "tag_image": "/uploads/fotos/20210523072909_DoutorEstranho.jpg",
        "tag_status": "active",
        "news_id": 1143,
        "news_title": "Roteirista confirma conversas sobre trazer Deadpool em Doutor Estranho 2",
        "news_qtd": 79
    },
    {
        "tag_id": 25,
        "tag_title": "Doutor Estranho no Multiverso da Loucura",
        "tag_image": "/uploads/fotos/20220511101010_Doutorestranho2.jpg",
        "tag_status": "active",
        "news_id": 996,
        "news_title": "Doutor Estranho no Multiverso da Loucura bate US$ 500 milhões em bilheteria",
        "news_qtd": 51
    },
    {
        "tag_id": 21,
        "tag_title": "Cavaleiro da Lua",
        "tag_image": "/uploads/fotos/20220511090614_Cavaleirodalua.jpg",
        "tag_status": "active",
        "news_id": 579,
        "news_title": "Cavaleiro da Lua | May Calamawy torce por crossover com Blade e Doutor Estranho",
        "news_qtd": 48
    },
    {
        "tag_id": 27,
        "tag_title": "Stranger Things",
        "tag_image": "",
        "tag_status": "active",
        "news_id": 1680,
        "news_title": "Stranger Things | O que você precisa lembrar antes da 4ª temporada",
        "news_qtd": 33
    },
    {
        "tag_id": 16,
        "tag_title": "Thor Amor e Trovão",
        "tag_image": "/uploads/fotos/20220511092921_Thoramoretrovao.jpg",
        "tag_status": "active",
        "news_id": 242,
        "news_title": "Thor: Amor e Trovão será como filme sobre crise de meia-idade, diz Taika Waititi",
        "news_qtd": 10
    },
    {
        "tag_id": 18,
        "tag_title": "Morbius",
        "tag_image": "/uploads/fotos/20220511091611_Morbius.jpg",
        "tag_status": "active",
        "news_id": 423,
        "news_title": "Bilheterias de Morbius e Animais Fantásticos devem fechar no vermelho",
        "news_qtd": 7
    },
    {
        "tag_id": 9,
        "tag_title": "Cobra Kai",
        "tag_image": "/uploads/fotos/20210523070329_KobraKai.jpg",
        "tag_status": "active",
        "news_id": 125,
        "news_title": "Cobra Kai | 5ª temporada ganha data e teaser cheio de ação; veja",
        "news_qtd": 4
    },
    {
        "tag_id": 23,
        "tag_title": "Avatar: O Caminho da Água",
        "tag_image": "/uploads/fotos/20220511090002_Avatar2.jpg",
        "tag_status": "active",
        "news_id": 819,
        "news_title": "Avatar: O Caminho da Água | Novo teaser leva o público de volta a Pandora",
        "news_qtd": 3
    }
        
];

const TagsRecents = ({ navigation, route, ...props}) => {
    const [refreshing, setRefreshing] = useState(false);
    const clickBuscarRefreshing = (reload = true) => {
       

    }

    const clickBuscar = (reload = false) => {
        
    }

    const clickBuscarMais = (reload = false) => {
       
    }

    const HeaderList = ({ }) => (
      <></>
    )

    const renderItem = useCallback(
        ({ item, index }) =>
            <TouchableOpacity 
                key={index}
                onPress={() => (navigation.push(
                        'Tag',
                        {
                            data:{
                                "id": item.tag_id,
                                "title": item.tag_title,
                            },
                            title:'Tag',
                        }
                    ))
                }
            >
                <View key={index} style={styles.item}>
                    <Image
                        style={styles.itemImage}
                        resizeMode={ 'center'}
                        source={{
                            uri:Config.LOCAL_HOST_NOCINEMA+item.tag_image,
                        }}
                    />
                    <Text style={styles.itemText} >#{item.tag_title}</Text>
                </View>
            </TouchableOpacity>
           
    )

    const ITEM_HEIGHT = 200
    const keyExtractor = useCallback((item) => item.tag_id.toString(), [])

    useEffect(() => {
        clickBuscar(false)
    }, []);

    return (
        <View style={styles.sampleStyle}>
            <View style={styles.tagsListas}>
                <Text style={styles.title}>Tags Atualizadas Recentemente</Text>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={clickBuscarRefreshing} />
                    }
                    initialNumToRender={5}
                    scrollEnabled={true}
                    horizontal={true}
                    windowSize={Dimensions.get('window').width}
                    // inverted={true}	
                    // maxHeight={'100%'}
                    // refreshing={true}
                    showsHorizontalScrollIndicator={true}
                    data={SECTIONS}
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
            </View>
        </View>
    )

}

export default TagsRecents