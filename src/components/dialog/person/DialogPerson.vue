<script>
import people from '@/api/people';

 export default {
  props: {
   modelValue: {
    type: Boolean,
    default: false
   },

   person: {
    type: Object,
    default: () => {}
   }
  },

  emits: ['update:modelValue', 'list'],

   data: () => ({
    personFields: {
      type_person: 'PF'
    }
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
    return this.personFields.id ? `Editar pessoa # ${this.personFields.id}` : 'Adicionar pessoa'
   }
  },

  methods: {
    async save(){
      try {
        if(this.personFields.id) {

          await people.update(this.personFields.id, this.personFields) 
        } else {

         let response = await people.insert(this.personFields)
         this.personFields.id = response.data.id
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
    @after-enter="personFields = person"
    @after-leave="personFields = { type_person: 'PF'}"
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
            md="6"
            class="pa-2"
          >
            <v-text-field 
              v-model="personFields.name"
              density="compact"
              variant="outlined"
              hide-details="auto"
              label="Nome"
              aria-required="true"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-text-field 
              v-model="personFields.birth_date"
              variant="outlined"
              type="date"
              density="compact"
              hide-details="auto"
              label="Data de Nascimento"
              aria-required="true"
            />
          </v-col>
          <v-col 
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-radio-group
              v-model="personFields.type_person"
              color="primary"
              inline
            >
              <v-radio
                label="Pessoa Física"
                value="PF"
              />
              <v-radio
                label="Pessoa Jurídica"
                value="PJ"
              />
            </v-radio-group>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-2"
          >
            <v-text-field
              v-if="personFields.type_person == 'PF'"
              v-model="personFields.document"
              v-mask="'###.###.###-##'"
              variant="outlined"
              density="compact"
              hide-details="auto"
              label="CPF"
              aria-required="true"
            />
            <v-text-field 
              v-else
              v-model="personFields.document"
              v-mask="'##.###.###/####-##'"
              variant="outlined"
              density="compact"
              hide-details="auto"
              label="CNPJ"
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