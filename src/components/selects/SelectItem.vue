<script>
import item from '@/api/item';
import DialogItem from '@/components/dialog/item/DialogItem.vue';

export default{

  components: {
    DialogItem
  },

 props: {
  modelValue: {
   type: Number,
   default: null
  }
 },

 emits: ['update:modelValue'],

 data: () => ({
  items: [],
  dialogItem: false
 }),

 computed: {
  value:{
   get(){
    return this.modelValue
   },
   
   set(value){
    this.$emit('update:modelValue', value)
   }
  }
 },

 mounted(){
  this.getItems()
 },

 methods: {
  async getItems(){
   try {
    let response = await item.list()
    this.items = response.data
   } catch (error) {
    console.error(error)
   }
  },

  addItems(){
    this.dialogItem = true
  }
 }
}
</script>
<template>
  <v-select
    v-model="value"
    density="compact"
    :items="items"
    item-title="name"
    item-value="id"
    variant="outlined"
    hide-details="auto"  
    label="Item"
  >
    <template #no-data>
      <v-list-item
        density="compact"
        title="Nenhum item encontrado"
      />
    </template>
    <template #append-item>
      <v-divider />
      <v-list-item
        density="compact"
      >
        <v-btn
          variant="tonal"
          block
          color="info"
          size="small"
          text="Adicionar"
          prepend-icon="mdi-plus"
          @click="addItems"
        />
      </v-list-item>
    </template>  
  </v-select>
  <dialog-item
    v-model="dialogItem"
    @list="getItems"
  />
</template>