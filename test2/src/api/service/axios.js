import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

export function get(url,data,error) {
    return new Promise((resolve,reject)=>{
        axios.get(url,data).then(res=>{
            resolve(res)
        },err=>{
            err = error ? error : err
            reject(err)
        })   
    })
}

export function post(url,data,error) {
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
            resolve(res)
        },err=>{
            err = error ? error : err
            reject(err)
        })
    })
}