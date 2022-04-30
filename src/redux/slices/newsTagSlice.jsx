import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const newsTagSlice = createSlice({
    name: 'news_tag',
    initialState: {
        news_tag: [],
        message: "",
    },
    reducers: {
        salvaListaTagNews: (state, action) => {
            if(action.payload.reload){
                console.log('primeira condição')
                if(action.payload.data.content.dados.data.length > 0){
                    state.news_tag = []
                    state.news_tag = action.payload.data.content.dados.data
                }else{
                    // state.news_tag = []
                }
            }else{
                console.log('segunda condição')
                if(action.payload.data.content.dados.data.length > 0){
                    state.news_tag = state.news_tag.concat(action.payload.data.content.dados.data)
                }else{
                    // state.news_tag = []
                }
            }
        },
    },
});

export const { 
    salvaListaTagNews, 
} = newsTagSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const buscaNewsTag = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
   
    try {
        const { buscaNewsTag } = API
        const resp = await buscaNewsTag(payload)
        // console.log('data tag', resp)
        if(resp.status == 200) {
            dispatch(
                salvaListaTagNews({
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

export default newsTagSlice.reducer;
