<script>
import received from '@/api/received';
import SelectPeople from '@/components/selects/SelectPeople.vue';
import SelectItem from '@/components/selects/SelectItem.vue';

export default{
  name: 'DialogRegisterReceive',

  components:{
  SelectPeople,
  SelectItem
 },
  props: {
    modelValue: {
    type: Boolean,
    default: false
    },

    receive: {
    type: Object,
    default: () => {}
    }
 },

 emits: ['update:modelValue', 'list'],

 data: () => ({
  receivedFields: {},
  loading: false,
  items: []
 }),

 computed: {
  value: {
   get(){
    return this.modelValue
   },

   set(value) {
    this.$emit('update:modelValue', value)
   }
  },

  title(){
   return `${this.receive?.id ? 'Editar' : 'Cadastrar'} recebimento`
  },
 },

 methods: {
  async save(){
    try {
      this.loading = true
      await received.insert(this.receivedFields)
      this.$emit('list')
    } catch (error) {
      console.error(error)
    } finally {
      this.loading = false
    }
  }
 }
}
</script>

<template>
  <v-dialog
    v-model="value"
    persistent
    max-width="600"
    @after-enter="receivedFields = {}"
  >
    <v-card>
      <v-toolbar
        color="primary"
        density="compact"
        :loading
        :title="title"
      >
        <v-toolbar-items>
          <v-btn 
            icon="mdi-close"
            @click="value = false"
          />
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text class="pa-3">
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <select-people v-model="receivedFields.person_id" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <select-item v-model="receivedFields.item_id" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-number-input
              v-model="receivedFields.quantity"
              variant="outlined"
              density="compact"
              :min="1"
              control-variant="default"
              hide-details="auto"
              label="Quantidade"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          text="Salvar"
          prepend-icon="mdi-content-save"
          size="small"
          variant="tonal"
          color="success"
          :loading
          @click="save"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>