import React, { useState, useEffect,  useCallback, useRef } from 'react';

//Utils
import _ from 'lodash'

//Components
import { API }   from '../../services/api'
import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

import theme, { primary500, light, background } from '../../theme/index'
import Components from '../../components'

//Styles
import styles from './Styles'

const Screen = ({ navigation, route, ...props }) => {

    //Variables Default
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [messageValidation, setValidation] = useState('');

    const enviarEmail =  async() => {

        dispatch(alteraStatusLoaderGeral(true))

        try {
            const { sendContact } = API
            const resp = await sendContact(
                {
                    'params': {
                        name:name,
                        email:email,
                        message:message,
                    }
                }
            )
            if(resp.status == 200) {
                console.log('mensagem enviada com sucesso')
            }
    
        } catch (error) {
            console.log('errou')
            console.log(error)
            // dispatch(loginFailed());
        }
        dispatch(alteraStatusLoaderGeral(false))
      
	}

    return (
        <Components.Container title="home">
             
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.contentView}>
                        <Text style={styles.modalTextDestaque}>
                           Olá, fique a vontade pra nos mandar uma mensagem
                        </Text>
                    
                        <Text style={styles.modalText}>
                            {/* <Text style={styles.modalTextBold}>
                                Produtor de conteúdo: &nbsp;
                            </Text> */}
                            O seu feedback irá nos ajudar muito a aprimorar nossos app.
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={styles.modalTextBold}>
                                Produtor de conteúdo: &nbsp;
                            </Text>
                            Caso você tenha um canal e tem vontade de colocá-lo em nosso app mande o link do seu (Canal no youtube); (Site); (Podcast do Spotify); na mensagem abaixo.
                            Lembrando que não é garantido que conseguiremos colocar, mas faremos todo esforço para conseguir. 
                        </Text>
                        <View style={styles.containerBox}>
                            <View>
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Name"
                                    keyboardType='default'
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name) => setName(name)}
                                    value={name}
                                />
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Email"
                                    keyboardType='default'
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => setEmail(email)}
                                    value={email}
                                />
                                <TextInput
                                    style={styles.inputsMultline}
                                    placeholder="Mensagem"
                                    multiline={true}
                                    numberOfLines={10}
                                    onChangeText={(message) => setMessage(message)}
                                    value={message}
                                />
                                <View style={styles.buttonContent}>
                                    <Pressable
                                        style={[styles.button, styles.buttonOpen]}
                                        onPress={() => enviarEmail()}
                                    >
                                        <Text style={styles.textStyle}>Enviar</Text>
                                    </Pressable>
                                </View>
                                {
                                    <Text>
                                        {messageValidation}
                                    </Text>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </Components.Container>
    )
}

export default Screen;
