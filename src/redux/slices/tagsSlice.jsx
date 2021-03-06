import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

import { alteraStatusLoaderGeral } from './geralSlice'

import { buscaNews, salvaAtualizaNews } from './newsSlice'


export const tagsSlice = createSlice({
    name: 'tags',
    initialState: {
        tags: [],
        tags_recents: [],
        message: "",
        tags_search: [],
        message_tags_search: "Faça sua busca no campo abaixo",
    },
    reducers: {
        salvaListaTags: (state, action) => {
          
            // console.log('status reload', action.payload.reload)
            // console.log('state.tags', state.tags)
            if(action.payload.reload){
                state.tags = []
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length > 0){
                    state.tags = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.tags = state.tags.concat(action.payload.data.content.dados)
                }
            }
        },
        limpaListaTags: (state, action) => {
            state.tags = []
        },
       
        salvaListaTagsRecents: (state, action) => {
          
            // console.log('state.tags', state.tags)
            if(action.payload.reload){
                state.tags_recents = []
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length > 0){
                    state.tags_recents = action.payload.data.content.dados
                }
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.tags_recents = state.tags_recents.concat(action.payload.data.content.dados)
                }
            }
        },
        salvaListaTagsSearch: (state, action) => {

            // console.log('t',action.payload.params)
            if(action.payload.params.busca == ""){
                state.tags_search = []
                state.message_tags_search= "Faça sua busca no campo abaixo"
              
            }else if(action.payload.reload){
                // console.log('primeira condição')
                if(action.payload.data.content.dados.length != undefined){
                    state.tags_search = action.payload.data.content.dados
                }
                state.message_tags_search= "Não há tags"
            }else{
                // console.log('segunda condição')
                if(action.payload.data.content.dados.length > 0){
                    state.tags_search = state.tags_search.concat(action.payload.data.content.dados)
                }
                state.message_tags_search= ""
            }
        },
        limpaListaTagsSearch: (state, action) => {
            state.tags_search = []
        },
        salvaCheckTags: (state, action) => {
            if(action.payload.list_tags.length > 0){
                state.tags = action.payload.list_tags
            }
        },
        salvaCheckTagsSearch: (state, action) => {
            // console.log('action.payload.list_tags',action.payload.list_tags)
            if(action.payload.list_tags.length > 0){
                state.tags_search = action.payload.list_tags
            }
        },
    },
});

export const { 
    salvaListaTags,
    limpaListaTags,
    salvaListaTagsRecents,
    salvaListaTagsSearch,
    limpaListaTagsSearch,
    salvaCheckTags,
    salvaCheckTagsSearch 
} = tagsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const buscaTags = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaTags } = API
        const resp = await buscaTags(payload)
       
        if(resp.status == 200) {
            dispatch(
                salvaListaTags({
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

export const limpaTags = payload => async(dispatch) => {
    dispatch(
        limpaListaTags()
    )
}

export const buscaTagsRecents = payload => async(dispatch) => {
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaTagsRecents } = API
        const resp = await buscaTagsRecents(payload)
       
        if(resp.status == 200) {
            dispatch(
                salvaListaTagsRecents({
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

export const buscaTagsSearch = payload => async(dispatch) => {
   
    dispatch(alteraStatusLoaderGeral(true))
    try {
        const { buscaTagsSearch } = API
        const resp = await buscaTagsSearch(payload)
        if(resp.status == 200) {
            dispatch(
                salvaListaTagsSearch({
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

export const limpaTagsSearch = payload => async(dispatch) => {
    dispatch(
        limpaListaTagsSearch()
    )
}

export const buscaSetTags = payload => async(dispatch) => {
   
    dispatch(alteraStatusLoaderGeral(true))
    let resp = null
    try {
        if(payload.params.select == 0 ){
            const { unsetTag } = API
            resp = await unsetTag(payload)
            
        }else{
            const { setTag } = API
            resp = await setTag(payload)
        }

       
        let list_tags = payload.params.list_tags
        if(resp.status == 200 && resp.data.code == '001') {
            
            const tags_id = payload.params.tags_id
            
            //Percorre os canais selecionando a lista
            let newArray = list_tags.map((tags) => {
                let obj = Object.assign({}, tags)
                if(tags_id == tags.tag_slug){
                    if(payload.params.select == 0 ){
                        obj.select = payload.params.select
                    }else{
                        obj.select = payload.params.select
                    }
                }
                return obj
            });
            
            dispatch(
                salvaCheckTags({
                    'list_tags':newArray
                }),
            )
          
        }else{
          
        }
     
        dispatch(alteraStatusLoaderGeral(false))

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
    
}

export const buscaSetTagsSearch = payload => async(dispatch) => {
   
    dispatch(alteraStatusLoaderGeral(true))
    let resp = null
    try {
        if(payload.params.select == 0 ){
            const { unsetTag } = API
            resp = await unsetTag(payload)
            
        }else{
            const { setTag } = API
            resp = await setTag(payload)
        }

        let list_tags = payload.params.list_tags
        if(resp.status == 200 && resp.data.code == '001') {
            
            const tags_id = payload.params.tags_id
            
            //Percorre os canais selecionando a lista
            let newArray = list_tags.map((tags) => {
                let obj = Object.assign({}, tags)
                if(tags_id == tags.tag_slug){
                    if(payload.params.select == 0 ){
                        obj.select = payload.params.select
                    }else{
                        obj.select = payload.params.select
                    }
                }
                return obj
            });
            
            dispatch(
                salvaCheckTagsSearch({
                    'list_tags':newArray
                }),
            )
          
        }else{
          
        }

        //Atualiza Home
        dispatch(
            buscaNews(
                {
                    params:{
                        apiToken:payload.params.apiToken,
                        v_page: 1,
                        qtd: 20,
                        reload: true
                    }
                }
            )
        )
        dispatch(
          
            buscaTagsRecents(
                {
                    params:{
                        apiToken:payload.params.apiToken,
                        dateInitial:"",
                        dateFinal:"",
                        page:1,
                        qtd: 1000,
                        reload: true
                    }
                }
            )
        )

        dispatch(alteraStatusLoaderGeral(false))

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }
    
}

export default tagsSlice.reducer;
