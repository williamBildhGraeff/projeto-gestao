<script>
import peopleApi from '@/api/people';
import DialogPerson from '../dialog/person/DialogPerson.vue';

export default{

  components: {
    DialogPerson
  },

 props: {
  modelValue: {
   type: Number,
   default: null
  }
 },

 emits: ['update:modelValue'],

 data: () => ({
  people: [],
  person: {},
  dialogPerson: false
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
  },

  editPeople(item){
    this.person = item
    this.dialogPerson = true
  },

  adicionarItem(){
    this.person = { type_person: 'PF'}
    this.dialogPerson = true
  },

  async deletePerson(item){
      try {
        await peopleApi.delete(item.id)
        this.getPeople()
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
    <template #item="{ item, props }">
      <v-list-item
        variant="text"
        v-bind="props"
        :title="item?.raw?.name"
      >
        <template #append>
          <v-btn
            v-tooltip="'Editar pessoa'"
            class="me-2"
            rounded
            color="primary"
            icon="mdi-pen"
            size="x-small"
            variant="tonal"
            @click.stop="editPeople(item.raw)"
          />
          <v-btn
            v-tooltip="'Deletar pessoa'"
            rounded
            color="error"
            icon="mdi-delete"
            size="x-small"
            variant="tonal"
            @click.stop="deletePerson(item.raw)"
          />
        </template>
      </v-list-item>
    </template>
    <template #no-data>
      <v-list-item
        density="compact"
        title="Nenhuma pessoa encontrada"
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
          @click="adicionarItem"
        />
      </v-list-item>
    </template>  
  </v-select>
  <dialog-person
    v-model="dialogPerson"
    :person
    @list="getPeople"
  />
</template>