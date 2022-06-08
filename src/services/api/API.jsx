
import { instance as API }  from './AxiosInstance'

export const api = {
    get: async (route , payload) => await API.get(route, payload.token, { 
        headers: { Authorization: payload.token} 
    }),
    post: async (route , payload) => await API.post(route, payload.params, payload.token, { 
        headers: { Authorization: payload.token}  
    }),
    put: async (route, payload) => await API.update(route, payload.params, payload.token, { 
        headers: { Authorization: payload.token} 
    }),
    delete: async (route, payload) => await API.delete(route, payload.params, payload.token, { 
        headers: { Authorization: payload.token} 
    }),
}

const apiRoutes = {
    //Pokemon
    buscaPokemon: (payload) => api.get("/pokemon/"+ payload.params.id +"/" , payload), 
    
    buscaNews: (payload) => {
        // console.log('route' ,"/v1/lista-news/?page="+ payload.params.v_page)
        return api.get("/v1/lista-news?page="+ payload.params.v_page+"&qtd="+payload.params.qtd, payload)  
    }, 

    buscaSearchNews: (payload) => {
        // console.log('/v1/lista-news-search' , payload)
        return api.post("/v1/lista-news-search", payload) 
    },

    buscaNewsChannel: (payload) => {
        // console.log('route' ,"/v1/lista-news-channel-user/"+payload.params.channel_id+"/false?page="+ payload.params.v_page)
        return api.get("/v1/lista-news-channel-user/"+payload.params.channel_id+"/false?page="+ payload.params.v_page , payload) 
    },

    buscaChannels: (payload) => {
        // console.log('route' ,"/v1/lista-canais/")
        return api.get("/v1/lista-canais/?page="+ payload.params.v_page, payload) 
    },

    buscaNewsTag: (payload) => {
        // console.log('route' ,"/v1/lista-news-tag-user/"+payload.params.tag_id+"/false?page="+ payload.params.v_page)
        return api.get("/v1/lista-news-tag-user/"+payload.params.tag_id+"/false?page="+ payload.params.v_page , payload) 
    },

    buscaTagsRecents: (payload) => {
        // console.log('route' ,"/v1/lista-tags-recentes?page="+payload.params.v_page+"&qtd="+payload.params.qtd+"&dateInitial="+payload.params.dateInitial+"&dateFinal="+payload.params.dateFinal+"")
        return api.get("/v1/lista-tags-recentes?page="+payload.params.v_page+"&qtd="+payload.params.qtd+"&dateInitial="+payload.params.dateInitial+"&dateFinal="+payload.params.dateFinal+"", payload) 
    },

    //Tags -------------------------------------------------------------------
    
    buscaTags: (payload) => {
        // console.log('route' ,"/v1/lista-tags/")
        return api.get("/v1/lista-tags/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd, payload) 
    },

    buscaTagsSearch: (payload) => {
        // console.log('route' ,"/v1/lista-tags-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca)
        return api.get("/v1/lista-tags-search/?page="+ payload.params.v_page+"&qtd="+payload.params.qtd+"&search="+payload.params.busca, payload) 
    },

    //User
    setTokenPush: (payload) => {
        // console.log('route payload' ,payload)
        return api.post("/v1/set-token-push", payload ) 
    },

    //Contato
    sendContact: (payload) => {
        // console.log('route contato' ,payload)
        return  api.post("/v1/contato", payload ) 
    },

}

export { apiRoutes } 