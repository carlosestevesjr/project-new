import axios from 'axios';
import Config from '../../config';

const instance = axios.create({
    baseURL: Config.API_POKEMON,
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
})

export const handleError = ({ message, data, status }) => {
    console.log('promisse', data)
    return Promise.reject({ message, data, status })
}

export const resolve = (res) => {
    return Promise.resolve(res)
}

instance.interceptors.request.use(function(config) {
    // console.log('passou', config.baseURL)
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    (res) => {
        return resolve(res)
    },
    (response) => response, ({ message, response: { data, status } }) => {
        console.log('promisse')
        return handleError({ message, data, status })
    },
)

export {
    instance
}