import ListStock from "@/views/pages/stock/ListStock.vue";

export default [
 {
  name: 'Estoque',
  path: '/estoque',
  component: ListStock,
  auth: { meta: true }
 }
]