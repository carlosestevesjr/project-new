
import { instance as API }  from './AxiosInstance'

export const api = {
    get: async (route , payload) => await API.get(route, { 
        // headers: {
        //     'AuthorizationApi': payload.params.apiToken
        // } 
    }),
    post: async (route , payload) => await API.post(route, payload.params, { 
        // headers: {
        //     'AuthorizationApi':  payload.params.apiToken
        // }  
    }),
    put: async (route, payload) => await API.update(route, payload.params, { 
        // headers: {
        //     'AuthorizationApi':  payload.params.apiToken
        // } 
    }),
    delete: async (route, payload) => await API.delete(route, payload.params, { 
        // headers: {
        //     'AuthorizationApi':  payload.params.apiToken
        // } 
    }),
}

const apiRoutes = {
  
    //Pokemon
    buscaPokemon: (payload) => api.get("/pokemon/"+ payload.params.id +"/" , payload), 

    //Channels -------------------------------------------------------------------
    buscaChannels: (payload) => {
        // console.log('route' ,"/v1/lista-channels/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd)
        return api.get("/v1/lista-channels/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd, payload) 
    },

    buscaChannelsSearch: (payload) => {
        // console.log('route' ,"/v1/lista-channels-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca)
        return api.get(
            "/v1/lista-channels-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca, payload) 
    },

    //News -------------------------------------------------------------------
    buscaNews: (payload) => {
        console.log('route' ,"/v1/lista-news?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&apiToken="+payload.params.apiToken)
        return api.get("/v1/lista-news?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&apiToken="+payload.params.apiToken, payload)  
    }, 

    buscaSearchNews: (payload) => {
        console.log("/v1/lista-news-search?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca+"&apiToken="+payload.params.apiToken)
        return api.get("/v1/lista-news-search?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca+"&apiToken="+payload.params.apiToken, payload) 
    },

    buscaNewsTag: (payload) => {
        // console.log('route' ,"/v1/lista-news-tag/"+payload.params.tag_id+"?page="+ payload.params.v_page+"&qtd="+ payload.params.qtd )
        return api.get("/v1/lista-news-tag/"+payload.params.tag_id+"?page="+ payload.params.v_page+"&qtd="+ payload.params.qtd+"&apiToken="+payload.params.apiToken , payload) 
    },

    buscaNewsChannel: (payload) => {
        // console.log('route' ,"/v1/lista-news-channel/"+payload.params.channel_id+"?page="+ payload.params.v_page+"&qtd="+ payload.params.qtd)
        return api.get("/v1/lista-news-channel/"+payload.params.channel_id+"?page="+ payload.params.v_page+"&qtd="+ payload.params.qtd+"&apiToken="+payload.params.apiToken, payload) 
    },

    //Tags -------------------------------------------------------------------
    buscaTagsRecents: (payload) => {
        // console.log('route' ,"/v1/lista-tags-recentes?page="+payload.params.v_page+"&qtd="+payload.params.qtd+"&dateInitial="+payload.params.dateInitial+"&dateFinal="+payload.params.dateFinal+"")
        return api.get("/v1/lista-tags-recentes?page="+payload.params.v_page+"&qtd="+payload.params.qtd+"&dateInitial="+payload.params.dateInitial+"&dateFinal="+payload.params.dateFinal+"", payload) 
    },

    buscaTags: (payload) => {
        // console.log('route' ,"/v1/lista-tags/")
        return api.get("/v1/lista-tags/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd, payload) 
    },

    buscaTagsSearch: (payload) => {
        // console.log('route' ,"/v1/lista-tags-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca)
        return api.get("/v1/lista-tags-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca, payload) 
    },

    //User -------------------------------------------------------------------
    buscaLogin: (payload) => {
        // console.log('route', "/v1/login")
        return api.post("/v1/login", payload) 
    },

    buscaLoginOut: (payload) => {
        console.log('route', "/v1/logout")
        return api.post("/v1/logout", payload) 
    },

    setTokenPush: (payload) => {
        // console.log('route payload' ,payload)
        return api.post("/v1/set-token-push", payload ) 
    },

    //Contato -------------------------------------------------------------------
    sendContact: (payload) => {
        // console.log('route contato' ,payload)
        return  api.post("/v1/contato", payload ) 
    },

}

export { apiRoutes } 