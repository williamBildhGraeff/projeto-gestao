import api from "@/plugins/axios"

export default {
 async list() {
   return api.get('received/')
 },

 async insert(params){
    return api.post('received/', params)
  }
}