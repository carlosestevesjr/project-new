import React, { useState, useEffect,  useCallback, useRef } from 'react';

//Utils
import _ from 'lodash'

//Components
import { API }   from '../../services/api'
import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

import { validateEmail, validateName } from '../../utils/index'

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
    const [enviando, setEnviando] = useState('');

    const [messageName, setMessageName] = useState(false)
    const [messageEmail, setMessageEmail] = useState(false)
    const [messageMensagem, setMessageMensagem] = useState(false)

    const enviarEmail =  async() => {

        setMessageName(false)
        setMessageEmail(false)
        setMessageMensagem(false)

        let erro = false
        if(!validateName(name)){
            setMessageName(true)
            erro = true
        }

        if(!validateEmail(email)){
            setMessageEmail(true)
            erro = true
        }
       
        if(message.length < 3){
            setMessageMensagem(true)
            erro = true
        }

        if(erro){
            return false
        }

        setEnviando(true)
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
           
            if(resp.status == 201 && resp.data.code == "001") {
                Alert.alert(
                    "Email ",
                    "Email enviado com sucesso.",
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                setEnviando(false)
            }else{
                let newArray = ""
              
                if(resp.data.content.dados.errors != undefined){
                    resp.data.content.dados.errors.map((erro, i) => {
                        // imprime a chave e o nome do respectivo
                        Object.keys(erro).forEach(
                            (chave) => { return newArray += resp.data.content.dados.errors[i][chave]+  '\n' } 
                        )
                        return true
                    })
                }
               
                Alert.alert(
                    "ERROS",
                    newArray,
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
                setEnviando(false)
            }
    
        } catch (error) {
            console.log('errou')
            console.log(error)
            setEnviando(false)
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

                            <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='user-circle'
                                    type='font-awesome'
                                    color={primary500}
                                    size={13}  
                                />
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Name"
                                    keyboardType='default'
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name) => setName(name)}
                                    value={name}
                                />
                            </View>
                            {
                                messageName && 
                                <View>
                                    <Text style={{padding:5, color:"#000", fontSize:13}}>
                                        O campo nome deve conter nome e sobrenome 
                                    </Text>
                                </View>
                            }
                           <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='envelope'
                                    type='font-awesome'
                                    color={primary500}
                                    size={13}  
                                />
                                <TextInput
                                    style={styles.inputs}
                                    placeholder="Email"
                                    keyboardType='default'
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => setEmail(email)}
                                    value={email}
                                />
                             </View>
                                {
                                    messageEmail && 
                                    <View >
                                        <Text style={{padding:5, color:"#000", fontSize:13}}>
                                            O campo email está incorreto  
                                        </Text>
                                    </View>
                                }
                                <TextInput
                                    style={styles.inputsMultline}
                                    placeholder="Mensagem"
                                    multiline={true}
                                    numberOfLines={10}
                                    onChangeText={(message) => setMessage(message)}
                                    value={message}
                                />
                           
                                {
                                    messageMensagem && 
                                    <View>
                                        <Text style={{padding:5, color:"#000", fontSize:13}}>
                                            O campo mensagem deve conter ao menos 3 letras 
                                        </Text>
                                    </View>
                                }

                                {
                                    !enviando &&
                                    <TouchableOpacity 
                                        style={[styles.buttonContainer, styles.loginButton, styles.btnSuccess, {width:'100%'}]} 
                                        onPress={() => (enviarEmail())}    
                                    >
                                        <Text style={styles.loginText}>ENVIAR</Text>
                                    </TouchableOpacity>
                                }
                                
                           
                        </View>
                    </View>
                </ScrollView>
            </View>

        </Components.Container>
    )
}

export default Screen;
