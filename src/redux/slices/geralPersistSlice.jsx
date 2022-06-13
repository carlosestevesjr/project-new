import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const geralPersistSlice = createSlice({
    name: 'geral_persist',
    initialState: {
        user:{},
        modalDisclemer: {
            open:true
        },
        message: "",
    },
    reducers: {
        
        salvaUser: (state, action) => {
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
        if(resp.status == 200) {
            dispatch(
                salvaUser({
                    'data':resp.data,
                    'reload': payload.params.reload
                }),
            )
        }

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }
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
    dispatch(alteraStatusLoaderGeral(false))
    
};

export default geralPersistSlice.reducer;
