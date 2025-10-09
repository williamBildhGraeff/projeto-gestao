<script>
export default{
  name: 'DialogRegisterReceive',
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

 emits: ['update:modelValue'],

 data: () => ({

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
            class="pa-1"
          >
            <v-select
              density="compact"
              variant="solo"
              hide-details="auto"  
              label="Pessoa"
            >
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
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-1"
          >
            <v-select
              density="compact"
              variant="solo"
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
                    @click="adicionarItem"
                  />
                </v-list-item>
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-1"
          >
            <v-select
              density="compact"
              variant="solo"
              hide-details="auto"
              label="Unidade de medida"
            >
              <template #no-data>
                <v-list-item
                  density="compact"
                  title="Nenhuma unidade de medida encontrada"
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
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="pa-1"
          >
            <v-number-input
              variant="solo"
              density="compact"
              control-variant="default"
              hide-details="auto"
              label="Número"
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
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>