
import axios from 'axios';
import Config from '../../config';

const instance = axios.create({
    baseURL: Config.LOCAL_API_NOCINEMA,
    timeout: 30000,
    // headers: {'AuthorizationApi': ''}
})

export const handleError = ({ message, data, status }) => {
    return Promise.reject({ message, data, status })
}

export const resolve = (res) => {
    return Promise.resolve(res)
}

instance.interceptors.request.use(function(config) {

    // console.log('config', config)
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
});

instance.interceptors.response.use(
    (res) => {
        return resolve(res)
    },
    (response) => response, ({ message, response: { data, status } }) => {
        // console.log('promisse')
        return handleError({ message, data, status })
    },
)

export {
    instance
}