import http from './http';
import store from '@/store'

// export async function loginAPI(info){
//     return new Promise((resolve, reject) => {
//         http.post('/api/login',info)
//         .then( res => {
//             console.log('login info', res)
//             resolve(res.data)
//             store.commit( 'auth/setToken', res.data.token);
//         })
//         .catch( e => {
//             console.log('login error',e)
//             reject(e)
//         })
//     })
    
// }

export async function loginAPI(info){
    const response = await http.post('/api/login',info)
        
    if(response.status === 200){
        store.commit( 'auth/setToken', response.data.token);
    }
    return response;
}

export function getUsersAPI(){
    return new Promise((resolve, reject) => {
        return http.get('/api/users?page=2')
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

