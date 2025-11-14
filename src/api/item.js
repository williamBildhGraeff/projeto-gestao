import api from "@/plugins/axios"

export default {
 async list(){
   return api.get('item/')
 },

  async search(id){
   return api.get(`item/${id}`)
 },

 async update(id, params){
   return api.put(`item/${id}/`, params)
 },

 async insert(params){
   return api.post('item/', params)
 },

  async delete(id){
   return api.delete(`item/${id}/`)
 }
}