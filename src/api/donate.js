import api from "@/plugins/axios"

export default {
 async list(){
   return api.get('donate/')
 },

 async insert(params){
   return api.post('donate/', params)
 }
}