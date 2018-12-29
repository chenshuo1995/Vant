import { get,post } from "./../service/axios.js"
export default {
    vueSync(data){
        return get("https://www.easy-mock.com/mock/5bbab7c41ae8705b71ee9fd4/example/" + data)
    },
}