<script>
import people from '@/api/people';
import received from '@/api/received';
import DialogRegisterReceive from '@/components/dialog/receive/DialogRegisterReceive.vue';

export default {
  components: {
DialogRegisterReceive
  },
  
 data: () => ({
  dialogRegisterReceive: false,
 headers: [
  { title: '#', key: 'id' },
    {
      title: 'Pessoa',
      key: 'person',
    },
    { title: 'Item', key: 'item' },
    { title: 'Quantidade', key: 'quantity' },
    { title: 'Data', key: 'date' }
  ],
  people: [],
  receiveds: []
 }),

 computed: {
  tableHeight(){
    return `calc(100vh - 190px)`
  }
 },

 mounted(){
  this.listPeople()
  this.listReceived()
 },

 methods: {
  async listReceived(){
    try {
      let response = await received.list()
      this.receiveds = response.data
    } catch (error) {
      console.error(error)
    }
  },

  getName(id){
    let response = this.people.find(item => item.id == id)
    return response?.name || ''
  },

  async listPeople(){
    try {
      let response = await people.list()
      this.people = response.data
    } catch (error) {
      console.error(error)
    }
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
          density="comfortable"
          @click="dialogRegisterReceive = true"
        />
      </v-col> 
    </v-row>
 
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
        :items="receiveds"
        :items-length="receiveds.length"
        items-per-page-text="Recebimentos por página"
        item-value="name"
      >
        <template #[`item.person`]="{item}">
          {{ getName(item.person) }}
        </template>
        <template #[`item.date`]="{item}">
          {{ $formatDate.ptBr(item.date) }}
        </template>
      </v-data-table-server>
    </v-sheet>
  </v-container>
  <dialog-register-receive
    v-model="dialogRegisterReceive"
    :receive
    @list="listReceived"
  />
</template>