import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const channelsSlice = createSlice({
    name: 'channels',
    initialState: {
        channels: [],
        message_channels: "",
        channels_search: [],
        message_channels_search: "Faça sua busca no campo abaixo",
    },
    reducers: {
        salvaListaChannels: (state, action) => {
          
            // console.log('status reload', action.payload.reload)
            // console.log('state.channels', state.channels)
            if(action.payload.reload){
                // console.log('primeira condição')
                state.channels = []
                if(action.payload.data.content.dados.length > 0){
                    state.channels = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.channels = state.channels.concat(action.payload.data.content.dados)
                }else{
                    // state.channels = []
                }
            }
        },
        limpaListaChannels: (state, action) => {
            state.channels = []
        },
        salvaListaChannelsSearch: (state, action) => {

            // console.log('t',action.payload.params)
            if(action.payload.params.busca == ""){
                state.channels_search = []
                state.message_channels_search= "Faça sua busca no campo abaixo"
              
            }else if(action.payload.reload){
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length != undefined){
                    state.channels_search = action.payload.data.content.dados
                }
                state.message_channels_search= "Não há canais"
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.channels_search = state.channels_search.concat(action.payload.data.content.dados)
                }
                state.message_channels_search= ""
            }
          
        },
        limpaListaChannelsSearch: (state, action) => {
            state.channels_search = []
        },
       
    },
});

export const { 
    salvaListaChannels,
    limpaListaChannels,
    salvaListaChannelsSearch,
    limpaListaChannelsSearch 
} = channelsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const buscaChannels = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaChannels } = API
        const resp = await buscaChannels(payload)
       
        if(resp.status == 200) {
            dispatch(
                salvaListaChannels({
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

export const limpaChannels = payload => async(dispatch) => {
    dispatch(
        limpaListaChannels()
    )
}

export const buscaChannelsSearch = payload => async(dispatch) => {
   
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaChannelsSearch } = API
        const resp = await buscaChannelsSearch(payload)
        if(resp.status == 200) {
            dispatch(
                salvaListaChannelsSearch({
                    'data':resp.data,
                    'reload': payload.params.reload,
                    'params': payload.params
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

export const limpaChannelsSearch = payload => async(dispatch) => {
    dispatch(
        limpaListaChannelsSearch()
    )
}


export default channelsSlice.reducer;
