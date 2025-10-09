<script>
import DialogRegisterReceive from '@/components/dialog/receive/DialogRegisterReceive.vue';

export default {
  components: {
DialogRegisterReceive
  },
  
 data: () => ({
  dialogRegisterReceive: false,
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
      name: 'Helena Ribeiro',
      item: 'Cestas Básicas',
      qtde: 15,
      date: '01/10/2025',
     
    },
    {
      name: 'José Amaro',
      item: 'Livros Didáticos',
      qtde: 80,
      date: '02/10/2025',
    },
    {
      name: 'Carla Nunes',
      item: 'Kit de Higiene Pessoal',
      qtde: 25,
      date: '03/10/2025',
    },
    {
      name: 'Rafaela Borges',
      item: 'Agasalhos e Cobertores',
      qtde: 55,
      date: '04/10/2025',
    }
  ]
 }),

 computed: {
  tableHeight(){
    return `calc(100vh - 300px)`
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
      <v-col class="pa-1">
        <v-btn
          text="Adicionar"
          color="secondary"
          variant="flat"
          prepend-icon="mdi-plus"
          density="comfortable"
          @click="dialogRegisterReceive = true"
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
        color="grey-darken-4"
        :height="tableHeight"
        :headers="headers"
        :items="items"
        :items-length="items.length"
        items-per-page-text="Recebimentos por página"
        item-value="name"
      />
    </v-sheet>
  </v-container>
  <dialog-register-receive
    v-model="dialogRegisterReceive"
    :receive
  />
</template>