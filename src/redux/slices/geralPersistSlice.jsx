import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'
import { salvaAtualizaNews } from './newsSlice'

import { Alert } from "react-native";

export const geralPersistSlice = createSlice({
    name: 'geral_persist',
    initialState: {
        user:[],
        modalDisclemer: {
            open:true
        },
        message: "",
    },
    reducers: {
        salvaUser: (state, action) => {
            state.user = []
            // console.log('segunda condição')
            if(action.payload.data.content.dados){
                state.user = action.payload.data.content.dados
            }
          
        },
        limpaUser: (state, action) => {
            state.user = {}
        },
        alterModalDisclemer: (state, action) => {
            // console.log('modalDisclemer', action.payload.open)
            state.modalDisclemer.open = action.payload.open
        },
    },
});

export const { 
    alterModalDisclemer, 
    salvaUser,
    limpaUser
} = geralPersistSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const alteraModalDisclemer = payload => async(dispatch) => {
    try {
        // console.log('disparado dispatch teste'),
        dispatch(
            alterModalDisclemer(payload)
        )

    } catch (error) {
        console.log('erro ao alterar o disclemer')
        // console.log(error)
        // dispatch(loginFailed());
    }
};

export const Login = payload => async(dispatch) => {
    
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaLogin } = API
        const resp = await buscaLogin(payload)
        if(resp.status == 200 && resp.data.code =="000") {
            dispatch(
                salvaUser({
                    'data':resp.data,
                })
            )

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
        }

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }

    dispatch(
        salvaAtualizaNews(
            {
                params:{
                    'news_atualiza':true
                }
            }
        ),
    ) 

    dispatch(alteraStatusLoaderGeral(false))
    
};

export const CreateUser = payload => async(dispatch) => {
    
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaCreateUser } = API
        const resp = await buscaCreateUser(payload)
        console.log('create',resp.data )
        
        if(resp.status == 201 && resp.data.code == "001" ) {
            Alert.alert(
                "Alerta Cadastro",
                "Cadastrado com sucesso",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
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
        }

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }

    dispatch(
        salvaAtualizaNews(
            {
                params:{
                    'news_atualiza':true
                }
            }
        ),
    ) 

    dispatch(alteraStatusLoaderGeral(false))
    
};

export const LoginOut = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaLoginOut } = API
        const resp = await buscaLoginOut(payload)
        if(resp.status == 200) {
            dispatch(
                limpaUser(),
            )
        }

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }

    dispatch(
        salvaAtualizaNews(
            {
                params:{
                    'news_atualiza':true
                }
            }
        ),
    ) 

    dispatch(alteraStatusLoaderGeral(false))
    
};

export default geralPersistSlice.reducer;
