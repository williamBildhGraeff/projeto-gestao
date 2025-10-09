import ListReceived from "@/views/pages/received/ListReceived.vue";

export default [
 {
  name: 'Recebimentos',
  path: '/recebimentos',
  component: ListReceived,
  auth: { meta: true }
 }
]