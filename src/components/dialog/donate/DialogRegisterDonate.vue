<script>
import donate from '@/api/donate';
import SelectPeople from '@/components/selects/SelectPeople.vue';

export default{
  name: 'DialogRegisterDonate',

 components:{
  SelectPeople
 },

 props: {
  modelValue: {
   type: Boolean,
   default: false
  },

  donate: {
   type: Object,
   default: () => {}
  }
 },

 emits: ['update:modelValue'],

 data: () => ({
  donateFields: {}
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
   return `${this.donate?.id ? 'Editar' : 'Cadastrar'} doação`
  }
 },

 methods: {
  async save(){
    try {
      await donate.insert(this.donateFields)
    } catch (error) {
      console.error(error)
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
  >
    <v-card>
      <v-toolbar
        color="primary"
        density="compact"
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
            <select-people v-model="donateFields.person" />
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-text-field
              v-model="donateFields.item"
              density="compact"
              variant="outlined"
              hide-details="auto"
              label="Item"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-number-input
              v-model="donateFields.quantity"
              variant="outlined"
              density="compact"
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
          @click="save"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>