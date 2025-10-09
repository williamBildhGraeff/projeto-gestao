<script>
export default {
  data:() => ({
    items: [
      { key: 1, title: "Recebidos", qtde: 2, total: 101 },
      { key: 2, title: "Doados", qtde: 99, total: 101 }

    ],
    stock: [
        {
          key: 1,
          title: 'Cestas Básicas',
          qtde: 10,
          total: 105,
          localizacao: 'Depósito',
        },
        {
          key: 2,
          title: 'Livros Didáticos',
          qtde: 40,
          total: 105,
          localizacao: 'Depósito',
        },
        {
          key: 3,
          title: 'Kit de Higiene Pessoal',
          qtde: 15,
          total: 105,
          localizacao: 'Depósito',
        },
        {
          key: 4,
          title: 'Agasalhos e Cobertores',
          qtde: 40,
          total: 105,
          localizacao: 'Depósito',
        },
    ]
    
  }),

  computed: {
    tooltip(){
      return (item) =>  {
        let percent =  item.raw.qtde / item.raw.total * 100
        return `${percent.toFixed(2)}%`
      }
    },

    legend(){
      return (item) =>  {
        console.log(item)
        return `${item.title} - ${item.raw.qtde}`
      }
    }
  }
}
</script>
<template>
  <v-sheet
    elevation="5"
    class="pt-2"
  >
    <v-row class="pa-2">      
      <v-col>
        <v-text-field
          hide-details="auto"
          type="date"
          label="Data" 
          append-inner-icon="mdi-calendar"
          variant="outlined" 
          density="compact"
        />
      </v-col>
      <v-col>
        <v-text-field
          hide-details="auto"
          label="Hora"
          type="time"
          variant="outlined"
          density="compact"
        />
      </v-col>
      <v-col>
        <v-text-field
          hide-details="auto"
          label="Data"
          variant="outlined"
          density="compact"
        />
      </v-col>
      <v-col>
        <v-text-field
          hide-details="auto"
          label="Data"
          variant="outlined"
          density="compact"
        />
      </v-col>
    </v-row>
  </v-sheet>

  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-pie 
          title="Doações"
          animation
          size="500"
          :palette="['#048BA8', '#99C24D']"  
          :tooltip="{ subtitleFormat: tooltip }"
          :legend="{ textFormat: legend, position: 'left'}"
          reveal
          item-value="qtde"
          :items="items"
        />
      </v-col>
      <v-col cols="6">
        <v-pie 
          title="Estoque"
          animation
          size="500"
          :palette="['#004c6d', '#056890', '#0885b4', '#08a4d9', '#00c4ff']"  
          :tooltip="{ subtitleFormat: tooltip }"
          :legend="{ textFormat: legend, position: 'right'}"
          reveal
          item-value="qtde"
          :items="stock"
        />
      </v-col>
    </v-row>
  </v-container>
</template>