
import { instance as API }  from './AxiosInstance'

export const api = {
    get: async (route , payload) => await API.get(route, payload.token, { 
        headers: { Authorization: payload.token } 
    }),
    post: async (route, payload) => await API.post(route, payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    put: async (route, payload) => await API.update(route, payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
    delete: async (route, payload) => await API.delete(route, payload.params, payload.token, { 
        headers: { Authorization: token, ...additionalHeaders} 
    }),
}

const apiRoutes = {
    //Pokemon
    buscaPokemon: (payload) => api.get("/pokemon/"+ payload.params.id +"/" , payload), 
    
   
    buscaNews: (payload) =>  {
        console.log('route' ,"/v1/lista-news/?page="+ payload.params.v_page)
        return api.get("/v1/lista-news/?page="+ payload.params.v_page , payload) 
    }, 

    buscaNewsChannel: (payload) => {
        console.log('route' ,"/v1/lista-news-channel-user/"+payload.params.channel_id+"/false?page="+ payload.params.v_page)
        return api.get("/v1/lista-news-channel-user/"+payload.params.channel_id+"/false?page="+ payload.params.v_page , payload) 
    },

    buscaChannels: (payload) => {
        console.log('route' ,"/v1/lista-canais/")
        return api.get("/v1/lista-canais/?page="+ payload.params.v_page, payload) 
    }
}

export { apiRoutes } 

// const apiRoutes = {
//     login: (payload) => api.get("/login", payload),
// }

// export default apiRoutes;