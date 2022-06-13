import React, { useState, useEffect,  useCallback, useRef } from 'react';

// import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../../redux/slices/geralPersistSlice'

import theme, { primary500, light, background } from '../../theme/index'
import Components from '../../components'

import styles from './Styles';

const Screen = ({ navigation, route, ...props }) => {

    //Variables Default
    const dispatch = useDispatch()

    const [email, setEmail] = useState('carlosestevesjr0@gmail.com');
    const [password, setPassword] = useState('nerd0471');

    const logar = () => {
        let userData ={
            email,
            password
        }

        dispatch(
            Login(
                {
                    params:userData
                }
            ),
        )
    }

    const user = useSelector((state) => state.geral_persist.user)
    const loader = useSelector((state) => state.geral.loaderGeral.open)
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
                                    value={email}
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
                                    value={password}
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
                    {
                        ( user.api_token != undefined && user.api_token != "" ) ?
                                <>
                                    <Text>{user.api_token}</Text> 
                                    <Text>{user.email}</Text> 
                                    <Text>{user.name}</Text> 
                                </>
                            :
                                <View  style={{width:"100%",  flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
                                    {
                                        loader ?
                                            <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Carregando...</Text>
                                        :
                                    
                                            <Text style={{ color: '#333', fontSize:18, fontWeight:'bold', flex:1, textAlign:'center',  }}>Não há notícias</Text>
                                        
                                    }
                                </View>
                    }
                </ScrollView>
            </View>
        </Components.Container>
    )
}

export default Screen;