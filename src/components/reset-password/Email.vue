<script>
export default {
    data(){
        return {
            data: {
                email: ''
            }
        }
    }
}
</script>

<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-card>
        <v-card-text 
          class="pa-1"
        >
          <v-text-field
            v-model="data.email"
            label="Digite seu email"
            type="email"
            hide-details="auto"
            variant="outlined"
          />
        </v-card-text>
        <v-card-actions 
          class="pa-1"
        >
          <v-spacer />
          <v-btn
            variant="tonal"
            prepend-icon="mdi-send"
            text="Enviar"
            color="primary"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>