import axios from 'axios'
import store from '@/store'

const instance = axios.create({
    baseURL : 'https://reqres.in/'
});

instance.interceptors.request.use( function(config) {
    console.log('token',store.state.auth.token,config)
    
    if (store.state.auth.token !== null) {
        config['headers'] = {
            Authorization: `Bearer ${store.state.auth.token}`        
        }
    }

    return config;
})

instance.interceptors.response.use( 
    function(response) {
        console.log('token',store.state.auth.token,response)
        
        if (store.state.auth.token !== null) {
            config['headers'] = {
                Authorization: `Bearer ${store.state.auth.token}`        
            }
        }
        console.log('인터셉터 성공',response)
        return response;
    },
    function(error){
        console.log('인터셉터 에러',error)
        return Promise.reject(error)
    }

)

export default instance