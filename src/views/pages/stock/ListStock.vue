<script>
import DialogRegisterReceive from '@/components/dialog/receive/DialogRegisterReceive.vue';

export default {
  components: {
DialogRegisterReceive
  },
  
 data: () => ({
  dialogRegisterReceive: false,
 headers: [
    { title: 'Item', key: 'item', align: 'start' },
    { title: 'Quantidade', key: 'qtde', align: 'center' },
    { title: 'Localização', key: 'localizacao', align: 'center' }
  ],

 items: [
    {
      item: 'Cestas Básicas',
      qtde: 10,
      localizacao: 'Depósito',
    },
    {
      item: 'Livros Didáticos',
      qtde: 40,
      localizacao: 'Depósito',
    },
    {
      item: 'Kit de Higiene Pessoal',
      qtde: 15,
      localizacao: 'Depósito',
    },
    {
      item: 'Agasalhos e Cobertores',
      qtde: 40,
      localizacao: 'Depósito',
    },
  ]
 }),

 computed: {
  tableHeight(){
    return `calc(100vh - 255px)`
  }
 }
}
</script>

<template>
  <v-sheet
    elevation="5"
    class="pt-2"
  >
    <v-row
      class="pa-1"
      no-gutters
    >
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-text-field 
          label="Data Inicial"
          variant="outlined" 
          density="compact"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-text-field 
          label="Hora Inicial"
          variant="outlined" 
          density="compact"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-text-field 
          label="Data Final"
          variant="outlined" 
          density="compact"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-text-field 
          label="Hora Final"
          variant="outlined" 
          density="compact"
          hide-details="auto"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-text-field 
          label="CPF"
          variant="outlined" 
          density="compact"
          hide-details="auto"
        />
      </v-col>
      <v-spacer />
      <v-col
        cols="12"
        md="3"
        class="pa-1"
      >
        <v-btn 
          block
          text="Buscar"
          prepend-icon="mdi-magnify"
          color="primary"
          variant="flat"
        />
      </v-col>
    </v-row>
  </v-sheet>
  <v-container fluid>
    <v-sheet 
      border="rounded"
      elevation="20"
    >
      <v-data-table-server
        density="compact"
        :height="tableHeight"
        color="grey-darken-4"
        :headers="headers"
        :items="items"
        :items-length="items.length"
        items-per-page-text="Itens por página"
        item-value="name"
      />
    </v-sheet>
  </v-container>
  <dialog-register-receive
    v-model="dialogRegisterReceive"
    :receive
  />
</template>