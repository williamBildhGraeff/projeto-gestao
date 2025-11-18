<script>
import item from '@/api/item';
import stock from '@/api/stock';

export default {
  
 data: () => ({
  dialogRegisterReceive: false,
 headers: [
    { title: 'Item', key: 'item_name' },
    { title: 'Recebidos', key: 'total_received' },
    { title: 'Doados', key: 'total_donated' },
    { title: 'Estoque', key: 'estoque' }
  ],

  stockItems: []
 }),

 computed: {
  tableHeight(){
    return `calc(100vh - 144px)`
  }
 },

  mounted(){
    this.listStock()
  },

 methods: {

   async listStock(){
     try {
       let response = await stock.list()
       this.stockItems = response.data
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>

<template>
  <!-- <v-sheet
    elevation="5"
    class="pt-2"
  > -->
  <!-- <v-row
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
    </v-row> -->
  <!-- </v-sheet> -->
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
        :items="stockItems"
        :items-length="stockItems.length"
        items-per-page-text="Itens por página"
        item-value="name"
      />
    </v-sheet>
  </v-container>
</template>