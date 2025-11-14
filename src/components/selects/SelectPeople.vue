<script>
import peopleApi from '@/api/people';

export default{
 props: {
  modelValue: {
   type: Number,
   default: null
  }
 },

 emits: ['update:modelValue'],

 data: () => ({
  people: []
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
  this.getPeople()
 },

 methods: {
  async getPeople(){
   try {
    let response = await peopleApi.list()
    this.people = response.data
   } catch (error) {
    console.error(error)
   }
  }
 }
}
</script>
<template>
  <v-select
    v-model="value"
    density="compact"
    :items="people"
    item-title="name"
    item-value="id"
    variant="outlined"
    hide-details="auto"  
    label="Pessoa"
  >
    <template #no-data>
      <v-list-item
        density="compact"
        title="Nenhuma pessoa encontrada"
      />
    </template>
    <!-- <template #append-item>
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
          @click="adicionarItem"
        />
      </v-list-item>
    </template>   -->
  </v-select>
</template>