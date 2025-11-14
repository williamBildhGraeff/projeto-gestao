<script>
import item from '@/api/item';

 export default {
  props: {
   modelValue: {
    type: Boolean,
    default: false
   },

   item: {
    type: Object,
    default: () => {}
   }
  },

  emits: ['update:modelValue', 'list'],

   data: () => ({
    itemFields: {}
   }),

  computed: {
   value: {
    get() {
     return this.modelValue
    },

    set(value) {
     this.$emit('update:modelValue', value)
    }
   },

   title(){
    return this.itemFields?.id ? `Editar item # ${this.itemFields.id}` : 'Adicionar item'
   }
  },

  methods: {
    async save(){
      try {
        if(this.itemFields.id) {

          await item.update(this.itemFields.id, this.itemFields) 
        } else {

         let response = await item.insert(this.itemFields)
         this.itemFields.id = response.data.id
        }
        
          this.$emit('list')
      } catch (error) {
        console.error(error)
      }
    },
  }
 }
</script>

<template>
  <v-dialog
    v-model="value"
    max-width="800"
    @after-leave="itemFields = {}"
  >
    <v-card class="h-100">
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
            class="pa-2"
          >
            <v-text-field 
              v-model="itemFields.name"
              density="compact"
              variant="outlined"
              hide-details="auto"
              label="Nome"
              aria-required="true"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          variant="tonal"
          text="Salvar"
          prepend-icon="mdi-content-save"
          color="success"
          @click="save"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>