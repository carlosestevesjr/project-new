import React, { useState, useEffect,  useCallback, useRef } from 'react';

//Utils
import _ from 'lodash'

//Components
import { View, Text, Image, TouchableOpacity, Pressable, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import theme, { primary500, light, background } from '../../theme/index'
import Components from '../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props }) => {

    // const [active, setActive] = React.useState('');

    return (
        <Components.Container title="home">
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.contentView}>
                        <Text style={styles.modalTextDestaque}>
                            Oi, que legal ver você aqui, antes de começar gostaria de pontuar algumas coisas:
                        </Text>
                    
                        <Text style={styles.modalText}>
                            <Text style={styles.modalTextBold}>
                                Produtor de conteúdo: &nbsp;
                            </Text>
                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={styles.modalTextBold}>
                                Usuário: &nbsp;
                            </Text>
                            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                </View>
            </View>
        </Components.Container>
    )
}

export default Screen;
