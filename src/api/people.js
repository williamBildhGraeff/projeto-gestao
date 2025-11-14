import api from "@/plugins/axios"

export default {
 async list(){
   return api.get('person/')
 }
}