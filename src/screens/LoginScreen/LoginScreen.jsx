import React, { useState, useEffect, useCallback, useRef } from 'react';

// import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { Login, LoginOut } from '../../redux/slices/geralPersistSlice'

import theme, { primary500, light, background } from '../../theme/index'
import { verifyApiAutorization } from '../../utils/index'
import Components from '../../components'

import styles from './Styles';

const Screen = ({ navigation, route, ...props }) => {

    //Variables Default
    const dispatch = useDispatch([])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [ocultaSenha, setOcultaSenha] = useState(true)

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)
    const news_atualiza = useSelector((state) => {
        // console.log('state.news.news_atualiza', state.news.news_atualiza)
        return state.news.news_atualiza
    } )
    
    const logar = () => {
        let erro = false

        let userData = {
            email,
            password
        }

        dispatch(
            Login(
                {
                    params: userData
                }
            )
        )

    }

    const logOut = () => {

        dispatch(

            LoginOut(
                {
                    params: {
                        apiToken
                    }
                }
            )

        )

    }

    useEffect(() => {
        // console.log('Montou Login')
    }, []);

    useEffect(() => {
        return () => {
            // console.log('Desmontou Login')
        }
    }, []);

    return (
        <Components.Container title="home">
            <View style={styles.container}>
                <ScrollView style={styles.containerScrow}>
                    <View style={styles.containerLogo}>
                        <Image
                            style={styles.cabecalhoLogo}
                            resizeMode={'contain'}
                            source={require('../../assets/images/commons/logo_clear.png')}
                        />
                    </View>
                    {
                        (user.api_token != undefined && user.api_token != "") ?
                            <>
                                <View style={styles.containerBox}>

                                    <View style={styles.inputContainer}>
                                        <Icon
                                            raised
                                            name='user-circle'
                                            type='font-awesome'
                                            color={primary500}
                                            size={18}
                                        />
                                        <TextInput style={styles.inputs}
                                            placeholder="Email"
                                            keyboardType="email-address"
                                            editable={false}
                                            underlineColorAndroid='transparent'
                                            value={user.name}
                                            
                                        />
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <Icon
                                            raised
                                            name='envelope'
                                            type='font-awesome'
                                            color={primary500}
                                            size={18}
                                        />
                                        <TextInput style={styles.inputs}
                                            placeholder="Email"
                                            keyboardType="email-address"
                                            editable={false}
                                            underlineColorAndroid='transparent'
                                            value={user.email}
                                        />
                                    </View>
                                </View>

                                <View style={styles.containerBox}>
                                    <View style={styles.containerAcoes}>
                                        <TouchableOpacity
                                            style={[styles.buttonContainer, styles.loginButton, styles.btnCustom1]}
                                            onPress={() => (logOut())}
                                        >
                                            <Text style={styles.loginText}>SAIR</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </>
                        :
                            <View style={styles.containerBox}>
                                <View>
                                    <View style={styles.inputContainer}>
                                        <Icon
                                            raised
                                            name='envelope'
                                            type='font-awesome'
                                            color={primary500}
                                            size={18}
                                        />
                                        <TextInput style={styles.inputs}
                                            placeholder="Email"
                                            keyboardType="email-address"
                                            underlineColorAndroid='transparent'
                                            value={email}
                                            onChangeText={(email) => setEmail(email.trim())}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Icon
                                            raised
                                            name='unlock-alt'
                                            type='font-awesome'
                                            color={primary500}
                                            size={18}
                                        />
                                        <TextInput style={styles.inputs}
                                            placeholder="Senha"
                                            secureTextEntry={ocultaSenha}
                                            underlineColorAndroid='transparent'
                                            value={password}
                                            onChangeText={(password) => setPassword(password.trim())}
                                        />
                                        {
                                        ocultaSenha ?
                                            <TouchableOpacity
                                                onPress={() => (setOcultaSenha(false))}
                                            >
                                                <Icon
                                                    raised
                                                    name='eye'
                                                    type='font-awesome'
                                                    color={primary500}
                                                    size={16}  
                                                />
                                            </TouchableOpacity>
                                        :
                                            <TouchableOpacity
                                                onPress={() => (setOcultaSenha(true))}
                                                >
                                                    <Icon
                                                        raised
                                                        name='eye-slash'
                                                        type='font-awesome'
                                                        color={primary500}
                                                        size={16}  
                                                    />
                                            </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                                <View style={styles.containerAcoes}>
                                    <TouchableOpacity
                                        style={[styles.buttonContainer, styles.loginButton, styles.btnPrimary]}
                                        onPress={() => (navigation.navigate('Criar Usuário'))}
                                    >
                                        <Text style={styles.loginText}>CADASTRAR</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.buttonContainer, styles.loginButton, styles.btnSuccess]}
                                        onPress={() => logar()}
                                    >
                                        <Text style={styles.loginText}>LOGIN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                    
                   
                </ScrollView>
            </View>
        </Components.Container>
    )
}

export default Screen;