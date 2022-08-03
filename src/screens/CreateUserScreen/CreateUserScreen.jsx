import React, { useState, useEffect, useCallback, useRef } from 'react';

// import { alteraStatusLoaderGeral } from './../../redux/slices/geralSlice'

import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import { Icon, CheckBox } from 'react-native-elements'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { Login, LoginOut, CreateUser } from '../../redux/slices/geralPersistSlice'

import theme, { primary500, light, background } from '../../theme/index'
import { verifyApiAutorization, validateEmail, validateName, validateSenha } from '../../utils/index'
import Components from '../../components'

import styles from './Styles';


const Screen = ({ navigation, route, ...props }) => {

    //Variables Default
    const dispatch = useDispatch([])

    const [messageName, setMessageName] = useState(false)
    const [messageEmail, setMessageEmail] = useState(false)
    const [messagePassword, setMessagePassword] = useState(false)
    const [messageConfirmPassword, setMessageConfirmPassword] = useState(false)
    const [messageSexo, setMessageSexo] = useState(false)
    const [ocultaSenha, setOcultaSenha] = useState(true)
   
    const [feminino, setFeminino] = useState(false)
    const [masculino, setMasculino] = useState(false)
    const [outros, setOutros] = useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Get State
    const user = useSelector((state) => state.geral_persist.user)
    const apiToken = verifyApiAutorization(user)
    const news_atualiza = useSelector((state) => {
        // console.log('state.news.news_atualiza', state.news.news_atualiza)
        return state.news.news_atualiza
    } )
    
    const loader = useSelector((state) => state.geral.loaderGeral.open)

    function checkFeminino(){
        setMasculino(false)
        setFeminino(true)
        setOutros(false)
    }

    function checkMasculino(){
        setFeminino(false)
        setMasculino(true)
        setOutros(false)
    }

    function checkOutros(){
        setOutros(true)
        setFeminino(false)
        setMasculino(false)
    }

    const criarUsuario = () => {
        let erro = false

        setMessageName(false)
        setMessageEmail(false)
        setMessagePassword(false)
        setMessageSexo(false)
        setMessageConfirmPassword(false)

        if(!validateName(name)){
            setMessageName(true)
            erro = true
        }

        if(!validateEmail(email)){
            setMessageEmail(true)
            erro = true
        }
      
        if(!validateSenha(password)){
            setMessagePassword(true)
            erro = true
        }

        if(feminino == false && masculino == false && outros == false){
            setMessageSexo(true)
            erro = true
        }

        if(password != confirmPassword){
            setMessageConfirmPassword(true)
            erro = true
        }

        if(erro){
            return false
        }
        
        let sexo = {}
        if(masculino){
            sexo = "masculino"
        }else if(feminino){
            sexo = "feminino"
        }else if(outros){
            sexo = "outros"
        }
       
        let userData ={
            name,
            email,
            sexo,
            password
        }
        
        dispatch(
            CreateUser(
                {
                    params: userData
                }
            )
        )
    }

    useEffect(() => {
        // console.log('Montou Create User')
    }, []);

    useEffect(() => {
        return () => {
            // console.log('Desmontou Create User')
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
                    <View style={styles.containerBox}>
                        <View>
                            <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='user-circle'
                                    type='font-awesome'
                                    color={primary500}
                                    size={13}  
                                />
                                <TextInput style={styles.inputs}
                                    placeholder="Usuário"
                                    value={name}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name) => setName(name)}
                                />
                            </View>
                            {
                                messageName && 
                                <View>
                                    <Text style={{padding:5, color:"#fff", fontSize:13}}>
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
                                    size={16}  
                                />
                                <TextInput style={styles.inputs}
                                    placeholder="Email"
                                    value={email}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(email) => setEmail(email)}
                                />
                            </View>
                            {
                                messageEmail && 
                                <View >
                                    <Text style={{padding:5, color:"#fff", fontSize:13}}>
                                        O campo email está incorreto  
                                    </Text>
                                </View>
                            }
                            
                            <View style={styles.boxCheckbox} >
                                <View style={styles.checkboxContainer}>
                                    <CheckBox
                                        containerStyle={styles.checkBoxText}
                                        size={18}
                                        textStyle={{fontSize:14, color:primary500}}
                                        checkedColor={primary500}
                                        title='Masculino'
                                        checked={masculino}
                                        onPress={() => checkMasculino()}
                                    />
                                    <CheckBox
                                        containerStyle={styles.checkBoxText}
                                        size={18}
                                        textStyle={{fontSize:14, color:primary500}}
                                        checkedColor={primary500}
                                        title='Feminino'
                                        checked={feminino}
                                        onPress={() => checkFeminino()}
                                    />
                                    <CheckBox
                                        containerStyle={styles.checkBoxText}
                                        size={18}
                                        textStyle={{fontSize:14, color:primary500}}
                                        checkedColor={primary500}
                                        title='Outros'
                                        checked={outros}
                                        onPress={() => checkOutros()}
                                    />
                                </View>
                                {
                                    messageSexo && 
                                    <View style={{width:'100%'}}>
                                        <Text style={{padding:5, color:"#fff", fontSize:13}}>
                                            O sexo deve ser selecionado
                                        </Text>
                                    </View>
                                }
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='lock'
                                    type='font-awesome'
                                    color={primary500}
                                    size={16}  
                                />
                                <TextInput style={styles.inputs}
                                    placeholder="Senha"
                                    value={password}
                                    secureTextEntry={ocultaSenha}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(password) => setPassword(password)}
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
                            <View style={styles.inputContainer}>
                                <Icon
                                    raised
                                    name='lock'
                                    type='font-awesome'
                                    color={primary500}
                                    size={16}  
                                />
                                <TextInput style={styles.inputs}
                                    placeholder="Confirmar Senha"
                                    value={confirmPassword}
                                    secureTextEntry={ocultaSenha}
                                    underlineColorAndroid='transparent'
                                    onChangeText={(confirm_password) => setConfirmPassword(confirm_password)}
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
                            {
                                messagePassword && 
                                <View >
                                    <Text style={{padding:5, color:"#fff", fontSize:13}}>
                                        A senha deve conter 1 letra maiúscula, 1 número, 1 caracter especial e 8 a 20 caracteres. 
                                    </Text>
                                </View>
                            }
                            {
                                messageConfirmPassword && 
                                <View >
                                    <Text style={{padding:5, color:"#fff", fontSize:13}}>
                                        A senha e a confirmação de senha devem ser iguais. 
                                    </Text>
                                </View>
                            }
                          
                        </View>
                        <View style={styles.containerAcoes}>
                            <TouchableOpacity 
                                style={[styles.buttonContainer, styles.loginButton, styles.btnSuccess, {width:'100%'}]} 
                                onPress={() => (criarUsuario())}    
                            >
                                <Text style={styles.loginText}>CADASTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView> 
            </View>
            
           
        </Components.Container>
    )
}

export default Screen;
