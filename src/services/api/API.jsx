
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
    buscaPokemon: (payload) => api.get("/pokemon/"+ payload.params.id +"/" , payload) 
}

export { apiRoutes } 

// const apiRoutes = {
//     login: (payload) => api.get("/login", payload),
// }

// export default apiRoutes;