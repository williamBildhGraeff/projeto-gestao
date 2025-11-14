import api from "@/plugins/axios"

export default {
 async list(){
   return api.get('person/')
 },

  async search(id){
   return api.get(`person/${id}`)
 },

 async update(id, params){
   return api.put(`person/${id}/`, params)
 },

 async insert(params){
   return api.post('person/', params)
 },

  async delete(id){
   return api.delete(`person/${id}/`)
 }
}