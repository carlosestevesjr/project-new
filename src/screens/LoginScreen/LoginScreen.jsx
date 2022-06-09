import React, { useState, useEffect,  useCallback, useRef } from 'react';

// import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

import theme, { primary500, light, background } from '../../theme/index'
import Components from '../../components'

import styles from './Styles';

const Screen = ({ navigation, route, ...props }) => {

    const goToHomeScreen = () => navigation.navigate('Home');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logar = () => {
        let userData ={
            email,
            password
        }
        // props.logar(navigation , userData)
    }
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
                    <View style={styles.containerBox}>
                        <View>
                            <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='user-circle'
                                    type='font-awesome'
                                    color={primary500}
                                    size={18}  
                                />
                                <TextInput style={styles.inputs}
                                    placeholder="Usuário"
                                    keyboardType="email-address"
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => setEmail(email)}
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
                                    secureTextEntry={true}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                        </View>
                        <View style={styles.containerAcoes}>
                            <TouchableOpacity 
                                style={[styles.buttonContainer, styles.loginButton, styles.btnPrimary]} 
                                onPress={() => (navigation.navigate('Criar Usuário'))}    
                            >
                                <Text style={styles.loginText}>NOVO CADASTRO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.buttonContainer, styles.loginButton, styles.btnSuccess]} 
                                onPress={() => logar()}    
                            >
                                <Text style={styles.loginText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Components.Container>
    )
}

export default Screen;