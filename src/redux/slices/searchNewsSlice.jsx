import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const searchNewsSlice = createSlice({
    name: 'search_news',
    initialState: {
        search_news: [],
        message: "",
    },
    reducers: {
        salvaSearchListaNews: (state, action) => {
            console.log('b',action.payload.params.busca)
            if(action.payload.params.busca == ""){
                state.search_news = []
            }else if(action.payload.reload){
                console.log('primeira condição')
                if(action.payload.data.content.dados.data.length != undefined){
                    state.search_news = action.payload.data.content.dados.data
                }
            }else{
                console.log('segunda condição')
                if(action.payload.data.content.dados.data.length > 0){
                    state.search_news = state.search_news.concat(action.payload.data.content.dados.data)
                }else{
                    // state.search_news = []
                }
            }
        },
    },
});

export const { 
    salvaSearchListaNews, 
} = searchNewsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const buscaNewsSearch = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaSearchNews } = API
        const resp = await buscaSearchNews(payload)
        if(resp.status == 200) {
            dispatch(
                salvaSearchListaNews({
                    'data':resp.data,
                    'reload': payload.params.reload,
                    'params': payload.params
                }),
            )
        }

    } catch (error) {
        console.log('errou aki')
        console.log(error)
        // dispatch(loginFailed());
    }
    dispatch(alteraStatusLoaderGeral(false))
    
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default searchNewsSlice.reducer;
