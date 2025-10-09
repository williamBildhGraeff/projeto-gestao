<script>
import DialogRegisterDonate from '@/components/dialog/donate/DialogRegisterDonate.vue';

export default {

  components: {
    DialogRegisterDonate
  },
 data: () => ({
  dialogRegisterDonate: false,
  donate: {},
 headers: [
    {
      title: 'Nome',
      align: 'start',
      sortable: false, 
      key: 'name',
    },
    { title: 'Item', key: 'item', align: 'center' },
    { title: 'Quantidade', key: 'qtde', align: 'center' },
    { title: 'Data', key: 'date', align: 'center' }
  ],

 items: [
    {
      name: 'Família Santos',
      item: 'Cestas Básicas', 
      qtde: 5,
      date: '05/10/2025',
    },
    {
      name: 'Escola Municipal Alegria',
      item: 'Livros Didáticos', 
      qtde: 40,
      date: '06/10/2025'
    },
    {
      name: 'Centro de Acolhimento Flores',
      item: 'Kit de Higiene Pessoal',
      qtde: 10,
      date: '07/10/2025',
      
    },
    {
      name: 'Maria Lúcia Pires',
      item: 'Agasalhos e Cobertores', 
      qtde: 15,
      date: '08/10/2025'
    },
  ]
 }),

 computed: {
  tableHeight(){
    return `calc(100vh - 285px)`
  }
 }
}
</script>

<template>
  <v-sheet
    elevation="5"
    class="pa-0"
  >
    <v-row
      class="pa-1"
      no-gutters
    >
      <v-col class="pa-1">
        <v-btn
          text="Adicionar"
          color="secondary"
          variant="flat"
          prepend-icon="mdi-plus"
          size="small"
          @click="dialogRegisterDonate = true"
        />
      </v-col> 
    </v-row>
 
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
          color="primary"
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
      <v-col cols="1" />
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
  <v-container
    fluid
  >
    <v-sheet 
      border="rounded"
      elevation="20"
    >
      <v-data-table-server
        density="compact"
        color="grey-darken-4"
        :height="tableHeight"
        :headers="headers"
        :items="items"
        :items-length="items.length"
        items-per-page-text="Doações por página"
        item-value="name"
      />
    </v-sheet>
  </v-container>
  <dialog-register-donate
    v-model="dialogRegisterDonate"
    :donate
  />
</template>