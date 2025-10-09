import ListDonate from "@/views/pages/donate/ListDonate.vue";

export default [
 {
  name: 'Doações',
  path: '/doacoes',
  component: ListDonate,
  auth: { meta: true }
 }
]