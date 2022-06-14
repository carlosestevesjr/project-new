import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        message_news: "",
        news_tag: [],
        message_news_tag: "",
        news_channel: [],
        message_news_channel: "",
        search_news: [],
        message_search_news: "Faça sua busca no campo abaixo",
    },
    reducers: {
        salvaListaNews: (state, action) => {
            if(action.payload.reload){
                state.news = []
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length > 0){
                    state.news = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.news = state.news.concat(action.payload.data.content.dados)
                }else{
                    // state.news = []
                }
            }
        },
        limpaListaNews: (state, action) => {
            state.news = []
        },
        salvaListaTagNews: (state, action) => {
            if(action.payload.reload){
                state.news_tag = []
                // console.log('primeira condição esse')
                if(action.payload.data.content.dados.length > 0){
                    state.news_tag = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição esse ')
                if(action.payload.data.content.dados.length > 0){
                    state.news_tag = state.news_tag.concat(action.payload.data.content.dados)
                }else{
                    // state.news_tag = []
                }
            }
        },
        limpaListaTagNews: (state, action) => {
            state.news_tag = []
        },
        salvaListaNewsChannel: (state, action) => {
            // console.log('status reload', action.payload.reload)
            if(action.payload.reload){
                state.news_channel = []
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length > 0){
                    state.news_channel = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.news_channel = state.news_channel.concat(action.payload.data.content.dados)
                }else{
                    // state.news_channel = []
                }
            }
        },
        limpaListaNewsChannel: (state, action) => {
            state.news_channel = []
        },
        salvaSearchListaNews: (state, action) => {
            // console.log('b',action.payload.params.busca)
            if(action.payload.params.busca == ""){
                state.search_news = []
                state.message_search_news= "Faça sua busca no campo abaixo"
              
            }else if(action.payload.reload){
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length != undefined){
                    state.search_news = action.payload.data.content.dados
                }
                state.message_search_news= "Não há notícias"
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.search_news = state.search_news.concat(action.payload.data.content.dados)
                }
                state.message_search_news= ""
            }
        },
        limpaSearchListaNews: (state, action) => {
            state.search_news = []
        },
        
    },
});

export const { 
    salvaListaNews,
    limpaListaNews,
    salvaListaTagNews,
    limpaListaTagNews,
    salvaListaNewsChannel,
    limpaListaNewsChannel,
    salvaSearchListaNews,
    limpaSearchListaNews
} = newsSlice.actions;

export const buscaNews = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaNews } = API
        const resp = await buscaNews(payload)
        console.log('resp',resp)
        console.log('payload',payload)
        if(resp.status == 200) {
            dispatch(
                salvaListaNews({
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

export const limpaNews = payload => async(dispatch) => {
    dispatch(
        limpaListaNews()
    )
}

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

export const limpaNewsTag = payload => async(dispatch) => {
    dispatch(
        limpaListaTagNews()
    )
}

export const buscaNewsChannel = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaNewsChannel } = API
        const resp = await buscaNewsChannel(payload)
        if(resp.status == 200) {
            dispatch(
                salvaListaNewsChannel({
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

export const limpaNewsChannel = payload => async(dispatch) => {
    dispatch(
        limpaListaNewsChannel()
    )
}

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

export const limpaNewsSearch = payload => async(dispatch) => {
    dispatch(
        limpaSearchListaNews()
    )
}



export default newsSlice.reducer;
