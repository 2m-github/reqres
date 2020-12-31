import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseURL : 'https://reqres.in/'
});

instance.interceptors.request.use( function(config) {
    console.log('token',store.state.auth.token)
    
    if (store.state.auth.token !== null) {
        config['headers'] = {
            Authorization: `Bearer ${store.state.auth.token}`
        }
    }

    return config;
})

export default instance