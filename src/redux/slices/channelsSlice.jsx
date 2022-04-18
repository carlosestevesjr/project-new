import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const channelsSlice = createSlice({
    name: 'channels',
    initialState: {
        channels: [],
        message: "",
    },
    reducers: {
        salvaListaChannels: (state, action) => {
          
            // console.log('status reload', action.payload.reload)
            // console.log('state.channels', state.channels)
            if(action.payload.reload){
                console.log('primeira condição')
                if(action.payload.data.content.dados.data.length > 0){
                    state.channels = []
                    state.channels = action.payload.data.content.dados.data
                }
            }else{
                console.log('segunda condição')
                if(action.payload.data.content.dados.data.length > 0){
                    state.channels = state.channels.concat(action.payload.data.content.dados.data)
                }
            }
        },
    },
});

export const { 
    salvaListaChannels, 
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
        console.log('dasdsa',resp.status )
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default channelsSlice.reducer;
