import axios from "@/plugins/axios"

export default {
    async createUser(params){
        return await axios.post('/user', params)
    }
}